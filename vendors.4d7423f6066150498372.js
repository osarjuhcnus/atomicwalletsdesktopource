(window.webpackJsonp = window.webpackJsonp || []).push([
    [219], {
        10433: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {};
            t.default = void 0, r(10434);
            var a = r(10493);
            Object.keys(a).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === a[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                }))
            }));
            var o = a.Keyring;
            t.default = o
        },
        10434: function(e, t, r) {
            "use strict";
            var n = r(5467),
                a = r(6729),
                o = r(7610);
            (0, n.detectPackage)(o.packageInfo, "undefined" != typeof __dirname && __dirname, [n.packageInfo, a.packageInfo])
        },
        10442: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayChunk = function(e, t) {
                const r = Math.ceil(e.length / t),
                    n = Array(r);
                for (let a = 0; a < r; a++) {
                    const r = a * t;
                    n[a] = e.slice(r, r + t)
                }
                return n
            }
        },
        10443: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayFilter = function(e, t = !0) {
                return e.filter(e => !(0, a.isUndefined)(e) && (t || !(0, n.isNull)(e)))
            };
            var n = r(6286),
                a = r(5876)
        },
        10444: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayFlatten = function(e) {
                const t = new Array(e.reduce((e, t) => e + t.length, 0));
                let r = -1;
                for (let n = 0; n < e.length; n++) {
                    const a = e[n];
                    for (let e = 0; e < a.length; e++) t[++r] = a[e]
                }
                return t
            }
        },
        10445: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayRange = function(e, t = 0) {
                return (0, n.assert)(e > 0, "Expected non-zero, positive number as a range size"), new Array(e).fill(0).map((e, r) => r + t)
            };
            var n = r(5806)
        },
        10446: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayShuffle = function(e) {
                const t = [...e];
                let r = t.length;
                if (1 === r) return t;
                for (; 0 !== r;) {
                    const e = Math.floor(Math.random() * r);
                    r--, [t[r], t[e]] = [t[e], t[r]]
                }
                return t
            }
        },
        10447: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "bnFromHex", {
                enumerable: !0,
                get: function() {
                    return n.hexToBn
                }
            });
            var n = r(6103)
        },
        10448: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnMax = function(...e) {
                return (0, n.checkMaxMin)("max", e)
            };
            var n = r(7597)
        },
        10449: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnMin = function(...e) {
                return (0, n.checkMaxMin)("min", e)
            };
            var n = r(7597)
        },
        10450: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnSqrt = function(e) {
                const t = (0, s.bnToBn)(e);
                if ((0, n.assert)(t.gte(o.BN_ZERO), "square root of negative numbers is not supported"), t.lte(o.BN_MAX_INTEGER)) return new a.BN(Math.floor(Math.sqrt(t.toNumber())));
                let r = i.clone();
                for (;;) {
                    const e = t.div(r).iadd(r).ishrn(1);
                    if (r.eq(e) || r.eq(e.sub(o.BN_ONE))) return r;
                    r = e
                }
            };
            var n = r(5806),
                a = r(5877),
                o = r(7596),
                s = r(5964);
            const i = new a.BN(94906265)
        },
        10451: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnToHex = function(e, t = {
                bitLength: -1,
                isLe: !1,
                isNegative: !1
            }, r) {
                if (!e) return "0x00";
                const n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(r), !0).forEach((function(t) {
                            (0, a.default)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    isLe: !1,
                    isNegative: !1
                }, (0, o.isNumber)(t) ? {
                    bitLength: t,
                    isLe: r
                } : t);
                return (0, s.u8aToHex)((0, i.bnToU8a)(e, n))
            };
            var a = n(r(5461)),
                o = r(6719),
                s = r(6104),
                i = r(7601);

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
        },
        10493: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                Keyring: !0,
                decodeAddress: !0,
                encodeAddress: !0,
                setSS58Format: !0,
                createPair: !0,
                packageInfo: !0,
                createTestKeyring: !0,
                createTestPairs: !0
            };
            Object.defineProperty(t, "Keyring", {
                enumerable: !0,
                get: function() {
                    return a.Keyring
                }
            }), Object.defineProperty(t, "createPair", {
                enumerable: !0,
                get: function() {
                    return i.createPair
                }
            }), Object.defineProperty(t, "createTestKeyring", {
                enumerable: !0,
                get: function() {
                    return u.createTestKeyring
                }
            }), Object.defineProperty(t, "createTestPairs", {
                enumerable: !0,
                get: function() {
                    return d.createTestPairs
                }
            }), Object.defineProperty(t, "decodeAddress", {
                enumerable: !0,
                get: function() {
                    return o.decodeAddress
                }
            }), Object.defineProperty(t, "encodeAddress", {
                enumerable: !0,
                get: function() {
                    return o.encodeAddress
                }
            }), Object.defineProperty(t, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return c.packageInfo
                }
            }), Object.defineProperty(t, "setSS58Format", {
                enumerable: !0,
                get: function() {
                    return o.setSS58Format
                }
            });
            var a = r(7611),
                o = r(5808),
                s = r(7672);
            Object.keys(s).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === s[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return s[e]
                    }
                }))
            }));
            var i = r(6759),
                c = r(7610),
                u = r(7674),
                d = r(10656)
        },
        10494: function(e, t, r) {
            "use strict";
            var n = r(10495),
                a = r(5467),
                o = r(7612),
                s = r(6729);
            (0, a.detectPackage)(s.packageInfo, "undefined" != typeof __dirname && __dirname, [n.packageInfo, a.packageInfo, o.packageInfo])
        },
        10495: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.packageInfo = void 0;
            t.packageInfo = {
                name: "@polkadot/networks",
                version: "7.6.1"
            }
        },
        10497: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                packageInfo: !0
            };
            Object.defineProperty(t, "packageInfo", {
                enumerable: !0,
                get: function() {
                    return a.packageInfo
                }
            }), r(10498);
            var a = r(6729),
                o = r(10563);
            Object.keys(o).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            }));
            var s = r(10595);
            Object.keys(s).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === s[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return s[e]
                    }
                }))
            }));
            var i = r(10598);
            Object.keys(i).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                }))
            }));
            var c = r(6752);
            Object.keys(c).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === c[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return c[e]
                    }
                }))
            }));
            var u = r(7655);
            Object.keys(u).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === u[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return u[e]
                    }
                }))
            }));
            var d = r(7613);
            Object.keys(d).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === d[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return d[e]
                    }
                }))
            }));
            var l = r(10605);
            Object.keys(l).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === l[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return l[e]
                    }
                }))
            }));
            var f = r(10612);
            Object.keys(f).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === f[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return f[e]
                    }
                }))
            }));
            var p = r(6109);
            Object.keys(p).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === p[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return p[e]
                    }
                }))
            }));
            var b = r(10635);
            Object.keys(b).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === b[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return b[e]
                    }
                }))
            }));
            var y = r(6296);
            Object.keys(y).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === y[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return y[e]
                    }
                }))
            }));
            var m = r(7641);
            Object.keys(m).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === m[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return m[e]
                    }
                }))
            }));
            var h = r(7663);
            Object.keys(h).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === h[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return h[e]
                    }
                }))
            }));
            var v = r(7638);
            Object.keys(v).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === v[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return v[e]
                    }
                }))
            }));
            var g = r(6297);
            Object.keys(g).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === g[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return g[e]
                    }
                }))
            }));
            var k = r(6756);
            Object.keys(k).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === k[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return k[e]
                    }
                }))
            }));
            var w = r(10641);
            Object.keys(w).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === w[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return w[e]
                    }
                }))
            }));
            var P = r(7652);
            Object.keys(P).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === P[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return P[e]
                    }
                }))
            }));
            var _ = r(6758);
            Object.keys(_).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === _[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return _[e]
                    }
                }))
            }));
            var O = r(6754);
            Object.keys(O).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === O[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return O[e]
                    }
                }))
            }));
            var j = r(10643);
            Object.keys(j).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === j[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return j[e]
                    }
                }))
            }));
            var A = r(10645);
            Object.keys(A).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === A[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return A[e]
                    }
                }))
            }));
            var E = r(10647);
            Object.keys(E).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === E[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return E[e]
                    }
                }))
            }))
        },
        10498: function(e, t, r) {
            "use strict";
            (0, r(7613).cryptoWaitReady)().catch(() => {})
        },
        10563: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "addressEq", {
                enumerable: !0,
                get: function() {
                    return b.addressEq
                }
            }), Object.defineProperty(t, "addressToEvm", {
                enumerable: !0,
                get: function() {
                    return n.addressToEvm
                }
            }), Object.defineProperty(t, "checkAddress", {
                enumerable: !0,
                get: function() {
                    return a.checkAddress
                }
            }), Object.defineProperty(t, "checkAddressChecksum", {
                enumerable: !0,
                get: function() {
                    return o.checkAddressChecksum
                }
            }), Object.defineProperty(t, "createKeyDerived", {
                enumerable: !0,
                get: function() {
                    return i.createKeyDerived
                }
            }), Object.defineProperty(t, "createKeyMulti", {
                enumerable: !0,
                get: function() {
                    return s.createKeyMulti
                }
            }), Object.defineProperty(t, "decodeAddress", {
                enumerable: !0,
                get: function() {
                    return c.decodeAddress
                }
            }), Object.defineProperty(t, "deriveAddress", {
                enumerable: !0,
                get: function() {
                    return u.deriveAddress
                }
            }), Object.defineProperty(t, "encodeAddress", {
                enumerable: !0,
                get: function() {
                    return d.encodeAddress
                }
            }), Object.defineProperty(t, "encodeDerivedAddress", {
                enumerable: !0,
                get: function() {
                    return l.encodeDerivedAddress
                }
            }), Object.defineProperty(t, "encodeMultiAddress", {
                enumerable: !0,
                get: function() {
                    return f.encodeMultiAddress
                }
            }), Object.defineProperty(t, "evmToAddress", {
                enumerable: !0,
                get: function() {
                    return p.evmToAddress
                }
            }), Object.defineProperty(t, "isAddress", {
                enumerable: !0,
                get: function() {
                    return y.isAddress
                }
            }), Object.defineProperty(t, "setSS58Format", {
                enumerable: !0,
                get: function() {
                    return m.setSS58Format
                }
            }), Object.defineProperty(t, "sortAddresses", {
                enumerable: !0,
                get: function() {
                    return h.sortAddresses
                }
            }), Object.defineProperty(t, "validateAddress", {
                enumerable: !0,
                get: function() {
                    return v.validateAddress
                }
            });
            var n = r(10564),
                a = r(10572),
                o = r(6747),
                s = r(7639),
                i = r(7640),
                c = r(5680),
                u = r(10573),
                d = r(5966),
                l = r(10586),
                f = r(10587),
                p = r(10588),
                b = r(10591),
                y = r(10592),
                m = r(10593),
                h = r(10594),
                v = r(7657)
        },
        10564: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.addressToEvm = function(e, t) {
                return (0, n.decodeAddress)(e, t).subarray(0, 20)
            };
            var n = r(5680)
        },
        10569: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.selectableNetworks = t.availableNetworks = t.allNetworks = void 0;
            var n = r(10570),
                a = r(10571);
            const o = [0, 2, 42],
                s = a.knownSubstrate.map(e => {
                    const t = e.network || "",
                        r = e;
                    return r.slip44 = n.knownLedger[t], r.hasLedgerSupport = !!r.slip44, r.genesisHash = n.knownGenesis[t] || [], r.icon = n.knownIcon[t] || "substrate", r.isIgnored = !!n.knownTestnet[t] || !(e.standardAccount && e.decimals && e.symbols) && 42 !== e.prefix, r
                });
            t.allNetworks = s;
            const i = s.filter(e => !e.isIgnored && !!e.network).sort((e, t) => o.includes(e.prefix) === o.includes(t.prefix) ? 0 : o.includes(e.prefix) ? -1 : o.includes(t.prefix) ? 1 : e.displayName.localeCompare(t.displayName));
            t.availableNetworks = i;
            const c = i.filter(e => e.genesisHash.length || 42 === e.prefix);
            t.selectableNetworks = c
        },
        10570: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.substrateRegistry = t.knownTestnet = t.knownLedger = t.knownIcon = t.knownGenesis = void 0;
            t.substrateRegistry = "https://raw.githubusercontent.com/paritytech/ss58-registry/main/ss58-registry.json";
            t.knownGenesis = {
                bifrost: ["0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed"],
                centrifuge: ["0x67dddf2673b69e5f875f6f25277495834398eafd67f492e09f3f3345e003d1b5"],
                "dock-mainnet": ["0xf73467c6544aa68df2ee546b135f955c46b90fa627e9b5d7935f41061bb8a5a9"],
                edgeware: ["0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b"],
                equilibrium: ["0x6f1a800de3daff7f5e037ddf66ab22ce03ab91874debeddb1086f5f7dbd48925"],
                hydradx: ["0xd2a620c27ec5cbc5621ff9a522689895074f7cca0d08e7134a7804e1a3ba86fc", "0x10af6e84234477d84dc572bac0789813b254aa490767ed06fb9591191d1073f9", "0x3d75507dd46301767e601265791da1d9cb47b6ebc94e87347b635e5bf58bd047", "0x0ed32bfcab4a83517fac88f2aa7cbc2f88d3ab93be9a12b6188a036bf8a943c2"],
                karura: ["0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b"],
                kulupu: ["0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba"],
                kusama: ["0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe", "0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636", "0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf"],
                "nodle-chain": ["0xa3d114c2b8d0627c1aa9b134eafcf7d05ca561fdc19fb388bb9457f81809fb23"],
                plasm: ["0x3e86364d4b4894021cb2a0390bcf2feb5517d5292f2de2bb9404227e908b0b8b"],
                polkadot: ["0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3"],
                polymesh: ["0x9deeb940c92ae02111c3bd5baca89970384f4c9849f02a1b2e53e66414d30f9f"],
                stafi: ["0x290a4149f09ea0e402c74c1c7e96ae4239588577fe78932f94f5404c68243d80"],
                statemine: ["0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a"],
                subsocial: ["0x0bd72c1c305172e1275278aaeb3f161e02eccb7a819e63f62d47bd53a28189f8"]
            };
            t.knownIcon = {
                centrifuge: "polkadot",
                kusama: "polkadot",
                polkadot: "polkadot",
                statemine: "polkadot",
                statemint: "polkadot",
                westmint: "polkadot"
            };
            t.knownLedger = {
                centrifuge: 747,
                "dock-mainnet": 594,
                edgeware: 523,
                equilibrium: 99999997,
                kusama: 434,
                "nodle-chain": 1003,
                polkadot: 354,
                polymesh: 595,
                statemine: 434
            };
            t.knownTestnet = {
                "": !0,
                "cess-testnet": !0,
                "dock-testnet": !0,
                jupiter: !0,
                "mathchain-testnet": !0,
                "zero-alphaville": !0
            }
        },
        10571: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.knownSubstrate = void 0;
            t.knownSubstrate = [{
                decimals: [10],
                displayName: "Polkadot Relay Chain",
                network: "polkadot",
                prefix: 0,
                standardAccount: "*25519",
                symbols: ["DOT"],
                website: "https://polkadot.network"
            }, {
                decimals: null,
                displayName: "Bare 32-bit Schnorr/Ristretto (S/R 25519) public key.",
                network: "BareSr25519",
                prefix: 1,
                standardAccount: "Sr25519",
                symbols: null,
                website: null
            }, {
                decimals: [12],
                displayName: "Kusama Relay Chain",
                network: "kusama",
                prefix: 2,
                standardAccount: "*25519",
                symbols: ["KSM"],
                website: "https://kusama.network"
            }, {
                decimals: null,
                displayName: "Bare 32-bit Ed25519 public key.",
                network: "BareEd25519",
                prefix: 3,
                standardAccount: "Ed25519",
                symbols: null,
                website: null
            }, {
                decimals: null,
                displayName: "Katal Chain",
                network: "katalchain",
                prefix: 4,
                standardAccount: "*25519",
                symbols: null,
                website: null
            }, {
                decimals: [15],
                displayName: "Plasm Network",
                network: "plasm",
                prefix: 5,
                standardAccount: "*25519",
                symbols: ["PLM"],
                website: "https://plasmnet.io"
            }, {
                decimals: [12],
                displayName: "Bifrost",
                network: "bifrost",
                prefix: 6,
                standardAccount: "*25519",
                symbols: ["BNC"],
                website: "https://bifrost.finance/"
            }, {
                decimals: [18],
                displayName: "Edgeware",
                network: "edgeware",
                prefix: 7,
                standardAccount: "*25519",
                symbols: ["EDG"],
                website: "https://edgewa.re"
            }, {
                decimals: [12],
                displayName: "Karura",
                network: "karura",
                prefix: 8,
                standardAccount: "*25519",
                symbols: ["KAR"],
                website: "https://karura.network/"
            }, {
                decimals: [18],
                displayName: "Laminar Reynolds Canary",
                network: "reynolds",
                prefix: 9,
                standardAccount: "*25519",
                symbols: ["REY"],
                website: "http://laminar.network/"
            }, {
                decimals: [12],
                displayName: "Acala",
                network: "acala",
                prefix: 10,
                standardAccount: "*25519",
                symbols: ["ACA"],
                website: "https://acala.network/"
            }, {
                decimals: [18],
                displayName: "Laminar",
                network: "laminar",
                prefix: 11,
                standardAccount: "*25519",
                symbols: ["LAMI"],
                website: "http://laminar.network/"
            }, {
                decimals: [6],
                displayName: "Polymesh",
                network: "polymesh",
                prefix: 12,
                standardAccount: "*25519",
                symbols: ["POLYX"],
                website: "https://polymath.network/"
            }, {
                decimals: [12],
                displayName: "Integritee",
                network: "integritee",
                prefix: 13,
                standardAccount: "*25519",
                symbols: ["TEER"],
                website: "https://integritee.network"
            }, {
                decimals: [0],
                displayName: "Totem",
                network: "totem",
                prefix: 14,
                standardAccount: "*25519",
                symbols: ["XTX"],
                website: "https://totemaccounting.com"
            }, {
                decimals: [12],
                displayName: "Synesthesia",
                network: "synesthesia",
                prefix: 15,
                standardAccount: "*25519",
                symbols: ["SYN"],
                website: "https://synesthesia.network/"
            }, {
                decimals: [12],
                displayName: "Kulupu",
                network: "kulupu",
                prefix: 16,
                standardAccount: "*25519",
                symbols: ["KLP"],
                website: "https://kulupu.network/"
            }, {
                decimals: null,
                displayName: "Dark Mainnet",
                network: "dark",
                prefix: 17,
                standardAccount: "*25519",
                symbols: null,
                website: null
            }, {
                decimals: [9, 9],
                displayName: "Darwinia Network",
                network: "darwinia",
                prefix: 18,
                standardAccount: "*25519",
                symbols: ["RING", "KTON"],
                website: "https://darwinia.network/"
            }, {
                decimals: [12],
                displayName: "GeekCash",
                network: "geek",
                prefix: 19,
                standardAccount: "*25519",
                symbols: ["GEEK"],
                website: "https://geekcash.org"
            }, {
                decimals: [12],
                displayName: "Stafi",
                network: "stafi",
                prefix: 20,
                standardAccount: "*25519",
                symbols: ["FIS"],
                website: "https://stafi.io"
            }, {
                decimals: [6],
                displayName: "Dock Testnet",
                network: "dock-testnet",
                prefix: 21,
                standardAccount: "*25519",
                symbols: ["DCK"],
                website: "https://dock.io"
            }, {
                decimals: [6],
                displayName: "Dock Mainnet",
                network: "dock-mainnet",
                prefix: 22,
                standardAccount: "*25519",
                symbols: ["DCK"],
                website: "https://dock.io"
            }, {
                decimals: null,
                displayName: "ShiftNrg",
                network: "shift",
                prefix: 23,
                standardAccount: "*25519",
                symbols: null,
                website: null
            }, {
                decimals: [18],
                displayName: "ZERO",
                network: "zero",
                prefix: 24,
                standardAccount: "*25519",
                symbols: ["PLAY"],
                website: "https://zero.io"
            }, {
                decimals: [18],
                displayName: "ZERO Alphaville",
                network: "zero-alphaville",
                prefix: 25,
                standardAccount: "*25519",
                symbols: ["PLAY"],
                website: "https://zero.io"
            }, {
                decimals: [10],
                displayName: "Jupiter",
                network: "jupiter",
                prefix: 26,
                standardAccount: "*25519",
                symbols: ["jDOT"],
                website: "https://jupiter.patract.io"
            }, {
                decimals: null,
                displayName: "Subsocial",
                network: "subsocial",
                prefix: 28,
                standardAccount: "*25519",
                symbols: null,
                website: null
            }, {
                decimals: [18],
                displayName: "Dhiway CORD Network",
                network: "cord",
                prefix: 29,
                standardAccount: "*25519",
                symbols: ["DCU"],
                website: "https://dhiway.com/"
            }, {
                decimals: [12],
                displayName: "Phala Network",
                network: "phala",
                prefix: 30,
                standardAccount: "*25519",
                symbols: ["PHA"],
                website: "https://phala.network"
            }, {
                decimals: [12],
                displayName: "Litentry Network",
                network: "litentry",
                prefix: 31,
                standardAccount: "*25519",
                symbols: ["LIT"],
                website: "https://litentry.com/"
            }, {
                decimals: [9],
                displayName: "Robonomics",
                network: "robonomics",
                prefix: 32,
                standardAccount: "*25519",
                symbols: ["XRT"],
                website: "https://robonomics.network"
            }, {
                decimals: null,
                displayName: "DataHighway",
                network: "datahighway",
                prefix: 33,
                standardAccount: "*25519",
                symbols: null,
                website: null
            }, {
                decimals: [12],
                displayName: "Ares Protocol",
                network: "ares",
                prefix: 34,
                standardAccount: "*25519",
                symbols: ["ARES"],
                website: "https://www.aresprotocol.com/"
            }, {
                decimals: [15],
                displayName: "Valiu Liquidity Network",
                network: "vln",
                prefix: 35,
                standardAccount: "*25519",
                symbols: ["USDv"],
                website: "https://valiu.com/"
            }, {
                decimals: [18],
                displayName: "Centrifuge Chain",
                network: "centrifuge",
                prefix: 36,
                standardAccount: "*25519",
                symbols: ["CFG"],
                website: "https://centrifuge.io/"
            }, {
                decimals: [18],
                displayName: "Nodle Chain",
                network: "nodle",
                prefix: 37,
                standardAccount: "*25519",
                symbols: ["NODL"],
                website: "https://nodle.io/"
            }, {
                decimals: [18],
                displayName: "KILT Chain",
                network: "kilt",
                prefix: 38,
                standardAccount: "*25519",
                symbols: ["KILT"],
                website: "https://kilt.io/"
            }, {
                decimals: [18],
                displayName: "MathChain mainnet",
                network: "mathchain",
                prefix: 39,
                standardAccount: "*25519",
                symbols: ["MATH"],
                website: "https://mathwallet.org"
            }, {
                decimals: [18],
                displayName: "MathChain testnet",
                network: "mathchain-testnet",
                prefix: 40,
                standardAccount: "*25519",
                symbols: ["MATH"],
                website: "https://mathwallet.org"
            }, {
                decimals: null,
                displayName: "Polimec Chain",
                network: "poli",
                prefix: 41,
                standardAccount: "*25519",
                symbols: null,
                website: "https://polimec.io/"
            }, {
                decimals: null,
                displayName: "Substrate",
                network: "substrate",
                prefix: 42,
                standardAccount: "*25519",
                symbols: null,
                website: "https://substrate.io/"
            }, {
                decimals: null,
                displayName: "Bare 32-bit ECDSA SECP-256k1 public key.",
                network: "BareSecp256k1",
                prefix: 43,
                standardAccount: "secp256k1",
                symbols: null,
                website: null
            }, {
                decimals: [8],
                displayName: "ChainX",
                network: "chainx",
                prefix: 44,
                standardAccount: "*25519",
                symbols: ["PCX"],
                website: "https://chainx.org/"
            }, {
                decimals: [12, 12],
                displayName: "UniArts Network",
                network: "uniarts",
                prefix: 45,
                standardAccount: "*25519",
                symbols: ["UART", "UINK"],
                website: "https://uniarts.me"
            }, {
                decimals: null,
                displayName: "This prefix is reserved.",
                network: "reserved46",
                prefix: 46,
                standardAccount: null,
                symbols: null,
                website: null
            }, {
                decimals: null,
                displayName: "This prefix is reserved.",
                network: "reserved47",
                prefix: 47,
                standardAccount: null,
                symbols: null,
                website: null
            }, {
                decimals: [12],
                displayName: "Neatcoin Mainnet",
                network: "neatcoin",
                prefix: 48,
                standardAccount: "*25519",
                symbols: ["NEAT"],
                website: "https://neatcoin.org"
            }, {
                decimals: [12],
                displayName: "Picasso",
                network: "picasso",
                prefix: 49,
                standardAccount: "*25519",
                symbols: ["PICA"],
                website: "https://picasso.composable.finance"
            }, {
                decimals: [12],
                displayName: "Composable",
                network: "composable",
                prefix: 50,
                standardAccount: "*25519",
                symbols: ["LAYR"],
                website: "https://composable.finance"
            }, {
                decimals: [12],
                displayName: "HydraDX",
                network: "hydradx",
                prefix: 63,
                standardAccount: "*25519",
                symbols: ["HDX"],
                website: "https://hydradx.io"
            }, {
                decimals: [18],
                displayName: "AvN Mainnet",
                network: "aventus",
                prefix: 65,
                standardAccount: "*25519",
                symbols: ["AVT"],
                website: "https://aventus.io"
            }, {
                decimals: [12],
                displayName: "Crust Network",
                network: "crust",
                prefix: 66,
                standardAccount: "*25519",
                symbols: ["CRU"],
                website: "https://crust.network"
            }, {
                decimals: [0, 9, 9, 9, 9, 9, 9, 9],
                displayName: "Equilibrium Network",
                network: "equilibrium",
                prefix: 67,
                standardAccount: "*25519",
                symbols: ["Unknown", "USD", "EQ", "ETH", "BTC", "EOS", "DOT", "CRV"],
                website: "https://equilibrium.io"
            }, {
                decimals: [18],
                displayName: "SORA Network",
                network: "sora",
                prefix: 69,
                standardAccount: "*25519",
                symbols: ["XOR"],
                website: "https://sora.org"
            }, {
                decimals: [10],
                displayName: "Zeitgeist",
                network: "zeitgeist",
                prefix: 73,
                standardAccount: "*25519",
                symbols: ["ZTG"],
                website: "https://zeitgeist.pm"
            }, {
                decimals: [12],
                displayName: "Manta network",
                network: "manta",
                prefix: 77,
                standardAccount: "*25519",
                symbols: ["MA"],
                website: "https://manta.network"
            }, {
                decimals: [12],
                displayName: "Calamari: Manta Canary Network",
                network: "calamari",
                prefix: 78,
                standardAccount: "*25519",
                symbols: ["KMA"],
                website: "https://manta.network"
            }, {
                decimals: [12],
                displayName: "Polkadex Mainnet",
                network: "polkadex",
                prefix: 88,
                standardAccount: "*25519",
                symbols: ["PDEX"],
                website: "https://polkadex.trade"
            }, {
                decimals: [18],
                displayName: "PolkaSmith Canary Network",
                network: "polkasmith",
                prefix: 98,
                standardAccount: "*25519",
                symbols: ["PKS"],
                website: "https://polkafoundry.com"
            }, {
                decimals: [18],
                displayName: "PolkaFoundry Network",
                network: "polkafoundry",
                prefix: 99,
                standardAccount: "*25519",
                symbols: ["PKF"],
                website: "https://polkafoundry.com"
            }, {
                decimals: [18],
                displayName: "OriginTrail Parachain",
                network: "origintrail-parachain",
                prefix: 101,
                standardAccount: "secp256k1",
                symbols: ["TRAC"],
                website: "https://origintrail.io"
            }, {
                decimals: [12],
                displayName: "Heiko",
                network: "heiko",
                prefix: 110,
                standardAccount: "*25519",
                symbols: ["HKO"],
                website: "https://parallel.fi/"
            }, {
                decimals: null,
                displayName: "Integritee Incognito",
                network: "integritee-incognito",
                prefix: 113,
                standardAccount: "*25519",
                symbols: null,
                website: "https://integritee.network"
            }, {
                decimals: [18],
                displayName: "Clover Finance",
                network: "clover",
                prefix: 128,
                standardAccount: "*25519",
                symbols: ["CLV"],
                website: "https://clover.finance"
            }, {
                decimals: [18],
                displayName: "Altair",
                network: "altair",
                prefix: 136,
                standardAccount: "*25519",
                symbols: ["AIR"],
                website: "https://centrifuge.io/"
            }, {
                decimals: [12],
                displayName: "Parallel",
                network: "parallel",
                prefix: 172,
                standardAccount: "*25519",
                symbols: ["PARA"],
                website: "https://parallel.fi/"
            }, {
                decimals: [18],
                displayName: "Social Network",
                network: "social-network",
                prefix: 252,
                standardAccount: "*25519",
                symbols: ["NET"],
                website: "https://social.network"
            }, {
                decimals: [15],
                displayName: "QUARTZ by UNIQUE",
                network: "quartz_mainnet",
                prefix: 255,
                standardAccount: "*25519",
                symbols: ["QTZ"],
                website: "https://unique.network"
            }, {
                decimals: [18],
                displayName: "Moonbeam",
                network: "moonbeam",
                prefix: 1284,
                standardAccount: "secp256k1",
                symbols: ["GLMR"],
                website: "https://moonbeam.network"
            }, {
                decimals: [18],
                displayName: "Moonriver",
                network: "moonriver",
                prefix: 1285,
                standardAccount: "secp256k1",
                symbols: ["MOVR"],
                website: "https://moonbeam.network"
            }, {
                decimals: [12],
                displayName: "Basilisk",
                network: "basilisk",
                prefix: 10041,
                standardAccount: "*25519",
                symbols: ["BSX"],
                website: "https://bsx.fi"
            }, {
                decimals: [12],
                displayName: "CESS Testnet",
                network: "cess-testnet",
                prefix: 10042,
                standardAccount: "*25519",
                symbols: ["TCESS"],
                website: "https://cess.cloud"
            }, {
                decimals: [12],
                displayName: "CESS",
                network: "cess",
                prefix: 10043,
                standardAccount: "*25519",
                symbols: ["CESS"],
                website: "https://cess.cloud"
            }, {
                decimals: [18],
                displayName: "Automata ContextFree",
                network: "contextfree",
                prefix: 11820,
                standardAccount: "*25519",
                symbols: ["CTX"],
                website: "https://ata.network"
            }]
        },
        10572: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkAddress = function(e, t) {
                let r;
                try {
                    r = (0, n.base58Decode)(e)
                } catch (e) {
                    return [!1, e.message]
                }
                const [s, , , i] = (0, a.checkAddressChecksum)(r);
                if (i !== t) return [!1, `Prefix mismatch, expected ${t}, found ${i}`];
                if (!o.defaults.allowedEncodedLengths.includes(r.length)) return [!1, "Invalid decoded address length"];
                return [s, s ? null : "Invalid decoded address checksum"]
            };
            var n = r(6745),
                a = r(6747),
                o = r(6295)
        },
        10573: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deriveAddress = function(e, t, r) {
                const {
                    path: c
                } = (0, a.keyExtractPath)(t);
                return (0, n.assert)(c.length && !c.some(e => e.isHard), "Expected suri to contain a combination of non-hard paths"), (0, i.encodeAddress)(c.reduce((e, t) => (0, o.schnorrkelDerivePublic)(e, t.chainCode), (0, s.decodeAddress)(e)), r)
            };
            var n = r(5467),
                a = r(7641),
                o = r(7652),
                s = r(5680),
                i = r(5966)
        },
        10574: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DeriveJunction = void 0;
            var a = n(r(5471)),
                o = n(r(5472)),
                s = r(5467),
                i = r(5757);
            const c = /^\d+$/,
                u = {
                    bitLength: 256,
                    isLe: !0
                };
            var d = (0, o.default)("chainCode"),
                l = (0, o.default)("isHard");
            class DeriveJunction {
                constructor() {
                    Object.defineProperty(this, d, {
                        writable: !0,
                        value: new Uint8Array(32)
                    }), Object.defineProperty(this, l, {
                        writable: !0,
                        value: !1
                    })
                }
                static from(e) {
                    const t = new DeriveJunction,
                        [r, n] = e.startsWith("/") ? [e.substr(1), !0] : [e, !1];
                    return t.soft(c.test(r) ? new s.BN(r, 10) : r), n ? t.harden() : t
                }
                get chainCode() {
                    return (0, a.default)(this, d)[d]
                }
                get isHard() {
                    return (0, a.default)(this, l)[l]
                }
                get isSoft() {
                    return !(0, a.default)(this, l)[l]
                }
                hard(e) {
                    return this.soft(e).harden()
                }
                harden() {
                    return (0, a.default)(this, l)[l] = !0, this
                }
                soft(e) {
                    return (0, s.isNumber)(e) || (0, s.isBn)(e) || (0, s.isBigInt)(e) ? this.soft((0, s.bnToU8a)(e, u)) : (0, s.isHex)(e) ? this.soft((0, s.hexToU8a)(e)) : (0, s.isString)(e) ? this.soft((0, s.compactAddLength)((0, s.stringToU8a)(e))) : e.length > 32 ? this.soft((0, i.blake2AsU8a)(e)) : ((0, a.default)(this, d)[d].fill(0), (0, a.default)(this, d)[d].set(e, 0), this)
                }
                soften() {
                    return (0, a.default)(this, l)[l] = !1, this
                }
            }
            t.DeriveJunction = DeriveJunction
        },
        10575: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.keyExtractSuri = function(e) {
                const t = e.match(o);
                (0, n.assert)(!(0, n.isNull)(t), "Unable to match provided value to a secret URI");
                const [, r, , s, , , i] = t, {
                    path: c
                } = (0, a.keyExtractPath)(s);
                return {
                    derivePath: s,
                    password: i,
                    path: c,
                    phrase: r
                }
            };
            var n = r(5467),
                a = r(7642);
            const o = /^(\w+( \w+)*)((\/\/?[^/]+)*)(\/\/\/(.*))?$/
        },
        10576: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.keyFromPath = function(e, t, r) {
                const n = s[r];
                return t.reduce((e, t) => n(e, t), e)
            };
            var n = r(7643),
                a = r(7646),
                o = r(7647);
            const s = {
                ecdsa: n.keyHdkdEcdsa,
                ed25519: a.keyHdkdEd25519,
                ethereum: n.keyHdkdEcdsa,
                sr25519: o.keyHdkdSr25519
            }
        },
        10577: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1DeriveHard = function(e, t) {
                return (0, a.blake2AsU8a)((0, n.u8aConcat)(o, e, t), 256)
            };
            var n = r(5467),
                a = r(5757);
            const o = (0, n.compactAddLength)((0, n.stringToU8a)("Secp256k1HDKD"))
        },
        10578: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclDeriveHard = function(e, t) {
                return (0, a.blake2AsU8a)((0, n.u8aConcat)(o, e, t))
            };
            var n = r(5467),
                a = r(5757);
            const o = (0, n.compactAddLength)((0, n.stringToU8a)("Ed25519HDKD"))
        },
        10579: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schnorrkelKeypairToU8a = function({
                publicKey: e,
                secretKey: t
            }) {
                return (0, n.u8aConcat)(t, e).slice()
            };
            var n = r(5467)
        },
        10580: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schnorrkelAgreement = function(e, t) {
                const r = (0, n.u8aToU8a)(e),
                    o = (0, n.u8aToU8a)(t);
                return (0, n.assert)(32 === o.length, () => `Invalid publicKey, received ${o.length} bytes, expected 32`), (0, n.assert)(64 === r.length, () => `Invalid secretKey, received ${r.length} bytes, expected 64`), (0, a.sr25519Agree)(o, r)
            };
            var n = r(5467),
                a = r(5520)
        },
        10581: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schnorrkelDerivePublic = function(e, t) {
                const r = (0, n.u8aToU8a)(e);
                return (0, n.assert)(32 === r.length, () => `Invalid publicKey, received ${r.length} bytes, expected 32`), (0, a.sr25519DerivePublicSoft)(r, (0, n.u8aToU8a)(t))
            };
            var n = r(5467),
                a = r(5520)
        },
        10582: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schnorrkelKeypairFromSeed = function(e) {
                const t = (0, n.u8aToU8a)(e);
                return (0, n.assert)(32 === t.length, () => "Expected a seed matching 32 bytes, found " + t.length), (0, o.schnorrkelKeypairFromU8a)((0, a.sr25519KeypairFromSeed)(t))
            };
            var n = r(5467),
                a = r(5520),
                o = r(7650)
        },
        10583: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schnorrkelSign = function(e, {
                publicKey: t,
                secretKey: r
            }) {
                return (0, n.assert)(32 === (null == t ? void 0 : t.length), "Expected a valid publicKey, 32-bytes"), (0, n.assert)(64 === (null == r ? void 0 : r.length), "Expected a valid secretKey, 64-bytes"), (0, a.sr25519Sign)(t, r, (0, n.u8aToU8a)(e))
            };
            var n = r(5467),
                a = r(5520)
        },
        10584: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schnorrkelVrfSign = function(e, {
                secretKey: t
            }, r = o, s = o) {
                return (0, n.assert)(64 === (null == t ? void 0 : t.length), "Invalid secretKey, expected 64-bytes"), (0, a.vrfSign)(t, (0, n.u8aToU8a)(r), (0, n.u8aToU8a)(e), (0, n.u8aToU8a)(s))
            };
            var n = r(5467),
                a = r(5520);
            const o = new Uint8Array
        },
        10585: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schnorrkelVrfVerify = function(e, t, r, s = o, i = o) {
                const c = (0, n.u8aToU8a)(r),
                    u = (0, n.u8aToU8a)(t);
                return (0, n.assert)(32 === c.length, "Invalid publicKey, expected 32-bytes"), (0, n.assert)(96 === u.length, "Invalid vrfSign output, expected 96 bytes"), (0, a.vrfVerify)(c, (0, n.u8aToU8a)(s), (0, n.u8aToU8a)(e), (0, n.u8aToU8a)(i), u)
            };
            var n = r(5467),
                a = r(5520);
            const o = new Uint8Array
        },
        10586: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.encodeDerivedAddress = function(e, t, r) {
                return (0, a.encodeAddress)((0, o.createKeyDerived)((0, n.decodeAddress)(e), t), r)
            };
            var n = r(5680),
                a = r(5966),
                o = r(7640)
        },
        10587: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.encodeMultiAddress = function(e, t, r) {
                return (0, n.encodeAddress)((0, a.createKeyMulti)(e, t), r)
            };
            var n = r(5966),
                a = r(7639)
        },
        10588: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.evmToAddress = function(e, t, r = "blake2") {
                const s = (0, n.u8aConcat)("evm:", e);
                if (24 !== s.length) throw new Error((t => `Converting ${e}: ${t}`)("Invalid evm address length"));
                const i = (0, a.secp256k1Hasher)(r, s);
                return (0, o.encodeAddress)(i, t)
            };
            var n = r(5467),
                a = r(6749),
                o = r(5966)
        },
        10589: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.blake2AsHex = function(e, t = 256, r, o = !1) {
                return (0, n.u8aToHex)((0, a.blake2AsU8a)(e, t, r, o))
            };
            var n = r(5467),
                a = r(5757)
        },
        10590: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.keccakAsHex = function(e, t) {
                return (0, n.u8aToHex)((0, a.keccakAsU8a)(e, t))
            };
            var n = r(5467),
                a = r(7656)
        },
        10591: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.addressEq = function(e, t) {
                return (0, n.u8aEq)((0, a.decodeAddress)(e), (0, a.decodeAddress)(t))
            };
            var n = r(5467),
                a = r(5680)
        },
        10592: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isAddress = function(e, t, r) {
                try {
                    return (0, n.validateAddress)(e, t, r)
                } catch (e) {
                    return !1
                }
            };
            var n = r(7657)
        },
        10593: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setSS58Format = function(e) {
                o.warn("Global setting of the ss58Format is deprecated and not recommended. Set format on the keyring (if used) or as pat of the address encode function"), a.defaults.prefix = e
            };
            var n = r(5467),
                a = r(6295);
            const o = (0, n.logger)("setSS58Format")
        },
        10594: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sortAddresses = function(e, t) {
                return (0, n.u8aSorted)(e.map(e => (0, a.decodeAddress)(e))).map(e => (0, o.encodeAddress)(e, t))
            };
            var n = r(5467),
                a = r(5680),
                o = r(5966)
        },
        10595: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "base32Decode", {
                enumerable: !0,
                get: function() {
                    return n.base32Decode
                }
            }), Object.defineProperty(t, "base32Encode", {
                enumerable: !0,
                get: function() {
                    return a.base32Encode
                }
            }), Object.defineProperty(t, "base32Validate", {
                enumerable: !0,
                get: function() {
                    return o.base32Validate
                }
            }), Object.defineProperty(t, "isBase32", {
                enumerable: !0,
                get: function() {
                    return s.isBase32
                }
            });
            var n = r(10596),
                a = r(10597),
                o = r(6751),
                s = r(7658)
        },
        10596: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base32Decode = function(e, t = !1) {
                (0, o.base32Validate)(e, t);
                const r = t ? 1 : 0,
                    [i, c, u] = function(e, t, r) {
                        let n = 0,
                            o = 0,
                            i = 0;
                        for (let c = r; c < t.length; c++) o = o << a.BITS_PER_CHAR | s[t[c]], n += a.BITS_PER_CHAR, n >= 8 && (n -= 8, e[i++] = 255 & o >> n);
                        return [e, n, o]
                    }(new Uint8Array((e.length - r) * a.BITS_PER_CHAR / 8 | 0), e, r);
                return (0, n.assert)(!(c >= a.BITS_PER_CHAR || 255 & u << 8 - c), "Unexpected end of data"), i
            };
            var n = r(5467),
                a = r(6750),
                o = r(6751);
            const s = a.BASE32_ALPHABET.split("").reduce((e, t, r) => (e[t] = r, e), {})
        },
        10597: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base32Encode = function(e, t = !1) {
                const r = (0, n.u8aToU8a)(e);
                let s = "",
                    i = 0,
                    c = 0;
                for (let e = 0; e < r.length; ++e)
                    for (c = c << 8 | r[e], i += 8; i > a.BITS_PER_CHAR;) i -= a.BITS_PER_CHAR, s += a.BASE32_ALPHABET[o & c >> i];
                i && (s += a.BASE32_ALPHABET[o & c << a.BITS_PER_CHAR - i]);
                return t ? "b" + s : s
            };
            var n = r(5467),
                a = r(6750);
            const o = (1 << a.BITS_PER_CHAR) - 1
        },
        10598: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "base58Decode", {
                enumerable: !0,
                get: function() {
                    return n.base58Decode
                }
            }), Object.defineProperty(t, "base58Encode", {
                enumerable: !0,
                get: function() {
                    return a.base58Encode
                }
            }), Object.defineProperty(t, "base58Validate", {
                enumerable: !0,
                get: function() {
                    return o.base58Validate
                }
            }), Object.defineProperty(t, "isBase58", {
                enumerable: !0,
                get: function() {
                    return s.isBase58
                }
            });
            var n = r(6745),
                a = r(7654),
                o = r(6294),
                s = r(10599)
        },
        10599: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBase58 = function(e, t) {
                return (0, n.testValidator)(a.base58Validate, e, t)
            };
            var n = r(7658),
                a = r(6294)
        },
        10600: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base64Decode = function(e) {
                return (0, o.base64Validate)(e), a.default.toByteArray(e)
            };
            var a = n(r(2342)),
                o = r(6753)
        },
        10601: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base64Encode = function(e) {
                return a.default.fromByteArray((0, o.u8aToU8a)(e))
            };
            var a = n(r(2342)),
                o = r(5467)
        },
        10602: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base64Pad = function(e) {
                return e.padEnd(e.length + e.length % 4, "=")
            }
        },
        10603: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base64Trim = function(e) {
                for (; e.length && "=" === e[e.length - 1];) e = e.slice(0, -1);
                return e
            }
        },
        10604: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBase64 = function(e) {
                try {
                    return (0, n.base64Validate)(e)
                } catch (e) {
                    return !1
                }
            };
            var n = r(6753)
        },
        10605: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ethereumEncode", {
                enumerable: !0,
                get: function() {
                    return n.ethereumEncode
                }
            }), Object.defineProperty(t, "isEthereumAddress", {
                enumerable: !0,
                get: function() {
                    return a.isEthereumAddress
                }
            }), Object.defineProperty(t, "isEthereumChecksum", {
                enumerable: !0,
                get: function() {
                    return o.isEthereumChecksum
                }
            });
            var n = r(10606),
                a = r(10611),
                o = r(7661)
        },
        10606: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ethereumEncode = function(e) {
                if (!e) return "0x";
                const t = (0, n.u8aToU8a)(e);
                (0, n.assert)([20, 32, 33, 65].includes(t.length), "Invalid address or publicKey passed");
                const r = (0, n.u8aToHex)(function(e) {
                        [33, 65].includes(e.length) && (e = (0, a.keccakAsU8a)((0, o.secp256k1Expand)(e)));
                        return e.slice(-20)
                    }(t), -1, !1),
                    s = (0, n.u8aToHex)((0, a.keccakAsU8a)(r), -1, !1);
                let i = "";
                for (let e = 0; e < 40; e++) i = `${i}${parseInt(s[e],16)>7?r[e].toUpperCase():r[e]}`;
                return "0x" + i
            };
            var n = r(5467),
                a = r(6296),
                o = r(6754)
        },
        10607: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1Compress = function(e) {
                return (0, n.assert)([33, 65].includes(e.length), "Invalid publicKey provided"), new Uint8Array(a.secp256k1.keyFromPublic(e).getPublic().encodeCompressed())
            };
            var n = r(5467),
                a = r(5882)
        },
        10608: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1Recover = function(e, t, r) {
                return new Uint8Array(n.secp256k1.recoverPubKey(e, {
                    r: t.slice(0, 32),
                    s: t.slice(32, 64)
                }, r).encode(null, !0))
            };
            var n = r(5882)
        },
        10609: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1Sign = function(e, {
                secretKey: t
            }, r = "blake2") {
                (0, n.assert)(32 === (null == t ? void 0 : t.length), "Expected valid secp256k1 secretKey, 32-bytes");
                const s = o.secp256k1.keyFromPrivate(t).sign((0, a.secp256k1Hasher)(r, e));
                return (0, n.u8aConcat)((0, n.bnToU8a)(s.r, o.EXPAND_OPT), (0, n.bnToU8a)(s.s, o.EXPAND_OPT), new Uint8Array([s.recoveryParam || 0]))
            };
            var n = r(5467),
                a = r(6749),
                o = r(5882)
        },
        10610: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1PrivateKeyTweakAdd = function(e, t) {
                (0, n.assert)((0, n.isU8a)(e) && 32 === e.length, "Expected seckey to be an Uint8Array with length 32"), (0, n.assert)((0, n.isU8a)(t) && 32 === t.length, "Expected tweak to be an Uint8Array with length 32");
                const r = new n.BN(t);
                (0, n.assert)(r.cmp(a.n) < 0, "Tweak parameter is out of range"), r.iadd(new n.BN(e)), r.cmp(a.n) >= 0 && r.isub(a.n);
                return (0, n.assert)(!r.isZero(), "Invalid resulting private key"), (0, n.bnToU8a)(r, {
                    bitLength: 256,
                    isLe: !1
                })
            };
            var n = r(5467);
            const a = r(5882).secp256k1.curve
        },
        10611: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isEthereumAddress = function(e) {
                if (!e || 42 !== e.length || !(0, n.isHex)(e)) return !1;
                if (/^(0x)?[0-9a-f]{40}$/.test(e) || /^(0x)?[0-9A-F]{40}$/.test(e)) return !0;
                return (0, a.isEthereumChecksum)(e)
            };
            var n = r(5467),
                a = r(7661)
        },
        10612: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "hdEthereum", {
                enumerable: !0,
                get: function() {
                    return n.hdEthereum
                }
            }), Object.defineProperty(t, "hdLedger", {
                enumerable: !0,
                get: function() {
                    return a.hdLedger
                }
            }), Object.defineProperty(t, "hdValidatePath", {
                enumerable: !0,
                get: function() {
                    return o.hdValidatePath
                }
            });
            var n = r(10613),
                a = r(10616),
                o = r(6755)
        },
        10613: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hdEthereum = function(e, t = "") {
                const r = (0, a.hmacSha512)(i, e),
                    u = c(r.slice(0, 32), r.slice(32));
                if (!t || "m" === t || "M" === t || "m'" === t || "M'" === t) return u;
                return (0, n.assert)((0, s.hdValidatePath)(t), "Invalid derivation path"), t.split("/").slice(1).reduce((e, t) => function e(t, r) {
                    const i = (0, n.bnToU8a)(r, {
                            bitLength: 32,
                            isLe: !1
                        }),
                        u = r >= s.HARDENED ? (0, n.u8aConcat)(new Uint8Array(1), t.secretKey, i) : (0, n.u8aConcat)(t.publicKey, i);
                    try {
                        const e = (0, a.hmacSha512)(t.chainCode, u);
                        return c((0, o.secp256k1PrivateKeyTweakAdd)(t.secretKey, e.slice(0, 32)), e.slice(32))
                    } catch (n) {
                        return e(t, r + 1)
                    }
                }(e, parseInt(t, 10) + (t.length > 1 && t.endsWith("'") ? s.HARDENED : 0)), u)
            };
            var n = r(5467),
                a = r(6109),
                o = r(6754),
                s = r(6755);
            const i = (0, n.stringToU8a)("Bitcoin seed");

            function c(e, t) {
                return {
                    chainCode: t,
                    publicKey: (0, o.secp256k1KeypairFromSeed)(e).publicKey,
                    secretKey: e
                }
            }
        },
        10614: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hmacSha256 = function(e, t) {
                return (0, n.hmacSha)(e, t, !1)
            };
            var n = r(7662)
        },
        10615: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hmacSha512 = function(e, t) {
                return (0, n.hmacSha)(e, t, !0)
            };
            var n = r(7662)
        },
        10616: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hdLedger = function(e, t) {
                const r = e.split(" ").map(e => e.trim()).filter(e => e);
                (0, n.assert)([12, 24, 25].includes(r.length), "Expected a mnemonic with 24 words (or 25 including a password)");
                const [u, d] = 25 === r.length ? [r.slice(0, 24).join(" "), r[24]] : [r.join(" "), ""];
                return (0, n.assert)((0, a.mnemonicValidate)(u), "Invalid mnemonic passed to ledger derivation"), (0, n.assert)((0, s.hdValidatePath)(t), "Invalid derivation path"), (0, o.naclKeypairFromSeed)(t.split("/").slice(1).map(e => parseInt(e.replace(/'$/, ""), 10)).map(e => e < s.HARDENED ? e + s.HARDENED : e).reduce((e, t) => (0, i.ledgerDerivePrivate)(e, t), (0, c.ledgerMaster)(u, d)).slice(0, 32))
            };
            var n = r(5467),
                a = r(7663),
                o = r(6297),
                s = r(6755),
                i = r(10633),
                c = r(10634)
        },
        10617: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mnemonicGenerate = function(e = 12, t = !1) {
                return (0, n.isReady)() && !t ? (0, n.bip39Generate)(e) : (0, a.generateMnemonic)(o[e])
            };
            var n = r(5520),
                a = r(6110);
            const o = {
                12: 128,
                15: 160,
                18: 192,
                21: 224,
                24: 256
            }
        },
        10618: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pbkdf2Encode = function(e, t = (0, o.randomAsU8a)(), r = 2048, i = !1) {
                const c = (0, n.u8aToU8a)(e),
                    u = (0, n.u8aToU8a)(t);
                return {
                    password: (0, a.isReady)() && !i ? (0, a.pbkdf2)(c, u, r) : (0, s.pbkdf2Sync)(c, u, r),
                    rounds: r,
                    salt: t
                }
            };
            var n = r(5467),
                a = r(5520),
                o = r(5883),
                s = r(10619)
        },
        10619: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pbkdf2Sync = function(e, t, r, o = 64) {
                let s = new Uint8Array,
                    i = 0;
                const c = (0, n.u8aConcat)(t, new Uint8Array(4));
                for (; s.length < o;) {
                    i++, c.set((0, n.bnToU8a)(i, {
                        bitLength: 32,
                        isLe: !1
                    }), t.length);
                    let o = (0, a.hmacSha512)(e, c);
                    const u = o;
                    let d = 0;
                    for (; ++d < r;) {
                        o = (0, a.hmacSha512)(e, o);
                        let t = -1;
                        for (; ++t < o.length;) u[t] ^= o[t]
                    }
                    s = (0, n.u8aConcat)(s, u)
                }
                return s.slice(0, o)
            };
            var n = r(5467),
                a = r(6109)
        },
        10620: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"]
        },
        10621: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mnemonicToLegacySeed = function(e, t = "", r = !1, i = 32) {
                if ((0, n.assert)((0, s.mnemonicValidate)(e), "Invalid bip39 mnemonic specified"), (0, n.assert)([32, 64].includes(i), () => `Invalid seed length ${i}, expected 32 or 64`), 32 === i) return (0, a.isReady)() && !r ? (0, a.bip39ToSeed)(e, t) : (0, o.mnemonicToSeedSync)(e, t).subarray(0, 32);
                if (64 === i) return (0, o.mnemonicToSeedSync)(e, t);
                return new Uint8Array
            };
            var n = r(5467),
                a = r(5520),
                o = r(6110),
                s = r(6757)
        },
        10622: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mnemonicToMiniSecret = function(e, t = "", r = !1) {
                if ((0, n.assert)((0, i.mnemonicValidate)(e), "Invalid bip39 mnemonic specified"), (0, a.isReady)() && !r) return (0, a.bip39ToMiniSecret)(e, t);
                const c = (0, s.mnemonicToEntropy)(e),
                    u = (0, n.stringToU8a)("mnemonic" + t);
                return (0, o.pbkdf2Encode)(c, u).password.slice(0, 32)
            };
            var n = r(5467),
                a = r(5520),
                o = r(6756),
                s = r(7664),
                i = r(6757)
        },
        10623: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclDecrypt = function(e, t, r) {
                return a.default.secretbox.open(e, t, r) || null
            };
            var a = n(r(73))
        },
        10624: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclEncrypt = function(e, t, r = (0, o.randomAsU8a)(24)) {
                return {
                    encrypted: a.default.secretbox(e, r, t),
                    nonce: r
                }
            };
            var a = n(r(73)),
                o = r(5883)
        },
        10625: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclKeypairFromRandom = function() {
                return a.default.sign.keyPair()
            };
            var a = n(r(73))
        },
        10626: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclKeypairFromSecret = function(e) {
                return a.default.sign.keyPair.fromSecretKey(e)
            };
            var a = n(r(73))
        },
        10627: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclKeypairFromString = function(e) {
                return (0, o.naclKeypairFromSeed)((0, a.blake2AsU8a)((0, n.stringToU8a)(e), 256))
            };
            var n = r(5467),
                a = r(5757),
                o = r(6748)
        },
        10628: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclSign = function(e, {
                publicKey: t,
                secretKey: r
            }, n = !1) {
                (0, o.assert)(r, "Expected a valid secretKey");
                const i = (0, o.u8aToU8a)(e);
                return (0, s.isReady)() && !n ? (0, s.ed25519Sign)(t, r.subarray(0, 32), i) : a.default.sign.detached(i, r)
            };
            var a = n(r(73)),
                o = r(5467),
                s = r(5520)
        },
        10629: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclBoxKeypairFromSecret = function(e) {
                return a.default.box.keyPair.fromSecretKey(e.slice(0, 32))
            };
            var a = n(r(73))
        },
        10630: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclOpen = function(e, t, r, n) {
                return a.default.box.open(e, t, r, n) || null
            };
            var a = n(r(73))
        },
        10631: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclSeal = function(e, t, r, n = (0, o.randomAsU8a)(24)) {
                return {
                    nonce: n,
                    sealed: a.default.box(e, n, r, t)
                }
            };
            var a = n(r(73)),
                o = r(5883)
        },
        10632: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.convertPublicKeyToCurve25519 = function(e) {
                return a.default.convertPublicKey(e)
            }, t.convertSecretKeyToCurve25519 = function(e) {
                return a.default.convertSecretKey(e)
            };
            var a = n(r(5909))
        },
        10633: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ledgerDerivePrivate = function(e, t) {
                const r = e.subarray(0, 32),
                    o = e.subarray(32, 64),
                    s = e.subarray(64, 96),
                    i = (0, n.u8aConcat)([0], r, o, (0, n.bnToU8a)(t, {
                        bitLength: 32,
                        isLe: !0
                    })),
                    c = (0, a.hmacSha512)(s, i);
                return i[0] = 1, (0, n.u8aConcat)((0, n.bnToU8a)((0, n.u8aToBn)(r, {
                    isLe: !0
                }).iadd((0, n.u8aToBn)(c.subarray(0, 28), {
                    isLe: !0
                }).imul(n.BN_EIGHT)), {
                    bitLength: 512,
                    isLe: !0
                }).subarray(0, 32), (0, n.bnToU8a)((0, n.u8aToBn)(o, {
                    isLe: !0
                }).iadd((0, n.u8aToBn)(c.subarray(32, 64), {
                    isLe: !0
                })), {
                    bitLength: 512,
                    isLe: !0
                }).subarray(0, 32), (0, a.hmacSha512)(s, i).subarray(32, 64))
            };
            var n = r(5467),
                a = r(6109)
        },
        10634: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ledgerMaster = function(e, t) {
                const r = (0, o.mnemonicToSeedSync)(e, t),
                    s = (0, a.hmacSha256)("ed25519 seed", new Uint8Array([1, ...r]));
                let i;
                for (; !i || 32 & i[31];) i = (0, a.hmacSha512)("ed25519 seed", i || r);
                return i[0] &= 248, i[31] &= 127, i[31] |= 64, (0, n.u8aConcat)(i, s)
            };
            var n = r(5467),
                a = r(6109),
                o = r(6110)
        },
        10635: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "jsonDecrypt", {
                enumerable: !0,
                get: function() {
                    return n.jsonDecrypt
                }
            }), Object.defineProperty(t, "jsonDecryptData", {
                enumerable: !0,
                get: function() {
                    return a.jsonDecryptData
                }
            }), Object.defineProperty(t, "jsonEncrypt", {
                enumerable: !0,
                get: function() {
                    return o.jsonEncrypt
                }
            }), Object.defineProperty(t, "jsonEncryptFormat", {
                enumerable: !0,
                get: function() {
                    return s.jsonEncryptFormat
                }
            });
            var n = r(10636),
                a = r(7666),
                o = r(10640),
                s = r(7669)
        },
        10636: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.jsonDecrypt = function({
                encoded: e,
                encoding: t
            }, r) {
                return (0, n.assert)(e, "No encrypted data available to decode"), (0, o.jsonDecryptData)((0, n.isHex)(e) ? (0, n.hexToU8a)(e) : (0, a.base64Decode)(e), r, Array.isArray(t.type) ? t.type : [t.type])
            };
            var n = r(5467),
                a = r(6752),
                o = r(7666)
        },
        10637: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.scryptEncode = function(e, t = (0, i.randomAsU8a)(), r = c.DEFAULT_PARAMS) {
                const n = (0, s.isReady)() ? (0, s.scrypt)((0, o.u8aToU8a)(e), t, Math.log2(r.N), r.r, r.p) : (0, o.bufferToU8a)((0, a.default)((0, o.u8aToBuffer)((0, o.u8aToU8a)(e)), (0, o.u8aToBuffer)(t), r.N, r.r, r.p, 64));
                return {
                    params: r,
                    password: n,
                    salt: t
                }
            };
            var a = n(r(5830)),
                o = r(5467),
                s = r(5520),
                i = r(5883),
                c = r(7667)
        },
        10638: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.scryptFromU8a = function(e) {
                const t = e.subarray(0, 32),
                    r = (0, n.u8aToBn)(e.subarray(32, 36), {
                        isLe: !0
                    }).toNumber(),
                    o = (0, n.u8aToBn)(e.subarray(36, 40), {
                        isLe: !0
                    }).toNumber(),
                    s = (0, n.u8aToBn)(e.subarray(40, 44), {
                        isLe: !0
                    }).toNumber();
                return (0, n.assert)(r === a.DEFAULT_PARAMS.N && o === a.DEFAULT_PARAMS.p && s === a.DEFAULT_PARAMS.r, "Invalid injected scrypt params found"), {
                    params: {
                        N: r,
                        p: o,
                        r: s
                    },
                    salt: t
                }
            };
            var n = r(5467),
                a = r(7667)
        },
        10639: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.scryptToU8a = function(e, {
                N: t,
                p: r,
                r: a
            }) {
                return (0, n.u8aConcat)(e, (0, n.bnToU8a)(t, {
                    bitLength: 32,
                    isLe: !0
                }), (0, n.bnToU8a)(r, {
                    bitLength: 32,
                    isLe: !0
                }), (0, n.bnToU8a)(a, {
                    bitLength: 32,
                    isLe: !0
                }))
            };
            var n = r(5467)
        },
        10640: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.jsonEncrypt = function(e, t, r) {
                let i = !1,
                    c = e;
                if (r) {
                    const {
                        params: e,
                        password: t,
                        salt: s
                    } = (0, o.scryptEncode)(r), {
                        encrypted: u,
                        nonce: d
                    } = (0, a.naclEncrypt)(c, t.subarray(0, 32));
                    i = !0, c = (0, n.u8aConcat)((0, o.scryptToU8a)(s, e), d, u)
                }
                return (0, s.jsonEncryptFormat)(c, t, i)
            };
            var n = r(5467),
                a = r(6297),
                o = r(6758),
                s = r(7669)
        },
        10641: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "randomAsHex", {
                enumerable: !0,
                get: function() {
                    return n.randomAsHex
                }
            }), Object.defineProperty(t, "randomAsNumber", {
                enumerable: !0,
                get: function() {
                    return a.randomAsNumber
                }
            }), Object.defineProperty(t, "randomAsU8a", {
                enumerable: !0,
                get: function() {
                    return o.randomAsU8a
                }
            });
            var n = r(7670),
                a = r(10642),
                o = r(5883)
        },
        10642: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomAsNumber = function() {
                return (0, n.hexToBn)((0, a.randomAsHex)(8)).and(o).toNumber()
            };
            var n = r(5467),
                a = r(7670);
            const o = new n.BN(9007199254740991)
        },
        10643: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "sha512AsU8a", {
                enumerable: !0,
                get: function() {
                    return n.sha512AsU8a
                }
            });
            var n = r(10644)
        },
        10644: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sha512AsU8a = function(e, t = !1) {
                return (0, o.isReady)() && !t ? (0, o.sha512)(e) : a.default.hash(e)
            };
            var a = n(r(73)),
                o = r(5520)
        },
        10645: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "signatureVerify", {
                enumerable: !0,
                get: function() {
                    return n.signatureVerify
                }
            });
            var n = r(10646)
        },
        10646: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.signatureVerify = function(e, t, r) {
                const o = (0, n.u8aToU8a)(t);
                (0, n.assert)([64, 65, 66].includes(o.length), () => "Invalid signature length, expected [64..66] bytes, found " + o.length);
                const s = (0, a.decodeAddress)(r),
                    i = {
                        message: (0, n.u8aToU8a)(e),
                        publicKey: s,
                        signature: o
                    },
                    c = {
                        crypto: "none",
                        isValid: !1,
                        isWrapped: (0, n.u8aIsWrapped)(i.message, !0),
                        publicKey: s
                    },
                    u = (0, n.u8aIsWrapped)(i.message, !1),
                    d = function(e) {
                        return [0, 1, 2].includes(e[0]) && [65, 66].includes(e.length) ? p : f
                    }(o);
                if (d(c, i), "none" !== c.crypto || c.isWrapped && !u) return c;
                return i.message = u ? (0, n.u8aUnwrapBytes)(i.message) : (0, n.u8aWrapBytes)(i.message), d(c, i)
            };
            var n = r(5467),
                a = r(5680),
                o = r(7665),
                s = r(7653),
                i = r(7660);
            const c = e => (t, r, n) => (0, i.secp256k1Verify)(t, r, n, e),
                u = [
                    ["ecdsa", c("blake2")],
                    ["ethereum", c("keccak")]
                ],
                d = [
                    ["ed25519", o.naclVerify],
                    ["sr25519", s.schnorrkelVerify], ...u
                ],
                l = ["ed25519", "sr25519", "ecdsa"];

            function f(e, {
                message: t,
                publicKey: r,
                signature: n
            }, a = d) {
                return e.isValid = a.some(([a, o]) => {
                    try {
                        if (o(t, n, r)) return e.crypto = a, !0
                    } catch (e) {}
                    return !1
                }), e
            }

            function p(e, {
                message: t,
                publicKey: r,
                signature: a
            }) {
                (0, n.assert)([0, 1, 2].includes(a[0]), () => "Unknown crypto type, expected signature prefix [0..2], found " + a[0]);
                const i = l[a[0]] || "none";
                e.crypto = i;
                try {
                    e.isValid = {
                        ecdsa: () => f(e, {
                            message: t,
                            publicKey: r,
                            signature: a.subarray(1)
                        }, u).isValid,
                        ed25519: () => (0, o.naclVerify)(t, a.subarray(1), r),
                        none: () => {
                            throw Error("no verify for `none` crypto type")
                        },
                        sr25519: () => (0, s.schnorrkelVerify)(t, a.subarray(1), r)
                    } [i]()
                } catch (e) {}
                return e
            }
        },
        10647: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "xxhashAsHex", {
                enumerable: !0,
                get: function() {
                    return n.xxhashAsHex
                }
            }), Object.defineProperty(t, "xxhashAsU8a", {
                enumerable: !0,
                get: function() {
                    return a.xxhashAsU8a
                }
            });
            var n = r(10648),
                a = r(7671)
        },
        10648: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.xxhashAsHex = function(e, t = 64) {
                return (0, n.u8aToHex)((0, a.xxhashAsU8a)(e, t))
            };
            var n = r(5467),
                a = r(7671)
        },
        10649: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                return new a.BN((0, o.default)(e, t), 16)
            };
            var a = r(5467),
                o = n(r(10650))
        },
        10650: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                return (0, a.default)(e, t).toString(16)
            };
            var a = n(r(10651))
        },
        10651: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                return a.default.h64((0, o.u8aToU8a)(e).buffer, t)
            };
            var a = n(r(6397)),
                o = r(5467)
        },
        5680: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decodeAddress = function(e, t, r = -1) {
                if ((0, n.assert)(e, "Invalid empty address passed"), (0, n.isU8a)(e) || (0, n.isHex)(e)) return (0, n.u8aToU8a)(e);
                try {
                    const i = (0, a.base58Decode)(e);
                    (0, n.assert)(s.defaults.allowedEncodedLengths.includes(i.length), "Invalid decoded address length");
                    const [c, u, d, l] = (0, o.checkAddressChecksum)(i);
                    return (0, n.assert)(t || c, "Invalid decoded address checksum"), (0, n.assert)([-1, l].includes(r), () => `Expected ss58Format ${r}, received ${l}`), i.slice(d, u)
                } catch (t) {
                    throw new Error(`Decoding ${e}: ${t.message}`)
                }
            };
            var n = r(5467),
                a = r(6745),
                o = r(6747),
                s = r(6295)
        },
        5757: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.blake2AsU8a = function(e, t = 256, r, n = !1) {
                const i = Math.ceil(t / 8);
                return (0, s.isReady)() && !n ? (0, s.blake2b)((0, o.u8aToU8a)(e), (0, o.u8aToU8a)(r), i) : a.default.blake2b((0, o.u8aToU8a)(e), r || void 0, i)
            };
            var a = n(r(10566)),
                o = r(5467),
                s = r(5520)
        },
        5806: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assert = o, t.assertReturn = function(e, t) {
                return o(!(0, a.isUndefined)(e), t), e
            };
            var n = r(5875),
                a = r(5876);

            function o(e, t) {
                if (!e) throw new Error((0, n.isFunction)(t) ? t() : t)
            }
        },
        5808: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(10494);
            var n = r(10497);
            Object.keys(n).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === n[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return n[e]
                    }
                }))
            }))
        },
        5877: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BN", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            });
            var a = n(r(35))
        },
        5882: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1 = t.EXPAND_OPT = void 0;
            const a = new(0, n(r(85)).default.ec)("secp256k1");
            t.secp256k1 = a;
            t.EXPAND_OPT = {
                bitLength: 256,
                isLe: !1
            }
        },
        5883: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomAsU8a = function(e = 32) {
                return (0, n.getRandomValues)(new Uint8Array(e))
            };
            var n = r(7612)
        },
        5964: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnToBn = function(e) {
                if (!e) return new i.BN(0);
                if ((0, o.isHex)(e)) return (0, n.hexToBn)(e.toString());
                if ((0, a.isBigInt)(e)) return new i.BN(e.toString());
                return i.BN.isBN(e) ? e : (0, s.isToBn)(e) ? e.toBn() : new i.BN(e)
            };
            var n = r(6103),
                a = r(6718),
                o = r(5963),
                s = r(7598),
                i = r(5877)
        },
        5966: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.encodeAddress = function(e, t = s.defaults.prefix) {
                const r = (0, o.decodeAddress)(e);
                (0, n.assert)(t >= 0 && t <= 16383 && ![46, 47].includes(t), "Out of range ss58Format specified"), (0, n.assert)(s.defaults.allowedDecodedLengths.includes(r.length), () => "Expected a valid key to convert, with length " + s.defaults.allowedDecodedLengths.join(", "));
                const c = (0, n.u8aConcat)(t < 64 ? [t] : [(252 & t) >> 2 | 64, t >> 8 | (3 & t) << 6], r);
                return (0, a.base58Encode)((0, n.u8aConcat)(c, (0, i.sshash)(c).subarray(0, [32, 33].includes(r.length) ? 2 : 1)))
            };
            var n = r(5467),
                a = r(7654),
                o = r(5680),
                s = r(6295),
                i = r(7636)
        },
        6109: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "hmacSha256", {
                enumerable: !0,
                get: function() {
                    return n.hmacSha256
                }
            }), Object.defineProperty(t, "hmacSha512", {
                enumerable: !0,
                get: function() {
                    return a.hmacSha512
                }
            });
            var n = r(10614),
                a = r(10615)
        },
        6110: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.entropyToMnemonic = b, t.generateMnemonic = function(e) {
                return e = e || 128, (0, o.assert)(e % 32 == 0, "Invalid entropy"), b((0, i.randomAsU8a)(e / 8))
            }, t.mnemonicToEntropy = p, t.mnemonicToSeedSync = function(e, t) {
                const r = (0, o.stringToU8a)(u(e)),
                    n = (0, o.stringToU8a)("mnemonic" + u(t));
                return (0, s.pbkdf2Encode)(r, n).password
            }, t.validateMnemonic = function(e) {
                try {
                    p(e)
                } catch (e) {
                    return !1
                }
                return !0
            };
            var a = n(r(141)),
                o = r(5467),
                s = r(6756),
                i = r(5883),
                c = n(r(10620));

            function u(e) {
                return (e || "").normalize("NFKD")
            }

            function d(e) {
                return parseInt(e, 2)
            }

            function l(e) {
                return e.map(e => e.toString(2).padStart(8, "0")).join("")
            }

            function f(e) {
                const t = 8 * e.length / 32,
                    r = a.default.sha256().update(e).digest();
                return l(Array.from(r)).slice(0, t)
            }

            function p(e) {
                var t;
                const r = u(e).split(" ");
                (0, o.assert)(r.length % 3 == 0, "Invalid mnemonic");
                const n = r.map(e => {
                        const t = c.default.indexOf(e);
                        return (0, o.assert)(-1 !== t, "Invalid mnemonic"), t.toString(2).padStart(11, "0")
                    }).join(""),
                    a = 32 * Math.floor(n.length / 33),
                    s = n.slice(0, a),
                    i = n.slice(a),
                    l = null === (t = s.match(/(.{1,8})/g)) || void 0 === t ? void 0 : t.map(d);
                (0, o.assert)(l && l.length % 4 == 0 && l.length >= 16 && l.length <= 32, "Invalid entropy");
                const p = (0, o.u8aToU8a)(l),
                    b = f(p);
                return (0, o.assert)(b === i, "Invalid mnemonic checksum"), p
            }

            function b(e) {
                (0, o.assert)(e.length % 4 == 0 && e.length >= 16 && e.length <= 32, "Invalid entropy");
                return (l(Array.from(e)) + f(e)).match(/(.{1,11})/g).map(e => c.default[d(e)]).join(" ")
            }
        },
        6294: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base58Validate = void 0, t.createValidateFn = a;
            var n = r(5467);

            function a({
                alphabet: e,
                ipfsChar: t,
                type: r
            }) {
                return (a, o) => {
                    (0, n.assert)(a && "string" == typeof a, () => `Expected non-null, non-empty ${r} string input`), (0, n.assert)(!o || a[0] === t, () => `Expected ${r} to start with '${t}'`);
                    for (let t = o ? 1 : 0; t < a.length; t++)(0, n.assert)(e.includes(a[t]), () => `Invalid ${r} character "${a[t]}" (0x${a.charCodeAt(t).toString(16)}) at index ${t}`);
                    return !0
                }
            }
            const o = a({
                alphabet: r(6746).BASE58_ALPHABET,
                ipfsChar: "z",
                type: "base58"
            });
            t.base58Validate = o
        },
        6295: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaults = void 0;
            const n = {
                allowedDecodedLengths: [1, 2, 4, 8, 32, 33],
                allowedEncodedLengths: [3, 4, 6, 10, 35, 36, 37, 38],
                allowedPrefix: r(7638).availableNetworks.map(({
                    prefix: e
                }) => e),
                prefix: 42
            };
            t.defaults = n
        },
        6296: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "keccakAsHex", {
                enumerable: !0,
                get: function() {
                    return n.keccakAsHex
                }
            }), Object.defineProperty(t, "keccakAsU8a", {
                enumerable: !0,
                get: function() {
                    return a.keccakAsU8a
                }
            });
            var n = r(10590),
                a = r(7656)
        },
        6297: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "convertPublicKeyToCurve25519", {
                enumerable: !0,
                get: function() {
                    return b.convertPublicKeyToCurve25519
                }
            }), Object.defineProperty(t, "convertSecretKeyToCurve25519", {
                enumerable: !0,
                get: function() {
                    return b.convertSecretKeyToCurve25519
                }
            }), Object.defineProperty(t, "naclBoxKeypairFromSecret", {
                enumerable: !0,
                get: function() {
                    return l.naclBoxKeypairFromSecret
                }
            }), Object.defineProperty(t, "naclDecrypt", {
                enumerable: !0,
                get: function() {
                    return n.naclDecrypt
                }
            }), Object.defineProperty(t, "naclEncrypt", {
                enumerable: !0,
                get: function() {
                    return a.naclEncrypt
                }
            }), Object.defineProperty(t, "naclKeypairFromRandom", {
                enumerable: !0,
                get: function() {
                    return o.naclKeypairFromRandom
                }
            }), Object.defineProperty(t, "naclKeypairFromSecret", {
                enumerable: !0,
                get: function() {
                    return s.naclKeypairFromSecret
                }
            }), Object.defineProperty(t, "naclKeypairFromSeed", {
                enumerable: !0,
                get: function() {
                    return i.naclKeypairFromSeed
                }
            }), Object.defineProperty(t, "naclKeypairFromString", {
                enumerable: !0,
                get: function() {
                    return c.naclKeypairFromString
                }
            }), Object.defineProperty(t, "naclOpen", {
                enumerable: !0,
                get: function() {
                    return f.naclOpen
                }
            }), Object.defineProperty(t, "naclSeal", {
                enumerable: !0,
                get: function() {
                    return p.naclSeal
                }
            }), Object.defineProperty(t, "naclSign", {
                enumerable: !0,
                get: function() {
                    return u.naclSign
                }
            }), Object.defineProperty(t, "naclVerify", {
                enumerable: !0,
                get: function() {
                    return d.naclVerify
                }
            });
            var n = r(10623),
                a = r(10624),
                o = r(10625),
                s = r(10626),
                i = r(6748),
                c = r(10627),
                u = r(10628),
                d = r(7665),
                l = r(10629),
                f = r(10630),
                p = r(10631),
                b = r(10632)
        },
        6715: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                BN: !0,
                bnFromHex: !0,
                bnMax: !0,
                bnMin: !0,
                bnSqrt: !0,
                bnToBn: !0,
                bnToHex: !0,
                bnToU8a: !0
            };
            Object.defineProperty(t, "BN", {
                enumerable: !0,
                get: function() {
                    return o.BN
                }
            }), Object.defineProperty(t, "bnFromHex", {
                enumerable: !0,
                get: function() {
                    return s.bnFromHex
                }
            }), Object.defineProperty(t, "bnMax", {
                enumerable: !0,
                get: function() {
                    return i.bnMax
                }
            }), Object.defineProperty(t, "bnMin", {
                enumerable: !0,
                get: function() {
                    return c.bnMin
                }
            }), Object.defineProperty(t, "bnSqrt", {
                enumerable: !0,
                get: function() {
                    return u.bnSqrt
                }
            }), Object.defineProperty(t, "bnToBn", {
                enumerable: !0,
                get: function() {
                    return d.bnToBn
                }
            }), Object.defineProperty(t, "bnToHex", {
                enumerable: !0,
                get: function() {
                    return l.bnToHex
                }
            }), Object.defineProperty(t, "bnToU8a", {
                enumerable: !0,
                get: function() {
                    return f.bnToU8a
                }
            });
            var a = r(7596);
            Object.keys(a).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || e in t && t[e] === a[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return a[e]
                    }
                }))
            }));
            var o = r(5877),
                s = r(10447),
                i = r(10448),
                c = r(10449),
                u = r(10450),
                d = r(5964),
                l = r(10451),
                f = r(7601)
        },
        6729: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.packageInfo = void 0;
            t.packageInfo = {
                name: "@polkadot/util-crypto",
                version: "7.6.1"
            }
        },
        6745: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base58Decode = function(e, t) {
                return (0, o.base58Validate)(e, t), (0, n.bufferToU8a)(a.bs58.decode(e.substr(t ? 1 : 0)))
            };
            var n = r(5467),
                a = r(6746),
                o = r(6294)
        },
        6746: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bs58 = t.BASE58_ALPHABET = void 0;
            var a = n(r(10565));
            const o = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
            t.BASE58_ALPHABET = o;
            const s = (0, a.default)(o);
            t.bs58 = s
        },
        6747: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkAddressChecksum = function(e) {
                const t = 64 & e[0] ? 2 : 1,
                    r = 1 === t ? e[0] : (63 & e[0]) << 2 | e[1] >> 6 | (63 & e[1]) << 8,
                    a = [34 + t, 35 + t].includes(e.length),
                    o = e.length - (a ? 2 : 1),
                    s = (0, n.sshash)(e.subarray(0, o));
                return [0 == (128 & e[0]) && ![46, 47].includes(e[0]) && (a ? e[e.length - 2] === s[0] && e[e.length - 1] === s[1] : e[e.length - 1] === s[0]), o, t, r]
            };
            var n = r(7636)
        },
        6748: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclKeypairFromSeed = function(e, t = !1) {
                if (!t && (0, o.isReady)()) {
                    const t = (0, o.ed25519KeypairFromSeed)(e);
                    return {
                        publicKey: t.slice(32),
                        secretKey: t.slice(0, 64)
                    }
                }
                return a.default.sign.keyPair.fromSeed(e)
            };
            var a = n(r(73)),
                o = r(5520)
        },
        6749: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1Hasher = function(e, t) {
                if ("blake2" === e) return (0, n.blake2AsU8a)(t);
                if ("keccak" === e) return (0, a.keccakAsU8a)(t);
                throw new Error(`Unsupported secp256k1 hasher '${e}', expected one of ${o.join(", ")}`)
            };
            var n = r(7655),
                a = r(6296);
            const o = ["blake2", "keccak"]
        },
        6750: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BITS_PER_CHAR = t.BASE32_ALPHABET = void 0;
            t.BASE32_ALPHABET = "abcdefghijklmnopqrstuvwxyz234567";
            t.BITS_PER_CHAR = 5
        },
        6751: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base32Validate = void 0;
            var n = r(6294),
                a = r(6750);
            const o = (0, n.createValidateFn)({
                alphabet: a.BASE32_ALPHABET,
                ipfsChar: "b",
                type: "base32"
            });
            t.base32Validate = o
        },
        6752: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "base64Decode", {
                enumerable: !0,
                get: function() {
                    return n.base64Decode
                }
            }), Object.defineProperty(t, "base64Encode", {
                enumerable: !0,
                get: function() {
                    return a.base64Encode
                }
            }), Object.defineProperty(t, "base64Pad", {
                enumerable: !0,
                get: function() {
                    return o.base64Pad
                }
            }), Object.defineProperty(t, "base64Trim", {
                enumerable: !0,
                get: function() {
                    return s.base64Trim
                }
            }), Object.defineProperty(t, "base64Validate", {
                enumerable: !0,
                get: function() {
                    return i.base64Validate
                }
            }), Object.defineProperty(t, "isBase64", {
                enumerable: !0,
                get: function() {
                    return c.isBase64
                }
            });
            var n = r(10600),
                a = r(10601),
                o = r(10602),
                s = r(10603),
                i = r(6753),
                c = r(10604)
        },
        6753: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base64Validate = function(e) {
                return (0, n.assert)(e && "string" == typeof e, "Expected non-null, non-empty base64 string input"), (0, n.assert)(/^(?:[A-Za-z0-9+/]{2}[A-Za-z0-9+/]{2})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e), "Invalid base64 encoding"), !0
            };
            var n = r(5467)
        },
        6754: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "secp256k1Compress", {
                enumerable: !0,
                get: function() {
                    return n.secp256k1Compress
                }
            }), Object.defineProperty(t, "secp256k1Expand", {
                enumerable: !0,
                get: function() {
                    return a.secp256k1Expand
                }
            }), Object.defineProperty(t, "secp256k1KeypairFromSeed", {
                enumerable: !0,
                get: function() {
                    return o.secp256k1KeypairFromSeed
                }
            }), Object.defineProperty(t, "secp256k1PrivateKeyTweakAdd", {
                enumerable: !0,
                get: function() {
                    return c.secp256k1PrivateKeyTweakAdd
                }
            }), Object.defineProperty(t, "secp256k1Recover", {
                enumerable: !0,
                get: function() {
                    return s.secp256k1Recover
                }
            }), Object.defineProperty(t, "secp256k1Sign", {
                enumerable: !0,
                get: function() {
                    return i.secp256k1Sign
                }
            }), Object.defineProperty(t, "secp256k1Verify", {
                enumerable: !0,
                get: function() {
                    return u.secp256k1Verify
                }
            });
            var n = r(10607),
                a = r(7659),
                o = r(7644),
                s = r(10608),
                i = r(10609),
                c = r(10610),
                u = r(7660)
        },
        6755: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HARDENED = void 0, t.hdValidatePath = function(e) {
                if (!e.startsWith("m/")) return !1;
                const t = e.split("/").slice(1);
                return t.every(e => /^\d+'?$/.test(e)) && !t.map(e => parseInt(e.replace(/'$/, ""), 10)).some(e => isNaN(e) || e >= 2147483648 || e < 0)
            };
            t.HARDENED = 2147483648
        },
        6756: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "pbkdf2Encode", {
                enumerable: !0,
                get: function() {
                    return n.pbkdf2Encode
                }
            });
            var n = r(10618)
        },
        6757: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mnemonicValidate = function(e, t = !1) {
                return (0, n.isReady)() && !t ? (0, n.bip39Validate)(e) : (0, a.validateMnemonic)(e)
            };
            var n = r(5520),
                a = r(6110)
        },
        6758: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "scryptEncode", {
                enumerable: !0,
                get: function() {
                    return n.scryptEncode
                }
            }), Object.defineProperty(t, "scryptFromU8a", {
                enumerable: !0,
                get: function() {
                    return a.scryptFromU8a
                }
            }), Object.defineProperty(t, "scryptToU8a", {
                enumerable: !0,
                get: function() {
                    return o.scryptToU8a
                }
            });
            var n = r(10637),
                a = r(10638),
                o = r(10639)
        },
        7595: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "arrayChunk", {
                enumerable: !0,
                get: function() {
                    return n.arrayChunk
                }
            }), Object.defineProperty(t, "arrayFilter", {
                enumerable: !0,
                get: function() {
                    return a.arrayFilter
                }
            }), Object.defineProperty(t, "arrayFlatten", {
                enumerable: !0,
                get: function() {
                    return o.arrayFlatten
                }
            }), Object.defineProperty(t, "arrayRange", {
                enumerable: !0,
                get: function() {
                    return s.arrayRange
                }
            }), Object.defineProperty(t, "arrayShuffle", {
                enumerable: !0,
                get: function() {
                    return i.arrayShuffle
                }
            });
            var n = r(10442),
                a = r(10443),
                o = r(10444),
                s = r(10445),
                i = r(10446)
        },
        7596: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BN_ZERO = t.BN_TWO = t.BN_THREE = t.BN_THOUSAND = t.BN_TEN = t.BN_SIX = t.BN_SEVEN = t.BN_QUINTILL = t.BN_ONE = t.BN_NINE = t.BN_MILLION = t.BN_MAX_INTEGER = t.BN_HUNDRED = t.BN_FOUR = t.BN_FIVE = t.BN_EIGHT = t.BN_BILLION = void 0;
            var n = r(5877);
            const a = new n.BN(0);
            t.BN_ZERO = a;
            const o = new n.BN(1);
            t.BN_ONE = o;
            const s = new n.BN(2);
            t.BN_TWO = s;
            const i = new n.BN(3);
            t.BN_THREE = i;
            const c = new n.BN(4);
            t.BN_FOUR = c;
            const u = new n.BN(5);
            t.BN_FIVE = u;
            const d = new n.BN(6);
            t.BN_SIX = d;
            const l = new n.BN(7);
            t.BN_SEVEN = l;
            const f = new n.BN(8);
            t.BN_EIGHT = f;
            const p = new n.BN(9);
            t.BN_NINE = p;
            const b = new n.BN(10);
            t.BN_TEN = b;
            const y = new n.BN(100);
            t.BN_HUNDRED = y;
            const m = new n.BN(1e3);
            t.BN_THOUSAND = m;
            const h = new n.BN(1e6);
            t.BN_MILLION = h;
            const v = new n.BN(1e9);
            t.BN_BILLION = v;
            const g = v.mul(v);
            t.BN_QUINTILL = g;
            const k = new n.BN(Number.MAX_SAFE_INTEGER);
            t.BN_MAX_INTEGER = k
        },
        7597: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkMaxMin = function(e, t) {
                return (0, n.assert)(t.length >= 1, "Must provide one or more BN arguments"), t.reduce((t, r) => a.BN[e](t, r), t[0])
            };
            var n = r(5806),
                a = r(5877)
        },
        7601: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bnToU8a = function(e, t = {
                bitLength: -1,
                isLe: !0,
                isNegative: !1
            }, r) {
                const n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? i(Object(r), !0).forEach((function(t) {
                                (0, a.default)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({
                        bitLength: -1,
                        isLe: !0,
                        isNegative: !1
                    }, (0, o.isNumber)(t) ? {
                        bitLength: t,
                        isLe: r
                    } : t),
                    c = (0, s.bnToBn)(e),
                    u = -1 === n.bitLength ? Math.ceil(c.bitLength() / 8) : Math.ceil((n.bitLength || 0) / 8);
                return e ? function(e, t, {
                    isLe: r,
                    isNegative: n
                }) {
                    const a = new Uint8Array(t),
                        o = n ? e.toTwos(8 * t) : e;
                    return a.set(o.toArray(r ? "le" : "be", t), 0), a
                }(c, u, n) : function(e, t) {
                    return -1 === t.bitLength ? new Uint8Array : new Uint8Array(e)
                }(u, n)
            };
            var a = n(r(5461)),
                o = r(6719),
                s = r(5964);

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
        },
        7611: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Keyring = void 0;
            var a = n(r(5471)),
                o = n(r(5472)),
                s = r(5467),
                i = r(5808),
                c = r(7672),
                u = r(6759),
                d = r(10655);
            const l = {
                ecdsa: e => (0, i.secp256k1KeypairFromSeed)(e),
                ed25519: e => (0, i.naclKeypairFromSeed)(e),
                ethereum: e => (0, i.secp256k1KeypairFromSeed)(e),
                sr25519: e => (0, i.schnorrkelKeypairFromSeed)(e)
            };
            var f = (0, o.default)("pairs"),
                p = (0, o.default)("type"),
                b = (0, o.default)("ss58");
            t.Keyring = class Keyring {
                constructor(e = {}) {
                    Object.defineProperty(this, f, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, p, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, b, {
                        writable: !0,
                        value: void 0
                    }), this.decodeAddress = i.decodeAddress, this.encodeAddress = (e, t) => "ethereum" === this.type ? (0, i.ethereumEncode)(e) : (0, i.encodeAddress)(e, (0, s.isUndefined)(t) ? (0, a.default)(this, b)[b] : t), e.type = e.type || "ed25519", (0, s.assert)(["ecdsa", "ethereum", "ed25519", "sr25519"].includes(e.type || "undefined"), () => "Expected a keyring type of either 'ed25519', 'sr25519', 'ethereum' or 'ecdsa', found '" + (e.type || "unknown")), (0, a.default)(this, f)[f] = new d.Pairs, (0, a.default)(this, b)[b] = e.ss58Format, (0, a.default)(this, p)[p] = e.type
                }
                get pairs() {
                    return this.getPairs()
                }
                get publicKeys() {
                    return this.getPublicKeys()
                }
                get type() {
                    return (0, a.default)(this, p)[p]
                }
                addPair(e) {
                    return (0, a.default)(this, f)[f].add(e)
                }
                addFromAddress(e, t = {}, r = null, n = this.type, a, o) {
                    const s = this.decodeAddress(e, a);
                    return this.addPair((0, u.createPair)({
                        toSS58: this.encodeAddress,
                        type: n
                    }, {
                        publicKey: s,
                        secretKey: new Uint8Array
                    }, t, r, o))
                }
                addFromJson(e, t) {
                    return this.addPair(this.createFromJson(e, t))
                }
                addFromMnemonic(e, t = {}, r = this.type) {
                    return this.addFromUri(e, t, r)
                }
                addFromPair(e, t = {}, r = this.type) {
                    return this.addPair(this.createFromPair(e, t, r))
                }
                addFromSeed(e, t = {}, r = this.type) {
                    return this.addPair((0, u.createPair)({
                        toSS58: this.encodeAddress,
                        type: r
                    }, l[r](e), t, null))
                }
                addFromUri(e, t = {}, r = this.type) {
                    return this.addPair(this.createFromUri(e, t, r))
                }
                createFromJson({
                    address: e,
                    encoded: t,
                    encoding: {
                        content: r,
                        type: n,
                        version: a
                    },
                    meta: o
                }, c) {
                    (0, s.assert)("3" !== a || "pkcs8" === r[0], () => `Unable to decode non-pkcs8 type, [${r.join(",")}] found}`);
                    const d = "0" !== a && Array.isArray(r) ? r[1] : this.type,
                        l = Array.isArray(n) ? n : [n];
                    (0, s.assert)(["ed25519", "sr25519", "ecdsa", "ethereum"].includes(d), () => "Unknown crypto type " + d);
                    const f = (0, s.isHex)(e) ? (0, s.hexToU8a)(e) : this.decodeAddress(e, c),
                        p = (0, s.isHex)(t) ? (0, s.hexToU8a)(t) : (0, i.base64Decode)(t);
                    return (0, u.createPair)({
                        toSS58: this.encodeAddress,
                        type: d
                    }, {
                        publicKey: f,
                        secretKey: new Uint8Array
                    }, o, p, l)
                }
                createFromPair(e, t = {}, r = this.type) {
                    return (0, u.createPair)({
                        toSS58: this.encodeAddress,
                        type: r
                    }, e, t, null)
                }
                createFromUri(e, t = {}, r = this.type) {
                    const n = e.startsWith("//") ? `${c.DEV_PHRASE}${e}` : e,
                        {
                            derivePath: a,
                            password: o,
                            path: d,
                            phrase: f
                        } = (0, i.keyExtractSuri)(n);
                    let p;
                    const b = (0, s.isHex)(f, 256);
                    if (b) p = (0, s.hexToU8a)(f);
                    else {
                        const e = f.split(" ");
                        [12, 15, 18, 21, 24].includes(e.length) ? p = "ethereum" === r ? (0, i.mnemonicToLegacySeed)(f, "", !1, 64) : (0, i.mnemonicToMiniSecret)(f, o) : ((0, s.assert)(f.length <= 32, "specified phrase is not a valid mnemonic and is invalid as a raw seed at > 32 bytes"), p = (0, s.stringToU8a)(f.padEnd(32)))
                    }
                    const y = "ethereum" === r ? b ? l[r](p) : (0, i.hdEthereum)(p, a.substring(1)) : (0, i.keyFromPath)(l[r](p), d, r);
                    return (0, u.createPair)({
                        toSS58: this.encodeAddress,
                        type: r
                    }, y, t, null)
                }
                getPair(e) {
                    return (0, a.default)(this, f)[f].get(e)
                }
                getPairs() {
                    return (0, a.default)(this, f)[f].all()
                }
                getPublicKeys() {
                    return (0, a.default)(this, f)[f].all().map(({
                        publicKey: e
                    }) => e)
                }
                removePair(e) {
                    (0, a.default)(this, f)[f].remove(e)
                }
                setSS58Format(e) {
                    (0, a.default)(this, b)[b] = e
                }
                toJson(e, t) {
                    return (0, a.default)(this, f)[f].get(e).toJson(t)
                }
            }
        },
        7613: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.cryptoIsReady = function() {
                return (0, n.isReady)()
            }, t.cryptoWaitReady = function() {
                return (0, n.waitReady)().then(() => !0).catch(e => (console.error("Unable to initialize @polkadot/util-crypto", e), !1))
            };
            var n = r(5520)
        },
        7636: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sshash = function(e) {
                return (0, a.blake2AsU8a)((0, n.u8aConcat)(o, e), 512)
            };
            var n = r(5467),
                a = r(5757);
            const o = (0, n.stringToU8a)("SS58PRE")
        },
        7638: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(10569);
            Object.keys(n).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === n[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return n[e]
                    }
                }))
            }))
        },
        7639: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createKeyMulti = function(e, t) {
                return (0, a.blake2AsU8a)((0, n.u8aConcat)(s, (0, n.compactToU8a)(e.length), ...(0, n.u8aSorted)(e.map(e => (0, o.decodeAddress)(e))), (0, n.bnToU8a)(t, {
                    bitLength: 16,
                    isLe: !0
                })))
            };
            var n = r(5467),
                a = r(5757),
                o = r(5680);
            const s = (0, n.stringToU8a)("modlpy/utilisuba")
        },
        7640: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createKeyDerived = function(e, t) {
                return (0, a.blake2AsU8a)((0, n.u8aConcat)(s, (0, o.decodeAddress)(e), (0, n.bnToU8a)(t, {
                    bitLength: 16,
                    isLe: !0
                })))
            };
            var n = r(5467),
                a = r(5757),
                o = r(5680);
            const s = (0, n.stringToU8a)("modlpy/utilisuba")
        },
        7641: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "keyExtractPath", {
                enumerable: !0,
                get: function() {
                    return n.keyExtractPath
                }
            }), Object.defineProperty(t, "keyExtractSuri", {
                enumerable: !0,
                get: function() {
                    return a.keyExtractSuri
                }
            }), Object.defineProperty(t, "keyFromPath", {
                enumerable: !0,
                get: function() {
                    return o.keyFromPath
                }
            }), Object.defineProperty(t, "keyHdkdEcdsa", {
                enumerable: !0,
                get: function() {
                    return c.keyHdkdEcdsa
                }
            }), Object.defineProperty(t, "keyHdkdEd25519", {
                enumerable: !0,
                get: function() {
                    return s.keyHdkdEd25519
                }
            }), Object.defineProperty(t, "keyHdkdSr25519", {
                enumerable: !0,
                get: function() {
                    return i.keyHdkdSr25519
                }
            });
            var n = r(7642),
                a = r(10575),
                o = r(10576),
                s = r(7646),
                i = r(7647),
                c = r(7643)
        },
        7642: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.keyExtractPath = function(e) {
                const t = e.match(o),
                    r = [];
                let s = "";
                t && (s = t.join(""), t.forEach(e => {
                    r.push(a.DeriveJunction.from(e.substr(1)))
                }));
                return (0, n.assert)(s === e, () => `Re-constructed path "${s}" does not match input`), {
                    parts: t,
                    path: r
                }
            };
            var n = r(5467),
                a = r(10574);
            const o = /\/(\/?)([^/]+)/g
        },
        7643: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.keyHdkdEcdsa = void 0;
            var n = r(10577),
                a = r(7644);
            const o = (0, r(7645).createSeedDeriveFn)(a.secp256k1KeypairFromSeed, n.secp256k1DeriveHard);
            t.keyHdkdEcdsa = o
        },
        7644: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1KeypairFromSeed = function(e) {
                (0, n.assert)(32 === e.length, "Expected valid 32-byte private key as a seed");
                const t = a.secp256k1.keyFromPrivate(e);
                return {
                    publicKey: new Uint8Array(t.getPublic().encodeCompressed()),
                    secretKey: (0, n.bnToU8a)(t.getPrivate(), a.EXPAND_OPT)
                }
            };
            var n = r(5467),
                a = r(5882)
        },
        7645: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createSeedDeriveFn = function(e, t) {
                return (r, {
                    chainCode: a,
                    isHard: o
                }) => ((0, n.assert)(o, "A soft key was found in the path and is not supported"), e(t(r.secretKey.subarray(0, 32), a)))
            };
            var n = r(5467)
        },
        7646: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.keyHdkdEd25519 = void 0;
            var n = r(10578),
                a = r(6748);
            const o = (0, r(7645).createSeedDeriveFn)(a.naclKeypairFromSeed, n.naclDeriveHard);
            t.keyHdkdEd25519 = o
        },
        7647: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.keyHdkdSr25519 = function(e, {
                chainCode: t,
                isSoft: r
            }) {
                return r ? (0, a.schnorrkelDeriveSoft)(e, t) : (0, n.schnorrkelDeriveHard)(e, t)
            };
            var n = r(7648),
                a = r(7651)
        },
        7648: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schnorrkelDeriveHard = void 0;
            var n = r(5520);
            const a = (0, r(7649).createDeriveFn)(n.sr25519DeriveKeypairHard);
            t.schnorrkelDeriveHard = a
        },
        7649: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createDeriveFn = function(e) {
                return (t, r) => (0, a.schnorrkelKeypairFromU8a)(e((0, o.schnorrkelKeypairToU8a)(t), (0, n.u8aToU8a)(r)))
            };
            var n = r(5467),
                a = r(7650),
                o = r(10579)
        },
        7650: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schnorrkelKeypairFromU8a = function(e) {
                const t = (0, n.u8aToU8a)(e);
                return (0, n.assert)(96 === t.length, () => "Expected keypair with 96 bytes, found " + t.length), {
                    publicKey: t.slice(64, 96),
                    secretKey: t.slice(0, 64)
                }
            };
            var n = r(5467)
        },
        7651: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schnorrkelDeriveSoft = void 0;
            var n = r(5520);
            const a = (0, r(7649).createDeriveFn)(n.sr25519DeriveKeypairSoft);
            t.schnorrkelDeriveSoft = a
        },
        7652: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "schnorrkelAgreement", {
                enumerable: !0,
                get: function() {
                    return n.schnorrkelAgreement
                }
            }), Object.defineProperty(t, "schnorrkelDeriveHard", {
                enumerable: !0,
                get: function() {
                    return a.schnorrkelDeriveHard
                }
            }), Object.defineProperty(t, "schnorrkelDerivePublic", {
                enumerable: !0,
                get: function() {
                    return o.schnorrkelDerivePublic
                }
            }), Object.defineProperty(t, "schnorrkelDeriveSoft", {
                enumerable: !0,
                get: function() {
                    return s.schnorrkelDeriveSoft
                }
            }), Object.defineProperty(t, "schnorrkelKeypairFromSeed", {
                enumerable: !0,
                get: function() {
                    return i.schnorrkelKeypairFromSeed
                }
            }), Object.defineProperty(t, "schnorrkelSign", {
                enumerable: !0,
                get: function() {
                    return c.schnorrkelSign
                }
            }), Object.defineProperty(t, "schnorrkelVerify", {
                enumerable: !0,
                get: function() {
                    return u.schnorrkelVerify
                }
            }), Object.defineProperty(t, "schnorrkelVrfSign", {
                enumerable: !0,
                get: function() {
                    return d.schnorrkelVrfSign
                }
            }), Object.defineProperty(t, "schnorrkelVrfVerify", {
                enumerable: !0,
                get: function() {
                    return l.schnorrkelVrfVerify
                }
            });
            var n = r(10580),
                a = r(7648),
                o = r(10581),
                s = r(7651),
                i = r(10582),
                c = r(10583),
                u = r(7653),
                d = r(10584),
                l = r(10585)
        },
        7653: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schnorrkelVerify = function(e, t, r) {
                const o = (0, n.u8aToU8a)(r),
                    s = (0, n.u8aToU8a)(t);
                return (0, n.assert)(32 === o.length, () => `Invalid publicKey, received ${o.length} bytes, expected 32`), (0, n.assert)(64 === s.length, () => `Invalid signature, received ${s.length} bytes, expected 64`), (0, a.sr25519Verify)(s, (0, n.u8aToU8a)(e), o)
            };
            var n = r(5467),
                a = r(5520)
        },
        7654: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base58Encode = function(e, t) {
                const r = a.bs58.encode((0, n.u8aToU8a)(e));
                return t ? "z" + r : r
            };
            var n = r(5467),
                a = r(6746)
        },
        7655: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "blake2AsHex", {
                enumerable: !0,
                get: function() {
                    return n.blake2AsHex
                }
            }), Object.defineProperty(t, "blake2AsU8a", {
                enumerable: !0,
                get: function() {
                    return a.blake2AsU8a
                }
            });
            var n = r(10589),
                a = r(5757)
        },
        7656: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.keccakAsU8a = function(e, t = 256, r = !1) {
                const n = 256 === t;
                return (0, s.isReady)() && n && !r ? (0, s.keccak256)((0, o.u8aToU8a)(e)) : new Uint8Array((n ? a.default.keccak256 : a.default.keccak512).update((0, o.u8aToU8a)(e)).arrayBuffer())
            };
            var a = n(r(465)),
                o = r(5467),
                s = r(5520)
        },
        7657: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.validateAddress = function(e, t, r) {
                return !!(0, n.decodeAddress)(e, t, r)
            };
            var n = r(5680)
        },
        7658: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBase32 = function(e, t) {
                return a(n.base32Validate, e, t)
            }, t.testValidator = a;
            var n = r(6751);

            function a(e, t, r) {
                try {
                    return e(t, r)
                } catch (e) {
                    return !1
                }
            }
        },
        7659: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1Expand = function(e) {
                (0, n.assert)([33, 65].includes(e.length), "Invalid publicKey provided");
                const t = a.secp256k1.keyFromPublic(e).getPublic();
                return (0, n.u8aConcat)((0, n.bnToU8a)(t.getX(), a.EXPAND_OPT), (0, n.bnToU8a)(t.getY(), a.EXPAND_OPT))
            };
            var n = r(5467),
                a = r(5882)
        },
        7660: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.secp256k1Verify = function(e, t, r, i = "blake2") {
                const c = "keccak" === i,
                    u = (0, n.u8aToU8a)(t);
                (0, n.assert)(65 === u.length, `Expected signature with 65 bytes, ${u.length} found instead`);
                const d = new Uint8Array(s.secp256k1.recoverPubKey((0, o.secp256k1Hasher)(i, e), {
                        r: u.slice(0, 32),
                        s: u.slice(32, 64)
                    }, u[64]).encodeCompressed()),
                    l = (0, o.secp256k1Hasher)(i, c ? (0, a.secp256k1Expand)(d) : d),
                    f = (0, n.u8aToU8a)(r);
                return c ? (0, n.u8aEq)(l.slice(-20), f.slice(-20)) : (0, n.u8aEq)(l, f)
            };
            var n = r(5467),
                a = r(7659),
                o = r(6749),
                s = r(5882)
        },
        7661: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isEthereumChecksum = function(e) {
                const t = e.replace("0x", ""),
                    r = (0, n.u8aToHex)((0, a.keccakAsU8a)(t.toLowerCase()), -1, !1);
                for (let e = 0; e < 40; e++)
                    if (o = t[e], s = parseInt(r[e], 16), o !== (s > 7 ? o.toUpperCase() : o.toLowerCase())) return !1;
                var o, s;
                return !0
            };
            var n = r(5467),
                a = r(6296)
        },
        7662: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hmacSha = function(e, t, r) {
                return Uint8Array.from(a.default.hmac(r ? a.default.sha512 : a.default.sha256, e).update(t).digest())
            };
            var a = n(r(141))
        },
        7663: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "mnemonicGenerate", {
                enumerable: !0,
                get: function() {
                    return n.mnemonicGenerate
                }
            }), Object.defineProperty(t, "mnemonicToEntropy", {
                enumerable: !0,
                get: function() {
                    return a.mnemonicToEntropy
                }
            }), Object.defineProperty(t, "mnemonicToLegacySeed", {
                enumerable: !0,
                get: function() {
                    return o.mnemonicToLegacySeed
                }
            }), Object.defineProperty(t, "mnemonicToMiniSecret", {
                enumerable: !0,
                get: function() {
                    return s.mnemonicToMiniSecret
                }
            }), Object.defineProperty(t, "mnemonicValidate", {
                enumerable: !0,
                get: function() {
                    return i.mnemonicValidate
                }
            });
            var n = r(10617),
                a = r(7664),
                o = r(10621),
                s = r(10622),
                i = r(6757)
        },
        7664: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mnemonicToEntropy = function(e, t = !1) {
                return (0, n.isReady)() && !t ? (0, n.bip39ToEntropy)(e) : (0, a.mnemonicToEntropy)(e)
            };
            var n = r(5520),
                a = r(6110)
        },
        7665: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.naclVerify = function(e, t, r, n = !1) {
                const i = (0, o.u8aToU8a)(e),
                    c = (0, o.u8aToU8a)(r),
                    u = (0, o.u8aToU8a)(t);
                return (0, o.assert)(32 === c.length, () => `Invalid publicKey, received ${c.length}, expected 32`), (0, o.assert)(64 === u.length, () => `Invalid signature, received ${u.length} bytes, expected 64`), (0, s.isReady)() && !n ? (0, s.ed25519Verify)(u, i, c) : a.default.sign.detached.verify(i, u, c)
            };
            var a = n(r(73)),
                o = r(5467),
                s = r(5520)
        },
        7666: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.jsonDecryptData = function(e, t, r = s.ENCODING) {
                (0, n.assert)(e, "No encrypted data available to decode"), (0, n.assert)(t || !r.includes("xsalsa20-poly1305"), "Password required to decode encrypted data");
                let i = e;
                if (t) {
                    let c;
                    if (r.includes("scrypt")) {
                        const {
                            params: r,
                            salt: n
                        } = (0, o.scryptFromU8a)(e);
                        c = (0, o.scryptEncode)(t, n, r).password, e = e.subarray(s.SCRYPT_LENGTH)
                    } else c = (0, n.stringToU8a)(t);
                    i = (0, a.naclDecrypt)(e.subarray(s.NONCE_LENGTH), e.subarray(0, s.NONCE_LENGTH), (0, n.u8aFixLength)(c, 256, !0))
                }
                return (0, n.assert)(i, "Unable to decode using the supplied passphrase"), i
            };
            var n = r(5467),
                a = r(6297),
                o = r(6758),
                s = r(7668)
        },
        7667: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DEFAULT_PARAMS = void 0;
            t.DEFAULT_PARAMS = {
                N: 32768,
                p: 1,
                r: 8
            }
        },
        7668: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SCRYPT_LENGTH = t.NONCE_LENGTH = t.ENCODING_VERSION = t.ENCODING_NONE = t.ENCODING = void 0;
            t.ENCODING = ["scrypt", "xsalsa20-poly1305"];
            t.ENCODING_NONE = ["none"];
            t.ENCODING_VERSION = "3";
            t.NONCE_LENGTH = 24;
            t.SCRYPT_LENGTH = 44
        },
        7669: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.jsonEncryptFormat = function(e, t, r) {
                return {
                    encoded: (0, n.base64Encode)(e),
                    encoding: {
                        content: t,
                        type: r ? a.ENCODING : a.ENCODING_NONE,
                        version: a.ENCODING_VERSION
                    }
                }
            };
            var n = r(6752),
                a = r(7668)
        },
        7670: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomAsHex = function(e = 32) {
                return (0, n.u8aToHex)((0, a.randomAsU8a)(e))
            };
            var n = r(5467),
                a = r(5883)
        },
        7671: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.xxhashAsU8a = function(e, t = 64, r = !1) {
                const n = Math.ceil(t / 64),
                    i = (0, a.u8aToU8a)(e);
                if ((0, o.isReady)() && !r) return (0, o.twox)(i, n);
                const c = new Uint8Array(Math.ceil(t / 8));
                for (let e = 0; e < n; e++) c.set((0, s.default)(i, e).toArray("le", 8), 8 * e);
                return c
            };
            var a = r(5467),
                o = r(5520),
                s = n(r(10649))
        },
        7672: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DEV_SEED = t.DEV_PHRASE = void 0;
            t.DEV_PHRASE = "bottom drive obey lake curtain smoke basket hold race lonely fit walk";
            t.DEV_SEED = "0xfac7959dbfe72f052e5a0c3c8d6530f202b02fd8f9f5ca3580ec8deb7797479e"
        }
    }
]);