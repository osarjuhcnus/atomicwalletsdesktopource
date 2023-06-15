(window.webpackJsonp = window.webpackJsonp || []).push([
    [238], {
        5514: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isPartialPayment = t.adjustQualityForXRP = t.parseTimestamp = t.hexToString = t.parseMemos = t.parseOutcome = t.parseQuality = void 0;
            const u = a(n(9321)),
                s = a(n(5614)),
                c = o(n(5473)),
                l = a(n(5648));

            function f(e) {
                if ("number" == typeof e) return c.rippleTimeToISO8601(e)
            }

            function d(e) {
                "" === e.counterparty && delete e.counterparty
            }

            function h(e) {
                return 0 != (e.Flags & c.txFlags.Payment.PartialPayment)
            }

            function p(e) {
                if ("Payment" === e.TransactionType && "tesSUCCESS" === e.meta.TransactionResult && (!e.meta.delivered_amount || "unavailable" !== e.meta.delivered_amount)) return e.meta.delivered_amount ? l.default(e.meta.delivered_amount) : e.meta.DeliveredAmount ? l.default(e.meta.DeliveredAmount) : e.Amount && !h(e) || e.Amount && e.ledger_index > 4594094 ? l.default(e.Amount) : void 0
            }

            function m(e) {
                return e ? Buffer.from(e, "hex").toString("utf-8") : void 0
            }
            t.adjustQualityForXRP = function(e, t, n) {
                const r = ("XRP" === n ? -6 : 0) - ("XRP" === t ? -6 : 0);
                return 0 === r ? e : new s.default(e).shiftedBy(r).toString()
            }, t.parseQuality = function(e) {
                if ("number" == typeof e) return new s.default(e).shiftedBy(-9).toNumber()
            }, t.parseTimestamp = f, t.isPartialPayment = h, t.parseOutcome = function(e) {
                const t = e.meta || e.metaData;
                if (!t) return;
                const n = u.default.parseBalanceChanges(t),
                    r = u.default.parseOrderbookChanges(t),
                    i = u.default.parseChannelChanges(t);
                return function(e) {
                        Object.entries(e).forEach(([e, t]) => {
                            t.forEach(d)
                        })
                    }(n),
                    function(e) {
                        Object.entries(e).forEach(([e, t]) => {
                            t.forEach(e => {
                                Object.entries(e).forEach(d)
                            })
                        })
                    }(r), c.removeUndefined({
                        result: e.meta.TransactionResult,
                        timestamp: f(e.date),
                        fee: c.dropsToXrp(e.Fee),
                        balanceChanges: n,
                        orderbookChanges: r,
                        channelChanges: i,
                        ledgerVersion: e.ledger_index,
                        indexInLedger: e.meta.TransactionIndex,
                        deliveredAmount: p(e)
                    })
            }, t.hexToString = m, t.parseMemos = function(e) {
                if (Array.isArray(e.Memos) && 0 !== e.Memos.length) return e.Memos.map(e => c.removeUndefined({
                    type: e.Memo.parsed_memo_type || m(e.Memo.MemoType),
                    format: e.Memo.parsed_memo_format || m(e.Memo.MemoFormat),
                    data: e.Memo.parsed_memo_data || m(e.Memo.MemoData)
                }))
            }
        },
        5571: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, u)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                },
                u = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getClassicAccountAndTag = t.setCanonicalFlag = t.common = t.prepareTransaction = t.convertMemo = t.convertStringToHex = void 0;
            const s = u(n(5614)),
                c = o(n(5473));
            t.common = c;
            const l = n(5473),
                f = n(5782),
                d = n(5624),
                h = c.txFlags,
                p = ["Payment", "CheckCreate", "EscrowCreate", "PaymentChannelCreate"];

            function m(e) {
                e.Flags |= h.Universal.FullyCanonicalSig, e.Flags = e.Flags >>> 0
            }

            function g(e, t, n = 0) {
                return new s.default(e).times(t).plus(n).toString()
            }

            function _(e, t) {
                if (d.isValidXAddress(e)) {
                    const n = d.xAddressToClassicAddress(e);
                    if (null != t && n.tag !== t) throw new f.ValidationError("address includes a tag that does not match the tag specified in the transaction");
                    return {
                        classicAccount: n.classicAddress,
                        tag: n.tag
                    }
                }
                return {
                    classicAccount: e,
                    tag: t
                }
            }

            function v(e) {
                return Buffer.from(e, "utf8").toString("hex").toUpperCase()
            }
            t.setCanonicalFlag = m, t.getClassicAccountAndTag = _, t.prepareTransaction = function(e, t, n) {
                if (c.validate.instructions(n), c.validate.tx_json(e), null != n.sequence && 0 === n.sequence) return Promise.reject(new f.ValidationError("`sequence` cannot be 0"));
                const r = ["maxLedgerVersion", "maxLedgerVersionOffset", "fee", "sequence", "ticketSequence"].filter(t => e[t]);
                if (r.length) return Promise.reject(new f.ValidationError('txJSON additionalProperty "' + r[0] + '" exists in instance when not allowed'));
                const i = Object.assign({}, e);
                0 === e.SignerQuorum && delete i.SignerEntries;
                const {
                    classicAccount: o,
                    tag: u
                } = _(e.Account);
                if (i.Account = o, null != u) {
                    if (e.SourceTag && e.SourceTag !== u) return Promise.reject(new f.ValidationError("The `SourceTag`, if present, must match the tag of the `Account` X-address"));
                    u && (i.SourceTag = u)
                }
                if ("string" == typeof e.Destination) {
                    const {
                        classicAccount: t,
                        tag: n
                    } = _(e.Destination);
                    if (i.Destination = t, null != n && p.includes(e.TransactionType)) {
                        if (e.DestinationTag && e.DestinationTag !== n) return Promise.reject(new f.ValidationError("The Payment `DestinationTag`, if present, must match the tag of the `Destination` X-address"));
                        n && (i.DestinationTag = n)
                    }
                }

                function d(t) {
                    const n = e[t];
                    if ("string" == typeof n) {
                        const {
                            classicAccount: e
                        } = _(n);
                        i[t] = e
                    }
                }

                function h(t) {
                    const n = e[t];
                    "number" == typeof n || n instanceof Array || null == n || (i[t] = l.toRippledAmount(n))
                }
                return d("Authorize"), d("Unauthorize"), d("Owner"), d("RegularKey"), h("Amount"), h("SendMax"), h("DeliverMin"), h("TakerPays"), h("TakerGets"), h("LimitAmount"), m(i), Promise.all([function() {
                    if (i.LastLedgerSequence && n.maxLedgerVersion) return Promise.reject(new f.ValidationError("`LastLedgerSequence` in txJSON and `maxLedgerVersion` in `instructions` cannot both be set"));
                    if (i.LastLedgerSequence && n.maxLedgerVersionOffset) return Promise.reject(new f.ValidationError("`LastLedgerSequence` in txJSON and `maxLedgerVersionOffset` in `instructions` cannot both be set"));
                    if (i.LastLedgerSequence) return Promise.resolve();
                    if (void 0 !== n.maxLedgerVersion) return null !== n.maxLedgerVersion && (i.LastLedgerSequence = n.maxLedgerVersion), Promise.resolve();
                    const e = null != n.maxLedgerVersionOffset ? n.maxLedgerVersionOffset : 3;
                    return t.connection.getLedgerVersion().then(t => {
                        i.LastLedgerSequence = t + e
                    })
                }(), function() {
                    if (i.Fee && n.fee) return Promise.reject(new f.ValidationError("`Fee` in txJSON and `fee` in `instructions` cannot both be set"));
                    if (i.Fee) return Promise.resolve();
                    const e = null == n.signersCount ? 1 : n.signersCount + 1;
                    if (null != n.fee) {
                        const r = new s.default(n.fee);
                        return r.isGreaterThan(t._maxFeeXRP) ? Promise.reject(new f.ValidationError(`Fee of ${r.toString(10)} XRP exceeds max of ${t._maxFeeXRP} XRP. To use this fee, increase \`maxFeeXRP\` in the RippleAPI constructor.`)) : (i.Fee = g(c.xrpToDrops(n.fee), e), Promise.resolve())
                    }
                    const r = t._feeCushion;
                    return t.getFee(r).then(o => t.connection.getFeeRef().then(a => {
                        const u = "EscrowFinish" !== i.TransactionType || null == i.Fulfillment ? 0 : r * a * (32 + Math.floor(Buffer.from(i.Fulfillment, "hex").length / 16)),
                            l = c.xrpToDrops(o),
                            f = n.maxFee ? s.default.min(t._maxFeeXRP, n.maxFee) : t._maxFeeXRP,
                            d = c.xrpToDrops(f),
                            h = g(l, e, u);
                        i.Fee = s.default.min(h, d).toString(10)
                    }))
                }(), function() {
                    return a(this, void 0, void 0, (function*() {
                        if (null != n.sequence) return null == i.Sequence || n.sequence === i.Sequence ? (i.Sequence = n.sequence, Promise.resolve()) : Promise.reject(new f.ValidationError("`Sequence` in txJSON must match `sequence` in `instructions`"));
                        if (null != i.Sequence) return Promise.resolve();
                        if (null != n.ticketSequence) return i.Sequence = 0, i.TicketSequence = n.ticketSequence, Promise.resolve();
                        try {
                            const e = yield t.request("account_info", {
                                account: o,
                                ledger_index: "current"
                            });
                            return i.Sequence = e.account_data.Sequence, Promise.resolve()
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }))
                }()]).then(() => function(e) {
                    const t = {
                        fee: c.dropsToXrp(e.Fee),
                        maxLedgerVersion: null == e.LastLedgerSequence ? null : e.LastLedgerSequence
                    };
                    return null != e.TicketSequence ? t.ticketSequence = e.TicketSequence : t.sequence = e.Sequence, {
                        txJSON: JSON.stringify(e),
                        instructions: t
                    }
                }(i))
            }, t.convertStringToHex = v, t.convertMemo = function(e) {
                return {
                    Memo: c.removeUndefined({
                        MemoData: e.data ? v(e.data) : void 0,
                        MemoType: e.type ? v(e.type) : void 0,
                        MemoFormat: e.format ? v(e.format) : void 0
                    })
                }
            }
        },
        5614: function(e, t, n) {
            var r;
            ! function(i) {
                "use strict";
                var o, a = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    u = Math.ceil,
                    s = Math.floor,
                    c = "[BigNumber Error] ",
                    l = c + "Number primitive has more than 15 significant digits: ",
                    f = 1e14,
                    d = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    h = 1e9;

                function p(e) {
                    var t = 0 | e;
                    return e > 0 || e === t ? t : t - 1
                }

                function m(e) {
                    for (var t, n, r = 1, i = e.length, o = e[0] + ""; r < i;) {
                        for (n = 14 - (t = e[r++] + "").length; n--; t = "0" + t);
                        o += t
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function g(e, t) {
                    var n, r, i = e.c,
                        o = t.c,
                        a = e.s,
                        u = t.s,
                        s = e.e,
                        c = t.e;
                    if (!a || !u) return null;
                    if (n = i && !i[0], r = o && !o[0], n || r) return n ? r ? 0 : -u : a;
                    if (a != u) return a;
                    if (n = a < 0, r = s == c, !i || !o) return r ? 0 : !i ^ n ? 1 : -1;
                    if (!r) return s > c ^ n ? 1 : -1;
                    for (u = (s = i.length) < (c = o.length) ? s : c, a = 0; a < u; a++)
                        if (i[a] != o[a]) return i[a] > o[a] ^ n ? 1 : -1;
                    return s == c ? 0 : s > c ^ n ? 1 : -1
                }

                function _(e, t, n, r) {
                    if (e < t || e > n || e !== s(e)) throw Error(c + (r || "Argument") + ("number" == typeof e ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function v(e) {
                    var t = e.c.length - 1;
                    return p(e.e / 14) == t && e.c[t] % 2 != 0
                }

                function y(e, t) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function b(e, t, n) {
                    var r, i;
                    if (t < 0) {
                        for (i = n + "."; ++t; i += n);
                        e = i + e
                    } else if (++t > (r = e.length)) {
                        for (i = n, t -= r; --t; i += n);
                        e += i
                    } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }(o = function e(t) {
                    var n, r, i, o, O, P, j, w, T, M = q.prototype = {
                            constructor: q,
                            toString: null,
                            valueOf: null
                        },
                        S = new q(1),
                        x = 20,
                        A = 4,
                        C = -7,
                        D = 21,
                        E = -1e7,
                        F = 1e7,
                        k = !1,
                        R = 1,
                        L = 0,
                        B = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: " ",
                            suffix: ""
                        },
                        N = "0123456789abcdefghijklmnopqrstuvwxyz",
                        V = !0;

                    function q(e, t) {
                        var n, o, u, c, f, d, h, p, m = this;
                        if (!(m instanceof q)) return new q(e, t);
                        if (null == t) {
                            if (e && !0 === e._isBigNumber) return m.s = e.s, void(!e.c || e.e > F ? m.c = m.e = null : e.e < E ? m.c = [m.e = 0] : (m.e = e.e, m.c = e.c.slice()));
                            if ((d = "number" == typeof e) && 0 * e == 0) {
                                if (m.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (c = 0, f = e; f >= 10; f /= 10, c++);
                                    return void(c > F ? m.c = m.e = null : (m.e = c, m.c = [e]))
                                }
                                p = String(e)
                            } else {
                                if (!a.test(p = String(e))) return i(m, p, d);
                                m.s = 45 == p.charCodeAt(0) ? (p = p.slice(1), -1) : 1
                            }(c = p.indexOf(".")) > -1 && (p = p.replace(".", "")), (f = p.search(/e/i)) > 0 ? (c < 0 && (c = f), c += +p.slice(f + 1), p = p.substring(0, f)) : c < 0 && (c = p.length)
                        } else {
                            if (_(t, 2, N.length, "Base"), 10 == t && V) return X(m = new q(e), x + m.e + 1, A);
                            if (p = String(e), d = "number" == typeof e) {
                                if (0 * e != 0) return i(m, p, d, t);
                                if (m.s = 1 / e < 0 ? (p = p.slice(1), -1) : 1, q.DEBUG && p.replace(/^0\.0*|\./, "").length > 15) throw Error(l + e)
                            } else m.s = 45 === p.charCodeAt(0) ? (p = p.slice(1), -1) : 1;
                            for (n = N.slice(0, t), c = f = 0, h = p.length; f < h; f++)
                                if (n.indexOf(o = p.charAt(f)) < 0) {
                                    if ("." == o) {
                                        if (f > c) {
                                            c = h;
                                            continue
                                        }
                                    } else if (!u && (p == p.toUpperCase() && (p = p.toLowerCase()) || p == p.toLowerCase() && (p = p.toUpperCase()))) {
                                        u = !0, f = -1, c = 0;
                                        continue
                                    }
                                    return i(m, String(e), d, t)
                                } d = !1, (c = (p = r(p, t, 10, m.s)).indexOf(".")) > -1 ? p = p.replace(".", "") : c = p.length
                        }
                        for (f = 0; 48 === p.charCodeAt(f); f++);
                        for (h = p.length; 48 === p.charCodeAt(--h););
                        if (p = p.slice(f, ++h)) {
                            if (h -= f, d && q.DEBUG && h > 15 && (e > 9007199254740991 || e !== s(e))) throw Error(l + m.s * e);
                            if ((c = c - f - 1) > F) m.c = m.e = null;
                            else if (c < E) m.c = [m.e = 0];
                            else {
                                if (m.e = c, m.c = [], f = (c + 1) % 14, c < 0 && (f += 14), f < h) {
                                    for (f && m.c.push(+p.slice(0, f)), h -= 14; f < h;) m.c.push(+p.slice(f, f += 14));
                                    f = 14 - (p = p.slice(f)).length
                                } else f -= h;
                                for (; f--; p += "0");
                                m.c.push(+p)
                            }
                        } else m.c = [m.e = 0]
                    }

                    function I(e, t, n, r) {
                        var i, o, a, u, s;
                        if (null == n ? n = A : _(n, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], a = e.e, null == t) s = m(e.c), s = 1 == r || 2 == r && (a <= C || a >= D) ? y(s, a) : b(s, a, "0");
                        else if (o = (e = X(new q(e), t, n)).e, u = (s = m(e.c)).length, 1 == r || 2 == r && (t <= o || o <= C)) {
                            for (; u < t; s += "0", u++);
                            s = y(s, o)
                        } else if (t -= a, s = b(s, o, "0"), o + 1 > u) {
                            if (--t > 0)
                                for (s += "."; t--; s += "0");
                        } else if ((t += o - u) > 0)
                            for (o + 1 == u && (s += "."); t--; s += "0");
                        return e.s < 0 && i ? "-" + s : s
                    }

                    function U(e, t) {
                        for (var n, r = 1, i = new q(e[0]); r < e.length; r++) {
                            if (!(n = new q(e[r])).s) {
                                i = n;
                                break
                            }
                            t.call(i, n) && (i = n)
                        }
                        return i
                    }

                    function H(e, t, n) {
                        for (var r = 1, i = t.length; !t[--i]; t.pop());
                        for (i = t[0]; i >= 10; i /= 10, r++);
                        return (n = r + 14 * n - 1) > F ? e.c = e.e = null : n < E ? e.c = [e.e = 0] : (e.e = n, e.c = t), e
                    }

                    function X(e, t, n, r) {
                        var i, o, a, c, l, h, p, m = e.c,
                            g = d;
                        if (m) {
                            e: {
                                for (i = 1, c = m[0]; c >= 10; c /= 10, i++);
                                if ((o = t - i) < 0) o += 14,
                                a = t,
                                p = (l = m[h = 0]) / g[i - a - 1] % 10 | 0;
                                else if ((h = u((o + 1) / 14)) >= m.length) {
                                    if (!r) break e;
                                    for (; m.length <= h; m.push(0));
                                    l = p = 0, i = 1, a = (o %= 14) - 14 + 1
                                } else {
                                    for (l = c = m[h], i = 1; c >= 10; c /= 10, i++);
                                    p = (a = (o %= 14) - 14 + i) < 0 ? 0 : l / g[i - a - 1] % 10 | 0
                                }
                                if (r = r || t < 0 || null != m[h + 1] || (a < 0 ? l : l % g[i - a - 1]), r = n < 4 ? (p || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == n || r || 6 == n && (o > 0 ? a > 0 ? l / g[i - a] : 0 : m[h - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !m[0]) return m.length = 0,
                                r ? (t -= e.e + 1, m[0] = g[(14 - t % 14) % 14], e.e = -t || 0) : m[0] = e.e = 0,
                                e;
                                if (0 == o ? (m.length = h, c = 1, h--) : (m.length = h + 1, c = g[14 - o], m[h] = a > 0 ? s(l / g[i - a] % g[a]) * c : 0), r)
                                    for (;;) {
                                        if (0 == h) {
                                            for (o = 1, a = m[0]; a >= 10; a /= 10, o++);
                                            for (a = m[0] += c, c = 1; a >= 10; a /= 10, c++);
                                            o != c && (e.e++, m[0] == f && (m[0] = 1));
                                            break
                                        }
                                        if (m[h] += c, m[h] != f) break;
                                        m[h--] = 0, c = 1
                                    }
                                for (o = m.length; 0 === m[--o]; m.pop());
                            }
                            e.e > F ? e.c = e.e = null : e.e < E && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function K(e) {
                        var t, n = e.e;
                        return null === n ? e.toString() : (t = m(e.c), t = n <= C || n >= D ? y(t, n) : b(t, n, "0"), e.s < 0 ? "-" + t : t)
                    }
                    return q.clone = e, q.ROUND_UP = 0, q.ROUND_DOWN = 1, q.ROUND_CEIL = 2, q.ROUND_FLOOR = 3, q.ROUND_HALF_UP = 4, q.ROUND_HALF_DOWN = 5, q.ROUND_HALF_EVEN = 6, q.ROUND_HALF_CEIL = 7, q.ROUND_HALF_FLOOR = 8, q.EUCLID = 9, q.config = q.set = function(e) {
                        var t, n;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(c + "Object expected: " + e);
                            if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (_(n = e[t], 0, h, t), x = n), e.hasOwnProperty(t = "ROUNDING_MODE") && (_(n = e[t], 0, 8, t), A = n), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((n = e[t]) && n.pop ? (_(n[0], -h, 0, t), _(n[1], 0, h, t), C = n[0], D = n[1]) : (_(n, -h, h, t), C = -(D = n < 0 ? -n : n))), e.hasOwnProperty(t = "RANGE"))
                                if ((n = e[t]) && n.pop) _(n[0], -h, -1, t), _(n[1], 1, h, t), E = n[0], F = n[1];
                                else {
                                    if (_(n, -h, h, t), !n) throw Error(c + t + " cannot be zero: " + n);
                                    E = -(F = n < 0 ? -n : n)
                                } if (e.hasOwnProperty(t = "CRYPTO")) {
                                if ((n = e[t]) !== !!n) throw Error(c + t + " not true or false: " + n);
                                if (n) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw k = !n, Error(c + "crypto unavailable");
                                    k = n
                                } else k = n
                            }
                            if (e.hasOwnProperty(t = "MODULO_MODE") && (_(n = e[t], 0, 9, t), R = n), e.hasOwnProperty(t = "POW_PRECISION") && (_(n = e[t], 0, h, t), L = n), e.hasOwnProperty(t = "FORMAT")) {
                                if ("object" != typeof(n = e[t])) throw Error(c + t + " not an object: " + n);
                                B = n
                            }
                            if (e.hasOwnProperty(t = "ALPHABET")) {
                                if ("string" != typeof(n = e[t]) || /^.?$|[+\-.\s]|(.).*\1/.test(n)) throw Error(c + t + " invalid: " + n);
                                V = "0123456789" == n.slice(0, 10), N = n
                            }
                        }
                        return {
                            DECIMAL_PLACES: x,
                            ROUNDING_MODE: A,
                            EXPONENTIAL_AT: [C, D],
                            RANGE: [E, F],
                            CRYPTO: k,
                            MODULO_MODE: R,
                            POW_PRECISION: L,
                            FORMAT: B,
                            ALPHABET: N
                        }
                    }, q.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!q.DEBUG) return !0;
                        var t, n, r = e.c,
                            i = e.e,
                            o = e.s;
                        e: if ("[object Array]" == {}.toString.call(r)) {
                            if ((1 === o || -1 === o) && i >= -h && i <= h && i === s(i)) {
                                if (0 === r[0]) {
                                    if (0 === i && 1 === r.length) return !0;
                                    break e
                                }
                                if ((t = (i + 1) % 14) < 1 && (t += 14), String(r[0]).length == t) {
                                    for (t = 0; t < r.length; t++)
                                        if ((n = r[t]) < 0 || n >= f || n !== s(n)) break e;
                                    if (0 !== n) return !0
                                }
                            }
                        } else if (null === r && null === i && (null === o || 1 === o || -1 === o)) return !0;
                        throw Error(c + "Invalid BigNumber: " + e)
                    }, q.maximum = q.max = function() {
                        return U(arguments, M.lt)
                    }, q.minimum = q.min = function() {
                        return U(arguments, M.gt)
                    }, q.random = (o = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return s(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var t, n, r, i, a, l = 0,
                            f = [],
                            p = new q(S);
                        if (null == e ? e = x : _(e, 0, h), i = u(e / 14), k)
                            if (crypto.getRandomValues) {
                                for (t = crypto.getRandomValues(new Uint32Array(i *= 2)); l < i;)(a = 131072 * t[l] + (t[l + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)), t[l] = n[0], t[l + 1] = n[1]) : (f.push(a % 1e14), l += 2);
                                l = i / 2
                            } else {
                                if (!crypto.randomBytes) throw k = !1, Error(c + "crypto unavailable");
                                for (t = crypto.randomBytes(i *= 7); l < i;)(a = 281474976710656 * (31 & t[l]) + 1099511627776 * t[l + 1] + 4294967296 * t[l + 2] + 16777216 * t[l + 3] + (t[l + 4] << 16) + (t[l + 5] << 8) + t[l + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, l) : (f.push(a % 1e14), l += 7);
                                l = i / 7
                            } if (!k)
                            for (; l < i;)(a = o()) < 9e15 && (f[l++] = a % 1e14);
                        for (e %= 14, (i = f[--l]) && e && (a = d[14 - e], f[l] = s(i / a) * a); 0 === f[l]; f.pop(), l--);
                        if (l < 0) f = [r = 0];
                        else {
                            for (r = -1; 0 === f[0]; f.splice(0, 1), r -= 14);
                            for (l = 1, a = f[0]; a >= 10; a /= 10, l++);
                            l < 14 && (r -= 14 - l)
                        }
                        return p.e = r, p.c = f, p
                    }), q.sum = function() {
                        for (var e = 1, t = arguments, n = new q(t[0]); e < t.length;) n = n.plus(t[e++]);
                        return n
                    }, r = function() {
                        function e(e, t, n, r) {
                            for (var i, o, a = [0], u = 0, s = e.length; u < s;) {
                                for (o = a.length; o--; a[o] *= t);
                                for (a[0] += r.indexOf(e.charAt(u++)), i = 0; i < a.length; i++) a[i] > n - 1 && (null == a[i + 1] && (a[i + 1] = 0), a[i + 1] += a[i] / n | 0, a[i] %= n)
                            }
                            return a.reverse()
                        }
                        return function(t, r, i, o, a) {
                            var u, s, c, l, f, d, h, p, g = t.indexOf("."),
                                _ = x,
                                v = A;
                            for (g >= 0 && (l = L, L = 0, t = t.replace(".", ""), d = (p = new q(r)).pow(t.length - g), L = l, p.c = e(b(m(d.c), d.e, "0"), 10, i, "0123456789"), p.e = p.c.length), c = l = (h = e(t, r, i, a ? (u = N, "0123456789") : (u = "0123456789", N))).length; 0 == h[--l]; h.pop());
                            if (!h[0]) return u.charAt(0);
                            if (g < 0 ? --c : (d.c = h, d.e = c, d.s = o, h = (d = n(d, p, _, v, i)).c, f = d.r, c = d.e), g = h[s = c + _ + 1], l = i / 2, f = f || s < 0 || null != h[s + 1], f = v < 4 ? (null != g || f) && (0 == v || v == (d.s < 0 ? 3 : 2)) : g > l || g == l && (4 == v || f || 6 == v && 1 & h[s - 1] || v == (d.s < 0 ? 8 : 7)), s < 1 || !h[0]) t = f ? b(u.charAt(1), -_, u.charAt(0)) : u.charAt(0);
                            else {
                                if (h.length = s, f)
                                    for (--i; ++h[--s] > i;) h[s] = 0, s || (++c, h = [1].concat(h));
                                for (l = h.length; !h[--l];);
                                for (g = 0, t = ""; g <= l; t += u.charAt(h[g++]));
                                t = b(t, c, u.charAt(0))
                            }
                            return t
                        }
                    }(), n = function() {
                        function e(e, t, n) {
                            var r, i, o, a, u = 0,
                                s = e.length,
                                c = t % 1e7,
                                l = t / 1e7 | 0;
                            for (e = e.slice(); s--;) u = ((i = c * (o = e[s] % 1e7) + (r = l * o + (a = e[s] / 1e7 | 0) * c) % 1e7 * 1e7 + u) / n | 0) + (r / 1e7 | 0) + l * a, e[s] = i % n;
                            return u && (e = [u].concat(e)), e
                        }

                        function t(e, t, n, r) {
                            var i, o;
                            if (n != r) o = n > r ? 1 : -1;
                            else
                                for (i = o = 0; i < n; i++)
                                    if (e[i] != t[i]) {
                                        o = e[i] > t[i] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function n(e, t, n, r) {
                            for (var i = 0; n--;) e[n] -= i, i = e[n] < t[n] ? 1 : 0, e[n] = i * r + e[n] - t[n];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(r, i, o, a, u) {
                            var c, l, d, h, m, g, _, v, y, b, O, P, j, w, T, M, S, x = r.s == i.s ? 1 : -1,
                                A = r.c,
                                C = i.c;
                            if (!(A && A[0] && C && C[0])) return new q(r.s && i.s && (A ? !C || A[0] != C[0] : C) ? A && 0 == A[0] || !C ? 0 * x : x / 0 : NaN);
                            for (y = (v = new q(x)).c = [], x = o + (l = r.e - i.e) + 1, u || (u = f, l = p(r.e / 14) - p(i.e / 14), x = x / 14 | 0), d = 0; C[d] == (A[d] || 0); d++);
                            if (C[d] > (A[d] || 0) && l--, x < 0) y.push(1), h = !0;
                            else {
                                for (w = A.length, M = C.length, d = 0, x += 2, (m = s(u / (C[0] + 1))) > 1 && (C = e(C, m, u), A = e(A, m, u), M = C.length, w = A.length), j = M, O = (b = A.slice(0, M)).length; O < M; b[O++] = 0);
                                S = C.slice(), S = [0].concat(S), T = C[0], C[1] >= u / 2 && T++;
                                do {
                                    if (m = 0, (c = t(C, b, M, O)) < 0) {
                                        if (P = b[0], M != O && (P = P * u + (b[1] || 0)), (m = s(P / T)) > 1)
                                            for (m >= u && (m = u - 1), _ = (g = e(C, m, u)).length, O = b.length; 1 == t(g, b, _, O);) m--, n(g, M < _ ? S : C, _, u), _ = g.length, c = 1;
                                        else 0 == m && (c = m = 1), _ = (g = C.slice()).length;
                                        if (_ < O && (g = [0].concat(g)), n(b, g, O, u), O = b.length, -1 == c)
                                            for (; t(C, b, M, O) < 1;) m++, n(b, M < O ? S : C, O, u), O = b.length
                                    } else 0 === c && (m++, b = [0]);
                                    y[d++] = m, b[0] ? b[O++] = A[j] || 0 : (b = [A[j]], O = 1)
                                } while ((j++ < w || null != b[0]) && x--);
                                h = null != b[0], y[0] || y.splice(0, 1)
                            }
                            if (u == f) {
                                for (d = 1, x = y[0]; x >= 10; x /= 10, d++);
                                X(v, o + (v.e = d + 14 * l - 1) + 1, a, h)
                            } else v.e = l, v.r = +h;
                            return v
                        }
                    }(), O = /^(-?)0([xbo])(?=\w[\w.]*$)/i, P = /^([^.]+)\.$/, j = /^\.([^.]+)$/, w = /^-?(Infinity|NaN)$/, T = /^\s*\+(?=[\w.])|^\s+|\s+$/g, i = function(e, t, n, r) {
                        var i, o = n ? t : t.replace(T, "");
                        if (w.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1;
                        else {
                            if (!n && (o = o.replace(O, (function(e, t, n) {
                                    return i = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, r && r != i ? e : t
                                })), r && (i = r, o = o.replace(P, "$1").replace(j, "0.$1")), t != o)) return new q(o, i);
                            if (q.DEBUG) throw Error(c + "Not a" + (r ? " base " + r : "") + " number: " + t);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, M.absoluteValue = M.abs = function() {
                        var e = new q(this);
                        return e.s < 0 && (e.s = 1), e
                    }, M.comparedTo = function(e, t) {
                        return g(this, new q(e, t))
                    }, M.decimalPlaces = M.dp = function(e, t) {
                        var n, r, i, o = this;
                        if (null != e) return _(e, 0, h), null == t ? t = A : _(t, 0, 8), X(new q(o), e + o.e + 1, t);
                        if (!(n = o.c)) return null;
                        if (r = 14 * ((i = n.length - 1) - p(this.e / 14)), i = n[i])
                            for (; i % 10 == 0; i /= 10, r--);
                        return r < 0 && (r = 0), r
                    }, M.dividedBy = M.div = function(e, t) {
                        return n(this, new q(e, t), x, A)
                    }, M.dividedToIntegerBy = M.idiv = function(e, t) {
                        return n(this, new q(e, t), 0, 1)
                    }, M.exponentiatedBy = M.pow = function(e, t) {
                        var n, r, i, o, a, l, f, d, h = this;
                        if ((e = new q(e)).c && !e.isInteger()) throw Error(c + "Exponent not an integer: " + K(e));
                        if (null != t && (t = new q(t)), a = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return d = new q(Math.pow(+K(h), a ? e.s * (2 - v(e)) : +K(e))), t ? d.mod(t) : d;
                        if (l = e.s < 0, t) {
                            if (t.c ? !t.c[0] : !t.s) return new q(NaN);
                            (r = !l && h.isInteger() && t.isInteger()) && (h = h.mod(t))
                        } else {
                            if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || a && h.c[1] >= 24e7 : h.c[0] < 8e13 || a && h.c[0] <= 9999975e7))) return o = h.s < 0 && v(e) ? -0 : 0, h.e > -1 && (o = 1 / o), new q(l ? 1 / o : o);
                            L && (o = u(L / 14 + 2))
                        }
                        for (a ? (n = new q(.5), l && (e.s = 1), f = v(e)) : f = (i = Math.abs(+K(e))) % 2, d = new q(S);;) {
                            if (f) {
                                if (!(d = d.times(h)).c) break;
                                o ? d.c.length > o && (d.c.length = o) : r && (d = d.mod(t))
                            }
                            if (i) {
                                if (0 === (i = s(i / 2))) break;
                                f = i % 2
                            } else if (X(e = e.times(n), e.e + 1, 1), e.e > 14) f = v(e);
                            else {
                                if (0 === (i = +K(e))) break;
                                f = i % 2
                            }
                            h = h.times(h), o ? h.c && h.c.length > o && (h.c.length = o) : r && (h = h.mod(t))
                        }
                        return r ? d : (l && (d = S.div(d)), t ? d.mod(t) : o ? X(d, L, A, void 0) : d)
                    }, M.integerValue = function(e) {
                        var t = new q(this);
                        return null == e ? e = A : _(e, 0, 8), X(t, t.e + 1, e)
                    }, M.isEqualTo = M.eq = function(e, t) {
                        return 0 === g(this, new q(e, t))
                    }, M.isFinite = function() {
                        return !!this.c
                    }, M.isGreaterThan = M.gt = function(e, t) {
                        return g(this, new q(e, t)) > 0
                    }, M.isGreaterThanOrEqualTo = M.gte = function(e, t) {
                        return 1 === (t = g(this, new q(e, t))) || 0 === t
                    }, M.isInteger = function() {
                        return !!this.c && p(this.e / 14) > this.c.length - 2
                    }, M.isLessThan = M.lt = function(e, t) {
                        return g(this, new q(e, t)) < 0
                    }, M.isLessThanOrEqualTo = M.lte = function(e, t) {
                        return -1 === (t = g(this, new q(e, t))) || 0 === t
                    }, M.isNaN = function() {
                        return !this.s
                    }, M.isNegative = function() {
                        return this.s < 0
                    }, M.isPositive = function() {
                        return this.s > 0
                    }, M.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, M.minus = function(e, t) {
                        var n, r, i, o, a = this,
                            u = a.s;
                        if (t = (e = new q(e, t)).s, !u || !t) return new q(NaN);
                        if (u != t) return e.s = -t, a.plus(e);
                        var s = a.e / 14,
                            c = e.e / 14,
                            l = a.c,
                            d = e.c;
                        if (!s || !c) {
                            if (!l || !d) return l ? (e.s = -t, e) : new q(d ? a : NaN);
                            if (!l[0] || !d[0]) return d[0] ? (e.s = -t, e) : new q(l[0] ? a : 3 == A ? -0 : 0)
                        }
                        if (s = p(s), c = p(c), l = l.slice(), u = s - c) {
                            for ((o = u < 0) ? (u = -u, i = l) : (c = s, i = d), i.reverse(), t = u; t--; i.push(0));
                            i.reverse()
                        } else
                            for (r = (o = (u = l.length) < (t = d.length)) ? u : t, u = t = 0; t < r; t++)
                                if (l[t] != d[t]) {
                                    o = l[t] < d[t];
                                    break
                                } if (o && (i = l, l = d, d = i, e.s = -e.s), (t = (r = d.length) - (n = l.length)) > 0)
                            for (; t--; l[n++] = 0);
                        for (t = f - 1; r > u;) {
                            if (l[--r] < d[r]) {
                                for (n = r; n && !l[--n]; l[n] = t);
                                --l[n], l[r] += f
                            }
                            l[r] -= d[r]
                        }
                        for (; 0 == l[0]; l.splice(0, 1), --c);
                        return l[0] ? H(e, l, c) : (e.s = 3 == A ? -1 : 1, e.c = [e.e = 0], e)
                    }, M.modulo = M.mod = function(e, t) {
                        var r, i, o = this;
                        return e = new q(e, t), !o.c || !e.s || e.c && !e.c[0] ? new q(NaN) : !e.c || o.c && !o.c[0] ? new q(o) : (9 == R ? (i = e.s, e.s = 1, r = n(o, e, 0, 3), e.s = i, r.s *= i) : r = n(o, e, 0, R), (e = o.minus(r.times(e))).c[0] || 1 != R || (e.s = o.s), e)
                    }, M.multipliedBy = M.times = function(e, t) {
                        var n, r, i, o, a, u, s, c, l, d, h, m, g, _, v = this,
                            y = v.c,
                            b = (e = new q(e, t)).c;
                        if (!(y && b && y[0] && b[0])) return !v.s || !e.s || y && !y[0] && !b || b && !b[0] && !y ? e.c = e.e = e.s = null : (e.s *= v.s, y && b ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (r = p(v.e / 14) + p(e.e / 14), e.s *= v.s, (s = y.length) < (d = b.length) && (g = y, y = b, b = g, i = s, s = d, d = i), i = s + d, g = []; i--; g.push(0));
                        for (_ = f, 1e7, i = d; --i >= 0;) {
                            for (n = 0, h = b[i] % 1e7, m = b[i] / 1e7 | 0, o = i + (a = s); o > i;) n = ((c = h * (c = y[--a] % 1e7) + (u = m * c + (l = y[a] / 1e7 | 0) * h) % 1e7 * 1e7 + g[o] + n) / _ | 0) + (u / 1e7 | 0) + m * l, g[o--] = c % _;
                            g[o] = n
                        }
                        return n ? ++r : g.splice(0, 1), H(e, g, r)
                    }, M.negated = function() {
                        var e = new q(this);
                        return e.s = -e.s || null, e
                    }, M.plus = function(e, t) {
                        var n, r = this,
                            i = r.s;
                        if (t = (e = new q(e, t)).s, !i || !t) return new q(NaN);
                        if (i != t) return e.s = -t, r.minus(e);
                        var o = r.e / 14,
                            a = e.e / 14,
                            u = r.c,
                            s = e.c;
                        if (!o || !a) {
                            if (!u || !s) return new q(i / 0);
                            if (!u[0] || !s[0]) return s[0] ? e : new q(u[0] ? r : 0 * i)
                        }
                        if (o = p(o), a = p(a), u = u.slice(), i = o - a) {
                            for (i > 0 ? (a = o, n = s) : (i = -i, n = u), n.reverse(); i--; n.push(0));
                            n.reverse()
                        }
                        for ((i = u.length) - (t = s.length) < 0 && (n = s, s = u, u = n, t = i), i = 0; t;) i = (u[--t] = u[t] + s[t] + i) / f | 0, u[t] = f === u[t] ? 0 : u[t] % f;
                        return i && (u = [i].concat(u), ++a), H(e, u, a)
                    }, M.precision = M.sd = function(e, t) {
                        var n, r, i, o = this;
                        if (null != e && e !== !!e) return _(e, 1, h), null == t ? t = A : _(t, 0, 8), X(new q(o), e, t);
                        if (!(n = o.c)) return null;
                        if (r = 14 * (i = n.length - 1) + 1, i = n[i]) {
                            for (; i % 10 == 0; i /= 10, r--);
                            for (i = n[0]; i >= 10; i /= 10, r++);
                        }
                        return e && o.e + 1 > r && (r = o.e + 1), r
                    }, M.shiftedBy = function(e) {
                        return _(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, M.squareRoot = M.sqrt = function() {
                        var e, t, r, i, o, a = this,
                            u = a.c,
                            s = a.s,
                            c = a.e,
                            l = x + 4,
                            f = new q("0.5");
                        if (1 !== s || !u || !u[0]) return new q(!s || s < 0 && (!u || u[0]) ? NaN : u ? a : 1 / 0);
                        if (0 == (s = Math.sqrt(+K(a))) || s == 1 / 0 ? (((t = m(u)).length + c) % 2 == 0 && (t += "0"), s = Math.sqrt(+t), c = p((c + 1) / 2) - (c < 0 || c % 2), r = new q(t = s == 1 / 0 ? "5e" + c : (t = s.toExponential()).slice(0, t.indexOf("e") + 1) + c)) : r = new q(s + ""), r.c[0])
                            for ((s = (c = r.e) + l) < 3 && (s = 0);;)
                                if (o = r, r = f.times(o.plus(n(a, o, l, 1))), m(o.c).slice(0, s) === (t = m(r.c)).slice(0, s)) {
                                    if (r.e < c && --s, "9999" != (t = t.slice(s - 3, s + 1)) && (i || "4999" != t)) {
                                        +t && (+t.slice(1) || "5" != t.charAt(0)) || (X(r, r.e + x + 2, 1), e = !r.times(r).eq(a));
                                        break
                                    }
                                    if (!i && (X(o, o.e + x + 2, 0), o.times(o).eq(a))) {
                                        r = o;
                                        break
                                    }
                                    l += 4, s += 4, i = 1
                                } return X(r, r.e + x + 1, A, e)
                    }, M.toExponential = function(e, t) {
                        return null != e && (_(e, 0, h), e++), I(this, e, t, 1)
                    }, M.toFixed = function(e, t) {
                        return null != e && (_(e, 0, h), e = e + this.e + 1), I(this, e, t)
                    }, M.toFormat = function(e, t, n) {
                        var r, i = this;
                        if (null == n) null != e && t && "object" == typeof t ? (n = t, t = null) : e && "object" == typeof e ? (n = e, e = t = null) : n = B;
                        else if ("object" != typeof n) throw Error(c + "Argument not an object: " + n);
                        if (r = i.toFixed(e, t), i.c) {
                            var o, a = r.split("."),
                                u = +n.groupSize,
                                s = +n.secondaryGroupSize,
                                l = n.groupSeparator || "",
                                f = a[0],
                                d = a[1],
                                h = i.s < 0,
                                p = h ? f.slice(1) : f,
                                m = p.length;
                            if (s && (o = u, u = s, s = o, m -= o), u > 0 && m > 0) {
                                for (o = m % u || u, f = p.substr(0, o); o < m; o += u) f += l + p.substr(o, u);
                                s > 0 && (f += l + p.slice(o)), h && (f = "-" + f)
                            }
                            r = d ? f + (n.decimalSeparator || "") + ((s = +n.fractionGroupSize) ? d.replace(new RegExp("\\d{" + s + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : d) : f
                        }
                        return (n.prefix || "") + r + (n.suffix || "")
                    }, M.toFraction = function(e) {
                        var t, r, i, o, a, u, s, l, f, h, p, g, _ = this,
                            v = _.c;
                        if (null != e && (!(s = new q(e)).isInteger() && (s.c || 1 !== s.s) || s.lt(S))) throw Error(c + "Argument " + (s.isInteger() ? "out of range: " : "not an integer: ") + K(s));
                        if (!v) return new q(_);
                        for (t = new q(S), f = r = new q(S), i = l = new q(S), g = m(v), a = t.e = g.length - _.e - 1, t.c[0] = d[(u = a % 14) < 0 ? 14 + u : u], e = !e || s.comparedTo(t) > 0 ? a > 0 ? t : f : s, u = F, F = 1 / 0, s = new q(g), l.c[0] = 0; h = n(s, t, 0, 1), 1 != (o = r.plus(h.times(i))).comparedTo(e);) r = i, i = o, f = l.plus(h.times(o = f)), l = o, t = s.minus(h.times(o = t)), s = o;
                        return o = n(e.minus(r), i, 0, 1), l = l.plus(o.times(f)), r = r.plus(o.times(i)), l.s = f.s = _.s, p = n(f, i, a *= 2, A).minus(_).abs().comparedTo(n(l, r, a, A).minus(_).abs()) < 1 ? [f, i] : [l, r], F = u, p
                    }, M.toNumber = function() {
                        return +K(this)
                    }, M.toPrecision = function(e, t) {
                        return null != e && _(e, 1, h), I(this, e, t, 2)
                    }, M.toString = function(e) {
                        var t, n = this,
                            i = n.s,
                            o = n.e;
                        return null === o ? i ? (t = "Infinity", i < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = o <= C || o >= D ? y(m(n.c), o) : b(m(n.c), o, "0") : 10 === e && V ? t = b(m((n = X(new q(n), x + o + 1, A)).c), n.e, "0") : (_(e, 2, N.length, "Base"), t = r(b(m(n.c), o, "0"), 10, e, i, !0)), i < 0 && n.c[0] && (t = "-" + t)), t
                    }, M.valueOf = M.toJSON = function() {
                        return K(this)
                    }, M._isBigNumber = !0, null != t && q.set(t), q
                }()).default = o.BigNumber = o, void 0 === (r = function() {
                    return o
                }.call(t, n, t, e)) || (e.exports = r)
            }()
        },
        5648: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5473));
            t.default = function(e) {
                return "string" == typeof e ? {
                    currency: "XRP",
                    value: a.dropsToXrp(e)
                } : {
                    currency: e.currency,
                    value: e.value,
                    counterparty: e.issuer
                }
            }
        },
        5783: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.common = t.clamp = t.isPendingLedgerVersion = t.hasCompleteLedgerRange = t.getRecursive = t.renameCounterpartyToIssuerInOrder = t.renameCounterpartyToIssuer = t.compareTransactions = t.ensureLedgerVersion = t.getXRPBalance = void 0;
            const a = o(n(53)),
                u = o(n(72)),
                s = o(n(5473));

            function c(e) {
                const t = null != e.counterparty ? e.counterparty : null != e.issuer ? e.issuer : void 0,
                    n = Object.assign({}, e, {
                        issuer: t
                    });
                return delete n.counterparty, n
            }
            t.common = s, t.clamp = function(e, t, n) {
                return u.ok(t <= n, "Illegal clamp bounds"), Math.min(Math.max(e, t), n)
            }, t.getXRPBalance = function(e, t, n) {
                const r = {
                    command: "account_info",
                    account: t,
                    ledger_index: n
                };
                return e.request(r).then(e => s.dropsToXrp(e.account_data.Balance))
            }, t.getRecursive = function(e, t) {
                return function e(t, n, r) {
                    return t(n, r).then(n => {
                        const i = r - n.results.length;
                        return i > 0 && null != n.marker ? e(t, n.marker, i).then(e => n.results.concat(e)) : n.results.slice(0, r)
                    })
                }(e, void 0, t || 1 / 0)
            }, t.renameCounterpartyToIssuer = c, t.renameCounterpartyToIssuerInOrder = function(e) {
                const t = {
                    taker_gets: c(e.taker_gets),
                    taker_pays: c(e.taker_pays)
                };
                return Object.assign({}, e, a.omitBy(t, e => null == e))
            }, t.compareTransactions = function(e, t) {
                return e.outcome && t.outcome ? e.outcome.ledgerVersion === t.outcome.ledgerVersion ? 0 === (n = e.outcome.indexInLedger - t.outcome.indexInLedger) ? 0 : n > 0 ? 1 : -1 : e.outcome.ledgerVersion < t.outcome.ledgerVersion ? -1 : 1 : 0;
                var n
            }, t.hasCompleteLedgerRange = function(e, t, n) {
                return e.hasLedgerVersions(t || 32570, n)
            }, t.isPendingLedgerVersion = function(e, t) {
                return e.getLedgerVersion().then(e => e < (t || 0))
            }, t.ensureLedgerVersion = function(e) {
                return Boolean(e) && null != e.ledgerVersion && null !== e.ledgerVersion ? Promise.resolve(e) : this.getLedgerVersion().then(t => Object.assign({}, e, {
                    ledgerVersion: t
                }))
            }
        },
        6517: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(5514),
                o = n(5473),
                a = r(n(9325)),
                u = r(n(9326)),
                s = r(n(9327)),
                c = r(n(9328)),
                l = r(n(9329)),
                f = r(n(9330)),
                d = r(n(9331)),
                h = r(n(9332)),
                p = r(n(9333)),
                m = r(n(9334)),
                g = r(n(9335)),
                _ = r(n(9336)),
                v = r(n(9337)),
                y = r(n(9338)),
                b = r(n(9339)),
                O = r(n(9340)),
                P = r(n(9341)),
                j = r(n(9342)),
                w = r(n(9343));
            t.default = function(e, t) {
                const n = function(e) {
                        return {
                            AccountSet: "settings",
                            AccountDelete: "accountDelete",
                            CheckCancel: "checkCancel",
                            CheckCash: "checkCash",
                            CheckCreate: "checkCreate",
                            DepositPreauth: "depositPreauth",
                            EscrowCancel: "escrowCancellation",
                            EscrowCreate: "escrowCreation",
                            EscrowFinish: "escrowExecution",
                            OfferCancel: "orderCancellation",
                            OfferCreate: "order",
                            Payment: "payment",
                            PaymentChannelClaim: "paymentChannelClaim",
                            PaymentChannelCreate: "paymentChannelCreate",
                            PaymentChannelFund: "paymentChannelFund",
                            SetRegularKey: "settings",
                            SignerListSet: "settings",
                            TicketCreate: "ticketCreate",
                            TrustSet: "trustline",
                            EnableAmendment: "amendment",
                            SetFee: "feeUpdate"
                        } [e] || null
                    }(e.TransactionType),
                    r = {
                        settings: a.default,
                        accountDelete: u.default,
                        checkCancel: s.default,
                        checkCash: c.default,
                        checkCreate: l.default,
                        depositPreauth: f.default,
                        escrowCancellation: d.default,
                        escrowCreation: h.default,
                        escrowExecution: p.default,
                        orderCancellation: m.default,
                        order: g.default,
                        payment: _.default,
                        paymentChannelClaim: v.default,
                        paymentChannelCreate: y.default,
                        paymentChannelFund: b.default,
                        ticketCreate: O.default,
                        trustline: P.default,
                        amendment: j.default,
                        feeUpdate: w.default
                    } [n],
                    T = r ? r(e) : {
                        UNAVAILABLE: "Unrecognized transaction type.",
                        SEE_RAW_TRANSACTION: "Since this type is unrecognized, `rawTransaction` is included in this response."
                    };
                r || (t = !0);
                const M = i.parseOutcome(e);
                return o.removeUndefined({
                    type: n,
                    address: e.Account,
                    sequence: e.Sequence,
                    id: e.hash,
                    specification: o.removeUndefined(T),
                    outcome: M ? o.removeUndefined(M) : void 0,
                    rawTransaction: t ? JSON.stringify(e) : void 0
                })
            }
        },
        7232: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, u)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                },
                u = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = o(n(5783)),
                c = u(n(6517)),
                l = n(5473);
            t.default = function(e, t = {}) {
                return a(this, void 0, void 0, (function*() {
                    l.validate.getTransaction({
                        id: e,
                        options: t
                    });
                    const n = yield s.ensureLedgerVersion.call(this, t);
                    try {
                        const t = yield this.request("tx", {
                            transaction: e,
                            binary: !1
                        });
                        return function(e, t) {
                            if (!0 !== t.validated || ! function(e, t) {
                                    return (!t.minLedgerVersion || e.ledger_index >= t.minLedgerVersion) && (!t.maxLedgerVersion || e.ledger_index <= t.maxLedgerVersion)
                                }(t, e)) throw new l.errors.NotFoundError("Transaction not found");
                            return c.default(t, e.includeRawTransaction)
                        }(n, yield function(e, t) {
                            if (t.date) return Promise.resolve(t);
                            const n = t.ledger_index || t.LedgerSequence;
                            if (!n) return new Promise(() => {
                                const e = new l.errors.NotFoundError("Transaction has not been validated yet; try again later");
                                throw e.data = {
                                    details: "(ledger_index and LedgerSequence not found in tx)"
                                }, e
                            });
                            const r = {
                                command: "ledger",
                                ledger_index: n
                            };
                            return e.request(r).then(e => {
                                if ("number" == typeof e.ledger.close_time) return Object.assign({
                                    date: e.ledger.close_time
                                }, t);
                                throw new l.errors.UnexpectedError("Ledger missing close_time")
                            }).catch(e => {
                                if (e instanceof l.errors.UnexpectedError) throw e;
                                throw new l.errors.NotFoundError("Transaction ledger not found")
                            })
                        }(this.connection, t))
                    } catch (e) {
                        throw yield function(e, t, n) {
                            let r = !1;
                            (n.data && "txnNotFound" === n.data.error || "txnNotFound" === n.message) && (r = !0);
                            const i = r ? new l.errors.NotFoundError("Transaction not found") : n;
                            return i instanceof l.errors.NotFoundError ? s.hasCompleteLedgerRange(e, t.minLedgerVersion, t.maxLedgerVersion).then(n => n ? i : s.isPendingLedgerVersion(e, t.maxLedgerVersion).then(e => e ? new l.errors.PendingLedgerVersionError : new l.errors.MissingLedgerHistoryError)) : Promise.resolve(i)
                        }(this.connection, n, e)
                    }
                }))
            }
        },
        7234: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(n(5614)),
                o = n(5473).constants.AccountFields;

            function a(e, t) {
                return "hex" !== e.encoding || e.length ? e.shift ? new i.default(t).shiftedBy(-e.shift).toNumber() : t : Buffer.from(t, "hex").toString("ascii")
            }
            t.default = function(e) {
                const t = {};
                for (const n in o) {
                    const r = e[n];
                    if (null != r) {
                        const e = o[n];
                        t[e.name] = a(e, r)
                    }
                }
                return e.RegularKey && (t.regularKey = e.RegularKey), e.signer_lists && 1 === e.signer_lists.length && (t.signers = {}, e.signer_lists[0].SignerQuorum && (t.signers.threshold = e.signer_lists[0].SignerQuorum), e.signer_lists[0].SignerEntries && (t.signers.weights = e.signer_lists[0].SignerEntries.map(e => ({
                    address: e.SignerEntry.Account,
                    weight: e.SignerEntry.SignerWeight
                })))), t
            }
        },
        7243: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.trustlineFlags = t.orderFlags = void 0;
            t.orderFlags = {
                Passive: 65536,
                Sell: 131072
            };
            t.trustlineFlags = {
                LowReserve: 65536,
                HighReserve: 131072,
                LowAuth: 262144,
                HighAuth: 524288,
                LowNoRipple: 1048576,
                HighNoRipple: 2097152,
                LowFreeze: 4194304,
                HighFreeze: 8388608
            }
        },
        7244: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.verifyPaymentChannelClaim = t.signPaymentChannelClaim = t.deriveXAddress = t.deriveAddress = t.deriveKeypair = t.generateXAddress = t.generateAddress = t.computePaymentChannelHash = t.computeEscrowHash = t.computeLedgerHash = t.computeStateTreeHash = t.computeTransactionTreeHash = t.computeTrustlineHash = t.computeOrderID = t.computeSignerListLedgerObjectID = t.computeAccountLedgerObjectID = t.computeBinaryTransactionSigningHash = t.computeTransactionHash = t.computeBinaryTransactionHash = t.isValidSecret = t.iso8601ToRippleTime = t.rippleTimeToISO8601 = t.removeUndefined = t.convertKeysFromSnakeCaseToCamelCase = t.toRippledAmount = t.xrpToDrops = t.dropsToXrp = t.computeLedgerHeaderHash = void 0;
            const i = n(7245);
            Object.defineProperty(t, "deriveKeypair", {
                enumerable: !0,
                get: function() {
                    return i.deriveKeypair
                }
            }), Object.defineProperty(t, "deriveAddress", {
                enumerable: !0,
                get: function() {
                    return i.deriveAddress
                }
            }), Object.defineProperty(t, "deriveXAddress", {
                enumerable: !0,
                get: function() {
                    return i.deriveXAddress
                }
            });
            const o = r(n(7246));
            t.computeLedgerHeaderHash = o.default;
            const a = r(n(7247));
            t.signPaymentChannelClaim = a.default;
            const u = r(n(7248));
            t.verifyPaymentChannelClaim = u.default;
            const s = n(6187);
            Object.defineProperty(t, "dropsToXrp", {
                enumerable: !0,
                get: function() {
                    return s.dropsToXrp
                }
            }), Object.defineProperty(t, "xrpToDrops", {
                enumerable: !0,
                get: function() {
                    return s.xrpToDrops
                }
            }), Object.defineProperty(t, "toRippledAmount", {
                enumerable: !0,
                get: function() {
                    return s.toRippledAmount
                }
            }), Object.defineProperty(t, "convertKeysFromSnakeCaseToCamelCase", {
                enumerable: !0,
                get: function() {
                    return s.convertKeysFromSnakeCaseToCamelCase
                }
            }), Object.defineProperty(t, "removeUndefined", {
                enumerable: !0,
                get: function() {
                    return s.removeUndefined
                }
            }), Object.defineProperty(t, "rippleTimeToISO8601", {
                enumerable: !0,
                get: function() {
                    return s.rippleTimeToISO8601
                }
            }), Object.defineProperty(t, "iso8601ToRippleTime", {
                enumerable: !0,
                get: function() {
                    return s.iso8601ToRippleTime
                }
            }), Object.defineProperty(t, "isValidSecret", {
                enumerable: !0,
                get: function() {
                    return s.isValidSecret
                }
            });
            const c = n(5928);
            Object.defineProperty(t, "computeBinaryTransactionHash", {
                enumerable: !0,
                get: function() {
                    return c.computeBinaryTransactionHash
                }
            }), Object.defineProperty(t, "computeTransactionHash", {
                enumerable: !0,
                get: function() {
                    return c.computeTransactionHash
                }
            }), Object.defineProperty(t, "computeBinaryTransactionSigningHash", {
                enumerable: !0,
                get: function() {
                    return c.computeBinaryTransactionSigningHash
                }
            }), Object.defineProperty(t, "computeAccountLedgerObjectID", {
                enumerable: !0,
                get: function() {
                    return c.computeAccountLedgerObjectID
                }
            }), Object.defineProperty(t, "computeSignerListLedgerObjectID", {
                enumerable: !0,
                get: function() {
                    return c.computeSignerListLedgerObjectID
                }
            }), Object.defineProperty(t, "computeOrderID", {
                enumerable: !0,
                get: function() {
                    return c.computeOrderID
                }
            }), Object.defineProperty(t, "computeTrustlineHash", {
                enumerable: !0,
                get: function() {
                    return c.computeTrustlineHash
                }
            }), Object.defineProperty(t, "computeTransactionTreeHash", {
                enumerable: !0,
                get: function() {
                    return c.computeTransactionTreeHash
                }
            }), Object.defineProperty(t, "computeStateTreeHash", {
                enumerable: !0,
                get: function() {
                    return c.computeStateTreeHash
                }
            }), Object.defineProperty(t, "computeLedgerHash", {
                enumerable: !0,
                get: function() {
                    return c.computeLedgerHash
                }
            }), Object.defineProperty(t, "computeEscrowHash", {
                enumerable: !0,
                get: function() {
                    return c.computeEscrowHash
                }
            }), Object.defineProperty(t, "computePaymentChannelHash", {
                enumerable: !0,
                get: function() {
                    return c.computePaymentChannelHash
                }
            });
            const l = n(9390);
            Object.defineProperty(t, "generateXAddress", {
                enumerable: !0,
                get: function() {
                    return l.generateAddressAPI
                }
            });
            t.generateAddress = (e = {}) => l.generateAddressAPI(Object.assign(Object.assign({}, e), {
                includeClassicAddress: !0
            }))
        },
        7245: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.deriveXAddress = t.deriveAddress = t.deriveKeypair = void 0;
            const r = n(5844);
            Object.defineProperty(t, "deriveKeypair", {
                enumerable: !0,
                get: function() {
                    return r.deriveKeypair
                }
            }), Object.defineProperty(t, "deriveAddress", {
                enumerable: !0,
                get: function() {
                    return r.deriveAddress
                }
            });
            const i = n(5624);
            t.deriveXAddress = function(e) {
                const t = r.deriveAddress(e.publicKey);
                return i.classicAddressToXAddress(t, e.tag, e.test)
            }
        },
        7246: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(53)),
                u = n(5928),
                s = o(n(5473));

            function c(e) {
                const t = function(e) {
                    return {
                        account_hash: e.stateHash,
                        close_time: s.iso8601ToRippleTime(e.closeTime),
                        close_time_resolution: e.closeTimeResolution,
                        close_flags: e.closeFlags,
                        hash: e.ledgerHash,
                        ledger_hash: e.ledgerHash,
                        ledger_index: e.ledgerVersion.toString(),
                        parent_hash: e.parentLedgerHash,
                        parent_close_time: s.iso8601ToRippleTime(e.parentCloseTime),
                        total_coins: e.totalDrops,
                        transaction_hash: e.transactionHash
                    }
                }(e);
                return u.computeLedgerHash(t)
            }

            function l(e, t) {
                let n;
                if (e.rawTransactions) n = JSON.parse(e.rawTransactions);
                else {
                    if (!e.transactions) {
                        if (t.computeTreeHashes) throw new s.errors.ValidationError("transactions property is missing from the ledger");
                        return e.transactionHash
                    }
                    try {
                        n = e.transactions.map(e => JSON.parse(e.rawTransaction))
                    } catch (e) {
                        if ("SyntaxError: Unexpected token u in JSON at position 0" === e.toString()) throw new s.errors.ValidationError("ledger is missing raw transactions")
                    }
                }
                const r = n.map(e => {
                        const t = Object.assign({}, a.omit(e, "tx"), e.tx || {});
                        return Object.assign({}, a.omit(t, "meta"), e.meta ? {
                            metaData: e.meta
                        } : {})
                    }),
                    i = u.computeTransactionTreeHash(r);
                if (null != e.transactionHash && e.transactionHash !== i) throw new s.errors.ValidationError("transactionHash in header does not match computed hash of transactions", {
                    transactionHashInHeader: e.transactionHash,
                    computedHashOfTransactions: i
                });
                return i
            }

            function f(e, t) {
                if (null == e.rawState) {
                    if (t.computeTreeHashes) throw new s.errors.ValidationError("rawState property is missing from the ledger");
                    return e.stateHash
                }
                const n = JSON.parse(e.rawState),
                    r = u.computeStateTreeHash(n);
                if (null != e.stateHash && e.stateHash !== r) throw new s.errors.ValidationError("stateHash in header does not match computed hash of state");
                return r
            }
            t.default = function(e, t = {}) {
                const n = {
                    transactionHash: l(e, t),
                    stateHash: f(e, t)
                };
                return c(Object.assign({}, e, n))
            }
        },
        7247: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(5473)),
                s = a(n(5844)),
                c = a(n(5925)),
                {
                    validate: l,
                    xrpToDrops: f
                } = u;
            t.default = function(e, t, n) {
                l.signPaymentChannelClaim({
                    channel: e,
                    amount: t,
                    privateKey: n
                });
                const r = c.default.encodeForSigningClaim({
                    channel: e,
                    amount: f(t)
                });
                return s.default.sign(r, n)
            }
        },
        7248: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(n(5844)),
                o = r(n(5925)),
                a = n(5473);
            t.default = function(e, t, n, r) {
                a.validate.verifyPaymentChannelClaim({
                    channel: e,
                    amount: t,
                    signature: n,
                    publicKey: r
                });
                const u = o.default.encodeForSigningClaim({
                    channel: e,
                    amount: a.xrpToDrops(t)
                });
                return i.default.verify(u, n, r)
            }
        },
        9184: function(e, t, n) {
            "use strict";
            var r = n(9185),
                i = {
                    bitcoin: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
                    ripple: "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz",
                    tipple: "RPShNAF39wBUDnEGHJKLM4pQrsT7VWXYZ2bcdeCg65jkm8ofqi1tuvaxyz",
                    stellar: "gsphnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCr65jkm8oFqi1tuvAxyz"
                };
            e.exports = function(e) {
                var t = e.alphabets,
                    n = void 0 === t ? i : t,
                    o = e.codecMethods,
                    a = void 0 === o ? {} : o,
                    u = e.defaultAlphabet,
                    s = void 0 === u ? Object.keys(n)[0] : u,
                    c = r(e),
                    l = function(e, t) {
                        var n = {};
                        for (var r in i) n[r] = new t(i[r]);
                        if (e !== i)
                            for (var o in e) n[o] = new t(e[o]);
                        return n
                    }(n, c);
                return function(e, t) {
                    function n(e, n) {
                        function r(r) {
                            var i = "encode" === r;
                            return t[r + e] = function(e, o) {
                                var a = n;
                                return o && i && (a = {
                                    expectedLength: n.expectedLength,
                                    version: n.versions[n.versionTypes.indexOf(o)]
                                }), t[r](e, a)
                            }
                        }
                        var i = r("decode");
                        r("encode"), t["isValid" + e] = function(e) {
                            try {
                                i(e)
                            } catch (e) {
                                return !1
                            }
                            return !0
                        }
                    }
                    for (var r in e) n(r, e[r]);
                    return t
                }(a, {
                    Codec: c,
                    codecs: l,
                    decode: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            n = t.alphabet,
                            r = void 0 === n ? s : n;
                        return l[r].decode(e, t)
                    },
                    encode: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            n = t.alphabet,
                            r = void 0 === n ? s : n;
                        return l[r].encode(e, t)
                    }
                })
            }
        },
        9185: function(e, t, n) {
            "use strict";
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
            var i = n(9186),
                o = n(9187),
                a = o.seqEqual,
                u = o.concatArgs,
                s = o.isSet;
            e.exports = function(e) {
                var t = e.sha256;
                return function() {
                    function e(t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.alphabet = t, this.codec = i(t), this.base = t.length
                    }
                    return r(e, [{
                        key: "encode",
                        value: function(e) {
                            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                n = t.version;
                            return s(n) ? this.encodeVersioned(e, n, t.expectedLength) : t.checked ? this.encodeChecked(e) : this.encodeRaw(e)
                        }
                    }, {
                        key: "decode",
                        value: function(e) {
                            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                n = t.version,
                                r = t.versions;
                            return s(r) ? this.decodeMultiVersioned(e, r, t.expectedLength, t.versionTypes) : s(n) ? this.decodeVersioned(e, n, t.expectedLength) : t.checked ? this.decodeChecked(e) : this.decodeRaw(e)
                        }
                    }, {
                        key: "encodeRaw",
                        value: function(e) {
                            return this.codec.encode(e)
                        }
                    }, {
                        key: "decodeRaw",
                        value: function(e) {
                            return this.codec.decode(e)
                        }
                    }, {
                        key: "encodeChecked",
                        value: function(e) {
                            var n = t(t(e)).slice(0, 4);
                            return this.encodeRaw(u(e, n))
                        }
                    }, {
                        key: "decodeChecked",
                        value: function(e) {
                            var t = this.decodeRaw(e);
                            if (t.length < 5) throw new Error("invalid_input_size");
                            if (!this.verifyCheckSum(t)) throw new Error("checksum_invalid");
                            return t.slice(0, -4)
                        }
                    }, {
                        key: "encodeVersioned",
                        value: function(e, t, n) {
                            if (n && e.length !== n) throw new Error("unexpected_payload_length");
                            return this.encodeChecked(u(t, e))
                        }
                    }, {
                        key: "decodeVersioned",
                        value: function(e, t, n) {
                            return this.decodeMultiVersioned(e, [t], n).bytes
                        }
                    }, {
                        key: "decodeMultiVersioned",
                        value: function(e, t, n, r) {
                            var i = this.decodeChecked(e),
                                o = {
                                    version: null,
                                    bytes: null
                                };
                            if (t.length > 1 && !n) throw new Error("must pass expectedLengthgth > 1 possibleVersions");
                            var u = t[0].length || 1,
                                s = n || i.length - u,
                                c = i.slice(0, -s),
                                l = i.slice(-s);
                            if (!t.some((function(e, t) {
                                    var n = Array.isArray(e) ? e : [e];
                                    if (a(c, n)) return o.version = e, o.bytes = l, r && (o.type = r[t]), !0
                                }))) throw new Error("version_invalid");
                            if (n && o.bytes.length !== n) throw new Error("unexpected_payload_length");
                            return o
                        }
                    }, {
                        key: "verifyCheckSum",
                        value: function(e) {
                            var n = t(t(e.slice(0, -4))).slice(0, 4),
                                r = e.slice(-4);
                            return a(n, r)
                        }
                    }, {
                        key: "findPrefix",
                        value: function(e, t) {
                            if (58 !== this.base) throw new Error("Only works for base58");
                            var n = t + 4,
                                r = Math.log(Math.pow(256, n)) / Math.log(this.base),
                                i = Math.ceil(r + .2),
                                o = this.alphabet[Math.floor(this.alphabet.length / 2) - 1],
                                a = e + new Array(i + 1).join(o);
                            return this.decodeRaw(a).slice(0, -n)
                        }
                    }]), e
                }()
            }
        },
        9186: function(e, t) {
            e.exports = function(e) {
                for (var t = {}, n = e.length, r = e.charAt(0), i = 0; i < e.length; i++) t[e.charAt(i)] = i;

                function o(e) {
                    if (0 === e.length) return [];
                    for (var i = [0], o = 0; o < e.length; o++) {
                        var a = t[e[o]];
                        if (void 0 === a) return;
                        for (var u = 0, s = a; u < i.length; ++u) s += i[u] * n, i[u] = 255 & s, s >>= 8;
                        for (; s > 0;) i.push(255 & s), s >>= 8
                    }
                    for (var c = 0; e[c] === r && c < e.length - 1; ++c) i.push(0);
                    return i.reverse()
                }
                return {
                    encode: function(t) {
                        if (0 === t.length) return "";
                        for (var r = [0], i = 0; i < t.length; ++i) {
                            for (var o = 0, a = t[i]; o < r.length; ++o) a += r[o] << 8, r[o] = a % n, a = a / n | 0;
                            for (; a > 0;) r.push(a % n), a = a / n | 0
                        }
                        for (var u = "", s = 0; 0 === t[s] && s < t.length - 1; ++s) u += e[0];
                        for (var c = r.length - 1; c >= 0; --c) u += e[r[c]];
                        return u
                    },
                    decodeUnsafe: o,
                    decode: function(e) {
                        var t = o(e);
                        if (t) return t;
                        throw new Error("Non-base" + n + " character")
                    }
                }
            }
        },
        9187: function(e, t, n) {
            "use strict";

            function r(e) {
                return void 0 !== e.length
            }
            e.exports = {
                seqEqual: function(e, t) {
                    if (e.length !== t.length) return !1;
                    for (var n = 0; n < e.length; n++)
                        if (e[n] !== t[n]) return !1;
                    return !0
                },
                concatArgs: function() {
                    for (var e = [], t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return n.forEach((function(t) {
                        if (r(t))
                            for (var n = 0; n < t.length; n++) e.push(t[n]);
                        else e.push(t)
                    })), e
                },
                isSet: function(e) {
                    return null != e
                }
            }
        },
        9193: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || t.hasOwnProperty(n) || r(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(n(7228), t), i(n(9394), t), i(n(9395), t), i(n(7244), t);
            var o = n(9396);
            Object.defineProperty(t, "RippleAPIBroadcast", {
                enumerable: !0,
                get: function() {
                    return o.RippleAPIBroadcast
                }
            })
        },
        9320: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, u)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatLedgerClose = t.getLedgerVersion = t.isConnected = t.disconnect = t.connect = void 0;
            const u = o(n(5473));
            t.isConnected = function() {
                return this.connection.isConnected()
            }, t.getLedgerVersion = function() {
                return this.connection.getLedgerVersion()
            }, t.connect = function() {
                return a(this, void 0, void 0, (function*() {
                    return this.connection.connect()
                }))
            }, t.disconnect = function() {
                return a(this, void 0, void 0, (function*() {
                    yield this.connection.disconnect()
                }))
            }, t.formatLedgerClose = function(e) {
                return {
                    baseFeeXRP: u.dropsToXrp(e.fee_base),
                    ledgerHash: e.ledger_hash,
                    ledgerVersion: e.ledger_index,
                    ledgerTimestamp: u.rippleTimeToISO8601(e.ledger_time),
                    reserveBaseXRP: u.dropsToXrp(e.reserve_base),
                    reserveIncrementXRP: u.dropsToXrp(e.reserve_inc),
                    transactionCount: e.txn_count,
                    validatedLedgerVersions: e.validated_ledgers
                }
            }
        },
        9325: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(53)),
                s = o(n(72)),
                c = n(5473).constants.AccountFlags,
                l = a(n(7234));

            function f(e) {
                const t = {};
                if ("AccountSet" !== e.TransactionType) return t;
                const n = function(e) {
                        const t = e.meta.AffectedNodes.filter(e => "AccountRoot" === e.ModifiedNode.LedgerEntryType);
                        return s.ok(1 === t.length), t[0].ModifiedNode
                    }(e),
                    r = u.get(n.PreviousFields, "Flags"),
                    i = u.get(n.FinalFields, "Flags");
                if (null != r && null != i) {
                    const e = r ^ i,
                        n = i & e,
                        o = r & e;
                    Object.entries(c).forEach(e => {
                        const [r, i] = e;
                        n & i ? t[r] = !0 : o & i && (t[r] = !1)
                    })
                }
                const o = u.get(n.PreviousFields, "AccountTxnID"),
                    a = u.get(n.FinalFields, "AccountTxnID");
                return a && !o ? t.enableTransactionIDTracking = !0 : o && !a && (t.enableTransactionIDTracking = !1), t
            }
            t.default = function(e) {
                const t = e.TransactionType;
                return s.ok("AccountSet" === t || "SetRegularKey" === t || "SignerListSet" === t), Object.assign({}, f(e), l.default(e))
            }
        },
        9326: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(72)),
                u = n(5473),
                s = n(5624),
                c = n(5514);
            t.default = function(e) {
                return a.ok("AccountDelete" === e.TransactionType), u.removeUndefined({
                    memos: c.parseMemos(e),
                    destination: e.Destination,
                    destinationTag: e.DestinationTag,
                    destinationXAddress: s.classicAddressToXAddress(e.Destination, null != e.DestinationTag && e.DestinationTag, !1)
                })
            }
        },
        9327: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(72)),
                u = n(5473),
                s = n(5514);
            t.default = function(e) {
                return a.ok("CheckCancel" === e.TransactionType), u.removeUndefined({
                    memos: s.parseMemos(e),
                    checkID: e.CheckID
                })
            }
        },
        9328: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(72)),
                s = n(5473),
                c = a(n(5648)),
                l = n(5514);
            t.default = function(e) {
                return u.ok("CheckCash" === e.TransactionType), s.removeUndefined({
                    memos: l.parseMemos(e),
                    checkID: e.CheckID,
                    amount: e.Amount && c.default(e.Amount),
                    deliverMin: e.DeliverMin && c.default(e.DeliverMin)
                })
            }
        },
        9329: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(72)),
                s = n(5514),
                c = n(5473),
                l = a(n(5648)),
                f = n(5514);
            t.default = function(e) {
                return u.ok("CheckCreate" === e.TransactionType), c.removeUndefined({
                    memos: f.parseMemos(e),
                    destination: e.Destination,
                    sendMax: l.default(e.SendMax),
                    destinationTag: e.DestinationTag,
                    expiration: e.Expiration && s.parseTimestamp(e.Expiration),
                    invoiceID: e.InvoiceID
                })
            }
        },
        9330: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(72)),
                u = n(5473),
                s = n(5514);
            t.default = function(e) {
                return a.ok("DepositPreauth" === e.TransactionType), u.removeUndefined({
                    memos: s.parseMemos(e),
                    authorize: e.Authorize,
                    unauthorize: e.Unauthorize
                })
            }
        },
        9331: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(72)),
                u = n(5514),
                s = n(5473);
            t.default = function(e) {
                return a.ok("EscrowCancel" === e.TransactionType), s.removeUndefined({
                    memos: u.parseMemos(e),
                    owner: e.Owner,
                    escrowSequence: e.OfferSequence
                })
            }
        },
        9332: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(72)),
                s = a(n(5648)),
                c = n(5514),
                l = n(5473);
            t.default = function(e) {
                return u.ok("EscrowCreate" === e.TransactionType), l.removeUndefined({
                    amount: s.default(e.Amount).value,
                    destination: e.Destination,
                    memos: c.parseMemos(e),
                    condition: e.Condition,
                    allowCancelAfter: c.parseTimestamp(e.CancelAfter),
                    allowExecuteAfter: c.parseTimestamp(e.FinishAfter),
                    sourceTag: e.SourceTag,
                    destinationTag: e.DestinationTag
                })
            }
        },
        9333: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(72)),
                u = n(5514),
                s = n(5473);
            t.default = function(e) {
                return a.ok("EscrowFinish" === e.TransactionType), s.removeUndefined({
                    memos: u.parseMemos(e),
                    owner: e.Owner,
                    escrowSequence: e.OfferSequence,
                    condition: e.Condition,
                    fulfillment: e.Fulfillment
                })
            }
        },
        9334: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(72)),
                u = n(5514);
            t.default = function(e) {
                return a.ok("OfferCancel" === e.TransactionType), {
                    memos: u.parseMemos(e),
                    orderSequence: e.OfferSequence
                }
            }
        },
        9335: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(72)),
                s = n(5514),
                c = n(5514),
                l = a(n(5648)),
                f = n(5473),
                d = f.txFlags.OfferCreate;
            t.default = function(e) {
                u.ok("OfferCreate" === e.TransactionType);
                const t = 0 == (e.Flags & d.Sell) ? "buy" : "sell",
                    n = l.default(e.TakerGets),
                    r = l.default(e.TakerPays),
                    i = "buy" === t ? r : n,
                    o = "buy" === t ? n : r;
                return f.removeUndefined({
                    memos: c.parseMemos(e),
                    direction: t,
                    quantity: i,
                    totalPrice: o,
                    passive: 0 != (e.Flags & d.Passive) || void 0,
                    immediateOrCancel: 0 != (e.Flags & d.ImmediateOrCancel) || void 0,
                    fillOrKill: 0 != (e.Flags & d.FillOrKill) || void 0,
                    expirationTime: s.parseTimestamp(e.Expiration)
                })
            }
        },
        9336: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(53)),
                s = o(n(72)),
                c = o(n(5514)),
                l = n(5473),
                f = a(n(5648));

            function d(e) {
                return 0 != (e.Flags & l.txFlags.Payment.NoRippleDirect)
            }

            function h(e) {
                return 0 != (e.Flags & l.txFlags.Payment.LimitQuality)
            }
            t.default = function(e) {
                s.ok("Payment" === e.TransactionType);
                const t = {
                    address: e.Account,
                    maxAmount: (n = f.default(e.SendMax || e.Amount), r = e.Account, n.counterparty === r ? u.omit(n, "counterparty") : n),
                    tag: e.SourceTag
                };
                var n, r;
                const i = {
                    address: e.Destination,
                    tag: e.DestinationTag
                };
                return l.removeUndefined({
                    source: l.removeUndefined(t),
                    destination: l.removeUndefined(i),
                    memos: c.parseMemos(e),
                    invoiceID: e.InvoiceID,
                    paths: e.Paths ? JSON.stringify(e.Paths) : void 0,
                    allowPartialPayment: c.isPartialPayment(e) || void 0,
                    noDirectRipple: d(e) || void 0,
                    limitQuality: h(e) || void 0
                })
            }
        },
        9337: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(72)),
                s = n(5473),
                c = a(n(5648)),
                l = n(5514),
                f = s.txFlags.PaymentChannelClaim;
            t.default = function(e) {
                return u.ok("PaymentChannelClaim" === e.TransactionType), s.removeUndefined({
                    memos: l.parseMemos(e),
                    channel: e.Channel,
                    balance: e.Balance && c.default(e.Balance).value,
                    amount: e.Amount && c.default(e.Amount).value,
                    signature: e.Signature,
                    publicKey: e.PublicKey,
                    renew: Boolean(e.Flags & f.Renew) || void 0,
                    close: Boolean(e.Flags & f.Close) || void 0
                })
            }
        },
        9338: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(72)),
                s = n(5514),
                c = n(5473),
                l = a(n(5648));
            t.default = function(e) {
                return u.ok("PaymentChannelCreate" === e.TransactionType), c.removeUndefined({
                    memos: s.parseMemos(e),
                    amount: l.default(e.Amount).value,
                    destination: e.Destination,
                    settleDelay: e.SettleDelay,
                    publicKey: e.PublicKey,
                    cancelAfter: e.CancelAfter && s.parseTimestamp(e.CancelAfter),
                    sourceTag: e.SourceTag,
                    destinationTag: e.DestinationTag
                })
            }
        },
        9339: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(72)),
                s = n(5514),
                c = n(5473),
                l = a(n(5648));
            t.default = function(e) {
                return u.ok("PaymentChannelFund" === e.TransactionType), c.removeUndefined({
                    memos: s.parseMemos(e),
                    channel: e.Channel,
                    amount: l.default(e.Amount).value,
                    expiration: e.Expiration && s.parseTimestamp(e.Expiration)
                })
            }
        },
        9340: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(72)),
                u = n(5473),
                s = n(5514);
            t.default = function(e) {
                return a.ok("TicketCreate" === e.TransactionType), u.removeUndefined({
                    memos: s.parseMemos(e),
                    ticketCount: e.TicketCount
                })
            }
        },
        9341: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(72)),
                u = n(5514),
                s = n(5473),
                c = s.txFlags.TrustSet;

            function l(e, t, n) {
                return !!(e & t) || !(e & n) && void 0
            }
            t.default = function(e) {
                return a.ok("TrustSet" === e.TransactionType), s.removeUndefined({
                    limit: e.LimitAmount.value,
                    currency: e.LimitAmount.currency,
                    counterparty: e.LimitAmount.issuer,
                    memos: u.parseMemos(e),
                    qualityIn: u.parseQuality(e.QualityIn),
                    qualityOut: u.parseQuality(e.QualityOut),
                    ripplingDisabled: l(e.Flags, c.SetNoRipple, c.ClearNoRipple),
                    frozen: l(e.Flags, c.SetFreeze, c.ClearFreeze),
                    authorized: l(e.Flags, c.SetAuth, 0)
                })
            }
        },
        9342: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return {
                    amendment: e.Amendment
                }
            }
        },
        9343: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(n(5614)),
                o = n(5473),
                a = n(5514);
            t.default = function(e) {
                const t = new i.default(e.BaseFee, 16).toString();
                return {
                    memos: a.parseMemos(e),
                    baseFeeXRP: o.dropsToXrp(t),
                    referenceFeeUnits: e.ReferenceFeeUnits,
                    reserveBaseXRP: o.dropsToXrp(e.ReserveBase),
                    reserveIncrementXRP: o.dropsToXrp(e.ReserveIncrement)
                }
            }
        },
        9344: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(53)),
                s = a(n(5925)),
                c = n(5928),
                l = o(n(5783)),
                f = a(n(6517)),
                d = a(n(7232)),
                h = n(5473);

            function p(e, t) {
                const n = e.tx_blob ? function(e) {
                    const t = s.default.decode(e.tx_blob);
                    return t.hash = c.computeTransactionHash(t), t.ledger_index = e.ledger_index, {
                        tx: t,
                        meta: s.default.decode(e.meta),
                        validated: e.validated
                    }
                }(e) : e;
                return f.default(Object.assign({}, n.tx, {
                    meta: n.meta,
                    validated: n.validated
                }), t)
            }

            function m(e, t, n) {
                return (!t.excludeFailures || "tesSUCCESS" === n.outcome.result) && (!(t.types && !t.types.includes(n.type)) && ((!0 !== t.initiated || n.address === e) && ((!1 !== t.initiated || n.address !== e) && !(t.counterparty && ! function(e, t) {
                    if (t.address === e.counterparty) return !0;
                    const n = t.specification;
                    return !(!n || !(n.destination && n.destination.address === e.counterparty || n.counterparty === e.counterparty))
                }(t, n)))))
            }

            function g(e, t) {
                return !e.startTx || (e.earliestFirst ? l.compareTransactions(t, e.startTx) > 0 : l.compareTransactions(t, e.startTx) < 0)
            }

            function _(e, t, n, r, i) {
                const o = {
                    command: "account_tx",
                    account: t,
                    ledger_index_min: n.minLedgerVersion || -1,
                    ledger_index_max: n.maxLedgerVersion || -1,
                    forward: n.earliestFirst,
                    binary: n.binary,
                    limit: l.clamp(i, 10, 400),
                    marker: r
                };
                return e.request(o).then(e => function(e, t, n) {
                    return {
                        marker: n.marker,
                        results: n.transactions.filter(e => e.validated).map(e => p(e, t.includeRawTransactions)).filter(u.partial(m, e, t)).filter(u.partial(g, t))
                    }
                }(t, n, e))
            }

            function v(e, t, n) {
                const r = t.earliestFirst ? n.sort(l.compareTransactions) : n.sort(l.compareTransactions).reverse();
                return function(e, t, n) {
                    let {
                        minLedgerVersion: r,
                        maxLedgerVersion: i
                    } = t;
                    return t.limit && n.length === t.limit && (t.earliestFirst ? i = n[n.length - 1].outcome.ledgerVersion : r = n[n.length - 1].outcome.ledgerVersion), l.hasCompleteLedgerRange(e, r, i).then(e => {
                        if (!e) throw new h.errors.MissingLedgerHistoryError
                    })
                }(e, t, r).then(() => r)
            }

            function y(e, t, n) {
                const r = u.partial(_, e, t, n),
                    i = u.partial(v, e, n);
                return l.getRecursive(r, n.limit).then(i)
            }
            t.default = function(e, t = {}) {
                h.validate.getTransactions({
                    address: e,
                    options: t
                }), e = h.ensureClassicAddress(e);
                const n = {
                    maxLedgerVersion: -1
                };
                if (t.start) return d.default.call(this, t.start).then(r => {
                    const i = r.outcome.ledgerVersion,
                        o = t.earliestFirst ? {
                            minLedgerVersion: i
                        } : {
                            maxLedgerVersion: i
                        },
                        a = Object.assign({}, n, t, {
                            startTx: r
                        }, o);
                    return y(this.connection, e, a)
                });
                const r = Object.assign({}, n, t);
                return y(this.connection, e, r)
            }
        },
        9357: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, u)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                },
                u = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = o(n(53)),
                c = n(5473),
                l = u(n(9358));
            t.default = function(e, t = {}) {
                var n;
                return a(this, void 0, void 0, (function*() {
                    c.validate.getTrustlines({
                        address: e,
                        options: t
                    }), e = c.ensureClassicAddress(e);
                    const r = yield this._requestAll("account_lines", {
                        account: e,
                        ledger_index: null !== (n = t.ledgerVersion) && void 0 !== n ? n : yield this.getLedgerVersion(),
                        limit: t.limit,
                        peer: t.counterparty
                    });
                    return s.flatMap(r, e => e.lines).map(l.default).filter(e => function(e, t) {
                        return null === e || t.specification.currency === e
                    }(t.currency || null, e))
                }))
            }
        },
        9358: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(5514),
                i = n(5473);
            t.default = function(e) {
                return {
                    specification: i.removeUndefined({
                        limit: e.limit,
                        currency: e.currency,
                        counterparty: e.account,
                        qualityIn: r.parseQuality(e.quality_in) || void 0,
                        qualityOut: r.parseQuality(e.quality_out) || void 0,
                        ripplingDisabled: e.no_ripple,
                        frozen: e.freeze,
                        authorized: e.authorized
                    }),
                    counterparty: i.removeUndefined({
                        limit: e.limit_peer,
                        ripplingDisabled: e.no_ripple_peer,
                        frozen: e.freeze_peer,
                        authorized: e.peer_authorized
                    }),
                    state: {
                        balance: e.balance
                    }
                }
            }
        },
        9359: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5783)),
                u = n(5473);

            function s(e) {
                return {
                    currency: e.specification.currency,
                    counterparty: e.specification.counterparty,
                    value: e.state.balance
                }
            }
            t.default = function(e, t = {}) {
                return u.validate.getTrustlines({
                    address: e,
                    options: t
                }), e = u.ensureClassicAddress(e), Promise.all([(n = this.connection, r = t.ledgerVersion, null != r && null !== r ? Promise.resolve(r) : n.getLedgerVersion()).then(t => a.getXRPBalance(this.connection, e, t)), this.getTrustlines(e, t)]).then(e => function(e, t) {
                    const n = t.trustlines.map(s);
                    if (!(e.counterparty || e.currency && "XRP" !== e.currency)) {
                        const e = {
                            currency: "XRP",
                            value: t.xrp
                        };
                        n.unshift(e)
                    }
                    if (e.limit && n.length > e.limit) {
                        const t = n.length - e.limit;
                        n.splice(-t, t)
                    }
                    return n
                }(t, {
                    xrp: e[0],
                    trustlines: e[1]
                }));
                var n, r
            }
        },
        9360: function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, u)
                    }
                    s((r = r.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(5473),
                o = n(5783);
            t.default = function(e, t = {}) {
                return r(this, void 0, void 0, (function*() {
                    i.validate.getBalanceSheet({
                        address: e,
                        options: t
                    }), t = yield o.ensureLedgerVersion.call(this, t);
                    return function(e) {
                        const t = {};
                        return null != e.balances && (t.balances = [], Object.entries(e.balances).forEach(e => {
                            const [n, r] = e;
                            r.forEach(e => {
                                t.balances.push(Object.assign({
                                    counterparty: n
                                }, e))
                            })
                        })), null != e.assets && (t.assets = [], Object.entries(e.assets).forEach(([e, n]) => {
                            n.forEach(n => {
                                t.assets.push(Object.assign({
                                    counterparty: e
                                }, n))
                            })
                        })), null != e.obligations && (t.obligations = Object.entries(e.obligations).map(([e, t]) => ({
                            currency: e,
                            value: t
                        }))), t
                    }(yield this.request("gateway_balances", {
                        account: e,
                        strict: !0,
                        hotwallet: t.excludeAddresses,
                        ledger_index: t.ledgerVersion
                    }))
                }))
            }
        },
        9361: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(53)),
                s = a(n(5614)),
                c = n(5783),
                l = n(5473),
                f = a(n(9362)),
                d = l.errors.NotFoundError,
                h = l.errors.ValidationError;

            function p(e, t) {
                const n = Object.assign({
                        value: "XRP" === t.destination.amount.currency ? l.dropsToXrp("-1") : "-1"
                    }, t.destination.amount),
                    r = {
                        command: "ripple_path_find",
                        source_account: t.source.address,
                        destination_account: t.destination.address,
                        destination_amount: l.toRippledAmount(n)
                    };
                if ("object" != typeof r.destination_amount || r.destination_amount.issuer || (r.destination_amount.issuer = r.destination_account), t.source.currencies && t.source.currencies.length > 0 && (r.source_currencies = t.source.currencies.map(e => c.renameCounterpartyToIssuer(e))), t.source.amount) {
                    if (null != t.destination.amount.value) throw new h("Cannot specify both source.amount and destination.amount.value in getPaths");
                    r.send_max = l.toRippledAmount(t.source.amount), "string" == typeof r.send_max || r.send_max.issuer || (r.send_max.issuer = t.source.address)
                }
                return e.request(r).then(e => function(e, t) {
                    return u.defaults(Object.assign({}, t, {
                        source_account: e.source_account,
                        source_currencies: e.source_currencies
                    }), {
                        destination_amount: e.destination_amount
                    })
                }(r, e))
            }

            function m(e, t, n) {
                return "object" == typeof(r = n.destination_amount) && r.currency && "XRP" !== r.currency || !n.destination_currencies.includes("XRP") ? Promise.resolve(n) : c.getXRPBalance(e, t, void 0).then(e => function(e, t) {
                    const n = e.destination_amount;
                    return new s.default(t).isGreaterThanOrEqualTo(n) && e.alternatives.unshift({
                        paths_computed: [],
                        source_amount: e.destination_amount
                    }), e
                }(n, e));
                var r
            }
            t.default = function(e) {
                l.validate.getPaths({
                    pathfind: e
                });
                const t = e.source.address;
                return p(this.connection, e).then(e => m(this.connection, t, e)).then(t => function(e, t) {
                    return e.source.amount && null == e.destination.amount.value && t.alternatives && (t.alternatives = t.alternatives.filter(t => {
                        if (!t.source_amount) return !1;
                        const n = new s.default("XRP" === e.source.amount.currency ? l.xrpToDrops(e.source.amount.value) : e.source.amount.value);
                        return new s.default("string" == typeof t.source_amount ? t.source_amount : t.source_amount.value).eq(n)
                    })), t
                }(e, t)).then(t => function(e, t) {
                    if (t.alternatives && t.alternatives.length > 0) return f.default(t);
                    throw null == t.destination_currencies || t.destination_currencies.includes(e.destination.amount.currency) ? t.source_currencies && t.source_currencies.length > 0 ? new d("No paths found. Please ensure that the source_account has sufficient funds to execute the payment in one of the specified source_currencies. If it does there may be insufficient liquidity in the network to execute this payment right now") : new d("No paths found. Please ensure that the source_account has sufficient funds to execute the payment. If it does there may be insufficient liquidity in the network to execute this payment right now") : new d("No paths found. The destination_account does not accept " + e.destination.amount.currency + ", they only accept: " + t.destination_currencies.join(", "))
                }(e, t))
            }
        },
        9362: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(53)),
                s = a(n(5648));

            function c(e, t) {
                const n = Object.keys(t)[0],
                    r = t[n];
                return u.set({
                    address: e
                }, n, function(e, t) {
                    return t.counterparty === e ? u.omit(t, "counterparty") : t
                }(e, r))
            }
            t.default = function(e) {
                const t = e.source_account,
                    n = e.destination_account,
                    r = e.destination_amount;
                return e.alternatives.map(e => function(e, t, n, r) {
                    const i = null != r.destination_amount ? {
                        source: {
                            amount: s.default(r.source_amount)
                        },
                        destination: {
                            minAmount: s.default(r.destination_amount)
                        }
                    } : {
                        source: {
                            maxAmount: s.default(r.source_amount)
                        },
                        destination: {
                            amount: s.default(n)
                        }
                    };
                    return {
                        source: c(e, i.source),
                        destination: c(t, i.destination),
                        paths: JSON.stringify((o = r.paths_computed, o.map(e => e.map(e => u.omit(e, ["type", "type_hex"])))))
                    };
                    var o
                }(t, n, r, e))
            }
        },
        9363: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, u)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(53)),
                s = n(5473),
                c = n(9364);
            t.default = function(e, t = {}) {
                return a(this, void 0, void 0, (function*() {
                    s.validate.getOrders({
                        address: e,
                        options: t
                    });
                    const n = yield this._requestAll("account_offers", {
                        account: e,
                        ledger_index: t.ledgerVersion || (yield this.getLedgerVersion()),
                        limit: t.limit
                    });
                    return function(e, t) {
                        let n = [];
                        for (const r of t) {
                            const t = r.offers.map(t => c.parseAccountOrder(e, t));
                            n = n.concat(t)
                        }
                        return u.sortBy(n, e => e.properties.sequence)
                    }(e, n)
                }))
            }
        },
        9364: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseAccountOrder = void 0;
            const i = r(n(5614)),
                o = r(n(5648)),
                a = n(5514),
                u = n(5473),
                s = n(7243);
            t.parseAccountOrder = function(e, t) {
                const n = 0 == (t.flags & s.orderFlags.Sell) ? "buy" : "sell",
                    r = o.default(t.taker_gets),
                    c = o.default(t.taker_pays),
                    l = "buy" === n ? c : r,
                    f = "buy" === n ? r : c,
                    d = u.removeUndefined({
                        direction: n,
                        quantity: l,
                        totalPrice: f,
                        passive: 0 != (t.flags & s.orderFlags.Passive) || void 0,
                        expirationTime: a.parseTimestamp(t.expiration)
                    }),
                    h = t.quality ? a.adjustQualityForXRP(t.quality.toString(), r.currency, c.currency) : (p = r, m = c, new i.default(m.value).dividedBy(p.value).precision(16, i.default.ROUND_HALF_UP).toString());
                var p, m;
                return {
                    specification: d,
                    properties: {
                        maker: e,
                        sequence: t.seq,
                        makerExchangeRate: h
                    }
                }
            }
        },
        9365: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, u)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                },
                u = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getOrderbook = t.formatBidsAndAsks = void 0;
            const s = o(n(53)),
                c = o(n(5783)),
                l = n(9366),
                f = n(5473),
                d = u(n(5614));

            function h(e, t) {
                return t.specification.direction === e
            }

            function p(e, t) {
                const n = t.specification.quantity;
                return i = e, (r = n).currency === i.currency && r.counterparty === i.counterparty ? t : function(e) {
                    const t = e.specification,
                        n = {
                            quantity: t.totalPrice,
                            totalPrice: t.quantity,
                            direction: "buy" === t.direction ? "sell" : "buy"
                        },
                        r = s.merge({}, t, n);
                    return s.merge({}, e, {
                        specification: r
                    })
                }(t);
                var r, i
            }

            function m(e, t) {
                const n = t.sort((e, t) => new d.default(e.quality).comparedTo(t.quality)).map(l.parseOrderbookOrder).map(s.partial(p, e.base));
                return {
                    bids: n.filter(s.partial(h, "buy")),
                    asks: n.filter(s.partial(h, "sell"))
                }
            }

            function g(e, t, n, r, i) {
                return a(this, void 0, void 0, (function*() {
                    const o = c.renameCounterpartyToIssuerInOrder({
                        taker_gets: r,
                        taker_pays: i
                    });
                    return e._requestAll("book_offers", {
                        taker_gets: o.taker_gets,
                        taker_pays: o.taker_pays,
                        ledger_index: n.ledgerVersion || "validated",
                        limit: n.limit,
                        taker: t
                    })
                }))
            }
            t.formatBidsAndAsks = m, t.getOrderbook = function(e, t, n = {}) {
                return a(this, void 0, void 0, (function*() {
                    f.validate.getOrderbook({
                        address: e,
                        orderbook: t,
                        options: n
                    });
                    const [r, i] = yield Promise.all([g(this, e, n, t.base, t.counter), g(this, e, n, t.counter, t.base)]), o = s.flatMap(r, e => e.offers), a = s.flatMap(i, e => e.offers);
                    return m(t, [...o, ...a])
                }))
            }
        },
        9366: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseOrderbookOrder = void 0;
            const u = o(n(53)),
                s = n(5514),
                c = n(5473),
                l = n(7243),
                f = a(n(5648));
            t.parseOrderbookOrder = function(e) {
                const t = 0 == (e.Flags & l.orderFlags.Sell) ? "buy" : "sell",
                    n = f.default(e.TakerGets),
                    r = f.default(e.TakerPays),
                    i = "buy" === t ? r : n,
                    o = "buy" === t ? n : r,
                    a = c.removeUndefined({
                        direction: t,
                        quantity: i,
                        totalPrice: o,
                        passive: 0 != (e.Flags & l.orderFlags.Passive) || void 0,
                        expirationTime: s.parseTimestamp(e.Expiration)
                    }),
                    d = {
                        maker: e.Account,
                        sequence: e.Sequence,
                        makerExchangeRate: s.adjustQualityForXRP(e.quality, n.currency, r.currency)
                    },
                    h = e.taker_gets_funded ? f.default(e.taker_gets_funded) : void 0,
                    p = e.taker_pays_funded ? f.default(e.taker_pays_funded) : void 0,
                    m = c.removeUndefined({
                        fundedAmount: h,
                        priceOfFundedAmount: p
                    }),
                    g = u.isEmpty(m) ? void 0 : m;
                return c.removeUndefined({
                    specification: a,
                    properties: d,
                    state: g,
                    data: e
                })
            }
        },
        9367: function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, u)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                },
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getSettings = t.parseAccountFlags = void 0;
            const o = i(n(7234)),
                a = n(5473),
                u = a.constants.AccountFlags;

            function s(e, t = {}) {
                const n = {};
                for (const r in u) e & u[r] ? n[r] = !0 : t.excludeFalse || (n[r] = !1);
                return n
            }
            t.parseAccountFlags = s, t.getSettings = function(e, t = {}) {
                return r(this, void 0, void 0, (function*() {
                    a.validate.getSettings({
                        address: e,
                        options: t
                    }), e = a.ensureClassicAddress(e);
                    return function(e) {
                        const t = e.account_data,
                            n = s(t.Flags, {
                                excludeFalse: !0
                            }),
                            r = o.default(t);
                        return Object.assign({}, n, r)
                    }(yield this.request("account_info", {
                        account: e,
                        ledger_index: t.ledgerVersion || "validated",
                        signer_lists: !0
                    }))
                }))
            }
        },
        9368: function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, u)
                    }
                    s((r = r.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(5473);
            t.default = function(e, t = {}) {
                return r(this, void 0, void 0, (function*() {
                    i.validate.getAccountInfo({
                        address: e,
                        options: t
                    }), e = i.ensureClassicAddress(e);
                    return function(e) {
                        const t = e.account_data;
                        return i.removeUndefined({
                            sequence: t.Sequence,
                            xrpBalance: i.dropsToXrp(t.Balance),
                            ownerCount: t.OwnerCount,
                            previousInitiatedTransactionID: t.AccountTxnID,
                            previousAffectingTransactionID: t.PreviousTxnID,
                            previousAffectingTransactionLedgerVersion: t.PreviousTxnLgrSeq
                        })
                    }(yield this.request("account_info", {
                        account: e,
                        ledger_index: t.ledgerVersion || "validated"
                    }))
                }))
            }
        },
        9369: function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, u)
                    }
                    s((r = r.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(5473);
            t.default = function(e, t = {}) {
                return r(this, void 0, void 0, (function*() {
                    return yield this.request("account_objects", i.removeUndefined({
                        account: e,
                        type: t.type,
                        ledger_hash: t.ledgerHash,
                        ledger_index: t.ledgerIndex,
                        limit: t.limit,
                        marker: t.marker
                    }))
                }))
            }
        },
        9370: function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, u)
                    }
                    s((r = r.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(9371),
                o = n(5473),
                a = o.errors.NotFoundError;
            t.default = function(e) {
                return r(this, void 0, void 0, (function*() {
                    o.validate.getPaymentChannel({
                        id: e
                    });
                    return function(e) {
                        if (null == e.node || "PayChannel" !== e.node.LedgerEntryType) throw new a("Payment channel ledger entry not found");
                        return i.parsePaymentChannel(e.node)
                    }(yield this.request("ledger_entry", {
                        index: e,
                        binary: !1,
                        ledger_index: "validated"
                    }))
                }))
            }
        },
        9371: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parsePaymentChannel = void 0;
            const r = n(5514),
                i = n(5473);
            t.parsePaymentChannel = function(e) {
                return i.removeUndefined({
                    memos: r.parseMemos(e),
                    account: e.Account,
                    amount: i.dropsToXrp(e.Amount),
                    balance: i.dropsToXrp(e.Balance),
                    destination: e.Destination,
                    publicKey: e.PublicKey,
                    settleDelay: e.SettleDelay,
                    expiration: r.parseTimestamp(e.Expiration),
                    cancelAfter: r.parseTimestamp(e.CancelAfter),
                    sourceTag: e.SourceTag,
                    destinationTag: e.DestinationTag,
                    previousAffectingTransactionID: e.PreviousTxnID,
                    previousAffectingTransactionLedgerVersion: e.PreviousTxnLgrSeq
                })
            }
        },
        9372: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(53)),
                u = o(n(5571)),
                s = u.common.validate,
                c = u.common.txFlags.Payment,
                l = u.common.errors.ValidationError,
                f = n(5473),
                d = n(5571);

            function h(e) {
                return null != e.maxAmount
            }

            function p(e) {
                return null != e.minAmount
            }

            function m(e) {
                const {
                    source: t,
                    destination: n
                } = e, r = h(t) ? t.maxAmount.currency : t.amount.currency, i = p(n) ? n.minAmount.currency : n.amount.currency;
                return !("XRP" !== r && "drops" !== r || "XRP" !== i && "drops" !== i)
            }

            function g(e, t) {
                const n = d.getClassicAccountAndTag(e, t);
                return n.tag = !1 === n.tag ? void 0 : n.tag, n
            }

            function _(e, t) {
                const n = a.cloneDeep(t);
                ! function(e) {
                    [e.source, e.destination].forEach(e => {
                        ["amount", "minAmount", "maxAmount"].forEach(t => {
                            var n;
                            (n = e[t]) && "XRP" !== n.currency && "drops" !== n.currency && null == n.counterparty && (e[t].counterparty = e.address)
                        })
                    })
                }(n);
                const r = g(n.source.address, n.source.tag),
                    i = g(e, void 0);
                if (i.classicAccount !== r.classicAccount) throw new l("address must match payment.source.address");
                if (null != i.tag && null != r.tag && i.tag !== r.tag) throw new l("address includes a tag that does not match payment.source.tag");
                const o = g(n.destination.address, n.destination.tag);
                if (h(n.source) && p(n.destination) || !h(n.source) && !p(n.destination)) throw new l("payment must specify either (source.maxAmount and destination.amount) or (source.amount and destination.minAmount)");
                const s = p(n.destination) ? n.destination.minAmount : n.destination.amount,
                    d = h(n.source) ? n.source.maxAmount : n.source.amount,
                    _ = p(n.destination) && !m(n) ? function(e) {
                        let t;
                        return t = "XRP" === e.currency ? "100000000000" : "drops" === e.currency ? f.xrpToDrops("100000000000") : "999999999999999900000000000000000000000000000000000000000000000000000000000000000000000000000000", Object.assign({}, e, {
                            value: t
                        })
                    }(s) : s,
                    v = {
                        TransactionType: "Payment",
                        Account: r.classicAccount,
                        Destination: o.classicAccount,
                        Amount: f.toRippledAmount(_),
                        Flags: 0
                    };
                if (null != n.invoiceID && (v.InvoiceID = n.invoiceID), null != r.tag && (v.SourceTag = r.tag), null != o.tag && (v.DestinationTag = o.tag), null != n.memos && (v.Memos = n.memos.map(u.convertMemo)), !0 === n.noDirectRipple && (v.Flags |= c.NoRippleDirect), !0 === n.limitQuality && (v.Flags |= c.LimitQuality), m(n)) {
                    if (!0 === n.allowPartialPayment) throw new l("XRP to XRP payments cannot be partial payments")
                } else(n.allowPartialPayment || p(n.destination)) && (v.Flags |= c.PartialPayment), v.SendMax = f.toRippledAmount(d), p(n.destination) && (v.DeliverMin = f.toRippledAmount(s)), null != n.paths && (v.Paths = JSON.parse(n.paths));
                return v
            }
            t.default = function(e, t, n = {}) {
                try {
                    s.preparePayment({
                        address: e,
                        payment: t,
                        instructions: n
                    });
                    const r = _(e, t);
                    return u.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9373: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = a(n(5614)),
                s = o(n(5571)),
                c = s.common.validate,
                l = s.common.txFlags.TrustSet;

            function f(e) {
                return new u.default(e).shiftedBy(9).integerValue(u.default.ROUND_DOWN).toNumber()
            }
            t.default = function(e, t, n = {}) {
                try {
                    c.prepareTrustline({
                        address: e,
                        trustline: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        const n = {
                            TransactionType: "TrustSet",
                            Account: e,
                            LimitAmount: {
                                currency: t.currency,
                                issuer: t.counterparty,
                                value: t.limit
                            },
                            Flags: 0
                        };
                        return null != t.qualityIn && (n.QualityIn = f(t.qualityIn)), null != t.qualityOut && (n.QualityOut = f(t.qualityOut)), !0 === t.authorized && (n.Flags |= l.SetAuth), null != t.ripplingDisabled && (n.Flags |= t.ripplingDisabled ? l.NoRipple : l.ClearNoRipple), null != t.frozen && (n.Flags |= t.frozen ? l.SetFreeze : l.ClearFreeze), null != t.memos && (n.Memos = t.memos.map(s.convertMemo)), n
                    }(e, t);
                    return s.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9374: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5571)),
                u = a.common.txFlags.OfferCreate,
                s = n(5473);
            t.default = function(e, t, n = {}) {
                try {
                    s.validate.prepareOrder({
                        address: e,
                        order: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        const n = s.toRippledAmount("buy" === t.direction ? t.quantity : t.totalPrice),
                            r = {
                                TransactionType: "OfferCreate",
                                Account: e,
                                TakerGets: s.toRippledAmount("buy" === t.direction ? t.totalPrice : t.quantity),
                                TakerPays: n,
                                Flags: 0
                            };
                        return "sell" === t.direction && (r.Flags |= u.Sell), !0 === t.passive && (r.Flags |= u.Passive), !0 === t.immediateOrCancel && (r.Flags |= u.ImmediateOrCancel), !0 === t.fillOrKill && (r.Flags |= u.FillOrKill), null != t.expirationTime && (r.Expiration = s.iso8601ToRippleTime(t.expirationTime)), null != t.orderToReplace && (r.OfferSequence = t.orderToReplace), null != t.memos && (r.Memos = t.memos.map(a.convertMemo)), r
                    }(e, t);
                    return a.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9375: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5571)),
                u = a.common.validate;
            t.default = function(e, t, n = {}) {
                try {
                    u.prepareOrderCancellation({
                        address: e,
                        orderCancellation: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        const n = {
                            TransactionType: "OfferCancel",
                            Account: e,
                            OfferSequence: t.orderSequence
                        };
                        return null != t.memos && (n.Memos = t.memos.map(a.convertMemo)), n
                    }(e, t);
                    return a.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9376: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5571)),
                u = n(5473),
                s = a.common.errors.ValidationError;
            t.default = function(e, t, n = {}) {
                try {
                    u.validate.prepareEscrowCreation({
                        address: e,
                        escrowCreation: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        const n = {
                            TransactionType: "EscrowCreate",
                            Account: e,
                            Destination: t.destination,
                            Amount: u.xrpToDrops(t.amount)
                        };
                        if (null != t.condition && (n.Condition = t.condition), null != t.allowCancelAfter && (n.CancelAfter = u.iso8601ToRippleTime(t.allowCancelAfter)), null != t.allowExecuteAfter && (n.FinishAfter = u.iso8601ToRippleTime(t.allowExecuteAfter)), null != t.sourceTag && (n.SourceTag = t.sourceTag), null != t.destinationTag && (n.DestinationTag = t.destinationTag), null != t.memos && (n.Memos = t.memos.map(a.convertMemo)), Boolean(t.allowCancelAfter) && Boolean(t.allowExecuteAfter) && n.CancelAfter <= n.FinishAfter) throw new s('prepareEscrowCreation: "allowCancelAfter" must be after "allowExecuteAfter"');
                        return n
                    }(e, t);
                    return a.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9377: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5571)),
                u = a.common.validate,
                s = a.common.errors.ValidationError;
            t.default = function(e, t, n = {}) {
                try {
                    u.prepareEscrowExecution({
                        address: e,
                        escrowExecution: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        const n = {
                            TransactionType: "EscrowFinish",
                            Account: e,
                            Owner: t.owner,
                            OfferSequence: t.escrowSequence
                        };
                        if (Boolean(t.condition) !== Boolean(t.fulfillment)) throw new s('"condition" and "fulfillment" fields on EscrowFinish must only be specified together.');
                        return null != t.condition && (n.Condition = t.condition), null != t.fulfillment && (n.Fulfillment = t.fulfillment), null != t.memos && (n.Memos = t.memos.map(a.convertMemo)), n
                    }(e, t);
                    return a.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9378: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5571)),
                u = a.common.validate;
            t.default = function(e, t, n = {}) {
                u.prepareEscrowCancellation({
                    address: e,
                    escrowCancellation: t,
                    instructions: n
                });
                const r = function(e, t) {
                    const n = {
                        TransactionType: "EscrowCancel",
                        Account: e,
                        Owner: t.owner,
                        OfferSequence: t.escrowSequence
                    };
                    return null != t.memos && (n.Memos = t.memos.map(a.convertMemo)), n
                }(e, t);
                return a.prepareTransaction(r, this, n)
            }
        },
        9379: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5571)),
                u = n(5473);
            t.default = function(e, t, n = {}) {
                try {
                    u.validate.preparePaymentChannelCreate({
                        address: e,
                        paymentChannelCreate: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        const n = {
                            Account: e,
                            TransactionType: "PaymentChannelCreate",
                            Amount: u.xrpToDrops(t.amount),
                            Destination: t.destination,
                            SettleDelay: t.settleDelay,
                            PublicKey: t.publicKey.toUpperCase()
                        };
                        return null != t.cancelAfter && (n.CancelAfter = u.iso8601ToRippleTime(t.cancelAfter)), null != t.sourceTag && (n.SourceTag = t.sourceTag), null != t.destinationTag && (n.DestinationTag = t.destinationTag), n
                    }(e, t);
                    return a.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9380: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5571)),
                u = n(5473);
            t.default = function(e, t, n = {}) {
                try {
                    u.validate.preparePaymentChannelFund({
                        address: e,
                        paymentChannelFund: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        const n = {
                            Account: e,
                            TransactionType: "PaymentChannelFund",
                            Channel: t.channel,
                            Amount: u.xrpToDrops(t.amount)
                        };
                        return null != t.expiration && (n.Expiration = u.iso8601ToRippleTime(t.expiration)), n
                    }(e, t);
                    return a.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9381: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5571)),
                u = a.common.errors.ValidationError,
                s = a.common.txFlags.PaymentChannelClaim,
                c = n(5473);
            t.default = function(e, t, n = {}) {
                try {
                    c.validate.preparePaymentChannelClaim({
                        address: e,
                        paymentChannelClaim: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        const n = {
                            Account: e,
                            TransactionType: "PaymentChannelClaim",
                            Channel: t.channel,
                            Flags: 0
                        };
                        if (null != t.balance && (n.Balance = c.xrpToDrops(t.balance)), null != t.amount && (n.Amount = c.xrpToDrops(t.amount)), Boolean(t.signature) !== Boolean(t.publicKey)) throw new u('"signature" and "publicKey" fields on PaymentChannelClaim must only be specified together.');
                        if (null != t.signature && (n.Signature = t.signature), null != t.publicKey && (n.PublicKey = t.publicKey), !0 === t.renew && !0 === t.close) throw new u('"renew" and "close" flags on PaymentChannelClaim are mutually exclusive');
                        return !0 === t.renew && (n.Flags |= s.Renew), !0 === t.close && (n.Flags |= s.Close), n
                    }(e, t);
                    return a.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9382: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5571)),
                u = a.common.toRippledAmount,
                s = n(5473);
            t.default = function(e, t, n = {}) {
                try {
                    s.validate.prepareCheckCreate({
                        address: e,
                        checkCreate: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        const n = {
                            Account: e,
                            TransactionType: "CheckCreate",
                            Destination: t.destination,
                            SendMax: u(t.sendMax)
                        };
                        return null != t.destinationTag && (n.DestinationTag = t.destinationTag), null != t.expiration && (n.Expiration = s.iso8601ToRippleTime(t.expiration)), null != t.invoiceID && (n.InvoiceID = t.invoiceID), n
                    }(e, t);
                    return a.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9383: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(5571),
                i = n(5473);
            t.default = function(e, t, n = {}) {
                try {
                    i.validate.prepareCheckCancel({
                        address: e,
                        checkCancel: t,
                        instructions: n
                    });
                    const o = {
                        Account: e,
                        TransactionType: "CheckCancel",
                        CheckID: t.checkID
                    };
                    return r.prepareTransaction(o, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9384: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5571)),
                u = a.common.errors.ValidationError,
                s = a.common.toRippledAmount,
                c = n(5473);
            t.default = function(e, t, n = {}) {
                try {
                    c.validate.prepareCheckCash({
                        address: e,
                        checkCash: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        if (t.amount && t.deliverMin) throw new u('"amount" and "deliverMin" properties on CheckCash are mutually exclusive');
                        const n = {
                            Account: e,
                            TransactionType: "CheckCash",
                            CheckID: t.checkID
                        };
                        return null != t.amount && (n.Amount = s(t.amount)), null != t.deliverMin && (n.DeliverMin = s(t.deliverMin)), n
                    }(e, t);
                    return a.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9385: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(72)),
                s = a(n(5614)),
                c = o(n(5571)),
                l = c.common.validate,
                f = c.common.constants.AccountSetFlags,
                d = c.common.constants.AccountFields;

            function h(e) {
                return {
                    SignerEntry: {
                        Account: e.address,
                        SignerWeight: e.weight
                    }
                }
            }

            function p(e, t) {
                if (void 0 !== t.regularKey) {
                    const n = {
                        TransactionType: "SetRegularKey",
                        Account: e
                    };
                    return null === t.regularKey ? n : Object.assign({}, n, {
                        RegularKey: t.regularKey
                    })
                }
                if (null != t.signers) {
                    const n = {
                        TransactionType: "SignerListSet",
                        Account: e,
                        SignerEntries: [],
                        SignerQuorum: t.signers.threshold
                    };
                    return null != t.signers.weights && (n.SignerEntries = t.signers.weights.map(h)), n
                }
                const n = {
                        TransactionType: "AccountSet",
                        Account: e
                    },
                    r = Object.assign({}, t);
                var i;
                return delete r.memos,
                    function(e, t) {
                        const n = Object.keys(t).filter(e => null != f[e]);
                        u.ok(n.length <= 1, "ERROR: can only set one setting per transaction");
                        const r = n[0],
                            i = t[r],
                            o = f[r];
                        null != o && (i ? e.SetFlag = o : e.ClearFlag = o)
                    }(n, r),
                    function(e, t) {
                        const n = d;
                        for (const r in n) {
                            const i = n[r];
                            let o = t[i.name];
                            void 0 !== o && (null === o && i.hasOwnProperty("defaults") && (o = i.defaults), "hex" !== i.encoding || i.length || (o = Buffer.from(o, "ascii").toString("hex").toUpperCase()), e[r] = o)
                        }
                    }(n, t), null != n.TransferRate && (n.TransferRate = (i = n.TransferRate, new s.default(i).shiftedBy(9).toNumber())), n
            }
            t.default = function(e, t, n = {}) {
                try {
                    l.prepareSettings({
                        address: e,
                        settings: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        const n = p(e, t);
                        return null != t.memos && (n.Memos = t.memos.map(c.convertMemo)), n
                    }(e, t);
                    return c.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9386: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = o(n(5571)),
                u = a.common.validate,
                s = a.common.errors.ValidationError;
            t.default = function(e, t, n = {}) {
                try {
                    u.prepareTicketCreate({
                        address: e,
                        ticketCount: t,
                        instructions: n
                    });
                    const r = function(e, t) {
                        if (!t || 0 === t) throw new s("Ticket count must be greater than 0.");
                        return {
                            TransactionType: "TicketCreate",
                            Account: e,
                            TicketCount: t
                        }
                    }(e, t);
                    return a.prepareTransaction(r, this, n)
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        9387: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = a(n(53)),
                s = o(n(5571)),
                c = a(n(5844)),
                l = a(n(5925)),
                f = n(5928),
                d = a(n(5614)),
                h = n(5473),
                p = s.common.validate;

            function m(e, t, n) {
                const r = n ? l.default.encodeForMultisigning(e, n) : l.default.encodeForSigning(e);
                return c.default.sign(r, t)
            }

            function g(e, t, n, r = {
                signAs: ""
            }) {
                p.sign({
                    txJSON: t,
                    keypair: n
                });
                const i = JSON.parse(t);
                if (i.TxnSignature || i.Signers) throw new s.common.errors.ValidationError('txJSON must not contain "TxnSignature" or "Signers" properties');
                ! function(e, t) {
                    const n = new d.default(t),
                        r = h.xrpToDrops(e._maxFeeXRP);
                    if (n.isGreaterThan(r)) throw new s.common.errors.ValidationError(`"Fee" should not exceed "${r}". To use a higher fee, set \`maxFeeXRP\` in the RippleAPI constructor.`)
                }(e, i.Fee);
                const o = Object.assign({}, i);
                if (o.SigningPubKey = r.signAs ? "" : n.publicKey, r.signAs) {
                    const e = {
                        Account: r.signAs,
                        SigningPubKey: n.publicKey,
                        TxnSignature: m(o, n.privateKey, r.signAs)
                    };
                    o.Signers = [{
                        Signer: e
                    }]
                } else o.TxnSignature = m(o, n.privateKey);
                const a = l.default.encode(o);
                return function(e, t) {
                    var n;
                    const r = l.default.decode(e);
                    if (!r.TxnSignature && !r.Signers) throw new s.common.errors.ValidationError("Serialized transaction must have a TxnSignature or Signers property");
                    delete r.TxnSignature, delete r.Signers, t.SigningPubKey || delete r.SigningPubKey;
                    if (null === (n = t.Memos) || void 0 === n || n.map(e => {
                            var t, n, r;
                            return (null === (t = null == e ? void 0 : e.Memo) || void 0 === t ? void 0 : t.MemoData) && (e.Memo.MemoData = e.Memo.MemoData.toUpperCase()), (null === (n = null == e ? void 0 : e.Memo) || void 0 === n ? void 0 : n.MemoType) && (e.Memo.MemoType = e.Memo.MemoType.toUpperCase()), (null === (r = null == e ? void 0 : e.Memo) || void 0 === r ? void 0 : r.MemoFormat) && (e.Memo.MemoFormat = e.Memo.MemoFormat.toUpperCase()), e
                        }), !u.default.isEqual(r, t)) {
                        const e = new s.common.errors.ValidationError("Serialized transaction does not match original txJSON. See `error.data`");
                        throw e.data = {
                            decoded: r,
                            tx: t,
                            diff: _(t, r)
                        }, e
                    }
                }(a, i), {
                    signedTransaction: a,
                    id: f.computeBinaryTransactionHash(a)
                }
            }

            function _(e, t) {
                const n = {},
                    r = function(e, t, r) {
                        const i = Object.prototype.toString.call(e),
                            o = Object.prototype.toString.call(t);
                        if ("[object Undefined]" !== o)
                            if (i === o)
                                if ("[object Object]" !== i) "[object Array]" !== i ? "[object Function]" !== i ? e !== t && (n[r] = t) : e.toString() !== t.toString() && (n[r] = t) : u.default.isEqual(e, t) || (n[r] = t);
                                else {
                                    const i = _(e, t);
                                    Object.keys(i).length > 0 && (n[r] = i)
                                }
                        else n[r] = t;
                        else n[r] = null
                    };
                for (const n in e) e.hasOwnProperty(n) && r(e[n], t[n], n);
                for (const r in t) t.hasOwnProperty(r) && (e[r] || e[r] === t[r] || (n[r] = t[r]));
                return n
            }
            t.default = function(e, t, n, r) {
                if ("string" == typeof t) return p.sign({
                    txJSON: e,
                    secret: t
                }), g(this, e, c.default.deriveKeypair(t), n);
                if (!r && !t) throw new s.common.errors.ValidationError("sign: Missing secret or keypair.");
                return g(this, e, r || t, n)
            }
        },
        9388: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(53)),
                s = a(n(5925)),
                c = a(n(5614)),
                l = n(5782),
                f = n(5624),
                d = n(5473),
                h = n(5928);

            function p(e) {
                const t = Buffer.from(f.decodeAccountID(e)).toString("hex");
                return new c.default(t, 16)
            }

            function m(e, t) {
                return p(e.Signer.Account).comparedTo(p(t.Signer.Account))
            }
            t.default = function(e) {
                d.validate.combine({
                    signedTransactions: e
                });
                const t = e.map(s.default.decode);
                ! function(e) {
                    const t = JSON.stringify(Object.assign(Object.assign({}, e[0]), {
                        Signers: null
                    }));
                    if (e.slice(1).some(e => JSON.stringify(Object.assign(Object.assign({}, e), {
                            Signers: null
                        })) !== t)) throw new l.ValidationError("txJSON is not the same for all signedTransactions")
                }(t);
                const n = s.default.encode(function(e) {
                    const t = u.flatMap(e, e => e.Signers).filter(e => e).sort(m);
                    return Object.assign(Object.assign({}, e[0]), {
                        Signers: t
                    })
                }(t));
                return {
                    signedTransaction: n,
                    id: h.computeBinaryTransactionHash(n)
                }
            }
        },
        9389: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__awaiter || function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(a, u)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const u = o(n(5571)),
                s = n(5473);
            t.default = function(e, t) {
                return a(this, void 0, void 0, (function*() {
                    s.validate.submit({
                        signedTransaction: e
                    });
                    return function(e) {
                        const t = {
                            resultCode: e.engine_result,
                            resultMessage: e.engine_result_message,
                            engine_result: e.engine_result,
                            engine_result_code: e.engine_result_code,
                            engine_result_message: e.engine_result_message,
                            tx_blob: e.tx_blob,
                            tx_json: e.tx_json
                        };
                        if (e.engine_result.startsWith("tem")) throw new u.common.errors.RippledError("Submit failed", t);
                        return t
                    }(yield this.request("submit", Object.assign({
                        tx_blob: e
                    }, t ? {
                        fail_hard: t
                    } : {})))
                }))
            }
        },
        9390: function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateAddressAPI = void 0;
            const i = n(5624),
                o = r(n(5844)),
                a = n(5473);
            t.generateAddressAPI = function(e = {}) {
                a.validate.generateAddress({
                    options: e
                });
                try {
                    const t = {
                        algorithm: e.algorithm
                    };
                    e.entropy && (t.entropy = Uint8Array.from(e.entropy));
                    const n = o.default.generateSeed(t),
                        r = o.default.deriveKeypair(n),
                        a = o.default.deriveAddress(r.publicKey),
                        u = {
                            xAddress: i.classicAddressToXAddress(a, !1, e && e.test),
                            secret: n
                        };
                    return e.includeClassicAddress && (u.classicAddress = a, u.address = a), u
                } catch (e) {
                    throw new a.errors.UnexpectedError(e.message)
                }
            }
        },
        9391: function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, u)
                    }
                    s((r = r.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(5473),
                o = n(9392);
            t.default = function(e = {}) {
                return r(this, void 0, void 0, (function*() {
                    i.validate.getLedger({
                        options: e
                    });
                    const t = yield this.request("ledger", {
                        ledger_hash: e.ledgerHash,
                        ledger_index: e.ledgerVersion || "validated",
                        expand: e.includeAllData,
                        transactions: e.includeTransactions,
                        accounts: e.includeState
                    });
                    return o.parseLedger(t.ledger)
                }))
            }
        },
        9392: function(e, t, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                o = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
                    return i(t, e), t
                },
                a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseLedger = void 0;
            const u = o(n(53)),
                s = n(5473),
                c = a(n(6517));

            function l(e, t) {
                const n = Object.assign({}, u.omit(t, "metaData"), {
                        meta: t.metaData,
                        ledger_index: e
                    }),
                    r = c.default(n, !0);
                return r.outcome.ledgerVersion || (r.outcome.ledgerVersion = e), r
            }
            t.parseLedger = function(e) {
                const t = parseInt(e.ledger_index, 10);
                return s.removeUndefined(Object.assign({
                    stateHash: e.account_hash,
                    closeTime: s.rippleTimeToISO8601(e.close_time),
                    closeTimeResolution: e.close_time_resolution,
                    closeFlags: e.close_flags,
                    ledgerHash: e.ledger_hash,
                    ledgerVersion: t,
                    parentLedgerHash: e.parent_hash,
                    parentCloseTime: s.rippleTimeToISO8601(e.parent_close_time),
                    totalDrops: e.total_coins,
                    transactionHash: e.transaction_hash
                }, function(e, t) {
                    return u.isEmpty(e) ? {} : "string" == typeof e[0] ? {
                        transactionHashes: e
                    } : {
                        transactions: e.map(u.partial(l, t))
                    }
                }(e.transactions, t), (n = e.accountState, u.isEmpty(n) ? {} : "string" == typeof n[0] ? {
                    stateHashes: n
                } : {
                    rawState: JSON.stringify(n)
                })));
                var n
            }
        },
        9393: function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function u(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, u)
                    }
                    s((r = r.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getFaucetUrl = t.FaucetNetwork = void 0;
            const i = n(325),
                o = n(5473),
                a = n(6516),
                u = n(5782);
            var s;
            ! function(e) {
                e.Testnet = "faucet.altnet.rippletest.net", e.Devnet = "faucet.devnet.rippletest.net"
            }(s = t.FaucetNetwork || (t.FaucetNetwork = {}));

            function c(e, t) {
                return r(this, void 0, void 0, (function*() {
                    try {
                        const n = yield e.getBalances(t);
                        return n.filter(e => "XRP" === e.currency.toUpperCase())[0].value
                    } catch (e) {
                        return `Unable to retrieve ${t} balance. Error: ${e}`
                    }
                }))
            }

            function l(e) {
                const t = e.connection.getUrl();
                return t.includes("altnet") || t.includes("testnet") ? s.Testnet : t.includes("devnet") ? s.Devnet : void 0
            }
            t.getFaucetUrl = l, t.default = function(e) {
                return r(this, void 0, void 0, (function*() {
                    if (!this.isConnected()) throw new u.RippledError("RippleAPI not connected, cannot call faucet");
                    let t, n = 0,
                        s = l(this);
                    if (e && a.isValidAddress(e)) {
                        t = (new TextEncoder).encode(JSON.stringify({
                            destination: e
                        }));
                        const r = yield c(this, e);
                        n = r && !isNaN(+r) ? +r : 0
                    }
                    const f = {
                        hostname: s,
                        port: 443,
                        path: "/accounts",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Content-Length": t ? t.length : 0
                        }
                    };
                    return new Promise((e, a) => {
                        const u = i.request(f, t => {
                            const i = [];
                            t.on("data", e => {
                                i.push(e)
                            }), t.on("end", () => r(this, void 0, void 0, (function*() {
                                const u = Buffer.concat(i).toString();
                                if (t.headers["content-type"].startsWith("application/json")) {
                                    const t = JSON.parse(u),
                                        i = t.account.classicAddress;
                                    if (i) try {
                                        (yield function(e, t, n) {
                                            return r(this, void 0, void 0, (function*() {
                                                return new Promise((i, a) => {
                                                    let u = 20;
                                                    const s = setInterval(() => r(this, void 0, void 0, (function*() {
                                                        u < 0 ? (clearInterval(s), i(!1)) : u--;
                                                        try {
                                                            +(yield c(e, t)) > n && (clearInterval(s), i(!0))
                                                        } catch (e) {
                                                            clearInterval(s), a(new o.errors.XRPLFaucetError(`Unable to check if the address ${t} balance has increased. Error: ${e}`))
                                                        }
                                                    })), 1e3)
                                                })
                                            }))
                                        }(this, i, n)) ? e(t): a(new o.errors.XRPLFaucetError("Unable to fund address with faucet after waiting 20 seconds"))
                                    } catch (e) {
                                        a(new o.errors.XRPLFaucetError(e))
                                    } else a(new o.errors.XRPLFaucetError("The faucet account classic address is undefined"))
                                } else a({
                                    statusCode: t.statusCode,
                                    contentType: t.headers["content-type"],
                                    body: u
                                })
                            })))
                        });
                        u.write(t || ""), u.on("error", e => {
                            a(e)
                        }), u.end()
                    })
                }))
            }
        },
        9394: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
    }
]);