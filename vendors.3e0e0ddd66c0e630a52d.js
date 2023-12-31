(window.webpackJsonp = window.webpackJsonp || []).push([
    [265], {
        5455: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(5552)),
                r = a(n(2346)),
                s = a(n(461)),
                o = n(5482),
                u = a(n(55)),
                c = a(n(67)),
                l = n(321),
                p = n(29),
                d = n(26),
                f = n(95),
                y = a(n(74)),
                m = a(n(230)),
                h = n(930);

            function b(e, t) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.add(e)
            }

            function v(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return n
            }
            const g = 1e9,
                w = 15e5,
                T = l.ConfigKey.ArbitrumTokens,
                k = l.ConfigKey.ArbitrumTokensBanned;
            var P = new WeakSet,
                A = new WeakSet;
            class ARBCoin extends((0, h.Web3Mixin)((0, h.HasProviders)((0, h.HasTokensMixin)(s.default)))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: n,
                    explorers: a,
                    txWebUrl: i,
                    socket: r
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "Ethereum ARB",
                        l2Name: "ARB",
                        id: "ARB",
                        ticker: "ETHARB",
                        network: "arbitrum",
                        decimal: 18,
                        derivation: "m/44'/9001'/0'/0/0",
                        unspendableBalance: n.unspendableBalance || 1e13,
                        txWebUrl: i,
                        explorers: a,
                        socket: r,
                        feeData: n,
                        chainId: 42161
                    }), b(this, A), b(this, P), this.gasLimit = Number(n.gasLimit) || 5e5, this.maxGasLimit = Number(n.maxGasLimit) || w, this.stakingGasLimit = Number(n.stakingGasLimit) || w, this.nftGasLimitCoefficient = Number(n.nftGasLimitCoefficient) || 1, this.nftGasPriceCoefficient = Number(n.nftGasPriceCoefficient), this.gasLimitCoefficient = Number(n.gasLimitCoefficient) || 1, this.gasPriceCoefficient = Number(n.gasPriceCoefficient) || 0, this.defaultGasPrice = Number(n.defaultGasPrice) || 1, this.defaultMaxGasPrice = Number(n.defaultMaxGasPrice) || 100, this.gasPriceConfig = null, this.bannedTokens = [], this.resendTimeout = n.resendTimeout;
                    const s = a.find(({
                        className: e
                    }) => "Web3Explorer" === e);
                    this.baseUrl = s.baseUrl, this.initProvider(this.baseUrl), this.fields.paymentId = !1, this.tokens = {}, this.nonce = new this.BN("0"), this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (e, t, n) => {
                        this.bus.$emit("socket::tx::confirmed", {
                            id: e,
                            ticker: n
                        })
                    })
                }
                get instance() {
                    if (void 0 === this.coreLibrary) {
                        const e = this.config.explorers.find(({
                            className: e
                        }) => "Web3Explorer" === e);
                        this.initProvider(e.baseUrl)
                    }
                    return {
                        ...super.instance,
                        coreLibrary: this.coreLibrary,
                        chainId: this.chainId
                    }
                }
                isFeeDynamic() {
                    return !0
                }
                async getTransactions() {
                    if (!this.address) throw new Error("ETHARB: getTransactions: address is not loaded");
                    const [e, {
                        tokenTransactions: t
                    }] = await Promise.all([this.getProvider("history").getTransactions({
                        address: this.address
                    }), this.getProvider("token-history").getTokensTransactions({
                        address: this.address
                    })].map(e => e.catch(e => (console.error(e), [])))), n = t.reduce((e, t) => {
                        const n = t.contract.toLowerCase(),
                            a = !!this.tokens[n];
                        return e.push(new y.default({
                            ...t,
                            amount: a ? t.amount : null
                        })), e
                    }, []);
                    return e.concat(n)
                }
                manageSocket() {
                    this.eventEmmiter.on("receive", async ({
                        address: e,
                        hash: t,
                        ticker: n
                    }) => {
                        this.ticker === n && this.getProvider("socket").getSocketTransaction({
                            address: e,
                            hash: t,
                            tokens: this.tokens,
                            type: "receive"
                        })
                    }), this.eventEmmiter.on("confirm", async ({
                        address: e,
                        hash: t,
                        ticker: n
                    }) => {
                        this.ticker === n && this.getProvider("socket").getSocketTransaction({
                            address: e,
                            hash: t,
                            tokens: this.tokens,
                            type: "confirm"
                        })
                    })
                }
                initProvider(e) {
                    try {
                        this.coreLibrary = new r.default(e)
                    } catch (t) {
                        u.default.error({
                            instance: this,
                            error: t
                        }), setTimeout(() => this.initProvider(e), 1e4)
                    }
                }
                getExcludedTokenList() {
                    return ["TRX", "EOS", "ICX", "VEN", "AION", "BTT", "KIN", "BNB"].concat(Array.isArray(this.bannedTokens) ? this.bannedTokens : []).map(e => e.toLowerCase())
                }
                loadWallet(e) {
                    return new Promise(async (t, n) => {
                        const a = i.default.fromMasterSeed(e).getWallet(),
                            r = await this.coreLibrary.eth.accounts.privateKeyToAccount(a.getPrivateKeyString());
                        r ? (this.privateKey = r.privateKey, this.address = r.address, this.getNonce(), t(this)) : n(new Error("ETHARB cant get a wallet!"))
                    })
                }
                async validateAddress(e) {
                    return this.coreLibrary.utils.isAddress(e)
                }
                async createTransaction({
                    address: e,
                    isSendAll: t = !1,
                    userFee: n = null,
                    amount: a,
                    nonce: i,
                    userGasPrice: r,
                    multiplier: s,
                    gasLimit: o,
                    paymentData: u = null
                }) {
                    await this.getNonce();
                    const c = {
                        to: e,
                        value: a,
                        gas: o || await this.estimateGas(a, e) || this.gasLimit,
                        chainId: 42161,
                        gasPrice: r || await this.getGasPrice(),
                        nonce: i || this.nonce
                    };
                    "" !== u && null !== u && (c.data = u);
                    return (await this.coreLibrary.eth.accounts.signTransaction(c, this.privateKey)).rawTransaction
                }
                async createTokenTransaction({
                    address: e,
                    amount: t,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i,
                    contract: r,
                    multiplier: s
                }) {
                    const o = v(this, P, B).call(this, r, e, t);
                    return this.createTransaction({
                        address: r,
                        amount: "0x0",
                        paymentData: o,
                        userGasPrice: a,
                        gasLimit: i || await this.estimateGas(t, e, r),
                        multiplier: s
                    })
                }
                async sendTransaction(e) {
                    const t = await this.getProvider("send").sendTransaction(e);
                    return t && (this.nonce = this.nonce.add(new this.BN(1))), t
                }
                async checkTransaction(e) {
                    const {
                        coin: t,
                        address: n,
                        amount: a,
                        memo: i,
                        txid: r,
                        nonce: s,
                        fee: o
                    } = e;
                    try {
                        const e = new y.default({
                            ticker: t.ticker,
                            walletid: t.id,
                            name: t.name,
                            alias: t.alias,
                            txid: r,
                            direction: this.address === n,
                            otherSideAddress: n,
                            amount: (0, f.toCurrency)(a, t.decimal),
                            datetime: new Date,
                            memo: i,
                            nonce: s,
                            confirmations: 1,
                            fee: o,
                            feeTicker: this.ticker
                        });
                        await m.default.filterAndUpdateTransactions([e]), this.bus.$emit("socket::newtx::outgoing", {
                            id: this.id,
                            ticker: t.ticker
                        }), setTimeout(async () => {
                            await this.getBalance()
                        }, 3e3)
                    } catch (e) {
                        console.warn(this.ticker, "Unable to check transaction")
                    }
                }
                async getMaxFeePerGas(e) {
                    const {
                        standard: t
                    } = await this.getModerateGasPrice();
                    if (!t) throw new p.ExternalError({
                        type: d.EXTERNAL_ERROR,
                        error: "Failed to get getMaxFeePerGas",
                        instance: this
                    });
                    return t.mul(new this.BN(e)).toString()
                }
                async getGasPriceForSendNft(e) {
                    try {
                        var t;
                        const {
                            node: n
                        } = null !== (t = await this.getProvider("node").getGasPrice()) && void 0 !== t ? t : {}, a = Number(n) + e * g, i = this.defaultMaxGasPrice * g;
                        return a > i ? i : a
                    } catch (e) {
                        throw e
                    }
                }
                async estimateGasForSendNft(e, t, n, a = 1) {
                    try {
                        const i = await this.getProvider("nft-send").estimateGas(e, t, null, n);
                        return Math.ceil(i * a)
                    } catch (e) {
                        throw console.warn(e), new p.ExternalError({
                            type: d.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getNftTransferGasParams(e, t, {
                    userGasPrice: n,
                    userGasLimit: a
                }) {
                    const {
                        address: i,
                        nftGasPriceCoefficient: r,
                        nftGasLimitCoefficient: s,
                        gasPriceCoefficient: o,
                        gasLimitCoefficient: u,
                        defaultGasPrice: c,
                        gasLimit: l = w
                    } = this, p = r || o, d = s || u, f = [(c + p) * g, Math.ceil(l * d)], y = (await this.getNonce()).toNumber(), [m, h] = await Promise.allSettled([n || this.getGasPriceForSendNft(p), a || this.estimateGasForSendNft(i, e, t, d)]).then(e => e.map((e, t) => "fulfilled" === e.status ? e.value : f[t]));
                    return {
                        gasLimit: h,
                        gasPrice: m,
                        nonce: y
                    }
                }
                async getNftFee({
                    contractAddress: e,
                    tokenId: t,
                    tokenStandard: n,
                    toAddress: a = null,
                    userOptions: i = {}
                }) {
                    const r = a && a.toLowerCase() !== this.address.toLowerCase() ? a : "0x29625E10Cfe090294DC0eC579E322ce87C822745";
                    try {
                        const a = await this.getProvider("nft-send").getNftContractData(this, r, e, t, n),
                            {
                                gasLimit: s,
                                gasPrice: o
                            } = await this.getNftTransferGasParams(e, a, i);
                        return new this.BN(o).mul(new this.BN(s))
                    } catch (e) {
                        throw new p.ExternalError({
                            type: d.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async createNftTransaction({
                    contractAddress: e,
                    data: t,
                    userOptions: n = {}
                }) {
                    try {
                        const {
                            gasLimit: a,
                            gasPrice: i,
                            nonce: r
                        } = await this.getNftTransferGasParams(e, t, n), s = {
                            to: e,
                            value: "0x0",
                            gas: a,
                            data: t,
                            nonce: r,
                            maxFeePerGas: i
                        }, {
                            rawTransaction: o
                        } = await this.coreLibrary.eth.accounts.signTransaction(s, this.privateKey);
                        return o
                    } catch (e) {
                        throw console.warn(e), new p.ExternalError({
                            type: d.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getNonce() {
                    return this.nonce = new this.BN(await this.coreLibrary.eth.getTransactionCount(this.address, "pending")), this.nonce
                }
                async getFee({
                    amount: e = 1,
                    address: t,
                    contract: n = null,
                    userGasPrice: a = null,
                    gasLimit: i = null
                } = {}) {
                    const r = a || await this.getGasPrice(),
                        s = i || await this.estimateGas(e, t, n);
                    return new this.BN(r).mul(new this.BN(s))
                }
                async getGasPrice(e = !1) {
                    var t;
                    const {
                        node: n
                    } = null !== (t = await this.getProvider("node").getGasPrice().catch(e => {
                        console.warn("rawGasPrice for Ethereum ARB error:", e)
                    })) && void 0 !== t ? t : {}, a = Number(n) || this.defaultGasPrice * g;
                    return e ? a : a + this.gasPriceCoefficient * g
                }
                async estimateGas(e, t, n) {
                    const a = t || "0x29625E10Cfe090294DC0eC579E322ce87C822745",
                        i = {
                            from: this.address,
                            to: a,
                            value: e
                        };
                    n && (i.data = v(this, P, B).call(this, n, a, e));
                    const r = await this.coreLibrary.eth.estimateGas(i).catch(e => (e.message.includes("insufficient funds") || u.default.error({
                        instance: this,
                        error: e
                    }), n ? this.maxGasLimit : this.gasLimit));
                    return Math.round(r * this.gasLimitCoefficient)
                }
                async availableBalance(e) {
                    if (!this.balance) return null;
                    const t = e && new this.BN(e) || await this.getFee(),
                        n = new this.BN(this.balance).sub(t).sub(new this.BN(this.unspendableBalance));
                    return new this.BN(n).lt(new this.BN(0)) ? "0" : this.toCurrencyUnit(n)
                }
                async getInfo(e) {
                    if (e && e.isToken) {
                        const t = await this.getProvider("node").getTokenBalanceByContractAddress({
                            address: this.address,
                            contractAddress: e.contract.toLowerCase()
                        });
                        [e.contract, e.contract.toLowerCase()].forEach(e => {
                            this.tokens[e] && (this.tokens[e].balance = t.toString())
                        })
                    }
                    const t = await this.getProvider("balance").getInfo(this.address).catch(e => console.warn(e));
                    if (t && t.balance && (this.balance = t.balance), null == e || !e.onlyCoin) {
                        const e = Object.values(this.tokens);
                        this.getProvider("balance").getTokensInfo(e, this.address)
                    }
                    return {
                        balance: null == t ? void 0 : t.balance,
                        balances: this.balances
                    }
                }
                getUserValidators() {
                    return this.getPredefinedValidators()
                }
                createToken(e) {
                    return new o.ARBToken({
                        parent: this,
                        ...e
                    })
                }
                async getUserTokenList() {
                    const e = (await this.getProvider("token").getUserTokenList(this.address, !0).catch(e => console.warn(e)) || []).filter(e => {
                        var t;
                        return null === (t = e.supportedStandards) || void 0 === t ? void 0 : t.includes("erc20")
                    });
                    return e.forEach(e => {
                        const t = e.contract,
                            n = this.tokens[t],
                            a = this.tokens[t.toLowerCase()];
                        n && (n.balance = e.balance), a && (a.balance = e.balance)
                    }), e
                }
                async getTokenList() {
                    return this.bannedTokens = await this.getBannedTokenList(), v(this, A, E).call(this, T)
                }
                getBannedTokenList() {
                    return v(this, A, E).call(this, k)
                }
                getTokenFromUserList(e, t) {
                    return {
                        ...e,
                        source: t,
                        visibility: !0
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
            }

            function B(e, t, n) {
                return this.getProvider("send").createSendTokenContract(e, this.address, t, n)
            }
            async function E(e) {
                try {
                    return await c.default.get(e, !0)
                } catch (t) {
                    return u.default.error({
                        instance: this,
                        error: t
                    }), c.default.getFallback(e)
                }
            }
            var C = ARBCoin;
            t.default = C
        },
        5474: function(e, t, n) {
            "use strict";
            var a = n(2345),
                i = n(2344);

            function r(e) {
                var t = e;
                if ("string" != typeof t) throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof t + ", while padToEven.");
                return t.length % 2 && (t = "0" + t), t
            }

            function s(e) {
                return "0x" + e.toString(16)
            }
            e.exports = {
                arrayContainsArray: function(e, t, n) {
                    if (!0 !== Array.isArray(e)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof e + "'");
                    if (!0 !== Array.isArray(t)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof t + "'");
                    return t[Boolean(n) ? "some" : "every"]((function(t) {
                        return e.indexOf(t) >= 0
                    }))
                },
                intToBuffer: function(e) {
                    var t = s(e);
                    return new Buffer(r(t.slice(2)), "hex")
                },
                getBinarySize: function(e) {
                    if ("string" != typeof e) throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'.");
                    return Buffer.byteLength(e, "utf8")
                },
                isHexPrefixed: a,
                stripHexPrefix: i,
                padToEven: r,
                intToHex: s,
                fromAscii: function(e) {
                    for (var t = "", n = 0; n < e.length; n++) {
                        var a = e.charCodeAt(n).toString(16);
                        t += a.length < 2 ? "0" + a : a
                    }
                    return "0x" + t
                },
                fromUtf8: function(e) {
                    return "0x" + r(new Buffer(e, "utf8").toString("hex")).replace(/^0+|0+$/g, "")
                },
                toAscii: function(e) {
                    var t = "",
                        n = 0,
                        a = e.length;
                    for ("0x" === e.substring(0, 2) && (n = 2); n < a; n += 2) {
                        var i = parseInt(e.substr(n, 2), 16);
                        t += String.fromCharCode(i)
                    }
                    return t
                },
                toUtf8: function(e) {
                    return new Buffer(r(i(e).replace(/^0+|0+$/g, "")), "hex").toString("utf8")
                },
                getKeys: function(e, t, n) {
                    if (!Array.isArray(e)) throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof e + "'");
                    if ("string" != typeof t) throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof t + "'.");
                    for (var a = [], i = 0; i < e.length; i++) {
                        var r = e[i][t];
                        if (n && !r) r = "";
                        else if ("string" != typeof r) throw new Error("invalid abi");
                        a.push(r)
                    }
                    return a
                },
                isHexString: function(e, t) {
                    return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
                }
            }
        },
        5475: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.baToJSON = t.addHexPrefix = t.toUnsigned = t.fromSigned = t.bufferToHex = t.bufferToInt = t.toBuffer = t.stripZeros = t.unpad = t.setLengthRight = t.setLength = t.setLengthLeft = t.zeros = void 0;
            var a = n(5474),
                i = n(35);
            t.zeros = function(e) {
                return Buffer.allocUnsafe(e).fill(0)
            }, t.setLengthLeft = function(e, n, a) {
                void 0 === a && (a = !1);
                var i = t.zeros(n);
                return e = t.toBuffer(e), a ? e.length < n ? (e.copy(i), i) : e.slice(0, n) : e.length < n ? (e.copy(i, n - e.length), i) : e.slice(-n)
            }, t.setLength = t.setLengthLeft, t.setLengthRight = function(e, n) {
                return t.setLength(e, n, !0)
            }, t.unpad = function(e) {
                for (var t = (e = a.stripHexPrefix(e))[0]; e.length > 0 && "0" === t.toString();) t = (e = e.slice(1))[0];
                return e
            }, t.stripZeros = t.unpad, t.toBuffer = function(e) {
                if (!Buffer.isBuffer(e))
                    if (Array.isArray(e)) e = Buffer.from(e);
                    else if ("string" == typeof e) {
                    if (!a.isHexString(e)) throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + e);
                    e = Buffer.from(a.padToEven(a.stripHexPrefix(e)), "hex")
                } else if ("number" == typeof e) e = a.intToBuffer(e);
                else if (null == e) e = Buffer.allocUnsafe(0);
                else if (i.isBN(e)) e = e.toArrayLike(Buffer);
                else {
                    if (!e.toArray) throw new Error("invalid type");
                    e = Buffer.from(e.toArray())
                }
                return e
            }, t.bufferToInt = function(e) {
                return new i(t.toBuffer(e)).toNumber()
            }, t.bufferToHex = function(e) {
                return "0x" + (e = t.toBuffer(e)).toString("hex")
            }, t.fromSigned = function(e) {
                return new i(e).fromTwos(256)
            }, t.toUnsigned = function(e) {
                return Buffer.from(e.toTwos(256).toArray())
            }, t.addHexPrefix = function(e) {
                return "string" != typeof e || a.isHexPrefixed(e) ? e : "0x" + e
            }, t.baToJSON = function(e) {
                if (Buffer.isBuffer(e)) return "0x" + e.toString("hex");
                if (e instanceof Array) {
                    for (var n = [], a = 0; a < e.length; a++) n.push(t.baToJSON(e[a]));
                    return n
                }
            }
        },
        5480: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ecdhUnsafe = t.ecdh = t.recover = t.verify = t.sign = t.signatureImportLax = t.signatureImport = t.signatureExport = t.signatureNormalize = t.publicKeyCombine = t.publicKeyTweakMul = t.publicKeyTweakAdd = t.publicKeyVerify = t.publicKeyConvert = t.publicKeyCreate = t.privateKeyTweakMul = t.privateKeyTweakAdd = t.privateKeyModInverse = t.privateKeyNegate = t.privateKeyImport = t.privateKeyExport = t.privateKeyVerify = void 0;
            var a = n(1385),
                i = n(5562),
                r = n(5563);
            t.privateKeyVerify = function(e) {
                return 32 === e.length && a.privateKeyVerify(Uint8Array.from(e))
            }, t.privateKeyExport = function(e, t) {
                if (32 !== e.length) throw new RangeError("private key length is invalid");
                var n = i.privateKeyExport(e, t);
                return r.privateKeyExport(e, n, t)
            }, t.privateKeyImport = function(e) {
                if (null !== (e = r.privateKeyImport(e)) && 32 === e.length && t.privateKeyVerify(e)) return e;
                throw new Error("couldn't import from DER format")
            }, t.privateKeyNegate = function(e) {
                return Buffer.from(a.privateKeyNegate(Uint8Array.from(e)))
            }, t.privateKeyModInverse = function(e) {
                if (32 !== e.length) throw new Error("private key length is invalid");
                return Buffer.from(i.privateKeyModInverse(Uint8Array.from(e)))
            }, t.privateKeyTweakAdd = function(e, t) {
                return Buffer.from(a.privateKeyTweakAdd(Uint8Array.from(e), t))
            }, t.privateKeyTweakMul = function(e, t) {
                return Buffer.from(a.privateKeyTweakMul(Uint8Array.from(e), Uint8Array.from(t)))
            }, t.publicKeyCreate = function(e, t) {
                return Buffer.from(a.publicKeyCreate(Uint8Array.from(e), t))
            }, t.publicKeyConvert = function(e, t) {
                return Buffer.from(a.publicKeyConvert(Uint8Array.from(e), t))
            }, t.publicKeyVerify = function(e) {
                return (33 === e.length || 65 === e.length) && a.publicKeyVerify(Uint8Array.from(e))
            }, t.publicKeyTweakAdd = function(e, t, n) {
                return Buffer.from(a.publicKeyTweakAdd(Uint8Array.from(e), Uint8Array.from(t), n))
            }, t.publicKeyTweakMul = function(e, t, n) {
                return Buffer.from(a.publicKeyTweakMul(Uint8Array.from(e), Uint8Array.from(t), n))
            }, t.publicKeyCombine = function(e, t) {
                var n = [];
                return e.forEach((function(e) {
                    n.push(Uint8Array.from(e))
                })), Buffer.from(a.publicKeyCombine(n, t))
            }, t.signatureNormalize = function(e) {
                return Buffer.from(a.signatureNormalize(Uint8Array.from(e)))
            }, t.signatureExport = function(e) {
                return Buffer.from(a.signatureExport(Uint8Array.from(e)))
            }, t.signatureImport = function(e) {
                return Buffer.from(a.signatureImport(Uint8Array.from(e)))
            }, t.signatureImportLax = function(e) {
                if (0 === e.length) throw new RangeError("signature length is invalid");
                var t = r.signatureImportLax(e);
                if (null === t) throw new Error("couldn't parse DER signature");
                return i.signatureImport(t)
            }, t.sign = function(e, t, n) {
                if (null === n) throw new TypeError("options should be an Object");
                var i = void 0;
                if (n) {
                    if (i = {}, null === n.data) throw new TypeError("options.data should be a Buffer");
                    if (n.data) {
                        if (32 != n.data.length) throw new RangeError("options.data length is invalid");
                        i.data = new Uint8Array(n.data)
                    }
                    if (null === n.noncefn) throw new TypeError("options.noncefn should be a Function");
                    n.noncefn && (i.noncefn = function(e, t, a, i, r) {
                        var s = null != a ? Buffer.from(a) : null,
                            o = null != i ? Buffer.from(i) : null,
                            u = Buffer.from("");
                        return n.noncefn && (u = n.noncefn(Buffer.from(e), Buffer.from(t), s, o, r)), new Uint8Array(u)
                    })
                }
                var r = a.ecdsaSign(Uint8Array.from(e), Uint8Array.from(t), i);
                return {
                    signature: Buffer.from(r.signature),
                    recovery: r.recid
                }
            }, t.verify = function(e, t, n) {
                return a.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), n)
            }, t.recover = function(e, t, n, i) {
                return Buffer.from(a.ecdsaRecover(Uint8Array.from(t), n, Uint8Array.from(e), i))
            }, t.ecdh = function(e, t) {
                return Buffer.from(a.ecdh(Uint8Array.from(e), Uint8Array.from(t), {}))
            }, t.ecdhUnsafe = function(e, t, n) {
                if (33 !== e.length && 65 !== e.length) throw new RangeError("public key length is invalid");
                if (32 !== t.length) throw new RangeError("private key length is invalid");
                return Buffer.from(i.ecdhUnsafe(Uint8Array.from(e), Uint8Array.from(t), n))
            }
        },
        5481: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.rlphash = t.ripemd160 = t.sha256 = t.keccak256 = t.keccak = void 0;
            var a = n(2347),
                i = a.keccak224,
                r = a.keccak384,
                s = a.keccak256,
                o = a.keccak512,
                u = n(101),
                c = n(5474),
                l = n(546),
                p = n(5475);
            t.keccak = function(e, t) {
                switch (void 0 === t && (t = 256), e = "string" != typeof e || c.isHexString(e) ? p.toBuffer(e) : Buffer.from(e, "utf8"), t || (t = 256), t) {
                    case 224:
                        return i(e);
                    case 256:
                        return s(e);
                    case 384:
                        return r(e);
                    case 512:
                        return o(e);
                    default:
                        throw new Error("Invald algorithm: keccak" + t)
                }
            }, t.keccak256 = function(e) {
                return t.keccak(e)
            }, t.sha256 = function(e) {
                return e = p.toBuffer(e), u("sha256").update(e).digest()
            }, t.ripemd160 = function(e, t) {
                e = p.toBuffer(e);
                var n = u("rmd160").update(e).digest();
                return !0 === t ? p.setLength(n, 32) : n
            }, t.rlphash = function(e) {
                return t.keccak(l.encode(e))
            }
        },
        5482: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ARBToken", {
                enumerable: !0,
                get: function() {
                    return b.default
                }
            }), Object.defineProperty(t, "BNBToken", {
                enumerable: !0,
                get: function() {
                    return u.default
                }
            }), Object.defineProperty(t, "BSCToken", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "ETHToken", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "FLRToken", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "FTMToken", {
                enumerable: !0,
                get: function() {
                    return y.default
                }
            }), Object.defineProperty(t, "LUNCToken", {
                enumerable: !0,
                get: function() {
                    return d.default
                }
            }), Object.defineProperty(t, "MATICToken", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            }), Object.defineProperty(t, "OPToken", {
                enumerable: !0,
                get: function() {
                    return h.default
                }
            }), Object.defineProperty(t, "StakableMaticETHToken", {
                enumerable: !0,
                get: function() {
                    return m.default
                }
            }), Object.defineProperty(t, "THETAToken", {
                enumerable: !0,
                get: function() {
                    return f.default
                }
            }), Object.defineProperty(t, "TRXToken", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "VETToken", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "ZILToken", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            });
            var i = a(n(5521)),
                r = a(n(5522)),
                s = a(n(5523)),
                o = a(n(5524)),
                u = a(n(5525)),
                c = a(n(5526)),
                l = a(n(5527)),
                p = a(n(5528)),
                d = a(n(5511)),
                f = a(n(5529)),
                y = a(n(5530)),
                m = a(n(5531)),
                h = a(n(5533)),
                b = a(n(5534))
        },
        5511: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(545));
            class LUNCToken extends i.default {
                constructor(e) {
                    var t;
                    super(e), this.fields.paymentId = !0, this.stabilityFee = (null === (t = this.config) || void 0 === t ? void 0 : t.stabilityFee) || .012
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    userGasPrice: n,
                    gasLimit: a,
                    multiplier: i,
                    feeLimit: r = 1e7,
                    memo: s
                }) {
                    return {
                        address: e,
                        amount: t,
                        contract: this.contract,
                        transfer: !0,
                        ticker: this.ticker,
                        userGasPrice: n,
                        gasLimit: a,
                        multiplier: i,
                        feeLimit: r,
                        denom: this.denom,
                        memo: s
                    }
                }
                async availableBalance() {
                    if (this.divisibleBalance) {
                        const e = await this.getStabilityFee(this.indivisibleBalance),
                            t = this.indivisibleBalance.sub(new this.BN(e));
                        return t.gt(0) ? this.toCurrencyUnit(t.toString()) : "0"
                    }
                    return "0"
                }
                getStabilityFee(e) {
                    return (Number(e) * this.stabilityFee + 1).toFixed(0)
                }
            }
            var r = LUNCToken;
            t.default = r
        },
        5521: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(67)),
                r = a(n(545));
            class ETHToken extends r.default {
                constructor(...e) {
                    super(...e), this.gasLimit = "150000", this.coefficient = 1
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: r = this.multiplier,
                    nonce: s
                }) {
                    return {
                        address: e,
                        amount: t,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: r,
                        nonce: s
                    }
                }
                getFeeSettings() {
                    return i.default.get("eth-gas-price")
                }
            }
            var s = ETHToken;
            t.default = s
        },
        5522: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(67)),
                r = a(n(545)),
                s = n(29),
                o = n(26);
            class FLRToken extends r.default {
                constructor(...e) {
                    super(...e), this.gasLimit = "150000", this.coefficient = 1
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async getFee({
                    amount: e = 0,
                    isSendAll: t,
                    gasPrice: n,
                    gasLimit: a
                }) {
                    const i = Number(n.toString()) * Number(this.coefficient),
                        r = a || this.gasLimit;
                    return new this.BN(r).mul(new this.BN(i))
                }
                getFeeSettings() {
                    return i.default.get("eth-gas-price")
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: r = this.multiplier,
                    nonce: s
                }) {
                    return {
                        address: e,
                        amount: t,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: r,
                        nonce: s
                    }
                }
                async sendTransaction(e) {
                    return new Promise((t, n) => {
                        this.web3.eth.sendSignedTransaction(e).on("transactionHash", e => {
                            t({
                                txid: e
                            })
                        }).catch(e => {
                            const t = this.parent.coreLibrary.currentProvider.host,
                                a = new s.ExplorerRequestError({
                                    type: o.SEND_TRANSACTION_TYPE,
                                    error: e,
                                    url: t,
                                    instance: this
                                });
                            n(a)
                        })
                    })
                }
            }
            var u = FLRToken;
            t.default = u
        },
        5523: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(545)),
                r = n(29),
                s = n(26);
            class BSCToken extends i.default {
                constructor(...e) {
                    super(...e), this.gasLimit = "150000", this.coefficient = 1
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async getFee({
                    amount: e = 0,
                    isSendAll: t,
                    gasPrice: n,
                    gasLimit: a
                }) {
                    const i = Number(n.toString()) * Number(this.coefficient),
                        r = a || this.gasLimit;
                    return new this.BN(r).mul(new this.BN(i))
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: r = this.multiplier,
                    nonce: s
                }) {
                    return {
                        address: e,
                        amount: t,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: r,
                        nonce: s
                    }
                }
                async sendTransaction(e) {
                    return new Promise((t, n) => {
                        this.web3.eth.sendSignedTransaction(e).on("transactionHash", e => {
                            t({
                                txid: e
                            })
                        }).catch(e => {
                            const t = this.coreLibrary.currentProvider.host,
                                a = new r.ExplorerRequestError({
                                    type: s.SEND_TRANSACTION_TYPE,
                                    error: e,
                                    url: t,
                                    instance: this
                                });
                            n(a)
                        })
                    })
                }
            }
            var o = BSCToken;
            t.default = o
        },
        5524: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(545));
            class TRXToken extends i.default {
                async createTransaction({
                    address: e,
                    amount: t,
                    userFee: n
                }) {
                    return {
                        address: e,
                        amount: t,
                        contract: this.contract,
                        transfer: !0,
                        feeLimit: null != n ? n : 2e7
                    }
                }
                getUserTicker() {
                    return -1 !== this.ticker.indexOf("-") && this.ticker.split("-")[1] || this.ticker
                }
            }
            var r = TRXToken;
            t.default = r
        },
        5525: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(545));
            class BNBToken extends i.default {
                constructor(e) {
                    super(e), this.fields.paymentId = !0, this.balances = {}
                }
                async availableBalance() {
                    return this.balances && this.balances.available ? this.balances.available : this.divisibleBalance ? String(this.divisibleBalance) : "0"
                }
                async getInfo() {
                    return await this.getBalance(), {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    memo: n
                }) {
                    return {
                        address: e,
                        amount: t,
                        memo: n,
                        asset: this.ticker
                    }
                }
                async getBalance() {
                    return this.balance
                }
                async getTransactions() {
                    return this.transactions
                }
                getUserTicker() {
                    return this.ticker.split("-")[0]
                }
            }
            var r = BNBToken;
            t.default = r
        },
        5526: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(545));
            class VETToken extends i.default {
                constructor(...e) {
                    super(...e), this.fee = "60"
                }
                get feeTicker() {
                    return "VTHO"
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async getFee() {
                    return new this.BN(this.toMinimalUnit(this.fee))
                }
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    const n = Number(this.toCurrencyUnit(await this.getFee())),
                        a = `0xa9059cbb${this.addLeadingZero(e.substring(2),64)}${this.addLeadingZero(new this.BN(t).toString(16),64)}`;
                    return {
                        contract: this.contract,
                        amount: "0",
                        dataToSend: a,
                        fee: n
                    }
                }
                async isAvailableForFee() {
                    const e = await this.getFee();
                    return this.indivisibleBalance.gte(e)
                }
                async availableBalance() {
                    const e = await this.getFee(),
                        t = new this.BN(this.balance).sub(e);
                    return t.lt(new this.BN(0)) ? "0" : this.toCurrencyUnit(t)
                }
                addLeadingZero(e, t) {
                    return String(e).padStart(t, "0")
                }
            }
            var r = VETToken;
            t.default = r
        },
        5527: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(545));
            class ZILToken extends i.default {
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    return {
                        address: e,
                        amount: t,
                        contract: this.contract
                    }
                }
            }
            var r = ZILToken;
            t.default = r
        },
        5528: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(35)),
                r = a(n(545)),
                s = n(29),
                o = n(26);
            class MATICToken extends r.default {
                constructor(...e) {
                    super(...e), this.gasLimit = "150000", this.coefficient = 1, this.BN = i.default
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async getFee({
                    gasPrice: e,
                    gasLimit: t
                }) {
                    const n = new this.BN(e.toString()).mul(new this.BN(this.coefficient)),
                        a = t || this.gasLimit;
                    return new this.BN(a).mul(new this.BN(n))
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: r = this.multiplier,
                    nonce: s
                }) {
                    return {
                        address: e,
                        amount: t,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: r,
                        nonce: s
                    }
                }
                async sendTransaction(e) {
                    return new Promise((t, n) => {
                        this.web3.eth.sendSignedTransaction(e).on("transactionHash", e => {
                            t({
                                txid: e
                            })
                        }).catch(e => {
                            const t = this.coreLibrary.currentProvider.host;
                            n(new s.ExplorerRequestError({
                                type: o.SEND_TRANSACTION_TYPE,
                                error: e,
                                url: t,
                                instance: this
                            }))
                        })
                    })
                }
            }
            var u = MATICToken;
            t.default = u
        },
        5529: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(207)),
                r = a(n(208)),
                s = a(n(35)),
                o = a(n(545));

            function u(e, t, n) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, n)
            }
            var c = new WeakMap;
            class THETAToken extends o.default {
                constructor(e) {
                    super(e), u(this, c, {
                        writable: !0,
                        value: void 0
                    }), this.id = this.ticker, (0, r.default)(this, c, e.parent)
                }
                get feeTicker() {
                    return this.getFeeTicker()
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    userFee: n
                }) {
                    return {
                        address: e,
                        amount: t,
                        contract: this.contract,
                        ticker: this.ticker,
                        userFee: n || await this.getFee()
                    }
                }
                async availableBalance(e) {
                    return (0, i.default)(this, c).getAvailableBalanceForWallet(this, e)
                }
                async isAvailableForSend(e, t) {
                    const n = await this.availableBalance(this.toMinimalUnit(t));
                    return new s.default(this.toMinimalUnit(e)).lte(new s.default(this.toMinimalUnit(n)))
                }
                async isAvailableForFee(e) {
                    return (0, i.default)(this, c).hasEnoughFeeBalance(e)
                }
            }
            t.default = THETAToken
        },
        5530: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(321),
                r = a(n(67)),
                s = a(n(545)),
                o = n(29),
                u = n(26);
            class FTMToken extends s.default {
                constructor(...e) {
                    super(...e), this.gasLimit = "150000", this.coefficient = 1
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async getFee({
                    amount: e = 0,
                    isSendAll: t,
                    gasPrice: n,
                    gasLimit: a
                }) {
                    const i = Number(n.toString()) * Number(this.coefficient),
                        r = a || this.gasLimit;
                    return new this.BN(r).mul(new this.BN(i))
                }
                getFeeSettings() {
                    return r.default.get(i.ConfigKey.FantomGasPrice)
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: r = this.multiplier,
                    nonce: s
                }) {
                    return {
                        address: e,
                        amount: t,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: r,
                        nonce: s
                    }
                }
                async sendTransaction(e) {
                    return new Promise((t, n) => {
                        this.web3.eth.sendSignedTransaction(e).on("transactionHash", e => {
                            t({
                                txid: e
                            })
                        }).catch(e => {
                            const t = this.parent.coreLibrary.currentProvider.host,
                                a = new o.ExplorerRequestError({
                                    type: u.SEND_TRANSACTION_TYPE,
                                    error: e,
                                    url: t,
                                    instance: this
                                });
                            n(a)
                        })
                    })
                }
            }
            var c = FTMToken;
            t.default = c
        },
        5531: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = n(930),
                r = a(n(464)),
                s = a(n(2341)),
                o = a(n(5532)),
                u = a(n(2340)),
                c = n(5482);
            class StakableMaticETHToken extends((0, i.Web3Mixin)((0, i.StakingMixin)(c.ETHToken))) {
                constructor({
                    config: e,
                    ...t
                }) {
                    var n, a, i, r, s, o, u;
                    super({
                        config: e,
                        ...t
                    }), this.stakingContract = null !== (n = e.stakingContract) && void 0 !== n ? n : "0x5E3EF299FDDF15EAA0432E6E66473ACE8C13D908", this.stakingGasLimit = null !== (a = e.stakingGasLimit) && void 0 !== a ? a : 3e5, this.unstakingGasLimit = null !== (i = e.unstakingGasLimit) && void 0 !== i ? i : 3e5, this.restakeRewardsGasLimit = null !== (r = e.restakeRewardsGasLimit) && void 0 !== r ? r : 3e5, this.claimRewardsGasLimit = null !== (s = e.claimRewardsGasLimit) && void 0 !== s ? s : 17e4, this.withdrawGasLimit = null !== (o = e.withdrawGasLimit) && void 0 !== o ? o : 3e5, this.approvalGasLimit = null !== (u = e.approvalGasLimit) && void 0 !== u ? u : 5e4
                }
                async getInfo() {
                    return await super.getInfo(), await this.getStakingInfo(), {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
                calculateTotal({
                    balance: e,
                    staked: t,
                    unstaking: n,
                    rewards: a
                }) {
                    const i = e.toBN().add(t.toBN()).add(a.toBN()).add(n.toBN()).toString();
                    return new r.default(i, this)
                }
                async calculateAvailableForStake({
                    balance: e,
                    availableVotes: t
                }) {
                    return t.toBN().gte(e.toBN()) ? new r.default(e.toMinimal(), this) : new r.default("0", this)
                }
                accumulateValidatorsValues(e, t) {
                    return Object.values(e).reduce((e, {
                        ["" + t]: n
                    }) => new r.default(e.toBN().add(n.toBN()), this), new r.default("0", this))
                }
                calculateStaked(e) {
                    return this.accumulateValidatorsValues(e, "staked")
                }
                calculateUnstaking(e) {
                    return this.accumulateValidatorsValues(e, "unstaking")
                }
                calculateRewards(e) {
                    return this.accumulateValidatorsValues(e, "rewards")
                }
                calculatePendingWithdrawals(e) {
                    return this.accumulateValidatorsValues(e, "pendingWithdrawals")
                }
                calculateAvailableWithdrawals(e) {
                    return this.accumulateValidatorsValues(e, "availableWithdrawals")
                }
                async fetchStakingInfo() {
                    const e = Object.fromEntries(await Promise.all(this.predefinedValidators.map(async ({
                            address: e
                        }) => {
                            const t = await this.makeRawCall(o.default, this.stakingContract, "currentEpoch"),
                                n = await this.makeRawCall(s.default, e, "unbondNonces", [this.address]),
                                {
                                    shares: a,
                                    withdrawEpoch: i
                                } = await this.makeRawCall(s.default, e, "unbonds_new", [this.address, n]),
                                u = Number(t) > Number(i) + 82,
                                c = new r.default(u ? "0" : a, this),
                                l = new r.default(u ? a : "0", this),
                                p = new r.default(c.toBN().add(l.toBN()).toString(), this);
                            return [e, {
                                staked: new r.default(await this.makeRawCall(s.default, e, "balanceOf", [this.address]), this),
                                rewards: new r.default(await this.makeRawCall(s.default, e, "getLiquidRewards", [this.address]), this),
                                pendingWithdrawals: c,
                                availableWithdrawals: l,
                                unstaking: p
                            }]
                        }))),
                        t = this.calculateStaked(e),
                        n = this.calculateUnstaking(e),
                        a = this.calculateRewards(e),
                        i = this.calculatePendingWithdrawals(e),
                        c = this.calculateAvailableWithdrawals(e),
                        l = new r.default(await this.makeRawCall(u.default, this.contract, "allowance", [this.address, this.stakingContract]), this);
                    return {
                        balance: new r.default(this.balance, this),
                        staked: t,
                        unstaking: n,
                        availableVotes: l,
                        pendingWithdrawals: i,
                        availableWithdrawals: c,
                        rewards: a,
                        validators: e
                    }
                }
                makeApproval({
                    address: e,
                    amount: t
                }) {
                    return this.createSmartContractCall({
                        smartContractAddress: e,
                        standard: !0,
                        action: "approve",
                        args: [e, t]
                    })
                }
                increaseAllowance({
                    address: e,
                    amount: t
                }) {
                    return this.createSmartContractCall({
                        smartContractAddress: e,
                        standard: !0,
                        action: "increaseAllowance",
                        args: [e, t]
                    })
                }
                createApproveTransaction({
                    nonce: e,
                    userGasPrice: t,
                    gasLimit: n = this.approvalGasLimit,
                    multiplier: a
                } = {}) {
                    const i = this.makeApproval({
                        address: this.stakingContract,
                        amount: "115792089237316195423570985008687907853269984665640564039457584007913129639935"
                    });
                    return this.createRawTransactions({
                        address: this.contract,
                        amount: "0",
                        paymentData: i,
                        nonce: e,
                        userGasPrice: t,
                        gasLimit: n,
                        multiplier: a
                    })
                }
                createDelegationTransaction({
                    amount: e,
                    validator: t,
                    nonce: n,
                    userGasPrice: a,
                    gasLimit: i = this.stakingGasLimit,
                    multiplier: r
                }) {
                    const o = new this.coreLibrary.eth.Contract(s.default, t).methods.buyVoucher(e, e).encodeABI();
                    return this.createRawTransactions({
                        address: t,
                        paymentData: o,
                        amount: "0",
                        nonce: n,
                        userGasPrice: a,
                        gasLimit: i,
                        multiplier: r
                    })
                }
                createUnstakeTransaction({
                    amount: e,
                    validator: t,
                    nonce: n,
                    userGasPrice: a,
                    gasLimit: i = this.unstakingGasLimit,
                    multiplier: r
                }) {
                    const o = new this.coreLibrary.eth.Contract(s.default, t).methods.sellVoucher_new(e, e).encodeABI();
                    return this.createRawTransactions({
                        address: t,
                        paymentData: o,
                        amount: "0",
                        nonce: n,
                        userGasPrice: a,
                        gasLimit: i,
                        multiplier: r
                    })
                }
                async createWithdrawalTransaction({
                    validator: e,
                    nonce: t,
                    userGasPrice: n,
                    gasLimit: a = this.withdrawGasLimit,
                    multiplier: i
                }) {
                    const r = new this.coreLibrary.eth.Contract(s.default, e),
                        o = await this.makeRawCall(s.default, e, "unbondNonces", [this.address]),
                        u = r.methods.unstakeClaimTokens_new(o).encodeABI();
                    return this.createRawTransactions({
                        address: e,
                        paymentData: u,
                        amount: "0",
                        nonce: t,
                        userGasPrice: n,
                        gasLimit: a,
                        multiplier: i
                    })
                }
                createClaimRewardsTransaction({
                    validator: e,
                    nonce: t,
                    userGasPrice: n,
                    gasLimit: a = this.claimRewardsGasLimit,
                    multiplier: i
                }) {
                    const r = new this.coreLibrary.eth.Contract(s.default, e).methods.withdrawRewards().encodeABI();
                    return this.createRawTransactions({
                        address: e,
                        paymentData: r,
                        amount: "0",
                        nonce: t,
                        userGasPrice: n,
                        gasLimit: a,
                        multiplier: i
                    })
                }
                createRestakeRewardsTransaction({
                    validator: e,
                    nonce: t,
                    userGasPrice: n,
                    gasLimit: a = this.restakeRewardsGasLimit,
                    multiplier: i
                }) {
                    const r = new this.coreLibrary.eth.Contract(s.default, e).methods.restake().encodeABI();
                    return this.createRawTransactions({
                        address: e,
                        paymentData: r,
                        amount: "0",
                        nonce: t,
                        userGasPrice: n,
                        gasLimit: a,
                        multiplier: i
                    })
                }
                getPredefineValidatorsConfigIdentifier() {
                    return "matic_eth"
                }
            }
            t.default = StakableMaticETHToken
        },
        5532: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = [{
                inputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousRootChain",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newRootChain",
                    type: "address"
                }],
                name: "RootChainChanged",
                type: "event"
            }, {
                constant: !0,
                inputs: [],
                name: "CHECKPOINT_REWARD",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "NFTContract",
                outputs: [{
                    internalType: "contract StakingNFT",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "NFTCounter",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "WITHDRAWAL_DELAY",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "accountStateRoot",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "auctionPeriod",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "newRootChain",
                    type: "address"
                }],
                name: "changeRootChain",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "checkPointBlockInterval",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "blockInterval",
                    type: "uint256"
                }, {
                    internalType: "bytes32",
                    name: "voteHash",
                    type: "bytes32"
                }, {
                    internalType: "bytes32",
                    name: "stateRoot",
                    type: "bytes32"
                }, {
                    internalType: "address",
                    name: "proposer",
                    type: "address"
                }, {
                    internalType: "uint256[3][]",
                    name: "sigs",
                    type: "uint256[3][]"
                }],
                name: "checkSignatures",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "checkpointRewardDelta",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "accumFeeAmount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "index",
                    type: "uint256"
                }, {
                    internalType: "bytes",
                    name: "proof",
                    type: "bytes"
                }],
                name: "claimFee",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "heimdallFee",
                    type: "uint256"
                }],
                name: "confirmAuctionBid",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "currentEpoch",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "currentValidatorSetSize",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "currentValidatorSetTotalStake",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "decreaseValidatorDelegatedAmount",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "delegatedAmount",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "delegator",
                    type: "address"
                }],
                name: "delegationDeposit",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "delegationEnabled",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "delegatorsReward",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "auctionUser",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "heimdallFee",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "auctionAmount",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "acceptDelegation",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "signerPubkey",
                    type: "bytes"
                }],
                name: "dethroneAndStake",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "destination",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "drain",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "tokenAddr",
                    type: "address"
                }, {
                    internalType: "address payable",
                    name: "destination",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "drainValidatorShares",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "dynasty",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "epoch",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "eventsHub",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "extensionCode",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "forceUnstake",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "getRegistry",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "getValidatorContract",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }],
                name: "getValidatorId",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "governance",
                outputs: [{
                    internalType: "contract IGovernance",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "_registry",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_rootchain",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_NFTContract",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_stakingLogger",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_validatorShareFactory",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_governance",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_extensionCode",
                    type: "address"
                }],
                name: "initialize",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address[]",
                    name: "_signers",
                    type: "address[]"
                }],
                name: "insertSigners",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "isOwner",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "isValidator",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "latestSignerUpdateEpoch",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "lock",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "locked",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "logger",
                outputs: [{
                    internalType: "contract StakingInfo",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "maxRewardedCheckpoints",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "fromValidatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "toValidatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "migrateDelegation",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorIdFrom",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "validatorIdTo",
                    type: "uint256"
                }],
                name: "migrateValidatorsData",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "minDeposit",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "minHeimdallFee",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "ownerOf",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "prevBlockInterval",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "proposerBonus",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "registry",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "_NFTContract",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_stakingLogger",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_validatorShareFactory",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_extensionCode",
                    type: "address"
                }],
                name: "reinitialize",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "replacementCoolDown",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "stakeRewards",
                    type: "bool"
                }],
                name: "restake",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "rewardDecreasePerCheckpoint",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "rewardPerStake",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "rootChain",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_currentEpoch",
                    type: "uint256"
                }],
                name: "setCurrentEpoch",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "bool",
                    name: "enabled",
                    type: "bool"
                }],
                name: "setDelegationEnabled",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }],
                name: "setStakingToken",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "signerToValidator",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "signerUpdateLimit",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "signers",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "bytes",
                    name: "_slashingInfoList",
                    type: "bytes"
                }],
                name: "slash",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "heimdallFee",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "acceptDelegation",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "signerPubkey",
                    type: "bytes"
                }],
                name: "stakeFor",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "_acceptDelegation",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "_signerPubkey",
                    type: "bytes"
                }],
                name: "startAuction",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "forNCheckpoints",
                    type: "uint256"
                }],
                name: "stopAuctions",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "token",
                outputs: [{
                    internalType: "contract IERC20",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "heimdallFee",
                    type: "uint256"
                }],
                name: "topUpForFee",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalHeimdallFee",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalRewards",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalRewardsLiquidated",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalStaked",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }],
                name: "totalStakedFor",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "delegator",
                    type: "address"
                }],
                name: "transferFunds",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "unjail",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "unlock",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "unstake",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "unstakeClaim",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_blocks",
                    type: "uint256"
                }],
                name: "updateCheckPointBlockInterval",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "newReward",
                    type: "uint256"
                }],
                name: "updateCheckpointReward",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_rewardDecreasePerCheckpoint",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_maxRewardedCheckpoints",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_checkpointRewardDelta",
                    type: "uint256"
                }],
                name: "updateCheckpointRewardParams",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "newCommissionRate",
                    type: "uint256"
                }],
                name: "updateCommissionRate",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "newDynasty",
                    type: "uint256"
                }],
                name: "updateDynastyValue",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_minDeposit",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_minHeimdallFee",
                    type: "uint256"
                }],
                name: "updateMinAmounts",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "newProposerBonus",
                    type: "uint256"
                }],
                name: "updateProposerBonus",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "bytes",
                    name: "signerPubkey",
                    type: "bytes"
                }],
                name: "updateSigner",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "_limit",
                    type: "uint256"
                }],
                name: "updateSignerUpdateLimit",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "newContractAddress",
                    type: "address"
                }],
                name: "updateValidatorContractAddress",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "bool",
                    name: "delegation",
                    type: "bool"
                }],
                name: "updateValidatorDelegation",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }, {
                    internalType: "int256",
                    name: "amount",
                    type: "int256"
                }],
                name: "updateValidatorState",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "newThreshold",
                    type: "uint256"
                }],
                name: "updateValidatorThreshold",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "userFeeExit",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "validatorAuction",
                outputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "startEpoch",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "user",
                    type: "address"
                }, {
                    internalType: "bool",
                    name: "acceptDelegation",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "signerPubkey",
                    type: "bytes"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "validatorReward",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "validatorShareFactory",
                outputs: [{
                    internalType: "contract ValidatorShareFactory",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "validatorStake",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "validatorState",
                outputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "stakerCount",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "validatorStateChanges",
                outputs: [{
                    internalType: "int256",
                    name: "amount",
                    type: "int256"
                }, {
                    internalType: "int256",
                    name: "stakerCount",
                    type: "int256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "validatorThreshold",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "validators",
                outputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "reward",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "activationEpoch",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "deactivationEpoch",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "jailTime",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "signer",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "contractAddress",
                    type: "address"
                }, {
                    internalType: "enum StakeManagerStorage.Status",
                    name: "status",
                    type: "uint8"
                }, {
                    internalType: "uint256",
                    name: "commissionRate",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "lastCommissionUpdate",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "delegatorsReward",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "delegatedAmount",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "initialRewardPerStake",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "withdrawDelegatorsReward",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "validatorId",
                    type: "uint256"
                }],
                name: "withdrawRewards",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "withdrawalDelay",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }]
        },
        5533: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(545)),
                r = n(29),
                s = n(26);
            class OPToken extends i.default {
                constructor(...e) {
                    super(...e), this.gasLimit = "150000", this.coefficient = 1
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: r = this.multiplier,
                    nonce: s
                }) {
                    return {
                        address: e,
                        amount: t,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: r,
                        nonce: s
                    }
                }
                async sendTransaction(e) {
                    return new Promise((t, n) => {
                        this.web3.eth.sendSignedTransaction(e).on("transactionHash", e => {
                            t({
                                txid: e
                            })
                        }).catch(e => {
                            const t = this.parent.coreLibrary.currentProvider.host,
                                a = new r.ExplorerRequestError({
                                    type: s.SEND_TRANSACTION_TYPE,
                                    error: e,
                                    url: t,
                                    instance: this
                                });
                            n(a)
                        })
                    })
                }
                getFeeTicker() {
                    return this.deprecatedParent
                }
            }
            var o = OPToken;
            t.default = o
        },
        5534: function(e, t, n) {
            "use strict";
            var a = n(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(545)),
                r = n(29),
                s = n(26);
            class ARBToken extends i.default {
                constructor(...e) {
                    super(...e), this.gasLimit = "150000", this.coefficient = 1
                }
                async getInfo() {
                    return {
                        balance: String(this.balance),
                        transactions: this.transactions
                    }
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    custom: n,
                    userGasPrice: a,
                    gasLimit: i = this.gasLimit,
                    multiplier: r = this.multiplier,
                    nonce: s
                }) {
                    return {
                        address: e,
                        amount: t,
                        custom: n,
                        userGasPrice: a,
                        gasLimit: i,
                        contract: this.contract,
                        multiplier: r,
                        nonce: s
                    }
                }
                async sendTransaction(e) {
                    return new Promise((t, n) => {
                        this.web3.eth.sendSignedTransaction(e).on("transactionHash", e => {
                            t({
                                txid: e
                            })
                        }).catch(e => {
                            const t = this.parent.coreLibrary.currentProvider.host,
                                a = new r.ExplorerRequestError({
                                    type: s.SEND_TRANSACTION_TYPE,
                                    error: e,
                                    url: t,
                                    instance: this
                                });
                            n(a)
                        })
                    })
                }
                getFeeTicker() {
                    return this.deprecatedParent
                }
            }
            var o = ARBToken;
            t.default = o
        },
        5552: function(e, t, n) {
            "use strict";
            var a = n(5553).HDKey,
                i = n(5560);

            function r() {}

            function s(e) {
                var t = new r;
                return t._hdkey = e, t
            }
            r.fromMasterSeed = function(e) {
                return s(a.fromMasterSeed(e))
            }, r.fromExtendedKey = function(e) {
                return s(a.fromExtendedKey(e))
            }, r.prototype.privateExtendedKey = function() {
                if (!this._hdkey.privateExtendedKey) throw new Error("This is a public key only wallet");
                return this._hdkey.privateExtendedKey
            }, r.prototype.publicExtendedKey = function() {
                return this._hdkey.publicExtendedKey
            }, r.prototype.derivePath = function(e) {
                return s(this._hdkey.derive(e))
            }, r.prototype.deriveChild = function(e) {
                return s(this._hdkey.deriveChild(e))
            }, r.prototype.getWallet = function() {
                return this._hdkey._privateKey ? i.fromPrivateKey(this._hdkey._privateKey) : i.fromPublicKey(this._hdkey._publicKey, !0)
            }, e.exports = r
        },
        5553: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(5554);
            t.HDKey = a
        },
        5554: function(e, t, n) {
            "use strict";

            function a(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e
            }
            var i = a(n(72)),
                r = a(n(21)),
                s = a(n(172)),
                o = n(5555),
                u = n(5558),
                c = r.Buffer,
                l = c.from("Bitcoin seed", "utf8"),
                p = {
                    private: 76066276,
                    public: 76067358
                };

            function d(e) {
                this.versions = e || p, this.depth = 0, this.index = 0, this._privateKey = null, this._publicKey = null, this.chainCode = null, this._fingerprint = 0, this.parentFingerprint = 0
            }

            function f(e, t, n) {
                var a = c.allocUnsafe(78);
                a.writeUInt32BE(t, 0), a.writeUInt8(e.depth, 4);
                var i = e.depth ? e.parentFingerprint : 0;
                return a.writeUInt32BE(i, 5), a.writeUInt32BE(e.index, 9), e.chainCode.copy(a, 13), n.copy(a, 45), a
            }

            function y(e) {
                var t = o.createHash("sha256").update(e).digest();
                return o.createHash("ripemd160").update(t).digest()
            }
            Object.defineProperty(d.prototype, "fingerprint", {
                get: function() {
                    return this._fingerprint
                }
            }), Object.defineProperty(d.prototype, "identifier", {
                get: function() {
                    return this._identifier
                }
            }), Object.defineProperty(d.prototype, "pubKeyHash", {
                get: function() {
                    return this.identifier
                }
            }), Object.defineProperty(d.prototype, "privateKey", {
                get: function() {
                    return this._privateKey
                },
                set: function(e) {
                    i.equal(e.length, 32, "Private key must be 32 bytes."), i(!0 === u.privateKeyVerify(e), "Invalid private key"), this._privateKey = e, this._publicKey = u.publicKeyCreate(e, !0), this._identifier = y(this.publicKey), this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0)
                }
            }), Object.defineProperty(d.prototype, "publicKey", {
                get: function() {
                    return this._publicKey
                },
                set: function(e) {
                    i(33 === e.length || 65 === e.length, "Public key must be 33 or 65 bytes."), i(!0 === u.publicKeyVerify(e), "Invalid public key"), this._publicKey = u.publicKeyConvert(e, !0), this._identifier = y(this.publicKey), this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0), this._privateKey = null
                }
            }), Object.defineProperty(d.prototype, "privateExtendedKey", {
                get: function() {
                    return this._privateKey ? s.encode(f(this, this.versions.private, c.concat([c.alloc(1, 0), this.privateKey]))) : null
                }
            }), Object.defineProperty(d.prototype, "publicExtendedKey", {
                get: function() {
                    return s.encode(f(this, this.versions.public, this.publicKey))
                }
            }), d.prototype.derive = function(e) {
                if ("m" === e || "M" === e || "m'" === e || "M'" === e) return this;
                var t = e.split("/"),
                    n = this;
                return t.forEach((function(e, t) {
                    if (0 !== t) {
                        var a = e.length > 1 && "'" === e[e.length - 1],
                            r = parseInt(e, 10);
                        i(r < 2147483648, "Invalid index"), a && (r += 2147483648), n = n.deriveChild(r)
                    } else i(/^[mM]{1}/.test(e), 'Path must start with "m" or "M"')
                })), n
            }, d.prototype.deriveChild = function(e) {
                var t, n = e >= 2147483648,
                    a = c.allocUnsafe(4);
                if (a.writeUInt32BE(e, 0), n) {
                    i(this.privateKey, "Could not derive hardened child key");
                    var r = this.privateKey,
                        s = c.alloc(1, 0);
                    r = c.concat([s, r]), t = c.concat([r, a])
                } else t = c.concat([this.publicKey, a]);
                var l = o.createHmac("sha512", this.chainCode).update(t).digest(),
                    p = l.slice(0, 32),
                    f = l.slice(32),
                    y = new d(this.versions);
                if (this.privateKey) try {
                    y.privateKey = u.privateKeyTweakAdd(this.privateKey, p)
                } catch (t) {
                    return this.deriveChild(e + 1)
                } else try {
                    y.publicKey = u.publicKeyTweakAdd(this.publicKey, p, !0)
                } catch (t) {
                    return this.deriveChild(e + 1)
                }
                return y.chainCode = f, y.depth = this.depth + 1, y.parentFingerprint = this.fingerprint, y.index = e, y
            }, d.prototype.sign = function(e) {
                return u.sign(e, this.privateKey).signature
            }, d.prototype.verify = function(e, t) {
                return u.verify(e, t, this.publicKey)
            }, d.prototype.wipePrivateData = function() {
                return this._privateKey && o.randomBytes(this._privateKey.length).copy(this._privateKey), this._privateKey = null, this
            }, d.prototype.toJSON = function() {
                return {
                    xpriv: this.privateExtendedKey,
                    xpub: this.publicExtendedKey
                }
            }, d.fromMasterSeed = function(e, t) {
                var n = o.createHmac("sha512", l).update(e).digest(),
                    a = n.slice(0, 32),
                    i = n.slice(32),
                    r = new d(t);
                return r.chainCode = i, r.privateKey = a, r
            }, d.fromExtendedKey = function(e, t) {
                var n = new d(t = t || p),
                    a = s.decode(e),
                    r = a.readUInt32BE(0);
                i(r === t.private || r === t.public, "Version mismatch: does not match private or public"), n.depth = a.readUInt8(4), n.parentFingerprint = a.readUInt32BE(5), n.index = a.readUInt32BE(9), n.chainCode = a.slice(13, 45);
                var o = a.slice(45);
                return 0 === o.readUInt8(0) ? (i(r === t.private, "Version mismatch: version does not match private"), n.privateKey = o.slice(1)) : (i(r === t.public, "Version mismatch: version does not match public"), n.publicKey = o), n
            }, d.fromJSON = function(e) {
                return d.fromExtendedKey(e.xpriv)
            }, d.HARDENED_OFFSET = 2147483648;
            var m = d;
            e.exports = m
        },
        5555: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(5556),
                i = n(5557);
            t.createHmac = n(320), t.randomBytes = n(125);
            var r = function() {
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
            t.createHash = function(e) {
                if ("ripemd160" === e) return new r(a.ripemd160);
                if ("sha256" === e) return new r(i.sha256);
                throw new Error("hdkey-crypto shim is outdated")
            }
        },
        5556: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(2343).ripemd160,
                i = n(2336);
            t.ripemd160 = i.createHashFunction((function() {
                return new a
            }))
        },
        5557: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(1384),
                i = n(2336);
            t.sha256 = i.createHashFunction((function() {
                return new a
            }))
        },
        5558: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                }(n(5559))
        },
        5559: function(e, t, n) {
            "use strict";
            var a = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = a(n(1386));
            t.privateKeyVerify = function(e) {
                return i.privateKeyVerify(e)
            }, t.publicKeyCreate = function(e, t) {
                return void 0 === t && (t = !0), Buffer.from(i.publicKeyCreate(e, t))
            }, t.publicKeyVerify = function(e) {
                return i.publicKeyVerify(e)
            }, t.publicKeyConvert = function(e, t) {
                return void 0 === t && (t = !0), Buffer.from(i.publicKeyConvert(e, t))
            }, t.privateKeyTweakAdd = function(e, t) {
                return Buffer.from(i.privateKeyTweakAdd(Buffer.from(e), t))
            }, t.publicKeyTweakAdd = function(e, t, n) {
                return void 0 === n && (n = !0), Buffer.from(i.publicKeyTweakAdd(Buffer.from(e), t, n))
            }, t.sign = function(e, t) {
                var n = i.ecdsaSign(e, t);
                return {
                    signature: Buffer.from(n.signature),
                    recovery: n.recid
                }
            }, t.verify = function(e, t, n) {
                return i.ecdsaVerify(t, e, n)
            }
        },
        5560: function(e, t, n) {
            "use strict";
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i = n(21).Buffer,
                r = n(5561),
                s = n(24),
                o = n(125),
                u = n(5568),
                c = n(550),
                l = n(172);

            function p(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }

            function d(e, t) {
                return i.concat([e.update(t), e.final()])
            }
            var f = function(e, t) {
                if (e && t) throw new Error("Cannot supply both a private and a public key to the constructor");
                if (e && !r.isValidPrivate(e)) throw new Error("Private key does not satisfy the curve requirements (ie. it is invalid)");
                if (t && !r.isValidPublic(t)) throw new Error("Invalid public key");
                this._privKey = e, this._pubKey = t
            };
            Object.defineProperty(f.prototype, "privKey", {
                get: function() {
                    return p(this._privKey, "This is a public key only wallet"), this._privKey
                }
            }), Object.defineProperty(f.prototype, "pubKey", {
                get: function() {
                    return this._pubKey || (this._pubKey = r.privateToPublic(this.privKey)), this._pubKey
                }
            }), f.generate = function(e) {
                if (!e) return new f(o(32));
                for (var t = new r.BN("088f924eeceeda7fe92e1f5b0fffffffffffffff", 16);;) {
                    var n = o(32);
                    if (new r.BN(r.privateToAddress(n)).lte(t)) return new f(n)
                }
            }, f.generateVanityAddress = function(e) {
                for ("object" !== (void 0 === e ? "undefined" : a(e)) && (e = new RegExp(e));;) {
                    var t = o(32),
                        n = r.privateToAddress(t);
                    if (e.test(n.toString("hex"))) return new f(t)
                }
            }, f.prototype.getPrivateKey = function() {
                return this.privKey
            }, f.prototype.getPrivateKeyString = function() {
                return r.bufferToHex(this.getPrivateKey())
            }, f.prototype.getPublicKey = function() {
                return this.pubKey
            }, f.prototype.getPublicKeyString = function() {
                return r.bufferToHex(this.getPublicKey())
            }, f.prototype.getAddress = function() {
                return r.publicToAddress(this.pubKey)
            }, f.prototype.getAddressString = function() {
                return r.bufferToHex(this.getAddress())
            }, f.prototype.getChecksumAddressString = function() {
                return r.toChecksumAddress(this.getAddressString())
            }, f.prototype.toV3 = function(e, t) {
                p(this._privKey, "This is a public key only wallet");
                var n, a = (t = t || {}).salt || o(32),
                    l = t.iv || o(16),
                    f = t.kdf || "scrypt",
                    y = {
                        dklen: t.dklen || 32,
                        salt: a.toString("hex")
                    };
                if ("pbkdf2" === f) y.c = t.c || 262144, y.prf = "hmac-sha256", n = s.pbkdf2Sync(i.from(e), a, y.c, y.dklen, "sha256");
                else {
                    if ("scrypt" !== f) throw new Error("Unsupported kdf");
                    y.n = t.n || 262144, y.r = t.r || 8, y.p = t.p || 1, n = u(i.from(e), a, y.n, y.r, y.p, y.dklen)
                }
                var m = s.createCipheriv(t.cipher || "aes-128-ctr", n.slice(0, 16), l);
                if (!m) throw new Error("Unsupported cipher");
                var h = d(m, this.privKey),
                    b = r.keccak256(i.concat([n.slice(16, 32), i.from(h, "hex")]));
                return {
                    version: 3,
                    id: c({
                        random: t.uuid || o(16)
                    }),
                    address: this.getAddress().toString("hex"),
                    crypto: {
                        ciphertext: h.toString("hex"),
                        cipherparams: {
                            iv: l.toString("hex")
                        },
                        cipher: t.cipher || "aes-128-ctr",
                        kdf: f,
                        kdfparams: y,
                        mac: b.toString("hex")
                    }
                }
            }, f.prototype.getV3Filename = function(e) {
                return ["UTC--", (e ? new Date(e) : new Date).toJSON().replace(/:/g, "-"), "--", this.getAddress().toString("hex")].join("")
            }, f.prototype.toV3String = function(e, t) {
                return JSON.stringify(this.toV3(e, t))
            }, f.fromPublicKey = function(e, t) {
                return t && (e = r.importPublic(e)), new f(null, e)
            }, f.fromExtendedPublicKey = function(e) {
                return p("xpub" === e.slice(0, 4), "Not an extended public key"), e = l.decode(e).slice(45), f.fromPublicKey(e, !0)
            }, f.fromPrivateKey = function(e) {
                return new f(e)
            }, f.fromExtendedPrivateKey = function(e) {
                p("xprv" === e.slice(0, 4), "Not an extended private key");
                var t = l.decode(e);
                return p(0 === t[45], "Invalid extended private key"), f.fromPrivateKey(t.slice(46))
            }, f.fromV1 = function(e, t) {
                p("string" == typeof t);
                var n = "object" === (void 0 === e ? "undefined" : a(e)) ? e : JSON.parse(e);
                if ("1" !== n.Version) throw new Error("Not a V1 wallet");
                if ("scrypt" !== n.Crypto.KeyHeader.Kdf) throw new Error("Unsupported key derivation scheme");
                var o = n.Crypto.KeyHeader.KdfParams,
                    c = u(i.from(t), i.from(n.Crypto.Salt, "hex"), o.N, o.R, o.P, o.DkLen),
                    l = i.from(n.Crypto.CipherText, "hex");
                if (r.keccak256(i.concat([c.slice(16, 32), l])).toString("hex") !== n.Crypto.MAC) throw new Error("Key derivation failed - possibly wrong passphrase");
                var y = d(s.createDecipheriv("aes-128-cbc", r.keccak256(c.slice(0, 16)).slice(0, 16), i.from(n.Crypto.IV, "hex")), l);
                return new f(y)
            }, f.fromV3 = function(e, t, n) {
                p("string" == typeof t);
                var o, c, l = "object" === (void 0 === e ? "undefined" : a(e)) ? e : JSON.parse(n ? e.toLowerCase() : e);
                if (3 !== l.version) throw new Error("Not a V3 wallet");
                if ("scrypt" === l.crypto.kdf) c = l.crypto.kdfparams, o = u(i.from(t), i.from(c.salt, "hex"), c.n, c.r, c.p, c.dklen);
                else {
                    if ("pbkdf2" !== l.crypto.kdf) throw new Error("Unsupported key derivation scheme");
                    if ("hmac-sha256" !== (c = l.crypto.kdfparams).prf) throw new Error("Unsupported parameters to PBKDF2");
                    o = s.pbkdf2Sync(i.from(t), i.from(c.salt, "hex"), c.c, c.dklen, "sha256")
                }
                var y = i.from(l.crypto.ciphertext, "hex");
                if (r.keccak256(i.concat([o.slice(16, 32), y])).toString("hex") !== l.crypto.mac) throw new Error("Key derivation failed - possibly wrong passphrase");
                var m = d(s.createDecipheriv(l.crypto.cipher, o.slice(0, 16), i.from(l.crypto.cipherparams.iv, "hex")), y);
                return new f(m)
            }, f.fromEthSale = function(e, t) {
                p("string" == typeof t);
                var n = "object" === (void 0 === e ? "undefined" : a(e)) ? e : JSON.parse(e),
                    o = i.from(n.encseed, "hex"),
                    u = s.pbkdf2Sync(t, t, 2e3, 32, "sha256").slice(0, 16),
                    c = d(s.createDecipheriv("aes-128-cbc", u, o.slice(0, 16)), o.slice(16)),
                    l = new f(r.keccak256(c));
                if (l.getAddress().toString("hex") !== n.ethaddr) throw new Error("Decoded key mismatch - possibly wrong passphrase");
                return l
            }, e.exports = f
        },
        5561: function(e, t, n) {
            "use strict";
            var a = this && this.__createBinding || (Object.create ? function(e, t, n, a) {
                    void 0 === a && (a = n), Object.defineProperty(e, a, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, a) {
                    void 0 === a && (a = n), e[a] = t[n]
                }),
                i = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || t.hasOwnProperty(n) || a(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1 = t.rlp = t.BN = void 0;
            var r = n(5480);
            t.secp256k1 = r;
            var s = n(5474),
                o = n(35);
            t.BN = o;
            var u = n(546);
            t.rlp = u, Object.assign(t, s), i(n(5564), t), i(n(5565), t), i(n(5481), t), i(n(5566), t), i(n(5475), t), i(n(5567), t)
        },
        5562: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(35),
                i = new(0, n(85).ec)("secp256k1"),
                r = i.curve;
            t.privateKeyExport = function(e, t) {
                void 0 === t && (t = !0);
                var n = new a(e);
                if (n.ucmp(r.n) >= 0) throw new Error("couldn't export to DER format");
                var o = i.g.mul(n);
                return s(o.getX(), o.getY(), t)
            }, t.privateKeyModInverse = function(e) {
                var t = new a(e);
                if (t.ucmp(r.n) >= 0 || t.isZero()) throw new Error("private key range is invalid");
                return t.invm(r.n).toArrayLike(Buffer, "be", 32)
            }, t.signatureImport = function(e) {
                var t = new a(e.r);
                t.ucmp(r.n) >= 0 && (t = new a(0));
                var n = new a(e.s);
                return n.ucmp(r.n) >= 0 && (n = new a(0)), Buffer.concat([t.toArrayLike(Buffer, "be", 32), n.toArrayLike(Buffer, "be", 32)])
            }, t.ecdhUnsafe = function(e, t, n) {
                void 0 === n && (n = !0);
                var o = i.keyFromPublic(e),
                    u = new a(t);
                if (u.ucmp(r.n) >= 0 || u.isZero()) throw new Error("scalar was invalid (zero or overflow)");
                var c = o.pub.mul(u);
                return s(c.getX(), c.getY(), n)
            };
            var s = function(e, t, n) {
                var a;
                return n ? ((a = Buffer.alloc(33))[0] = t.isOdd() ? 3 : 2, e.toArrayLike(Buffer, "be", 32).copy(a, 1)) : ((a = Buffer.alloc(65))[0] = 4, e.toArrayLike(Buffer, "be", 32).copy(a, 1), t.toArrayLike(Buffer, "be", 32).copy(a, 33)), a
            }
        },
        5563: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = Buffer.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                i = Buffer.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            t.privateKeyExport = function(e, t, n) {
                void 0 === n && (n = !0);
                var r = Buffer.from(n ? a : i);
                return e.copy(r, n ? 8 : 9), t.copy(r, n ? 181 : 214), r
            }, t.privateKeyImport = function(e) {
                var t = e.length,
                    n = 0;
                if (t < n + 1 || 48 !== e[n]) return null;
                if (t < (n += 1) + 1 || !(128 & e[n])) return null;
                var a = 127 & e[n];
                if (a < 1 || a > 2) return null;
                if (t < (n += 1) + a) return null;
                var i = e[n + a - 1] | (a > 1 ? e[n + a - 2] << 8 : 0);
                return t < (n += a) + i || t < n + 3 || 2 !== e[n] || 1 !== e[n + 1] || 1 !== e[n + 2] || t < (n += 3) + 2 || 4 !== e[n] || e[n + 1] > 32 || t < n + 2 + e[n + 1] ? null : e.slice(n + 2, n + 2 + e[n + 1])
            }, t.signatureImportLax = function(e) {
                var t = Buffer.alloc(32, 0),
                    n = Buffer.alloc(32, 0),
                    a = e.length,
                    i = 0;
                if (48 !== e[i++]) return null;
                var r = e[i++];
                if (128 & r && (i += r - 128) > a) return null;
                if (2 !== e[i++]) return null;
                var s = e[i++];
                if (128 & s) {
                    if (i + (r = s - 128) > a) return null;
                    for (; r > 0 && 0 === e[i]; i += 1, r -= 1);
                    for (s = 0; r > 0; i += 1, r -= 1) s = (s << 8) + e[i]
                }
                if (s > a - i) return null;
                var o = i;
                if (i += s, 2 !== e[i++]) return null;
                var u = e[i++];
                if (128 & u) {
                    if (i + (r = u - 128) > a) return null;
                    for (; r > 0 && 0 === e[i]; i += 1, r -= 1);
                    for (u = 0; r > 0; i += 1, r -= 1) u = (u << 8) + e[i]
                }
                if (u > a - i) return null;
                var c = i;
                for (i += u; s > 0 && 0 === e[o]; s -= 1, o += 1);
                if (s > 32) return null;
                var l = e.slice(o, o + s);
                for (l.copy(t, 32 - l.length); u > 0 && 0 === e[c]; u -= 1, c += 1);
                if (u > 32) return null;
                var p = e.slice(c, c + u);
                return p.copy(n, 32 - p.length), {
                    r: t,
                    s: n
                }
            }
        },
        5564: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KECCAK256_RLP = t.KECCAK256_RLP_S = t.KECCAK256_RLP_ARRAY = t.KECCAK256_RLP_ARRAY_S = t.KECCAK256_NULL = t.KECCAK256_NULL_S = t.TWO_POW256 = t.MAX_INTEGER = void 0;
            var a = n(35);
            t.MAX_INTEGER = new a("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), t.TWO_POW256 = new a("10000000000000000000000000000000000000000000000000000000000000000", 16), t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.KECCAK256_NULL = Buffer.from(t.KECCAK256_NULL_S, "hex"), t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.KECCAK256_RLP_ARRAY = Buffer.from(t.KECCAK256_RLP_ARRAY_S, "hex"), t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.KECCAK256_RLP = Buffer.from(t.KECCAK256_RLP_S, "hex")
        },
        5565: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.importPublic = t.privateToPublic = t.privateToAddress = t.publicToAddress = t.pubToAddress = t.isValidPublic = t.isValidPrivate = t.isPrecompiled = t.generateAddress2 = t.generateAddress = t.isValidChecksumAddress = t.toChecksumAddress = t.isZeroAddress = t.isValidAddress = t.zeroAddress = void 0;
            var a = n(72),
                i = n(5474),
                r = n(5480),
                s = n(35),
                o = n(5475),
                u = n(5481);
            t.zeroAddress = function() {
                var e = o.zeros(20);
                return o.bufferToHex(e)
            }, t.isValidAddress = function(e) {
                return /^0x[0-9a-fA-F]{40}$/.test(e)
            }, t.isZeroAddress = function(e) {
                return t.zeroAddress() === o.addHexPrefix(e)
            }, t.toChecksumAddress = function(e, t) {
                e = i.stripHexPrefix(e).toLowerCase();
                for (var n = void 0 !== t ? t.toString() + "0x" : "", a = u.keccak(n + e).toString("hex"), r = "0x", s = 0; s < e.length; s++) parseInt(a[s], 16) >= 8 ? r += e[s].toUpperCase() : r += e[s];
                return r
            }, t.isValidChecksumAddress = function(e, n) {
                return t.isValidAddress(e) && t.toChecksumAddress(e, n) === e
            }, t.generateAddress = function(e, t) {
                e = o.toBuffer(e);
                var n = new s(t);
                return n.isZero() ? u.rlphash([e, null]).slice(-20) : u.rlphash([e, Buffer.from(n.toArray())]).slice(-20)
            }, t.generateAddress2 = function(e, t, n) {
                var i = o.toBuffer(e),
                    r = o.toBuffer(t),
                    s = o.toBuffer(n);
                return a(20 === i.length), a(32 === r.length), u.keccak256(Buffer.concat([Buffer.from("ff", "hex"), i, r, u.keccak256(s)])).slice(-20)
            }, t.isPrecompiled = function(e) {
                var t = o.unpad(e);
                return 1 === t.length && t[0] >= 1 && t[0] <= 8
            }, t.isValidPrivate = function(e) {
                return r.privateKeyVerify(e)
            }, t.isValidPublic = function(e, t) {
                return void 0 === t && (t = !1), 64 === e.length ? r.publicKeyVerify(Buffer.concat([Buffer.from([4]), e])) : !!t && r.publicKeyVerify(e)
            }, t.pubToAddress = function(e, t) {
                return void 0 === t && (t = !1), e = o.toBuffer(e), t && 64 !== e.length && (e = r.publicKeyConvert(e, !1).slice(1)), a(64 === e.length), u.keccak(e).slice(-20)
            }, t.publicToAddress = t.pubToAddress, t.privateToAddress = function(e) {
                return t.publicToAddress(t.privateToPublic(e))
            }, t.privateToPublic = function(e) {
                return e = o.toBuffer(e), r.publicKeyCreate(e, !1).slice(1)
            }, t.importPublic = function(e) {
                return 64 !== (e = o.toBuffer(e)).length && (e = r.publicKeyConvert(e, !1).slice(1)), e
            }
        },
        5566: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hashPersonalMessage = t.isValidSignature = t.fromRpcSig = t.toRpcSig = t.ecrecover = t.ecsign = void 0;
            var a = n(5480),
                i = n(35),
                r = n(5475),
                s = n(5481);

            function o(e, t) {
                return t ? e - (2 * t + 35) : e - 27
            }

            function u(e) {
                return 0 === e || 1 === e
            }
            t.ecsign = function(e, t, n) {
                var i = a.sign(e, t),
                    r = i.recovery;
                return {
                    r: i.signature.slice(0, 32),
                    s: i.signature.slice(32, 64),
                    v: n ? r + (2 * n + 35) : r + 27
                }
            }, t.ecrecover = function(e, t, n, i, s) {
                var c = Buffer.concat([r.setLength(n, 32), r.setLength(i, 32)], 64),
                    l = o(t, s);
                if (!u(l)) throw new Error("Invalid signature v value");
                var p = a.recover(e, c, l);
                return a.publicKeyConvert(p, !1).slice(1)
            }, t.toRpcSig = function(e, t, n, a) {
                if (!u(o(e, a))) throw new Error("Invalid signature v value");
                return r.bufferToHex(Buffer.concat([r.setLengthLeft(t, 32), r.setLengthLeft(n, 32), r.toBuffer(e)]))
            }, t.fromRpcSig = function(e) {
                var t = r.toBuffer(e);
                if (65 !== t.length) throw new Error("Invalid signature length");
                var n = t[64];
                return n < 27 && (n += 27), {
                    v: n,
                    r: t.slice(0, 32),
                    s: t.slice(32, 64)
                }
            }, t.isValidSignature = function(e, t, n, a, r) {
                void 0 === a && (a = !0);
                var s = new i("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                    c = new i("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
                if (32 !== t.length || 32 !== n.length) return !1;
                if (!u(o(e, r))) return !1;
                var l = new i(t),
                    p = new i(n);
                return !(l.isZero() || l.gt(c) || p.isZero() || p.gt(c)) && (!a || 1 !== p.cmp(s))
            }, t.hashPersonalMessage = function(e) {
                var t = Buffer.from("Ethereum Signed Message:\n" + e.length.toString(), "utf-8");
                return s.keccak(Buffer.concat([t, e]))
            }
        },
        5567: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineProperties = void 0;
            var a = n(72),
                i = n(5474),
                r = n(546),
                s = n(5475);
            t.defineProperties = function(e, t, n) {
                if (e.raw = [], e._fields = [], e.toJSON = function(t) {
                        if (void 0 === t && (t = !1), t) {
                            var n = {};
                            return e._fields.forEach((function(t) {
                                n[t] = "0x" + e[t].toString("hex")
                            })), n
                        }
                        return s.baToJSON(e.raw)
                    }, e.serialize = function() {
                        return r.encode(e.raw)
                    }, t.forEach((function(t, n) {
                        function i() {
                            return e.raw[n]
                        }

                        function r(i) {
                            "00" !== (i = s.toBuffer(i)).toString("hex") || t.allowZero || (i = Buffer.allocUnsafe(0)), t.allowLess && t.length ? (i = s.stripZeros(i), a(t.length >= i.length, "The field " + t.name + " must not have more " + t.length + " bytes")) : t.allowZero && 0 === i.length || !t.length || a(t.length === i.length, "The field " + t.name + " must have byte length of " + t.length), e.raw[n] = i
                        }
                        e._fields.push(t.name), Object.defineProperty(e, t.name, {
                            enumerable: !0,
                            configurable: !0,
                            get: i,
                            set: r
                        }), t.default && (e[t.name] = t.default), t.alias && Object.defineProperty(e, t.alias, {
                            enumerable: !1,
                            configurable: !0,
                            set: r,
                            get: i
                        })
                    })), n)
                    if ("string" == typeof n && (n = Buffer.from(i.stripHexPrefix(n), "hex")), Buffer.isBuffer(n) && (n = r.decode(n)), Array.isArray(n)) {
                        if (n.length > e._fields.length) throw new Error("wrong number of fields in data");
                        n.forEach((function(t, n) {
                            e[e._fields[n]] = s.toBuffer(t)
                        }))
                    } else {
                        if ("object" != typeof n) throw new Error("invalid data");
                        var o = Object.keys(n);
                        t.forEach((function(t) {
                            -1 !== o.indexOf(t.name) && (e[t.name] = n[t.name]), -1 !== o.indexOf(t.alias) && (e[t.alias] = n[t.alias])
                        }))
                    }
            }
        },
        5568: function(e, t, n) {
            var a = n(190).pbkdf2Sync;

            function i(e, t, n, a, i) {
                if (Buffer.isBuffer(e) && Buffer.isBuffer(n)) e.copy(n, a, t, t + i);
                else
                    for (; i--;) n[a++] = e[t++]
            }
            e.exports = function(e, t, n, r, s, o, u) {
                if (0 === n || 0 != (n & n - 1)) throw Error("N must be > 0 and a power of 2");
                if (n > 2147483647 / 128 / r) throw Error("Parameter N is too large");
                if (r > 2147483647 / 128 / s) throw Error("Parameter r is too large");
                var c, l = new Buffer(256 * r),
                    p = new Buffer(128 * r * n),
                    d = new Int32Array(16),
                    f = new Int32Array(16),
                    y = new Buffer(64),
                    m = a(e, t, 1, 128 * s * r, "sha256");
                if (u) {
                    var h = s * n * 2,
                        b = 0;
                    c = function() {
                        ++b % 1e3 == 0 && u({
                            current: b,
                            total: h,
                            percent: b / h * 100
                        })
                    }
                }
                for (var v = 0; v < s; v++) g(m, 128 * v * r, r, n, p, l);
                return a(e, m, 1, o, "sha256");

                function g(e, t, n, a, i, r) {
                    var s, o = 128 * n;
                    for (e.copy(r, 0, t, t + o), s = 0; s < a; s++) r.copy(i, s * o, 0, 0 + o), w(r, 0, o, n), c && c();
                    for (s = 0; s < a; s++) {
                        var u = 0 + 64 * (2 * n - 1);
                        P(i, (r.readUInt32LE(u) & a - 1) * o, r, 0, o), w(r, 0, o, n), c && c()
                    }
                    r.copy(e, t, 0, 0 + o)
                }

                function w(e, t, n, a) {
                    var r;
                    for (i(e, t + 64 * (2 * a - 1), y, 0, 64), r = 0; r < 2 * a; r++) P(e, 64 * r, y, 0, 64), k(y), i(y, 0, e, n + 64 * r, 64);
                    for (r = 0; r < a; r++) i(e, n + 2 * r * 64, e, t + 64 * r, 64);
                    for (r = 0; r < a; r++) i(e, n + 64 * (2 * r + 1), e, t + 64 * (r + a), 64)
                }

                function T(e, t) {
                    return e << t | e >>> 32 - t
                }

                function k(e) {
                    var t;
                    for (t = 0; t < 16; t++) d[t] = (255 & e[4 * t + 0]) << 0, d[t] |= (255 & e[4 * t + 1]) << 8, d[t] |= (255 & e[4 * t + 2]) << 16, d[t] |= (255 & e[4 * t + 3]) << 24;
                    for (i(d, 0, f, 0, 16), t = 8; t > 0; t -= 2) f[4] ^= T(f[0] + f[12], 7), f[8] ^= T(f[4] + f[0], 9), f[12] ^= T(f[8] + f[4], 13), f[0] ^= T(f[12] + f[8], 18), f[9] ^= T(f[5] + f[1], 7), f[13] ^= T(f[9] + f[5], 9), f[1] ^= T(f[13] + f[9], 13), f[5] ^= T(f[1] + f[13], 18), f[14] ^= T(f[10] + f[6], 7), f[2] ^= T(f[14] + f[10], 9), f[6] ^= T(f[2] + f[14], 13), f[10] ^= T(f[6] + f[2], 18), f[3] ^= T(f[15] + f[11], 7), f[7] ^= T(f[3] + f[15], 9), f[11] ^= T(f[7] + f[3], 13), f[15] ^= T(f[11] + f[7], 18), f[1] ^= T(f[0] + f[3], 7), f[2] ^= T(f[1] + f[0], 9), f[3] ^= T(f[2] + f[1], 13), f[0] ^= T(f[3] + f[2], 18), f[6] ^= T(f[5] + f[4], 7), f[7] ^= T(f[6] + f[5], 9), f[4] ^= T(f[7] + f[6], 13), f[5] ^= T(f[4] + f[7], 18), f[11] ^= T(f[10] + f[9], 7), f[8] ^= T(f[11] + f[10], 9), f[9] ^= T(f[8] + f[11], 13), f[10] ^= T(f[9] + f[8], 18), f[12] ^= T(f[15] + f[14], 7), f[13] ^= T(f[12] + f[15], 9), f[14] ^= T(f[13] + f[12], 13), f[15] ^= T(f[14] + f[13], 18);
                    for (t = 0; t < 16; ++t) d[t] = f[t] + d[t];
                    for (t = 0; t < 16; t++) {
                        var n = 4 * t;
                        e[n + 0] = d[t] >> 0 & 255, e[n + 1] = d[t] >> 8 & 255, e[n + 2] = d[t] >> 16 & 255, e[n + 3] = d[t] >> 24 & 255
                    }
                }

                function P(e, t, n, a, i) {
                    for (var r = 0; r < i; r++) n[a + r] ^= e[t + r]
                }
            }
        }
    }
]);