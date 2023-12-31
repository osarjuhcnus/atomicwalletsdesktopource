(window.webpackJsonp = window.webpackJsonp || []).push([
    [282], {
        5420: function(e, r, t) {
            "use strict";
            var i = t(2);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var n = i(t(2346)),
                o = i(t(5552)),
                f = i(t(35)),
                a = i(t(461)),
                u = function(e, r) {
                    if (!r && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = l(r);
                    if (t && t.has(e)) return t.get(e);
                    var i = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var f = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                            f && (f.get || f.set) ? Object.defineProperty(i, o, f) : i[o] = e[o]
                        } i.default = e, t && t.set(e, i);
                    return i
                }(t(1387)),
                s = t(29),
                c = t(26);

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var r = new WeakMap,
                    t = new WeakMap;
                return (l = function(e) {
                    return e ? t : r
                })(e)
            }
            class ETCCoin extends a.default {
                constructor({
                    alias: e,
                    notify: r,
                    feeData: t,
                    explorers: i,
                    txWebUrl: o,
                    socket: f
                }) {
                    super({
                        alias: e,
                        notify: r,
                        name: "Ethereum Classic",
                        ticker: "ETC",
                        decimal: 18,
                        derivation: "m/44'/0'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: i,
                        txWebUrl: o,
                        socket: f
                    }), this.gasLimit = t.gasLimit, this.coefficient = t.coefficient;
                    const a = i.find(({
                            className: e
                        }) => "Web3Explorer" === e),
                        s = i.find(({
                            className: e
                        }) => "BlockscoutExplorer" === e);
                    this.blockscout = new u.BlockscoutExplorer({
                        wallet: this.instance,
                        config: s
                    }), this.coreLibrary = new n.default(a.baseUrl)
                }
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        decimal: this.decimal,
                        address: this.address,
                        parent: this.id,
                        BN: f.default,
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e),
                        coreLibrary: this.coreLibrary,
                        alias: this.alias,
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee
                    }
                }
                getAddress() {
                    return this.privateKey ? this.coreLibrary.eth.accounts.privateKeyToAccount(this.privateKey).address : new Error("ETC: Coin could not get privateKey")
                }
                async loadWallet(e) {
                    const r = o.default.fromMasterSeed(e).getWallet(),
                        t = await this.coreLibrary.eth.accounts.privateKeyToAccount(r.getPrivateKeyString());
                    if (!t) throw new Error("ETC: Coin could not load wallet");
                    return this.privateKey = t.privateKey, this.address = t.address, this
                }
                async validateAddress(e) {
                    return this.coreLibrary.utils.isAddress(e)
                }
                async getFee() {
                    const e = await this.getGasPrice();
                    return new this.BN(this.coefficient).mul(new this.BN(this.gasLimit).mul(new this.BN(e)))
                }
                async createTransaction({
                    address: e,
                    amount: r,
                    paymentData: t,
                    gas: i = "42000"
                }) {
                    const n = {
                        to: e,
                        value: r,
                        gas: i,
                        chainId: 61,
                        gasPrice: await this.getGasPrice()
                    };
                    t && (n.data = t);
                    return (await this.coreLibrary.eth.accounts.signTransaction(n, this.privateKey)).rawTransaction
                }
                updateCoinParamsFromServer(e) {
                    e.feeData && (void 0 !== this.coefficient && void 0 !== e.feeData.coefficient && (this.coefficient = e.feeData.coefficient), void 0 !== this.gasLimit && void 0 !== e.feeData.gasLimit && (this.gasLimit = e.feeData.gasLimit)), e.txWebUrl && (this.explorer.webUrl = e.txWebUrl);
                    const r = e.explorers.find(({
                        className: e
                    }) => "Web3Explorer" === e);
                    this.coreLibrary.currentProvider.host !== r.baseUrl && (this.coreLibrary = new n.default(r.baseUrl));
                    const t = e.explorers.find(({
                        className: e
                    }) => "BlockscoutExplorer" === e);
                    t && this.blockscout.config.baseUrl !== t.baseUrl && (this.blockscout = new u.BlockscoutExplorer({
                        wallet: this.instance,
                        config: t
                    }))
                }
                async getInfo() {
                    const e = await this.coreLibrary.eth.getBalance(this.address);
                    return this.balance = e, {
                        balance: e
                    }
                }
                async getTransactions(...e) {
                    return this.blockscout.getTransactions(...e)
                }
                async getGasPrice() {
                    const e = await this.coreLibrary.eth.getGasPrice();
                    return new this.BN(e)
                }
                async sendTransaction(e) {
                    return new Promise((r, t) => {
                        this.coreLibrary.eth.sendSignedTransaction(e).on("transactionHash", e => {
                            r({
                                txid: e
                            })
                        }).catch(e => {
                            const r = new s.ExplorerRequestError({
                                type: c.SEND_TRANSACTION_TYPE,
                                error: e,
                                instance: this
                            });
                            t(r)
                        })
                    })
                }
            }
            var p = ETCCoin;
            r.default = p
        },
        5474: function(e, r, t) {
            "use strict";
            var i = t(2345),
                n = t(2344);

            function o(e) {
                var r = e;
                if ("string" != typeof r) throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof r + ", while padToEven.");
                return r.length % 2 && (r = "0" + r), r
            }

            function f(e) {
                return "0x" + e.toString(16)
            }
            e.exports = {
                arrayContainsArray: function(e, r, t) {
                    if (!0 !== Array.isArray(e)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof e + "'");
                    if (!0 !== Array.isArray(r)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof r + "'");
                    return r[Boolean(t) ? "some" : "every"]((function(r) {
                        return e.indexOf(r) >= 0
                    }))
                },
                intToBuffer: function(e) {
                    var r = f(e);
                    return new Buffer(o(r.slice(2)), "hex")
                },
                getBinarySize: function(e) {
                    if ("string" != typeof e) throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'.");
                    return Buffer.byteLength(e, "utf8")
                },
                isHexPrefixed: i,
                stripHexPrefix: n,
                padToEven: o,
                intToHex: f,
                fromAscii: function(e) {
                    for (var r = "", t = 0; t < e.length; t++) {
                        var i = e.charCodeAt(t).toString(16);
                        r += i.length < 2 ? "0" + i : i
                    }
                    return "0x" + r
                },
                fromUtf8: function(e) {
                    return "0x" + o(new Buffer(e, "utf8").toString("hex")).replace(/^0+|0+$/g, "")
                },
                toAscii: function(e) {
                    var r = "",
                        t = 0,
                        i = e.length;
                    for ("0x" === e.substring(0, 2) && (t = 2); t < i; t += 2) {
                        var n = parseInt(e.substr(t, 2), 16);
                        r += String.fromCharCode(n)
                    }
                    return r
                },
                toUtf8: function(e) {
                    return new Buffer(o(n(e).replace(/^0+|0+$/g, "")), "hex").toString("utf8")
                },
                getKeys: function(e, r, t) {
                    if (!Array.isArray(e)) throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof e + "'");
                    if ("string" != typeof r) throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof r + "'.");
                    for (var i = [], n = 0; n < e.length; n++) {
                        var o = e[n][r];
                        if (t && !o) o = "";
                        else if ("string" != typeof o) throw new Error("invalid abi");
                        i.push(o)
                    }
                    return i
                },
                isHexString: function(e, r) {
                    return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!r || e.length === 2 + 2 * r)
                }
            }
        },
        5475: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.baToJSON = r.addHexPrefix = r.toUnsigned = r.fromSigned = r.bufferToHex = r.bufferToInt = r.toBuffer = r.stripZeros = r.unpad = r.setLengthRight = r.setLength = r.setLengthLeft = r.zeros = void 0;
            var i = t(5474),
                n = t(35);
            r.zeros = function(e) {
                return Buffer.allocUnsafe(e).fill(0)
            }, r.setLengthLeft = function(e, t, i) {
                void 0 === i && (i = !1);
                var n = r.zeros(t);
                return e = r.toBuffer(e), i ? e.length < t ? (e.copy(n), n) : e.slice(0, t) : e.length < t ? (e.copy(n, t - e.length), n) : e.slice(-t)
            }, r.setLength = r.setLengthLeft, r.setLengthRight = function(e, t) {
                return r.setLength(e, t, !0)
            }, r.unpad = function(e) {
                for (var r = (e = i.stripHexPrefix(e))[0]; e.length > 0 && "0" === r.toString();) r = (e = e.slice(1))[0];
                return e
            }, r.stripZeros = r.unpad, r.toBuffer = function(e) {
                if (!Buffer.isBuffer(e))
                    if (Array.isArray(e)) e = Buffer.from(e);
                    else if ("string" == typeof e) {
                    if (!i.isHexString(e)) throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + e);
                    e = Buffer.from(i.padToEven(i.stripHexPrefix(e)), "hex")
                } else if ("number" == typeof e) e = i.intToBuffer(e);
                else if (null == e) e = Buffer.allocUnsafe(0);
                else if (n.isBN(e)) e = e.toArrayLike(Buffer);
                else {
                    if (!e.toArray) throw new Error("invalid type");
                    e = Buffer.from(e.toArray())
                }
                return e
            }, r.bufferToInt = function(e) {
                return new n(r.toBuffer(e)).toNumber()
            }, r.bufferToHex = function(e) {
                return "0x" + (e = r.toBuffer(e)).toString("hex")
            }, r.fromSigned = function(e) {
                return new n(e).fromTwos(256)
            }, r.toUnsigned = function(e) {
                return Buffer.from(e.toTwos(256).toArray())
            }, r.addHexPrefix = function(e) {
                return "string" != typeof e || i.isHexPrefixed(e) ? e : "0x" + e
            }, r.baToJSON = function(e) {
                if (Buffer.isBuffer(e)) return "0x" + e.toString("hex");
                if (e instanceof Array) {
                    for (var t = [], i = 0; i < e.length; i++) t.push(r.baToJSON(e[i]));
                    return t
                }
            }
        },
        5480: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.ecdhUnsafe = r.ecdh = r.recover = r.verify = r.sign = r.signatureImportLax = r.signatureImport = r.signatureExport = r.signatureNormalize = r.publicKeyCombine = r.publicKeyTweakMul = r.publicKeyTweakAdd = r.publicKeyVerify = r.publicKeyConvert = r.publicKeyCreate = r.privateKeyTweakMul = r.privateKeyTweakAdd = r.privateKeyModInverse = r.privateKeyNegate = r.privateKeyImport = r.privateKeyExport = r.privateKeyVerify = void 0;
            var i = t(1385),
                n = t(5562),
                o = t(5563);
            r.privateKeyVerify = function(e) {
                return 32 === e.length && i.privateKeyVerify(Uint8Array.from(e))
            }, r.privateKeyExport = function(e, r) {
                if (32 !== e.length) throw new RangeError("private key length is invalid");
                var t = n.privateKeyExport(e, r);
                return o.privateKeyExport(e, t, r)
            }, r.privateKeyImport = function(e) {
                if (null !== (e = o.privateKeyImport(e)) && 32 === e.length && r.privateKeyVerify(e)) return e;
                throw new Error("couldn't import from DER format")
            }, r.privateKeyNegate = function(e) {
                return Buffer.from(i.privateKeyNegate(Uint8Array.from(e)))
            }, r.privateKeyModInverse = function(e) {
                if (32 !== e.length) throw new Error("private key length is invalid");
                return Buffer.from(n.privateKeyModInverse(Uint8Array.from(e)))
            }, r.privateKeyTweakAdd = function(e, r) {
                return Buffer.from(i.privateKeyTweakAdd(Uint8Array.from(e), r))
            }, r.privateKeyTweakMul = function(e, r) {
                return Buffer.from(i.privateKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r)))
            }, r.publicKeyCreate = function(e, r) {
                return Buffer.from(i.publicKeyCreate(Uint8Array.from(e), r))
            }, r.publicKeyConvert = function(e, r) {
                return Buffer.from(i.publicKeyConvert(Uint8Array.from(e), r))
            }, r.publicKeyVerify = function(e) {
                return (33 === e.length || 65 === e.length) && i.publicKeyVerify(Uint8Array.from(e))
            }, r.publicKeyTweakAdd = function(e, r, t) {
                return Buffer.from(i.publicKeyTweakAdd(Uint8Array.from(e), Uint8Array.from(r), t))
            }, r.publicKeyTweakMul = function(e, r, t) {
                return Buffer.from(i.publicKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r), t))
            }, r.publicKeyCombine = function(e, r) {
                var t = [];
                return e.forEach((function(e) {
                    t.push(Uint8Array.from(e))
                })), Buffer.from(i.publicKeyCombine(t, r))
            }, r.signatureNormalize = function(e) {
                return Buffer.from(i.signatureNormalize(Uint8Array.from(e)))
            }, r.signatureExport = function(e) {
                return Buffer.from(i.signatureExport(Uint8Array.from(e)))
            }, r.signatureImport = function(e) {
                return Buffer.from(i.signatureImport(Uint8Array.from(e)))
            }, r.signatureImportLax = function(e) {
                if (0 === e.length) throw new RangeError("signature length is invalid");
                var r = o.signatureImportLax(e);
                if (null === r) throw new Error("couldn't parse DER signature");
                return n.signatureImport(r)
            }, r.sign = function(e, r, t) {
                if (null === t) throw new TypeError("options should be an Object");
                var n = void 0;
                if (t) {
                    if (n = {}, null === t.data) throw new TypeError("options.data should be a Buffer");
                    if (t.data) {
                        if (32 != t.data.length) throw new RangeError("options.data length is invalid");
                        n.data = new Uint8Array(t.data)
                    }
                    if (null === t.noncefn) throw new TypeError("options.noncefn should be a Function");
                    t.noncefn && (n.noncefn = function(e, r, i, n, o) {
                        var f = null != i ? Buffer.from(i) : null,
                            a = null != n ? Buffer.from(n) : null,
                            u = Buffer.from("");
                        return t.noncefn && (u = t.noncefn(Buffer.from(e), Buffer.from(r), f, a, o)), new Uint8Array(u)
                    })
                }
                var o = i.ecdsaSign(Uint8Array.from(e), Uint8Array.from(r), n);
                return {
                    signature: Buffer.from(o.signature),
                    recovery: o.recid
                }
            }, r.verify = function(e, r, t) {
                return i.ecdsaVerify(Uint8Array.from(r), Uint8Array.from(e), t)
            }, r.recover = function(e, r, t, n) {
                return Buffer.from(i.ecdsaRecover(Uint8Array.from(r), t, Uint8Array.from(e), n))
            }, r.ecdh = function(e, r) {
                return Buffer.from(i.ecdh(Uint8Array.from(e), Uint8Array.from(r), {}))
            }, r.ecdhUnsafe = function(e, r, t) {
                if (33 !== e.length && 65 !== e.length) throw new RangeError("public key length is invalid");
                if (32 !== r.length) throw new RangeError("private key length is invalid");
                return Buffer.from(n.ecdhUnsafe(Uint8Array.from(e), Uint8Array.from(r), t))
            }
        },
        5481: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.rlphash = r.ripemd160 = r.sha256 = r.keccak256 = r.keccak = void 0;
            var i = t(2347),
                n = i.keccak224,
                o = i.keccak384,
                f = i.keccak256,
                a = i.keccak512,
                u = t(101),
                s = t(5474),
                c = t(546),
                l = t(5475);
            r.keccak = function(e, r) {
                switch (void 0 === r && (r = 256), e = "string" != typeof e || s.isHexString(e) ? l.toBuffer(e) : Buffer.from(e, "utf8"), r || (r = 256), r) {
                    case 224:
                        return n(e);
                    case 256:
                        return f(e);
                    case 384:
                        return o(e);
                    case 512:
                        return a(e);
                    default:
                        throw new Error("Invald algorithm: keccak" + r)
                }
            }, r.keccak256 = function(e) {
                return r.keccak(e)
            }, r.sha256 = function(e) {
                return e = l.toBuffer(e), u("sha256").update(e).digest()
            }, r.ripemd160 = function(e, r) {
                e = l.toBuffer(e);
                var t = u("rmd160").update(e).digest();
                return !0 === r ? l.setLength(t, 32) : t
            }, r.rlphash = function(e) {
                return r.keccak(c.encode(e))
            }
        },
        5552: function(e, r, t) {
            "use strict";
            var i = t(5553).HDKey,
                n = t(5560);

            function o() {}

            function f(e) {
                var r = new o;
                return r._hdkey = e, r
            }
            o.fromMasterSeed = function(e) {
                return f(i.fromMasterSeed(e))
            }, o.fromExtendedKey = function(e) {
                return f(i.fromExtendedKey(e))
            }, o.prototype.privateExtendedKey = function() {
                if (!this._hdkey.privateExtendedKey) throw new Error("This is a public key only wallet");
                return this._hdkey.privateExtendedKey
            }, o.prototype.publicExtendedKey = function() {
                return this._hdkey.publicExtendedKey
            }, o.prototype.derivePath = function(e) {
                return f(this._hdkey.derive(e))
            }, o.prototype.deriveChild = function(e) {
                return f(this._hdkey.deriveChild(e))
            }, o.prototype.getWallet = function() {
                return this._hdkey._privateKey ? n.fromPrivateKey(this._hdkey._privateKey) : n.fromPublicKey(this._hdkey._publicKey, !0)
            }, e.exports = o
        },
        5553: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var i = t(5554);
            r.HDKey = i
        },
        5554: function(e, r, t) {
            "use strict";

            function i(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e
            }
            var n = i(t(72)),
                o = i(t(21)),
                f = i(t(172)),
                a = t(5555),
                u = t(5558),
                s = o.Buffer,
                c = s.from("Bitcoin seed", "utf8"),
                l = {
                    private: 76066276,
                    public: 76067358
                };

            function p(e) {
                this.versions = e || l, this.depth = 0, this.index = 0, this._privateKey = null, this._publicKey = null, this.chainCode = null, this._fingerprint = 0, this.parentFingerprint = 0
            }

            function d(e, r, t) {
                var i = s.allocUnsafe(78);
                i.writeUInt32BE(r, 0), i.writeUInt8(e.depth, 4);
                var n = e.depth ? e.parentFingerprint : 0;
                return i.writeUInt32BE(n, 5), i.writeUInt32BE(e.index, 9), e.chainCode.copy(i, 13), t.copy(i, 45), i
            }

            function y(e) {
                var r = a.createHash("sha256").update(e).digest();
                return a.createHash("ripemd160").update(r).digest()
            }
            Object.defineProperty(p.prototype, "fingerprint", {
                get: function() {
                    return this._fingerprint
                }
            }), Object.defineProperty(p.prototype, "identifier", {
                get: function() {
                    return this._identifier
                }
            }), Object.defineProperty(p.prototype, "pubKeyHash", {
                get: function() {
                    return this.identifier
                }
            }), Object.defineProperty(p.prototype, "privateKey", {
                get: function() {
                    return this._privateKey
                },
                set: function(e) {
                    n.equal(e.length, 32, "Private key must be 32 bytes."), n(!0 === u.privateKeyVerify(e), "Invalid private key"), this._privateKey = e, this._publicKey = u.publicKeyCreate(e, !0), this._identifier = y(this.publicKey), this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0)
                }
            }), Object.defineProperty(p.prototype, "publicKey", {
                get: function() {
                    return this._publicKey
                },
                set: function(e) {
                    n(33 === e.length || 65 === e.length, "Public key must be 33 or 65 bytes."), n(!0 === u.publicKeyVerify(e), "Invalid public key"), this._publicKey = u.publicKeyConvert(e, !0), this._identifier = y(this.publicKey), this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0), this._privateKey = null
                }
            }), Object.defineProperty(p.prototype, "privateExtendedKey", {
                get: function() {
                    return this._privateKey ? f.encode(d(this, this.versions.private, s.concat([s.alloc(1, 0), this.privateKey]))) : null
                }
            }), Object.defineProperty(p.prototype, "publicExtendedKey", {
                get: function() {
                    return f.encode(d(this, this.versions.public, this.publicKey))
                }
            }), p.prototype.derive = function(e) {
                if ("m" === e || "M" === e || "m'" === e || "M'" === e) return this;
                var r = e.split("/"),
                    t = this;
                return r.forEach((function(e, r) {
                    if (0 !== r) {
                        var i = e.length > 1 && "'" === e[e.length - 1],
                            o = parseInt(e, 10);
                        n(o < 2147483648, "Invalid index"), i && (o += 2147483648), t = t.deriveChild(o)
                    } else n(/^[mM]{1}/.test(e), 'Path must start with "m" or "M"')
                })), t
            }, p.prototype.deriveChild = function(e) {
                var r, t = e >= 2147483648,
                    i = s.allocUnsafe(4);
                if (i.writeUInt32BE(e, 0), t) {
                    n(this.privateKey, "Could not derive hardened child key");
                    var o = this.privateKey,
                        f = s.alloc(1, 0);
                    o = s.concat([f, o]), r = s.concat([o, i])
                } else r = s.concat([this.publicKey, i]);
                var c = a.createHmac("sha512", this.chainCode).update(r).digest(),
                    l = c.slice(0, 32),
                    d = c.slice(32),
                    y = new p(this.versions);
                if (this.privateKey) try {
                    y.privateKey = u.privateKeyTweakAdd(this.privateKey, l)
                } catch (r) {
                    return this.deriveChild(e + 1)
                } else try {
                    y.publicKey = u.publicKeyTweakAdd(this.publicKey, l, !0)
                } catch (r) {
                    return this.deriveChild(e + 1)
                }
                return y.chainCode = d, y.depth = this.depth + 1, y.parentFingerprint = this.fingerprint, y.index = e, y
            }, p.prototype.sign = function(e) {
                return u.sign(e, this.privateKey).signature
            }, p.prototype.verify = function(e, r) {
                return u.verify(e, r, this.publicKey)
            }, p.prototype.wipePrivateData = function() {
                return this._privateKey && a.randomBytes(this._privateKey.length).copy(this._privateKey), this._privateKey = null, this
            }, p.prototype.toJSON = function() {
                return {
                    xpriv: this.privateExtendedKey,
                    xpub: this.publicExtendedKey
                }
            }, p.fromMasterSeed = function(e, r) {
                var t = a.createHmac("sha512", c).update(e).digest(),
                    i = t.slice(0, 32),
                    n = t.slice(32),
                    o = new p(r);
                return o.chainCode = n, o.privateKey = i, o
            }, p.fromExtendedKey = function(e, r) {
                var t = new p(r = r || l),
                    i = f.decode(e),
                    o = i.readUInt32BE(0);
                n(o === r.private || o === r.public, "Version mismatch: does not match private or public"), t.depth = i.readUInt8(4), t.parentFingerprint = i.readUInt32BE(5), t.index = i.readUInt32BE(9), t.chainCode = i.slice(13, 45);
                var a = i.slice(45);
                return 0 === a.readUInt8(0) ? (n(o === r.private, "Version mismatch: version does not match private"), t.privateKey = a.slice(1)) : (n(o === r.public, "Version mismatch: version does not match public"), t.publicKey = a), t
            }, p.fromJSON = function(e) {
                return p.fromExtendedKey(e.xpriv)
            }, p.HARDENED_OFFSET = 2147483648;
            var h = p;
            e.exports = h
        },
        5555: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var i = t(5556),
                n = t(5557);
            r.createHmac = t(320), r.randomBytes = t(125);
            var o = function() {
                function e(e) {
                    this.hashFunction = e, this.buffers = []
                }
                return e.prototype.update = function(e) {
                    if (!Buffer.isBuffer(e)) throw new Error("hdkey-crypto shim is outdated");
                    return this.buffers.push(e), this
                }, e.prototype.digest = function(e) {
                    if (e) throw new Error("hdkey-crypto shim is outdated");
                    return this.hashFunction(Buffer.concat(this.buffers))
                }, e
            }();
            r.createHash = function(e) {
                if ("ripemd160" === e) return new o(i.ripemd160);
                if ("sha256" === e) return new o(n.sha256);
                throw new Error("hdkey-crypto shim is outdated")
            }
        },
        5556: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var i = t(2343).ripemd160,
                n = t(2336);
            r.ripemd160 = n.createHashFunction((function() {
                return new i
            }))
        },
        5557: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var i = t(1384),
                n = t(2336);
            r.sha256 = n.createHashFunction((function() {
                return new i
            }))
        },
        5558: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                function(e) {
                    for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t])
                }(t(5559))
        },
        5559: function(e, r, t) {
            "use strict";
            var i = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e)
                    for (var t in e) Object.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                return r.default = e, r
            };
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var n = i(t(1386));
            r.privateKeyVerify = function(e) {
                return n.privateKeyVerify(e)
            }, r.publicKeyCreate = function(e, r) {
                return void 0 === r && (r = !0), Buffer.from(n.publicKeyCreate(e, r))
            }, r.publicKeyVerify = function(e) {
                return n.publicKeyVerify(e)
            }, r.publicKeyConvert = function(e, r) {
                return void 0 === r && (r = !0), Buffer.from(n.publicKeyConvert(e, r))
            }, r.privateKeyTweakAdd = function(e, r) {
                return Buffer.from(n.privateKeyTweakAdd(Buffer.from(e), r))
            }, r.publicKeyTweakAdd = function(e, r, t) {
                return void 0 === t && (t = !0), Buffer.from(n.publicKeyTweakAdd(Buffer.from(e), r, t))
            }, r.sign = function(e, r) {
                var t = n.ecdsaSign(e, r);
                return {
                    signature: Buffer.from(t.signature),
                    recovery: t.recid
                }
            }, r.verify = function(e, r, t) {
                return n.ecdsaVerify(r, e, t)
            }
        },
        5560: function(e, r, t) {
            "use strict";
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                n = t(21).Buffer,
                o = t(5561),
                f = t(24),
                a = t(125),
                u = t(5568),
                s = t(550),
                c = t(172);

            function l(e, r) {
                if (!e) throw new Error(r || "Assertion failed")
            }

            function p(e, r) {
                return n.concat([e.update(r), e.final()])
            }
            var d = function(e, r) {
                if (e && r) throw new Error("Cannot supply both a private and a public key to the constructor");
                if (e && !o.isValidPrivate(e)) throw new Error("Private key does not satisfy the curve requirements (ie. it is invalid)");
                if (r && !o.isValidPublic(r)) throw new Error("Invalid public key");
                this._privKey = e, this._pubKey = r
            };
            Object.defineProperty(d.prototype, "privKey", {
                get: function() {
                    return l(this._privKey, "This is a public key only wallet"), this._privKey
                }
            }), Object.defineProperty(d.prototype, "pubKey", {
                get: function() {
                    return this._pubKey || (this._pubKey = o.privateToPublic(this.privKey)), this._pubKey
                }
            }), d.generate = function(e) {
                if (!e) return new d(a(32));
                for (var r = new o.BN("088f924eeceeda7fe92e1f5b0fffffffffffffff", 16);;) {
                    var t = a(32);
                    if (new o.BN(o.privateToAddress(t)).lte(r)) return new d(t)
                }
            }, d.generateVanityAddress = function(e) {
                for ("object" !== (void 0 === e ? "undefined" : i(e)) && (e = new RegExp(e));;) {
                    var r = a(32),
                        t = o.privateToAddress(r);
                    if (e.test(t.toString("hex"))) return new d(r)
                }
            }, d.prototype.getPrivateKey = function() {
                return this.privKey
            }, d.prototype.getPrivateKeyString = function() {
                return o.bufferToHex(this.getPrivateKey())
            }, d.prototype.getPublicKey = function() {
                return this.pubKey
            }, d.prototype.getPublicKeyString = function() {
                return o.bufferToHex(this.getPublicKey())
            }, d.prototype.getAddress = function() {
                return o.publicToAddress(this.pubKey)
            }, d.prototype.getAddressString = function() {
                return o.bufferToHex(this.getAddress())
            }, d.prototype.getChecksumAddressString = function() {
                return o.toChecksumAddress(this.getAddressString())
            }, d.prototype.toV3 = function(e, r) {
                l(this._privKey, "This is a public key only wallet");
                var t, i = (r = r || {}).salt || a(32),
                    c = r.iv || a(16),
                    d = r.kdf || "scrypt",
                    y = {
                        dklen: r.dklen || 32,
                        salt: i.toString("hex")
                    };
                if ("pbkdf2" === d) y.c = r.c || 262144, y.prf = "hmac-sha256", t = f.pbkdf2Sync(n.from(e), i, y.c, y.dklen, "sha256");
                else {
                    if ("scrypt" !== d) throw new Error("Unsupported kdf");
                    y.n = r.n || 262144, y.r = r.r || 8, y.p = r.p || 1, t = u(n.from(e), i, y.n, y.r, y.p, y.dklen)
                }
                var h = f.createCipheriv(r.cipher || "aes-128-ctr", t.slice(0, 16), c);
                if (!h) throw new Error("Unsupported cipher");
                var v = p(h, this.privKey),
                    g = o.keccak256(n.concat([t.slice(16, 32), n.from(v, "hex")]));
                return {
                    version: 3,
                    id: s({
                        random: r.uuid || a(16)
                    }),
                    address: this.getAddress().toString("hex"),
                    crypto: {
                        ciphertext: v.toString("hex"),
                        cipherparams: {
                            iv: c.toString("hex")
                        },
                        cipher: r.cipher || "aes-128-ctr",
                        kdf: d,
                        kdfparams: y,
                        mac: g.toString("hex")
                    }
                }
            }, d.prototype.getV3Filename = function(e) {
                return ["UTC--", (e ? new Date(e) : new Date).toJSON().replace(/:/g, "-"), "--", this.getAddress().toString("hex")].join("")
            }, d.prototype.toV3String = function(e, r) {
                return JSON.stringify(this.toV3(e, r))
            }, d.fromPublicKey = function(e, r) {
                return r && (e = o.importPublic(e)), new d(null, e)
            }, d.fromExtendedPublicKey = function(e) {
                return l("xpub" === e.slice(0, 4), "Not an extended public key"), e = c.decode(e).slice(45), d.fromPublicKey(e, !0)
            }, d.fromPrivateKey = function(e) {
                return new d(e)
            }, d.fromExtendedPrivateKey = function(e) {
                l("xprv" === e.slice(0, 4), "Not an extended private key");
                var r = c.decode(e);
                return l(0 === r[45], "Invalid extended private key"), d.fromPrivateKey(r.slice(46))
            }, d.fromV1 = function(e, r) {
                l("string" == typeof r);
                var t = "object" === (void 0 === e ? "undefined" : i(e)) ? e : JSON.parse(e);
                if ("1" !== t.Version) throw new Error("Not a V1 wallet");
                if ("scrypt" !== t.Crypto.KeyHeader.Kdf) throw new Error("Unsupported key derivation scheme");
                var a = t.Crypto.KeyHeader.KdfParams,
                    s = u(n.from(r), n.from(t.Crypto.Salt, "hex"), a.N, a.R, a.P, a.DkLen),
                    c = n.from(t.Crypto.CipherText, "hex");
                if (o.keccak256(n.concat([s.slice(16, 32), c])).toString("hex") !== t.Crypto.MAC) throw new Error("Key derivation failed - possibly wrong passphrase");
                var y = p(f.createDecipheriv("aes-128-cbc", o.keccak256(s.slice(0, 16)).slice(0, 16), n.from(t.Crypto.IV, "hex")), c);
                return new d(y)
            }, d.fromV3 = function(e, r, t) {
                l("string" == typeof r);
                var a, s, c = "object" === (void 0 === e ? "undefined" : i(e)) ? e : JSON.parse(t ? e.toLowerCase() : e);
                if (3 !== c.version) throw new Error("Not a V3 wallet");
                if ("scrypt" === c.crypto.kdf) s = c.crypto.kdfparams, a = u(n.from(r), n.from(s.salt, "hex"), s.n, s.r, s.p, s.dklen);
                else {
                    if ("pbkdf2" !== c.crypto.kdf) throw new Error("Unsupported key derivation scheme");
                    if ("hmac-sha256" !== (s = c.crypto.kdfparams).prf) throw new Error("Unsupported parameters to PBKDF2");
                    a = f.pbkdf2Sync(n.from(r), n.from(s.salt, "hex"), s.c, s.dklen, "sha256")
                }
                var y = n.from(c.crypto.ciphertext, "hex");
                if (o.keccak256(n.concat([a.slice(16, 32), y])).toString("hex") !== c.crypto.mac) throw new Error("Key derivation failed - possibly wrong passphrase");
                var h = p(f.createDecipheriv(c.crypto.cipher, a.slice(0, 16), n.from(c.crypto.cipherparams.iv, "hex")), y);
                return new d(h)
            }, d.fromEthSale = function(e, r) {
                l("string" == typeof r);
                var t = "object" === (void 0 === e ? "undefined" : i(e)) ? e : JSON.parse(e),
                    a = n.from(t.encseed, "hex"),
                    u = f.pbkdf2Sync(r, r, 2e3, 32, "sha256").slice(0, 16),
                    s = p(f.createDecipheriv("aes-128-cbc", u, a.slice(0, 16)), a.slice(16)),
                    c = new d(o.keccak256(s));
                if (c.getAddress().toString("hex") !== t.ethaddr) throw new Error("Decoded key mismatch - possibly wrong passphrase");
                return c
            }, e.exports = d
        },
        5561: function(e, r, t) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, r, t, i) {
                    void 0 === i && (i = t), Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: function() {
                            return r[t]
                        }
                    })
                } : function(e, r, t, i) {
                    void 0 === i && (i = t), e[i] = r[t]
                }),
                n = this && this.__exportStar || function(e, r) {
                    for (var t in e) "default" === t || r.hasOwnProperty(t) || i(r, e, t)
                };
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.secp256k1 = r.rlp = r.BN = void 0;
            var o = t(5480);
            r.secp256k1 = o;
            var f = t(5474),
                a = t(35);
            r.BN = a;
            var u = t(546);
            r.rlp = u, Object.assign(r, f), n(t(5564), r), n(t(5565), r), n(t(5481), r), n(t(5566), r), n(t(5475), r), n(t(5567), r)
        },
        5562: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var i = t(35),
                n = new(0, t(85).ec)("secp256k1"),
                o = n.curve;
            r.privateKeyExport = function(e, r) {
                void 0 === r && (r = !0);
                var t = new i(e);
                if (t.ucmp(o.n) >= 0) throw new Error("couldn't export to DER format");
                var a = n.g.mul(t);
                return f(a.getX(), a.getY(), r)
            }, r.privateKeyModInverse = function(e) {
                var r = new i(e);
                if (r.ucmp(o.n) >= 0 || r.isZero()) throw new Error("private key range is invalid");
                return r.invm(o.n).toArrayLike(Buffer, "be", 32)
            }, r.signatureImport = function(e) {
                var r = new i(e.r);
                r.ucmp(o.n) >= 0 && (r = new i(0));
                var t = new i(e.s);
                return t.ucmp(o.n) >= 0 && (t = new i(0)), Buffer.concat([r.toArrayLike(Buffer, "be", 32), t.toArrayLike(Buffer, "be", 32)])
            }, r.ecdhUnsafe = function(e, r, t) {
                void 0 === t && (t = !0);
                var a = n.keyFromPublic(e),
                    u = new i(r);
                if (u.ucmp(o.n) >= 0 || u.isZero()) throw new Error("scalar was invalid (zero or overflow)");
                var s = a.pub.mul(u);
                return f(s.getX(), s.getY(), t)
            };
            var f = function(e, r, t) {
                var i;
                return t ? ((i = Buffer.alloc(33))[0] = r.isOdd() ? 3 : 2, e.toArrayLike(Buffer, "be", 32).copy(i, 1)) : ((i = Buffer.alloc(65))[0] = 4, e.toArrayLike(Buffer, "be", 32).copy(i, 1), r.toArrayLike(Buffer, "be", 32).copy(i, 33)), i
            }
        },
        5563: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var i = Buffer.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                n = Buffer.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            r.privateKeyExport = function(e, r, t) {
                void 0 === t && (t = !0);
                var o = Buffer.from(t ? i : n);
                return e.copy(o, t ? 8 : 9), r.copy(o, t ? 181 : 214), o
            }, r.privateKeyImport = function(e) {
                var r = e.length,
                    t = 0;
                if (r < t + 1 || 48 !== e[t]) return null;
                if (r < (t += 1) + 1 || !(128 & e[t])) return null;
                var i = 127 & e[t];
                if (i < 1 || i > 2) return null;
                if (r < (t += 1) + i) return null;
                var n = e[t + i - 1] | (i > 1 ? e[t + i - 2] << 8 : 0);
                return r < (t += i) + n || r < t + 3 || 2 !== e[t] || 1 !== e[t + 1] || 1 !== e[t + 2] || r < (t += 3) + 2 || 4 !== e[t] || e[t + 1] > 32 || r < t + 2 + e[t + 1] ? null : e.slice(t + 2, t + 2 + e[t + 1])
            }, r.signatureImportLax = function(e) {
                var r = Buffer.alloc(32, 0),
                    t = Buffer.alloc(32, 0),
                    i = e.length,
                    n = 0;
                if (48 !== e[n++]) return null;
                var o = e[n++];
                if (128 & o && (n += o - 128) > i) return null;
                if (2 !== e[n++]) return null;
                var f = e[n++];
                if (128 & f) {
                    if (n + (o = f - 128) > i) return null;
                    for (; o > 0 && 0 === e[n]; n += 1, o -= 1);
                    for (f = 0; o > 0; n += 1, o -= 1) f = (f << 8) + e[n]
                }
                if (f > i - n) return null;
                var a = n;
                if (n += f, 2 !== e[n++]) return null;
                var u = e[n++];
                if (128 & u) {
                    if (n + (o = u - 128) > i) return null;
                    for (; o > 0 && 0 === e[n]; n += 1, o -= 1);
                    for (u = 0; o > 0; n += 1, o -= 1) u = (u << 8) + e[n]
                }
                if (u > i - n) return null;
                var s = n;
                for (n += u; f > 0 && 0 === e[a]; f -= 1, a += 1);
                if (f > 32) return null;
                var c = e.slice(a, a + f);
                for (c.copy(r, 32 - c.length); u > 0 && 0 === e[s]; u -= 1, s += 1);
                if (u > 32) return null;
                var l = e.slice(s, s + u);
                return l.copy(t, 32 - l.length), {
                    r: r,
                    s: t
                }
            }
        },
        5564: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.KECCAK256_RLP = r.KECCAK256_RLP_S = r.KECCAK256_RLP_ARRAY = r.KECCAK256_RLP_ARRAY_S = r.KECCAK256_NULL = r.KECCAK256_NULL_S = r.TWO_POW256 = r.MAX_INTEGER = void 0;
            var i = t(35);
            r.MAX_INTEGER = new i("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), r.TWO_POW256 = new i("10000000000000000000000000000000000000000000000000000000000000000", 16), r.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", r.KECCAK256_NULL = Buffer.from(r.KECCAK256_NULL_S, "hex"), r.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", r.KECCAK256_RLP_ARRAY = Buffer.from(r.KECCAK256_RLP_ARRAY_S, "hex"), r.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", r.KECCAK256_RLP = Buffer.from(r.KECCAK256_RLP_S, "hex")
        },
        5565: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.importPublic = r.privateToPublic = r.privateToAddress = r.publicToAddress = r.pubToAddress = r.isValidPublic = r.isValidPrivate = r.isPrecompiled = r.generateAddress2 = r.generateAddress = r.isValidChecksumAddress = r.toChecksumAddress = r.isZeroAddress = r.isValidAddress = r.zeroAddress = void 0;
            var i = t(72),
                n = t(5474),
                o = t(5480),
                f = t(35),
                a = t(5475),
                u = t(5481);
            r.zeroAddress = function() {
                var e = a.zeros(20);
                return a.bufferToHex(e)
            }, r.isValidAddress = function(e) {
                return /^0x[0-9a-fA-F]{40}$/.test(e)
            }, r.isZeroAddress = function(e) {
                return r.zeroAddress() === a.addHexPrefix(e)
            }, r.toChecksumAddress = function(e, r) {
                e = n.stripHexPrefix(e).toLowerCase();
                for (var t = void 0 !== r ? r.toString() + "0x" : "", i = u.keccak(t + e).toString("hex"), o = "0x", f = 0; f < e.length; f++) parseInt(i[f], 16) >= 8 ? o += e[f].toUpperCase() : o += e[f];
                return o
            }, r.isValidChecksumAddress = function(e, t) {
                return r.isValidAddress(e) && r.toChecksumAddress(e, t) === e
            }, r.generateAddress = function(e, r) {
                e = a.toBuffer(e);
                var t = new f(r);
                return t.isZero() ? u.rlphash([e, null]).slice(-20) : u.rlphash([e, Buffer.from(t.toArray())]).slice(-20)
            }, r.generateAddress2 = function(e, r, t) {
                var n = a.toBuffer(e),
                    o = a.toBuffer(r),
                    f = a.toBuffer(t);
                return i(20 === n.length), i(32 === o.length), u.keccak256(Buffer.concat([Buffer.from("ff", "hex"), n, o, u.keccak256(f)])).slice(-20)
            }, r.isPrecompiled = function(e) {
                var r = a.unpad(e);
                return 1 === r.length && r[0] >= 1 && r[0] <= 8
            }, r.isValidPrivate = function(e) {
                return o.privateKeyVerify(e)
            }, r.isValidPublic = function(e, r) {
                return void 0 === r && (r = !1), 64 === e.length ? o.publicKeyVerify(Buffer.concat([Buffer.from([4]), e])) : !!r && o.publicKeyVerify(e)
            }, r.pubToAddress = function(e, r) {
                return void 0 === r && (r = !1), e = a.toBuffer(e), r && 64 !== e.length && (e = o.publicKeyConvert(e, !1).slice(1)), i(64 === e.length), u.keccak(e).slice(-20)
            }, r.publicToAddress = r.pubToAddress, r.privateToAddress = function(e) {
                return r.publicToAddress(r.privateToPublic(e))
            }, r.privateToPublic = function(e) {
                return e = a.toBuffer(e), o.publicKeyCreate(e, !1).slice(1)
            }, r.importPublic = function(e) {
                return 64 !== (e = a.toBuffer(e)).length && (e = o.publicKeyConvert(e, !1).slice(1)), e
            }
        },
        5566: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.hashPersonalMessage = r.isValidSignature = r.fromRpcSig = r.toRpcSig = r.ecrecover = r.ecsign = void 0;
            var i = t(5480),
                n = t(35),
                o = t(5475),
                f = t(5481);

            function a(e, r) {
                return r ? e - (2 * r + 35) : e - 27
            }

            function u(e) {
                return 0 === e || 1 === e
            }
            r.ecsign = function(e, r, t) {
                var n = i.sign(e, r),
                    o = n.recovery;
                return {
                    r: n.signature.slice(0, 32),
                    s: n.signature.slice(32, 64),
                    v: t ? o + (2 * t + 35) : o + 27
                }
            }, r.ecrecover = function(e, r, t, n, f) {
                var s = Buffer.concat([o.setLength(t, 32), o.setLength(n, 32)], 64),
                    c = a(r, f);
                if (!u(c)) throw new Error("Invalid signature v value");
                var l = i.recover(e, s, c);
                return i.publicKeyConvert(l, !1).slice(1)
            }, r.toRpcSig = function(e, r, t, i) {
                if (!u(a(e, i))) throw new Error("Invalid signature v value");
                return o.bufferToHex(Buffer.concat([o.setLengthLeft(r, 32), o.setLengthLeft(t, 32), o.toBuffer(e)]))
            }, r.fromRpcSig = function(e) {
                var r = o.toBuffer(e);
                if (65 !== r.length) throw new Error("Invalid signature length");
                var t = r[64];
                return t < 27 && (t += 27), {
                    v: t,
                    r: r.slice(0, 32),
                    s: r.slice(32, 64)
                }
            }, r.isValidSignature = function(e, r, t, i, o) {
                void 0 === i && (i = !0);
                var f = new n("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                    s = new n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
                if (32 !== r.length || 32 !== t.length) return !1;
                if (!u(a(e, o))) return !1;
                var c = new n(r),
                    l = new n(t);
                return !(c.isZero() || c.gt(s) || l.isZero() || l.gt(s)) && (!i || 1 !== l.cmp(f))
            }, r.hashPersonalMessage = function(e) {
                var r = Buffer.from("Ethereum Signed Message:\n" + e.length.toString(), "utf-8");
                return f.keccak(Buffer.concat([r, e]))
            }
        },
        5567: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.defineProperties = void 0;
            var i = t(72),
                n = t(5474),
                o = t(546),
                f = t(5475);
            r.defineProperties = function(e, r, t) {
                if (e.raw = [], e._fields = [], e.toJSON = function(r) {
                        if (void 0 === r && (r = !1), r) {
                            var t = {};
                            return e._fields.forEach((function(r) {
                                t[r] = "0x" + e[r].toString("hex")
                            })), t
                        }
                        return f.baToJSON(e.raw)
                    }, e.serialize = function() {
                        return o.encode(e.raw)
                    }, r.forEach((function(r, t) {
                        function n() {
                            return e.raw[t]
                        }

                        function o(n) {
                            "00" !== (n = f.toBuffer(n)).toString("hex") || r.allowZero || (n = Buffer.allocUnsafe(0)), r.allowLess && r.length ? (n = f.stripZeros(n), i(r.length >= n.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === n.length || !r.length || i(r.length === n.length, "The field " + r.name + " must have byte length of " + r.length), e.raw[t] = n
                        }
                        e._fields.push(r.name), Object.defineProperty(e, r.name, {
                            enumerable: !0,
                            configurable: !0,
                            get: n,
                            set: o
                        }), r.default && (e[r.name] = r.default), r.alias && Object.defineProperty(e, r.alias, {
                            enumerable: !1,
                            configurable: !0,
                            set: o,
                            get: n
                        })
                    })), t)
                    if ("string" == typeof t && (t = Buffer.from(n.stripHexPrefix(t), "hex")), Buffer.isBuffer(t) && (t = o.decode(t)), Array.isArray(t)) {
                        if (t.length > e._fields.length) throw new Error("wrong number of fields in data");
                        t.forEach((function(r, t) {
                            e[e._fields[t]] = f.toBuffer(r)
                        }))
                    } else {
                        if ("object" != typeof t) throw new Error("invalid data");
                        var a = Object.keys(t);
                        r.forEach((function(r) {
                            -1 !== a.indexOf(r.name) && (e[r.name] = t[r.name]), -1 !== a.indexOf(r.alias) && (e[r.alias] = t[r.alias])
                        }))
                    }
            }
        },
        5568: function(e, r, t) {
            var i = t(190).pbkdf2Sync;

            function n(e, r, t, i, n) {
                if (Buffer.isBuffer(e) && Buffer.isBuffer(t)) e.copy(t, i, r, r + n);
                else
                    for (; n--;) t[i++] = e[r++]
            }
            e.exports = function(e, r, t, o, f, a, u) {
                if (0 === t || 0 != (t & t - 1)) throw Error("N must be > 0 and a power of 2");
                if (t > 2147483647 / 128 / o) throw Error("Parameter N is too large");
                if (o > 2147483647 / 128 / f) throw Error("Parameter r is too large");
                var s, c = new Buffer(256 * o),
                    l = new Buffer(128 * o * t),
                    p = new Int32Array(16),
                    d = new Int32Array(16),
                    y = new Buffer(64),
                    h = i(e, r, 1, 128 * f * o, "sha256");
                if (u) {
                    var v = f * t * 2,
                        g = 0;
                    s = function() {
                        ++g % 1e3 == 0 && u({
                            current: g,
                            total: v,
                            percent: g / v * 100
                        })
                    }
                }
                for (var m = 0; m < f; m++) b(h, 128 * m * o, o, t, l, c);
                return i(e, h, 1, a, "sha256");

                function b(e, r, t, i, n, o) {
                    var f, a = 128 * t;
                    for (e.copy(o, 0, r, r + a), f = 0; f < i; f++) o.copy(n, f * a, 0, 0 + a), w(o, 0, a, t), s && s();
                    for (f = 0; f < i; f++) {
                        var u = 0 + 64 * (2 * t - 1);
                        k(n, (o.readUInt32LE(u) & i - 1) * a, o, 0, a), w(o, 0, a, t), s && s()
                    }
                    o.copy(e, r, 0, 0 + a)
                }

                function w(e, r, t, i) {
                    var o;
                    for (n(e, r + 64 * (2 * i - 1), y, 0, 64), o = 0; o < 2 * i; o++) k(e, 64 * o, y, 0, 64), x(y), n(y, 0, e, t + 64 * o, 64);
                    for (o = 0; o < i; o++) n(e, t + 2 * o * 64, e, r + 64 * o, 64);
                    for (o = 0; o < i; o++) n(e, t + 64 * (2 * o + 1), e, r + 64 * (o + i), 64)
                }

                function K(e, r) {
                    return e << r | e >>> 32 - r
                }

                function x(e) {
                    var r;
                    for (r = 0; r < 16; r++) p[r] = (255 & e[4 * r + 0]) << 0, p[r] |= (255 & e[4 * r + 1]) << 8, p[r] |= (255 & e[4 * r + 2]) << 16, p[r] |= (255 & e[4 * r + 3]) << 24;
                    for (n(p, 0, d, 0, 16), r = 8; r > 0; r -= 2) d[4] ^= K(d[0] + d[12], 7), d[8] ^= K(d[4] + d[0], 9), d[12] ^= K(d[8] + d[4], 13), d[0] ^= K(d[12] + d[8], 18), d[9] ^= K(d[5] + d[1], 7), d[13] ^= K(d[9] + d[5], 9), d[1] ^= K(d[13] + d[9], 13), d[5] ^= K(d[1] + d[13], 18), d[14] ^= K(d[10] + d[6], 7), d[2] ^= K(d[14] + d[10], 9), d[6] ^= K(d[2] + d[14], 13), d[10] ^= K(d[6] + d[2], 18), d[3] ^= K(d[15] + d[11], 7), d[7] ^= K(d[3] + d[15], 9), d[11] ^= K(d[7] + d[3], 13), d[15] ^= K(d[11] + d[7], 18), d[1] ^= K(d[0] + d[3], 7), d[2] ^= K(d[1] + d[0], 9), d[3] ^= K(d[2] + d[1], 13), d[0] ^= K(d[3] + d[2], 18), d[6] ^= K(d[5] + d[4], 7), d[7] ^= K(d[6] + d[5], 9), d[4] ^= K(d[7] + d[6], 13), d[5] ^= K(d[4] + d[7], 18), d[11] ^= K(d[10] + d[9], 7), d[8] ^= K(d[11] + d[10], 9), d[9] ^= K(d[8] + d[11], 13), d[10] ^= K(d[9] + d[8], 18), d[12] ^= K(d[15] + d[14], 7), d[13] ^= K(d[12] + d[15], 9), d[14] ^= K(d[13] + d[12], 13), d[15] ^= K(d[14] + d[13], 18);
                    for (r = 0; r < 16; ++r) p[r] = d[r] + p[r];
                    for (r = 0; r < 16; r++) {
                        var t = 4 * r;
                        e[t + 0] = p[r] >> 0 & 255, e[t + 1] = p[r] >> 8 & 255, e[t + 2] = p[r] >> 16 & 255, e[t + 3] = p[r] >> 24 & 255
                    }
                }

                function k(e, r, t, i, n) {
                    for (var o = 0; o < n; o++) t[i + o] ^= e[r + o]
                }
            }
        }
    }
]);