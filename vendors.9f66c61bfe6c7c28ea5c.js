(window.webpackJsonp = window.webpackJsonp || []).push([
    [112], {
        19: function(e, t, n) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Any = t.protobufPackage = void 0;
            const i = s(n(1)),
                o = s(n(8));
            t.protobufPackage = "google.protobuf";
            const r = {
                typeUrl: ""
            };
            t.Any = {
                encode: (e, t = o.default.Writer.create()) => ("" !== e.typeUrl && t.uint32(10).string(e.typeUrl), 0 !== e.value.length && t.uint32(18).bytes(e.value), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, r);
                    for (i.value = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.typeUrl = n.string();
                                break;
                            case 2:
                                i.value = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, r);
                    return t.value = new Uint8Array, void 0 !== e.typeUrl && null !== e.typeUrl ? t.typeUrl = String(e.typeUrl) : t.typeUrl = "", void 0 !== e.value && null !== e.value && (t.value = function(e) {
                        const t = a(e),
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
                        return c(t.join(""))
                    }(void 0 !== e.value ? e.value : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.typeUrl && null !== e.typeUrl ? t.typeUrl = e.typeUrl : t.typeUrl = "", void 0 !== e.value && null !== e.value ? t.value = e.value : t.value = new Uint8Array, t
                }
            };
            var d = (() => {
                if (void 0 !== d) return d;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const a = d.atob || (e => d.Buffer.from(e, "base64").toString("binary"));
            const c = d.btoa || (e => d.Buffer.from(e, "binary").toString("base64"));
            o.default.util.Long !== i.default && (o.default.util.Long = i.default, o.default.configure())
        },
        220: function(e, t, n) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UpdateInstantiateConfigProposal = t.AccessConfigUpdate = t.UnpinCodesProposal = t.PinCodesProposal = t.ClearAdminProposal = t.UpdateAdminProposal = t.ExecuteContractProposal = t.SudoContractProposal = t.MigrateContractProposal = t.InstantiateContractProposal = t.StoreCodeProposal = t.protobufPackage = void 0;
            const i = s(n(1)),
                o = s(n(8)),
                r = n(350),
                d = n(121);
            t.protobufPackage = "cosmwasm.wasm.v1";
            const a = {
                title: "",
                description: "",
                runAs: ""
            };
            t.StoreCodeProposal = {
                encode: (e, t = o.default.Writer.create()) => ("" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), "" !== e.runAs && t.uint32(26).string(e.runAs), 0 !== e.wasmByteCode.length && t.uint32(34).bytes(e.wasmByteCode), void 0 !== e.instantiatePermission && r.AccessConfig.encode(e.instantiatePermission, t.uint32(58).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, a);
                    for (i.wasmByteCode = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = n.string();
                                break;
                            case 2:
                                i.description = n.string();
                                break;
                            case 3:
                                i.runAs = n.string();
                                break;
                            case 4:
                                i.wasmByteCode = n.bytes();
                                break;
                            case 7:
                                i.instantiatePermission = r.AccessConfig.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, a);
                    return t.wasmByteCode = new Uint8Array, void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", void 0 !== e.runAs && null !== e.runAs ? t.runAs = String(e.runAs) : t.runAs = "", void 0 !== e.wasmByteCode && null !== e.wasmByteCode && (t.wasmByteCode = I(e.wasmByteCode)), void 0 !== e.instantiatePermission && null !== e.instantiatePermission ? t.instantiatePermission = r.AccessConfig.fromJSON(e.instantiatePermission) : t.instantiatePermission = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), void 0 !== e.runAs && (t.runAs = e.runAs), void 0 !== e.wasmByteCode && (t.wasmByteCode = y(void 0 !== e.wasmByteCode ? e.wasmByteCode : new Uint8Array)), void 0 !== e.instantiatePermission && (t.instantiatePermission = e.instantiatePermission ? r.AccessConfig.toJSON(e.instantiatePermission) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, a);
                    return void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", void 0 !== e.runAs && null !== e.runAs ? t.runAs = e.runAs : t.runAs = "", void 0 !== e.wasmByteCode && null !== e.wasmByteCode ? t.wasmByteCode = e.wasmByteCode : t.wasmByteCode = new Uint8Array, void 0 !== e.instantiatePermission && null !== e.instantiatePermission ? t.instantiatePermission = r.AccessConfig.fromPartial(e.instantiatePermission) : t.instantiatePermission = void 0, t
                }
            };
            const c = {
                title: "",
                description: "",
                runAs: "",
                admin: "",
                codeId: i.default.UZERO,
                label: ""
            };
            t.InstantiateContractProposal = {
                encode(e, t = o.default.Writer.create()) {
                    "" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), "" !== e.runAs && t.uint32(26).string(e.runAs), "" !== e.admin && t.uint32(34).string(e.admin), e.codeId.isZero() || t.uint32(40).uint64(e.codeId), "" !== e.label && t.uint32(50).string(e.label), 0 !== e.msg.length && t.uint32(58).bytes(e.msg);
                    for (const n of e.funds) d.Coin.encode(n, t.uint32(66).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, c);
                    for (i.funds = [], i.msg = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = n.string();
                                break;
                            case 2:
                                i.description = n.string();
                                break;
                            case 3:
                                i.runAs = n.string();
                                break;
                            case 4:
                                i.admin = n.string();
                                break;
                            case 5:
                                i.codeId = n.uint64();
                                break;
                            case 6:
                                i.label = n.string();
                                break;
                            case 7:
                                i.msg = n.bytes();
                                break;
                            case 8:
                                i.funds.push(d.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    if (t.funds = [], t.msg = new Uint8Array, void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", void 0 !== e.runAs && null !== e.runAs ? t.runAs = String(e.runAs) : t.runAs = "", void 0 !== e.admin && null !== e.admin ? t.admin = String(e.admin) : t.admin = "", void 0 !== e.codeId && null !== e.codeId ? t.codeId = i.default.fromString(e.codeId) : t.codeId = i.default.UZERO, void 0 !== e.label && null !== e.label ? t.label = String(e.label) : t.label = "", void 0 !== e.msg && null !== e.msg && (t.msg = I(e.msg)), void 0 !== e.funds && null !== e.funds)
                        for (const n of e.funds) t.funds.push(d.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), void 0 !== e.runAs && (t.runAs = e.runAs), void 0 !== e.admin && (t.admin = e.admin), void 0 !== e.codeId && (t.codeId = (e.codeId || i.default.UZERO).toString()), void 0 !== e.label && (t.label = e.label), void 0 !== e.msg && (t.msg = y(void 0 !== e.msg ? e.msg : new Uint8Array)), e.funds ? t.funds = e.funds.map(e => e ? d.Coin.toJSON(e) : void 0) : t.funds = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    if (t.funds = [], void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", void 0 !== e.runAs && null !== e.runAs ? t.runAs = e.runAs : t.runAs = "", void 0 !== e.admin && null !== e.admin ? t.admin = e.admin : t.admin = "", void 0 !== e.codeId && null !== e.codeId ? t.codeId = e.codeId : t.codeId = i.default.UZERO, void 0 !== e.label && null !== e.label ? t.label = e.label : t.label = "", void 0 !== e.msg && null !== e.msg ? t.msg = e.msg : t.msg = new Uint8Array, void 0 !== e.funds && null !== e.funds)
                        for (const n of e.funds) t.funds.push(d.Coin.fromPartial(n));
                    return t
                }
            };
            const l = {
                title: "",
                description: "",
                contract: "",
                codeId: i.default.UZERO
            };
            t.MigrateContractProposal = {
                encode: (e, t = o.default.Writer.create()) => ("" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), "" !== e.contract && t.uint32(34).string(e.contract), e.codeId.isZero() || t.uint32(40).uint64(e.codeId), 0 !== e.msg.length && t.uint32(50).bytes(e.msg), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, l);
                    for (i.msg = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = n.string();
                                break;
                            case 2:
                                i.description = n.string();
                                break;
                            case 4:
                                i.contract = n.string();
                                break;
                            case 5:
                                i.codeId = n.uint64();
                                break;
                            case 6:
                                i.msg = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return t.msg = new Uint8Array, void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", void 0 !== e.codeId && null !== e.codeId ? t.codeId = i.default.fromString(e.codeId) : t.codeId = i.default.UZERO, void 0 !== e.msg && null !== e.msg && (t.msg = I(e.msg)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), void 0 !== e.contract && (t.contract = e.contract), void 0 !== e.codeId && (t.codeId = (e.codeId || i.default.UZERO).toString()), void 0 !== e.msg && (t.msg = y(void 0 !== e.msg ? e.msg : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", void 0 !== e.codeId && null !== e.codeId ? t.codeId = e.codeId : t.codeId = i.default.UZERO, void 0 !== e.msg && null !== e.msg ? t.msg = e.msg : t.msg = new Uint8Array, t
                }
            };
            const u = {
                title: "",
                description: "",
                contract: ""
            };
            t.SudoContractProposal = {
                encode: (e, t = o.default.Writer.create()) => ("" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), "" !== e.contract && t.uint32(26).string(e.contract), 0 !== e.msg.length && t.uint32(34).bytes(e.msg), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (i.msg = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = n.string();
                                break;
                            case 2:
                                i.description = n.string();
                                break;
                            case 3:
                                i.contract = n.string();
                                break;
                            case 4:
                                i.msg = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return t.msg = new Uint8Array, void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", void 0 !== e.msg && null !== e.msg && (t.msg = I(e.msg)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), void 0 !== e.contract && (t.contract = e.contract), void 0 !== e.msg && (t.msg = y(void 0 !== e.msg ? e.msg : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", void 0 !== e.msg && null !== e.msg ? t.msg = e.msg : t.msg = new Uint8Array, t
                }
            };
            const f = {
                title: "",
                description: "",
                runAs: "",
                contract: ""
            };
            t.ExecuteContractProposal = {
                encode(e, t = o.default.Writer.create()) {
                    "" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), "" !== e.runAs && t.uint32(26).string(e.runAs), "" !== e.contract && t.uint32(34).string(e.contract), 0 !== e.msg.length && t.uint32(42).bytes(e.msg);
                    for (const n of e.funds) d.Coin.encode(n, t.uint32(50).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, f);
                    for (i.funds = [], i.msg = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = n.string();
                                break;
                            case 2:
                                i.description = n.string();
                                break;
                            case 3:
                                i.runAs = n.string();
                                break;
                            case 4:
                                i.contract = n.string();
                                break;
                            case 5:
                                i.msg = n.bytes();
                                break;
                            case 6:
                                i.funds.push(d.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.funds = [], t.msg = new Uint8Array, void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", void 0 !== e.runAs && null !== e.runAs ? t.runAs = String(e.runAs) : t.runAs = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", void 0 !== e.msg && null !== e.msg && (t.msg = I(e.msg)), void 0 !== e.funds && null !== e.funds)
                        for (const n of e.funds) t.funds.push(d.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), void 0 !== e.runAs && (t.runAs = e.runAs), void 0 !== e.contract && (t.contract = e.contract), void 0 !== e.msg && (t.msg = y(void 0 !== e.msg ? e.msg : new Uint8Array)), e.funds ? t.funds = e.funds.map(e => e ? d.Coin.toJSON(e) : void 0) : t.funds = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    if (t.funds = [], void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", void 0 !== e.runAs && null !== e.runAs ? t.runAs = e.runAs : t.runAs = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", void 0 !== e.msg && null !== e.msg ? t.msg = e.msg : t.msg = new Uint8Array, void 0 !== e.funds && null !== e.funds)
                        for (const n of e.funds) t.funds.push(d.Coin.fromPartial(n));
                    return t
                }
            };
            const g = {
                title: "",
                description: "",
                newAdmin: "",
                contract: ""
            };
            t.UpdateAdminProposal = {
                encode: (e, t = o.default.Writer.create()) => ("" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), "" !== e.newAdmin && t.uint32(26).string(e.newAdmin), "" !== e.contract && t.uint32(34).string(e.contract), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, g);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = n.string();
                                break;
                            case 2:
                                i.description = n.string();
                                break;
                            case 3:
                                i.newAdmin = n.string();
                                break;
                            case 4:
                                i.contract = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", void 0 !== e.newAdmin && null !== e.newAdmin ? t.newAdmin = String(e.newAdmin) : t.newAdmin = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), void 0 !== e.newAdmin && (t.newAdmin = e.newAdmin), void 0 !== e.contract && (t.contract = e.contract), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", void 0 !== e.newAdmin && null !== e.newAdmin ? t.newAdmin = e.newAdmin : t.newAdmin = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", t
                }
            };
            const p = {
                title: "",
                description: "",
                contract: ""
            };
            t.ClearAdminProposal = {
                encode: (e, t = o.default.Writer.create()) => ("" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), "" !== e.contract && t.uint32(26).string(e.contract), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, p);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = n.string();
                                break;
                            case 2:
                                i.description = n.string();
                                break;
                            case 3:
                                i.contract = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, p);
                    return void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), void 0 !== e.contract && (t.contract = e.contract), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, p);
                    return void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", t
                }
            };
            const m = {
                title: "",
                description: "",
                codeIds: i.default.UZERO
            };
            t.PinCodesProposal = {
                encode(e, t = o.default.Writer.create()) {
                    "" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), t.uint32(26).fork();
                    for (const n of e.codeIds) t.uint64(n);
                    return t.ldelim(), t
                },
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, m);
                    for (i.codeIds = []; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = n.string();
                                break;
                            case 2:
                                i.description = n.string();
                                break;
                            case 3:
                                if (2 == (7 & e)) {
                                    const e = n.uint32() + n.pos;
                                    for (; n.pos < e;) i.codeIds.push(n.uint64())
                                } else i.codeIds.push(n.uint64());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    if (t.codeIds = [], void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", void 0 !== e.codeIds && null !== e.codeIds)
                        for (const n of e.codeIds) t.codeIds.push(i.default.fromString(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), e.codeIds ? t.codeIds = e.codeIds.map(e => (e || i.default.UZERO).toString()) : t.codeIds = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, m);
                    if (t.codeIds = [], void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", void 0 !== e.codeIds && null !== e.codeIds)
                        for (const n of e.codeIds) t.codeIds.push(n);
                    return t
                }
            };
            const v = {
                title: "",
                description: "",
                codeIds: i.default.UZERO
            };
            t.UnpinCodesProposal = {
                encode(e, t = o.default.Writer.create()) {
                    "" !== e.title && t.uint32(10).string(e.title), "" !== e.description && t.uint32(18).string(e.description), t.uint32(26).fork();
                    for (const n of e.codeIds) t.uint64(n);
                    return t.ldelim(), t
                },
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, v);
                    for (i.codeIds = []; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.title = n.string();
                                break;
                            case 2:
                                i.description = n.string();
                                break;
                            case 3:
                                if (2 == (7 & e)) {
                                    const e = n.uint32() + n.pos;
                                    for (; n.pos < e;) i.codeIds.push(n.uint64())
                                } else i.codeIds.push(n.uint64());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    if (t.codeIds = [], void 0 !== e.title && null !== e.title ? t.title = String(e.title) : t.title = "", void 0 !== e.description && null !== e.description ? t.description = String(e.description) : t.description = "", void 0 !== e.codeIds && null !== e.codeIds)
                        for (const n of e.codeIds) t.codeIds.push(i.default.fromString(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.title && (t.title = e.title), void 0 !== e.description && (t.description = e.description), e.codeIds ? t.codeIds = e.codeIds.map(e => (e || i.default.UZERO).toString()) : t.codeIds = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, v);
                    if (t.codeIds = [], void 0 !== e.title && null !== e.title ? t.title = e.title : t.title = "", void 0 !== e.description && null !== e.description ? t.description = e.description : t.description = "", void 0 !== e.codeIds && null !== e.codeIds)
                        for (const n of e.codeIds) t.codeIds.push(n);
                    return t
                }
            };
            const O = {
                codeId: i.default.UZERO
            };
            t.AccessConfigUpdate = {
                encode: (e, t = o.default.Writer.create()) => (e.codeId.isZero() || t.uint32(8).uint64(e.codeId), void 0 !== e.instantiatePermission && r.AccessConfig.encode(e.instantiatePermission, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, O);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.codeId = n.uint64();
                                break;
                            case 2:
                                i.instantiatePermission = r.AccessConfig.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, O);
                    return void 0 !== e.codeId && null !== e.codeId ? t.codeId = i.default.fromString(e.codeId) : t.codeId = i.default.UZERO, void 0 !== e.instantiatePermission && null !== e.instantiatePermission ? t.instantiatePermission = r.AccessConfig.fromJSON(e.instantiatePermission) : t.instantiatePermission = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.codeId && (t.codeId = (e.codeId || i.default.UZERO).toString()), void 0 !== e.instantiatePermission && (t.instantiatePermission = e.instantiatePermission ? r.AccessConfig.toJSON(e.instantiatePermission) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, O);
                    return void 0 !== e.codeId && null !== e.codeId ? t.codeId = e.codeId : t.codeId = i.default.UZERO, void 0 !== e.instantiatePermission && null !== e.instantiatePermission ? t.instantiatePermission = r.AccessConfig.fromPartial(e.instantiatePermission) : t.instantiatePermission = void 0, t
                }
            };
            const b = {
                title: "",
                description: ""
            };
            t.UpdateInstantiateConfigProposal = {
                encode(e, n = o.default.Writer.create()) {
                    "" !== e.title && n.uint32(10).string(e.title), "" !== e.description && n.uint32(18).string(e.description);
                    for (const s of e.accessConfigUpdates) t.AccessConfigUpdate.encode(s, n.uint32(26).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const s = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let i = void 0 === n ? s.len : s.pos + n;
                    const r = Object.assign({}, b);
                    for (r.accessConfigUpdates = []; s.pos < i;) {
                        const e = s.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.title = s.string();
                                break;
                            case 2:
                                r.description = s.string();
                                break;
                            case 3:
                                r.accessConfigUpdates.push(t.AccessConfigUpdate.decode(s, s.uint32()));
                                break;
                            default:
                                s.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, b);
                    if (n.accessConfigUpdates = [], void 0 !== e.title && null !== e.title ? n.title = String(e.title) : n.title = "", void 0 !== e.description && null !== e.description ? n.description = String(e.description) : n.description = "", void 0 !== e.accessConfigUpdates && null !== e.accessConfigUpdates)
                        for (const s of e.accessConfigUpdates) n.accessConfigUpdates.push(t.AccessConfigUpdate.fromJSON(s));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.title && (n.title = e.title), void 0 !== e.description && (n.description = e.description), e.accessConfigUpdates ? n.accessConfigUpdates = e.accessConfigUpdates.map(e => e ? t.AccessConfigUpdate.toJSON(e) : void 0) : n.accessConfigUpdates = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, b);
                    if (n.accessConfigUpdates = [], void 0 !== e.title && null !== e.title ? n.title = e.title : n.title = "", void 0 !== e.description && null !== e.description ? n.description = e.description : n.description = "", void 0 !== e.accessConfigUpdates && null !== e.accessConfigUpdates)
                        for (const s of e.accessConfigUpdates) n.accessConfigUpdates.push(t.AccessConfigUpdate.fromPartial(s));
                    return n
                }
            };
            var C = (() => {
                if (void 0 !== C) return C;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const A = C.atob || (e => C.Buffer.from(e, "base64").toString("binary"));

            function I(e) {
                const t = A(e),
                    n = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                return n
            }
            const S = C.btoa || (e => C.Buffer.from(e, "binary").toString("base64"));

            function y(e) {
                const t = [];
                for (const n of e) t.push(String.fromCharCode(n));
                return S(t.join(""))
            }
            o.default.util.Long !== i.default && (o.default.util.Long = i.default, o.default.configure())
        },
        268: function(e, t, n) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Timestamp = t.protobufPackage = void 0;
            const i = s(n(1)),
                o = s(n(8));
            t.protobufPackage = "google.protobuf";
            const r = {
                seconds: i.default.ZERO,
                nanos: 0
            };
            t.Timestamp = {
                encode: (e, t = o.default.Writer.create()) => (e.seconds.isZero() || t.uint32(8).int64(e.seconds), 0 !== e.nanos && t.uint32(16).int32(e.nanos), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, r);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.seconds = n.int64();
                                break;
                            case 2:
                                i.nanos = n.int32();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.seconds && null !== e.seconds ? t.seconds = i.default.fromString(e.seconds) : t.seconds = i.default.ZERO, void 0 !== e.nanos && null !== e.nanos ? t.nanos = Number(e.nanos) : t.nanos = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.seconds && (t.seconds = (e.seconds || i.default.ZERO).toString()), void 0 !== e.nanos && (t.nanos = e.nanos), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.seconds && null !== e.seconds ? t.seconds = e.seconds : t.seconds = i.default.ZERO, void 0 !== e.nanos && null !== e.nanos ? t.nanos = e.nanos : t.nanos = 0, t
                }
            }, o.default.util.Long !== i.default && (o.default.util.Long = i.default, o.default.configure())
        },
        350: function(e, t, n) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Model = t.AbsoluteTxPosition = t.ContractCodeHistoryEntry = t.ContractInfo = t.CodeInfo = t.Params = t.AccessConfig = t.AccessTypeParam = t.contractCodeHistoryOperationTypeToJSON = t.contractCodeHistoryOperationTypeFromJSON = t.ContractCodeHistoryOperationType = t.accessTypeToJSON = t.accessTypeFromJSON = t.AccessType = t.protobufPackage = void 0;
            const i = s(n(1)),
                o = s(n(8)),
                r = n(19);
            var d, a;

            function c(e) {
                switch (e) {
                    case 0:
                    case "ACCESS_TYPE_UNSPECIFIED":
                        return d.ACCESS_TYPE_UNSPECIFIED;
                    case 1:
                    case "ACCESS_TYPE_NOBODY":
                        return d.ACCESS_TYPE_NOBODY;
                    case 2:
                    case "ACCESS_TYPE_ONLY_ADDRESS":
                        return d.ACCESS_TYPE_ONLY_ADDRESS;
                    case 3:
                    case "ACCESS_TYPE_EVERYBODY":
                        return d.ACCESS_TYPE_EVERYBODY;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return d.UNRECOGNIZED
                }
            }

            function l(e) {
                switch (e) {
                    case d.ACCESS_TYPE_UNSPECIFIED:
                        return "ACCESS_TYPE_UNSPECIFIED";
                    case d.ACCESS_TYPE_NOBODY:
                        return "ACCESS_TYPE_NOBODY";
                    case d.ACCESS_TYPE_ONLY_ADDRESS:
                        return "ACCESS_TYPE_ONLY_ADDRESS";
                    case d.ACCESS_TYPE_EVERYBODY:
                        return "ACCESS_TYPE_EVERYBODY";
                    default:
                        return "UNKNOWN"
                }
            }

            function u(e) {
                switch (e) {
                    case 0:
                    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
                        return a.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
                    case 1:
                    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
                        return a.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
                    case 2:
                    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
                        return a.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
                    case 3:
                    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
                        return a.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return a.UNRECOGNIZED
                }
            }

            function f(e) {
                switch (e) {
                    case a.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
                        return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
                    case a.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
                        return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
                    case a.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
                        return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
                    case a.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
                        return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "cosmwasm.wasm.v1",
                function(e) {
                    e[e.ACCESS_TYPE_UNSPECIFIED = 0] = "ACCESS_TYPE_UNSPECIFIED", e[e.ACCESS_TYPE_NOBODY = 1] = "ACCESS_TYPE_NOBODY", e[e.ACCESS_TYPE_ONLY_ADDRESS = 2] = "ACCESS_TYPE_ONLY_ADDRESS", e[e.ACCESS_TYPE_EVERYBODY = 3] = "ACCESS_TYPE_EVERYBODY", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(d = t.AccessType || (t.AccessType = {})), t.accessTypeFromJSON = c, t.accessTypeToJSON = l,
                function(e) {
                    e[e.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED", e[e.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT", e[e.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE", e[e.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(a = t.ContractCodeHistoryOperationType || (t.ContractCodeHistoryOperationType = {})), t.contractCodeHistoryOperationTypeFromJSON = u, t.contractCodeHistoryOperationTypeToJSON = f;
            const g = {
                value: 0
            };
            t.AccessTypeParam = {
                encode: (e, t = o.default.Writer.create()) => (0 !== e.value && t.uint32(8).int32(e.value), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, g);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.value = n.int32();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.value && null !== e.value ? t.value = c(e.value) : t.value = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.value && (t.value = l(e.value)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.value && null !== e.value ? t.value = e.value : t.value = 0, t
                }
            };
            const p = {
                permission: 0,
                address: ""
            };
            t.AccessConfig = {
                encode: (e, t = o.default.Writer.create()) => (0 !== e.permission && t.uint32(8).int32(e.permission), "" !== e.address && t.uint32(18).string(e.address), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, p);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.permission = n.int32();
                                break;
                            case 2:
                                i.address = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, p);
                    return void 0 !== e.permission && null !== e.permission ? t.permission = c(e.permission) : t.permission = 0, void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.permission && (t.permission = l(e.permission)), void 0 !== e.address && (t.address = e.address), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, p);
                    return void 0 !== e.permission && null !== e.permission ? t.permission = e.permission : t.permission = 0, void 0 !== e.address && null !== e.address ? t.address = e.address : t.address = "", t
                }
            };
            const m = {
                instantiateDefaultPermission: 0
            };
            t.Params = {
                encode: (e, n = o.default.Writer.create()) => (void 0 !== e.codeUploadAccess && t.AccessConfig.encode(e.codeUploadAccess, n.uint32(10).fork()).ldelim(), 0 !== e.instantiateDefaultPermission && n.uint32(16).int32(e.instantiateDefaultPermission), n),
                decode(e, n) {
                    const s = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let i = void 0 === n ? s.len : s.pos + n;
                    const r = Object.assign({}, m);
                    for (; s.pos < i;) {
                        const e = s.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.codeUploadAccess = t.AccessConfig.decode(s, s.uint32());
                                break;
                            case 2:
                                r.instantiateDefaultPermission = s.int32();
                                break;
                            default:
                                s.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, m);
                    return void 0 !== e.codeUploadAccess && null !== e.codeUploadAccess ? n.codeUploadAccess = t.AccessConfig.fromJSON(e.codeUploadAccess) : n.codeUploadAccess = void 0, void 0 !== e.instantiateDefaultPermission && null !== e.instantiateDefaultPermission ? n.instantiateDefaultPermission = c(e.instantiateDefaultPermission) : n.instantiateDefaultPermission = 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.codeUploadAccess && (n.codeUploadAccess = e.codeUploadAccess ? t.AccessConfig.toJSON(e.codeUploadAccess) : void 0), void 0 !== e.instantiateDefaultPermission && (n.instantiateDefaultPermission = l(e.instantiateDefaultPermission)), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, m);
                    return void 0 !== e.codeUploadAccess && null !== e.codeUploadAccess ? n.codeUploadAccess = t.AccessConfig.fromPartial(e.codeUploadAccess) : n.codeUploadAccess = void 0, void 0 !== e.instantiateDefaultPermission && null !== e.instantiateDefaultPermission ? n.instantiateDefaultPermission = e.instantiateDefaultPermission : n.instantiateDefaultPermission = 0, n
                }
            };
            const v = {
                creator: ""
            };
            t.CodeInfo = {
                encode: (e, n = o.default.Writer.create()) => (0 !== e.codeHash.length && n.uint32(10).bytes(e.codeHash), "" !== e.creator && n.uint32(18).string(e.creator), void 0 !== e.instantiateConfig && t.AccessConfig.encode(e.instantiateConfig, n.uint32(42).fork()).ldelim(), n),
                decode(e, n) {
                    const s = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let i = void 0 === n ? s.len : s.pos + n;
                    const r = Object.assign({}, v);
                    for (r.codeHash = new Uint8Array; s.pos < i;) {
                        const e = s.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.codeHash = s.bytes();
                                break;
                            case 2:
                                r.creator = s.string();
                                break;
                            case 5:
                                r.instantiateConfig = t.AccessConfig.decode(s, s.uint32());
                                break;
                            default:
                                s.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, v);
                    return n.codeHash = new Uint8Array, void 0 !== e.codeHash && null !== e.codeHash && (n.codeHash = y(e.codeHash)), void 0 !== e.creator && null !== e.creator ? n.creator = String(e.creator) : n.creator = "", void 0 !== e.instantiateConfig && null !== e.instantiateConfig ? n.instantiateConfig = t.AccessConfig.fromJSON(e.instantiateConfig) : n.instantiateConfig = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.codeHash && (n.codeHash = E(void 0 !== e.codeHash ? e.codeHash : new Uint8Array)), void 0 !== e.creator && (n.creator = e.creator), void 0 !== e.instantiateConfig && (n.instantiateConfig = e.instantiateConfig ? t.AccessConfig.toJSON(e.instantiateConfig) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, v);
                    return void 0 !== e.codeHash && null !== e.codeHash ? n.codeHash = e.codeHash : n.codeHash = new Uint8Array, void 0 !== e.creator && null !== e.creator ? n.creator = e.creator : n.creator = "", void 0 !== e.instantiateConfig && null !== e.instantiateConfig ? n.instantiateConfig = t.AccessConfig.fromPartial(e.instantiateConfig) : n.instantiateConfig = void 0, n
                }
            };
            const O = {
                codeId: i.default.UZERO,
                creator: "",
                admin: "",
                label: "",
                ibcPortId: ""
            };
            t.ContractInfo = {
                encode: (e, n = o.default.Writer.create()) => (e.codeId.isZero() || n.uint32(8).uint64(e.codeId), "" !== e.creator && n.uint32(18).string(e.creator), "" !== e.admin && n.uint32(26).string(e.admin), "" !== e.label && n.uint32(34).string(e.label), void 0 !== e.created && t.AbsoluteTxPosition.encode(e.created, n.uint32(42).fork()).ldelim(), "" !== e.ibcPortId && n.uint32(50).string(e.ibcPortId), void 0 !== e.extension && r.Any.encode(e.extension, n.uint32(58).fork()).ldelim(), n),
                decode(e, n) {
                    const s = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let i = void 0 === n ? s.len : s.pos + n;
                    const d = Object.assign({}, O);
                    for (; s.pos < i;) {
                        const e = s.uint32();
                        switch (e >>> 3) {
                            case 1:
                                d.codeId = s.uint64();
                                break;
                            case 2:
                                d.creator = s.string();
                                break;
                            case 3:
                                d.admin = s.string();
                                break;
                            case 4:
                                d.label = s.string();
                                break;
                            case 5:
                                d.created = t.AbsoluteTxPosition.decode(s, s.uint32());
                                break;
                            case 6:
                                d.ibcPortId = s.string();
                                break;
                            case 7:
                                d.extension = r.Any.decode(s, s.uint32());
                                break;
                            default:
                                s.skipType(7 & e)
                        }
                    }
                    return d
                },
                fromJSON(e) {
                    const n = Object.assign({}, O);
                    return void 0 !== e.codeId && null !== e.codeId ? n.codeId = i.default.fromString(e.codeId) : n.codeId = i.default.UZERO, void 0 !== e.creator && null !== e.creator ? n.creator = String(e.creator) : n.creator = "", void 0 !== e.admin && null !== e.admin ? n.admin = String(e.admin) : n.admin = "", void 0 !== e.label && null !== e.label ? n.label = String(e.label) : n.label = "", void 0 !== e.created && null !== e.created ? n.created = t.AbsoluteTxPosition.fromJSON(e.created) : n.created = void 0, void 0 !== e.ibcPortId && null !== e.ibcPortId ? n.ibcPortId = String(e.ibcPortId) : n.ibcPortId = "", void 0 !== e.extension && null !== e.extension ? n.extension = r.Any.fromJSON(e.extension) : n.extension = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.codeId && (n.codeId = (e.codeId || i.default.UZERO).toString()), void 0 !== e.creator && (n.creator = e.creator), void 0 !== e.admin && (n.admin = e.admin), void 0 !== e.label && (n.label = e.label), void 0 !== e.created && (n.created = e.created ? t.AbsoluteTxPosition.toJSON(e.created) : void 0), void 0 !== e.ibcPortId && (n.ibcPortId = e.ibcPortId), void 0 !== e.extension && (n.extension = e.extension ? r.Any.toJSON(e.extension) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, O);
                    return void 0 !== e.codeId && null !== e.codeId ? n.codeId = e.codeId : n.codeId = i.default.UZERO, void 0 !== e.creator && null !== e.creator ? n.creator = e.creator : n.creator = "", void 0 !== e.admin && null !== e.admin ? n.admin = e.admin : n.admin = "", void 0 !== e.label && null !== e.label ? n.label = e.label : n.label = "", void 0 !== e.created && null !== e.created ? n.created = t.AbsoluteTxPosition.fromPartial(e.created) : n.created = void 0, void 0 !== e.ibcPortId && null !== e.ibcPortId ? n.ibcPortId = e.ibcPortId : n.ibcPortId = "", void 0 !== e.extension && null !== e.extension ? n.extension = r.Any.fromPartial(e.extension) : n.extension = void 0, n
                }
            };
            const b = {
                operation: 0,
                codeId: i.default.UZERO
            };
            t.ContractCodeHistoryEntry = {
                encode: (e, n = o.default.Writer.create()) => (0 !== e.operation && n.uint32(8).int32(e.operation), e.codeId.isZero() || n.uint32(16).uint64(e.codeId), void 0 !== e.updated && t.AbsoluteTxPosition.encode(e.updated, n.uint32(26).fork()).ldelim(), 0 !== e.msg.length && n.uint32(34).bytes(e.msg), n),
                decode(e, n) {
                    const s = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let i = void 0 === n ? s.len : s.pos + n;
                    const r = Object.assign({}, b);
                    for (r.msg = new Uint8Array; s.pos < i;) {
                        const e = s.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.operation = s.int32();
                                break;
                            case 2:
                                r.codeId = s.uint64();
                                break;
                            case 3:
                                r.updated = t.AbsoluteTxPosition.decode(s, s.uint32());
                                break;
                            case 4:
                                r.msg = s.bytes();
                                break;
                            default:
                                s.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const n = Object.assign({}, b);
                    return n.msg = new Uint8Array, void 0 !== e.operation && null !== e.operation ? n.operation = u(e.operation) : n.operation = 0, void 0 !== e.codeId && null !== e.codeId ? n.codeId = i.default.fromString(e.codeId) : n.codeId = i.default.UZERO, void 0 !== e.updated && null !== e.updated ? n.updated = t.AbsoluteTxPosition.fromJSON(e.updated) : n.updated = void 0, void 0 !== e.msg && null !== e.msg && (n.msg = y(e.msg)), n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.operation && (n.operation = f(e.operation)), void 0 !== e.codeId && (n.codeId = (e.codeId || i.default.UZERO).toString()), void 0 !== e.updated && (n.updated = e.updated ? t.AbsoluteTxPosition.toJSON(e.updated) : void 0), void 0 !== e.msg && (n.msg = E(void 0 !== e.msg ? e.msg : new Uint8Array)), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, b);
                    return void 0 !== e.operation && null !== e.operation ? n.operation = e.operation : n.operation = 0, void 0 !== e.codeId && null !== e.codeId ? n.codeId = e.codeId : n.codeId = i.default.UZERO, void 0 !== e.updated && null !== e.updated ? n.updated = t.AbsoluteTxPosition.fromPartial(e.updated) : n.updated = void 0, void 0 !== e.msg && null !== e.msg ? n.msg = e.msg : n.msg = new Uint8Array, n
                }
            };
            const C = {
                blockHeight: i.default.UZERO,
                txIndex: i.default.UZERO
            };
            t.AbsoluteTxPosition = {
                encode: (e, t = o.default.Writer.create()) => (e.blockHeight.isZero() || t.uint32(8).uint64(e.blockHeight), e.txIndex.isZero() || t.uint32(16).uint64(e.txIndex), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, C);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.blockHeight = n.uint64();
                                break;
                            case 2:
                                i.txIndex = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, C);
                    return void 0 !== e.blockHeight && null !== e.blockHeight ? t.blockHeight = i.default.fromString(e.blockHeight) : t.blockHeight = i.default.UZERO, void 0 !== e.txIndex && null !== e.txIndex ? t.txIndex = i.default.fromString(e.txIndex) : t.txIndex = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.blockHeight && (t.blockHeight = (e.blockHeight || i.default.UZERO).toString()), void 0 !== e.txIndex && (t.txIndex = (e.txIndex || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, C);
                    return void 0 !== e.blockHeight && null !== e.blockHeight ? t.blockHeight = e.blockHeight : t.blockHeight = i.default.UZERO, void 0 !== e.txIndex && null !== e.txIndex ? t.txIndex = e.txIndex : t.txIndex = i.default.UZERO, t
                }
            };
            const A = {};
            t.Model = {
                encode: (e, t = o.default.Writer.create()) => (0 !== e.key.length && t.uint32(10).bytes(e.key), 0 !== e.value.length && t.uint32(18).bytes(e.value), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, A);
                    for (i.key = new Uint8Array, i.value = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.key = n.bytes();
                                break;
                            case 2:
                                i.value = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, A);
                    return t.key = new Uint8Array, t.value = new Uint8Array, void 0 !== e.key && null !== e.key && (t.key = y(e.key)), void 0 !== e.value && null !== e.value && (t.value = y(e.value)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.key && (t.key = E(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.value && (t.value = E(void 0 !== e.value ? e.value : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, A);
                    return void 0 !== e.key && null !== e.key ? t.key = e.key : t.key = new Uint8Array, void 0 !== e.value && null !== e.value ? t.value = e.value : t.value = new Uint8Array, t
                }
            };
            var I = (() => {
                if (void 0 !== I) return I;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const S = I.atob || (e => I.Buffer.from(e, "base64").toString("binary"));

            function y(e) {
                const t = S(e),
                    n = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                return n
            }
            const P = I.btoa || (e => I.Buffer.from(e, "binary").toString("base64"));

            function E(e) {
                const t = [];
                for (const n of e) t.push(String.fromCharCode(n));
                return P(t.join(""))
            }
            o.default.util.Long !== i.default && (o.default.util.Long = i.default, o.default.configure())
        },
        418: function(e, t, n) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GrpcWebImpl = t.MsgClearAdminDesc = t.MsgUpdateAdminDesc = t.MsgMigrateContractDesc = t.MsgExecuteContractDesc = t.MsgInstantiateContractDesc = t.MsgStoreCodeDesc = t.MsgDesc = t.MsgClientImpl = t.MsgClearAdminResponse = t.MsgClearAdmin = t.MsgUpdateAdminResponse = t.MsgUpdateAdmin = t.MsgMigrateContractResponse = t.MsgMigrateContract = t.MsgExecuteContractResponse = t.MsgExecuteContract = t.MsgInstantiateContractResponse = t.MsgInstantiateContract = t.MsgStoreCodeResponse = t.MsgStoreCode = t.protobufPackage = void 0;
            const i = s(n(1)),
                o = n(156),
                r = s(n(8)),
                d = n(350),
                a = n(157),
                c = n(121);
            t.protobufPackage = "cosmwasm.wasm.v1";
            const l = {
                sender: ""
            };
            t.MsgStoreCode = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.sender && t.uint32(10).string(e.sender), 0 !== e.wasmByteCode.length && t.uint32(18).bytes(e.wasmByteCode), void 0 !== e.instantiatePermission && d.AccessConfig.encode(e.instantiatePermission, t.uint32(42).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, l);
                    for (i.wasmByteCode = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.sender = n.string();
                                break;
                            case 2:
                                i.wasmByteCode = n.bytes();
                                break;
                            case 5:
                                i.instantiatePermission = d.AccessConfig.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return t.wasmByteCode = new Uint8Array, void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.wasmByteCode && null !== e.wasmByteCode && (t.wasmByteCode = P(e.wasmByteCode)), void 0 !== e.instantiatePermission && null !== e.instantiatePermission ? t.instantiatePermission = d.AccessConfig.fromJSON(e.instantiatePermission) : t.instantiatePermission = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.wasmByteCode && (t.wasmByteCode = w(void 0 !== e.wasmByteCode ? e.wasmByteCode : new Uint8Array)), void 0 !== e.instantiatePermission && (t.instantiatePermission = e.instantiatePermission ? d.AccessConfig.toJSON(e.instantiatePermission) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.wasmByteCode && null !== e.wasmByteCode ? t.wasmByteCode = e.wasmByteCode : t.wasmByteCode = new Uint8Array, void 0 !== e.instantiatePermission && null !== e.instantiatePermission ? t.instantiatePermission = d.AccessConfig.fromPartial(e.instantiatePermission) : t.instantiatePermission = void 0, t
                }
            };
            const u = {
                codeId: i.default.UZERO
            };
            t.MsgStoreCodeResponse = {
                encode: (e, t = r.default.Writer.create()) => (e.codeId.isZero() || t.uint32(8).uint64(e.codeId), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.codeId = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.codeId && null !== e.codeId ? t.codeId = i.default.fromString(e.codeId) : t.codeId = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.codeId && (t.codeId = (e.codeId || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.codeId && null !== e.codeId ? t.codeId = e.codeId : t.codeId = i.default.UZERO, t
                }
            };
            const f = {
                sender: "",
                admin: "",
                codeId: i.default.UZERO,
                label: ""
            };
            t.MsgInstantiateContract = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.sender && t.uint32(10).string(e.sender), "" !== e.admin && t.uint32(18).string(e.admin), e.codeId.isZero() || t.uint32(24).uint64(e.codeId), "" !== e.label && t.uint32(34).string(e.label), 0 !== e.msg.length && t.uint32(42).bytes(e.msg);
                    for (const n of e.funds) c.Coin.encode(n, t.uint32(50).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, f);
                    for (i.funds = [], i.msg = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.sender = n.string();
                                break;
                            case 2:
                                i.admin = n.string();
                                break;
                            case 3:
                                i.codeId = n.uint64();
                                break;
                            case 4:
                                i.label = n.string();
                                break;
                            case 5:
                                i.msg = n.bytes();
                                break;
                            case 6:
                                i.funds.push(c.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.funds = [], t.msg = new Uint8Array, void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.admin && null !== e.admin ? t.admin = String(e.admin) : t.admin = "", void 0 !== e.codeId && null !== e.codeId ? t.codeId = i.default.fromString(e.codeId) : t.codeId = i.default.UZERO, void 0 !== e.label && null !== e.label ? t.label = String(e.label) : t.label = "", void 0 !== e.msg && null !== e.msg && (t.msg = P(e.msg)), void 0 !== e.funds && null !== e.funds)
                        for (const n of e.funds) t.funds.push(c.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.admin && (t.admin = e.admin), void 0 !== e.codeId && (t.codeId = (e.codeId || i.default.UZERO).toString()), void 0 !== e.label && (t.label = e.label), void 0 !== e.msg && (t.msg = w(void 0 !== e.msg ? e.msg : new Uint8Array)), e.funds ? t.funds = e.funds.map(e => e ? c.Coin.toJSON(e) : void 0) : t.funds = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    if (t.funds = [], void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.admin && null !== e.admin ? t.admin = e.admin : t.admin = "", void 0 !== e.codeId && null !== e.codeId ? t.codeId = e.codeId : t.codeId = i.default.UZERO, void 0 !== e.label && null !== e.label ? t.label = e.label : t.label = "", void 0 !== e.msg && null !== e.msg ? t.msg = e.msg : t.msg = new Uint8Array, void 0 !== e.funds && null !== e.funds)
                        for (const n of e.funds) t.funds.push(c.Coin.fromPartial(n));
                    return t
                }
            };
            const g = {
                address: ""
            };
            t.MsgInstantiateContractResponse = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.address && t.uint32(10).string(e.address), 0 !== e.data.length && t.uint32(18).bytes(e.data), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, g);
                    for (i.data = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.address = n.string();
                                break;
                            case 2:
                                i.data = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return t.data = new Uint8Array, void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", void 0 !== e.data && null !== e.data && (t.data = P(e.data)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = e.address), void 0 !== e.data && (t.data = w(void 0 !== e.data ? e.data : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, g);
                    return void 0 !== e.address && null !== e.address ? t.address = e.address : t.address = "", void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, t
                }
            };
            const p = {
                sender: "",
                contract: ""
            };
            t.MsgExecuteContract = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.sender && t.uint32(10).string(e.sender), "" !== e.contract && t.uint32(18).string(e.contract), 0 !== e.msg.length && t.uint32(26).bytes(e.msg);
                    for (const n of e.funds) c.Coin.encode(n, t.uint32(42).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, p);
                    for (i.funds = [], i.msg = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.sender = n.string();
                                break;
                            case 2:
                                i.contract = n.string();
                                break;
                            case 3:
                                i.msg = n.bytes();
                                break;
                            case 5:
                                i.funds.push(c.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, p);
                    if (t.funds = [], t.msg = new Uint8Array, void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", void 0 !== e.msg && null !== e.msg && (t.msg = P(e.msg)), void 0 !== e.funds && null !== e.funds)
                        for (const n of e.funds) t.funds.push(c.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.contract && (t.contract = e.contract), void 0 !== e.msg && (t.msg = w(void 0 !== e.msg ? e.msg : new Uint8Array)), e.funds ? t.funds = e.funds.map(e => e ? c.Coin.toJSON(e) : void 0) : t.funds = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, p);
                    if (t.funds = [], void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", void 0 !== e.msg && null !== e.msg ? t.msg = e.msg : t.msg = new Uint8Array, void 0 !== e.funds && null !== e.funds)
                        for (const n of e.funds) t.funds.push(c.Coin.fromPartial(n));
                    return t
                }
            };
            const m = {};
            t.MsgExecuteContractResponse = {
                encode: (e, t = r.default.Writer.create()) => (0 !== e.data.length && t.uint32(10).bytes(e.data), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, m);
                    for (i.data = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.data = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    return t.data = new Uint8Array, void 0 !== e.data && null !== e.data && (t.data = P(e.data)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.data && (t.data = w(void 0 !== e.data ? e.data : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, m);
                    return void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, t
                }
            };
            const v = {
                sender: "",
                contract: "",
                codeId: i.default.UZERO
            };
            t.MsgMigrateContract = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.sender && t.uint32(10).string(e.sender), "" !== e.contract && t.uint32(18).string(e.contract), e.codeId.isZero() || t.uint32(24).uint64(e.codeId), 0 !== e.msg.length && t.uint32(34).bytes(e.msg), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, v);
                    for (i.msg = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.sender = n.string();
                                break;
                            case 2:
                                i.contract = n.string();
                                break;
                            case 3:
                                i.codeId = n.uint64();
                                break;
                            case 4:
                                i.msg = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    return t.msg = new Uint8Array, void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", void 0 !== e.codeId && null !== e.codeId ? t.codeId = i.default.fromString(e.codeId) : t.codeId = i.default.UZERO, void 0 !== e.msg && null !== e.msg && (t.msg = P(e.msg)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.contract && (t.contract = e.contract), void 0 !== e.codeId && (t.codeId = (e.codeId || i.default.UZERO).toString()), void 0 !== e.msg && (t.msg = w(void 0 !== e.msg ? e.msg : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, v);
                    return void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", void 0 !== e.codeId && null !== e.codeId ? t.codeId = e.codeId : t.codeId = i.default.UZERO, void 0 !== e.msg && null !== e.msg ? t.msg = e.msg : t.msg = new Uint8Array, t
                }
            };
            const O = {};
            t.MsgMigrateContractResponse = {
                encode: (e, t = r.default.Writer.create()) => (0 !== e.data.length && t.uint32(10).bytes(e.data), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, O);
                    for (i.data = new Uint8Array; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.data = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, O);
                    return t.data = new Uint8Array, void 0 !== e.data && null !== e.data && (t.data = P(e.data)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.data && (t.data = w(void 0 !== e.data ? e.data : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, O);
                    return void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, t
                }
            };
            const b = {
                sender: "",
                newAdmin: "",
                contract: ""
            };
            t.MsgUpdateAdmin = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.sender && t.uint32(10).string(e.sender), "" !== e.newAdmin && t.uint32(18).string(e.newAdmin), "" !== e.contract && t.uint32(26).string(e.contract), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, b);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.sender = n.string();
                                break;
                            case 2:
                                i.newAdmin = n.string();
                                break;
                            case 3:
                                i.contract = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.newAdmin && null !== e.newAdmin ? t.newAdmin = String(e.newAdmin) : t.newAdmin = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.newAdmin && (t.newAdmin = e.newAdmin), void 0 !== e.contract && (t.contract = e.contract), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.newAdmin && null !== e.newAdmin ? t.newAdmin = e.newAdmin : t.newAdmin = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", t
                }
            };
            const C = {};
            t.MsgUpdateAdminResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, C);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, C),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, C)
            };
            const A = {
                sender: "",
                contract: ""
            };
            t.MsgClearAdmin = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.sender && t.uint32(10).string(e.sender), "" !== e.contract && t.uint32(26).string(e.contract), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, A);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.sender = n.string();
                                break;
                            case 3:
                                i.contract = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, A);
                    return void 0 !== e.sender && null !== e.sender ? t.sender = String(e.sender) : t.sender = "", void 0 !== e.contract && null !== e.contract ? t.contract = String(e.contract) : t.contract = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.sender && (t.sender = e.sender), void 0 !== e.contract && (t.contract = e.contract), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, A);
                    return void 0 !== e.sender && null !== e.sender ? t.sender = e.sender : t.sender = "", void 0 !== e.contract && null !== e.contract ? t.contract = e.contract : t.contract = "", t
                }
            };
            const I = {};
            t.MsgClearAdminResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, I);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, I),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, I)
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.StoreCode = this.StoreCode.bind(this), this.InstantiateContract = this.InstantiateContract.bind(this), this.ExecuteContract = this.ExecuteContract.bind(this), this.MigrateContract = this.MigrateContract.bind(this), this.UpdateAdmin = this.UpdateAdmin.bind(this), this.ClearAdmin = this.ClearAdmin.bind(this)
                }
                StoreCode(e, n) {
                    return this.rpc.unary(t.MsgStoreCodeDesc, t.MsgStoreCode.fromPartial(e), n)
                }
                InstantiateContract(e, n) {
                    return this.rpc.unary(t.MsgInstantiateContractDesc, t.MsgInstantiateContract.fromPartial(e), n)
                }
                ExecuteContract(e, n) {
                    return this.rpc.unary(t.MsgExecuteContractDesc, t.MsgExecuteContract.fromPartial(e), n)
                }
                MigrateContract(e, n) {
                    return this.rpc.unary(t.MsgMigrateContractDesc, t.MsgMigrateContract.fromPartial(e), n)
                }
                UpdateAdmin(e, n) {
                    return this.rpc.unary(t.MsgUpdateAdminDesc, t.MsgUpdateAdmin.fromPartial(e), n)
                }
                ClearAdmin(e, n) {
                    return this.rpc.unary(t.MsgClearAdminDesc, t.MsgClearAdmin.fromPartial(e), n)
                }
            }, t.MsgDesc = {
                serviceName: "cosmwasm.wasm.v1.Msg"
            }, t.MsgStoreCodeDesc = {
                methodName: "StoreCode",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgStoreCode.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgStoreCodeResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgInstantiateContractDesc = {
                methodName: "InstantiateContract",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgInstantiateContract.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgInstantiateContractResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgExecuteContractDesc = {
                methodName: "ExecuteContract",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgExecuteContract.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgExecuteContractResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgMigrateContractDesc = {
                methodName: "MigrateContract",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgMigrateContract.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgMigrateContractResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgUpdateAdminDesc = {
                methodName: "UpdateAdmin",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgUpdateAdmin.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgUpdateAdminResponse.decode(e)), {
                        toObject() {
                            return this
                        }
                    })
                }
            }, t.MsgClearAdminDesc = {
                methodName: "ClearAdmin",
                service: t.MsgDesc,
                requestStream: !1,
                responseStream: !1,
                requestType: {
                    serializeBinary() {
                        return t.MsgClearAdmin.encode(this).finish()
                    }
                },
                responseType: {
                    deserializeBinary: e => Object.assign(Object.assign({}, t.MsgClearAdminResponse.decode(e)), {
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
                    var s;
                    const i = Object.assign(Object.assign({}, t), e.requestType),
                        r = n && this.options.metadata ? new a.BrowserHeaders(Object.assign(Object.assign({}, null === (s = this.options) || void 0 === s ? void 0 : s.metadata.headersMap), null == n ? void 0 : n.headersMap)) : n || this.options.metadata;
                    return new Promise((t, n) => {
                        o.grpc.unary(e, {
                            request: i,
                            host: this.host,
                            metadata: r,
                            transport: this.options.transport,
                            debug: this.options.debug,
                            onEnd: function(e) {
                                if (e.status === o.grpc.Code.OK) t(e.message);
                                else {
                                    const t = new Error(e.statusMessage);
                                    t.code = e.status, t.metadata = e.trailers, n(t)
                                }
                            }
                        })
                    })
                }
            };
            var S = (() => {
                if (void 0 !== S) return S;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const y = S.atob || (e => S.Buffer.from(e, "base64").toString("binary"));

            function P(e) {
                const t = y(e),
                    n = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                return n
            }
            const E = S.btoa || (e => S.Buffer.from(e, "binary").toString("base64"));

            function w(e) {
                const t = [];
                for (const n of e) t.push(String.fromCharCode(n));
                return E(t.join(""))
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        511: function(e, t, n) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Duration = t.protobufPackage = void 0;
            const i = s(n(1)),
                o = s(n(8));
            t.protobufPackage = "google.protobuf";
            const r = {
                seconds: i.default.ZERO,
                nanos: 0
            };
            t.Duration = {
                encode: (e, t = o.default.Writer.create()) => (e.seconds.isZero() || t.uint32(8).int64(e.seconds), 0 !== e.nanos && t.uint32(16).int32(e.nanos), t),
                decode(e, t) {
                    const n = e instanceof o.default.Reader ? e : new o.default.Reader(e);
                    let s = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, r);
                    for (; n.pos < s;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.seconds = n.int64();
                                break;
                            case 2:
                                i.nanos = n.int32();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.seconds && null !== e.seconds ? t.seconds = i.default.fromString(e.seconds) : t.seconds = i.default.ZERO, void 0 !== e.nanos && null !== e.nanos ? t.nanos = Number(e.nanos) : t.nanos = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.seconds && (t.seconds = (e.seconds || i.default.ZERO).toString()), void 0 !== e.nanos && (t.nanos = e.nanos), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, r);
                    return void 0 !== e.seconds && null !== e.seconds ? t.seconds = e.seconds : t.seconds = i.default.ZERO, void 0 !== e.nanos && null !== e.nanos ? t.nanos = e.nanos : t.nanos = 0, t
                }
            }, o.default.util.Long !== i.default && (o.default.util.Long = i.default, o.default.configure())
        }
    }
]);