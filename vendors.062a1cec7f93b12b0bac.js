(window.webpackJsonp = window.webpackJsonp || []).push([
    [339], {
        5432: function(e, i, t) {
            "use strict";
            var o = t(2);
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var r = o(t(7550)),
                a = o(t(461)),
                n = t(930);
            class BCHCoin extends((0, n.HasProviders)((0, n.BitcoreBitcoinCashMixin)((0, n.BitcoreMixin)((0, n.BitcoinLikeFeeMixin)(a.default))))) {
                constructor({
                    alias: e,
                    notify: i,
                    feeData: t,
                    explorers: o,
                    txWebUrl: a,
                    socket: n
                }) {
                    super({
                        explorers: o,
                        txWebUrl: a,
                        ...{
                            alias: e,
                            notify: i,
                            name: "Bitcoin Cash",
                            ticker: "BCH",
                            decimal: 8,
                            derivation: "m/44'/145'/0'/0/0",
                            unspendableBalance: "0",
                            socket: n
                        }
                    }), this.feePerByte = t.feePerByte, this.coefficient = t.coefficient, this.coreLibrary = r.default, this.network = this.coreLibrary.Networks.livenet
                }
            }
            var s = BCHCoin;
            i.default = s
        }
    }
]);