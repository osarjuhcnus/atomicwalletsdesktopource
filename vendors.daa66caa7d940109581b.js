(window.webpackJsonp = window.webpackJsonp || []).push([
    [95], {
        113: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Any = t.protobufPackage = void 0;
            const i = n(o(1)),
                a = n(o(8));
            t.protobufPackage = "google.protobuf";
            const s = {
                typeUrl: ""
            };
            t.Any = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.typeUrl && t.uint32(10).string(e.typeUrl), 0 !== e.value.length && t.uint32(18).bytes(e.value), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, s);
                    for (i.value = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.typeUrl = o.string();
                                break;
                            case 2:
                                i.value = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, s);
                    return t.value = new Uint8Array, void 0 !== e.typeUrl && null !== e.typeUrl ? t.typeUrl = String(e.typeUrl) : t.typeUrl = "", void 0 !== e.value && null !== e.value && (t.value = function(e) {
                        const t = d(e),
                            o = new Uint8Array(t.length);
                        for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                        return o
                    }(e.value)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.typeUrl && (t.typeUrl = e.typeUrl), void 0 !== e.value && (t.value = function(e) {
                        const t = [];
                        for (const o of e) t.push(String.fromCharCode(o));
                        return l(t.join(""))
                    }(void 0 !== e.value ? e.value : new Uint8Array)), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, s);
                    return n.typeUrl = null !== (t = e.typeUrl) && void 0 !== t ? t : "", n.value = null !== (o = e.value) && void 0 !== o ? o : new Uint8Array, n
                }
            };
            var r = (() => {
                if (void 0 !== r) return r;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const d = r.atob || (e => r.Buffer.from(e, "base64").toString("binary"));
            const l = r.btoa || (e => r.Buffer.from(e, "binary").toString("base64"));
            a.default.util.Long !== i.default && (a.default.util.Long = i.default, a.default.configure())
        },
        1148: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Duration = t.protobufPackage = void 0;
            const i = n(o(1)),
                a = n(o(8));
            t.protobufPackage = "google.protobuf";
            const s = {
                seconds: i.default.ZERO,
                nanos: 0
            };
            t.Duration = {
                encode: (e, t = a.default.Writer.create()) => (e.seconds.isZero() || t.uint32(8).int64(e.seconds), 0 !== e.nanos && t.uint32(16).int32(e.nanos), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, s);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.seconds = o.int64();
                                break;
                            case 2:
                                i.nanos = o.int32();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, s);
                    return void 0 !== e.seconds && null !== e.seconds ? t.seconds = i.default.fromString(e.seconds) : t.seconds = i.default.ZERO, void 0 !== e.nanos && null !== e.nanos ? t.nanos = Number(e.nanos) : t.nanos = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.seconds && (t.seconds = (e.seconds || i.default.ZERO).toString()), void 0 !== e.nanos && (t.nanos = e.nanos), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, s);
                    return void 0 !== e.seconds && null !== e.seconds ? o.seconds = e.seconds : o.seconds = i.default.ZERO, o.nanos = null !== (t = e.nanos) && void 0 !== t ? t : 0, o
                }
            }, a.default.util.Long !== i.default && (a.default.util.Long = i.default, a.default.configure())
        },
        2047: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Pool = t.RedelegationResponse = t.RedelegationEntryResponse = t.DelegationResponse = t.Params = t.Redelegation = t.RedelegationEntry = t.UnbondingDelegationEntry = t.UnbondingDelegation = t.Delegation = t.DVVTriplets = t.DVVTriplet = t.DVPairs = t.DVPair = t.ValAddresses = t.Validator = t.Description = t.Commission = t.CommissionRates = t.HistoricalInfo = t.bondStatusToJSON = t.bondStatusFromJSON = t.BondStatus = t.protobufPackage = void 0;
            const i = n(o(1)),
                a = n(o(8)),
                s = o(2045),
                r = o(113),
                d = o(1148),
                l = o(160),
                u = o(526);
            var c;

            function g(e) {
                switch (e) {
                    case 0:
                    case "BOND_STATUS_UNSPECIFIED":
                        return c.BOND_STATUS_UNSPECIFIED;
                    case 1:
                    case "BOND_STATUS_UNBONDED":
                        return c.BOND_STATUS_UNBONDED;
                    case 2:
                    case "BOND_STATUS_UNBONDING":
                        return c.BOND_STATUS_UNBONDING;
                    case 3:
                    case "BOND_STATUS_BONDED":
                        return c.BOND_STATUS_BONDED;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return c.UNRECOGNIZED
                }
            }

            function f(e) {
                switch (e) {
                    case c.BOND_STATUS_UNSPECIFIED:
                        return "BOND_STATUS_UNSPECIFIED";
                    case c.BOND_STATUS_UNBONDED:
                        return "BOND_STATUS_UNBONDED";
                    case c.BOND_STATUS_UNBONDING:
                        return "BOND_STATUS_UNBONDING";
                    case c.BOND_STATUS_BONDED:
                        return "BOND_STATUS_BONDED";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "cosmos.staking.v1beta1",
                function(e) {
                    e[e.BOND_STATUS_UNSPECIFIED = 0] = "BOND_STATUS_UNSPECIFIED", e[e.BOND_STATUS_UNBONDED = 1] = "BOND_STATUS_UNBONDED", e[e.BOND_STATUS_UNBONDING = 2] = "BOND_STATUS_UNBONDING", e[e.BOND_STATUS_BONDED = 3] = "BOND_STATUS_BONDED", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(c = t.BondStatus || (t.BondStatus = {})), t.bondStatusFromJSON = g, t.bondStatusToJSON = f;
            const v = {};
            t.HistoricalInfo = {
                encode(e, o = a.default.Writer.create()) {
                    void 0 !== e.header && s.Header.encode(e.header, o.uint32(10).fork()).ldelim();
                    for (const n of e.valset) t.Validator.encode(n, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const r = Object.assign({}, v);
                    for (r.valset = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.header = s.Header.decode(n, n.uint32());
                                break;
                            case 2:
                                r.valset.push(t.Validator.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, v);
                    if (o.valset = [], void 0 !== e.header && null !== e.header ? o.header = s.Header.fromJSON(e.header) : o.header = void 0, void 0 !== e.valset && null !== e.valset)
                        for (const n of e.valset) o.valset.push(t.Validator.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.header && (o.header = e.header ? s.Header.toJSON(e.header) : void 0), e.valset ? o.valset = e.valset.map(e => e ? t.Validator.toJSON(e) : void 0) : o.valset = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, v);
                    if (void 0 !== e.header && null !== e.header ? o.header = s.Header.fromPartial(e.header) : o.header = void 0, o.valset = [], void 0 !== e.valset && null !== e.valset)
                        for (const n of e.valset) o.valset.push(t.Validator.fromPartial(n));
                    return o
                }
            };
            const p = {
                rate: "",
                maxRate: "",
                maxChangeRate: ""
            };
            t.CommissionRates = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.rate && t.uint32(10).string(e.rate), "" !== e.maxRate && t.uint32(18).string(e.maxRate), "" !== e.maxChangeRate && t.uint32(26).string(e.maxChangeRate), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, p);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.rate = o.string();
                                break;
                            case 2:
                                i.maxRate = o.string();
                                break;
                            case 3:
                                i.maxChangeRate = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, p);
                    return void 0 !== e.rate && null !== e.rate ? t.rate = String(e.rate) : t.rate = "", void 0 !== e.maxRate && null !== e.maxRate ? t.maxRate = String(e.maxRate) : t.maxRate = "", void 0 !== e.maxChangeRate && null !== e.maxChangeRate ? t.maxChangeRate = String(e.maxChangeRate) : t.maxChangeRate = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.rate && (t.rate = e.rate), void 0 !== e.maxRate && (t.maxRate = e.maxRate), void 0 !== e.maxChangeRate && (t.maxChangeRate = e.maxChangeRate), t
                },
                fromPartial(e) {
                    var t, o, n;
                    const i = Object.assign({}, p);
                    return i.rate = null !== (t = e.rate) && void 0 !== t ? t : "", i.maxRate = null !== (o = e.maxRate) && void 0 !== o ? o : "", i.maxChangeRate = null !== (n = e.maxChangeRate) && void 0 !== n ? n : "", i
                }
            };
            const m = {};
            t.Commission = {
                encode: (e, o = a.default.Writer.create()) => (void 0 !== e.commissionRates && t.CommissionRates.encode(e.commissionRates, o.uint32(10).fork()).ldelim(), void 0 !== e.updateTime && u.Timestamp.encode(w(e.updateTime), o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, m);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.commissionRates = t.CommissionRates.decode(n, n.uint32());
                                break;
                            case 2:
                                s.updateTime = _(u.Timestamp.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, m);
                    return void 0 !== e.commissionRates && null !== e.commissionRates ? o.commissionRates = t.CommissionRates.fromJSON(e.commissionRates) : o.commissionRates = void 0, void 0 !== e.updateTime && null !== e.updateTime ? o.updateTime = B(e.updateTime) : o.updateTime = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.commissionRates && (o.commissionRates = e.commissionRates ? t.CommissionRates.toJSON(e.commissionRates) : void 0), void 0 !== e.updateTime && (o.updateTime = e.updateTime.toISOString()), o
                },
                fromPartial(e) {
                    var o;
                    const n = Object.assign({}, m);
                    return void 0 !== e.commissionRates && null !== e.commissionRates ? n.commissionRates = t.CommissionRates.fromPartial(e.commissionRates) : n.commissionRates = void 0, n.updateTime = null !== (o = e.updateTime) && void 0 !== o ? o : void 0, n
                }
            };
            const b = {
                moniker: "",
                identity: "",
                website: "",
                securityContact: "",
                details: ""
            };
            t.Description = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.moniker && t.uint32(10).string(e.moniker), "" !== e.identity && t.uint32(18).string(e.identity), "" !== e.website && t.uint32(26).string(e.website), "" !== e.securityContact && t.uint32(34).string(e.securityContact), "" !== e.details && t.uint32(42).string(e.details), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, b);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.moniker = o.string();
                                break;
                            case 2:
                                i.identity = o.string();
                                break;
                            case 3:
                                i.website = o.string();
                                break;
                            case 4:
                                i.securityContact = o.string();
                                break;
                            case 5:
                                i.details = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.moniker && null !== e.moniker ? t.moniker = String(e.moniker) : t.moniker = "", void 0 !== e.identity && null !== e.identity ? t.identity = String(e.identity) : t.identity = "", void 0 !== e.website && null !== e.website ? t.website = String(e.website) : t.website = "", void 0 !== e.securityContact && null !== e.securityContact ? t.securityContact = String(e.securityContact) : t.securityContact = "", void 0 !== e.details && null !== e.details ? t.details = String(e.details) : t.details = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.moniker && (t.moniker = e.moniker), void 0 !== e.identity && (t.identity = e.identity), void 0 !== e.website && (t.website = e.website), void 0 !== e.securityContact && (t.securityContact = e.securityContact), void 0 !== e.details && (t.details = e.details), t
                },
                fromPartial(e) {
                    var t, o, n, i, a;
                    const s = Object.assign({}, b);
                    return s.moniker = null !== (t = e.moniker) && void 0 !== t ? t : "", s.identity = null !== (o = e.identity) && void 0 !== o ? o : "", s.website = null !== (n = e.website) && void 0 !== n ? n : "", s.securityContact = null !== (i = e.securityContact) && void 0 !== i ? i : "", s.details = null !== (a = e.details) && void 0 !== a ? a : "", s
                }
            };
            const O = {
                operatorAddress: "",
                jailed: !1,
                status: 0,
                tokens: "",
                delegatorShares: "",
                unbondingHeight: i.default.ZERO,
                minSelfDelegation: ""
            };
            t.Validator = {
                encode: (e, o = a.default.Writer.create()) => ("" !== e.operatorAddress && o.uint32(10).string(e.operatorAddress), void 0 !== e.consensusPubkey && r.Any.encode(e.consensusPubkey, o.uint32(18).fork()).ldelim(), !0 === e.jailed && o.uint32(24).bool(e.jailed), 0 !== e.status && o.uint32(32).int32(e.status), "" !== e.tokens && o.uint32(42).string(e.tokens), "" !== e.delegatorShares && o.uint32(50).string(e.delegatorShares), void 0 !== e.description && t.Description.encode(e.description, o.uint32(58).fork()).ldelim(), e.unbondingHeight.isZero() || o.uint32(64).int64(e.unbondingHeight), void 0 !== e.unbondingTime && u.Timestamp.encode(w(e.unbondingTime), o.uint32(74).fork()).ldelim(), void 0 !== e.commission && t.Commission.encode(e.commission, o.uint32(82).fork()).ldelim(), "" !== e.minSelfDelegation && o.uint32(90).string(e.minSelfDelegation), o),
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, O);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.operatorAddress = n.string();
                                break;
                            case 2:
                                s.consensusPubkey = r.Any.decode(n, n.uint32());
                                break;
                            case 3:
                                s.jailed = n.bool();
                                break;
                            case 4:
                                s.status = n.int32();
                                break;
                            case 5:
                                s.tokens = n.string();
                                break;
                            case 6:
                                s.delegatorShares = n.string();
                                break;
                            case 7:
                                s.description = t.Description.decode(n, n.uint32());
                                break;
                            case 8:
                                s.unbondingHeight = n.int64();
                                break;
                            case 9:
                                s.unbondingTime = _(u.Timestamp.decode(n, n.uint32()));
                                break;
                            case 10:
                                s.commission = t.Commission.decode(n, n.uint32());
                                break;
                            case 11:
                                s.minSelfDelegation = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, O);
                    return void 0 !== e.operatorAddress && null !== e.operatorAddress ? o.operatorAddress = String(e.operatorAddress) : o.operatorAddress = "", void 0 !== e.consensusPubkey && null !== e.consensusPubkey ? o.consensusPubkey = r.Any.fromJSON(e.consensusPubkey) : o.consensusPubkey = void 0, void 0 !== e.jailed && null !== e.jailed ? o.jailed = Boolean(e.jailed) : o.jailed = !1, void 0 !== e.status && null !== e.status ? o.status = g(e.status) : o.status = 0, void 0 !== e.tokens && null !== e.tokens ? o.tokens = String(e.tokens) : o.tokens = "", void 0 !== e.delegatorShares && null !== e.delegatorShares ? o.delegatorShares = String(e.delegatorShares) : o.delegatorShares = "", void 0 !== e.description && null !== e.description ? o.description = t.Description.fromJSON(e.description) : o.description = void 0, void 0 !== e.unbondingHeight && null !== e.unbondingHeight ? o.unbondingHeight = i.default.fromString(e.unbondingHeight) : o.unbondingHeight = i.default.ZERO, void 0 !== e.unbondingTime && null !== e.unbondingTime ? o.unbondingTime = B(e.unbondingTime) : o.unbondingTime = void 0, void 0 !== e.commission && null !== e.commission ? o.commission = t.Commission.fromJSON(e.commission) : o.commission = void 0, void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation ? o.minSelfDelegation = String(e.minSelfDelegation) : o.minSelfDelegation = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.operatorAddress && (o.operatorAddress = e.operatorAddress), void 0 !== e.consensusPubkey && (o.consensusPubkey = e.consensusPubkey ? r.Any.toJSON(e.consensusPubkey) : void 0), void 0 !== e.jailed && (o.jailed = e.jailed), void 0 !== e.status && (o.status = f(e.status)), void 0 !== e.tokens && (o.tokens = e.tokens), void 0 !== e.delegatorShares && (o.delegatorShares = e.delegatorShares), void 0 !== e.description && (o.description = e.description ? t.Description.toJSON(e.description) : void 0), void 0 !== e.unbondingHeight && (o.unbondingHeight = (e.unbondingHeight || i.default.ZERO).toString()), void 0 !== e.unbondingTime && (o.unbondingTime = e.unbondingTime.toISOString()), void 0 !== e.commission && (o.commission = e.commission ? t.Commission.toJSON(e.commission) : void 0), void 0 !== e.minSelfDelegation && (o.minSelfDelegation = e.minSelfDelegation), o
                },
                fromPartial(e) {
                    var o, n, a, s, d, l, u;
                    const c = Object.assign({}, O);
                    return c.operatorAddress = null !== (o = e.operatorAddress) && void 0 !== o ? o : "", void 0 !== e.consensusPubkey && null !== e.consensusPubkey ? c.consensusPubkey = r.Any.fromPartial(e.consensusPubkey) : c.consensusPubkey = void 0, c.jailed = null !== (n = e.jailed) && void 0 !== n && n, c.status = null !== (a = e.status) && void 0 !== a ? a : 0, c.tokens = null !== (s = e.tokens) && void 0 !== s ? s : "", c.delegatorShares = null !== (d = e.delegatorShares) && void 0 !== d ? d : "", void 0 !== e.description && null !== e.description ? c.description = t.Description.fromPartial(e.description) : c.description = void 0, void 0 !== e.unbondingHeight && null !== e.unbondingHeight ? c.unbondingHeight = e.unbondingHeight : c.unbondingHeight = i.default.ZERO, c.unbondingTime = null !== (l = e.unbondingTime) && void 0 !== l ? l : void 0, void 0 !== e.commission && null !== e.commission ? c.commission = t.Commission.fromPartial(e.commission) : c.commission = void 0, c.minSelfDelegation = null !== (u = e.minSelfDelegation) && void 0 !== u ? u : "", c
                }
            };
            const A = {
                addresses: ""
            };
            t.ValAddresses = {
                encode(e, t = a.default.Writer.create()) {
                    for (const o of e.addresses) t.uint32(10).string(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, A);
                    for (i.addresses = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.addresses.push(o.string());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, A);
                    if (t.addresses = [], void 0 !== e.addresses && null !== e.addresses)
                        for (const o of e.addresses) t.addresses.push(String(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.addresses ? t.addresses = e.addresses.map(e => e) : t.addresses = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, A);
                    if (t.addresses = [], void 0 !== e.addresses && null !== e.addresses)
                        for (const o of e.addresses) t.addresses.push(o);
                    return t
                }
            };
            const S = {
                delegatorAddress: "",
                validatorAddress: ""
            };
            t.DVPair = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && t.uint32(18).string(e.validatorAddress), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, S);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = o.string();
                                break;
                            case 2:
                                i.validatorAddress = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, S);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, S);
                    return n.delegatorAddress = null !== (t = e.delegatorAddress) && void 0 !== t ? t : "", n.validatorAddress = null !== (o = e.validatorAddress) && void 0 !== o ? o : "", n
                }
            };
            const R = {};
            t.DVPairs = {
                encode(e, o = a.default.Writer.create()) {
                    for (const n of e.pairs) t.DVPair.encode(n, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, R);
                    for (s.pairs = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.pairs.push(t.DVPair.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, R);
                    if (o.pairs = [], void 0 !== e.pairs && null !== e.pairs)
                        for (const n of e.pairs) o.pairs.push(t.DVPair.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.pairs ? o.pairs = e.pairs.map(e => e ? t.DVPair.toJSON(e) : void 0) : o.pairs = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, R);
                    if (o.pairs = [], void 0 !== e.pairs && null !== e.pairs)
                        for (const n of e.pairs) o.pairs.push(t.DVPair.fromPartial(n));
                    return o
                }
            };
            const h = {
                delegatorAddress: "",
                validatorSrcAddress: "",
                validatorDstAddress: ""
            };
            t.DVVTriplet = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorSrcAddress && t.uint32(18).string(e.validatorSrcAddress), "" !== e.validatorDstAddress && t.uint32(26).string(e.validatorDstAddress), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, h);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = o.string();
                                break;
                            case 2:
                                i.validatorSrcAddress = o.string();
                                break;
                            case 3:
                                i.validatorDstAddress = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress ? t.validatorSrcAddress = String(e.validatorSrcAddress) : t.validatorSrcAddress = "", void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress ? t.validatorDstAddress = String(e.validatorDstAddress) : t.validatorDstAddress = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorSrcAddress && (t.validatorSrcAddress = e.validatorSrcAddress), void 0 !== e.validatorDstAddress && (t.validatorDstAddress = e.validatorDstAddress), t
                },
                fromPartial(e) {
                    var t, o, n;
                    const i = Object.assign({}, h);
                    return i.delegatorAddress = null !== (t = e.delegatorAddress) && void 0 !== t ? t : "", i.validatorSrcAddress = null !== (o = e.validatorSrcAddress) && void 0 !== o ? o : "", i.validatorDstAddress = null !== (n = e.validatorDstAddress) && void 0 !== n ? n : "", i
                }
            };
            const y = {};
            t.DVVTriplets = {
                encode(e, o = a.default.Writer.create()) {
                    for (const n of e.triplets) t.DVVTriplet.encode(n, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, y);
                    for (s.triplets = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.triplets.push(t.DVVTriplet.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, y);
                    if (o.triplets = [], void 0 !== e.triplets && null !== e.triplets)
                        for (const n of e.triplets) o.triplets.push(t.DVVTriplet.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.triplets ? o.triplets = e.triplets.map(e => e ? t.DVVTriplet.toJSON(e) : void 0) : o.triplets = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, y);
                    if (o.triplets = [], void 0 !== e.triplets && null !== e.triplets)
                        for (const n of e.triplets) o.triplets.push(t.DVVTriplet.fromPartial(n));
                    return o
                }
            };
            const D = {
                delegatorAddress: "",
                validatorAddress: "",
                shares: ""
            };
            t.Delegation = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && t.uint32(18).string(e.validatorAddress), "" !== e.shares && t.uint32(26).string(e.shares), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, D);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = o.string();
                                break;
                            case 2:
                                i.validatorAddress = o.string();
                                break;
                            case 3:
                                i.shares = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, D);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", void 0 !== e.shares && null !== e.shares ? t.shares = String(e.shares) : t.shares = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), void 0 !== e.shares && (t.shares = e.shares), t
                },
                fromPartial(e) {
                    var t, o, n;
                    const i = Object.assign({}, D);
                    return i.delegatorAddress = null !== (t = e.delegatorAddress) && void 0 !== t ? t : "", i.validatorAddress = null !== (o = e.validatorAddress) && void 0 !== o ? o : "", i.shares = null !== (n = e.shares) && void 0 !== n ? n : "", i
                }
            };
            const N = {
                delegatorAddress: "",
                validatorAddress: ""
            };
            t.UnbondingDelegation = {
                encode(e, o = a.default.Writer.create()) {
                    "" !== e.delegatorAddress && o.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && o.uint32(18).string(e.validatorAddress);
                    for (const n of e.entries) t.UnbondingDelegationEntry.encode(n, o.uint32(26).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, N);
                    for (s.entries = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.delegatorAddress = n.string();
                                break;
                            case 2:
                                s.validatorAddress = n.string();
                                break;
                            case 3:
                                s.entries.push(t.UnbondingDelegationEntry.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, N);
                    if (o.entries = [], void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? o.delegatorAddress = String(e.delegatorAddress) : o.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? o.validatorAddress = String(e.validatorAddress) : o.validatorAddress = "", void 0 !== e.entries && null !== e.entries)
                        for (const n of e.entries) o.entries.push(t.UnbondingDelegationEntry.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.delegatorAddress && (o.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (o.validatorAddress = e.validatorAddress), e.entries ? o.entries = e.entries.map(e => e ? t.UnbondingDelegationEntry.toJSON(e) : void 0) : o.entries = [], o
                },
                fromPartial(e) {
                    var o, n;
                    const i = Object.assign({}, N);
                    if (i.delegatorAddress = null !== (o = e.delegatorAddress) && void 0 !== o ? o : "", i.validatorAddress = null !== (n = e.validatorAddress) && void 0 !== n ? n : "", i.entries = [], void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) i.entries.push(t.UnbondingDelegationEntry.fromPartial(o));
                    return i
                }
            };
            const k = {
                creationHeight: i.default.ZERO,
                initialBalance: "",
                balance: ""
            };
            t.UnbondingDelegationEntry = {
                encode: (e, t = a.default.Writer.create()) => (e.creationHeight.isZero() || t.uint32(8).int64(e.creationHeight), void 0 !== e.completionTime && u.Timestamp.encode(w(e.completionTime), t.uint32(18).fork()).ldelim(), "" !== e.initialBalance && t.uint32(26).string(e.initialBalance), "" !== e.balance && t.uint32(34).string(e.balance), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, k);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.creationHeight = o.int64();
                                break;
                            case 2:
                                i.completionTime = _(u.Timestamp.decode(o, o.uint32()));
                                break;
                            case 3:
                                i.initialBalance = o.string();
                                break;
                            case 4:
                                i.balance = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, k);
                    return void 0 !== e.creationHeight && null !== e.creationHeight ? t.creationHeight = i.default.fromString(e.creationHeight) : t.creationHeight = i.default.ZERO, void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = B(e.completionTime) : t.completionTime = void 0, void 0 !== e.initialBalance && null !== e.initialBalance ? t.initialBalance = String(e.initialBalance) : t.initialBalance = "", void 0 !== e.balance && null !== e.balance ? t.balance = String(e.balance) : t.balance = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.creationHeight && (t.creationHeight = (e.creationHeight || i.default.ZERO).toString()), void 0 !== e.completionTime && (t.completionTime = e.completionTime.toISOString()), void 0 !== e.initialBalance && (t.initialBalance = e.initialBalance), void 0 !== e.balance && (t.balance = e.balance), t
                },
                fromPartial(e) {
                    var t, o, n;
                    const a = Object.assign({}, k);
                    return void 0 !== e.creationHeight && null !== e.creationHeight ? a.creationHeight = e.creationHeight : a.creationHeight = i.default.ZERO, a.completionTime = null !== (t = e.completionTime) && void 0 !== t ? t : void 0, a.initialBalance = null !== (o = e.initialBalance) && void 0 !== o ? o : "", a.balance = null !== (n = e.balance) && void 0 !== n ? n : "", a
                }
            };
            const T = {
                creationHeight: i.default.ZERO,
                initialBalance: "",
                sharesDst: ""
            };
            t.RedelegationEntry = {
                encode: (e, t = a.default.Writer.create()) => (e.creationHeight.isZero() || t.uint32(8).int64(e.creationHeight), void 0 !== e.completionTime && u.Timestamp.encode(w(e.completionTime), t.uint32(18).fork()).ldelim(), "" !== e.initialBalance && t.uint32(26).string(e.initialBalance), "" !== e.sharesDst && t.uint32(34).string(e.sharesDst), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, T);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.creationHeight = o.int64();
                                break;
                            case 2:
                                i.completionTime = _(u.Timestamp.decode(o, o.uint32()));
                                break;
                            case 3:
                                i.initialBalance = o.string();
                                break;
                            case 4:
                                i.sharesDst = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, T);
                    return void 0 !== e.creationHeight && null !== e.creationHeight ? t.creationHeight = i.default.fromString(e.creationHeight) : t.creationHeight = i.default.ZERO, void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = B(e.completionTime) : t.completionTime = void 0, void 0 !== e.initialBalance && null !== e.initialBalance ? t.initialBalance = String(e.initialBalance) : t.initialBalance = "", void 0 !== e.sharesDst && null !== e.sharesDst ? t.sharesDst = String(e.sharesDst) : t.sharesDst = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.creationHeight && (t.creationHeight = (e.creationHeight || i.default.ZERO).toString()), void 0 !== e.completionTime && (t.completionTime = e.completionTime.toISOString()), void 0 !== e.initialBalance && (t.initialBalance = e.initialBalance), void 0 !== e.sharesDst && (t.sharesDst = e.sharesDst), t
                },
                fromPartial(e) {
                    var t, o, n;
                    const a = Object.assign({}, T);
                    return void 0 !== e.creationHeight && null !== e.creationHeight ? a.creationHeight = e.creationHeight : a.creationHeight = i.default.ZERO, a.completionTime = null !== (t = e.completionTime) && void 0 !== t ? t : void 0, a.initialBalance = null !== (o = e.initialBalance) && void 0 !== o ? o : "", a.sharesDst = null !== (n = e.sharesDst) && void 0 !== n ? n : "", a
                }
            };
            const P = {
                delegatorAddress: "",
                validatorSrcAddress: "",
                validatorDstAddress: ""
            };
            t.Redelegation = {
                encode(e, o = a.default.Writer.create()) {
                    "" !== e.delegatorAddress && o.uint32(10).string(e.delegatorAddress), "" !== e.validatorSrcAddress && o.uint32(18).string(e.validatorSrcAddress), "" !== e.validatorDstAddress && o.uint32(26).string(e.validatorDstAddress);
                    for (const n of e.entries) t.RedelegationEntry.encode(n, o.uint32(34).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, P);
                    for (s.entries = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.delegatorAddress = n.string();
                                break;
                            case 2:
                                s.validatorSrcAddress = n.string();
                                break;
                            case 3:
                                s.validatorDstAddress = n.string();
                                break;
                            case 4:
                                s.entries.push(t.RedelegationEntry.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, P);
                    if (o.entries = [], void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? o.delegatorAddress = String(e.delegatorAddress) : o.delegatorAddress = "", void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress ? o.validatorSrcAddress = String(e.validatorSrcAddress) : o.validatorSrcAddress = "", void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress ? o.validatorDstAddress = String(e.validatorDstAddress) : o.validatorDstAddress = "", void 0 !== e.entries && null !== e.entries)
                        for (const n of e.entries) o.entries.push(t.RedelegationEntry.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.delegatorAddress && (o.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorSrcAddress && (o.validatorSrcAddress = e.validatorSrcAddress), void 0 !== e.validatorDstAddress && (o.validatorDstAddress = e.validatorDstAddress), e.entries ? o.entries = e.entries.map(e => e ? t.RedelegationEntry.toJSON(e) : void 0) : o.entries = [], o
                },
                fromPartial(e) {
                    var o, n, i;
                    const a = Object.assign({}, P);
                    if (a.delegatorAddress = null !== (o = e.delegatorAddress) && void 0 !== o ? o : "", a.validatorSrcAddress = null !== (n = e.validatorSrcAddress) && void 0 !== n ? n : "", a.validatorDstAddress = null !== (i = e.validatorDstAddress) && void 0 !== i ? i : "", a.entries = [], void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) a.entries.push(t.RedelegationEntry.fromPartial(o));
                    return a
                }
            };
            const J = {
                maxValidators: 0,
                maxEntries: 0,
                historicalEntries: 0,
                bondDenom: ""
            };
            t.Params = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.unbondingTime && d.Duration.encode(e.unbondingTime, t.uint32(10).fork()).ldelim(), 0 !== e.maxValidators && t.uint32(16).uint32(e.maxValidators), 0 !== e.maxEntries && t.uint32(24).uint32(e.maxEntries), 0 !== e.historicalEntries && t.uint32(32).uint32(e.historicalEntries), "" !== e.bondDenom && t.uint32(42).string(e.bondDenom), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, J);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.unbondingTime = d.Duration.decode(o, o.uint32());
                                break;
                            case 2:
                                i.maxValidators = o.uint32();
                                break;
                            case 3:
                                i.maxEntries = o.uint32();
                                break;
                            case 4:
                                i.historicalEntries = o.uint32();
                                break;
                            case 5:
                                i.bondDenom = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, J);
                    return void 0 !== e.unbondingTime && null !== e.unbondingTime ? t.unbondingTime = d.Duration.fromJSON(e.unbondingTime) : t.unbondingTime = void 0, void 0 !== e.maxValidators && null !== e.maxValidators ? t.maxValidators = Number(e.maxValidators) : t.maxValidators = 0, void 0 !== e.maxEntries && null !== e.maxEntries ? t.maxEntries = Number(e.maxEntries) : t.maxEntries = 0, void 0 !== e.historicalEntries && null !== e.historicalEntries ? t.historicalEntries = Number(e.historicalEntries) : t.historicalEntries = 0, void 0 !== e.bondDenom && null !== e.bondDenom ? t.bondDenom = String(e.bondDenom) : t.bondDenom = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.unbondingTime && (t.unbondingTime = e.unbondingTime ? d.Duration.toJSON(e.unbondingTime) : void 0), void 0 !== e.maxValidators && (t.maxValidators = e.maxValidators), void 0 !== e.maxEntries && (t.maxEntries = e.maxEntries), void 0 !== e.historicalEntries && (t.historicalEntries = e.historicalEntries), void 0 !== e.bondDenom && (t.bondDenom = e.bondDenom), t
                },
                fromPartial(e) {
                    var t, o, n, i;
                    const a = Object.assign({}, J);
                    return void 0 !== e.unbondingTime && null !== e.unbondingTime ? a.unbondingTime = d.Duration.fromPartial(e.unbondingTime) : a.unbondingTime = void 0, a.maxValidators = null !== (t = e.maxValidators) && void 0 !== t ? t : 0, a.maxEntries = null !== (o = e.maxEntries) && void 0 !== o ? o : 0, a.historicalEntries = null !== (n = e.historicalEntries) && void 0 !== n ? n : 0, a.bondDenom = null !== (i = e.bondDenom) && void 0 !== i ? i : "", a
                }
            };
            const V = {};
            t.DelegationResponse = {
                encode: (e, o = a.default.Writer.create()) => (void 0 !== e.delegation && t.Delegation.encode(e.delegation, o.uint32(10).fork()).ldelim(), void 0 !== e.balance && l.Coin.encode(e.balance, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, V);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.delegation = t.Delegation.decode(n, n.uint32());
                                break;
                            case 2:
                                s.balance = l.Coin.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, V);
                    return void 0 !== e.delegation && null !== e.delegation ? o.delegation = t.Delegation.fromJSON(e.delegation) : o.delegation = void 0, void 0 !== e.balance && null !== e.balance ? o.balance = l.Coin.fromJSON(e.balance) : o.balance = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.delegation && (o.delegation = e.delegation ? t.Delegation.toJSON(e.delegation) : void 0), void 0 !== e.balance && (o.balance = e.balance ? l.Coin.toJSON(e.balance) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, V);
                    return void 0 !== e.delegation && null !== e.delegation ? o.delegation = t.Delegation.fromPartial(e.delegation) : o.delegation = void 0, void 0 !== e.balance && null !== e.balance ? o.balance = l.Coin.fromPartial(e.balance) : o.balance = void 0, o
                }
            };
            const j = {
                balance: ""
            };
            t.RedelegationEntryResponse = {
                encode: (e, o = a.default.Writer.create()) => (void 0 !== e.redelegationEntry && t.RedelegationEntry.encode(e.redelegationEntry, o.uint32(10).fork()).ldelim(), "" !== e.balance && o.uint32(34).string(e.balance), o),
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, j);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.redelegationEntry = t.RedelegationEntry.decode(n, n.uint32());
                                break;
                            case 4:
                                s.balance = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, j);
                    return void 0 !== e.redelegationEntry && null !== e.redelegationEntry ? o.redelegationEntry = t.RedelegationEntry.fromJSON(e.redelegationEntry) : o.redelegationEntry = void 0, void 0 !== e.balance && null !== e.balance ? o.balance = String(e.balance) : o.balance = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.redelegationEntry && (o.redelegationEntry = e.redelegationEntry ? t.RedelegationEntry.toJSON(e.redelegationEntry) : void 0), void 0 !== e.balance && (o.balance = e.balance), o
                },
                fromPartial(e) {
                    var o;
                    const n = Object.assign({}, j);
                    return void 0 !== e.redelegationEntry && null !== e.redelegationEntry ? n.redelegationEntry = t.RedelegationEntry.fromPartial(e.redelegationEntry) : n.redelegationEntry = void 0, n.balance = null !== (o = e.balance) && void 0 !== o ? o : "", n
                }
            };
            const I = {};
            t.RedelegationResponse = {
                encode(e, o = a.default.Writer.create()) {
                    void 0 !== e.redelegation && t.Redelegation.encode(e.redelegation, o.uint32(10).fork()).ldelim();
                    for (const n of e.entries) t.RedelegationEntryResponse.encode(n, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, I);
                    for (s.entries = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.redelegation = t.Redelegation.decode(n, n.uint32());
                                break;
                            case 2:
                                s.entries.push(t.RedelegationEntryResponse.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, I);
                    if (o.entries = [], void 0 !== e.redelegation && null !== e.redelegation ? o.redelegation = t.Redelegation.fromJSON(e.redelegation) : o.redelegation = void 0, void 0 !== e.entries && null !== e.entries)
                        for (const n of e.entries) o.entries.push(t.RedelegationEntryResponse.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.redelegation && (o.redelegation = e.redelegation ? t.Redelegation.toJSON(e.redelegation) : void 0), e.entries ? o.entries = e.entries.map(e => e ? t.RedelegationEntryResponse.toJSON(e) : void 0) : o.entries = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, I);
                    if (void 0 !== e.redelegation && null !== e.redelegation ? o.redelegation = t.Redelegation.fromPartial(e.redelegation) : o.redelegation = void 0, o.entries = [], void 0 !== e.entries && null !== e.entries)
                        for (const n of e.entries) o.entries.push(t.RedelegationEntryResponse.fromPartial(n));
                    return o
                }
            };
            const E = {
                notBondedTokens: "",
                bondedTokens: ""
            };

            function w(e) {
                var t;
                return {
                    seconds: (t = e.getTime() / 1e3, i.default.fromNumber(t)),
                    nanos: e.getTime() % 1e3 * 1e6
                }
            }

            function _(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }

            function B(e) {
                return e instanceof Date ? e : "string" == typeof e ? new Date(e) : _(u.Timestamp.fromJSON(e))
            }
            t.Pool = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.notBondedTokens && t.uint32(10).string(e.notBondedTokens), "" !== e.bondedTokens && t.uint32(18).string(e.bondedTokens), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, E);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.notBondedTokens = o.string();
                                break;
                            case 2:
                                i.bondedTokens = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, E);
                    return void 0 !== e.notBondedTokens && null !== e.notBondedTokens ? t.notBondedTokens = String(e.notBondedTokens) : t.notBondedTokens = "", void 0 !== e.bondedTokens && null !== e.bondedTokens ? t.bondedTokens = String(e.bondedTokens) : t.bondedTokens = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.notBondedTokens && (t.notBondedTokens = e.notBondedTokens), void 0 !== e.bondedTokens && (t.bondedTokens = e.bondedTokens), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, E);
                    return n.notBondedTokens = null !== (t = e.notBondedTokens) && void 0 !== t ? t : "", n.bondedTokens = null !== (o = e.bondedTokens) && void 0 !== o ? o : "", n
                }
            }, a.default.util.Long !== i.default && (a.default.util.Long = i.default, a.default.configure())
        },
        4290: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PeriodicVestingAccount = t.Period = t.DelayedVestingAccount = t.ContinuousVestingAccount = t.BaseVestingAccount = t.protobufPackage = void 0;
            const i = n(o(1)),
                a = n(o(8)),
                s = o(1146),
                r = o(160);
            t.protobufPackage = "cosmos.vesting.v1beta1";
            const d = {
                endTime: i.default.ZERO
            };
            t.BaseVestingAccount = {
                encode(e, t = a.default.Writer.create()) {
                    void 0 !== e.baseAccount && s.BaseAccount.encode(e.baseAccount, t.uint32(10).fork()).ldelim();
                    for (const o of e.originalVesting) r.Coin.encode(o, t.uint32(18).fork()).ldelim();
                    for (const o of e.delegatedFree) r.Coin.encode(o, t.uint32(26).fork()).ldelim();
                    for (const o of e.delegatedVesting) r.Coin.encode(o, t.uint32(34).fork()).ldelim();
                    return e.endTime.isZero() || t.uint32(40).int64(e.endTime), t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, d);
                    for (i.originalVesting = [], i.delegatedFree = [], i.delegatedVesting = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.baseAccount = s.BaseAccount.decode(o, o.uint32());
                                break;
                            case 2:
                                i.originalVesting.push(r.Coin.decode(o, o.uint32()));
                                break;
                            case 3:
                                i.delegatedFree.push(r.Coin.decode(o, o.uint32()));
                                break;
                            case 4:
                                i.delegatedVesting.push(r.Coin.decode(o, o.uint32()));
                                break;
                            case 5:
                                i.endTime = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    if (t.originalVesting = [], t.delegatedFree = [], t.delegatedVesting = [], void 0 !== e.baseAccount && null !== e.baseAccount ? t.baseAccount = s.BaseAccount.fromJSON(e.baseAccount) : t.baseAccount = void 0, void 0 !== e.originalVesting && null !== e.originalVesting)
                        for (const o of e.originalVesting) t.originalVesting.push(r.Coin.fromJSON(o));
                    if (void 0 !== e.delegatedFree && null !== e.delegatedFree)
                        for (const o of e.delegatedFree) t.delegatedFree.push(r.Coin.fromJSON(o));
                    if (void 0 !== e.delegatedVesting && null !== e.delegatedVesting)
                        for (const o of e.delegatedVesting) t.delegatedVesting.push(r.Coin.fromJSON(o));
                    return void 0 !== e.endTime && null !== e.endTime ? t.endTime = i.default.fromString(e.endTime) : t.endTime = i.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.baseAccount && (t.baseAccount = e.baseAccount ? s.BaseAccount.toJSON(e.baseAccount) : void 0), e.originalVesting ? t.originalVesting = e.originalVesting.map(e => e ? r.Coin.toJSON(e) : void 0) : t.originalVesting = [], e.delegatedFree ? t.delegatedFree = e.delegatedFree.map(e => e ? r.Coin.toJSON(e) : void 0) : t.delegatedFree = [], e.delegatedVesting ? t.delegatedVesting = e.delegatedVesting.map(e => e ? r.Coin.toJSON(e) : void 0) : t.delegatedVesting = [], void 0 !== e.endTime && (t.endTime = (e.endTime || i.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    if (void 0 !== e.baseAccount && null !== e.baseAccount ? t.baseAccount = s.BaseAccount.fromPartial(e.baseAccount) : t.baseAccount = void 0, t.originalVesting = [], void 0 !== e.originalVesting && null !== e.originalVesting)
                        for (const o of e.originalVesting) t.originalVesting.push(r.Coin.fromPartial(o));
                    if (t.delegatedFree = [], void 0 !== e.delegatedFree && null !== e.delegatedFree)
                        for (const o of e.delegatedFree) t.delegatedFree.push(r.Coin.fromPartial(o));
                    if (t.delegatedVesting = [], void 0 !== e.delegatedVesting && null !== e.delegatedVesting)
                        for (const o of e.delegatedVesting) t.delegatedVesting.push(r.Coin.fromPartial(o));
                    return void 0 !== e.endTime && null !== e.endTime ? t.endTime = e.endTime : t.endTime = i.default.ZERO, t
                }
            };
            const l = {
                startTime: i.default.ZERO
            };
            t.ContinuousVestingAccount = {
                encode: (e, o = a.default.Writer.create()) => (void 0 !== e.baseVestingAccount && t.BaseVestingAccount.encode(e.baseVestingAccount, o.uint32(10).fork()).ldelim(), e.startTime.isZero() || o.uint32(16).int64(e.startTime), o),
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, l);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.baseVestingAccount = t.BaseVestingAccount.decode(n, n.uint32());
                                break;
                            case 2:
                                s.startTime = n.int64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, l);
                    return void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? o.baseVestingAccount = t.BaseVestingAccount.fromJSON(e.baseVestingAccount) : o.baseVestingAccount = void 0, void 0 !== e.startTime && null !== e.startTime ? o.startTime = i.default.fromString(e.startTime) : o.startTime = i.default.ZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.baseVestingAccount && (o.baseVestingAccount = e.baseVestingAccount ? t.BaseVestingAccount.toJSON(e.baseVestingAccount) : void 0), void 0 !== e.startTime && (o.startTime = (e.startTime || i.default.ZERO).toString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, l);
                    return void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? o.baseVestingAccount = t.BaseVestingAccount.fromPartial(e.baseVestingAccount) : o.baseVestingAccount = void 0, void 0 !== e.startTime && null !== e.startTime ? o.startTime = e.startTime : o.startTime = i.default.ZERO, o
                }
            };
            const u = {};
            t.DelayedVestingAccount = {
                encode: (e, o = a.default.Writer.create()) => (void 0 !== e.baseVestingAccount && t.BaseVestingAccount.encode(e.baseVestingAccount, o.uint32(10).fork()).ldelim(), o),
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, u);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.baseVestingAccount = t.BaseVestingAccount.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, u);
                    return void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? o.baseVestingAccount = t.BaseVestingAccount.fromJSON(e.baseVestingAccount) : o.baseVestingAccount = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.baseVestingAccount && (o.baseVestingAccount = e.baseVestingAccount ? t.BaseVestingAccount.toJSON(e.baseVestingAccount) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, u);
                    return void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? o.baseVestingAccount = t.BaseVestingAccount.fromPartial(e.baseVestingAccount) : o.baseVestingAccount = void 0, o
                }
            };
            const c = {
                length: i.default.ZERO
            };
            t.Period = {
                encode(e, t = a.default.Writer.create()) {
                    e.length.isZero() || t.uint32(8).int64(e.length);
                    for (const o of e.amount) r.Coin.encode(o, t.uint32(18).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, c);
                    for (i.amount = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.length = o.int64();
                                break;
                            case 2:
                                i.amount.push(r.Coin.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    if (t.amount = [], void 0 !== e.length && null !== e.length ? t.length = i.default.fromString(e.length) : t.length = i.default.ZERO, void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(r.Coin.fromJSON(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.length && (t.length = (e.length || i.default.ZERO).toString()), e.amount ? t.amount = e.amount.map(e => e ? r.Coin.toJSON(e) : void 0) : t.amount = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    if (void 0 !== e.length && null !== e.length ? t.length = e.length : t.length = i.default.ZERO, t.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(r.Coin.fromPartial(o));
                    return t
                }
            };
            const g = {
                startTime: i.default.ZERO
            };
            t.PeriodicVestingAccount = {
                encode(e, o = a.default.Writer.create()) {
                    void 0 !== e.baseVestingAccount && t.BaseVestingAccount.encode(e.baseVestingAccount, o.uint32(10).fork()).ldelim(), e.startTime.isZero() || o.uint32(16).int64(e.startTime);
                    for (const n of e.vestingPeriods) t.Period.encode(n, o.uint32(26).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, g);
                    for (s.vestingPeriods = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.baseVestingAccount = t.BaseVestingAccount.decode(n, n.uint32());
                                break;
                            case 2:
                                s.startTime = n.int64();
                                break;
                            case 3:
                                s.vestingPeriods.push(t.Period.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, g);
                    if (o.vestingPeriods = [], void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? o.baseVestingAccount = t.BaseVestingAccount.fromJSON(e.baseVestingAccount) : o.baseVestingAccount = void 0, void 0 !== e.startTime && null !== e.startTime ? o.startTime = i.default.fromString(e.startTime) : o.startTime = i.default.ZERO, void 0 !== e.vestingPeriods && null !== e.vestingPeriods)
                        for (const n of e.vestingPeriods) o.vestingPeriods.push(t.Period.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.baseVestingAccount && (o.baseVestingAccount = e.baseVestingAccount ? t.BaseVestingAccount.toJSON(e.baseVestingAccount) : void 0), void 0 !== e.startTime && (o.startTime = (e.startTime || i.default.ZERO).toString()), e.vestingPeriods ? o.vestingPeriods = e.vestingPeriods.map(e => e ? t.Period.toJSON(e) : void 0) : o.vestingPeriods = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, g);
                    if (void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? o.baseVestingAccount = t.BaseVestingAccount.fromPartial(e.baseVestingAccount) : o.baseVestingAccount = void 0, void 0 !== e.startTime && null !== e.startTime ? o.startTime = e.startTime : o.startTime = i.default.ZERO, o.vestingPeriods = [], void 0 !== e.vestingPeriods && null !== e.vestingPeriods)
                        for (const n of e.vestingPeriods) o.vestingPeriods.push(t.Period.fromPartial(n));
                    return o
                }
            }, a.default.util.Long !== i.default && (a.default.util.Long = i.default, a.default.configure())
        },
        4339: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QueryClientImpl = t.QueryParamsResponse = t.QueryParamsRequest = t.QueryPoolResponse = t.QueryPoolRequest = t.QueryHistoricalInfoResponse = t.QueryHistoricalInfoRequest = t.QueryDelegatorValidatorResponse = t.QueryDelegatorValidatorRequest = t.QueryDelegatorValidatorsResponse = t.QueryDelegatorValidatorsRequest = t.QueryRedelegationsResponse = t.QueryRedelegationsRequest = t.QueryDelegatorUnbondingDelegationsResponse = t.QueryDelegatorUnbondingDelegationsRequest = t.QueryDelegatorDelegationsResponse = t.QueryDelegatorDelegationsRequest = t.QueryUnbondingDelegationResponse = t.QueryUnbondingDelegationRequest = t.QueryDelegationResponse = t.QueryDelegationRequest = t.QueryValidatorUnbondingDelegationsResponse = t.QueryValidatorUnbondingDelegationsRequest = t.QueryValidatorDelegationsResponse = t.QueryValidatorDelegationsRequest = t.QueryValidatorResponse = t.QueryValidatorRequest = t.QueryValidatorsResponse = t.QueryValidatorsRequest = t.protobufPackage = void 0;
            const i = n(o(1)),
                a = n(o(8)),
                s = o(295),
                r = o(2047);
            t.protobufPackage = "cosmos.staking.v1beta1";
            const d = {
                status: ""
            };
            t.QueryValidatorsRequest = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.status && t.uint32(10).string(e.status), void 0 !== e.pagination && s.PageRequest.encode(e.pagination, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, d);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.status = o.string();
                                break;
                            case 2:
                                i.pagination = s.PageRequest.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.status && null !== e.status ? t.status = String(e.status) : t.status = "", void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageRequest.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.status && (t.status = e.status), void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageRequest.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, d);
                    return o.status = null !== (t = e.status) && void 0 !== t ? t : "", void 0 !== e.pagination && null !== e.pagination ? o.pagination = s.PageRequest.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const l = {};
            t.QueryValidatorsResponse = {
                encode(e, t = a.default.Writer.create()) {
                    for (const o of e.validators) r.Validator.encode(o, t.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && s.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(), t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, l);
                    for (i.validators = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validators.push(r.Validator.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.pagination = s.PageResponse.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    if (t.validators = [], void 0 !== e.validators && null !== e.validators)
                        for (const o of e.validators) t.validators.push(r.Validator.fromJSON(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.validators ? t.validators = e.validators.map(e => e ? r.Validator.toJSON(e) : void 0) : t.validators = [], void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageResponse.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    if (t.validators = [], void 0 !== e.validators && null !== e.validators)
                        for (const o of e.validators) t.validators.push(r.Validator.fromPartial(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const u = {
                validatorAddr: ""
            };
            t.QueryValidatorRequest = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.validatorAddr && t.uint32(10).string(e.validatorAddr), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, u);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validatorAddr = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.validatorAddr && null !== e.validatorAddr ? t.validatorAddr = String(e.validatorAddr) : t.validatorAddr = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.validatorAddr && (t.validatorAddr = e.validatorAddr), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, u);
                    return o.validatorAddr = null !== (t = e.validatorAddr) && void 0 !== t ? t : "", o
                }
            };
            const c = {};
            t.QueryValidatorResponse = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.validator && r.Validator.encode(e.validator, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, c);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validator = r.Validator.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.validator && null !== e.validator ? t.validator = r.Validator.fromJSON(e.validator) : t.validator = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.validator && (t.validator = e.validator ? r.Validator.toJSON(e.validator) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.validator && null !== e.validator ? t.validator = r.Validator.fromPartial(e.validator) : t.validator = void 0, t
                }
            };
            const g = {
                validatorAddr: ""
            };
            t.QueryValidatorDelegationsRequest = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.validatorAddr && t.uint32(10).string(e.validatorAddr), void 0 !== e.pagination && s.PageRequest.encode(e.pagination, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, g);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validatorAddr = o.string();
                                break;
                            case 2:
                                i.pagination = s.PageRequest.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.validatorAddr && null !== e.validatorAddr ? t.validatorAddr = String(e.validatorAddr) : t.validatorAddr = "", void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageRequest.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.validatorAddr && (t.validatorAddr = e.validatorAddr), void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageRequest.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, g);
                    return o.validatorAddr = null !== (t = e.validatorAddr) && void 0 !== t ? t : "", void 0 !== e.pagination && null !== e.pagination ? o.pagination = s.PageRequest.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const f = {};
            t.QueryValidatorDelegationsResponse = {
                encode(e, t = a.default.Writer.create()) {
                    for (const o of e.delegationResponses) r.DelegationResponse.encode(o, t.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && s.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(), t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, f);
                    for (i.delegationResponses = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegationResponses.push(r.DelegationResponse.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.pagination = s.PageResponse.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.delegationResponses = [], void 0 !== e.delegationResponses && null !== e.delegationResponses)
                        for (const o of e.delegationResponses) t.delegationResponses.push(r.DelegationResponse.fromJSON(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.delegationResponses ? t.delegationResponses = e.delegationResponses.map(e => e ? r.DelegationResponse.toJSON(e) : void 0) : t.delegationResponses = [], void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageResponse.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    if (t.delegationResponses = [], void 0 !== e.delegationResponses && null !== e.delegationResponses)
                        for (const o of e.delegationResponses) t.delegationResponses.push(r.DelegationResponse.fromPartial(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const v = {
                validatorAddr: ""
            };
            t.QueryValidatorUnbondingDelegationsRequest = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.validatorAddr && t.uint32(10).string(e.validatorAddr), void 0 !== e.pagination && s.PageRequest.encode(e.pagination, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, v);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validatorAddr = o.string();
                                break;
                            case 2:
                                i.pagination = s.PageRequest.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    return void 0 !== e.validatorAddr && null !== e.validatorAddr ? t.validatorAddr = String(e.validatorAddr) : t.validatorAddr = "", void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageRequest.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.validatorAddr && (t.validatorAddr = e.validatorAddr), void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageRequest.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, v);
                    return o.validatorAddr = null !== (t = e.validatorAddr) && void 0 !== t ? t : "", void 0 !== e.pagination && null !== e.pagination ? o.pagination = s.PageRequest.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const p = {};
            t.QueryValidatorUnbondingDelegationsResponse = {
                encode(e, t = a.default.Writer.create()) {
                    for (const o of e.unbondingResponses) r.UnbondingDelegation.encode(o, t.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && s.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(), t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, p);
                    for (i.unbondingResponses = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.unbondingResponses.push(r.UnbondingDelegation.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.pagination = s.PageResponse.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, p);
                    if (t.unbondingResponses = [], void 0 !== e.unbondingResponses && null !== e.unbondingResponses)
                        for (const o of e.unbondingResponses) t.unbondingResponses.push(r.UnbondingDelegation.fromJSON(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.unbondingResponses ? t.unbondingResponses = e.unbondingResponses.map(e => e ? r.UnbondingDelegation.toJSON(e) : void 0) : t.unbondingResponses = [], void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageResponse.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, p);
                    if (t.unbondingResponses = [], void 0 !== e.unbondingResponses && null !== e.unbondingResponses)
                        for (const o of e.unbondingResponses) t.unbondingResponses.push(r.UnbondingDelegation.fromPartial(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const m = {
                delegatorAddr: "",
                validatorAddr: ""
            };
            t.QueryDelegationRequest = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddr && t.uint32(10).string(e.delegatorAddr), "" !== e.validatorAddr && t.uint32(18).string(e.validatorAddr), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, m);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddr = o.string();
                                break;
                            case 2:
                                i.validatorAddr = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    return void 0 !== e.delegatorAddr && null !== e.delegatorAddr ? t.delegatorAddr = String(e.delegatorAddr) : t.delegatorAddr = "", void 0 !== e.validatorAddr && null !== e.validatorAddr ? t.validatorAddr = String(e.validatorAddr) : t.validatorAddr = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddr && (t.delegatorAddr = e.delegatorAddr), void 0 !== e.validatorAddr && (t.validatorAddr = e.validatorAddr), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, m);
                    return n.delegatorAddr = null !== (t = e.delegatorAddr) && void 0 !== t ? t : "", n.validatorAddr = null !== (o = e.validatorAddr) && void 0 !== o ? o : "", n
                }
            };
            const b = {};
            t.QueryDelegationResponse = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.delegationResponse && r.DelegationResponse.encode(e.delegationResponse, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, b);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegationResponse = r.DelegationResponse.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.delegationResponse && null !== e.delegationResponse ? t.delegationResponse = r.DelegationResponse.fromJSON(e.delegationResponse) : t.delegationResponse = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegationResponse && (t.delegationResponse = e.delegationResponse ? r.DelegationResponse.toJSON(e.delegationResponse) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.delegationResponse && null !== e.delegationResponse ? t.delegationResponse = r.DelegationResponse.fromPartial(e.delegationResponse) : t.delegationResponse = void 0, t
                }
            };
            const O = {
                delegatorAddr: "",
                validatorAddr: ""
            };
            t.QueryUnbondingDelegationRequest = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddr && t.uint32(10).string(e.delegatorAddr), "" !== e.validatorAddr && t.uint32(18).string(e.validatorAddr), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, O);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddr = o.string();
                                break;
                            case 2:
                                i.validatorAddr = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, O);
                    return void 0 !== e.delegatorAddr && null !== e.delegatorAddr ? t.delegatorAddr = String(e.delegatorAddr) : t.delegatorAddr = "", void 0 !== e.validatorAddr && null !== e.validatorAddr ? t.validatorAddr = String(e.validatorAddr) : t.validatorAddr = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddr && (t.delegatorAddr = e.delegatorAddr), void 0 !== e.validatorAddr && (t.validatorAddr = e.validatorAddr), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, O);
                    return n.delegatorAddr = null !== (t = e.delegatorAddr) && void 0 !== t ? t : "", n.validatorAddr = null !== (o = e.validatorAddr) && void 0 !== o ? o : "", n
                }
            };
            const A = {};
            t.QueryUnbondingDelegationResponse = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.unbond && r.UnbondingDelegation.encode(e.unbond, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, A);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.unbond = r.UnbondingDelegation.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, A);
                    return void 0 !== e.unbond && null !== e.unbond ? t.unbond = r.UnbondingDelegation.fromJSON(e.unbond) : t.unbond = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.unbond && (t.unbond = e.unbond ? r.UnbondingDelegation.toJSON(e.unbond) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, A);
                    return void 0 !== e.unbond && null !== e.unbond ? t.unbond = r.UnbondingDelegation.fromPartial(e.unbond) : t.unbond = void 0, t
                }
            };
            const S = {
                delegatorAddr: ""
            };
            t.QueryDelegatorDelegationsRequest = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddr && t.uint32(10).string(e.delegatorAddr), void 0 !== e.pagination && s.PageRequest.encode(e.pagination, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, S);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddr = o.string();
                                break;
                            case 2:
                                i.pagination = s.PageRequest.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, S);
                    return void 0 !== e.delegatorAddr && null !== e.delegatorAddr ? t.delegatorAddr = String(e.delegatorAddr) : t.delegatorAddr = "", void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageRequest.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddr && (t.delegatorAddr = e.delegatorAddr), void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageRequest.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, S);
                    return o.delegatorAddr = null !== (t = e.delegatorAddr) && void 0 !== t ? t : "", void 0 !== e.pagination && null !== e.pagination ? o.pagination = s.PageRequest.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const R = {};
            t.QueryDelegatorDelegationsResponse = {
                encode(e, t = a.default.Writer.create()) {
                    for (const o of e.delegationResponses) r.DelegationResponse.encode(o, t.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && s.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(), t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, R);
                    for (i.delegationResponses = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegationResponses.push(r.DelegationResponse.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.pagination = s.PageResponse.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, R);
                    if (t.delegationResponses = [], void 0 !== e.delegationResponses && null !== e.delegationResponses)
                        for (const o of e.delegationResponses) t.delegationResponses.push(r.DelegationResponse.fromJSON(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.delegationResponses ? t.delegationResponses = e.delegationResponses.map(e => e ? r.DelegationResponse.toJSON(e) : void 0) : t.delegationResponses = [], void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageResponse.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, R);
                    if (t.delegationResponses = [], void 0 !== e.delegationResponses && null !== e.delegationResponses)
                        for (const o of e.delegationResponses) t.delegationResponses.push(r.DelegationResponse.fromPartial(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const h = {
                delegatorAddr: ""
            };
            t.QueryDelegatorUnbondingDelegationsRequest = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddr && t.uint32(10).string(e.delegatorAddr), void 0 !== e.pagination && s.PageRequest.encode(e.pagination, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, h);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddr = o.string();
                                break;
                            case 2:
                                i.pagination = s.PageRequest.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.delegatorAddr && null !== e.delegatorAddr ? t.delegatorAddr = String(e.delegatorAddr) : t.delegatorAddr = "", void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageRequest.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddr && (t.delegatorAddr = e.delegatorAddr), void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageRequest.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, h);
                    return o.delegatorAddr = null !== (t = e.delegatorAddr) && void 0 !== t ? t : "", void 0 !== e.pagination && null !== e.pagination ? o.pagination = s.PageRequest.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const y = {};
            t.QueryDelegatorUnbondingDelegationsResponse = {
                encode(e, t = a.default.Writer.create()) {
                    for (const o of e.unbondingResponses) r.UnbondingDelegation.encode(o, t.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && s.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(), t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, y);
                    for (i.unbondingResponses = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.unbondingResponses.push(r.UnbondingDelegation.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.pagination = s.PageResponse.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, y);
                    if (t.unbondingResponses = [], void 0 !== e.unbondingResponses && null !== e.unbondingResponses)
                        for (const o of e.unbondingResponses) t.unbondingResponses.push(r.UnbondingDelegation.fromJSON(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.unbondingResponses ? t.unbondingResponses = e.unbondingResponses.map(e => e ? r.UnbondingDelegation.toJSON(e) : void 0) : t.unbondingResponses = [], void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageResponse.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, y);
                    if (t.unbondingResponses = [], void 0 !== e.unbondingResponses && null !== e.unbondingResponses)
                        for (const o of e.unbondingResponses) t.unbondingResponses.push(r.UnbondingDelegation.fromPartial(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const D = {
                delegatorAddr: "",
                srcValidatorAddr: "",
                dstValidatorAddr: ""
            };
            t.QueryRedelegationsRequest = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddr && t.uint32(10).string(e.delegatorAddr), "" !== e.srcValidatorAddr && t.uint32(18).string(e.srcValidatorAddr), "" !== e.dstValidatorAddr && t.uint32(26).string(e.dstValidatorAddr), void 0 !== e.pagination && s.PageRequest.encode(e.pagination, t.uint32(34).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, D);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddr = o.string();
                                break;
                            case 2:
                                i.srcValidatorAddr = o.string();
                                break;
                            case 3:
                                i.dstValidatorAddr = o.string();
                                break;
                            case 4:
                                i.pagination = s.PageRequest.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, D);
                    return void 0 !== e.delegatorAddr && null !== e.delegatorAddr ? t.delegatorAddr = String(e.delegatorAddr) : t.delegatorAddr = "", void 0 !== e.srcValidatorAddr && null !== e.srcValidatorAddr ? t.srcValidatorAddr = String(e.srcValidatorAddr) : t.srcValidatorAddr = "", void 0 !== e.dstValidatorAddr && null !== e.dstValidatorAddr ? t.dstValidatorAddr = String(e.dstValidatorAddr) : t.dstValidatorAddr = "", void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageRequest.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddr && (t.delegatorAddr = e.delegatorAddr), void 0 !== e.srcValidatorAddr && (t.srcValidatorAddr = e.srcValidatorAddr), void 0 !== e.dstValidatorAddr && (t.dstValidatorAddr = e.dstValidatorAddr), void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageRequest.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    var t, o, n;
                    const i = Object.assign({}, D);
                    return i.delegatorAddr = null !== (t = e.delegatorAddr) && void 0 !== t ? t : "", i.srcValidatorAddr = null !== (o = e.srcValidatorAddr) && void 0 !== o ? o : "", i.dstValidatorAddr = null !== (n = e.dstValidatorAddr) && void 0 !== n ? n : "", void 0 !== e.pagination && null !== e.pagination ? i.pagination = s.PageRequest.fromPartial(e.pagination) : i.pagination = void 0, i
                }
            };
            const N = {};
            t.QueryRedelegationsResponse = {
                encode(e, t = a.default.Writer.create()) {
                    for (const o of e.redelegationResponses) r.RedelegationResponse.encode(o, t.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && s.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(), t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, N);
                    for (i.redelegationResponses = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.redelegationResponses.push(r.RedelegationResponse.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.pagination = s.PageResponse.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, N);
                    if (t.redelegationResponses = [], void 0 !== e.redelegationResponses && null !== e.redelegationResponses)
                        for (const o of e.redelegationResponses) t.redelegationResponses.push(r.RedelegationResponse.fromJSON(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.redelegationResponses ? t.redelegationResponses = e.redelegationResponses.map(e => e ? r.RedelegationResponse.toJSON(e) : void 0) : t.redelegationResponses = [], void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageResponse.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, N);
                    if (t.redelegationResponses = [], void 0 !== e.redelegationResponses && null !== e.redelegationResponses)
                        for (const o of e.redelegationResponses) t.redelegationResponses.push(r.RedelegationResponse.fromPartial(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const k = {
                delegatorAddr: ""
            };
            t.QueryDelegatorValidatorsRequest = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddr && t.uint32(10).string(e.delegatorAddr), void 0 !== e.pagination && s.PageRequest.encode(e.pagination, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, k);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddr = o.string();
                                break;
                            case 2:
                                i.pagination = s.PageRequest.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, k);
                    return void 0 !== e.delegatorAddr && null !== e.delegatorAddr ? t.delegatorAddr = String(e.delegatorAddr) : t.delegatorAddr = "", void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageRequest.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddr && (t.delegatorAddr = e.delegatorAddr), void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageRequest.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, k);
                    return o.delegatorAddr = null !== (t = e.delegatorAddr) && void 0 !== t ? t : "", void 0 !== e.pagination && null !== e.pagination ? o.pagination = s.PageRequest.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const T = {};
            t.QueryDelegatorValidatorsResponse = {
                encode(e, t = a.default.Writer.create()) {
                    for (const o of e.validators) r.Validator.encode(o, t.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && s.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(), t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, T);
                    for (i.validators = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validators.push(r.Validator.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.pagination = s.PageResponse.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, T);
                    if (t.validators = [], void 0 !== e.validators && null !== e.validators)
                        for (const o of e.validators) t.validators.push(r.Validator.fromJSON(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.validators ? t.validators = e.validators.map(e => e ? r.Validator.toJSON(e) : void 0) : t.validators = [], void 0 !== e.pagination && (t.pagination = e.pagination ? s.PageResponse.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, T);
                    if (t.validators = [], void 0 !== e.validators && null !== e.validators)
                        for (const o of e.validators) t.validators.push(r.Validator.fromPartial(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = s.PageResponse.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const P = {
                delegatorAddr: "",
                validatorAddr: ""
            };
            t.QueryDelegatorValidatorRequest = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddr && t.uint32(10).string(e.delegatorAddr), "" !== e.validatorAddr && t.uint32(18).string(e.validatorAddr), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, P);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddr = o.string();
                                break;
                            case 2:
                                i.validatorAddr = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, P);
                    return void 0 !== e.delegatorAddr && null !== e.delegatorAddr ? t.delegatorAddr = String(e.delegatorAddr) : t.delegatorAddr = "", void 0 !== e.validatorAddr && null !== e.validatorAddr ? t.validatorAddr = String(e.validatorAddr) : t.validatorAddr = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddr && (t.delegatorAddr = e.delegatorAddr), void 0 !== e.validatorAddr && (t.validatorAddr = e.validatorAddr), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, P);
                    return n.delegatorAddr = null !== (t = e.delegatorAddr) && void 0 !== t ? t : "", n.validatorAddr = null !== (o = e.validatorAddr) && void 0 !== o ? o : "", n
                }
            };
            const J = {};
            t.QueryDelegatorValidatorResponse = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.validator && r.Validator.encode(e.validator, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, J);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validator = r.Validator.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, J);
                    return void 0 !== e.validator && null !== e.validator ? t.validator = r.Validator.fromJSON(e.validator) : t.validator = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.validator && (t.validator = e.validator ? r.Validator.toJSON(e.validator) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, J);
                    return void 0 !== e.validator && null !== e.validator ? t.validator = r.Validator.fromPartial(e.validator) : t.validator = void 0, t
                }
            };
            const V = {
                height: i.default.ZERO
            };
            t.QueryHistoricalInfoRequest = {
                encode: (e, t = a.default.Writer.create()) => (e.height.isZero() || t.uint32(8).int64(e.height), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, V);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.height = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, V);
                    return void 0 !== e.height && null !== e.height ? t.height = i.default.fromString(e.height) : t.height = i.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.height && (t.height = (e.height || i.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, V);
                    return void 0 !== e.height && null !== e.height ? t.height = e.height : t.height = i.default.ZERO, t
                }
            };
            const j = {};
            t.QueryHistoricalInfoResponse = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.hist && r.HistoricalInfo.encode(e.hist, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, j);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.hist = r.HistoricalInfo.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, j);
                    return void 0 !== e.hist && null !== e.hist ? t.hist = r.HistoricalInfo.fromJSON(e.hist) : t.hist = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.hist && (t.hist = e.hist ? r.HistoricalInfo.toJSON(e.hist) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, j);
                    return void 0 !== e.hist && null !== e.hist ? t.hist = r.HistoricalInfo.fromPartial(e.hist) : t.hist = void 0, t
                }
            };
            const I = {};
            t.QueryPoolRequest = {
                encode: (e, t = a.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, I);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, I),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, I)
            };
            const E = {};
            t.QueryPoolResponse = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.pool && r.Pool.encode(e.pool, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, E);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.pool = r.Pool.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, E);
                    return void 0 !== e.pool && null !== e.pool ? t.pool = r.Pool.fromJSON(e.pool) : t.pool = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.pool && (t.pool = e.pool ? r.Pool.toJSON(e.pool) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, E);
                    return void 0 !== e.pool && null !== e.pool ? t.pool = r.Pool.fromPartial(e.pool) : t.pool = void 0, t
                }
            };
            const w = {};
            t.QueryParamsRequest = {
                encode: (e, t = a.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, w);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, w),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, w)
            };
            const _ = {};
            t.QueryParamsResponse = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.params && r.Params.encode(e.params, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, _);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.params = r.Params.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, _);
                    return void 0 !== e.params && null !== e.params ? t.params = r.Params.fromJSON(e.params) : t.params = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.params && (t.params = e.params ? r.Params.toJSON(e.params) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, _);
                    return void 0 !== e.params && null !== e.params ? t.params = r.Params.fromPartial(e.params) : t.params = void 0, t
                }
            };
            t.QueryClientImpl = class QueryClientImpl {
                constructor(e) {
                    this.rpc = e, this.Validators = this.Validators.bind(this), this.Validator = this.Validator.bind(this), this.ValidatorDelegations = this.ValidatorDelegations.bind(this), this.ValidatorUnbondingDelegations = this.ValidatorUnbondingDelegations.bind(this), this.Delegation = this.Delegation.bind(this), this.UnbondingDelegation = this.UnbondingDelegation.bind(this), this.DelegatorDelegations = this.DelegatorDelegations.bind(this), this.DelegatorUnbondingDelegations = this.DelegatorUnbondingDelegations.bind(this), this.Redelegations = this.Redelegations.bind(this), this.DelegatorValidators = this.DelegatorValidators.bind(this), this.DelegatorValidator = this.DelegatorValidator.bind(this), this.HistoricalInfo = this.HistoricalInfo.bind(this), this.Pool = this.Pool.bind(this), this.Params = this.Params.bind(this)
                }
                Validators(e) {
                    const o = t.QueryValidatorsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", o).then(e => t.QueryValidatorsResponse.decode(new a.default.Reader(e)))
                }
                Validator(e) {
                    const o = t.QueryValidatorRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", o).then(e => t.QueryValidatorResponse.decode(new a.default.Reader(e)))
                }
                ValidatorDelegations(e) {
                    const o = t.QueryValidatorDelegationsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", o).then(e => t.QueryValidatorDelegationsResponse.decode(new a.default.Reader(e)))
                }
                ValidatorUnbondingDelegations(e) {
                    const o = t.QueryValidatorUnbondingDelegationsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", o).then(e => t.QueryValidatorUnbondingDelegationsResponse.decode(new a.default.Reader(e)))
                }
                Delegation(e) {
                    const o = t.QueryDelegationRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", o).then(e => t.QueryDelegationResponse.decode(new a.default.Reader(e)))
                }
                UnbondingDelegation(e) {
                    const o = t.QueryUnbondingDelegationRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", o).then(e => t.QueryUnbondingDelegationResponse.decode(new a.default.Reader(e)))
                }
                DelegatorDelegations(e) {
                    const o = t.QueryDelegatorDelegationsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", o).then(e => t.QueryDelegatorDelegationsResponse.decode(new a.default.Reader(e)))
                }
                DelegatorUnbondingDelegations(e) {
                    const o = t.QueryDelegatorUnbondingDelegationsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", o).then(e => t.QueryDelegatorUnbondingDelegationsResponse.decode(new a.default.Reader(e)))
                }
                Redelegations(e) {
                    const o = t.QueryRedelegationsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", o).then(e => t.QueryRedelegationsResponse.decode(new a.default.Reader(e)))
                }
                DelegatorValidators(e) {
                    const o = t.QueryDelegatorValidatorsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", o).then(e => t.QueryDelegatorValidatorsResponse.decode(new a.default.Reader(e)))
                }
                DelegatorValidator(e) {
                    const o = t.QueryDelegatorValidatorRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", o).then(e => t.QueryDelegatorValidatorResponse.decode(new a.default.Reader(e)))
                }
                HistoricalInfo(e) {
                    const o = t.QueryHistoricalInfoRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", o).then(e => t.QueryHistoricalInfoResponse.decode(new a.default.Reader(e)))
                }
                Pool(e) {
                    const o = t.QueryPoolRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", o).then(e => t.QueryPoolResponse.decode(new a.default.Reader(e)))
                }
                Params(e) {
                    const o = t.QueryParamsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Query", "Params", o).then(e => t.QueryParamsResponse.decode(new a.default.Reader(e)))
                }
            }, a.default.util.Long !== i.default && (a.default.util.Long = i.default, a.default.configure())
        },
        435: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Fee = t.ModeInfo_Multi = t.ModeInfo_Single = t.ModeInfo = t.SignerInfo = t.AuthInfo = t.TxBody = t.SignDoc = t.TxRaw = t.Tx = t.protobufPackage = void 0;
            const i = n(o(1)),
                a = n(o(8)),
                s = o(113),
                r = o(674),
                d = o(1144),
                l = o(160);
            t.protobufPackage = "cosmos.tx.v1beta1";
            const u = {};
            t.Tx = {
                encode(e, o = a.default.Writer.create()) {
                    void 0 !== e.body && t.TxBody.encode(e.body, o.uint32(10).fork()).ldelim(), void 0 !== e.authInfo && t.AuthInfo.encode(e.authInfo, o.uint32(18).fork()).ldelim();
                    for (const t of e.signatures) o.uint32(26).bytes(t);
                    return o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, u);
                    for (s.signatures = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.body = t.TxBody.decode(n, n.uint32());
                                break;
                            case 2:
                                s.authInfo = t.AuthInfo.decode(n, n.uint32());
                                break;
                            case 3:
                                s.signatures.push(n.bytes());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, u);
                    if (o.signatures = [], void 0 !== e.body && null !== e.body ? o.body = t.TxBody.fromJSON(e.body) : o.body = void 0, void 0 !== e.authInfo && null !== e.authInfo ? o.authInfo = t.AuthInfo.fromJSON(e.authInfo) : o.authInfo = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const t of e.signatures) o.signatures.push(h(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.body && (o.body = e.body ? t.TxBody.toJSON(e.body) : void 0), void 0 !== e.authInfo && (o.authInfo = e.authInfo ? t.AuthInfo.toJSON(e.authInfo) : void 0), e.signatures ? o.signatures = e.signatures.map(e => D(void 0 !== e ? e : new Uint8Array)) : o.signatures = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, u);
                    if (void 0 !== e.body && null !== e.body ? o.body = t.TxBody.fromPartial(e.body) : o.body = void 0, void 0 !== e.authInfo && null !== e.authInfo ? o.authInfo = t.AuthInfo.fromPartial(e.authInfo) : o.authInfo = void 0, o.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const t of e.signatures) o.signatures.push(t);
                    return o
                }
            };
            const c = {};
            t.TxRaw = {
                encode(e, t = a.default.Writer.create()) {
                    0 !== e.bodyBytes.length && t.uint32(10).bytes(e.bodyBytes), 0 !== e.authInfoBytes.length && t.uint32(18).bytes(e.authInfoBytes);
                    for (const o of e.signatures) t.uint32(26).bytes(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, c);
                    for (i.signatures = [], i.bodyBytes = new Uint8Array, i.authInfoBytes = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.bodyBytes = o.bytes();
                                break;
                            case 2:
                                i.authInfoBytes = o.bytes();
                                break;
                            case 3:
                                i.signatures.push(o.bytes());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    if (t.signatures = [], t.bodyBytes = new Uint8Array, t.authInfoBytes = new Uint8Array, void 0 !== e.bodyBytes && null !== e.bodyBytes && (t.bodyBytes = h(e.bodyBytes)), void 0 !== e.authInfoBytes && null !== e.authInfoBytes && (t.authInfoBytes = h(e.authInfoBytes)), void 0 !== e.signatures && null !== e.signatures)
                        for (const o of e.signatures) t.signatures.push(h(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.bodyBytes && (t.bodyBytes = D(void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array)), void 0 !== e.authInfoBytes && (t.authInfoBytes = D(void 0 !== e.authInfoBytes ? e.authInfoBytes : new Uint8Array)), e.signatures ? t.signatures = e.signatures.map(e => D(void 0 !== e ? e : new Uint8Array)) : t.signatures = [], t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, c);
                    if (n.bodyBytes = null !== (t = e.bodyBytes) && void 0 !== t ? t : new Uint8Array, n.authInfoBytes = null !== (o = e.authInfoBytes) && void 0 !== o ? o : new Uint8Array, n.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const t of e.signatures) n.signatures.push(t);
                    return n
                }
            };
            const g = {
                chainId: "",
                accountNumber: i.default.UZERO
            };
            t.SignDoc = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.bodyBytes.length && t.uint32(10).bytes(e.bodyBytes), 0 !== e.authInfoBytes.length && t.uint32(18).bytes(e.authInfoBytes), "" !== e.chainId && t.uint32(26).string(e.chainId), e.accountNumber.isZero() || t.uint32(32).uint64(e.accountNumber), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, g);
                    for (i.bodyBytes = new Uint8Array, i.authInfoBytes = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.bodyBytes = o.bytes();
                                break;
                            case 2:
                                i.authInfoBytes = o.bytes();
                                break;
                            case 3:
                                i.chainId = o.string();
                                break;
                            case 4:
                                i.accountNumber = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return t.bodyBytes = new Uint8Array, t.authInfoBytes = new Uint8Array, void 0 !== e.bodyBytes && null !== e.bodyBytes && (t.bodyBytes = h(e.bodyBytes)), void 0 !== e.authInfoBytes && null !== e.authInfoBytes && (t.authInfoBytes = h(e.authInfoBytes)), void 0 !== e.chainId && null !== e.chainId ? t.chainId = String(e.chainId) : t.chainId = "", void 0 !== e.accountNumber && null !== e.accountNumber ? t.accountNumber = i.default.fromString(e.accountNumber) : t.accountNumber = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.bodyBytes && (t.bodyBytes = D(void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array)), void 0 !== e.authInfoBytes && (t.authInfoBytes = D(void 0 !== e.authInfoBytes ? e.authInfoBytes : new Uint8Array)), void 0 !== e.chainId && (t.chainId = e.chainId), void 0 !== e.accountNumber && (t.accountNumber = (e.accountNumber || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    var t, o, n;
                    const a = Object.assign({}, g);
                    return a.bodyBytes = null !== (t = e.bodyBytes) && void 0 !== t ? t : new Uint8Array, a.authInfoBytes = null !== (o = e.authInfoBytes) && void 0 !== o ? o : new Uint8Array, a.chainId = null !== (n = e.chainId) && void 0 !== n ? n : "", void 0 !== e.accountNumber && null !== e.accountNumber ? a.accountNumber = e.accountNumber : a.accountNumber = i.default.UZERO, a
                }
            };
            const f = {
                memo: "",
                timeoutHeight: i.default.UZERO
            };
            t.TxBody = {
                encode(e, t = a.default.Writer.create()) {
                    for (const o of e.messages) s.Any.encode(o, t.uint32(10).fork()).ldelim();
                    "" !== e.memo && t.uint32(18).string(e.memo), e.timeoutHeight.isZero() || t.uint32(24).uint64(e.timeoutHeight);
                    for (const o of e.extensionOptions) s.Any.encode(o, t.uint32(8186).fork()).ldelim();
                    for (const o of e.nonCriticalExtensionOptions) s.Any.encode(o, t.uint32(16378).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, f);
                    for (i.messages = [], i.extensionOptions = [], i.nonCriticalExtensionOptions = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.messages.push(s.Any.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.memo = o.string();
                                break;
                            case 3:
                                i.timeoutHeight = o.uint64();
                                break;
                            case 1023:
                                i.extensionOptions.push(s.Any.decode(o, o.uint32()));
                                break;
                            case 2047:
                                i.nonCriticalExtensionOptions.push(s.Any.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.messages = [], t.extensionOptions = [], t.nonCriticalExtensionOptions = [], void 0 !== e.messages && null !== e.messages)
                        for (const o of e.messages) t.messages.push(s.Any.fromJSON(o));
                    if (void 0 !== e.memo && null !== e.memo ? t.memo = String(e.memo) : t.memo = "", void 0 !== e.timeoutHeight && null !== e.timeoutHeight ? t.timeoutHeight = i.default.fromString(e.timeoutHeight) : t.timeoutHeight = i.default.UZERO, void 0 !== e.extensionOptions && null !== e.extensionOptions)
                        for (const o of e.extensionOptions) t.extensionOptions.push(s.Any.fromJSON(o));
                    if (void 0 !== e.nonCriticalExtensionOptions && null !== e.nonCriticalExtensionOptions)
                        for (const o of e.nonCriticalExtensionOptions) t.nonCriticalExtensionOptions.push(s.Any.fromJSON(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.messages ? t.messages = e.messages.map(e => e ? s.Any.toJSON(e) : void 0) : t.messages = [], void 0 !== e.memo && (t.memo = e.memo), void 0 !== e.timeoutHeight && (t.timeoutHeight = (e.timeoutHeight || i.default.UZERO).toString()), e.extensionOptions ? t.extensionOptions = e.extensionOptions.map(e => e ? s.Any.toJSON(e) : void 0) : t.extensionOptions = [], e.nonCriticalExtensionOptions ? t.nonCriticalExtensionOptions = e.nonCriticalExtensionOptions.map(e => e ? s.Any.toJSON(e) : void 0) : t.nonCriticalExtensionOptions = [], t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, f);
                    if (o.messages = [], void 0 !== e.messages && null !== e.messages)
                        for (const t of e.messages) o.messages.push(s.Any.fromPartial(t));
                    if (o.memo = null !== (t = e.memo) && void 0 !== t ? t : "", void 0 !== e.timeoutHeight && null !== e.timeoutHeight ? o.timeoutHeight = e.timeoutHeight : o.timeoutHeight = i.default.UZERO, o.extensionOptions = [], void 0 !== e.extensionOptions && null !== e.extensionOptions)
                        for (const t of e.extensionOptions) o.extensionOptions.push(s.Any.fromPartial(t));
                    if (o.nonCriticalExtensionOptions = [], void 0 !== e.nonCriticalExtensionOptions && null !== e.nonCriticalExtensionOptions)
                        for (const t of e.nonCriticalExtensionOptions) o.nonCriticalExtensionOptions.push(s.Any.fromPartial(t));
                    return o
                }
            };
            const v = {};
            t.AuthInfo = {
                encode(e, o = a.default.Writer.create()) {
                    for (const n of e.signerInfos) t.SignerInfo.encode(n, o.uint32(10).fork()).ldelim();
                    return void 0 !== e.fee && t.Fee.encode(e.fee, o.uint32(18).fork()).ldelim(), o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, v);
                    for (s.signerInfos = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.signerInfos.push(t.SignerInfo.decode(n, n.uint32()));
                                break;
                            case 2:
                                s.fee = t.Fee.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, v);
                    if (o.signerInfos = [], void 0 !== e.signerInfos && null !== e.signerInfos)
                        for (const n of e.signerInfos) o.signerInfos.push(t.SignerInfo.fromJSON(n));
                    return void 0 !== e.fee && null !== e.fee ? o.fee = t.Fee.fromJSON(e.fee) : o.fee = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return e.signerInfos ? o.signerInfos = e.signerInfos.map(e => e ? t.SignerInfo.toJSON(e) : void 0) : o.signerInfos = [], void 0 !== e.fee && (o.fee = e.fee ? t.Fee.toJSON(e.fee) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, v);
                    if (o.signerInfos = [], void 0 !== e.signerInfos && null !== e.signerInfos)
                        for (const n of e.signerInfos) o.signerInfos.push(t.SignerInfo.fromPartial(n));
                    return void 0 !== e.fee && null !== e.fee ? o.fee = t.Fee.fromPartial(e.fee) : o.fee = void 0, o
                }
            };
            const p = {
                sequence: i.default.UZERO
            };
            t.SignerInfo = {
                encode: (e, o = a.default.Writer.create()) => (void 0 !== e.publicKey && s.Any.encode(e.publicKey, o.uint32(10).fork()).ldelim(), void 0 !== e.modeInfo && t.ModeInfo.encode(e.modeInfo, o.uint32(18).fork()).ldelim(), e.sequence.isZero() || o.uint32(24).uint64(e.sequence), o),
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const r = Object.assign({}, p);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.publicKey = s.Any.decode(n, n.uint32());
                                break;
                            case 2:
                                r.modeInfo = t.ModeInfo.decode(n, n.uint32());
                                break;
                            case 3:
                                r.sequence = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, p);
                    return void 0 !== e.publicKey && null !== e.publicKey ? o.publicKey = s.Any.fromJSON(e.publicKey) : o.publicKey = void 0, void 0 !== e.modeInfo && null !== e.modeInfo ? o.modeInfo = t.ModeInfo.fromJSON(e.modeInfo) : o.modeInfo = void 0, void 0 !== e.sequence && null !== e.sequence ? o.sequence = i.default.fromString(e.sequence) : o.sequence = i.default.UZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.publicKey && (o.publicKey = e.publicKey ? s.Any.toJSON(e.publicKey) : void 0), void 0 !== e.modeInfo && (o.modeInfo = e.modeInfo ? t.ModeInfo.toJSON(e.modeInfo) : void 0), void 0 !== e.sequence && (o.sequence = (e.sequence || i.default.UZERO).toString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, p);
                    return void 0 !== e.publicKey && null !== e.publicKey ? o.publicKey = s.Any.fromPartial(e.publicKey) : o.publicKey = void 0, void 0 !== e.modeInfo && null !== e.modeInfo ? o.modeInfo = t.ModeInfo.fromPartial(e.modeInfo) : o.modeInfo = void 0, void 0 !== e.sequence && null !== e.sequence ? o.sequence = e.sequence : o.sequence = i.default.UZERO, o
                }
            };
            const m = {};
            t.ModeInfo = {
                encode: (e, o = a.default.Writer.create()) => (void 0 !== e.single && t.ModeInfo_Single.encode(e.single, o.uint32(10).fork()).ldelim(), void 0 !== e.multi && t.ModeInfo_Multi.encode(e.multi, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, m);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.single = t.ModeInfo_Single.decode(n, n.uint32());
                                break;
                            case 2:
                                s.multi = t.ModeInfo_Multi.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, m);
                    return void 0 !== e.single && null !== e.single ? o.single = t.ModeInfo_Single.fromJSON(e.single) : o.single = void 0, void 0 !== e.multi && null !== e.multi ? o.multi = t.ModeInfo_Multi.fromJSON(e.multi) : o.multi = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.single && (o.single = e.single ? t.ModeInfo_Single.toJSON(e.single) : void 0), void 0 !== e.multi && (o.multi = e.multi ? t.ModeInfo_Multi.toJSON(e.multi) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, m);
                    return void 0 !== e.single && null !== e.single ? o.single = t.ModeInfo_Single.fromPartial(e.single) : o.single = void 0, void 0 !== e.multi && null !== e.multi ? o.multi = t.ModeInfo_Multi.fromPartial(e.multi) : o.multi = void 0, o
                }
            };
            const b = {
                mode: 0
            };
            t.ModeInfo_Single = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.mode && t.uint32(8).int32(e.mode), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, b);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.mode = o.int32();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.mode && null !== e.mode ? t.mode = r.signModeFromJSON(e.mode) : t.mode = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.mode && (t.mode = r.signModeToJSON(e.mode)), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, b);
                    return o.mode = null !== (t = e.mode) && void 0 !== t ? t : 0, o
                }
            };
            const O = {};
            t.ModeInfo_Multi = {
                encode(e, o = a.default.Writer.create()) {
                    void 0 !== e.bitarray && d.CompactBitArray.encode(e.bitarray, o.uint32(10).fork()).ldelim();
                    for (const n of e.modeInfos) t.ModeInfo.encode(n, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, O);
                    for (s.modeInfos = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.bitarray = d.CompactBitArray.decode(n, n.uint32());
                                break;
                            case 2:
                                s.modeInfos.push(t.ModeInfo.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, O);
                    if (o.modeInfos = [], void 0 !== e.bitarray && null !== e.bitarray ? o.bitarray = d.CompactBitArray.fromJSON(e.bitarray) : o.bitarray = void 0, void 0 !== e.modeInfos && null !== e.modeInfos)
                        for (const n of e.modeInfos) o.modeInfos.push(t.ModeInfo.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.bitarray && (o.bitarray = e.bitarray ? d.CompactBitArray.toJSON(e.bitarray) : void 0), e.modeInfos ? o.modeInfos = e.modeInfos.map(e => e ? t.ModeInfo.toJSON(e) : void 0) : o.modeInfos = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, O);
                    if (void 0 !== e.bitarray && null !== e.bitarray ? o.bitarray = d.CompactBitArray.fromPartial(e.bitarray) : o.bitarray = void 0, o.modeInfos = [], void 0 !== e.modeInfos && null !== e.modeInfos)
                        for (const n of e.modeInfos) o.modeInfos.push(t.ModeInfo.fromPartial(n));
                    return o
                }
            };
            const A = {
                gasLimit: i.default.UZERO,
                payer: "",
                granter: ""
            };
            t.Fee = {
                encode(e, t = a.default.Writer.create()) {
                    for (const o of e.amount) l.Coin.encode(o, t.uint32(10).fork()).ldelim();
                    return e.gasLimit.isZero() || t.uint32(16).uint64(e.gasLimit), "" !== e.payer && t.uint32(26).string(e.payer), "" !== e.granter && t.uint32(34).string(e.granter), t
                },
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, A);
                    for (i.amount = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.amount.push(l.Coin.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.gasLimit = o.uint64();
                                break;
                            case 3:
                                i.payer = o.string();
                                break;
                            case 4:
                                i.granter = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, A);
                    if (t.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(l.Coin.fromJSON(o));
                    return void 0 !== e.gasLimit && null !== e.gasLimit ? t.gasLimit = i.default.fromString(e.gasLimit) : t.gasLimit = i.default.UZERO, void 0 !== e.payer && null !== e.payer ? t.payer = String(e.payer) : t.payer = "", void 0 !== e.granter && null !== e.granter ? t.granter = String(e.granter) : t.granter = "", t
                },
                toJSON(e) {
                    const t = {};
                    return e.amount ? t.amount = e.amount.map(e => e ? l.Coin.toJSON(e) : void 0) : t.amount = [], void 0 !== e.gasLimit && (t.gasLimit = (e.gasLimit || i.default.UZERO).toString()), void 0 !== e.payer && (t.payer = e.payer), void 0 !== e.granter && (t.granter = e.granter), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, A);
                    if (n.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const t of e.amount) n.amount.push(l.Coin.fromPartial(t));
                    return void 0 !== e.gasLimit && null !== e.gasLimit ? n.gasLimit = e.gasLimit : n.gasLimit = i.default.UZERO, n.payer = null !== (t = e.payer) && void 0 !== t ? t : "", n.granter = null !== (o = e.granter) && void 0 !== o ? o : "", n
                }
            };
            var S = (() => {
                if (void 0 !== S) return S;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const R = S.atob || (e => S.Buffer.from(e, "base64").toString("binary"));

            function h(e) {
                const t = R(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const y = S.btoa || (e => S.Buffer.from(e, "binary").toString("base64"));

            function D(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return y(t.join(""))
            }
            a.default.util.Long !== i.default && (a.default.util.Long = i.default, a.default.configure())
        },
        4382: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MsgClientImpl = t.MsgUndelegateResponse = t.MsgUndelegate = t.MsgBeginRedelegateResponse = t.MsgBeginRedelegate = t.MsgDelegateResponse = t.MsgDelegate = t.MsgEditValidatorResponse = t.MsgEditValidator = t.MsgCreateValidatorResponse = t.MsgCreateValidator = t.protobufPackage = void 0;
            const i = n(o(1)),
                a = n(o(8)),
                s = o(2047),
                r = o(113),
                d = o(160),
                l = o(526);
            t.protobufPackage = "cosmos.staking.v1beta1";
            const u = {
                minSelfDelegation: "",
                delegatorAddress: "",
                validatorAddress: ""
            };
            t.MsgCreateValidator = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.description && s.Description.encode(e.description, t.uint32(10).fork()).ldelim(), void 0 !== e.commission && s.CommissionRates.encode(e.commission, t.uint32(18).fork()).ldelim(), "" !== e.minSelfDelegation && t.uint32(26).string(e.minSelfDelegation), "" !== e.delegatorAddress && t.uint32(34).string(e.delegatorAddress), "" !== e.validatorAddress && t.uint32(42).string(e.validatorAddress), void 0 !== e.pubkey && r.Any.encode(e.pubkey, t.uint32(50).fork()).ldelim(), void 0 !== e.value && d.Coin.encode(e.value, t.uint32(58).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, u);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.description = s.Description.decode(o, o.uint32());
                                break;
                            case 2:
                                i.commission = s.CommissionRates.decode(o, o.uint32());
                                break;
                            case 3:
                                i.minSelfDelegation = o.string();
                                break;
                            case 4:
                                i.delegatorAddress = o.string();
                                break;
                            case 5:
                                i.validatorAddress = o.string();
                                break;
                            case 6:
                                i.pubkey = r.Any.decode(o, o.uint32());
                                break;
                            case 7:
                                i.value = d.Coin.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.description && null !== e.description ? t.description = s.Description.fromJSON(e.description) : t.description = void 0, void 0 !== e.commission && null !== e.commission ? t.commission = s.CommissionRates.fromJSON(e.commission) : t.commission = void 0, void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation ? t.minSelfDelegation = String(e.minSelfDelegation) : t.minSelfDelegation = "", void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", void 0 !== e.pubkey && null !== e.pubkey ? t.pubkey = r.Any.fromJSON(e.pubkey) : t.pubkey = void 0, void 0 !== e.value && null !== e.value ? t.value = d.Coin.fromJSON(e.value) : t.value = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.description && (t.description = e.description ? s.Description.toJSON(e.description) : void 0), void 0 !== e.commission && (t.commission = e.commission ? s.CommissionRates.toJSON(e.commission) : void 0), void 0 !== e.minSelfDelegation && (t.minSelfDelegation = e.minSelfDelegation), void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), void 0 !== e.pubkey && (t.pubkey = e.pubkey ? r.Any.toJSON(e.pubkey) : void 0), void 0 !== e.value && (t.value = e.value ? d.Coin.toJSON(e.value) : void 0), t
                },
                fromPartial(e) {
                    var t, o, n;
                    const i = Object.assign({}, u);
                    return void 0 !== e.description && null !== e.description ? i.description = s.Description.fromPartial(e.description) : i.description = void 0, void 0 !== e.commission && null !== e.commission ? i.commission = s.CommissionRates.fromPartial(e.commission) : i.commission = void 0, i.minSelfDelegation = null !== (t = e.minSelfDelegation) && void 0 !== t ? t : "", i.delegatorAddress = null !== (o = e.delegatorAddress) && void 0 !== o ? o : "", i.validatorAddress = null !== (n = e.validatorAddress) && void 0 !== n ? n : "", void 0 !== e.pubkey && null !== e.pubkey ? i.pubkey = r.Any.fromPartial(e.pubkey) : i.pubkey = void 0, void 0 !== e.value && null !== e.value ? i.value = d.Coin.fromPartial(e.value) : i.value = void 0, i
                }
            };
            const c = {};
            t.MsgCreateValidatorResponse = {
                encode: (e, t = a.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, c);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, c),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, c)
            };
            const g = {
                validatorAddress: "",
                commissionRate: "",
                minSelfDelegation: ""
            };
            t.MsgEditValidator = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.description && s.Description.encode(e.description, t.uint32(10).fork()).ldelim(), "" !== e.validatorAddress && t.uint32(18).string(e.validatorAddress), "" !== e.commissionRate && t.uint32(26).string(e.commissionRate), "" !== e.minSelfDelegation && t.uint32(34).string(e.minSelfDelegation), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, g);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.description = s.Description.decode(o, o.uint32());
                                break;
                            case 2:
                                i.validatorAddress = o.string();
                                break;
                            case 3:
                                i.commissionRate = o.string();
                                break;
                            case 4:
                                i.minSelfDelegation = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.description && null !== e.description ? t.description = s.Description.fromJSON(e.description) : t.description = void 0, void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", void 0 !== e.commissionRate && null !== e.commissionRate ? t.commissionRate = String(e.commissionRate) : t.commissionRate = "", void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation ? t.minSelfDelegation = String(e.minSelfDelegation) : t.minSelfDelegation = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.description && (t.description = e.description ? s.Description.toJSON(e.description) : void 0), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), void 0 !== e.commissionRate && (t.commissionRate = e.commissionRate), void 0 !== e.minSelfDelegation && (t.minSelfDelegation = e.minSelfDelegation), t
                },
                fromPartial(e) {
                    var t, o, n;
                    const i = Object.assign({}, g);
                    return void 0 !== e.description && null !== e.description ? i.description = s.Description.fromPartial(e.description) : i.description = void 0, i.validatorAddress = null !== (t = e.validatorAddress) && void 0 !== t ? t : "", i.commissionRate = null !== (o = e.commissionRate) && void 0 !== o ? o : "", i.minSelfDelegation = null !== (n = e.minSelfDelegation) && void 0 !== n ? n : "", i
                }
            };
            const f = {};
            t.MsgEditValidatorResponse = {
                encode: (e, t = a.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, f);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, f),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, f)
            };
            const v = {
                delegatorAddress: "",
                validatorAddress: ""
            };
            t.MsgDelegate = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && t.uint32(18).string(e.validatorAddress), void 0 !== e.amount && d.Coin.encode(e.amount, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, v);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = o.string();
                                break;
                            case 2:
                                i.validatorAddress = o.string();
                                break;
                            case 3:
                                i.amount = d.Coin.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", void 0 !== e.amount && null !== e.amount ? t.amount = d.Coin.fromJSON(e.amount) : t.amount = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), void 0 !== e.amount && (t.amount = e.amount ? d.Coin.toJSON(e.amount) : void 0), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, v);
                    return n.delegatorAddress = null !== (t = e.delegatorAddress) && void 0 !== t ? t : "", n.validatorAddress = null !== (o = e.validatorAddress) && void 0 !== o ? o : "", void 0 !== e.amount && null !== e.amount ? n.amount = d.Coin.fromPartial(e.amount) : n.amount = void 0, n
                }
            };
            const p = {};
            t.MsgDelegateResponse = {
                encode: (e, t = a.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, p);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, p),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, p)
            };
            const m = {
                delegatorAddress: "",
                validatorSrcAddress: "",
                validatorDstAddress: ""
            };
            t.MsgBeginRedelegate = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorSrcAddress && t.uint32(18).string(e.validatorSrcAddress), "" !== e.validatorDstAddress && t.uint32(26).string(e.validatorDstAddress), void 0 !== e.amount && d.Coin.encode(e.amount, t.uint32(34).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, m);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = o.string();
                                break;
                            case 2:
                                i.validatorSrcAddress = o.string();
                                break;
                            case 3:
                                i.validatorDstAddress = o.string();
                                break;
                            case 4:
                                i.amount = d.Coin.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress ? t.validatorSrcAddress = String(e.validatorSrcAddress) : t.validatorSrcAddress = "", void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress ? t.validatorDstAddress = String(e.validatorDstAddress) : t.validatorDstAddress = "", void 0 !== e.amount && null !== e.amount ? t.amount = d.Coin.fromJSON(e.amount) : t.amount = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorSrcAddress && (t.validatorSrcAddress = e.validatorSrcAddress), void 0 !== e.validatorDstAddress && (t.validatorDstAddress = e.validatorDstAddress), void 0 !== e.amount && (t.amount = e.amount ? d.Coin.toJSON(e.amount) : void 0), t
                },
                fromPartial(e) {
                    var t, o, n;
                    const i = Object.assign({}, m);
                    return i.delegatorAddress = null !== (t = e.delegatorAddress) && void 0 !== t ? t : "", i.validatorSrcAddress = null !== (o = e.validatorSrcAddress) && void 0 !== o ? o : "", i.validatorDstAddress = null !== (n = e.validatorDstAddress) && void 0 !== n ? n : "", void 0 !== e.amount && null !== e.amount ? i.amount = d.Coin.fromPartial(e.amount) : i.amount = void 0, i
                }
            };
            const b = {};
            t.MsgBeginRedelegateResponse = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.completionTime && l.Timestamp.encode(S(e.completionTime), t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, b);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.completionTime = R(l.Timestamp.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = h(e.completionTime) : t.completionTime = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.completionTime && (t.completionTime = e.completionTime.toISOString()), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, b);
                    return o.completionTime = null !== (t = e.completionTime) && void 0 !== t ? t : void 0, o
                }
            };
            const O = {
                delegatorAddress: "",
                validatorAddress: ""
            };
            t.MsgUndelegate = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && t.uint32(18).string(e.validatorAddress), void 0 !== e.amount && d.Coin.encode(e.amount, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, O);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = o.string();
                                break;
                            case 2:
                                i.validatorAddress = o.string();
                                break;
                            case 3:
                                i.amount = d.Coin.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, O);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", void 0 !== e.amount && null !== e.amount ? t.amount = d.Coin.fromJSON(e.amount) : t.amount = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), void 0 !== e.amount && (t.amount = e.amount ? d.Coin.toJSON(e.amount) : void 0), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, O);
                    return n.delegatorAddress = null !== (t = e.delegatorAddress) && void 0 !== t ? t : "", n.validatorAddress = null !== (o = e.validatorAddress) && void 0 !== o ? o : "", void 0 !== e.amount && null !== e.amount ? n.amount = d.Coin.fromPartial(e.amount) : n.amount = void 0, n
                }
            };
            const A = {};
            t.MsgUndelegateResponse = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.completionTime && l.Timestamp.encode(S(e.completionTime), t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, A);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.completionTime = R(l.Timestamp.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, A);
                    return void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = h(e.completionTime) : t.completionTime = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.completionTime && (t.completionTime = e.completionTime.toISOString()), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, A);
                    return o.completionTime = null !== (t = e.completionTime) && void 0 !== t ? t : void 0, o
                }
            };

            function S(e) {
                var t;
                return {
                    seconds: (t = e.getTime() / 1e3, i.default.fromNumber(t)),
                    nanos: e.getTime() % 1e3 * 1e6
                }
            }

            function R(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }

            function h(e) {
                return e instanceof Date ? e : "string" == typeof e ? new Date(e) : R(l.Timestamp.fromJSON(e))
            }
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.CreateValidator = this.CreateValidator.bind(this), this.EditValidator = this.EditValidator.bind(this), this.Delegate = this.Delegate.bind(this), this.BeginRedelegate = this.BeginRedelegate.bind(this), this.Undelegate = this.Undelegate.bind(this)
                }
                CreateValidator(e) {
                    const o = t.MsgCreateValidator.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", o).then(e => t.MsgCreateValidatorResponse.decode(new a.default.Reader(e)))
                }
                EditValidator(e) {
                    const o = t.MsgEditValidator.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", o).then(e => t.MsgEditValidatorResponse.decode(new a.default.Reader(e)))
                }
                Delegate(e) {
                    const o = t.MsgDelegate.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", o).then(e => t.MsgDelegateResponse.decode(new a.default.Reader(e)))
                }
                BeginRedelegate(e) {
                    const o = t.MsgBeginRedelegate.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", o).then(e => t.MsgBeginRedelegateResponse.decode(new a.default.Reader(e)))
                }
                Undelegate(e) {
                    const o = t.MsgUndelegate.encode(e).finish();
                    return this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", o).then(e => t.MsgUndelegateResponse.decode(new a.default.Reader(e)))
                }
            }, a.default.util.Long !== i.default && (a.default.util.Long = i.default, a.default.configure())
        },
        526: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Timestamp = t.protobufPackage = void 0;
            const i = n(o(1)),
                a = n(o(8));
            t.protobufPackage = "google.protobuf";
            const s = {
                seconds: i.default.ZERO,
                nanos: 0
            };
            t.Timestamp = {
                encode: (e, t = a.default.Writer.create()) => (e.seconds.isZero() || t.uint32(8).int64(e.seconds), 0 !== e.nanos && t.uint32(16).int32(e.nanos), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, s);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.seconds = o.int64();
                                break;
                            case 2:
                                i.nanos = o.int32();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, s);
                    return void 0 !== e.seconds && null !== e.seconds ? t.seconds = i.default.fromString(e.seconds) : t.seconds = i.default.ZERO, void 0 !== e.nanos && null !== e.nanos ? t.nanos = Number(e.nanos) : t.nanos = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.seconds && (t.seconds = (e.seconds || i.default.ZERO).toString()), void 0 !== e.nanos && (t.nanos = e.nanos), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, s);
                    return void 0 !== e.seconds && null !== e.seconds ? o.seconds = e.seconds : o.seconds = i.default.ZERO, o.nanos = null !== (t = e.nanos) && void 0 !== t ? t : 0, o
                }
            }, a.default.util.Long !== i.default && (a.default.util.Long = i.default, a.default.configure())
        },
        674: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SignatureDescriptor_Data_Multi = t.SignatureDescriptor_Data_Single = t.SignatureDescriptor_Data = t.SignatureDescriptor = t.SignatureDescriptors = t.signModeToJSON = t.signModeFromJSON = t.SignMode = t.protobufPackage = void 0;
            const i = n(o(1)),
                a = n(o(8)),
                s = o(113),
                r = o(1144);
            var d;

            function l(e) {
                switch (e) {
                    case 0:
                    case "SIGN_MODE_UNSPECIFIED":
                        return d.SIGN_MODE_UNSPECIFIED;
                    case 1:
                    case "SIGN_MODE_DIRECT":
                        return d.SIGN_MODE_DIRECT;
                    case 2:
                    case "SIGN_MODE_TEXTUAL":
                        return d.SIGN_MODE_TEXTUAL;
                    case 127:
                    case "SIGN_MODE_LEGACY_AMINO_JSON":
                        return d.SIGN_MODE_LEGACY_AMINO_JSON;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return d.UNRECOGNIZED
                }
            }

            function u(e) {
                switch (e) {
                    case d.SIGN_MODE_UNSPECIFIED:
                        return "SIGN_MODE_UNSPECIFIED";
                    case d.SIGN_MODE_DIRECT:
                        return "SIGN_MODE_DIRECT";
                    case d.SIGN_MODE_TEXTUAL:
                        return "SIGN_MODE_TEXTUAL";
                    case d.SIGN_MODE_LEGACY_AMINO_JSON:
                        return "SIGN_MODE_LEGACY_AMINO_JSON";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "cosmos.tx.signing.v1beta1",
                function(e) {
                    e[e.SIGN_MODE_UNSPECIFIED = 0] = "SIGN_MODE_UNSPECIFIED", e[e.SIGN_MODE_DIRECT = 1] = "SIGN_MODE_DIRECT", e[e.SIGN_MODE_TEXTUAL = 2] = "SIGN_MODE_TEXTUAL", e[e.SIGN_MODE_LEGACY_AMINO_JSON = 127] = "SIGN_MODE_LEGACY_AMINO_JSON", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(d = t.SignMode || (t.SignMode = {})), t.signModeFromJSON = l, t.signModeToJSON = u;
            const c = {};
            t.SignatureDescriptors = {
                encode(e, o = a.default.Writer.create()) {
                    for (const n of e.signatures) t.SignatureDescriptor.encode(n, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, c);
                    for (s.signatures = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.signatures.push(t.SignatureDescriptor.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, c);
                    if (o.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const n of e.signatures) o.signatures.push(t.SignatureDescriptor.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.signatures ? o.signatures = e.signatures.map(e => e ? t.SignatureDescriptor.toJSON(e) : void 0) : o.signatures = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, c);
                    if (o.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const n of e.signatures) o.signatures.push(t.SignatureDescriptor.fromPartial(n));
                    return o
                }
            };
            const g = {
                sequence: i.default.UZERO
            };
            t.SignatureDescriptor = {
                encode: (e, o = a.default.Writer.create()) => (void 0 !== e.publicKey && s.Any.encode(e.publicKey, o.uint32(10).fork()).ldelim(), void 0 !== e.data && t.SignatureDescriptor_Data.encode(e.data, o.uint32(18).fork()).ldelim(), e.sequence.isZero() || o.uint32(24).uint64(e.sequence), o),
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const r = Object.assign({}, g);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.publicKey = s.Any.decode(n, n.uint32());
                                break;
                            case 2:
                                r.data = t.SignatureDescriptor_Data.decode(n, n.uint32());
                                break;
                            case 3:
                                r.sequence = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, g);
                    return void 0 !== e.publicKey && null !== e.publicKey ? o.publicKey = s.Any.fromJSON(e.publicKey) : o.publicKey = void 0, void 0 !== e.data && null !== e.data ? o.data = t.SignatureDescriptor_Data.fromJSON(e.data) : o.data = void 0, void 0 !== e.sequence && null !== e.sequence ? o.sequence = i.default.fromString(e.sequence) : o.sequence = i.default.UZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.publicKey && (o.publicKey = e.publicKey ? s.Any.toJSON(e.publicKey) : void 0), void 0 !== e.data && (o.data = e.data ? t.SignatureDescriptor_Data.toJSON(e.data) : void 0), void 0 !== e.sequence && (o.sequence = (e.sequence || i.default.UZERO).toString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, g);
                    return void 0 !== e.publicKey && null !== e.publicKey ? o.publicKey = s.Any.fromPartial(e.publicKey) : o.publicKey = void 0, void 0 !== e.data && null !== e.data ? o.data = t.SignatureDescriptor_Data.fromPartial(e.data) : o.data = void 0, void 0 !== e.sequence && null !== e.sequence ? o.sequence = e.sequence : o.sequence = i.default.UZERO, o
                }
            };
            const f = {};
            t.SignatureDescriptor_Data = {
                encode: (e, o = a.default.Writer.create()) => (void 0 !== e.single && t.SignatureDescriptor_Data_Single.encode(e.single, o.uint32(10).fork()).ldelim(), void 0 !== e.multi && t.SignatureDescriptor_Data_Multi.encode(e.multi, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, f);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.single = t.SignatureDescriptor_Data_Single.decode(n, n.uint32());
                                break;
                            case 2:
                                s.multi = t.SignatureDescriptor_Data_Multi.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, f);
                    return void 0 !== e.single && null !== e.single ? o.single = t.SignatureDescriptor_Data_Single.fromJSON(e.single) : o.single = void 0, void 0 !== e.multi && null !== e.multi ? o.multi = t.SignatureDescriptor_Data_Multi.fromJSON(e.multi) : o.multi = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.single && (o.single = e.single ? t.SignatureDescriptor_Data_Single.toJSON(e.single) : void 0), void 0 !== e.multi && (o.multi = e.multi ? t.SignatureDescriptor_Data_Multi.toJSON(e.multi) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, f);
                    return void 0 !== e.single && null !== e.single ? o.single = t.SignatureDescriptor_Data_Single.fromPartial(e.single) : o.single = void 0, void 0 !== e.multi && null !== e.multi ? o.multi = t.SignatureDescriptor_Data_Multi.fromPartial(e.multi) : o.multi = void 0, o
                }
            };
            const v = {
                mode: 0
            };
            t.SignatureDescriptor_Data_Single = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.mode && t.uint32(8).int32(e.mode), 0 !== e.signature.length && t.uint32(18).bytes(e.signature), t),
                decode(e, t) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, v);
                    for (i.signature = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.mode = o.int32();
                                break;
                            case 2:
                                i.signature = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    return t.signature = new Uint8Array, void 0 !== e.mode && null !== e.mode ? t.mode = l(e.mode) : t.mode = 0, void 0 !== e.signature && null !== e.signature && (t.signature = function(e) {
                        const t = b(e),
                            o = new Uint8Array(t.length);
                        for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                        return o
                    }(e.signature)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.mode && (t.mode = u(e.mode)), void 0 !== e.signature && (t.signature = function(e) {
                        const t = [];
                        for (const o of e) t.push(String.fromCharCode(o));
                        return O(t.join(""))
                    }(void 0 !== e.signature ? e.signature : new Uint8Array)), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, v);
                    return n.mode = null !== (t = e.mode) && void 0 !== t ? t : 0, n.signature = null !== (o = e.signature) && void 0 !== o ? o : new Uint8Array, n
                }
            };
            const p = {};
            t.SignatureDescriptor_Data_Multi = {
                encode(e, o = a.default.Writer.create()) {
                    void 0 !== e.bitarray && r.CompactBitArray.encode(e.bitarray, o.uint32(10).fork()).ldelim();
                    for (const n of e.signatures) t.SignatureDescriptor_Data.encode(n, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, p);
                    for (s.signatures = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.bitarray = r.CompactBitArray.decode(n, n.uint32());
                                break;
                            case 2:
                                s.signatures.push(t.SignatureDescriptor_Data.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, p);
                    if (o.signatures = [], void 0 !== e.bitarray && null !== e.bitarray ? o.bitarray = r.CompactBitArray.fromJSON(e.bitarray) : o.bitarray = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const n of e.signatures) o.signatures.push(t.SignatureDescriptor_Data.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.bitarray && (o.bitarray = e.bitarray ? r.CompactBitArray.toJSON(e.bitarray) : void 0), e.signatures ? o.signatures = e.signatures.map(e => e ? t.SignatureDescriptor_Data.toJSON(e) : void 0) : o.signatures = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, p);
                    if (void 0 !== e.bitarray && null !== e.bitarray ? o.bitarray = r.CompactBitArray.fromPartial(e.bitarray) : o.bitarray = void 0, o.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const n of e.signatures) o.signatures.push(t.SignatureDescriptor_Data.fromPartial(n));
                    return o
                }
            };
            var m = (() => {
                if (void 0 !== m) return m;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const b = m.atob || (e => m.Buffer.from(e, "base64").toString("binary"));
            const O = m.btoa || (e => m.Buffer.from(e, "binary").toString("base64"));
            a.default.util.Long !== i.default && (a.default.util.Long = i.default, a.default.configure())
        }
    }
]);