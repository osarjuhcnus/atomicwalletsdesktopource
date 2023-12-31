(window.webpackJsonp = window.webpackJsonp || []).push([
    [153], {
        1903: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ModuleVersion = t.CancelSoftwareUpgradeProposal = t.SoftwareUpgradeProposal = t.Plan = t.protobufPackage = void 0;
            const i = n(o(1)),
                s = n(o(8)),
                a = o(122),
                r = o(635);
            t.protobufPackage = "cosmos.upgrade.v1beta1";
            const d = {
                name: "",
                height: i.default.ZERO,
                info: ""
            };
            t.Plan = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.name && t.uint32(10).string(e.name), void 0 !== e.time && r.Timestamp.encode(function(e) {
                    const t = (n = e.getTime() / 1e3, i.default.fromNumber(n)),
                        o = e.getTime() % 1e3 * 1e6;
                    var n;
                    return {
                        seconds: t,
                        nanos: o
                    }
                }(e.time), t.uint32(18).fork()).ldelim(), e.height.isZero() || t.uint32(24).int64(e.height), "" !== e.info && t.uint32(34).string(e.info), void 0 !== e.upgradedClientState && a.Any.encode(e.upgradedClientState, t.uint32(42).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, d);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.name = o.string();
                                break;
                            case 2:
                                i.time = f(r.Timestamp.decode(o, o.uint32()));
                                break;
                            case 3:
                                i.height = o.int64();
                                break;
                            case 4:
                                i.info = o.string();
                                break;
                            case 5:
                                i.upgradedClientState = a.Any.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    var o;
                    return void 0 !== e.name && null !== e.name ? t.name = String(e.name) : t.name = "", void 0 !== e.time && null !== e.time ? t.time = (o = e.time) instanceof Date ? o : "string" == typeof o ? new Date(o) : f(r.Timestamp.fromJSON(o)) : t.time = void 0, void 0 !== e.height && null !== e.height ? t.height = i.default.fromString(e.height) : t.height = i.default.ZERO, void 0 !== e.info && null !== e.info ? t.info = String(e.info) : t.info = "", void 0 !== e.upgradedClientState && null !== e.upgradedClientState ? t.upgradedClientState = a.Any.fromJSON(e.upgradedClientState) : t.upgradedClientState = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.name && (t.name = e.name), void 0 !== e.time && (t.time = e.time.toISOString()), void 0 !== e.height && (t.height = (e.height || i.default.ZERO).toString()), void 0 !== e.info && (t.info = e.info), void 0 !== e.upgradedClientState && (t.upgradedClientState = e.upgradedClientState ? a.Any.toJSON(e.upgradedClientState) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.name && null !== e.name ? t.name = e.name : t.name = "", void 0 !== e.time && null !== e.time ? t.time = e.time : t.time = void 0, void 0 !== e.height && null !== e.height ? t.height = e.height : t.height = i.default.ZERO, void 0 !== e.info && null !== e.info ? t.info = e.info : t.info = "", void 0 !== e.upgradedClientState && null !== e.upgradedClientState ? t.upgradedClientState = a.Any.fromPartial(e.upgradedClientState) : t.upgradedClientState = void 0, t
                }
            };
            const u = {
                title: "",
                description: ""
            };
            t.SoftwareUpgradeProposal = {
                encode: (e, o = s.default.Writer.create()) => ("" !== e.title && o.uint32(10).string(e.title), "" !== e.description && o.uint32(18).string(e.description), void 0 !== e.plan && t.Plan.encode(e.plan, o.uint32(26).fork()).ldelim(), o),
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, u);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.title = n.string();
                                break;
                            case 2:
                                a.description = n.string();
                                break;
                            case 3:
                                a.plan = t.Plan.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, u);
                    return void 0 !== e.title && null !== e.title ? o.title = String(e.title) : o.title = "", void 0 !== e.description && null !== e.description ? o.description = String(e.description) : o.description = "", void 0 !== e.plan && null !== e.plan ? o.plan = t.Plan.fromJSON(e.plan) : o.plan = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.title && (o.title = e.title), void 0 !== e.description && (o.description = e.description), void 0 !== e.plan && (o.plan = e.plan ? t.Plan.toJSON(e.plan) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, u);
                    return void 0 !== e.title && null !== e.title ? o.title = e.title : o.title = "", void 0 !== e.description && null !== e.description ? o.description = e.description : o.description = "", void 0 !== e.plan && null !== e.plan ? o.plan = t.Plan.fromPartial(e.plan) : o.plan = void 0, o
                }
            };
            const l = {
                title: "",
                description: ""
            };
            t.CancelSoftwareUpgradeProposal = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, l);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = o.string();
                                break;
                            case 2:
                                i.description = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", t
                }
            };
            const c = {
                name: "",
                version: i.default.UZERO
            };

            function f(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }
            t.ModuleVersion = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.name && t.uint32(10).string(e.name), e.version.isZero() || t.uint32(16).uint64(e.version), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, c);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.name = o.string();
                                break;
                            case 2:
                                i.version = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.name && null !== e.name ? t.name = String(e.name) : t.name = "", void 0 !== e.version && null !== e.version ? t.version = i.default.fromString(e.version) : t.version = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.name && (t.name = e.name), void 0 !== e.version && (t.version = (e.version || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.name && null !== e.name ? t.name = e.name : t.name = "", void 0 !== e.version && null !== e.version ? t.version = e.version : t.version = i.default.UZERO, t
                }
            }, s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        1956: function(e, t, o) {
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
                s = n(o(8)),
                a = o(122),
                r = o(1957);
            var d;

            function u(e) {
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

            function l(e) {
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
                }(d = t.SignMode || (t.SignMode = {})), t.signModeFromJSON = u, t.signModeToJSON = l;
            const c = {};
            t.SignatureDescriptors = {
                encode(e, o = s.default.Writer.create()) {
                    for (const n of e.signatures) t.SignatureDescriptor.encode(n, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, c);
                    for (a.signatures = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.signatures.push(t.SignatureDescriptor.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
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
            const f = {
                sequence: i.default.UZERO
            };
            t.SignatureDescriptor = {
                encode: (e, o = s.default.Writer.create()) => (void 0 !== e.publicKey && a.Any.encode(e.publicKey, o.uint32(10).fork()).ldelim(), void 0 !== e.data && t.SignatureDescriptor_Data.encode(e.data, o.uint32(18).fork()).ldelim(), e.sequence.isZero() || o.uint32(24).uint64(e.sequence), o),
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const r = Object.assign({}, f);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.publicKey = a.Any.decode(n, n.uint32());
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
                    const o = Object.assign({}, f);
                    return void 0 !== e.publicKey && null !== e.publicKey ? o.publicKey = a.Any.fromJSON(e.publicKey) : o.publicKey = void 0, void 0 !== e.data && null !== e.data ? o.data = t.SignatureDescriptor_Data.fromJSON(e.data) : o.data = void 0, void 0 !== e.sequence && null !== e.sequence ? o.sequence = i.default.fromString(e.sequence) : o.sequence = i.default.UZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.publicKey && (o.publicKey = e.publicKey ? a.Any.toJSON(e.publicKey) : void 0), void 0 !== e.data && (o.data = e.data ? t.SignatureDescriptor_Data.toJSON(e.data) : void 0), void 0 !== e.sequence && (o.sequence = (e.sequence || i.default.UZERO).toString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, f);
                    return void 0 !== e.publicKey && null !== e.publicKey ? o.publicKey = a.Any.fromPartial(e.publicKey) : o.publicKey = void 0, void 0 !== e.data && null !== e.data ? o.data = t.SignatureDescriptor_Data.fromPartial(e.data) : o.data = void 0, void 0 !== e.sequence && null !== e.sequence ? o.sequence = e.sequence : o.sequence = i.default.UZERO, o
                }
            };
            const g = {};
            t.SignatureDescriptor_Data = {
                encode: (e, o = s.default.Writer.create()) => (void 0 !== e.single && t.SignatureDescriptor_Data_Single.encode(e.single, o.uint32(10).fork()).ldelim(), void 0 !== e.multi && t.SignatureDescriptor_Data_Multi.encode(e.multi, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, g);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.single = t.SignatureDescriptor_Data_Single.decode(n, n.uint32());
                                break;
                            case 2:
                                a.multi = t.SignatureDescriptor_Data_Multi.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, g);
                    return void 0 !== e.single && null !== e.single ? o.single = t.SignatureDescriptor_Data_Single.fromJSON(e.single) : o.single = void 0, void 0 !== e.multi && null !== e.multi ? o.multi = t.SignatureDescriptor_Data_Multi.fromJSON(e.multi) : o.multi = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.single && (o.single = e.single ? t.SignatureDescriptor_Data_Single.toJSON(e.single) : void 0), void 0 !== e.multi && (o.multi = e.multi ? t.SignatureDescriptor_Data_Multi.toJSON(e.multi) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, g);
                    return void 0 !== e.single && null !== e.single ? o.single = t.SignatureDescriptor_Data_Single.fromPartial(e.single) : o.single = void 0, void 0 !== e.multi && null !== e.multi ? o.multi = t.SignatureDescriptor_Data_Multi.fromPartial(e.multi) : o.multi = void 0, o
                }
            };
            const p = {
                mode: 0
            };
            t.SignatureDescriptor_Data_Single = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.mode && t.uint32(8).int32(e.mode), 0 !== e.signature.length && t.uint32(18).bytes(e.signature), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, p);
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
                    const t = Object.assign({}, p);
                    return t.signature = new Uint8Array, void 0 !== e.mode && null !== e.mode ? t.mode = u(e.mode) : t.mode = 0, void 0 !== e.signature && null !== e.signature && (t.signature = function(e) {
                        const t = O(e),
                            o = new Uint8Array(t.length);
                        for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                        return o
                    }(e.signature)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.mode && (t.mode = l(e.mode)), void 0 !== e.signature && (t.signature = function(e) {
                        const t = [];
                        for (const o of e) t.push(String.fromCharCode(o));
                        return b(t.join(""))
                    }(void 0 !== e.signature ? e.signature : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, p);
                    return void 0 !== e.mode && null !== e.mode ? t.mode = e.mode : t.mode = 0, void 0 !== e.signature && null !== e.signature ? t.signature = e.signature : t.signature = new Uint8Array, t
                }
            };
            const m = {};
            t.SignatureDescriptor_Data_Multi = {
                encode(e, o = s.default.Writer.create()) {
                    void 0 !== e.bitarray && r.CompactBitArray.encode(e.bitarray, o.uint32(10).fork()).ldelim();
                    for (const n of e.signatures) t.SignatureDescriptor_Data.encode(n, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, m);
                    for (a.signatures = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.bitarray = r.CompactBitArray.decode(n, n.uint32());
                                break;
                            case 2:
                                a.signatures.push(t.SignatureDescriptor_Data.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, m);
                    if (o.signatures = [], void 0 !== e.bitarray && null !== e.bitarray ? o.bitarray = r.CompactBitArray.fromJSON(e.bitarray) : o.bitarray = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const n of e.signatures) o.signatures.push(t.SignatureDescriptor_Data.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.bitarray && (o.bitarray = e.bitarray ? r.CompactBitArray.toJSON(e.bitarray) : void 0), e.signatures ? o.signatures = e.signatures.map(e => e ? t.SignatureDescriptor_Data.toJSON(e) : void 0) : o.signatures = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, m);
                    if (o.signatures = [], void 0 !== e.bitarray && null !== e.bitarray ? o.bitarray = r.CompactBitArray.fromPartial(e.bitarray) : o.bitarray = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const n of e.signatures) o.signatures.push(t.SignatureDescriptor_Data.fromPartial(n));
                    return o
                }
            };
            var v = (() => {
                if (void 0 !== v) return v;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const O = v.atob || (e => v.Buffer.from(e, "base64").toString("binary"));
            const b = v.btoa || (e => v.Buffer.from(e, "binary").toString("base64"));
            s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        1957: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CompactBitArray = t.MultiSignature = t.protobufPackage = void 0;
            const i = n(o(1)),
                s = n(o(8));
            t.protobufPackage = "cosmos.crypto.multisig.v1beta1";
            const a = {};
            t.MultiSignature = {
                encode(e, t = s.default.Writer.create()) {
                    for (const o of e.signatures) t.uint32(10).bytes(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, a);
                    for (i.signatures = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.signatures.push(o.bytes());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, a);
                    if (t.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const o of e.signatures) t.signatures.push(l(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.signatures ? t.signatures = e.signatures.map(e => f(void 0 !== e ? e : new Uint8Array)) : t.signatures = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, a);
                    if (t.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const o of e.signatures) t.signatures.push(o);
                    return t
                }
            };
            const r = {
                extraBitsStored: 0
            };
            t.CompactBitArray = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.extraBitsStored && t.uint32(8).uint32(e.extraBitsStored), 0 !== e.elems.length && t.uint32(18).bytes(e.elems), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, r);
                    for (i.elems = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.extraBitsStored = o.uint32();
                                break;
                            case 2:
                                i.elems = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, r);
                    return t.elems = new Uint8Array, void 0 !== e.extraBitsStored && null !== e.extraBitsStored ? t.extraBitsStored = Number(e.extraBitsStored) : t.extraBitsStored = 0, void 0 !== e.elems && null !== e.elems && (t.elems = l(e.elems)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.extraBitsStored && (t.extraBitsStored = e.extraBitsStored), void 0 !== e.elems && (t.elems = f(void 0 !== e.elems ? e.elems : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.extraBitsStored && null !== e.extraBitsStored ? t.extraBitsStored = e.extraBitsStored : t.extraBitsStored = 0, void 0 !== e.elems && null !== e.elems ? t.elems = e.elems : t.elems = new Uint8Array, t
                }
            };
            var d = (() => {
                if (void 0 !== d) return d;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const u = d.atob || (e => d.Buffer.from(e, "base64").toString("binary"));

            function l(e) {
                const t = u(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const c = d.btoa || (e => d.Buffer.from(e, "binary").toString("base64"));

            function f(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return c(t.join(""))
            }
            s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        349: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DecProto = t.IntProto = t.DecCoin = t.Coin = t.protobufPackage = void 0;
            const i = n(o(1)),
                s = n(o(8));
            t.protobufPackage = "cosmos.base.v1beta1";
            const a = {
                denom: "",
                amount: ""
            };
            t.Coin = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), "" !== e.amount && t.uint32(18).string(e.amount), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, a);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.denom = o.string();
                                break;
                            case 2:
                                i.amount = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
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
            const r = {
                denom: "",
                amount: ""
            };
            t.DecCoin = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), "" !== e.amount && t.uint32(18).string(e.amount), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, r);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.denom = o.string();
                                break;
                            case 2:
                                i.amount = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
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
            const d = {
                int: ""
            };
            t.IntProto = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.int && t.uint32(10).string(e.int), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, d);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.int = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
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
                encode: (e, t = s.default.Writer.create()) => ("" !== e.dec && t.uint32(10).string(e.dec), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, u);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.dec = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
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
            }, s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3736: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MsgClientImpl = t.MsgFundCommunityPoolResponse = t.MsgFundCommunityPool = t.MsgWithdrawValidatorCommissionResponse = t.MsgWithdrawValidatorCommission = t.MsgWithdrawDelegatorRewardResponse = t.MsgWithdrawDelegatorReward = t.MsgSetWithdrawAddressResponse = t.MsgSetWithdrawAddress = t.protobufPackage = void 0;
            const i = n(o(1)),
                s = n(o(8)),
                a = o(349);
            t.protobufPackage = "cosmos.distribution.v1beta1";
            const r = {
                delegatorAddress: "",
                withdrawAddress: ""
            };
            t.MsgSetWithdrawAddress = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.withdrawAddress && t.uint32(18).string(e.withdrawAddress), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, r);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.delegatorAddress = o.string();
                                break;
                            case 2:
                                i.withdrawAddress = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.withdrawAddress && null !== e.withdrawAddress ? t.withdrawAddress = String(e.withdrawAddress) : t.withdrawAddress = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.withdrawAddress && (t.withdrawAddress = e.withdrawAddress), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = e.delegatorAddress : t.delegatorAddress = "", void 0 !== e.withdrawAddress && null !== e.withdrawAddress ? t.withdrawAddress = e.withdrawAddress : t.withdrawAddress = "", t
                }
            };
            const d = {};
            t.MsgSetWithdrawAddressResponse = {
                encode: (e, t = s.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, d);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        o.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, d),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, d)
            };
            const u = {
                delegatorAddress: "",
                validatorAddress: ""
            };
            t.MsgWithdrawDelegatorReward = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.delegatorAddress && t.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && t.uint32(18).string(e.validatorAddress), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, u);
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
                    const t = Object.assign({}, u);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = String(e.delegatorAddress) : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.delegatorAddress && (t.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? t.delegatorAddress = e.delegatorAddress : t.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = e.validatorAddress : t.validatorAddress = "", t
                }
            };
            const l = {};
            t.MsgWithdrawDelegatorRewardResponse = {
                encode: (e, t = s.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
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
            const c = {
                validatorAddress: ""
            };
            t.MsgWithdrawValidatorCommission = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.validatorAddress && t.uint32(10).string(e.validatorAddress), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, c);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validatorAddress = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = String(e.validatorAddress) : t.validatorAddress = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.validatorAddress && (t.validatorAddress = e.validatorAddress), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = e.validatorAddress : t.validatorAddress = "", t
                }
            };
            const f = {};
            t.MsgWithdrawValidatorCommissionResponse = {
                encode: (e, t = s.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
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
            const g = {
                depositor: ""
            };
            t.MsgFundCommunityPool = {
                encode(e, t = s.default.Writer.create()) {
                    for (const o of e.amount) a.Coin.encode(o, t.uint32(10).fork()).ldelim();
                    return "" !== e.depositor && t.uint32(18).string(e.depositor), t
                },
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, g);
                    for (i.amount = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.amount.push(a.Coin.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.depositor = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    if (t.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(a.Coin.fromJSON(o));
                    return void 0 !== e.depositor && null !== e.depositor ? t.depositor = String(e.depositor) : t.depositor = "", t
                },
                toJSON(e) {
                    const t = {};
                    return e.amount ? t.amount = e.amount.map(e => e ? a.Coin.toJSON(e) : void 0) : t.amount = [], void 0 !== e.depositor && (t.depositor = e.depositor), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, g);
                    if (t.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(a.Coin.fromPartial(o));
                    return void 0 !== e.depositor && null !== e.depositor ? t.depositor = e.depositor : t.depositor = "", t
                }
            };
            const p = {};
            t.MsgFundCommunityPoolResponse = {
                encode: (e, t = s.default.Writer.create()) => t,
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
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
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this), this.WithdrawDelegatorReward = this.WithdrawDelegatorReward.bind(this), this.WithdrawValidatorCommission = this.WithdrawValidatorCommission.bind(this), this.FundCommunityPool = this.FundCommunityPool.bind(this)
                }
                SetWithdrawAddress(e) {
                    const o = t.MsgSetWithdrawAddress.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", o).then(e => t.MsgSetWithdrawAddressResponse.decode(new s.default.Reader(e)))
                }
                WithdrawDelegatorReward(e) {
                    const o = t.MsgWithdrawDelegatorReward.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", o).then(e => t.MsgWithdrawDelegatorRewardResponse.decode(new s.default.Reader(e)))
                }
                WithdrawValidatorCommission(e) {
                    const o = t.MsgWithdrawValidatorCommission.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", o).then(e => t.MsgWithdrawValidatorCommissionResponse.decode(new s.default.Reader(e)))
                }
                FundCommunityPool(e) {
                    const o = t.MsgFundCommunityPool.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", o).then(e => t.MsgFundCommunityPoolResponse.decode(new s.default.Reader(e)))
                }
            }, s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3745: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ParamChange = t.ParameterChangeProposal = t.protobufPackage = void 0;
            const i = n(o(1)),
                s = n(o(8));
            t.protobufPackage = "cosmos.params.v1beta1";
            const a = {
                title: "",
                description: ""
            };
            t.ParameterChangeProposal = {
                encode(e, o = s.default.Writer.create()) {
                    "" !== e.title && o.uint32(10).string(e.title), "" !== e.description && o.uint32(18).string(e.description);
                    for (const n of e.changes) t.ParamChange.encode(n, o.uint32(26).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const r = Object.assign({}, a);
                    for (r.changes = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.title = n.string();
                                break;
                            case 2:
                                r.description = n.string();
                                break;
                            case 3:
                                r.changes.push(t.ParamChange.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, a);
                    if (o.changes = [], void 0 !== e.title && null !== e.title ? o.title = String(e.title) : o.title = "", void 0 !== e.description && null !== e.description ? o.description = String(e.description) : o.description = "", void 0 !== e.changes && null !== e.changes)
                        for (const n of e.changes) o.changes.push(t.ParamChange.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.title && (o.title = e.title), void 0 !== e.description && (o.description = e.description), e.changes ? o.changes = e.changes.map(e => e ? t.ParamChange.toJSON(e) : void 0) : o.changes = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, a);
                    if (o.changes = [], void 0 !== e.title && null !== e.title ? o.title = e.title : o.title = "", void 0 !== e.description && null !== e.description ? o.description = e.description : o.description = "", void 0 !== e.changes && null !== e.changes)
                        for (const n of e.changes) o.changes.push(t.ParamChange.fromPartial(n));
                    return o
                }
            };
            const r = {
                subspace: "",
                key: "",
                value: ""
            };
            t.ParamChange = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.subspace && t.uint32(10).string(e.subspace), "" !== e.key && t.uint32(18).string(e.key), "" !== e.value && t.uint32(26).string(e.value), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, r);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.subspace = o.string();
                                break;
                            case 2:
                                i.key = o.string();
                                break;
                            case 3:
                                i.value = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.subspace && null !== e.subspace ? t.subspace = String(e.subspace) : t.subspace = "", void 0 !== e.key && null !== e.key ? t.key = String(e.key) : t.key = "", void 0 !== e.value && null !== e.value ? t.value = String(e.value) : t.value = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.subspace && (t.subspace = e.subspace), void 0 !== e.key && (t.key = e.key), void 0 !== e.value && (t.value = e.value), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.subspace && null !== e.subspace ? t.subspace = e.subspace : t.subspace = "", void 0 !== e.key && null !== e.key ? t.key = e.key : t.key = "", void 0 !== e.value && null !== e.value ? t.value = e.value : t.value = "", t
                }
            }, s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3840: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BaseVestingAccount = t.protobufPackage = void 0;
            const i = n(o(1)),
                s = n(o(8)),
                a = o(3841),
                r = o(349);
            t.protobufPackage = "cosmos.vesting.v1beta1";
            const d = {
                endTime: i.default.ZERO
            };
            t.BaseVestingAccount = {
                encode(e, t = s.default.Writer.create()) {
                    void 0 !== e.baseAccount && a.BaseAccount.encode(e.baseAccount, t.uint32(10).fork()).ldelim();
                    for (const o of e.originalVesting) r.Coin.encode(o, t.uint32(18).fork()).ldelim();
                    for (const o of e.delegatedFree) r.Coin.encode(o, t.uint32(26).fork()).ldelim();
                    for (const o of e.delegatedVesting) r.Coin.encode(o, t.uint32(34).fork()).ldelim();
                    return e.endTime.isZero() || t.uint32(40).int64(e.endTime), t
                },
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, d);
                    for (i.originalVesting = [], i.delegatedFree = [], i.delegatedVesting = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.baseAccount = a.BaseAccount.decode(o, o.uint32());
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
                    if (t.originalVesting = [], t.delegatedFree = [], t.delegatedVesting = [], void 0 !== e.baseAccount && null !== e.baseAccount ? t.baseAccount = a.BaseAccount.fromJSON(e.baseAccount) : t.baseAccount = void 0, void 0 !== e.originalVesting && null !== e.originalVesting)
                        for (const o of e.originalVesting) t.originalVesting.push(r.Coin.fromJSON(o));
                    if (void 0 !== e.delegatedFree && null !== e.delegatedFree)
                        for (const o of e.delegatedFree) t.delegatedFree.push(r.Coin.fromJSON(o));
                    if (void 0 !== e.delegatedVesting && null !== e.delegatedVesting)
                        for (const o of e.delegatedVesting) t.delegatedVesting.push(r.Coin.fromJSON(o));
                    return void 0 !== e.endTime && null !== e.endTime ? t.endTime = i.default.fromString(e.endTime) : t.endTime = i.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.baseAccount && (t.baseAccount = e.baseAccount ? a.BaseAccount.toJSON(e.baseAccount) : void 0), e.originalVesting ? t.originalVesting = e.originalVesting.map(e => e ? r.Coin.toJSON(e) : void 0) : t.originalVesting = [], e.delegatedFree ? t.delegatedFree = e.delegatedFree.map(e => e ? r.Coin.toJSON(e) : void 0) : t.delegatedFree = [], e.delegatedVesting ? t.delegatedVesting = e.delegatedVesting.map(e => e ? r.Coin.toJSON(e) : void 0) : t.delegatedVesting = [], void 0 !== e.endTime && (t.endTime = (e.endTime || i.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    if (t.originalVesting = [], t.delegatedFree = [], t.delegatedVesting = [], void 0 !== e.baseAccount && null !== e.baseAccount ? t.baseAccount = a.BaseAccount.fromPartial(e.baseAccount) : t.baseAccount = void 0, void 0 !== e.originalVesting && null !== e.originalVesting)
                        for (const o of e.originalVesting) t.originalVesting.push(r.Coin.fromPartial(o));
                    if (void 0 !== e.delegatedFree && null !== e.delegatedFree)
                        for (const o of e.delegatedFree) t.delegatedFree.push(r.Coin.fromPartial(o));
                    if (void 0 !== e.delegatedVesting && null !== e.delegatedVesting)
                        for (const o of e.delegatedVesting) t.delegatedVesting.push(r.Coin.fromPartial(o));
                    return void 0 !== e.endTime && null !== e.endTime ? t.endTime = e.endTime : t.endTime = i.default.ZERO, t
                }
            }, s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3841: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Params = t.ModuleAccount = t.BaseAccount = t.protobufPackage = void 0;
            const i = n(o(1)),
                s = n(o(8)),
                a = o(122);
            t.protobufPackage = "cosmos.auth.v1beta1";
            const r = {
                address: "",
                accountNumber: i.default.UZERO,
                sequence: i.default.UZERO
            };
            t.BaseAccount = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.address && t.uint32(10).string(e.address), void 0 !== e.pubKey && a.Any.encode(e.pubKey, t.uint32(18).fork()).ldelim(), e.accountNumber.isZero() || t.uint32(24).uint64(e.accountNumber), e.sequence.isZero() || t.uint32(32).uint64(e.sequence), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, r);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.address = o.string();
                                break;
                            case 2:
                                i.pubKey = a.Any.decode(o, o.uint32());
                                break;
                            case 3:
                                i.accountNumber = o.uint64();
                                break;
                            case 4:
                                i.sequence = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = a.Any.fromJSON(e.pubKey) : t.pubKey = void 0, void 0 !== e.accountNumber && null !== e.accountNumber ? t.accountNumber = i.default.fromString(e.accountNumber) : t.accountNumber = i.default.UZERO, void 0 !== e.sequence && null !== e.sequence ? t.sequence = i.default.fromString(e.sequence) : t.sequence = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = e.address), void 0 !== e.pubKey && (t.pubKey = e.pubKey ? a.Any.toJSON(e.pubKey) : void 0), void 0 !== e.accountNumber && (t.accountNumber = (e.accountNumber || i.default.UZERO).toString()), void 0 !== e.sequence && (t.sequence = (e.sequence || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.address && null !== e.address ? t.address = e.address : t.address = "", void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = a.Any.fromPartial(e.pubKey) : t.pubKey = void 0, void 0 !== e.accountNumber && null !== e.accountNumber ? t.accountNumber = e.accountNumber : t.accountNumber = i.default.UZERO, void 0 !== e.sequence && null !== e.sequence ? t.sequence = e.sequence : t.sequence = i.default.UZERO, t
                }
            };
            const d = {
                name: "",
                permissions: ""
            };
            t.ModuleAccount = {
                encode(e, o = s.default.Writer.create()) {
                    void 0 !== e.baseAccount && t.BaseAccount.encode(e.baseAccount, o.uint32(10).fork()).ldelim(), "" !== e.name && o.uint32(18).string(e.name);
                    for (const t of e.permissions) o.uint32(26).string(t);
                    return o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, d);
                    for (a.permissions = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.baseAccount = t.BaseAccount.decode(n, n.uint32());
                                break;
                            case 2:
                                a.name = n.string();
                                break;
                            case 3:
                                a.permissions.push(n.string());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, d);
                    if (o.permissions = [], void 0 !== e.baseAccount && null !== e.baseAccount ? o.baseAccount = t.BaseAccount.fromJSON(e.baseAccount) : o.baseAccount = void 0, void 0 !== e.name && null !== e.name ? o.name = String(e.name) : o.name = "", void 0 !== e.permissions && null !== e.permissions)
                        for (const t of e.permissions) o.permissions.push(String(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.baseAccount && (o.baseAccount = e.baseAccount ? t.BaseAccount.toJSON(e.baseAccount) : void 0), void 0 !== e.name && (o.name = e.name), e.permissions ? o.permissions = e.permissions.map(e => e) : o.permissions = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, d);
                    if (o.permissions = [], void 0 !== e.baseAccount && null !== e.baseAccount ? o.baseAccount = t.BaseAccount.fromPartial(e.baseAccount) : o.baseAccount = void 0, void 0 !== e.name && null !== e.name ? o.name = e.name : o.name = "", void 0 !== e.permissions && null !== e.permissions)
                        for (const t of e.permissions) o.permissions.push(t);
                    return o
                }
            };
            const u = {
                maxMemoCharacters: i.default.UZERO,
                txSigLimit: i.default.UZERO,
                txSizeCostPerByte: i.default.UZERO,
                sigVerifyCostEd25519: i.default.UZERO,
                sigVerifyCostSecp256k1: i.default.UZERO
            };
            t.Params = {
                encode: (e, t = s.default.Writer.create()) => (e.maxMemoCharacters.isZero() || t.uint32(8).uint64(e.maxMemoCharacters), e.txSigLimit.isZero() || t.uint32(16).uint64(e.txSigLimit), e.txSizeCostPerByte.isZero() || t.uint32(24).uint64(e.txSizeCostPerByte), e.sigVerifyCostEd25519.isZero() || t.uint32(32).uint64(e.sigVerifyCostEd25519), e.sigVerifyCostSecp256k1.isZero() || t.uint32(40).uint64(e.sigVerifyCostSecp256k1), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, u);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.maxMemoCharacters = o.uint64();
                                break;
                            case 2:
                                i.txSigLimit = o.uint64();
                                break;
                            case 3:
                                i.txSizeCostPerByte = o.uint64();
                                break;
                            case 4:
                                i.sigVerifyCostEd25519 = o.uint64();
                                break;
                            case 5:
                                i.sigVerifyCostSecp256k1 = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.maxMemoCharacters && null !== e.maxMemoCharacters ? t.maxMemoCharacters = i.default.fromString(e.maxMemoCharacters) : t.maxMemoCharacters = i.default.UZERO, void 0 !== e.txSigLimit && null !== e.txSigLimit ? t.txSigLimit = i.default.fromString(e.txSigLimit) : t.txSigLimit = i.default.UZERO, void 0 !== e.txSizeCostPerByte && null !== e.txSizeCostPerByte ? t.txSizeCostPerByte = i.default.fromString(e.txSizeCostPerByte) : t.txSizeCostPerByte = i.default.UZERO, void 0 !== e.sigVerifyCostEd25519 && null !== e.sigVerifyCostEd25519 ? t.sigVerifyCostEd25519 = i.default.fromString(e.sigVerifyCostEd25519) : t.sigVerifyCostEd25519 = i.default.UZERO, void 0 !== e.sigVerifyCostSecp256k1 && null !== e.sigVerifyCostSecp256k1 ? t.sigVerifyCostSecp256k1 = i.default.fromString(e.sigVerifyCostSecp256k1) : t.sigVerifyCostSecp256k1 = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.maxMemoCharacters && (t.maxMemoCharacters = (e.maxMemoCharacters || i.default.UZERO).toString()), void 0 !== e.txSigLimit && (t.txSigLimit = (e.txSigLimit || i.default.UZERO).toString()), void 0 !== e.txSizeCostPerByte && (t.txSizeCostPerByte = (e.txSizeCostPerByte || i.default.UZERO).toString()), void 0 !== e.sigVerifyCostEd25519 && (t.sigVerifyCostEd25519 = (e.sigVerifyCostEd25519 || i.default.UZERO).toString()), void 0 !== e.sigVerifyCostSecp256k1 && (t.sigVerifyCostSecp256k1 = (e.sigVerifyCostSecp256k1 || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.maxMemoCharacters && null !== e.maxMemoCharacters ? t.maxMemoCharacters = e.maxMemoCharacters : t.maxMemoCharacters = i.default.UZERO, void 0 !== e.txSigLimit && null !== e.txSigLimit ? t.txSigLimit = e.txSigLimit : t.txSigLimit = i.default.UZERO, void 0 !== e.txSizeCostPerByte && null !== e.txSizeCostPerByte ? t.txSizeCostPerByte = e.txSizeCostPerByte : t.txSizeCostPerByte = i.default.UZERO, void 0 !== e.sigVerifyCostEd25519 && null !== e.sigVerifyCostEd25519 ? t.sigVerifyCostEd25519 = e.sigVerifyCostEd25519 : t.sigVerifyCostEd25519 = i.default.UZERO, void 0 !== e.sigVerifyCostSecp256k1 && null !== e.sigVerifyCostSecp256k1 ? t.sigVerifyCostSecp256k1 = e.sigVerifyCostSecp256k1 : t.sigVerifyCostSecp256k1 = i.default.UZERO, t
                }
            }, s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3880: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ServiceClientImpl = t.GetTxResponse = t.GetTxRequest = t.SimulateResponse = t.SimulateRequest = t.BroadcastTxResponse = t.BroadcastTxRequest = t.GetTxsEventResponse = t.GetTxsEventRequest = t.broadcastModeToJSON = t.broadcastModeFromJSON = t.BroadcastMode = t.orderByToJSON = t.orderByFromJSON = t.OrderBy = t.protobufPackage = void 0;
            const i = n(o(1)),
                s = n(o(8)),
                a = o(3881),
                r = o(3882),
                d = o(3888);
            var u, l;

            function c(e) {
                switch (e) {
                    case 0:
                    case "ORDER_BY_UNSPECIFIED":
                        return u.ORDER_BY_UNSPECIFIED;
                    case 1:
                    case "ORDER_BY_ASC":
                        return u.ORDER_BY_ASC;
                    case 2:
                    case "ORDER_BY_DESC":
                        return u.ORDER_BY_DESC;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return u.UNRECOGNIZED
                }
            }

            function f(e) {
                switch (e) {
                    case u.ORDER_BY_UNSPECIFIED:
                        return "ORDER_BY_UNSPECIFIED";
                    case u.ORDER_BY_ASC:
                        return "ORDER_BY_ASC";
                    case u.ORDER_BY_DESC:
                        return "ORDER_BY_DESC";
                    default:
                        return "UNKNOWN"
                }
            }

            function g(e) {
                switch (e) {
                    case 0:
                    case "BROADCAST_MODE_UNSPECIFIED":
                        return l.BROADCAST_MODE_UNSPECIFIED;
                    case 1:
                    case "BROADCAST_MODE_BLOCK":
                        return l.BROADCAST_MODE_BLOCK;
                    case 2:
                    case "BROADCAST_MODE_SYNC":
                        return l.BROADCAST_MODE_SYNC;
                    case 3:
                    case "BROADCAST_MODE_ASYNC":
                        return l.BROADCAST_MODE_ASYNC;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return l.UNRECOGNIZED
                }
            }

            function p(e) {
                switch (e) {
                    case l.BROADCAST_MODE_UNSPECIFIED:
                        return "BROADCAST_MODE_UNSPECIFIED";
                    case l.BROADCAST_MODE_BLOCK:
                        return "BROADCAST_MODE_BLOCK";
                    case l.BROADCAST_MODE_SYNC:
                        return "BROADCAST_MODE_SYNC";
                    case l.BROADCAST_MODE_ASYNC:
                        return "BROADCAST_MODE_ASYNC";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "cosmos.tx.v1beta1",
                function(e) {
                    e[e.ORDER_BY_UNSPECIFIED = 0] = "ORDER_BY_UNSPECIFIED", e[e.ORDER_BY_ASC = 1] = "ORDER_BY_ASC", e[e.ORDER_BY_DESC = 2] = "ORDER_BY_DESC", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(u = t.OrderBy || (t.OrderBy = {})), t.orderByFromJSON = c, t.orderByToJSON = f,
                function(e) {
                    e[e.BROADCAST_MODE_UNSPECIFIED = 0] = "BROADCAST_MODE_UNSPECIFIED", e[e.BROADCAST_MODE_BLOCK = 1] = "BROADCAST_MODE_BLOCK", e[e.BROADCAST_MODE_SYNC = 2] = "BROADCAST_MODE_SYNC", e[e.BROADCAST_MODE_ASYNC = 3] = "BROADCAST_MODE_ASYNC", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(l = t.BroadcastMode || (t.BroadcastMode = {})), t.broadcastModeFromJSON = g, t.broadcastModeToJSON = p;
            const m = {
                events: "",
                orderBy: 0
            };
            t.GetTxsEventRequest = {
                encode(e, t = s.default.Writer.create()) {
                    for (const o of e.events) t.uint32(10).string(o);
                    return void 0 !== e.pagination && a.PageRequest.encode(e.pagination, t.uint32(18).fork()).ldelim(), 0 !== e.orderBy && t.uint32(24).int32(e.orderBy), t
                },
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, m);
                    for (i.events = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.events.push(o.string());
                                break;
                            case 2:
                                i.pagination = a.PageRequest.decode(o, o.uint32());
                                break;
                            case 3:
                                i.orderBy = o.int32();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    if (t.events = [], void 0 !== e.events && null !== e.events)
                        for (const o of e.events) t.events.push(String(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = a.PageRequest.fromJSON(e.pagination) : t.pagination = void 0, void 0 !== e.orderBy && null !== e.orderBy ? t.orderBy = c(e.orderBy) : t.orderBy = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.events ? t.events = e.events.map(e => e) : t.events = [], void 0 !== e.pagination && (t.pagination = e.pagination ? a.PageRequest.toJSON(e.pagination) : void 0), void 0 !== e.orderBy && (t.orderBy = f(e.orderBy)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, m);
                    if (t.events = [], void 0 !== e.events && null !== e.events)
                        for (const o of e.events) t.events.push(o);
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = a.PageRequest.fromPartial(e.pagination) : t.pagination = void 0, void 0 !== e.orderBy && null !== e.orderBy ? t.orderBy = e.orderBy : t.orderBy = 0, t
                }
            };
            const v = {};
            t.GetTxsEventResponse = {
                encode(e, t = s.default.Writer.create()) {
                    for (const o of e.txs) d.Tx.encode(o, t.uint32(10).fork()).ldelim();
                    for (const o of e.txResponses) r.TxResponse.encode(o, t.uint32(18).fork()).ldelim();
                    return void 0 !== e.pagination && a.PageResponse.encode(e.pagination, t.uint32(26).fork()).ldelim(), t
                },
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, v);
                    for (i.txs = [], i.txResponses = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.txs.push(d.Tx.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.txResponses.push(r.TxResponse.decode(o, o.uint32()));
                                break;
                            case 3:
                                i.pagination = a.PageResponse.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    if (t.txs = [], t.txResponses = [], void 0 !== e.txs && null !== e.txs)
                        for (const o of e.txs) t.txs.push(d.Tx.fromJSON(o));
                    if (void 0 !== e.txResponses && null !== e.txResponses)
                        for (const o of e.txResponses) t.txResponses.push(r.TxResponse.fromJSON(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = a.PageResponse.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.txs ? t.txs = e.txs.map(e => e ? d.Tx.toJSON(e) : void 0) : t.txs = [], e.txResponses ? t.txResponses = e.txResponses.map(e => e ? r.TxResponse.toJSON(e) : void 0) : t.txResponses = [], void 0 !== e.pagination && (t.pagination = e.pagination ? a.PageResponse.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, v);
                    if (t.txs = [], t.txResponses = [], void 0 !== e.txs && null !== e.txs)
                        for (const o of e.txs) t.txs.push(d.Tx.fromPartial(o));
                    if (void 0 !== e.txResponses && null !== e.txResponses)
                        for (const o of e.txResponses) t.txResponses.push(r.TxResponse.fromPartial(o));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = a.PageResponse.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const O = {
                mode: 0
            };
            t.BroadcastTxRequest = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.txBytes.length && t.uint32(10).bytes(e.txBytes), 0 !== e.mode && t.uint32(16).int32(e.mode), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, O);
                    for (i.txBytes = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.txBytes = o.bytes();
                                break;
                            case 2:
                                i.mode = o.int32();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, O);
                    return t.txBytes = new Uint8Array, void 0 !== e.txBytes && null !== e.txBytes && (t.txBytes = E(e.txBytes)), void 0 !== e.mode && null !== e.mode ? t.mode = g(e.mode) : t.mode = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.txBytes && (t.txBytes = A(void 0 !== e.txBytes ? e.txBytes : new Uint8Array)), void 0 !== e.mode && (t.mode = p(e.mode)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, O);
                    return void 0 !== e.txBytes && null !== e.txBytes ? t.txBytes = e.txBytes : t.txBytes = new Uint8Array, void 0 !== e.mode && null !== e.mode ? t.mode = e.mode : t.mode = 0, t
                }
            };
            const b = {};
            t.BroadcastTxResponse = {
                encode: (e, t = s.default.Writer.create()) => (void 0 !== e.txResponse && r.TxResponse.encode(e.txResponse, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, b);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.txResponse = r.TxResponse.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.txResponse && null !== e.txResponse ? t.txResponse = r.TxResponse.fromJSON(e.txResponse) : t.txResponse = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.txResponse && (t.txResponse = e.txResponse ? r.TxResponse.toJSON(e.txResponse) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.txResponse && null !== e.txResponse ? t.txResponse = r.TxResponse.fromPartial(e.txResponse) : t.txResponse = void 0, t
                }
            };
            const S = {};
            t.SimulateRequest = {
                encode: (e, t = s.default.Writer.create()) => (void 0 !== e.tx && d.Tx.encode(e.tx, t.uint32(10).fork()).ldelim(), 0 !== e.txBytes.length && t.uint32(18).bytes(e.txBytes), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, S);
                    for (i.txBytes = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.tx = d.Tx.decode(o, o.uint32());
                                break;
                            case 2:
                                i.txBytes = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, S);
                    return t.txBytes = new Uint8Array, void 0 !== e.tx && null !== e.tx ? t.tx = d.Tx.fromJSON(e.tx) : t.tx = void 0, void 0 !== e.txBytes && null !== e.txBytes && (t.txBytes = E(e.txBytes)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.tx && (t.tx = e.tx ? d.Tx.toJSON(e.tx) : void 0), void 0 !== e.txBytes && (t.txBytes = A(void 0 !== e.txBytes ? e.txBytes : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, S);
                    return void 0 !== e.tx && null !== e.tx ? t.tx = d.Tx.fromPartial(e.tx) : t.tx = void 0, void 0 !== e.txBytes && null !== e.txBytes ? t.txBytes = e.txBytes : t.txBytes = new Uint8Array, t
                }
            };
            const y = {};
            t.SimulateResponse = {
                encode: (e, t = s.default.Writer.create()) => (void 0 !== e.gasInfo && r.GasInfo.encode(e.gasInfo, t.uint32(10).fork()).ldelim(), void 0 !== e.result && r.Result.encode(e.result, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, y);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.gasInfo = r.GasInfo.decode(o, o.uint32());
                                break;
                            case 2:
                                i.result = r.Result.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, y);
                    return void 0 !== e.gasInfo && null !== e.gasInfo ? t.gasInfo = r.GasInfo.fromJSON(e.gasInfo) : t.gasInfo = void 0, void 0 !== e.result && null !== e.result ? t.result = r.Result.fromJSON(e.result) : t.result = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.gasInfo && (t.gasInfo = e.gasInfo ? r.GasInfo.toJSON(e.gasInfo) : void 0), void 0 !== e.result && (t.result = e.result ? r.Result.toJSON(e.result) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, y);
                    return void 0 !== e.gasInfo && null !== e.gasInfo ? t.gasInfo = r.GasInfo.fromPartial(e.gasInfo) : t.gasInfo = void 0, void 0 !== e.result && null !== e.result ? t.result = r.Result.fromPartial(e.result) : t.result = void 0, t
                }
            };
            const h = {
                hash: ""
            };
            t.GetTxRequest = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.hash && t.uint32(10).string(e.hash), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, h);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.hash = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.hash && null !== e.hash ? t.hash = String(e.hash) : t.hash = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.hash && (t.hash = e.hash), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.hash && null !== e.hash ? t.hash = e.hash : t.hash = "", t
                }
            };
            const R = {};
            t.GetTxResponse = {
                encode: (e, t = s.default.Writer.create()) => (void 0 !== e.tx && d.Tx.encode(e.tx, t.uint32(10).fork()).ldelim(), void 0 !== e.txResponse && r.TxResponse.encode(e.txResponse, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, R);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.tx = d.Tx.decode(o, o.uint32());
                                break;
                            case 2:
                                i.txResponse = r.TxResponse.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, R);
                    return void 0 !== e.tx && null !== e.tx ? t.tx = d.Tx.fromJSON(e.tx) : t.tx = void 0, void 0 !== e.txResponse && null !== e.txResponse ? t.txResponse = r.TxResponse.fromJSON(e.txResponse) : t.txResponse = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.tx && (t.tx = e.tx ? d.Tx.toJSON(e.tx) : void 0), void 0 !== e.txResponse && (t.txResponse = e.txResponse ? r.TxResponse.toJSON(e.txResponse) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, R);
                    return void 0 !== e.tx && null !== e.tx ? t.tx = d.Tx.fromPartial(e.tx) : t.tx = void 0, void 0 !== e.txResponse && null !== e.txResponse ? t.txResponse = r.TxResponse.fromPartial(e.txResponse) : t.txResponse = void 0, t
                }
            };
            t.ServiceClientImpl = class ServiceClientImpl {
                constructor(e) {
                    this.rpc = e, this.Simulate = this.Simulate.bind(this), this.GetTx = this.GetTx.bind(this), this.BroadcastTx = this.BroadcastTx.bind(this), this.GetTxsEvent = this.GetTxsEvent.bind(this)
                }
                Simulate(e) {
                    const o = t.SimulateRequest.encode(e).finish();
                    return this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", o).then(e => t.SimulateResponse.decode(new s.default.Reader(e)))
                }
                GetTx(e) {
                    const o = t.GetTxRequest.encode(e).finish();
                    return this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", o).then(e => t.GetTxResponse.decode(new s.default.Reader(e)))
                }
                BroadcastTx(e) {
                    const o = t.BroadcastTxRequest.encode(e).finish();
                    return this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", o).then(e => t.BroadcastTxResponse.decode(new s.default.Reader(e)))
                }
                GetTxsEvent(e) {
                    const o = t.GetTxsEventRequest.encode(e).finish();
                    return this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", o).then(e => t.GetTxsEventResponse.decode(new s.default.Reader(e)))
                }
            };
            var T = (() => {
                if (void 0 !== T) return T;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const N = T.atob || (e => T.Buffer.from(e, "base64").toString("binary"));

            function E(e) {
                const t = N(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const I = T.btoa || (e => T.Buffer.from(e, "binary").toString("base64"));

            function A(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return I(t.join(""))
            }
            s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3881: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PageResponse = t.PageRequest = t.protobufPackage = void 0;
            const i = n(o(1)),
                s = n(o(8));
            t.protobufPackage = "cosmos.base.query.v1beta1";
            const a = {
                offset: i.default.UZERO,
                limit: i.default.UZERO,
                countTotal: !1,
                reverse: !1
            };
            t.PageRequest = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.key.length && t.uint32(10).bytes(e.key), e.offset.isZero() || t.uint32(16).uint64(e.offset), e.limit.isZero() || t.uint32(24).uint64(e.limit), !0 === e.countTotal && t.uint32(32).bool(e.countTotal), !0 === e.reverse && t.uint32(40).bool(e.reverse), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, a);
                    for (i.key = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.key = o.bytes();
                                break;
                            case 2:
                                i.offset = o.uint64();
                                break;
                            case 3:
                                i.limit = o.uint64();
                                break;
                            case 4:
                                i.countTotal = o.bool();
                                break;
                            case 5:
                                i.reverse = o.bool();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, a);
                    return t.key = new Uint8Array, void 0 !== e.key && null !== e.key && (t.key = l(e.key)), void 0 !== e.offset && null !== e.offset ? t.offset = i.default.fromString(e.offset) : t.offset = i.default.UZERO, void 0 !== e.limit && null !== e.limit ? t.limit = i.default.fromString(e.limit) : t.limit = i.default.UZERO, void 0 !== e.countTotal && null !== e.countTotal ? t.countTotal = Boolean(e.countTotal) : t.countTotal = !1, void 0 !== e.reverse && null !== e.reverse ? t.reverse = Boolean(e.reverse) : t.reverse = !1, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.key && (t.key = f(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.offset && (t.offset = (e.offset || i.default.UZERO).toString()), void 0 !== e.limit && (t.limit = (e.limit || i.default.UZERO).toString()), void 0 !== e.countTotal && (t.countTotal = e.countTotal), void 0 !== e.reverse && (t.reverse = e.reverse), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, a);
                    return void 0 !== e.key && null !== e.key ? t.key = e.key : t.key = new Uint8Array, void 0 !== e.offset && null !== e.offset ? t.offset = e.offset : t.offset = i.default.UZERO, void 0 !== e.limit && null !== e.limit ? t.limit = e.limit : t.limit = i.default.UZERO, void 0 !== e.countTotal && null !== e.countTotal ? t.countTotal = e.countTotal : t.countTotal = !1, void 0 !== e.reverse && null !== e.reverse ? t.reverse = e.reverse : t.reverse = !1, t
                }
            };
            const r = {
                total: i.default.UZERO
            };
            t.PageResponse = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.nextKey.length && t.uint32(10).bytes(e.nextKey), e.total.isZero() || t.uint32(16).uint64(e.total), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, r);
                    for (i.nextKey = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.nextKey = o.bytes();
                                break;
                            case 2:
                                i.total = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, r);
                    return t.nextKey = new Uint8Array, void 0 !== e.nextKey && null !== e.nextKey && (t.nextKey = l(e.nextKey)), void 0 !== e.total && null !== e.total ? t.total = i.default.fromString(e.total) : t.total = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.nextKey && (t.nextKey = f(void 0 !== e.nextKey ? e.nextKey : new Uint8Array)), void 0 !== e.total && (t.total = (e.total || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.nextKey && null !== e.nextKey ? t.nextKey = e.nextKey : t.nextKey = new Uint8Array, void 0 !== e.total && null !== e.total ? t.total = e.total : t.total = i.default.UZERO, t
                }
            };
            var d = (() => {
                if (void 0 !== d) return d;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const u = d.atob || (e => d.Buffer.from(e, "base64").toString("binary"));

            function l(e) {
                const t = u(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const c = d.btoa || (e => d.Buffer.from(e, "binary").toString("base64"));

            function f(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return c(t.join(""))
            }
            s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3882: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SearchTxsResult = t.TxMsgData = t.MsgData = t.SimulationResponse = t.Result = t.GasInfo = t.Attribute = t.StringEvent = t.ABCIMessageLog = t.TxResponse = t.protobufPackage = void 0;
            const i = n(o(1)),
                s = n(o(8)),
                a = o(122),
                r = o(3883);
            t.protobufPackage = "cosmos.base.abci.v1beta1";
            const d = {
                height: i.default.ZERO,
                txhash: "",
                codespace: "",
                code: 0,
                data: "",
                rawLog: "",
                info: "",
                gasWanted: i.default.ZERO,
                gasUsed: i.default.ZERO,
                timestamp: ""
            };
            t.TxResponse = {
                encode(e, o = s.default.Writer.create()) {
                    e.height.isZero() || o.uint32(8).int64(e.height), "" !== e.txhash && o.uint32(18).string(e.txhash), "" !== e.codespace && o.uint32(26).string(e.codespace), 0 !== e.code && o.uint32(32).uint32(e.code), "" !== e.data && o.uint32(42).string(e.data), "" !== e.rawLog && o.uint32(50).string(e.rawLog);
                    for (const n of e.logs) t.ABCIMessageLog.encode(n, o.uint32(58).fork()).ldelim();
                    return "" !== e.info && o.uint32(66).string(e.info), e.gasWanted.isZero() || o.uint32(72).int64(e.gasWanted), e.gasUsed.isZero() || o.uint32(80).int64(e.gasUsed), void 0 !== e.tx && a.Any.encode(e.tx, o.uint32(90).fork()).ldelim(), "" !== e.timestamp && o.uint32(98).string(e.timestamp), o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const r = Object.assign({}, d);
                    for (r.logs = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.height = n.int64();
                                break;
                            case 2:
                                r.txhash = n.string();
                                break;
                            case 3:
                                r.codespace = n.string();
                                break;
                            case 4:
                                r.code = n.uint32();
                                break;
                            case 5:
                                r.data = n.string();
                                break;
                            case 6:
                                r.rawLog = n.string();
                                break;
                            case 7:
                                r.logs.push(t.ABCIMessageLog.decode(n, n.uint32()));
                                break;
                            case 8:
                                r.info = n.string();
                                break;
                            case 9:
                                r.gasWanted = n.int64();
                                break;
                            case 10:
                                r.gasUsed = n.int64();
                                break;
                            case 11:
                                r.tx = a.Any.decode(n, n.uint32());
                                break;
                            case 12:
                                r.timestamp = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, d);
                    if (o.logs = [], void 0 !== e.height && null !== e.height ? o.height = i.default.fromString(e.height) : o.height = i.default.ZERO, void 0 !== e.txhash && null !== e.txhash ? o.txhash = String(e.txhash) : o.txhash = "", void 0 !== e.codespace && null !== e.codespace ? o.codespace = String(e.codespace) : o.codespace = "", void 0 !== e.code && null !== e.code ? o.code = Number(e.code) : o.code = 0, void 0 !== e.data && null !== e.data ? o.data = String(e.data) : o.data = "", void 0 !== e.rawLog && null !== e.rawLog ? o.rawLog = String(e.rawLog) : o.rawLog = "", void 0 !== e.logs && null !== e.logs)
                        for (const n of e.logs) o.logs.push(t.ABCIMessageLog.fromJSON(n));
                    return void 0 !== e.info && null !== e.info ? o.info = String(e.info) : o.info = "", void 0 !== e.gasWanted && null !== e.gasWanted ? o.gasWanted = i.default.fromString(e.gasWanted) : o.gasWanted = i.default.ZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? o.gasUsed = i.default.fromString(e.gasUsed) : o.gasUsed = i.default.ZERO, void 0 !== e.tx && null !== e.tx ? o.tx = a.Any.fromJSON(e.tx) : o.tx = void 0, void 0 !== e.timestamp && null !== e.timestamp ? o.timestamp = String(e.timestamp) : o.timestamp = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.height && (o.height = (e.height || i.default.ZERO).toString()), void 0 !== e.txhash && (o.txhash = e.txhash), void 0 !== e.codespace && (o.codespace = e.codespace), void 0 !== e.code && (o.code = e.code), void 0 !== e.data && (o.data = e.data), void 0 !== e.rawLog && (o.rawLog = e.rawLog), e.logs ? o.logs = e.logs.map(e => e ? t.ABCIMessageLog.toJSON(e) : void 0) : o.logs = [], void 0 !== e.info && (o.info = e.info), void 0 !== e.gasWanted && (o.gasWanted = (e.gasWanted || i.default.ZERO).toString()), void 0 !== e.gasUsed && (o.gasUsed = (e.gasUsed || i.default.ZERO).toString()), void 0 !== e.tx && (o.tx = e.tx ? a.Any.toJSON(e.tx) : void 0), void 0 !== e.timestamp && (o.timestamp = e.timestamp), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, d);
                    if (o.logs = [], void 0 !== e.height && null !== e.height ? o.height = e.height : o.height = i.default.ZERO, void 0 !== e.txhash && null !== e.txhash ? o.txhash = e.txhash : o.txhash = "", void 0 !== e.codespace && null !== e.codespace ? o.codespace = e.codespace : o.codespace = "", void 0 !== e.code && null !== e.code ? o.code = e.code : o.code = 0, void 0 !== e.data && null !== e.data ? o.data = e.data : o.data = "", void 0 !== e.rawLog && null !== e.rawLog ? o.rawLog = e.rawLog : o.rawLog = "", void 0 !== e.logs && null !== e.logs)
                        for (const n of e.logs) o.logs.push(t.ABCIMessageLog.fromPartial(n));
                    return void 0 !== e.info && null !== e.info ? o.info = e.info : o.info = "", void 0 !== e.gasWanted && null !== e.gasWanted ? o.gasWanted = e.gasWanted : o.gasWanted = i.default.ZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? o.gasUsed = e.gasUsed : o.gasUsed = i.default.ZERO, void 0 !== e.tx && null !== e.tx ? o.tx = a.Any.fromPartial(e.tx) : o.tx = void 0, void 0 !== e.timestamp && null !== e.timestamp ? o.timestamp = e.timestamp : o.timestamp = "", o
                }
            };
            const u = {
                msgIndex: 0,
                log: ""
            };
            t.ABCIMessageLog = {
                encode(e, o = s.default.Writer.create()) {
                    0 !== e.msgIndex && o.uint32(8).uint32(e.msgIndex), "" !== e.log && o.uint32(18).string(e.log);
                    for (const n of e.events) t.StringEvent.encode(n, o.uint32(26).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, u);
                    for (a.events = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.msgIndex = n.uint32();
                                break;
                            case 2:
                                a.log = n.string();
                                break;
                            case 3:
                                a.events.push(t.StringEvent.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, u);
                    if (o.events = [], void 0 !== e.msgIndex && null !== e.msgIndex ? o.msgIndex = Number(e.msgIndex) : o.msgIndex = 0, void 0 !== e.log && null !== e.log ? o.log = String(e.log) : o.log = "", void 0 !== e.events && null !== e.events)
                        for (const n of e.events) o.events.push(t.StringEvent.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.msgIndex && (o.msgIndex = e.msgIndex), void 0 !== e.log && (o.log = e.log), e.events ? o.events = e.events.map(e => e ? t.StringEvent.toJSON(e) : void 0) : o.events = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, u);
                    if (o.events = [], void 0 !== e.msgIndex && null !== e.msgIndex ? o.msgIndex = e.msgIndex : o.msgIndex = 0, void 0 !== e.log && null !== e.log ? o.log = e.log : o.log = "", void 0 !== e.events && null !== e.events)
                        for (const n of e.events) o.events.push(t.StringEvent.fromPartial(n));
                    return o
                }
            };
            const l = {
                type: ""
            };
            t.StringEvent = {
                encode(e, o = s.default.Writer.create()) {
                    "" !== e.type && o.uint32(10).string(e.type);
                    for (const n of e.attributes) t.Attribute.encode(n, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, l);
                    for (a.attributes = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.type = n.string();
                                break;
                            case 2:
                                a.attributes.push(t.Attribute.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, l);
                    if (o.attributes = [], void 0 !== e.type && null !== e.type ? o.type = String(e.type) : o.type = "", void 0 !== e.attributes && null !== e.attributes)
                        for (const n of e.attributes) o.attributes.push(t.Attribute.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.type && (o.type = e.type), e.attributes ? o.attributes = e.attributes.map(e => e ? t.Attribute.toJSON(e) : void 0) : o.attributes = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, l);
                    if (o.attributes = [], void 0 !== e.type && null !== e.type ? o.type = e.type : o.type = "", void 0 !== e.attributes && null !== e.attributes)
                        for (const n of e.attributes) o.attributes.push(t.Attribute.fromPartial(n));
                    return o
                }
            };
            const c = {
                key: "",
                value: ""
            };
            t.Attribute = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.key && t.uint32(10).string(e.key), "" !== e.value && t.uint32(18).string(e.value), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, c);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.key = o.string();
                                break;
                            case 2:
                                i.value = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
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
                gasWanted: i.default.UZERO,
                gasUsed: i.default.UZERO
            };
            t.GasInfo = {
                encode: (e, t = s.default.Writer.create()) => (e.gasWanted.isZero() || t.uint32(8).uint64(e.gasWanted), e.gasUsed.isZero() || t.uint32(16).uint64(e.gasUsed), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, f);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.gasWanted = o.uint64();
                                break;
                            case 2:
                                i.gasUsed = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.gasWanted && null !== e.gasWanted ? t.gasWanted = i.default.fromString(e.gasWanted) : t.gasWanted = i.default.UZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? t.gasUsed = i.default.fromString(e.gasUsed) : t.gasUsed = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.gasWanted && (t.gasWanted = (e.gasWanted || i.default.UZERO).toString()), void 0 !== e.gasUsed && (t.gasUsed = (e.gasUsed || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.gasWanted && null !== e.gasWanted ? t.gasWanted = e.gasWanted : t.gasWanted = i.default.UZERO, void 0 !== e.gasUsed && null !== e.gasUsed ? t.gasUsed = e.gasUsed : t.gasUsed = i.default.UZERO, t
                }
            };
            const g = {
                log: ""
            };
            t.Result = {
                encode(e, t = s.default.Writer.create()) {
                    0 !== e.data.length && t.uint32(10).bytes(e.data), "" !== e.log && t.uint32(18).string(e.log);
                    for (const o of e.events) r.Event.encode(o, t.uint32(26).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, g);
                    for (i.events = [], i.data = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.data = o.bytes();
                                break;
                            case 2:
                                i.log = o.string();
                                break;
                            case 3:
                                i.events.push(r.Event.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    if (t.events = [], t.data = new Uint8Array, void 0 !== e.data && null !== e.data && (t.data = y(e.data)), void 0 !== e.log && null !== e.log ? t.log = String(e.log) : t.log = "", void 0 !== e.events && null !== e.events)
                        for (const o of e.events) t.events.push(r.Event.fromJSON(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.data && (t.data = R(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.log && (t.log = e.log), e.events ? t.events = e.events.map(e => e ? r.Event.toJSON(e) : void 0) : t.events = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, g);
                    if (t.events = [], void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, void 0 !== e.log && null !== e.log ? t.log = e.log : t.log = "", void 0 !== e.events && null !== e.events)
                        for (const o of e.events) t.events.push(r.Event.fromPartial(o));
                    return t
                }
            };
            const p = {};
            t.SimulationResponse = {
                encode: (e, o = s.default.Writer.create()) => (void 0 !== e.gasInfo && t.GasInfo.encode(e.gasInfo, o.uint32(10).fork()).ldelim(), void 0 !== e.result && t.Result.encode(e.result, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, p);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.gasInfo = t.GasInfo.decode(n, n.uint32());
                                break;
                            case 2:
                                a.result = t.Result.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, p);
                    return void 0 !== e.gasInfo && null !== e.gasInfo ? o.gasInfo = t.GasInfo.fromJSON(e.gasInfo) : o.gasInfo = void 0, void 0 !== e.result && null !== e.result ? o.result = t.Result.fromJSON(e.result) : o.result = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.gasInfo && (o.gasInfo = e.gasInfo ? t.GasInfo.toJSON(e.gasInfo) : void 0), void 0 !== e.result && (o.result = e.result ? t.Result.toJSON(e.result) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, p);
                    return void 0 !== e.gasInfo && null !== e.gasInfo ? o.gasInfo = t.GasInfo.fromPartial(e.gasInfo) : o.gasInfo = void 0, void 0 !== e.result && null !== e.result ? o.result = t.Result.fromPartial(e.result) : o.result = void 0, o
                }
            };
            const m = {
                msgType: ""
            };
            t.MsgData = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.msgType && t.uint32(10).string(e.msgType), 0 !== e.data.length && t.uint32(18).bytes(e.data), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, m);
                    for (i.data = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.msgType = o.string();
                                break;
                            case 2:
                                i.data = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    return t.data = new Uint8Array, void 0 !== e.msgType && null !== e.msgType ? t.msgType = String(e.msgType) : t.msgType = "", void 0 !== e.data && null !== e.data && (t.data = y(e.data)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.msgType && (t.msgType = e.msgType), void 0 !== e.data && (t.data = R(void 0 !== e.data ? e.data : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, m);
                    return void 0 !== e.msgType && null !== e.msgType ? t.msgType = e.msgType : t.msgType = "", void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, t
                }
            };
            const v = {};
            t.TxMsgData = {
                encode(e, o = s.default.Writer.create()) {
                    for (const n of e.data) t.MsgData.encode(n, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, v);
                    for (a.data = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.data.push(t.MsgData.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, v);
                    if (o.data = [], void 0 !== e.data && null !== e.data)
                        for (const n of e.data) o.data.push(t.MsgData.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.data ? o.data = e.data.map(e => e ? t.MsgData.toJSON(e) : void 0) : o.data = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, v);
                    if (o.data = [], void 0 !== e.data && null !== e.data)
                        for (const n of e.data) o.data.push(t.MsgData.fromPartial(n));
                    return o
                }
            };
            const O = {
                totalCount: i.default.UZERO,
                count: i.default.UZERO,
                pageNumber: i.default.UZERO,
                pageTotal: i.default.UZERO,
                limit: i.default.UZERO
            };
            t.SearchTxsResult = {
                encode(e, o = s.default.Writer.create()) {
                    e.totalCount.isZero() || o.uint32(8).uint64(e.totalCount), e.count.isZero() || o.uint32(16).uint64(e.count), e.pageNumber.isZero() || o.uint32(24).uint64(e.pageNumber), e.pageTotal.isZero() || o.uint32(32).uint64(e.pageTotal), e.limit.isZero() || o.uint32(40).uint64(e.limit);
                    for (const n of e.txs) t.TxResponse.encode(n, o.uint32(50).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, O);
                    for (a.txs = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.totalCount = n.uint64();
                                break;
                            case 2:
                                a.count = n.uint64();
                                break;
                            case 3:
                                a.pageNumber = n.uint64();
                                break;
                            case 4:
                                a.pageTotal = n.uint64();
                                break;
                            case 5:
                                a.limit = n.uint64();
                                break;
                            case 6:
                                a.txs.push(t.TxResponse.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, O);
                    if (o.txs = [], void 0 !== e.totalCount && null !== e.totalCount ? o.totalCount = i.default.fromString(e.totalCount) : o.totalCount = i.default.UZERO, void 0 !== e.count && null !== e.count ? o.count = i.default.fromString(e.count) : o.count = i.default.UZERO, void 0 !== e.pageNumber && null !== e.pageNumber ? o.pageNumber = i.default.fromString(e.pageNumber) : o.pageNumber = i.default.UZERO, void 0 !== e.pageTotal && null !== e.pageTotal ? o.pageTotal = i.default.fromString(e.pageTotal) : o.pageTotal = i.default.UZERO, void 0 !== e.limit && null !== e.limit ? o.limit = i.default.fromString(e.limit) : o.limit = i.default.UZERO, void 0 !== e.txs && null !== e.txs)
                        for (const n of e.txs) o.txs.push(t.TxResponse.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.totalCount && (o.totalCount = (e.totalCount || i.default.UZERO).toString()), void 0 !== e.count && (o.count = (e.count || i.default.UZERO).toString()), void 0 !== e.pageNumber && (o.pageNumber = (e.pageNumber || i.default.UZERO).toString()), void 0 !== e.pageTotal && (o.pageTotal = (e.pageTotal || i.default.UZERO).toString()), void 0 !== e.limit && (o.limit = (e.limit || i.default.UZERO).toString()), e.txs ? o.txs = e.txs.map(e => e ? t.TxResponse.toJSON(e) : void 0) : o.txs = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, O);
                    if (o.txs = [], void 0 !== e.totalCount && null !== e.totalCount ? o.totalCount = e.totalCount : o.totalCount = i.default.UZERO, void 0 !== e.count && null !== e.count ? o.count = e.count : o.count = i.default.UZERO, void 0 !== e.pageNumber && null !== e.pageNumber ? o.pageNumber = e.pageNumber : o.pageNumber = i.default.UZERO, void 0 !== e.pageTotal && null !== e.pageTotal ? o.pageTotal = e.pageTotal : o.pageTotal = i.default.UZERO, void 0 !== e.limit && null !== e.limit ? o.limit = e.limit : o.limit = i.default.UZERO, void 0 !== e.txs && null !== e.txs)
                        for (const n of e.txs) o.txs.push(t.TxResponse.fromPartial(n));
                    return o
                }
            };
            var b = (() => {
                if (void 0 !== b) return b;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const S = b.atob || (e => b.Buffer.from(e, "base64").toString("binary"));

            function y(e) {
                const t = S(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const h = b.btoa || (e => b.Buffer.from(e, "binary").toString("base64"));

            function R(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return h(t.join(""))
            }
            s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3888: function(e, t, o) {
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
                s = n(o(8)),
                a = o(122),
                r = o(1956),
                d = o(1957),
                u = o(349);
            t.protobufPackage = "cosmos.tx.v1beta1";
            const l = {};
            t.Tx = {
                encode(e, o = s.default.Writer.create()) {
                    void 0 !== e.body && t.TxBody.encode(e.body, o.uint32(10).fork()).ldelim(), void 0 !== e.authInfo && t.AuthInfo.encode(e.authInfo, o.uint32(18).fork()).ldelim();
                    for (const t of e.signatures) o.uint32(26).bytes(t);
                    return o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, l);
                    for (a.signatures = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.body = t.TxBody.decode(n, n.uint32());
                                break;
                            case 2:
                                a.authInfo = t.AuthInfo.decode(n, n.uint32());
                                break;
                            case 3:
                                a.signatures.push(n.bytes());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, l);
                    if (o.signatures = [], void 0 !== e.body && null !== e.body ? o.body = t.TxBody.fromJSON(e.body) : o.body = void 0, void 0 !== e.authInfo && null !== e.authInfo ? o.authInfo = t.AuthInfo.fromJSON(e.authInfo) : o.authInfo = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const t of e.signatures) o.signatures.push(R(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.body && (o.body = e.body ? t.TxBody.toJSON(e.body) : void 0), void 0 !== e.authInfo && (o.authInfo = e.authInfo ? t.AuthInfo.toJSON(e.authInfo) : void 0), e.signatures ? o.signatures = e.signatures.map(e => N(void 0 !== e ? e : new Uint8Array)) : o.signatures = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, l);
                    if (o.signatures = [], void 0 !== e.body && null !== e.body ? o.body = t.TxBody.fromPartial(e.body) : o.body = void 0, void 0 !== e.authInfo && null !== e.authInfo ? o.authInfo = t.AuthInfo.fromPartial(e.authInfo) : o.authInfo = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const t of e.signatures) o.signatures.push(t);
                    return o
                }
            };
            const c = {};
            t.TxRaw = {
                encode(e, t = s.default.Writer.create()) {
                    0 !== e.bodyBytes.length && t.uint32(10).bytes(e.bodyBytes), 0 !== e.authInfoBytes.length && t.uint32(18).bytes(e.authInfoBytes);
                    for (const o of e.signatures) t.uint32(26).bytes(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
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
                    if (t.signatures = [], t.bodyBytes = new Uint8Array, t.authInfoBytes = new Uint8Array, void 0 !== e.bodyBytes && null !== e.bodyBytes && (t.bodyBytes = R(e.bodyBytes)), void 0 !== e.authInfoBytes && null !== e.authInfoBytes && (t.authInfoBytes = R(e.authInfoBytes)), void 0 !== e.signatures && null !== e.signatures)
                        for (const o of e.signatures) t.signatures.push(R(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.bodyBytes && (t.bodyBytes = N(void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array)), void 0 !== e.authInfoBytes && (t.authInfoBytes = N(void 0 !== e.authInfoBytes ? e.authInfoBytes : new Uint8Array)), e.signatures ? t.signatures = e.signatures.map(e => N(void 0 !== e ? e : new Uint8Array)) : t.signatures = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    if (t.signatures = [], void 0 !== e.bodyBytes && null !== e.bodyBytes ? t.bodyBytes = e.bodyBytes : t.bodyBytes = new Uint8Array, void 0 !== e.authInfoBytes && null !== e.authInfoBytes ? t.authInfoBytes = e.authInfoBytes : t.authInfoBytes = new Uint8Array, void 0 !== e.signatures && null !== e.signatures)
                        for (const o of e.signatures) t.signatures.push(o);
                    return t
                }
            };
            const f = {
                chainId: "",
                accountNumber: i.default.UZERO
            };
            t.SignDoc = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.bodyBytes.length && t.uint32(10).bytes(e.bodyBytes), 0 !== e.authInfoBytes.length && t.uint32(18).bytes(e.authInfoBytes), "" !== e.chainId && t.uint32(26).string(e.chainId), e.accountNumber.isZero() || t.uint32(32).uint64(e.accountNumber), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, f);
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
                    const t = Object.assign({}, f);
                    return t.bodyBytes = new Uint8Array, t.authInfoBytes = new Uint8Array, void 0 !== e.bodyBytes && null !== e.bodyBytes && (t.bodyBytes = R(e.bodyBytes)), void 0 !== e.authInfoBytes && null !== e.authInfoBytes && (t.authInfoBytes = R(e.authInfoBytes)), void 0 !== e.chainId && null !== e.chainId ? t.chainId = String(e.chainId) : t.chainId = "", void 0 !== e.accountNumber && null !== e.accountNumber ? t.accountNumber = i.default.fromString(e.accountNumber) : t.accountNumber = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.bodyBytes && (t.bodyBytes = N(void 0 !== e.bodyBytes ? e.bodyBytes : new Uint8Array)), void 0 !== e.authInfoBytes && (t.authInfoBytes = N(void 0 !== e.authInfoBytes ? e.authInfoBytes : new Uint8Array)), void 0 !== e.chainId && (t.chainId = e.chainId), void 0 !== e.accountNumber && (t.accountNumber = (e.accountNumber || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.bodyBytes && null !== e.bodyBytes ? t.bodyBytes = e.bodyBytes : t.bodyBytes = new Uint8Array, void 0 !== e.authInfoBytes && null !== e.authInfoBytes ? t.authInfoBytes = e.authInfoBytes : t.authInfoBytes = new Uint8Array, void 0 !== e.chainId && null !== e.chainId ? t.chainId = e.chainId : t.chainId = "", void 0 !== e.accountNumber && null !== e.accountNumber ? t.accountNumber = e.accountNumber : t.accountNumber = i.default.UZERO, t
                }
            };
            const g = {
                memo: "",
                timeoutHeight: i.default.UZERO
            };
            t.TxBody = {
                encode(e, t = s.default.Writer.create()) {
                    for (const o of e.messages) a.Any.encode(o, t.uint32(10).fork()).ldelim();
                    "" !== e.memo && t.uint32(18).string(e.memo), e.timeoutHeight.isZero() || t.uint32(24).uint64(e.timeoutHeight);
                    for (const o of e.extensionOptions) a.Any.encode(o, t.uint32(8186).fork()).ldelim();
                    for (const o of e.nonCriticalExtensionOptions) a.Any.encode(o, t.uint32(16378).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, g);
                    for (i.messages = [], i.extensionOptions = [], i.nonCriticalExtensionOptions = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.messages.push(a.Any.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.memo = o.string();
                                break;
                            case 3:
                                i.timeoutHeight = o.uint64();
                                break;
                            case 1023:
                                i.extensionOptions.push(a.Any.decode(o, o.uint32()));
                                break;
                            case 2047:
                                i.nonCriticalExtensionOptions.push(a.Any.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    if (t.messages = [], t.extensionOptions = [], t.nonCriticalExtensionOptions = [], void 0 !== e.messages && null !== e.messages)
                        for (const o of e.messages) t.messages.push(a.Any.fromJSON(o));
                    if (void 0 !== e.memo && null !== e.memo ? t.memo = String(e.memo) : t.memo = "", void 0 !== e.timeoutHeight && null !== e.timeoutHeight ? t.timeoutHeight = i.default.fromString(e.timeoutHeight) : t.timeoutHeight = i.default.UZERO, void 0 !== e.extensionOptions && null !== e.extensionOptions)
                        for (const o of e.extensionOptions) t.extensionOptions.push(a.Any.fromJSON(o));
                    if (void 0 !== e.nonCriticalExtensionOptions && null !== e.nonCriticalExtensionOptions)
                        for (const o of e.nonCriticalExtensionOptions) t.nonCriticalExtensionOptions.push(a.Any.fromJSON(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.messages ? t.messages = e.messages.map(e => e ? a.Any.toJSON(e) : void 0) : t.messages = [], void 0 !== e.memo && (t.memo = e.memo), void 0 !== e.timeoutHeight && (t.timeoutHeight = (e.timeoutHeight || i.default.UZERO).toString()), e.extensionOptions ? t.extensionOptions = e.extensionOptions.map(e => e ? a.Any.toJSON(e) : void 0) : t.extensionOptions = [], e.nonCriticalExtensionOptions ? t.nonCriticalExtensionOptions = e.nonCriticalExtensionOptions.map(e => e ? a.Any.toJSON(e) : void 0) : t.nonCriticalExtensionOptions = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, g);
                    if (t.messages = [], t.extensionOptions = [], t.nonCriticalExtensionOptions = [], void 0 !== e.messages && null !== e.messages)
                        for (const o of e.messages) t.messages.push(a.Any.fromPartial(o));
                    if (void 0 !== e.memo && null !== e.memo ? t.memo = e.memo : t.memo = "", void 0 !== e.timeoutHeight && null !== e.timeoutHeight ? t.timeoutHeight = e.timeoutHeight : t.timeoutHeight = i.default.UZERO, void 0 !== e.extensionOptions && null !== e.extensionOptions)
                        for (const o of e.extensionOptions) t.extensionOptions.push(a.Any.fromPartial(o));
                    if (void 0 !== e.nonCriticalExtensionOptions && null !== e.nonCriticalExtensionOptions)
                        for (const o of e.nonCriticalExtensionOptions) t.nonCriticalExtensionOptions.push(a.Any.fromPartial(o));
                    return t
                }
            };
            const p = {};
            t.AuthInfo = {
                encode(e, o = s.default.Writer.create()) {
                    for (const n of e.signerInfos) t.SignerInfo.encode(n, o.uint32(10).fork()).ldelim();
                    return void 0 !== e.fee && t.Fee.encode(e.fee, o.uint32(18).fork()).ldelim(), o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, p);
                    for (a.signerInfos = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.signerInfos.push(t.SignerInfo.decode(n, n.uint32()));
                                break;
                            case 2:
                                a.fee = t.Fee.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, p);
                    if (o.signerInfos = [], void 0 !== e.signerInfos && null !== e.signerInfos)
                        for (const n of e.signerInfos) o.signerInfos.push(t.SignerInfo.fromJSON(n));
                    return void 0 !== e.fee && null !== e.fee ? o.fee = t.Fee.fromJSON(e.fee) : o.fee = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return e.signerInfos ? o.signerInfos = e.signerInfos.map(e => e ? t.SignerInfo.toJSON(e) : void 0) : o.signerInfos = [], void 0 !== e.fee && (o.fee = e.fee ? t.Fee.toJSON(e.fee) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, p);
                    if (o.signerInfos = [], void 0 !== e.signerInfos && null !== e.signerInfos)
                        for (const n of e.signerInfos) o.signerInfos.push(t.SignerInfo.fromPartial(n));
                    return void 0 !== e.fee && null !== e.fee ? o.fee = t.Fee.fromPartial(e.fee) : o.fee = void 0, o
                }
            };
            const m = {
                sequence: i.default.UZERO
            };
            t.SignerInfo = {
                encode: (e, o = s.default.Writer.create()) => (void 0 !== e.publicKey && a.Any.encode(e.publicKey, o.uint32(10).fork()).ldelim(), void 0 !== e.modeInfo && t.ModeInfo.encode(e.modeInfo, o.uint32(18).fork()).ldelim(), e.sequence.isZero() || o.uint32(24).uint64(e.sequence), o),
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const r = Object.assign({}, m);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.publicKey = a.Any.decode(n, n.uint32());
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
                    const o = Object.assign({}, m);
                    return void 0 !== e.publicKey && null !== e.publicKey ? o.publicKey = a.Any.fromJSON(e.publicKey) : o.publicKey = void 0, void 0 !== e.modeInfo && null !== e.modeInfo ? o.modeInfo = t.ModeInfo.fromJSON(e.modeInfo) : o.modeInfo = void 0, void 0 !== e.sequence && null !== e.sequence ? o.sequence = i.default.fromString(e.sequence) : o.sequence = i.default.UZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.publicKey && (o.publicKey = e.publicKey ? a.Any.toJSON(e.publicKey) : void 0), void 0 !== e.modeInfo && (o.modeInfo = e.modeInfo ? t.ModeInfo.toJSON(e.modeInfo) : void 0), void 0 !== e.sequence && (o.sequence = (e.sequence || i.default.UZERO).toString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, m);
                    return void 0 !== e.publicKey && null !== e.publicKey ? o.publicKey = a.Any.fromPartial(e.publicKey) : o.publicKey = void 0, void 0 !== e.modeInfo && null !== e.modeInfo ? o.modeInfo = t.ModeInfo.fromPartial(e.modeInfo) : o.modeInfo = void 0, void 0 !== e.sequence && null !== e.sequence ? o.sequence = e.sequence : o.sequence = i.default.UZERO, o
                }
            };
            const v = {};
            t.ModeInfo = {
                encode: (e, o = s.default.Writer.create()) => (void 0 !== e.single && t.ModeInfo_Single.encode(e.single, o.uint32(10).fork()).ldelim(), void 0 !== e.multi && t.ModeInfo_Multi.encode(e.multi, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, v);
                    for (; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.single = t.ModeInfo_Single.decode(n, n.uint32());
                                break;
                            case 2:
                                a.multi = t.ModeInfo_Multi.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, v);
                    return void 0 !== e.single && null !== e.single ? o.single = t.ModeInfo_Single.fromJSON(e.single) : o.single = void 0, void 0 !== e.multi && null !== e.multi ? o.multi = t.ModeInfo_Multi.fromJSON(e.multi) : o.multi = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.single && (o.single = e.single ? t.ModeInfo_Single.toJSON(e.single) : void 0), void 0 !== e.multi && (o.multi = e.multi ? t.ModeInfo_Multi.toJSON(e.multi) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, v);
                    return void 0 !== e.single && null !== e.single ? o.single = t.ModeInfo_Single.fromPartial(e.single) : o.single = void 0, void 0 !== e.multi && null !== e.multi ? o.multi = t.ModeInfo_Multi.fromPartial(e.multi) : o.multi = void 0, o
                }
            };
            const O = {
                mode: 0
            };
            t.ModeInfo_Single = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.mode && t.uint32(8).int32(e.mode), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, O);
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
                    const t = Object.assign({}, O);
                    return void 0 !== e.mode && null !== e.mode ? t.mode = r.signModeFromJSON(e.mode) : t.mode = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.mode && (t.mode = r.signModeToJSON(e.mode)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, O);
                    return void 0 !== e.mode && null !== e.mode ? t.mode = e.mode : t.mode = 0, t
                }
            };
            const b = {};
            t.ModeInfo_Multi = {
                encode(e, o = s.default.Writer.create()) {
                    void 0 !== e.bitarray && d.CompactBitArray.encode(e.bitarray, o.uint32(10).fork()).ldelim();
                    for (const n of e.modeInfos) t.ModeInfo.encode(n, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, b);
                    for (a.modeInfos = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.bitarray = d.CompactBitArray.decode(n, n.uint32());
                                break;
                            case 2:
                                a.modeInfos.push(t.ModeInfo.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, b);
                    if (o.modeInfos = [], void 0 !== e.bitarray && null !== e.bitarray ? o.bitarray = d.CompactBitArray.fromJSON(e.bitarray) : o.bitarray = void 0, void 0 !== e.modeInfos && null !== e.modeInfos)
                        for (const n of e.modeInfos) o.modeInfos.push(t.ModeInfo.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.bitarray && (o.bitarray = e.bitarray ? d.CompactBitArray.toJSON(e.bitarray) : void 0), e.modeInfos ? o.modeInfos = e.modeInfos.map(e => e ? t.ModeInfo.toJSON(e) : void 0) : o.modeInfos = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, b);
                    if (o.modeInfos = [], void 0 !== e.bitarray && null !== e.bitarray ? o.bitarray = d.CompactBitArray.fromPartial(e.bitarray) : o.bitarray = void 0, void 0 !== e.modeInfos && null !== e.modeInfos)
                        for (const n of e.modeInfos) o.modeInfos.push(t.ModeInfo.fromPartial(n));
                    return o
                }
            };
            const S = {
                gasLimit: i.default.UZERO,
                payer: "",
                granter: ""
            };
            t.Fee = {
                encode(e, t = s.default.Writer.create()) {
                    for (const o of e.amount) u.Coin.encode(o, t.uint32(10).fork()).ldelim();
                    return e.gasLimit.isZero() || t.uint32(16).uint64(e.gasLimit), "" !== e.payer && t.uint32(26).string(e.payer), "" !== e.granter && t.uint32(34).string(e.granter), t
                },
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, S);
                    for (i.amount = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.amount.push(u.Coin.decode(o, o.uint32()));
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
                    const t = Object.assign({}, S);
                    if (t.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(u.Coin.fromJSON(o));
                    return void 0 !== e.gasLimit && null !== e.gasLimit ? t.gasLimit = i.default.fromString(e.gasLimit) : t.gasLimit = i.default.UZERO, void 0 !== e.payer && null !== e.payer ? t.payer = String(e.payer) : t.payer = "", void 0 !== e.granter && null !== e.granter ? t.granter = String(e.granter) : t.granter = "", t
                },
                toJSON(e) {
                    const t = {};
                    return e.amount ? t.amount = e.amount.map(e => e ? u.Coin.toJSON(e) : void 0) : t.amount = [], void 0 !== e.gasLimit && (t.gasLimit = (e.gasLimit || i.default.UZERO).toString()), void 0 !== e.payer && (t.payer = e.payer), void 0 !== e.granter && (t.granter = e.granter), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, S);
                    if (t.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(u.Coin.fromPartial(o));
                    return void 0 !== e.gasLimit && null !== e.gasLimit ? t.gasLimit = e.gasLimit : t.gasLimit = i.default.UZERO, void 0 !== e.payer && null !== e.payer ? t.payer = e.payer : t.payer = "", void 0 !== e.granter && null !== e.granter ? t.granter = e.granter : t.granter = "", t
                }
            };
            var y = (() => {
                if (void 0 !== y) return y;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const h = y.atob || (e => y.Buffer.from(e, "base64").toString("binary"));

            function R(e) {
                const t = h(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const T = y.btoa || (e => y.Buffer.from(e, "binary").toString("base64"));

            function N(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return T(t.join(""))
            }
            s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        },
        3894: function(e, t, o) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TallyParams = t.VotingParams = t.DepositParams = t.Vote = t.TallyResult = t.Proposal = t.Deposit = t.TextProposal = t.WeightedVoteOption = t.proposalStatusToJSON = t.proposalStatusFromJSON = t.ProposalStatus = t.voteOptionToJSON = t.voteOptionFromJSON = t.VoteOption = t.protobufPackage = void 0;
            const i = n(o(1)),
                s = n(o(8)),
                a = o(122),
                r = o(1955),
                d = o(635),
                u = o(349);
            var l, c;

            function f(e) {
                switch (e) {
                    case 0:
                    case "VOTE_OPTION_UNSPECIFIED":
                        return l.VOTE_OPTION_UNSPECIFIED;
                    case 1:
                    case "VOTE_OPTION_YES":
                        return l.VOTE_OPTION_YES;
                    case 2:
                    case "VOTE_OPTION_ABSTAIN":
                        return l.VOTE_OPTION_ABSTAIN;
                    case 3:
                    case "VOTE_OPTION_NO":
                        return l.VOTE_OPTION_NO;
                    case 4:
                    case "VOTE_OPTION_NO_WITH_VETO":
                        return l.VOTE_OPTION_NO_WITH_VETO;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return l.UNRECOGNIZED
                }
            }

            function g(e) {
                switch (e) {
                    case l.VOTE_OPTION_UNSPECIFIED:
                        return "VOTE_OPTION_UNSPECIFIED";
                    case l.VOTE_OPTION_YES:
                        return "VOTE_OPTION_YES";
                    case l.VOTE_OPTION_ABSTAIN:
                        return "VOTE_OPTION_ABSTAIN";
                    case l.VOTE_OPTION_NO:
                        return "VOTE_OPTION_NO";
                    case l.VOTE_OPTION_NO_WITH_VETO:
                        return "VOTE_OPTION_NO_WITH_VETO";
                    default:
                        return "UNKNOWN"
                }
            }

            function p(e) {
                switch (e) {
                    case 0:
                    case "PROPOSAL_STATUS_UNSPECIFIED":
                        return c.PROPOSAL_STATUS_UNSPECIFIED;
                    case 1:
                    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
                        return c.PROPOSAL_STATUS_DEPOSIT_PERIOD;
                    case 2:
                    case "PROPOSAL_STATUS_VOTING_PERIOD":
                        return c.PROPOSAL_STATUS_VOTING_PERIOD;
                    case 3:
                    case "PROPOSAL_STATUS_PASSED":
                        return c.PROPOSAL_STATUS_PASSED;
                    case 4:
                    case "PROPOSAL_STATUS_REJECTED":
                        return c.PROPOSAL_STATUS_REJECTED;
                    case 5:
                    case "PROPOSAL_STATUS_FAILED":
                        return c.PROPOSAL_STATUS_FAILED;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return c.UNRECOGNIZED
                }
            }

            function m(e) {
                switch (e) {
                    case c.PROPOSAL_STATUS_UNSPECIFIED:
                        return "PROPOSAL_STATUS_UNSPECIFIED";
                    case c.PROPOSAL_STATUS_DEPOSIT_PERIOD:
                        return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
                    case c.PROPOSAL_STATUS_VOTING_PERIOD:
                        return "PROPOSAL_STATUS_VOTING_PERIOD";
                    case c.PROPOSAL_STATUS_PASSED:
                        return "PROPOSAL_STATUS_PASSED";
                    case c.PROPOSAL_STATUS_REJECTED:
                        return "PROPOSAL_STATUS_REJECTED";
                    case c.PROPOSAL_STATUS_FAILED:
                        return "PROPOSAL_STATUS_FAILED";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "cosmos.gov.v1beta1",
                function(e) {
                    e[e.VOTE_OPTION_UNSPECIFIED = 0] = "VOTE_OPTION_UNSPECIFIED", e[e.VOTE_OPTION_YES = 1] = "VOTE_OPTION_YES", e[e.VOTE_OPTION_ABSTAIN = 2] = "VOTE_OPTION_ABSTAIN", e[e.VOTE_OPTION_NO = 3] = "VOTE_OPTION_NO", e[e.VOTE_OPTION_NO_WITH_VETO = 4] = "VOTE_OPTION_NO_WITH_VETO", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(l = t.VoteOption || (t.VoteOption = {})), t.voteOptionFromJSON = f, t.voteOptionToJSON = g,
                function(e) {
                    e[e.PROPOSAL_STATUS_UNSPECIFIED = 0] = "PROPOSAL_STATUS_UNSPECIFIED", e[e.PROPOSAL_STATUS_DEPOSIT_PERIOD = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD", e[e.PROPOSAL_STATUS_VOTING_PERIOD = 2] = "PROPOSAL_STATUS_VOTING_PERIOD", e[e.PROPOSAL_STATUS_PASSED = 3] = "PROPOSAL_STATUS_PASSED", e[e.PROPOSAL_STATUS_REJECTED = 4] = "PROPOSAL_STATUS_REJECTED", e[e.PROPOSAL_STATUS_FAILED = 5] = "PROPOSAL_STATUS_FAILED", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(c = t.ProposalStatus || (t.ProposalStatus = {})), t.proposalStatusFromJSON = p, t.proposalStatusToJSON = m;
            const v = {
                option: 0,
                weight: ""
            };
            t.WeightedVoteOption = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.option && t.uint32(8).int32(e.option), "" !== e.weight && t.uint32(18).string(e.weight), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, v);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.option = o.int32();
                                break;
                            case 2:
                                i.weight = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    return void 0 !== e.option && null !== e.option ? t.option = f(e.option) : t.option = 0, void 0 !== e.weight && null !== e.weight ? t.weight = String(e.weight) : t.weight = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.option && (t.option = g(e.option)), void 0 !== e.weight && (t.weight = e.weight), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, v);
                    return void 0 !== e.option && null !== e.option ? t.option = e.option : t.option = 0, void 0 !== e.weight && null !== e.weight ? t.weight = e.weight : t.weight = "", t
                }
            };
            const O = {
                title: "",
                description: ""
            };
            t.TextProposal = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, O);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = o.string();
                                break;
                            case 2:
                                i.description = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, O);
                    return void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, O);
                    return void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", t
                }
            };
            const b = {
                proposalId: i.default.UZERO,
                depositor: ""
            };
            t.Deposit = {
                encode(e, t = s.default.Writer.create()) {
                    e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId), "" !== e.depositor && t.uint32(18).string(e.depositor);
                    for (const o of e.amount) u.Coin.encode(o, t.uint32(26).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, b);
                    for (i.amount = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.proposalId = o.uint64();
                                break;
                            case 2:
                                i.depositor = o.string();
                                break;
                            case 3:
                                i.amount.push(u.Coin.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    if (t.amount = [], void 0 !== e.proposalId && null !== e.proposalId ? t.proposalId = i.default.fromString(e.proposalId) : t.proposalId = i.default.UZERO, void 0 !== e.depositor && null !== e.depositor ? t.depositor = String(e.depositor) : t.depositor = "", void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(u.Coin.fromJSON(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.proposalId && (t.proposalId = (e.proposalId || i.default.UZERO).toString()), void 0 !== e.depositor && (t.depositor = e.depositor), e.amount ? t.amount = e.amount.map(e => e ? u.Coin.toJSON(e) : void 0) : t.amount = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, b);
                    if (t.amount = [], void 0 !== e.proposalId && null !== e.proposalId ? t.proposalId = e.proposalId : t.proposalId = i.default.UZERO, void 0 !== e.depositor && null !== e.depositor ? t.depositor = e.depositor : t.depositor = "", void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(u.Coin.fromPartial(o));
                    return t
                }
            };
            const S = {
                proposalId: i.default.UZERO,
                status: 0
            };
            t.Proposal = {
                encode(e, o = s.default.Writer.create()) {
                    e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), void 0 !== e.content && a.Any.encode(e.content, o.uint32(18).fork()).ldelim(), 0 !== e.status && o.uint32(24).int32(e.status), void 0 !== e.finalTallyResult && t.TallyResult.encode(e.finalTallyResult, o.uint32(34).fork()).ldelim(), void 0 !== e.submitTime && d.Timestamp.encode(_(e.submitTime), o.uint32(42).fork()).ldelim(), void 0 !== e.depositEndTime && d.Timestamp.encode(_(e.depositEndTime), o.uint32(50).fork()).ldelim();
                    for (const t of e.totalDeposit) u.Coin.encode(t, o.uint32(58).fork()).ldelim();
                    return void 0 !== e.votingStartTime && d.Timestamp.encode(_(e.votingStartTime), o.uint32(66).fork()).ldelim(), void 0 !== e.votingEndTime && d.Timestamp.encode(_(e.votingEndTime), o.uint32(74).fork()).ldelim(), o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const r = Object.assign({}, S);
                    for (r.totalDeposit = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = n.uint64();
                                break;
                            case 2:
                                r.content = a.Any.decode(n, n.uint32());
                                break;
                            case 3:
                                r.status = n.int32();
                                break;
                            case 4:
                                r.finalTallyResult = t.TallyResult.decode(n, n.uint32());
                                break;
                            case 5:
                                r.submitTime = k(d.Timestamp.decode(n, n.uint32()));
                                break;
                            case 6:
                                r.depositEndTime = k(d.Timestamp.decode(n, n.uint32()));
                                break;
                            case 7:
                                r.totalDeposit.push(u.Coin.decode(n, n.uint32()));
                                break;
                            case 8:
                                r.votingStartTime = k(d.Timestamp.decode(n, n.uint32()));
                                break;
                            case 9:
                                r.votingEndTime = k(d.Timestamp.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, S);
                    if (o.totalDeposit = [], void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = i.default.fromString(e.proposalId) : o.proposalId = i.default.UZERO, void 0 !== e.content && null !== e.content ? o.content = a.Any.fromJSON(e.content) : o.content = void 0, void 0 !== e.status && null !== e.status ? o.status = p(e.status) : o.status = 0, void 0 !== e.finalTallyResult && null !== e.finalTallyResult ? o.finalTallyResult = t.TallyResult.fromJSON(e.finalTallyResult) : o.finalTallyResult = void 0, void 0 !== e.submitTime && null !== e.submitTime ? o.submitTime = w(e.submitTime) : o.submitTime = void 0, void 0 !== e.depositEndTime && null !== e.depositEndTime ? o.depositEndTime = w(e.depositEndTime) : o.depositEndTime = void 0, void 0 !== e.totalDeposit && null !== e.totalDeposit)
                        for (const t of e.totalDeposit) o.totalDeposit.push(u.Coin.fromJSON(t));
                    return void 0 !== e.votingStartTime && null !== e.votingStartTime ? o.votingStartTime = w(e.votingStartTime) : o.votingStartTime = void 0, void 0 !== e.votingEndTime && null !== e.votingEndTime ? o.votingEndTime = w(e.votingEndTime) : o.votingEndTime = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || i.default.UZERO).toString()), void 0 !== e.content && (o.content = e.content ? a.Any.toJSON(e.content) : void 0), void 0 !== e.status && (o.status = m(e.status)), void 0 !== e.finalTallyResult && (o.finalTallyResult = e.finalTallyResult ? t.TallyResult.toJSON(e.finalTallyResult) : void 0), void 0 !== e.submitTime && (o.submitTime = e.submitTime.toISOString()), void 0 !== e.depositEndTime && (o.depositEndTime = e.depositEndTime.toISOString()), e.totalDeposit ? o.totalDeposit = e.totalDeposit.map(e => e ? u.Coin.toJSON(e) : void 0) : o.totalDeposit = [], void 0 !== e.votingStartTime && (o.votingStartTime = e.votingStartTime.toISOString()), void 0 !== e.votingEndTime && (o.votingEndTime = e.votingEndTime.toISOString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, S);
                    if (o.totalDeposit = [], void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = e.proposalId : o.proposalId = i.default.UZERO, void 0 !== e.content && null !== e.content ? o.content = a.Any.fromPartial(e.content) : o.content = void 0, void 0 !== e.status && null !== e.status ? o.status = e.status : o.status = 0, void 0 !== e.finalTallyResult && null !== e.finalTallyResult ? o.finalTallyResult = t.TallyResult.fromPartial(e.finalTallyResult) : o.finalTallyResult = void 0, void 0 !== e.submitTime && null !== e.submitTime ? o.submitTime = e.submitTime : o.submitTime = void 0, void 0 !== e.depositEndTime && null !== e.depositEndTime ? o.depositEndTime = e.depositEndTime : o.depositEndTime = void 0, void 0 !== e.totalDeposit && null !== e.totalDeposit)
                        for (const t of e.totalDeposit) o.totalDeposit.push(u.Coin.fromPartial(t));
                    return void 0 !== e.votingStartTime && null !== e.votingStartTime ? o.votingStartTime = e.votingStartTime : o.votingStartTime = void 0, void 0 !== e.votingEndTime && null !== e.votingEndTime ? o.votingEndTime = e.votingEndTime : o.votingEndTime = void 0, o
                }
            };
            const y = {
                yes: "",
                abstain: "",
                no: "",
                noWithVeto: ""
            };
            t.TallyResult = {
                encode: (e, t = s.default.Writer.create()) => ("" !== e.yes && t.uint32(10).string(e.yes), "" !== e.abstain && t.uint32(18).string(e.abstain), "" !== e.no && t.uint32(26).string(e.no), "" !== e.noWithVeto && t.uint32(34).string(e.noWithVeto), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, y);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.yes = o.string();
                                break;
                            case 2:
                                i.abstain = o.string();
                                break;
                            case 3:
                                i.no = o.string();
                                break;
                            case 4:
                                i.noWithVeto = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, y);
                    return void 0 !== e.yes && null !== e.yes ? t.yes = String(e.yes) : t.yes = "", void 0 !== e.abstain && null !== e.abstain ? t.abstain = String(e.abstain) : t.abstain = "", void 0 !== e.no && null !== e.no ? t.no = String(e.no) : t.no = "", void 0 !== e.noWithVeto && null !== e.noWithVeto ? t.noWithVeto = String(e.noWithVeto) : t.noWithVeto = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.yes && (t.yes = e.yes), void 0 !== e.abstain && (t.abstain = e.abstain), void 0 !== e.no && (t.no = e.no), void 0 !== e.noWithVeto && (t.noWithVeto = e.noWithVeto), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, y);
                    return void 0 !== e.yes && null !== e.yes ? t.yes = e.yes : t.yes = "", void 0 !== e.abstain && null !== e.abstain ? t.abstain = e.abstain : t.abstain = "", void 0 !== e.no && null !== e.no ? t.no = e.no : t.no = "", void 0 !== e.noWithVeto && null !== e.noWithVeto ? t.noWithVeto = e.noWithVeto : t.noWithVeto = "", t
                }
            };
            const h = {
                proposalId: i.default.UZERO,
                voter: "",
                option: 0
            };
            t.Vote = {
                encode(e, o = s.default.Writer.create()) {
                    e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), "" !== e.voter && o.uint32(18).string(e.voter), 0 !== e.option && o.uint32(24).int32(e.option);
                    for (const n of e.options) t.WeightedVoteOption.encode(n, o.uint32(34).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const n = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let i = void 0 === o ? n.len : n.pos + o;
                    const a = Object.assign({}, h);
                    for (a.options = []; n.pos < i;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.proposalId = n.uint64();
                                break;
                            case 2:
                                a.voter = n.string();
                                break;
                            case 3:
                                a.option = n.int32();
                                break;
                            case 4:
                                a.options.push(t.WeightedVoteOption.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const o = Object.assign({}, h);
                    if (o.options = [], void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = i.default.fromString(e.proposalId) : o.proposalId = i.default.UZERO, void 0 !== e.voter && null !== e.voter ? o.voter = String(e.voter) : o.voter = "", void 0 !== e.option && null !== e.option ? o.option = f(e.option) : o.option = 0, void 0 !== e.options && null !== e.options)
                        for (const n of e.options) o.options.push(t.WeightedVoteOption.fromJSON(n));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || i.default.UZERO).toString()), void 0 !== e.voter && (o.voter = e.voter), void 0 !== e.option && (o.option = g(e.option)), e.options ? o.options = e.options.map(e => e ? t.WeightedVoteOption.toJSON(e) : void 0) : o.options = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, h);
                    if (o.options = [], void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = e.proposalId : o.proposalId = i.default.UZERO, void 0 !== e.voter && null !== e.voter ? o.voter = e.voter : o.voter = "", void 0 !== e.option && null !== e.option ? o.option = e.option : o.option = 0, void 0 !== e.options && null !== e.options)
                        for (const n of e.options) o.options.push(t.WeightedVoteOption.fromPartial(n));
                    return o
                }
            };
            const R = {};
            t.DepositParams = {
                encode(e, t = s.default.Writer.create()) {
                    for (const o of e.minDeposit) u.Coin.encode(o, t.uint32(10).fork()).ldelim();
                    return void 0 !== e.maxDepositPeriod && r.Duration.encode(e.maxDepositPeriod, t.uint32(18).fork()).ldelim(), t
                },
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, R);
                    for (i.minDeposit = []; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.minDeposit.push(u.Coin.decode(o, o.uint32()));
                                break;
                            case 2:
                                i.maxDepositPeriod = r.Duration.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, R);
                    if (t.minDeposit = [], void 0 !== e.minDeposit && null !== e.minDeposit)
                        for (const o of e.minDeposit) t.minDeposit.push(u.Coin.fromJSON(o));
                    return void 0 !== e.maxDepositPeriod && null !== e.maxDepositPeriod ? t.maxDepositPeriod = r.Duration.fromJSON(e.maxDepositPeriod) : t.maxDepositPeriod = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.minDeposit ? t.minDeposit = e.minDeposit.map(e => e ? u.Coin.toJSON(e) : void 0) : t.minDeposit = [], void 0 !== e.maxDepositPeriod && (t.maxDepositPeriod = e.maxDepositPeriod ? r.Duration.toJSON(e.maxDepositPeriod) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, R);
                    if (t.minDeposit = [], void 0 !== e.minDeposit && null !== e.minDeposit)
                        for (const o of e.minDeposit) t.minDeposit.push(u.Coin.fromPartial(o));
                    return void 0 !== e.maxDepositPeriod && null !== e.maxDepositPeriod ? t.maxDepositPeriod = r.Duration.fromPartial(e.maxDepositPeriod) : t.maxDepositPeriod = void 0, t
                }
            };
            const T = {};
            t.VotingParams = {
                encode: (e, t = s.default.Writer.create()) => (void 0 !== e.votingPeriod && r.Duration.encode(e.votingPeriod, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, T);
                    for (; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.votingPeriod = r.Duration.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, T);
                    return void 0 !== e.votingPeriod && null !== e.votingPeriod ? t.votingPeriod = r.Duration.fromJSON(e.votingPeriod) : t.votingPeriod = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.votingPeriod && (t.votingPeriod = e.votingPeriod ? r.Duration.toJSON(e.votingPeriod) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, T);
                    return void 0 !== e.votingPeriod && null !== e.votingPeriod ? t.votingPeriod = r.Duration.fromPartial(e.votingPeriod) : t.votingPeriod = void 0, t
                }
            };
            const N = {};
            t.TallyParams = {
                encode: (e, t = s.default.Writer.create()) => (0 !== e.quorum.length && t.uint32(10).bytes(e.quorum), 0 !== e.threshold.length && t.uint32(18).bytes(e.threshold), 0 !== e.vetoThreshold.length && t.uint32(26).bytes(e.vetoThreshold), t),
                decode(e, t) {
                    const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
                    let n = void 0 === t ? o.len : o.pos + t;
                    const i = Object.assign({}, N);
                    for (i.quorum = new Uint8Array, i.threshold = new Uint8Array, i.vetoThreshold = new Uint8Array; o.pos < n;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.quorum = o.bytes();
                                break;
                            case 2:
                                i.threshold = o.bytes();
                                break;
                            case 3:
                                i.vetoThreshold = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, N);
                    return t.quorum = new Uint8Array, t.threshold = new Uint8Array, t.vetoThreshold = new Uint8Array, void 0 !== e.quorum && null !== e.quorum && (t.quorum = A(e.quorum)), void 0 !== e.threshold && null !== e.threshold && (t.threshold = A(e.threshold)), void 0 !== e.vetoThreshold && null !== e.vetoThreshold && (t.vetoThreshold = A(e.vetoThreshold)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.quorum && (t.quorum = x(void 0 !== e.quorum ? e.quorum : new Uint8Array)), void 0 !== e.threshold && (t.threshold = x(void 0 !== e.threshold ? e.threshold : new Uint8Array)), void 0 !== e.vetoThreshold && (t.vetoThreshold = x(void 0 !== e.vetoThreshold ? e.vetoThreshold : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, N);
                    return void 0 !== e.quorum && null !== e.quorum ? t.quorum = e.quorum : t.quorum = new Uint8Array, void 0 !== e.threshold && null !== e.threshold ? t.threshold = e.threshold : t.threshold = new Uint8Array, void 0 !== e.vetoThreshold && null !== e.vetoThreshold ? t.vetoThreshold = e.vetoThreshold : t.vetoThreshold = new Uint8Array, t
                }
            };
            var E = (() => {
                if (void 0 !== E) return E;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const I = E.atob || (e => E.Buffer.from(e, "base64").toString("binary"));

            function A(e) {
                const t = I(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const P = E.btoa || (e => E.Buffer.from(e, "binary").toString("base64"));

            function x(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return P(t.join(""))
            }

            function _(e) {
                var t;
                return {
                    seconds: (t = e.getTime() / 1e3, i.default.fromNumber(t)),
                    nanos: e.getTime() % 1e3 * 1e6
                }
            }

            function k(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }

            function w(e) {
                return e instanceof Date ? e : "string" == typeof e ? new Date(e) : k(d.Timestamp.fromJSON(e))
            }
            s.default.util.Long !== i.default && (s.default.util.Long = i.default, s.default.configure())
        }
    }
]);