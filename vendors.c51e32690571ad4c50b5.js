(window.webpackJsonp = window.webpackJsonp || []).push([
    [32], {
        1094: function(e, t, o) {
            "use strict";
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProofOps = t.ProofOp = t.DominoOp = t.ValueOp = t.Proof = t.protobufPackage = void 0;
            const r = a(o(1)),
                i = a(o(8));
            t.protobufPackage = "tendermint.crypto";
            const n = {
                total: r.default.ZERO,
                index: r.default.ZERO
            };
            t.Proof = {
                encode(e, t = i.default.Writer.create()) {
                    e.total.isZero() || t.uint32(8).int64(e.total), e.index.isZero() || t.uint32(16).int64(e.index), 0 !== e.leafHash.length && t.uint32(26).bytes(e.leafHash);
                    for (const o of e.aunts) t.uint32(34).bytes(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, n);
                    for (r.aunts = [], r.leafHash = new Uint8Array; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.total = o.int64();
                                break;
                            case 2:
                                r.index = o.int64();
                                break;
                            case 3:
                                r.leafHash = o.bytes();
                                break;
                            case 4:
                                r.aunts.push(o.bytes());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, n);
                    if (t.aunts = [], t.leafHash = new Uint8Array, void 0 !== e.total && null !== e.total ? t.total = r.default.fromString(e.total) : t.total = r.default.ZERO, void 0 !== e.index && null !== e.index ? t.index = r.default.fromString(e.index) : t.index = r.default.ZERO, void 0 !== e.leafHash && null !== e.leafHash && (t.leafHash = p(e.leafHash)), void 0 !== e.aunts && null !== e.aunts)
                        for (const o of e.aunts) t.aunts.push(p(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.total && (t.total = (e.total || r.default.ZERO).toString()), void 0 !== e.index && (t.index = (e.index || r.default.ZERO).toString()), void 0 !== e.leafHash && (t.leafHash = m(void 0 !== e.leafHash ? e.leafHash : new Uint8Array)), e.aunts ? t.aunts = e.aunts.map(e => m(void 0 !== e ? e : new Uint8Array)) : t.aunts = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, n);
                    if (t.aunts = [], void 0 !== e.total && null !== e.total ? t.total = e.total : t.total = r.default.ZERO, void 0 !== e.index && null !== e.index ? t.index = e.index : t.index = r.default.ZERO, void 0 !== e.leafHash && null !== e.leafHash ? t.leafHash = e.leafHash : t.leafHash = new Uint8Array, void 0 !== e.aunts && null !== e.aunts)
                        for (const o of e.aunts) t.aunts.push(o);
                    return t
                }
            };
            const s = {};
            t.ValueOp = {
                encode: (e, o = i.default.Writer.create()) => (0 !== e.key.length && o.uint32(10).bytes(e.key), void 0 !== e.proof && t.Proof.encode(e.proof, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, s);
                    for (n.key = new Uint8Array; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.key = a.bytes();
                                break;
                            case 2:
                                n.proof = t.Proof.decode(a, a.uint32());
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, s);
                    return o.key = new Uint8Array, void 0 !== e.key && null !== e.key && (o.key = p(e.key)), void 0 !== e.proof && null !== e.proof ? o.proof = t.Proof.fromJSON(e.proof) : o.proof = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.key && (o.key = m(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.proof && (o.proof = e.proof ? t.Proof.toJSON(e.proof) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, s);
                    return void 0 !== e.key && null !== e.key ? o.key = e.key : o.key = new Uint8Array, void 0 !== e.proof && null !== e.proof ? o.proof = t.Proof.fromPartial(e.proof) : o.proof = void 0, o
                }
            };
            const d = {
                key: "",
                input: "",
                output: ""
            };
            t.DominoOp = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.key && t.uint32(10).string(e.key), "" !== e.input && t.uint32(18).string(e.input), "" !== e.output && t.uint32(26).string(e.output), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, d);
                    for (; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.key = o.string();
                                break;
                            case 2:
                                r.input = o.string();
                                break;
                            case 3:
                                r.output = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.key && null !== e.key ? t.key = String(e.key) : t.key = "", void 0 !== e.input && null !== e.input ? t.input = String(e.input) : t.input = "", void 0 !== e.output && null !== e.output ? t.output = String(e.output) : t.output = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.key && (t.key = e.key), void 0 !== e.input && (t.input = e.input), void 0 !== e.output && (t.output = e.output), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.key && null !== e.key ? t.key = e.key : t.key = "", void 0 !== e.input && null !== e.input ? t.input = e.input : t.input = "", void 0 !== e.output && null !== e.output ? t.output = e.output : t.output = "", t
                }
            };
            const l = {
                type: ""
            };
            t.ProofOp = {
                encode: (e, t = i.default.Writer.create()) => ("" !== e.type && t.uint32(10).string(e.type), 0 !== e.key.length && t.uint32(18).bytes(e.key), 0 !== e.data.length && t.uint32(26).bytes(e.data), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, l);
                    for (r.key = new Uint8Array, r.data = new Uint8Array; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.type = o.string();
                                break;
                            case 2:
                                r.key = o.bytes();
                                break;
                            case 3:
                                r.data = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return t.key = new Uint8Array, t.data = new Uint8Array, void 0 !== e.type && null !== e.type ? t.type = String(e.type) : t.type = "", void 0 !== e.key && null !== e.key && (t.key = p(e.key)), void 0 !== e.data && null !== e.data && (t.data = p(e.data)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.type && (t.type = e.type), void 0 !== e.key && (t.key = m(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.data && (t.data = m(void 0 !== e.data ? e.data : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.type && null !== e.type ? t.type = e.type : t.type = "", void 0 !== e.key && null !== e.key ? t.key = e.key : t.key = new Uint8Array, void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, t
                }
            };
            const u = {};
            t.ProofOps = {
                encode(e, o = i.default.Writer.create()) {
                    for (const a of e.ops) t.ProofOp.encode(a, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, u);
                    for (n.ops = []; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.ops.push(t.ProofOp.decode(a, a.uint32()));
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, u);
                    if (o.ops = [], void 0 !== e.ops && null !== e.ops)
                        for (const a of e.ops) o.ops.push(t.ProofOp.fromJSON(a));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.ops ? o.ops = e.ops.map(e => e ? t.ProofOp.toJSON(e) : void 0) : o.ops = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, u);
                    if (o.ops = [], void 0 !== e.ops && null !== e.ops)
                        for (const a of e.ops) o.ops.push(t.ProofOp.fromPartial(a));
                    return o
                }
            };
            var c = (() => {
                if (void 0 !== c) return c;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const f = c.atob || (e => c.Buffer.from(e, "base64").toString("binary"));

            function p(e) {
                const t = f(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const v = c.btoa || (e => c.Buffer.from(e, "binary").toString("base64"));

            function m(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return v(t.join(""))
            }
            i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        1095: function(e, t, o) {
            "use strict";
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Consensus = t.App = t.protobufPackage = void 0;
            const r = a(o(1)),
                i = a(o(8));
            t.protobufPackage = "tendermint.version";
            const n = {
                protocol: r.default.UZERO,
                software: ""
            };
            t.App = {
                encode: (e, t = i.default.Writer.create()) => (e.protocol.isZero() || t.uint32(8).uint64(e.protocol), "" !== e.software && t.uint32(18).string(e.software), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, n);
                    for (; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.protocol = o.uint64();
                                break;
                            case 2:
                                r.software = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, n);
                    return void 0 !== e.protocol && null !== e.protocol ? t.protocol = r.default.fromString(e.protocol) : t.protocol = r.default.UZERO, void 0 !== e.software && null !== e.software ? t.software = String(e.software) : t.software = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.protocol && (t.protocol = (e.protocol || r.default.UZERO).toString()), void 0 !== e.software && (t.software = e.software), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, n);
                    return void 0 !== e.protocol && null !== e.protocol ? t.protocol = e.protocol : t.protocol = r.default.UZERO, void 0 !== e.software && null !== e.software ? t.software = e.software : t.software = "", t
                }
            };
            const s = {
                block: r.default.UZERO,
                app: r.default.UZERO
            };
            t.Consensus = {
                encode: (e, t = i.default.Writer.create()) => (e.block.isZero() || t.uint32(8).uint64(e.block), e.app.isZero() || t.uint32(16).uint64(e.app), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, s);
                    for (; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.block = o.uint64();
                                break;
                            case 2:
                                r.app = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, s);
                    return void 0 !== e.block && null !== e.block ? t.block = r.default.fromString(e.block) : t.block = r.default.UZERO, void 0 !== e.app && null !== e.app ? t.app = r.default.fromString(e.app) : t.app = r.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.block && (t.block = (e.block || r.default.UZERO).toString()), void 0 !== e.app && (t.app = (e.app || r.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, s);
                    return void 0 !== e.block && null !== e.block ? t.block = e.block : t.block = r.default.UZERO, void 0 !== e.app && null !== e.app ? t.app = e.app : t.app = r.default.UZERO, t
                }
            }, i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        1096: function(e, t, o) {
            "use strict";
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SimpleValidator = t.Validator = t.ValidatorSet = t.protobufPackage = void 0;
            const r = a(o(1)),
                i = a(o(8)),
                n = o(1097);
            t.protobufPackage = "tendermint.types";
            const s = {
                totalVotingPower: r.default.ZERO
            };
            t.ValidatorSet = {
                encode(e, o = i.default.Writer.create()) {
                    for (const a of e.validators) t.Validator.encode(a, o.uint32(10).fork()).ldelim();
                    return void 0 !== e.proposer && t.Validator.encode(e.proposer, o.uint32(18).fork()).ldelim(), e.totalVotingPower.isZero() || o.uint32(24).int64(e.totalVotingPower), o
                },
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, s);
                    for (n.validators = []; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.validators.push(t.Validator.decode(a, a.uint32()));
                                break;
                            case 2:
                                n.proposer = t.Validator.decode(a, a.uint32());
                                break;
                            case 3:
                                n.totalVotingPower = a.int64();
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, s);
                    if (o.validators = [], void 0 !== e.validators && null !== e.validators)
                        for (const a of e.validators) o.validators.push(t.Validator.fromJSON(a));
                    return void 0 !== e.proposer && null !== e.proposer ? o.proposer = t.Validator.fromJSON(e.proposer) : o.proposer = void 0, void 0 !== e.totalVotingPower && null !== e.totalVotingPower ? o.totalVotingPower = r.default.fromString(e.totalVotingPower) : o.totalVotingPower = r.default.ZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return e.validators ? o.validators = e.validators.map(e => e ? t.Validator.toJSON(e) : void 0) : o.validators = [], void 0 !== e.proposer && (o.proposer = e.proposer ? t.Validator.toJSON(e.proposer) : void 0), void 0 !== e.totalVotingPower && (o.totalVotingPower = (e.totalVotingPower || r.default.ZERO).toString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, s);
                    if (o.validators = [], void 0 !== e.validators && null !== e.validators)
                        for (const a of e.validators) o.validators.push(t.Validator.fromPartial(a));
                    return void 0 !== e.proposer && null !== e.proposer ? o.proposer = t.Validator.fromPartial(e.proposer) : o.proposer = void 0, void 0 !== e.totalVotingPower && null !== e.totalVotingPower ? o.totalVotingPower = e.totalVotingPower : o.totalVotingPower = r.default.ZERO, o
                }
            };
            const d = {
                votingPower: r.default.ZERO,
                proposerPriority: r.default.ZERO
            };
            t.Validator = {
                encode: (e, t = i.default.Writer.create()) => (0 !== e.address.length && t.uint32(10).bytes(e.address), void 0 !== e.pubKey && n.PublicKey.encode(e.pubKey, t.uint32(18).fork()).ldelim(), e.votingPower.isZero() || t.uint32(24).int64(e.votingPower), e.proposerPriority.isZero() || t.uint32(32).int64(e.proposerPriority), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, d);
                    for (r.address = new Uint8Array; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.address = o.bytes();
                                break;
                            case 2:
                                r.pubKey = n.PublicKey.decode(o, o.uint32());
                                break;
                            case 3:
                                r.votingPower = o.int64();
                                break;
                            case 4:
                                r.proposerPriority = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return t.address = new Uint8Array, void 0 !== e.address && null !== e.address && (t.address = function(e) {
                        const t = c(e),
                            o = new Uint8Array(t.length);
                        for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                        return o
                    }(e.address)), void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = n.PublicKey.fromJSON(e.pubKey) : t.pubKey = void 0, void 0 !== e.votingPower && null !== e.votingPower ? t.votingPower = r.default.fromString(e.votingPower) : t.votingPower = r.default.ZERO, void 0 !== e.proposerPriority && null !== e.proposerPriority ? t.proposerPriority = r.default.fromString(e.proposerPriority) : t.proposerPriority = r.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = function(e) {
                        const t = [];
                        for (const o of e) t.push(String.fromCharCode(o));
                        return f(t.join(""))
                    }(void 0 !== e.address ? e.address : new Uint8Array)), void 0 !== e.pubKey && (t.pubKey = e.pubKey ? n.PublicKey.toJSON(e.pubKey) : void 0), void 0 !== e.votingPower && (t.votingPower = (e.votingPower || r.default.ZERO).toString()), void 0 !== e.proposerPriority && (t.proposerPriority = (e.proposerPriority || r.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.address && null !== e.address ? t.address = e.address : t.address = new Uint8Array, void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = n.PublicKey.fromPartial(e.pubKey) : t.pubKey = void 0, void 0 !== e.votingPower && null !== e.votingPower ? t.votingPower = e.votingPower : t.votingPower = r.default.ZERO, void 0 !== e.proposerPriority && null !== e.proposerPriority ? t.proposerPriority = e.proposerPriority : t.proposerPriority = r.default.ZERO, t
                }
            };
            const l = {
                votingPower: r.default.ZERO
            };
            t.SimpleValidator = {
                encode: (e, t = i.default.Writer.create()) => (void 0 !== e.pubKey && n.PublicKey.encode(e.pubKey, t.uint32(10).fork()).ldelim(), e.votingPower.isZero() || t.uint32(16).int64(e.votingPower), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, l);
                    for (; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.pubKey = n.PublicKey.decode(o, o.uint32());
                                break;
                            case 2:
                                r.votingPower = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = n.PublicKey.fromJSON(e.pubKey) : t.pubKey = void 0, void 0 !== e.votingPower && null !== e.votingPower ? t.votingPower = r.default.fromString(e.votingPower) : t.votingPower = r.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.pubKey && (t.pubKey = e.pubKey ? n.PublicKey.toJSON(e.pubKey) : void 0), void 0 !== e.votingPower && (t.votingPower = (e.votingPower || r.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = n.PublicKey.fromPartial(e.pubKey) : t.pubKey = void 0, void 0 !== e.votingPower && null !== e.votingPower ? t.votingPower = e.votingPower : t.votingPower = r.default.ZERO, t
                }
            };
            var u = (() => {
                if (void 0 !== u) return u;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const c = u.atob || (e => u.Buffer.from(e, "base64").toString("binary"));
            const f = u.btoa || (e => u.Buffer.from(e, "binary").toString("base64"));
            i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        1097: function(e, t, o) {
            "use strict";
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PublicKey = t.protobufPackage = void 0;
            const r = a(o(1)),
                i = a(o(8));
            t.protobufPackage = "tendermint.crypto";
            const n = {};
            t.PublicKey = {
                encode: (e, t = i.default.Writer.create()) => (void 0 !== e.ed25519 && t.uint32(10).bytes(e.ed25519), void 0 !== e.secp256k1 && t.uint32(18).bytes(e.secp256k1), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, n);
                    for (; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.ed25519 = o.bytes();
                                break;
                            case 2:
                                r.secp256k1 = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, n);
                    return void 0 !== e.ed25519 && null !== e.ed25519 && (t.ed25519 = l(e.ed25519)), void 0 !== e.secp256k1 && null !== e.secp256k1 && (t.secp256k1 = l(e.secp256k1)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.ed25519 && (t.ed25519 = void 0 !== e.ed25519 ? c(e.ed25519) : void 0), void 0 !== e.secp256k1 && (t.secp256k1 = void 0 !== e.secp256k1 ? c(e.secp256k1) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, n);
                    return void 0 !== e.ed25519 && null !== e.ed25519 ? t.ed25519 = e.ed25519 : t.ed25519 = void 0, void 0 !== e.secp256k1 && null !== e.secp256k1 ? t.secp256k1 = e.secp256k1 : t.secp256k1 = void 0, t
                }
            };
            var s = (() => {
                if (void 0 !== s) return s;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const d = s.atob || (e => s.Buffer.from(e, "base64").toString("binary"));

            function l(e) {
                const t = d(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const u = s.btoa || (e => s.Buffer.from(e, "binary").toString("base64"));

            function c(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return u(t.join(""))
            }
            i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        3834: function(e, t, o) {
            "use strict";
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HashedParams = t.VersionParams = t.ValidatorParams = t.EvidenceParams = t.BlockParams = t.ConsensusParams = t.protobufPackage = void 0;
            const r = a(o(1)),
                i = a(o(8)),
                n = o(511);
            t.protobufPackage = "tendermint.types";
            const s = {};
            t.ConsensusParams = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.block && t.BlockParams.encode(e.block, o.uint32(10).fork()).ldelim(), void 0 !== e.evidence && t.EvidenceParams.encode(e.evidence, o.uint32(18).fork()).ldelim(), void 0 !== e.validator && t.ValidatorParams.encode(e.validator, o.uint32(26).fork()).ldelim(), void 0 !== e.version && t.VersionParams.encode(e.version, o.uint32(34).fork()).ldelim(), o),
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, s);
                    for (; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.block = t.BlockParams.decode(a, a.uint32());
                                break;
                            case 2:
                                n.evidence = t.EvidenceParams.decode(a, a.uint32());
                                break;
                            case 3:
                                n.validator = t.ValidatorParams.decode(a, a.uint32());
                                break;
                            case 4:
                                n.version = t.VersionParams.decode(a, a.uint32());
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, s);
                    return void 0 !== e.block && null !== e.block ? o.block = t.BlockParams.fromJSON(e.block) : o.block = void 0, void 0 !== e.evidence && null !== e.evidence ? o.evidence = t.EvidenceParams.fromJSON(e.evidence) : o.evidence = void 0, void 0 !== e.validator && null !== e.validator ? o.validator = t.ValidatorParams.fromJSON(e.validator) : o.validator = void 0, void 0 !== e.version && null !== e.version ? o.version = t.VersionParams.fromJSON(e.version) : o.version = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.block && (o.block = e.block ? t.BlockParams.toJSON(e.block) : void 0), void 0 !== e.evidence && (o.evidence = e.evidence ? t.EvidenceParams.toJSON(e.evidence) : void 0), void 0 !== e.validator && (o.validator = e.validator ? t.ValidatorParams.toJSON(e.validator) : void 0), void 0 !== e.version && (o.version = e.version ? t.VersionParams.toJSON(e.version) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, s);
                    return void 0 !== e.block && null !== e.block ? o.block = t.BlockParams.fromPartial(e.block) : o.block = void 0, void 0 !== e.evidence && null !== e.evidence ? o.evidence = t.EvidenceParams.fromPartial(e.evidence) : o.evidence = void 0, void 0 !== e.validator && null !== e.validator ? o.validator = t.ValidatorParams.fromPartial(e.validator) : o.validator = void 0, void 0 !== e.version && null !== e.version ? o.version = t.VersionParams.fromPartial(e.version) : o.version = void 0, o
                }
            };
            const d = {
                maxBytes: r.default.ZERO,
                maxGas: r.default.ZERO,
                timeIotaMs: r.default.ZERO
            };
            t.BlockParams = {
                encode: (e, t = i.default.Writer.create()) => (e.maxBytes.isZero() || t.uint32(8).int64(e.maxBytes), e.maxGas.isZero() || t.uint32(16).int64(e.maxGas), e.timeIotaMs.isZero() || t.uint32(24).int64(e.timeIotaMs), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, d);
                    for (; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.maxBytes = o.int64();
                                break;
                            case 2:
                                r.maxGas = o.int64();
                                break;
                            case 3:
                                r.timeIotaMs = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.maxBytes && null !== e.maxBytes ? t.maxBytes = r.default.fromString(e.maxBytes) : t.maxBytes = r.default.ZERO, void 0 !== e.maxGas && null !== e.maxGas ? t.maxGas = r.default.fromString(e.maxGas) : t.maxGas = r.default.ZERO, void 0 !== e.timeIotaMs && null !== e.timeIotaMs ? t.timeIotaMs = r.default.fromString(e.timeIotaMs) : t.timeIotaMs = r.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.maxBytes && (t.maxBytes = (e.maxBytes || r.default.ZERO).toString()), void 0 !== e.maxGas && (t.maxGas = (e.maxGas || r.default.ZERO).toString()), void 0 !== e.timeIotaMs && (t.timeIotaMs = (e.timeIotaMs || r.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.maxBytes && null !== e.maxBytes ? t.maxBytes = e.maxBytes : t.maxBytes = r.default.ZERO, void 0 !== e.maxGas && null !== e.maxGas ? t.maxGas = e.maxGas : t.maxGas = r.default.ZERO, void 0 !== e.timeIotaMs && null !== e.timeIotaMs ? t.timeIotaMs = e.timeIotaMs : t.timeIotaMs = r.default.ZERO, t
                }
            };
            const l = {
                maxAgeNumBlocks: r.default.ZERO,
                maxBytes: r.default.ZERO
            };
            t.EvidenceParams = {
                encode: (e, t = i.default.Writer.create()) => (e.maxAgeNumBlocks.isZero() || t.uint32(8).int64(e.maxAgeNumBlocks), void 0 !== e.maxAgeDuration && n.Duration.encode(e.maxAgeDuration, t.uint32(18).fork()).ldelim(), e.maxBytes.isZero() || t.uint32(24).int64(e.maxBytes), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, l);
                    for (; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.maxAgeNumBlocks = o.int64();
                                break;
                            case 2:
                                r.maxAgeDuration = n.Duration.decode(o, o.uint32());
                                break;
                            case 3:
                                r.maxBytes = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.maxAgeNumBlocks && null !== e.maxAgeNumBlocks ? t.maxAgeNumBlocks = r.default.fromString(e.maxAgeNumBlocks) : t.maxAgeNumBlocks = r.default.ZERO, void 0 !== e.maxAgeDuration && null !== e.maxAgeDuration ? t.maxAgeDuration = n.Duration.fromJSON(e.maxAgeDuration) : t.maxAgeDuration = void 0, void 0 !== e.maxBytes && null !== e.maxBytes ? t.maxBytes = r.default.fromString(e.maxBytes) : t.maxBytes = r.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.maxAgeNumBlocks && (t.maxAgeNumBlocks = (e.maxAgeNumBlocks || r.default.ZERO).toString()), void 0 !== e.maxAgeDuration && (t.maxAgeDuration = e.maxAgeDuration ? n.Duration.toJSON(e.maxAgeDuration) : void 0), void 0 !== e.maxBytes && (t.maxBytes = (e.maxBytes || r.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.maxAgeNumBlocks && null !== e.maxAgeNumBlocks ? t.maxAgeNumBlocks = e.maxAgeNumBlocks : t.maxAgeNumBlocks = r.default.ZERO, void 0 !== e.maxAgeDuration && null !== e.maxAgeDuration ? t.maxAgeDuration = n.Duration.fromPartial(e.maxAgeDuration) : t.maxAgeDuration = void 0, void 0 !== e.maxBytes && null !== e.maxBytes ? t.maxBytes = e.maxBytes : t.maxBytes = r.default.ZERO, t
                }
            };
            const u = {
                pubKeyTypes: ""
            };
            t.ValidatorParams = {
                encode(e, t = i.default.Writer.create()) {
                    for (const o of e.pubKeyTypes) t.uint32(10).string(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, u);
                    for (r.pubKeyTypes = []; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.pubKeyTypes.push(o.string());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    if (t.pubKeyTypes = [], void 0 !== e.pubKeyTypes && null !== e.pubKeyTypes)
                        for (const o of e.pubKeyTypes) t.pubKeyTypes.push(String(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.pubKeyTypes ? t.pubKeyTypes = e.pubKeyTypes.map(e => e) : t.pubKeyTypes = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    if (t.pubKeyTypes = [], void 0 !== e.pubKeyTypes && null !== e.pubKeyTypes)
                        for (const o of e.pubKeyTypes) t.pubKeyTypes.push(o);
                    return t
                }
            };
            const c = {
                appVersion: r.default.UZERO
            };
            t.VersionParams = {
                encode: (e, t = i.default.Writer.create()) => (e.appVersion.isZero() || t.uint32(8).uint64(e.appVersion), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, c);
                    for (; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.appVersion = o.uint64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.appVersion && null !== e.appVersion ? t.appVersion = r.default.fromString(e.appVersion) : t.appVersion = r.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.appVersion && (t.appVersion = (e.appVersion || r.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.appVersion && null !== e.appVersion ? t.appVersion = e.appVersion : t.appVersion = r.default.UZERO, t
                }
            };
            const f = {
                blockMaxBytes: r.default.ZERO,
                blockMaxGas: r.default.ZERO
            };
            t.HashedParams = {
                encode: (e, t = i.default.Writer.create()) => (e.blockMaxBytes.isZero() || t.uint32(8).int64(e.blockMaxBytes), e.blockMaxGas.isZero() || t.uint32(16).int64(e.blockMaxGas), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, f);
                    for (; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.blockMaxBytes = o.int64();
                                break;
                            case 2:
                                r.blockMaxGas = o.int64();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.blockMaxBytes && null !== e.blockMaxBytes ? t.blockMaxBytes = r.default.fromString(e.blockMaxBytes) : t.blockMaxBytes = r.default.ZERO, void 0 !== e.blockMaxGas && null !== e.blockMaxGas ? t.blockMaxGas = r.default.fromString(e.blockMaxGas) : t.blockMaxGas = r.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.blockMaxBytes && (t.blockMaxBytes = (e.blockMaxBytes || r.default.ZERO).toString()), void 0 !== e.blockMaxGas && (t.blockMaxGas = (e.blockMaxGas || r.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    return void 0 !== e.blockMaxBytes && null !== e.blockMaxBytes ? t.blockMaxBytes = e.blockMaxBytes : t.blockMaxBytes = r.default.ZERO, void 0 !== e.blockMaxGas && null !== e.blockMaxGas ? t.blockMaxGas = e.blockMaxGas : t.blockMaxGas = r.default.ZERO, t
                }
            }, i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        637: function(e, t, o) {
            "use strict";
            var a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TxProof = t.BlockMeta = t.LightBlock = t.SignedHeader = t.Proposal = t.CommitSig = t.Commit = t.Vote = t.Data = t.Header = t.BlockID = t.Part = t.PartSetHeader = t.signedMsgTypeToJSON = t.signedMsgTypeFromJSON = t.SignedMsgType = t.blockIDFlagToJSON = t.blockIDFlagFromJSON = t.BlockIDFlag = t.protobufPackage = void 0;
            const r = a(o(1)),
                i = a(o(8)),
                n = o(1094),
                s = o(1095),
                d = o(1096),
                l = o(268);
            var u, c;

            function f(e) {
                switch (e) {
                    case 0:
                    case "BLOCK_ID_FLAG_UNKNOWN":
                        return u.BLOCK_ID_FLAG_UNKNOWN;
                    case 1:
                    case "BLOCK_ID_FLAG_ABSENT":
                        return u.BLOCK_ID_FLAG_ABSENT;
                    case 2:
                    case "BLOCK_ID_FLAG_COMMIT":
                        return u.BLOCK_ID_FLAG_COMMIT;
                    case 3:
                    case "BLOCK_ID_FLAG_NIL":
                        return u.BLOCK_ID_FLAG_NIL;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return u.UNRECOGNIZED
                }
            }

            function p(e) {
                switch (e) {
                    case u.BLOCK_ID_FLAG_UNKNOWN:
                        return "BLOCK_ID_FLAG_UNKNOWN";
                    case u.BLOCK_ID_FLAG_ABSENT:
                        return "BLOCK_ID_FLAG_ABSENT";
                    case u.BLOCK_ID_FLAG_COMMIT:
                        return "BLOCK_ID_FLAG_COMMIT";
                    case u.BLOCK_ID_FLAG_NIL:
                        return "BLOCK_ID_FLAG_NIL";
                    default:
                        return "UNKNOWN"
                }
            }

            function v(e) {
                switch (e) {
                    case 0:
                    case "SIGNED_MSG_TYPE_UNKNOWN":
                        return c.SIGNED_MSG_TYPE_UNKNOWN;
                    case 1:
                    case "SIGNED_MSG_TYPE_PREVOTE":
                        return c.SIGNED_MSG_TYPE_PREVOTE;
                    case 2:
                    case "SIGNED_MSG_TYPE_PRECOMMIT":
                        return c.SIGNED_MSG_TYPE_PRECOMMIT;
                    case 32:
                    case "SIGNED_MSG_TYPE_PROPOSAL":
                        return c.SIGNED_MSG_TYPE_PROPOSAL;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return c.UNRECOGNIZED
                }
            }

            function m(e) {
                switch (e) {
                    case c.SIGNED_MSG_TYPE_UNKNOWN:
                        return "SIGNED_MSG_TYPE_UNKNOWN";
                    case c.SIGNED_MSG_TYPE_PREVOTE:
                        return "SIGNED_MSG_TYPE_PREVOTE";
                    case c.SIGNED_MSG_TYPE_PRECOMMIT:
                        return "SIGNED_MSG_TYPE_PRECOMMIT";
                    case c.SIGNED_MSG_TYPE_PROPOSAL:
                        return "SIGNED_MSG_TYPE_PROPOSAL";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "tendermint.types",
                function(e) {
                    e[e.BLOCK_ID_FLAG_UNKNOWN = 0] = "BLOCK_ID_FLAG_UNKNOWN", e[e.BLOCK_ID_FLAG_ABSENT = 1] = "BLOCK_ID_FLAG_ABSENT", e[e.BLOCK_ID_FLAG_COMMIT = 2] = "BLOCK_ID_FLAG_COMMIT", e[e.BLOCK_ID_FLAG_NIL = 3] = "BLOCK_ID_FLAG_NIL", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(u = t.BlockIDFlag || (t.BlockIDFlag = {})), t.blockIDFlagFromJSON = f, t.blockIDFlagToJSON = p,
                function(e) {
                    e[e.SIGNED_MSG_TYPE_UNKNOWN = 0] = "SIGNED_MSG_TYPE_UNKNOWN", e[e.SIGNED_MSG_TYPE_PREVOTE = 1] = "SIGNED_MSG_TYPE_PREVOTE", e[e.SIGNED_MSG_TYPE_PRECOMMIT = 2] = "SIGNED_MSG_TYPE_PRECOMMIT", e[e.SIGNED_MSG_TYPE_PROPOSAL = 32] = "SIGNED_MSG_TYPE_PROPOSAL", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(c = t.SignedMsgType || (t.SignedMsgType = {})), t.signedMsgTypeFromJSON = v, t.signedMsgTypeToJSON = m;
            const b = {
                total: 0
            };
            t.PartSetHeader = {
                encode: (e, t = i.default.Writer.create()) => (0 !== e.total && t.uint32(8).uint32(e.total), 0 !== e.hash.length && t.uint32(18).bytes(e.hash), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, b);
                    for (r.hash = new Uint8Array; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.total = o.uint32();
                                break;
                            case 2:
                                r.hash = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    return t.hash = new Uint8Array, void 0 !== e.total && null !== e.total ? t.total = Number(e.total) : t.total = 0, void 0 !== e.hash && null !== e.hash && (t.hash = E(e.hash)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.total && (t.total = e.total), void 0 !== e.hash && (t.hash = B(void 0 !== e.hash ? e.hash : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.total && null !== e.total ? t.total = e.total : t.total = 0, void 0 !== e.hash && null !== e.hash ? t.hash = e.hash : t.hash = new Uint8Array, t
                }
            };
            const h = {
                index: 0
            };
            t.Part = {
                encode: (e, t = i.default.Writer.create()) => (0 !== e.index && t.uint32(8).uint32(e.index), 0 !== e.bytes.length && t.uint32(18).bytes(e.bytes), void 0 !== e.proof && n.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, h);
                    for (r.bytes = new Uint8Array; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.index = o.uint32();
                                break;
                            case 2:
                                r.bytes = o.bytes();
                                break;
                            case 3:
                                r.proof = n.Proof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    return t.bytes = new Uint8Array, void 0 !== e.index && null !== e.index ? t.index = Number(e.index) : t.index = 0, void 0 !== e.bytes && null !== e.bytes && (t.bytes = E(e.bytes)), void 0 !== e.proof && null !== e.proof ? t.proof = n.Proof.fromJSON(e.proof) : t.proof = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.index && (t.index = e.index), void 0 !== e.bytes && (t.bytes = B(void 0 !== e.bytes ? e.bytes : new Uint8Array)), void 0 !== e.proof && (t.proof = e.proof ? n.Proof.toJSON(e.proof) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.index && null !== e.index ? t.index = e.index : t.index = 0, void 0 !== e.bytes && null !== e.bytes ? t.bytes = e.bytes : t.bytes = new Uint8Array, void 0 !== e.proof && null !== e.proof ? t.proof = n.Proof.fromPartial(e.proof) : t.proof = void 0, t
                }
            };
            const g = {};
            t.BlockID = {
                encode: (e, o = i.default.Writer.create()) => (0 !== e.hash.length && o.uint32(10).bytes(e.hash), void 0 !== e.partSetHeader && t.PartSetHeader.encode(e.partSetHeader, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, g);
                    for (n.hash = new Uint8Array; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.hash = a.bytes();
                                break;
                            case 2:
                                n.partSetHeader = t.PartSetHeader.decode(a, a.uint32());
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, g);
                    return o.hash = new Uint8Array, void 0 !== e.hash && null !== e.hash && (o.hash = E(e.hash)), void 0 !== e.partSetHeader && null !== e.partSetHeader ? o.partSetHeader = t.PartSetHeader.fromJSON(e.partSetHeader) : o.partSetHeader = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.hash && (o.hash = B(void 0 !== e.hash ? e.hash : new Uint8Array)), void 0 !== e.partSetHeader && (o.partSetHeader = e.partSetHeader ? t.PartSetHeader.toJSON(e.partSetHeader) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, g);
                    return void 0 !== e.hash && null !== e.hash ? o.hash = e.hash : o.hash = new Uint8Array, void 0 !== e.partSetHeader && null !== e.partSetHeader ? o.partSetHeader = t.PartSetHeader.fromPartial(e.partSetHeader) : o.partSetHeader = void 0, o
                }
            };
            const y = {
                chainId: "",
                height: r.default.ZERO
            };
            t.Header = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.version && s.Consensus.encode(e.version, o.uint32(10).fork()).ldelim(), "" !== e.chainId && o.uint32(18).string(e.chainId), e.height.isZero() || o.uint32(24).int64(e.height), void 0 !== e.time && l.Timestamp.encode(U(e.time), o.uint32(34).fork()).ldelim(), void 0 !== e.lastBlockId && t.BlockID.encode(e.lastBlockId, o.uint32(42).fork()).ldelim(), 0 !== e.lastCommitHash.length && o.uint32(50).bytes(e.lastCommitHash), 0 !== e.dataHash.length && o.uint32(58).bytes(e.dataHash), 0 !== e.validatorsHash.length && o.uint32(66).bytes(e.validatorsHash), 0 !== e.nextValidatorsHash.length && o.uint32(74).bytes(e.nextValidatorsHash), 0 !== e.consensusHash.length && o.uint32(82).bytes(e.consensusHash), 0 !== e.appHash.length && o.uint32(90).bytes(e.appHash), 0 !== e.lastResultsHash.length && o.uint32(98).bytes(e.lastResultsHash), 0 !== e.evidenceHash.length && o.uint32(106).bytes(e.evidenceHash), 0 !== e.proposerAddress.length && o.uint32(114).bytes(e.proposerAddress), o),
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, y);
                    for (n.lastCommitHash = new Uint8Array, n.dataHash = new Uint8Array, n.validatorsHash = new Uint8Array, n.nextValidatorsHash = new Uint8Array, n.consensusHash = new Uint8Array, n.appHash = new Uint8Array, n.lastResultsHash = new Uint8Array, n.evidenceHash = new Uint8Array, n.proposerAddress = new Uint8Array; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.version = s.Consensus.decode(a, a.uint32());
                                break;
                            case 2:
                                n.chainId = a.string();
                                break;
                            case 3:
                                n.height = a.int64();
                                break;
                            case 4:
                                n.time = T(l.Timestamp.decode(a, a.uint32()));
                                break;
                            case 5:
                                n.lastBlockId = t.BlockID.decode(a, a.uint32());
                                break;
                            case 6:
                                n.lastCommitHash = a.bytes();
                                break;
                            case 7:
                                n.dataHash = a.bytes();
                                break;
                            case 8:
                                n.validatorsHash = a.bytes();
                                break;
                            case 9:
                                n.nextValidatorsHash = a.bytes();
                                break;
                            case 10:
                                n.consensusHash = a.bytes();
                                break;
                            case 11:
                                n.appHash = a.bytes();
                                break;
                            case 12:
                                n.lastResultsHash = a.bytes();
                                break;
                            case 13:
                                n.evidenceHash = a.bytes();
                                break;
                            case 14:
                                n.proposerAddress = a.bytes();
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, y);
                    return o.lastCommitHash = new Uint8Array, o.dataHash = new Uint8Array, o.validatorsHash = new Uint8Array, o.nextValidatorsHash = new Uint8Array, o.consensusHash = new Uint8Array, o.appHash = new Uint8Array, o.lastResultsHash = new Uint8Array, o.evidenceHash = new Uint8Array, o.proposerAddress = new Uint8Array, void 0 !== e.version && null !== e.version ? o.version = s.Consensus.fromJSON(e.version) : o.version = void 0, void 0 !== e.chainId && null !== e.chainId ? o.chainId = String(e.chainId) : o.chainId = "", void 0 !== e.height && null !== e.height ? o.height = r.default.fromString(e.height) : o.height = r.default.ZERO, void 0 !== e.time && null !== e.time ? o.time = D(e.time) : o.time = void 0, void 0 !== e.lastBlockId && null !== e.lastBlockId ? o.lastBlockId = t.BlockID.fromJSON(e.lastBlockId) : o.lastBlockId = void 0, void 0 !== e.lastCommitHash && null !== e.lastCommitHash && (o.lastCommitHash = E(e.lastCommitHash)), void 0 !== e.dataHash && null !== e.dataHash && (o.dataHash = E(e.dataHash)), void 0 !== e.validatorsHash && null !== e.validatorsHash && (o.validatorsHash = E(e.validatorsHash)), void 0 !== e.nextValidatorsHash && null !== e.nextValidatorsHash && (o.nextValidatorsHash = E(e.nextValidatorsHash)), void 0 !== e.consensusHash && null !== e.consensusHash && (o.consensusHash = E(e.consensusHash)), void 0 !== e.appHash && null !== e.appHash && (o.appHash = E(e.appHash)), void 0 !== e.lastResultsHash && null !== e.lastResultsHash && (o.lastResultsHash = E(e.lastResultsHash)), void 0 !== e.evidenceHash && null !== e.evidenceHash && (o.evidenceHash = E(e.evidenceHash)), void 0 !== e.proposerAddress && null !== e.proposerAddress && (o.proposerAddress = E(e.proposerAddress)), o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.version && (o.version = e.version ? s.Consensus.toJSON(e.version) : void 0), void 0 !== e.chainId && (o.chainId = e.chainId), void 0 !== e.height && (o.height = (e.height || r.default.ZERO).toString()), void 0 !== e.time && (o.time = e.time.toISOString()), void 0 !== e.lastBlockId && (o.lastBlockId = e.lastBlockId ? t.BlockID.toJSON(e.lastBlockId) : void 0), void 0 !== e.lastCommitHash && (o.lastCommitHash = B(void 0 !== e.lastCommitHash ? e.lastCommitHash : new Uint8Array)), void 0 !== e.dataHash && (o.dataHash = B(void 0 !== e.dataHash ? e.dataHash : new Uint8Array)), void 0 !== e.validatorsHash && (o.validatorsHash = B(void 0 !== e.validatorsHash ? e.validatorsHash : new Uint8Array)), void 0 !== e.nextValidatorsHash && (o.nextValidatorsHash = B(void 0 !== e.nextValidatorsHash ? e.nextValidatorsHash : new Uint8Array)), void 0 !== e.consensusHash && (o.consensusHash = B(void 0 !== e.consensusHash ? e.consensusHash : new Uint8Array)), void 0 !== e.appHash && (o.appHash = B(void 0 !== e.appHash ? e.appHash : new Uint8Array)), void 0 !== e.lastResultsHash && (o.lastResultsHash = B(void 0 !== e.lastResultsHash ? e.lastResultsHash : new Uint8Array)), void 0 !== e.evidenceHash && (o.evidenceHash = B(void 0 !== e.evidenceHash ? e.evidenceHash : new Uint8Array)), void 0 !== e.proposerAddress && (o.proposerAddress = B(void 0 !== e.proposerAddress ? e.proposerAddress : new Uint8Array)), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, y);
                    return void 0 !== e.version && null !== e.version ? o.version = s.Consensus.fromPartial(e.version) : o.version = void 0, void 0 !== e.chainId && null !== e.chainId ? o.chainId = e.chainId : o.chainId = "", void 0 !== e.height && null !== e.height ? o.height = e.height : o.height = r.default.ZERO, void 0 !== e.time && null !== e.time ? o.time = e.time : o.time = void 0, void 0 !== e.lastBlockId && null !== e.lastBlockId ? o.lastBlockId = t.BlockID.fromPartial(e.lastBlockId) : o.lastBlockId = void 0, void 0 !== e.lastCommitHash && null !== e.lastCommitHash ? o.lastCommitHash = e.lastCommitHash : o.lastCommitHash = new Uint8Array, void 0 !== e.dataHash && null !== e.dataHash ? o.dataHash = e.dataHash : o.dataHash = new Uint8Array, void 0 !== e.validatorsHash && null !== e.validatorsHash ? o.validatorsHash = e.validatorsHash : o.validatorsHash = new Uint8Array, void 0 !== e.nextValidatorsHash && null !== e.nextValidatorsHash ? o.nextValidatorsHash = e.nextValidatorsHash : o.nextValidatorsHash = new Uint8Array, void 0 !== e.consensusHash && null !== e.consensusHash ? o.consensusHash = e.consensusHash : o.consensusHash = new Uint8Array, void 0 !== e.appHash && null !== e.appHash ? o.appHash = e.appHash : o.appHash = new Uint8Array, void 0 !== e.lastResultsHash && null !== e.lastResultsHash ? o.lastResultsHash = e.lastResultsHash : o.lastResultsHash = new Uint8Array, void 0 !== e.evidenceHash && null !== e.evidenceHash ? o.evidenceHash = e.evidenceHash : o.evidenceHash = new Uint8Array, void 0 !== e.proposerAddress && null !== e.proposerAddress ? o.proposerAddress = e.proposerAddress : o.proposerAddress = new Uint8Array, o
                }
            };
            const k = {};
            t.Data = {
                encode(e, t = i.default.Writer.create()) {
                    for (const o of e.txs) t.uint32(10).bytes(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, k);
                    for (r.txs = []; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.txs.push(o.bytes());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, k);
                    if (t.txs = [], void 0 !== e.txs && null !== e.txs)
                        for (const o of e.txs) t.txs.push(E(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.txs ? t.txs = e.txs.map(e => B(void 0 !== e ? e : new Uint8Array)) : t.txs = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, k);
                    if (t.txs = [], void 0 !== e.txs && null !== e.txs)
                        for (const o of e.txs) t.txs.push(o);
                    return t
                }
            };
            const O = {
                type: 0,
                height: r.default.ZERO,
                round: 0,
                validatorIndex: 0
            };
            t.Vote = {
                encode: (e, o = i.default.Writer.create()) => (0 !== e.type && o.uint32(8).int32(e.type), e.height.isZero() || o.uint32(16).int64(e.height), 0 !== e.round && o.uint32(24).int32(e.round), void 0 !== e.blockId && t.BlockID.encode(e.blockId, o.uint32(34).fork()).ldelim(), void 0 !== e.timestamp && l.Timestamp.encode(U(e.timestamp), o.uint32(42).fork()).ldelim(), 0 !== e.validatorAddress.length && o.uint32(50).bytes(e.validatorAddress), 0 !== e.validatorIndex && o.uint32(56).int32(e.validatorIndex), 0 !== e.signature.length && o.uint32(66).bytes(e.signature), o),
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, O);
                    for (n.validatorAddress = new Uint8Array, n.signature = new Uint8Array; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.type = a.int32();
                                break;
                            case 2:
                                n.height = a.int64();
                                break;
                            case 3:
                                n.round = a.int32();
                                break;
                            case 4:
                                n.blockId = t.BlockID.decode(a, a.uint32());
                                break;
                            case 5:
                                n.timestamp = T(l.Timestamp.decode(a, a.uint32()));
                                break;
                            case 6:
                                n.validatorAddress = a.bytes();
                                break;
                            case 7:
                                n.validatorIndex = a.int32();
                                break;
                            case 8:
                                n.signature = a.bytes();
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, O);
                    return o.validatorAddress = new Uint8Array, o.signature = new Uint8Array, void 0 !== e.type && null !== e.type ? o.type = v(e.type) : o.type = 0, void 0 !== e.height && null !== e.height ? o.height = r.default.fromString(e.height) : o.height = r.default.ZERO, void 0 !== e.round && null !== e.round ? o.round = Number(e.round) : o.round = 0, void 0 !== e.blockId && null !== e.blockId ? o.blockId = t.BlockID.fromJSON(e.blockId) : o.blockId = void 0, void 0 !== e.timestamp && null !== e.timestamp ? o.timestamp = D(e.timestamp) : o.timestamp = void 0, void 0 !== e.validatorAddress && null !== e.validatorAddress && (o.validatorAddress = E(e.validatorAddress)), void 0 !== e.validatorIndex && null !== e.validatorIndex ? o.validatorIndex = Number(e.validatorIndex) : o.validatorIndex = 0, void 0 !== e.signature && null !== e.signature && (o.signature = E(e.signature)), o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.type && (o.type = m(e.type)), void 0 !== e.height && (o.height = (e.height || r.default.ZERO).toString()), void 0 !== e.round && (o.round = e.round), void 0 !== e.blockId && (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0), void 0 !== e.timestamp && (o.timestamp = e.timestamp.toISOString()), void 0 !== e.validatorAddress && (o.validatorAddress = B(void 0 !== e.validatorAddress ? e.validatorAddress : new Uint8Array)), void 0 !== e.validatorIndex && (o.validatorIndex = e.validatorIndex), void 0 !== e.signature && (o.signature = B(void 0 !== e.signature ? e.signature : new Uint8Array)), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, O);
                    return void 0 !== e.type && null !== e.type ? o.type = e.type : o.type = 0, void 0 !== e.height && null !== e.height ? o.height = e.height : o.height = r.default.ZERO, void 0 !== e.round && null !== e.round ? o.round = e.round : o.round = 0, void 0 !== e.blockId && null !== e.blockId ? o.blockId = t.BlockID.fromPartial(e.blockId) : o.blockId = void 0, void 0 !== e.timestamp && null !== e.timestamp ? o.timestamp = e.timestamp : o.timestamp = void 0, void 0 !== e.validatorAddress && null !== e.validatorAddress ? o.validatorAddress = e.validatorAddress : o.validatorAddress = new Uint8Array, void 0 !== e.validatorIndex && null !== e.validatorIndex ? o.validatorIndex = e.validatorIndex : o.validatorIndex = 0, void 0 !== e.signature && null !== e.signature ? o.signature = e.signature : o.signature = new Uint8Array, o
                }
            };
            const S = {
                height: r.default.ZERO,
                round: 0
            };
            t.Commit = {
                encode(e, o = i.default.Writer.create()) {
                    e.height.isZero() || o.uint32(8).int64(e.height), 0 !== e.round && o.uint32(16).int32(e.round), void 0 !== e.blockId && t.BlockID.encode(e.blockId, o.uint32(26).fork()).ldelim();
                    for (const a of e.signatures) t.CommitSig.encode(a, o.uint32(34).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, S);
                    for (n.signatures = []; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.height = a.int64();
                                break;
                            case 2:
                                n.round = a.int32();
                                break;
                            case 3:
                                n.blockId = t.BlockID.decode(a, a.uint32());
                                break;
                            case 4:
                                n.signatures.push(t.CommitSig.decode(a, a.uint32()));
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, S);
                    if (o.signatures = [], void 0 !== e.height && null !== e.height ? o.height = r.default.fromString(e.height) : o.height = r.default.ZERO, void 0 !== e.round && null !== e.round ? o.round = Number(e.round) : o.round = 0, void 0 !== e.blockId && null !== e.blockId ? o.blockId = t.BlockID.fromJSON(e.blockId) : o.blockId = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const a of e.signatures) o.signatures.push(t.CommitSig.fromJSON(a));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.height && (o.height = (e.height || r.default.ZERO).toString()), void 0 !== e.round && (o.round = e.round), void 0 !== e.blockId && (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0), e.signatures ? o.signatures = e.signatures.map(e => e ? t.CommitSig.toJSON(e) : void 0) : o.signatures = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, S);
                    if (o.signatures = [], void 0 !== e.height && null !== e.height ? o.height = e.height : o.height = r.default.ZERO, void 0 !== e.round && null !== e.round ? o.round = e.round : o.round = 0, void 0 !== e.blockId && null !== e.blockId ? o.blockId = t.BlockID.fromPartial(e.blockId) : o.blockId = void 0, void 0 !== e.signatures && null !== e.signatures)
                        for (const a of e.signatures) o.signatures.push(t.CommitSig.fromPartial(a));
                    return o
                }
            };
            const P = {
                blockIdFlag: 0
            };
            t.CommitSig = {
                encode: (e, t = i.default.Writer.create()) => (0 !== e.blockIdFlag && t.uint32(8).int32(e.blockIdFlag), 0 !== e.validatorAddress.length && t.uint32(18).bytes(e.validatorAddress), void 0 !== e.timestamp && l.Timestamp.encode(U(e.timestamp), t.uint32(26).fork()).ldelim(), 0 !== e.signature.length && t.uint32(34).bytes(e.signature), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, P);
                    for (r.validatorAddress = new Uint8Array, r.signature = new Uint8Array; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.blockIdFlag = o.int32();
                                break;
                            case 2:
                                r.validatorAddress = o.bytes();
                                break;
                            case 3:
                                r.timestamp = T(l.Timestamp.decode(o, o.uint32()));
                                break;
                            case 4:
                                r.signature = o.bytes();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, P);
                    return t.validatorAddress = new Uint8Array, t.signature = new Uint8Array, void 0 !== e.blockIdFlag && null !== e.blockIdFlag ? t.blockIdFlag = f(e.blockIdFlag) : t.blockIdFlag = 0, void 0 !== e.validatorAddress && null !== e.validatorAddress && (t.validatorAddress = E(e.validatorAddress)), void 0 !== e.timestamp && null !== e.timestamp ? t.timestamp = D(e.timestamp) : t.timestamp = void 0, void 0 !== e.signature && null !== e.signature && (t.signature = E(e.signature)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.blockIdFlag && (t.blockIdFlag = p(e.blockIdFlag)), void 0 !== e.validatorAddress && (t.validatorAddress = B(void 0 !== e.validatorAddress ? e.validatorAddress : new Uint8Array)), void 0 !== e.timestamp && (t.timestamp = e.timestamp.toISOString()), void 0 !== e.signature && (t.signature = B(void 0 !== e.signature ? e.signature : new Uint8Array)), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, P);
                    return void 0 !== e.blockIdFlag && null !== e.blockIdFlag ? t.blockIdFlag = e.blockIdFlag : t.blockIdFlag = 0, void 0 !== e.validatorAddress && null !== e.validatorAddress ? t.validatorAddress = e.validatorAddress : t.validatorAddress = new Uint8Array, void 0 !== e.timestamp && null !== e.timestamp ? t.timestamp = e.timestamp : t.timestamp = void 0, void 0 !== e.signature && null !== e.signature ? t.signature = e.signature : t.signature = new Uint8Array, t
                }
            };
            const I = {
                type: 0,
                height: r.default.ZERO,
                round: 0,
                polRound: 0
            };
            t.Proposal = {
                encode: (e, o = i.default.Writer.create()) => (0 !== e.type && o.uint32(8).int32(e.type), e.height.isZero() || o.uint32(16).int64(e.height), 0 !== e.round && o.uint32(24).int32(e.round), 0 !== e.polRound && o.uint32(32).int32(e.polRound), void 0 !== e.blockId && t.BlockID.encode(e.blockId, o.uint32(42).fork()).ldelim(), void 0 !== e.timestamp && l.Timestamp.encode(U(e.timestamp), o.uint32(50).fork()).ldelim(), 0 !== e.signature.length && o.uint32(58).bytes(e.signature), o),
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, I);
                    for (n.signature = new Uint8Array; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.type = a.int32();
                                break;
                            case 2:
                                n.height = a.int64();
                                break;
                            case 3:
                                n.round = a.int32();
                                break;
                            case 4:
                                n.polRound = a.int32();
                                break;
                            case 5:
                                n.blockId = t.BlockID.decode(a, a.uint32());
                                break;
                            case 6:
                                n.timestamp = T(l.Timestamp.decode(a, a.uint32()));
                                break;
                            case 7:
                                n.signature = a.bytes();
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, I);
                    return o.signature = new Uint8Array, void 0 !== e.type && null !== e.type ? o.type = v(e.type) : o.type = 0, void 0 !== e.height && null !== e.height ? o.height = r.default.fromString(e.height) : o.height = r.default.ZERO, void 0 !== e.round && null !== e.round ? o.round = Number(e.round) : o.round = 0, void 0 !== e.polRound && null !== e.polRound ? o.polRound = Number(e.polRound) : o.polRound = 0, void 0 !== e.blockId && null !== e.blockId ? o.blockId = t.BlockID.fromJSON(e.blockId) : o.blockId = void 0, void 0 !== e.timestamp && null !== e.timestamp ? o.timestamp = D(e.timestamp) : o.timestamp = void 0, void 0 !== e.signature && null !== e.signature && (o.signature = E(e.signature)), o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.type && (o.type = m(e.type)), void 0 !== e.height && (o.height = (e.height || r.default.ZERO).toString()), void 0 !== e.round && (o.round = e.round), void 0 !== e.polRound && (o.polRound = e.polRound), void 0 !== e.blockId && (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0), void 0 !== e.timestamp && (o.timestamp = e.timestamp.toISOString()), void 0 !== e.signature && (o.signature = B(void 0 !== e.signature ? e.signature : new Uint8Array)), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, I);
                    return void 0 !== e.type && null !== e.type ? o.type = e.type : o.type = 0, void 0 !== e.height && null !== e.height ? o.height = e.height : o.height = r.default.ZERO, void 0 !== e.round && null !== e.round ? o.round = e.round : o.round = 0, void 0 !== e.polRound && null !== e.polRound ? o.polRound = e.polRound : o.polRound = 0, void 0 !== e.blockId && null !== e.blockId ? o.blockId = t.BlockID.fromPartial(e.blockId) : o.blockId = void 0, void 0 !== e.timestamp && null !== e.timestamp ? o.timestamp = e.timestamp : o.timestamp = void 0, void 0 !== e.signature && null !== e.signature ? o.signature = e.signature : o.signature = new Uint8Array, o
                }
            };
            const w = {};
            t.SignedHeader = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.header && t.Header.encode(e.header, o.uint32(10).fork()).ldelim(), void 0 !== e.commit && t.Commit.encode(e.commit, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, w);
                    for (; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.header = t.Header.decode(a, a.uint32());
                                break;
                            case 2:
                                n.commit = t.Commit.decode(a, a.uint32());
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, w);
                    return void 0 !== e.header && null !== e.header ? o.header = t.Header.fromJSON(e.header) : o.header = void 0, void 0 !== e.commit && null !== e.commit ? o.commit = t.Commit.fromJSON(e.commit) : o.commit = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.header && (o.header = e.header ? t.Header.toJSON(e.header) : void 0), void 0 !== e.commit && (o.commit = e.commit ? t.Commit.toJSON(e.commit) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, w);
                    return void 0 !== e.header && null !== e.header ? o.header = t.Header.fromPartial(e.header) : o.header = void 0, void 0 !== e.commit && null !== e.commit ? o.commit = t.Commit.fromPartial(e.commit) : o.commit = void 0, o
                }
            };
            const H = {};
            t.LightBlock = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.signedHeader && t.SignedHeader.encode(e.signedHeader, o.uint32(10).fork()).ldelim(), void 0 !== e.validatorSet && d.ValidatorSet.encode(e.validatorSet, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, H);
                    for (; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.signedHeader = t.SignedHeader.decode(a, a.uint32());
                                break;
                            case 2:
                                n.validatorSet = d.ValidatorSet.decode(a, a.uint32());
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, H);
                    return void 0 !== e.signedHeader && null !== e.signedHeader ? o.signedHeader = t.SignedHeader.fromJSON(e.signedHeader) : o.signedHeader = void 0, void 0 !== e.validatorSet && null !== e.validatorSet ? o.validatorSet = d.ValidatorSet.fromJSON(e.validatorSet) : o.validatorSet = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.signedHeader && (o.signedHeader = e.signedHeader ? t.SignedHeader.toJSON(e.signedHeader) : void 0), void 0 !== e.validatorSet && (o.validatorSet = e.validatorSet ? d.ValidatorSet.toJSON(e.validatorSet) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, H);
                    return void 0 !== e.signedHeader && null !== e.signedHeader ? o.signedHeader = t.SignedHeader.fromPartial(e.signedHeader) : o.signedHeader = void 0, void 0 !== e.validatorSet && null !== e.validatorSet ? o.validatorSet = d.ValidatorSet.fromPartial(e.validatorSet) : o.validatorSet = void 0, o
                }
            };
            const N = {
                blockSize: r.default.ZERO,
                numTxs: r.default.ZERO
            };
            t.BlockMeta = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.blockId && t.BlockID.encode(e.blockId, o.uint32(10).fork()).ldelim(), e.blockSize.isZero() || o.uint32(16).int64(e.blockSize), void 0 !== e.header && t.Header.encode(e.header, o.uint32(26).fork()).ldelim(), e.numTxs.isZero() || o.uint32(32).int64(e.numTxs), o),
                decode(e, o) {
                    const a = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const n = Object.assign({}, N);
                    for (; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.blockId = t.BlockID.decode(a, a.uint32());
                                break;
                            case 2:
                                n.blockSize = a.int64();
                                break;
                            case 3:
                                n.header = t.Header.decode(a, a.uint32());
                                break;
                            case 4:
                                n.numTxs = a.int64();
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const o = Object.assign({}, N);
                    return void 0 !== e.blockId && null !== e.blockId ? o.blockId = t.BlockID.fromJSON(e.blockId) : o.blockId = void 0, void 0 !== e.blockSize && null !== e.blockSize ? o.blockSize = r.default.fromString(e.blockSize) : o.blockSize = r.default.ZERO, void 0 !== e.header && null !== e.header ? o.header = t.Header.fromJSON(e.header) : o.header = void 0, void 0 !== e.numTxs && null !== e.numTxs ? o.numTxs = r.default.fromString(e.numTxs) : o.numTxs = r.default.ZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.blockId && (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0), void 0 !== e.blockSize && (o.blockSize = (e.blockSize || r.default.ZERO).toString()), void 0 !== e.header && (o.header = e.header ? t.Header.toJSON(e.header) : void 0), void 0 !== e.numTxs && (o.numTxs = (e.numTxs || r.default.ZERO).toString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, N);
                    return void 0 !== e.blockId && null !== e.blockId ? o.blockId = t.BlockID.fromPartial(e.blockId) : o.blockId = void 0, void 0 !== e.blockSize && null !== e.blockSize ? o.blockSize = e.blockSize : o.blockSize = r.default.ZERO, void 0 !== e.header && null !== e.header ? o.header = t.Header.fromPartial(e.header) : o.header = void 0, void 0 !== e.numTxs && null !== e.numTxs ? o.numTxs = e.numTxs : o.numTxs = r.default.ZERO, o
                }
            };
            const A = {};
            t.TxProof = {
                encode: (e, t = i.default.Writer.create()) => (0 !== e.rootHash.length && t.uint32(10).bytes(e.rootHash), 0 !== e.data.length && t.uint32(18).bytes(e.data), void 0 !== e.proof && n.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, A);
                    for (r.rootHash = new Uint8Array, r.data = new Uint8Array; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.rootHash = o.bytes();
                                break;
                            case 2:
                                r.data = o.bytes();
                                break;
                            case 3:
                                r.proof = n.Proof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, A);
                    return t.rootHash = new Uint8Array, t.data = new Uint8Array, void 0 !== e.rootHash && null !== e.rootHash && (t.rootHash = E(e.rootHash)), void 0 !== e.data && null !== e.data && (t.data = E(e.data)), void 0 !== e.proof && null !== e.proof ? t.proof = n.Proof.fromJSON(e.proof) : t.proof = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.rootHash && (t.rootHash = B(void 0 !== e.rootHash ? e.rootHash : new Uint8Array)), void 0 !== e.data && (t.data = B(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.proof && (t.proof = e.proof ? n.Proof.toJSON(e.proof) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, A);
                    return void 0 !== e.rootHash && null !== e.rootHash ? t.rootHash = e.rootHash : t.rootHash = new Uint8Array, void 0 !== e.data && null !== e.data ? t.data = e.data : t.data = new Uint8Array, void 0 !== e.proof && null !== e.proof ? t.proof = n.Proof.fromPartial(e.proof) : t.proof = void 0, t
                }
            };
            var x = (() => {
                if (void 0 !== x) return x;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const R = x.atob || (e => x.Buffer.from(e, "base64").toString("binary"));

            function E(e) {
                const t = R(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const _ = x.btoa || (e => x.Buffer.from(e, "binary").toString("base64"));

            function B(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return _(t.join(""))
            }

            function U(e) {
                var t;
                return {
                    seconds: (t = e.getTime() / 1e3, r.default.fromNumber(t)),
                    nanos: e.getTime() % 1e3 * 1e6
                }
            }

            function T(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }

            function D(e) {
                return e instanceof Date ? e : "string" == typeof e ? new Date(e) : T(l.Timestamp.fromJSON(e))
            }
            i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        }
    }
]);