(window.webpackJsonp = window.webpackJsonp || []).push([
    [55], {
        1480: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountAllowanceAdjustTransaction
            }));
            var o = n(7),
                r = n(5),
                s = n(16),
                a = n(94),
                c = n(1),
                i = n.n(c),
                u = n(17),
                l = n(312),
                d = n(313),
                h = n(206),
                f = n(9);
            class AccountAllowanceAdjustTransaction extends o.f {
                constructor(t = {}) {
                    super(), this._hbarAllowances = null != t.hbarAllowances ? t.hbarAllowances : [], this._tokenAllowances = null != t.tokenAllowances ? t.tokenAllowances : [], this._nftAllowances = null != t.nftAllowances ? t.nftAllowances : []
                }
                get hbarAllowances() {
                    return this._hbarAllowances
                }
                addHbarAllowance(t, e) {
                    const n = e instanceof u.a ? e : new u.a(e);
                    return this._adjustHbarAllowance(null, t, f.f(n))
                }
                _adjustHbarAllowance(t, e, n) {
                    return this._requireNotFrozen(), this._hbarAllowances.push(new l.a({
                        spenderAccountId: "string" == typeof e ? r.a.fromString(e) : e,
                        ownerAccountId: "string" == typeof t ? r.a.fromString(t) : t,
                        amount: n
                    })), this
                }
                grantHbarAllowance(t, e, n) {
                    const o = n instanceof u.a ? n : new u.a(n);
                    return this._adjustHbarAllowance(t, e, f.f(o))
                }
                revokeHbarAllowance(t, e, n) {
                    const o = n instanceof u.a ? n : new u.a(n);
                    return this._adjustHbarAllowance(t, e, f.f(o).negated())
                }
                get tokenAllowances() {
                    return this._tokenAllowances
                }
                addTokenAllowance(t, e, n) {
                    return this._adjustTokenAllowance(t, null, e, f.f(i.a.fromValue(n)))
                }
                _adjustTokenAllowance(t, e, n, o) {
                    return this._requireNotFrozen(), this._tokenAllowances.push(new d.a({
                        tokenId: "string" == typeof t ? s.a.fromString(t) : t,
                        spenderAccountId: "string" == typeof n ? r.a.fromString(n) : n,
                        ownerAccountId: "string" == typeof e ? r.a.fromString(e) : e,
                        amount: "number" == typeof o ? i.a.fromNumber(o) : o
                    })), this
                }
                grantTokenAllowance(t, e, n, o) {
                    return this._adjustTokenAllowance(t, e, n, f.f(i.a.fromValue(o)))
                }
                revokeTokenAllowance(t, e, n, o) {
                    return this._adjustTokenAllowance(t, e, n, f.f(i.a.fromValue(o)))
                }
                addTokenNftAllowance(t, e) {
                    const n = "string" == typeof t ? a.a.fromString(t) : t;
                    return this._adjustTokenNftAllowance(n, null, e)
                }
                _adjustTokenNftAllowance(t, e, n) {
                    this._requireNotFrozen();
                    const o = "string" == typeof n ? r.a.fromString(n) : n,
                        s = "string" == typeof e ? r.a.fromString(e) : e;
                    let a = !1;
                    for (const e of this._nftAllowances)
                        if (0 === e.tokenId.compare(t.tokenId) && null != e.spenderAccountId && 0 === e.spenderAccountId.compare(o)) {
                            null != e.serialNumbers && e.serialNumbers.push(t.serial), a = !0;
                            break
                        } return a || this._nftAllowances.push(new h.a({
                        tokenId: t.tokenId,
                        spenderAccountId: o,
                        serialNumbers: [t.serial],
                        ownerAccountId: s,
                        allSerials: !1
                    })), this
                }
                grantTokenNftAllowance(t, e, n) {
                    const o = "string" == typeof t ? a.a.fromString(t) : t;
                    return f.f(o.serial), this._adjustTokenNftAllowance(o, e, n)
                }
                revokeTokenNftAllowance(t, e, n) {
                    const o = "string" == typeof t ? a.a.fromString(t) : t;
                    return f.f(o.serial), this._adjustTokenNftAllowance(new a.a(o.tokenId, o.serial.negate()), e, n)
                }
                addAllTokenNftAllowance(t, e) {
                    return this._adjustTokenNftAllowanceAllSerials(t, null, e, !0)
                }
                grantTokenNftAllowanceAllSerials(t, e, n) {
                    return this._adjustTokenNftAllowanceAllSerials(t, e, n, !0)
                }
                revokeTokenNftAllowanceAllSerials(t, e, n) {
                    return this._adjustTokenNftAllowanceAllSerials(t, e, n, !1)
                }
                _adjustTokenNftAllowanceAllSerials(t, e, n, o) {
                    return this._requireNotFrozen(), this._nftAllowances.push(new h.a({
                        tokenId: "string" == typeof t ? s.a.fromString(t) : t,
                        ownerAccountId: null != e ? "string" == typeof e ? r.a.fromString(e) : e : null,
                        spenderAccountId: "string" == typeof n ? r.a.fromString(n) : n,
                        serialNumbers: null,
                        allSerials: o
                    })), this
                }
                _validateChecksums(t) {
                    this._hbarAllowances.map(e => e._validateChecksums(t)), this._tokenAllowances.map(e => e._validateChecksums(t)), this._nftAllowances.map(e => e._validateChecksums(t))
                }
                _execute(t, e) {
                    return Promise.reject(new Error("This feature has been deprecated for this class."))
                }
                _getTransactionDataCase() {
                    throw new Error("This feature has been deprecated for this class.")
                }
                _makeTransactionData() {
                    throw new Error("This feature has been deprecated.")
                }
                _getLogId() {
                    return "AccountAllowanceAdjustTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
        },
        1483: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountAllowanceApproveTransaction
            }));
            var o = n(7),
                r = n(5),
                s = n(16),
                a = n(94),
                c = n(1),
                i = n.n(c),
                u = n(17),
                l = n(312),
                d = n(313),
                h = n(206);
            class AccountAllowanceApproveTransaction extends o.f {
                constructor(t = {}) {
                    super(), this._hbarApprovals = null != t.hbarApprovals ? t.hbarApprovals : [], this._tokenApprovals = null != t.tokenApprovals ? t.tokenApprovals : [], this._nftApprovals = null != t.nftApprovals ? t.nftApprovals : []
                }
                static _fromProtobuf(t, e, n, r, s) {
                    const a = s[0].cryptoApproveAllowance;
                    return o.f._fromProtobufTransactions(new AccountAllowanceApproveTransaction({
                        hbarApprovals: (null != a.cryptoAllowances ? a.cryptoAllowances : []).map(t => l.a._fromProtobuf(t)),
                        tokenApprovals: (null != a.tokenAllowances ? a.tokenAllowances : []).map(t => d.a._fromProtobuf(t)),
                        nftApprovals: (null != a.nftAllowances ? a.nftAllowances : []).map(t => h.a._fromProtobuf(t))
                    }), t, e, n, r, s)
                }
                get hbarApprovals() {
                    return this._hbarApprovals
                }
                approveHbarAllowance(t, e, n) {
                    return this._requireNotFrozen(), this._hbarApprovals.push(new l.a({
                        spenderAccountId: "string" == typeof e ? r.a.fromString(e) : e,
                        ownerAccountId: "string" == typeof t ? r.a.fromString(t) : t,
                        amount: n instanceof u.a ? n : new u.a(n)
                    })), this
                }
                addHbarAllowance(t, e) {
                    return this._requireNotFrozen(), this._hbarApprovals.push(new l.a({
                        spenderAccountId: "string" == typeof t ? r.a.fromString(t) : t,
                        amount: e instanceof u.a ? e : new u.a(e),
                        ownerAccountId: null
                    })), this
                }
                get tokenApprovals() {
                    return this._tokenApprovals
                }
                approveTokenAllowance(t, e, n, o) {
                    return this._requireNotFrozen(), this._tokenApprovals.push(new d.a({
                        tokenId: "string" == typeof t ? s.a.fromString(t) : t,
                        spenderAccountId: "string" == typeof n ? r.a.fromString(n) : n,
                        ownerAccountId: "string" == typeof e ? r.a.fromString(e) : e,
                        amount: "number" == typeof o ? i.a.fromNumber(o) : o
                    })), this
                }
                addTokenAllowance(t, e, n) {
                    return this._requireNotFrozen(), this._tokenApprovals.push(new d.a({
                        tokenId: "string" == typeof t ? s.a.fromString(t) : t,
                        spenderAccountId: "string" == typeof e ? r.a.fromString(e) : e,
                        amount: "number" == typeof n ? i.a.fromNumber(n) : n,
                        ownerAccountId: null
                    })), this
                }
                addTokenNftAllowance(t, e) {
                    return this._approveTokenNftAllowance(t, null, e)
                }
                get tokenNftApprovals() {
                    return this._nftApprovals
                }
                _approveTokenNftAllowance(t, e, n) {
                    this._requireNotFrozen();
                    const o = "string" == typeof t ? a.a.fromString(t) : t,
                        s = "string" == typeof n ? r.a.fromString(n) : n;
                    let c = !1;
                    for (const t of this._nftApprovals)
                        if (0 === t.tokenId.compare(o.tokenId) && null != t.spenderAccountId && 0 === t.spenderAccountId.compare(s)) {
                            null != t.serialNumbers && t.serialNumbers.push(o.serial), c = !0;
                            break
                        } return c || this._nftApprovals.push(new h.a({
                        tokenId: o.tokenId,
                        spenderAccountId: "string" == typeof n ? r.a.fromString(n) : n,
                        ownerAccountId: "string" == typeof e ? r.a.fromString(e) : e,
                        serialNumbers: [o.serial],
                        allSerials: !1
                    })), this
                }
                approveTokenNftAllowance(t, e, n) {
                    return this._approveTokenNftAllowance(t, e, n)
                }
                _approveAllTokenNftAllowance(t, e, n, o) {
                    return this._requireNotFrozen(), this._nftApprovals.push(new h.a({
                        tokenId: "string" == typeof t ? s.a.fromString(t) : t,
                        spenderAccountId: "string" == typeof n ? r.a.fromString(n) : n,
                        ownerAccountId: "string" == typeof e ? r.a.fromString(e) : e,
                        serialNumbers: null,
                        allSerials: o
                    })), this
                }
                addAllTokenNftAllowance(t, e, n) {
                    return this._approveAllTokenNftAllowance(t, e, n, !0)
                }
                approveTokenNftAllowanceAllSerials(t, e, n) {
                    return this._approveAllTokenNftAllowance(t, e, n, !0)
                }
                _validateChecksums(t) {
                    this._hbarApprovals.map(e => e._validateChecksums(t)), this._tokenApprovals.map(e => e._validateChecksums(t)), this._nftApprovals.map(e => e._validateChecksums(t))
                }
                _execute(t, e) {
                    return t.crypto.approveAllowances(e)
                }
                _getTransactionDataCase() {
                    return "cryptoApproveAllowance"
                }
                _makeTransactionData() {
                    return {
                        cryptoAllowances: this._hbarApprovals.map(t => t._toProtobuf()),
                        tokenAllowances: this._tokenApprovals.map(t => t._toProtobuf()),
                        nftAllowances: this._nftApprovals.map(t => t._toProtobuf())
                    }
                }
                _getLogId() {
                    return "AccountAllowanceApproveTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            o.e.set("cryptoApproveAllowance", AccountAllowanceApproveTransaction._fromProtobuf)
        },
        1484: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountAllowanceDeleteTransaction
            }));
            var o = n(7),
                r = n(5),
                s = n(94),
                a = n(206);
            class AccountAllowanceDeleteTransaction extends o.f {
                constructor(t = {}) {
                    super(), this._nftAllowances = null != t.nftAllowances ? t.nftAllowances : []
                }
                static _fromProtobuf(t, e, n, r, s) {
                    const c = s[0].cryptoDeleteAllowance;
                    return o.f._fromProtobufTransactions(new AccountAllowanceDeleteTransaction({
                        nftAllowances: (null != c.nftAllowances ? c.nftAllowances : []).map(t => a.a._fromProtobuf(t))
                    }), t, e, n, r, s)
                }
                get tokenNftAllowanceDeletions() {
                    return this._nftAllowances
                }
                deleteAllTokenNftAllowances(t, e) {
                    this._requireNotFrozen();
                    const n = "string" == typeof t ? s.a.fromString(t) : t,
                        o = "string" == typeof e ? r.a.fromString(e) : e;
                    let c = !1;
                    for (const t of this._nftAllowances)
                        if (0 === t.tokenId.compare(n.tokenId)) {
                            null != t.serialNumbers && t.serialNumbers.push(n.serial), c = !0;
                            break
                        } return c || this._nftAllowances.push(new a.a({
                        tokenId: n.tokenId,
                        spenderAccountId: null,
                        serialNumbers: [n.serial],
                        ownerAccountId: o,
                        allSerials: !1
                    })), this
                }
                _validateChecksums(t) {
                    this._nftAllowances.map(e => e._validateChecksums(t))
                }
                _execute(t, e) {
                    return t.crypto.deleteAllowances(e)
                }
                _getTransactionDataCase() {
                    return "cryptoDeleteAllowance"
                }
                _makeTransactionData() {
                    return {
                        nftAllowances: this._nftAllowances.map(t => t._toProtobuf())
                    }
                }
                _getLogId() {
                    return "AccountAllowanceDeleteTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            o.e.set("cryptoDeleteAllowance", AccountAllowanceDeleteTransaction._fromProtobuf)
        },
        1485: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountCreateTransaction
            }));
            var o = n(17),
                r = n(5),
                s = n(7),
                a = n(46),
                c = n(1),
                i = n.n(c),
                u = n(25),
                l = n(318),
                d = n(11),
                h = n(100);
            class AccountCreateTransaction extends s.f {
                constructor(t = {}) {
                    super(), this._key = null, this._initialBalance = null, this._sendRecordThreshold = s.c, this._receiveRecordThreshold = s.c, this._receiverSignatureRequired = !1, this._proxyAccountId = null, this._autoRenewPeriod = new a.a(s.b), this._accountMemo = null, this._maxAutomaticTokenAssociations = null, this._stakedAccountId = null, this._stakedNodeId = null, this._declineStakingReward = !1, this._aliasKey = null, this._aliasEvmAddress = null, null != t.key && this.setKey(t.key), null != t.receiverSignatureRequired && this.setReceiverSignatureRequired(t.receiverSignatureRequired), null != t.initialBalance && this.setInitialBalance(t.initialBalance), null != t.proxyAccountId && this.setProxyAccountId(t.proxyAccountId), null != t.autoRenewPeriod && this.setAutoRenewPeriod(t.autoRenewPeriod), null != t.accountMemo && this.setAccountMemo(t.accountMemo), null != t.maxAutomaticTokenAssociations && this.setMaxAutomaticTokenAssociations(t.maxAutomaticTokenAssociations), null != t.stakedAccountId && this.setStakedAccountId(t.stakedAccountId), null != t.stakedNodeId && this.setStakedNodeId(t.stakedNodeId), null != t.declineStakingReward && this.setDeclineStakingReward(t.declineStakingReward), null != t.aliasKey && this.setAliasKey(t.aliasKey), null != t.aliasEvmAddress && this.setAliasEvmAddress(t.aliasEvmAddress)
                }
                static _fromProtobuf(t, e, n, o, a) {
                    const c = a[0].cryptoCreateAccount;
                    let i = void 0,
                        f = void 0;
                    return null != c.alias && c.alias.length > 0 && (20 === c.alias.length ? f = l.a.fromBytes(c.alias) : i = u.a._fromProtobufKey(d.proto.Key.decode(c.alias))), i instanceof h.a || (i = void 0), s.f._fromProtobufTransactions(new AccountCreateTransaction({
                        key: null != c.key ? u.a._fromProtobufKey(c.key) : void 0,
                        initialBalance: null != c.initialBalance ? c.initialBalance : void 0,
                        receiverSignatureRequired: null != c.receiverSigRequired ? c.receiverSigRequired : void 0,
                        proxyAccountId: null != c.proxyAccountID ? r.a._fromProtobuf(c.proxyAccountID) : void 0,
                        autoRenewPeriod: null != c.autoRenewPeriod && null != c.autoRenewPeriod.seconds ? c.autoRenewPeriod.seconds : void 0,
                        accountMemo: null != c.memo ? c.memo : void 0,
                        maxAutomaticTokenAssociations: null != c.maxAutomaticTokenAssociations ? c.maxAutomaticTokenAssociations : void 0,
                        stakedAccountId: null != c.stakedAccountId ? r.a._fromProtobuf(c.stakedAccountId) : void 0,
                        stakedNodeId: null != c.stakedNodeId ? c.stakedNodeId : void 0,
                        declineStakingReward: 1 == c.declineReward,
                        aliasKey: i,
                        aliasEvmAddress: f
                    }), t, e, n, o, a)
                }
                get key() {
                    return this._key
                }
                setKey(t) {
                    return this._requireNotFrozen(), this._key = t, this
                }
                get initialBalance() {
                    return this._initialBalance
                }
                setInitialBalance(t) {
                    return this._requireNotFrozen(), this._initialBalance = t instanceof o.a ? t : new o.a(t), this
                }
                get receiverSignatureRequired() {
                    return this._receiverSignatureRequired
                }
                setReceiverSignatureRequired(t) {
                    return this._requireNotFrozen(), this._receiverSignatureRequired = t, this
                }
                get proxyAccountId() {
                    return this._proxyAccountId
                }
                setProxyAccountId(t) {
                    return this._requireNotFrozen(), this._proxyAccountId = t, this
                }
                get autoRenewPeriod() {
                    return this._autoRenewPeriod
                }
                setAutoRenewPeriod(t) {
                    return this._requireNotFrozen(), this._autoRenewPeriod = t instanceof a.a ? t : new a.a(t), this
                }
                get accountMemo() {
                    return this._accountMemo
                }
                setAccountMemo(t) {
                    return this._requireNotFrozen(), this._accountMemo = t, this
                }
                get maxAutomaticTokenAssociations() {
                    return this._maxAutomaticTokenAssociations
                }
                setMaxAutomaticTokenAssociations(t) {
                    return this._requireNotFrozen(), this._maxAutomaticTokenAssociations = "number" == typeof t ? i.a.fromNumber(t) : t, this
                }
                get stakedAccountId() {
                    return this._stakedAccountId
                }
                setStakedAccountId(t) {
                    return this._requireNotFrozen(), this._stakedAccountId = "string" == typeof t ? r.a.fromString(t) : t, this
                }
                get stakedNodeId() {
                    return this._stakedNodeId
                }
                setStakedNodeId(t) {
                    return this._requireNotFrozen(), this._stakedNodeId = i.a.fromValue(t), this
                }
                get declineStakingRewards() {
                    return this._declineStakingReward
                }
                setDeclineStakingReward(t) {
                    return this._requireNotFrozen(), this._declineStakingReward = t, this
                }
                get aliasKey() {
                    return this._aliasKey
                }
                setAliasKey(t) {
                    return this._aliasKey = t, this
                }
                get aliasEvmAddress() {
                    return this._aliasEvmAddress
                }
                setAliasEvmAddress(t) {
                    return "string" == typeof t ? this._aliasEvmAddress = l.a.fromString(t) : t instanceof Uint8Array ? this._aliasEvmAddress = l.a.fromBytes(t) : this._aliasEvmAddress = t, this
                }
                _validateChecksums(t) {
                    null != this._proxyAccountId && this._proxyAccountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.crypto.createAccount(e)
                }
                _getTransactionDataCase() {
                    return "cryptoCreateAccount"
                }
                _makeTransactionData() {
                    let t = null;
                    return null != this._aliasKey ? t = d.proto.Key.encode(this._aliasKey._toProtobufKey()).finish() : null != this._aliasEvmAddress && (t = this._aliasEvmAddress.toBytes()), {
                        key: null != this._key ? this._key._toProtobufKey() : null,
                        initialBalance: null != this._initialBalance ? this._initialBalance.toTinybars() : null,
                        autoRenewPeriod: this._autoRenewPeriod._toProtobuf(),
                        proxyAccountID: null != this._proxyAccountId ? this._proxyAccountId._toProtobuf() : null,
                        receiveRecordThreshold: this._receiveRecordThreshold.toTinybars(),
                        sendRecordThreshold: this._sendRecordThreshold.toTinybars(),
                        receiverSigRequired: this._receiverSignatureRequired,
                        memo: this._accountMemo,
                        maxAutomaticTokenAssociations: null != this._maxAutomaticTokenAssociations ? this._maxAutomaticTokenAssociations.toInt() : null,
                        stakedAccountId: null != this.stakedAccountId ? this.stakedAccountId._toProtobuf() : null,
                        stakedNodeId: this.stakedNodeId,
                        declineReward: this.declineStakingRewards,
                        alias: t
                    }
                }
                _getLogId() {
                    return "AccountCreateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            s.e.set("cryptoCreateAccount", AccountCreateTransaction._fromProtobuf)
        },
        1486: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountDeleteTransaction
            }));
            var o = n(5),
                r = n(7);
            class AccountDeleteTransaction extends r.f {
                constructor(t = {}) {
                    super(), this._accountId = null, this._transferAccountId = null, null != t.accountId && this.setAccountId(t.accountId), null != t.transferAccountId && this.setTransferAccountId(t.transferAccountId)
                }
                static _fromProtobuf(t, e, n, s, a) {
                    const c = a[0].cryptoDelete;
                    return r.f._fromProtobufTransactions(new AccountDeleteTransaction({
                        accountId: null != c.deleteAccountID ? o.a._fromProtobuf(c.deleteAccountID) : void 0,
                        transferAccountId: null != c.transferAccountID ? o.a._fromProtobuf(c.transferAccountID) : void 0
                    }), t, e, n, s, a)
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._requireNotFrozen(), this._accountId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                get transferAccountId() {
                    return this._transferAccountId
                }
                setTransferAccountId(t) {
                    return this._requireNotFrozen(), this._transferAccountId = "string" == typeof t ? o.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._accountId && this._accountId.validateChecksum(t), null != this._transferAccountId && this._transferAccountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.crypto.cryptoDelete(e)
                }
                _getTransactionDataCase() {
                    return "cryptoDelete"
                }
                _makeTransactionData() {
                    return {
                        deleteAccountID: null != this._accountId ? this._accountId._toProtobuf() : null,
                        transferAccountID: null != this._transferAccountId ? this._transferAccountId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "AccountDeleteTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            r.e.set("cryptoDelete", AccountDeleteTransaction._fromProtobuf)
        },
        1487: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountInfoFlow
            }));
            var o = n(276),
                r = n(93);
            class AccountInfoFlow {
                static async verifySignature(t, e, n, s) {
                    const a = await (new o.a).setAccountId(e).execute(t);
                    return !(a.key instanceof r.a) && a.key.verify(n, s)
                }
                static async verifyTransaction(t, e, n) {
                    const s = await (new o.a).setAccountId(e).execute(t);
                    return !(s.key instanceof r.a) && s.key.verifyTransaction(n)
                }
                static async verifySignatureWithSigner(t, e, n, s) {
                    const a = await (new o.a).setAccountId(e).executeWithSigner(t);
                    return !(a.key instanceof r.a) && a.key.verify(n, s)
                }
                static async verifyTransactionWithSigner(t, e, n) {
                    const s = await (new o.a).setAccountId(e).executeWithSigner(t);
                    return !(s.key instanceof r.a) && s.key.verifyTransaction(n)
                }
            }
        },
        1488: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountStakersQuery
            }));
            var o = n(33),
                r = n(5),
                s = n(704);
            class AccountStakersQuery extends o.d {
                constructor(t = {}) {
                    super(), this._accountId = null, null != t.accountId && this.setAccountId(t.accountId)
                }
                static _fromProtobuf(t) {
                    const e = t.cryptoGetProxyStakers;
                    return new AccountStakersQuery({
                        accountId: null != e.accountID ? r.a._fromProtobuf(e.accountID) : void 0
                    })
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._accountId && this._accountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.crypto.getStakersByAccountID(e)
                }
                _mapResponseHeader(t) {
                    return t.cryptoGetProxyStakers.header
                }
                _mapResponse(t) {
                    const e = t.cryptoGetProxyStakers.stakers;
                    return Promise.resolve((null != e.proxyStaker ? e.proxyStaker : []).map(t => s.a._fromProtobuf(t)))
                }
                _onMakeRequest(t) {
                    return {
                        cryptoGetProxyStakers: {
                            header: t,
                            accountID: null != this._accountId ? this._accountId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "AccountStakersQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            o.b.set("cryptoGetProxyStakers", AccountStakersQuery._fromProtobuf)
        },
        1489: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountUpdateTransaction
            }));
            var o = n(7),
                r = n(5),
                s = n(23),
                a = n(46),
                c = n(1),
                i = n.n(c),
                u = n(25);
            class AccountUpdateTransaction extends o.f {
                constructor(t = {}) {
                    super(), this._accountId = null, this._key = null, this._receiverSignatureRequired = !1, this._proxyAccountId = null, this._autoRenewPeriod = null, this._expirationTime = null, this._accountMemo = null, this._maxAutomaticTokenAssociations = null, this._aliasKey = null, this._stakedAccountId = null, this._stakedNodeId = null, this._declineStakingReward = null, null != t.accountId && this.setAccountId(t.accountId), null != t.key && this.setKey(t.key), null != t.receiverSignatureRequired && this.setReceiverSignatureRequired(t.receiverSignatureRequired), null != t.proxyAccountId && this.setProxyAccountId(t.proxyAccountId), null != t.autoRenewPeriod && this.setAutoRenewPeriod(t.autoRenewPeriod), null != t.expirationTime && this.setExpirationTime(t.expirationTime), null != t.accountMemo && this.setAccountMemo(t.accountMemo), null != t.maxAutomaticTokenAssociations && this.setMaxAutomaticTokenAssociations(t.maxAutomaticTokenAssociations), null != t.stakedAccountId && this.setStakedAccountId(t.stakedAccountId), null != t.stakedNodeId && this.setStakedNodeId(t.stakedNodeId), null != t.declineStakingReward && this.setDeclineStakingReward(t.declineStakingReward)
                }
                static _fromProtobuf(t, e, n, a, c) {
                    const l = c[0].cryptoUpdateAccount;
                    return o.f._fromProtobufTransactions(new AccountUpdateTransaction({
                        accountId: null != l.accountIDToUpdate ? r.a._fromProtobuf(l.accountIDToUpdate) : void 0,
                        key: null != l.key ? u.a._fromProtobufKey(l.key) : void 0,
                        receiverSignatureRequired: null != l.receiverSigRequired ? l.receiverSigRequired : void 0,
                        proxyAccountId: null != l.proxyAccountID ? r.a._fromProtobuf(l.proxyAccountID) : void 0,
                        autoRenewPeriod: null != l.autoRenewPeriod && null != l.autoRenewPeriod.seconds ? l.autoRenewPeriod.seconds : void 0,
                        expirationTime: null != l.expirationTime ? s.a._fromProtobuf(l.expirationTime) : void 0,
                        accountMemo: null != l.memo && null != l.memo.value ? l.memo.value : void 0,
                        maxAutomaticTokenAssociations: null != l.maxAutomaticTokenAssociations && null != l.maxAutomaticTokenAssociations.value ? i.a.fromNumber(l.maxAutomaticTokenAssociations.value) : void 0,
                        stakedAccountId: null != l.stakedAccountId ? r.a._fromProtobuf(l.stakedAccountId) : void 0,
                        stakedNodeId: null != l.stakedNodeId ? l.stakedNodeId : void 0,
                        declineStakingReward: null != l.declineReward && 1 == l.declineReward
                    }), t, e, n, a, c)
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._requireNotFrozen(), this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                get key() {
                    return this._key
                }
                setKey(t) {
                    return this._requireNotFrozen(), this._key = t, this
                }
                get receiverSignatureRequired() {
                    return this._receiverSignatureRequired
                }
                setReceiverSignatureRequired(t) {
                    return this._requireNotFrozen(), this._receiverSignatureRequired = t, this
                }
                get proxyAccountId() {
                    return this._proxyAccountId
                }
                setProxyAccountId(t) {
                    return this._requireNotFrozen(), this._proxyAccountId = t, this
                }
                get autoRenewPeriod() {
                    return this._autoRenewPeriod
                }
                setAutoRenewPeriod(t) {
                    return this._requireNotFrozen(), this._autoRenewPeriod = t instanceof a.a ? t : new a.a(t), this
                }
                get expirationTime() {
                    return this._expirationTime
                }
                setExpirationTime(t) {
                    return this._requireNotFrozen(), this._expirationTime = t instanceof Date ? s.a.fromDate(t) : t, this
                }
                get accountMemo() {
                    return this._accountMemo
                }
                setAccountMemo(t) {
                    return this._requireNotFrozen(), this._accountMemo = t, this
                }
                clearAccountMemo() {
                    return this._requireNotFrozen(), this._accountMemo = null, this
                }
                get maxAutomaticTokenAssociations() {
                    return this._maxAutomaticTokenAssociations
                }
                setMaxAutomaticTokenAssociations(t) {
                    return this._requireNotFrozen(), this._maxAutomaticTokenAssociations = "number" == typeof t ? i.a.fromNumber(t) : t, this
                }
                get aliasKey() {
                    return null
                }
                setAliasKey(t) {
                    return this
                }
                get stakedAccountId() {
                    return this._stakedAccountId
                }
                setStakedAccountId(t) {
                    return this._requireNotFrozen(), this._stakedAccountId = "string" == typeof t ? r.a.fromString(t) : t, this
                }
                clearStakedAccountId() {
                    return this._requireNotFrozen(), this._stakedAccountId = new r.a(0, 0, 0), this
                }
                get stakedNodeId() {
                    return this._stakedNodeId
                }
                setStakedNodeId(t) {
                    return this._requireNotFrozen(), this._stakedNodeId = i.a.fromValue(t), this
                }
                clearStakedNodeId() {
                    return this._requireNotFrozen(), this._stakedNodeId = i.a.fromNumber(-1), this
                }
                get declineStakingRewards() {
                    return this._declineStakingReward
                }
                setDeclineStakingReward(t) {
                    return this._requireNotFrozen(), this._declineStakingReward = t, this
                }
                _validateChecksums(t) {
                    null != this._accountId && this._accountId.validateChecksum(t), null != this._proxyAccountId && this._proxyAccountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.crypto.updateAccount(e)
                }
                _getTransactionDataCase() {
                    return "cryptoUpdateAccount"
                }
                _makeTransactionData() {
                    return {
                        accountIDToUpdate: null != this._accountId ? this._accountId._toProtobuf() : null,
                        key: null != this._key ? this._key._toProtobufKey() : null,
                        expirationTime: null != this._expirationTime ? this._expirationTime._toProtobuf() : null,
                        proxyAccountID: null != this._proxyAccountId ? this._proxyAccountId._toProtobuf() : null,
                        autoRenewPeriod: null != this._autoRenewPeriod ? this._autoRenewPeriod._toProtobuf() : null,
                        receiverSigRequiredWrapper: null == this._receiverSignatureRequired ? null : {
                            value: this._receiverSignatureRequired
                        },
                        memo: null != this._accountMemo ? {
                            value: this._accountMemo
                        } : null,
                        maxAutomaticTokenAssociations: null != this._maxAutomaticTokenAssociations ? {
                            value: this._maxAutomaticTokenAssociations.toInt()
                        } : null,
                        stakedAccountId: null != this.stakedAccountId ? this.stakedAccountId._toProtobuf() : null,
                        stakedNodeId: this.stakedNodeId,
                        declineReward: null != this.declineStakingRewards ? {
                            value: this.declineStakingRewards
                        } : null
                    }
                }
                _getLogId() {
                    return "AccountUpdateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            o.e.set("cryptoUpdateAccount", AccountUpdateTransaction._fromProtobuf)
        },
        1504: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return LiveHashAddTransaction
            }));
            var o = n(7),
                r = n(5),
                s = n(46),
                a = n(25),
                c = n(93);
            class LiveHashAddTransaction extends o.f {
                constructor(t = {}) {
                    super(), this._hash = null, this._keys = null, this._duration = null, this._accountId = null, null != t.hash && this.setHash(t.hash), null != t.keys && this.setKeys(t.keys), null != t.duration && this.setDuration(t.duration), null != t.accountId && this.setAccountId(t.accountId)
                }
                static _fromProtobuf(t, e, n, s, c) {
                    const i = c[0].cryptoAddLiveHash.liveHash;
                    return o.f._fromProtobufTransactions(new LiveHashAddTransaction({
                        hash: null != i.hash ? i.hash : void 0,
                        keys: null != i.keys && null != i.keys.keys ? i.keys.keys.map(t => a.a._fromProtobufKey(t)) : void 0,
                        duration: null != i.duration && null != i.duration.seconds ? i.duration.seconds : void 0,
                        accountId: null != i.accountId ? r.a._fromProtobuf(i.accountId) : void 0
                    }), t, e, n, s, c)
                }
                get hash() {
                    return this._hash
                }
                setHash(t) {
                    return this._requireNotFrozen(), this._hash = t, this
                }
                get keys() {
                    return this._keys
                }
                setKeys(t) {
                    return this._requireNotFrozen(), this._keys = t instanceof c.a ? t.toArray() : t, this
                }
                get duration() {
                    return this._duration
                }
                setDuration(t) {
                    return this._requireNotFrozen(), this._duration = t instanceof s.a ? t : new s.a(t), this
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._requireNotFrozen(), this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._accountId && this._accountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.crypto.addLiveHash(e)
                }
                _getTransactionDataCase() {
                    return "cryptoAddLiveHash"
                }
                _makeTransactionData() {
                    return {
                        liveHash: {
                            hash: this._hash,
                            keys: null != this._keys ? {
                                keys: this._keys.map(t => t._toProtobufKey())
                            } : void 0,
                            duration: null != this._duration ? this._duration._toProtobuf() : null,
                            accountId: null != this._accountId ? this._accountId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "LiveHashAddTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            o.e.set("cryptoAddLiveHash", LiveHashAddTransaction._fromProtobuf)
        },
        1505: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return LiveHashDeleteTransaction
            }));
            var o = n(7),
                r = n(5);
            class LiveHashDeleteTransaction extends o.f {
                constructor(t = {}) {
                    super(), this._hash = null, this._accountId = null, null != t.hash && this.setHash(t.hash), null != t.accountId && this.setAccountId(t.accountId)
                }
                static _fromProtobuf(t, e, n, s, a) {
                    const c = a[0].cryptoDeleteLiveHash;
                    return o.f._fromProtobufTransactions(new LiveHashDeleteTransaction({
                        hash: null != c.liveHashToDelete ? c.liveHashToDelete : void 0,
                        accountId: null != c.accountOfLiveHash ? r.a._fromProtobuf(c.accountOfLiveHash) : void 0
                    }), t, e, n, s, a)
                }
                get hash() {
                    return this._hash
                }
                setHash(t) {
                    return this._requireNotFrozen(), this._hash = t, this
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._requireNotFrozen(), this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._accountId && this._accountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.crypto.deleteLiveHash(e)
                }
                _getTransactionDataCase() {
                    return "cryptoDeleteLiveHash"
                }
                _makeTransactionData() {
                    return {
                        liveHashToDelete: this._hash,
                        accountOfLiveHash: null != this._accountId ? this._accountId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "LiveHashDeleteTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            o.e.set("cryptoDeleteLiveHash", LiveHashDeleteTransaction._fromProtobuf)
        },
        1506: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return LiveHashQuery
            }));
            var o = n(33),
                r = n(5),
                s = n(441);
            class LiveHashQuery extends o.d {
                constructor(t = {}) {
                    super(), this._accountId = null, null != t.accountId && this.setAccountId(t.accountId), this._hash = null, null != t.hash && this.setHash(t.hash)
                }
                static _fromProtobuf(t) {
                    const e = t.cryptoGetLiveHash;
                    return new LiveHashQuery({
                        accountId: null != e.accountID ? r.a._fromProtobuf(e.accountID) : void 0,
                        hash: null != e.hash ? e.hash : void 0
                    })
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._accountId = t instanceof r.a ? t : r.a.fromString(t), this
                }
                get liveHash() {
                    return this._hash
                }
                setHash(t) {
                    return this._hash = t, this
                }
                _validateChecksums(t) {
                    null != this._accountId && this._accountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.crypto.getLiveHash(e)
                }
                _mapResponseHeader(t) {
                    return t.cryptoGetLiveHash.header
                }
                _mapResponse(t) {
                    const e = t.cryptoGetLiveHash;
                    return Promise.resolve(s.a._fromProtobuf(e.liveHash))
                }
                _onMakeRequest(t) {
                    return {
                        cryptoGetLiveHash: {
                            header: t,
                            accountID: null != this._accountId ? this._accountId._toProtobuf() : null,
                            hash: this._hash
                        }
                    }
                }
                _getLogId() {
                    return "LiveHashQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            o.b.set("cryptoGetLiveHash", LiveHashQuery._fromProtobuf)
        },
        206: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenNftAllowance
            }));
            var o = n(16),
                r = n(5),
                s = n(1),
                a = n.n(s);
            class TokenNftAllowance {
                constructor(t) {
                    this.tokenId = t.tokenId, this.spenderAccountId = t.spenderAccountId, this.ownerAccountId = t.ownerAccountId, this.serialNumbers = t.serialNumbers, this.allSerials = t.allSerials, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    const e = null != t.approvedForAll && 1 == t.approvedForAll.value;
                    return new TokenNftAllowance({
                        tokenId: o.a._fromProtobuf(t.tokenId),
                        spenderAccountId: null != t.spender ? r.a._fromProtobuf(t.spender) : null,
                        ownerAccountId: null != t.owner ? r.a._fromProtobuf(t.owner) : null,
                        serialNumbers: e ? null : null != t.serialNumbers ? t.serialNumbers.map(t => a.a.fromValue(t)) : [],
                        allSerials: e
                    })
                }
                static _fromGrantedProtobuf(t, e) {
                    return new TokenNftAllowance({
                        tokenId: o.a._fromProtobuf(t.tokenId),
                        spenderAccountId: r.a._fromProtobuf(t.spender),
                        ownerAccountId: e,
                        serialNumbers: [],
                        allSerials: null
                    })
                }
                static _fromRemoveProtobuf(t) {
                    return new TokenNftAllowance({
                        tokenId: o.a._fromProtobuf(t.tokenId),
                        spenderAccountId: null,
                        ownerAccountId: null != t.owner ? r.a._fromProtobuf(t.owner) : null,
                        serialNumbers: null != t.serialNumbers ? t.serialNumbers.map(t => a.a.fromValue(t)) : [],
                        allSerials: null
                    })
                }
                _toProtobuf() {
                    return {
                        tokenId: this.tokenId._toProtobuf(),
                        spender: null != this.spenderAccountId ? this.spenderAccountId._toProtobuf() : null,
                        owner: null != this.ownerAccountId ? this.ownerAccountId._toProtobuf() : null,
                        approvedForAll: null == this.serialNumbers ? {
                            value: this.allSerials
                        } : null,
                        serialNumbers: this.serialNumbers
                    }
                }
                _validateChecksums(t) {
                    this.tokenId.validateChecksum(t), null != this.ownerAccountId && this.ownerAccountId.validateChecksum(t), null != this.spenderAccountId && this.spenderAccountId.validateChecksum(t)
                }
            }
        },
        2323: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TransferTransaction_TransferTransaction
            }));
            var o = n(17),
                r = n(16),
                s = n(5),
                a = n(7),
                c = n(1),
                i = n.n(c),
                u = n(98);
            class NullableTokenDecimalMap_NullableTokenDecimalMap extends u.a {
                constructor() {
                    super(t => r.a.fromString(t))
                }
            }
            var l = n(310),
                d = n(456),
                h = n(917);
            class HbarTransferMap_HbarTransferMap extends u.a {
                constructor() {
                    super(t => s.a.fromString(t))
                }
                static _fromProtobuf(t) {
                    const e = new HbarTransferMap_HbarTransferMap;
                    for (const n of null != t.accountAmounts ? t.accountAmounts : []) {
                        const t = s.a._fromProtobuf(n.accountID);
                        e._set(t, o.a.fromTinybars(n.amount))
                    }
                    return e
                }
            }
            var f = n(919),
                m = n(918),
                _ = n(1188),
                p = n(94);
            class TransferTransaction_TransferTransaction extends a.f {
                constructor(t = {}) {
                    super(), this._tokenTransfers = [], this._hbarTransfers = [], this._nftTransfers = [], this._defaultMaxTransactionFee = new o.a(1);
                    for (const e of null != t.tokenTransfers ? t.tokenTransfers : []) this.addTokenTransfer(e.tokenId, e.accountId, e.amount);
                    for (const e of null != t.hbarTransfers ? t.hbarTransfers : []) this.addHbarTransfer(e.accountId, e.amount);
                    for (const e of null != t.nftTransfers ? t.nftTransfers : []) this.addNftTransfer(e.tokenId, e.serial, e.sender, e.recipient)
                }
                static _fromProtobuf(t, e, n, o, r) {
                    const s = r[0].cryptoTransfer,
                        c = new TransferTransaction_TransferTransaction;
                    return c._tokenTransfers = d.a._fromProtobuf(null != s.tokenTransfers ? s.tokenTransfers : []), c._hbarTransfers = l.a._fromProtobuf(null != s.transfers && null != s.transfers.accountAmounts ? s.transfers.accountAmounts : []), c._nftTransfers = _.a._fromProtobuf(null != s.tokenTransfers ? s.tokenTransfers : []), a.f._fromProtobufTransactions(c, t, e, n, o, r)
                }
                get tokenTransfers() {
                    const t = new h.a;
                    for (const e of this._tokenTransfers) {
                        let n = t.get(e.tokenId);
                        null != n ? n._set(e.accountId, e.amount) : (n = new m.a, n._set(e.accountId, e.amount), t._set(e.tokenId, n))
                    }
                    return t
                }
                _addTokenTransfer(t, e, n, o) {
                    this._requireNotFrozen();
                    const a = t instanceof r.a ? t : r.a.fromString(t),
                        c = e instanceof s.a ? e : s.a.fromString(e),
                        u = n instanceof i.a ? n : i.a.fromNumber(n);
                    for (const t of this._tokenTransfers)
                        if (0 === t.tokenId.compare(a) && 0 === t.accountId.compare(c)) return t.amount = t.amount.add(u), t.expectedDecimals = null, this;
                    return this._tokenTransfers.push(new d.a({
                        tokenId: t,
                        accountId: e,
                        expectedDecimals: null,
                        amount: n,
                        isApproved: o
                    })), this
                }
                addTokenTransfer(t, e, n) {
                    return this._addTokenTransfer(t, e, n, !1)
                }
                addApprovedTokenTransfer(t, e, n) {
                    return this._addTokenTransfer(t, e, n, !0)
                }
                addTokenTransferWithDecimals(t, e, n, o) {
                    this._requireNotFrozen();
                    const a = t instanceof r.a ? t : r.a.fromString(t),
                        c = e instanceof s.a ? e : s.a.fromString(e),
                        u = n instanceof i.a ? n : i.a.fromNumber(n);
                    let l = !1;
                    for (const t of this._tokenTransfers)
                        if (0 === t.tokenId.compare(a)) {
                            if (null != t.expectedDecimals && t.expectedDecimals !== o) throw new Error("expected decimals mis-match");
                            t.expectedDecimals = o, 0 === t.accountId.compare(c) && (t.amount = t.amount.add(u), t.expectedDecimals = o, l = !0)
                        } return l || this._tokenTransfers.push(new d.a({
                        tokenId: t,
                        accountId: e,
                        expectedDecimals: o,
                        amount: n,
                        isApproved: !1
                    })), this
                }
                get tokenIdDecimals() {
                    const t = new NullableTokenDecimalMap_NullableTokenDecimalMap;
                    for (const e of this._tokenTransfers) t._set(e.tokenId, e.expectedDecimals);
                    return t
                }
                get hbarTransfers() {
                    const t = new HbarTransferMap_HbarTransferMap;
                    for (const e of this._hbarTransfers) t._set(e.accountId, e.amount);
                    return t
                }
                _addHbarTransfer(t, e, n) {
                    this._requireNotFrozen();
                    const r = t instanceof s.a ? t.clone() : s.a.fromString(t),
                        a = e instanceof o.a ? e : new o.a(e);
                    for (const t of this._hbarTransfers)
                        if (0 === t.accountId.compare(r)) return t.amount = o.a.fromTinybars(t.amount.toTinybars().add(a.toTinybars())), this;
                    return this._hbarTransfers.push(new l.a({
                        accountId: r,
                        amount: a,
                        isApproved: n
                    })), this
                }
                addHbarTransfer(t, e) {
                    return this._addHbarTransfer(t, e, !1)
                }
                addApprovedHbarTransfer(t, e) {
                    return this._addHbarTransfer(t, e, !0)
                }
                _validateChecksums(t) {
                    for (const e of this._hbarTransfers) e.accountId.validateChecksum(t);
                    for (const e of this._tokenTransfers) e.tokenId.validateChecksum(t), e.accountId.validateChecksum(t);
                    for (const e of this._nftTransfers) e.tokenId.validateChecksum(t), e.senderAccountId.validateChecksum(t), e.receiverAccountId.validateChecksum(t)
                }
                get nftTransfers() {
                    const t = new f.a;
                    for (const e of this._nftTransfers) {
                        const n = t.get(e.tokenId),
                            o = {
                                sender: e.senderAccountId,
                                recipient: e.receiverAccountId,
                                serial: e.serialNumber,
                                isApproved: e.isApproved
                            };
                        null != n ? n.push(o) : t._set(e.tokenId, [o])
                    }
                    return t
                }
                _addNftTransfer(t, e, n, o, a) {
                    let c, i, u;
                    if (this._requireNotFrozen(), e instanceof p.a) c = e, i = "string" == typeof n ? s.a.fromString(n) : n, u = "string" == typeof o ? s.a.fromString(o) : o;
                    else if (e instanceof r.a) c = new p.a(e, n), i = "string" == typeof o ? s.a.fromString(o) : o, u = "string" == typeof a ? s.a.fromString(a) : a;
                    else try {
                        c = p.a.fromString(e), i = "string" == typeof n ? s.a.fromString(n) : n, u = "string" == typeof o ? s.a.fromString(o) : o
                    } catch (t) {
                        const l = r.a.fromString(e);
                        c = new p.a(l, n), i = "string" == typeof o ? s.a.fromString(o) : o, u = "string" == typeof a ? s.a.fromString(a) : a
                    }
                    for (const t of this._nftTransfers)
                        if (0 === t.tokenId.compare(c.tokenId) && 0 === t.serialNumber.compare(c.serial)) return t.senderAccountId = i, t.receiverAccountId = u, this;
                    return this._nftTransfers.push(new _.a({
                        tokenId: c.tokenId,
                        serialNumber: c.serial,
                        senderAccountId: i,
                        receiverAccountId: u,
                        isApproved: t
                    })), this
                }
                addNftTransfer(t, e, n, o) {
                    return this._addNftTransfer(!1, t, e, n, o)
                }
                addApprovedNftTransfer(t, e, n, o) {
                    return this._addNftTransfer(!0, t, e, n, o)
                }
                setHbarTransferApproval(t, e) {
                    const n = "string" == typeof t ? s.a.fromString(t) : t;
                    for (const t of this._hbarTransfers) 0 === t.accountId.compare(n) && (t.isApproved = e);
                    return this
                }
                setTokenTransferApproval(t, e, n) {
                    const o = "string" == typeof t ? r.a.fromString(t) : t,
                        a = "string" == typeof e ? s.a.fromString(e) : e;
                    for (const t of this._tokenTransfers) 0 === t.tokenId.compare(o) && 0 === t.accountId.compare(a) && (t.isApproved = n);
                    return this
                }
                setNftTransferApproval(t, e) {
                    const n = "string" == typeof t ? p.a.fromString(t) : t;
                    for (const t of this._nftTransfers) 0 === t.tokenId.compare(n.tokenId) && 0 === t.serialNumber.compare(n.serial) && (t.isApproved = e);
                    return this
                }
                _execute(t, e) {
                    return t.crypto.cryptoTransfer(e)
                }
                _getTransactionDataCase() {
                    return "cryptoTransfer"
                }
                _makeTransactionData() {
                    const t = [];
                    this._tokenTransfers.sort((t, e) => {
                        const n = t.tokenId.compare(e.tokenId);
                        return 0 !== n ? n : t.accountId.compare(e.accountId)
                    }), this._nftTransfers.sort((t, e) => {
                        const n = t.senderAccountId.compare(e.senderAccountId);
                        if (0 != n) return n;
                        const o = t.receiverAccountId.compare(e.receiverAccountId);
                        return 0 != o ? o : t.serialNumber.compare(e.serialNumber)
                    });
                    let e = 0,
                        n = 0;
                    for (; e < this._tokenTransfers.length || n < this._nftTransfers.length;)
                        if (e < this._tokenTransfers.length && n < this._nftTransfers.length) {
                            const o = this._tokenTransfers[e].tokenId,
                                r = this._nftTransfers[n].tokenId,
                                s = t.length > 0 ? t[t.length - 1] : null,
                                a = null != s ? s.tokenId : null;
                            if (null != s && null != a && 0 === a.compare(o)) {
                                s.transfers.push(this._tokenTransfers[e++]);
                                continue
                            }
                            if (null != s && null != a && 0 === a.compare(r)) {
                                s.nftTransfers.push(this._nftTransfers[n++]);
                                continue
                            }
                            const c = o.compare(r);
                            0 === c ? t.push({
                                tokenId: o,
                                expectedDecimals: this._tokenTransfers[e].expectedDecimals,
                                transfers: [this._tokenTransfers[e++]],
                                nftTransfers: [this._nftTransfers[n++]]
                            }) : c < 0 ? t.push({
                                tokenId: o,
                                expectedDecimals: this._tokenTransfers[e].expectedDecimals,
                                transfers: [this._tokenTransfers[e++]],
                                nftTransfers: []
                            }) : t.push({
                                tokenId: r,
                                expectedDecimals: null,
                                transfers: [],
                                nftTransfers: [this._nftTransfers[n++]]
                            })
                        } else if (e < this._tokenTransfers.length) {
                        const n = this._tokenTransfers[e].tokenId;
                        let o;
                        for (const e of t) 0 === e.tokenId.compare(n) && (o = e);
                        const r = null != o ? o.tokenId : null;
                        if (null != o && null != r && 0 === r.compare(n)) {
                            o.transfers.push(this._tokenTransfers[e++]);
                            continue
                        }
                        t.push({
                            tokenId: n,
                            expectedDecimals: this._tokenTransfers[e].expectedDecimals,
                            transfers: [this._tokenTransfers[e++]],
                            nftTransfers: []
                        })
                    } else if (n < this._nftTransfers.length) {
                        const e = this._nftTransfers[n].tokenId;
                        let o;
                        for (const n of t) 0 === n.tokenId.compare(e) && (o = n);
                        const r = null != o ? o.tokenId : null;
                        if (null != o && null != r && 0 === r.compare(e)) {
                            o.nftTransfers.push(this._nftTransfers[n++]);
                            continue
                        }
                        t.push({
                            tokenId: e,
                            expectedDecimals: null,
                            transfers: [],
                            nftTransfers: [this._nftTransfers[n++]]
                        })
                    }
                    return this._hbarTransfers.sort((t, e) => t.accountId.compare(e.accountId)), {
                        transfers: {
                            accountAmounts: this._hbarTransfers.map(t => ({
                                accountID: t.accountId._toProtobuf(),
                                amount: t.amount.toTinybars(),
                                isApproval: t.isApproved
                            }))
                        },
                        tokenTransfers: t.map(t => ({
                            token: t.tokenId._toProtobuf(),
                            expectedDecimals: null != t.expectedDecimals ? {
                                value: t.expectedDecimals
                            } : null,
                            transfers: t.transfers.map(t => t._toProtobuf()),
                            nftTransfers: t.nftTransfers.map(t => t._toProtobuf())
                        }))
                    }
                }
                _getLogId() {
                    return "TransferTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            a.e.set("cryptoTransfer", TransferTransaction_TransferTransaction._fromProtobuf)
        },
        276: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountInfoQuery
            }));
            var o = n(33),
                r = n(5),
                s = n(702),
                a = n(17);
            class AccountInfoQuery extends o.d {
                constructor(t = {}) {
                    super(), this._accountId = null, null != t.accountId && this.setAccountId(t.accountId)
                }
                static _fromProtobuf(t) {
                    const e = t.cryptoGetInfo;
                    return new AccountInfoQuery({
                        accountId: null != e.accountID ? r.a._fromProtobuf(e.accountID) : void 0
                    })
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._accountId && this._accountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.crypto.getAccountInfo(e)
                }
                async getCost(t) {
                    let e = await super.getCost(t);
                    return e.toTinybars().greaterThan(25) ? e : a.a.fromTinybars(25)
                }
                _mapResponseHeader(t) {
                    return t.cryptoGetInfo.header
                }
                _mapResponse(t, e, n) {
                    const o = t.cryptoGetInfo;
                    return Promise.resolve(s.a._fromProtobuf(o.accountInfo))
                }
                _onMakeRequest(t) {
                    return {
                        cryptoGetInfo: {
                            header: t,
                            accountID: null != this._accountId ? this._accountId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "AccountInfoQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            o.b.set("cryptoGetInfo", AccountInfoQuery._fromProtobuf)
        },
        312: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return HbarAllowance
            }));
            var o = n(5),
                r = n(17);
            class HbarAllowance {
                constructor(t) {
                    this.spenderAccountId = t.spenderAccountId, this.ownerAccountId = t.ownerAccountId, this.amount = t.amount, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    return new HbarAllowance({
                        spenderAccountId: o.a._fromProtobuf(t.spender),
                        ownerAccountId: null != t.owner ? o.a._fromProtobuf(t.owner) : null,
                        amount: r.a.fromTinybars(null != t.amount ? t.amount : 0)
                    })
                }
                static _fromGrantedProtobuf(t, e) {
                    return new HbarAllowance({
                        spenderAccountId: o.a._fromProtobuf(t.spender),
                        ownerAccountId: e,
                        amount: r.a.fromTinybars(null != t.amount ? t.amount : 0)
                    })
                }
                _toProtobuf() {
                    return {
                        owner: null != this.ownerAccountId ? this.ownerAccountId._toProtobuf() : null,
                        spender: null != this.spenderAccountId ? this.spenderAccountId._toProtobuf() : null,
                        amount: null != this.amount ? this.amount.toTinybars() : null
                    }
                }
                _validateChecksums(t) {
                    null != this.spenderAccountId && this.spenderAccountId.validateChecksum(t), null != this.spenderAccountId && this.spenderAccountId.validateChecksum(t)
                }
                toJSON() {
                    return {
                        ownerAccountId: null != this.ownerAccountId ? this.ownerAccountId.toString() : null,
                        spenderAccountId: null != this.spenderAccountId ? this.spenderAccountId.toString() : null,
                        amount: null != this.amount ? this.amount.toString() : null
                    }
                }
            }
        },
        313: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenAllowance
            }));
            var o = n(16),
                r = n(5),
                s = n(1),
                a = n.n(s);
            class TokenAllowance {
                constructor(t) {
                    this.tokenId = t.tokenId, this.spenderAccountId = t.spenderAccountId, this.ownerAccountId = t.ownerAccountId, this.amount = t.amount, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    return new TokenAllowance({
                        tokenId: o.a._fromProtobuf(t.tokenId),
                        spenderAccountId: r.a._fromProtobuf(t.spender),
                        ownerAccountId: null != t.owner ? r.a._fromProtobuf(t.owner) : null,
                        amount: null != t.amount ? a.a.fromValue(t.amount) : null
                    })
                }
                static _fromGrantedProtobuf(t, e) {
                    return new TokenAllowance({
                        tokenId: o.a._fromProtobuf(t.tokenId),
                        spenderAccountId: r.a._fromProtobuf(t.spender),
                        ownerAccountId: e,
                        amount: null != t.amount ? a.a.fromValue(t.amount) : null
                    })
                }
                _toProtobuf() {
                    return {
                        tokenId: this.tokenId._toProtobuf(),
                        spender: null != this.spenderAccountId ? this.spenderAccountId._toProtobuf() : null,
                        owner: null != this.ownerAccountId ? this.ownerAccountId._toProtobuf() : null,
                        amount: this.amount
                    }
                }
                _validateChecksums(t) {
                    this.tokenId.validateChecksum(t), null != this.ownerAccountId && this.ownerAccountId.validateChecksum(t), null != this.spenderAccountId && this.spenderAccountId.validateChecksum(t)
                }
            }
        },
        440: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountBalanceQuery
            }));
            var o = n(33),
                r = n(5),
                s = n(40),
                a = n(916);
            class AccountBalanceQuery extends o.d {
                constructor(t = {}) {
                    super(), this._accountId = null, this._contractId = null, null != t.accountId && this.setAccountId(t.accountId), null != t.contractId && this.setContractId(t.contractId)
                }
                static _fromProtobuf(t) {
                    const e = t.cryptogetAccountBalance;
                    return new AccountBalanceQuery({
                        accountId: null != e.accountID ? r.a._fromProtobuf(e.accountID) : void 0,
                        contractId: null != e.contractID ? s.a._fromProtobuf(e.contractID) : void 0
                    })
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                get contractId() {
                    return this._contractId
                }
                setContractId(t) {
                    return this._contractId = "string" == typeof t ? s.a.fromString(t) : t.clone(), this
                }
                _isPaymentRequired() {
                    return !1
                }
                _validateChecksums(t) {
                    null != this._accountId && this._accountId.validateChecksum(t), null != this._contractId && this._contractId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.crypto.cryptoGetBalance(e)
                }
                _mapResponseHeader(t) {
                    return t.cryptogetAccountBalance.header
                }
                _mapResponse(t, e, n) {
                    const o = t.cryptogetAccountBalance;
                    return Promise.resolve(a.a._fromProtobuf(o))
                }
                _onMakeRequest(t) {
                    return {
                        cryptogetAccountBalance: {
                            header: t,
                            accountID: null != this._accountId ? this._accountId._toProtobuf() : null,
                            contractID: null != this._contractId ? this._contractId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "AccountBalanceQuery:" + this._timestamp.toString()
                }
            }
            o.b.set("cryptogetAccountBalance", AccountBalanceQuery._fromProtobuf)
        },
        441: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return LiveHash
            }));
            var o = n(5),
                r = n(46),
                s = n(93);
            class LiveHash {
                constructor(t) {
                    this.accountId = t.accountId, this.hash = t.hash, this.keys = t.keys, this.duration = t.duration, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    const e = t;
                    return new LiveHash({
                        accountId: o.a._fromProtobuf(e.accountId),
                        hash: null != e.hash ? e.hash : new Uint8Array,
                        keys: null != e.keys ? s.a.__fromProtobufKeyList(e.keys) : new s.a,
                        duration: r.a._fromProtobuf(e.duration)
                    })
                }
                _toProtobuf() {
                    return {
                        accountId: this.accountId._toProtobuf(),
                        hash: this.hash,
                        keys: this.keys._toProtobufKey().keyList,
                        duration: this.duration._toProtobuf()
                    }
                }
            }
        },
        5: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountId
            }));
            var o = n(1),
                r = n.n(o),
                s = n(42),
                a = n(11),
                c = n(25),
                i = n(100),
                u = n(44),
                l = n(318);
            class AccountId {
                constructor(t, e, n, o, r) {
                    const a = s.b(t, e, n);
                    this.shard = a.shard, this.realm = a.realm, this.num = a.num, this.aliasKey = null != o ? o : null, this.aliasEvmAddress = null != r ? r : null, this._checksum = null
                }
                static fromString(t) {
                    const e = s.e(t);
                    if (Number.isNaN(e.shard) || Number.isNaN(e.realm)) throw new Error("invalid format for entity ID");
                    const n = null != e.shard ? r.a.fromString(e.shard) : r.a.ZERO,
                        o = null != e.realm ? r.a.fromString(e.realm) : r.a.ZERO;
                    let a = r.a.ZERO,
                        c = void 0,
                        u = void 0;
                    return e.numOrHex.length < 20 ? a = r.a.fromString(e.numOrHex) : 40 == e.numOrHex.length ? u = l.a.fromString(e.numOrHex) : c = i.a.fromString(e.numOrHex), new AccountId(n, o, a, c, u)
                }
                static fromEvmAddress(t, e, n) {
                    return new AccountId(t, e, 0, void 0, "string" == typeof n ? l.a.fromString(n) : n)
                }
                static _fromProtobuf(t) {
                    let e = void 0,
                        n = void 0;
                    return null != t.alias && (20 === t.alias.length ? n = l.a.fromBytes(t.alias) : e = c.a._fromProtobufKey(a.proto.Key.decode(t.alias))), e instanceof i.a || (e = void 0), new AccountId(null != t.shardNum ? t.shardNum : 0, null != t.realmNum ? t.realmNum : 0, null != t.accountNum ? t.accountNum : 0, e, n)
                }
                get checksum() {
                    return this._checksum
                }
                validate(t) {
                    console.warn("Deprecated: Use `validateChecksum` instead"), this.validateChecksum(t)
                }
                validateChecksum(t) {
                    if (null != this.aliasKey) throw new Error("cannot calculate checksum with an account ID that has a aliasKey");
                    s.h(this.shard, this.realm, this.num, this._checksum, t)
                }
                static fromBytes(t) {
                    return AccountId._fromProtobuf(a.proto.AccountID.decode(t))
                }
                static fromSolidityAddress(t) {
                    return new AccountId(...s.c(t))
                }
                toSolidityAddress() {
                    return s.f([this.shard, this.realm, this.num])
                }
                _toProtobuf() {
                    let t = null;
                    return null != this.aliasKey ? t = a.proto.Key.encode(this.aliasKey._toProtobufKey()).finish() : null != this.aliasEvmAddress && (t = this.aliasEvmAddress._bytes), {
                        alias: t,
                        accountNum: null != this.aliasKey || null != this.aliasEvmAddress ? null : this.num,
                        shardNum: this.shard,
                        realmNum: this.realm
                    }
                }
                toBytes() {
                    return a.proto.AccountID.encode(this._toProtobuf()).finish()
                }
                toString() {
                    let t = this.num.toString();
                    return null != this.aliasKey ? t = this.aliasKey.toString() : null != this.aliasEvmAddress && (t = this.aliasEvmAddress.toString()), `${this.shard.toString()}.${this.realm.toString()}.${t}`
                }
                toStringWithChecksum(t) {
                    if (null != this.aliasKey) throw new Error("cannot calculate checksum with an account ID that has a aliasKey");
                    return s.g(this.toString(), t)
                }
                equals(t) {
                    let e = !1;
                    return null != this.aliasKey && null != t.aliasKey ? e = this.aliasKey.equals(t.aliasKey) : null == this.aliasKey && null == t.aliasKey && (e = this.num.eq(t.num)), this.shard.eq(t.shard) && this.realm.eq(t.realm) && e
                }
                clone() {
                    const t = new AccountId(this);
                    return t._checksum = this._checksum, t.aliasKey = this.aliasKey, t.aliasEvmAddress = this.aliasEvmAddress, t
                }
                compare(t) {
                    let e = this.shard.compare(t.shard);
                    if (0 != e) return e;
                    if (e = this.realm.compare(t.realm), 0 != e) return e;
                    if (null != this.aliasKey && null != t.aliasKey) {
                        const e = this.aliasKey.toString(),
                            n = t.aliasKey.toString();
                        return e > n ? 1 : e < n ? -1 : 0
                    }
                    return null == this.aliasKey && null == t.aliasKey ? this.num.compare(t.num) : 1
                }
            }
            u.a.setAccountIdConstructor((t, e, n) => new AccountId(t, e, r.a.ZERO, n))
        },
        702: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountInfo
            }));
            var o = n(5),
                r = n(920),
                s = n(441),
                a = n(17),
                c = n(23),
                i = n(1),
                u = n.n(i),
                l = n(925),
                d = n(11),
                h = n(46),
                f = n(25),
                m = n(100),
                _ = n(99);
            class AccountInfo {
                constructor(t) {
                    this.accountId = t.accountId, this.contractAccountId = t.contractAccountId, this.isDeleted = t.isDeleted, this.proxyAccountId = t.proxyAccountId, this.proxyReceived = t.proxyReceived, this.key = t.key, this.balance = t.balance, this.sendRecordThreshold = t.sendRecordThreshold, this.receiveRecordThreshold = t.receiveRecordThreshold, this.isReceiverSignatureRequired = t.isReceiverSignatureRequired, this.expirationTime = t.expirationTime, this.autoRenewPeriod = t.autoRenewPeriod, this.liveHashes = t.liveHashes, this.tokenRelationships = t.tokenRelationships, this.accountMemo = t.accountMemo, this.ownedNfts = t.ownedNfts, this.maxAutomaticTokenAssociations = t.maxAutomaticTokenAssociations, this.aliasKey = t.aliasKey, this.ledgerId = t.ledgerId, this.hbarAllowances = t.hbarAllowances, this.tokenAllowances = t.tokenAllowances, this.nftAllowances = t.nftAllowances, this.ethereumNonce = t.ethereumNonce, this.stakingInfo = t.stakingInfo, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    let e = null != t.alias && t.alias.length > 0 ? f.a._fromProtobufKey(d.proto.Key.decode(t.alias)) : null;
                    e instanceof m.a || (e = null);
                    const n = o.a._fromProtobuf(t.accountID);
                    return new AccountInfo({
                        accountId: n,
                        contractAccountId: null != t.contractAccountID ? t.contractAccountID : null,
                        isDeleted: null != t.deleted && t.deleted,
                        key: f.a._fromProtobufKey(t.key),
                        balance: a.a.fromTinybars(null != t.balance ? t.balance : 0),
                        sendRecordThreshold: a.a.fromTinybars(null != t.generateSendRecordThreshold ? t.generateSendRecordThreshold : 0),
                        receiveRecordThreshold: a.a.fromTinybars(null != t.generateReceiveRecordThreshold ? t.generateReceiveRecordThreshold : 0),
                        isReceiverSignatureRequired: null != t.receiverSigRequired && t.receiverSigRequired,
                        expirationTime: c.a._fromProtobuf(t.expirationTime),
                        autoRenewPeriod: null != t.autoRenewPeriod ? new h.a(t.autoRenewPeriod.seconds) : new h.a(0),
                        proxyAccountId: null != t.proxyAccountID && 0 !== u.a.fromValue(t.proxyAccountID.shardNum).toInt() && 0 !== u.a.fromValue(t.proxyAccountID.realmNum).toInt() && 0 !== u.a.fromValue(t.proxyAccountID.accountNum).toInt() ? o.a._fromProtobuf(t.proxyAccountID) : null,
                        proxyReceived: a.a.fromTinybars(null != t.proxyReceived ? t.proxyReceived : 0),
                        liveHashes: (null != t.liveHashes ? t.liveHashes : []).map(t => s.a._fromProtobuf(t)),
                        tokenRelationships: l.a._fromProtobuf(null != t.tokenRelationships ? t.tokenRelationships : []),
                        accountMemo: null != t.memo ? t.memo : "",
                        ownedNfts: t.ownedNfts ? t.ownedNfts : u.a.ZERO,
                        maxAutomaticTokenAssociations: t.maxAutomaticTokenAssociations ? u.a.fromNumber(t.maxAutomaticTokenAssociations) : u.a.ZERO,
                        aliasKey: e,
                        ledgerId: null != t.ledgerId ? _.a.fromBytes(t.ledgerId) : null,
                        hbarAllowances: [],
                        tokenAllowances: [],
                        nftAllowances: [],
                        ethereumNonce: null != t.ethereumNonce ? t.ethereumNonce : null,
                        stakingInfo: null != t.stakingInfo ? r.a._fromProtobuf(t.stakingInfo) : null
                    })
                }
                _toProtobuf() {
                    return {
                        accountID: this.accountId._toProtobuf(),
                        contractAccountID: this.contractAccountId,
                        deleted: this.isDeleted,
                        proxyAccountID: null != this.proxyAccountId ? this.proxyAccountId._toProtobuf() : null,
                        proxyReceived: this.proxyReceived.toTinybars(),
                        key: this.key._toProtobufKey(),
                        balance: this.balance.toTinybars(),
                        generateSendRecordThreshold: this.sendRecordThreshold.toTinybars(),
                        generateReceiveRecordThreshold: this.receiveRecordThreshold.toTinybars(),
                        receiverSigRequired: this.isReceiverSignatureRequired,
                        expirationTime: this.expirationTime._toProtobuf(),
                        autoRenewPeriod: this.autoRenewPeriod._toProtobuf(),
                        liveHashes: this.liveHashes.map(t => t._toProtobuf()),
                        tokenRelationships: null != this.tokenRelationships ? this.tokenRelationships._toProtobuf() : null,
                        memo: this.accountMemo,
                        ownedNfts: this.ownedNfts,
                        maxAutomaticTokenAssociations: this.maxAutomaticTokenAssociations.toInt(),
                        alias: null != this.aliasKey ? d.proto.Key.encode(this.aliasKey._toProtobufKey()).finish() : null,
                        ledgerId: null != this.ledgerId ? this.ledgerId.toBytes() : null,
                        ethereumNonce: this.ethereumNonce,
                        stakingInfo: null != this.stakingInfo ? this.stakingInfo._toProtobuf() : null
                    }
                }
                static fromBytes(t) {
                    return AccountInfo._fromProtobuf(d.proto.CryptoGetInfoResponse.AccountInfo.decode(t))
                }
                toBytes() {
                    return d.proto.CryptoGetInfoResponse.AccountInfo.encode(this._toProtobuf()).finish()
                }
                toString() {
                    return JSON.stringify(this.toJSON())
                }
                toJSON() {
                    return {
                        balance: this.balance.toString(),
                        accountId: this.accountId.toString(),
                        contractAccountId: this.contractAccountId,
                        isDeleted: this.isDeleted,
                        proxyAccountId: null != this.proxyAccountId ? this.proxyAccountId.toString() : null,
                        proxyReceived: this.proxyReceived.toString(),
                        key: this.key.toString(),
                        sendRecordThreshold: this.sendRecordThreshold.toString(),
                        receiveRecordThreshold: this.receiveRecordThreshold.toString(),
                        isReceiverSignatureRequired: this.isReceiverSignatureRequired,
                        expirationTime: this.expirationTime.toString(),
                        autoRenewPeriod: this.autoRenewPeriod.toString(),
                        accountMemo: this.accountMemo,
                        ownedNfts: this.ownedNfts.toString(),
                        maxAutomaticTokenAssociations: this.maxAutomaticTokenAssociations.toString(),
                        aliasKey: null != this.aliasKey ? this.aliasKey.toString() : null,
                        ledgerId: null != this.ledgerId ? this.ledgerId.toString() : null,
                        ethereumNonce: null != this.ethereumNonce ? this.ethereumNonce.toString() : null,
                        stakingInfo: null != this.stakingInfo ? this.stakingInfo.toJSON() : null
                    }
                }
            }
        },
        703: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountRecordsQuery
            }));
            var o = n(33),
                r = n(5),
                s = n(439);
            class AccountRecordsQuery extends o.d {
                constructor(t = {}) {
                    super(), this._accountId = null, null != t.accountId && this.setAccountId(t.accountId)
                }
                static _fromProtobuf(t) {
                    const e = t.cryptoGetAccountRecords;
                    return new AccountRecordsQuery({
                        accountId: null != e.accountID ? r.a._fromProtobuf(e.accountID) : void 0
                    })
                }
                get accountId() {
                    return this._accountId
                }
                setAccountId(t) {
                    return this._accountId = "string" == typeof t ? r.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._accountId && this._accountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.crypto.getAccountRecords(e)
                }
                _mapResponseHeader(t) {
                    return t.cryptoGetAccountRecords.header
                }
                _mapResponse(t, e, n) {
                    const o = t.cryptoGetAccountRecords.records;
                    return Promise.resolve(o.map(t => s.a._fromProtobuf({
                        transactionRecord: t
                    })))
                }
                _onMakeRequest(t) {
                    return {
                        cryptoGetAccountRecords: {
                            header: t,
                            accountID: null != this._accountId ? this._accountId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "AccountRecordsQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            o.b.set("cryptoGetAccountRecords", AccountRecordsQuery._fromProtobuf)
        },
        704: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return ProxyStaker
            }));
            var o = n(5),
                r = n(17);
            class ProxyStaker {
                constructor(t) {
                    this.accountId = t.accountId, this.amount = t.amount instanceof r.a ? t.amount : new r.a(t.amount), Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    return new ProxyStaker({
                        accountId: o.a._fromProtobuf(t.accountID),
                        amount: r.a.fromTinybars(null != t.amount ? t.amount : 0)
                    })
                }
                _toProtobuf() {
                    return {
                        accountID: this.accountId._toProtobuf(),
                        amount: this.amount.toTinybars()
                    }
                }
            }
        },
        916: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return AccountBalance_AccountBalance
            }));
            var o = n(1),
                r = n.n(o),
                s = n(17),
                a = n(16),
                c = n(98);
            class TokenBalanceMap_TokenBalanceMap extends c.a {
                constructor() {
                    super(t => a.a.fromString(t))
                }
            }
            class TokenDecimalMap_TokenDecimalMap extends c.a {
                constructor() {
                    super(t => a.a.fromString(t))
                }
            }
            var i = n(11);
            class AccountBalance_AccountBalance {
                constructor(t) {
                    this.hbars = t.hbars, this.tokens = t.tokens, this.tokenDecimals = t.tokenDecimals, Object.freeze(this)
                }
                static fromBytes(t) {
                    return AccountBalance_AccountBalance._fromProtobuf(i.proto.CryptoGetAccountBalanceResponse.decode(t))
                }
                static _fromProtobuf(t) {
                    const e = new TokenBalanceMap_TokenBalanceMap,
                        n = new TokenDecimalMap_TokenDecimalMap;
                    if (null != t.tokenBalances)
                        for (const o of t.tokenBalances) {
                            const t = a.a._fromProtobuf(o.tokenId);
                            n._set(t, null != o.decimals ? o.decimals : 0), e._set(t, r.a.fromValue(o.balance))
                        }
                    return new AccountBalance_AccountBalance({
                        hbars: s.a.fromTinybars(t.balance),
                        tokens: e,
                        tokenDecimals: n
                    })
                }
                _toProtobuf() {
                    const t = [];
                    for (const [e, n] of null != this.tokens ? this.tokens : []) t.push({
                        tokenId: e._toProtobuf(),
                        balance: n,
                        decimals: null != this.tokenDecimals ? this.tokenDecimals.get(e) : null
                    });
                    return {
                        balance: this.hbars.toTinybars(),
                        tokenBalances: t
                    }
                }
                toBytes() {
                    return i.proto.CryptoGetAccountBalanceResponse.encode(this._toProtobuf()).finish()
                }
                toString() {
                    return JSON.stringify(this.toJSON())
                }
                toJSON() {
                    const t = [];
                    for (const [e, n] of null != this.tokens ? this.tokens : []) {
                        const o = null != this.tokenDecimals ? this.tokenDecimals.get(e) : null;
                        t.push({
                            tokenId: e.toString(),
                            balance: n.toString(),
                            decimals: null != o ? o : 0
                        })
                    }
                    return {
                        hbars: this.hbars.toString(),
                        tokens: t
                    }
                }
            }
        },
        917: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenTransferMap
            }));
            var o = n(16),
                r = n(5),
                s = n(918),
                a = n(98);
            class TokenTransferMap extends a.a {
                constructor() {
                    super(t => o.a.fromString(t))
                }
                __set(t, e, n) {
                    const o = t.toString();
                    let r = this._map.get(o);
                    null == r && (r = new s.a, this._map.set(o, r), this.__map.set(t, r)), r._set(e, n)
                }
                static _fromProtobuf(t) {
                    const e = new TokenTransferMap;
                    for (const n of t) {
                        const t = o.a._fromProtobuf(n.token);
                        for (const o of null != n.transfers ? n.transfers : []) {
                            const n = r.a._fromProtobuf(o.accountID);
                            e.__set(t, n, o.amount)
                        }
                    }
                    return e
                }
                _toProtobuf() {
                    const t = [];
                    for (const [e, n] of this) {
                        const o = [];
                        for (const [t, e] of n) o.push({
                            accountID: t._toProtobuf(),
                            amount: e
                        });
                        t.push({
                            token: e._toProtobuf(),
                            transfers: o
                        })
                    }
                    return t
                }
            }
        },
        918: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenTransferAccountMap
            }));
            var o = n(5),
                r = n(98);
            class TokenTransferAccountMap extends r.a {
                constructor() {
                    super(t => o.a.fromString(t))
                }
            }
        },
        919: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenNftTransferMap
            }));
            var o = n(1),
                r = n.n(o),
                s = n(16),
                a = n(5),
                c = n(98);
            class TokenNftTransferMap extends c.a {
                constructor() {
                    super(t => s.a.fromString(t))
                }
                __set(t, e) {
                    const n = t.toString();
                    let o = this._map.get(n);
                    null == o && (o = [], this._map.set(n, o), this.__map.set(t, o)), o.push(e)
                }
                static _fromProtobuf(t) {
                    const e = new TokenNftTransferMap;
                    for (const n of t) {
                        const t = s.a._fromProtobuf(n.token);
                        for (const o of null != n.nftTransfers ? n.nftTransfers : []) {
                            const n = a.a._fromProtobuf(o.senderAccountID),
                                s = a.a._fromProtobuf(o.receiverAccountID);
                            e.__set(t, {
                                sender: n,
                                recipient: s,
                                serial: r.a.fromValue(o.serialNumber),
                                isApproved: !1
                            })
                        }
                    }
                    return e
                }
                _toProtobuf() {
                    const t = [];
                    for (const [e, n] of this) {
                        const o = [];
                        for (const t of n) o.push({
                            senderAccountID: t.sender._toProtobuf(),
                            receiverAccountID: t.recipient._toProtobuf(),
                            serialNumber: t.serial
                        });
                        t.push({
                            token: e._toProtobuf(),
                            nftTransfers: o
                        })
                    }
                    return t
                }
            }
        },
        925: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return TokenRelationshipMap_TokenRelationshipMap
            }));
            var o = n(16),
                r = n(1),
                s = n.n(r);
            class TokenRelationship_TokenRelationship {
                constructor(t) {
                    this.tokenId = t.tokenId, this.symbol = t.symbol, this.balance = t.balance, this.isKycGranted = t.isKycGranted, this.isFrozen = t.isFrozen, this.automaticAssociation = t.automaticAssociation, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    const e = o.a._fromProtobuf(t.tokenId),
                        n = null == t.kycStatus || 0 === t.kycStatus ? null : 1 === t.kycStatus,
                        r = null == t.freezeStatus || 0 === t.freezeStatus ? null : 1 === t.freezeStatus;
                    return new TokenRelationship_TokenRelationship({
                        tokenId: e,
                        symbol: t.symbol,
                        balance: null != t.balance ? t.balance instanceof s.a ? t.balance : s.a.fromValue(t.balance) : s.a.ZERO,
                        isKycGranted: n,
                        isFrozen: r,
                        automaticAssociation: null != t.automaticAssociation ? t.automaticAssociation : null
                    })
                }
                _toProtobuf() {
                    return {
                        tokenId: this.tokenId._toProtobuf(),
                        symbol: this.symbol,
                        balance: this.balance,
                        kycStatus: null == this.isKycGranted ? 0 : this.isKycGranted ? 1 : 2,
                        freezeStatus: null == this.isFrozen ? 0 : this.isFrozen ? 1 : 2,
                        automaticAssociation: this.automaticAssociation
                    }
                }
            }
            var a = n(98);
            class TokenRelationshipMap_TokenRelationshipMap extends a.a {
                constructor() {
                    super(t => o.a.fromString(t))
                }
                static _fromProtobuf(t) {
                    const e = new TokenRelationshipMap_TokenRelationshipMap;
                    for (const n of t) {
                        const t = o.a._fromProtobuf(n.tokenId);
                        e._set(t, TokenRelationship_TokenRelationship._fromProtobuf(n))
                    }
                    return e
                }
                _toProtobuf() {
                    const t = [];
                    for (const [e, n] of this) t.push(n._toProtobuf());
                    return t
                }
            }
        }
    }
]);