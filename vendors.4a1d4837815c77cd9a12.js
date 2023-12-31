(window.webpackJsonp = window.webpackJsonp || []).push([
    [127], {
        1491: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractByteCodeQuery
            }));
            var n = r(33),
                a = r(40);
            class ContractByteCodeQuery extends n.d {
                constructor(t = {}) {
                    super(), this._contractId = null, null != t.contractId && this.setContractId(t.contractId)
                }
                static _fromProtobuf(t) {
                    const e = t.contractGetBytecode;
                    return new ContractByteCodeQuery({
                        contractId: null != e.contractID ? a.a._fromProtobuf(e.contractID) : void 0
                    })
                }
                get contractId() {
                    return this._contractId
                }
                setContractId(t) {
                    return this._contractId = "string" == typeof t ? a.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._contractId && this._contractId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.smartContract.contractGetBytecode(e)
                }
                _mapResponseHeader(t) {
                    return t.contractGetBytecodeResponse.header
                }
                _mapResponse(t) {
                    const e = t.contractGetBytecodeResponse;
                    return Promise.resolve(null != e.bytecode ? e.bytecode : new Uint8Array)
                }
                _onMakeRequest(t) {
                    return {
                        contractGetBytecode: {
                            header: t,
                            contractID: null != this._contractId ? this._contractId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "ContractByteCodeQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            n.b.set("contractGetBytecode", ContractByteCodeQuery._fromProtobuf)
        },
        1492: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractCallQuery
            }));
            var n = r(33),
                a = r(40),
                i = r(5),
                s = r(302),
                o = r(311),
                d = r(1),
                c = r.n(d),
                u = r(11),
                h = r(188),
                l = r(34);
            class ContractCallQuery extends n.d {
                constructor(t = {}) {
                    super(), this._contractId = null, null != t.contractId && this.setContractId(t.contractId), this._gas = null, null != t.gas && this.setGas(t.gas), this._functionParameters = null, null != t.functionParameters && (t.functionParameters instanceof Uint8Array ? this.setFunctionParameters(t.functionParameters) : this.setFunction(t.functionParameters.name, t.functionParameters.parameters)), this._maxResultSize = null, null != t.maxResultSize && this.setMaxResultSize(t.maxResultSize), this._senderAccountId = null, null != t.senderAccountId && this.setSenderAccountId(t.senderAccountId)
                }
                static _fromProtobuf(t) {
                    const e = t.contractCallLocal;
                    return new ContractCallQuery({
                        contractId: null != e.contractID ? a.a._fromProtobuf(e.contractID) : void 0,
                        gas: null != e.gas ? e.gas : void 0,
                        functionParameters: null != e.functionParameters ? e.functionParameters : void 0,
                        maxResultSize: null != e.maxResultSize ? e.maxResultSize : void 0
                    })
                }
                get contractId() {
                    return this._contractId
                }
                setContractId(t) {
                    return this._contractId = "string" == typeof t ? a.a.fromString(t) : t.clone(), this
                }
                get gas() {
                    return this._gas
                }
                setGas(t) {
                    return this._gas = t instanceof c.a ? t : c.a.fromValue(t), this
                }
                get senderAccountId() {
                    return this._senderAccountId
                }
                setSenderAccountId(t) {
                    return this._senderAccountId = "string" == typeof t ? i.a.fromString(t) : t, this
                }
                get functionParameters() {
                    return this._functionParameters
                }
                setFunctionParameters(t) {
                    return this._functionParameters = t, this
                }
                setFunction(t, e) {
                    return this._functionParameters = (null != e ? e : new s.a)._build(t), this
                }
                setMaxResultSize(t) {
                    return this._maxResultSize = t instanceof c.a ? t : c.a.fromValue(t), this
                }
                _validateChecksums(t) {
                    null != this._contractId && this._contractId.validateChecksum(t)
                }
                _mapStatusError(t, e) {
                    const {
                        nodeTransactionPrecheckCode: r
                    } = this._mapResponseHeader(e), n = l.a._fromCode(null != r ? r : u.proto.ResponseCodeEnum.OK);
                    if (!e.contractCallLocal.functionResult) return new h.a({
                        status: n,
                        transactionId: this._getTransactionId(),
                        contractFunctionResult: null
                    });
                    const a = this._mapResponseSync(e);
                    return new h.a({
                        status: n,
                        transactionId: this._getTransactionId(),
                        contractFunctionResult: a
                    })
                }
                _execute(t, e) {
                    return t.smartContract.contractCallLocalMethod(e)
                }
                _mapResponseHeader(t) {
                    return t.contractCallLocal.header
                }
                _mapResponse(t) {
                    const e = t.contractCallLocal;
                    return Promise.resolve(o.a._fromProtobuf(e.functionResult, !1))
                }
                _mapResponseSync(t) {
                    const e = t.contractCallLocal;
                    return o.a._fromProtobuf(e.functionResult, !1)
                }
                _onMakeRequest(t) {
                    return {
                        contractCallLocal: {
                            header: t,
                            contractID: null != this._contractId ? this._contractId._toProtobuf() : null,
                            gas: this._gas,
                            maxResultSize: this._maxResultSize,
                            functionParameters: this._functionParameters,
                            senderId: null != this._senderAccountId ? this._senderAccountId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "ContractCallQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            n.b.set("contractCallLocal", ContractCallQuery._fromProtobuf)
        },
        1493: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractCreateFlow
            }));
            var n = r(365),
                a = r(366),
                i = r(534),
                s = r(705),
                o = r(107),
                d = r(10);
            class ContractCreateFlow {
                constructor() {
                    this._bytecode = null, this._contractCreate = new s.a, this._signerPublicKeys = new Set, this._publicKeys = [], this._transactionSigners = [], this._maxChunks = null
                }
                get maxChunks() {
                    return this._maxChunks
                }
                setMaxChunks(t) {
                    return this._maxChunks = t, this
                }
                get bytecode() {
                    return this._bytecode
                }
                setBytecode(t) {
                    return this._bytecode = t instanceof Uint8Array ? t : o.b(t), this
                }
                get adminKey() {
                    return this._contractCreate.adminKey
                }
                setAdminKey(t) {
                    return this._contractCreate.setAdminKey(t), this
                }
                get gas() {
                    return this._contractCreate.gas
                }
                setGas(t) {
                    return this._contractCreate.setGas(t), this
                }
                get initialBalance() {
                    return this._contractCreate.initialBalance
                }
                setInitialBalance(t) {
                    return this._contractCreate.setInitialBalance(t), this
                }
                get proxyAccountId() {
                    return this._contractCreate.proxyAccountId
                }
                setProxyAccountId(t) {
                    return this._contractCreate.setProxyAccountId(t), this
                }
                get autoRenewPeriod() {
                    return this._contractCreate.autoRenewPeriod
                }
                setAutoRenewPeriod(t) {
                    return this._contractCreate.setAutoRenewPeriod(t), this
                }
                get constructorParameters() {
                    return this._contractCreate.constructorParameters
                }
                setConstructorParameters(t) {
                    return this._contractCreate.setConstructorParameters(t), this
                }
                get contractMemo() {
                    return this._contractCreate.contractMemo
                }
                setContractMemo(t) {
                    return this._contractCreate.setContractMemo(t), this
                }
                get maxAutomaticTokenAssociation() {
                    return this._contractCreate.maxAutomaticTokenAssociations
                }
                setMaxAutomaticTokenAssociations(t) {
                    return this._contractCreate.setMaxAutomaticTokenAssociations(t), this
                }
                get stakedAccountId() {
                    return this._contractCreate.stakedAccountId
                }
                setStakedAccountId(t) {
                    return this._contractCreate.setStakedAccountId(t), this
                }
                get stakedNodeId() {
                    return this._contractCreate.stakedNodeId
                }
                setStakedNodeId(t) {
                    return this._contractCreate.setStakedNodeId(t), this
                }
                get declineStakingRewards() {
                    return this._contractCreate.declineStakingRewards
                }
                setDeclineStakingReward(t) {
                    return this._contractCreate.setDeclineStakingReward(t), this
                }
                get autoRenewAccountId() {
                    return this._contractCreate.autoRenewAccountId
                }
                setAutoRenewAccountId(t) {
                    return this._contractCreate.setAutoRenewAccountId(t), this
                }
                sign(t) {
                    return this.signWith(t.publicKey, e => Promise.resolve(t.sign(e)))
                }
                signWith(t, e) {
                    const r = t.toBytesRaw(),
                        n = d.b(r);
                    return this._signerPublicKeys.has(n) || (this._publicKeys.push(t), this._transactionSigners.push(e)), this
                }
                async execute(t, e) {
                    if (null == this._bytecode) throw new Error("cannot create contract with no bytecode");
                    const r = t.operatorPublicKey,
                        s = (new n.a).setKeys(null != r ? [r] : []).setContents(this._bytecode.subarray(0, Math.min(this._bytecode.length, 2048))).freezeWith(t);
                    await c(s, this._publicKeys, this._transactionSigners);
                    let o = await s.execute(t, e);
                    const d = (await o.getReceipt(t)).fileId;
                    if (this._bytecode.length > 2048) {
                        const r = (new a.a).setFileId(d).setContents(this._bytecode.subarray(2048)).freezeWith(t);
                        await c(r, this._publicKeys, this._transactionSigners), await r.execute(t, e)
                    }
                    if (this._contractCreate.setBytecodeFileId(d).freezeWith(t), await c(this._contractCreate, this._publicKeys, this._transactionSigners), o = await this._contractCreate.execute(t, e), await o.getReceipt(t), null != r) {
                        const r = (new i.a).setFileId(d).freezeWith(t);
                        await c(r, this._publicKeys, this._transactionSigners), await (await r.execute(t, e)).getReceipt(t)
                    }
                    return o
                }
                async executeWithSigner(t) {
                    if (null == this._bytecode) throw new Error("cannot create contract with no bytecode");
                    if (null == t.getAccountKey) throw new Error("`Signer.getAccountKey()` is not implemented, but is required for `ContractCreateFlow`");
                    const e = t.getAccountKey(),
                        r = await (new n.a).setKeys(null != e ? [e] : []).setContents(this._bytecode.subarray(0, Math.min(this._bytecode.length, 2048))).freezeWithSigner(t);
                    await r.signWithSigner(t), await c(r, this._publicKeys, this._transactionSigners);
                    let s = await r.executeWithSigner(t);
                    const o = (await s.getReceiptWithSigner(t)).fileId;
                    if (this._bytecode.length > 2048) {
                        let e = (new a.a).setFileId(o).setContents(this._bytecode.subarray(2048));
                        null != this._maxChunks && e.setMaxChunks(this._maxChunks), e = await e.freezeWithSigner(t), await e.signWithSigner(t), await c(e, this._publicKeys, this._transactionSigners), await e.executeWithSigner(t)
                    }
                    if (this._contractCreate = await this._contractCreate.setBytecodeFileId(o).freezeWithSigner(t), this._contractCreate = await this._contractCreate.signWithSigner(t), await c(this._contractCreate, this._publicKeys, this._transactionSigners), s = await this._contractCreate.executeWithSigner(t), await s.getReceiptWithSigner(t), null != e) {
                        const e = await (new i.a).setFileId(o).freezeWithSigner(t);
                        await e.signWithSigner(t), await c(e, this._publicKeys, this._transactionSigners), await (await e.executeWithSigner(t)).getReceiptWithSigner(t)
                    }
                    return s
                }
            }
            async function c(t, e, r) {
                for (let n = 0; n < e.length; n++) await t.signWith(e[n], r[n])
            }
        },
        1494: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractDeleteTransaction
            }));
            var n = r(7),
                a = r(40),
                i = r(5);
            class ContractDeleteTransaction extends n.f {
                constructor(t = {}) {
                    super(), this._contractId = null, this._transferAccountId = null, this._transferContractId = null, null != t.contractId && this.setContractId(t.contractId), null != t.transferAccountId && this.setTransferAccountId(t.transferAccountId), null != t.transferContractId && this.setTransferContractId(t.transferContractId)
                }
                static _fromProtobuf(t, e, r, s, o) {
                    const d = o[0].contractDeleteInstance;
                    return n.f._fromProtobufTransactions(new ContractDeleteTransaction({
                        contractId: null != d.contractID ? a.a._fromProtobuf(d.contractID) : void 0,
                        transferAccountId: null != d.transferAccountID ? i.a._fromProtobuf(d.transferAccountID) : void 0,
                        transferContractId: null != d.transferContractID ? a.a._fromProtobuf(d.transferContractID) : void 0
                    }), t, e, r, s, o)
                }
                get contractId() {
                    return this._contractId
                }
                setContractId(t) {
                    return this._requireNotFrozen(), this._contractId = "string" == typeof t ? a.a.fromString(t) : t.clone(), this
                }
                get transferContractId() {
                    return this._transferContractId
                }
                setTransferContractId(t) {
                    return this._requireNotFrozen(), this._transferContractId = t instanceof a.a ? t : a.a.fromString(t), this
                }
                get transferAccountId() {
                    return this._transferAccountId
                }
                setTransferAccountId(t) {
                    return this._requireNotFrozen(), this._transferAccountId = t instanceof i.a ? t : i.a.fromString(t), this
                }
                _validateChecksums(t) {
                    null != this._contractId && this._contractId.validateChecksum(t), null != this._transferAccountId && this._transferAccountId.validateChecksum(t), null != this._transferContractId && this._transferContractId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.smartContract.deleteContract(e)
                }
                _getTransactionDataCase() {
                    return "contractDeleteInstance"
                }
                _makeTransactionData() {
                    return {
                        contractID: null != this._contractId ? this._contractId._toProtobuf() : null,
                        transferAccountID: this._transferAccountId ? this._transferAccountId._toProtobuf() : null,
                        transferContractID: null != this._transferContractId ? this._transferContractId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "ContractDeleteTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            n.e.set("contractDeleteInstance", ContractDeleteTransaction._fromProtobuf)
        },
        1495: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractExecuteTransaction
            }));
            var n = r(17),
                a = r(7),
                i = r(40),
                s = r(302),
                o = r(1),
                d = r.n(o);
            class ContractExecuteTransaction extends a.f {
                constructor(t = {}) {
                    super(), this._contractId = null, this._gas = null, this._amount = null, this._functionParameters = null, null != t.contractId && this.setContractId(t.contractId), null != t.gas && this.setGas(t.gas), null != t.amount && this.setPayableAmount(t.amount), null != t.functionParameters ? this.setFunctionParameters(t.functionParameters) : null != t.function && this.setFunction(t.function.name, t.function.parameters)
                }
                static _fromProtobuf(t, e, r, s, o) {
                    const d = o[0].contractCall;
                    return a.f._fromProtobufTransactions(new ContractExecuteTransaction({
                        contractId: null != d.contractID ? i.a._fromProtobuf(d.contractID) : void 0,
                        gas: null != d.gas ? d.gas : void 0,
                        amount: null != d.amount ? n.a.fromTinybars(d.amount) : void 0,
                        functionParameters: null != d.functionParameters ? d.functionParameters : void 0
                    }), t, e, r, s, o)
                }
                get contractId() {
                    return this._contractId
                }
                setContractId(t) {
                    return this._requireNotFrozen(), this._contractId = "string" == typeof t ? i.a.fromString(t) : t.clone(), this
                }
                get gas() {
                    return this._gas
                }
                setGas(t) {
                    return this._requireNotFrozen(), this._gas = t instanceof d.a ? t : d.a.fromValue(t), this
                }
                get payableAmount() {
                    return this._amount
                }
                setPayableAmount(t) {
                    return this._requireNotFrozen(), this._amount = t instanceof n.a ? t : new n.a(t), this
                }
                get functionParameters() {
                    return this._functionParameters
                }
                setFunctionParameters(t) {
                    return this._requireNotFrozen(), this._functionParameters = t, this
                }
                setFunction(t, e) {
                    return this._requireNotFrozen(), this._functionParameters = null != e ? e._build(t) : (new s.a)._build(t), this
                }
                _validateChecksums(t) {
                    null != this._contractId && this._contractId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.smartContract.contractCallMethod(e)
                }
                _getTransactionDataCase() {
                    return "contractCall"
                }
                _makeTransactionData() {
                    return {
                        contractID: null != this._contractId ? this._contractId._toProtobuf() : null,
                        gas: this._gas,
                        amount: null != this._amount ? this._amount.toTinybars() : null,
                        functionParameters: this._functionParameters
                    }
                }
                _getLogId() {
                    return "ContractExecuteTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            a.e.set("contractCall", ContractExecuteTransaction._fromProtobuf)
        },
        1496: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractInfoQuery
            }));
            var n = r(33),
                a = r(40),
                i = r(706),
                s = r(17);
            class ContractInfoQuery extends n.d {
                constructor(t = {}) {
                    super(), this._contractId = null, null != t.contractId && this.setContractId(t.contractId)
                }
                static _fromProtobuf(t) {
                    const e = t.contractGetInfo;
                    return new ContractInfoQuery({
                        contractId: null != e.contractID ? a.a._fromProtobuf(e.contractID) : void 0
                    })
                }
                get contractId() {
                    return this._contractId
                }
                setContractId(t) {
                    return this._contractId = "string" == typeof t ? a.a.fromString(t) : t.clone(), this
                }
                _validateChecksums(t) {
                    null != this._contractId && this._contractId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.smartContract.getContractInfo(e)
                }
                async getCost(t) {
                    let e = await super.getCost(t);
                    return e.toTinybars().greaterThan(25) ? e : s.a.fromTinybars(25)
                }
                _mapResponseHeader(t) {
                    return t.contractGetInfo.header
                }
                _mapResponse(t, e, r) {
                    const n = t.contractGetInfo;
                    return Promise.resolve(i.a._fromProtobuf(n.contractInfo))
                }
                _onMakeRequest(t) {
                    return {
                        contractGetInfo: {
                            header: t,
                            contractID: null != this._contractId ? this._contractId._toProtobuf() : null
                        }
                    }
                }
                _getLogId() {
                    return "ContractInfoQuery:" + (null != this._paymentTransactionId && null != this._paymentTransactionId.validStart ? this._paymentTransactionId.validStart : this._timestamp).toString()
                }
            }
            n.b.set("contractGetInfo", ContractInfoQuery._fromProtobuf)
        },
        1497: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractUpdateTransaction
            }));
            var n = r(5),
                a = r(40),
                i = r(45),
                s = r(7),
                o = r(46),
                d = r(23),
                c = r(25),
                u = r(1),
                h = r.n(u);
            class ContractUpdateTransaction extends s.f {
                constructor(t = {}) {
                    super(), this._contractId = null, this._expirationTime = null, this._adminKey = null, this._proxyAccountId = null, this._autoRenewPeriod = null, this._bytecodeFileId = null, this._contractMemo = null, this._maxAutomaticTokenAssociations = 0, this._stakedAccountId = null, this._stakedNodeId = null, this._declineStakingReward = null, this._autoRenewAccountId = null, null != t.contractId && this.setContractId(t.contractId), null != t.expirationTime && this.setExpirationTime(t.expirationTime), null != t.adminKey && this.setAdminKey(t.adminKey), null != t.proxyAccountId && this.setProxyAccountId(t.proxyAccountId), null != t.autoRenewPeriod && this.setAutoRenewPeriod(t.autoRenewPeriod), null != t.bytecodeFileId && this.setBytecodeFileId(t.bytecodeFileId), null != t.contractMemo && this.setContractMemo(t.contractMemo), null != t.maxAutomaticTokenAssociations && this.setMaxAutomaticTokenAssociations(t.maxAutomaticTokenAssociations), null != t.stakedAccountId && this.setStakedAccountId(t.stakedAccountId), null != t.stakedNodeId && this.setStakedNodeId(t.stakedNodeId), null != t.declineStakingReward && this.setDeclineStakingReward(t.declineStakingReward), null != t.autoRenewAccountId && this.setAutoRenewAccountId(t.autoRenewAccountId)
                }
                static _fromProtobuf(t, e, r, o, u) {
                    const h = u[0].contractUpdateInstance;
                    let l = void 0;
                    null != h.autoRenewPeriod && null != h.autoRenewPeriod.seconds && (l = h.autoRenewPeriod.seconds);
                    let _ = void 0;
                    null != h.memoWrapper && null != h.memoWrapper.value && (_ = h.memoWrapper.value);
                    let m = void 0;
                    return null != h.maxAutomaticTokenAssociations && null != h.maxAutomaticTokenAssociations.value && (m = h.maxAutomaticTokenAssociations.value), s.f._fromProtobufTransactions(new ContractUpdateTransaction({
                        contractId: null != h.contractID ? a.a._fromProtobuf(h.contractID) : void 0,
                        bytecodeFileId: null != h.fileID ? i.a._fromProtobuf(h.fileID) : void 0,
                        expirationTime: null != h.expirationTime ? d.a._fromProtobuf(h.expirationTime) : void 0,
                        adminKey: null != h.adminKey ? c.a._fromProtobufKey(h.adminKey) : void 0,
                        proxyAccountId: null != h.proxyAccountID ? n.a._fromProtobuf(h.proxyAccountID) : void 0,
                        autoRenewPeriod: l,
                        contractMemo: _,
                        maxAutomaticTokenAssociations: m,
                        stakedAccountId: null != h.stakedAccountId ? n.a._fromProtobuf(h.stakedAccountId) : void 0,
                        stakedNodeId: null != h.stakedNodeId ? h.stakedNodeId : void 0,
                        declineStakingReward: null != h.declineReward && 1 == h.declineReward,
                        autoRenewAccountId: null != h.autoRenewAccountId ? n.a._fromProtobuf(h.autoRenewAccountId) : void 0
                    }), t, e, r, o, u)
                }
                get contractId() {
                    return this._contractId
                }
                setContractId(t) {
                    return this._requireNotFrozen(), this._contractId = "string" == typeof t ? a.a.fromString(t) : t.clone(), this
                }
                get expirationTime() {
                    return this._expirationTime
                }
                setExpirationTime(t) {
                    return this._requireNotFrozen(), this._expirationTime = t instanceof d.a ? t : d.a.fromDate(t), this
                }
                get adminKey() {
                    return this._adminKey
                }
                setAdminKey(t) {
                    return this._requireNotFrozen(), this._adminKey = t, this
                }
                get proxyAccountId() {
                    return this._proxyAccountId
                }
                setProxyAccountId(t) {
                    return this._requireNotFrozen(), this._proxyAccountId = "string" == typeof t ? n.a.fromString(t) : t.clone(), this
                }
                get autoRenewPeriod() {
                    return this._autoRenewPeriod
                }
                setAutoRenewPeriod(t) {
                    return this._requireNotFrozen(), this._autoRenewPeriod = t instanceof o.a ? t : new o.a(t), this
                }
                get bytecodeFileId() {
                    return this._bytecodeFileId
                }
                setBytecodeFileId(t) {
                    return console.warn("Deprecated: there is no replacement"), this._requireNotFrozen(), this._bytecodeFileId = "string" == typeof t ? i.a.fromString(t) : t.clone(), this
                }
                get contractMemo() {
                    return this._contractMemo
                }
                setContractMemo(t) {
                    return this._requireNotFrozen(), this._contractMemo = t, this
                }
                clearContractMemo() {
                    return this._requireNotFrozen(), this._contractMemo = null, this
                }
                get maxAutomaticTokenAssociations() {
                    return this._maxAutomaticTokenAssociations
                }
                setMaxAutomaticTokenAssociations(t) {
                    return this._requireNotFrozen(), this._maxAutomaticTokenAssociations = t, this
                }
                get stakedAccountId() {
                    return this._stakedAccountId
                }
                setStakedAccountId(t) {
                    return this._requireNotFrozen(), this._stakedAccountId = "string" == typeof t ? n.a.fromString(t) : t, this
                }
                get stakedNodeId() {
                    return this._stakedNodeId
                }
                setStakedNodeId(t) {
                    return this._requireNotFrozen(), this._stakedNodeId = h.a.fromValue(t), this
                }
                get declineStakingRewards() {
                    return this._declineStakingReward
                }
                setDeclineStakingReward(t) {
                    return this._requireNotFrozen(), this._declineStakingReward = t, this
                }
                get autoRenewAccountId() {
                    return this._autoRenewAccountId
                }
                setAutoRenewAccountId(t) {
                    return this._requireNotFrozen(), this._autoRenewAccountId = "string" == typeof t ? n.a.fromString(t) : t, this
                }
                clearAutoRenewAccountId() {
                    return this._autoRenewAccountId = new n.a(0), this
                }
                _validateChecksums(t) {
                    null != this._contractId && this._contractId.validateChecksum(t), null != this._bytecodeFileId && this._bytecodeFileId.validateChecksum(t), null != this._proxyAccountId && this._proxyAccountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.smartContract.updateContract(e)
                }
                _getTransactionDataCase() {
                    return "contractUpdateInstance"
                }
                _makeTransactionData() {
                    return {
                        contractID: null != this._contractId ? this._contractId._toProtobuf() : null,
                        expirationTime: null != this._expirationTime ? this._expirationTime._toProtobuf() : null,
                        adminKey: null != this._adminKey ? this._adminKey._toProtobufKey() : null,
                        proxyAccountID: null != this._proxyAccountId ? this._proxyAccountId._toProtobuf() : null,
                        autoRenewPeriod: null != this._autoRenewPeriod ? this._autoRenewPeriod._toProtobuf() : null,
                        fileID: this._bytecodeFileId ? this._bytecodeFileId._toProtobuf() : null,
                        memoWrapper: null != this._contractMemo ? {
                            value: this._contractMemo
                        } : null,
                        maxAutomaticTokenAssociations: null != this._maxAutomaticTokenAssociations ? {
                            value: this._maxAutomaticTokenAssociations
                        } : null,
                        stakedAccountId: null != this.stakedAccountId ? this.stakedAccountId._toProtobuf() : null,
                        stakedNodeId: this.stakedNodeId,
                        declineReward: null != this.declineStakingRewards ? {
                            value: this.declineStakingRewards
                        } : null,
                        autoRenewAccountId: null != this._autoRenewAccountId ? this._autoRenewAccountId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "ContractUpdateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            s.e.set("contractUpdateInstance", ContractUpdateTransaction._fromProtobuf)
        },
        2325: function(t, e, r) {
            "use strict";

            function n(t, e) {
                if (t === e) return !0;
                if (t.byteLength !== e.byteLength) return !1;
                const r = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    n = new DataView(e.buffer, e.byteOffset, e.byteLength);
                let a = t.byteLength;
                for (; a--;)
                    if (r.getUint8(a) !== n.getUint8(a)) return !1;
                return !0
            }
            r.d(e, "a", (function() {
                return n
            }))
        },
        2378: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "Cache", (function() {
                return n.t
            })), r.d(e, "BadKeyError", (function() {
                return n.q
            })), r.d(e, "BadMnemonicError", (function() {
                return n.r
            })), r.d(e, "BadMnemonicReason", (function() {
                return n.s
            })), r.d(e, "HEDERA_PATH", (function() {
                return n.jb
            })), r.d(e, "SLIP44_ECDSA_ETH_PATH", (function() {
                return n.Kb
            })), r.d(e, "SLIP44_ECDSA_HEDERA_PATH", (function() {
                return n.Lb
            })), r.d(e, "PrivateKey", (function() {
                return n.Cb
            })), r.d(e, "PublicKey", (function() {
                return n.Gb
            })), r.d(e, "KeyList", (function() {
                return n.ob
            })), r.d(e, "Key", (function() {
                return n.nb
            })), r.d(e, "Mnemonic", (function() {
                return n.wb
            })), r.d(e, "AccountAllowanceAdjustTransaction", (function() {
                return n.a
            })), r.d(e, "AccountAllowanceApproveTransaction", (function() {
                return n.b
            })), r.d(e, "AccountAllowanceDeleteTransaction", (function() {
                return n.c
            })), r.d(e, "AccountBalance", (function() {
                return n.d
            })), r.d(e, "AccountBalanceQuery", (function() {
                return n.e
            })), r.d(e, "AccountCreateTransaction", (function() {
                return n.f
            })), r.d(e, "AccountDeleteTransaction", (function() {
                return n.g
            })), r.d(e, "AccountId", (function() {
                return n.h
            })), r.d(e, "AccountInfo", (function() {
                return n.i
            })), r.d(e, "AccountInfoFlow", (function() {
                return n.j
            })), r.d(e, "AccountInfoQuery", (function() {
                return n.k
            })), r.d(e, "AccountRecordsQuery", (function() {
                return n.l
            })), r.d(e, "AccountStakersQuery", (function() {
                return n.m
            })), r.d(e, "AccountUpdateTransaction", (function() {
                return n.n
            })), r.d(e, "AddressBookQuery", (function() {
                return n.o
            })), r.d(e, "AssessedCustomFee", (function() {
                return n.p
            })), r.d(e, "ContractByteCodeQuery", (function() {
                return n.u
            })), r.d(e, "ContractCallQuery", (function() {
                return n.v
            })), r.d(e, "ContractCreateFlow", (function() {
                return n.w
            })), r.d(e, "ContractCreateTransaction", (function() {
                return n.x
            })), r.d(e, "ContractDeleteTransaction", (function() {
                return n.y
            })), r.d(e, "ContractExecuteTransaction", (function() {
                return n.z
            })), r.d(e, "ContractFunctionParameters", (function() {
                return n.A
            })), r.d(e, "ContractFunctionResult", (function() {
                return n.B
            })), r.d(e, "ContractFunctionSelector", (function() {
                return n.C
            })), r.d(e, "ContractId", (function() {
                return n.D
            })), r.d(e, "ContractInfo", (function() {
                return n.E
            })), r.d(e, "ContractInfoQuery", (function() {
                return n.F
            })), r.d(e, "ContractLogInfo", (function() {
                return n.G
            })), r.d(e, "ContractUpdateTransaction", (function() {
                return n.H
            })), r.d(e, "CustomFee", (function() {
                return n.I
            })), r.d(e, "CustomFixedFee", (function() {
                return n.J
            })), r.d(e, "CustomFractionalFee", (function() {
                return n.K
            })), r.d(e, "CustomRoyaltyFee", (function() {
                return n.L
            })), r.d(e, "DelegateContractId", (function() {
                return n.M
            })), r.d(e, "EthereumTransaction", (function() {
                return n.O
            })), r.d(e, "EthereumTransactionDataLegacy", (function() {
                return n.R
            })), r.d(e, "EthereumTransactionDataEip1559", (function() {
                return n.Q
            })), r.d(e, "EthereumTransactionData", (function() {
                return n.P
            })), r.d(e, "EthereumFlow", (function() {
                return n.N
            })), r.d(e, "ExchangeRate", (function() {
                return n.S
            })), r.d(e, "ExchangeRates", (function() {
                return n.T
            })), r.d(e, "Executable", (function() {
                return n.U
            })), r.d(e, "FeeComponents", (function() {
                return n.V
            })), r.d(e, "FeeData", (function() {
                return n.W
            })), r.d(e, "FeeDataType", (function() {
                return n.X
            })), r.d(e, "FeeSchedule", (function() {
                return n.Y
            })), r.d(e, "FeeSchedules", (function() {
                return n.Z
            })), r.d(e, "FileAppendTransaction", (function() {
                return n.ab
            })), r.d(e, "FileContentsQuery", (function() {
                return n.bb
            })), r.d(e, "FileCreateTransaction", (function() {
                return n.cb
            })), r.d(e, "FileDeleteTransaction", (function() {
                return n.db
            })), r.d(e, "FileId", (function() {
                return n.eb
            })), r.d(e, "FileInfo", (function() {
                return n.fb
            })), r.d(e, "FileInfoQuery", (function() {
                return n.gb
            })), r.d(e, "FileUpdateTransaction", (function() {
                return n.hb
            })), r.d(e, "FreezeTransaction", (function() {
                return n.ib
            })), r.d(e, "Hbar", (function() {
                return n.kb
            })), r.d(e, "HbarAllowance", (function() {
                return n.lb
            })), r.d(e, "HbarUnit", (function() {
                return n.mb
            })), r.d(e, "LiveHash", (function() {
                return n.qb
            })), r.d(e, "LiveHashAddTransaction", (function() {
                return n.rb
            })), r.d(e, "LiveHashDeleteTransaction", (function() {
                return n.sb
            })), r.d(e, "LiveHashQuery", (function() {
                return n.tb
            })), r.d(e, "MaxQueryPaymentExceeded", (function() {
                return n.vb
            })), r.d(e, "NetworkVersionInfo", (function() {
                return n.yb
            })), r.d(e, "NetworkVersionInfoQuery", (function() {
                return n.zb
            })), r.d(e, "NftId", (function() {
                return n.Ab
            })), r.d(e, "Provider", (function() {
                return n.Eb
            })), r.d(e, "PrngTransaction", (function() {
                return n.Db
            })), r.d(e, "ProxyStaker", (function() {
                return n.Fb
            })), r.d(e, "Query", (function() {
                return n.Hb
            })), r.d(e, "RequestType", (function() {
                return n.Jb
            })), r.d(e, "ScheduleCreateTransaction", (function() {
                return n.Mb
            })), r.d(e, "ScheduleDeleteTransaction", (function() {
                return n.Nb
            })), r.d(e, "ScheduleId", (function() {
                return n.Ob
            })), r.d(e, "ScheduleInfo", (function() {
                return n.Pb
            })), r.d(e, "ScheduleInfoQuery", (function() {
                return n.Qb
            })), r.d(e, "ScheduleSignTransaction", (function() {
                return n.Rb
            })), r.d(e, "SemanticVersion", (function() {
                return n.Sb
            })), r.d(e, "Signer", (function() {
                return n.Tb
            })), r.d(e, "SignerSignature", (function() {
                return n.Ub
            })), r.d(e, "Status", (function() {
                return n.Vb
            })), r.d(e, "SubscriptionHandle", (function() {
                return n.Xb
            })), r.d(e, "SystemDeleteTransaction", (function() {
                return n.Yb
            })), r.d(e, "SystemUndeleteTransaction", (function() {
                return n.Zb
            })), r.d(e, "Timestamp", (function() {
                return n.ac
            })), r.d(e, "TokenAllowance", (function() {
                return n.bc
            })), r.d(e, "TokenAssociateTransaction", (function() {
                return n.cc
            })), r.d(e, "TokenBurnTransaction", (function() {
                return n.dc
            })), r.d(e, "TokenCreateTransaction", (function() {
                return n.ec
            })), r.d(e, "TokenDeleteTransaction", (function() {
                return n.fc
            })), r.d(e, "TokenDissociateTransaction", (function() {
                return n.gc
            })), r.d(e, "TokenFeeScheduleUpdateTransaction", (function() {
                return n.hc
            })), r.d(e, "TokenFreezeTransaction", (function() {
                return n.ic
            })), r.d(e, "TokenGrantKycTransaction", (function() {
                return n.jc
            })), r.d(e, "TokenId", (function() {
                return n.kc
            })), r.d(e, "TokenInfo", (function() {
                return n.lc
            })), r.d(e, "TokenInfoQuery", (function() {
                return n.mc
            })), r.d(e, "TokenMintTransaction", (function() {
                return n.nc
            })), r.d(e, "TokenNftAllowance", (function() {
                return n.oc
            })), r.d(e, "TokenNftInfo", (function() {
                return n.pc
            })), r.d(e, "TokenNftInfoQuery", (function() {
                return n.qc
            })), r.d(e, "TokenPauseTransaction", (function() {
                return n.rc
            })), r.d(e, "TokenRevokeKycTransaction", (function() {
                return n.sc
            })), r.d(e, "TokenSupplyType", (function() {
                return n.tc
            })), r.d(e, "TokenType", (function() {
                return n.uc
            })), r.d(e, "TokenUnfreezeTransaction", (function() {
                return n.vc
            })), r.d(e, "TokenUnpauseTransaction", (function() {
                return n.wc
            })), r.d(e, "TokenUpdateTransaction", (function() {
                return n.xc
            })), r.d(e, "TokenWipeTransaction", (function() {
                return n.yc
            })), r.d(e, "TopicCreateTransaction", (function() {
                return n.zc
            })), r.d(e, "TopicDeleteTransaction", (function() {
                return n.Ac
            })), r.d(e, "TopicId", (function() {
                return n.Bc
            })), r.d(e, "TopicInfo", (function() {
                return n.Cc
            })), r.d(e, "TopicInfoQuery", (function() {
                return n.Dc
            })), r.d(e, "TopicMessage", (function() {
                return n.Ec
            })), r.d(e, "TopicMessageChunk", (function() {
                return n.Fc
            })), r.d(e, "TopicMessageQuery", (function() {
                return n.Gc
            })), r.d(e, "TopicMessageSubmitTransaction", (function() {
                return n.Hc
            })), r.d(e, "TopicUpdateTransaction", (function() {
                return n.Ic
            })), r.d(e, "Transaction", (function() {
                return n.Jc
            })), r.d(e, "TransactionFeeSchedule", (function() {
                return n.Kc
            })), r.d(e, "TransactionId", (function() {
                return n.Lc
            })), r.d(e, "TransactionReceipt", (function() {
                return n.Mc
            })), r.d(e, "TransactionReceiptQuery", (function() {
                return n.Nc
            })), r.d(e, "TransactionRecord", (function() {
                return n.Oc
            })), r.d(e, "TransactionRecordQuery", (function() {
                return n.Pc
            })), r.d(e, "TransactionResponse", (function() {
                return n.Qc
            })), r.d(e, "Transfer", (function() {
                return n.Rc
            })), r.d(e, "TransferTransaction", (function() {
                return n.Sc
            })), r.d(e, "Wallet", (function() {
                return n.Tc
            })), r.d(e, "StatusError", (function() {
                return n.Wb
            })), r.d(e, "PrecheckStatusError", (function() {
                return n.Bb
            })), r.d(e, "ReceiptStatusError", (function() {
                return n.Ib
            })), r.d(e, "LedgerId", (function() {
                return n.pb
            })), r.d(e, "Logger", (function() {
                return n.ub
            })), r.d(e, "NetworkName", (function() {
                return n.xb
            })), r.d(e, "Client", (function() {
                return WebClient_WebClient
            }));
            var n = r(2320),
                a = r(5),
                i = r(440),
                s = r(17),
                o = r(2334),
                d = r(928),
                c = r(99),
                u = r(9);
            class ManagedNetwork_ManagedNetwork {
                constructor(t) {
                    this._network = new Map, this._nodes = [], this._healthyNodes = [], this._createNetworkChannel = t, this._ledgerId = null, this._minBackoff = 8e3, this._maxBackoff = 36e5, this._maxNodeAttempts = -1, this._transportSecurity = !1, this._nodeMinReadmitPeriod = this._minBackoff, this._nodeMaxReadmitPeriod = this._maxBackoff, this._earliestReadmitTime = Date.now() + this._nodeMinReadmitPeriod
                }
                isTransportSecurity() {
                    return this._transportSecurity
                }
                setTransportSecurity(t) {
                    if (this._transportSecurity == t) return this;
                    this._network.clear();
                    for (let e = 0; e < this._nodes.length; e++) {
                        let r = this._nodes[e];
                        r.close(), r = t ? r.toSecure().setCert(null != this._ledgerId ? this._ledgerId.toString() : "") : r.toInsecure(), this._nodes[e] = r;
                        const n = null != this._network.get(r.getKey()) ? this._network.get(r.getKey()) : [];
                        n.push(r), this._network.set(r.getKey(), n)
                    }
                    return this._healthyNodes = [...this._nodes], this._transportSecurity = t, this
                }
                setNetworkName(t) {
                    return console.warn("Deprecated: Use `setLedgerId` instead"), this.setLedgerId(t)
                }
                get networkName() {
                    return console.warn("Deprecated: Use `ledgerId` instead"), null != this.ledgerId ? this.ledgerId.toString() : null
                }
                setLedgerId(t) {
                    return this._ledgerId = "string" == typeof t ? c.a.fromString(t) : t, this
                }
                get ledgerId() {
                    return null != this._ledgerId ? this._ledgerId : null
                }
                _createNodeFromNetworkEntry(t) {
                    throw new Error("not implemented")
                }
                _getNodesToRemove(t) {
                    throw new Error("not implemented")
                }
                _removeDeadNodes() {
                    if (this._maxNodeAttempts > 0)
                        for (let t = this._nodes.length - 1; t >= 0; t--) {
                            this._nodes[t]._badGrpcStatusCount < this._maxNodeAttempts || this._closeNode(t)
                        }
                }
                _readmitNodes() {
                    const t = Date.now();
                    if (this._earliestReadmitTime <= t) {
                        let e = Number.MAX_SAFE_INTEGER,
                            r = !0;
                        t: for (let n = 0; n < this._nodes.length; n++) {
                            for (let a = 0; a < this._healthyNodes.length; a++)
                                if (r && this._nodes[n]._readmitTime > t && (e = Math.min(this._nodes[n]._readmitTime, e)), this._nodes[n] == this._healthyNodes[a]) continue t;
                            r = !1, this._nodes[n]._readmitTime <= t && this._healthyNodes.push(this._nodes[n])
                        }
                        this._earliestReadmitTime = Math.min(Math.max(e, this._nodeMinReadmitPeriod), this._nodeMaxReadmitPeriod)
                    }
                }
                _getNumberOfMostHealthyNodes(t) {
                    this._removeDeadNodes();
                    const e = [],
                        r = new Set;
                    for (let n = 0; n < this._healthyNodes.length && e.length != t; n++) {
                        const t = this.getNode();
                        r.has(t.getKey()) || (r.add(t.getKey()), e.push(t))
                    }
                    return e
                }
                _closeNode(t) {
                    const e = this._nodes[t];
                    e.close(), this._removeNodeFromNetwork(e), this._nodes.splice(t, 1)
                }
                _removeNodeFromNetwork(t) {
                    const e = this._network.get(t.getKey());
                    for (let r = 0; r < e.length; r++)
                        if (e[r] === t) {
                            e.splice(r, 1);
                            break
                        } 0 === e.length && this._network.delete(t.getKey())
                }
                _setNetwork(t) {
                    const e = [],
                        r = new Set,
                        n = new Set,
                        a = [],
                        i = new Map;
                    for (const e of this._getNodesToRemove(t)) this._closeNode(e);
                    for (const t of this._nodes) e.push(t), r.add(t.getKey()), n.add(t.address.toString());
                    for (const [a, i] of t) r.has(i.toString()) && n.has(a) || e.push(this._createNodeFromNetworkEntry([a, i]));
                    u.i(e);
                    for (const t of e) {
                        if (!t.isHealthy()) continue;
                        a.push(t);
                        const e = i.has(t.getKey()) ? i.get(t.getKey()) : [];
                        e.push(t), i.set(t.getKey(), e)
                    }
                    return this._nodes = e, this._healthyNodes = a, this._network = i, this._ledgerId = null, this
                }
                get maxNodeAttempts() {
                    return this._maxNodeAttempts
                }
                setMaxNodeAttempts(t) {
                    return this._maxNodeAttempts = t, this
                }
                get minBackoff() {
                    return this._minBackoff
                }
                setMinBackoff(t) {
                    this._minBackoff = t;
                    for (const e of this._nodes) e.setMinBackoff(t);
                    return this
                }
                get maxBackoff() {
                    return this._maxBackoff
                }
                setMaxBackoff(t) {
                    this._maxBackoff = t;
                    for (const e of this._nodes) e.setMaxBackoff(t);
                    return this
                }
                get nodeMinReadmitPeriod() {
                    return this._nodeMinReadmitPeriod
                }
                setNodeMinReadmitPeriod(t) {
                    return this._nodeMinReadmitPeriod = t, this._earliestReadmitTime = Date.now() + this._nodeMinReadmitPeriod, this
                }
                get nodeMaxReadmitPeriod() {
                    return this._nodeMaxReadmitPeriod
                }
                setNodeMaxReadmitPeriod(t) {
                    return this._nodeMaxReadmitPeriod = t, this
                }
                getNode(t) {
                    if (this._readmitNodes(), null != t) return this._network.get(t.toString())[0];
                    if (0 == this._healthyNodes.length) throw new Error("failed to find a healthy working node");
                    return this._healthyNodes[Math.floor(Math.random() * this._healthyNodes.length)]
                }
                increaseBackoff(t) {
                    t.increaseBackoff();
                    for (let e = 0; e < this._healthyNodes.length; e++) this._healthyNodes[e] == t && this._healthyNodes.splice(e, 1)
                }
                decreaseBackoff(t) {
                    t.decreaseBackoff()
                }
                close() {
                    for (const t of this._nodes) t.close();
                    this._network.clear(), this._nodes = []
                }
            }
            class Network_Network extends ManagedNetwork_ManagedNetwork {
                constructor(t) {
                    super(t), this._maxNodesPerTransaction = -1, this._addressBook = null
                }
                setNetwork(t) {
                    this._setNetwork(new Map(Object.entries(t).map(([t, e]) => [t, "string" == typeof e ? a.a.fromString(e) : e])))
                }
                setNetworkFromAddressBook(t) {
                    const e = {},
                        r = this.isTransportSecurity() ? 50212 : 50211;
                    for (const n of t.nodeAddresses)
                        for (const t of n.addresses) t.port === r && null != n.accountId && (e[t.toString()] = n.accountId);
                    return this.setNetwork(e), this
                }
                get network() {
                    var t = {};
                    for (const e of this._nodes) t[e.address.toString()] = e.accountId;
                    return t
                }
                setNetworkName(t) {
                    switch (super.setLedgerId(t), t) {
                        case "mainnet":
                            this._addressBook = d.a;
                            break;
                        case "testnet":
                            this._addressBook = d.c;
                            break;
                        case "previewnet":
                            this._addressBook = d.b
                    }
                    if (null != this._addressBook)
                        for (const t of this._nodes)
                            for (const e of this._addressBook.nodeAddresses) null != e.accountId && e.accountId.toString() === t.accountId.toString() && t.setNodeAddress(e);
                    return this
                }
                get networkName() {
                    return null != this._ledgerId ? this._ledgerId.toString() : null
                }
                _createNodeFromNetworkEntry(t) {
                    const e = "string" == typeof t[1] ? a.a.fromString(t[1]) : t[1];
                    return new o.a({
                        newNode: {
                            address: t[0],
                            accountId: e,
                            channelInitFunction: this._createNetworkChannel
                        }
                    }).setMinBackoff(this._minBackoff)
                }
                _getNodesToRemove(t) {
                    const e = [];
                    for (let r = this._nodes.length - 1; r >= 0; r--) {
                        const n = this._nodes[r],
                            a = t.get(n.address.toString());
                        null != a && a.toString() === n.accountId.toString() || e.push(r)
                    }
                    return e
                }
                _checkNetworkContainsEntry(t) {
                    for (const e of this._nodes)
                        if (e.address.toString() === t[0]) return !0;
                    return !1
                }
                get maxNodesPerTransaction() {
                    return this._maxNodesPerTransaction
                }
                setMaxNodesPerTransaction(t) {
                    return this._maxNodesPerTransaction = t, this
                }
                get maxNodeAttempts() {
                    return this._maxNodeAttempts
                }
                setMaxNodeAttempts(t) {
                    return this._maxNodeAttempts = t, this
                }
                getNumberOfNodesForTransaction() {
                    return this._maxNodesPerTransaction > 0 ? this._maxNodesPerTransaction : (this._nodes.length + 3 - 1) / 3
                }
                getNodeAccountIdsForExecute() {
                    return this._getNumberOfMostHealthyNodes(this.getNumberOfNodesForTransaction()).map(t => t.accountId)
                }
            }
            var h = r(2331);
            class MirrorNetwork_MirrorNetwork extends ManagedNetwork_ManagedNetwork {
                constructor(t) {
                    super(t)
                }
                setNetwork(t) {
                    this._setNetwork(new Map(t.map(t => [t, t])))
                }
                get network() {
                    var t = [];
                    for (const e of this._nodes) t.push(e.address.toString());
                    return t
                }
                _createNodeFromNetworkEntry(t) {
                    return new h.a({
                        newNode: {
                            address: t[1],
                            channelInitFunction: this._createNetworkChannel
                        }
                    }).setMinBackoff(this._minBackoff)
                }
                _getNodesToRemove(t) {
                    const e = [],
                        r = Object.values(t);
                    for (let t = this._nodes.length - 1; t >= 0; t--) {
                        const n = this._nodes[t];
                        r.includes(n.address.toString()) || e.push(t)
                    }
                    return e
                }
                getNextMirrorNode() {
                    if (null == this._createNetworkChannel) throw new Error("mirror network not supported on browser");
                    return this._getNumberOfMostHealthyNodes(1)[0]
                }
            }
            var l = r(100),
                _ = r(309),
                m = r(45),
                y = r(44),
                f = r(88),
                I = r.n(f);
            var g = r(541),
                b = r(316),
                w = r(11),
                A = r(107);
            const {
                proto: P
            } = w;

            function k(t) {
                const e = new ArrayBuffer(t.byteLength + 5);
                return new DataView(e, 1, 4).setUint32(0, t.length), new Uint8Array(e, 5).set(t), e
            }
            class WebChannel_WebChannel extends class Channel {
                constructor() {
                    this._crypto = null, this._smartContract = null, this._file = null, this._consensus = null, this._freeze = null, this._network = null, this._token = null, this._schedule = null, this._util = null
                }
                close() {
                    throw new Error("not implemented")
                }
                get crypto() {
                    return null != this._crypto || (this._crypto = P.CryptoService.create(this._createUnaryClient("CryptoService"))), this._crypto
                }
                get smartContract() {
                    return null != this._smartContract || (this._smartContract = P.SmartContractService.create(this._createUnaryClient("SmartContractService"))), this._smartContract
                }
                get file() {
                    return null != this._file || (this._file = P.FileService.create(this._createUnaryClient("FileService"))), this._file
                }
                get consensus() {
                    return null != this._consensus || (this._consensus = P.ConsensusService.create(this._createUnaryClient("ConsensusService"))), this._consensus
                }
                get freeze() {
                    return null != this._freeze || (this._freeze = P.FreezeService.create(this._createUnaryClient("FreezeService"))), this._freeze
                }
                get network() {
                    return null != this._network || (this._network = P.NetworkService.create(this._createUnaryClient("NetworkService"))), this._network
                }
                get token() {
                    return null != this._token || (this._token = P.TokenService.create(this._createUnaryClient("TokenService"))), this._token
                }
                get schedule() {
                    return null != this._schedule || (this._schedule = P.ScheduleService.create(this._createUnaryClient("ScheduleService"))), this._schedule
                }
                get util() {
                    return null != this._util || (this._util = P.UtilService.create(this._createUnaryClient("UtilService"))), this._util
                }
                _createUnaryClient(t) {
                    throw new Error("not implemented")
                }
            } {
                constructor(t) {
                    super(), this._address = t
                }
                close() {}
                _createUnaryClient(t) {
                    return async (e, r, n) => {
                        try {
                            const a = await fetch(`${this._address}/proto.${t}/${e.name}`, {
                                    method: "POST",
                                    headers: {
                                        "content-type": "application/grpc-web+proto",
                                        "x-user-agent": "hedera-sdk-js/v2",
                                        "x-grpc-web": "1"
                                    },
                                    body: k(r)
                                }),
                                i = a.headers.get("grpc-status"),
                                s = a.headers.get("grpc-message");
                            if (null != i && null != s) {
                                const t = new g.a(b.a._fromValue(parseInt(i)));
                                t.message = s, n(t, null)
                            }
                            const o = await a.arrayBuffer();
                            n(null, function(t, e = 0, r = t.byteLength) {
                                const n = new DataView(t, e, r);
                                let a = 0,
                                    i = null,
                                    s = 0;
                                for (; a < n.byteLength;) {
                                    const e = n.getUint8(a + 0) >> 7,
                                        r = n.getUint32(a + 1),
                                        o = a + 5;
                                    if (o + r > n.byteLength) throw new Error("(BUG) unexpected frame length past the boundary");
                                    const d = new Uint8Array(t, n.byteOffset + o, r);
                                    if (0 === e) {
                                        if (null != i) throw new Error("(BUG) unexpectedly received more than one data frame");
                                        i = d
                                    } else {
                                        if (1 !== e) throw new Error("(BUG) unexpected frame type: " + e);
                                        {
                                            const t = A.a(d),
                                                [e, r] = t.split(":");
                                            if ("grpc-status" !== e) throw new Error("(BUG) unhandled trailer, " + t);
                                            s = parseInt(r)
                                        }
                                    }
                                    a += r + 5
                                }
                                if (0 !== s) throw new Error("(BUG) unhandled grpc-status: " + s);
                                if (null == i) throw new Error("(BUG) unexpectedly received no response");
                                return i
                            }(o))
                        } catch (t) {
                            n(t, null)
                        }
                    }
                }
            }
            const p = {
                fromName(t) {
                    switch (t) {
                        case "mainnet":
                            return p.MAINNET;
                        case "testnet":
                            return p.TESTNET;
                        case "previewnet":
                            return p.PREVIEWNET;
                        default:
                            throw new Error("unknown network name: " + t)
                    }
                },
                MAINNET: {
                    "https://grpc-web.myhbarwallet.com:443": new a.a(3),
                    "https://node01-00-grpc.swirlds.com:443": new a.a(4)
                },
                TESTNET: {
                    "https://testnet-node00-00-grpc.hedera.com:443": new a.a(3),
                    "https://testnet-node01-00-grpc.hedera.com:443": new a.a(4),
                    "https://testnet-node02-00-grpc.hedera.com:443": new a.a(5),
                    "https://testnet-node03-00-grpc.hedera.com:443": new a.a(6),
                    "https://testnet-node04-00-grpc.hedera.com:443": new a.a(7),
                    "https://testnet-node05-00-grpc.hedera.com:443": new a.a(8),
                    "https://testnet-node06-00-grpc.hedera.com:443": new a.a(9)
                },
                PREVIEWNET: {
                    "https://previewnet-node00-00-grpc.hedera.com:443": new a.a(3),
                    "https://previewnet-node01-00-grpc.hedera.com:443": new a.a(4),
                    "https://previewnet-node02-00-grpc.hedera.com:443": new a.a(5),
                    "https://previewnet-node03-00-grpc.hedera.com:443": new a.a(6),
                    "https://previewnet-node04-00-grpc.hedera.com:443": new a.a(7),
                    "https://previewnet-node05-00-grpc.hedera.com:443": new a.a(8),
                    "https://previewnet-node06-00-grpc.hedera.com:443": new a.a(9)
                }
            };
            class WebClient_WebClient extends class Client_Client {
                constructor(t) {
                    this._mirrorNetwork = new MirrorNetwork_MirrorNetwork(this._createMirrorNetworkChannel()), this._network = new Network_Network(this._createNetworkChannel()), this._operator = null, this._defaultMaxTransactionFee = null, this._maxQueryPayment = new s.a(1), null != t && null != t.operator && this.setOperator(t.operator.accountId, t.operator.privateKey), this._maxAttempts = null, this._signOnDemand = !1, this._autoValidateChecksums = !1, this._minBackoff = 250, this._maxBackoff = 8e3, this._defaultRegenerateTransactionId = !0, this._requestTimeout = null, this._networkUpdatePeriod = 864e5, this._isShutdown = !1, null != t && !1 !== t.scheduleNetworkUpdate && this._scheduleNetworkUpdate(), this._timer = void 0
                }
                setNetworkName(t) {
                    return console.warn("Deprecated: Use `setLedgerId` instead"), this.setLedgerId(t)
                }
                get networkName() {
                    return console.warn("Deprecated: Use `ledgerId` instead"), null != this.ledgerId ? this.ledgerId.toString() : null
                }
                setLedgerId(t) {
                    return this._network.setLedgerId("string" == typeof t ? c.a.fromString(t) : t), this
                }
                get ledgerId() {
                    return null != this._network._ledgerId ? this._network.ledgerId : null
                }
                setNetwork(t) {
                    throw new Error("not implemented")
                }
                setNetworkFromAddressBook(t) {
                    return this._network.setNetworkFromAddressBook(t), this
                }
                get network() {
                    return this._network.network
                }
                setMirrorNetwork(t) {
                    throw new Error("not implemented")
                }
                get mirrorNetwork() {
                    return this._mirrorNetwork.network
                }
                get signOnDemand() {
                    return this._signOnDemand
                }
                setSignOnDemand(t) {
                    this._signOnDemand = t
                }
                isTransportSecurity() {
                    return this._network.isTransportSecurity()
                }
                setTransportSecurity(t) {
                    return this._network.setTransportSecurity(t), this._mirrorNetwork.setTransportSecurity(t), this
                }
                setOperator(t, e) {
                    const r = "string" == typeof e ? _.a.fromString(e) : e;
                    return this.setOperatorWith(t, r.publicKey, t => Promise.resolve(r.sign(t)))
                }
                setOperatorWith(t, e, r) {
                    const n = t instanceof a.a ? t : a.a.fromString(t);
                    return null != this._network._ledgerId && n.validateChecksum(this), this._operator = {
                        transactionSigner: r,
                        accountId: n,
                        publicKey: e instanceof l.a ? e : l.a.fromString(e)
                    }, this
                }
                setAutoValidateChecksums(t) {
                    return this._autoValidateChecksums = t, this
                }
                isAutoValidateChecksumsEnabled() {
                    return this._autoValidateChecksums
                }
                get operatorAccountId() {
                    return null != this._operator ? this._operator.accountId : null
                }
                get operatorPublicKey() {
                    return null != this._operator ? this._operator.publicKey : null
                }
                get maxTransactionFee() {
                    return this._defaultMaxTransactionFee
                }
                setMaxTransactionFee(t) {
                    return this._defaultMaxTransactionFee = t, this
                }
                get defaultMaxTransactionFee() {
                    return this._defaultMaxTransactionFee
                }
                setDefaultMaxTransactionFee(t) {
                    return this._defaultMaxTransactionFee = t, this
                }
                get defaultRegenerateTransactionId() {
                    return this._defaultRegenerateTransactionId
                }
                setDefaultRegenerateTransactionId(t) {
                    return this._defaultRegenerateTransactionId = t, this
                }
                get maxQueryPayment() {
                    return this._maxQueryPayment
                }
                setMaxQueryPayment(t) {
                    return this._maxQueryPayment = t, this
                }
                get maxAttempts() {
                    return null != this._maxAttempts ? this._maxAttempts : 10
                }
                setMaxAttempts(t) {
                    return this._maxAttempts = t, this
                }
                get maxNodeAttempts() {
                    return this._network.maxNodeAttempts
                }
                setMaxNodeAttempts(t) {
                    return this._network.setMaxNodeAttempts(t), this
                }
                get nodeWaitTime() {
                    return this._network.minBackoff
                }
                setNodeWaitTime(t) {
                    return this._network.setMinBackoff(t), this
                }
                get maxNodesPerTransaction() {
                    return this._network.maxNodesPerTransaction
                }
                setMaxNodesPerTransaction(t) {
                    return this._network.setMaxNodesPerTransaction(t), this
                }
                setMinBackoff(t) {
                    if (null == t) throw new Error("minBackoff cannot be null.");
                    if (t > this._maxBackoff) throw new Error("minBackoff cannot be larger than maxBackoff.");
                    return this._minBackoff = t, this
                }
                get minBackoff() {
                    return this._minBackoff
                }
                setMaxBackoff(t) {
                    if (null == t) throw new Error("maxBackoff cannot be null.");
                    if (t < this._minBackoff) throw new Error("maxBackoff cannot be smaller than minBackoff.");
                    return this._maxBackoff = t, this
                }
                get maxBackoff() {
                    return this._maxBackoff
                }
                setNodeMinBackoff(t) {
                    return this._network.setMinBackoff(t), this
                }
                get nodeMinBackoff() {
                    return this._network.minBackoff
                }
                setNodeMaxBackoff(t) {
                    return this._network.setMaxBackoff(t), this
                }
                get nodeMaxBackoff() {
                    return this._network.maxBackoff
                }
                setNodeMinReadmitPeriod(t) {
                    return this._network.setNodeMinReadmitPeriod(t), this
                }
                get nodeMinReadmitPeriod() {
                    return this._network.nodeMinReadmitPeriod
                }
                setNodeMaxReadmitPeriod(t) {
                    return this._network.setNodeMaxReadmitPeriod(t), this
                }
                get nodeMaxReadmitPeriod() {
                    return this._network.nodeMaxReadmitPeriod
                }
                setRequestTimeout(t) {
                    return this._requestTimeout = t, this
                }
                get requestTimeout() {
                    return this._requestTimeout
                }
                get networkUpdatePeriod() {
                    return this._networkUpdatePeriod
                }
                setNetworkUpdatePeriod(t) {
                    return this._networkUpdatePeriod = t, this
                }
                async ping(t) {
                    try {
                        await new i.a({
                            accountId: t
                        }).setNodeAccountIds([t instanceof a.a ? t : a.a.fromString(t)]).execute(this)
                    } catch (t) {}
                }
                async pingAll() {
                    for (const t of Object.values(this._network.network)) await this.ping(t)
                }
                close() {
                    this._network.close(), this._mirrorNetwork.close(), this._isShutdown = !0, clearTimeout(this._timer)
                }
                _createNetworkChannel() {
                    throw new Error("not implemented")
                }
                _createMirrorNetworkChannel() {
                    throw new Error("not implemented")
                }
                _scheduleNetworkUpdate() {
                    this._timer = setTimeout(async () => {
                        try {
                            const t = await y.a.addressBookQueryConstructor().setFileId(m.a.ADDRESS_BOOK).execute(this);
                            this.setNetworkFromAddressBook(t), this._isShutdown || this._scheduleNetworkUpdate()
                        } catch (t) {
                            I.a.trace("failed to update client address book: " + t.toString())
                        }
                    }, this._networkUpdatePeriod)
                }
                get isClientShutDown() {
                    return this._isShutdown
                }
            } {
                constructor(t) {
                    if (super(t), null != t)
                        if ("string" == typeof t.network) switch (t.network) {
                            case "mainnet":
                                this.setNetwork(p.MAINNET), this.setLedgerId(c.a.MAINNET);
                                break;
                            case "testnet":
                                this.setNetwork(p.TESTNET), this.setLedgerId(c.a.TESTNET);
                                break;
                            case "previewnet":
                                this.setNetwork(p.PREVIEWNET), this.setLedgerId(c.a.PREVIEWNET);
                                break;
                            default:
                                throw new Error("unknown network: " + t.network)
                        } else null != t.network && this.setNetwork(t.network)
                }
                static fromConfig(t) {
                    return new WebClient_WebClient("string" == typeof t ? JSON.parse(t) : t)
                }
                static forNetwork(t) {
                    return new WebClient_WebClient({
                        network: t,
                        scheduleNetworkUpdate: !1
                    })
                }
                static forName(t) {
                    return new WebClient_WebClient({
                        network: t,
                        scheduleNetworkUpdate: !1
                    })
                }
                static forMainnet() {
                    return new WebClient_WebClient({
                        network: "mainnet",
                        scheduleNetworkUpdate: !1
                    })
                }
                static forTestnet() {
                    return new WebClient_WebClient({
                        network: "testnet",
                        scheduleNetworkUpdate: !1
                    })
                }
                static forPreviewnet() {
                    return new WebClient_WebClient({
                        network: "previewnet",
                        scheduleNetworkUpdate: !1
                    })
                }
                setNetwork(t) {
                    if ("string" == typeof t) switch (t) {
                        case "previewnet":
                            this._network.setNetwork(p.PREVIEWNET);
                            break;
                        case "testnet":
                            this._network.setNetwork(p.TESTNET);
                            break;
                        case "mainnet":
                            this._network.setNetwork(p.MAINNET)
                    } else this._network.setNetwork(t)
                }
                setMirrorNetwork(t) {
                    return "string" == typeof t ? this._mirrorNetwork.setNetwork([]) : this._mirrorNetwork.setNetwork(t), this
                }
                _createNetworkChannel() {
                    return t => new WebChannel_WebChannel(t)
                }
                _createMirrorNetworkChannel() {
                    return () => {
                        throw new Error("mirror support is not supported in browsers")
                    }
                }
            }
        },
        302: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractFunctionParameters
            }));
            var n = r(6),
                a = r(107),
                i = r(10),
                s = r(22),
                o = r.n(s),
                d = r(9);
            class ContractFunctionParameters {
                constructor() {
                    this._selector = new n.b, this._arguments = []
                }
                addString(t) {
                    return this._selector.addString(), this._addParam(t, !0)
                }
                addStringArray(t) {
                    return this._selector.addStringArray(), this._addParam(t, !0)
                }
                addBytes(t) {
                    return this._selector.addBytes(), this._addParam(t, !0)
                }
                addBytes32(t) {
                    if (32 !== t.length) throw new Error("addBytes32 expected array to be of length 32, but received " + t.length);
                    return this._selector.addBytes32(), this._addParam(t, !1)
                }
                addBytesArray(t) {
                    return this._selector.addBytesArray(), this._addParam(t, !0)
                }
                addBytes32Array(t) {
                    for (const [e, r] of t.entries())
                        if (32 !== r.length) throw new Error("addBytes32 expected array to be of length 32, but received " + r.length);
                    return this._selector.addBytes32Array(), this._addParam(t, !0)
                }
                addBool(t) {
                    return this._selector.addBool(), this._addParam(t, !1)
                }
                addInt8(t) {
                    return this._selector.addInt8(), this._addParam(d.b(t), !1)
                }
                addUint8(t) {
                    return this._selector.addUint8(), this._addParam(d.b(t), !1)
                }
                addInt16(t) {
                    return this._selector.addInt16(), this._addParam(d.b(t), !1)
                }
                addUint16(t) {
                    return this._selector.addUint16(), this._addParam(d.b(t), !1)
                }
                addInt24(t) {
                    return this._selector.addInt24(), this._addParam(d.b(t), !1)
                }
                addUint24(t) {
                    return this._selector.addUint24(), this._addParam(d.b(t), !1)
                }
                addInt32(t) {
                    return this._selector.addInt32(), this._addParam(d.b(t), !1)
                }
                addUint32(t) {
                    return this._selector.addUint32(), this._addParam(d.b(t), !1)
                }
                addInt40(t) {
                    return this._selector.addInt40(), this._addParam(d.b(t), !1)
                }
                addUint40(t) {
                    return this._selector.addUint40(), this._addParam(d.b(t), !1)
                }
                addInt48(t) {
                    return this._selector.addInt48(), this._addParam(d.b(t), !1)
                }
                addUint48(t) {
                    return this._selector.addUint48(), this._addParam(d.b(t), !1)
                }
                addInt56(t) {
                    return this._selector.addInt56(), this._addParam(d.b(t), !1)
                }
                addUint56(t) {
                    return this._selector.addUint56(), this._addParam(d.b(t), !1)
                }
                addInt64(t) {
                    return this._selector.addInt64(), this._addParam(d.b(t), !1)
                }
                addUint64(t) {
                    return this._selector.addUint64(), this._addParam(d.b(t), !1)
                }
                addInt72(t) {
                    return this._selector.addInt72(), this._addParam(d.b(t), !1)
                }
                addUint72(t) {
                    return this._selector.addUint72(), this._addParam(d.b(t), !1)
                }
                addInt80(t) {
                    return this._selector.addInt80(), this._addParam(d.b(t), !1)
                }
                addUint80(t) {
                    return this._selector.addUint80(), this._addParam(d.b(t), !1)
                }
                addInt88(t) {
                    return this._selector.addInt88(), this._addParam(d.b(t), !1)
                }
                addUint88(t) {
                    return this._selector.addUint88(), this._addParam(d.b(t), !1)
                }
                addInt96(t) {
                    return this._selector.addInt96(), this._addParam(d.b(t), !1)
                }
                addUint96(t) {
                    return this._selector.addUint96(), this._addParam(d.b(t), !1)
                }
                addInt104(t) {
                    return this._selector.addInt104(), this._addParam(d.b(t), !1)
                }
                addUint104(t) {
                    return this._selector.addUint104(), this._addParam(d.b(t), !1)
                }
                addInt112(t) {
                    return this._selector.addInt112(), this._addParam(d.b(t), !1)
                }
                addUint112(t) {
                    return this._selector.addUint112(), this._addParam(d.b(t), !1)
                }
                addInt120(t) {
                    return this._selector.addInt120(), this._addParam(d.b(t), !1)
                }
                addUint120(t) {
                    return this._selector.addUint120(), this._addParam(d.b(t), !1)
                }
                addInt128(t) {
                    return this._selector.addInt128(), this._addParam(d.b(t), !1)
                }
                addUint128(t) {
                    return this._selector.addUint128(), this._addParam(d.b(t), !1)
                }
                addInt136(t) {
                    return this._selector.addInt136(), this._addParam(d.b(t), !1)
                }
                addUint136(t) {
                    return this._selector.addUint136(), this._addParam(d.b(t), !1)
                }
                addInt144(t) {
                    return this._selector.addInt144(), this._addParam(d.b(t), !1)
                }
                addUint144(t) {
                    return this._selector.addUint144(), this._addParam(d.b(t), !1)
                }
                addInt152(t) {
                    return this._selector.addInt152(), this._addParam(d.b(t), !1)
                }
                addUint152(t) {
                    return this._selector.addUint152(), this._addParam(d.b(t), !1)
                }
                addInt160(t) {
                    return this._selector.addInt160(), this._addParam(d.b(t), !1)
                }
                addUint160(t) {
                    return this._selector.addUint160(), this._addParam(d.b(t), !1)
                }
                addInt168(t) {
                    return this._selector.addInt168(), this._addParam(d.b(t), !1)
                }
                addUint168(t) {
                    return this._selector.addUint168(), this._addParam(d.b(t), !1)
                }
                addInt176(t) {
                    return this._selector.addInt176(), this._addParam(d.b(t), !1)
                }
                addUint176(t) {
                    return this._selector.addUint176(), this._addParam(d.b(t), !1)
                }
                addInt184(t) {
                    return this._selector.addInt184(), this._addParam(d.b(t), !1)
                }
                addUint184(t) {
                    return this._selector.addUint184(), this._addParam(d.b(t), !1)
                }
                addInt192(t) {
                    return this._selector.addInt192(), this._addParam(d.b(t), !1)
                }
                addUint192(t) {
                    return this._selector.addUint192(), this._addParam(d.b(t), !1)
                }
                addInt200(t) {
                    return this._selector.addInt200(), this._addParam(d.b(t), !1)
                }
                addUint200(t) {
                    return this._selector.addUint200(), this._addParam(d.b(t), !1)
                }
                addInt208(t) {
                    return this._selector.addInt208(), this._addParam(d.b(t), !1)
                }
                addUint208(t) {
                    return this._selector.addUint208(), this._addParam(d.b(t), !1)
                }
                addInt216(t) {
                    return this._selector.addInt216(), this._addParam(d.b(t), !1)
                }
                addUint216(t) {
                    return this._selector.addUint216(), this._addParam(d.b(t), !1)
                }
                addInt224(t) {
                    return this._selector.addInt224(), this._addParam(d.b(t), !1)
                }
                addUint224(t) {
                    return this._selector.addUint224(), this._addParam(d.b(t), !1)
                }
                addInt232(t) {
                    return this._selector.addInt232(), this._addParam(d.b(t), !1)
                }
                addUint232(t) {
                    return this._selector.addUint232(), this._addParam(d.b(t), !1)
                }
                addInt240(t) {
                    return this._selector.addInt240(), this._addParam(d.b(t), !1)
                }
                addUint240(t) {
                    return this._selector.addUint240(), this._addParam(d.b(t), !1)
                }
                addInt248(t) {
                    return this._selector.addInt248(), this._addParam(d.b(t), !1)
                }
                addUint248(t) {
                    return this._selector.addUint248(), this._addParam(d.b(t), !1)
                }
                addInt256(t) {
                    return this._selector.addInt256(), this._addParam(d.b(t), !1)
                }
                addUint256(t) {
                    return this._selector.addUint256(), this._addParam(d.b(t), !1)
                }
                addInt8Array(t) {
                    return this._selector.addInt8Array(), this._addParam(d.c(t), !0)
                }
                addUint8Array(t) {
                    return this._selector.addUint8Array(), this._addParam(d.c(t), !0)
                }
                addInt16Array(t) {
                    return this._selector.addInt16Array(), this._addParam(d.c(t), !0)
                }
                addUint16Array(t) {
                    return this._selector.addUint16Array(), this._addParam(d.c(t), !0)
                }
                addInt24Array(t) {
                    return this._selector.addInt24Array(), this._addParam(d.c(t), !0)
                }
                addUint24Array(t) {
                    return this._selector.addUint24Array(), this._addParam(d.c(t), !0)
                }
                addInt32Array(t) {
                    return this._selector.addInt32Array(), this._addParam(d.c(t), !0)
                }
                addUint32Array(t) {
                    return this._selector.addUint32Array(), this._addParam(d.c(t), !0)
                }
                addInt40Array(t) {
                    return this._selector.addInt40Array(), this._addParam(d.c(t), !0)
                }
                addUint40Array(t) {
                    return this._selector.addUint40Array(), this._addParam(d.c(t), !0)
                }
                addInt48Array(t) {
                    return this._selector.addInt48Array(), this._addParam(d.c(t), !0)
                }
                addUint48Array(t) {
                    return this._selector.addUint48Array(), this._addParam(d.c(t), !0)
                }
                addInt56Array(t) {
                    return this._selector.addInt56Array(), this._addParam(d.c(t), !0)
                }
                addUint56Array(t) {
                    return this._selector.addUint56Array(), this._addParam(d.c(t), !0)
                }
                addInt64Array(t) {
                    return this._selector.addInt64Array(), this._addParam(d.c(t), !0)
                }
                addUint64Array(t) {
                    return this._selector.addUint64Array(), this._addParam(d.c(t), !0)
                }
                addInt72Array(t) {
                    return this._selector.addInt72Array(), this._addParam(d.c(t), !0)
                }
                addUint72Array(t) {
                    return this._selector.addUint72Array(), this._addParam(d.c(t), !0)
                }
                addInt80Array(t) {
                    return this._selector.addInt80Array(), this._addParam(d.c(t), !0)
                }
                addUint80Array(t) {
                    return this._selector.addUint80Array(), this._addParam(d.c(t), !0)
                }
                addInt88Array(t) {
                    return this._selector.addInt88Array(), this._addParam(d.c(t), !0)
                }
                addUint88Array(t) {
                    return this._selector.addUint88Array(), this._addParam(d.c(t), !0)
                }
                addInt96Array(t) {
                    return this._selector.addInt96Array(), this._addParam(d.c(t), !0)
                }
                addUint96Array(t) {
                    return this._selector.addUint96Array(), this._addParam(d.c(t), !0)
                }
                addInt104Array(t) {
                    return this._selector.addInt104Array(), this._addParam(d.c(t), !0)
                }
                addUint104Array(t) {
                    return this._selector.addUint104Array(), this._addParam(d.c(t), !0)
                }
                addInt112Array(t) {
                    return this._selector.addInt112Array(), this._addParam(d.c(t), !0)
                }
                addUint112Array(t) {
                    return this._selector.addUint112Array(), this._addParam(d.c(t), !0)
                }
                addInt120Array(t) {
                    return this._selector.addInt120Array(), this._addParam(d.c(t), !0)
                }
                addUint120Array(t) {
                    return this._selector.addUint120Array(), this._addParam(d.c(t), !0)
                }
                addInt128Array(t) {
                    return this._selector.addInt128Array(), this._addParam(d.c(t), !0)
                }
                addUint128Array(t) {
                    return this._selector.addUint128Array(), this._addParam(d.c(t), !0)
                }
                addInt136Array(t) {
                    return this._selector.addInt136Array(), this._addParam(d.c(t), !0)
                }
                addUint136Array(t) {
                    return this._selector.addUint136Array(), this._addParam(d.c(t), !0)
                }
                addInt144Array(t) {
                    return this._selector.addInt144Array(), this._addParam(d.c(t), !0)
                }
                addUint144Array(t) {
                    return this._selector.addUint144Array(), this._addParam(d.c(t), !0)
                }
                addInt152Array(t) {
                    return this._selector.addInt152Array(), this._addParam(d.c(t), !0)
                }
                addUint152Array(t) {
                    return this._selector.addUint152Array(), this._addParam(d.c(t), !0)
                }
                addInt160Array(t) {
                    return this._selector.addInt160Array(), this._addParam(d.c(t), !0)
                }
                addUint160Array(t) {
                    return this._selector.addUint160Array(), this._addParam(d.c(t), !0)
                }
                addInt168Array(t) {
                    return this._selector.addInt168Array(), this._addParam(d.c(t), !0)
                }
                addUint168Array(t) {
                    return this._selector.addUint168Array(), this._addParam(d.c(t), !0)
                }
                addInt176Array(t) {
                    return this._selector.addInt176Array(), this._addParam(d.c(t), !0)
                }
                addUint176Array(t) {
                    return this._selector.addUint176Array(), this._addParam(d.c(t), !0)
                }
                addInt184Array(t) {
                    return this._selector.addInt184Array(), this._addParam(d.c(t), !0)
                }
                addUint184Array(t) {
                    return this._selector.addUint184Array(), this._addParam(d.c(t), !0)
                }
                addInt192Array(t) {
                    return this._selector.addInt192Array(), this._addParam(d.c(t), !0)
                }
                addUint192Array(t) {
                    return this._selector.addUint192Array(), this._addParam(d.c(t), !0)
                }
                addInt200Array(t) {
                    return this._selector.addInt200Array(), this._addParam(d.c(t), !0)
                }
                addUint200Array(t) {
                    return this._selector.addUint200Array(), this._addParam(d.c(t), !0)
                }
                addInt208Array(t) {
                    return this._selector.addInt208Array(), this._addParam(d.c(t), !0)
                }
                addUint208Array(t) {
                    return this._selector.addUint208Array(), this._addParam(d.c(t), !0)
                }
                addInt216Array(t) {
                    return this._selector.addInt216Array(), this._addParam(d.c(t), !0)
                }
                addUint216Array(t) {
                    return this._selector.addUint216Array(), this._addParam(d.c(t), !0)
                }
                addInt224Array(t) {
                    return this._selector.addInt224Array(), this._addParam(d.c(t), !0)
                }
                addUint224Array(t) {
                    return this._selector.addUint224Array(), this._addParam(d.c(t), !0)
                }
                addInt232Array(t) {
                    return this._selector.addInt232Array(), this._addParam(d.c(t), !0)
                }
                addUint232Array(t) {
                    return this._selector.addUint232Array(), this._addParam(d.c(t), !0)
                }
                addInt240Array(t) {
                    return this._selector.addInt240Array(), this._addParam(d.c(t), !0)
                }
                addUint240Array(t) {
                    return this._selector.addUint240Array(), this._addParam(d.c(t), !0)
                }
                addInt248Array(t) {
                    return this._selector.addInt248Array(), this._addParam(d.c(t), !0)
                }
                addUint248Array(t) {
                    return this._selector.addUint248Array(), this._addParam(d.c(t), !0)
                }
                addInt256Array(t) {
                    return this._selector.addInt256Array(), this._addParam(d.c(t), !0)
                }
                addUint256Array(t) {
                    return this._selector.addUint256Array(), this._addParam(d.c(t), !0)
                }
                addAddress(t) {
                    if (40 !== t.length && 42 !== t.length) throw new Error("`address` type requires parameter to be 40 or 42 characters");
                    const e = 40 === t.length ? i.a(t) : i.a(t.substring(2));
                    return this._selector.addAddress(), this._addParam(e, !1)
                }
                addAddressArray(t) {
                    const e = [];
                    for (const [r, n] of t.entries()) {
                        if (40 !== n.length && 42 !== n.length) throw new Error("`address` type requires parameter to be 40 or 42 characters");
                        const t = 40 === n.length ? i.a(n) : i.a(n.substring(2));
                        e.push(t)
                    }
                    return this._selector.addAddressArray(), this._addParam(e, !0)
                }
                addFunction(t, e) {
                    const r = i.a(t),
                        n = e._build();
                    if (20 !== r.length) throw new Error("`function` type requires parameter `address` to be exactly 20 bytes");
                    this._selector.addFunction();
                    const a = new Uint8Array(24);
                    return a.set(r, 0), a.set(n, 20), this._addParam(a, !1)
                }
                _addParam(t, e) {
                    const r = this._selector._paramTypes.length - 1,
                        s = function t(e, r) {
                            let s, u = new Uint8Array(32),
                                h = d.h(u);
                            if (r.array) {
                                if (!Array.isArray(e)) throw new TypeError("SolidityType indicates type is array, but parameter is not an array");
                                const a = [];
                                for (const [n, i] of e.entries()) {
                                    const e = t(i, {
                                        ty: r.ty,
                                        array: !1
                                    });
                                    a.push(e)
                                }
                                const i = a.map(t => t.length).reduce((t, e) => t + e);
                                switch (r.ty) {
                                    case n.a.uint8:
                                    case n.a.int8:
                                    case n.a.uint16:
                                    case n.a.int16:
                                    case n.a.uint32:
                                    case n.a.int32:
                                    case n.a.uint40:
                                    case n.a.int40:
                                    case n.a.uint48:
                                    case n.a.int48:
                                    case n.a.uint56:
                                    case n.a.int56:
                                    case n.a.uint64:
                                    case n.a.int64:
                                    case n.a.uint72:
                                    case n.a.int72:
                                    case n.a.uint80:
                                    case n.a.int80:
                                    case n.a.uint88:
                                    case n.a.int88:
                                    case n.a.uint96:
                                    case n.a.int96:
                                    case n.a.uint104:
                                    case n.a.int104:
                                    case n.a.uint112:
                                    case n.a.int112:
                                    case n.a.uint120:
                                    case n.a.int120:
                                    case n.a.uint128:
                                    case n.a.int128:
                                    case n.a.uint136:
                                    case n.a.int136:
                                    case n.a.uint144:
                                    case n.a.int144:
                                    case n.a.uint152:
                                    case n.a.int152:
                                    case n.a.uint160:
                                    case n.a.int160:
                                    case n.a.uint168:
                                    case n.a.int168:
                                    case n.a.uint176:
                                    case n.a.int176:
                                    case n.a.uint184:
                                    case n.a.int184:
                                    case n.a.uint192:
                                    case n.a.int192:
                                    case n.a.uint200:
                                    case n.a.int200:
                                    case n.a.uint208:
                                    case n.a.int208:
                                    case n.a.uint216:
                                    case n.a.int216:
                                    case n.a.uint224:
                                    case n.a.int224:
                                    case n.a.uint232:
                                    case n.a.int232:
                                    case n.a.uint240:
                                    case n.a.int240:
                                    case n.a.uint248:
                                    case n.a.int248:
                                    case n.a.uint256:
                                    case n.a.int256:
                                    case n.a.bool:
                                    case n.a.bytes32:
                                    case n.a.address:
                                    case n.a.func:
                                        u = new Uint8Array(i + 32);
                                        break;
                                    case n.a.bytes:
                                    case n.a.string:
                                        u = new Uint8Array(32 * a.length + i + 32);
                                        break;
                                    default:
                                        throw new TypeError("Expected param type to be ArgumentType, but received " + r.ty)
                                }
                                h = d.h(u, 28), h.setUint32(0, a.length);
                                let s = 32 * a.length;
                                for (const [t, e] of a.entries()) switch (r.ty) {
                                    case n.a.uint8:
                                    case n.a.int8:
                                    case n.a.uint16:
                                    case n.a.int16:
                                    case n.a.uint24:
                                    case n.a.int24:
                                    case n.a.uint32:
                                    case n.a.int32:
                                    case n.a.uint40:
                                    case n.a.int40:
                                    case n.a.uint48:
                                    case n.a.int48:
                                    case n.a.uint56:
                                    case n.a.int56:
                                    case n.a.uint64:
                                    case n.a.int64:
                                    case n.a.uint72:
                                    case n.a.int72:
                                    case n.a.uint80:
                                    case n.a.int80:
                                    case n.a.uint88:
                                    case n.a.int88:
                                    case n.a.uint96:
                                    case n.a.int96:
                                    case n.a.uint104:
                                    case n.a.int104:
                                    case n.a.uint112:
                                    case n.a.int112:
                                    case n.a.uint120:
                                    case n.a.int120:
                                    case n.a.uint128:
                                    case n.a.int128:
                                    case n.a.uint136:
                                    case n.a.int136:
                                    case n.a.uint144:
                                    case n.a.int144:
                                    case n.a.uint152:
                                    case n.a.int152:
                                    case n.a.uint160:
                                    case n.a.int160:
                                    case n.a.uint168:
                                    case n.a.int168:
                                    case n.a.uint176:
                                    case n.a.int176:
                                    case n.a.uint184:
                                    case n.a.int184:
                                    case n.a.uint192:
                                    case n.a.int192:
                                    case n.a.uint200:
                                    case n.a.int200:
                                    case n.a.uint208:
                                    case n.a.int208:
                                    case n.a.uint216:
                                    case n.a.int216:
                                    case n.a.uint224:
                                    case n.a.int224:
                                    case n.a.uint232:
                                    case n.a.int232:
                                    case n.a.uint240:
                                    case n.a.int240:
                                    case n.a.uint248:
                                    case n.a.int248:
                                    case n.a.uint256:
                                    case n.a.int256:
                                    case n.a.bool:
                                    case n.a.bytes32:
                                    case n.a.address:
                                    case n.a.func:
                                        u.set(e, 32 * t + 32);
                                        break;
                                    case n.a.bytes:
                                    case n.a.string:
                                        const a = d.h(u, 32 * (t + 1) + 28);
                                        a.setUint32(0, s), u.set(e, a.getUint32(0) + 32), s += e.length;
                                        break;
                                    default:
                                        throw new TypeError("Expected param type to be ArgumentType, but received " + r.ty)
                                }
                                return u
                            }
                            switch (r.ty) {
                                case n.a.uint8:
                                    return c(e, 31, h.setUint8.bind(h)), u;
                                case n.a.int8:
                                    return c(e, 31, h.setInt8.bind(h)), u;
                                case n.a.uint16:
                                    return c(e, 30, h.setUint16.bind(h)), u;
                                case n.a.int16:
                                    return c(e, 30, h.setInt16.bind(h)), u;
                                case n.a.uint24:
                                    return c(e, 28, h.setUint32.bind(h)), u;
                                case n.a.int24:
                                    return c(e, 28, h.setInt32.bind(h)), u;
                                case n.a.uint32:
                                    return c(e, 28, h.setUint32.bind(h)), u;
                                case n.a.int32:
                                    return c(e, 28, h.setInt32.bind(h)), u;
                                case n.a.uint40:
                                case n.a.int40:
                                case n.a.uint48:
                                case n.a.int48:
                                case n.a.uint56:
                                case n.a.int56:
                                case n.a.uint64:
                                case n.a.int64:
                                case n.a.uint72:
                                case n.a.int72:
                                case n.a.uint80:
                                case n.a.int80:
                                case n.a.uint88:
                                case n.a.int88:
                                case n.a.uint96:
                                case n.a.int96:
                                case n.a.uint104:
                                case n.a.int104:
                                case n.a.uint112:
                                case n.a.int112:
                                case n.a.uint120:
                                case n.a.int120:
                                case n.a.uint128:
                                case n.a.int128:
                                case n.a.uint136:
                                case n.a.int136:
                                case n.a.uint144:
                                case n.a.int144:
                                case n.a.uint152:
                                case n.a.int152:
                                case n.a.uint160:
                                case n.a.int160:
                                case n.a.uint168:
                                case n.a.int168:
                                case n.a.uint176:
                                case n.a.int176:
                                case n.a.uint184:
                                case n.a.int184:
                                case n.a.uint192:
                                case n.a.int192:
                                case n.a.uint200:
                                case n.a.int200:
                                case n.a.uint208:
                                case n.a.int208:
                                case n.a.uint216:
                                case n.a.int216:
                                case n.a.uint224:
                                case n.a.int224:
                                case n.a.uint232:
                                case n.a.int232:
                                case n.a.uint240:
                                case n.a.int240:
                                case n.a.uint248:
                                case n.a.int248:
                                case n.a.int256:
                                case n.a.uint256:
                                    if (o.a.isBigNumber(e)) {
                                        let t = e.toString(16);
                                        t.length % 2 == 1 && (t = "0" + t);
                                        const r = i.a(t);
                                        u.set(r, 32 - r.length)
                                    }
                                    return u;
                                case n.a.address:
                                    return u.set(e, 12), u;
                                case n.a.bool:
                                    return u[31] = e ? 1 : 0, u;
                                case n.a.func:
                                    return u.set(e, 8), u;
                                case n.a.bytes32:
                                    return u.set(e, 0), u;
                                case n.a.bytes:
                                case n.a.string:
                                    return s = e instanceof Uint8Array ? e : a.b(e), u = Math.floor(s.length / 32) >= 0 ? 0 !== Math.floor(s.length % 32) ? new Uint8Array(32 * (Math.floor(s.length / 32) + 1) + 32) : new Uint8Array(32 * Math.floor(s.length / 32) + 32) : new Uint8Array(64), u.set(s, 32), h = d.h(u, 28), h.setUint32(0, s.length), u;
                                default:
                                    throw new Error("Unsupported argument type: " + r.toString())
                            }
                        }(t, this._selector._paramTypes[r]);
                    return this._arguments.push({
                        dynamic: e,
                        value: s
                    }), this
                }
                _build(t) {
                    const e = null != t,
                        r = e ? 4 : 0,
                        n = 0 === this._arguments.length ? r : 32 * this._arguments.length + this._arguments.map(t => t.dynamic ? t.value.length : 0).reduce((t, e) => t + e) + r,
                        a = new Uint8Array(n);
                    e && a.set(this._selector._build(t), 0);
                    let i = 32 * this._arguments.length;
                    for (const [t, {
                            dynamic: e,
                            value: n
                        }] of this._arguments.entries())
                        if (e) {
                            const e = d.h(a, r + 32 * t + 28);
                            e.setUint32(0, i), a.set(n, e.getUint32(0) + r), i += n.length
                        } else a.set(n, r + 32 * t);
                    return a
                }
            }

            function c(t, e, r) {
                r(e, o.a.isBigNumber(t) ? t.toNumber() : t)
            }
        },
        311: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractFunctionResult
            }));
            var n = r(700),
                a = r(40),
                i = r(5),
                s = r(22),
                o = r.n(s),
                d = r(10),
                c = r(107),
                u = r(9),
                h = r(1),
                l = r.n(h);
            class ContractFunctionResult {
                constructor(t) {
                    this._createResult = t._createResult, this.contractId = t.contractId, this.bytes = t.bytes, this.errorMessage = t.errorMessage, this.bloom = t.bloom, this.gasUsed = t.gasUsed, this.logs = t.logs, this.createdContractIds = t.createdContractIds, this.evmAddress = t.evmAddress, this.stateChanges = t.stateChanges, this.gas = t.gas, this.amount = t.amount, this.functionParameters = t.functionParameters, this.senderAccountId = t.senderAccountId
                }
                static _fromProtobuf(t, e) {
                    const r = t.contractID,
                        s = t.gasUsed,
                        o = t.gas ? t.gas : -1,
                        d = t.amount ? t.amount : -1;
                    return new ContractFunctionResult({
                        _createResult: e,
                        bytes: t.contractCallResult,
                        contractId: null != r ? a.a._fromProtobuf(r) : null,
                        errorMessage: null != t.errorMessage ? t.errorMessage : null,
                        bloom: t.bloom,
                        gasUsed: s instanceof l.a ? s : l.a.fromValue(s),
                        logs: (null != t.logInfo ? t.logInfo : []).map(t => n.a._fromProtobuf(t)),
                        createdContractIds: (null != t.createdContractIDs ? t.createdContractIDs : []).map(t => a.a._fromProtobuf(t)),
                        evmAddress: null != t.evmAddress && null != t.evmAddress.value ? t.evmAddress.value : null,
                        stateChanges: [],
                        gas: o instanceof l.a ? o : l.a.fromValue(o),
                        amount: d instanceof l.a ? d : l.a.fromValue(d),
                        functionParameters: t.functionParameters,
                        senderAccountId: null != t.senderId ? i.a._fromProtobuf(t.senderId) : null
                    })
                }
                asBytes() {
                    return this.bytes
                }
                getString(t) {
                    return c.a(this.getBytes(t))
                }
                getBytes(t) {
                    const e = this.getInt32(t),
                        r = u.h(this.bytes).getInt32(e + 28);
                    return this.bytes.subarray(e + 32, e + 32 + r)
                }
                getBytes32(t) {
                    return this.bytes.subarray(32 * (null != t ? t : 0), 32 * (null != t ? t : 0) + 32)
                }
                getBool(t) {
                    return 0 !== this.bytes[32 * (null != t ? t : 0) + 31]
                }
                getInt8(t) {
                    return this.bytes[32 * (null != t ? t : 0) + 31]
                }
                getUint8(t) {
                    return this.bytes[32 * (null != t ? t : 0) + 31]
                }
                getInt32(t) {
                    const e = 32 * (null != t ? t : 0) + 28;
                    return u.h(this.bytes).getInt32(e)
                }
                getUint32(t) {
                    const e = 32 * (null != t ? t : 0) + 28;
                    return u.h(this.bytes).getUint32(e)
                }
                getInt40(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(27, 32)), 16)
                }
                getUint40(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(27, 32)), 16)
                }
                getInt48(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(26, 32)), 16)
                }
                getUint48(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(26, 32)), 16)
                }
                getInt56(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(25, 32)), 16)
                }
                getUint56(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(25, 32)), 16)
                }
                getInt64(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(24, 32)), 16)
                }
                getUint64(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(24, 32)), 16)
                }
                getInt72(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(23, 32)), 16)
                }
                getUint72(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(23, 32)), 16)
                }
                getInt80(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(22, 32)), 16)
                }
                getUint80(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(22, 32)), 16)
                }
                getInt88(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(21, 32)), 16)
                }
                getUint88(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(21, 32)), 16)
                }
                getInt96(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(20, 32)), 16)
                }
                getUint96(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(20, 32)), 16)
                }
                getInt104(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(19, 32)), 16)
                }
                getUint104(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(19, 32)), 16)
                }
                getInt112(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(18, 32)), 16)
                }
                getUint112(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(18, 32)), 16)
                }
                getInt120(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(17, 32)), 16)
                }
                getUint120(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(17, 32)), 16)
                }
                getInt128(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(16, 32)), 16)
                }
                getUint128(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(16, 32)), 16)
                }
                getInt136(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(15, 32)), 16)
                }
                getUint136(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(15, 32)), 16)
                }
                getInt144(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(14, 32)), 16)
                }
                getUint144(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(14, 32)), 16)
                }
                getInt152(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(13, 32)), 16)
                }
                getUint152(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(13, 32)), 16)
                }
                getInt160(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(12, 32)), 16)
                }
                getUint160(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(12, 32)), 16)
                }
                getInt168(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(11, 32)), 16)
                }
                getUint168(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(11, 32)), 16)
                }
                getInt176(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(10, 32)), 16)
                }
                getUint176(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(10, 32)), 16)
                }
                getInt184(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(9, 32)), 16)
                }
                getUint184(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(9, 32)), 16)
                }
                getInt192(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(8, 32)), 16)
                }
                getUint192(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(8, 32)), 16)
                }
                getInt200(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(7, 32)), 16)
                }
                getUint200(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(7, 32)), 16)
                }
                getInt208(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(6, 32)), 16)
                }
                getUint208(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(6, 32)), 16)
                }
                getInt216(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(5, 32)), 16)
                }
                getUint216(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(5, 32)), 16)
                }
                getInt224(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(4, 32)), 16)
                }
                getUint224(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(4, 32)), 16)
                }
                getInt232(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(3, 32)), 16)
                }
                getUint232(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(3, 32)), 16)
                }
                getInt240(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(2, 32)), 16)
                }
                getUint240(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(2, 32)), 16)
                }
                getInt248(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0).subarray(1, 32)), 16)
                }
                getUint248(t) {
                    return new o.a(d.b(this._getBytes32(t).subarray(1, 32)), 16)
                }
                getInt256(t) {
                    return new o.a(d.b(this._getBytes32(null != t ? t : 0)), 16)
                }
                getUint256(t) {
                    return new o.a(d.b(this._getBytes32(t)), 16)
                }
                getAddress(t) {
                    return d.b(this.bytes.subarray(32 * (null != t ? t : 0) + 12, 32 * (null != t ? t : 0) + 32))
                }
                _getBytes32(t) {
                    return this.bytes.subarray(32 * (null != t ? t : 0), 32 * (null != t ? t : 0) + 32)
                }
                _toProtobuf() {
                    return {
                        contractID: null != this.contractId ? this.contractId._toProtobuf() : null,
                        contractCallResult: this.bytes,
                        errorMessage: this.errorMessage,
                        bloom: this.bloom,
                        gasUsed: this.gasUsed,
                        logInfo: this.logs.map(t => t._toProtobuf()),
                        createdContractIDs: this.createdContractIds.map(t => t._toProtobuf()),
                        evmAddress: null != this.evmAddress ? {
                            value: this.evmAddress
                        } : null,
                        gas: this.gas,
                        amount: this.amount,
                        functionParameters: this.functionParameters,
                        senderId: null != this.senderAccountId ? this.senderAccountId._toProtobuf() : null
                    }
                }
            }
        },
        40: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractId
            }));
            var n = r(42),
                a = r(25),
                i = r(11),
                s = r(44),
                o = r(10),
                d = r(1),
                c = r.n(d);
            class ContractId extends a.a {
                constructor(t, e, r, a) {
                    super();
                    const i = n.b(t, e, r);
                    this.shard = i.shard, this.realm = i.realm, this.num = i.num, this.evmAddress = null != a ? a : null, this._checksum = null
                }
                static fromEvmAddress(t, e, r) {
                    return new ContractId(t, e, 0, o.a(r))
                }
                static fromString(t) {
                    const e = n.e(t);
                    if (Number.isNaN(e.shard) || Number.isNaN(e.realm)) throw new Error("invalid format for entity ID");
                    const r = null != e.shard ? c.a.fromString(e.shard) : c.a.ZERO,
                        a = null != e.realm ? c.a.fromString(e.realm) : c.a.ZERO,
                        [i, s] = e.numOrHex.length < 40 ? [c.a.fromString(e.numOrHex), void 0] : [c.a.ZERO, o.a(e.numOrHex)];
                    return new ContractId(r, a, i, s)
                }
                static _fromProtobuf(t) {
                    return new ContractId(null != t.shardNum ? t.shardNum : 0, null != t.realmNum ? t.realmNum : 0, null != t.contractNum ? t.contractNum : 0)
                }
                get checksum() {
                    return this._checksum
                }
                validate(t) {
                    console.warn("Deprecated: Use `validateChecksum` instead"), this.validateChecksum(t)
                }
                validateChecksum(t) {
                    n.h(this.shard, this.realm, this.num, this._checksum, t)
                }
                static fromBytes(t) {
                    return ContractId._fromProtobuf(i.proto.ContractID.decode(t))
                }
                static fromSolidityAddress(t) {
                    const [e, r, a] = n.c(t);
                    return new ContractId(e, r, a)
                }
                toSolidityAddress() {
                    return null != this.evmAddress ? o.b(this.evmAddress) : n.f([this.shard, this.realm, this.num])
                }
                _toProtobuf() {
                    return {
                        contractNum: this.num,
                        shardNum: this.shard,
                        realmNum: this.realm,
                        evmAddress: this.evmAddress
                    }
                }
                toString() {
                    return null != this.evmAddress ? `${this.shard.toString()}.${this.realm.toString()}.${o.b(this.evmAddress)}` : `${this.shard.toString()}.${this.realm.toString()}.${this.num.toString()}`
                }
                toStringWithChecksum(t) {
                    return n.g(this.toString(), t)
                }
                toBytes() {
                    return i.proto.ContractID.encode(this._toProtobuf()).finish()
                }
                clone() {
                    const t = new ContractId(this);
                    return t._checksum = this._checksum, t.evmAddress = this.evmAddress, t
                }
                compare(t) {
                    return n.a([this.shard, this.realm, this.num], [t.shard, t.realm, t.num])
                }
                _toProtobufKey() {
                    return {
                        contractID: this._toProtobuf()
                    }
                }
                static __fromProtobufKey(t) {
                    return ContractId._fromProtobuf(t)
                }
            }
            s.a.setContractId(t => ContractId.__fromProtobufKey(t))
        },
        6: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return s
            })), r.d(e, "b", (function() {
                return ContractFunctionSelector
            }));
            var n = r(2329),
                a = r(10),
                i = r(107);
            const s = {
                uint8: 0,
                int8: 1,
                uint16: 2,
                int16: 3,
                uint24: 4,
                int24: 5,
                uint32: 6,
                int32: 7,
                uint40: 8,
                int40: 9,
                uint48: 10,
                int48: 11,
                uint56: 12,
                int56: 13,
                uint64: 14,
                int64: 15,
                uint72: 16,
                int72: 17,
                uint80: 18,
                int80: 19,
                uint88: 20,
                int88: 21,
                uint96: 22,
                int96: 23,
                uint104: 24,
                int104: 25,
                uint112: 26,
                int112: 27,
                uint120: 28,
                int120: 29,
                uint128: 30,
                int128: 31,
                uint136: 32,
                int136: 33,
                uint144: 34,
                int144: 35,
                uint152: 36,
                int152: 37,
                uint160: 38,
                int160: 39,
                uint168: 40,
                int168: 41,
                uint176: 42,
                int176: 43,
                uint184: 44,
                int184: 45,
                uint192: 46,
                int192: 47,
                uint200: 48,
                int200: 49,
                uint208: 50,
                int208: 51,
                uint216: 52,
                int216: 53,
                uint224: 54,
                int224: 55,
                uint232: 56,
                int232: 57,
                uint240: 58,
                int240: 59,
                uint248: 60,
                int248: 61,
                uint256: 62,
                int256: 63,
                string: 64,
                bool: 65,
                bytes: 66,
                bytes32: 67,
                address: 68,
                func: 69
            };
            class ContractFunctionSelector {
                constructor(t) {
                    this.name = null, this._params = "", this._paramTypes = [], null != t && (this._name = t)
                }
                addString() {
                    return this._addParam({
                        ty: s.string,
                        array: !1
                    })
                }
                addStringArray() {
                    return this._addParam({
                        ty: s.string,
                        array: !0
                    })
                }
                addBytes() {
                    return this._addParam({
                        ty: s.bytes,
                        array: !1
                    })
                }
                addBytes32() {
                    return this._addParam({
                        ty: s.bytes32,
                        array: !1
                    })
                }
                addBytesArray() {
                    return this._addParam({
                        ty: s.bytes,
                        array: !0
                    })
                }
                addBytes32Array() {
                    return this._addParam({
                        ty: s.bytes32,
                        array: !0
                    })
                }
                addInt8() {
                    return this._addParam({
                        ty: s.int8,
                        array: !1
                    })
                }
                addUint8() {
                    return this._addParam({
                        ty: s.uint8,
                        array: !1
                    })
                }
                addInt16() {
                    return this._addParam({
                        ty: s.int16,
                        array: !1
                    })
                }
                addUint16() {
                    return this._addParam({
                        ty: s.uint16,
                        array: !1
                    })
                }
                addInt24() {
                    return this._addParam({
                        ty: s.int24,
                        array: !1
                    })
                }
                addUint24() {
                    return this._addParam({
                        ty: s.uint24,
                        array: !1
                    })
                }
                addInt32() {
                    return this._addParam({
                        ty: s.int32,
                        array: !1
                    })
                }
                addUint32() {
                    return this._addParam({
                        ty: s.uint32,
                        array: !1
                    })
                }
                addInt40() {
                    return this._addParam({
                        ty: s.int40,
                        array: !1
                    })
                }
                addUint40() {
                    return this._addParam({
                        ty: s.uint40,
                        array: !1
                    })
                }
                addInt48() {
                    return this._addParam({
                        ty: s.int48,
                        array: !1
                    })
                }
                addUint48() {
                    return this._addParam({
                        ty: s.uint48,
                        array: !1
                    })
                }
                addInt56() {
                    return this._addParam({
                        ty: s.int56,
                        array: !1
                    })
                }
                addUint56() {
                    return this._addParam({
                        ty: s.uint56,
                        array: !1
                    })
                }
                addInt64() {
                    return this._addParam({
                        ty: s.int64,
                        array: !1
                    })
                }
                addUint64() {
                    return this._addParam({
                        ty: s.uint64,
                        array: !1
                    })
                }
                addInt72() {
                    return this._addParam({
                        ty: s.int72,
                        array: !1
                    })
                }
                addUint72() {
                    return this._addParam({
                        ty: s.uint72,
                        array: !1
                    })
                }
                addInt80() {
                    return this._addParam({
                        ty: s.int80,
                        array: !1
                    })
                }
                addUint80() {
                    return this._addParam({
                        ty: s.uint80,
                        array: !1
                    })
                }
                addInt88() {
                    return this._addParam({
                        ty: s.int88,
                        array: !1
                    })
                }
                addUint88() {
                    return this._addParam({
                        ty: s.uint88,
                        array: !1
                    })
                }
                addInt96() {
                    return this._addParam({
                        ty: s.int96,
                        array: !1
                    })
                }
                addUint96() {
                    return this._addParam({
                        ty: s.uint96,
                        array: !1
                    })
                }
                addInt104() {
                    return this._addParam({
                        ty: s.int104,
                        array: !1
                    })
                }
                addUint104() {
                    return this._addParam({
                        ty: s.uint104,
                        array: !1
                    })
                }
                addInt112() {
                    return this._addParam({
                        ty: s.int112,
                        array: !1
                    })
                }
                addUint112() {
                    return this._addParam({
                        ty: s.uint112,
                        array: !1
                    })
                }
                addInt120() {
                    return this._addParam({
                        ty: s.int120,
                        array: !1
                    })
                }
                addUint120() {
                    return this._addParam({
                        ty: s.uint120,
                        array: !1
                    })
                }
                addInt128() {
                    return this._addParam({
                        ty: s.int128,
                        array: !1
                    })
                }
                addUint128() {
                    return this._addParam({
                        ty: s.uint128,
                        array: !1
                    })
                }
                addInt136() {
                    return this._addParam({
                        ty: s.int136,
                        array: !1
                    })
                }
                addUint136() {
                    return this._addParam({
                        ty: s.uint136,
                        array: !1
                    })
                }
                addInt144() {
                    return this._addParam({
                        ty: s.int144,
                        array: !1
                    })
                }
                addUint144() {
                    return this._addParam({
                        ty: s.uint144,
                        array: !1
                    })
                }
                addInt152() {
                    return this._addParam({
                        ty: s.int152,
                        array: !1
                    })
                }
                addUint152() {
                    return this._addParam({
                        ty: s.uint152,
                        array: !1
                    })
                }
                addInt160() {
                    return this._addParam({
                        ty: s.int160,
                        array: !1
                    })
                }
                addUint160() {
                    return this._addParam({
                        ty: s.uint160,
                        array: !1
                    })
                }
                addInt168() {
                    return this._addParam({
                        ty: s.int168,
                        array: !1
                    })
                }
                addUint168() {
                    return this._addParam({
                        ty: s.uint168,
                        array: !1
                    })
                }
                addInt176() {
                    return this._addParam({
                        ty: s.int176,
                        array: !1
                    })
                }
                addUint176() {
                    return this._addParam({
                        ty: s.uint176,
                        array: !1
                    })
                }
                addInt184() {
                    return this._addParam({
                        ty: s.int184,
                        array: !1
                    })
                }
                addUint184() {
                    return this._addParam({
                        ty: s.uint184,
                        array: !1
                    })
                }
                addInt192() {
                    return this._addParam({
                        ty: s.int192,
                        array: !1
                    })
                }
                addUint192() {
                    return this._addParam({
                        ty: s.uint192,
                        array: !1
                    })
                }
                addInt200() {
                    return this._addParam({
                        ty: s.int200,
                        array: !1
                    })
                }
                addUint200() {
                    return this._addParam({
                        ty: s.uint200,
                        array: !1
                    })
                }
                addInt208() {
                    return this._addParam({
                        ty: s.int208,
                        array: !1
                    })
                }
                addUint208() {
                    return this._addParam({
                        ty: s.uint208,
                        array: !1
                    })
                }
                addInt216() {
                    return this._addParam({
                        ty: s.int216,
                        array: !1
                    })
                }
                addUint216() {
                    return this._addParam({
                        ty: s.uint216,
                        array: !1
                    })
                }
                addInt224() {
                    return this._addParam({
                        ty: s.int224,
                        array: !1
                    })
                }
                addUint224() {
                    return this._addParam({
                        ty: s.uint224,
                        array: !1
                    })
                }
                addInt232() {
                    return this._addParam({
                        ty: s.int232,
                        array: !1
                    })
                }
                addUint232() {
                    return this._addParam({
                        ty: s.uint232,
                        array: !1
                    })
                }
                addInt240() {
                    return this._addParam({
                        ty: s.int240,
                        array: !1
                    })
                }
                addUint240() {
                    return this._addParam({
                        ty: s.uint240,
                        array: !1
                    })
                }
                addInt248() {
                    return this._addParam({
                        ty: s.int248,
                        array: !1
                    })
                }
                addUint248() {
                    return this._addParam({
                        ty: s.uint248,
                        array: !1
                    })
                }
                addInt256() {
                    return this._addParam({
                        ty: s.int256,
                        array: !1
                    })
                }
                addUint256() {
                    return this._addParam({
                        ty: s.uint256,
                        array: !1
                    })
                }
                addInt8Array() {
                    return this._addParam({
                        ty: s.int8,
                        array: !0
                    })
                }
                addUint8Array() {
                    return this._addParam({
                        ty: s.uint8,
                        array: !0
                    })
                }
                addInt16Array() {
                    return this._addParam({
                        ty: s.int16,
                        array: !0
                    })
                }
                addUint16Array() {
                    return this._addParam({
                        ty: s.uint16,
                        array: !0
                    })
                }
                addInt24Array() {
                    return this._addParam({
                        ty: s.int24,
                        array: !0
                    })
                }
                addUint24Array() {
                    return this._addParam({
                        ty: s.uint24,
                        array: !0
                    })
                }
                addInt32Array() {
                    return this._addParam({
                        ty: s.int32,
                        array: !0
                    })
                }
                addUint32Array() {
                    return this._addParam({
                        ty: s.uint32,
                        array: !0
                    })
                }
                addInt40Array() {
                    return this._addParam({
                        ty: s.int40,
                        array: !0
                    })
                }
                addUint40Array() {
                    return this._addParam({
                        ty: s.uint40,
                        array: !0
                    })
                }
                addInt48Array() {
                    return this._addParam({
                        ty: s.int48,
                        array: !0
                    })
                }
                addUint48Array() {
                    return this._addParam({
                        ty: s.uint48,
                        array: !0
                    })
                }
                addInt56Array() {
                    return this._addParam({
                        ty: s.int56,
                        array: !0
                    })
                }
                addUint56Array() {
                    return this._addParam({
                        ty: s.uint56,
                        array: !0
                    })
                }
                addInt64Array() {
                    return this._addParam({
                        ty: s.int64,
                        array: !0
                    })
                }
                addUint64Array() {
                    return this._addParam({
                        ty: s.uint64,
                        array: !0
                    })
                }
                addInt72Array() {
                    return this._addParam({
                        ty: s.int72,
                        array: !0
                    })
                }
                addUint72Array() {
                    return this._addParam({
                        ty: s.uint72,
                        array: !0
                    })
                }
                addInt80Array() {
                    return this._addParam({
                        ty: s.int80,
                        array: !0
                    })
                }
                addUint80Array() {
                    return this._addParam({
                        ty: s.uint80,
                        array: !0
                    })
                }
                addInt88Array() {
                    return this._addParam({
                        ty: s.int88,
                        array: !0
                    })
                }
                addUint88Array() {
                    return this._addParam({
                        ty: s.uint88,
                        array: !0
                    })
                }
                addInt96Array() {
                    return this._addParam({
                        ty: s.int96,
                        array: !0
                    })
                }
                addUint96Array() {
                    return this._addParam({
                        ty: s.uint96,
                        array: !0
                    })
                }
                addInt104Array() {
                    return this._addParam({
                        ty: s.int104,
                        array: !0
                    })
                }
                addUint104Array() {
                    return this._addParam({
                        ty: s.uint104,
                        array: !0
                    })
                }
                addInt112Array() {
                    return this._addParam({
                        ty: s.int112,
                        array: !0
                    })
                }
                addUint112Array() {
                    return this._addParam({
                        ty: s.uint112,
                        array: !0
                    })
                }
                addInt120Array() {
                    return this._addParam({
                        ty: s.int120,
                        array: !0
                    })
                }
                addUint120Array() {
                    return this._addParam({
                        ty: s.uint120,
                        array: !0
                    })
                }
                addInt128Array() {
                    return this._addParam({
                        ty: s.int128,
                        array: !0
                    })
                }
                addUint128Array() {
                    return this._addParam({
                        ty: s.uint128,
                        array: !0
                    })
                }
                addInt136Array() {
                    return this._addParam({
                        ty: s.int136,
                        array: !0
                    })
                }
                addUint136Array() {
                    return this._addParam({
                        ty: s.uint136,
                        array: !0
                    })
                }
                addInt144Array() {
                    return this._addParam({
                        ty: s.int144,
                        array: !0
                    })
                }
                addUint144Array() {
                    return this._addParam({
                        ty: s.uint144,
                        array: !0
                    })
                }
                addInt152Array() {
                    return this._addParam({
                        ty: s.int152,
                        array: !0
                    })
                }
                addUint152Array() {
                    return this._addParam({
                        ty: s.uint152,
                        array: !0
                    })
                }
                addInt160Array() {
                    return this._addParam({
                        ty: s.int160,
                        array: !0
                    })
                }
                addUint160Array() {
                    return this._addParam({
                        ty: s.uint160,
                        array: !0
                    })
                }
                addInt168Array() {
                    return this._addParam({
                        ty: s.int168,
                        array: !0
                    })
                }
                addUint168Array() {
                    return this._addParam({
                        ty: s.uint168,
                        array: !0
                    })
                }
                addInt176Array() {
                    return this._addParam({
                        ty: s.int176,
                        array: !0
                    })
                }
                addUint176Array() {
                    return this._addParam({
                        ty: s.uint176,
                        array: !0
                    })
                }
                addInt184Array() {
                    return this._addParam({
                        ty: s.int184,
                        array: !0
                    })
                }
                addUint184Array() {
                    return this._addParam({
                        ty: s.uint184,
                        array: !0
                    })
                }
                addInt192Array() {
                    return this._addParam({
                        ty: s.int192,
                        array: !0
                    })
                }
                addUint192Array() {
                    return this._addParam({
                        ty: s.uint192,
                        array: !0
                    })
                }
                addInt200Array() {
                    return this._addParam({
                        ty: s.int200,
                        array: !0
                    })
                }
                addUint200Array() {
                    return this._addParam({
                        ty: s.uint200,
                        array: !0
                    })
                }
                addInt208Array() {
                    return this._addParam({
                        ty: s.int208,
                        array: !0
                    })
                }
                addUint208Array() {
                    return this._addParam({
                        ty: s.uint208,
                        array: !0
                    })
                }
                addInt216Array() {
                    return this._addParam({
                        ty: s.int216,
                        array: !0
                    })
                }
                addUint216Array() {
                    return this._addParam({
                        ty: s.uint216,
                        array: !0
                    })
                }
                addInt224Array() {
                    return this._addParam({
                        ty: s.int224,
                        array: !0
                    })
                }
                addUint224Array() {
                    return this._addParam({
                        ty: s.uint224,
                        array: !0
                    })
                }
                addInt232Array() {
                    return this._addParam({
                        ty: s.int232,
                        array: !0
                    })
                }
                addUint232Array() {
                    return this._addParam({
                        ty: s.uint232,
                        array: !0
                    })
                }
                addInt240Array() {
                    return this._addParam({
                        ty: s.int240,
                        array: !0
                    })
                }
                addUint240Array() {
                    return this._addParam({
                        ty: s.uint240,
                        array: !0
                    })
                }
                addInt248Array() {
                    return this._addParam({
                        ty: s.int248,
                        array: !0
                    })
                }
                addUint248Array() {
                    return this._addParam({
                        ty: s.uint248,
                        array: !0
                    })
                }
                addInt256Array() {
                    return this._addParam({
                        ty: s.int256,
                        array: !0
                    })
                }
                addUint256Array() {
                    return this._addParam({
                        ty: s.uint256,
                        array: !0
                    })
                }
                addBool() {
                    return this._addParam({
                        ty: s.bool,
                        array: !1
                    })
                }
                addAddress() {
                    return this._addParam({
                        ty: s.address,
                        array: !1
                    })
                }
                addAddressArray() {
                    return this._addParam({
                        ty: s.address,
                        array: !0
                    })
                }
                addFunction() {
                    return this._addParam({
                        ty: s.func,
                        array: !1
                    })
                }
                _addParam(t) {
                    return this._paramTypes.length > 0 && (this._params += ","), this._params += function(t) {
                        let e = "";
                        switch (t.ty) {
                            case s.uint8:
                                e = "uint8";
                                break;
                            case s.int8:
                                e = "int8";
                                break;
                            case s.uint16:
                                e = "uint16";
                                break;
                            case s.int16:
                                e = "int16";
                                break;
                            case s.uint24:
                                e = "uint24";
                                break;
                            case s.int24:
                                e = "int24";
                                break;
                            case s.uint32:
                                e = "uint32";
                                break;
                            case s.int32:
                                e = "int32";
                                break;
                            case s.uint40:
                                e = "uint40";
                                break;
                            case s.int40:
                                e = "int40";
                                break;
                            case s.uint48:
                                e = "uint48";
                                break;
                            case s.int48:
                                e = "int48";
                                break;
                            case s.uint56:
                                e = "uint56";
                                break;
                            case s.int56:
                                e = "int56";
                                break;
                            case s.uint64:
                                e = "uint64";
                                break;
                            case s.int64:
                                e = "int64";
                                break;
                            case s.uint72:
                                e = "uint72";
                                break;
                            case s.int72:
                                e = "int72";
                                break;
                            case s.uint80:
                                e = "uint80";
                                break;
                            case s.int80:
                                e = "int80";
                                break;
                            case s.uint88:
                                e = "uint88";
                                break;
                            case s.int88:
                                e = "int88";
                                break;
                            case s.uint96:
                                e = "uint96";
                                break;
                            case s.int96:
                                e = "int96";
                                break;
                            case s.uint104:
                                e = "uint104";
                                break;
                            case s.int104:
                                e = "int104";
                                break;
                            case s.uint112:
                                e = "uint112";
                                break;
                            case s.int112:
                                e = "int112";
                                break;
                            case s.uint120:
                                e = "uint120";
                                break;
                            case s.int120:
                                e = "int120";
                                break;
                            case s.uint128:
                                e = "uint128";
                                break;
                            case s.int128:
                                e = "int128";
                                break;
                            case s.uint136:
                                e = "uint136";
                                break;
                            case s.int136:
                                e = "int136";
                                break;
                            case s.uint144:
                                e = "uint144";
                                break;
                            case s.int144:
                                e = "int144";
                                break;
                            case s.uint152:
                                e = "uint152";
                                break;
                            case s.int152:
                                e = "int152";
                                break;
                            case s.uint160:
                                e = "uint160";
                                break;
                            case s.int160:
                                e = "int160";
                                break;
                            case s.uint168:
                                e = "uint168";
                                break;
                            case s.int168:
                                e = "int168";
                                break;
                            case s.uint176:
                                e = "uint176";
                                break;
                            case s.int176:
                                e = "int176";
                                break;
                            case s.uint184:
                                e = "uint184";
                                break;
                            case s.int184:
                                e = "int184";
                                break;
                            case s.uint192:
                                e = "uint192";
                                break;
                            case s.int192:
                                e = "int192";
                                break;
                            case s.uint200:
                                e = "uint200";
                                break;
                            case s.int200:
                                e = "int200";
                                break;
                            case s.uint208:
                                e = "uint208";
                                break;
                            case s.int208:
                                e = "int208";
                                break;
                            case s.uint216:
                                e = "uint216";
                                break;
                            case s.int216:
                                e = "int216";
                                break;
                            case s.uint224:
                                e = "uint224";
                                break;
                            case s.int224:
                                e = "int224";
                                break;
                            case s.uint232:
                                e = "uint232";
                                break;
                            case s.int232:
                                e = "int232";
                                break;
                            case s.uint240:
                                e = "uint240";
                                break;
                            case s.int240:
                                e = "int240";
                                break;
                            case s.uint248:
                                e = "uint248";
                                break;
                            case s.int248:
                                e = "int248";
                                break;
                            case s.uint256:
                                e = "uint256";
                                break;
                            case s.int256:
                                e = "int256";
                                break;
                            case s.string:
                                e = "string";
                                break;
                            case s.bool:
                                e = "bool";
                                break;
                            case s.bytes:
                                e = "bytes";
                                break;
                            case s.bytes32:
                                e = "bytes32";
                                break;
                            case s.address:
                                e = "address";
                                break;
                            case s.func:
                                e = "function";
                                break;
                            default:
                                e = ""
                        }
                        t.array && (e += "[]");
                        return e
                    }(t), this._paramTypes.push(t), this
                }
                _build(t) {
                    if (null != t) this._name = t;
                    else if (null == this._name) throw new Error("`name` required for ContractFunctionSelector");
                    const e = a.b(i.b(this.toString()));
                    return a.a(Object(n.a)("0x" + e)).slice(0, 4)
                }
                toString() {
                    return `${null!=this._name?this._name.toString():""}(${this._params})`
                }
            }
        },
        700: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractLogInfo
            }));
            var n = r(40);
            class ContractLogInfo {
                constructor(t) {
                    this.contractId = t.contractId, this.bloom = t.bloom, this.topics = t.topics, this.data = t.data, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    return new ContractLogInfo({
                        contractId: n.a._fromProtobuf(t.contractID),
                        bloom: null != t.bloom ? t.bloom : new Uint8Array,
                        topics: null != t.topic ? t.topic : [],
                        data: null != t.data ? t.data : new Uint8Array
                    })
                }
                _toProtobuf() {
                    return {
                        contractID: this.contractId._toProtobuf(),
                        bloom: this.bloom,
                        topic: this.topics,
                        data: this.data
                    }
                }
            }
        },
        705: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractCreateTransaction
            }));
            var n = r(17),
                a = r(5),
                i = r(45),
                s = r(302),
                o = r(7),
                d = r(1),
                c = r.n(d),
                u = r(46),
                h = r(25);
            class ContractCreateTransaction extends o.f {
                constructor(t = {}) {
                    super(), this._bytecodeFileId = null, this._bytecode = null, this._adminKey = null, this._gas = null, this._initialBalance = null, this._proxyAccountId = null, this._autoRenewPeriod = new u.a(o.b), this._constructorParameters = null, this._contractMemo = null, this._maxAutomaticTokenAssociations = 0, this._defaultMaxTransactionFee = new n.a(20), this._stakedAccountId = null, this._stakedNodeId = null, this._declineStakingReward = !1, this._autoRenewAccountId = null, null != t.bytecodeFileId && this.setBytecodeFileId(t.bytecodeFileId), null != t.bytecode && this.setBytecode(t.bytecode), null != t.adminKey && this.setAdminKey(t.adminKey), null != t.gas && this.setGas(t.gas), null != t.initialBalance && this.setInitialBalance(t.initialBalance), null != t.proxyAccountId && this.setProxyAccountId(t.proxyAccountId), null != t.autoRenewPeriod && this.setAutoRenewPeriod(t.autoRenewPeriod), null != t.constructorParameters && this.setConstructorParameters(t.constructorParameters), null != t.contractMemo && this.setContractMemo(t.contractMemo), null != t.maxAutomaticTokenAssociations && this.setMaxAutomaticTokenAssociations(t.maxAutomaticTokenAssociations), null != t.stakedAccountId && this.setStakedAccountId(t.stakedAccountId), null != t.stakedNodeId && this.setStakedNodeId(t.stakedNodeId), null != t.declineStakingReward && this.setDeclineStakingReward(t.declineStakingReward), null != t.autoRenewAccountId && this.setAutoRenewAccountId(t.autoRenewAccountId)
                }
                static _fromProtobuf(t, e, r, n, s) {
                    const d = s[0].contractCreateInstance;
                    return o.f._fromProtobufTransactions(new ContractCreateTransaction({
                        bytecodeFileId: null != d.fileID ? i.a._fromProtobuf(d.fileID) : void 0,
                        adminKey: null != d.adminKey ? h.a._fromProtobufKey(d.adminKey) : void 0,
                        gas: null != d.gas ? d.gas : void 0,
                        initialBalance: null != d.initialBalance ? d.initialBalance : void 0,
                        proxyAccountId: null != d.proxyAccountID ? a.a._fromProtobuf(d.proxyAccountID) : void 0,
                        autoRenewPeriod: null != d.autoRenewPeriod && null != d.autoRenewPeriod.seconds ? d.autoRenewPeriod.seconds : void 0,
                        constructorParameters: null != d.constructorParameters ? d.constructorParameters : void 0,
                        contractMemo: null != d.memo ? d.memo : void 0,
                        maxAutomaticTokenAssociations: null != d.maxAutomaticTokenAssociations ? d.maxAutomaticTokenAssociations : void 0,
                        stakedAccountId: null != d.stakedAccountId ? a.a._fromProtobuf(d.stakedAccountId) : void 0,
                        stakedNodeId: null != d.stakedNodeId ? d.stakedNodeId : void 0,
                        declineStakingReward: 1 == d.declineReward,
                        autoRenewAccountId: null != d.autoRenewAccountId ? a.a._fromProtobuf(d.autoRenewAccountId) : void 0
                    }), t, e, r, n, s)
                }
                get bytecodeFileId() {
                    return this._bytecodeFileId
                }
                setBytecodeFileId(t) {
                    return this._requireNotFrozen(), this._bytecodeFileId = "string" == typeof t ? i.a.fromString(t) : t.clone(), this._bytecode = null, this
                }
                get bytecode() {
                    return this._bytecode
                }
                setBytecode(t) {
                    return this._requireNotFrozen(), this._bytecode = t, this._bytecodeFileId = null, this
                }
                get adminKey() {
                    return this._adminKey
                }
                setAdminKey(t) {
                    return this._requireNotFrozen(), this._adminKey = t, this
                }
                get gas() {
                    return this._gas
                }
                setGas(t) {
                    return this._requireNotFrozen(), this._gas = t instanceof c.a ? t : c.a.fromValue(t), this
                }
                get initialBalance() {
                    return this._initialBalance
                }
                setInitialBalance(t) {
                    return this._requireNotFrozen(), this._initialBalance = t instanceof n.a ? t : new n.a(t), this
                }
                get proxyAccountId() {
                    return this._proxyAccountId
                }
                setProxyAccountId(t) {
                    return this._requireNotFrozen(), this._proxyAccountId = t instanceof a.a ? t : a.a.fromString(t), this
                }
                get autoRenewPeriod() {
                    return this._autoRenewPeriod
                }
                setAutoRenewPeriod(t) {
                    return this._requireNotFrozen(), this._autoRenewPeriod = t instanceof u.a ? t : new u.a(t), this
                }
                get constructorParameters() {
                    return this._constructorParameters
                }
                setConstructorParameters(t) {
                    return this._requireNotFrozen(), this._constructorParameters = t instanceof s.a ? t._build() : t, this
                }
                get contractMemo() {
                    return this._contractMemo
                }
                setContractMemo(t) {
                    return this._requireNotFrozen(), this._contractMemo = t, this
                }
                get maxAutomaticTokenAssociations() {
                    return this._maxAutomaticTokenAssociations
                }
                setMaxAutomaticTokenAssociations(t) {
                    return this._maxAutomaticTokenAssociations = t, this
                }
                get stakedAccountId() {
                    return this._stakedAccountId
                }
                setStakedAccountId(t) {
                    return this._requireNotFrozen(), this._stakedAccountId = "string" == typeof t ? a.a.fromString(t) : t, this
                }
                get stakedNodeId() {
                    return this._stakedNodeId
                }
                setStakedNodeId(t) {
                    return this._requireNotFrozen(), this._stakedNodeId = c.a.fromValue(t), this
                }
                get declineStakingRewards() {
                    return this._declineStakingReward
                }
                setDeclineStakingReward(t) {
                    return this._requireNotFrozen(), this._declineStakingReward = t, this
                }
                get autoRenewAccountId() {
                    return this._autoRenewAccountId
                }
                setAutoRenewAccountId(t) {
                    return this._requireNotFrozen(), this._autoRenewAccountId = "string" == typeof t ? a.a.fromString(t) : t, this
                }
                _validateChecksums(t) {
                    null != this._bytecodeFileId && this._bytecodeFileId.validateChecksum(t), null != this._proxyAccountId && this._proxyAccountId.validateChecksum(t)
                }
                _execute(t, e) {
                    return t.smartContract.createContract(e)
                }
                _getTransactionDataCase() {
                    return "contractCreateInstance"
                }
                _makeTransactionData() {
                    return {
                        fileID: null != this._bytecodeFileId ? this._bytecodeFileId._toProtobuf() : null,
                        initcode: this._bytecode,
                        adminKey: null != this._adminKey ? this._adminKey._toProtobufKey() : null,
                        gas: this._gas,
                        initialBalance: null != this._initialBalance ? this._initialBalance.toTinybars() : null,
                        proxyAccountID: null != this._proxyAccountId ? this._proxyAccountId._toProtobuf() : null,
                        autoRenewPeriod: this._autoRenewPeriod._toProtobuf(),
                        constructorParameters: this._constructorParameters,
                        memo: this._contractMemo,
                        maxAutomaticTokenAssociations: this._maxAutomaticTokenAssociations,
                        stakedAccountId: null != this.stakedAccountId ? this.stakedAccountId._toProtobuf() : null,
                        stakedNodeId: this.stakedNodeId,
                        declineReward: this.declineStakingRewards,
                        autoRenewAccountId: null != this._autoRenewAccountId ? this._autoRenewAccountId._toProtobuf() : null
                    }
                }
                _getLogId() {
                    return "ContractCreateTransaction:" + this._transactionIds.current.validStart.toString()
                }
            }
            o.e.set("contractCreateInstance", ContractCreateTransaction._fromProtobuf)
        },
        706: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return ContractInfo
            }));
            var n = r(40),
                a = r(5),
                i = r(920),
                s = r(23),
                o = r(46),
                d = r(17),
                c = r(1),
                u = r.n(c),
                h = r(11),
                l = r(925),
                _ = r(25),
                m = r(99);
            const {
                proto: y
            } = h;
            class ContractInfo {
                constructor(t) {
                    this.contractId = t.contractId, this.accountId = t.accountId, this.contractAccountId = t.contractAccountId, this.adminKey = null != t.adminKey ? t.adminKey : null, this.expirationTime = t.expirationTime, this.autoRenewPeriod = t.autoRenewPeriod, this.autoRenewAccountId = t.autoRenewAccountId, this.storage = t.storage, this.contractMemo = t.contractMemo, this.balance = t.balance, this.isDeleted = t.isDeleted, this.tokenRelationships = t.tokenRelationships, this.ledgerId = t.ledgerId, this.stakingInfo = t.stakingInfo, Object.freeze(this)
                }
                static _fromProtobuf(t) {
                    const e = t.autoRenewPeriod.seconds;
                    return new ContractInfo({
                        contractId: n.a._fromProtobuf(t.contractID),
                        accountId: a.a._fromProtobuf(t.accountID),
                        contractAccountId: null != t.contractAccountID ? t.contractAccountID : "",
                        adminKey: null != t.adminKey ? _.a._fromProtobufKey(t.adminKey) : null,
                        expirationTime: s.a._fromProtobuf(t.expirationTime),
                        autoRenewPeriod: new o.a(e),
                        autoRenewAccountId: null != t.autoRenewAccountId ? a.a._fromProtobuf(t.autoRenewAccountId) : null,
                        storage: null != t.storage ? t.storage instanceof u.a ? t.storage : u.a.fromValue(t.storage) : u.a.ZERO,
                        contractMemo: null != t.memo ? t.memo : "",
                        balance: d.a.fromTinybars(null != t.balance ? t.balance : 0),
                        isDeleted: t.deleted,
                        tokenRelationships: l.a._fromProtobuf(null != t.tokenRelationships ? t.tokenRelationships : []),
                        ledgerId: null != t.ledgerId ? m.a.fromBytes(t.ledgerId) : null,
                        stakingInfo: null != t.stakingInfo ? i.a._fromProtobuf(t.stakingInfo) : null
                    })
                }
                _toProtobuf() {
                    return {
                        contractID: this.contractId._toProtobuf(),
                        accountID: this.accountId._toProtobuf(),
                        contractAccountID: this.contractAccountId,
                        adminKey: null != this.adminKey ? this.adminKey._toProtobufKey() : null,
                        expirationTime: this.expirationTime._toProtobuf(),
                        autoRenewPeriod: null != this.autoRenewPeriod ? this.autoRenewPeriod._toProtobuf() : null,
                        autoRenewAccountId: null != this.autoRenewAccountId ? this.autoRenewAccountId._toProtobuf() : null,
                        storage: this.storage,
                        memo: this.contractMemo,
                        balance: this.balance.toTinybars(),
                        deleted: this.isDeleted,
                        tokenRelationships: null != this.tokenRelationships ? this.tokenRelationships._toProtobuf() : null,
                        ledgerId: null != this.ledgerId ? this.ledgerId.toBytes() : null,
                        stakingInfo: null != this.stakingInfo ? this.stakingInfo._toProtobuf() : null
                    }
                }
                static fromBytes(t) {
                    return ContractInfo._fromProtobuf(y.ContractGetInfoResponse.ContractInfo.decode(t))
                }
                toBytes() {
                    return y.ContractGetInfoResponse.ContractInfo.encode(this._toProtobuf()).finish()
                }
            }
        }
    }
]);