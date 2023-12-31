(window.webpackJsonp = window.webpackJsonp || []).push([
    [343], {
        5406: function(e, t, a) {
            "use strict";
            var r = a(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(5394),
                n = r(a(461)),
                i = r(a(2365)),
                o = a(29),
                d = a(26),
                l = a(930);
            const c = {
                polkadotKeyring: new i.default(() => Promise.all([a.e(224), a.e(219), a.e(236)]).then(a.t.bind(null, 10433, 7))),
                polkadotTypesExtrinsic: new i.default(() => a.e(222).then(a.t.bind(null, 10658, 7))),
                polkadotUtil: new i.default(() => a.e(4).then(a.t.bind(null, 5468, 7))),
                polkadotUtilCrypto: new i.default(() => Promise.all([a.e(4), a.e(220)]).then(a.t.bind(null, 10800, 7))),
                substrateTxWrapperPolkadot: new i.default(() => Promise.all([a.e(226), a.e(269), a.e(252), a.e(223), a.e(230), a.e(256), a.e(229), a.e(231), a.e(237), a.e(248), a.e(233), a.e(245), a.e(270), a.e(331), a.e(332), a.e(333), a.e(334), a.e(242), a.e(227), a.e(228)]).then(a.t.bind(null, 10898, 7)))
            };
            class DOTCoin extends((0, l.HasProviders)((0, l.HasBlockScanner)(n.default))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: a,
                    explorers: r,
                    txWebUrl: s,
                    socket: n
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "Polkadot",
                        ticker: "DOT",
                        decimal: 10,
                        derivation: "m/44'/354'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: r,
                        txWebUrl: s,
                        feeData: a,
                        socket: n
                    }), this.fee = a.fee, this.nonce = 0, this.transactions = []
                }
                async loadWallet(e, t) {
                    const a = await c.polkadotUtilCrypto.get("cryptoWaitReady");
                    await a();
                    const r = new s.Keyring({
                            type: "sr25519"
                        }),
                        n = e.slice(0, 32).toString("hex"),
                        i = r.addFromSeed(e.slice(0, 32));
                    if (!i) throw new o.WalletError({
                        type: d.WALLET_ERROR,
                        error: new Error("can't get a privateKey!"),
                        instance: this
                    });
                    return this.privateKey = n, this.address = r.encodeAddress(i.address, 0), this.loadExplorers(this.config), this
                }
                async getAddress() {
                    if (this.privateKey) {
                        const e = new s.Keyring({
                                type: "sr25519"
                            }),
                            t = Buffer.from(this.privateKey, "hex"),
                            a = e.addFromSeed(t);
                        return e.encodeAddress(a.address, 0)
                    }
                    return new o.WalletError({
                        type: d.WALLET_ERROR,
                        error: new Error("privateKey is empty!"),
                        instance: this
                    })
                }
                async validateAddress(e) {
                    try {
                        const [t, a, r, s] = await Promise.all([c.polkadotKeyring.get("decodeAddress"), c.polkadotKeyring.get("encodeAddress"), c.polkadotUtil.get("hexToU8a"), c.polkadotUtil.get("isHex")]);
                        return a(s(e) ? r(e) : t(e)), !0
                    } catch (e) {
                        return console.warn(e), !1
                    }
                }
                async getInfo() {
                    const {
                        balance: e,
                        balances: t = {},
                        nonce: a
                    } = await this.getProvider("balance").getInfo(this.address);
                    return e && (this.balance = e), a && (this.nonce = a), t && Object.keys(t).length > 0 && (this.balances = t), {
                        balance: e,
                        balances: this.balances
                    }
                }
                async createTransaction({
                    address: e,
                    amount: t
                }) {
                    if (!e || 0 === !e.length) throw new o.WalletError({
                        type: d.SEND_TRANSACTION_TYPE,
                        error: new Error("Destination address must be specified"),
                        instance: this
                    });
                    const [{
                        number: a,
                        hash: r
                    }, {
                        genesisHash: n,
                        specVersion: i,
                        metadata: l,
                        txVersion: p
                    }, h, y, u, g, b] = await Promise.all([this.getProvider("meta").getLatestBlock(), this.getProvider("meta").getTxMeta(), c.polkadotTypesExtrinsic.get("EXTRINSIC_VERSION"), c.substrateTxWrapperPolkadot.get("createMetadata"), c.substrateTxWrapperPolkadot.get("getRegistryPolkadot"), c.substrateTxWrapperPolkadot.get("construct"), c.substrateTxWrapperPolkadot.get("methods")]), w = u(i, l);
                    w.setMetadata(y(w, l));
                    const f = {
                            address: this.address,
                            blockHash: r,
                            blockNumber: w.createType("BlockNumber", a).toNumber(),
                            genesisHash: n,
                            nonce: this.nonce,
                            tip: 0,
                            eraPeriod: 64,
                            specVersion: i,
                            transactionVersion: p,
                            metadataRpc: l
                        },
                        m = b.balances.transfer({
                            dest: e,
                            value: t
                        }, f, {
                            metadataRpc: l,
                            registry: w
                        }),
                        v = g.signingPayload(m, {
                            registry: w
                        }),
                        k = Buffer.from(this.privateKey, "hex"),
                        T = new s.Keyring({
                            type: "sr25519"
                        }).addFromSeed(k),
                        {
                            signature: x
                        } = w.createType("ExtrinsicPayload", v, {
                            version: h
                        }).sign(T);
                    return g.signedTx(m, x, {
                        metadataRpc: l,
                        registry: w
                    })
                }
                async sendTransaction(e) {
                    return this.getProvider("send").sendTransaction({
                        rawtx: e,
                        privateKey: this.privateKey
                    })
                }
                async createDelegationTransaction(e, t) {
                    const a = {
                        address: this.address,
                        amount: t,
                        validatorAddresses: [e],
                        rewardDestination: "Stash"
                    };
                    return this.getProvider("send").sendDelegationTransaction({
                        rawtx: a,
                        privateKey: this.privateKey
                    })
                }
                async createUnDelegationTransaction(e) {
                    const t = {
                        amount: e
                    };
                    return this.getProvider("send").sendUnDelegationTransaction({
                        rawtx: t,
                        privateKey: this.privateKey
                    })
                }
            }
            var p = DOTCoin;
            t.default = p
        }
    }
]);