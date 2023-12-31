(window.webpackJsonp = window.webpackJsonp || []).push([
    [358], {
        5417: function(e, t, i) {
            "use strict";
            var r = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(i(1389)),
                n = r(i(461)),
                s = i(930);
            a.default.Networks.add({
                name: "ravencoin-livenet",
                alias: "mainnet",
                pubkeyhash: 60,
                privatekey: 128,
                scripthash: 122,
                xpubkey: 76067358,
                xprivkey: 76066276
            });
            class RVNCoin extends((0, s.BitcoreMixin)((0, s.BitcoinLikeFeeMixin)(n.default))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: i,
                    explorers: r,
                    txWebUrl: n,
                    socket: s
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "Ravencoin",
                        ticker: "RVN",
                        decimal: 8,
                        derivation: "m/44'/175'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: r,
                        txWebUrl: n,
                        socket: s,
                        coreLibrary: a.default
                    }), this.derivation = "m/44'/175'/0'/0/0", this.feePerByte = i.feePerByte, this.coefficient = i.coefficient, this.transactions = [], this.network = this.coreLibrary.Networks.get("ravencoin-livenet")
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    memo: i,
                    userFee: r
                }) {
                    const a = await this.getCoins({
                        address: e,
                        value: Number(t),
                        feePerByte: Number(this.feePerByte)
                    });
                    if (r && a.fee > r) throw new Error("userFee is more then utxo fee");
                    return this.createTransactionSync(a)
                }
            }
            var o = RVNCoin;
            t.default = o
        }
    }
]);