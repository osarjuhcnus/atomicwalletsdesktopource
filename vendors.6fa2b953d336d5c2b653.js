(window.webpackJsonp = window.webpackJsonp || []).push([
    [225], {
        5473: function(e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
                    void 0 === s && (s = r), Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, s) {
                    void 0 === s && (s = r), e[s] = t[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                n = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && s(t, e, r);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serverInfo = t.validate = t.errors = t.constants = t.ensureClassicAddress = void 0;
            const a = n(r(9194));
            t.constants = a;
            const o = n(r(5782));
            t.errors = o;
            const c = n(r(9196));
            t.validate = c;
            const d = n(r(7230));
            t.serverInfo = d;
            const p = r(5624);
            t.ensureClassicAddress = function(e) {
                if (p.isValidXAddress(e)) {
                    const {
                        classicAddress: t,
                        tag: r
                    } = p.xAddressToClassicAddress(e);
                    if (!1 !== r) throw new Error("This command does not support the use of a tag. Use an address without a tag.");
                    return t
                }
                return e
            };
            var l = r(6187);
            Object.defineProperty(t, "dropsToXrp", {
                enumerable: !0,
                get: function() {
                    return l.dropsToXrp
                }
            }), Object.defineProperty(t, "xrpToDrops", {
                enumerable: !0,
                get: function() {
                    return l.xrpToDrops
                }
            }), Object.defineProperty(t, "toRippledAmount", {
                enumerable: !0,
                get: function() {
                    return l.toRippledAmount
                }
            }), Object.defineProperty(t, "removeUndefined", {
                enumerable: !0,
                get: function() {
                    return l.removeUndefined
                }
            }), Object.defineProperty(t, "convertKeysFromSnakeCaseToCamelCase", {
                enumerable: !0,
                get: function() {
                    return l.convertKeysFromSnakeCaseToCamelCase
                }
            }), Object.defineProperty(t, "iso8601ToRippleTime", {
                enumerable: !0,
                get: function() {
                    return l.iso8601ToRippleTime
                }
            }), Object.defineProperty(t, "rippleTimeToISO8601", {
                enumerable: !0,
                get: function() {
                    return l.rippleTimeToISO8601
                }
            });
            var h = r(9316);
            Object.defineProperty(t, "Connection", {
                enumerable: !0,
                get: function() {
                    return h.Connection
                }
            });
            var u = r(7229);
            Object.defineProperty(t, "txFlags", {
                enumerable: !0,
                get: function() {
                    return u.txFlags
                }
            })
        },
        5782: function(e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
                    void 0 === s && (s = r), Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, s) {
                    void 0 === s && (s = r), e[s] = t[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                n = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && s(t, e, r);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.XRPLFaucetError = t.LedgerVersionError = t.MissingLedgerHistoryError = t.PendingLedgerVersionError = t.NotFoundError = t.ValidationError = t.ResponseFormatError = t.TimeoutError = t.RippledNotInitializedError = t.DisconnectedError = t.NotConnectedError = t.RippledError = t.ConnectionError = t.UnexpectedError = t.RippleError = void 0;
            const a = r(43),
                o = n(r(9195));
            class RippleError extends Error {
                constructor(e = "", t) {
                    super(e), this.name = o.getConstructorName(this), this.message = e, this.data = t, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
                }
                toString() {
                    let e = "[" + this.name + "(" + this.message;
                    return this.data && (e += ", " + a.inspect(this.data)), e += ")]", e
                }
                inspect() {
                    return this.toString()
                }
            }
            t.RippleError = RippleError;
            t.RippledError = class RippledError extends RippleError {};
            t.UnexpectedError = class UnexpectedError extends RippleError {};
            t.LedgerVersionError = class LedgerVersionError extends RippleError {};
            class ConnectionError extends RippleError {}
            t.ConnectionError = ConnectionError;
            t.NotConnectedError = class NotConnectedError extends ConnectionError {};
            t.DisconnectedError = class DisconnectedError extends ConnectionError {};
            t.RippledNotInitializedError = class RippledNotInitializedError extends ConnectionError {};
            t.TimeoutError = class TimeoutError extends ConnectionError {};
            t.ResponseFormatError = class ResponseFormatError extends ConnectionError {};
            t.ValidationError = class ValidationError extends RippleError {};
            t.XRPLFaucetError = class XRPLFaucetError extends RippleError {};
            t.NotFoundError = class NotFoundError extends RippleError {
                constructor(e = "Not found") {
                    super(e)
                }
            };
            t.MissingLedgerHistoryError = class MissingLedgerHistoryError extends RippleError {
                constructor(e) {
                    super(e || "Server is missing ledger history in the specified range")
                }
            };
            t.PendingLedgerVersionError = class PendingLedgerVersionError extends RippleError {
                constructor(e) {
                    super(e || "maxLedgerVersion is greater than server's most recent validated ledger")
                }
            }
        },
        5928: function(e, t, r) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.computePaymentChannelHash = t.computeEscrowHash = t.computeLedgerHash = t.computeStateTreeHash = t.computeTransactionTreeHash = t.computeTrustlineHash = t.computeOrderID = t.computeSignerListLedgerObjectID = t.computeAccountLedgerObjectID = t.computeBinaryTransactionSigningHash = t.computeTransactionHash = t.computeBinaryTransactionHash = void 0;
            const i = s(r(5614)),
                n = r(5624),
                a = s(r(7241)),
                o = s(r(7242)),
                c = r(9355),
                d = r(5925),
                p = s(r(9356)),
                l = (e, t) => Array(t - e.length + 1).join("0") + e,
                h = (e, t) => l(Number(e).toString(16), 2 * t),
                u = e => Buffer.from(e).toString("hex"),
                f = e => h(p.default[e].charCodeAt(0), 2),
                m = e => Buffer.from(n.decodeAccountID(e)).toString("hex"),
                g = e => {
                    const t = e.length / 2;
                    if (t <= 192) return u([t]) + e;
                    if (t <= 12480) {
                        const r = t - 193;
                        return u([193 + (r >>> 8), 255 & r]) + e
                    }
                    if (t <= 918744) {
                        const r = t - 12481;
                        return u([241 + (r >>> 16), r >>> 8 & 255, 255 & r]) + e
                    }
                    throw new Error("Variable integer overflow.")
                };
            t.computeBinaryTransactionHash = e => {
                const t = o.default.TRANSACTION_ID.toString(16).toUpperCase();
                return a.default(t + e)
            }, t.computeTransactionHash = e => t.computeBinaryTransactionHash(d.encode(e)), t.computeBinaryTransactionSigningHash = e => {
                const t = o.default.TRANSACTION_SIGN.toString(16).toUpperCase();
                return a.default(t + e)
            }, t.computeAccountLedgerObjectID = e => a.default(f("account") + m(e)), t.computeSignerListLedgerObjectID = e => a.default(f("signerList") + m(e) + "00000000"), t.computeOrderID = (e, t) => {
                const r = "00" + h(p.default.offer.charCodeAt(0), 1);
                return a.default(r + m(e) + h(t, 4))
            }, t.computeTrustlineHash = (e, t, r) => {
                const s = m(e),
                    n = m(t),
                    o = new i.default(s, 16).isGreaterThan(new i.default(n, 16)),
                    c = o ? n : s,
                    d = o ? s : n,
                    p = f("rippleState");
                return a.default(p + c + d + (e => {
                    if (3 === e.length) {
                        const t = new Array(21).join("0").split("").map(parseFloat);
                        return t[12] = 255 & e.charCodeAt(0), t[13] = 255 & e.charCodeAt(1), t[14] = 255 & e.charCodeAt(2), u(t)
                    }
                    return e
                })(r))
            }, t.computeTransactionTreeHash = e => {
                const r = new c.SHAMap;
                return e.forEach(e => {
                    const s = d.encode(e),
                        i = d.encode(e.metaData),
                        n = t.computeBinaryTransactionHash(s),
                        a = g(s) + g(i);
                    r.addItem(n, a, c.NodeType.TRANSACTION_METADATA)
                }), r.hash
            }, t.computeStateTreeHash = e => {
                const t = new c.SHAMap;
                return e.forEach(e => {
                    const r = d.encode(e);
                    t.addItem(e.index, r, c.NodeType.ACCOUNT_STATE)
                }), t.hash
            }, t.computeLedgerHash = e => {
                const t = o.default.LEDGER.toString(16).toUpperCase();
                return a.default(t + h(e.ledger_index, 4) + ((e, t) => {
                    const r = new i.default(e).toString(16);
                    return l(r, 2 * t)
                })(e.total_coins, 8) + e.parent_hash + e.transaction_hash + e.account_hash + h(e.parent_close_time, 4) + h(e.close_time, 4) + h(e.close_time_resolution, 1) + h(e.close_flags, 1))
            }, t.computeEscrowHash = (e, t) => a.default(f("escrow") + m(e) + h(t, 4)), t.computePaymentChannelHash = (e, t, r) => a.default(f("paychan") + m(e) + m(t) + h(r, 4))
        },
        6187: function(e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
                    void 0 === s && (s = r), Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, s) {
                    void 0 === s && (s = r), e[s] = t[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                n = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && s(t, e, r);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isValidSecret = t.iso8601ToRippleTime = t.rippleTimeToISO8601 = t.removeUndefined = t.convertKeysFromSnakeCaseToCamelCase = t.toRippledAmount = t.xrpToDrops = t.dropsToXrp = void 0;
            const o = n(r(53)),
                c = a(r(5614)),
                d = r(5844),
                p = r(5782),
                l = r(5624);

            function h(e) {
                if ("string" == typeof e) {
                    if (!e.match(/^-?[0-9]*\.?[0-9]*$/)) throw new p.ValidationError(`xrpToDrops: invalid value '${e}', should be a number matching (^-?[0-9]*\\.?[0-9]*$).`);
                    if ("." === e) throw new p.ValidationError(`xrpToDrops: invalid value '${e}', should be a BigNumber or string-encoded number.`)
                }
                if (!(e = new c.default(e).toString(10)).match(/^-?[0-9.]+$/)) throw new p.ValidationError(`xrpToDrops: failed sanity check - value '${e}', does not match (^-?[0-9.]+$).`);
                const t = e.split(".");
                if (t.length > 2) throw new p.ValidationError(`xrpToDrops: failed sanity check - value '${e}' has too many decimal points.`);
                if ((t[1] || "0").length > 6) throw new p.ValidationError(`xrpToDrops: value '${e}' has too many decimal places.`);
                return new c.default(e).times(1e6).integerValue(c.default.ROUND_FLOOR).toString(10)
            }
            t.isValidSecret = function(e) {
                try {
                    return d.deriveKeypair(e), !0
                } catch (e) {
                    return !1
                }
            }, t.dropsToXrp = function(e) {
                if ("string" == typeof e) {
                    if (!e.match(/^-?[0-9]*\.?[0-9]*$/)) throw new p.ValidationError(`dropsToXrp: invalid value '${e}', should be a number matching (^-?[0-9]*\\.?[0-9]*$).`);
                    if ("." === e) throw new p.ValidationError(`dropsToXrp: invalid value '${e}', should be a BigNumber or string-encoded number.`)
                }
                if ((e = new c.default(e).toString(10)).includes(".")) throw new p.ValidationError(`dropsToXrp: value '${e}' has too many decimal places.`);
                if (!e.match(/^-?[0-9]+$/)) throw new p.ValidationError(`dropsToXrp: failed sanity check - value '${e}', does not match (^-?[0-9]+$).`);
                return new c.default(e).dividedBy(1e6).toString(10)
            }, t.xrpToDrops = h, t.toRippledAmount = function(e) {
                if ("string" == typeof e) return e;
                if ("XRP" === e.currency) return h(e.value);
                if ("drops" === e.currency) return e.value;
                let t = e.counterparty || e.issuer,
                    r = !1;
                try {
                    ({
                        classicAddress: t,
                        tag: r
                    } = l.xAddressToClassicAddress(t))
                } catch (e) {}
                if (!1 !== r) throw new p.ValidationError("Issuer X-address includes a tag");
                return {
                    currency: e.currency,
                    issuer: t,
                    value: e.value
                }
            }, t.convertKeysFromSnakeCaseToCamelCase = function e(t) {
                if ("object" == typeof t) {
                    const r = Array.isArray(t) ? [] : {};
                    let s;
                    return Object.entries(t).reduce((t, [r, i]) => {
                        s = r;
                        const n = /([a-zA-Z]_[a-zA-Z])/g;
                        return n.test(r) && (s = r.replace(n, e => e[0] + e[2].toUpperCase())), t[s] = e(i), t
                    }, r)
                }
                return t
            }, t.removeUndefined = function(e) {
                return o.omitBy(e, e => null == e)
            }, t.rippleTimeToISO8601 = function(e) {
                return new Date((t = e, 1e3 * (t + 946684800))).toISOString();
                var t
            }, t.iso8601ToRippleTime = function(e) {
                return t = Date.parse(e), Math.round(t / 1e3) - 946684800;
                var t
            }
        },
        6516: function(e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
                    void 0 === s && (s = r), Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, s) {
                    void 0 === s && (s = r), e[s] = t[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                n = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && s(t, e, r);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isValidAddress = t.isValidSecret = t.schemaValidate = void 0;
            const a = n(r(53)),
                o = n(r(72)),
                {
                    Validator: c
                } = r(9197),
                d = r(5782),
                p = r(5624),
                l = r(6187);
            Object.defineProperty(t, "isValidSecret", {
                enumerable: !0,
                get: function() {
                    return l.isValidSecret
                }
            });
            const h = function() {
                const e = [r(9200), r(9201), r(9202), r(9203), r(9204), r(9205), r(9206), r(9207), r(9208), r(9209), r(9210), r(9211), r(9212), r(9213), r(9214), r(9215), r(9216), r(9217), r(9218), r(9219), r(9220), r(9221), r(9222), r(9223), r(9224), r(9225), r(9226), r(9227), r(9228), r(9229), r(9230), r(9231), r(9232), r(9233), r(9234), r(9235), r(9236), r(9237), r(9238), r(9239), r(9240), r(9241), r(9242), r(9243), r(9244), r(9245), r(9246), r(9247), r(9248), r(9249), r(9250), r(9251), r(9252), r(9253), r(9254), r(9255), r(9256), r(9257), r(9258), r(9259), r(9260), r(9261), r(9262), r(9263), r(9264), r(9265), r(9266), r(9267), r(9268), r(9269), r(9270), r(9271), r(9272), r(9273), r(9274), r(9275), r(9276), r(9277), r(9278), r(9279), r(9280), r(9281), r(9282), r(9283), r(9284), r(9285), r(9286), r(9287), r(9288), r(9289), r(9290), r(9291), r(9292), r(9293), r(9294), r(9295), r(9296), r(9297), r(9298), r(9299), r(9300), r(9301), r(9302), r(9303), r(9304), r(9305), r(9306), r(9307), r(9308), r(9309), r(9310), r(9311), r(9312), r(9313), r(9314), r(9315)],
                    t = e.map(e => e.title),
                    s = Object.keys(a.pickBy(a.countBy(t), e => e > 1));
                o.ok(0 === s.length, "Duplicate schemas for: " + s);
                const i = new c;
                return i.customFormats.xAddress = function(e) {
                    return null == e || p.isValidXAddress(e)
                }, i.customFormats.classicAddress = function(e) {
                    return null == e || u(e)
                }, i.customFormats.secret = function(e) {
                    return null == e || l.isValidSecret(e)
                }, e.forEach(e => i.addSchema(e, "/" + e.title)), i
            }();

            function u(e) {
                return p.isValidXAddress(e) || p.isValidClassicAddress(e)
            }
            t.schemaValidate = function(e, t) {
                const r = h.getSchema("/" + e);
                if (null == r) throw new d.ValidationError("no schema for " + e);
                const s = h.validate(t, r);
                if (!s.valid) throw new d.ValidationError(s.errors.join())
            }, t.isValidAddress = u
        },
        7228: function(e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
                    void 0 === s && (s = r), Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, s) {
                    void 0 === s && (s = r), e[s] = t[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                n = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && s(t, e, r);
                    return i(t, e), t
                },
                a = this && this.__awaiter || function(e, t, r, s) {
                    return new(r || (r = Promise))((function(i, n) {
                        function a(e) {
                            try {
                                c(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function o(e) {
                            try {
                                c(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(a, o)
                        }
                        c((s = s.apply(e, t || [])).next())
                    }))
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RippleAPI = void 0;
            const c = r(69),
                d = r(5473),
                p = r(9320),
                l = o(r(7232)),
                h = o(r(9344)),
                u = o(r(9357)),
                f = o(r(9359)),
                m = o(r(9360)),
                g = o(r(9361)),
                y = o(r(9363)),
                b = r(9365),
                v = r(9367),
                T = o(r(9368)),
                P = o(r(9369)),
                w = o(r(9370)),
                A = o(r(9372)),
                $ = o(r(9373)),
                x = o(r(9374)),
                O = o(r(9375)),
                C = o(r(9376)),
                j = o(r(9377)),
                S = o(r(9378)),
                _ = o(r(9379)),
                R = o(r(9380)),
                N = o(r(9381)),
                I = o(r(9382)),
                k = o(r(9383)),
                q = o(r(9384)),
                E = o(r(9385)),
                V = o(r(9386)),
                D = o(r(9387)),
                L = o(r(9388)),
                F = o(r(9389)),
                M = r(7244),
                J = r(7245),
                X = o(r(7246)),
                H = o(r(7247)),
                B = o(r(7248)),
                z = o(r(9391)),
                K = o(r(7231)),
                U = n(r(5783)),
                G = n(r(5571)),
                W = n(r(6516)),
                Y = r(7230),
                Z = r(5783),
                Q = r(5624),
                ee = r(5928),
                te = o(r(9393));
            class RippleAPI extends c.EventEmitter {
                constructor(e = {}) {
                    super(), this.generateAddress = M.generateAddress, this.generateXAddress = M.generateXAddress, this.connect = p.connect, this.disconnect = p.disconnect, this.isConnected = p.isConnected, this.getServerInfo = Y.getServerInfo, this.getFee = Y.getFee, this.getLedgerVersion = p.getLedgerVersion, this.getTransaction = l.default, this.getTransactions = h.default, this.getTrustlines = u.default, this.getBalances = f.default, this.getBalanceSheet = m.default, this.getPaths = g.default, this.getOrderbook = b.getOrderbook, this.getOrders = y.default, this.getSettings = v.getSettings, this.getAccountInfo = T.default, this.getAccountObjects = P.default, this.getPaymentChannel = w.default, this.getLedger = z.default, this.parseAccountFlags = v.parseAccountFlags, this.preparePayment = A.default, this.prepareTrustline = $.default, this.prepareOrder = x.default, this.prepareOrderCancellation = O.default, this.prepareEscrowCreation = C.default, this.prepareEscrowExecution = j.default, this.prepareEscrowCancellation = S.default, this.preparePaymentChannelCreate = _.default, this.preparePaymentChannelFund = R.default, this.preparePaymentChannelClaim = N.default, this.prepareCheckCreate = I.default, this.prepareCheckCash = q.default, this.prepareCheckCancel = k.default, this.prepareTicketCreate = V.default, this.prepareSettings = E.default, this.sign = D.default, this.combine = L.default, this.submit = F.default, this.deriveKeypair = J.deriveKeypair, this.deriveAddress = J.deriveAddress, this.computeLedgerHash = X.default, this.signPaymentChannelClaim = H.default, this.verifyPaymentChannelClaim = B.default, this.generateFaucetWallet = te.default, this.errors = d.errors, this.xrpToDrops = d.xrpToDrops, this.dropsToXrp = d.dropsToXrp, this.rippleTimeToISO8601 = d.rippleTimeToISO8601, this.iso8601ToRippleTime = d.iso8601ToRippleTime, this.txFlags = d.txFlags, this.isValidAddress = W.isValidAddress, this.isValidSecret = W.isValidSecret, d.validate.apiOptions(e), this._feeCushion = e.feeCushion || 1.2, this._maxFeeXRP = e.maxFeeXRP || "2";
                    const t = e.server;
                    null != t ? (this.connection = new d.Connection(t, e), this.connection.on("ledgerClosed", e => {
                        this.emit("ledger", p.formatLedgerClose(e))
                    }), this.connection.on("error", (e, t, r) => {
                        this.emit("error", e, t, r)
                    }), this.connection.on("connected", () => {
                        this.emit("connected")
                    }), this.connection.on("disconnected", e => {
                        let t = e;
                        1005 !== t && 4e3 !== t || (t = 1e3), this.emit("disconnected", t)
                    })) : this.connection = new d.Connection(null, e)
                }
                request(e, t = {}) {
                    return a(this, void 0, void 0, (function*() {
                        return this.connection.request(Object.assign(Object.assign({}, t), {
                            command: e,
                            account: t.account ? d.ensureClassicAddress(t.account) : void 0
                        }))
                    }))
                }
                hasNextPage(e) {
                    return !!e.marker
                }
                requestNextPage(e, t = {}, r) {
                    return a(this, void 0, void 0, (function*() {
                        if (!r.marker) return Promise.reject(new d.errors.NotFoundError("response does not have a next page"));
                        const s = Object.assign({}, t, {
                            marker: r.marker
                        });
                        return this.request(e, s)
                    }))
                }
                prepareTransaction(e, t = {}) {
                    return a(this, void 0, void 0, (function*() {
                        return G.prepareTransaction(e, this, t)
                    }))
                }
                convertStringToHex(e) {
                    return G.convertStringToHex(e)
                }
                _requestAll(e, t = {}, r = {}) {
                    return a(this, void 0, void 0, (function*() {
                        const s = r.collect || function(e) {
                            switch (e) {
                                case "account_offers":
                                case "book_offers":
                                    return "offers";
                                case "account_lines":
                                    return "lines";
                                default:
                                    return
                            }
                        }(e);
                        if (!s) throw new d.errors.ValidationError("no collect key for command " + e);
                        const i = null != t.limit ? t.limit : 1 / 0;
                        let n, a = 0,
                            o = t.marker;
                        const c = [];
                        do {
                            const r = Z.clamp(i - a, 10, 400),
                                d = Object.assign(Object.assign({}, t), {
                                    limit: r,
                                    marker: o
                                }),
                                p = yield this.request(e, d), l = p[s];
                            o = p.marker, c.push(p);
                            Array.isArray(l) ? (a += l.length, n = l.length) : n = 0
                        } while (o && a < i && 0 !== n);
                        return c
                    }))
                }
            }
            t.RippleAPI = RippleAPI, RippleAPI._PRIVATE = {
                validate: d.validate,
                RangeSet: K.default,
                ledgerUtils: U,
                schemaValidator: W
            }, RippleAPI.renameCounterpartyToIssuer = Z.renameCounterpartyToIssuer, RippleAPI.formatBidsAndAsks = b.formatBidsAndAsks, RippleAPI.deriveXAddress = J.deriveXAddress, RippleAPI.deriveClassicAddress = J.deriveAddress, RippleAPI.classicAddressToXAddress = Q.classicAddressToXAddress, RippleAPI.xAddressToClassicAddress = Q.xAddressToClassicAddress, RippleAPI.isValidXAddress = Q.isValidXAddress, RippleAPI.isValidClassicAddress = Q.isValidClassicAddress, RippleAPI.encodeSeed = Q.encodeSeed, RippleAPI.decodeSeed = Q.decodeSeed, RippleAPI.encodeAccountID = Q.encodeAccountID, RippleAPI.decodeAccountID = Q.decodeAccountID, RippleAPI.encodeNodePublic = Q.encodeNodePublic, RippleAPI.decodeNodePublic = Q.decodeNodePublic, RippleAPI.encodeAccountPublic = Q.encodeAccountPublic, RippleAPI.decodeAccountPublic = Q.decodeAccountPublic, RippleAPI.encodeXAddress = Q.encodeXAddress, RippleAPI.decodeXAddress = Q.decodeXAddress, RippleAPI.computeBinaryTransactionHash = ee.computeBinaryTransactionHash, RippleAPI.computeTransactionHash = ee.computeTransactionHash, RippleAPI.computeBinaryTransactionSigningHash = ee.computeBinaryTransactionSigningHash, RippleAPI.computeAccountLedgerObjectID = ee.computeAccountLedgerObjectID, RippleAPI.computeSignerListLedgerObjectID = ee.computeSignerListLedgerObjectID, RippleAPI.computeOrderID = ee.computeOrderID, RippleAPI.computeTrustlineHash = ee.computeTrustlineHash, RippleAPI.computeTransactionTreeHash = ee.computeTransactionTreeHash, RippleAPI.computeStateTreeHash = ee.computeStateTreeHash, RippleAPI.computeLedgerHash = X.default, RippleAPI.computeEscrowHash = ee.computeEscrowHash, RippleAPI.computePaymentChannelHash = ee.computePaymentChannelHash, RippleAPI.accountSetFlags = d.constants.AccountSetFlags
        },
        7229: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.txFlagIndices = t.txFlags = void 0;
            t.txFlags = {
                Universal: {
                    FullyCanonicalSig: 2147483648
                },
                AccountSet: {
                    RequireDestTag: 65536,
                    OptionalDestTag: 131072,
                    RequireAuth: 262144,
                    OptionalAuth: 524288,
                    DisallowXRP: 1048576,
                    AllowXRP: 2097152
                },
                TrustSet: {
                    SetAuth: 65536,
                    NoRipple: 131072,
                    SetNoRipple: 131072,
                    ClearNoRipple: 262144,
                    SetFreeze: 1048576,
                    ClearFreeze: 2097152
                },
                OfferCreate: {
                    Passive: 65536,
                    ImmediateOrCancel: 131072,
                    FillOrKill: 262144,
                    Sell: 524288
                },
                Payment: {
                    NoRippleDirect: 65536,
                    PartialPayment: 131072,
                    LimitQuality: 262144
                },
                PaymentChannelClaim: {
                    Renew: 65536,
                    Close: 131072
                }
            };
            t.txFlagIndices = {
                AccountSet: {
                    asfRequireDest: 1,
                    asfRequireAuth: 2,
                    asfDisallowXRP: 3,
                    asfDisableMaster: 4,
                    asfAccountTxnID: 5,
                    asfNoFreeze: 6,
                    asfGlobalFreeze: 7,
                    asfDefaultRipple: 8,
                    asfDepositAuth: 9
                }
            }
        },
        7230: function(e, t, r) {
            "use strict";
            var s = this && this.__awaiter || function(e, t, r, s) {
                    return new(r || (r = Promise))((function(i, n) {
                        function a(e) {
                            try {
                                c(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function o(e) {
                            try {
                                c(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(a, o)
                        }
                        c((s = s.apply(e, t || [])).next())
                    }))
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getFee = t.getServerInfo = void 0;
            const n = r(6187),
                a = i(r(5614));

            function o(e, t) {
                Object.entries(t).forEach(t => {
                    const [r, s] = t;
                    e[s] = e[r], delete e[r]
                })
            }
            t.getServerInfo = function() {
                return this.request("server_info").then(e => {
                    const t = n.convertKeysFromSnakeCaseToCamelCase(e.info);
                    return o(t, {
                        hostid: "hostID"
                    }), t.validatedLedger && (o(t.validatedLedger, {
                        baseFeeXrp: "baseFeeXRP",
                        reserveBaseXrp: "reserveBaseXRP",
                        reserveIncXrp: "reserveIncrementXRP",
                        seq: "ledgerVersion"
                    }), t.validatedLedger.baseFeeXRP = t.validatedLedger.baseFeeXRP.toString(), t.validatedLedger.reserveBaseXRP = t.validatedLedger.reserveBaseXRP.toString(), t.validatedLedger.reserveIncrementXRP = t.validatedLedger.reserveIncrementXRP.toString()), t
                })
            }, t.getFee = function(e) {
                return s(this, void 0, void 0, (function*() {
                    null == e && (e = this._feeCushion), null == e && (e = 1.2);
                    const t = (yield this.request("server_info")).info,
                        r = new a.default(t.validated_ledger.base_fee_xrp);
                    null == t.load_factor && (t.load_factor = 1);
                    let s = r.times(t.load_factor).times(e);
                    return s = a.default.min(s, this._maxFeeXRP), new a.default(s.toFixed(6)).toString(10)
                }))
            }
        },
        7231: function(e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
                    void 0 === s && (s = r), Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, s) {
                    void 0 === s && (s = r), e[s] = t[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                n = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && s(t, e, r);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = n(r(53)),
                o = n(r(72));
            t.default = class RangeSet {
                constructor() {
                    this.reset()
                }
                reset() {
                    this.ranges = []
                }
                serialize() {
                    return this.ranges.map(e => e[0].toString() + "-" + e[1].toString()).join(",")
                }
                addRange(e, t) {
                    o.ok(e <= t, `invalid range ${e} <= ${t}`), this.ranges = function(e) {
                        const t = [
                            [-1 / 0, -1 / 0]
                        ];
                        return a.sortBy(e, e => e[0]).forEach(e => {
                            const r = t.pop();
                            e[0] <= r[1] + 1 ? t.push([r[0], Math.max(e[1], r[1])]) : (t.push(r), t.push(e))
                        }), t.slice(1)
                    }(this.ranges.concat([
                        [e, t]
                    ]))
                }
                addValue(e) {
                    this.addRange(e, e)
                }
                parseAndAddRanges(e) {
                    e.split(",").forEach(e => {
                        const t = e.split("-").map(Number);
                        this.addRange(t[0], 1 === t.length ? t[0] : t[1])
                    })
                }
                containsRange(e, t) {
                    return this.ranges.some(r => r[0] <= e && r[1] >= t)
                }
                containsValue(e) {
                    return this.containsRange(e, e)
                }
            }
        },
        7241: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = r(24);
            t.default = e => s.createHash("sha512").update(Buffer.from(e, "hex")).digest("hex").toUpperCase().slice(0, 64)
        },
        7242: function(e, t, r) {
            "use strict";
            var s;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e[e.TRANSACTION_ID = 1415073280] = "TRANSACTION_ID", e[e.TRANSACTION_NODE = 1397638144] = "TRANSACTION_NODE", e[e.INNER_NODE = 1296649728] = "INNER_NODE", e[e.LEAF_NODE = 1296846336] = "LEAF_NODE", e[e.TRANSACTION_SIGN = 1398036480] = "TRANSACTION_SIGN", e[e.TRANSACTION_SIGN_TESTNET = 1937012736] = "TRANSACTION_SIGN_TESTNET", e[e.TRANSACTION_MULTISIGN = 1397576704] = "TRANSACTION_MULTISIGN", e[e.LEDGER = 1280791040] = "LEDGER"
                }(s || (s = {})), t.default = s
        },
        9194: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AccountFlags = t.AccountSetFlags = t.AccountFields = void 0;
            const s = r(7229),
                i = {
                    passwordSpent: 65536,
                    requireDestinationTag: 131072,
                    requireAuthorization: 262144,
                    depositAuth: 16777216,
                    disallowIncomingXRP: 524288,
                    disableMasterKey: 1048576,
                    noFreeze: 2097152,
                    globalFreeze: 4194304,
                    defaultRipple: 8388608
                };
            t.AccountFlags = i;
            const n = {
                requireDestinationTag: s.txFlagIndices.AccountSet.asfRequireDest,
                requireAuthorization: s.txFlagIndices.AccountSet.asfRequireAuth,
                depositAuth: s.txFlagIndices.AccountSet.asfDepositAuth,
                disallowIncomingXRP: s.txFlagIndices.AccountSet.asfDisallowXRP,
                disableMasterKey: s.txFlagIndices.AccountSet.asfDisableMaster,
                enableTransactionIDTracking: s.txFlagIndices.AccountSet.asfAccountTxnID,
                noFreeze: s.txFlagIndices.AccountSet.asfNoFreeze,
                globalFreeze: s.txFlagIndices.AccountSet.asfGlobalFreeze,
                defaultRipple: s.txFlagIndices.AccountSet.asfDefaultRipple
            };
            t.AccountSetFlags = n;
            t.AccountFields = {
                EmailHash: {
                    name: "emailHash",
                    encoding: "hex",
                    length: 32,
                    defaults: "00000000000000000000000000000000"
                },
                WalletLocator: {
                    name: "walletLocator"
                },
                MessageKey: {
                    name: "messageKey"
                },
                Domain: {
                    name: "domain",
                    encoding: "hex"
                },
                TransferRate: {
                    name: "transferRate",
                    defaults: 0,
                    shift: 9
                },
                TickSize: {
                    name: "tickSize",
                    defaults: 0
                }
            }
        },
        9195: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setPrototypeOf = t.getConstructorName = void 0, t.setPrototypeOf = function(e, t) {
                Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
            }, t.getConstructorName = function(e) {
                if (e.constructor.name) return e.constructor.name;
                const t = e.constructor.toString(),
                    r = t.match(/^function\s+([^(]*)/),
                    s = t.match(/^class\s([^\s]*)/);
                return r ? r[1] : s[1]
            }
        },
        9196: function(e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
                    void 0 === s && (s = r), Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, s) {
                    void 0 === s && (s = r), e[s] = t[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                n = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && s(t, e, r);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.tx_json = t.instructions = t.apiOptions = t.verifyPaymentChannelClaim = t.signPaymentChannelClaim = t.generateAddress = t.computeLedgerHash = t.submit = t.combine = t.sign = t.prepareTicketCreate = t.prepareCheckCancel = t.prepareCheckCash = t.prepareCheckCreate = t.preparePaymentChannelClaim = t.preparePaymentChannelFund = t.preparePaymentChannelCreate = t.prepareEscrowExecution = t.prepareEscrowCancellation = t.prepareEscrowCreation = t.prepareSettings = t.prepareTrustline = t.prepareOrderCancellation = t.prepareOrder = t.preparePayment = t.getLedger = t.getPaymentChannel = t.getTransaction = t.getOrderbook = t.getOrders = t.getBalanceSheet = t.getBalances = t.getTrustlines = t.getAccountInfo = t.getSettings = t.getTransactions = t.getPaths = void 0;
            const a = n(r(53)),
                o = r(5782),
                c = r(6516);

            function d(e) {
                if (null != e && null != e.minLedgerVersion && null != e.maxLedgerVersion && Number(e.minLedgerVersion) > Number(e.maxLedgerVersion)) throw t = "minLedgerVersion must not be greater than maxLedgerVersion", new o.ValidationError(t);
                var t
            }

            function p(e, t) {
                c.schemaValidate(e, t), d(t.options)
            }
            t.getPaths = a.partial(c.schemaValidate, "getPathsParameters"), t.getTransactions = a.partial(p, "getTransactionsParameters"), t.getSettings = a.partial(p, "getSettingsParameters"), t.getAccountInfo = a.partial(p, "getAccountInfoParameters"), t.getTrustlines = a.partial(p, "getTrustlinesParameters"), t.getBalances = a.partial(p, "getBalancesParameters"), t.getBalanceSheet = a.partial(p, "getBalanceSheetParameters"), t.getOrders = a.partial(p, "getOrdersParameters"), t.getOrderbook = a.partial(p, "getOrderbookParameters"), t.getTransaction = a.partial(p, "getTransactionParameters"), t.getPaymentChannel = a.partial(p, "getPaymentChannelParameters"), t.getLedger = a.partial(p, "getLedgerParameters"), t.preparePayment = a.partial(c.schemaValidate, "preparePaymentParameters"), t.prepareOrder = a.partial(c.schemaValidate, "prepareOrderParameters"), t.prepareOrderCancellation = a.partial(c.schemaValidate, "prepareOrderCancellationParameters"), t.prepareTrustline = a.partial(c.schemaValidate, "prepareTrustlineParameters"), t.prepareSettings = a.partial(c.schemaValidate, "prepareSettingsParameters"), t.prepareEscrowCreation = a.partial(c.schemaValidate, "prepareEscrowCreationParameters"), t.prepareEscrowCancellation = a.partial(c.schemaValidate, "prepareEscrowCancellationParameters"), t.prepareEscrowExecution = a.partial(c.schemaValidate, "prepareEscrowExecutionParameters"), t.preparePaymentChannelCreate = a.partial(c.schemaValidate, "preparePaymentChannelCreateParameters"), t.preparePaymentChannelFund = a.partial(c.schemaValidate, "preparePaymentChannelFundParameters"), t.preparePaymentChannelClaim = a.partial(c.schemaValidate, "preparePaymentChannelClaimParameters"), t.prepareCheckCreate = a.partial(c.schemaValidate, "prepareCheckCreateParameters"), t.prepareCheckCash = a.partial(c.schemaValidate, "prepareCheckCashParameters"), t.prepareCheckCancel = a.partial(c.schemaValidate, "prepareCheckCancelParameters"), t.prepareTicketCreate = a.partial(c.schemaValidate, "prepareTicketParameters"), t.sign = a.partial(c.schemaValidate, "signParameters"), t.combine = a.partial(c.schemaValidate, "combineParameters"), t.submit = a.partial(c.schemaValidate, "submitParameters"), t.computeLedgerHash = a.partial(c.schemaValidate, "computeLedgerHashParameters"), t.generateAddress = a.partial(c.schemaValidate, "generateAddressParameters"), t.signPaymentChannelClaim = a.partial(c.schemaValidate, "signPaymentChannelClaimParameters"), t.verifyPaymentChannelClaim = a.partial(c.schemaValidate, "verifyPaymentChannelClaimParameters"), t.apiOptions = a.partial(c.schemaValidate, "api-options"), t.instructions = a.partial(c.schemaValidate, "instructions"), t.tx_json = a.partial(c.schemaValidate, "tx-json")
        },
        9200: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"tx-json","link":"https://xrpl.org/transaction-formats.html","description":"An object in rippled txJSON format","type":"object","properties":{"Account":{"$ref":"address"},"TransactionType":{"type":"string"}},"required":["Account","TransactionType"]}')
        },
        9201: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"transactionType","link":"transaction-types","description":"The type of the transaction.","type":"string","enum":["payment","order","orderCancellation","trustline","settings","escrowCreation","escrowCancellation","escrowExecution","paymentChannelCreate","paymentChannelFund","paymentChannelClaim","checkCreate","checkCancel","checkCash","depositPreauth","accountDelete"]}')
        },
        9202: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"hash128","description":"The hexadecimal representation of a 128-bit hash","type":"string","pattern":"^[A-F0-9]{32}$"}')
        },
        9203: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"hash256","description":"The hexadecimal representation of a 256-bit hash","type":"string","pattern":"^[A-F0-9]{64}$"}')
        },
        9204: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"sequence","link":"account-sequence-number","description":"An account transaction sequence number","type":"integer","minimum":0}')
        },
        9205: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"ticket-sequence","link":"account-sequence-number","description":"An account transaction tickt sequence number","type":"integer","minimum":1}')
        },
        9206: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"signature","description":"The hexadecimal representation of a signature.","type":"string","pattern":"^[A-F0-9]+$"}')
        },
        9207: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"issue","description":"The currency code, and the counterparty if it\'s not XRP.","allOf":[{"$ref":"amountbase"},{"not":{"required":["value"]}}]}')
        },
        9208: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"ledgerVersion","description":"A ledger version number","oneOf":[{"type":"integer","minimum":1},{"type":"string","enum":["validated","closed","current"]}]}')
        },
        9209: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"maxAdjustment","type":"object","properties":{"address":{"$ref":"address","description":"The address to send from."},"maxAmount":{"$ref":"laxAmount","description":"The maximum amount to send. (This field cannot be used with source.amount)"},"tag":{"$ref":"tag"}},"required":["address","maxAmount"],"additionalProperties":false}')
        },
        9210: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"memo","description":"Memo objects represent arbitrary data that can be included in a transaction","type":"object","properties":{"type":{"pattern":"^[A-Za-z0-9\\\\-._~:/?#[\\\\]@!$&\'()*+,;=%]*$","description":"Conventionally, a unique relation (according to [RFC 5988](http://tools.ietf.org/html/rfc5988#section-4)) that defines the format of this memo. Only characters allowed in URLs are permitted."},"format":{"pattern":"^[A-Za-z0-9\\\\-._~:/?#[\\\\]@!$&\'()*+,;=%]*$","description":"Conventionally containing information on how the memo is encoded, for example as a [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml). Only characters allowed in URLs are permitted."},"data":{"type":"string","description":"Arbitrary string, conventionally containing the content of the memo."}},"additionalProperties":false,"anyOf":[{"required":["data"]},{"required":["type"]}]}')
        },
        9211: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"memos","link":"transaction-memos","description":"Array of memos to attach to the transaction.","type":"array","items":{"$ref":"memo"}}')
        },
        9212: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"publicKey","description":"The hexadecimal representation of a secp256k1 or Ed25519 public key.","type":"string","pattern":"^[A-F0-9]+$"}')
        },
        9213: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"privateKey","description":"The hexadecimal representation of a secp256k1 or Ed25519 private key.","type":"string","pattern":"^[A-F0-9]+$"}')
        },
        9214: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"uint32","description":"A 32-bit unsigned integer","type":"integer","minimum":0,"maximum":4294967295}')
        },
        9215: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"value","link":"value","description":"A string representation of a non-negative floating point number","type":"string","pattern":"^[0-9]*[.]?[0-9]+([eE][-+]?[0-9]+)?$"}')
        },
        9216: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"sourceAdjustment","type":"object","oneOf":[{"$ref":"sourceExactAdjustment"},{"$ref":"maxAdjustment"}]}')
        },
        9217: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"destinationAdjustment","type":"object","oneOf":[{"$ref":"destinationExactAdjustment"},{"$ref":"minAdjustment"}]}')
        },
        9218: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"tag","description":"An arbitrary 32-bit unsigned integer. It typically maps to an off-ledger account; for example, a hosted wallet or exchange account.","type":"integer","$ref":"uint32"}')
        },
        9219: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"laxAmount","description":"Amount where counterparty is optional","link":"amount","type":"object","properties":{"currency":{"$ref":"currency"},"counterparty":{"$ref":"address"},"value":{"$ref":"value"}},"required":["currency","value"],"additionalProperties":false}')
        },
        9220: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"laxLaxAmount","description":"Amount where counterparty and value are optional","link":"amount","type":"object","properties":{"currency":{"$ref":"currency"},"counterparty":{"$ref":"address"},"value":{"$ref":"value"}},"required":["currency"],"additionalProperties":false}')
        },
        9221: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"minAdjustment","type":"object","properties":{"address":{"$ref":"address","description":"An address representing the destination of the transaction."},"minAmount":{"$ref":"laxAmount","description":"The minimum amount to be delivered. (This field cannot be used with destination.amount)"},"tag":{"$ref":"tag"}},"required":["address","minAmount"],"additionalProperties":false}')
        },
        9222: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"sourceExactAdjustment","type":"object","properties":{"address":{"$ref":"address","description":"The address to send from."},"amount":{"$ref":"laxAmount","description":"An exact amount to send. If the counterparty is not specified, amounts with any counterparty may be used. (This field cannot be used with source.maxAmount)"},"tag":{"$ref":"tag"}},"required":["address","amount"],"additionalProperties":false}')
        },
        9223: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"destinationExactAdjustment","type":"object","properties":{"address":{"$ref":"address","description":"An address representing the destination of the transaction."},"amount":{"$ref":"laxAmount","description":"An exact amount to deliver to the recipient. If the counterparty is not specified, amounts with any counterparty may be used. (This field cannot be used with `destination.minAmount`.)"},"tag":{"$ref":"tag"}},"required":["address","amount"],"additionalProperties":false}')
        },
        9224: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"destinationAddressTag","description":"A destination address and optional tag, with no amount included. When parsing an incoming transaction, the original specification\'s amount is hidden to prevent misinterpretation. For the amount that the transaction delivered, see `outcome.deliveredAmount`.","type":"object","properties":{"address":{"$ref":"address","description":"An address representing the destination of the transaction."},"tag":{"$ref":"tag"}},"required":["address"],"additionalProperties":false}')
        },
        9225: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"transactionHash","link":"transaction-id","description":"A hash of a transaction used to identify the transaction, represented in hexadecimal.","type":"string","pattern":"^[A-F0-9]{64}$"}')
        },
        9226: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"address","description":"An account address on the XRP Ledger","type":"string","format":"address","link":"address","oneOf":[{"$ref":"xAddress"},{"$ref":"classicAddress"}]}')
        },
        9227: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"xAddress","description":"An XRP Ledger address in X-address format","type":"string","format":"xAddress","link":"x-address","pattern":"^[XT][1-9A-HJ-NP-Za-km-z]{46}$"}')
        },
        9228: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"classicAddress","description":"A classic address (Account ID) for the XRP Ledger","type":"string","format":"classicAddress","link":"classic-address","pattern":"^r[1-9A-HJ-NP-Za-km-z]{24,34}$"}')
        },
        9229: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"adjustment","type":"object","properties":{"address":{"$ref":"address"},"amount":{"$ref":"amount"},"tag":{"$ref":"tag"}},"required":["address","amount"],"additionalProperties":false}')
        },
        9230: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"quality","description":"Ratio for incoming/outgoing transit fees.","type":"number","minimum":1e-9,"maximum":4.294967295}')
        },
        9231: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"amount","link":"amount","description":"An Amount on the XRP Ledger","allOf":[{"$ref":"amountbase"},{"required":["value"]}]}')
        },
        9232: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"amountbase","description":"Base class for amount and issue","type":"object","properties":{"value":{"description":"The quantity of the currency, denoted as a string so that it does not lose precision","$ref":"value"},"currency":{"description":"The three-character code or hexadecimal string used to denote currencies, or \\"drops\\" for the smallest unit of XRP.","$ref":"currency"},"counterparty":{"description":"The XRP Ledger address of the account that owes or is owed the funds (omitted if `currency` is \\"XRP\\" or \\"drops\\")","$ref":"address"}},"additionalProperties":false,"required":["currency"],"oneOf":[{"properties":{"currency":{"not":{"enum":["XRP","drops"]}}},"required":["counterparty"]},{"properties":{"currency":{"enum":["XRP","drops"]}},"not":{"required":["counterparty"]}}]}')
        },
        9233: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"balance","description":"Balance amount","link":"amount","type":"object","properties":{"value":{"description":"The balance on the trustline","$ref":"signedValue"},"currency":{"description":"The three-character code or hexadecimal string used to denote currencies","$ref":"currency"},"counterparty":{"description":"The XRP Ledger address of the account that owes or is owed the funds.","$ref":"address"}},"additionalProperties":false,"required":["currency","value"],"oneOf":[{"properties":{"currency":{"not":{"enum":["XRP"]}}},"required":["counterparty"]},{"properties":{"currency":{"enum":["XRP"]}},"not":{"required":["counterparty"]}}]}')
        },
        9234: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"blob","description":"An uppercase hexadecimal string representation of a transaction","type":"string","minLength":1,"pattern":"^[0-9A-F]*$"}')
        },
        9235: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"currency","description":"The three-character code or hexadecimal string used to denote currencies","type":"string","link":"currency","pattern":"^([a-zA-Z0-9<>(){}[\\\\]|?!@#$%^&*]{3}|[A-F0-9]{40}|drops)$"}')
        },
        9236: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"signedValue","description":"A string representation of a floating point number","type":"string","link":"value","pattern":"^[-]?[0-9]*[.]?[0-9]+([eE][-+]?[0-9]+)?$"}')
        },
        9237: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"orderbook","type":"object","properties":{"base":{"$ref":"issue"},"counter":{"$ref":"issue"}},"required":["base","counter"],"additionalProperties":false}')
        },
        9238: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"instructions","link":"transaction-instructions","description":"Instructions for executing the transaction","type":"object","properties":{"sequence":{"description":"The initiating account\'s sequence number for this transaction. `sequence` and `ticketSequence` are mutually exclusive, only one of them can be set.","$ref":"sequence"},"ticketSequence":{"description":"The ticket sequence to be used for this transaction. `sequence` and `ticketSequence` are mutually exclusive, only one of them can be set.","$ref":"ticket-sequence"},"fee":{"description":"An exact fee to pay for the transaction, before multiplying for multi-signed transactions. See [Transaction Fees](#transaction-fees) for more information.","$ref":"value"},"maxFee":{"description":"Deprecated: Use `maxFeeXRP` in the RippleAPI constructor instead. The maximum fee to pay for this transaction. If this exceeds `maxFeeXRP`, use `maxFeeXRP` instead. See [Transaction Fees](#transaction-fees) for more information.","$ref":"value"},"maxLedgerVersion":{"description":"The highest ledger version that the transaction can be included in. If this option and `maxLedgerVersionOffset` are both omitted, the default is 3 greater than the current validated ledger version (equivalent to `maxLedgerVersionOffset=3`). Use `null` to not set a maximum ledger version. If not null, this must be an integer greater than 0, or one of the following strings: \'validated\', \'closed\', \'current\'.","oneOf":[{"$ref":"ledgerVersion"},{"type":"null"}]},"maxLedgerVersionOffset":{"description":"Offset from current validated ledger version to highest ledger version that the transaction can be included in.","type":"integer","minimum":0},"signersCount":{"description":"Number of signers that can multi-sign this transaction.","type":"integer","minimum":1}},"additionalProperties":false,"not":{"anyOf":[{"description":"fee and maxFee are mutually exclusive","required":["fee","maxFee"]},{"description":"maxLedgerVersion and maxLedgerVersionOffset are mutually exclusive","required":["maxLedgerVersion","maxLedgerVersionOffset"]},{"description":"sequence and ticketSequence are mutually exclusive","required":["sequence","ticketSequence"]}]}}')
        },
        9239: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"settingsPlusMemos","type":"object","properties":{"defaultRipple":{"type":"boolean","description":"Enable [rippling](https://xrpl.org/rippling.html) on this account’s trust lines by default. Currency issuers should enable this setting; most others should not."},"depositAuth":{"type":"boolean","description":"Enable [Deposit Authorization](https://xrpl.org/depositauth.html) on this account. If set, transactions cannot send value of any kind to this account unless the sender of those transactions is the account itself. (Requires the [DepositAuth amendment](https://xrpl.org/known-amendments.html#depositauth))"},"disableMasterKey":{"type":"boolean","description":"Disallows use of the master key to sign transactions for this account. To disable the master key, you must authorize the transaction by signing it with the master key pair. You cannot use a regular key pair or a multi-signature. You can re-enable the master key pair using a regular key pair or multi-signature. See [AccountSet](https://xrpl.org/accountset.html)."},"disallowIncomingXRP":{"type":"boolean","description":"Indicates that client applications should not send XRP to this account. Not enforced by rippled."},"domain":{"type":"string","description":"The domain that owns this account, as a hexadecimal string representing the ASCII for the domain in lowercase."},"emailHash":{"description":"Hash of an email address to be used for generating an avatar image. Conventionally, clients use Gravatar to display this image. Use `null` to clear.","oneOf":[{"type":"null"},{"$ref":"hash128"}]},"walletLocator":{"description":"Transaction hash or any other 64 character hexadecimal string, that may or may not represent the result of a hash operation. Use `null` to clear.","oneOf":[{"type":"null"},{"$ref":"hash256"}]},"enableTransactionIDTracking":{"type":"boolean","description":"Track the ID of this account’s most recent transaction."},"globalFreeze":{"type":"boolean","description":"Freeze all assets issued by this account."},"memos":{"$ref":"memos"},"messageKey":{"type":"string","description":"Public key for sending encrypted messages to this account. Conventionally, it should be a secp256k1 key, the same encryption that is used by the rest of Ripple."},"noFreeze":{"type":"boolean","description":"Permanently give up the ability to freeze individual trust lines. This flag can never be disabled after being enabled."},"passwordSpent":{"type":"boolean","description":"Indicates that the account has used its free SetRegularKey transaction."},"regularKey":{"oneOf":[{"$ref":"address"},{"type":"null"}],"description":"The public key of a new keypair, to use as the regular key to this account, as a base-58-encoded string in the same format as an account address. Use `null` to remove the regular key."},"requireAuthorization":{"type":"boolean","description":"If set, this account must individually give other users permission to hold this account’s issued tokens."},"requireDestinationTag":{"type":"boolean","description":"Requires incoming payments to specify a destination tag."},"signers":{"type":"object","description":"Settings that determine what sets of accounts can be used to sign a transaction on behalf of this account using multisigning.","properties":{"threshold":{"$ref":"uint32","description":"A target number for the signer weights. A multi-signature from this list is valid only if the sum weights of the signatures provided is equal or greater than this value. To delete the signers setting, use the value `0`."},"weights":{"type":"array","description":"Weights of signatures for each signer.","items":{"type":"object","description":"An association of an address and a weight.","properties":{"address":{"$ref":"address"},"weight":{"$ref":"uint32","description":"The weight that the signature of this account counts as towards the threshold."}},"required":["address","weight"],"additionalProperties":false},"minItems":1,"maxItems":8}},"required":["threshold"],"additionalProperties":false},"transferRate":{"description":"The fee to charge when users transfer this account’s issuances, as the decimal amount that must be sent to deliver 1 unit. Has precision up to 9 digits beyond the decimal point. Use `null` to set no fee.","oneOf":[{"type":"null"},{"type":"number","minimum":1,"maximum":4.294967295}]},"tickSize":{"description":"Tick size to use for offers involving a currency issued by this address. The exchange rates of those offers is rounded to this many significant digits. Valid values are 3 to 15 inclusive, or 0 to disable.","enum":[0,3,4,5,6,7,8,9,10,11,12,13,14,15]}},"additionalProperties":false}')
        },
        9240: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"settings","link":"settings","$ref":"settingsPlusMemos","oneOf":[{"required":["memos"],"minProperties":2,"maxProperties":2},{"not":{"required":["memos"]},"minProperties":1,"maxProperties":1}]}')
        },
        9241: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"payment","link":"payment","type":"object","properties":{"source":{"$ref":"sourceAdjustment","description":"The source of the funds to be sent."},"destination":{"$ref":"destinationAdjustment","description":"The destination of the funds to be sent."},"paths":{"type":"string","description":"The paths of trustlines and orders to use in executing the payment."},"memos":{"$ref":"memos"},"invoiceID":{"description":"A 256-bit hash that can be used to identify a particular payment.","$ref":"hash256"},"allowPartialPayment":{"description":"If true, this payment can deliver less than the full amount.","type":"boolean"},"noDirectRipple":{"description":"If true and paths are specified, the sender would like the XRP Ledger to disregard any direct paths from the source account to the destination account. This may be used to take advantage of an arbitrage opportunity or by gateways wishing to issue balances from a hot wallet to a user who has mistakenly set a trustline directly to the hot wallet.","type":"boolean"},"limitQuality":{"description":"Only take paths where all the conversions have an input:output ratio that is equal or better than the ratio of destination.amount:source.maxAmount.","type":"boolean"}},"required":["source","destination"],"additionalProperties":false}')
        },
        9242: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getPayment","description":"A specification of a payment in a response for getTransaction or getTransactions.","type":"object","properties":{"source":{"$ref":"sourceAdjustment","description":"The source of the funds to be sent."},"destination":{"$ref":"destinationAddressTag","description":"The destination of the funds to be sent. Since this is a payment response, the amount is not shown here. For the amount that the transaction delivered, see `outcome.deliveredAmount`."},"paths":{"type":"string","description":"The paths of trustlines and orders to use in executing the payment."},"memos":{"$ref":"memos"},"invoiceID":{"description":"A 256-bit hash that can be used to identify a particular payment.","$ref":"hash256"},"allowPartialPayment":{"description":"If true, this payment can deliver less than the full amount.","type":"boolean"},"noDirectRipple":{"description":"If true and paths are specified, the sender would like the XRP Ledger to disregard any direct paths from the source account to the destination account. This may be used to take advantage of an arbitrage opportunity or by gateways wishing to issue balances from a hot wallet to a user who has mistakenly set a trustline directly to the hot wallet.","type":"boolean"},"limitQuality":{"description":"Only take paths where all the conversions have an input:output ratio that is equal or better than the ratio of destination.amount:source.maxAmount.","type":"boolean"}},"required":["source","destination"],"additionalProperties":false}')
        },
        9243: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"escrowCancellation","link":"escrow-cancellation","type":"object","properties":{"memos":{"$ref":"memos"},"owner":{"$ref":"address","description":"The address of the owner of the escrow to cancel."},"escrowSequence":{"$ref":"sequence","description":"The [account sequence number](#account-sequence-number) of the [Escrow Creation](#escrow-creation) transaction for the escrow to cancel."}},"required":["owner","escrowSequence"],"additionalProperties":false}')
        },
        9244: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"orderCancellation","link":"order-cancellation","type":"object","properties":{"orderSequence":{"$ref":"sequence","description":"The [account sequence number](#account-sequence-number) of the order to cancel."},"memos":{"$ref":"memos"}},"required":["orderSequence"],"additionalProperties":false}')
        },
        9245: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"order","link":"order","type":"object","properties":{"direction":{"type":"string","enum":["buy","sell"],"description":"Equal to \\"buy\\" for buy orders and \\"sell\\" for sell orders."},"quantity":{"$ref":"amount","description":"The amount of currency to buy or sell."},"totalPrice":{"$ref":"amount","description":"The total price to be paid for the `quantity` to be bought or sold."},"immediateOrCancel":{"type":"boolean","description":"Treat the offer as an [Immediate or Cancel order](http://en.wikipedia.org/wiki/Immediate_or_cancel). If enabled, do not create an object in the ledger that can be matched later: instead, only execute as much as can be fulfilled immediately. This cannot be used with `fillOrKill`."},"fillOrKill":{"type":"boolean","description":"Treat the offer as a [Fill or Kill order](http://en.wikipedia.org/wiki/Fill_or_kill). Only attempt to match existing offers in the ledger, and only do so if the entire quantity can be exchanged. This cannot be used with `immediateOrCancel`."},"passive":{"description":"If enabled, the offer does not consume offers that exactly match it, and instead becomes an Offer node in the ledger. It still consumes offers that cross it.","type":"boolean"},"expirationTime":{"type":"string","format":"date-time","description":"Time after which the offer is no longer active, as an [ISO 8601 date-time](https://en.wikipedia.org/wiki/ISO_8601)."},"orderToReplace":{"$ref":"sequence","description":"The [account sequence number](#account-sequence-number) of an order to cancel before the new order is created, effectively replacing the old order."},"memos":{"$ref":"memos"}},"required":["direction","quantity","totalPrice"],"additionalProperties":false,"not":{"description":"immediateOrCancel and fillOrKill are mutually exclusive","required":["immediateOrCancel","fillOrKill"]}}')
        },
        9246: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"escrowExecution","link":"escrow-execution","type":"object","properties":{"memos":{"$ref":"memos"},"owner":{"$ref":"address","description":"The address of the owner of the escrow to execute."},"escrowSequence":{"$ref":"sequence","description":"The [account sequence number](#account-sequence-number) of the [Escrow Creation](#escrow-creation) transaction for the escrow to execute."},"condition":{"type":"string","description":"A hex value representing a [PREIMAGE-SHA-256 crypto-condition](https://tools.ietf.org/html/draft-thomas-crypto-conditions-02#section-8.1). This must match the original `condition` from the escrow creation transaction.","pattern":"^[A-F0-9]{0,256}$"},"fulfillment":{"type":"string","description":"A hex value representing the [PREIMAGE-SHA-256 crypto-condition](https://tools.ietf.org/html/draft-thomas-crypto-conditions-02#section-8.1) fulfillment for `condition`.","pattern":"^[A-F0-9]+$"}},"required":["owner","escrowSequence"],"additionalProperties":false}')
        },
        9247: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"escrowCreation","link":"escrow-creation","type":"object","properties":{"amount":{"$ref":"value","description":"Amount of XRP for sender to escrow."},"destination":{"$ref":"address","description":"Address to receive escrowed XRP."},"memos":{"$ref":"memos"},"condition":{"type":"string","description":"A hex value representing a [PREIMAGE-SHA-256 crypto-condition](https://tools.ietf.org/html/draft-thomas-crypto-conditions-02#section-8.1). If present, `fulfillment` is required upon execution.","pattern":"^[A-F0-9]{0,256}$"},"allowCancelAfter":{"type":"string","format":"date-time","description":"If present, the escrow may be cancelled after this time."},"allowExecuteAfter":{"type":"string","format":"date-time","description":"If present, the escrow can not be executed before this time."},"sourceTag":{"$ref":"tag","description":"Source tag."},"destinationTag":{"$ref":"tag","description":"Destination tag."}},"required":["amount","destination"],"additionalProperties":false}')
        },
        9248: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"paymentChannelCreate","link":"payment-channel-create","type":"object","properties":{"amount":{"$ref":"value","description":"Amount of XRP for sender to set aside in this channel."},"destination":{"$ref":"address","description":"Address to receive XRP claims against this channel."},"settleDelay":{"type":"number","description":"Amount of seconds the source address must wait before closing the channel if it has unclaimed XRP."},"publicKey":{"$ref":"publicKey","description":"Public key of the key pair the source may use to sign claims against this channel."},"cancelAfter":{"type":"string","format":"date-time","description":"Time when this channel expires. This expiration cannot be changed after creating the channel."},"sourceTag":{"$ref":"tag","description":"Source tag."},"destinationTag":{"$ref":"tag","description":"Destination tag."},"memos":{"$ref":"memos"}},"required":["amount","destination","settleDelay","publicKey"],"additionalProperties":false}')
        },
        9249: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"paymentChannelFund","link":"payment-channel-fund","type":"object","properties":{"amount":{"$ref":"value","description":"Amount of XRP to fund the channel with."},"channel":{"$ref":"hash256","description":"256-bit hexadecimal channel identifier."},"expiration":{"type":"string","format":"date-time","description":"New expiration for this channel. (This does not change the cancelAfter expiration, if the channel has one.) Cannot move the expiration sooner than settleDelay seconds from time of the request."},"memos":{"$ref":"memos"}},"required":["amount","channel"],"additionalProperties":false}')
        },
        9250: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"paymentChannelClaim","link":"payment-channel-claim","type":"object","properties":{"channel":{"$ref":"hash256","description":"256-bit hexadecimal channel identifier."},"amount":{"$ref":"value","description":"Amount of XRP authorized by this signature."},"balance":{"$ref":"value","description":"Total XRP balance delivered by this channel after claim is processed."},"signature":{"$ref":"signature","description":"Signed claim authorizing withdrawal of XRP from the channel. (Required except from the channel\'s source address.)"},"publicKey":{"$ref":"publicKey","description":"Public key of the channel. (For verifying the signature.)"},"renew":{"type":"boolean","description":"Clear the channel\'s expiration time."},"close":{"type":"boolean","description":"Request to close the channel. If the channel has no XRP remaining or the destination address requests it, closes the channel immediately (returning unclaimed XRP to the source address). Otherwise, sets the channel to expire after settleDelay seconds have passed."},"memos":{"$ref":"memos"}},"required":["channel"],"additionalProperties":false}')
        },
        9251: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"checkCreate","link":"check-create","type":"object","properties":{"destination":{"$ref":"address","description":"Address of the account that can cash the check."},"sendMax":{"$ref":"laxAmount","description":"Amount of source currency the check is allowed to debit the sender, including transfer fees on non-XRP currencies."},"destinationTag":{"$ref":"tag","description":"Destination tag that identifies the reason for the check, or a hosted recipient to pay."},"expiration":{"type":"string","format":"date-time","description":"Time after which the check is no longer valid."},"invoiceID":{"$ref":"hash256","description":"256-bit hash, as a 64-character hexadecimal string, representing a specific reason or identifier for this check."},"memos":{"$ref":"memos"}},"required":["destination","sendMax"],"additionalProperties":false}')
        },
        9252: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"checkCash","link":"check-cash","type":"object","properties":{"checkID":{"$ref":"hash256","description":"The ID of the Check ledger object to cash, as a 64-character hexadecimal string."},"amount":{"$ref":"laxAmount","description":"Redeem the Check for exactly this amount, if possible. The currency must match that of the sendMax of the corresponding CheckCreate transaction. You must provide either this field or deliverMin."},"deliverMin":{"$ref":"laxAmount","description":"Redeem the Check for at least this amount and for as much as possible. The currency must match that of the sendMax of the corresponding CheckCreate transaction. You must provide either this field or amount."},"memos":{"$ref":"memos"}},"required":["checkID"],"oneOf":[{"required":["amount"]},{"required":["deliverMin"]}],"additionalProperties":false}')
        },
        9253: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"checkCancel","link":"check-cancel","type":"object","properties":{"checkID":{"$ref":"hash256","description":"The ID of the Check ledger object to cancel, as a 64-character hexadecimal string."},"memos":{"$ref":"memos"}},"required":["checkID"],"additionalProperties":false}')
        },
        9254: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"trustline","link":"trustline","type":"object","properties":{"currency":{"$ref":"currency","description":"The currency this trustline applies to."},"counterparty":{"$ref":"address","description":"The address of the account this trustline extends trust to."},"limit":{"$ref":"value","description":"The maximum amount that the owner of the trustline can be owed through the trustline."},"qualityIn":{"$ref":"quality","description":"Incoming balances on this trustline are valued at this ratio."},"qualityOut":{"$ref":"quality","description":"Outgoing balances on this trustline are valued at this ratio."},"ripplingDisabled":{"type":"boolean","description":"If true, payments cannot ripple through this trustline."},"authorized":{"type":"boolean","description":"If true, authorize the counterparty to hold issuances from this account."},"frozen":{"type":"boolean","description":"If true, the trustline is frozen, which means that funds can only be sent to the owner."},"memos":{"$ref":"memos"}},"required":["currency","counterparty","limit"],"additionalProperties":false}')
        },
        9255: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"depositPreauth","link":"deposit-preauth","type":"object","properties":{"authorize":{"$ref":"address","description":"Address of the account that can cash the check."},"unauthorize":{"$ref":"address","description":"Address of the account that can cash the check."},"memos":{"$ref":"memos"}},"oneOf":[{"required":["authorize"]},{"required":["unauthorize"]}],"additionalProperties":false}')
        },
        9256: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"accountDelete","link":"account-delete","type":"object","properties":{"destination":{"$ref":"address","description":"Address of an account to receive any leftover XRP after deleting the sending account. Must be a funded account in the ledger, and must not be the sending account."},"destinationTag":{"$ref":"tag","description":"(Optional) Arbitrary destination tag that identifies a hosted recipient or other information for the recipient of the deleted account\'s leftover XRP."},"destinationXAddress":{"$ref":"address","description":"X-address of an account to receive any leftover XRP after deleting the sending account. Must be a funded account in the ledger, and must not be the sending account."},"memos":{"$ref":"memos"}},"anyOf":[{"required":["destination"]},{"required":["destinationXAddress"]}],"additionalProperties":false}')
        },
        9257: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"sign","type":"object","properties":{"signedTransaction":{"type":"string","pattern":"^[A-F0-9]+$","description":"The signed transaction represented as an uppercase hexadecimal string."},"id":{"$ref":"transactionHash","description":"The [Transaction ID](#transaction-id) of the signed transaction."}},"required":["signedTransaction","id"],"additionalProperties":false}')
        },
        9258: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"submit","type":"object","properties":{"resultCode":{"type":"string","description":"Deprecated: Use `engine_result` instead."},"resultMessage":{"type":"string","description":"Deprecated: Use `engine_result_message` instead."},"engine_result":{"type":"string","description":"Code indicating the preliminary result of the transaction, for example `tesSUCCESS`. [List of transaction responses](https://xrpl.org/transaction-results.html)"},"engine_result_code":{"type":"integer","description":"Numeric code indicating the preliminary result of the transaction, directly correlated to `engine_result`"},"engine_result_message":{"type":"string","description":"Human-readable explanation of the transaction\'s preliminary result."},"tx_blob":{"type":"string","description":"The complete transaction in hex string format."},"tx_json":{"$ref":"tx-json","description":"The complete transaction in JSON format."}},"required":["resultCode","resultMessage","engine_result","engine_result_code","engine_result_message","tx_blob","tx_json"],"additionalProperties":false}')
        },
        9259: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getAccountInfo","type":"object","properties":{"sequence":{"$ref":"sequence","description":"The next (smallest unused) sequence number for this account."},"xrpBalance":{"$ref":"value","description":"The XRP balance owned by the account."},"ownerCount":{"type":"integer","minimum":0,"description":"Number of other ledger entries (specifically, trust lines and offers) attributed to this account. This is used to calculate the total reserve required to use the account."},"previousInitiatedTransactionID":{"$ref":"hash256","description":"Hash value representing the most recent transaction that was initiated by this account."},"previousAffectingTransactionID":{"$ref":"hash256","description":"Hash value representing the most recent transaction that affected this account node directly. **Note:** This does not include changes to the account’s trust lines and offers."},"previousAffectingTransactionLedgerVersion":{"$ref":"ledgerVersion","description":"The ledger version that the transaction identified by the `previousAffectingTransactionID` was validated in."}},"required":["sequence","xrpBalance","ownerCount","previousAffectingTransactionID","previousAffectingTransactionLedgerVersion"],"additionalProperties":false}')
        },
        9260: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"AccountObjectsResponse","description":"Response format for account_objects","type":"object","properties":{"account":{"$ref":"address","description":"Unique address of the account this request corresponds to."},"account_objects":{"type":"array","items":{"type":"object"},"description":"Array of objects owned by this account. Each object is in its raw ledger format."},"ledger_hash":{"type":"string","description":"(May be omitted) The identifying hash of the ledger that was used to generate this response."},"ledger_index":{"$ref":"ledgerVersion","description":"(May be omitted) The sequence number of the ledger that was used to generate this response."},"ledger_current_index":{"$ref":"ledgerVersion","description":"(May be omitted) The sequence number of the ledger that was used to generate this response."},"limit":{"type":"integer","description":"(May be omitted) The limit that was used in this request, if any."},"validated":{"type":"boolean","description":"If included and set to true, the information in this request comes from a validated ledger version. Otherwise, the information is subject to change."}},"required":["account","account_objects"],"additionalProperties":false}')
        },
        9261: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getBalances","type":"array","items":{"$ref":"balance"}}')
        },
        9262: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getBalanceSheet","description":"getBalanceSheet response","type":"object","properties":{"balances":{"type":"array","items":{"$ref":"amount"},"description":"Amounts issued to the \\"hotwallet\\" accounts from the request. The keys are the accounts\' addresses, and the values are arrays of currency amounts they hold. The issuer (omitted from the currency amounts) is the account from the request."},"assets":{"type":"array","items":{"$ref":"amount"},"description":"Total amounts held that are issued by others. For the recommended gateway configuration, there should be none."},"obligations":{"type":"array","items":{"type":"object","required":["currency","value"],"additionalProperties":false,"properties":{"currency":{"$ref":"currency"},"value":{"$ref":"value"}},"description":"An amount that is owed."},"description":"Total amounts issued to accounts that are not hot wallets, as a map of currencies to the total value issued."}},"additionalProperties":false}')
        },
        9263: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getLedger","type":"object","properties":{"stateHash":{"$ref":"hash256","description":"Hash of all state information in this ledger."},"closeTime":{"type":"string","format":"date-time","description":"The approximate time when this ledger was closed. This number is rounded based on the `closeTimeResolution`. If it would have been rounded to the same time as a previous ledger, the close time is recorded as 1 second later instead."},"closeTimeResolution":{"type":"integer","minimum":1,"description":"A number of seconds, indicating how much the `closeTime` could be rounded. Ledger close times are approximate so that small differences in servers clocks don\'t hinder consensus."},"closeFlags":{"type":"integer","minimum":0,"description":"A bit-map of flags relating to the closing of this ledger. Currently, the ledger has only one flag defined for `closeFlags`: **sLCF_NoConsensusTime** (value 1). If this flag is enabled, it means that validators disagreed on the correct close time for the ledger, but built otherwise the same ledger, so they declared consensus while \\"agreeing to disagree\\" on the close time. In this case, the consensus ledger contains a `closeTime` value that is 1 second after that of the previous ledger. (In this case, there is no official close time, but the actual real-world close time is probably 3-6 seconds later than the specified `closeTime`.)"},"ledgerHash":{"$ref":"hash256","description":"Unique identifying hash of the entire ledger."},"ledgerVersion":{"$ref":"ledgerVersion","description":"The ledger version of this ledger."},"parentLedgerHash":{"$ref":"hash256","description":"Unique identifying hash of the ledger that came immediately before this one."},"parentCloseTime":{"type":"string","format":"date-time","description":"The previous ledger\'s recorded close time."},"totalDrops":{"$ref":"value","description":"Total number of drops (1/1,000,000th of an XRP) in the network, as a quoted integer. (This decreases as transaction fees cause XRP to be destroyed.)"},"transactionHash":{"$ref":"hash256","description":"Hash of the transaction information included in this ledger."},"transactions":{"description":"Array of all transactions that were validated in this ledger. Transactions are represented in the same format as the return value of [getTransaction](#gettransaction).","type":"array","items":{"$ref":"getTransaction","description":"A transaction in the same format as the return value of [getTransaction](#gettransaction)."}},"transactionHashes":{"description":"An array of hashes of all transactions that were validated in this ledger.","type":"array","items":{"$ref":"transactionHash"}},"rawState":{"type":"string","description":"A JSON string containing all state data for this ledger in rippled JSON format."},"stateHashes":{"description":"An array of hashes of all state data in this ledger.","type":"array","items":{"$ref":"hash256"}}},"required":["stateHash","closeTime","closeTimeResolution","closeFlags","ledgerHash","ledgerVersion","parentLedgerHash","parentCloseTime","totalDrops","transactionHash"],"additionalProperties":false}')
        },
        9264: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getOrderbook","type":"object","properties":{"bids":{"$ref":"orderbookOrders","description":"The buy orders in the order book."},"asks":{"$ref":"orderbookOrders","description":"The sell orders in the order book."}},"required":["bids","asks"],"additionalProperties":false}')
        },
        9265: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getOrders","type":"array","items":{"type":"object","properties":{"specification":{"$ref":"order","description":"An order specification that would create an order equivalent to the current state of this order."},"properties":{"description":"Properties of the order not in the specification.","type":"object","properties":{"maker":{"$ref":"address","description":"The address of the account that submitted the order."},"sequence":{"$ref":"sequence","description":"The account sequence number of the transaction that created this order."},"makerExchangeRate":{"$ref":"value","description":"The exchange rate from the point of view of the account that submitted the order (also known as \\"quality\\")."}},"required":["maker","sequence","makerExchangeRate"],"addtionalProperties":false}},"required":["specification","properties"],"additionalProperties":false}}')
        },
        9266: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"orderChange","type":"object","description":"A change to an order.","properties":{"direction":{"type":"string","enum":["buy","sell"],"description":"Equal to \\"buy\\" for buy orders and \\"sell\\" for sell orders."},"quantity":{"$ref":"amount","description":"The amount to be bought or sold by the maker."},"totalPrice":{"$ref":"amount","description":"The total amount to be paid or received by the taker."},"makerExchangeRate":{"$ref":"value","description":"The exchange rate between the `quantity` currency and the `totalPrice` currency from the point of view of the maker."},"sequence":{"$ref":"sequence","description":"The order sequence number, used to identify the order for cancellation"},"status":{"enum":["created","filled","partially-filled","cancelled"],"description":"The status of the order. One of \\"created\\", \\"filled\\", \\"partially-filled\\", \\"cancelled\\"."},"expirationTime":{"type":"string","format":"date-time","description":"The time after which the order expires, if any."}},"required":["direction","quantity","totalPrice","sequence","status"],"additionalProperties":false}')
        },
        9267: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getPaymentChannel","type":"object","properties":{"account":{"$ref":"address","description":"Address that created the payment channel."},"destination":{"$ref":"address","description":"Address to receive XRP claims against this channel."},"amount":{"$ref":"value","description":"The total amount of XRP funded in this channel."},"balance":{"$ref":"value","description":"The total amount of XRP delivered by this channel."},"settleDelay":{"type":"number","description":"Amount of seconds the source address must wait before closing the channel if it has unclaimed XRP."},"expiration":{"type":"string","format":"date-time","description":"Time when this channel expires."},"publicKey":{"$ref":"publicKey","description":"Public key of the key pair the source uses to sign claims against this channel."},"cancelAfter":{"type":"string","format":"date-time","description":"Time when this channel expires as specified at creation."},"sourceTag":{"$ref":"tag","description":"Source tag."},"destinationTag":{"$ref":"tag","description":"Destination tag."},"previousAffectingTransactionID":{"$ref":"hash256","description":"Hash value representing the most recent transaction that affected this payment channel."},"previousAffectingTransactionLedgerVersion":{"$ref":"ledgerVersion","description":"The ledger version that the transaction identified by the `previousAffectingTransactionID` was validated in."}},"required":["account","destination","amount","balance","settleDelay","previousAffectingTransactionID","previousAffectingTransactionLedgerVersion"],"additionalProperties":false}')
        },
        9268: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepare","description":"Result of prepare function","type":"object","properties":{"txJSON":{"type":"string","description":"The prepared transaction in rippled JSON format."},"instructions":{"description":"The instructions for how to execute the transaction after adding automatic defaults.","type":"object","properties":{"fee":{"$ref":"value","description":"The fee to pay for the transaction. See [Transaction Fees](#transaction-fees) for more information. For multi-signed transactions, this fee is multiplied by (N+1), where N is the number of signatures you plan to provide."},"sequence":{"$ref":"sequence","description":"The initiating account\'s sequence number for this transaction. `sequence` and `ticketSequence` are mutually exclusive, only one of them can be set."},"ticketSequence":{"$ref":"ticket-sequence","description":"The initiating account\'s ticket sequence number for this transaction. `sequence` and `ticketSequence` are mutually exclusive, only one of them can be set."},"maxLedgerVersion":{"oneOf":[{"$ref":"ledgerVersion"},{"type":"null"}],"description":"The highest ledger version that the transaction can be included in. Set to `null` if there is no maximum. If not null, this must be an integer greater than 0, or one of the following strings: \'validated\', \'closed\', \'current\'."}},"additionalProperties":false,"required":["fee","maxLedgerVersion"],"anyOf":[{"required":["sequence"]},{"required":["ticketSequence"]}]}},"additionalProperties":false,"required":["txJSON","instructions"]}')
        },
        9269: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"ledgerEvent","description":"A ledger event message","type":"object","properties":{"baseFeeXRP":{"$ref":"value","description":"Base fee, in XRP."},"ledgerHash":{"$ref":"hash256","description":"Unique hash of the ledger that was closed, as hex."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Ledger version of the ledger that closed."},"ledgerTimestamp":{"type":"string","format":"date-time","description":"The time at which this ledger closed."},"reserveBaseXRP":{"$ref":"value","description":"The minimum reserve, in XRP, that is required for an account."},"reserveIncrementXRP":{"$ref":"value","description":"The increase in account reserve that is added for each item the account owns, such as offers or trust lines."},"transactionCount":{"type":"integer","minimum":0,"description":"Number of new transactions included in this ledger."},"validatedLedgerVersions":{"type":"string","description":"Range of ledgers that the server has available. This may be discontiguous."}},"addtionalProperties":false,"required":["baseFeeXRP","ledgerHash","ledgerTimestamp","reserveBaseXRP","reserveIncrementXRP","transactionCount","ledgerVersion","validatedLedgerVersions"]}')
        },
        9270: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getPaths","type":"array","items":{"type":"object","properties":{"source":{"$ref":"sourceAdjustment","description":"Properties of the source of the payment."},"destination":{"$ref":"destinationAdjustment","description":"Properties of the destination of the payment."},"paths":{"type":"string","description":"The paths of trustlines and orders to use in executing the payment."}},"required":["source","destination","paths"],"additionalProperties":false}}')
        },
        9271: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getServerInfo","type":"object","properties":{"buildVersion":{"type":"string","description":"The version number of the running rippled version."},"completeLedgers":{"type":"string","pattern":"[0-9,-]+","description":"Range expression indicating the sequence numbers of the ledger versions the local rippled has in its database. It is possible to be a disjoint sequence, e.g. “2500-5000,32570-7695432”."},"hostID":{"type":"string","description":"On an admin request, returns the hostname of the server running the rippled instance; otherwise, returns a unique four letter word."},"ioLatencyMs":{"type":"number","description":"Amount of time spent waiting for I/O operations, in milliseconds. If this number is not very, very low, then the rippled server is probably having serious load issues."},"load":{"type":"object","description":"*(Admin only)* Detailed information about the current load state of the server.","properties":{"jobTypes":{"type":"array","description":"*(Admin only)* Information about the rate of different types of jobs the server is doing and how much time it spends on each.","items":{"type":"object"}},"threads":{"type":"number","description":"*(Admin only)* The number of threads in the server’s main job pool, performing various operations."}},"required":["jobTypes","threads"]},"lastClose":{"type":"object","description":"Information about the last time the server closed a ledger.","properties":{"convergeTimeS":{"type":"number","description":"The time it took to reach a consensus for the last ledger closing, in seconds."},"proposers":{"type":"integer","minimum":0,"description":"Number of trusted validators participating in the ledger closing."}},"required":["convergeTimeS","proposers"]},"loadFactor":{"type":"number","description":"The load factor the server is currently enforcing, as a multiplier on the base transaction fee. The load factor is determined by the highest of the individual server’s load factor, cluster’s load factor, and the overall network’s load factor."},"peers":{"type":"integer","minimum":0,"description":"How many other rippled servers the node is currently connected to."},"pubkeyNode":{"type":"string","description":"Public key used to verify this node for internal communications; this key is automatically generated by the server the first time it starts up."},"pubkeyValidator":{"type":"string","description":"*(Admin only)* Public key used by this node to sign ledger validations."},"serverState":{"type":"string","description":"A string indicating to what extent the server is participating in the network. See [Possible Server States](https://xrpl.org/rippled-server-states.html) for more details.","enum":["disconnected","connected","syncing","tracking","full","validating","proposing"]},"validatedLedger":{"type":"object","description":"Information about the fully-validated ledger with the highest sequence number (the most recent).","properties":{"age":{"type":"integer","minimum":0,"description":"The time since the ledger was closed, in seconds."},"baseFeeXRP":{"$ref":"value","description":"Base fee, in XRP. This may be represented in scientific notation such as 1e-05 for 0.00005."},"hash":{"$ref":"hash256","description":"Unique hash for the ledger, as an uppercase hexadecimal string."},"reserveBaseXRP":{"$ref":"value","description":"Minimum amount of XRP necessary for every account to keep in reserve."},"reserveIncrementXRP":{"$ref":"value","description":"Amount of XRP added to the account reserve for each object an account owns in the ledger."},"ledgerVersion":{"type":"integer","minimum":0,"description":"Identifying ledger index of this ledger version."}},"additionalProperties":false,"required":["age","baseFeeXRP","hash","reserveBaseXRP","reserveIncrementXRP","ledgerVersion"]},"validationQuorum":{"type":"number","description":"Minimum number of trusted validations required to validate a ledger version. Some circumstances may cause the server to require more validations."}},"required":["buildVersion","completeLedgers","hostID","ioLatencyMs","lastClose","loadFactor","peers","pubkeyNode","serverState","validatedLedger","validationQuorum"],"additionalProperties":false}')
        },
        9272: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getSettings","$ref":"settingsPlusMemos","not":{"required":["memos"]}}')
        },
        9273: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"orderbookOrders","type":"array","items":{"description":"An order in the order book.","type":"object","properties":{"specification":{"$ref":"order","description":"An order specification that would create an order equivalent to the current state of this order."},"properties":{"description":"Properties of the order not in the specification.","type":"object","properties":{"maker":{"$ref":"address","description":"The address of the account that submitted the order."},"sequence":{"$ref":"sequence","description":"The account sequence number of the transaction that created this order."},"makerExchangeRate":{"$ref":"value","description":"The exchange rate from the point of view of the account that submitted the order (also known as \\"quality\\")."}},"required":["maker","sequence","makerExchangeRate"],"addtionalProperties":false},"state":{"description":"The state of the order.","type":"object","properties":{"fundedAmount":{"$ref":"amount","description":"How much of the amount the maker would have to pay that the maker currently holds."},"priceOfFundedAmount":{"$ref":"amount","description":"How much the `fundedAmount` would convert to through the exchange rate of this order."}},"required":["fundedAmount","priceOfFundedAmount"],"additionalProperties":false},"data":{"description":"The raw order data. This may include `owner_funds`, `Flags`, and other fields.","type":"object","additionalProperties":true}},"required":["specification","properties","data"],"additionalProperties":false}}')
        },
        9274: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"outcome","type":"object","description":"The outcome of the transaction (what effects it had).","properties":{"result":{"type":"string","description":"Result code returned by rippled. See [Transaction Results](https://xrpl.org/transaction-results.html) for a complete list."},"timestamp":{"type":"string","format":"date-time","description":"The timestamp when the transaction was validated. (May be missing when requesting transactions in binary mode.)"},"fee":{"$ref":"value","description":"The XRP fee that was charged for the transaction."},"deliveredAmount":{"$ref":"amount","description":"For payment transactions, it is impossible to reliably compute the actual delivered amount from the balanceChanges due to fixed precision. If the payment is not a partial payment and the transaction succeeded, the deliveredAmount should always be considered to be the amount specified in the transaction."},"balanceChanges":{"type":"object","additionalProperties":{"type":"array","description":"Key is the XRP Ledger address; value is an array of signed amounts representing changes of balances for that address.","items":{"$ref":"balance"}}},"orderbookChanges":{"type":"object","additionalProperties":{"type":"array","description":"Key is the maker\'s XRP Ledger address; value is an array of changes","items":{"$ref":"orderChange"}}},"channelChanges":{"type":"object","description":"Properties reflecting the details of the payment channel."},"ledgerVersion":{"$ref":"ledgerVersion","description":"The ledger version that the transaction was validated in."},"indexInLedger":{"type":"integer","minimum":0,"description":"The ordering index of the transaction in the ledger."}},"required":["result","fee","balanceChanges","orderbookChanges","ledgerVersion","indexInLedger"],"additionalProperties":false}')
        },
        9275: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTransaction","description":"getTransaction response","link":"gettransaction","properties":{"type":{"$ref":"transactionType"},"specification":{"description":"A specification that would produce the same outcome as this transaction. *Exception:* For payment transactions, this omits the `destination.amount` field, to prevent misunderstanding. The structure of the specification depends on the value of the `type` field (see [Transaction Types](#transaction-types) for details). *Note:* This is **not** necessarily the same as the original specification."},"outcome":{"$ref":"outcome","description":"The outcome of the transaction (what effects it had)."},"id":{"$ref":"transactionHash","description":"A hash of the transaction that can be used to identify it."},"address":{"$ref":"address","description":"The address of the account that initiated the transaction."},"sequence":{"$ref":"sequence","description":"The account sequence number of the transaction for the account that initiated it."},"rawTransaction":{"description":"The raw transaction data as a JSON string. For advanced users only; exercise caution when interpreting this data.","type":"string"}},"required":["id","address","sequence","type","specification","outcome"],"additionalProperties":false,"oneOf":[{"properties":{"type":{"enum":["payment"]},"specification":{"$ref":"getPayment"}}},{"properties":{"type":{"enum":["order"]},"specification":{"$ref":"order"}}},{"properties":{"type":{"enum":["orderCancellation"]},"specification":{"$ref":"orderCancellation"}}},{"properties":{"type":{"enum":["trustline"]},"specification":{"$ref":"trustline"}}},{"properties":{"type":{"enum":["settings"]},"specification":{"$ref":"getSettings"}}},{"properties":{"type":{"enum":["checkCreate"]},"specification":{"$ref":"checkCreate"}}},{"properties":{"type":{"enum":["checkCancel"]},"specification":{"$ref":"checkCancel"}}},{"properties":{"type":{"enum":["checkCash"]},"specification":{"$ref":"checkCash"}}},{"properties":{"type":{"enum":["escrowCreation"]},"specification":{"$ref":"escrowCreation"}}},{"properties":{"type":{"enum":["escrowCancellation"]},"specification":{"$ref":"escrowCancellation"}}},{"properties":{"type":{"enum":["escrowExecution"]},"specification":{"$ref":"escrowExecution"}}},{"properties":{"type":{"enum":["paymentChannelCreate"]},"specification":{"$ref":"paymentChannelCreate"}}},{"properties":{"type":{"enum":["paymentChannelFund"]},"specification":{"$ref":"paymentChannelFund"}}},{"properties":{"type":{"enum":["paymentChannelClaim"]},"specification":{"$ref":"paymentChannelClaim"}}},{"properties":{"type":{"enum":["depositPreauth"]},"specification":{"$ref":"depositPreauth"}}},{"properties":{"type":{"enum":["accountDelete"]},"specification":{"$ref":"accountDelete"}}}]}')
        },
        9276: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTransactions","type":"array","items":{"$ref":"getTransaction"}}')
        },
        9277: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTrustlines","type":"array","items":{"properties":{"specification":{"$ref":"trustline","description":"A trust line specification that would produce this trust line in its current state."},"counterparty":{"properties":{"limit":{"$ref":"value","description":"The maximum amount that the counterparty can be owed through the trust line."},"ripplingDisabled":{"type":"boolean","description":"If true, payments cannot ripple through this trustline."},"frozen":{"type":"boolean","description":"If true, the trust line is frozen, which means that funds can only be sent directly to the counterparty."},"authorized":{"type":"boolean","description":"If true, the counterparty authorizes this party to hold issuances from the counterparty."}},"description":"Properties of the trustline from the perspective of the counterparty.","required":["limit"],"additionalProperties":false},"state":{"properties":{"balance":{"$ref":"signedValue","description":"The balance on the trust line, representing which party owes the other and by how much."}},"description":"Non-settings details of the trust line\'s state.","required":["balance"],"additionalProperties":false}},"required":["specification","counterparty","state"],"additionalProperties":false}}')
        },
        9278: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"signPaymentChannelClaim","type":"string","$ref":"signature","additionalProperties":false}')
        },
        9279: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"verifyPaymentChannelClaim","type":"boolean","additionalProperties":false}')
        },
        9280: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getBalancesParameters","description":"Parameters for getBalances","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get balances for."},"options":{"description":"Options to filter and determine which balances to return.","properties":{"counterparty":{"$ref":"address","description":"Only return balances with this counterparty."},"currency":{"$ref":"currency","description":"Only return balances for this currency."},"limit":{"type":"integer","minimum":1,"description":"Return at most this many balances."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Return balances as they were in this historical ledger version."}},"additionalProperties":false}},"additionalProperties":false,"required":["address"]}')
        },
        9281: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getBalanceSheetParameters","description":"Parameters for getBalanceSheet","type":"object","properties":{"address":{"$ref":"address","description":"The XRP Ledger address of the account to get the balance sheet of."},"options":{"properties":{"excludeAddresses":{"type":"array","items":{"$ref":"address"},"uniqueItems":true,"description":"Addresses to exclude from the balance totals."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Get the balance sheet as of this historical ledger version."}},"description":"Options to determine how the balances are calculated.","additionalProperties":false}},"additionalProperties":false,"required":["address"]}')
        },
        9282: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getLedgerParameters","description":"Parameters for getLedger","type":"object","properties":{"options":{"description":"Options affecting what ledger and how much data to return.","properties":{"ledgerHash":{"type":"string","description":"Get ledger data for this historical ledger hash."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Get ledger data for this historical ledger version."},"includeAllData":{"type":"boolean","description":"Include the details of the transactions or state information if `includeTransactions` or `includeState` is set."},"includeTransactions":{"type":"boolean","description":"Return an array of transactions in this ledger. By default, provides the identifying hashes for each transaction. If `includeAllData` is true, include the entire transaction JSON for each transaction instead."},"includeState":{"type":"boolean","description":"Return an array of state data in this ledger. By default, provides the identifying hashes of state data. If `includeAllData` is true, return the state data in JSON form instead. **Admin required:** This is a very large amount of data."}},"additionalProperties":false}},"additionalProperties":false}')
        },
        9283: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getOrdersParameters","description":"Parameters for getOrders","type":"object","properties":{"address":{"$ref":"address","description":"The XRP Ledger address of the account to get open orders for."},"options":{"description":"Options that determine what orders to return.","properties":{"limit":{"type":"integer","minimum":1,"description":"Return at most this many orders."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Return orders as of this historical ledger version."}},"additionalProperties":false}},"required":["address"],"additionalProperties":false}')
        },
        9284: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getOrderbookParameters","description":"Parameters for getOrderbook","type":"object","properties":{"address":{"$ref":"address","description":"Address of an account to use as point-of-view. (This affects which unfunded offers are returned.)"},"orderbook":{"$ref":"orderbook","description":"The order book to get."},"options":{"description":"Options to determine what to return.","properties":{"limit":{"type":"integer","minimum":1,"description":"Return at most this many orders from the order book."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Return the order book as of this historical ledger version."}},"additionalProperties":false}},"required":["address","orderbook"],"additionalProperties":false}')
        },
        9285: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getPathsParameters","type":"object","properties":{"pathfind":{"description":"Specification of a pathfind request.","properties":{"source":{"description":"Properties of the source of funds.","type":"object","properties":{"address":{"$ref":"address","description":"The XRP Ledger address of the planned sender."},"amount":{"$ref":"laxAmount","description":"The amount of funds to send."},"currencies":{"description":"An array of currencies (with optional counterparty) that may be used in the payment paths.","type":"array","items":{"description":"A currency with optional counterparty.","type":"object","properties":{"currency":{"$ref":"currency"},"counterparty":{"$ref":"address","description":"The counterparty for the currency; if omitted any counterparty may be used."}},"required":["currency"],"additionalProperties":false},"uniqueItems":true}},"not":{"required":["amount","currencies"]},"additionalProperties":false,"required":["address"]},"destination":{"description":"Properties of the destination of funds.","type":"object","properties":{"address":{"$ref":"address","description":"An address representing the destination of the transaction."},"amount":{"$ref":"laxLaxAmount","description":"The amount to be received by the receiver (`value` may be ommitted if a source amount is specified)."}},"required":["address","amount"],"additionalProperties":false}},"required":["source","destination"],"additionalProperties":false}},"additionalProperties":false,"required":["pathfind"]}')
        },
        9286: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getPaymentChannelParameters","description":"Parameters for getPaymentChannel","type":"object","properties":{"id":{"$ref":"hash256","description":"256-bit hexadecimal channel identifier."}},"additionalProperties":false,"required":["id"]}')
        },
        9287: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"api-options","type":"object","properties":{"trace":{"type":"boolean","description":"If true, log rippled requests and responses to stdout."},"feeCushion":{"type":"number","minimum":1,"description":"Factor to multiply estimated fee by to provide a cushion in case the required fee rises during submission of a transaction. Defaults to `1.2`."},"maxFeeXRP":{"type":"string","description":"Maximum fee to use with transactions, in XRP. Must be a string-encoded number. Defaults to `\'2\'`."},"server":{"type":"string","description":"URI for rippled websocket port to connect to. Must start with `wss://`, `ws://`, `wss+unix://`, or `ws+unix://`.","format":"uri","pattern":"^(wss?|wss?\\\\+unix)://"},"proxy":{"format":"uri","description":"URI for HTTP/HTTPS proxy to use to connect to the rippled server."},"timeout":{"type":"integer","description":"Request timeout in milliseconds before considering a request to have failed. See also: connectionTimeout.","minimum":1},"connectionTimeout":{"type":"integer","description":"Connection timeout, in milliseconds, before considering connect() to have failed.","minimum":1},"proxyAuthorization":{"type":"string","description":"Username and password for HTTP basic authentication to the proxy in the format **username:password**."},"authorization":{"type":"string","description":"Username and password for HTTP basic authentication to the rippled server in the format **username:password**."},"trustedCertificates":{"type":"array","description":"Array of PEM-formatted SSL certificates to trust when connecting to a proxy. This is useful if you want to use a self-signed certificate on the proxy server. Note: Each element must contain a single certificate; concatenated certificates are not valid.","items":{"type":"string","description":"A PEM-formatted SSL certificate to trust when connecting to a proxy."}},"key":{"type":"string","description":"A string containing the private key of the client in PEM format. (Can be an array of keys)."},"passphrase":{"type":"string","description":"The passphrase for the private key of the client."},"certificate":{"type":"string","description":"A string containing the certificate key of the client in PEM format. (Can be an array of certificates)."}},"additionalProperties":false}')
        },
        9288: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getSettingsParameters","description":"Parameters for getSettings","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get the settings of."},"options":{"description":"Options that affect what to return.","properties":{"ledgerVersion":{"$ref":"ledgerVersion","description":"Get the settings as of this historical ledger version."}},"additionalProperties":false}},"required":["address"],"additionalProperties":false}')
        },
        9289: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getAccountInfoParameters","description":"Parameters for getAccountInfo","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get the account info of."},"options":{"description":"Options that affect what to return.","properties":{"ledgerVersion":{"$ref":"ledgerVersion","description":"Get the account info as of this historical ledger version."}},"additionalProperties":false}},"required":["address"],"additionalProperties":false}')
        },
        9290: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getAccountObjectsOptions","description":"Request options for getAccountObjects","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get the account objects of."},"options":{"description":"Options that affect what to return.","properties":{"type":{"type":"string","enum":["check","escrow","offer","payment_channel","signer_list","state"],"description":"(Optional) Filter results to include only this type of ledger object. The valid types are: `check`, `escrow`, `offer`, `payment_channel`, `signer_list`, and `state` (trust line)."},"ledgerHash":{"type":"string","description":"(Optional) A 20-byte hex string for the ledger version to use."},"ledgerIndex":{"oneOf":[{"$ref":"ledgerVersion"},{"type":"string"}],"description":"(Optional) The sequence number of the ledger to use, or a shortcut string to choose a ledger automatically."},"limit":{"type":"integer","minimum":1,"description":"(Optional) The maximum number of objects to include in the results."}},"additionalProperties":false}},"required":["address"],"additionalProperties":false}')
        },
        9291: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTransactionParameters","description":"Parameters for getTransaction","type":"object","properties":{"id":{"$ref":"transactionHash"},"options":{"description":"Options to limit the ledger versions to search or include raw transaction data.","properties":{"minLedgerVersion":{"$ref":"ledgerVersion","description":"The lowest ledger version to search. This must be an integer greater than 0, or one of the following strings: \'validated\', \'closed\', \'current\'."},"maxLedgerVersion":{"$ref":"ledgerVersion","description":"The highest ledger version to search. This must be an integer greater than 0, or one of the following strings: \'validated\', \'closed\', \'current\'."},"includeRawTransaction":{"description":"Include raw transaction data. For advanced users; exercise caution when interpreting this data."}},"additionalProperties":false}},"additionalProperties":false,"required":["id"]}')
        },
        9292: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTransactionsParameters","description":"Parameters for getTransactions","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get transactions for."},"options":{"description":"Options to filter the resulting transactions.","properties":{"start":{"$ref":"hash256","description":"If specified, start the results from this transaction. You cannot use `start` with `minLedgerVersion` or `maxLedgerVersion`. When `start` is specified, these ledger versions are determined internally."},"limit":{"type":"integer","minimum":1,"description":"If specified, return at most this many transactions."},"minLedgerVersion":{"$ref":"ledgerVersion","description":"Return only transactions in this ledger version or higher."},"maxLedgerVersion":{"$ref":"ledgerVersion","description":"Return only transactions in this ledger version or lower."},"earliestFirst":{"type":"boolean","description":"If true, sort transactions so that the earliest ones come first. By default, the newest transactions come first."},"excludeFailures":{"type":"boolean","description":"If true, the result omits transactions that did not succeed."},"initiated":{"type":"boolean","description":"If true, return only transactions initiated by the account specified by `address`. If false, return only transactions not initiated by the account specified by `address`."},"counterparty":{"$ref":"address","description":"If provided, only return transactions with this account as a counterparty to the transaction."},"types":{"type":"array","items":{"$ref":"transactionType"},"description":"Only return transactions of the specified [Transaction Types](#transaction-types)."},"includeRawTransactions":{"description":"Include raw transaction data. For advanced users; exercise caution when interpreting this data. "},"binary":{"type":"boolean","description":"If true, return transactions in binary format rather than JSON."}},"additionalProperties":false,"not":{"anyOf":[{"required":["start","minLedgerVersion"]},{"required":["start","maxLedgerVersion"]}]}}},"additionalProperties":false,"required":["address"]}')
        },
        9293: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTrustlinesParameters","description":"Parameters for getTrustlines","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get trustlines for."},"options":{"description":"Options to filter and determine which trustlines to return.","properties":{"counterparty":{"$ref":"address","description":"Only return trustlines with this counterparty."},"currency":{"$ref":"currency","description":"Only return trustlines for this currency."},"limit":{"type":"integer","minimum":1,"description":"Return at most this many trustlines."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Return trustlines as they were in this historical ledger version."}},"additionalProperties":false}},"additionalProperties":false,"required":["address"]}')
        },
        9294: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"preparePaymentParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"payment":{"$ref":"payment","description":"The specification of the payment to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","payment"]}')
        },
        9295: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareOrderParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"order":{"$ref":"order","description":"The specification of the order to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","order"]}')
        },
        9296: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareTrustlineParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"trustline":{"$ref":"trustline","description":"The specification of the trustline to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","trustline"]}')
        },
        9297: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareOrderCancellationParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"orderCancellation":{"$ref":"orderCancellation","description":"The specification of the order cancellation to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","orderCancellation"]}')
        },
        9298: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareSettingsParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"settings":{"$ref":"settings","description":"The specification of the settings to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","settings"]}')
        },
        9299: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareEscrowCreationParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"escrowCreation":{"$ref":"escrowCreation","description":"The specification of the escrow creation to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","escrowCreation"]}')
        },
        9300: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareEscrowCancellationParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"escrowCancellation":{"$ref":"escrowCancellation","description":"The specification of the escrow cancellation to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","escrowCancellation"]}')
        },
        9301: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareEscrowExecutionParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"escrowExecution":{"$ref":"escrowExecution","description":"The specification of the escrow execution to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","escrowExecution"]}')
        },
        9302: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"preparePaymentChannelCreateParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"paymentChannelCreate":{"$ref":"paymentChannelCreate","description":"The specification of the payment channel to create."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","paymentChannelCreate"]}')
        },
        9303: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"preparePaymentChannelFundParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"paymentChannelFund":{"$ref":"paymentChannelFund","description":"The channel to fund, and the details of how to fund it."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","paymentChannelFund"]}')
        },
        9304: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"preparePaymentChannelClaimParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"paymentChannelClaim":{"$ref":"paymentChannelClaim","description":"Details of the channel and claim."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","paymentChannelClaim"]}')
        },
        9305: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareCheckCreateParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"checkCreate":{"$ref":"checkCreate","description":"The specification of the Check create creation to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","checkCreate"]}')
        },
        9306: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareCheckCashParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"checkCash":{"$ref":"checkCash","description":"The specification of the Check cash to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","checkCash"]}')
        },
        9307: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareCheckCancelParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"checkCancel":{"$ref":"checkCancel","description":"The specification of the Check cancellation to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","checkCancel"]}')
        },
        9308: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareTicketParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"ticketCount":{"type":"number","description":"The number of tickets to be created."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","ticketCount"]}')
        },
        9309: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"computeLedgerHashParameters","type":"object","properties":{"ledger":{"$ref":"getLedger","description":"The ledger header to hash."}},"additionalProperties":false,"required":["ledger"]}')
        },
        9310: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"signParameters","type":"object","properties":{"txJSON":{"type":"string","description":"Transaction represented as a JSON string in rippled format."},"secret":{"type":"string","format":"secret","description":"The secret of the account that is initiating the transaction. (This field cannot be used with keypair)."},"keypair":{"type":"object","properties":{"privateKey":{"type":"privateKey","description":"The uppercase hexadecimal representation of the secp256k1 or Ed25519 private key. Ed25519 keys are prefixed with 0xED. You can read about how keys are derived [here](https://xrpl.org/cryptographic-keys.html)."},"publicKey":{"type":"publicKey","description":"The uppercase hexadecimal representation of the secp256k1 or Ed25519 public key. Ed25519 keys are prefixed with 0xED. You can read about how keys are derived [here](https://xrpl.org/cryptographic-keys.html)."}},"description":"The private and public key of the account that is initiating the transaction. (This field cannot be used with secret).","required":["privateKey","publicKey"],"additionalProperties":false},"options":{"type":"object","description":"Options that control the type of signature to create.","properties":{"signAs":{"$ref":"address","description":"The account that the signature should count for in multisigning."}},"additionalProperties":false}},"additionalProperties":false,"required":["txJSON"],"oneOf":[{"required":["secret"],"not":{"required":["keypair"]}},{"required":["keypair"],"not":{"required":["secret"]}}]}')
        },
        9311: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"submitParameters","type":"object","properties":{"signedTransaction":{"$ref":"blob","description":"A signed transaction as returned by [sign](#sign)."},"failHard":{"type":"boolean","description":"If `true`, and the transaction fails locally, do not retry or relay the transaction to other servers. Defaults to `false`."}},"additionalProperties":false,"required":["signedTransaction"]}')
        },
        9312: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"generateAddressParameters","type":"object","properties":{"options":{"type":"object","description":"Options to control how the address and secret are generated.","properties":{"entropy":{"type":"array","items":{"type":"integer","minimum":0,"maximum":255},"description":"The entropy to use to generate the seed. Must be an array of length 16 with values from 0-255 (16 bytes of entropy)"},"algorithm":{"type":"string","enum":["ecdsa-secp256k1","ed25519"],"description":"The digital signature algorithm to generate an address for. Can be `ecdsa-secp256k1` (default) or `ed25519`."},"test":{"type":"boolean","description":"Specifies whether the address is intended for use on a test network such as Testnet or Devnet. If `true`, the address should only be used for testing, and starts with `T`. If `false`, the address should only be used on Mainnet, and starts with `X`."},"includeClassicAddress":{"type":"boolean","description":"If `true`, also return the classic address."}},"additionalProperties":false}},"additionalProperties":false}')
        },
        9313: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"signPaymentChannelClaimParameters","type":"object","properties":{"channel":{"$ref":"hash256","description":"256-bit hexadecimal channel identifier."},"amount":{"$ref":"value","description":"Amount of XRP authorized by the claim."},"privateKey":{"$ref":"publicKey","description":"The private key to sign the payment channel claim."}},"additionalProperties":false,"required":["channel","amount","privateKey"]}')
        },
        9314: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"verifyPaymentChannelClaimParameters","type":"object","properties":{"channel":{"$ref":"hash256","description":"256-bit hexadecimal channel identifier."},"amount":{"$ref":"value","description":"Amount of XRP authorized by the claim."},"signature":{"$ref":"signature","description":"Signature of this claim."},"publicKey":{"$ref":"publicKey","description":"Public key of the channel\'s sender"}},"additionalProperties":false,"required":["channel","amount","signature","publicKey"]}')
        },
        9315: function(e) {
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","title":"combineParameters","type":"object","properties":{"signedTransactions":{"type":"array","description":"An array of signed transactions (from the output of [sign](#sign)) to combine.","items":{"type":"string","pattern":"^[A-F0-9]+$","description":"A single-signed transaction represented as an uppercase hexadecimal string (from the output of [sign](#sign))"},"minLength":1}},"additionalProperties":false,"required":["signedTransactions"]}')
        },
        9316: function(e, t, r) {
            "use strict";
            var s = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
                    void 0 === s && (s = r), Object.defineProperty(e, s, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, s) {
                    void 0 === s && (s = r), e[s] = t[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                n = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && s(t, e, r);
                    return i(t, e), t
                },
                a = this && this.__awaiter || function(e, t, r, s) {
                    return new(r || (r = Promise))((function(i, n) {
                        function a(e) {
                            try {
                                c(s.next(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function o(e) {
                            try {
                                c(s.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(a, o)
                        }
                        c((s = s.apply(e, t || [])).next())
                    }))
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Connection = void 0;
            const c = n(r(53)),
                d = r(69),
                p = r(102),
                l = o(r(9317)),
                h = o(r(7231)),
                u = r(5782),
                f = r(9318);
            class LedgerHistory {
                constructor() {
                    this.feeBase = null, this.feeRef = null, this.latestVersion = null, this.reserveBase = null, this.availableVersions = new h.default
                }
                hasVersion(e) {
                    return this.availableVersions.containsValue(e)
                }
                hasVersions(e, t) {
                    return this.availableVersions.containsRange(e, t)
                }
                update(e) {
                    this.feeBase = e.fee_base, this.feeRef = e.fee_ref, this.latestVersion = e.ledger_index, this.reserveBase = e.reserve_base, e.validated_ledgers ? (this.availableVersions.reset(), this.availableVersions.parseAndAddRanges(e.validated_ledgers)) : this.availableVersions.addValue(this.latestVersion)
                }
            }
            class ConnectionManager {
                constructor() {
                    this.promisesAwaitingConnection = []
                }
                resolveAllAwaiting() {
                    this.promisesAwaitingConnection.map(({
                        resolve: e
                    }) => e()), this.promisesAwaitingConnection = []
                }
                rejectAllAwaiting(e) {
                    this.promisesAwaitingConnection.map(({
                        reject: t
                    }) => t(e)), this.promisesAwaitingConnection = []
                }
                awaitConnection() {
                    return new Promise((e, t) => {
                        this.promisesAwaitingConnection.push({
                            resolve: e,
                            reject: t
                        })
                    })
                }
            }
            class RequestManager {
                constructor() {
                    this.nextId = 0, this.promisesAwaitingResponse = []
                }
                cancel(e) {
                    const {
                        timer: t
                    } = this.promisesAwaitingResponse[e];
                    clearTimeout(t), delete this.promisesAwaitingResponse[e]
                }
                resolve(e, t) {
                    const {
                        timer: r,
                        resolve: s
                    } = this.promisesAwaitingResponse[e];
                    clearTimeout(r), s(t), delete this.promisesAwaitingResponse[e]
                }
                reject(e, t) {
                    const {
                        timer: r,
                        reject: s
                    } = this.promisesAwaitingResponse[e];
                    clearTimeout(r), s(t), delete this.promisesAwaitingResponse[e]
                }
                rejectAll(e) {
                    this.promisesAwaitingResponse.forEach((t, r) => {
                        this.reject(r, e)
                    })
                }
                createRequest(e, t) {
                    const r = this.nextId++,
                        s = JSON.stringify(Object.assign(Object.assign({}, e), {
                            id: r
                        })),
                        i = setTimeout(() => this.reject(r, new u.TimeoutError), t);
                    i.unref && i.unref();
                    const n = new Promise((e, t) => {
                        this.promisesAwaitingResponse[r] = {
                            resolve: e,
                            reject: t,
                            timer: i
                        }
                    });
                    return [r, s, n]
                }
                handleResponse(e) {
                    if (!Number.isInteger(e.id) || e.id < 0) throw new u.ResponseFormatError("valid id not found in response", e);
                    if (this.promisesAwaitingResponse[e.id])
                        if ("error" !== e.status)
                            if ("success" === e.status) this.resolve(e.id, e.result);
                            else {
                                const t = new u.ResponseFormatError("unrecognized status: " + e.status, e);
                                this.reject(e.id, t)
                            }
                    else {
                        const t = new u.RippledError(e.error_message || e.error, e);
                        this.reject(e.id, t)
                    }
                }
            }
            class Connection extends d.EventEmitter {
                constructor(e, t = {}) {
                    super(), this._ws = null, this._reconnectTimeoutID = null, this._heartbeatIntervalID = null, this._retryConnectionBackoff = new f.ExponentialBackoff({
                        min: 100,
                        max: 6e4
                    }), this._trace = () => {}, this._ledger = new LedgerHistory, this._requestManager = new RequestManager, this._connectionManager = new ConnectionManager, this._clearHeartbeatInterval = () => {
                        clearInterval(this._heartbeatIntervalID)
                    }, this._startHeartbeatInterval = () => {
                        this._clearHeartbeatInterval(), this._heartbeatIntervalID = setInterval(() => this._heartbeat(), this._config.timeout)
                    }, this._heartbeat = () => this.request({
                        command: "ping"
                    }).catch(() => this.reconnect().catch(e => {
                        this.emit("error", "reconnect", e.message, e)
                    })), this._onConnectionFailed = e => {
                        this._ws && (this._ws.removeAllListeners(), this._ws.on("error", () => {}), this._ws.close(), this._ws = null), "number" == typeof e ? this._connectionManager.rejectAllAwaiting(new u.NotConnectedError(`Connection failed with code ${e}.`, {
                            code: e
                        })) : e && e.message ? this._connectionManager.rejectAllAwaiting(new u.NotConnectedError(e.message, e)) : this._connectionManager.rejectAllAwaiting(new u.NotConnectedError("Connection failed."))
                    }, this.setMaxListeners(1 / 0), this._url = e, this._config = Object.assign({
                        timeout: 2e4,
                        connectionTimeout: 5e3
                    }, t), "function" == typeof t.trace ? this._trace = t.trace : !0 === t.trace && (this._trace = console.log)
                }
                _onMessage(e) {
                    let t;
                    this._trace("receive", e);
                    try {
                        t = JSON.parse(e)
                    } catch (t) {
                        return void this.emit("error", "badMessage", t.message, e)
                    }
                    if (null == t.type && t.error) this.emit("error", t.error, t.error_message, t);
                    else if (t.type && this.emit(t.type, t), "ledgerClosed" === t.type && this._ledger.update(t), "response" === t.type) try {
                        this._requestManager.handleResponse(t)
                    } catch (t) {
                        this.emit("error", "badMessage", t.message, e)
                    }
                }
                get _state() {
                    return this._ws ? this._ws.readyState : l.default.CLOSED
                }
                get _shouldBeConnected() {
                    return null !== this._ws
                }
                _waitForReady() {
                    return new Promise((e, t) => {
                        this._shouldBeConnected ? this._state === l.default.OPEN ? e() : this.once("connected", () => e()) : t(new u.NotConnectedError)
                    })
                }
                _subscribeToLedger() {
                    return a(this, void 0, void 0, (function*() {
                        const e = yield this.request({
                            command: "subscribe",
                            streams: ["ledger"]
                        });
                        if (c.isEmpty(e) || !e.ledger_index) try {
                            yield this.disconnect()
                        } catch (e) {} finally {
                            throw new u.RippledNotInitializedError("Rippled not initialized")
                        }
                        this._ledger.update(e)
                    }))
                }
                isConnected() {
                    return this._state === l.default.OPEN
                }
                connect() {
                    if (this.isConnected()) return Promise.resolve();
                    if (this._state === l.default.CONNECTING) return this._connectionManager.awaitConnection();
                    if (!this._url) return Promise.reject(new u.ConnectionError("Cannot connect because no server was specified"));
                    if (this._ws) return Promise.reject(new u.RippleError("Websocket connection never cleaned up.", {
                        state: this._state
                    }));
                    const e = setTimeout(() => {
                        this._onConnectionFailed(new u.ConnectionError(`Error: connect() timed out after ${this._config.connectionTimeout} ms. If your internet connection is working, the rippled server may be blocked or inaccessible. You can also try setting the 'connectionTimeout' option in the RippleAPI constructor.`))
                    }, this._config.connectionTimeout);
                    return this._ws = function(e, t) {
                        const s = {};
                        if (null != t.proxy) {
                            const i = p.parse(e),
                                n = p.parse(t.proxy),
                                a = c.omitBy({
                                    secureEndpoint: "wss:" === i.protocol,
                                    secureProxy: "https:" === n.protocol,
                                    auth: t.proxyAuthorization,
                                    ca: t.trustedCertificates,
                                    key: t.key,
                                    passphrase: t.passphrase,
                                    cert: t.certificate
                                }, e => null == e),
                                o = Object.assign({}, n, a);
                            let d;
                            try {
                                d = r(9319)
                            } catch (e) {
                                throw new Error('"proxy" option is not supported in the browser')
                            }
                            s.agent = new d(o)
                        }
                        if (null != t.authorization) {
                            const e = Buffer.from(t.authorization).toString("base64");
                            s.headers = {
                                Authorization: "Basic " + e
                            }
                        }
                        const i = c.omitBy({
                                ca: t.trustedCertificates,
                                key: t.key,
                                passphrase: t.passphrase,
                                cert: t.certificate
                            }, e => null == e),
                            n = Object.assign({}, s, i),
                            a = new l.default(e, null, n);
                        return "function" == typeof a.setMaxListeners && a.setMaxListeners(1 / 0), a
                    }(this._url, this._config), this._ws.on("error", this._onConnectionFailed), this._ws.on("error", () => clearTimeout(e)), this._ws.on("close", this._onConnectionFailed), this._ws.on("close", () => clearTimeout(e)), this._ws.once("open", () => a(this, void 0, void 0, (function*() {
                        this._ws.removeAllListeners(), clearTimeout(e), this._ws.on("message", e => this._onMessage(e)), this._ws.on("error", e => this.emit("error", "websocket", e.message, e)), this._ws.once("close", e => {
                            if (this._clearHeartbeatInterval(), this._requestManager.rejectAll(new u.DisconnectedError("websocket was closed")), this._ws.removeAllListeners(), this._ws = null, this.emit("disconnected", e), 4e3 !== e) {
                                const e = this._retryConnectionBackoff.duration();
                                this._trace("reconnect", `Retrying connection in ${e}ms.`), this.emit("reconnecting", this._retryConnectionBackoff.attempts), this._reconnectTimeoutID = setTimeout(() => {
                                    this.reconnect().catch(e => {
                                        this.emit("error", "reconnect", e.message, e)
                                    })
                                }, e)
                            }
                        });
                        try {
                            this._retryConnectionBackoff.reset(), yield this._subscribeToLedger(), this._startHeartbeatInterval(), this._connectionManager.resolveAllAwaiting(), this.emit("connected")
                        } catch (e) {
                            this._connectionManager.rejectAllAwaiting(e), yield this.disconnect().catch(() => {})
                        }
                    }))), this._connectionManager.awaitConnection()
                }
                disconnect() {
                    return clearTimeout(this._reconnectTimeoutID), this._reconnectTimeoutID = null, this._state !== l.default.CLOSED && this._ws ? new Promise(e => {
                        this._ws.once("close", t => e(t)), this._state !== l.default.CLOSING && this._ws.close(4e3)
                    }) : Promise.resolve(void 0)
                }
                reconnect() {
                    return a(this, void 0, void 0, (function*() {
                        this.emit("reconnect"), yield this.disconnect(), yield this.connect()
                    }))
                }
                getFeeBase() {
                    return a(this, void 0, void 0, (function*() {
                        return yield this._waitForReady(), this._ledger.feeBase
                    }))
                }
                getFeeRef() {
                    return a(this, void 0, void 0, (function*() {
                        return yield this._waitForReady(), this._ledger.feeRef
                    }))
                }
                getLedgerVersion() {
                    return a(this, void 0, void 0, (function*() {
                        return yield this._waitForReady(), this._ledger.latestVersion
                    }))
                }
                getReserveBase() {
                    return a(this, void 0, void 0, (function*() {
                        return yield this._waitForReady(), this._ledger.reserveBase
                    }))
                }
                hasLedgerVersions(e, t) {
                    return a(this, void 0, void 0, (function*() {
                        return t ? (yield this._waitForReady(), this._ledger.hasVersions(e, t)) : this.hasLedgerVersion(e)
                    }))
                }
                hasLedgerVersion(e) {
                    return a(this, void 0, void 0, (function*() {
                        return yield this._waitForReady(), this._ledger.hasVersion(e)
                    }))
                }
                request(e, t) {
                    return a(this, void 0, void 0, (function*() {
                        if (!this._shouldBeConnected) throw new u.NotConnectedError;
                        const [r, s, i] = this._requestManager.createRequest(e, t || this._config.timeout);
                        return this._trace("send", s),
                            function(e, t) {
                                return new Promise((r, s) => {
                                    e.send(t, void 0, e => {
                                        e ? s(new u.DisconnectedError(e.message, e)) : r()
                                    })
                                })
                            }(this._ws, s).catch(e => {
                                this._requestManager.reject(r, e)
                            }), i
                    }))
                }
                getUrl() {
                    return this._url
                }
            }
            t.Connection = Connection
        },
        9317: function(e, t, r) {
            "use strict";
            const s = r(69);
            class WSWrapper extends s.EventEmitter {
                constructor(e, t, r) {
                    super(), this.setMaxListeners(1 / 0), this._ws = new WebSocket(e), this._ws.onclose = () => {
                        this.emit("close")
                    }, this._ws.onopen = () => {
                        this.emit("open")
                    }, this._ws.onerror = e => {
                        this.emit("error", e)
                    }, this._ws.onmessage = e => {
                        this.emit("message", e.data)
                    }
                }
                close() {
                    1 === this.readyState && this._ws.close()
                }
                send(e) {
                    this._ws.send(e)
                }
                get readyState() {
                    return this._ws.readyState
                }
            }
            WSWrapper.CONNECTING = 0, WSWrapper.OPEN = 1, WSWrapper.CLOSING = 2, WSWrapper.CLOSED = 3, e.exports = WSWrapper
        },
        9318: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExponentialBackoff = void 0;
            t.ExponentialBackoff = class ExponentialBackoff {
                constructor(e = {}) {
                    this.factor = 2, this.jitter = 0, this.attempts = 0, this.ms = e.min || 100, this.max = e.max || 1e4
                }
                duration() {
                    var e = this.ms * Math.pow(this.factor, this.attempts++);
                    if (this.jitter) {
                        var t = Math.random(),
                            r = Math.floor(t * this.jitter * e);
                        e = 0 == (1 & Math.floor(10 * t)) ? e - r : e + r
                    }
                    return 0 | Math.min(e, this.max)
                }
                reset() {
                    this.attempts = 0
                }
            }
        },
        9355: function(e, t, r) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SHAMap = t.Leaf = t.InnerNode = t.Node = t.NodeType = void 0;
            const i = s(r(7242)),
                n = s(r(7241)),
                a = "0000000000000000000000000000000000000000000000000000000000000000";
            var o;
            ! function(e) {
                e[e.INNER = 1] = "INNER", e[e.TRANSACTION_NO_METADATA = 2] = "TRANSACTION_NO_METADATA", e[e.TRANSACTION_METADATA = 3] = "TRANSACTION_METADATA", e[e.ACCOUNT_STATE = 4] = "ACCOUNT_STATE"
            }(o = t.NodeType || (t.NodeType = {}));
            class Node {
                constructor() {}
                addItem(e, t) {
                    throw new Error("Called unimplemented virtual method SHAMapTreeNode#addItem.")
                }
                get hash() {
                    throw new Error("Called unimplemented virtual method SHAMapTreeNode#hash.")
                }
            }
            t.Node = Node;
            class InnerNode extends Node {
                constructor(e = 0) {
                    super(), this.leaves = {}, this.type = o.INNER, this.depth = e, this.empty = !0
                }
                addItem(e, t) {
                    const r = this.getNode(parseInt(e[this.depth], 16));
                    if (r) {
                        if (r instanceof InnerNode) r.addItem(e, t);
                        else if (r instanceof Leaf) {
                            if (r.tag === e) throw new Error("Tried to add a node to a SHAMap that was already in there.");
                            {
                                const s = new InnerNode(this.depth + 1);
                                s.addItem(r.tag, r), s.addItem(e, t), this.setNode(parseInt(e[this.depth], 16), s)
                            }
                        }
                    } else this.setNode(parseInt(e[this.depth], 16), t)
                }
                setNode(e, t) {
                    if (e < 0 || e > 15) throw new Error("Invalid slot: slot must be between 0-15.");
                    this.leaves[e] = t, this.empty = !1
                }
                getNode(e) {
                    if (e < 0 || e > 15) throw new Error("Invalid slot: slot must be between 0-15.");
                    return this.leaves[e]
                }
                get hash() {
                    if (this.empty) return a;
                    let e = "";
                    for (let t = 0; t < 16; t++) e += this.leaves[t] ? this.leaves[t].hash : a;
                    const t = i.default.INNER_NODE.toString(16);
                    return n.default(t + e)
                }
            }
            t.InnerNode = InnerNode;
            class Leaf extends Node {
                constructor(e, t, r) {
                    super(), this.tag = e, this.type = r, this.data = t
                }
                get hash() {
                    switch (this.type) {
                        case o.ACCOUNT_STATE: {
                            const e = i.default.LEAF_NODE.toString(16);
                            return n.default(e + this.data + this.tag)
                        }
                        case o.TRANSACTION_NO_METADATA: {
                            const e = i.default.TRANSACTION_ID.toString(16);
                            return n.default(e + this.data)
                        }
                        case o.TRANSACTION_METADATA: {
                            const e = i.default.TRANSACTION_NODE.toString(16);
                            return n.default(e + this.data + this.tag)
                        }
                        default:
                            throw new Error("Tried to hash a SHAMap node of unknown type.")
                    }
                }
            }
            t.Leaf = Leaf;
            t.SHAMap = class SHAMap {
                constructor() {
                    this.root = new InnerNode(0)
                }
                addItem(e, t, r) {
                    this.root.addItem(e, new Leaf(e, t, r))
                }
                get hash() {
                    return this.root.hash
                }
            }
        },
        9356: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = {
                account: "a",
                dirNode: "d",
                generatorMap: "g",
                rippleState: "r",
                offer: "o",
                ownerDir: "O",
                bookDir: "B",
                contract: "c",
                skipList: "s",
                escrow: "u",
                amendment: "f",
                feeSettings: "e",
                ticket: "T",
                signerList: "S",
                paychan: "x",
                check: "C",
                depositPreauth: "p"
            }
        },
        9395: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        9396: function(e, t, r) {
            "use strict";
            var s = this && this.__awaiter || function(e, t, r, s) {
                return new(r || (r = Promise))((function(i, n) {
                    function a(e) {
                        try {
                            c(s.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(s.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(a, o)
                    }
                    c((s = s.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RippleAPIBroadcast = void 0;
            const i = r(7228);
            class RippleAPIBroadcast extends i.RippleAPI {
                constructor(e, t = {}) {
                    super(t), this.ledgerVersion = void 0;
                    const r = e.map(e => new i.RippleAPI(Object.assign({}, t, {
                        server: e
                    })));
                    this._apis = r, this.getMethodNames().forEach(e => {
                        this[e] = function() {
                            return Promise.race(r.map(t => t[e](...arguments)))
                        }
                    }), this.connect = function() {
                        return s(this, void 0, void 0, (function*() {
                            yield Promise.all(r.map(e => e.connect()))
                        }))
                    }, this.disconnect = function() {
                        return s(this, void 0, void 0, (function*() {
                            yield Promise.all(r.map(e => e.disconnect()))
                        }))
                    }, this.isConnected = function() {
                        return r.map(e => e.isConnected()).every(Boolean)
                    };
                    const n = r[0];
                    ["sign", "generateAddress", "computeLedgerHash"].forEach(e => {
                        this[e] = n[e].bind(n)
                    }), r.forEach(e => {
                        e.on("ledger", this.onLedgerEvent.bind(this)), e.on("error", (e, t, r) => this.emit("error", e, t, r))
                    })
                }
                onLedgerEvent(e) {
                    (e.ledgerVersion > this.ledgerVersion || null == this.ledgerVersion) && (this.ledgerVersion = e.ledgerVersion, this.emit("ledger", e))
                }
                getMethodNames() {
                    const e = [],
                        t = this._apis[0];
                    for (const r of Object.getOwnPropertyNames(t)) "function" == typeof t[r] && e.push(r);
                    return e
                }
            }
            t.RippleAPIBroadcast = RippleAPIBroadcast
        }
    }
]);