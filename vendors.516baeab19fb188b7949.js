(window.webpackJsonp = window.webpackJsonp || []).push([
    [103], {
        2032: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.accountFromAny = void 0;
            const o = n(149),
                s = n(434),
                i = n(185),
                r = n(1146),
                a = n(4290);

            function c(e) {
                return o.Uint64.fromString(e.toString())
            }

            function u(e) {
                const {
                    address: t,
                    pubKey: n,
                    accountNumber: o,
                    sequence: i
                } = e;
                return {
                    address: t,
                    pubkey: s.decodePubkey(n),
                    accountNumber: c(o).toNumber(),
                    sequence: c(i).toNumber()
                }
            }
            t.accountFromAny = function(e) {
                var t, n, o, s, c, d, l;
                const {
                    typeUrl: g,
                    value: m
                } = e;
                switch (g) {
                    case "/cosmos.auth.v1beta1.BaseAccount":
                        return u(r.BaseAccount.decode(m));
                    case "/cosmos.auth.v1beta1.ModuleAccount": {
                        const e = r.ModuleAccount.decode(m).baseAccount;
                        return i.assert(e), u(e)
                    }
                    case "/cosmos.vesting.v1beta1.BaseVestingAccount": {
                        const e = null === (t = a.BaseVestingAccount.decode(m)) || void 0 === t ? void 0 : t.baseAccount;
                        return i.assert(e), u(e)
                    }
                    case "/cosmos.vesting.v1beta1.ContinuousVestingAccount": {
                        const e = null === (o = null === (n = a.ContinuousVestingAccount.decode(m)) || void 0 === n ? void 0 : n.baseVestingAccount) || void 0 === o ? void 0 : o.baseAccount;
                        return i.assert(e), u(e)
                    }
                    case "/cosmos.vesting.v1beta1.DelayedVestingAccount": {
                        const e = null === (c = null === (s = a.DelayedVestingAccount.decode(m)) || void 0 === s ? void 0 : s.baseVestingAccount) || void 0 === c ? void 0 : c.baseAccount;
                        return i.assert(e), u(e)
                    }
                    case "/cosmos.vesting.v1beta1.PeriodicVestingAccount": {
                        const e = null === (l = null === (d = a.PeriodicVestingAccount.decode(m)) || void 0 === d ? void 0 : d.baseVestingAccount) || void 0 === l ? void 0 : l.baseAccount;
                        return i.assert(e), u(e)
                    }
                    default:
                        throw new Error(`Unsupported type: '${g}'`)
                }
            }
        },
        2033: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AminoTypes = void 0;
            const s = n(356),
                i = n(68),
                r = n(185),
                a = n(1147),
                c = n(113),
                u = o(n(1));

            function d(e) {
                if ("string" == typeof e) return "" === e ? void 0 : e;
                if ("number" == typeof e) return 0 === e ? void 0 : e;
                if (u.default.isLong(e)) return e.isZero() ? void 0 : e;
                throw new Error(`Got unsupported type '${typeof e}'`)
            }
            t.AminoTypes = class AminoTypes {
                constructor({
                    additions: e = {},
                    prefix: t = "cosmos"
                } = {}) {
                    const n = Object.values(e),
                        o = Object.entries(function(e) {
                            return {
                                "/cosmos.bank.v1beta1.MsgSend": {
                                    aminoType: "cosmos-sdk/MsgSend",
                                    toAmino: ({
                                        fromAddress: e,
                                        toAddress: t,
                                        amount: n
                                    }) => ({
                                        from_address: e,
                                        to_address: t,
                                        amount: [...n]
                                    }),
                                    fromAmino: ({
                                        from_address: e,
                                        to_address: t,
                                        amount: n
                                    }) => ({
                                        fromAddress: e,
                                        toAddress: t,
                                        amount: [...n]
                                    })
                                },
                                "/cosmos.bank.v1beta1.MsgMultiSend": {
                                    aminoType: "cosmos-sdk/MsgMultiSend",
                                    toAmino: ({
                                        inputs: e,
                                        outputs: t
                                    }) => ({
                                        inputs: e.map(e => ({
                                            address: e.address,
                                            coins: [...e.coins]
                                        })),
                                        outputs: t.map(e => ({
                                            address: e.address,
                                            coins: [...e.coins]
                                        }))
                                    }),
                                    fromAmino: ({
                                        inputs: e,
                                        outputs: t
                                    }) => ({
                                        inputs: e.map(e => ({
                                            address: e.address,
                                            coins: [...e.coins]
                                        })),
                                        outputs: t.map(e => ({
                                            address: e.address,
                                            coins: [...e.coins]
                                        }))
                                    })
                                },
                                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                                    aminoType: "cosmos-sdk/MsgFundCommunityPool",
                                    toAmino: ({
                                        amount: e,
                                        depositor: t
                                    }) => ({
                                        amount: [...e],
                                        depositor: t
                                    }),
                                    fromAmino: ({
                                        amount: e,
                                        depositor: t
                                    }) => ({
                                        amount: [...e],
                                        depositor: t
                                    })
                                },
                                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                                    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
                                    toAmino: ({
                                        delegatorAddress: e,
                                        withdrawAddress: t
                                    }) => ({
                                        delegator_address: e,
                                        withdraw_address: t
                                    }),
                                    fromAmino: ({
                                        delegator_address: e,
                                        withdraw_address: t
                                    }) => ({
                                        delegatorAddress: e,
                                        withdrawAddress: t
                                    })
                                },
                                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                                    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
                                    toAmino: ({
                                        delegatorAddress: e,
                                        validatorAddress: t
                                    }) => ({
                                        delegator_address: e,
                                        validator_address: t
                                    }),
                                    fromAmino: ({
                                        delegator_address: e,
                                        validator_address: t
                                    }) => ({
                                        delegatorAddress: e,
                                        validatorAddress: t
                                    })
                                },
                                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                                    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
                                    toAmino: ({
                                        validatorAddress: e
                                    }) => ({
                                        validator_address: e
                                    }),
                                    fromAmino: ({
                                        validator_address: e
                                    }) => ({
                                        validatorAddress: e
                                    })
                                },
                                "/cosmos.gov.v1beta1.MsgDeposit": {
                                    aminoType: "cosmos-sdk/MsgDeposit",
                                    toAmino: ({
                                        amount: e,
                                        depositor: t,
                                        proposalId: n
                                    }) => ({
                                        amount: e,
                                        depositor: t,
                                        proposal_id: n.toString()
                                    }),
                                    fromAmino: ({
                                        amount: e,
                                        depositor: t,
                                        proposal_id: n
                                    }) => ({
                                        amount: Array.from(e),
                                        depositor: t,
                                        proposalId: u.default.fromString(n)
                                    })
                                },
                                "/cosmos.gov.v1beta1.MsgVote": {
                                    aminoType: "cosmos-sdk/MsgVote",
                                    toAmino: ({
                                        option: e,
                                        proposalId: t,
                                        voter: n
                                    }) => ({
                                        option: e,
                                        proposal_id: t.toString(),
                                        voter: n
                                    }),
                                    fromAmino: ({
                                        option: e,
                                        proposal_id: t,
                                        voter: n
                                    }) => ({
                                        option: a.voteOptionFromJSON(e),
                                        proposalId: u.default.fromString(t),
                                        voter: n
                                    })
                                },
                                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                                    aminoType: "cosmos-sdk/MsgSubmitProposal",
                                    toAmino: ({
                                        initialDeposit: e,
                                        proposer: t,
                                        content: n
                                    }) => {
                                        let o;
                                        switch (r.assertDefinedAndNotNull(n), n.typeUrl) {
                                            case "/cosmos.gov.v1beta1.TextProposal": {
                                                const e = a.TextProposal.decode(n.value);
                                                o = {
                                                    type: "cosmos-sdk/TextProposal",
                                                    value: {
                                                        description: e.description,
                                                        title: e.title
                                                    }
                                                };
                                                break
                                            }
                                            default:
                                                throw new Error(`Unsupported proposal type: '${n.typeUrl}'`)
                                        }
                                        return {
                                            initial_deposit: e,
                                            proposer: t,
                                            content: o
                                        }
                                    },
                                    fromAmino: ({
                                        initial_deposit: e,
                                        proposer: t,
                                        content: n
                                    }) => {
                                        let o;
                                        switch (n.type) {
                                            case "cosmos-sdk/TextProposal": {
                                                const {
                                                    value: e
                                                } = n;
                                                r.assert(r.isNonNullObject(e));
                                                const {
                                                    title: t,
                                                    description: s
                                                } = e;
                                                r.assert("string" == typeof t), r.assert("string" == typeof s), o = c.Any.fromPartial({
                                                    typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                                                    value: a.TextProposal.encode(a.TextProposal.fromPartial({
                                                        title: t,
                                                        description: s
                                                    })).finish()
                                                });
                                                break
                                            }
                                            default:
                                                throw new Error(`Unsupported proposal type: '${n.type}'`)
                                        }
                                        return {
                                            initialDeposit: Array.from(e),
                                            proposer: t,
                                            content: o
                                        }
                                    }
                                },
                                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                                    aminoType: "cosmos-sdk/MsgBeginRedelegate",
                                    toAmino: ({
                                        delegatorAddress: e,
                                        validatorSrcAddress: t,
                                        validatorDstAddress: n,
                                        amount: o
                                    }) => (r.assertDefinedAndNotNull(o, "missing amount"), {
                                        delegator_address: e,
                                        validator_src_address: t,
                                        validator_dst_address: n,
                                        amount: o
                                    }),
                                    fromAmino: ({
                                        delegator_address: e,
                                        validator_src_address: t,
                                        validator_dst_address: n,
                                        amount: o
                                    }) => ({
                                        delegatorAddress: e,
                                        validatorSrcAddress: t,
                                        validatorDstAddress: n,
                                        amount: o
                                    })
                                },
                                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                                    aminoType: "cosmos-sdk/MsgCreateValidator",
                                    toAmino: ({
                                        description: t,
                                        commission: n,
                                        minSelfDelegation: o,
                                        delegatorAddress: a,
                                        validatorAddress: c,
                                        pubkey: u,
                                        value: d
                                    }) => (r.assertDefinedAndNotNull(t, "missing description"), r.assertDefinedAndNotNull(n, "missing commission"), r.assertDefinedAndNotNull(u, "missing pubkey"), r.assertDefinedAndNotNull(d, "missing value"), {
                                        description: {
                                            moniker: t.moniker,
                                            identity: t.identity,
                                            website: t.website,
                                            security_contact: t.securityContact,
                                            details: t.details
                                        },
                                        commission: {
                                            rate: n.rate,
                                            max_rate: n.maxRate,
                                            max_change_rate: n.maxChangeRate
                                        },
                                        min_self_delegation: o,
                                        delegator_address: a,
                                        validator_address: c,
                                        pubkey: s.encodeBech32Pubkey({
                                            type: "tendermint/PubKeySecp256k1",
                                            value: i.toBase64(u.value)
                                        }, e),
                                        value: d
                                    }),
                                    fromAmino: ({
                                        description: e,
                                        commission: t,
                                        min_self_delegation: n,
                                        delegator_address: o,
                                        validator_address: r,
                                        pubkey: a,
                                        value: c
                                    }) => {
                                        const u = s.decodeBech32Pubkey(a);
                                        if ("tendermint/PubKeySecp256k1" !== u.type) throw new Error("Only Secp256k1 public keys are supported");
                                        return {
                                            description: {
                                                moniker: e.moniker,
                                                identity: e.identity,
                                                website: e.website,
                                                securityContact: e.security_contact,
                                                details: e.details
                                            },
                                            commission: {
                                                rate: t.rate,
                                                maxRate: t.max_rate,
                                                maxChangeRate: t.max_change_rate
                                            },
                                            minSelfDelegation: n,
                                            delegatorAddress: o,
                                            validatorAddress: r,
                                            pubkey: {
                                                typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                                                value: i.fromBase64(u.value)
                                            },
                                            value: c
                                        }
                                    }
                                },
                                "/cosmos.staking.v1beta1.MsgDelegate": {
                                    aminoType: "cosmos-sdk/MsgDelegate",
                                    toAmino: ({
                                        delegatorAddress: e,
                                        validatorAddress: t,
                                        amount: n
                                    }) => (r.assertDefinedAndNotNull(n, "missing amount"), {
                                        delegator_address: e,
                                        validator_address: t,
                                        amount: n
                                    }),
                                    fromAmino: ({
                                        delegator_address: e,
                                        validator_address: t,
                                        amount: n
                                    }) => ({
                                        delegatorAddress: e,
                                        validatorAddress: t,
                                        amount: n
                                    })
                                },
                                "/cosmos.staking.v1beta1.MsgEditValidator": {
                                    aminoType: "cosmos-sdk/MsgEditValidator",
                                    toAmino: ({
                                        description: e,
                                        commissionRate: t,
                                        minSelfDelegation: n,
                                        validatorAddress: o
                                    }) => (r.assertDefinedAndNotNull(e, "missing description"), {
                                        description: {
                                            moniker: e.moniker,
                                            identity: e.identity,
                                            website: e.website,
                                            security_contact: e.securityContact,
                                            details: e.details
                                        },
                                        commission_rate: t,
                                        min_self_delegation: n,
                                        validator_address: o
                                    }),
                                    fromAmino: ({
                                        description: e,
                                        commission_rate: t,
                                        min_self_delegation: n,
                                        validator_address: o
                                    }) => ({
                                        description: {
                                            moniker: e.moniker,
                                            identity: e.identity,
                                            website: e.website,
                                            securityContact: e.security_contact,
                                            details: e.details
                                        },
                                        commissionRate: t,
                                        minSelfDelegation: n,
                                        validatorAddress: o
                                    })
                                },
                                "/cosmos.staking.v1beta1.MsgUndelegate": {
                                    aminoType: "cosmos-sdk/MsgUndelegate",
                                    toAmino: ({
                                        delegatorAddress: e,
                                        validatorAddress: t,
                                        amount: n
                                    }) => (r.assertDefinedAndNotNull(n, "missing amount"), {
                                        delegator_address: e,
                                        validator_address: t,
                                        amount: n
                                    }),
                                    fromAmino: ({
                                        delegator_address: e,
                                        validator_address: t,
                                        amount: n
                                    }) => ({
                                        delegatorAddress: e,
                                        validatorAddress: t,
                                        amount: n
                                    })
                                },
                                "/ibc.applications.transfer.v1.MsgTransfer": {
                                    aminoType: "cosmos-sdk/MsgTransfer",
                                    toAmino: ({
                                        sourcePort: e,
                                        sourceChannel: t,
                                        token: n,
                                        sender: o,
                                        receiver: s,
                                        timeoutHeight: i,
                                        timeoutTimestamp: r
                                    }) => {
                                        var a, c, u;
                                        return {
                                            source_port: e,
                                            source_channel: t,
                                            token: n,
                                            sender: o,
                                            receiver: s,
                                            timeout_height: i ? {
                                                revision_height: null === (a = d(i.revisionHeight)) || void 0 === a ? void 0 : a.toString(),
                                                revision_number: null === (c = d(i.revisionNumber)) || void 0 === c ? void 0 : c.toString()
                                            } : {},
                                            timeout_timestamp: null === (u = d(r)) || void 0 === u ? void 0 : u.toString()
                                        }
                                    },
                                    fromAmino: ({
                                        source_port: e,
                                        source_channel: t,
                                        token: n,
                                        sender: o,
                                        receiver: s,
                                        timeout_height: i,
                                        timeout_timestamp: r
                                    }) => ({
                                        sourcePort: e,
                                        sourceChannel: t,
                                        token: n,
                                        sender: o,
                                        receiver: s,
                                        timeoutHeight: i ? {
                                            revisionHeight: u.default.fromString(i.revision_height || "0", !0),
                                            revisionNumber: u.default.fromString(i.revision_number || "0", !0)
                                        } : void 0,
                                        timeoutTimestamp: u.default.fromString(r || "0", !0)
                                    })
                                }
                            }
                        }(t)).reduce((e, [t, o]) => n.find(({
                            aminoType: e
                        }) => o.aminoType === e) ? e : Object.assign(Object.assign({}, e), {
                            [t]: o
                        }), {});
                    this.register = Object.assign(Object.assign({}, o), e)
                }
                toAmino({
                    typeUrl: e,
                    value: t
                }) {
                    const n = this.register[e];
                    if (!n) throw new Error("Type URL does not exist in the Amino message type register. If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.");
                    return {
                        type: n.aminoType,
                        value: n.toAmino(t)
                    }
                }
                fromAmino({
                    type: e,
                    value: t
                }) {
                    const n = Object.entries(this.register).find(([t, {
                        aminoType: n
                    }]) => n === e);
                    if (!n) throw new Error("Type does not exist in the Amino message type register. If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.");
                    const [o, s] = n;
                    return {
                        typeUrl: o,
                        value: s.fromAmino(t)
                    }
                }
            }
        },
        2034: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createProtobufRpcClient = t.createPagination = t.setupStakingExtension = t.setupIbcExtension = t.setupGovExtension = t.setupDistributionExtension = t.setupBankExtension = t.setupAuthExtension = t.QueryClient = void 0;
            var o = n(4296);
            Object.defineProperty(t, "QueryClient", {
                enumerable: !0,
                get: function() {
                    return o.QueryClient
                }
            });
            var s = n(4319);
            Object.defineProperty(t, "setupAuthExtension", {
                enumerable: !0,
                get: function() {
                    return s.setupAuthExtension
                }
            });
            var i = n(4321);
            Object.defineProperty(t, "setupBankExtension", {
                enumerable: !0,
                get: function() {
                    return i.setupBankExtension
                }
            });
            var r = n(4323);
            Object.defineProperty(t, "setupDistributionExtension", {
                enumerable: !0,
                get: function() {
                    return r.setupDistributionExtension
                }
            });
            var a = n(4326);
            Object.defineProperty(t, "setupGovExtension", {
                enumerable: !0,
                get: function() {
                    return a.setupGovExtension
                }
            });
            var c = n(4328);
            Object.defineProperty(t, "setupIbcExtension", {
                enumerable: !0,
                get: function() {
                    return c.setupIbcExtension
                }
            });
            var u = n(4338);
            Object.defineProperty(t, "setupStakingExtension", {
                enumerable: !0,
                get: function() {
                    return u.setupStakingExtension
                }
            });
            var d = n(358);
            Object.defineProperty(t, "createPagination", {
                enumerable: !0,
                get: function() {
                    return d.createPagination
                }
            }), Object.defineProperty(t, "createProtobufRpcClient", {
                enumerable: !0,
                get: function() {
                    return d.createProtobufRpcClient
                }
            })
        },
        2048: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSearchByTagsQuery = t.isSearchBySentFromOrToQuery = t.isSearchByHeightQuery = void 0, t.isSearchByHeightQuery = function(e) {
                return void 0 !== e.height
            }, t.isSearchBySentFromOrToQuery = function(e) {
                return void 0 !== e.sentFromOrTo
            }, t.isSearchByTagsQuery = function(e) {
                return void 0 !== e.tags
            }
        },
        2049: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StargateClient = t.assertIsBroadcastTxSuccess = t.isBroadcastTxSuccess = t.isBroadcastTxFailure = t.TimeoutError = void 0;
            const o = n(68),
                s = n(149),
                i = n(2050),
                r = n(185),
                a = n(2032),
                c = n(2034),
                u = n(2048);
            class TimeoutError extends Error {
                constructor(e, t) {
                    super(e), this.txId = t
                }
            }

            function d(e) {
                return !!e.code
            }
            t.TimeoutError = TimeoutError, t.isBroadcastTxFailure = d, t.isBroadcastTxSuccess = function(e) {
                return !d(e)
            }, t.assertIsBroadcastTxSuccess = function(e) {
                if (d(e)) throw new Error(`Error when broadcasting tx ${e.transactionHash} at height ${e.height}. Code: ${e.code}; Raw log: ${e.rawLog}`)
            };
            class StargateClient {
                constructor(e) {
                    e && (this.tmClient = e, this.queryClient = c.QueryClient.withExtensions(e, c.setupAuthExtension, c.setupBankExtension, c.setupStakingExtension))
                }
                static async connect(e) {
                    const t = await i.Tendermint34Client.connect(e);
                    return new StargateClient(t)
                }
                getTmClient() {
                    return this.tmClient
                }
                forceGetTmClient() {
                    if (!this.tmClient) throw new Error("Tendermint client not available. You cannot use online functionality in offline mode.");
                    return this.tmClient
                }
                getQueryClient() {
                    return this.queryClient
                }
                forceGetQueryClient() {
                    if (!this.queryClient) throw new Error("Query client not available. You cannot use online functionality in offline mode.");
                    return this.queryClient
                }
                async getChainId() {
                    if (!this.chainId) {
                        const e = (await this.forceGetTmClient().status()).nodeInfo.network;
                        if (!e) throw new Error("Chain ID must not be empty");
                        this.chainId = e
                    }
                    return this.chainId
                }
                async getHeight() {
                    return (await this.forceGetTmClient().status()).syncInfo.latestBlockHeight
                }
                async getAccount(e) {
                    try {
                        const t = await this.forceGetQueryClient().auth.account(e);
                        return t ? a.accountFromAny(t) : null
                    } catch (e) {
                        if (/rpc error: code = NotFound/i.test(e)) return null;
                        throw e
                    }
                }
                async getAccountVerified(e) {
                    const t = await this.forceGetQueryClient().auth.verified.account(e);
                    return t ? a.accountFromAny(t) : null
                }
                async getSequence(e) {
                    const t = await this.getAccount(e);
                    if (!t) throw new Error("Account does not exist on chain. Send some tokens there before trying to query sequence.");
                    return {
                        accountNumber: t.accountNumber,
                        sequence: t.sequence
                    }
                }
                async getBlock(e) {
                    const t = await this.forceGetTmClient().block(e);
                    return {
                        id: o.toHex(t.blockId.hash).toUpperCase(),
                        header: {
                            version: {
                                block: new s.Uint53(t.block.header.version.block).toString(),
                                app: new s.Uint53(t.block.header.version.app).toString()
                            },
                            height: t.block.header.height,
                            chainId: t.block.header.chainId,
                            time: i.toRfc3339WithNanoseconds(t.block.header.time)
                        },
                        txs: t.block.txs
                    }
                }
                async getBalance(e, t) {
                    return this.forceGetQueryClient().bank.balance(e, t)
                }
                async getAllBalances(e) {
                    return this.forceGetQueryClient().bank.allBalances(e)
                }
                async getDelegation(e, t) {
                    var n;
                    let o;
                    try {
                        o = null === (n = (await this.forceGetQueryClient().staking.delegation(e, t)).delegationResponse) || void 0 === n ? void 0 : n.balance
                    } catch (e) {
                        if (!e.toString().includes("key not found")) throw e
                    }
                    return o || null
                }
                async getTx(e) {
                    var t;
                    return null !== (t = (await this.txsQuery(`tx.hash='${e}'`))[0]) && void 0 !== t ? t : null
                }
                async searchTx(e, t = {}) {
                    const n = t.minHeight || 0,
                        o = t.maxHeight || Number.MAX_SAFE_INTEGER;
                    if (o < n) return [];

                    function s(e) {
                        return `${e} AND tx.height>=${n} AND tx.height<=${o}`
                    }
                    let i;
                    if (u.isSearchByHeightQuery(e)) i = e.height >= n && e.height <= o ? await this.txsQuery("tx.height=" + e.height) : [];
                    else if (u.isSearchBySentFromOrToQuery(e)) {
                        const t = s(`message.module='bank' AND transfer.sender='${e.sentFromOrTo}'`),
                            n = s(`message.module='bank' AND transfer.recipient='${e.sentFromOrTo}'`),
                            [o, r] = await Promise.all([t, n].map(e => this.txsQuery(e))),
                            a = o.map(e => e.hash);
                        i = [...o, ...r.filter(e => !a.includes(e.hash))]
                    } else {
                        if (!u.isSearchByTagsQuery(e)) throw new Error("Unknown query type");
                        {
                            const t = s(e.tags.map(e => `${e.key}='${e.value}'`).join(" AND "));
                            i = await this.txsQuery(t)
                        }
                    }
                    return i.filter(e => e.height >= n && e.height <= o)
                }
                disconnect() {
                    this.tmClient && this.tmClient.disconnect()
                }
                async broadcastTx(e, t = 6e4, n = 3e3) {
                    let s = !1;
                    const i = setTimeout(() => {
                            s = !0
                        }, t),
                        a = async e => {
                            if (s) throw new TimeoutError(`Transaction with ID ${e} was submitted but was not yet found on the chain. You might want to check later.`, e);
                            await r.sleep(n);
                            const t = await this.getTx(e);
                            return t ? {
                                code: t.code,
                                height: t.height,
                                rawLog: t.rawLog,
                                transactionHash: e,
                                gasUsed: t.gasUsed,
                                gasWanted: t.gasWanted
                            } : a(e)
                        }, c = await this.forceGetTmClient().broadcastTxSync({
                            tx: e
                        });
                    if (c.code) throw new Error(`Broadcasting transaction failed with code ${c.code} (codespace: ${c.codeSpace}). Log: ${c.log}`);
                    const u = o.toHex(c.hash).toUpperCase();
                    return new Promise((e, t) => a(u).then(t => {
                        clearTimeout(i), e(t)
                    }, e => {
                        clearTimeout(i), t(e)
                    }))
                }
                async txsQuery(e) {
                    return (await this.forceGetTmClient().txSearchAll({
                        query: e
                    })).txs.map(e => ({
                        height: e.height,
                        hash: o.toHex(e.hash).toUpperCase(),
                        code: e.result.code,
                        rawLog: e.result.log || "",
                        tx: e.tx,
                        gasUsed: e.result.gasUsed,
                        gasWanted: e.result.gasWanted
                    }))
                }
            }
            t.StargateClient = StargateClient
        },
        2061: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QueueingStreamingSocket = t.ConnectionStatus = void 0;
            const o = n(676),
                s = n(357),
                i = n(2062);
            var r;
            ! function(e) {
                e[e.Unconnected = 0] = "Unconnected", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected", e[e.Disconnected = 3] = "Disconnected"
            }(r = t.ConnectionStatus || (t.ConnectionStatus = {}));
            t.QueueingStreamingSocket = class QueueingStreamingSocket {
                constructor(e, t = 1e4, n) {
                    this.queue = [], this.isProcessingQueue = !1, this.url = e, this.timeout = t, this.reconnectedHandler = n;
                    const a = {
                        start: e => this.eventProducerListener = e,
                        stop: () => this.eventProducerListener = void 0
                    };
                    this.events = s.Stream.create(a), this.connectionStatusProducer = new o.DefaultValueProducer(r.Unconnected), this.connectionStatus = new o.ValueAndUpdates(this.connectionStatusProducer), this.socket = new i.StreamingSocket(this.url, this.timeout), this.socket.events.subscribe({
                        next: e => {
                            if (!this.eventProducerListener) throw new Error("No event producer listener set");
                            this.eventProducerListener.next(e)
                        },
                        error: () => this.connectionStatusProducer.update(r.Disconnected)
                    })
                }
                connect() {
                    this.connectionStatusProducer.update(r.Connecting), this.socket.connected.then(async () => (this.connectionStatusProducer.update(r.Connected), this.processQueue()), () => this.connectionStatusProducer.update(r.Disconnected)), this.socket.connect()
                }
                disconnect() {
                    this.connectionStatusProducer.update(r.Disconnected), this.socket.disconnect()
                }
                reconnect() {
                    this.socket = new i.StreamingSocket(this.url, this.timeout), this.socket.events.subscribe({
                        next: e => {
                            if (!this.eventProducerListener) throw new Error("No event producer listener set");
                            this.eventProducerListener.next(e)
                        },
                        error: () => this.connectionStatusProducer.update(r.Disconnected)
                    }), this.socket.connected.then(() => {
                        this.reconnectedHandler && this.reconnectedHandler()
                    }), this.connect()
                }
                getQueueLength() {
                    return this.queue.length
                }
                queueRequest(e) {
                    this.queue.push(e), this.processQueue()
                }
                async processQueue() {
                    if (this.isProcessingQueue || this.connectionStatus.value !== r.Connected) return;
                    let e;
                    for (this.isProcessingQueue = !0; e = this.queue.shift();) try {
                        await this.socket.send(e), this.isProcessingQueue = !1
                    } catch (t) {
                        return this.queue.unshift(e), void(this.isProcessingQueue = !1)
                    }
                }
            }
        },
        2062: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StreamingSocket = void 0;
            const o = n(357),
                s = n(2063);
            t.StreamingSocket = class StreamingSocket {
                constructor(e, t = 1e4) {
                    this.socket = new s.SocketWrapper(e, e => {
                        this.eventProducerListener && this.eventProducerListener.next(e)
                    }, e => {
                        this.eventProducerListener && this.eventProducerListener.error(e)
                    }, () => {}, e => {
                        this.eventProducerListener && (e.wasClean ? this.eventProducerListener.complete() : this.eventProducerListener.error("Socket was closed unclean"))
                    }, t), this.connected = this.socket.connected;
                    const n = {
                        start: e => this.eventProducerListener = e,
                        stop: () => this.eventProducerListener = void 0
                    };
                    this.events = o.Stream.create(n)
                }
                connect() {
                    this.socket.connect()
                }
                disconnect() {
                    this.socket.disconnect()
                }
                async send(e) {
                    return this.socket.send(e)
                }
            }
        },
        2063: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SocketWrapper = void 0;
            const s = o(n(4367));
            t.SocketWrapper = class SocketWrapper {
                constructor(e, t, n, o, s, i = 1e4) {
                    this.closed = !1, this.connected = new Promise((e, t) => {
                        this.connectedResolver = e, this.connectedRejecter = t
                    }), this.url = e, this.messageHandler = t, this.errorHandler = n, this.openHandler = o, this.closeHandler = s, this.timeout = i
                }
                connect() {
                    const e = new s.default(this.url);
                    e.onerror = e => {
                        this.clearTimeout(), this.errorHandler && this.errorHandler(e)
                    }, e.onmessage = e => {
                        this.messageHandler({
                            type: e.type,
                            data: e.data
                        })
                    }, e.onopen = e => {
                        this.clearTimeout(), this.connectedResolver(), this.openHandler && this.openHandler()
                    }, e.onclose = e => {
                        this.closed = !0, this.closeHandler && this.closeHandler(e)
                    };
                    const t = Date.now();
                    this.timeoutId = setTimeout(() => {
                        e.onmessage = () => 0, e.onerror = () => 0, e.onopen = () => 0, e.onclose = () => 0, e.close(), this.socket = void 0;
                        const n = Math.floor(Date.now() - t);
                        this.connectedRejecter(`Connection attempt timed out after ${n} ms`)
                    }, this.timeout), this.socket = e
                }
                disconnect() {
                    if (!this.socket) throw new Error("Socket undefined. This must be called after connecting.");
                    switch (this.clearTimeout(), this.socket.readyState) {
                        case s.default.OPEN:
                            this.socket.close(1e3);
                            break;
                        case s.default.CLOSED:
                            break;
                        case s.default.CONNECTING:
                            this.socket.onopen = () => 0, this.socket.onclose = () => 0, this.socket.onerror = () => 0, this.socket.onmessage = () => 0, this.socket = void 0, this.closeHandler && this.closeHandler({
                                wasClean: !1,
                                code: 4001
                            });
                            break;
                        case s.default.CLOSING:
                            break;
                        default:
                            throw new Error("Unknown readyState: " + this.socket.readyState)
                    }
                }
                async send(e) {
                    return new Promise((t, n) => {
                        if (!this.socket) throw new Error("Socket undefined. This must be called after connecting.");
                        if (this.closed) throw new Error("Socket was closed, so no data can be sent anymore.");
                        if (this.socket.readyState !== s.default.OPEN) throw new Error("Websocket is not open");
                        "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node ? this.socket.send(e, e => e ? n(e) : t()) : (this.socket.send(e), t())
                    })
                }
                clearTimeout() {
                    if (!this.timeoutId) throw new Error("Timeout ID not set. This should not happen and usually means connect() was not called.");
                    clearTimeout(this.timeoutId)
                }
            }
        },
        358: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.longify = t.createProtobufRpcClient = t.createPagination = t.toAccAddress = void 0;
            const s = n(68),
                i = n(149),
                r = o(n(1));
            t.toAccAddress = function(e) {
                return s.Bech32.decode(e).data
            }, t.createPagination = function(e) {
                return e ? {
                    key: e,
                    offset: r.default.fromNumber(0, !0),
                    limit: r.default.fromNumber(0, !0),
                    countTotal: !1
                } : void 0
            }, t.createProtobufRpcClient = function(e) {
                return {
                    request: (t, n, o) => {
                        const s = `/${t}/${n}`;
                        return e.queryUnverified(s, o)
                    }
                }
            }, t.longify = function(e) {
                const t = i.Uint64.fromString(e.toString());
                return r.default.fromBytesBE([...t.toBytesBigEndian()], !0)
            }
        },
        4289: function(e, t, n) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                    void 0 === o && (o = n), Object.defineProperty(e, o, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, o) {
                    void 0 === o && (o = n), e[o] = t[n]
                }),
                s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
                    return s(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBroadcastTxSuccess = t.isBroadcastTxFailure = t.assertIsBroadcastTxSuccess = t.isSearchByTagsQuery = t.isSearchBySentFromOrToQuery = t.isSearchByHeightQuery = t.setupStakingExtension = t.setupIbcExtension = t.setupGovExtension = t.setupDistributionExtension = t.setupBankExtension = t.setupAuthExtension = t.QueryClient = t.createProtobufRpcClient = t.createPagination = t.makeMultisignedTx = t.logs = t.GasPrice = t.calculateFee = t.isMsgWithdrawDelegatorRewardEncodeObject = t.isMsgVoteEncodeObject = t.isMsgUndelegateEncodeObject = t.isMsgTransferEncodeObject = t.isMsgSubmitProposalEncodeObject = t.isMsgSendEncodeObject = t.isMsgDepositEncodeObject = t.isMsgDelegateEncodeObject = t.AminoTypes = t.isAminoMsgWithdrawValidatorCommission = t.isAminoMsgWithdrawDelegatorReward = t.isAminoMsgVote = t.isAminoMsgVerifyInvariant = t.isAminoMsgUnjail = t.isAminoMsgUndelegate = t.isAminoMsgSubmitProposal = t.isAminoMsgSubmitEvidence = t.isAminoMsgSetWithdrawAddress = t.isAminoMsgSend = t.isAminoMsgMultiSend = t.isAminoMsgFundCommunityPool = t.isAminoMsgEditValidator = t.isAminoMsgDeposit = t.isAminoMsgDelegate = t.isAminoMsgCreateValidator = t.isAminoMsgBeginRedelegate = t.accountFromAny = t.parseCoins = t.makeCosmoshubPath = t.coins = t.coin = void 0, t.SigningStargateClient = t.defaultRegistryTypes = t.TimeoutError = t.StargateClient = void 0;
            var r = n(434);
            Object.defineProperty(t, "coin", {
                enumerable: !0,
                get: function() {
                    return r.coin
                }
            }), Object.defineProperty(t, "coins", {
                enumerable: !0,
                get: function() {
                    return r.coins
                }
            }), Object.defineProperty(t, "makeCosmoshubPath", {
                enumerable: !0,
                get: function() {
                    return r.makeCosmoshubPath
                }
            }), Object.defineProperty(t, "parseCoins", {
                enumerable: !0,
                get: function() {
                    return r.parseCoins
                }
            });
            var a = n(2032);
            Object.defineProperty(t, "accountFromAny", {
                enumerable: !0,
                get: function() {
                    return a.accountFromAny
                }
            });
            var c = n(4291);
            Object.defineProperty(t, "isAminoMsgBeginRedelegate", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgBeginRedelegate
                }
            }), Object.defineProperty(t, "isAminoMsgCreateValidator", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgCreateValidator
                }
            }), Object.defineProperty(t, "isAminoMsgDelegate", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgDelegate
                }
            }), Object.defineProperty(t, "isAminoMsgDeposit", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgDeposit
                }
            }), Object.defineProperty(t, "isAminoMsgEditValidator", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgEditValidator
                }
            }), Object.defineProperty(t, "isAminoMsgFundCommunityPool", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgFundCommunityPool
                }
            }), Object.defineProperty(t, "isAminoMsgMultiSend", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgMultiSend
                }
            }), Object.defineProperty(t, "isAminoMsgSend", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgSend
                }
            }), Object.defineProperty(t, "isAminoMsgSetWithdrawAddress", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgSetWithdrawAddress
                }
            }), Object.defineProperty(t, "isAminoMsgSubmitEvidence", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgSubmitEvidence
                }
            }), Object.defineProperty(t, "isAminoMsgSubmitProposal", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgSubmitProposal
                }
            }), Object.defineProperty(t, "isAminoMsgUndelegate", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgUndelegate
                }
            }), Object.defineProperty(t, "isAminoMsgUnjail", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgUnjail
                }
            }), Object.defineProperty(t, "isAminoMsgVerifyInvariant", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgVerifyInvariant
                }
            }), Object.defineProperty(t, "isAminoMsgVote", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgVote
                }
            }), Object.defineProperty(t, "isAminoMsgWithdrawDelegatorReward", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgWithdrawDelegatorReward
                }
            }), Object.defineProperty(t, "isAminoMsgWithdrawValidatorCommission", {
                enumerable: !0,
                get: function() {
                    return c.isAminoMsgWithdrawValidatorCommission
                }
            });
            var u = n(2033);
            Object.defineProperty(t, "AminoTypes", {
                enumerable: !0,
                get: function() {
                    return u.AminoTypes
                }
            });
            var d = n(4292);
            Object.defineProperty(t, "isMsgDelegateEncodeObject", {
                enumerable: !0,
                get: function() {
                    return d.isMsgDelegateEncodeObject
                }
            }), Object.defineProperty(t, "isMsgDepositEncodeObject", {
                enumerable: !0,
                get: function() {
                    return d.isMsgDepositEncodeObject
                }
            }), Object.defineProperty(t, "isMsgSendEncodeObject", {
                enumerable: !0,
                get: function() {
                    return d.isMsgSendEncodeObject
                }
            }), Object.defineProperty(t, "isMsgSubmitProposalEncodeObject", {
                enumerable: !0,
                get: function() {
                    return d.isMsgSubmitProposalEncodeObject
                }
            }), Object.defineProperty(t, "isMsgTransferEncodeObject", {
                enumerable: !0,
                get: function() {
                    return d.isMsgTransferEncodeObject
                }
            }), Object.defineProperty(t, "isMsgUndelegateEncodeObject", {
                enumerable: !0,
                get: function() {
                    return d.isMsgUndelegateEncodeObject
                }
            }), Object.defineProperty(t, "isMsgVoteEncodeObject", {
                enumerable: !0,
                get: function() {
                    return d.isMsgVoteEncodeObject
                }
            }), Object.defineProperty(t, "isMsgWithdrawDelegatorRewardEncodeObject", {
                enumerable: !0,
                get: function() {
                    return d.isMsgWithdrawDelegatorRewardEncodeObject
                }
            });
            var l = n(4293);
            Object.defineProperty(t, "calculateFee", {
                enumerable: !0,
                get: function() {
                    return l.calculateFee
                }
            }), Object.defineProperty(t, "GasPrice", {
                enumerable: !0,
                get: function() {
                    return l.GasPrice
                }
            }), t.logs = i(n(4294));
            var g = n(4295);
            Object.defineProperty(t, "makeMultisignedTx", {
                enumerable: !0,
                get: function() {
                    return g.makeMultisignedTx
                }
            });
            var m = n(2034);
            Object.defineProperty(t, "createPagination", {
                enumerable: !0,
                get: function() {
                    return m.createPagination
                }
            }), Object.defineProperty(t, "createProtobufRpcClient", {
                enumerable: !0,
                get: function() {
                    return m.createProtobufRpcClient
                }
            }), Object.defineProperty(t, "QueryClient", {
                enumerable: !0,
                get: function() {
                    return m.QueryClient
                }
            }), Object.defineProperty(t, "setupAuthExtension", {
                enumerable: !0,
                get: function() {
                    return m.setupAuthExtension
                }
            }), Object.defineProperty(t, "setupBankExtension", {
                enumerable: !0,
                get: function() {
                    return m.setupBankExtension
                }
            }), Object.defineProperty(t, "setupDistributionExtension", {
                enumerable: !0,
                get: function() {
                    return m.setupDistributionExtension
                }
            }), Object.defineProperty(t, "setupGovExtension", {
                enumerable: !0,
                get: function() {
                    return m.setupGovExtension
                }
            }), Object.defineProperty(t, "setupIbcExtension", {
                enumerable: !0,
                get: function() {
                    return m.setupIbcExtension
                }
            }), Object.defineProperty(t, "setupStakingExtension", {
                enumerable: !0,
                get: function() {
                    return m.setupStakingExtension
                }
            });
            var p = n(2048);
            Object.defineProperty(t, "isSearchByHeightQuery", {
                enumerable: !0,
                get: function() {
                    return p.isSearchByHeightQuery
                }
            }), Object.defineProperty(t, "isSearchBySentFromOrToQuery", {
                enumerable: !0,
                get: function() {
                    return p.isSearchBySentFromOrToQuery
                }
            }), Object.defineProperty(t, "isSearchByTagsQuery", {
                enumerable: !0,
                get: function() {
                    return p.isSearchByTagsQuery
                }
            });
            var h = n(2049);
            Object.defineProperty(t, "assertIsBroadcastTxSuccess", {
                enumerable: !0,
                get: function() {
                    return h.assertIsBroadcastTxSuccess
                }
            }), Object.defineProperty(t, "isBroadcastTxFailure", {
                enumerable: !0,
                get: function() {
                    return h.isBroadcastTxFailure
                }
            }), Object.defineProperty(t, "isBroadcastTxSuccess", {
                enumerable: !0,
                get: function() {
                    return h.isBroadcastTxSuccess
                }
            }), Object.defineProperty(t, "StargateClient", {
                enumerable: !0,
                get: function() {
                    return h.StargateClient
                }
            }), Object.defineProperty(t, "TimeoutError", {
                enumerable: !0,
                get: function() {
                    return h.TimeoutError
                }
            });
            var f = n(4379);
            Object.defineProperty(t, "defaultRegistryTypes", {
                enumerable: !0,
                get: function() {
                    return f.defaultRegistryTypes
                }
            }), Object.defineProperty(t, "SigningStargateClient", {
                enumerable: !0,
                get: function() {
                    return f.SigningStargateClient
                }
            })
        },
        4291: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isAminoMsgTransfer = t.isAminoMsgUndelegate = t.isAminoMsgBeginRedelegate = t.isAminoMsgDelegate = t.isAminoMsgEditValidator = t.isAminoMsgCreateValidator = t.isAminoMsgUnjail = t.isAminoMsgDeposit = t.isAminoMsgVote = t.isAminoMsgSubmitProposal = t.isAminoMsgSubmitEvidence = t.isAminoMsgFundCommunityPool = t.isAminoMsgWithdrawValidatorCommission = t.isAminoMsgWithdrawDelegatorReward = t.isAminoMsgSetWithdrawAddress = t.isAminoMsgVerifyInvariant = t.isAminoMsgMultiSend = t.isAminoMsgSend = void 0, t.isAminoMsgSend = function(e) {
                return "cosmos-sdk/MsgSend" === e.type
            }, t.isAminoMsgMultiSend = function(e) {
                return "cosmos-sdk/MsgMultiSend" === e.type
            }, t.isAminoMsgVerifyInvariant = function(e) {
                return "cosmos-sdk/MsgVerifyInvariant" === e.type
            }, t.isAminoMsgSetWithdrawAddress = function(e) {
                return "cosmos-sdk/MsgModifyWithdrawAddress" === e.type
            }, t.isAminoMsgWithdrawDelegatorReward = function(e) {
                return "cosmos-sdk/MsgWithdrawDelegationReward" === e.type
            }, t.isAminoMsgWithdrawValidatorCommission = function(e) {
                return "cosmos-sdk/MsgWithdrawValidatorCommission" === e.type
            }, t.isAminoMsgFundCommunityPool = function(e) {
                return "cosmos-sdk/MsgFundCommunityPool" === e.type
            }, t.isAminoMsgSubmitEvidence = function(e) {
                return "cosmos-sdk/MsgSubmitEvidence" === e.type
            }, t.isAminoMsgSubmitProposal = function(e) {
                return "cosmos-sdk/MsgSubmitProposal" === e.type
            }, t.isAminoMsgVote = function(e) {
                return "cosmos-sdk/MsgVote" === e.type
            }, t.isAminoMsgDeposit = function(e) {
                return "cosmos-sdk/MsgDeposit" === e.type
            }, t.isAminoMsgUnjail = function(e) {
                return "cosmos-sdk/MsgUnjail" === e.type
            }, t.isAminoMsgCreateValidator = function(e) {
                return "cosmos-sdk/MsgCreateValidator" === e.type
            }, t.isAminoMsgEditValidator = function(e) {
                return "cosmos-sdk/MsgEditValidator" === e.type
            }, t.isAminoMsgDelegate = function(e) {
                return "cosmos-sdk/MsgDelegate" === e.type
            }, t.isAminoMsgBeginRedelegate = function(e) {
                return "cosmos-sdk/MsgBeginRedelegate" === e.type
            }, t.isAminoMsgUndelegate = function(e) {
                return "cosmos-sdk/MsgUndelegate" === e.type
            }, t.isAminoMsgTransfer = function(e) {
                return "cosmos-sdk/MsgTransfer" === e.type
            }
        },
        4292: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isMsgVoteEncodeObject = t.isMsgSubmitProposalEncodeObject = t.isMsgDepositEncodeObject = t.isMsgTransferEncodeObject = t.isMsgWithdrawDelegatorRewardEncodeObject = t.isMsgUndelegateEncodeObject = t.isMsgDelegateEncodeObject = t.isMsgSendEncodeObject = void 0, t.isMsgSendEncodeObject = function(e) {
                return "/cosmos.bank.v1beta1.MsgSend" === e.typeUrl
            }, t.isMsgDelegateEncodeObject = function(e) {
                return "/cosmos.staking.v1beta1.MsgDelegate" === e.typeUrl
            }, t.isMsgUndelegateEncodeObject = function(e) {
                return "/cosmos.staking.v1beta1.MsgUndelegate" === e.typeUrl
            }, t.isMsgWithdrawDelegatorRewardEncodeObject = function(e) {
                return "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward" === e.typeUrl
            }, t.isMsgTransferEncodeObject = function(e) {
                return "/ibc.applications.transfer.v1.MsgTransfer" === e.typeUrl
            }, t.isMsgDepositEncodeObject = function(e) {
                return "/cosmos.gov.v1beta1.MsgDeposit" === e.typeUrl
            }, t.isMsgSubmitProposalEncodeObject = function(e) {
                return "/cosmos.gov.v1beta1.MsgSubmitProposal" === e.typeUrl
            }, t.isMsgVoteEncodeObject = function(e) {
                return "/cosmos.gov.v1beta1.MsgVote" === e.typeUrl
            }
        },
        4293: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.calculateFee = t.GasPrice = void 0;
            const o = n(149),
                s = n(434);
            class GasPrice {
                constructor(e, t) {
                    this.amount = e, this.denom = t
                }
                static fromString(e) {
                    const t = e.match(/^([0-9.]+)([a-z][a-z0-9]*)$/i);
                    if (!t) throw new Error("Invalid gas price string");
                    const [n, s, i] = t;
                    ! function(e) {
                        if (e.length < 3 || e.length > 128) throw new Error("Denom must be between 3 and 128 characters")
                    }(i);
                    const r = o.Decimal.fromUserInput(s, 18);
                    return new GasPrice(r, i)
                }
            }
            t.GasPrice = GasPrice, t.calculateFee = function(e, t) {
                const n = "string" == typeof t ? GasPrice.fromString(t) : t,
                    {
                        denom: i,
                        amount: r
                    } = n,
                    a = Math.ceil(r.multiply(new o.Uint53(e)).toFloatApproximation());
                return {
                    amount: s.coins(a, i),
                    gas: e.toString()
                }
            }
        },
        4294: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.findAttribute = t.parseRawLog = t.parseLogs = t.parseLog = t.parseEvent = t.parseAttribute = void 0;
            const o = n(185);

            function s(e) {
                if (!o.isNonNullObject(e)) throw new Error("Attribute must be a non-null object");
                const {
                    key: t,
                    value: n
                } = e;
                if ("string" != typeof t || !t) throw new Error("Attribute's key must be a non-empty string");
                if ("string" != typeof n && void 0 !== n) throw new Error("Attribute's value must be a string or unset");
                return {
                    key: t,
                    value: n || ""
                }
            }

            function i(e) {
                if (!o.isNonNullObject(e)) throw new Error("Event must be a non-null object");
                const {
                    type: t,
                    attributes: n
                } = e;
                if ("string" != typeof t || "" === t) throw new Error("Event type must be a non-empty string");
                if (!Array.isArray(n)) throw new Error("Event's attributes must be an array");
                return {
                    type: t,
                    attributes: n.map(s)
                }
            }

            function r(e) {
                if (!o.isNonNullObject(e)) throw new Error("Log must be a non-null object");
                const {
                    msg_index: t,
                    log: n,
                    events: s
                } = e;
                if ("number" != typeof t) throw new Error("Log's msg_index must be a number");
                if ("string" != typeof n) throw new Error("Log's log must be a string");
                if (!Array.isArray(s)) throw new Error("Log's events must be an array");
                return {
                    msg_index: t,
                    log: n,
                    events: s.map(i)
                }
            }

            function a(e) {
                if (!Array.isArray(e)) throw new Error("Logs must be an array");
                return e.map(r)
            }
            t.parseAttribute = s, t.parseEvent = i, t.parseLog = r, t.parseLogs = a, t.parseRawLog = function(e = "[]") {
                return a(JSON.parse(e).map(({
                    events: e
                }, t) => ({
                    msg_index: t,
                    events: e,
                    log: ""
                })))
            }, t.findAttribute = function(e, t, n) {
                var o;
                const s = e.find(() => !0),
                    i = null === (o = null == s ? void 0 : s.events.find(e => e.type === t)) || void 0 === o ? void 0 : o.attributes.find(e => e.key === n);
                if (!i) throw new Error(`Could not find attribute '${n}' in first event of type '${t}' in first log.`);
                return i
            }
        },
        4295: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.makeMultisignedTx = t.makeCompactBitArray = void 0;
            const s = n(356),
                i = n(68),
                r = n(434),
                a = n(1144),
                c = n(674),
                u = n(435),
                d = n(435),
                l = o(n(1));

            function g(e) {
                const t = Math.ceil(e.length / 8),
                    n = e.length - 8 * Math.floor(e.length / 8),
                    o = new Uint8Array(t);
                return e.forEach((e, t) => {
                    const n = Math.floor(t / 8),
                        s = t % 8;
                    e && (o[n] |= 1 << 7 - s)
                }), a.CompactBitArray.fromPartial({
                    elems: o,
                    extraBitsStored: n
                })
            }
            t.makeCompactBitArray = g, t.makeMultisignedTx = function(e, t, n, o, m) {
                const p = Array.from(m.keys()),
                    h = i.Bech32.decode(p[0]).prefix,
                    f = Array(e.value.pubkeys.length).fill(!1),
                    y = new Array;
                for (let t = 0; t < e.value.pubkeys.length; t++) {
                    const n = s.pubkeyToAddress(e.value.pubkeys[t], h),
                        o = m.get(n);
                    o && (f[t] = !0, y.push(o))
                }
                const b = {
                        publicKey: r.encodePubkey(e),
                        modeInfo: {
                            multi: {
                                bitarray: g(f),
                                modeInfos: y.map(e => ({
                                    single: {
                                        mode: c.SignMode.SIGN_MODE_LEGACY_AMINO_JSON
                                    }
                                }))
                            }
                        },
                        sequence: l.default.fromNumber(t)
                    },
                    v = u.AuthInfo.fromPartial({
                        signerInfos: [b],
                        fee: {
                            amount: [...n.amount],
                            gasLimit: l.default.fromString(n.gas)
                        }
                    }),
                    w = u.AuthInfo.encode(v).finish();
                return d.TxRaw.fromPartial({
                    bodyBytes: o,
                    authInfoBytes: w,
                    signatures: [a.MultiSignature.encode(a.MultiSignature.fromPartial({
                        signatures: y
                    })).finish()]
                })
            }
        },
        4296: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QueryClient = void 0;
            const o = n(4297),
                s = n(68),
                i = n(676),
                r = n(185);

            function a(e, t, n) {
                if (e.type !== t) throw new Error(`Op expected to be ${t}, got "${e.type}`);
                if (!r.arrayContentEquals(n, e.key)) throw new Error(`Proven key different than queried key.\nQuery: ${s.toHex(n)}\nProven: ${s.toHex(e.key)}`);
                return o.ics23.CommitmentProof.decode(e.data)
            }
            class QueryClient {
                constructor(e) {
                    this.tmClient = e
                }
                static withExtensions(e, ...t) {
                    const n = new QueryClient(e),
                        o = t.map(e => e(n));
                    for (const e of o) {
                        r.assert(r.isNonNullObject(e), "Extension must be a non-null object");
                        for (const [t, o] of Object.entries(e)) {
                            r.assert(r.isNonNullObject(o), `Module must be a non-null object. Found type ${typeof o} for module "${t}".`);
                            const e = n[t] || {};
                            n[t] = Object.assign(Object.assign({}, e), o)
                        }
                    }
                    return n
                }
                async queryVerified(e, t, n) {
                    const {
                        height: i,
                        proof: c,
                        value: u
                    } = await this.queryRawProof(e, t, n), d = a(c.ops[0], "ics23:iavl", t), l = a(c.ops[1], "ics23:simple", s.toAscii(e));
                    r.assert(l.exist), r.assert(l.exist.value), u && 0 !== u.length ? (r.assert(d.exist), r.assert(d.exist.value), o.verifyExistence(d.exist, o.iavlSpec, l.exist.value, t, u)) : (r.assert(d.nonexist), o.verifyNonExistence(d.nonexist, o.iavlSpec, l.exist.value, t));
                    const g = await this.getNextHeader(i);
                    return o.verifyExistence(l.exist, o.tendermintSpec, g.appHash, s.toAscii(e), l.exist.value), u
                }
                async queryRawProof(e, t, n) {
                    var o;
                    const {
                        key: i,
                        value: c,
                        height: u,
                        proof: d,
                        code: l,
                        log: g
                    } = await this.tmClient.abciQuery({
                        path: `/store/${e}/key`,
                        data: t,
                        prove: !0,
                        height: n
                    });
                    if (l) throw new Error(`Query failed with (${l}): ${g}`);
                    if (!r.arrayContentEquals(t, i)) throw new Error(`Response key ${s.toHex(i)} doesn't match query key ${s.toHex(t)}`);
                    if (!u) throw new Error("No query height returned");
                    if (!d || 2 !== d.ops.length) throw new Error(`Expected 2 proof ops, got ${null!==(o=null==d?void 0:d.ops.length)&&void 0!==o?o:0}. Are you using stargate?`);
                    return a(d.ops[0], "ics23:iavl", i), a(d.ops[1], "ics23:simple", s.toAscii(e)), {
                        key: i,
                        value: c,
                        height: u,
                        proof: {
                            ops: [...d.ops]
                        }
                    }
                }
                async queryUnverified(e, t) {
                    const n = await this.tmClient.abciQuery({
                        path: e,
                        data: t,
                        prove: !1
                    });
                    if (n.code) throw new Error(`Query failed with (${n.code}): ${n.log}`);
                    return n.value
                }
                async getNextHeader(e) {
                    if (r.assertDefined(e), 0 === e) throw new Error("Query returned height 0, cannot prove it");
                    const t = e + 1;
                    let n, o;
                    try {
                        o = this.tmClient.subscribeNewBlockHeader()
                    } catch (e) {}
                    if (o) {
                        const e = await i.firstEvent(o);
                        e.height === t && (n = e)
                    }
                    for (; !n;) {
                        const o = (await this.tmClient.blockchain(e, t)).blockMetas.map(e => e.header).find(e => e.height === t);
                        o ? n = o : await r.sleep(1e3)
                    }
                    return r.assert(n.height === t, "Got wrong header. This is a bug in the logic above."), n
                }
            }
            t.QueryClient = QueryClient
        },
        4319: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setupAuthExtension = void 0;
            const o = n(4320),
                s = n(113),
                i = n(358);
            t.setupAuthExtension = function(e) {
                const t = i.createProtobufRpcClient(e),
                    n = new o.QueryClientImpl(t);
                return {
                    auth: {
                        account: async e => {
                            const {
                                account: t
                            } = await n.Account({
                                address: e
                            });
                            return null != t ? t : null
                        },
                        verified: {
                            account: async t => {
                                const n = Uint8Array.from([1, ...i.toAccAddress(t)]),
                                    o = await e.queryVerified("acc", n);
                                return 0 === o.length ? null : s.Any.decode(o)
                            }
                        }
                    }
                }
            }
        },
        4321: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setupBankExtension = void 0;
            const o = n(68),
                s = n(185),
                i = n(4322),
                r = n(160),
                a = n(358);
            t.setupBankExtension = function(e) {
                const t = a.createProtobufRpcClient(e),
                    n = new i.QueryClientImpl(t);
                return {
                    bank: {
                        balance: async (e, t) => {
                            const {
                                balance: o
                            } = await n.Balance({
                                address: e,
                                denom: t
                            });
                            return s.assert(o), o
                        },
                        allBalances: async e => {
                            const {
                                balances: t
                            } = await n.AllBalances({
                                address: e
                            });
                            return t
                        },
                        totalSupply: async () => {
                            const {
                                supply: e
                            } = await n.TotalSupply({});
                            return e
                        },
                        supplyOf: async e => {
                            const {
                                amount: t
                            } = await n.SupplyOf({
                                denom: e
                            });
                            return s.assert(t), t
                        },
                        verified: {
                            balance: async (t, n) => {
                                const s = Uint8Array.from([...o.toAscii("balances"), ...a.toAccAddress(t), ...o.toAscii(n)]),
                                    i = await e.queryVerified("bank", s);
                                return i.length ? r.Coin.decode(i) : null
                            }
                        }
                    }
                }
            }
        },
        4323: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setupDistributionExtension = void 0;
            const s = n(4324),
                i = o(n(1)),
                r = n(358);
            t.setupDistributionExtension = function(e) {
                const t = r.createProtobufRpcClient(e),
                    n = new s.QueryClientImpl(t);
                return {
                    distribution: {
                        communityPool: async () => await n.CommunityPool({}),
                        delegationRewards: async (e, t) => await n.DelegationRewards({
                            delegatorAddress: e,
                            validatorAddress: t
                        }),
                        delegationTotalRewards: async e => await n.DelegationTotalRewards({
                            delegatorAddress: e
                        }),
                        delegatorValidators: async e => await n.DelegatorValidators({
                            delegatorAddress: e
                        }),
                        delegatorWithdrawAddress: async e => await n.DelegatorWithdrawAddress({
                            delegatorAddress: e
                        }),
                        params: async () => await n.Params({}),
                        validatorCommission: async e => await n.ValidatorCommission({
                            validatorAddress: e
                        }),
                        validatorOutstandingRewards: async e => await n.ValidatorOutstandingRewards({
                            validatorAddress: e
                        }),
                        validatorSlashes: async (e, t, o, s) => await n.ValidatorSlashes({
                            validatorAddress: e,
                            startingHeight: i.default.fromNumber(t, !0),
                            endingHeight: i.default.fromNumber(o, !0),
                            pagination: r.createPagination(s)
                        })
                    }
                }
            }
        },
        4326: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setupGovExtension = void 0;
            const o = n(4327),
                s = n(358);
            t.setupGovExtension = function(e) {
                const t = s.createProtobufRpcClient(e),
                    n = new o.QueryClientImpl(t);
                return {
                    gov: {
                        params: async e => await n.Params({
                            paramsType: e
                        }),
                        proposals: async (e, t, o, i) => await n.Proposals({
                            proposalStatus: e,
                            depositor: t,
                            voter: o,
                            pagination: s.createPagination(i)
                        }),
                        proposal: async e => await n.Proposal({
                            proposalId: s.longify(e)
                        }),
                        deposits: async (e, t) => await n.Deposits({
                            proposalId: s.longify(e),
                            pagination: s.createPagination(t)
                        }),
                        deposit: async (e, t) => await n.Deposit({
                            proposalId: s.longify(e),
                            depositor: t
                        }),
                        tally: async e => await n.TallyResult({
                            proposalId: s.longify(e)
                        }),
                        votes: async (e, t) => await n.Votes({
                            proposalId: s.longify(e),
                            pagination: s.createPagination(t)
                        }),
                        vote: async (e, t) => await n.Vote({
                            proposalId: s.longify(e),
                            voter: t
                        })
                    }
                }
            }
        },
        4328: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setupIbcExtension = void 0;
            const s = n(68),
                i = n(149),
                r = n(4329),
                a = n(1149),
                c = n(4331),
                u = n(4332),
                d = n(4333),
                l = n(4334),
                g = o(n(1)),
                m = n(358);

            function p(e) {
                if ("/ibc.lightclients.tendermint.v1.ClientState" !== (null == e ? void 0 : e.typeUrl)) throw new Error("Unexpected client state type: " + (null == e ? void 0 : e.typeUrl));
                return l.ClientState.decode(e.value)
            }
            t.setupIbcExtension = function(e) {
                const t = m.createProtobufRpcClient(e),
                    n = new c.QueryClientImpl(t),
                    o = new u.QueryClientImpl(t),
                    h = new d.QueryClientImpl(t),
                    f = new r.QueryClientImpl(t);
                return {
                    ibc: {
                        channel: {
                            channel: async (e, t) => n.Channel({
                                portId: e,
                                channelId: t
                            }),
                            channels: async e => n.Channels({
                                pagination: m.createPagination(e)
                            }),
                            allChannels: async () => {
                                var e;
                                const t = [];
                                let o, s;
                                do {
                                    o = await n.Channels({
                                        pagination: m.createPagination(s)
                                    }), t.push(...o.channels), s = null === (e = o.pagination) || void 0 === e ? void 0 : e.nextKey
                                } while (s && s.length);
                                return {
                                    channels: t,
                                    height: o.height
                                }
                            },
                            connectionChannels: async (e, t) => n.ConnectionChannels({
                                connection: e,
                                pagination: m.createPagination(t)
                            }),
                            allConnectionChannels: async e => {
                                var t;
                                const o = [];
                                let s, i;
                                do {
                                    s = await n.ConnectionChannels({
                                        connection: e,
                                        pagination: m.createPagination(i)
                                    }), o.push(...s.channels), i = null === (t = s.pagination) || void 0 === t ? void 0 : t.nextKey
                                } while (i && i.length);
                                return {
                                    channels: o,
                                    height: s.height
                                }
                            },
                            clientState: async (e, t) => n.ChannelClientState({
                                portId: e,
                                channelId: t
                            }),
                            consensusState: async (e, t, o, s) => n.ChannelConsensusState({
                                portId: e,
                                channelId: t,
                                revisionNumber: g.default.fromNumber(o, !0),
                                revisionHeight: g.default.fromNumber(s, !0)
                            }),
                            packetCommitment: async (e, t, o) => n.PacketCommitment({
                                portId: e,
                                channelId: t,
                                sequence: o
                            }),
                            packetCommitments: async (e, t, o) => n.PacketCommitments({
                                channelId: t,
                                portId: e,
                                pagination: m.createPagination(o)
                            }),
                            allPacketCommitments: async (e, t) => {
                                var o;
                                const s = [];
                                let i, r;
                                do {
                                    i = await n.PacketCommitments({
                                        channelId: t,
                                        portId: e,
                                        pagination: m.createPagination(r)
                                    }), s.push(...i.commitments), r = null === (o = i.pagination) || void 0 === o ? void 0 : o.nextKey
                                } while (r && r.length);
                                return {
                                    commitments: s,
                                    height: i.height
                                }
                            },
                            packetReceipt: async (e, t, o) => n.PacketReceipt({
                                portId: e,
                                channelId: t,
                                sequence: g.default.fromNumber(o, !0)
                            }),
                            packetAcknowledgement: async (e, t, o) => n.PacketAcknowledgement({
                                portId: e,
                                channelId: t,
                                sequence: g.default.fromNumber(o, !0)
                            }),
                            packetAcknowledgements: async (e, t, o) => n.PacketAcknowledgements({
                                portId: e,
                                channelId: t,
                                pagination: m.createPagination(o)
                            }),
                            allPacketAcknowledgements: async (e, t) => {
                                var o;
                                const s = [];
                                let i, r;
                                do {
                                    i = await n.PacketAcknowledgements({
                                        channelId: t,
                                        portId: e,
                                        pagination: m.createPagination(r)
                                    }), s.push(...i.acknowledgements), r = null === (o = i.pagination) || void 0 === o ? void 0 : o.nextKey
                                } while (r && r.length);
                                return {
                                    acknowledgements: s,
                                    height: i.height
                                }
                            },
                            unreceivedPackets: async (e, t, o) => n.UnreceivedPackets({
                                portId: e,
                                channelId: t,
                                packetCommitmentSequences: o.map(e => g.default.fromNumber(e, !0))
                            }),
                            unreceivedAcks: async (e, t, o) => n.UnreceivedAcks({
                                portId: e,
                                channelId: t,
                                packetAckSequences: o.map(e => g.default.fromNumber(e, !0))
                            }),
                            nextSequenceReceive: async (e, t) => n.NextSequenceReceive({
                                portId: e,
                                channelId: t
                            })
                        },
                        client: {
                            state: async e => o.ClientState({
                                clientId: e
                            }),
                            states: async e => o.ClientStates({
                                pagination: m.createPagination(e)
                            }),
                            allStates: async () => {
                                var e;
                                const t = [];
                                let n, s;
                                do {
                                    n = await o.ClientStates({
                                        pagination: m.createPagination(s)
                                    }), t.push(...n.clientStates), s = null === (e = n.pagination) || void 0 === e ? void 0 : e.nextKey
                                } while (s && s.length);
                                return {
                                    clientStates: t
                                }
                            },
                            consensusState: async (e, t) => o.ConsensusState(u.QueryConsensusStateRequest.fromPartial({
                                clientId: e,
                                revisionHeight: void 0 !== t ? g.default.fromNumber(t, !0) : void 0,
                                latestHeight: void 0 === t
                            })),
                            consensusStates: async (e, t) => o.ConsensusStates({
                                clientId: e,
                                pagination: m.createPagination(t)
                            }),
                            allConsensusStates: async e => {
                                var t;
                                const n = [];
                                let s, i;
                                do {
                                    s = await o.ConsensusStates({
                                        clientId: e,
                                        pagination: m.createPagination(i)
                                    }), n.push(...s.consensusStates), i = null === (t = s.pagination) || void 0 === t ? void 0 : t.nextKey
                                } while (i && i.length);
                                return {
                                    consensusStates: n
                                }
                            },
                            params: async () => o.ClientParams({}),
                            stateTm: async e => p((await o.ClientState({
                                clientId: e
                            })).clientState),
                            statesTm: async e => {
                                const {
                                    clientStates: t
                                } = await o.ClientStates({
                                    pagination: m.createPagination(e)
                                });
                                return t.map(({
                                    clientState: e
                                }) => p(e))
                            },
                            allStatesTm: async () => {
                                var e;
                                const t = [];
                                let n, s;
                                do {
                                    n = await o.ClientStates({
                                        pagination: m.createPagination(s)
                                    }), t.push(...n.clientStates), s = null === (e = n.pagination) || void 0 === e ? void 0 : e.nextKey
                                } while (s && s.length);
                                return t.map(({
                                    clientState: e
                                }) => p(e))
                            },
                            consensusStateTm: async (e, t) => function(e) {
                                if ("/ibc.lightclients.tendermint.v1.ConsensusState" !== (null == e ? void 0 : e.typeUrl)) throw new Error("Unexpected client state type: " + (null == e ? void 0 : e.typeUrl));
                                return l.ConsensusState.decode(e.value)
                            }((await o.ConsensusState(u.QueryConsensusStateRequest.fromPartial({
                                clientId: e,
                                revisionHeight: null == t ? void 0 : t.revisionHeight,
                                revisionNumber: null == t ? void 0 : t.revisionNumber,
                                latestHeight: void 0 === t
                            }))).consensusState)
                        },
                        connection: {
                            connection: async e => h.Connection({
                                connectionId: e
                            }),
                            connections: async e => h.Connections({
                                pagination: m.createPagination(e)
                            }),
                            allConnections: async () => {
                                var e;
                                const t = [];
                                let n, o;
                                do {
                                    n = await h.Connections({
                                        pagination: m.createPagination(o)
                                    }), t.push(...n.connections), o = null === (e = n.pagination) || void 0 === e ? void 0 : e.nextKey
                                } while (o && o.length);
                                return {
                                    connections: t,
                                    height: n.height
                                }
                            },
                            clientConnections: async e => h.ClientConnections({
                                clientId: e
                            }),
                            clientState: async e => h.ConnectionClientState({
                                connectionId: e
                            }),
                            consensusState: async (e, t) => h.ConnectionConsensusState(d.QueryConnectionConsensusStateRequest.fromPartial({
                                connectionId: e,
                                revisionHeight: g.default.fromNumber(t, !0)
                            }))
                        },
                        transfer: {
                            denomTrace: async e => f.DenomTrace({
                                hash: e
                            }),
                            denomTraces: async e => f.DenomTraces({
                                pagination: m.createPagination(e)
                            }),
                            allDenomTraces: async () => {
                                var e;
                                const t = [];
                                let n, o;
                                do {
                                    n = await f.DenomTraces({
                                        pagination: m.createPagination(o)
                                    }), t.push(...n.denomTraces), o = null === (e = n.pagination) || void 0 === e ? void 0 : e.nextKey
                                } while (o && o.length);
                                return {
                                    denomTraces: t
                                }
                            },
                            params: async () => f.Params({})
                        },
                        verified: {
                            channel: {
                                channel: async (t, n) => {
                                    const o = s.toAscii(`channelEnds/ports/${t}/channels/${n}`),
                                        i = await e.queryVerified("ibc", o);
                                    return i.length ? a.Channel.decode(i) : null
                                },
                                packetCommitment: async (t, n, o) => {
                                    const i = s.toAscii(`commitments/ports/${t}/channels/${n}/packets/${o}`);
                                    return await e.queryVerified("ibc", i)
                                },
                                packetAcknowledgement: async (t, n, o) => {
                                    const i = s.toAscii(`acks/ports/${t}/channels/${n}/acknowledgements/${o}`);
                                    return await e.queryVerified("ibc", i)
                                },
                                nextSequenceReceive: async (t, n) => {
                                    const o = s.toAscii(`seqAcks/ports/${t}/channels/${n}/nextSequenceAck`),
                                        r = await e.queryVerified("ibc", o);
                                    return r.length ? i.Uint64.fromBytes(r).toNumber() : null
                                }
                            }
                        }
                    }
                }
            }
        },
        4338: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setupStakingExtension = void 0;
            const s = n(4339),
                i = o(n(1)),
                r = n(358);
            t.setupStakingExtension = function(e) {
                const t = r.createProtobufRpcClient(e),
                    n = new s.QueryClientImpl(t);
                return {
                    staking: {
                        delegation: async (e, t) => await n.Delegation({
                            delegatorAddr: e,
                            validatorAddr: t
                        }),
                        delegatorDelegations: async (e, t) => await n.DelegatorDelegations({
                            delegatorAddr: e,
                            pagination: r.createPagination(t)
                        }),
                        delegatorUnbondingDelegations: async (e, t) => await n.DelegatorUnbondingDelegations({
                            delegatorAddr: e,
                            pagination: r.createPagination(t)
                        }),
                        delegatorValidator: async (e, t) => await n.DelegatorValidator({
                            delegatorAddr: e,
                            validatorAddr: t
                        }),
                        delegatorValidators: async (e, t) => await n.DelegatorValidators({
                            delegatorAddr: e,
                            pagination: r.createPagination(t)
                        }),
                        historicalInfo: async e => await n.HistoricalInfo({
                            height: i.default.fromNumber(e, !0)
                        }),
                        params: async () => await n.Params({}),
                        pool: async () => await n.Pool({}),
                        redelegations: async (e, t, o, s) => await n.Redelegations({
                            delegatorAddr: e,
                            srcValidatorAddr: t,
                            dstValidatorAddr: o,
                            pagination: r.createPagination(s)
                        }),
                        unbondingDelegation: async (e, t) => await n.UnbondingDelegation({
                            delegatorAddr: e,
                            validatorAddr: t
                        }),
                        validator: async e => await n.Validator({
                            validatorAddr: e
                        }),
                        validatorDelegations: async (e, t) => await n.ValidatorDelegations({
                            validatorAddr: e,
                            pagination: r.createPagination(t)
                        }),
                        validators: async (e, t) => await n.Validators({
                            status: e,
                            pagination: r.createPagination(t)
                        }),
                        validatorUnbondingDelegations: async (e, t) => await n.ValidatorUnbondingDelegations({
                            validatorAddr: e,
                            pagination: r.createPagination(t)
                        })
                    }
                }
            }
        },
        4366: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StreamingSocket = t.SocketWrapper = t.ReconnectingSocket = t.QueueingStreamingSocket = t.ConnectionStatus = void 0;
            var o = n(2061);
            Object.defineProperty(t, "ConnectionStatus", {
                enumerable: !0,
                get: function() {
                    return o.ConnectionStatus
                }
            }), Object.defineProperty(t, "QueueingStreamingSocket", {
                enumerable: !0,
                get: function() {
                    return o.QueueingStreamingSocket
                }
            });
            var s = n(4368);
            Object.defineProperty(t, "ReconnectingSocket", {
                enumerable: !0,
                get: function() {
                    return s.ReconnectingSocket
                }
            });
            var i = n(2063);
            Object.defineProperty(t, "SocketWrapper", {
                enumerable: !0,
                get: function() {
                    return i.SocketWrapper
                }
            });
            var r = n(2062);
            Object.defineProperty(t, "StreamingSocket", {
                enumerable: !0,
                get: function() {
                    return r.StreamingSocket
                }
            })
        },
        4368: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ReconnectingSocket = void 0;
            const o = n(357),
                s = n(2061);
            class ReconnectingSocket {
                constructor(e, t = 1e4, n) {
                    this.unconnected = !0, this.disconnected = !1, this.timeoutIndex = 0, this.reconnectTimeout = null;
                    const i = {
                        start: e => this.eventProducerListener = e,
                        stop: () => this.eventProducerListener = void 0
                    };
                    this.events = o.Stream.create(i), this.socket = new s.QueueingStreamingSocket(e, t, n), this.socket.events.subscribe({
                        next: e => {
                            this.eventProducerListener && this.eventProducerListener.next(e)
                        },
                        error: e => {
                            this.eventProducerListener && this.eventProducerListener.error(e)
                        }
                    }), this.connectionStatus = this.socket.connectionStatus, this.connectionStatus.updates.subscribe({
                        next: e => {
                            e === s.ConnectionStatus.Connected && (this.timeoutIndex = 0), e === s.ConnectionStatus.Disconnected && (this.reconnectTimeout && (clearTimeout(this.reconnectTimeout), this.reconnectTimeout = null), this.reconnectTimeout = setTimeout(() => this.socket.reconnect(), ReconnectingSocket.calculateTimeout(this.timeoutIndex++)))
                        }
                    })
                }
                static calculateTimeout(e) {
                    return Math.min(2 ** e * 100, 5e3)
                }
                connect() {
                    if (!this.unconnected) throw new Error("Cannot connect: socket has already connected");
                    this.socket.connect(), this.unconnected = !1
                }
                disconnect() {
                    if (this.unconnected) throw new Error("Cannot disconnect: socket has not yet connected");
                    this.socket.disconnect(), this.eventProducerListener && this.eventProducerListener.complete(), this.disconnected = !0
                }
                queueRequest(e) {
                    if (this.disconnected) throw new Error("Cannot queue request: socket has disconnected");
                    this.socket.queueRequest(e)
                }
            }
            t.ReconnectingSocket = ReconnectingSocket
        },
        4379: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SigningStargateClient = t.defaultRegistryTypes = void 0;
            const s = n(356),
                i = n(68),
                r = n(149),
                a = n(434),
                c = n(2050),
                u = n(185),
                d = n(2029),
                l = n(4380),
                g = n(4381),
                m = n(4382),
                p = n(674),
                h = n(435),
                f = n(4383),
                y = n(4384),
                b = n(4385),
                v = n(4386),
                w = o(n(1)),
                A = n(2033),
                M = n(2049);

            function S() {
                return new a.Registry(t.defaultRegistryTypes)
            }
            t.defaultRegistryTypes = [
                ["/cosmos.bank.v1beta1.MsgMultiSend", d.MsgMultiSend],
                ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", l.MsgFundCommunityPool],
                ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", l.MsgSetWithdrawAddress],
                ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", l.MsgWithdrawDelegatorReward],
                ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", l.MsgWithdrawValidatorCommission],
                ["/cosmos.gov.v1beta1.MsgDeposit", g.MsgDeposit],
                ["/cosmos.gov.v1beta1.MsgSubmitProposal", g.MsgSubmitProposal],
                ["/cosmos.gov.v1beta1.MsgVote", g.MsgVote],
                ["/cosmos.staking.v1beta1.MsgBeginRedelegate", m.MsgBeginRedelegate],
                ["/cosmos.staking.v1beta1.MsgCreateValidator", m.MsgCreateValidator],
                ["/cosmos.staking.v1beta1.MsgDelegate", m.MsgDelegate],
                ["/cosmos.staking.v1beta1.MsgEditValidator", m.MsgEditValidator],
                ["/cosmos.staking.v1beta1.MsgUndelegate", m.MsgUndelegate],
                ["/ibc.core.channel.v1.MsgChannelOpenInit", y.MsgChannelOpenInit],
                ["/ibc.core.channel.v1.MsgChannelOpenTry", y.MsgChannelOpenTry],
                ["/ibc.core.channel.v1.MsgChannelOpenAck", y.MsgChannelOpenAck],
                ["/ibc.core.channel.v1.MsgChannelOpenConfirm", y.MsgChannelOpenConfirm],
                ["/ibc.core.channel.v1.MsgChannelCloseInit", y.MsgChannelCloseInit],
                ["/ibc.core.channel.v1.MsgChannelCloseConfirm", y.MsgChannelCloseConfirm],
                ["/ibc.core.channel.v1.MsgRecvPacket", y.MsgRecvPacket],
                ["/ibc.core.channel.v1.MsgTimeout ", y.MsgTimeout],
                ["/ibc.core.channel.v1.MsgTimeoutOnClose", y.MsgTimeoutOnClose],
                ["/ibc.core.channel.v1.MsgAcknowledgement", y.MsgAcknowledgement],
                ["/ibc.core.client.v1.MsgCreateClient", b.MsgCreateClient],
                ["/ibc.core.client.v1.MsgUpdateClient", b.MsgUpdateClient],
                ["/ibc.core.client.v1.MsgUpgradeClient", b.MsgUpgradeClient],
                ["/ibc.core.client.v1.MsgSubmitMisbehaviour", b.MsgSubmitMisbehaviour],
                ["/ibc.core.connection.v1.MsgConnectionOpenInit", v.MsgConnectionOpenInit],
                ["/ibc.core.connection.v1.MsgConnectionOpenTry", v.MsgConnectionOpenTry],
                ["/ibc.core.connection.v1.MsgConnectionOpenAck", v.MsgConnectionOpenAck],
                ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", v.MsgConnectionOpenConfirm],
                ["/ibc.applications.transfer.v1.MsgTransfer", f.MsgTransfer]
            ];
            class SigningStargateClient extends M.StargateClient {
                constructor(e, t, n) {
                    super(e);
                    const {
                        registry: o = S(),
                        aminoTypes: s = new A.AminoTypes({
                            prefix: n.prefix
                        })
                    } = n;
                    this.registry = o, this.aminoTypes = s, this.signer = t, this.broadcastTimeoutMs = n.broadcastTimeoutMs, this.broadcastPollIntervalMs = n.broadcastPollIntervalMs
                }
                static async connectWithSigner(e, t, n = {}) {
                    const o = await c.Tendermint34Client.connect(e);
                    return new SigningStargateClient(o, t, n)
                }
                static async offline(e, t = {}) {
                    return new SigningStargateClient(void 0, e, t)
                }
                async sendTokens(e, t, n, o, s = "") {
                    const i = {
                        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                        value: {
                            fromAddress: e,
                            toAddress: t,
                            amount: [...n]
                        }
                    };
                    return this.signAndBroadcast(e, [i], o, s)
                }
                async delegateTokens(e, t, n, o, s = "") {
                    const i = {
                        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                        value: m.MsgDelegate.fromPartial({
                            delegatorAddress: e,
                            validatorAddress: t,
                            amount: n
                        })
                    };
                    return this.signAndBroadcast(e, [i], o, s)
                }
                async undelegateTokens(e, t, n, o, s = "") {
                    const i = {
                        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                        value: m.MsgUndelegate.fromPartial({
                            delegatorAddress: e,
                            validatorAddress: t,
                            amount: n
                        })
                    };
                    return this.signAndBroadcast(e, [i], o, s)
                }
                async withdrawRewards(e, t, n, o = "") {
                    const s = {
                        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                        value: l.MsgWithdrawDelegatorReward.fromPartial({
                            delegatorAddress: e,
                            validatorAddress: t
                        })
                    };
                    return this.signAndBroadcast(e, [s], n, o)
                }
                async sendIbcTokens(e, t, n, o, s, i, r, a, c = "") {
                    const u = r ? w.default.fromNumber(r).multiply(1e9) : void 0,
                        d = {
                            typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                            value: f.MsgTransfer.fromPartial({
                                sourcePort: o,
                                sourceChannel: s,
                                sender: e,
                                receiver: t,
                                token: n,
                                timeoutHeight: i,
                                timeoutTimestamp: u
                            })
                        };
                    return this.signAndBroadcast(e, [d], a, c)
                }
                async signAndBroadcast(e, t, n, o = "") {
                    const s = await this.sign(e, t, n, o),
                        i = h.TxRaw.encode(s).finish();
                    return this.broadcastTx(i, this.broadcastTimeoutMs, this.broadcastPollIntervalMs)
                }
                async sign(e, t, n, o, s) {
                    let i;
                    if (s) i = s;
                    else {
                        const {
                            accountNumber: t,
                            sequence: n
                        } = await this.getSequence(e);
                        i = {
                            accountNumber: t,
                            sequence: n,
                            chainId: await this.getChainId()
                        }
                    }
                    return a.isOfflineDirectSigner(this.signer) ? this.signDirect(e, t, n, o, i) : this.signAmino(e, t, n, o, i)
                }
                async signAmino(e, t, n, o, {
                    accountNumber: c,
                    sequence: d,
                    chainId: l
                }) {
                    u.assert(!a.isOfflineDirectSigner(this.signer));
                    const g = (await this.signer.getAccounts()).find(t => t.address === e);
                    if (!g) throw new Error("Failed to retrieve account from signer");
                    const m = a.encodePubkey(s.encodeSecp256k1Pubkey(g.pubkey)),
                        f = p.SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
                        y = t.map(e => this.aminoTypes.toAmino(e)),
                        b = s.makeSignDoc(y, n, l, o, c, d),
                        {
                            signature: v,
                            signed: w
                        } = await this.signer.signAmino(e, b),
                        A = {
                            typeUrl: "/cosmos.tx.v1beta1.TxBody",
                            value: {
                                messages: w.msgs.map(e => this.aminoTypes.fromAmino(e)),
                                memo: w.memo
                            }
                        },
                        M = this.registry.encode(A),
                        S = r.Int53.fromString(w.fee.gas).toNumber(),
                        k = r.Int53.fromString(w.sequence).toNumber(),
                        P = a.makeAuthInfoBytes([{
                            pubkey: m,
                            sequence: k
                        }], w.fee.amount, S, f);
                    return h.TxRaw.fromPartial({
                        bodyBytes: M,
                        authInfoBytes: P,
                        signatures: [i.fromBase64(v.signature)]
                    })
                }
                async signDirect(e, t, n, o, {
                    accountNumber: c,
                    sequence: d,
                    chainId: l
                }) {
                    u.assert(a.isOfflineDirectSigner(this.signer));
                    const g = (await this.signer.getAccounts()).find(t => t.address === e);
                    if (!g) throw new Error("Failed to retrieve account from signer");
                    const m = a.encodePubkey(s.encodeSecp256k1Pubkey(g.pubkey)),
                        p = {
                            typeUrl: "/cosmos.tx.v1beta1.TxBody",
                            value: {
                                messages: t,
                                memo: o
                            }
                        },
                        f = this.registry.encode(p),
                        y = r.Int53.fromString(n.gas).toNumber(),
                        b = a.makeAuthInfoBytes([{
                            pubkey: m,
                            sequence: d
                        }], n.amount, y),
                        v = a.makeSignDoc(f, b, l, c),
                        {
                            signature: w,
                            signed: A
                        } = await this.signer.signDirect(e, v);
                    return h.TxRaw.fromPartial({
                        bodyBytes: A.bodyBytes,
                        authInfoBytes: A.authInfoBytes,
                        signatures: [i.fromBase64(w.signature)]
                    })
                }
            }
            t.SigningStargateClient = SigningStargateClient
        }
    }
]);