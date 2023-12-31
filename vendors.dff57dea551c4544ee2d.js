(window.webpackJsonp = window.webpackJsonp || []).push([
    [162], {
        1091: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GrantAuthorization = t.Grant = t.GenericAuthorization = t.protobufPackage = void 0;
            const s = o(n(1)),
                i = o(n(8)),
                r = n(19),
                a = n(268);
            t.protobufPackage = "cosmos.authz.v1beta1";
            const d = {
                msg: ""
            };
            t.GenericAuthorization = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.msg && t.uint32(10).string(e.msg), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.msg = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.msg && null !== e.msg ? t.msg = String(e.msg) : t.msg = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.msg && (t.msg = e.msg), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.msg && null !== e.msg ? t.msg = e.msg : t.msg = "", t
                }
            };
            const u = {};
            t.Grant = {
                encode: (e, t = i.default.Writer.create()) => (void 0 !== e.authorization && r.Any.encode(e.authorization, t.uint32(10).fork()).ldelim(), void 0 !== e.expiration && a.Timestamp.encode(c(e.expiration), t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.authorization = r.Any.decode(n, n.uint32());
                                break;
                            case 2:
                                s.expiration = f(a.Timestamp.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.authorization && null !== e.authorization ? t.authorization = r.Any.fromJSON(e.authorization) : t.authorization = void 0, void 0 !== e.expiration && null !== e.expiration ? t.expiration = p(e.expiration) : t.expiration = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.authorization && (t.authorization = e.authorization ? r.Any.toJSON(e.authorization) : void 0), void 0 !== e.expiration && (t.expiration = e.expiration.toISOString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.authorization && null !== e.authorization ? t.authorization = r.Any.fromPartial(e.authorization) : t.authorization = void 0, void 0 !== e.expiration && null !== e.expiration ? t.expiration = e.expiration : t.expiration = void 0, t
                }
            };
            const l = {
                granter: "",
                grantee: ""
            };

            function c(e) {
                var t;
                return {
                    seconds: (t = e.getTime() / 1e3, s.default.fromNumber(t)),
                    nanos: e.getTime() % 1e3 * 1e6
                }
            }

            function f(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }

            function p(e) {
                return e instanceof Date ? e : "string" == typeof e ? new Date(e) : f(a.Timestamp.fromJSON(e))
            }
            t.GrantAuthorization = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.granter && t.uint32(10).string(e.granter), "" !== e.grantee && t.uint32(18).string(e.grantee), void 0 !== e.authorization && r.Any.encode(e.authorization, t.uint32(26).fork()).ldelim(), void 0 !== e.expiration && a.Timestamp.encode(c(e.expiration), t.uint32(34).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, l);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.granter = n.string();
                                break;
                            case 2:
                                s.grantee = n.string();
                                break;
                            case 3:
                                s.authorization = r.Any.decode(n, n.uint32());
                                break;
                            case 4:
                                s.expiration = f(a.Timestamp.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.granter && null !== e.granter ? t.granter = String(e.granter) : t.granter = "", void 0 !== e.grantee && null !== e.grantee ? t.grantee = String(e.grantee) : t.grantee = "", void 0 !== e.authorization && null !== e.authorization ? t.authorization = r.Any.fromJSON(e.authorization) : t.authorization = void 0, void 0 !== e.expiration && null !== e.expiration ? t.expiration = p(e.expiration) : t.expiration = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.granter && (t.granter = e.granter), void 0 !== e.grantee && (t.grantee = e.grantee), void 0 !== e.authorization && (t.authorization = e.authorization ? r.Any.toJSON(e.authorization) : void 0), void 0 !== e.expiration && (t.expiration = e.expiration.toISOString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.granter && null !== e.granter ? t.granter = e.granter : t.granter = "", void 0 !== e.grantee && null !== e.grantee ? t.grantee = e.grantee : t.grantee = "", void 0 !== e.authorization && null !== e.authorization ? t.authorization = r.Any.fromPartial(e.authorization) : t.authorization = void 0, void 0 !== e.expiration && null !== e.expiration ? t.expiration = e.expiration : t.expiration = void 0, t
                }
            }, i.default.util.Long !== s.default && (i.default.util.Long = s.default, i.default.configure())
        },
        1092: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GrpcWebImpl = t.MsgRevokeDesc = t.MsgExecDesc = t.MsgGrantDesc = t.MsgDesc = t.MsgClientImpl = t.MsgRevokeResponse = t.MsgRevoke = t.MsgGrantResponse = t.MsgExec = t.MsgExecResponse = t.MsgGrant = t.protobufPackage = void 0;
            const s = o(n(1)),
                i = n(156),
                r = o(n(8)),
                a = n(1091),
                d = n(157),
                u = n(19);
            t.protobufPackage = "cosmos.authz.v1beta1";
            const l = {
                granter: "",
                grantee: ""
            };
            t.MsgGrant = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.granter && t.uint32(10).string(e.granter), "" !== e.grantee && t.uint32(18).string(e.grantee), void 0 !== e.grant && a.Grant.encode(e.grant, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, l);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.granter = n.string();
                                break;
                            case 2:
                                s.grantee = n.string();
                                break;
                            case 3:
                                s.grant = a.Grant.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.granter && null !== e.granter ? t.granter = String(e.granter) : t.granter = "", void 0 !== e.grantee && null !== e.grantee ? t.grantee = String(e.grantee) : t.grantee = "", void 0 !== e.grant && null !== e.grant ? t.grant = a.Grant.fromJSON(e.grant) : t.grant = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.granter && (t.granter = e.granter), void 0 !== e.grantee && (t.grantee = e.grantee), void 0 !== e.grant && (t.grant = e.grant ? a.Grant.toJSON(e.grant) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.granter && null !== e.granter ? t.granter = e.granter : t.granter = "", void 0 !== e.grantee && null !== e.grantee ? t.grantee = e.grantee : t.grantee = "", void 0 !== e.grant && null !== e.grant ? t.grant = a.Grant.fromPartial(e.grant) : t.grant = void 0, t
                }
            };
            const c = {};
            t.MsgExecResponse = {
                encode(e, t = r.default.Writer.create()) {
                    for (const n of e.results) t.uint32(10).bytes(n);
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, c);
                    for (s.results = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.results.push(n.bytes());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    if (t.results = [], void 0 !== e.results && null !== e.results)
                        for (const n of e.results) t.results.push(b(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.results ? t.results = e.results.map(e => function(e) {
                        const t = [];
                        for (const n of e) t.push(String.fromCharCode(n));
                        return O(t.join(""))
                    }(void 0 !== e ? e : new Uint8Array)) : t.results = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    if (t.results = [], void 0 !== e.results && null !== e.results)
                        for (const n of e.results) t.results.push(n);
                    return t
                }
            };
            const f = {
                grantee: ""
            };
            t.MsgExec = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.grantee && t.uint32(10).string(e.grantee);
                    for (const n of e.msgs) u.Any.encode(n, t.uint32(18).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, f);
                    for (s.msgs = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.grantee = n.string();
                                break;
                            case 2:
                                s.msgs.push(u.Any.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.msgs = [], void 0 !== e.grantee && null !== e.grantee ? t.grantee = String(e.grantee) : t.grantee = "", void 0 !== e.msgs && null !== e.msgs)
                        for (const n of e.msgs) t.msgs.push(u.Any.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.grantee && (t.grantee = e.grantee), e.msgs ? t.msgs = e.msgs.map(e => e ? u.Any.toJSON(e) : void 0) : t.msgs = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    if (t.msgs = [], void 0 !== e.grantee && null !== e.grantee ? t.grantee = e.grantee : t.grantee = "", void 0 !== e.msgs && null !== e.msgs)
                        for (const n of e.msgs) t.msgs.push(u.Any.fromPartial(n));
                    return t
                }
            };
            const p = {};
            t.MsgGrantResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, p);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return s
                },
                fromJSON: e => Object.assign({}, p),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, p)
            };
            const g = {
                granter: "",
                grantee: "",
                msgTypeUrl: ""
            };
            t.MsgRevoke = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.granter && t.uint32(10).string(e.granter), "" !== e.grantee && t.uint32(18).string(e.grantee), "" !== e.msgTypeUrl && t.uint32(26).string(e.msgTypeUrl), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, g);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.granter = n.string();
                                break;
                            case 2:
                                s.grantee = n.string();
                                break;
                            case 3:
                                s.msgTypeUrl = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.granter && null !== e.granter ? t.granter = String(e.granter) : t.granter = "", void 0 !== e.grantee && null !== e.grantee ? t.grantee = String(e.grantee) : t.grantee = "", void 0 !== e.msgTypeUrl && null !== e.msgTypeUrl ? t.msgTypeUrl = String(e.msgTypeUrl) : t.msgTypeUrl = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.granter && (t.granter = e.granter), void 0 !== e.grantee && (t.grantee = e.grantee), void 0 !== e.msgTypeUrl && (t.msgTypeUrl = e.msgTypeUrl), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.granter && null !== e.granter ? t.granter = e.granter : t.granter = "", void 0 !== e.grantee && null !== e.grantee ? t.grantee = e.grantee : t.grantee = "", void 0 !== e.msgTypeUrl && null !== e.msgTypeUrl ? t.msgTypeUrl = e.msgTypeUrl : t.msgTypeUrl = "", t
                }
            };
            const m = {};
            t.MsgRevokeResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, m);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return s
                },
                fromJSON: e => Object.assign({}, m),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, m)
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.Grant = this.Grant.bind(this), this.Exec = this.Exec.bind(this), this.Revoke = this.Revoke.bind(this)
                }
                Grant(e, n) {
                    return this.rpc.unary(t.MsgGrantDesc, t.MsgGrant.fromPartial(e), n)
                }
                Exec(e, n) {
                    return this.rpc.unary(t.MsgExecDesc, t.MsgExec.fromPartial(e), n)
                }
                Revoke(e, n) {
                    return this.rpc.unary(t.MsgRevokeDesc, t.MsgRevoke.fromPartial(e), n)
                }
            }, t.MsgDesc = {
                serviceName: "cosmos.authz.v1beta1.Msg"
            }, t.MsgGrantDesc = {
                methodName: "Grant",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgGrant.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgGrantResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgExecDesc = {
                methodName: "Exec",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgExec.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgExecResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgRevokeDesc = {
                methodName: "Revoke",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgRevoke.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgRevokeResponse.decode(e)), {
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
                    const s = Object.assign(Object.assign({}, t), e.requestType),
                        r = n && this.options.metadata ? new d.BrowserHeaders(Object.assign(Object.assign({}, null === (o = this.options) || void 0 === o ? void 0 : o.metadata.headersMap), null == n ? void 0 : n.headersMap)) : n || this.options.metadata;
                    return new Promise((t, n) => {
                        i.grpc.unary(e, {
                            request: s,
                            host: this.host,
                            metadata: r,
                            transport: this.options.transport,
                            debug: this.options.debug,
                            onEnd: function(e) {
                                if (e.status === i.grpc.Code.OK) t(e.message);
                                else {
                                    const t = new Error(e.statusMessage);
                                    t.code = e.status, t.metadata = e.trailers, n(t)
                                }
                            }
                        })
                    })
                }
            };
            var h = (() => {
                if (void 0 !== h) return h;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const v = h.atob || (e => h.Buffer.from(e, "base64").toString("binary"));

            function b(e) {
                const t = v(e),
                    n = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                return n
            }
            const O = h.btoa || (e => h.Buffer.from(e, "binary").toString("base64"));
            r.default.util.Long !== s.default && (r.default.util.Long = s.default, r.default.configure())
        },
        121: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DecProto = t.IntProto = t.DecCoin = t.Coin = t.protobufPackage = void 0;
            const s = o(n(1)),
                i = o(n(8));
            t.protobufPackage = "cosmos.base.v1beta1";
            const r = {
                denom: "",
                amount: ""
            };
            t.Coin = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), "" !== e.amount && t.uint32(18).string(e.amount), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, r);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.denom = n.string();
                                break;
                            case 2:
                                s.amount = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", void 0 !== e.amount && null !== e.amount ? t.amount = String(e.amount) : t.amount = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), void 0 !== e.amount && (t.amount = e.amount), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = e.denom : t.denom = "", void 0 !== e.amount && null !== e.amount ? t.amount = e.amount : t.amount = "", t
                }
            };
            const a = {
                denom: "",
                amount: ""
            };
            t.DecCoin = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), "" !== e.amount && t.uint32(18).string(e.amount), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, a);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.denom = n.string();
                                break;
                            case 2:
                                s.amount = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, a);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", void 0 !== e.amount && null !== e.amount ? t.amount = String(e.amount) : t.amount = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), void 0 !== e.amount && (t.amount = e.amount), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, a);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = e.denom : t.denom = "", void 0 !== e.amount && null !== e.amount ? t.amount = e.amount : t.amount = "", t
                }
            };
            const d = {
                int: ""
            };
            t.IntProto = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.int && t.uint32(10).string(e.int), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.int = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.int && null !== e.int ? t.int = String(e.int) : t.int = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.int && (t.int = e.int), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.int && null !== e.int ? t.int = e.int : t.int = "", t
                }
            };
            const u = {
                dec: ""
            };
            t.DecProto = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.dec && t.uint32(10).string(e.dec), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.dec = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.dec && null !== e.dec ? t.dec = String(e.dec) : t.dec = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.dec && (t.dec = e.dec), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.dec && null !== e.dec ? t.dec = e.dec : t.dec = "", t
                }
            }, i.default.util.Long !== s.default && (i.default.util.Long = s.default, i.default.configure())
        },
        1889: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GrpcWebImpl = t.MsgMultiSendDesc = t.MsgSendDesc = t.MsgDesc = t.MsgClientImpl = t.MsgMultiSendResponse = t.MsgMultiSend = t.MsgSendResponse = t.MsgSend = t.protobufPackage = void 0;
            const s = o(n(1)),
                i = n(156),
                r = o(n(8)),
                a = n(157),
                d = n(121),
                u = n(1890);
            t.protobufPackage = "cosmos.bank.v1beta1";
            const l = {
                fromAddress: "",
                toAddress: ""
            };
            t.MsgSend = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.fromAddress && t.uint32(10).string(e.fromAddress), "" !== e.toAddress && t.uint32(18).string(e.toAddress);
                    for (const n of e.amount) d.Coin.encode(n, t.uint32(26).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, l);
                    for (s.amount = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.fromAddress = n.string();
                                break;
                            case 2:
                                s.toAddress = n.string();
                                break;
                            case 3:
                                s.amount.push(d.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    if (t.amount = [], void 0 !== e.fromAddress && null !== e.fromAddress ? t.fromAddress = String(e.fromAddress) : t.fromAddress = "", void 0 !== e.toAddress && null !== e.toAddress ? t.toAddress = String(e.toAddress) : t.toAddress = "", void 0 !== e.amount && null !== e.amount)
                        for (const n of e.amount) t.amount.push(d.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress), void 0 !== e.toAddress && (t.toAddress = e.toAddress), e.amount ? t.amount = e.amount.map(e => e ? d.Coin.toJSON(e) : void 0) : t.amount = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    if (t.amount = [], void 0 !== e.fromAddress && null !== e.fromAddress ? t.fromAddress = e.fromAddress : t.fromAddress = "", void 0 !== e.toAddress && null !== e.toAddress ? t.toAddress = e.toAddress : t.toAddress = "", void 0 !== e.amount && null !== e.amount)
                        for (const n of e.amount) t.amount.push(d.Coin.fromPartial(n));
                    return t
                }
            };
            const c = {};
            t.MsgSendResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, c);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return s
                },
                fromJSON: e => Object.assign({}, c),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, c)
            };
            const f = {};
            t.MsgMultiSend = {
                encode(e, t = r.default.Writer.create()) {
                    for (const n of e.inputs) u.Input.encode(n, t.uint32(10).fork()).ldelim();
                    for (const n of e.outputs) u.Output.encode(n, t.uint32(18).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, f);
                    for (s.inputs = [], s.outputs = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.inputs.push(u.Input.decode(n, n.uint32()));
                                break;
                            case 2:
                                s.outputs.push(u.Output.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.inputs = [], t.outputs = [], void 0 !== e.inputs && null !== e.inputs)
                        for (const n of e.inputs) t.inputs.push(u.Input.fromJSON(n));
                    if (void 0 !== e.outputs && null !== e.outputs)
                        for (const n of e.outputs) t.outputs.push(u.Output.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.inputs ? t.inputs = e.inputs.map(e => e ? u.Input.toJSON(e) : void 0) : t.inputs = [], e.outputs ? t.outputs = e.outputs.map(e => e ? u.Output.toJSON(e) : void 0) : t.outputs = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    if (t.inputs = [], t.outputs = [], void 0 !== e.inputs && null !== e.inputs)
                        for (const n of e.inputs) t.inputs.push(u.Input.fromPartial(n));
                    if (void 0 !== e.outputs && null !== e.outputs)
                        for (const n of e.outputs) t.outputs.push(u.Output.fromPartial(n));
                    return t
                }
            };
            const p = {};
            t.MsgMultiSendResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, p);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return s
                },
                fromJSON: e => Object.assign({}, p),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, p)
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.Send = this.Send.bind(this), this.MultiSend = this.MultiSend.bind(this)
                }
                Send(e, n) {
                    return this.rpc.unary(t.MsgSendDesc, t.MsgSend.fromPartial(e), n)
                }
                MultiSend(e, n) {
                    return this.rpc.unary(t.MsgMultiSendDesc, t.MsgMultiSend.fromPartial(e), n)
                }
            }, t.MsgDesc = {
                serviceName: "cosmos.bank.v1beta1.Msg"
            }, t.MsgSendDesc = {
                methodName: "Send",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgSend.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgSendResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgMultiSendDesc = {
                methodName: "MultiSend",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgMultiSend.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgMultiSendResponse.decode(e)), {
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
                    const s = Object.assign(Object.assign({}, t), e.requestType),
                        r = n && this.options.metadata ? new a.BrowserHeaders(Object.assign(Object.assign({}, null === (o = this.options) || void 0 === o ? void 0 : o.metadata.headersMap), null == n ? void 0 : n.headersMap)) : n || this.options.metadata;
                    return new Promise((t, n) => {
                        i.grpc.unary(e, {
                            request: s,
                            host: this.host,
                            metadata: r,
                            transport: this.options.transport,
                            debug: this.options.debug,
                            onEnd: function(e) {
                                if (e.status === i.grpc.Code.OK) t(e.message);
                                else {
                                    const t = new Error(e.statusMessage);
                                    t.code = e.status, t.metadata = e.trailers, n(t)
                                }
                            }
                        })
                    })
                }
            }, r.default.util.Long !== s.default && (r.default.util.Long = s.default, r.default.configure())
        },
        1890: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Metadata = t.DenomUnit = t.Supply = t.Output = t.Input = t.SendEnabled = t.Params = t.protobufPackage = void 0;
            const s = o(n(1)),
                i = o(n(8)),
                r = n(121);
            t.protobufPackage = "cosmos.bank.v1beta1";
            const a = {
                defaultSendEnabled: !1
            };
            t.Params = {
                encode(e, n = i.default.Writer.create()) {
                    for (const o of e.sendEnabled) t.SendEnabled.encode(o, n.uint32(10).fork()).ldelim();
                    return !0 === e.defaultSendEnabled && n.uint32(16).bool(e.defaultSendEnabled), n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, a);
                    for (r.sendEnabled = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.sendEnabled.push(t.SendEnabled.decode(o, o.uint32()));
                                break;
                            case 2:
                                r.defaultSendEnabled = o.bool();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, a);
                    if (n.sendEnabled = [], void 0 !== e.sendEnabled && null !== e.sendEnabled)
                        for (const o of e.sendEnabled) n.sendEnabled.push(t.SendEnabled.fromJSON(o));
                    return void 0 !== e.defaultSendEnabled && null !== e.defaultSendEnabled ? n.defaultSendEnabled = Boolean(e.defaultSendEnabled) : n.defaultSendEnabled = !1, n
                },
                toJSON(e) {
                    const n = {};
                    return e.sendEnabled ? n.sendEnabled = e.sendEnabled.map(e => e ? t.SendEnabled.toJSON(e) : void 0) : n.sendEnabled = [], void 0 !== e.defaultSendEnabled && (n.defaultSendEnabled = e.defaultSendEnabled), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, a);
                    if (n.sendEnabled = [], void 0 !== e.sendEnabled && null !== e.sendEnabled)
                        for (const o of e.sendEnabled) n.sendEnabled.push(t.SendEnabled.fromPartial(o));
                    return void 0 !== e.defaultSendEnabled && null !== e.defaultSendEnabled ? n.defaultSendEnabled = e.defaultSendEnabled : n.defaultSendEnabled = !1, n
                }
            };
            const d = {
                denom: "",
                enabled: !1
            };
            t.SendEnabled = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), !0 === e.enabled && t.uint32(16).bool(e.enabled), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.denom = n.string();
                                break;
                            case 2:
                                s.enabled = n.bool();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", void 0 !== e.enabled && null !== e.enabled ? t.enabled = Boolean(e.enabled) : t.enabled = !1, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), void 0 !== e.enabled && (t.enabled = e.enabled), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = e.denom : t.denom = "", void 0 !== e.enabled && null !== e.enabled ? t.enabled = e.enabled : t.enabled = !1, t
                }
            };
            const u = {
                address: ""
            };
            t.Input = {
                encode(e, t = i.default.Writer.create()) {
                    "" !== e.address && t.uint32(10).string(e.address);
                    for (const n of e.coins) r.Coin.encode(n, t.uint32(18).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, u);
                    for (s.coins = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.address = n.string();
                                break;
                            case 2:
                                s.coins.push(r.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    if (t.coins = [], void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", void 0 !== e.coins && null !== e.coins)
                        for (const n of e.coins) t.coins.push(r.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = e.address), e.coins ? t.coins = e.coins.map(e => e ? r.Coin.toJSON(e) : void 0) : t.coins = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    if (t.coins = [], void 0 !== e.address && null !== e.address ? t.address = e.address : t.address = "", void 0 !== e.coins && null !== e.coins)
                        for (const n of e.coins) t.coins.push(r.Coin.fromPartial(n));
                    return t
                }
            };
            const l = {
                address: ""
            };
            t.Output = {
                encode(e, t = i.default.Writer.create()) {
                    "" !== e.address && t.uint32(10).string(e.address);
                    for (const n of e.coins) r.Coin.encode(n, t.uint32(18).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, l);
                    for (s.coins = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.address = n.string();
                                break;
                            case 2:
                                s.coins.push(r.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    if (t.coins = [], void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", void 0 !== e.coins && null !== e.coins)
                        for (const n of e.coins) t.coins.push(r.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = e.address), e.coins ? t.coins = e.coins.map(e => e ? r.Coin.toJSON(e) : void 0) : t.coins = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    if (t.coins = [], void 0 !== e.address && null !== e.address ? t.address = e.address : t.address = "", void 0 !== e.coins && null !== e.coins)
                        for (const n of e.coins) t.coins.push(r.Coin.fromPartial(n));
                    return t
                }
            };
            const c = {};
            t.Supply = {
                encode(e, t = i.default.Writer.create()) {
                    for (const n of e.total) r.Coin.encode(n, t.uint32(10).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, c);
                    for (s.total = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.total.push(r.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    if (t.total = [], void 0 !== e.total && null !== e.total)
                        for (const n of e.total) t.total.push(r.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.total ? t.total = e.total.map(e => e ? r.Coin.toJSON(e) : void 0) : t.total = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    if (t.total = [], void 0 !== e.total && null !== e.total)
                        for (const n of e.total) t.total.push(r.Coin.fromPartial(n));
                    return t
                }
            };
            const f = {
                denom: "",
                exponent: 0,
                aliases: ""
            };
            t.DenomUnit = {
                encode(e, t = i.default.Writer.create()) {
                    "" !== e.denom && t.uint32(10).string(e.denom), 0 !== e.exponent && t.uint32(16).uint32(e.exponent);
                    for (const n of e.aliases) t.uint32(26).string(n);
                    return t
                },
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, f);
                    for (s.aliases = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.denom = n.string();
                                break;
                            case 2:
                                s.exponent = n.uint32();
                                break;
                            case 3:
                                s.aliases.push(n.string());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.aliases = [], void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", void 0 !== e.exponent && null !== e.exponent ? t.exponent = Number(e.exponent) : t.exponent = 0, void 0 !== e.aliases && null !== e.aliases)
                        for (const n of e.aliases) t.aliases.push(String(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), void 0 !== e.exponent && (t.exponent = e.exponent), e.aliases ? t.aliases = e.aliases.map(e => e) : t.aliases = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    if (t.aliases = [], void 0 !== e.denom && null !== e.denom ? t.denom = e.denom : t.denom = "", void 0 !== e.exponent && null !== e.exponent ? t.exponent = e.exponent : t.exponent = 0, void 0 !== e.aliases && null !== e.aliases)
                        for (const n of e.aliases) t.aliases.push(n);
                    return t
                }
            };
            const p = {
                description: "",
                base: "",
                display: "",
                name: "",
                symbol: ""
            };
            t.Metadata = {
                encode(e, n = i.default.Writer.create()) {
                    "" !== e.description && n.uint32(10).string(e.description);
                    for (const o of e.denomUnits) t.DenomUnit.encode(o, n.uint32(18).fork()).ldelim();
                    return "" !== e.base && n.uint32(26).string(e.base), "" !== e.display && n.uint32(34).string(e.display), "" !== e.name && n.uint32(42).string(e.name), "" !== e.symbol && n.uint32(50).string(e.symbol), n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, p);
                    for (r.denomUnits = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.description = o.string();
                                break;
                            case 2:
                                r.denomUnits.push(t.DenomUnit.decode(o, o.uint32()));
                                break;
                            case 3:
                                r.base = o.string();
                                break;
                            case 4:
                                r.display = o.string();
                                break;
                            case 5:
                                r.name = o.string();
                                break;
                            case 6:
                                r.symbol = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, p);
                    if (n.denomUnits = [], void 0 !== e.description && null !== e.description ? n.description = String(e.description) : n.description = "", void 0 !== e.denomUnits && null !== e.denomUnits)
                        for (const o of e.denomUnits) n.denomUnits.push(t.DenomUnit.fromJSON(o));
                    return void 0 !== e.base && null !== e.base ? n.base = String(e.base) : n.base = "", void 0 !== e.display && null !== e.display ? n.display = String(e.display) : n.display = "", void 0 !== e.name && null !== e.name ? n.name = String(e.name) : n.name = "", void 0 !== e.symbol && null !== e.symbol ? n.symbol = String(e.symbol) : n.symbol = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.description && (n.description = e.description), e.denomUnits ? n.denomUnits = e.denomUnits.map(e => e ? t.DenomUnit.toJSON(e) : void 0) : n.denomUnits = [], void 0 !== e.base && (n.base = e.base), void 0 !== e.display && (n.display = e.display), void 0 !== e.name && (n.name = e.name), void 0 !== e.symbol && (n.symbol = e.symbol), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, p);
                    if (n.denomUnits = [], void 0 !== e.description && null !== e.description ? n.description = e.description : n.description = "", void 0 !== e.denomUnits && null !== e.denomUnits)
                        for (const o of e.denomUnits) n.denomUnits.push(t.DenomUnit.fromPartial(o));
                    return void 0 !== e.base && null !== e.base ? n.base = e.base : n.base = "", void 0 !== e.display && null !== e.display ? n.display = e.display : n.display = "", void 0 !== e.name && null !== e.name ? n.name = e.name : n.name = "", void 0 !== e.symbol && null !== e.symbol ? n.symbol = e.symbol : n.symbol = "", n
                }
            }, i.default.util.Long !== s.default && (i.default.util.Long = s.default, i.default.configure())
        },
        1922: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Params = t.ModuleAccount = t.BaseAccount = t.protobufPackage = void 0;
            const s = o(n(1)),
                i = o(n(8)),
                r = n(19);
            t.protobufPackage = "cosmos.auth.v1beta1";
            const a = {
                address: "",
                accountNumber: s.default.UZERO,
                sequence: s.default.UZERO
            };
            t.BaseAccount = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.address && t.uint32(10).string(e.address), void 0 !== e.pubKey && r.Any.encode(e.pubKey, t.uint32(18).fork()).ldelim(), e.accountNumber.isZero() || t.uint32(24).uint64(e.accountNumber), e.sequence.isZero() || t.uint32(32).uint64(e.sequence), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, a);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.address = n.string();
                                break;
                            case 2:
                                s.pubKey = r.Any.decode(n, n.uint32());
                                break;
                            case 3:
                                s.accountNumber = n.uint64();
                                break;
                            case 4:
                                s.sequence = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, a);
                    return void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = r.Any.fromJSON(e.pubKey) : t.pubKey = void 0, void 0 !== e.accountNumber && null !== e.accountNumber ? t.accountNumber = s.default.fromString(e.accountNumber) : t.accountNumber = s.default.UZERO, void 0 !== e.sequence && null !== e.sequence ? t.sequence = s.default.fromString(e.sequence) : t.sequence = s.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = e.address), void 0 !== e.pubKey && (t.pubKey = e.pubKey ? r.Any.toJSON(e.pubKey) : void 0), void 0 !== e.accountNumber && (t.accountNumber = (e.accountNumber || s.default.UZERO).toString()), void 0 !== e.sequence && (t.sequence = (e.sequence || s.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, a);
                    return void 0 !== e.address && null !== e.address ? t.address = e.address : t.address = "", void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = r.Any.fromPartial(e.pubKey) : t.pubKey = void 0, void 0 !== e.accountNumber && null !== e.accountNumber ? t.accountNumber = e.accountNumber : t.accountNumber = s.default.UZERO, void 0 !== e.sequence && null !== e.sequence ? t.sequence = e.sequence : t.sequence = s.default.UZERO, t
                }
            };
            const d = {
                name: "",
                permissions: ""
            };
            t.ModuleAccount = {
                encode(e, n = i.default.Writer.create()) {
                    void 0 !== e.baseAccount && t.BaseAccount.encode(e.baseAccount, n.uint32(10).fork()).ldelim(), "" !== e.name && n.uint32(18).string(e.name);
                    for (const t of e.permissions) n.uint32(26).string(t);
                    return n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, d);
                    for (r.permissions = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.baseAccount = t.BaseAccount.decode(o, o.uint32());
                                break;
                            case 2:
                                r.name = o.string();
                                break;
                            case 3:
                                r.permissions.push(o.string());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, d);
                    if (n.permissions = [], void 0 !== e.baseAccount && null !== e.baseAccount ? n.baseAccount = t.BaseAccount.fromJSON(e.baseAccount) : n.baseAccount = void 0, void 0 !== e.name && null !== e.name ? n.name = String(e.name) : n.name = "", void 0 !== e.permissions && null !== e.permissions)
                        for (const t of e.permissions) n.permissions.push(String(t));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.baseAccount && (n.baseAccount = e.baseAccount ? t.BaseAccount.toJSON(e.baseAccount) : void 0), void 0 !== e.name && (n.name = e.name), e.permissions ? n.permissions = e.permissions.map(e => e) : n.permissions = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, d);
                    if (n.permissions = [], void 0 !== e.baseAccount && null !== e.baseAccount ? n.baseAccount = t.BaseAccount.fromPartial(e.baseAccount) : n.baseAccount = void 0, void 0 !== e.name && null !== e.name ? n.name = e.name : n.name = "", void 0 !== e.permissions && null !== e.permissions)
                        for (const t of e.permissions) n.permissions.push(t);
                    return n
                }
            };
            const u = {
                maxMemoCharacters: s.default.UZERO,
                txSigLimit: s.default.UZERO,
                txSizeCostPerByte: s.default.UZERO,
                sigVerifyCostEd25519: s.default.UZERO,
                sigVerifyCostSecp256k1: s.default.UZERO
            };
            t.Params = {
                encode: (e, t = i.default.Writer.create()) => (e.maxMemoCharacters.isZero() || t.uint32(8).uint64(e.maxMemoCharacters), e.txSigLimit.isZero() || t.uint32(16).uint64(e.txSigLimit), e.txSizeCostPerByte.isZero() || t.uint32(24).uint64(e.txSizeCostPerByte), e.sigVerifyCostEd25519.isZero() || t.uint32(32).uint64(e.sigVerifyCostEd25519), e.sigVerifyCostSecp256k1.isZero() || t.uint32(40).uint64(e.sigVerifyCostSecp256k1), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.maxMemoCharacters = n.uint64();
                                break;
                            case 2:
                                s.txSigLimit = n.uint64();
                                break;
                            case 3:
                                s.txSizeCostPerByte = n.uint64();
                                break;
                            case 4:
                                s.sigVerifyCostEd25519 = n.uint64();
                                break;
                            case 5:
                                s.sigVerifyCostSecp256k1 = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.maxMemoCharacters && null !== e.maxMemoCharacters ? t.maxMemoCharacters = s.default.fromString(e.maxMemoCharacters) : t.maxMemoCharacters = s.default.UZERO, void 0 !== e.txSigLimit && null !== e.txSigLimit ? t.txSigLimit = s.default.fromString(e.txSigLimit) : t.txSigLimit = s.default.UZERO, void 0 !== e.txSizeCostPerByte && null !== e.txSizeCostPerByte ? t.txSizeCostPerByte = s.default.fromString(e.txSizeCostPerByte) : t.txSizeCostPerByte = s.default.UZERO, void 0 !== e.sigVerifyCostEd25519 && null !== e.sigVerifyCostEd25519 ? t.sigVerifyCostEd25519 = s.default.fromString(e.sigVerifyCostEd25519) : t.sigVerifyCostEd25519 = s.default.UZERO, void 0 !== e.sigVerifyCostSecp256k1 && null !== e.sigVerifyCostSecp256k1 ? t.sigVerifyCostSecp256k1 = s.default.fromString(e.sigVerifyCostSecp256k1) : t.sigVerifyCostSecp256k1 = s.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.maxMemoCharacters && (t.maxMemoCharacters = (e.maxMemoCharacters || s.default.UZERO).toString()), void 0 !== e.txSigLimit && (t.txSigLimit = (e.txSigLimit || s.default.UZERO).toString()), void 0 !== e.txSizeCostPerByte && (t.txSizeCostPerByte = (e.txSizeCostPerByte || s.default.UZERO).toString()), void 0 !== e.sigVerifyCostEd25519 && (t.sigVerifyCostEd25519 = (e.sigVerifyCostEd25519 || s.default.UZERO).toString()), void 0 !== e.sigVerifyCostSecp256k1 && (t.sigVerifyCostSecp256k1 = (e.sigVerifyCostSecp256k1 || s.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.maxMemoCharacters && null !== e.maxMemoCharacters ? t.maxMemoCharacters = e.maxMemoCharacters : t.maxMemoCharacters = s.default.UZERO, void 0 !== e.txSigLimit && null !== e.txSigLimit ? t.txSigLimit = e.txSigLimit : t.txSigLimit = s.default.UZERO, void 0 !== e.txSizeCostPerByte && null !== e.txSizeCostPerByte ? t.txSizeCostPerByte = e.txSizeCostPerByte : t.txSizeCostPerByte = s.default.UZERO, void 0 !== e.sigVerifyCostEd25519 && null !== e.sigVerifyCostEd25519 ? t.sigVerifyCostEd25519 = e.sigVerifyCostEd25519 : t.sigVerifyCostEd25519 = s.default.UZERO, void 0 !== e.sigVerifyCostSecp256k1 && null !== e.sigVerifyCostSecp256k1 ? t.sigVerifyCostSecp256k1 = e.sigVerifyCostSecp256k1 : t.sigVerifyCostSecp256k1 = s.default.UZERO, t
                }
            }, i.default.util.Long !== s.default && (i.default.util.Long = s.default, i.default.configure())
        },
        1927: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CompressedNonExistenceProof = t.CompressedExistenceProof = t.CompressedBatchEntry = t.CompressedBatchProof = t.BatchEntry = t.BatchProof = t.InnerSpec = t.ProofSpec = t.InnerOp = t.LeafOp = t.CommitmentProof = t.NonExistenceProof = t.ExistenceProof = t.lengthOpToJSON = t.lengthOpFromJSON = t.LengthOp = t.hashOpToJSON = t.hashOpFromJSON = t.HashOp = t.protobufPackage = void 0;
            const s = o(n(1)),
                i = o(n(8));
            var r, a;

            function d(e) {
                switch (e) {
                    case 0:
                    case "NO_HASH":
                        return r.NO_HASH;
                    case 1:
                    case "SHA256":
                        return r.SHA256;
                    case 2:
                    case "SHA512":
                        return r.SHA512;
                    case 3:
                    case "KECCAK":
                        return r.KECCAK;
                    case 4:
                    case "RIPEMD160":
                        return r.RIPEMD160;
                    case 5:
                    case "BITCOIN":
                        return r.BITCOIN;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return r.UNRECOGNIZED
                }
            }

            function u(e) {
                switch (e) {
                    case r.NO_HASH:
                        return "NO_HASH";
                    case r.SHA256:
                        return "SHA256";
                    case r.SHA512:
                        return "SHA512";
                    case r.KECCAK:
                        return "KECCAK";
                    case r.RIPEMD160:
                        return "RIPEMD160";
                    case r.BITCOIN:
                        return "BITCOIN";
                    default:
                        return "UNKNOWN"
                }
            }

            function l(e) {
                switch (e) {
                    case 0:
                    case "NO_PREFIX":
                        return a.NO_PREFIX;
                    case 1:
                    case "VAR_PROTO":
                        return a.VAR_PROTO;
                    case 2:
                    case "VAR_RLP":
                        return a.VAR_RLP;
                    case 3:
                    case "FIXED32_BIG":
                        return a.FIXED32_BIG;
                    case 4:
                    case "FIXED32_LITTLE":
                        return a.FIXED32_LITTLE;
                    case 5:
                    case "FIXED64_BIG":
                        return a.FIXED64_BIG;
                    case 6:
                    case "FIXED64_LITTLE":
                        return a.FIXED64_LITTLE;
                    case 7:
                    case "REQUIRE_32_BYTES":
                        return a.REQUIRE_32_BYTES;
                    case 8:
                    case "REQUIRE_64_BYTES":
                        return a.REQUIRE_64_BYTES;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return a.UNRECOGNIZED
                }
            }

            function c(e) {
                switch (e) {
                    case a.NO_PREFIX:
                        return "NO_PREFIX";
                    case a.VAR_PROTO:
                        return "VAR_PROTO";
                    case a.VAR_RLP:
                        return "VAR_RLP";
                    case a.FIXED32_BIG:
                        return "FIXED32_BIG";
                    case a.FIXED32_LITTLE:
                        return "FIXED32_LITTLE";
                    case a.FIXED64_BIG:
                        return "FIXED64_BIG";
                    case a.FIXED64_LITTLE:
                        return "FIXED64_LITTLE";
                    case a.REQUIRE_32_BYTES:
                        return "REQUIRE_32_BYTES";
                    case a.REQUIRE_64_BYTES:
                        return "REQUIRE_64_BYTES";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "ics23",
                function(e) {
                    e[e.NO_HASH = 0] = "NO_HASH", e[e.SHA256 = 1] = "SHA256", e[e.SHA512 = 2] = "SHA512", e[e.KECCAK = 3] = "KECCAK", e[e.RIPEMD160 = 4] = "RIPEMD160", e[e.BITCOIN = 5] = "BITCOIN", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(r = t.HashOp || (t.HashOp = {})), t.hashOpFromJSON = d, t.hashOpToJSON = u,
                function(e) {
                    e[e.NO_PREFIX = 0] = "NO_PREFIX", e[e.VAR_PROTO = 1] = "VAR_PROTO", e[e.VAR_RLP = 2] = "VAR_RLP", e[e.FIXED32_BIG = 3] = "FIXED32_BIG", e[e.FIXED32_LITTLE = 4] = "FIXED32_LITTLE", e[e.FIXED64_BIG = 5] = "FIXED64_BIG", e[e.FIXED64_LITTLE = 6] = "FIXED64_LITTLE", e[e.REQUIRE_32_BYTES = 7] = "REQUIRE_32_BYTES", e[e.REQUIRE_64_BYTES = 8] = "REQUIRE_64_BYTES", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(a = t.LengthOp || (t.LengthOp = {})), t.lengthOpFromJSON = l, t.lengthOpToJSON = c;
            const f = {};
            t.ExistenceProof = {
                encode(e, n = i.default.Writer.create()) {
                    0 !== e.key.length && n.uint32(10).bytes(e.key), 0 !== e.value.length && n.uint32(18).bytes(e.value), void 0 !== e.leaf && t.LeafOp.encode(e.leaf, n.uint32(26).fork()).ldelim();
                    for (const o of e.path) t.InnerOp.encode(o, n.uint32(34).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, f);
                    for (r.path = [], r.key = new Uint8Array, r.value = new Uint8Array; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.key = o.bytes();
                                break;
                            case 2:
                                r.value = o.bytes();
                                break;
                            case 3:
                                r.leaf = t.LeafOp.decode(o, o.uint32());
                                break;
                            case 4:
                                r.path.push(t.InnerOp.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, f);
                    if (n.path = [], n.key = new Uint8Array, n.value = new Uint8Array, void 0 !== e.key && null !== e.key && (n.key = P(e.key)), void 0 !== e.value && null !== e.value && (n.value = P(e.value)), void 0 !== e.leaf && null !== e.leaf ? n.leaf = t.LeafOp.fromJSON(e.leaf) : n.leaf = void 0, void 0 !== e.path && null !== e.path)
                        for (const o of e.path) n.path.push(t.InnerOp.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.key && (n.key = I(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.value && (n.value = I(void 0 !== e.value ? e.value : new Uint8Array)), void 0 !== e.leaf && (n.leaf = e.leaf ? t.LeafOp.toJSON(e.leaf) : void 0), e.path ? n.path = e.path.map(e => e ? t.InnerOp.toJSON(e) : void 0) : n.path = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, f);
                    if (n.path = [], void 0 !== e.key && null !== e.key ? n.key = e.key : n.key = new Uint8Array, void 0 !== e.value && null !== e.value ? n.value = e.value : n.value = new Uint8Array, void 0 !== e.leaf && null !== e.leaf ? n.leaf = t.LeafOp.fromPartial(e.leaf) : n.leaf = void 0, void 0 !== e.path && null !== e.path)
                        for (const o of e.path) n.path.push(t.InnerOp.fromPartial(o));
                    return n
                }
            };
            const p = {};
            t.NonExistenceProof = {
                encode: (e, n = i.default.Writer.create()) => (0 !== e.key.length && n.uint32(10).bytes(e.key), void 0 !== e.left && t.ExistenceProof.encode(e.left, n.uint32(18).fork()).ldelim(), void 0 !== e.right && t.ExistenceProof.encode(e.right, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, p);
                    for (r.key = new Uint8Array; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.key = o.bytes();
                                break;
                            case 2:
                                r.left = t.ExistenceProof.decode(o, o.uint32());
                                break;
                            case 3:
                                r.right = t.ExistenceProof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, p);
                    return n.key = new Uint8Array, void 0 !== e.key && null !== e.key && (n.key = P(e.key)), void 0 !== e.left && null !== e.left ? n.left = t.ExistenceProof.fromJSON(e.left) : n.left = void 0, void 0 !== e.right && null !== e.right ? n.right = t.ExistenceProof.fromJSON(e.right) : n.right = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.key && (n.key = I(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.left && (n.left = e.left ? t.ExistenceProof.toJSON(e.left) : void 0), void 0 !== e.right && (n.right = e.right ? t.ExistenceProof.toJSON(e.right) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, p);
                    return void 0 !== e.key && null !== e.key ? n.key = e.key : n.key = new Uint8Array, void 0 !== e.left && null !== e.left ? n.left = t.ExistenceProof.fromPartial(e.left) : n.left = void 0, void 0 !== e.right && null !== e.right ? n.right = t.ExistenceProof.fromPartial(e.right) : n.right = void 0, n
                }
            };
            const g = {};
            t.CommitmentProof = {
                encode: (e, n = i.default.Writer.create()) => (void 0 !== e.exist && t.ExistenceProof.encode(e.exist, n.uint32(10).fork()).ldelim(), void 0 !== e.nonexist && t.NonExistenceProof.encode(e.nonexist, n.uint32(18).fork()).ldelim(), void 0 !== e.batch && t.BatchProof.encode(e.batch, n.uint32(26).fork()).ldelim(), void 0 !== e.compressed && t.CompressedBatchProof.encode(e.compressed, n.uint32(34).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, g);
                    for (; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.exist = t.ExistenceProof.decode(o, o.uint32());
                                break;
                            case 2:
                                r.nonexist = t.NonExistenceProof.decode(o, o.uint32());
                                break;
                            case 3:
                                r.batch = t.BatchProof.decode(o, o.uint32());
                                break;
                            case 4:
                                r.compressed = t.CompressedBatchProof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, g);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.ExistenceProof.fromJSON(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.NonExistenceProof.fromJSON(e.nonexist) : n.nonexist = void 0, void 0 !== e.batch && null !== e.batch ? n.batch = t.BatchProof.fromJSON(e.batch) : n.batch = void 0, void 0 !== e.compressed && null !== e.compressed ? n.compressed = t.CompressedBatchProof.fromJSON(e.compressed) : n.compressed = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.exist && (n.exist = e.exist ? t.ExistenceProof.toJSON(e.exist) : void 0), void 0 !== e.nonexist && (n.nonexist = e.nonexist ? t.NonExistenceProof.toJSON(e.nonexist) : void 0), void 0 !== e.batch && (n.batch = e.batch ? t.BatchProof.toJSON(e.batch) : void 0), void 0 !== e.compressed && (n.compressed = e.compressed ? t.CompressedBatchProof.toJSON(e.compressed) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, g);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.ExistenceProof.fromPartial(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.NonExistenceProof.fromPartial(e.nonexist) : n.nonexist = void 0, void 0 !== e.batch && null !== e.batch ? n.batch = t.BatchProof.fromPartial(e.batch) : n.batch = void 0, void 0 !== e.compressed && null !== e.compressed ? n.compressed = t.CompressedBatchProof.fromPartial(e.compressed) : n.compressed = void 0, n
                }
            };
            const m = {
                hash: 0,
                prehashKey: 0,
                prehashValue: 0,
                length: 0
            };
            t.LeafOp = {
                encode: (e, t = i.default.Writer.create()) => (0 !== e.hash && t.uint32(8).int32(e.hash), 0 !== e.prehashKey && t.uint32(16).int32(e.prehashKey), 0 !== e.prehashValue && t.uint32(24).int32(e.prehashValue), 0 !== e.length && t.uint32(32).int32(e.length), 0 !== e.prefix.length && t.uint32(42).bytes(e.prefix), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, m);
                    for (s.prefix = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.hash = n.int32();
                                break;
                            case 2:
                                s.prehashKey = n.int32();
                                break;
                            case 3:
                                s.prehashValue = n.int32();
                                break;
                            case 4:
                                s.length = n.int32();
                                break;
                            case 5:
                                s.prefix = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    return t.prefix = new Uint8Array, void 0 !== e.hash && null !== e.hash ? t.hash = d(e.hash) : t.hash = 0, void 0 !== e.prehashKey && null !== e.prehashKey ? t.prehashKey = d(e.prehashKey) : t.prehashKey = 0, void 0 !== e.prehashValue && null !== e.prehashValue ? t.prehashValue = d(e.prehashValue) : t.prehashValue = 0, void 0 !== e.length && null !== e.length ? t.length = l(e.length) : t.length = 0, void 0 !== e.prefix && null !== e.prefix && (t.prefix = P(e.prefix)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.hash && (t.hash = u(e.hash)), void 0 !== e.prehashKey && (t.prehashKey = u(e.prehashKey)), void 0 !== e.prehashValue && (t.prehashValue = u(e.prehashValue)), void 0 !== e.length && (t.length = c(e.length)), void 0 !== e.prefix && (t.prefix = I(void 0 !== e.prefix ? e.prefix : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, m);
                    return void 0 !== e.hash && null !== e.hash ? t.hash = e.hash : t.hash = 0, void 0 !== e.prehashKey && null !== e.prehashKey ? t.prehashKey = e.prehashKey : t.prehashKey = 0, void 0 !== e.prehashValue && null !== e.prehashValue ? t.prehashValue = e.prehashValue : t.prehashValue = 0, void 0 !== e.length && null !== e.length ? t.length = e.length : t.length = 0, void 0 !== e.prefix && null !== e.prefix ? t.prefix = e.prefix : t.prefix = new Uint8Array, t
                }
            };
            const h = {
                hash: 0
            };
            t.InnerOp = {
                encode: (e, t = i.default.Writer.create()) => (0 !== e.hash && t.uint32(8).int32(e.hash), 0 !== e.prefix.length && t.uint32(18).bytes(e.prefix), 0 !== e.suffix.length && t.uint32(26).bytes(e.suffix), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, h);
                    for (s.prefix = new Uint8Array, s.suffix = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.hash = n.int32();
                                break;
                            case 2:
                                s.prefix = n.bytes();
                                break;
                            case 3:
                                s.suffix = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    return t.prefix = new Uint8Array, t.suffix = new Uint8Array, void 0 !== e.hash && null !== e.hash ? t.hash = d(e.hash) : t.hash = 0, void 0 !== e.prefix && null !== e.prefix && (t.prefix = P(e.prefix)), void 0 !== e.suffix && null !== e.suffix && (t.suffix = P(e.suffix)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.hash && (t.hash = u(e.hash)), void 0 !== e.prefix && (t.prefix = I(void 0 !== e.prefix ? e.prefix : new Uint8Array)), void 0 !== e.suffix && (t.suffix = I(void 0 !== e.suffix ? e.suffix : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.hash && null !== e.hash ? t.hash = e.hash : t.hash = 0, void 0 !== e.prefix && null !== e.prefix ? t.prefix = e.prefix : t.prefix = new Uint8Array, void 0 !== e.suffix && null !== e.suffix ? t.suffix = e.suffix : t.suffix = new Uint8Array, t
                }
            };
            const v = {
                maxDepth: 0,
                minDepth: 0
            };
            t.ProofSpec = {
                encode: (e, n = i.default.Writer.create()) => (void 0 !== e.leafSpec && t.LeafOp.encode(e.leafSpec, n.uint32(10).fork()).ldelim(), void 0 !== e.innerSpec && t.InnerSpec.encode(e.innerSpec, n.uint32(18).fork()).ldelim(), 0 !== e.maxDepth && n.uint32(24).int32(e.maxDepth), 0 !== e.minDepth && n.uint32(32).int32(e.minDepth), n),
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, v);
                    for (; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.leafSpec = t.LeafOp.decode(o, o.uint32());
                                break;
                            case 2:
                                r.innerSpec = t.InnerSpec.decode(o, o.uint32());
                                break;
                            case 3:
                                r.maxDepth = o.int32();
                                break;
                            case 4:
                                r.minDepth = o.int32();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, v);
                    return void 0 !== e.leafSpec && null !== e.leafSpec ? n.leafSpec = t.LeafOp.fromJSON(e.leafSpec) : n.leafSpec = void 0, void 0 !== e.innerSpec && null !== e.innerSpec ? n.innerSpec = t.InnerSpec.fromJSON(e.innerSpec) : n.innerSpec = void 0, void 0 !== e.maxDepth && null !== e.maxDepth ? n.maxDepth = Number(e.maxDepth) : n.maxDepth = 0, void 0 !== e.minDepth && null !== e.minDepth ? n.minDepth = Number(e.minDepth) : n.minDepth = 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.leafSpec && (n.leafSpec = e.leafSpec ? t.LeafOp.toJSON(e.leafSpec) : void 0), void 0 !== e.innerSpec && (n.innerSpec = e.innerSpec ? t.InnerSpec.toJSON(e.innerSpec) : void 0), void 0 !== e.maxDepth && (n.maxDepth = e.maxDepth), void 0 !== e.minDepth && (n.minDepth = e.minDepth), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, v);
                    return void 0 !== e.leafSpec && null !== e.leafSpec ? n.leafSpec = t.LeafOp.fromPartial(e.leafSpec) : n.leafSpec = void 0, void 0 !== e.innerSpec && null !== e.innerSpec ? n.innerSpec = t.InnerSpec.fromPartial(e.innerSpec) : n.innerSpec = void 0, void 0 !== e.maxDepth && null !== e.maxDepth ? n.maxDepth = e.maxDepth : n.maxDepth = 0, void 0 !== e.minDepth && null !== e.minDepth ? n.minDepth = e.minDepth : n.minDepth = 0, n
                }
            };
            const b = {
                childOrder: 0,
                childSize: 0,
                minPrefixLength: 0,
                maxPrefixLength: 0,
                hash: 0
            };
            t.InnerSpec = {
                encode(e, t = i.default.Writer.create()) {
                    t.uint32(10).fork();
                    for (const n of e.childOrder) t.int32(n);
                    return t.ldelim(), 0 !== e.childSize && t.uint32(16).int32(e.childSize), 0 !== e.minPrefixLength && t.uint32(24).int32(e.minPrefixLength), 0 !== e.maxPrefixLength && t.uint32(32).int32(e.maxPrefixLength), 0 !== e.emptyChild.length && t.uint32(42).bytes(e.emptyChild), 0 !== e.hash && t.uint32(48).int32(e.hash), t
                },
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, b);
                    for (s.childOrder = [], s.emptyChild = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (2 == (7 & e)) {
                                    const e = n.uint32() + n.pos;
                                    for (; n.pos < e;) s.childOrder.push(n.int32())
                                } else s.childOrder.push(n.int32());
                                break;
                            case 2:
                                s.childSize = n.int32();
                                break;
                            case 3:
                                s.minPrefixLength = n.int32();
                                break;
                            case 4:
                                s.maxPrefixLength = n.int32();
                                break;
                            case 5:
                                s.emptyChild = n.bytes();
                                break;
                            case 6:
                                s.hash = n.int32();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    if (t.childOrder = [], t.emptyChild = new Uint8Array, void 0 !== e.childOrder && null !== e.childOrder)
                        for (const n of e.childOrder) t.childOrder.push(Number(n));
                    return void 0 !== e.childSize && null !== e.childSize ? t.childSize = Number(e.childSize) : t.childSize = 0, void 0 !== e.minPrefixLength && null !== e.minPrefixLength ? t.minPrefixLength = Number(e.minPrefixLength) : t.minPrefixLength = 0, void 0 !== e.maxPrefixLength && null !== e.maxPrefixLength ? t.maxPrefixLength = Number(e.maxPrefixLength) : t.maxPrefixLength = 0, void 0 !== e.emptyChild && null !== e.emptyChild && (t.emptyChild = P(e.emptyChild)), void 0 !== e.hash && null !== e.hash ? t.hash = d(e.hash) : t.hash = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.childOrder ? t.childOrder = e.childOrder.map(e => e) : t.childOrder = [], void 0 !== e.childSize && (t.childSize = e.childSize), void 0 !== e.minPrefixLength && (t.minPrefixLength = e.minPrefixLength), void 0 !== e.maxPrefixLength && (t.maxPrefixLength = e.maxPrefixLength), void 0 !== e.emptyChild && (t.emptyChild = I(void 0 !== e.emptyChild ? e.emptyChild : new Uint8Array)), void 0 !== e.hash && (t.hash = u(e.hash)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, b);
                    if (t.childOrder = [], void 0 !== e.childOrder && null !== e.childOrder)
                        for (const n of e.childOrder) t.childOrder.push(n);
                    return void 0 !== e.childSize && null !== e.childSize ? t.childSize = e.childSize : t.childSize = 0, void 0 !== e.minPrefixLength && null !== e.minPrefixLength ? t.minPrefixLength = e.minPrefixLength : t.minPrefixLength = 0, void 0 !== e.maxPrefixLength && null !== e.maxPrefixLength ? t.maxPrefixLength = e.maxPrefixLength : t.maxPrefixLength = 0, void 0 !== e.emptyChild && null !== e.emptyChild ? t.emptyChild = e.emptyChild : t.emptyChild = new Uint8Array, void 0 !== e.hash && null !== e.hash ? t.hash = e.hash : t.hash = 0, t
                }
            };
            const O = {};
            t.BatchProof = {
                encode(e, n = i.default.Writer.create()) {
                    for (const o of e.entries) t.BatchEntry.encode(o, n.uint32(10).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, O);
                    for (r.entries = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.entries.push(t.BatchEntry.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, O);
                    if (n.entries = [], void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.BatchEntry.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.entries ? n.entries = e.entries.map(e => e ? t.BatchEntry.toJSON(e) : void 0) : n.entries = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, O);
                    if (n.entries = [], void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.BatchEntry.fromPartial(o));
                    return n
                }
            };
            const y = {};
            t.BatchEntry = {
                encode: (e, n = i.default.Writer.create()) => (void 0 !== e.exist && t.ExistenceProof.encode(e.exist, n.uint32(10).fork()).ldelim(), void 0 !== e.nonexist && t.NonExistenceProof.encode(e.nonexist, n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, y);
                    for (; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.exist = t.ExistenceProof.decode(o, o.uint32());
                                break;
                            case 2:
                                r.nonexist = t.NonExistenceProof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, y);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.ExistenceProof.fromJSON(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.NonExistenceProof.fromJSON(e.nonexist) : n.nonexist = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.exist && (n.exist = e.exist ? t.ExistenceProof.toJSON(e.exist) : void 0), void 0 !== e.nonexist && (n.nonexist = e.nonexist ? t.NonExistenceProof.toJSON(e.nonexist) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, y);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.ExistenceProof.fromPartial(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.NonExistenceProof.fromPartial(e.nonexist) : n.nonexist = void 0, n
                }
            };
            const S = {};
            t.CompressedBatchProof = {
                encode(e, n = i.default.Writer.create()) {
                    for (const o of e.entries) t.CompressedBatchEntry.encode(o, n.uint32(10).fork()).ldelim();
                    for (const o of e.lookupInners) t.InnerOp.encode(o, n.uint32(18).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, S);
                    for (r.entries = [], r.lookupInners = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.entries.push(t.CompressedBatchEntry.decode(o, o.uint32()));
                                break;
                            case 2:
                                r.lookupInners.push(t.InnerOp.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, S);
                    if (n.entries = [], n.lookupInners = [], void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.CompressedBatchEntry.fromJSON(o));
                    if (void 0 !== e.lookupInners && null !== e.lookupInners)
                        for (const o of e.lookupInners) n.lookupInners.push(t.InnerOp.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.entries ? n.entries = e.entries.map(e => e ? t.CompressedBatchEntry.toJSON(e) : void 0) : n.entries = [], e.lookupInners ? n.lookupInners = e.lookupInners.map(e => e ? t.InnerOp.toJSON(e) : void 0) : n.lookupInners = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, S);
                    if (n.entries = [], n.lookupInners = [], void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.CompressedBatchEntry.fromPartial(o));
                    if (void 0 !== e.lookupInners && null !== e.lookupInners)
                        for (const o of e.lookupInners) n.lookupInners.push(t.InnerOp.fromPartial(o));
                    return n
                }
            };
            const x = {};
            t.CompressedBatchEntry = {
                encode: (e, n = i.default.Writer.create()) => (void 0 !== e.exist && t.CompressedExistenceProof.encode(e.exist, n.uint32(10).fork()).ldelim(), void 0 !== e.nonexist && t.CompressedNonExistenceProof.encode(e.nonexist, n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, x);
                    for (; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.exist = t.CompressedExistenceProof.decode(o, o.uint32());
                                break;
                            case 2:
                                r.nonexist = t.CompressedNonExistenceProof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, x);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.CompressedExistenceProof.fromJSON(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.CompressedNonExistenceProof.fromJSON(e.nonexist) : n.nonexist = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.exist && (n.exist = e.exist ? t.CompressedExistenceProof.toJSON(e.exist) : void 0), void 0 !== e.nonexist && (n.nonexist = e.nonexist ? t.CompressedNonExistenceProof.toJSON(e.nonexist) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, x);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.CompressedExistenceProof.fromPartial(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.CompressedNonExistenceProof.fromPartial(e.nonexist) : n.nonexist = void 0, n
                }
            };
            const k = {
                path: 0
            };
            t.CompressedExistenceProof = {
                encode(e, n = i.default.Writer.create()) {
                    0 !== e.key.length && n.uint32(10).bytes(e.key), 0 !== e.value.length && n.uint32(18).bytes(e.value), void 0 !== e.leaf && t.LeafOp.encode(e.leaf, n.uint32(26).fork()).ldelim(), n.uint32(34).fork();
                    for (const t of e.path) n.int32(t);
                    return n.ldelim(), n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, k);
                    for (r.path = [], r.key = new Uint8Array, r.value = new Uint8Array; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.key = o.bytes();
                                break;
                            case 2:
                                r.value = o.bytes();
                                break;
                            case 3:
                                r.leaf = t.LeafOp.decode(o, o.uint32());
                                break;
                            case 4:
                                if (2 == (7 & e)) {
                                    const e = o.uint32() + o.pos;
                                    for (; o.pos < e;) r.path.push(o.int32())
                                } else r.path.push(o.int32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, k);
                    if (n.path = [], n.key = new Uint8Array, n.value = new Uint8Array, void 0 !== e.key && null !== e.key && (n.key = P(e.key)), void 0 !== e.value && null !== e.value && (n.value = P(e.value)), void 0 !== e.leaf && null !== e.leaf ? n.leaf = t.LeafOp.fromJSON(e.leaf) : n.leaf = void 0, void 0 !== e.path && null !== e.path)
                        for (const t of e.path) n.path.push(Number(t));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.key && (n.key = I(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.value && (n.value = I(void 0 !== e.value ? e.value : new Uint8Array)), void 0 !== e.leaf && (n.leaf = e.leaf ? t.LeafOp.toJSON(e.leaf) : void 0), e.path ? n.path = e.path.map(e => e) : n.path = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, k);
                    if (n.path = [], void 0 !== e.key && null !== e.key ? n.key = e.key : n.key = new Uint8Array, void 0 !== e.value && null !== e.value ? n.value = e.value : n.value = new Uint8Array, void 0 !== e.leaf && null !== e.leaf ? n.leaf = t.LeafOp.fromPartial(e.leaf) : n.leaf = void 0, void 0 !== e.path && null !== e.path)
                        for (const t of e.path) n.path.push(t);
                    return n
                }
            };
            const E = {};
            t.CompressedNonExistenceProof = {
                encode: (e, n = i.default.Writer.create()) => (0 !== e.key.length && n.uint32(10).bytes(e.key), void 0 !== e.left && t.CompressedExistenceProof.encode(e.left, n.uint32(18).fork()).ldelim(), void 0 !== e.right && t.CompressedExistenceProof.encode(e.right, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, E);
                    for (r.key = new Uint8Array; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.key = o.bytes();
                                break;
                            case 2:
                                r.left = t.CompressedExistenceProof.decode(o, o.uint32());
                                break;
                            case 3:
                                r.right = t.CompressedExistenceProof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, E);
                    return n.key = new Uint8Array, void 0 !== e.key && null !== e.key && (n.key = P(e.key)), void 0 !== e.left && null !== e.left ? n.left = t.CompressedExistenceProof.fromJSON(e.left) : n.left = void 0, void 0 !== e.right && null !== e.right ? n.right = t.CompressedExistenceProof.fromJSON(e.right) : n.right = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.key && (n.key = I(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.left && (n.left = e.left ? t.CompressedExistenceProof.toJSON(e.left) : void 0), void 0 !== e.right && (n.right = e.right ? t.CompressedExistenceProof.toJSON(e.right) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, E);
                    return void 0 !== e.key && null !== e.key ? n.key = e.key : n.key = new Uint8Array, void 0 !== e.left && null !== e.left ? n.left = t.CompressedExistenceProof.fromPartial(e.left) : n.left = void 0, void 0 !== e.right && null !== e.right ? n.right = t.CompressedExistenceProof.fromPartial(e.right) : n.right = void 0, n
                }
            };
            var N = (() => {
                if (void 0 !== N) return N;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const R = N.atob || (e => N.Buffer.from(e, "base64").toString("binary"));

            function P(e) {
                const t = R(e),
                    n = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                return n
            }
            const C = N.btoa || (e => N.Buffer.from(e, "binary").toString("base64"));

            function I(e) {
                const t = [];
                for (const n of e) t.push(String.fromCharCode(n));
                return C(t.join(""))
            }
            i.default.util.Long !== s.default && (i.default.util.Long = s.default, i.default.configure())
        },
        3769: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SendAuthorization = t.protobufPackage = void 0;
            const s = o(n(1)),
                i = o(n(8)),
                r = n(121);
            t.protobufPackage = "cosmos.bank.v1beta1";
            const a = {};
            t.SendAuthorization = {
                encode(e, t = i.default.Writer.create()) {
                    for (const n of e.spendLimit) r.Coin.encode(n, t.uint32(10).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, a);
                    for (s.spendLimit = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.spendLimit.push(r.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, a);
                    if (t.spendLimit = [], void 0 !== e.spendLimit && null !== e.spendLimit)
                        for (const n of e.spendLimit) t.spendLimit.push(r.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.spendLimit ? t.spendLimit = e.spendLimit.map(e => e ? r.Coin.toJSON(e) : void 0) : t.spendLimit = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, a);
                    if (t.spendLimit = [], void 0 !== e.spendLimit && null !== e.spendLimit)
                        for (const n of e.spendLimit) t.spendLimit.push(r.Coin.fromPartial(n));
                    return t
                }
            }, i.default.util.Long !== s.default && (i.default.util.Long = s.default, i.default.configure())
        },
        3829: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GrpcWebImpl = t.MsgVerifyInvariantDesc = t.MsgDesc = t.MsgClientImpl = t.MsgVerifyInvariantResponse = t.MsgVerifyInvariant = t.protobufPackage = void 0;
            const s = o(n(1)),
                i = n(156),
                r = o(n(8)),
                a = n(157);
            t.protobufPackage = "cosmos.crisis.v1beta1";
            const d = {
                sender: "",
                invariantModuleName: "",
                invariantRoute: ""
            };
            t.MsgVerifyInvariant = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.sender && t.uint32(10).string(e.sender), "" !== e.invariantModuleName && t.uint32(18).string(e.invariantModuleName), "" !== e.invariantRoute && t.uint32(26).string(e.invariantRoute), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.sender = n.string();
                                break;
                            case 2:
                                s.invariantModuleName = n.string();
                                break;
                            case 3:
                                s.invariantRoute = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.invariantModuleName && null !== e.invariantModuleName ? t.invariantModuleName = String(e.invariantModuleName) : t.invariantModuleName = "", void 0 !== e.invariantRoute && null !== e.invariantRoute ? t.invariantRoute = String(e.invariantRoute) : t.invariantRoute = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.invariantModuleName && (t.invariantModuleName = e.invariantModuleName), void 0 !== e.invariantRoute && (t.invariantRoute = e.invariantRoute), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.invariantModuleName && null !== e.invariantModuleName ? t.invariantModuleName = e.invariantModuleName : t.invariantModuleName = "", void 0 !== e.invariantRoute && null !== e.invariantRoute ? t.invariantRoute = e.invariantRoute : t.invariantRoute = "", t
                }
            };
            const u = {};
            t.MsgVerifyInvariantResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return s
                },
                fromJSON: e => Object.assign({}, u),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, u)
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.VerifyInvariant = this.VerifyInvariant.bind(this)
                }
                VerifyInvariant(e, n) {
                    return this.rpc.unary(t.MsgVerifyInvariantDesc, t.MsgVerifyInvariant.fromPartial(e), n)
                }
            }, t.MsgDesc = {
                serviceName: "cosmos.crisis.v1beta1.Msg"
            }, t.MsgVerifyInvariantDesc = {
                methodName: "VerifyInvariant",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgVerifyInvariant.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgVerifyInvariantResponse.decode(e)), {
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
                    const s = Object.assign(Object.assign({}, t), e.requestType),
                        r = n && this.options.metadata ? new a.BrowserHeaders(Object.assign(Object.assign({}, null === (o = this.options) || void 0 === o ? void 0 : o.metadata.headersMap), null == n ? void 0 : n.headersMap)) : n || this.options.metadata;
                    return new Promise((t, n) => {
                        i.grpc.unary(e, {
                            request: s,
                            host: this.host,
                            metadata: r,
                            transport: this.options.transport,
                            debug: this.options.debug,
                            onEnd: function(e) {
                                if (e.status === i.grpc.Code.OK) t(e.message);
                                else {
                                    const t = new Error(e.statusMessage);
                                    t.code = e.status, t.metadata = e.trailers, n(t)
                                }
                            }
                        })
                    })
                }
            }, r.default.util.Long !== s.default && (r.default.util.Long = s.default, r.default.configure())
        },
        3832: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SearchTxsResult = t.TxMsgData = t.MsgData = t.SimulationResponse = t.Result = t.GasInfo = t.Attribute = t.StringEvent = t.ABCIMessageLog = t.TxResponse = t.protobufPackage = void 0;
            const s = o(n(1)),
                i = o(n(8)),
                r = n(19),
                a = n(3833);
            t.protobufPackage = "cosmos.base.abci.v1beta1";
            const d = {
                height: s.default.ZERO,
                txhash: "",
                codespace: "",
                code: 0,
                data: "",
                rawLog: "",
                info: "",
                gasWanted: s.default.ZERO,
                gasUsed: s.default.ZERO,
                timestamp: ""
            };
            t.TxResponse = {
                encode(e, n = i.default.Writer.create()) {
                    e.height.isZero() || n.uint32(8).int64(e.height), "" !== e.txhash && n.uint32(18).string(e.txhash), "" !== e.codespace && n.uint32(26).string(e.codespace), 0 !== e.code && n.uint32(32).uint32(e.code), "" !== e.data && n.uint32(42).string(e.data), "" !== e.rawLog && n.uint32(50).string(e.rawLog);
                    for (const o of e.logs) t.ABCIMessageLog.encode(o, n.uint32(58).fork()).ldelim();
                    "" !== e.info && n.uint32(66).string(e.info), e.gasWanted.isZero() || n.uint32(72).int64(e.gasWanted), e.gasUsed.isZero() || n.uint32(80).int64(e.gasUsed), void 0 !== e.tx && r.Any.encode(e.tx, n.uint32(90).fork()).ldelim(), "" !== e.timestamp && n.uint32(98).string(e.timestamp);
                    for (const t of e.events) a.Event.encode(t, n.uint32(106).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const u = Object.assign({}, d);
                    for (u.logs = [], u.events = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                u.height = o.int64();
                                break;
                            case 2:
                                u.txhash = o.string();
                                break;
                            case 3:
                                u.codespace = o.string();
                                break;
                            case 4:
                                u.code = o.uint32();
                                break;
                            case 5:
                                u.data = o.string();
                                break;
                            case 6:
                                u.rawLog = o.string();
                                break;
                            case 7:
                                u.logs.push(t.ABCIMessageLog.decode(o, o.uint32()));
                                break;
                            case 8:
                                u.info = o.string();
                                break;
                            case 9:
                                u.gasWanted = o.int64();
                                break;
                            case 10:
                                u.gasUsed = o.int64();
                                break;
                            case 11:
                                u.tx = r.Any.decode(o, o.uint32());
                                break;
                            case 12:
                                u.timestamp = o.string();
                                break;
                            case 13:
                                u.events.push(a.Event.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return u
                },
                fromJSON(e) {
                    const n = Object.assign({}, d);
                    if (n.logs = [], n.events = [], void 0 !== e.height && null !== e.height ? n.height = s.default.fromString(e.height) : n.height = s.default.ZERO, void 0 !== e.txhash && null !== e.txhash ? n.txhash = String(e.txhash) : n.txhash = "", void 0 !== e.codespace && null !== e.codespace ? n.codespace = String(e.codespace) : n.codespace = "", void 0 !== e.code && null !== e.code ? n.code = Number(e.code) : n.code = 0, void 0 !== e.data && null !== e.data ? n.data = String(e.data) : n.data = "", void 0 !== e.rawLog && null !== e.rawLog ? n.rawLog = String(e.rawLog) : n.rawLog = "", void 0 !== e.logs && null !== e.logs)
                        for (const o of e.logs) n.logs.push(t.ABCIMessageLog.fromJSON(o));
                    if (void 0 !== e.info && null !== e.info ? n.info = String(e.info) : n.info = "", void 0 !== e.gasWanted && null !== e.gasWanted ? n.gasWanted = s.default.fromString(e.gasWanted) : n.gasWanted = s.default.ZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? n.gasUsed = s.default.fromString(e.gasUsed) : n.gasUsed = s.default.ZERO, void 0 !== e.tx && null !== e.tx ? n.tx = r.Any.fromJSON(e.tx) : n.tx = void 0, void 0 !== e.timestamp && null !== e.timestamp ? n.timestamp = String(e.timestamp) : n.timestamp = "", void 0 !== e.events && null !== e.events)
                        for (const t of e.events) n.events.push(a.Event.fromJSON(t));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.height && (n.height = (e.height || s.default.ZERO).toString()), void 0 !== e.txhash && (n.txhash = e.txhash), void 0 !== e.codespace && (n.codespace = e.codespace), void 0 !== e.code && (n.code = e.code), void 0 !== e.data && (n.data = e.data), void 0 !== e.rawLog && (n.rawLog = e.rawLog), e.logs ? n.logs = e.logs.map(e => e ? t.ABCIMessageLog.toJSON(e) : void 0) : n.logs = [], void 0 !== e.info && (n.info = e.info), void 0 !== e.gasWanted && (n.gasWanted = (e.gasWanted || s.default.ZERO).toString()), void 0 !== e.gasUsed && (n.gasUsed = (e.gasUsed || s.default.ZERO).toString()), void 0 !== e.tx && (n.tx = e.tx ? r.Any.toJSON(e.tx) : void 0), void 0 !== e.timestamp && (n.timestamp = e.timestamp), e.events ? n.events = e.events.map(e => e ? a.Event.toJSON(e) : void 0) : n.events = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, d);
                    if (n.logs = [], n.events = [], void 0 !== e.height && null !== e.height ? n.height = e.height : n.height = s.default.ZERO, void 0 !== e.txhash && null !== e.txhash ? n.txhash = e.txhash : n.txhash = "", void 0 !== e.codespace && null !== e.codespace ? n.codespace = e.codespace : n.codespace = "", void 0 !== e.code && null !== e.code ? n.code = e.code : n.code = 0, void 0 !== e.data && null !== e.data ? n.data = e.data : n.data = "", void 0 !== e.rawLog && null !== e.rawLog ? n.rawLog = e.rawLog : n.rawLog = "", void 0 !== e.logs && null !== e.logs)
                        for (const o of e.logs) n.logs.push(t.ABCIMessageLog.fromPartial(o));
                    if (void 0 !== e.info && null !== e.info ? n.info = e.info : n.info = "", void 0 !== e.gasWanted && null !== e.gasWanted ? n.gasWanted = e.gasWanted : n.gasWanted = s.default.ZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? n.gasUsed = e.gasUsed : n.gasUsed = s.default.ZERO, void 0 !== e.tx && null !== e.tx ? n.tx = r.Any.fromPartial(e.tx) : n.tx = void 0, void 0 !== e.timestamp && null !== e.timestamp ? n.timestamp = e.timestamp : n.timestamp = "", void 0 !== e.events && null !== e.events)
                        for (const t of e.events) n.events.push(a.Event.fromPartial(t));
                    return n
                }
            };
            const u = {
                msgIndex: 0,
                log: ""
            };
            t.ABCIMessageLog = {
                encode(e, n = i.default.Writer.create()) {
                    0 !== e.msgIndex && n.uint32(8).uint32(e.msgIndex), "" !== e.log && n.uint32(18).string(e.log);
                    for (const o of e.events) t.StringEvent.encode(o, n.uint32(26).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, u);
                    for (r.events = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.msgIndex = o.uint32();
                                break;
                            case 2:
                                r.log = o.string();
                                break;
                            case 3:
                                r.events.push(t.StringEvent.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, u);
                    if (n.events = [], void 0 !== e.msgIndex && null !== e.msgIndex ? n.msgIndex = Number(e.msgIndex) : n.msgIndex = 0, void 0 !== e.log && null !== e.log ? n.log = String(e.log) : n.log = "", void 0 !== e.events && null !== e.events)
                        for (const o of e.events) n.events.push(t.StringEvent.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.msgIndex && (n.msgIndex = e.msgIndex), void 0 !== e.log && (n.log = e.log), e.events ? n.events = e.events.map(e => e ? t.StringEvent.toJSON(e) : void 0) : n.events = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, u);
                    if (n.events = [], void 0 !== e.msgIndex && null !== e.msgIndex ? n.msgIndex = e.msgIndex : n.msgIndex = 0, void 0 !== e.log && null !== e.log ? n.log = e.log : n.log = "", void 0 !== e.events && null !== e.events)
                        for (const o of e.events) n.events.push(t.StringEvent.fromPartial(o));
                    return n
                }
            };
            const l = {
                type: ""
            };
            t.StringEvent = {
                encode(e, n = i.default.Writer.create()) {
                    "" !== e.type && n.uint32(10).string(e.type);
                    for (const o of e.attributes) t.Attribute.encode(o, n.uint32(18).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, l);
                    for (r.attributes = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.type = o.string();
                                break;
                            case 2:
                                r.attributes.push(t.Attribute.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, l);
                    if (n.attributes = [], void 0 !== e.type && null !== e.type ? n.type = String(e.type) : n.type = "", void 0 !== e.attributes && null !== e.attributes)
                        for (const o of e.attributes) n.attributes.push(t.Attribute.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.type && (n.type = e.type), e.attributes ? n.attributes = e.attributes.map(e => e ? t.Attribute.toJSON(e) : void 0) : n.attributes = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, l);
                    if (n.attributes = [], void 0 !== e.type && null !== e.type ? n.type = e.type : n.type = "", void 0 !== e.attributes && null !== e.attributes)
                        for (const o of e.attributes) n.attributes.push(t.Attribute.fromPartial(o));
                    return n
                }
            };
            const c = {
                key: "",
                value: ""
            };
            t.Attribute = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.key && t.uint32(10).string(e.key), "" !== e.value && t.uint32(18).string(e.value), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, c);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.key = n.string();
                                break;
                            case 2:
                                s.value = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.key && null !== e.key ? t.key = String(e.key) : t.key = "", void 0 !== e.value && null !== e.value ? t.value = String(e.value) : t.value = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.key && (t.key = e.key), void 0 !== e.value && (t.value = e.value), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.key && null !== e.key ? t.key = e.key : t.key = "", void 0 !== e.value && null !== e.value ? t.value = e.value : t.value = "", t
                }
            };
            const f = {
                gasWanted: s.default.UZERO,
                gasUsed: s.default.UZERO
            };
            t.GasInfo = {
                encode: (e, t = i.default.Writer.create()) => (e.gasWanted.isZero() || t.uint32(8).uint64(e.gasWanted), e.gasUsed.isZero() || t.uint32(16).uint64(e.gasUsed), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, f);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.gasWanted = n.uint64();
                                break;
                            case 2:
                                s.gasUsed = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.gasWanted && null !== e.gasWanted ? t.gasWanted = s.default.fromString(e.gasWanted) : t.gasWanted = s.default.UZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? t.gasUsed = s.default.fromString(e.gasUsed) : t.gasUsed = s.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.gasWanted && (t.gasWanted = (e.gasWanted || s.default.UZERO).toString()), void 0 !== e.gasUsed && (t.gasUsed = (e.gasUsed || s.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.gasWanted && null !== e.gasWanted ? t.gasWanted = e.gasWanted : t.gasWanted = s.default.UZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? t.gasUsed = e.gasUsed : t.gasUsed = s.default.UZERO, t
                }
            };
            const p = {
                log: ""
            };
            t.Result = {
                encode(e, t = i.default.Writer.create()) {
                    0 !== e.data.length && t.uint32(10).bytes(e.data), "" !== e.log && t.uint32(18).string(e.log);
                    for (const n of e.events) a.Event.encode(n, t.uint32(26).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, p);
                    for (s.events = [], s.data = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.data = n.bytes();
                                break;
                            case 2:
                                s.log = n.string();
                                break;
                            case 3:
                                s.events.push(a.Event.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, p);
                    if (t.events = [], t.data = new Uint8Array, void 0 !== e.data && null !== e.data && (t.data = y(e.data)), void 0 !== e.log && null !== e.log ? t.log = String(e.log) : t.log = "", void 0 !== e.events && null !== e.events)
                        for (const n of e.events) t.events.push(a.Event.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.data && (t.data = x(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.log && (t.log = e.log), e.events ? t.events = e.events.map(e => e ? a.Event.toJSON(e) : void 0) : t.events = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, p);
                    if (t.events = [], void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, void 0 !== e.log && null !== e.log ? t.log = e.log : t.log = "", void 0 !== e.events && null !== e.events)
                        for (const n of e.events) t.events.push(a.Event.fromPartial(n));
                    return t
                }
            };
            const g = {};
            t.SimulationResponse = {
                encode: (e, n = i.default.Writer.create()) => (void 0 !== e.gasInfo && t.GasInfo.encode(e.gasInfo, n.uint32(10).fork()).ldelim(), void 0 !== e.result && t.Result.encode(e.result, n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, g);
                    for (; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.gasInfo = t.GasInfo.decode(o, o.uint32());
                                break;
                            case 2:
                                r.result = t.Result.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, g);
                    return void 0 !== e.gasInfo && null !== e.gasInfo ? n.gasInfo = t.GasInfo.fromJSON(e.gasInfo) : n.gasInfo = void 0, void 0 !== e.result && null !== e.result ? n.result = t.Result.fromJSON(e.result) : n.result = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.gasInfo && (n.gasInfo = e.gasInfo ? t.GasInfo.toJSON(e.gasInfo) : void 0), void 0 !== e.result && (n.result = e.result ? t.Result.toJSON(e.result) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, g);
                    return void 0 !== e.gasInfo && null !== e.gasInfo ? n.gasInfo = t.GasInfo.fromPartial(e.gasInfo) : n.gasInfo = void 0, void 0 !== e.result && null !== e.result ? n.result = t.Result.fromPartial(e.result) : n.result = void 0, n
                }
            };
            const m = {
                msgType: ""
            };
            t.MsgData = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.msgType && t.uint32(10).string(e.msgType), 0 !== e.data.length && t.uint32(18).bytes(e.data), t),
                decode(e, t) {
                    const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, m);
                    for (s.data = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.msgType = n.string();
                                break;
                            case 2:
                                s.data = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    return t.data = new Uint8Array, void 0 !== e.msgType && null !== e.msgType ? t.msgType = String(e.msgType) : t.msgType = "", void 0 !== e.data && null !== e.data && (t.data = y(e.data)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.msgType && (t.msgType = e.msgType), void 0 !== e.data && (t.data = x(void 0 !== e.data ? e.data : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, m);
                    return void 0 !== e.msgType && null !== e.msgType ? t.msgType = e.msgType : t.msgType = "", void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, t
                }
            };
            const h = {};
            t.TxMsgData = {
                encode(e, n = i.default.Writer.create()) {
                    for (const o of e.data) t.MsgData.encode(o, n.uint32(10).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, h);
                    for (r.data = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.data.push(t.MsgData.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, h);
                    if (n.data = [], void 0 !== e.data && null !== e.data)
                        for (const o of e.data) n.data.push(t.MsgData.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.data ? n.data = e.data.map(e => e ? t.MsgData.toJSON(e) : void 0) : n.data = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, h);
                    if (n.data = [], void 0 !== e.data && null !== e.data)
                        for (const o of e.data) n.data.push(t.MsgData.fromPartial(o));
                    return n
                }
            };
            const v = {
                totalCount: s.default.UZERO,
                count: s.default.UZERO,
                pageNumber: s.default.UZERO,
                pageTotal: s.default.UZERO,
                limit: s.default.UZERO
            };
            t.SearchTxsResult = {
                encode(e, n = i.default.Writer.create()) {
                    e.totalCount.isZero() || n.uint32(8).uint64(e.totalCount), e.count.isZero() || n.uint32(16).uint64(e.count), e.pageNumber.isZero() || n.uint32(24).uint64(e.pageNumber), e.pageTotal.isZero() || n.uint32(32).uint64(e.pageTotal), e.limit.isZero() || n.uint32(40).uint64(e.limit);
                    for (const o of e.txs) t.TxResponse.encode(o, n.uint32(50).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, v);
                    for (r.txs = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.totalCount = o.uint64();
                                break;
                            case 2:
                                r.count = o.uint64();
                                break;
                            case 3:
                                r.pageNumber = o.uint64();
                                break;
                            case 4:
                                r.pageTotal = o.uint64();
                                break;
                            case 5:
                                r.limit = o.uint64();
                                break;
                            case 6:
                                r.txs.push(t.TxResponse.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, v);
                    if (n.txs = [], void 0 !== e.totalCount && null !== e.totalCount ? n.totalCount = s.default.fromString(e.totalCount) : n.totalCount = s.default.UZERO, void 0 !== e.count && null !== e.count ? n.count = s.default.fromString(e.count) : n.count = s.default.UZERO, void 0 !== e.pageNumber && null !== e.pageNumber ? n.pageNumber = s.default.fromString(e.pageNumber) : n.pageNumber = s.default.UZERO, void 0 !== e.pageTotal && null !== e.pageTotal ? n.pageTotal = s.default.fromString(e.pageTotal) : n.pageTotal = s.default.UZERO, void 0 !== e.limit && null !== e.limit ? n.limit = s.default.fromString(e.limit) : n.limit = s.default.UZERO, void 0 !== e.txs && null !== e.txs)
                        for (const o of e.txs) n.txs.push(t.TxResponse.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.totalCount && (n.totalCount = (e.totalCount || s.default.UZERO).toString()), void 0 !== e.count && (n.count = (e.count || s.default.UZERO).toString()), void 0 !== e.pageNumber && (n.pageNumber = (e.pageNumber || s.default.UZERO).toString()), void 0 !== e.pageTotal && (n.pageTotal = (e.pageTotal || s.default.UZERO).toString()), void 0 !== e.limit && (n.limit = (e.limit || s.default.UZERO).toString()), e.txs ? n.txs = e.txs.map(e => e ? t.TxResponse.toJSON(e) : void 0) : n.txs = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, v);
                    if (n.txs = [], void 0 !== e.totalCount && null !== e.totalCount ? n.totalCount = e.totalCount : n.totalCount = s.default.UZERO, void 0 !== e.count && null !== e.count ? n.count = e.count : n.count = s.default.UZERO, void 0 !== e.pageNumber && null !== e.pageNumber ? n.pageNumber = e.pageNumber : n.pageNumber = s.default.UZERO, void 0 !== e.pageTotal && null !== e.pageTotal ? n.pageTotal = e.pageTotal : n.pageTotal = s.default.UZERO, void 0 !== e.limit && null !== e.limit ? n.limit = e.limit : n.limit = s.default.UZERO, void 0 !== e.txs && null !== e.txs)
                        for (const o of e.txs) n.txs.push(t.TxResponse.fromPartial(o));
                    return n
                }
            };
            var b = (() => {
                if (void 0 !== b) return b;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const O = b.atob || (e => b.Buffer.from(e, "base64").toString("binary"));

            function y(e) {
                const t = O(e),
                    n = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                return n
            }
            const S = b.btoa || (e => b.Buffer.from(e, "binary").toString("base64"));

            function x(e) {
                const t = [];
                for (const n of e) t.push(String.fromCharCode(n));
                return S(t.join(""))
            }
            i.default.util.Long !== s.default && (i.default.util.Long = s.default, i.default.configure())
        }
    }
]);