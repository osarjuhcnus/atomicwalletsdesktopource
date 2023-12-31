(window.webpackJsonp = window.webpackJsonp || []).push([
    [207], {
        1144: function(e, o, t) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.CompactBitArray = o.MultiSignature = o.protobufPackage = void 0;
            const r = s(t(1)),
                i = s(t(8));
            o.protobufPackage = "cosmos.crypto.multisig.v1beta1";
            const a = {};
            o.MultiSignature = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.signatures) o.uint32(10).bytes(t);
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, a);
                    for (r.signatures = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.signatures.push(t.bytes());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, a);
                    if (o.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const t of e.signatures) o.signatures.push(u(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.signatures ? o.signatures = e.signatures.map(e => p(void 0 !== e ? e : new Uint8Array)) : o.signatures = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, a);
                    if (o.signatures = [], void 0 !== e.signatures && null !== e.signatures)
                        for (const t of e.signatures) o.signatures.push(t);
                    return o
                }
            };
            const n = {
                extraBitsStored: 0
            };
            o.CompactBitArray = {
                encode: (e, o = i.default.Writer.create()) => (0 !== e.extraBitsStored && o.uint32(8).uint32(e.extraBitsStored), 0 !== e.elems.length && o.uint32(18).bytes(e.elems), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, n);
                    for (r.elems = new Uint8Array; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.extraBitsStored = t.uint32();
                                break;
                            case 2:
                                r.elems = t.bytes();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, n);
                    return o.elems = new Uint8Array, void 0 !== e.extraBitsStored && null !== e.extraBitsStored ? o.extraBitsStored = Number(e.extraBitsStored) : o.extraBitsStored = 0, void 0 !== e.elems && null !== e.elems && (o.elems = u(e.elems)), o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.extraBitsStored && (o.extraBitsStored = e.extraBitsStored), void 0 !== e.elems && (o.elems = p(void 0 !== e.elems ? e.elems : new Uint8Array)), o
                },
                fromPartial(e) {
                    var o, t;
                    const s = Object.assign({}, n);
                    return s.extraBitsStored = null !== (o = e.extraBitsStored) && void 0 !== o ? o : 0, s.elems = null !== (t = e.elems) && void 0 !== t ? t : new Uint8Array, s
                }
            };
            var d = (() => {
                if (void 0 !== d) return d;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const l = d.atob || (e => d.Buffer.from(e, "base64").toString("binary"));

            function u(e) {
                const o = l(e),
                    t = new Uint8Array(o.length);
                for (let e = 0; e < o.length; ++e) t[e] = o.charCodeAt(e);
                return t
            }
            const c = d.btoa || (e => d.Buffer.from(e, "binary").toString("base64"));

            function p(e) {
                const o = [];
                for (const t of e) o.push(String.fromCharCode(t));
                return c(o.join(""))
            }
            i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        1147: function(e, o, t) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.TallyParams = o.VotingParams = o.DepositParams = o.Vote = o.TallyResult = o.Proposal = o.Deposit = o.TextProposal = o.proposalStatusToJSON = o.proposalStatusFromJSON = o.ProposalStatus = o.voteOptionToJSON = o.voteOptionFromJSON = o.VoteOption = o.protobufPackage = void 0;
            const r = s(t(1)),
                i = s(t(8)),
                a = t(113),
                n = t(1148),
                d = t(526),
                l = t(160);
            var u, c;

            function p(e) {
                switch (e) {
                    case 0:
                    case "VOTE_OPTION_UNSPECIFIED":
                        return u.VOTE_OPTION_UNSPECIFIED;
                    case 1:
                    case "VOTE_OPTION_YES":
                        return u.VOTE_OPTION_YES;
                    case 2:
                    case "VOTE_OPTION_ABSTAIN":
                        return u.VOTE_OPTION_ABSTAIN;
                    case 3:
                    case "VOTE_OPTION_NO":
                        return u.VOTE_OPTION_NO;
                    case 4:
                    case "VOTE_OPTION_NO_WITH_VETO":
                        return u.VOTE_OPTION_NO_WITH_VETO;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return u.UNRECOGNIZED
                }
            }

            function f(e) {
                switch (e) {
                    case u.VOTE_OPTION_UNSPECIFIED:
                        return "VOTE_OPTION_UNSPECIFIED";
                    case u.VOTE_OPTION_YES:
                        return "VOTE_OPTION_YES";
                    case u.VOTE_OPTION_ABSTAIN:
                        return "VOTE_OPTION_ABSTAIN";
                    case u.VOTE_OPTION_NO:
                        return "VOTE_OPTION_NO";
                    case u.VOTE_OPTION_NO_WITH_VETO:
                        return "VOTE_OPTION_NO_WITH_VETO";
                    default:
                        return "UNKNOWN"
                }
            }

            function v(e) {
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

            function g(e) {
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
            o.protobufPackage = "cosmos.gov.v1beta1",
                function(e) {
                    e[e.VOTE_OPTION_UNSPECIFIED = 0] = "VOTE_OPTION_UNSPECIFIED", e[e.VOTE_OPTION_YES = 1] = "VOTE_OPTION_YES", e[e.VOTE_OPTION_ABSTAIN = 2] = "VOTE_OPTION_ABSTAIN", e[e.VOTE_OPTION_NO = 3] = "VOTE_OPTION_NO", e[e.VOTE_OPTION_NO_WITH_VETO = 4] = "VOTE_OPTION_NO_WITH_VETO", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(u = o.VoteOption || (o.VoteOption = {})), o.voteOptionFromJSON = p, o.voteOptionToJSON = f,
                function(e) {
                    e[e.PROPOSAL_STATUS_UNSPECIFIED = 0] = "PROPOSAL_STATUS_UNSPECIFIED", e[e.PROPOSAL_STATUS_DEPOSIT_PERIOD = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD", e[e.PROPOSAL_STATUS_VOTING_PERIOD = 2] = "PROPOSAL_STATUS_VOTING_PERIOD", e[e.PROPOSAL_STATUS_PASSED = 3] = "PROPOSAL_STATUS_PASSED", e[e.PROPOSAL_STATUS_REJECTED = 4] = "PROPOSAL_STATUS_REJECTED", e[e.PROPOSAL_STATUS_FAILED = 5] = "PROPOSAL_STATUS_FAILED", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(c = o.ProposalStatus || (o.ProposalStatus = {})), o.proposalStatusFromJSON = v, o.proposalStatusToJSON = g;
            const m = {
                title: "",
                description: ""
            };
            o.TextProposal = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.title && o.uint32(10).string(e.title), "" !== e.description && o.uint32(18).string(e.description), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, m);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.title = t.string();
                                break;
                            case 2:
                                r.description = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, m);
                    return void 0 !== e.title && null !== e.title ? o.title = String(e.title) : o.title = "", void 0 !== e.description && null !== e.description ? o.description = String(e.description) : o.description = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.title && (o.title = e.title), void 0 !== e.description && (o.description = e.description), o
                },
                fromPartial(e) {
                    var o, t;
                    const s = Object.assign({}, m);
                    return s.title = null !== (o = e.title) && void 0 !== o ? o : "", s.description = null !== (t = e.description) && void 0 !== t ? t : "", s
                }
            };
            const O = {
                proposalId: r.default.UZERO,
                depositor: ""
            };
            o.Deposit = {
                encode(e, o = i.default.Writer.create()) {
                    e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), "" !== e.depositor && o.uint32(18).string(e.depositor);
                    for (const t of e.amount) l.Coin.encode(t, o.uint32(26).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, O);
                    for (r.amount = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = t.uint64();
                                break;
                            case 2:
                                r.depositor = t.string();
                                break;
                            case 3:
                                r.amount.push(l.Coin.decode(t, t.uint32()));
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, O);
                    if (o.amount = [], void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = r.default.fromString(e.proposalId) : o.proposalId = r.default.UZERO, void 0 !== e.depositor && null !== e.depositor ? o.depositor = String(e.depositor) : o.depositor = "", void 0 !== e.amount && null !== e.amount)
                        for (const t of e.amount) o.amount.push(l.Coin.fromJSON(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || r.default.UZERO).toString()), void 0 !== e.depositor && (o.depositor = e.depositor), e.amount ? o.amount = e.amount.map(e => e ? l.Coin.toJSON(e) : void 0) : o.amount = [], o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, O);
                    if (void 0 !== e.proposalId && null !== e.proposalId ? t.proposalId = e.proposalId : t.proposalId = r.default.UZERO, t.depositor = null !== (o = e.depositor) && void 0 !== o ? o : "", t.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(l.Coin.fromPartial(o));
                    return t
                }
            };
            const h = {
                proposalId: r.default.UZERO,
                status: 0
            };
            o.Proposal = {
                encode(e, t = i.default.Writer.create()) {
                    e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId), void 0 !== e.content && a.Any.encode(e.content, t.uint32(18).fork()).ldelim(), 0 !== e.status && t.uint32(24).int32(e.status), void 0 !== e.finalTallyResult && o.TallyResult.encode(e.finalTallyResult, t.uint32(34).fork()).ldelim(), void 0 !== e.submitTime && d.Timestamp.encode(k(e.submitTime), t.uint32(42).fork()).ldelim(), void 0 !== e.depositEndTime && d.Timestamp.encode(k(e.depositEndTime), t.uint32(50).fork()).ldelim();
                    for (const o of e.totalDeposit) l.Coin.encode(o, t.uint32(58).fork()).ldelim();
                    return void 0 !== e.votingStartTime && d.Timestamp.encode(k(e.votingStartTime), t.uint32(66).fork()).ldelim(), void 0 !== e.votingEndTime && d.Timestamp.encode(k(e.votingEndTime), t.uint32(74).fork()).ldelim(), t
                },
                decode(e, t) {
                    const s = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === t ? s.len : s.pos + t;
                    const n = Object.assign({}, h);
                    for (n.totalDeposit = []; s.pos < r;) {
                        const e = s.uint32();
                        switch (e >>> 3) {
                            case 1:
                                n.proposalId = s.uint64();
                                break;
                            case 2:
                                n.content = a.Any.decode(s, s.uint32());
                                break;
                            case 3:
                                n.status = s.int32();
                                break;
                            case 4:
                                n.finalTallyResult = o.TallyResult.decode(s, s.uint32());
                                break;
                            case 5:
                                n.submitTime = D(d.Timestamp.decode(s, s.uint32()));
                                break;
                            case 6:
                                n.depositEndTime = D(d.Timestamp.decode(s, s.uint32()));
                                break;
                            case 7:
                                n.totalDeposit.push(l.Coin.decode(s, s.uint32()));
                                break;
                            case 8:
                                n.votingStartTime = D(d.Timestamp.decode(s, s.uint32()));
                                break;
                            case 9:
                                n.votingEndTime = D(d.Timestamp.decode(s, s.uint32()));
                                break;
                            default:
                                s.skipType(7 & e)
                        }
                    }
                    return n
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    if (t.totalDeposit = [], void 0 !== e.proposalId && null !== e.proposalId ? t.proposalId = r.default.fromString(e.proposalId) : t.proposalId = r.default.UZERO, void 0 !== e.content && null !== e.content ? t.content = a.Any.fromJSON(e.content) : t.content = void 0, void 0 !== e.status && null !== e.status ? t.status = v(e.status) : t.status = 0, void 0 !== e.finalTallyResult && null !== e.finalTallyResult ? t.finalTallyResult = o.TallyResult.fromJSON(e.finalTallyResult) : t.finalTallyResult = void 0, void 0 !== e.submitTime && null !== e.submitTime ? t.submitTime = E(e.submitTime) : t.submitTime = void 0, void 0 !== e.depositEndTime && null !== e.depositEndTime ? t.depositEndTime = E(e.depositEndTime) : t.depositEndTime = void 0, void 0 !== e.totalDeposit && null !== e.totalDeposit)
                        for (const o of e.totalDeposit) t.totalDeposit.push(l.Coin.fromJSON(o));
                    return void 0 !== e.votingStartTime && null !== e.votingStartTime ? t.votingStartTime = E(e.votingStartTime) : t.votingStartTime = void 0, void 0 !== e.votingEndTime && null !== e.votingEndTime ? t.votingEndTime = E(e.votingEndTime) : t.votingEndTime = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.proposalId && (t.proposalId = (e.proposalId || r.default.UZERO).toString()), void 0 !== e.content && (t.content = e.content ? a.Any.toJSON(e.content) : void 0), void 0 !== e.status && (t.status = g(e.status)), void 0 !== e.finalTallyResult && (t.finalTallyResult = e.finalTallyResult ? o.TallyResult.toJSON(e.finalTallyResult) : void 0), void 0 !== e.submitTime && (t.submitTime = e.submitTime.toISOString()), void 0 !== e.depositEndTime && (t.depositEndTime = e.depositEndTime.toISOString()), e.totalDeposit ? t.totalDeposit = e.totalDeposit.map(e => e ? l.Coin.toJSON(e) : void 0) : t.totalDeposit = [], void 0 !== e.votingStartTime && (t.votingStartTime = e.votingStartTime.toISOString()), void 0 !== e.votingEndTime && (t.votingEndTime = e.votingEndTime.toISOString()), t
                },
                fromPartial(e) {
                    var t, s, i, n, d;
                    const u = Object.assign({}, h);
                    if (void 0 !== e.proposalId && null !== e.proposalId ? u.proposalId = e.proposalId : u.proposalId = r.default.UZERO, void 0 !== e.content && null !== e.content ? u.content = a.Any.fromPartial(e.content) : u.content = void 0, u.status = null !== (t = e.status) && void 0 !== t ? t : 0, void 0 !== e.finalTallyResult && null !== e.finalTallyResult ? u.finalTallyResult = o.TallyResult.fromPartial(e.finalTallyResult) : u.finalTallyResult = void 0, u.submitTime = null !== (s = e.submitTime) && void 0 !== s ? s : void 0, u.depositEndTime = null !== (i = e.depositEndTime) && void 0 !== i ? i : void 0, u.totalDeposit = [], void 0 !== e.totalDeposit && null !== e.totalDeposit)
                        for (const o of e.totalDeposit) u.totalDeposit.push(l.Coin.fromPartial(o));
                    return u.votingStartTime = null !== (n = e.votingStartTime) && void 0 !== n ? n : void 0, u.votingEndTime = null !== (d = e.votingEndTime) && void 0 !== d ? d : void 0, u
                }
            };
            const R = {
                yes: "",
                abstain: "",
                no: "",
                noWithVeto: ""
            };
            o.TallyResult = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.yes && o.uint32(10).string(e.yes), "" !== e.abstain && o.uint32(18).string(e.abstain), "" !== e.no && o.uint32(26).string(e.no), "" !== e.noWithVeto && o.uint32(34).string(e.noWithVeto), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, R);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.yes = t.string();
                                break;
                            case 2:
                                r.abstain = t.string();
                                break;
                            case 3:
                                r.no = t.string();
                                break;
                            case 4:
                                r.noWithVeto = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, R);
                    return void 0 !== e.yes && null !== e.yes ? o.yes = String(e.yes) : o.yes = "", void 0 !== e.abstain && null !== e.abstain ? o.abstain = String(e.abstain) : o.abstain = "", void 0 !== e.no && null !== e.no ? o.no = String(e.no) : o.no = "", void 0 !== e.noWithVeto && null !== e.noWithVeto ? o.noWithVeto = String(e.noWithVeto) : o.noWithVeto = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.yes && (o.yes = e.yes), void 0 !== e.abstain && (o.abstain = e.abstain), void 0 !== e.no && (o.no = e.no), void 0 !== e.noWithVeto && (o.noWithVeto = e.noWithVeto), o
                },
                fromPartial(e) {
                    var o, t, s, r;
                    const i = Object.assign({}, R);
                    return i.yes = null !== (o = e.yes) && void 0 !== o ? o : "", i.abstain = null !== (t = e.abstain) && void 0 !== t ? t : "", i.no = null !== (s = e.no) && void 0 !== s ? s : "", i.noWithVeto = null !== (r = e.noWithVeto) && void 0 !== r ? r : "", i
                }
            };
            const P = {
                proposalId: r.default.UZERO,
                voter: "",
                option: 0
            };
            o.Vote = {
                encode: (e, o = i.default.Writer.create()) => (e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), "" !== e.voter && o.uint32(18).string(e.voter), 0 !== e.option && o.uint32(24).int32(e.option), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, P);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = t.uint64();
                                break;
                            case 2:
                                r.voter = t.string();
                                break;
                            case 3:
                                r.option = t.int32();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, P);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = r.default.fromString(e.proposalId) : o.proposalId = r.default.UZERO, void 0 !== e.voter && null !== e.voter ? o.voter = String(e.voter) : o.voter = "", void 0 !== e.option && null !== e.option ? o.option = p(e.option) : o.option = 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || r.default.UZERO).toString()), void 0 !== e.voter && (o.voter = e.voter), void 0 !== e.option && (o.option = f(e.option)), o
                },
                fromPartial(e) {
                    var o, t;
                    const s = Object.assign({}, P);
                    return void 0 !== e.proposalId && null !== e.proposalId ? s.proposalId = e.proposalId : s.proposalId = r.default.UZERO, s.voter = null !== (o = e.voter) && void 0 !== o ? o : "", s.option = null !== (t = e.option) && void 0 !== t ? t : 0, s
                }
            };
            const S = {};
            o.DepositParams = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.minDeposit) l.Coin.encode(t, o.uint32(10).fork()).ldelim();
                    return void 0 !== e.maxDepositPeriod && n.Duration.encode(e.maxDepositPeriod, o.uint32(18).fork()).ldelim(), o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, S);
                    for (r.minDeposit = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.minDeposit.push(l.Coin.decode(t, t.uint32()));
                                break;
                            case 2:
                                r.maxDepositPeriod = n.Duration.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, S);
                    if (o.minDeposit = [], void 0 !== e.minDeposit && null !== e.minDeposit)
                        for (const t of e.minDeposit) o.minDeposit.push(l.Coin.fromJSON(t));
                    return void 0 !== e.maxDepositPeriod && null !== e.maxDepositPeriod ? o.maxDepositPeriod = n.Duration.fromJSON(e.maxDepositPeriod) : o.maxDepositPeriod = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return e.minDeposit ? o.minDeposit = e.minDeposit.map(e => e ? l.Coin.toJSON(e) : void 0) : o.minDeposit = [], void 0 !== e.maxDepositPeriod && (o.maxDepositPeriod = e.maxDepositPeriod ? n.Duration.toJSON(e.maxDepositPeriod) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, S);
                    if (o.minDeposit = [], void 0 !== e.minDeposit && null !== e.minDeposit)
                        for (const t of e.minDeposit) o.minDeposit.push(l.Coin.fromPartial(t));
                    return void 0 !== e.maxDepositPeriod && null !== e.maxDepositPeriod ? o.maxDepositPeriod = n.Duration.fromPartial(e.maxDepositPeriod) : o.maxDepositPeriod = void 0, o
                }
            };
            const b = {};
            o.VotingParams = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.votingPeriod && n.Duration.encode(e.votingPeriod, o.uint32(10).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, b);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.votingPeriod = n.Duration.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, b);
                    return void 0 !== e.votingPeriod && null !== e.votingPeriod ? o.votingPeriod = n.Duration.fromJSON(e.votingPeriod) : o.votingPeriod = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.votingPeriod && (o.votingPeriod = e.votingPeriod ? n.Duration.toJSON(e.votingPeriod) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, b);
                    return void 0 !== e.votingPeriod && null !== e.votingPeriod ? o.votingPeriod = n.Duration.fromPartial(e.votingPeriod) : o.votingPeriod = void 0, o
                }
            };
            const w = {};
            o.TallyParams = {
                encode: (e, o = i.default.Writer.create()) => (0 !== e.quorum.length && o.uint32(10).bytes(e.quorum), 0 !== e.threshold.length && o.uint32(18).bytes(e.threshold), 0 !== e.vetoThreshold.length && o.uint32(26).bytes(e.vetoThreshold), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, w);
                    for (r.quorum = new Uint8Array, r.threshold = new Uint8Array, r.vetoThreshold = new Uint8Array; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.quorum = t.bytes();
                                break;
                            case 2:
                                r.threshold = t.bytes();
                                break;
                            case 3:
                                r.vetoThreshold = t.bytes();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, w);
                    return o.quorum = new Uint8Array, o.threshold = new Uint8Array, o.vetoThreshold = new Uint8Array, void 0 !== e.quorum && null !== e.quorum && (o.quorum = A(e.quorum)), void 0 !== e.threshold && null !== e.threshold && (o.threshold = A(e.threshold)), void 0 !== e.vetoThreshold && null !== e.vetoThreshold && (o.vetoThreshold = A(e.vetoThreshold)), o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.quorum && (o.quorum = I(void 0 !== e.quorum ? e.quorum : new Uint8Array)), void 0 !== e.threshold && (o.threshold = I(void 0 !== e.threshold ? e.threshold : new Uint8Array)), void 0 !== e.vetoThreshold && (o.vetoThreshold = I(void 0 !== e.vetoThreshold ? e.vetoThreshold : new Uint8Array)), o
                },
                fromPartial(e) {
                    var o, t, s;
                    const r = Object.assign({}, w);
                    return r.quorum = null !== (o = e.quorum) && void 0 !== o ? o : new Uint8Array, r.threshold = null !== (t = e.threshold) && void 0 !== t ? t : new Uint8Array, r.vetoThreshold = null !== (s = e.vetoThreshold) && void 0 !== s ? s : new Uint8Array, r
                }
            };
            var y = (() => {
                if (void 0 !== y) return y;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const T = y.atob || (e => y.Buffer.from(e, "base64").toString("binary"));

            function A(e) {
                const o = T(e),
                    t = new Uint8Array(o.length);
                for (let e = 0; e < o.length; ++e) t[e] = o.charCodeAt(e);
                return t
            }
            const N = y.btoa || (e => y.Buffer.from(e, "binary").toString("base64"));

            function I(e) {
                const o = [];
                for (const t of e) o.push(String.fromCharCode(t));
                return N(o.join(""))
            }

            function k(e) {
                var o;
                return {
                    seconds: (o = e.getTime() / 1e3, r.default.fromNumber(o)),
                    nanos: e.getTime() % 1e3 * 1e6
                }
            }

            function D(e) {
                let o = 1e3 * e.seconds.toNumber();
                return o += e.nanos / 1e6, new Date(o)
            }

            function E(e) {
                return e instanceof Date ? e : "string" == typeof e ? new Date(e) : D(d.Timestamp.fromJSON(e))
            }
            i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        4286: function(e, o, t) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.LegacyAminoPubKey = o.protobufPackage = void 0;
            const r = s(t(1)),
                i = s(t(8)),
                a = t(113);
            o.protobufPackage = "cosmos.crypto.multisig";
            const n = {
                threshold: 0
            };
            o.LegacyAminoPubKey = {
                encode(e, o = i.default.Writer.create()) {
                    0 !== e.threshold && o.uint32(8).uint32(e.threshold);
                    for (const t of e.publicKeys) a.Any.encode(t, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, n);
                    for (r.publicKeys = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.threshold = t.uint32();
                                break;
                            case 2:
                                r.publicKeys.push(a.Any.decode(t, t.uint32()));
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, n);
                    if (o.publicKeys = [], void 0 !== e.threshold && null !== e.threshold ? o.threshold = Number(e.threshold) : o.threshold = 0, void 0 !== e.publicKeys && null !== e.publicKeys)
                        for (const t of e.publicKeys) o.publicKeys.push(a.Any.fromJSON(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.threshold && (o.threshold = e.threshold), e.publicKeys ? o.publicKeys = e.publicKeys.map(e => e ? a.Any.toJSON(e) : void 0) : o.publicKeys = [], o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, n);
                    if (t.threshold = null !== (o = e.threshold) && void 0 !== o ? o : 0, t.publicKeys = [], void 0 !== e.publicKeys && null !== e.publicKeys)
                        for (const o of e.publicKeys) t.publicKeys.push(a.Any.fromPartial(o));
                    return t
                }
            }, i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        4287: function(e, o, t) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.PrivKey = o.PubKey = o.protobufPackage = void 0;
            const r = s(t(1)),
                i = s(t(8));
            o.protobufPackage = "cosmos.crypto.secp256k1";
            const a = {};
            o.PubKey = {
                encode: (e, o = i.default.Writer.create()) => (0 !== e.key.length && o.uint32(10).bytes(e.key), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, a);
                    for (r.key = new Uint8Array; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.key = t.bytes();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, a);
                    return o.key = new Uint8Array, void 0 !== e.key && null !== e.key && (o.key = u(e.key)), o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.key && (o.key = p(void 0 !== e.key ? e.key : new Uint8Array)), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, a);
                    return t.key = null !== (o = e.key) && void 0 !== o ? o : new Uint8Array, t
                }
            };
            const n = {};
            o.PrivKey = {
                encode: (e, o = i.default.Writer.create()) => (0 !== e.key.length && o.uint32(10).bytes(e.key), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, n);
                    for (r.key = new Uint8Array; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.key = t.bytes();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, n);
                    return o.key = new Uint8Array, void 0 !== e.key && null !== e.key && (o.key = u(e.key)), o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.key && (o.key = p(void 0 !== e.key ? e.key : new Uint8Array)), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, n);
                    return t.key = null !== (o = e.key) && void 0 !== o ? o : new Uint8Array, t
                }
            };
            var d = (() => {
                if (void 0 !== d) return d;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const l = d.atob || (e => d.Buffer.from(e, "base64").toString("binary"));

            function u(e) {
                const o = l(e),
                    t = new Uint8Array(o.length);
                for (let e = 0; e < o.length; ++e) t[e] = o.charCodeAt(e);
                return t
            }
            const c = d.btoa || (e => d.Buffer.from(e, "binary").toString("base64"));

            function p(e) {
                const o = [];
                for (const t of e) o.push(String.fromCharCode(t));
                return c(o.join(""))
            }
            i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        4324: function(e, o, t) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.QueryClientImpl = o.QueryCommunityPoolResponse = o.QueryCommunityPoolRequest = o.QueryDelegatorWithdrawAddressResponse = o.QueryDelegatorWithdrawAddressRequest = o.QueryDelegatorValidatorsResponse = o.QueryDelegatorValidatorsRequest = o.QueryDelegationTotalRewardsResponse = o.QueryDelegationTotalRewardsRequest = o.QueryDelegationRewardsResponse = o.QueryDelegationRewardsRequest = o.QueryValidatorSlashesResponse = o.QueryValidatorSlashesRequest = o.QueryValidatorCommissionResponse = o.QueryValidatorCommissionRequest = o.QueryValidatorOutstandingRewardsResponse = o.QueryValidatorOutstandingRewardsRequest = o.QueryParamsResponse = o.QueryParamsRequest = o.protobufPackage = void 0;
            const r = s(t(1)),
                i = s(t(8)),
                a = t(4325),
                n = t(295),
                d = t(160);
            o.protobufPackage = "cosmos.distribution.v1beta1";
            const l = {};
            o.QueryParamsRequest = {
                encode: (e, o = i.default.Writer.create()) => o,
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, l);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return r
                },
                fromJSON: e => Object.assign({}, l),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, l)
            };
            const u = {};
            o.QueryParamsResponse = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.params && a.Params.encode(e.params, o.uint32(10).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, u);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.params = a.Params.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, u);
                    return void 0 !== e.params && null !== e.params ? o.params = a.Params.fromJSON(e.params) : o.params = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.params && (o.params = e.params ? a.Params.toJSON(e.params) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, u);
                    return void 0 !== e.params && null !== e.params ? o.params = a.Params.fromPartial(e.params) : o.params = void 0, o
                }
            };
            const c = {
                validatorAddress: ""
            };
            o.QueryValidatorOutstandingRewardsRequest = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.validatorAddress && o.uint32(10).string(e.validatorAddress), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, c);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.validatorAddress = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, c);
                    return void 0 !== e.validatorAddress && null !== e.validatorAddress ? o.validatorAddress = String(e.validatorAddress) : o.validatorAddress = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.validatorAddress && (o.validatorAddress = e.validatorAddress), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, c);
                    return t.validatorAddress = null !== (o = e.validatorAddress) && void 0 !== o ? o : "", t
                }
            };
            const p = {};
            o.QueryValidatorOutstandingRewardsResponse = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.rewards && a.ValidatorOutstandingRewards.encode(e.rewards, o.uint32(10).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, p);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.rewards = a.ValidatorOutstandingRewards.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, p);
                    return void 0 !== e.rewards && null !== e.rewards ? o.rewards = a.ValidatorOutstandingRewards.fromJSON(e.rewards) : o.rewards = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.rewards && (o.rewards = e.rewards ? a.ValidatorOutstandingRewards.toJSON(e.rewards) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, p);
                    return void 0 !== e.rewards && null !== e.rewards ? o.rewards = a.ValidatorOutstandingRewards.fromPartial(e.rewards) : o.rewards = void 0, o
                }
            };
            const f = {
                validatorAddress: ""
            };
            o.QueryValidatorCommissionRequest = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.validatorAddress && o.uint32(10).string(e.validatorAddress), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, f);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.validatorAddress = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, f);
                    return void 0 !== e.validatorAddress && null !== e.validatorAddress ? o.validatorAddress = String(e.validatorAddress) : o.validatorAddress = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.validatorAddress && (o.validatorAddress = e.validatorAddress), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, f);
                    return t.validatorAddress = null !== (o = e.validatorAddress) && void 0 !== o ? o : "", t
                }
            };
            const v = {};
            o.QueryValidatorCommissionResponse = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.commission && a.ValidatorAccumulatedCommission.encode(e.commission, o.uint32(10).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, v);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.commission = a.ValidatorAccumulatedCommission.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, v);
                    return void 0 !== e.commission && null !== e.commission ? o.commission = a.ValidatorAccumulatedCommission.fromJSON(e.commission) : o.commission = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.commission && (o.commission = e.commission ? a.ValidatorAccumulatedCommission.toJSON(e.commission) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, v);
                    return void 0 !== e.commission && null !== e.commission ? o.commission = a.ValidatorAccumulatedCommission.fromPartial(e.commission) : o.commission = void 0, o
                }
            };
            const g = {
                validatorAddress: "",
                startingHeight: r.default.UZERO,
                endingHeight: r.default.UZERO
            };
            o.QueryValidatorSlashesRequest = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.validatorAddress && o.uint32(10).string(e.validatorAddress), e.startingHeight.isZero() || o.uint32(16).uint64(e.startingHeight), e.endingHeight.isZero() || o.uint32(24).uint64(e.endingHeight), void 0 !== e.pagination && n.PageRequest.encode(e.pagination, o.uint32(34).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, g);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.validatorAddress = t.string();
                                break;
                            case 2:
                                r.startingHeight = t.uint64();
                                break;
                            case 3:
                                r.endingHeight = t.uint64();
                                break;
                            case 4:
                                r.pagination = n.PageRequest.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, g);
                    return void 0 !== e.validatorAddress && null !== e.validatorAddress ? o.validatorAddress = String(e.validatorAddress) : o.validatorAddress = "", void 0 !== e.startingHeight && null !== e.startingHeight ? o.startingHeight = r.default.fromString(e.startingHeight) : o.startingHeight = r.default.UZERO, void 0 !== e.endingHeight && null !== e.endingHeight ? o.endingHeight = r.default.fromString(e.endingHeight) : o.endingHeight = r.default.UZERO, void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageRequest.fromJSON(e.pagination) : o.pagination = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.validatorAddress && (o.validatorAddress = e.validatorAddress), void 0 !== e.startingHeight && (o.startingHeight = (e.startingHeight || r.default.UZERO).toString()), void 0 !== e.endingHeight && (o.endingHeight = (e.endingHeight || r.default.UZERO).toString()), void 0 !== e.pagination && (o.pagination = e.pagination ? n.PageRequest.toJSON(e.pagination) : void 0), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, g);
                    return t.validatorAddress = null !== (o = e.validatorAddress) && void 0 !== o ? o : "", void 0 !== e.startingHeight && null !== e.startingHeight ? t.startingHeight = e.startingHeight : t.startingHeight = r.default.UZERO, void 0 !== e.endingHeight && null !== e.endingHeight ? t.endingHeight = e.endingHeight : t.endingHeight = r.default.UZERO, void 0 !== e.pagination && null !== e.pagination ? t.pagination = n.PageRequest.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const m = {};
            o.QueryValidatorSlashesResponse = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.slashes) a.ValidatorSlashEvent.encode(t, o.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && n.PageResponse.encode(e.pagination, o.uint32(18).fork()).ldelim(), o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, m);
                    for (r.slashes = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.slashes.push(a.ValidatorSlashEvent.decode(t, t.uint32()));
                                break;
                            case 2:
                                r.pagination = n.PageResponse.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, m);
                    if (o.slashes = [], void 0 !== e.slashes && null !== e.slashes)
                        for (const t of e.slashes) o.slashes.push(a.ValidatorSlashEvent.fromJSON(t));
                    return void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageResponse.fromJSON(e.pagination) : o.pagination = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return e.slashes ? o.slashes = e.slashes.map(e => e ? a.ValidatorSlashEvent.toJSON(e) : void 0) : o.slashes = [], void 0 !== e.pagination && (o.pagination = e.pagination ? n.PageResponse.toJSON(e.pagination) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, m);
                    if (o.slashes = [], void 0 !== e.slashes && null !== e.slashes)
                        for (const t of e.slashes) o.slashes.push(a.ValidatorSlashEvent.fromPartial(t));
                    return void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageResponse.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const O = {
                delegatorAddress: "",
                validatorAddress: ""
            };
            o.QueryDelegationRewardsRequest = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.delegatorAddress && o.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && o.uint32(18).string(e.validatorAddress), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, O);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.delegatorAddress = t.string();
                                break;
                            case 2:
                                r.validatorAddress = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, O);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? o.delegatorAddress = String(e.delegatorAddress) : o.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? o.validatorAddress = String(e.validatorAddress) : o.validatorAddress = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.delegatorAddress && (o.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (o.validatorAddress = e.validatorAddress), o
                },
                fromPartial(e) {
                    var o, t;
                    const s = Object.assign({}, O);
                    return s.delegatorAddress = null !== (o = e.delegatorAddress) && void 0 !== o ? o : "", s.validatorAddress = null !== (t = e.validatorAddress) && void 0 !== t ? t : "", s
                }
            };
            const h = {};
            o.QueryDelegationRewardsResponse = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.rewards) d.DecCoin.encode(t, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, h);
                    for (r.rewards = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.rewards.push(d.DecCoin.decode(t, t.uint32()));
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, h);
                    if (o.rewards = [], void 0 !== e.rewards && null !== e.rewards)
                        for (const t of e.rewards) o.rewards.push(d.DecCoin.fromJSON(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.rewards ? o.rewards = e.rewards.map(e => e ? d.DecCoin.toJSON(e) : void 0) : o.rewards = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, h);
                    if (o.rewards = [], void 0 !== e.rewards && null !== e.rewards)
                        for (const t of e.rewards) o.rewards.push(d.DecCoin.fromPartial(t));
                    return o
                }
            };
            const R = {
                delegatorAddress: ""
            };
            o.QueryDelegationTotalRewardsRequest = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.delegatorAddress && o.uint32(10).string(e.delegatorAddress), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, R);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.delegatorAddress = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, R);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? o.delegatorAddress = String(e.delegatorAddress) : o.delegatorAddress = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.delegatorAddress && (o.delegatorAddress = e.delegatorAddress), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, R);
                    return t.delegatorAddress = null !== (o = e.delegatorAddress) && void 0 !== o ? o : "", t
                }
            };
            const P = {};
            o.QueryDelegationTotalRewardsResponse = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.rewards) a.DelegationDelegatorReward.encode(t, o.uint32(10).fork()).ldelim();
                    for (const t of e.total) d.DecCoin.encode(t, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, P);
                    for (r.rewards = [], r.total = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.rewards.push(a.DelegationDelegatorReward.decode(t, t.uint32()));
                                break;
                            case 2:
                                r.total.push(d.DecCoin.decode(t, t.uint32()));
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, P);
                    if (o.rewards = [], o.total = [], void 0 !== e.rewards && null !== e.rewards)
                        for (const t of e.rewards) o.rewards.push(a.DelegationDelegatorReward.fromJSON(t));
                    if (void 0 !== e.total && null !== e.total)
                        for (const t of e.total) o.total.push(d.DecCoin.fromJSON(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.rewards ? o.rewards = e.rewards.map(e => e ? a.DelegationDelegatorReward.toJSON(e) : void 0) : o.rewards = [], e.total ? o.total = e.total.map(e => e ? d.DecCoin.toJSON(e) : void 0) : o.total = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, P);
                    if (o.rewards = [], void 0 !== e.rewards && null !== e.rewards)
                        for (const t of e.rewards) o.rewards.push(a.DelegationDelegatorReward.fromPartial(t));
                    if (o.total = [], void 0 !== e.total && null !== e.total)
                        for (const t of e.total) o.total.push(d.DecCoin.fromPartial(t));
                    return o
                }
            };
            const S = {
                delegatorAddress: ""
            };
            o.QueryDelegatorValidatorsRequest = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.delegatorAddress && o.uint32(10).string(e.delegatorAddress), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, S);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.delegatorAddress = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, S);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? o.delegatorAddress = String(e.delegatorAddress) : o.delegatorAddress = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.delegatorAddress && (o.delegatorAddress = e.delegatorAddress), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, S);
                    return t.delegatorAddress = null !== (o = e.delegatorAddress) && void 0 !== o ? o : "", t
                }
            };
            const b = {
                validators: ""
            };
            o.QueryDelegatorValidatorsResponse = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.validators) o.uint32(10).string(t);
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, b);
                    for (r.validators = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.validators.push(t.string());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, b);
                    if (o.validators = [], void 0 !== e.validators && null !== e.validators)
                        for (const t of e.validators) o.validators.push(String(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.validators ? o.validators = e.validators.map(e => e) : o.validators = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, b);
                    if (o.validators = [], void 0 !== e.validators && null !== e.validators)
                        for (const t of e.validators) o.validators.push(t);
                    return o
                }
            };
            const w = {
                delegatorAddress: ""
            };
            o.QueryDelegatorWithdrawAddressRequest = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.delegatorAddress && o.uint32(10).string(e.delegatorAddress), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, w);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.delegatorAddress = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, w);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? o.delegatorAddress = String(e.delegatorAddress) : o.delegatorAddress = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.delegatorAddress && (o.delegatorAddress = e.delegatorAddress), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, w);
                    return t.delegatorAddress = null !== (o = e.delegatorAddress) && void 0 !== o ? o : "", t
                }
            };
            const y = {
                withdrawAddress: ""
            };
            o.QueryDelegatorWithdrawAddressResponse = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.withdrawAddress && o.uint32(10).string(e.withdrawAddress), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, y);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.withdrawAddress = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, y);
                    return void 0 !== e.withdrawAddress && null !== e.withdrawAddress ? o.withdrawAddress = String(e.withdrawAddress) : o.withdrawAddress = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.withdrawAddress && (o.withdrawAddress = e.withdrawAddress), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, y);
                    return t.withdrawAddress = null !== (o = e.withdrawAddress) && void 0 !== o ? o : "", t
                }
            };
            const T = {};
            o.QueryCommunityPoolRequest = {
                encode: (e, o = i.default.Writer.create()) => o,
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, T);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return r
                },
                fromJSON: e => Object.assign({}, T),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, T)
            };
            const A = {};
            o.QueryCommunityPoolResponse = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.pool) d.DecCoin.encode(t, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, A);
                    for (r.pool = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.pool.push(d.DecCoin.decode(t, t.uint32()));
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, A);
                    if (o.pool = [], void 0 !== e.pool && null !== e.pool)
                        for (const t of e.pool) o.pool.push(d.DecCoin.fromJSON(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.pool ? o.pool = e.pool.map(e => e ? d.DecCoin.toJSON(e) : void 0) : o.pool = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, A);
                    if (o.pool = [], void 0 !== e.pool && null !== e.pool)
                        for (const t of e.pool) o.pool.push(d.DecCoin.fromPartial(t));
                    return o
                }
            };
            o.QueryClientImpl = class QueryClientImpl {
                constructor(e) {
                    this.rpc = e, this.Params = this.Params.bind(this), this.ValidatorOutstandingRewards = this.ValidatorOutstandingRewards.bind(this), this.ValidatorCommission = this.ValidatorCommission.bind(this), this.ValidatorSlashes = this.ValidatorSlashes.bind(this), this.DelegationRewards = this.DelegationRewards.bind(this), this.DelegationTotalRewards = this.DelegationTotalRewards.bind(this), this.DelegatorValidators = this.DelegatorValidators.bind(this), this.DelegatorWithdrawAddress = this.DelegatorWithdrawAddress.bind(this), this.CommunityPool = this.CommunityPool.bind(this)
                }
                Params(e) {
                    const t = o.QueryParamsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", t).then(e => o.QueryParamsResponse.decode(new i.default.Reader(e)))
                }
                ValidatorOutstandingRewards(e) {
                    const t = o.QueryValidatorOutstandingRewardsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", t).then(e => o.QueryValidatorOutstandingRewardsResponse.decode(new i.default.Reader(e)))
                }
                ValidatorCommission(e) {
                    const t = o.QueryValidatorCommissionRequest.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", t).then(e => o.QueryValidatorCommissionResponse.decode(new i.default.Reader(e)))
                }
                ValidatorSlashes(e) {
                    const t = o.QueryValidatorSlashesRequest.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", t).then(e => o.QueryValidatorSlashesResponse.decode(new i.default.Reader(e)))
                }
                DelegationRewards(e) {
                    const t = o.QueryDelegationRewardsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", t).then(e => o.QueryDelegationRewardsResponse.decode(new i.default.Reader(e)))
                }
                DelegationTotalRewards(e) {
                    const t = o.QueryDelegationTotalRewardsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", t).then(e => o.QueryDelegationTotalRewardsResponse.decode(new i.default.Reader(e)))
                }
                DelegatorValidators(e) {
                    const t = o.QueryDelegatorValidatorsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", t).then(e => o.QueryDelegatorValidatorsResponse.decode(new i.default.Reader(e)))
                }
                DelegatorWithdrawAddress(e) {
                    const t = o.QueryDelegatorWithdrawAddressRequest.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", t).then(e => o.QueryDelegatorWithdrawAddressResponse.decode(new i.default.Reader(e)))
                }
                CommunityPool(e) {
                    const t = o.QueryCommunityPoolRequest.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", t).then(e => o.QueryCommunityPoolResponse.decode(new i.default.Reader(e)))
                }
            }, i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        4325: function(e, o, t) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.CommunityPoolSpendProposalWithDeposit = o.DelegationDelegatorReward = o.DelegatorStartingInfo = o.CommunityPoolSpendProposal = o.FeePool = o.ValidatorSlashEvents = o.ValidatorSlashEvent = o.ValidatorOutstandingRewards = o.ValidatorAccumulatedCommission = o.ValidatorCurrentRewards = o.ValidatorHistoricalRewards = o.Params = o.protobufPackage = void 0;
            const r = s(t(1)),
                i = s(t(8)),
                a = t(160);
            o.protobufPackage = "cosmos.distribution.v1beta1";
            const n = {
                communityTax: "",
                baseProposerReward: "",
                bonusProposerReward: "",
                withdrawAddrEnabled: !1
            };
            o.Params = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.communityTax && o.uint32(10).string(e.communityTax), "" !== e.baseProposerReward && o.uint32(18).string(e.baseProposerReward), "" !== e.bonusProposerReward && o.uint32(26).string(e.bonusProposerReward), !0 === e.withdrawAddrEnabled && o.uint32(32).bool(e.withdrawAddrEnabled), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, n);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.communityTax = t.string();
                                break;
                            case 2:
                                r.baseProposerReward = t.string();
                                break;
                            case 3:
                                r.bonusProposerReward = t.string();
                                break;
                            case 4:
                                r.withdrawAddrEnabled = t.bool();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, n);
                    return void 0 !== e.communityTax && null !== e.communityTax ? o.communityTax = String(e.communityTax) : o.communityTax = "", void 0 !== e.baseProposerReward && null !== e.baseProposerReward ? o.baseProposerReward = String(e.baseProposerReward) : o.baseProposerReward = "", void 0 !== e.bonusProposerReward && null !== e.bonusProposerReward ? o.bonusProposerReward = String(e.bonusProposerReward) : o.bonusProposerReward = "", void 0 !== e.withdrawAddrEnabled && null !== e.withdrawAddrEnabled ? o.withdrawAddrEnabled = Boolean(e.withdrawAddrEnabled) : o.withdrawAddrEnabled = !1, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.communityTax && (o.communityTax = e.communityTax), void 0 !== e.baseProposerReward && (o.baseProposerReward = e.baseProposerReward), void 0 !== e.bonusProposerReward && (o.bonusProposerReward = e.bonusProposerReward), void 0 !== e.withdrawAddrEnabled && (o.withdrawAddrEnabled = e.withdrawAddrEnabled), o
                },
                fromPartial(e) {
                    var o, t, s, r;
                    const i = Object.assign({}, n);
                    return i.communityTax = null !== (o = e.communityTax) && void 0 !== o ? o : "", i.baseProposerReward = null !== (t = e.baseProposerReward) && void 0 !== t ? t : "", i.bonusProposerReward = null !== (s = e.bonusProposerReward) && void 0 !== s ? s : "", i.withdrawAddrEnabled = null !== (r = e.withdrawAddrEnabled) && void 0 !== r && r, i
                }
            };
            const d = {
                referenceCount: 0
            };
            o.ValidatorHistoricalRewards = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.cumulativeRewardRatio) a.DecCoin.encode(t, o.uint32(10).fork()).ldelim();
                    return 0 !== e.referenceCount && o.uint32(16).uint32(e.referenceCount), o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, d);
                    for (r.cumulativeRewardRatio = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.cumulativeRewardRatio.push(a.DecCoin.decode(t, t.uint32()));
                                break;
                            case 2:
                                r.referenceCount = t.uint32();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, d);
                    if (o.cumulativeRewardRatio = [], void 0 !== e.cumulativeRewardRatio && null !== e.cumulativeRewardRatio)
                        for (const t of e.cumulativeRewardRatio) o.cumulativeRewardRatio.push(a.DecCoin.fromJSON(t));
                    return void 0 !== e.referenceCount && null !== e.referenceCount ? o.referenceCount = Number(e.referenceCount) : o.referenceCount = 0, o
                },
                toJSON(e) {
                    const o = {};
                    return e.cumulativeRewardRatio ? o.cumulativeRewardRatio = e.cumulativeRewardRatio.map(e => e ? a.DecCoin.toJSON(e) : void 0) : o.cumulativeRewardRatio = [], void 0 !== e.referenceCount && (o.referenceCount = e.referenceCount), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, d);
                    if (t.cumulativeRewardRatio = [], void 0 !== e.cumulativeRewardRatio && null !== e.cumulativeRewardRatio)
                        for (const o of e.cumulativeRewardRatio) t.cumulativeRewardRatio.push(a.DecCoin.fromPartial(o));
                    return t.referenceCount = null !== (o = e.referenceCount) && void 0 !== o ? o : 0, t
                }
            };
            const l = {
                period: r.default.UZERO
            };
            o.ValidatorCurrentRewards = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.rewards) a.DecCoin.encode(t, o.uint32(10).fork()).ldelim();
                    return e.period.isZero() || o.uint32(16).uint64(e.period), o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, l);
                    for (r.rewards = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.rewards.push(a.DecCoin.decode(t, t.uint32()));
                                break;
                            case 2:
                                r.period = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, l);
                    if (o.rewards = [], void 0 !== e.rewards && null !== e.rewards)
                        for (const t of e.rewards) o.rewards.push(a.DecCoin.fromJSON(t));
                    return void 0 !== e.period && null !== e.period ? o.period = r.default.fromString(e.period) : o.period = r.default.UZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return e.rewards ? o.rewards = e.rewards.map(e => e ? a.DecCoin.toJSON(e) : void 0) : o.rewards = [], void 0 !== e.period && (o.period = (e.period || r.default.UZERO).toString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, l);
                    if (o.rewards = [], void 0 !== e.rewards && null !== e.rewards)
                        for (const t of e.rewards) o.rewards.push(a.DecCoin.fromPartial(t));
                    return void 0 !== e.period && null !== e.period ? o.period = e.period : o.period = r.default.UZERO, o
                }
            };
            const u = {};
            o.ValidatorAccumulatedCommission = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.commission) a.DecCoin.encode(t, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, u);
                    for (r.commission = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.commission.push(a.DecCoin.decode(t, t.uint32()));
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, u);
                    if (o.commission = [], void 0 !== e.commission && null !== e.commission)
                        for (const t of e.commission) o.commission.push(a.DecCoin.fromJSON(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.commission ? o.commission = e.commission.map(e => e ? a.DecCoin.toJSON(e) : void 0) : o.commission = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, u);
                    if (o.commission = [], void 0 !== e.commission && null !== e.commission)
                        for (const t of e.commission) o.commission.push(a.DecCoin.fromPartial(t));
                    return o
                }
            };
            const c = {};
            o.ValidatorOutstandingRewards = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.rewards) a.DecCoin.encode(t, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, c);
                    for (r.rewards = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.rewards.push(a.DecCoin.decode(t, t.uint32()));
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, c);
                    if (o.rewards = [], void 0 !== e.rewards && null !== e.rewards)
                        for (const t of e.rewards) o.rewards.push(a.DecCoin.fromJSON(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.rewards ? o.rewards = e.rewards.map(e => e ? a.DecCoin.toJSON(e) : void 0) : o.rewards = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, c);
                    if (o.rewards = [], void 0 !== e.rewards && null !== e.rewards)
                        for (const t of e.rewards) o.rewards.push(a.DecCoin.fromPartial(t));
                    return o
                }
            };
            const p = {
                validatorPeriod: r.default.UZERO,
                fraction: ""
            };
            o.ValidatorSlashEvent = {
                encode: (e, o = i.default.Writer.create()) => (e.validatorPeriod.isZero() || o.uint32(8).uint64(e.validatorPeriod), "" !== e.fraction && o.uint32(18).string(e.fraction), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, p);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.validatorPeriod = t.uint64();
                                break;
                            case 2:
                                r.fraction = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, p);
                    return void 0 !== e.validatorPeriod && null !== e.validatorPeriod ? o.validatorPeriod = r.default.fromString(e.validatorPeriod) : o.validatorPeriod = r.default.UZERO, void 0 !== e.fraction && null !== e.fraction ? o.fraction = String(e.fraction) : o.fraction = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.validatorPeriod && (o.validatorPeriod = (e.validatorPeriod || r.default.UZERO).toString()), void 0 !== e.fraction && (o.fraction = e.fraction), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, p);
                    return void 0 !== e.validatorPeriod && null !== e.validatorPeriod ? t.validatorPeriod = e.validatorPeriod : t.validatorPeriod = r.default.UZERO, t.fraction = null !== (o = e.fraction) && void 0 !== o ? o : "", t
                }
            };
            const f = {};
            o.ValidatorSlashEvents = {
                encode(e, t = i.default.Writer.create()) {
                    for (const s of e.validatorSlashEvents) o.ValidatorSlashEvent.encode(s, t.uint32(10).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const s = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let r = void 0 === t ? s.len : s.pos + t;
                    const a = Object.assign({}, f);
                    for (a.validatorSlashEvents = []; s.pos < r;) {
                        const e = s.uint32();
                        switch (e >>> 3) {
                            case 1:
                                a.validatorSlashEvents.push(o.ValidatorSlashEvent.decode(s, s.uint32()));
                                break;
                            default:
                                s.skipType(7 & e)
                        }
                    }
                    return a
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.validatorSlashEvents = [], void 0 !== e.validatorSlashEvents && null !== e.validatorSlashEvents)
                        for (const s of e.validatorSlashEvents) t.validatorSlashEvents.push(o.ValidatorSlashEvent.fromJSON(s));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.validatorSlashEvents ? t.validatorSlashEvents = e.validatorSlashEvents.map(e => e ? o.ValidatorSlashEvent.toJSON(e) : void 0) : t.validatorSlashEvents = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    if (t.validatorSlashEvents = [], void 0 !== e.validatorSlashEvents && null !== e.validatorSlashEvents)
                        for (const s of e.validatorSlashEvents) t.validatorSlashEvents.push(o.ValidatorSlashEvent.fromPartial(s));
                    return t
                }
            };
            const v = {};
            o.FeePool = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.communityPool) a.DecCoin.encode(t, o.uint32(10).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, v);
                    for (r.communityPool = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.communityPool.push(a.DecCoin.decode(t, t.uint32()));
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, v);
                    if (o.communityPool = [], void 0 !== e.communityPool && null !== e.communityPool)
                        for (const t of e.communityPool) o.communityPool.push(a.DecCoin.fromJSON(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return e.communityPool ? o.communityPool = e.communityPool.map(e => e ? a.DecCoin.toJSON(e) : void 0) : o.communityPool = [], o
                },
                fromPartial(e) {
                    const o = Object.assign({}, v);
                    if (o.communityPool = [], void 0 !== e.communityPool && null !== e.communityPool)
                        for (const t of e.communityPool) o.communityPool.push(a.DecCoin.fromPartial(t));
                    return o
                }
            };
            const g = {
                title: "",
                description: "",
                recipient: ""
            };
            o.CommunityPoolSpendProposal = {
                encode(e, o = i.default.Writer.create()) {
                    "" !== e.title && o.uint32(10).string(e.title), "" !== e.description && o.uint32(18).string(e.description), "" !== e.recipient && o.uint32(26).string(e.recipient);
                    for (const t of e.amount) a.Coin.encode(t, o.uint32(34).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, g);
                    for (r.amount = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.title = t.string();
                                break;
                            case 2:
                                r.description = t.string();
                                break;
                            case 3:
                                r.recipient = t.string();
                                break;
                            case 4:
                                r.amount.push(a.Coin.decode(t, t.uint32()));
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, g);
                    if (o.amount = [], void 0 !== e.title && null !== e.title ? o.title = String(e.title) : o.title = "", void 0 !== e.description && null !== e.description ? o.description = String(e.description) : o.description = "", void 0 !== e.recipient && null !== e.recipient ? o.recipient = String(e.recipient) : o.recipient = "", void 0 !== e.amount && null !== e.amount)
                        for (const t of e.amount) o.amount.push(a.Coin.fromJSON(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.title && (o.title = e.title), void 0 !== e.description && (o.description = e.description), void 0 !== e.recipient && (o.recipient = e.recipient), e.amount ? o.amount = e.amount.map(e => e ? a.Coin.toJSON(e) : void 0) : o.amount = [], o
                },
                fromPartial(e) {
                    var o, t, s;
                    const r = Object.assign({}, g);
                    if (r.title = null !== (o = e.title) && void 0 !== o ? o : "", r.description = null !== (t = e.description) && void 0 !== t ? t : "", r.recipient = null !== (s = e.recipient) && void 0 !== s ? s : "", r.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) r.amount.push(a.Coin.fromPartial(o));
                    return r
                }
            };
            const m = {
                previousPeriod: r.default.UZERO,
                stake: "",
                height: r.default.UZERO
            };
            o.DelegatorStartingInfo = {
                encode: (e, o = i.default.Writer.create()) => (e.previousPeriod.isZero() || o.uint32(8).uint64(e.previousPeriod), "" !== e.stake && o.uint32(18).string(e.stake), e.height.isZero() || o.uint32(24).uint64(e.height), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, m);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.previousPeriod = t.uint64();
                                break;
                            case 2:
                                r.stake = t.string();
                                break;
                            case 3:
                                r.height = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, m);
                    return void 0 !== e.previousPeriod && null !== e.previousPeriod ? o.previousPeriod = r.default.fromString(e.previousPeriod) : o.previousPeriod = r.default.UZERO, void 0 !== e.stake && null !== e.stake ? o.stake = String(e.stake) : o.stake = "", void 0 !== e.height && null !== e.height ? o.height = r.default.fromString(e.height) : o.height = r.default.UZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.previousPeriod && (o.previousPeriod = (e.previousPeriod || r.default.UZERO).toString()), void 0 !== e.stake && (o.stake = e.stake), void 0 !== e.height && (o.height = (e.height || r.default.UZERO).toString()), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, m);
                    return void 0 !== e.previousPeriod && null !== e.previousPeriod ? t.previousPeriod = e.previousPeriod : t.previousPeriod = r.default.UZERO, t.stake = null !== (o = e.stake) && void 0 !== o ? o : "", void 0 !== e.height && null !== e.height ? t.height = e.height : t.height = r.default.UZERO, t
                }
            };
            const O = {
                validatorAddress: ""
            };
            o.DelegationDelegatorReward = {
                encode(e, o = i.default.Writer.create()) {
                    "" !== e.validatorAddress && o.uint32(10).string(e.validatorAddress);
                    for (const t of e.reward) a.DecCoin.encode(t, o.uint32(18).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, O);
                    for (r.reward = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.validatorAddress = t.string();
                                break;
                            case 2:
                                r.reward.push(a.DecCoin.decode(t, t.uint32()));
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, O);
                    if (o.reward = [], void 0 !== e.validatorAddress && null !== e.validatorAddress ? o.validatorAddress = String(e.validatorAddress) : o.validatorAddress = "", void 0 !== e.reward && null !== e.reward)
                        for (const t of e.reward) o.reward.push(a.DecCoin.fromJSON(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.validatorAddress && (o.validatorAddress = e.validatorAddress), e.reward ? o.reward = e.reward.map(e => e ? a.DecCoin.toJSON(e) : void 0) : o.reward = [], o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, O);
                    if (t.validatorAddress = null !== (o = e.validatorAddress) && void 0 !== o ? o : "", t.reward = [], void 0 !== e.reward && null !== e.reward)
                        for (const o of e.reward) t.reward.push(a.DecCoin.fromPartial(o));
                    return t
                }
            };
            const h = {
                title: "",
                description: "",
                recipient: "",
                amount: "",
                deposit: ""
            };
            o.CommunityPoolSpendProposalWithDeposit = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.title && o.uint32(10).string(e.title), "" !== e.description && o.uint32(18).string(e.description), "" !== e.recipient && o.uint32(26).string(e.recipient), "" !== e.amount && o.uint32(34).string(e.amount), "" !== e.deposit && o.uint32(42).string(e.deposit), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, h);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.title = t.string();
                                break;
                            case 2:
                                r.description = t.string();
                                break;
                            case 3:
                                r.recipient = t.string();
                                break;
                            case 4:
                                r.amount = t.string();
                                break;
                            case 5:
                                r.deposit = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, h);
                    return void 0 !== e.title && null !== e.title ? o.title = String(e.title) : o.title = "", void 0 !== e.description && null !== e.description ? o.description = String(e.description) : o.description = "", void 0 !== e.recipient && null !== e.recipient ? o.recipient = String(e.recipient) : o.recipient = "", void 0 !== e.amount && null !== e.amount ? o.amount = String(e.amount) : o.amount = "", void 0 !== e.deposit && null !== e.deposit ? o.deposit = String(e.deposit) : o.deposit = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.title && (o.title = e.title), void 0 !== e.description && (o.description = e.description), void 0 !== e.recipient && (o.recipient = e.recipient), void 0 !== e.amount && (o.amount = e.amount), void 0 !== e.deposit && (o.deposit = e.deposit), o
                },
                fromPartial(e) {
                    var o, t, s, r, i;
                    const a = Object.assign({}, h);
                    return a.title = null !== (o = e.title) && void 0 !== o ? o : "", a.description = null !== (t = e.description) && void 0 !== t ? t : "", a.recipient = null !== (s = e.recipient) && void 0 !== s ? s : "", a.amount = null !== (r = e.amount) && void 0 !== r ? r : "", a.deposit = null !== (i = e.deposit) && void 0 !== i ? i : "", a
                }
            }, i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        4327: function(e, o, t) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.QueryClientImpl = o.QueryTallyResultResponse = o.QueryTallyResultRequest = o.QueryDepositsResponse = o.QueryDepositsRequest = o.QueryDepositResponse = o.QueryDepositRequest = o.QueryParamsResponse = o.QueryParamsRequest = o.QueryVotesResponse = o.QueryVotesRequest = o.QueryVoteResponse = o.QueryVoteRequest = o.QueryProposalsResponse = o.QueryProposalsRequest = o.QueryProposalResponse = o.QueryProposalRequest = o.protobufPackage = void 0;
            const r = s(t(1)),
                i = s(t(8)),
                a = t(1147),
                n = t(295);
            o.protobufPackage = "cosmos.gov.v1beta1";
            const d = {
                proposalId: r.default.UZERO
            };
            o.QueryProposalRequest = {
                encode: (e, o = i.default.Writer.create()) => (e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, d);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, d);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = r.default.fromString(e.proposalId) : o.proposalId = r.default.UZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || r.default.UZERO).toString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, d);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = e.proposalId : o.proposalId = r.default.UZERO, o
                }
            };
            const l = {};
            o.QueryProposalResponse = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.proposal && a.Proposal.encode(e.proposal, o.uint32(10).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, l);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposal = a.Proposal.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, l);
                    return void 0 !== e.proposal && null !== e.proposal ? o.proposal = a.Proposal.fromJSON(e.proposal) : o.proposal = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposal && (o.proposal = e.proposal ? a.Proposal.toJSON(e.proposal) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, l);
                    return void 0 !== e.proposal && null !== e.proposal ? o.proposal = a.Proposal.fromPartial(e.proposal) : o.proposal = void 0, o
                }
            };
            const u = {
                proposalStatus: 0,
                voter: "",
                depositor: ""
            };
            o.QueryProposalsRequest = {
                encode: (e, o = i.default.Writer.create()) => (0 !== e.proposalStatus && o.uint32(8).int32(e.proposalStatus), "" !== e.voter && o.uint32(18).string(e.voter), "" !== e.depositor && o.uint32(26).string(e.depositor), void 0 !== e.pagination && n.PageRequest.encode(e.pagination, o.uint32(34).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, u);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalStatus = t.int32();
                                break;
                            case 2:
                                r.voter = t.string();
                                break;
                            case 3:
                                r.depositor = t.string();
                                break;
                            case 4:
                                r.pagination = n.PageRequest.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, u);
                    return void 0 !== e.proposalStatus && null !== e.proposalStatus ? o.proposalStatus = a.proposalStatusFromJSON(e.proposalStatus) : o.proposalStatus = 0, void 0 !== e.voter && null !== e.voter ? o.voter = String(e.voter) : o.voter = "", void 0 !== e.depositor && null !== e.depositor ? o.depositor = String(e.depositor) : o.depositor = "", void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageRequest.fromJSON(e.pagination) : o.pagination = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalStatus && (o.proposalStatus = a.proposalStatusToJSON(e.proposalStatus)), void 0 !== e.voter && (o.voter = e.voter), void 0 !== e.depositor && (o.depositor = e.depositor), void 0 !== e.pagination && (o.pagination = e.pagination ? n.PageRequest.toJSON(e.pagination) : void 0), o
                },
                fromPartial(e) {
                    var o, t, s;
                    const r = Object.assign({}, u);
                    return r.proposalStatus = null !== (o = e.proposalStatus) && void 0 !== o ? o : 0, r.voter = null !== (t = e.voter) && void 0 !== t ? t : "", r.depositor = null !== (s = e.depositor) && void 0 !== s ? s : "", void 0 !== e.pagination && null !== e.pagination ? r.pagination = n.PageRequest.fromPartial(e.pagination) : r.pagination = void 0, r
                }
            };
            const c = {};
            o.QueryProposalsResponse = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.proposals) a.Proposal.encode(t, o.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && n.PageResponse.encode(e.pagination, o.uint32(18).fork()).ldelim(), o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, c);
                    for (r.proposals = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposals.push(a.Proposal.decode(t, t.uint32()));
                                break;
                            case 2:
                                r.pagination = n.PageResponse.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, c);
                    if (o.proposals = [], void 0 !== e.proposals && null !== e.proposals)
                        for (const t of e.proposals) o.proposals.push(a.Proposal.fromJSON(t));
                    return void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageResponse.fromJSON(e.pagination) : o.pagination = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return e.proposals ? o.proposals = e.proposals.map(e => e ? a.Proposal.toJSON(e) : void 0) : o.proposals = [], void 0 !== e.pagination && (o.pagination = e.pagination ? n.PageResponse.toJSON(e.pagination) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, c);
                    if (o.proposals = [], void 0 !== e.proposals && null !== e.proposals)
                        for (const t of e.proposals) o.proposals.push(a.Proposal.fromPartial(t));
                    return void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageResponse.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const p = {
                proposalId: r.default.UZERO,
                voter: ""
            };
            o.QueryVoteRequest = {
                encode: (e, o = i.default.Writer.create()) => (e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), "" !== e.voter && o.uint32(18).string(e.voter), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, p);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = t.uint64();
                                break;
                            case 2:
                                r.voter = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, p);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = r.default.fromString(e.proposalId) : o.proposalId = r.default.UZERO, void 0 !== e.voter && null !== e.voter ? o.voter = String(e.voter) : o.voter = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || r.default.UZERO).toString()), void 0 !== e.voter && (o.voter = e.voter), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, p);
                    return void 0 !== e.proposalId && null !== e.proposalId ? t.proposalId = e.proposalId : t.proposalId = r.default.UZERO, t.voter = null !== (o = e.voter) && void 0 !== o ? o : "", t
                }
            };
            const f = {};
            o.QueryVoteResponse = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.vote && a.Vote.encode(e.vote, o.uint32(10).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, f);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.vote = a.Vote.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, f);
                    return void 0 !== e.vote && null !== e.vote ? o.vote = a.Vote.fromJSON(e.vote) : o.vote = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.vote && (o.vote = e.vote ? a.Vote.toJSON(e.vote) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, f);
                    return void 0 !== e.vote && null !== e.vote ? o.vote = a.Vote.fromPartial(e.vote) : o.vote = void 0, o
                }
            };
            const v = {
                proposalId: r.default.UZERO
            };
            o.QueryVotesRequest = {
                encode: (e, o = i.default.Writer.create()) => (e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), void 0 !== e.pagination && n.PageRequest.encode(e.pagination, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, v);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = t.uint64();
                                break;
                            case 2:
                                r.pagination = n.PageRequest.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, v);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = r.default.fromString(e.proposalId) : o.proposalId = r.default.UZERO, void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageRequest.fromJSON(e.pagination) : o.pagination = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || r.default.UZERO).toString()), void 0 !== e.pagination && (o.pagination = e.pagination ? n.PageRequest.toJSON(e.pagination) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, v);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = e.proposalId : o.proposalId = r.default.UZERO, void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageRequest.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const g = {};
            o.QueryVotesResponse = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.votes) a.Vote.encode(t, o.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && n.PageResponse.encode(e.pagination, o.uint32(18).fork()).ldelim(), o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, g);
                    for (r.votes = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.votes.push(a.Vote.decode(t, t.uint32()));
                                break;
                            case 2:
                                r.pagination = n.PageResponse.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, g);
                    if (o.votes = [], void 0 !== e.votes && null !== e.votes)
                        for (const t of e.votes) o.votes.push(a.Vote.fromJSON(t));
                    return void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageResponse.fromJSON(e.pagination) : o.pagination = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return e.votes ? o.votes = e.votes.map(e => e ? a.Vote.toJSON(e) : void 0) : o.votes = [], void 0 !== e.pagination && (o.pagination = e.pagination ? n.PageResponse.toJSON(e.pagination) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, g);
                    if (o.votes = [], void 0 !== e.votes && null !== e.votes)
                        for (const t of e.votes) o.votes.push(a.Vote.fromPartial(t));
                    return void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageResponse.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const m = {
                paramsType: ""
            };
            o.QueryParamsRequest = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.paramsType && o.uint32(10).string(e.paramsType), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, m);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.paramsType = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, m);
                    return void 0 !== e.paramsType && null !== e.paramsType ? o.paramsType = String(e.paramsType) : o.paramsType = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.paramsType && (o.paramsType = e.paramsType), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, m);
                    return t.paramsType = null !== (o = e.paramsType) && void 0 !== o ? o : "", t
                }
            };
            const O = {};
            o.QueryParamsResponse = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.votingParams && a.VotingParams.encode(e.votingParams, o.uint32(10).fork()).ldelim(), void 0 !== e.depositParams && a.DepositParams.encode(e.depositParams, o.uint32(18).fork()).ldelim(), void 0 !== e.tallyParams && a.TallyParams.encode(e.tallyParams, o.uint32(26).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, O);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.votingParams = a.VotingParams.decode(t, t.uint32());
                                break;
                            case 2:
                                r.depositParams = a.DepositParams.decode(t, t.uint32());
                                break;
                            case 3:
                                r.tallyParams = a.TallyParams.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, O);
                    return void 0 !== e.votingParams && null !== e.votingParams ? o.votingParams = a.VotingParams.fromJSON(e.votingParams) : o.votingParams = void 0, void 0 !== e.depositParams && null !== e.depositParams ? o.depositParams = a.DepositParams.fromJSON(e.depositParams) : o.depositParams = void 0, void 0 !== e.tallyParams && null !== e.tallyParams ? o.tallyParams = a.TallyParams.fromJSON(e.tallyParams) : o.tallyParams = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.votingParams && (o.votingParams = e.votingParams ? a.VotingParams.toJSON(e.votingParams) : void 0), void 0 !== e.depositParams && (o.depositParams = e.depositParams ? a.DepositParams.toJSON(e.depositParams) : void 0), void 0 !== e.tallyParams && (o.tallyParams = e.tallyParams ? a.TallyParams.toJSON(e.tallyParams) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, O);
                    return void 0 !== e.votingParams && null !== e.votingParams ? o.votingParams = a.VotingParams.fromPartial(e.votingParams) : o.votingParams = void 0, void 0 !== e.depositParams && null !== e.depositParams ? o.depositParams = a.DepositParams.fromPartial(e.depositParams) : o.depositParams = void 0, void 0 !== e.tallyParams && null !== e.tallyParams ? o.tallyParams = a.TallyParams.fromPartial(e.tallyParams) : o.tallyParams = void 0, o
                }
            };
            const h = {
                proposalId: r.default.UZERO,
                depositor: ""
            };
            o.QueryDepositRequest = {
                encode: (e, o = i.default.Writer.create()) => (e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), "" !== e.depositor && o.uint32(18).string(e.depositor), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, h);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = t.uint64();
                                break;
                            case 2:
                                r.depositor = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, h);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = r.default.fromString(e.proposalId) : o.proposalId = r.default.UZERO, void 0 !== e.depositor && null !== e.depositor ? o.depositor = String(e.depositor) : o.depositor = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || r.default.UZERO).toString()), void 0 !== e.depositor && (o.depositor = e.depositor), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, h);
                    return void 0 !== e.proposalId && null !== e.proposalId ? t.proposalId = e.proposalId : t.proposalId = r.default.UZERO, t.depositor = null !== (o = e.depositor) && void 0 !== o ? o : "", t
                }
            };
            const R = {};
            o.QueryDepositResponse = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.deposit && a.Deposit.encode(e.deposit, o.uint32(10).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, R);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.deposit = a.Deposit.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, R);
                    return void 0 !== e.deposit && null !== e.deposit ? o.deposit = a.Deposit.fromJSON(e.deposit) : o.deposit = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.deposit && (o.deposit = e.deposit ? a.Deposit.toJSON(e.deposit) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, R);
                    return void 0 !== e.deposit && null !== e.deposit ? o.deposit = a.Deposit.fromPartial(e.deposit) : o.deposit = void 0, o
                }
            };
            const P = {
                proposalId: r.default.UZERO
            };
            o.QueryDepositsRequest = {
                encode: (e, o = i.default.Writer.create()) => (e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), void 0 !== e.pagination && n.PageRequest.encode(e.pagination, o.uint32(18).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, P);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = t.uint64();
                                break;
                            case 2:
                                r.pagination = n.PageRequest.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, P);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = r.default.fromString(e.proposalId) : o.proposalId = r.default.UZERO, void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageRequest.fromJSON(e.pagination) : o.pagination = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || r.default.UZERO).toString()), void 0 !== e.pagination && (o.pagination = e.pagination ? n.PageRequest.toJSON(e.pagination) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, P);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = e.proposalId : o.proposalId = r.default.UZERO, void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageRequest.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const S = {};
            o.QueryDepositsResponse = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.deposits) a.Deposit.encode(t, o.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && n.PageResponse.encode(e.pagination, o.uint32(18).fork()).ldelim(), o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, S);
                    for (r.deposits = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.deposits.push(a.Deposit.decode(t, t.uint32()));
                                break;
                            case 2:
                                r.pagination = n.PageResponse.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, S);
                    if (o.deposits = [], void 0 !== e.deposits && null !== e.deposits)
                        for (const t of e.deposits) o.deposits.push(a.Deposit.fromJSON(t));
                    return void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageResponse.fromJSON(e.pagination) : o.pagination = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return e.deposits ? o.deposits = e.deposits.map(e => e ? a.Deposit.toJSON(e) : void 0) : o.deposits = [], void 0 !== e.pagination && (o.pagination = e.pagination ? n.PageResponse.toJSON(e.pagination) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, S);
                    if (o.deposits = [], void 0 !== e.deposits && null !== e.deposits)
                        for (const t of e.deposits) o.deposits.push(a.Deposit.fromPartial(t));
                    return void 0 !== e.pagination && null !== e.pagination ? o.pagination = n.PageResponse.fromPartial(e.pagination) : o.pagination = void 0, o
                }
            };
            const b = {
                proposalId: r.default.UZERO
            };
            o.QueryTallyResultRequest = {
                encode: (e, o = i.default.Writer.create()) => (e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, b);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, b);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = r.default.fromString(e.proposalId) : o.proposalId = r.default.UZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || r.default.UZERO).toString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, b);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = e.proposalId : o.proposalId = r.default.UZERO, o
                }
            };
            const w = {};
            o.QueryTallyResultResponse = {
                encode: (e, o = i.default.Writer.create()) => (void 0 !== e.tally && a.TallyResult.encode(e.tally, o.uint32(10).fork()).ldelim(), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, w);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.tally = a.TallyResult.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, w);
                    return void 0 !== e.tally && null !== e.tally ? o.tally = a.TallyResult.fromJSON(e.tally) : o.tally = void 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.tally && (o.tally = e.tally ? a.TallyResult.toJSON(e.tally) : void 0), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, w);
                    return void 0 !== e.tally && null !== e.tally ? o.tally = a.TallyResult.fromPartial(e.tally) : o.tally = void 0, o
                }
            };
            o.QueryClientImpl = class QueryClientImpl {
                constructor(e) {
                    this.rpc = e, this.Proposal = this.Proposal.bind(this), this.Proposals = this.Proposals.bind(this), this.Vote = this.Vote.bind(this), this.Votes = this.Votes.bind(this), this.Params = this.Params.bind(this), this.Deposit = this.Deposit.bind(this), this.Deposits = this.Deposits.bind(this), this.TallyResult = this.TallyResult.bind(this)
                }
                Proposal(e) {
                    const t = o.QueryProposalRequest.encode(e).finish();
                    return this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", t).then(e => o.QueryProposalResponse.decode(new i.default.Reader(e)))
                }
                Proposals(e) {
                    const t = o.QueryProposalsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", t).then(e => o.QueryProposalsResponse.decode(new i.default.Reader(e)))
                }
                Vote(e) {
                    const t = o.QueryVoteRequest.encode(e).finish();
                    return this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", t).then(e => o.QueryVoteResponse.decode(new i.default.Reader(e)))
                }
                Votes(e) {
                    const t = o.QueryVotesRequest.encode(e).finish();
                    return this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", t).then(e => o.QueryVotesResponse.decode(new i.default.Reader(e)))
                }
                Params(e) {
                    const t = o.QueryParamsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.gov.v1beta1.Query", "Params", t).then(e => o.QueryParamsResponse.decode(new i.default.Reader(e)))
                }
                Deposit(e) {
                    const t = o.QueryDepositRequest.encode(e).finish();
                    return this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", t).then(e => o.QueryDepositResponse.decode(new i.default.Reader(e)))
                }
                Deposits(e) {
                    const t = o.QueryDepositsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", t).then(e => o.QueryDepositsResponse.decode(new i.default.Reader(e)))
                }
                TallyResult(e) {
                    const t = o.QueryTallyResultRequest.encode(e).finish();
                    return this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", t).then(e => o.QueryTallyResultResponse.decode(new i.default.Reader(e)))
                }
            }, i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        4380: function(e, o, t) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.MsgClientImpl = o.MsgFundCommunityPoolResponse = o.MsgFundCommunityPool = o.MsgWithdrawValidatorCommissionResponse = o.MsgWithdrawValidatorCommission = o.MsgWithdrawDelegatorRewardResponse = o.MsgWithdrawDelegatorReward = o.MsgSetWithdrawAddressResponse = o.MsgSetWithdrawAddress = o.protobufPackage = void 0;
            const r = s(t(1)),
                i = s(t(8)),
                a = t(160);
            o.protobufPackage = "cosmos.distribution.v1beta1";
            const n = {
                delegatorAddress: "",
                withdrawAddress: ""
            };
            o.MsgSetWithdrawAddress = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.delegatorAddress && o.uint32(10).string(e.delegatorAddress), "" !== e.withdrawAddress && o.uint32(18).string(e.withdrawAddress), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, n);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.delegatorAddress = t.string();
                                break;
                            case 2:
                                r.withdrawAddress = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, n);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? o.delegatorAddress = String(e.delegatorAddress) : o.delegatorAddress = "", void 0 !== e.withdrawAddress && null !== e.withdrawAddress ? o.withdrawAddress = String(e.withdrawAddress) : o.withdrawAddress = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.delegatorAddress && (o.delegatorAddress = e.delegatorAddress), void 0 !== e.withdrawAddress && (o.withdrawAddress = e.withdrawAddress), o
                },
                fromPartial(e) {
                    var o, t;
                    const s = Object.assign({}, n);
                    return s.delegatorAddress = null !== (o = e.delegatorAddress) && void 0 !== o ? o : "", s.withdrawAddress = null !== (t = e.withdrawAddress) && void 0 !== t ? t : "", s
                }
            };
            const d = {};
            o.MsgSetWithdrawAddressResponse = {
                encode: (e, o = i.default.Writer.create()) => o,
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, d);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return r
                },
                fromJSON: e => Object.assign({}, d),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, d)
            };
            const l = {
                delegatorAddress: "",
                validatorAddress: ""
            };
            o.MsgWithdrawDelegatorReward = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.delegatorAddress && o.uint32(10).string(e.delegatorAddress), "" !== e.validatorAddress && o.uint32(18).string(e.validatorAddress), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, l);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.delegatorAddress = t.string();
                                break;
                            case 2:
                                r.validatorAddress = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, l);
                    return void 0 !== e.delegatorAddress && null !== e.delegatorAddress ? o.delegatorAddress = String(e.delegatorAddress) : o.delegatorAddress = "", void 0 !== e.validatorAddress && null !== e.validatorAddress ? o.validatorAddress = String(e.validatorAddress) : o.validatorAddress = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.delegatorAddress && (o.delegatorAddress = e.delegatorAddress), void 0 !== e.validatorAddress && (o.validatorAddress = e.validatorAddress), o
                },
                fromPartial(e) {
                    var o, t;
                    const s = Object.assign({}, l);
                    return s.delegatorAddress = null !== (o = e.delegatorAddress) && void 0 !== o ? o : "", s.validatorAddress = null !== (t = e.validatorAddress) && void 0 !== t ? t : "", s
                }
            };
            const u = {};
            o.MsgWithdrawDelegatorRewardResponse = {
                encode: (e, o = i.default.Writer.create()) => o,
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, u);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return r
                },
                fromJSON: e => Object.assign({}, u),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, u)
            };
            const c = {
                validatorAddress: ""
            };
            o.MsgWithdrawValidatorCommission = {
                encode: (e, o = i.default.Writer.create()) => ("" !== e.validatorAddress && o.uint32(10).string(e.validatorAddress), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, c);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.validatorAddress = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, c);
                    return void 0 !== e.validatorAddress && null !== e.validatorAddress ? o.validatorAddress = String(e.validatorAddress) : o.validatorAddress = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.validatorAddress && (o.validatorAddress = e.validatorAddress), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, c);
                    return t.validatorAddress = null !== (o = e.validatorAddress) && void 0 !== o ? o : "", t
                }
            };
            const p = {};
            o.MsgWithdrawValidatorCommissionResponse = {
                encode: (e, o = i.default.Writer.create()) => o,
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, p);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return r
                },
                fromJSON: e => Object.assign({}, p),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, p)
            };
            const f = {
                depositor: ""
            };
            o.MsgFundCommunityPool = {
                encode(e, o = i.default.Writer.create()) {
                    for (const t of e.amount) a.Coin.encode(t, o.uint32(10).fork()).ldelim();
                    return "" !== e.depositor && o.uint32(18).string(e.depositor), o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, f);
                    for (r.amount = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.amount.push(a.Coin.decode(t, t.uint32()));
                                break;
                            case 2:
                                r.depositor = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, f);
                    if (o.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const t of e.amount) o.amount.push(a.Coin.fromJSON(t));
                    return void 0 !== e.depositor && null !== e.depositor ? o.depositor = String(e.depositor) : o.depositor = "", o
                },
                toJSON(e) {
                    const o = {};
                    return e.amount ? o.amount = e.amount.map(e => e ? a.Coin.toJSON(e) : void 0) : o.amount = [], void 0 !== e.depositor && (o.depositor = e.depositor), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, f);
                    if (t.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(a.Coin.fromPartial(o));
                    return t.depositor = null !== (o = e.depositor) && void 0 !== o ? o : "", t
                }
            };
            const v = {};
            o.MsgFundCommunityPoolResponse = {
                encode: (e, o = i.default.Writer.create()) => o,
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, v);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return r
                },
                fromJSON: e => Object.assign({}, v),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, v)
            };
            o.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this), this.WithdrawDelegatorReward = this.WithdrawDelegatorReward.bind(this), this.WithdrawValidatorCommission = this.WithdrawValidatorCommission.bind(this), this.FundCommunityPool = this.FundCommunityPool.bind(this)
                }
                SetWithdrawAddress(e) {
                    const t = o.MsgSetWithdrawAddress.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", t).then(e => o.MsgSetWithdrawAddressResponse.decode(new i.default.Reader(e)))
                }
                WithdrawDelegatorReward(e) {
                    const t = o.MsgWithdrawDelegatorReward.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", t).then(e => o.MsgWithdrawDelegatorRewardResponse.decode(new i.default.Reader(e)))
                }
                WithdrawValidatorCommission(e) {
                    const t = o.MsgWithdrawValidatorCommission.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", t).then(e => o.MsgWithdrawValidatorCommissionResponse.decode(new i.default.Reader(e)))
                }
                FundCommunityPool(e) {
                    const t = o.MsgFundCommunityPool.encode(e).finish();
                    return this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", t).then(e => o.MsgFundCommunityPoolResponse.decode(new i.default.Reader(e)))
                }
            }, i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        },
        4381: function(e, o, t) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.MsgClientImpl = o.MsgDepositResponse = o.MsgDeposit = o.MsgVoteResponse = o.MsgVote = o.MsgSubmitProposalResponse = o.MsgSubmitProposal = o.protobufPackage = void 0;
            const r = s(t(1)),
                i = s(t(8)),
                a = t(113),
                n = t(1147),
                d = t(160);
            o.protobufPackage = "cosmos.gov.v1beta1";
            const l = {
                proposer: ""
            };
            o.MsgSubmitProposal = {
                encode(e, o = i.default.Writer.create()) {
                    void 0 !== e.content && a.Any.encode(e.content, o.uint32(10).fork()).ldelim();
                    for (const t of e.initialDeposit) d.Coin.encode(t, o.uint32(18).fork()).ldelim();
                    return "" !== e.proposer && o.uint32(26).string(e.proposer), o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, l);
                    for (r.initialDeposit = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.content = a.Any.decode(t, t.uint32());
                                break;
                            case 2:
                                r.initialDeposit.push(d.Coin.decode(t, t.uint32()));
                                break;
                            case 3:
                                r.proposer = t.string();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, l);
                    if (o.initialDeposit = [], void 0 !== e.content && null !== e.content ? o.content = a.Any.fromJSON(e.content) : o.content = void 0, void 0 !== e.initialDeposit && null !== e.initialDeposit)
                        for (const t of e.initialDeposit) o.initialDeposit.push(d.Coin.fromJSON(t));
                    return void 0 !== e.proposer && null !== e.proposer ? o.proposer = String(e.proposer) : o.proposer = "", o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.content && (o.content = e.content ? a.Any.toJSON(e.content) : void 0), e.initialDeposit ? o.initialDeposit = e.initialDeposit.map(e => e ? d.Coin.toJSON(e) : void 0) : o.initialDeposit = [], void 0 !== e.proposer && (o.proposer = e.proposer), o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, l);
                    if (void 0 !== e.content && null !== e.content ? t.content = a.Any.fromPartial(e.content) : t.content = void 0, t.initialDeposit = [], void 0 !== e.initialDeposit && null !== e.initialDeposit)
                        for (const o of e.initialDeposit) t.initialDeposit.push(d.Coin.fromPartial(o));
                    return t.proposer = null !== (o = e.proposer) && void 0 !== o ? o : "", t
                }
            };
            const u = {
                proposalId: r.default.UZERO
            };
            o.MsgSubmitProposalResponse = {
                encode: (e, o = i.default.Writer.create()) => (e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, u);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = t.uint64();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, u);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = r.default.fromString(e.proposalId) : o.proposalId = r.default.UZERO, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || r.default.UZERO).toString()), o
                },
                fromPartial(e) {
                    const o = Object.assign({}, u);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = e.proposalId : o.proposalId = r.default.UZERO, o
                }
            };
            const c = {
                proposalId: r.default.UZERO,
                voter: "",
                option: 0
            };
            o.MsgVote = {
                encode: (e, o = i.default.Writer.create()) => (e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), "" !== e.voter && o.uint32(18).string(e.voter), 0 !== e.option && o.uint32(24).int32(e.option), o),
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, c);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = t.uint64();
                                break;
                            case 2:
                                r.voter = t.string();
                                break;
                            case 3:
                                r.option = t.int32();
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, c);
                    return void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = r.default.fromString(e.proposalId) : o.proposalId = r.default.UZERO, void 0 !== e.voter && null !== e.voter ? o.voter = String(e.voter) : o.voter = "", void 0 !== e.option && null !== e.option ? o.option = n.voteOptionFromJSON(e.option) : o.option = 0, o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || r.default.UZERO).toString()), void 0 !== e.voter && (o.voter = e.voter), void 0 !== e.option && (o.option = n.voteOptionToJSON(e.option)), o
                },
                fromPartial(e) {
                    var o, t;
                    const s = Object.assign({}, c);
                    return void 0 !== e.proposalId && null !== e.proposalId ? s.proposalId = e.proposalId : s.proposalId = r.default.UZERO, s.voter = null !== (o = e.voter) && void 0 !== o ? o : "", s.option = null !== (t = e.option) && void 0 !== t ? t : 0, s
                }
            };
            const p = {};
            o.MsgVoteResponse = {
                encode: (e, o = i.default.Writer.create()) => o,
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, p);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return r
                },
                fromJSON: e => Object.assign({}, p),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, p)
            };
            const f = {
                proposalId: r.default.UZERO,
                depositor: ""
            };
            o.MsgDeposit = {
                encode(e, o = i.default.Writer.create()) {
                    e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId), "" !== e.depositor && o.uint32(18).string(e.depositor);
                    for (const t of e.amount) d.Coin.encode(t, o.uint32(26).fork()).ldelim();
                    return o
                },
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, f);
                    for (r.amount = []; t.pos < s;) {
                        const e = t.uint32();
                        switch (e >>> 3) {
                            case 1:
                                r.proposalId = t.uint64();
                                break;
                            case 2:
                                r.depositor = t.string();
                                break;
                            case 3:
                                r.amount.push(d.Coin.decode(t, t.uint32()));
                                break;
                            default:
                                t.skipType(7 & e)
                        }
                    }
                    return r
                },
                fromJSON(e) {
                    const o = Object.assign({}, f);
                    if (o.amount = [], void 0 !== e.proposalId && null !== e.proposalId ? o.proposalId = r.default.fromString(e.proposalId) : o.proposalId = r.default.UZERO, void 0 !== e.depositor && null !== e.depositor ? o.depositor = String(e.depositor) : o.depositor = "", void 0 !== e.amount && null !== e.amount)
                        for (const t of e.amount) o.amount.push(d.Coin.fromJSON(t));
                    return o
                },
                toJSON(e) {
                    const o = {};
                    return void 0 !== e.proposalId && (o.proposalId = (e.proposalId || r.default.UZERO).toString()), void 0 !== e.depositor && (o.depositor = e.depositor), e.amount ? o.amount = e.amount.map(e => e ? d.Coin.toJSON(e) : void 0) : o.amount = [], o
                },
                fromPartial(e) {
                    var o;
                    const t = Object.assign({}, f);
                    if (void 0 !== e.proposalId && null !== e.proposalId ? t.proposalId = e.proposalId : t.proposalId = r.default.UZERO, t.depositor = null !== (o = e.depositor) && void 0 !== o ? o : "", t.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const o of e.amount) t.amount.push(d.Coin.fromPartial(o));
                    return t
                }
            };
            const v = {};
            o.MsgDepositResponse = {
                encode: (e, o = i.default.Writer.create()) => o,
                decode(e, o) {
                    const t = e instanceof i.default.Reader ? e : new i.default.Reader(e);
                    let s = void 0 === o ? t.len : t.pos + o;
                    const r = Object.assign({}, v);
                    for (; t.pos < s;) {
                        const e = t.uint32();
                        t.skipType(7 & e)
                    }
                    return r
                },
                fromJSON: e => Object.assign({}, v),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, v)
            };
            o.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.SubmitProposal = this.SubmitProposal.bind(this), this.Vote = this.Vote.bind(this), this.Deposit = this.Deposit.bind(this)
                }
                SubmitProposal(e) {
                    const t = o.MsgSubmitProposal.encode(e).finish();
                    return this.rpc.request("cosmos.gov.v1beta1.Msg", "SubmitProposal", t).then(e => o.MsgSubmitProposalResponse.decode(new i.default.Reader(e)))
                }
                Vote(e) {
                    const t = o.MsgVote.encode(e).finish();
                    return this.rpc.request("cosmos.gov.v1beta1.Msg", "Vote", t).then(e => o.MsgVoteResponse.decode(new i.default.Reader(e)))
                }
                Deposit(e) {
                    const t = o.MsgDeposit.encode(e).finish();
                    return this.rpc.request("cosmos.gov.v1beta1.Msg", "Deposit", t).then(e => o.MsgDepositResponse.decode(new i.default.Reader(e)))
                }
            }, i.default.util.Long !== r.default && (i.default.util.Long = r.default, i.default.configure())
        }
    }
]);