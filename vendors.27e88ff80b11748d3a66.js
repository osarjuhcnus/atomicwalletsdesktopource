(window.webpackJsonp = window.webpackJsonp || []).push([
    [93], {
        2042: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Version = t.ConnectionPaths = t.ClientPaths = t.Counterparty = t.IdentifiedConnection = t.ConnectionEnd = t.stateToJSON = t.stateFromJSON = t.State = t.protobufPackage = void 0;
            const i = n(o(1)),
                r = n(o(8)),
                s = o(2043);
            var a;

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
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return a.UNRECOGNIZED
                }
            }

            function c(e) {
                switch (e) {
                    case a.STATE_UNINITIALIZED_UNSPECIFIED:
                        return "STATE_UNINITIALIZED_UNSPECIFIED";
                    case a.STATE_INIT:
                        return "STATE_INIT";
                    case a.STATE_TRYOPEN:
                        return "STATE_TRYOPEN";
                    case a.STATE_OPEN:
                        return "STATE_OPEN";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "ibc.core.connection.v1",
                function(e) {
                    e[e.STATE_UNINITIALIZED_UNSPECIFIED = 0] = "STATE_UNINITIALIZED_UNSPECIFIED", e[e.STATE_INIT = 1] = "STATE_INIT", e[e.STATE_TRYOPEN = 2] = "STATE_TRYOPEN", e[e.STATE_OPEN = 3] = "STATE_OPEN", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(a = t.State || (t.State = {})), t.stateFromJSON = d, t.stateToJSON = c;
            const l = {
                clientId: "",
                state: 0,
                delayPeriod: i.default.UZERO
            };
            t.ConnectionEnd = {
                encode(e, o = r.default.Writer.create()) {
                    "" !== e.clientId && o.uint32(10).string(e.clientId);
                    for (const n of e.versions) t.Version.encode(n, o.uint32(18).fork()).ldelim();
                    return 0 !== e.state && o.uint32(24).int32(e.state), void 0 !== e.counterparty && t.Counterparty.encode(e.counterparty, o.uint32(34).fork()).ldelim(), e.delayPeriod.isZero() || o.uint32(40).uint64(e.delayPeriod), o
                },
                decode(e, o) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, l);
                    for (s.versions = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.clientId = n.string();
                                break;
                            case 2:
                                s.versions.push(t.Version.decode(n, n.uint32()));
                                break;
                            case 3:
                                s.state = n.int32();
                                break;
                            case 4:
                                s.counterparty = t.Counterparty.decode(n, n.uint32());
                                break;
                            case 5:
                                s.delayPeriod = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, l);
                    if (o.versions = [], void 0 !== e.clientId && null !== e.clientId ? o.clientId = String(e.clientId) : o.clientId = "", void 0 !== e.versions && null !== e.versions)
                        for (const n of e.versions) o.versions.push(t.Version.fromJSON(n));
                    return void 0 !== e.state && null !== e.state ? o.state = d(e.state) : o.state = 0, void 0 !== e.counterparty && null !== e.counterparty ? o.counterparty = t.Counterparty.fromJSON(e.counterparty) : o.counterparty = void 0, void 0 !== e.delayPeriod && null !== e.delayPeriod ? o.delayPeriod = i.default.fromString(e.delayPeriod) : o.delayPeriod = i.default.UZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.clientId && (o.clientId = e.clientId), e.versions ? o.versions = e.versions.map(e => e ? t.Version.toJSON(e) : void 0) : o.versions = [], void 0 !== e.state && (o.state = c(e.state)), void 0 !== e.counterparty && (o.counterparty = e.counterparty ? t.Counterparty.toJSON(e.counterparty) : void 0), void 0 !== e.delayPeriod && (o.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()), o
                },
                fromPartial(e) {
                    var o, n;
                    const r = Object.assign({}, l);
                    if (r.clientId = null !== (o = e.clientId) && void 0 !== o ? o : "", r.versions = [], void 0 !== e.versions && null !== e.versions)
                        for (const o of e.versions) r.versions.push(t.Version.fromPartial(o));
                    return r.state = null !== (n = e.state) && void 0 !== n ? n : 0, void 0 !== e.counterparty && null !== e.counterparty ? r.counterparty = t.Counterparty.fromPartial(e.counterparty) : r.counterparty = void 0, void 0 !== e.delayPeriod && null !== e.delayPeriod ? r.delayPeriod = e.delayPeriod : r.delayPeriod = i.default.UZERO, r
                }
            };
            const u = {
                id: "",
                clientId: "",
                state: 0,
                delayPeriod: i.default.UZERO
            };
            t.IdentifiedConnection = {
                encode(e, o = r.default.Writer.create()) {
                    "" !== e.id && o.uint32(10).string(e.id), "" !== e.clientId && o.uint32(18).string(e.clientId);
                    for (const n of e.versions) t.Version.encode(n, o.uint32(26).fork()).ldelim();
                    return 0 !== e.state && o.uint32(32).int32(e.state), void 0 !== e.counterparty && t.Counterparty.encode(e.counterparty, o.uint32(42).fork()).ldelim(), e.delayPeriod.isZero() || o.uint32(48).uint64(e.delayPeriod), o
                },
                decode(e, o) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, u);
                    for (s.versions = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.id = n.string();
                                break;
                            case 2:
                                s.clientId = n.string();
                                break;
                            case 3:
                                s.versions.push(t.Version.decode(n, n.uint32()));
                                break;
                            case 4:
                                s.state = n.int32();
                                break;
                            case 5:
                                s.counterparty = t.Counterparty.decode(n, n.uint32());
                                break;
                            case 6:
                                s.delayPeriod = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, u);
                    if (o.versions = [], void 0 !== e.id && null !== e.id ? o.id = String(e.id) : o.id = "", void 0 !== e.clientId && null !== e.clientId ? o.clientId = String(e.clientId) : o.clientId = "", void 0 !== e.versions && null !== e.versions)
                        for (const n of e.versions) o.versions.push(t.Version.fromJSON(n));
                    return void 0 !== e.state && null !== e.state ? o.state = d(e.state) : o.state = 0, void 0 !== e.counterparty && null !== e.counterparty ? o.counterparty = t.Counterparty.fromJSON(e.counterparty) : o.counterparty = void 0, void 0 !== e.delayPeriod && null !== e.delayPeriod ? o.delayPeriod = i.default.fromString(e.delayPeriod) : o.delayPeriod = i.default.UZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.id && (o.id = e.id), void 0 !== e.clientId && (o.clientId = e.clientId), e.versions ? o.versions = e.versions.map(e => e ? t.Version.toJSON(e) : void 0) : o.versions = [], void 0 !== e.state && (o.state = c(e.state)), void 0 !== e.counterparty && (o.counterparty = e.counterparty ? t.Counterparty.toJSON(e.counterparty) : void 0), void 0 !== e.delayPeriod && (o.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()), o
                },
                fromPartial(e) {
                    var o, n, r;
                    const s = Object.assign({}, u);
                    if (s.id = null !== (o = e.id) && void 0 !== o ? o : "", s.clientId = null !== (n = e.clientId) && void 0 !== n ? n : "", s.versions = [], void 0 !== e.versions && null !== e.versions)
                        for (const o of e.versions) s.versions.push(t.Version.fromPartial(o));
                    return s.state = null !== (r = e.state) && void 0 !== r ? r : 0, void 0 !== e.counterparty && null !== e.counterparty ? s.counterparty = t.Counterparty.fromPartial(e.counterparty) : s.counterparty = void 0, void 0 !== e.delayPeriod && null !== e.delayPeriod ? s.delayPeriod = e.delayPeriod : s.delayPeriod = i.default.UZERO, s
                }
            };
            const f = {
                clientId: "",
                connectionId: ""
            };
            t.Counterparty = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.clientId && t.uint32(10).string(e.clientId), "" !== e.connectionId && t.uint32(18).string(e.connectionId), void 0 !== e.prefix && s.MerklePrefix.encode(e.prefix, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, f);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = o.string();
                                break;
                            case 2:
                                i.connectionId = o.string();
                                break;
                            case 3:
                                i.prefix = s.MerklePrefix.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.clientId && null !== e.clientId ? t.clientId = String(e.clientId) : t.clientId = "", void 0 !== e.connectionId && null !== e.connectionId ? t.connectionId = String(e.connectionId) : t.connectionId = "", void 0 !== e.prefix && null !== e.prefix ? t.prefix = s.MerklePrefix.fromJSON(e.prefix) : t.prefix = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.clientId && (t.clientId = e.clientId), void 0 !== e.connectionId && (t.connectionId = e.connectionId), void 0 !== e.prefix && (t.prefix = e.prefix ? s.MerklePrefix.toJSON(e.prefix) : void 0), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, f);
                    return n.clientId = null !== (t = e.clientId) && void 0 !== t ? t : "", n.connectionId = null !== (o = e.connectionId) && void 0 !== o ? o : "", void 0 !== e.prefix && null !== e.prefix ? n.prefix = s.MerklePrefix.fromPartial(e.prefix) : n.prefix = void 0, n
                }
            };
            const p = {
                paths: ""
            };
            t.ClientPaths = {
                encode(e, t = r.default.Writer.create()) {
                    for (const o of e.paths) t.uint32(10).string(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, p);
                    for (i.paths = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.paths.push(o.string());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, p);
                    if (t.paths = [], void 0 !== e.paths && null !== e.paths)
                        for (const o of e.paths) t.paths.push(String(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.paths ? t.paths = e.paths.map(e => e) : t.paths = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, p);
                    if (t.paths = [], void 0 !== e.paths && null !== e.paths)
                        for (const o of e.paths) t.paths.push(o);
                    return t
                }
            };
            const g = {
                clientId: "",
                paths: ""
            };
            t.ConnectionPaths = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.clientId && t.uint32(10).string(e.clientId);
                    for (const o of e.paths) t.uint32(18).string(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, g);
                    for (i.paths = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = o.string();
                                break;
                            case 2:
                                i.paths.push(o.string());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    if (t.paths = [], void 0 !== e.clientId && null !== e.clientId ? t.clientId = String(e.clientId) : t.clientId = "", void 0 !== e.paths && null !== e.paths)
                        for (const o of e.paths) t.paths.push(String(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.clientId && (t.clientId = e.clientId), e.paths ? t.paths = e.paths.map(e => e) : t.paths = [], t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, g);
                    if (o.clientId = null !== (t = e.clientId) && void 0 !== t ? t : "", o.paths = [], void 0 !== e.paths && null !== e.paths)
                        for (const t of e.paths) o.paths.push(t);
                    return o
                }
            };
            const v = {
                identifier: "",
                features: ""
            };
            t.Version = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.identifier && t.uint32(10).string(e.identifier);
                    for (const o of e.features) t.uint32(18).string(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, v);
                    for (i.features = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.identifier = o.string();
                                break;
                            case 2:
                                i.features.push(o.string());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    if (t.features = [], void 0 !== e.identifier && null !== e.identifier ? t.identifier = String(e.identifier) : t.identifier = "", void 0 !== e.features && null !== e.features)
                        for (const o of e.features) t.features.push(String(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.identifier && (t.identifier = e.identifier), e.features ? t.features = e.features.map(e => e) : t.features = [], t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, v);
                    if (o.identifier = null !== (t = e.identifier) && void 0 !== t ? t : "", o.features = [], void 0 !== e.features && null !== e.features)
                        for (const t of e.features) o.features.push(t);
                    return o
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        2043: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MerkleProof = t.MerklePath = t.MerklePrefix = t.MerkleRoot = t.protobufPackage = void 0;
            const i = n(o(1)),
                r = n(o(8)),
                s = o(2044);
            t.protobufPackage = "ibc.core.commitment.v1";
            const a = {};
            t.MerkleRoot = {
                encode: (e, t = r.default.Writer.create()) => (0 !== e.hash.length && t.uint32(10).bytes(e.hash), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, a);
                    for (i.hash = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.hash = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, a);
                    return t.hash = new Uint8Array, void 0 !== e.hash && null !== e.hash && (t.hash = p(e.hash)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.hash && (t.hash = v(void 0 !== e.hash ? e.hash : new Uint8Array)), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, a);
                    return o.hash = null !== (t = e.hash) && void 0 !== t ? t : new Uint8Array, o
                }
            };
            const d = {};
            t.MerklePrefix = {
                encode: (e, t = r.default.Writer.create()) => (0 !== e.keyPrefix.length && t.uint32(10).bytes(e.keyPrefix), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, d);
                    for (i.keyPrefix = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.keyPrefix = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return t.keyPrefix = new Uint8Array, void 0 !== e.keyPrefix && null !== e.keyPrefix && (t.keyPrefix = p(e.keyPrefix)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.keyPrefix && (t.keyPrefix = v(void 0 !== e.keyPrefix ? e.keyPrefix : new Uint8Array)), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, d);
                    return o.keyPrefix = null !== (t = e.keyPrefix) && void 0 !== t ? t : new Uint8Array, o
                }
            };
            const c = {
                keyPath: ""
            };
            t.MerklePath = {
                encode(e, t = r.default.Writer.create()) {
                    for (const o of e.keyPath) t.uint32(10).string(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, c);
                    for (i.keyPath = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.keyPath.push(o.string());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    if (t.keyPath = [], void 0 !== e.keyPath && null !== e.keyPath)
                        for (const o of e.keyPath) t.keyPath.push(String(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.keyPath ? t.keyPath = e.keyPath.map(e => e) : t.keyPath = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    if (t.keyPath = [], void 0 !== e.keyPath && null !== e.keyPath)
                        for (const o of e.keyPath) t.keyPath.push(o);
                    return t
                }
            };
            const l = {};
            t.MerkleProof = {
                encode(e, t = r.default.Writer.create()) {
                    for (const o of e.proofs) s.CommitmentProof.encode(o, t.uint32(10).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, l);
                    for (i.proofs = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.proofs.push(s.CommitmentProof.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    if (t.proofs = [], void 0 !== e.proofs && null !== e.proofs)
                        for (const o of e.proofs) t.proofs.push(s.CommitmentProof.fromJSON(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.proofs ? t.proofs = e.proofs.map(e => e ? s.CommitmentProof.toJSON(e) : void 0) : t.proofs = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    if (t.proofs = [], void 0 !== e.proofs && null !== e.proofs)
                        for (const o of e.proofs) t.proofs.push(s.CommitmentProof.fromPartial(o));
                    return t
                }
            };
            var u = (() => {
                if (void 0 !== u) return u;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const f = u.atob || (e => u.Buffer.from(e, "base64").toString("binary"));

            function p(e) {
                const t = f(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const g = u.btoa || (e => u.Buffer.from(e, "binary").toString("base64"));

            function v(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return g(t.join(""))
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4333: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QueryClientImpl = t.QueryConnectionConsensusStateResponse = t.QueryConnectionConsensusStateRequest = t.QueryConnectionClientStateResponse = t.QueryConnectionClientStateRequest = t.QueryClientConnectionsResponse = t.QueryClientConnectionsRequest = t.QueryConnectionsResponse = t.QueryConnectionsRequest = t.QueryConnectionResponse = t.QueryConnectionRequest = t.protobufPackage = void 0;
            const i = n(o(1)),
                r = n(o(8)),
                s = o(2042),
                a = o(296),
                d = o(295),
                c = o(113);
            t.protobufPackage = "ibc.core.connection.v1";
            const l = {
                connectionId: ""
            };
            t.QueryConnectionRequest = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.connectionId && t.uint32(10).string(e.connectionId), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, l);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.connectionId = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.connectionId && null !== e.connectionId ? t.connectionId = String(e.connectionId) : t.connectionId = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.connectionId && (t.connectionId = e.connectionId), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, l);
                    return o.connectionId = null !== (t = e.connectionId) && void 0 !== t ? t : "", o
                }
            };
            const u = {};
            t.QueryConnectionResponse = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.connection && s.ConnectionEnd.encode(e.connection, t.uint32(10).fork()).ldelim(), 0 !== e.proof.length && t.uint32(18).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, u);
                    for (i.proof = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.connection = s.ConnectionEnd.decode(o, o.uint32());
                                break;
                            case 2:
                                i.proof = o.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return t.proof = new Uint8Array, void 0 !== e.connection && null !== e.connection ? t.connection = s.ConnectionEnd.fromJSON(e.connection) : t.connection = void 0, void 0 !== e.proof && null !== e.proof && (t.proof = I(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = a.Height.fromJSON(e.proofHeight) : t.proofHeight = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.connection && (t.connection = e.connection ? s.ConnectionEnd.toJSON(e.connection) : void 0), void 0 !== e.proof && (t.proof = C(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (t.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, u);
                    return void 0 !== e.connection && null !== e.connection ? o.connection = s.ConnectionEnd.fromPartial(e.connection) : o.connection = void 0, o.proof = null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? o.proofHeight = a.Height.fromPartial(e.proofHeight) : o.proofHeight = void 0, o
                }
            };
            const f = {};
            t.QueryConnectionsRequest = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.pagination && d.PageRequest.encode(e.pagination, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, f);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.pagination = d.PageRequest.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = d.PageRequest.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.pagination && (t.pagination = e.pagination ? d.PageRequest.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = d.PageRequest.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const p = {};
            t.QueryConnectionsResponse = {
                encode(e, t = r.default.Writer.create()) {
                    for (const o of e.connections) s.IdentifiedConnection.encode(o, t.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && d.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(), void 0 !== e.height && a.Height.encode(e.height, t.uint32(26).fork()).ldelim(), t
                },
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, p);
                    for (i.connections = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.connections.push(s.IdentifiedConnection.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.pagination = d.PageResponse.decode(o, o.uint32());
                                break;
                            case 3:
                                i.height = a.Height.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, p);
                    if (t.connections = [], void 0 !== e.connections && null !== e.connections)
                        for (const o of e.connections) t.connections.push(s.IdentifiedConnection.fromJSON(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = d.PageResponse.fromJSON(e.pagination) : t.pagination = void 0, void 0 !== e.height && null !== e.height ? t.height = a.Height.fromJSON(e.height) : t.height = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.connections ? t.connections = e.connections.map(e => e ? s.IdentifiedConnection.toJSON(e) : void 0) : t.connections = [], void 0 !== e.pagination && (t.pagination = e.pagination ? d.PageResponse.toJSON(e.pagination) : void 0), void 0 !== e.height && (t.height = e.height ? a.Height.toJSON(e.height) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, p);
                    if (t.connections = [], void 0 !== e.connections && null !== e.connections)
                        for (const o of e.connections) t.connections.push(s.IdentifiedConnection.fromPartial(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = d.PageResponse.fromPartial(e.pagination) : t.pagination = void 0, void 0 !== e.height && null !== e.height ? t.height = a.Height.fromPartial(e.height) : t.height = void 0, t
                }
            };
            const g = {
                clientId: ""
            };
            t.QueryClientConnectionsRequest = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.clientId && t.uint32(10).string(e.clientId), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, g);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.clientId && null !== e.clientId ? t.clientId = String(e.clientId) : t.clientId = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.clientId && (t.clientId = e.clientId), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, g);
                    return o.clientId = null !== (t = e.clientId) && void 0 !== t ? t : "", o
                }
            };
            const v = {
                connectionPaths: ""
            };
            t.QueryClientConnectionsResponse = {
                encode(e, t = r.default.Writer.create()) {
                    for (const o of e.connectionPaths) t.uint32(10).string(o);
                    return 0 !== e.proof.length && t.uint32(18).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(), t
                },
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, v);
                    for (i.connectionPaths = [], i.proof = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.connectionPaths.push(o.string());
                                break;
                            case 2:
                                i.proof = o.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    if (t.connectionPaths = [], t.proof = new Uint8Array, void 0 !== e.connectionPaths && null !== e.connectionPaths)
                        for (const o of e.connectionPaths) t.connectionPaths.push(String(o));
                    return void 0 !== e.proof && null !== e.proof && (t.proof = I(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = a.Height.fromJSON(e.proofHeight) : t.proofHeight = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.connectionPaths ? t.connectionPaths = e.connectionPaths.map(e => e) : t.connectionPaths = [], void 0 !== e.proof && (t.proof = C(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (t.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, v);
                    if (o.connectionPaths = [], void 0 !== e.connectionPaths && null !== e.connectionPaths)
                        for (const t of e.connectionPaths) o.connectionPaths.push(t);
                    return o.proof = null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? o.proofHeight = a.Height.fromPartial(e.proofHeight) : o.proofHeight = void 0, o
                }
            };
            const h = {
                connectionId: ""
            };
            t.QueryConnectionClientStateRequest = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.connectionId && t.uint32(10).string(e.connectionId), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, h);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.connectionId = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.connectionId && null !== e.connectionId ? t.connectionId = String(e.connectionId) : t.connectionId = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.connectionId && (t.connectionId = e.connectionId), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, h);
                    return o.connectionId = null !== (t = e.connectionId) && void 0 !== t ? t : "", o
                }
            };
            const y = {};
            t.QueryConnectionClientStateResponse = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.identifiedClientState && a.IdentifiedClientState.encode(e.identifiedClientState, t.uint32(10).fork()).ldelim(), 0 !== e.proof.length && t.uint32(18).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, y);
                    for (i.proof = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.identifiedClientState = a.IdentifiedClientState.decode(o, o.uint32());
                                break;
                            case 2:
                                i.proof = o.bytes();
                                break;
                            case 3:
                                i.proofHeight = a.Height.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, y);
                    return t.proof = new Uint8Array, void 0 !== e.identifiedClientState && null !== e.identifiedClientState ? t.identifiedClientState = a.IdentifiedClientState.fromJSON(e.identifiedClientState) : t.identifiedClientState = void 0, void 0 !== e.proof && null !== e.proof && (t.proof = I(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = a.Height.fromJSON(e.proofHeight) : t.proofHeight = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.identifiedClientState && (t.identifiedClientState = e.identifiedClientState ? a.IdentifiedClientState.toJSON(e.identifiedClientState) : void 0), void 0 !== e.proof && (t.proof = C(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (t.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, y);
                    return void 0 !== e.identifiedClientState && null !== e.identifiedClientState ? o.identifiedClientState = a.IdentifiedClientState.fromPartial(e.identifiedClientState) : o.identifiedClientState = void 0, o.proof = null !== (t = e.proof) && void 0 !== t ? t : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? o.proofHeight = a.Height.fromPartial(e.proofHeight) : o.proofHeight = void 0, o
                }
            };
            const S = {
                connectionId: "",
                revisionNumber: i.default.UZERO,
                revisionHeight: i.default.UZERO
            };
            t.QueryConnectionConsensusStateRequest = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.connectionId && t.uint32(10).string(e.connectionId), e.revisionNumber.isZero() || t.uint32(16).uint64(e.revisionNumber), e.revisionHeight.isZero() || t.uint32(24).uint64(e.revisionHeight), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, S);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.connectionId = o.string();
                                break;
                            case 2:
                                i.revisionNumber = o.uint64();
                                break;
                            case 3:
                                i.revisionHeight = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, S);
                    return void 0 !== e.connectionId && null !== e.connectionId ? t.connectionId = String(e.connectionId) : t.connectionId = "", void 0 !== e.revisionNumber && null !== e.revisionNumber ? t.revisionNumber = i.default.fromString(e.revisionNumber) : t.revisionNumber = i.default.UZERO, void 0 !== e.revisionHeight && null !== e.revisionHeight ? t.revisionHeight = i.default.fromString(e.revisionHeight) : t.revisionHeight = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.connectionId && (t.connectionId = e.connectionId), void 0 !== e.revisionNumber && (t.revisionNumber = (e.revisionNumber || i.default.UZERO).toString()), void 0 !== e.revisionHeight && (t.revisionHeight = (e.revisionHeight || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, S);
                    return o.connectionId = null !== (t = e.connectionId) && void 0 !== t ? t : "", void 0 !== e.revisionNumber && null !== e.revisionNumber ? o.revisionNumber = e.revisionNumber : o.revisionNumber = i.default.UZERO, void 0 !== e.revisionHeight && null !== e.revisionHeight ? o.revisionHeight = e.revisionHeight : o.revisionHeight = i.default.UZERO, o
                }
            };
            const m = {
                clientId: ""
            };
            t.QueryConnectionConsensusStateResponse = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.consensusState && c.Any.encode(e.consensusState, t.uint32(10).fork()).ldelim(), "" !== e.clientId && t.uint32(18).string(e.clientId), 0 !== e.proof.length && t.uint32(26).bytes(e.proof), void 0 !== e.proofHeight && a.Height.encode(e.proofHeight, t.uint32(34).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, m);
                    for (i.proof = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.consensusState = c.Any.decode(o, o.uint32());
                                break;
                            case 2:
                                i.clientId = o.string();
                                break;
                            case 3:
                                i.proof = o.bytes();
                                break;
                            case 4:
                                i.proofHeight = a.Height.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    return t.proof = new Uint8Array, void 0 !== e.consensusState && null !== e.consensusState ? t.consensusState = c.Any.fromJSON(e.consensusState) : t.consensusState = void 0, void 0 !== e.clientId && null !== e.clientId ? t.clientId = String(e.clientId) : t.clientId = "", void 0 !== e.proof && null !== e.proof && (t.proof = I(e.proof)), void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = a.Height.fromJSON(e.proofHeight) : t.proofHeight = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.consensusState && (t.consensusState = e.consensusState ? c.Any.toJSON(e.consensusState) : void 0), void 0 !== e.clientId && (t.clientId = e.clientId), void 0 !== e.proof && (t.proof = C(void 0 !== e.proof ? e.proof : new Uint8Array)), void 0 !== e.proofHeight && (t.proofHeight = e.proofHeight ? a.Height.toJSON(e.proofHeight) : void 0), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, m);
                    return void 0 !== e.consensusState && null !== e.consensusState ? n.consensusState = c.Any.fromPartial(e.consensusState) : n.consensusState = void 0, n.clientId = null !== (t = e.clientId) && void 0 !== t ? t : "", n.proof = null !== (o = e.proof) && void 0 !== o ? o : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? n.proofHeight = a.Height.fromPartial(e.proofHeight) : n.proofHeight = void 0, n
                }
            };
            t.QueryClientImpl = class QueryClientImpl {
                constructor(e) {
                    this.rpc = e, this.Connection = this.Connection.bind(this), this.Connections = this.Connections.bind(this), this.ClientConnections = this.ClientConnections.bind(this), this.ConnectionClientState = this.ConnectionClientState.bind(this), this.ConnectionConsensusState = this.ConnectionConsensusState.bind(this)
                }
                Connection(e) {
                    const o = t.QueryConnectionRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.connection.v1.Query", "Connection", o).then(e => t.QueryConnectionResponse.decode(new r.default.Reader(e)))
                }
                Connections(e) {
                    const o = t.QueryConnectionsRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.connection.v1.Query", "Connections", o).then(e => t.QueryConnectionsResponse.decode(new r.default.Reader(e)))
                }
                ClientConnections(e) {
                    const o = t.QueryClientConnectionsRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", o).then(e => t.QueryClientConnectionsResponse.decode(new r.default.Reader(e)))
                }
                ConnectionClientState(e) {
                    const o = t.QueryConnectionClientStateRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", o).then(e => t.QueryConnectionClientStateResponse.decode(new r.default.Reader(e)))
                }
                ConnectionConsensusState(e) {
                    const o = t.QueryConnectionConsensusStateRequest.encode(e).finish();
                    return this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", o).then(e => t.QueryConnectionConsensusStateResponse.decode(new r.default.Reader(e)))
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

            function I(e) {
                const t = O(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const H = b.btoa || (e => b.Buffer.from(e, "binary").toString("base64"));

            function C(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return H(t.join(""))
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4334: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Fraction = t.Header = t.Misbehaviour = t.ConsensusState = t.ClientState = t.protobufPackage = void 0;
            const i = n(o(1)),
                r = n(o(8)),
                s = o(1148),
                a = o(296),
                d = o(2043),
                c = o(2045),
                l = o(2046),
                u = o(526),
                f = o(2044);
            t.protobufPackage = "ibc.lightclients.tendermint.v1";
            const p = {
                chainId: "",
                upgradePath: "",
                allowUpdateAfterExpiry: !1,
                allowUpdateAfterMisbehaviour: !1
            };
            t.ClientState = {
                encode(e, o = r.default.Writer.create()) {
                    "" !== e.chainId && o.uint32(10).string(e.chainId), void 0 !== e.trustLevel && t.Fraction.encode(e.trustLevel, o.uint32(18).fork()).ldelim(), void 0 !== e.trustingPeriod && s.Duration.encode(e.trustingPeriod, o.uint32(26).fork()).ldelim(), void 0 !== e.unbondingPeriod && s.Duration.encode(e.unbondingPeriod, o.uint32(34).fork()).ldelim(), void 0 !== e.maxClockDrift && s.Duration.encode(e.maxClockDrift, o.uint32(42).fork()).ldelim(), void 0 !== e.frozenHeight && a.Height.encode(e.frozenHeight, o.uint32(50).fork()).ldelim(), void 0 !== e.latestHeight && a.Height.encode(e.latestHeight, o.uint32(58).fork()).ldelim();
                    for (const t of e.proofSpecs) f.ProofSpec.encode(t, o.uint32(66).fork()).ldelim();
                    for (const t of e.upgradePath) o.uint32(74).string(t);
                    return !0 === e.allowUpdateAfterExpiry && o.uint32(80).bool(e.allowUpdateAfterExpiry), !0 === e.allowUpdateAfterMisbehaviour && o.uint32(88).bool(e.allowUpdateAfterMisbehaviour), o
                },
                decode(e, o) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const d = Object.assign({}, p);
                    for (d.proofSpecs = [], d.upgradePath = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                d.chainId = n.string();
                                break;
                            case 2:
                                d.trustLevel = t.Fraction.decode(n, n.uint32());
                                break;
                            case 3:
                                d.trustingPeriod = s.Duration.decode(n, n.uint32());
                                break;
                            case 4:
                                d.unbondingPeriod = s.Duration.decode(n, n.uint32());
                                break;
                            case 5:
                                d.maxClockDrift = s.Duration.decode(n, n.uint32());
                                break;
                            case 6:
                                d.frozenHeight = a.Height.decode(n, n.uint32());
                                break;
                            case 7:
                                d.latestHeight = a.Height.decode(n, n.uint32());
                                break;
                            case 8:
                                d.proofSpecs.push(f.ProofSpec.decode(n, n.uint32()));
                                break;
                            case 9:
                                d.upgradePath.push(n.string());
                                break;
                            case 10:
                                d.allowUpdateAfterExpiry = n.bool();
                                break;
                            case 11:
                                d.allowUpdateAfterMisbehaviour = n.bool();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return d
                },
                fromJSON(e) {
                    const o = Object.assign({}, p);
                    if (o.proofSpecs = [], o.upgradePath = [], void 0 !== e.chainId && null !== e.chainId ? o.chainId = String(e.chainId) : o.chainId = "", void 0 !== e.trustLevel && null !== e.trustLevel ? o.trustLevel = t.Fraction.fromJSON(e.trustLevel) : o.trustLevel = void 0, void 0 !== e.trustingPeriod && null !== e.trustingPeriod ? o.trustingPeriod = s.Duration.fromJSON(e.trustingPeriod) : o.trustingPeriod = void 0, void 0 !== e.unbondingPeriod && null !== e.unbondingPeriod ? o.unbondingPeriod = s.Duration.fromJSON(e.unbondingPeriod) : o.unbondingPeriod = void 0, void 0 !== e.maxClockDrift && null !== e.maxClockDrift ? o.maxClockDrift = s.Duration.fromJSON(e.maxClockDrift) : o.maxClockDrift = void 0, void 0 !== e.frozenHeight && null !== e.frozenHeight ? o.frozenHeight = a.Height.fromJSON(e.frozenHeight) : o.frozenHeight = void 0, void 0 !== e.latestHeight && null !== e.latestHeight ? o.latestHeight = a.Height.fromJSON(e.latestHeight) : o.latestHeight = void 0, void 0 !== e.proofSpecs && null !== e.proofSpecs)
                        for (const t of e.proofSpecs) o.proofSpecs.push(f.ProofSpec.fromJSON(t));
                    if (void 0 !== e.upgradePath && null !== e.upgradePath)
                        for (const t of e.upgradePath) o.upgradePath.push(String(t));
                    return void 0 !== e.allowUpdateAfterExpiry && null !== e.allowUpdateAfterExpiry ? o.allowUpdateAfterExpiry = Boolean(e.allowUpdateAfterExpiry) : o.allowUpdateAfterExpiry = !1, void 0 !== e.allowUpdateAfterMisbehaviour && null !== e.allowUpdateAfterMisbehaviour ? o.allowUpdateAfterMisbehaviour = Boolean(e.allowUpdateAfterMisbehaviour) : o.allowUpdateAfterMisbehaviour = !1, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.chainId && (o.chainId = e.chainId), void 0 !== e.trustLevel && (o.trustLevel = e.trustLevel ? t.Fraction.toJSON(e.trustLevel) : void 0), void 0 !== e.trustingPeriod && (o.trustingPeriod = e.trustingPeriod ? s.Duration.toJSON(e.trustingPeriod) : void 0), void 0 !== e.unbondingPeriod && (o.unbondingPeriod = e.unbondingPeriod ? s.Duration.toJSON(e.unbondingPeriod) : void 0), void 0 !== e.maxClockDrift && (o.maxClockDrift = e.maxClockDrift ? s.Duration.toJSON(e.maxClockDrift) : void 0), void 0 !== e.frozenHeight && (o.frozenHeight = e.frozenHeight ? a.Height.toJSON(e.frozenHeight) : void 0), void 0 !== e.latestHeight && (o.latestHeight = e.latestHeight ? a.Height.toJSON(e.latestHeight) : void 0), e.proofSpecs ? o.proofSpecs = e.proofSpecs.map(e => e ? f.ProofSpec.toJSON(e) : void 0) : o.proofSpecs = [], e.upgradePath ? o.upgradePath = e.upgradePath.map(e => e) : o.upgradePath = [], void 0 !== e.allowUpdateAfterExpiry && (o.allowUpdateAfterExpiry = e.allowUpdateAfterExpiry), void 0 !== e.allowUpdateAfterMisbehaviour && (o.allowUpdateAfterMisbehaviour = e.allowUpdateAfterMisbehaviour), o
                },
                fromPartial(e) {
                    var o, n, i;
                    const r = Object.assign({}, p);
                    if (r.chainId = null !== (o = e.chainId) && void 0 !== o ? o : "", void 0 !== e.trustLevel && null !== e.trustLevel ? r.trustLevel = t.Fraction.fromPartial(e.trustLevel) : r.trustLevel = void 0, void 0 !== e.trustingPeriod && null !== e.trustingPeriod ? r.trustingPeriod = s.Duration.fromPartial(e.trustingPeriod) : r.trustingPeriod = void 0, void 0 !== e.unbondingPeriod && null !== e.unbondingPeriod ? r.unbondingPeriod = s.Duration.fromPartial(e.unbondingPeriod) : r.unbondingPeriod = void 0, void 0 !== e.maxClockDrift && null !== e.maxClockDrift ? r.maxClockDrift = s.Duration.fromPartial(e.maxClockDrift) : r.maxClockDrift = void 0, void 0 !== e.frozenHeight && null !== e.frozenHeight ? r.frozenHeight = a.Height.fromPartial(e.frozenHeight) : r.frozenHeight = void 0, void 0 !== e.latestHeight && null !== e.latestHeight ? r.latestHeight = a.Height.fromPartial(e.latestHeight) : r.latestHeight = void 0, r.proofSpecs = [], void 0 !== e.proofSpecs && null !== e.proofSpecs)
                        for (const t of e.proofSpecs) r.proofSpecs.push(f.ProofSpec.fromPartial(t));
                    if (r.upgradePath = [], void 0 !== e.upgradePath && null !== e.upgradePath)
                        for (const t of e.upgradePath) r.upgradePath.push(t);
                    return r.allowUpdateAfterExpiry = null !== (n = e.allowUpdateAfterExpiry) && void 0 !== n && n, r.allowUpdateAfterMisbehaviour = null !== (i = e.allowUpdateAfterMisbehaviour) && void 0 !== i && i, r
                }
            };
            const g = {};
            t.ConsensusState = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.timestamp && u.Timestamp.encode(function(e) {
                    const t = (n = e.getTime() / 1e3, i.default.fromNumber(n)),
                        o = e.getTime() % 1e3 * 1e6;
                    var n;
                    return {
                        seconds: t,
                        nanos: o
                    }
                }(e.timestamp), t.uint32(10).fork()).ldelim(), void 0 !== e.root && d.MerkleRoot.encode(e.root, t.uint32(18).fork()).ldelim(), 0 !== e.nextValidatorsHash.length && t.uint32(26).bytes(e.nextValidatorsHash), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, g);
                    for (i.nextValidatorsHash = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.timestamp = O(u.Timestamp.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.root = d.MerkleRoot.decode(o, o.uint32());
                                break;
                            case 3:
                                i.nextValidatorsHash = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    var o;
                    return t.nextValidatorsHash = new Uint8Array, void 0 !== e.timestamp && null !== e.timestamp ? t.timestamp = (o = e.timestamp) instanceof Date ? o : "string" == typeof o ? new Date(o) : O(u.Timestamp.fromJSON(o)) : t.timestamp = void 0, void 0 !== e.root && null !== e.root ? t.root = d.MerkleRoot.fromJSON(e.root) : t.root = void 0, void 0 !== e.nextValidatorsHash && null !== e.nextValidatorsHash && (t.nextValidatorsHash = function(e) {
                        const t = m(e),
                            o = new Uint8Array(t.length);
                        for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                        return o
                    }(e.nextValidatorsHash)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.timestamp && (t.timestamp = e.timestamp.toISOString()), void 0 !== e.root && (t.root = e.root ? d.MerkleRoot.toJSON(e.root) : void 0), void 0 !== e.nextValidatorsHash && (t.nextValidatorsHash = function(e) {
                        const t = [];
                        for (const o of e) t.push(String.fromCharCode(o));
                        return b(t.join(""))
                    }(void 0 !== e.nextValidatorsHash ? e.nextValidatorsHash : new Uint8Array)), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, g);
                    return n.timestamp = null !== (t = e.timestamp) && void 0 !== t ? t : void 0, void 0 !== e.root && null !== e.root ? n.root = d.MerkleRoot.fromPartial(e.root) : n.root = void 0, n.nextValidatorsHash = null !== (o = e.nextValidatorsHash) && void 0 !== o ? o : new Uint8Array, n
                }
            };
            const v = {
                clientId: ""
            };
            t.Misbehaviour = {
                encode: (e, o = r.default.Writer.create()) => ("" !== e.clientId && o.uint32(10).string(e.clientId), void 0 !== e.header1 && t.Header.encode(e.header1, o.uint32(18).fork()).ldelim(), void 0 !== e.header2 && t.Header.encode(e.header2, o.uint32(26).fork()).ldelim(), o),
                decode(e, o) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const s = Object.assign({}, v);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.clientId = n.string();
                                break;
                            case 2:
                                s.header1 = t.Header.decode(n, n.uint32());
                                break;
                            case 3:
                                s.header2 = t.Header.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const o = Object.assign({}, v);
                    return void 0 !== e.clientId && null !== e.clientId ? o.clientId = String(e.clientId) : o.clientId = "", void 0 !== e.header1 && null !== e.header1 ? o.header1 = t.Header.fromJSON(e.header1) : o.header1 = void 0, void 0 !== e.header2 && null !== e.header2 ? o.header2 = t.Header.fromJSON(e.header2) : o.header2 = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.clientId && (o.clientId = e.clientId), void 0 !== e.header1 && (o.header1 = e.header1 ? t.Header.toJSON(e.header1) : void 0), void 0 !== e.header2 && (o.header2 = e.header2 ? t.Header.toJSON(e.header2) : void 0), o
                },
                fromPartial(e) {
                    var o;
                    const n = Object.assign({}, v);
                    return n.clientId = null !== (o = e.clientId) && void 0 !== o ? o : "", void 0 !== e.header1 && null !== e.header1 ? n.header1 = t.Header.fromPartial(e.header1) : n.header1 = void 0, void 0 !== e.header2 && null !== e.header2 ? n.header2 = t.Header.fromPartial(e.header2) : n.header2 = void 0, n
                }
            };
            const h = {};
            t.Header = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.signedHeader && c.SignedHeader.encode(e.signedHeader, t.uint32(10).fork()).ldelim(), void 0 !== e.validatorSet && l.ValidatorSet.encode(e.validatorSet, t.uint32(18).fork()).ldelim(), void 0 !== e.trustedHeight && a.Height.encode(e.trustedHeight, t.uint32(26).fork()).ldelim(), void 0 !== e.trustedValidators && l.ValidatorSet.encode(e.trustedValidators, t.uint32(34).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, h);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.signedHeader = c.SignedHeader.decode(o, o.uint32());
                                break;
                            case 2:
                                i.validatorSet = l.ValidatorSet.decode(o, o.uint32());
                                break;
                            case 3:
                                i.trustedHeight = a.Height.decode(o, o.uint32());
                                break;
                            case 4:
                                i.trustedValidators = l.ValidatorSet.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.signedHeader && null !== e.signedHeader ? t.signedHeader = c.SignedHeader.fromJSON(e.signedHeader) : t.signedHeader = void 0, void 0 !== e.validatorSet && null !== e.validatorSet ? t.validatorSet = l.ValidatorSet.fromJSON(e.validatorSet) : t.validatorSet = void 0, void 0 !== e.trustedHeight && null !== e.trustedHeight ? t.trustedHeight = a.Height.fromJSON(e.trustedHeight) : t.trustedHeight = void 0, void 0 !== e.trustedValidators && null !== e.trustedValidators ? t.trustedValidators = l.ValidatorSet.fromJSON(e.trustedValidators) : t.trustedValidators = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.signedHeader && (t.signedHeader = e.signedHeader ? c.SignedHeader.toJSON(e.signedHeader) : void 0), void 0 !== e.validatorSet && (t.validatorSet = e.validatorSet ? l.ValidatorSet.toJSON(e.validatorSet) : void 0), void 0 !== e.trustedHeight && (t.trustedHeight = e.trustedHeight ? a.Height.toJSON(e.trustedHeight) : void 0), void 0 !== e.trustedValidators && (t.trustedValidators = e.trustedValidators ? l.ValidatorSet.toJSON(e.trustedValidators) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.signedHeader && null !== e.signedHeader ? t.signedHeader = c.SignedHeader.fromPartial(e.signedHeader) : t.signedHeader = void 0, void 0 !== e.validatorSet && null !== e.validatorSet ? t.validatorSet = l.ValidatorSet.fromPartial(e.validatorSet) : t.validatorSet = void 0, void 0 !== e.trustedHeight && null !== e.trustedHeight ? t.trustedHeight = a.Height.fromPartial(e.trustedHeight) : t.trustedHeight = void 0, void 0 !== e.trustedValidators && null !== e.trustedValidators ? t.trustedValidators = l.ValidatorSet.fromPartial(e.trustedValidators) : t.trustedValidators = void 0, t
                }
            };
            const y = {
                numerator: i.default.UZERO,
                denominator: i.default.UZERO
            };
            t.Fraction = {
                encode: (e, t = r.default.Writer.create()) => (e.numerator.isZero() || t.uint32(8).uint64(e.numerator), e.denominator.isZero() || t.uint32(16).uint64(e.denominator), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, y);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.numerator = o.uint64();
                                break;
                            case 2:
                                i.denominator = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, y);
                    return void 0 !== e.numerator && null !== e.numerator ? t.numerator = i.default.fromString(e.numerator) : t.numerator = i.default.UZERO, void 0 !== e.denominator && null !== e.denominator ? t.denominator = i.default.fromString(e.denominator) : t.denominator = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.numerator && (t.numerator = (e.numerator || i.default.UZERO).toString()), void 0 !== e.denominator && (t.denominator = (e.denominator || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, y);
                    return void 0 !== e.numerator && null !== e.numerator ? t.numerator = e.numerator : t.numerator = i.default.UZERO, void 0 !== e.denominator && null !== e.denominator ? t.denominator = e.denominator : t.denominator = i.default.UZERO, t
                }
            };
            var S = (() => {
                if (void 0 !== S) return S;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const m = S.atob || (e => S.Buffer.from(e, "base64").toString("binary"));
            const b = S.btoa || (e => S.Buffer.from(e, "binary").toString("base64"));

            function O(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4386: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MsgClientImpl = t.MsgConnectionOpenConfirmResponse = t.MsgConnectionOpenConfirm = t.MsgConnectionOpenAckResponse = t.MsgConnectionOpenAck = t.MsgConnectionOpenTryResponse = t.MsgConnectionOpenTry = t.MsgConnectionOpenInitResponse = t.MsgConnectionOpenInit = t.protobufPackage = void 0;
            const i = n(o(1)),
                r = n(o(8)),
                s = o(2042),
                a = o(113),
                d = o(296);
            t.protobufPackage = "ibc.core.connection.v1";
            const c = {
                clientId: "",
                delayPeriod: i.default.UZERO,
                signer: ""
            };
            t.MsgConnectionOpenInit = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.clientId && t.uint32(10).string(e.clientId), void 0 !== e.counterparty && s.Counterparty.encode(e.counterparty, t.uint32(18).fork()).ldelim(), void 0 !== e.version && s.Version.encode(e.version, t.uint32(26).fork()).ldelim(), e.delayPeriod.isZero() || t.uint32(32).uint64(e.delayPeriod), "" !== e.signer && t.uint32(42).string(e.signer), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, c);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = o.string();
                                break;
                            case 2:
                                i.counterparty = s.Counterparty.decode(o, o.uint32());
                                break;
                            case 3:
                                i.version = s.Version.decode(o, o.uint32());
                                break;
                            case 4:
                                i.delayPeriod = o.uint64();
                                break;
                            case 5:
                                i.signer = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.clientId && null !== e.clientId ? t.clientId = String(e.clientId) : t.clientId = "", void 0 !== e.counterparty && null !== e.counterparty ? t.counterparty = s.Counterparty.fromJSON(e.counterparty) : t.counterparty = void 0, void 0 !== e.version && null !== e.version ? t.version = s.Version.fromJSON(e.version) : t.version = void 0, void 0 !== e.delayPeriod && null !== e.delayPeriod ? t.delayPeriod = i.default.fromString(e.delayPeriod) : t.delayPeriod = i.default.UZERO, void 0 !== e.signer && null !== e.signer ? t.signer = String(e.signer) : t.signer = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.clientId && (t.clientId = e.clientId), void 0 !== e.counterparty && (t.counterparty = e.counterparty ? s.Counterparty.toJSON(e.counterparty) : void 0), void 0 !== e.version && (t.version = e.version ? s.Version.toJSON(e.version) : void 0), void 0 !== e.delayPeriod && (t.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()), void 0 !== e.signer && (t.signer = e.signer), t
                },
                fromPartial(e) {
                    var t, o;
                    const n = Object.assign({}, c);
                    return n.clientId = null !== (t = e.clientId) && void 0 !== t ? t : "", void 0 !== e.counterparty && null !== e.counterparty ? n.counterparty = s.Counterparty.fromPartial(e.counterparty) : n.counterparty = void 0, void 0 !== e.version && null !== e.version ? n.version = s.Version.fromPartial(e.version) : n.version = void 0, void 0 !== e.delayPeriod && null !== e.delayPeriod ? n.delayPeriod = e.delayPeriod : n.delayPeriod = i.default.UZERO, n.signer = null !== (o = e.signer) && void 0 !== o ? o : "", n
                }
            };
            const l = {};
            t.MsgConnectionOpenInitResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, l);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, l),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, l)
            };
            const u = {
                clientId: "",
                previousConnectionId: "",
                delayPeriod: i.default.UZERO,
                signer: ""
            };
            t.MsgConnectionOpenTry = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.clientId && t.uint32(10).string(e.clientId), "" !== e.previousConnectionId && t.uint32(18).string(e.previousConnectionId), void 0 !== e.clientState && a.Any.encode(e.clientState, t.uint32(26).fork()).ldelim(), void 0 !== e.counterparty && s.Counterparty.encode(e.counterparty, t.uint32(34).fork()).ldelim(), e.delayPeriod.isZero() || t.uint32(40).uint64(e.delayPeriod);
                    for (const o of e.counterpartyVersions) s.Version.encode(o, t.uint32(50).fork()).ldelim();
                    return void 0 !== e.proofHeight && d.Height.encode(e.proofHeight, t.uint32(58).fork()).ldelim(), 0 !== e.proofInit.length && t.uint32(66).bytes(e.proofInit), 0 !== e.proofClient.length && t.uint32(74).bytes(e.proofClient), 0 !== e.proofConsensus.length && t.uint32(82).bytes(e.proofConsensus), void 0 !== e.consensusHeight && d.Height.encode(e.consensusHeight, t.uint32(90).fork()).ldelim(), "" !== e.signer && t.uint32(98).string(e.signer), t
                },
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, u);
                    for (i.counterpartyVersions = [], i.proofInit = new Uint8Array, i.proofClient = new Uint8Array, i.proofConsensus = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.clientId = o.string();
                                break;
                            case 2:
                                i.previousConnectionId = o.string();
                                break;
                            case 3:
                                i.clientState = a.Any.decode(o, o.uint32());
                                break;
                            case 4:
                                i.counterparty = s.Counterparty.decode(o, o.uint32());
                                break;
                            case 5:
                                i.delayPeriod = o.uint64();
                                break;
                            case 6:
                                i.counterpartyVersions.push(s.Version.decode(o, o.uint32()));
                                break;
                            case 7:
                                i.proofHeight = d.Height.decode(o, o.uint32());
                                break;
                            case 8:
                                i.proofInit = o.bytes();
                                break;
                            case 9:
                                i.proofClient = o.bytes();
                                break;
                            case 10:
                                i.proofConsensus = o.bytes();
                                break;
                            case 11:
                                i.consensusHeight = d.Height.decode(o, o.uint32());
                                break;
                            case 12:
                                i.signer = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    if (t.counterpartyVersions = [], t.proofInit = new Uint8Array, t.proofClient = new Uint8Array, t.proofConsensus = new Uint8Array, void 0 !== e.clientId && null !== e.clientId ? t.clientId = String(e.clientId) : t.clientId = "", void 0 !== e.previousConnectionId && null !== e.previousConnectionId ? t.previousConnectionId = String(e.previousConnectionId) : t.previousConnectionId = "", void 0 !== e.clientState && null !== e.clientState ? t.clientState = a.Any.fromJSON(e.clientState) : t.clientState = void 0, void 0 !== e.counterparty && null !== e.counterparty ? t.counterparty = s.Counterparty.fromJSON(e.counterparty) : t.counterparty = void 0, void 0 !== e.delayPeriod && null !== e.delayPeriod ? t.delayPeriod = i.default.fromString(e.delayPeriod) : t.delayPeriod = i.default.UZERO, void 0 !== e.counterpartyVersions && null !== e.counterpartyVersions)
                        for (const o of e.counterpartyVersions) t.counterpartyVersions.push(s.Version.fromJSON(o));
                    return void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = d.Height.fromJSON(e.proofHeight) : t.proofHeight = void 0, void 0 !== e.proofInit && null !== e.proofInit && (t.proofInit = m(e.proofInit)), void 0 !== e.proofClient && null !== e.proofClient && (t.proofClient = m(e.proofClient)), void 0 !== e.proofConsensus && null !== e.proofConsensus && (t.proofConsensus = m(e.proofConsensus)), void 0 !== e.consensusHeight && null !== e.consensusHeight ? t.consensusHeight = d.Height.fromJSON(e.consensusHeight) : t.consensusHeight = void 0, void 0 !== e.signer && null !== e.signer ? t.signer = String(e.signer) : t.signer = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.clientId && (t.clientId = e.clientId), void 0 !== e.previousConnectionId && (t.previousConnectionId = e.previousConnectionId), void 0 !== e.clientState && (t.clientState = e.clientState ? a.Any.toJSON(e.clientState) : void 0), void 0 !== e.counterparty && (t.counterparty = e.counterparty ? s.Counterparty.toJSON(e.counterparty) : void 0), void 0 !== e.delayPeriod && (t.delayPeriod = (e.delayPeriod || i.default.UZERO).toString()), e.counterpartyVersions ? t.counterpartyVersions = e.counterpartyVersions.map(e => e ? s.Version.toJSON(e) : void 0) : t.counterpartyVersions = [], void 0 !== e.proofHeight && (t.proofHeight = e.proofHeight ? d.Height.toJSON(e.proofHeight) : void 0), void 0 !== e.proofInit && (t.proofInit = O(void 0 !== e.proofInit ? e.proofInit : new Uint8Array)), void 0 !== e.proofClient && (t.proofClient = O(void 0 !== e.proofClient ? e.proofClient : new Uint8Array)), void 0 !== e.proofConsensus && (t.proofConsensus = O(void 0 !== e.proofConsensus ? e.proofConsensus : new Uint8Array)), void 0 !== e.consensusHeight && (t.consensusHeight = e.consensusHeight ? d.Height.toJSON(e.consensusHeight) : void 0), void 0 !== e.signer && (t.signer = e.signer), t
                },
                fromPartial(e) {
                    var t, o, n, r, c, l;
                    const f = Object.assign({}, u);
                    if (f.clientId = null !== (t = e.clientId) && void 0 !== t ? t : "", f.previousConnectionId = null !== (o = e.previousConnectionId) && void 0 !== o ? o : "", void 0 !== e.clientState && null !== e.clientState ? f.clientState = a.Any.fromPartial(e.clientState) : f.clientState = void 0, void 0 !== e.counterparty && null !== e.counterparty ? f.counterparty = s.Counterparty.fromPartial(e.counterparty) : f.counterparty = void 0, void 0 !== e.delayPeriod && null !== e.delayPeriod ? f.delayPeriod = e.delayPeriod : f.delayPeriod = i.default.UZERO, f.counterpartyVersions = [], void 0 !== e.counterpartyVersions && null !== e.counterpartyVersions)
                        for (const t of e.counterpartyVersions) f.counterpartyVersions.push(s.Version.fromPartial(t));
                    return void 0 !== e.proofHeight && null !== e.proofHeight ? f.proofHeight = d.Height.fromPartial(e.proofHeight) : f.proofHeight = void 0, f.proofInit = null !== (n = e.proofInit) && void 0 !== n ? n : new Uint8Array, f.proofClient = null !== (r = e.proofClient) && void 0 !== r ? r : new Uint8Array, f.proofConsensus = null !== (c = e.proofConsensus) && void 0 !== c ? c : new Uint8Array, void 0 !== e.consensusHeight && null !== e.consensusHeight ? f.consensusHeight = d.Height.fromPartial(e.consensusHeight) : f.consensusHeight = void 0, f.signer = null !== (l = e.signer) && void 0 !== l ? l : "", f
                }
            };
            const f = {};
            t.MsgConnectionOpenTryResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
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
            const p = {
                connectionId: "",
                counterpartyConnectionId: "",
                signer: ""
            };
            t.MsgConnectionOpenAck = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.connectionId && t.uint32(10).string(e.connectionId), "" !== e.counterpartyConnectionId && t.uint32(18).string(e.counterpartyConnectionId), void 0 !== e.version && s.Version.encode(e.version, t.uint32(26).fork()).ldelim(), void 0 !== e.clientState && a.Any.encode(e.clientState, t.uint32(34).fork()).ldelim(), void 0 !== e.proofHeight && d.Height.encode(e.proofHeight, t.uint32(42).fork()).ldelim(), 0 !== e.proofTry.length && t.uint32(50).bytes(e.proofTry), 0 !== e.proofClient.length && t.uint32(58).bytes(e.proofClient), 0 !== e.proofConsensus.length && t.uint32(66).bytes(e.proofConsensus), void 0 !== e.consensusHeight && d.Height.encode(e.consensusHeight, t.uint32(74).fork()).ldelim(), "" !== e.signer && t.uint32(82).string(e.signer), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, p);
                    for (i.proofTry = new Uint8Array, i.proofClient = new Uint8Array, i.proofConsensus = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.connectionId = o.string();
                                break;
                            case 2:
                                i.counterpartyConnectionId = o.string();
                                break;
                            case 3:
                                i.version = s.Version.decode(o, o.uint32());
                                break;
                            case 4:
                                i.clientState = a.Any.decode(o, o.uint32());
                                break;
                            case 5:
                                i.proofHeight = d.Height.decode(o, o.uint32());
                                break;
                            case 6:
                                i.proofTry = o.bytes();
                                break;
                            case 7:
                                i.proofClient = o.bytes();
                                break;
                            case 8:
                                i.proofConsensus = o.bytes();
                                break;
                            case 9:
                                i.consensusHeight = d.Height.decode(o, o.uint32());
                                break;
                            case 10:
                                i.signer = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, p);
                    return t.proofTry = new Uint8Array, t.proofClient = new Uint8Array, t.proofConsensus = new Uint8Array, void 0 !== e.connectionId && null !== e.connectionId ? t.connectionId = String(e.connectionId) : t.connectionId = "", void 0 !== e.counterpartyConnectionId && null !== e.counterpartyConnectionId ? t.counterpartyConnectionId = String(e.counterpartyConnectionId) : t.counterpartyConnectionId = "", void 0 !== e.version && null !== e.version ? t.version = s.Version.fromJSON(e.version) : t.version = void 0, void 0 !== e.clientState && null !== e.clientState ? t.clientState = a.Any.fromJSON(e.clientState) : t.clientState = void 0, void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = d.Height.fromJSON(e.proofHeight) : t.proofHeight = void 0, void 0 !== e.proofTry && null !== e.proofTry && (t.proofTry = m(e.proofTry)), void 0 !== e.proofClient && null !== e.proofClient && (t.proofClient = m(e.proofClient)), void 0 !== e.proofConsensus && null !== e.proofConsensus && (t.proofConsensus = m(e.proofConsensus)), void 0 !== e.consensusHeight && null !== e.consensusHeight ? t.consensusHeight = d.Height.fromJSON(e.consensusHeight) : t.consensusHeight = void 0, void 0 !== e.signer && null !== e.signer ? t.signer = String(e.signer) : t.signer = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.connectionId && (t.connectionId = e.connectionId), void 0 !== e.counterpartyConnectionId && (t.counterpartyConnectionId = e.counterpartyConnectionId), void 0 !== e.version && (t.version = e.version ? s.Version.toJSON(e.version) : void 0), void 0 !== e.clientState && (t.clientState = e.clientState ? a.Any.toJSON(e.clientState) : void 0), void 0 !== e.proofHeight && (t.proofHeight = e.proofHeight ? d.Height.toJSON(e.proofHeight) : void 0), void 0 !== e.proofTry && (t.proofTry = O(void 0 !== e.proofTry ? e.proofTry : new Uint8Array)), void 0 !== e.proofClient && (t.proofClient = O(void 0 !== e.proofClient ? e.proofClient : new Uint8Array)), void 0 !== e.proofConsensus && (t.proofConsensus = O(void 0 !== e.proofConsensus ? e.proofConsensus : new Uint8Array)), void 0 !== e.consensusHeight && (t.consensusHeight = e.consensusHeight ? d.Height.toJSON(e.consensusHeight) : void 0), void 0 !== e.signer && (t.signer = e.signer), t
                },
                fromPartial(e) {
                    var t, o, n, i, r, c;
                    const l = Object.assign({}, p);
                    return l.connectionId = null !== (t = e.connectionId) && void 0 !== t ? t : "", l.counterpartyConnectionId = null !== (o = e.counterpartyConnectionId) && void 0 !== o ? o : "", void 0 !== e.version && null !== e.version ? l.version = s.Version.fromPartial(e.version) : l.version = void 0, void 0 !== e.clientState && null !== e.clientState ? l.clientState = a.Any.fromPartial(e.clientState) : l.clientState = void 0, void 0 !== e.proofHeight && null !== e.proofHeight ? l.proofHeight = d.Height.fromPartial(e.proofHeight) : l.proofHeight = void 0, l.proofTry = null !== (n = e.proofTry) && void 0 !== n ? n : new Uint8Array, l.proofClient = null !== (i = e.proofClient) && void 0 !== i ? i : new Uint8Array, l.proofConsensus = null !== (r = e.proofConsensus) && void 0 !== r ? r : new Uint8Array, void 0 !== e.consensusHeight && null !== e.consensusHeight ? l.consensusHeight = d.Height.fromPartial(e.consensusHeight) : l.consensusHeight = void 0, l.signer = null !== (c = e.signer) && void 0 !== c ? c : "", l
                }
            };
            const g = {};
            t.MsgConnectionOpenAckResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, g);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, g),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, g)
            };
            const v = {
                connectionId: "",
                signer: ""
            };
            t.MsgConnectionOpenConfirm = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.connectionId && t.uint32(10).string(e.connectionId), 0 !== e.proofAck.length && t.uint32(18).bytes(e.proofAck), void 0 !== e.proofHeight && d.Height.encode(e.proofHeight, t.uint32(26).fork()).ldelim(), "" !== e.signer && t.uint32(34).string(e.signer), t),
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, v);
                    for (i.proofAck = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.connectionId = o.string();
                                break;
                            case 2:
                                i.proofAck = o.bytes();
                                break;
                            case 3:
                                i.proofHeight = d.Height.decode(o, o.uint32());
                                break;
                            case 4:
                                i.signer = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    return t.proofAck = new Uint8Array, void 0 !== e.connectionId && null !== e.connectionId ? t.connectionId = String(e.connectionId) : t.connectionId = "", void 0 !== e.proofAck && null !== e.proofAck && (t.proofAck = m(e.proofAck)), void 0 !== e.proofHeight && null !== e.proofHeight ? t.proofHeight = d.Height.fromJSON(e.proofHeight) : t.proofHeight = void 0, void 0 !== e.signer && null !== e.signer ? t.signer = String(e.signer) : t.signer = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.connectionId && (t.connectionId = e.connectionId), void 0 !== e.proofAck && (t.proofAck = O(void 0 !== e.proofAck ? e.proofAck : new Uint8Array)), void 0 !== e.proofHeight && (t.proofHeight = e.proofHeight ? d.Height.toJSON(e.proofHeight) : void 0), void 0 !== e.signer && (t.signer = e.signer), t
                },
                fromPartial(e) {
                    var t, o, n;
                    const i = Object.assign({}, v);
                    return i.connectionId = null !== (t = e.connectionId) && void 0 !== t ? t : "", i.proofAck = null !== (o = e.proofAck) && void 0 !== o ? o : new Uint8Array, void 0 !== e.proofHeight && null !== e.proofHeight ? i.proofHeight = d.Height.fromPartial(e.proofHeight) : i.proofHeight = void 0, i.signer = null !== (n = e.signer) && void 0 !== n ? n : "", i
                }
            };
            const h = {};
            t.MsgConnectionOpenConfirmResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, h);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, h),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, h)
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.ConnectionOpenInit = this.ConnectionOpenInit.bind(this), this.ConnectionOpenTry = this.ConnectionOpenTry.bind(this), this.ConnectionOpenAck = this.ConnectionOpenAck.bind(this), this.ConnectionOpenConfirm = this.ConnectionOpenConfirm.bind(this)
                }
                ConnectionOpenInit(e) {
                    const o = t.MsgConnectionOpenInit.encode(e).finish();
                    return this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", o).then(e => t.MsgConnectionOpenInitResponse.decode(new r.default.Reader(e)))
                }
                ConnectionOpenTry(e) {
                    const o = t.MsgConnectionOpenTry.encode(e).finish();
                    return this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", o).then(e => t.MsgConnectionOpenTryResponse.decode(new r.default.Reader(e)))
                }
                ConnectionOpenAck(e) {
                    const o = t.MsgConnectionOpenAck.encode(e).finish();
                    return this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", o).then(e => t.MsgConnectionOpenAckResponse.decode(new r.default.Reader(e)))
                }
                ConnectionOpenConfirm(e) {
                    const o = t.MsgConnectionOpenConfirm.encode(e).finish();
                    return this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", o).then(e => t.MsgConnectionOpenConfirmResponse.decode(new r.default.Reader(e)))
                }
            };
            var y = (() => {
                if (void 0 !== y) return y;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const S = y.atob || (e => y.Buffer.from(e, "base64").toString("binary"));

            function m(e) {
                const t = S(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const b = y.btoa || (e => y.Buffer.from(e, "binary").toString("base64"));

            function O(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return b(t.join(""))
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        }
    }
]);