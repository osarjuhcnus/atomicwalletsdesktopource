(window.webpackJsonp = window.webpackJsonp || []).push([
    [303], {
        5488: function(e, t, r) {
            var n = r(282).default;

            function a(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (a = function(e) {
                    return e ? r : t
                })(e)
            }
            e.exports = function(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== n(e) && "function" != typeof e) return {
                    default: e
                };
                var r = a(t);
                if (r && r.has(e)) return r.get(e);
                var s = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var u = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        u && (u.get || u.set) ? Object.defineProperty(s, o, u) : s[o] = e[o]
                    } return s.default = e, r && r.set(e, s), s
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        5492: function(e, t, r) {
            "use strict";
            var n = r(5488),
                a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPrivateKeyFromMnemonic = t.validateMnemonic = t.generateMnemonic = t.getPrivateKeyFromKeyStore = t.generateKeyStore = t.verifySignature = t.generateSignature = t.getAddressFromPrivateKey = t.getAddressFromPublicKey = t.generatePubKey = t.getPublicKeyFromPrivateKey = t.getPublicKey = t.generateRandomArray = t.generatePrivateKey = t.encodeAddress = t.checkAddress = t.decodeAddress = void 0;
            var s = a(r(322)),
                i = n(r(1410)),
                o = n(r(555)),
                u = a(r(1404)),
                c = r(85),
                d = a(r(6037)),
                f = a(r(2354)),
                l = a(r(253)),
                p = a(r(467)),
                h = r(6505),
                m = new c.ec("secp256k1"),
                v = function(e) {
                    var t = s.default.decode(e);
                    return Buffer.from(s.default.fromWords(t.words))
                };
            t.decodeAddress = v;
            t.checkAddress = function(e, t) {
                try {
                    if (!e.startsWith(t)) return !1;
                    var r = s.default.decode(e);
                    return 20 === v(e).length && r.prefix === t
                } catch (e) {
                    return !1
                }
            };
            var b = function(e) {
                var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tbnb",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hex";
                return t = Buffer.isBuffer(e) ? s.default.toWords(Buffer.from(e)) : s.default.toWords(Buffer.from(e, n)), s.default.encode(r, t)
            };
            t.encodeAddress = b;
            t.generatePrivateKey = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
                return (0, h.ab2hexstring)((0, f.default)(e))
            };
            t.generateRandomArray = function(e) {
                return (0, f.default)(e)
            };
            t.getPublicKey = function(e) {
                return m.keyFromPublic(e, "hex").getPublic()
            };
            var y = function(e) {
                if (!e || 64 !== e.length) throw new Error("invalid privateKey");
                return new c.ec("secp256k1").keyFromPrivate(e, "hex").getPublic().encode("hex", !1)
            };
            t.getPublicKeyFromPrivateKey = y;
            t.generatePubKey = function(e) {
                return new c.ec("secp256k1").keyFromPrivate(e).getPublic()
            };
            var g = function(e, t) {
                var r = m.keyFromPublic(e, "hex").getPublic().encodeCompressed(),
                    n = (0, h.ab2hexstring)(r),
                    a = (0, h.sha256ripemd160)(n);
                return b(a, t)
            };
            t.getAddressFromPublicKey = g;
            t.getAddressFromPrivateKey = function(e, t) {
                return g(y(e), t)
            };
            t.generateSignature = function(e, t) {
                var r = (0, h.sha256)(e),
                    n = Buffer.from(r, "hex");
                return l.default.sign(n, "string" == typeof t ? Buffer.from(t, "hex") : t)
            };
            t.verifySignature = function(e, t, r) {
                var n = Buffer.from(r, "hex");
                if (!l.default.isPoint(n)) throw new Error("Invalid public key provided");
                var a = (0, h.sha256)(t),
                    s = Buffer.from(a, "hex");
                return l.default.verify(s, n, Buffer.from(e, "hex"))
            };
            t.generateKeyStore = function(e, t) {
                var r = u.default.randomBytes(32),
                    n = u.default.randomBytes(16),
                    a = {
                        dklen: 32,
                        salt: r.toString("hex"),
                        c: 262144,
                        prf: "hmac-sha256"
                    },
                    s = u.default.pbkdf2Sync(Buffer.from(t), r, a.c, a.dklen, "sha256"),
                    i = u.default.createCipheriv("aes-256-ctr", s.slice(0, 32), n);
                if (!i) throw new Error("Unsupported cipher");
                var o = Buffer.concat([i.update(Buffer.from(e, "hex")), i.final()]),
                    c = Buffer.concat([s.slice(16, 32), o]);
                return {
                    version: 1,
                    id: p.default.v4({
                        random: u.default.randomBytes(16)
                    }),
                    crypto: {
                        ciphertext: o.toString("hex"),
                        cipherparams: {
                            iv: n.toString("hex")
                        },
                        cipher: "aes-256-ctr",
                        kdf: "pbkdf2",
                        kdfparams: a,
                        mac: (0, h.sha3)(c.toString("hex"))
                    }
                }
            };
            t.getPrivateKeyFromKeyStore = function(e, t) {
                if (!d.default.string(t)) throw new Error("No password given.");
                var r = d.default.object(e) ? e : JSON.parse(e),
                    n = r.crypto.kdfparams;
                if ("hmac-sha256" !== n.prf) throw new Error("Unsupported parameters to PBKDF2");
                var a = u.default.pbkdf2Sync(Buffer.from(t), Buffer.from(n.salt, "hex"), n.c, n.dklen, "sha256"),
                    s = Buffer.from(r.crypto.ciphertext, "hex"),
                    i = Buffer.concat([a.slice(16, 32), s]);
                if ((0, h.sha3)(i.toString("hex")) !== r.crypto.mac && (0, h.sha256)(i.toString("hex")) !== r.crypto.mac) throw new Error("Keystore mac check failed (sha3 & sha256) - wrong password?");
                var o = u.default.createDecipheriv(r.crypto.cipher, a.slice(0, 32), Buffer.from(r.crypto.cipherparams.iv, "hex"));
                return Buffer.concat([o.update(s), o.final()]).toString("hex")
            };
            t.generateMnemonic = function() {
                return o.generateMnemonic(256)
            };
            var w = o.validateMnemonic;
            t.validateMnemonic = w;
            t.getPrivateKeyFromMnemonic = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                if (!(o.validateMnemonic(e, o.wordlists.english) || o.validateMnemonic(e, o.wordlists.chinese_simplified) || o.validateMnemonic(e, o.wordlists.chinese_traditional) || o.validateMnemonic(e, o.wordlists.korean) || o.validateMnemonic(e, o.wordlists.french) || o.validateMnemonic(e, o.wordlists.italian) || o.validateMnemonic(e, o.wordlists.spanish) || o.validateMnemonic(e, o.wordlists.japanese))) throw new Error("wrong mnemonic format");
                var a = o.mnemonicToSeedSync(e, n);
                if (t) {
                    var s = i.fromSeed(a),
                        u = s.derivePath("44'/714'/0'/0/" + r);
                    if (!u.privateKey) throw new Error("child does not have a privateKey");
                    return u.privateKey.toString("hex")
                }
                return a.toString("hex")
            }
        },
        6497: function(e, t, r) {
            "use strict";
            var n = r(5488);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                decoder: !0,
                encoder: !0
            };
            t.encoder = t.decoder = void 0;
            var s = n(r(9090));
            t.decoder = s, Object.keys(s).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(a, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return s[e]
                    }
                }))
            }));
            var i = n(r(9096));
            t.encoder = i, Object.keys(i).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(a, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                }))
            }))
        },
        7190: function(e, t, r) {
            "use strict";
            var n = r(5488),
                a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BncClient = t.LedgerSigningDelegate = t.DefaultBroadcastDelegate = t.DefaultSigningDelegate = t.NETWORK_PREFIX_MAPPING = t.api = void 0;
            var s = a(r(462)),
                i = a(r(463)),
                o = a(r(151)),
                u = a(r(551)),
                c = a(r(552)),
                d = a(r(5665)),
                f = n(r(5492)),
                l = a(r(7202)),
                p = r(5694),
                h = a(r(7192)),
                m = r(6038),
                v = a(r(9146)),
                b = a(r(9148)),
                y = n(r(9149)),
                g = r(9150),
                w = r(9151);

            function _(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var x = Math.pow(10, 8),
                k = {
                    broadcast: "/api/v1/broadcast",
                    nodeInfo: "/api/v1/node-info",
                    getAccount: "/api/v1/account",
                    getMarkets: "/api/v1/markets",
                    getSwaps: "/api/v1/atomic-swaps",
                    getOpenOrders: "/api/v1/orders/open",
                    getDepth: "/api/v1/depth",
                    getTransactions: "/api/v1/transactions",
                    getTxs: "/bc/api/v1/txs",
                    getTx: "/api/v1/tx"
                };
            t.api = k;
            var P = {
                testnet: "tbnb",
                mainnet: "bnb"
            };
            t.NETWORK_PREFIX_MAPPING = P;
            var A = function() {
                var e = (0, c.default)(u.default.mark((function e(t, r) {
                    var n;
                    return u.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = this.getPrivateKey()) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", Promise.reject("Private key has to be set before signing a transaction"));
                            case 3:
                                return e.abrupt("return", t.sign(n, r));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function(t, r, n) {
                    return e.apply(this, arguments)
                }
            }();
            t.DefaultSigningDelegate = A;
            var B = function() {
                var e = (0, c.default)(u.default.mark((function e(t) {
                    return u.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", this.sendTransaction(t, !0));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }();
            t.DefaultBroadcastDelegate = B;
            var E = function(e, t, r, n, a) {
                return function() {
                    var s = (0, c.default)(u.default.mark((function s(i, o) {
                        var c, d, l, p;
                        return u.default.wrap((function(s) {
                            for (;;) switch (s.prev = s.next) {
                                case 0:
                                    return c = i.getSignBytes(o), t && t(c), s.prev = 2, s.next = 5, e.getPublicKey(a);
                                case 5:
                                    return d = s.sent, s.next = 8, e.sign(c, a);
                                case 8:
                                    l = s.sent, r && r(d, l), s.next = 16;
                                    break;
                                case 12:
                                    s.prev = 12, s.t0 = s.catch(2), console.warn("LedgerSigningDelegate error", s.t0), n && n(s.t0);
                                case 16:
                                    if (!l || !l.signature) {
                                        s.next = 19;
                                        break
                                    }
                                    return p = f.getPublicKey(d.pk.toString("hex")), s.abrupt("return", i.addSignature(p, l.signature));
                                case 19:
                                    return s.abrupt("return", i);
                                case 20:
                                case "end":
                                    return s.stop()
                            }
                        }), s, null, [
                            [2, 12]
                        ])
                    })));
                    return function(e, t) {
                        return s.apply(this, arguments)
                    }
                }()
            };
            t.LedgerSigningDelegate = E;
            var T = function(e) {
                    e.forEach((function(e) {
                        (e.coins || []).forEach((function(e) {
                            if ((0, m.checkNumber)(e.amount), !e.denom) throw new Error("invalid denmon")
                        }))
                    }))
                },
                C = function(e, t) {
                    t.forEach((function(t) {
                        var r = e[0].coins.find((function(e) {
                            return e.denom === t.denom
                        }));
                        if (r) {
                            var n = new d.default(r.amount);
                            r.amount = Number(n.plus(t.amount).toString())
                        } else e[0].coins.push(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? _(Object(r), !0).forEach((function(t) {
                                    (0, o.default)(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({}, t))
                    }))
                },
                S = function() {
                    function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        if ((0, s.default)(this, e), (0, o.default)(this, "_httpClient", void 0), (0, o.default)(this, "_signingDelegate", void 0), (0, o.default)(this, "_broadcastDelegate", void 0), (0, o.default)(this, "_useAsyncBroadcast", void 0), (0, o.default)(this, "_source", void 0), (0, o.default)(this, "tokens", void 0), (0, o.default)(this, "swap", void 0), (0, o.default)(this, "gov", void 0), (0, o.default)(this, "bridge", void 0), (0, o.default)(this, "stake", void 0), (0, o.default)(this, "chainId", void 0), (0, o.default)(this, "addressPrefix", "tbnb"), (0, o.default)(this, "network", "testnet"), (0, o.default)(this, "address", void 0), (0, o.default)(this, "_setPkPromise", void 0), (0, o.default)(this, "account_number", void 0), (0, o.default)(this, "_privateKey", null), !t) throw new Error("Binance chain server should not be null");
                        this._httpClient = new h.default(t), this._signingDelegate = A, this._broadcastDelegate = B, this._useAsyncBroadcast = r, this._source = n, this.tokens = new y.default(this), this.swap = new b.default(this), this.gov = new v.default(this), this.bridge = new g.Bridge(this), this.stake = new w.Stake(this)
                    }
                    var t, r, n, a, _, S, M, O, D, j, K, N, q, F, I, U, L, V, W, R, z, H, J, $;
                    return (0, i.default)(e, [{
                        key: "initChain",
                        value: ($ = (0, c.default)(u.default.mark((function e() {
                            var t;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.chainId) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 3, this._httpClient.request("get", k.nodeInfo);
                                    case 3:
                                        t = e.sent, this.chainId = t.result.node_info && t.result.node_info.network;
                                    case 5:
                                        return e.abrupt("return", this);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return $.apply(this, arguments)
                        })
                    }, {
                        key: "chooseNetwork",
                        value: function(e) {
                            this.addressPrefix = P[e] || "tbnb", this.network = P[e] ? e : "testnet"
                        }
                    }, {
                        key: "setPrivateKey",
                        value: (J = (0, c.default)(u.default.mark((function e(t) {
                            var r, n, a, s, i = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = i.length > 1 && void 0 !== i[1] && i[1], t === this._privateKey) {
                                            e.next = 19;
                                            break
                                        }
                                        if (n = f.getAddressFromPrivateKey(t, this.addressPrefix)) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error("address is falsy: ".concat(n, ". invalid private key?"));
                                    case 5:
                                        if (this._privateKey = t, this.address = n, r) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.prev = 8, a = this._setPkPromise = this._httpClient.request("get", "".concat(k.getAccount, "/").concat(n)), e.next = 12, a;
                                    case 12:
                                        s = e.sent, this.account_number = s.result.account_number, e.next = 19;
                                        break;
                                    case 16:
                                        throw e.prev = 16, e.t0 = e.catch(8), new Error("unable to query the address on the blockchain. try sending it some funds first: ".concat(n));
                                    case 19:
                                        return e.abrupt("return", this);
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [8, 16]
                            ])
                        }))), function(e) {
                            return J.apply(this, arguments)
                        })
                    }, {
                        key: "removePrivateKey",
                        value: function() {
                            return this._privateKey = null, this
                        }
                    }, {
                        key: "getPrivateKey",
                        value: function() {
                            return this._privateKey
                        }
                    }, {
                        key: "setAccountNumber",
                        value: function(e) {
                            this.account_number = e
                        }
                    }, {
                        key: "useAsyncBroadcast",
                        value: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            return this._useAsyncBroadcast = e, this
                        }
                    }, {
                        key: "setSigningDelegate",
                        value: function(e) {
                            if ("function" != typeof e) throw new Error("signing delegate must be a function");
                            return this._signingDelegate = e, this
                        }
                    }, {
                        key: "setBroadcastDelegate",
                        value: function(e) {
                            if ("function" != typeof e) throw new Error("broadcast delegate must be a function");
                            return this._broadcastDelegate = e, this
                        }
                    }, {
                        key: "useDefaultSigningDelegate",
                        value: function() {
                            return this._signingDelegate = A, this
                        }
                    }, {
                        key: "useDefaultBroadcastDelegate",
                        value: function() {
                            return this._broadcastDelegate = B, this
                        }
                    }, {
                        key: "useLedgerSigningDelegate",
                        value: function() {
                            return this._signingDelegate = E.apply(void 0, arguments), this
                        }
                    }, {
                        key: "transfer",
                        value: (H = (0, c.default)(u.default.mark((function e(t, r, n, a) {
                            var s, i, o, c, l, h, v, b, y = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s = y.length > 4 && void 0 !== y[4] ? y[4] : "", i = y.length > 5 && void 0 !== y[5] ? y[5] : null, o = f.decodeAddress(t), c = f.decodeAddress(r), n = new d.default(n), n = Number(n.mul(x).toString()), (0, m.checkNumber)(n, "amount"), h = {
                                            inputs: [{
                                                address: o,
                                                coins: [l = {
                                                    denom: a,
                                                    amount: n
                                                }]
                                            }],
                                            outputs: [{
                                                address: c,
                                                coins: [l]
                                            }],
                                            aminoPrefix: p.AminoPrefix.MsgSend
                                        }, v = {
                                            inputs: [{
                                                address: t,
                                                coins: [{
                                                    amount: n,
                                                    denom: a
                                                }]
                                            }],
                                            outputs: [{
                                                address: r,
                                                coins: [{
                                                    amount: n,
                                                    denom: a
                                                }]
                                            }]
                                        }, e.next = 12, this._prepareTransaction(h, v, t, i, s);
                                    case 12:
                                        return b = e.sent, e.abrupt("return", this._broadcastDelegate(b));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r, n) {
                            return H.apply(this, arguments)
                        })
                    }, {
                        key: "multiSend",
                        value: (z = (0, c.default)(u.default.mark((function e(t, r) {
                            var n, a, s, i, o, c, l, h, m, v, b = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = b.length > 2 && void 0 !== b[2] ? b[2] : "", a = b.length > 3 && void 0 !== b[3] ? b[3] : null, t) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error("fromAddress should not be falsy");
                                    case 4:
                                        if (Array.isArray(r)) {
                                            e.next = 6;
                                            break
                                        }
                                        throw new Error("outputs should be array");
                                    case 6:
                                        return T(r), r.forEach((function(e) {
                                            e.coins = e.coins.sort((function(e, t) {
                                                return e.denom.localeCompare(t.denom)
                                            })), e.coins.forEach((function(e) {
                                                var t = new d.default(e.amount);
                                                e.amount = Number(t.mul(x).toString())
                                            }))
                                        })), s = f.decodeAddress(t), i = [{
                                            address: s,
                                            coins: []
                                        }], o = [], r.forEach((function(e) {
                                            var t = f.decodeAddress(e.to);
                                            C(i, e.coins), o.push({
                                                address: t,
                                                coins: e.coins
                                            })
                                        })), c = {
                                            inputs: i,
                                            outputs: o,
                                            aminoPrefix: p.AminoPrefix.MsgSend
                                        }, l = [{
                                            address: t,
                                            coins: []
                                        }], h = [], r.forEach((function(e, t) {
                                            h.push({
                                                address: e.to,
                                                coins: []
                                            }), e.coins.forEach((function(e) {
                                                h[t].coins.push(e)
                                            })), C(l, e.coins)
                                        })), m = {
                                            inputs: l,
                                            outputs: h
                                        }, e.next = 19, this._prepareTransaction(c, m, t, a, n);
                                    case 19:
                                        return v = e.sent, e.abrupt("return", this._broadcastDelegate(v));
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return z.apply(this, arguments)
                        })
                    }, {
                        key: "cancelOrder",
                        value: (R = (0, c.default)(u.default.mark((function e(t, r, n) {
                            var a, s, i, o, c, d = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = d.length > 3 && void 0 !== d[3] ? d[3] : null, s = f.decodeAddress(t), i = {
                                            sender: s,
                                            symbol: r,
                                            refid: n,
                                            aminoPrefix: p.AminoPrefix.CancelOrderMsg
                                        }, o = {
                                            refid: n,
                                            sender: t,
                                            symbol: r
                                        }, e.next = 6, this._prepareTransaction(i, o, t, a, "");
                                    case 6:
                                        return c = e.sent, e.abrupt("return", this._broadcastDelegate(c));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return R.apply(this, arguments)
                        })
                    }, {
                        key: "placeOrder",
                        value: (W = (0, c.default)(u.default.mark((function e() {
                            var t, r, n, a, s, i, o, c, l, h, v, b, y, g, w = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = w.length > 0 && void 0 !== w[0] ? w[0] : this.address, r = w.length > 1 ? w[1] : void 0, n = w.length > 2 ? w[2] : void 0, a = w.length > 3 ? w[3] : void 0, s = w.length > 4 ? w[4] : void 0, i = w.length > 5 && void 0 !== w[5] ? w[5] : null, o = w.length > 6 && void 0 !== w[6] ? w[6] : 1, t) {
                                            e.next = 9;
                                            break
                                        }
                                        throw new Error("address should not be falsy");
                                    case 9:
                                        if (r) {
                                            e.next = 11;
                                            break
                                        }
                                        throw new Error("symbol should not be falsy");
                                    case 11:
                                        if (1 === n || 2 === n) {
                                            e.next = 13;
                                            break
                                        }
                                        throw new Error("side can only be 1 or 2");
                                    case 13:
                                        if (1 === o || 3 === o) {
                                            e.next = 15;
                                            break
                                        }
                                        throw new Error("timeinforce can only be 1 or 3");
                                    case 15:
                                        if (c = f.decodeAddress(t), 0 === i || i) {
                                            e.next = 21;
                                            break
                                        }
                                        return e.next = 19, this._httpClient.request("get", "".concat(k.getAccount, "/").concat(t));
                                    case 19:
                                        l = e.sent, i = l.result && l.result.sequence;
                                    case 21:
                                        return h = new d.default(a), v = new d.default(s), b = {
                                            sender: c,
                                            id: "".concat(c.toString("hex"), "-").concat(i + 1).toUpperCase(),
                                            symbol: r,
                                            ordertype: 2,
                                            side: n,
                                            price: parseFloat(h.mul(x).toString()),
                                            quantity: parseFloat(v.mul(x).toString()),
                                            timeinforce: o,
                                            aminoPrefix: p.AminoPrefix.NewOrderMsg
                                        }, y = {
                                            id: b.id,
                                            ordertype: b.ordertype,
                                            price: b.price,
                                            quantity: b.quantity,
                                            sender: t,
                                            side: b.side,
                                            symbol: b.symbol,
                                            timeinforce: o
                                        }, (0, m.checkNumber)(b.price, "price"), (0, m.checkNumber)(b.quantity, "quantity"), e.next = 29, this._prepareTransaction(b, y, t, i, "");
                                    case 29:
                                        return g = e.sent, e.abrupt("return", this._broadcastDelegate(g));
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return W.apply(this, arguments)
                        })
                    }, {
                        key: "list",
                        value: (V = (0, c.default)(u.default.mark((function e(t, r, n, a, s) {
                            var i, o, c, l, h, m, v = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (i = v.length > 5 && void 0 !== v[5] ? v[5] : null, o = f.decodeAddress(t), t) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error("address should not be falsy");
                                    case 4:
                                        if (!(r <= 0)) {
                                            e.next = 6;
                                            break
                                        }
                                        throw new Error("proposal id should larger than 0");
                                    case 6:
                                        if (!(s <= 0)) {
                                            e.next = 8;
                                            break
                                        }
                                        throw new Error("price should larger than 0");
                                    case 8:
                                        if (n) {
                                            e.next = 10;
                                            break
                                        }
                                        throw new Error("baseAsset should not be falsy");
                                    case 10:
                                        if (a) {
                                            e.next = 12;
                                            break
                                        }
                                        throw new Error("quoteAsset should not be falsy");
                                    case 12:
                                        return c = Number(new d.default(s).mul(x).toString()), l = {
                                            from: o,
                                            proposal_id: r,
                                            base_asset_symbol: n,
                                            quote_asset_symbol: a,
                                            init_price: c,
                                            aminoPrefix: p.AminoPrefix.ListMsg
                                        }, h = {
                                            base_asset_symbol: n,
                                            from: t,
                                            init_price: c,
                                            proposal_id: r,
                                            quote_asset_symbol: a
                                        }, e.next = 17, this._prepareTransaction(l, h, t, i, "");
                                    case 17:
                                        return m = e.sent, e.abrupt("return", this._broadcastDelegate(m));
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r, n, a) {
                            return V.apply(this, arguments)
                        })
                    }, {
                        key: "listMiniToken",
                        value: (L = (0, c.default)(u.default.mark((function e(t) {
                            var r, n, a, s, i, o, c, f, l;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.from, n = t.baseAsset, a = t.quoteAsset, s = t.initPrice, i = t.sequence, o = void 0 === i ? null : i, (0, y.validateMiniTokenSymbol)(n), !(s <= 0)) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error("price should larger than 0");
                                    case 4:
                                        if (r) {
                                            e.next = 6;
                                            break
                                        }
                                        throw new Error("address should not be falsy");
                                    case 6:
                                        if (a) {
                                            e.next = 8;
                                            break
                                        }
                                        throw new Error("quoteAsset should not be falsy");
                                    case 8:
                                        return c = Number(new d.default(s).mul(x).toString()), f = new p.ListMiniMsg({
                                            from: r,
                                            base_asset_symbol: n,
                                            quote_asset_symbol: a,
                                            init_price: c
                                        }), e.next = 12, this._prepareTransaction(f.getMsg(), f.getSignMsg(), r, o);
                                    case 12:
                                        return l = e.sent, e.abrupt("return", this._broadcastDelegate(l));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return L.apply(this, arguments)
                        })
                    }, {
                        key: "setAccountFlags",
                        value: (U = (0, c.default)(u.default.mark((function e(t, r) {
                            var n, a, s, i, o, c = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = c.length > 2 && void 0 !== c[2] ? c[2] : null, a = f.decodeAddress(t), s = {
                                            from: a,
                                            flags: r,
                                            aminoPrefix: p.AminoPrefix.SetAccountFlagsMsg
                                        }, i = {
                                            flags: r,
                                            from: t
                                        }, e.next = 6, this._prepareTransaction(s, i, t, n, "");
                                    case 6:
                                        return o = e.sent, e.abrupt("return", this._broadcastDelegate(o));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return U.apply(this, arguments)
                        })
                    }, {
                        key: "_prepareTransaction",
                        value: (I = (0, c.default)(u.default.mark((function e(t, r, n) {
                            var a, s, i, o, c = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = c.length > 3 && void 0 !== c[3] ? c[3] : null, s = c.length > 4 && void 0 !== c[4] ? c[4] : "", this.account_number && (0 === a || a) || !n) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 5, this._httpClient.request("get", "".concat(k.getAccount, "/").concat(n));
                                    case 5:
                                        i = e.sent, a = i.result.sequence, this.account_number = i.result.account_number, e.next = 13;
                                        break;
                                    case 10:
                                        if (!this._setPkPromise) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, this._setPkPromise;
                                    case 13:
                                        return o = new l.default({
                                            accountNumber: "number" != typeof this.account_number ? parseInt(this.account_number) : this.account_number,
                                            chainId: this.chainId,
                                            memo: s,
                                            msg: t,
                                            sequence: "number" != typeof a ? parseInt(a) : a,
                                            source: this._source
                                        }), e.abrupt("return", this._signingDelegate.call(this, o, r));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return I.apply(this, arguments)
                        })
                    }, {
                        key: "sendTransaction",
                        value: (F = (0, c.default)(u.default.mark((function e(t, r) {
                            var n;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.serialize(), e.abrupt("return", this.sendRawTransaction(n, r));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return F.apply(this, arguments)
                        })
                    }, {
                        key: "sendRawTransaction",
                        value: (q = (0, c.default)(u.default.mark((function e(t) {
                            var r, n, a = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = a.length > 1 && void 0 !== a[1] ? a[1] : !this._useAsyncBroadcast, n = {
                                            data: t,
                                            headers: {
                                                "content-type": "text/plain"
                                            }
                                        }, e.abrupt("return", this._httpClient.request("post", "".concat(k.broadcast, "?sync=").concat(r), null, n));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return q.apply(this, arguments)
                        })
                    }, {
                        key: "_sendTransaction",
                        value: (N = (0, c.default)(u.default.mark((function e(t, r, n) {
                            var a, s, i, o, c = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = c.length > 3 && void 0 !== c[3] ? c[3] : null, s = c.length > 4 && void 0 !== c[4] ? c[4] : "", i = c.length > 5 && void 0 !== c[5] ? c[5] : !this._useAsyncBroadcast, e.next = 5, this._prepareTransaction(t, r, n, a, s);
                                    case 5:
                                        return o = e.sent, e.abrupt("return", this.sendTransaction(o, i));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return N.apply(this, arguments)
                        })
                    }, {
                        key: "getAccount",
                        value: (K = (0, c.default)(u.default.mark((function e() {
                            var t, r, n = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = n.length > 0 && void 0 !== n[0] ? n[0] : this.address) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("address should not be falsy");
                                    case 3:
                                        return e.prev = 3, e.next = 6, this._httpClient.request("get", "".concat(k.getAccount, "/").concat(t));
                                    case 6:
                                        return r = e.sent, e.abrupt("return", r);
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(3), e.abrupt("return", null);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [3, 10]
                            ])
                        }))), function() {
                            return K.apply(this, arguments)
                        })
                    }, {
                        key: "getBalance",
                        value: (j = (0, c.default)(u.default.mark((function e() {
                            var t, r, n = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.length > 0 && void 0 !== n[0] ? n[0] : this.address, e.prev = 1, e.next = 4, this.getAccount(t);
                                    case 4:
                                        return r = e.sent, e.abrupt("return", r.result.balances);
                                    case 8:
                                        return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", []);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [1, 8]
                            ])
                        }))), function() {
                            return j.apply(this, arguments)
                        })
                    }, {
                        key: "getMarkets",
                        value: (D = (0, c.default)(u.default.mark((function e() {
                            var t, r, n, a = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = a.length > 0 && void 0 !== a[0] ? a[0] : 1e3, r = a.length > 1 && void 0 !== a[1] ? a[1] : 0, e.prev = 2, e.next = 5, this._httpClient.request("get", "".concat(k.getMarkets, "?limit=").concat(t, "&offset=").concat(r));
                                    case 5:
                                        return n = e.sent, e.abrupt("return", n);
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(2), console.warn("getMarkets error", e.t0), e.abrupt("return", []);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 9]
                            ])
                        }))), function() {
                            return D.apply(this, arguments)
                        })
                    }, {
                        key: "getTransactions",
                        value: (O = (0, c.default)(u.default.mark((function e() {
                            var t, r, n, a = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = a.length > 0 && void 0 !== a[0] ? a[0] : this.address, r = a.length > 1 && void 0 !== a[1] ? a[1] : 0, e.prev = 2, e.next = 5, this._httpClient.request("get", "".concat(k.getTransactions, "?address=").concat(t, "&offset=").concat(r));
                                    case 5:
                                        return n = e.sent, e.abrupt("return", n);
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(2), console.warn("getTransactions error", e.t0), e.abrupt("return", []);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 9]
                            ])
                        }))), function() {
                            return O.apply(this, arguments)
                        })
                    }, {
                        key: "getTxs",
                        value: (M = (0, c.default)(u.default.mark((function e() {
                            var t, r, n, a, s = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = s.length > 0 && void 0 !== s[0] ? s[0] : this.address, r = s.length > 1 ? s[1] : void 0, n = s.length > 2 ? s[2] : void 0, e.prev = 3, e.next = 6, this._httpClient.request("get", "".concat(k.getTxs, "?address=").concat(t, "&startTime=").concat(r, "&endTime=").concat(n));
                                    case 6:
                                        return a = e.sent, e.abrupt("return", a);
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(3), console.warn("getTxs error", e.t0), e.abrupt("return", []);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [3, 10]
                            ])
                        }))), function() {
                            return M.apply(this, arguments)
                        })
                    }, {
                        key: "getTx",
                        value: (S = (0, c.default)(u.default.mark((function e(t) {
                            var r;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, this._httpClient.request("get", "".concat(k.getTx, "/").concat(t));
                                    case 3:
                                        return r = e.sent, e.abrupt("return", r);
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.warn("getTx error", e.t0), e.abrupt("return", []);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 7]
                            ])
                        }))), function(e) {
                            return S.apply(this, arguments)
                        })
                    }, {
                        key: "getDepth",
                        value: (_ = (0, c.default)(u.default.mark((function e() {
                            var t, r, n = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.length > 0 && void 0 !== n[0] ? n[0] : "BNB_BUSD-BD1", e.prev = 1, e.next = 4, this._httpClient.request("get", "".concat(k.getDepth, "?symbol=").concat(t));
                                    case 4:
                                        return r = e.sent, e.abrupt("return", r);
                                    case 8:
                                        return e.prev = 8, e.t0 = e.catch(1), console.warn("getDepth error", e.t0), e.abrupt("return", []);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [1, 8]
                            ])
                        }))), function() {
                            return _.apply(this, arguments)
                        })
                    }, {
                        key: "getOpenOrders",
                        value: (a = (0, c.default)(u.default.mark((function e() {
                            var t, r, n = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.length > 0 && void 0 !== n[0] ? n[0] : this.address, e.prev = 1, e.next = 4, this._httpClient.request("get", "".concat(k.getOpenOrders, "?address=").concat(t));
                                    case 4:
                                        return r = e.sent, e.abrupt("return", r);
                                    case 8:
                                        return e.prev = 8, e.t0 = e.catch(1), console.warn("getOpenOrders error", e.t0), e.abrupt("return", []);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [1, 8]
                            ])
                        }))), function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "getSwapByID",
                        value: (n = (0, c.default)(u.default.mark((function e(t) {
                            var r;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, this._httpClient.request("get", "".concat(k.getSwaps, "/").concat(t));
                                    case 3:
                                        return r = e.sent, e.abrupt("return", r);
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(0), console.warn("query swap by swapID error", e.t0), e.abrupt("return", []);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 7]
                            ])
                        }))), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "getSwapByCreator",
                        value: (r = (0, c.default)(u.default.mark((function e(t) {
                            var r, n, a, s = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = s.length > 1 && void 0 !== s[1] ? s[1] : 100, n = s.length > 2 && void 0 !== s[2] ? s[2] : 0, e.prev = 2, e.next = 5, this._httpClient.request("get", "".concat(k.getSwaps, "?fromAddress=").concat(t, "&limit=").concat(r, "&offset=").concat(n));
                                    case 5:
                                        return a = e.sent, e.abrupt("return", a);
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(2), console.warn("query swap list by swap creator error", e.t0), e.abrupt("return", []);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 9]
                            ])
                        }))), function(e) {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "getSwapByRecipient",
                        value: (t = (0, c.default)(u.default.mark((function e(t) {
                            var r, n, a, s = arguments;
                            return u.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = s.length > 1 && void 0 !== s[1] ? s[1] : 100, n = s.length > 2 && void 0 !== s[2] ? s[2] : 0, e.prev = 2, e.next = 5, this._httpClient.request("get", "".concat(k.getSwaps, "?toAddress=").concat(t, "&limit=").concat(r, "&offset=").concat(n));
                                    case 5:
                                        return a = e.sent, e.abrupt("return", a);
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(2), console.warn("query swap list by swap recipient error", e.t0), e.abrupt("return", []);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 9]
                            ])
                        }))), function(e) {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "createAccount",
                        value: function() {
                            var e = f.generatePrivateKey();
                            return {
                                privateKey: e,
                                address: f.getAddressFromPrivateKey(e, this.addressPrefix)
                            }
                        }
                    }, {
                        key: "createAccountWithKeystore",
                        value: function(e) {
                            if (!e) throw new Error("password should not be falsy");
                            var t = f.generatePrivateKey();
                            return {
                                privateKey: t,
                                address: f.getAddressFromPrivateKey(t, this.addressPrefix),
                                keystore: f.generateKeyStore(t, e)
                            }
                        }
                    }, {
                        key: "createAccountWithMneomnic",
                        value: function() {
                            var e = f.generateMnemonic(),
                                t = f.getPrivateKeyFromMnemonic(e);
                            return {
                                privateKey: t,
                                address: f.getAddressFromPrivateKey(t, this.addressPrefix),
                                mnemonic: e
                            }
                        }
                    }, {
                        key: "recoverAccountFromKeystore",
                        value: function(e, t) {
                            var r = f.getPrivateKeyFromKeyStore(e, t);
                            return {
                                privateKey: r,
                                address: f.getAddressFromPrivateKey(r, this.addressPrefix)
                            }
                        }
                    }, {
                        key: "recoverAccountFromMnemonic",
                        value: function(e) {
                            var t = f.getPrivateKeyFromMnemonic(e);
                            return {
                                privateKey: t,
                                address: f.getAddressFromPrivateKey(t, this.addressPrefix)
                            }
                        }
                    }, {
                        key: "recoverAccountFromMneomnic",
                        value: function(e) {
                            return this.recoverAccountFromMnemonic(e)
                        }
                    }, {
                        key: "recoverAccountFromPrivateKey",
                        value: function(e) {
                            return {
                                privateKey: e,
                                address: f.getAddressFromPrivateKey(e, this.addressPrefix)
                            }
                        }
                    }, {
                        key: "checkAddress",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.addressPrefix;
                            return f.checkAddress(e, t)
                        }
                    }, {
                        key: "getClientKeyAddress",
                        value: function() {
                            if (!this._privateKey) throw new Error("no private key is set on this client");
                            var e = f.getAddressFromPrivateKey(this._privateKey, this.addressPrefix);
                            return this.address = e, e
                        }
                    }]), e
                }();
            t.BncClient = S
        },
        9089: function(e, t, r) {},
        9090: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decodeFieldNumberAndTyp3 = t.unMarshalBinaryBare = t.unMarshalBinaryLengthPrefixed = void 0;
            var a = n(r(151)),
                s = n(r(6037)),
                i = r(7189),
                o = n(r(6504));

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        (0, a.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var d = function(e, t) {
                var r = t.decode(e, 0);
                return {
                    val: r,
                    offset: t.encodingLength(r)
                }
            };
            t.unMarshalBinaryLengthPrefixed = function(e, t) {
                if (0 === e.length) throw new TypeError("Cannot decode empty bytes");
                var r = d(e, i.varint).offset;
                if (r < 0) throw new Error("Error reading msg byte-length prefix: got code ".concat(r));
                return e = e.slice(r), f(e, t)
            };
            var f = function(e, t) {
                if (!s.default.object(t)) throw new TypeError("type should be object");
                if (!Buffer.isBuffer(e)) throw new TypeError("bytes must be buffer");
                if (s.default.array(t)) {
                    if (!s.default.object(t[0])) throw new TypeError("type should be object");
                    return h(e, t[0])
                }
                return l(e, t)
            };
            t.unMarshalBinaryBare = f;
            var l = function(e, t, r) {
                    return Buffer.isBuffer(t) ? d(e, i.bytes) : s.default.array(t) ? h(e, t) : s.default.number(t) ? d(e, i.varint) : s.default.boolean(t) ? d(e, i.bool) : s.default.string(t) ? d(e, i.string) : s.default.object(t) ? p(e, t, r) : void 0
                },
                p = function(e, t, r) {
                    var n = 0;
                    if (r) {
                        var a = d(e, i.varint).offset;
                        e = e.slice(a), n += a
                    }
                    t.aminoPrefix && (e = e.slice(4), n += 4);
                    var u = 0;
                    return Object.keys(t).filter((function(e) {
                        return "aminoPrefix" !== e
                    })).forEach((function(r, a) {
                        if (s.default.array(t[r])) {
                            var i = h(e, t[r][0]),
                                c = i.offset,
                                d = i.val;
                            n += c, t[r] = d, e = e.slice(c)
                        } else {
                            var f = m(e),
                                p = f.fieldNum,
                                v = f.typ;
                            if (a + 1 !== p || p < 0) return void
                            function(e, t) {
                                s.default.object(e[t]) && (e[t] = null), s.default.number(e[t]) && (e[t] = 0), s.default.boolean(e[t]) && (e[t] = !1), s.default.string(e[t]) && (e[t] = "")
                            }(t, r);
                            if (p <= u) throw new Error("encountered fieldNum: ".concat(p, ", but we have already seen fnum: ").concat(u));
                            if (u = p, a + 1 !== p) throw new Error("field number is not expected");
                            if (v !== (0, o.default)(t[r])) throw new Error("field type is not expected");
                            e = e.slice(1);
                            var b = l(e, t[r], !0),
                                y = b.val,
                                g = b.offset;
                            t[r] = y, e = e.slice(g), n += g + 1
                        }
                    })), {
                        val: t,
                        offset: n
                    }
                },
                h = function(e, t) {
                    for (var r = [], n = 0, a = m(e).fieldNum;;) {
                        var s = m(e).fieldNum;
                        if (s !== a || s < 0) break;
                        if (!((e = e.slice(1)).length > 0 && 0 === e.readUInt8(0))) {
                            var i = l(e, t, !0),
                                o = i.offset,
                                u = i.val;
                            r.push(c({}, u)), e = e.slice(o + 1), n += o + 1, a = s
                        }
                    }
                    return {
                        val: r,
                        offset: n
                    }
                },
                m = function(e) {
                    if (e.length < 2) return {
                        fieldNum: -1
                    };
                    var t = d(e, i.varint).val,
                        r = 7 & t,
                        n = t >> 3;
                    if (n > 1 << 28) throw new Error("invalid field num ".concat(n));
                    return {
                        fieldNum: n,
                        typ: r
                    }
                };
            t.decodeFieldNumberAndTyp3 = m
        },
        9096: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                encodeNumber: !0,
                encodeBool: !0,
                encodeString: !0,
                encodeTime: !0,
                convertObjectToSignBytes: !0,
                marshalBinary: !0,
                marshalBinaryBare: !0,
                encodeBinary: !0,
                encodeBinaryByteArray: !0,
                encodeObjectBinary: !0,
                encodeArrayBinary: !0
            };
            t.encodeArrayBinary = t.encodeObjectBinary = t.encodeBinaryByteArray = t.encodeBinary = t.marshalBinaryBare = t.marshalBinary = t.convertObjectToSignBytes = t.encodeTime = t.encodeString = t.encodeBool = t.encodeNumber = void 0;
            var s = n(r(282)),
                i = n(r(6037)),
                o = r(7189),
                u = n(r(6504)),
                c = r(9097);
            Object.keys(c).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(a, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return c[e]
                    }
                }))
            }));
            var d = function(e) {
                return c.UVarInt.encode(e)
            };
            t.encodeNumber = d;
            var f = function(e) {
                return e ? c.UVarInt.encode(1) : c.UVarInt.encode(0)
            };
            t.encodeBool = f;
            var l = function(e) {
                var t = Buffer.alloc(o.string.encodingLength(e));
                return o.string.encode(e, t, 0)
            };
            t.encodeString = l;
            t.encodeTime = function(e) {
                var t = new Date(e).getTime(),
                    r = Math.floor(t / 1e3),
                    n = Number(r.toString().padEnd(9, "0")),
                    a = Buffer.alloc(14);
                return a.writeInt32LE(9, 0), a.writeUInt32LE(r, 1), a.writeInt32LE(21, 9), a.writeUInt32LE(n, 10), a
            };
            t.convertObjectToSignBytes = function(e) {
                return Buffer.from(JSON.stringify(function e(t) {
                    if (null === t) return null;
                    if ("object" !== (0, s.default)(t)) return t;
                    if (Array.isArray(t)) return t.map(e);
                    var r = Object.keys(t).sort(),
                        n = {};
                    return r.forEach((function(r) {
                        n[r] = e(t[r])
                    })), n
                }(e)))
            };
            t.marshalBinary = function(e) {
                if (!i.default.object(e)) throw new TypeError("data must be an object");
                return p(e, -1, !0).toString("hex")
            };
            t.marshalBinaryBare = function(e) {
                if (!i.default.object(e)) throw new TypeError("data must be an object");
                return p(e).toString("hex")
            };
            var p = function(e, t, r) {
                if (null == e) throw new TypeError("unsupported type");
                return Buffer.isBuffer(e) ? r ? Buffer.concat([c.UVarInt.encode(e.length), e]) : e : i.default.array(e) ? m(t, e, r) : i.default.number(e) ? d(e) : i.default.boolean(e) ? f(e) : i.default.string(e) ? l(e) : i.default.object(e) ? h(e, r) : void 0
            };
            t.encodeBinary = p;
            t.encodeBinaryByteArray = function(e) {
                var t = e.length;
                return Buffer.concat([c.UVarInt.encode(t), e])
            };
            var h = function(e, t) {
                var r = [];
                Object.keys(e).forEach((function(t, n) {
                    "aminoPrefix" !== t && "version" !== t && (b(e[t]) || (i.default.array(e[t]) && e[t].length > 0 ? r.push(m(n, e[t])) : (r.push(v(n, e[t])), r.push(p(e[t], n, !0)))))
                }));
                var n = Buffer.concat(r);
                if (e.aminoPrefix) {
                    var a = Buffer.from(e.aminoPrefix, "hex");
                    n = Buffer.concat([a, n])
                }
                if (t) {
                    var s = c.UVarInt.encode(n.length);
                    n = Buffer.concat([s, n])
                }
                return n
            };
            t.encodeObjectBinary = h;
            var m = function(e, t, r) {
                var n = [];
                if (t.forEach((function(t) {
                        n.push(v(e, t)), b(t) ? n.push(Buffer.from("00", "hex")) : n.push(p(t, e, !0))
                    })), r) {
                    var a = n.reduce((function(e, t) {
                        return e + t.length
                    }), 0);
                    n.unshift(c.UVarInt.encode(a))
                }
                return Buffer.concat(n)
            };
            t.encodeArrayBinary = m;
            var v = function(e, t) {
                    var r = (e = Number(e)) + 1 << 3 | (0, u.default)(t);
                    return c.UVarInt.encode(r)
                },
                b = function(e) {
                    return null !== e && (i.default.number(e) && 0 === e || i.default.string(e) && "" === e || i.default.array(e) && 0 === e.length || i.default.boolean(e) && !e)
                }
        },
        9097: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VarInt = t.UVarInt = void 0;
            var a = n(r(35));

            function s(e) {
                var t = function(t) {
                    if (e && (t *= 2), t < 0) throw Error("varint value is out of bounds");
                    var r = Math.log2(t + 1);
                    return Math.ceil(r / 7) || 1
                };
                return {
                    encode: function(r, n, s) {
                        if (r < 0) throw Error("varint value is out of bounds");
                        n = n || Buffer.alloc(t(r)), s = s || 0;
                        var i = r.toString(),
                            o = new a.default(i, 10),
                            u = new a.default(255),
                            c = new a.default(128);
                        e && (o = o.muln(2));
                        for (var d = 0; o.gten(128);) n[s + d] = o.and(u).or(c).toNumber(), o = o.shrn(7), d++;
                        return n[s + d] = o.andln(255), n
                    },
                    decode: function(e) {
                        for (var t = 0, r = 0, n = 0, a = e.length; n < a; n++) {
                            var s = e[n];
                            if (s < 128) return n > 9 || 9 === n && s > 1 ? 0 : t | s << r;
                            t |= (127 & s) << r, r += 7
                        }
                        return 0
                    },
                    encodingLength: t
                }
            }
            var i = s(!1);
            t.UVarInt = i;
            var o = s(!0);
            t.VarInt = o
        },
        9146: function(e, t, r) {
            "use strict";
            var n = r(5488),
                a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.voteOption = void 0;
            var s = a(r(551)),
                i = a(r(552)),
                o = a(r(462)),
                u = a(r(463)),
                c = a(r(151)),
                d = a(r(5665)),
                f = n(r(5492)),
                l = r(5694),
                p = r(6038),
                h = a(r(9147)),
                m = Math.pow(10, 8),
                v = {
                    4: "ListTradingPair",
                    0: "Nil",
                    1: "Text",
                    2: "ParameterChange",
                    3: "SoftwareUpgrade",
                    5: "FeeChange",
                    6: "CreateValidator",
                    7: "RemoveValidator"
                };
            t.voteOption = {
                OptionEmpty: 0,
                OptionYes: 1,
                OptionAbstain: 2,
                OptionNo: 3,
                OptionNoWithVeto: 4
            };
            var b = {
                    0: "Empty",
                    1: "Yes",
                    2: "Abstain",
                    3: "No",
                    4: "NoWithVeto"
                },
                y = function() {
                    function e(t) {
                        return (0, o.default)(this, e), (0, c.default)(this, "_bncClient", void 0), e.instance || (this._bncClient = t, e.instance = this), e.instance
                    }
                    var t, r, n, a;
                    return (0, u.default)(e, [{
                        key: "submitListProposal",
                        value: (a = (0, i.default)(s.default.mark((function e(t) {
                            var r, n, a, i, o, u;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = {
                                            base_asset_symbol: t.baseAsset,
                                            quote_asset_symbol: t.quoteAsset,
                                            init_price: +new d.default(t.initPrice).mul(m).toString(),
                                            description: t.description,
                                            expire_time: new Date(t.expireTime).toISOString()
                                        }, n = JSON.stringify(r), a = t.address, i = t.title, o = t.initialDeposit, u = t.votingPeriod, e.next = 5, this.submitProposal(a, i, n, h.default.ProposalTypeListTradingPair, o, u);
                                    case 5:
                                        return e.abrupt("return", e.sent);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "submitProposal",
                        value: (n = (0, i.default)(s.default.mark((function e(t, r, n, a, i, o) {
                            var u, c, p, h, b;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return u = f.decodeAddress(t), c = [{
                                            denom: "BNB",
                                            amount: new d.default(i).mul(m).toString()
                                        }], o = +new d.default(o).mul(Math.pow(10, 9)).toString(), p = {
                                            title: r,
                                            description: n,
                                            proposal_type: a,
                                            proposer: u,
                                            initial_deposit: [{
                                                denom: "BNB",
                                                amount: +new d.default(i).mul(m).toString()
                                            }],
                                            voting_period: o,
                                            aminoPrefix: l.AminoPrefix.MsgSubmitProposal
                                        }, h = {
                                            description: n,
                                            initial_deposit: c,
                                            proposal_type: v[a],
                                            proposer: t,
                                            title: r,
                                            voting_period: o.toString()
                                        }, e.next = 7, this._bncClient._prepareTransaction(p, h, t);
                                    case 7:
                                        return b = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(b));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r, a, s, i) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "deposit",
                        value: (r = (0, i.default)(s.default.mark((function e(t, r, n) {
                            var a, i, o, u, c;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = f.decodeAddress(r), (0, p.checkCoins)(n), i = [], n.forEach((function(e) {
                                            i.push({
                                                denom: e.denom,
                                                amount: +new d.default(e.amount).mul(m).toString()
                                            })
                                        })), o = {
                                            proposal_id: t,
                                            depositer: a,
                                            amount: i,
                                            aminoPrefix: l.AminoPrefix.MsgDeposit
                                        }, u = {
                                            amount: i.map((function(e) {
                                                return {
                                                    denom: e.denom,
                                                    amount: String(e.amount)
                                                }
                                            })),
                                            depositer: r,
                                            proposal_id: String(t)
                                        }, e.next = 8, this._bncClient._prepareTransaction(o, u, r);
                                    case 8:
                                        return c = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(c));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "vote",
                        value: (t = (0, i.default)(s.default.mark((function e(t, r, n) {
                            var a, i, o, u;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = f.decodeAddress(r), i = {
                                            proposal_id: t,
                                            voter: a,
                                            option: n,
                                            aminoPrefix: l.AminoPrefix.MsgVote
                                        }, o = {
                                            option: b[n],
                                            proposal_id: String(t),
                                            voter: r
                                        }, e.next = 5, this._bncClient._prepareTransaction(i, o, r);
                                    case 5:
                                        return u = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(u));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, r, n) {
                            return t.apply(this, arguments)
                        })
                    }]), e
                }();
            (0, c.default)(y, "instance", void 0);
            var g = y;
            t.default = g
        },
        9147: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                ProposalTypeNil: 0,
                ProposalTypeText: 1,
                ProposalTypeParameterChange: 2,
                ProposalTypeSoftwareUpgrade: 3,
                ProposalTypeListTradingPair: 4,
                ProposalTypeFeeChange: 5,
                ProposalTypeCreateValidator: 6,
                ProposalTypeRemoveValidator: 7
            };
            t.default = n
        },
        9148: function(e, t, r) {
            "use strict";
            var n = r(5488),
                a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(r(551)),
                i = a(r(552)),
                o = a(r(462)),
                u = a(r(463)),
                c = a(r(151)),
                d = r(12),
                f = n(r(5492)),
                l = r(5694),
                p = r(6038),
                h = function() {
                    function e(t) {
                        return (0, o.default)(this, e), (0, c.default)(this, "_bncClient", void 0), e.instance || (this._bncClient = t, e.instance = this), e.instance
                    }
                    var t, r, n, a;
                    return (0, u.default)(e, [{
                        key: "HTLT",
                        value: (a = (0, i.default)(s.default.mark((function e(t, r, n, a, i, o, u, c, h, m) {
                            var v, b, y;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (0, p.checkCoins)(u), v = {
                                            from: f.decodeAddress(t),
                                            to: f.decodeAddress(r),
                                            recipient_other_chain: n,
                                            sender_other_chain: a,
                                            random_number_hash: d.Buffer.from(i, "hex"),
                                            timestamp: o,
                                            amount: u,
                                            expected_income: c,
                                            height_span: h,
                                            cross_chain: m,
                                            aminoPrefix: l.AminoPrefix.HTLTMsg
                                        }, b = {
                                            from: t,
                                            to: r,
                                            recipient_other_chain: n,
                                            sender_other_chain: a,
                                            random_number_hash: i,
                                            timestamp: o,
                                            amount: u,
                                            expected_income: c,
                                            height_span: h,
                                            cross_chain: m
                                        }, e.next = 5, this._bncClient._prepareTransaction(v, b, t);
                                    case 5:
                                        return y = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(y));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r, n, s, i, o, u, c, d) {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "depositHTLT",
                        value: (n = (0, i.default)(s.default.mark((function e(t, r, n) {
                            var a, i, o;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (0, p.checkCoins)(n), a = {
                                            from: f.decodeAddress(t),
                                            amount: n,
                                            swap_id: d.Buffer.from(r, "hex"),
                                            aminoPrefix: l.AminoPrefix.DepositHTLTMsg
                                        }, i = {
                                            from: t,
                                            amount: n,
                                            swap_id: r
                                        }, e.next = 5, this._bncClient._prepareTransaction(a, i, t);
                                    case 5:
                                        return o = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(o));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "claimHTLT",
                        value: (r = (0, i.default)(s.default.mark((function e(t, r, n) {
                            var a, i, o;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = {
                                            from: f.decodeAddress(t),
                                            swap_id: d.Buffer.from(r, "hex"),
                                            random_number: d.Buffer.from(n, "hex"),
                                            aminoPrefix: l.AminoPrefix.ClaimHTLTMsg
                                        }, i = {
                                            from: t,
                                            swap_id: r,
                                            random_number: n
                                        }, e.next = 4, this._bncClient._prepareTransaction(a, i, t);
                                    case 4:
                                        return o = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(o));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "refundHTLT",
                        value: (t = (0, i.default)(s.default.mark((function e(t, r) {
                            var n, a, i;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = {
                                            from: f.decodeAddress(t),
                                            swap_id: d.Buffer.from(r, "hex"),
                                            aminoPrefix: l.AminoPrefix.RefundHTLTMsg
                                        }, a = {
                                            from: t,
                                            swap_id: r
                                        }, e.next = 4, this._bncClient._prepareTransaction(n, a, t);
                                    case 4:
                                        return i = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(i));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, r) {
                            return t.apply(this, arguments)
                        })
                    }]), e
                }();
            (0, c.default)(h, "instance", void 0);
            var m = h;
            t.default = m
        },
        9149: function(e, t, r) {
            "use strict";
            var n = r(5488),
                a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.validateMiniTokenSymbol = void 0;
            var s = a(r(462)),
                i = a(r(463)),
                o = a(r(151)),
                u = a(r(551)),
                c = a(r(552)),
                d = a(r(5665)),
                f = r(7190),
                l = n(r(5492)),
                p = r(5694),
                h = r(6038),
                m = function() {
                    var e = (0, c.default)(u.default.mark((function e(t, r, n, a) {
                        var s, i, o, c, l, p = arguments;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (s = p.length > 4 && void 0 !== p[4] ? p[4] : "free", !(i = new d.default(t)).lte(0) && !i.gt(9e18)) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Error("invalid amount");
                                case 4:
                                    return e.prev = 4, e.next = 7, a.request("get", "".concat(f.api.getAccount, "/").concat(n));
                                case 7:
                                    if (o = e.sent, c = o.result, l = c.balances.find((function(e) {
                                            return e.symbol.toUpperCase() === r.toUpperCase()
                                        }))) {
                                        e.next = 12;
                                        break
                                    }
                                    throw new Error("the account doesn't have ".concat(r));
                                case 12:
                                    if (!i.gte(l[s])) {
                                        e.next = 14;
                                        break
                                    }
                                    throw new Error("the account doesn't have enougth balance");
                                case 14:
                                    e.next = 18;
                                    break;
                                case 16:
                                    e.prev = 16, e.t0 = e.catch(4);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 16]
                        ])
                    })));
                    return function(t, r, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function(e) {
                    if (!e) throw new Error("suffixed token symbol cannot be empty");
                    var t = e.split("-");
                    if (2 != t.length) throw new Error("suffixed mini-token symbol must contain a hyphen ('-')");
                    if (!t[1]) throw new Error('suffixed mini-token symbol must contain just one hyphen (" - ")');
                    if (!/^[a-zA-z\d]{3,8}$/.test(t[0])) throw new Error("symbol should be alphanumeric and length is limited to 3~8");
                    if (!t[1].endsWith("M")) throw new Error("mini-token symbol suffix must end with M")
                };
            t.validateMiniTokenSymbol = v;
            var b = function() {
                function e(t) {
                    (0, s.default)(this, e), (0, o.default)(this, "_bncClient", void 0), this._bncClient = t
                }
                var t, r, n, a, f, b, y, g, w, _, x;
                return (0, i.default)(e, [{
                    key: "issue",
                    value: (x = (0, c.default)(u.default.mark((function e(t, r, n) {
                        var a, s, i, o, c, f = arguments;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = f.length > 3 && void 0 !== f[3] ? f[3] : 0, s = f.length > 4 && void 0 !== f[4] && f[4], t) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Error("sender address cannot be empty");
                                case 4:
                                    if (!(r.length > 32)) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Error("token name is limited to 32 characters");
                                case 6:
                                    if (/^[a-zA-z\d]{3,8}$/.test(n)) {
                                        e.next = 8;
                                        break
                                    }
                                    throw new Error("symbol should be alphanumeric and length is limited to 3~8");
                                case 8:
                                    if (!(a <= 0 || a > 9e18)) {
                                        e.next = 10;
                                        break
                                    }
                                    throw new Error("invalid supply amount");
                                case 10:
                                    return a = Number(new d.default(a).mul(Math.pow(10, 8)).toString()), i = {
                                        from: l.decodeAddress(t),
                                        name: r,
                                        symbol: n,
                                        total_supply: a,
                                        mintable: s,
                                        aminoPrefix: p.AminoPrefix.IssueMsg
                                    }, o = {
                                        from: t,
                                        name: r,
                                        symbol: n,
                                        total_supply: a,
                                        mintable: s
                                    }, e.next = 15, this._bncClient._prepareTransaction(i, o, t);
                                case 15:
                                    return c = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(c));
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t, r) {
                        return x.apply(this, arguments)
                    })
                }, {
                    key: "issueMiniToken",
                    value: (_ = (0, c.default)(u.default.mark((function e(t, r, n) {
                        var a, s, i, o, c, f = arguments;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = f.length > 3 && void 0 !== f[3] ? f[3] : 0, s = f.length > 4 && void 0 !== f[4] && f[4], i = f.length > 5 ? f[5] : void 0, t) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("sender address cannot be empty");
                                case 5:
                                    if (!(r.length > 32)) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new Error("token name is limited to 32 characters");
                                case 7:
                                    if (/^[a-zA-z\d]{3,8}$/.test(n)) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Error("symbol should be alphanumeric and length is limited to 3~8");
                                case 9:
                                    if (!(a <= 0 || a > 1e6)) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new Error("invalid supply amount");
                                case 11:
                                    return a = Number(new d.default(a).mul(Math.pow(10, 8)).toString()), o = new p.IssueMiniTokenMsg({
                                        name: r,
                                        symbol: n,
                                        total_supply: a,
                                        mintable: s,
                                        token_uri: i,
                                        from: t
                                    }), e.next = 15, this._bncClient._prepareTransaction(o.getMsg(), o.getSignMsg(), t);
                                case 15:
                                    return c = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(c));
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t, r) {
                        return _.apply(this, arguments)
                    })
                }, {
                    key: "issueTinyToken",
                    value: (w = (0, c.default)(u.default.mark((function e(t, r, n) {
                        var a, s, i, o, c, f = arguments;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = f.length > 3 && void 0 !== f[3] ? f[3] : 0, s = f.length > 4 && void 0 !== f[4] && f[4], i = f.length > 5 ? f[5] : void 0, t) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("sender address cannot be empty");
                                case 5:
                                    if (!(r.length > 32)) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new Error("token name is limited to 32 characters");
                                case 7:
                                    if (/^[a-zA-z\d]{3,8}$/.test(n)) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Error("symbol should be alphanumeric and length is limited to 3~8");
                                case 9:
                                    if (!(a <= 0 || a > 1e4)) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new Error("invalid supply amount");
                                case 11:
                                    return a = Number(new d.default(a).mul(Math.pow(10, 8)).toString()), o = new p.IssueTinyTokenMsg({
                                        name: r,
                                        symbol: n,
                                        total_supply: a,
                                        mintable: s,
                                        token_uri: i,
                                        from: t
                                    }), e.next = 15, this._bncClient._prepareTransaction(o.getMsg(), o.getSignMsg(), t);
                                case 15:
                                    return c = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(c));
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t, r) {
                        return w.apply(this, arguments)
                    })
                }, {
                    key: "setTokenUri",
                    value: (g = (0, c.default)(u.default.mark((function e(t) {
                        var r, n, a, s, i;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.fromAddress, n = t.tokenUri, a = t.symbol, v(a), !(n.length > 2048)) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Error("uri cannot be longer than 2048 characters");
                                case 4:
                                    if (r) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Error("address cannot be empty");
                                case 6:
                                    return s = new p.SetTokenUriMsg({
                                        from: r,
                                        token_uri: n,
                                        symbol: a
                                    }), e.next = 9, this._bncClient._prepareTransaction(s.getMsg(), s.getSignMsg(), r);
                                case 9:
                                    return i = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(i));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return g.apply(this, arguments)
                    })
                }, {
                    key: "freeze",
                    value: (y = (0, c.default)(u.default.mark((function e(t, r, n) {
                        var a, s, i;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, h.validateSymbol)(r), m(n, r, t, this._bncClient._httpClient, "free"), n = +Number(new d.default(n).mul(Math.pow(10, 8)).toString()), a = {
                                        from: l.decodeAddress(t),
                                        symbol: r,
                                        amount: n,
                                        aminoPrefix: p.AminoPrefix.FreezeMsg
                                    }, s = {
                                        amount: n,
                                        from: t,
                                        symbol: r
                                    }, e.next = 7, this._bncClient._prepareTransaction(a, s, t);
                                case 7:
                                    return i = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(i));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t, r) {
                        return y.apply(this, arguments)
                    })
                }, {
                    key: "unfreeze",
                    value: (b = (0, c.default)(u.default.mark((function e(t, r, n) {
                        var a, s, i;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, h.validateSymbol)(r), m(n, r, t, this._bncClient._httpClient, "frozen"), n = +Number(new d.default(n).mul(Math.pow(10, 8)).toString()), a = {
                                        from: l.decodeAddress(t),
                                        symbol: r,
                                        amount: n,
                                        aminoPrefix: p.AminoPrefix.UnfreezeMsg
                                    }, s = {
                                        amount: n,
                                        from: t,
                                        symbol: r
                                    }, e.next = 7, this._bncClient._prepareTransaction(a, s, t);
                                case 7:
                                    return i = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(i));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t, r) {
                        return b.apply(this, arguments)
                    })
                }, {
                    key: "burn",
                    value: (f = (0, c.default)(u.default.mark((function e(t, r, n) {
                        var a, s, i;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, h.validateSymbol)(r), m(n, r, t, this._bncClient._httpClient), n = +Number(new d.default(n).mul(Math.pow(10, 8)).toString()), a = {
                                        from: l.decodeAddress(t),
                                        symbol: r,
                                        amount: n,
                                        aminoPrefix: p.AminoPrefix.BurnMsg
                                    }, s = {
                                        amount: n,
                                        from: t,
                                        symbol: r
                                    }, e.next = 7, this._bncClient._prepareTransaction(a, s, t);
                                case 7:
                                    return i = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(i));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t, r) {
                        return f.apply(this, arguments)
                    })
                }, {
                    key: "mint",
                    value: (a = (0, c.default)(u.default.mark((function e(t, r, n) {
                        var a, s, i;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, h.validateSymbol)(r), !(n <= 0 || n > 9e18)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new Error("invalid amount");
                                case 3:
                                    return n = Number(new d.default(n).mul(Math.pow(10, 8)).toString()), a = {
                                        from: l.decodeAddress(t),
                                        symbol: r,
                                        amount: n,
                                        aminoPrefix: p.AminoPrefix.MintMsg
                                    }, s = {
                                        amount: n,
                                        from: t,
                                        symbol: r
                                    }, e.next = 8, this._bncClient._prepareTransaction(a, s, t);
                                case 8:
                                    return i = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(i));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t, r) {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "timeLock",
                    value: (n = (0, c.default)(u.default.mark((function e(t, r, n, a) {
                        var s, i, o;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, h.checkCoins)(n), !(r.length > 128)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new Error("description is too long");
                                case 3:
                                    if (!(a < 60 || a > 253402300800)) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("timeTime must be in [60, 253402300800]");
                                case 5:
                                    return s = {
                                        from: l.decodeAddress(t),
                                        description: r,
                                        amount: n,
                                        lock_time: a,
                                        aminoPrefix: p.AminoPrefix.TimeLockMsg
                                    }, i = {
                                        from: t,
                                        description: r,
                                        amount: n,
                                        lock_time: a
                                    }, e.next = 9, this._bncClient._prepareTransaction(s, i, t);
                                case 9:
                                    return o = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(o));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t, r, a) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "timeRelock",
                    value: (r = (0, c.default)(u.default.mark((function e(t, r, n, a, s) {
                        var i, o, c;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, h.checkCoins)(a), !(n.length > 128)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new Error("description is too long");
                                case 3:
                                    if (!(s < 60 || s > 253402300800)) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("timeTime must be in [60, 253402300800]");
                                case 5:
                                    return i = {
                                        from: l.decodeAddress(t),
                                        time_lock_id: r,
                                        description: n,
                                        amount: a,
                                        lock_time: s,
                                        aminoPrefix: p.AminoPrefix.TimeRelockMsg
                                    }, o = {
                                        from: t,
                                        time_lock_id: r,
                                        description: n,
                                        amount: a,
                                        lock_time: s
                                    }, e.next = 9, this._bncClient._prepareTransaction(i, o, t);
                                case 9:
                                    return c = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(c));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, t, n, a, s) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "timeUnlock",
                    value: (t = (0, c.default)(u.default.mark((function e(t, r) {
                        var n, a, s;
                        return u.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = {
                                        from: l.decodeAddress(t),
                                        time_lock_id: r,
                                        aminoPrefix: p.AminoPrefix.TimeUnlockMsg
                                    }, a = {
                                        from: t,
                                        time_lock_id: r
                                    }, e.next = 4, this._bncClient._prepareTransaction(n, a, t);
                                case 4:
                                    return s = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(s));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, r) {
                        return t.apply(this, arguments)
                    })
                }]), e
            }();
            t.default = b
        },
        9150: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Bridge = void 0;
            var a = n(r(551)),
                s = n(r(552)),
                i = n(r(462)),
                o = n(r(463)),
                u = n(r(151)),
                c = r(5492),
                d = r(5694),
                f = function() {
                    function e(t) {
                        (0, i.default)(this, e), (0, u.default)(this, "_bncClient", void 0), this._bncClient = t
                    }
                    var t, r, n, f, l, p, h, m;
                    return (0, o.default)(e, [{
                        key: "transferIn",
                        value: (m = (0, s.default)(a.default.mark((function e(t) {
                            var r, n, s, i, o, u, f, l, p, h, m, v;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.sequence, n = t.contract_address, s = t.refund_addresses, i = t.receiver_addresses, o = t.amounts, u = t.relay_fee, f = t.expire_time, l = t.symbol, p = t.fromAddress, !(r < 0)) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("sequence should not be less than 0");
                                    case 3:
                                        if (n) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error("contract address should not be empty");
                                    case 5:
                                        if (u) {
                                            e.next = 7;
                                            break
                                        }
                                        throw new Error("relay fee should not be empty");
                                    case 7:
                                        if (l) {
                                            e.next = 9;
                                            break
                                        }
                                        throw new Error("symbol should not be null");
                                    case 9:
                                        if ((0, c.checkAddress)(p, this._bncClient.addressPrefix)) {
                                            e.next = 11;
                                            break
                                        }
                                        throw new Error("fromAddress is not a valid Binance Chain address");
                                    case 11:
                                        if (s.length == i.length && s.length == o.length) {
                                            e.next = 13;
                                            break
                                        }
                                        throw new Error("the length of refund address array, recipient address array and transfer amount array must be the same");
                                    case 13:
                                        return h = i.map((function(e) {
                                            var t = e.startsWith("tbnb") ? "tbnb" : "bnb";
                                            if (!(0, c.checkAddress)(e, t)) throw new Error("".concat(e, " in receiver_addresses is not a valid Binance Chain address"));
                                            return (0, c.decodeAddress)(e)
                                        })), m = s.map((function(e) {
                                            if (!e.startsWith("0x")) throw new Error("".concat(e, " is invalid"));
                                            return Buffer.from(e.slice(2), "hex")
                                        })), v = Buffer.from(JSON.stringify({
                                            contract_address: n,
                                            refund_addresses: m,
                                            receiver_addresses: h,
                                            amounts: o,
                                            symbol: l,
                                            relay_fee: u,
                                            expire_time: f
                                        })).toString("hex"), e.abrupt("return", this.buildClaimAndBroadcast({
                                            claimHex: v,
                                            claim_type: d.ClaimTypes.ClaimTypeTransferIn,
                                            fromAddress: p,
                                            sequence: r
                                        }));
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return m.apply(this, arguments)
                        })
                    }, {
                        key: "transferOutRefund",
                        value: (h = (0, s.default)(a.default.mark((function e(t) {
                            var r, n, s, i, o, u;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.transfer_out_sequence, n = t.refund_address, s = t.refund_reason, i = t.amount, o = t.fromAddress, !(r < 0)) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("sequence should not be less than 0");
                                    case 3:
                                        if (i) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error("amount should not be empty");
                                    case 5:
                                        if (s) {
                                            e.next = 7;
                                            break
                                        }
                                        throw new Error("empty refund reason");
                                    case 7:
                                        if ((0, c.checkAddress)(o, this._bncClient.addressPrefix)) {
                                            e.next = 9;
                                            break
                                        }
                                        throw new Error("fromAddress is not a valid Binance Chain address");
                                    case 9:
                                        return u = Buffer.from(JSON.stringify({
                                            transfer_out_sequence: r,
                                            refund_address: n,
                                            amount: i,
                                            refund_reason: s
                                        })).toString("hex"), e.abrupt("return", this.buildClaimAndBroadcast({
                                            claimHex: u,
                                            claim_type: d.ClaimTypes.ClaimTypeTransferOutRefund,
                                            sequence: r,
                                            fromAddress: o
                                        }));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return h.apply(this, arguments)
                        })
                    }, {
                        key: "bind",
                        value: (p = (0, s.default)(a.default.mark((function e(t) {
                            var r, n, s, i, o, u, f;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.contractAddress, n = t.contractDecimal, s = t.amount, i = t.symbol, o = t.expireTime, u = t.fromAddress, (0, c.checkAddress)(u, this._bncClient.addressPrefix)) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("fromAddress is not a valid Binance Chain address");
                                    case 3:
                                        if (r.startsWith("0x")) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error('contractAddress "'.concat(r, '" is invalid'));
                                    case 5:
                                        return f = new d.BindMsg({
                                            from: u,
                                            amount: s,
                                            contract_address: r,
                                            contract_decimals: n,
                                            expire_time: o,
                                            symbol: i
                                        }), e.next = 8, this.broadcast(f, u);
                                    case 8:
                                        return e.abrupt("return", e.sent);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return p.apply(this, arguments)
                        })
                    }, {
                        key: "transferFromBcToBsc",
                        value: (l = (0, s.default)(a.default.mark((function e(t) {
                            var r, n, s, i, o, u;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.toAddress, n = t.amount, s = t.symbol, i = t.expireTime, o = t.fromAddress, (0, c.checkAddress)(o, this._bncClient.addressPrefix)) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("fromAddress is not a valid Binance Chain address");
                                    case 3:
                                        if (r.startsWith("0x")) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error('toAddress "'.concat(r, '" is invalid'));
                                    case 5:
                                        return u = new d.TransferOutMsg({
                                            from: o,
                                            to: r,
                                            amount: {
                                                denom: s,
                                                amount: n
                                            },
                                            expire_time: i
                                        }), e.abrupt("return", this.broadcast(u, o));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "upateBind",
                        value: (f = (0, s.default)(a.default.mark((function e(t) {
                            var r, n, s, i, o, u;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.sequence, n = t.contract_address, s = t.symbol, i = t.status, o = t.fromAddress, (0, c.checkAddress)(o, this._bncClient.addressPrefix)) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("fromAddress is not a valid Binance Chain address");
                                    case 3:
                                        if (n.startsWith("0x")) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error('toAddress "'.concat(n, '" is invalid'));
                                    case 5:
                                        return u = Buffer.from(JSON.stringify({
                                            status: i,
                                            symbol: s,
                                            contract_address: n
                                        })).toString("hex"), e.abrupt("return", this.buildClaimAndBroadcast({
                                            claimHex: u,
                                            sequence: r,
                                            fromAddress: o,
                                            claim_type: d.ClaimTypes.ClaimTypeUpdateBind
                                        }));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return f.apply(this, arguments)
                        })
                    }, {
                        key: "skipSequence",
                        value: (n = (0, s.default)(a.default.mark((function e(t) {
                            var r, n, s, i;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.sequence, n = t.sequenceToSkip, s = t.fromAddress, !(r < 0)) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("sequence should not be less than 0");
                                    case 3:
                                        if ((0, c.checkAddress)(s, this._bncClient.addressPrefix)) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error("fromAddress is not a valid Binance Chain address");
                                    case 5:
                                        return i = Buffer.from(JSON.stringify({
                                            claim_type: d.ClaimTypes.ClaimTypeUpdateBind,
                                            sequence: n
                                        })).toString("hex"), e.abrupt("return", this.buildClaimAndBroadcast({
                                            claimHex: i,
                                            sequence: r,
                                            fromAddress: s,
                                            claim_type: d.ClaimTypes.ClaimTypeSkipSequence
                                        }));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "buildClaimAndBroadcast",
                        value: (r = (0, s.default)(a.default.mark((function e(t) {
                            var r, n, s, i, o;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.claimHex, n = t.claim_type, s = t.sequence, i = t.fromAddress, o = new d.ClaimMsg({
                                            claim_type: n,
                                            sequence: s,
                                            claim: r,
                                            validator_address: i
                                        }), e.next = 4, this.broadcast(o, i, s);
                                    case 4:
                                        return e.abrupt("return", e.sent);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "broadcast",
                        value: (t = (0, s.default)(a.default.mark((function e(t, r, n) {
                            var s;
                            return a.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._bncClient._prepareTransaction(t.getMsg(), t.getSignMsg(), r, n);
                                    case 2:
                                        return s = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(s));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, r, n) {
                            return t.apply(this, arguments)
                        })
                    }]), e
                }();
            t.Bridge = f
        },
        9151: function(e, t, r) {
            "use strict";
            var n = r(5488),
                a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Stake = void 0;
            var s = a(r(551)),
                i = a(r(552)),
                o = a(r(462)),
                u = a(r(463)),
                c = a(r(151)),
                d = a(r(5665)),
                f = n(r(5492)),
                l = r(5694),
                p = function() {
                    function e(t) {
                        (0, o.default)(this, e), (0, c.default)(this, "_bncClient", void 0), this._bncClient = t
                    }
                    var t, r, n, a;
                    return (0, u.default)(e, [{
                        key: "bscDelegate",
                        value: (a = (0, i.default)(s.default.mark((function e(t) {
                            var r, n, a, i, o, u, c, p;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.delegateAddress, n = t.validatorAddress, a = t.amount, i = t.symbol, o = void 0 === i ? "BNB" : i, u = t.sideChainId, c = void 0 === u ? "chapel" : u, a) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("amount should not be empty");
                                    case 3:
                                        if (r) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error("delegate address should not be null");
                                    case 5:
                                        if (f.checkAddress(n, "bva")) {
                                            e.next = 7;
                                            break
                                        }
                                        throw new Error("validator address is not valid");
                                    case 7:
                                        return a = Number(new d.default(a).mul(Math.pow(10, 8)).toString()), p = new l.BscDelegateMsg({
                                            delegator_addr: r,
                                            validator_addr: n,
                                            delegation: {
                                                denom: o,
                                                amount: a
                                            },
                                            side_chain_id: c
                                        }), e.next = 11, this.broadcast(p, r);
                                    case 11:
                                        return e.abrupt("return", e.sent);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "bscUndelegate",
                        value: (n = (0, i.default)(s.default.mark((function e(t) {
                            var r, n, a, i, o, u, c, p;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.delegateAddress, n = t.validatorAddress, a = t.amount, i = t.symbol, o = void 0 === i ? "BNB" : i, u = t.sideChainId, c = void 0 === u ? "chapel" : u, a) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("amount should not be empty");
                                    case 3:
                                        if (r) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error("delegate address should not be null");
                                    case 5:
                                        if (f.checkAddress(n, "bva")) {
                                            e.next = 7;
                                            break
                                        }
                                        throw new Error("validator address is not valid");
                                    case 7:
                                        return a = Number(new d.default(a).mul(Math.pow(10, 8)).toString()), p = new l.BscUndelegateMsg({
                                            delegator_addr: r,
                                            validator_addr: n,
                                            amount: {
                                                denom: o,
                                                amount: a
                                            },
                                            side_chain_id: c
                                        }), e.next = 11, this.broadcast(p, r);
                                    case 11:
                                        return e.abrupt("return", e.sent);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "bscReDelegate",
                        value: (r = (0, i.default)(s.default.mark((function e(t) {
                            var r, n, a, i, o, u, c, p, h;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.delegateAddress, n = t.validatorSrcAddress, a = t.validatorDstAddress, i = t.amount, o = t.symbol, u = void 0 === o ? "BNB" : o, c = t.sideChainId, p = void 0 === c ? "chapel" : c, i) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("amount should not be empty");
                                    case 3:
                                        if (r) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error("delegate address should not be null");
                                    case 5:
                                        if (f.checkAddress(n, "bva")) {
                                            e.next = 7;
                                            break
                                        }
                                        throw new Error("validator source address is not valid");
                                    case 7:
                                        if (f.checkAddress(a, "bva")) {
                                            e.next = 9;
                                            break
                                        }
                                        throw new Error("validator dest address is not valid");
                                    case 9:
                                        return i = Number(new d.default(i).mul(Math.pow(10, 8)).toString()), h = new l.BscReDelegateMsg({
                                            delegator_addr: r,
                                            validator_src_addr: n,
                                            validator_dst_addr: a,
                                            amount: {
                                                denom: u,
                                                amount: i
                                            },
                                            side_chain_id: p
                                        }), e.next = 13, this.broadcast(h, r);
                                    case 13:
                                        return e.abrupt("return", e.sent);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "broadcast",
                        value: (t = (0, i.default)(s.default.mark((function e(t, r, n) {
                            var a;
                            return s.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._bncClient._prepareTransaction(t.getMsg(), t.getSignMsg(), r, n);
                                    case 2:
                                        return a = e.sent, e.abrupt("return", this._bncClient._broadcastDelegate(a));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, r, n) {
                            return t.apply(this, arguments)
                        })
                    }]), e
                }();
            t.Stake = p
        }
    }
]);