(window.webpackJsonp = window.webpackJsonp || []).push([
    [79], {
        2045: function(e, t, o) {
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
                n = a(o(8)),
                i = o(4335),
                s = o(4336),
                d = o(2046),
                l = o(526);
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

            function h(e) {
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
                }(c = t.SignedMsgType || (t.SignedMsgType = {})), t.signedMsgTypeFromJSON = v, t.signedMsgTypeToJSON = h;
            const m = {
                total: 0
            };
            t.PartSetHeader = {
                encode: (e, t = n.default.Writer.create()) => (0 !== e.total && t.uint32(8).uint32(e.total), 0 !== e.hash.length && t.uint32(18).bytes(e.hash), t),
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, m);
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
                    const t = Object.assign({}, m);
                    return t.hash = new Uint8Array, void 0 !== e.total && null !== e.total ? t.total = Number(e.total) : t.total = 0, void 0 !== e.hash && null !== e.hash && (t.hash = E(e.hash)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.total && (t.total = e.total), void 0 !== e.hash && (t.hash = T(void 0 !== e.hash ? e.hash : new Uint8Array)), t
                },
                fromPartial(e) {
                    var t, o;
                    const a = Object.assign({}, m);
                    return a.total = null !== (t = e.total) && void 0 !== t ? t : 0, a.hash = null !== (o = e.hash) && void 0 !== o ? o : new Uint8Array, a
                }
            };
            const g = {
                index: 0
            };
            t.Part = {
                encode: (e, t = n.default.Writer.create()) => (0 !== e.index && t.uint32(8).uint32(e.index), 0 !== e.bytes.length && t.uint32(18).bytes(e.bytes), void 0 !== e.proof && i.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, g);
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
                                r.proof = i.Proof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, g);
                    return t.bytes = new Uint8Array, void 0 !== e.index && null !== e.index ? t.index = Number(e.index) : t.index = 0, void 0 !== e.bytes && null !== e.bytes && (t.bytes = E(e.bytes)), void 0 !== e.proof && null !== e.proof ? t.proof = i.Proof.fromJSON(e.proof) : t.proof = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.index && (t.index = e.index), void 0 !== e.bytes && (t.bytes = T(void 0 !== e.bytes ? e.bytes : new Uint8Array)), void 0 !== e.proof && (t.proof = e.proof ? i.Proof.toJSON(e.proof) : void 0), t
                },
                fromPartial(e) {
                    var t, o;
                    const a = Object.assign({}, g);
                    return a.index = null !== (t = e.index) && void 0 !== t ? t : 0, a.bytes = null !== (o = e.bytes) && void 0 !== o ? o : new Uint8Array, void 0 !== e.proof && null !== e.proof ? a.proof = i.Proof.fromPartial(e.proof) : a.proof = void 0, a
                }
            };
            const b = {};
            t.BlockID = {
                encode: (e, o = n.default.Writer.create()) => (0 !== e.hash.length && o.uint32(10).bytes(e.hash), void 0 !== e.partSetHeader && t.PartSetHeader.encode(e.partSetHeader, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const a = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const i = Object.assign({}, b);
                    for (i.hash = new Uint8Array; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.hash = a.bytes();
                                break;
                            case 2:
                                i.partSetHeader = t.PartSetHeader.decode(a, a.uint32());
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const o = Object.assign({}, b);
                    return o.hash = new Uint8Array, void 0 !== e.hash && null !== e.hash && (o.hash = E(e.hash)), void 0 !== e.partSetHeader && null !== e.partSetHeader ? o.partSetHeader = t.PartSetHeader.fromJSON(e.partSetHeader) : o.partSetHeader = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.hash && (o.hash = T(void 0 !== e.hash ? e.hash : new Uint8Array)), void 0 !== e.partSetHeader && (o.partSetHeader = e.partSetHeader ? t.PartSetHeader.toJSON(e.partSetHeader) : void 0), o
                },
                fromPartial(e) {
                    var o;
                    const a = Object.assign({}, b);
                    return a.hash = null !== (o = e.hash) && void 0 !== o ? o : new Uint8Array, void 0 !== e.partSetHeader && null !== e.partSetHeader ? a.partSetHeader = t.PartSetHeader.fromPartial(e.partSetHeader) : a.partSetHeader = void 0, a
                }
            };
            const y = {
                chainId: "",
                height: r.default.ZERO
            };
            t.Header = {
                encode: (e, o = n.default.Writer.create()) => (void 0 !== e.version && s.Consensus.encode(e.version, o.uint32(10).fork()).ldelim(), "" !== e.chainId && o.uint32(18).string(e.chainId), e.height.isZero() || o.uint32(24).int64(e.height), void 0 !== e.time && l.Timestamp.encode(V(e.time), o.uint32(34).fork()).ldelim(), void 0 !== e.lastBlockId && t.BlockID.encode(e.lastBlockId, o.uint32(42).fork()).ldelim(), 0 !== e.lastCommitHash.length && o.uint32(50).bytes(e.lastCommitHash), 0 !== e.dataHash.length && o.uint32(58).bytes(e.dataHash), 0 !== e.validatorsHash.length && o.uint32(66).bytes(e.validatorsHash), 0 !== e.nextValidatorsHash.length && o.uint32(74).bytes(e.nextValidatorsHash), 0 !== e.consensusHash.length && o.uint32(82).bytes(e.consensusHash), 0 !== e.appHash.length && o.uint32(90).bytes(e.appHash), 0 !== e.lastResultsHash.length && o.uint32(98).bytes(e.lastResultsHash), 0 !== e.evidenceHash.length && o.uint32(106).bytes(e.evidenceHash), 0 !== e.proposerAddress.length && o.uint32(114).bytes(e.proposerAddress), o),
                decode(e, o) {
                    const a = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const i = Object.assign({}, y);
                    for (i.lastCommitHash = new Uint8Array, i.dataHash = new Uint8Array, i.validatorsHash = new Uint8Array, i.nextValidatorsHash = new Uint8Array, i.consensusHash = new Uint8Array, i.appHash = new Uint8Array, i.lastResultsHash = new Uint8Array, i.evidenceHash = new Uint8Array, i.proposerAddress = new Uint8Array; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.version = s.Consensus.decode(a, a.uint32());
                                break;
                            case 2:
                                i.chainId = a.string();
                                break;
                            case 3:
                                i.height = a.int64();
                                break;
                            case 4:
                                i.time = D(l.Timestamp.decode(a, a.uint32()));
                                break;
                            case 5:
                                i.lastBlockId = t.BlockID.decode(a, a.uint32());
                                break;
                            case 6:
                                i.lastCommitHash = a.bytes();
                                break;
                            case 7:
                                i.dataHash = a.bytes();
                                break;
                            case 8:
                                i.validatorsHash = a.bytes();
                                break;
                            case 9:
                                i.nextValidatorsHash = a.bytes();
                                break;
                            case 10:
                                i.consensusHash = a.bytes();
                                break;
                            case 11:
                                i.appHash = a.bytes();
                                break;
                            case 12:
                                i.lastResultsHash = a.bytes();
                                break;
                            case 13:
                                i.evidenceHash = a.bytes();
                                break;
                            case 14:
                                i.proposerAddress = a.bytes();
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const o = Object.assign({}, y);
                    return o.lastCommitHash = new Uint8Array, o.dataHash = new Uint8Array, o.validatorsHash = new Uint8Array, o.nextValidatorsHash = new Uint8Array, o.consensusHash = new Uint8Array, o.appHash = new Uint8Array, o.lastResultsHash = new Uint8Array, o.evidenceHash = new Uint8Array, o.proposerAddress = new Uint8Array, void 0 !== e.version && null !== e.version ? o.version = s.Consensus.fromJSON(e.version) : o.version = void 0, void 0 !== e.chainId && null !== e.chainId ? o.chainId = String(e.chainId) : o.chainId = "", void 0 !== e.height && null !== e.height ? o.height = r.default.fromString(e.height) : o.height = r.default.ZERO, void 0 !== e.time && null !== e.time ? o.time = x(e.time) : o.time = void 0, void 0 !== e.lastBlockId && null !== e.lastBlockId ? o.lastBlockId = t.BlockID.fromJSON(e.lastBlockId) : o.lastBlockId = void 0, void 0 !== e.lastCommitHash && null !== e.lastCommitHash && (o.lastCommitHash = E(e.lastCommitHash)), void 0 !== e.dataHash && null !== e.dataHash && (o.dataHash = E(e.dataHash)), void 0 !== e.validatorsHash && null !== e.validatorsHash && (o.validatorsHash = E(e.validatorsHash)), void 0 !== e.nextValidatorsHash && null !== e.nextValidatorsHash && (o.nextValidatorsHash = E(e.nextValidatorsHash)), void 0 !== e.consensusHash && null !== e.consensusHash && (o.consensusHash = E(e.consensusHash)), void 0 !== e.appHash && null !== e.appHash && (o.appHash = E(e.appHash)), void 0 !== e.lastResultsHash && null !== e.lastResultsHash && (o.lastResultsHash = E(e.lastResultsHash)), void 0 !== e.evidenceHash && null !== e.evidenceHash && (o.evidenceHash = E(e.evidenceHash)), void 0 !== e.proposerAddress && null !== e.proposerAddress && (o.proposerAddress = E(e.proposerAddress)), o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.version && (o.version = e.version ? s.Consensus.toJSON(e.version) : void 0), void 0 !== e.chainId && (o.chainId = e.chainId), void 0 !== e.height && (o.height = (e.height || r.default.ZERO).toString()), void 0 !== e.time && (o.time = e.time.toISOString()), void 0 !== e.lastBlockId && (o.lastBlockId = e.lastBlockId ? t.BlockID.toJSON(e.lastBlockId) : void 0), void 0 !== e.lastCommitHash && (o.lastCommitHash = T(void 0 !== e.lastCommitHash ? e.lastCommitHash : new Uint8Array)), void 0 !== e.dataHash && (o.dataHash = T(void 0 !== e.dataHash ? e.dataHash : new Uint8Array)), void 0 !== e.validatorsHash && (o.validatorsHash = T(void 0 !== e.validatorsHash ? e.validatorsHash : new Uint8Array)), void 0 !== e.nextValidatorsHash && (o.nextValidatorsHash = T(void 0 !== e.nextValidatorsHash ? e.nextValidatorsHash : new Uint8Array)), void 0 !== e.consensusHash && (o.consensusHash = T(void 0 !== e.consensusHash ? e.consensusHash : new Uint8Array)), void 0 !== e.appHash && (o.appHash = T(void 0 !== e.appHash ? e.appHash : new Uint8Array)), void 0 !== e.lastResultsHash && (o.lastResultsHash = T(void 0 !== e.lastResultsHash ? e.lastResultsHash : new Uint8Array)), void 0 !== e.evidenceHash && (o.evidenceHash = T(void 0 !== e.evidenceHash ? e.evidenceHash : new Uint8Array)), void 0 !== e.proposerAddress && (o.proposerAddress = T(void 0 !== e.proposerAddress ? e.proposerAddress : new Uint8Array)), o
                },
                fromPartial(e) {
                    var o, a, n, i, d, l, u, c, f, p, v;
                    const h = Object.assign({}, y);
                    return void 0 !== e.version && null !== e.version ? h.version = s.Consensus.fromPartial(e.version) : h.version = void 0, h.chainId = null !== (o = e.chainId) && void 0 !== o ? o : "", void 0 !== e.height && null !== e.height ? h.height = e.height : h.height = r.default.ZERO, h.time = null !== (a = e.time) && void 0 !== a ? a : void 0, void 0 !== e.lastBlockId && null !== e.lastBlockId ? h.lastBlockId = t.BlockID.fromPartial(e.lastBlockId) : h.lastBlockId = void 0, h.lastCommitHash = null !== (n = e.lastCommitHash) && void 0 !== n ? n : new Uint8Array, h.dataHash = null !== (i = e.dataHash) && void 0 !== i ? i : new Uint8Array, h.validatorsHash = null !== (d = e.validatorsHash) && void 0 !== d ? d : new Uint8Array, h.nextValidatorsHash = null !== (l = e.nextValidatorsHash) && void 0 !== l ? l : new Uint8Array, h.consensusHash = null !== (u = e.consensusHash) && void 0 !== u ? u : new Uint8Array, h.appHash = null !== (c = e.appHash) && void 0 !== c ? c : new Uint8Array, h.lastResultsHash = null !== (f = e.lastResultsHash) && void 0 !== f ? f : new Uint8Array, h.evidenceHash = null !== (p = e.evidenceHash) && void 0 !== p ? p : new Uint8Array, h.proposerAddress = null !== (v = e.proposerAddress) && void 0 !== v ? v : new Uint8Array, h
                }
            };
            const k = {};
            t.Data = {
                encode(e, t = n.default.Writer.create()) {
                    for (const o of e.txs) t.uint32(10).bytes(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
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
                    return e.txs ? t.txs = e.txs.map(e => T(void 0 !== e ? e : new Uint8Array)) : t.txs = [], t
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
                encode: (e, o = n.default.Writer.create()) => (0 !== e.type && o.uint32(8).int32(e.type), e.height.isZero() || o.uint32(16).int64(e.height), 0 !== e.round && o.uint32(24).int32(e.round), void 0 !== e.blockId && t.BlockID.encode(e.blockId, o.uint32(34).fork()).ldelim(), void 0 !== e.timestamp && l.Timestamp.encode(V(e.timestamp), o.uint32(42).fork()).ldelim(), 0 !== e.validatorAddress.length && o.uint32(50).bytes(e.validatorAddress), 0 !== e.validatorIndex && o.uint32(56).int32(e.validatorIndex), 0 !== e.signature.length && o.uint32(66).bytes(e.signature), o),
                decode(e, o) {
                    const a = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const i = Object.assign({}, O);
                    for (i.validatorAddress = new Uint8Array, i.signature = new Uint8Array; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.type = a.int32();
                                break;
                            case 2:
                                i.height = a.int64();
                                break;
                            case 3:
                                i.round = a.int32();
                                break;
                            case 4:
                                i.blockId = t.BlockID.decode(a, a.uint32());
                                break;
                            case 5:
                                i.timestamp = D(l.Timestamp.decode(a, a.uint32()));
                                break;
                            case 6:
                                i.validatorAddress = a.bytes();
                                break;
                            case 7:
                                i.validatorIndex = a.int32();
                                break;
                            case 8:
                                i.signature = a.bytes();
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const o = Object.assign({}, O);
                    return o.validatorAddress = new Uint8Array, o.signature = new Uint8Array, void 0 !== e.type && null !== e.type ? o.type = v(e.type) : o.type = 0, void 0 !== e.height && null !== e.height ? o.height = r.default.fromString(e.height) : o.height = r.default.ZERO, void 0 !== e.round && null !== e.round ? o.round = Number(e.round) : o.round = 0, void 0 !== e.blockId && null !== e.blockId ? o.blockId = t.BlockID.fromJSON(e.blockId) : o.blockId = void 0, void 0 !== e.timestamp && null !== e.timestamp ? o.timestamp = x(e.timestamp) : o.timestamp = void 0, void 0 !== e.validatorAddress && null !== e.validatorAddress && (o.validatorAddress = E(e.validatorAddress)), void 0 !== e.validatorIndex && null !== e.validatorIndex ? o.validatorIndex = Number(e.validatorIndex) : o.validatorIndex = 0, void 0 !== e.signature && null !== e.signature && (o.signature = E(e.signature)), o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.type && (o.type = h(e.type)), void 0 !== e.height && (o.height = (e.height || r.default.ZERO).toString()), void 0 !== e.round && (o.round = e.round), void 0 !== e.blockId && (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0), void 0 !== e.timestamp && (o.timestamp = e.timestamp.toISOString()), void 0 !== e.validatorAddress && (o.validatorAddress = T(void 0 !== e.validatorAddress ? e.validatorAddress : new Uint8Array)), void 0 !== e.validatorIndex && (o.validatorIndex = e.validatorIndex), void 0 !== e.signature && (o.signature = T(void 0 !== e.signature ? e.signature : new Uint8Array)), o
                },
                fromPartial(e) {
                    var o, a, n, i, s, d;
                    const l = Object.assign({}, O);
                    return l.type = null !== (o = e.type) && void 0 !== o ? o : 0, void 0 !== e.height && null !== e.height ? l.height = e.height : l.height = r.default.ZERO, l.round = null !== (a = e.round) && void 0 !== a ? a : 0, void 0 !== e.blockId && null !== e.blockId ? l.blockId = t.BlockID.fromPartial(e.blockId) : l.blockId = void 0, l.timestamp = null !== (n = e.timestamp) && void 0 !== n ? n : void 0, l.validatorAddress = null !== (i = e.validatorAddress) && void 0 !== i ? i : new Uint8Array, l.validatorIndex = null !== (s = e.validatorIndex) && void 0 !== s ? s : 0, l.signature = null !== (d = e.signature) && void 0 !== d ? d : new Uint8Array, l
                }
            };
            const S = {
                height: r.default.ZERO,
                round: 0
            };
            t.Commit = {
                encode(e, o = n.default.Writer.create()) {
                    e.height.isZero() || o.uint32(8).int64(e.height), 0 !== e.round && o.uint32(16).int32(e.round), void 0 !== e.blockId && t.BlockID.encode(e.blockId, o.uint32(26).fork()).ldelim();
                    for (const a of e.signatures) t.CommitSig.encode(a, o.uint32(34).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const a = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const i = Object.assign({}, S);
                    for (i.signatures = []; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.height = a.int64();
                                break;
                            case 2:
                                i.round = a.int32();
                                break;
                            case 3:
                                i.blockId = t.BlockID.decode(a, a.uint32());
                                break;
                            case 4:
                                i.signatures.push(t.CommitSig.decode(a, a.uint32()));
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return i
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
                    var o;
                    const a = Object.assign({}, S);
                    if (void 0 !== e.height && null !== e.height ? a.height = e.height : a.height = r.default.ZERO, a.round = null !== (o = e.round) && void 0 !== o ? o : 0, void 0 !== e.blockId && null !== e.blockId ? a.blockId = t.BlockID.fromPartial(e.blockId) : a.blockId = void 0, a.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const o of e.signatures) a.signatures.push(t.CommitSig.fromPartial(o));
                    return a
                }
            };
            const w = {
                blockIdFlag: 0
            };
            t.CommitSig = {
                encode: (e, t = n.default.Writer.create()) => (0 !== e.blockIdFlag && t.uint32(8).int32(e.blockIdFlag), 0 !== e.validatorAddress.length && t.uint32(18).bytes(e.validatorAddress), void 0 !== e.timestamp && l.Timestamp.encode(V(e.timestamp), t.uint32(26).fork()).ldelim(), 0 !== e.signature.length && t.uint32(34).bytes(e.signature), t),
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, w);
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
                                r.timestamp = D(l.Timestamp.decode(o, o.uint32()));
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
                    const t = Object.assign({}, w);
                    return t.validatorAddress = new Uint8Array, t.signature = new Uint8Array, void 0 !== e.blockIdFlag && null !== e.blockIdFlag ? t.blockIdFlag = f(e.blockIdFlag) : t.blockIdFlag = 0, void 0 !== e.validatorAddress && null !== e.validatorAddress && (t.validatorAddress = E(e.validatorAddress)), void 0 !== e.timestamp && null !== e.timestamp ? t.timestamp = x(e.timestamp) : t.timestamp = void 0, void 0 !== e.signature && null !== e.signature && (t.signature = E(e.signature)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.blockIdFlag && (t.blockIdFlag = p(e.blockIdFlag)), void 0 !== e.validatorAddress && (t.validatorAddress = T(void 0 !== e.validatorAddress ? e.validatorAddress : new Uint8Array)), void 0 !== e.timestamp && (t.timestamp = e.timestamp.toISOString()), void 0 !== e.signature && (t.signature = T(void 0 !== e.signature ? e.signature : new Uint8Array)), t
                },
                fromPartial(e) {
                    var t, o, a, r;
                    const n = Object.assign({}, w);
                    return n.blockIdFlag = null !== (t = e.blockIdFlag) && void 0 !== t ? t : 0, n.validatorAddress = null !== (o = e.validatorAddress) && void 0 !== o ? o : new Uint8Array, n.timestamp = null !== (a = e.timestamp) && void 0 !== a ? a : void 0, n.signature = null !== (r = e.signature) && void 0 !== r ? r : new Uint8Array, n
                }
            };
            const I = {
                type: 0,
                height: r.default.ZERO,
                round: 0,
                polRound: 0
            };
            t.Proposal = {
                encode: (e, o = n.default.Writer.create()) => (0 !== e.type && o.uint32(8).int32(e.type), e.height.isZero() || o.uint32(16).int64(e.height), 0 !== e.round && o.uint32(24).int32(e.round), 0 !== e.polRound && o.uint32(32).int32(e.polRound), void 0 !== e.blockId && t.BlockID.encode(e.blockId, o.uint32(42).fork()).ldelim(), void 0 !== e.timestamp && l.Timestamp.encode(V(e.timestamp), o.uint32(50).fork()).ldelim(), 0 !== e.signature.length && o.uint32(58).bytes(e.signature), o),
                decode(e, o) {
                    const a = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const i = Object.assign({}, I);
                    for (i.signature = new Uint8Array; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.type = a.int32();
                                break;
                            case 2:
                                i.height = a.int64();
                                break;
                            case 3:
                                i.round = a.int32();
                                break;
                            case 4:
                                i.polRound = a.int32();
                                break;
                            case 5:
                                i.blockId = t.BlockID.decode(a, a.uint32());
                                break;
                            case 6:
                                i.timestamp = D(l.Timestamp.decode(a, a.uint32()));
                                break;
                            case 7:
                                i.signature = a.bytes();
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const o = Object.assign({}, I);
                    return o.signature = new Uint8Array, void 0 !== e.type && null !== e.type ? o.type = v(e.type) : o.type = 0, void 0 !== e.height && null !== e.height ? o.height = r.default.fromString(e.height) : o.height = r.default.ZERO, void 0 !== e.round && null !== e.round ? o.round = Number(e.round) : o.round = 0, void 0 !== e.polRound && null !== e.polRound ? o.polRound = Number(e.polRound) : o.polRound = 0, void 0 !== e.blockId && null !== e.blockId ? o.blockId = t.BlockID.fromJSON(e.blockId) : o.blockId = void 0, void 0 !== e.timestamp && null !== e.timestamp ? o.timestamp = x(e.timestamp) : o.timestamp = void 0, void 0 !== e.signature && null !== e.signature && (o.signature = E(e.signature)), o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.type && (o.type = h(e.type)), void 0 !== e.height && (o.height = (e.height || r.default.ZERO).toString()), void 0 !== e.round && (o.round = e.round), void 0 !== e.polRound && (o.polRound = e.polRound), void 0 !== e.blockId && (o.blockId = e.blockId ? t.BlockID.toJSON(e.blockId) : void 0), void 0 !== e.timestamp && (o.timestamp = e.timestamp.toISOString()), void 0 !== e.signature && (o.signature = T(void 0 !== e.signature ? e.signature : new Uint8Array)), o
                },
                fromPartial(e) {
                    var o, a, n, i, s;
                    const d = Object.assign({}, I);
                    return d.type = null !== (o = e.type) && void 0 !== o ? o : 0, void 0 !== e.height && null !== e.height ? d.height = e.height : d.height = r.default.ZERO, d.round = null !== (a = e.round) && void 0 !== a ? a : 0, d.polRound = null !== (n = e.polRound) && void 0 !== n ? n : 0, void 0 !== e.blockId && null !== e.blockId ? d.blockId = t.BlockID.fromPartial(e.blockId) : d.blockId = void 0, d.timestamp = null !== (i = e.timestamp) && void 0 !== i ? i : void 0, d.signature = null !== (s = e.signature) && void 0 !== s ? s : new Uint8Array, d
                }
            };
            const P = {};
            t.SignedHeader = {
                encode: (e, o = n.default.Writer.create()) => (void 0 !== e.header && t.Header.encode(e.header, o.uint32(10).fork()).ldelim(), void 0 !== e.commit && t.Commit.encode(e.commit, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const a = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const i = Object.assign({}, P);
                    for (; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.header = t.Header.decode(a, a.uint32());
                                break;
                            case 2:
                                i.commit = t.Commit.decode(a, a.uint32());
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const o = Object.assign({}, P);
                    return void 0 !== e.header && null !== e.header ? o.header = t.Header.fromJSON(e.header) : o.header = void 0, void 0 !== e.commit && null !== e.commit ? o.commit = t.Commit.fromJSON(e.commit) : o.commit = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.header && (o.header = e.header ? t.Header.toJSON(e.header) : void 0), void 0 !== e.commit && (o.commit = e.commit ? t.Commit.toJSON(e.commit) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, P);
                    return void 0 !== e.header && null !== e.header ? o.header = t.Header.fromPartial(e.header) : o.header = void 0, void 0 !== e.commit && null !== e.commit ? o.commit = t.Commit.fromPartial(e.commit) : o.commit = void 0, o
                }
            };
            const A = {};
            t.LightBlock = {
                encode: (e, o = n.default.Writer.create()) => (void 0 !== e.signedHeader && t.SignedHeader.encode(e.signedHeader, o.uint32(10).fork()).ldelim(), void 0 !== e.validatorSet && d.ValidatorSet.encode(e.validatorSet, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const a = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const i = Object.assign({}, A);
                    for (; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.signedHeader = t.SignedHeader.decode(a, a.uint32());
                                break;
                            case 2:
                                i.validatorSet = d.ValidatorSet.decode(a, a.uint32());
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const o = Object.assign({}, A);
                    return void 0 !== e.signedHeader && null !== e.signedHeader ? o.signedHeader = t.SignedHeader.fromJSON(e.signedHeader) : o.signedHeader = void 0, void 0 !== e.validatorSet && null !== e.validatorSet ? o.validatorSet = d.ValidatorSet.fromJSON(e.validatorSet) : o.validatorSet = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.signedHeader && (o.signedHeader = e.signedHeader ? t.SignedHeader.toJSON(e.signedHeader) : void 0), void 0 !== e.validatorSet && (o.validatorSet = e.validatorSet ? d.ValidatorSet.toJSON(e.validatorSet) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, A);
                    return void 0 !== e.signedHeader && null !== e.signedHeader ? o.signedHeader = t.SignedHeader.fromPartial(e.signedHeader) : o.signedHeader = void 0, void 0 !== e.validatorSet && null !== e.validatorSet ? o.validatorSet = d.ValidatorSet.fromPartial(e.validatorSet) : o.validatorSet = void 0, o
                }
            };
            const N = {
                blockSize: r.default.ZERO,
                numTxs: r.default.ZERO
            };
            t.BlockMeta = {
                encode: (e, o = n.default.Writer.create()) => (void 0 !== e.blockId && t.BlockID.encode(e.blockId, o.uint32(10).fork()).ldelim(), e.blockSize.isZero() || o.uint32(16).int64(e.blockSize), void 0 !== e.header && t.Header.encode(e.header, o.uint32(26).fork()).ldelim(), e.numTxs.isZero() || o.uint32(32).int64(e.numTxs), o),
                decode(e, o) {
                    const a = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const i = Object.assign({}, N);
                    for (; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.blockId = t.BlockID.decode(a, a.uint32());
                                break;
                            case 2:
                                i.blockSize = a.int64();
                                break;
                            case 3:
                                i.header = t.Header.decode(a, a.uint32());
                                break;
                            case 4:
                                i.numTxs = a.int64();
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return i
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
            const H = {};
            t.TxProof = {
                encode: (e, t = n.default.Writer.create()) => (0 !== e.rootHash.length && t.uint32(10).bytes(e.rootHash), 0 !== e.data.length && t.uint32(18).bytes(e.data), void 0 !== e.proof && i.Proof.encode(e.proof, t.uint32(26).fork()).ldelim(), t),
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, H);
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
                                r.proof = i.Proof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const t = Object.assign({}, H);
                    return t.rootHash = new Uint8Array, t.data = new Uint8Array, void 0 !== e.rootHash && null !== e.rootHash && (t.rootHash = E(e.rootHash)), void 0 !== e.data && null !== e.data && (t.data = E(e.data)), void 0 !== e.proof && null !== e.proof ? t.proof = i.Proof.fromJSON(e.proof) : t.proof = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.rootHash && (t.rootHash = T(void 0 !== e.rootHash ? e.rootHash : new Uint8Array)), void 0 !== e.data && (t.data = T(void 0 !== e.data ? e.data : new Uint8Array)), void 0 !== e.proof && (t.proof = e.proof ? i.Proof.toJSON(e.proof) : void 0), t
                },
                fromPartial(e) {
                    var t, o;
                    const a = Object.assign({}, H);
                    return a.rootHash = null !== (t = e.rootHash) && void 0 !== t ? t : new Uint8Array, a.data = null !== (o = e.data) && void 0 !== o ? o : new Uint8Array, void 0 !== e.proof && null !== e.proof ? a.proof = i.Proof.fromPartial(e.proof) : a.proof = void 0, a
                }
            };
            var _ = (() => {
                if (void 0 !== _) return _;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const R = _.atob || (e => _.Buffer.from(e, "base64").toString("binary"));

            function E(e) {
                const t = R(e),
                    o = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) o[e] = t.charCodeAt(e);
                return o
            }
            const U = _.btoa || (e => _.Buffer.from(e, "binary").toString("base64"));

            function T(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return U(t.join(""))
            }

            function V(e) {
                var t;
                return {
                    seconds: (t = e.getTime() / 1e3, r.default.fromNumber(t)),
                    nanos: e.getTime() % 1e3 * 1e6
                }
            }

            function D(e) {
                let t = 1e3 * e.seconds.toNumber();
                return t += e.nanos / 1e6, new Date(t)
            }

            function x(e) {
                return e instanceof Date ? e : "string" == typeof e ? new Date(e) : D(l.Timestamp.fromJSON(e))
            }
            n.default.util.Long !== r.default && (n.default.util.Long = r.default, n.default.configure())
        },
        2046: function(e, t, o) {
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
                n = a(o(8)),
                i = o(4337);
            t.protobufPackage = "tendermint.types";
            const s = {
                totalVotingPower: r.default.ZERO
            };
            t.ValidatorSet = {
                encode(e, o = n.default.Writer.create()) {
                    for (const a of e.validators) t.Validator.encode(a, o.uint32(10).fork()).ldelim();
                    return void 0 !== e.proposer && t.Validator.encode(e.proposer, o.uint32(18).fork()).ldelim(), e.totalVotingPower.isZero() || o.uint32(24).int64(e.totalVotingPower), o
                },
                decode(e, o) {
                    const a = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const i = Object.assign({}, s);
                    for (i.validators = []; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.validators.push(t.Validator.decode(a, a.uint32()));
                                break;
                            case 2:
                                i.proposer = t.Validator.decode(a, a.uint32());
                                break;
                            case 3:
                                i.totalVotingPower = a.int64();
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return i
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
                encode: (e, t = n.default.Writer.create()) => (0 !== e.address.length && t.uint32(10).bytes(e.address), void 0 !== e.pubKey && i.PublicKey.encode(e.pubKey, t.uint32(18).fork()).ldelim(), e.votingPower.isZero() || t.uint32(24).int64(e.votingPower), e.proposerPriority.isZero() || t.uint32(32).int64(e.proposerPriority), t),
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, d);
                    for (r.address = new Uint8Array; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.address = o.bytes();
                                break;
                            case 2:
                                r.pubKey = i.PublicKey.decode(o, o.uint32());
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
                    }(e.address)), void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = i.PublicKey.fromJSON(e.pubKey) : t.pubKey = void 0, void 0 !== e.votingPower && null !== e.votingPower ? t.votingPower = r.default.fromString(e.votingPower) : t.votingPower = r.default.ZERO, void 0 !== e.proposerPriority && null !== e.proposerPriority ? t.proposerPriority = r.default.fromString(e.proposerPriority) : t.proposerPriority = r.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = function(e) {
                        const t = [];
                        for (const o of e) t.push(String.fromCharCode(o));
                        return f(t.join(""))
                    }(void 0 !== e.address ? e.address : new Uint8Array)), void 0 !== e.pubKey && (t.pubKey = e.pubKey ? i.PublicKey.toJSON(e.pubKey) : void 0), void 0 !== e.votingPower && (t.votingPower = (e.votingPower || r.default.ZERO).toString()), void 0 !== e.proposerPriority && (t.proposerPriority = (e.proposerPriority || r.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, d);
                    return o.address = null !== (t = e.address) && void 0 !== t ? t : new Uint8Array, void 0 !== e.pubKey && null !== e.pubKey ? o.pubKey = i.PublicKey.fromPartial(e.pubKey) : o.pubKey = void 0, void 0 !== e.votingPower && null !== e.votingPower ? o.votingPower = e.votingPower : o.votingPower = r.default.ZERO, void 0 !== e.proposerPriority && null !== e.proposerPriority ? o.proposerPriority = e.proposerPriority : o.proposerPriority = r.default.ZERO, o
                }
            };
            const l = {
                votingPower: r.default.ZERO
            };
            t.SimpleValidator = {
                encode: (e, t = n.default.Writer.create()) => (void 0 !== e.pubKey && i.PublicKey.encode(e.pubKey, t.uint32(10).fork()).ldelim(), e.votingPower.isZero() || t.uint32(16).int64(e.votingPower), t),
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, l);
                    for (; o.pos < a;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.pubKey = i.PublicKey.decode(o, o.uint32());
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
                    return void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = i.PublicKey.fromJSON(e.pubKey) : t.pubKey = void 0, void 0 !== e.votingPower && null !== e.votingPower ? t.votingPower = r.default.fromString(e.votingPower) : t.votingPower = r.default.ZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.pubKey && (t.pubKey = e.pubKey ? i.PublicKey.toJSON(e.pubKey) : void 0), void 0 !== e.votingPower && (t.votingPower = (e.votingPower || r.default.ZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = i.PublicKey.fromPartial(e.pubKey) : t.pubKey = void 0, void 0 !== e.votingPower && null !== e.votingPower ? t.votingPower = e.votingPower : t.votingPower = r.default.ZERO, t
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
            n.default.util.Long !== r.default && (n.default.util.Long = r.default, n.default.configure())
        },
        4335: function(e, t, o) {
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
                n = a(o(8));
            t.protobufPackage = "tendermint.crypto";
            const i = {
                total: r.default.ZERO,
                index: r.default.ZERO
            };
            t.Proof = {
                encode(e, t = n.default.Writer.create()) {
                    e.total.isZero() || t.uint32(8).int64(e.total), e.index.isZero() || t.uint32(16).int64(e.index), 0 !== e.leafHash.length && t.uint32(26).bytes(e.leafHash);
                    for (const o of e.aunts) t.uint32(34).bytes(o);
                    return t
                },
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, i);
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
                    const t = Object.assign({}, i);
                    if (t.aunts = [], t.leafHash = new Uint8Array, void 0 !== e.total && null !== e.total ? t.total = r.default.fromString(e.total) : t.total = r.default.ZERO, void 0 !== e.index && null !== e.index ? t.index = r.default.fromString(e.index) : t.index = r.default.ZERO, void 0 !== e.leafHash && null !== e.leafHash && (t.leafHash = p(e.leafHash)), void 0 !== e.aunts && null !== e.aunts)
                        for (const o of e.aunts) t.aunts.push(p(o));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.total && (t.total = (e.total || r.default.ZERO).toString()), void 0 !== e.index && (t.index = (e.index || r.default.ZERO).toString()), void 0 !== e.leafHash && (t.leafHash = h(void 0 !== e.leafHash ? e.leafHash : new Uint8Array)), e.aunts ? t.aunts = e.aunts.map(e => h(void 0 !== e ? e : new Uint8Array)) : t.aunts = [], t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, i);
                    if (void 0 !== e.total && null !== e.total ? o.total = e.total : o.total = r.default.ZERO, void 0 !== e.index && null !== e.index ? o.index = e.index : o.index = r.default.ZERO, o.leafHash = null !== (t = e.leafHash) && void 0 !== t ? t : new Uint8Array, o.aunts = [], void 0 !== e.aunts && null !== e.aunts)
                        for (const t of e.aunts) o.aunts.push(t);
                    return o
                }
            };
            const s = {};
            t.ValueOp = {
                encode: (e, o = n.default.Writer.create()) => (0 !== e.key.length && o.uint32(10).bytes(e.key), void 0 !== e.proof && t.Proof.encode(e.proof, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const a = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const i = Object.assign({}, s);
                    for (i.key = new Uint8Array; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.key = a.bytes();
                                break;
                            case 2:
                                i.proof = t.Proof.decode(a, a.uint32());
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const o = Object.assign({}, s);
                    return o.key = new Uint8Array, void 0 !== e.key && null !== e.key && (o.key = p(e.key)), void 0 !== e.proof && null !== e.proof ? o.proof = t.Proof.fromJSON(e.proof) : o.proof = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.key && (o.key = h(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.proof && (o.proof = e.proof ? t.Proof.toJSON(e.proof) : void 0), o
                },
                fromPartial(e) {
                    var o;
                    const a = Object.assign({}, s);
                    return a.key = null !== (o = e.key) && void 0 !== o ? o : new Uint8Array, void 0 !== e.proof && null !== e.proof ? a.proof = t.Proof.fromPartial(e.proof) : a.proof = void 0, a
                }
            };
            const d = {
                key: "",
                input: "",
                output: ""
            };
            t.DominoOp = {
                encode: (e, t = n.default.Writer.create()) => ("" !== e.key && t.uint32(10).string(e.key), "" !== e.input && t.uint32(18).string(e.input), "" !== e.output && t.uint32(26).string(e.output), t),
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
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
                    var t, o, a;
                    const r = Object.assign({}, d);
                    return r.key = null !== (t = e.key) && void 0 !== t ? t : "", r.input = null !== (o = e.input) && void 0 !== o ? o : "", r.output = null !== (a = e.output) && void 0 !== a ? a : "", r
                }
            };
            const l = {
                type: ""
            };
            t.ProofOp = {
                encode: (e, t = n.default.Writer.create()) => ("" !== e.type && t.uint32(10).string(e.type), 0 !== e.key.length && t.uint32(18).bytes(e.key), 0 !== e.data.length && t.uint32(26).bytes(e.data), t),
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
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
                    return void 0 !== e.type && (t.type = e.type), void 0 !== e.key && (t.key = h(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.data && (t.data = h(void 0 !== e.data ? e.data : new Uint8Array)), t
                },
                fromPartial(e) {
                    var t, o, a;
                    const r = Object.assign({}, l);
                    return r.type = null !== (t = e.type) && void 0 !== t ? t : "", r.key = null !== (o = e.key) && void 0 !== o ? o : new Uint8Array, r.data = null !== (a = e.data) && void 0 !== a ? a : new Uint8Array, r
                }
            };
            const u = {};
            t.ProofOps = {
                encode(e, o = n.default.Writer.create()) {
                    for (const a of e.ops) t.ProofOp.encode(a, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const a = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let r = void 0 === o ? a.len : a.pos + o;
                    const i = Object.assign({}, u);
                    for (i.ops = []; a.pos < r;) {
                        const e = a.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.ops.push(t.ProofOp.decode(a, a.uint32()));
                                break;
                            default:
                                a.skipType(7 & e)
                        }
                    }
                    return i
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

            function h(e) {
                const t = [];
                for (const o of e) t.push(String.fromCharCode(o));
                return v(t.join(""))
            }
            n.default.util.Long !== r.default && (n.default.util.Long = r.default, n.default.configure())
        },
        4336: function(e, t, o) {
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
                n = a(o(8));
            t.protobufPackage = "tendermint.version";
            const i = {
                protocol: r.default.UZERO,
                software: ""
            };
            t.App = {
                encode: (e, t = n.default.Writer.create()) => (e.protocol.isZero() || t.uint32(8).uint64(e.protocol), "" !== e.software && t.uint32(18).string(e.software), t),
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, i);
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
                    const t = Object.assign({}, i);
                    return void 0 !== e.protocol && null !== e.protocol ? t.protocol = r.default.fromString(e.protocol) : t.protocol = r.default.UZERO, void 0 !== e.software && null !== e.software ? t.software = String(e.software) : t.software = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.protocol && (t.protocol = (e.protocol || r.default.UZERO).toString()), void 0 !== e.software && (t.software = e.software), t
                },
                fromPartial(e) {
                    var t;
                    const o = Object.assign({}, i);
                    return void 0 !== e.protocol && null !== e.protocol ? o.protocol = e.protocol : o.protocol = r.default.UZERO, o.software = null !== (t = e.software) && void 0 !== t ? t : "", o
                }
            };
            const s = {
                block: r.default.UZERO,
                app: r.default.UZERO
            };
            t.Consensus = {
                encode: (e, t = n.default.Writer.create()) => (e.block.isZero() || t.uint32(8).uint64(e.block), e.app.isZero() || t.uint32(16).uint64(e.app), t),
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
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
            }, n.default.util.Long !== r.default && (n.default.util.Long = r.default, n.default.configure())
        },
        4337: function(e, t, o) {
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
                n = a(o(8));
            t.protobufPackage = "tendermint.crypto";
            const i = {};
            t.PublicKey = {
                encode: (e, t = n.default.Writer.create()) => (void 0 !== e.ed25519 && t.uint32(10).bytes(e.ed25519), void 0 !== e.secp256k1 && t.uint32(18).bytes(e.secp256k1), t),
                decode(e, t) {
                    const o = e instanceof n.default.Reader ? e : new n.default.Reader(e);
                    let a = void 0 === t ? o.len : o.pos + t;
                    const r = Object.assign({}, i);
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
                    const t = Object.assign({}, i);
                    return void 0 !== e.ed25519 && null !== e.ed25519 && (t.ed25519 = l(e.ed25519)), void 0 !== e.secp256k1 && null !== e.secp256k1 && (t.secp256k1 = l(e.secp256k1)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.ed25519 && (t.ed25519 = void 0 !== e.ed25519 ? c(e.ed25519) : void 0), void 0 !== e.secp256k1 && (t.secp256k1 = void 0 !== e.secp256k1 ? c(e.secp256k1) : void 0), t
                },
                fromPartial(e) {
                    var t, o;
                    const a = Object.assign({}, i);
                    return a.ed25519 = null !== (t = e.ed25519) && void 0 !== t ? t : void 0, a.secp256k1 = null !== (o = e.secp256k1) && void 0 !== o ? o : void 0, a
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
            n.default.util.Long !== r.default && (n.default.util.Long = r.default, n.default.configure())
        },
        4556: function(e, t, o) {
            var a, r;
            void 0 === (r = "function" == typeof(a = function(e, t, o) {
                return function(e, t, o, a, r, n) {
                    function i(e) {
                        return "number" == typeof e && !isNaN(e)
                    }
                    var s = this;
                    if (s.version = function() {
                            return "1.9.3"
                        }, s.options = {
                            useEasing: !0,
                            useGrouping: !0,
                            separator: ",",
                            decimal: ".",
                            easingFn: function(e, t, o, a) {
                                return o * (1 - Math.pow(2, -10 * e / a)) * 1024 / 1023 + t
                            },
                            formattingFn: function(e) {
                                var t, o, a, r, n, i, d = e < 0;
                                if (e = Math.abs(e).toFixed(s.decimals), o = (t = (e += "").split("."))[0], a = t.length > 1 ? s.options.decimal + t[1] : "", s.options.useGrouping) {
                                    for (r = "", n = 0, i = o.length; n < i; ++n) 0 !== n && n % 3 == 0 && (r = s.options.separator + r), r = o[i - n - 1] + r;
                                    o = r
                                }
                                return s.options.numerals.length && (o = o.replace(/[0-9]/g, (function(e) {
                                    return s.options.numerals[+e]
                                })), a = a.replace(/[0-9]/g, (function(e) {
                                    return s.options.numerals[+e]
                                }))), (d ? "-" : "") + s.options.prefix + o + a + s.options.suffix
                            },
                            prefix: "",
                            suffix: "",
                            numerals: []
                        }, n && "object" == typeof n)
                        for (var d in s.options) n.hasOwnProperty(d) && null !== n[d] && (s.options[d] = n[d]);
                    "" === s.options.separator ? s.options.useGrouping = !1 : s.options.separator = "" + s.options.separator;
                    for (var l = 0, u = ["webkit", "moz", "ms", "o"], c = 0; c < u.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[u[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[u[c] + "CancelAnimationFrame"] || window[u[c] + "CancelRequestAnimationFrame"];
                    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                        var o = (new Date).getTime(),
                            a = Math.max(0, 16 - (o - l)),
                            r = window.setTimeout((function() {
                                e(o + a)
                            }), a);
                        return l = o + a, r
                    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                        clearTimeout(e)
                    }), s.initialize = function() {
                        return !(!s.initialized && (s.error = "", s.d = "string" == typeof e ? document.getElementById(e) : e, s.d ? (s.startVal = Number(t), s.endVal = Number(o), i(s.startVal) && i(s.endVal) ? (s.decimals = Math.max(0, a || 0), s.dec = Math.pow(10, s.decimals), s.duration = 1e3 * Number(r) || 2e3, s.countDown = s.startVal > s.endVal, s.frameVal = s.startVal, s.initialized = !0, 0) : (s.error = "[CountUp] startVal (" + t + ") or endVal (" + o + ") is not a number", 1)) : (s.error = "[CountUp] target is null or undefined", 1)))
                    }, s.printValue = function(e) {
                        var t = s.options.formattingFn(e);
                        "INPUT" === s.d.tagName ? this.d.value = t : "text" === s.d.tagName || "tspan" === s.d.tagName ? this.d.textContent = t : this.d.innerHTML = t
                    }, s.count = function(e) {
                        s.startTime || (s.startTime = e), s.timestamp = e;
                        var t = e - s.startTime;
                        s.remaining = s.duration - t, s.options.useEasing ? s.countDown ? s.frameVal = s.startVal - s.options.easingFn(t, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.options.easingFn(t, s.startVal, s.endVal - s.startVal, s.duration) : s.countDown ? s.frameVal = s.startVal - (s.startVal - s.endVal) * (t / s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (t / s.duration), s.countDown ? s.frameVal = s.frameVal < s.endVal ? s.endVal : s.frameVal : s.frameVal = s.frameVal > s.endVal ? s.endVal : s.frameVal, s.frameVal = Math.round(s.frameVal * s.dec) / s.dec, s.printValue(s.frameVal), t < s.duration ? s.rAF = requestAnimationFrame(s.count) : s.callback && s.callback()
                    }, s.start = function(e) {
                        s.initialize() && (s.callback = e, s.rAF = requestAnimationFrame(s.count))
                    }, s.pauseResume = function() {
                        s.paused ? (s.paused = !1, delete s.startTime, s.duration = s.remaining, s.startVal = s.frameVal, requestAnimationFrame(s.count)) : (s.paused = !0, cancelAnimationFrame(s.rAF))
                    }, s.reset = function() {
                        s.paused = !1, delete s.startTime, s.initialized = !1, s.initialize() && (cancelAnimationFrame(s.rAF), s.printValue(s.startVal))
                    }, s.update = function(e) {
                        if (s.initialize()) {
                            if (!i(e = Number(e))) return void(s.error = "[CountUp] update() - new endVal is not a number: " + e);
                            s.error = "", e !== s.frameVal && (cancelAnimationFrame(s.rAF), s.paused = !1, delete s.startTime, s.startVal = s.frameVal, s.endVal = e, s.countDown = s.startVal > s.endVal, s.rAF = requestAnimationFrame(s.count))
                        }
                    }, s.initialize() && s.printValue(s.startVal)
                }
            }) ? a.call(t, o, t, e) : a) || (e.exports = r)
        }
    }
]);