(window.webpackJsonp = window.webpackJsonp || []).push([
    [355], {
        5415: function(e, a, t) {
            "use strict";
            var n = t(2);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var s = n(t(461)),
                i = t(930);
            class ONGCoin extends((0, i.OntMixin)(s.default)) {
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
                        name: "Ontology Gas",
                        ticker: "ONG",
                        decimal: 9,
                        derivation: "m/44'/1024'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: n,
                        txWebUrl: s,
                        socket: i,
                        feeData: t
                    }), this.decimal = 9
                }
                async getInfo() {
                    const {
                        balances: e
                    } = await this.explorer.getInfo(this.address);
                    return this.balance = this.toMinimalUnit(e.ong), this.balances = e, {
                        balance: this.balance,
                        balances: this.balances
                    }
                }
            }
            var o = ONGCoin;
            a.default = o
        }
    }
]);