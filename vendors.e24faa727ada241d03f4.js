(window.webpackJsonp = window.webpackJsonp || []).push([
    [341], {
        5436: function(e, r, t) {
            "use strict";
            var i = t(2);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var s = i(t(1389)),
                o = i(t(461)),
                a = t(29),
                n = t(930);
            class DGBCoin extends((0, n.BitcoreMixin)((0, n.BitcoinLikeFeeMixin)(o.default))) {
                constructor({
                    alias: e,
                    notify: r,
                    feeData: t,
                    explorers: i,
                    txWebUrl: o,
                    socket: a
                }) {
                    super({
                        alias: e,
                        notify: r,
                        name: "DigiByte",
                        ticker: "DGB",
                        decimal: 8,
                        derivation: "m/44'/20'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: i,
                        txWebUrl: o,
                        socket: a
                    }), this.feeData = t, this.feePerByte = t.feePerByte, this.coefficient = t.coefficient, this.coreLibrary = s.default, this.network = {
                        name: "digibyte-livenet",
                        alias: "digibyte-mainnet",
                        pubkeyhash: 30,
                        privatekey: 128,
                        scripthash: 5,
                        xpubkey: 76067358,
                        xprivkey: 76066276,
                        networkMagic: 4207130330,
                        port: 12024,
                        dnsSeeds: ["seed.digibyte.co", "seed.digibyte.io", "digiexplorer.info"]
                    }
                }
                async createTransaction({
                    address: e,
                    amount: r,
                    memo: t,
                    userFee: i
                }) {
                    const s = await this.getCoins({
                        address: e,
                        value: Number(r),
                        feePerByte: Number(this.feeData.feePerByte)
                    });
                    if (i && s.fee > i) throw new Error("userFee is more then utxo fee");
                    const o = this.coreLibrary.Networks.add(this.network),
                        a = this.createTransactionSync(s);
                    return this.coreLibrary.Networks.remove(o), a
                }
                loadWallet(e) {
                    return new Promise((r, t) => {
                        const i = this.coreLibrary.Networks.add(this.network),
                            s = this.coreLibrary.HDPrivateKey.fromSeed(e, i),
                            {
                                privateKey: o
                            } = s[this.getDeriveFunctionName()](this.derivation);
                        o || t(new a.WalletError({
                            type: "LOAD_WALLET_ERROR",
                            error: "can't derive privateKey!",
                            instance: this
                        })), this.privateKey = o.toWIF(), this.address = this.getAddress(i), this.coreLibrary.Networks.remove(i), r(this)
                    })
                }
                async validateAddress(e) {
                    const r = this.coreLibrary.Networks.add(this.network),
                        t = this.coreLibrary.Address.isValid(e || this.address, r);
                    return this.coreLibrary.Networks.remove(r), t
                }
                getAddress(e) {
                    return this.privateKey ? this.coreLibrary.PrivateKey.fromWIF(this.privateKey.toString()).toAddress(e).toString() : new Error(this.ticker + " privateKey is empty!!!")
                }
                getScriptPubKey() {
                    const e = this.coreLibrary.Networks.add(this.network),
                        r = this.coreLibrary.Script.fromAddress(this.address).toHex();
                    return this.coreLibrary.Networks.remove(e), r
                }
            }
            var d = DGBCoin;
            r.default = d
        }
    }
]);