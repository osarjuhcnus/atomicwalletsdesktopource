(window.webpackJsonp = window.webpackJsonp || []).push([
    [281], {
        5442: function(e, r, t) {
            "use strict";
            var i = t(2);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var n = i(t(2346)),
                o = i(t(35)),
                a = i(t(5552)),
                f = i(t(461)),
                s = i(t(55)),
                u = i(t(67)),
                c = t(5664),
                d = t(29),
                l = t(26),
                h = t(930);
            const p = "150000";
            class AVAXCoin extends((0, c.NftMixin)((0, h.HasProviders)((0, h.HasBlockScanner)(f.default)))) {
                constructor({
                    alias: e,
                    notify: r,
                    feeData: t,
                    explorers: i,
                    txWebUrl: n,
                    socket: o,
                    network: a,
                    chainId: f
                }) {
                    super({
                        alias: e,
                        notify: r,
                        name: "Avalanche C-Chain",
                        ticker: "AVAX",
                        decimal: 18,
                        derivation: "m/44'/9000'/0'/0/0",
                        unspendableBalance: "0",
                        txWebUrl: n,
                        explorers: i,
                        socket: o,
                        feeData: t,
                        id: "AVAX",
                        chainId: f || 43114,
                        network: a
                    }), this.gasLimit = String(t.gasLimit), this.gasLimitCoefficient = t.gasLimitCoefficient, this.gasPriceCoefficient = t.gasPriceCoefficient, this.defaultGasPrice = new this.BN(t.defaultGasPrice), this.defaultMaxGasPrice = new this.BN(t.defaultMaxGasPrice).div(new this.BN(10 ** 9)), this.resendTimeout = t.resendTimeout, this.nftGasLimitCoefficient = t.nftGasLimitCoefficient, this.nftGasPriceCoefficient = t.nftGasPriceCoefficient;
                    const s = i.find(({
                        className: e
                    }) => "Web3Explorer" === e);
                    this.baseUrl = s.baseUrl, this.initProvider(this.baseUrl), this.fields.paymentId = !1, this.nonce = new this.BN("0")
                }
                get instance() {
                    if (void 0 === this.coreLibrary) {
                        const e = this.config.explorers.find(({
                            className: e
                        }) => "Web3Explorer" === e);
                        this.initProvider(e.baseUrl)
                    }
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        decimal: this.decimal,
                        address: this.address,
                        parent: this.id,
                        BN: o.default,
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e),
                        coreLibrary: this.coreLibrary,
                        alias: this.alias,
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee,
                        gasLimit: this.gasLimit,
                        chainId: this.chainId
                    }
                }
                isFeeDynamic() {
                    return !0
                }
                initProvider(e) {
                    try {
                        this.coreLibrary = new n.default(e)
                    } catch (r) {
                        s.default.error({
                            instance: this,
                            error: r
                        }), setTimeout(() => this.initProvider(e), 1e4)
                    }
                }
                async loadWallet(e) {
                    try {
                        const r = a.default.fromMasterSeed(e).getWallet(),
                            t = this.coreLibrary.eth.accounts.privateKeyToAccount(r.getPrivateKeyString());
                        if (!t) throw new Error(this.wallet.ticker + " can't get the wallet!!!");
                        return this.privateKey = t.privateKey, this.address = t.address, this.getNonce(), this
                    } catch (e) {
                        return console.error(e), this
                    }
                }
                getAddress() {
                    return this.privateKey ? this.coreLibrary.eth.accounts.privateKeyToAccount(this.privateKey).address : new Error(this.wallet.ticker + " private key is empty!!!")
                }
                async validateAddress(e) {
                    return this.coreLibrary.utils.isAddress(e)
                }
                async createTransaction({
                    address: e,
                    amount: r,
                    paymentData: t = null,
                    nonce: i,
                    userGasPrice: n,
                    gasLimit: o = this.gasLimit
                }) {
                    const a = {
                        to: e,
                        value: r,
                        gas: o || this.gasLimit,
                        chainId: this.chainId,
                        gasPrice: new this.BN(n || await this.getGasPrice()),
                        nonce: i || (await this.getNonce()).toString()
                    };
                    t && (a.data = t), this.nonce = this.nonce.add(new this.BN(1));
                    return (await this.coreLibrary.eth.accounts.signTransaction(a, this.privateKey)).rawTransaction
                }
                async getTransactions() {
                    if (!this.address) throw new Error(this.wallet.ticker + " address not found");
                    return this.getProvider("history").getTransactions({
                        address: this.address
                    })
                }
                async getNonce() {
                    return this.nonce = new this.BN(await this.coreLibrary.eth.getTransactionCount(this.address, "pending")), this.nonce
                }
                async getFee({
                    userGasPrice: e = null,
                    gasLimit: r = null
                } = {}) {
                    return new this.BN(new this.BN(e || await this.getGasPrice())).mul(new this.BN(null !== r ? r : this.gasLimit))
                }
                async getGasPrice(e = !1) {
                    try {
                        if (e) return new this.BN(await this.coreLibrary.eth.getGasPrice());
                        const {
                            fastest: r
                        } = await u.default.get("avax-c-gas-price") || await this.getProvider("gas_price").getGasPrice();
                        return new this.BN(r).mul(new this.BN(10 ** 9))
                    } catch (r) {
                        s.default.error({
                            instance: this,
                            error: r
                        });
                        const t = new this.BN(new this.BN(this.defaultGasPrice));
                        return e ? t : t.add(new this.BN(this.gasPriceCoefficient))
                    }
                }
                async availableBalance(e) {
                    if (!this.balance) return "0";
                    const r = e ? new this.BN(e) : await this.getFee(),
                        t = new this.BN(this.balance).sub(r).sub(new this.BN(this.unspendableBalance));
                    return new this.BN(t).lt(new this.BN(0)) ? "0" : this.toCurrencyUnit(t)
                }
                async updateBalance() {
                    try {
                        const {
                            balance: e
                        } = await this.getProvider("balance").getInfo(this.address);
                        if (!e) throw new Error(this.ticker + " can't get balance");
                        this.balance = e
                    } catch (e) {
                        console.error(e)
                    }
                }
                async getInfo() {
                    if (!this.address) throw new Error(this.ticker + " address not found");
                    return await this.updateBalance(), await this.getNonce(), {
                        balance: this.balance
                    }
                }
                gasPrice() {
                    return this.getGasPrice()
                }
                setPrivateKey(...e) {
                    super.setPrivateKey(...e), this.getNonce()
                }
                getGasRange(e = "send") {
                    return this.feeData[e]
                }
                async checkTransaction(e) {
                    await super.checkTransaction({
                        feeTicker: this.ticker,
                        ...e
                    })
                }
                async getBalance() {
                    return (await this.getInfo()).balance
                }
                getGasPriceUnits() {
                    return "nAVAX"
                }
                async getNftFee({
                    contractAddress: e,
                    tokenId: r,
                    tokenStandard: t,
                    toAddress: i,
                    userOptions: n = {}
                }) {
                    try {
                        const a = await this.getProvider("nft-send").getNftContractData(this, i, e, r, t),
                            {
                                gasLimit: f,
                                gasPrice: s
                            } = await this.getNftTransferGasParams(i, a, n);
                        return new o.default(s).mul(new o.default(f))
                    } catch (e) {
                        throw new d.ExternalError({
                            type: l.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getNftTransferGasParams(e, r, {
                    userGasPrice: t,
                    userGasLimit: i
                }) {
                    const {
                        address: n,
                        nftGasPriceCoefficient: a,
                        nftGasLimitCoefficient: f,
                        gasPriceCoefficient: s,
                        gasLimitCoefficient: u,
                        defaultGasPrice: c,
                        gasLimit: d = p
                    } = this, l = a || s, h = f || u, y = [new o.default(c).mul(new o.default(l)).toString(), Math.ceil(Number(d) * h).toString()], v = (await this.getNonce()).toNumber(), [g, m] = await Promise.allSettled([t || this.getNftGasPrice(l), i || this.estimateGasForSendNft(n, e, v, r, h)]).then(e => e.map((e, r) => "fulfilled" === e.status ? e.value : y[r]));
                    return {
                        gasLimit: m,
                        gasPrice: g,
                        nonce: v
                    }
                }
                async estimateGasForSendNft(e, r, t, i, n = 1) {
                    try {
                        const o = await this.getProvider("nft-send").estimateGas(e, r, t, i);
                        return Math.ceil(o * n).toString()
                    } catch (e) {
                        throw console.warn(e), new d.ExternalError({
                            type: l.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getNftGasPrice(e = 1) {
                    try {
                        const r = await this.getProvider("nft-send").getGasPrice();
                        return new o.default(r).mul(new o.default(e)).toString()
                    } catch (e) {
                        throw console.warn(e), new d.ExternalError({
                            type: l.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async createNftTransaction({
                    toAddress: e,
                    contractAddress: r,
                    data: t,
                    userOptions: i = {}
                }) {
                    try {
                        const {
                            gasLimit: n,
                            gasPrice: o,
                            nonce: a
                        } = await this.getNftTransferGasParams(e, t, i), f = {
                            to: r,
                            value: "0x0",
                            gas: n,
                            data: t,
                            nonce: a,
                            gasPrice: o
                        }, {
                            rawTransaction: s
                        } = await this.coreLibrary.eth.accounts.signTransaction(f, this.privateKey);
                        return s
                    } catch (e) {
                        throw console.warn(e), new d.ExternalError({
                            type: l.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
            }
            var y = AVAXCoin;
            r.default = y
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

            function a(e) {
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
                    var r = a(e);
                    return new Buffer(o(r.slice(2)), "hex")
                },
                getBinarySize: function(e) {
                    if ("string" != typeof e) throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'.");
                    return Buffer.byteLength(e, "utf8")
                },
                isHexPrefixed: i,
                stripHexPrefix: n,
                padToEven: o,
                intToHex: a,
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
                        var a = null != i ? Buffer.from(i) : null,
                            f = null != n ? Buffer.from(n) : null,
                            s = Buffer.from("");
                        return t.noncefn && (s = t.noncefn(Buffer.from(e), Buffer.from(r), a, f, o)), new Uint8Array(s)
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
                a = i.keccak256,
                f = i.keccak512,
                s = t(101),
                u = t(5474),
                c = t(546),
                d = t(5475);
            r.keccak = function(e, r) {
                switch (void 0 === r && (r = 256), e = "string" != typeof e || u.isHexString(e) ? d.toBuffer(e) : Buffer.from(e, "utf8"), r || (r = 256), r) {
                    case 224:
                        return n(e);
                    case 256:
                        return a(e);
                    case 384:
                        return o(e);
                    case 512:
                        return f(e);
                    default:
                        throw new Error("Invald algorithm: keccak" + r)
                }
            }, r.keccak256 = function(e) {
                return r.keccak(e)
            }, r.sha256 = function(e) {
                return e = d.toBuffer(e), s("sha256").update(e).digest()
            }, r.ripemd160 = function(e, r) {
                e = d.toBuffer(e);
                var t = s("rmd160").update(e).digest();
                return !0 === r ? d.setLength(t, 32) : t
            }, r.rlphash = function(e) {
                return r.keccak(c.encode(e))
            }
        },
        5552: function(e, r, t) {
            "use strict";
            var i = t(5553).HDKey,
                n = t(5560);

            function o() {}

            function a(e) {
                var r = new o;
                return r._hdkey = e, r
            }
            o.fromMasterSeed = function(e) {
                return a(i.fromMasterSeed(e))
            }, o.fromExtendedKey = function(e) {
                return a(i.fromExtendedKey(e))
            }, o.prototype.privateExtendedKey = function() {
                if (!this._hdkey.privateExtendedKey) throw new Error("This is a public key only wallet");
                return this._hdkey.privateExtendedKey
            }, o.prototype.publicExtendedKey = function() {
                return this._hdkey.publicExtendedKey
            }, o.prototype.derivePath = function(e) {
                return a(this._hdkey.derive(e))
            }, o.prototype.deriveChild = function(e) {
                return a(this._hdkey.deriveChild(e))
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
                a = i(t(172)),
                f = t(5555),
                s = t(5558),
                u = o.Buffer,
                c = u.from("Bitcoin seed", "utf8"),
                d = {
                    private: 76066276,
                    public: 76067358
                };

            function l(e) {
                this.versions = e || d, this.depth = 0, this.index = 0, this._privateKey = null, this._publicKey = null, this.chainCode = null, this._fingerprint = 0, this.parentFingerprint = 0
            }

            function h(e, r, t) {
                var i = u.allocUnsafe(78);
                i.writeUInt32BE(r, 0), i.writeUInt8(e.depth, 4);
                var n = e.depth ? e.parentFingerprint : 0;
                return i.writeUInt32BE(n, 5), i.writeUInt32BE(e.index, 9), e.chainCode.copy(i, 13), t.copy(i, 45), i
            }

            function p(e) {
                var r = f.createHash("sha256").update(e).digest();
                return f.createHash("ripemd160").update(r).digest()
            }
            Object.defineProperty(l.prototype, "fingerprint", {
                get: function() {
                    return this._fingerprint
                }
            }), Object.defineProperty(l.prototype, "identifier", {
                get: function() {
                    return this._identifier
                }
            }), Object.defineProperty(l.prototype, "pubKeyHash", {
                get: function() {
                    return this.identifier
                }
            }), Object.defineProperty(l.prototype, "privateKey", {
                get: function() {
                    return this._privateKey
                },
                set: function(e) {
                    n.equal(e.length, 32, "Private key must be 32 bytes."), n(!0 === s.privateKeyVerify(e), "Invalid private key"), this._privateKey = e, this._publicKey = s.publicKeyCreate(e, !0), this._identifier = p(this.publicKey), this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0)
                }
            }), Object.defineProperty(l.prototype, "publicKey", {
                get: function() {
                    return this._publicKey
                },
                set: function(e) {
                    n(33 === e.length || 65 === e.length, "Public key must be 33 or 65 bytes."), n(!0 === s.publicKeyVerify(e), "Invalid public key"), this._publicKey = s.publicKeyConvert(e, !0), this._identifier = p(this.publicKey), this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0), this._privateKey = null
                }
            }), Object.defineProperty(l.prototype, "privateExtendedKey", {
                get: function() {
                    return this._privateKey ? a.encode(h(this, this.versions.private, u.concat([u.alloc(1, 0), this.privateKey]))) : null
                }
            }), Object.defineProperty(l.prototype, "publicExtendedKey", {
                get: function() {
                    return a.encode(h(this, this.versions.public, this.publicKey))
                }
            }), l.prototype.derive = function(e) {
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
            }, l.prototype.deriveChild = function(e) {
                var r, t = e >= 2147483648,
                    i = u.allocUnsafe(4);
                if (i.writeUInt32BE(e, 0), t) {
                    n(this.privateKey, "Could not derive hardened child key");
                    var o = this.privateKey,
                        a = u.alloc(1, 0);
                    o = u.concat([a, o]), r = u.concat([o, i])
                } else r = u.concat([this.publicKey, i]);
                var c = f.createHmac("sha512", this.chainCode).update(r).digest(),
                    d = c.slice(0, 32),
                    h = c.slice(32),
                    p = new l(this.versions);
                if (this.privateKey) try {
                    p.privateKey = s.privateKeyTweakAdd(this.privateKey, d)
                } catch (r) {
                    return this.deriveChild(e + 1)
                } else try {
                    p.publicKey = s.publicKeyTweakAdd(this.publicKey, d, !0)
                } catch (r) {
                    return this.deriveChild(e + 1)
                }
                return p.chainCode = h, p.depth = this.depth + 1, p.parentFingerprint = this.fingerprint, p.index = e, p
            }, l.prototype.sign = function(e) {
                return s.sign(e, this.privateKey).signature
            }, l.prototype.verify = function(e, r) {
                return s.verify(e, r, this.publicKey)
            }, l.prototype.wipePrivateData = function() {
                return this._privateKey && f.randomBytes(this._privateKey.length).copy(this._privateKey), this._privateKey = null, this
            }, l.prototype.toJSON = function() {
                return {
                    xpriv: this.privateExtendedKey,
                    xpub: this.publicExtendedKey
                }
            }, l.fromMasterSeed = function(e, r) {
                var t = f.createHmac("sha512", c).update(e).digest(),
                    i = t.slice(0, 32),
                    n = t.slice(32),
                    o = new l(r);
                return o.chainCode = n, o.privateKey = i, o
            }, l.fromExtendedKey = function(e, r) {
                var t = new l(r = r || d),
                    i = a.decode(e),
                    o = i.readUInt32BE(0);
                n(o === r.private || o === r.public, "Version mismatch: does not match private or public"), t.depth = i.readUInt8(4), t.parentFingerprint = i.readUInt32BE(5), t.index = i.readUInt32BE(9), t.chainCode = i.slice(13, 45);
                var f = i.slice(45);
                return 0 === f.readUInt8(0) ? (n(o === r.private, "Version mismatch: version does not match private"), t.privateKey = f.slice(1)) : (n(o === r.public, "Version mismatch: version does not match public"), t.publicKey = f), t
            }, l.fromJSON = function(e) {
                return l.fromExtendedKey(e.xpriv)
            }, l.HARDENED_OFFSET = 2147483648;
            var y = l;
            e.exports = y
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
                a = t(24),
                f = t(125),
                s = t(5568),
                u = t(550),
                c = t(172);

            function d(e, r) {
                if (!e) throw new Error(r || "Assertion failed")
            }

            function l(e, r) {
                return n.concat([e.update(r), e.final()])
            }
            var h = function(e, r) {
                if (e && r) throw new Error("Cannot supply both a private and a public key to the constructor");
                if (e && !o.isValidPrivate(e)) throw new Error("Private key does not satisfy the curve requirements (ie. it is invalid)");
                if (r && !o.isValidPublic(r)) throw new Error("Invalid public key");
                this._privKey = e, this._pubKey = r
            };
            Object.defineProperty(h.prototype, "privKey", {
                get: function() {
                    return d(this._privKey, "This is a public key only wallet"), this._privKey
                }
            }), Object.defineProperty(h.prototype, "pubKey", {
                get: function() {
                    return this._pubKey || (this._pubKey = o.privateToPublic(this.privKey)), this._pubKey
                }
            }), h.generate = function(e) {
                if (!e) return new h(f(32));
                for (var r = new o.BN("088f924eeceeda7fe92e1f5b0fffffffffffffff", 16);;) {
                    var t = f(32);
                    if (new o.BN(o.privateToAddress(t)).lte(r)) return new h(t)
                }
            }, h.generateVanityAddress = function(e) {
                for ("object" !== (void 0 === e ? "undefined" : i(e)) && (e = new RegExp(e));;) {
                    var r = f(32),
                        t = o.privateToAddress(r);
                    if (e.test(t.toString("hex"))) return new h(r)
                }
            }, h.prototype.getPrivateKey = function() {
                return this.privKey
            }, h.prototype.getPrivateKeyString = function() {
                return o.bufferToHex(this.getPrivateKey())
            }, h.prototype.getPublicKey = function() {
                return this.pubKey
            }, h.prototype.getPublicKeyString = function() {
                return o.bufferToHex(this.getPublicKey())
            }, h.prototype.getAddress = function() {
                return o.publicToAddress(this.pubKey)
            }, h.prototype.getAddressString = function() {
                return o.bufferToHex(this.getAddress())
            }, h.prototype.getChecksumAddressString = function() {
                return o.toChecksumAddress(this.getAddressString())
            }, h.prototype.toV3 = function(e, r) {
                d(this._privKey, "This is a public key only wallet");
                var t, i = (r = r || {}).salt || f(32),
                    c = r.iv || f(16),
                    h = r.kdf || "scrypt",
                    p = {
                        dklen: r.dklen || 32,
                        salt: i.toString("hex")
                    };
                if ("pbkdf2" === h) p.c = r.c || 262144, p.prf = "hmac-sha256", t = a.pbkdf2Sync(n.from(e), i, p.c, p.dklen, "sha256");
                else {
                    if ("scrypt" !== h) throw new Error("Unsupported kdf");
                    p.n = r.n || 262144, p.r = r.r || 8, p.p = r.p || 1, t = s(n.from(e), i, p.n, p.r, p.p, p.dklen)
                }
                var y = a.createCipheriv(r.cipher || "aes-128-ctr", t.slice(0, 16), c);
                if (!y) throw new Error("Unsupported cipher");
                var v = l(y, this.privKey),
                    g = o.keccak256(n.concat([t.slice(16, 32), n.from(v, "hex")]));
                return {
                    version: 3,
                    id: u({
                        random: r.uuid || f(16)
                    }),
                    address: this.getAddress().toString("hex"),
                    crypto: {
                        ciphertext: v.toString("hex"),
                        cipherparams: {
                            iv: c.toString("hex")
                        },
                        cipher: r.cipher || "aes-128-ctr",
                        kdf: h,
                        kdfparams: p,
                        mac: g.toString("hex")
                    }
                }
            }, h.prototype.getV3Filename = function(e) {
                return ["UTC--", (e ? new Date(e) : new Date).toJSON().replace(/:/g, "-"), "--", this.getAddress().toString("hex")].join("")
            }, h.prototype.toV3String = function(e, r) {
                return JSON.stringify(this.toV3(e, r))
            }, h.fromPublicKey = function(e, r) {
                return r && (e = o.importPublic(e)), new h(null, e)
            }, h.fromExtendedPublicKey = function(e) {
                return d("xpub" === e.slice(0, 4), "Not an extended public key"), e = c.decode(e).slice(45), h.fromPublicKey(e, !0)
            }, h.fromPrivateKey = function(e) {
                return new h(e)
            }, h.fromExtendedPrivateKey = function(e) {
                d("xprv" === e.slice(0, 4), "Not an extended private key");
                var r = c.decode(e);
                return d(0 === r[45], "Invalid extended private key"), h.fromPrivateKey(r.slice(46))
            }, h.fromV1 = function(e, r) {
                d("string" == typeof r);
                var t = "object" === (void 0 === e ? "undefined" : i(e)) ? e : JSON.parse(e);
                if ("1" !== t.Version) throw new Error("Not a V1 wallet");
                if ("scrypt" !== t.Crypto.KeyHeader.Kdf) throw new Error("Unsupported key derivation scheme");
                var f = t.Crypto.KeyHeader.KdfParams,
                    u = s(n.from(r), n.from(t.Crypto.Salt, "hex"), f.N, f.R, f.P, f.DkLen),
                    c = n.from(t.Crypto.CipherText, "hex");
                if (o.keccak256(n.concat([u.slice(16, 32), c])).toString("hex") !== t.Crypto.MAC) throw new Error("Key derivation failed - possibly wrong passphrase");
                var p = l(a.createDecipheriv("aes-128-cbc", o.keccak256(u.slice(0, 16)).slice(0, 16), n.from(t.Crypto.IV, "hex")), c);
                return new h(p)
            }, h.fromV3 = function(e, r, t) {
                d("string" == typeof r);
                var f, u, c = "object" === (void 0 === e ? "undefined" : i(e)) ? e : JSON.parse(t ? e.toLowerCase() : e);
                if (3 !== c.version) throw new Error("Not a V3 wallet");
                if ("scrypt" === c.crypto.kdf) u = c.crypto.kdfparams, f = s(n.from(r), n.from(u.salt, "hex"), u.n, u.r, u.p, u.dklen);
                else {
                    if ("pbkdf2" !== c.crypto.kdf) throw new Error("Unsupported key derivation scheme");
                    if ("hmac-sha256" !== (u = c.crypto.kdfparams).prf) throw new Error("Unsupported parameters to PBKDF2");
                    f = a.pbkdf2Sync(n.from(r), n.from(u.salt, "hex"), u.c, u.dklen, "sha256")
                }
                var p = n.from(c.crypto.ciphertext, "hex");
                if (o.keccak256(n.concat([f.slice(16, 32), p])).toString("hex") !== c.crypto.mac) throw new Error("Key derivation failed - possibly wrong passphrase");
                var y = l(a.createDecipheriv(c.crypto.cipher, f.slice(0, 16), n.from(c.crypto.cipherparams.iv, "hex")), p);
                return new h(y)
            }, h.fromEthSale = function(e, r) {
                d("string" == typeof r);
                var t = "object" === (void 0 === e ? "undefined" : i(e)) ? e : JSON.parse(e),
                    f = n.from(t.encseed, "hex"),
                    s = a.pbkdf2Sync(r, r, 2e3, 32, "sha256").slice(0, 16),
                    u = l(a.createDecipheriv("aes-128-cbc", s, f.slice(0, 16)), f.slice(16)),
                    c = new h(o.keccak256(u));
                if (c.getAddress().toString("hex") !== t.ethaddr) throw new Error("Decoded key mismatch - possibly wrong passphrase");
                return c
            }, e.exports = h
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
            var a = t(5474),
                f = t(35);
            r.BN = f;
            var s = t(546);
            r.rlp = s, Object.assign(r, a), n(t(5564), r), n(t(5565), r), n(t(5481), r), n(t(5566), r), n(t(5475), r), n(t(5567), r)
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
                var f = n.g.mul(t);
                return a(f.getX(), f.getY(), r)
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
                var f = n.keyFromPublic(e),
                    s = new i(r);
                if (s.ucmp(o.n) >= 0 || s.isZero()) throw new Error("scalar was invalid (zero or overflow)");
                var u = f.pub.mul(s);
                return a(u.getX(), u.getY(), t)
            };
            var a = function(e, r, t) {
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
                var a = e[n++];
                if (128 & a) {
                    if (n + (o = a - 128) > i) return null;
                    for (; o > 0 && 0 === e[n]; n += 1, o -= 1);
                    for (a = 0; o > 0; n += 1, o -= 1) a = (a << 8) + e[n]
                }
                if (a > i - n) return null;
                var f = n;
                if (n += a, 2 !== e[n++]) return null;
                var s = e[n++];
                if (128 & s) {
                    if (n + (o = s - 128) > i) return null;
                    for (; o > 0 && 0 === e[n]; n += 1, o -= 1);
                    for (s = 0; o > 0; n += 1, o -= 1) s = (s << 8) + e[n]
                }
                if (s > i - n) return null;
                var u = n;
                for (n += s; a > 0 && 0 === e[f]; a -= 1, f += 1);
                if (a > 32) return null;
                var c = e.slice(f, f + a);
                for (c.copy(r, 32 - c.length); s > 0 && 0 === e[u]; s -= 1, u += 1);
                if (s > 32) return null;
                var d = e.slice(u, u + s);
                return d.copy(t, 32 - d.length), {
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
                a = t(35),
                f = t(5475),
                s = t(5481);
            r.zeroAddress = function() {
                var e = f.zeros(20);
                return f.bufferToHex(e)
            }, r.isValidAddress = function(e) {
                return /^0x[0-9a-fA-F]{40}$/.test(e)
            }, r.isZeroAddress = function(e) {
                return r.zeroAddress() === f.addHexPrefix(e)
            }, r.toChecksumAddress = function(e, r) {
                e = n.stripHexPrefix(e).toLowerCase();
                for (var t = void 0 !== r ? r.toString() + "0x" : "", i = s.keccak(t + e).toString("hex"), o = "0x", a = 0; a < e.length; a++) parseInt(i[a], 16) >= 8 ? o += e[a].toUpperCase() : o += e[a];
                return o
            }, r.isValidChecksumAddress = function(e, t) {
                return r.isValidAddress(e) && r.toChecksumAddress(e, t) === e
            }, r.generateAddress = function(e, r) {
                e = f.toBuffer(e);
                var t = new a(r);
                return t.isZero() ? s.rlphash([e, null]).slice(-20) : s.rlphash([e, Buffer.from(t.toArray())]).slice(-20)
            }, r.generateAddress2 = function(e, r, t) {
                var n = f.toBuffer(e),
                    o = f.toBuffer(r),
                    a = f.toBuffer(t);
                return i(20 === n.length), i(32 === o.length), s.keccak256(Buffer.concat([Buffer.from("ff", "hex"), n, o, s.keccak256(a)])).slice(-20)
            }, r.isPrecompiled = function(e) {
                var r = f.unpad(e);
                return 1 === r.length && r[0] >= 1 && r[0] <= 8
            }, r.isValidPrivate = function(e) {
                return o.privateKeyVerify(e)
            }, r.isValidPublic = function(e, r) {
                return void 0 === r && (r = !1), 64 === e.length ? o.publicKeyVerify(Buffer.concat([Buffer.from([4]), e])) : !!r && o.publicKeyVerify(e)
            }, r.pubToAddress = function(e, r) {
                return void 0 === r && (r = !1), e = f.toBuffer(e), r && 64 !== e.length && (e = o.publicKeyConvert(e, !1).slice(1)), i(64 === e.length), s.keccak(e).slice(-20)
            }, r.publicToAddress = r.pubToAddress, r.privateToAddress = function(e) {
                return r.publicToAddress(r.privateToPublic(e))
            }, r.privateToPublic = function(e) {
                return e = f.toBuffer(e), o.publicKeyCreate(e, !1).slice(1)
            }, r.importPublic = function(e) {
                return 64 !== (e = f.toBuffer(e)).length && (e = o.publicKeyConvert(e, !1).slice(1)), e
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
                a = t(5481);

            function f(e, r) {
                return r ? e - (2 * r + 35) : e - 27
            }

            function s(e) {
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
            }, r.ecrecover = function(e, r, t, n, a) {
                var u = Buffer.concat([o.setLength(t, 32), o.setLength(n, 32)], 64),
                    c = f(r, a);
                if (!s(c)) throw new Error("Invalid signature v value");
                var d = i.recover(e, u, c);
                return i.publicKeyConvert(d, !1).slice(1)
            }, r.toRpcSig = function(e, r, t, i) {
                if (!s(f(e, i))) throw new Error("Invalid signature v value");
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
                var a = new n("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                    u = new n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
                if (32 !== r.length || 32 !== t.length) return !1;
                if (!s(f(e, o))) return !1;
                var c = new n(r),
                    d = new n(t);
                return !(c.isZero() || c.gt(u) || d.isZero() || d.gt(u)) && (!i || 1 !== d.cmp(a))
            }, r.hashPersonalMessage = function(e) {
                var r = Buffer.from("Ethereum Signed Message:\n" + e.length.toString(), "utf-8");
                return a.keccak(Buffer.concat([r, e]))
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
                a = t(5475);
            r.defineProperties = function(e, r, t) {
                if (e.raw = [], e._fields = [], e.toJSON = function(r) {
                        if (void 0 === r && (r = !1), r) {
                            var t = {};
                            return e._fields.forEach((function(r) {
                                t[r] = "0x" + e[r].toString("hex")
                            })), t
                        }
                        return a.baToJSON(e.raw)
                    }, e.serialize = function() {
                        return o.encode(e.raw)
                    }, r.forEach((function(r, t) {
                        function n() {
                            return e.raw[t]
                        }

                        function o(n) {
                            "00" !== (n = a.toBuffer(n)).toString("hex") || r.allowZero || (n = Buffer.allocUnsafe(0)), r.allowLess && r.length ? (n = a.stripZeros(n), i(r.length >= n.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === n.length || !r.length || i(r.length === n.length, "The field " + r.name + " must have byte length of " + r.length), e.raw[t] = n
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
                            e[e._fields[t]] = a.toBuffer(r)
                        }))
                    } else {
                        if ("object" != typeof t) throw new Error("invalid data");
                        var f = Object.keys(t);
                        r.forEach((function(r) {
                            -1 !== f.indexOf(r.name) && (e[r.name] = t[r.name]), -1 !== f.indexOf(r.alias) && (e[r.alias] = t[r.alias])
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
            e.exports = function(e, r, t, o, a, f, s) {
                if (0 === t || 0 != (t & t - 1)) throw Error("N must be > 0 and a power of 2");
                if (t > 2147483647 / 128 / o) throw Error("Parameter N is too large");
                if (o > 2147483647 / 128 / a) throw Error("Parameter r is too large");
                var u, c = new Buffer(256 * o),
                    d = new Buffer(128 * o * t),
                    l = new Int32Array(16),
                    h = new Int32Array(16),
                    p = new Buffer(64),
                    y = i(e, r, 1, 128 * a * o, "sha256");
                if (s) {
                    var v = a * t * 2,
                        g = 0;
                    u = function() {
                        ++g % 1e3 == 0 && s({
                            current: g,
                            total: v,
                            percent: g / v * 100
                        })
                    }
                }
                for (var m = 0; m < a; m++) w(y, 128 * m * o, o, t, d, c);
                return i(e, y, 1, f, "sha256");

                function w(e, r, t, i, n, o) {
                    var a, f = 128 * t;
                    for (e.copy(o, 0, r, r + f), a = 0; a < i; a++) o.copy(n, a * f, 0, 0 + f), b(o, 0, f, t), u && u();
                    for (a = 0; a < i; a++) {
                        var s = 0 + 64 * (2 * t - 1);
                        B(n, (o.readUInt32LE(s) & i - 1) * f, o, 0, f), b(o, 0, f, t), u && u()
                    }
                    o.copy(e, r, 0, 0 + f)
                }

                function b(e, r, t, i) {
                    var o;
                    for (n(e, r + 64 * (2 * i - 1), p, 0, 64), o = 0; o < 2 * i; o++) B(e, 64 * o, p, 0, 64), A(p), n(p, 0, e, t + 64 * o, 64);
                    for (o = 0; o < i; o++) n(e, t + 2 * o * 64, e, r + 64 * o, 64);
                    for (o = 0; o < i; o++) n(e, t + 64 * (2 * o + 1), e, r + 64 * (o + i), 64)
                }

                function K(e, r) {
                    return e << r | e >>> 32 - r
                }

                function A(e) {
                    var r;
                    for (r = 0; r < 16; r++) l[r] = (255 & e[4 * r + 0]) << 0, l[r] |= (255 & e[4 * r + 1]) << 8, l[r] |= (255 & e[4 * r + 2]) << 16, l[r] |= (255 & e[4 * r + 3]) << 24;
                    for (n(l, 0, h, 0, 16), r = 8; r > 0; r -= 2) h[4] ^= K(h[0] + h[12], 7), h[8] ^= K(h[4] + h[0], 9), h[12] ^= K(h[8] + h[4], 13), h[0] ^= K(h[12] + h[8], 18), h[9] ^= K(h[5] + h[1], 7), h[13] ^= K(h[9] + h[5], 9), h[1] ^= K(h[13] + h[9], 13), h[5] ^= K(h[1] + h[13], 18), h[14] ^= K(h[10] + h[6], 7), h[2] ^= K(h[14] + h[10], 9), h[6] ^= K(h[2] + h[14], 13), h[10] ^= K(h[6] + h[2], 18), h[3] ^= K(h[15] + h[11], 7), h[7] ^= K(h[3] + h[15], 9), h[11] ^= K(h[7] + h[3], 13), h[15] ^= K(h[11] + h[7], 18), h[1] ^= K(h[0] + h[3], 7), h[2] ^= K(h[1] + h[0], 9), h[3] ^= K(h[2] + h[1], 13), h[0] ^= K(h[3] + h[2], 18), h[6] ^= K(h[5] + h[4], 7), h[7] ^= K(h[6] + h[5], 9), h[4] ^= K(h[7] + h[6], 13), h[5] ^= K(h[4] + h[7], 18), h[11] ^= K(h[10] + h[9], 7), h[8] ^= K(h[11] + h[10], 9), h[9] ^= K(h[8] + h[11], 13), h[10] ^= K(h[9] + h[8], 18), h[12] ^= K(h[15] + h[14], 7), h[13] ^= K(h[12] + h[15], 9), h[14] ^= K(h[13] + h[12], 13), h[15] ^= K(h[14] + h[13], 18);
                    for (r = 0; r < 16; ++r) l[r] = h[r] + l[r];
                    for (r = 0; r < 16; r++) {
                        var t = 4 * r;
                        e[t + 0] = l[r] >> 0 & 255, e[t + 1] = l[r] >> 8 & 255, e[t + 2] = l[r] >> 16 & 255, e[t + 3] = l[r] >> 24 & 255
                    }
                }

                function B(e, r, t, i, n) {
                    for (var o = 0; o < n; o++) t[i + o] ^= e[r + o]
                }
            }
        },
        5664: function(e, r, t) {
            "use strict";
            var i = t(2);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), Object.defineProperty(r, "NftMixin", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            });
            var n = i(t(2349))
        }
    }
]);