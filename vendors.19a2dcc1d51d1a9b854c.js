(window.webpackJsonp = window.webpackJsonp || []).push([
    [353], {
        5439: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = u(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                        } n.default = e, r && r.set(e, n);
                    return n
                }(r(7580)),
                a = n(r(461)),
                i = r(930);

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (u = function(e) {
                    return e ? r : t
                })(e)
            }
            class NEO3Coin extends((0, i.Neo3Mixin)((0, i.NeoMixin)((0, i.HasProviders)(a.default)))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: r,
                    explorers: n,
                    txWebUrl: a,
                    socket: i
                }) {
                    super({
                        id: "NEO3",
                        alias: e,
                        notify: t,
                        name: "NEO",
                        ticker: "NEO",
                        decimal: 0,
                        derivation: "m/44'/888'/0'/0",
                        unspendableBalance: "0",
                        txWebUrl: a,
                        explorers: n,
                        socket: i,
                        coreLib: o
                    }), this.balances = null
                }
                get feeTicker() {
                    return "GAS"
                }
            }
            var c = NEO3Coin;
            t.default = c
        }
    }
]);