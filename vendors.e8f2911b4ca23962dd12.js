(window.webpackJsonp = window.webpackJsonp || []).push([
    [110], {
        927: function(e, t, o) {
            "use strict";
            o.d(t, "a", (function() {
                return i
            })), o.d(t, "c", (function() {
                return s
            })), o.d(t, "b", (function() {
                return u
            }));
            var n = o(8);
            const r = n.Reader,
                c = n.Writer,
                a = n.util,
                l = n.roots.hashgraph || (n.roots.hashgraph = {}),
                i = l.com = (() => {
                    const e = {};
                    return e.hedera = function() {
                        const e = {};
                        return e.mirror = function() {
                            const e = {};
                            return e.api = function() {
                                const e = {};
                                return e.proto = function() {
                                    const e = {};
                                    return e.ConsensusTopicQuery = function() {
                                        function e(e) {
                                            if (e)
                                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                                        }
                                        return e.prototype.topicID = null, e.prototype.consensusStartTime = null, e.prototype.consensusEndTime = null, e.prototype.limit = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                                            return new e(t)
                                        }, e.encode = function(e, t) {
                                            return t || (t = c.create()), null != e.topicID && Object.hasOwnProperty.call(e, "topicID") && l.proto.TopicID.encode(e.topicID, t.uint32(10).fork()).ldelim(), null != e.consensusStartTime && Object.hasOwnProperty.call(e, "consensusStartTime") && l.proto.Timestamp.encode(e.consensusStartTime, t.uint32(18).fork()).ldelim(), null != e.consensusEndTime && Object.hasOwnProperty.call(e, "consensusEndTime") && l.proto.Timestamp.encode(e.consensusEndTime, t.uint32(26).fork()).ldelim(), null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(32).uint64(e.limit), t
                                        }, e.decode = function(e, t) {
                                            e instanceof r || (e = r.create(e));
                                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.com.hedera.mirror.api.proto.ConsensusTopicQuery; e.pos < o;) {
                                                var c = e.uint32();
                                                switch (c >>> 3) {
                                                    case 1:
                                                        n.topicID = l.proto.TopicID.decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        n.consensusStartTime = l.proto.Timestamp.decode(e, e.uint32());
                                                        break;
                                                    case 3:
                                                        n.consensusEndTime = l.proto.Timestamp.decode(e, e.uint32());
                                                        break;
                                                    case 4:
                                                        n.limit = e.uint64();
                                                        break;
                                                    default:
                                                        e.skipType(7 & c)
                                                }
                                            }
                                            return n
                                        }, e
                                    }(), e.ConsensusTopicResponse = function() {
                                        function e(e) {
                                            if (e)
                                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                                        }
                                        return e.prototype.consensusTimestamp = null, e.prototype.message = a.newBuffer([]), e.prototype.runningHash = a.newBuffer([]), e.prototype.sequenceNumber = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.runningHashVersion = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.chunkInfo = null, e.create = function(t) {
                                            return new e(t)
                                        }, e.encode = function(e, t) {
                                            return t || (t = c.create()), null != e.consensusTimestamp && Object.hasOwnProperty.call(e, "consensusTimestamp") && l.proto.Timestamp.encode(e.consensusTimestamp, t.uint32(10).fork()).ldelim(), null != e.message && Object.hasOwnProperty.call(e, "message") && t.uint32(18).bytes(e.message), null != e.runningHash && Object.hasOwnProperty.call(e, "runningHash") && t.uint32(26).bytes(e.runningHash), null != e.sequenceNumber && Object.hasOwnProperty.call(e, "sequenceNumber") && t.uint32(32).uint64(e.sequenceNumber), null != e.runningHashVersion && Object.hasOwnProperty.call(e, "runningHashVersion") && t.uint32(40).uint64(e.runningHashVersion), null != e.chunkInfo && Object.hasOwnProperty.call(e, "chunkInfo") && l.proto.ConsensusMessageChunkInfo.encode(e.chunkInfo, t.uint32(50).fork()).ldelim(), t
                                        }, e.decode = function(e, t) {
                                            e instanceof r || (e = r.create(e));
                                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.com.hedera.mirror.api.proto.ConsensusTopicResponse; e.pos < o;) {
                                                var c = e.uint32();
                                                switch (c >>> 3) {
                                                    case 1:
                                                        n.consensusTimestamp = l.proto.Timestamp.decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        n.message = e.bytes();
                                                        break;
                                                    case 3:
                                                        n.runningHash = e.bytes();
                                                        break;
                                                    case 4:
                                                        n.sequenceNumber = e.uint64();
                                                        break;
                                                    case 5:
                                                        n.runningHashVersion = e.uint64();
                                                        break;
                                                    case 6:
                                                        n.chunkInfo = l.proto.ConsensusMessageChunkInfo.decode(e, e.uint32());
                                                        break;
                                                    default:
                                                        e.skipType(7 & c)
                                                }
                                            }
                                            return n
                                        }, e
                                    }(), e.ConsensusService = function() {
                                        function e(e, t, o) {
                                            n.rpc.Service.call(this, e, t, o)
                                        }
                                        return (e.prototype = Object.create(n.rpc.Service.prototype)).constructor = e, e.create = function(e, t, o) {
                                            return new this(e, t, o)
                                        }, Object.defineProperty(e.prototype.subscribeTopic = function e(t, o) {
                                            return this.rpcCall(e, l.com.hedera.mirror.api.proto.ConsensusTopicQuery, l.com.hedera.mirror.api.proto.ConsensusTopicResponse, t, o)
                                        }, "name", {
                                            value: "subscribeTopic"
                                        }), e
                                    }(), e.AddressBookQuery = function() {
                                        function e(e) {
                                            if (e)
                                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                                        }
                                        return e.prototype.fileId = null, e.prototype.limit = 0, e.create = function(t) {
                                            return new e(t)
                                        }, e.encode = function(e, t) {
                                            return t || (t = c.create()), null != e.fileId && Object.hasOwnProperty.call(e, "fileId") && l.proto.FileID.encode(e.fileId, t.uint32(10).fork()).ldelim(), null != e.limit && Object.hasOwnProperty.call(e, "limit") && t.uint32(16).int32(e.limit), t
                                        }, e.decode = function(e, t) {
                                            e instanceof r || (e = r.create(e));
                                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.com.hedera.mirror.api.proto.AddressBookQuery; e.pos < o;) {
                                                var c = e.uint32();
                                                switch (c >>> 3) {
                                                    case 1:
                                                        n.fileId = l.proto.FileID.decode(e, e.uint32());
                                                        break;
                                                    case 2:
                                                        n.limit = e.int32();
                                                        break;
                                                    default:
                                                        e.skipType(7 & c)
                                                }
                                            }
                                            return n
                                        }, e
                                    }(), e.NetworkService = function() {
                                        function e(e, t, o) {
                                            n.rpc.Service.call(this, e, t, o)
                                        }
                                        return (e.prototype = Object.create(n.rpc.Service.prototype)).constructor = e, e.create = function(e, t, o) {
                                            return new this(e, t, o)
                                        }, Object.defineProperty(e.prototype.getNodes = function e(t, o) {
                                            return this.rpcCall(e, l.com.hedera.mirror.api.proto.AddressBookQuery, l.proto.NodeAddress, t, o)
                                        }, "name", {
                                            value: "getNodes"
                                        }), e
                                    }(), e
                                }(), e
                            }(), e
                        }(), e
                    }(), e
                })(),
                s = l.proto = (() => {
                    const e = {};
                    return e.TransactionList = function() {
                        function e(e) {
                            if (this.transactionList = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.transactionList = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.transactionList && e.transactionList.length)
                                for (var o = 0; o < e.transactionList.length; ++o) l.proto.Transaction.encode(e.transactionList[o], t.uint32(10).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionList; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.transactionList && n.transactionList.length || (n.transactionList = []), n.transactionList.push(l.proto.Transaction.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ShardID = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.shardNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.shardNum && Object.hasOwnProperty.call(e, "shardNum") && t.uint32(8).int64(e.shardNum), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ShardID; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.shardNum = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.RealmID = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.shardNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.realmNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.shardNum && Object.hasOwnProperty.call(e, "shardNum") && t.uint32(8).int64(e.shardNum), null != e.realmNum && Object.hasOwnProperty.call(e, "realmNum") && t.uint32(16).int64(e.realmNum), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.RealmID; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.shardNum = e.int64();
                                        break;
                                    case 2:
                                        n.realmNum = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.AccountID = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.shardNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.realmNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.accountNum = null, e.prototype.alias = null, Object.defineProperty(e.prototype, "account", {
                            get: a.oneOfGetter(t = ["accountNum", "alias"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.shardNum && Object.hasOwnProperty.call(e, "shardNum") && t.uint32(8).int64(e.shardNum), null != e.realmNum && Object.hasOwnProperty.call(e, "realmNum") && t.uint32(16).int64(e.realmNum), null != e.accountNum && Object.hasOwnProperty.call(e, "accountNum") && t.uint32(24).int64(e.accountNum), null != e.alias && Object.hasOwnProperty.call(e, "alias") && t.uint32(34).bytes(e.alias), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.AccountID; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.shardNum = e.int64();
                                        break;
                                    case 2:
                                        n.realmNum = e.int64();
                                        break;
                                    case 3:
                                        n.accountNum = e.int64();
                                        break;
                                    case 4:
                                        n.alias = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FileID = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.shardNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.realmNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.fileNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.shardNum && Object.hasOwnProperty.call(e, "shardNum") && t.uint32(8).int64(e.shardNum), null != e.realmNum && Object.hasOwnProperty.call(e, "realmNum") && t.uint32(16).int64(e.realmNum), null != e.fileNum && Object.hasOwnProperty.call(e, "fileNum") && t.uint32(24).int64(e.fileNum), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FileID; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.shardNum = e.int64();
                                        break;
                                    case 2:
                                        n.realmNum = e.int64();
                                        break;
                                    case 3:
                                        n.fileNum = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractID = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.shardNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.realmNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.contractNum = null, e.prototype.evmAddress = null, Object.defineProperty(e.prototype, "contract", {
                            get: a.oneOfGetter(t = ["contractNum", "evmAddress"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.shardNum && Object.hasOwnProperty.call(e, "shardNum") && t.uint32(8).int64(e.shardNum), null != e.realmNum && Object.hasOwnProperty.call(e, "realmNum") && t.uint32(16).int64(e.realmNum), null != e.contractNum && Object.hasOwnProperty.call(e, "contractNum") && t.uint32(24).int64(e.contractNum), null != e.evmAddress && Object.hasOwnProperty.call(e, "evmAddress") && t.uint32(34).bytes(e.evmAddress), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractID; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.shardNum = e.int64();
                                        break;
                                    case 2:
                                        n.realmNum = e.int64();
                                        break;
                                    case 3:
                                        n.contractNum = e.int64();
                                        break;
                                    case 4:
                                        n.evmAddress = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionID = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.transactionValidStart = null, e.prototype.accountID = null, e.prototype.scheduled = !1, e.prototype.nonce = 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.transactionValidStart && Object.hasOwnProperty.call(e, "transactionValidStart") && l.proto.Timestamp.encode(e.transactionValidStart, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), null != e.scheduled && Object.hasOwnProperty.call(e, "scheduled") && t.uint32(24).bool(e.scheduled), null != e.nonce && Object.hasOwnProperty.call(e, "nonce") && t.uint32(32).int32(e.nonce), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionID; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.transactionValidStart = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.scheduled = e.bool();
                                        break;
                                    case 4:
                                        n.nonce = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.AccountAmount = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.accountID = null, e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.isApproval = !1, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(10).fork()).ldelim(), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(16).sint64(e.amount), null != e.isApproval && Object.hasOwnProperty.call(e, "isApproval") && t.uint32(24).bool(e.isApproval), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.AccountAmount; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.amount = e.sint64();
                                        break;
                                    case 3:
                                        n.isApproval = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransferList = function() {
                        function e(e) {
                            if (this.accountAmounts = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.accountAmounts = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.accountAmounts && e.accountAmounts.length)
                                for (var o = 0; o < e.accountAmounts.length; ++o) l.proto.AccountAmount.encode(e.accountAmounts[o], t.uint32(10).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransferList; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.accountAmounts && n.accountAmounts.length || (n.accountAmounts = []), n.accountAmounts.push(l.proto.AccountAmount.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NftTransfer = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.senderAccountID = null, e.prototype.receiverAccountID = null, e.prototype.serialNumber = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.isApproval = !1, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.senderAccountID && Object.hasOwnProperty.call(e, "senderAccountID") && l.proto.AccountID.encode(e.senderAccountID, t.uint32(10).fork()).ldelim(), null != e.receiverAccountID && Object.hasOwnProperty.call(e, "receiverAccountID") && l.proto.AccountID.encode(e.receiverAccountID, t.uint32(18).fork()).ldelim(), null != e.serialNumber && Object.hasOwnProperty.call(e, "serialNumber") && t.uint32(24).int64(e.serialNumber), null != e.isApproval && Object.hasOwnProperty.call(e, "isApproval") && t.uint32(32).bool(e.isApproval), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NftTransfer; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.senderAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.receiverAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.serialNumber = e.int64();
                                        break;
                                    case 4:
                                        n.isApproval = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenTransferList = function() {
                        function e(e) {
                            if (this.transfers = [], this.nftTransfers = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.prototype.transfers = a.emptyArray, e.prototype.nftTransfers = a.emptyArray, e.prototype.expectedDecimals = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), null != e.transfers && e.transfers.length)
                                for (var o = 0; o < e.transfers.length; ++o) l.proto.AccountAmount.encode(e.transfers[o], t.uint32(18).fork()).ldelim();
                            if (null != e.nftTransfers && e.nftTransfers.length)
                                for (o = 0; o < e.nftTransfers.length; ++o) l.proto.NftTransfer.encode(e.nftTransfers[o], t.uint32(26).fork()).ldelim();
                            return null != e.expectedDecimals && Object.hasOwnProperty.call(e, "expectedDecimals") && l.google.protobuf.UInt32Value.encode(e.expectedDecimals, t.uint32(34).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenTransferList; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.transfers && n.transfers.length || (n.transfers = []), n.transfers.push(l.proto.AccountAmount.decode(e, e.uint32()));
                                        break;
                                    case 3:
                                        n.nftTransfers && n.nftTransfers.length || (n.nftTransfers = []), n.nftTransfers.push(l.proto.NftTransfer.decode(e, e.uint32()));
                                        break;
                                    case 4:
                                        n.expectedDecimals = l.google.protobuf.UInt32Value.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.Fraction = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.numerator = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.denominator = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.numerator && Object.hasOwnProperty.call(e, "numerator") && t.uint32(8).int64(e.numerator), null != e.denominator && Object.hasOwnProperty.call(e, "denominator") && t.uint32(16).int64(e.denominator), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.Fraction; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.numerator = e.int64();
                                        break;
                                    case 2:
                                        n.denominator = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TopicID = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.shardNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.realmNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.topicNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.shardNum && Object.hasOwnProperty.call(e, "shardNum") && t.uint32(8).int64(e.shardNum), null != e.realmNum && Object.hasOwnProperty.call(e, "realmNum") && t.uint32(16).int64(e.realmNum), null != e.topicNum && Object.hasOwnProperty.call(e, "topicNum") && t.uint32(24).int64(e.topicNum), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TopicID; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.shardNum = e.int64();
                                        break;
                                    case 2:
                                        n.realmNum = e.int64();
                                        break;
                                    case 3:
                                        n.topicNum = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenID = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.shardNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.realmNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.tokenNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.shardNum && Object.hasOwnProperty.call(e, "shardNum") && t.uint32(8).int64(e.shardNum), null != e.realmNum && Object.hasOwnProperty.call(e, "realmNum") && t.uint32(16).int64(e.realmNum), null != e.tokenNum && Object.hasOwnProperty.call(e, "tokenNum") && t.uint32(24).int64(e.tokenNum), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenID; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.shardNum = e.int64();
                                        break;
                                    case 2:
                                        n.realmNum = e.int64();
                                        break;
                                    case 3:
                                        n.tokenNum = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ScheduleID = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.shardNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.realmNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.scheduleNum = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.shardNum && Object.hasOwnProperty.call(e, "shardNum") && t.uint32(8).int64(e.shardNum), null != e.realmNum && Object.hasOwnProperty.call(e, "realmNum") && t.uint32(16).int64(e.realmNum), null != e.scheduleNum && Object.hasOwnProperty.call(e, "scheduleNum") && t.uint32(24).int64(e.scheduleNum), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ScheduleID; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.shardNum = e.int64();
                                        break;
                                    case 2:
                                        n.realmNum = e.int64();
                                        break;
                                    case 3:
                                        n.scheduleNum = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenType = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "FUNGIBLE_COMMON"] = 0, t[e[1] = "NON_FUNGIBLE_UNIQUE"] = 1, t
                    }(), e.SubType = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "DEFAULT"] = 0, t[e[1] = "TOKEN_FUNGIBLE_COMMON"] = 1, t[e[2] = "TOKEN_NON_FUNGIBLE_UNIQUE"] = 2, t[e[3] = "TOKEN_FUNGIBLE_COMMON_WITH_CUSTOM_FEES"] = 3, t[e[4] = "TOKEN_NON_FUNGIBLE_UNIQUE_WITH_CUSTOM_FEES"] = 4, t[e[5] = "SCHEDULE_CREATE_CONTRACT_CALL"] = 5, t
                    }(), e.TokenSupplyType = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "INFINITE"] = 0, t[e[1] = "FINITE"] = 1, t
                    }(), e.TokenFreezeStatus = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "FreezeNotApplicable"] = 0, t[e[1] = "Frozen"] = 1, t[e[2] = "Unfrozen"] = 2, t
                    }(), e.TokenKycStatus = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "KycNotApplicable"] = 0, t[e[1] = "Granted"] = 1, t[e[2] = "Revoked"] = 2, t
                    }(), e.TokenPauseStatus = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "PauseNotApplicable"] = 0, t[e[1] = "Paused"] = 1, t[e[2] = "Unpaused"] = 2, t
                    }(), e.Key = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.contractID = null, e.prototype.ed25519 = null, e.prototype.RSA_3072 = null, e.prototype.ECDSA_384 = null, e.prototype.thresholdKey = null, e.prototype.keyList = null, e.prototype.ECDSASecp256k1 = null, e.prototype.delegatableContractId = null, Object.defineProperty(e.prototype, "key", {
                            get: a.oneOfGetter(t = ["contractID", "ed25519", "RSA_3072", "ECDSA_384", "thresholdKey", "keyList", "ECDSASecp256k1", "delegatableContractId"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(10).fork()).ldelim(), null != e.ed25519 && Object.hasOwnProperty.call(e, "ed25519") && t.uint32(18).bytes(e.ed25519), null != e.RSA_3072 && Object.hasOwnProperty.call(e, "RSA_3072") && t.uint32(26).bytes(e.RSA_3072), null != e.ECDSA_384 && Object.hasOwnProperty.call(e, "ECDSA_384") && t.uint32(34).bytes(e.ECDSA_384), null != e.thresholdKey && Object.hasOwnProperty.call(e, "thresholdKey") && l.proto.ThresholdKey.encode(e.thresholdKey, t.uint32(42).fork()).ldelim(), null != e.keyList && Object.hasOwnProperty.call(e, "keyList") && l.proto.KeyList.encode(e.keyList, t.uint32(50).fork()).ldelim(), null != e.ECDSASecp256k1 && Object.hasOwnProperty.call(e, "ECDSASecp256k1") && t.uint32(58).bytes(e.ECDSASecp256k1), null != e.delegatableContractId && Object.hasOwnProperty.call(e, "delegatableContractId") && l.proto.ContractID.encode(e.delegatableContractId, t.uint32(66).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.Key; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.ed25519 = e.bytes();
                                        break;
                                    case 3:
                                        n.RSA_3072 = e.bytes();
                                        break;
                                    case 4:
                                        n.ECDSA_384 = e.bytes();
                                        break;
                                    case 5:
                                        n.thresholdKey = l.proto.ThresholdKey.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.keyList = l.proto.KeyList.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.ECDSASecp256k1 = e.bytes();
                                        break;
                                    case 8:
                                        n.delegatableContractId = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ThresholdKey = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.threshold = 0, e.prototype.keys = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.threshold && Object.hasOwnProperty.call(e, "threshold") && t.uint32(8).uint32(e.threshold), null != e.keys && Object.hasOwnProperty.call(e, "keys") && l.proto.KeyList.encode(e.keys, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ThresholdKey; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.threshold = e.uint32();
                                        break;
                                    case 2:
                                        n.keys = l.proto.KeyList.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.KeyList = function() {
                        function e(e) {
                            if (this.keys = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.keys = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.keys && e.keys.length)
                                for (var o = 0; o < e.keys.length; ++o) l.proto.Key.encode(e.keys[o], t.uint32(10).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.KeyList; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.keys && n.keys.length || (n.keys = []), n.keys.push(l.proto.Key.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.Signature = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.contract = null, e.prototype.ed25519 = null, e.prototype.RSA_3072 = null, e.prototype.ECDSA_384 = null, e.prototype.thresholdSignature = null, e.prototype.signatureList = null, Object.defineProperty(e.prototype, "signature", {
                            get: a.oneOfGetter(t = ["contract", "ed25519", "RSA_3072", "ECDSA_384", "thresholdSignature", "signatureList"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.contract && Object.hasOwnProperty.call(e, "contract") && t.uint32(10).bytes(e.contract), null != e.ed25519 && Object.hasOwnProperty.call(e, "ed25519") && t.uint32(18).bytes(e.ed25519), null != e.RSA_3072 && Object.hasOwnProperty.call(e, "RSA_3072") && t.uint32(26).bytes(e.RSA_3072), null != e.ECDSA_384 && Object.hasOwnProperty.call(e, "ECDSA_384") && t.uint32(34).bytes(e.ECDSA_384), null != e.thresholdSignature && Object.hasOwnProperty.call(e, "thresholdSignature") && l.proto.ThresholdSignature.encode(e.thresholdSignature, t.uint32(42).fork()).ldelim(), null != e.signatureList && Object.hasOwnProperty.call(e, "signatureList") && l.proto.SignatureList.encode(e.signatureList, t.uint32(50).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.Signature; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.contract = e.bytes();
                                        break;
                                    case 2:
                                        n.ed25519 = e.bytes();
                                        break;
                                    case 3:
                                        n.RSA_3072 = e.bytes();
                                        break;
                                    case 4:
                                        n.ECDSA_384 = e.bytes();
                                        break;
                                    case 5:
                                        n.thresholdSignature = l.proto.ThresholdSignature.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.signatureList = l.proto.SignatureList.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ThresholdSignature = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.sigs = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.sigs && Object.hasOwnProperty.call(e, "sigs") && l.proto.SignatureList.encode(e.sigs, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ThresholdSignature; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 2:
                                        n.sigs = l.proto.SignatureList.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SignatureList = function() {
                        function e(e) {
                            if (this.sigs = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.sigs = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.sigs && e.sigs.length)
                                for (var o = 0; o < e.sigs.length; ++o) l.proto.Signature.encode(e.sigs[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SignatureList; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 2:
                                        n.sigs && n.sigs.length || (n.sigs = []), n.sigs.push(l.proto.Signature.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SignaturePair = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.pubKeyPrefix = a.newBuffer([]), e.prototype.contract = null, e.prototype.ed25519 = null, e.prototype.RSA_3072 = null, e.prototype.ECDSA_384 = null, e.prototype.ECDSASecp256k1 = null, Object.defineProperty(e.prototype, "signature", {
                            get: a.oneOfGetter(t = ["contract", "ed25519", "RSA_3072", "ECDSA_384", "ECDSASecp256k1"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.pubKeyPrefix && Object.hasOwnProperty.call(e, "pubKeyPrefix") && t.uint32(10).bytes(e.pubKeyPrefix), null != e.contract && Object.hasOwnProperty.call(e, "contract") && t.uint32(18).bytes(e.contract), null != e.ed25519 && Object.hasOwnProperty.call(e, "ed25519") && t.uint32(26).bytes(e.ed25519), null != e.RSA_3072 && Object.hasOwnProperty.call(e, "RSA_3072") && t.uint32(34).bytes(e.RSA_3072), null != e.ECDSA_384 && Object.hasOwnProperty.call(e, "ECDSA_384") && t.uint32(42).bytes(e.ECDSA_384), null != e.ECDSASecp256k1 && Object.hasOwnProperty.call(e, "ECDSASecp256k1") && t.uint32(50).bytes(e.ECDSASecp256k1), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SignaturePair; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.pubKeyPrefix = e.bytes();
                                        break;
                                    case 2:
                                        n.contract = e.bytes();
                                        break;
                                    case 3:
                                        n.ed25519 = e.bytes();
                                        break;
                                    case 4:
                                        n.RSA_3072 = e.bytes();
                                        break;
                                    case 5:
                                        n.ECDSA_384 = e.bytes();
                                        break;
                                    case 6:
                                        n.ECDSASecp256k1 = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SignatureMap = function() {
                        function e(e) {
                            if (this.sigPair = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.sigPair = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.sigPair && e.sigPair.length)
                                for (var o = 0; o < e.sigPair.length; ++o) l.proto.SignaturePair.encode(e.sigPair[o], t.uint32(10).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SignatureMap; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.sigPair && n.sigPair.length || (n.sigPair = []), n.sigPair.push(l.proto.SignaturePair.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.HederaFunctionality = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "NONE"] = 0, t[e[1] = "CryptoTransfer"] = 1, t[e[2] = "CryptoUpdate"] = 2, t[e[3] = "CryptoDelete"] = 3, t[e[4] = "CryptoAddLiveHash"] = 4, t[e[5] = "CryptoDeleteLiveHash"] = 5, t[e[6] = "ContractCall"] = 6, t[e[7] = "ContractCreate"] = 7, t[e[8] = "ContractUpdate"] = 8, t[e[9] = "FileCreate"] = 9, t[e[10] = "FileAppend"] = 10, t[e[11] = "FileUpdate"] = 11, t[e[12] = "FileDelete"] = 12, t[e[13] = "CryptoGetAccountBalance"] = 13, t[e[14] = "CryptoGetAccountRecords"] = 14, t[e[15] = "CryptoGetInfo"] = 15, t[e[16] = "ContractCallLocal"] = 16, t[e[17] = "ContractGetInfo"] = 17, t[e[18] = "ContractGetBytecode"] = 18, t[e[19] = "GetBySolidityID"] = 19, t[e[20] = "GetByKey"] = 20, t[e[21] = "CryptoGetLiveHash"] = 21, t[e[22] = "CryptoGetStakers"] = 22, t[e[23] = "FileGetContents"] = 23, t[e[24] = "FileGetInfo"] = 24, t[e[25] = "TransactionGetRecord"] = 25, t[e[26] = "ContractGetRecords"] = 26, t[e[27] = "CryptoCreate"] = 27, t[e[28] = "SystemDelete"] = 28, t[e[29] = "SystemUndelete"] = 29, t[e[30] = "ContractDelete"] = 30, t[e[31] = "Freeze"] = 31, t[e[32] = "CreateTransactionRecord"] = 32, t[e[33] = "CryptoAccountAutoRenew"] = 33, t[e[34] = "ContractAutoRenew"] = 34, t[e[35] = "GetVersionInfo"] = 35, t[e[36] = "TransactionGetReceipt"] = 36, t[e[50] = "ConsensusCreateTopic"] = 50, t[e[51] = "ConsensusUpdateTopic"] = 51, t[e[52] = "ConsensusDeleteTopic"] = 52, t[e[53] = "ConsensusGetTopicInfo"] = 53, t[e[54] = "ConsensusSubmitMessage"] = 54, t[e[55] = "UncheckedSubmit"] = 55, t[e[56] = "TokenCreate"] = 56, t[e[58] = "TokenGetInfo"] = 58, t[e[59] = "TokenFreezeAccount"] = 59, t[e[60] = "TokenUnfreezeAccount"] = 60, t[e[61] = "TokenGrantKycToAccount"] = 61, t[e[62] = "TokenRevokeKycFromAccount"] = 62, t[e[63] = "TokenDelete"] = 63, t[e[64] = "TokenUpdate"] = 64, t[e[65] = "TokenMint"] = 65, t[e[66] = "TokenBurn"] = 66, t[e[67] = "TokenAccountWipe"] = 67, t[e[68] = "TokenAssociateToAccount"] = 68, t[e[69] = "TokenDissociateFromAccount"] = 69, t[e[70] = "ScheduleCreate"] = 70, t[e[71] = "ScheduleDelete"] = 71, t[e[72] = "ScheduleSign"] = 72, t[e[73] = "ScheduleGetInfo"] = 73, t[e[74] = "TokenGetAccountNftInfos"] = 74, t[e[75] = "TokenGetNftInfo"] = 75, t[e[76] = "TokenGetNftInfos"] = 76, t[e[77] = "TokenFeeScheduleUpdate"] = 77, t[e[78] = "NetworkGetExecutionTime"] = 78, t[e[79] = "TokenPause"] = 79, t[e[80] = "TokenUnpause"] = 80, t[e[81] = "CryptoApproveAllowance"] = 81, t[e[82] = "CryptoDeleteAllowance"] = 82, t[e[83] = "GetAccountDetails"] = 83, t[e[84] = "EthereumTransaction"] = 84, t[e[85] = "NodeStakeUpdate"] = 85, t[e[86] = "UtilPrng"] = 86, t
                    }(), e.FeeComponents = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.min = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.max = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.constant = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.bpt = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.vpt = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.rbh = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.sbh = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.gas = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.tv = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.bpr = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.sbpr = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.min && Object.hasOwnProperty.call(e, "min") && t.uint32(8).int64(e.min), null != e.max && Object.hasOwnProperty.call(e, "max") && t.uint32(16).int64(e.max), null != e.constant && Object.hasOwnProperty.call(e, "constant") && t.uint32(24).int64(e.constant), null != e.bpt && Object.hasOwnProperty.call(e, "bpt") && t.uint32(32).int64(e.bpt), null != e.vpt && Object.hasOwnProperty.call(e, "vpt") && t.uint32(40).int64(e.vpt), null != e.rbh && Object.hasOwnProperty.call(e, "rbh") && t.uint32(48).int64(e.rbh), null != e.sbh && Object.hasOwnProperty.call(e, "sbh") && t.uint32(56).int64(e.sbh), null != e.gas && Object.hasOwnProperty.call(e, "gas") && t.uint32(64).int64(e.gas), null != e.tv && Object.hasOwnProperty.call(e, "tv") && t.uint32(72).int64(e.tv), null != e.bpr && Object.hasOwnProperty.call(e, "bpr") && t.uint32(80).int64(e.bpr), null != e.sbpr && Object.hasOwnProperty.call(e, "sbpr") && t.uint32(88).int64(e.sbpr), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FeeComponents; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.min = e.int64();
                                        break;
                                    case 2:
                                        n.max = e.int64();
                                        break;
                                    case 3:
                                        n.constant = e.int64();
                                        break;
                                    case 4:
                                        n.bpt = e.int64();
                                        break;
                                    case 5:
                                        n.vpt = e.int64();
                                        break;
                                    case 6:
                                        n.rbh = e.int64();
                                        break;
                                    case 7:
                                        n.sbh = e.int64();
                                        break;
                                    case 8:
                                        n.gas = e.int64();
                                        break;
                                    case 9:
                                        n.tv = e.int64();
                                        break;
                                    case 10:
                                        n.bpr = e.int64();
                                        break;
                                    case 11:
                                        n.sbpr = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionFeeSchedule = function() {
                        function e(e) {
                            if (this.fees = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.hederaFunctionality = 0, e.prototype.feeData = null, e.prototype.fees = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.hederaFunctionality && Object.hasOwnProperty.call(e, "hederaFunctionality") && t.uint32(8).int32(e.hederaFunctionality), null != e.feeData && Object.hasOwnProperty.call(e, "feeData") && l.proto.FeeData.encode(e.feeData, t.uint32(18).fork()).ldelim(), null != e.fees && e.fees.length)
                                for (var o = 0; o < e.fees.length; ++o) l.proto.FeeData.encode(e.fees[o], t.uint32(26).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionFeeSchedule; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.hederaFunctionality = e.int32();
                                        break;
                                    case 2:
                                        n.feeData = l.proto.FeeData.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.fees && n.fees.length || (n.fees = []), n.fees.push(l.proto.FeeData.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FeeData = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.nodedata = null, e.prototype.networkdata = null, e.prototype.servicedata = null, e.prototype.subType = 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.nodedata && Object.hasOwnProperty.call(e, "nodedata") && l.proto.FeeComponents.encode(e.nodedata, t.uint32(10).fork()).ldelim(), null != e.networkdata && Object.hasOwnProperty.call(e, "networkdata") && l.proto.FeeComponents.encode(e.networkdata, t.uint32(18).fork()).ldelim(), null != e.servicedata && Object.hasOwnProperty.call(e, "servicedata") && l.proto.FeeComponents.encode(e.servicedata, t.uint32(26).fork()).ldelim(), null != e.subType && Object.hasOwnProperty.call(e, "subType") && t.uint32(32).int32(e.subType), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FeeData; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.nodedata = l.proto.FeeComponents.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.networkdata = l.proto.FeeComponents.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.servicedata = l.proto.FeeComponents.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.subType = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FeeSchedule = function() {
                        function e(e) {
                            if (this.transactionFeeSchedule = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.transactionFeeSchedule = a.emptyArray, e.prototype.expiryTime = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.transactionFeeSchedule && e.transactionFeeSchedule.length)
                                for (var o = 0; o < e.transactionFeeSchedule.length; ++o) l.proto.TransactionFeeSchedule.encode(e.transactionFeeSchedule[o], t.uint32(10).fork()).ldelim();
                            return null != e.expiryTime && Object.hasOwnProperty.call(e, "expiryTime") && l.proto.TimestampSeconds.encode(e.expiryTime, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FeeSchedule; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.transactionFeeSchedule && n.transactionFeeSchedule.length || (n.transactionFeeSchedule = []), n.transactionFeeSchedule.push(l.proto.TransactionFeeSchedule.decode(e, e.uint32()));
                                        break;
                                    case 2:
                                        n.expiryTime = l.proto.TimestampSeconds.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CurrentAndNextFeeSchedule = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.currentFeeSchedule = null, e.prototype.nextFeeSchedule = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.currentFeeSchedule && Object.hasOwnProperty.call(e, "currentFeeSchedule") && l.proto.FeeSchedule.encode(e.currentFeeSchedule, t.uint32(10).fork()).ldelim(), null != e.nextFeeSchedule && Object.hasOwnProperty.call(e, "nextFeeSchedule") && l.proto.FeeSchedule.encode(e.nextFeeSchedule, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CurrentAndNextFeeSchedule; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.currentFeeSchedule = l.proto.FeeSchedule.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.nextFeeSchedule = l.proto.FeeSchedule.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ServiceEndpoint = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.ipAddressV4 = a.newBuffer([]), e.prototype.port = 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.ipAddressV4 && Object.hasOwnProperty.call(e, "ipAddressV4") && t.uint32(10).bytes(e.ipAddressV4), null != e.port && Object.hasOwnProperty.call(e, "port") && t.uint32(16).int32(e.port), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ServiceEndpoint; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.ipAddressV4 = e.bytes();
                                        break;
                                    case 2:
                                        n.port = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NodeAddress = function() {
                        function e(e) {
                            if (this.serviceEndpoint = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.ipAddress = a.newBuffer([]), e.prototype.portno = 0, e.prototype.memo = a.newBuffer([]), e.prototype.RSA_PubKey = "", e.prototype.nodeId = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.nodeAccountId = null, e.prototype.nodeCertHash = a.newBuffer([]), e.prototype.serviceEndpoint = a.emptyArray, e.prototype.description = "", e.prototype.stake = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.ipAddress && Object.hasOwnProperty.call(e, "ipAddress") && t.uint32(10).bytes(e.ipAddress), null != e.portno && Object.hasOwnProperty.call(e, "portno") && t.uint32(16).int32(e.portno), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(26).bytes(e.memo), null != e.RSA_PubKey && Object.hasOwnProperty.call(e, "RSA_PubKey") && t.uint32(34).string(e.RSA_PubKey), null != e.nodeId && Object.hasOwnProperty.call(e, "nodeId") && t.uint32(40).int64(e.nodeId), null != e.nodeAccountId && Object.hasOwnProperty.call(e, "nodeAccountId") && l.proto.AccountID.encode(e.nodeAccountId, t.uint32(50).fork()).ldelim(), null != e.nodeCertHash && Object.hasOwnProperty.call(e, "nodeCertHash") && t.uint32(58).bytes(e.nodeCertHash), null != e.serviceEndpoint && e.serviceEndpoint.length)
                                for (var o = 0; o < e.serviceEndpoint.length; ++o) l.proto.ServiceEndpoint.encode(e.serviceEndpoint[o], t.uint32(66).fork()).ldelim();
                            return null != e.description && Object.hasOwnProperty.call(e, "description") && t.uint32(74).string(e.description), null != e.stake && Object.hasOwnProperty.call(e, "stake") && t.uint32(80).int64(e.stake), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NodeAddress; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.ipAddress = e.bytes();
                                        break;
                                    case 2:
                                        n.portno = e.int32();
                                        break;
                                    case 3:
                                        n.memo = e.bytes();
                                        break;
                                    case 4:
                                        n.RSA_PubKey = e.string();
                                        break;
                                    case 5:
                                        n.nodeId = e.int64();
                                        break;
                                    case 6:
                                        n.nodeAccountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.nodeCertHash = e.bytes();
                                        break;
                                    case 8:
                                        n.serviceEndpoint && n.serviceEndpoint.length || (n.serviceEndpoint = []), n.serviceEndpoint.push(l.proto.ServiceEndpoint.decode(e, e.uint32()));
                                        break;
                                    case 9:
                                        n.description = e.string();
                                        break;
                                    case 10:
                                        n.stake = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NodeAddressBook = function() {
                        function e(e) {
                            if (this.nodeAddress = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.nodeAddress = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.nodeAddress && e.nodeAddress.length)
                                for (var o = 0; o < e.nodeAddress.length; ++o) l.proto.NodeAddress.encode(e.nodeAddress[o], t.uint32(10).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NodeAddressBook; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.nodeAddress && n.nodeAddress.length || (n.nodeAddress = []), n.nodeAddress.push(l.proto.NodeAddress.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SemanticVersion = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.major = 0, e.prototype.minor = 0, e.prototype.patch = 0, e.prototype.pre = "", e.prototype.build = "", e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.major && Object.hasOwnProperty.call(e, "major") && t.uint32(8).int32(e.major), null != e.minor && Object.hasOwnProperty.call(e, "minor") && t.uint32(16).int32(e.minor), null != e.patch && Object.hasOwnProperty.call(e, "patch") && t.uint32(24).int32(e.patch), null != e.pre && Object.hasOwnProperty.call(e, "pre") && t.uint32(34).string(e.pre), null != e.build && Object.hasOwnProperty.call(e, "build") && t.uint32(42).string(e.build), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SemanticVersion; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.major = e.int32();
                                        break;
                                    case 2:
                                        n.minor = e.int32();
                                        break;
                                    case 3:
                                        n.patch = e.int32();
                                        break;
                                    case 4:
                                        n.pre = e.string();
                                        break;
                                    case 5:
                                        n.build = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.Setting = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.name = "", e.prototype.value = "", e.prototype.data = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), null != e.data && Object.hasOwnProperty.call(e, "data") && t.uint32(26).bytes(e.data), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.Setting; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.name = e.string();
                                        break;
                                    case 2:
                                        n.value = e.string();
                                        break;
                                    case 3:
                                        n.data = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ServicesConfigurationList = function() {
                        function e(e) {
                            if (this.nameValue = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.nameValue = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.nameValue && e.nameValue.length)
                                for (var o = 0; o < e.nameValue.length; ++o) l.proto.Setting.encode(e.nameValue[o], t.uint32(10).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ServicesConfigurationList; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.nameValue && n.nameValue.length || (n.nameValue = []), n.nameValue.push(l.proto.Setting.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenRelationship = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenId = null, e.prototype.symbol = "", e.prototype.balance = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.kycStatus = 0, e.prototype.freezeStatus = 0, e.prototype.decimals = 0, e.prototype.automaticAssociation = !1, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(10).fork()).ldelim(), null != e.symbol && Object.hasOwnProperty.call(e, "symbol") && t.uint32(18).string(e.symbol), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(24).uint64(e.balance), null != e.kycStatus && Object.hasOwnProperty.call(e, "kycStatus") && t.uint32(32).int32(e.kycStatus), null != e.freezeStatus && Object.hasOwnProperty.call(e, "freezeStatus") && t.uint32(40).int32(e.freezeStatus), null != e.decimals && Object.hasOwnProperty.call(e, "decimals") && t.uint32(48).uint32(e.decimals), null != e.automaticAssociation && Object.hasOwnProperty.call(e, "automaticAssociation") && t.uint32(56).bool(e.automaticAssociation), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenRelationship; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.symbol = e.string();
                                        break;
                                    case 3:
                                        n.balance = e.uint64();
                                        break;
                                    case 4:
                                        n.kycStatus = e.int32();
                                        break;
                                    case 5:
                                        n.freezeStatus = e.int32();
                                        break;
                                    case 6:
                                        n.decimals = e.uint32();
                                        break;
                                    case 7:
                                        n.automaticAssociation = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenBalance = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenId = null, e.prototype.balance = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.decimals = 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(10).fork()).ldelim(), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(16).uint64(e.balance), null != e.decimals && Object.hasOwnProperty.call(e, "decimals") && t.uint32(24).uint32(e.decimals), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenBalance; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.balance = e.uint64();
                                        break;
                                    case 3:
                                        n.decimals = e.uint32();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenBalances = function() {
                        function e(e) {
                            if (this.tokenBalances = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenBalances = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.tokenBalances && e.tokenBalances.length)
                                for (var o = 0; o < e.tokenBalances.length; ++o) l.proto.TokenBalance.encode(e.tokenBalances[o], t.uint32(10).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenBalances; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenBalances && n.tokenBalances.length || (n.tokenBalances = []), n.tokenBalances.push(l.proto.TokenBalance.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenAssociation = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenId = null, e.prototype.accountId = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(10).fork()).ldelim(), null != e.accountId && Object.hasOwnProperty.call(e, "accountId") && l.proto.AccountID.encode(e.accountId, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenAssociation; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.StakingInfo = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.declineReward = !1, e.prototype.stakePeriodStart = null, e.prototype.pendingReward = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.stakedToMe = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.stakedAccountId = null, e.prototype.stakedNodeId = null, Object.defineProperty(e.prototype, "stakedId", {
                            get: a.oneOfGetter(t = ["stakedAccountId", "stakedNodeId"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.declineReward && Object.hasOwnProperty.call(e, "declineReward") && t.uint32(8).bool(e.declineReward), null != e.stakePeriodStart && Object.hasOwnProperty.call(e, "stakePeriodStart") && l.proto.Timestamp.encode(e.stakePeriodStart, t.uint32(18).fork()).ldelim(), null != e.pendingReward && Object.hasOwnProperty.call(e, "pendingReward") && t.uint32(24).int64(e.pendingReward), null != e.stakedToMe && Object.hasOwnProperty.call(e, "stakedToMe") && t.uint32(32).int64(e.stakedToMe), null != e.stakedAccountId && Object.hasOwnProperty.call(e, "stakedAccountId") && l.proto.AccountID.encode(e.stakedAccountId, t.uint32(42).fork()).ldelim(), null != e.stakedNodeId && Object.hasOwnProperty.call(e, "stakedNodeId") && t.uint32(48).int64(e.stakedNodeId), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.StakingInfo; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.declineReward = e.bool();
                                        break;
                                    case 2:
                                        n.stakePeriodStart = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.pendingReward = e.int64();
                                        break;
                                    case 4:
                                        n.stakedToMe = e.int64();
                                        break;
                                    case 5:
                                        n.stakedAccountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.stakedNodeId = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.Timestamp = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.seconds = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.nanos = 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.seconds && Object.hasOwnProperty.call(e, "seconds") && t.uint32(8).int64(e.seconds), null != e.nanos && Object.hasOwnProperty.call(e, "nanos") && t.uint32(16).int32(e.nanos), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.Timestamp; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.seconds = e.int64();
                                        break;
                                    case 2:
                                        n.nanos = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TimestampSeconds = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.seconds = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.seconds && Object.hasOwnProperty.call(e, "seconds") && t.uint32(8).int64(e.seconds), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TimestampSeconds; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.seconds = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ConsensusCreateTopicTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.memo = "", e.prototype.adminKey = null, e.prototype.submitKey = null, e.prototype.autoRenewPeriod = null, e.prototype.autoRenewAccount = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(10).string(e.memo), null != e.adminKey && Object.hasOwnProperty.call(e, "adminKey") && l.proto.Key.encode(e.adminKey, t.uint32(18).fork()).ldelim(), null != e.submitKey && Object.hasOwnProperty.call(e, "submitKey") && l.proto.Key.encode(e.submitKey, t.uint32(26).fork()).ldelim(), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(50).fork()).ldelim(), null != e.autoRenewAccount && Object.hasOwnProperty.call(e, "autoRenewAccount") && l.proto.AccountID.encode(e.autoRenewAccount, t.uint32(58).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ConsensusCreateTopicTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.memo = e.string();
                                        break;
                                    case 2:
                                        n.adminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.submitKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.autoRenewAccount = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.Duration = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.seconds = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.seconds && Object.hasOwnProperty.call(e, "seconds") && t.uint32(8).int64(e.seconds), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.Duration; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.seconds = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ConsensusDeleteTopicTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.topicID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.topicID && Object.hasOwnProperty.call(e, "topicID") && l.proto.TopicID.encode(e.topicID, t.uint32(10).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ConsensusDeleteTopicTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.topicID = l.proto.TopicID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ConsensusGetTopicInfoQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.topicID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.topicID && Object.hasOwnProperty.call(e, "topicID") && l.proto.TopicID.encode(e.topicID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ConsensusGetTopicInfoQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.topicID = l.proto.TopicID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ConsensusGetTopicInfoResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.topicID = null, e.prototype.topicInfo = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.topicID && Object.hasOwnProperty.call(e, "topicID") && l.proto.TopicID.encode(e.topicID, t.uint32(18).fork()).ldelim(), null != e.topicInfo && Object.hasOwnProperty.call(e, "topicInfo") && l.proto.ConsensusTopicInfo.encode(e.topicInfo, t.uint32(42).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ConsensusGetTopicInfoResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.topicID = l.proto.TopicID.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.topicInfo = l.proto.ConsensusTopicInfo.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ResponseType = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "ANSWER_ONLY"] = 0, t[e[1] = "ANSWER_STATE_PROOF"] = 1, t[e[2] = "COST_ANSWER"] = 2, t[e[3] = "COST_ANSWER_STATE_PROOF"] = 3, t
                    }(), e.QueryHeader = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.payment = null, e.prototype.responseType = 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.payment && Object.hasOwnProperty.call(e, "payment") && l.proto.Transaction.encode(e.payment, t.uint32(10).fork()).ldelim(), null != e.responseType && Object.hasOwnProperty.call(e, "responseType") && t.uint32(16).int32(e.responseType), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.QueryHeader; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.payment = l.proto.Transaction.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.responseType = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.Transaction = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.body = null, e.prototype.sigs = null, e.prototype.sigMap = null, e.prototype.bodyBytes = a.newBuffer([]), e.prototype.signedTransactionBytes = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.body && Object.hasOwnProperty.call(e, "body") && l.proto.TransactionBody.encode(e.body, t.uint32(10).fork()).ldelim(), null != e.sigs && Object.hasOwnProperty.call(e, "sigs") && l.proto.SignatureList.encode(e.sigs, t.uint32(18).fork()).ldelim(), null != e.sigMap && Object.hasOwnProperty.call(e, "sigMap") && l.proto.SignatureMap.encode(e.sigMap, t.uint32(26).fork()).ldelim(), null != e.bodyBytes && Object.hasOwnProperty.call(e, "bodyBytes") && t.uint32(34).bytes(e.bodyBytes), null != e.signedTransactionBytes && Object.hasOwnProperty.call(e, "signedTransactionBytes") && t.uint32(42).bytes(e.signedTransactionBytes), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.Transaction; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.body = l.proto.TransactionBody.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.sigs = l.proto.SignatureList.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.sigMap = l.proto.SignatureMap.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.bodyBytes = e.bytes();
                                        break;
                                    case 5:
                                        n.signedTransactionBytes = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.transactionID = null, e.prototype.nodeAccountID = null, e.prototype.transactionFee = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.transactionValidDuration = null, e.prototype.generateRecord = !1, e.prototype.memo = "", e.prototype.contractCall = null, e.prototype.contractCreateInstance = null, e.prototype.contractUpdateInstance = null, e.prototype.contractDeleteInstance = null, e.prototype.ethereumTransaction = null, e.prototype.cryptoAddLiveHash = null, e.prototype.cryptoApproveAllowance = null, e.prototype.cryptoDeleteAllowance = null, e.prototype.cryptoCreateAccount = null, e.prototype.cryptoDelete = null, e.prototype.cryptoDeleteLiveHash = null, e.prototype.cryptoTransfer = null, e.prototype.cryptoUpdateAccount = null, e.prototype.fileAppend = null, e.prototype.fileCreate = null, e.prototype.fileDelete = null, e.prototype.fileUpdate = null, e.prototype.systemDelete = null, e.prototype.systemUndelete = null, e.prototype.freeze = null, e.prototype.consensusCreateTopic = null, e.prototype.consensusUpdateTopic = null, e.prototype.consensusDeleteTopic = null, e.prototype.consensusSubmitMessage = null, e.prototype.uncheckedSubmit = null, e.prototype.tokenCreation = null, e.prototype.tokenFreeze = null, e.prototype.tokenUnfreeze = null, e.prototype.tokenGrantKyc = null, e.prototype.tokenRevokeKyc = null, e.prototype.tokenDeletion = null, e.prototype.tokenUpdate = null, e.prototype.tokenMint = null, e.prototype.tokenBurn = null, e.prototype.tokenWipe = null, e.prototype.tokenAssociate = null, e.prototype.tokenDissociate = null, e.prototype.tokenFeeScheduleUpdate = null, e.prototype.tokenPause = null, e.prototype.tokenUnpause = null, e.prototype.scheduleCreate = null, e.prototype.scheduleDelete = null, e.prototype.scheduleSign = null, e.prototype.nodeStakeUpdate = null, e.prototype.utilPrng = null, Object.defineProperty(e.prototype, "data", {
                            get: a.oneOfGetter(t = ["contractCall", "contractCreateInstance", "contractUpdateInstance", "contractDeleteInstance", "ethereumTransaction", "cryptoAddLiveHash", "cryptoApproveAllowance", "cryptoDeleteAllowance", "cryptoCreateAccount", "cryptoDelete", "cryptoDeleteLiveHash", "cryptoTransfer", "cryptoUpdateAccount", "fileAppend", "fileCreate", "fileDelete", "fileUpdate", "systemDelete", "systemUndelete", "freeze", "consensusCreateTopic", "consensusUpdateTopic", "consensusDeleteTopic", "consensusSubmitMessage", "uncheckedSubmit", "tokenCreation", "tokenFreeze", "tokenUnfreeze", "tokenGrantKyc", "tokenRevokeKyc", "tokenDeletion", "tokenUpdate", "tokenMint", "tokenBurn", "tokenWipe", "tokenAssociate", "tokenDissociate", "tokenFeeScheduleUpdate", "tokenPause", "tokenUnpause", "scheduleCreate", "scheduleDelete", "scheduleSign", "nodeStakeUpdate", "utilPrng"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.transactionID && Object.hasOwnProperty.call(e, "transactionID") && l.proto.TransactionID.encode(e.transactionID, t.uint32(10).fork()).ldelim(), null != e.nodeAccountID && Object.hasOwnProperty.call(e, "nodeAccountID") && l.proto.AccountID.encode(e.nodeAccountID, t.uint32(18).fork()).ldelim(), null != e.transactionFee && Object.hasOwnProperty.call(e, "transactionFee") && t.uint32(24).uint64(e.transactionFee), null != e.transactionValidDuration && Object.hasOwnProperty.call(e, "transactionValidDuration") && l.proto.Duration.encode(e.transactionValidDuration, t.uint32(34).fork()).ldelim(), null != e.generateRecord && Object.hasOwnProperty.call(e, "generateRecord") && t.uint32(40).bool(e.generateRecord), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(50).string(e.memo), null != e.contractCall && Object.hasOwnProperty.call(e, "contractCall") && l.proto.ContractCallTransactionBody.encode(e.contractCall, t.uint32(58).fork()).ldelim(), null != e.contractCreateInstance && Object.hasOwnProperty.call(e, "contractCreateInstance") && l.proto.ContractCreateTransactionBody.encode(e.contractCreateInstance, t.uint32(66).fork()).ldelim(), null != e.contractUpdateInstance && Object.hasOwnProperty.call(e, "contractUpdateInstance") && l.proto.ContractUpdateTransactionBody.encode(e.contractUpdateInstance, t.uint32(74).fork()).ldelim(), null != e.cryptoAddLiveHash && Object.hasOwnProperty.call(e, "cryptoAddLiveHash") && l.proto.CryptoAddLiveHashTransactionBody.encode(e.cryptoAddLiveHash, t.uint32(82).fork()).ldelim(), null != e.cryptoCreateAccount && Object.hasOwnProperty.call(e, "cryptoCreateAccount") && l.proto.CryptoCreateTransactionBody.encode(e.cryptoCreateAccount, t.uint32(90).fork()).ldelim(), null != e.cryptoDelete && Object.hasOwnProperty.call(e, "cryptoDelete") && l.proto.CryptoDeleteTransactionBody.encode(e.cryptoDelete, t.uint32(98).fork()).ldelim(), null != e.cryptoDeleteLiveHash && Object.hasOwnProperty.call(e, "cryptoDeleteLiveHash") && l.proto.CryptoDeleteLiveHashTransactionBody.encode(e.cryptoDeleteLiveHash, t.uint32(106).fork()).ldelim(), null != e.cryptoTransfer && Object.hasOwnProperty.call(e, "cryptoTransfer") && l.proto.CryptoTransferTransactionBody.encode(e.cryptoTransfer, t.uint32(114).fork()).ldelim(), null != e.cryptoUpdateAccount && Object.hasOwnProperty.call(e, "cryptoUpdateAccount") && l.proto.CryptoUpdateTransactionBody.encode(e.cryptoUpdateAccount, t.uint32(122).fork()).ldelim(), null != e.fileAppend && Object.hasOwnProperty.call(e, "fileAppend") && l.proto.FileAppendTransactionBody.encode(e.fileAppend, t.uint32(130).fork()).ldelim(), null != e.fileCreate && Object.hasOwnProperty.call(e, "fileCreate") && l.proto.FileCreateTransactionBody.encode(e.fileCreate, t.uint32(138).fork()).ldelim(), null != e.fileDelete && Object.hasOwnProperty.call(e, "fileDelete") && l.proto.FileDeleteTransactionBody.encode(e.fileDelete, t.uint32(146).fork()).ldelim(), null != e.fileUpdate && Object.hasOwnProperty.call(e, "fileUpdate") && l.proto.FileUpdateTransactionBody.encode(e.fileUpdate, t.uint32(154).fork()).ldelim(), null != e.systemDelete && Object.hasOwnProperty.call(e, "systemDelete") && l.proto.SystemDeleteTransactionBody.encode(e.systemDelete, t.uint32(162).fork()).ldelim(), null != e.systemUndelete && Object.hasOwnProperty.call(e, "systemUndelete") && l.proto.SystemUndeleteTransactionBody.encode(e.systemUndelete, t.uint32(170).fork()).ldelim(), null != e.contractDeleteInstance && Object.hasOwnProperty.call(e, "contractDeleteInstance") && l.proto.ContractDeleteTransactionBody.encode(e.contractDeleteInstance, t.uint32(178).fork()).ldelim(), null != e.freeze && Object.hasOwnProperty.call(e, "freeze") && l.proto.FreezeTransactionBody.encode(e.freeze, t.uint32(186).fork()).ldelim(), null != e.consensusCreateTopic && Object.hasOwnProperty.call(e, "consensusCreateTopic") && l.proto.ConsensusCreateTopicTransactionBody.encode(e.consensusCreateTopic, t.uint32(194).fork()).ldelim(), null != e.consensusUpdateTopic && Object.hasOwnProperty.call(e, "consensusUpdateTopic") && l.proto.ConsensusUpdateTopicTransactionBody.encode(e.consensusUpdateTopic, t.uint32(202).fork()).ldelim(), null != e.consensusDeleteTopic && Object.hasOwnProperty.call(e, "consensusDeleteTopic") && l.proto.ConsensusDeleteTopicTransactionBody.encode(e.consensusDeleteTopic, t.uint32(210).fork()).ldelim(), null != e.consensusSubmitMessage && Object.hasOwnProperty.call(e, "consensusSubmitMessage") && l.proto.ConsensusSubmitMessageTransactionBody.encode(e.consensusSubmitMessage, t.uint32(218).fork()).ldelim(), null != e.uncheckedSubmit && Object.hasOwnProperty.call(e, "uncheckedSubmit") && l.proto.UncheckedSubmitBody.encode(e.uncheckedSubmit, t.uint32(226).fork()).ldelim(), null != e.tokenCreation && Object.hasOwnProperty.call(e, "tokenCreation") && l.proto.TokenCreateTransactionBody.encode(e.tokenCreation, t.uint32(234).fork()).ldelim(), null != e.tokenFreeze && Object.hasOwnProperty.call(e, "tokenFreeze") && l.proto.TokenFreezeAccountTransactionBody.encode(e.tokenFreeze, t.uint32(250).fork()).ldelim(), null != e.tokenUnfreeze && Object.hasOwnProperty.call(e, "tokenUnfreeze") && l.proto.TokenUnfreezeAccountTransactionBody.encode(e.tokenUnfreeze, t.uint32(258).fork()).ldelim(), null != e.tokenGrantKyc && Object.hasOwnProperty.call(e, "tokenGrantKyc") && l.proto.TokenGrantKycTransactionBody.encode(e.tokenGrantKyc, t.uint32(266).fork()).ldelim(), null != e.tokenRevokeKyc && Object.hasOwnProperty.call(e, "tokenRevokeKyc") && l.proto.TokenRevokeKycTransactionBody.encode(e.tokenRevokeKyc, t.uint32(274).fork()).ldelim(), null != e.tokenDeletion && Object.hasOwnProperty.call(e, "tokenDeletion") && l.proto.TokenDeleteTransactionBody.encode(e.tokenDeletion, t.uint32(282).fork()).ldelim(), null != e.tokenUpdate && Object.hasOwnProperty.call(e, "tokenUpdate") && l.proto.TokenUpdateTransactionBody.encode(e.tokenUpdate, t.uint32(290).fork()).ldelim(), null != e.tokenMint && Object.hasOwnProperty.call(e, "tokenMint") && l.proto.TokenMintTransactionBody.encode(e.tokenMint, t.uint32(298).fork()).ldelim(), null != e.tokenBurn && Object.hasOwnProperty.call(e, "tokenBurn") && l.proto.TokenBurnTransactionBody.encode(e.tokenBurn, t.uint32(306).fork()).ldelim(), null != e.tokenWipe && Object.hasOwnProperty.call(e, "tokenWipe") && l.proto.TokenWipeAccountTransactionBody.encode(e.tokenWipe, t.uint32(314).fork()).ldelim(), null != e.tokenAssociate && Object.hasOwnProperty.call(e, "tokenAssociate") && l.proto.TokenAssociateTransactionBody.encode(e.tokenAssociate, t.uint32(322).fork()).ldelim(), null != e.tokenDissociate && Object.hasOwnProperty.call(e, "tokenDissociate") && l.proto.TokenDissociateTransactionBody.encode(e.tokenDissociate, t.uint32(330).fork()).ldelim(), null != e.scheduleCreate && Object.hasOwnProperty.call(e, "scheduleCreate") && l.proto.ScheduleCreateTransactionBody.encode(e.scheduleCreate, t.uint32(338).fork()).ldelim(), null != e.scheduleDelete && Object.hasOwnProperty.call(e, "scheduleDelete") && l.proto.ScheduleDeleteTransactionBody.encode(e.scheduleDelete, t.uint32(346).fork()).ldelim(), null != e.scheduleSign && Object.hasOwnProperty.call(e, "scheduleSign") && l.proto.ScheduleSignTransactionBody.encode(e.scheduleSign, t.uint32(354).fork()).ldelim(), null != e.tokenFeeScheduleUpdate && Object.hasOwnProperty.call(e, "tokenFeeScheduleUpdate") && l.proto.TokenFeeScheduleUpdateTransactionBody.encode(e.tokenFeeScheduleUpdate, t.uint32(362).fork()).ldelim(), null != e.tokenPause && Object.hasOwnProperty.call(e, "tokenPause") && l.proto.TokenPauseTransactionBody.encode(e.tokenPause, t.uint32(370).fork()).ldelim(), null != e.tokenUnpause && Object.hasOwnProperty.call(e, "tokenUnpause") && l.proto.TokenUnpauseTransactionBody.encode(e.tokenUnpause, t.uint32(378).fork()).ldelim(), null != e.cryptoApproveAllowance && Object.hasOwnProperty.call(e, "cryptoApproveAllowance") && l.proto.CryptoApproveAllowanceTransactionBody.encode(e.cryptoApproveAllowance, t.uint32(386).fork()).ldelim(), null != e.cryptoDeleteAllowance && Object.hasOwnProperty.call(e, "cryptoDeleteAllowance") && l.proto.CryptoDeleteAllowanceTransactionBody.encode(e.cryptoDeleteAllowance, t.uint32(394).fork()).ldelim(), null != e.ethereumTransaction && Object.hasOwnProperty.call(e, "ethereumTransaction") && l.proto.EthereumTransactionBody.encode(e.ethereumTransaction, t.uint32(402).fork()).ldelim(), null != e.nodeStakeUpdate && Object.hasOwnProperty.call(e, "nodeStakeUpdate") && l.proto.NodeStakeUpdateTransactionBody.encode(e.nodeStakeUpdate, t.uint32(410).fork()).ldelim(), null != e.utilPrng && Object.hasOwnProperty.call(e, "utilPrng") && l.proto.UtilPrngTransactionBody.encode(e.utilPrng, t.uint32(418).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.transactionID = l.proto.TransactionID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.nodeAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.transactionFee = e.uint64();
                                        break;
                                    case 4:
                                        n.transactionValidDuration = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.generateRecord = e.bool();
                                        break;
                                    case 6:
                                        n.memo = e.string();
                                        break;
                                    case 7:
                                        n.contractCall = l.proto.ContractCallTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.contractCreateInstance = l.proto.ContractCreateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.contractUpdateInstance = l.proto.ContractUpdateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 22:
                                        n.contractDeleteInstance = l.proto.ContractDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 50:
                                        n.ethereumTransaction = l.proto.EthereumTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.cryptoAddLiveHash = l.proto.CryptoAddLiveHashTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 48:
                                        n.cryptoApproveAllowance = l.proto.CryptoApproveAllowanceTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 49:
                                        n.cryptoDeleteAllowance = l.proto.CryptoDeleteAllowanceTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.cryptoCreateAccount = l.proto.CryptoCreateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        n.cryptoDelete = l.proto.CryptoDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        n.cryptoDeleteLiveHash = l.proto.CryptoDeleteLiveHashTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 14:
                                        n.cryptoTransfer = l.proto.CryptoTransferTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 15:
                                        n.cryptoUpdateAccount = l.proto.CryptoUpdateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 16:
                                        n.fileAppend = l.proto.FileAppendTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 17:
                                        n.fileCreate = l.proto.FileCreateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 18:
                                        n.fileDelete = l.proto.FileDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 19:
                                        n.fileUpdate = l.proto.FileUpdateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 20:
                                        n.systemDelete = l.proto.SystemDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 21:
                                        n.systemUndelete = l.proto.SystemUndeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 23:
                                        n.freeze = l.proto.FreezeTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 24:
                                        n.consensusCreateTopic = l.proto.ConsensusCreateTopicTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 25:
                                        n.consensusUpdateTopic = l.proto.ConsensusUpdateTopicTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 26:
                                        n.consensusDeleteTopic = l.proto.ConsensusDeleteTopicTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 27:
                                        n.consensusSubmitMessage = l.proto.ConsensusSubmitMessageTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 28:
                                        n.uncheckedSubmit = l.proto.UncheckedSubmitBody.decode(e, e.uint32());
                                        break;
                                    case 29:
                                        n.tokenCreation = l.proto.TokenCreateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 31:
                                        n.tokenFreeze = l.proto.TokenFreezeAccountTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 32:
                                        n.tokenUnfreeze = l.proto.TokenUnfreezeAccountTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 33:
                                        n.tokenGrantKyc = l.proto.TokenGrantKycTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 34:
                                        n.tokenRevokeKyc = l.proto.TokenRevokeKycTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 35:
                                        n.tokenDeletion = l.proto.TokenDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 36:
                                        n.tokenUpdate = l.proto.TokenUpdateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 37:
                                        n.tokenMint = l.proto.TokenMintTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 38:
                                        n.tokenBurn = l.proto.TokenBurnTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 39:
                                        n.tokenWipe = l.proto.TokenWipeAccountTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 40:
                                        n.tokenAssociate = l.proto.TokenAssociateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 41:
                                        n.tokenDissociate = l.proto.TokenDissociateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 45:
                                        n.tokenFeeScheduleUpdate = l.proto.TokenFeeScheduleUpdateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 46:
                                        n.tokenPause = l.proto.TokenPauseTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 47:
                                        n.tokenUnpause = l.proto.TokenUnpauseTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 42:
                                        n.scheduleCreate = l.proto.ScheduleCreateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 43:
                                        n.scheduleDelete = l.proto.ScheduleDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 44:
                                        n.scheduleSign = l.proto.ScheduleSignTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 51:
                                        n.nodeStakeUpdate = l.proto.NodeStakeUpdateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 52:
                                        n.utilPrng = l.proto.UtilPrngTransactionBody.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SystemDeleteTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.fileID = null, e.prototype.contractID = null, e.prototype.expirationTime = null, Object.defineProperty(e.prototype, "id", {
                            get: a.oneOfGetter(t = ["fileID", "contractID"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(10).fork()).ldelim(), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(18).fork()).ldelim(), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.TimestampSeconds.encode(e.expirationTime, t.uint32(26).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SystemDeleteTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.expirationTime = l.proto.TimestampSeconds.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SystemUndeleteTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.fileID = null, e.prototype.contractID = null, Object.defineProperty(e.prototype, "id", {
                            get: a.oneOfGetter(t = ["fileID", "contractID"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(10).fork()).ldelim(), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SystemUndeleteTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FreezeTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.startHour = 0, e.prototype.startMin = 0, e.prototype.endHour = 0, e.prototype.endMin = 0, e.prototype.updateFile = null, e.prototype.fileHash = a.newBuffer([]), e.prototype.startTime = null, e.prototype.freezeType = 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.startHour && Object.hasOwnProperty.call(e, "startHour") && t.uint32(8).int32(e.startHour), null != e.startMin && Object.hasOwnProperty.call(e, "startMin") && t.uint32(16).int32(e.startMin), null != e.endHour && Object.hasOwnProperty.call(e, "endHour") && t.uint32(24).int32(e.endHour), null != e.endMin && Object.hasOwnProperty.call(e, "endMin") && t.uint32(32).int32(e.endMin), null != e.updateFile && Object.hasOwnProperty.call(e, "updateFile") && l.proto.FileID.encode(e.updateFile, t.uint32(42).fork()).ldelim(), null != e.fileHash && Object.hasOwnProperty.call(e, "fileHash") && t.uint32(50).bytes(e.fileHash), null != e.startTime && Object.hasOwnProperty.call(e, "startTime") && l.proto.Timestamp.encode(e.startTime, t.uint32(58).fork()).ldelim(), null != e.freezeType && Object.hasOwnProperty.call(e, "freezeType") && t.uint32(64).int32(e.freezeType), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FreezeTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.startHour = e.int32();
                                        break;
                                    case 2:
                                        n.startMin = e.int32();
                                        break;
                                    case 3:
                                        n.endHour = e.int32();
                                        break;
                                    case 4:
                                        n.endMin = e.int32();
                                        break;
                                    case 5:
                                        n.updateFile = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.fileHash = e.bytes();
                                        break;
                                    case 7:
                                        n.startTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.freezeType = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FreezeType = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "UNKNOWN_FREEZE_TYPE"] = 0, t[e[1] = "FREEZE_ONLY"] = 1, t[e[2] = "PREPARE_UPGRADE"] = 2, t[e[3] = "FREEZE_UPGRADE"] = 3, t[e[4] = "FREEZE_ABORT"] = 4, t[e[5] = "TELEMETRY_UPGRADE"] = 5, t
                    }(), e.ContractCallTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.contractID = null, e.prototype.gas = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.functionParameters = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(10).fork()).ldelim(), null != e.gas && Object.hasOwnProperty.call(e, "gas") && t.uint32(16).int64(e.gas), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(24).int64(e.amount), null != e.functionParameters && Object.hasOwnProperty.call(e, "functionParameters") && t.uint32(34).bytes(e.functionParameters), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractCallTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.gas = e.int64();
                                        break;
                                    case 3:
                                        n.amount = e.int64();
                                        break;
                                    case 4:
                                        n.functionParameters = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractCreateTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.fileID = null, e.prototype.initcode = null, e.prototype.adminKey = null, e.prototype.gas = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.initialBalance = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.proxyAccountID = null, e.prototype.autoRenewPeriod = null, e.prototype.constructorParameters = a.newBuffer([]), e.prototype.shardID = null, e.prototype.realmID = null, e.prototype.newRealmAdminKey = null, e.prototype.memo = "", e.prototype.maxAutomaticTokenAssociations = 0, e.prototype.autoRenewAccountId = null, e.prototype.stakedAccountId = null, e.prototype.stakedNodeId = null, e.prototype.declineReward = !1, Object.defineProperty(e.prototype, "initcodeSource", {
                            get: a.oneOfGetter(t = ["fileID", "initcode"]),
                            set: a.oneOfSetter(t)
                        }), Object.defineProperty(e.prototype, "stakedId", {
                            get: a.oneOfGetter(t = ["stakedAccountId", "stakedNodeId"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(10).fork()).ldelim(), null != e.adminKey && Object.hasOwnProperty.call(e, "adminKey") && l.proto.Key.encode(e.adminKey, t.uint32(26).fork()).ldelim(), null != e.gas && Object.hasOwnProperty.call(e, "gas") && t.uint32(32).int64(e.gas), null != e.initialBalance && Object.hasOwnProperty.call(e, "initialBalance") && t.uint32(40).int64(e.initialBalance), null != e.proxyAccountID && Object.hasOwnProperty.call(e, "proxyAccountID") && l.proto.AccountID.encode(e.proxyAccountID, t.uint32(50).fork()).ldelim(), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(66).fork()).ldelim(), null != e.constructorParameters && Object.hasOwnProperty.call(e, "constructorParameters") && t.uint32(74).bytes(e.constructorParameters), null != e.shardID && Object.hasOwnProperty.call(e, "shardID") && l.proto.ShardID.encode(e.shardID, t.uint32(82).fork()).ldelim(), null != e.realmID && Object.hasOwnProperty.call(e, "realmID") && l.proto.RealmID.encode(e.realmID, t.uint32(90).fork()).ldelim(), null != e.newRealmAdminKey && Object.hasOwnProperty.call(e, "newRealmAdminKey") && l.proto.Key.encode(e.newRealmAdminKey, t.uint32(98).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(106).string(e.memo), null != e.maxAutomaticTokenAssociations && Object.hasOwnProperty.call(e, "maxAutomaticTokenAssociations") && t.uint32(112).int32(e.maxAutomaticTokenAssociations), null != e.autoRenewAccountId && Object.hasOwnProperty.call(e, "autoRenewAccountId") && l.proto.AccountID.encode(e.autoRenewAccountId, t.uint32(122).fork()).ldelim(), null != e.initcode && Object.hasOwnProperty.call(e, "initcode") && t.uint32(130).bytes(e.initcode), null != e.stakedAccountId && Object.hasOwnProperty.call(e, "stakedAccountId") && l.proto.AccountID.encode(e.stakedAccountId, t.uint32(138).fork()).ldelim(), null != e.stakedNodeId && Object.hasOwnProperty.call(e, "stakedNodeId") && t.uint32(144).int64(e.stakedNodeId), null != e.declineReward && Object.hasOwnProperty.call(e, "declineReward") && t.uint32(152).bool(e.declineReward), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractCreateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    case 16:
                                        n.initcode = e.bytes();
                                        break;
                                    case 3:
                                        n.adminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.gas = e.int64();
                                        break;
                                    case 5:
                                        n.initialBalance = e.int64();
                                        break;
                                    case 6:
                                        n.proxyAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.constructorParameters = e.bytes();
                                        break;
                                    case 10:
                                        n.shardID = l.proto.ShardID.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.realmID = l.proto.RealmID.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        n.newRealmAdminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        n.memo = e.string();
                                        break;
                                    case 14:
                                        n.maxAutomaticTokenAssociations = e.int32();
                                        break;
                                    case 15:
                                        n.autoRenewAccountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 17:
                                        n.stakedAccountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 18:
                                        n.stakedNodeId = e.int64();
                                        break;
                                    case 19:
                                        n.declineReward = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractUpdateTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.contractID = null, e.prototype.expirationTime = null, e.prototype.adminKey = null, e.prototype.proxyAccountID = null, e.prototype.autoRenewPeriod = null, e.prototype.fileID = null, e.prototype.memo = null, e.prototype.memoWrapper = null, e.prototype.maxAutomaticTokenAssociations = null, e.prototype.autoRenewAccountId = null, e.prototype.stakedAccountId = null, e.prototype.stakedNodeId = null, e.prototype.declineReward = null, Object.defineProperty(e.prototype, "memoField", {
                            get: a.oneOfGetter(t = ["memo", "memoWrapper"]),
                            set: a.oneOfSetter(t)
                        }), Object.defineProperty(e.prototype, "stakedId", {
                            get: a.oneOfGetter(t = ["stakedAccountId", "stakedNodeId"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(10).fork()).ldelim(), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(18).fork()).ldelim(), null != e.adminKey && Object.hasOwnProperty.call(e, "adminKey") && l.proto.Key.encode(e.adminKey, t.uint32(26).fork()).ldelim(), null != e.proxyAccountID && Object.hasOwnProperty.call(e, "proxyAccountID") && l.proto.AccountID.encode(e.proxyAccountID, t.uint32(50).fork()).ldelim(), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(58).fork()).ldelim(), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(66).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(74).string(e.memo), null != e.memoWrapper && Object.hasOwnProperty.call(e, "memoWrapper") && l.google.protobuf.StringValue.encode(e.memoWrapper, t.uint32(82).fork()).ldelim(), null != e.maxAutomaticTokenAssociations && Object.hasOwnProperty.call(e, "maxAutomaticTokenAssociations") && l.google.protobuf.Int32Value.encode(e.maxAutomaticTokenAssociations, t.uint32(90).fork()).ldelim(), null != e.autoRenewAccountId && Object.hasOwnProperty.call(e, "autoRenewAccountId") && l.proto.AccountID.encode(e.autoRenewAccountId, t.uint32(98).fork()).ldelim(), null != e.stakedAccountId && Object.hasOwnProperty.call(e, "stakedAccountId") && l.proto.AccountID.encode(e.stakedAccountId, t.uint32(106).fork()).ldelim(), null != e.stakedNodeId && Object.hasOwnProperty.call(e, "stakedNodeId") && t.uint32(112).int64(e.stakedNodeId), null != e.declineReward && Object.hasOwnProperty.call(e, "declineReward") && l.google.protobuf.BoolValue.encode(e.declineReward, t.uint32(122).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractUpdateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.adminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.proxyAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.memo = e.string();
                                        break;
                                    case 10:
                                        n.memoWrapper = l.google.protobuf.StringValue.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.maxAutomaticTokenAssociations = l.google.protobuf.Int32Value.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        n.autoRenewAccountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        n.stakedAccountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 14:
                                        n.stakedNodeId = e.int64();
                                        break;
                                    case 15:
                                        n.declineReward = l.google.protobuf.BoolValue.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.LiveHash = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.accountId = null, e.prototype.hash = a.newBuffer([]), e.prototype.keys = null, e.prototype.duration = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.accountId && Object.hasOwnProperty.call(e, "accountId") && l.proto.AccountID.encode(e.accountId, t.uint32(10).fork()).ldelim(), null != e.hash && Object.hasOwnProperty.call(e, "hash") && t.uint32(18).bytes(e.hash), null != e.keys && Object.hasOwnProperty.call(e, "keys") && l.proto.KeyList.encode(e.keys, t.uint32(26).fork()).ldelim(), null != e.duration && Object.hasOwnProperty.call(e, "duration") && l.proto.Duration.encode(e.duration, t.uint32(42).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.LiveHash; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.accountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.hash = e.bytes();
                                        break;
                                    case 3:
                                        n.keys = l.proto.KeyList.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.duration = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoAddLiveHashTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.liveHash = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.liveHash && Object.hasOwnProperty.call(e, "liveHash") && l.proto.LiveHash.encode(e.liveHash, t.uint32(26).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoAddLiveHashTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 3:
                                        n.liveHash = l.proto.LiveHash.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoCreateTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.key = null, e.prototype.initialBalance = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.proxyAccountID = null, e.prototype.sendRecordThreshold = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.receiveRecordThreshold = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.receiverSigRequired = !1, e.prototype.autoRenewPeriod = null, e.prototype.shardID = null, e.prototype.realmID = null, e.prototype.newRealmAdminKey = null, e.prototype.memo = "", e.prototype.maxAutomaticTokenAssociations = 0, e.prototype.stakedAccountId = null, e.prototype.stakedNodeId = null, e.prototype.declineReward = !1, e.prototype.alias = a.newBuffer([]), Object.defineProperty(e.prototype, "stakedId", {
                            get: a.oneOfGetter(t = ["stakedAccountId", "stakedNodeId"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && l.proto.Key.encode(e.key, t.uint32(10).fork()).ldelim(), null != e.initialBalance && Object.hasOwnProperty.call(e, "initialBalance") && t.uint32(16).uint64(e.initialBalance), null != e.proxyAccountID && Object.hasOwnProperty.call(e, "proxyAccountID") && l.proto.AccountID.encode(e.proxyAccountID, t.uint32(26).fork()).ldelim(), null != e.sendRecordThreshold && Object.hasOwnProperty.call(e, "sendRecordThreshold") && t.uint32(48).uint64(e.sendRecordThreshold), null != e.receiveRecordThreshold && Object.hasOwnProperty.call(e, "receiveRecordThreshold") && t.uint32(56).uint64(e.receiveRecordThreshold), null != e.receiverSigRequired && Object.hasOwnProperty.call(e, "receiverSigRequired") && t.uint32(64).bool(e.receiverSigRequired), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(74).fork()).ldelim(), null != e.shardID && Object.hasOwnProperty.call(e, "shardID") && l.proto.ShardID.encode(e.shardID, t.uint32(82).fork()).ldelim(), null != e.realmID && Object.hasOwnProperty.call(e, "realmID") && l.proto.RealmID.encode(e.realmID, t.uint32(90).fork()).ldelim(), null != e.newRealmAdminKey && Object.hasOwnProperty.call(e, "newRealmAdminKey") && l.proto.Key.encode(e.newRealmAdminKey, t.uint32(98).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(106).string(e.memo), null != e.maxAutomaticTokenAssociations && Object.hasOwnProperty.call(e, "maxAutomaticTokenAssociations") && t.uint32(112).int32(e.maxAutomaticTokenAssociations), null != e.stakedAccountId && Object.hasOwnProperty.call(e, "stakedAccountId") && l.proto.AccountID.encode(e.stakedAccountId, t.uint32(122).fork()).ldelim(), null != e.stakedNodeId && Object.hasOwnProperty.call(e, "stakedNodeId") && t.uint32(128).int64(e.stakedNodeId), null != e.declineReward && Object.hasOwnProperty.call(e, "declineReward") && t.uint32(136).bool(e.declineReward), null != e.alias && Object.hasOwnProperty.call(e, "alias") && t.uint32(146).bytes(e.alias), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoCreateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.key = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.initialBalance = e.uint64();
                                        break;
                                    case 3:
                                        n.proxyAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.sendRecordThreshold = e.uint64();
                                        break;
                                    case 7:
                                        n.receiveRecordThreshold = e.uint64();
                                        break;
                                    case 8:
                                        n.receiverSigRequired = e.bool();
                                        break;
                                    case 9:
                                        n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.shardID = l.proto.ShardID.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.realmID = l.proto.RealmID.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        n.newRealmAdminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        n.memo = e.string();
                                        break;
                                    case 14:
                                        n.maxAutomaticTokenAssociations = e.int32();
                                        break;
                                    case 15:
                                        n.stakedAccountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 16:
                                        n.stakedNodeId = e.int64();
                                        break;
                                    case 17:
                                        n.declineReward = e.bool();
                                        break;
                                    case 18:
                                        n.alias = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoDeleteTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.transferAccountID = null, e.prototype.deleteAccountID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.transferAccountID && Object.hasOwnProperty.call(e, "transferAccountID") && l.proto.AccountID.encode(e.transferAccountID, t.uint32(10).fork()).ldelim(), null != e.deleteAccountID && Object.hasOwnProperty.call(e, "deleteAccountID") && l.proto.AccountID.encode(e.deleteAccountID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoDeleteTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.transferAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.deleteAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoDeleteLiveHashTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.accountOfLiveHash = null, e.prototype.liveHashToDelete = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.accountOfLiveHash && Object.hasOwnProperty.call(e, "accountOfLiveHash") && l.proto.AccountID.encode(e.accountOfLiveHash, t.uint32(10).fork()).ldelim(), null != e.liveHashToDelete && Object.hasOwnProperty.call(e, "liveHashToDelete") && t.uint32(18).bytes(e.liveHashToDelete), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoDeleteLiveHashTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.accountOfLiveHash = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.liveHashToDelete = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoTransferTransactionBody = function() {
                        function e(e) {
                            if (this.tokenTransfers = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.transfers = null, e.prototype.tokenTransfers = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.transfers && Object.hasOwnProperty.call(e, "transfers") && l.proto.TransferList.encode(e.transfers, t.uint32(10).fork()).ldelim(), null != e.tokenTransfers && e.tokenTransfers.length)
                                for (var o = 0; o < e.tokenTransfers.length; ++o) l.proto.TokenTransferList.encode(e.tokenTransfers[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoTransferTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.transfers = l.proto.TransferList.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.tokenTransfers && n.tokenTransfers.length || (n.tokenTransfers = []), n.tokenTransfers.push(l.proto.TokenTransferList.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoUpdateTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.accountIDToUpdate = null, e.prototype.key = null, e.prototype.proxyAccountID = null, e.prototype.proxyFraction = 0, e.prototype.sendRecordThreshold = null, e.prototype.sendRecordThresholdWrapper = null, e.prototype.receiveRecordThreshold = null, e.prototype.receiveRecordThresholdWrapper = null, e.prototype.autoRenewPeriod = null, e.prototype.expirationTime = null, e.prototype.receiverSigRequired = null, e.prototype.receiverSigRequiredWrapper = null, e.prototype.memo = null, e.prototype.maxAutomaticTokenAssociations = null, e.prototype.stakedAccountId = null, e.prototype.stakedNodeId = null, e.prototype.declineReward = null, Object.defineProperty(e.prototype, "sendRecordThresholdField", {
                            get: a.oneOfGetter(t = ["sendRecordThreshold", "sendRecordThresholdWrapper"]),
                            set: a.oneOfSetter(t)
                        }), Object.defineProperty(e.prototype, "receiveRecordThresholdField", {
                            get: a.oneOfGetter(t = ["receiveRecordThreshold", "receiveRecordThresholdWrapper"]),
                            set: a.oneOfSetter(t)
                        }), Object.defineProperty(e.prototype, "receiverSigRequiredField", {
                            get: a.oneOfGetter(t = ["receiverSigRequired", "receiverSigRequiredWrapper"]),
                            set: a.oneOfSetter(t)
                        }), Object.defineProperty(e.prototype, "stakedId", {
                            get: a.oneOfGetter(t = ["stakedAccountId", "stakedNodeId"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.accountIDToUpdate && Object.hasOwnProperty.call(e, "accountIDToUpdate") && l.proto.AccountID.encode(e.accountIDToUpdate, t.uint32(18).fork()).ldelim(), null != e.key && Object.hasOwnProperty.call(e, "key") && l.proto.Key.encode(e.key, t.uint32(26).fork()).ldelim(), null != e.proxyAccountID && Object.hasOwnProperty.call(e, "proxyAccountID") && l.proto.AccountID.encode(e.proxyAccountID, t.uint32(34).fork()).ldelim(), null != e.proxyFraction && Object.hasOwnProperty.call(e, "proxyFraction") && t.uint32(40).int32(e.proxyFraction), null != e.sendRecordThreshold && Object.hasOwnProperty.call(e, "sendRecordThreshold") && t.uint32(48).uint64(e.sendRecordThreshold), null != e.receiveRecordThreshold && Object.hasOwnProperty.call(e, "receiveRecordThreshold") && t.uint32(56).uint64(e.receiveRecordThreshold), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(66).fork()).ldelim(), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(74).fork()).ldelim(), null != e.receiverSigRequired && Object.hasOwnProperty.call(e, "receiverSigRequired") && t.uint32(80).bool(e.receiverSigRequired), null != e.sendRecordThresholdWrapper && Object.hasOwnProperty.call(e, "sendRecordThresholdWrapper") && l.google.protobuf.UInt64Value.encode(e.sendRecordThresholdWrapper, t.uint32(90).fork()).ldelim(), null != e.receiveRecordThresholdWrapper && Object.hasOwnProperty.call(e, "receiveRecordThresholdWrapper") && l.google.protobuf.UInt64Value.encode(e.receiveRecordThresholdWrapper, t.uint32(98).fork()).ldelim(), null != e.receiverSigRequiredWrapper && Object.hasOwnProperty.call(e, "receiverSigRequiredWrapper") && l.google.protobuf.BoolValue.encode(e.receiverSigRequiredWrapper, t.uint32(106).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && l.google.protobuf.StringValue.encode(e.memo, t.uint32(114).fork()).ldelim(), null != e.maxAutomaticTokenAssociations && Object.hasOwnProperty.call(e, "maxAutomaticTokenAssociations") && l.google.protobuf.Int32Value.encode(e.maxAutomaticTokenAssociations, t.uint32(122).fork()).ldelim(), null != e.stakedAccountId && Object.hasOwnProperty.call(e, "stakedAccountId") && l.proto.AccountID.encode(e.stakedAccountId, t.uint32(130).fork()).ldelim(), null != e.stakedNodeId && Object.hasOwnProperty.call(e, "stakedNodeId") && t.uint32(136).int64(e.stakedNodeId), null != e.declineReward && Object.hasOwnProperty.call(e, "declineReward") && l.google.protobuf.BoolValue.encode(e.declineReward, t.uint32(146).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoUpdateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 2:
                                        n.accountIDToUpdate = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.key = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.proxyAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.proxyFraction = e.int32();
                                        break;
                                    case 6:
                                        n.sendRecordThreshold = e.uint64();
                                        break;
                                    case 11:
                                        n.sendRecordThresholdWrapper = l.google.protobuf.UInt64Value.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.receiveRecordThreshold = e.uint64();
                                        break;
                                    case 12:
                                        n.receiveRecordThresholdWrapper = l.google.protobuf.UInt64Value.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.receiverSigRequired = e.bool();
                                        break;
                                    case 13:
                                        n.receiverSigRequiredWrapper = l.google.protobuf.BoolValue.decode(e, e.uint32());
                                        break;
                                    case 14:
                                        n.memo = l.google.protobuf.StringValue.decode(e, e.uint32());
                                        break;
                                    case 15:
                                        n.maxAutomaticTokenAssociations = l.google.protobuf.Int32Value.decode(e, e.uint32());
                                        break;
                                    case 16:
                                        n.stakedAccountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 17:
                                        n.stakedNodeId = e.int64();
                                        break;
                                    case 18:
                                        n.declineReward = l.google.protobuf.BoolValue.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoApproveAllowanceTransactionBody = function() {
                        function e(e) {
                            if (this.cryptoAllowances = [], this.nftAllowances = [], this.tokenAllowances = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.cryptoAllowances = a.emptyArray, e.prototype.nftAllowances = a.emptyArray, e.prototype.tokenAllowances = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.cryptoAllowances && e.cryptoAllowances.length)
                                for (var o = 0; o < e.cryptoAllowances.length; ++o) l.proto.CryptoAllowance.encode(e.cryptoAllowances[o], t.uint32(10).fork()).ldelim();
                            if (null != e.nftAllowances && e.nftAllowances.length)
                                for (o = 0; o < e.nftAllowances.length; ++o) l.proto.NftAllowance.encode(e.nftAllowances[o], t.uint32(18).fork()).ldelim();
                            if (null != e.tokenAllowances && e.tokenAllowances.length)
                                for (o = 0; o < e.tokenAllowances.length; ++o) l.proto.TokenAllowance.encode(e.tokenAllowances[o], t.uint32(26).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoApproveAllowanceTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.cryptoAllowances && n.cryptoAllowances.length || (n.cryptoAllowances = []), n.cryptoAllowances.push(l.proto.CryptoAllowance.decode(e, e.uint32()));
                                        break;
                                    case 2:
                                        n.nftAllowances && n.nftAllowances.length || (n.nftAllowances = []), n.nftAllowances.push(l.proto.NftAllowance.decode(e, e.uint32()));
                                        break;
                                    case 3:
                                        n.tokenAllowances && n.tokenAllowances.length || (n.tokenAllowances = []), n.tokenAllowances.push(l.proto.TokenAllowance.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoAllowance = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.owner = null, e.prototype.spender = null, e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.owner && Object.hasOwnProperty.call(e, "owner") && l.proto.AccountID.encode(e.owner, t.uint32(10).fork()).ldelim(), null != e.spender && Object.hasOwnProperty.call(e, "spender") && l.proto.AccountID.encode(e.spender, t.uint32(18).fork()).ldelim(), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(24).int64(e.amount), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoAllowance; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.owner = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.spender = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.amount = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NftAllowance = function() {
                        function e(e) {
                            if (this.serialNumbers = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenId = null, e.prototype.owner = null, e.prototype.spender = null, e.prototype.serialNumbers = a.emptyArray, e.prototype.approvedForAll = null, e.prototype.delegatingSpender = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(10).fork()).ldelim(), null != e.owner && Object.hasOwnProperty.call(e, "owner") && l.proto.AccountID.encode(e.owner, t.uint32(18).fork()).ldelim(), null != e.spender && Object.hasOwnProperty.call(e, "spender") && l.proto.AccountID.encode(e.spender, t.uint32(26).fork()).ldelim(), null != e.serialNumbers && e.serialNumbers.length) {
                                t.uint32(34).fork();
                                for (var o = 0; o < e.serialNumbers.length; ++o) t.int64(e.serialNumbers[o]);
                                t.ldelim()
                            }
                            return null != e.approvedForAll && Object.hasOwnProperty.call(e, "approvedForAll") && l.google.protobuf.BoolValue.encode(e.approvedForAll, t.uint32(42).fork()).ldelim(), null != e.delegatingSpender && Object.hasOwnProperty.call(e, "delegatingSpender") && l.proto.AccountID.encode(e.delegatingSpender, t.uint32(50).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NftAllowance; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.owner = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.spender = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        if (n.serialNumbers && n.serialNumbers.length || (n.serialNumbers = []), 2 == (7 & c))
                                            for (var a = e.uint32() + e.pos; e.pos < a;) n.serialNumbers.push(e.int64());
                                        else n.serialNumbers.push(e.int64());
                                        break;
                                    case 5:
                                        n.approvedForAll = l.google.protobuf.BoolValue.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.delegatingSpender = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenAllowance = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenId = null, e.prototype.owner = null, e.prototype.spender = null, e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(10).fork()).ldelim(), null != e.owner && Object.hasOwnProperty.call(e, "owner") && l.proto.AccountID.encode(e.owner, t.uint32(18).fork()).ldelim(), null != e.spender && Object.hasOwnProperty.call(e, "spender") && l.proto.AccountID.encode(e.spender, t.uint32(26).fork()).ldelim(), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(32).int64(e.amount), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenAllowance; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.owner = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.spender = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.amount = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoDeleteAllowanceTransactionBody = function() {
                        function e(e) {
                            if (this.nftAllowances = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.nftAllowances = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.nftAllowances && e.nftAllowances.length)
                                for (var o = 0; o < e.nftAllowances.length; ++o) l.proto.NftRemoveAllowance.encode(e.nftAllowances[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoDeleteAllowanceTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 2:
                                        n.nftAllowances && n.nftAllowances.length || (n.nftAllowances = []), n.nftAllowances.push(l.proto.NftRemoveAllowance.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NftRemoveAllowance = function() {
                        function e(e) {
                            if (this.serialNumbers = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenId = null, e.prototype.owner = null, e.prototype.serialNumbers = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(10).fork()).ldelim(), null != e.owner && Object.hasOwnProperty.call(e, "owner") && l.proto.AccountID.encode(e.owner, t.uint32(18).fork()).ldelim(), null != e.serialNumbers && e.serialNumbers.length) {
                                t.uint32(26).fork();
                                for (var o = 0; o < e.serialNumbers.length; ++o) t.int64(e.serialNumbers[o]);
                                t.ldelim()
                            }
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NftRemoveAllowance; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.owner = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        if (n.serialNumbers && n.serialNumbers.length || (n.serialNumbers = []), 2 == (7 & c))
                                            for (var a = e.uint32() + e.pos; e.pos < a;) n.serialNumbers.push(e.int64());
                                        else n.serialNumbers.push(e.int64());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.EthereumTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.ethereumData = a.newBuffer([]), e.prototype.callData = null, e.prototype.maxGasAllowance = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.ethereumData && Object.hasOwnProperty.call(e, "ethereumData") && t.uint32(10).bytes(e.ethereumData), null != e.callData && Object.hasOwnProperty.call(e, "callData") && l.proto.FileID.encode(e.callData, t.uint32(18).fork()).ldelim(), null != e.maxGasAllowance && Object.hasOwnProperty.call(e, "maxGasAllowance") && t.uint32(24).int64(e.maxGasAllowance), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.EthereumTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.ethereumData = e.bytes();
                                        break;
                                    case 2:
                                        n.callData = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.maxGasAllowance = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FileAppendTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.fileID = null, e.prototype.contents = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(18).fork()).ldelim(), null != e.contents && Object.hasOwnProperty.call(e, "contents") && t.uint32(34).bytes(e.contents), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FileAppendTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 2:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.contents = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FileCreateTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.expirationTime = null, e.prototype.keys = null, e.prototype.contents = a.newBuffer([]), e.prototype.shardID = null, e.prototype.realmID = null, e.prototype.newRealmAdminKey = null, e.prototype.memo = "", e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(18).fork()).ldelim(), null != e.keys && Object.hasOwnProperty.call(e, "keys") && l.proto.KeyList.encode(e.keys, t.uint32(26).fork()).ldelim(), null != e.contents && Object.hasOwnProperty.call(e, "contents") && t.uint32(34).bytes(e.contents), null != e.shardID && Object.hasOwnProperty.call(e, "shardID") && l.proto.ShardID.encode(e.shardID, t.uint32(42).fork()).ldelim(), null != e.realmID && Object.hasOwnProperty.call(e, "realmID") && l.proto.RealmID.encode(e.realmID, t.uint32(50).fork()).ldelim(), null != e.newRealmAdminKey && Object.hasOwnProperty.call(e, "newRealmAdminKey") && l.proto.Key.encode(e.newRealmAdminKey, t.uint32(58).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(66).string(e.memo), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FileCreateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 2:
                                        n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.keys = l.proto.KeyList.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.contents = e.bytes();
                                        break;
                                    case 5:
                                        n.shardID = l.proto.ShardID.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.realmID = l.proto.RealmID.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.newRealmAdminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.memo = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FileDeleteTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.fileID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FileDeleteTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 2:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FileUpdateTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.fileID = null, e.prototype.expirationTime = null, e.prototype.keys = null, e.prototype.contents = a.newBuffer([]), e.prototype.memo = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(10).fork()).ldelim(), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(18).fork()).ldelim(), null != e.keys && Object.hasOwnProperty.call(e, "keys") && l.proto.KeyList.encode(e.keys, t.uint32(26).fork()).ldelim(), null != e.contents && Object.hasOwnProperty.call(e, "contents") && t.uint32(34).bytes(e.contents), null != e.memo && Object.hasOwnProperty.call(e, "memo") && l.google.protobuf.StringValue.encode(e.memo, t.uint32(42).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FileUpdateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.keys = l.proto.KeyList.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.contents = e.bytes();
                                        break;
                                    case 5:
                                        n.memo = l.google.protobuf.StringValue.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractDeleteTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.contractID = null, e.prototype.transferAccountID = null, e.prototype.transferContractID = null, e.prototype.permanentRemoval = !1, Object.defineProperty(e.prototype, "obtainers", {
                            get: a.oneOfGetter(t = ["transferAccountID", "transferContractID"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(10).fork()).ldelim(), null != e.transferAccountID && Object.hasOwnProperty.call(e, "transferAccountID") && l.proto.AccountID.encode(e.transferAccountID, t.uint32(18).fork()).ldelim(), null != e.transferContractID && Object.hasOwnProperty.call(e, "transferContractID") && l.proto.ContractID.encode(e.transferContractID, t.uint32(26).fork()).ldelim(), null != e.permanentRemoval && Object.hasOwnProperty.call(e, "permanentRemoval") && t.uint32(32).bool(e.permanentRemoval), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractDeleteTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.transferAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.transferContractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.permanentRemoval = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ConsensusUpdateTopicTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.topicID = null, e.prototype.memo = null, e.prototype.expirationTime = null, e.prototype.adminKey = null, e.prototype.submitKey = null, e.prototype.autoRenewPeriod = null, e.prototype.autoRenewAccount = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.topicID && Object.hasOwnProperty.call(e, "topicID") && l.proto.TopicID.encode(e.topicID, t.uint32(10).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && l.google.protobuf.StringValue.encode(e.memo, t.uint32(18).fork()).ldelim(), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(34).fork()).ldelim(), null != e.adminKey && Object.hasOwnProperty.call(e, "adminKey") && l.proto.Key.encode(e.adminKey, t.uint32(50).fork()).ldelim(), null != e.submitKey && Object.hasOwnProperty.call(e, "submitKey") && l.proto.Key.encode(e.submitKey, t.uint32(58).fork()).ldelim(), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(66).fork()).ldelim(), null != e.autoRenewAccount && Object.hasOwnProperty.call(e, "autoRenewAccount") && l.proto.AccountID.encode(e.autoRenewAccount, t.uint32(74).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ConsensusUpdateTopicTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.topicID = l.proto.TopicID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.memo = l.google.protobuf.StringValue.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.adminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.submitKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.autoRenewAccount = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ConsensusMessageChunkInfo = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.initialTransactionID = null, e.prototype.total = 0, e.prototype.number = 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.initialTransactionID && Object.hasOwnProperty.call(e, "initialTransactionID") && l.proto.TransactionID.encode(e.initialTransactionID, t.uint32(10).fork()).ldelim(), null != e.total && Object.hasOwnProperty.call(e, "total") && t.uint32(16).int32(e.total), null != e.number && Object.hasOwnProperty.call(e, "number") && t.uint32(24).int32(e.number), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ConsensusMessageChunkInfo; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.initialTransactionID = l.proto.TransactionID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.total = e.int32();
                                        break;
                                    case 3:
                                        n.number = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ConsensusSubmitMessageTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.topicID = null, e.prototype.message = a.newBuffer([]), e.prototype.chunkInfo = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.topicID && Object.hasOwnProperty.call(e, "topicID") && l.proto.TopicID.encode(e.topicID, t.uint32(10).fork()).ldelim(), null != e.message && Object.hasOwnProperty.call(e, "message") && t.uint32(18).bytes(e.message), null != e.chunkInfo && Object.hasOwnProperty.call(e, "chunkInfo") && l.proto.ConsensusMessageChunkInfo.encode(e.chunkInfo, t.uint32(26).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ConsensusSubmitMessageTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.topicID = l.proto.TopicID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.message = e.bytes();
                                        break;
                                    case 3:
                                        n.chunkInfo = l.proto.ConsensusMessageChunkInfo.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.UncheckedSubmitBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.transactionBytes = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.transactionBytes && Object.hasOwnProperty.call(e, "transactionBytes") && t.uint32(10).bytes(e.transactionBytes), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.UncheckedSubmitBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.transactionBytes = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenCreateTransactionBody = function() {
                        function e(e) {
                            if (this.customFees = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.name = "", e.prototype.symbol = "", e.prototype.decimals = 0, e.prototype.initialSupply = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.treasury = null, e.prototype.adminKey = null, e.prototype.kycKey = null, e.prototype.freezeKey = null, e.prototype.wipeKey = null, e.prototype.supplyKey = null, e.prototype.freezeDefault = !1, e.prototype.expiry = null, e.prototype.autoRenewAccount = null, e.prototype.autoRenewPeriod = null, e.prototype.memo = "", e.prototype.tokenType = 0, e.prototype.supplyType = 0, e.prototype.maxSupply = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.feeScheduleKey = null, e.prototype.customFees = a.emptyArray, e.prototype.pauseKey = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name), null != e.symbol && Object.hasOwnProperty.call(e, "symbol") && t.uint32(18).string(e.symbol), null != e.decimals && Object.hasOwnProperty.call(e, "decimals") && t.uint32(24).uint32(e.decimals), null != e.initialSupply && Object.hasOwnProperty.call(e, "initialSupply") && t.uint32(32).uint64(e.initialSupply), null != e.treasury && Object.hasOwnProperty.call(e, "treasury") && l.proto.AccountID.encode(e.treasury, t.uint32(42).fork()).ldelim(), null != e.adminKey && Object.hasOwnProperty.call(e, "adminKey") && l.proto.Key.encode(e.adminKey, t.uint32(50).fork()).ldelim(), null != e.kycKey && Object.hasOwnProperty.call(e, "kycKey") && l.proto.Key.encode(e.kycKey, t.uint32(58).fork()).ldelim(), null != e.freezeKey && Object.hasOwnProperty.call(e, "freezeKey") && l.proto.Key.encode(e.freezeKey, t.uint32(66).fork()).ldelim(), null != e.wipeKey && Object.hasOwnProperty.call(e, "wipeKey") && l.proto.Key.encode(e.wipeKey, t.uint32(74).fork()).ldelim(), null != e.supplyKey && Object.hasOwnProperty.call(e, "supplyKey") && l.proto.Key.encode(e.supplyKey, t.uint32(82).fork()).ldelim(), null != e.freezeDefault && Object.hasOwnProperty.call(e, "freezeDefault") && t.uint32(88).bool(e.freezeDefault), null != e.expiry && Object.hasOwnProperty.call(e, "expiry") && l.proto.Timestamp.encode(e.expiry, t.uint32(106).fork()).ldelim(), null != e.autoRenewAccount && Object.hasOwnProperty.call(e, "autoRenewAccount") && l.proto.AccountID.encode(e.autoRenewAccount, t.uint32(114).fork()).ldelim(), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(122).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(130).string(e.memo), null != e.tokenType && Object.hasOwnProperty.call(e, "tokenType") && t.uint32(136).int32(e.tokenType), null != e.supplyType && Object.hasOwnProperty.call(e, "supplyType") && t.uint32(144).int32(e.supplyType), null != e.maxSupply && Object.hasOwnProperty.call(e, "maxSupply") && t.uint32(152).int64(e.maxSupply), null != e.feeScheduleKey && Object.hasOwnProperty.call(e, "feeScheduleKey") && l.proto.Key.encode(e.feeScheduleKey, t.uint32(162).fork()).ldelim(), null != e.customFees && e.customFees.length)
                                for (var o = 0; o < e.customFees.length; ++o) l.proto.CustomFee.encode(e.customFees[o], t.uint32(170).fork()).ldelim();
                            return null != e.pauseKey && Object.hasOwnProperty.call(e, "pauseKey") && l.proto.Key.encode(e.pauseKey, t.uint32(178).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenCreateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.name = e.string();
                                        break;
                                    case 2:
                                        n.symbol = e.string();
                                        break;
                                    case 3:
                                        n.decimals = e.uint32();
                                        break;
                                    case 4:
                                        n.initialSupply = e.uint64();
                                        break;
                                    case 5:
                                        n.treasury = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.adminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.kycKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.freezeKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.wipeKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.supplyKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.freezeDefault = e.bool();
                                        break;
                                    case 13:
                                        n.expiry = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 14:
                                        n.autoRenewAccount = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 15:
                                        n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    case 16:
                                        n.memo = e.string();
                                        break;
                                    case 17:
                                        n.tokenType = e.int32();
                                        break;
                                    case 18:
                                        n.supplyType = e.int32();
                                        break;
                                    case 19:
                                        n.maxSupply = e.int64();
                                        break;
                                    case 20:
                                        n.feeScheduleKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 21:
                                        n.customFees && n.customFees.length || (n.customFees = []), n.customFees.push(l.proto.CustomFee.decode(e, e.uint32()));
                                        break;
                                    case 22:
                                        n.pauseKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FractionalFee = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.fractionalAmount = null, e.prototype.minimumAmount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.maximumAmount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.netOfTransfers = !1, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.fractionalAmount && Object.hasOwnProperty.call(e, "fractionalAmount") && l.proto.Fraction.encode(e.fractionalAmount, t.uint32(10).fork()).ldelim(), null != e.minimumAmount && Object.hasOwnProperty.call(e, "minimumAmount") && t.uint32(16).int64(e.minimumAmount), null != e.maximumAmount && Object.hasOwnProperty.call(e, "maximumAmount") && t.uint32(24).int64(e.maximumAmount), null != e.netOfTransfers && Object.hasOwnProperty.call(e, "netOfTransfers") && t.uint32(32).bool(e.netOfTransfers), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FractionalFee; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.fractionalAmount = l.proto.Fraction.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.minimumAmount = e.int64();
                                        break;
                                    case 3:
                                        n.maximumAmount = e.int64();
                                        break;
                                    case 4:
                                        n.netOfTransfers = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FixedFee = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.denominatingTokenId = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(8).int64(e.amount), null != e.denominatingTokenId && Object.hasOwnProperty.call(e, "denominatingTokenId") && l.proto.TokenID.encode(e.denominatingTokenId, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FixedFee; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.amount = e.int64();
                                        break;
                                    case 2:
                                        n.denominatingTokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.RoyaltyFee = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.exchangeValueFraction = null, e.prototype.fallbackFee = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.exchangeValueFraction && Object.hasOwnProperty.call(e, "exchangeValueFraction") && l.proto.Fraction.encode(e.exchangeValueFraction, t.uint32(10).fork()).ldelim(), null != e.fallbackFee && Object.hasOwnProperty.call(e, "fallbackFee") && l.proto.FixedFee.encode(e.fallbackFee, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.RoyaltyFee; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.exchangeValueFraction = l.proto.Fraction.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.fallbackFee = l.proto.FixedFee.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CustomFee = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.fixedFee = null, e.prototype.fractionalFee = null, e.prototype.royaltyFee = null, e.prototype.feeCollectorAccountId = null, e.prototype.allCollectorsAreExempt = !1, Object.defineProperty(e.prototype, "fee", {
                            get: a.oneOfGetter(t = ["fixedFee", "fractionalFee", "royaltyFee"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.fixedFee && Object.hasOwnProperty.call(e, "fixedFee") && l.proto.FixedFee.encode(e.fixedFee, t.uint32(10).fork()).ldelim(), null != e.fractionalFee && Object.hasOwnProperty.call(e, "fractionalFee") && l.proto.FractionalFee.encode(e.fractionalFee, t.uint32(18).fork()).ldelim(), null != e.feeCollectorAccountId && Object.hasOwnProperty.call(e, "feeCollectorAccountId") && l.proto.AccountID.encode(e.feeCollectorAccountId, t.uint32(26).fork()).ldelim(), null != e.royaltyFee && Object.hasOwnProperty.call(e, "royaltyFee") && l.proto.RoyaltyFee.encode(e.royaltyFee, t.uint32(34).fork()).ldelim(), null != e.allCollectorsAreExempt && Object.hasOwnProperty.call(e, "allCollectorsAreExempt") && t.uint32(40).bool(e.allCollectorsAreExempt), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CustomFee; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.fixedFee = l.proto.FixedFee.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.fractionalFee = l.proto.FractionalFee.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.royaltyFee = l.proto.RoyaltyFee.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.feeCollectorAccountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.allCollectorsAreExempt = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.AssessedCustomFee = function() {
                        function e(e) {
                            if (this.effectivePayerAccountId = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.tokenId = null, e.prototype.feeCollectorAccountId = null, e.prototype.effectivePayerAccountId = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(8).int64(e.amount), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(18).fork()).ldelim(), null != e.feeCollectorAccountId && Object.hasOwnProperty.call(e, "feeCollectorAccountId") && l.proto.AccountID.encode(e.feeCollectorAccountId, t.uint32(26).fork()).ldelim(), null != e.effectivePayerAccountId && e.effectivePayerAccountId.length)
                                for (var o = 0; o < e.effectivePayerAccountId.length; ++o) l.proto.AccountID.encode(e.effectivePayerAccountId[o], t.uint32(34).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.AssessedCustomFee; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.amount = e.int64();
                                        break;
                                    case 2:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.feeCollectorAccountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.effectivePayerAccountId && n.effectivePayerAccountId.length || (n.effectivePayerAccountId = []), n.effectivePayerAccountId.push(l.proto.AccountID.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenFreezeAccountTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.prototype.account = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), null != e.account && Object.hasOwnProperty.call(e, "account") && l.proto.AccountID.encode(e.account, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenFreezeAccountTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.account = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenUnfreezeAccountTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.prototype.account = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), null != e.account && Object.hasOwnProperty.call(e, "account") && l.proto.AccountID.encode(e.account, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenUnfreezeAccountTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.account = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenGrantKycTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.prototype.account = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), null != e.account && Object.hasOwnProperty.call(e, "account") && l.proto.AccountID.encode(e.account, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenGrantKycTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.account = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenRevokeKycTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.prototype.account = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), null != e.account && Object.hasOwnProperty.call(e, "account") && l.proto.AccountID.encode(e.account, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenRevokeKycTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.account = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenDeleteTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenDeleteTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenUpdateTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.prototype.symbol = "", e.prototype.name = "", e.prototype.treasury = null, e.prototype.adminKey = null, e.prototype.kycKey = null, e.prototype.freezeKey = null, e.prototype.wipeKey = null, e.prototype.supplyKey = null, e.prototype.autoRenewAccount = null, e.prototype.autoRenewPeriod = null, e.prototype.expiry = null, e.prototype.memo = null, e.prototype.feeScheduleKey = null, e.prototype.pauseKey = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), null != e.symbol && Object.hasOwnProperty.call(e, "symbol") && t.uint32(18).string(e.symbol), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(26).string(e.name), null != e.treasury && Object.hasOwnProperty.call(e, "treasury") && l.proto.AccountID.encode(e.treasury, t.uint32(34).fork()).ldelim(), null != e.adminKey && Object.hasOwnProperty.call(e, "adminKey") && l.proto.Key.encode(e.adminKey, t.uint32(42).fork()).ldelim(), null != e.kycKey && Object.hasOwnProperty.call(e, "kycKey") && l.proto.Key.encode(e.kycKey, t.uint32(50).fork()).ldelim(), null != e.freezeKey && Object.hasOwnProperty.call(e, "freezeKey") && l.proto.Key.encode(e.freezeKey, t.uint32(58).fork()).ldelim(), null != e.wipeKey && Object.hasOwnProperty.call(e, "wipeKey") && l.proto.Key.encode(e.wipeKey, t.uint32(66).fork()).ldelim(), null != e.supplyKey && Object.hasOwnProperty.call(e, "supplyKey") && l.proto.Key.encode(e.supplyKey, t.uint32(74).fork()).ldelim(), null != e.autoRenewAccount && Object.hasOwnProperty.call(e, "autoRenewAccount") && l.proto.AccountID.encode(e.autoRenewAccount, t.uint32(82).fork()).ldelim(), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(90).fork()).ldelim(), null != e.expiry && Object.hasOwnProperty.call(e, "expiry") && l.proto.Timestamp.encode(e.expiry, t.uint32(98).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && l.google.protobuf.StringValue.encode(e.memo, t.uint32(106).fork()).ldelim(), null != e.feeScheduleKey && Object.hasOwnProperty.call(e, "feeScheduleKey") && l.proto.Key.encode(e.feeScheduleKey, t.uint32(114).fork()).ldelim(), null != e.pauseKey && Object.hasOwnProperty.call(e, "pauseKey") && l.proto.Key.encode(e.pauseKey, t.uint32(122).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenUpdateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.symbol = e.string();
                                        break;
                                    case 3:
                                        n.name = e.string();
                                        break;
                                    case 4:
                                        n.treasury = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.adminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.kycKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.freezeKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.wipeKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.supplyKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.autoRenewAccount = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        n.expiry = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        n.memo = l.google.protobuf.StringValue.decode(e, e.uint32());
                                        break;
                                    case 14:
                                        n.feeScheduleKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 15:
                                        n.pauseKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenMintTransactionBody = function() {
                        function e(e) {
                            if (this.metadata = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.metadata = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(16).uint64(e.amount), null != e.metadata && e.metadata.length)
                                for (var o = 0; o < e.metadata.length; ++o) t.uint32(26).bytes(e.metadata[o]);
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenMintTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.amount = e.uint64();
                                        break;
                                    case 3:
                                        n.metadata && n.metadata.length || (n.metadata = []), n.metadata.push(e.bytes());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenBurnTransactionBody = function() {
                        function e(e) {
                            if (this.serialNumbers = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.serialNumbers = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(16).uint64(e.amount), null != e.serialNumbers && e.serialNumbers.length) {
                                t.uint32(26).fork();
                                for (var o = 0; o < e.serialNumbers.length; ++o) t.int64(e.serialNumbers[o]);
                                t.ldelim()
                            }
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenBurnTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.amount = e.uint64();
                                        break;
                                    case 3:
                                        if (n.serialNumbers && n.serialNumbers.length || (n.serialNumbers = []), 2 == (7 & c))
                                            for (var a = e.uint32() + e.pos; e.pos < a;) n.serialNumbers.push(e.int64());
                                        else n.serialNumbers.push(e.int64());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenWipeAccountTransactionBody = function() {
                        function e(e) {
                            if (this.serialNumbers = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.prototype.account = null, e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.serialNumbers = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), null != e.account && Object.hasOwnProperty.call(e, "account") && l.proto.AccountID.encode(e.account, t.uint32(18).fork()).ldelim(), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(24).uint64(e.amount), null != e.serialNumbers && e.serialNumbers.length) {
                                t.uint32(34).fork();
                                for (var o = 0; o < e.serialNumbers.length; ++o) t.int64(e.serialNumbers[o]);
                                t.ldelim()
                            }
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenWipeAccountTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.account = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.amount = e.uint64();
                                        break;
                                    case 4:
                                        if (n.serialNumbers && n.serialNumbers.length || (n.serialNumbers = []), 2 == (7 & c))
                                            for (var a = e.uint32() + e.pos; e.pos < a;) n.serialNumbers.push(e.int64());
                                        else n.serialNumbers.push(e.int64());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenAssociateTransactionBody = function() {
                        function e(e) {
                            if (this.tokens = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.account = null, e.prototype.tokens = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.account && Object.hasOwnProperty.call(e, "account") && l.proto.AccountID.encode(e.account, t.uint32(10).fork()).ldelim(), null != e.tokens && e.tokens.length)
                                for (var o = 0; o < e.tokens.length; ++o) l.proto.TokenID.encode(e.tokens[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenAssociateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.account = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.tokens && n.tokens.length || (n.tokens = []), n.tokens.push(l.proto.TokenID.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenDissociateTransactionBody = function() {
                        function e(e) {
                            if (this.tokens = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.account = null, e.prototype.tokens = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.account && Object.hasOwnProperty.call(e, "account") && l.proto.AccountID.encode(e.account, t.uint32(10).fork()).ldelim(), null != e.tokens && e.tokens.length)
                                for (var o = 0; o < e.tokens.length; ++o) l.proto.TokenID.encode(e.tokens[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenDissociateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.account = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.tokens && n.tokens.length || (n.tokens = []), n.tokens.push(l.proto.TokenID.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenFeeScheduleUpdateTransactionBody = function() {
                        function e(e) {
                            if (this.customFees = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenId = null, e.prototype.customFees = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(10).fork()).ldelim(), null != e.customFees && e.customFees.length)
                                for (var o = 0; o < e.customFees.length; ++o) l.proto.CustomFee.encode(e.customFees[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenFeeScheduleUpdateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.customFees && n.customFees.length || (n.customFees = []), n.customFees.push(l.proto.CustomFee.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenPauseTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenPauseTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenUnpauseTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.token = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(10).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenUnpauseTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ScheduleCreateTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.scheduledTransactionBody = null, e.prototype.memo = "", e.prototype.adminKey = null, e.prototype.payerAccountID = null, e.prototype.expirationTime = null, e.prototype.waitForExpiry = !1, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.scheduledTransactionBody && Object.hasOwnProperty.call(e, "scheduledTransactionBody") && l.proto.SchedulableTransactionBody.encode(e.scheduledTransactionBody, t.uint32(10).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(18).string(e.memo), null != e.adminKey && Object.hasOwnProperty.call(e, "adminKey") && l.proto.Key.encode(e.adminKey, t.uint32(26).fork()).ldelim(), null != e.payerAccountID && Object.hasOwnProperty.call(e, "payerAccountID") && l.proto.AccountID.encode(e.payerAccountID, t.uint32(34).fork()).ldelim(), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(42).fork()).ldelim(), null != e.waitForExpiry && Object.hasOwnProperty.call(e, "waitForExpiry") && t.uint32(104).bool(e.waitForExpiry), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ScheduleCreateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.scheduledTransactionBody = l.proto.SchedulableTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.memo = e.string();
                                        break;
                                    case 3:
                                        n.adminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.payerAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        n.waitForExpiry = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SchedulableTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.transactionFee = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.memo = "", e.prototype.contractCall = null, e.prototype.contractCreateInstance = null, e.prototype.contractUpdateInstance = null, e.prototype.contractDeleteInstance = null, e.prototype.cryptoApproveAllowance = null, e.prototype.cryptoDeleteAllowance = null, e.prototype.cryptoCreateAccount = null, e.prototype.cryptoDelete = null, e.prototype.cryptoTransfer = null, e.prototype.cryptoUpdateAccount = null, e.prototype.fileAppend = null, e.prototype.fileCreate = null, e.prototype.fileDelete = null, e.prototype.fileUpdate = null, e.prototype.systemDelete = null, e.prototype.systemUndelete = null, e.prototype.freeze = null, e.prototype.consensusCreateTopic = null, e.prototype.consensusUpdateTopic = null, e.prototype.consensusDeleteTopic = null, e.prototype.consensusSubmitMessage = null, e.prototype.tokenCreation = null, e.prototype.tokenFreeze = null, e.prototype.tokenUnfreeze = null, e.prototype.tokenGrantKyc = null, e.prototype.tokenRevokeKyc = null, e.prototype.tokenDeletion = null, e.prototype.tokenUpdate = null, e.prototype.tokenMint = null, e.prototype.tokenBurn = null, e.prototype.tokenWipe = null, e.prototype.tokenAssociate = null, e.prototype.tokenDissociate = null, e.prototype.tokenFeeScheduleUpdate = null, e.prototype.tokenPause = null, e.prototype.tokenUnpause = null, e.prototype.scheduleDelete = null, e.prototype.utilPrng = null, Object.defineProperty(e.prototype, "data", {
                            get: a.oneOfGetter(t = ["contractCall", "contractCreateInstance", "contractUpdateInstance", "contractDeleteInstance", "cryptoApproveAllowance", "cryptoDeleteAllowance", "cryptoCreateAccount", "cryptoDelete", "cryptoTransfer", "cryptoUpdateAccount", "fileAppend", "fileCreate", "fileDelete", "fileUpdate", "systemDelete", "systemUndelete", "freeze", "consensusCreateTopic", "consensusUpdateTopic", "consensusDeleteTopic", "consensusSubmitMessage", "tokenCreation", "tokenFreeze", "tokenUnfreeze", "tokenGrantKyc", "tokenRevokeKyc", "tokenDeletion", "tokenUpdate", "tokenMint", "tokenBurn", "tokenWipe", "tokenAssociate", "tokenDissociate", "tokenFeeScheduleUpdate", "tokenPause", "tokenUnpause", "scheduleDelete", "utilPrng"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.transactionFee && Object.hasOwnProperty.call(e, "transactionFee") && t.uint32(8).uint64(e.transactionFee), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(18).string(e.memo), null != e.contractCall && Object.hasOwnProperty.call(e, "contractCall") && l.proto.ContractCallTransactionBody.encode(e.contractCall, t.uint32(26).fork()).ldelim(), null != e.contractCreateInstance && Object.hasOwnProperty.call(e, "contractCreateInstance") && l.proto.ContractCreateTransactionBody.encode(e.contractCreateInstance, t.uint32(34).fork()).ldelim(), null != e.contractUpdateInstance && Object.hasOwnProperty.call(e, "contractUpdateInstance") && l.proto.ContractUpdateTransactionBody.encode(e.contractUpdateInstance, t.uint32(42).fork()).ldelim(), null != e.contractDeleteInstance && Object.hasOwnProperty.call(e, "contractDeleteInstance") && l.proto.ContractDeleteTransactionBody.encode(e.contractDeleteInstance, t.uint32(50).fork()).ldelim(), null != e.cryptoCreateAccount && Object.hasOwnProperty.call(e, "cryptoCreateAccount") && l.proto.CryptoCreateTransactionBody.encode(e.cryptoCreateAccount, t.uint32(58).fork()).ldelim(), null != e.cryptoDelete && Object.hasOwnProperty.call(e, "cryptoDelete") && l.proto.CryptoDeleteTransactionBody.encode(e.cryptoDelete, t.uint32(66).fork()).ldelim(), null != e.cryptoTransfer && Object.hasOwnProperty.call(e, "cryptoTransfer") && l.proto.CryptoTransferTransactionBody.encode(e.cryptoTransfer, t.uint32(74).fork()).ldelim(), null != e.cryptoUpdateAccount && Object.hasOwnProperty.call(e, "cryptoUpdateAccount") && l.proto.CryptoUpdateTransactionBody.encode(e.cryptoUpdateAccount, t.uint32(82).fork()).ldelim(), null != e.fileAppend && Object.hasOwnProperty.call(e, "fileAppend") && l.proto.FileAppendTransactionBody.encode(e.fileAppend, t.uint32(90).fork()).ldelim(), null != e.fileCreate && Object.hasOwnProperty.call(e, "fileCreate") && l.proto.FileCreateTransactionBody.encode(e.fileCreate, t.uint32(98).fork()).ldelim(), null != e.fileDelete && Object.hasOwnProperty.call(e, "fileDelete") && l.proto.FileDeleteTransactionBody.encode(e.fileDelete, t.uint32(106).fork()).ldelim(), null != e.fileUpdate && Object.hasOwnProperty.call(e, "fileUpdate") && l.proto.FileUpdateTransactionBody.encode(e.fileUpdate, t.uint32(114).fork()).ldelim(), null != e.systemDelete && Object.hasOwnProperty.call(e, "systemDelete") && l.proto.SystemDeleteTransactionBody.encode(e.systemDelete, t.uint32(122).fork()).ldelim(), null != e.systemUndelete && Object.hasOwnProperty.call(e, "systemUndelete") && l.proto.SystemUndeleteTransactionBody.encode(e.systemUndelete, t.uint32(130).fork()).ldelim(), null != e.freeze && Object.hasOwnProperty.call(e, "freeze") && l.proto.FreezeTransactionBody.encode(e.freeze, t.uint32(138).fork()).ldelim(), null != e.consensusCreateTopic && Object.hasOwnProperty.call(e, "consensusCreateTopic") && l.proto.ConsensusCreateTopicTransactionBody.encode(e.consensusCreateTopic, t.uint32(146).fork()).ldelim(), null != e.consensusUpdateTopic && Object.hasOwnProperty.call(e, "consensusUpdateTopic") && l.proto.ConsensusUpdateTopicTransactionBody.encode(e.consensusUpdateTopic, t.uint32(154).fork()).ldelim(), null != e.consensusDeleteTopic && Object.hasOwnProperty.call(e, "consensusDeleteTopic") && l.proto.ConsensusDeleteTopicTransactionBody.encode(e.consensusDeleteTopic, t.uint32(162).fork()).ldelim(), null != e.consensusSubmitMessage && Object.hasOwnProperty.call(e, "consensusSubmitMessage") && l.proto.ConsensusSubmitMessageTransactionBody.encode(e.consensusSubmitMessage, t.uint32(170).fork()).ldelim(), null != e.tokenCreation && Object.hasOwnProperty.call(e, "tokenCreation") && l.proto.TokenCreateTransactionBody.encode(e.tokenCreation, t.uint32(178).fork()).ldelim(), null != e.tokenFreeze && Object.hasOwnProperty.call(e, "tokenFreeze") && l.proto.TokenFreezeAccountTransactionBody.encode(e.tokenFreeze, t.uint32(186).fork()).ldelim(), null != e.tokenUnfreeze && Object.hasOwnProperty.call(e, "tokenUnfreeze") && l.proto.TokenUnfreezeAccountTransactionBody.encode(e.tokenUnfreeze, t.uint32(194).fork()).ldelim(), null != e.tokenGrantKyc && Object.hasOwnProperty.call(e, "tokenGrantKyc") && l.proto.TokenGrantKycTransactionBody.encode(e.tokenGrantKyc, t.uint32(202).fork()).ldelim(), null != e.tokenRevokeKyc && Object.hasOwnProperty.call(e, "tokenRevokeKyc") && l.proto.TokenRevokeKycTransactionBody.encode(e.tokenRevokeKyc, t.uint32(210).fork()).ldelim(), null != e.tokenDeletion && Object.hasOwnProperty.call(e, "tokenDeletion") && l.proto.TokenDeleteTransactionBody.encode(e.tokenDeletion, t.uint32(218).fork()).ldelim(), null != e.tokenUpdate && Object.hasOwnProperty.call(e, "tokenUpdate") && l.proto.TokenUpdateTransactionBody.encode(e.tokenUpdate, t.uint32(226).fork()).ldelim(), null != e.tokenMint && Object.hasOwnProperty.call(e, "tokenMint") && l.proto.TokenMintTransactionBody.encode(e.tokenMint, t.uint32(234).fork()).ldelim(), null != e.tokenBurn && Object.hasOwnProperty.call(e, "tokenBurn") && l.proto.TokenBurnTransactionBody.encode(e.tokenBurn, t.uint32(242).fork()).ldelim(), null != e.tokenWipe && Object.hasOwnProperty.call(e, "tokenWipe") && l.proto.TokenWipeAccountTransactionBody.encode(e.tokenWipe, t.uint32(250).fork()).ldelim(), null != e.tokenAssociate && Object.hasOwnProperty.call(e, "tokenAssociate") && l.proto.TokenAssociateTransactionBody.encode(e.tokenAssociate, t.uint32(258).fork()).ldelim(), null != e.tokenDissociate && Object.hasOwnProperty.call(e, "tokenDissociate") && l.proto.TokenDissociateTransactionBody.encode(e.tokenDissociate, t.uint32(266).fork()).ldelim(), null != e.scheduleDelete && Object.hasOwnProperty.call(e, "scheduleDelete") && l.proto.ScheduleDeleteTransactionBody.encode(e.scheduleDelete, t.uint32(274).fork()).ldelim(), null != e.tokenPause && Object.hasOwnProperty.call(e, "tokenPause") && l.proto.TokenPauseTransactionBody.encode(e.tokenPause, t.uint32(282).fork()).ldelim(), null != e.tokenUnpause && Object.hasOwnProperty.call(e, "tokenUnpause") && l.proto.TokenUnpauseTransactionBody.encode(e.tokenUnpause, t.uint32(290).fork()).ldelim(), null != e.cryptoApproveAllowance && Object.hasOwnProperty.call(e, "cryptoApproveAllowance") && l.proto.CryptoApproveAllowanceTransactionBody.encode(e.cryptoApproveAllowance, t.uint32(298).fork()).ldelim(), null != e.cryptoDeleteAllowance && Object.hasOwnProperty.call(e, "cryptoDeleteAllowance") && l.proto.CryptoDeleteAllowanceTransactionBody.encode(e.cryptoDeleteAllowance, t.uint32(306).fork()).ldelim(), null != e.tokenFeeScheduleUpdate && Object.hasOwnProperty.call(e, "tokenFeeScheduleUpdate") && l.proto.TokenFeeScheduleUpdateTransactionBody.encode(e.tokenFeeScheduleUpdate, t.uint32(314).fork()).ldelim(), null != e.utilPrng && Object.hasOwnProperty.call(e, "utilPrng") && l.proto.UtilPrngTransactionBody.encode(e.utilPrng, t.uint32(322).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SchedulableTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.transactionFee = e.uint64();
                                        break;
                                    case 2:
                                        n.memo = e.string();
                                        break;
                                    case 3:
                                        n.contractCall = l.proto.ContractCallTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.contractCreateInstance = l.proto.ContractCreateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.contractUpdateInstance = l.proto.ContractUpdateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.contractDeleteInstance = l.proto.ContractDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 37:
                                        n.cryptoApproveAllowance = l.proto.CryptoApproveAllowanceTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 38:
                                        n.cryptoDeleteAllowance = l.proto.CryptoDeleteAllowanceTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.cryptoCreateAccount = l.proto.CryptoCreateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.cryptoDelete = l.proto.CryptoDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.cryptoTransfer = l.proto.CryptoTransferTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.cryptoUpdateAccount = l.proto.CryptoUpdateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.fileAppend = l.proto.FileAppendTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        n.fileCreate = l.proto.FileCreateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        n.fileDelete = l.proto.FileDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 14:
                                        n.fileUpdate = l.proto.FileUpdateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 15:
                                        n.systemDelete = l.proto.SystemDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 16:
                                        n.systemUndelete = l.proto.SystemUndeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 17:
                                        n.freeze = l.proto.FreezeTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 18:
                                        n.consensusCreateTopic = l.proto.ConsensusCreateTopicTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 19:
                                        n.consensusUpdateTopic = l.proto.ConsensusUpdateTopicTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 20:
                                        n.consensusDeleteTopic = l.proto.ConsensusDeleteTopicTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 21:
                                        n.consensusSubmitMessage = l.proto.ConsensusSubmitMessageTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 22:
                                        n.tokenCreation = l.proto.TokenCreateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 23:
                                        n.tokenFreeze = l.proto.TokenFreezeAccountTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 24:
                                        n.tokenUnfreeze = l.proto.TokenUnfreezeAccountTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 25:
                                        n.tokenGrantKyc = l.proto.TokenGrantKycTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 26:
                                        n.tokenRevokeKyc = l.proto.TokenRevokeKycTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 27:
                                        n.tokenDeletion = l.proto.TokenDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 28:
                                        n.tokenUpdate = l.proto.TokenUpdateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 29:
                                        n.tokenMint = l.proto.TokenMintTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 30:
                                        n.tokenBurn = l.proto.TokenBurnTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 31:
                                        n.tokenWipe = l.proto.TokenWipeAccountTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 32:
                                        n.tokenAssociate = l.proto.TokenAssociateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 33:
                                        n.tokenDissociate = l.proto.TokenDissociateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 39:
                                        n.tokenFeeScheduleUpdate = l.proto.TokenFeeScheduleUpdateTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 35:
                                        n.tokenPause = l.proto.TokenPauseTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 36:
                                        n.tokenUnpause = l.proto.TokenUnpauseTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 34:
                                        n.scheduleDelete = l.proto.ScheduleDeleteTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 40:
                                        n.utilPrng = l.proto.UtilPrngTransactionBody.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ScheduleDeleteTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.scheduleID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.scheduleID && Object.hasOwnProperty.call(e, "scheduleID") && l.proto.ScheduleID.encode(e.scheduleID, t.uint32(10).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ScheduleDeleteTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.scheduleID = l.proto.ScheduleID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.UtilPrngTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.range = 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.range && Object.hasOwnProperty.call(e, "range") && t.uint32(8).int32(e.range), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.UtilPrngTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.range = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ScheduleSignTransactionBody = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.scheduleID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.scheduleID && Object.hasOwnProperty.call(e, "scheduleID") && l.proto.ScheduleID.encode(e.scheduleID, t.uint32(10).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ScheduleSignTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.scheduleID = l.proto.ScheduleID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NodeStakeUpdateTransactionBody = function() {
                        function e(e) {
                            if (this.nodeStake = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.endOfStakingPeriod = null, e.prototype.nodeStake = a.emptyArray, e.prototype.maxStakingRewardRatePerHbar = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.nodeRewardFeeFraction = null, e.prototype.stakingPeriodsStored = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.stakingPeriod = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.stakingRewardFeeFraction = null, e.prototype.stakingStartThreshold = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.stakingRewardRate = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.endOfStakingPeriod && Object.hasOwnProperty.call(e, "endOfStakingPeriod") && l.proto.Timestamp.encode(e.endOfStakingPeriod, t.uint32(10).fork()).ldelim(), null != e.nodeStake && e.nodeStake.length)
                                for (var o = 0; o < e.nodeStake.length; ++o) l.proto.NodeStake.encode(e.nodeStake[o], t.uint32(18).fork()).ldelim();
                            return null != e.maxStakingRewardRatePerHbar && Object.hasOwnProperty.call(e, "maxStakingRewardRatePerHbar") && t.uint32(24).int64(e.maxStakingRewardRatePerHbar), null != e.nodeRewardFeeFraction && Object.hasOwnProperty.call(e, "nodeRewardFeeFraction") && l.proto.Fraction.encode(e.nodeRewardFeeFraction, t.uint32(34).fork()).ldelim(), null != e.stakingPeriodsStored && Object.hasOwnProperty.call(e, "stakingPeriodsStored") && t.uint32(40).int64(e.stakingPeriodsStored), null != e.stakingPeriod && Object.hasOwnProperty.call(e, "stakingPeriod") && t.uint32(48).int64(e.stakingPeriod), null != e.stakingRewardFeeFraction && Object.hasOwnProperty.call(e, "stakingRewardFeeFraction") && l.proto.Fraction.encode(e.stakingRewardFeeFraction, t.uint32(58).fork()).ldelim(), null != e.stakingStartThreshold && Object.hasOwnProperty.call(e, "stakingStartThreshold") && t.uint32(64).int64(e.stakingStartThreshold), null != e.stakingRewardRate && Object.hasOwnProperty.call(e, "stakingRewardRate") && t.uint32(72).int64(e.stakingRewardRate), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NodeStakeUpdateTransactionBody; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.endOfStakingPeriod = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.nodeStake && n.nodeStake.length || (n.nodeStake = []), n.nodeStake.push(l.proto.NodeStake.decode(e, e.uint32()));
                                        break;
                                    case 3:
                                        n.maxStakingRewardRatePerHbar = e.int64();
                                        break;
                                    case 4:
                                        n.nodeRewardFeeFraction = l.proto.Fraction.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.stakingPeriodsStored = e.int64();
                                        break;
                                    case 6:
                                        n.stakingPeriod = e.int64();
                                        break;
                                    case 7:
                                        n.stakingRewardFeeFraction = l.proto.Fraction.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.stakingStartThreshold = e.int64();
                                        break;
                                    case 9:
                                        n.stakingRewardRate = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NodeStake = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.maxStake = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.minStake = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.nodeId = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.rewardRate = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.stake = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.stakeNotRewarded = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.stakeRewarded = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.maxStake && Object.hasOwnProperty.call(e, "maxStake") && t.uint32(8).int64(e.maxStake), null != e.minStake && Object.hasOwnProperty.call(e, "minStake") && t.uint32(16).int64(e.minStake), null != e.nodeId && Object.hasOwnProperty.call(e, "nodeId") && t.uint32(24).int64(e.nodeId), null != e.rewardRate && Object.hasOwnProperty.call(e, "rewardRate") && t.uint32(32).int64(e.rewardRate), null != e.stake && Object.hasOwnProperty.call(e, "stake") && t.uint32(40).int64(e.stake), null != e.stakeNotRewarded && Object.hasOwnProperty.call(e, "stakeNotRewarded") && t.uint32(48).int64(e.stakeNotRewarded), null != e.stakeRewarded && Object.hasOwnProperty.call(e, "stakeRewarded") && t.uint32(56).int64(e.stakeRewarded), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NodeStake; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.maxStake = e.int64();
                                        break;
                                    case 2:
                                        n.minStake = e.int64();
                                        break;
                                    case 3:
                                        n.nodeId = e.int64();
                                        break;
                                    case 4:
                                        n.rewardRate = e.int64();
                                        break;
                                    case 5:
                                        n.stake = e.int64();
                                        break;
                                    case 6:
                                        n.stakeNotRewarded = e.int64();
                                        break;
                                    case 7:
                                        n.stakeRewarded = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ResponseHeader = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.nodeTransactionPrecheckCode = 0, e.prototype.responseType = 0, e.prototype.cost = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.stateProof = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.nodeTransactionPrecheckCode && Object.hasOwnProperty.call(e, "nodeTransactionPrecheckCode") && t.uint32(8).int32(e.nodeTransactionPrecheckCode), null != e.responseType && Object.hasOwnProperty.call(e, "responseType") && t.uint32(16).int32(e.responseType), null != e.cost && Object.hasOwnProperty.call(e, "cost") && t.uint32(24).uint64(e.cost), null != e.stateProof && Object.hasOwnProperty.call(e, "stateProof") && t.uint32(34).bytes(e.stateProof), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ResponseHeader; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.nodeTransactionPrecheckCode = e.int32();
                                        break;
                                    case 2:
                                        n.responseType = e.int32();
                                        break;
                                    case 3:
                                        n.cost = e.uint64();
                                        break;
                                    case 4:
                                        n.stateProof = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.nodeTransactionPrecheckCode = 0, e.prototype.cost = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.nodeTransactionPrecheckCode && Object.hasOwnProperty.call(e, "nodeTransactionPrecheckCode") && t.uint32(8).int32(e.nodeTransactionPrecheckCode), null != e.cost && Object.hasOwnProperty.call(e, "cost") && t.uint32(16).uint64(e.cost), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.nodeTransactionPrecheckCode = e.int32();
                                        break;
                                    case 2:
                                        n.cost = e.uint64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ResponseCodeEnum = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "OK"] = 0, t[e[1] = "INVALID_TRANSACTION"] = 1, t[e[2] = "PAYER_ACCOUNT_NOT_FOUND"] = 2, t[e[3] = "INVALID_NODE_ACCOUNT"] = 3, t[e[4] = "TRANSACTION_EXPIRED"] = 4, t[e[5] = "INVALID_TRANSACTION_START"] = 5, t[e[6] = "INVALID_TRANSACTION_DURATION"] = 6, t[e[7] = "INVALID_SIGNATURE"] = 7, t[e[8] = "MEMO_TOO_LONG"] = 8, t[e[9] = "INSUFFICIENT_TX_FEE"] = 9, t[e[10] = "INSUFFICIENT_PAYER_BALANCE"] = 10, t[e[11] = "DUPLICATE_TRANSACTION"] = 11, t[e[12] = "BUSY"] = 12, t[e[13] = "NOT_SUPPORTED"] = 13, t[e[14] = "INVALID_FILE_ID"] = 14, t[e[15] = "INVALID_ACCOUNT_ID"] = 15, t[e[16] = "INVALID_CONTRACT_ID"] = 16, t[e[17] = "INVALID_TRANSACTION_ID"] = 17, t[e[18] = "RECEIPT_NOT_FOUND"] = 18, t[e[19] = "RECORD_NOT_FOUND"] = 19, t[e[20] = "INVALID_SOLIDITY_ID"] = 20, t[e[21] = "UNKNOWN"] = 21, t[e[22] = "SUCCESS"] = 22, t[e[23] = "FAIL_INVALID"] = 23, t[e[24] = "FAIL_FEE"] = 24, t[e[25] = "FAIL_BALANCE"] = 25, t[e[26] = "KEY_REQUIRED"] = 26, t[e[27] = "BAD_ENCODING"] = 27, t[e[28] = "INSUFFICIENT_ACCOUNT_BALANCE"] = 28, t[e[29] = "INVALID_SOLIDITY_ADDRESS"] = 29, t[e[30] = "INSUFFICIENT_GAS"] = 30, t[e[31] = "CONTRACT_SIZE_LIMIT_EXCEEDED"] = 31, t[e[32] = "LOCAL_CALL_MODIFICATION_EXCEPTION"] = 32, t[e[33] = "CONTRACT_REVERT_EXECUTED"] = 33, t[e[34] = "CONTRACT_EXECUTION_EXCEPTION"] = 34, t[e[35] = "INVALID_RECEIVING_NODE_ACCOUNT"] = 35, t[e[36] = "MISSING_QUERY_HEADER"] = 36, t[e[37] = "ACCOUNT_UPDATE_FAILED"] = 37, t[e[38] = "INVALID_KEY_ENCODING"] = 38, t[e[39] = "NULL_SOLIDITY_ADDRESS"] = 39, t[e[40] = "CONTRACT_UPDATE_FAILED"] = 40, t[e[41] = "INVALID_QUERY_HEADER"] = 41, t[e[42] = "INVALID_FEE_SUBMITTED"] = 42, t[e[43] = "INVALID_PAYER_SIGNATURE"] = 43, t[e[44] = "KEY_NOT_PROVIDED"] = 44, t[e[45] = "INVALID_EXPIRATION_TIME"] = 45, t[e[46] = "NO_WACL_KEY"] = 46, t[e[47] = "FILE_CONTENT_EMPTY"] = 47, t[e[48] = "INVALID_ACCOUNT_AMOUNTS"] = 48, t[e[49] = "EMPTY_TRANSACTION_BODY"] = 49, t[e[50] = "INVALID_TRANSACTION_BODY"] = 50, t[e[51] = "INVALID_SIGNATURE_TYPE_MISMATCHING_KEY"] = 51, t[e[52] = "INVALID_SIGNATURE_COUNT_MISMATCHING_KEY"] = 52, t[e[53] = "EMPTY_LIVE_HASH_BODY"] = 53, t[e[54] = "EMPTY_LIVE_HASH"] = 54, t[e[55] = "EMPTY_LIVE_HASH_KEYS"] = 55, t[e[56] = "INVALID_LIVE_HASH_SIZE"] = 56, t[e[57] = "EMPTY_QUERY_BODY"] = 57, t[e[58] = "EMPTY_LIVE_HASH_QUERY"] = 58, t[e[59] = "LIVE_HASH_NOT_FOUND"] = 59, t[e[60] = "ACCOUNT_ID_DOES_NOT_EXIST"] = 60, t[e[61] = "LIVE_HASH_ALREADY_EXISTS"] = 61, t[e[62] = "INVALID_FILE_WACL"] = 62, t[e[63] = "SERIALIZATION_FAILED"] = 63, t[e[64] = "TRANSACTION_OVERSIZE"] = 64, t[e[65] = "TRANSACTION_TOO_MANY_LAYERS"] = 65, t[e[66] = "CONTRACT_DELETED"] = 66, t[e[67] = "PLATFORM_NOT_ACTIVE"] = 67, t[e[68] = "KEY_PREFIX_MISMATCH"] = 68, t[e[69] = "PLATFORM_TRANSACTION_NOT_CREATED"] = 69, t[e[70] = "INVALID_RENEWAL_PERIOD"] = 70, t[e[71] = "INVALID_PAYER_ACCOUNT_ID"] = 71, t[e[72] = "ACCOUNT_DELETED"] = 72, t[e[73] = "FILE_DELETED"] = 73, t[e[74] = "ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS"] = 74, t[e[75] = "SETTING_NEGATIVE_ACCOUNT_BALANCE"] = 75, t[e[76] = "OBTAINER_REQUIRED"] = 76, t[e[77] = "OBTAINER_SAME_CONTRACT_ID"] = 77, t[e[78] = "OBTAINER_DOES_NOT_EXIST"] = 78, t[e[79] = "MODIFYING_IMMUTABLE_CONTRACT"] = 79, t[e[80] = "FILE_SYSTEM_EXCEPTION"] = 80, t[e[81] = "AUTORENEW_DURATION_NOT_IN_RANGE"] = 81, t[e[82] = "ERROR_DECODING_BYTESTRING"] = 82, t[e[83] = "CONTRACT_FILE_EMPTY"] = 83, t[e[84] = "CONTRACT_BYTECODE_EMPTY"] = 84, t[e[85] = "INVALID_INITIAL_BALANCE"] = 85, t[e[86] = "INVALID_RECEIVE_RECORD_THRESHOLD"] = 86, t[e[87] = "INVALID_SEND_RECORD_THRESHOLD"] = 87, t[e[88] = "ACCOUNT_IS_NOT_GENESIS_ACCOUNT"] = 88, t[e[89] = "PAYER_ACCOUNT_UNAUTHORIZED"] = 89, t[e[90] = "INVALID_FREEZE_TRANSACTION_BODY"] = 90, t[e[91] = "FREEZE_TRANSACTION_BODY_NOT_FOUND"] = 91, t[e[92] = "TRANSFER_LIST_SIZE_LIMIT_EXCEEDED"] = 92, t[e[93] = "RESULT_SIZE_LIMIT_EXCEEDED"] = 93, t[e[94] = "NOT_SPECIAL_ACCOUNT"] = 94, t[e[95] = "CONTRACT_NEGATIVE_GAS"] = 95, t[e[96] = "CONTRACT_NEGATIVE_VALUE"] = 96, t[e[97] = "INVALID_FEE_FILE"] = 97, t[e[98] = "INVALID_EXCHANGE_RATE_FILE"] = 98, t[e[99] = "INSUFFICIENT_LOCAL_CALL_GAS"] = 99, t[e[100] = "ENTITY_NOT_ALLOWED_TO_DELETE"] = 100, t[e[101] = "AUTHORIZATION_FAILED"] = 101, t[e[102] = "FILE_UPLOADED_PROTO_INVALID"] = 102, t[e[103] = "FILE_UPLOADED_PROTO_NOT_SAVED_TO_DISK"] = 103, t[e[104] = "FEE_SCHEDULE_FILE_PART_UPLOADED"] = 104, t[e[105] = "EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED"] = 105, t[e[106] = "MAX_CONTRACT_STORAGE_EXCEEDED"] = 106, t[e[107] = "TRANSFER_ACCOUNT_SAME_AS_DELETE_ACCOUNT"] = 107, t[e[108] = "TOTAL_LEDGER_BALANCE_INVALID"] = 108, t[e[110] = "EXPIRATION_REDUCTION_NOT_ALLOWED"] = 110, t[e[111] = "MAX_GAS_LIMIT_EXCEEDED"] = 111, t[e[112] = "MAX_FILE_SIZE_EXCEEDED"] = 112, t[e[113] = "RECEIVER_SIG_REQUIRED"] = 113, t[e[150] = "INVALID_TOPIC_ID"] = 150, t[e[155] = "INVALID_ADMIN_KEY"] = 155, t[e[156] = "INVALID_SUBMIT_KEY"] = 156, t[e[157] = "UNAUTHORIZED"] = 157, t[e[158] = "INVALID_TOPIC_MESSAGE"] = 158, t[e[159] = "INVALID_AUTORENEW_ACCOUNT"] = 159, t[e[160] = "AUTORENEW_ACCOUNT_NOT_ALLOWED"] = 160, t[e[162] = "TOPIC_EXPIRED"] = 162, t[e[163] = "INVALID_CHUNK_NUMBER"] = 163, t[e[164] = "INVALID_CHUNK_TRANSACTION_ID"] = 164, t[e[165] = "ACCOUNT_FROZEN_FOR_TOKEN"] = 165, t[e[166] = "TOKENS_PER_ACCOUNT_LIMIT_EXCEEDED"] = 166, t[e[167] = "INVALID_TOKEN_ID"] = 167, t[e[168] = "INVALID_TOKEN_DECIMALS"] = 168, t[e[169] = "INVALID_TOKEN_INITIAL_SUPPLY"] = 169, t[e[170] = "INVALID_TREASURY_ACCOUNT_FOR_TOKEN"] = 170, t[e[171] = "INVALID_TOKEN_SYMBOL"] = 171, t[e[172] = "TOKEN_HAS_NO_FREEZE_KEY"] = 172, t[e[173] = "TRANSFERS_NOT_ZERO_SUM_FOR_TOKEN"] = 173, t[e[174] = "MISSING_TOKEN_SYMBOL"] = 174, t[e[175] = "TOKEN_SYMBOL_TOO_LONG"] = 175, t[e[176] = "ACCOUNT_KYC_NOT_GRANTED_FOR_TOKEN"] = 176, t[e[177] = "TOKEN_HAS_NO_KYC_KEY"] = 177, t[e[178] = "INSUFFICIENT_TOKEN_BALANCE"] = 178, t[e[179] = "TOKEN_WAS_DELETED"] = 179, t[e[180] = "TOKEN_HAS_NO_SUPPLY_KEY"] = 180, t[e[181] = "TOKEN_HAS_NO_WIPE_KEY"] = 181, t[e[182] = "INVALID_TOKEN_MINT_AMOUNT"] = 182, t[e[183] = "INVALID_TOKEN_BURN_AMOUNT"] = 183, t[e[184] = "TOKEN_NOT_ASSOCIATED_TO_ACCOUNT"] = 184, t[e[185] = "CANNOT_WIPE_TOKEN_TREASURY_ACCOUNT"] = 185, t[e[186] = "INVALID_KYC_KEY"] = 186, t[e[187] = "INVALID_WIPE_KEY"] = 187, t[e[188] = "INVALID_FREEZE_KEY"] = 188, t[e[189] = "INVALID_SUPPLY_KEY"] = 189, t[e[190] = "MISSING_TOKEN_NAME"] = 190, t[e[191] = "TOKEN_NAME_TOO_LONG"] = 191, t[e[192] = "INVALID_WIPING_AMOUNT"] = 192, t[e[193] = "TOKEN_IS_IMMUTABLE"] = 193, t[e[194] = "TOKEN_ALREADY_ASSOCIATED_TO_ACCOUNT"] = 194, t[e[195] = "TRANSACTION_REQUIRES_ZERO_TOKEN_BALANCES"] = 195, t[e[196] = "ACCOUNT_IS_TREASURY"] = 196, t[e[197] = "TOKEN_ID_REPEATED_IN_TOKEN_LIST"] = 197, t[e[198] = "TOKEN_TRANSFER_LIST_SIZE_LIMIT_EXCEEDED"] = 198, t[e[199] = "EMPTY_TOKEN_TRANSFER_BODY"] = 199, t[e[200] = "EMPTY_TOKEN_TRANSFER_ACCOUNT_AMOUNTS"] = 200, t[e[201] = "INVALID_SCHEDULE_ID"] = 201, t[e[202] = "SCHEDULE_IS_IMMUTABLE"] = 202, t[e[203] = "INVALID_SCHEDULE_PAYER_ID"] = 203, t[e[204] = "INVALID_SCHEDULE_ACCOUNT_ID"] = 204, t[e[205] = "NO_NEW_VALID_SIGNATURES"] = 205, t[e[206] = "UNRESOLVABLE_REQUIRED_SIGNERS"] = 206, t[e[207] = "SCHEDULED_TRANSACTION_NOT_IN_WHITELIST"] = 207, t[e[208] = "SOME_SIGNATURES_WERE_INVALID"] = 208, t[e[209] = "TRANSACTION_ID_FIELD_NOT_ALLOWED"] = 209, t[e[210] = "IDENTICAL_SCHEDULE_ALREADY_CREATED"] = 210, t[e[211] = "INVALID_ZERO_BYTE_IN_STRING"] = 211, t[e[212] = "SCHEDULE_ALREADY_DELETED"] = 212, t[e[213] = "SCHEDULE_ALREADY_EXECUTED"] = 213, t[e[214] = "MESSAGE_SIZE_TOO_LARGE"] = 214, t[e[215] = "OPERATION_REPEATED_IN_BUCKET_GROUPS"] = 215, t[e[216] = "BUCKET_CAPACITY_OVERFLOW"] = 216, t[e[217] = "NODE_CAPACITY_NOT_SUFFICIENT_FOR_OPERATION"] = 217, t[e[218] = "BUCKET_HAS_NO_THROTTLE_GROUPS"] = 218, t[e[219] = "THROTTLE_GROUP_HAS_ZERO_OPS_PER_SEC"] = 219, t[e[220] = "SUCCESS_BUT_MISSING_EXPECTED_OPERATION"] = 220, t[e[221] = "UNPARSEABLE_THROTTLE_DEFINITIONS"] = 221, t[e[222] = "INVALID_THROTTLE_DEFINITIONS"] = 222, t[e[223] = "ACCOUNT_EXPIRED_AND_PENDING_REMOVAL"] = 223, t[e[224] = "INVALID_TOKEN_MAX_SUPPLY"] = 224, t[e[225] = "INVALID_TOKEN_NFT_SERIAL_NUMBER"] = 225, t[e[226] = "INVALID_NFT_ID"] = 226, t[e[227] = "METADATA_TOO_LONG"] = 227, t[e[228] = "BATCH_SIZE_LIMIT_EXCEEDED"] = 228, t[e[229] = "INVALID_QUERY_RANGE"] = 229, t[e[230] = "FRACTION_DIVIDES_BY_ZERO"] = 230, t[e[231] = "INSUFFICIENT_PAYER_BALANCE_FOR_CUSTOM_FEE"] = 231, t[e[232] = "CUSTOM_FEES_LIST_TOO_LONG"] = 232, t[e[233] = "INVALID_CUSTOM_FEE_COLLECTOR"] = 233, t[e[234] = "INVALID_TOKEN_ID_IN_CUSTOM_FEES"] = 234, t[e[235] = "TOKEN_NOT_ASSOCIATED_TO_FEE_COLLECTOR"] = 235, t[e[236] = "TOKEN_MAX_SUPPLY_REACHED"] = 236, t[e[237] = "SENDER_DOES_NOT_OWN_NFT_SERIAL_NO"] = 237, t[e[238] = "CUSTOM_FEE_NOT_FULLY_SPECIFIED"] = 238, t[e[239] = "CUSTOM_FEE_MUST_BE_POSITIVE"] = 239, t[e[240] = "TOKEN_HAS_NO_FEE_SCHEDULE_KEY"] = 240, t[e[241] = "CUSTOM_FEE_OUTSIDE_NUMERIC_RANGE"] = 241, t[e[242] = "ROYALTY_FRACTION_CANNOT_EXCEED_ONE"] = 242, t[e[243] = "FRACTIONAL_FEE_MAX_AMOUNT_LESS_THAN_MIN_AMOUNT"] = 243, t[e[244] = "CUSTOM_SCHEDULE_ALREADY_HAS_NO_FEES"] = 244, t[e[245] = "CUSTOM_FEE_DENOMINATION_MUST_BE_FUNGIBLE_COMMON"] = 245, t[e[246] = "CUSTOM_FRACTIONAL_FEE_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON"] = 246, t[e[247] = "INVALID_CUSTOM_FEE_SCHEDULE_KEY"] = 247, t[e[248] = "INVALID_TOKEN_MINT_METADATA"] = 248, t[e[249] = "INVALID_TOKEN_BURN_METADATA"] = 249, t[e[250] = "CURRENT_TREASURY_STILL_OWNS_NFTS"] = 250, t[e[251] = "ACCOUNT_STILL_OWNS_NFTS"] = 251, t[e[252] = "TREASURY_MUST_OWN_BURNED_NFT"] = 252, t[e[253] = "ACCOUNT_DOES_NOT_OWN_WIPED_NFT"] = 253, t[e[254] = "ACCOUNT_AMOUNT_TRANSFERS_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON"] = 254, t[e[255] = "MAX_NFTS_IN_PRICE_REGIME_HAVE_BEEN_MINTED"] = 255, t[e[256] = "PAYER_ACCOUNT_DELETED"] = 256, t[e[257] = "CUSTOM_FEE_CHARGING_EXCEEDED_MAX_RECURSION_DEPTH"] = 257, t[e[258] = "CUSTOM_FEE_CHARGING_EXCEEDED_MAX_ACCOUNT_AMOUNTS"] = 258, t[e[259] = "INSUFFICIENT_SENDER_ACCOUNT_BALANCE_FOR_CUSTOM_FEE"] = 259, t[e[260] = "SERIAL_NUMBER_LIMIT_REACHED"] = 260, t[e[261] = "CUSTOM_ROYALTY_FEE_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE"] = 261, t[e[262] = "NO_REMAINING_AUTOMATIC_ASSOCIATIONS"] = 262, t[e[263] = "EXISTING_AUTOMATIC_ASSOCIATIONS_EXCEED_GIVEN_LIMIT"] = 263, t[e[264] = "REQUESTED_NUM_AUTOMATIC_ASSOCIATIONS_EXCEEDS_ASSOCIATION_LIMIT"] = 264, t[e[265] = "TOKEN_IS_PAUSED"] = 265, t[e[266] = "TOKEN_HAS_NO_PAUSE_KEY"] = 266, t[e[267] = "INVALID_PAUSE_KEY"] = 267, t[e[268] = "FREEZE_UPDATE_FILE_DOES_NOT_EXIST"] = 268, t[e[269] = "FREEZE_UPDATE_FILE_HASH_DOES_NOT_MATCH"] = 269, t[e[270] = "NO_UPGRADE_HAS_BEEN_PREPARED"] = 270, t[e[271] = "NO_FREEZE_IS_SCHEDULED"] = 271, t[e[272] = "UPDATE_FILE_HASH_CHANGED_SINCE_PREPARE_UPGRADE"] = 272, t[e[273] = "FREEZE_START_TIME_MUST_BE_FUTURE"] = 273, t[e[274] = "PREPARED_UPDATE_FILE_IS_IMMUTABLE"] = 274, t[e[275] = "FREEZE_ALREADY_SCHEDULED"] = 275, t[e[276] = "FREEZE_UPGRADE_IN_PROGRESS"] = 276, t[e[277] = "UPDATE_FILE_ID_DOES_NOT_MATCH_PREPARED"] = 277, t[e[278] = "UPDATE_FILE_HASH_DOES_NOT_MATCH_PREPARED"] = 278, t[e[279] = "CONSENSUS_GAS_EXHAUSTED"] = 279, t[e[280] = "REVERTED_SUCCESS"] = 280, t[e[281] = "MAX_STORAGE_IN_PRICE_REGIME_HAS_BEEN_USED"] = 281, t[e[282] = "INVALID_ALIAS_KEY"] = 282, t[e[283] = "UNEXPECTED_TOKEN_DECIMALS"] = 283, t[e[284] = "INVALID_PROXY_ACCOUNT_ID"] = 284, t[e[285] = "INVALID_TRANSFER_ACCOUNT_ID"] = 285, t[e[286] = "INVALID_FEE_COLLECTOR_ACCOUNT_ID"] = 286, t[e[287] = "ALIAS_IS_IMMUTABLE"] = 287, t[e[288] = "SPENDER_ACCOUNT_SAME_AS_OWNER"] = 288, t[e[289] = "AMOUNT_EXCEEDS_TOKEN_MAX_SUPPLY"] = 289, t[e[290] = "NEGATIVE_ALLOWANCE_AMOUNT"] = 290, t[e[291] = "CANNOT_APPROVE_FOR_ALL_FUNGIBLE_COMMON"] = 291, t[e[292] = "SPENDER_DOES_NOT_HAVE_ALLOWANCE"] = 292, t[e[293] = "AMOUNT_EXCEEDS_ALLOWANCE"] = 293, t[e[294] = "MAX_ALLOWANCES_EXCEEDED"] = 294, t[e[295] = "EMPTY_ALLOWANCES"] = 295, t[e[296] = "SPENDER_ACCOUNT_REPEATED_IN_ALLOWANCES"] = 296, t[e[297] = "REPEATED_SERIAL_NUMS_IN_NFT_ALLOWANCES"] = 297, t[e[298] = "FUNGIBLE_TOKEN_IN_NFT_ALLOWANCES"] = 298, t[e[299] = "NFT_IN_FUNGIBLE_TOKEN_ALLOWANCES"] = 299, t[e[300] = "INVALID_ALLOWANCE_OWNER_ID"] = 300, t[e[301] = "INVALID_ALLOWANCE_SPENDER_ID"] = 301, t[e[302] = "REPEATED_ALLOWANCES_TO_DELETE"] = 302, t[e[303] = "INVALID_DELEGATING_SPENDER"] = 303, t[e[304] = "DELEGATING_SPENDER_CANNOT_GRANT_APPROVE_FOR_ALL"] = 304, t[e[305] = "DELEGATING_SPENDER_DOES_NOT_HAVE_APPROVE_FOR_ALL"] = 305, t[e[306] = "SCHEDULE_EXPIRATION_TIME_TOO_FAR_IN_FUTURE"] = 306, t[e[307] = "SCHEDULE_EXPIRATION_TIME_MUST_BE_HIGHER_THAN_CONSENSUS_TIME"] = 307, t[e[308] = "SCHEDULE_FUTURE_THROTTLE_EXCEEDED"] = 308, t[e[309] = "SCHEDULE_FUTURE_GAS_LIMIT_EXCEEDED"] = 309, t[e[310] = "INVALID_ETHEREUM_TRANSACTION"] = 310, t[e[311] = "WRONG_CHAIN_ID"] = 311, t[e[312] = "WRONG_NONCE"] = 312, t[e[313] = "ACCESS_LIST_UNSUPPORTED"] = 313, t[e[314] = "SCHEDULE_PENDING_EXPIRATION"] = 314, t[e[315] = "CONTRACT_IS_TOKEN_TREASURY"] = 315, t[e[316] = "CONTRACT_HAS_NON_ZERO_TOKEN_BALANCES"] = 316, t[e[317] = "CONTRACT_EXPIRED_AND_PENDING_REMOVAL"] = 317, t[e[318] = "CONTRACT_HAS_NO_AUTO_RENEW_ACCOUNT"] = 318, t[e[319] = "PERMANENT_REMOVAL_REQUIRES_SYSTEM_INITIATION"] = 319, t[e[320] = "PROXY_ACCOUNT_ID_FIELD_IS_DEPRECATED"] = 320, t[e[321] = "SELF_STAKING_IS_NOT_ALLOWED"] = 321, t[e[322] = "INVALID_STAKING_ID"] = 322, t[e[323] = "STAKING_NOT_ENABLED"] = 323, t[e[324] = "INVALID_PRNG_RANGE"] = 324, t[e[325] = "MAX_ENTITIES_IN_PRICE_REGIME_HAVE_BEEN_CREATED"] = 325, t[e[326] = "INVALID_FULL_PREFIX_SIGNATURE_FOR_PRECOMPILE"] = 326, t[e[327] = "INSUFFICIENT_BALANCES_FOR_STORAGE_RENT"] = 327, t[e[328] = "MAX_CHILD_RECORDS_EXCEEDED"] = 328, t[e[329] = "INSUFFICIENT_BALANCES_FOR_RENEWAL_FEES"] = 329, t
                    }(), e.ConsensusTopicInfo = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.memo = "", e.prototype.runningHash = a.newBuffer([]), e.prototype.sequenceNumber = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.expirationTime = null, e.prototype.adminKey = null, e.prototype.submitKey = null, e.prototype.autoRenewPeriod = null, e.prototype.autoRenewAccount = null, e.prototype.ledgerId = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(10).string(e.memo), null != e.runningHash && Object.hasOwnProperty.call(e, "runningHash") && t.uint32(18).bytes(e.runningHash), null != e.sequenceNumber && Object.hasOwnProperty.call(e, "sequenceNumber") && t.uint32(24).uint64(e.sequenceNumber), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(34).fork()).ldelim(), null != e.adminKey && Object.hasOwnProperty.call(e, "adminKey") && l.proto.Key.encode(e.adminKey, t.uint32(42).fork()).ldelim(), null != e.submitKey && Object.hasOwnProperty.call(e, "submitKey") && l.proto.Key.encode(e.submitKey, t.uint32(50).fork()).ldelim(), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(58).fork()).ldelim(), null != e.autoRenewAccount && Object.hasOwnProperty.call(e, "autoRenewAccount") && l.proto.AccountID.encode(e.autoRenewAccount, t.uint32(66).fork()).ldelim(), null != e.ledgerId && Object.hasOwnProperty.call(e, "ledgerId") && t.uint32(74).bytes(e.ledgerId), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ConsensusTopicInfo; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.memo = e.string();
                                        break;
                                    case 2:
                                        n.runningHash = e.bytes();
                                        break;
                                    case 3:
                                        n.sequenceNumber = e.uint64();
                                        break;
                                    case 4:
                                        n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.adminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.submitKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.autoRenewAccount = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.ledgerId = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ConsensusService = function() {
                        function e(e, t, o) {
                            n.rpc.Service.call(this, e, t, o)
                        }
                        return (e.prototype = Object.create(n.rpc.Service.prototype)).constructor = e, e.create = function(e, t, o) {
                            return new this(e, t, o)
                        }, Object.defineProperty(e.prototype.createTopic = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "createTopic"
                        }), Object.defineProperty(e.prototype.updateTopic = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "updateTopic"
                        }), Object.defineProperty(e.prototype.deleteTopic = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "deleteTopic"
                        }), Object.defineProperty(e.prototype.getTopicInfo = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getTopicInfo"
                        }), Object.defineProperty(e.prototype.submitMessage = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "submitMessage"
                        }), e
                    }(), e.Query = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.getByKey = null, e.prototype.getBySolidityID = null, e.prototype.contractCallLocal = null, e.prototype.contractGetInfo = null, e.prototype.contractGetBytecode = null, e.prototype.ContractGetRecords = null, e.prototype.cryptogetAccountBalance = null, e.prototype.cryptoGetAccountRecords = null, e.prototype.cryptoGetInfo = null, e.prototype.cryptoGetLiveHash = null, e.prototype.cryptoGetProxyStakers = null, e.prototype.fileGetContents = null, e.prototype.fileGetInfo = null, e.prototype.transactionGetReceipt = null, e.prototype.transactionGetRecord = null, e.prototype.transactionGetFastRecord = null, e.prototype.consensusGetTopicInfo = null, e.prototype.networkGetVersionInfo = null, e.prototype.tokenGetInfo = null, e.prototype.scheduleGetInfo = null, e.prototype.tokenGetAccountNftInfos = null, e.prototype.tokenGetNftInfo = null, e.prototype.tokenGetNftInfos = null, e.prototype.networkGetExecutionTime = null, e.prototype.accountDetails = null, Object.defineProperty(e.prototype, "query", {
                            get: a.oneOfGetter(t = ["getByKey", "getBySolidityID", "contractCallLocal", "contractGetInfo", "contractGetBytecode", "ContractGetRecords", "cryptogetAccountBalance", "cryptoGetAccountRecords", "cryptoGetInfo", "cryptoGetLiveHash", "cryptoGetProxyStakers", "fileGetContents", "fileGetInfo", "transactionGetReceipt", "transactionGetRecord", "transactionGetFastRecord", "consensusGetTopicInfo", "networkGetVersionInfo", "tokenGetInfo", "scheduleGetInfo", "tokenGetAccountNftInfos", "tokenGetNftInfo", "tokenGetNftInfos", "networkGetExecutionTime", "accountDetails"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.getByKey && Object.hasOwnProperty.call(e, "getByKey") && l.proto.GetByKeyQuery.encode(e.getByKey, t.uint32(10).fork()).ldelim(), null != e.getBySolidityID && Object.hasOwnProperty.call(e, "getBySolidityID") && l.proto.GetBySolidityIDQuery.encode(e.getBySolidityID, t.uint32(18).fork()).ldelim(), null != e.contractCallLocal && Object.hasOwnProperty.call(e, "contractCallLocal") && l.proto.ContractCallLocalQuery.encode(e.contractCallLocal, t.uint32(26).fork()).ldelim(), null != e.contractGetInfo && Object.hasOwnProperty.call(e, "contractGetInfo") && l.proto.ContractGetInfoQuery.encode(e.contractGetInfo, t.uint32(34).fork()).ldelim(), null != e.contractGetBytecode && Object.hasOwnProperty.call(e, "contractGetBytecode") && l.proto.ContractGetBytecodeQuery.encode(e.contractGetBytecode, t.uint32(42).fork()).ldelim(), null != e.ContractGetRecords && Object.hasOwnProperty.call(e, "ContractGetRecords") && l.proto.ContractGetRecordsQuery.encode(e.ContractGetRecords, t.uint32(50).fork()).ldelim(), null != e.cryptogetAccountBalance && Object.hasOwnProperty.call(e, "cryptogetAccountBalance") && l.proto.CryptoGetAccountBalanceQuery.encode(e.cryptogetAccountBalance, t.uint32(58).fork()).ldelim(), null != e.cryptoGetAccountRecords && Object.hasOwnProperty.call(e, "cryptoGetAccountRecords") && l.proto.CryptoGetAccountRecordsQuery.encode(e.cryptoGetAccountRecords, t.uint32(66).fork()).ldelim(), null != e.cryptoGetInfo && Object.hasOwnProperty.call(e, "cryptoGetInfo") && l.proto.CryptoGetInfoQuery.encode(e.cryptoGetInfo, t.uint32(74).fork()).ldelim(), null != e.cryptoGetLiveHash && Object.hasOwnProperty.call(e, "cryptoGetLiveHash") && l.proto.CryptoGetLiveHashQuery.encode(e.cryptoGetLiveHash, t.uint32(82).fork()).ldelim(), null != e.cryptoGetProxyStakers && Object.hasOwnProperty.call(e, "cryptoGetProxyStakers") && l.proto.CryptoGetStakersQuery.encode(e.cryptoGetProxyStakers, t.uint32(90).fork()).ldelim(), null != e.fileGetContents && Object.hasOwnProperty.call(e, "fileGetContents") && l.proto.FileGetContentsQuery.encode(e.fileGetContents, t.uint32(98).fork()).ldelim(), null != e.fileGetInfo && Object.hasOwnProperty.call(e, "fileGetInfo") && l.proto.FileGetInfoQuery.encode(e.fileGetInfo, t.uint32(106).fork()).ldelim(), null != e.transactionGetReceipt && Object.hasOwnProperty.call(e, "transactionGetReceipt") && l.proto.TransactionGetReceiptQuery.encode(e.transactionGetReceipt, t.uint32(114).fork()).ldelim(), null != e.transactionGetRecord && Object.hasOwnProperty.call(e, "transactionGetRecord") && l.proto.TransactionGetRecordQuery.encode(e.transactionGetRecord, t.uint32(122).fork()).ldelim(), null != e.transactionGetFastRecord && Object.hasOwnProperty.call(e, "transactionGetFastRecord") && l.proto.TransactionGetFastRecordQuery.encode(e.transactionGetFastRecord, t.uint32(130).fork()).ldelim(), null != e.consensusGetTopicInfo && Object.hasOwnProperty.call(e, "consensusGetTopicInfo") && l.proto.ConsensusGetTopicInfoQuery.encode(e.consensusGetTopicInfo, t.uint32(402).fork()).ldelim(), null != e.networkGetVersionInfo && Object.hasOwnProperty.call(e, "networkGetVersionInfo") && l.proto.NetworkGetVersionInfoQuery.encode(e.networkGetVersionInfo, t.uint32(410).fork()).ldelim(), null != e.tokenGetInfo && Object.hasOwnProperty.call(e, "tokenGetInfo") && l.proto.TokenGetInfoQuery.encode(e.tokenGetInfo, t.uint32(418).fork()).ldelim(), null != e.scheduleGetInfo && Object.hasOwnProperty.call(e, "scheduleGetInfo") && l.proto.ScheduleGetInfoQuery.encode(e.scheduleGetInfo, t.uint32(426).fork()).ldelim(), null != e.tokenGetAccountNftInfos && Object.hasOwnProperty.call(e, "tokenGetAccountNftInfos") && l.proto.TokenGetAccountNftInfosQuery.encode(e.tokenGetAccountNftInfos, t.uint32(434).fork()).ldelim(), null != e.tokenGetNftInfo && Object.hasOwnProperty.call(e, "tokenGetNftInfo") && l.proto.TokenGetNftInfoQuery.encode(e.tokenGetNftInfo, t.uint32(442).fork()).ldelim(), null != e.tokenGetNftInfos && Object.hasOwnProperty.call(e, "tokenGetNftInfos") && l.proto.TokenGetNftInfosQuery.encode(e.tokenGetNftInfos, t.uint32(450).fork()).ldelim(), null != e.networkGetExecutionTime && Object.hasOwnProperty.call(e, "networkGetExecutionTime") && l.proto.NetworkGetExecutionTimeQuery.encode(e.networkGetExecutionTime, t.uint32(458).fork()).ldelim(), null != e.accountDetails && Object.hasOwnProperty.call(e, "accountDetails") && l.proto.GetAccountDetailsQuery.encode(e.accountDetails, t.uint32(466).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.Query; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.getByKey = l.proto.GetByKeyQuery.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.getBySolidityID = l.proto.GetBySolidityIDQuery.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.contractCallLocal = l.proto.ContractCallLocalQuery.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.contractGetInfo = l.proto.ContractGetInfoQuery.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.contractGetBytecode = l.proto.ContractGetBytecodeQuery.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.ContractGetRecords = l.proto.ContractGetRecordsQuery.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.cryptogetAccountBalance = l.proto.CryptoGetAccountBalanceQuery.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.cryptoGetAccountRecords = l.proto.CryptoGetAccountRecordsQuery.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.cryptoGetInfo = l.proto.CryptoGetInfoQuery.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.cryptoGetLiveHash = l.proto.CryptoGetLiveHashQuery.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.cryptoGetProxyStakers = l.proto.CryptoGetStakersQuery.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        n.fileGetContents = l.proto.FileGetContentsQuery.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        n.fileGetInfo = l.proto.FileGetInfoQuery.decode(e, e.uint32());
                                        break;
                                    case 14:
                                        n.transactionGetReceipt = l.proto.TransactionGetReceiptQuery.decode(e, e.uint32());
                                        break;
                                    case 15:
                                        n.transactionGetRecord = l.proto.TransactionGetRecordQuery.decode(e, e.uint32());
                                        break;
                                    case 16:
                                        n.transactionGetFastRecord = l.proto.TransactionGetFastRecordQuery.decode(e, e.uint32());
                                        break;
                                    case 50:
                                        n.consensusGetTopicInfo = l.proto.ConsensusGetTopicInfoQuery.decode(e, e.uint32());
                                        break;
                                    case 51:
                                        n.networkGetVersionInfo = l.proto.NetworkGetVersionInfoQuery.decode(e, e.uint32());
                                        break;
                                    case 52:
                                        n.tokenGetInfo = l.proto.TokenGetInfoQuery.decode(e, e.uint32());
                                        break;
                                    case 53:
                                        n.scheduleGetInfo = l.proto.ScheduleGetInfoQuery.decode(e, e.uint32());
                                        break;
                                    case 54:
                                        n.tokenGetAccountNftInfos = l.proto.TokenGetAccountNftInfosQuery.decode(e, e.uint32());
                                        break;
                                    case 55:
                                        n.tokenGetNftInfo = l.proto.TokenGetNftInfoQuery.decode(e, e.uint32());
                                        break;
                                    case 56:
                                        n.tokenGetNftInfos = l.proto.TokenGetNftInfosQuery.decode(e, e.uint32());
                                        break;
                                    case 57:
                                        n.networkGetExecutionTime = l.proto.NetworkGetExecutionTimeQuery.decode(e, e.uint32());
                                        break;
                                    case 58:
                                        n.accountDetails = l.proto.GetAccountDetailsQuery.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.GetByKeyQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.key = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.key && Object.hasOwnProperty.call(e, "key") && l.proto.Key.encode(e.key, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.GetByKeyQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.key = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.EntityID = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.accountID = null, e.prototype.liveHash = null, e.prototype.fileID = null, e.prototype.contractID = null, Object.defineProperty(e.prototype, "entity", {
                            get: a.oneOfGetter(t = ["accountID", "liveHash", "fileID", "contractID"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(10).fork()).ldelim(), null != e.liveHash && Object.hasOwnProperty.call(e, "liveHash") && l.proto.LiveHash.encode(e.liveHash, t.uint32(18).fork()).ldelim(), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(26).fork()).ldelim(), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(34).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.EntityID; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.liveHash = l.proto.LiveHash.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.GetByKeyResponse = function() {
                        function e(e) {
                            if (this.entities = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.entities = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.entities && e.entities.length)
                                for (var o = 0; o < e.entities.length; ++o) l.proto.EntityID.encode(e.entities[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.GetByKeyResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.entities && n.entities.length || (n.entities = []), n.entities.push(l.proto.EntityID.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.GetBySolidityIDQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.solidityID = "", e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.solidityID && Object.hasOwnProperty.call(e, "solidityID") && t.uint32(18).string(e.solidityID), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.GetBySolidityIDQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.solidityID = e.string();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.GetBySolidityIDResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.accountID = null, e.prototype.fileID = null, e.prototype.contractID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(26).fork()).ldelim(), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(34).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.GetBySolidityIDResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractLoginfo = function() {
                        function e(e) {
                            if (this.topic = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.contractID = null, e.prototype.bloom = a.newBuffer([]), e.prototype.topic = a.emptyArray, e.prototype.data = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(10).fork()).ldelim(), null != e.bloom && Object.hasOwnProperty.call(e, "bloom") && t.uint32(18).bytes(e.bloom), null != e.topic && e.topic.length)
                                for (var o = 0; o < e.topic.length; ++o) t.uint32(26).bytes(e.topic[o]);
                            return null != e.data && Object.hasOwnProperty.call(e, "data") && t.uint32(34).bytes(e.data), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractLoginfo; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.bloom = e.bytes();
                                        break;
                                    case 3:
                                        n.topic && n.topic.length || (n.topic = []), n.topic.push(e.bytes());
                                        break;
                                    case 4:
                                        n.data = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractFunctionResult = function() {
                        function e(e) {
                            if (this.logInfo = [], this.createdContractIDs = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.contractID = null, e.prototype.contractCallResult = a.newBuffer([]), e.prototype.errorMessage = "", e.prototype.bloom = a.newBuffer([]), e.prototype.gasUsed = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.logInfo = a.emptyArray, e.prototype.createdContractIDs = a.emptyArray, e.prototype.evmAddress = null, e.prototype.gas = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.functionParameters = a.newBuffer([]), e.prototype.senderId = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(10).fork()).ldelim(), null != e.contractCallResult && Object.hasOwnProperty.call(e, "contractCallResult") && t.uint32(18).bytes(e.contractCallResult), null != e.errorMessage && Object.hasOwnProperty.call(e, "errorMessage") && t.uint32(26).string(e.errorMessage), null != e.bloom && Object.hasOwnProperty.call(e, "bloom") && t.uint32(34).bytes(e.bloom), null != e.gasUsed && Object.hasOwnProperty.call(e, "gasUsed") && t.uint32(40).uint64(e.gasUsed), null != e.logInfo && e.logInfo.length)
                                for (var o = 0; o < e.logInfo.length; ++o) l.proto.ContractLoginfo.encode(e.logInfo[o], t.uint32(50).fork()).ldelim();
                            if (null != e.createdContractIDs && e.createdContractIDs.length)
                                for (o = 0; o < e.createdContractIDs.length; ++o) l.proto.ContractID.encode(e.createdContractIDs[o], t.uint32(58).fork()).ldelim();
                            return null != e.evmAddress && Object.hasOwnProperty.call(e, "evmAddress") && l.google.protobuf.BytesValue.encode(e.evmAddress, t.uint32(74).fork()).ldelim(), null != e.gas && Object.hasOwnProperty.call(e, "gas") && t.uint32(80).int64(e.gas), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(88).int64(e.amount), null != e.functionParameters && Object.hasOwnProperty.call(e, "functionParameters") && t.uint32(98).bytes(e.functionParameters), null != e.senderId && Object.hasOwnProperty.call(e, "senderId") && l.proto.AccountID.encode(e.senderId, t.uint32(106).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractFunctionResult; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.contractCallResult = e.bytes();
                                        break;
                                    case 3:
                                        n.errorMessage = e.string();
                                        break;
                                    case 4:
                                        n.bloom = e.bytes();
                                        break;
                                    case 5:
                                        n.gasUsed = e.uint64();
                                        break;
                                    case 6:
                                        n.logInfo && n.logInfo.length || (n.logInfo = []), n.logInfo.push(l.proto.ContractLoginfo.decode(e, e.uint32()));
                                        break;
                                    case 7:
                                        n.createdContractIDs && n.createdContractIDs.length || (n.createdContractIDs = []), n.createdContractIDs.push(l.proto.ContractID.decode(e, e.uint32()));
                                        break;
                                    case 9:
                                        n.evmAddress = l.google.protobuf.BytesValue.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.gas = e.int64();
                                        break;
                                    case 11:
                                        n.amount = e.int64();
                                        break;
                                    case 12:
                                        n.functionParameters = e.bytes();
                                        break;
                                    case 13:
                                        n.senderId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractCallLocalQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.contractID = null, e.prototype.gas = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.functionParameters = a.newBuffer([]), e.prototype.maxResultSize = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.senderId = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(18).fork()).ldelim(), null != e.gas && Object.hasOwnProperty.call(e, "gas") && t.uint32(24).int64(e.gas), null != e.functionParameters && Object.hasOwnProperty.call(e, "functionParameters") && t.uint32(34).bytes(e.functionParameters), null != e.maxResultSize && Object.hasOwnProperty.call(e, "maxResultSize") && t.uint32(40).int64(e.maxResultSize), null != e.senderId && Object.hasOwnProperty.call(e, "senderId") && l.proto.AccountID.encode(e.senderId, t.uint32(50).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractCallLocalQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.gas = e.int64();
                                        break;
                                    case 4:
                                        n.functionParameters = e.bytes();
                                        break;
                                    case 5:
                                        n.maxResultSize = e.int64();
                                        break;
                                    case 6:
                                        n.senderId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractCallLocalResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.functionResult = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.functionResult && Object.hasOwnProperty.call(e, "functionResult") && l.proto.ContractFunctionResult.encode(e.functionResult, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractCallLocalResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.functionResult = l.proto.ContractFunctionResult.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractGetInfoQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.contractID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractGetInfoQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractGetInfoResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.contractInfo = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.contractInfo && Object.hasOwnProperty.call(e, "contractInfo") && l.proto.ContractGetInfoResponse.ContractInfo.encode(e.contractInfo, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractGetInfoResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.contractInfo = l.proto.ContractGetInfoResponse.ContractInfo.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e.ContractInfo = function() {
                            function e(e) {
                                if (this.tokenRelationships = [], e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.contractID = null, e.prototype.accountID = null, e.prototype.contractAccountID = "", e.prototype.adminKey = null, e.prototype.expirationTime = null, e.prototype.autoRenewPeriod = null, e.prototype.storage = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.memo = "", e.prototype.balance = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.deleted = !1, e.prototype.tokenRelationships = a.emptyArray, e.prototype.ledgerId = a.newBuffer([]), e.prototype.autoRenewAccountId = null, e.prototype.maxAutomaticTokenAssociations = 0, e.prototype.stakingInfo = null, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = c.create()), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), null != e.contractAccountID && Object.hasOwnProperty.call(e, "contractAccountID") && t.uint32(26).string(e.contractAccountID), null != e.adminKey && Object.hasOwnProperty.call(e, "adminKey") && l.proto.Key.encode(e.adminKey, t.uint32(34).fork()).ldelim(), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(42).fork()).ldelim(), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(50).fork()).ldelim(), null != e.storage && Object.hasOwnProperty.call(e, "storage") && t.uint32(56).int64(e.storage), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(66).string(e.memo), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(72).uint64(e.balance), null != e.deleted && Object.hasOwnProperty.call(e, "deleted") && t.uint32(80).bool(e.deleted), null != e.tokenRelationships && e.tokenRelationships.length)
                                    for (var o = 0; o < e.tokenRelationships.length; ++o) l.proto.TokenRelationship.encode(e.tokenRelationships[o], t.uint32(90).fork()).ldelim();
                                return null != e.ledgerId && Object.hasOwnProperty.call(e, "ledgerId") && t.uint32(98).bytes(e.ledgerId), null != e.autoRenewAccountId && Object.hasOwnProperty.call(e, "autoRenewAccountId") && l.proto.AccountID.encode(e.autoRenewAccountId, t.uint32(106).fork()).ldelim(), null != e.maxAutomaticTokenAssociations && Object.hasOwnProperty.call(e, "maxAutomaticTokenAssociations") && t.uint32(112).int32(e.maxAutomaticTokenAssociations), null != e.stakingInfo && Object.hasOwnProperty.call(e, "stakingInfo") && l.proto.StakingInfo.encode(e.stakingInfo, t.uint32(122).fork()).ldelim(), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractGetInfoResponse.ContractInfo; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                            break;
                                        case 3:
                                            n.contractAccountID = e.string();
                                            break;
                                        case 4:
                                            n.adminKey = l.proto.Key.decode(e, e.uint32());
                                            break;
                                        case 5:
                                            n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                            break;
                                        case 6:
                                            n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                            break;
                                        case 7:
                                            n.storage = e.int64();
                                            break;
                                        case 8:
                                            n.memo = e.string();
                                            break;
                                        case 9:
                                            n.balance = e.uint64();
                                            break;
                                        case 10:
                                            n.deleted = e.bool();
                                            break;
                                        case 11:
                                            n.tokenRelationships && n.tokenRelationships.length || (n.tokenRelationships = []), n.tokenRelationships.push(l.proto.TokenRelationship.decode(e, e.uint32()));
                                            break;
                                        case 12:
                                            n.ledgerId = e.bytes();
                                            break;
                                        case 13:
                                            n.autoRenewAccountId = l.proto.AccountID.decode(e, e.uint32());
                                            break;
                                        case 14:
                                            n.maxAutomaticTokenAssociations = e.int32();
                                            break;
                                        case 15:
                                            n.stakingInfo = l.proto.StakingInfo.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e
                    }(), e.ContractGetBytecodeQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.contractID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractGetBytecodeQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractGetBytecodeResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.bytecode = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.bytecode && Object.hasOwnProperty.call(e, "bytecode") && t.uint32(50).bytes(e.bytecode), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractGetBytecodeResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.bytecode = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractGetRecordsQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.contractID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractGetRecordsQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractGetRecordsResponse = function() {
                        function e(e) {
                            if (this.records = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.contractID = null, e.prototype.records = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(18).fork()).ldelim(), null != e.records && e.records.length)
                                for (var o = 0; o < e.records.length; ++o) l.proto.TransactionRecord.encode(e.records[o], t.uint32(26).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractGetRecordsResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.records && n.records.length || (n.records = []), n.records.push(l.proto.TransactionRecord.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionRecord = function() {
                        function e(e) {
                            if (this.tokenTransferLists = [], this.assessedCustomFees = [], this.automaticTokenAssociations = [], this.paidStakingRewards = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.receipt = null, e.prototype.transactionHash = a.newBuffer([]), e.prototype.consensusTimestamp = null, e.prototype.transactionID = null, e.prototype.memo = "", e.prototype.transactionFee = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.contractCallResult = null, e.prototype.contractCreateResult = null, e.prototype.transferList = null, e.prototype.tokenTransferLists = a.emptyArray, e.prototype.scheduleRef = null, e.prototype.assessedCustomFees = a.emptyArray, e.prototype.automaticTokenAssociations = a.emptyArray, e.prototype.parentConsensusTimestamp = null, e.prototype.alias = a.newBuffer([]), e.prototype.ethereumHash = a.newBuffer([]), e.prototype.paidStakingRewards = a.emptyArray, e.prototype.prngBytes = null, e.prototype.prngNumber = null, Object.defineProperty(e.prototype, "body", {
                            get: a.oneOfGetter(t = ["contractCallResult", "contractCreateResult"]),
                            set: a.oneOfSetter(t)
                        }), Object.defineProperty(e.prototype, "entropy", {
                            get: a.oneOfGetter(t = ["prngBytes", "prngNumber"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.receipt && Object.hasOwnProperty.call(e, "receipt") && l.proto.TransactionReceipt.encode(e.receipt, t.uint32(10).fork()).ldelim(), null != e.transactionHash && Object.hasOwnProperty.call(e, "transactionHash") && t.uint32(18).bytes(e.transactionHash), null != e.consensusTimestamp && Object.hasOwnProperty.call(e, "consensusTimestamp") && l.proto.Timestamp.encode(e.consensusTimestamp, t.uint32(26).fork()).ldelim(), null != e.transactionID && Object.hasOwnProperty.call(e, "transactionID") && l.proto.TransactionID.encode(e.transactionID, t.uint32(34).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(42).string(e.memo), null != e.transactionFee && Object.hasOwnProperty.call(e, "transactionFee") && t.uint32(48).uint64(e.transactionFee), null != e.contractCallResult && Object.hasOwnProperty.call(e, "contractCallResult") && l.proto.ContractFunctionResult.encode(e.contractCallResult, t.uint32(58).fork()).ldelim(), null != e.contractCreateResult && Object.hasOwnProperty.call(e, "contractCreateResult") && l.proto.ContractFunctionResult.encode(e.contractCreateResult, t.uint32(66).fork()).ldelim(), null != e.transferList && Object.hasOwnProperty.call(e, "transferList") && l.proto.TransferList.encode(e.transferList, t.uint32(82).fork()).ldelim(), null != e.tokenTransferLists && e.tokenTransferLists.length)
                                for (var o = 0; o < e.tokenTransferLists.length; ++o) l.proto.TokenTransferList.encode(e.tokenTransferLists[o], t.uint32(90).fork()).ldelim();
                            if (null != e.scheduleRef && Object.hasOwnProperty.call(e, "scheduleRef") && l.proto.ScheduleID.encode(e.scheduleRef, t.uint32(98).fork()).ldelim(), null != e.assessedCustomFees && e.assessedCustomFees.length)
                                for (o = 0; o < e.assessedCustomFees.length; ++o) l.proto.AssessedCustomFee.encode(e.assessedCustomFees[o], t.uint32(106).fork()).ldelim();
                            if (null != e.automaticTokenAssociations && e.automaticTokenAssociations.length)
                                for (o = 0; o < e.automaticTokenAssociations.length; ++o) l.proto.TokenAssociation.encode(e.automaticTokenAssociations[o], t.uint32(114).fork()).ldelim();
                            if (null != e.parentConsensusTimestamp && Object.hasOwnProperty.call(e, "parentConsensusTimestamp") && l.proto.Timestamp.encode(e.parentConsensusTimestamp, t.uint32(122).fork()).ldelim(), null != e.alias && Object.hasOwnProperty.call(e, "alias") && t.uint32(130).bytes(e.alias), null != e.ethereumHash && Object.hasOwnProperty.call(e, "ethereumHash") && t.uint32(138).bytes(e.ethereumHash), null != e.paidStakingRewards && e.paidStakingRewards.length)
                                for (o = 0; o < e.paidStakingRewards.length; ++o) l.proto.AccountAmount.encode(e.paidStakingRewards[o], t.uint32(146).fork()).ldelim();
                            return null != e.prngBytes && Object.hasOwnProperty.call(e, "prngBytes") && t.uint32(154).bytes(e.prngBytes), null != e.prngNumber && Object.hasOwnProperty.call(e, "prngNumber") && t.uint32(160).int32(e.prngNumber), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionRecord; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.receipt = l.proto.TransactionReceipt.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.transactionHash = e.bytes();
                                        break;
                                    case 3:
                                        n.consensusTimestamp = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.transactionID = l.proto.TransactionID.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.memo = e.string();
                                        break;
                                    case 6:
                                        n.transactionFee = e.uint64();
                                        break;
                                    case 7:
                                        n.contractCallResult = l.proto.ContractFunctionResult.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.contractCreateResult = l.proto.ContractFunctionResult.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.transferList = l.proto.TransferList.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.tokenTransferLists && n.tokenTransferLists.length || (n.tokenTransferLists = []), n.tokenTransferLists.push(l.proto.TokenTransferList.decode(e, e.uint32()));
                                        break;
                                    case 12:
                                        n.scheduleRef = l.proto.ScheduleID.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        n.assessedCustomFees && n.assessedCustomFees.length || (n.assessedCustomFees = []), n.assessedCustomFees.push(l.proto.AssessedCustomFee.decode(e, e.uint32()));
                                        break;
                                    case 14:
                                        n.automaticTokenAssociations && n.automaticTokenAssociations.length || (n.automaticTokenAssociations = []), n.automaticTokenAssociations.push(l.proto.TokenAssociation.decode(e, e.uint32()));
                                        break;
                                    case 15:
                                        n.parentConsensusTimestamp = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 16:
                                        n.alias = e.bytes();
                                        break;
                                    case 17:
                                        n.ethereumHash = e.bytes();
                                        break;
                                    case 18:
                                        n.paidStakingRewards && n.paidStakingRewards.length || (n.paidStakingRewards = []), n.paidStakingRewards.push(l.proto.AccountAmount.decode(e, e.uint32()));
                                        break;
                                    case 19:
                                        n.prngBytes = e.bytes();
                                        break;
                                    case 20:
                                        n.prngNumber = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionReceipt = function() {
                        function e(e) {
                            if (this.serialNumbers = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.status = 0, e.prototype.accountID = null, e.prototype.fileID = null, e.prototype.contractID = null, e.prototype.exchangeRate = null, e.prototype.topicID = null, e.prototype.topicSequenceNumber = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.topicRunningHash = a.newBuffer([]), e.prototype.topicRunningHashVersion = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.tokenID = null, e.prototype.newTotalSupply = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.scheduleID = null, e.prototype.scheduledTransactionID = null, e.prototype.serialNumbers = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(8).int32(e.status), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(26).fork()).ldelim(), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(34).fork()).ldelim(), null != e.exchangeRate && Object.hasOwnProperty.call(e, "exchangeRate") && l.proto.ExchangeRateSet.encode(e.exchangeRate, t.uint32(42).fork()).ldelim(), null != e.topicID && Object.hasOwnProperty.call(e, "topicID") && l.proto.TopicID.encode(e.topicID, t.uint32(50).fork()).ldelim(), null != e.topicSequenceNumber && Object.hasOwnProperty.call(e, "topicSequenceNumber") && t.uint32(56).uint64(e.topicSequenceNumber), null != e.topicRunningHash && Object.hasOwnProperty.call(e, "topicRunningHash") && t.uint32(66).bytes(e.topicRunningHash), null != e.topicRunningHashVersion && Object.hasOwnProperty.call(e, "topicRunningHashVersion") && t.uint32(72).uint64(e.topicRunningHashVersion), null != e.tokenID && Object.hasOwnProperty.call(e, "tokenID") && l.proto.TokenID.encode(e.tokenID, t.uint32(82).fork()).ldelim(), null != e.newTotalSupply && Object.hasOwnProperty.call(e, "newTotalSupply") && t.uint32(88).uint64(e.newTotalSupply), null != e.scheduleID && Object.hasOwnProperty.call(e, "scheduleID") && l.proto.ScheduleID.encode(e.scheduleID, t.uint32(98).fork()).ldelim(), null != e.scheduledTransactionID && Object.hasOwnProperty.call(e, "scheduledTransactionID") && l.proto.TransactionID.encode(e.scheduledTransactionID, t.uint32(106).fork()).ldelim(), null != e.serialNumbers && e.serialNumbers.length) {
                                t.uint32(114).fork();
                                for (var o = 0; o < e.serialNumbers.length; ++o) t.int64(e.serialNumbers[o]);
                                t.ldelim()
                            }
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionReceipt; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.status = e.int32();
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.exchangeRate = l.proto.ExchangeRateSet.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.topicID = l.proto.TopicID.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.topicSequenceNumber = e.uint64();
                                        break;
                                    case 8:
                                        n.topicRunningHash = e.bytes();
                                        break;
                                    case 9:
                                        n.topicRunningHashVersion = e.uint64();
                                        break;
                                    case 10:
                                        n.tokenID = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.newTotalSupply = e.uint64();
                                        break;
                                    case 12:
                                        n.scheduleID = l.proto.ScheduleID.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        n.scheduledTransactionID = l.proto.TransactionID.decode(e, e.uint32());
                                        break;
                                    case 14:
                                        if (n.serialNumbers && n.serialNumbers.length || (n.serialNumbers = []), 2 == (7 & c))
                                            for (var a = e.uint32() + e.pos; e.pos < a;) n.serialNumbers.push(e.int64());
                                        else n.serialNumbers.push(e.int64());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ExchangeRate = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.hbarEquiv = 0, e.prototype.centEquiv = 0, e.prototype.expirationTime = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.hbarEquiv && Object.hasOwnProperty.call(e, "hbarEquiv") && t.uint32(8).int32(e.hbarEquiv), null != e.centEquiv && Object.hasOwnProperty.call(e, "centEquiv") && t.uint32(16).int32(e.centEquiv), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.TimestampSeconds.encode(e.expirationTime, t.uint32(26).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ExchangeRate; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.hbarEquiv = e.int32();
                                        break;
                                    case 2:
                                        n.centEquiv = e.int32();
                                        break;
                                    case 3:
                                        n.expirationTime = l.proto.TimestampSeconds.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ExchangeRateSet = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.currentRate = null, e.prototype.nextRate = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.currentRate && Object.hasOwnProperty.call(e, "currentRate") && l.proto.ExchangeRate.encode(e.currentRate, t.uint32(10).fork()).ldelim(), null != e.nextRate && Object.hasOwnProperty.call(e, "nextRate") && l.proto.ExchangeRate.encode(e.nextRate, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ExchangeRateSet; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.currentRate = l.proto.ExchangeRate.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.nextRate = l.proto.ExchangeRate.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoGetAccountBalanceQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.header = null, e.prototype.accountID = null, e.prototype.contractID = null, Object.defineProperty(e.prototype, "balanceSource", {
                            get: a.oneOfGetter(t = ["accountID", "contractID"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), null != e.contractID && Object.hasOwnProperty.call(e, "contractID") && l.proto.ContractID.encode(e.contractID, t.uint32(26).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoGetAccountBalanceQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.contractID = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoGetAccountBalanceResponse = function() {
                        function e(e) {
                            if (this.tokenBalances = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.accountID = null, e.prototype.balance = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.tokenBalances = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(24).uint64(e.balance), null != e.tokenBalances && e.tokenBalances.length)
                                for (var o = 0; o < e.tokenBalances.length; ++o) l.proto.TokenBalance.encode(e.tokenBalances[o], t.uint32(34).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoGetAccountBalanceResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.balance = e.uint64();
                                        break;
                                    case 4:
                                        n.tokenBalances && n.tokenBalances.length || (n.tokenBalances = []), n.tokenBalances.push(l.proto.TokenBalance.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoGetAccountRecordsQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.accountID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoGetAccountRecordsQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoGetAccountRecordsResponse = function() {
                        function e(e) {
                            if (this.records = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.accountID = null, e.prototype.records = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), null != e.records && e.records.length)
                                for (var o = 0; o < e.records.length; ++o) l.proto.TransactionRecord.encode(e.records[o], t.uint32(26).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoGetAccountRecordsResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.records && n.records.length || (n.records = []), n.records.push(l.proto.TransactionRecord.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoGetInfoQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.accountID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoGetInfoQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoGetInfoResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.accountInfo = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountInfo && Object.hasOwnProperty.call(e, "accountInfo") && l.proto.CryptoGetInfoResponse.AccountInfo.encode(e.accountInfo, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoGetInfoResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountInfo = l.proto.CryptoGetInfoResponse.AccountInfo.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e.AccountInfo = function() {
                            function e(e) {
                                if (this.liveHashes = [], this.tokenRelationships = [], e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.accountID = null, e.prototype.contractAccountID = "", e.prototype.deleted = !1, e.prototype.proxyAccountID = null, e.prototype.proxyReceived = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.key = null, e.prototype.balance = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.generateSendRecordThreshold = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.generateReceiveRecordThreshold = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.receiverSigRequired = !1, e.prototype.expirationTime = null, e.prototype.autoRenewPeriod = null, e.prototype.liveHashes = a.emptyArray, e.prototype.tokenRelationships = a.emptyArray, e.prototype.memo = "", e.prototype.ownedNfts = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.maxAutomaticTokenAssociations = 0, e.prototype.alias = a.newBuffer([]), e.prototype.ledgerId = a.newBuffer([]), e.prototype.ethereumNonce = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.stakingInfo = null, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = c.create()), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(10).fork()).ldelim(), null != e.contractAccountID && Object.hasOwnProperty.call(e, "contractAccountID") && t.uint32(18).string(e.contractAccountID), null != e.deleted && Object.hasOwnProperty.call(e, "deleted") && t.uint32(24).bool(e.deleted), null != e.proxyAccountID && Object.hasOwnProperty.call(e, "proxyAccountID") && l.proto.AccountID.encode(e.proxyAccountID, t.uint32(34).fork()).ldelim(), null != e.proxyReceived && Object.hasOwnProperty.call(e, "proxyReceived") && t.uint32(48).int64(e.proxyReceived), null != e.key && Object.hasOwnProperty.call(e, "key") && l.proto.Key.encode(e.key, t.uint32(58).fork()).ldelim(), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(64).uint64(e.balance), null != e.generateSendRecordThreshold && Object.hasOwnProperty.call(e, "generateSendRecordThreshold") && t.uint32(72).uint64(e.generateSendRecordThreshold), null != e.generateReceiveRecordThreshold && Object.hasOwnProperty.call(e, "generateReceiveRecordThreshold") && t.uint32(80).uint64(e.generateReceiveRecordThreshold), null != e.receiverSigRequired && Object.hasOwnProperty.call(e, "receiverSigRequired") && t.uint32(88).bool(e.receiverSigRequired), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(98).fork()).ldelim(), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(106).fork()).ldelim(), null != e.liveHashes && e.liveHashes.length)
                                    for (var o = 0; o < e.liveHashes.length; ++o) l.proto.LiveHash.encode(e.liveHashes[o], t.uint32(114).fork()).ldelim();
                                if (null != e.tokenRelationships && e.tokenRelationships.length)
                                    for (o = 0; o < e.tokenRelationships.length; ++o) l.proto.TokenRelationship.encode(e.tokenRelationships[o], t.uint32(122).fork()).ldelim();
                                return null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(130).string(e.memo), null != e.ownedNfts && Object.hasOwnProperty.call(e, "ownedNfts") && t.uint32(136).int64(e.ownedNfts), null != e.maxAutomaticTokenAssociations && Object.hasOwnProperty.call(e, "maxAutomaticTokenAssociations") && t.uint32(144).int32(e.maxAutomaticTokenAssociations), null != e.alias && Object.hasOwnProperty.call(e, "alias") && t.uint32(154).bytes(e.alias), null != e.ledgerId && Object.hasOwnProperty.call(e, "ledgerId") && t.uint32(162).bytes(e.ledgerId), null != e.ethereumNonce && Object.hasOwnProperty.call(e, "ethereumNonce") && t.uint32(168).int64(e.ethereumNonce), null != e.stakingInfo && Object.hasOwnProperty.call(e, "stakingInfo") && l.proto.StakingInfo.encode(e.stakingInfo, t.uint32(178).fork()).ldelim(), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoGetInfoResponse.AccountInfo; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            n.contractAccountID = e.string();
                                            break;
                                        case 3:
                                            n.deleted = e.bool();
                                            break;
                                        case 4:
                                            n.proxyAccountID = l.proto.AccountID.decode(e, e.uint32());
                                            break;
                                        case 6:
                                            n.proxyReceived = e.int64();
                                            break;
                                        case 7:
                                            n.key = l.proto.Key.decode(e, e.uint32());
                                            break;
                                        case 8:
                                            n.balance = e.uint64();
                                            break;
                                        case 9:
                                            n.generateSendRecordThreshold = e.uint64();
                                            break;
                                        case 10:
                                            n.generateReceiveRecordThreshold = e.uint64();
                                            break;
                                        case 11:
                                            n.receiverSigRequired = e.bool();
                                            break;
                                        case 12:
                                            n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                            break;
                                        case 13:
                                            n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                            break;
                                        case 14:
                                            n.liveHashes && n.liveHashes.length || (n.liveHashes = []), n.liveHashes.push(l.proto.LiveHash.decode(e, e.uint32()));
                                            break;
                                        case 15:
                                            n.tokenRelationships && n.tokenRelationships.length || (n.tokenRelationships = []), n.tokenRelationships.push(l.proto.TokenRelationship.decode(e, e.uint32()));
                                            break;
                                        case 16:
                                            n.memo = e.string();
                                            break;
                                        case 17:
                                            n.ownedNfts = e.int64();
                                            break;
                                        case 18:
                                            n.maxAutomaticTokenAssociations = e.int32();
                                            break;
                                        case 19:
                                            n.alias = e.bytes();
                                            break;
                                        case 20:
                                            n.ledgerId = e.bytes();
                                            break;
                                        case 21:
                                            n.ethereumNonce = e.int64();
                                            break;
                                        case 22:
                                            n.stakingInfo = l.proto.StakingInfo.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e
                    }(), e.CryptoGetLiveHashQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.accountID = null, e.prototype.hash = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), null != e.hash && Object.hasOwnProperty.call(e, "hash") && t.uint32(26).bytes(e.hash), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoGetLiveHashQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.hash = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoGetLiveHashResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.liveHash = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.liveHash && Object.hasOwnProperty.call(e, "liveHash") && l.proto.LiveHash.encode(e.liveHash, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoGetLiveHashResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.liveHash = l.proto.LiveHash.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoGetStakersQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.accountID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoGetStakersQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ProxyStaker = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.accountID = null, e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(10).fork()).ldelim(), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(16).int64(e.amount), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ProxyStaker; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.amount = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.AllProxyStakers = function() {
                        function e(e) {
                            if (this.proxyStaker = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.accountID = null, e.prototype.proxyStaker = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(10).fork()).ldelim(), null != e.proxyStaker && e.proxyStaker.length)
                                for (var o = 0; o < e.proxyStaker.length; ++o) l.proto.ProxyStaker.encode(e.proxyStaker[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.AllProxyStakers; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.proxyStaker && n.proxyStaker.length || (n.proxyStaker = []), n.proxyStaker.push(l.proto.ProxyStaker.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoGetStakersResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.stakers = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.stakers && Object.hasOwnProperty.call(e, "stakers") && l.proto.AllProxyStakers.encode(e.stakers, t.uint32(26).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.CryptoGetStakersResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.stakers = l.proto.AllProxyStakers.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FileGetContentsQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.fileID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FileGetContentsQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FileGetContentsResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.fileContents = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.fileContents && Object.hasOwnProperty.call(e, "fileContents") && l.proto.FileGetContentsResponse.FileContents.encode(e.fileContents, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FileGetContentsResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.fileContents = l.proto.FileGetContentsResponse.FileContents.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e.FileContents = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.fileID = null, e.prototype.contents = a.newBuffer([]), e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = c.create()), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(10).fork()).ldelim(), null != e.contents && Object.hasOwnProperty.call(e, "contents") && t.uint32(18).bytes(e.contents), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FileGetContentsResponse.FileContents; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.fileID = l.proto.FileID.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            n.contents = e.bytes();
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e
                    }(), e.FileGetInfoQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.fileID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FileGetInfoQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.fileID = l.proto.FileID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.FileGetInfoResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.fileInfo = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.fileInfo && Object.hasOwnProperty.call(e, "fileInfo") && l.proto.FileGetInfoResponse.FileInfo.encode(e.fileInfo, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FileGetInfoResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.fileInfo = l.proto.FileGetInfoResponse.FileInfo.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e.FileInfo = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.fileID = null, e.prototype.size = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.expirationTime = null, e.prototype.deleted = !1, e.prototype.keys = null, e.prototype.memo = "", e.prototype.ledgerId = a.newBuffer([]), e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = c.create()), null != e.fileID && Object.hasOwnProperty.call(e, "fileID") && l.proto.FileID.encode(e.fileID, t.uint32(10).fork()).ldelim(), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(16).int64(e.size), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(26).fork()).ldelim(), null != e.deleted && Object.hasOwnProperty.call(e, "deleted") && t.uint32(32).bool(e.deleted), null != e.keys && Object.hasOwnProperty.call(e, "keys") && l.proto.KeyList.encode(e.keys, t.uint32(42).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(50).string(e.memo), null != e.ledgerId && Object.hasOwnProperty.call(e, "ledgerId") && t.uint32(58).bytes(e.ledgerId), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.FileGetInfoResponse.FileInfo; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.fileID = l.proto.FileID.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            n.size = e.int64();
                                            break;
                                        case 3:
                                            n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                            break;
                                        case 4:
                                            n.deleted = e.bool();
                                            break;
                                        case 5:
                                            n.keys = l.proto.KeyList.decode(e, e.uint32());
                                            break;
                                        case 6:
                                            n.memo = e.string();
                                            break;
                                        case 7:
                                            n.ledgerId = e.bytes();
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e
                    }(), e.TransactionGetReceiptQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.transactionID = null, e.prototype.includeDuplicates = !1, e.prototype.includeChildReceipts = !1, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.transactionID && Object.hasOwnProperty.call(e, "transactionID") && l.proto.TransactionID.encode(e.transactionID, t.uint32(18).fork()).ldelim(), null != e.includeDuplicates && Object.hasOwnProperty.call(e, "includeDuplicates") && t.uint32(24).bool(e.includeDuplicates), null != e.includeChildReceipts && Object.hasOwnProperty.call(e, "includeChildReceipts") && t.uint32(32).bool(e.includeChildReceipts), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionGetReceiptQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.transactionID = l.proto.TransactionID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.includeDuplicates = e.bool();
                                        break;
                                    case 4:
                                        n.includeChildReceipts = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionGetReceiptResponse = function() {
                        function e(e) {
                            if (this.duplicateTransactionReceipts = [], this.childTransactionReceipts = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.receipt = null, e.prototype.duplicateTransactionReceipts = a.emptyArray, e.prototype.childTransactionReceipts = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.receipt && Object.hasOwnProperty.call(e, "receipt") && l.proto.TransactionReceipt.encode(e.receipt, t.uint32(18).fork()).ldelim(), null != e.duplicateTransactionReceipts && e.duplicateTransactionReceipts.length)
                                for (var o = 0; o < e.duplicateTransactionReceipts.length; ++o) l.proto.TransactionReceipt.encode(e.duplicateTransactionReceipts[o], t.uint32(34).fork()).ldelim();
                            if (null != e.childTransactionReceipts && e.childTransactionReceipts.length)
                                for (o = 0; o < e.childTransactionReceipts.length; ++o) l.proto.TransactionReceipt.encode(e.childTransactionReceipts[o], t.uint32(42).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionGetReceiptResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.receipt = l.proto.TransactionReceipt.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.duplicateTransactionReceipts && n.duplicateTransactionReceipts.length || (n.duplicateTransactionReceipts = []), n.duplicateTransactionReceipts.push(l.proto.TransactionReceipt.decode(e, e.uint32()));
                                        break;
                                    case 5:
                                        n.childTransactionReceipts && n.childTransactionReceipts.length || (n.childTransactionReceipts = []), n.childTransactionReceipts.push(l.proto.TransactionReceipt.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionGetRecordQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.transactionID = null, e.prototype.includeDuplicates = !1, e.prototype.includeChildRecords = !1, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.transactionID && Object.hasOwnProperty.call(e, "transactionID") && l.proto.TransactionID.encode(e.transactionID, t.uint32(18).fork()).ldelim(), null != e.includeDuplicates && Object.hasOwnProperty.call(e, "includeDuplicates") && t.uint32(24).bool(e.includeDuplicates), null != e.includeChildRecords && Object.hasOwnProperty.call(e, "includeChildRecords") && t.uint32(32).bool(e.includeChildRecords), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionGetRecordQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.transactionID = l.proto.TransactionID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.includeDuplicates = e.bool();
                                        break;
                                    case 4:
                                        n.includeChildRecords = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionGetRecordResponse = function() {
                        function e(e) {
                            if (this.duplicateTransactionRecords = [], this.childTransactionRecords = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.transactionRecord = null, e.prototype.duplicateTransactionRecords = a.emptyArray, e.prototype.childTransactionRecords = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.transactionRecord && Object.hasOwnProperty.call(e, "transactionRecord") && l.proto.TransactionRecord.encode(e.transactionRecord, t.uint32(26).fork()).ldelim(), null != e.duplicateTransactionRecords && e.duplicateTransactionRecords.length)
                                for (var o = 0; o < e.duplicateTransactionRecords.length; ++o) l.proto.TransactionRecord.encode(e.duplicateTransactionRecords[o], t.uint32(34).fork()).ldelim();
                            if (null != e.childTransactionRecords && e.childTransactionRecords.length)
                                for (o = 0; o < e.childTransactionRecords.length; ++o) l.proto.TransactionRecord.encode(e.childTransactionRecords[o], t.uint32(42).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionGetRecordResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.transactionRecord = l.proto.TransactionRecord.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.duplicateTransactionRecords && n.duplicateTransactionRecords.length || (n.duplicateTransactionRecords = []), n.duplicateTransactionRecords.push(l.proto.TransactionRecord.decode(e, e.uint32()));
                                        break;
                                    case 5:
                                        n.childTransactionRecords && n.childTransactionRecords.length || (n.childTransactionRecords = []), n.childTransactionRecords.push(l.proto.TransactionRecord.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionGetFastRecordQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.transactionID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.transactionID && Object.hasOwnProperty.call(e, "transactionID") && l.proto.TransactionID.encode(e.transactionID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionGetFastRecordQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.transactionID = l.proto.TransactionID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionGetFastRecordResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.transactionRecord = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.transactionRecord && Object.hasOwnProperty.call(e, "transactionRecord") && l.proto.TransactionRecord.encode(e.transactionRecord, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionGetFastRecordResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.transactionRecord = l.proto.TransactionRecord.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NetworkGetVersionInfoQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NetworkGetVersionInfoQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NetworkGetVersionInfoResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.hapiProtoVersion = null, e.prototype.hederaServicesVersion = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.hapiProtoVersion && Object.hasOwnProperty.call(e, "hapiProtoVersion") && l.proto.SemanticVersion.encode(e.hapiProtoVersion, t.uint32(18).fork()).ldelim(), null != e.hederaServicesVersion && Object.hasOwnProperty.call(e, "hederaServicesVersion") && l.proto.SemanticVersion.encode(e.hederaServicesVersion, t.uint32(26).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NetworkGetVersionInfoResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.hapiProtoVersion = l.proto.SemanticVersion.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.hederaServicesVersion = l.proto.SemanticVersion.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NetworkGetExecutionTimeQuery = function() {
                        function e(e) {
                            if (this.transactionIds = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.transactionIds = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.transactionIds && e.transactionIds.length)
                                for (var o = 0; o < e.transactionIds.length; ++o) l.proto.TransactionID.encode(e.transactionIds[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NetworkGetExecutionTimeQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.transactionIds && n.transactionIds.length || (n.transactionIds = []), n.transactionIds.push(l.proto.TransactionID.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NetworkGetExecutionTimeResponse = function() {
                        function e(e) {
                            if (this.executionTimes = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.executionTimes = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.executionTimes && e.executionTimes.length) {
                                t.uint32(18).fork();
                                for (var o = 0; o < e.executionTimes.length; ++o) t.uint64(e.executionTimes[o]);
                                t.ldelim()
                            }
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NetworkGetExecutionTimeResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        if (n.executionTimes && n.executionTimes.length || (n.executionTimes = []), 2 == (7 & c))
                                            for (var a = e.uint32() + e.pos; e.pos < a;) n.executionTimes.push(e.uint64());
                                        else n.executionTimes.push(e.uint64());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenGetInfoQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.token = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.token && Object.hasOwnProperty.call(e, "token") && l.proto.TokenID.encode(e.token, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenGetInfoQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.token = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenInfo = function() {
                        function e(e) {
                            if (this.customFees = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenId = null, e.prototype.name = "", e.prototype.symbol = "", e.prototype.decimals = 0, e.prototype.totalSupply = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.treasury = null, e.prototype.adminKey = null, e.prototype.kycKey = null, e.prototype.freezeKey = null, e.prototype.wipeKey = null, e.prototype.supplyKey = null, e.prototype.defaultFreezeStatus = 0, e.prototype.defaultKycStatus = 0, e.prototype.deleted = !1, e.prototype.autoRenewAccount = null, e.prototype.autoRenewPeriod = null, e.prototype.expiry = null, e.prototype.memo = "", e.prototype.tokenType = 0, e.prototype.supplyType = 0, e.prototype.maxSupply = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.feeScheduleKey = null, e.prototype.customFees = a.emptyArray, e.prototype.pauseKey = null, e.prototype.pauseStatus = 0, e.prototype.ledgerId = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(10).fork()).ldelim(), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(18).string(e.name), null != e.symbol && Object.hasOwnProperty.call(e, "symbol") && t.uint32(26).string(e.symbol), null != e.decimals && Object.hasOwnProperty.call(e, "decimals") && t.uint32(32).uint32(e.decimals), null != e.totalSupply && Object.hasOwnProperty.call(e, "totalSupply") && t.uint32(40).uint64(e.totalSupply), null != e.treasury && Object.hasOwnProperty.call(e, "treasury") && l.proto.AccountID.encode(e.treasury, t.uint32(50).fork()).ldelim(), null != e.adminKey && Object.hasOwnProperty.call(e, "adminKey") && l.proto.Key.encode(e.adminKey, t.uint32(58).fork()).ldelim(), null != e.kycKey && Object.hasOwnProperty.call(e, "kycKey") && l.proto.Key.encode(e.kycKey, t.uint32(66).fork()).ldelim(), null != e.freezeKey && Object.hasOwnProperty.call(e, "freezeKey") && l.proto.Key.encode(e.freezeKey, t.uint32(74).fork()).ldelim(), null != e.wipeKey && Object.hasOwnProperty.call(e, "wipeKey") && l.proto.Key.encode(e.wipeKey, t.uint32(82).fork()).ldelim(), null != e.supplyKey && Object.hasOwnProperty.call(e, "supplyKey") && l.proto.Key.encode(e.supplyKey, t.uint32(90).fork()).ldelim(), null != e.defaultFreezeStatus && Object.hasOwnProperty.call(e, "defaultFreezeStatus") && t.uint32(96).int32(e.defaultFreezeStatus), null != e.defaultKycStatus && Object.hasOwnProperty.call(e, "defaultKycStatus") && t.uint32(104).int32(e.defaultKycStatus), null != e.deleted && Object.hasOwnProperty.call(e, "deleted") && t.uint32(112).bool(e.deleted), null != e.autoRenewAccount && Object.hasOwnProperty.call(e, "autoRenewAccount") && l.proto.AccountID.encode(e.autoRenewAccount, t.uint32(122).fork()).ldelim(), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(130).fork()).ldelim(), null != e.expiry && Object.hasOwnProperty.call(e, "expiry") && l.proto.Timestamp.encode(e.expiry, t.uint32(138).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(146).string(e.memo), null != e.tokenType && Object.hasOwnProperty.call(e, "tokenType") && t.uint32(152).int32(e.tokenType), null != e.supplyType && Object.hasOwnProperty.call(e, "supplyType") && t.uint32(160).int32(e.supplyType), null != e.maxSupply && Object.hasOwnProperty.call(e, "maxSupply") && t.uint32(168).int64(e.maxSupply), null != e.feeScheduleKey && Object.hasOwnProperty.call(e, "feeScheduleKey") && l.proto.Key.encode(e.feeScheduleKey, t.uint32(178).fork()).ldelim(), null != e.customFees && e.customFees.length)
                                for (var o = 0; o < e.customFees.length; ++o) l.proto.CustomFee.encode(e.customFees[o], t.uint32(186).fork()).ldelim();
                            return null != e.pauseKey && Object.hasOwnProperty.call(e, "pauseKey") && l.proto.Key.encode(e.pauseKey, t.uint32(194).fork()).ldelim(), null != e.pauseStatus && Object.hasOwnProperty.call(e, "pauseStatus") && t.uint32(200).int32(e.pauseStatus), null != e.ledgerId && Object.hasOwnProperty.call(e, "ledgerId") && t.uint32(210).bytes(e.ledgerId), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenInfo; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.name = e.string();
                                        break;
                                    case 3:
                                        n.symbol = e.string();
                                        break;
                                    case 4:
                                        n.decimals = e.uint32();
                                        break;
                                    case 5:
                                        n.totalSupply = e.uint64();
                                        break;
                                    case 6:
                                        n.treasury = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.adminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.kycKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.freezeKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.wipeKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.supplyKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        n.defaultFreezeStatus = e.int32();
                                        break;
                                    case 13:
                                        n.defaultKycStatus = e.int32();
                                        break;
                                    case 14:
                                        n.deleted = e.bool();
                                        break;
                                    case 15:
                                        n.autoRenewAccount = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 16:
                                        n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                        break;
                                    case 17:
                                        n.expiry = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 18:
                                        n.memo = e.string();
                                        break;
                                    case 19:
                                        n.tokenType = e.int32();
                                        break;
                                    case 20:
                                        n.supplyType = e.int32();
                                        break;
                                    case 21:
                                        n.maxSupply = e.int64();
                                        break;
                                    case 22:
                                        n.feeScheduleKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 23:
                                        n.customFees && n.customFees.length || (n.customFees = []), n.customFees.push(l.proto.CustomFee.decode(e, e.uint32()));
                                        break;
                                    case 24:
                                        n.pauseKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 25:
                                        n.pauseStatus = e.int32();
                                        break;
                                    case 26:
                                        n.ledgerId = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenGetInfoResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.tokenInfo = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.tokenInfo && Object.hasOwnProperty.call(e, "tokenInfo") && l.proto.TokenInfo.encode(e.tokenInfo, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenGetInfoResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.tokenInfo = l.proto.TokenInfo.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ScheduleGetInfoQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.scheduleID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.scheduleID && Object.hasOwnProperty.call(e, "scheduleID") && l.proto.ScheduleID.encode(e.scheduleID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ScheduleGetInfoQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.scheduleID = l.proto.ScheduleID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ScheduleInfo = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.scheduleID = null, e.prototype.deletionTime = null, e.prototype.executionTime = null, e.prototype.expirationTime = null, e.prototype.scheduledTransactionBody = null, e.prototype.memo = "", e.prototype.adminKey = null, e.prototype.signers = null, e.prototype.creatorAccountID = null, e.prototype.payerAccountID = null, e.prototype.scheduledTransactionID = null, e.prototype.ledgerId = a.newBuffer([]), e.prototype.waitForExpiry = !1, Object.defineProperty(e.prototype, "data", {
                            get: a.oneOfGetter(t = ["deletionTime", "executionTime"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.scheduleID && Object.hasOwnProperty.call(e, "scheduleID") && l.proto.ScheduleID.encode(e.scheduleID, t.uint32(10).fork()).ldelim(), null != e.deletionTime && Object.hasOwnProperty.call(e, "deletionTime") && l.proto.Timestamp.encode(e.deletionTime, t.uint32(18).fork()).ldelim(), null != e.executionTime && Object.hasOwnProperty.call(e, "executionTime") && l.proto.Timestamp.encode(e.executionTime, t.uint32(26).fork()).ldelim(), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(34).fork()).ldelim(), null != e.scheduledTransactionBody && Object.hasOwnProperty.call(e, "scheduledTransactionBody") && l.proto.SchedulableTransactionBody.encode(e.scheduledTransactionBody, t.uint32(42).fork()).ldelim(), null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(50).string(e.memo), null != e.adminKey && Object.hasOwnProperty.call(e, "adminKey") && l.proto.Key.encode(e.adminKey, t.uint32(58).fork()).ldelim(), null != e.signers && Object.hasOwnProperty.call(e, "signers") && l.proto.KeyList.encode(e.signers, t.uint32(66).fork()).ldelim(), null != e.creatorAccountID && Object.hasOwnProperty.call(e, "creatorAccountID") && l.proto.AccountID.encode(e.creatorAccountID, t.uint32(74).fork()).ldelim(), null != e.payerAccountID && Object.hasOwnProperty.call(e, "payerAccountID") && l.proto.AccountID.encode(e.payerAccountID, t.uint32(82).fork()).ldelim(), null != e.scheduledTransactionID && Object.hasOwnProperty.call(e, "scheduledTransactionID") && l.proto.TransactionID.encode(e.scheduledTransactionID, t.uint32(90).fork()).ldelim(), null != e.ledgerId && Object.hasOwnProperty.call(e, "ledgerId") && t.uint32(98).bytes(e.ledgerId), null != e.waitForExpiry && Object.hasOwnProperty.call(e, "waitForExpiry") && t.uint32(104).bool(e.waitForExpiry), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ScheduleInfo; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.scheduleID = l.proto.ScheduleID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.deletionTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.executionTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.scheduledTransactionBody = l.proto.SchedulableTransactionBody.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.memo = e.string();
                                        break;
                                    case 7:
                                        n.adminKey = l.proto.Key.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.signers = l.proto.KeyList.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.creatorAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.payerAccountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.scheduledTransactionID = l.proto.TransactionID.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        n.ledgerId = e.bytes();
                                        break;
                                    case 13:
                                        n.waitForExpiry = e.bool();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ScheduleGetInfoResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.scheduleInfo = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.scheduleInfo && Object.hasOwnProperty.call(e, "scheduleInfo") && l.proto.ScheduleInfo.encode(e.scheduleInfo, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ScheduleGetInfoResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.scheduleInfo = l.proto.ScheduleInfo.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenGetAccountNftInfosQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.accountID = null, e.prototype.start = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.end = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), null != e.start && Object.hasOwnProperty.call(e, "start") && t.uint32(24).int64(e.start), null != e.end && Object.hasOwnProperty.call(e, "end") && t.uint32(32).int64(e.end), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenGetAccountNftInfosQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.start = e.int64();
                                        break;
                                    case 4:
                                        n.end = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenGetAccountNftInfosResponse = function() {
                        function e(e) {
                            if (this.nfts = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.nfts = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.nfts && e.nfts.length)
                                for (var o = 0; o < e.nfts.length; ++o) l.proto.TokenNftInfo.encode(e.nfts[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenGetAccountNftInfosResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.nfts && n.nfts.length || (n.nfts = []), n.nfts.push(l.proto.TokenNftInfo.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.NftID = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenID = null, e.prototype.serialNumber = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.tokenID && Object.hasOwnProperty.call(e, "tokenID") && l.proto.TokenID.encode(e.tokenID, t.uint32(10).fork()).ldelim(), null != e.serialNumber && Object.hasOwnProperty.call(e, "serialNumber") && t.uint32(16).int64(e.serialNumber), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.NftID; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenID = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.serialNumber = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenGetNftInfoQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.nftID = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.nftID && Object.hasOwnProperty.call(e, "nftID") && l.proto.NftID.encode(e.nftID, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenGetNftInfoQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.nftID = l.proto.NftID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenNftInfo = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.nftID = null, e.prototype.accountID = null, e.prototype.creationTime = null, e.prototype.metadata = a.newBuffer([]), e.prototype.ledgerId = a.newBuffer([]), e.prototype.spenderId = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.nftID && Object.hasOwnProperty.call(e, "nftID") && l.proto.NftID.encode(e.nftID, t.uint32(10).fork()).ldelim(), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(18).fork()).ldelim(), null != e.creationTime && Object.hasOwnProperty.call(e, "creationTime") && l.proto.Timestamp.encode(e.creationTime, t.uint32(26).fork()).ldelim(), null != e.metadata && Object.hasOwnProperty.call(e, "metadata") && t.uint32(34).bytes(e.metadata), null != e.ledgerId && Object.hasOwnProperty.call(e, "ledgerId") && t.uint32(42).bytes(e.ledgerId), null != e.spenderId && Object.hasOwnProperty.call(e, "spenderId") && l.proto.AccountID.encode(e.spenderId, t.uint32(50).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenNftInfo; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.nftID = l.proto.NftID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.creationTime = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.metadata = e.bytes();
                                        break;
                                    case 5:
                                        n.ledgerId = e.bytes();
                                        break;
                                    case 6:
                                        n.spenderId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenGetNftInfoResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.nft = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.nft && Object.hasOwnProperty.call(e, "nft") && l.proto.TokenNftInfo.encode(e.nft, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenGetNftInfoResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.nft = l.proto.TokenNftInfo.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenGetNftInfosQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.tokenID = null, e.prototype.start = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.end = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.tokenID && Object.hasOwnProperty.call(e, "tokenID") && l.proto.TokenID.encode(e.tokenID, t.uint32(18).fork()).ldelim(), null != e.start && Object.hasOwnProperty.call(e, "start") && t.uint32(24).int64(e.start), null != e.end && Object.hasOwnProperty.call(e, "end") && t.uint32(32).int64(e.end), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenGetNftInfosQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.tokenID = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.start = e.int64();
                                        break;
                                    case 4:
                                        n.end = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenGetNftInfosResponse = function() {
                        function e(e) {
                            if (this.nfts = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.tokenID = null, e.prototype.nfts = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.tokenID && Object.hasOwnProperty.call(e, "tokenID") && l.proto.TokenID.encode(e.tokenID, t.uint32(18).fork()).ldelim(), null != e.nfts && e.nfts.length)
                                for (var o = 0; o < e.nfts.length; ++o) l.proto.TokenNftInfo.encode(e.nfts[o], t.uint32(26).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenGetNftInfosResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.tokenID = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.nfts && n.nfts.length || (n.nfts = []), n.nfts.push(l.proto.TokenNftInfo.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.GetAccountDetailsQuery = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.accountId = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.QueryHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountId && Object.hasOwnProperty.call(e, "accountId") && l.proto.AccountID.encode(e.accountId, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.GetAccountDetailsQuery; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.QueryHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountId = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.GetAccountDetailsResponse = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.header = null, e.prototype.accountDetails = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.header && Object.hasOwnProperty.call(e, "header") && l.proto.ResponseHeader.encode(e.header, t.uint32(10).fork()).ldelim(), null != e.accountDetails && Object.hasOwnProperty.call(e, "accountDetails") && l.proto.GetAccountDetailsResponse.AccountDetails.encode(e.accountDetails, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.GetAccountDetailsResponse; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.header = l.proto.ResponseHeader.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.accountDetails = l.proto.GetAccountDetailsResponse.AccountDetails.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e.AccountDetails = function() {
                            function e(e) {
                                if (this.tokenRelationships = [], this.grantedCryptoAllowances = [], this.grantedNftAllowances = [], this.grantedTokenAllowances = [], e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.accountId = null, e.prototype.contractAccountId = "", e.prototype.deleted = !1, e.prototype.proxyAccountId = null, e.prototype.proxyReceived = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.key = null, e.prototype.balance = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.receiverSigRequired = !1, e.prototype.expirationTime = null, e.prototype.autoRenewPeriod = null, e.prototype.tokenRelationships = a.emptyArray, e.prototype.memo = "", e.prototype.ownedNfts = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.maxAutomaticTokenAssociations = 0, e.prototype.alias = a.newBuffer([]), e.prototype.ledgerId = a.newBuffer([]), e.prototype.grantedCryptoAllowances = a.emptyArray, e.prototype.grantedNftAllowances = a.emptyArray, e.prototype.grantedTokenAllowances = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = c.create()), null != e.accountId && Object.hasOwnProperty.call(e, "accountId") && l.proto.AccountID.encode(e.accountId, t.uint32(10).fork()).ldelim(), null != e.contractAccountId && Object.hasOwnProperty.call(e, "contractAccountId") && t.uint32(18).string(e.contractAccountId), null != e.deleted && Object.hasOwnProperty.call(e, "deleted") && t.uint32(24).bool(e.deleted), null != e.proxyAccountId && Object.hasOwnProperty.call(e, "proxyAccountId") && l.proto.AccountID.encode(e.proxyAccountId, t.uint32(34).fork()).ldelim(), null != e.proxyReceived && Object.hasOwnProperty.call(e, "proxyReceived") && t.uint32(40).int64(e.proxyReceived), null != e.key && Object.hasOwnProperty.call(e, "key") && l.proto.Key.encode(e.key, t.uint32(50).fork()).ldelim(), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(56).uint64(e.balance), null != e.receiverSigRequired && Object.hasOwnProperty.call(e, "receiverSigRequired") && t.uint32(64).bool(e.receiverSigRequired), null != e.expirationTime && Object.hasOwnProperty.call(e, "expirationTime") && l.proto.Timestamp.encode(e.expirationTime, t.uint32(74).fork()).ldelim(), null != e.autoRenewPeriod && Object.hasOwnProperty.call(e, "autoRenewPeriod") && l.proto.Duration.encode(e.autoRenewPeriod, t.uint32(82).fork()).ldelim(), null != e.tokenRelationships && e.tokenRelationships.length)
                                    for (var o = 0; o < e.tokenRelationships.length; ++o) l.proto.TokenRelationship.encode(e.tokenRelationships[o], t.uint32(90).fork()).ldelim();
                                if (null != e.memo && Object.hasOwnProperty.call(e, "memo") && t.uint32(98).string(e.memo), null != e.ownedNfts && Object.hasOwnProperty.call(e, "ownedNfts") && t.uint32(104).int64(e.ownedNfts), null != e.maxAutomaticTokenAssociations && Object.hasOwnProperty.call(e, "maxAutomaticTokenAssociations") && t.uint32(112).int32(e.maxAutomaticTokenAssociations), null != e.alias && Object.hasOwnProperty.call(e, "alias") && t.uint32(122).bytes(e.alias), null != e.ledgerId && Object.hasOwnProperty.call(e, "ledgerId") && t.uint32(130).bytes(e.ledgerId), null != e.grantedCryptoAllowances && e.grantedCryptoAllowances.length)
                                    for (o = 0; o < e.grantedCryptoAllowances.length; ++o) l.proto.GrantedCryptoAllowance.encode(e.grantedCryptoAllowances[o], t.uint32(138).fork()).ldelim();
                                if (null != e.grantedNftAllowances && e.grantedNftAllowances.length)
                                    for (o = 0; o < e.grantedNftAllowances.length; ++o) l.proto.GrantedNftAllowance.encode(e.grantedNftAllowances[o], t.uint32(146).fork()).ldelim();
                                if (null != e.grantedTokenAllowances && e.grantedTokenAllowances.length)
                                    for (o = 0; o < e.grantedTokenAllowances.length; ++o) l.proto.GrantedTokenAllowance.encode(e.grantedTokenAllowances[o], t.uint32(154).fork()).ldelim();
                                return t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.GetAccountDetailsResponse.AccountDetails; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.accountId = l.proto.AccountID.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            n.contractAccountId = e.string();
                                            break;
                                        case 3:
                                            n.deleted = e.bool();
                                            break;
                                        case 4:
                                            n.proxyAccountId = l.proto.AccountID.decode(e, e.uint32());
                                            break;
                                        case 5:
                                            n.proxyReceived = e.int64();
                                            break;
                                        case 6:
                                            n.key = l.proto.Key.decode(e, e.uint32());
                                            break;
                                        case 7:
                                            n.balance = e.uint64();
                                            break;
                                        case 8:
                                            n.receiverSigRequired = e.bool();
                                            break;
                                        case 9:
                                            n.expirationTime = l.proto.Timestamp.decode(e, e.uint32());
                                            break;
                                        case 10:
                                            n.autoRenewPeriod = l.proto.Duration.decode(e, e.uint32());
                                            break;
                                        case 11:
                                            n.tokenRelationships && n.tokenRelationships.length || (n.tokenRelationships = []), n.tokenRelationships.push(l.proto.TokenRelationship.decode(e, e.uint32()));
                                            break;
                                        case 12:
                                            n.memo = e.string();
                                            break;
                                        case 13:
                                            n.ownedNfts = e.int64();
                                            break;
                                        case 14:
                                            n.maxAutomaticTokenAssociations = e.int32();
                                            break;
                                        case 15:
                                            n.alias = e.bytes();
                                            break;
                                        case 16:
                                            n.ledgerId = e.bytes();
                                            break;
                                        case 17:
                                            n.grantedCryptoAllowances && n.grantedCryptoAllowances.length || (n.grantedCryptoAllowances = []), n.grantedCryptoAllowances.push(l.proto.GrantedCryptoAllowance.decode(e, e.uint32()));
                                            break;
                                        case 18:
                                            n.grantedNftAllowances && n.grantedNftAllowances.length || (n.grantedNftAllowances = []), n.grantedNftAllowances.push(l.proto.GrantedNftAllowance.decode(e, e.uint32()));
                                            break;
                                        case 19:
                                            n.grantedTokenAllowances && n.grantedTokenAllowances.length || (n.grantedTokenAllowances = []), n.grantedTokenAllowances.push(l.proto.GrantedTokenAllowance.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e
                    }(), e.GrantedCryptoAllowance = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.spender = null, e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.spender && Object.hasOwnProperty.call(e, "spender") && l.proto.AccountID.encode(e.spender, t.uint32(10).fork()).ldelim(), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(16).int64(e.amount), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.GrantedCryptoAllowance; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.spender = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.amount = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.GrantedNftAllowance = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenId = null, e.prototype.spender = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(10).fork()).ldelim(), null != e.spender && Object.hasOwnProperty.call(e, "spender") && l.proto.AccountID.encode(e.spender, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.GrantedNftAllowance; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.spender = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.GrantedTokenAllowance = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenId = null, e.prototype.spender = null, e.prototype.amount = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(10).fork()).ldelim(), null != e.spender && Object.hasOwnProperty.call(e, "spender") && l.proto.AccountID.encode(e.spender, t.uint32(18).fork()).ldelim(), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(24).int64(e.amount), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.GrantedTokenAllowance; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.spender = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.amount = e.int64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.Response = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.getByKey = null, e.prototype.getBySolidityID = null, e.prototype.contractCallLocal = null, e.prototype.contractGetBytecodeResponse = null, e.prototype.contractGetInfo = null, e.prototype.contractGetRecordsResponse = null, e.prototype.cryptogetAccountBalance = null, e.prototype.cryptoGetAccountRecords = null, e.prototype.cryptoGetInfo = null, e.prototype.cryptoGetLiveHash = null, e.prototype.cryptoGetProxyStakers = null, e.prototype.fileGetContents = null, e.prototype.fileGetInfo = null, e.prototype.transactionGetReceipt = null, e.prototype.transactionGetRecord = null, e.prototype.transactionGetFastRecord = null, e.prototype.consensusGetTopicInfo = null, e.prototype.networkGetVersionInfo = null, e.prototype.tokenGetInfo = null, e.prototype.scheduleGetInfo = null, e.prototype.tokenGetAccountNftInfos = null, e.prototype.tokenGetNftInfo = null, e.prototype.tokenGetNftInfos = null, e.prototype.networkGetExecutionTime = null, e.prototype.accountDetails = null, Object.defineProperty(e.prototype, "response", {
                            get: a.oneOfGetter(t = ["getByKey", "getBySolidityID", "contractCallLocal", "contractGetBytecodeResponse", "contractGetInfo", "contractGetRecordsResponse", "cryptogetAccountBalance", "cryptoGetAccountRecords", "cryptoGetInfo", "cryptoGetLiveHash", "cryptoGetProxyStakers", "fileGetContents", "fileGetInfo", "transactionGetReceipt", "transactionGetRecord", "transactionGetFastRecord", "consensusGetTopicInfo", "networkGetVersionInfo", "tokenGetInfo", "scheduleGetInfo", "tokenGetAccountNftInfos", "tokenGetNftInfo", "tokenGetNftInfos", "networkGetExecutionTime", "accountDetails"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.getByKey && Object.hasOwnProperty.call(e, "getByKey") && l.proto.GetByKeyResponse.encode(e.getByKey, t.uint32(10).fork()).ldelim(), null != e.getBySolidityID && Object.hasOwnProperty.call(e, "getBySolidityID") && l.proto.GetBySolidityIDResponse.encode(e.getBySolidityID, t.uint32(18).fork()).ldelim(), null != e.contractCallLocal && Object.hasOwnProperty.call(e, "contractCallLocal") && l.proto.ContractCallLocalResponse.encode(e.contractCallLocal, t.uint32(26).fork()).ldelim(), null != e.contractGetInfo && Object.hasOwnProperty.call(e, "contractGetInfo") && l.proto.ContractGetInfoResponse.encode(e.contractGetInfo, t.uint32(34).fork()).ldelim(), null != e.contractGetBytecodeResponse && Object.hasOwnProperty.call(e, "contractGetBytecodeResponse") && l.proto.ContractGetBytecodeResponse.encode(e.contractGetBytecodeResponse, t.uint32(42).fork()).ldelim(), null != e.contractGetRecordsResponse && Object.hasOwnProperty.call(e, "contractGetRecordsResponse") && l.proto.ContractGetRecordsResponse.encode(e.contractGetRecordsResponse, t.uint32(50).fork()).ldelim(), null != e.cryptogetAccountBalance && Object.hasOwnProperty.call(e, "cryptogetAccountBalance") && l.proto.CryptoGetAccountBalanceResponse.encode(e.cryptogetAccountBalance, t.uint32(58).fork()).ldelim(), null != e.cryptoGetAccountRecords && Object.hasOwnProperty.call(e, "cryptoGetAccountRecords") && l.proto.CryptoGetAccountRecordsResponse.encode(e.cryptoGetAccountRecords, t.uint32(66).fork()).ldelim(), null != e.cryptoGetInfo && Object.hasOwnProperty.call(e, "cryptoGetInfo") && l.proto.CryptoGetInfoResponse.encode(e.cryptoGetInfo, t.uint32(74).fork()).ldelim(), null != e.cryptoGetLiveHash && Object.hasOwnProperty.call(e, "cryptoGetLiveHash") && l.proto.CryptoGetLiveHashResponse.encode(e.cryptoGetLiveHash, t.uint32(82).fork()).ldelim(), null != e.cryptoGetProxyStakers && Object.hasOwnProperty.call(e, "cryptoGetProxyStakers") && l.proto.CryptoGetStakersResponse.encode(e.cryptoGetProxyStakers, t.uint32(90).fork()).ldelim(), null != e.fileGetContents && Object.hasOwnProperty.call(e, "fileGetContents") && l.proto.FileGetContentsResponse.encode(e.fileGetContents, t.uint32(98).fork()).ldelim(), null != e.fileGetInfo && Object.hasOwnProperty.call(e, "fileGetInfo") && l.proto.FileGetInfoResponse.encode(e.fileGetInfo, t.uint32(106).fork()).ldelim(), null != e.transactionGetReceipt && Object.hasOwnProperty.call(e, "transactionGetReceipt") && l.proto.TransactionGetReceiptResponse.encode(e.transactionGetReceipt, t.uint32(114).fork()).ldelim(), null != e.transactionGetRecord && Object.hasOwnProperty.call(e, "transactionGetRecord") && l.proto.TransactionGetRecordResponse.encode(e.transactionGetRecord, t.uint32(122).fork()).ldelim(), null != e.transactionGetFastRecord && Object.hasOwnProperty.call(e, "transactionGetFastRecord") && l.proto.TransactionGetFastRecordResponse.encode(e.transactionGetFastRecord, t.uint32(130).fork()).ldelim(), null != e.consensusGetTopicInfo && Object.hasOwnProperty.call(e, "consensusGetTopicInfo") && l.proto.ConsensusGetTopicInfoResponse.encode(e.consensusGetTopicInfo, t.uint32(1202).fork()).ldelim(), null != e.networkGetVersionInfo && Object.hasOwnProperty.call(e, "networkGetVersionInfo") && l.proto.NetworkGetVersionInfoResponse.encode(e.networkGetVersionInfo, t.uint32(1210).fork()).ldelim(), null != e.tokenGetInfo && Object.hasOwnProperty.call(e, "tokenGetInfo") && l.proto.TokenGetInfoResponse.encode(e.tokenGetInfo, t.uint32(1218).fork()).ldelim(), null != e.scheduleGetInfo && Object.hasOwnProperty.call(e, "scheduleGetInfo") && l.proto.ScheduleGetInfoResponse.encode(e.scheduleGetInfo, t.uint32(1226).fork()).ldelim(), null != e.tokenGetAccountNftInfos && Object.hasOwnProperty.call(e, "tokenGetAccountNftInfos") && l.proto.TokenGetAccountNftInfosResponse.encode(e.tokenGetAccountNftInfos, t.uint32(1234).fork()).ldelim(), null != e.tokenGetNftInfo && Object.hasOwnProperty.call(e, "tokenGetNftInfo") && l.proto.TokenGetNftInfoResponse.encode(e.tokenGetNftInfo, t.uint32(1242).fork()).ldelim(), null != e.tokenGetNftInfos && Object.hasOwnProperty.call(e, "tokenGetNftInfos") && l.proto.TokenGetNftInfosResponse.encode(e.tokenGetNftInfos, t.uint32(1250).fork()).ldelim(), null != e.networkGetExecutionTime && Object.hasOwnProperty.call(e, "networkGetExecutionTime") && l.proto.NetworkGetExecutionTimeResponse.encode(e.networkGetExecutionTime, t.uint32(1258).fork()).ldelim(), null != e.accountDetails && Object.hasOwnProperty.call(e, "accountDetails") && l.proto.GetAccountDetailsResponse.encode(e.accountDetails, t.uint32(1266).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.Response; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.getByKey = l.proto.GetByKeyResponse.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.getBySolidityID = l.proto.GetBySolidityIDResponse.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.contractCallLocal = l.proto.ContractCallLocalResponse.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.contractGetBytecodeResponse = l.proto.ContractGetBytecodeResponse.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.contractGetInfo = l.proto.ContractGetInfoResponse.decode(e, e.uint32());
                                        break;
                                    case 6:
                                        n.contractGetRecordsResponse = l.proto.ContractGetRecordsResponse.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.cryptogetAccountBalance = l.proto.CryptoGetAccountBalanceResponse.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.cryptoGetAccountRecords = l.proto.CryptoGetAccountRecordsResponse.decode(e, e.uint32());
                                        break;
                                    case 9:
                                        n.cryptoGetInfo = l.proto.CryptoGetInfoResponse.decode(e, e.uint32());
                                        break;
                                    case 10:
                                        n.cryptoGetLiveHash = l.proto.CryptoGetLiveHashResponse.decode(e, e.uint32());
                                        break;
                                    case 11:
                                        n.cryptoGetProxyStakers = l.proto.CryptoGetStakersResponse.decode(e, e.uint32());
                                        break;
                                    case 12:
                                        n.fileGetContents = l.proto.FileGetContentsResponse.decode(e, e.uint32());
                                        break;
                                    case 13:
                                        n.fileGetInfo = l.proto.FileGetInfoResponse.decode(e, e.uint32());
                                        break;
                                    case 14:
                                        n.transactionGetReceipt = l.proto.TransactionGetReceiptResponse.decode(e, e.uint32());
                                        break;
                                    case 15:
                                        n.transactionGetRecord = l.proto.TransactionGetRecordResponse.decode(e, e.uint32());
                                        break;
                                    case 16:
                                        n.transactionGetFastRecord = l.proto.TransactionGetFastRecordResponse.decode(e, e.uint32());
                                        break;
                                    case 150:
                                        n.consensusGetTopicInfo = l.proto.ConsensusGetTopicInfoResponse.decode(e, e.uint32());
                                        break;
                                    case 151:
                                        n.networkGetVersionInfo = l.proto.NetworkGetVersionInfoResponse.decode(e, e.uint32());
                                        break;
                                    case 152:
                                        n.tokenGetInfo = l.proto.TokenGetInfoResponse.decode(e, e.uint32());
                                        break;
                                    case 153:
                                        n.scheduleGetInfo = l.proto.ScheduleGetInfoResponse.decode(e, e.uint32());
                                        break;
                                    case 154:
                                        n.tokenGetAccountNftInfos = l.proto.TokenGetAccountNftInfosResponse.decode(e, e.uint32());
                                        break;
                                    case 155:
                                        n.tokenGetNftInfo = l.proto.TokenGetNftInfoResponse.decode(e, e.uint32());
                                        break;
                                    case 156:
                                        n.tokenGetNftInfos = l.proto.TokenGetNftInfosResponse.decode(e, e.uint32());
                                        break;
                                    case 157:
                                        n.networkGetExecutionTime = l.proto.NetworkGetExecutionTimeResponse.decode(e, e.uint32());
                                        break;
                                    case 158:
                                        n.accountDetails = l.proto.GetAccountDetailsResponse.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.CryptoService = function() {
                        function e(e, t, o) {
                            n.rpc.Service.call(this, e, t, o)
                        }
                        return (e.prototype = Object.create(n.rpc.Service.prototype)).constructor = e, e.create = function(e, t, o) {
                            return new this(e, t, o)
                        }, Object.defineProperty(e.prototype.createAccount = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "createAccount"
                        }), Object.defineProperty(e.prototype.updateAccount = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "updateAccount"
                        }), Object.defineProperty(e.prototype.cryptoTransfer = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "cryptoTransfer"
                        }), Object.defineProperty(e.prototype.cryptoDelete = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "cryptoDelete"
                        }), Object.defineProperty(e.prototype.approveAllowances = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "approveAllowances"
                        }), Object.defineProperty(e.prototype.deleteAllowances = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "deleteAllowances"
                        }), Object.defineProperty(e.prototype.addLiveHash = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "addLiveHash"
                        }), Object.defineProperty(e.prototype.deleteLiveHash = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "deleteLiveHash"
                        }), Object.defineProperty(e.prototype.getLiveHash = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getLiveHash"
                        }), Object.defineProperty(e.prototype.getAccountRecords = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getAccountRecords"
                        }), Object.defineProperty(e.prototype.cryptoGetBalance = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "cryptoGetBalance"
                        }), Object.defineProperty(e.prototype.getAccountInfo = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getAccountInfo"
                        }), Object.defineProperty(e.prototype.getTransactionReceipts = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getTransactionReceipts"
                        }), Object.defineProperty(e.prototype.getFastTransactionRecord = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getFastTransactionRecord"
                        }), Object.defineProperty(e.prototype.getTxRecordByTxID = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getTxRecordByTxID"
                        }), Object.defineProperty(e.prototype.getStakersByAccountID = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getStakersByAccountID"
                        }), e
                    }(), e.FileService = function() {
                        function e(e, t, o) {
                            n.rpc.Service.call(this, e, t, o)
                        }
                        return (e.prototype = Object.create(n.rpc.Service.prototype)).constructor = e, e.create = function(e, t, o) {
                            return new this(e, t, o)
                        }, Object.defineProperty(e.prototype.createFile = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "createFile"
                        }), Object.defineProperty(e.prototype.updateFile = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "updateFile"
                        }), Object.defineProperty(e.prototype.deleteFile = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "deleteFile"
                        }), Object.defineProperty(e.prototype.appendContent = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "appendContent"
                        }), Object.defineProperty(e.prototype.getFileContent = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getFileContent"
                        }), Object.defineProperty(e.prototype.getFileInfo = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getFileInfo"
                        }), Object.defineProperty(e.prototype.systemDelete = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "systemDelete"
                        }), Object.defineProperty(e.prototype.systemUndelete = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "systemUndelete"
                        }), e
                    }(), e.FreezeService = function() {
                        function e(e, t, o) {
                            n.rpc.Service.call(this, e, t, o)
                        }
                        return (e.prototype = Object.create(n.rpc.Service.prototype)).constructor = e, e.create = function(e, t, o) {
                            return new this(e, t, o)
                        }, Object.defineProperty(e.prototype.freeze = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "freeze"
                        }), e
                    }(), e.NetworkService = function() {
                        function e(e, t, o) {
                            n.rpc.Service.call(this, e, t, o)
                        }
                        return (e.prototype = Object.create(n.rpc.Service.prototype)).constructor = e, e.create = function(e, t, o) {
                            return new this(e, t, o)
                        }, Object.defineProperty(e.prototype.getVersionInfo = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getVersionInfo"
                        }), Object.defineProperty(e.prototype.getExecutionTime = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getExecutionTime"
                        }), Object.defineProperty(e.prototype.uncheckedSubmit = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "uncheckedSubmit"
                        }), Object.defineProperty(e.prototype.getAccountDetails = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getAccountDetails"
                        }), e
                    }(), e.ScheduleService = function() {
                        function e(e, t, o) {
                            n.rpc.Service.call(this, e, t, o)
                        }
                        return (e.prototype = Object.create(n.rpc.Service.prototype)).constructor = e, e.create = function(e, t, o) {
                            return new this(e, t, o)
                        }, Object.defineProperty(e.prototype.createSchedule = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "createSchedule"
                        }), Object.defineProperty(e.prototype.signSchedule = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "signSchedule"
                        }), Object.defineProperty(e.prototype.deleteSchedule = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "deleteSchedule"
                        }), Object.defineProperty(e.prototype.getScheduleInfo = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getScheduleInfo"
                        }), e
                    }(), e.SmartContractService = function() {
                        function e(e, t, o) {
                            n.rpc.Service.call(this, e, t, o)
                        }
                        return (e.prototype = Object.create(n.rpc.Service.prototype)).constructor = e, e.create = function(e, t, o) {
                            return new this(e, t, o)
                        }, Object.defineProperty(e.prototype.createContract = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "createContract"
                        }), Object.defineProperty(e.prototype.updateContract = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "updateContract"
                        }), Object.defineProperty(e.prototype.contractCallMethod = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "contractCallMethod"
                        }), Object.defineProperty(e.prototype.getContractInfo = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getContractInfo"
                        }), Object.defineProperty(e.prototype.contractCallLocalMethod = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "contractCallLocalMethod"
                        }), Object.defineProperty(e.prototype.contractGetBytecode = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "ContractGetBytecode"
                        }), Object.defineProperty(e.prototype.getBySolidityID = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getBySolidityID"
                        }), Object.defineProperty(e.prototype.getTxRecordByContractID = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getTxRecordByContractID"
                        }), Object.defineProperty(e.prototype.deleteContract = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "deleteContract"
                        }), Object.defineProperty(e.prototype.systemDelete = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "systemDelete"
                        }), Object.defineProperty(e.prototype.systemUndelete = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "systemUndelete"
                        }), Object.defineProperty(e.prototype.callEthereum = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "callEthereum"
                        }), e
                    }(), e.ThrottleGroup = function() {
                        function e(e) {
                            if (this.operations = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.operations = a.emptyArray, e.prototype.milliOpsPerSec = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.operations && e.operations.length) {
                                t.uint32(10).fork();
                                for (var o = 0; o < e.operations.length; ++o) t.int32(e.operations[o]);
                                t.ldelim()
                            }
                            return null != e.milliOpsPerSec && Object.hasOwnProperty.call(e, "milliOpsPerSec") && t.uint32(16).uint64(e.milliOpsPerSec), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ThrottleGroup; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        if (n.operations && n.operations.length || (n.operations = []), 2 == (7 & c))
                                            for (var a = e.uint32() + e.pos; e.pos < a;) n.operations.push(e.int32());
                                        else n.operations.push(e.int32());
                                        break;
                                    case 2:
                                        n.milliOpsPerSec = e.uint64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ThrottleBucket = function() {
                        function e(e) {
                            if (this.throttleGroups = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.name = "", e.prototype.burstPeriodMs = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.throttleGroups = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name), null != e.burstPeriodMs && Object.hasOwnProperty.call(e, "burstPeriodMs") && t.uint32(16).uint64(e.burstPeriodMs), null != e.throttleGroups && e.throttleGroups.length)
                                for (var o = 0; o < e.throttleGroups.length; ++o) l.proto.ThrottleGroup.encode(e.throttleGroups[o], t.uint32(26).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ThrottleBucket; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.name = e.string();
                                        break;
                                    case 2:
                                        n.burstPeriodMs = e.uint64();
                                        break;
                                    case 3:
                                        n.throttleGroups && n.throttleGroups.length || (n.throttleGroups = []), n.throttleGroups.push(l.proto.ThrottleGroup.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ThrottleDefinitions = function() {
                        function e(e) {
                            if (this.throttleBuckets = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.throttleBuckets = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.throttleBuckets && e.throttleBuckets.length)
                                for (var o = 0; o < e.throttleBuckets.length; ++o) l.proto.ThrottleBucket.encode(e.throttleBuckets[o], t.uint32(10).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ThrottleDefinitions; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.throttleBuckets && n.throttleBuckets.length || (n.throttleBuckets = []), n.throttleBuckets.push(l.proto.ThrottleBucket.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TokenService = function() {
                        function e(e, t, o) {
                            n.rpc.Service.call(this, e, t, o)
                        }
                        return (e.prototype = Object.create(n.rpc.Service.prototype)).constructor = e, e.create = function(e, t, o) {
                            return new this(e, t, o)
                        }, Object.defineProperty(e.prototype.createToken = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "createToken"
                        }), Object.defineProperty(e.prototype.updateToken = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "updateToken"
                        }), Object.defineProperty(e.prototype.mintToken = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "mintToken"
                        }), Object.defineProperty(e.prototype.burnToken = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "burnToken"
                        }), Object.defineProperty(e.prototype.deleteToken = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "deleteToken"
                        }), Object.defineProperty(e.prototype.wipeTokenAccount = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "wipeTokenAccount"
                        }), Object.defineProperty(e.prototype.freezeTokenAccount = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "freezeTokenAccount"
                        }), Object.defineProperty(e.prototype.unfreezeTokenAccount = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "unfreezeTokenAccount"
                        }), Object.defineProperty(e.prototype.grantKycToTokenAccount = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "grantKycToTokenAccount"
                        }), Object.defineProperty(e.prototype.revokeKycFromTokenAccount = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "revokeKycFromTokenAccount"
                        }), Object.defineProperty(e.prototype.associateTokens = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "associateTokens"
                        }), Object.defineProperty(e.prototype.dissociateTokens = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "dissociateTokens"
                        }), Object.defineProperty(e.prototype.updateTokenFeeSchedule = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "updateTokenFeeSchedule"
                        }), Object.defineProperty(e.prototype.getTokenInfo = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getTokenInfo"
                        }), Object.defineProperty(e.prototype.getAccountNftInfos = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getAccountNftInfos"
                        }), Object.defineProperty(e.prototype.getTokenNftInfo = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getTokenNftInfo"
                        }), Object.defineProperty(e.prototype.getTokenNftInfos = function e(t, o) {
                            return this.rpcCall(e, l.proto.Query, l.proto.Response, t, o)
                        }, "name", {
                            value: "getTokenNftInfos"
                        }), Object.defineProperty(e.prototype.pauseToken = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "pauseToken"
                        }), Object.defineProperty(e.prototype.unpauseToken = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "unpauseToken"
                        }), e
                    }(), e.SignedTransaction = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.bodyBytes = a.newBuffer([]), e.prototype.sigMap = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.bodyBytes && Object.hasOwnProperty.call(e, "bodyBytes") && t.uint32(10).bytes(e.bodyBytes), null != e.sigMap && Object.hasOwnProperty.call(e, "sigMap") && l.proto.SignatureMap.encode(e.sigMap, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SignedTransaction; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.bodyBytes = e.bytes();
                                        break;
                                    case 2:
                                        n.sigMap = l.proto.SignatureMap.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.UtilService = function() {
                        function e(e, t, o) {
                            n.rpc.Service.call(this, e, t, o)
                        }
                        return (e.prototype = Object.create(n.rpc.Service.prototype)).constructor = e, e.create = function(e, t, o) {
                            return new this(e, t, o)
                        }, Object.defineProperty(e.prototype.prng = function e(t, o) {
                            return this.rpcCall(e, l.proto.Transaction, l.proto.TransactionResponse, t, o)
                        }, "name", {
                            value: "prng"
                        }), e
                    }(), e.TokenUnitBalance = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.tokenId = null, e.prototype.balance = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.tokenId && Object.hasOwnProperty.call(e, "tokenId") && l.proto.TokenID.encode(e.tokenId, t.uint32(10).fork()).ldelim(), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(16).uint64(e.balance), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TokenUnitBalance; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.tokenId = l.proto.TokenID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.balance = e.uint64();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SingleAccountBalances = function() {
                        function e(e) {
                            if (this.tokenUnitBalances = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.accountID = null, e.prototype.hbarBalance = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.prototype.tokenUnitBalances = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.accountID && Object.hasOwnProperty.call(e, "accountID") && l.proto.AccountID.encode(e.accountID, t.uint32(10).fork()).ldelim(), null != e.hbarBalance && Object.hasOwnProperty.call(e, "hbarBalance") && t.uint32(16).uint64(e.hbarBalance), null != e.tokenUnitBalances && e.tokenUnitBalances.length)
                                for (var o = 0; o < e.tokenUnitBalances.length; ++o) l.proto.TokenUnitBalance.encode(e.tokenUnitBalances[o], t.uint32(26).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SingleAccountBalances; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.accountID = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.hbarBalance = e.uint64();
                                        break;
                                    case 3:
                                        n.tokenUnitBalances && n.tokenUnitBalances.length || (n.tokenUnitBalances = []), n.tokenUnitBalances.push(l.proto.TokenUnitBalance.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.AllAccountBalances = function() {
                        function e(e) {
                            if (this.allAccounts = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.consensusTimestamp = null, e.prototype.allAccounts = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.consensusTimestamp && Object.hasOwnProperty.call(e, "consensusTimestamp") && l.proto.Timestamp.encode(e.consensusTimestamp, t.uint32(10).fork()).ldelim(), null != e.allAccounts && e.allAccounts.length)
                                for (var o = 0; o < e.allAccounts.length; ++o) l.proto.SingleAccountBalances.encode(e.allAccounts[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.AllAccountBalances; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.consensusTimestamp = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.allAccounts && n.allAccounts.length || (n.allAccounts = []), n.allAccounts.push(l.proto.SingleAccountBalances.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractActions = function() {
                        function e(e) {
                            if (this.contractActions = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.contractActions = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.contractActions && e.contractActions.length)
                                for (var o = 0; o < e.contractActions.length; ++o) l.proto.ContractAction.encode(e.contractActions[o], t.uint32(10).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractActions; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.contractActions && n.contractActions.length || (n.contractActions = []), n.contractActions.push(l.proto.ContractAction.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractActionType = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "NO_ACTION"] = 0, t[e[1] = "CALL"] = 1, t[e[2] = "CREATE"] = 2, t[e[3] = "PRECOMPILE"] = 3, t[e[4] = "SYSTEM"] = 4, t
                    }(), e.CallOperationType = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "OP_UNKNOWN"] = 0, t[e[1] = "OP_CALL"] = 1, t[e[2] = "OP_CALLCODE"] = 2, t[e[3] = "OP_DELEGATECALL"] = 3, t[e[4] = "OP_STATICCALL"] = 4, t[e[5] = "OP_CREATE"] = 5, t[e[6] = "OP_CREATE2"] = 6, t
                    }(), e.ContractAction = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.callType = 0, e.prototype.callingAccount = null, e.prototype.callingContract = null, e.prototype.gas = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.input = a.newBuffer([]), e.prototype.recipientAccount = null, e.prototype.recipientContract = null, e.prototype.invalidSolidityAddress = null, e.prototype.value = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.gasUsed = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.output = null, e.prototype.revertReason = null, e.prototype.error = null, e.prototype.callDepth = 0, e.prototype.callOperationType = 0, Object.defineProperty(e.prototype, "caller", {
                            get: a.oneOfGetter(t = ["callingAccount", "callingContract"]),
                            set: a.oneOfSetter(t)
                        }), Object.defineProperty(e.prototype, "recipient", {
                            get: a.oneOfGetter(t = ["recipientAccount", "recipientContract", "invalidSolidityAddress"]),
                            set: a.oneOfSetter(t)
                        }), Object.defineProperty(e.prototype, "resultData", {
                            get: a.oneOfGetter(t = ["output", "revertReason", "error"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.callType && Object.hasOwnProperty.call(e, "callType") && t.uint32(8).int32(e.callType), null != e.callingAccount && Object.hasOwnProperty.call(e, "callingAccount") && l.proto.AccountID.encode(e.callingAccount, t.uint32(18).fork()).ldelim(), null != e.callingContract && Object.hasOwnProperty.call(e, "callingContract") && l.proto.ContractID.encode(e.callingContract, t.uint32(26).fork()).ldelim(), null != e.gas && Object.hasOwnProperty.call(e, "gas") && t.uint32(32).int64(e.gas), null != e.input && Object.hasOwnProperty.call(e, "input") && t.uint32(42).bytes(e.input), null != e.recipientAccount && Object.hasOwnProperty.call(e, "recipientAccount") && l.proto.AccountID.encode(e.recipientAccount, t.uint32(50).fork()).ldelim(), null != e.recipientContract && Object.hasOwnProperty.call(e, "recipientContract") && l.proto.ContractID.encode(e.recipientContract, t.uint32(58).fork()).ldelim(), null != e.invalidSolidityAddress && Object.hasOwnProperty.call(e, "invalidSolidityAddress") && t.uint32(66).bytes(e.invalidSolidityAddress), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(72).int64(e.value), null != e.gasUsed && Object.hasOwnProperty.call(e, "gasUsed") && t.uint32(80).int64(e.gasUsed), null != e.output && Object.hasOwnProperty.call(e, "output") && t.uint32(90).bytes(e.output), null != e.revertReason && Object.hasOwnProperty.call(e, "revertReason") && t.uint32(98).bytes(e.revertReason), null != e.error && Object.hasOwnProperty.call(e, "error") && t.uint32(106).bytes(e.error), null != e.callDepth && Object.hasOwnProperty.call(e, "callDepth") && t.uint32(112).int32(e.callDepth), null != e.callOperationType && Object.hasOwnProperty.call(e, "callOperationType") && t.uint32(120).int32(e.callOperationType), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractAction; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.callType = e.int32();
                                        break;
                                    case 2:
                                        n.callingAccount = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.callingContract = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.gas = e.int64();
                                        break;
                                    case 5:
                                        n.input = e.bytes();
                                        break;
                                    case 6:
                                        n.recipientAccount = l.proto.AccountID.decode(e, e.uint32());
                                        break;
                                    case 7:
                                        n.recipientContract = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 8:
                                        n.invalidSolidityAddress = e.bytes();
                                        break;
                                    case 9:
                                        n.value = e.int64();
                                        break;
                                    case 10:
                                        n.gasUsed = e.int64();
                                        break;
                                    case 11:
                                        n.output = e.bytes();
                                        break;
                                    case 12:
                                        n.revertReason = e.bytes();
                                        break;
                                    case 13:
                                        n.error = e.bytes();
                                        break;
                                    case 14:
                                        n.callDepth = e.int32();
                                        break;
                                    case 15:
                                        n.callOperationType = e.int32();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractBytecode = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.contractId = null, e.prototype.initcode = a.newBuffer([]), e.prototype.runtimeBytecode = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.contractId && Object.hasOwnProperty.call(e, "contractId") && l.proto.ContractID.encode(e.contractId, t.uint32(10).fork()).ldelim(), null != e.initcode && Object.hasOwnProperty.call(e, "initcode") && t.uint32(18).bytes(e.initcode), null != e.runtimeBytecode && Object.hasOwnProperty.call(e, "runtimeBytecode") && t.uint32(26).bytes(e.runtimeBytecode), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractBytecode; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.contractId = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.initcode = e.bytes();
                                        break;
                                    case 3:
                                        n.runtimeBytecode = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractStateChanges = function() {
                        function e(e) {
                            if (this.contractStateChanges = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.contractStateChanges = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.contractStateChanges && e.contractStateChanges.length)
                                for (var o = 0; o < e.contractStateChanges.length; ++o) l.proto.ContractStateChange.encode(e.contractStateChanges[o], t.uint32(10).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractStateChanges; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.contractStateChanges && n.contractStateChanges.length || (n.contractStateChanges = []), n.contractStateChanges.push(l.proto.ContractStateChange.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.ContractStateChange = function() {
                        function e(e) {
                            if (this.storageChanges = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.contractId = null, e.prototype.storageChanges = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.contractId && Object.hasOwnProperty.call(e, "contractId") && l.proto.ContractID.encode(e.contractId, t.uint32(10).fork()).ldelim(), null != e.storageChanges && e.storageChanges.length)
                                for (var o = 0; o < e.storageChanges.length; ++o) l.proto.StorageChange.encode(e.storageChanges[o], t.uint32(18).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.ContractStateChange; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.contractId = l.proto.ContractID.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.storageChanges && n.storageChanges.length || (n.storageChanges = []), n.storageChanges.push(l.proto.StorageChange.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.StorageChange = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.slot = a.newBuffer([]), e.prototype.valueRead = a.newBuffer([]), e.prototype.valueWritten = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.slot && Object.hasOwnProperty.call(e, "slot") && t.uint32(10).bytes(e.slot), null != e.valueRead && Object.hasOwnProperty.call(e, "valueRead") && t.uint32(18).bytes(e.valueRead), null != e.valueWritten && Object.hasOwnProperty.call(e, "valueWritten") && l.google.protobuf.BytesValue.encode(e.valueWritten, t.uint32(26).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.StorageChange; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.slot = e.bytes();
                                        break;
                                    case 2:
                                        n.valueRead = e.bytes();
                                        break;
                                    case 3:
                                        n.valueWritten = l.google.protobuf.BytesValue.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.HashAlgorithm = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "HASH_ALGORITHM_UNKNOWN"] = 0, t[e[1] = "SHA_384"] = 1, t
                    }(), e.HashObject = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.algorithm = 0, e.prototype.length = 0, e.prototype.hash = a.newBuffer([]), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.algorithm && Object.hasOwnProperty.call(e, "algorithm") && t.uint32(8).int32(e.algorithm), null != e.length && Object.hasOwnProperty.call(e, "length") && t.uint32(16).int32(e.length), null != e.hash && Object.hasOwnProperty.call(e, "hash") && t.uint32(26).bytes(e.hash), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.HashObject; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.algorithm = e.int32();
                                        break;
                                    case 2:
                                        n.length = e.int32();
                                        break;
                                    case 3:
                                        n.hash = e.bytes();
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.RecordStreamFile = function() {
                        function e(e) {
                            if (this.recordStreamItems = [], this.sidecars = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.hapiProtoVersion = null, e.prototype.startObjectRunningHash = null, e.prototype.recordStreamItems = a.emptyArray, e.prototype.endObjectRunningHash = null, e.prototype.blockNumber = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.sidecars = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.hapiProtoVersion && Object.hasOwnProperty.call(e, "hapiProtoVersion") && l.proto.SemanticVersion.encode(e.hapiProtoVersion, t.uint32(10).fork()).ldelim(), null != e.startObjectRunningHash && Object.hasOwnProperty.call(e, "startObjectRunningHash") && l.proto.HashObject.encode(e.startObjectRunningHash, t.uint32(18).fork()).ldelim(), null != e.recordStreamItems && e.recordStreamItems.length)
                                for (var o = 0; o < e.recordStreamItems.length; ++o) l.proto.RecordStreamItem.encode(e.recordStreamItems[o], t.uint32(26).fork()).ldelim();
                            if (null != e.endObjectRunningHash && Object.hasOwnProperty.call(e, "endObjectRunningHash") && l.proto.HashObject.encode(e.endObjectRunningHash, t.uint32(34).fork()).ldelim(), null != e.blockNumber && Object.hasOwnProperty.call(e, "blockNumber") && t.uint32(40).int64(e.blockNumber), null != e.sidecars && e.sidecars.length)
                                for (o = 0; o < e.sidecars.length; ++o) l.proto.SidecarMetadata.encode(e.sidecars[o], t.uint32(50).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.RecordStreamFile; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.hapiProtoVersion = l.proto.SemanticVersion.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.startObjectRunningHash = l.proto.HashObject.decode(e, e.uint32());
                                        break;
                                    case 3:
                                        n.recordStreamItems && n.recordStreamItems.length || (n.recordStreamItems = []), n.recordStreamItems.push(l.proto.RecordStreamItem.decode(e, e.uint32()));
                                        break;
                                    case 4:
                                        n.endObjectRunningHash = l.proto.HashObject.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.blockNumber = e.int64();
                                        break;
                                    case 6:
                                        n.sidecars && n.sidecars.length || (n.sidecars = []), n.sidecars.push(l.proto.SidecarMetadata.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.RecordStreamItem = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.transaction = null, e.prototype.record = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.transaction && Object.hasOwnProperty.call(e, "transaction") && l.proto.Transaction.encode(e.transaction, t.uint32(10).fork()).ldelim(), null != e.record && Object.hasOwnProperty.call(e, "record") && l.proto.TransactionRecord.encode(e.record, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.RecordStreamItem; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.transaction = l.proto.Transaction.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.record = l.proto.TransactionRecord.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SidecarMetadata = function() {
                        function e(e) {
                            if (this.types = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.hash = null, e.prototype.id = 0, e.prototype.types = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.hash && Object.hasOwnProperty.call(e, "hash") && l.proto.HashObject.encode(e.hash, t.uint32(10).fork()).ldelim(), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(16).int32(e.id), null != e.types && e.types.length) {
                                t.uint32(26).fork();
                                for (var o = 0; o < e.types.length; ++o) t.int32(e.types[o]);
                                t.ldelim()
                            }
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SidecarMetadata; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.hash = l.proto.HashObject.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.id = e.int32();
                                        break;
                                    case 3:
                                        if (n.types && n.types.length || (n.types = []), 2 == (7 & c))
                                            for (var a = e.uint32() + e.pos; e.pos < a;) n.types.push(e.int32());
                                        else n.types.push(e.int32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SidecarType = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "SIDECAR_TYPE_UNKNOWN"] = 0, t[e[1] = "CONTRACT_STATE_CHANGE"] = 1, t[e[2] = "CONTRACT_ACTION"] = 2, t[e[3] = "CONTRACT_BYTECODE"] = 3, t
                    }(), e.SidecarFile = function() {
                        function e(e) {
                            if (this.sidecarRecords = [], e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.sidecarRecords = a.emptyArray, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            if (t || (t = c.create()), null != e.sidecarRecords && e.sidecarRecords.length)
                                for (var o = 0; o < e.sidecarRecords.length; ++o) l.proto.TransactionSidecarRecord.encode(e.sidecarRecords[o], t.uint32(10).fork()).ldelim();
                            return t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SidecarFile; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.sidecarRecords && n.sidecarRecords.length || (n.sidecarRecords = []), n.sidecarRecords.push(l.proto.TransactionSidecarRecord.decode(e, e.uint32()));
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.TransactionSidecarRecord = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        let t;
                        return e.prototype.consensusTimestamp = null, e.prototype.migration = !1, e.prototype.stateChanges = null, e.prototype.actions = null, e.prototype.bytecode = null, Object.defineProperty(e.prototype, "sidecarRecords", {
                            get: a.oneOfGetter(t = ["stateChanges", "actions", "bytecode"]),
                            set: a.oneOfSetter(t)
                        }), e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.consensusTimestamp && Object.hasOwnProperty.call(e, "consensusTimestamp") && l.proto.Timestamp.encode(e.consensusTimestamp, t.uint32(10).fork()).ldelim(), null != e.migration && Object.hasOwnProperty.call(e, "migration") && t.uint32(16).bool(e.migration), null != e.stateChanges && Object.hasOwnProperty.call(e, "stateChanges") && l.proto.ContractStateChanges.encode(e.stateChanges, t.uint32(26).fork()).ldelim(), null != e.actions && Object.hasOwnProperty.call(e, "actions") && l.proto.ContractActions.encode(e.actions, t.uint32(34).fork()).ldelim(), null != e.bytecode && Object.hasOwnProperty.call(e, "bytecode") && l.proto.ContractBytecode.encode(e.bytecode, t.uint32(42).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.TransactionSidecarRecord; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.consensusTimestamp = l.proto.Timestamp.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.migration = e.bool();
                                        break;
                                    case 3:
                                        n.stateChanges = l.proto.ContractStateChanges.decode(e, e.uint32());
                                        break;
                                    case 4:
                                        n.actions = l.proto.ContractActions.decode(e, e.uint32());
                                        break;
                                    case 5:
                                        n.bytecode = l.proto.ContractBytecode.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SignatureFile = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.fileSignature = null, e.prototype.metadataSignature = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.fileSignature && Object.hasOwnProperty.call(e, "fileSignature") && l.proto.SignatureObject.encode(e.fileSignature, t.uint32(10).fork()).ldelim(), null != e.metadataSignature && Object.hasOwnProperty.call(e, "metadataSignature") && l.proto.SignatureObject.encode(e.metadataSignature, t.uint32(18).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SignatureFile; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.fileSignature = l.proto.SignatureObject.decode(e, e.uint32());
                                        break;
                                    case 2:
                                        n.metadataSignature = l.proto.SignatureObject.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SignatureObject = function() {
                        function e(e) {
                            if (e)
                                for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                        }
                        return e.prototype.type = 0, e.prototype.length = 0, e.prototype.checksum = 0, e.prototype.signature = a.newBuffer([]), e.prototype.hashObject = null, e.create = function(t) {
                            return new e(t)
                        }, e.encode = function(e, t) {
                            return t || (t = c.create()), null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(8).int32(e.type), null != e.length && Object.hasOwnProperty.call(e, "length") && t.uint32(16).int32(e.length), null != e.checksum && Object.hasOwnProperty.call(e, "checksum") && t.uint32(24).int32(e.checksum), null != e.signature && Object.hasOwnProperty.call(e, "signature") && t.uint32(34).bytes(e.signature), null != e.hashObject && Object.hasOwnProperty.call(e, "hashObject") && l.proto.HashObject.encode(e.hashObject, t.uint32(42).fork()).ldelim(), t
                        }, e.decode = function(e, t) {
                            e instanceof r || (e = r.create(e));
                            for (var o = void 0 === t ? e.len : e.pos + t, n = new l.proto.SignatureObject; e.pos < o;) {
                                var c = e.uint32();
                                switch (c >>> 3) {
                                    case 1:
                                        n.type = e.int32();
                                        break;
                                    case 2:
                                        n.length = e.int32();
                                        break;
                                    case 3:
                                        n.checksum = e.int32();
                                        break;
                                    case 4:
                                        n.signature = e.bytes();
                                        break;
                                    case 5:
                                        n.hashObject = l.proto.HashObject.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & c)
                                }
                            }
                            return n
                        }, e
                    }(), e.SignatureType = function() {
                        const e = {},
                            t = Object.create(e);
                        return t[e[0] = "SIGNATURE_TYPE_UNKNOWN"] = 0, t[e[1] = "SHA_384_WITH_RSA"] = 1, t
                    }(), e
                })(),
                u = l.google = (() => {
                    const e = {};
                    return e.protobuf = function() {
                        const e = {};
                        return e.DoubleValue = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.value = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = c.create()), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(9).double(e.value), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.google.protobuf.DoubleValue; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.value = e.double();
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e.FloatValue = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.value = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = c.create()), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(13).float(e.value), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.google.protobuf.FloatValue; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.value = e.float();
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e.Int64Value = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.value = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = c.create()), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(8).int64(e.value), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.google.protobuf.Int64Value; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.value = e.int64();
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e.UInt64Value = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.value = a.Long ? a.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = c.create()), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(8).uint64(e.value), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.google.protobuf.UInt64Value; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.value = e.uint64();
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e.Int32Value = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.value = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = c.create()), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(8).int32(e.value), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.google.protobuf.Int32Value; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.value = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e.UInt32Value = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.value = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = c.create()), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(8).uint32(e.value), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.google.protobuf.UInt32Value; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.value = e.uint32();
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e.BoolValue = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.value = !1, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = c.create()), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(8).bool(e.value), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.google.protobuf.BoolValue; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.value = e.bool();
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e.StringValue = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.value = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = c.create()), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(10).string(e.value), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.google.protobuf.StringValue; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.value = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e.BytesValue = function() {
                            function e(e) {
                                if (e)
                                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[o]] && (this[t[o]] = e[t[o]])
                            }
                            return e.prototype.value = a.newBuffer([]), e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = c.create()), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(10).bytes(e.value), t
                            }, e.decode = function(e, t) {
                                e instanceof r || (e = r.create(e));
                                for (var o = void 0 === t ? e.len : e.pos + t, n = new l.google.protobuf.BytesValue; e.pos < o;) {
                                    var c = e.uint32();
                                    switch (c >>> 3) {
                                        case 1:
                                            n.value = e.bytes();
                                            break;
                                        default:
                                            e.skipType(7 & c)
                                    }
                                }
                                return n
                            }, e
                        }(), e
                    }(), e
                })()
        }
    }
]);