(window.webpackJsonp = window.webpackJsonp || []).push([
    [132], {
        108: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TopicId
            }));
            var o = n(42),
                r = n(11);
            class TopicId {
                constructor(t, e, n) {
                    const r = o.b(t, e, n);
                    this.shard = r.shard, this.realm = r.realm, this.num = r.num, this._checksum = null
                }
                static fromString(t) {
                    const e = o.d(t),
                        n = new TopicId(e);
                    return n._checksum = e.checksum, n
                }
                static _fromProtobuf(t) {
                    return new TopicId(null != t.shardNum ? t.shardNum : 0, null != t.realmNum ? t.realmNum : 0, null != t.topicNum ? t.topicNum : 0)
                }
                get checksum() {
                    return this._checksum
                }
                validate(t) {
                    console.warn("Deprecated: Use `validateChecksum` instead"), this.validateChecksum(t)
                }
                validateChecksum(t) {
                    o.h(this.shard, this.realm, this.num, this._checksum, t)
                }
                static fromBytes(t) {
                    return TopicId._fromProtobuf(r.proto.TopicID.decode(t))
                }
                static fromSolidityAddress(t) {
                    const [e, n, r] = o.c(t);
                    return new TopicId(e, n, r)
                }
                toSolidityAddress() {
                    return o.f([this.shard, this.realm, this.num])
                }
                _toProtobuf() {
                    return {
                        topicNum: this.num,
                        shardNum: this.shard,
                        realmNum: this.realm
                    }
                }
                toString() {
                    return `${this.shard.toString()}.${this.realm.toString()}.${this.num.toString()}`
                }
                toStringWithChecksum(t) {
                    return o.g(this.toString(), t)
                }
                toBytes() {
                    return r.proto.TopicID.encode(this._toProtobuf()).finish()
                }
                clone() {
                    const t = new TopicId(this);
                    return t._checksum = this._checksum, t
                }
                compare(t) {
                    return o.a([this.shard, this.realm, this.num], [t.shard, t.realm, t.num])
                }
            }
        },
        1188: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenNftTransfer
            }));
            var o = n(1),
                r = n.n(o),
                s = n(5),
                i = n(16);
            class TokenNftTransfer {
                constructor(t) {
                    this.tokenId = t.tokenId instanceof i.a ? t.tokenId : i.a.fromString(t.tokenId), this.senderAccountId = t.senderAccountId instanceof s.a ? t.senderAccountId : s.a.fromString(t.senderAccountId), this.receiverAccountId = t.receiverAccountId instanceof s.a ? t.receiverAccountId : s.a.fromString(t.receiverAccountId), this.serialNumber = r.a.fromValue(t.serialNumber), this.isApproved = t.isApproved
                }
                static _fromProtobuf(t) {
                    const e = [];
                    for (const n of t) {
                        const t = i.a._fromProtobuf(n.token);
                        for (const o of null != n.nftTransfers ? n.nftTransfers : []) e.push(new TokenNftTransfer({
                            tokenId: t,
                            senderAccountId: s.a._fromProtobuf(o.senderAccountID),
                            receiverAccountId: s.a._fromProtobuf(o.receiverAccountID),
                            serialNumber: null != o.serialNumber ? o.serialNumber : r.a.ZERO,
                            isApproved: 1 == o.isApproval
                        }))
                    }
                    return e
                }
                _toProtobuf() {
                    return {
                        senderAccountID: this.senderAccountId._toProtobuf(),
                        receiverAccountID: this.receiverAccountId._toProtobuf(),
                        serialNumber: this.serialNumber,
                        isApproval: this.isApproved
                    }
                }
            }
        },
        1517: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenAssociateTransaction
            }));
            var o = n(17),
                r = n(16),
                s = n(5),
                i = n(7);
            class TokenAssociateTransaction extends i.f {
                constructor(t = {}) {
                    super(), this._tokenIds = null, this._accountId = null, this._defaultMaxTransactionFee = new o.a(5), null != t.tokenIds && this.setTokenIds(t.tokenIds), null != t.accountId && this.setAccountId(t.accountId)
                }
                static _fromProtobuf(t, e, n, o, u) {
                    const a = u[0].tokenAssociate;
                    return i.f._fromProtobufTransactions(new TokenAssociateTransaction({
                        tokenIds: null != a.tokens ? a.tokens.map(t => r.a._fromProtobuf(t)) : void 0,
                        accountId: null != a.account ? s.a._fromProtobuf(a.account) : void 0
                    }), t, e, n, o, u)
                }
                get tokenIds() {
                    return this._tokenIds
                }
                setTokenIds(t) {
                    return this._requireNotFrozen(), this._tokenIds = t.map(t => "string" == typeof t ? r.a.fromString(t) : t.clone()), this
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._requireNotFrozen(), this._accountId = "string" == typeof t ? s.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._accountId && this._accountId.validateChecksum(t);
                    for (const e of null != this._tokenIds ? this._tokenIds : []) null != e && e.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.associateTokens(e)
                }
                _getTransactionDataCase() {
                    return "tokenAssociate"
                }
                _makeTransactionData() {
                    return {
                        tokens: null != this._tokenIds ? this._tokenIds.map(t => t._toProtobuf()) : null,
                        account: null != this._accountId ? this._accountId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TokenAssociateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            i.e.set("tokenAssociate", TokenAssociateTransaction._fromProtobuf)
        },
        1518: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenBurnTransaction
            }));
            var o = n(16),
                r = n(7),
                s = n(1),
                i = n.n(s);
            class TokenBurnTransaction extends r.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, this._amount = null, this._serials = [], null != t.tokenId && this.setTokenId(t.tokenId), null != t.amount && this.setAmount(t.amount), null != t.serials && this.setSerials(t.serials)
                }
                static _fromProtobuf(t, e, n, s, i) {
                    const u = i[0].tokenBurn;
                    return r.f._fromProtobufTransactions(new TokenBurnTransaction({
                        tokenId: null != u.token ? o.a._fromProtobuf(u.token) : void 0,
                        amount: null != u.amount ? u.amount : void 0,
                        serials: null != u.serialNumbers ? u.serialNumbers : void 0
                    }), t, e, n, s, i)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                get amount() {
                    return this._amount
                }
                setAmount(t) {
                    return this._requireNotFrozen(), this._amount = t instanceof i.a ? t : i.a.fromValue(t), this
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t)
                }
                get serials() {
                    return this._serials
                }
                setSerials(t) {
                    return this._requireNotFrozen(), this._serials = t.map(t => t instanceof i.a ? t : i.a.fromValue(t)), this
                }
                _execute(t, e) {
                    return t.token.burnToken(e)
                }
                _getTransactionDataCase() {
                    return "tokenBurn"
                }
                _makeTransactionData() {
                    return {
                        amount: this._amount,
                        serialNumbers: this._serials,
                        token: null != this._tokenId ? this._tokenId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TokenBurnTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            r.e.set("tokenBurn", TokenBurnTransaction._fromProtobuf)
        },
        1519: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenCreateTransaction
            }));
            var o = n(17),
                r = n(7),
                s = n(1),
                i = n.n(s),
                u = n(5),
                a = n(23),
                l = n(46),
                c = n(247),
                d = n(304),
                h = n(305),
                m = n(442),
                f = n(443),
                _ = n(25);
            class TokenCreateTransaction extends r.f {
                constructor(t = {}) {
                    super(), this._tokenName = null, this._tokenSymbol = null, this._decimals = null, this._initialSupply = null, this._treasuryAccountId = null, this._adminKey = null, this._kycKey = null, this._freezeKey = null, this._pauseKey = null, this._wipeKey = null, this._supplyKey = null, this._feeScheduleKey = null, this._freezeDefault = null, this._autoRenewAccountId = null, this._expirationTime = null, this._autoRenewPeriod = new l.a(r.b), this._tokenMemo = null, this._customFees = [], this._tokenType = null, this._supplyType = null, this._maxSupply = null, this._defaultMaxTransactionFee = new o.a(30), null != t.tokenName && this.setTokenName(t.tokenName), null != t.tokenSymbol && this.setTokenSymbol(t.tokenSymbol), null != t.decimals && this.setDecimals(t.decimals), null != t.initialSupply && this.setInitialSupply(t.initialSupply), null != t.treasuryAccountId && this.setTreasuryAccountId(t.treasuryAccountId), null != t.adminKey && this.setAdminKey(t.adminKey), null != t.kycKey && this.setKycKey(t.kycKey), null != t.freezeKey && this.setFreezeKey(t.freezeKey), null != t.pauseKey && this.setPauseKey(t.pauseKey), null != t.wipeKey && this.setWipeKey(t.wipeKey), null != t.supplyKey && this.setSupplyKey(t.supplyKey), null != t.feeScheduleKey && this.setFeeScheduleKey(t.feeScheduleKey), null != t.freezeDefault && this.setFreezeDefault(t.freezeDefault), null != t.autoRenewAccountId && this.setAutoRenewAccountId(t.autoRenewAccountId), null != t.expirationTime && this.setExpirationTime(t.expirationTime), null != t.autoRenewPeriod && this.setAutoRenewPeriod(t.autoRenewPeriod), null != t.tokenMemo && this.setTokenMemo(t.tokenMemo), null != t.customFees && this.setCustomFees(t.customFees), null != t.tokenType && this.setTokenType(t.tokenType), null != t.supplyType && this.setSupplyType(t.supplyType), null != t.maxSupply && this.setMaxSupply(t.maxSupply)
                }
                static _fromProtobuf(t, e, n, o, s) {
                    const i = s[0].tokenCreation;
                    return r.f._fromProtobufTransactions(new TokenCreateTransaction({
                        tokenName: null != i.name ? i.name : void 0,
                        tokenSymbol: null != i.symbol ? i.symbol : void 0,
                        decimals: null != i.decimals ? i.decimals : void 0,
                        initialSupply: null != i.initialSupply ? i.initialSupply : void 0,
                        treasuryAccountId: null != i.treasury ? u.a._fromProtobuf(i.treasury) : void 0,
                        adminKey: null != i.adminKey ? _.a._fromProtobufKey(i.adminKey) : void 0,
                        kycKey: null != i.kycKey ? _.a._fromProtobufKey(i.kycKey) : void 0,
                        freezeKey: null != i.freezeKey ? _.a._fromProtobufKey(i.freezeKey) : void 0,
                        pauseKey: null != i.pauseKey ? _.a._fromProtobufKey(i.pauseKey) : void 0,
                        wipeKey: null != i.wipeKey ? _.a._fromProtobufKey(i.wipeKey) : void 0,
                        supplyKey: null != i.supplyKey ? _.a._fromProtobufKey(i.supplyKey) : void 0,
                        feeScheduleKey: null != i.feeScheduleKey ? _.a._fromProtobufKey(i.feeScheduleKey) : void 0,
                        freezeDefault: null != i.freezeDefault ? i.freezeDefault : void 0,
                        autoRenewAccountId: null != i.autoRenewAccount ? u.a._fromProtobuf(i.autoRenewAccount) : void 0,
                        expirationTime: null != i.expiry ? a.a._fromProtobuf(i.expiry) : void 0,
                        autoRenewPeriod: null != i.autoRenewPeriod ? l.a._fromProtobuf(i.autoRenewPeriod) : void 0,
                        tokenMemo: null != i.memo ? i.memo : void 0,
                        customFees: null != i.customFees ? i.customFees.map(t => null != t.fixedFee ? c.a._fromProtobuf(t) : null != t.fractionalFee ? d.a._fromProtobuf(t) : h.a._fromProtobuf(t)) : void 0,
                        tokenType: null != i.tokenType ? m.a._fromCode(i.tokenType) : void 0,
                        supplyType: null != i.supplyType ? f.a._fromCode(i.supplyType) : void 0,
                        maxSupply: null != i.maxSupply ? i.maxSupply : void 0
                    }), t, e, n, o, s)
                }
                get tokenName() {
                    return this._tokenName
                }
                setTokenName(t) {
                    return this._requireNotFrozen(), this._tokenName = t, this
                }
                get tokenSymbol() {
                    return this._tokenSymbol
                }
                setTokenSymbol(t) {
                    return this._requireNotFrozen(), this._tokenSymbol = t, this
                }
                get decimals() {
                    return this._decimals
                }
                setDecimals(t) {
                    return this._requireNotFrozen(), this._decimals = t instanceof i.a ? t : i.a.fromValue(t), this
                }
                get initialSupply() {
                    return this._initialSupply
                }
                setInitialSupply(t) {
                    return this._requireNotFrozen(), this._initialSupply = i.a.fromValue(t), this
                }
                get treasuryAccountId() {
                    return this._treasuryAccountId
                }
                setTreasuryAccountId(t) {
                    return this._requireNotFrozen(), this._treasuryAccountId = "string" == typeof t ? u.a.fromString(t) : t.clone(), this
                }
                get adminKey() {
                    return this._adminKey
                }
                setAdminKey(t) {
                    return this._requireNotFrozen(), this._adminKey = t, this
                }
                get kycKey() {
                    return this._kycKey
                }
                setKycKey(t) {
                    return this._requireNotFrozen(), this._kycKey = t, this
                }
                get freezeKey() {
                    return this._freezeKey
                }
                setFreezeKey(t) {
                    return this._requireNotFrozen(), this._freezeKey = t, this
                }
                get pauseKey() {
                    return this._pauseKey
                }
                setPauseKey(t) {
                    return this._requireNotFrozen(), this._pauseKey = t, this
                }
                get wipeKey() {
                    return this._wipeKey
                }
                setWipeKey(t) {
                    return this._requireNotFrozen(), this._wipeKey = t, this
                }
                get supplyKey() {
                    return this._supplyKey
                }
                setSupplyKey(t) {
                    return this._requireNotFrozen(), this._supplyKey = t, this
                }
                get feeScheduleKey() {
                    return this._feeScheduleKey
                }
                setFeeScheduleKey(t) {
                    return this._requireNotFrozen(), this._feeScheduleKey = t, this
                }
                get freezeDefault() {
                    return this._freezeDefault
                }
                setFreezeDefault(t) {
                    return this._requireNotFrozen(), this._freezeDefault = t, this
                }
                get expirationTime() {
                    return this._expirationTime
                }
                setExpirationTime(t) {
                    return this._requireNotFrozen(), this._autoRenewPeriod = null, this._expirationTime = t instanceof a.a ? t : a.a.fromDate(t), this
                }
                get autoRenewAccountId() {
                    return this._autoRenewAccountId
                }
                setAutoRenewAccountId(t) {
                    return this._requireNotFrozen(), this._autoRenewAccountId = t instanceof u.a ? t : u.a.fromString(t), this
                }
                get autoRenewPeriod() {
                    return this._autoRenewPeriod
                }
                setAutoRenewPeriod(t) {
                    return this._requireNotFrozen(), this._autoRenewPeriod = t instanceof l.a ? t : new l.a(t), this
                }
                get tokenMemo() {
                    return this._tokenMemo
                }
                setTokenMemo(t) {
                    return this._requireNotFrozen(), this._tokenMemo = t, this
                }
                get customFees() {
                    return this._customFees
                }
                setCustomFees(t) {
                    return this._customFees = t, this
                }
                get tokenType() {
                    return this._tokenType
                }
                setTokenType(t) {
                    return this._tokenType = t, this
                }
                get supplyType() {
                    return this._supplyType
                }
                setSupplyType(t) {
                    return this._supplyType = t, this
                }
                get maxSupply() {
                    return this._maxSupply
                }
                setMaxSupply(t) {
                    return this._maxSupply = "number" == typeof t ? i.a.fromNumber(t) : t, this
                }
                _freezeWithAccountId(t) {
                    super._freezeWithAccountId(t), null != this._autoRenewPeriod && null != t && (this._autoRenewAccountId = t)
                }
                freezeWith(t) {
                    return null != t && null != t.operatorAccountId && this._freezeWithAccountId(t.operatorAccountId), super.freezeWith(t)
                }
                _validateChecksums(t) {
                    null != this._treasuryAccountId && this._treasuryAccountId.validateChecksum(t), null != this._autoRenewAccountId && this._autoRenewAccountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.createToken(e)
                }
                _getTransactionDataCase() {
                    return "tokenCreation"
                }
                _makeTransactionData() {
                    return {
                        name: this._tokenName,
                        symbol: this._tokenSymbol,
                        decimals: null != this._decimals ? this._decimals.toInt() : null,
                        initialSupply: this._initialSupply,
                        treasury: null != this._treasuryAccountId ? this._treasuryAccountId._toProtobuf() : null,
                        adminKey: null != this._adminKey ? this._adminKey._toProtobufKey() : null,
                        kycKey: null != this._kycKey ? this._kycKey._toProtobufKey() : null,
                        freezeKey: null != this._freezeKey ? this._freezeKey._toProtobufKey() : null,
                        pauseKey: null != this._pauseKey ? this._pauseKey._toProtobufKey() : null,
                        wipeKey: null != this._wipeKey ? this._wipeKey._toProtobufKey() : null,
                        supplyKey: null != this._supplyKey ? this._supplyKey._toProtobufKey() : null,
                        feeScheduleKey: null != this._feeScheduleKey ? this._feeScheduleKey._toProtobufKey() : null,
                        freezeDefault: this._freezeDefault,
                        autoRenewAccount: null != this._autoRenewAccountId ? this._autoRenewAccountId._toProtobuf() : null,
                        expiry: null != this._expirationTime ? this._expirationTime._toProtobuf() : null,
                        autoRenewPeriod: null != this._autoRenewPeriod ? this._autoRenewPeriod._toProtobuf() : null,
                        memo: this._tokenMemo,
                        customFees: this.customFees.map(t => t._toProtobuf()),
                        tokenType: null != this._tokenType ? this._tokenType._code : null,
                        supplyType: null != this._supplyType ? this._supplyType._code : null,
                        maxSupply: this.maxSupply
                    }
                }
                _getLogId() {
                    return "TokenCreateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            r.e.set("tokenCreation", TokenCreateTransaction._fromProtobuf)
        },
        1520: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenDeleteTransaction
            }));
            var o = n(16),
                r = n(7);
            class TokenDeleteTransaction extends r.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, null != t.tokenId && this.setTokenId(t.tokenId)
                }
                static _fromProtobuf(t, e, n, s, i) {
                    const u = i[0].tokenDeletion;
                    return r.f._fromProtobufTransactions(new TokenDeleteTransaction({
                        tokenId: null != u.token ? o.a._fromProtobuf(u.token) : void 0
                    }), t, e, n, s, i)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.deleteToken(e)
                }
                _getTransactionDataCase() {
                    return "tokenDeletion"
                }
                _makeTransactionData() {
                    return {
                        token: null != this._tokenId ? this._tokenId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TokenDeleteTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            r.e.set("tokenDeletion", TokenDeleteTransaction._fromProtobuf)
        },
        1521: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenDissociateTransaction
            }));
            var o = n(17),
                r = n(16),
                s = n(5),
                i = n(7);
            class TokenDissociateTransaction extends i.f {
                constructor(t = {}) {
                    super(), this._tokenIds = null, this._accountId = null, this._defaultMaxTransactionFee = new o.a(5), null != t.tokenIds && this.setTokenIds(t.tokenIds), null != t.accountId && this.setAccountId(t.accountId)
                }
                static _fromProtobuf(t, e, n, o, u) {
                    const a = u[0].tokenDissociate;
                    return i.f._fromProtobufTransactions(new TokenDissociateTransaction({
                        tokenIds: null != a.tokens ? a.tokens.map(t => r.a._fromProtobuf(t)) : void 0,
                        accountId: null != a.account ? s.a._fromProtobuf(a.account) : void 0
                    }), t, e, n, o, u)
                }
                get tokenIds() {
                    return this._tokenIds
                }
                setTokenIds(t) {
                    return this._requireNotFrozen(), this._tokenIds = t.map(t => "string" == typeof t ? r.a.fromString(t) : t.clone()), this
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._requireNotFrozen(), this._accountId = "string" == typeof t ? s.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._accountId && this._accountId.validateChecksum(t);
                    for (const e of null != this._tokenIds ? this._tokenIds : []) null != e && e.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.dissociateTokens(e)
                }
                _getTransactionDataCase() {
                    return "tokenDissociate"
                }
                _makeTransactionData() {
                    return {
                        tokens: null != this._tokenIds ? this._tokenIds.map(t => t._toProtobuf()) : null,
                        account: null != this._accountId ? this._accountId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TokenDissociateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            i.e.set("tokenDissociate", TokenDissociateTransaction._fromProtobuf)
        },
        1522: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenFeeScheduleUpdateTransaction
            }));
            var o = n(16),
                r = n(7),
                s = n(247),
                i = n(304),
                u = n(305);
            class TokenFeeScheduleUpdateTransaction extends r.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, this._customFees = [], null != t.tokenId && this.setTokenId(t.tokenId), null != t.customFees && this.setCustomFees(t.customFees)
                }
                static _fromProtobuf(t, e, n, a, l) {
                    const c = l[0].tokenFeeScheduleUpdate;
                    return r.f._fromProtobufTransactions(new TokenFeeScheduleUpdateTransaction({
                        tokenId: null != c.tokenId ? o.a._fromProtobuf(c.tokenId) : void 0,
                        customFees: null != c.customFees ? c.customFees.map(t => null != t.fixedFee ? s.a._fromProtobuf(t) : null != t.fractionalFee ? i.a._fromProtobuf(t) : u.a._fromProtobuf(t)) : void 0
                    }), t, e, n, a, l)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : o.a._fromProtobuf(t._toProtobuf()), this
                }
                get customFees() {
                    return this._customFees
                }
                setCustomFees(t) {
                    return this._requireNotFrozen(), this._customFees = t, this
                }
                _execute(t, e) {
                    return t.token.updateTokenFeeSchedule(e)
                }
                _getTransactionDataCase() {
                    return "tokenFeeScheduleUpdate"
                }
                _makeTransactionData() {
                    return {
                        tokenId: null != this._tokenId ? this._tokenId._toProtobuf() : null,
                        customFees: this._customFees.map(t => t._toProtobuf())
                    }
                }
                _getLogId() {
                    return "TokenFeeScheduleUpdateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            r.e.set("tokenFeeScheduleUpdate", TokenFeeScheduleUpdateTransaction._fromProtobuf)
        },
        1523: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenFreezeTransaction
            }));
            var o = n(16),
                r = n(5),
                s = n(7);
            class TokenFreezeTransaction extends s.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, this._accountId = null, null != t.tokenId && this.setTokenId(t.tokenId), null != t.accountId && this.setAccountId(t.accountId)
                }
                static _fromProtobuf(t, e, n, i, u) {
                    const a = u[0].tokenFreeze;
                    return s.f._fromProtobufTransactions(new TokenFreezeTransaction({
                        tokenId: null != a.token ? o.a._fromProtobuf(a.token) : void 0,
                        accountId: null != a.account ? r.a._fromProtobuf(a.account) : void 0
                    }), t, e, n, i, u)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._requireNotFrozen(), this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t), null != this._accountId && this._accountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.freezeTokenAccount(e)
                }
                _getTransactionDataCase() {
                    return "tokenFreeze"
                }
                _makeTransactionData() {
                    return {
                        token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
                        account: null != this._accountId ? this._accountId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TokenFreezeTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            s.e.set("tokenFreeze", TokenFreezeTransaction._fromProtobuf)
        },
        1524: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenGrantKycTransaction
            }));
            var o = n(16),
                r = n(5),
                s = n(7);
            class TokenGrantKycTransaction extends s.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, this._accountId = null, null != t.tokenId && this.setTokenId(t.tokenId), null != t.accountId && this.setAccountId(t.accountId)
                }
                static _fromProtobuf(t, e, n, i, u) {
                    const a = u[0].tokenGrantKyc;
                    return s.f._fromProtobufTransactions(new TokenGrantKycTransaction({
                        tokenId: null != a.token ? o.a._fromProtobuf(a.token) : void 0,
                        accountId: null != a.account ? r.a._fromProtobuf(a.account) : void 0
                    }), t, e, n, i, u)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._requireNotFrozen(), this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t), null != this._accountId && this._accountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.grantKycToTokenAccount(e)
                }
                _getTransactionDataCase() {
                    return "tokenGrantKyc"
                }
                _makeTransactionData() {
                    return {
                        token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
                        account: null != this._accountId ? this._accountId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TokenGrantKycTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            s.e.set("tokenGrantKyc", TokenGrantKycTransaction._fromProtobuf)
        },
        1525: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenInfoQuery
            }));
            var o = n(33),
                r = n(16),
                s = n(715),
                i = n(17);
            class TokenInfoQuery extends o.d {
                constructor(t = {}) {
                    super(), this._tokenId = null, null != t.tokenId && this.setTokenId(t.tokenId)
                }
                static _fromProtobuf(t) {
                    const e = t.tokenGetInfo;
                    return new TokenInfoQuery({
                        tokenId: null != e.token ? r.a._fromProtobuf(e.token) : void 0
                    })
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._tokenId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                async getCost(t) {
                    let e = await super.getCost(t);
                    return e.toTinybars().greaterThan(25) ? e : i.a.fromTinybars(25)
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.getTokenInfo(e)
                }
                _mapResponseHeader(t) {
                    return t.tokenGetInfo.header
                }
                _mapResponse(t, e, n) {
                    const o = t.tokenGetInfo;
                    return Promise.resolve(s.a._fromProtobuf(o.tokenInfo))
                }
                _onMakeRequest(t) {
                    return {
                        tokenGetInfo: {
                            header: t,
                            token: null != this._tokenId ? this._tokenId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "TokenInfoQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            o.b.set("tokenGetInfo", TokenInfoQuery._fromProtobuf)
        },
        1526: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenMintTransaction
            }));
            var o = n(16),
                r = n(7),
                s = n(1),
                i = n.n(s),
                u = n(10);
            class TokenMintTransaction extends r.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, this._amount = null, this._metadata = [], null != t.tokenId && this.setTokenId(t.tokenId), null != t.amount && this.setAmount(t.amount), null != t.metadata && this.setMetadata(t.metadata)
                }
                static _fromProtobuf(t, e, n, s, i) {
                    const u = i[0].tokenMint;
                    return r.f._fromProtobufTransactions(new TokenMintTransaction({
                        tokenId: null != u.token ? o.a._fromProtobuf(u.token) : void 0,
                        amount: null != u.amount ? u.amount : void 0,
                        metadata: null != u.metadata ? u.metadata : void 0
                    }), t, e, n, s, i)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                get amount() {
                    return this._amount
                }
                setAmount(t) {
                    return this._requireNotFrozen(), this._amount = t instanceof i.a ? t : i.a.fromValue(t), this
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t)
                }
                get metadata() {
                    return this._metadata
                }
                addMetadata(t) {
                    return this._requireNotFrozen(), "string" == typeof t && console.warn("Passing a `string` for token metadata is considered a bug, and has been removed. Please provide a `Uint8Array` instead."), this._metadata.push("string" == typeof t ? u.a(t) : t), this
                }
                setMetadata(t) {
                    this._requireNotFrozen();
                    for (const e of t)
                        if ("string" == typeof e) {
                            console.warn("Passing a `string` for token metadata is considered a bug, and has been removed. Please provide a `Uint8Array` instead.");
                            break
                        } return this._metadata = t.map(t => "string" == typeof t ? u.a(t) : t), this
                }
                _execute(t, e) {
                    return t.token.mintToken(e)
                }
                _getTransactionDataCase() {
                    return "tokenMint"
                }
                _makeTransactionData() {
                    return {
                        amount: this._amount,
                        token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
                        metadata: this._metadata
                    }
                }
                _getLogId() {
                    return "TokenMintTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            r.e.set("tokenMint", TokenMintTransaction._fromProtobuf)
        },
        1527: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenNftInfoQuery
            }));
            var o = n(33),
                r = n(94),
                s = n(5),
                i = n(16),
                u = n(716),
                a = n(17),
                l = n(1),
                c = n.n(l);
            class TokenNftInfoQuery extends o.d {
                constructor(t = {}) {
                    super(), this._nftId = null, null != t.nftId && this.setNftId(t.nftId), this._accountId = null, null != t.accountId && this.setAccountId(t.accountId), this._tokenId = null, null != t.tokenId && this.setTokenId(t.tokenId), this._start = null, null != t.start && this.setStart(t.start), this._end = null, null != t.end && this.setEnd(t.end)
                }
                static _fromProtobuf(t) {
                    if (null != t.tokenGetNftInfo) {
                        const e = t.tokenGetNftInfo;
                        return new TokenNftInfoQuery({
                            nftId: null != e.nftID ? r.a._fromProtobuf(e.nftID) : void 0
                        })
                    }
                    if (null != t.tokenGetAccountNftInfos) {
                        const e = t.tokenGetAccountNftInfos;
                        return new TokenNftInfoQuery({
                            accountId: null != e.accountID ? s.a._fromProtobuf(e.accountID) : void 0,
                            start: null != e.start ? e.start : void 0,
                            end: null != e.end ? e.end : void 0
                        })
                    } {
                        const e = t.tokenGetNftInfos;
                        return new TokenNftInfoQuery({
                            tokenId: null != e.tokenID ? i.a._fromProtobuf(e.tokenID) : void 0,
                            start: null != e.start ? e.start : void 0,
                            end: null != e.end ? e.end : void 0
                        })
                    }
                }
                get nftId() {
                    return this._nftId
                }
                setNftId(t) {
                    return this._nftId = "string" == typeof t ? r.a.fromString(t) : r.a._fromProtobuf(t._toProtobuf()), this
                }
                get accountId() {
                    return console.warn("`TokenNftInfoQuery.accountId` is deprecated with no replacement"), this._accountId
                }
                setAccountId(t) {
                    return console.warn("`TokenNftInfoQuery.setAccountId()` is deprecated with no replacement"), this._accountId = "string" == typeof t ? s.a.fromString(t) : s.a._fromProtobuf(t._toProtobuf()), this
                }
                get tokenId() {
                    return console.warn("`TokenNftInfoQuery.tokenId` is deprecated with no replacement"), this._tokenId
                }
                setTokenId(t) {
                    return console.warn("`TokenNftInfoQuery.setTokenId()` is deprecated with no replacement"), this._tokenId = "string" == typeof t ? i.a.fromString(t) : i.a._fromProtobuf(t._toProtobuf()), this
                }
                get start() {
                    return console.warn("`TokenNftInfoQuery.start` is deprecated with no replacement"), this._start
                }
                setStart(t) {
                    return console.warn("`TokenNftInfoQuery.setStart()` is deprecated with no replacement"), this._start = "number" == typeof t ? c.a.fromNumber(t) : t, this
                }
                get end() {
                    return console.warn("`TokenNftInfoQuery.end` is deprecated with no replacement"), this._end
                }
                setEnd(t) {
                    return console.warn("`TokenNftInfoQuery.setEnd()` is deprecated with no replacement"), this._end = "number" == typeof t ? c.a.fromNumber(t) : t, this
                }
                async getCost(t) {
                    let e = await super.getCost(t);
                    return e.toTinybars().greaterThan(25) ? e : a.a.fromTinybars(25)
                }
                _execute(t, e) {
                    return t.token.getTokenNftInfo(e)
                }
                _mapResponseHeader(t) {
                    return t.tokenGetNftInfo.header
                }
                _mapResponse(t, e, n) {
                    const o = [t.tokenGetNftInfo.nft];
                    return Promise.resolve(o.map(t => u.a._fromProtobuf(t)))
                }
                _onMakeRequest(t) {
                    return {
                        tokenGetNftInfo: {
                            header: t,
                            nftID: null != this._nftId ? this._nftId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "TokenNftInfoQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            o.b.set("tokenGetNftInfo", TokenNftInfoQuery._fromProtobuf)
        },
        1528: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenPauseTransaction
            }));
            var o = n(16),
                r = n(7);
            class TokenPauseTransaction extends r.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, null != t.tokenId && this.setTokenId(t.tokenId)
                }
                static _fromProtobuf(t, e, n, s, i) {
                    const u = i[0].tokenPause;
                    return r.f._fromProtobufTransactions(new TokenPauseTransaction({
                        tokenId: null != u.token ? o.a._fromProtobuf(u.token) : void 0
                    }), t, e, n, s, i)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.pauseToken(e)
                }
                _getTransactionDataCase() {
                    return "tokenPause"
                }
                _makeTransactionData() {
                    return {
                        token: null != this._tokenId ? this._tokenId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TokenPauseTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            r.e.set("tokenPause", TokenPauseTransaction._fromProtobuf)
        },
        1529: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenRevokeKycTransaction
            }));
            var o = n(16),
                r = n(5),
                s = n(7);
            class TokenRevokeKycTransaction extends s.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, this._accountId = null, null != t.tokenId && this.setTokenId(t.tokenId), null != t.accountId && this.setAccountId(t.accountId)
                }
                static _fromProtobuf(t, e, n, i, u) {
                    const a = u[0].tokenRevokeKyc;
                    return s.f._fromProtobufTransactions(new TokenRevokeKycTransaction({
                        tokenId: null != a.token ? o.a._fromProtobuf(a.token) : void 0,
                        accountId: null != a.account ? r.a._fromProtobuf(a.account) : void 0
                    }), t, e, n, i, u)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._requireNotFrozen(), this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t), null != this._accountId && this._accountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.revokeKycFromTokenAccount(e)
                }
                _getTransactionDataCase() {
                    return "tokenRevokeKyc"
                }
                _makeTransactionData() {
                    return {
                        token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
                        account: null != this._accountId ? this._accountId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TokenRevokeKycTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            s.e.set("tokenRevokeKyc", TokenRevokeKycTransaction._fromProtobuf)
        },
        1530: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenUnfreezeTransaction
            }));
            var o = n(16),
                r = n(5),
                s = n(7);
            class TokenUnfreezeTransaction extends s.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, this._accountId = null, null != t.tokenId && this.setTokenId(t.tokenId), null != t.accountId && this.setAccountId(t.accountId)
                }
                static _fromProtobuf(t, e, n, i, u) {
                    const a = u[0].tokenUnfreeze;
                    return s.f._fromProtobufTransactions(new TokenUnfreezeTransaction({
                        tokenId: null != a.token ? o.a._fromProtobuf(a.token) : void 0,
                        accountId: null != a.account ? r.a._fromProtobuf(a.account) : void 0
                    }), t, e, n, i, u)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._requireNotFrozen(), this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t), null != this._accountId && this._accountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.unfreezeTokenAccount(e)
                }
                _getTransactionDataCase() {
                    return "tokenUnfreeze"
                }
                _makeTransactionData() {
                    return {
                        token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
                        account: null != this._accountId ? this._accountId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TokenUnfreezeTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            s.e.set("tokenUnfreeze", TokenUnfreezeTransaction._fromProtobuf)
        },
        1531: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenUnpauseTransaction
            }));
            var o = n(16),
                r = n(7);
            class TokenUnpauseTransaction extends r.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, null != t.tokenId && this.setTokenId(t.tokenId)
                }
                static _fromProtobuf(t, e, n, s, i) {
                    const u = i[0].tokenUnpause;
                    return r.f._fromProtobufTransactions(new TokenUnpauseTransaction({
                        tokenId: null != u.token ? o.a._fromProtobuf(u.token) : void 0
                    }), t, e, n, s, i)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.unpauseToken(e)
                }
                _getTransactionDataCase() {
                    return "tokenUnpause"
                }
                _makeTransactionData() {
                    return {
                        token: null != this._tokenId ? this._tokenId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TokenUnpauseTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            r.e.set("tokenUnpause", TokenUnpauseTransaction._fromProtobuf)
        },
        1532: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenUpdateTransaction
            }));
            var o = n(16),
                r = n(7),
                s = n(5),
                i = n(23),
                u = n(46),
                a = n(25);
            class TokenUpdateTransaction extends r.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, this._tokenName = null, this._tokenSymbol = null, this._treasuryAccountId = null, this._adminKey = null, this._kycKey = null, this._freezeKey = null, this._wipeKey = null, this._supplyKey = null, this._autoRenewAccountId = null, this._expirationTime = null, this._autoRenewPeriod = null, this._tokenMemo = null, this._feeScheduleKey = null, this._pauseKey = null, null != t.tokenId && this.setTokenId(t.tokenId), null != t.tokenName && this.setTokenName(t.tokenName), null != t.tokenSymbol && this.setTokenSymbol(t.tokenSymbol), null != t.treasuryAccountId && this.setTreasuryAccountId(t.treasuryAccountId), null != t.adminKey && this.setAdminKey(t.adminKey), null != t.kycKey && this.setKycKey(t.kycKey), null != t.freezeKey && this.setFreezeKey(t.freezeKey), null != t.wipeKey && this.setWipeKey(t.wipeKey), null != t.supplyKey && this.setSupplyKey(t.supplyKey), null != t.autoRenewAccountId && this.setAutoRenewAccountId(t.autoRenewAccountId), null != t.expirationTime && this.setExpirationTime(t.expirationTime), null != t.autoRenewPeriod && this.setAutoRenewPeriod(t.autoRenewPeriod), null != t.tokenMemo && this.setTokenMemo(t.tokenMemo), null != t.feeScheduleKey && this.setFeeScheduleKey(t.feeScheduleKey), null != t.pauseKey && this.setPauseKey(t.pauseKey)
                }
                static _fromProtobuf(t, e, n, l, c) {
                    const d = c[0].tokenUpdate;
                    return r.f._fromProtobufTransactions(new TokenUpdateTransaction({
                        tokenId: null != d.token ? o.a._fromProtobuf(d.token) : void 0,
                        tokenName: null != d.name ? d.name : void 0,
                        tokenSymbol: null != d.symbol ? d.symbol : void 0,
                        treasuryAccountId: null != d.treasury ? s.a._fromProtobuf(d.treasury) : void 0,
                        adminKey: null != d.adminKey ? a.a._fromProtobufKey(d.adminKey) : void 0,
                        kycKey: null != d.kycKey ? a.a._fromProtobufKey(d.kycKey) : void 0,
                        freezeKey: null != d.freezeKey ? a.a._fromProtobufKey(d.freezeKey) : void 0,
                        wipeKey: null != d.wipeKey ? a.a._fromProtobufKey(d.wipeKey) : void 0,
                        supplyKey: null != d.supplyKey ? a.a._fromProtobufKey(d.supplyKey) : void 0,
                        autoRenewAccountId: null != d.autoRenewAccount ? s.a._fromProtobuf(d.autoRenewAccount) : void 0,
                        expirationTime: null != d.expiry ? i.a._fromProtobuf(d.expiry) : void 0,
                        autoRenewPeriod: null != d.autoRenewPeriod ? u.a._fromProtobuf(d.autoRenewPeriod) : void 0,
                        tokenMemo: null != d.memo && null != d.memo.value ? d.memo.value : void 0,
                        feeScheduleKey: null != d.feeScheduleKey ? a.a._fromProtobufKey(d.feeScheduleKey) : void 0
                    }), t, e, n, l, c)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                get tokenName() {
                    return this._tokenName
                }
                setTokenName(t) {
                    return this._requireNotFrozen(), this._tokenName = t, this
                }
                get tokenSymbol() {
                    return this._tokenSymbol
                }
                setTokenSymbol(t) {
                    return this._requireNotFrozen(), this._tokenSymbol = t, this
                }
                get treasuryAccountId() {
                    return this._treasuryAccountId
                }
                setTreasuryAccountId(t) {
                    return this._requireNotFrozen(), this._treasuryAccountId = "string" == typeof t ? s.a.fromString(t) : t.clone(), this
                }
                get adminKey() {
                    return this._adminKey
                }
                setAdminKey(t) {
                    return this._requireNotFrozen(), this._adminKey = t, this
                }
                get kycKey() {
                    return this._kycKey
                }
                setKycKey(t) {
                    return this._requireNotFrozen(), this._kycKey = t, this
                }
                get freezeKey() {
                    return this._freezeKey
                }
                setFreezeKey(t) {
                    return this._requireNotFrozen(), this._freezeKey = t, this
                }
                get wipeKey() {
                    return this._wipeKey
                }
                setWipeKey(t) {
                    return this._requireNotFrozen(), this._wipeKey = t, this
                }
                get supplyKey() {
                    return this._supplyKey
                }
                setSupplyKey(t) {
                    return this._requireNotFrozen(), this._supplyKey = t, this
                }
                setsupplyKey(t) {
                    return this._requireNotFrozen(), this._supplyKey = t, this
                }
                get expirationTime() {
                    return this._expirationTime
                }
                setExpirationTime(t) {
                    return this._requireNotFrozen(), this._expirationTime = t instanceof i.a ? t : i.a.fromDate(t), this
                }
                get autoRenewAccountId() {
                    return this._autoRenewAccountId
                }
                setAutoRenewAccountId(t) {
                    return this._requireNotFrozen(), this._autoRenewAccountId = t instanceof s.a ? t : s.a.fromString(t), this
                }
                get autoRenewPeriod() {
                    return this._autoRenewPeriod
                }
                setAutoRenewPeriod(t) {
                    return this._requireNotFrozen(), this._autoRenewPeriod = t instanceof u.a ? t : new u.a(t), this
                }
                get tokenMemo() {
                    return this._tokenMemo
                }
                setTokenMemo(t) {
                    return this._requireNotFrozen(), this._tokenMemo = t, this
                }
                get feeScheduleKey() {
                    return this._feeScheduleKey
                }
                setFeeScheduleKey(t) {
                    return this._requireNotFrozen(), this._feeScheduleKey = t, this
                }
                get pauseKey() {
                    return this._pauseKey
                }
                setPauseKey(t) {
                    return this._requireNotFrozen(), this._pauseKey = t, this
                }
                clearTokenMemo() {
                    return this._requireNotFrozen(), this._tokenMemo = null, this
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t), null != this._treasuryAccountId && this._treasuryAccountId.validateChecksum(t), null != this._autoRenewAccountId && this._autoRenewAccountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.token.updateToken(e)
                }
                _getTransactionDataCase() {
                    return "tokenUpdate"
                }
                _makeTransactionData() {
                    return {
                        token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
                        name: this.tokenName,
                        symbol: this.tokenSymbol,
                        treasury: null != this._treasuryAccountId ? this._treasuryAccountId._toProtobuf() : null,
                        adminKey: null != this._adminKey ? this._adminKey._toProtobufKey() : null,
                        kycKey: null != this._kycKey ? this._kycKey._toProtobufKey() : null,
                        freezeKey: null != this._freezeKey ? this._freezeKey._toProtobufKey() : null,
                        pauseKey: null != this._pauseKey ? this._pauseKey._toProtobufKey() : null,
                        wipeKey: null != this._wipeKey ? this._wipeKey._toProtobufKey() : null,
                        supplyKey: null != this._supplyKey ? this._supplyKey._toProtobufKey() : null,
                        autoRenewAccount: null != this._autoRenewAccountId ? this._autoRenewAccountId._toProtobuf() : null,
                        expiry: null != this._expirationTime ? this._expirationTime._toProtobuf() : null,
                        autoRenewPeriod: null != this._autoRenewPeriod ? this._autoRenewPeriod._toProtobuf() : null,
                        memo: null != this._tokenMemo ? {
                            value: this._tokenMemo
                        } : null,
                        feeScheduleKey: null != this._feeScheduleKey ? this._feeScheduleKey._toProtobufKey() : null
                    }
                }
                _getLogId() {
                    return "TokenUpdateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            r.e.set("tokenUpdate", TokenUpdateTransaction._fromProtobuf)
        },
        1533: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenWipeTransaction
            }));
            var o = n(16),
                r = n(5),
                s = n(7),
                i = n(1),
                u = n.n(i);
            class TokenWipeTransaction extends s.f {
                constructor(t = {}) {
                    super(), this._tokenId = null, this._accountId = null, this._serials = [], this._amount = null, null != t.tokenId && this.setTokenId(t.tokenId), null != t.accountId && this.setAccountId(t.accountId), null != t.amount && this.setAmount(t.amount), null != t.serials && this.setSerials(t.serials)
                }
                static _fromProtobuf(t, e, n, i, u) {
                    const a = u[0].tokenWipe;
                    return s.f._fromProtobufTransactions(new TokenWipeTransaction({
                        tokenId: null != a.token ? o.a._fromProtobuf(a.token) : void 0,
                        accountId: null != a.account ? r.a._fromProtobuf(a.account) : void 0,
                        amount: null != a.amount ? a.amount : void 0
                    }), t, e, n, i, u)
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._requireNotFrozen(), this._tokenId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._requireNotFrozen(), this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                get amount() {
                    return this._amount
                }
                setAmount(t) {
                    return this._requireNotFrozen(), this._amount = t instanceof u.a ? t : u.a.fromValue(t), this
                }
                _validateChecksums(t) {
                    null != this._tokenId && this._tokenId.validateChecksum(t), null != this._accountId && this._accountId.validateChecksum(t)
                }
                get serials() {
                    return this._serials
                }
                setSerials(t) {
                    return this._requireNotFrozen(), this._serials = t.map(t => "number" == typeof t ? u.a.fromNumber(t) : t), this
                }
                _execute(t, e) {
                    return t.token.wipeTokenAccount(e)
                }
                _getTransactionDataCase() {
                    return "tokenWipe"
                }
                _makeTransactionData() {
                    return {
                        amount: this._amount,
                        token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
                        account: null != this._accountId ? this._accountId._toProtobuf() : null,
                        serialNumbers: this.serials
                    }
                }
                _getLogId() {
                    return "TokenWipeTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            s.e.set("tokenWipe", TokenWipeTransaction._fromProtobuf)
        },
        1534: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TopicCreateTransaction
            }));
            var o = n(5),
                r = n(7),
                s = n(46),
                i = n(25);
            class TopicCreateTransaction extends r.f {
                constructor(t = {}) {
                    super(), this._adminKey = null, this._submitKey = null, this._autoRenewAccountId = null, this._autoRenewPeriod = new s.a(r.b), this._topicMemo = null, null != t.adminKey && this.setAdminKey(t.adminKey), null != t.submitKey && this.setSubmitKey(t.submitKey), null != t.autoRenewAccountId && this.setAutoRenewAccountId(t.autoRenewAccountId), null != t.autoRenewPeriod && this.setAutoRenewPeriod(t.autoRenewPeriod), null != t.topicMemo && this.setTopicMemo(t.topicMemo)
                }
                static _fromProtobuf(t, e, n, s, u) {
                    const a = u[0].consensusCreateTopic;
                    return r.f._fromProtobufTransactions(new TopicCreateTransaction({
                        adminKey: null != a.adminKey ? i.a._fromProtobufKey(a.adminKey) : void 0,
                        submitKey: null != a.submitKey ? i.a._fromProtobufKey(a.submitKey) : void 0,
                        autoRenewAccountId: null != a.autoRenewAccount ? o.a._fromProtobuf(a.autoRenewAccount) : void 0,
                        autoRenewPeriod: null != a.autoRenewPeriod && null != a.autoRenewPeriod.seconds ? a.autoRenewPeriod.seconds : void 0,
                        topicMemo: null != a.memo ? a.memo : void 0
                    }), t, e, n, s, u)
                }
                get topicMemo() {
                    return this._topicMemo
                }
                getTopicMemo() {
                    return this._topicMemo
                }
                setTopicMemo(t) {
                    return this._requireNotFrozen(), this._topicMemo = t, this
                }
                get adminKey() {
                    return this._adminKey
                }
                getAdminKey() {
                    return this._adminKey
                }
                setAdminKey(t) {
                    return this._requireNotFrozen(), this._adminKey = t, this
                }
                get submitKey() {
                    return this._submitKey
                }
                getSubmitKey() {
                    return this._submitKey
                }
                setSubmitKey(t) {
                    return this._requireNotFrozen(), this._submitKey = t, this
                }
                get autoRenewAccountId() {
                    return this._autoRenewAccountId
                }
                getAutoRenewAccountId() {
                    return this._autoRenewAccountId
                }
                setAutoRenewAccountId(t) {
                    return this._requireNotFrozen(), this._autoRenewAccountId = t instanceof o.a ? t : o.a.fromString(t), this
                }
                get autoRenewPeriod() {
                    return this._autoRenewPeriod
                }
                getAutoRenewPeriod() {
                    return this._autoRenewPeriod
                }
                setAutoRenewPeriod(t) {
                    return this._requireNotFrozen(), this._autoRenewPeriod = t instanceof s.a ? t : new s.a(t), this
                }
                _validateChecksums(t) {
                    null != this._autoRenewAccountId && this._autoRenewAccountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.consensus.createTopic(e)
                }
                _getTransactionDataCase() {
                    return "consensusCreateTopic"
                }
                _makeTransactionData() {
                    return {
                        adminKey: null != this._adminKey ? this._adminKey._toProtobufKey() : null,
                        submitKey: null != this._submitKey ? this._submitKey._toProtobufKey() : null,
                        autoRenewAccount: null != this._autoRenewAccountId ? this._autoRenewAccountId._toProtobuf() : null,
                        autoRenewPeriod: this._autoRenewPeriod._toProtobuf(),
                        memo: this._topicMemo
                    }
                }
                _getLogId() {
                    return "TopicCreateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            r.e.set("consensusCreateTopic", TopicCreateTransaction._fromProtobuf)
        },
        1535: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TopicDeleteTransaction
            }));
            var o = n(7),
                r = n(108);
            class TopicDeleteTransaction extends o.f {
                constructor(t = {}) {
                    super(), this._topicId = null, null != t.topicId && this.setTopicId(t.topicId)
                }
                static _fromProtobuf(t, e, n, s, i) {
                    const u = i[0].consensusDeleteTopic;
                    return o.f._fromProtobufTransactions(new TopicDeleteTransaction({
                        topicId: null != u.topicID ? r.a._fromProtobuf(u.topicID) : void 0
                    }), t, e, n, s, i)
                }
                get topicId() {
                    return this._topicId
                }
                setTopicId(t) {
                    return this._requireNotFrozen(), this._topicId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._topicId && this._topicId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.consensus.deleteTopic(e)
                }
                _getTransactionDataCase() {
                    return "consensusDeleteTopic"
                }
                _makeTransactionData() {
                    return {
                        topicID: null != this._topicId ? this._topicId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TopicDeleteTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            o.e.set("consensusDeleteTopic", TopicDeleteTransaction._fromProtobuf)
        },
        1536: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TopicInfoQuery
            }));
            var o = n(33),
                r = n(108),
                s = n(717),
                i = n(17);
            class TopicInfoQuery extends o.d {
                constructor(t = {}) {
                    super(), this._topicId = null, null != t.topicId && this.setTopicId(t.topicId)
                }
                static _fromProtobuf(t) {
                    const e = t.consensusGetTopicInfo;
                    return new TopicInfoQuery({
                        topicId: null != e.topicID ? r.a._fromProtobuf(e.topicID) : void 0
                    })
                }
                get topicId() {
                    return this._topicId
                }
                setTopicId(t) {
                    return this._topicId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                async getCost(t) {
                    let e = await super.getCost(t);
                    return e.toTinybars().greaterThan(25) ? e : i.a.fromTinybars(25)
                }
                _validateChecksums(t) {
                    null != this._topicId && this._topicId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.consensus.getTopicInfo(e)
                }
                _mapResponseHeader(t) {
                    return t.consensusGetTopicInfo.header
                }
                _mapResponse(t, e, n) {
                    return Promise.resolve(s.a._fromProtobuf(t.consensusGetTopicInfo))
                }
                _onMakeRequest(t) {
                    return {
                        consensusGetTopicInfo: {
                            header: t,
                            topicID: null != this._topicId ? this._topicId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "TopicInfoQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            o.b.set("consensusGetTopicInfo", TopicInfoQuery._fromProtobuf)
        },
        1537: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TopicMessageQuery
            }));
            var o = n(58),
                r = n(714),
                s = n(538),
                i = n(11),
                u = n(108),
                a = n(1),
                l = n.n(a),
                c = n(23),
                d = n(59),
                h = n(88),
                m = n.n(h);
            class TopicMessageQuery {
                constructor(t = {}) {
                    this._topicId = null, null != t.topicId && this.setTopicId(t.topicId), this._startTime = null, null != t.startTime && this.setStartTime(t.startTime), this._endTime = null, null != t.endTime && this.setEndTime(t.endTime), this._limit = null, null != t.limit && this.setLimit(t.limit), this._errorHandler = (t, e) => {
                        console.error("Error attempting to subscribe to topic: " + (null != this._topicId ? this._topicId.toString() : ""))
                    }, null != t.errorHandler && (this._errorHandler = t.errorHandler), this._listener = null, this._completionHandler = () => {
                        m.a.log(`Subscription to topic ${null!=this._topicId?this._topicId.toString():""} complete`)
                    }, null != t.completionHandler && (this._completionHandler = t.completionHandler), this._retryHandler = t => {
                        if (null != t) {
                            if (t instanceof Error) return !0;
                            switch (t.code) {
                                case 13:
                                    return d.b.test(t.details.toString());
                                case 5:
                                case 8:
                                case 14:
                                    return !0;
                                default:
                                    return !1
                            }
                        }
                        return !1
                    }, null != t.retryHandler && (this._retryHandler = t.retryHandler), this._maxAttempts = 10, this._maxBackoff = 8e3, this._attempt = 0, this._handle = null
                }
                get topicId() {
                    return this._topicId
                }
                setTopicId(t) {
                    return this.requireNotSubscribed(), this._topicId = "string" == typeof t ? u.a.fromString(t) : t.clone(), this
                }
                get startTime() {
                    return this._startTime
                }
                setStartTime(t) {
                    return this.requireNotSubscribed(), this._startTime = t instanceof c.a ? t : t instanceof Date ? c.a.fromDate(t) : new c.a(t, 0), this
                }
                get endTime() {
                    return this._endTime
                }
                setEndTime(t) {
                    return this.requireNotSubscribed(), this._endTime = t instanceof c.a ? t : t instanceof Date ? c.a.fromDate(t) : new c.a(t, 0), this
                }
                get limit() {
                    return this._limit
                }
                setLimit(t) {
                    return this.requireNotSubscribed(), this._limit = t instanceof l.a ? t : l.a.fromValue(t), this
                }
                setErrorHandler(t) {
                    return this._errorHandler = t, this
                }
                setCompletionHandler(t) {
                    return this.requireNotSubscribed(), this._completionHandler = t, this
                }
                setMaxAttempts(t) {
                    this.requireNotSubscribed(), this._maxAttempts = t
                }
                setMaxBackoff(t) {
                    this.requireNotSubscribed(), this._maxBackoff = t
                }
                subscribe(t, e, n) {
                    return this._handle = new r.a, this._listener = n, null != e && (this._errorHandler = e), this._makeServerStreamRequest(t), this._handle
                }
                _makeServerStreamRequest(t) {
                    const e = new Map,
                        n = i.com.hedera.mirror.api.proto.ConsensusTopicQuery.encode({
                            topicID: null != this._topicId ? this._topicId._toProtobuf() : null,
                            consensusStartTime: null != this._startTime ? this._startTime._toProtobuf() : null,
                            consensusEndTime: null != this._endTime ? this._endTime._toProtobuf() : null,
                            limit: this._limit
                        }).finish(),
                        r = t._mirrorNetwork.getNextMirrorNode().getChannel().makeServerStreamRequest("ConsensusService", "subscribeTopic", n, t => {
                            const n = i.com.hedera.mirror.api.proto.ConsensusTopicResponse.decode(t);
                            if (null != this._limit && this._limit.gt(0) && (this._limit = this._limit.sub(1)), this._startTime = c.a._fromProtobuf(n.consensusTimestamp).plusNanos(1), null == n.chunkInfo || null != n.chunkInfo && 1 === n.chunkInfo.total) this._passTopicMessage(s.a._ofSingle(n));
                            else {
                                const t = n.chunkInfo,
                                    r = t.initialTransactionID,
                                    i = t.total,
                                    u = o.a._fromProtobuf(r).toString();
                                let a = [];
                                const l = e.get(u);
                                if (null == l ? e.set(u, a) : a = l, a.push(n), a.length === i) {
                                    const t = s.a._ofMany(a);
                                    e.delete(u), this._passTopicMessage(t)
                                }
                            }
                        }, e => {
                            const n = e instanceof Error ? e.message : e.details;
                            if (this._attempt < this._maxAttempts && this._retryHandler(e)) {
                                const e = Math.min(250 * 2 ** this._attempt, this._maxBackoff);
                                console.warn(`Error subscribing to topic ${null!=this._topicId?this._topicId.toString():"UNKNOWN"} during attempt ${this._attempt}. Waiting ${e} ms before next attempt: ${n}`), this._attempt += 1, setTimeout(() => {
                                    this._makeServerStreamRequest(t)
                                }, e)
                            }
                        }, this._completionHandler);
                    null != this._handle && this._handle._setCall(() => r())
                }
                requireNotSubscribed() {
                    if (null != this._handle) throw new Error("Cannot change fields on an already subscribed query")
                }
                _passTopicMessage(t) {
                    try {
                        if (null == this._listener) throw new Error("(BUG) listener is unexpectedly not set");
                        this._listener(t)
                    } catch (e) {
                        this._errorHandler(t, e)
                    }
                }
            }
        },
        1538: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TopicMessageSubmitTransaction
            }));
            var o = n(7),
                r = n(108),
                s = n(107),
                i = n(58),
                u = n(23),
                a = n(9);
            class TopicMessageSubmitTransaction extends o.f {
                constructor(t = {}) {
                    super(), this._topicId = null, null != t.topicId && this.setTopicId(t.topicId), this._message = null, null != t.message && this.setMessage(t.message), this._maxChunks = 20, this._chunkSize = o.a, null != t.maxChunks && this.setMaxChunks(t.maxChunks), null != t.chunkSize && this.setChunkSize(t.chunkSize), this._chunkInfo = null
                }
                static _fromProtobuf(t, e, n, s, i) {
                    const u = i[0].consensusSubmitMessage;
                    return o.f._fromProtobufTransactions(new TopicMessageSubmitTransaction({
                        topicId: null != u.topicID ? r.a._fromProtobuf(u.topicID) : void 0,
                        message: null != u.message ? u.message : void 0
                    }), t, e, n, s, i)
                }
                get topicId() {
                    return this._topicId
                }
                setTopicId(t) {
                    return this._requireNotFrozen(), this._topicId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                get message() {
                    return this._message
                }
                getMessage() {
                    return this._message
                }
                setMessage(t) {
                    return this._requireNotFrozen(), t = a.g(t), this._message = t instanceof Uint8Array ? t : s.b(t), this
                }
                get maxChunks() {
                    return this._maxChunks
                }
                getMaxChunks() {
                    return this._maxChunks
                }
                setMaxChunks(t) {
                    return this._requireNotFrozen(), this._maxChunks = t, this
                }
                get chunkSize() {
                    return this._chunkSize
                }
                getChunkSize() {
                    return this._chunkSize
                }
                setChunkSize(t) {
                    return this._chunkSize = t, this
                }
                freezeWith(t) {
                    if (super.freezeWith(t), null == this._message) return this;
                    const e = Math.floor((this._message.length + (this._chunkSize - 1)) / this._chunkSize);
                    if (e > this._maxChunks) throw new Error(`Message with size ${this._message.length} too long for ${this._maxChunks} chunks`);
                    const n = this._getTransactionId()._toProtobuf();
                    let o = this._getTransactionId();
                    this._transactionIds.locked = !1, this._transactions.clear(), this._transactionIds.clear(), this._signedTransactions.clear();
                    for (let t = 0; t < e; t++) {
                        this._chunkInfo = {
                            initialTransactionID: n,
                            total: e,
                            number: t + 1
                        }, this._transactionIds.push(o), this._transactionIds.advance();
                        for (const t of this._nodeAccountIds.list) this._signedTransactions.push(this._makeSignedTransaction(t));
                        o = new i.a(o.accountId, new u.a(o.validStart.seconds, o.validStart.nanos.add(1)))
                    }
                    return this._transactionIds.advance(), this._chunkInfo = null, this
                }
                schedule() {
                    if (this._requireNotFrozen(), null != this._message && this._message.length > this._chunkSize) throw new Error(`cannot schedule \`TopicMessageSubmitTransaction\` with message over ${this._chunkSize} bytes`);
                    return super.schedule()
                }
                async execute(t, e) {
                    return (await this.executeAll(t, e))[0]
                }
                async executeAll(t, e) {
                    super._isFrozen() || this.freezeWith(t);
                    const n = this._getTransactionId(),
                        o = t.operatorAccountId;
                    null != o && o.equals(n.accountId) && await super.signWithOperator(t);
                    const r = [];
                    let s = e;
                    for (let e = 0; e < this._transactionIds.length; e++) {
                        const e = Date.now();
                        r.push(await super.execute(t, s)), null != s && (s = Date.now() - e)
                    }
                    return r
                }
                _execute(t, e) {
                    return t.consensus.submitMessage(e)
                }
                _getTransactionDataCase() {
                    return "consensusSubmitMessage"
                }
                _makeTransactionData() {
                    if (null != this._chunkInfo && null != this._message) {
                        const t = (this._chunkInfo.number - 1) * this._chunkSize;
                        let e = t + this._chunkSize;
                        return e > this._message.length && (e = this._message.length), {
                            topicID: null != this._topicId ? this._topicId._toProtobuf() : null,
                            message: this._message.slice(t, e),
                            chunkInfo: this._chunkInfo
                        }
                    }
                    return {
                        topicID: null != this._topicId ? this._topicId._toProtobuf() : null,
                        message: this._message
                    }
                }
                _getLogId() {
                    return "TopicMessageSubmitTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            o.e.set("consensusSubmitMessage", TopicMessageSubmitTransaction._fromProtobuf)
        },
        1539: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TopicUpdateTransaction
            }));
            var o = n(7),
                r = n(5),
                s = n(108),
                i = n(46),
                u = n(25),
                a = n(23);
            class TopicUpdateTransaction extends o.f {
                constructor(t = {}) {
                    super(), this._topicId = null, null != t.topicId && this.setTopicId(t.topicId), this._topicMemo = null, null != t.topicMemo && this.setTopicMemo(t.topicMemo), this._submitKey = null, null != t.submitKey && this.setSubmitKey(t.submitKey), this._adminKey = null, null != t.adminKey && this.setAdminKey(t.adminKey), this._autoRenewAccountId = null, null != t.autoRenewAccountId && this.setAutoRenewAccountId(t.autoRenewAccountId), this._autoRenewPeriod = null, null != t.autoRenewPeriod && this.setAutoRenewPeriod(t.autoRenewPeriod), this._expirationTime = null, null != t.expirationTime && this.setExpirationTime(t.expirationTime)
                }
                static _fromProtobuf(t, e, n, i, l) {
                    const c = l[0].consensusUpdateTopic;
                    return o.f._fromProtobufTransactions(new TopicUpdateTransaction({
                        topicId: null != c.topicID ? s.a._fromProtobuf(c.topicID) : void 0,
                        adminKey: null != c.adminKey ? u.a._fromProtobufKey(c.adminKey) : void 0,
                        submitKey: null != c.submitKey ? u.a._fromProtobufKey(c.submitKey) : void 0,
                        autoRenewAccountId: null != c.autoRenewAccount ? r.a._fromProtobuf(c.autoRenewAccount) : void 0,
                        autoRenewPeriod: null != c.autoRenewPeriod && null != c.autoRenewPeriod.seconds ? c.autoRenewPeriod.seconds : void 0,
                        topicMemo: null != c.memo && null != c.memo.value ? c.memo.value : void 0,
                        expirationTime: null != c.expirationTime ? a.a._fromProtobuf(c.expirationTime) : void 0
                    }), t, e, n, i, l)
                }
                get expirationTime() {
                    return this._expirationTime
                }
                setExpirationTime(t) {
                    return this._requireNotFrozen(), this._expirationTime = t instanceof Date ? a.a.fromDate(t) : t, this
                }
                get topicId() {
                    return this._topicId
                }
                setTopicId(t) {
                    return this._requireNotFrozen(), this._topicId = "string" == typeof t ? s.a.fromString(t) : t.clone(), this
                }
                clearTopicId() {
                    return this._requireNotFrozen(), this._topicId = null, this
                }
                get topicMemo() {
                    return this._topicMemo
                }
                setTopicMemo(t) {
                    return this._requireNotFrozen(), this._topicMemo = t, this
                }
                clearTopicMemo() {
                    return this._requireNotFrozen(), this._topicMemo = null, this
                }
                get adminKey() {
                    return this._adminKey
                }
                setAdminKey(t) {
                    return this._requireNotFrozen(), this._adminKey = t, this
                }
                clearAdminKey() {
                    return this._requireNotFrozen(), this._adminKey = null, this
                }
                get submitKey() {
                    return this._submitKey
                }
                setSubmitKey(t) {
                    return this._requireNotFrozen(), this._submitKey = t, this
                }
                clearSubmitKey() {
                    return this._requireNotFrozen(), this._submitKey = null, this
                }
                get autoRenewAccountId() {
                    return this._autoRenewAccountId
                }
                setAutoRenewAccountId(t) {
                    return this._requireNotFrozen(), this._autoRenewAccountId = t instanceof r.a ? t : r.a.fromString(t), this
                }
                clearAutoRenewAccountId() {
                    return this._requireNotFrozen(), this._autoRenewAccountId = null, this
                }
                get autoRenewPeriod() {
                    return this._autoRenewPeriod
                }
                setAutoRenewPeriod(t) {
                    return this._requireNotFrozen(), this._autoRenewPeriod = t instanceof i.a ? t : new i.a(t), this
                }
                _validateChecksums(t) {
                    null != this._topicId && this._topicId.validateChecksum(t), null != this._autoRenewAccountId && this._autoRenewAccountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.consensus.updateTopic(e)
                }
                _getTransactionDataCase() {
                    return "consensusUpdateTopic"
                }
                _makeTransactionData() {
                    return {
                        topicID: null != this._topicId ? this._topicId._toProtobuf() : null,
                        adminKey: null != this._adminKey ? this._adminKey._toProtobufKey() : null,
                        submitKey: null != this._submitKey ? this._submitKey._toProtobufKey() : null,
                        memo: null != this._topicMemo ? {
                            value: this._topicMemo
                        } : null,
                        autoRenewAccount: null != this._autoRenewAccountId ? this._autoRenewAccountId._toProtobuf() : null,
                        autoRenewPeriod: null != this._autoRenewPeriod ? this._autoRenewPeriod._toProtobuf() : null,
                        expirationTime: null != this._expirationTime ? this._expirationTime._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "TopicUpdateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            o.e.set("consensusUpdateTopic", TopicUpdateTransaction._fromProtobuf)
        },
        16: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenId
            }));
            var o = n(42),
                r = n(11);
            class TokenId {
                constructor(t, e, n) {
                    const r = o.b(t, e, n);
                    this.shard = r.shard, this.realm = r.realm, this.num = r.num, this._checksum = null
                }
                static fromString(t) {
                    const e = o.d(t),
                        n = new TokenId(e);
                    return n._checksum = e.checksum, n
                }
                static _fromProtobuf(t) {
                    return new TokenId(null != t.shardNum ? t.shardNum : 0, null != t.realmNum ? t.realmNum : 0, null != t.tokenNum ? t.tokenNum : 0)
                }
                get checksum() {
                    return this._checksum
                }
                validate(t) {
                    console.warn("Deprecated: Use `validateChecksum` instead"), this.validateChecksum(t)
                }
                validateChecksum(t) {
                    o.h(this.shard, this.realm, this.num, this._checksum, t)
                }
                static fromBytes(t) {
                    return TokenId._fromProtobuf(r.proto.TokenID.decode(t))
                }
                static fromSolidityAddress(t) {
                    return new TokenId(...o.c(t))
                }
                toSolidityAddress() {
                    return o.f([this.shard, this.realm, this.num])
                }
                _toProtobuf() {
                    return {
                        tokenNum: this.num,
                        shardNum: this.shard,
                        realmNum: this.realm
                    }
                }
                toString() {
                    return `${this.shard.toString()}.${this.realm.toString()}.${this.num.toString()}`
                }
                toStringWithChecksum(t) {
                    return o.g(this.toString(), t)
                }
                toBytes() {
                    return r.proto.TokenID.encode(this._toProtobuf()).finish()
                }
                clone() {
                    const t = new TokenId(this);
                    return t._checksum = this._checksum, t
                }
                compare(t) {
                    return o.a([this.shard, this.realm, this.num], [t.shard, t.realm, t.num])
                }
            }
        },
        2328: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenAssociation
            }));
            var o = n(5),
                r = n(16),
                s = n(17);
            class TokenAssociation {
                constructor(t = {}) {
                    this._accountId = null, null != t.accountId && this.setAccountId(t.accountId), this._tokenId = null, null != t.tokenId && this.setTokenId(t.tokenId), this._defaultMaxTransactionFee = new s.a(5)
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._accountId = "string" == typeof t ? o.a.fromString(t) : t, this
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._tokenId = "string" == typeof t ? r.a.fromString(t) : t, this
                }
                static _fromProtobuf(t) {
                    return new TokenAssociation({
                        accountId: null != t.accountId ? o.a._fromProtobuf(t.accountId) : void 0,
                        tokenId: null != t.tokenId ? r.a._fromProtobuf(t.tokenId) : void 0
                    })
                }
                _toProtobuf() {
                    return {
                        accountId: null != this._accountId ? this._accountId._toProtobuf() : void 0,
                        tokenId: null != this._tokenId ? this._tokenId._toProtobuf() : void 0
                    }
                }
            }
        },
        247: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return CustomFixedFee
            }));
            var o = n(16),
                r = n(303),
                s = n(5),
                i = n(1),
                u = n.n(i),
                a = n(17);
            class CustomFixedFee extends r.a {
                constructor(t = {}) {
                    super(t), this._denominatingTokenId = null, null != t.denominatingTokenId && this.setDenominatingTokenId(t.denominatingTokenId), this._amount = null, null != t.amount && this.setAmount(t.amount)
                }
                setHbarAmount(t) {
                    return this._amount = t.toTinybars(), this._denominatingTokenId = null, this
                }
                get hbarAmount() {
                    return null != this._denominatingTokenId ? null : a.a.fromTinybars(null != this._amount ? this._amount : 0)
                }
                setDenominatingTokenToSameToken() {
                    return this._denominatingTokenId = new o.a(0, 0, 0), this
                }
                get denominatingTokenId() {
                    return this._denominatingTokenId
                }
                setDenominatingTokenId(t) {
                    return this._denominatingTokenId = "string" == typeof t ? o.a.fromString(t) : t, this
                }
                get amount() {
                    return this._amount
                }
                setAmount(t) {
                    return this._amount = "number" == typeof t ? u.a.fromNumber(t) : t, this
                }
                static _fromProtobuf(t) {
                    const e = t.fixedFee;
                    return new CustomFixedFee({
                        feeCollectorAccountId: null != t.feeCollectorAccountId ? s.a._fromProtobuf(t.feeCollectorAccountId) : void 0,
                        allCollectorsAreExempt: null != t.allCollectorsAreExempt ? t.allCollectorsAreExempt : void 0,
                        denominatingTokenId: null != e.denominatingTokenId ? o.a._fromProtobuf(e.denominatingTokenId) : void 0,
                        amount: null != e.amount ? e.amount : void 0
                    })
                }
                _toProtobuf() {
                    return {
                        feeCollectorAccountId: null != this.feeCollectorAccountId ? this.feeCollectorAccountId._toProtobuf() : null,
                        allCollectorsAreExempt: this.allCollectorsAreExempt,
                        fixedFee: {
                            denominatingTokenId: null != this._denominatingTokenId ? this._denominatingTokenId._toProtobuf() : null,
                            amount: this._amount
                        }
                    }
                }
            }
        },
        303: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return CustomFee
            }));
            var o = n(5);
            class CustomFee {
                constructor(t = {}) {
                    this._feeCollectorAccountId = null, this._allCollectorsAreExempt = !1, null != t.feeCollectorAccountId && this.setFeeCollectorAccountId(t.feeCollectorAccountId), null != t.allCollectorsAreExempt && this.setAllCollectorsAreExempt(t.allCollectorsAreExempt)
                }
                get feeCollectorAccountId() {
                    return this._feeCollectorAccountId
                }
                setFeeCollectorAccountId(t) {
                    return this._feeCollectorAccountId = "string" == typeof t ? o.a.fromString(t) : t, this
                }
                get allCollectorsAreExempt() {
                    return this._allCollectorsAreExempt
                }
                setAllCollectorsAreExempt(t) {
                    return this._allCollectorsAreExempt = t, this
                }
                static _fromProtobuf(t) {
                    throw new Error("not implemented")
                }
                _toProtobuf() {
                    throw new Error("not implemented")
                }
            }
        },
        304: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return CustomFractionalFee
            }));
            var o = n(303),
                r = n(5),
                s = n(1),
                i = n.n(s);
            class CustomFractionalFee extends o.a {
                constructor(t = {}) {
                    super(t), this._numerator = null, null != t.numerator && this.setNumerator(t.numerator), this._denominator = null, null != t.denominator && this.setDenominator(t.denominator), this._min = null, null != t.min && this.setMin(t.min), this._max, null != t.max && this.setMax(t.max), this._assessmentMethod, null != t.assessmentMethod && this.setAssessmentMethod(t.assessmentMethod)
                }
                get numerator() {
                    return this._numerator
                }
                setNumerator(t) {
                    return this._numerator = "number" == typeof t ? i.a.fromNumber(t) : t, this
                }
                get denominator() {
                    return this._denominator
                }
                setDenominator(t) {
                    return this._denominator = "number" == typeof t ? i.a.fromNumber(t) : t, this
                }
                get min() {
                    return this._min
                }
                setMin(t) {
                    return this._min = "number" == typeof t ? i.a.fromNumber(t) : t, this
                }
                get max() {
                    return this._max
                }
                setMax(t) {
                    return this._max = "number" == typeof t ? i.a.fromNumber(t) : t, this
                }
                get assessmentMethod() {
                    return this._assessmentMethod
                }
                setAssessmentMethod(t) {
                    return this._assessmentMethod = t, this
                }
                static _fromProtobuf(t) {
                    const e = t.fractionalFee,
                        n = e.fractionalAmount;
                    return new CustomFractionalFee({
                        feeCollectorAccountId: null != t.feeCollectorAccountId ? r.a._fromProtobuf(t.feeCollectorAccountId) : void 0,
                        allCollectorsAreExempt: null != t.allCollectorsAreExempt ? t.allCollectorsAreExempt : void 0,
                        numerator: null != n.numerator ? n.numerator : void 0,
                        denominator: null != n.denominator ? n.denominator : void 0,
                        min: null != e.minimumAmount ? e.minimumAmount : void 0,
                        max: null != e.maximumAmount ? e.maximumAmount : void 0
                    })
                }
                _toProtobuf() {
                    return {
                        feeCollectorAccountId: null != this.feeCollectorAccountId ? this.feeCollectorAccountId._toProtobuf() : null,
                        allCollectorsAreExempt: this.allCollectorsAreExempt,
                        fractionalFee: {
                            fractionalAmount: {
                                numerator: this._numerator,
                                denominator: this._denominator
                            },
                            minimumAmount: this._min,
                            maximumAmount: this._max
                        }
                    }
                }
            }
        },
        305: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return CustomRoyalyFee
            }));
            var o = n(303),
                r = n(5),
                s = n(1),
                i = n.n(s),
                u = n(247);
            class CustomRoyalyFee extends o.a {
                constructor(t = {}) {
                    super(t), this._fallbackFee = null, null != t.fallbackFee && this.setFallbackFee(t.fallbackFee), this._numerator = null, null != t.numerator && this.setNumerator(t.numerator), this._denominator = null, null != t.denominator && this.setDenominator(t.denominator)
                }
                get fallbackFee() {
                    return this._fallbackFee
                }
                setFallbackFee(t) {
                    return this._fallbackFee = t, this
                }
                get numerator() {
                    return this._numerator
                }
                setNumerator(t) {
                    return this._numerator = "number" == typeof t ? i.a.fromNumber(t) : t, this
                }
                get denominator() {
                    return this._denominator
                }
                setDenominator(t) {
                    return this._denominator = "number" == typeof t ? i.a.fromNumber(t) : t, this
                }
                static _fromProtobuf(t) {
                    const e = t.royaltyFee,
                        n = e.exchangeValueFraction;
                    return new CustomRoyalyFee({
                        feeCollectorAccountId: null != t.feeCollectorAccountId ? r.a._fromProtobuf(t.feeCollectorAccountId) : void 0,
                        allCollectorsAreExempt: null != t.allCollectorsAreExempt ? t.allCollectorsAreExempt : void 0,
                        fallbackFee: null != e.fallbackFee ? u.a._fromProtobuf({
                            fixedFee: e.fallbackFee
                        }) : void 0,
                        numerator: null != n.numerator ? n.numerator : void 0,
                        denominator: null != n.denominator ? n.denominator : void 0
                    })
                }
                _toProtobuf() {
                    return {
                        feeCollectorAccountId: null != this.feeCollectorAccountId ? this.feeCollectorAccountId._toProtobuf() : null,
                        allCollectorsAreExempt: this.allCollectorsAreExempt,
                        royaltyFee: {
                            exchangeValueFraction: {
                                numerator: this._numerator,
                                denominator: this._denominator
                            },
                            fallbackFee: null != this._fallbackFee ? this._fallbackFee._toProtobuf().fixedFee : null
                        }
                    }
                }
            }
        },
        442: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenType
            }));
            class TokenType {
                constructor(t) {
                    this._code = t, Object.freeze(this)
                }
                toString() {
                    switch (this) {
                        case TokenType.FungibleCommon:
                            return "FUNGIBLE_COMMON";
                        case TokenType.NonFungibleUnique:
                            return "NON_FUNGIBLE_UNIQUE";
                        default:
                            return `UNKNOWN (${this._code})`
                    }
                }
                static _fromCode(t) {
                    switch (t) {
                        case 0:
                            return TokenType.FungibleCommon;
                        case 1:
                            return TokenType.NonFungibleUnique
                    }
                    throw new Error("(BUG) TokenType.fromCode() does not handle code: " + t)
                }
                valueOf() {
                    return this._code
                }
            }
            TokenType.FungibleCommon = new TokenType(0), TokenType.NonFungibleUnique = new TokenType(1)
        },
        443: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenSupplyType
            }));
            class TokenSupplyType {
                constructor(t) {
                    this._code = t, Object.freeze(this)
                }
                toString() {
                    switch (this) {
                        case TokenSupplyType.Infinite:
                            return "INFINITE";
                        case TokenSupplyType.Finite:
                            return "FINITE";
                        default:
                            return `UNKNOWN (${this._code})`
                    }
                }
                static _fromCode(t) {
                    switch (t) {
                        case 0:
                            return TokenSupplyType.Infinite;
                        case 1:
                            return TokenSupplyType.Finite
                    }
                    throw new Error("(BUG) TokenSupplyType.fromCode() does not handle code: " + t)
                }
                valueOf() {
                    return this._code
                }
            }
            TokenSupplyType.Infinite = new TokenSupplyType(0), TokenSupplyType.Finite = new TokenSupplyType(1)
        },
        456: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenTransfer
            }));
            var o = n(1),
                r = n.n(o),
                s = n(5),
                i = n(16);
            class TokenTransfer {
                constructor(t) {
                    this.tokenId = t.tokenId instanceof i.a ? t.tokenId : i.a.fromString(t.tokenId), this.accountId = t.accountId instanceof s.a ? t.accountId : s.a.fromString(t.accountId), this.expectedDecimals = t.expectedDecimals, this.amount = r.a.fromValue(t.amount), this.isApproved = t.isApproved
                }
                static _fromProtobuf(t) {
                    const e = [];
                    for (const n of t) {
                        const t = i.a._fromProtobuf(n.token),
                            o = null != n.expectedDecimals ? n.expectedDecimals.value : null;
                        for (const i of null != n.transfers ? n.transfers : []) e.push(new TokenTransfer({
                            tokenId: t,
                            accountId: s.a._fromProtobuf(i.accountID),
                            expectedDecimals: o,
                            amount: null != i.amount ? i.amount : r.a.ZERO,
                            isApproved: 1 == i.isApproval
                        }))
                    }
                    return e
                }
                _toProtobuf() {
                    return {
                        accountID: this.accountId._toProtobuf(),
                        amount: this.amount,
                        isApproval: this.isApproved
                    }
                }
            }
        },
        538: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TopicMessage
            }));
            var o = n(23),
                r = n(539),
                s = n(1),
                i = n.n(s),
                u = n(58);
            class TopicMessage {
                constructor(t) {
                    this.consensusTimestamp = t.consensusTimestamp, this.contents = t.contents, this.runningHash = t.runningHash, this.sequenceNumber = t.sequenceNumber, this.chunks = t.chunks, this.initialTransactionId = t.initialTransactionId, Object.freeze(this)
                }
                static _ofSingle(t) {
                    return new TopicMessage({
                        consensusTimestamp: o.a._fromProtobuf(t.consensusTimestamp),
                        contents: null != t.message ? t.message : new Uint8Array,
                        runningHash: null != t.runningHash ? t.runningHash : new Uint8Array,
                        sequenceNumber: null != t.sequenceNumber ? t.sequenceNumber instanceof i.a ? t.sequenceNumber : i.a.fromNumber(t.sequenceNumber) : i.a.ZERO,
                        initialTransactionId: null != t.chunkInfo && null != t.chunkInfo.initialTransactionID ? u.a._fromProtobuf(t.chunkInfo.initialTransactionID) : null,
                        chunks: [r.a._fromProtobuf(t)]
                    })
                }
                static _ofMany(t) {
                    const e = t[t.length - 1],
                        n = o.a._fromProtobuf(e.consensusTimestamp),
                        s = e.runningHash,
                        a = null != e.sequenceNumber ? e.sequenceNumber instanceof i.a ? e.sequenceNumber : i.a.fromValue(e.sequenceNumber) : i.a.ZERO;
                    t.sort((t, e) => (null != t && null != t.chunkInfo && null != t.chunkInfo.number ? t.chunkInfo.number : 0) < (null != e && null != e.chunkInfo && null != e.chunkInfo.number ? e.chunkInfo.number : 0) ? -1 : 1);
                    const l = t.map(t => r.a._fromProtobuf(t)),
                        c = l.map(t => t.contents.length).reduce((t, e) => t + e, 0),
                        d = new Uint8Array(c);
                    let h = 0;
                    t.forEach(t => {
                        d.set(t.message, h), h += t.message.length
                    });
                    let m = null;
                    return t.length > 0 && null != t[0].chunkInfo && null != t[0].chunkInfo.initialTransactionID && (m = u.a._fromProtobuf(t[0].chunkInfo.initialTransactionID)), new TopicMessage({
                        consensusTimestamp: n,
                        contents: d,
                        runningHash: s,
                        sequenceNumber: a,
                        chunks: l,
                        initialTransactionId: m
                    })
                }
            }
        },
        539: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TopicMessageChunk
            }));
            var o = n(23),
                r = n(1),
                s = n.n(r);
            class TopicMessageChunk {
                constructor(t) {
                    this.consensusTimestamp = t.consensusTimestamp, this.contents = t.contents, this.runningHash = t.runningHash, this.sequenceNumber = t.sequenceNumber, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    return new TopicMessageChunk({
                        consensusTimestamp: o.a._fromProtobuf(t.consensusTimestamp),
                        contents: null != t.message ? t.message : new Uint8Array,
                        runningHash: null != t.runningHash ? t.runningHash : new Uint8Array,
                        sequenceNumber: null != t.sequenceNumber ? t.sequenceNumber instanceof s.a ? t.sequenceNumber : s.a.fromValue(t.sequenceNumber) : s.a.ZERO
                    })
                }
                _toProtobuf() {
                    return {
                        consensusTimestamp: this.consensusTimestamp._toProtobuf(),
                        message: this.contents,
                        runningHash: this.runningHash,
                        sequenceNumber: this.sequenceNumber
                    }
                }
            }
        },
        701: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AssessedCustomFee
            }));
            var o = n(16),
                r = n(5),
                s = n(1),
                i = n.n(s);
            class AssessedCustomFee {
                constructor(t = {}) {
                    this._feeCollectorAccountId = null, null != t.feeCollectorAccountId && this.setFeeCollectorAccountId(t.feeCollectorAccountId), this._tokenId = null, null != t.tokenId && this.setTokenId(t.tokenId), this._amount = null, null != t.amount && this.setAmount(t.amount), this._payerAccountIds = null, null != t.payerAccountIds && this.setPayerAccountIds(t.payerAccountIds)
                }
                get feeCollectorAccountId() {
                    return this._feeCollectorAccountId
                }
                setFeeCollectorAccountId(t) {
                    return this._feeCollectorAccountId = "string" == typeof t ? r.a.fromString(t) : t, this
                }
                get tokenId() {
                    return this._tokenId
                }
                setTokenId(t) {
                    return this._tokenId = "string" == typeof t ? o.a.fromString(t) : t, this
                }
                get amount() {
                    return this._amount
                }
                setAmount(t) {
                    return this._amount = "number" == typeof t ? i.a.fromNumber(t) : t, this
                }
                get payerAccountIds() {
                    return this._payerAccountIds
                }
                setPayerAccountIds(t) {
                    return this._payerAccountIds = t, this
                }
                static _fromProtobuf(t) {
                    return new AssessedCustomFee({
                        feeCollectorAccountId: null != t.feeCollectorAccountId ? r.a._fromProtobuf(t.feeCollectorAccountId) : void 0,
                        tokenId: null != t.tokenId ? o.a._fromProtobuf(t.tokenId) : void 0,
                        amount: null != t.amount ? t.amount : void 0,
                        payerAccountIds: null != t.effectivePayerAccountId ? t.effectivePayerAccountId.map(t => r.a._fromProtobuf(t)) : void 0
                    })
                }
                _toProtobuf() {
                    return {
                        feeCollectorAccountId: null != this.feeCollectorAccountId ? this.feeCollectorAccountId._toProtobuf() : null,
                        tokenId: null != this._tokenId ? this._tokenId._toProtobuf() : null,
                        amount: this._amount,
                        effectivePayerAccountId: null != this._payerAccountIds ? this._payerAccountIds.map(t => t._toProtobuf()) : null
                    }
                }
            }
        },
        714: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return SubscriptionHandle
            }));
            class SubscriptionHandle {
                constructor() {
                    this._call = null
                }
                _setCall(t) {
                    this._call = t
                }
                unsubscribe() {
                    null != this._call && this._call()
                }
            }
        },
        715: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenInfo
            }));
            var o = n(16),
                r = n(5),
                s = n(46),
                i = n(23),
                u = n(1),
                a = n.n(u),
                l = n(11),
                c = n(442),
                d = n(443),
                h = n(247),
                m = n(304),
                f = n(305),
                _ = n(25),
                p = n(99);
            class TokenInfo {
                constructor(t) {
                    this.tokenId = t.tokenId, this.name = t.name, this.symbol = t.symbol, this.decimals = t.decimals, this.totalSupply = t.totalSupply, this.treasuryAccountId = t.treasuryAccountId, this.adminKey = t.adminKey, this.kycKey = t.kycKey, this.freezeKey = t.freezeKey, this.pauseKey = t.pauseKey, this.wipeKey = t.wipeKey, this.supplyKey = t.supplyKey, this.feeScheduleKey = t.feeScheduleKey, this.defaultFreezeStatus = t.defaultFreezeStatus, this.defaultKycStatus = t.defaultKycStatus, this.pauseStatus = t.pauseStatus, this.isDeleted = t.isDeleted, this.autoRenewAccountId = t.autoRenewAccountId, this.autoRenewPeriod = t.autoRenewPeriod, this.expirationTime = t.expirationTime, this.tokenMemo = t.tokenMemo, this.customFees = t.customFees, this.tokenType = t.tokenType, this.supplyType = t.supplyType, this.maxSupply = t.maxSupply, this.ledgerId = t.ledgerId
                }
                static _fromProtobuf(t) {
                    const e = t.defaultFreezeStatus,
                        n = t.defaultKycStatus,
                        u = t.pauseStatus,
                        l = null != t.autoRenewAccount ? r.a._fromProtobuf(t.autoRenewAccount) : new r.a(0);
                    return new TokenInfo({
                        tokenId: o.a._fromProtobuf(t.tokenId),
                        name: t.name,
                        symbol: t.symbol,
                        decimals: t.decimals,
                        totalSupply: a.a.fromValue(t.totalSupply),
                        treasuryAccountId: null != t.treasury ? r.a._fromProtobuf(t.treasury) : null,
                        adminKey: null != t.adminKey ? _.a._fromProtobufKey(t.adminKey) : null,
                        kycKey: null != t.kycKey ? _.a._fromProtobufKey(t.kycKey) : null,
                        freezeKey: null != t.freezeKey ? _.a._fromProtobufKey(t.freezeKey) : null,
                        pauseKey: null != t.pauseKey ? _.a._fromProtobufKey(t.pauseKey) : null,
                        wipeKey: null != t.wipeKey ? _.a._fromProtobufKey(t.wipeKey) : null,
                        supplyKey: null != t.supplyKey ? _.a._fromProtobufKey(t.supplyKey) : null,
                        feeScheduleKey: null != t.feeScheduleKey ? _.a._fromProtobufKey(t.feeScheduleKey) : null,
                        defaultFreezeStatus: 0 === e ? null : 1 == e,
                        defaultKycStatus: 0 === n ? null : 1 == n,
                        pauseStatus: 0 === u ? null : 1 == u,
                        isDeleted: t.deleted,
                        autoRenewAccountId: 0 != l.shard.toInt() || 0 != l.realm.toInt() || 0 != l.num.toInt() ? l : null,
                        autoRenewPeriod: null != t.autoRenewPeriod ? s.a._fromProtobuf(t.autoRenewPeriod) : null,
                        expirationTime: null != t.expiry ? i.a._fromProtobuf(t.expiry) : null,
                        tokenMemo: null != t.memo ? t.memo : "",
                        customFees: null != t.customFees ? t.customFees.map(t => null != t.fixedFee ? h.a._fromProtobuf(t) : null != t.fractionalFee ? m.a._fromProtobuf(t) : f.a._fromProtobuf(t)) : [],
                        tokenType: null != t.tokenType ? c.a._fromCode(t.tokenType) : null,
                        supplyType: null != t.supplyType ? d.a._fromCode(t.supplyType) : null,
                        maxSupply: null != t.maxSupply ? t.maxSupply : null,
                        ledgerId: null != t.ledgerId ? p.a.fromBytes(t.ledgerId) : null
                    })
                }
                _toProtobuf() {
                    return {
                        tokenId: this.tokenId._toProtobuf(),
                        name: this.name,
                        symbol: this.symbol,
                        decimals: this.decimals,
                        totalSupply: this.totalSupply,
                        treasury: null != this.treasuryAccountId ? this.treasuryAccountId._toProtobuf() : null,
                        adminKey: null != this.adminKey ? this.adminKey._toProtobufKey() : null,
                        kycKey: null != this.kycKey ? this.kycKey._toProtobufKey() : null,
                        freezeKey: null != this.freezeKey ? this.freezeKey._toProtobufKey() : null,
                        pauseKey: null != this.pauseKey ? this.pauseKey._toProtobufKey() : null,
                        wipeKey: null != this.wipeKey ? this.wipeKey._toProtobufKey() : null,
                        supplyKey: null != this.supplyKey ? this.supplyKey._toProtobufKey() : null,
                        feeScheduleKey: null != this.feeScheduleKey ? this.feeScheduleKey._toProtobufKey() : null,
                        defaultFreezeStatus: null == this.defaultFreezeStatus ? 0 : this.defaultFreezeStatus ? 1 : 2,
                        defaultKycStatus: null == this.defaultKycStatus ? 0 : this.defaultKycStatus ? 1 : 2,
                        pauseStatus: null == this.pauseStatus ? 0 : this.pauseStatus ? 1 : 2,
                        deleted: this.isDeleted,
                        autoRenewAccount: null != this.autoRenewAccountId ? this.autoRenewAccountId._toProtobuf() : void 0,
                        autoRenewPeriod: null != this.autoRenewPeriod ? this.autoRenewPeriod._toProtobuf() : null,
                        expiry: null != this.expirationTime ? this.expirationTime._toProtobuf() : null,
                        memo: this.tokenMemo,
                        customFees: this.customFees.map(t => t._toProtobuf()),
                        tokenType: null != this.tokenType ? this.tokenType._code : null,
                        supplyType: null != this.supplyType ? this.supplyType._code : null,
                        maxSupply: this.maxSupply,
                        ledgerId: null != this.ledgerId ? this.ledgerId.toBytes() : null
                    }
                }
                static fromBytes(t) {
                    return TokenInfo._fromProtobuf(l.proto.TokenInfo.decode(t))
                }
                toBytes() {
                    return l.proto.TokenInfo.encode(this._toProtobuf()).finish()
                }
            }
        },
        716: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenNftInfo
            }));
            var o = n(94),
                r = n(5),
                s = n(23),
                i = n(10),
                u = n(99);
            class TokenNftInfo {
                constructor(t) {
                    this.nftId = t.nftId, this.accountId = t.accountId, this.creationTime = t.creationTime, this.metadata = t.metadata, this.ledgerId = t.ledgerId, this.spenderId = t.spenderId, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    return new TokenNftInfo({
                        nftId: o.a._fromProtobuf(t.nftID),
                        accountId: r.a._fromProtobuf(t.accountID),
                        creationTime: s.a._fromProtobuf(t.creationTime),
                        metadata: void 0 !== t.metadata ? t.metadata : null,
                        ledgerId: null != t.ledgerId ? u.a.fromBytes(t.ledgerId) : null,
                        spenderId: null != t.spenderId ? r.a._fromProtobuf(t.spenderId) : null
                    })
                }
                _toProtobuf() {
                    return {
                        nftID: this.nftId._toProtobuf(),
                        accountID: this.accountId._toProtobuf(),
                        creationTime: this.creationTime._toProtobuf(),
                        metadata: this.metadata,
                        ledgerId: null != this.ledgerId ? this.ledgerId.toBytes() : null,
                        spenderId: null != this.spenderId ? this.spenderId._toProtobuf() : null
                    }
                }
                toJson() {
                    return {
                        nftId: this.nftId.toString(),
                        accountId: this.accountId.toString(),
                        creationTime: this.creationTime.toString(),
                        metadata: null != this.metadata ? i.b(this.metadata) : null,
                        ledgerId: null != this.ledgerId ? this.ledgerId.toString() : null,
                        spenderId: null != this.spenderId ? this.spenderId.toString() : null
                    }
                }
                toString() {
                    return JSON.stringify(this.toJson())
                }
            }
        },
        717: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TopicInfo
            }));
            var o = n(108),
                r = n(5),
                s = n(23),
                i = n(1),
                u = n.n(i),
                a = n(46),
                l = n(11),
                c = n(25),
                d = n(99);
            class TopicInfo {
                constructor(t) {
                    this.topicId = t.topicId, this.topicMemo = t.topicMemo, this.runningHash = t.runningHash, this.sequenceNumber = t.sequenceNumber, this.expirationTime = t.expirationTime, this.adminKey = t.adminKey, this.submitKey = t.submitKey, this.autoRenewPeriod = t.autoRenewPeriod, this.autoRenewAccountId = t.autoRenewAccountId, this.ledgerId = t.ledgerId, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    const e = t.topicInfo;
                    return new TopicInfo({
                        topicId: o.a._fromProtobuf(t.topicID),
                        topicMemo: null != e.memo ? e.memo : "",
                        runningHash: null != e.runningHash ? e.runningHash : new Uint8Array,
                        sequenceNumber: null != e.sequenceNumber ? e.sequenceNumber instanceof u.a ? e.sequenceNumber : u.a.fromValue(e.sequenceNumber) : u.a.ZERO,
                        expirationTime: null != e.expirationTime ? s.a._fromProtobuf(e.expirationTime) : null,
                        adminKey: null != e.adminKey ? c.a._fromProtobufKey(e.adminKey) : null,
                        submitKey: null != e.submitKey ? c.a._fromProtobufKey(e.submitKey) : null,
                        autoRenewPeriod: null != e.autoRenewPeriod ? new a.a(e.autoRenewPeriod.seconds) : null,
                        autoRenewAccountId: null != e.autoRenewAccount ? r.a._fromProtobuf(e.autoRenewAccount) : null,
                        ledgerId: null != e.ledgerId ? d.a.fromBytes(e.ledgerId) : null
                    })
                }
                _toProtobuf() {
                    return {
                        topicID: this.topicId._toProtobuf(),
                        topicInfo: {
                            memo: this.topicMemo,
                            runningHash: this.runningHash,
                            sequenceNumber: this.sequenceNumber,
                            expirationTime: null != this.expirationTime ? this.expirationTime._toProtobuf() : null,
                            adminKey: null != this.adminKey ? this.adminKey._toProtobufKey() : null,
                            submitKey: null != this.submitKey ? this.submitKey._toProtobufKey() : null,
                            autoRenewPeriod: null != this.autoRenewPeriod ? this.autoRenewPeriod._toProtobuf() : null,
                            autoRenewAccount: null != this.autoRenewAccountId ? this.autoRenewAccountId._toProtobuf() : null
                        }
                    }
                }
                static fromBytes(t) {
                    return TopicInfo._fromProtobuf({
                        topicInfo: l.proto.ConsensusTopicInfo.decode(t)
                    })
                }
                toBytes() {
                    return l.proto.ConsensusTopicInfo.encode(this._toProtobuf().topicInfo).finish()
                }
            }
        },
        94: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return NftId
            }));
            var o = n(11),
                r = n(16),
                s = n(1),
                i = n.n(s);
            class NftId {
                constructor(t, e) {
                    this.tokenId = t, this.serial = "number" == typeof e ? i.a.fromNumber(e) : e, Object.freeze(this)
                }
                static fromString(t) {
                    const e = t.split("/").length > 1 ? t.split("/") : t.split("@");
                    for (const t of e)
                        if ("" === t) throw new Error("invalid format for NftId: use [token]/[serial] or [token]@[serial]");
                    const n = r.a.fromString(e[0]),
                        o = i.a.fromString(e[1]);
                    return new NftId(n, o)
                }
                static _fromProtobuf(t) {
                    return new NftId(r.a._fromProtobuf(t.tokenID), null != t.serialNumber ? t.serialNumber : i.a.ZERO)
                }
                static fromBytes(t) {
                    return NftId._fromProtobuf(o.proto.NftID.decode(t))
                }
                _toProtobuf() {
                    return {
                        tokenID: this.tokenId._toProtobuf(),
                        serialNumber: i.a.fromValue(void 0 !== this.serial ? this.serial : 0)
                    }
                }
                toString() {
                    return `${this.tokenId.toString()}/${this.serial.toString()}`
                }
                toBytes() {
                    return o.proto.NftID.encode(this._toProtobuf()).finish()
                }
            }
        }
    }
]);