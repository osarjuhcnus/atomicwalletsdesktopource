(window.webpackJsonp = window.webpackJsonp || []).push([
    [36], {
        1093: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MsgClientImpl = t.MsgDelegateFeedConsentResponse = t.MsgDelegateFeedConsent = t.MsgAggregateExchangeRateVoteResponse = t.MsgAggregateExchangeRateVote = t.MsgAggregateExchangeRatePrevoteResponse = t.MsgAggregateExchangeRatePrevote = t.protobufPackage = void 0;
            const a = o(n(1)),
                i = o(n(8));
            t.protobufPackage = "terra.oracle.v1beta1";
            const r = {
                hash: "",
                feeder: "",
                validator: ""
            };
            t.MsgAggregateExchangeRatePrevote = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.hash && t.uint32(10).string(e.hash), "" !== e.feeder && t.uint32(18).string(e.feeder), "" !== e.validator && t.uint32(26).string(e.validator), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, r);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.hash = n.string();
                                break;
                            case 2:
                                a.feeder = n.string();
                                break;
                            case 3:
                                a.validator = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.hash && null !== e.hash ? t.hash = String(e.hash) : t.hash = "", void 0 !== e.feeder && null !== e.feeder ? t.feeder = String(e.feeder) : t.feeder = "", void 0 !== e.validator && null !== e.validator ? t.validator = String(e.validator) : t.validator = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.hash && (t.hash = e.hash), void 0 !== e.feeder && (t.feeder = e.feeder), void 0 !== e.validator && (t.validator = e.validator), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.hash && null !== e.hash ? t.hash = e.hash : t.hash = "", void 0 !== e.feeder && null !== e.feeder ? t.feeder = e.feeder : t.feeder = "", void 0 !== e.validator && null !== e.validator ? t.validator = e.validator : t.validator = "", t
                }
            };
            const s = {};
            t.MsgAggregateExchangeRatePrevoteResponse = {
                encode: (e, t = i.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, s);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return a
                },
                fromJSON: e => Object.assign({}, s),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, s)
            };
            const d = {
                salt: "",
                exchangeRates: "",
                feeder: "",
                validator: ""
            };
            t.MsgAggregateExchangeRateVote = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.salt && t.uint32(10).string(e.salt), "" !== e.exchangeRates && t.uint32(18).string(e.exchangeRates), "" !== e.feeder && t.uint32(26).string(e.feeder), "" !== e.validator && t.uint32(34).string(e.validator), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.salt = n.string();
                                break;
                            case 2:
                                a.exchangeRates = n.string();
                                break;
                            case 3:
                                a.feeder = n.string();
                                break;
                            case 4:
                                a.validator = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.salt && null !== e.salt ? t.salt = String(e.salt) : t.salt = "", void 0 !== e.exchangeRates && null !== e.exchangeRates ? t.exchangeRates = String(e.exchangeRates) : t.exchangeRates = "", void 0 !== e.feeder && null !== e.feeder ? t.feeder = String(e.feeder) : t.feeder = "", void 0 !== e.validator && null !== e.validator ? t.validator = String(e.validator) : t.validator = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.salt && (t.salt = e.salt), void 0 !== e.exchangeRates && (t.exchangeRates = e.exchangeRates), void 0 !== e.feeder && (t.feeder = e.feeder), void 0 !== e.validator && (t.validator = e.validator), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.salt && null !== e.salt ? t.salt = e.salt : t.salt = "", void 0 !== e.exchangeRates && null !== e.exchangeRates ? t.exchangeRates = e.exchangeRates : t.exchangeRates = "", void 0 !== e.feeder && null !== e.feeder ? t.feeder = e.feeder : t.feeder = "", void 0 !== e.validator && null !== e.validator ? t.validator = e.validator : t.validator = "", t
                }
            };
            const c = {};
            t.MsgAggregateExchangeRateVoteResponse = {
                encode: (e, t = i.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, c);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return a
                },
                fromJSON: e => Object.assign({}, c),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, c)
            };
            const l = {
                operator: "",
                delegate: ""
            };
            t.MsgDelegateFeedConsent = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.operator && t.uint32(10).string(e.operator), "" !== e.delegate && t.uint32(18).string(e.delegate), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, l);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.operator = n.string();
                                break;
                            case 2:
                                a.delegate = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.operator && null !== e.operator ? t.operator = String(e.operator) : t.operator = "", void 0 !== e.delegate && null !== e.delegate ? t.delegate = String(e.delegate) : t.delegate = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.operator && (t.operator = e.operator), void 0 !== e.delegate && (t.delegate = e.delegate), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.operator && null !== e.operator ? t.operator = e.operator : t.operator = "", void 0 !== e.delegate && null !== e.delegate ? t.delegate = e.delegate : t.delegate = "", t
                }
            };
            const u = {};
            t.MsgDelegateFeedConsentResponse = {
                encode: (e, t = i.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return a
                },
                fromJSON: e => Object.assign({}, u),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, u)
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.AggregateExchangeRatePrevote = this.AggregateExchangeRatePrevote.bind(this), this.AggregateExchangeRateVote = this.AggregateExchangeRateVote.bind(this), this.DelegateFeedConsent = this.DelegateFeedConsent.bind(this)
                }
                AggregateExchangeRatePrevote(e) {
                    const n = t.MsgAggregateExchangeRatePrevote.encode(e).finish();
                    return this.rpc.request("terra.oracle.v1beta1.Msg", "AggregateExchangeRatePrevote", n).then(e => t.MsgAggregateExchangeRatePrevoteResponse.decode(new i.default.Reader(e)))
                }
                AggregateExchangeRateVote(e) {
                    const n = t.MsgAggregateExchangeRateVote.encode(e).finish();
                    return this.rpc.request("terra.oracle.v1beta1.Msg", "AggregateExchangeRateVote", n).then(e => t.MsgAggregateExchangeRateVoteResponse.decode(new i.default.Reader(e)))
                }
                DelegateFeedConsent(e) {
                    const n = t.MsgDelegateFeedConsent.encode(e).finish();
                    return this.rpc.request("terra.oracle.v1beta1.Msg", "DelegateFeedConsent", n).then(e => t.MsgDelegateFeedConsentResponse.decode(new i.default.Reader(e)))
                }
            }, i.default.util.Long !== a.default && (i.default.util.Long = a.default, i.default.configure())
        },
        1909: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MsgClientImpl = t.MsgSwapSendResponse = t.MsgSwapSend = t.MsgSwapResponse = t.MsgSwap = t.protobufPackage = void 0;
            const a = o(n(1)),
                i = o(n(8)),
                r = n(349);
            t.protobufPackage = "terra.market.v1beta1";
            const s = {
                trader: "",
                askDenom: ""
            };
            t.MsgSwap = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.trader && t.uint32(10).string(e.trader), void 0 !== e.offerCoin && r.Coin.encode(e.offerCoin, t.uint32(18).fork()).ldelim(), "" !== e.askDenom && t.uint32(26).string(e.askDenom), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, s);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.trader = n.string();
                                break;
                            case 2:
                                a.offerCoin = r.Coin.decode(n, n.uint32());
                                break;
                            case 3:
                                a.askDenom = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, s);
                    return void 0 !== e.trader && null !== e.trader ? t.trader = String(e.trader) : t.trader = "", void 0 !== e.offerCoin && null !== e.offerCoin ? t.offerCoin = r.Coin.fromJSON(e.offerCoin) : t.offerCoin = void 0, void 0 !== e.askDenom && null !== e.askDenom ? t.askDenom = String(e.askDenom) : t.askDenom = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.trader && (t.trader = e.trader), void 0 !== e.offerCoin && (t.offerCoin = e.offerCoin ? r.Coin.toJSON(e.offerCoin) : void 0), void 0 !== e.askDenom && (t.askDenom = e.askDenom), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, s);
                    return void 0 !== e.trader && null !== e.trader ? t.trader = e.trader : t.trader = "", void 0 !== e.offerCoin && null !== e.offerCoin ? t.offerCoin = r.Coin.fromPartial(e.offerCoin) : t.offerCoin = void 0, void 0 !== e.askDenom && null !== e.askDenom ? t.askDenom = e.askDenom : t.askDenom = "", t
                }
            };
            const d = {};
            t.MsgSwapResponse = {
                encode: (e, t = i.default.Writer.create()) => (void 0 !== e.swapCoin && r.Coin.encode(e.swapCoin, t.uint32(10).fork()).ldelim(), void 0 !== e.swapFee && r.Coin.encode(e.swapFee, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.swapCoin = r.Coin.decode(n, n.uint32());
                                break;
                            case 2:
                                a.swapFee = r.Coin.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.swapCoin && null !== e.swapCoin ? t.swapCoin = r.Coin.fromJSON(e.swapCoin) : t.swapCoin = void 0, void 0 !== e.swapFee && null !== e.swapFee ? t.swapFee = r.Coin.fromJSON(e.swapFee) : t.swapFee = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.swapCoin && (t.swapCoin = e.swapCoin ? r.Coin.toJSON(e.swapCoin) : void 0), void 0 !== e.swapFee && (t.swapFee = e.swapFee ? r.Coin.toJSON(e.swapFee) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.swapCoin && null !== e.swapCoin ? t.swapCoin = r.Coin.fromPartial(e.swapCoin) : t.swapCoin = void 0, void 0 !== e.swapFee && null !== e.swapFee ? t.swapFee = r.Coin.fromPartial(e.swapFee) : t.swapFee = void 0, t
                }
            };
            const c = {
                fromAddress: "",
                toAddress: "",
                askDenom: ""
            };
            t.MsgSwapSend = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.fromAddress && t.uint32(10).string(e.fromAddress), "" !== e.toAddress && t.uint32(18).string(e.toAddress), void 0 !== e.offerCoin && r.Coin.encode(e.offerCoin, t.uint32(26).fork()).ldelim(), "" !== e.askDenom && t.uint32(34).string(e.askDenom), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, c);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.fromAddress = n.string();
                                break;
                            case 2:
                                a.toAddress = n.string();
                                break;
                            case 3:
                                a.offerCoin = r.Coin.decode(n, n.uint32());
                                break;
                            case 4:
                                a.askDenom = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.fromAddress && null !== e.fromAddress ? t.fromAddress = String(e.fromAddress) : t.fromAddress = "", void 0 !== e.toAddress && null !== e.toAddress ? t.toAddress = String(e.toAddress) : t.toAddress = "", void 0 !== e.offerCoin && null !== e.offerCoin ? t.offerCoin = r.Coin.fromJSON(e.offerCoin) : t.offerCoin = void 0, void 0 !== e.askDenom && null !== e.askDenom ? t.askDenom = String(e.askDenom) : t.askDenom = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress), void 0 !== e.toAddress && (t.toAddress = e.toAddress), void 0 !== e.offerCoin && (t.offerCoin = e.offerCoin ? r.Coin.toJSON(e.offerCoin) : void 0), void 0 !== e.askDenom && (t.askDenom = e.askDenom), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.fromAddress && null !== e.fromAddress ? t.fromAddress = e.fromAddress : t.fromAddress = "", void 0 !== e.toAddress && null !== e.toAddress ? t.toAddress = e.toAddress : t.toAddress = "", void 0 !== e.offerCoin && null !== e.offerCoin ? t.offerCoin = r.Coin.fromPartial(e.offerCoin) : t.offerCoin = void 0, void 0 !== e.askDenom && null !== e.askDenom ? t.askDenom = e.askDenom : t.askDenom = "", t
                }
            };
            const l = {};
            t.MsgSwapSendResponse = {
                encode: (e, t = i.default.Writer.create()) => (void 0 !== e.swapCoin && r.Coin.encode(e.swapCoin, t.uint32(10).fork()).ldelim(), void 0 !== e.swapFee && r.Coin.encode(e.swapFee, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, l);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.swapCoin = r.Coin.decode(n, n.uint32());
                                break;
                            case 2:
                                a.swapFee = r.Coin.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.swapCoin && null !== e.swapCoin ? t.swapCoin = r.Coin.fromJSON(e.swapCoin) : t.swapCoin = void 0, void 0 !== e.swapFee && null !== e.swapFee ? t.swapFee = r.Coin.fromJSON(e.swapFee) : t.swapFee = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.swapCoin && (t.swapCoin = e.swapCoin ? r.Coin.toJSON(e.swapCoin) : void 0), void 0 !== e.swapFee && (t.swapFee = e.swapFee ? r.Coin.toJSON(e.swapFee) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.swapCoin && null !== e.swapCoin ? t.swapCoin = r.Coin.fromPartial(e.swapCoin) : t.swapCoin = void 0, void 0 !== e.swapFee && null !== e.swapFee ? t.swapFee = r.Coin.fromPartial(e.swapFee) : t.swapFee = void 0, t
                }
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.Swap = this.Swap.bind(this), this.SwapSend = this.SwapSend.bind(this)
                }
                Swap(e) {
                    const n = t.MsgSwap.encode(e).finish();
                    return this.rpc.request("terra.market.v1beta1.Msg", "Swap", n).then(e => t.MsgSwapResponse.decode(new i.default.Reader(e)))
                }
                SwapSend(e) {
                    const n = t.MsgSwapSend.encode(e).finish();
                    return this.rpc.request("terra.market.v1beta1.Msg", "SwapSend", n).then(e => t.MsgSwapSendResponse.decode(new i.default.Reader(e)))
                }
            }, i.default.util.Long !== a.default && (i.default.util.Long = a.default, i.default.configure())
        },
        1935: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ExchangeRateTuple = t.AggregateExchangeRateVote = t.AggregateExchangeRatePrevote = t.Denom = t.Params = t.protobufPackage = void 0;
            const a = o(n(1)),
                i = o(n(8));
            t.protobufPackage = "terra.oracle.v1beta1";
            const r = {
                votePeriod: a.default.UZERO,
                voteThreshold: "",
                rewardBand: "",
                rewardDistributionWindow: a.default.UZERO,
                slashFraction: "",
                slashWindow: a.default.UZERO,
                minValidPerWindow: ""
            };
            t.Params = {
                encode(e, n = i.default.Writer.create()) {
                    e.votePeriod.isZero() || n.uint32(8).uint64(e.votePeriod), "" !== e.voteThreshold && n.uint32(18).string(e.voteThreshold), "" !== e.rewardBand && n.uint32(26).string(e.rewardBand), e.rewardDistributionWindow.isZero() || n.uint32(32).uint64(e.rewardDistributionWindow);
                    for (const o of e.whitelist) t.Denom.encode(o, n.uint32(42).fork()).ldelim();
                    return "" !== e.slashFraction && n.uint32(50).string(e.slashFraction), e.slashWindow.isZero() || n.uint32(56).uint64(e.slashWindow), "" !== e.minValidPerWindow && n.uint32(66).string(e.minValidPerWindow), n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, r);
                    for (s.whitelist = []; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.votePeriod = o.uint64();
                                break;
                            case 2:
                                s.voteThreshold = o.string();
                                break;
                            case 3:
                                s.rewardBand = o.string();
                                break;
                            case 4:
                                s.rewardDistributionWindow = o.uint64();
                                break;
                            case 5:
                                s.whitelist.push(t.Denom.decode(o, o.uint32()));
                                break;
                            case 6:
                                s.slashFraction = o.string();
                                break;
                            case 7:
                                s.slashWindow = o.uint64();
                                break;
                            case 8:
                                s.minValidPerWindow = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, r);
                    if (n.whitelist = [], void 0 !== e.votePeriod && null !== e.votePeriod ? n.votePeriod = a.default.fromString(e.votePeriod) : n.votePeriod = a.default.UZERO, void 0 !== e.voteThreshold && null !== e.voteThreshold ? n.voteThreshold = String(e.voteThreshold) : n.voteThreshold = "", void 0 !== e.rewardBand && null !== e.rewardBand ? n.rewardBand = String(e.rewardBand) : n.rewardBand = "", void 0 !== e.rewardDistributionWindow && null !== e.rewardDistributionWindow ? n.rewardDistributionWindow = a.default.fromString(e.rewardDistributionWindow) : n.rewardDistributionWindow = a.default.UZERO, void 0 !== e.whitelist && null !== e.whitelist)
                        for (const o of e.whitelist) n.whitelist.push(t.Denom.fromJSON(o));
                    return void 0 !== e.slashFraction && null !== e.slashFraction ? n.slashFraction = String(e.slashFraction) : n.slashFraction = "", void 0 !== e.slashWindow && null !== e.slashWindow ? n.slashWindow = a.default.fromString(e.slashWindow) : n.slashWindow = a.default.UZERO, void 0 !== e.minValidPerWindow && null !== e.minValidPerWindow ? n.minValidPerWindow = String(e.minValidPerWindow) : n.minValidPerWindow = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.votePeriod && (n.votePeriod = (e.votePeriod || a.default.UZERO).toString()), void 0 !== e.voteThreshold && (n.voteThreshold = e.voteThreshold), void 0 !== e.rewardBand && (n.rewardBand = e.rewardBand), void 0 !== e.rewardDistributionWindow && (n.rewardDistributionWindow = (e.rewardDistributionWindow || a.default.UZERO).toString()), e.whitelist ? n.whitelist = e.whitelist.map(e => e ? t.Denom.toJSON(e) : void 0) : n.whitelist = [], void 0 !== e.slashFraction && (n.slashFraction = e.slashFraction), void 0 !== e.slashWindow && (n.slashWindow = (e.slashWindow || a.default.UZERO).toString()), void 0 !== e.minValidPerWindow && (n.minValidPerWindow = e.minValidPerWindow), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, r);
                    if (n.whitelist = [], void 0 !== e.votePeriod && null !== e.votePeriod ? n.votePeriod = e.votePeriod : n.votePeriod = a.default.UZERO, void 0 !== e.voteThreshold && null !== e.voteThreshold ? n.voteThreshold = e.voteThreshold : n.voteThreshold = "", void 0 !== e.rewardBand && null !== e.rewardBand ? n.rewardBand = e.rewardBand : n.rewardBand = "", void 0 !== e.rewardDistributionWindow && null !== e.rewardDistributionWindow ? n.rewardDistributionWindow = e.rewardDistributionWindow : n.rewardDistributionWindow = a.default.UZERO, void 0 !== e.whitelist && null !== e.whitelist)
                        for (const o of e.whitelist) n.whitelist.push(t.Denom.fromPartial(o));
                    return void 0 !== e.slashFraction && null !== e.slashFraction ? n.slashFraction = e.slashFraction : n.slashFraction = "", void 0 !== e.slashWindow && null !== e.slashWindow ? n.slashWindow = e.slashWindow : n.slashWindow = a.default.UZERO, void 0 !== e.minValidPerWindow && null !== e.minValidPerWindow ? n.minValidPerWindow = e.minValidPerWindow : n.minValidPerWindow = "", n
                }
            };
            const s = {
                name: "",
                tobinTax: ""
            };
            t.Denom = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.name && t.uint32(10).string(e.name), "" !== e.tobinTax && t.uint32(18).string(e.tobinTax), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, s);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.name = n.string();
                                break;
                            case 2:
                                a.tobinTax = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, s);
                    return void 0 !== e.name && null !== e.name ? t.name = String(e.name) : t.name = "", void 0 !== e.tobinTax && null !== e.tobinTax ? t.tobinTax = String(e.tobinTax) : t.tobinTax = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.name && (t.name = e.name), void 0 !== e.tobinTax && (t.tobinTax = e.tobinTax), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, s);
                    return void 0 !== e.name && null !== e.name ? t.name = e.name : t.name = "", void 0 !== e.tobinTax && null !== e.tobinTax ? t.tobinTax = e.tobinTax : t.tobinTax = "", t
                }
            };
            const d = {
                hash: "",
                voter: "",
                submitBlock: a.default.UZERO
            };
            t.AggregateExchangeRatePrevote = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.hash && t.uint32(10).string(e.hash), "" !== e.voter && t.uint32(18).string(e.voter), e.submitBlock.isZero() || t.uint32(24).uint64(e.submitBlock), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.hash = n.string();
                                break;
                            case 2:
                                a.voter = n.string();
                                break;
                            case 3:
                                a.submitBlock = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.hash && null !== e.hash ? t.hash = String(e.hash) : t.hash = "", void 0 !== e.voter && null !== e.voter ? t.voter = String(e.voter) : t.voter = "", void 0 !== e.submitBlock && null !== e.submitBlock ? t.submitBlock = a.default.fromString(e.submitBlock) : t.submitBlock = a.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.hash && (t.hash = e.hash), void 0 !== e.voter && (t.voter = e.voter), void 0 !== e.submitBlock && (t.submitBlock = (e.submitBlock || a.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.hash && null !== e.hash ? t.hash = e.hash : t.hash = "", void 0 !== e.voter && null !== e.voter ? t.voter = e.voter : t.voter = "", void 0 !== e.submitBlock && null !== e.submitBlock ? t.submitBlock = e.submitBlock : t.submitBlock = a.default.UZERO, t
                }
            };
            const c = {
                voter: ""
            };
            t.AggregateExchangeRateVote = {
                encode(e, n = i.default.Writer.create()) {
                    for (const o of e.exchangeRateTuples) t.ExchangeRateTuple.encode(o, n.uint32(10).fork()).ldelim();
                    return "" !== e.voter && n.uint32(18).string(e.voter), n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, c);
                    for (r.exchangeRateTuples = []; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.exchangeRateTuples.push(t.ExchangeRateTuple.decode(o, o.uint32()));
                                break;
                            case 2:
                                r.voter = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, c);
                    if (n.exchangeRateTuples = [], void 0 !== e.exchangeRateTuples && null !== e.exchangeRateTuples)
                        for (const o of e.exchangeRateTuples) n.exchangeRateTuples.push(t.ExchangeRateTuple.fromJSON(o));
                    return void 0 !== e.voter && null !== e.voter ? n.voter = String(e.voter) : n.voter = "", n
                },
                toJSON(e) {
                    const n = {};
                    return e.exchangeRateTuples ? n.exchangeRateTuples = e.exchangeRateTuples.map(e => e ? t.ExchangeRateTuple.toJSON(e) : void 0) : n.exchangeRateTuples = [], void 0 !== e.voter && (n.voter = e.voter), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, c);
                    if (n.exchangeRateTuples = [], void 0 !== e.exchangeRateTuples && null !== e.exchangeRateTuples)
                        for (const o of e.exchangeRateTuples) n.exchangeRateTuples.push(t.ExchangeRateTuple.fromPartial(o));
                    return void 0 !== e.voter && null !== e.voter ? n.voter = e.voter : n.voter = "", n
                }
            };
            const l = {
                denom: "",
                exchangeRate: ""
            };
            t.ExchangeRateTuple = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), "" !== e.exchangeRate && t.uint32(18).string(e.exchangeRate), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, l);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.denom = n.string();
                                break;
                            case 2:
                                a.exchangeRate = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", void 0 !== e.exchangeRate && null !== e.exchangeRate ? t.exchangeRate = String(e.exchangeRate) : t.exchangeRate = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), void 0 !== e.exchangeRate && (t.exchangeRate = e.exchangeRate), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = e.denom : t.denom = "", void 0 !== e.exchangeRate && null !== e.exchangeRate ? t.exchangeRate = e.exchangeRate : t.exchangeRate = "", t
                }
            }, i.default.util.Long !== a.default && (i.default.util.Long = a.default, i.default.configure())
        },
        351: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MsgClientImpl = t.MsgClearContractAdminResponse = t.MsgClearContractAdmin = t.MsgUpdateContractAdminResponse = t.MsgUpdateContractAdmin = t.MsgMigrateContractResponse = t.MsgMigrateContract = t.MsgExecuteContractResponse = t.MsgExecuteContract = t.MsgInstantiateContractResponse = t.MsgInstantiateContract = t.MsgMigrateCodeResponse = t.MsgMigrateCode = t.MsgStoreCodeResponse = t.MsgStoreCode = t.protobufPackage = void 0;
            const a = o(n(1)),
                i = o(n(8)),
                r = n(349);
            t.protobufPackage = "terra.wasm.v1beta1";
            const s = {
                sender: ""
            };
            t.MsgStoreCode = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.sender && t.uint32(10).string(e.sender), 0 !== e.wasmByteCode.length && t.uint32(18).bytes(e.wasmByteCode), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, s);
                    for (a.wasmByteCode = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.sender = n.string();
                                break;
                            case 2:
                                a.wasmByteCode = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, s);
                    return t.wasmByteCode = new Uint8Array, void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.wasmByteCode && null !== e.wasmByteCode && (t.wasmByteCode = S(e.wasmByteCode)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.wasmByteCode && (t.wasmByteCode = k(void 0 !== e.wasmByteCode ? e.wasmByteCode : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, s);
                    return void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.wasmByteCode && null !== e.wasmByteCode ? t.wasmByteCode = e.wasmByteCode : t.wasmByteCode = new Uint8Array, t
                }
            };
            const d = {
                codeId: a.default.UZERO
            };
            t.MsgStoreCodeResponse = {
                encode: (e, t = i.default.Writer.create()) => (e.codeId.isZero() || t.uint32(8).uint64(e.codeId), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.codeId = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.codeId && null !== e.codeId ? t.codeId = a.default.fromString(e.codeId) : t.codeId = a.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.codeId && (t.codeId = (e.codeId || a.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.codeId && null !== e.codeId ? t.codeId = e.codeId : t.codeId = a.default.UZERO, t
                }
            };
            const c = {
                codeId: a.default.UZERO,
                sender: ""
            };
            t.MsgMigrateCode = {
                encode: (e, t = i.default.Writer.create()) => (e.codeId.isZero() || t.uint32(8).uint64(e.codeId), "" !== e.sender && t.uint32(18).string(e.sender), 0 !== e.wasmByteCode.length && t.uint32(26).bytes(e.wasmByteCode), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, c);
                    for (a.wasmByteCode = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.codeId = n.uint64();
                                break;
                            case 2:
                                a.sender = n.string();
                                break;
                            case 3:
                                a.wasmByteCode = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    return t.wasmByteCode = new Uint8Array, void 0 !== e.codeId && null !== e.codeId ? t.codeId = a.default.fromString(e.codeId) : t.codeId = a.default.UZERO, void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.wasmByteCode && null !== e.wasmByteCode && (t.wasmByteCode = S(e.wasmByteCode)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.codeId && (t.codeId = (e.codeId || a.default.UZERO).toString()), void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.wasmByteCode && (t.wasmByteCode = k(void 0 !== e.wasmByteCode ? e.wasmByteCode : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.codeId && null !== e.codeId ? t.codeId = e.codeId : t.codeId = a.default.UZERO, void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.wasmByteCode && null !== e.wasmByteCode ? t.wasmByteCode = e.wasmByteCode : t.wasmByteCode = new Uint8Array, t
                }
            };
            const l = {};
            t.MsgMigrateCodeResponse = {
                encode: (e, t = i.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, l);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return a
                },
                fromJSON: e => Object.assign({}, l),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, l)
            };
            const u = {
                sender: "",
                admin: "",
                codeId: a.default.UZERO
            };
            t.MsgInstantiateContract = {
                encode(e, t = i.default.Writer.create()) {
                    "" !== e.sender && t.uint32(10).string(e.sender), "" !== e.admin && t.uint32(18).string(e.admin), e.codeId.isZero() || t.uint32(24).uint64(e.codeId), 0 !== e.initMsg.length && t.uint32(34).bytes(e.initMsg);
                    for (const n of e.initCoins) r.Coin.encode(n, t.uint32(42).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, u);
                    for (a.initCoins = [], a.initMsg = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.sender = n.string();
                                break;
                            case 2:
                                a.admin = n.string();
                                break;
                            case 3:
                                a.codeId = n.uint64();
                                break;
                            case 4:
                                a.initMsg = n.bytes();
                                break;
                            case 5:
                                a.initCoins.push(r.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    if (t.initCoins = [], t.initMsg = new Uint8Array, void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.admin && null !== e.admin ? t.admin = String(e.admin) : t.admin = "", void 0 !== e.codeId && null !== e.codeId ? t.codeId = a.default.fromString(e.codeId) : t.codeId = a.default.UZERO, void 0 !== e.initMsg && null !== e.initMsg && (t.initMsg = S(e.initMsg)), void 0 !== e.initCoins && null !== e.initCoins)
                        for (const n of e.initCoins) t.initCoins.push(r.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.admin && (t.admin = e.admin), void 0 !== e.codeId && (t.codeId = (e.codeId || a.default.UZERO).toString()), void 0 !== e.initMsg && (t.initMsg = k(void 0 !== e.initMsg ? e.initMsg : new Uint8Array)), e.initCoins ? t.initCoins = e.initCoins.map(e => e ? r.Coin.toJSON(e) : void 0) : t.initCoins = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    if (t.initCoins = [], void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.admin && null !== e.admin ? t.admin = e.admin : t.admin = "", void 0 !== e.codeId && null !== e.codeId ? t.codeId = e.codeId : t.codeId = a.default.UZERO, void 0 !== e.initMsg && null !== e.initMsg ? t.initMsg = e.initMsg : t.initMsg = new Uint8Array, void 0 !== e.initCoins && null !== e.initCoins)
                        for (const n of e.initCoins) t.initCoins.push(r.Coin.fromPartial(n));
                    return t
                }
            };
            const g = {
                contractAddress: ""
            };
            t.MsgInstantiateContractResponse = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.contractAddress && t.uint32(10).string(e.contractAddress), 0 !== e.data.length && t.uint32(18).bytes(e.data), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, g);
                    for (a.data = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.contractAddress = n.string();
                                break;
                            case 2:
                                a.data = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return t.data = new Uint8Array, void 0 !== e.contractAddress && null !== e.contractAddress ? t.contractAddress = String(e.contractAddress) : t.contractAddress = "", void 0 !== e.data && null !== e.data && (t.data = S(e.data)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.contractAddress && (t.contractAddress = e.contractAddress), void 0 !== e.data && (t.data = k(void 0 !== e.data ? e.data : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.contractAddress && null !== e.contractAddress ? t.contractAddress = e.contractAddress : t.contractAddress = "", void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, t
                }
            };
            const f = {
                sender: "",
                contract: ""
            };
            t.MsgExecuteContract = {
                encode(e, t = i.default.Writer.create()) {
                    "" !== e.sender && t.uint32(10).string(e.sender), "" !== e.contract && t.uint32(18).string(e.contract), 0 !== e.executeMsg.length && t.uint32(26).bytes(e.executeMsg);
                    for (const n of e.coins) r.Coin.encode(n, t.uint32(42).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, f);
                    for (a.coins = [], a.executeMsg = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.sender = n.string();
                                break;
                            case 2:
                                a.contract = n.string();
                                break;
                            case 3:
                                a.executeMsg = n.bytes();
                                break;
                            case 5:
                                a.coins.push(r.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.coins = [], t.executeMsg = new Uint8Array, void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", void 0 !== e.executeMsg && null !== e.executeMsg && (t.executeMsg = S(e.executeMsg)), void 0 !== e.coins && null !== e.coins)
                        for (const n of e.coins) t.coins.push(r.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.contract && (t.contract = e.contract), void 0 !== e.executeMsg && (t.executeMsg = k(void 0 !== e.executeMsg ? e.executeMsg : new Uint8Array)), e.coins ? t.coins = e.coins.map(e => e ? r.Coin.toJSON(e) : void 0) : t.coins = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    if (t.coins = [], void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", void 0 !== e.executeMsg && null !== e.executeMsg ? t.executeMsg = e.executeMsg : t.executeMsg = new Uint8Array, void 0 !== e.coins && null !== e.coins)
                        for (const n of e.coins) t.coins.push(r.Coin.fromPartial(n));
                    return t
                }
            };
            const m = {};
            t.MsgExecuteContractResponse = {
                encode: (e, t = i.default.Writer.create()) => (0 !== e.data.length && t.uint32(10).bytes(e.data), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, m);
                    for (a.data = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.data = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    return t.data = new Uint8Array, void 0 !== e.data && null !== e.data && (t.data = S(e.data)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.data && (t.data = k(void 0 !== e.data ? e.data : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, m);
                    return void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, t
                }
            };
            const v = {
                admin: "",
                contract: "",
                newCodeId: a.default.UZERO
            };
            t.MsgMigrateContract = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.admin && t.uint32(10).string(e.admin), "" !== e.contract && t.uint32(18).string(e.contract), e.newCodeId.isZero() || t.uint32(24).uint64(e.newCodeId), 0 !== e.migrateMsg.length && t.uint32(34).bytes(e.migrateMsg), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, v);
                    for (a.migrateMsg = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.admin = n.string();
                                break;
                            case 2:
                                a.contract = n.string();
                                break;
                            case 3:
                                a.newCodeId = n.uint64();
                                break;
                            case 4:
                                a.migrateMsg = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    return t.migrateMsg = new Uint8Array, void 0 !== e.admin && null !== e.admin ? t.admin = String(e.admin) : t.admin = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", void 0 !== e.newCodeId && null !== e.newCodeId ? t.newCodeId = a.default.fromString(e.newCodeId) : t.newCodeId = a.default.UZERO, void 0 !== e.migrateMsg && null !== e.migrateMsg && (t.migrateMsg = S(e.migrateMsg)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.admin && (t.admin = e.admin), void 0 !== e.contract && (t.contract = e.contract), void 0 !== e.newCodeId && (t.newCodeId = (e.newCodeId || a.default.UZERO).toString()), void 0 !== e.migrateMsg && (t.migrateMsg = k(void 0 !== e.migrateMsg ? e.migrateMsg : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, v);
                    return void 0 !== e.admin && null !== e.admin ? t.admin = e.admin : t.admin = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", void 0 !== e.newCodeId && null !== e.newCodeId ? t.newCodeId = e.newCodeId : t.newCodeId = a.default.UZERO, void 0 !== e.migrateMsg && null !== e.migrateMsg ? t.migrateMsg = e.migrateMsg : t.migrateMsg = new Uint8Array, t
                }
            };
            const w = {};
            t.MsgMigrateContractResponse = {
                encode: (e, t = i.default.Writer.create()) => (0 !== e.data.length && t.uint32(10).bytes(e.data), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, w);
                    for (a.data = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.data = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, w);
                    return t.data = new Uint8Array, void 0 !== e.data && null !== e.data && (t.data = S(e.data)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.data && (t.data = k(void 0 !== e.data ? e.data : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, w);
                    return void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, t
                }
            };
            const h = {
                admin: "",
                newAdmin: "",
                contract: ""
            };
            t.MsgUpdateContractAdmin = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.admin && t.uint32(10).string(e.admin), "" !== e.newAdmin && t.uint32(18).string(e.newAdmin), "" !== e.contract && t.uint32(26).string(e.contract), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, h);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.admin = n.string();
                                break;
                            case 2:
                                a.newAdmin = n.string();
                                break;
                            case 3:
                                a.contract = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.admin && null !== e.admin ? t.admin = String(e.admin) : t.admin = "", void 0 !== e.newAdmin && null !== e.newAdmin ? t.newAdmin = String(e.newAdmin) : t.newAdmin = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.admin && (t.admin = e.admin), void 0 !== e.newAdmin && (t.newAdmin = e.newAdmin), void 0 !== e.contract && (t.contract = e.contract), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.admin && null !== e.admin ? t.admin = e.admin : t.admin = "", void 0 !== e.newAdmin && null !== e.newAdmin ? t.newAdmin = e.newAdmin : t.newAdmin = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", t
                }
            };
            const p = {};
            t.MsgUpdateContractAdminResponse = {
                encode: (e, t = i.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, p);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return a
                },
                fromJSON: e => Object.assign({}, p),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, p)
            };
            const b = {
                admin: "",
                contract: ""
            };
            t.MsgClearContractAdmin = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.admin && t.uint32(10).string(e.admin), "" !== e.contract && t.uint32(18).string(e.contract), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, b);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.admin = n.string();
                                break;
                            case 2:
                                a.contract = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.admin && null !== e.admin ? t.admin = String(e.admin) : t.admin = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.admin && (t.admin = e.admin), void 0 !== e.contract && (t.contract = e.contract), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.admin && null !== e.admin ? t.admin = e.admin : t.admin = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", t
                }
            };
            const C = {};
            t.MsgClearContractAdminResponse = {
                encode: (e, t = i.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, C);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return a
                },
                fromJSON: e => Object.assign({}, C),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, C)
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.StoreCode = this.StoreCode.bind(this), this.MigrateCode = this.MigrateCode.bind(this), this.InstantiateContract = this.InstantiateContract.bind(this), this.ExecuteContract = this.ExecuteContract.bind(this), this.MigrateContract = this.MigrateContract.bind(this), this.UpdateContractAdmin = this.UpdateContractAdmin.bind(this), this.ClearContractAdmin = this.ClearContractAdmin.bind(this)
                }
                StoreCode(e) {
                    const n = t.MsgStoreCode.encode(e).finish();
                    return this.rpc.request("terra.wasm.v1beta1.Msg", "StoreCode", n).then(e => t.MsgStoreCodeResponse.decode(new i.default.Reader(e)))
                }
                MigrateCode(e) {
                    const n = t.MsgMigrateCode.encode(e).finish();
                    return this.rpc.request("terra.wasm.v1beta1.Msg", "MigrateCode", n).then(e => t.MsgMigrateCodeResponse.decode(new i.default.Reader(e)))
                }
                InstantiateContract(e) {
                    const n = t.MsgInstantiateContract.encode(e).finish();
                    return this.rpc.request("terra.wasm.v1beta1.Msg", "InstantiateContract", n).then(e => t.MsgInstantiateContractResponse.decode(new i.default.Reader(e)))
                }
                ExecuteContract(e) {
                    const n = t.MsgExecuteContract.encode(e).finish();
                    return this.rpc.request("terra.wasm.v1beta1.Msg", "ExecuteContract", n).then(e => t.MsgExecuteContractResponse.decode(new i.default.Reader(e)))
                }
                MigrateContract(e) {
                    const n = t.MsgMigrateContract.encode(e).finish();
                    return this.rpc.request("terra.wasm.v1beta1.Msg", "MigrateContract", n).then(e => t.MsgMigrateContractResponse.decode(new i.default.Reader(e)))
                }
                UpdateContractAdmin(e) {
                    const n = t.MsgUpdateContractAdmin.encode(e).finish();
                    return this.rpc.request("terra.wasm.v1beta1.Msg", "UpdateContractAdmin", n).then(e => t.MsgUpdateContractAdminResponse.decode(new i.default.Reader(e)))
                }
                ClearContractAdmin(e) {
                    const n = t.MsgClearContractAdmin.encode(e).finish();
                    return this.rpc.request("terra.wasm.v1beta1.Msg", "ClearContractAdmin", n).then(e => t.MsgClearContractAdminResponse.decode(new i.default.Reader(e)))
                }
            };
            var O = (() => {
                if (void 0 !== O) return O;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const R = O.atob || (e => O.Buffer.from(e, "base64").toString("binary"));

            function S(e) {
                const t = R(e),
                    n = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                return n
            }
            const M = O.btoa || (e => O.Buffer.from(e, "binary").toString("base64"));

            function k(e) {
                const t = [];
                for (const n of e) t.push(String.fromCharCode(n));
                return M(t.join(""))
            }
            i.default.util.Long !== a.default && (i.default.util.Long = a.default, i.default.configure())
        },
        3839: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VestingSchedule = t.Schedule = t.LazyGradedVestingAccount = t.protobufPackage = void 0;
            const a = o(n(1)),
                i = o(n(8)),
                r = n(3840);
            t.protobufPackage = "terra.vesting.v1beta1";
            const s = {};
            t.LazyGradedVestingAccount = {
                encode(e, n = i.default.Writer.create()) {
                    void 0 !== e.baseVestingAccount && r.BaseVestingAccount.encode(e.baseVestingAccount, n.uint32(10).fork()).ldelim();
                    for (const o of e.vestingSchedules) t.VestingSchedule.encode(o, n.uint32(18).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === n ? o.len : o.pos + n;
                    const d = Object.assign({}, s);
                    for (d.vestingSchedules = []; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                d.baseVestingAccount = r.BaseVestingAccount.decode(o, o.uint32());
                                break;
                            case 2:
                                d.vestingSchedules.push(t.VestingSchedule.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return d
                },
                fromJSON(e) {
                    const n = Object.assign({}, s);
                    if (n.vestingSchedules = [], void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? n.baseVestingAccount = r.BaseVestingAccount.fromJSON(e.baseVestingAccount) : n.baseVestingAccount = void 0, void 0 !== e.vestingSchedules && null !== e.vestingSchedules)
                        for (const o of e.vestingSchedules) n.vestingSchedules.push(t.VestingSchedule.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.baseVestingAccount && (n.baseVestingAccount = e.baseVestingAccount ? r.BaseVestingAccount.toJSON(e.baseVestingAccount) : void 0), e.vestingSchedules ? n.vestingSchedules = e.vestingSchedules.map(e => e ? t.VestingSchedule.toJSON(e) : void 0) : n.vestingSchedules = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, s);
                    if (n.vestingSchedules = [], void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? n.baseVestingAccount = r.BaseVestingAccount.fromPartial(e.baseVestingAccount) : n.baseVestingAccount = void 0, void 0 !== e.vestingSchedules && null !== e.vestingSchedules)
                        for (const o of e.vestingSchedules) n.vestingSchedules.push(t.VestingSchedule.fromPartial(o));
                    return n
                }
            };
            const d = {
                startTime: a.default.ZERO,
                endTime: a.default.ZERO,
                ratio: ""
            };
            t.Schedule = {
                encode: (e, t = i.default.Writer.create()) => (e.startTime.isZero() || t.uint32(8).int64(e.startTime), e.endTime.isZero() || t.uint32(16).int64(e.endTime), "" !== e.ratio && t.uint32(26).string(e.ratio), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.startTime = n.int64();
                                break;
                            case 2:
                                a.endTime = n.int64();
                                break;
                            case 3:
                                a.ratio = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.startTime && null !== e.startTime ? t.startTime = a.default.fromString(e.startTime) : t.startTime = a.default.ZERO, void 0 !== e.endTime && null !== e.endTime ? t.endTime = a.default.fromString(e.endTime) : t.endTime = a.default.ZERO, void 0 !== e.ratio && null !== e.ratio ? t.ratio = String(e.ratio) : t.ratio = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.startTime && (t.startTime = (e.startTime || a.default.ZERO).toString()), void 0 !== e.endTime && (t.endTime = (e.endTime || a.default.ZERO).toString()), void 0 !== e.ratio && (t.ratio = e.ratio), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.startTime && null !== e.startTime ? t.startTime = e.startTime : t.startTime = a.default.ZERO, void 0 !== e.endTime && null !== e.endTime ? t.endTime = e.endTime : t.endTime = a.default.ZERO, void 0 !== e.ratio && null !== e.ratio ? t.ratio = e.ratio : t.ratio = "", t
                }
            };
            const c = {
                denom: ""
            };
            t.VestingSchedule = {
                encode(e, n = i.default.Writer.create()) {
                    "" !== e.denom && n.uint32(10).string(e.denom);
                    for (const o of e.schedules) t.Schedule.encode(o, n.uint32(18).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, c);
                    for (r.schedules = []; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.denom = o.string();
                                break;
                            case 2:
                                r.schedules.push(t.Schedule.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, c);
                    if (n.schedules = [], void 0 !== e.denom && null !== e.denom ? n.denom = String(e.denom) : n.denom = "", void 0 !== e.schedules && null !== e.schedules)
                        for (const o of e.schedules) n.schedules.push(t.Schedule.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.denom && (n.denom = e.denom), e.schedules ? n.schedules = e.schedules.map(e => e ? t.Schedule.toJSON(e) : void 0) : n.schedules = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, c);
                    if (n.schedules = [], void 0 !== e.denom && null !== e.denom ? n.denom = e.denom : n.denom = "", void 0 !== e.schedules && null !== e.schedules)
                        for (const o of e.schedules) n.schedules.push(t.Schedule.fromPartial(o));
                    return n
                }
            }, i.default.util.Long !== a.default && (i.default.util.Long = a.default, i.default.configure())
        },
        3846: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EpochInitialIssuance = t.EpochTaxProceeds = t.PolicyConstraints = t.Params = t.protobufPackage = void 0;
            const a = o(n(1)),
                i = o(n(8)),
                r = n(349);
            t.protobufPackage = "terra.treasury.v1beta1";
            const s = {
                seigniorageBurdenTarget: "",
                miningIncrement: "",
                windowShort: a.default.UZERO,
                windowLong: a.default.UZERO,
                windowProbation: a.default.UZERO
            };
            t.Params = {
                encode: (e, n = i.default.Writer.create()) => (void 0 !== e.taxPolicy && t.PolicyConstraints.encode(e.taxPolicy, n.uint32(10).fork()).ldelim(), void 0 !== e.rewardPolicy && t.PolicyConstraints.encode(e.rewardPolicy, n.uint32(18).fork()).ldelim(), "" !== e.seigniorageBurdenTarget && n.uint32(26).string(e.seigniorageBurdenTarget), "" !== e.miningIncrement && n.uint32(34).string(e.miningIncrement), e.windowShort.isZero() || n.uint32(40).uint64(e.windowShort), e.windowLong.isZero() || n.uint32(48).uint64(e.windowLong), e.windowProbation.isZero() || n.uint32(56).uint64(e.windowProbation), n),
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, s);
                    for (; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.taxPolicy = t.PolicyConstraints.decode(o, o.uint32());
                                break;
                            case 2:
                                r.rewardPolicy = t.PolicyConstraints.decode(o, o.uint32());
                                break;
                            case 3:
                                r.seigniorageBurdenTarget = o.string();
                                break;
                            case 4:
                                r.miningIncrement = o.string();
                                break;
                            case 5:
                                r.windowShort = o.uint64();
                                break;
                            case 6:
                                r.windowLong = o.uint64();
                                break;
                            case 7:
                                r.windowProbation = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, s);
                    return void 0 !== e.taxPolicy && null !== e.taxPolicy ? n.taxPolicy = t.PolicyConstraints.fromJSON(e.taxPolicy) : n.taxPolicy = void 0, void 0 !== e.rewardPolicy && null !== e.rewardPolicy ? n.rewardPolicy = t.PolicyConstraints.fromJSON(e.rewardPolicy) : n.rewardPolicy = void 0, void 0 !== e.seigniorageBurdenTarget && null !== e.seigniorageBurdenTarget ? n.seigniorageBurdenTarget = String(e.seigniorageBurdenTarget) : n.seigniorageBurdenTarget = "", void 0 !== e.miningIncrement && null !== e.miningIncrement ? n.miningIncrement = String(e.miningIncrement) : n.miningIncrement = "", void 0 !== e.windowShort && null !== e.windowShort ? n.windowShort = a.default.fromString(e.windowShort) : n.windowShort = a.default.UZERO, void 0 !== e.windowLong && null !== e.windowLong ? n.windowLong = a.default.fromString(e.windowLong) : n.windowLong = a.default.UZERO, void 0 !== e.windowProbation && null !== e.windowProbation ? n.windowProbation = a.default.fromString(e.windowProbation) : n.windowProbation = a.default.UZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.taxPolicy && (n.taxPolicy = e.taxPolicy ? t.PolicyConstraints.toJSON(e.taxPolicy) : void 0), void 0 !== e.rewardPolicy && (n.rewardPolicy = e.rewardPolicy ? t.PolicyConstraints.toJSON(e.rewardPolicy) : void 0), void 0 !== e.seigniorageBurdenTarget && (n.seigniorageBurdenTarget = e.seigniorageBurdenTarget), void 0 !== e.miningIncrement && (n.miningIncrement = e.miningIncrement), void 0 !== e.windowShort && (n.windowShort = (e.windowShort || a.default.UZERO).toString()), void 0 !== e.windowLong && (n.windowLong = (e.windowLong || a.default.UZERO).toString()), void 0 !== e.windowProbation && (n.windowProbation = (e.windowProbation || a.default.UZERO).toString()), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, s);
                    return void 0 !== e.taxPolicy && null !== e.taxPolicy ? n.taxPolicy = t.PolicyConstraints.fromPartial(e.taxPolicy) : n.taxPolicy = void 0, void 0 !== e.rewardPolicy && null !== e.rewardPolicy ? n.rewardPolicy = t.PolicyConstraints.fromPartial(e.rewardPolicy) : n.rewardPolicy = void 0, void 0 !== e.seigniorageBurdenTarget && null !== e.seigniorageBurdenTarget ? n.seigniorageBurdenTarget = e.seigniorageBurdenTarget : n.seigniorageBurdenTarget = "", void 0 !== e.miningIncrement && null !== e.miningIncrement ? n.miningIncrement = e.miningIncrement : n.miningIncrement = "", void 0 !== e.windowShort && null !== e.windowShort ? n.windowShort = e.windowShort : n.windowShort = a.default.UZERO, void 0 !== e.windowLong && null !== e.windowLong ? n.windowLong = e.windowLong : n.windowLong = a.default.UZERO, void 0 !== e.windowProbation && null !== e.windowProbation ? n.windowProbation = e.windowProbation : n.windowProbation = a.default.UZERO, n
                }
            };
            const d = {
                rateMin: "",
                rateMax: "",
                changeRateMax: ""
            };
            t.PolicyConstraints = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.rateMin && t.uint32(10).string(e.rateMin), "" !== e.rateMax && t.uint32(18).string(e.rateMax), void 0 !== e.cap && r.Coin.encode(e.cap, t.uint32(26).fork()).ldelim(), "" !== e.changeRateMax && t.uint32(34).string(e.changeRateMax), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.rateMin = n.string();
                                break;
                            case 2:
                                a.rateMax = n.string();
                                break;
                            case 3:
                                a.cap = r.Coin.decode(n, n.uint32());
                                break;
                            case 4:
                                a.changeRateMax = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.rateMin && null !== e.rateMin ? t.rateMin = String(e.rateMin) : t.rateMin = "", void 0 !== e.rateMax && null !== e.rateMax ? t.rateMax = String(e.rateMax) : t.rateMax = "", void 0 !== e.cap && null !== e.cap ? t.cap = r.Coin.fromJSON(e.cap) : t.cap = void 0, void 0 !== e.changeRateMax && null !== e.changeRateMax ? t.changeRateMax = String(e.changeRateMax) : t.changeRateMax = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.rateMin && (t.rateMin = e.rateMin), void 0 !== e.rateMax && (t.rateMax = e.rateMax), void 0 !== e.cap && (t.cap = e.cap ? r.Coin.toJSON(e.cap) : void 0), void 0 !== e.changeRateMax && (t.changeRateMax = e.changeRateMax), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.rateMin && null !== e.rateMin ? t.rateMin = e.rateMin : t.rateMin = "", void 0 !== e.rateMax && null !== e.rateMax ? t.rateMax = e.rateMax : t.rateMax = "", void 0 !== e.cap && null !== e.cap ? t.cap = r.Coin.fromPartial(e.cap) : t.cap = void 0, void 0 !== e.changeRateMax && null !== e.changeRateMax ? t.changeRateMax = e.changeRateMax : t.changeRateMax = "", t
                }
            };
            const c = {};
            t.EpochTaxProceeds = {
                encode(e, t = i.default.Writer.create()) {
                    for (const n of e.taxProceeds) r.Coin.encode(n, t.uint32(10).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, c);
                    for (a.taxProceeds = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.taxProceeds.push(r.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    if (t.taxProceeds = [], void 0 !== e.taxProceeds && null !== e.taxProceeds)
                        for (const n of e.taxProceeds) t.taxProceeds.push(r.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.taxProceeds ? t.taxProceeds = e.taxProceeds.map(e => e ? r.Coin.toJSON(e) : void 0) : t.taxProceeds = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    if (t.taxProceeds = [], void 0 !== e.taxProceeds && null !== e.taxProceeds)
                        for (const n of e.taxProceeds) t.taxProceeds.push(r.Coin.fromPartial(n));
                    return t
                }
            };
            const l = {};
            t.EpochInitialIssuance = {
                encode(e, t = i.default.Writer.create()) {
                    for (const n of e.issuance) r.Coin.encode(n, t.uint32(10).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const a = Object.assign({}, l);
                    for (a.issuance = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.issuance.push(r.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    if (t.issuance = [], void 0 !== e.issuance && null !== e.issuance)
                        for (const n of e.issuance) t.issuance.push(r.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.issuance ? t.issuance = e.issuance.map(e => e ? r.Coin.toJSON(e) : void 0) : t.issuance = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    if (t.issuance = [], void 0 !== e.issuance && null !== e.issuance)
                        for (const n of e.issuance) t.issuance.push(r.Coin.fromPartial(n));
                    return t
                }
            }, i.default.util.Long !== a.default && (i.default.util.Long = a.default, i.default.configure())
        }
    }
]);