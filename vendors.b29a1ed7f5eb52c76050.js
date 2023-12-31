(window.webpackJsonp = window.webpackJsonp || []).push([
    [113], {
        1067: function(t, o, e) {
            const {
                ADDRESS_PREFIX: r,
                ADDRESS_PREFIX_BYTE: s
            } = e(1835), {
                base64DecodeFromString: n,
                hexStr2byteArray: a
            } = (e(411).base64EncodeToString, e(411)), {
                encode58: i,
                decode58: p
            } = e(3437), c = e(85).ec, {
                keccak256: l
            } = e(3438), u = e(1836), d = e(1835).ADDRESS_SIZE, {
                byte2hexStr: g,
                byteArray2hexStr: y
            } = e(1837);

            function B(t) {
                65 === t.length && (t = t.slice(1));
                var o = l(t).toString().substring(24);
                return a(o = r + o)
            }

            function f(t) {
                return B(T(t))
            }

            function h(t) {
                var o = I(t),
                    e = I(o).slice(0, 4);
                return e = t.concat(e), i(e)
            }

            function T(t) {
                for (var o = new c("secp256k1").keyFromPrivate(t, "bytes").getPublic(), e = o.x, r = o.y, s = e.toString("hex"); s.length < 64;) s = "0" + s;
                for (var n = r.toString("hex"); n.length < 64;) n = "0" + n;
                return a("04" + s + n)
            }

            function M(t, o) {
                let e = new c("secp256k1").keyFromPrivate(o, "bytes").sign(t),
                    r = e.r,
                    s = e.s,
                    n = e.recoveryParam,
                    i = r.toString("hex");
                for (; i.length < 64;) i = "0" + i;
                let p = s.toString("hex");
                for (; p.length < 64;) p = "0" + p;
                let l = g(n);
                return a(i + p + l)
            }

            function I(t) {
                let o = new u("SHA-256", "HEX"),
                    e = y(t);
                o.update(e);
                let r = o.getHash("HEX");
                return a(r)
            }
            t.exports = {
                signTransaction: function(t, o) {
                    "string" == typeof t && (t = a(t));
                    let e = o.getRawData(),
                        r = M(I(e.serializeBinary()), t),
                        s = new Uint8Array(r),
                        n = e.getContractList().length;
                    for (let t = 0; t < n; t++) o.addSignature(s);
                    return {
                        transaction: o,
                        hex: y(o.serializeBinary())
                    }
                },
                passwordToAddress: function(t) {
                    return h(f(n(t)))
                },
                genPriKey: function() {
                    let t = new c("secp256k1").genKeyPair().getPrivate().toString("hex");
                    for (; t.length < 64;) t = "0" + t;
                    return a(t)
                },
                getAddressFromPriKey: f,
                getPubKeyFromPriKey: T,
                getBase58CheckAddress: h,
                isAddressValid: function(t) {
                    try {
                        if ("string" != typeof t) return !1;
                        if (t.length !== d) return !1;
                        var o = p(t);
                        if (25 !== o.length) return !1;
                        if (o[0] !== s) return !1;
                        var e = o.slice(21),
                            r = I(o = o.slice(0, 21)),
                            n = I(r).slice(0, 4);
                        if (e[0] == n[0] && e[1] == n[1] && e[2] == n[2] && e[3] == n[3]) return !0
                    } catch (t) {}
                    return !1
                },
                getBase58CheckAddressFromPriKeyBase64String: function(t) {
                    return h(B(T(n(t))))
                },
                pkToAddress: function(t) {
                    return h(f(a(t)))
                },
                decode58Check: function(t) {
                    var o = p(t);
                    if (o.length <= 4) return console.error("ERROR CHECK"), null;
                    var e = o.slice(0, o.length - 4),
                        r = I(e),
                        s = I(r);
                    return s[0] === o[e.length] && s[1] === o[e.length + 1] && s[2] === o[e.length + 2] && s[3] === o[e.length + 3] ? e : null
                },
                signBytes: function(t, o) {
                    return "string" == typeof t && (t = a(t)), M(I(o), t)
                }
            }
        },
        1834: function(t, o, e) {
            const r = e(1067).decode58Check,
                {
                    Block: Block,
                    Transaction: s,
                    Account: n
                } = e(1838),
                a = e(1839),
                i = e(411).encodeString,
                {
                    TransferContract: p,
                    TransferAssetContract: c,
                    AccountUpdateContract: l,
                    VoteWitnessContract: u,
                    ParticipateAssetIssueContract: d,
                    AssetIssueContract: g,
                    FreezeBalanceContract: y,
                    UnfreezeBalanceContract: B,
                    WitnessUpdateContract: f,
                    WithdrawBalanceContract: h,
                    WitnessCreateContract: T,
                    UnfreezeAssetContract: M
                } = e(3441);

            function I(t, o, e) {
                let r = new a.Any;
                r.pack(t.serializeBinary(), "protocol." + e);
                let n = new s.Contract;
                n.setType(o), n.setParameter(r);
                let i = new s.raw;
                i.addContract(n);
                let p = new s;
                return p.setRawData(i), p
            }
            t.exports = {
                buildTransferTransaction: function(t, o, e, n) {
                    if ("TRX" === t.toUpperCase()) {
                        let t = new p;
                        return t.setToAddress(Uint8Array.from(r(e))), t.setOwnerAddress(Uint8Array.from(r(o))), t.setAmount(n), I(t, s.Contract.ContractType.TRANSFERCONTRACT, "TransferContract")
                    } {
                        let a = new c;
                        return a.setToAddress(Uint8Array.from(r(e))), a.setOwnerAddress(Uint8Array.from(r(o))), a.setAmount(n), a.setAssetName(i(t)), I(a, s.Contract.ContractType.TRANSFERASSETCONTRACT, "TransferAssetContract")
                    }
                },
                buildAccountUpdate: function(t, o) {
                    let e = new l;
                    return e.setOwnerAddress(Uint8Array.from(r(t))), e.setAccountName(i(o)), I(e, s.Contract.ContractType.ACCOUNTUPDATECONTRACT, "AccountUpdateContract")
                },
                buildAssetParticipate: function(t, o, e, n) {
                    let a = new d;
                    return a.setToAddress(Uint8Array.from(r(o))), a.setOwnerAddress(Uint8Array.from(r(t))), a.setAssetName(i(e)), a.setAmount(n), I(a, s.Contract.ContractType.PARTICIPATEASSETISSUECONTRACT, "ParticipateAssetIssueContract")
                },
                buildVote: function(t, o) {
                    let e = new u;
                    e.setOwnerAddress(Uint8Array.from(r(t)));
                    for (let t of Object.keys(o)) {
                        let s = new u.Vote;
                        s.setVoteAddress(Uint8Array.from(r(t)));
                        let n = parseInt(o[t]);
                        isNaN(n) || n <= 0 || (s.setVoteCount(n), e.addVotes(s))
                    }
                    return I(e, s.Contract.ContractType.VOTEWITNESSCONTRACT, "VoteWitnessContract")
                },
                buildFreezeBalance: function(t, o, e) {
                    let n = new y;
                    return n.setOwnerAddress(Uint8Array.from(r(t))), n.setFrozenBalance(o), n.setFrozenDuration(e), I(n, s.Contract.ContractType.FREEZEBALANCECONTRACT, "FreezeBalanceContract")
                },
                buildUnfreezeBalance: function(t) {
                    let o = new B;
                    return o.setOwnerAddress(Uint8Array.from(r(t))), I(o, s.Contract.ContractType.UNFREEZEBALANCECONTRACT, "UnfreezeBalanceContract")
                },
                buildAssetIssue: function(t) {
                    let o = new g;
                    if (o.setOwnerAddress(Uint8Array.from(r(t.address))), o.setName(i(t.name)), o.setAbbr(i(t.shortName)), o.setTotalSupply(t.totalSupply), o.setNum(t.num), o.setEndTime(Date.parse(t.endTime)), o.setStartTime(Date.parse(t.startTime)), o.setTrxNum(t.trxNum), o.setDescription(i(t.description)), o.setUrl(i(t.url)), o.setPublicFreeAssetNetUsage(0), o.setFreeAssetNetLimit(0), o.setPublicFreeAssetNetLimit(0), t.frozenSupply)
                        for (let e of t.frozenSupply) {
                            let t = new g.FrozenSupply;
                            t.setFrozenAmount(e.amount), t.setFrozenDays(e.days), o.addFrozenSupply(t)
                        }
                    return I(o, s.Contract.ContractType.ASSETISSUECONTRACT, "AssetIssueContract")
                },
                buildWitnessUpdate: function(t, o) {
                    let e = new f;
                    return e.setOwnerAddress(Uint8Array.from(r(t))), e.setUpdateUrl(i(o)), I(e, s.Contract.ContractType.WITNESSUPDATECONTRACT, "WitnessUpdateContract")
                },
                buildWithdrawBalance: function(t) {
                    let o = new h;
                    return o.setOwnerAddress(Uint8Array.from(r(t))), I(o, s.Contract.ContractType.WITHDRAWBALANCECONTRACT, "WithdrawBalanceContract")
                },
                buildWitnessCreate: function(t, o) {
                    let e = new T;
                    return e.setOwnerAddress(Uint8Array.from(r(t))), e.setUrl(i(o)), I(e, s.Contract.ContractType.WITNESSCREATECONTRACT, "WitnessCreateContract")
                },
                buildUnfreezeAsset: function(t) {
                    let o = new M;
                    return o.setOwnerAddress(Uint8Array.from(r(t))), I(o, s.Contract.ContractType.UNFREEZEASSETCONTRACT, "UnfreezeAssetContract")
                }
            }
        },
        1835: function(t, o) {
            t.exports = {
                ADDRESS_SIZE: 34,
                ADDRESS_PREFIX: "41",
                ADDRESS_PREFIX_BYTE: 65
            }
        },
        1837: function(t, o, e) {
            const {
                Base64: r
            } = e(3439);

            function s(t) {
                var o = "";
                return o += "0123456789ABCDEF".charAt(t >> 4), o += "0123456789ABCDEF".charAt(15 & t)
            }
            t.exports = {
                byteArray2hexStr: function(t) {
                    let o = "";
                    for (let e = 0; e < t.length; e++) o += s(t[e]);
                    return o
                },
                hextoString: function(t) {
                    let o = t.split(""),
                        e = "";
                    for (let t = 0; t < o.length / 2; t++) {
                        let r = "0x" + o[2 * t] + o[2 * t + 1];
                        e += String.fromCharCode(r)
                    }
                    return e
                },
                base64DecodeFromString: function(t) {
                    return (new r).decodeToByteArray(t)
                },
                bytesToString: function(t) {
                    if ("string" == typeof t) return t;
                    let o = "",
                        e = t;
                    for (let t = 0; t < e.length; t++) {
                        let r = e[t].toString(2),
                            s = r.match(/^1+?(?=0)/);
                        if (s && 8 === r.length) {
                            let r = s[0].length,
                                n = e[t].toString(2).slice(7 - r);
                            for (let o = 1; o < r; o++) n += e[o + t].toString(2).slice(2);
                            o += String.fromCharCode(parseInt(n, 2)), t += r - 1
                        } else o += String.fromCharCode(e[t])
                    }
                    return o
                },
                byte2hexStr: s
            }
        },
        1838: function(t, o, e) {
            var r = e(28),
                s = r,
                n = Function("return this")(),
                a = e(1839),
                i = e(3440);
            s.exportSymbol("proto.protocol.Account", null, n), s.exportSymbol("proto.protocol.Account.Frozen", null, n), s.exportSymbol("proto.protocol.AccountId", null, n), s.exportSymbol("proto.protocol.AccountType", null, n), s.exportSymbol("proto.protocol.Block", null, n), s.exportSymbol("proto.protocol.BlockHeader", null, n), s.exportSymbol("proto.protocol.BlockHeader.raw", null, n), s.exportSymbol("proto.protocol.BlockInventory", null, n), s.exportSymbol("proto.protocol.BlockInventory.BlockId", null, n), s.exportSymbol("proto.protocol.BlockInventory.Type", null, n), s.exportSymbol("proto.protocol.ChainInventory", null, n), s.exportSymbol("proto.protocol.ChainInventory.BlockId", null, n), s.exportSymbol("proto.protocol.DisconnectMessage", null, n), s.exportSymbol("proto.protocol.DynamicProperties", null, n), s.exportSymbol("proto.protocol.HelloMessage", null, n), s.exportSymbol("proto.protocol.HelloMessage.BlockId", null, n), s.exportSymbol("proto.protocol.Inventory", null, n), s.exportSymbol("proto.protocol.Inventory.InventoryType", null, n), s.exportSymbol("proto.protocol.Items", null, n), s.exportSymbol("proto.protocol.Items.ItemType", null, n), s.exportSymbol("proto.protocol.ReasonCode", null, n), s.exportSymbol("proto.protocol.TXInput", null, n), s.exportSymbol("proto.protocol.TXInput.raw", null, n), s.exportSymbol("proto.protocol.TXOutput", null, n), s.exportSymbol("proto.protocol.TXOutputs", null, n), s.exportSymbol("proto.protocol.Transaction", null, n), s.exportSymbol("proto.protocol.Transaction.Contract", null, n), s.exportSymbol("proto.protocol.Transaction.Contract.ContractType", null, n), s.exportSymbol("proto.protocol.Transaction.Result", null, n), s.exportSymbol("proto.protocol.Transaction.Result.code", null, n), s.exportSymbol("proto.protocol.Transaction.raw", null, n), s.exportSymbol("proto.protocol.Transactions", null, n), s.exportSymbol("proto.protocol.Vote", null, n), s.exportSymbol("proto.protocol.Votes", null, n), s.exportSymbol("proto.protocol.Witness", null, n), s.exportSymbol("proto.protocol.acuthrity", null, n), s.exportSymbol("proto.protocol.permision", null, n), proto.protocol.AccountId = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.AccountId, r.Message), s.DEBUG && !COMPILED && (proto.protocol.AccountId.displayName = "proto.protocol.AccountId"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.AccountId.prototype.toObject = function(t) {
                return proto.protocol.AccountId.toObject(t, this)
            }, proto.protocol.AccountId.toObject = function(t, o) {
                var e = {
                    name: o.getName_asB64(),
                    address: o.getAddress_asB64()
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.AccountId.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.AccountId;
                return proto.protocol.AccountId.deserializeBinaryFromReader(e, o)
            }, proto.protocol.AccountId.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readBytes();
                            t.setName(e);
                            break;
                        case 2:
                            e = o.readBytes();
                            t.setAddress(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.AccountId.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.AccountId.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.AccountId.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getName_asU8()).length > 0 && o.writeBytes(1, e), (e = t.getAddress_asU8()).length > 0 && o.writeBytes(2, e)
            }, proto.protocol.AccountId.prototype.getName = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.AccountId.prototype.getName_asB64 = function() {
                return r.Message.bytesAsB64(this.getName())
            }, proto.protocol.AccountId.prototype.getName_asU8 = function() {
                return r.Message.bytesAsU8(this.getName())
            }, proto.protocol.AccountId.prototype.setName = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.AccountId.prototype.getAddress = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.AccountId.prototype.getAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getAddress())
            }, proto.protocol.AccountId.prototype.getAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getAddress())
            }, proto.protocol.AccountId.prototype.setAddress = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.Vote = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.Vote, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Vote.displayName = "proto.protocol.Vote"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.Vote.prototype.toObject = function(t) {
                return proto.protocol.Vote.toObject(t, this)
            }, proto.protocol.Vote.toObject = function(t, o) {
                var e = {
                    voteAddress: o.getVoteAddress_asB64(),
                    voteCount: r.Message.getFieldWithDefault(o, 2, 0)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.Vote.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Vote;
                return proto.protocol.Vote.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Vote.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readBytes();
                            t.setVoteAddress(e);
                            break;
                        case 2:
                            e = o.readInt64();
                            t.setVoteCount(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Vote.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Vote.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Vote.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getVoteAddress_asU8()).length > 0 && o.writeBytes(1, e), 0 !== (e = t.getVoteCount()) && o.writeInt64(2, e)
            }, proto.protocol.Vote.prototype.getVoteAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.Vote.prototype.getVoteAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getVoteAddress())
            }, proto.protocol.Vote.prototype.getVoteAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getVoteAddress())
            }, proto.protocol.Vote.prototype.setVoteAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.Vote.prototype.getVoteCount = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.Vote.prototype.setVoteCount = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.Account = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.Account.repeatedFields_, null)
            }, s.inherits(proto.protocol.Account, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Account.displayName = "proto.protocol.Account"), proto.protocol.Account.repeatedFields_ = [5, 7, 16], r.Message.GENERATE_TO_OBJECT && (proto.protocol.Account.prototype.toObject = function(t) {
                return proto.protocol.Account.toObject(t, this)
            }, proto.protocol.Account.toObject = function(t, o) {
                var e, s = {
                    accountName: o.getAccountName_asB64(),
                    type: r.Message.getFieldWithDefault(o, 2, 0),
                    address: o.getAddress_asB64(),
                    balance: r.Message.getFieldWithDefault(o, 4, 0),
                    votesList: r.Message.toObjectList(o.getVotesList(), proto.protocol.Vote.toObject, t),
                    assetMap: (e = o.getAssetMap()) ? e.toObject(t, void 0) : [],
                    frozenList: r.Message.toObjectList(o.getFrozenList(), proto.protocol.Account.Frozen.toObject, t),
                    netUsage: r.Message.getFieldWithDefault(o, 8, 0),
                    createTime: r.Message.getFieldWithDefault(o, 9, 0),
                    latestOprationTime: r.Message.getFieldWithDefault(o, 10, 0),
                    allowance: r.Message.getFieldWithDefault(o, 11, 0),
                    latestWithdrawTime: r.Message.getFieldWithDefault(o, 12, 0),
                    code: o.getCode_asB64(),
                    isWitness: r.Message.getFieldWithDefault(o, 14, !1),
                    isCommittee: r.Message.getFieldWithDefault(o, 15, !1),
                    frozenSupplyList: r.Message.toObjectList(o.getFrozenSupplyList(), proto.protocol.Account.Frozen.toObject, t),
                    assetIssuedName: o.getAssetIssuedName_asB64(),
                    latestAssetOperationTimeMap: (e = o.getLatestAssetOperationTimeMap()) ? e.toObject(t, void 0) : [],
                    freeNetUsage: r.Message.getFieldWithDefault(o, 19, 0),
                    freeAssetNetUsageMap: (e = o.getFreeAssetNetUsageMap()) ? e.toObject(t, void 0) : [],
                    latestConsumeTime: r.Message.getFieldWithDefault(o, 21, 0),
                    latestConsumeFreeTime: r.Message.getFieldWithDefault(o, 22, 0)
                };
                return t && (s.$jspbMessageInstance = o), s
            }), proto.protocol.Account.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Account;
                return proto.protocol.Account.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Account.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readBytes();
                            t.setAccountName(e);
                            break;
                        case 2:
                            e = o.readEnum();
                            t.setType(e);
                            break;
                        case 3:
                            e = o.readBytes();
                            t.setAddress(e);
                            break;
                        case 4:
                            e = o.readInt64();
                            t.setBalance(e);
                            break;
                        case 5:
                            e = new proto.protocol.Vote;
                            o.readMessage(e, proto.protocol.Vote.deserializeBinaryFromReader), t.addVotes(e);
                            break;
                        case 6:
                            e = t.getAssetMap();
                            o.readMessage(e, (function(t, o) {
                                r.Map.deserializeBinary(t, o, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readInt64)
                            }));
                            break;
                        case 7:
                            e = new proto.protocol.Account.Frozen;
                            o.readMessage(e, proto.protocol.Account.Frozen.deserializeBinaryFromReader), t.addFrozen(e);
                            break;
                        case 8:
                            e = o.readInt64();
                            t.setNetUsage(e);
                            break;
                        case 9:
                            e = o.readInt64();
                            t.setCreateTime(e);
                            break;
                        case 10:
                            e = o.readInt64();
                            t.setLatestOprationTime(e);
                            break;
                        case 11:
                            e = o.readInt64();
                            t.setAllowance(e);
                            break;
                        case 12:
                            e = o.readInt64();
                            t.setLatestWithdrawTime(e);
                            break;
                        case 13:
                            e = o.readBytes();
                            t.setCode(e);
                            break;
                        case 14:
                            e = o.readBool();
                            t.setIsWitness(e);
                            break;
                        case 15:
                            e = o.readBool();
                            t.setIsCommittee(e);
                            break;
                        case 16:
                            e = new proto.protocol.Account.Frozen;
                            o.readMessage(e, proto.protocol.Account.Frozen.deserializeBinaryFromReader), t.addFrozenSupply(e);
                            break;
                        case 17:
                            e = o.readBytes();
                            t.setAssetIssuedName(e);
                            break;
                        case 18:
                            e = t.getLatestAssetOperationTimeMap();
                            o.readMessage(e, (function(t, o) {
                                r.Map.deserializeBinary(t, o, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readInt64)
                            }));
                            break;
                        case 19:
                            e = o.readInt64();
                            t.setFreeNetUsage(e);
                            break;
                        case 20:
                            e = t.getFreeAssetNetUsageMap();
                            o.readMessage(e, (function(t, o) {
                                r.Map.deserializeBinary(t, o, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readInt64)
                            }));
                            break;
                        case 21:
                            e = o.readInt64();
                            t.setLatestConsumeTime(e);
                            break;
                        case 22:
                            e = o.readInt64();
                            t.setLatestConsumeFreeTime(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Account.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Account.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Account.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getAccountName_asU8()).length > 0 && o.writeBytes(1, e), 0 !== (e = t.getType()) && o.writeEnum(2, e), (e = t.getAddress_asU8()).length > 0 && o.writeBytes(3, e), 0 !== (e = t.getBalance()) && o.writeInt64(4, e), (e = t.getVotesList()).length > 0 && o.writeRepeatedMessage(5, e, proto.protocol.Vote.serializeBinaryToWriter), (e = t.getAssetMap(!0)) && e.getLength() > 0 && e.serializeBinary(6, o, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeInt64), (e = t.getFrozenList()).length > 0 && o.writeRepeatedMessage(7, e, proto.protocol.Account.Frozen.serializeBinaryToWriter), 0 !== (e = t.getNetUsage()) && o.writeInt64(8, e), 0 !== (e = t.getCreateTime()) && o.writeInt64(9, e), 0 !== (e = t.getLatestOprationTime()) && o.writeInt64(10, e), 0 !== (e = t.getAllowance()) && o.writeInt64(11, e), 0 !== (e = t.getLatestWithdrawTime()) && o.writeInt64(12, e), (e = t.getCode_asU8()).length > 0 && o.writeBytes(13, e), (e = t.getIsWitness()) && o.writeBool(14, e), (e = t.getIsCommittee()) && o.writeBool(15, e), (e = t.getFrozenSupplyList()).length > 0 && o.writeRepeatedMessage(16, e, proto.protocol.Account.Frozen.serializeBinaryToWriter), (e = t.getAssetIssuedName_asU8()).length > 0 && o.writeBytes(17, e), (e = t.getLatestAssetOperationTimeMap(!0)) && e.getLength() > 0 && e.serializeBinary(18, o, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeInt64), 0 !== (e = t.getFreeNetUsage()) && o.writeInt64(19, e), (e = t.getFreeAssetNetUsageMap(!0)) && e.getLength() > 0 && e.serializeBinary(20, o, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeInt64), 0 !== (e = t.getLatestConsumeTime()) && o.writeInt64(21, e), 0 !== (e = t.getLatestConsumeFreeTime()) && o.writeInt64(22, e)
            }, proto.protocol.Account.Frozen = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.Account.Frozen, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Account.Frozen.displayName = "proto.protocol.Account.Frozen"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.Account.Frozen.prototype.toObject = function(t) {
                return proto.protocol.Account.Frozen.toObject(t, this)
            }, proto.protocol.Account.Frozen.toObject = function(t, o) {
                var e = {
                    frozenBalance: r.Message.getFieldWithDefault(o, 1, 0),
                    expireTime: r.Message.getFieldWithDefault(o, 2, 0)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.Account.Frozen.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Account.Frozen;
                return proto.protocol.Account.Frozen.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Account.Frozen.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readInt64();
                            t.setFrozenBalance(e);
                            break;
                        case 2:
                            e = o.readInt64();
                            t.setExpireTime(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Account.Frozen.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Account.Frozen.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Account.Frozen.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                0 !== (e = t.getFrozenBalance()) && o.writeInt64(1, e), 0 !== (e = t.getExpireTime()) && o.writeInt64(2, e)
            }, proto.protocol.Account.Frozen.prototype.getFrozenBalance = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.protocol.Account.Frozen.prototype.setFrozenBalance = function(t) {
                r.Message.setProto3IntField(this, 1, t)
            }, proto.protocol.Account.Frozen.prototype.getExpireTime = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.Account.Frozen.prototype.setExpireTime = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.Account.prototype.getAccountName = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.Account.prototype.getAccountName_asB64 = function() {
                return r.Message.bytesAsB64(this.getAccountName())
            }, proto.protocol.Account.prototype.getAccountName_asU8 = function() {
                return r.Message.bytesAsU8(this.getAccountName())
            }, proto.protocol.Account.prototype.setAccountName = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.Account.prototype.getType = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.Account.prototype.setType = function(t) {
                r.Message.setProto3EnumField(this, 2, t)
            }, proto.protocol.Account.prototype.getAddress = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.protocol.Account.prototype.getAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getAddress())
            }, proto.protocol.Account.prototype.getAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getAddress())
            }, proto.protocol.Account.prototype.setAddress = function(t) {
                r.Message.setProto3BytesField(this, 3, t)
            }, proto.protocol.Account.prototype.getBalance = function() {
                return r.Message.getFieldWithDefault(this, 4, 0)
            }, proto.protocol.Account.prototype.setBalance = function(t) {
                r.Message.setProto3IntField(this, 4, t)
            }, proto.protocol.Account.prototype.getVotesList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Vote, 5)
            }, proto.protocol.Account.prototype.setVotesList = function(t) {
                r.Message.setRepeatedWrapperField(this, 5, t)
            }, proto.protocol.Account.prototype.addVotes = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 5, t, proto.protocol.Vote, o)
            }, proto.protocol.Account.prototype.clearVotesList = function() {
                this.setVotesList([])
            }, proto.protocol.Account.prototype.getAssetMap = function(t) {
                return r.Message.getMapField(this, 6, t, null)
            }, proto.protocol.Account.prototype.clearAssetMap = function() {
                this.getAssetMap().clear()
            }, proto.protocol.Account.prototype.getFrozenList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Account.Frozen, 7)
            }, proto.protocol.Account.prototype.setFrozenList = function(t) {
                r.Message.setRepeatedWrapperField(this, 7, t)
            }, proto.protocol.Account.prototype.addFrozen = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 7, t, proto.protocol.Account.Frozen, o)
            }, proto.protocol.Account.prototype.clearFrozenList = function() {
                this.setFrozenList([])
            }, proto.protocol.Account.prototype.getNetUsage = function() {
                return r.Message.getFieldWithDefault(this, 8, 0)
            }, proto.protocol.Account.prototype.setNetUsage = function(t) {
                r.Message.setProto3IntField(this, 8, t)
            }, proto.protocol.Account.prototype.getCreateTime = function() {
                return r.Message.getFieldWithDefault(this, 9, 0)
            }, proto.protocol.Account.prototype.setCreateTime = function(t) {
                r.Message.setProto3IntField(this, 9, t)
            }, proto.protocol.Account.prototype.getLatestOprationTime = function() {
                return r.Message.getFieldWithDefault(this, 10, 0)
            }, proto.protocol.Account.prototype.setLatestOprationTime = function(t) {
                r.Message.setProto3IntField(this, 10, t)
            }, proto.protocol.Account.prototype.getAllowance = function() {
                return r.Message.getFieldWithDefault(this, 11, 0)
            }, proto.protocol.Account.prototype.setAllowance = function(t) {
                r.Message.setProto3IntField(this, 11, t)
            }, proto.protocol.Account.prototype.getLatestWithdrawTime = function() {
                return r.Message.getFieldWithDefault(this, 12, 0)
            }, proto.protocol.Account.prototype.setLatestWithdrawTime = function(t) {
                r.Message.setProto3IntField(this, 12, t)
            }, proto.protocol.Account.prototype.getCode = function() {
                return r.Message.getFieldWithDefault(this, 13, "")
            }, proto.protocol.Account.prototype.getCode_asB64 = function() {
                return r.Message.bytesAsB64(this.getCode())
            }, proto.protocol.Account.prototype.getCode_asU8 = function() {
                return r.Message.bytesAsU8(this.getCode())
            }, proto.protocol.Account.prototype.setCode = function(t) {
                r.Message.setProto3BytesField(this, 13, t)
            }, proto.protocol.Account.prototype.getIsWitness = function() {
                return r.Message.getFieldWithDefault(this, 14, !1)
            }, proto.protocol.Account.prototype.setIsWitness = function(t) {
                r.Message.setProto3BooleanField(this, 14, t)
            }, proto.protocol.Account.prototype.getIsCommittee = function() {
                return r.Message.getFieldWithDefault(this, 15, !1)
            }, proto.protocol.Account.prototype.setIsCommittee = function(t) {
                r.Message.setProto3BooleanField(this, 15, t)
            }, proto.protocol.Account.prototype.getFrozenSupplyList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Account.Frozen, 16)
            }, proto.protocol.Account.prototype.setFrozenSupplyList = function(t) {
                r.Message.setRepeatedWrapperField(this, 16, t)
            }, proto.protocol.Account.prototype.addFrozenSupply = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 16, t, proto.protocol.Account.Frozen, o)
            }, proto.protocol.Account.prototype.clearFrozenSupplyList = function() {
                this.setFrozenSupplyList([])
            }, proto.protocol.Account.prototype.getAssetIssuedName = function() {
                return r.Message.getFieldWithDefault(this, 17, "")
            }, proto.protocol.Account.prototype.getAssetIssuedName_asB64 = function() {
                return r.Message.bytesAsB64(this.getAssetIssuedName())
            }, proto.protocol.Account.prototype.getAssetIssuedName_asU8 = function() {
                return r.Message.bytesAsU8(this.getAssetIssuedName())
            }, proto.protocol.Account.prototype.setAssetIssuedName = function(t) {
                r.Message.setProto3BytesField(this, 17, t)
            }, proto.protocol.Account.prototype.getLatestAssetOperationTimeMap = function(t) {
                return r.Message.getMapField(this, 18, t, null)
            }, proto.protocol.Account.prototype.clearLatestAssetOperationTimeMap = function() {
                this.getLatestAssetOperationTimeMap().clear()
            }, proto.protocol.Account.prototype.getFreeNetUsage = function() {
                return r.Message.getFieldWithDefault(this, 19, 0)
            }, proto.protocol.Account.prototype.setFreeNetUsage = function(t) {
                r.Message.setProto3IntField(this, 19, t)
            }, proto.protocol.Account.prototype.getFreeAssetNetUsageMap = function(t) {
                return r.Message.getMapField(this, 20, t, null)
            }, proto.protocol.Account.prototype.clearFreeAssetNetUsageMap = function() {
                this.getFreeAssetNetUsageMap().clear()
            }, proto.protocol.Account.prototype.getLatestConsumeTime = function() {
                return r.Message.getFieldWithDefault(this, 21, 0)
            }, proto.protocol.Account.prototype.setLatestConsumeTime = function(t) {
                r.Message.setProto3IntField(this, 21, t)
            }, proto.protocol.Account.prototype.getLatestConsumeFreeTime = function() {
                return r.Message.getFieldWithDefault(this, 22, 0)
            }, proto.protocol.Account.prototype.setLatestConsumeFreeTime = function(t) {
                r.Message.setProto3IntField(this, 22, t)
            }, proto.protocol.acuthrity = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.acuthrity, r.Message), s.DEBUG && !COMPILED && (proto.protocol.acuthrity.displayName = "proto.protocol.acuthrity"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.acuthrity.prototype.toObject = function(t) {
                return proto.protocol.acuthrity.toObject(t, this)
            }, proto.protocol.acuthrity.toObject = function(t, o) {
                var e, r = {
                    account: (e = o.getAccount()) && proto.protocol.AccountId.toObject(t, e),
                    permissionName: o.getPermissionName_asB64()
                };
                return t && (r.$jspbMessageInstance = o), r
            }), proto.protocol.acuthrity.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.acuthrity;
                return proto.protocol.acuthrity.deserializeBinaryFromReader(e, o)
            }, proto.protocol.acuthrity.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = new proto.protocol.AccountId;
                            o.readMessage(e, proto.protocol.AccountId.deserializeBinaryFromReader), t.setAccount(e);
                            break;
                        case 2:
                            e = o.readBytes();
                            t.setPermissionName(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.acuthrity.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.acuthrity.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.acuthrity.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                null != (e = t.getAccount()) && o.writeMessage(1, e, proto.protocol.AccountId.serializeBinaryToWriter), (e = t.getPermissionName_asU8()).length > 0 && o.writeBytes(2, e)
            }, proto.protocol.acuthrity.prototype.getAccount = function() {
                return r.Message.getWrapperField(this, proto.protocol.AccountId, 1)
            }, proto.protocol.acuthrity.prototype.setAccount = function(t) {
                r.Message.setWrapperField(this, 1, t)
            }, proto.protocol.acuthrity.prototype.clearAccount = function() {
                this.setAccount(void 0)
            }, proto.protocol.acuthrity.prototype.hasAccount = function() {
                return null != r.Message.getField(this, 1)
            }, proto.protocol.acuthrity.prototype.getPermissionName = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.acuthrity.prototype.getPermissionName_asB64 = function() {
                return r.Message.bytesAsB64(this.getPermissionName())
            }, proto.protocol.acuthrity.prototype.getPermissionName_asU8 = function() {
                return r.Message.bytesAsU8(this.getPermissionName())
            }, proto.protocol.acuthrity.prototype.setPermissionName = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.permision = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.permision, r.Message), s.DEBUG && !COMPILED && (proto.protocol.permision.displayName = "proto.protocol.permision"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.permision.prototype.toObject = function(t) {
                return proto.protocol.permision.toObject(t, this)
            }, proto.protocol.permision.toObject = function(t, o) {
                var e, r = {
                    account: (e = o.getAccount()) && proto.protocol.AccountId.toObject(t, e)
                };
                return t && (r.$jspbMessageInstance = o), r
            }), proto.protocol.permision.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.permision;
                return proto.protocol.permision.deserializeBinaryFromReader(e, o)
            }, proto.protocol.permision.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = new proto.protocol.AccountId;
                            o.readMessage(e, proto.protocol.AccountId.deserializeBinaryFromReader), t.setAccount(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.permision.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.permision.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.permision.serializeBinaryToWriter = function(t, o) {
                var e;
                null != (e = t.getAccount()) && o.writeMessage(1, e, proto.protocol.AccountId.serializeBinaryToWriter)
            }, proto.protocol.permision.prototype.getAccount = function() {
                return r.Message.getWrapperField(this, proto.protocol.AccountId, 1)
            }, proto.protocol.permision.prototype.setAccount = function(t) {
                r.Message.setWrapperField(this, 1, t)
            }, proto.protocol.permision.prototype.clearAccount = function() {
                this.setAccount(void 0)
            }, proto.protocol.permision.prototype.hasAccount = function() {
                return null != r.Message.getField(this, 1)
            }, proto.protocol.Witness = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.Witness, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Witness.displayName = "proto.protocol.Witness"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.Witness.prototype.toObject = function(t) {
                return proto.protocol.Witness.toObject(t, this)
            }, proto.protocol.Witness.toObject = function(t, o) {
                var e = {
                    address: o.getAddress_asB64(),
                    votecount: r.Message.getFieldWithDefault(o, 2, 0),
                    pubkey: o.getPubkey_asB64(),
                    url: r.Message.getFieldWithDefault(o, 4, ""),
                    totalproduced: r.Message.getFieldWithDefault(o, 5, 0),
                    totalmissed: r.Message.getFieldWithDefault(o, 6, 0),
                    latestblocknum: r.Message.getFieldWithDefault(o, 7, 0),
                    latestslotnum: r.Message.getFieldWithDefault(o, 8, 0),
                    isjobs: r.Message.getFieldWithDefault(o, 9, !1)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.Witness.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Witness;
                return proto.protocol.Witness.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Witness.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readBytes();
                            t.setAddress(e);
                            break;
                        case 2:
                            e = o.readInt64();
                            t.setVotecount(e);
                            break;
                        case 3:
                            e = o.readBytes();
                            t.setPubkey(e);
                            break;
                        case 4:
                            e = o.readString();
                            t.setUrl(e);
                            break;
                        case 5:
                            e = o.readInt64();
                            t.setTotalproduced(e);
                            break;
                        case 6:
                            e = o.readInt64();
                            t.setTotalmissed(e);
                            break;
                        case 7:
                            e = o.readInt64();
                            t.setLatestblocknum(e);
                            break;
                        case 8:
                            e = o.readInt64();
                            t.setLatestslotnum(e);
                            break;
                        case 9:
                            e = o.readBool();
                            t.setIsjobs(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Witness.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Witness.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Witness.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getAddress_asU8()).length > 0 && o.writeBytes(1, e), 0 !== (e = t.getVotecount()) && o.writeInt64(2, e), (e = t.getPubkey_asU8()).length > 0 && o.writeBytes(3, e), (e = t.getUrl()).length > 0 && o.writeString(4, e), 0 !== (e = t.getTotalproduced()) && o.writeInt64(5, e), 0 !== (e = t.getTotalmissed()) && o.writeInt64(6, e), 0 !== (e = t.getLatestblocknum()) && o.writeInt64(7, e), 0 !== (e = t.getLatestslotnum()) && o.writeInt64(8, e), (e = t.getIsjobs()) && o.writeBool(9, e)
            }, proto.protocol.Witness.prototype.getAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.Witness.prototype.getAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getAddress())
            }, proto.protocol.Witness.prototype.getAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getAddress())
            }, proto.protocol.Witness.prototype.setAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.Witness.prototype.getVotecount = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.Witness.prototype.setVotecount = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.Witness.prototype.getPubkey = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.protocol.Witness.prototype.getPubkey_asB64 = function() {
                return r.Message.bytesAsB64(this.getPubkey())
            }, proto.protocol.Witness.prototype.getPubkey_asU8 = function() {
                return r.Message.bytesAsU8(this.getPubkey())
            }, proto.protocol.Witness.prototype.setPubkey = function(t) {
                r.Message.setProto3BytesField(this, 3, t)
            }, proto.protocol.Witness.prototype.getUrl = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.protocol.Witness.prototype.setUrl = function(t) {
                r.Message.setProto3StringField(this, 4, t)
            }, proto.protocol.Witness.prototype.getTotalproduced = function() {
                return r.Message.getFieldWithDefault(this, 5, 0)
            }, proto.protocol.Witness.prototype.setTotalproduced = function(t) {
                r.Message.setProto3IntField(this, 5, t)
            }, proto.protocol.Witness.prototype.getTotalmissed = function() {
                return r.Message.getFieldWithDefault(this, 6, 0)
            }, proto.protocol.Witness.prototype.setTotalmissed = function(t) {
                r.Message.setProto3IntField(this, 6, t)
            }, proto.protocol.Witness.prototype.getLatestblocknum = function() {
                return r.Message.getFieldWithDefault(this, 7, 0)
            }, proto.protocol.Witness.prototype.setLatestblocknum = function(t) {
                r.Message.setProto3IntField(this, 7, t)
            }, proto.protocol.Witness.prototype.getLatestslotnum = function() {
                return r.Message.getFieldWithDefault(this, 8, 0)
            }, proto.protocol.Witness.prototype.setLatestslotnum = function(t) {
                r.Message.setProto3IntField(this, 8, t)
            }, proto.protocol.Witness.prototype.getIsjobs = function() {
                return r.Message.getFieldWithDefault(this, 9, !1)
            }, proto.protocol.Witness.prototype.setIsjobs = function(t) {
                r.Message.setProto3BooleanField(this, 9, t)
            }, proto.protocol.Votes = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.Votes.repeatedFields_, null)
            }, s.inherits(proto.protocol.Votes, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Votes.displayName = "proto.protocol.Votes"), proto.protocol.Votes.repeatedFields_ = [2, 3], r.Message.GENERATE_TO_OBJECT && (proto.protocol.Votes.prototype.toObject = function(t) {
                return proto.protocol.Votes.toObject(t, this)
            }, proto.protocol.Votes.toObject = function(t, o) {
                var e = {
                    address: o.getAddress_asB64(),
                    oldVotesList: r.Message.toObjectList(o.getOldVotesList(), proto.protocol.Vote.toObject, t),
                    newVotesList: r.Message.toObjectList(o.getNewVotesList(), proto.protocol.Vote.toObject, t)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.Votes.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Votes;
                return proto.protocol.Votes.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Votes.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readBytes();
                            t.setAddress(e);
                            break;
                        case 2:
                            e = new proto.protocol.Vote;
                            o.readMessage(e, proto.protocol.Vote.deserializeBinaryFromReader), t.addOldVotes(e);
                            break;
                        case 3:
                            e = new proto.protocol.Vote;
                            o.readMessage(e, proto.protocol.Vote.deserializeBinaryFromReader), t.addNewVotes(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Votes.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Votes.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Votes.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getAddress_asU8()).length > 0 && o.writeBytes(1, e), (e = t.getOldVotesList()).length > 0 && o.writeRepeatedMessage(2, e, proto.protocol.Vote.serializeBinaryToWriter), (e = t.getNewVotesList()).length > 0 && o.writeRepeatedMessage(3, e, proto.protocol.Vote.serializeBinaryToWriter)
            }, proto.protocol.Votes.prototype.getAddress = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.Votes.prototype.getAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getAddress())
            }, proto.protocol.Votes.prototype.getAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getAddress())
            }, proto.protocol.Votes.prototype.setAddress = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.Votes.prototype.getOldVotesList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Vote, 2)
            }, proto.protocol.Votes.prototype.setOldVotesList = function(t) {
                r.Message.setRepeatedWrapperField(this, 2, t)
            }, proto.protocol.Votes.prototype.addOldVotes = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 2, t, proto.protocol.Vote, o)
            }, proto.protocol.Votes.prototype.clearOldVotesList = function() {
                this.setOldVotesList([])
            }, proto.protocol.Votes.prototype.getNewVotesList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Vote, 3)
            }, proto.protocol.Votes.prototype.setNewVotesList = function(t) {
                r.Message.setRepeatedWrapperField(this, 3, t)
            }, proto.protocol.Votes.prototype.addNewVotes = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 3, t, proto.protocol.Vote, o)
            }, proto.protocol.Votes.prototype.clearNewVotesList = function() {
                this.setNewVotesList([])
            }, proto.protocol.TXOutput = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.TXOutput, r.Message), s.DEBUG && !COMPILED && (proto.protocol.TXOutput.displayName = "proto.protocol.TXOutput"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.TXOutput.prototype.toObject = function(t) {
                return proto.protocol.TXOutput.toObject(t, this)
            }, proto.protocol.TXOutput.toObject = function(t, o) {
                var e = {
                    value: r.Message.getFieldWithDefault(o, 1, 0),
                    pubkeyhash: o.getPubkeyhash_asB64()
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.TXOutput.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.TXOutput;
                return proto.protocol.TXOutput.deserializeBinaryFromReader(e, o)
            }, proto.protocol.TXOutput.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readInt64();
                            t.setValue(e);
                            break;
                        case 2:
                            e = o.readBytes();
                            t.setPubkeyhash(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.TXOutput.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.TXOutput.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.TXOutput.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                0 !== (e = t.getValue()) && o.writeInt64(1, e), (e = t.getPubkeyhash_asU8()).length > 0 && o.writeBytes(2, e)
            }, proto.protocol.TXOutput.prototype.getValue = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.protocol.TXOutput.prototype.setValue = function(t) {
                r.Message.setProto3IntField(this, 1, t)
            }, proto.protocol.TXOutput.prototype.getPubkeyhash = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.TXOutput.prototype.getPubkeyhash_asB64 = function() {
                return r.Message.bytesAsB64(this.getPubkeyhash())
            }, proto.protocol.TXOutput.prototype.getPubkeyhash_asU8 = function() {
                return r.Message.bytesAsU8(this.getPubkeyhash())
            }, proto.protocol.TXOutput.prototype.setPubkeyhash = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.TXInput = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.TXInput, r.Message), s.DEBUG && !COMPILED && (proto.protocol.TXInput.displayName = "proto.protocol.TXInput"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.TXInput.prototype.toObject = function(t) {
                return proto.protocol.TXInput.toObject(t, this)
            }, proto.protocol.TXInput.toObject = function(t, o) {
                var e, r = {
                    rawData: (e = o.getRawData()) && proto.protocol.TXInput.raw.toObject(t, e),
                    signature: o.getSignature_asB64()
                };
                return t && (r.$jspbMessageInstance = o), r
            }), proto.protocol.TXInput.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.TXInput;
                return proto.protocol.TXInput.deserializeBinaryFromReader(e, o)
            }, proto.protocol.TXInput.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = new proto.protocol.TXInput.raw;
                            o.readMessage(e, proto.protocol.TXInput.raw.deserializeBinaryFromReader), t.setRawData(e);
                            break;
                        case 4:
                            e = o.readBytes();
                            t.setSignature(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.TXInput.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.TXInput.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.TXInput.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                null != (e = t.getRawData()) && o.writeMessage(1, e, proto.protocol.TXInput.raw.serializeBinaryToWriter), (e = t.getSignature_asU8()).length > 0 && o.writeBytes(4, e)
            }, proto.protocol.TXInput.raw = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.TXInput.raw, r.Message), s.DEBUG && !COMPILED && (proto.protocol.TXInput.raw.displayName = "proto.protocol.TXInput.raw"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.TXInput.raw.prototype.toObject = function(t) {
                return proto.protocol.TXInput.raw.toObject(t, this)
            }, proto.protocol.TXInput.raw.toObject = function(t, o) {
                var e = {
                    txid: o.getTxid_asB64(),
                    vout: r.Message.getFieldWithDefault(o, 2, 0),
                    pubkey: o.getPubkey_asB64()
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.TXInput.raw.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.TXInput.raw;
                return proto.protocol.TXInput.raw.deserializeBinaryFromReader(e, o)
            }, proto.protocol.TXInput.raw.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readBytes();
                            t.setTxid(e);
                            break;
                        case 2:
                            e = o.readInt64();
                            t.setVout(e);
                            break;
                        case 3:
                            e = o.readBytes();
                            t.setPubkey(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.TXInput.raw.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.TXInput.raw.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.TXInput.raw.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getTxid_asU8()).length > 0 && o.writeBytes(1, e), 0 !== (e = t.getVout()) && o.writeInt64(2, e), (e = t.getPubkey_asU8()).length > 0 && o.writeBytes(3, e)
            }, proto.protocol.TXInput.raw.prototype.getTxid = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.TXInput.raw.prototype.getTxid_asB64 = function() {
                return r.Message.bytesAsB64(this.getTxid())
            }, proto.protocol.TXInput.raw.prototype.getTxid_asU8 = function() {
                return r.Message.bytesAsU8(this.getTxid())
            }, proto.protocol.TXInput.raw.prototype.setTxid = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.TXInput.raw.prototype.getVout = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.TXInput.raw.prototype.setVout = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.TXInput.raw.prototype.getPubkey = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.protocol.TXInput.raw.prototype.getPubkey_asB64 = function() {
                return r.Message.bytesAsB64(this.getPubkey())
            }, proto.protocol.TXInput.raw.prototype.getPubkey_asU8 = function() {
                return r.Message.bytesAsU8(this.getPubkey())
            }, proto.protocol.TXInput.raw.prototype.setPubkey = function(t) {
                r.Message.setProto3BytesField(this, 3, t)
            }, proto.protocol.TXInput.prototype.getRawData = function() {
                return r.Message.getWrapperField(this, proto.protocol.TXInput.raw, 1)
            }, proto.protocol.TXInput.prototype.setRawData = function(t) {
                r.Message.setWrapperField(this, 1, t)
            }, proto.protocol.TXInput.prototype.clearRawData = function() {
                this.setRawData(void 0)
            }, proto.protocol.TXInput.prototype.hasRawData = function() {
                return null != r.Message.getField(this, 1)
            }, proto.protocol.TXInput.prototype.getSignature = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.protocol.TXInput.prototype.getSignature_asB64 = function() {
                return r.Message.bytesAsB64(this.getSignature())
            }, proto.protocol.TXInput.prototype.getSignature_asU8 = function() {
                return r.Message.bytesAsU8(this.getSignature())
            }, proto.protocol.TXInput.prototype.setSignature = function(t) {
                r.Message.setProto3BytesField(this, 4, t)
            }, proto.protocol.TXOutputs = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.TXOutputs.repeatedFields_, null)
            }, s.inherits(proto.protocol.TXOutputs, r.Message), s.DEBUG && !COMPILED && (proto.protocol.TXOutputs.displayName = "proto.protocol.TXOutputs"), proto.protocol.TXOutputs.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.protocol.TXOutputs.prototype.toObject = function(t) {
                return proto.protocol.TXOutputs.toObject(t, this)
            }, proto.protocol.TXOutputs.toObject = function(t, o) {
                var e = {
                    outputsList: r.Message.toObjectList(o.getOutputsList(), proto.protocol.TXOutput.toObject, t)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.TXOutputs.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.TXOutputs;
                return proto.protocol.TXOutputs.deserializeBinaryFromReader(e, o)
            }, proto.protocol.TXOutputs.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = new proto.protocol.TXOutput;
                            o.readMessage(e, proto.protocol.TXOutput.deserializeBinaryFromReader), t.addOutputs(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.TXOutputs.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.TXOutputs.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.TXOutputs.serializeBinaryToWriter = function(t, o) {
                var e;
                (e = t.getOutputsList()).length > 0 && o.writeRepeatedMessage(1, e, proto.protocol.TXOutput.serializeBinaryToWriter)
            }, proto.protocol.TXOutputs.prototype.getOutputsList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.TXOutput, 1)
            }, proto.protocol.TXOutputs.prototype.setOutputsList = function(t) {
                r.Message.setRepeatedWrapperField(this, 1, t)
            }, proto.protocol.TXOutputs.prototype.addOutputs = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 1, t, proto.protocol.TXOutput, o)
            }, proto.protocol.TXOutputs.prototype.clearOutputsList = function() {
                this.setOutputsList([])
            }, proto.protocol.Transaction = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.Transaction.repeatedFields_, null)
            }, s.inherits(proto.protocol.Transaction, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Transaction.displayName = "proto.protocol.Transaction"), proto.protocol.Transaction.repeatedFields_ = [2, 5], r.Message.GENERATE_TO_OBJECT && (proto.protocol.Transaction.prototype.toObject = function(t) {
                return proto.protocol.Transaction.toObject(t, this)
            }, proto.protocol.Transaction.toObject = function(t, o) {
                var e, s = {
                    rawData: (e = o.getRawData()) && proto.protocol.Transaction.raw.toObject(t, e),
                    signatureList: o.getSignatureList_asB64(),
                    retList: r.Message.toObjectList(o.getRetList(), proto.protocol.Transaction.Result.toObject, t)
                };
                return t && (s.$jspbMessageInstance = o), s
            }), proto.protocol.Transaction.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Transaction;
                return proto.protocol.Transaction.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Transaction.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = new proto.protocol.Transaction.raw;
                            o.readMessage(e, proto.protocol.Transaction.raw.deserializeBinaryFromReader), t.setRawData(e);
                            break;
                        case 2:
                            e = o.readBytes();
                            t.addSignature(e);
                            break;
                        case 5:
                            e = new proto.protocol.Transaction.Result;
                            o.readMessage(e, proto.protocol.Transaction.Result.deserializeBinaryFromReader), t.addRet(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Transaction.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Transaction.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Transaction.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                null != (e = t.getRawData()) && o.writeMessage(1, e, proto.protocol.Transaction.raw.serializeBinaryToWriter), (e = t.getSignatureList_asU8()).length > 0 && o.writeRepeatedBytes(2, e), (e = t.getRetList()).length > 0 && o.writeRepeatedMessage(5, e, proto.protocol.Transaction.Result.serializeBinaryToWriter)
            }, proto.protocol.Transaction.Contract = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.Transaction.Contract, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Transaction.Contract.displayName = "proto.protocol.Transaction.Contract"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.Transaction.Contract.prototype.toObject = function(t) {
                return proto.protocol.Transaction.Contract.toObject(t, this)
            }, proto.protocol.Transaction.Contract.toObject = function(t, o) {
                var e, s = {
                    type: r.Message.getFieldWithDefault(o, 1, 0),
                    parameter: (e = o.getParameter()) && a.Any.toObject(t, e),
                    provider: o.getProvider_asB64(),
                    contractname: o.getContractname_asB64()
                };
                return t && (s.$jspbMessageInstance = o), s
            }), proto.protocol.Transaction.Contract.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Transaction.Contract;
                return proto.protocol.Transaction.Contract.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Transaction.Contract.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readEnum();
                            t.setType(e);
                            break;
                        case 2:
                            e = new a.Any;
                            o.readMessage(e, a.Any.deserializeBinaryFromReader), t.setParameter(e);
                            break;
                        case 3:
                            e = o.readBytes();
                            t.setProvider(e);
                            break;
                        case 4:
                            e = o.readBytes();
                            t.setContractname(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Transaction.Contract.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Transaction.Contract.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Transaction.Contract.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                0 !== (e = t.getType()) && o.writeEnum(1, e), null != (e = t.getParameter()) && o.writeMessage(2, e, a.Any.serializeBinaryToWriter), (e = t.getProvider_asU8()).length > 0 && o.writeBytes(3, e), (e = t.getContractname_asU8()).length > 0 && o.writeBytes(4, e)
            }, proto.protocol.Transaction.Contract.ContractType = {
                ACCOUNTCREATECONTRACT: 0,
                TRANSFERCONTRACT: 1,
                TRANSFERASSETCONTRACT: 2,
                VOTEASSETCONTRACT: 3,
                VOTEWITNESSCONTRACT: 4,
                WITNESSCREATECONTRACT: 5,
                ASSETISSUECONTRACT: 6,
                DEPLOYCONTRACT: 7,
                WITNESSUPDATECONTRACT: 8,
                PARTICIPATEASSETISSUECONTRACT: 9,
                ACCOUNTUPDATECONTRACT: 10,
                FREEZEBALANCECONTRACT: 11,
                UNFREEZEBALANCECONTRACT: 12,
                WITHDRAWBALANCECONTRACT: 13,
                UNFREEZEASSETCONTRACT: 14,
                UPDATEASSETCONTRACT: 15,
                CUSTOMCONTRACT: 20
            }, proto.protocol.Transaction.Contract.prototype.getType = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.protocol.Transaction.Contract.prototype.setType = function(t) {
                r.Message.setProto3EnumField(this, 1, t)
            }, proto.protocol.Transaction.Contract.prototype.getParameter = function() {
                return r.Message.getWrapperField(this, a.Any, 2)
            }, proto.protocol.Transaction.Contract.prototype.setParameter = function(t) {
                r.Message.setWrapperField(this, 2, t)
            }, proto.protocol.Transaction.Contract.prototype.clearParameter = function() {
                this.setParameter(void 0)
            }, proto.protocol.Transaction.Contract.prototype.hasParameter = function() {
                return null != r.Message.getField(this, 2)
            }, proto.protocol.Transaction.Contract.prototype.getProvider = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.protocol.Transaction.Contract.prototype.getProvider_asB64 = function() {
                return r.Message.bytesAsB64(this.getProvider())
            }, proto.protocol.Transaction.Contract.prototype.getProvider_asU8 = function() {
                return r.Message.bytesAsU8(this.getProvider())
            }, proto.protocol.Transaction.Contract.prototype.setProvider = function(t) {
                r.Message.setProto3BytesField(this, 3, t)
            }, proto.protocol.Transaction.Contract.prototype.getContractname = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.protocol.Transaction.Contract.prototype.getContractname_asB64 = function() {
                return r.Message.bytesAsB64(this.getContractname())
            }, proto.protocol.Transaction.Contract.prototype.getContractname_asU8 = function() {
                return r.Message.bytesAsU8(this.getContractname())
            }, proto.protocol.Transaction.Contract.prototype.setContractname = function(t) {
                r.Message.setProto3BytesField(this, 4, t)
            }, proto.protocol.Transaction.Result = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.Transaction.Result, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Transaction.Result.displayName = "proto.protocol.Transaction.Result"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.Transaction.Result.prototype.toObject = function(t) {
                return proto.protocol.Transaction.Result.toObject(t, this)
            }, proto.protocol.Transaction.Result.toObject = function(t, o) {
                var e = {
                    fee: r.Message.getFieldWithDefault(o, 1, 0),
                    ret: r.Message.getFieldWithDefault(o, 2, 0)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.Transaction.Result.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Transaction.Result;
                return proto.protocol.Transaction.Result.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Transaction.Result.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readInt64();
                            t.setFee(e);
                            break;
                        case 2:
                            e = o.readEnum();
                            t.setRet(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Transaction.Result.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Transaction.Result.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Transaction.Result.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                0 !== (e = t.getFee()) && o.writeInt64(1, e), 0 !== (e = t.getRet()) && o.writeEnum(2, e)
            }, proto.protocol.Transaction.Result.code = {
                SUCESS: 0,
                FAILED: 1
            }, proto.protocol.Transaction.Result.prototype.getFee = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.protocol.Transaction.Result.prototype.setFee = function(t) {
                r.Message.setProto3IntField(this, 1, t)
            }, proto.protocol.Transaction.Result.prototype.getRet = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.Transaction.Result.prototype.setRet = function(t) {
                r.Message.setProto3EnumField(this, 2, t)
            }, proto.protocol.Transaction.raw = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.Transaction.raw.repeatedFields_, null)
            }, s.inherits(proto.protocol.Transaction.raw, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Transaction.raw.displayName = "proto.protocol.Transaction.raw"), proto.protocol.Transaction.raw.repeatedFields_ = [9, 11], r.Message.GENERATE_TO_OBJECT && (proto.protocol.Transaction.raw.prototype.toObject = function(t) {
                return proto.protocol.Transaction.raw.toObject(t, this)
            }, proto.protocol.Transaction.raw.toObject = function(t, o) {
                var e = {
                    refBlockBytes: o.getRefBlockBytes_asB64(),
                    refBlockNum: r.Message.getFieldWithDefault(o, 3, 0),
                    refBlockHash: o.getRefBlockHash_asB64(),
                    expiration: r.Message.getFieldWithDefault(o, 8, 0),
                    authsList: r.Message.toObjectList(o.getAuthsList(), proto.protocol.acuthrity.toObject, t),
                    data: o.getData_asB64(),
                    contractList: r.Message.toObjectList(o.getContractList(), proto.protocol.Transaction.Contract.toObject, t),
                    scripts: o.getScripts_asB64(),
                    timestamp: r.Message.getFieldWithDefault(o, 14, 0)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.Transaction.raw.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Transaction.raw;
                return proto.protocol.Transaction.raw.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Transaction.raw.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readBytes();
                            t.setRefBlockBytes(e);
                            break;
                        case 3:
                            e = o.readInt64();
                            t.setRefBlockNum(e);
                            break;
                        case 4:
                            e = o.readBytes();
                            t.setRefBlockHash(e);
                            break;
                        case 8:
                            e = o.readInt64();
                            t.setExpiration(e);
                            break;
                        case 9:
                            e = new proto.protocol.acuthrity;
                            o.readMessage(e, proto.protocol.acuthrity.deserializeBinaryFromReader), t.addAuths(e);
                            break;
                        case 10:
                            e = o.readBytes();
                            t.setData(e);
                            break;
                        case 11:
                            e = new proto.protocol.Transaction.Contract;
                            o.readMessage(e, proto.protocol.Transaction.Contract.deserializeBinaryFromReader), t.addContract(e);
                            break;
                        case 12:
                            e = o.readBytes();
                            t.setScripts(e);
                            break;
                        case 14:
                            e = o.readInt64();
                            t.setTimestamp(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Transaction.raw.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Transaction.raw.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Transaction.raw.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getRefBlockBytes_asU8()).length > 0 && o.writeBytes(1, e), 0 !== (e = t.getRefBlockNum()) && o.writeInt64(3, e), (e = t.getRefBlockHash_asU8()).length > 0 && o.writeBytes(4, e), 0 !== (e = t.getExpiration()) && o.writeInt64(8, e), (e = t.getAuthsList()).length > 0 && o.writeRepeatedMessage(9, e, proto.protocol.acuthrity.serializeBinaryToWriter), (e = t.getData_asU8()).length > 0 && o.writeBytes(10, e), (e = t.getContractList()).length > 0 && o.writeRepeatedMessage(11, e, proto.protocol.Transaction.Contract.serializeBinaryToWriter), (e = t.getScripts_asU8()).length > 0 && o.writeBytes(12, e), 0 !== (e = t.getTimestamp()) && o.writeInt64(14, e)
            }, proto.protocol.Transaction.raw.prototype.getRefBlockBytes = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.Transaction.raw.prototype.getRefBlockBytes_asB64 = function() {
                return r.Message.bytesAsB64(this.getRefBlockBytes())
            }, proto.protocol.Transaction.raw.prototype.getRefBlockBytes_asU8 = function() {
                return r.Message.bytesAsU8(this.getRefBlockBytes())
            }, proto.protocol.Transaction.raw.prototype.setRefBlockBytes = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.Transaction.raw.prototype.getRefBlockNum = function() {
                return r.Message.getFieldWithDefault(this, 3, 0)
            }, proto.protocol.Transaction.raw.prototype.setRefBlockNum = function(t) {
                r.Message.setProto3IntField(this, 3, t)
            }, proto.protocol.Transaction.raw.prototype.getRefBlockHash = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.protocol.Transaction.raw.prototype.getRefBlockHash_asB64 = function() {
                return r.Message.bytesAsB64(this.getRefBlockHash())
            }, proto.protocol.Transaction.raw.prototype.getRefBlockHash_asU8 = function() {
                return r.Message.bytesAsU8(this.getRefBlockHash())
            }, proto.protocol.Transaction.raw.prototype.setRefBlockHash = function(t) {
                r.Message.setProto3BytesField(this, 4, t)
            }, proto.protocol.Transaction.raw.prototype.getExpiration = function() {
                return r.Message.getFieldWithDefault(this, 8, 0)
            }, proto.protocol.Transaction.raw.prototype.setExpiration = function(t) {
                r.Message.setProto3IntField(this, 8, t)
            }, proto.protocol.Transaction.raw.prototype.getAuthsList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.acuthrity, 9)
            }, proto.protocol.Transaction.raw.prototype.setAuthsList = function(t) {
                r.Message.setRepeatedWrapperField(this, 9, t)
            }, proto.protocol.Transaction.raw.prototype.addAuths = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 9, t, proto.protocol.acuthrity, o)
            }, proto.protocol.Transaction.raw.prototype.clearAuthsList = function() {
                this.setAuthsList([])
            }, proto.protocol.Transaction.raw.prototype.getData = function() {
                return r.Message.getFieldWithDefault(this, 10, "")
            }, proto.protocol.Transaction.raw.prototype.getData_asB64 = function() {
                return r.Message.bytesAsB64(this.getData())
            }, proto.protocol.Transaction.raw.prototype.getData_asU8 = function() {
                return r.Message.bytesAsU8(this.getData())
            }, proto.protocol.Transaction.raw.prototype.setData = function(t) {
                r.Message.setProto3BytesField(this, 10, t)
            }, proto.protocol.Transaction.raw.prototype.getContractList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Transaction.Contract, 11)
            }, proto.protocol.Transaction.raw.prototype.setContractList = function(t) {
                r.Message.setRepeatedWrapperField(this, 11, t)
            }, proto.protocol.Transaction.raw.prototype.addContract = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 11, t, proto.protocol.Transaction.Contract, o)
            }, proto.protocol.Transaction.raw.prototype.clearContractList = function() {
                this.setContractList([])
            }, proto.protocol.Transaction.raw.prototype.getScripts = function() {
                return r.Message.getFieldWithDefault(this, 12, "")
            }, proto.protocol.Transaction.raw.prototype.getScripts_asB64 = function() {
                return r.Message.bytesAsB64(this.getScripts())
            }, proto.protocol.Transaction.raw.prototype.getScripts_asU8 = function() {
                return r.Message.bytesAsU8(this.getScripts())
            }, proto.protocol.Transaction.raw.prototype.setScripts = function(t) {
                r.Message.setProto3BytesField(this, 12, t)
            }, proto.protocol.Transaction.raw.prototype.getTimestamp = function() {
                return r.Message.getFieldWithDefault(this, 14, 0)
            }, proto.protocol.Transaction.raw.prototype.setTimestamp = function(t) {
                r.Message.setProto3IntField(this, 14, t)
            }, proto.protocol.Transaction.prototype.getRawData = function() {
                return r.Message.getWrapperField(this, proto.protocol.Transaction.raw, 1)
            }, proto.protocol.Transaction.prototype.setRawData = function(t) {
                r.Message.setWrapperField(this, 1, t)
            }, proto.protocol.Transaction.prototype.clearRawData = function() {
                this.setRawData(void 0)
            }, proto.protocol.Transaction.prototype.hasRawData = function() {
                return null != r.Message.getField(this, 1)
            }, proto.protocol.Transaction.prototype.getSignatureList = function() {
                return r.Message.getRepeatedField(this, 2)
            }, proto.protocol.Transaction.prototype.getSignatureList_asB64 = function() {
                return r.Message.bytesListAsB64(this.getSignatureList())
            }, proto.protocol.Transaction.prototype.getSignatureList_asU8 = function() {
                return r.Message.bytesListAsU8(this.getSignatureList())
            }, proto.protocol.Transaction.prototype.setSignatureList = function(t) {
                r.Message.setField(this, 2, t || [])
            }, proto.protocol.Transaction.prototype.addSignature = function(t, o) {
                r.Message.addToRepeatedField(this, 2, t, o)
            }, proto.protocol.Transaction.prototype.clearSignatureList = function() {
                this.setSignatureList([])
            }, proto.protocol.Transaction.prototype.getRetList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Transaction.Result, 5)
            }, proto.protocol.Transaction.prototype.setRetList = function(t) {
                r.Message.setRepeatedWrapperField(this, 5, t)
            }, proto.protocol.Transaction.prototype.addRet = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 5, t, proto.protocol.Transaction.Result, o)
            }, proto.protocol.Transaction.prototype.clearRetList = function() {
                this.setRetList([])
            }, proto.protocol.Transactions = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.Transactions.repeatedFields_, null)
            }, s.inherits(proto.protocol.Transactions, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Transactions.displayName = "proto.protocol.Transactions"), proto.protocol.Transactions.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.protocol.Transactions.prototype.toObject = function(t) {
                return proto.protocol.Transactions.toObject(t, this)
            }, proto.protocol.Transactions.toObject = function(t, o) {
                var e = {
                    transactionsList: r.Message.toObjectList(o.getTransactionsList(), proto.protocol.Transaction.toObject, t)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.Transactions.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Transactions;
                return proto.protocol.Transactions.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Transactions.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = new proto.protocol.Transaction;
                            o.readMessage(e, proto.protocol.Transaction.deserializeBinaryFromReader), t.addTransactions(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Transactions.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Transactions.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Transactions.serializeBinaryToWriter = function(t, o) {
                var e;
                (e = t.getTransactionsList()).length > 0 && o.writeRepeatedMessage(1, e, proto.protocol.Transaction.serializeBinaryToWriter)
            }, proto.protocol.Transactions.prototype.getTransactionsList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Transaction, 1)
            }, proto.protocol.Transactions.prototype.setTransactionsList = function(t) {
                r.Message.setRepeatedWrapperField(this, 1, t)
            }, proto.protocol.Transactions.prototype.addTransactions = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 1, t, proto.protocol.Transaction, o)
            }, proto.protocol.Transactions.prototype.clearTransactionsList = function() {
                this.setTransactionsList([])
            }, proto.protocol.BlockHeader = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.BlockHeader, r.Message), s.DEBUG && !COMPILED && (proto.protocol.BlockHeader.displayName = "proto.protocol.BlockHeader"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.BlockHeader.prototype.toObject = function(t) {
                return proto.protocol.BlockHeader.toObject(t, this)
            }, proto.protocol.BlockHeader.toObject = function(t, o) {
                var e, r = {
                    rawData: (e = o.getRawData()) && proto.protocol.BlockHeader.raw.toObject(t, e),
                    witnessSignature: o.getWitnessSignature_asB64()
                };
                return t && (r.$jspbMessageInstance = o), r
            }), proto.protocol.BlockHeader.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.BlockHeader;
                return proto.protocol.BlockHeader.deserializeBinaryFromReader(e, o)
            }, proto.protocol.BlockHeader.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = new proto.protocol.BlockHeader.raw;
                            o.readMessage(e, proto.protocol.BlockHeader.raw.deserializeBinaryFromReader), t.setRawData(e);
                            break;
                        case 2:
                            e = o.readBytes();
                            t.setWitnessSignature(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.BlockHeader.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.BlockHeader.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.BlockHeader.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                null != (e = t.getRawData()) && o.writeMessage(1, e, proto.protocol.BlockHeader.raw.serializeBinaryToWriter), (e = t.getWitnessSignature_asU8()).length > 0 && o.writeBytes(2, e)
            }, proto.protocol.BlockHeader.raw = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.BlockHeader.raw, r.Message), s.DEBUG && !COMPILED && (proto.protocol.BlockHeader.raw.displayName = "proto.protocol.BlockHeader.raw"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.BlockHeader.raw.prototype.toObject = function(t) {
                return proto.protocol.BlockHeader.raw.toObject(t, this)
            }, proto.protocol.BlockHeader.raw.toObject = function(t, o) {
                var e = {
                    timestamp: r.Message.getFieldWithDefault(o, 1, 0),
                    txtrieroot: o.getTxtrieroot_asB64(),
                    parenthash: o.getParenthash_asB64(),
                    number: r.Message.getFieldWithDefault(o, 7, 0),
                    witnessId: r.Message.getFieldWithDefault(o, 8, 0),
                    witnessAddress: o.getWitnessAddress_asB64()
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.BlockHeader.raw.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.BlockHeader.raw;
                return proto.protocol.BlockHeader.raw.deserializeBinaryFromReader(e, o)
            }, proto.protocol.BlockHeader.raw.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readInt64();
                            t.setTimestamp(e);
                            break;
                        case 2:
                            e = o.readBytes();
                            t.setTxtrieroot(e);
                            break;
                        case 3:
                            e = o.readBytes();
                            t.setParenthash(e);
                            break;
                        case 7:
                            e = o.readInt64();
                            t.setNumber(e);
                            break;
                        case 8:
                            e = o.readInt64();
                            t.setWitnessId(e);
                            break;
                        case 9:
                            e = o.readBytes();
                            t.setWitnessAddress(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.BlockHeader.raw.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.BlockHeader.raw.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.BlockHeader.raw.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                0 !== (e = t.getTimestamp()) && o.writeInt64(1, e), (e = t.getTxtrieroot_asU8()).length > 0 && o.writeBytes(2, e), (e = t.getParenthash_asU8()).length > 0 && o.writeBytes(3, e), 0 !== (e = t.getNumber()) && o.writeInt64(7, e), 0 !== (e = t.getWitnessId()) && o.writeInt64(8, e), (e = t.getWitnessAddress_asU8()).length > 0 && o.writeBytes(9, e)
            }, proto.protocol.BlockHeader.raw.prototype.getTimestamp = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.protocol.BlockHeader.raw.prototype.setTimestamp = function(t) {
                r.Message.setProto3IntField(this, 1, t)
            }, proto.protocol.BlockHeader.raw.prototype.getTxtrieroot = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.BlockHeader.raw.prototype.getTxtrieroot_asB64 = function() {
                return r.Message.bytesAsB64(this.getTxtrieroot())
            }, proto.protocol.BlockHeader.raw.prototype.getTxtrieroot_asU8 = function() {
                return r.Message.bytesAsU8(this.getTxtrieroot())
            }, proto.protocol.BlockHeader.raw.prototype.setTxtrieroot = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.BlockHeader.raw.prototype.getParenthash = function() {
                return r.Message.getFieldWithDefault(this, 3, "")
            }, proto.protocol.BlockHeader.raw.prototype.getParenthash_asB64 = function() {
                return r.Message.bytesAsB64(this.getParenthash())
            }, proto.protocol.BlockHeader.raw.prototype.getParenthash_asU8 = function() {
                return r.Message.bytesAsU8(this.getParenthash())
            }, proto.protocol.BlockHeader.raw.prototype.setParenthash = function(t) {
                r.Message.setProto3BytesField(this, 3, t)
            }, proto.protocol.BlockHeader.raw.prototype.getNumber = function() {
                return r.Message.getFieldWithDefault(this, 7, 0)
            }, proto.protocol.BlockHeader.raw.prototype.setNumber = function(t) {
                r.Message.setProto3IntField(this, 7, t)
            }, proto.protocol.BlockHeader.raw.prototype.getWitnessId = function() {
                return r.Message.getFieldWithDefault(this, 8, 0)
            }, proto.protocol.BlockHeader.raw.prototype.setWitnessId = function(t) {
                r.Message.setProto3IntField(this, 8, t)
            }, proto.protocol.BlockHeader.raw.prototype.getWitnessAddress = function() {
                return r.Message.getFieldWithDefault(this, 9, "")
            }, proto.protocol.BlockHeader.raw.prototype.getWitnessAddress_asB64 = function() {
                return r.Message.bytesAsB64(this.getWitnessAddress())
            }, proto.protocol.BlockHeader.raw.prototype.getWitnessAddress_asU8 = function() {
                return r.Message.bytesAsU8(this.getWitnessAddress())
            }, proto.protocol.BlockHeader.raw.prototype.setWitnessAddress = function(t) {
                r.Message.setProto3BytesField(this, 9, t)
            }, proto.protocol.BlockHeader.prototype.getRawData = function() {
                return r.Message.getWrapperField(this, proto.protocol.BlockHeader.raw, 1)
            }, proto.protocol.BlockHeader.prototype.setRawData = function(t) {
                r.Message.setWrapperField(this, 1, t)
            }, proto.protocol.BlockHeader.prototype.clearRawData = function() {
                this.setRawData(void 0)
            }, proto.protocol.BlockHeader.prototype.hasRawData = function() {
                return null != r.Message.getField(this, 1)
            }, proto.protocol.BlockHeader.prototype.getWitnessSignature = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.protocol.BlockHeader.prototype.getWitnessSignature_asB64 = function() {
                return r.Message.bytesAsB64(this.getWitnessSignature())
            }, proto.protocol.BlockHeader.prototype.getWitnessSignature_asU8 = function() {
                return r.Message.bytesAsU8(this.getWitnessSignature())
            }, proto.protocol.BlockHeader.prototype.setWitnessSignature = function(t) {
                r.Message.setProto3BytesField(this, 2, t)
            }, proto.protocol.Block = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.Block.repeatedFields_, null)
            }, s.inherits(proto.protocol.Block, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Block.displayName = "proto.protocol.Block"), proto.protocol.Block.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.protocol.Block.prototype.toObject = function(t) {
                return proto.protocol.Block.toObject(t, this)
            }, proto.protocol.Block.toObject = function(t, o) {
                var e, s = {
                    transactionsList: r.Message.toObjectList(o.getTransactionsList(), proto.protocol.Transaction.toObject, t),
                    blockHeader: (e = o.getBlockHeader()) && proto.protocol.BlockHeader.toObject(t, e)
                };
                return t && (s.$jspbMessageInstance = o), s
            }), proto.protocol.Block.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Block;
                return proto.protocol.Block.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Block.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = new proto.protocol.Transaction;
                            o.readMessage(e, proto.protocol.Transaction.deserializeBinaryFromReader), t.addTransactions(e);
                            break;
                        case 2:
                            e = new proto.protocol.BlockHeader;
                            o.readMessage(e, proto.protocol.BlockHeader.deserializeBinaryFromReader), t.setBlockHeader(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Block.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Block.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Block.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getTransactionsList()).length > 0 && o.writeRepeatedMessage(1, e, proto.protocol.Transaction.serializeBinaryToWriter), null != (e = t.getBlockHeader()) && o.writeMessage(2, e, proto.protocol.BlockHeader.serializeBinaryToWriter)
            }, proto.protocol.Block.prototype.getTransactionsList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Transaction, 1)
            }, proto.protocol.Block.prototype.setTransactionsList = function(t) {
                r.Message.setRepeatedWrapperField(this, 1, t)
            }, proto.protocol.Block.prototype.addTransactions = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 1, t, proto.protocol.Transaction, o)
            }, proto.protocol.Block.prototype.clearTransactionsList = function() {
                this.setTransactionsList([])
            }, proto.protocol.Block.prototype.getBlockHeader = function() {
                return r.Message.getWrapperField(this, proto.protocol.BlockHeader, 2)
            }, proto.protocol.Block.prototype.setBlockHeader = function(t) {
                r.Message.setWrapperField(this, 2, t)
            }, proto.protocol.Block.prototype.clearBlockHeader = function() {
                this.setBlockHeader(void 0)
            }, proto.protocol.Block.prototype.hasBlockHeader = function() {
                return null != r.Message.getField(this, 2)
            }, proto.protocol.ChainInventory = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.ChainInventory.repeatedFields_, null)
            }, s.inherits(proto.protocol.ChainInventory, r.Message), s.DEBUG && !COMPILED && (proto.protocol.ChainInventory.displayName = "proto.protocol.ChainInventory"), proto.protocol.ChainInventory.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.protocol.ChainInventory.prototype.toObject = function(t) {
                return proto.protocol.ChainInventory.toObject(t, this)
            }, proto.protocol.ChainInventory.toObject = function(t, o) {
                var e = {
                    idsList: r.Message.toObjectList(o.getIdsList(), proto.protocol.ChainInventory.BlockId.toObject, t),
                    remainNum: r.Message.getFieldWithDefault(o, 2, 0)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.ChainInventory.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.ChainInventory;
                return proto.protocol.ChainInventory.deserializeBinaryFromReader(e, o)
            }, proto.protocol.ChainInventory.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = new proto.protocol.ChainInventory.BlockId;
                            o.readMessage(e, proto.protocol.ChainInventory.BlockId.deserializeBinaryFromReader), t.addIds(e);
                            break;
                        case 2:
                            e = o.readInt64();
                            t.setRemainNum(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.ChainInventory.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.ChainInventory.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.ChainInventory.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getIdsList()).length > 0 && o.writeRepeatedMessage(1, e, proto.protocol.ChainInventory.BlockId.serializeBinaryToWriter), 0 !== (e = t.getRemainNum()) && o.writeInt64(2, e)
            }, proto.protocol.ChainInventory.BlockId = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.ChainInventory.BlockId, r.Message), s.DEBUG && !COMPILED && (proto.protocol.ChainInventory.BlockId.displayName = "proto.protocol.ChainInventory.BlockId"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.ChainInventory.BlockId.prototype.toObject = function(t) {
                return proto.protocol.ChainInventory.BlockId.toObject(t, this)
            }, proto.protocol.ChainInventory.BlockId.toObject = function(t, o) {
                var e = {
                    hash: o.getHash_asB64(),
                    number: r.Message.getFieldWithDefault(o, 2, 0)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.ChainInventory.BlockId.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.ChainInventory.BlockId;
                return proto.protocol.ChainInventory.BlockId.deserializeBinaryFromReader(e, o)
            }, proto.protocol.ChainInventory.BlockId.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readBytes();
                            t.setHash(e);
                            break;
                        case 2:
                            e = o.readInt64();
                            t.setNumber(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.ChainInventory.BlockId.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.ChainInventory.BlockId.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.ChainInventory.BlockId.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getHash_asU8()).length > 0 && o.writeBytes(1, e), 0 !== (e = t.getNumber()) && o.writeInt64(2, e)
            }, proto.protocol.ChainInventory.BlockId.prototype.getHash = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.ChainInventory.BlockId.prototype.getHash_asB64 = function() {
                return r.Message.bytesAsB64(this.getHash())
            }, proto.protocol.ChainInventory.BlockId.prototype.getHash_asU8 = function() {
                return r.Message.bytesAsU8(this.getHash())
            }, proto.protocol.ChainInventory.BlockId.prototype.setHash = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.ChainInventory.BlockId.prototype.getNumber = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.ChainInventory.BlockId.prototype.setNumber = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.ChainInventory.prototype.getIdsList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.ChainInventory.BlockId, 1)
            }, proto.protocol.ChainInventory.prototype.setIdsList = function(t) {
                r.Message.setRepeatedWrapperField(this, 1, t)
            }, proto.protocol.ChainInventory.prototype.addIds = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 1, t, proto.protocol.ChainInventory.BlockId, o)
            }, proto.protocol.ChainInventory.prototype.clearIdsList = function() {
                this.setIdsList([])
            }, proto.protocol.ChainInventory.prototype.getRemainNum = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.ChainInventory.prototype.setRemainNum = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.BlockInventory = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.BlockInventory.repeatedFields_, null)
            }, s.inherits(proto.protocol.BlockInventory, r.Message), s.DEBUG && !COMPILED && (proto.protocol.BlockInventory.displayName = "proto.protocol.BlockInventory"), proto.protocol.BlockInventory.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.protocol.BlockInventory.prototype.toObject = function(t) {
                return proto.protocol.BlockInventory.toObject(t, this)
            }, proto.protocol.BlockInventory.toObject = function(t, o) {
                var e = {
                    idsList: r.Message.toObjectList(o.getIdsList(), proto.protocol.BlockInventory.BlockId.toObject, t),
                    type: r.Message.getFieldWithDefault(o, 2, 0)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.BlockInventory.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.BlockInventory;
                return proto.protocol.BlockInventory.deserializeBinaryFromReader(e, o)
            }, proto.protocol.BlockInventory.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = new proto.protocol.BlockInventory.BlockId;
                            o.readMessage(e, proto.protocol.BlockInventory.BlockId.deserializeBinaryFromReader), t.addIds(e);
                            break;
                        case 2:
                            e = o.readEnum();
                            t.setType(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.BlockInventory.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.BlockInventory.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.BlockInventory.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getIdsList()).length > 0 && o.writeRepeatedMessage(1, e, proto.protocol.BlockInventory.BlockId.serializeBinaryToWriter), 0 !== (e = t.getType()) && o.writeEnum(2, e)
            }, proto.protocol.BlockInventory.Type = {
                SYNC: 0,
                ADVTISE: 1,
                FETCH: 2
            }, proto.protocol.BlockInventory.BlockId = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.BlockInventory.BlockId, r.Message), s.DEBUG && !COMPILED && (proto.protocol.BlockInventory.BlockId.displayName = "proto.protocol.BlockInventory.BlockId"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.BlockInventory.BlockId.prototype.toObject = function(t) {
                return proto.protocol.BlockInventory.BlockId.toObject(t, this)
            }, proto.protocol.BlockInventory.BlockId.toObject = function(t, o) {
                var e = {
                    hash: o.getHash_asB64(),
                    number: r.Message.getFieldWithDefault(o, 2, 0)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.BlockInventory.BlockId.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.BlockInventory.BlockId;
                return proto.protocol.BlockInventory.BlockId.deserializeBinaryFromReader(e, o)
            }, proto.protocol.BlockInventory.BlockId.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readBytes();
                            t.setHash(e);
                            break;
                        case 2:
                            e = o.readInt64();
                            t.setNumber(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.BlockInventory.BlockId.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.BlockInventory.BlockId.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.BlockInventory.BlockId.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getHash_asU8()).length > 0 && o.writeBytes(1, e), 0 !== (e = t.getNumber()) && o.writeInt64(2, e)
            }, proto.protocol.BlockInventory.BlockId.prototype.getHash = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.BlockInventory.BlockId.prototype.getHash_asB64 = function() {
                return r.Message.bytesAsB64(this.getHash())
            }, proto.protocol.BlockInventory.BlockId.prototype.getHash_asU8 = function() {
                return r.Message.bytesAsU8(this.getHash())
            }, proto.protocol.BlockInventory.BlockId.prototype.setHash = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.BlockInventory.BlockId.prototype.getNumber = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.BlockInventory.BlockId.prototype.setNumber = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.BlockInventory.prototype.getIdsList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.BlockInventory.BlockId, 1)
            }, proto.protocol.BlockInventory.prototype.setIdsList = function(t) {
                r.Message.setRepeatedWrapperField(this, 1, t)
            }, proto.protocol.BlockInventory.prototype.addIds = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 1, t, proto.protocol.BlockInventory.BlockId, o)
            }, proto.protocol.BlockInventory.prototype.clearIdsList = function() {
                this.setIdsList([])
            }, proto.protocol.BlockInventory.prototype.getType = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.BlockInventory.prototype.setType = function(t) {
                r.Message.setProto3EnumField(this, 2, t)
            }, proto.protocol.Inventory = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.Inventory.repeatedFields_, null)
            }, s.inherits(proto.protocol.Inventory, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Inventory.displayName = "proto.protocol.Inventory"), proto.protocol.Inventory.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.protocol.Inventory.prototype.toObject = function(t) {
                return proto.protocol.Inventory.toObject(t, this)
            }, proto.protocol.Inventory.toObject = function(t, o) {
                var e = {
                    type: r.Message.getFieldWithDefault(o, 1, 0),
                    idsList: o.getIdsList_asB64()
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.Inventory.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Inventory;
                return proto.protocol.Inventory.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Inventory.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readEnum();
                            t.setType(e);
                            break;
                        case 2:
                            e = o.readBytes();
                            t.addIds(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Inventory.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Inventory.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Inventory.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                0 !== (e = t.getType()) && o.writeEnum(1, e), (e = t.getIdsList_asU8()).length > 0 && o.writeRepeatedBytes(2, e)
            }, proto.protocol.Inventory.InventoryType = {
                TRX: 0,
                BLOCK: 1
            }, proto.protocol.Inventory.prototype.getType = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.protocol.Inventory.prototype.setType = function(t) {
                r.Message.setProto3EnumField(this, 1, t)
            }, proto.protocol.Inventory.prototype.getIdsList = function() {
                return r.Message.getRepeatedField(this, 2)
            }, proto.protocol.Inventory.prototype.getIdsList_asB64 = function() {
                return r.Message.bytesListAsB64(this.getIdsList())
            }, proto.protocol.Inventory.prototype.getIdsList_asU8 = function() {
                return r.Message.bytesListAsU8(this.getIdsList())
            }, proto.protocol.Inventory.prototype.setIdsList = function(t) {
                r.Message.setField(this, 2, t || [])
            }, proto.protocol.Inventory.prototype.addIds = function(t, o) {
                r.Message.addToRepeatedField(this, 2, t, o)
            }, proto.protocol.Inventory.prototype.clearIdsList = function() {
                this.setIdsList([])
            }, proto.protocol.Items = function(t) {
                r.Message.initialize(this, t, 0, -1, proto.protocol.Items.repeatedFields_, null)
            }, s.inherits(proto.protocol.Items, r.Message), s.DEBUG && !COMPILED && (proto.protocol.Items.displayName = "proto.protocol.Items"), proto.protocol.Items.repeatedFields_ = [2, 3, 4], r.Message.GENERATE_TO_OBJECT && (proto.protocol.Items.prototype.toObject = function(t) {
                return proto.protocol.Items.toObject(t, this)
            }, proto.protocol.Items.toObject = function(t, o) {
                var e = {
                    type: r.Message.getFieldWithDefault(o, 1, 0),
                    blocksList: r.Message.toObjectList(o.getBlocksList(), proto.protocol.Block.toObject, t),
                    blockHeadersList: r.Message.toObjectList(o.getBlockHeadersList(), proto.protocol.BlockHeader.toObject, t),
                    transactionsList: r.Message.toObjectList(o.getTransactionsList(), proto.protocol.Transaction.toObject, t)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.Items.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.Items;
                return proto.protocol.Items.deserializeBinaryFromReader(e, o)
            }, proto.protocol.Items.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readEnum();
                            t.setType(e);
                            break;
                        case 2:
                            e = new proto.protocol.Block;
                            o.readMessage(e, proto.protocol.Block.deserializeBinaryFromReader), t.addBlocks(e);
                            break;
                        case 3:
                            e = new proto.protocol.BlockHeader;
                            o.readMessage(e, proto.protocol.BlockHeader.deserializeBinaryFromReader), t.addBlockHeaders(e);
                            break;
                        case 4:
                            e = new proto.protocol.Transaction;
                            o.readMessage(e, proto.protocol.Transaction.deserializeBinaryFromReader), t.addTransactions(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.Items.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.Items.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.Items.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                0 !== (e = t.getType()) && o.writeEnum(1, e), (e = t.getBlocksList()).length > 0 && o.writeRepeatedMessage(2, e, proto.protocol.Block.serializeBinaryToWriter), (e = t.getBlockHeadersList()).length > 0 && o.writeRepeatedMessage(3, e, proto.protocol.BlockHeader.serializeBinaryToWriter), (e = t.getTransactionsList()).length > 0 && o.writeRepeatedMessage(4, e, proto.protocol.Transaction.serializeBinaryToWriter)
            }, proto.protocol.Items.ItemType = {
                ERR: 0,
                TRX: 1,
                BLOCK: 2,
                BLOCKHEADER: 3
            }, proto.protocol.Items.prototype.getType = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.protocol.Items.prototype.setType = function(t) {
                r.Message.setProto3EnumField(this, 1, t)
            }, proto.protocol.Items.prototype.getBlocksList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Block, 2)
            }, proto.protocol.Items.prototype.setBlocksList = function(t) {
                r.Message.setRepeatedWrapperField(this, 2, t)
            }, proto.protocol.Items.prototype.addBlocks = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 2, t, proto.protocol.Block, o)
            }, proto.protocol.Items.prototype.clearBlocksList = function() {
                this.setBlocksList([])
            }, proto.protocol.Items.prototype.getBlockHeadersList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.BlockHeader, 3)
            }, proto.protocol.Items.prototype.setBlockHeadersList = function(t) {
                r.Message.setRepeatedWrapperField(this, 3, t)
            }, proto.protocol.Items.prototype.addBlockHeaders = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 3, t, proto.protocol.BlockHeader, o)
            }, proto.protocol.Items.prototype.clearBlockHeadersList = function() {
                this.setBlockHeadersList([])
            }, proto.protocol.Items.prototype.getTransactionsList = function() {
                return r.Message.getRepeatedWrapperField(this, proto.protocol.Transaction, 4)
            }, proto.protocol.Items.prototype.setTransactionsList = function(t) {
                r.Message.setRepeatedWrapperField(this, 4, t)
            }, proto.protocol.Items.prototype.addTransactions = function(t, o) {
                return r.Message.addToRepeatedWrapperField(this, 4, t, proto.protocol.Transaction, o)
            }, proto.protocol.Items.prototype.clearTransactionsList = function() {
                this.setTransactionsList([])
            }, proto.protocol.DynamicProperties = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.DynamicProperties, r.Message), s.DEBUG && !COMPILED && (proto.protocol.DynamicProperties.displayName = "proto.protocol.DynamicProperties"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.DynamicProperties.prototype.toObject = function(t) {
                return proto.protocol.DynamicProperties.toObject(t, this)
            }, proto.protocol.DynamicProperties.toObject = function(t, o) {
                var e = {
                    lastSolidityBlockNum: r.Message.getFieldWithDefault(o, 1, 0)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.DynamicProperties.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.DynamicProperties;
                return proto.protocol.DynamicProperties.deserializeBinaryFromReader(e, o)
            }, proto.protocol.DynamicProperties.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readInt64();
                            t.setLastSolidityBlockNum(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.DynamicProperties.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.DynamicProperties.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.DynamicProperties.serializeBinaryToWriter = function(t, o) {
                var e;
                0 !== (e = t.getLastSolidityBlockNum()) && o.writeInt64(1, e)
            }, proto.protocol.DynamicProperties.prototype.getLastSolidityBlockNum = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.protocol.DynamicProperties.prototype.setLastSolidityBlockNum = function(t) {
                r.Message.setProto3IntField(this, 1, t)
            }, proto.protocol.DisconnectMessage = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.DisconnectMessage, r.Message), s.DEBUG && !COMPILED && (proto.protocol.DisconnectMessage.displayName = "proto.protocol.DisconnectMessage"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.DisconnectMessage.prototype.toObject = function(t) {
                return proto.protocol.DisconnectMessage.toObject(t, this)
            }, proto.protocol.DisconnectMessage.toObject = function(t, o) {
                var e = {
                    reason: r.Message.getFieldWithDefault(o, 1, 0)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.DisconnectMessage.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.DisconnectMessage;
                return proto.protocol.DisconnectMessage.deserializeBinaryFromReader(e, o)
            }, proto.protocol.DisconnectMessage.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readEnum();
                            t.setReason(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.DisconnectMessage.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.DisconnectMessage.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.DisconnectMessage.serializeBinaryToWriter = function(t, o) {
                var e;
                0 !== (e = t.getReason()) && o.writeEnum(1, e)
            }, proto.protocol.DisconnectMessage.prototype.getReason = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.protocol.DisconnectMessage.prototype.setReason = function(t) {
                r.Message.setProto3EnumField(this, 1, t)
            }, proto.protocol.HelloMessage = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.HelloMessage, r.Message), s.DEBUG && !COMPILED && (proto.protocol.HelloMessage.displayName = "proto.protocol.HelloMessage"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.HelloMessage.prototype.toObject = function(t) {
                return proto.protocol.HelloMessage.toObject(t, this)
            }, proto.protocol.HelloMessage.toObject = function(t, o) {
                var e, s = {
                    from: (e = o.getFrom()) && i.Endpoint.toObject(t, e),
                    version: r.Message.getFieldWithDefault(o, 2, 0),
                    timestamp: r.Message.getFieldWithDefault(o, 3, 0),
                    genesisblockid: (e = o.getGenesisblockid()) && proto.protocol.HelloMessage.BlockId.toObject(t, e),
                    solidblockid: (e = o.getSolidblockid()) && proto.protocol.HelloMessage.BlockId.toObject(t, e),
                    headblockid: (e = o.getHeadblockid()) && proto.protocol.HelloMessage.BlockId.toObject(t, e)
                };
                return t && (s.$jspbMessageInstance = o), s
            }), proto.protocol.HelloMessage.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.HelloMessage;
                return proto.protocol.HelloMessage.deserializeBinaryFromReader(e, o)
            }, proto.protocol.HelloMessage.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = new i.Endpoint;
                            o.readMessage(e, i.Endpoint.deserializeBinaryFromReader), t.setFrom(e);
                            break;
                        case 2:
                            e = o.readInt32();
                            t.setVersion(e);
                            break;
                        case 3:
                            e = o.readInt64();
                            t.setTimestamp(e);
                            break;
                        case 4:
                            e = new proto.protocol.HelloMessage.BlockId;
                            o.readMessage(e, proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader), t.setGenesisblockid(e);
                            break;
                        case 5:
                            e = new proto.protocol.HelloMessage.BlockId;
                            o.readMessage(e, proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader), t.setSolidblockid(e);
                            break;
                        case 6:
                            e = new proto.protocol.HelloMessage.BlockId;
                            o.readMessage(e, proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader), t.setHeadblockid(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.HelloMessage.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.HelloMessage.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.HelloMessage.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                null != (e = t.getFrom()) && o.writeMessage(1, e, i.Endpoint.serializeBinaryToWriter), 0 !== (e = t.getVersion()) && o.writeInt32(2, e), 0 !== (e = t.getTimestamp()) && o.writeInt64(3, e), null != (e = t.getGenesisblockid()) && o.writeMessage(4, e, proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter), null != (e = t.getSolidblockid()) && o.writeMessage(5, e, proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter), null != (e = t.getHeadblockid()) && o.writeMessage(6, e, proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter)
            }, proto.protocol.HelloMessage.BlockId = function(t) {
                r.Message.initialize(this, t, 0, -1, null, null)
            }, s.inherits(proto.protocol.HelloMessage.BlockId, r.Message), s.DEBUG && !COMPILED && (proto.protocol.HelloMessage.BlockId.displayName = "proto.protocol.HelloMessage.BlockId"), r.Message.GENERATE_TO_OBJECT && (proto.protocol.HelloMessage.BlockId.prototype.toObject = function(t) {
                return proto.protocol.HelloMessage.BlockId.toObject(t, this)
            }, proto.protocol.HelloMessage.BlockId.toObject = function(t, o) {
                var e = {
                    hash: o.getHash_asB64(),
                    number: r.Message.getFieldWithDefault(o, 2, 0)
                };
                return t && (e.$jspbMessageInstance = o), e
            }), proto.protocol.HelloMessage.BlockId.deserializeBinary = function(t) {
                var o = new r.BinaryReader(t),
                    e = new proto.protocol.HelloMessage.BlockId;
                return proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader(e, o)
            }, proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader = function(t, o) {
                for (; o.nextField() && !o.isEndGroup();) {
                    switch (o.getFieldNumber()) {
                        case 1:
                            var e = o.readBytes();
                            t.setHash(e);
                            break;
                        case 2:
                            e = o.readInt64();
                            t.setNumber(e);
                            break;
                        default:
                            o.skipField()
                    }
                }
                return t
            }, proto.protocol.HelloMessage.BlockId.prototype.serializeBinary = function() {
                var t = new r.BinaryWriter;
                return proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter(this, t), t.getResultBuffer()
            }, proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter = function(t, o) {
                var e = void 0;
                (e = t.getHash_asU8()).length > 0 && o.writeBytes(1, e), 0 !== (e = t.getNumber()) && o.writeInt64(2, e)
            }, proto.protocol.HelloMessage.BlockId.prototype.getHash = function() {
                return r.Message.getFieldWithDefault(this, 1, "")
            }, proto.protocol.HelloMessage.BlockId.prototype.getHash_asB64 = function() {
                return r.Message.bytesAsB64(this.getHash())
            }, proto.protocol.HelloMessage.BlockId.prototype.getHash_asU8 = function() {
                return r.Message.bytesAsU8(this.getHash())
            }, proto.protocol.HelloMessage.BlockId.prototype.setHash = function(t) {
                r.Message.setProto3BytesField(this, 1, t)
            }, proto.protocol.HelloMessage.BlockId.prototype.getNumber = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.HelloMessage.BlockId.prototype.setNumber = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.HelloMessage.prototype.getFrom = function() {
                return r.Message.getWrapperField(this, i.Endpoint, 1)
            }, proto.protocol.HelloMessage.prototype.setFrom = function(t) {
                r.Message.setWrapperField(this, 1, t)
            }, proto.protocol.HelloMessage.prototype.clearFrom = function() {
                this.setFrom(void 0)
            }, proto.protocol.HelloMessage.prototype.hasFrom = function() {
                return null != r.Message.getField(this, 1)
            }, proto.protocol.HelloMessage.prototype.getVersion = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.protocol.HelloMessage.prototype.setVersion = function(t) {
                r.Message.setProto3IntField(this, 2, t)
            }, proto.protocol.HelloMessage.prototype.getTimestamp = function() {
                return r.Message.getFieldWithDefault(this, 3, 0)
            }, proto.protocol.HelloMessage.prototype.setTimestamp = function(t) {
                r.Message.setProto3IntField(this, 3, t)
            }, proto.protocol.HelloMessage.prototype.getGenesisblockid = function() {
                return r.Message.getWrapperField(this, proto.protocol.HelloMessage.BlockId, 4)
            }, proto.protocol.HelloMessage.prototype.setGenesisblockid = function(t) {
                r.Message.setWrapperField(this, 4, t)
            }, proto.protocol.HelloMessage.prototype.clearGenesisblockid = function() {
                this.setGenesisblockid(void 0)
            }, proto.protocol.HelloMessage.prototype.hasGenesisblockid = function() {
                return null != r.Message.getField(this, 4)
            }, proto.protocol.HelloMessage.prototype.getSolidblockid = function() {
                return r.Message.getWrapperField(this, proto.protocol.HelloMessage.BlockId, 5)
            }, proto.protocol.HelloMessage.prototype.setSolidblockid = function(t) {
                r.Message.setWrapperField(this, 5, t)
            }, proto.protocol.HelloMessage.prototype.clearSolidblockid = function() {
                this.setSolidblockid(void 0)
            }, proto.protocol.HelloMessage.prototype.hasSolidblockid = function() {
                return null != r.Message.getField(this, 5)
            }, proto.protocol.HelloMessage.prototype.getHeadblockid = function() {
                return r.Message.getWrapperField(this, proto.protocol.HelloMessage.BlockId, 6)
            }, proto.protocol.HelloMessage.prototype.setHeadblockid = function(t) {
                r.Message.setWrapperField(this, 6, t)
            }, proto.protocol.HelloMessage.prototype.clearHeadblockid = function() {
                this.setHeadblockid(void 0)
            }, proto.protocol.HelloMessage.prototype.hasHeadblockid = function() {
                return null != r.Message.getField(this, 6)
            }, proto.protocol.AccountType = {
                NORMAL: 0,
                ASSETISSUE: 1,
                CONTRACT: 2
            }, proto.protocol.ReasonCode = {
                REQUESTED: 0,
                BAD_PROTOCOL: 2,
                TOO_MANY_PEERS: 4,
                DUPLICATE_PEER: 5,
                INCOMPATIBLE_PROTOCOL: 6,
                NULL_IDENTITY: 7,
                PEER_QUITING: 8,
                UNEXPECTED_IDENTITY: 9,
                LOCAL_IDENTITY: 10,
                PING_TIMEOUT: 11,
                USER_REASON: 16,
                RESET: 17,
                SYNC_FAIL: 18,
                FETCH_FAIL: 19,
                BAD_TX: 20,
                BAD_BLOCK: 21,
                FORKED: 22,
                UNLINKABLE: 23,
                INCOMPATIBLE_VERSION: 24,
                INCOMPATIBLE_CHAIN: 25,
                TIME_OUT: 32,
                CONNECT_FAIL: 33,
                UNKNOWN: 255
            }, s.object.extend(o, proto.protocol)
        },
        3439: function(t, o) {
            o.Base64 = function() {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                this.encode = function(o) {
                    for (var e, r, s, n, a, i, p, c = "", l = 0; l < o.length;) n = (e = o.charCodeAt(l++)) >> 2, a = (3 & e) << 4 | (r = o.charCodeAt(l++)) >> 4, i = (15 & r) << 2 | (s = o.charCodeAt(l++)) >> 6, p = 63 & s, isNaN(r) ? i = p = 64 : isNaN(s) && (p = 64), c = c + t.charAt(n) + t.charAt(a) + t.charAt(i) + t.charAt(p);
                    return c
                }, this.encodeIgnoreUtf8 = function(o) {
                    for (var e, r, s, n, a, i, p, c = "", l = 0; l < o.length;) n = (e = o[l++]) >> 2, a = (3 & e) << 4 | (r = o[l++]) >> 4, i = (15 & r) << 2 | (s = o[l++]) >> 6, p = 63 & s, isNaN(r) ? i = p = 64 : isNaN(s) && (p = 64), c = c + t.charAt(n) + t.charAt(a) + t.charAt(i) + t.charAt(p);
                    return c
                }, this.decode = function(o) {
                    var r, s, n, a, i, p, c = "",
                        l = 0;
                    for (o = o.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < o.length;) r = t.indexOf(o.charAt(l++)) << 2 | (a = t.indexOf(o.charAt(l++))) >> 4, s = (15 & a) << 4 | (i = t.indexOf(o.charAt(l++))) >> 2, n = (3 & i) << 6 | (p = t.indexOf(o.charAt(l++))), c += String.fromCharCode(r), 64 != i && (c += String.fromCharCode(s)), 64 != p && (c += String.fromCharCode(n));
                    return c = e(c)
                }, this.decodeToByteArray = function(e) {
                    var r, s, n, a, i, p, c = "",
                        l = 0;
                    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length;) r = t.indexOf(e.charAt(l++)) << 2 | (a = t.indexOf(e.charAt(l++))) >> 4, s = (15 & a) << 4 | (i = t.indexOf(e.charAt(l++))) >> 2, n = (3 & i) << 6 | (p = t.indexOf(e.charAt(l++))), c += String.fromCharCode(r), 64 != i && (c += String.fromCharCode(s)), 64 != p && (c += String.fromCharCode(n));
                    return o(c)
                };
                var o = function(t) {
                        for (var o = new Array(t.length), e = 0, r = c1 = c2 = 0; e < t.length;) r = t.charCodeAt(e), o[e] = r, e++;
                        return o
                    },
                    e = function(t) {
                        for (var o = "", e = 0, r = c1 = c2 = 0; e < t.length;)(r = t.charCodeAt(e)) < 128 ? (o += String.fromCharCode(r), e++) : r > 191 && r < 224 ? (c2 = t.charCodeAt(e + 1), o += String.fromCharCode((31 & r) << 6 | 63 & c2), e += 2) : (c2 = t.charCodeAt(e + 1), c3 = t.charCodeAt(e + 2), o += String.fromCharCode((15 & r) << 12 | (63 & c2) << 6 | 63 & c3), e += 3);
                        return o
                    }
            }
        },
        3442: function(t, o, e) {
            const {
                signTransaction: r
            } = e(1067);
            t.exports = class PrivateKeySigner {
                constructor(t) {
                    this.privateKey = t
                }
                async signTransaction(t) {
                    return r(this.privateKey, t)
                }
            }
        }
    }
]);