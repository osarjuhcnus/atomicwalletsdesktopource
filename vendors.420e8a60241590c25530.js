(window.webpackJsonp = window.webpackJsonp || []).push([
    [338], {
        5411: function(e, s, t) {
            "use strict";
            var a = t(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var i = t(2372),
                n = a(t(461)),
                r = t(930);
            class BANDCoin extends((0, r.CosmosMixinV2)((0, r.HasBlockScanner)((0, r.HasProviders)(n.default)))) {
                constructor({
                    alias: e,
                    notify: s,
                    feeData: t,
                    explorers: a,
                    txWebUrl: i,
                    socket: n
                }) {
                    super({
                        alias: e,
                        notify: s,
                        name: "Band Protocol",
                        ticker: "BAND",
                        decimal: 6,
                        derivation: "m/44'/494'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: a,
                        txWebUrl: i,
                        socket: n,
                        feeData: t,
                        denom: "uband"
                    }), this.derivation = "m/44'/494'/0'/0/0", this.prefix = "band", this.denom = "uband", this.sendFeeGas = t.sendFeeGas || "200000", this.stakingFeeGas = t.stakingFeeGas || "300000", this.claimFeeGas = t.claimFeeGas || "600000", this.transactions = [], this.fields.paymentId = !0, this.reserveForStake = t.reserveForStake || "400"
                }
                async signTransaction(e) {
                    const s = this.getSignKeys(),
                        {
                            sequence: t = "0",
                            account_number: a
                        } = await this.getProvider("send").getAuth(this.address),
                        n = (0, i.sign)(e, s, {
                            sequence: t,
                            account_number: a,
                            chain_id: this.getProvider("send").getChainId()
                        }),
                        r = e;
                    return r.signatures = [{
                        signature: n.signature,
                        pub_key: {
                            type: "tendermint/PubKeySecp256k1",
                            value: Buffer.from("" + s.publicKey, "hex").toString("base64")
                        },
                        public_key: Buffer.from("eb5ae98721" + s.publicKey, "hex").toString("base64")
                    }], r
                }
            }
            var o = BANDCoin;
            s.default = o
        }
    }
]);