(window.webpackJsonp = window.webpackJsonp || []).push([
    [48], {
        1149: function(e, n, t) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Acknowledgement = n.PacketState = n.Packet = n.Counterparty = n.IdentifiedChannel = n.Channel = n.orderToJSON = n.orderFromJSON = n.Order = n.stateToJSON = n.stateFromJSON = n.State = n.protobufPackage = void 0;
            const i = o(t(1)),
                r = o(t(8)),
                s = t(296);
            var a, c;

            function d(e) {
                switch (e) {
                    case 0:
                    case "STATE_UNINITIALIZED_UNSPECIFIED":
                        return a.STATE_UNINITIALIZED_UNSPECIFIED;
                    case 1:
                    case "STATE_INIT":
                        return a.STATE_INIT;
                    case 2:
                    case "STATE_TRYOPEN":
                        return a.STATE_TRYOPEN;
                    case 3:
                    case "STATE_OPEN":
                        return a.STATE_OPEN;
                    case 4:
                    case "STATE_CLOSED":
                        return a.STATE_CLOSED;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return a.UNRECOGNIZED
                }
            }

            function l(e) {
                switch (e) {
                    case a.STATE_UNINITIALIZED_UNSPECIFIED:
                        return "STATE_UNINITIALIZED_UNSPECIFIED";
                    case a.STATE_INIT:
                        return "STATE_INIT";
                    case a.STATE_TRYOPEN:
                        return "STATE_TRYOPEN";
                    case a.STATE_OPEN:
                        return "STATE_OPEN";
                    case a.STATE_CLOSED:
                        return "STATE_CLOSED";
                    default:
                        return "UNKNOWN"
                }
            }

            function u(e) {
                switch (e) {
                    case 0:
                    case "ORDER_NONE_UNSPECIFIED":
                        return c.ORDER_NONE_UNSPECIFIED;
                    case 1:
                    case "ORDER_UNORDERED":
                        return c.ORDER_UNORDERED;
                    case 2:
                    case "ORDER_ORDERED":
                        return c.ORDER_ORDERED;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return c.UNRECOGNIZED
                }
            }

            function p(e) {
                switch (e) {
                    case c.ORDER_NONE_UNSPECIFIED:
                        return "ORDER_NONE_UNSPECIFIED";
                    case c.ORDER_UNORDERED:
                        return "ORDER_UNORDERED";
                    case c.ORDER_ORDERED:
                        return "ORDER_ORDERED";
                    default:
                        return "UNKNOWN"
                }
            }
            n.protobufPackage = "ibc.core.channel.v1",
                function(e) {
                    e[e.STATE_UNINITIALIZED_UNSPECIFIED = 0] = "STATE_UNINITIALIZED_UNSPECIFIED", e[e.STATE_INIT = 1] = "STATE_INIT", e[e.STATE_TRYOPEN = 2] = "STATE_TRYOPEN", e[e.STATE_OPEN = 3] = "STATE_OPEN", e[e.STATE_CLOSED = 4] = "STATE_CLOSED", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(a = n.State || (n.State = {})), n.stateFromJSON = d, n.stateToJSON = l,
                function(e) {
                    e[e.ORDER_NONE_UNSPECIFIED = 0] = "ORDER_NONE_UNSPECIFIED", e[e.ORDER_UNORDERED = 1] = "ORDER_UNORDERED", e[e.ORDER_ORDERED = 2] = "ORDER_ORDERED", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(c = n.Order || (n.Order = {})), n.orderFromJSON = u, n.orderToJSON = p;
            const f = {
                state: 0,
                ordering: 0,
                connectionHops: "",
                version: ""
            };
            n.Channel = {
                encode(e, t = r.default.Writer.create()) {
                    0 !== e.state && t.uint32(8).int32(e.state), 0 !== e.ordering && t.uint32(16).int32(e.ordering), void 0 !== e.counterparty && n.Counterparty.encode(e.counterparty, t.uint32(26).fork()).ldelim();
                    for (const n of e.connectionHops) t.uint32(34).string(n);
                    return "" !== e.version && t.uint32(42).string(e.version), t
                },
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === t ? o.len : o.pos + t;
                    const s = Object.assign({}, f);
                    for (s.connectionHops = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.state = o.int32();
                                break;
                            case 2:
                                s.ordering = o.int32();
                                break;
                            case 3:
                                s.counterparty = n.Counterparty.decode(o, o.uint32());
                                break;
                            case 4:
                                s.connectionHops.push(o.string());
                                break;
                            case 5:
                                s.version = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.connectionHops = [], void 0 !== e.state && null !== e.state ? t.state = d(e.state) : t.state = 0, void 0 !== e.ordering && null !== e.ordering ? t.ordering = u(e.ordering) : t.ordering = 0, void 0 !== e.counterparty && null !== e.counterparty ? t.counterparty = n.Counterparty.fromJSON(e.counterparty) : t.counterparty = void 0, void 0 !== e.connectionHops && null !== e.connectionHops)
                        for (const n of e.connectionHops) t.connectionHops.push(String(n));
                    return void 0 !== e.version && null !== e.version ? t.version = String(e.version) : t.version = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.state && (t.state = l(e.state)), void 0 !== e.ordering && (t.ordering = p(e.ordering)), void 0 !== e.counterparty && (t.counterparty = e.counterparty ? n.Counterparty.toJSON(e.counterparty) : void 0), e.connectionHops ? t.connectionHops = e.connectionHops.map(e => e) : t.connectionHops = [], void 0 !== e.version && (t.version = e.version), t
                },
                fromPartial(e) {
                    var t, o, i;
                    const r = Object.assign({}, f);
                    if (r.state = null !== (t = e.state) && void 0 !== t ? t : 0, r.ordering = null !== (o = e.ordering) && void 0 !== o ? o : 0, void 0 !== e.counterparty && null !== e.counterparty ? r.counterparty = n.Counterparty.fromPartial(e.counterparty) : r.counterparty = void 0, r.connectionHops = [], void 0 !== e.connectionHops && null !== e.connectionHops)
                        for (const n of e.connectionHops) r.connectionHops.push(n);
                    return r.version = null !== (i = e.version) && void 0 !== i ? i : "", r
                }
            };
            const g = {
                state: 0,
                ordering: 0,
                connectionHops: "",
                version: "",
                portId: "",
                channelId: ""
            };
            n.IdentifiedChannel = {
                encode(e, t = r.default.Writer.create()) {
                    0 !== e.state && t.uint32(8).int32(e.state), 0 !== e.ordering && t.uint32(16).int32(e.ordering), void 0 !== e.counterparty && n.Counterparty.encode(e.counterparty, t.uint32(26).fork()).ldelim();
                    for (const n of e.connectionHops) t.uint32(34).string(n);
                    return "" !== e.version && t.uint32(42).string(e.version), "" !== e.portId && t.uint32(50).string(e.portId), "" !== e.channelId && t.uint32(58).string(e.channelId), t
                },
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === t ? o.len : o.pos + t;
                    const s = Object.assign({}, g);
                    for (s.connectionHops = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.state = o.int32();
                                break;
                            case 2:
                                s.ordering = o.int32();
                                break;
                            case 3:
                                s.counterparty = n.Counterparty.decode(o, o.uint32());
                                break;
                            case 4:
                                s.connectionHops.push(o.string());
                                break;
                            case 5:
                                s.version = o.string();
                                break;
                            case 6:
                                s.portId = o.string();
                                break;
                            case 7:
                                s.channelId = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    if (t.connectionHops = [], void 0 !== e.state && null !== e.state ? t.state = d(e.state) : t.state = 0, void 0 !== e.ordering && null !== e.ordering ? t.ordering = u(e.ordering) : t.ordering = 0, void 0 !== e.counterparty && null !== e.counterparty ? t.counterparty = n.Counterparty.fromJSON(e.counterparty) : t.counterparty = void 0, void 0 !== e.connectionHops && null !== e.connectionHops)
                        for (const n of e.connectionHops) t.connectionHops.push(String(n));
                    return void 0 !== e.version && null !== e.version ? t.version = String(e.version) : t.version = "", void 0 !== e.portId && null !== e.portId ? t.portId = String(e.portId) : t.portId = "", void 0 !== e.channelId && null !== e.channelId ? t.channelId = String(e.channelId) : t.channelId = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.state && (t.state = l(e.state)), void 0 !== e.ordering && (t.ordering = p(e.ordering)), void 0 !== e.counterparty && (t.counterparty = e.counterparty ? n.Counterparty.toJSON(e.counterparty) : void 0), e.connectionHops ? t.connectionHops = e.connectionHops.map(e => e) : t.connectionHops = [], void 0 !== e.version && (t.version = e.version), void 0 !== e.portId && (t.portId = e.portId), void 0 !== e.channelId && (t.channelId = e.channelId), t
                },
                fromPartial(e) {
                    var t, o, i, r, s;
                    const a = Object.assign({}, g);
                    if (a.state = null !== (t = e.state) && void 0 !== t ? t : 0, a.ordering = null !== (o = e.ordering) && void 0 !== o ? o : 0, void 0 !== e.counterparty && null !== e.counterparty ? a.counterparty = n.Counterparty.fromPartial(e.counterparty) : a.counterparty = void 0, a.connectionHops = [], void 0 !== e.connectionHops && null !== e.connectionHops)
                        for (const n of e.connectionHops) a.connectionHops.push(n);
                    return a.version = null !== (i = e.version) && void 0 !== i ? i : "", a.portId = null !== (r = e.portId) && void 0 !== r ? r : "", a.channelId = null !== (s = e.channelId) && void 0 !== s ? s : "", a
                }
            };
            const h = {
                portId: "",
                channelId: ""
            };
            n.Counterparty = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, h);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, h);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, h);
                    return o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", o
                }
            };
            const v = {
                sequence: i.default.UZERO,
                sourcePort: "",
                sourceChannel: "",
                destinationPort: "",
                destinationChannel: "",
                timeoutTimestamp: i.default.UZERO
            };
            n.Packet = {
                encode: (e, n = r.default.Writer.create()) => (e.sequence.isZero() || n.uint32(8).uint64(e.sequence), "" !== e.sourcePort && n.uint32(18).string(e.sourcePort), "" !== e.sourceChannel && n.uint32(26).string(e.sourceChannel), "" !== e.destinationPort && n.uint32(34).string(e.destinationPort), "" !== e.destinationChannel && n.uint32(42).string(e.destinationChannel), 0 !== e.data.length && n.uint32(50).bytes(e.data), void 0 !== e.timeoutHeight && s.Height.encode(e.timeoutHeight, n.uint32(58).fork()).ldelim(), e.timeoutTimestamp.isZero() || n.uint32(64).uint64(e.timeoutTimestamp), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, v);
                    for (i.data = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.sequence = t.uint64();
                                break;
                            case 2:
                                i.sourcePort = t.string();
                                break;
                            case 3:
                                i.sourceChannel = t.string();
                                break;
                            case 4:
                                i.destinationPort = t.string();
                                break;
                            case 5:
                                i.destinationChannel = t.string();
                                break;
                            case 6:
                                i.data = t.bytes();
                                break;
                            case 7:
                                i.timeoutHeight = s.Height.decode(t, t.uint32());
                                break;
                            case 8:
                                i.timeoutTimestamp = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, v);
                    return n.data = new Uint8Array, void 0 !== e.sequence && null !== e.sequence ? n.sequence = i.default.fromString(e.sequence) : n.sequence = i.default.UZERO, void 0 !== e.sourcePort && null !== e.sourcePort ? n.sourcePort = String(e.sourcePort) : n.sourcePort = "", void 0 !== e.sourceChannel && null !== e.sourceChannel ? n.sourceChannel = String(e.sourceChannel) : n.sourceChannel = "", void 0 !== e.destinationPort && null !== e.destinationPort ? n.destinationPort = String(e.destinationPort) : n.destinationPort = "", void 0 !== e.destinationChannel && null !== e.destinationChannel ? n.destinationChannel = String(e.destinationChannel) : n.destinationChannel = "", void 0 !== e.data && null !== e.data && (n.data = O(e.data)), void 0 !== e.timeoutHeight && null !== e.timeoutHeight ? n.timeoutHeight = s.Height.fromJSON(e.timeoutHeight) : n.timeoutHeight = void 0, void 0 !== e.timeoutTimestamp && null !== e.timeoutTimestamp ? n.timeoutTimestamp = i.default.fromString(e.timeoutTimestamp) : n.timeoutTimestamp = i.default.UZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.sequence && (n.sequence = (e.sequence || i.default.UZERO).toString()), void 0 !== e.sourcePort && (n.sourcePort = e.sourcePort), void 0 !== e.sourceChannel && (n.sourceChannel = e.sourceChannel), void 0 !== e.destinationPort && (n.destinationPort = e.destinationPort), void 0 !== e.destinationChannel && (n.destinationChannel = e.destinationChannel), void 0 !== e.data && (n.data = R(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.timeoutHeight && (n.timeoutHeight = e.timeoutHeight ? s.Height.toJSON(e.timeoutHeight) : void 0), void 0 !== e.timeoutTimestamp && (n.timeoutTimestamp = (e.timeoutTimestamp || i.default.UZERO).toString()), n
                },
                fromPartial(e) {
                    var n, t, o, r, a;
                    const c = Object.assign({}, v);
                    return void 0 !== e.sequence && null !== e.sequence ? c.sequence = e.sequence : c.sequence = i.default.UZERO, c.sourcePort = null !== (n = e.sourcePort) && void 0 !== n ? n : "", c.sourceChannel = null !== (t = e.sourceChannel) && void 0 !== t ? t : "", c.destinationPort = null !== (o = e.destinationPort) && void 0 !== o ? o : "", c.destinationChannel = null !== (r = e.destinationChannel) && void 0 !== r ? r : "", c.data = null !== (a = e.data) && void 0 !== a ? a : new Uint8Array, void 0 !== e.timeoutHeight && null !== e.timeoutHeight ? c.timeoutHeight = s.Height.fromPartial(e.timeoutHeight) : c.timeoutHeight = void 0, void 0 !== e.timeoutTimestamp && null !== e.timeoutTimestamp ? c.timeoutTimestamp = e.timeoutTimestamp : c.timeoutTimestamp = i.default.UZERO, c
                }
            };
            const m = {
                portId: "",
                channelId: "",
                sequence: i.default.UZERO
            };
            n.PacketState = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), e.sequence.isZero() || n.uint32(24).uint64(e.sequence), 0 !== e.data.length && n.uint32(34).bytes(e.data), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, m);
                    for (i.data = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                i.sequence = t.uint64();
                                break;
                            case 4:
                                i.data = t.bytes();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, m);
                    return n.data = new Uint8Array, void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.sequence && null !== e.sequence ? n.sequence = i.default.fromString(e.sequence) : n.sequence = i.default.UZERO, void 0 !== e.data && null !== e.data && (n.data = O(e.data)), n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), void 0 !== e.sequence && (n.sequence = (e.sequence || i.default.UZERO).toString()), void 0 !== e.data && (n.data = R(void 0 !== e.data ? e.data : new Uint8Array)), n
                },
                fromPartial(e) {
                    var n, t, o;
                    const r = Object.assign({}, m);
                    return r.portId = null !== (n = e.portId) && void 0 !== n ? n : "", r.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", void 0 !== e.sequence && null !== e.sequence ? r.sequence = e.sequence : r.sequence = i.default.UZERO, r.data = null !== (o = e.data) && void 0 !== o ? o : new Uint8Array, r
                }
            };
            const S = {};
            n.Acknowledgement = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.result && n.uint32(170).bytes(e.result), void 0 !== e.error && n.uint32(178).string(e.error), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, S);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 21:
                                i.result = t.bytes();
                                break;
                            case 22:
                                i.error = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, S);
                    return void 0 !== e.result && null !== e.result && (n.result = O(e.result)), void 0 !== e.error && null !== e.error ? n.error = String(e.error) : n.error = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.result && (n.result = void 0 !== e.result ? R(e.result) : void 0), void 0 !== e.error && (n.error = e.error), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, S);
                    return o.result = null !== (n = e.result) && void 0 !== n ? n : void 0, o.error = null !== (t = e.error) && void 0 !== t ? t : void 0, o
                }
            };
            var I = (() => {
                if (void 0 !== I) return I;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const b = I.atob || (e => I.Buffer.from(e, "base64").toString("binary"));

            function O(e) {
                const n = b(e),
                    t = new Uint8Array(n.length);
                for (let e = 0; e < n.length; ++e) t[e] = n.charCodeAt(e);
                return t
            }
            const k = I.btoa || (e => I.Buffer.from(e, "binary").toString("base64"));

            function R(e) {
                const n = [];
                for (const t of e) n.push(String.fromCharCode(t));
                return k(n.join(""))
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        296: function(e, n, t) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Params = n.Height = n.ClientUpdateProposal = n.ClientConsensusStates = n.ConsensusStateWithHeight = n.IdentifiedClientState = n.protobufPackage = void 0;
            const i = o(t(1)),
                r = o(t(8)),
                s = t(113);
            n.protobufPackage = "ibc.core.client.v1";
            const a = {
                clientId: ""
            };
            n.IdentifiedClientState = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.clientId && n.uint32(10).string(e.clientId), void 0 !== e.clientState && s.Any.encode(e.clientState, n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, a);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = t.string();
                                break;
                            case 2:
                                i.clientState = s.Any.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, a);
                    return void 0 !== e.clientId && null !== e.clientId ? n.clientId = String(e.clientId) : n.clientId = "", void 0 !== e.clientState && null !== e.clientState ? n.clientState = s.Any.fromJSON(e.clientState) : n.clientState = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.clientId && (n.clientId = e.clientId), void 0 !== e.clientState && (n.clientState = e.clientState ? s.Any.toJSON(e.clientState) : void 0), n
                },
                fromPartial(e) {
                    var n;
                    const t = Object.assign({}, a);
                    return t.clientId = null !== (n = e.clientId) && void 0 !== n ? n : "", void 0 !== e.clientState && null !== e.clientState ? t.clientState = s.Any.fromPartial(e.clientState) : t.clientState = void 0, t
                }
            };
            const c = {};
            n.ConsensusStateWithHeight = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.height && n.Height.encode(e.height, t.uint32(10).fork()).ldelim(), void 0 !== e.consensusState && s.Any.encode(e.consensusState, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === t ? o.len : o.pos + t;
                    const a = Object.assign({}, c);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.height = n.Height.decode(o, o.uint32());
                                break;
                            case 2:
                                a.consensusState = s.Any.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.height && null !== e.height ? t.height = n.Height.fromJSON(e.height) : t.height = void 0, void 0 !== e.consensusState && null !== e.consensusState ? t.consensusState = s.Any.fromJSON(e.consensusState) : t.consensusState = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.height && (t.height = e.height ? n.Height.toJSON(e.height) : void 0), void 0 !== e.consensusState && (t.consensusState = e.consensusState ? s.Any.toJSON(e.consensusState) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.height && null !== e.height ? t.height = n.Height.fromPartial(e.height) : t.height = void 0, void 0 !== e.consensusState && null !== e.consensusState ? t.consensusState = s.Any.fromPartial(e.consensusState) : t.consensusState = void 0, t
                }
            };
            const d = {
                clientId: ""
            };
            n.ClientConsensusStates = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.clientId && t.uint32(10).string(e.clientId);
                    for (const o of e.consensusStates) n.ConsensusStateWithHeight.encode(o, t.uint32(18).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === t ? o.len : o.pos + t;
                    const s = Object.assign({}, d);
                    for (s.consensusStates = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.clientId = o.string();
                                break;
                            case 2:
                                s.consensusStates.push(n.ConsensusStateWithHeight.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    if (t.consensusStates = [], void 0 !== e.clientId && null !== e.clientId ? t.clientId = String(e.clientId) : t.clientId = "", void 0 !== e.consensusStates && null !== e.consensusStates)
                        for (const o of e.consensusStates) t.consensusStates.push(n.ConsensusStateWithHeight.fromJSON(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.clientId && (t.clientId = e.clientId), e.consensusStates ? t.consensusStates = e.consensusStates.map(e => e ? n.ConsensusStateWithHeight.toJSON(e) : void 0) : t.consensusStates = [], t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, d);
                    if (o.clientId = null !== (t = e.clientId) && void 0 !== t ? t : "", o.consensusStates = [], void 0 !== e.consensusStates && null !== e.consensusStates)
                        for (const t of e.consensusStates) o.consensusStates.push(n.ConsensusStateWithHeight.fromPartial(t));
                    return o
                }
            };
            const l = {
                title: "",
                description: "",
                clientId: ""
            };
            n.ClientUpdateProposal = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.title && n.uint32(10).string(e.title), "" !== e.description && n.uint32(18).string(e.description), "" !== e.clientId && n.uint32(26).string(e.clientId), void 0 !== e.header && s.Any.encode(e.header, n.uint32(34).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, l);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = t.string();
                                break;
                            case 2:
                                i.description = t.string();
                                break;
                            case 3:
                                i.clientId = t.string();
                                break;
                            case 4:
                                i.header = s.Any.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, l);
                    return void 0 !== e.title && null !== e.title ? n.title = String(e.title) : n.title = "", void 0 !== e.description && null !== e.description ? n.description = String(e.description) : n.description = "", void 0 !== e.clientId && null !== e.clientId ? n.clientId = String(e.clientId) : n.clientId = "", void 0 !== e.header && null !== e.header ? n.header = s.Any.fromJSON(e.header) : n.header = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.title && (n.title = e.title), void 0 !== e.description && (n.description = e.description), void 0 !== e.clientId && (n.clientId = e.clientId), void 0 !== e.header && (n.header = e.header ? s.Any.toJSON(e.header) : void 0), n
                },
                fromPartial(e) {
                    var n, t, o;
                    const i = Object.assign({}, l);
                    return i.title = null !== (n = e.title) && void 0 !== n ? n : "", i.description = null !== (t = e.description) && void 0 !== t ? t : "", i.clientId = null !== (o = e.clientId) && void 0 !== o ? o : "", void 0 !== e.header && null !== e.header ? i.header = s.Any.fromPartial(e.header) : i.header = void 0, i
                }
            };
            const u = {
                revisionNumber: i.default.UZERO,
                revisionHeight: i.default.UZERO
            };
            n.Height = {
                encode: (e, n = r.default.Writer.create()) => (e.revisionNumber.isZero() || n.uint32(8).uint64(e.revisionNumber), e.revisionHeight.isZero() || n.uint32(16).uint64(e.revisionHeight), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, u);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.revisionNumber = t.uint64();
                                break;
                            case 2:
                                i.revisionHeight = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, u);
                    return void 0 !== e.revisionNumber && null !== e.revisionNumber ? n.revisionNumber = i.default.fromString(e.revisionNumber) : n.revisionNumber = i.default.UZERO, void 0 !== e.revisionHeight && null !== e.revisionHeight ? n.revisionHeight = i.default.fromString(e.revisionHeight) : n.revisionHeight = i.default.UZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.revisionNumber && (n.revisionNumber = (e.revisionNumber || i.default.UZERO).toString()), void 0 !== e.revisionHeight && (n.revisionHeight = (e.revisionHeight || i.default.UZERO).toString()), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, u);
                    return void 0 !== e.revisionNumber && null !== e.revisionNumber ? n.revisionNumber = e.revisionNumber : n.revisionNumber = i.default.UZERO, void 0 !== e.revisionHeight && null !== e.revisionHeight ? n.revisionHeight = e.revisionHeight : n.revisionHeight = i.default.UZERO, n
                }
            };
            const p = {
                allowedClients: ""
            };
            n.Params = {
                encode(e, n = r.default.Writer.create()) {
                    for (const t of e.allowedClients) n.uint32(10).string(t);
                    return n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, p);
                    for (i.allowedClients = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.allowedClients.push(t.string());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, p);
                    if (n.allowedClients = [], void 0 !== e.allowedClients && null !== e.allowedClients)
                        for (const t of e.allowedClients) n.allowedClients.push(String(t));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.allowedClients ? n.allowedClients = e.allowedClients.map(e => e) : n.allowedClients = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, p);
                    if (n.allowedClients = [], void 0 !== e.allowedClients && null !== e.allowedClients)
                        for (const t of e.allowedClients) n.allowedClients.push(t);
                    return n
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4329: function(e, n, t) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.QueryClientImpl = n.QueryParamsResponse = n.QueryParamsRequest = n.QueryDenomTracesResponse = n.QueryDenomTracesRequest = n.QueryDenomTraceResponse = n.QueryDenomTraceRequest = n.protobufPackage = void 0;
            const i = o(t(1)),
                r = o(t(8)),
                s = t(4330),
                a = t(295);
            n.protobufPackage = "ibc.applications.transfer.v1";
            const c = {
                hash: ""
            };
            n.QueryDenomTraceRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.hash && n.uint32(10).string(e.hash), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, c);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.hash = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, c);
                    return void 0 !== e.hash && null !== e.hash ? n.hash = String(e.hash) : n.hash = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.hash && (n.hash = e.hash), n
                },
                fromPartial(e) {
                    var n;
                    const t = Object.assign({}, c);
                    return t.hash = null !== (n = e.hash) && void 0 !== n ? n : "", t
                }
            };
            const d = {};
            n.QueryDenomTraceResponse = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.denomTrace && s.DenomTrace.encode(e.denomTrace, n.uint32(10).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, d);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.denomTrace = s.DenomTrace.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, d);
                    return void 0 !== e.denomTrace && null !== e.denomTrace ? n.denomTrace = s.DenomTrace.fromJSON(e.denomTrace) : n.denomTrace = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.denomTrace && (n.denomTrace = e.denomTrace ? s.DenomTrace.toJSON(e.denomTrace) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, d);
                    return void 0 !== e.denomTrace && null !== e.denomTrace ? n.denomTrace = s.DenomTrace.fromPartial(e.denomTrace) : n.denomTrace = void 0, n
                }
            };
            const l = {};
            n.QueryDenomTracesRequest = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.pagination && a.PageRequest.encode(e.pagination, n.uint32(10).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, l);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.pagination = a.PageRequest.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, l);
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = a.PageRequest.fromJSON(e.pagination) : n.pagination = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.pagination && (n.pagination = e.pagination ? a.PageRequest.toJSON(e.pagination) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, l);
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = a.PageRequest.fromPartial(e.pagination) : n.pagination = void 0, n
                }
            };
            const u = {};
            n.QueryDenomTracesResponse = {
                encode(e, n = r.default.Writer.create()) {
                    for (const t of e.denomTraces) s.DenomTrace.encode(t, n.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && a.PageResponse.encode(e.pagination, n.uint32(18).fork()).ldelim(), n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, u);
                    for (i.denomTraces = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.denomTraces.push(s.DenomTrace.decode(t, t.uint32()));
                                break;
                            case 2:
                                i.pagination = a.PageResponse.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, u);
                    if (n.denomTraces = [], void 0 !== e.denomTraces && null !== e.denomTraces)
                        for (const t of e.denomTraces) n.denomTraces.push(s.DenomTrace.fromJSON(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = a.PageResponse.fromJSON(e.pagination) : n.pagination = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return e.denomTraces ? n.denomTraces = e.denomTraces.map(e => e ? s.DenomTrace.toJSON(e) : void 0) : n.denomTraces = [], void 0 !== e.pagination && (n.pagination = e.pagination ? a.PageResponse.toJSON(e.pagination) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, u);
                    if (n.denomTraces = [], void 0 !== e.denomTraces && null !== e.denomTraces)
                        for (const t of e.denomTraces) n.denomTraces.push(s.DenomTrace.fromPartial(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = a.PageResponse.fromPartial(e.pagination) : n.pagination = void 0, n
                }
            };
            const p = {};
            n.QueryParamsRequest = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, p);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, p),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, p)
            };
            const f = {};
            n.QueryParamsResponse = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.params && s.Params.encode(e.params, n.uint32(10).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, f);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.params = s.Params.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, f);
                    return void 0 !== e.params && null !== e.params ? n.params = s.Params.fromJSON(e.params) : n.params = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.params && (n.params = e.params ? s.Params.toJSON(e.params) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, f);
                    return void 0 !== e.params && null !== e.params ? n.params = s.Params.fromPartial(e.params) : n.params = void 0, n
                }
            };
            n.QueryClientImpl = class QueryClientImpl {
                constructor(e) {
                    this.rpc = e, this.DenomTrace = this.DenomTrace.bind(this), this.DenomTraces = this.DenomTraces.bind(this), this.Params = this.Params.bind(this)
                }
                DenomTrace(e) {
                    const t = n.QueryDenomTraceRequest.encode(e).finish();
                    return this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", t).then(e => n.QueryDenomTraceResponse.decode(new r.default.Reader(e)))
                }
                DenomTraces(e) {
                    const t = n.QueryDenomTracesRequest.encode(e).finish();
                    return this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", t).then(e => n.QueryDenomTracesResponse.decode(new r.default.Reader(e)))
                }
                Params(e) {
                    const t = n.QueryParamsRequest.encode(e).finish();
                    return this.rpc.request("ibc.applications.transfer.v1.Query", "Params", t).then(e => n.QueryParamsResponse.decode(new r.default.Reader(e)))
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4330: function(e, n, t) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.Params = n.DenomTrace = n.FungibleTokenPacketData = n.protobufPackage = void 0;
            const i = o(t(1)),
                r = o(t(8));
            n.protobufPackage = "ibc.applications.transfer.v1";
            const s = {
                denom: "",
                amount: i.default.UZERO,
                sender: "",
                receiver: ""
            };
            n.FungibleTokenPacketData = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.denom && n.uint32(10).string(e.denom), e.amount.isZero() || n.uint32(16).uint64(e.amount), "" !== e.sender && n.uint32(26).string(e.sender), "" !== e.receiver && n.uint32(34).string(e.receiver), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, s);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.denom = t.string();
                                break;
                            case 2:
                                i.amount = t.uint64();
                                break;
                            case 3:
                                i.sender = t.string();
                                break;
                            case 4:
                                i.receiver = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, s);
                    return void 0 !== e.denom && null !== e.denom ? n.denom = String(e.denom) : n.denom = "", void 0 !== e.amount && null !== e.amount ? n.amount = i.default.fromString(e.amount) : n.amount = i.default.UZERO, void 0 !== e.sender && null !== e.sender ? n.sender = String(e.sender) : n.sender = "", void 0 !== e.receiver && null !== e.receiver ? n.receiver = String(e.receiver) : n.receiver = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.denom && (n.denom = e.denom), void 0 !== e.amount && (n.amount = (e.amount || i.default.UZERO).toString()), void 0 !== e.sender && (n.sender = e.sender), void 0 !== e.receiver && (n.receiver = e.receiver), n
                },
                fromPartial(e) {
                    var n, t, o;
                    const r = Object.assign({}, s);
                    return r.denom = null !== (n = e.denom) && void 0 !== n ? n : "", void 0 !== e.amount && null !== e.amount ? r.amount = e.amount : r.amount = i.default.UZERO, r.sender = null !== (t = e.sender) && void 0 !== t ? t : "", r.receiver = null !== (o = e.receiver) && void 0 !== o ? o : "", r
                }
            };
            const a = {
                path: "",
                baseDenom: ""
            };
            n.DenomTrace = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.path && n.uint32(10).string(e.path), "" !== e.baseDenom && n.uint32(18).string(e.baseDenom), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, a);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.path = t.string();
                                break;
                            case 2:
                                i.baseDenom = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, a);
                    return void 0 !== e.path && null !== e.path ? n.path = String(e.path) : n.path = "", void 0 !== e.baseDenom && null !== e.baseDenom ? n.baseDenom = String(e.baseDenom) : n.baseDenom = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.path && (n.path = e.path), void 0 !== e.baseDenom && (n.baseDenom = e.baseDenom), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, a);
                    return o.path = null !== (n = e.path) && void 0 !== n ? n : "", o.baseDenom = null !== (t = e.baseDenom) && void 0 !== t ? t : "", o
                }
            };
            const c = {
                sendEnabled: !1,
                receiveEnabled: !1
            };
            n.Params = {
                encode: (e, n = r.default.Writer.create()) => (!0 === e.sendEnabled && n.uint32(8).bool(e.sendEnabled), !0 === e.receiveEnabled && n.uint32(16).bool(e.receiveEnabled), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, c);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.sendEnabled = t.bool();
                                break;
                            case 2:
                                i.receiveEnabled = t.bool();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, c);
                    return void 0 !== e.sendEnabled && null !== e.sendEnabled ? n.sendEnabled = Boolean(e.sendEnabled) : n.sendEnabled = !1, void 0 !== e.receiveEnabled && null !== e.receiveEnabled ? n.receiveEnabled = Boolean(e.receiveEnabled) : n.receiveEnabled = !1, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.sendEnabled && (n.sendEnabled = e.sendEnabled), void 0 !== e.receiveEnabled && (n.receiveEnabled = e.receiveEnabled), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, c);
                    return o.sendEnabled = null !== (n = e.sendEnabled) && void 0 !== n && n, o.receiveEnabled = null !== (t = e.receiveEnabled) && void 0 !== t && t, o
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4331: function(e, n, t) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.QueryClientImpl = n.QueryNextSequenceReceiveResponse = n.QueryNextSequenceReceiveRequest = n.QueryUnreceivedAcksResponse = n.QueryUnreceivedAcksRequest = n.QueryUnreceivedPacketsResponse = n.QueryUnreceivedPacketsRequest = n.QueryPacketAcknowledgementsResponse = n.QueryPacketAcknowledgementsRequest = n.QueryPacketAcknowledgementResponse = n.QueryPacketAcknowledgementRequest = n.QueryPacketReceiptResponse = n.QueryPacketReceiptRequest = n.QueryPacketCommitmentsResponse = n.QueryPacketCommitmentsRequest = n.QueryPacketCommitmentResponse = n.QueryPacketCommitmentRequest = n.QueryChannelConsensusStateResponse = n.QueryChannelConsensusStateRequest = n.QueryChannelClientStateResponse = n.QueryChannelClientStateRequest = n.QueryConnectionChannelsResponse = n.QueryConnectionChannelsRequest = n.QueryChannelsResponse = n.QueryChannelsRequest = n.QueryChannelResponse = n.QueryChannelRequest = n.protobufPackage = void 0;
            const i = o(t(1)),
                r = o(t(8)),
                s = t(1149),
                a = t(296),
                c = t(295),
                d = t(113);
            n.protobufPackage = "ibc.core.channel.v1";
            const l = {
                portId: "",
                channelId: ""
            };
            n.QueryChannelRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, l);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, l);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, l);
                    return o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", o
                }
            };
            const u = {};
            n.QueryChannelResponse = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.channel && s.Channel.encode(e.channel, n.uint32(10).fork()).ldelim(), 0 !== e.proof.length && n.uint32(18).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, u);
                    for (i.proof = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.channel = s.Channel.decode(t, t.uint32());
                                break;
                            case 2:
                                i.proof = t.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, u);
                    return n.proof = new Uint8Array, void 0 !== e.channel && null !== e.channel ? n.channel = s.Channel.fromJSON(e.channel) : n.channel = void 0, void 0 !== e.proof && null !== e.proof && (n.proof = M(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.channel && (n.channel = e.channel ? s.Channel.toJSON(e.channel) : void 0), void 0 !== e.proof && (n.proof = _(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), n
                },
                fromPartial(e) {
                    var n;
                    const t = Object.assign({}, u);
                    return void 0 !== e.channel && null !== e.channel ? t.channel = s.Channel.fromPartial(e.channel) : t.channel = void 0, t.proof = null !== (n = e.proof) && void 0 !== n ? n : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = a.Height.fromPartial(e.proofHeight) : t.proofHeight = void 0, t
                }
            };
            const p = {};
            n.QueryChannelsRequest = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.pagination && c.PageRequest.encode(e.pagination, n.uint32(10).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, p);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.pagination = c.PageRequest.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, p);
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageRequest.fromJSON(e.pagination) : n.pagination = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageRequest.toJSON(e.pagination) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, p);
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageRequest.fromPartial(e.pagination) : n.pagination = void 0, n
                }
            };
            const f = {};
            n.QueryChannelsResponse = {
                encode(e, n = r.default.Writer.create()) {
                    for (const t of e.channels) s.IdentifiedChannel.encode(t, n.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && c.PageResponse.encode(e.pagination, n.uint32(18).fork()).ldelim(), void 0 !== e.height && a.Height.encode(e.height, n.uint32(26).fork()).ldelim(), n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, f);
                    for (i.channels = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.channels.push(s.IdentifiedChannel.decode(t, t.uint32()));
                                break;
                            case 2:
                                i.pagination = c.PageResponse.decode(t, t.uint32());
                                break;
                            case 3:
                                i.height = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, f);
                    if (n.channels = [], void 0 !== e.channels && null !== e.channels)
                        for (const t of e.channels) n.channels.push(s.IdentifiedChannel.fromJSON(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromJSON(e.pagination) : n.pagination = void 0, void 0 !== e.height && null !== e.height ? n.height = a.Height.fromJSON(e.height) : n.height = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return e.channels ? n.channels = e.channels.map(e => e ? s.IdentifiedChannel.toJSON(e) : void 0) : n.channels = [], void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageResponse.toJSON(e.pagination) : void 0), void 0 !== e.height && (n.height = e.height ? a.Height.toJSON(e.height) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, f);
                    if (n.channels = [], void 0 !== e.channels && null !== e.channels)
                        for (const t of e.channels) n.channels.push(s.IdentifiedChannel.fromPartial(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromPartial(e.pagination) : n.pagination = void 0, void 0 !== e.height && null !== e.height ? n.height = a.Height.fromPartial(e.height) : n.height = void 0, n
                }
            };
            const g = {
                connection: ""
            };
            n.QueryConnectionChannelsRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.connection && n.uint32(10).string(e.connection), void 0 !== e.pagination && c.PageRequest.encode(e.pagination, n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, g);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.connection = t.string();
                                break;
                            case 2:
                                i.pagination = c.PageRequest.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, g);
                    return void 0 !== e.connection && null !== e.connection ? n.connection = String(e.connection) : n.connection = "", void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageRequest.fromJSON(e.pagination) : n.pagination = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.connection && (n.connection = e.connection), void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageRequest.toJSON(e.pagination) : void 0), n
                },
                fromPartial(e) {
                    var n;
                    const t = Object.assign({}, g);
                    return t.connection = null !== (n = e.connection) && void 0 !== n ? n : "", void 0 !== e.pagination && null !== e.pagination ? t.pagination = c.PageRequest.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const h = {};
            n.QueryConnectionChannelsResponse = {
                encode(e, n = r.default.Writer.create()) {
                    for (const t of e.channels) s.IdentifiedChannel.encode(t, n.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && c.PageResponse.encode(e.pagination, n.uint32(18).fork()).ldelim(), void 0 !== e.height && a.Height.encode(e.height, n.uint32(26).fork()).ldelim(), n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, h);
                    for (i.channels = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.channels.push(s.IdentifiedChannel.decode(t, t.uint32()));
                                break;
                            case 2:
                                i.pagination = c.PageResponse.decode(t, t.uint32());
                                break;
                            case 3:
                                i.height = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, h);
                    if (n.channels = [], void 0 !== e.channels && null !== e.channels)
                        for (const t of e.channels) n.channels.push(s.IdentifiedChannel.fromJSON(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromJSON(e.pagination) : n.pagination = void 0, void 0 !== e.height && null !== e.height ? n.height = a.Height.fromJSON(e.height) : n.height = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return e.channels ? n.channels = e.channels.map(e => e ? s.IdentifiedChannel.toJSON(e) : void 0) : n.channels = [], void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageResponse.toJSON(e.pagination) : void 0), void 0 !== e.height && (n.height = e.height ? a.Height.toJSON(e.height) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, h);
                    if (n.channels = [], void 0 !== e.channels && null !== e.channels)
                        for (const t of e.channels) n.channels.push(s.IdentifiedChannel.fromPartial(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromPartial(e.pagination) : n.pagination = void 0, void 0 !== e.height && null !== e.height ? n.height = a.Height.fromPartial(e.height) : n.height = void 0, n
                }
            };
            const v = {
                portId: "",
                channelId: ""
            };
            n.QueryChannelClientStateRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, v);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, v);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, v);
                    return o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", o
                }
            };
            const m = {};
            n.QueryChannelClientStateResponse = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.identifiedClientState && a.IdentifiedClientState.encode(e.identifiedClientState, n.uint32(10).fork()).ldelim(), 0 !== e.proof.length && n.uint32(18).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, m);
                    for (i.proof = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.identifiedClientState = a.IdentifiedClientState.decode(t, t.uint32());
                                break;
                            case 2:
                                i.proof = t.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, m);
                    return n.proof = new Uint8Array, void 0 !== e.identifiedClientState && null !== e.identifiedClientState ? n.identifiedClientState = a.IdentifiedClientState.fromJSON(e.identifiedClientState) : n.identifiedClientState = void 0, void 0 !== e.proof && null !== e.proof && (n.proof = M(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.identifiedClientState && (n.identifiedClientState = e.identifiedClientState ? a.IdentifiedClientState.toJSON(e.identifiedClientState) : void 0), void 0 !== e.proof && (n.proof = _(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), n
                },
                fromPartial(e) {
                    var n;
                    const t = Object.assign({}, m);
                    return void 0 !== e.identifiedClientState && null !== e.identifiedClientState ? t.identifiedClientState = a.IdentifiedClientState.fromPartial(e.identifiedClientState) : t.identifiedClientState = void 0, t.proof = null !== (n = e.proof) && void 0 !== n ? n : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = a.Height.fromPartial(e.proofHeight) : t.proofHeight = void 0, t
                }
            };
            const S = {
                portId: "",
                channelId: "",
                revisionNumber: i.default.UZERO,
                revisionHeight: i.default.UZERO
            };
            n.QueryChannelConsensusStateRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), e.revisionNumber.isZero() || n.uint32(24).uint64(e.revisionNumber), e.revisionHeight.isZero() || n.uint32(32).uint64(e.revisionHeight), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, S);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                i.revisionNumber = t.uint64();
                                break;
                            case 4:
                                i.revisionHeight = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, S);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.revisionNumber && null !== e.revisionNumber ? n.revisionNumber = i.default.fromString(e.revisionNumber) : n.revisionNumber = i.default.UZERO, void 0 !== e.revisionHeight && null !== e.revisionHeight ? n.revisionHeight = i.default.fromString(e.revisionHeight) : n.revisionHeight = i.default.UZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), void 0 !== e.revisionNumber && (n.revisionNumber = (e.revisionNumber || i.default.UZERO).toString()), void 0 !== e.revisionHeight && (n.revisionHeight = (e.revisionHeight || i.default.UZERO).toString()), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, S);
                    return o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", void 0 !== e.revisionNumber && null !== e.revisionNumber ? o.revisionNumber = e.revisionNumber : o.revisionNumber = i.default.UZERO, void 0 !== e.revisionHeight && null !== e.revisionHeight ? o.revisionHeight = e.revisionHeight : o.revisionHeight = i.default.UZERO, o
                }
            };
            const I = {
                clientId: ""
            };
            n.QueryChannelConsensusStateResponse = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.consensusState && d.Any.encode(e.consensusState, n.uint32(10).fork()).ldelim(), "" !== e.clientId && n.uint32(18).string(e.clientId), 0 !== e.proof.length && n.uint32(26).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(34).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, I);
                    for (i.proof = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.consensusState = d.Any.decode(t, t.uint32());
                                break;
                            case 2:
                                i.clientId = t.string();
                                break;
                            case 3:
                                i.proof = t.bytes();
                                break;
                            case 4:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, I);
                    return n.proof = new Uint8Array, void 0 !== e.consensusState && null !== e.consensusState ? n.consensusState = d.Any.fromJSON(e.consensusState) : n.consensusState = void 0, void 0 !== e.clientId && null !== e.clientId ? n.clientId = String(e.clientId) : n.clientId = "", void 0 !== e.proof && null !== e.proof && (n.proof = M(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.consensusState && (n.consensusState = e.consensusState ? d.Any.toJSON(e.consensusState) : void 0), void 0 !== e.clientId && (n.clientId = e.clientId), void 0 !== e.proof && (n.proof = _(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, I);
                    return void 0 !== e.consensusState && null !== e.consensusState ? o.consensusState = d.Any.fromPartial(e.consensusState) : o.consensusState = void 0, o.clientId = null !== (n = e.clientId) && void 0 !== n ? n : "", o.proof = null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? o.proofHeight = a.Height.fromPartial(e.proofHeight) : o.proofHeight = void 0, o
                }
            };
            const b = {
                portId: "",
                channelId: "",
                sequence: i.default.UZERO
            };
            n.QueryPacketCommitmentRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), e.sequence.isZero() || n.uint32(24).uint64(e.sequence), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, b);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                i.sequence = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, b);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.sequence && null !== e.sequence ? n.sequence = i.default.fromString(e.sequence) : n.sequence = i.default.UZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), void 0 !== e.sequence && (n.sequence = (e.sequence || i.default.UZERO).toString()), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, b);
                    return o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", void 0 !== e.sequence && null !== e.sequence ? o.sequence = e.sequence : o.sequence = i.default.UZERO, o
                }
            };
            const O = {};
            n.QueryPacketCommitmentResponse = {
                encode: (e, n = r.default.Writer.create()) => (0 !== e.commitment.length && n.uint32(10).bytes(e.commitment), 0 !== e.proof.length && n.uint32(18).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, O);
                    for (i.commitment = new Uint8Array, i.proof = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.commitment = t.bytes();
                                break;
                            case 2:
                                i.proof = t.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, O);
                    return n.commitment = new Uint8Array, n.proof = new Uint8Array, void 0 !== e.commitment && null !== e.commitment && (n.commitment = M(e.commitment)), void 0 !== e.proof && null !== e.proof && (n.proof = M(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.commitment && (n.commitment = _(void 0 !== e.commitment ? e.commitment : new Uint8Array)), void 0 !== e.proof && (n.proof = _(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, O);
                    return o.commitment = null !== (n = e.commitment) && void 0 !== n ? n : new Uint8Array, o.proof = null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? o.proofHeight = a.Height.fromPartial(e.proofHeight) : o.proofHeight = void 0, o
                }
            };
            const k = {
                portId: "",
                channelId: ""
            };
            n.QueryPacketCommitmentsRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), void 0 !== e.pagination && c.PageRequest.encode(e.pagination, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, k);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                i.pagination = c.PageRequest.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, k);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageRequest.fromJSON(e.pagination) : n.pagination = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageRequest.toJSON(e.pagination) : void 0), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, k);
                    return o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", void 0 !== e.pagination && null !== e.pagination ? o.pagination = c.PageRequest.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const R = {};
            n.QueryPacketCommitmentsResponse = {
                encode(e, n = r.default.Writer.create()) {
                    for (const t of e.commitments) s.PacketState.encode(t, n.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && c.PageResponse.encode(e.pagination, n.uint32(18).fork()).ldelim(), void 0 !== e.height && a.Height.encode(e.height, n.uint32(26).fork()).ldelim(), n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, R);
                    for (i.commitments = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.commitments.push(s.PacketState.decode(t, t.uint32()));
                                break;
                            case 2:
                                i.pagination = c.PageResponse.decode(t, t.uint32());
                                break;
                            case 3:
                                i.height = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, R);
                    if (n.commitments = [], void 0 !== e.commitments && null !== e.commitments)
                        for (const t of e.commitments) n.commitments.push(s.PacketState.fromJSON(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromJSON(e.pagination) : n.pagination = void 0, void 0 !== e.height && null !== e.height ? n.height = a.Height.fromJSON(e.height) : n.height = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return e.commitments ? n.commitments = e.commitments.map(e => e ? s.PacketState.toJSON(e) : void 0) : n.commitments = [], void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageResponse.toJSON(e.pagination) : void 0), void 0 !== e.height && (n.height = e.height ? a.Height.toJSON(e.height) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, R);
                    if (n.commitments = [], void 0 !== e.commitments && null !== e.commitments)
                        for (const t of e.commitments) n.commitments.push(s.PacketState.fromPartial(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromPartial(e.pagination) : n.pagination = void 0, void 0 !== e.height && null !== e.height ? n.height = a.Height.fromPartial(e.height) : n.height = void 0, n
                }
            };
            const C = {
                portId: "",
                channelId: "",
                sequence: i.default.UZERO
            };
            n.QueryPacketReceiptRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), e.sequence.isZero() || n.uint32(24).uint64(e.sequence), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, C);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                i.sequence = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, C);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.sequence && null !== e.sequence ? n.sequence = i.default.fromString(e.sequence) : n.sequence = i.default.UZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), void 0 !== e.sequence && (n.sequence = (e.sequence || i.default.UZERO).toString()), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, C);
                    return o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", void 0 !== e.sequence && null !== e.sequence ? o.sequence = e.sequence : o.sequence = i.default.UZERO, o
                }
            };
            const y = {
                received: !1
            };
            n.QueryPacketReceiptResponse = {
                encode: (e, n = r.default.Writer.create()) => (!0 === e.received && n.uint32(16).bool(e.received), 0 !== e.proof.length && n.uint32(26).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(34).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, y);
                    for (i.proof = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 2:
                                i.received = t.bool();
                                break;
                            case 3:
                                i.proof = t.bytes();
                                break;
                            case 4:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, y);
                    return n.proof = new Uint8Array, void 0 !== e.received && null !== e.received ? n.received = Boolean(e.received) : n.received = !1, void 0 !== e.proof && null !== e.proof && (n.proof = M(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.received && (n.received = e.received), void 0 !== e.proof && (n.proof = _(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, y);
                    return o.received = null !== (n = e.received) && void 0 !== n && n, o.proof = null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? o.proofHeight = a.Height.fromPartial(e.proofHeight) : o.proofHeight = void 0, o
                }
            };
            const H = {
                portId: "",
                channelId: "",
                sequence: i.default.UZERO
            };
            n.QueryPacketAcknowledgementRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), e.sequence.isZero() || n.uint32(24).uint64(e.sequence), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, H);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                i.sequence = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, H);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.sequence && null !== e.sequence ? n.sequence = i.default.fromString(e.sequence) : n.sequence = i.default.UZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), void 0 !== e.sequence && (n.sequence = (e.sequence || i.default.UZERO).toString()), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, H);
                    return o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", void 0 !== e.sequence && null !== e.sequence ? o.sequence = e.sequence : o.sequence = i.default.UZERO, o
                }
            };
            const N = {};
            n.QueryPacketAcknowledgementResponse = {
                encode: (e, n = r.default.Writer.create()) => (0 !== e.acknowledgement.length && n.uint32(10).bytes(e.acknowledgement), 0 !== e.proof.length && n.uint32(18).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, N);
                    for (i.acknowledgement = new Uint8Array, i.proof = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.acknowledgement = t.bytes();
                                break;
                            case 2:
                                i.proof = t.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, N);
                    return n.acknowledgement = new Uint8Array, n.proof = new Uint8Array, void 0 !== e.acknowledgement && null !== e.acknowledgement && (n.acknowledgement = M(e.acknowledgement)), void 0 !== e.proof && null !== e.proof && (n.proof = M(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.acknowledgement && (n.acknowledgement = _(void 0 !== e.acknowledgement ? e.acknowledgement : new Uint8Array)), void 0 !== e.proof && (n.proof = _(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, N);
                    return o.acknowledgement = null !== (n = e.acknowledgement) && void 0 !== n ? n : new Uint8Array, o.proof = null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? o.proofHeight = a.Height.fromPartial(e.proofHeight) : o.proofHeight = void 0, o
                }
            };
            const P = {
                portId: "",
                channelId: ""
            };
            n.QueryPacketAcknowledgementsRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), void 0 !== e.pagination && c.PageRequest.encode(e.pagination, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, P);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                i.pagination = c.PageRequest.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, P);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageRequest.fromJSON(e.pagination) : n.pagination = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageRequest.toJSON(e.pagination) : void 0), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, P);
                    return o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", void 0 !== e.pagination && null !== e.pagination ? o.pagination = c.PageRequest.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const w = {};
            n.QueryPacketAcknowledgementsResponse = {
                encode(e, n = r.default.Writer.create()) {
                    for (const t of e.acknowledgements) s.PacketState.encode(t, n.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && c.PageResponse.encode(e.pagination, n.uint32(18).fork()).ldelim(), void 0 !== e.height && a.Height.encode(e.height, n.uint32(26).fork()).ldelim(), n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, w);
                    for (i.acknowledgements = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.acknowledgements.push(s.PacketState.decode(t, t.uint32()));
                                break;
                            case 2:
                                i.pagination = c.PageResponse.decode(t, t.uint32());
                                break;
                            case 3:
                                i.height = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, w);
                    if (n.acknowledgements = [], void 0 !== e.acknowledgements && null !== e.acknowledgements)
                        for (const t of e.acknowledgements) n.acknowledgements.push(s.PacketState.fromJSON(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromJSON(e.pagination) : n.pagination = void 0, void 0 !== e.height && null !== e.height ? n.height = a.Height.fromJSON(e.height) : n.height = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return e.acknowledgements ? n.acknowledgements = e.acknowledgements.map(e => e ? s.PacketState.toJSON(e) : void 0) : n.acknowledgements = [], void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageResponse.toJSON(e.pagination) : void 0), void 0 !== e.height && (n.height = e.height ? a.Height.toJSON(e.height) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, w);
                    if (n.acknowledgements = [], void 0 !== e.acknowledgements && null !== e.acknowledgements)
                        for (const t of e.acknowledgements) n.acknowledgements.push(s.PacketState.fromPartial(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromPartial(e.pagination) : n.pagination = void 0, void 0 !== e.height && null !== e.height ? n.height = a.Height.fromPartial(e.height) : n.height = void 0, n
                }
            };
            const q = {
                portId: "",
                channelId: "",
                packetCommitmentSequences: i.default.UZERO
            };
            n.QueryUnreceivedPacketsRequest = {
                encode(e, n = r.default.Writer.create()) {
                    "" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), n.uint32(26).fork();
                    for (const t of e.packetCommitmentSequences) n.uint64(t);
                    return n.ldelim(), n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, q);
                    for (i.packetCommitmentSequences = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                if (2 == (7 & e)) {
                                    const e = t.uint32() + t.pos;
                                    for (; t.pos < e;) i.packetCommitmentSequences.push(t.uint64())
                                } else i.packetCommitmentSequences.push(t.uint64());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, q);
                    if (n.packetCommitmentSequences = [], void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.packetCommitmentSequences && null !== e.packetCommitmentSequences)
                        for (const t of e.packetCommitmentSequences) n.packetCommitmentSequences.push(i.default.fromString(t));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), e.packetCommitmentSequences ? n.packetCommitmentSequences = e.packetCommitmentSequences.map(e => (e || i.default.UZERO).toString()) : n.packetCommitmentSequences = [], n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, q);
                    if (o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", o.packetCommitmentSequences = [], void 0 !== e.packetCommitmentSequences && null !== e.packetCommitmentSequences)
                        for (const n of e.packetCommitmentSequences) o.packetCommitmentSequences.push(n);
                    return o
                }
            };
            const J = {
                sequences: i.default.UZERO
            };
            n.QueryUnreceivedPacketsResponse = {
                encode(e, n = r.default.Writer.create()) {
                    n.uint32(10).fork();
                    for (const t of e.sequences) n.uint64(t);
                    return n.ldelim(), void 0 !== e.height && a.Height.encode(e.height, n.uint32(18).fork()).ldelim(), n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, J);
                    for (i.sequences = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (2 == (7 & e)) {
                                    const e = t.uint32() + t.pos;
                                    for (; t.pos < e;) i.sequences.push(t.uint64())
                                } else i.sequences.push(t.uint64());
                                break;
                            case 2:
                                i.height = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, J);
                    if (n.sequences = [], void 0 !== e.sequences && null !== e.sequences)
                        for (const t of e.sequences) n.sequences.push(i.default.fromString(t));
                    return void 0 !== e.height && null !== e.height ? n.height = a.Height.fromJSON(e.height) : n.height = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return e.sequences ? n.sequences = e.sequences.map(e => (e || i.default.UZERO).toString()) : n.sequences = [], void 0 !== e.height && (n.height = e.height ? a.Height.toJSON(e.height) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, J);
                    if (n.sequences = [], void 0 !== e.sequences && null !== e.sequences)
                        for (const t of e.sequences) n.sequences.push(t);
                    return void 0 !== e.height && null !== e.height ? n.height = a.Height.fromPartial(e.height) : n.height = void 0, n
                }
            };
            const T = {
                portId: "",
                channelId: "",
                packetAckSequences: i.default.UZERO
            };
            n.QueryUnreceivedAcksRequest = {
                encode(e, n = r.default.Writer.create()) {
                    "" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), n.uint32(26).fork();
                    for (const t of e.packetAckSequences) n.uint64(t);
                    return n.ldelim(), n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, T);
                    for (i.packetAckSequences = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                if (2 == (7 & e)) {
                                    const e = t.uint32() + t.pos;
                                    for (; t.pos < e;) i.packetAckSequences.push(t.uint64())
                                } else i.packetAckSequences.push(t.uint64());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, T);
                    if (n.packetAckSequences = [], void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.packetAckSequences && null !== e.packetAckSequences)
                        for (const t of e.packetAckSequences) n.packetAckSequences.push(i.default.fromString(t));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), e.packetAckSequences ? n.packetAckSequences = e.packetAckSequences.map(e => (e || i.default.UZERO).toString()) : n.packetAckSequences = [], n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, T);
                    if (o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", o.packetAckSequences = [], void 0 !== e.packetAckSequences && null !== e.packetAckSequences)
                        for (const n of e.packetAckSequences) o.packetAckSequences.push(n);
                    return o
                }
            };
            const U = {
                sequences: i.default.UZERO
            };
            n.QueryUnreceivedAcksResponse = {
                encode(e, n = r.default.Writer.create()) {
                    n.uint32(10).fork();
                    for (const t of e.sequences) n.uint64(t);
                    return n.ldelim(), void 0 !== e.height && a.Height.encode(e.height, n.uint32(18).fork()).ldelim(), n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, U);
                    for (i.sequences = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (2 == (7 & e)) {
                                    const e = t.uint32() + t.pos;
                                    for (; t.pos < e;) i.sequences.push(t.uint64())
                                } else i.sequences.push(t.uint64());
                                break;
                            case 2:
                                i.height = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, U);
                    if (n.sequences = [], void 0 !== e.sequences && null !== e.sequences)
                        for (const t of e.sequences) n.sequences.push(i.default.fromString(t));
                    return void 0 !== e.height && null !== e.height ? n.height = a.Height.fromJSON(e.height) : n.height = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return e.sequences ? n.sequences = e.sequences.map(e => (e || i.default.UZERO).toString()) : n.sequences = [], void 0 !== e.height && (n.height = e.height ? a.Height.toJSON(e.height) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, U);
                    if (n.sequences = [], void 0 !== e.sequences && null !== e.sequences)
                        for (const t of e.sequences) n.sequences.push(t);
                    return void 0 !== e.height && null !== e.height ? n.height = a.Height.fromPartial(e.height) : n.height = void 0, n
                }
            };
            const A = {
                portId: "",
                channelId: ""
            };
            n.QueryNextSequenceReceiveRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, A);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, A);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, A);
                    return o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", o.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", o
                }
            };
            const j = {
                nextSequenceReceive: i.default.UZERO
            };
            n.QueryNextSequenceReceiveResponse = {
                encode: (e, n = r.default.Writer.create()) => (e.nextSequenceReceive.isZero() || n.uint32(8).uint64(e.nextSequenceReceive), 0 !== e.proof.length && n.uint32(18).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, j);
                    for (i.proof = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.nextSequenceReceive = t.uint64();
                                break;
                            case 2:
                                i.proof = t.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, j);
                    return n.proof = new Uint8Array, void 0 !== e.nextSequenceReceive && null !== e.nextSequenceReceive ? n.nextSequenceReceive = i.default.fromString(e.nextSequenceReceive) : n.nextSequenceReceive = i.default.UZERO, void 0 !== e.proof && null !== e.proof && (n.proof = M(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.nextSequenceReceive && (n.nextSequenceReceive = (e.nextSequenceReceive || i.default.UZERO).toString()), void 0 !== e.proof && (n.proof = _(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), n
                },
                fromPartial(e) {
                    var n;
                    const t = Object.assign({}, j);
                    return void 0 !== e.nextSequenceReceive && null !== e.nextSequenceReceive ? t.nextSequenceReceive = e.nextSequenceReceive : t.nextSequenceReceive = i.default.UZERO, t.proof = null !== (n = e.proof) && void 0 !== n ? n : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = a.Height.fromPartial(e.proofHeight) : t.proofHeight = void 0, t
                }
            };
            n.QueryClientImpl = class QueryClientImpl {
                constructor(e) {
                    this.rpc = e, this.Channel = this.Channel.bind(this), this.Channels = this.Channels.bind(this), this.ConnectionChannels = this.ConnectionChannels.bind(this), this.ChannelClientState = this.ChannelClientState.bind(this), this.ChannelConsensusState = this.ChannelConsensusState.bind(this), this.PacketCommitment = this.PacketCommitment.bind(this), this.PacketCommitments = this.PacketCommitments.bind(this), this.PacketReceipt = this.PacketReceipt.bind(this), this.PacketAcknowledgement = this.PacketAcknowledgement.bind(this), this.PacketAcknowledgements = this.PacketAcknowledgements.bind(this), this.UnreceivedPackets = this.UnreceivedPackets.bind(this), this.UnreceivedAcks = this.UnreceivedAcks.bind(this), this.NextSequenceReceive = this.NextSequenceReceive.bind(this)
                }
                Channel(e) {
                    const t = n.QueryChannelRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "Channel", t).then(e => n.QueryChannelResponse.decode(new r.default.Reader(e)))
                }
                Channels(e) {
                    const t = n.QueryChannelsRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "Channels", t).then(e => n.QueryChannelsResponse.decode(new r.default.Reader(e)))
                }
                ConnectionChannels(e) {
                    const t = n.QueryConnectionChannelsRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", t).then(e => n.QueryConnectionChannelsResponse.decode(new r.default.Reader(e)))
                }
                ChannelClientState(e) {
                    const t = n.QueryChannelClientStateRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", t).then(e => n.QueryChannelClientStateResponse.decode(new r.default.Reader(e)))
                }
                ChannelConsensusState(e) {
                    const t = n.QueryChannelConsensusStateRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", t).then(e => n.QueryChannelConsensusStateResponse.decode(new r.default.Reader(e)))
                }
                PacketCommitment(e) {
                    const t = n.QueryPacketCommitmentRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", t).then(e => n.QueryPacketCommitmentResponse.decode(new r.default.Reader(e)))
                }
                PacketCommitments(e) {
                    const t = n.QueryPacketCommitmentsRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", t).then(e => n.QueryPacketCommitmentsResponse.decode(new r.default.Reader(e)))
                }
                PacketReceipt(e) {
                    const t = n.QueryPacketReceiptRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", t).then(e => n.QueryPacketReceiptResponse.decode(new r.default.Reader(e)))
                }
                PacketAcknowledgement(e) {
                    const t = n.QueryPacketAcknowledgementRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", t).then(e => n.QueryPacketAcknowledgementResponse.decode(new r.default.Reader(e)))
                }
                PacketAcknowledgements(e) {
                    const t = n.QueryPacketAcknowledgementsRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", t).then(e => n.QueryPacketAcknowledgementsResponse.decode(new r.default.Reader(e)))
                }
                UnreceivedPackets(e) {
                    const t = n.QueryUnreceivedPacketsRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", t).then(e => n.QueryUnreceivedPacketsResponse.decode(new r.default.Reader(e)))
                }
                UnreceivedAcks(e) {
                    const t = n.QueryUnreceivedAcksRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", t).then(e => n.QueryUnreceivedAcksResponse.decode(new r.default.Reader(e)))
                }
                NextSequenceReceive(e) {
                    const t = n.QueryNextSequenceReceiveRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", t).then(e => n.QueryNextSequenceReceiveResponse.decode(new r.default.Reader(e)))
                }
            };
            var E = (() => {
                if (void 0 !== E) return E;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const Q = E.atob || (e => E.Buffer.from(e, "base64").toString("binary"));

            function M(e) {
                const n = Q(e),
                    t = new Uint8Array(n.length);
                for (let e = 0; e < n.length; ++e) t[e] = n.charCodeAt(e);
                return t
            }
            const D = E.btoa || (e => E.Buffer.from(e, "binary").toString("base64"));

            function _(e) {
                const n = [];
                for (const t of e) n.push(String.fromCharCode(t));
                return D(n.join(""))
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4332: function(e, n, t) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.QueryClientImpl = n.QueryClientParamsResponse = n.QueryClientParamsRequest = n.QueryConsensusStatesResponse = n.QueryConsensusStatesRequest = n.QueryConsensusStateResponse = n.QueryConsensusStateRequest = n.QueryClientStatesResponse = n.QueryClientStatesRequest = n.QueryClientStateResponse = n.QueryClientStateRequest = n.protobufPackage = void 0;
            const i = o(t(1)),
                r = o(t(8)),
                s = t(113),
                a = t(296),
                c = t(295);
            n.protobufPackage = "ibc.core.client.v1";
            const d = {
                clientId: ""
            };
            n.QueryClientStateRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.clientId && n.uint32(10).string(e.clientId), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, d);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, d);
                    return void 0 !== e.clientId && null !== e.clientId ? n.clientId = String(e.clientId) : n.clientId = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.clientId && (n.clientId = e.clientId), n
                },
                fromPartial(e) {
                    var n;
                    const t = Object.assign({}, d);
                    return t.clientId = null !== (n = e.clientId) && void 0 !== n ? n : "", t
                }
            };
            const l = {};
            n.QueryClientStateResponse = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.clientState && s.Any.encode(e.clientState, n.uint32(10).fork()).ldelim(), 0 !== e.proof.length && n.uint32(18).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, l);
                    for (i.proof = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientState = s.Any.decode(t, t.uint32());
                                break;
                            case 2:
                                i.proof = t.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, l);
                    return n.proof = new Uint8Array, void 0 !== e.clientState && null !== e.clientState ? n.clientState = s.Any.fromJSON(e.clientState) : n.clientState = void 0, void 0 !== e.proof && null !== e.proof && (n.proof = O(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.clientState && (n.clientState = e.clientState ? s.Any.toJSON(e.clientState) : void 0), void 0 !== e.proof && (n.proof = R(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), n
                },
                fromPartial(e) {
                    var n;
                    const t = Object.assign({}, l);
                    return void 0 !== e.clientState && null !== e.clientState ? t.clientState = s.Any.fromPartial(e.clientState) : t.clientState = void 0, t.proof = null !== (n = e.proof) && void 0 !== n ? n : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = a.Height.fromPartial(e.proofHeight) : t.proofHeight = void 0, t
                }
            };
            const u = {};
            n.QueryClientStatesRequest = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.pagination && c.PageRequest.encode(e.pagination, n.uint32(10).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, u);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.pagination = c.PageRequest.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, u);
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageRequest.fromJSON(e.pagination) : n.pagination = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageRequest.toJSON(e.pagination) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, u);
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageRequest.fromPartial(e.pagination) : n.pagination = void 0, n
                }
            };
            const p = {};
            n.QueryClientStatesResponse = {
                encode(e, n = r.default.Writer.create()) {
                    for (const t of e.clientStates) a.IdentifiedClientState.encode(t, n.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && c.PageResponse.encode(e.pagination, n.uint32(18).fork()).ldelim(), n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, p);
                    for (i.clientStates = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientStates.push(a.IdentifiedClientState.decode(t, t.uint32()));
                                break;
                            case 2:
                                i.pagination = c.PageResponse.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, p);
                    if (n.clientStates = [], void 0 !== e.clientStates && null !== e.clientStates)
                        for (const t of e.clientStates) n.clientStates.push(a.IdentifiedClientState.fromJSON(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromJSON(e.pagination) : n.pagination = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return e.clientStates ? n.clientStates = e.clientStates.map(e => e ? a.IdentifiedClientState.toJSON(e) : void 0) : n.clientStates = [], void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageResponse.toJSON(e.pagination) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, p);
                    if (n.clientStates = [], void 0 !== e.clientStates && null !== e.clientStates)
                        for (const t of e.clientStates) n.clientStates.push(a.IdentifiedClientState.fromPartial(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromPartial(e.pagination) : n.pagination = void 0, n
                }
            };
            const f = {
                clientId: "",
                revisionNumber: i.default.UZERO,
                revisionHeight: i.default.UZERO,
                latestHeight: !1
            };
            n.QueryConsensusStateRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.clientId && n.uint32(10).string(e.clientId), e.revisionNumber.isZero() || n.uint32(16).uint64(e.revisionNumber), e.revisionHeight.isZero() || n.uint32(24).uint64(e.revisionHeight), !0 === e.latestHeight && n.uint32(32).bool(e.latestHeight), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, f);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = t.string();
                                break;
                            case 2:
                                i.revisionNumber = t.uint64();
                                break;
                            case 3:
                                i.revisionHeight = t.uint64();
                                break;
                            case 4:
                                i.latestHeight = t.bool();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, f);
                    return void 0 !== e.clientId && null !== e.clientId ? n.clientId = String(e.clientId) : n.clientId = "", void 0 !== e.revisionNumber && null !== e.revisionNumber ? n.revisionNumber = i.default.fromString(e.revisionNumber) : n.revisionNumber = i.default.UZERO, void 0 !== e.revisionHeight && null !== e.revisionHeight ? n.revisionHeight = i.default.fromString(e.revisionHeight) : n.revisionHeight = i.default.UZERO, void 0 !== e.latestHeight && null !== e.latestHeight ? n.latestHeight = Boolean(e.latestHeight) : n.latestHeight = !1, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.clientId && (n.clientId = e.clientId), void 0 !== e.revisionNumber && (n.revisionNumber = (e.revisionNumber || i.default.UZERO).toString()), void 0 !== e.revisionHeight && (n.revisionHeight = (e.revisionHeight || i.default.UZERO).toString()), void 0 !== e.latestHeight && (n.latestHeight = e.latestHeight), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, f);
                    return o.clientId = null !== (n = e.clientId) && void 0 !== n ? n : "", void 0 !== e.revisionNumber && null !== e.revisionNumber ? o.revisionNumber = e.revisionNumber : o.revisionNumber = i.default.UZERO, void 0 !== e.revisionHeight && null !== e.revisionHeight ? o.revisionHeight = e.revisionHeight : o.revisionHeight = i.default.UZERO, o.latestHeight = null !== (t = e.latestHeight) && void 0 !== t && t, o
                }
            };
            const g = {};
            n.QueryConsensusStateResponse = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.consensusState && s.Any.encode(e.consensusState, n.uint32(10).fork()).ldelim(), 0 !== e.proof.length && n.uint32(18).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, g);
                    for (i.proof = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.consensusState = s.Any.decode(t, t.uint32());
                                break;
                            case 2:
                                i.proof = t.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, g);
                    return n.proof = new Uint8Array, void 0 !== e.consensusState && null !== e.consensusState ? n.consensusState = s.Any.fromJSON(e.consensusState) : n.consensusState = void 0, void 0 !== e.proof && null !== e.proof && (n.proof = O(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.consensusState && (n.consensusState = e.consensusState ? s.Any.toJSON(e.consensusState) : void 0), void 0 !== e.proof && (n.proof = R(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), n
                },
                fromPartial(e) {
                    var n;
                    const t = Object.assign({}, g);
                    return void 0 !== e.consensusState && null !== e.consensusState ? t.consensusState = s.Any.fromPartial(e.consensusState) : t.consensusState = void 0, t.proof = null !== (n = e.proof) && void 0 !== n ? n : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = a.Height.fromPartial(e.proofHeight) : t.proofHeight = void 0, t
                }
            };
            const h = {
                clientId: ""
            };
            n.QueryConsensusStatesRequest = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.clientId && n.uint32(10).string(e.clientId), void 0 !== e.pagination && c.PageRequest.encode(e.pagination, n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, h);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = t.string();
                                break;
                            case 2:
                                i.pagination = c.PageRequest.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, h);
                    return void 0 !== e.clientId && null !== e.clientId ? n.clientId = String(e.clientId) : n.clientId = "", void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageRequest.fromJSON(e.pagination) : n.pagination = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.clientId && (n.clientId = e.clientId), void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageRequest.toJSON(e.pagination) : void 0), n
                },
                fromPartial(e) {
                    var n;
                    const t = Object.assign({}, h);
                    return t.clientId = null !== (n = e.clientId) && void 0 !== n ? n : "", void 0 !== e.pagination && null !== e.pagination ? t.pagination = c.PageRequest.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const v = {};
            n.QueryConsensusStatesResponse = {
                encode(e, n = r.default.Writer.create()) {
                    for (const t of e.consensusStates) a.ConsensusStateWithHeight.encode(t, n.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && c.PageResponse.encode(e.pagination, n.uint32(18).fork()).ldelim(), n
                },
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, v);
                    for (i.consensusStates = []; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.consensusStates.push(a.ConsensusStateWithHeight.decode(t, t.uint32()));
                                break;
                            case 2:
                                i.pagination = c.PageResponse.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, v);
                    if (n.consensusStates = [], void 0 !== e.consensusStates && null !== e.consensusStates)
                        for (const t of e.consensusStates) n.consensusStates.push(a.ConsensusStateWithHeight.fromJSON(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromJSON(e.pagination) : n.pagination = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return e.consensusStates ? n.consensusStates = e.consensusStates.map(e => e ? a.ConsensusStateWithHeight.toJSON(e) : void 0) : n.consensusStates = [], void 0 !== e.pagination && (n.pagination = e.pagination ? c.PageResponse.toJSON(e.pagination) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, v);
                    if (n.consensusStates = [], void 0 !== e.consensusStates && null !== e.consensusStates)
                        for (const t of e.consensusStates) n.consensusStates.push(a.ConsensusStateWithHeight.fromPartial(t));
                    return void 0 !== e.pagination && null !== e.pagination ? n.pagination = c.PageResponse.fromPartial(e.pagination) : n.pagination = void 0, n
                }
            };
            const m = {};
            n.QueryClientParamsRequest = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, m);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, m),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, m)
            };
            const S = {};
            n.QueryClientParamsResponse = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.params && a.Params.encode(e.params, n.uint32(10).fork()).ldelim(), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, S);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.params = a.Params.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, S);
                    return void 0 !== e.params && null !== e.params ? n.params = a.Params.fromJSON(e.params) : n.params = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.params && (n.params = e.params ? a.Params.toJSON(e.params) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, S);
                    return void 0 !== e.params && null !== e.params ? n.params = a.Params.fromPartial(e.params) : n.params = void 0, n
                }
            };
            n.QueryClientImpl = class QueryClientImpl {
                constructor(e) {
                    this.rpc = e, this.ClientState = this.ClientState.bind(this), this.ClientStates = this.ClientStates.bind(this), this.ConsensusState = this.ConsensusState.bind(this), this.ConsensusStates = this.ConsensusStates.bind(this), this.ClientParams = this.ClientParams.bind(this)
                }
                ClientState(e) {
                    const t = n.QueryClientStateRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.client.v1.Query", "ClientState", t).then(e => n.QueryClientStateResponse.decode(new r.default.Reader(e)))
                }
                ClientStates(e) {
                    const t = n.QueryClientStatesRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.client.v1.Query", "ClientStates", t).then(e => n.QueryClientStatesResponse.decode(new r.default.Reader(e)))
                }
                ConsensusState(e) {
                    const t = n.QueryConsensusStateRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", t).then(e => n.QueryConsensusStateResponse.decode(new r.default.Reader(e)))
                }
                ConsensusStates(e) {
                    const t = n.QueryConsensusStatesRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", t).then(e => n.QueryConsensusStatesResponse.decode(new r.default.Reader(e)))
                }
                ClientParams(e) {
                    const t = n.QueryClientParamsRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.client.v1.Query", "ClientParams", t).then(e => n.QueryClientParamsResponse.decode(new r.default.Reader(e)))
                }
            };
            var I = (() => {
                if (void 0 !== I) return I;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const b = I.atob || (e => I.Buffer.from(e, "base64").toString("binary"));

            function O(e) {
                const n = b(e),
                    t = new Uint8Array(n.length);
                for (let e = 0; e < n.length; ++e) t[e] = n.charCodeAt(e);
                return t
            }
            const k = I.btoa || (e => I.Buffer.from(e, "binary").toString("base64"));

            function R(e) {
                const n = [];
                for (const t of e) n.push(String.fromCharCode(t));
                return k(n.join(""))
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4383: function(e, n, t) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.MsgClientImpl = n.MsgTransferResponse = n.MsgTransfer = n.protobufPackage = void 0;
            const i = o(t(1)),
                r = o(t(8)),
                s = t(160),
                a = t(296);
            n.protobufPackage = "ibc.applications.transfer.v1";
            const c = {
                sourcePort: "",
                sourceChannel: "",
                sender: "",
                receiver: "",
                timeoutTimestamp: i.default.UZERO
            };
            n.MsgTransfer = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.sourcePort && n.uint32(10).string(e.sourcePort), "" !== e.sourceChannel && n.uint32(18).string(e.sourceChannel), void 0 !== e.token && s.Coin.encode(e.token, n.uint32(26).fork()).ldelim(), "" !== e.sender && n.uint32(34).string(e.sender), "" !== e.receiver && n.uint32(42).string(e.receiver), void 0 !== e.timeoutHeight && a.Height.encode(e.timeoutHeight, n.uint32(50).fork()).ldelim(), e.timeoutTimestamp.isZero() || n.uint32(56).uint64(e.timeoutTimestamp), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, c);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.sourcePort = t.string();
                                break;
                            case 2:
                                i.sourceChannel = t.string();
                                break;
                            case 3:
                                i.token = s.Coin.decode(t, t.uint32());
                                break;
                            case 4:
                                i.sender = t.string();
                                break;
                            case 5:
                                i.receiver = t.string();
                                break;
                            case 6:
                                i.timeoutHeight = a.Height.decode(t, t.uint32());
                                break;
                            case 7:
                                i.timeoutTimestamp = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, c);
                    return void 0 !== e.sourcePort && null !== e.sourcePort ? n.sourcePort = String(e.sourcePort) : n.sourcePort = "", void 0 !== e.sourceChannel && null !== e.sourceChannel ? n.sourceChannel = String(e.sourceChannel) : n.sourceChannel = "", void 0 !== e.token && null !== e.token ? n.token = s.Coin.fromJSON(e.token) : n.token = void 0, void 0 !== e.sender && null !== e.sender ? n.sender = String(e.sender) : n.sender = "", void 0 !== e.receiver && null !== e.receiver ? n.receiver = String(e.receiver) : n.receiver = "", void 0 !== e.timeoutHeight && null !== e.timeoutHeight ? n.timeoutHeight = a.Height.fromJSON(e.timeoutHeight) : n.timeoutHeight = void 0, void 0 !== e.timeoutTimestamp && null !== e.timeoutTimestamp ? n.timeoutTimestamp = i.default.fromString(e.timeoutTimestamp) : n.timeoutTimestamp = i.default.UZERO, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.sourcePort && (n.sourcePort = e.sourcePort), void 0 !== e.sourceChannel && (n.sourceChannel = e.sourceChannel), void 0 !== e.token && (n.token = e.token ? s.Coin.toJSON(e.token) : void 0), void 0 !== e.sender && (n.sender = e.sender), void 0 !== e.receiver && (n.receiver = e.receiver), void 0 !== e.timeoutHeight && (n.timeoutHeight = e.timeoutHeight ? a.Height.toJSON(e.timeoutHeight) : void 0), void 0 !== e.timeoutTimestamp && (n.timeoutTimestamp = (e.timeoutTimestamp || i.default.UZERO).toString()), n
                },
                fromPartial(e) {
                    var n, t, o, r;
                    const d = Object.assign({}, c);
                    return d.sourcePort = null !== (n = e.sourcePort) && void 0 !== n ? n : "", d.sourceChannel = null !== (t = e.sourceChannel) && void 0 !== t ? t : "", void 0 !== e.token && null !== e.token ? d.token = s.Coin.fromPartial(e.token) : d.token = void 0, d.sender = null !== (o = e.sender) && void 0 !== o ? o : "", d.receiver = null !== (r = e.receiver) && void 0 !== r ? r : "", void 0 !== e.timeoutHeight && null !== e.timeoutHeight ? d.timeoutHeight = a.Height.fromPartial(e.timeoutHeight) : d.timeoutHeight = void 0, void 0 !== e.timeoutTimestamp && null !== e.timeoutTimestamp ? d.timeoutTimestamp = e.timeoutTimestamp : d.timeoutTimestamp = i.default.UZERO, d
                }
            };
            const d = {};
            n.MsgTransferResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, d);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, d),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, d)
            };
            n.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.Transfer = this.Transfer.bind(this)
                }
                Transfer(e) {
                    const t = n.MsgTransfer.encode(e).finish();
                    return this.rpc.request("ibc.applications.transfer.v1.Msg", "Transfer", t).then(e => n.MsgTransferResponse.decode(new r.default.Reader(e)))
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4384: function(e, n, t) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.MsgClientImpl = n.MsgAcknowledgementResponse = n.MsgAcknowledgement = n.MsgTimeoutOnCloseResponse = n.MsgTimeoutOnClose = n.MsgTimeoutResponse = n.MsgTimeout = n.MsgRecvPacketResponse = n.MsgRecvPacket = n.MsgChannelCloseConfirmResponse = n.MsgChannelCloseConfirm = n.MsgChannelCloseInitResponse = n.MsgChannelCloseInit = n.MsgChannelOpenConfirmResponse = n.MsgChannelOpenConfirm = n.MsgChannelOpenAckResponse = n.MsgChannelOpenAck = n.MsgChannelOpenTryResponse = n.MsgChannelOpenTry = n.MsgChannelOpenInitResponse = n.MsgChannelOpenInit = n.protobufPackage = void 0;
            const i = o(t(1)),
                r = o(t(8)),
                s = t(1149),
                a = t(296);
            n.protobufPackage = "ibc.core.channel.v1";
            const c = {
                portId: "",
                signer: ""
            };
            n.MsgChannelOpenInit = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), void 0 !== e.channel && s.Channel.encode(e.channel, n.uint32(18).fork()).ldelim(), "" !== e.signer && n.uint32(26).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, c);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channel = s.Channel.decode(t, t.uint32());
                                break;
                            case 3:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, c);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channel && null !== e.channel ? n.channel = s.Channel.fromJSON(e.channel) : n.channel = void 0, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channel && (n.channel = e.channel ? s.Channel.toJSON(e.channel) : void 0), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, c);
                    return o.portId = null !== (n = e.portId) && void 0 !== n ? n : "", void 0 !== e.channel && null !== e.channel ? o.channel = s.Channel.fromPartial(e.channel) : o.channel = void 0, o.signer = null !== (t = e.signer) && void 0 !== t ? t : "", o
                }
            };
            const d = {};
            n.MsgChannelOpenInitResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, d);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, d),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, d)
            };
            const l = {
                portId: "",
                previousChannelId: "",
                counterpartyVersion: "",
                signer: ""
            };
            n.MsgChannelOpenTry = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.previousChannelId && n.uint32(18).string(e.previousChannelId), void 0 !== e.channel && s.Channel.encode(e.channel, n.uint32(26).fork()).ldelim(), "" !== e.counterpartyVersion && n.uint32(34).string(e.counterpartyVersion), 0 !== e.proofInit.length && n.uint32(42).bytes(e.proofInit), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(50).fork()).ldelim(), "" !== e.signer && n.uint32(58).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, l);
                    for (i.proofInit = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.previousChannelId = t.string();
                                break;
                            case 3:
                                i.channel = s.Channel.decode(t, t.uint32());
                                break;
                            case 4:
                                i.counterpartyVersion = t.string();
                                break;
                            case 5:
                                i.proofInit = t.bytes();
                                break;
                            case 6:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            case 7:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, l);
                    return n.proofInit = new Uint8Array, void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.previousChannelId && null !== e.previousChannelId ? n.previousChannelId = String(e.previousChannelId) : n.previousChannelId = "", void 0 !== e.channel && null !== e.channel ? n.channel = s.Channel.fromJSON(e.channel) : n.channel = void 0, void 0 !== e.counterpartyVersion && null !== e.counterpartyVersion ? n.counterpartyVersion = String(e.counterpartyVersion) : n.counterpartyVersion = "", void 0 !== e.proofInit && null !== e.proofInit && (n.proofInit = q(e.proofInit)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.previousChannelId && (n.previousChannelId = e.previousChannelId), void 0 !== e.channel && (n.channel = e.channel ? s.Channel.toJSON(e.channel) : void 0), void 0 !== e.counterpartyVersion && (n.counterpartyVersion = e.counterpartyVersion), void 0 !== e.proofInit && (n.proofInit = T(void 0 !== e.proofInit ? e.proofInit : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t, o, i, r;
                    const c = Object.assign({}, l);
                    return c.portId = null !== (n = e.portId) && void 0 !== n ? n : "", c.previousChannelId = null !== (t = e.previousChannelId) && void 0 !== t ? t : "", void 0 !== e.channel && null !== e.channel ? c.channel = s.Channel.fromPartial(e.channel) : c.channel = void 0, c.counterpartyVersion = null !== (o = e.counterpartyVersion) && void 0 !== o ? o : "", c.proofInit = null !== (i = e.proofInit) && void 0 !== i ? i : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? c.proofHeight = a.Height.fromPartial(e.proofHeight) : c.proofHeight = void 0, c.signer = null !== (r = e.signer) && void 0 !== r ? r : "", c
                }
            };
            const u = {};
            n.MsgChannelOpenTryResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, u);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, u),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, u)
            };
            const p = {
                portId: "",
                channelId: "",
                counterpartyChannelId: "",
                counterpartyVersion: "",
                signer: ""
            };
            n.MsgChannelOpenAck = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), "" !== e.counterpartyChannelId && n.uint32(26).string(e.counterpartyChannelId), "" !== e.counterpartyVersion && n.uint32(34).string(e.counterpartyVersion), 0 !== e.proofTry.length && n.uint32(42).bytes(e.proofTry), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(50).fork()).ldelim(), "" !== e.signer && n.uint32(58).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, p);
                    for (i.proofTry = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                i.counterpartyChannelId = t.string();
                                break;
                            case 4:
                                i.counterpartyVersion = t.string();
                                break;
                            case 5:
                                i.proofTry = t.bytes();
                                break;
                            case 6:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            case 7:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, p);
                    return n.proofTry = new Uint8Array, void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.counterpartyChannelId && null !== e.counterpartyChannelId ? n.counterpartyChannelId = String(e.counterpartyChannelId) : n.counterpartyChannelId = "", void 0 !== e.counterpartyVersion && null !== e.counterpartyVersion ? n.counterpartyVersion = String(e.counterpartyVersion) : n.counterpartyVersion = "", void 0 !== e.proofTry && null !== e.proofTry && (n.proofTry = q(e.proofTry)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), void 0 !== e.counterpartyChannelId && (n.counterpartyChannelId = e.counterpartyChannelId), void 0 !== e.counterpartyVersion && (n.counterpartyVersion = e.counterpartyVersion), void 0 !== e.proofTry && (n.proofTry = T(void 0 !== e.proofTry ? e.proofTry : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t, o, i, r, s;
                    const c = Object.assign({}, p);
                    return c.portId = null !== (n = e.portId) && void 0 !== n ? n : "", c.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", c.counterpartyChannelId = null !== (o = e.counterpartyChannelId) && void 0 !== o ? o : "", c.counterpartyVersion = null !== (i = e.counterpartyVersion) && void 0 !== i ? i : "", c.proofTry = null !== (r = e.proofTry) && void 0 !== r ? r : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? c.proofHeight = a.Height.fromPartial(e.proofHeight) : c.proofHeight = void 0, c.signer = null !== (s = e.signer) && void 0 !== s ? s : "", c
                }
            };
            const f = {};
            n.MsgChannelOpenAckResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, f);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, f),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, f)
            };
            const g = {
                portId: "",
                channelId: "",
                signer: ""
            };
            n.MsgChannelOpenConfirm = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), 0 !== e.proofAck.length && n.uint32(26).bytes(e.proofAck), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(34).fork()).ldelim(), "" !== e.signer && n.uint32(42).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, g);
                    for (i.proofAck = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                i.proofAck = t.bytes();
                                break;
                            case 4:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            case 5:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, g);
                    return n.proofAck = new Uint8Array, void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.proofAck && null !== e.proofAck && (n.proofAck = q(e.proofAck)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), void 0 !== e.proofAck && (n.proofAck = T(void 0 !== e.proofAck ? e.proofAck : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t, o, i;
                    const r = Object.assign({}, g);
                    return r.portId = null !== (n = e.portId) && void 0 !== n ? n : "", r.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", r.proofAck = null !== (o = e.proofAck) && void 0 !== o ? o : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? r.proofHeight = a.Height.fromPartial(e.proofHeight) : r.proofHeight = void 0, r.signer = null !== (i = e.signer) && void 0 !== i ? i : "", r
                }
            };
            const h = {};
            n.MsgChannelOpenConfirmResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, h);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, h),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, h)
            };
            const v = {
                portId: "",
                channelId: "",
                signer: ""
            };
            n.MsgChannelCloseInit = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), "" !== e.signer && n.uint32(26).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, v);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, v);
                    return void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t, o;
                    const i = Object.assign({}, v);
                    return i.portId = null !== (n = e.portId) && void 0 !== n ? n : "", i.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", i.signer = null !== (o = e.signer) && void 0 !== o ? o : "", i
                }
            };
            const m = {};
            n.MsgChannelCloseInitResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, m);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, m),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, m)
            };
            const S = {
                portId: "",
                channelId: "",
                signer: ""
            };
            n.MsgChannelCloseConfirm = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.portId && n.uint32(10).string(e.portId), "" !== e.channelId && n.uint32(18).string(e.channelId), 0 !== e.proofInit.length && n.uint32(26).bytes(e.proofInit), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(34).fork()).ldelim(), "" !== e.signer && n.uint32(42).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, S);
                    for (i.proofInit = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.portId = t.string();
                                break;
                            case 2:
                                i.channelId = t.string();
                                break;
                            case 3:
                                i.proofInit = t.bytes();
                                break;
                            case 4:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            case 5:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, S);
                    return n.proofInit = new Uint8Array, void 0 !== e.portId && null !== e.portId ? n.portId = String(e.portId) : n.portId = "", void 0 !== e.channelId && null !== e.channelId ? n.channelId = String(e.channelId) : n.channelId = "", void 0 !== e.proofInit && null !== e.proofInit && (n.proofInit = q(e.proofInit)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.portId && (n.portId = e.portId), void 0 !== e.channelId && (n.channelId = e.channelId), void 0 !== e.proofInit && (n.proofInit = T(void 0 !== e.proofInit ? e.proofInit : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t, o, i;
                    const r = Object.assign({}, S);
                    return r.portId = null !== (n = e.portId) && void 0 !== n ? n : "", r.channelId = null !== (t = e.channelId) && void 0 !== t ? t : "", r.proofInit = null !== (o = e.proofInit) && void 0 !== o ? o : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? r.proofHeight = a.Height.fromPartial(e.proofHeight) : r.proofHeight = void 0, r.signer = null !== (i = e.signer) && void 0 !== i ? i : "", r
                }
            };
            const I = {};
            n.MsgChannelCloseConfirmResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, I);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, I),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, I)
            };
            const b = {
                signer: ""
            };
            n.MsgRecvPacket = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.packet && s.Packet.encode(e.packet, n.uint32(10).fork()).ldelim(), 0 !== e.proofCommitment.length && n.uint32(18).bytes(e.proofCommitment), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(26).fork()).ldelim(), "" !== e.signer && n.uint32(34).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, b);
                    for (i.proofCommitment = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.packet = s.Packet.decode(t, t.uint32());
                                break;
                            case 2:
                                i.proofCommitment = t.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            case 4:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, b);
                    return n.proofCommitment = new Uint8Array, void 0 !== e.packet && null !== e.packet ? n.packet = s.Packet.fromJSON(e.packet) : n.packet = void 0, void 0 !== e.proofCommitment && null !== e.proofCommitment && (n.proofCommitment = q(e.proofCommitment)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.packet && (n.packet = e.packet ? s.Packet.toJSON(e.packet) : void 0), void 0 !== e.proofCommitment && (n.proofCommitment = T(void 0 !== e.proofCommitment ? e.proofCommitment : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, b);
                    return void 0 !== e.packet && null !== e.packet ? o.packet = s.Packet.fromPartial(e.packet) : o.packet = void 0, o.proofCommitment = null !== (n = e.proofCommitment) && void 0 !== n ? n : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? o.proofHeight = a.Height.fromPartial(e.proofHeight) : o.proofHeight = void 0, o.signer = null !== (t = e.signer) && void 0 !== t ? t : "", o
                }
            };
            const O = {};
            n.MsgRecvPacketResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, O);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, O),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, O)
            };
            const k = {
                nextSequenceRecv: i.default.UZERO,
                signer: ""
            };
            n.MsgTimeout = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.packet && s.Packet.encode(e.packet, n.uint32(10).fork()).ldelim(), 0 !== e.proofUnreceived.length && n.uint32(18).bytes(e.proofUnreceived), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(26).fork()).ldelim(), e.nextSequenceRecv.isZero() || n.uint32(32).uint64(e.nextSequenceRecv), "" !== e.signer && n.uint32(42).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, k);
                    for (i.proofUnreceived = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.packet = s.Packet.decode(t, t.uint32());
                                break;
                            case 2:
                                i.proofUnreceived = t.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            case 4:
                                i.nextSequenceRecv = t.uint64();
                                break;
                            case 5:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, k);
                    return n.proofUnreceived = new Uint8Array, void 0 !== e.packet && null !== e.packet ? n.packet = s.Packet.fromJSON(e.packet) : n.packet = void 0, void 0 !== e.proofUnreceived && null !== e.proofUnreceived && (n.proofUnreceived = q(e.proofUnreceived)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, void 0 !== e.nextSequenceRecv && null !== e.nextSequenceRecv ? n.nextSequenceRecv = i.default.fromString(e.nextSequenceRecv) : n.nextSequenceRecv = i.default.UZERO, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.packet && (n.packet = e.packet ? s.Packet.toJSON(e.packet) : void 0), void 0 !== e.proofUnreceived && (n.proofUnreceived = T(void 0 !== e.proofUnreceived ? e.proofUnreceived : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), void 0 !== e.nextSequenceRecv && (n.nextSequenceRecv = (e.nextSequenceRecv || i.default.UZERO).toString()), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, k);
                    return void 0 !== e.packet && null !== e.packet ? o.packet = s.Packet.fromPartial(e.packet) : o.packet = void 0, o.proofUnreceived = null !== (n = e.proofUnreceived) && void 0 !== n ? n : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? o.proofHeight = a.Height.fromPartial(e.proofHeight) : o.proofHeight = void 0, void 0 !== e.nextSequenceRecv && null !== e.nextSequenceRecv ? o.nextSequenceRecv = e.nextSequenceRecv : o.nextSequenceRecv = i.default.UZERO, o.signer = null !== (t = e.signer) && void 0 !== t ? t : "", o
                }
            };
            const R = {};
            n.MsgTimeoutResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, R);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, R),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, R)
            };
            const C = {
                nextSequenceRecv: i.default.UZERO,
                signer: ""
            };
            n.MsgTimeoutOnClose = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.packet && s.Packet.encode(e.packet, n.uint32(10).fork()).ldelim(), 0 !== e.proofUnreceived.length && n.uint32(18).bytes(e.proofUnreceived), 0 !== e.proofClose.length && n.uint32(26).bytes(e.proofClose), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(34).fork()).ldelim(), e.nextSequenceRecv.isZero() || n.uint32(40).uint64(e.nextSequenceRecv), "" !== e.signer && n.uint32(50).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, C);
                    for (i.proofUnreceived = new Uint8Array, i.proofClose = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.packet = s.Packet.decode(t, t.uint32());
                                break;
                            case 2:
                                i.proofUnreceived = t.bytes();
                                break;
                            case 3:
                                i.proofClose = t.bytes();
                                break;
                            case 4:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            case 5:
                                i.nextSequenceRecv = t.uint64();
                                break;
                            case 6:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, C);
                    return n.proofUnreceived = new Uint8Array, n.proofClose = new Uint8Array, void 0 !== e.packet && null !== e.packet ? n.packet = s.Packet.fromJSON(e.packet) : n.packet = void 0, void 0 !== e.proofUnreceived && null !== e.proofUnreceived && (n.proofUnreceived = q(e.proofUnreceived)), void 0 !== e.proofClose && null !== e.proofClose && (n.proofClose = q(e.proofClose)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, void 0 !== e.nextSequenceRecv && null !== e.nextSequenceRecv ? n.nextSequenceRecv = i.default.fromString(e.nextSequenceRecv) : n.nextSequenceRecv = i.default.UZERO, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.packet && (n.packet = e.packet ? s.Packet.toJSON(e.packet) : void 0), void 0 !== e.proofUnreceived && (n.proofUnreceived = T(void 0 !== e.proofUnreceived ? e.proofUnreceived : new Uint8Array)), void 0 !== e.proofClose && (n.proofClose = T(void 0 !== e.proofClose ? e.proofClose : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), void 0 !== e.nextSequenceRecv && (n.nextSequenceRecv = (e.nextSequenceRecv || i.default.UZERO).toString()), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t, o;
                    const r = Object.assign({}, C);
                    return void 0 !== e.packet && null !== e.packet ? r.packet = s.Packet.fromPartial(e.packet) : r.packet = void 0, r.proofUnreceived = null !== (n = e.proofUnreceived) && void 0 !== n ? n : new Uint8Array, r.proofClose = null !== (t = e.proofClose) && void 0 !== t ? t : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? r.proofHeight = a.Height.fromPartial(e.proofHeight) : r.proofHeight = void 0, void 0 !== e.nextSequenceRecv && null !== e.nextSequenceRecv ? r.nextSequenceRecv = e.nextSequenceRecv : r.nextSequenceRecv = i.default.UZERO, r.signer = null !== (o = e.signer) && void 0 !== o ? o : "", r
                }
            };
            const y = {};
            n.MsgTimeoutOnCloseResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, y);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, y),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, y)
            };
            const H = {
                signer: ""
            };
            n.MsgAcknowledgement = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.packet && s.Packet.encode(e.packet, n.uint32(10).fork()).ldelim(), 0 !== e.acknowledgement.length && n.uint32(18).bytes(e.acknowledgement), 0 !== e.proofAcked.length && n.uint32(26).bytes(e.proofAcked), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, n.uint32(34).fork()).ldelim(), "" !== e.signer && n.uint32(42).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, H);
                    for (i.acknowledgement = new Uint8Array, i.proofAcked = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.packet = s.Packet.decode(t, t.uint32());
                                break;
                            case 2:
                                i.acknowledgement = t.bytes();
                                break;
                            case 3:
                                i.proofAcked = t.bytes();
                                break;
                            case 4:
                                i.proofHeight = a.Height.decode(t, t.uint32());
                                break;
                            case 5:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, H);
                    return n.acknowledgement = new Uint8Array, n.proofAcked = new Uint8Array, void 0 !== e.packet && null !== e.packet ? n.packet = s.Packet.fromJSON(e.packet) : n.packet = void 0, void 0 !== e.acknowledgement && null !== e.acknowledgement && (n.acknowledgement = q(e.acknowledgement)), void 0 !== e.proofAcked && null !== e.proofAcked && (n.proofAcked = q(e.proofAcked)), void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromJSON(e.proofHeight) : n.proofHeight = void 0, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.packet && (n.packet = e.packet ? s.Packet.toJSON(e.packet) : void 0), void 0 !== e.acknowledgement && (n.acknowledgement = T(void 0 !== e.acknowledgement ? e.acknowledgement : new Uint8Array)), void 0 !== e.proofAcked && (n.proofAcked = T(void 0 !== e.proofAcked ? e.proofAcked : new Uint8Array)), void 0 !== e.proofHeight && (n.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t, o;
                    const i = Object.assign({}, H);
                    return void 0 !== e.packet && null !== e.packet ? i.packet = s.Packet.fromPartial(e.packet) : i.packet = void 0, i.acknowledgement = null !== (n = e.acknowledgement) && void 0 !== n ? n : new Uint8Array, i.proofAcked = null !== (t = e.proofAcked) && void 0 !== t ? t : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? i.proofHeight = a.Height.fromPartial(e.proofHeight) : i.proofHeight = void 0, i.signer = null !== (o = e.signer) && void 0 !== o ? o : "", i
                }
            };
            const N = {};
            n.MsgAcknowledgementResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, N);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, N),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, N)
            };
            n.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.ChannelOpenInit = this.ChannelOpenInit.bind(this), this.ChannelOpenTry = this.ChannelOpenTry.bind(this), this.ChannelOpenAck = this.ChannelOpenAck.bind(this), this.ChannelOpenConfirm = this.ChannelOpenConfirm.bind(this), this.ChannelCloseInit = this.ChannelCloseInit.bind(this), this.ChannelCloseConfirm = this.ChannelCloseConfirm.bind(this), this.RecvPacket = this.RecvPacket.bind(this), this.Timeout = this.Timeout.bind(this), this.TimeoutOnClose = this.TimeoutOnClose.bind(this), this.Acknowledgement = this.Acknowledgement.bind(this)
                }
                ChannelOpenInit(e) {
                    const t = n.MsgChannelOpenInit.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenInit", t).then(e => n.MsgChannelOpenInitResponse.decode(new r.default.Reader(e)))
                }
                ChannelOpenTry(e) {
                    const t = n.MsgChannelOpenTry.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenTry", t).then(e => n.MsgChannelOpenTryResponse.decode(new r.default.Reader(e)))
                }
                ChannelOpenAck(e) {
                    const t = n.MsgChannelOpenAck.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenAck", t).then(e => n.MsgChannelOpenAckResponse.decode(new r.default.Reader(e)))
                }
                ChannelOpenConfirm(e) {
                    const t = n.MsgChannelOpenConfirm.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenConfirm", t).then(e => n.MsgChannelOpenConfirmResponse.decode(new r.default.Reader(e)))
                }
                ChannelCloseInit(e) {
                    const t = n.MsgChannelCloseInit.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseInit", t).then(e => n.MsgChannelCloseInitResponse.decode(new r.default.Reader(e)))
                }
                ChannelCloseConfirm(e) {
                    const t = n.MsgChannelCloseConfirm.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseConfirm", t).then(e => n.MsgChannelCloseConfirmResponse.decode(new r.default.Reader(e)))
                }
                RecvPacket(e) {
                    const t = n.MsgRecvPacket.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Msg", "RecvPacket", t).then(e => n.MsgRecvPacketResponse.decode(new r.default.Reader(e)))
                }
                Timeout(e) {
                    const t = n.MsgTimeout.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Msg", "Timeout", t).then(e => n.MsgTimeoutResponse.decode(new r.default.Reader(e)))
                }
                TimeoutOnClose(e) {
                    const t = n.MsgTimeoutOnClose.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Msg", "TimeoutOnClose", t).then(e => n.MsgTimeoutOnCloseResponse.decode(new r.default.Reader(e)))
                }
                Acknowledgement(e) {
                    const t = n.MsgAcknowledgement.encode(e).finish();
                    return this.rpc.request("ibc.core.channel.v1.Msg", "Acknowledgement", t).then(e => n.MsgAcknowledgementResponse.decode(new r.default.Reader(e)))
                }
            };
            var P = (() => {
                if (void 0 !== P) return P;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const w = P.atob || (e => P.Buffer.from(e, "base64").toString("binary"));

            function q(e) {
                const n = w(e),
                    t = new Uint8Array(n.length);
                for (let e = 0; e < n.length; ++e) t[e] = n.charCodeAt(e);
                return t
            }
            const J = P.btoa || (e => P.Buffer.from(e, "binary").toString("base64"));

            function T(e) {
                const n = [];
                for (const t of e) n.push(String.fromCharCode(t));
                return J(n.join(""))
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4385: function(e, n, t) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.MsgClientImpl = n.MsgSubmitMisbehaviourResponse = n.MsgSubmitMisbehaviour = n.MsgUpgradeClientResponse = n.MsgUpgradeClient = n.MsgUpdateClientResponse = n.MsgUpdateClient = n.MsgCreateClientResponse = n.MsgCreateClient = n.protobufPackage = void 0;
            const i = o(t(1)),
                r = o(t(8)),
                s = t(113);
            n.protobufPackage = "ibc.core.client.v1";
            const a = {
                signer: ""
            };
            n.MsgCreateClient = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.clientState && s.Any.encode(e.clientState, n.uint32(10).fork()).ldelim(), void 0 !== e.consensusState && s.Any.encode(e.consensusState, n.uint32(18).fork()).ldelim(), "" !== e.signer && n.uint32(26).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, a);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientState = s.Any.decode(t, t.uint32());
                                break;
                            case 2:
                                i.consensusState = s.Any.decode(t, t.uint32());
                                break;
                            case 3:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, a);
                    return void 0 !== e.clientState && null !== e.clientState ? n.clientState = s.Any.fromJSON(e.clientState) : n.clientState = void 0, void 0 !== e.consensusState && null !== e.consensusState ? n.consensusState = s.Any.fromJSON(e.consensusState) : n.consensusState = void 0, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.clientState && (n.clientState = e.clientState ? s.Any.toJSON(e.clientState) : void 0), void 0 !== e.consensusState && (n.consensusState = e.consensusState ? s.Any.toJSON(e.consensusState) : void 0), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n;
                    const t = Object.assign({}, a);
                    return void 0 !== e.clientState && null !== e.clientState ? t.clientState = s.Any.fromPartial(e.clientState) : t.clientState = void 0, void 0 !== e.consensusState && null !== e.consensusState ? t.consensusState = s.Any.fromPartial(e.consensusState) : t.consensusState = void 0, t.signer = null !== (n = e.signer) && void 0 !== n ? n : "", t
                }
            };
            const c = {};
            n.MsgCreateClientResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, c);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, c),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, c)
            };
            const d = {
                clientId: "",
                signer: ""
            };
            n.MsgUpdateClient = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.clientId && n.uint32(10).string(e.clientId), void 0 !== e.header && s.Any.encode(e.header, n.uint32(18).fork()).ldelim(), "" !== e.signer && n.uint32(26).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, d);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = t.string();
                                break;
                            case 2:
                                i.header = s.Any.decode(t, t.uint32());
                                break;
                            case 3:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, d);
                    return void 0 !== e.clientId && null !== e.clientId ? n.clientId = String(e.clientId) : n.clientId = "", void 0 !== e.header && null !== e.header ? n.header = s.Any.fromJSON(e.header) : n.header = void 0, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.clientId && (n.clientId = e.clientId), void 0 !== e.header && (n.header = e.header ? s.Any.toJSON(e.header) : void 0), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, d);
                    return o.clientId = null !== (n = e.clientId) && void 0 !== n ? n : "", void 0 !== e.header && null !== e.header ? o.header = s.Any.fromPartial(e.header) : o.header = void 0, o.signer = null !== (t = e.signer) && void 0 !== t ? t : "", o
                }
            };
            const l = {};
            n.MsgUpdateClientResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, l);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, l),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, l)
            };
            const u = {
                clientId: "",
                signer: ""
            };
            n.MsgUpgradeClient = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.clientId && n.uint32(10).string(e.clientId), void 0 !== e.clientState && s.Any.encode(e.clientState, n.uint32(18).fork()).ldelim(), void 0 !== e.consensusState && s.Any.encode(e.consensusState, n.uint32(26).fork()).ldelim(), 0 !== e.proofUpgradeClient.length && n.uint32(34).bytes(e.proofUpgradeClient), 0 !== e.proofUpgradeConsensusState.length && n.uint32(42).bytes(e.proofUpgradeConsensusState), "" !== e.signer && n.uint32(50).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, u);
                    for (i.proofUpgradeClient = new Uint8Array, i.proofUpgradeConsensusState = new Uint8Array; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = t.string();
                                break;
                            case 2:
                                i.clientState = s.Any.decode(t, t.uint32());
                                break;
                            case 3:
                                i.consensusState = s.Any.decode(t, t.uint32());
                                break;
                            case 4:
                                i.proofUpgradeClient = t.bytes();
                                break;
                            case 5:
                                i.proofUpgradeConsensusState = t.bytes();
                                break;
                            case 6:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, u);
                    return n.proofUpgradeClient = new Uint8Array, n.proofUpgradeConsensusState = new Uint8Array, void 0 !== e.clientId && null !== e.clientId ? n.clientId = String(e.clientId) : n.clientId = "", void 0 !== e.clientState && null !== e.clientState ? n.clientState = s.Any.fromJSON(e.clientState) : n.clientState = void 0, void 0 !== e.consensusState && null !== e.consensusState ? n.consensusState = s.Any.fromJSON(e.consensusState) : n.consensusState = void 0, void 0 !== e.proofUpgradeClient && null !== e.proofUpgradeClient && (n.proofUpgradeClient = m(e.proofUpgradeClient)), void 0 !== e.proofUpgradeConsensusState && null !== e.proofUpgradeConsensusState && (n.proofUpgradeConsensusState = m(e.proofUpgradeConsensusState)), void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.clientId && (n.clientId = e.clientId), void 0 !== e.clientState && (n.clientState = e.clientState ? s.Any.toJSON(e.clientState) : void 0), void 0 !== e.consensusState && (n.consensusState = e.consensusState ? s.Any.toJSON(e.consensusState) : void 0), void 0 !== e.proofUpgradeClient && (n.proofUpgradeClient = I(void 0 !== e.proofUpgradeClient ? e.proofUpgradeClient : new Uint8Array)), void 0 !== e.proofUpgradeConsensusState && (n.proofUpgradeConsensusState = I(void 0 !== e.proofUpgradeConsensusState ? e.proofUpgradeConsensusState : new Uint8Array)), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t, o, i;
                    const r = Object.assign({}, u);
                    return r.clientId = null !== (n = e.clientId) && void 0 !== n ? n : "", void 0 !== e.clientState && null !== e.clientState ? r.clientState = s.Any.fromPartial(e.clientState) : r.clientState = void 0, void 0 !== e.consensusState && null !== e.consensusState ? r.consensusState = s.Any.fromPartial(e.consensusState) : r.consensusState = void 0, r.proofUpgradeClient = null !== (t = e.proofUpgradeClient) && void 0 !== t ? t : new Uint8Array, r.proofUpgradeConsensusState = null !== (o = e.proofUpgradeConsensusState) && void 0 !== o ? o : new Uint8Array, r.signer = null !== (i = e.signer) && void 0 !== i ? i : "", r
                }
            };
            const p = {};
            n.MsgUpgradeClientResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, p);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, p),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, p)
            };
            const f = {
                clientId: "",
                signer: ""
            };
            n.MsgSubmitMisbehaviour = {
                encode: (e, n = r.default.Writer.create()) => ("" !== e.clientId && n.uint32(10).string(e.clientId), void 0 !== e.misbehaviour && s.Any.encode(e.misbehaviour, n.uint32(18).fork()).ldelim(), "" !== e.signer && n.uint32(26).string(e.signer), n),
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, f);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = t.string();
                                break;
                            case 2:
                                i.misbehaviour = s.Any.decode(t, t.uint32());
                                break;
                            case 3:
                                i.signer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const n = Object.assign({}, f);
                    return void 0 !== e.clientId && null !== e.clientId ? n.clientId = String(e.clientId) : n.clientId = "", void 0 !== e.misbehaviour && null !== e.misbehaviour ? n.misbehaviour = s.Any.fromJSON(e.misbehaviour) : n.misbehaviour = void 0, void 0 !== e.signer && null !== e.signer ? n.signer = String(e.signer) : n.signer = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.clientId && (n.clientId = e.clientId), void 0 !== e.misbehaviour && (n.misbehaviour = e.misbehaviour ? s.Any.toJSON(e.misbehaviour) : void 0), void 0 !== e.signer && (n.signer = e.signer), n
                },
                fromPartial(e) {
                    var n, t;
                    const o = Object.assign({}, f);
                    return o.clientId = null !== (n = e.clientId) && void 0 !== n ? n : "", void 0 !== e.misbehaviour && null !== e.misbehaviour ? o.misbehaviour = s.Any.fromPartial(e.misbehaviour) : o.misbehaviour = void 0, o.signer = null !== (t = e.signer) && void 0 !== t ? t : "", o
                }
            };
            const g = {};
            n.MsgSubmitMisbehaviourResponse = {
                encode: (e, n = r.default.Writer.create()) => n,
                decode(e, n) {
                    const t = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === n ? t.len : t.pos + n;
                    const i = Object.assign({}, g);
                    for (; t.pos < o;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, g),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, g)
            };
            n.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.CreateClient = this.CreateClient.bind(this), this.UpdateClient = this.UpdateClient.bind(this), this.UpgradeClient = this.UpgradeClient.bind(this), this.SubmitMisbehaviour = this.SubmitMisbehaviour.bind(this)
                }
                CreateClient(e) {
                    const t = n.MsgCreateClient.encode(e).finish();
                    return this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", t).then(e => n.MsgCreateClientResponse.decode(new r.default.Reader(e)))
                }
                UpdateClient(e) {
                    const t = n.MsgUpdateClient.encode(e).finish();
                    return this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", t).then(e => n.MsgUpdateClientResponse.decode(new r.default.Reader(e)))
                }
                UpgradeClient(e) {
                    const t = n.MsgUpgradeClient.encode(e).finish();
                    return this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", t).then(e => n.MsgUpgradeClientResponse.decode(new r.default.Reader(e)))
                }
                SubmitMisbehaviour(e) {
                    const t = n.MsgSubmitMisbehaviour.encode(e).finish();
                    return this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", t).then(e => n.MsgSubmitMisbehaviourResponse.decode(new r.default.Reader(e)))
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

            function m(e) {
                const n = v(e),
                    t = new Uint8Array(n.length);
                for (let e = 0; e < n.length; ++e) t[e] = n.charCodeAt(e);
                return t
            }
            const S = h.btoa || (e => h.Buffer.from(e, "binary").toString("base64"));

            function I(e) {
                const n = [];
                for (const t of e) n.push(String.fromCharCode(t));
                return S(n.join(""))
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        }
    }
]);