(window.webpackJsonp = window.webpackJsonp || []).push([
    [354], {
        5414: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = l(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                        } n.default = e, r && r.set(e, n);
                    return n
                }(r(7249)),
                o = n(r(461)),
                i = r(930),
                u = n(r(7250));

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (l = function(e) {
                    return e ? r : t
                })(e)
            }
            class NEOCoin extends((0, u.default)((0, i.NeoMixin)((0, i.HasProviders)(o.default)))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: r,
                    explorers: n,
                    txWebUrl: o,
                    socket: i
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "NEO-2 Old",
                        ticker: "NEO",
                        decimal: 0,
                        derivation: "m/44'/888'/0'/0",
                        unspendableBalance: "0",
                        txWebUrl: o,
                        explorers: n,
                        socket: i,
                        coreLib: a
                    }), this.balances = null
                }
                get feeTicker() {
                    return "GAS"
                }
            }
            var c = NEOCoin;
            t.default = c
        }
    }
]);