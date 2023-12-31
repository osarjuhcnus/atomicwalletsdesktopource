(window.webpackJsonp = window.webpackJsonp || []).push([
    [357], {
        5447: function(e, s, i) {
            "use strict";
            var t = i(2);
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = t(i(461)),
                o = i(930);
            class OSMOCoin extends((0, o.CosmosMixinV2)((0, o.HasBlockScanner)((0, o.HasProviders)(a.default)))) {
                constructor({
                    alias: e,
                    notify: s,
                    feeData: i,
                    explorers: t,
                    txWebUrl: a,
                    socket: o
                }) {
                    super({
                        alias: e,
                        notify: s,
                        name: "Osmosis",
                        ticker: "OSMO",
                        decimal: 6,
                        derivation: "m/44'/118'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: t,
                        txWebUrl: a,
                        socket: o,
                        feeData: i,
                        denom: "uosmo"
                    }), this.derivation = "m/44'/118'/0'/0/0", this.prefix = "osmo", this.denom = "uosmo", this.sendFeeGas = i.sendFeeGas || "250000", this.stakingFeeGas = i.stakingFeeGas || "300000", this.claimFeeGas = i.claimFeeGas || "600000", this.transactions = [], this.minClaimSum = .01, this.fields.paymentId = !0, this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (e, s) => {
                        this.onConfirmSocketTx(s)
                    }), this.reserveForStake = i.reserveForStake || "10000"
                }
                getPredefineValidatorsConfigIdentifier() {
                    return "" + this.ticker
                }
            }
            var n = OSMOCoin;
            s.default = n
        }
    }
]);