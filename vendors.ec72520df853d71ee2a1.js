(window.webpackJsonp = window.webpackJsonp || []).push([
    [359], {
        5423: function(e, t, r) {
            "use strict";
            var a = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = a(r(2360)),
                i = a(r(461));
            class XEMCoin extends i.default {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: {
                        fee: r
                    },
                    explorers: a,
                    txWebUrl: i,
                    socket: o
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "NEM",
                        ticker: "XEM",
                        decimal: 6,
                        derivation: "m/44'/43'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: a,
                        txWebUrl: i,
                        socket: o
                    }), this.fee = r, this.transactions = [], this.network = s.default.model.network.data.mainnet, this.fields.paymentId = !0
                }
                getAddressFromPublicKey(e) {
                    return s.default.model.address.toAddress(e, this.network.id)
                }
                async loadWallet(e, t) {
                    const r = s.default.crypto.helpers.derivePassSha(t, 6e3).priv,
                        a = s.default.crypto.keyPair.create(r).publicKey.toString();
                    if (!r) throw new Error(this.ticker + " privateKey is empty!!!");
                    return this.privateKey = r, this.address = this.getAddressFromPublicKey(a), this
                }
                getAddress() {
                    if (this.privateKey) {
                        const e = s.default.crypto.keyPair.create(this.privateKey).publicKey.toString();
                        return this.getAddressFromPublicKey(e)
                    }
                    return new Error(this.ticker + " privateKey is empty!!!")
                }
                async validateAddress(e) {
                    try {
                        return s.default.model.address.isValid(e) && s.default.model.address.isFromNetwork(e, this.network.id)
                    } catch (t) {
                        throw new Error(`Fail to validate ${this.ticker} address [${e}]`)
                    }
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    memo: r = ""
                }) {
                    const a = s.default.model.objects.create("common")("", this.privateKey),
                        i = s.default.model.objects.create("transferTransaction")(e, this.toCurrencyUnit(t), r),
                        o = s.default.model.transactions.prepare("transferTransaction")(a, i, this.network.id),
                        d = s.default.crypto.keyPair.create(this.privateKey),
                        n = s.default.utils.serialization.serializeTransaction(o),
                        l = d.sign(n),
                        c = {
                            data: s.default.utils.convert.ua2hex(n),
                            signature: l.toString()
                        };
                    return JSON.stringify(c)
                }
                updateCoinParamsFromServer(e) {
                    e.feeData && void 0 !== this.fee && void 0 !== e.feeData.fee && (this.fee = e.feeData.fee);
                    const t = e.explorers.find(({
                        className: e
                    }) => "NemNodeExplorer" === e);
                    t && (this.explorers[0].updateEndpoint(t.baseUrl), this.explorers[0].webUrl = e.txWebUrl)
                }
            }
            var o = XEMCoin;
            t.default = o
        }
    }
]);