/*! For license information please see vendors.a2c64825c79a5f287448.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [263], {
        5430: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(9614),
                o = r(5948),
                s = r(9941),
                i = r(7467),
                c = n(r(9961)),
                l = n(r(461));
            class WAVESCoin extends l.default {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: {
                        fee: r
                    },
                    explorers: n,
                    txWebUrl: a,
                    socket: o
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "Waves",
                        ticker: "WAVES",
                        decimal: 8,
                        derivation: "m/44'/5741564'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: n,
                        txWebUrl: a,
                        socket: o
                    }), this.fee = r, this.transactions = []
                }
                async loadWallet(e, t) {
                    try {
                        const e = new a.SeedAdapter(t);
                        return this.privateKey = await e.getPrivateKey(), this.address = await e.getAddress(), this
                    } catch (e) {
                        throw new Error(this.ticker + " privateKey is empty!!!")
                    }
                }
                getPublicKeyArray() {
                    const e = o.libs.base58.decode(this.privateKey);
                    return c.default.getPublicKeyFromPrivate(e)
                }
                getAddress() {
                    return this.privateKey ? o.utils.crypto.buildRawAddress(this.getPublicKeyArray()) : new Error(this.ticker + " privateKey is empty!!!")
                }
                getPublicAddress() {
                    return this.privateKey ? o.libs.base58.encode(this.getPublicKeyArray()) : new Error(this.ticker + " privateKey is empty!!!")
                }
                async validateAddress(e) {
                    try {
                        return o.utils.crypto.isValidAddress(e)
                    } catch (t) {
                        throw new Error(`Fail to validate ${this.ticker} address [${e}]`)
                    }
                }
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    const r = (await this.getFee()).toNumber(),
                        n = (0, s.transfer)({
                            amount: Number(t),
                            recipient: e,
                            fee: r,
                            senderPublicKey: this.getPublicAddress()
                        }),
                        a = i.binary.serializeTx(n);
                    return n.proofs.push(o.utils.crypto.buildTransactionSignature(a, this.privateKey)), JSON.stringify(n)
                }
            }
            var u = WAVESCoin;
            t.default = u
        },
        5543: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(6081),
                a = r(9948),
                o = r(9949),
                s = r(9950);
            t.json = s;
            const i = r(6257);
            t.serializePrimitives = i;
            const c = r(6653);
            t.parsePrimitives = c;
            const l = r(6081);
            t.schemas = l;
            const u = {
                serializerFromSchema: a.serializerFromSchema,
                serializeTx: a.serializeTx,
                serializeOrder: a.serializeOrder,
                parserFromSchema: o.parserFromSchema,
                parseTx: o.parseTx,
                parseOrder: o.parseOrder
            };

            function d(e, t, r, n) {
                const s = a.serializerFromSchema(t, n),
                    i = o.parserFromSchema(t, r)(s(e)).value;
                return Object.assign({}, e, i)
            }
            t.binary = u, t.convertLongFields = d, t.convertTxLongFields = function(e, t, r) {
                const {
                    type: a,
                    version: o
                } = e;
                return d(e, n.getTransactionSchema(a, o), t, r)
            }
        },
        5549: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(937),
                a = r(9942),
                o = r(9943),
                s = r(9944),
                i = r(9945);

            function c(e, r = "W") {
                const n = [1, r.charCodeAt(0)],
                    a = p(e).slice(0, 20),
                    o = t.concat(n, a),
                    i = Uint8Array.from(p(o).slice(0, 4));
                return s.default.encode(t.concat(o, i))
            }

            function l(e, r) {
                const n = [0, 0, 0, 0];
                if (r && r > 0) {
                    let e = r;
                    for (let t = 3; t >= 0; t--) n[3 - t] = Math.floor(e / Math.pow(2, 8 * t)), e %= Math.pow(2, 8 * t)
                }
                return y(p(t.concat(n, e)))
            }

            function u(e) {
                const t = e.length,
                    r = [];
                for (let n = 0; n < t; n++) r[n >>> 2] |= (255 & e[n]) << 24 - n % 4 * 8;
                return n.lib.WordArray.create(r, t)
            }

            function d(e) {
                let t = e.words,
                    r = e.sigBytes,
                    n = new Uint8Array(r);
                for (let e = 0; e < r; e++) {
                    let r = t[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    n[e] = r
                }
                return n
            }

            function f(e) {
                return a.blake2b(e, null, 32)
            }

            function h(e) {
                return o.keccak256.array(e)
            }

            function y(e) {
                const t = u(e);
                return d(n.SHA256(t))
            }

            function p(e) {
                return Uint8Array.from(h(f(e)))
            }

            function m(e, t) {
                const n = r(24).randomBytes(e);
                switch (t.type) {
                    case "Array":
                        return [].slice.call(n);
                    case "Buffer":
                        return n;
                    case "Uint8Array":
                        return Uint8Array.from(n);
                    default:
                        throw new Error(t.type + " is unsupported.")
                }
            }
            t.libs = {
                CryptoJS: n,
                blake: a,
                keccak256: o.keccak256,
                base58: s.default,
                axlsign: i.default
            }, t.concat = (...e) => e.reduce((e, t) => Uint8Array.from([...e, ...t]), new Uint8Array(0)), t.buildAddress = c, t.buildSeedHash = l, t.stringToUint8Array = e => Uint8Array.from([...unescape(encodeURIComponent(e))].map(e => e.charCodeAt(0))), t.publicKeyToString = e => "string" == typeof e ? e : e instanceof Uint8Array ? t.base58encode(e) : e.public, t.ADDRESS_LENGTH = 26, t.PUBLIC_KEY_LENGTH = 32, t.PRIVATE_KEY_LENGTH = 32, t.SIGNATURE_LENGTH = 64, t.blake2b = f, t.keccak = h, t.sha256 = y, t.base58encode = e => s.default.encode(e), t.base58decode = e => s.default.decode(e), t.keyPair = e => {
                const r = l(t.stringToUint8Array(e)),
                    n = i.default.generateKeyPair(r);
                return {
                    private: s.default.encode(n.private),
                    public: s.default.encode(n.public)
                }
            }, t.publicKey = e => t.keyPair(e).public, t.privateKey = e => t.keyPair(e).private, t.address = (e, r = "W") => "string" == typeof e ? t.address(t.keyPair(e), r) : c(s.default.decode(e.public), r), t.signBytes = (e, r) => t.signWithPrivateKey(e, t.privateKey(r)), t.verifySignature = (e, r, n) => {
                const a = s.default.decode(n);
                return a.length == t.SIGNATURE_LENGTH && i.default.verify(s.default.decode(e), r, a)
            }, t.arraysEqual = function(e, t) {
                if (e === t) return !0;
                if (null == e || null == t) return !1;
                if (e.length != t.length) return !1;
                for (var r = 0; r < e.length; ++r)
                    if (e[r] !== t[r]) return !1;
                return !0
            }, t.hashBytes = e => s.default.encode(f(e)), t.signWithPrivateKey = (e, t) => {
                const r = s.default.decode(t),
                    n = i.default.sign(r, e, w(64));
                return s.default.encode(n)
            };
            const g = "undefined" != typeof window && "[object Window]" === {}.toString.call(window),
                b = "undefined" != typeof global && "[object global]" === {}.toString.call(global),
                v = void 0 !== process.env.JEST_WORKER_ID;

            function S(e, t) {
                if (t = t || {
                        type: "Array"
                    }, g) return function(e, t) {
                    const r = new Uint8Array(e);
                    switch ((global.crypto || global.msCrypto).getRandomValues(r), t.type) {
                        case "Array":
                            return [].slice.call(r);
                        case "Buffer":
                            try {
                                new Buffer(1)
                            } catch (e) {
                                throw new Error("Buffer not supported in this environment. Use Node.js or Browserify for browser support.")
                            }
                            return new Buffer(r);
                        case "Uint8Array":
                            return r;
                        default:
                            throw new Error(t.type + " is unsupported.")
                    }
                }(e, t);
                if (b) return m(e, t);
                if (v) return m(e, t);
                throw new Error("Your environment is not defined")
            }

            function w(e) {
                return S(e, {
                    type: "Uint8Array"
                })
            }
            t.randomUint8Array = w;
            let A, T = {},
                E = [];
            for (A = 0; A <= 9; ++A) {
                let e = A.toString();
                T[e] = A, E.push(e)
            }
            for (A = 10; A <= 15; ++A) {
                let e = String.fromCharCode("a".charCodeAt(0) + A - 10),
                    t = String.fromCharCode("A".charCodeAt(0) + A - 10);
                T[e] = A, T[t] = A, E.push(e)
            }

            function P(e, r = "waves") {
                let a = null;
                try {
                    if (a = t.base58decode(e), !a || a.length < 32) throw new Error("Invalid sharedKey length")
                } catch (e) {
                    throw e
                }
                const o = t.stringToUint8Array(r),
                    s = new Uint8Array(a.length + o.length);
                s.set(a), s.set(o, a.length);
                return {
                    KEK: n.SHA256(u(s)),
                    P: o
                }
            }
            t.byteArrayToHexString = function(e) {
                let t = "";
                for (let r = 0; r < e.length; ++r) e[r] < 0 && (e[r] += 256), t += E[e[r] >> 4] + E[15 & e[r]];
                return t
            }, t.hexStringToByteArray = function(e) {
                let t = [],
                    r = 0;
                for (0 != e.length % 2 && (t.push(T[e.charAt(0)]), ++r); r < e.length - 1; r += 2) t.push((T[e.charAt(r)] << 4) + T[e.charAt(r + 1)]);
                return t
            }, t.getSharedKey = function(e, r) {
                const n = t.base58decode(e),
                    a = t.base58decode(r);
                return i.default.sharedKey(n, a)
            }, t.getKEK = P, t.encryptMessage = function(e, t, r = "waves") {
                const {
                    KEK: a,
                    P: o
                } = P(e, r), s = n.enc.Utf8.parse(t), i = w(32), c = u(i), l = w(16), f = i.map((e, t) => e | o[t % o.length]), h = n.AES.encrypt(s, c, {
                    iv: u(l),
                    mode: n.mode.CTR
                }), y = n.enc.Base64.parse(h.toString()), p = n.HmacSHA256(s, c), m = n.enc.Base64.parse(n.AES.encrypt(c, a, {
                    mode: n.mode.ECB
                }).toString()), g = n.HmacSHA256(u(f), a), b = d(m), v = d(g), S = d(y), A = d(p), T = new Uint8Array(b.length + v.length + S.length + A.length + l.length);
                return T.set(b), T.set(v, b.length), T.set(S, b.length + v.length), T.set(A, b.length + v.length + S.length), T.set(l, b.length + v.length + S.length + A.length), n.enc.Base64.stringify(u(T))
            }, t.decryptMessage = function(e, t, r = "waves") {
                const {
                    KEK: a,
                    P: o
                } = P(e, r), s = d(n.enc.Base64.parse(t)), i = s.slice(-16), c = s.slice(-48, -16), l = s.slice(0, 48), f = s.slice(48, 80), h = s.slice(80, -48), y = u(d(n.AES.decrypt(n.enc.Base64.stringify(u(l)), a, {
                    mode: n.mode.ECB
                }))), p = d(y).map((e, t) => e | o[t % o.length]);
                if (!d(n.HmacSHA256(u(p), a)).every((e, t) => e === f[t])) throw new Error("Invalid message");
                const m = n.AES.decrypt(n.enc.Base64.stringify(u(h)), y, {
                    iv: u(i),
                    mode: n.mode.CTR
                });
                if (!d(n.HmacSHA256(u(d(m)), y)).every((e, t) => e === c[t])) throw new Error("Invalid message");
                return m.toString(n.enc.Utf8)
            }
        },
        5584: function(e, t, r) {
            "use strict";
            var n = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(a, o) {
                        function s(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function i(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(e) {
                            e.done ? a(e.value) : new r((function(t) {
                                t(e.value)
                            })).then(s, i)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const o = r(5549),
                s = a(r(556));
            t.mapObj = (e, t) => Object.entries(e).map(([e, r]) => [e, t(r)]).reduce((e, [t, r]) => Object.assign({}, e, {
                [t]: r
            }), {}), t.getSenderPublicKey = function(e, t) {
                if (0 === e.length && null == t.senderPublicKey) throw new Error("Please provide either seed or senderPublicKey");
                return t.senderPublicKey || o.publicKey(e[0][0])
            }, t.base64Prefix = e => null == e || "base64:" === e.slice(0, 7) ? e : "base64:" + e, t.addProof = function(e, t, r) {
                if (null == r) return e.proofs = [...e.proofs, t], e;
                if (null != e.proofs && e.proofs[r]) throw new Error(`Proof at index ${r} already exists.`);
                for (let t = e.proofs.length; t < r; t++) e.proofs.push("");
                return e.proofs[r] = t, e
            }, t.convertToPairs = function(e) {
                return null == e ? [] : "string" == typeof e ? [
                    [e, void 0]
                ] : Array.isArray(e) ? e.map((e, t) => [e, t]).filter(([e, t]) => e) : Object.keys(e).map(e => parseInt(e)).filter(e => !isNaN(e)).sort().map(t => [e[t], t])
            }, t.isOrder = e => void 0 !== e.assetPair, t.delay = e => {
                const t = {},
                    r = new Promise((r, n) => {
                        t.resolve = r, t.id = setTimeout(() => r(), e)
                    });
                return r.cancel = () => {
                    t.resolve(), clearTimeout(t.id)
                }, r
            }, t.waitForTx = (e, r, a) => n(this, void 0, void 0, (function*() {
                let n = !1;
                const o = t.delay(r);
                o.then(() => n = !0);
                const i = () => s.default.get("transactions/info/" + e, {
                    baseURL: a
                }).then(e => (o.cancel(), e.data)).catch(e => t.delay(1e3).then(e => n ? Promise.reject(new Error("Tx wait stopped: timeout")) : i()));
                return i()
            })), t.networkByte = function(e, t) {
                switch (typeof e) {
                    case "string":
                        return e.charCodeAt(0);
                    case "number":
                        return e;
                    default:
                        return t
                }
            }, t.fee = function(e, t) {
                return e.fee ? e.fee : e.additionalFee ? t + e.additionalFee : t
            }
        },
        5619: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e[e.GENESIS = 1] = "GENESIS", e[e.PAYMENT = 2] = "PAYMENT", e[e.ISSUE = 3] = "ISSUE", e[e.TRANSFER = 4] = "TRANSFER", e[e.REISSUE = 5] = "REISSUE", e[e.BURN = 6] = "BURN", e[e.EXCHANGE = 7] = "EXCHANGE", e[e.LEASE = 8] = "LEASE", e[e.CANCEL_LEASE = 9] = "CANCEL_LEASE", e[e.ALIAS = 10] = "ALIAS", e[e.MASS_TRANSFER = 11] = "MASS_TRANSFER", e[e.DATA = 12] = "DATA", e[e.SET_SCRIPT = 13] = "SET_SCRIPT", e[e.SPONSORSHIP = 14] = "SPONSORSHIP", e[e.SET_ASSET_SCRIPT = 15] = "SET_ASSET_SCRIPT", e[e.INVOKE_SCRIPT = 16] = "INVOKE_SCRIPT"
                }(t.TRANSACTION_TYPE || (t.TRANSACTION_TYPE = {})),
                function(e) {
                    e.INTEGER = "integer", e.BOOLEAN = "boolean", e.BINARY = "binary", e.STRING = "string"
                }(t.DATA_FIELD_TYPE || (t.DATA_FIELD_TYPE = {}))
        },
        6081: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(6257),
                a = r(6653),
                o = r(9947);
            var s;
            ! function(e) {
                e[e.GENESIS = 1] = "GENESIS", e[e.PAYMENT = 2] = "PAYMENT", e[e.ISSUE = 3] = "ISSUE", e[e.TRANSFER = 4] = "TRANSFER", e[e.REISSUE = 5] = "REISSUE", e[e.BURN = 6] = "BURN", e[e.EXCHANGE = 7] = "EXCHANGE", e[e.LEASE = 8] = "LEASE", e[e.CANCEL_LEASE = 9] = "CANCEL_LEASE", e[e.ALIAS = 10] = "ALIAS", e[e.MASS_TRANSFER = 11] = "MASS_TRANSFER", e[e.DATA = 12] = "DATA", e[e.SET_SCRIPT = 13] = "SET_SCRIPT", e[e.SPONSORSHIP = 14] = "SPONSORSHIP", e[e.SET_ASSET_SCRIPT = 15] = "SET_ASSET_SCRIPT", e[e.INVOKE_SCRIPT = 16] = "INVOKE_SCRIPT"
            }(s = t.TRANSACTION_TYPE || (t.TRANSACTION_TYPE = {}));
            const i = {
                    toBytes: n.SHORT,
                    fromBytes: a.P_SHORT
                },
                c = {
                    toBytes: n.INT,
                    fromBytes: a.P_INT
                };
            var l;
            ! function(e) {
                e.longField = e => [e, {
                    toBytes: n.LONG,
                    fromBytes: a.P_LONG
                }], e.byteField = e => [e, {
                    toBytes: n.BYTE,
                    fromBytes: a.P_BYTE
                }], e.booleanField = e => [e, {
                    toBytes: n.BOOL,
                    fromBytes: a.P_BOOLEAN
                }], e.stringField = e => [e, {
                    toBytes: n.LEN(n.SHORT)(n.STRING),
                    fromBytes: a.P_STRING_VAR(a.P_SHORT)
                }], e.base58field32 = e => [e, {
                    toBytes: n.BASE58_STRING,
                    fromBytes: a.P_BASE58_FIXED(32)
                }], e.base58Option32 = e => [e, {
                    toBytes: n.OPTION(n.BASE58_STRING),
                    fromBytes: a.P_OPTION(a.P_BASE58_FIXED(32))
                }], e.base64field = e => [e, {
                    toBytes: n.LEN(n.SHORT)(n.BASE64_STRING),
                    fromBytes: a.P_BASE64(a.P_SHORT)
                }], e.byteConstant = e => ["noname", {
                    toBytes: () => Uint8Array.from([e]),
                    fromBytes: () => ({
                        value: void 0,
                        shift: 1
                    })
                }], e.alias = ["alias", {
                    toBytes: n.LEN(n.SHORT)(n.STRING),
                    fromBytes: a.byteNewAliasToString
                }], e.amount = e.longField("amount"), e.assetDescription = e.stringField("description"), e.assetId = e.base58field32("assetId"), e.assetName = e.stringField("name"), e.attachment = ["attachment", {
                    toBytes: n.LEN(n.SHORT)(n.BASE58_STRING),
                    fromBytes: a.P_BASE58_VAR(a.P_SHORT)
                }], e.chainId = e.byteField("chainId"), e.decimals = e.byteField("decimals"), e.fee = e.longField("fee"), e.leaseAssetId = e.base58Option32("leaseAssetId"), e.leaseId = e.base58field32("leaseId"), e.optionalAssetId = e.base58Option32("assetId"), e.quantity = e.longField("quantity"), e.reissuable = e.booleanField("reissuable"), e.recipient = ["recipient", {
                    toBytes: n.BASE58_STRING,
                    fromBytes: a.byteToAddressOrAlias
                }], e.script = ["script", {
                    toBytes: n.SCRIPT,
                    fromBytes: a.byteToScript
                }], e.senderPublicKey = e.base58field32("senderPublicKey"), e.signature = ["signature", {
                    toBytes: n.BASE58_STRING,
                    fromBytes: a.P_BASE58_FIXED(64)
                }], e.timestamp = e.longField("timestamp"), e.type = e.byteField("type"), e.version = e.byteField("version"), e.proofs = ["proofs", {
                    type: "array",
                    items: {
                        toBytes: n.LEN(n.SHORT)(n.BASE58_STRING),
                        fromBytes: a.P_BASE58_VAR(a.P_SHORT)
                    }
                }];
                const t = {
                    type: "object",
                    schema: [e.recipient, e.amount]
                };
                e.transfers = ["transfers", {
                    type: "array",
                    items: t
                }];
                const r = {
                    type: "dataTxField",
                    items: new Map([
                        [o.DATA_FIELD_TYPE.INTEGER, {
                            toBytes: n.LONG,
                            fromBytes: a.P_LONG
                        }],
                        [o.DATA_FIELD_TYPE.BOOLEAN, {
                            toBytes: n.BOOL,
                            fromBytes: a.P_BOOLEAN
                        }],
                        [o.DATA_FIELD_TYPE.BINARY, {
                            toBytes: n.LEN(n.SHORT)(n.BASE64_STRING),
                            fromBytes: a.P_BASE64(a.P_SHORT)
                        }],
                        [o.DATA_FIELD_TYPE.STRING, {
                            toBytes: n.LEN(n.SHORT)(n.STRING),
                            fromBytes: a.P_STRING_VAR(a.P_SHORT)
                        }]
                    ])
                };
                e.data = ["data", {
                    type: "array",
                    items: r
                }];
                const s = o.anyOf([
                    [0, {
                        toBytes: n.LONG,
                        fromBytes: a.P_LONG
                    }, "integer"],
                    [1, {
                        toBytes: n.LEN(n.INT)(n.BASE64_STRING),
                        fromBytes: a.P_BASE64(a.P_INT)
                    }, "binary"],
                    [2, {
                        toBytes: n.LEN(n.INT)(n.STRING),
                        fromBytes: a.P_STRING_VAR(a.P_INT)
                    }, "string"],
                    [6, {
                        toBytes: () => Uint8Array.from([]),
                        fromBytes: () => ({
                            value: !0,
                            shift: 0
                        })
                    }, "boolean"],
                    [7, {
                        toBytes: () => Uint8Array.from([]),
                        fromBytes: () => ({
                            value: !1,
                            shift: 0
                        })
                    }, "boolean"]
                ], {
                    valueField: "value"
                });
                e.functionCall = ["call", {
                    type: "object",
                    schema: [e.byteConstant(9), e.byteConstant(1), ["function", {
                            toBytes: n.LEN(n.INT)(n.STRING),
                            fromBytes: a.P_STRING_VAR(a.P_INT)
                        }],
                        ["args", {
                            type: "array",
                            toBytes: n.INT,
                            fromBytes: a.P_INT,
                            items: s
                        }]
                    ]
                }], e.payment = {
                    type: "object",
                    withLength: i,
                    schema: [e.amount, ["assetId", {
                        toBytes: n.OPTION(n.LEN(n.SHORT)(n.BASE58_STRING)),
                        fromBytes: a.P_OPTION(a.P_BASE58_VAR(a.P_SHORT))
                    }]]
                }, e.payments = ["payment", {
                    type: "array",
                    items: e.payment
                }]
            }(l = t.txFields || (t.txFields = {})), t.orderSchemaV0 = {
                type: "object",
                schema: [l.senderPublicKey, l.base58field32("matcherPublicKey"), ["assetPair", {
                        type: "object",
                        schema: [l.base58Option32("amountAsset"), l.base58Option32("priceAsset")]
                    }],
                    ["orderType", {
                        toBytes: e => n.BYTE("sell" === e ? 1 : 0),
                        fromBytes: (e, t = 0) => 1 === a.P_BYTE(e, t).value ? {
                            value: "sell",
                            shift: 1
                        } : {
                            value: "buy",
                            shift: 1
                        }
                    }], l.longField("price"), l.longField("amount"), l.timestamp, l.longField("expiration"), l.longField("matcherFee")
                ]
            }, t.orderSchemaV2 = {
                type: "object",
                schema: [l.version, ...t.orderSchemaV0.schema]
            }, t.aliasSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.senderPublicKey, [
                    ["alias", "chainId"], {
                        type: "object",
                        withLength: i,
                        schema: [l.byteConstant(2), l.chainId, l.alias]
                    }
                ], l.fee, l.timestamp]
            }, t.burnSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.assetId, l.quantity, l.fee, l.timestamp]
            }, t.cancelLeaseSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.fee, l.timestamp, l.leaseId]
            }, t.invokeScriptSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, ["dappAddress", {
                    toBytes: n.BASE58_STRING,
                    fromBytes: a.P_BASE58_FIXED(26)
                }], l.functionCall, l.payments, l.fee, ["feeAssetId", l.optionalAssetId[1]], l.timestamp]
            }, t.dataSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.senderPublicKey, l.data, l.timestamp, l.fee]
            }, t.proofsSchemaV0 = {
                type: "object",
                schema: [
                    ["signature", {
                        toBytes: n.BASE58_STRING,
                        fromBytes: a.P_BASE58_FIXED(64)
                    }]
                ]
            }, t.proofsSchemaV1 = {
                type: "object",
                schema: [l.byteConstant(1), l.proofs]
            }, t.exchangeSchemaV0 = {
                type: "object",
                schema: [l.type, ["order1", {
                        type: "object",
                        withLength: c,
                        schema: [...t.orderSchemaV0.schema, l.signature]
                    }],
                    ["order2", {
                        type: "object",
                        withLength: c,
                        schema: [...t.orderSchemaV0.schema, l.signature]
                    }], l.longField("price"), l.longField("amount"), l.longField("buyMatcherFee"), l.longField("sellMatcherFee"), l.longField("fee"), l.longField("timestamp")
                ]
            };
            const u = o.anyOf([
                [1, {
                    type: "object",
                    withLength: c,
                    schema: [l.byteConstant(1), ...t.orderSchemaV0.schema, ...t.proofsSchemaV0.schema]
                }],
                [2, {
                    type: "object",
                    withLength: c,
                    schema: [...t.orderSchemaV2.schema, ...t.proofsSchemaV1.schema]
                }]
            ], {
                discriminatorField: "version",
                discriminatorBytePos: 4
            });
            t.exchangeSchemaV2 = {
                type: "object",
                schema: [l.byteConstant(0), l.type, l.version, ["order1", u],
                    ["order2", u], l.longField("price"), l.longField("amount"), l.longField("buyMatcherFee"), l.longField("sellMatcherFee"), l.longField("fee"), l.longField("timestamp")
                ]
            }, t.issueSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.assetName, l.assetDescription, l.quantity, l.decimals, l.reissuable, l.fee, l.timestamp, l.script]
            }, t.leaseSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.leaseAssetId, l.senderPublicKey, l.recipient, l.amount, l.fee, l.timestamp]
            }, t.massTransferSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.senderPublicKey, l.optionalAssetId, l.transfers, l.timestamp, l.fee, l.attachment]
            }, t.reissueSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.assetId, l.quantity, l.reissuable, l.fee, l.timestamp]
            }, t.setAssetScriptSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.assetId, l.fee, l.timestamp, l.script]
            }, t.setScriptSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.script, l.fee, l.timestamp]
            }, t.sponsorshipSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.senderPublicKey, l.assetId, l.longField("minSponsoredAssetFee"), l.fee, l.timestamp]
            }, t.transferSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.senderPublicKey, l.optionalAssetId, ["feeAssetId", l.optionalAssetId[1]], l.timestamp, l.amount, l.fee, l.recipient, l.attachment]
            }, t.schemasByTypeMap = {
                [s.GENESIS]: {},
                [s.PAYMENT]: {},
                [s.ISSUE]: {
                    2: t.issueSchemaV2
                },
                [s.TRANSFER]: {
                    2: t.transferSchemaV2
                },
                [s.REISSUE]: {
                    2: t.reissueSchemaV2
                },
                [s.BURN]: {
                    2: t.burnSchemaV2
                },
                [s.EXCHANGE]: {
                    0: t.exchangeSchemaV0,
                    2: t.exchangeSchemaV2
                },
                [s.LEASE]: {
                    2: t.leaseSchemaV2
                },
                [s.CANCEL_LEASE]: {
                    2: t.cancelLeaseSchemaV2
                },
                [s.ALIAS]: {
                    2: t.aliasSchemaV2
                },
                [s.MASS_TRANSFER]: {
                    1: t.massTransferSchemaV1
                },
                [s.DATA]: {
                    1: t.dataSchemaV1
                },
                [s.SET_SCRIPT]: {
                    1: t.setScriptSchemaV1
                },
                [s.SPONSORSHIP]: {
                    1: t.sponsorshipSchemaV1
                },
                [s.SET_ASSET_SCRIPT]: {
                    1: t.setAssetScriptSchemaV1
                },
                [s.INVOKE_SCRIPT]: {
                    1: t.invokeScriptSchemaV1
                }
            }, t.getTransactionSchema = function(e, r) {
                const n = t.schemasByTypeMap[e];
                if ("object" != typeof n) throw new Error("Incorrect tx type: " + e);
                const a = n[r || 0];
                if ("object" != typeof a) throw new Error("Incorrect tx version: " + r);
                return a
            }
        },
        6257: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(7453),
                a = r(2342),
                o = r(6652),
                s = r(1);
            t.empty = Uint8Array.from([]), t.zero = Uint8Array.from([0]), t.one = Uint8Array.from([1]), t.BASE58_STRING = e => n.default.decode(e), t.BASE64_STRING = e => a.toByteArray(e.replace("base64:", "")), t.STRING = e => {
                return e ? (r = e, Uint8Array.from([...unescape(encodeURIComponent(r))].map(e => e.charCodeAt(0)))) : t.empty;
                var r
            }, t.BYTE = e => Uint8Array.from([e]), t.BOOL = e => t.BYTE(1 == e ? 1 : 0), t.BYTES = e => Uint8Array.from(e), t.SHORT = e => {
                const t = s.fromNumber(e, !0);
                return Uint8Array.from(t.toBytesBE().slice(6))
            }, t.INT = e => {
                const t = s.fromNumber(e, !0);
                return Uint8Array.from(t.toBytesBE().slice(4))
            }, t.OPTION = e => r => null == r || "string" == typeof r && 0 == r.length ? t.zero : o.concat(t.one, e(r)), t.LEN = e => t => r => {
                const n = t(r),
                    a = e(n.length);
                return o.concat(a, n)
            }, t.COUNT = e => t => r => {
                const n = o.concat(...r.map(e => t(e))),
                    a = e(r.length);
                return o.concat(a, n)
            }, t.LONG = e => {
                let t;
                if ("number" == typeof e) {
                    if (e > Math.pow(2, 53) - 1) throw new Error(e + " is too big to be precisely represented as js number. Use string instead");
                    t = s.fromNumber(e)
                } else t = s.fromString(e.toString());
                return Uint8Array.from(t.toBytesBE())
            }, t.SCRIPT = e => t.OPTION(t.LEN(t.SHORT)(t.BASE64_STRING))(e ? e.slice(7) : null)
        },
        6652: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.concat = (...e) => e.reduce((e, t) => Uint8Array.from([...e, ...t]), new Uint8Array(0)), t.range = (e, t, r = 1) => Array.from({
                length: t - e
            }).map((t, n) => n * r + e)
        },
        6653: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(1),
                a = r(9946),
                o = r(7453),
                s = r(2342);
            t.ALIAS_VERSION = 2;
            t.P_OPTION = e => (t, r = 0) => {
                if (0 === t[r]) return {
                    value: null,
                    shift: 1
                };
                const n = e(t, r + 1);
                return {
                    value: n.value,
                    shift: n.shift + 1
                }
            }, t.P_BYTE = (e, t = 0) => ({
                value: e[t],
                shift: 1
            }), t.P_SHORT = (e, t = 0) => ({
                value: 256 * e[t] + e[t + 1],
                shift: 2
            }), t.P_INT = (e, t = 0) => ({
                value: Math.pow(2, 24) * e[t] + Math.pow(2, 16) * e[t + 1] + Math.pow(2, 8) * e[t + 2] + e[t + 3],
                shift: 4
            }), t.P_LONG = (e, t = 0) => ({
                value: n.fromBytesBE(Array.from(e.slice(t, t + 8))).toString(),
                shift: 8
            }), t.P_BOOLEAN = (e, t = 0) => ({
                value: !!e[t],
                shift: 1
            }), t.P_STRING_FIXED = e => (t, r = 0) => {
                const n = a.Utf8ArrayToStr(t.slice(r, r + e));
                return {
                    shift: e,
                    value: n
                }
            }, t.P_STRING_VAR = e => (r, n = 0) => {
                const a = e(r, n),
                    {
                        value: o
                    } = t.P_STRING_FIXED(a.value)(r, n + a.shift);
                return {
                    shift: a.value + a.shift,
                    value: o
                }
            }, t.P_BASE58_FIXED = e => (t, r = 0) => ({
                value: o.default.encode(t.slice(r, r + e)),
                shift: e
            }), t.P_BASE58_VAR = e => (r, n = 0) => {
                const a = e(r, n),
                    {
                        value: o
                    } = t.P_BASE58_FIXED(a.value)(r, n + 2);
                return {
                    shift: a.value + 2,
                    value: o
                }
            }, t.P_BASE64 = e => (t, r = 0) => {
                const n = e(t, r),
                    a = "base64:" + s.fromByteArray(t.slice(r + n.shift, r + n.shift + n.value));
                return {
                    shift: n.value + n.shift,
                    value: a
                }
            };
            t.byteToStringWithLength = (e, r = 0) => {
                const n = t.P_SHORT(e, r),
                    {
                        value: o
                    } = (s = n.value, (e, t) => {
                        const r = a.Utf8ArrayToStr(e.slice(t, t + s));
                        return {
                            shift: s,
                            value: r
                        }
                    })(e, r + 2);
                var s;
                return {
                    shift: n.value + 2,
                    value: o
                }
            }, t.byteToBase58 = (e, t = 0, r) => {
                const n = r || 32;
                return {
                    value: o.default.encode(e.slice(t, t + n)),
                    shift: n
                }
            }, t.byteToBase58WithLength = (e, r = 0) => {
                const n = t.P_SHORT(e, r);
                return {
                    value: o.default.encode(e.slice(r + n.shift, r + n.shift + n.value)),
                    shift: n.shift + n.value
                }
            }, t.byteToAddressOrAlias = (e, r = 0) => {
                if (e[r] === t.ALIAS_VERSION) {
                    const n = t.byteToStringWithLength(e, r + 2);
                    return {
                        shift: n.shift + 2,
                        value: n.value
                    }
                }
                return t.byteToBase58(e, r, 26)
            }, t.byteNewAliasToString = (e, r = 0) => {
                const n = t.P_SHORT(e, r).value + 2,
                    {
                        value: a
                    } = t.byteToStringWithLength(e, r);
                return {
                    shift: n,
                    value: a
                }
            }, t.byteToScript = (e, r = 0) => {
                if (0 === e[r]) return {
                    shift: 1,
                    value: null
                };
                const n = t.P_SHORT(e, r + 1),
                    a = r + 1 + n.shift,
                    o = r + 1 + n.shift + n.value;
                return {
                    value: "base64:" + s.fromByteArray(e.slice(a, o)),
                    shift: o - r
                }
            }
        },
        7452: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5584),
                o = r(5549),
                s = r(5543);
            t.massTransfer = function(e, t) {
                const r = n.TRANSACTION_TYPE.MASS_TRANSFER,
                    i = e.version || 1,
                    c = a.convertToPairs(t),
                    l = a.getSenderPublicKey(c, e);
                if (!Array.isArray(e.transfers)) throw new Error('["transfers should be array"]');
                const u = {
                        type: r,
                        version: i,
                        senderPublicKey: l,
                        assetId: "WAVES" === e.assetId ? null : e.assetId,
                        transfers: e.transfers,
                        fee: a.fee(e, 1e5 + 1e5 * Math.ceil(.5 * e.transfers.length)),
                        timestamp: e.timestamp || Date.now(),
                        attachment: e.attachment || "",
                        proofs: e.proofs || [],
                        id: ""
                    },
                    d = s.binary.serializeTx(u);
                return c.forEach(([e, t]) => a.addProof(u, o.signBytes(d, e), t)), u.id = o.hashBytes(d), u
            }
        },
        7453: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
                a = n.split("").reduce((e, t, r) => (e[t] = r, e), {});
            t.default = {
                encode(e) {
                    if (!e.length) return "";
                    const t = [0];
                    for (let r = 0; r < e.length; r++) {
                        for (let e = 0; e < t.length; e++) t[e] <<= 8;
                        t[0] += e[r];
                        let n = 0;
                        for (let e = 0; e < t.length; e++) t[e] += n, n = t[e] / 58 | 0, t[e] %= 58;
                        for (; n;) t.push(n % 58), n = n / 58 | 0
                    }
                    for (let r = 0; 0 === e[r] && r < e.length - 1; r++) t.push(0);
                    return t.reverse().map((function(e) {
                        return n[e]
                    })).join("")
                },
                decode(e) {
                    if (!e.length) return new Uint8Array(0);
                    const t = [0];
                    for (let r = 0; r < e.length; r++) {
                        const n = e[r];
                        if (!(n in a)) throw new Error(`There is no character "${n}" in the Base58 sequence!`);
                        for (let e = 0; e < t.length; e++) t[e] *= 58;
                        t[0] += a[n];
                        let o = 0;
                        for (let e = 0; e < t.length; e++) t[e] += o, o = t[e] >> 8, t[e] &= 255;
                        for (; o;) t.push(255 & o), o >>= 8
                    }
                    for (let r = 0;
                        "1" === e[r] && r < e.length - 1; r++) t.push(0);
                    return new Uint8Array(t.reverse())
                }
            }
        },
        7454: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5549),
                o = r(5584),
                s = r(5543);
            t.reissue = function(e, t) {
                const r = n.TRANSACTION_TYPE.REISSUE,
                    i = e.version || 2,
                    c = o.convertToPairs(t),
                    l = {
                        type: r,
                        version: i,
                        senderPublicKey: o.getSenderPublicKey(c, e),
                        assetId: e.assetId,
                        quantity: e.quantity,
                        reissuable: e.reissuable,
                        chainId: o.networkByte(e.chainId, 87),
                        fee: o.fee(e, 1e8),
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: ""
                    },
                    u = s.binary.serializeTx(l);
                return c.forEach(([e, t]) => o.addProof(l, a.signBytes(u, e), t)), l.id = a.hashBytes(u), l
            }
        },
        7455: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5543),
                o = r(5549),
                s = r(5584);
            t.burn = function(e, t) {
                const r = n.TRANSACTION_TYPE.BURN,
                    i = e.version || 2,
                    c = s.convertToPairs(t),
                    l = {
                        type: r,
                        version: i,
                        senderPublicKey: s.getSenderPublicKey(c, e),
                        assetId: e.assetId,
                        quantity: e.quantity,
                        chainId: s.networkByte(e.chainId, 87),
                        fee: s.fee(e, 1e5),
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: ""
                    },
                    u = a.binary.serializeTx(l);
                return c.forEach(([e, t]) => s.addProof(l, o.signBytes(u, e), t)), l.id = o.hashBytes(u), l
            }
        },
        7456: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5543),
                a = r(5549),
                o = r(5584);
            t.exchange = function(e, t) {
                const r = o.convertToPairs(t),
                    s = n.binary.serializeTx(e);
                return r.forEach(([t, r]) => o.addProof(e, a.signBytes(s, t), r)), Object.assign({}, e, {
                    id: a.hashBytes(s)
                })
            }
        },
        7457: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5549),
                o = r(5584),
                s = r(5543);
            t.lease = function(e, t) {
                const r = n.TRANSACTION_TYPE.LEASE,
                    i = e.version || 2,
                    c = o.convertToPairs(t),
                    l = {
                        type: r,
                        version: i,
                        senderPublicKey: o.getSenderPublicKey(c, e),
                        amount: e.amount,
                        recipient: e.recipient,
                        fee: o.fee(e, 1e5),
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: ""
                    },
                    u = s.binary.serializeTx(l);
                return c.forEach(([e, t]) => o.addProof(l, a.signBytes(u, e), t)), l.id = a.hashBytes(u), l
            }
        },
        7458: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5543),
                o = r(5549),
                s = r(5584);
            t.cancelLease = function(e, t) {
                const r = n.TRANSACTION_TYPE.CANCEL_LEASE,
                    i = e.version || 2,
                    c = s.convertToPairs(t),
                    l = {
                        type: r,
                        version: i,
                        senderPublicKey: s.getSenderPublicKey(c, e),
                        leaseId: e.leaseId,
                        fee: s.fee(e, 1e5),
                        timestamp: e.timestamp || Date.now(),
                        chainId: s.networkByte(e.chainId, 87),
                        proofs: e.proofs || [],
                        id: ""
                    },
                    u = a.binary.serializeTx(l);
                return c.forEach(([e, t]) => s.addProof(l, o.signBytes(u, e), t)), l.id = o.hashBytes(u), l
            }
        },
        7459: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5543),
                {
                    BASE58_STRING: a,
                    BASE64_STRING: o,
                    BYTE: s,
                    BYTES: i,
                    COUNT: c,
                    LEN: l,
                    LONG: u,
                    SHORT: d,
                    STRING: f
                } = n.serializePrimitives,
                h = r(5549),
                y = r(5619),
                p = r(5584),
                m = r(5543),
                g = {
                    integer: ["integer", 0, u],
                    number: ["integer", 0, u],
                    boolean: ["boolean", 1, s],
                    string: ["string", 3, l(d)(f)],
                    binary: ["binary", 2, e => l(d)(o)(e.slice(7))],
                    _: ["binary", 2, l(d)(i)]
                },
                b = e => g[typeof e] || g._;
            t.data = function(e, t) {
                const r = y.TRANSACTION_TYPE.DATA,
                    n = e.version || 1,
                    o = p.convertToPairs(t),
                    i = p.getSenderPublicKey(o, e);
                if (!Array.isArray(e.data)) throw new Error('["data should be array"]');
                const g = e.timestamp || Date.now();
                let v = h.concat(s(y.TRANSACTION_TYPE.DATA), s(1), a(i), c(d)(e => h.concat(l(d)(f)(e.key), [b(e.value)[1]], b(e.value)[2](e.value)))(e.data), u(g));
                const S = 1e5 * Math.floor(1 + (v.length + 8 - 1) / 1024),
                    w = {
                        type: r,
                        version: n,
                        senderPublicKey: i,
                        fee: p.fee(e, S),
                        timestamp: g,
                        proofs: e.proofs || [],
                        id: "",
                        data: e.data && e.data.map(e => {
                            if (e.type) return e;
                            {
                                const t = b(e.value)[0];
                                return {
                                    type: t,
                                    key: e.key,
                                    value: "binary" === t ? "base64:" + Buffer.from(e.value).toString("base64") : e.value
                                }
                            }
                        })
                    },
                    A = m.binary.serializeTx(w);
                return o.forEach(([e, t]) => p.addProof(w, h.signBytes(A, e), t)), w.id = h.hashBytes(A), w
            }
        },
        7460: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5549),
                o = r(5584),
                s = r(5543);
            t.issue = function(e, t) {
                const r = n.TRANSACTION_TYPE.ISSUE,
                    i = e.version || 2,
                    c = o.convertToPairs(t),
                    l = {
                        type: r,
                        version: i,
                        senderPublicKey: o.getSenderPublicKey(c, e),
                        name: e.name,
                        description: e.description,
                        quantity: e.quantity,
                        script: null == e.script ? void 0 : o.base64Prefix(e.script),
                        decimals: null == e.decimals ? 8 : e.decimals,
                        reissuable: e.reissuable || !1,
                        fee: o.fee(e, 1e8),
                        timestamp: Date.now(),
                        chainId: o.networkByte(e.chainId, 87),
                        proofs: e.proofs || [],
                        id: ""
                    },
                    u = s.binary.serializeTx(l);
                return c.forEach(([e, t]) => o.addProof(l, a.signBytes(u, e), t)), l.id = a.hashBytes(u), l
            }
        },
        7461: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5549),
                o = r(5584),
                s = r(5543);
            t.transfer = function(e, t) {
                const r = n.TRANSACTION_TYPE.TRANSFER,
                    i = e.version || 2,
                    c = o.convertToPairs(t),
                    l = {
                        type: r,
                        version: i,
                        senderPublicKey: o.getSenderPublicKey(c, e),
                        assetId: "WAVES" === e.assetId ? null : e.assetId,
                        recipient: e.recipient,
                        amount: e.amount,
                        attachment: e.attachment || "",
                        fee: o.fee(e, 1e5),
                        feeAssetId: "WAVES" === e.feeAssetId ? null : e.feeAssetId,
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: ""
                    },
                    u = s.binary.serializeTx(l);
                return c.forEach(([e, t]) => o.addProof(l, a.signBytes(u, e), t)), l.id = a.hashBytes(u), l
            }
        },
        7462: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5543),
                o = r(5549),
                s = r(5584);
            t.alias = function(e, t) {
                const r = n.TRANSACTION_TYPE.ALIAS,
                    i = e.version || 2,
                    c = s.convertToPairs(t),
                    l = {
                        type: r,
                        version: i,
                        senderPublicKey: s.getSenderPublicKey(c, e),
                        alias: e.alias,
                        fee: s.fee(e, 1e5),
                        timestamp: e.timestamp || Date.now(),
                        chainId: s.networkByte(e.chainId, 87),
                        proofs: e.proofs || [],
                        id: ""
                    },
                    u = a.binary.serializeTx(l);
                return c.forEach(([e, t]) => s.addProof(l, o.signBytes(u, e), t)), l.id = o.hashBytes(u), l
            }
        },
        7463: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5549),
                o = r(5584),
                s = r(5543);
            t.setScript = function(e, t) {
                const r = n.TRANSACTION_TYPE.SET_SCRIPT,
                    i = e.version || 1,
                    c = o.convertToPairs(t),
                    l = o.getSenderPublicKey(c, e);
                if (void 0 === e.script) throw new Error("Script field cannot be undefined. Use null explicitly to remove script");
                const u = {
                        type: r,
                        version: i,
                        senderPublicKey: l,
                        chainId: o.networkByte(e.chainId, 87),
                        fee: o.fee(e, 1e6),
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: "",
                        script: o.base64Prefix(e.script)
                    },
                    d = s.binary.serializeTx(u);
                return c.forEach(([e, t]) => o.addProof(u, a.signBytes(d, e), t)), u.id = a.hashBytes(d), u
            }
        },
        7464: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5549),
                o = r(5584),
                s = r(5543);
            t.setAssetScript = function(e, t) {
                const r = n.TRANSACTION_TYPE.SET_ASSET_SCRIPT,
                    i = e.version || 1,
                    c = o.convertToPairs(t),
                    l = o.getSenderPublicKey(c, e);
                if (null == e.script) throw new Error("Asset script cannot be empty");
                const u = {
                        type: r,
                        version: i,
                        senderPublicKey: l,
                        assetId: e.assetId,
                        chainId: o.networkByte(e.chainId, 87),
                        fee: o.fee(e, 1e8),
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: "",
                        script: o.base64Prefix(e.script)
                    },
                    d = s.binary.serializeTx(u);
                return c.forEach(([e, t]) => o.addProof(u, a.signBytes(d, e), t)), u.id = a.hashBytes(d), u
            }
        },
        7465: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5549),
                o = r(5584),
                s = r(5543);
            t.sponsorship = function(e, t) {
                const r = n.TRANSACTION_TYPE.SPONSORSHIP,
                    i = e.version || 1,
                    c = o.convertToPairs(t),
                    l = {
                        type: r,
                        version: i,
                        senderPublicKey: o.getSenderPublicKey(c, e),
                        minSponsoredAssetFee: e.minSponsoredAssetFee,
                        assetId: e.assetId,
                        fee: o.fee(e, 1e8),
                        timestamp: Date.now(),
                        proofs: e.proofs || [],
                        id: ""
                    },
                    u = s.binary.serializeTx(l);
                return c.forEach(([e, t]) => o.addProof(l, a.signBytes(u, e), t)), l.id = a.hashBytes(u), l
            }
        },
        7466: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5619),
                a = r(5549),
                o = r(5584),
                s = r(5543);
            t.invokeScript = function(e, t) {
                const r = n.TRANSACTION_TYPE.INVOKE_SCRIPT,
                    i = e.version || 1,
                    c = o.convertToPairs(t),
                    l = {
                        type: r,
                        version: i,
                        senderPublicKey: o.getSenderPublicKey(c, e),
                        dappAddress: e.dappAddress,
                        call: e.call,
                        payment: e.payment || [],
                        fee: o.fee(e, 1e6),
                        feeAssetId: e.feeAssetId,
                        timestamp: Date.now(),
                        chainId: o.networkByte(e.chainId, 87),
                        proofs: e.proofs || [],
                        id: ""
                    },
                    u = s.binary.serializeTx(l);
                return c.forEach(([e, t]) => o.addProof(l, a.signBytes(u, e), t)), l.id = a.hashBytes(u), l.call.args = l.call.args.map(e => Object.assign({}, e, {
                    key: ""
                })), l
            }
        },
        9941: function(e, t, r) {
            "use strict";
            var n = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(7452);
            t.massTransfer = a.massTransfer;
            var o = r(7454);
            t.reissue = o.reissue;
            var s = r(7455);
            t.burn = s.burn;
            var i = r(7456);
            t.exchange = i.exchange;
            var c = r(7457);
            t.lease = c.lease;
            var l = r(7458);
            t.cancelLease = l.cancelLease;
            var u = r(7459);
            t.data = u.data;
            var d = r(7460);
            t.issue = d.issue;
            var f = r(7461);
            t.transfer = f.transfer;
            var h = r(7462);
            t.alias = h.alias;
            var y = r(7463);
            t.setScript = y.setScript;
            var p = r(7464);
            t.setAssetScript = p.setAssetScript;
            var m = r(7465);
            t.sponsorship = m.sponsorship;
            var g = r(9952);
            t.order = g.order;
            var b = r(9953);
            t.cancelOrder = b.cancelOrder;
            var v = r(7466);
            t.invokeScript = v.invokeScript;
            var S = r(9954);
            t.signTx = S.signTx, t.broadcast = S.broadcast, t.verify = S.verify, t.serialize = S.serialize, t.submitOrder = S.submitOrder, t.cancelSubmittedOrder = S.cancelSubmittedOrder, t.addressBalance = S.addressBalance, t.addressDataByKey = S.addressDataByKey;
            var w = r(5584);
            t.waitForTx = w.waitForTx;
            const A = {
                crypto: n(r(5549)),
                marshall: n(r(5543))
            };
            t.libs = A;
            const T = n(r(9955));
            t.seedUtils = T
        },
        9942: function(e, t, r) {
            "use strict";
            t.__esModule = !0;

            function n(e, t, r) {
                var n = e[t] + e[r],
                    a = e[t + 1] + e[r + 1];
                n >= 4294967296 && a++, e[t] = n, e[t + 1] = a
            }

            function a(e, t, r, n) {
                var a = e[t] + r;
                r < 0 && (a += 4294967296);
                var o = e[t + 1] + n;
                a >= 4294967296 && o++, e[t] = a, e[t + 1] = o
            }

            function o(e, t) {
                return e[t] ^ e[t + 1] << 8 ^ e[t + 2] << 16 ^ e[t + 3] << 24
            }

            function s(e, t, r, o, s, i) {
                var c = u[s],
                    d = u[s + 1],
                    f = u[i],
                    h = u[i + 1];
                n(l, e, t), a(l, e, c, d);
                var y = l[o] ^ l[e],
                    p = l[o + 1] ^ l[e + 1];
                l[o] = p, l[o + 1] = y, n(l, r, o), y = l[t] ^ l[r], p = l[t + 1] ^ l[r + 1], l[t] = y >>> 24 ^ p << 8, l[t + 1] = p >>> 24 ^ y << 8, n(l, e, t), a(l, e, f, h), y = l[o] ^ l[e], p = l[o + 1] ^ l[e + 1], l[o] = y >>> 16 ^ p << 16, l[o + 1] = p >>> 16 ^ y << 16, n(l, r, o), y = l[t] ^ l[r], p = l[t + 1] ^ l[r + 1], l[t] = p >>> 31 ^ y << 1, l[t + 1] = y >>> 31 ^ p << 1
            }
            var i = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]),
                c = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3].map((function(e) {
                    return 2 * e
                }))),
                l = new Uint32Array(32),
                u = new Uint32Array(32);

            function d(e, t) {
                var r = 0;
                for (r = 0; r < 16; r++) l[r] = e.h[r], l[r + 16] = i[r];
                for (l[24] = l[24] ^ e.t, l[25] = l[25] ^ e.t / 4294967296, t && (l[28] = ~l[28], l[29] = ~l[29]), r = 0; r < 32; r++) u[r] = o(e.b, 4 * r);
                for (r = 0; r < 12; r++) s(0, 8, 16, 24, c[16 * r + 0], c[16 * r + 1]), s(2, 10, 18, 26, c[16 * r + 2], c[16 * r + 3]), s(4, 12, 20, 28, c[16 * r + 4], c[16 * r + 5]), s(6, 14, 22, 30, c[16 * r + 6], c[16 * r + 7]), s(0, 10, 20, 30, c[16 * r + 8], c[16 * r + 9]), s(2, 12, 22, 24, c[16 * r + 10], c[16 * r + 11]), s(4, 14, 16, 26, c[16 * r + 12], c[16 * r + 13]), s(6, 8, 18, 28, c[16 * r + 14], c[16 * r + 15]);
                for (r = 0; r < 16; r++) e.h[r] = e.h[r] ^ l[r] ^ l[r + 16]
            }

            function f(e, t) {
                if (0 === e || e > 64) throw new Error("Illegal output length, expected 0 < length <= 64");
                if (t && t.length > 64) throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
                for (var r = {
                        b: new Uint8Array(128),
                        h: new Uint32Array(16),
                        t: 0,
                        c: 0,
                        outlen: e
                    }, n = 0; n < 16; n++) r.h[n] = i[n];
                var a = t ? t.length : 0;
                return r.h[0] ^= 16842752 ^ a << 8 ^ e, t && (h(r, t), r.c = 128), r
            }

            function h(e, t) {
                for (var r = 0; r < t.length; r++) 128 === e.c && (e.t += e.c, d(e, !1), e.c = 0), e.b[e.c++] = t[r]
            }

            function y(e) {
                for (e.t += e.c; e.c < 128;) e.b[e.c++] = 0;
                d(e, !0);
                for (var t = new Uint8Array(e.outlen), r = 0; r < e.outlen; r++) t[r] = e.h[r >> 2] >> 8 * (3 & r);
                return t
            }

            function p(e, t, r) {
                r = r || 64, e = function(e) {
                    var t;
                    if (e instanceof Uint8Array) t = e;
                    else if (e instanceof Buffer) t = new Uint8Array(e);
                    else {
                        if ("string" != typeof e) throw new Error("Input must be an string, Buffer or Uint8Array");
                        t = new Uint8Array(Buffer.from(e, "utf8"))
                    }
                    return t
                }(e);
                var n = f(r, t);
                return h(n, e), y(n)
            }
            t.blake2bInit = f, t.blake2bUpdate = h, t.blake2bFinal = y, t.blake2b = p, t.blake2bHex = function(e, t, r) {
                var n, a = p(e, t, r);
                return n = a, Array.prototype.map.call(n, (function(e) {
                    return (e < 16 ? "0" : "") + e.toString(16)
                })).join("")
            }
        },
        9943: function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            for (var n = "0123456789abcdef".split(""), a = [0, 8, 16, 24], o = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], s = [224, 256, 384, 512], i = ["hex", "buffer", "arrayBuffer", "array"], c = function(e, t, r) {
                    return function(n) {
                        return new v(e, t, e).update(n)[r]()
                    }
                }, l = function(e, t, r) {
                    return function(n, a) {
                        return new v(e, t, a).update(n)[r]()
                    }
                }, u = function(e, t) {
                    var r = c(e, t, "hex");
                    r.create = function() {
                        return new v(e, t, e)
                    }, r.update = function(e) {
                        return r.create().update(e)
                    };
                    for (var n = 0; n < i.length; ++n) {
                        var a = i[n];
                        r[a] = c(e, t, a)
                    }
                    return r
                }, d = [{
                    name: "keccak",
                    padding: [1, 256, 65536, 16777216],
                    bits: s,
                    createMethod: u
                }, {
                    name: "sha3",
                    padding: [6, 1536, 393216, 100663296],
                    bits: s,
                    createMethod: u
                }, {
                    name: "shake",
                    padding: [31, 7936, 2031616, 520093696],
                    bits: [128, 256],
                    createMethod: function(e, t) {
                        var r = l(e, t, "hex");
                        r.create = function(r) {
                            return new v(e, t, r)
                        }, r.update = function(e, t) {
                            return r.create(t).update(e)
                        };
                        for (var n = 0; n < i.length; ++n) {
                            var a = i[n];
                            r[a] = l(e, t, a)
                        }
                        return r
                    }
                }], f = {}, h = [], y = 0; y < d.length; ++y)
                for (var p = d[y], m = p.bits, g = 0; g < m.length; ++g) {
                    var b = p.name + "_" + m[g];
                    h.push(b), f[b] = p.createMethod(m[g], p.padding)
                }

            function v(e, t, r) {
                this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                for (var n = 0; n < 50; ++n) this.s[n] = 0
            }
            v.prototype.update = function(e) {
                var t = "string" != typeof e;
                t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
                for (var r, n, o = e.length, s = this.blocks, i = this.byteCount, c = this.blockCount, l = 0, u = this.s; l < o;) {
                    if (this.reset)
                        for (this.reset = !1, s[0] = this.block, r = 1; r < c + 1; ++r) s[r] = 0;
                    if (t)
                        for (r = this.start; l < o && r < i; ++l) s[r >> 2] |= e[l] << a[3 & r++];
                    else
                        for (r = this.start; l < o && r < i; ++l)(n = e.charCodeAt(l)) < 128 ? s[r >> 2] |= n << a[3 & r++] : n < 2048 ? (s[r >> 2] |= (192 | n >> 6) << a[3 & r++], s[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : n < 55296 || n >= 57344 ? (s[r >> 2] |= (224 | n >> 12) << a[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], s[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++l)), s[r >> 2] |= (240 | n >> 18) << a[3 & r++], s[r >> 2] |= (128 | n >> 12 & 63) << a[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], s[r >> 2] |= (128 | 63 & n) << a[3 & r++]);
                    if (this.lastByteIndex = r, r >= i) {
                        for (this.start = r - i, this.block = s[c], r = 0; r < c; ++r) u[r] ^= s[r];
                        S(u), this.reset = !0
                    } else this.start = r
                }
                return this
            }, v.prototype.finalize = function() {
                var e = this.blocks,
                    t = this.lastByteIndex,
                    r = this.blockCount,
                    n = this.s;
                if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
                    for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
                for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
                S(n)
            }, v.prototype.toString = v.prototype.hex = function() {
                this.finalize();
                for (var e, t = this.blockCount, r = this.s, a = this.outputBlocks, o = this.extraBytes, s = 0, i = 0, c = ""; i < a;) {
                    for (s = 0; s < t && i < a; ++s, ++i) e = r[s], c += n[e >> 4 & 15] + n[15 & e] + n[e >> 12 & 15] + n[e >> 8 & 15] + n[e >> 20 & 15] + n[e >> 16 & 15] + n[e >> 28 & 15] + n[e >> 24 & 15];
                    i % t == 0 && (S(r), s = 0)
                }
                return o && (e = r[s], o > 0 && (c += n[e >> 4 & 15] + n[15 & e]), o > 1 && (c += n[e >> 12 & 15] + n[e >> 8 & 15]), o > 2 && (c += n[e >> 20 & 15] + n[e >> 16 & 15])), c
            }, v.prototype.arrayBuffer = function() {
                this.finalize();
                var e, t = this.blockCount,
                    r = this.s,
                    n = this.outputBlocks,
                    a = this.extraBytes,
                    o = 0,
                    s = 0,
                    i = this.outputBits >> 3;
                e = a ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(i);
                for (var c = new Uint32Array(e); s < n;) {
                    for (o = 0; o < t && s < n; ++o, ++s) c[s] = r[o];
                    s % t == 0 && S(r)
                }
                return a && (c[o] = r[o], e = e.slice(0, i)), e
            }, v.prototype.buffer = v.prototype.arrayBuffer, v.prototype.digest = v.prototype.array = function() {
                this.finalize();
                for (var e, t, r = this.blockCount, n = this.s, a = this.outputBlocks, o = this.extraBytes, s = 0, i = 0, c = []; i < a;) {
                    for (s = 0; s < r && i < a; ++s, ++i) e = i << 2, t = n[s], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
                    i % r == 0 && S(n)
                }
                return o && (e = i << 2, t = n[s], o > 0 && (c[e] = 255 & t), o > 1 && (c[e + 1] = t >> 8 & 255), o > 2 && (c[e + 2] = t >> 16 & 255)), c
            };
            var S = function(e) {
                var t, r, n, a, s, i, c, l, u, d, f, h, y, p, m, g, b, v, S, w, A, T, E, P, _, I, B, N, k, O, R, j, x, F, U, C, M, K, L, z, V, G, Y, H, D, q, W, X, J, $, Q, Z, ee, te, re, ne, ae, oe, se, ie, ce, le, ue;
                for (n = 0; n < 48; n += 2) a = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], s = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], i = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], l = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], d = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (i << 1 | c >>> 31), r = (y = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | i >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = a ^ (l << 1 | u >>> 31), r = s ^ (u << 1 | l >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = i ^ (d << 1 | f >>> 31), r = c ^ (f << 1 | d >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = l ^ (h << 1 | y >>> 31), r = u ^ (y << 1 | h >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = d ^ (a << 1 | s >>> 31), r = f ^ (s << 1 | a >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, p = e[0], m = e[1], q = e[11] << 4 | e[10] >>> 28, W = e[10] << 4 | e[11] >>> 28, N = e[20] << 3 | e[21] >>> 29, k = e[21] << 3 | e[20] >>> 29, ie = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, G = e[40] << 18 | e[41] >>> 14, Y = e[41] << 18 | e[40] >>> 14, F = e[2] << 1 | e[3] >>> 31, U = e[3] << 1 | e[2] >>> 31, g = e[13] << 12 | e[12] >>> 20, b = e[12] << 12 | e[13] >>> 20, X = e[22] << 10 | e[23] >>> 22, J = e[23] << 10 | e[22] >>> 22, O = e[33] << 13 | e[32] >>> 19, R = e[32] << 13 | e[33] >>> 19, le = e[42] << 2 | e[43] >>> 30, ue = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, C = e[14] << 6 | e[15] >>> 26, M = e[15] << 6 | e[14] >>> 26, v = e[25] << 11 | e[24] >>> 21, S = e[24] << 11 | e[25] >>> 21, $ = e[34] << 15 | e[35] >>> 17, Q = e[35] << 15 | e[34] >>> 17, j = e[45] << 29 | e[44] >>> 3, x = e[44] << 29 | e[45] >>> 3, P = e[6] << 28 | e[7] >>> 4, _ = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ae = e[16] << 23 | e[17] >>> 9, K = e[26] << 25 | e[27] >>> 7, L = e[27] << 25 | e[26] >>> 7, w = e[36] << 21 | e[37] >>> 11, A = e[37] << 21 | e[36] >>> 11, Z = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, H = e[8] << 27 | e[9] >>> 5, D = e[9] << 27 | e[8] >>> 5, I = e[18] << 20 | e[19] >>> 12, B = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, se = e[28] << 7 | e[29] >>> 25, z = e[38] << 8 | e[39] >>> 24, V = e[39] << 8 | e[38] >>> 24, T = e[48] << 14 | e[49] >>> 18, E = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~g & v, e[1] = m ^ ~b & S, e[10] = P ^ ~I & N, e[11] = _ ^ ~B & k, e[20] = F ^ ~C & K, e[21] = U ^ ~M & L, e[30] = H ^ ~q & X, e[31] = D ^ ~W & J, e[40] = te ^ ~ne & oe, e[41] = re ^ ~ae & se, e[2] = g ^ ~v & w, e[3] = b ^ ~S & A, e[12] = I ^ ~N & O, e[13] = B ^ ~k & R, e[22] = C ^ ~K & z, e[23] = M ^ ~L & V, e[32] = q ^ ~X & $, e[33] = W ^ ~J & Q, e[42] = ne ^ ~oe & ie, e[43] = ae ^ ~se & ce, e[4] = v ^ ~w & T, e[5] = S ^ ~A & E, e[14] = N ^ ~O & j, e[15] = k ^ ~R & x, e[24] = K ^ ~z & G, e[25] = L ^ ~V & Y, e[34] = X ^ ~$ & Z, e[35] = J ^ ~Q & ee, e[44] = oe ^ ~ie & le, e[45] = se ^ ~ce & ue, e[6] = w ^ ~T & p, e[7] = A ^ ~E & m, e[16] = O ^ ~j & P, e[17] = R ^ ~x & _, e[26] = z ^ ~G & F, e[27] = V ^ ~Y & U, e[36] = $ ^ ~Z & H, e[37] = Q ^ ~ee & D, e[46] = ie ^ ~le & te, e[47] = ce ^ ~ue & re, e[8] = T ^ ~p & g, e[9] = E ^ ~m & b, e[18] = j ^ ~P & I, e[19] = x ^ ~_ & B, e[28] = G ^ ~F & C, e[29] = Y ^ ~U & M, e[38] = Z ^ ~H & q, e[39] = ee ^ ~D & W, e[48] = le ^ ~te & ne, e[49] = ue ^ ~re & ae, e[0] ^= o[n], e[1] ^= o[n + 1]
            };
            t.keccak256 = f.keccak_256
        },
        9944: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
                a = n.split("").reduce((e, t, r) => (e[t] = r, e), {});
            t.default = {
                encode(e) {
                    if (!e.length) return "";
                    const t = [0];
                    for (let r = 0; r < e.length; r++) {
                        for (let e = 0; e < t.length; e++) t[e] <<= 8;
                        t[0] += e[r];
                        let n = 0;
                        for (let e = 0; e < t.length; e++) t[e] += n, n = t[e] / 58 | 0, t[e] %= 58;
                        for (; n;) t.push(n % 58), n = n / 58 | 0
                    }
                    for (let r = 0; 0 === e[r] && r < e.length - 1; r++) t.push(0);
                    return t.reverse().map((function(e) {
                        return n[e]
                    })).join("")
                },
                decode(e) {
                    if (!e.length) return new Uint8Array(0);
                    const t = [0];
                    for (let r = 0; r < e.length; r++) {
                        const n = e[r];
                        if (!(n in a)) throw `There is no character "${n}" in the Base58 sequence!`;
                        for (let e = 0; e < t.length; e++) t[e] *= 58;
                        t[0] += a[n];
                        let o = 0;
                        for (let e = 0; e < t.length; e++) t[e] += o, o = t[e] >> 8, t[e] &= 255;
                        for (; o;) t.push(255 & o), o >>= 8
                    }
                    for (let r = 0;
                        "1" === e[r] && r < e.length - 1; r++) t.push(0);
                    return new Uint8Array(t.reverse())
                }
            }
        },
        9945: function(e, t, r) {
            "use strict";
            t.__esModule = !0;
            var n = Object.create(null),
                a = function(e) {
                    var t, r = new Float64Array(16);
                    if (e)
                        for (t = 0; t < e.length; t++) r[t] = e[t];
                    return r
                },
                o = (new Uint8Array(16), new Uint8Array(32));
            o[0] = 9;
            var s = a(),
                i = a([1]),
                c = a([56129, 1]),
                l = a([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                u = a([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                d = a([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                f = a([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                h = a([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function y(e, t, r, n) {
                e[t] = r >> 24 & 255, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r, e[t + 4] = n >> 24 & 255, e[t + 5] = n >> 16 & 255, e[t + 6] = n >> 8 & 255, e[t + 7] = 255 & n
            }

            function p(e, t, r, n) {
                return function(e, t, r, n, a) {
                    var o, s = 0;
                    for (o = 0; o < a; o++) s |= e[t + o] ^ r[n + o];
                    return (1 & s - 1 >>> 8) - 1
                }(e, t, r, n, 32)
            }

            function m(e, t) {
                for (var r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function g(e) {
                var t, r, n = 1;
                for (t = 0; t < 16; t++) r = e[t] + n + 65535, n = Math.floor(r / 65536), e[t] = r - 65536 * n;
                e[0] += n - 1 + 37 * (n - 1)
            }

            function b(e, t, r) {
                for (var n, a = ~(r - 1), o = 0; o < 16; o++) n = a & (e[o] ^ t[o]), e[o] ^= n, t[o] ^= n
            }

            function v(e, t) {
                var r, n, o, s = a(),
                    i = a();
                for (r = 0; r < 16; r++) i[r] = t[r];
                for (g(i), g(i), g(i), n = 0; n < 2; n++) {
                    for (s[0] = i[0] - 65517, r = 1; r < 15; r++) s[r] = i[r] - 65535 - (s[r - 1] >> 16 & 1), s[r - 1] &= 65535;
                    s[15] = i[15] - 32767 - (s[14] >> 16 & 1), o = s[15] >> 16 & 1, s[14] &= 65535, b(i, s, 1 - o)
                }
                for (r = 0; r < 16; r++) e[2 * r] = 255 & i[r], e[2 * r + 1] = i[r] >> 8
            }

            function S(e, t) {
                var r = new Uint8Array(32),
                    n = new Uint8Array(32);
                return v(r, e), v(n, t), p(r, 0, n, 0)
            }

            function w(e) {
                var t = new Uint8Array(32);
                return v(t, e), 1 & t[0]
            }

            function A(e, t) {
                for (var r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
                e[15] &= 32767
            }

            function T(e, t, r) {
                for (var n = 0; n < 16; n++) e[n] = t[n] + r[n]
            }

            function E(e, t, r) {
                for (var n = 0; n < 16; n++) e[n] = t[n] - r[n]
            }

            function P(e, t, r) {
                var n, a, o = 0,
                    s = 0,
                    i = 0,
                    c = 0,
                    l = 0,
                    u = 0,
                    d = 0,
                    f = 0,
                    h = 0,
                    y = 0,
                    p = 0,
                    m = 0,
                    g = 0,
                    b = 0,
                    v = 0,
                    S = 0,
                    w = 0,
                    A = 0,
                    T = 0,
                    E = 0,
                    P = 0,
                    _ = 0,
                    I = 0,
                    B = 0,
                    N = 0,
                    k = 0,
                    O = 0,
                    R = 0,
                    j = 0,
                    x = 0,
                    F = 0,
                    U = r[0],
                    C = r[1],
                    M = r[2],
                    K = r[3],
                    L = r[4],
                    z = r[5],
                    V = r[6],
                    G = r[7],
                    Y = r[8],
                    H = r[9],
                    D = r[10],
                    q = r[11],
                    W = r[12],
                    X = r[13],
                    J = r[14],
                    $ = r[15];
                o += (n = t[0]) * U, s += n * C, i += n * M, c += n * K, l += n * L, u += n * z, d += n * V, f += n * G, h += n * Y, y += n * H, p += n * D, m += n * q, g += n * W, b += n * X, v += n * J, S += n * $, s += (n = t[1]) * U, i += n * C, c += n * M, l += n * K, u += n * L, d += n * z, f += n * V, h += n * G, y += n * Y, p += n * H, m += n * D, g += n * q, b += n * W, v += n * X, S += n * J, w += n * $, i += (n = t[2]) * U, c += n * C, l += n * M, u += n * K, d += n * L, f += n * z, h += n * V, y += n * G, p += n * Y, m += n * H, g += n * D, b += n * q, v += n * W, S += n * X, w += n * J, A += n * $, c += (n = t[3]) * U, l += n * C, u += n * M, d += n * K, f += n * L, h += n * z, y += n * V, p += n * G, m += n * Y, g += n * H, b += n * D, v += n * q, S += n * W, w += n * X, A += n * J, T += n * $, l += (n = t[4]) * U, u += n * C, d += n * M, f += n * K, h += n * L, y += n * z, p += n * V, m += n * G, g += n * Y, b += n * H, v += n * D, S += n * q, w += n * W, A += n * X, T += n * J, E += n * $, u += (n = t[5]) * U, d += n * C, f += n * M, h += n * K, y += n * L, p += n * z, m += n * V, g += n * G, b += n * Y, v += n * H, S += n * D, w += n * q, A += n * W, T += n * X, E += n * J, P += n * $, d += (n = t[6]) * U, f += n * C, h += n * M, y += n * K, p += n * L, m += n * z, g += n * V, b += n * G, v += n * Y, S += n * H, w += n * D, A += n * q, T += n * W, E += n * X, P += n * J, _ += n * $, f += (n = t[7]) * U, h += n * C, y += n * M, p += n * K, m += n * L, g += n * z, b += n * V, v += n * G, S += n * Y, w += n * H, A += n * D, T += n * q, E += n * W, P += n * X, _ += n * J, I += n * $, h += (n = t[8]) * U, y += n * C, p += n * M, m += n * K, g += n * L, b += n * z, v += n * V, S += n * G, w += n * Y, A += n * H, T += n * D, E += n * q, P += n * W, _ += n * X, I += n * J, B += n * $, y += (n = t[9]) * U, p += n * C, m += n * M, g += n * K, b += n * L, v += n * z, S += n * V, w += n * G, A += n * Y, T += n * H, E += n * D, P += n * q, _ += n * W, I += n * X, B += n * J, N += n * $, p += (n = t[10]) * U, m += n * C, g += n * M, b += n * K, v += n * L, S += n * z, w += n * V, A += n * G, T += n * Y, E += n * H, P += n * D, _ += n * q, I += n * W, B += n * X, N += n * J, k += n * $, m += (n = t[11]) * U, g += n * C, b += n * M, v += n * K, S += n * L, w += n * z, A += n * V, T += n * G, E += n * Y, P += n * H, _ += n * D, I += n * q, B += n * W, N += n * X, k += n * J, O += n * $, g += (n = t[12]) * U, b += n * C, v += n * M, S += n * K, w += n * L, A += n * z, T += n * V, E += n * G, P += n * Y, _ += n * H, I += n * D, B += n * q, N += n * W, k += n * X, O += n * J, R += n * $, b += (n = t[13]) * U, v += n * C, S += n * M, w += n * K, A += n * L, T += n * z, E += n * V, P += n * G, _ += n * Y, I += n * H, B += n * D, N += n * q, k += n * W, O += n * X, R += n * J, j += n * $, v += (n = t[14]) * U, S += n * C, w += n * M, A += n * K, T += n * L, E += n * z, P += n * V, _ += n * G, I += n * Y, B += n * H, N += n * D, k += n * q, O += n * W, R += n * X, j += n * J, x += n * $, S += (n = t[15]) * U, s += 38 * (A += n * M), i += 38 * (T += n * K), c += 38 * (E += n * L), l += 38 * (P += n * z), u += 38 * (_ += n * V), d += 38 * (I += n * G), f += 38 * (B += n * Y), h += 38 * (N += n * H), y += 38 * (k += n * D), p += 38 * (O += n * q), m += 38 * (R += n * W), g += 38 * (j += n * X), b += 38 * (x += n * J), v += 38 * (F += n * $), o = (n = (o += 38 * (w += n * C)) + (a = 1) + 65535) - 65536 * (a = Math.floor(n / 65536)), s = (n = s + a + 65535) - 65536 * (a = Math.floor(n / 65536)), i = (n = i + a + 65535) - 65536 * (a = Math.floor(n / 65536)), c = (n = c + a + 65535) - 65536 * (a = Math.floor(n / 65536)), l = (n = l + a + 65535) - 65536 * (a = Math.floor(n / 65536)), u = (n = u + a + 65535) - 65536 * (a = Math.floor(n / 65536)), d = (n = d + a + 65535) - 65536 * (a = Math.floor(n / 65536)), f = (n = f + a + 65535) - 65536 * (a = Math.floor(n / 65536)), h = (n = h + a + 65535) - 65536 * (a = Math.floor(n / 65536)), y = (n = y + a + 65535) - 65536 * (a = Math.floor(n / 65536)), p = (n = p + a + 65535) - 65536 * (a = Math.floor(n / 65536)), m = (n = m + a + 65535) - 65536 * (a = Math.floor(n / 65536)), g = (n = g + a + 65535) - 65536 * (a = Math.floor(n / 65536)), b = (n = b + a + 65535) - 65536 * (a = Math.floor(n / 65536)), v = (n = v + a + 65535) - 65536 * (a = Math.floor(n / 65536)), S = (n = S + a + 65535) - 65536 * (a = Math.floor(n / 65536)), o = (n = (o += a - 1 + 37 * (a - 1)) + (a = 1) + 65535) - 65536 * (a = Math.floor(n / 65536)), s = (n = s + a + 65535) - 65536 * (a = Math.floor(n / 65536)), i = (n = i + a + 65535) - 65536 * (a = Math.floor(n / 65536)), c = (n = c + a + 65535) - 65536 * (a = Math.floor(n / 65536)), l = (n = l + a + 65535) - 65536 * (a = Math.floor(n / 65536)), u = (n = u + a + 65535) - 65536 * (a = Math.floor(n / 65536)), d = (n = d + a + 65535) - 65536 * (a = Math.floor(n / 65536)), f = (n = f + a + 65535) - 65536 * (a = Math.floor(n / 65536)), h = (n = h + a + 65535) - 65536 * (a = Math.floor(n / 65536)), y = (n = y + a + 65535) - 65536 * (a = Math.floor(n / 65536)), p = (n = p + a + 65535) - 65536 * (a = Math.floor(n / 65536)), m = (n = m + a + 65535) - 65536 * (a = Math.floor(n / 65536)), g = (n = g + a + 65535) - 65536 * (a = Math.floor(n / 65536)), b = (n = b + a + 65535) - 65536 * (a = Math.floor(n / 65536)), v = (n = v + a + 65535) - 65536 * (a = Math.floor(n / 65536)), S = (n = S + a + 65535) - 65536 * (a = Math.floor(n / 65536)), o += a - 1 + 37 * (a - 1), e[0] = o, e[1] = s, e[2] = i, e[3] = c, e[4] = l, e[5] = u, e[6] = d, e[7] = f, e[8] = h, e[9] = y, e[10] = p, e[11] = m, e[12] = g, e[13] = b, e[14] = v, e[15] = S
            }

            function _(e, t) {
                P(e, t, t)
            }

            function I(e, t) {
                var r, n = a();
                for (r = 0; r < 16; r++) n[r] = t[r];
                for (r = 253; r >= 0; r--) _(n, n), 2 !== r && 4 !== r && P(n, n, t);
                for (r = 0; r < 16; r++) e[r] = n[r]
            }

            function B(e, t, r) {
                var n, o, s = new Uint8Array(32),
                    i = new Float64Array(80),
                    l = a(),
                    u = a(),
                    d = a(),
                    f = a(),
                    h = a(),
                    y = a();
                for (o = 0; o < 31; o++) s[o] = t[o];
                for (s[31] = 127 & t[31] | 64, s[0] &= 248, A(i, r), o = 0; o < 16; o++) u[o] = i[o], f[o] = l[o] = d[o] = 0;
                for (l[0] = f[0] = 1, o = 254; o >= 0; --o) b(l, u, n = s[o >>> 3] >>> (7 & o) & 1), b(d, f, n), T(h, l, d), E(l, l, d), T(d, u, f), E(u, u, f), _(f, h), _(y, l), P(l, d, l), P(d, u, h), T(h, l, d), E(l, l, d), _(u, l), E(d, f, y), P(l, d, c), T(l, l, f), P(d, d, l), P(l, f, y), P(f, u, i), _(u, h), b(l, u, n), b(d, f, n);
                for (o = 0; o < 16; o++) i[o + 16] = l[o], i[o + 32] = d[o], i[o + 48] = u[o], i[o + 64] = f[o];
                var p = i.subarray(32),
                    m = i.subarray(16);
                return I(p, p), P(m, m, p), v(e, m), 0
            }
            var N = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function k(e, t, r, n) {
                for (var a, o, s, i, c, l, u, d, f, h, y, p, m, g, b, v, S, w, A, T, E, P, _, I, B, k, O = new Int32Array(16), R = new Int32Array(16), j = e[0], x = e[1], F = e[2], U = e[3], C = e[4], M = e[5], K = e[6], L = e[7], z = t[0], V = t[1], G = t[2], Y = t[3], H = t[4], D = t[5], q = t[6], W = t[7], X = 0; n >= 128;) {
                    for (A = 0; A < 16; A++) T = 8 * A + X, O[A] = r[T + 0] << 24 | r[T + 1] << 16 | r[T + 2] << 8 | r[T + 3], R[A] = r[T + 4] << 24 | r[T + 5] << 16 | r[T + 6] << 8 | r[T + 7];
                    for (A = 0; A < 80; A++)
                        if (a = j, o = x, s = F, i = U, c = C, l = M, u = K, L, f = z, h = V, y = G, p = Y, m = H, g = D, b = q, W, _ = 65535 & (P = W), I = P >>> 16, B = 65535 & (E = L), k = E >>> 16, _ += 65535 & (P = (H >>> 14 | C << 18) ^ (H >>> 18 | C << 14) ^ (C >>> 9 | H << 23)), I += P >>> 16, B += 65535 & (E = (C >>> 14 | H << 18) ^ (C >>> 18 | H << 14) ^ (H >>> 9 | C << 23)), k += E >>> 16, _ += 65535 & (P = H & D ^ ~H & q), I += P >>> 16, B += 65535 & (E = C & M ^ ~C & K), k += E >>> 16, _ += 65535 & (P = N[2 * A + 1]), I += P >>> 16, B += 65535 & (E = N[2 * A]), k += E >>> 16, E = O[A % 16], I += (P = R[A % 16]) >>> 16, B += 65535 & E, k += E >>> 16, B += (I += (_ += 65535 & P) >>> 16) >>> 16, _ = 65535 & (P = w = 65535 & _ | I << 16), I = P >>> 16, B = 65535 & (E = S = 65535 & B | (k += B >>> 16) << 16), k = E >>> 16, _ += 65535 & (P = (z >>> 28 | j << 4) ^ (j >>> 2 | z << 30) ^ (j >>> 7 | z << 25)), I += P >>> 16, B += 65535 & (E = (j >>> 28 | z << 4) ^ (z >>> 2 | j << 30) ^ (z >>> 7 | j << 25)), k += E >>> 16, I += (P = z & V ^ z & G ^ V & G) >>> 16, B += 65535 & (E = j & x ^ j & F ^ x & F), k += E >>> 16, d = 65535 & (B += (I += (_ += 65535 & P) >>> 16) >>> 16) | (k += B >>> 16) << 16, v = 65535 & _ | I << 16, _ = 65535 & (P = p), I = P >>> 16, B = 65535 & (E = i), k = E >>> 16, I += (P = w) >>> 16, B += 65535 & (E = S), k += E >>> 16, x = a, F = o, U = s, C = i = 65535 & (B += (I += (_ += 65535 & P) >>> 16) >>> 16) | (k += B >>> 16) << 16, M = c, K = l, L = u, j = d, V = f, G = h, Y = y, H = p = 65535 & _ | I << 16, D = m, q = g, W = b, z = v, A % 16 == 15)
                            for (T = 0; T < 16; T++) E = O[T], _ = 65535 & (P = R[T]), I = P >>> 16, B = 65535 & E, k = E >>> 16, E = O[(T + 9) % 16], _ += 65535 & (P = R[(T + 9) % 16]), I += P >>> 16, B += 65535 & E, k += E >>> 16, S = O[(T + 1) % 16], _ += 65535 & (P = ((w = R[(T + 1) % 16]) >>> 1 | S << 31) ^ (w >>> 8 | S << 24) ^ (w >>> 7 | S << 25)), I += P >>> 16, B += 65535 & (E = (S >>> 1 | w << 31) ^ (S >>> 8 | w << 24) ^ S >>> 7), k += E >>> 16, S = O[(T + 14) % 16], I += (P = ((w = R[(T + 14) % 16]) >>> 19 | S << 13) ^ (S >>> 29 | w << 3) ^ (w >>> 6 | S << 26)) >>> 16, B += 65535 & (E = (S >>> 19 | w << 13) ^ (w >>> 29 | S << 3) ^ S >>> 6), k += E >>> 16, k += (B += (I += (_ += 65535 & P) >>> 16) >>> 16) >>> 16, O[T] = 65535 & B | k << 16, R[T] = 65535 & _ | I << 16;
                    _ = 65535 & (P = z), I = P >>> 16, B = 65535 & (E = j), k = E >>> 16, E = e[0], I += (P = t[0]) >>> 16, B += 65535 & E, k += E >>> 16, k += (B += (I += (_ += 65535 & P) >>> 16) >>> 16) >>> 16, e[0] = j = 65535 & B | k << 16, t[0] = z = 65535 & _ | I << 16, _ = 65535 & (P = V), I = P >>> 16, B = 65535 & (E = x), k = E >>> 16, E = e[1], I += (P = t[1]) >>> 16, B += 65535 & E, k += E >>> 16, k += (B += (I += (_ += 65535 & P) >>> 16) >>> 16) >>> 16, e[1] = x = 65535 & B | k << 16, t[1] = V = 65535 & _ | I << 16, _ = 65535 & (P = G), I = P >>> 16, B = 65535 & (E = F), k = E >>> 16, E = e[2], I += (P = t[2]) >>> 16, B += 65535 & E, k += E >>> 16, k += (B += (I += (_ += 65535 & P) >>> 16) >>> 16) >>> 16, e[2] = F = 65535 & B | k << 16, t[2] = G = 65535 & _ | I << 16, _ = 65535 & (P = Y), I = P >>> 16, B = 65535 & (E = U), k = E >>> 16, E = e[3], I += (P = t[3]) >>> 16, B += 65535 & E, k += E >>> 16, k += (B += (I += (_ += 65535 & P) >>> 16) >>> 16) >>> 16, e[3] = U = 65535 & B | k << 16, t[3] = Y = 65535 & _ | I << 16, _ = 65535 & (P = H), I = P >>> 16, B = 65535 & (E = C), k = E >>> 16, E = e[4], I += (P = t[4]) >>> 16, B += 65535 & E, k += E >>> 16, k += (B += (I += (_ += 65535 & P) >>> 16) >>> 16) >>> 16, e[4] = C = 65535 & B | k << 16, t[4] = H = 65535 & _ | I << 16, _ = 65535 & (P = D), I = P >>> 16, B = 65535 & (E = M), k = E >>> 16, E = e[5], I += (P = t[5]) >>> 16, B += 65535 & E, k += E >>> 16, k += (B += (I += (_ += 65535 & P) >>> 16) >>> 16) >>> 16, e[5] = M = 65535 & B | k << 16, t[5] = D = 65535 & _ | I << 16, _ = 65535 & (P = q), I = P >>> 16, B = 65535 & (E = K), k = E >>> 16, E = e[6], I += (P = t[6]) >>> 16, B += 65535 & E, k += E >>> 16, k += (B += (I += (_ += 65535 & P) >>> 16) >>> 16) >>> 16, e[6] = K = 65535 & B | k << 16, t[6] = q = 65535 & _ | I << 16, _ = 65535 & (P = W), I = P >>> 16, B = 65535 & (E = L), k = E >>> 16, E = e[7], I += (P = t[7]) >>> 16, B += 65535 & E, k += E >>> 16, k += (B += (I += (_ += 65535 & P) >>> 16) >>> 16) >>> 16, e[7] = L = 65535 & B | k << 16, t[7] = W = 65535 & _ | I << 16, X += 128, n -= 128
                }
                return n
            }

            function O(e, t, r) {
                var n, a = new Int32Array(8),
                    o = new Int32Array(8),
                    s = new Uint8Array(256),
                    i = r;
                for (a[0] = 1779033703, a[1] = 3144134277, a[2] = 1013904242, a[3] = 2773480762, a[4] = 1359893119, a[5] = 2600822924, a[6] = 528734635, a[7] = 1541459225, o[0] = 4089235720, o[1] = 2227873595, o[2] = 4271175723, o[3] = 1595750129, o[4] = 2917565137, o[5] = 725511199, o[6] = 4215389547, o[7] = 327033209, k(a, o, t, r), r %= 128, n = 0; n < r; n++) s[n] = t[i - r + n];
                for (s[r] = 128, s[(r = 256 - 128 * (r < 112 ? 1 : 0)) - 9] = 0, y(s, r - 8, i / 536870912 | 0, i << 3), k(a, o, s, r), n = 0; n < 8; n++) y(e, 8 * n, a[n], o[n]);
                return 0
            }

            function R(e, t) {
                var r = a(),
                    n = a(),
                    o = a(),
                    s = a(),
                    i = a(),
                    c = a(),
                    l = a(),
                    d = a(),
                    f = a();
                E(r, e[1], e[0]), E(f, t[1], t[0]), P(r, r, f), T(n, e[0], e[1]), T(f, t[0], t[1]), P(n, n, f), P(o, e[3], t[3]), P(o, o, u), P(s, e[2], t[2]), T(s, s, s), E(i, n, r), E(c, s, o), T(l, s, o), T(d, n, r), P(e[0], i, c), P(e[1], d, l), P(e[2], l, c), P(e[3], i, d)
            }

            function j(e, t, r) {
                for (var n = 0; n < 4; n++) b(e[n], t[n], r)
            }

            function x(e, t) {
                var r = a(),
                    n = a(),
                    o = a();
                I(o, t[2]), P(r, t[0], o), P(n, t[1], o), v(e, n), e[31] ^= w(r) << 7
            }

            function F(e, t, r) {
                var n, a;
                for (m(e[0], s), m(e[1], i), m(e[2], i), m(e[3], s), a = 255; a >= 0; --a) j(e, t, n = r[a / 8 | 0] >> (7 & a) & 1), R(t, e), R(e, e), j(e, t, n)
            }

            function U(e, t) {
                var r = [a(), a(), a(), a()];
                m(r[0], d), m(r[1], f), m(r[2], i), P(r[3], d, f), F(e, r, t)
            }
            var C = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function M(e, t) {
                var r, n, a, o;
                for (n = 63; n >= 32; --n) {
                    for (r = 0, a = n - 32, o = n - 12; a < o; ++a) t[a] += r - 16 * t[n] * C[a - (n - 32)], r = t[a] + 128 >> 8, t[a] -= 256 * r;
                    t[a] += r, t[n] = 0
                }
                for (r = 0, a = 0; a < 32; a++) t[a] += r - (t[31] >> 4) * C[a], r = t[a] >> 8, t[a] &= 255;
                for (a = 0; a < 32; a++) t[a] -= r * C[a];
                for (n = 0; n < 32; n++) t[n + 1] += t[n] >> 8, e[n] = 255 & t[n]
            }

            function K(e) {
                var t, r = new Float64Array(64);
                for (t = 0; t < 64; t++) r[t] = e[t];
                for (t = 0; t < 64; t++) e[t] = 0;
                M(e, r)
            }

            function L(e, t, r, n, o) {
                for (var s = new Uint8Array(64), i = [a(), a(), a(), a()], c = 0; c < 32; c++) s[c] = n[c];
                s[0] &= 248, s[31] &= 127, s[31] |= 64, U(i, s), x(s.subarray(32), i);
                var l, u = 128 & s[63];
                return l = o ? function(e, t, r, n, o) {
                    new Uint8Array(64);
                    var s, i, c = new Uint8Array(64),
                        l = new Uint8Array(64),
                        u = new Float64Array(64),
                        d = [a(), a(), a(), a()];
                    for (e[0] = 254, s = 1; s < 32; s++) e[s] = 255;
                    for (s = 0; s < 32; s++) e[32 + s] = n[s];
                    for (s = 0; s < r; s++) e[64 + s] = t[s];
                    for (s = 0; s < 64; s++) e[r + 64 + s] = o[s];
                    for (O(l, e, r + 128), K(l), U(d, l), x(e, d), s = 0; s < 32; s++) e[s + 32] = n[32 + s];
                    for (O(c, e, r + 64), K(c), s = 0; s < 64; s++) e[r + 64 + s] = 0;
                    for (s = 0; s < 64; s++) u[s] = 0;
                    for (s = 0; s < 32; s++) u[s] = l[s];
                    for (s = 0; s < 32; s++)
                        for (i = 0; i < 32; i++) u[s + i] += c[s] * n[i];
                    return M(e.subarray(32, r + 64), u), r + 64
                }(e, t, r, s, o) : function(e, t, r, n) {
                    new Uint8Array(64);
                    var o, s, i = new Uint8Array(64),
                        c = new Uint8Array(64),
                        l = new Float64Array(64),
                        u = [a(), a(), a(), a()];
                    for (o = 0; o < r; o++) e[64 + o] = t[o];
                    for (o = 0; o < 32; o++) e[32 + o] = n[o];
                    for (O(c, e.subarray(32), r + 32), K(c), U(u, c), x(e, u), o = 0; o < 32; o++) e[o + 32] = n[32 + o];
                    for (O(i, e, r + 64), K(i), o = 0; o < 64; o++) l[o] = 0;
                    for (o = 0; o < 32; o++) l[o] = c[o];
                    for (o = 0; o < 32; o++)
                        for (s = 0; s < 32; s++) l[o + s] += i[o] * n[s];
                    return M(e.subarray(32), l), r + 64
                }(e, t, r, s), e[63] |= u, l
            }

            function z(e, t) {
                var r = a(),
                    n = a(),
                    o = a(),
                    c = a(),
                    u = a(),
                    d = a(),
                    f = a();
                return m(e[2], i), A(e[1], t), _(o, e[1]), P(c, o, l), E(o, o, e[2]), T(c, e[2], c), _(u, c), _(d, u), P(f, d, u), P(r, f, o), P(r, r, c),
                    function(e, t) {
                        var r, n = a();
                        for (r = 0; r < 16; r++) n[r] = t[r];
                        for (r = 250; r >= 0; r--) _(n, n), 1 !== r && P(n, n, t);
                        for (r = 0; r < 16; r++) e[r] = n[r]
                    }(r, r), P(r, r, o), P(r, r, c), P(r, r, c), P(e[0], r, c), _(n, e[0]), P(n, n, c), S(n, o) && P(e[0], e[0], h), _(n, e[0]), P(n, n, c), S(n, o) ? -1 : (w(e[0]) === t[31] >> 7 && E(e[0], s, e[0]), P(e[3], e[0], e[1]), 0)
            }

            function V(e, t, r, n) {
                var o = function(e) {
                    var t = new Uint8Array(32),
                        r = a(),
                        n = a(),
                        o = a();
                    return A(r, e), T(n, r, i), E(o, r, i), I(n, n), P(n, n, o), v(t, n), t
                }(n);
                return o[31] |= 128 & t[63], t[63] &= 127,
                    function(e, t, r, n) {
                        var o, s = new Uint8Array(32),
                            i = new Uint8Array(64),
                            c = [a(), a(), a(), a()],
                            l = [a(), a(), a(), a()];
                        if (-1, r < 64) return -1;
                        if (z(l, n)) return -1;
                        for (o = 0; o < r; o++) e[o] = t[o];
                        for (o = 0; o < 32; o++) e[o + 32] = n[o];
                        if (O(i, e, r), K(i), F(c, l, i), U(l, t.subarray(32)), R(c, l), x(s, c), r -= 64, p(t, 0, s, 0)) {
                            for (o = 0; o < r; o++) e[o] = 0;
                            return -1
                        }
                        for (o = 0; o < r; o++) e[o] = t[o + 64];
                        return r
                    }(e, t, r, o)
            }

            function G() {
                for (var e, t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                for (t = 0; t < arguments.length; t++)
                    if ("[object Uint8Array]" !== (e = Object.prototype.toString.call(arguments[t]))) throw new TypeError("unexpected type " + e + ", use Uint8Array")
            }
            n.sharedKey = function(e, t) {
                if (G(t, e), 32 !== t.length) throw new Error("wrong public key length");
                if (32 !== e.length) throw new Error("wrong secret key length");
                var r = new Uint8Array(32);
                return B(r, e, t), r
            }, n.signMessage = function(e, t, r) {
                if (G(t, e), 32 !== e.length) throw new Error("wrong secret key length");
                if (r) {
                    if (G(r), 64 !== r.length) throw new Error("wrong random data length");
                    var n = new Uint8Array(128 + t.length);
                    return L(n, t, t.length, e, r), new Uint8Array(n.subarray(0, 64 + t.length))
                }
                var a = new Uint8Array(64 + t.length);
                return L(a, t, t.length, e), a
            }, n.openMessage = function(e, t) {
                if (G(t, e), 32 !== e.length) throw new Error("wrong public key length");
                var r = new Uint8Array(t.length),
                    n = V(r, t, t.length, e);
                if (n < 0) return null;
                for (var a = new Uint8Array(n), o = 0; o < a.length; o++) a[o] = r[o];
                return a
            }, n.sign = function(e, t, r) {
                if (G(e, t), 32 !== e.length) throw new Error("wrong secret key length");
                if (r && (G(r), 64 !== r.length)) throw new Error("wrong random data length");
                var n = new Uint8Array((r ? 128 : 64) + t.length);
                L(n, t, t.length, e, r);
                for (var a = new Uint8Array(64), o = 0; o < a.length; o++) a[o] = n[o];
                return a
            }, n.verify = function(e, t, r) {
                if (G(t, r, e), 64 !== r.length) throw new Error("wrong signature length");
                if (32 !== e.length) throw new Error("wrong public key length");
                var n, a = new Uint8Array(64 + t.length),
                    o = new Uint8Array(64 + t.length);
                for (n = 0; n < 64; n++) a[n] = r[n];
                for (n = 0; n < t.length; n++) a[n + 64] = t[n];
                return V(o, a, a.length, e) >= 0
            }, n.generateKeyPair = function(e) {
                if (G(e), 32 !== e.length) throw new Error("wrong seed length");
                for (var t = new Uint8Array(32), r = new Uint8Array(32), n = 0; n < 32; n++) t[n] = e[n];
                return B(r, t, o), t[0] &= 248, t[31] &= 127, t[31] |= 64, r[31] &= 127, {
                    public: r,
                    private: t
                }
            }, t.default = n
        },
        9946: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, a, o;
            t.Utf8ArrayToStr = (n = new Array(128), a = String.fromCodePoint || String.fromCharCode, o = [], function(e) {
                var t, r, s = e.length;
                o.length = 0;
                for (var i = 0; i < s;)(r = e[i++]) <= 127 ? t = r : r <= 223 ? t = (31 & r) << 6 | 63 & e[i++] : r <= 239 ? t = (15 & r) << 12 | (63 & e[i++]) << 6 | 63 & e[i++] : String.fromCodePoint ? t = (7 & r) << 18 | (63 & e[i++]) << 12 | (63 & e[i++]) << 6 | 63 & e[i++] : (t = 63, i += 3), o.push(n[t] || (n[t] = a(t)));
                return o.join("")
            })
        },
        9947: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e.INTEGER = "integer", e.BOOLEAN = "boolean", e.STRING = "string", e.BINARY = "binary"
                }(t.DATA_FIELD_TYPE || (t.DATA_FIELD_TYPE = {})), t.anyOf = function(e, t) {
                    return new AnyOfClass(e, t)
                };
            class AnyOfClass {
                constructor(e, t) {
                    this._items = e, this.type = "anyOf", this.discriminatorField = "type", this.discriminatorBytePos = 0, Object.assign(this, t)
                }
                itemByKey(e) {
                    const t = this._items.find(([t, r, n]) => n === e || t == e);
                    return t && {
                        schema: t[1],
                        key: t[0],
                        strKey: t[2]
                    }
                }
                itemByByteKey(e) {
                    const t = this._items.find(([t, r]) => t === e);
                    return t && {
                        schema: t[1],
                        key: t[0],
                        strKey: t[2] || t[0].toString(10)
                    }
                }
            }
        },
        9948: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(6257),
                a = r(6652),
                o = r(6081);
            t.serializerFromSchema = (e, r) => o => {
                let s, i;
                if ("array" === e.type) return s = t.serializerFromSchema(e.items, r), i = a.concat(...o.map(e => s(e))), a.concat((e.toBytes || n.SHORT)(o.length), i);
                if ("object" === e.type) {
                    let n = Uint8Array.from([]);
                    if (e.optional && null == o) return Uint8Array.from([0]);
                    if (e.schema.forEach(e => {
                            const [c, l] = e;
                            let u;
                            u = Array.isArray(c) ? c.reduce((e, t) => Object.assign({}, e, {
                                [t]: o[t]
                            }), {}) : o[c], s = t.serializerFromSchema(l, r), i = s(u), n = a.concat(n, i)
                        }), e.withLength) {
                        const t = e.withLength.toBytes(n.length);
                        n = a.concat(t, n)
                    }
                    return e.optional && (n = a.concat([1], n)), n
                }
                if ("anyOf" === e.type) {
                    const c = o[e.discriminatorField],
                        l = e.itemByKey(c);
                    if (null == l) throw new Error("Serializer Error: Unknown anyOf type: " + c);
                    return "boolean" === l.strKey && 6 === l.key && !1 === o.value && (l.key = 7), s = t.serializerFromSchema(l.schema, r), null == e.valueField ? s(o) : (i = s(o[e.valueField]), a.concat((e.toBytes || n.BYTE)(l.key), i))
                }
                if ("primitive" === e.type || void 0 === e.type) return e.toBytes(o);
                if ("dataTxField" === e.type) {
                    const c = n.LEN(n.SHORT)(n.STRING)(o.key),
                        l = o.type,
                        u = e.items.get(l);
                    if (null == u) throw new Error("Serializer Error: Unknown dataTxField type: " + l);
                    const d = [...e.items.values()].findIndex(e => e === u);
                    return s = t.serializerFromSchema(u, r), i = s(o.value), a.concat(c, n.BYTE(d), i)
                }
                throw new Error("Serializer Error: Unknown schema type: " + e.type)
            }, t.serializeTx = function(e, r) {
                const {
                    type: n,
                    version: a
                } = e, s = o.getTransactionSchema(n, a);
                return t.serializerFromSchema(s, r)(e)
            }, t.serializeOrder = function(e, r) {
                const {
                    version: n
                } = e, a = 2 == n ? o.orderSchemaV2 : o.orderSchemaV0;
                return t.serializerFromSchema(a, r)(e)
            }
        },
        9949: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(6653),
                a = r(6652),
                o = r(6081);
            t.parserFromSchema = (e, r) => (o, s = 0) => {
                let i = s;
                if ("array" === e.type) {
                    const c = [],
                        {
                            value: l,
                            shift: u
                        } = (e.fromBytes || n.P_SHORT)(o, s);
                    return i += u, a.range(0, l).forEach(n => {
                        const a = t.parserFromSchema(e.items, r),
                            {
                                value: s,
                                shift: l
                            } = a(o, i);
                        c.push(s), i += l
                    }), {
                        value: c,
                        shift: i - s
                    }
                }
                if ("object" === e.type) {
                    if (e.optional) {
                        const e = 1 === o[i];
                        if (i += 1, !e) return {
                            value: void 0,
                            shift: 1
                        }
                    }
                    if (e.withLength) {
                        const t = e.withLength.fromBytes(o, i);
                        i += t.shift
                    }
                    const n = {};
                    return e.schema.forEach(e => {
                        const [a, s] = e, c = t.parserFromSchema(s, r), {
                            value: l,
                            shift: u
                        } = c(o, i);
                        i += u, void 0 !== l && (Array.isArray(a) ? Object.assign(n, l) : n[a] = l)
                    }), {
                        value: n,
                        shift: i - s
                    }
                }
                if ("anyOf" === e.type) {
                    const a = (e.fromBytes || n.P_BYTE)(o, i + e.discriminatorBytePos);
                    e.valueField && 0 === e.discriminatorBytePos && (i += a.shift);
                    const c = e.itemByByteKey(a.value);
                    if (null == c) throw new Error("Failed to get schema for item with bytecode: " + a.value);
                    const l = t.parserFromSchema(c.schema, r),
                        {
                            value: u,
                            shift: d
                        } = l(o, i);
                    return i += d, {
                        value: e.valueField ? {
                            [e.discriminatorField]: c.strKey,
                            [e.valueField]: u
                        } : u,
                        shift: i - s
                    }
                }
                if ("dataTxField" === e.type) {
                    const a = n.byteToStringWithLength(o, i);
                    i += a.shift;
                    let s = n.P_BYTE(o, i);
                    i += s.shift;
                    const c = [...e.items].find((e, t) => t === s.value);
                    if (!c) throw new Error("Parser Error: Unknown dataTxField type: " + s.value);
                    const l = t.parserFromSchema(c[1], r)(o, i);
                    return {
                        value: {
                            value: l.value,
                            key: a.value,
                            type: c[0]
                        },
                        shift: l.shift + a.shift + s.shift
                    }
                }
                if ("primitive" === e.type || void 0 === e.type) {
                    const t = e.fromBytes;
                    let {
                        value: a,
                        shift: i
                    } = t(o, s);
                    return t === n.P_LONG && r && (a = r(a)), {
                        value: a,
                        shift: i
                    }
                }
                throw new Error("Parser Error: Unknown schema type: " + e.type)
            }, t.parseHeader = e => {
                let t = 0,
                    r = n.P_BYTE(e, t);
                t += r.shift, 0 === r.value && (r = n.P_BYTE(e, t), t += r.shift);
                let a = n.P_BYTE(e, t);
                return {
                    type: r.value,
                    version: a.value
                }
            }, t.parseTx = function(e, r) {
                const {
                    type: n,
                    version: a
                } = t.parseHeader(e), s = o.getTransactionSchema(n, a);
                return t.parserFromSchema(s, r)(e).value
            }, t.parseOrder = function(e, r) {
                return t.parserFromSchema(o.orderSchemaV2, r)(e).value
            }
        },
        9950: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(9951),
                {
                    parse: a,
                    stringify: o
                } = n(),
                s = r(6081),
                i = r(6257),
                c = r(5543);

            function l(e, t) {
                return 0 === e.length ? t : "object" == typeof t ? l(e.slice(1), t[e[0]]) : void 0
            }

            function u(e, t) {
                const r = [],
                    n = [];

                function a(s) {
                    return "string" == typeof s && (u = e, function e(t, r) {
                        if (null == r) return !1;
                        if (0 === t.length && ("primitive" === r.type || void 0 === r.type)) return r.toBytes === i.LONG;
                        if ("object" === r.type) {
                            const n = r.schema.find(([e, r]) => e === t[0]);
                            return e(t.slice(1), n && n[1])
                        }
                        if ("array" === r.type) return e(t.slice(1), r.items);
                        if ("dataTxField" === r.type) {
                            if ("value" !== t[0]) return !1;
                            const n = l(c.slice(0, c.length - 1), u),
                                a = r.items.get(n.type);
                            return e(t.slice(1), a)
                        }
                        if ("anyOf" === r.type) {
                            const n = l(c.slice(0, c.length - 1), u)[r.discriminatorField],
                                a = r.itemByKey(n);
                            return !!a && (null != r.valueField && c[c.length - 1] === r.valueField ? e(t.slice(1), a.schema) : e(t, a.schema))
                        }
                        return !1
                    }(c = r, t)) ? s : "boolean" == typeof s || s instanceof Boolean || null === s || "number" == typeof s || s instanceof Number || "string" == typeof s || s instanceof String || s instanceof Date ? JSON.stringify(s) : Array.isArray(s) ? function(e) {
                        let t = "[";
                        const o = n.length;
                        n[o] = e;
                        for (let n = 0; n < e.length; n++) {
                            let s = n + "",
                                i = e[n];
                            void 0 !== i && "function" != typeof i ? (r[o] = s, t += a(i)) : t += "null", n < e.length - 1 && (t += ",")
                        }
                        return n.length = o, r.length = o, t += "]", t
                    }(s) : s && "object" == typeof s ? function(e) {
                        let t = !0,
                            s = "{";
                        const i = n.length;
                        n[i] = e;
                        for (let n in e)
                            if (e.hasOwnProperty(n)) {
                                let c = e[n];
                                o(c) && (t ? t = !1 : s += ",", s += '"' + n + '":', r[i] = n, s += a(c))
                            } return n.length = i, r.length = i, s += "}", s
                    }(s) : void 0;
                    var c, u
                }

                function o(e) {
                    return void 0 !== e && "function" != typeof e
                }
                return a(e) || ""
            }
            t.stringifyWithSchema = u, t.parseTx = function(e, t) {
                const r = a(e);
                return t ? c.convertTxLongFields(r, t) : r
            }, t.stringifyTx = function(e, t) {
                const {
                    type: r,
                    version: n
                } = e, a = s.getTransactionSchema(r, n);
                return u(c.convertLongFields(e, a, void 0, t), a)
            }, t.parseOrder = function(e, t) {
                const r = a(e),
                    n = 2 === r.version ? s.orderSchemaV2 : s.orderSchemaV0;
                return t ? c.convertLongFields(r, n, t) : r
            }, t.stringifyOrder = function(e, t) {
                const r = 2 === e.version ? s.orderSchemaV2 : s.orderSchemaV0;
                return u(c.convertLongFields(e, r, void 0, t), r)
            }
        },
        9952: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5549),
                a = r(5584),
                o = r(5543);
            t.order = function(e, t) {
                const r = a.isOrder(e) ? e.assetPair.amountAsset : e.amountAsset,
                    s = a.isOrder(e) ? e.assetPair.priceAsset : e.priceAsset,
                    i = a.isOrder(e) ? e.proofs : [],
                    {
                        matcherFee: c,
                        matcherPublicKey: l,
                        price: u,
                        amount: d,
                        orderType: f,
                        expiration: h,
                        timestamp: y
                    } = e,
                    p = y || Date.now(),
                    m = a.convertToPairs(t),
                    g = a.getSenderPublicKey(m, e),
                    b = {
                        orderType: f,
                        version: null === e.version ? void 0 : e.version || 2,
                        assetPair: {
                            amountAsset: r,
                            priceAsset: s
                        },
                        price: u,
                        amount: d,
                        timestamp: p,
                        expiration: h || p + 25056e5,
                        matcherFee: c || 3e5,
                        matcherPublicKey: l,
                        senderPublicKey: g,
                        proofs: i,
                        id: ""
                    },
                    v = o.binary.serializeOrder(b);
                return m.forEach(([e, t]) => a.addProof(b, n.signBytes(v, e), t)), b.id = n.hashBytes(v), void 0 === b.version && (b.signature = b.proofs[0]), b
            }
        },
        9953: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5549),
                a = r(5543),
                {
                    BASE58_STRING: o
                } = a.serializePrimitives,
                s = r(5584);
            t.cancelOrderParamsToBytes = e => n.concat(o(e.sender), o(e.orderId)), t.cancelOrder = function(e, t) {
                const r = s.convertToPairs(t),
                    a = s.getSenderPublicKey(r, {
                        senderPublicKey: void 0
                    });
                return {
                    sender: a,
                    orderId: e.orderId,
                    signature: n.signBytes(n.concat(o(a), o(e.orderId)), t)
                }
            }
        },
        9954: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(r(556)),
                o = r(5543),
                s = r(5549),
                i = r(5619),
                c = r(7460),
                l = r(7461),
                u = r(7454),
                d = r(7455),
                f = r(7457),
                h = r(7458),
                y = r(7459),
                p = r(7452),
                m = r(7462),
                g = r(7463),
                b = r(5584),
                v = r(7464),
                S = r(7456),
                w = r(7465),
                A = r(7466);

            function T(e) {
                return b.isOrder(e) ? o.binary.serializeOrder(e) : o.binary.serializeTx(e)
            }
            t.txTypeMap = {
                [i.TRANSACTION_TYPE.ISSUE]: {
                    sign: (e, t) => c.issue(e, t)
                },
                [i.TRANSACTION_TYPE.TRANSFER]: {
                    sign: (e, t) => l.transfer(e, t)
                },
                [i.TRANSACTION_TYPE.REISSUE]: {
                    sign: (e, t) => u.reissue(e, t)
                },
                [i.TRANSACTION_TYPE.BURN]: {
                    sign: (e, t) => d.burn(e, t)
                },
                [i.TRANSACTION_TYPE.LEASE]: {
                    sign: (e, t) => f.lease(e, t)
                },
                [i.TRANSACTION_TYPE.CANCEL_LEASE]: {
                    sign: (e, t) => h.cancelLease(e, t)
                },
                [i.TRANSACTION_TYPE.ALIAS]: {
                    sign: (e, t) => m.alias(e, t)
                },
                [i.TRANSACTION_TYPE.MASS_TRANSFER]: {
                    sign: (e, t) => p.massTransfer(e, t)
                },
                [i.TRANSACTION_TYPE.DATA]: {
                    sign: (e, t) => y.data(e, t)
                },
                [i.TRANSACTION_TYPE.SET_SCRIPT]: {
                    sign: (e, t) => g.setScript(e, t)
                },
                [i.TRANSACTION_TYPE.SET_ASSET_SCRIPT]: {
                    sign: (e, t) => v.setAssetScript(e, t)
                },
                [i.TRANSACTION_TYPE.SPONSORSHIP]: {
                    sign: (e, t) => w.sponsorship(e, t)
                },
                [i.TRANSACTION_TYPE.EXCHANGE]: {
                    sign: (e, t) => S.exchange(e, t)
                },
                [i.TRANSACTION_TYPE.INVOKE_SCRIPT]: {
                    sign: (e, t) => A.invokeScript(e, t)
                }
            }, t.signTx = function(e, r) {
                if (!t.txTypeMap[e.type]) throw new Error("Unknown tx type: " + e.type);
                return t.txTypeMap[e.type].sign(e, r)
            }, t.serialize = T, t.verify = function(e, t = 0, r) {
                r = r || e.senderPublicKey;
                const n = T(e),
                    a = null == e.version ? e.signature : e.proofs[t];
                return s.verifySignature(r, n, a)
            }, t.broadcast = function(e, t) {
                return a.default.post("transactions/broadcast", o.json.stringifyTx(e), {
                    baseURL: t,
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(e => e.data).catch(e => Promise.reject(e.response && 400 === e.response.status ? new Error(e.response.data.message) : e))
            }, t.addressBalance = function(e, t) {
                return a.default.get("addresses/balance/" + e, {
                    baseURL: t
                }).then(e => e.data && e.data.balance).catch(e => Promise.reject(e.response && 400 === e.response.status ? new Error(e.response.data.message) : e))
            }, t.addressDataByKey = function(e, t, r) {
                return a.default.get(`addresses/data/${e}/${t}`, {
                    baseURL: r
                }).then(e => {
                    switch (e.data.type) {
                        case "integer":
                        case "string":
                            return e.data.value;
                        case "binary":
                            return o.serializePrimitives.BASE64_STRING(e.data.value);
                        case "boolean":
                            return "true" === e.data.value
                    }
                    return null
                }).catch(e => e.response && 404 === e.response.status ? Promise.resolve(null) : Promise.reject(e.response && 400 === e.response.status ? new Error(e.response.data.message) : e))
            }, t.submitOrder = function(e, t) {
                return a.default.post("matcher/orderbook", o.json.stringifyOrder(e), {
                    baseURL: t,
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(e => e.data).catch(e => Promise.reject(e.response && 400 === e.response.status ? new Error(e.response.data.message) : e))
            }, t.cancelSubmittedOrder = function(e, t, r, n) {
                return a.default.post(`matcher/orderbook/${t||"WAVES"}/${r||"WAVES"}/cancel`, JSON.stringify(e), {
                    baseURL: n,
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(e => e.data).catch(e => Promise.reject(e.response && 400 === e.response.status ? new Error(e.response.data.message) : e))
            }
        },
        9955: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = r(5549),
                o = n(r(9956)),
                s = r(5543);
            class Seed {
                constructor(e) {
                    if (e.length < 12) throw new Error("Your seed length is less than allowed in config");
                    this.phrase = e, this.address = a.address(e), this.keyPair = {
                        privateKey: a.privateKey(e),
                        publicKey: a.publicKey(e)
                    }, Object.freeze(this), Object.freeze(this.keyPair)
                }
                encrypt(e, t) {
                    return Seed.encryptSeedPhrase(this.phrase, e, t)
                }
                static encryptSeedPhrase(e, t, r = 5e3) {
                    if (t && t.length, e.length < 12) throw new Error("The seed phrase you are trying to encrypt is too short");
                    return l(e, t, r)
                }
                static decryptSeedPhrase(e, t, r = 5e3) {
                    let n;
                    try {
                        n = u(e, t, r)
                    } catch (e) {
                        throw new Error("The password is wrong")
                    }
                    if ("" === n || n.length < 12) throw new Error("The password is wrong");
                    return n
                }
                static create(e = 15) {
                    const t = i(e);
                    if (t.length < 12) throw new Error("The resulted seed length is less than the minimum length (12)");
                    return new Seed(t)
                }
                static fromExistingPhrase(e) {
                    if (e.length < 12) throw new Error("The resulted seed length is less than the minimum length (12)");
                    return new Seed(e)
                }
            }

            function i(e) {
                const t = Array.from({
                        length: e
                    }).map(e => a.randomUint8Array(4).reduce((e, t, r) => e + t * Math.pow(2, 4 * r), 0)),
                    r = o.default.length,
                    n = [];
                for (let a = 0; a < e; a++) {
                    const e = t[a] % r;
                    n.push(o.default[e])
                }
                return n.join(" ")
            }

            function c(e, t = 5e3) {
                for (; t--;) {
                    const t = s.serializePrimitives.STRING(e);
                    e = a.byteArrayToHexString(a.sha256(t))
                }
                return e
            }

            function l(e, t, r) {
                if (!e || "string" != typeof e) throw new Error("Seed is required");
                if (!t || "string" != typeof t) throw new Error("Password is required");
                return t = c(t, r), a.libs.CryptoJS.AES.encrypt(e, t).toString()
            }

            function u(e, t, r) {
                if (!e || "string" != typeof e) throw new Error("Encrypted seed is required");
                if (!t || "string" != typeof t) throw new Error("Password is required");
                t = c(t, r);
                const n = a.libs.CryptoJS.AES.decrypt(e, t),
                    o = a.hexStringToByteArray(n.toString());
                return s.parsePrimitives.P_STRING_FIXED(o.length)(Uint8Array.from(o)).value
            }
            t.Seed = Seed, t.generateNewSeed = i, t.strengthenPassword = c, t.encryptSeed = l, t.decryptSeed = u
        },
        9956: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "rescue", "resemble", "resist", "resource", "response", "result", 'retire-pds">', "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"]
        }
    }
]);