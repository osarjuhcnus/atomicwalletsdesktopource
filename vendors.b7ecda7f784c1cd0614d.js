(window.webpackJsonp = window.webpackJsonp || []).push([
    [336], {
        5446: function(e, t, i) {
            "use strict";
            var a = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(i(151)),
                n = a(i(207)),
                r = a(i(208)),
                o = i(2368),
                l = a(i(461)),
                c = i(29),
                u = i(26),
                d = i(930);

            function h(e, t) {
                v(e, t), t.add(e)
            }

            function f(e, t, i) {
                v(e, t), t.set(e, i)
            }

            function v(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function w(e, t, i) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return i
            }
            const {
                AccountAddress: p,
                EntryFunction: g,
                TransactionPayloadEntryFunction: m,
                RawTransaction: y,
                ChainId: b
            } = o.TxnBuilderTypes;
            var P = new WeakMap,
                E = new WeakMap,
                k = new WeakMap,
                x = new WeakMap,
                A = new WeakMap,
                T = new WeakMap,
                R = new WeakMap,
                B = new WeakSet,
                C = new WeakSet,
                W = new WeakSet;
            class APTCoin extends((0, d.HasProviders)(l.default)) {
                constructor({
                    alias: e,
                    feeData: t,
                    explorers: i,
                    txWebUrl: a,
                    socket: n
                }) {
                    var o, l, c, u, d, v;
                    super({
                        alias: e,
                        name: "Aptos",
                        ticker: "APT",
                        decimal: 8,
                        derivation: "m/44'/637'/0'/0'/0'",
                        unspendableBalance: "0",
                        explorers: i,
                        txWebUrl: a,
                        socket: n,
                        feeData: t
                    }), h(this, W), h(this, C), h(this, B), (0, s.default)(this, "privateKey", void 0), (0, s.default)(this, "publicKey", void 0), f(this, P, {
                        writable: !0,
                        value: {
                            account: void 0,
                            isRegistered: !1
                        }
                    }), f(this, E, {
                        writable: !0,
                        value: void 0
                    }), f(this, k, {
                        writable: !0,
                        value: void 0
                    }), f(this, x, {
                        writable: !0,
                        value: void 0
                    }), f(this, A, {
                        writable: !0,
                        value: void 0
                    }), f(this, T, {
                        writable: !0,
                        value: void 0
                    }), f(this, R, {
                        writable: !0,
                        value: void 0
                    }), (0, r.default)(this, E, null !== (o = t.defaultGasPrice) && void 0 !== o ? o : 100), (0, r.default)(this, k, null !== (l = t.gasPriceCoefficient) && void 0 !== l ? l : 1), (0, r.default)(this, x, null !== (c = t.defaultMaxGasPrice) && void 0 !== c ? c : 1e3), (0, r.default)(this, A, null !== (u = t.gasLimit) && void 0 !== u ? u : 2e3), (0, r.default)(this, T, null !== (d = t.gasLimitCoefficient) && void 0 !== d ? d : 1), (0, r.default)(this, R, null !== (v = t.txExpirationTimeout) && void 0 !== v ? v : 30)
                }
                setPrivateKey(e, t) {
                    const i = new o.AptosAccount(new o.HexString(e).toUint8Array());
                    w(this, C, M).call(this, i)
                }
                loadWallet(e, t) {
                    const i = o.AptosAccount.fromDerivePath("m/44'/637'/0'/0'/0'", t);
                    return w(this, C, M).call(this, i), this
                }
                validateAddress(e) {
                    try {
                        return !!p.fromHex(e)
                    } catch {
                        return !1
                    }
                }
                async getInfo() {
                    try {
                        var e;
                        const {
                            balance: t,
                            isRegistered: i
                        } = null !== (e = await this.getProvider("balance").getInfo(this.address)) && void 0 !== e ? e : {};
                        return i && ((0, n.default)(this, P).isRegistered = !0, this.balance = t), {
                            balance: t
                        }
                    } catch (e) {
                        throw new c.ExternalError({
                            type: u.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async getGasPrice() {
                    const {
                        gas_estimate: e
                    } = await this.getProvider("node").getGasPrice();
                    return parseInt(e, 10)
                }
                async getFee(e) {
                    try {
                        const {
                            gasPrice: t,
                            gasLimit: i
                        } = await w(this, W, I).call(this, e);
                        return String(t * i)
                    } catch (e) {
                        throw new c.ExternalError({
                            type: u.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    userGasPrice: i,
                    gasLimit: a
                }) {
                    const s = new m(g.natural("0x1::aptos_account", "transfer", [], [o.BCS.bcsToBytes(p.fromHex(e)), o.BCS.bcsSerializeUint64(BigInt(t))]));
                    try {
                        const [{
                            sequence_number: e
                        }, {
                            gasPrice: t,
                            gasLimit: r
                        }] = await Promise.all([this.getProvider("node").getAccount(this.address), w(this, W, I).call(this, {
                            userGasPrice: i,
                            gasLimit: a
                        })]), l = new y(p.fromHex(this.address), BigInt(e), s, BigInt(r), BigInt(t), w(this, B, L).call(this), new b(1));
                        return o.AptosClient.generateBCSTransaction((0, n.default)(this, P).account, l)
                    } catch (e) {
                        throw new c.ExternalError({
                            type: u.EXTERNAL_ERROR,
                            error: e,
                            instance: this
                        })
                    }
                }
                sendTransaction(e) {
                    return this.getProvider("send").sendTransaction(e)
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
                        toCurrencyUnit: e => this.toCurrencyUnit(e),
                        toMinimalUnit: e => this.toMinimalUnit(e),
                        updateBalances: (...e) => this.updateBalances(...e),
                        feeCoefficient: this.coefficient,
                        feeDefault: this.feeData && this.feeData.fee,
                        getFee: e => this.getFee(e),
                        getLocalAccount: () => (0, n.default)(this, P)
                    }
                }
            }

            function L() {
                return BigInt(Math.floor(Date.now() / 1e3) + (0, n.default)(this, R))
            }

            function M(e) {
                const {
                    address: t,
                    publicKeyHex: i,
                    privateKeyHex: a
                } = e.toPrivateKeyObject();
                (0, n.default)(this, P).account = e, this.address = t, this.publicKey = i, this.privateKey = a
            }
            async function I({
                userGasPrice: e = null,
                gasLimit: t = null
            } = {}) {
                var i;
                const a = e ? Number(e) : null !== null ? null : (null !== (i = await this.getGasPrice()) && void 0 !== i ? i : (0, n.default)(this, E)) * (0, n.default)(this, k);
                return {
                    gasPrice: a < (0, n.default)(this, x) ? a : (0, n.default)(this, x),
                    gasLimit: t ? Number(t) : null !== null ? null : (0, n.default)(this, A) * (0, n.default)(this, T)
                }
            }
            var S = APTCoin;
            t.default = S
        }
    }
]);