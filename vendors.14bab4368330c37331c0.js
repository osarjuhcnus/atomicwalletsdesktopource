(window.webpackJsonp = window.webpackJsonp || []).push([
    [337], {
        5410: function(e, t, i) {
            "use strict";
            var s = i(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = s(i(461)),
                o = i(930);
            class ATOMCoin extends((0, o.CosmosMixinV2)((0, o.HasProviders)(a.default))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: i,
                    explorers: s,
                    txWebUrl: a,
                    socket: o
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "Cosmos",
                        ticker: "ATOM",
                        decimal: 6,
                        derivation: "m/44'/118'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: s,
                        txWebUrl: a,
                        socket: o,
                        feeData: i,
                        denom: "uatom"
                    }), this.derivation = "m/44'/118'/0'/0/0", this.prefix = "cosmos", this.denom = "uatom", this.sendFeeGas = i.sendFeeGas || "200000", this.stakingFeeGas = i.stakingFeeGas || "300000", this.claimFeeGas = i.claimFeeGas || "600000", this.transactions = [], this.minClaimSum = .01, this.fields.paymentId = !0, this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (e, t) => {
                        this.getInfo(), t && t.direction ? this.bus.$emit("socket::newtx", {
                            id: this.id,
                            ticker: this.ticker,
                            amount: t.amount,
                            txid: t.txid
                        }) : this.bus.$emit("socket::newtx::outgoing", {
                            id: this.id,
                            ticker: this.ticker
                        })
                    }), this.reserveForStake = i.reserveForStake || "10000"
                }
                getPredefineValidatorsConfigIdentifier() {
                    return this.ticker + "-2"
                }
            }
            var n = ATOMCoin;
            t.default = n
        }
    }
]);