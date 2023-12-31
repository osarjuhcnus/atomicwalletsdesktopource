(window.webpackJsonp = window.webpackJsonp || []).push([
    [317], {
        10391: function(e, t, i) {
            const a = i(2374),
                {
                    derivePath: s
                } = i(10392),
                n = i(84),
                r = i(73),
                c = e => e.trim().split(/\s+/).map(e => e.toLowerCase()).join(" "),
                o = (e, t) => {
                    const i = a.mnemonicToSeed(c(e)),
                        {
                            key: o
                        } = s(t || "m/44'/397'/0'", i.toString("hex")),
                        d = r.sign.keyPair.fromSeed(o),
                        h = "ed25519:" + n.encode(Buffer.from(d.publicKey));
                    return {
                        seedPhrase: e,
                        secretKey: "ed25519:" + n.encode(Buffer.from(d.secretKey)),
                        publicKey: h
                    }
                };
            e.exports = {
                KEY_DERIVATION_PATH: "m/44'/397'/0'",
                generateSeedPhrase: e => o(void 0 !== e ? a.entropyToMnemonic(e) : a.generateMnemonic()),
                normalizeSeedPhrase: c,
                parseSeedPhrase: o,
                findSeedPhraseKey: (e, t) => {
                    const i = o(e);
                    return t.indexOf(i.publicKey) < 0 ? {} : i
                }
            }
        },
        10392: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.derivePath = t.isValidPath = t.getPublicKey = t.getMasterKeyFromSeed = void 0;
            const a = i(320),
                s = i(73),
                n = i(10393);
            t.getMasterKeyFromSeed = e => {
                const t = a("sha512", "ed25519 seed").update(Buffer.from(e, "hex")).digest();
                return {
                    key: t.slice(0, 32),
                    chainCode: t.slice(32)
                }
            };
            t.getPublicKey = (e, t = !0) => {
                const i = s.sign.keyPair.fromSeed(e).secretKey.subarray(32),
                    a = Buffer.alloc(1, 0);
                return t ? Buffer.concat([a, Buffer.from(i)]) : Buffer.from(i)
            }, t.isValidPath = e => !!n.pathRegex.test(e) && !e.split("/").slice(1).map(n.replaceDerive).some(isNaN), t.derivePath = (e, i, s = 2147483648) => {
                if (!t.isValidPath(e)) throw new Error("Invalid derivation path");
                const {
                    key: r,
                    chainCode: c
                } = t.getMasterKeyFromSeed(i);
                return e.split("/").slice(1).map(n.replaceDerive).map(e => parseInt(e, 10)).reduce((e, t) => (({
                    key: e,
                    chainCode: t
                }, i) => {
                    const s = Buffer.allocUnsafe(4);
                    s.writeUInt32BE(i, 0);
                    const n = Buffer.concat([Buffer.alloc(1, 0), e, s]),
                        r = a("sha512", t).update(n).digest();
                    return {
                        key: r.slice(0, 32),
                        chainCode: r.slice(32)
                    }
                })(e, t + s), {
                    key: r,
                    chainCode: c
                })
            }
        },
        10393: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.replaceDerive = t.pathRegex = void 0, t.pathRegex = new RegExp("^m(\\/[0-9]+')+$"), t.replaceDerive = e => e.replace("'", "")
        },
        5441: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(151)),
                n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var i = y(t);
                    if (i && i.has(e)) return i.get(e);
                    var a = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var n in e)
                        if ("default" !== n && Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = s ? Object.getOwnPropertyDescriptor(e, n) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                        } a.default = e, i && i.set(e, a);
                    return a
                }(i(2366)),
                r = i(10391),
                c = a(i(35)),
                o = a(i(53)),
                d = a(i(1412)),
                h = a(i(461)),
                l = a(i(55)),
                u = a(i(464)),
                f = a(i(67)),
                g = i(930);

            function y(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    i = new WeakMap;
                return (y = function(e) {
                    return e ? i : t
                })(e)
            }
            const w = /^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/;
            class NEARCoin extends((0, g.StakingMixin)((0, g.HasBlockScanner)((0, g.HasProviders)(h.default)))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: i,
                    explorers: a,
                    txWebUrl: n,
                    socket: r,
                    network: c
                }) {
                    var d;
                    super({
                        alias: e,
                        notify: t,
                        name: "NEAR Coin",
                        ticker: "NEAR",
                        decimal: 24,
                        derivation: "m/44'/9000'/0'/0/0",
                        txWebUrl: n,
                        explorers: a,
                        socket: r,
                        feeData: i,
                        id: "NEAR",
                        network: c
                    }), (0, s.default)(this, "updateBalance", o.default.throttle(this._updateBalance, 5e3)), this.gasLimit = String(i.gasLimit), this.gasLimitCoefficient = i.gasLimitCoefficient || 0, this.gasPriceCoefficient = i.gasPriceCoefficient || 0, this.stakingGas = i.stakingGasLimit || "25000000000000", this.stakingGasCoefficient = i.stakingGasLimitCoefficient || 5, this.defaultGasPrice = this.toMinimalUnit(i.defaultGasPrice || ""), this.bannedTokens = [], this.resendTimeout = i.resendTimeout, this.unspendableBalance = "0", this.network = c, this.fields.paymentId = !1, this.tokens = {}, this.nonce = new this.BN("0"), this.activated = !1, this.activationAmount = "100000000000000000000000", this.reserveForStake = null !== (d = i.reserveForStake) && void 0 !== d ? d : "100000000000000000000000"
                }
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        decimal: this.decimal,
                        address: this.address,
                        parent: this.id,
                        BN: c.default,
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e),
                        alias: this.alias,
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee,
                        gasLimit: this.gasLimit,
                        chainId: this.chainId
                    }
                }
                get stakingGasLimit() {
                    return new this.BN(this.stakingGas).mul(new this.BN(this.stakingGasCoefficient)).toString()
                }
                async loadWallet(e, t) {
                    try {
                        const {
                            KeyPair: e
                        } = n, i = e.fromString((0, r.parseSeedPhrase)(t).secretKey);
                        return this.keyPair = i, this.privateKey = i.toString(), this.address = Buffer.from(i.getPublicKey().data).toString("hex"), this
                    } catch (e) {
                        return l.default.error({
                            instance: this,
                            error: e
                        }), this
                    }
                }
                getAddress() {
                    return this.privateKey ? this.address : new Error(this.wallet.ticker + " private key is empty!!!")
                }
                validateAddress(e) {
                    return e.length >= 2 && e.length <= 64 && w.test(e)
                }
                async createDelegationTransaction({
                    amount: e,
                    validator: t,
                    nonce: i
                }) {
                    const {
                        transactions: a
                    } = n, s = this.keyPair.getPublicKey(), r = await this.getProvider("node").getAccessKey(this.address, s), c = n.utils.serialize.base_decode(r.block_hash), o = [a.functionCall("deposit_and_stake", {}, this.stakingGasLimit, e)], d = n.transactions.createTransaction(this.address, s, t, r.nonce + 1, o, c);
                    return this.serializeAndSignTransaction(d)
                }
                async createUnDelegationTransaction({
                    amount: e,
                    validator: t,
                    nonce: i
                }) {
                    const {
                        transactions: a
                    } = n, s = this.keyPair.getPublicKey(), r = await this.getProvider("node").getAccessKey(this.address, s), c = n.utils.serialize.base_decode(r.block_hash), o = [a.functionCall("unstake", {
                        amount: null != e ? e : void 0
                    }, this.stakingGasLimit, "0")], d = n.transactions.createTransaction(this.address, s, t, r.nonce + 1, o, c);
                    return this.serializeAndSignTransaction(d)
                }
                async createWithdrawDelegationTransaction({
                    validator: e,
                    nonce: t
                }) {
                    const {
                        transactions: i
                    } = n, a = this.keyPair.getPublicKey(), s = await this.getProvider("node").getAccessKey(this.address, a), r = n.utils.serialize.base_decode(s.block_hash), c = [i.functionCall("withdraw_all", {}, this.stakingGasLimit, "0")], o = n.transactions.createTransaction(this.address, a, e, s.nonce + 1, c, r);
                    return this.serializeAndSignTransaction(o)
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    nonce: i
                }) {
                    const a = this.keyPair.getPublicKey(),
                        s = await this.getProvider("node").getAccessKey(this.address, a),
                        r = n.utils.serialize.base_decode(s.block_hash),
                        c = [new n.transactions.Action({
                            transfer: new n.transactions.Transfer({
                                deposit: t
                            })
                        })],
                        o = n.transactions.createTransaction(this.address, a, e, i || s.nonce + 1, c, r);
                    return this.serializeAndSignTransaction(o)
                }
                serializeTransaction(e) {
                    const t = n.utils.serialize.serialize(n.transactions.SCHEMA, e);
                    return {
                        txHash: new Uint8Array((0, d.default)(t, {
                            asBytes: !0
                        })),
                        rawTx: e
                    }
                }
                signTransaction({
                    txHash: e,
                    rawTx: t
                }) {
                    const {
                        signature: i
                    } = this.keyPair.sign(e), a = new n.transactions.SignedTransaction({
                        transaction: t,
                        signature: new n.transactions.Signature({
                            keyType: t.publicKey.keyType,
                            data: i
                        })
                    });
                    return Buffer.from(a.encode()).toString("base64")
                }
                serializeAndSignTransaction(e) {
                    return this.signTransaction(this.serializeTransaction(e))
                }
                async getFee({
                    userGasPrice: e = null,
                    gasLimit: t = null,
                    contract: i,
                    address: a
                } = {}) {
                    return new this.BN(t || await this.estimateGas(null, a, i)).mul(new this.BN(e || await this.getGasPrice()))
                }
                async getGasPrice(e = !1, t = !1) {
                    const i = await this.getProvider("node").getGasPrice();
                    return e ? new this.BN(i || this.defaultGasPrice) : new this.BN(i || this.defaultGasPrice).add(new this.BN(this.gasPriceCoefficient))
                }
                async estimateGas(e, t, i) {
                    const a = await this.getProvider("node").getNodeConfig();
                    if (!a) return new this.BN(this.gasLimit).add(new this.BN(this.gasLimitCoefficient)).toString();
                    const s = [a.runtime_config.transaction_costs.action_receipt_creation_config, a.runtime_config.transaction_costs.action_creation_config[i ? "transfer_cost" : "function_call_cost"]],
                        n = [t === this.address ? "send_sir" : "send_not_sir", "execution"];
                    return s.reduce((e, t) => e.add(n.reduce((e, i) => e.add(new this.BN(t[i])), new this.BN(0))), new this.BN(0)).add(new this.BN(this.gasLimitCoefficient)).toString()
                }
                async availableBalance(e) {
                    await this.updateBalance();
                    const t = new this.BN(this.balance).sub(new this.BN(new this.BN(e).gt(new this.BN(0)) ? e : await this.getFee())).sub(new this.BN(this.unspendableBalance));
                    return t.gt(new this.BN(0)) ? this.toCurrencyUnit(t) : "0"
                }
                async _updateBalance() {
                    try {
                        const {
                            balance: e,
                            unspendable: t
                        } = await this.getProvider("node").getInfo(this.address, {
                            gasLimit: this.stakingGasLimit,
                            gasPrice: await this.getGasPrice(),
                            reserve: new this.BN(this.reserveForStake)
                        });
                        if (!e) throw new Error(this.ticker + " can't get balance");
                        this.balance = e, this.unspendableBalance = t
                    } catch (e) {
                        l.default.error({
                            instance: this,
                            error: e
                        })
                    }
                }
                async getInfo() {
                    if (!this.address) throw new Error(this.ticker + " address not found");
                    return await this.updateBalance(), {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
                async getStakingInfo() {
                    null === this.balance && await this.updateBalance();
                    const e = await this.getProvider("node").fetchStakingInfo(this.address, {
                        activeValidators: await f.default.get(this.getPredefineValidatorsConfigName())
                    });
                    return this.setBalances(await this.makeStakingInfoStruct(e)), {
                        balances: this.balances
                    }
                }
                calculateTotal({
                    balance: e,
                    staked: t,
                    unstaking: i
                }) {
                    return new u.default(e.toBN().add(t.toBN()).add(i.toBN()).toString(), this)
                }
                async calculateAvailableForStake() {
                    const e = await this.getFee({
                            gasLimit: this.stakingGasLimit
                        }),
                        t = new this.BN(this.balance).sub(new this.BN(this.reserveForStake)).sub(e).sub(new this.BN(this.unspendableBalance));
                    return new u.default(t.isNeg() ? "0" : t, this)
                }
                gasPrice() {
                    return this.getGasPrice()
                }
                setPrivateKey(e, t) {
                    this.loadWallet("", t)
                }
                async checkTransaction(e) {
                    await super.checkTransaction({
                        feeTicker: this.ticker,
                        ...e,
                        fee: null
                    })
                }
                async getBalance() {
                    return (await this.getInfo()).balance
                }
            }
            var p = NEARCoin;
            t.default = p
        }
    }
]);