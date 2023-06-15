(window.webpackJsonp = window.webpackJsonp || []).push([
    [349], {
        5454: function(e, i, t) {
            "use strict";
            var s = t(2);
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var a = s(t(461)),
                n = t(930);
            class INJCoin extends((0, n.CosmosMixinV2)((0, n.HasBlockScanner)((0, n.HasProviders)(a.default)))) {
                constructor({
                    alias: e,
                    notify: i,
                    feeData: t,
                    explorers: s,
                    txWebUrl: a,
                    socket: n
                }) {
                    super({
                        alias: e,
                        notify: i,
                        name: "Injective",
                        ticker: "INJ",
                        decimal: 18,
                        derivation: "m/44'/60'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: s,
                        txWebUrl: a,
                        socket: n,
                        feeData: t,
                        denom: "inj"
                    }), this.derivation = "m/44'/60'/0'/0/0", this.prefix = "inj", this.denom = "inj", this.sendFeeGas = t.sendFeeGas || "200000", this.stakingFeeGas = t.stakingFeeGas || "300000", this.claimFeeGas = t.claimFeeGas || "600000", this.transactions = [], this.minClaimSum = .01, this.fields.paymentId = !0, this.eventEmmiter.on(this.ticker + "::confirmed-socket-tx", (e, i) => {
                        this.getInfo(), i && i.direction ? this.bus.$emit("socket::newtx", {
                            id: this.id,
                            ticker: this.ticker,
                            amount: i.amount,
                            txid: i.txid
                        }) : this.bus.$emit("socket::newtx::outgoing", {
                            id: this.id,
                            ticker: this.ticker
                        })
                    }), this.reserveForStake = t.reserveForStake || "10000"
                }
            }
            var o = INJCoin;
            i.default = o
        }
    }
]);