(window.webpackJsonp = window.webpackJsonp || []).push([
    [138], {
        1099: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GrpcWebImpl = t.MsgDonateAllVestingTokensDesc = t.MsgCreatePeriodicVestingAccountDesc = t.MsgCreateVestingAccountDesc = t.MsgDesc = t.MsgClientImpl = t.MsgDonateAllVestingTokensResponse = t.MsgDonateAllVestingTokens = t.MsgCreatePeriodicVestingAccountResponse = t.MsgCreatePeriodicVestingAccount = t.MsgCreateVestingAccountResponse = t.MsgCreateVestingAccount = t.protobufPackage = void 0;
            const i = o(n(1)),
                s = n(156),
                r = o(n(8)),
                a = n(157),
                d = n(121),
                l = n(417);
            t.protobufPackage = "cosmos.vesting.v1beta1";
            const c = {
                fromAddress: "",
                toAddress: "",
                endTime: i.default.ZERO,
                delayed: !1
            };
            t.MsgCreateVestingAccount = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.fromAddress && t.uint32(10).string(e.fromAddress), "" !== e.toAddress && t.uint32(18).string(e.toAddress);
                    for (const n of e.amount) d.Coin.encode(n, t.uint32(26).fork()).ldelim();
                    return e.endTime.isZero() || t.uint32(32).int64(e.endTime), !0 === e.delayed && t.uint32(40).bool(e.delayed), t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, c);
                    for (i.amount = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.fromAddress = n.string();
                                break;
                            case 2:
                                i.toAddress = n.string();
                                break;
                            case 3:
                                i.amount.push(d.Coin.decode(n, n.uint32()));
                                break;
                            case 4:
                                i.endTime = n.int64();
                                break;
                            case 5:
                                i.delayed = n.bool();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    if (t.amount = [], void 0 !== e.fromAddress && null !== e.fromAddress ? t.fromAddress = String(e.fromAddress) : t.fromAddress = "", void 0 !== e.toAddress && null !== e.toAddress ? t.toAddress = String(e.toAddress) : t.toAddress = "", void 0 !== e.amount && null !== e.amount)
                        for (const n of e.amount) t.amount.push(d.Coin.fromJSON(n));
                    return void 0 !== e.endTime && null !== e.endTime ? t.endTime = i.default.fromString(e.endTime) : t.endTime = i.default.ZERO, void 0 !== e.delayed && null !== e.delayed ? t.delayed = Boolean(e.delayed) : t.delayed = !1, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress), void 0 !== e.toAddress && (t.toAddress = e.toAddress), e.amount ? t.amount = e.amount.map(e => e ? d.Coin.toJSON(e) : void 0) : t.amount = [], void 0 !== e.endTime && (t.endTime = (e.endTime || i.default.ZERO).toString()), void 0 !== e.delayed && (t.delayed = e.delayed), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    if (t.amount = [], void 0 !== e.fromAddress && null !== e.fromAddress ? t.fromAddress = e.fromAddress : t.fromAddress = "", void 0 !== e.toAddress && null !== e.toAddress ? t.toAddress = e.toAddress : t.toAddress = "", void 0 !== e.amount && null !== e.amount)
                        for (const n of e.amount) t.amount.push(d.Coin.fromPartial(n));
                    return void 0 !== e.endTime && null !== e.endTime ? t.endTime = e.endTime : t.endTime = i.default.ZERO, void 0 !== e.delayed && null !== e.delayed ? t.delayed = e.delayed : t.delayed = !1, t
                }
            };
            const u = {};
            t.MsgCreateVestingAccountResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, u),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, u)
            };
            const g = {
                fromAddress: "",
                toAddress: "",
                startTime: i.default.ZERO
            };
            t.MsgCreatePeriodicVestingAccount = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.fromAddress && t.uint32(10).string(e.fromAddress), "" !== e.toAddress && t.uint32(18).string(e.toAddress), e.startTime.isZero() || t.uint32(24).int64(e.startTime);
                    for (const n of e.vestingPeriods) l.Period.encode(n, t.uint32(34).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, g);
                    for (i.vestingPeriods = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.fromAddress = n.string();
                                break;
                            case 2:
                                i.toAddress = n.string();
                                break;
                            case 3:
                                i.startTime = n.int64();
                                break;
                            case 4:
                                i.vestingPeriods.push(l.Period.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    if (t.vestingPeriods = [], void 0 !== e.fromAddress && null !== e.fromAddress ? t.fromAddress = String(e.fromAddress) : t.fromAddress = "", void 0 !== e.toAddress && null !== e.toAddress ? t.toAddress = String(e.toAddress) : t.toAddress = "", void 0 !== e.startTime && null !== e.startTime ? t.startTime = i.default.fromString(e.startTime) : t.startTime = i.default.ZERO, void 0 !== e.vestingPeriods && null !== e.vestingPeriods)
                        for (const n of e.vestingPeriods) t.vestingPeriods.push(l.Period.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress), void 0 !== e.toAddress && (t.toAddress = e.toAddress), void 0 !== e.startTime && (t.startTime = (e.startTime || i.default.ZERO).toString()), e.vestingPeriods ? t.vestingPeriods = e.vestingPeriods.map(e => e ? l.Period.toJSON(e) : void 0) : t.vestingPeriods = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, g);
                    if (t.vestingPeriods = [], void 0 !== e.fromAddress && null !== e.fromAddress ? t.fromAddress = e.fromAddress : t.fromAddress = "", void 0 !== e.toAddress && null !== e.toAddress ? t.toAddress = e.toAddress : t.toAddress = "", void 0 !== e.startTime && null !== e.startTime ? t.startTime = e.startTime : t.startTime = i.default.ZERO, void 0 !== e.vestingPeriods && null !== e.vestingPeriods)
                        for (const n of e.vestingPeriods) t.vestingPeriods.push(l.Period.fromPartial(n));
                    return t
                }
            };
            const m = {};
            t.MsgCreatePeriodicVestingAccountResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, m);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, m),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, m)
            };
            const f = {
                fromAddress: ""
            };
            t.MsgDonateAllVestingTokens = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.fromAddress && t.uint32(10).string(e.fromAddress), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, f);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.fromAddress = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.fromAddress && null !== e.fromAddress ? t.fromAddress = String(e.fromAddress) : t.fromAddress = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.fromAddress && null !== e.fromAddress ? t.fromAddress = e.fromAddress : t.fromAddress = "", t
                }
            };
            const v = {};
            t.MsgDonateAllVestingTokensResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, v);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, v),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, v)
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.CreateVestingAccount = this.CreateVestingAccount.bind(this), this.CreatePeriodicVestingAccount = this.CreatePeriodicVestingAccount.bind(this), this.DonateAllVestingTokens = this.DonateAllVestingTokens.bind(this)
                }
                CreateVestingAccount(e, n) {
                    return this.rpc.unary(t.MsgCreateVestingAccountDesc, t.MsgCreateVestingAccount.fromPartial(e), n)
                }
                CreatePeriodicVestingAccount(e, n) {
                    return this.rpc.unary(t.MsgCreatePeriodicVestingAccountDesc, t.MsgCreatePeriodicVestingAccount.fromPartial(e), n)
                }
                DonateAllVestingTokens(e, n) {
                    return this.rpc.unary(t.MsgDonateAllVestingTokensDesc, t.MsgDonateAllVestingTokens.fromPartial(e), n)
                }
            }, t.MsgDesc = {
                serviceName: "cosmos.vesting.v1beta1.Msg"
            }, t.MsgCreateVestingAccountDesc = {
                methodName: "CreateVestingAccount",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgCreateVestingAccount.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgCreateVestingAccountResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgCreatePeriodicVestingAccountDesc = {
                methodName: "CreatePeriodicVestingAccount",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgCreatePeriodicVestingAccount.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgCreatePeriodicVestingAccountResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgDonateAllVestingTokensDesc = {
                methodName: "DonateAllVestingTokens",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgDonateAllVestingTokens.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgDonateAllVestingTokensResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            };
            t.GrpcWebImpl = class GrpcWebImpl {
                constructor(e, t) {
                    this.host = e, this.options = t
                }
                unary(e, t, n) {
                    var o;
                    const i = Object.assign(Object.assign({}, t), e.requestType),
                        r = n && this.options.metadata ? new a.BrowserHeaders(Object.assign(Object.assign({}, null === (o = this.options) || void 0 === o ? void 0 : o.metadata.headersMap), null == n ? void 0 : n.headersMap)) : n || this.options.metadata;
                    return new Promise((t, n) => {
                        s.grpc.unary(e, {
                            request: i,
                            host: this.host,
                            metadata: r,
                            transport: this.options.transport,
                            debug: this.options.debug,
                            onEnd: function(e) {
                                if (e.status === s.grpc.Code.OK) t(e.message);
                                else {
                                    const t = new Error(e.statusMessage);
                                    t.code = e.status, t.metadata = e.trailers, n(t)
                                }
                            }
                        })
                    })
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        1102: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Fee = t.ModeInfo_Multi = t.ModeInfo_Single = t.ModeInfo = t.SignerInfo = t.AuthInfo = t.TxBody = t.SignDoc = t.TxRaw = t.Tx = t.protobufPackage = void 0;
            const i = o(n(1)),
                s = o(n(8)),
                r = n(19),
                a = n(419),
                d = n(644),
                l = n(121);
            t.protobufPackage = "cosmos.tx.v1beta1";
            const c = {};
            t.Tx = {
                encode(e, n = s.default.Writer.create()) {
                    void 0 !== e.body && t.TxBody.encode(e.body, n.uint32(10).fork()).ldelim(), void 0 !== e.authInfo && t.AuthInfo.encode(e.authInfo, n.uint32(18).fork()).ldelim();
                    for (const t of e.signatures) n.uint32(26).bytes(t);
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, c);
                    for (r.signatures = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.body = t.TxBody.decode(o, o.uint32());
                                break;
                            case 2:
                                r.authInfo = t.AuthInfo.decode(o, o.uint32());
                                break;
                            case 3:
                                r.signatures.push(o.bytes());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, c);
                    if (n.signatures = [], void 0 !== e.body && null !== e.body ? n.body = t.TxBody.fromJSON(e.body) : n.body = void 0, void 0 !== e.authInfo && null !== e.authInfo ? n.authInfo = t.AuthInfo.fromJSON(e.authInfo) : n.authInfo = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const t of e.signatures) n.signatures.push(y(t));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.body && (n.body = e.body ? t.TxBody.toJSON(e.body) : void 0), void 0 !== e.authInfo && (n.authInfo = e.authInfo ? t.AuthInfo.toJSON(e.authInfo) : void 0), e.signatures ? n.signatures = e.signatures.map(e => k(void 0 !== e ? e : new Uint8Array)) : n.signatures = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, c);
                    if (n.signatures = [], void 0 !== e.body && null !== e.body ? n.body = t.TxBody.fromPartial(e.body) : n.body = void 0, void 0 !== e.authInfo && null !== e.authInfo ? n.authInfo = t.AuthInfo.fromPartial(e.authInfo) : n.authInfo = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const t of e.signatures) n.signatures.push(t);
                    return n
                }
            };
            const u = {};
            t.TxRaw = {
                encode(e, t = s.default.Writer.create()) {
                    0 !== e.bodyBytes.length && t.uint32(10).bytes(e.bodyBytes), 0 !== e.authInfoBytes.length && t.uint32(18).bytes(e.authInfoBytes);
                    for (const n of e.signatures) t.uint32(26).bytes(n);
                    return t
                },
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (i.signatures = [], i.bodyBytes = new Uint8Array, i.authInfoBytes = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.bodyBytes = n.bytes();
                                break;
                            case 2:
                                i.authInfoBytes = n.bytes();
                                break;
                            case 3:
                                i.signatures.push(n.bytes());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    if (t.signatures = [], t.bodyBytes = new Uint8Array, t.authInfoBytes = new Uint8Array, void 0 !== e.bodyBytes && null !== e.bodyBytes && (t.bodyBytes = y(e.bodyBytes)), void 0 !== e.authInfoBytes && null !== e.authInfoBytes && (t.authInfoBytes = y(e.authInfoBytes)), void 0 !== e.signatures && null !== e.signatures)
                        for (const n of e.signatures) t.signatures.push(y(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.bodyBytes && (t.bodyBytes = k(void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array)), void 0 !== e.authInfoBytes && (t.authInfoBytes = k(void 0 !== e.authInfoBytes ? e.authInfoBytes : new Uint8Array)), e.signatures ? t.signatures = e.signatures.map(e => k(void 0 !== e ? e : new Uint8Array)) : t.signatures = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    if (t.signatures = [], void 0 !== e.bodyBytes && null !== e.bodyBytes ? t.bodyBytes = e.bodyBytes : t.bodyBytes = new Uint8Array, void 0 !== e.authInfoBytes && null !== e.authInfoBytes ? t.authInfoBytes = e.authInfoBytes : t.authInfoBytes = new Uint8Array, void 0 !== e.signatures && null !== e.signatures)
                        for (const n of e.signatures) t.signatures.push(n);
                    return t
                }
            };
            const g = {
                chainId: "",
                accountNumber: i.default.UZERO
            };
            t.SignDoc = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.bodyBytes.length && t.uint32(10).bytes(e.bodyBytes), 0 !== e.authInfoBytes.length && t.uint32(18).bytes(e.authInfoBytes), "" !== e.chainId && t.uint32(26).string(e.chainId), e.accountNumber.isZero() || t.uint32(32).uint64(e.accountNumber), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, g);
                    for (i.bodyBytes = new Uint8Array, i.authInfoBytes = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.bodyBytes = n.bytes();
                                break;
                            case 2:
                                i.authInfoBytes = n.bytes();
                                break;
                            case 3:
                                i.chainId = n.string();
                                break;
                            case 4:
                                i.accountNumber = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return t.bodyBytes = new Uint8Array, t.authInfoBytes = new Uint8Array, void 0 !== e.bodyBytes && null !== e.bodyBytes && (t.bodyBytes = y(e.bodyBytes)), void 0 !== e.authInfoBytes && null !== e.authInfoBytes && (t.authInfoBytes = y(e.authInfoBytes)), void 0 !== e.chainId && null !== e.chainId ? t.chainId = String(e.chainId) : t.chainId = "", void 0 !== e.accountNumber && null !== e.accountNumber ? t.accountNumber = i.default.fromString(e.accountNumber) : t.accountNumber = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.bodyBytes && (t.bodyBytes = k(void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array)), void 0 !== e.authInfoBytes && (t.authInfoBytes = k(void 0 !== e.authInfoBytes ? e.authInfoBytes : new Uint8Array)), void 0 !== e.chainId && (t.chainId = e.chainId), void 0 !== e.accountNumber && (t.accountNumber = (e.accountNumber || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.bodyBytes && null !== e.bodyBytes ? t.bodyBytes = e.bodyBytes : t.bodyBytes = new Uint8Array, void 0 !== e.authInfoBytes && null !== e.authInfoBytes ? t.authInfoBytes = e.authInfoBytes : t.authInfoBytes = new Uint8Array, void 0 !== e.chainId && null !== e.chainId ? t.chainId = e.chainId : t.chainId = "", void 0 !== e.accountNumber && null !== e.accountNumber ? t.accountNumber = e.accountNumber : t.accountNumber = i.default.UZERO, t
                }
            };
            const m = {
                memo: "",
                timeoutHeight: i.default.UZERO
            };
            t.TxBody = {
                encode(e, t = s.default.Writer.create()) {
                    for (const n of e.messages) r.Any.encode(n, t.uint32(10).fork()).ldelim();
                    "" !== e.memo && t.uint32(18).string(e.memo), e.timeoutHeight.isZero() || t.uint32(24).uint64(e.timeoutHeight);
                    for (const n of e.extensionOptions) r.Any.encode(n, t.uint32(8186).fork()).ldelim();
                    for (const n of e.nonCriticalExtensionOptions) r.Any.encode(n, t.uint32(16378).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, m);
                    for (i.messages = [], i.extensionOptions = [], i.nonCriticalExtensionOptions = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.messages.push(r.Any.decode(n, n.uint32()));
                                break;
                            case 2:
                                i.memo = n.string();
                                break;
                            case 3:
                                i.timeoutHeight = n.uint64();
                                break;
                            case 1023:
                                i.extensionOptions.push(r.Any.decode(n, n.uint32()));
                                break;
                            case 2047:
                                i.nonCriticalExtensionOptions.push(r.Any.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    if (t.messages = [], t.extensionOptions = [], t.nonCriticalExtensionOptions = [], void 0 !== e.messages && null !== e.messages)
                        for (const n of e.messages) t.messages.push(r.Any.fromJSON(n));
                    if (void 0 !== e.memo && null !== e.memo ? t.memo = String(e.memo) : t.memo = "", void 0 !== e.timeoutHeight && null !== e.timeoutHeight ? t.timeoutHeight = i.default.fromString(e.timeoutHeight) : t.timeoutHeight = i.default.UZERO, void 0 !== e.extensionOptions && null !== e.extensionOptions)
                        for (const n of e.extensionOptions) t.extensionOptions.push(r.Any.fromJSON(n));
                    if (void 0 !== e.nonCriticalExtensionOptions && null !== e.nonCriticalExtensionOptions)
                        for (const n of e.nonCriticalExtensionOptions) t.nonCriticalExtensionOptions.push(r.Any.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.messages ? t.messages = e.messages.map(e => e ? r.Any.toJSON(e) : void 0) : t.messages = [], void 0 !== e.memo && (t.memo = e.memo), void 0 !== e.timeoutHeight && (t.timeoutHeight = (e.timeoutHeight || i.default.UZERO).toString()), e.extensionOptions ? t.extensionOptions = e.extensionOptions.map(e => e ? r.Any.toJSON(e) : void 0) : t.extensionOptions = [], e.nonCriticalExtensionOptions ? t.nonCriticalExtensionOptions = e.nonCriticalExtensionOptions.map(e => e ? r.Any.toJSON(e) : void 0) : t.nonCriticalExtensionOptions = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, m);
                    if (t.messages = [], t.extensionOptions = [], t.nonCriticalExtensionOptions = [], void 0 !== e.messages && null !== e.messages)
                        for (const n of e.messages) t.messages.push(r.Any.fromPartial(n));
                    if (void 0 !== e.memo && null !== e.memo ? t.memo = e.memo : t.memo = "", void 0 !== e.timeoutHeight && null !== e.timeoutHeight ? t.timeoutHeight = e.timeoutHeight : t.timeoutHeight = i.default.UZERO, void 0 !== e.extensionOptions && null !== e.extensionOptions)
                        for (const n of e.extensionOptions) t.extensionOptions.push(r.Any.fromPartial(n));
                    if (void 0 !== e.nonCriticalExtensionOptions && null !== e.nonCriticalExtensionOptions)
                        for (const n of e.nonCriticalExtensionOptions) t.nonCriticalExtensionOptions.push(r.Any.fromPartial(n));
                    return t
                }
            };
            const f = {};
            t.AuthInfo = {
                encode(e, n = s.default.Writer.create()) {
                    for (const o of e.signerInfos) t.SignerInfo.encode(o, n.uint32(10).fork()).ldelim();
                    return void 0 !== e.fee && t.Fee.encode(e.fee, n.uint32(18).fork()).ldelim(), n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, f);
                    for (r.signerInfos = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.signerInfos.push(t.SignerInfo.decode(o, o.uint32()));
                                break;
                            case 2:
                                r.fee = t.Fee.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, f);
                    if (n.signerInfos = [], void 0 !== e.signerInfos && null !== e.signerInfos)
                        for (const o of e.signerInfos) n.signerInfos.push(t.SignerInfo.fromJSON(o));
                    return void 0 !== e.fee && null !== e.fee ? n.fee = t.Fee.fromJSON(e.fee) : n.fee = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return e.signerInfos ? n.signerInfos = e.signerInfos.map(e => e ? t.SignerInfo.toJSON(e) : void 0) : n.signerInfos = [], void 0 !== e.fee && (n.fee = e.fee ? t.Fee.toJSON(e.fee) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, f);
                    if (n.signerInfos = [], void 0 !== e.signerInfos && null !== e.signerInfos)
                        for (const o of e.signerInfos) n.signerInfos.push(t.SignerInfo.fromPartial(o));
                    return void 0 !== e.fee && null !== e.fee ? n.fee = t.Fee.fromPartial(e.fee) : n.fee = void 0, n
                }
            };
            const v = {
                sequence: i.default.UZERO
            };
            t.SignerInfo = {
                encode: (e, n = s.default.Writer.create()) => (void 0 !== e.publicKey && r.Any.encode(e.publicKey, n.uint32(10).fork()).ldelim(), void 0 !== e.modeInfo && t.ModeInfo.encode(e.modeInfo, n.uint32(18).fork()).ldelim(), e.sequence.isZero() || n.uint32(24).uint64(e.sequence), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const a = Object.assign({}, v);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.publicKey = r.Any.decode(o, o.uint32());
                                break;
                            case 2:
                                a.modeInfo = t.ModeInfo.decode(o, o.uint32());
                                break;
                            case 3:
                                a.sequence = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const n = Object.assign({}, v);
                    return void 0 !== e.publicKey && null !== e.publicKey ? n.publicKey = r.Any.fromJSON(e.publicKey) : n.publicKey = void 0, void 0 !== e.modeInfo && null !== e.modeInfo ? n.modeInfo = t.ModeInfo.fromJSON(e.modeInfo) : n.modeInfo = void 0, void 0 !== e.sequence && null !== e.sequence ? n.sequence = i.default.fromString(e.sequence) : n.sequence = i.default.UZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.publicKey && (n.publicKey = e.publicKey ? r.Any.toJSON(e.publicKey) : void 0), void 0 !== e.modeInfo && (n.modeInfo = e.modeInfo ? t.ModeInfo.toJSON(e.modeInfo) : void 0), void 0 !== e.sequence && (n.sequence = (e.sequence || i.default.UZERO).toString()), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, v);
                    return void 0 !== e.publicKey && null !== e.publicKey ? n.publicKey = r.Any.fromPartial(e.publicKey) : n.publicKey = void 0, void 0 !== e.modeInfo && null !== e.modeInfo ? n.modeInfo = t.ModeInfo.fromPartial(e.modeInfo) : n.modeInfo = void 0, void 0 !== e.sequence && null !== e.sequence ? n.sequence = e.sequence : n.sequence = i.default.UZERO, n
                }
            };
            const p = {};
            t.ModeInfo = {
                encode: (e, n = s.default.Writer.create()) => (void 0 !== e.single && t.ModeInfo_Single.encode(e.single, n.uint32(10).fork()).ldelim(), void 0 !== e.multi && t.ModeInfo_Multi.encode(e.multi, n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, p);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.single = t.ModeInfo_Single.decode(o, o.uint32());
                                break;
                            case 2:
                                r.multi = t.ModeInfo_Multi.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, p);
                    return void 0 !== e.single && null !== e.single ? n.single = t.ModeInfo_Single.fromJSON(e.single) : n.single = void 0, void 0 !== e.multi && null !== e.multi ? n.multi = t.ModeInfo_Multi.fromJSON(e.multi) : n.multi = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.single && (n.single = e.single ? t.ModeInfo_Single.toJSON(e.single) : void 0), void 0 !== e.multi && (n.multi = e.multi ? t.ModeInfo_Multi.toJSON(e.multi) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, p);
                    return void 0 !== e.single && null !== e.single ? n.single = t.ModeInfo_Single.fromPartial(e.single) : n.single = void 0, void 0 !== e.multi && null !== e.multi ? n.multi = t.ModeInfo_Multi.fromPartial(e.multi) : n.multi = void 0, n
                }
            };
            const b = {
                mode: 0
            };
            t.ModeInfo_Single = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.mode && t.uint32(8).int32(e.mode), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, b);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.mode = n.int32();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.mode && null !== e.mode ? t.mode = a.signModeFromJSON(e.mode) : t.mode = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.mode && (t.mode = a.signModeToJSON(e.mode)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.mode && null !== e.mode ? t.mode = e.mode : t.mode = 0, t
                }
            };
            const A = {};
            t.ModeInfo_Multi = {
                encode(e, n = s.default.Writer.create()) {
                    void 0 !== e.bitarray && d.CompactBitArray.encode(e.bitarray, n.uint32(10).fork()).ldelim();
                    for (const o of e.modeInfos) t.ModeInfo.encode(o, n.uint32(18).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, A);
                    for (r.modeInfos = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.bitarray = d.CompactBitArray.decode(o, o.uint32());
                                break;
                            case 2:
                                r.modeInfos.push(t.ModeInfo.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, A);
                    if (n.modeInfos = [], void 0 !== e.bitarray && null !== e.bitarray ? n.bitarray = d.CompactBitArray.fromJSON(e.bitarray) : n.bitarray = void 0, void 0 !== e.modeInfos && null !== e.modeInfos)
                        for (const o of e.modeInfos) n.modeInfos.push(t.ModeInfo.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.bitarray && (n.bitarray = e.bitarray ? d.CompactBitArray.toJSON(e.bitarray) : void 0), e.modeInfos ? n.modeInfos = e.modeInfos.map(e => e ? t.ModeInfo.toJSON(e) : void 0) : n.modeInfos = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, A);
                    if (n.modeInfos = [], void 0 !== e.bitarray && null !== e.bitarray ? n.bitarray = d.CompactBitArray.fromPartial(e.bitarray) : n.bitarray = void 0, void 0 !== e.modeInfos && null !== e.modeInfos)
                        for (const o of e.modeInfos) n.modeInfos.push(t.ModeInfo.fromPartial(o));
                    return n
                }
            };
            const O = {
                gasLimit: i.default.UZERO,
                payer: "",
                granter: ""
            };
            t.Fee = {
                encode(e, t = s.default.Writer.create()) {
                    for (const n of e.amount) l.Coin.encode(n, t.uint32(10).fork()).ldelim();
                    return e.gasLimit.isZero() || t.uint32(16).uint64(e.gasLimit), "" !== e.payer && t.uint32(26).string(e.payer), "" !== e.granter && t.uint32(34).string(e.granter), t
                },
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, O);
                    for (i.amount = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.amount.push(l.Coin.decode(n, n.uint32()));
                                break;
                            case 2:
                                i.gasLimit = n.uint64();
                                break;
                            case 3:
                                i.payer = n.string();
                                break;
                            case 4:
                                i.granter = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, O);
                    if (t.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const n of e.amount) t.amount.push(l.Coin.fromJSON(n));
                    return void 0 !== e.gasLimit && null !== e.gasLimit ? t.gasLimit = i.default.fromString(e.gasLimit) : t.gasLimit = i.default.UZERO, void 0 !== e.payer && null !== e.payer ? t.payer = String(e.payer) : t.payer = "", void 0 !== e.granter && null !== e.granter ? t.granter = String(e.granter) : t.granter = "", t
                },
                toJSON(e) {
                    const t = {};
                    return e.amount ? t.amount = e.amount.map(e => e ? l.Coin.toJSON(e) : void 0) : t.amount = [], void 0 !== e.gasLimit && (t.gasLimit = (e.gasLimit || i.default.UZERO).toString()), void 0 !== e.payer && (t.payer = e.payer), void 0 !== e.granter && (t.granter = e.granter), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, O);
                    if (t.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const n of e.amount) t.amount.push(l.Coin.fromPartial(n));
                    return void 0 !== e.gasLimit && null !== e.gasLimit ? t.gasLimit = e.gasLimit : t.gasLimit = i.default.UZERO, void 0 !== e.payer && null !== e.payer ? t.payer = e.payer : t.payer = "", void 0 !== e.granter && null !== e.granter ? t.granter = e.granter : t.granter = "", t
                }
            };
            var S = (() => {
                if (void 0 !== S) return S;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const h = S.atob || (e => S.Buffer.from(e, "base64").toString("binary"));

            function y(e) {
                const t = h(e),
                    n = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                return n
            }
            const T = S.btoa || (e => S.Buffer.from(e, "binary").toString("base64"));

            function k(e) {
                const t = [];
                for (const n of e) t.push(String.fromCharCode(n));
                return T(t.join(""))
            }
            s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        1900: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ModuleVersion = t.CancelSoftwareUpgradeProposal = t.SoftwareUpgradeProposal = t.Plan = t.protobufPackage = void 0;
            const i = o(n(1)),
                s = o(n(8)),
                r = n(19),
                a = n(268);
            t.protobufPackage = "cosmos.upgrade.v1beta1";
            const d = {
                name: "",
                height: i.default.ZERO,
                info: ""
            };
            t.Plan = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.name && t.uint32(10).string(e.name), void 0 !== e.time && a.Timestamp.encode(function(e) {
                    const t = (o = e.getTime() / 1e3, i.default.fromNumber(o)),
                        n = e.getTime() % 1e3 * 1e6;
                    var o;
                    return {
                        seconds: t,
                        nanos: n
                    }
                }(e.time), t.uint32(18).fork()).ldelim(), e.height.isZero() || t.uint32(24).int64(e.height), "" !== e.info && t.uint32(34).string(e.info), void 0 !== e.upgradedClientState && r.Any.encode(e.upgradedClientState, t.uint32(42).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.name = n.string();
                                break;
                            case 2:
                                i.time = g(a.Timestamp.decode(n, n.uint32()));
                                break;
                            case 3:
                                i.height = n.int64();
                                break;
                            case 4:
                                i.info = n.string();
                                break;
                            case 5:
                                i.upgradedClientState = r.Any.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    var n;
                    return void 0 !== e.name && null !== e.name ? t.name = String(e.name) : t.name = "", void 0 !== e.time && null !== e.time ? t.time = (n = e.time) instanceof Date ? n : "string" == typeof n ? new Date(n) : g(a.Timestamp.fromJSON(n)) : t.time = void 0, void 0 !== e.height && null !== e.height ? t.height = i.default.fromString(e.height) : t.height = i.default.ZERO, void 0 !== e.info && null !== e.info ? t.info = String(e.info) : t.info = "", void 0 !== e.upgradedClientState && null !== e.upgradedClientState ? t.upgradedClientState = r.Any.fromJSON(e.upgradedClientState) : t.upgradedClientState = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.name && (t.name = e.name), void 0 !== e.time && (t.time = e.time.toISOString()), void 0 !== e.height && (t.height = (e.height || i.default.ZERO).toString()), void 0 !== e.info && (t.info = e.info), void 0 !== e.upgradedClientState && (t.upgradedClientState = e.upgradedClientState ? r.Any.toJSON(e.upgradedClientState) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.name && null !== e.name ? t.name = e.name : t.name = "", void 0 !== e.time && null !== e.time ? t.time = e.time : t.time = void 0, void 0 !== e.height && null !== e.height ? t.height = e.height : t.height = i.default.ZERO, void 0 !== e.info && null !== e.info ? t.info = e.info : t.info = "", void 0 !== e.upgradedClientState && null !== e.upgradedClientState ? t.upgradedClientState = r.Any.fromPartial(e.upgradedClientState) : t.upgradedClientState = void 0, t
                }
            };
            const l = {
                title: "",
                description: ""
            };
            t.SoftwareUpgradeProposal = {
                encode: (e, n = s.default.Writer.create()) => ("" !== e.title && n.uint32(10).string(e.title), "" !== e.description && n.uint32(18).string(e.description), void 0 !== e.plan && t.Plan.encode(e.plan, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, l);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.title = o.string();
                                break;
                            case 2:
                                r.description = o.string();
                                break;
                            case 3:
                                r.plan = t.Plan.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, l);
                    return void 0 !== e.title && null !== e.title ? n.title = String(e.title) : n.title = "", void 0 !== e.description && null !== e.description ? n.description = String(e.description) : n.description = "", void 0 !== e.plan && null !== e.plan ? n.plan = t.Plan.fromJSON(e.plan) : n.plan = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.title && (n.title = e.title), void 0 !== e.description && (n.description = e.description), void 0 !== e.plan && (n.plan = e.plan ? t.Plan.toJSON(e.plan) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, l);
                    return void 0 !== e.title && null !== e.title ? n.title = e.title : n.title = "", void 0 !== e.description && null !== e.description ? n.description = e.description : n.description = "", void 0 !== e.plan && null !== e.plan ? n.plan = t.Plan.fromPartial(e.plan) : n.plan = void 0, n
                }
            };
            const c = {
                title: "",
                description: ""
            };
            t.CancelSoftwareUpgradeProposal = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, c);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = n.string();
                                break;
                            case 2:
                                i.description = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", t
                }
            };
            const u = {
                name: "",
                version: i.default.UZERO
            };

            function g(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }
            t.ModuleVersion = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.name && t.uint32(10).string(e.name), e.version.isZero() || t.uint32(16).uint64(e.version), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.name = n.string();
                                break;
                            case 2:
                                i.version = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.name && null !== e.name ? t.name = String(e.name) : t.name = "", void 0 !== e.version && null !== e.version ? t.version = i.default.fromString(e.version) : t.version = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.name && (t.name = e.name), void 0 !== e.version && (t.version = (e.version || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.name && null !== e.name ? t.name = e.name : t.name = "", void 0 !== e.version && null !== e.version ? t.version = e.version : t.version = i.default.UZERO, t
                }
            }, s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3746: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ParamChange = t.ParameterChangeProposal = t.protobufPackage = void 0;
            const i = o(n(1)),
                s = o(n(8));
            t.protobufPackage = "cosmos.params.v1beta1";
            const r = {
                title: "",
                description: ""
            };
            t.ParameterChangeProposal = {
                encode(e, n = s.default.Writer.create()) {
                    "" !== e.title && n.uint32(10).string(e.title), "" !== e.description && n.uint32(18).string(e.description);
                    for (const o of e.changes) t.ParamChange.encode(o, n.uint32(26).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const a = Object.assign({}, r);
                    for (a.changes = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.title = o.string();
                                break;
                            case 2:
                                a.description = o.string();
                                break;
                            case 3:
                                a.changes.push(t.ParamChange.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const n = Object.assign({}, r);
                    if (n.changes = [], void 0 !== e.title && null !== e.title ? n.title = String(e.title) : n.title = "", void 0 !== e.description && null !== e.description ? n.description = String(e.description) : n.description = "", void 0 !== e.changes && null !== e.changes)
                        for (const o of e.changes) n.changes.push(t.ParamChange.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.title && (n.title = e.title), void 0 !== e.description && (n.description = e.description), e.changes ? n.changes = e.changes.map(e => e ? t.ParamChange.toJSON(e) : void 0) : n.changes = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, r);
                    if (n.changes = [], void 0 !== e.title && null !== e.title ? n.title = e.title : n.title = "", void 0 !== e.description && null !== e.description ? n.description = e.description : n.description = "", void 0 !== e.changes && null !== e.changes)
                        for (const o of e.changes) n.changes.push(t.ParamChange.fromPartial(o));
                    return n
                }
            };
            const a = {
                subspace: "",
                key: "",
                value: ""
            };
            t.ParamChange = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.subspace && t.uint32(10).string(e.subspace), "" !== e.key && t.uint32(18).string(e.key), "" !== e.value && t.uint32(26).string(e.value), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, a);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.subspace = n.string();
                                break;
                            case 2:
                                i.key = n.string();
                                break;
                            case 3:
                                i.value = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, a);
                    return void 0 !== e.subspace && null !== e.subspace ? t.subspace = String(e.subspace) : t.subspace = "", void 0 !== e.key && null !== e.key ? t.key = String(e.key) : t.key = "", void 0 !== e.value && null !== e.value ? t.value = String(e.value) : t.value = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.subspace && (t.subspace = e.subspace), void 0 !== e.key && (t.key = e.key), void 0 !== e.value && (t.value = e.value), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, a);
                    return void 0 !== e.subspace && null !== e.subspace ? t.subspace = e.subspace : t.subspace = "", void 0 !== e.key && null !== e.key ? t.key = e.key : t.key = "", void 0 !== e.value && null !== e.value ? t.value = e.value : t.value = "", t
                }
            }, s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3768: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StakeAuthorization_Validators = t.StakeAuthorization = t.authorizationTypeToJSON = t.authorizationTypeFromJSON = t.AuthorizationType = t.protobufPackage = void 0;
            const i = o(n(1)),
                s = o(n(8)),
                r = n(121);
            var a;

            function d(e) {
                switch (e) {
                    case 0:
                    case "AUTHORIZATION_TYPE_UNSPECIFIED":
                        return a.AUTHORIZATION_TYPE_UNSPECIFIED;
                    case 1:
                    case "AUTHORIZATION_TYPE_DELEGATE":
                        return a.AUTHORIZATION_TYPE_DELEGATE;
                    case 2:
                    case "AUTHORIZATION_TYPE_UNDELEGATE":
                        return a.AUTHORIZATION_TYPE_UNDELEGATE;
                    case 3:
                    case "AUTHORIZATION_TYPE_REDELEGATE":
                        return a.AUTHORIZATION_TYPE_REDELEGATE;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return a.UNRECOGNIZED
                }
            }

            function l(e) {
                switch (e) {
                    case a.AUTHORIZATION_TYPE_UNSPECIFIED:
                        return "AUTHORIZATION_TYPE_UNSPECIFIED";
                    case a.AUTHORIZATION_TYPE_DELEGATE:
                        return "AUTHORIZATION_TYPE_DELEGATE";
                    case a.AUTHORIZATION_TYPE_UNDELEGATE:
                        return "AUTHORIZATION_TYPE_UNDELEGATE";
                    case a.AUTHORIZATION_TYPE_REDELEGATE:
                        return "AUTHORIZATION_TYPE_REDELEGATE";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "cosmos.staking.v1beta1",
                function(e) {
                    e[e.AUTHORIZATION_TYPE_UNSPECIFIED = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED", e[e.AUTHORIZATION_TYPE_DELEGATE = 1] = "AUTHORIZATION_TYPE_DELEGATE", e[e.AUTHORIZATION_TYPE_UNDELEGATE = 2] = "AUTHORIZATION_TYPE_UNDELEGATE", e[e.AUTHORIZATION_TYPE_REDELEGATE = 3] = "AUTHORIZATION_TYPE_REDELEGATE", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(a = t.AuthorizationType || (t.AuthorizationType = {})), t.authorizationTypeFromJSON = d, t.authorizationTypeToJSON = l;
            const c = {
                authorizationType: 0
            };
            t.StakeAuthorization = {
                encode: (e, n = s.default.Writer.create()) => (void 0 !== e.maxTokens && r.Coin.encode(e.maxTokens, n.uint32(10).fork()).ldelim(), void 0 !== e.allowList && t.StakeAuthorization_Validators.encode(e.allowList, n.uint32(18).fork()).ldelim(), void 0 !== e.denyList && t.StakeAuthorization_Validators.encode(e.denyList, n.uint32(26).fork()).ldelim(), 0 !== e.authorizationType && n.uint32(32).int32(e.authorizationType), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const a = Object.assign({}, c);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.maxTokens = r.Coin.decode(o, o.uint32());
                                break;
                            case 2:
                                a.allowList = t.StakeAuthorization_Validators.decode(o, o.uint32());
                                break;
                            case 3:
                                a.denyList = t.StakeAuthorization_Validators.decode(o, o.uint32());
                                break;
                            case 4:
                                a.authorizationType = o.int32();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const n = Object.assign({}, c);
                    return void 0 !== e.maxTokens && null !== e.maxTokens ? n.maxTokens = r.Coin.fromJSON(e.maxTokens) : n.maxTokens = void 0, void 0 !== e.allowList && null !== e.allowList ? n.allowList = t.StakeAuthorization_Validators.fromJSON(e.allowList) : n.allowList = void 0, void 0 !== e.denyList && null !== e.denyList ? n.denyList = t.StakeAuthorization_Validators.fromJSON(e.denyList) : n.denyList = void 0, void 0 !== e.authorizationType && null !== e.authorizationType ? n.authorizationType = d(e.authorizationType) : n.authorizationType = 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.maxTokens && (n.maxTokens = e.maxTokens ? r.Coin.toJSON(e.maxTokens) : void 0), void 0 !== e.allowList && (n.allowList = e.allowList ? t.StakeAuthorization_Validators.toJSON(e.allowList) : void 0), void 0 !== e.denyList && (n.denyList = e.denyList ? t.StakeAuthorization_Validators.toJSON(e.denyList) : void 0), void 0 !== e.authorizationType && (n.authorizationType = l(e.authorizationType)), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, c);
                    return void 0 !== e.maxTokens && null !== e.maxTokens ? n.maxTokens = r.Coin.fromPartial(e.maxTokens) : n.maxTokens = void 0, void 0 !== e.allowList && null !== e.allowList ? n.allowList = t.StakeAuthorization_Validators.fromPartial(e.allowList) : n.allowList = void 0, void 0 !== e.denyList && null !== e.denyList ? n.denyList = t.StakeAuthorization_Validators.fromPartial(e.denyList) : n.denyList = void 0, void 0 !== e.authorizationType && null !== e.authorizationType ? n.authorizationType = e.authorizationType : n.authorizationType = 0, n
                }
            };
            const u = {
                address: ""
            };
            t.StakeAuthorization_Validators = {
                encode(e, t = s.default.Writer.create()) {
                    for (const n of e.address) t.uint32(10).string(n);
                    return t
                },
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (i.address = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.address.push(n.string());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    if (t.address = [], void 0 !== e.address && null !== e.address)
                        for (const n of e.address) t.address.push(String(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.address ? t.address = e.address.map(e => e) : t.address = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    if (t.address = [], void 0 !== e.address && null !== e.address)
                        for (const n of e.address) t.address.push(n);
                    return t
                }
            }, s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3776: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GrpcWebImpl = t.MsgUnjailDesc = t.MsgDesc = t.MsgClientImpl = t.MsgUnjailResponse = t.MsgUnjail = t.protobufPackage = void 0;
            const i = o(n(1)),
                s = n(156),
                r = o(n(8)),
                a = n(157);
            t.protobufPackage = "cosmos.slashing.v1beta1";
            const d = {
                validatorAddr: ""
            };
            t.MsgUnjail = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.validatorAddr && t.uint32(10).string(e.validatorAddr), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validatorAddr = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.validatorAddr && null !== e.validatorAddr ? t.validatorAddr = String(e.validatorAddr) : t.validatorAddr = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.validatorAddr && (t.validatorAddr = e.validatorAddr), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.validatorAddr && null !== e.validatorAddr ? t.validatorAddr = e.validatorAddr : t.validatorAddr = "", t
                }
            };
            const l = {};
            t.MsgUnjailResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, l);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, l),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, l)
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.Unjail = this.Unjail.bind(this)
                }
                Unjail(e, n) {
                    return this.rpc.unary(t.MsgUnjailDesc, t.MsgUnjail.fromPartial(e), n)
                }
            }, t.MsgDesc = {
                serviceName: "cosmos.slashing.v1beta1.Msg"
            }, t.MsgUnjailDesc = {
                methodName: "Unjail",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgUnjail.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgUnjailResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            };
            t.GrpcWebImpl = class GrpcWebImpl {
                constructor(e, t) {
                    this.host = e, this.options = t
                }
                unary(e, t, n) {
                    var o;
                    const i = Object.assign(Object.assign({}, t), e.requestType),
                        r = n && this.options.metadata ? new a.BrowserHeaders(Object.assign(Object.assign({}, null === (o = this.options) || void 0 === o ? void 0 : o.metadata.headersMap), null == n ? void 0 : n.headersMap)) : n || this.options.metadata;
                    return new Promise((t, n) => {
                        s.grpc.unary(e, {
                            request: i,
                            host: this.host,
                            metadata: r,
                            transport: this.options.transport,
                            debug: this.options.debug,
                            onEnd: function(e) {
                                if (e.status === s.grpc.Code.OK) t(e.message);
                                else {
                                    const t = new Error(e.statusMessage);
                                    t.code = e.status, t.metadata = e.trailers, n(t)
                                }
                            }
                        })
                    })
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        417: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PermanentLockedAccount = t.PeriodicVestingAccount = t.Period = t.DelayedVestingAccount = t.ContinuousVestingAccount = t.BaseVestingAccount = t.protobufPackage = void 0;
            const i = o(n(1)),
                s = o(n(8)),
                r = n(1922),
                a = n(121);
            t.protobufPackage = "cosmos.vesting.v1beta1";
            const d = {
                endTime: i.default.ZERO
            };
            t.BaseVestingAccount = {
                encode(e, t = s.default.Writer.create()) {
                    void 0 !== e.baseAccount && r.BaseAccount.encode(e.baseAccount, t.uint32(10).fork()).ldelim();
                    for (const n of e.originalVesting) a.Coin.encode(n, t.uint32(18).fork()).ldelim();
                    for (const n of e.delegatedFree) a.Coin.encode(n, t.uint32(26).fork()).ldelim();
                    for (const n of e.delegatedVesting) a.Coin.encode(n, t.uint32(34).fork()).ldelim();
                    return e.endTime.isZero() || t.uint32(40).int64(e.endTime), t
                },
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, d);
                    for (i.originalVesting = [], i.delegatedFree = [], i.delegatedVesting = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.baseAccount = r.BaseAccount.decode(n, n.uint32());
                                break;
                            case 2:
                                i.originalVesting.push(a.Coin.decode(n, n.uint32()));
                                break;
                            case 3:
                                i.delegatedFree.push(a.Coin.decode(n, n.uint32()));
                                break;
                            case 4:
                                i.delegatedVesting.push(a.Coin.decode(n, n.uint32()));
                                break;
                            case 5:
                                i.endTime = n.int64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    if (t.originalVesting = [], t.delegatedFree = [], t.delegatedVesting = [], void 0 !== e.baseAccount && null !== e.baseAccount ? t.baseAccount = r.BaseAccount.fromJSON(e.baseAccount) : t.baseAccount = void 0, void 0 !== e.originalVesting && null !== e.originalVesting)
                        for (const n of e.originalVesting) t.originalVesting.push(a.Coin.fromJSON(n));
                    if (void 0 !== e.delegatedFree && null !== e.delegatedFree)
                        for (const n of e.delegatedFree) t.delegatedFree.push(a.Coin.fromJSON(n));
                    if (void 0 !== e.delegatedVesting && null !== e.delegatedVesting)
                        for (const n of e.delegatedVesting) t.delegatedVesting.push(a.Coin.fromJSON(n));
                    return void 0 !== e.endTime && null !== e.endTime ? t.endTime = i.default.fromString(e.endTime) : t.endTime = i.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.baseAccount && (t.baseAccount = e.baseAccount ? r.BaseAccount.toJSON(e.baseAccount) : void 0), e.originalVesting ? t.originalVesting = e.originalVesting.map(e => e ? a.Coin.toJSON(e) : void 0) : t.originalVesting = [], e.delegatedFree ? t.delegatedFree = e.delegatedFree.map(e => e ? a.Coin.toJSON(e) : void 0) : t.delegatedFree = [], e.delegatedVesting ? t.delegatedVesting = e.delegatedVesting.map(e => e ? a.Coin.toJSON(e) : void 0) : t.delegatedVesting = [], void 0 !== e.endTime && (t.endTime = (e.endTime || i.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    if (t.originalVesting = [], t.delegatedFree = [], t.delegatedVesting = [], void 0 !== e.baseAccount && null !== e.baseAccount ? t.baseAccount = r.BaseAccount.fromPartial(e.baseAccount) : t.baseAccount = void 0, void 0 !== e.originalVesting && null !== e.originalVesting)
                        for (const n of e.originalVesting) t.originalVesting.push(a.Coin.fromPartial(n));
                    if (void 0 !== e.delegatedFree && null !== e.delegatedFree)
                        for (const n of e.delegatedFree) t.delegatedFree.push(a.Coin.fromPartial(n));
                    if (void 0 !== e.delegatedVesting && null !== e.delegatedVesting)
                        for (const n of e.delegatedVesting) t.delegatedVesting.push(a.Coin.fromPartial(n));
                    return void 0 !== e.endTime && null !== e.endTime ? t.endTime = e.endTime : t.endTime = i.default.ZERO, t
                }
            };
            const l = {
                startTime: i.default.ZERO
            };
            t.ContinuousVestingAccount = {
                encode: (e, n = s.default.Writer.create()) => (void 0 !== e.baseVestingAccount && t.BaseVestingAccount.encode(e.baseVestingAccount, n.uint32(10).fork()).ldelim(), e.startTime.isZero() || n.uint32(16).int64(e.startTime), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, l);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.baseVestingAccount = t.BaseVestingAccount.decode(o, o.uint32());
                                break;
                            case 2:
                                r.startTime = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, l);
                    return void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? n.baseVestingAccount = t.BaseVestingAccount.fromJSON(e.baseVestingAccount) : n.baseVestingAccount = void 0, void 0 !== e.startTime && null !== e.startTime ? n.startTime = i.default.fromString(e.startTime) : n.startTime = i.default.ZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.baseVestingAccount && (n.baseVestingAccount = e.baseVestingAccount ? t.BaseVestingAccount.toJSON(e.baseVestingAccount) : void 0), void 0 !== e.startTime && (n.startTime = (e.startTime || i.default.ZERO).toString()), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, l);
                    return void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? n.baseVestingAccount = t.BaseVestingAccount.fromPartial(e.baseVestingAccount) : n.baseVestingAccount = void 0, void 0 !== e.startTime && null !== e.startTime ? n.startTime = e.startTime : n.startTime = i.default.ZERO, n
                }
            };
            const c = {};
            t.DelayedVestingAccount = {
                encode: (e, n = s.default.Writer.create()) => (void 0 !== e.baseVestingAccount && t.BaseVestingAccount.encode(e.baseVestingAccount, n.uint32(10).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, c);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.baseVestingAccount = t.BaseVestingAccount.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, c);
                    return void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? n.baseVestingAccount = t.BaseVestingAccount.fromJSON(e.baseVestingAccount) : n.baseVestingAccount = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.baseVestingAccount && (n.baseVestingAccount = e.baseVestingAccount ? t.BaseVestingAccount.toJSON(e.baseVestingAccount) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, c);
                    return void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? n.baseVestingAccount = t.BaseVestingAccount.fromPartial(e.baseVestingAccount) : n.baseVestingAccount = void 0, n
                }
            };
            const u = {
                length: i.default.ZERO
            };
            t.Period = {
                encode(e, t = s.default.Writer.create()) {
                    e.length.isZero() || t.uint32(8).int64(e.length);
                    for (const n of e.amount) a.Coin.encode(n, t.uint32(18).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (i.amount = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.length = n.int64();
                                break;
                            case 2:
                                i.amount.push(a.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    if (t.amount = [], void 0 !== e.length && null !== e.length ? t.length = i.default.fromString(e.length) : t.length = i.default.ZERO, void 0 !== e.amount && null !== e.amount)
                        for (const n of e.amount) t.amount.push(a.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.length && (t.length = (e.length || i.default.ZERO).toString()), e.amount ? t.amount = e.amount.map(e => e ? a.Coin.toJSON(e) : void 0) : t.amount = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    if (t.amount = [], void 0 !== e.length && null !== e.length ? t.length = e.length : t.length = i.default.ZERO, void 0 !== e.amount && null !== e.amount)
                        for (const n of e.amount) t.amount.push(a.Coin.fromPartial(n));
                    return t
                }
            };
            const g = {
                startTime: i.default.ZERO
            };
            t.PeriodicVestingAccount = {
                encode(e, n = s.default.Writer.create()) {
                    void 0 !== e.baseVestingAccount && t.BaseVestingAccount.encode(e.baseVestingAccount, n.uint32(10).fork()).ldelim(), e.startTime.isZero() || n.uint32(16).int64(e.startTime);
                    for (const o of e.vestingPeriods) t.Period.encode(o, n.uint32(26).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, g);
                    for (r.vestingPeriods = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.baseVestingAccount = t.BaseVestingAccount.decode(o, o.uint32());
                                break;
                            case 2:
                                r.startTime = o.int64();
                                break;
                            case 3:
                                r.vestingPeriods.push(t.Period.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, g);
                    if (n.vestingPeriods = [], void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? n.baseVestingAccount = t.BaseVestingAccount.fromJSON(e.baseVestingAccount) : n.baseVestingAccount = void 0, void 0 !== e.startTime && null !== e.startTime ? n.startTime = i.default.fromString(e.startTime) : n.startTime = i.default.ZERO, void 0 !== e.vestingPeriods && null !== e.vestingPeriods)
                        for (const o of e.vestingPeriods) n.vestingPeriods.push(t.Period.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.baseVestingAccount && (n.baseVestingAccount = e.baseVestingAccount ? t.BaseVestingAccount.toJSON(e.baseVestingAccount) : void 0), void 0 !== e.startTime && (n.startTime = (e.startTime || i.default.ZERO).toString()), e.vestingPeriods ? n.vestingPeriods = e.vestingPeriods.map(e => e ? t.Period.toJSON(e) : void 0) : n.vestingPeriods = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, g);
                    if (n.vestingPeriods = [], void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? n.baseVestingAccount = t.BaseVestingAccount.fromPartial(e.baseVestingAccount) : n.baseVestingAccount = void 0, void 0 !== e.startTime && null !== e.startTime ? n.startTime = e.startTime : n.startTime = i.default.ZERO, void 0 !== e.vestingPeriods && null !== e.vestingPeriods)
                        for (const o of e.vestingPeriods) n.vestingPeriods.push(t.Period.fromPartial(o));
                    return n
                }
            };
            const m = {};
            t.PermanentLockedAccount = {
                encode: (e, n = s.default.Writer.create()) => (void 0 !== e.baseVestingAccount && t.BaseVestingAccount.encode(e.baseVestingAccount, n.uint32(10).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, m);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.baseVestingAccount = t.BaseVestingAccount.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, m);
                    return void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? n.baseVestingAccount = t.BaseVestingAccount.fromJSON(e.baseVestingAccount) : n.baseVestingAccount = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.baseVestingAccount && (n.baseVestingAccount = e.baseVestingAccount ? t.BaseVestingAccount.toJSON(e.baseVestingAccount) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, m);
                    return void 0 !== e.baseVestingAccount && null !== e.baseVestingAccount ? n.baseVestingAccount = t.BaseVestingAccount.fromPartial(e.baseVestingAccount) : n.baseVestingAccount = void 0, n
                }
            }, s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        419: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SignatureDescriptor_Data_Multi = t.SignatureDescriptor_Data_Single = t.SignatureDescriptor_Data = t.SignatureDescriptor = t.SignatureDescriptors = t.signModeToJSON = t.signModeFromJSON = t.SignMode = t.protobufPackage = void 0;
            const i = o(n(1)),
                s = o(n(8)),
                r = n(19),
                a = n(644);
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
                    case 191:
                    case "SIGN_MODE_EIP_191":
                        return d.SIGN_MODE_EIP_191;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return d.UNRECOGNIZED
                }
            }

            function c(e) {
                switch (e) {
                    case d.SIGN_MODE_UNSPECIFIED:
                        return "SIGN_MODE_UNSPECIFIED";
                    case d.SIGN_MODE_DIRECT:
                        return "SIGN_MODE_DIRECT";
                    case d.SIGN_MODE_TEXTUAL:
                        return "SIGN_MODE_TEXTUAL";
                    case d.SIGN_MODE_LEGACY_AMINO_JSON:
                        return "SIGN_MODE_LEGACY_AMINO_JSON";
                    case d.SIGN_MODE_EIP_191:
                        return "SIGN_MODE_EIP_191";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "cosmos.tx.signing.v1beta1",
                function(e) {
                    e[e.SIGN_MODE_UNSPECIFIED = 0] = "SIGN_MODE_UNSPECIFIED", e[e.SIGN_MODE_DIRECT = 1] = "SIGN_MODE_DIRECT", e[e.SIGN_MODE_TEXTUAL = 2] = "SIGN_MODE_TEXTUAL", e[e.SIGN_MODE_LEGACY_AMINO_JSON = 127] = "SIGN_MODE_LEGACY_AMINO_JSON", e[e.SIGN_MODE_EIP_191 = 191] = "SIGN_MODE_EIP_191", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(d = t.SignMode || (t.SignMode = {})), t.signModeFromJSON = l, t.signModeToJSON = c;
            const u = {};
            t.SignatureDescriptors = {
                encode(e, n = s.default.Writer.create()) {
                    for (const o of e.signatures) t.SignatureDescriptor.encode(o, n.uint32(10).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, u);
                    for (r.signatures = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.signatures.push(t.SignatureDescriptor.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, u);
                    if (n.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const o of e.signatures) n.signatures.push(t.SignatureDescriptor.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.signatures ? n.signatures = e.signatures.map(e => e ? t.SignatureDescriptor.toJSON(e) : void 0) : n.signatures = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, u);
                    if (n.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const o of e.signatures) n.signatures.push(t.SignatureDescriptor.fromPartial(o));
                    return n
                }
            };
            const g = {
                sequence: i.default.UZERO
            };
            t.SignatureDescriptor = {
                encode: (e, n = s.default.Writer.create()) => (void 0 !== e.publicKey && r.Any.encode(e.publicKey, n.uint32(10).fork()).ldelim(), void 0 !== e.data && t.SignatureDescriptor_Data.encode(e.data, n.uint32(18).fork()).ldelim(), e.sequence.isZero() || n.uint32(24).uint64(e.sequence), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const a = Object.assign({}, g);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.publicKey = r.Any.decode(o, o.uint32());
                                break;
                            case 2:
                                a.data = t.SignatureDescriptor_Data.decode(o, o.uint32());
                                break;
                            case 3:
                                a.sequence = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const n = Object.assign({}, g);
                    return void 0 !== e.publicKey && null !== e.publicKey ? n.publicKey = r.Any.fromJSON(e.publicKey) : n.publicKey = void 0, void 0 !== e.data && null !== e.data ? n.data = t.SignatureDescriptor_Data.fromJSON(e.data) : n.data = void 0, void 0 !== e.sequence && null !== e.sequence ? n.sequence = i.default.fromString(e.sequence) : n.sequence = i.default.UZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.publicKey && (n.publicKey = e.publicKey ? r.Any.toJSON(e.publicKey) : void 0), void 0 !== e.data && (n.data = e.data ? t.SignatureDescriptor_Data.toJSON(e.data) : void 0), void 0 !== e.sequence && (n.sequence = (e.sequence || i.default.UZERO).toString()), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, g);
                    return void 0 !== e.publicKey && null !== e.publicKey ? n.publicKey = r.Any.fromPartial(e.publicKey) : n.publicKey = void 0, void 0 !== e.data && null !== e.data ? n.data = t.SignatureDescriptor_Data.fromPartial(e.data) : n.data = void 0, void 0 !== e.sequence && null !== e.sequence ? n.sequence = e.sequence : n.sequence = i.default.UZERO, n
                }
            };
            const m = {};
            t.SignatureDescriptor_Data = {
                encode: (e, n = s.default.Writer.create()) => (void 0 !== e.single && t.SignatureDescriptor_Data_Single.encode(e.single, n.uint32(10).fork()).ldelim(), void 0 !== e.multi && t.SignatureDescriptor_Data_Multi.encode(e.multi, n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, m);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.single = t.SignatureDescriptor_Data_Single.decode(o, o.uint32());
                                break;
                            case 2:
                                r.multi = t.SignatureDescriptor_Data_Multi.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, m);
                    return void 0 !== e.single && null !== e.single ? n.single = t.SignatureDescriptor_Data_Single.fromJSON(e.single) : n.single = void 0, void 0 !== e.multi && null !== e.multi ? n.multi = t.SignatureDescriptor_Data_Multi.fromJSON(e.multi) : n.multi = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.single && (n.single = e.single ? t.SignatureDescriptor_Data_Single.toJSON(e.single) : void 0), void 0 !== e.multi && (n.multi = e.multi ? t.SignatureDescriptor_Data_Multi.toJSON(e.multi) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, m);
                    return void 0 !== e.single && null !== e.single ? n.single = t.SignatureDescriptor_Data_Single.fromPartial(e.single) : n.single = void 0, void 0 !== e.multi && null !== e.multi ? n.multi = t.SignatureDescriptor_Data_Multi.fromPartial(e.multi) : n.multi = void 0, n
                }
            };
            const f = {
                mode: 0
            };
            t.SignatureDescriptor_Data_Single = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.mode && t.uint32(8).int32(e.mode), 0 !== e.signature.length && t.uint32(18).bytes(e.signature), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, f);
                    for (i.signature = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.mode = n.int32();
                                break;
                            case 2:
                                i.signature = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    return t.signature = new Uint8Array, void 0 !== e.mode && null !== e.mode ? t.mode = l(e.mode) : t.mode = 0, void 0 !== e.signature && null !== e.signature && (t.signature = function(e) {
                        const t = b(e),
                            n = new Uint8Array(t.length);
                        for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                        return n
                    }(e.signature)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.mode && (t.mode = c(e.mode)), void 0 !== e.signature && (t.signature = function(e) {
                        const t = [];
                        for (const n of e) t.push(String.fromCharCode(n));
                        return A(t.join(""))
                    }(void 0 !== e.signature ? e.signature : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.mode && null !== e.mode ? t.mode = e.mode : t.mode = 0, void 0 !== e.signature && null !== e.signature ? t.signature = e.signature : t.signature = new Uint8Array, t
                }
            };
            const v = {};
            t.SignatureDescriptor_Data_Multi = {
                encode(e, n = s.default.Writer.create()) {
                    void 0 !== e.bitarray && a.CompactBitArray.encode(e.bitarray, n.uint32(10).fork()).ldelim();
                    for (const o of e.signatures) t.SignatureDescriptor_Data.encode(o, n.uint32(18).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, v);
                    for (r.signatures = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.bitarray = a.CompactBitArray.decode(o, o.uint32());
                                break;
                            case 2:
                                r.signatures.push(t.SignatureDescriptor_Data.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, v);
                    if (n.signatures = [], void 0 !== e.bitarray && null !== e.bitarray ? n.bitarray = a.CompactBitArray.fromJSON(e.bitarray) : n.bitarray = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const o of e.signatures) n.signatures.push(t.SignatureDescriptor_Data.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.bitarray && (n.bitarray = e.bitarray ? a.CompactBitArray.toJSON(e.bitarray) : void 0), e.signatures ? n.signatures = e.signatures.map(e => e ? t.SignatureDescriptor_Data.toJSON(e) : void 0) : n.signatures = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, v);
                    if (n.signatures = [], void 0 !== e.bitarray && null !== e.bitarray ? n.bitarray = a.CompactBitArray.fromPartial(e.bitarray) : n.bitarray = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const o of e.signatures) n.signatures.push(t.SignatureDescriptor_Data.fromPartial(o));
                    return n
                }
            };
            var p = (() => {
                if (void 0 !== p) return p;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const b = p.atob || (e => p.Buffer.from(e, "base64").toString("binary"));
            const A = p.btoa || (e => p.Buffer.from(e, "binary").toString("base64"));
            s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        512: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GrpcWebImpl = t.MsgUndelegateDesc = t.MsgBeginRedelegateDesc = t.MsgDelegateDesc = t.MsgEditValidatorDesc = t.MsgCreateValidatorDesc = t.MsgDesc = t.MsgClientImpl = t.MsgUndelegateResponse = t.MsgUndelegate = t.MsgBeginRedelegateResponse = t.MsgBeginRedelegate = t.MsgDelegateResponse = t.MsgDelegate = t.MsgEditValidatorResponse = t.MsgEditValidator = t.MsgCreateValidatorResponse = t.MsgCreateValidator = t.protobufPackage = void 0;
            const i = o(n(1)),
                s = n(156),
                r = o(n(8)),
                a = n(513),
                d = n(19),
                l = n(121),
                c = n(157),
                u = n(268);
            t.protobufPackage = "cosmos.staking.v1beta1";
            const g = {
                minSelfDelegation: "",
                delegatorAddress: "",
                validatorAddress: ""
            };
            t.MsgCreateValidator = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.description && a.Description.encode(e.description, t.uint32(10).fork()).ldelim(), void 0 !== e.commission && a.CommissionRates.encode(e.commission, t.uint32(18).fork()).ldelim(), "" !== e.minSelfDelegation && t.uint32(26).string(e.minSelfDelegation), "" !== e.delegatorAddress && t.uint32(34).string(e.delegatorAddress), "" !== e.validatorAddress && t.uint32(42).string(e.validatorAddress), void 0 !== e.pubkey && d.Any.encode(e.pubkey, t.uint32(50).fork()).ldelim(), void 0 !== e.value && l.Coin.encode(e.value, t.uint32(58).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, g);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.description = a.Description.decode(n, n.uint32());
                                break;
                            case 2:
                                i.commission = a.CommissionRates.decode(n, n.uint32());
                                break;
                            case 3:
                                i.minSelfDelegation = n.string();
                                break;
                            case 4:
                                i.delegatorAddress = n.string();
                                break;
                            case 5:
                                i.validatorAddress = n.string();
                                break;
                            case 6:
                                i.pubkey = d.Any.decode(n, n.uint32());
                                break;
                            case 7:
                                i.value = l.Coin.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.description && null !== e.description ? t.description = a.Description.fromJSON(e.description) : t.description = void 0, void 0 !== e.commission && null !== e.commission ? t.commission = a.CommissionRates.fromJSON(e.commission) : t.commission = void 0, void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation ? t.minSelfDelegation = String(e.minSelfDelegation) : t.minSelfDelegation = "", void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", void 0 !== e.pubkey && null !== e.pubkey ? t.pubkey = d.Any.fromJSON(e.pubkey) : t.pubkey = void 0, void 0 !== e.value && null !== e.value ? t.value = l.Coin.fromJSON(e.value) : t.value = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.description && (t.description = e.description ? a.Description.toJSON(e.description) : void 0), void 0 !== e.commission && (t.commission = e.commission ? a.CommissionRates.toJSON(e.commission) : void 0), void 0 !== e.minSelfDelegation && (t.minSelfDelegation = e.minSelfDelegation), void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), void 0 !== e.pubkey && (t.pubkey = e.pubkey ? d.Any.toJSON(e.pubkey) : void 0), void 0 !== e.value && (t.value = e.value ? l.Coin.toJSON(e.value) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.description && null !== e.description ? t.description = a.Description.fromPartial(e.description) : t.description = void 0, void 0 !== e.commission && null !== e.commission ? t.commission = a.CommissionRates.fromPartial(e.commission) : t.commission = void 0, void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation ? t.minSelfDelegation = e.minSelfDelegation : t.minSelfDelegation = "", void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = e.delegatorAddress : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = e.validatorAddress : t.validatorAddress = "", void 0 !== e.pubkey && null !== e.pubkey ? t.pubkey = d.Any.fromPartial(e.pubkey) : t.pubkey = void 0, void 0 !== e.value && null !== e.value ? t.value = l.Coin.fromPartial(e.value) : t.value = void 0, t
                }
            };
            const m = {};
            t.MsgCreateValidatorResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, m);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, m),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, m)
            };
            const f = {
                validatorAddress: "",
                commissionRate: "",
                minSelfDelegation: ""
            };
            t.MsgEditValidator = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.description && a.Description.encode(e.description, t.uint32(10).fork()).ldelim(), "" !== e.validatorAddress && t.uint32(18).string(e.validatorAddress), "" !== e.commissionRate && t.uint32(26).string(e.commissionRate), "" !== e.minSelfDelegation && t.uint32(34).string(e.minSelfDelegation), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, f);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.description = a.Description.decode(n, n.uint32());
                                break;
                            case 2:
                                i.validatorAddress = n.string();
                                break;
                            case 3:
                                i.commissionRate = n.string();
                                break;
                            case 4:
                                i.minSelfDelegation = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.description && null !== e.description ? t.description = a.Description.fromJSON(e.description) : t.description = void 0, void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", void 0 !== e.commissionRate && null !== e.commissionRate ? t.commissionRate = String(e.commissionRate) : t.commissionRate = "", void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation ? t.minSelfDelegation = String(e.minSelfDelegation) : t.minSelfDelegation = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.description && (t.description = e.description ? a.Description.toJSON(e.description) : void 0), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), void 0 !== e.commissionRate && (t.commissionRate = e.commissionRate), void 0 !== e.minSelfDelegation && (t.minSelfDelegation = e.minSelfDelegation), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.description && null !== e.description ? t.description = a.Description.fromPartial(e.description) : t.description = void 0, void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = e.validatorAddress : t.validatorAddress = "", void 0 !== e.commissionRate && null !== e.commissionRate ? t.commissionRate = e.commissionRate : t.commissionRate = "", void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation ? t.minSelfDelegation = e.minSelfDelegation : t.minSelfDelegation = "", t
                }
            };
            const v = {};
            t.MsgEditValidatorResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, v);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, v),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, v)
            };
            const p = {
                delegatorAddress: "",
                validatorAddress: ""
            };
            t.MsgDelegate = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && t.uint32(18).string(e.validatorAddress), void 0 !== e.amount && l.Coin.encode(e.amount, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, p);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = n.string();
                                break;
                            case 2:
                                i.validatorAddress = n.string();
                                break;
                            case 3:
                                i.amount = l.Coin.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, p);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", void 0 !== e.amount && null !== e.amount ? t.amount = l.Coin.fromJSON(e.amount) : t.amount = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), void 0 !== e.amount && (t.amount = e.amount ? l.Coin.toJSON(e.amount) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, p);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = e.delegatorAddress : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = e.validatorAddress : t.validatorAddress = "", void 0 !== e.amount && null !== e.amount ? t.amount = l.Coin.fromPartial(e.amount) : t.amount = void 0, t
                }
            };
            const b = {};
            t.MsgDelegateResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, b);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, b),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, b)
            };
            const A = {
                delegatorAddress: "",
                validatorSrcAddress: "",
                validatorDstAddress: ""
            };
            t.MsgBeginRedelegate = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorSrcAddress && t.uint32(18).string(e.validatorSrcAddress), "" !== e.validatorDstAddress && t.uint32(26).string(e.validatorDstAddress), void 0 !== e.amount && l.Coin.encode(e.amount, t.uint32(34).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, A);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = n.string();
                                break;
                            case 2:
                                i.validatorSrcAddress = n.string();
                                break;
                            case 3:
                                i.validatorDstAddress = n.string();
                                break;
                            case 4:
                                i.amount = l.Coin.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, A);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress ? t.validatorSrcAddress = String(e.validatorSrcAddress) : t.validatorSrcAddress = "", void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress ? t.validatorDstAddress = String(e.validatorDstAddress) : t.validatorDstAddress = "", void 0 !== e.amount && null !== e.amount ? t.amount = l.Coin.fromJSON(e.amount) : t.amount = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorSrcAddress && (t.validatorSrcAddress = e.validatorSrcAddress), void 0 !== e.validatorDstAddress && (t.validatorDstAddress = e.validatorDstAddress), void 0 !== e.amount && (t.amount = e.amount ? l.Coin.toJSON(e.amount) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, A);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = e.delegatorAddress : t.delegatorAddress = "", void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress ? t.validatorSrcAddress = e.validatorSrcAddress : t.validatorSrcAddress = "", void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress ? t.validatorDstAddress = e.validatorDstAddress : t.validatorDstAddress = "", void 0 !== e.amount && null !== e.amount ? t.amount = l.Coin.fromPartial(e.amount) : t.amount = void 0, t
                }
            };
            const O = {};
            t.MsgBeginRedelegateResponse = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.completionTime && u.Timestamp.encode(y(e.completionTime), t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, O);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.completionTime = T(u.Timestamp.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, O);
                    return void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = k(e.completionTime) : t.completionTime = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.completionTime && (t.completionTime = e.completionTime.toISOString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, O);
                    return void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = e.completionTime : t.completionTime = void 0, t
                }
            };
            const S = {
                delegatorAddress: "",
                validatorAddress: ""
            };
            t.MsgUndelegate = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && t.uint32(18).string(e.validatorAddress), void 0 !== e.amount && l.Coin.encode(e.amount, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, S);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = n.string();
                                break;
                            case 2:
                                i.validatorAddress = n.string();
                                break;
                            case 3:
                                i.amount = l.Coin.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, S);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", void 0 !== e.amount && null !== e.amount ? t.amount = l.Coin.fromJSON(e.amount) : t.amount = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), void 0 !== e.amount && (t.amount = e.amount ? l.Coin.toJSON(e.amount) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, S);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = e.delegatorAddress : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = e.validatorAddress : t.validatorAddress = "", void 0 !== e.amount && null !== e.amount ? t.amount = l.Coin.fromPartial(e.amount) : t.amount = void 0, t
                }
            };
            const h = {};
            t.MsgUndelegateResponse = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.completionTime && u.Timestamp.encode(y(e.completionTime), t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, h);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.completionTime = T(u.Timestamp.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = k(e.completionTime) : t.completionTime = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.completionTime && (t.completionTime = e.completionTime.toISOString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = e.completionTime : t.completionTime = void 0, t
                }
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.CreateValidator = this.CreateValidator.bind(this), this.EditValidator = this.EditValidator.bind(this), this.Delegate = this.Delegate.bind(this), this.BeginRedelegate = this.BeginRedelegate.bind(this), this.Undelegate = this.Undelegate.bind(this)
                }
                CreateValidator(e, n) {
                    return this.rpc.unary(t.MsgCreateValidatorDesc, t.MsgCreateValidator.fromPartial(e), n)
                }
                EditValidator(e, n) {
                    return this.rpc.unary(t.MsgEditValidatorDesc, t.MsgEditValidator.fromPartial(e), n)
                }
                Delegate(e, n) {
                    return this.rpc.unary(t.MsgDelegateDesc, t.MsgDelegate.fromPartial(e), n)
                }
                BeginRedelegate(e, n) {
                    return this.rpc.unary(t.MsgBeginRedelegateDesc, t.MsgBeginRedelegate.fromPartial(e), n)
                }
                Undelegate(e, n) {
                    return this.rpc.unary(t.MsgUndelegateDesc, t.MsgUndelegate.fromPartial(e), n)
                }
            }, t.MsgDesc = {
                serviceName: "cosmos.staking.v1beta1.Msg"
            }, t.MsgCreateValidatorDesc = {
                methodName: "CreateValidator",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgCreateValidator.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgCreateValidatorResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgEditValidatorDesc = {
                methodName: "EditValidator",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgEditValidator.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgEditValidatorResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgDelegateDesc = {
                methodName: "Delegate",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgDelegate.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgDelegateResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgBeginRedelegateDesc = {
                methodName: "BeginRedelegate",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgBeginRedelegate.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgBeginRedelegateResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgUndelegateDesc = {
                methodName: "Undelegate",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgUndelegate.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgUndelegateResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            };

            function y(e) {
                var t;
                return {
                    seconds: (t = e.getTime() / 1e3, i.default.fromNumber(t)),
                    nanos: e.getTime() % 1e3 * 1e6
                }
            }

            function T(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }

            function k(e) {
                return e instanceof Date ? e : "string" == typeof e ? new Date(e) : T(u.Timestamp.fromJSON(e))
            }
            t.GrpcWebImpl = class GrpcWebImpl {
                constructor(e, t) {
                    this.host = e, this.options = t
                }
                unary(e, t, n) {
                    var o;
                    const i = Object.assign(Object.assign({}, t), e.requestType),
                        r = n && this.options.metadata ? new c.BrowserHeaders(Object.assign(Object.assign({}, null === (o = this.options) || void 0 === o ? void 0 : o.metadata.headersMap), null == n ? void 0 : n.headersMap)) : n || this.options.metadata;
                    return new Promise((t, n) => {
                        s.grpc.unary(e, {
                            request: i,
                            host: this.host,
                            metadata: r,
                            transport: this.options.transport,
                            debug: this.options.debug,
                            onEnd: function(e) {
                                if (e.status === s.grpc.Code.OK) t(e.message);
                                else {
                                    const t = new Error(e.statusMessage);
                                    t.code = e.status, t.metadata = e.trailers, n(t)
                                }
                            }
                        })
                    })
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        513: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Pool = t.RedelegationResponse = t.RedelegationEntryResponse = t.DelegationResponse = t.Params = t.Redelegation = t.RedelegationEntry = t.UnbondingDelegationEntry = t.UnbondingDelegation = t.Delegation = t.DVVTriplets = t.DVVTriplet = t.DVPairs = t.DVPair = t.ValAddresses = t.Validator = t.Description = t.Commission = t.CommissionRates = t.HistoricalInfo = t.bondStatusToJSON = t.bondStatusFromJSON = t.BondStatus = t.protobufPackage = void 0;
            const i = o(n(1)),
                s = o(n(8)),
                r = n(637),
                a = n(19),
                d = n(511),
                l = n(121),
                c = n(268);
            var u;

            function g(e) {
                switch (e) {
                    case 0:
                    case "BOND_STATUS_UNSPECIFIED":
                        return u.BOND_STATUS_UNSPECIFIED;
                    case 1:
                    case "BOND_STATUS_UNBONDED":
                        return u.BOND_STATUS_UNBONDED;
                    case 2:
                    case "BOND_STATUS_UNBONDING":
                        return u.BOND_STATUS_UNBONDING;
                    case 3:
                    case "BOND_STATUS_BONDED":
                        return u.BOND_STATUS_BONDED;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return u.UNRECOGNIZED
                }
            }

            function m(e) {
                switch (e) {
                    case u.BOND_STATUS_UNSPECIFIED:
                        return "BOND_STATUS_UNSPECIFIED";
                    case u.BOND_STATUS_UNBONDED:
                        return "BOND_STATUS_UNBONDED";
                    case u.BOND_STATUS_UNBONDING:
                        return "BOND_STATUS_UNBONDING";
                    case u.BOND_STATUS_BONDED:
                        return "BOND_STATUS_BONDED";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "cosmos.staking.v1beta1",
                function(e) {
                    e[e.BOND_STATUS_UNSPECIFIED = 0] = "BOND_STATUS_UNSPECIFIED", e[e.BOND_STATUS_UNBONDED = 1] = "BOND_STATUS_UNBONDED", e[e.BOND_STATUS_UNBONDING = 2] = "BOND_STATUS_UNBONDING", e[e.BOND_STATUS_BONDED = 3] = "BOND_STATUS_BONDED", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(u = t.BondStatus || (t.BondStatus = {})), t.bondStatusFromJSON = g, t.bondStatusToJSON = m;
            const f = {};
            t.HistoricalInfo = {
                encode(e, n = s.default.Writer.create()) {
                    void 0 !== e.header && r.Header.encode(e.header, n.uint32(10).fork()).ldelim();
                    for (const o of e.valset) t.Validator.encode(o, n.uint32(18).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const a = Object.assign({}, f);
                    for (a.valset = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.header = r.Header.decode(o, o.uint32());
                                break;
                            case 2:
                                a.valset.push(t.Validator.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const n = Object.assign({}, f);
                    if (n.valset = [], void 0 !== e.header && null !== e.header ? n.header = r.Header.fromJSON(e.header) : n.header = void 0, void 0 !== e.valset && null !== e.valset)
                        for (const o of e.valset) n.valset.push(t.Validator.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.header && (n.header = e.header ? r.Header.toJSON(e.header) : void 0), e.valset ? n.valset = e.valset.map(e => e ? t.Validator.toJSON(e) : void 0) : n.valset = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, f);
                    if (n.valset = [], void 0 !== e.header && null !== e.header ? n.header = r.Header.fromPartial(e.header) : n.header = void 0, void 0 !== e.valset && null !== e.valset)
                        for (const o of e.valset) n.valset.push(t.Validator.fromPartial(o));
                    return n
                }
            };
            const v = {
                rate: "",
                maxRate: "",
                maxChangeRate: ""
            };
            t.CommissionRates = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.rate && t.uint32(10).string(e.rate), "" !== e.maxRate && t.uint32(18).string(e.maxRate), "" !== e.maxChangeRate && t.uint32(26).string(e.maxChangeRate), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, v);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.rate = n.string();
                                break;
                            case 2:
                                i.maxRate = n.string();
                                break;
                            case 3:
                                i.maxChangeRate = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    return void 0 !== e.rate && null !== e.rate ? t.rate = String(e.rate) : t.rate = "", void 0 !== e.maxRate && null !== e.maxRate ? t.maxRate = String(e.maxRate) : t.maxRate = "", void 0 !== e.maxChangeRate && null !== e.maxChangeRate ? t.maxChangeRate = String(e.maxChangeRate) : t.maxChangeRate = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.rate && (t.rate = e.rate), void 0 !== e.maxRate && (t.maxRate = e.maxRate), void 0 !== e.maxChangeRate && (t.maxChangeRate = e.maxChangeRate), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, v);
                    return void 0 !== e.rate && null !== e.rate ? t.rate = e.rate : t.rate = "", void 0 !== e.maxRate && null !== e.maxRate ? t.maxRate = e.maxRate : t.maxRate = "", void 0 !== e.maxChangeRate && null !== e.maxChangeRate ? t.maxChangeRate = e.maxChangeRate : t.maxChangeRate = "", t
                }
            };
            const p = {};
            t.Commission = {
                encode: (e, n = s.default.Writer.create()) => (void 0 !== e.commissionRates && t.CommissionRates.encode(e.commissionRates, n.uint32(10).fork()).ldelim(), void 0 !== e.updateTime && c.Timestamp.encode(C(e.updateTime), n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, p);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.commissionRates = t.CommissionRates.decode(o, o.uint32());
                                break;
                            case 2:
                                r.updateTime = V(c.Timestamp.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, p);
                    return void 0 !== e.commissionRates && null !== e.commissionRates ? n.commissionRates = t.CommissionRates.fromJSON(e.commissionRates) : n.commissionRates = void 0, void 0 !== e.updateTime && null !== e.updateTime ? n.updateTime = B(e.updateTime) : n.updateTime = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.commissionRates && (n.commissionRates = e.commissionRates ? t.CommissionRates.toJSON(e.commissionRates) : void 0), void 0 !== e.updateTime && (n.updateTime = e.updateTime.toISOString()), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, p);
                    return void 0 !== e.commissionRates && null !== e.commissionRates ? n.commissionRates = t.CommissionRates.fromPartial(e.commissionRates) : n.commissionRates = void 0, void 0 !== e.updateTime && null !== e.updateTime ? n.updateTime = e.updateTime : n.updateTime = void 0, n
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
                encode: (e, t = s.default.Writer.create()) => ("" !== e.moniker && t.uint32(10).string(e.moniker), "" !== e.identity && t.uint32(18).string(e.identity), "" !== e.website && t.uint32(26).string(e.website), "" !== e.securityContact && t.uint32(34).string(e.securityContact), "" !== e.details && t.uint32(42).string(e.details), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, b);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.moniker = n.string();
                                break;
                            case 2:
                                i.identity = n.string();
                                break;
                            case 3:
                                i.website = n.string();
                                break;
                            case 4:
                                i.securityContact = n.string();
                                break;
                            case 5:
                                i.details = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
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
                    const t = Object.assign({}, b);
                    return void 0 !== e.moniker && null !== e.moniker ? t.moniker = e.moniker : t.moniker = "", void 0 !== e.identity && null !== e.identity ? t.identity = e.identity : t.identity = "", void 0 !== e.website && null !== e.website ? t.website = e.website : t.website = "", void 0 !== e.securityContact && null !== e.securityContact ? t.securityContact = e.securityContact : t.securityContact = "", void 0 !== e.details && null !== e.details ? t.details = e.details : t.details = "", t
                }
            };
            const A = {
                operatorAddress: "",
                jailed: !1,
                status: 0,
                tokens: "",
                delegatorShares: "",
                unbondingHeight: i.default.ZERO,
                minSelfDelegation: ""
            };
            t.Validator = {
                encode: (e, n = s.default.Writer.create()) => ("" !== e.operatorAddress && n.uint32(10).string(e.operatorAddress), void 0 !== e.consensusPubkey && a.Any.encode(e.consensusPubkey, n.uint32(18).fork()).ldelim(), !0 === e.jailed && n.uint32(24).bool(e.jailed), 0 !== e.status && n.uint32(32).int32(e.status), "" !== e.tokens && n.uint32(42).string(e.tokens), "" !== e.delegatorShares && n.uint32(50).string(e.delegatorShares), void 0 !== e.description && t.Description.encode(e.description, n.uint32(58).fork()).ldelim(), e.unbondingHeight.isZero() || n.uint32(64).int64(e.unbondingHeight), void 0 !== e.unbondingTime && c.Timestamp.encode(C(e.unbondingTime), n.uint32(74).fork()).ldelim(), void 0 !== e.commission && t.Commission.encode(e.commission, n.uint32(82).fork()).ldelim(), "" !== e.minSelfDelegation && n.uint32(90).string(e.minSelfDelegation), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, A);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.operatorAddress = o.string();
                                break;
                            case 2:
                                r.consensusPubkey = a.Any.decode(o, o.uint32());
                                break;
                            case 3:
                                r.jailed = o.bool();
                                break;
                            case 4:
                                r.status = o.int32();
                                break;
                            case 5:
                                r.tokens = o.string();
                                break;
                            case 6:
                                r.delegatorShares = o.string();
                                break;
                            case 7:
                                r.description = t.Description.decode(o, o.uint32());
                                break;
                            case 8:
                                r.unbondingHeight = o.int64();
                                break;
                            case 9:
                                r.unbondingTime = V(c.Timestamp.decode(o, o.uint32()));
                                break;
                            case 10:
                                r.commission = t.Commission.decode(o, o.uint32());
                                break;
                            case 11:
                                r.minSelfDelegation = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, A);
                    return void 0 !== e.operatorAddress && null !== e.operatorAddress ? n.operatorAddress = String(e.operatorAddress) : n.operatorAddress = "", void 0 !== e.consensusPubkey && null !== e.consensusPubkey ? n.consensusPubkey = a.Any.fromJSON(e.consensusPubkey) : n.consensusPubkey = void 0, void 0 !== e.jailed && null !== e.jailed ? n.jailed = Boolean(e.jailed) : n.jailed = !1, void 0 !== e.status && null !== e.status ? n.status = g(e.status) : n.status = 0, void 0 !== e.tokens && null !== e.tokens ? n.tokens = String(e.tokens) : n.tokens = "", void 0 !== e.delegatorShares && null !== e.delegatorShares ? n.delegatorShares = String(e.delegatorShares) : n.delegatorShares = "", void 0 !== e.description && null !== e.description ? n.description = t.Description.fromJSON(e.description) : n.description = void 0, void 0 !== e.unbondingHeight && null !== e.unbondingHeight ? n.unbondingHeight = i.default.fromString(e.unbondingHeight) : n.unbondingHeight = i.default.ZERO, void 0 !== e.unbondingTime && null !== e.unbondingTime ? n.unbondingTime = B(e.unbondingTime) : n.unbondingTime = void 0, void 0 !== e.commission && null !== e.commission ? n.commission = t.Commission.fromJSON(e.commission) : n.commission = void 0, void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation ? n.minSelfDelegation = String(e.minSelfDelegation) : n.minSelfDelegation = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.operatorAddress && (n.operatorAddress = e.operatorAddress), void 0 !== e.consensusPubkey && (n.consensusPubkey = e.consensusPubkey ? a.Any.toJSON(e.consensusPubkey) : void 0), void 0 !== e.jailed && (n.jailed = e.jailed), void 0 !== e.status && (n.status = m(e.status)), void 0 !== e.tokens && (n.tokens = e.tokens), void 0 !== e.delegatorShares && (n.delegatorShares = e.delegatorShares), void 0 !== e.description && (n.description = e.description ? t.Description.toJSON(e.description) : void 0), void 0 !== e.unbondingHeight && (n.unbondingHeight = (e.unbondingHeight || i.default.ZERO).toString()), void 0 !== e.unbondingTime && (n.unbondingTime = e.unbondingTime.toISOString()), void 0 !== e.commission && (n.commission = e.commission ? t.Commission.toJSON(e.commission) : void 0), void 0 !== e.minSelfDelegation && (n.minSelfDelegation = e.minSelfDelegation), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, A);
                    return void 0 !== e.operatorAddress && null !== e.operatorAddress ? n.operatorAddress = e.operatorAddress : n.operatorAddress = "", void 0 !== e.consensusPubkey && null !== e.consensusPubkey ? n.consensusPubkey = a.Any.fromPartial(e.consensusPubkey) : n.consensusPubkey = void 0, void 0 !== e.jailed && null !== e.jailed ? n.jailed = e.jailed : n.jailed = !1, void 0 !== e.status && null !== e.status ? n.status = e.status : n.status = 0, void 0 !== e.tokens && null !== e.tokens ? n.tokens = e.tokens : n.tokens = "", void 0 !== e.delegatorShares && null !== e.delegatorShares ? n.delegatorShares = e.delegatorShares : n.delegatorShares = "", void 0 !== e.description && null !== e.description ? n.description = t.Description.fromPartial(e.description) : n.description = void 0, void 0 !== e.unbondingHeight && null !== e.unbondingHeight ? n.unbondingHeight = e.unbondingHeight : n.unbondingHeight = i.default.ZERO, void 0 !== e.unbondingTime && null !== e.unbondingTime ? n.unbondingTime = e.unbondingTime : n.unbondingTime = void 0, void 0 !== e.commission && null !== e.commission ? n.commission = t.Commission.fromPartial(e.commission) : n.commission = void 0, void 0 !== e.minSelfDelegation && null !== e.minSelfDelegation ? n.minSelfDelegation = e.minSelfDelegation : n.minSelfDelegation = "", n
                }
            };
            const O = {
                addresses: ""
            };
            t.ValAddresses = {
                encode(e, t = s.default.Writer.create()) {
                    for (const n of e.addresses) t.uint32(10).string(n);
                    return t
                },
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, O);
                    for (i.addresses = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.addresses.push(n.string());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, O);
                    if (t.addresses = [], void 0 !== e.addresses && null !== e.addresses)
                        for (const n of e.addresses) t.addresses.push(String(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.addresses ? t.addresses = e.addresses.map(e => e) : t.addresses = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, O);
                    if (t.addresses = [], void 0 !== e.addresses && null !== e.addresses)
                        for (const n of e.addresses) t.addresses.push(n);
                    return t
                }
            };
            const S = {
                delegatorAddress: "",
                validatorAddress: ""
            };
            t.DVPair = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && t.uint32(18).string(e.validatorAddress), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, S);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = n.string();
                                break;
                            case 2:
                                i.validatorAddress = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
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
                    const t = Object.assign({}, S);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = e.delegatorAddress : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = e.validatorAddress : t.validatorAddress = "", t
                }
            };
            const h = {};
            t.DVPairs = {
                encode(e, n = s.default.Writer.create()) {
                    for (const o of e.pairs) t.DVPair.encode(o, n.uint32(10).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, h);
                    for (r.pairs = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.pairs.push(t.DVPair.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, h);
                    if (n.pairs = [], void 0 !== e.pairs && null !== e.pairs)
                        for (const o of e.pairs) n.pairs.push(t.DVPair.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.pairs ? n.pairs = e.pairs.map(e => e ? t.DVPair.toJSON(e) : void 0) : n.pairs = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, h);
                    if (n.pairs = [], void 0 !== e.pairs && null !== e.pairs)
                        for (const o of e.pairs) n.pairs.push(t.DVPair.fromPartial(o));
                    return n
                }
            };
            const y = {
                delegatorAddress: "",
                validatorSrcAddress: "",
                validatorDstAddress: ""
            };
            t.DVVTriplet = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorSrcAddress && t.uint32(18).string(e.validatorSrcAddress), "" !== e.validatorDstAddress && t.uint32(26).string(e.validatorDstAddress), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, y);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = n.string();
                                break;
                            case 2:
                                i.validatorSrcAddress = n.string();
                                break;
                            case 3:
                                i.validatorDstAddress = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, y);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress ? t.validatorSrcAddress = String(e.validatorSrcAddress) : t.validatorSrcAddress = "", void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress ? t.validatorDstAddress = String(e.validatorDstAddress) : t.validatorDstAddress = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorSrcAddress && (t.validatorSrcAddress = e.validatorSrcAddress), void 0 !== e.validatorDstAddress && (t.validatorDstAddress = e.validatorDstAddress), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, y);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = e.delegatorAddress : t.delegatorAddress = "", void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress ? t.validatorSrcAddress = e.validatorSrcAddress : t.validatorSrcAddress = "", void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress ? t.validatorDstAddress = e.validatorDstAddress : t.validatorDstAddress = "", t
                }
            };
            const T = {};
            t.DVVTriplets = {
                encode(e, n = s.default.Writer.create()) {
                    for (const o of e.triplets) t.DVVTriplet.encode(o, n.uint32(10).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, T);
                    for (r.triplets = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.triplets.push(t.DVVTriplet.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, T);
                    if (n.triplets = [], void 0 !== e.triplets && null !== e.triplets)
                        for (const o of e.triplets) n.triplets.push(t.DVVTriplet.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.triplets ? n.triplets = e.triplets.map(e => e ? t.DVVTriplet.toJSON(e) : void 0) : n.triplets = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, T);
                    if (n.triplets = [], void 0 !== e.triplets && null !== e.triplets)
                        for (const o of e.triplets) n.triplets.push(t.DVVTriplet.fromPartial(o));
                    return n
                }
            };
            const k = {
                delegatorAddress: "",
                validatorAddress: "",
                shares: ""
            };
            t.Delegation = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && t.uint32(18).string(e.validatorAddress), "" !== e.shares && t.uint32(26).string(e.shares), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, k);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = n.string();
                                break;
                            case 2:
                                i.validatorAddress = n.string();
                                break;
                            case 3:
                                i.shares = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, k);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", void 0 !== e.shares && null !== e.shares ? t.shares = String(e.shares) : t.shares = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), void 0 !== e.shares && (t.shares = e.shares), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, k);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = e.delegatorAddress : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = e.validatorAddress : t.validatorAddress = "", void 0 !== e.shares && null !== e.shares ? t.shares = e.shares : t.shares = "", t
                }
            };
            const N = {
                delegatorAddress: "",
                validatorAddress: ""
            };
            t.UnbondingDelegation = {
                encode(e, n = s.default.Writer.create()) {
                    "" !== e.delegatorAddress && n.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && n.uint32(18).string(e.validatorAddress);
                    for (const o of e.entries) t.UnbondingDelegationEntry.encode(o, n.uint32(26).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, N);
                    for (r.entries = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.delegatorAddress = o.string();
                                break;
                            case 2:
                                r.validatorAddress = o.string();
                                break;
                            case 3:
                                r.entries.push(t.UnbondingDelegationEntry.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, N);
                    if (n.entries = [], void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? n.delegatorAddress = String(e.delegatorAddress) : n.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? n.validatorAddress = String(e.validatorAddress) : n.validatorAddress = "", void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.UnbondingDelegationEntry.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.delegatorAddress && (n.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (n.validatorAddress = e.validatorAddress), e.entries ? n.entries = e.entries.map(e => e ? t.UnbondingDelegationEntry.toJSON(e) : void 0) : n.entries = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, N);
                    if (n.entries = [], void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? n.delegatorAddress = e.delegatorAddress : n.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? n.validatorAddress = e.validatorAddress : n.validatorAddress = "", void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.UnbondingDelegationEntry.fromPartial(o));
                    return n
                }
            };
            const D = {
                creationHeight: i.default.ZERO,
                initialBalance: "",
                balance: ""
            };
            t.UnbondingDelegationEntry = {
                encode: (e, t = s.default.Writer.create()) => (e.creationHeight.isZero() || t.uint32(8).int64(e.creationHeight), void 0 !== e.completionTime && c.Timestamp.encode(C(e.completionTime), t.uint32(18).fork()).ldelim(), "" !== e.initialBalance && t.uint32(26).string(e.initialBalance), "" !== e.balance && t.uint32(34).string(e.balance), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, D);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.creationHeight = n.int64();
                                break;
                            case 2:
                                i.completionTime = V(c.Timestamp.decode(n, n.uint32()));
                                break;
                            case 3:
                                i.initialBalance = n.string();
                                break;
                            case 4:
                                i.balance = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, D);
                    return void 0 !== e.creationHeight && null !== e.creationHeight ? t.creationHeight = i.default.fromString(e.creationHeight) : t.creationHeight = i.default.ZERO, void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = B(e.completionTime) : t.completionTime = void 0, void 0 !== e.initialBalance && null !== e.initialBalance ? t.initialBalance = String(e.initialBalance) : t.initialBalance = "", void 0 !== e.balance && null !== e.balance ? t.balance = String(e.balance) : t.balance = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.creationHeight && (t.creationHeight = (e.creationHeight || i.default.ZERO).toString()), void 0 !== e.completionTime && (t.completionTime = e.completionTime.toISOString()), void 0 !== e.initialBalance && (t.initialBalance = e.initialBalance), void 0 !== e.balance && (t.balance = e.balance), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, D);
                    return void 0 !== e.creationHeight && null !== e.creationHeight ? t.creationHeight = e.creationHeight : t.creationHeight = i.default.ZERO, void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = e.completionTime : t.completionTime = void 0, void 0 !== e.initialBalance && null !== e.initialBalance ? t.initialBalance = e.initialBalance : t.initialBalance = "", void 0 !== e.balance && null !== e.balance ? t.balance = e.balance : t.balance = "", t
                }
            };
            const R = {
                creationHeight: i.default.ZERO,
                initialBalance: "",
                sharesDst: ""
            };
            t.RedelegationEntry = {
                encode: (e, t = s.default.Writer.create()) => (e.creationHeight.isZero() || t.uint32(8).int64(e.creationHeight), void 0 !== e.completionTime && c.Timestamp.encode(C(e.completionTime), t.uint32(18).fork()).ldelim(), "" !== e.initialBalance && t.uint32(26).string(e.initialBalance), "" !== e.sharesDst && t.uint32(34).string(e.sharesDst), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, R);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.creationHeight = n.int64();
                                break;
                            case 2:
                                i.completionTime = V(c.Timestamp.decode(n, n.uint32()));
                                break;
                            case 3:
                                i.initialBalance = n.string();
                                break;
                            case 4:
                                i.sharesDst = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, R);
                    return void 0 !== e.creationHeight && null !== e.creationHeight ? t.creationHeight = i.default.fromString(e.creationHeight) : t.creationHeight = i.default.ZERO, void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = B(e.completionTime) : t.completionTime = void 0, void 0 !== e.initialBalance && null !== e.initialBalance ? t.initialBalance = String(e.initialBalance) : t.initialBalance = "", void 0 !== e.sharesDst && null !== e.sharesDst ? t.sharesDst = String(e.sharesDst) : t.sharesDst = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.creationHeight && (t.creationHeight = (e.creationHeight || i.default.ZERO).toString()), void 0 !== e.completionTime && (t.completionTime = e.completionTime.toISOString()), void 0 !== e.initialBalance && (t.initialBalance = e.initialBalance), void 0 !== e.sharesDst && (t.sharesDst = e.sharesDst), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, R);
                    return void 0 !== e.creationHeight && null !== e.creationHeight ? t.creationHeight = e.creationHeight : t.creationHeight = i.default.ZERO, void 0 !== e.completionTime && null !== e.completionTime ? t.completionTime = e.completionTime : t.completionTime = void 0, void 0 !== e.initialBalance && null !== e.initialBalance ? t.initialBalance = e.initialBalance : t.initialBalance = "", void 0 !== e.sharesDst && null !== e.sharesDst ? t.sharesDst = e.sharesDst : t.sharesDst = "", t
                }
            };
            const E = {
                delegatorAddress: "",
                validatorSrcAddress: "",
                validatorDstAddress: ""
            };
            t.Redelegation = {
                encode(e, n = s.default.Writer.create()) {
                    "" !== e.delegatorAddress && n.uint32(10).string(e.delegatorAddress), "" !== e.validatorSrcAddress && n.uint32(18).string(e.validatorSrcAddress), "" !== e.validatorDstAddress && n.uint32(26).string(e.validatorDstAddress);
                    for (const o of e.entries) t.RedelegationEntry.encode(o, n.uint32(34).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, E);
                    for (r.entries = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.delegatorAddress = o.string();
                                break;
                            case 2:
                                r.validatorSrcAddress = o.string();
                                break;
                            case 3:
                                r.validatorDstAddress = o.string();
                                break;
                            case 4:
                                r.entries.push(t.RedelegationEntry.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, E);
                    if (n.entries = [], void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? n.delegatorAddress = String(e.delegatorAddress) : n.delegatorAddress = "", void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress ? n.validatorSrcAddress = String(e.validatorSrcAddress) : n.validatorSrcAddress = "", void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress ? n.validatorDstAddress = String(e.validatorDstAddress) : n.validatorDstAddress = "", void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.RedelegationEntry.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.delegatorAddress && (n.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorSrcAddress && (n.validatorSrcAddress = e.validatorSrcAddress), void 0 !== e.validatorDstAddress && (n.validatorDstAddress = e.validatorDstAddress), e.entries ? n.entries = e.entries.map(e => e ? t.RedelegationEntry.toJSON(e) : void 0) : n.entries = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, E);
                    if (n.entries = [], void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? n.delegatorAddress = e.delegatorAddress : n.delegatorAddress = "", void 0 !== e.validatorSrcAddress && null !== e.validatorSrcAddress ? n.validatorSrcAddress = e.validatorSrcAddress : n.validatorSrcAddress = "", void 0 !== e.validatorDstAddress && null !== e.validatorDstAddress ? n.validatorDstAddress = e.validatorDstAddress : n.validatorDstAddress = "", void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.RedelegationEntry.fromPartial(o));
                    return n
                }
            };
            const I = {
                maxValidators: 0,
                maxEntries: 0,
                historicalEntries: 0,
                bondDenom: ""
            };
            t.Params = {
                encode: (e, t = s.default.Writer.create()) => (void 0 !== e.unbondingTime && d.Duration.encode(e.unbondingTime, t.uint32(10).fork()).ldelim(), 0 !== e.maxValidators && t.uint32(16).uint32(e.maxValidators), 0 !== e.maxEntries && t.uint32(24).uint32(e.maxEntries), 0 !== e.historicalEntries && t.uint32(32).uint32(e.historicalEntries), "" !== e.bondDenom && t.uint32(42).string(e.bondDenom), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, I);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.unbondingTime = d.Duration.decode(n, n.uint32());
                                break;
                            case 2:
                                i.maxValidators = n.uint32();
                                break;
                            case 3:
                                i.maxEntries = n.uint32();
                                break;
                            case 4:
                                i.historicalEntries = n.uint32();
                                break;
                            case 5:
                                i.bondDenom = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, I);
                    return void 0 !== e.unbondingTime && null !== e.unbondingTime ? t.unbondingTime = d.Duration.fromJSON(e.unbondingTime) : t.unbondingTime = void 0, void 0 !== e.maxValidators && null !== e.maxValidators ? t.maxValidators = Number(e.maxValidators) : t.maxValidators = 0, void 0 !== e.maxEntries && null !== e.maxEntries ? t.maxEntries = Number(e.maxEntries) : t.maxEntries = 0, void 0 !== e.historicalEntries && null !== e.historicalEntries ? t.historicalEntries = Number(e.historicalEntries) : t.historicalEntries = 0, void 0 !== e.bondDenom && null !== e.bondDenom ? t.bondDenom = String(e.bondDenom) : t.bondDenom = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.unbondingTime && (t.unbondingTime = e.unbondingTime ? d.Duration.toJSON(e.unbondingTime) : void 0), void 0 !== e.maxValidators && (t.maxValidators = e.maxValidators), void 0 !== e.maxEntries && (t.maxEntries = e.maxEntries), void 0 !== e.historicalEntries && (t.historicalEntries = e.historicalEntries), void 0 !== e.bondDenom && (t.bondDenom = e.bondDenom), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, I);
                    return void 0 !== e.unbondingTime && null !== e.unbondingTime ? t.unbondingTime = d.Duration.fromPartial(e.unbondingTime) : t.unbondingTime = void 0, void 0 !== e.maxValidators && null !== e.maxValidators ? t.maxValidators = e.maxValidators : t.maxValidators = 0, void 0 !== e.maxEntries && null !== e.maxEntries ? t.maxEntries = e.maxEntries : t.maxEntries = 0, void 0 !== e.historicalEntries && null !== e.historicalEntries ? t.historicalEntries = e.historicalEntries : t.historicalEntries = 0, void 0 !== e.bondDenom && null !== e.bondDenom ? t.bondDenom = e.bondDenom : t.bondDenom = "", t
                }
            };
            const P = {};
            t.DelegationResponse = {
                encode: (e, n = s.default.Writer.create()) => (void 0 !== e.delegation && t.Delegation.encode(e.delegation, n.uint32(10).fork()).ldelim(), void 0 !== e.balance && l.Coin.encode(e.balance, n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, P);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.delegation = t.Delegation.decode(o, o.uint32());
                                break;
                            case 2:
                                r.balance = l.Coin.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, P);
                    return void 0 !== e.delegation && null !== e.delegation ? n.delegation = t.Delegation.fromJSON(e.delegation) : n.delegation = void 0, void 0 !== e.balance && null !== e.balance ? n.balance = l.Coin.fromJSON(e.balance) : n.balance = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.delegation && (n.delegation = e.delegation ? t.Delegation.toJSON(e.delegation) : void 0), void 0 !== e.balance && (n.balance = e.balance ? l.Coin.toJSON(e.balance) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, P);
                    return void 0 !== e.delegation && null !== e.delegation ? n.delegation = t.Delegation.fromPartial(e.delegation) : n.delegation = void 0, void 0 !== e.balance && null !== e.balance ? n.balance = l.Coin.fromPartial(e.balance) : n.balance = void 0, n
                }
            };
            const _ = {
                balance: ""
            };
            t.RedelegationEntryResponse = {
                encode: (e, n = s.default.Writer.create()) => (void 0 !== e.redelegationEntry && t.RedelegationEntry.encode(e.redelegationEntry, n.uint32(10).fork()).ldelim(), "" !== e.balance && n.uint32(34).string(e.balance), n),
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, _);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.redelegationEntry = t.RedelegationEntry.decode(o, o.uint32());
                                break;
                            case 4:
                                r.balance = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, _);
                    return void 0 !== e.redelegationEntry && null !== e.redelegationEntry ? n.redelegationEntry = t.RedelegationEntry.fromJSON(e.redelegationEntry) : n.redelegationEntry = void 0, void 0 !== e.balance && null !== e.balance ? n.balance = String(e.balance) : n.balance = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.redelegationEntry && (n.redelegationEntry = e.redelegationEntry ? t.RedelegationEntry.toJSON(e.redelegationEntry) : void 0), void 0 !== e.balance && (n.balance = e.balance), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, _);
                    return void 0 !== e.redelegationEntry && null !== e.redelegationEntry ? n.redelegationEntry = t.RedelegationEntry.fromPartial(e.redelegationEntry) : n.redelegationEntry = void 0, void 0 !== e.balance && null !== e.balance ? n.balance = e.balance : n.balance = "", n
                }
            };
            const j = {};
            t.RedelegationResponse = {
                encode(e, n = s.default.Writer.create()) {
                    void 0 !== e.redelegation && t.Redelegation.encode(e.redelegation, n.uint32(10).fork()).ldelim();
                    for (const o of e.entries) t.RedelegationEntryResponse.encode(o, n.uint32(18).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, j);
                    for (r.entries = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.redelegation = t.Redelegation.decode(o, o.uint32());
                                break;
                            case 2:
                                r.entries.push(t.RedelegationEntryResponse.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, j);
                    if (n.entries = [], void 0 !== e.redelegation && null !== e.redelegation ? n.redelegation = t.Redelegation.fromJSON(e.redelegation) : n.redelegation = void 0, void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.RedelegationEntryResponse.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.redelegation && (n.redelegation = e.redelegation ? t.Redelegation.toJSON(e.redelegation) : void 0), e.entries ? n.entries = e.entries.map(e => e ? t.RedelegationEntryResponse.toJSON(e) : void 0) : n.entries = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, j);
                    if (n.entries = [], void 0 !== e.redelegation && null !== e.redelegation ? n.redelegation = t.Redelegation.fromPartial(e.redelegation) : n.redelegation = void 0, void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.RedelegationEntryResponse.fromPartial(o));
                    return n
                }
            };
            const J = {
                notBondedTokens: "",
                bondedTokens: ""
            };

            function C(e) {
                var t;
                return {
                    seconds: (t = e.getTime() / 1e3, i.default.fromNumber(t)),
                    nanos: e.getTime() % 1e3 * 1e6
                }
            }

            function V(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }

            function B(e) {
                return e instanceof Date ? e : "string" == typeof e ? new Date(e) : V(c.Timestamp.fromJSON(e))
            }
            t.Pool = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.notBondedTokens && t.uint32(10).string(e.notBondedTokens), "" !== e.bondedTokens && t.uint32(18).string(e.bondedTokens), t),
                decode(e, t) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, J);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.notBondedTokens = n.string();
                                break;
                            case 2:
                                i.bondedTokens = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, J);
                    return void 0 !== e.notBondedTokens && null !== e.notBondedTokens ? t.notBondedTokens = String(e.notBondedTokens) : t.notBondedTokens = "", void 0 !== e.bondedTokens && null !== e.bondedTokens ? t.bondedTokens = String(e.bondedTokens) : t.bondedTokens = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.notBondedTokens && (t.notBondedTokens = e.notBondedTokens), void 0 !== e.bondedTokens && (t.bondedTokens = e.bondedTokens), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, J);
                    return void 0 !== e.notBondedTokens && null !== e.notBondedTokens ? t.notBondedTokens = e.notBondedTokens : t.notBondedTokens = "", void 0 !== e.bondedTokens && null !== e.bondedTokens ? t.bondedTokens = e.bondedTokens : t.bondedTokens = "", t
                }
            }, s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        }
    }
]);