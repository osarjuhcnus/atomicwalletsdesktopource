(window.webpackJsonp = window.webpackJsonp || []).push([
    [342], {
        5401: function(e, t, r) {
            "use strict";
            var i = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = s(t);
                    if (r && r.has(e)) return r.get(e);
                    var i = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(i, a, o) : i[a] = e[a]
                        } i.default = e, r && r.set(e, i);
                    return i
                }(r(1390)),
                a = i(r(461)),
                o = r(930);

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (s = function(e) {
                    return e ? r : t
                })(e)
            }
            const f = {
                messagePrefix: "",
                bip32: {
                    public: 49990397,
                    private: 49988504
                },
                pubKeyHash: 30,
                scriptHash: 22,
                wif: 158
            };
            class DOGECoin extends((0, o.BitcoinJSMixin)((0, o.BitcoinLikeFeeMixin)(a.default))) {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: r,
                    explorers: i,
                    txWebUrl: a,
                    socket: o
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "Doge",
                        ticker: "DOGE",
                        decimal: 8,
                        derivation: "m/44'/3'/0'/0/0",
                        unspendableBalance: "0",
                        explorers: i,
                        txWebUrl: a,
                        socket: o,
                        coreLibrary: n
                    }), this.derivation = "m/44'/3'/0'/0/0", this.feePerByte = r.feePerByte, this.coefficient = r.coefficient, this.network = f
                }
                async getFee(e) {
                    let t = await super.getFee(e);
                    const r = new this.BN(1e5),
                        i = new this.BN(1e6);
                    return t.lt(r) && (t = r), t.lt(i) && (t = t.add(i)), t
                }
                updateCoinParamsFromServer(e) {
                    e.feeData && (void 0 !== this.feePerByte && void 0 !== e.feeData.feePerByte && (this.feePerByte = String(e.feeData.feePerByte)), void 0 !== this.coefficient && void 0 !== e.feeData.coefficient && (this.coefficient = e.feeData.coefficient));
                    const t = e.explorers.find(({
                        className: e
                    }) => -1 !== this.explorer.constructor.name.indexOf(e));
                    t && this.explorer.baseUrl !== t.baseUrl && (this.explorer.baseUrl = t.baseUrl), this.explorer.webUrl = e.txWebUrl
                }
            }
            var c = DOGECoin;
            t.default = c
        }
    }
]);