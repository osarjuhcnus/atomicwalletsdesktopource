(window.webpackJsonp = window.webpackJsonp || []).push([
    [350], {
        5448: function(e, a, i) {
            "use strict";
            var s = i(2);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var t = s(i(461)),
                n = i(930);
            class KAVACoin extends((0, n.CosmosMixinV2)((0, n.HasBlockScanner)((0, n.HasProviders)(t.default)))) {
                constructor({
                    alias: e,
                    notify: a,
                    feeData: i,
                    explorers: s,
                    txWebUrl: t,
                    socket: n
                }) {
                    super({
                        alias: e,
                        notify: a,
                        name: "Kava",
                        ticker: "KAVA",
                        decimal: 6,
                        derivation: "m/44'/459'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: s,
                        txWebUrl: t,
                        socket: n,
                        feeData: i,
                        denom: "ukava"
                    }), this.derivation = "m/44'/459'/0'/0/0", this.prefix = "kava", this.denom = "ukava", this.sendFeeGas = i.sendFeeGas || "250000", this.stakingFeeGas = i.stakingFeeGas || "300000", this.claimFeeGas = i.claimFeeGas || "600000", this.transactions = [], this.minClaimSum = .01, this.fields.paymentId = !0, this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (e, a) => {
                        this.onConfirmSocketTx(a)
                    }), this.reserveForStake = i.reserveForStake || "10000"
                }
                getPredefineValidatorsConfigIdentifier() {
                    return "" + this.ticker
                }
            }
            var r = KAVACoin;
            a.default = r
        }
    }
]);