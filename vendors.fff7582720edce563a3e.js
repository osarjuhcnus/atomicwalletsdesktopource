(window.webpackJsonp = window.webpackJsonp || []).push([
    [345], {
        5451: function(e, t, i) {
            "use strict";
            var s = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = s(i(461)),
                n = i(930);
            class FETCoin extends((0, n.CosmosMixinV2)((0, n.HasBlockScanner)((0, n.HasProviders)(a.default)))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: i,
                    explorers: s,
                    txWebUrl: a,
                    socket: n
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "Fetch.AI",
                        ticker: "FET",
                        decimal: 18,
                        derivation: "m/44'/118'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: s,
                        txWebUrl: a,
                        socket: n,
                        feeData: i,
                        denom: "afet"
                    }), this.derivation = "m/44'/118'/0'/0/0", this.prefix = "fetch", this.denom = "afet", this.sendFeeGas = i.sendFeeGas || "250000", this.stakingFeeGas = i.stakingFeeGas || "300000", this.claimFeeGas = i.claimFeeGas || "600000", this.transactions = [], this.minClaimSum = .01, this.fields.paymentId = !0, this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (e, t) => {
                        this.onConfirmSocketTx(t)
                    }), this.reserveForStake = i.reserveForStake || "10000"
                }
                getPredefineValidatorsConfigIdentifier() {
                    return "" + this.ticker
                }
            }
            var r = FETCoin;
            t.default = r
        }
    }
]);