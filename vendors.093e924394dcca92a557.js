(window.webpackJsonp = window.webpackJsonp || []).push([
    [340], {
        5433: function(e, i, t) {
            "use strict";
            var o = t(2);
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var r = o(t(7550)),
                n = o(t(461)),
                a = t(930);
            class BSVCoin extends((0, a.BitcoreBitcoinCashMixin)((0, a.BitcoreMixin)((0, a.BitcoinLikeFeeMixin)(n.default)))) {
                constructor({
                    alias: e,
                    notify: i,
                    feeData: t,
                    explorers: o,
                    txWebUrl: n,
                    socket: a
                }) {
                    super({
                        alias: e,
                        notify: i,
                        name: "Bitcoin SV",
                        ticker: "BSV",
                        decimal: 8,
                        derivation: "m/44'/145'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: o,
                        txWebUrl: n,
                        socket: a
                    }), this.feePerByte = t.feePerByte, this.coefficient = t.coefficient, this.coreLibrary = r.default, this.network = this.coreLibrary.Networks.livenet
                }
            }
            var s = BSVCoin;
            i.default = s
        }
    }
]);