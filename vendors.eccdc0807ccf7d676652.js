(window.webpackJsonp = window.webpackJsonp || []).push([
    [335], {
        5403: function(t, e, s) {
            "use strict";
            var a = s(2);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a(s(461)),
                i = s(29),
                n = a(s(192)),
                o = a(s(67)),
                d = s(26),
                c = s(1413),
                l = s(930);
            class ADACoin extends((0, l.HasProviders)(r.default)) {
                constructor({
                    alias: t,
                    notify: e,
                    feeData: s,
                    explorers: a,
                    txWebUrl: r,
                    submitUrl: i,
                    socket: n
                }) {
                    const d = {
                        alias: t,
                        notify: e,
                        name: "Cardano",
                        ticker: "ADA",
                        decimal: 6,
                        derivation: "m/44'/1815'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: a,
                        txWebUrl: r,
                        socket: n,
                        feeData: s,
                        submitUrl: i || "https://adalite.io/api/txs/submit",
                        dustAmount: "1000000"
                    };
                    o.default.register("stake_validators_ada"), super(d), this.privateKey = {}, this.legacyCore = c.AdaLibLegacy, this.feePerByte = s.feePerByte, this.constantPart = s.constantPart, this.loadLibs()
                }
                loadLibs() {
                    const t = {
                            feeCoefficient: this.feePerByte || "44",
                            feeConst: this.constantPart || "2800000"
                        },
                        e = window.fetch;
                    if ("Mobile" === n.default.getPlatformType()) {
                        const t = (t, e) => {
                            try {
                                WebAssembly.instantiateStreaming = void 0
                            } catch (t) {
                                console.warn("[ADA] WebAssembly not supported")
                            }
                            return new Promise((function(s, a) {
                                const r = new XMLHttpRequest;
                                t.endsWith(".wasm") && (r.responseType = "arraybuffer"), r.open(e && e.method || "GET", t), r.addEventListener("load", (function() {
                                    this.status >= 200 && this.status < 300 ? s({
                                        json: () => JSON.parse(r.response),
                                        ok: !0,
                                        arrayBuffer: () => r.response
                                    }) : a(new Error(`[ADA] wasm load error: status ${this.status}: ${r.statusText}`))
                                })), r.addEventListener("error", (function() {
                                    a(new Error(`[ADA] wasm load error: status ${this.status}: ${r.statusText}`))
                                })), r.send()
                            }))
                        };
                        window.fetch = t
                    }
                    return Promise.all([s.e(327).then(s.bind(null, 5874)), Promise.all([s.e(320), s.e(330)]).then(s.bind(null, 10429))]).then(e => {
                        this.coreLibrary = new c.AdaLibApi(...e, t)
                    }).catch(e => (console.error(e), Promise.all([s.e(361).then(s.bind(null, 11822)), Promise.all([s.e(319), s.e(329)]).then(s.bind(null, 10431))]).then(e => {
                        this.coreLibrary = new c.AdaLibApi(...e, t)
                    }).catch(t => {
                        console.error(t)
                    }))).finally(() => {
                        window.fetch = e
                    })
                }
                setPrivateKey(t, e) {
                    let s = t;
                    t && t.shelleyKey && (s = t.shelleyKey);
                    if (!this.coreLibrary.validateShelleyPrivateKey(s)) throw this.privateKey.byronKey = s, new Error("Legacy Byron Private key appears");
                    this.privateKey.shelleyKey = s, this.privateKey.byronKey = t.byronKey, this.privateKey.byronAddress = t.byronAddress, this.coreLibrary.getCip1852AccountFromPrivateKey(s), this.coreLibrary.getLegacyAccountFromMnemonic(e)
                }
                async setAddress(t) {
                    this.coreLibrary.validateShelleyAddress(t) ? this.address = t : this.privateKey.byronAddress = t
                }
                getAddress() {
                    return this.privateKey.shelleyKey ? this.address : new i.WalletError({
                        type: d.LOAD_WALLET_ERROR,
                        error: new Error("Could not get address, pkey is not exists"),
                        instance: this
                    })
                }
                async loadWallet(t, e) {
                    this.coreLibrary || await this.loadLibs();
                    try {
                        this.privateKey.shelleyKey = await this.coreLibrary.getPrivateKeyByMnemonic(e), this.privateKey.byronKey = await this.coreLibrary.getLegacyPrivateKeyByMnemonic(e), this.coreLibrary.getLegacyAccountFromMnemonic(e), this.privateKey.byronAddress = await this.coreLibrary.getLegacyAddressByPrivateKeySync(this.privateKey.byronKey), this.address = await this.coreLibrary.getAddressByPrivateKey()
                    } catch (t) {
                        console.error(t), console.error("ADA load walled failed, core library is not initialized")
                    }
                    return this
                }
                async validateAddress(t) {
                    return this.coreLibrary.validateAddress(t)
                }
                async isDustAmount(t, e) {
                    const s = e || await this.availableBalance(),
                        a = new this.BN(this.dustAmount),
                        r = new this.BN(this.toMinimalUnit(s)),
                        i = new this.BN(this.toMinimalUnit(t)),
                        n = r.sub(i);
                    return i.lt(a) ? "Minimal amount to send is 1 ADA" : !(!n.gt(new this.BN("0")) || !n.lt(a)) && "Minimal change is 1 ADA, try to send another amount"
                }
                async createTransaction({
                    address: t,
                    amount: e,
                    changeAddress: s = this.address
                }) {
                    if ("string" != typeof t) throw new TypeError("ADA: createTransaction: address must be string");
                    if ("string" != typeof e) throw new TypeError("ADA: createTransaction: amount must be string");
                    if (!this.privateKey.shelleyKey) throw new i.WalletError({
                        type: d.SEND_TRANSACTION_TYPE,
                        error: new Error("privateKey must be loaded"),
                        instance: this
                    });
                    this.lastblock = await this.getProvider("block").getLatestBlock();
                    const a = await this.getUnspentOutputs(s);
                    try {
                        return this.coreLibrary.createTransaction({
                            address: t,
                            amount: e,
                            changeAddress: s,
                            utxo: a,
                            slotNo: this.lastblock.slot_no
                        })
                    } catch (t) {
                        throw new i.WalletError({
                            type: d.SEND_TRANSACTION_TYPE,
                            error: t,
                            instance: this
                        })
                    }
                }
                async createClaimTransaction(t) {
                    const e = t || await this.getLegacyAddressUnspentOutputs();
                    if (!e || 0 === e.length) throw new Error("Nothing to claim");
                    const s = await this.getProvider("block").getLatestBlock(),
                        a = await this.getLegacyAddressAvailableBalance({
                            address: this.address,
                            legacyUtxo: e
                        });
                    return this.coreLibrary.createTransaction({
                        address: this.address,
                        amount: a,
                        changeAddress: this.privateKey.byronAddress,
                        utxo: e,
                        slotNo: s.slot_no
                    })
                }
                async getLegacyAddressUnspentOutputs() {
                    const {
                        byronAddress: t
                    } = this.privateKey;
                    return await this.getUnspentOutputs(t)
                }
                async getLegacyAddressAvailableBalance({
                    legacyUtxo: t,
                    address: e
                }) {
                    const {
                        byronAddress: s
                    } = this.privateKey, a = t || await this.getUnspentOutputs(s), r = a.reduce((t, e) => t.add(new this.BN(e.amount)), new this.BN("0"));
                    if (0 === Number(r)) return r;
                    const i = await this.getFee({
                            amount: r,
                            address: e,
                            utxos: a,
                            changeAddress: s
                        }),
                        n = r.sub(i);
                    return n.lt(new this.BN(this.dustAmount)) ? new this.BN("0") : n.toString()
                }
                getUnspentOutputs(t = this.address) {
                    return this.getProvider("utxo").getUnspentOutputs(t)
                }
                async getFee({
                    amount: t = null,
                    address: e,
                    utxos: s,
                    changeAddress: a
                } = {}) {
                    const r = e && e.length > 0 ? e : this.address,
                        i = s || await this.getUnspentOutputs(a || this.address);
                    this.lastblock = await this.getProvider("block").getLatestBlock();
                    let n = Number(t);
                    n || (n = Number(this.balance) ? this.balance : "1");
                    const o = this.coreLibrary.estimateFee({
                        address: r,
                        amount: n,
                        outputs: i,
                        ttl: this.lastblock.slot_no
                    });
                    return new this.BN(o)
                }
                async getInfo() {
                    const t = await this.getBalance(),
                        e = this.coreLibrary.getRewardAddress(this.address).to_address().to_bech32(),
                        s = await this.getProvider("balance").getAccountState(e);
                    return this.balance = t, this.balances = {
                        available: this.toCurrencyUnit(t),
                        rewards: s && s.reward,
                        staking: {
                            total: s && s.poolId ? this.balance : "0",
                            validator: s && s.poolId
                        }
                    }, {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
                async createDelegationTransaction(t, e) {
                    if (!this.privateKey.shelleyKey) throw new i.WalletError({
                        type: d.SEND_TRANSACTION_TYPE,
                        error: new Error("privateKey must be loaded"),
                        instance: this
                    });
                    this.lastblock = await this.getProvider("block").getLatestBlock();
                    const s = await this.getUnspentOutputs(this.address);
                    return this.coreLibrary.createDelegationTransaction({
                        utxo: s,
                        slotNo: this.lastblock.slot_no,
                        paymentAddress: this.address,
                        poolId: t,
                        stakeAddressRegistered: e
                    })
                }
                async stake(t) {
                    const e = this.coreLibrary.getRewardAddressHexFromAddressStr(this.address),
                        {
                            [e]: s
                        } = await this.getProvider("regHistory").getRegistrationHistory(e),
                        a = s && s[0] && "StakeRegistration" === s[0].certType,
                        r = await this.createDelegationTransaction(t, a);
                    return this.sendTransactionOnce(r)
                }
                async claim() {
                    this.lastblock = await this.getProvider("block").getLatestBlock();
                    const t = await this.getUnspentOutputs(this.address),
                        e = this.coreLibrary.getRewardAddress(this.address),
                        s = e.to_address().to_bech32(),
                        a = await this.getProvider("balance").getAccountState(s),
                        r = await this.coreLibrary.createWithdrawalTransaction({
                            paymentAddress: this.address,
                            utxo: t,
                            slotNo: this.lastblock.slot_no,
                            rewardAddress: e,
                            amountToWithdraw: a.reward
                        });
                    return this.sendTransactionOnce(r)
                }
                getDelegatedPoolKey() {
                    const t = this.getProvider("history").lastDelegationCert;
                    return t ? t.poolKeyHash : ""
                }
                get instance() {
                    return {
                        id: this.id,
                        ticker: this.ticker,
                        name: this.name,
                        alias: this.alias,
                        assetName: this.assetName,
                        decimal: this.decimal,
                        parent: this.id,
                        tokens: () => this.tokens,
                        toCurrencyUnit: t => this.toCurrencyUnit(t),
                        toMinimalUnit: t => this.toMinimalUnit(t),
                        updateBalances: (...t) => this.updateBalances(...t),
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee,
                        getFee: t => this.getFee(t)
                    }
                }
            }
            var h = ADACoin;
            e.default = h
        }
    }
]);