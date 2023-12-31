(window.webpackJsonp = window.webpackJsonp || []).push([
    [102], {
        122: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Any = t.protobufPackage = void 0;
            const s = o(n(1)),
                a = o(n(8));
            t.protobufPackage = "google.protobuf";
            const i = {
                typeUrl: ""
            };
            t.Any = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.typeUrl && t.uint32(10).string(e.typeUrl), 0 !== e.value.length && t.uint32(18).bytes(e.value), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, i);
                    for (s.value = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.typeUrl = n.string();
                                break;
                            case 2:
                                s.value = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, i);
                    return t.value = new Uint8Array, void 0 !== e.typeUrl && null !== e.typeUrl ? t.typeUrl = String(e.typeUrl) : t.typeUrl = "", void 0 !== e.value && null !== e.value && (t.value = function(e) {
                        const t = d(e),
                            n = new Uint8Array(t.length);
                        for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                        return n
                    }(e.value)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.typeUrl && (t.typeUrl = e.typeUrl), void 0 !== e.value && (t.value = function(e) {
                        const t = [];
                        for (const n of e) t.push(String.fromCharCode(n));
                        return l(t.join(""))
                    }(void 0 !== e.value ? e.value : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, i);
                    return void 0 !== e.typeUrl && null !== e.typeUrl ? t.typeUrl = e.typeUrl : t.typeUrl = "", void 0 !== e.value && null !== e.value ? t.value = e.value : t.value = new Uint8Array, t
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
            a.default.util.Long !== s.default && (a.default.util.Long = s.default, a.default.configure())
        },
        1955: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Duration = t.protobufPackage = void 0;
            const s = o(n(1)),
                a = o(n(8));
            t.protobufPackage = "google.protobuf";
            const i = {
                seconds: s.default.ZERO,
                nanos: 0
            };
            t.Duration = {
                encode: (e, t = a.default.Writer.create()) => (e.seconds.isZero() || t.uint32(8).int64(e.seconds), 0 !== e.nanos && t.uint32(16).int32(e.nanos), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, i);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.seconds = n.int64();
                                break;
                            case 2:
                                s.nanos = n.int32();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, i);
                    return void 0 !== e.seconds && null !== e.seconds ? t.seconds = s.default.fromString(e.seconds) : t.seconds = s.default.ZERO, void 0 !== e.nanos && null !== e.nanos ? t.nanos = Number(e.nanos) : t.nanos = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.seconds && (t.seconds = (e.seconds || s.default.ZERO).toString()), void 0 !== e.nanos && (t.nanos = e.nanos), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, i);
                    return void 0 !== e.seconds && null !== e.seconds ? t.seconds = e.seconds : t.seconds = s.default.ZERO, void 0 !== e.nanos && null !== e.nanos ? t.nanos = e.nanos : t.nanos = 0, t
                }
            }, a.default.util.Long !== s.default && (a.default.util.Long = s.default, a.default.configure())
        },
        3801: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Params = t.DenomTrace = t.FungibleTokenPacketData = t.protobufPackage = void 0;
            const s = o(n(1)),
                a = o(n(8));
            t.protobufPackage = "ibc.applications.transfer.v1";
            const i = {
                denom: "",
                amount: s.default.UZERO,
                sender: "",
                receiver: ""
            };
            t.FungibleTokenPacketData = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), e.amount.isZero() || t.uint32(16).uint64(e.amount), "" !== e.sender && t.uint32(26).string(e.sender), "" !== e.receiver && t.uint32(34).string(e.receiver), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, i);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.denom = n.string();
                                break;
                            case 2:
                                s.amount = n.uint64();
                                break;
                            case 3:
                                s.sender = n.string();
                                break;
                            case 4:
                                s.receiver = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, i);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", void 0 !== e.amount && null !== e.amount ? t.amount = s.default.fromString(e.amount) : t.amount = s.default.UZERO, void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.receiver && null !== e.receiver ? t.receiver = String(e.receiver) : t.receiver = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), void 0 !== e.amount && (t.amount = (e.amount || s.default.UZERO).toString()), void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.receiver && (t.receiver = e.receiver), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, i);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = e.denom : t.denom = "", void 0 !== e.amount && null !== e.amount ? t.amount = e.amount : t.amount = s.default.UZERO, void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.receiver && null !== e.receiver ? t.receiver = e.receiver : t.receiver = "", t
                }
            };
            const r = {
                path: "",
                baseDenom: ""
            };
            t.DenomTrace = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.path && t.uint32(10).string(e.path), "" !== e.baseDenom && t.uint32(18).string(e.baseDenom), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, r);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.path = n.string();
                                break;
                            case 2:
                                s.baseDenom = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.path && null !== e.path ? t.path = String(e.path) : t.path = "", void 0 !== e.baseDenom && null !== e.baseDenom ? t.baseDenom = String(e.baseDenom) : t.baseDenom = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.path && (t.path = e.path), void 0 !== e.baseDenom && (t.baseDenom = e.baseDenom), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.path && null !== e.path ? t.path = e.path : t.path = "", void 0 !== e.baseDenom && null !== e.baseDenom ? t.baseDenom = e.baseDenom : t.baseDenom = "", t
                }
            };
            const d = {
                sendEnabled: !1,
                receiveEnabled: !1
            };
            t.Params = {
                encode: (e, t = a.default.Writer.create()) => (!0 === e.sendEnabled && t.uint32(8).bool(e.sendEnabled), !0 === e.receiveEnabled && t.uint32(16).bool(e.receiveEnabled), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.sendEnabled = n.bool();
                                break;
                            case 2:
                                s.receiveEnabled = n.bool();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.sendEnabled && null !== e.sendEnabled ? t.sendEnabled = Boolean(e.sendEnabled) : t.sendEnabled = !1, void 0 !== e.receiveEnabled && null !== e.receiveEnabled ? t.receiveEnabled = Boolean(e.receiveEnabled) : t.receiveEnabled = !1, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.sendEnabled && (t.sendEnabled = e.sendEnabled), void 0 !== e.receiveEnabled && (t.receiveEnabled = e.receiveEnabled), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.sendEnabled && null !== e.sendEnabled ? t.sendEnabled = e.sendEnabled : t.sendEnabled = !1, void 0 !== e.receiveEnabled && null !== e.receiveEnabled ? t.receiveEnabled = e.receiveEnabled : t.receiveEnabled = !1, t
                }
            }, a.default.util.Long !== s.default && (a.default.util.Long = s.default, a.default.configure())
        },
        3883: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ABCIApplicationClientImpl = t.Snapshot = t.Evidence = t.VoteInfo = t.ValidatorUpdate = t.Validator = t.TxResult = t.EventAttribute = t.Event = t.LastCommitInfo = t.BlockParams = t.ConsensusParams = t.ResponseApplySnapshotChunk = t.ResponseLoadSnapshotChunk = t.ResponseOfferSnapshot = t.ResponseListSnapshots = t.ResponseCommit = t.ResponseEndBlock = t.ResponseDeliverTx = t.ResponseCheckTx = t.ResponseBeginBlock = t.ResponseQuery = t.ResponseInitChain = t.ResponseSetOption = t.ResponseInfo = t.ResponseFlush = t.ResponseEcho = t.ResponseException = t.Response = t.RequestApplySnapshotChunk = t.RequestLoadSnapshotChunk = t.RequestOfferSnapshot = t.RequestListSnapshots = t.RequestCommit = t.RequestEndBlock = t.RequestDeliverTx = t.RequestCheckTx = t.RequestBeginBlock = t.RequestQuery = t.RequestInitChain = t.RequestSetOption = t.RequestInfo = t.RequestFlush = t.RequestEcho = t.Request = t.responseApplySnapshotChunk_ResultToJSON = t.responseApplySnapshotChunk_ResultFromJSON = t.ResponseApplySnapshotChunk_Result = t.responseOfferSnapshot_ResultToJSON = t.responseOfferSnapshot_ResultFromJSON = t.ResponseOfferSnapshot_Result = t.evidenceTypeToJSON = t.evidenceTypeFromJSON = t.EvidenceType = t.checkTxTypeToJSON = t.checkTxTypeFromJSON = t.CheckTxType = t.protobufPackage = void 0;
            const s = o(n(1)),
                a = o(n(8)),
                i = n(3884),
                r = n(1953),
                d = n(3887),
                l = n(1954),
                u = n(635);
            var c, p, h, f;

            function v(e) {
                switch (e) {
                    case 0:
                    case "NEW":
                        return c.NEW;
                    case 1:
                    case "RECHECK":
                        return c.RECHECK;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return c.UNRECOGNIZED
                }
            }

            function m(e) {
                switch (e) {
                    case c.NEW:
                        return "NEW";
                    case c.RECHECK:
                        return "RECHECK";
                    default:
                        return "UNKNOWN"
                }
            }

            function k(e) {
                switch (e) {
                    case 0:
                    case "UNKNOWN":
                        return p.UNKNOWN;
                    case 1:
                    case "DUPLICATE_VOTE":
                        return p.DUPLICATE_VOTE;
                    case 2:
                    case "LIGHT_CLIENT_ATTACK":
                        return p.LIGHT_CLIENT_ATTACK;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return p.UNRECOGNIZED
                }
            }

            function g(e) {
                switch (e) {
                    case p.UNKNOWN:
                        return "UNKNOWN";
                    case p.DUPLICATE_VOTE:
                        return "DUPLICATE_VOTE";
                    case p.LIGHT_CLIENT_ATTACK:
                        return "LIGHT_CLIENT_ATTACK";
                    default:
                        return "UNKNOWN"
                }
            }

            function O(e) {
                switch (e) {
                    case 0:
                    case "UNKNOWN":
                        return h.UNKNOWN;
                    case 1:
                    case "ACCEPT":
                        return h.ACCEPT;
                    case 2:
                    case "ABORT":
                        return h.ABORT;
                    case 3:
                    case "REJECT":
                        return h.REJECT;
                    case 4:
                    case "REJECT_FORMAT":
                        return h.REJECT_FORMAT;
                    case 5:
                    case "REJECT_SENDER":
                        return h.REJECT_SENDER;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return h.UNRECOGNIZED
                }
            }

            function S(e) {
                switch (e) {
                    case h.UNKNOWN:
                        return "UNKNOWN";
                    case h.ACCEPT:
                        return "ACCEPT";
                    case h.ABORT:
                        return "ABORT";
                    case h.REJECT:
                        return "REJECT";
                    case h.REJECT_FORMAT:
                        return "REJECT_FORMAT";
                    case h.REJECT_SENDER:
                        return "REJECT_SENDER";
                    default:
                        return "UNKNOWN"
                }
            }

            function b(e) {
                switch (e) {
                    case 0:
                    case "UNKNOWN":
                        return f.UNKNOWN;
                    case 1:
                    case "ACCEPT":
                        return f.ACCEPT;
                    case 2:
                    case "ABORT":
                        return f.ABORT;
                    case 3:
                    case "RETRY":
                        return f.RETRY;
                    case 4:
                    case "RETRY_SNAPSHOT":
                        return f.RETRY_SNAPSHOT;
                    case 5:
                    case "REJECT_SNAPSHOT":
                        return f.REJECT_SNAPSHOT;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return f.UNRECOGNIZED
                }
            }

            function R(e) {
                switch (e) {
                    case f.UNKNOWN:
                        return "UNKNOWN";
                    case f.ACCEPT:
                        return "ACCEPT";
                    case f.ABORT:
                        return "ABORT";
                    case f.RETRY:
                        return "RETRY";
                    case f.RETRY_SNAPSHOT:
                        return "RETRY_SNAPSHOT";
                    case f.REJECT_SNAPSHOT:
                        return "REJECT_SNAPSHOT";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "tendermint.abci",
                function(e) {
                    e[e.NEW = 0] = "NEW", e[e.RECHECK = 1] = "RECHECK", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(c = t.CheckTxType || (t.CheckTxType = {})), t.checkTxTypeFromJSON = v, t.checkTxTypeToJSON = m,
                function(e) {
                    e[e.UNKNOWN = 0] = "UNKNOWN", e[e.DUPLICATE_VOTE = 1] = "DUPLICATE_VOTE", e[e.LIGHT_CLIENT_ATTACK = 2] = "LIGHT_CLIENT_ATTACK", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(p = t.EvidenceType || (t.EvidenceType = {})), t.evidenceTypeFromJSON = k, t.evidenceTypeToJSON = g,
                function(e) {
                    e[e.UNKNOWN = 0] = "UNKNOWN", e[e.ACCEPT = 1] = "ACCEPT", e[e.ABORT = 2] = "ABORT", e[e.REJECT = 3] = "REJECT", e[e.REJECT_FORMAT = 4] = "REJECT_FORMAT", e[e.REJECT_SENDER = 5] = "REJECT_SENDER", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(h = t.ResponseOfferSnapshot_Result || (t.ResponseOfferSnapshot_Result = {})), t.responseOfferSnapshot_ResultFromJSON = O, t.responseOfferSnapshot_ResultToJSON = S,
                function(e) {
                    e[e.UNKNOWN = 0] = "UNKNOWN", e[e.ACCEPT = 1] = "ACCEPT", e[e.ABORT = 2] = "ABORT", e[e.RETRY = 3] = "RETRY", e[e.RETRY_SNAPSHOT = 4] = "RETRY_SNAPSHOT", e[e.REJECT_SNAPSHOT = 5] = "REJECT_SNAPSHOT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(f = t.ResponseApplySnapshotChunk_Result || (t.ResponseApplySnapshotChunk_Result = {})), t.responseApplySnapshotChunk_ResultFromJSON = b, t.responseApplySnapshotChunk_ResultToJSON = R;
            const y = {};
            t.Request = {
                encode: (e, n = a.default.Writer.create()) => (void 0 !== e.echo && t.RequestEcho.encode(e.echo, n.uint32(10).fork()).ldelim(), void 0 !== e.flush && t.RequestFlush.encode(e.flush, n.uint32(18).fork()).ldelim(), void 0 !== e.info && t.RequestInfo.encode(e.info, n.uint32(26).fork()).ldelim(), void 0 !== e.setOption && t.RequestSetOption.encode(e.setOption, n.uint32(34).fork()).ldelim(), void 0 !== e.initChain && t.RequestInitChain.encode(e.initChain, n.uint32(42).fork()).ldelim(), void 0 !== e.query && t.RequestQuery.encode(e.query, n.uint32(50).fork()).ldelim(), void 0 !== e.beginBlock && t.RequestBeginBlock.encode(e.beginBlock, n.uint32(58).fork()).ldelim(), void 0 !== e.checkTx && t.RequestCheckTx.encode(e.checkTx, n.uint32(66).fork()).ldelim(), void 0 !== e.deliverTx && t.RequestDeliverTx.encode(e.deliverTx, n.uint32(74).fork()).ldelim(), void 0 !== e.endBlock && t.RequestEndBlock.encode(e.endBlock, n.uint32(82).fork()).ldelim(), void 0 !== e.commit && t.RequestCommit.encode(e.commit, n.uint32(90).fork()).ldelim(), void 0 !== e.listSnapshots && t.RequestListSnapshots.encode(e.listSnapshots, n.uint32(98).fork()).ldelim(), void 0 !== e.offerSnapshot && t.RequestOfferSnapshot.encode(e.offerSnapshot, n.uint32(106).fork()).ldelim(), void 0 !== e.loadSnapshotChunk && t.RequestLoadSnapshotChunk.encode(e.loadSnapshotChunk, n.uint32(114).fork()).ldelim(), void 0 !== e.applySnapshotChunk && t.RequestApplySnapshotChunk.encode(e.applySnapshotChunk, n.uint32(122).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, y);
                    for (; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.echo = t.RequestEcho.decode(o, o.uint32());
                                break;
                            case 2:
                                i.flush = t.RequestFlush.decode(o, o.uint32());
                                break;
                            case 3:
                                i.info = t.RequestInfo.decode(o, o.uint32());
                                break;
                            case 4:
                                i.setOption = t.RequestSetOption.decode(o, o.uint32());
                                break;
                            case 5:
                                i.initChain = t.RequestInitChain.decode(o, o.uint32());
                                break;
                            case 6:
                                i.query = t.RequestQuery.decode(o, o.uint32());
                                break;
                            case 7:
                                i.beginBlock = t.RequestBeginBlock.decode(o, o.uint32());
                                break;
                            case 8:
                                i.checkTx = t.RequestCheckTx.decode(o, o.uint32());
                                break;
                            case 9:
                                i.deliverTx = t.RequestDeliverTx.decode(o, o.uint32());
                                break;
                            case 10:
                                i.endBlock = t.RequestEndBlock.decode(o, o.uint32());
                                break;
                            case 11:
                                i.commit = t.RequestCommit.decode(o, o.uint32());
                                break;
                            case 12:
                                i.listSnapshots = t.RequestListSnapshots.decode(o, o.uint32());
                                break;
                            case 13:
                                i.offerSnapshot = t.RequestOfferSnapshot.decode(o, o.uint32());
                                break;
                            case 14:
                                i.loadSnapshotChunk = t.RequestLoadSnapshotChunk.decode(o, o.uint32());
                                break;
                            case 15:
                                i.applySnapshotChunk = t.RequestApplySnapshotChunk.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, y);
                    return void 0 !== e.echo && null !== e.echo ? n.echo = t.RequestEcho.fromJSON(e.echo) : n.echo = void 0, void 0 !== e.flush && null !== e.flush ? n.flush = t.RequestFlush.fromJSON(e.flush) : n.flush = void 0, void 0 !== e.info && null !== e.info ? n.info = t.RequestInfo.fromJSON(e.info) : n.info = void 0, void 0 !== e.setOption && null !== e.setOption ? n.setOption = t.RequestSetOption.fromJSON(e.setOption) : n.setOption = void 0, void 0 !== e.initChain && null !== e.initChain ? n.initChain = t.RequestInitChain.fromJSON(e.initChain) : n.initChain = void 0, void 0 !== e.query && null !== e.query ? n.query = t.RequestQuery.fromJSON(e.query) : n.query = void 0, void 0 !== e.beginBlock && null !== e.beginBlock ? n.beginBlock = t.RequestBeginBlock.fromJSON(e.beginBlock) : n.beginBlock = void 0, void 0 !== e.checkTx && null !== e.checkTx ? n.checkTx = t.RequestCheckTx.fromJSON(e.checkTx) : n.checkTx = void 0, void 0 !== e.deliverTx && null !== e.deliverTx ? n.deliverTx = t.RequestDeliverTx.fromJSON(e.deliverTx) : n.deliverTx = void 0, void 0 !== e.endBlock && null !== e.endBlock ? n.endBlock = t.RequestEndBlock.fromJSON(e.endBlock) : n.endBlock = void 0, void 0 !== e.commit && null !== e.commit ? n.commit = t.RequestCommit.fromJSON(e.commit) : n.commit = void 0, void 0 !== e.listSnapshots && null !== e.listSnapshots ? n.listSnapshots = t.RequestListSnapshots.fromJSON(e.listSnapshots) : n.listSnapshots = void 0, void 0 !== e.offerSnapshot && null !== e.offerSnapshot ? n.offerSnapshot = t.RequestOfferSnapshot.fromJSON(e.offerSnapshot) : n.offerSnapshot = void 0, void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk ? n.loadSnapshotChunk = t.RequestLoadSnapshotChunk.fromJSON(e.loadSnapshotChunk) : n.loadSnapshotChunk = void 0, void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk ? n.applySnapshotChunk = t.RequestApplySnapshotChunk.fromJSON(e.applySnapshotChunk) : n.applySnapshotChunk = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.echo && (n.echo = e.echo ? t.RequestEcho.toJSON(e.echo) : void 0), void 0 !== e.flush && (n.flush = e.flush ? t.RequestFlush.toJSON(e.flush) : void 0), void 0 !== e.info && (n.info = e.info ? t.RequestInfo.toJSON(e.info) : void 0), void 0 !== e.setOption && (n.setOption = e.setOption ? t.RequestSetOption.toJSON(e.setOption) : void 0), void 0 !== e.initChain && (n.initChain = e.initChain ? t.RequestInitChain.toJSON(e.initChain) : void 0), void 0 !== e.query && (n.query = e.query ? t.RequestQuery.toJSON(e.query) : void 0), void 0 !== e.beginBlock && (n.beginBlock = e.beginBlock ? t.RequestBeginBlock.toJSON(e.beginBlock) : void 0), void 0 !== e.checkTx && (n.checkTx = e.checkTx ? t.RequestCheckTx.toJSON(e.checkTx) : void 0), void 0 !== e.deliverTx && (n.deliverTx = e.deliverTx ? t.RequestDeliverTx.toJSON(e.deliverTx) : void 0), void 0 !== e.endBlock && (n.endBlock = e.endBlock ? t.RequestEndBlock.toJSON(e.endBlock) : void 0), void 0 !== e.commit && (n.commit = e.commit ? t.RequestCommit.toJSON(e.commit) : void 0), void 0 !== e.listSnapshots && (n.listSnapshots = e.listSnapshots ? t.RequestListSnapshots.toJSON(e.listSnapshots) : void 0), void 0 !== e.offerSnapshot && (n.offerSnapshot = e.offerSnapshot ? t.RequestOfferSnapshot.toJSON(e.offerSnapshot) : void 0), void 0 !== e.loadSnapshotChunk && (n.loadSnapshotChunk = e.loadSnapshotChunk ? t.RequestLoadSnapshotChunk.toJSON(e.loadSnapshotChunk) : void 0), void 0 !== e.applySnapshotChunk && (n.applySnapshotChunk = e.applySnapshotChunk ? t.RequestApplySnapshotChunk.toJSON(e.applySnapshotChunk) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, y);
                    return void 0 !== e.echo && null !== e.echo ? n.echo = t.RequestEcho.fromPartial(e.echo) : n.echo = void 0, void 0 !== e.flush && null !== e.flush ? n.flush = t.RequestFlush.fromPartial(e.flush) : n.flush = void 0, void 0 !== e.info && null !== e.info ? n.info = t.RequestInfo.fromPartial(e.info) : n.info = void 0, void 0 !== e.setOption && null !== e.setOption ? n.setOption = t.RequestSetOption.fromPartial(e.setOption) : n.setOption = void 0, void 0 !== e.initChain && null !== e.initChain ? n.initChain = t.RequestInitChain.fromPartial(e.initChain) : n.initChain = void 0, void 0 !== e.query && null !== e.query ? n.query = t.RequestQuery.fromPartial(e.query) : n.query = void 0, void 0 !== e.beginBlock && null !== e.beginBlock ? n.beginBlock = t.RequestBeginBlock.fromPartial(e.beginBlock) : n.beginBlock = void 0, void 0 !== e.checkTx && null !== e.checkTx ? n.checkTx = t.RequestCheckTx.fromPartial(e.checkTx) : n.checkTx = void 0, void 0 !== e.deliverTx && null !== e.deliverTx ? n.deliverTx = t.RequestDeliverTx.fromPartial(e.deliverTx) : n.deliverTx = void 0, void 0 !== e.endBlock && null !== e.endBlock ? n.endBlock = t.RequestEndBlock.fromPartial(e.endBlock) : n.endBlock = void 0, void 0 !== e.commit && null !== e.commit ? n.commit = t.RequestCommit.fromPartial(e.commit) : n.commit = void 0, void 0 !== e.listSnapshots && null !== e.listSnapshots ? n.listSnapshots = t.RequestListSnapshots.fromPartial(e.listSnapshots) : n.listSnapshots = void 0, void 0 !== e.offerSnapshot && null !== e.offerSnapshot ? n.offerSnapshot = t.RequestOfferSnapshot.fromPartial(e.offerSnapshot) : n.offerSnapshot = void 0, void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk ? n.loadSnapshotChunk = t.RequestLoadSnapshotChunk.fromPartial(e.loadSnapshotChunk) : n.loadSnapshotChunk = void 0, void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk ? n.applySnapshotChunk = t.RequestApplySnapshotChunk.fromPartial(e.applySnapshotChunk) : n.applySnapshotChunk = void 0, n
                }
            };
            const C = {
                message: ""
            };
            t.RequestEcho = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.message && t.uint32(10).string(e.message), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, C);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.message = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, C);
                    return void 0 !== e.message && null !== e.message ? t.message = String(e.message) : t.message = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.message && (t.message = e.message), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, C);
                    return void 0 !== e.message && null !== e.message ? t.message = e.message : t.message = "", t
                }
            };
            const E = {};
            t.RequestFlush = {
                encode: (e, t = a.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, E);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return s
                },
                fromJSON: e => Object.assign({}, E),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, E)
            };
            const N = {
                version: "",
                blockVersion: s.default.UZERO,
                p2pVersion: s.default.UZERO
            };
            t.RequestInfo = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.version && t.uint32(10).string(e.version), e.blockVersion.isZero() || t.uint32(16).uint64(e.blockVersion), e.p2pVersion.isZero() || t.uint32(24).uint64(e.p2pVersion), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, N);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.version = n.string();
                                break;
                            case 2:
                                s.blockVersion = n.uint64();
                                break;
                            case 3:
                                s.p2pVersion = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, N);
                    return void 0 !== e.version && null !== e.version ? t.version = String(e.version) : t.version = "", void 0 !== e.blockVersion && null !== e.blockVersion ? t.blockVersion = s.default.fromString(e.blockVersion) : t.blockVersion = s.default.UZERO, void 0 !== e.p2pVersion && null !== e.p2pVersion ? t.p2pVersion = s.default.fromString(e.p2pVersion) : t.p2pVersion = s.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.version && (t.version = e.version), void 0 !== e.blockVersion && (t.blockVersion = (e.blockVersion || s.default.UZERO).toString()), void 0 !== e.p2pVersion && (t.p2pVersion = (e.p2pVersion || s.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, N);
                    return void 0 !== e.version && null !== e.version ? t.version = e.version : t.version = "", void 0 !== e.blockVersion && null !== e.blockVersion ? t.blockVersion = e.blockVersion : t.blockVersion = s.default.UZERO, void 0 !== e.p2pVersion && null !== e.p2pVersion ? t.p2pVersion = e.p2pVersion : t.p2pVersion = s.default.UZERO, t
                }
            };
            const T = {
                key: "",
                value: ""
            };
            t.RequestSetOption = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.key && t.uint32(10).string(e.key), "" !== e.value && t.uint32(18).string(e.value), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, T);
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
                    const t = Object.assign({}, T);
                    return void 0 !== e.key && null !== e.key ? t.key = String(e.key) : t.key = "", void 0 !== e.value && null !== e.value ? t.value = String(e.value) : t.value = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.key && (t.key = e.key), void 0 !== e.value && (t.value = e.value), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, T);
                    return void 0 !== e.key && null !== e.key ? t.key = e.key : t.key = "", void 0 !== e.value && null !== e.value ? t.value = e.value : t.value = "", t
                }
            };
            const x = {
                chainId: "",
                initialHeight: s.default.ZERO
            };
            t.RequestInitChain = {
                encode(e, n = a.default.Writer.create()) {
                    void 0 !== e.time && u.Timestamp.encode(ge(e.time), n.uint32(10).fork()).ldelim(), "" !== e.chainId && n.uint32(18).string(e.chainId), void 0 !== e.consensusParams && t.ConsensusParams.encode(e.consensusParams, n.uint32(26).fork()).ldelim();
                    for (const o of e.validators) t.ValidatorUpdate.encode(o, n.uint32(34).fork()).ldelim();
                    return 0 !== e.appStateBytes.length && n.uint32(42).bytes(e.appStateBytes), e.initialHeight.isZero() || n.uint32(48).int64(e.initialHeight), n
                },
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, x);
                    for (i.validators = [], i.appStateBytes = new Uint8Array; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.time = Oe(u.Timestamp.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.chainId = o.string();
                                break;
                            case 3:
                                i.consensusParams = t.ConsensusParams.decode(o, o.uint32());
                                break;
                            case 4:
                                i.validators.push(t.ValidatorUpdate.decode(o, o.uint32()));
                                break;
                            case 5:
                                i.appStateBytes = o.bytes();
                                break;
                            case 6:
                                i.initialHeight = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, x);
                    if (n.validators = [], n.appStateBytes = new Uint8Array, void 0 !== e.time && null !== e.time ? n.time = Se(e.time) : n.time = void 0, void 0 !== e.chainId && null !== e.chainId ? n.chainId = String(e.chainId) : n.chainId = "", void 0 !== e.consensusParams && null !== e.consensusParams ? n.consensusParams = t.ConsensusParams.fromJSON(e.consensusParams) : n.consensusParams = void 0, void 0 !== e.validators && null !== e.validators)
                        for (const o of e.validators) n.validators.push(t.ValidatorUpdate.fromJSON(o));
                    return void 0 !== e.appStateBytes && null !== e.appStateBytes && (n.appStateBytes = ve(e.appStateBytes)), void 0 !== e.initialHeight && null !== e.initialHeight ? n.initialHeight = s.default.fromString(e.initialHeight) : n.initialHeight = s.default.ZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.time && (n.time = e.time.toISOString()), void 0 !== e.chainId && (n.chainId = e.chainId), void 0 !== e.consensusParams && (n.consensusParams = e.consensusParams ? t.ConsensusParams.toJSON(e.consensusParams) : void 0), e.validators ? n.validators = e.validators.map(e => e ? t.ValidatorUpdate.toJSON(e) : void 0) : n.validators = [], void 0 !== e.appStateBytes && (n.appStateBytes = ke(void 0 !== e.appStateBytes ? e.appStateBytes : new Uint8Array)), void 0 !== e.initialHeight && (n.initialHeight = (e.initialHeight || s.default.ZERO).toString()), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, x);
                    if (n.validators = [], void 0 !== e.time && null !== e.time ? n.time = e.time : n.time = void 0, void 0 !== e.chainId && null !== e.chainId ? n.chainId = e.chainId : n.chainId = "", void 0 !== e.consensusParams && null !== e.consensusParams ? n.consensusParams = t.ConsensusParams.fromPartial(e.consensusParams) : n.consensusParams = void 0, void 0 !== e.validators && null !== e.validators)
                        for (const o of e.validators) n.validators.push(t.ValidatorUpdate.fromPartial(o));
                    return void 0 !== e.appStateBytes && null !== e.appStateBytes ? n.appStateBytes = e.appStateBytes : n.appStateBytes = new Uint8Array, void 0 !== e.initialHeight && null !== e.initialHeight ? n.initialHeight = e.initialHeight : n.initialHeight = s.default.ZERO, n
                }
            };
            const w = {
                path: "",
                height: s.default.ZERO,
                prove: !1
            };
            t.RequestQuery = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.data.length && t.uint32(10).bytes(e.data), "" !== e.path && t.uint32(18).string(e.path), e.height.isZero() || t.uint32(24).int64(e.height), !0 === e.prove && t.uint32(32).bool(e.prove), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, w);
                    for (s.data = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.data = n.bytes();
                                break;
                            case 2:
                                s.path = n.string();
                                break;
                            case 3:
                                s.height = n.int64();
                                break;
                            case 4:
                                s.prove = n.bool();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, w);
                    return t.data = new Uint8Array, void 0 !== e.data && null !== e.data && (t.data = ve(e.data)), void 0 !== e.path && null !== e.path ? t.path = String(e.path) : t.path = "", void 0 !== e.height && null !== e.height ? t.height = s.default.fromString(e.height) : t.height = s.default.ZERO, void 0 !== e.prove && null !== e.prove ? t.prove = Boolean(e.prove) : t.prove = !1, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.data && (t.data = ke(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.path && (t.path = e.path), void 0 !== e.height && (t.height = (e.height || s.default.ZERO).toString()), void 0 !== e.prove && (t.prove = e.prove), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, w);
                    return void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, void 0 !== e.path && null !== e.path ? t.path = e.path : t.path = "", void 0 !== e.height && null !== e.height ? t.height = e.height : t.height = s.default.ZERO, void 0 !== e.prove && null !== e.prove ? t.prove = e.prove : t.prove = !1, t
                }
            };
            const P = {};
            t.RequestBeginBlock = {
                encode(e, n = a.default.Writer.create()) {
                    0 !== e.hash.length && n.uint32(10).bytes(e.hash), void 0 !== e.header && i.Header.encode(e.header, n.uint32(18).fork()).ldelim(), void 0 !== e.lastCommitInfo && t.LastCommitInfo.encode(e.lastCommitInfo, n.uint32(26).fork()).ldelim();
                    for (const o of e.byzantineValidators) t.Evidence.encode(o, n.uint32(34).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const r = Object.assign({}, P);
                    for (r.byzantineValidators = [], r.hash = new Uint8Array; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.hash = o.bytes();
                                break;
                            case 2:
                                r.header = i.Header.decode(o, o.uint32());
                                break;
                            case 3:
                                r.lastCommitInfo = t.LastCommitInfo.decode(o, o.uint32());
                                break;
                            case 4:
                                r.byzantineValidators.push(t.Evidence.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, P);
                    if (n.byzantineValidators = [], n.hash = new Uint8Array, void 0 !== e.hash && null !== e.hash && (n.hash = ve(e.hash)), void 0 !== e.header && null !== e.header ? n.header = i.Header.fromJSON(e.header) : n.header = void 0, void 0 !== e.lastCommitInfo && null !== e.lastCommitInfo ? n.lastCommitInfo = t.LastCommitInfo.fromJSON(e.lastCommitInfo) : n.lastCommitInfo = void 0, void 0 !== e.byzantineValidators && null !== e.byzantineValidators)
                        for (const o of e.byzantineValidators) n.byzantineValidators.push(t.Evidence.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.hash && (n.hash = ke(void 0 !== e.hash ? e.hash : new Uint8Array)), void 0 !== e.header && (n.header = e.header ? i.Header.toJSON(e.header) : void 0), void 0 !== e.lastCommitInfo && (n.lastCommitInfo = e.lastCommitInfo ? t.LastCommitInfo.toJSON(e.lastCommitInfo) : void 0), e.byzantineValidators ? n.byzantineValidators = e.byzantineValidators.map(e => e ? t.Evidence.toJSON(e) : void 0) : n.byzantineValidators = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, P);
                    if (n.byzantineValidators = [], void 0 !== e.hash && null !== e.hash ? n.hash = e.hash : n.hash = new Uint8Array, void 0 !== e.header && null !== e.header ? n.header = i.Header.fromPartial(e.header) : n.header = void 0, void 0 !== e.lastCommitInfo && null !== e.lastCommitInfo ? n.lastCommitInfo = t.LastCommitInfo.fromPartial(e.lastCommitInfo) : n.lastCommitInfo = void 0, void 0 !== e.byzantineValidators && null !== e.byzantineValidators)
                        for (const o of e.byzantineValidators) n.byzantineValidators.push(t.Evidence.fromPartial(o));
                    return n
                }
            };
            const U = {
                type: 0
            };
            t.RequestCheckTx = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.tx.length && t.uint32(10).bytes(e.tx), 0 !== e.type && t.uint32(16).int32(e.type), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, U);
                    for (s.tx = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.tx = n.bytes();
                                break;
                            case 2:
                                s.type = n.int32();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, U);
                    return t.tx = new Uint8Array, void 0 !== e.tx && null !== e.tx && (t.tx = ve(e.tx)), void 0 !== e.type && null !== e.type ? t.type = v(e.type) : t.type = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.tx && (t.tx = ke(void 0 !== e.tx ? e.tx : new Uint8Array)), void 0 !== e.type && (t.type = m(e.type)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, U);
                    return void 0 !== e.tx && null !== e.tx ? t.tx = e.tx : t.tx = new Uint8Array, void 0 !== e.type && null !== e.type ? t.type = e.type : t.type = 0, t
                }
            };
            const B = {};
            t.RequestDeliverTx = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.tx.length && t.uint32(10).bytes(e.tx), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, B);
                    for (s.tx = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.tx = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, B);
                    return t.tx = new Uint8Array, void 0 !== e.tx && null !== e.tx && (t.tx = ve(e.tx)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.tx && (t.tx = ke(void 0 !== e.tx ? e.tx : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, B);
                    return void 0 !== e.tx && null !== e.tx ? t.tx = e.tx : t.tx = new Uint8Array, t
                }
            };
            const J = {
                height: s.default.ZERO
            };
            t.RequestEndBlock = {
                encode: (e, t = a.default.Writer.create()) => (e.height.isZero() || t.uint32(8).int64(e.height), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, J);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.height = n.int64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, J);
                    return void 0 !== e.height && null !== e.height ? t.height = s.default.fromString(e.height) : t.height = s.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.height && (t.height = (e.height || s.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, J);
                    return void 0 !== e.height && null !== e.height ? t.height = e.height : t.height = s.default.ZERO, t
                }
            };
            const A = {};
            t.RequestCommit = {
                encode: (e, t = a.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, A);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return s
                },
                fromJSON: e => Object.assign({}, A),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, A)
            };
            const j = {};
            t.RequestListSnapshots = {
                encode: (e, t = a.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, j);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return s
                },
                fromJSON: e => Object.assign({}, j),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, j)
            };
            const q = {};
            t.RequestOfferSnapshot = {
                encode: (e, n = a.default.Writer.create()) => (void 0 !== e.snapshot && t.Snapshot.encode(e.snapshot, n.uint32(10).fork()).ldelim(), 0 !== e.appHash.length && n.uint32(18).bytes(e.appHash), n),
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, q);
                    for (i.appHash = new Uint8Array; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.snapshot = t.Snapshot.decode(o, o.uint32());
                                break;
                            case 2:
                                i.appHash = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, q);
                    return n.appHash = new Uint8Array, void 0 !== e.snapshot && null !== e.snapshot ? n.snapshot = t.Snapshot.fromJSON(e.snapshot) : n.snapshot = void 0, void 0 !== e.appHash && null !== e.appHash && (n.appHash = ve(e.appHash)), n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.snapshot && (n.snapshot = e.snapshot ? t.Snapshot.toJSON(e.snapshot) : void 0), void 0 !== e.appHash && (n.appHash = ke(void 0 !== e.appHash ? e.appHash : new Uint8Array)), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, q);
                    return void 0 !== e.snapshot && null !== e.snapshot ? n.snapshot = t.Snapshot.fromPartial(e.snapshot) : n.snapshot = void 0, void 0 !== e.appHash && null !== e.appHash ? n.appHash = e.appHash : n.appHash = new Uint8Array, n
                }
            };
            const Z = {
                height: s.default.UZERO,
                format: 0,
                chunk: 0
            };
            t.RequestLoadSnapshotChunk = {
                encode: (e, t = a.default.Writer.create()) => (e.height.isZero() || t.uint32(8).uint64(e.height), 0 !== e.format && t.uint32(16).uint32(e.format), 0 !== e.chunk && t.uint32(24).uint32(e.chunk), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, Z);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.height = n.uint64();
                                break;
                            case 2:
                                s.format = n.uint32();
                                break;
                            case 3:
                                s.chunk = n.uint32();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, Z);
                    return void 0 !== e.height && null !== e.height ? t.height = s.default.fromString(e.height) : t.height = s.default.UZERO, void 0 !== e.format && null !== e.format ? t.format = Number(e.format) : t.format = 0, void 0 !== e.chunk && null !== e.chunk ? t.chunk = Number(e.chunk) : t.chunk = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.height && (t.height = (e.height || s.default.UZERO).toString()), void 0 !== e.format && (t.format = e.format), void 0 !== e.chunk && (t.chunk = e.chunk), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, Z);
                    return void 0 !== e.height && null !== e.height ? t.height = e.height : t.height = s.default.UZERO, void 0 !== e.format && null !== e.format ? t.format = e.format : t.format = 0, void 0 !== e.chunk && null !== e.chunk ? t.chunk = e.chunk : t.chunk = 0, t
                }
            };
            const I = {
                index: 0,
                sender: ""
            };
            t.RequestApplySnapshotChunk = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.index && t.uint32(8).uint32(e.index), 0 !== e.chunk.length && t.uint32(18).bytes(e.chunk), "" !== e.sender && t.uint32(26).string(e.sender), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, I);
                    for (s.chunk = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.index = n.uint32();
                                break;
                            case 2:
                                s.chunk = n.bytes();
                                break;
                            case 3:
                                s.sender = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, I);
                    return t.chunk = new Uint8Array, void 0 !== e.index && null !== e.index ? t.index = Number(e.index) : t.index = 0, void 0 !== e.chunk && null !== e.chunk && (t.chunk = ve(e.chunk)), void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.index && (t.index = e.index), void 0 !== e.chunk && (t.chunk = ke(void 0 !== e.chunk ? e.chunk : new Uint8Array)), void 0 !== e.sender && (t.sender = e.sender), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, I);
                    return void 0 !== e.index && null !== e.index ? t.index = e.index : t.index = 0, void 0 !== e.chunk && null !== e.chunk ? t.chunk = e.chunk : t.chunk = new Uint8Array, void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", t
                }
            };
            const V = {};
            t.Response = {
                encode: (e, n = a.default.Writer.create()) => (void 0 !== e.exception && t.ResponseException.encode(e.exception, n.uint32(10).fork()).ldelim(), void 0 !== e.echo && t.ResponseEcho.encode(e.echo, n.uint32(18).fork()).ldelim(), void 0 !== e.flush && t.ResponseFlush.encode(e.flush, n.uint32(26).fork()).ldelim(), void 0 !== e.info && t.ResponseInfo.encode(e.info, n.uint32(34).fork()).ldelim(), void 0 !== e.setOption && t.ResponseSetOption.encode(e.setOption, n.uint32(42).fork()).ldelim(), void 0 !== e.initChain && t.ResponseInitChain.encode(e.initChain, n.uint32(50).fork()).ldelim(), void 0 !== e.query && t.ResponseQuery.encode(e.query, n.uint32(58).fork()).ldelim(), void 0 !== e.beginBlock && t.ResponseBeginBlock.encode(e.beginBlock, n.uint32(66).fork()).ldelim(), void 0 !== e.checkTx && t.ResponseCheckTx.encode(e.checkTx, n.uint32(74).fork()).ldelim(), void 0 !== e.deliverTx && t.ResponseDeliverTx.encode(e.deliverTx, n.uint32(82).fork()).ldelim(), void 0 !== e.endBlock && t.ResponseEndBlock.encode(e.endBlock, n.uint32(90).fork()).ldelim(), void 0 !== e.commit && t.ResponseCommit.encode(e.commit, n.uint32(98).fork()).ldelim(), void 0 !== e.listSnapshots && t.ResponseListSnapshots.encode(e.listSnapshots, n.uint32(106).fork()).ldelim(), void 0 !== e.offerSnapshot && t.ResponseOfferSnapshot.encode(e.offerSnapshot, n.uint32(114).fork()).ldelim(), void 0 !== e.loadSnapshotChunk && t.ResponseLoadSnapshotChunk.encode(e.loadSnapshotChunk, n.uint32(122).fork()).ldelim(), void 0 !== e.applySnapshotChunk && t.ResponseApplySnapshotChunk.encode(e.applySnapshotChunk, n.uint32(130).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, V);
                    for (; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.exception = t.ResponseException.decode(o, o.uint32());
                                break;
                            case 2:
                                i.echo = t.ResponseEcho.decode(o, o.uint32());
                                break;
                            case 3:
                                i.flush = t.ResponseFlush.decode(o, o.uint32());
                                break;
                            case 4:
                                i.info = t.ResponseInfo.decode(o, o.uint32());
                                break;
                            case 5:
                                i.setOption = t.ResponseSetOption.decode(o, o.uint32());
                                break;
                            case 6:
                                i.initChain = t.ResponseInitChain.decode(o, o.uint32());
                                break;
                            case 7:
                                i.query = t.ResponseQuery.decode(o, o.uint32());
                                break;
                            case 8:
                                i.beginBlock = t.ResponseBeginBlock.decode(o, o.uint32());
                                break;
                            case 9:
                                i.checkTx = t.ResponseCheckTx.decode(o, o.uint32());
                                break;
                            case 10:
                                i.deliverTx = t.ResponseDeliverTx.decode(o, o.uint32());
                                break;
                            case 11:
                                i.endBlock = t.ResponseEndBlock.decode(o, o.uint32());
                                break;
                            case 12:
                                i.commit = t.ResponseCommit.decode(o, o.uint32());
                                break;
                            case 13:
                                i.listSnapshots = t.ResponseListSnapshots.decode(o, o.uint32());
                                break;
                            case 14:
                                i.offerSnapshot = t.ResponseOfferSnapshot.decode(o, o.uint32());
                                break;
                            case 15:
                                i.loadSnapshotChunk = t.ResponseLoadSnapshotChunk.decode(o, o.uint32());
                                break;
                            case 16:
                                i.applySnapshotChunk = t.ResponseApplySnapshotChunk.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, V);
                    return void 0 !== e.exception && null !== e.exception ? n.exception = t.ResponseException.fromJSON(e.exception) : n.exception = void 0, void 0 !== e.echo && null !== e.echo ? n.echo = t.ResponseEcho.fromJSON(e.echo) : n.echo = void 0, void 0 !== e.flush && null !== e.flush ? n.flush = t.ResponseFlush.fromJSON(e.flush) : n.flush = void 0, void 0 !== e.info && null !== e.info ? n.info = t.ResponseInfo.fromJSON(e.info) : n.info = void 0, void 0 !== e.setOption && null !== e.setOption ? n.setOption = t.ResponseSetOption.fromJSON(e.setOption) : n.setOption = void 0, void 0 !== e.initChain && null !== e.initChain ? n.initChain = t.ResponseInitChain.fromJSON(e.initChain) : n.initChain = void 0, void 0 !== e.query && null !== e.query ? n.query = t.ResponseQuery.fromJSON(e.query) : n.query = void 0, void 0 !== e.beginBlock && null !== e.beginBlock ? n.beginBlock = t.ResponseBeginBlock.fromJSON(e.beginBlock) : n.beginBlock = void 0, void 0 !== e.checkTx && null !== e.checkTx ? n.checkTx = t.ResponseCheckTx.fromJSON(e.checkTx) : n.checkTx = void 0, void 0 !== e.deliverTx && null !== e.deliverTx ? n.deliverTx = t.ResponseDeliverTx.fromJSON(e.deliverTx) : n.deliverTx = void 0, void 0 !== e.endBlock && null !== e.endBlock ? n.endBlock = t.ResponseEndBlock.fromJSON(e.endBlock) : n.endBlock = void 0, void 0 !== e.commit && null !== e.commit ? n.commit = t.ResponseCommit.fromJSON(e.commit) : n.commit = void 0, void 0 !== e.listSnapshots && null !== e.listSnapshots ? n.listSnapshots = t.ResponseListSnapshots.fromJSON(e.listSnapshots) : n.listSnapshots = void 0, void 0 !== e.offerSnapshot && null !== e.offerSnapshot ? n.offerSnapshot = t.ResponseOfferSnapshot.fromJSON(e.offerSnapshot) : n.offerSnapshot = void 0, void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk ? n.loadSnapshotChunk = t.ResponseLoadSnapshotChunk.fromJSON(e.loadSnapshotChunk) : n.loadSnapshotChunk = void 0, void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk ? n.applySnapshotChunk = t.ResponseApplySnapshotChunk.fromJSON(e.applySnapshotChunk) : n.applySnapshotChunk = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.exception && (n.exception = e.exception ? t.ResponseException.toJSON(e.exception) : void 0), void 0 !== e.echo && (n.echo = e.echo ? t.ResponseEcho.toJSON(e.echo) : void 0), void 0 !== e.flush && (n.flush = e.flush ? t.ResponseFlush.toJSON(e.flush) : void 0), void 0 !== e.info && (n.info = e.info ? t.ResponseInfo.toJSON(e.info) : void 0), void 0 !== e.setOption && (n.setOption = e.setOption ? t.ResponseSetOption.toJSON(e.setOption) : void 0), void 0 !== e.initChain && (n.initChain = e.initChain ? t.ResponseInitChain.toJSON(e.initChain) : void 0), void 0 !== e.query && (n.query = e.query ? t.ResponseQuery.toJSON(e.query) : void 0), void 0 !== e.beginBlock && (n.beginBlock = e.beginBlock ? t.ResponseBeginBlock.toJSON(e.beginBlock) : void 0), void 0 !== e.checkTx && (n.checkTx = e.checkTx ? t.ResponseCheckTx.toJSON(e.checkTx) : void 0), void 0 !== e.deliverTx && (n.deliverTx = e.deliverTx ? t.ResponseDeliverTx.toJSON(e.deliverTx) : void 0), void 0 !== e.endBlock && (n.endBlock = e.endBlock ? t.ResponseEndBlock.toJSON(e.endBlock) : void 0), void 0 !== e.commit && (n.commit = e.commit ? t.ResponseCommit.toJSON(e.commit) : void 0), void 0 !== e.listSnapshots && (n.listSnapshots = e.listSnapshots ? t.ResponseListSnapshots.toJSON(e.listSnapshots) : void 0), void 0 !== e.offerSnapshot && (n.offerSnapshot = e.offerSnapshot ? t.ResponseOfferSnapshot.toJSON(e.offerSnapshot) : void 0), void 0 !== e.loadSnapshotChunk && (n.loadSnapshotChunk = e.loadSnapshotChunk ? t.ResponseLoadSnapshotChunk.toJSON(e.loadSnapshotChunk) : void 0), void 0 !== e.applySnapshotChunk && (n.applySnapshotChunk = e.applySnapshotChunk ? t.ResponseApplySnapshotChunk.toJSON(e.applySnapshotChunk) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, V);
                    return void 0 !== e.exception && null !== e.exception ? n.exception = t.ResponseException.fromPartial(e.exception) : n.exception = void 0, void 0 !== e.echo && null !== e.echo ? n.echo = t.ResponseEcho.fromPartial(e.echo) : n.echo = void 0, void 0 !== e.flush && null !== e.flush ? n.flush = t.ResponseFlush.fromPartial(e.flush) : n.flush = void 0, void 0 !== e.info && null !== e.info ? n.info = t.ResponseInfo.fromPartial(e.info) : n.info = void 0, void 0 !== e.setOption && null !== e.setOption ? n.setOption = t.ResponseSetOption.fromPartial(e.setOption) : n.setOption = void 0, void 0 !== e.initChain && null !== e.initChain ? n.initChain = t.ResponseInitChain.fromPartial(e.initChain) : n.initChain = void 0, void 0 !== e.query && null !== e.query ? n.query = t.ResponseQuery.fromPartial(e.query) : n.query = void 0, void 0 !== e.beginBlock && null !== e.beginBlock ? n.beginBlock = t.ResponseBeginBlock.fromPartial(e.beginBlock) : n.beginBlock = void 0, void 0 !== e.checkTx && null !== e.checkTx ? n.checkTx = t.ResponseCheckTx.fromPartial(e.checkTx) : n.checkTx = void 0, void 0 !== e.deliverTx && null !== e.deliverTx ? n.deliverTx = t.ResponseDeliverTx.fromPartial(e.deliverTx) : n.deliverTx = void 0, void 0 !== e.endBlock && null !== e.endBlock ? n.endBlock = t.ResponseEndBlock.fromPartial(e.endBlock) : n.endBlock = void 0, void 0 !== e.commit && null !== e.commit ? n.commit = t.ResponseCommit.fromPartial(e.commit) : n.commit = void 0, void 0 !== e.listSnapshots && null !== e.listSnapshots ? n.listSnapshots = t.ResponseListSnapshots.fromPartial(e.listSnapshots) : n.listSnapshots = void 0, void 0 !== e.offerSnapshot && null !== e.offerSnapshot ? n.offerSnapshot = t.ResponseOfferSnapshot.fromPartial(e.offerSnapshot) : n.offerSnapshot = void 0, void 0 !== e.loadSnapshotChunk && null !== e.loadSnapshotChunk ? n.loadSnapshotChunk = t.ResponseLoadSnapshotChunk.fromPartial(e.loadSnapshotChunk) : n.loadSnapshotChunk = void 0, void 0 !== e.applySnapshotChunk && null !== e.applySnapshotChunk ? n.applySnapshotChunk = t.ResponseApplySnapshotChunk.fromPartial(e.applySnapshotChunk) : n.applySnapshotChunk = void 0, n
                }
            };
            const H = {
                error: ""
            };
            t.ResponseException = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.error && t.uint32(10).string(e.error), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, H);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.error = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, H);
                    return void 0 !== e.error && null !== e.error ? t.error = String(e.error) : t.error = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.error && (t.error = e.error), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, H);
                    return void 0 !== e.error && null !== e.error ? t.error = e.error : t.error = "", t
                }
            };
            const W = {
                message: ""
            };
            t.ResponseEcho = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.message && t.uint32(10).string(e.message), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, W);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.message = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, W);
                    return void 0 !== e.message && null !== e.message ? t.message = String(e.message) : t.message = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.message && (t.message = e.message), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, W);
                    return void 0 !== e.message && null !== e.message ? t.message = e.message : t.message = "", t
                }
            };
            const L = {};
            t.ResponseFlush = {
                encode: (e, t = a.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, L);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return s
                },
                fromJSON: e => Object.assign({}, L),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, L)
            };
            const _ = {
                data: "",
                version: "",
                appVersion: s.default.UZERO,
                lastBlockHeight: s.default.ZERO
            };
            t.ResponseInfo = {
                encode: (e, t = a.default.Writer.create()) => ("" !== e.data && t.uint32(10).string(e.data), "" !== e.version && t.uint32(18).string(e.version), e.appVersion.isZero() || t.uint32(24).uint64(e.appVersion), e.lastBlockHeight.isZero() || t.uint32(32).int64(e.lastBlockHeight), 0 !== e.lastBlockAppHash.length && t.uint32(42).bytes(e.lastBlockAppHash), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, _);
                    for (s.lastBlockAppHash = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.data = n.string();
                                break;
                            case 2:
                                s.version = n.string();
                                break;
                            case 3:
                                s.appVersion = n.uint64();
                                break;
                            case 4:
                                s.lastBlockHeight = n.int64();
                                break;
                            case 5:
                                s.lastBlockAppHash = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, _);
                    return t.lastBlockAppHash = new Uint8Array, void 0 !== e.data && null !== e.data ? t.data = String(e.data) : t.data = "", void 0 !== e.version && null !== e.version ? t.version = String(e.version) : t.version = "", void 0 !== e.appVersion && null !== e.appVersion ? t.appVersion = s.default.fromString(e.appVersion) : t.appVersion = s.default.UZERO, void 0 !== e.lastBlockHeight && null !== e.lastBlockHeight ? t.lastBlockHeight = s.default.fromString(e.lastBlockHeight) : t.lastBlockHeight = s.default.ZERO, void 0 !== e.lastBlockAppHash && null !== e.lastBlockAppHash && (t.lastBlockAppHash = ve(e.lastBlockAppHash)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.data && (t.data = e.data), void 0 !== e.version && (t.version = e.version), void 0 !== e.appVersion && (t.appVersion = (e.appVersion || s.default.UZERO).toString()), void 0 !== e.lastBlockHeight && (t.lastBlockHeight = (e.lastBlockHeight || s.default.ZERO).toString()), void 0 !== e.lastBlockAppHash && (t.lastBlockAppHash = ke(void 0 !== e.lastBlockAppHash ? e.lastBlockAppHash : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, _);
                    return void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = "", void 0 !== e.version && null !== e.version ? t.version = e.version : t.version = "", void 0 !== e.appVersion && null !== e.appVersion ? t.appVersion = e.appVersion : t.appVersion = s.default.UZERO, void 0 !== e.lastBlockHeight && null !== e.lastBlockHeight ? t.lastBlockHeight = e.lastBlockHeight : t.lastBlockHeight = s.default.ZERO, void 0 !== e.lastBlockAppHash && null !== e.lastBlockAppHash ? t.lastBlockAppHash = e.lastBlockAppHash : t.lastBlockAppHash = new Uint8Array, t
                }
            };
            const D = {
                code: 0,
                log: "",
                info: ""
            };
            t.ResponseSetOption = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.code && t.uint32(8).uint32(e.code), "" !== e.log && t.uint32(26).string(e.log), "" !== e.info && t.uint32(34).string(e.info), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, D);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.code = n.uint32();
                                break;
                            case 3:
                                s.log = n.string();
                                break;
                            case 4:
                                s.info = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, D);
                    return void 0 !== e.code && null !== e.code ? t.code = Number(e.code) : t.code = 0, void 0 !== e.log && null !== e.log ? t.log = String(e.log) : t.log = "", void 0 !== e.info && null !== e.info ? t.info = String(e.info) : t.info = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.code && (t.code = e.code), void 0 !== e.log && (t.log = e.log), void 0 !== e.info && (t.info = e.info), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, D);
                    return void 0 !== e.code && null !== e.code ? t.code = e.code : t.code = 0, void 0 !== e.log && null !== e.log ? t.log = e.log : t.log = "", void 0 !== e.info && null !== e.info ? t.info = e.info : t.info = "", t
                }
            };
            const K = {};
            t.ResponseInitChain = {
                encode(e, n = a.default.Writer.create()) {
                    void 0 !== e.consensusParams && t.ConsensusParams.encode(e.consensusParams, n.uint32(10).fork()).ldelim();
                    for (const o of e.validators) t.ValidatorUpdate.encode(o, n.uint32(18).fork()).ldelim();
                    return 0 !== e.appHash.length && n.uint32(26).bytes(e.appHash), n
                },
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, K);
                    for (i.validators = [], i.appHash = new Uint8Array; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.consensusParams = t.ConsensusParams.decode(o, o.uint32());
                                break;
                            case 2:
                                i.validators.push(t.ValidatorUpdate.decode(o, o.uint32()));
                                break;
                            case 3:
                                i.appHash = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, K);
                    if (n.validators = [], n.appHash = new Uint8Array, void 0 !== e.consensusParams && null !== e.consensusParams ? n.consensusParams = t.ConsensusParams.fromJSON(e.consensusParams) : n.consensusParams = void 0, void 0 !== e.validators && null !== e.validators)
                        for (const o of e.validators) n.validators.push(t.ValidatorUpdate.fromJSON(o));
                    return void 0 !== e.appHash && null !== e.appHash && (n.appHash = ve(e.appHash)), n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.consensusParams && (n.consensusParams = e.consensusParams ? t.ConsensusParams.toJSON(e.consensusParams) : void 0), e.validators ? n.validators = e.validators.map(e => e ? t.ValidatorUpdate.toJSON(e) : void 0) : n.validators = [], void 0 !== e.appHash && (n.appHash = ke(void 0 !== e.appHash ? e.appHash : new Uint8Array)), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, K);
                    if (n.validators = [], void 0 !== e.consensusParams && null !== e.consensusParams ? n.consensusParams = t.ConsensusParams.fromPartial(e.consensusParams) : n.consensusParams = void 0, void 0 !== e.validators && null !== e.validators)
                        for (const o of e.validators) n.validators.push(t.ValidatorUpdate.fromPartial(o));
                    return void 0 !== e.appHash && null !== e.appHash ? n.appHash = e.appHash : n.appHash = new Uint8Array, n
                }
            };
            const G = {
                code: 0,
                log: "",
                info: "",
                index: s.default.ZERO,
                height: s.default.ZERO,
                codespace: ""
            };
            t.ResponseQuery = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.code && t.uint32(8).uint32(e.code), "" !== e.log && t.uint32(26).string(e.log), "" !== e.info && t.uint32(34).string(e.info), e.index.isZero() || t.uint32(40).int64(e.index), 0 !== e.key.length && t.uint32(50).bytes(e.key), 0 !== e.value.length && t.uint32(58).bytes(e.value), void 0 !== e.proofOps && r.ProofOps.encode(e.proofOps, t.uint32(66).fork()).ldelim(), e.height.isZero() || t.uint32(72).int64(e.height), "" !== e.codespace && t.uint32(82).string(e.codespace), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, G);
                    for (s.key = new Uint8Array, s.value = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.code = n.uint32();
                                break;
                            case 3:
                                s.log = n.string();
                                break;
                            case 4:
                                s.info = n.string();
                                break;
                            case 5:
                                s.index = n.int64();
                                break;
                            case 6:
                                s.key = n.bytes();
                                break;
                            case 7:
                                s.value = n.bytes();
                                break;
                            case 8:
                                s.proofOps = r.ProofOps.decode(n, n.uint32());
                                break;
                            case 9:
                                s.height = n.int64();
                                break;
                            case 10:
                                s.codespace = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, G);
                    return t.key = new Uint8Array, t.value = new Uint8Array, void 0 !== e.code && null !== e.code ? t.code = Number(e.code) : t.code = 0, void 0 !== e.log && null !== e.log ? t.log = String(e.log) : t.log = "", void 0 !== e.info && null !== e.info ? t.info = String(e.info) : t.info = "", void 0 !== e.index && null !== e.index ? t.index = s.default.fromString(e.index) : t.index = s.default.ZERO, void 0 !== e.key && null !== e.key && (t.key = ve(e.key)), void 0 !== e.value && null !== e.value && (t.value = ve(e.value)), void 0 !== e.proofOps && null !== e.proofOps ? t.proofOps = r.ProofOps.fromJSON(e.proofOps) : t.proofOps = void 0, void 0 !== e.height && null !== e.height ? t.height = s.default.fromString(e.height) : t.height = s.default.ZERO, void 0 !== e.codespace && null !== e.codespace ? t.codespace = String(e.codespace) : t.codespace = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.code && (t.code = e.code), void 0 !== e.log && (t.log = e.log), void 0 !== e.info && (t.info = e.info), void 0 !== e.index && (t.index = (e.index || s.default.ZERO).toString()), void 0 !== e.key && (t.key = ke(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.value && (t.value = ke(void 0 !== e.value ? e.value : new Uint8Array)), void 0 !== e.proofOps && (t.proofOps = e.proofOps ? r.ProofOps.toJSON(e.proofOps) : void 0), void 0 !== e.height && (t.height = (e.height || s.default.ZERO).toString()), void 0 !== e.codespace && (t.codespace = e.codespace), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, G);
                    return void 0 !== e.code && null !== e.code ? t.code = e.code : t.code = 0, void 0 !== e.log && null !== e.log ? t.log = e.log : t.log = "", void 0 !== e.info && null !== e.info ? t.info = e.info : t.info = "", void 0 !== e.index && null !== e.index ? t.index = e.index : t.index = s.default.ZERO, void 0 !== e.key && null !== e.key ? t.key = e.key : t.key = new Uint8Array, void 0 !== e.value && null !== e.value ? t.value = e.value : t.value = new Uint8Array, void 0 !== e.proofOps && null !== e.proofOps ? t.proofOps = r.ProofOps.fromPartial(e.proofOps) : t.proofOps = void 0, void 0 !== e.height && null !== e.height ? t.height = e.height : t.height = s.default.ZERO, void 0 !== e.codespace && null !== e.codespace ? t.codespace = e.codespace : t.codespace = "", t
                }
            };
            const F = {};
            t.ResponseBeginBlock = {
                encode(e, n = a.default.Writer.create()) {
                    for (const o of e.events) t.Event.encode(o, n.uint32(10).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, F);
                    for (i.events = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.events.push(t.Event.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, F);
                    if (n.events = [], void 0 !== e.events && null !== e.events)
                        for (const o of e.events) n.events.push(t.Event.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.events ? n.events = e.events.map(e => e ? t.Event.toJSON(e) : void 0) : n.events = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, F);
                    if (n.events = [], void 0 !== e.events && null !== e.events)
                        for (const o of e.events) n.events.push(t.Event.fromPartial(o));
                    return n
                }
            };
            const Q = {
                code: 0,
                log: "",
                info: "",
                gasWanted: s.default.ZERO,
                gasUsed: s.default.ZERO,
                codespace: ""
            };
            t.ResponseCheckTx = {
                encode(e, n = a.default.Writer.create()) {
                    0 !== e.code && n.uint32(8).uint32(e.code), 0 !== e.data.length && n.uint32(18).bytes(e.data), "" !== e.log && n.uint32(26).string(e.log), "" !== e.info && n.uint32(34).string(e.info), e.gasWanted.isZero() || n.uint32(40).int64(e.gasWanted), e.gasUsed.isZero() || n.uint32(48).int64(e.gasUsed);
                    for (const o of e.events) t.Event.encode(o, n.uint32(58).fork()).ldelim();
                    return "" !== e.codespace && n.uint32(66).string(e.codespace), n
                },
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, Q);
                    for (i.events = [], i.data = new Uint8Array; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.code = o.uint32();
                                break;
                            case 2:
                                i.data = o.bytes();
                                break;
                            case 3:
                                i.log = o.string();
                                break;
                            case 4:
                                i.info = o.string();
                                break;
                            case 5:
                                i.gasWanted = o.int64();
                                break;
                            case 6:
                                i.gasUsed = o.int64();
                                break;
                            case 7:
                                i.events.push(t.Event.decode(o, o.uint32()));
                                break;
                            case 8:
                                i.codespace = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, Q);
                    if (n.events = [], n.data = new Uint8Array, void 0 !== e.code && null !== e.code ? n.code = Number(e.code) : n.code = 0, void 0 !== e.data && null !== e.data && (n.data = ve(e.data)), void 0 !== e.log && null !== e.log ? n.log = String(e.log) : n.log = "", void 0 !== e.info && null !== e.info ? n.info = String(e.info) : n.info = "", void 0 !== e.gasWanted && null !== e.gasWanted ? n.gasWanted = s.default.fromString(e.gasWanted) : n.gasWanted = s.default.ZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? n.gasUsed = s.default.fromString(e.gasUsed) : n.gasUsed = s.default.ZERO, void 0 !== e.events && null !== e.events)
                        for (const o of e.events) n.events.push(t.Event.fromJSON(o));
                    return void 0 !== e.codespace && null !== e.codespace ? n.codespace = String(e.codespace) : n.codespace = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.code && (n.code = e.code), void 0 !== e.data && (n.data = ke(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.log && (n.log = e.log), void 0 !== e.info && (n.info = e.info), void 0 !== e.gasWanted && (n.gasWanted = (e.gasWanted || s.default.ZERO).toString()), void 0 !== e.gasUsed && (n.gasUsed = (e.gasUsed || s.default.ZERO).toString()), e.events ? n.events = e.events.map(e => e ? t.Event.toJSON(e) : void 0) : n.events = [], void 0 !== e.codespace && (n.codespace = e.codespace), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, Q);
                    if (n.events = [], void 0 !== e.code && null !== e.code ? n.code = e.code : n.code = 0, void 0 !== e.data && null !== e.data ? n.data = e.data : n.data = new Uint8Array, void 0 !== e.log && null !== e.log ? n.log = e.log : n.log = "", void 0 !== e.info && null !== e.info ? n.info = e.info : n.info = "", void 0 !== e.gasWanted && null !== e.gasWanted ? n.gasWanted = e.gasWanted : n.gasWanted = s.default.ZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? n.gasUsed = e.gasUsed : n.gasUsed = s.default.ZERO, void 0 !== e.events && null !== e.events)
                        for (const o of e.events) n.events.push(t.Event.fromPartial(o));
                    return void 0 !== e.codespace && null !== e.codespace ? n.codespace = e.codespace : n.codespace = "", n
                }
            };
            const z = {
                code: 0,
                log: "",
                info: "",
                gasWanted: s.default.ZERO,
                gasUsed: s.default.ZERO,
                codespace: ""
            };
            t.ResponseDeliverTx = {
                encode(e, n = a.default.Writer.create()) {
                    0 !== e.code && n.uint32(8).uint32(e.code), 0 !== e.data.length && n.uint32(18).bytes(e.data), "" !== e.log && n.uint32(26).string(e.log), "" !== e.info && n.uint32(34).string(e.info), e.gasWanted.isZero() || n.uint32(40).int64(e.gasWanted), e.gasUsed.isZero() || n.uint32(48).int64(e.gasUsed);
                    for (const o of e.events) t.Event.encode(o, n.uint32(58).fork()).ldelim();
                    return "" !== e.codespace && n.uint32(66).string(e.codespace), n
                },
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, z);
                    for (i.events = [], i.data = new Uint8Array; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.code = o.uint32();
                                break;
                            case 2:
                                i.data = o.bytes();
                                break;
                            case 3:
                                i.log = o.string();
                                break;
                            case 4:
                                i.info = o.string();
                                break;
                            case 5:
                                i.gasWanted = o.int64();
                                break;
                            case 6:
                                i.gasUsed = o.int64();
                                break;
                            case 7:
                                i.events.push(t.Event.decode(o, o.uint32()));
                                break;
                            case 8:
                                i.codespace = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, z);
                    if (n.events = [], n.data = new Uint8Array, void 0 !== e.code && null !== e.code ? n.code = Number(e.code) : n.code = 0, void 0 !== e.data && null !== e.data && (n.data = ve(e.data)), void 0 !== e.log && null !== e.log ? n.log = String(e.log) : n.log = "", void 0 !== e.info && null !== e.info ? n.info = String(e.info) : n.info = "", void 0 !== e.gasWanted && null !== e.gasWanted ? n.gasWanted = s.default.fromString(e.gasWanted) : n.gasWanted = s.default.ZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? n.gasUsed = s.default.fromString(e.gasUsed) : n.gasUsed = s.default.ZERO, void 0 !== e.events && null !== e.events)
                        for (const o of e.events) n.events.push(t.Event.fromJSON(o));
                    return void 0 !== e.codespace && null !== e.codespace ? n.codespace = String(e.codespace) : n.codespace = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.code && (n.code = e.code), void 0 !== e.data && (n.data = ke(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.log && (n.log = e.log), void 0 !== e.info && (n.info = e.info), void 0 !== e.gasWanted && (n.gasWanted = (e.gasWanted || s.default.ZERO).toString()), void 0 !== e.gasUsed && (n.gasUsed = (e.gasUsed || s.default.ZERO).toString()), e.events ? n.events = e.events.map(e => e ? t.Event.toJSON(e) : void 0) : n.events = [], void 0 !== e.codespace && (n.codespace = e.codespace), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, z);
                    if (n.events = [], void 0 !== e.code && null !== e.code ? n.code = e.code : n.code = 0, void 0 !== e.data && null !== e.data ? n.data = e.data : n.data = new Uint8Array, void 0 !== e.log && null !== e.log ? n.log = e.log : n.log = "", void 0 !== e.info && null !== e.info ? n.info = e.info : n.info = "", void 0 !== e.gasWanted && null !== e.gasWanted ? n.gasWanted = e.gasWanted : n.gasWanted = s.default.ZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? n.gasUsed = e.gasUsed : n.gasUsed = s.default.ZERO, void 0 !== e.events && null !== e.events)
                        for (const o of e.events) n.events.push(t.Event.fromPartial(o));
                    return void 0 !== e.codespace && null !== e.codespace ? n.codespace = e.codespace : n.codespace = "", n
                }
            };
            const M = {};
            t.ResponseEndBlock = {
                encode(e, n = a.default.Writer.create()) {
                    for (const o of e.validatorUpdates) t.ValidatorUpdate.encode(o, n.uint32(10).fork()).ldelim();
                    void 0 !== e.consensusParamUpdates && t.ConsensusParams.encode(e.consensusParamUpdates, n.uint32(18).fork()).ldelim();
                    for (const o of e.events) t.Event.encode(o, n.uint32(26).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, M);
                    for (i.validatorUpdates = [], i.events = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validatorUpdates.push(t.ValidatorUpdate.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.consensusParamUpdates = t.ConsensusParams.decode(o, o.uint32());
                                break;
                            case 3:
                                i.events.push(t.Event.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, M);
                    if (n.validatorUpdates = [], n.events = [], void 0 !== e.validatorUpdates && null !== e.validatorUpdates)
                        for (const o of e.validatorUpdates) n.validatorUpdates.push(t.ValidatorUpdate.fromJSON(o));
                    if (void 0 !== e.consensusParamUpdates && null !== e.consensusParamUpdates ? n.consensusParamUpdates = t.ConsensusParams.fromJSON(e.consensusParamUpdates) : n.consensusParamUpdates = void 0, void 0 !== e.events && null !== e.events)
                        for (const o of e.events) n.events.push(t.Event.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.validatorUpdates ? n.validatorUpdates = e.validatorUpdates.map(e => e ? t.ValidatorUpdate.toJSON(e) : void 0) : n.validatorUpdates = [], void 0 !== e.consensusParamUpdates && (n.consensusParamUpdates = e.consensusParamUpdates ? t.ConsensusParams.toJSON(e.consensusParamUpdates) : void 0), e.events ? n.events = e.events.map(e => e ? t.Event.toJSON(e) : void 0) : n.events = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, M);
                    if (n.validatorUpdates = [], n.events = [], void 0 !== e.validatorUpdates && null !== e.validatorUpdates)
                        for (const o of e.validatorUpdates) n.validatorUpdates.push(t.ValidatorUpdate.fromPartial(o));
                    if (void 0 !== e.consensusParamUpdates && null !== e.consensusParamUpdates ? n.consensusParamUpdates = t.ConsensusParams.fromPartial(e.consensusParamUpdates) : n.consensusParamUpdates = void 0, void 0 !== e.events && null !== e.events)
                        for (const o of e.events) n.events.push(t.Event.fromPartial(o));
                    return n
                }
            };
            const Y = {
                retainHeight: s.default.ZERO
            };
            t.ResponseCommit = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.data.length && t.uint32(18).bytes(e.data), e.retainHeight.isZero() || t.uint32(24).int64(e.retainHeight), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, Y);
                    for (s.data = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 2:
                                s.data = n.bytes();
                                break;
                            case 3:
                                s.retainHeight = n.int64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, Y);
                    return t.data = new Uint8Array, void 0 !== e.data && null !== e.data && (t.data = ve(e.data)), void 0 !== e.retainHeight && null !== e.retainHeight ? t.retainHeight = s.default.fromString(e.retainHeight) : t.retainHeight = s.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.data && (t.data = ke(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.retainHeight && (t.retainHeight = (e.retainHeight || s.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, Y);
                    return void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, void 0 !== e.retainHeight && null !== e.retainHeight ? t.retainHeight = e.retainHeight : t.retainHeight = s.default.ZERO, t
                }
            };
            const X = {};
            t.ResponseListSnapshots = {
                encode(e, n = a.default.Writer.create()) {
                    for (const o of e.snapshots) t.Snapshot.encode(o, n.uint32(10).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, X);
                    for (i.snapshots = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.snapshots.push(t.Snapshot.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, X);
                    if (n.snapshots = [], void 0 !== e.snapshots && null !== e.snapshots)
                        for (const o of e.snapshots) n.snapshots.push(t.Snapshot.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.snapshots ? n.snapshots = e.snapshots.map(e => e ? t.Snapshot.toJSON(e) : void 0) : n.snapshots = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, X);
                    if (n.snapshots = [], void 0 !== e.snapshots && null !== e.snapshots)
                        for (const o of e.snapshots) n.snapshots.push(t.Snapshot.fromPartial(o));
                    return n
                }
            };
            const $ = {
                result: 0
            };
            t.ResponseOfferSnapshot = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.result && t.uint32(8).int32(e.result), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, $);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.result = n.int32();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, $);
                    return void 0 !== e.result && null !== e.result ? t.result = O(e.result) : t.result = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.result && (t.result = S(e.result)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, $);
                    return void 0 !== e.result && null !== e.result ? t.result = e.result : t.result = 0, t
                }
            };
            const ee = {};
            t.ResponseLoadSnapshotChunk = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.chunk.length && t.uint32(10).bytes(e.chunk), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, ee);
                    for (s.chunk = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.chunk = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, ee);
                    return t.chunk = new Uint8Array, void 0 !== e.chunk && null !== e.chunk && (t.chunk = ve(e.chunk)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.chunk && (t.chunk = ke(void 0 !== e.chunk ? e.chunk : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, ee);
                    return void 0 !== e.chunk && null !== e.chunk ? t.chunk = e.chunk : t.chunk = new Uint8Array, t
                }
            };
            const te = {
                result: 0,
                refetchChunks: 0,
                rejectSenders: ""
            };
            t.ResponseApplySnapshotChunk = {
                encode(e, t = a.default.Writer.create()) {
                    0 !== e.result && t.uint32(8).int32(e.result), t.uint32(18).fork();
                    for (const n of e.refetchChunks) t.uint32(n);
                    t.ldelim();
                    for (const n of e.rejectSenders) t.uint32(26).string(n);
                    return t
                },
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, te);
                    for (s.refetchChunks = [], s.rejectSenders = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.result = n.int32();
                                break;
                            case 2:
                                if (2 == (7 & e)) {
                                    const e = n.uint32() + n.pos;
                                    for (; n.pos < e;) s.refetchChunks.push(n.uint32())
                                } else s.refetchChunks.push(n.uint32());
                                break;
                            case 3:
                                s.rejectSenders.push(n.string());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, te);
                    if (t.refetchChunks = [], t.rejectSenders = [], void 0 !== e.result && null !== e.result ? t.result = b(e.result) : t.result = 0, void 0 !== e.refetchChunks && null !== e.refetchChunks)
                        for (const n of e.refetchChunks) t.refetchChunks.push(Number(n));
                    if (void 0 !== e.rejectSenders && null !== e.rejectSenders)
                        for (const n of e.rejectSenders) t.rejectSenders.push(String(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.result && (t.result = R(e.result)), e.refetchChunks ? t.refetchChunks = e.refetchChunks.map(e => e) : t.refetchChunks = [], e.rejectSenders ? t.rejectSenders = e.rejectSenders.map(e => e) : t.rejectSenders = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, te);
                    if (t.refetchChunks = [], t.rejectSenders = [], void 0 !== e.result && null !== e.result ? t.result = e.result : t.result = 0, void 0 !== e.refetchChunks && null !== e.refetchChunks)
                        for (const n of e.refetchChunks) t.refetchChunks.push(n);
                    if (void 0 !== e.rejectSenders && null !== e.rejectSenders)
                        for (const n of e.rejectSenders) t.rejectSenders.push(n);
                    return t
                }
            };
            const ne = {};
            t.ConsensusParams = {
                encode: (e, n = a.default.Writer.create()) => (void 0 !== e.block && t.BlockParams.encode(e.block, n.uint32(10).fork()).ldelim(), void 0 !== e.evidence && d.EvidenceParams.encode(e.evidence, n.uint32(18).fork()).ldelim(), void 0 !== e.validator && d.ValidatorParams.encode(e.validator, n.uint32(26).fork()).ldelim(), void 0 !== e.version && d.VersionParams.encode(e.version, n.uint32(34).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, ne);
                    for (; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.block = t.BlockParams.decode(o, o.uint32());
                                break;
                            case 2:
                                i.evidence = d.EvidenceParams.decode(o, o.uint32());
                                break;
                            case 3:
                                i.validator = d.ValidatorParams.decode(o, o.uint32());
                                break;
                            case 4:
                                i.version = d.VersionParams.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, ne);
                    return void 0 !== e.block && null !== e.block ? n.block = t.BlockParams.fromJSON(e.block) : n.block = void 0, void 0 !== e.evidence && null !== e.evidence ? n.evidence = d.EvidenceParams.fromJSON(e.evidence) : n.evidence = void 0, void 0 !== e.validator && null !== e.validator ? n.validator = d.ValidatorParams.fromJSON(e.validator) : n.validator = void 0, void 0 !== e.version && null !== e.version ? n.version = d.VersionParams.fromJSON(e.version) : n.version = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.block && (n.block = e.block ? t.BlockParams.toJSON(e.block) : void 0), void 0 !== e.evidence && (n.evidence = e.evidence ? d.EvidenceParams.toJSON(e.evidence) : void 0), void 0 !== e.validator && (n.validator = e.validator ? d.ValidatorParams.toJSON(e.validator) : void 0), void 0 !== e.version && (n.version = e.version ? d.VersionParams.toJSON(e.version) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, ne);
                    return void 0 !== e.block && null !== e.block ? n.block = t.BlockParams.fromPartial(e.block) : n.block = void 0, void 0 !== e.evidence && null !== e.evidence ? n.evidence = d.EvidenceParams.fromPartial(e.evidence) : n.evidence = void 0, void 0 !== e.validator && null !== e.validator ? n.validator = d.ValidatorParams.fromPartial(e.validator) : n.validator = void 0, void 0 !== e.version && null !== e.version ? n.version = d.VersionParams.fromPartial(e.version) : n.version = void 0, n
                }
            };
            const oe = {
                maxBytes: s.default.ZERO,
                maxGas: s.default.ZERO
            };
            t.BlockParams = {
                encode: (e, t = a.default.Writer.create()) => (e.maxBytes.isZero() || t.uint32(8).int64(e.maxBytes), e.maxGas.isZero() || t.uint32(16).int64(e.maxGas), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, oe);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.maxBytes = n.int64();
                                break;
                            case 2:
                                s.maxGas = n.int64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, oe);
                    return void 0 !== e.maxBytes && null !== e.maxBytes ? t.maxBytes = s.default.fromString(e.maxBytes) : t.maxBytes = s.default.ZERO, void 0 !== e.maxGas && null !== e.maxGas ? t.maxGas = s.default.fromString(e.maxGas) : t.maxGas = s.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.maxBytes && (t.maxBytes = (e.maxBytes || s.default.ZERO).toString()), void 0 !== e.maxGas && (t.maxGas = (e.maxGas || s.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, oe);
                    return void 0 !== e.maxBytes && null !== e.maxBytes ? t.maxBytes = e.maxBytes : t.maxBytes = s.default.ZERO, void 0 !== e.maxGas && null !== e.maxGas ? t.maxGas = e.maxGas : t.maxGas = s.default.ZERO, t
                }
            };
            const se = {
                round: 0
            };
            t.LastCommitInfo = {
                encode(e, n = a.default.Writer.create()) {
                    0 !== e.round && n.uint32(8).int32(e.round);
                    for (const o of e.votes) t.VoteInfo.encode(o, n.uint32(18).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, se);
                    for (i.votes = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.round = o.int32();
                                break;
                            case 2:
                                i.votes.push(t.VoteInfo.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, se);
                    if (n.votes = [], void 0 !== e.round && null !== e.round ? n.round = Number(e.round) : n.round = 0, void 0 !== e.votes && null !== e.votes)
                        for (const o of e.votes) n.votes.push(t.VoteInfo.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.round && (n.round = e.round), e.votes ? n.votes = e.votes.map(e => e ? t.VoteInfo.toJSON(e) : void 0) : n.votes = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, se);
                    if (n.votes = [], void 0 !== e.round && null !== e.round ? n.round = e.round : n.round = 0, void 0 !== e.votes && null !== e.votes)
                        for (const o of e.votes) n.votes.push(t.VoteInfo.fromPartial(o));
                    return n
                }
            };
            const ae = {
                type: ""
            };
            t.Event = {
                encode(e, n = a.default.Writer.create()) {
                    "" !== e.type && n.uint32(10).string(e.type);
                    for (const o of e.attributes) t.EventAttribute.encode(o, n.uint32(18).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, ae);
                    for (i.attributes = []; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.type = o.string();
                                break;
                            case 2:
                                i.attributes.push(t.EventAttribute.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, ae);
                    if (n.attributes = [], void 0 !== e.type && null !== e.type ? n.type = String(e.type) : n.type = "", void 0 !== e.attributes && null !== e.attributes)
                        for (const o of e.attributes) n.attributes.push(t.EventAttribute.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.type && (n.type = e.type), e.attributes ? n.attributes = e.attributes.map(e => e ? t.EventAttribute.toJSON(e) : void 0) : n.attributes = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, ae);
                    if (n.attributes = [], void 0 !== e.type && null !== e.type ? n.type = e.type : n.type = "", void 0 !== e.attributes && null !== e.attributes)
                        for (const o of e.attributes) n.attributes.push(t.EventAttribute.fromPartial(o));
                    return n
                }
            };
            const ie = {
                index: !1
            };
            t.EventAttribute = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.key.length && t.uint32(10).bytes(e.key), 0 !== e.value.length && t.uint32(18).bytes(e.value), !0 === e.index && t.uint32(24).bool(e.index), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, ie);
                    for (s.key = new Uint8Array, s.value = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.key = n.bytes();
                                break;
                            case 2:
                                s.value = n.bytes();
                                break;
                            case 3:
                                s.index = n.bool();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, ie);
                    return t.key = new Uint8Array, t.value = new Uint8Array, void 0 !== e.key && null !== e.key && (t.key = ve(e.key)), void 0 !== e.value && null !== e.value && (t.value = ve(e.value)), void 0 !== e.index && null !== e.index ? t.index = Boolean(e.index) : t.index = !1, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.key && (t.key = ke(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.value && (t.value = ke(void 0 !== e.value ? e.value : new Uint8Array)), void 0 !== e.index && (t.index = e.index), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, ie);
                    return void 0 !== e.key && null !== e.key ? t.key = e.key : t.key = new Uint8Array, void 0 !== e.value && null !== e.value ? t.value = e.value : t.value = new Uint8Array, void 0 !== e.index && null !== e.index ? t.index = e.index : t.index = !1, t
                }
            };
            const re = {
                height: s.default.ZERO,
                index: 0
            };
            t.TxResult = {
                encode: (e, n = a.default.Writer.create()) => (e.height.isZero() || n.uint32(8).int64(e.height), 0 !== e.index && n.uint32(16).uint32(e.index), 0 !== e.tx.length && n.uint32(26).bytes(e.tx), void 0 !== e.result && t.ResponseDeliverTx.encode(e.result, n.uint32(34).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, re);
                    for (i.tx = new Uint8Array; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.height = o.int64();
                                break;
                            case 2:
                                i.index = o.uint32();
                                break;
                            case 3:
                                i.tx = o.bytes();
                                break;
                            case 4:
                                i.result = t.ResponseDeliverTx.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, re);
                    return n.tx = new Uint8Array, void 0 !== e.height && null !== e.height ? n.height = s.default.fromString(e.height) : n.height = s.default.ZERO, void 0 !== e.index && null !== e.index ? n.index = Number(e.index) : n.index = 0, void 0 !== e.tx && null !== e.tx && (n.tx = ve(e.tx)), void 0 !== e.result && null !== e.result ? n.result = t.ResponseDeliverTx.fromJSON(e.result) : n.result = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.height && (n.height = (e.height || s.default.ZERO).toString()), void 0 !== e.index && (n.index = e.index), void 0 !== e.tx && (n.tx = ke(void 0 !== e.tx ? e.tx : new Uint8Array)), void 0 !== e.result && (n.result = e.result ? t.ResponseDeliverTx.toJSON(e.result) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, re);
                    return void 0 !== e.height && null !== e.height ? n.height = e.height : n.height = s.default.ZERO, void 0 !== e.index && null !== e.index ? n.index = e.index : n.index = 0, void 0 !== e.tx && null !== e.tx ? n.tx = e.tx : n.tx = new Uint8Array, void 0 !== e.result && null !== e.result ? n.result = t.ResponseDeliverTx.fromPartial(e.result) : n.result = void 0, n
                }
            };
            const de = {
                power: s.default.ZERO
            };
            t.Validator = {
                encode: (e, t = a.default.Writer.create()) => (0 !== e.address.length && t.uint32(10).bytes(e.address), e.power.isZero() || t.uint32(24).int64(e.power), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, de);
                    for (s.address = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.address = n.bytes();
                                break;
                            case 3:
                                s.power = n.int64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, de);
                    return t.address = new Uint8Array, void 0 !== e.address && null !== e.address && (t.address = ve(e.address)), void 0 !== e.power && null !== e.power ? t.power = s.default.fromString(e.power) : t.power = s.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = ke(void 0 !== e.address ? e.address : new Uint8Array)), void 0 !== e.power && (t.power = (e.power || s.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, de);
                    return void 0 !== e.address && null !== e.address ? t.address = e.address : t.address = new Uint8Array, void 0 !== e.power && null !== e.power ? t.power = e.power : t.power = s.default.ZERO, t
                }
            };
            const le = {
                power: s.default.ZERO
            };
            t.ValidatorUpdate = {
                encode: (e, t = a.default.Writer.create()) => (void 0 !== e.pubKey && l.PublicKey.encode(e.pubKey, t.uint32(10).fork()).ldelim(), e.power.isZero() || t.uint32(16).int64(e.power), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, le);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.pubKey = l.PublicKey.decode(n, n.uint32());
                                break;
                            case 2:
                                s.power = n.int64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, le);
                    return void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = l.PublicKey.fromJSON(e.pubKey) : t.pubKey = void 0, void 0 !== e.power && null !== e.power ? t.power = s.default.fromString(e.power) : t.power = s.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.pubKey && (t.pubKey = e.pubKey ? l.PublicKey.toJSON(e.pubKey) : void 0), void 0 !== e.power && (t.power = (e.power || s.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, le);
                    return void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = l.PublicKey.fromPartial(e.pubKey) : t.pubKey = void 0, void 0 !== e.power && null !== e.power ? t.power = e.power : t.power = s.default.ZERO, t
                }
            };
            const ue = {
                signedLastBlock: !1
            };
            t.VoteInfo = {
                encode: (e, n = a.default.Writer.create()) => (void 0 !== e.validator && t.Validator.encode(e.validator, n.uint32(10).fork()).ldelim(), !0 === e.signedLastBlock && n.uint32(16).bool(e.signedLastBlock), n),
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, ue);
                    for (; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validator = t.Validator.decode(o, o.uint32());
                                break;
                            case 2:
                                i.signedLastBlock = o.bool();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, ue);
                    return void 0 !== e.validator && null !== e.validator ? n.validator = t.Validator.fromJSON(e.validator) : n.validator = void 0, void 0 !== e.signedLastBlock && null !== e.signedLastBlock ? n.signedLastBlock = Boolean(e.signedLastBlock) : n.signedLastBlock = !1, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.validator && (n.validator = e.validator ? t.Validator.toJSON(e.validator) : void 0), void 0 !== e.signedLastBlock && (n.signedLastBlock = e.signedLastBlock), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, ue);
                    return void 0 !== e.validator && null !== e.validator ? n.validator = t.Validator.fromPartial(e.validator) : n.validator = void 0, void 0 !== e.signedLastBlock && null !== e.signedLastBlock ? n.signedLastBlock = e.signedLastBlock : n.signedLastBlock = !1, n
                }
            };
            const ce = {
                type: 0,
                height: s.default.ZERO,
                totalVotingPower: s.default.ZERO
            };
            t.Evidence = {
                encode: (e, n = a.default.Writer.create()) => (0 !== e.type && n.uint32(8).int32(e.type), void 0 !== e.validator && t.Validator.encode(e.validator, n.uint32(18).fork()).ldelim(), e.height.isZero() || n.uint32(24).int64(e.height), void 0 !== e.time && u.Timestamp.encode(ge(e.time), n.uint32(34).fork()).ldelim(), e.totalVotingPower.isZero() || n.uint32(40).int64(e.totalVotingPower), n),
                decode(e, n) {
                    const o = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let s = void 0 === n ? o.len : o.pos + n;
                    const i = Object.assign({}, ce);
                    for (; o.pos < s;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.type = o.int32();
                                break;
                            case 2:
                                i.validator = t.Validator.decode(o, o.uint32());
                                break;
                            case 3:
                                i.height = o.int64();
                                break;
                            case 4:
                                i.time = Oe(u.Timestamp.decode(o, o.uint32()));
                                break;
                            case 5:
                                i.totalVotingPower = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, ce);
                    return void 0 !== e.type && null !== e.type ? n.type = k(e.type) : n.type = 0, void 0 !== e.validator && null !== e.validator ? n.validator = t.Validator.fromJSON(e.validator) : n.validator = void 0, void 0 !== e.height && null !== e.height ? n.height = s.default.fromString(e.height) : n.height = s.default.ZERO, void 0 !== e.time && null !== e.time ? n.time = Se(e.time) : n.time = void 0, void 0 !== e.totalVotingPower && null !== e.totalVotingPower ? n.totalVotingPower = s.default.fromString(e.totalVotingPower) : n.totalVotingPower = s.default.ZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.type && (n.type = g(e.type)), void 0 !== e.validator && (n.validator = e.validator ? t.Validator.toJSON(e.validator) : void 0), void 0 !== e.height && (n.height = (e.height || s.default.ZERO).toString()), void 0 !== e.time && (n.time = e.time.toISOString()), void 0 !== e.totalVotingPower && (n.totalVotingPower = (e.totalVotingPower || s.default.ZERO).toString()), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, ce);
                    return void 0 !== e.type && null !== e.type ? n.type = e.type : n.type = 0, void 0 !== e.validator && null !== e.validator ? n.validator = t.Validator.fromPartial(e.validator) : n.validator = void 0, void 0 !== e.height && null !== e.height ? n.height = e.height : n.height = s.default.ZERO, void 0 !== e.time && null !== e.time ? n.time = e.time : n.time = void 0, void 0 !== e.totalVotingPower && null !== e.totalVotingPower ? n.totalVotingPower = e.totalVotingPower : n.totalVotingPower = s.default.ZERO, n
                }
            };
            const pe = {
                height: s.default.UZERO,
                format: 0,
                chunks: 0
            };
            t.Snapshot = {
                encode: (e, t = a.default.Writer.create()) => (e.height.isZero() || t.uint32(8).uint64(e.height), 0 !== e.format && t.uint32(16).uint32(e.format), 0 !== e.chunks && t.uint32(24).uint32(e.chunks), 0 !== e.hash.length && t.uint32(34).bytes(e.hash), 0 !== e.metadata.length && t.uint32(42).bytes(e.metadata), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, pe);
                    for (s.hash = new Uint8Array, s.metadata = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.height = n.uint64();
                                break;
                            case 2:
                                s.format = n.uint32();
                                break;
                            case 3:
                                s.chunks = n.uint32();
                                break;
                            case 4:
                                s.hash = n.bytes();
                                break;
                            case 5:
                                s.metadata = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, pe);
                    return t.hash = new Uint8Array, t.metadata = new Uint8Array, void 0 !== e.height && null !== e.height ? t.height = s.default.fromString(e.height) : t.height = s.default.UZERO, void 0 !== e.format && null !== e.format ? t.format = Number(e.format) : t.format = 0, void 0 !== e.chunks && null !== e.chunks ? t.chunks = Number(e.chunks) : t.chunks = 0, void 0 !== e.hash && null !== e.hash && (t.hash = ve(e.hash)), void 0 !== e.metadata && null !== e.metadata && (t.metadata = ve(e.metadata)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.height && (t.height = (e.height || s.default.UZERO).toString()), void 0 !== e.format && (t.format = e.format), void 0 !== e.chunks && (t.chunks = e.chunks), void 0 !== e.hash && (t.hash = ke(void 0 !== e.hash ? e.hash : new Uint8Array)), void 0 !== e.metadata && (t.metadata = ke(void 0 !== e.metadata ? e.metadata : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, pe);
                    return void 0 !== e.height && null !== e.height ? t.height = e.height : t.height = s.default.UZERO, void 0 !== e.format && null !== e.format ? t.format = e.format : t.format = 0, void 0 !== e.chunks && null !== e.chunks ? t.chunks = e.chunks : t.chunks = 0, void 0 !== e.hash && null !== e.hash ? t.hash = e.hash : t.hash = new Uint8Array, void 0 !== e.metadata && null !== e.metadata ? t.metadata = e.metadata : t.metadata = new Uint8Array, t
                }
            };
            t.ABCIApplicationClientImpl = class ABCIApplicationClientImpl {
                constructor(e) {
                    this.rpc = e, this.Echo = this.Echo.bind(this), this.Flush = this.Flush.bind(this), this.Info = this.Info.bind(this), this.SetOption = this.SetOption.bind(this), this.DeliverTx = this.DeliverTx.bind(this), this.CheckTx = this.CheckTx.bind(this), this.Query = this.Query.bind(this), this.Commit = this.Commit.bind(this), this.InitChain = this.InitChain.bind(this), this.BeginBlock = this.BeginBlock.bind(this), this.EndBlock = this.EndBlock.bind(this), this.ListSnapshots = this.ListSnapshots.bind(this), this.OfferSnapshot = this.OfferSnapshot.bind(this), this.LoadSnapshotChunk = this.LoadSnapshotChunk.bind(this), this.ApplySnapshotChunk = this.ApplySnapshotChunk.bind(this)
                }
                Echo(e) {
                    const n = t.RequestEcho.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "Echo", n).then(e => t.ResponseEcho.decode(new a.default.Reader(e)))
                }
                Flush(e) {
                    const n = t.RequestFlush.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "Flush", n).then(e => t.ResponseFlush.decode(new a.default.Reader(e)))
                }
                Info(e) {
                    const n = t.RequestInfo.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "Info", n).then(e => t.ResponseInfo.decode(new a.default.Reader(e)))
                }
                SetOption(e) {
                    const n = t.RequestSetOption.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "SetOption", n).then(e => t.ResponseSetOption.decode(new a.default.Reader(e)))
                }
                DeliverTx(e) {
                    const n = t.RequestDeliverTx.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "DeliverTx", n).then(e => t.ResponseDeliverTx.decode(new a.default.Reader(e)))
                }
                CheckTx(e) {
                    const n = t.RequestCheckTx.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "CheckTx", n).then(e => t.ResponseCheckTx.decode(new a.default.Reader(e)))
                }
                Query(e) {
                    const n = t.RequestQuery.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "Query", n).then(e => t.ResponseQuery.decode(new a.default.Reader(e)))
                }
                Commit(e) {
                    const n = t.RequestCommit.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "Commit", n).then(e => t.ResponseCommit.decode(new a.default.Reader(e)))
                }
                InitChain(e) {
                    const n = t.RequestInitChain.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "InitChain", n).then(e => t.ResponseInitChain.decode(new a.default.Reader(e)))
                }
                BeginBlock(e) {
                    const n = t.RequestBeginBlock.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "BeginBlock", n).then(e => t.ResponseBeginBlock.decode(new a.default.Reader(e)))
                }
                EndBlock(e) {
                    const n = t.RequestEndBlock.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "EndBlock", n).then(e => t.ResponseEndBlock.decode(new a.default.Reader(e)))
                }
                ListSnapshots(e) {
                    const n = t.RequestListSnapshots.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "ListSnapshots", n).then(e => t.ResponseListSnapshots.decode(new a.default.Reader(e)))
                }
                OfferSnapshot(e) {
                    const n = t.RequestOfferSnapshot.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "OfferSnapshot", n).then(e => t.ResponseOfferSnapshot.decode(new a.default.Reader(e)))
                }
                LoadSnapshotChunk(e) {
                    const n = t.RequestLoadSnapshotChunk.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "LoadSnapshotChunk", n).then(e => t.ResponseLoadSnapshotChunk.decode(new a.default.Reader(e)))
                }
                ApplySnapshotChunk(e) {
                    const n = t.RequestApplySnapshotChunk.encode(e).finish();
                    return this.rpc.request("tendermint.abci.ABCIApplication", "ApplySnapshotChunk", n).then(e => t.ResponseApplySnapshotChunk.decode(new a.default.Reader(e)))
                }
            };
            var he = (() => {
                if (void 0 !== he) return he;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const fe = he.atob || (e => he.Buffer.from(e, "base64").toString("binary"));

            function ve(e) {
                const t = fe(e),
                    n = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                return n
            }
            const me = he.btoa || (e => he.Buffer.from(e, "binary").toString("base64"));

            function ke(e) {
                const t = [];
                for (const n of e) t.push(String.fromCharCode(n));
                return me(t.join(""))
            }

            function ge(e) {
                var t;
                return {
                    seconds: (t = e.getTime() / 1e3, s.default.fromNumber(t)),
                    nanos: e.getTime() % 1e3 * 1e6
                }
            }

            function Oe(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }

            function Se(e) {
                return e instanceof Date ? e : "string" == typeof e ? new Date(e) : Oe(u.Timestamp.fromJSON(e))
            }
            a.default.util.Long !== s.default && (a.default.util.Long = s.default, a.default.configure())
        },
        635: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Timestamp = t.protobufPackage = void 0;
            const s = o(n(1)),
                a = o(n(8));
            t.protobufPackage = "google.protobuf";
            const i = {
                seconds: s.default.ZERO,
                nanos: 0
            };
            t.Timestamp = {
                encode: (e, t = a.default.Writer.create()) => (e.seconds.isZero() || t.uint32(8).int64(e.seconds), 0 !== e.nanos && t.uint32(16).int32(e.nanos), t),
                decode(e, t) {
                    const n = e instanceof a.default.Reader ? e : new a.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const s = Object.assign({}, i);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.seconds = n.int64();
                                break;
                            case 2:
                                s.nanos = n.int32();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, i);
                    return void 0 !== e.seconds && null !== e.seconds ? t.seconds = s.default.fromString(e.seconds) : t.seconds = s.default.ZERO, void 0 !== e.nanos && null !== e.nanos ? t.nanos = Number(e.nanos) : t.nanos = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.seconds && (t.seconds = (e.seconds || s.default.ZERO).toString()), void 0 !== e.nanos && (t.nanos = e.nanos), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, i);
                    return void 0 !== e.seconds && null !== e.seconds ? t.seconds = e.seconds : t.seconds = s.default.ZERO, void 0 !== e.nanos && null !== e.nanos ? t.nanos = e.nanos : t.nanos = 0, t
                }
            }, a.default.util.Long !== s.default && (a.default.util.Long = s.default, a.default.configure())
        }
    }
]);