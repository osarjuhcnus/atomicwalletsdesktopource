(window.webpackJsonp = window.webpackJsonp || []).push([
    [356], {
        5416: function(e, a, t) {
            "use strict";
            var n = t(2);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var s = n(t(461)),
                i = t(930);
            class ONTCoin extends((0, i.OntMixin)(s.default)) {
                constructor({
                    alias: e,
                    notify: a,
                    feeData: t,
                    explorers: n,
                    txWebUrl: s,
                    socket: i
                }) {
                    super({
                        alias: e,
                        notify: a,
                        name: "Ontology",
                        ticker: "ONT",
                        decimal: 0,
                        derivation: "m/44'/1024'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: n,
                        txWebUrl: s,
                        feeData: t,
                        socket: i
                    }), this.balances = null, this.deprecatedParent = "ONG"
                }
                async availableBalance() {
                    const e = new this.BN(this.balance);
                    return e.lt(new this.BN(0)) ? "0" : this.toCurrencyUnit(e)
                }
            }
            var l = ONTCoin;
            a.default = l
        }
    }
]);