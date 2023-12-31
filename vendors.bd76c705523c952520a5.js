(window.webpackJsonp = window.webpackJsonp || []).push([
    [273], {
        5418: function(e, t, r) {
            "use strict";
            var n = r(2);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(r(2355)),
                a = n(r(9397)),
                u = n(r(461));
            class XLMCoin extends u.default {
                constructor({
                    alias: e,
                    notify: t,
                    feeData: r,
                    explorers: n,
                    txWebUrl: o,
                    socket: a
                }) {
                    super({
                        alias: e,
                        notify: t,
                        name: "Stellar",
                        ticker: "XLM",
                        decimal: 7,
                        derivation: "m/44'/148'/0'",
                        unspendableBalance: "10000000",
                        explorers: n,
                        txWebUrl: o,
                        socket: a
                    }), this.fee = r.fee, this.fields.paymentId = !0
                }
                loadWallet(e) {
                    return new Promise(t => {
                        const r = a.default.fromSeed(e);
                        r.derive("m/44'/148'/0'");
                        const n = r.getKeypair(0);
                        this.privateKey = n.secret(), this.address = n.publicKey(), t(this)
                    })
                }
                async getTransaction(e) {
                    const t = this.transactions.filter(t => t.txid === e);
                    return t.length > 0 ? t[0] : {}
                }
                getAddress() {
                    return this.address
                }
                async validateAddress(e) {
                    try {
                        return o.default.StrKey.isValidEd25519PublicKey(e)
                    } catch (e) {
                        return !1
                    }
                }
                async createTransaction({
                    address: e,
                    amount: t,
                    memo: r
                }) {
                    return {
                        address: e,
                        amount: t,
                        paymentId: r
                    }
                }
                async sendTransaction(e) {
                    return this.explorer && this.explorer.sendTransaction(e, this.address, this.privateKey, this.fee)
                }
                async getFee({
                    amount: e = null,
                    isSendAll: t = !1
                } = {}) {
                    if (!e && !t) return super.getFee({
                        amount: e,
                        isSendAll: t
                    });
                    return await this.explorer.getFee()
                }
                updateCoinParamsFromServer(e) {
                    e.feeData && void 0 !== this.fee && void 0 !== e.feeData.fee && (this.fee = e.feeData.fee);
                    const t = e.explorers.find(({
                        className: e
                    }) => "XlmExplorer" === e);
                    this.explorers[0].fee = this.fee, this.explorers[0].baseUrl = t.baseUrl
                }
            }
            var s = XLMCoin;
            t.default = s
        },
        5581: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }(r(252)).config((function(e) {
                e.typedef("Value", e.varOpaque()), e.struct("ScpBallot", [
                    ["counter", e.lookup("Uint32")],
                    ["value", e.lookup("Value")]
                ]), e.enum("ScpStatementType", {
                    scpStPrepare: 0,
                    scpStConfirm: 1,
                    scpStExternalize: 2,
                    scpStNominate: 3
                }), e.struct("ScpNomination", [
                    ["quorumSetHash", e.lookup("Hash")],
                    ["votes", e.varArray(e.lookup("Value"), 2147483647)],
                    ["accepted", e.varArray(e.lookup("Value"), 2147483647)]
                ]), e.struct("ScpStatementPrepare", [
                    ["quorumSetHash", e.lookup("Hash")],
                    ["ballot", e.lookup("ScpBallot")],
                    ["prepared", e.option(e.lookup("ScpBallot"))],
                    ["preparedPrime", e.option(e.lookup("ScpBallot"))],
                    ["nC", e.lookup("Uint32")],
                    ["nH", e.lookup("Uint32")]
                ]), e.struct("ScpStatementConfirm", [
                    ["ballot", e.lookup("ScpBallot")],
                    ["nPrepared", e.lookup("Uint32")],
                    ["nCommit", e.lookup("Uint32")],
                    ["nH", e.lookup("Uint32")],
                    ["quorumSetHash", e.lookup("Hash")]
                ]), e.struct("ScpStatementExternalize", [
                    ["commit", e.lookup("ScpBallot")],
                    ["nH", e.lookup("Uint32")],
                    ["commitQuorumSetHash", e.lookup("Hash")]
                ]), e.union("ScpStatementPledges", {
                    switchOn: e.lookup("ScpStatementType"),
                    switchName: "type",
                    switches: [
                        ["scpStPrepare", "prepare"],
                        ["scpStConfirm", "confirm"],
                        ["scpStExternalize", "externalize"],
                        ["scpStNominate", "nominate"]
                    ],
                    arms: {
                        prepare: e.lookup("ScpStatementPrepare"),
                        confirm: e.lookup("ScpStatementConfirm"),
                        externalize: e.lookup("ScpStatementExternalize"),
                        nominate: e.lookup("ScpNomination")
                    }
                }), e.struct("ScpStatement", [
                    ["nodeId", e.lookup("NodeId")],
                    ["slotIndex", e.lookup("Uint64")],
                    ["pledges", e.lookup("ScpStatementPledges")]
                ]), e.struct("ScpEnvelope", [
                    ["statement", e.lookup("ScpStatement")],
                    ["signature", e.lookup("Signature")]
                ]), e.struct("ScpQuorumSet", [
                    ["threshold", e.lookup("Uint32")],
                    ["validators", e.varArray(e.lookup("PublicKey"), 2147483647)],
                    ["innerSets", e.varArray(e.lookup("ScpQuorumSet"), 2147483647)]
                ]), e.typedef("AccountId", e.lookup("PublicKey")), e.typedef("Thresholds", e.opaque(4)), e.typedef("String32", e.string(32)), e.typedef("String64", e.string(64)), e.typedef("SequenceNumber", e.lookup("Int64")), e.typedef("DataValue", e.varOpaque(64)), e.enum("AssetType", {
                    assetTypeNative: 0,
                    assetTypeCreditAlphanum4: 1,
                    assetTypeCreditAlphanum12: 2
                }), e.struct("AssetAlphaNum4", [
                    ["assetCode", e.opaque(4)],
                    ["issuer", e.lookup("AccountId")]
                ]), e.struct("AssetAlphaNum12", [
                    ["assetCode", e.opaque(12)],
                    ["issuer", e.lookup("AccountId")]
                ]), e.union("Asset", {
                    switchOn: e.lookup("AssetType"),
                    switchName: "type",
                    switches: [
                        ["assetTypeNative", e.void()],
                        ["assetTypeCreditAlphanum4", "alphaNum4"],
                        ["assetTypeCreditAlphanum12", "alphaNum12"]
                    ],
                    arms: {
                        alphaNum4: e.lookup("AssetAlphaNum4"),
                        alphaNum12: e.lookup("AssetAlphaNum12")
                    }
                }), e.struct("Price", [
                    ["n", e.lookup("Int32")],
                    ["d", e.lookup("Int32")]
                ]), e.struct("Liabilities", [
                    ["buying", e.lookup("Int64")],
                    ["selling", e.lookup("Int64")]
                ]), e.enum("ThresholdIndices", {
                    thresholdMasterWeight: 0,
                    thresholdLow: 1,
                    thresholdMed: 2,
                    thresholdHigh: 3
                }), e.enum("LedgerEntryType", {
                    account: 0,
                    trustline: 1,
                    offer: 2,
                    datum: 3
                }), e.struct("Signer", [
                    ["key", e.lookup("SignerKey")],
                    ["weight", e.lookup("Uint32")]
                ]), e.enum("AccountFlags", {
                    authRequiredFlag: 1,
                    authRevocableFlag: 2,
                    authImmutableFlag: 4
                }), e.const("MASK_ACCOUNT_FLAGS", 7), e.union("AccountEntryV1Ext", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("AccountEntryV1", [
                    ["liabilities", e.lookup("Liabilities")],
                    ["ext", e.lookup("AccountEntryV1Ext")]
                ]), e.union("AccountEntryExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()],
                        [1, "v1"]
                    ],
                    arms: {
                        v1: e.lookup("AccountEntryV1")
                    }
                }), e.struct("AccountEntry", [
                    ["accountId", e.lookup("AccountId")],
                    ["balance", e.lookup("Int64")],
                    ["seqNum", e.lookup("SequenceNumber")],
                    ["numSubEntries", e.lookup("Uint32")],
                    ["inflationDest", e.option(e.lookup("AccountId"))],
                    ["flags", e.lookup("Uint32")],
                    ["homeDomain", e.lookup("String32")],
                    ["thresholds", e.lookup("Thresholds")],
                    ["signers", e.varArray(e.lookup("Signer"), 20)],
                    ["ext", e.lookup("AccountEntryExt")]
                ]), e.enum("TrustLineFlags", {
                    authorizedFlag: 1
                }), e.const("MASK_TRUSTLINE_FLAGS", 1), e.union("TrustLineEntryV1Ext", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("TrustLineEntryV1", [
                    ["liabilities", e.lookup("Liabilities")],
                    ["ext", e.lookup("TrustLineEntryV1Ext")]
                ]), e.union("TrustLineEntryExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()],
                        [1, "v1"]
                    ],
                    arms: {
                        v1: e.lookup("TrustLineEntryV1")
                    }
                }), e.struct("TrustLineEntry", [
                    ["accountId", e.lookup("AccountId")],
                    ["asset", e.lookup("Asset")],
                    ["balance", e.lookup("Int64")],
                    ["limit", e.lookup("Int64")],
                    ["flags", e.lookup("Uint32")],
                    ["ext", e.lookup("TrustLineEntryExt")]
                ]), e.enum("OfferEntryFlags", {
                    passiveFlag: 1
                }), e.const("MASK_OFFERENTRY_FLAGS", 1), e.union("OfferEntryExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("OfferEntry", [
                    ["sellerId", e.lookup("AccountId")],
                    ["offerId", e.lookup("Uint64")],
                    ["selling", e.lookup("Asset")],
                    ["buying", e.lookup("Asset")],
                    ["amount", e.lookup("Int64")],
                    ["price", e.lookup("Price")],
                    ["flags", e.lookup("Uint32")],
                    ["ext", e.lookup("OfferEntryExt")]
                ]), e.union("DataEntryExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("DataEntry", [
                    ["accountId", e.lookup("AccountId")],
                    ["dataName", e.lookup("String64")],
                    ["dataValue", e.lookup("DataValue")],
                    ["ext", e.lookup("DataEntryExt")]
                ]), e.union("LedgerEntryData", {
                    switchOn: e.lookup("LedgerEntryType"),
                    switchName: "type",
                    switches: [
                        ["account", "account"],
                        ["trustline", "trustLine"],
                        ["offer", "offer"],
                        ["datum", "data"]
                    ],
                    arms: {
                        account: e.lookup("AccountEntry"),
                        trustLine: e.lookup("TrustLineEntry"),
                        offer: e.lookup("OfferEntry"),
                        data: e.lookup("DataEntry")
                    }
                }), e.union("LedgerEntryExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("LedgerEntry", [
                    ["lastModifiedLedgerSeq", e.lookup("Uint32")],
                    ["data", e.lookup("LedgerEntryData")],
                    ["ext", e.lookup("LedgerEntryExt")]
                ]), e.enum("EnvelopeType", {
                    envelopeTypeScp: 1,
                    envelopeTypeTx: 2,
                    envelopeTypeAuth: 3
                }), e.typedef("UpgradeType", e.varOpaque(128)), e.union("StellarValueExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("StellarValue", [
                    ["txSetHash", e.lookup("Hash")],
                    ["closeTime", e.lookup("Uint64")],
                    ["upgrades", e.varArray(e.lookup("UpgradeType"), 6)],
                    ["ext", e.lookup("StellarValueExt")]
                ]), e.union("LedgerHeaderExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("LedgerHeader", [
                    ["ledgerVersion", e.lookup("Uint32")],
                    ["previousLedgerHash", e.lookup("Hash")],
                    ["scpValue", e.lookup("StellarValue")],
                    ["txSetResultHash", e.lookup("Hash")],
                    ["bucketListHash", e.lookup("Hash")],
                    ["ledgerSeq", e.lookup("Uint32")],
                    ["totalCoins", e.lookup("Int64")],
                    ["feePool", e.lookup("Int64")],
                    ["inflationSeq", e.lookup("Uint32")],
                    ["idPool", e.lookup("Uint64")],
                    ["baseFee", e.lookup("Uint32")],
                    ["baseReserve", e.lookup("Uint32")],
                    ["maxTxSetSize", e.lookup("Uint32")],
                    ["skipList", e.array(e.lookup("Hash"), 4)],
                    ["ext", e.lookup("LedgerHeaderExt")]
                ]), e.enum("LedgerUpgradeType", {
                    ledgerUpgradeVersion: 1,
                    ledgerUpgradeBaseFee: 2,
                    ledgerUpgradeMaxTxSetSize: 3,
                    ledgerUpgradeBaseReserve: 4
                }), e.union("LedgerUpgrade", {
                    switchOn: e.lookup("LedgerUpgradeType"),
                    switchName: "type",
                    switches: [
                        ["ledgerUpgradeVersion", "newLedgerVersion"],
                        ["ledgerUpgradeBaseFee", "newBaseFee"],
                        ["ledgerUpgradeMaxTxSetSize", "newMaxTxSetSize"],
                        ["ledgerUpgradeBaseReserve", "newBaseReserve"]
                    ],
                    arms: {
                        newLedgerVersion: e.lookup("Uint32"),
                        newBaseFee: e.lookup("Uint32"),
                        newMaxTxSetSize: e.lookup("Uint32"),
                        newBaseReserve: e.lookup("Uint32")
                    }
                }), e.struct("LedgerKeyAccount", [
                    ["accountId", e.lookup("AccountId")]
                ]), e.struct("LedgerKeyTrustLine", [
                    ["accountId", e.lookup("AccountId")],
                    ["asset", e.lookup("Asset")]
                ]), e.struct("LedgerKeyOffer", [
                    ["sellerId", e.lookup("AccountId")],
                    ["offerId", e.lookup("Uint64")]
                ]), e.struct("LedgerKeyData", [
                    ["accountId", e.lookup("AccountId")],
                    ["dataName", e.lookup("String64")]
                ]), e.union("LedgerKey", {
                    switchOn: e.lookup("LedgerEntryType"),
                    switchName: "type",
                    switches: [
                        ["account", "account"],
                        ["trustline", "trustLine"],
                        ["offer", "offer"],
                        ["datum", "data"]
                    ],
                    arms: {
                        account: e.lookup("LedgerKeyAccount"),
                        trustLine: e.lookup("LedgerKeyTrustLine"),
                        offer: e.lookup("LedgerKeyOffer"),
                        data: e.lookup("LedgerKeyData")
                    }
                }), e.enum("BucketEntryType", {
                    liveentry: 0,
                    deadentry: 1
                }), e.union("BucketEntry", {
                    switchOn: e.lookup("BucketEntryType"),
                    switchName: "type",
                    switches: [
                        ["liveentry", "liveEntry"],
                        ["deadentry", "deadEntry"]
                    ],
                    arms: {
                        liveEntry: e.lookup("LedgerEntry"),
                        deadEntry: e.lookup("LedgerKey")
                    }
                }), e.struct("TransactionSet", [
                    ["previousLedgerHash", e.lookup("Hash")],
                    ["txes", e.varArray(e.lookup("TransactionEnvelope"), 2147483647)]
                ]), e.struct("TransactionResultPair", [
                    ["transactionHash", e.lookup("Hash")],
                    ["result", e.lookup("TransactionResult")]
                ]), e.struct("TransactionResultSet", [
                    ["results", e.varArray(e.lookup("TransactionResultPair"), 2147483647)]
                ]), e.union("TransactionHistoryEntryExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("TransactionHistoryEntry", [
                    ["ledgerSeq", e.lookup("Uint32")],
                    ["txSet", e.lookup("TransactionSet")],
                    ["ext", e.lookup("TransactionHistoryEntryExt")]
                ]), e.union("TransactionHistoryResultEntryExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("TransactionHistoryResultEntry", [
                    ["ledgerSeq", e.lookup("Uint32")],
                    ["txResultSet", e.lookup("TransactionResultSet")],
                    ["ext", e.lookup("TransactionHistoryResultEntryExt")]
                ]), e.union("LedgerHeaderHistoryEntryExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("LedgerHeaderHistoryEntry", [
                    ["hash", e.lookup("Hash")],
                    ["header", e.lookup("LedgerHeader")],
                    ["ext", e.lookup("LedgerHeaderHistoryEntryExt")]
                ]), e.struct("LedgerScpMessages", [
                    ["ledgerSeq", e.lookup("Uint32")],
                    ["messages", e.varArray(e.lookup("ScpEnvelope"), 2147483647)]
                ]), e.struct("ScpHistoryEntryV0", [
                    ["quorumSets", e.varArray(e.lookup("ScpQuorumSet"), 2147483647)],
                    ["ledgerMessages", e.lookup("LedgerScpMessages")]
                ]), e.union("ScpHistoryEntry", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, "v0"]
                    ],
                    arms: {
                        v0: e.lookup("ScpHistoryEntryV0")
                    }
                }), e.enum("LedgerEntryChangeType", {
                    ledgerEntryCreated: 0,
                    ledgerEntryUpdated: 1,
                    ledgerEntryRemoved: 2,
                    ledgerEntryState: 3
                }), e.union("LedgerEntryChange", {
                    switchOn: e.lookup("LedgerEntryChangeType"),
                    switchName: "type",
                    switches: [
                        ["ledgerEntryCreated", "created"],
                        ["ledgerEntryUpdated", "updated"],
                        ["ledgerEntryRemoved", "removed"],
                        ["ledgerEntryState", "state"]
                    ],
                    arms: {
                        created: e.lookup("LedgerEntry"),
                        updated: e.lookup("LedgerEntry"),
                        removed: e.lookup("LedgerKey"),
                        state: e.lookup("LedgerEntry")
                    }
                }), e.typedef("LedgerEntryChanges", e.varArray(e.lookup("LedgerEntryChange"), 2147483647)), e.struct("OperationMeta", [
                    ["changes", e.lookup("LedgerEntryChanges")]
                ]), e.struct("TransactionMetaV1", [
                    ["txChanges", e.lookup("LedgerEntryChanges")],
                    ["operations", e.varArray(e.lookup("OperationMeta"), 2147483647)]
                ]), e.union("TransactionMeta", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, "operations"],
                        [1, "v1"]
                    ],
                    arms: {
                        operations: e.varArray(e.lookup("OperationMeta"), 2147483647),
                        v1: e.lookup("TransactionMetaV1")
                    }
                }), e.enum("ErrorCode", {
                    errMisc: 0,
                    errDatum: 1,
                    errConf: 2,
                    errAuth: 3,
                    errLoad: 4
                }), e.struct("Error", [
                    ["code", e.lookup("ErrorCode")],
                    ["msg", e.string(100)]
                ]), e.struct("AuthCert", [
                    ["pubkey", e.lookup("Curve25519Public")],
                    ["expiration", e.lookup("Uint64")],
                    ["sig", e.lookup("Signature")]
                ]), e.struct("Hello", [
                    ["ledgerVersion", e.lookup("Uint32")],
                    ["overlayVersion", e.lookup("Uint32")],
                    ["overlayMinVersion", e.lookup("Uint32")],
                    ["networkId", e.lookup("Hash")],
                    ["versionStr", e.string(100)],
                    ["listeningPort", e.int()],
                    ["peerId", e.lookup("NodeId")],
                    ["cert", e.lookup("AuthCert")],
                    ["nonce", e.lookup("Uint256")]
                ]), e.struct("Auth", [
                    ["unused", e.int()]
                ]), e.enum("IpAddrType", {
                    iPv4: 0,
                    iPv6: 1
                }), e.union("PeerAddressIp", {
                    switchOn: e.lookup("IpAddrType"),
                    switchName: "type",
                    switches: [
                        ["iPv4", "ipv4"],
                        ["iPv6", "ipv6"]
                    ],
                    arms: {
                        ipv4: e.opaque(4),
                        ipv6: e.opaque(16)
                    }
                }), e.struct("PeerAddress", [
                    ["ip", e.lookup("PeerAddressIp")],
                    ["port", e.lookup("Uint32")],
                    ["numFailures", e.lookup("Uint32")]
                ]), e.enum("MessageType", {
                    errorMsg: 0,
                    auth: 2,
                    dontHave: 3,
                    getPeer: 4,
                    peer: 5,
                    getTxSet: 6,
                    txSet: 7,
                    transaction: 8,
                    getScpQuorumset: 9,
                    scpQuorumset: 10,
                    scpMessage: 11,
                    getScpState: 12,
                    hello: 13
                }), e.struct("DontHave", [
                    ["type", e.lookup("MessageType")],
                    ["reqHash", e.lookup("Uint256")]
                ]), e.union("StellarMessage", {
                    switchOn: e.lookup("MessageType"),
                    switchName: "type",
                    switches: [
                        ["errorMsg", "error"],
                        ["hello", "hello"],
                        ["auth", "auth"],
                        ["dontHave", "dontHave"],
                        ["getPeer", e.void()],
                        ["peer", "peers"],
                        ["getTxSet", "txSetHash"],
                        ["txSet", "txSet"],
                        ["transaction", "transaction"],
                        ["getScpQuorumset", "qSetHash"],
                        ["scpQuorumset", "qSet"],
                        ["scpMessage", "envelope"],
                        ["getScpState", "getScpLedgerSeq"]
                    ],
                    arms: {
                        error: e.lookup("Error"),
                        hello: e.lookup("Hello"),
                        auth: e.lookup("Auth"),
                        dontHave: e.lookup("DontHave"),
                        peers: e.varArray(e.lookup("PeerAddress"), 100),
                        txSetHash: e.lookup("Uint256"),
                        txSet: e.lookup("TransactionSet"),
                        transaction: e.lookup("TransactionEnvelope"),
                        qSetHash: e.lookup("Uint256"),
                        qSet: e.lookup("ScpQuorumSet"),
                        envelope: e.lookup("StellarMessage"),
                        getScpLedgerSeq: e.lookup("Uint32")
                    }
                }), e.struct("AuthenticatedMessageV0", [
                    ["sequence", e.lookup("Uint64")],
                    ["message", e.lookup("StellarMessage")],
                    ["mac", e.lookup("HmacSha256Mac")]
                ]), e.union("AuthenticatedMessage", {
                    switchOn: e.lookup("Uint32"),
                    switchName: "v",
                    switches: [
                        [0, "v0"]
                    ],
                    arms: {
                        v0: e.lookup("AuthenticatedMessageV0")
                    }
                }), e.struct("DecoratedSignature", [
                    ["hint", e.lookup("SignatureHint")],
                    ["signature", e.lookup("Signature")]
                ]), e.enum("OperationType", {
                    createAccount: 0,
                    payment: 1,
                    pathPayment: 2,
                    manageOffer: 3,
                    createPassiveOffer: 4,
                    setOption: 5,
                    changeTrust: 6,
                    allowTrust: 7,
                    accountMerge: 8,
                    inflation: 9,
                    manageDatum: 10,
                    bumpSequence: 11
                }), e.struct("CreateAccountOp", [
                    ["destination", e.lookup("AccountId")],
                    ["startingBalance", e.lookup("Int64")]
                ]), e.struct("PaymentOp", [
                    ["destination", e.lookup("AccountId")],
                    ["asset", e.lookup("Asset")],
                    ["amount", e.lookup("Int64")]
                ]), e.struct("PathPaymentOp", [
                    ["sendAsset", e.lookup("Asset")],
                    ["sendMax", e.lookup("Int64")],
                    ["destination", e.lookup("AccountId")],
                    ["destAsset", e.lookup("Asset")],
                    ["destAmount", e.lookup("Int64")],
                    ["path", e.varArray(e.lookup("Asset"), 5)]
                ]), e.struct("ManageOfferOp", [
                    ["selling", e.lookup("Asset")],
                    ["buying", e.lookup("Asset")],
                    ["amount", e.lookup("Int64")],
                    ["price", e.lookup("Price")],
                    ["offerId", e.lookup("Uint64")]
                ]), e.struct("CreatePassiveOfferOp", [
                    ["selling", e.lookup("Asset")],
                    ["buying", e.lookup("Asset")],
                    ["amount", e.lookup("Int64")],
                    ["price", e.lookup("Price")]
                ]), e.struct("SetOptionsOp", [
                    ["inflationDest", e.option(e.lookup("AccountId"))],
                    ["clearFlags", e.option(e.lookup("Uint32"))],
                    ["setFlags", e.option(e.lookup("Uint32"))],
                    ["masterWeight", e.option(e.lookup("Uint32"))],
                    ["lowThreshold", e.option(e.lookup("Uint32"))],
                    ["medThreshold", e.option(e.lookup("Uint32"))],
                    ["highThreshold", e.option(e.lookup("Uint32"))],
                    ["homeDomain", e.option(e.lookup("String32"))],
                    ["signer", e.option(e.lookup("Signer"))]
                ]), e.struct("ChangeTrustOp", [
                    ["line", e.lookup("Asset")],
                    ["limit", e.lookup("Int64")]
                ]), e.union("AllowTrustOpAsset", {
                    switchOn: e.lookup("AssetType"),
                    switchName: "type",
                    switches: [
                        ["assetTypeCreditAlphanum4", "assetCode4"],
                        ["assetTypeCreditAlphanum12", "assetCode12"]
                    ],
                    arms: {
                        assetCode4: e.opaque(4),
                        assetCode12: e.opaque(12)
                    }
                }), e.struct("AllowTrustOp", [
                    ["trustor", e.lookup("AccountId")],
                    ["asset", e.lookup("AllowTrustOpAsset")],
                    ["authorize", e.bool()]
                ]), e.struct("ManageDataOp", [
                    ["dataName", e.lookup("String64")],
                    ["dataValue", e.option(e.lookup("DataValue"))]
                ]), e.struct("BumpSequenceOp", [
                    ["bumpTo", e.lookup("SequenceNumber")]
                ]), e.union("OperationBody", {
                    switchOn: e.lookup("OperationType"),
                    switchName: "type",
                    switches: [
                        ["createAccount", "createAccountOp"],
                        ["payment", "paymentOp"],
                        ["pathPayment", "pathPaymentOp"],
                        ["manageOffer", "manageOfferOp"],
                        ["createPassiveOffer", "createPassiveOfferOp"],
                        ["setOption", "setOptionsOp"],
                        ["changeTrust", "changeTrustOp"],
                        ["allowTrust", "allowTrustOp"],
                        ["accountMerge", "destination"],
                        ["inflation", e.void()],
                        ["manageDatum", "manageDataOp"],
                        ["bumpSequence", "bumpSequenceOp"]
                    ],
                    arms: {
                        createAccountOp: e.lookup("CreateAccountOp"),
                        paymentOp: e.lookup("PaymentOp"),
                        pathPaymentOp: e.lookup("PathPaymentOp"),
                        manageOfferOp: e.lookup("ManageOfferOp"),
                        createPassiveOfferOp: e.lookup("CreatePassiveOfferOp"),
                        setOptionsOp: e.lookup("SetOptionsOp"),
                        changeTrustOp: e.lookup("ChangeTrustOp"),
                        allowTrustOp: e.lookup("AllowTrustOp"),
                        destination: e.lookup("AccountId"),
                        manageDataOp: e.lookup("ManageDataOp"),
                        bumpSequenceOp: e.lookup("BumpSequenceOp")
                    }
                }), e.struct("Operation", [
                    ["sourceAccount", e.option(e.lookup("AccountId"))],
                    ["body", e.lookup("OperationBody")]
                ]), e.enum("MemoType", {
                    memoNone: 0,
                    memoText: 1,
                    memoId: 2,
                    memoHash: 3,
                    memoReturn: 4
                }), e.union("Memo", {
                    switchOn: e.lookup("MemoType"),
                    switchName: "type",
                    switches: [
                        ["memoNone", e.void()],
                        ["memoText", "text"],
                        ["memoId", "id"],
                        ["memoHash", "hash"],
                        ["memoReturn", "retHash"]
                    ],
                    arms: {
                        text: e.string(28),
                        id: e.lookup("Uint64"),
                        hash: e.lookup("Hash"),
                        retHash: e.lookup("Hash")
                    }
                }), e.struct("TimeBounds", [
                    ["minTime", e.lookup("Uint64")],
                    ["maxTime", e.lookup("Uint64")]
                ]), e.union("TransactionExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("Transaction", [
                    ["sourceAccount", e.lookup("AccountId")],
                    ["fee", e.lookup("Uint32")],
                    ["seqNum", e.lookup("SequenceNumber")],
                    ["timeBounds", e.option(e.lookup("TimeBounds"))],
                    ["memo", e.lookup("Memo")],
                    ["operations", e.varArray(e.lookup("Operation"), 100)],
                    ["ext", e.lookup("TransactionExt")]
                ]), e.union("TransactionSignaturePayloadTaggedTransaction", {
                    switchOn: e.lookup("EnvelopeType"),
                    switchName: "type",
                    switches: [
                        ["envelopeTypeTx", "tx"]
                    ],
                    arms: {
                        tx: e.lookup("Transaction")
                    }
                }), e.struct("TransactionSignaturePayload", [
                    ["networkId", e.lookup("Hash")],
                    ["taggedTransaction", e.lookup("TransactionSignaturePayloadTaggedTransaction")]
                ]), e.struct("TransactionEnvelope", [
                    ["tx", e.lookup("Transaction")],
                    ["signatures", e.varArray(e.lookup("DecoratedSignature"), 20)]
                ]), e.struct("ClaimOfferAtom", [
                    ["sellerId", e.lookup("AccountId")],
                    ["offerId", e.lookup("Uint64")],
                    ["assetSold", e.lookup("Asset")],
                    ["amountSold", e.lookup("Int64")],
                    ["assetBought", e.lookup("Asset")],
                    ["amountBought", e.lookup("Int64")]
                ]), e.enum("CreateAccountResultCode", {
                    createAccountSuccess: 0,
                    createAccountMalformed: -1,
                    createAccountUnderfunded: -2,
                    createAccountLowReserve: -3,
                    createAccountAlreadyExist: -4
                }), e.union("CreateAccountResult", {
                    switchOn: e.lookup("CreateAccountResultCode"),
                    switchName: "code",
                    switches: [
                        ["createAccountSuccess", e.void()]
                    ],
                    arms: {},
                    defaultArm: e.void()
                }), e.enum("PaymentResultCode", {
                    paymentSuccess: 0,
                    paymentMalformed: -1,
                    paymentUnderfunded: -2,
                    paymentSrcNoTrust: -3,
                    paymentSrcNotAuthorized: -4,
                    paymentNoDestination: -5,
                    paymentNoTrust: -6,
                    paymentNotAuthorized: -7,
                    paymentLineFull: -8,
                    paymentNoIssuer: -9
                }), e.union("PaymentResult", {
                    switchOn: e.lookup("PaymentResultCode"),
                    switchName: "code",
                    switches: [
                        ["paymentSuccess", e.void()]
                    ],
                    arms: {},
                    defaultArm: e.void()
                }), e.enum("PathPaymentResultCode", {
                    pathPaymentSuccess: 0,
                    pathPaymentMalformed: -1,
                    pathPaymentUnderfunded: -2,
                    pathPaymentSrcNoTrust: -3,
                    pathPaymentSrcNotAuthorized: -4,
                    pathPaymentNoDestination: -5,
                    pathPaymentNoTrust: -6,
                    pathPaymentNotAuthorized: -7,
                    pathPaymentLineFull: -8,
                    pathPaymentNoIssuer: -9,
                    pathPaymentTooFewOffer: -10,
                    pathPaymentOfferCrossSelf: -11,
                    pathPaymentOverSendmax: -12
                }), e.struct("SimplePaymentResult", [
                    ["destination", e.lookup("AccountId")],
                    ["asset", e.lookup("Asset")],
                    ["amount", e.lookup("Int64")]
                ]), e.struct("PathPaymentResultSuccess", [
                    ["offers", e.varArray(e.lookup("ClaimOfferAtom"), 2147483647)],
                    ["last", e.lookup("SimplePaymentResult")]
                ]), e.union("PathPaymentResult", {
                    switchOn: e.lookup("PathPaymentResultCode"),
                    switchName: "code",
                    switches: [
                        ["pathPaymentSuccess", "success"],
                        ["pathPaymentNoIssuer", "noIssuer"]
                    ],
                    arms: {
                        success: e.lookup("PathPaymentResultSuccess"),
                        noIssuer: e.lookup("Asset")
                    },
                    defaultArm: e.void()
                }), e.enum("ManageOfferResultCode", {
                    manageOfferSuccess: 0,
                    manageOfferMalformed: -1,
                    manageOfferSellNoTrust: -2,
                    manageOfferBuyNoTrust: -3,
                    manageOfferSellNotAuthorized: -4,
                    manageOfferBuyNotAuthorized: -5,
                    manageOfferLineFull: -6,
                    manageOfferUnderfunded: -7,
                    manageOfferCrossSelf: -8,
                    manageOfferSellNoIssuer: -9,
                    manageOfferBuyNoIssuer: -10,
                    manageOfferNotFound: -11,
                    manageOfferLowReserve: -12
                }), e.enum("ManageOfferEffect", {
                    manageOfferCreated: 0,
                    manageOfferUpdated: 1,
                    manageOfferDeleted: 2
                }), e.union("ManageOfferSuccessResultOffer", {
                    switchOn: e.lookup("ManageOfferEffect"),
                    switchName: "effect",
                    switches: [
                        ["manageOfferCreated", "offer"],
                        ["manageOfferUpdated", "offer"]
                    ],
                    arms: {
                        offer: e.lookup("OfferEntry")
                    },
                    defaultArm: e.void()
                }), e.struct("ManageOfferSuccessResult", [
                    ["offersClaimed", e.varArray(e.lookup("ClaimOfferAtom"), 2147483647)],
                    ["offer", e.lookup("ManageOfferSuccessResultOffer")]
                ]), e.union("ManageOfferResult", {
                    switchOn: e.lookup("ManageOfferResultCode"),
                    switchName: "code",
                    switches: [
                        ["manageOfferSuccess", "success"]
                    ],
                    arms: {
                        success: e.lookup("ManageOfferSuccessResult")
                    },
                    defaultArm: e.void()
                }), e.enum("SetOptionsResultCode", {
                    setOptionsSuccess: 0,
                    setOptionsLowReserve: -1,
                    setOptionsTooManySigner: -2,
                    setOptionsBadFlag: -3,
                    setOptionsInvalidInflation: -4,
                    setOptionsCantChange: -5,
                    setOptionsUnknownFlag: -6,
                    setOptionsThresholdOutOfRange: -7,
                    setOptionsBadSigner: -8,
                    setOptionsInvalidHomeDomain: -9
                }), e.union("SetOptionsResult", {
                    switchOn: e.lookup("SetOptionsResultCode"),
                    switchName: "code",
                    switches: [
                        ["setOptionsSuccess", e.void()]
                    ],
                    arms: {},
                    defaultArm: e.void()
                }), e.enum("ChangeTrustResultCode", {
                    changeTrustSuccess: 0,
                    changeTrustMalformed: -1,
                    changeTrustNoIssuer: -2,
                    changeTrustInvalidLimit: -3,
                    changeTrustLowReserve: -4,
                    changeTrustSelfNotAllowed: -5
                }), e.union("ChangeTrustResult", {
                    switchOn: e.lookup("ChangeTrustResultCode"),
                    switchName: "code",
                    switches: [
                        ["changeTrustSuccess", e.void()]
                    ],
                    arms: {},
                    defaultArm: e.void()
                }), e.enum("AllowTrustResultCode", {
                    allowTrustSuccess: 0,
                    allowTrustMalformed: -1,
                    allowTrustNoTrustLine: -2,
                    allowTrustTrustNotRequired: -3,
                    allowTrustCantRevoke: -4,
                    allowTrustSelfNotAllowed: -5
                }), e.union("AllowTrustResult", {
                    switchOn: e.lookup("AllowTrustResultCode"),
                    switchName: "code",
                    switches: [
                        ["allowTrustSuccess", e.void()]
                    ],
                    arms: {},
                    defaultArm: e.void()
                }), e.enum("AccountMergeResultCode", {
                    accountMergeSuccess: 0,
                    accountMergeMalformed: -1,
                    accountMergeNoAccount: -2,
                    accountMergeImmutableSet: -3,
                    accountMergeHasSubEntry: -4,
                    accountMergeSeqnumTooFar: -5,
                    accountMergeDestFull: -6
                }), e.union("AccountMergeResult", {
                    switchOn: e.lookup("AccountMergeResultCode"),
                    switchName: "code",
                    switches: [
                        ["accountMergeSuccess", "sourceAccountBalance"]
                    ],
                    arms: {
                        sourceAccountBalance: e.lookup("Int64")
                    },
                    defaultArm: e.void()
                }), e.enum("InflationResultCode", {
                    inflationSuccess: 0,
                    inflationNotTime: -1
                }), e.struct("InflationPayout", [
                    ["destination", e.lookup("AccountId")],
                    ["amount", e.lookup("Int64")]
                ]), e.union("InflationResult", {
                    switchOn: e.lookup("InflationResultCode"),
                    switchName: "code",
                    switches: [
                        ["inflationSuccess", "payouts"]
                    ],
                    arms: {
                        payouts: e.varArray(e.lookup("InflationPayout"), 2147483647)
                    },
                    defaultArm: e.void()
                }), e.enum("ManageDataResultCode", {
                    manageDataSuccess: 0,
                    manageDataNotSupportedYet: -1,
                    manageDataNameNotFound: -2,
                    manageDataLowReserve: -3,
                    manageDataInvalidName: -4
                }), e.union("ManageDataResult", {
                    switchOn: e.lookup("ManageDataResultCode"),
                    switchName: "code",
                    switches: [
                        ["manageDataSuccess", e.void()]
                    ],
                    arms: {},
                    defaultArm: e.void()
                }), e.enum("BumpSequenceResultCode", {
                    bumpSequenceSuccess: 0,
                    bumpSequenceBadSeq: -1
                }), e.union("BumpSequenceResult", {
                    switchOn: e.lookup("BumpSequenceResultCode"),
                    switchName: "code",
                    switches: [
                        ["bumpSequenceSuccess", e.void()]
                    ],
                    arms: {},
                    defaultArm: e.void()
                }), e.enum("OperationResultCode", {
                    opInner: 0,
                    opBadAuth: -1,
                    opNoAccount: -2,
                    opNotSupported: -3
                }), e.union("OperationResultTr", {
                    switchOn: e.lookup("OperationType"),
                    switchName: "type",
                    switches: [
                        ["createAccount", "createAccountResult"],
                        ["payment", "paymentResult"],
                        ["pathPayment", "pathPaymentResult"],
                        ["manageOffer", "manageOfferResult"],
                        ["createPassiveOffer", "createPassiveOfferResult"],
                        ["setOption", "setOptionsResult"],
                        ["changeTrust", "changeTrustResult"],
                        ["allowTrust", "allowTrustResult"],
                        ["accountMerge", "accountMergeResult"],
                        ["inflation", "inflationResult"],
                        ["manageDatum", "manageDataResult"],
                        ["bumpSequence", "bumpSeqResult"]
                    ],
                    arms: {
                        createAccountResult: e.lookup("CreateAccountResult"),
                        paymentResult: e.lookup("PaymentResult"),
                        pathPaymentResult: e.lookup("PathPaymentResult"),
                        manageOfferResult: e.lookup("ManageOfferResult"),
                        createPassiveOfferResult: e.lookup("ManageOfferResult"),
                        setOptionsResult: e.lookup("SetOptionsResult"),
                        changeTrustResult: e.lookup("ChangeTrustResult"),
                        allowTrustResult: e.lookup("AllowTrustResult"),
                        accountMergeResult: e.lookup("AccountMergeResult"),
                        inflationResult: e.lookup("InflationResult"),
                        manageDataResult: e.lookup("ManageDataResult"),
                        bumpSeqResult: e.lookup("BumpSequenceResult")
                    }
                }), e.union("OperationResult", {
                    switchOn: e.lookup("OperationResultCode"),
                    switchName: "code",
                    switches: [
                        ["opInner", "tr"]
                    ],
                    arms: {
                        tr: e.lookup("OperationResultTr")
                    },
                    defaultArm: e.void()
                }), e.enum("TransactionResultCode", {
                    txSuccess: 0,
                    txFailed: -1,
                    txTooEarly: -2,
                    txTooLate: -3,
                    txMissingOperation: -4,
                    txBadSeq: -5,
                    txBadAuth: -6,
                    txInsufficientBalance: -7,
                    txNoAccount: -8,
                    txInsufficientFee: -9,
                    txBadAuthExtra: -10,
                    txInternalError: -11
                }), e.union("TransactionResultResult", {
                    switchOn: e.lookup("TransactionResultCode"),
                    switchName: "code",
                    switches: [
                        ["txSuccess", "results"],
                        ["txFailed", "results"]
                    ],
                    arms: {
                        results: e.varArray(e.lookup("OperationResult"), 2147483647)
                    },
                    defaultArm: e.void()
                }), e.union("TransactionResultExt", {
                    switchOn: e.int(),
                    switchName: "v",
                    switches: [
                        [0, e.void()]
                    ],
                    arms: {}
                }), e.struct("TransactionResult", [
                    ["feeCharged", e.lookup("Int64")],
                    ["result", e.lookup("TransactionResultResult")],
                    ["ext", e.lookup("TransactionResultExt")]
                ]), e.typedef("Hash", e.opaque(32)), e.typedef("Uint256", e.opaque(32)), e.typedef("Uint32", e.uint()), e.typedef("Int32", e.int()), e.typedef("Uint64", e.uhyper()), e.typedef("Int64", e.hyper()), e.enum("CryptoKeyType", {
                    keyTypeEd25519: 0,
                    keyTypePreAuthTx: 1,
                    keyTypeHashX: 2
                }), e.enum("PublicKeyType", {
                    publicKeyTypeEd25519: 0
                }), e.enum("SignerKeyType", {
                    signerKeyTypeEd25519: 0,
                    signerKeyTypePreAuthTx: 1,
                    signerKeyTypeHashX: 2
                }), e.union("PublicKey", {
                    switchOn: e.lookup("PublicKeyType"),
                    switchName: "type",
                    switches: [
                        ["publicKeyTypeEd25519", "ed25519"]
                    ],
                    arms: {
                        ed25519: e.lookup("Uint256")
                    }
                }), e.union("SignerKey", {
                    switchOn: e.lookup("SignerKeyType"),
                    switchName: "type",
                    switches: [
                        ["signerKeyTypeEd25519", "ed25519"],
                        ["signerKeyTypePreAuthTx", "preAuthTx"],
                        ["signerKeyTypeHashX", "hashX"]
                    ],
                    arms: {
                        ed25519: e.lookup("Uint256"),
                        preAuthTx: e.lookup("Uint256"),
                        hashX: e.lookup("Uint256")
                    }
                }), e.typedef("Signature", e.varOpaque(64)), e.typedef("SignatureHint", e.opaque(4)), e.typedef("NodeId", e.lookup("PublicKey")), e.struct("Curve25519Secret", [
                    ["key", e.opaque(32)]
                ]), e.struct("Curve25519Public", [
                    ["key", e.opaque(32)]
                ]), e.struct("HmacSha256Key", [
                    ["key", e.opaque(32)]
                ]), e.struct("HmacSha256Mac", [
                    ["mac", e.opaque(32)]
                ])
            }));
            t.default = n
        },
        5695: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Keypair = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                o = c(r(73)),
                a = r(6525),
                u = r(7252),
                s = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(r(9411)),
                i = r(5649),
                l = c(r(5581));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.Keypair = function() {
                function e(t) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), "ed25519" !== t.type) throw new Error("Invalid keys type");
                    if (this.type = t.type, t.secretKey) {
                        if (t.secretKey = Buffer.from(t.secretKey), 32 !== t.secretKey.length) throw new Error("secretKey length is invalid");
                        var r = new Uint8Array(t.secretKey),
                            n = o.default.sign.keyPair.fromSeed(r);
                        if (this._secretSeed = t.secretKey, this._secretKey = Buffer.from(n.secretKey), this._publicKey = Buffer.from(n.publicKey), t.publicKey && !this._publicKey.equals(Buffer.from(t.publicKey))) throw new Error("secretKey does not match publicKey")
                    } else if (this._publicKey = Buffer.from(t.publicKey), 32 !== this._publicKey.length) throw new Error("publicKey length is invalid")
                }
                return n(e, [{
                    key: "xdrAccountId",
                    value: function() {
                        return new l.default.AccountId.publicKeyTypeEd25519(this._publicKey)
                    }
                }, {
                    key: "xdrPublicKey",
                    value: function() {
                        return new l.default.PublicKey.publicKeyTypeEd25519(this._publicKey)
                    }
                }, {
                    key: "rawPublicKey",
                    value: function() {
                        return this._publicKey
                    }
                }, {
                    key: "signatureHint",
                    value: function() {
                        var e = this.xdrAccountId().toXDR();
                        return e.slice(e.length - 4)
                    }
                }, {
                    key: "publicKey",
                    value: function() {
                        return i.StrKey.encodeEd25519PublicKey(this._publicKey)
                    }
                }, {
                    key: "secret",
                    value: function() {
                        if (!this._secretSeed) throw new Error("no secret key available");
                        if ("ed25519" === this.type) return i.StrKey.encodeEd25519SecretSeed(this._secretSeed);
                        throw new Error("Invalid Keypair type")
                    }
                }, {
                    key: "rawSecretKey",
                    value: function() {
                        return this._secretSeed
                    }
                }, {
                    key: "canSign",
                    value: function() {
                        return !!this._secretKey
                    }
                }, {
                    key: "sign",
                    value: function(e) {
                        if (!this.canSign()) throw new Error("cannot sign: no secret key available");
                        return (0, u.sign)(e, this._secretKey)
                    }
                }, {
                    key: "verify",
                    value: function(e, t) {
                        return (0, u.verify)(e, t, this._publicKey)
                    }
                }, {
                    key: "signDecorated",
                    value: function(e) {
                        var t = this.sign(e),
                            r = this.signatureHint();
                        return new l.default.DecoratedSignature({
                            hint: r,
                            signature: t
                        })
                    }
                }], [{
                    key: "fromSecret",
                    value: function(e) {
                        var t = i.StrKey.decodeEd25519SecretSeed(e);
                        return this.fromRawEd25519Seed(t)
                    }
                }, {
                    key: "fromBase58Seed",
                    value: function(e) {
                        var t = s.decodeBase58Check("seed", e);
                        return this.fromRawEd25519Seed(t)
                    }
                }, {
                    key: "fromRawEd25519Seed",
                    value: function(e) {
                        return new this({
                            type: "ed25519",
                            secretKey: e
                        })
                    }
                }, {
                    key: "master",
                    value: function() {
                        if (null === a.Network.current()) throw new Error("No network selected. Use `Network.use`, `Network.usePublicNetwork` or `Network.useTestNetwork` helper methods to select network.");
                        return this.fromRawEd25519Seed(a.Network.current().networkId())
                    }
                }, {
                    key: "fromPublicKey",
                    value: function(e) {
                        if (32 !== (e = i.StrKey.decodeEd25519PublicKey(e)).length) throw new Error("Invalid Stellar public key");
                        return new this({
                            type: "ed25519",
                            publicKey: e
                        })
                    }
                }, {
                    key: "random",
                    value: function() {
                        var e = o.default.randomBytes(32);
                        return this.fromRawEd25519Seed(e)
                    }
                }]), e
            }()
        },
        6524: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hash = function(e) {
                var t = new n.sha256;
                return t.update(e, "utf8"), t.digest()
            };
            var n = r(324)
        },
        6525: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Network = t.Networks = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                o = r(6524);
            var a = t.Networks = {
                    PUBLIC: "Public Global Stellar Network ; September 2015",
                    TESTNET: "Test SDF Network ; September 2015"
                },
                u = null;
            t.Network = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._networkPassphrase = t
                }
                return n(e, [{
                    key: "networkPassphrase",
                    value: function() {
                        return this._networkPassphrase
                    }
                }, {
                    key: "networkId",
                    value: function() {
                        return (0, o.hash)(this.networkPassphrase())
                    }
                }], [{
                    key: "usePublicNetwork",
                    value: function() {
                        this.use(new e(a.PUBLIC))
                    }
                }, {
                    key: "useTestNetwork",
                    value: function() {
                        this.use(new e(a.TESTNET))
                    }
                }, {
                    key: "use",
                    value: function(e) {
                        u = e
                    }
                }, {
                    key: "current",
                    value: function() {
                        return u
                    }
                }]), e
            }()
        },
        6526: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Memo = t.MemoReturn = t.MemoHash = t.MemoText = t.MemoID = t.MemoNone = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                o = c(r(140)),
                a = c(r(161)),
                u = c(r(323)),
                s = r(252),
                i = c(r(5845)),
                l = c(r(5581));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var d = t.MemoNone = "none",
                f = t.MemoID = "id",
                h = t.MemoText = "text",
                m = t.MemoHash = "hash",
                y = t.MemoReturn = "return",
                g = function() {
                    function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        switch (p(this, e), this._type = t, this._value = r, this._type) {
                            case d:
                                break;
                            case f:
                                e._validateIdValue(r);
                                break;
                            case h:
                                e._validateTextValue(r);
                                break;
                            case m:
                            case y:
                                e._validateHashValue(r), (0, a.default)(r) && (this._value = Buffer.from(r, "hex"));
                                break;
                            default:
                                throw new Error("Invalid memo type")
                        }
                    }
                    return n(e, [{
                        key: "toXDRObject",
                        value: function() {
                            switch (this._type) {
                                case d:
                                    return l.default.Memo.memoNone();
                                case f:
                                    return l.default.Memo.memoId(s.UnsignedHyper.fromString(this._value));
                                case h:
                                    return l.default.Memo.memoText(this._value);
                                case m:
                                    return l.default.Memo.memoHash(this._value);
                                case y:
                                    return l.default.Memo.memoReturn(this._value);
                                default:
                                    return null
                            }
                        }
                    }, {
                        key: "type",
                        get: function() {
                            return (0, u.default)(this._type)
                        },
                        set: function(e) {
                            throw new Error("Memo is immutable")
                        }
                    }, {
                        key: "value",
                        get: function() {
                            switch (this._type) {
                                case d:
                                    return null;
                                case f:
                                case h:
                                    return (0, u.default)(this._value);
                                case m:
                                case y:
                                    return Buffer.from(this._value);
                                default:
                                    throw new Error("Invalid memo type")
                            }
                        },
                        set: function(e) {
                            throw new Error("Memo is immutable")
                        }
                    }], [{
                        key: "_validateIdValue",
                        value: function(e) {
                            var t = new Error("Expects a int64 as a string. Got " + e);
                            if (!(0, a.default)(e)) throw t;
                            var r = void 0;
                            try {
                                r = new i.default(e)
                            } catch (e) {
                                throw t
                            }
                            if (!r.isFinite()) throw t;
                            if (r.isNaN()) throw t
                        }
                    }, {
                        key: "_validateTextValue",
                        value: function(e) {
                            if (!l.default.Memo.armTypeForArm("text").isValid(e)) throw new Error("Expects string, array or buffer, max 28 bytes")
                        }
                    }, {
                        key: "_validateHashValue",
                        value: function(e) {
                            var t = new Error("Expects a 32 byte hash value or hex encoded string. Got " + e);
                            if (null === e || (0, o.default)(e)) throw t;
                            var r = void 0;
                            if ((0, a.default)(e)) {
                                if (!/^[0-9A-Fa-f]{64}$/g.test(e)) throw t;
                                r = Buffer.from(e, "hex")
                            } else {
                                if (!Buffer.isBuffer(e)) throw t;
                                r = Buffer.from(e)
                            }
                            if (!r.length || 32 !== r.length) throw t
                        }
                    }, {
                        key: "none",
                        value: function() {
                            return new e(d)
                        }
                    }, {
                        key: "text",
                        value: function(t) {
                            return new e(h, t)
                        }
                    }, {
                        key: "id",
                        value: function(t) {
                            return new e(f, t)
                        }
                    }, {
                        key: "hash",
                        value: function(t) {
                            return new e(m, t)
                        }
                    }, {
                        key: "return",
                        value: function(t) {
                            return new e(y, t)
                        }
                    }, {
                        key: "fromXDRObject",
                        value: function(t) {
                            switch (t.arm()) {
                                case "id":
                                    return e.id(t.value().toString());
                                case "text":
                                    return e.text(t.value());
                                case "hash":
                                    return e.hash(t.value());
                                case "retHash":
                                    return e.return(t.value())
                            }
                            if (void 0 === t.value()) return e.none();
                            throw new Error("Unknown type")
                        }
                    }]), e
                }();
            t.Memo = g
        },
        7251: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StrKey = t.Networks = t.Network = t.Account = t.AuthImmutableFlag = t.AuthRevocableFlag = t.AuthRequiredFlag = t.Operation = t.Asset = t.TimeoutInfinite = t.TransactionBuilder = t.Transaction = t.Hyper = t.UnsignedHyper = t.Keypair = t.FastSigning = t.verify = t.sign = t.hash = t.xdr = void 0;
            var n = r(6524);
            Object.defineProperty(t, "hash", {
                enumerable: !0,
                get: function() {
                    return n.hash
                }
            });
            var o = r(7252);
            Object.defineProperty(t, "sign", {
                enumerable: !0,
                get: function() {
                    return o.sign
                }
            }), Object.defineProperty(t, "verify", {
                enumerable: !0,
                get: function() {
                    return o.verify
                }
            }), Object.defineProperty(t, "FastSigning", {
                enumerable: !0,
                get: function() {
                    return o.FastSigning
                }
            });
            var a = r(5695);
            Object.defineProperty(t, "Keypair", {
                enumerable: !0,
                get: function() {
                    return a.Keypair
                }
            });
            var u = r(252);
            Object.defineProperty(t, "UnsignedHyper", {
                enumerable: !0,
                get: function() {
                    return u.UnsignedHyper
                }
            }), Object.defineProperty(t, "Hyper", {
                enumerable: !0,
                get: function() {
                    return u.Hyper
                }
            });
            var s = r(7254);
            Object.defineProperty(t, "Transaction", {
                enumerable: !0,
                get: function() {
                    return s.Transaction
                }
            });
            var i = r(9439);
            Object.defineProperty(t, "TransactionBuilder", {
                enumerable: !0,
                get: function() {
                    return i.TransactionBuilder
                }
            }), Object.defineProperty(t, "TimeoutInfinite", {
                enumerable: !0,
                get: function() {
                    return i.TimeoutInfinite
                }
            });
            var l = r(7256);
            Object.defineProperty(t, "Asset", {
                enumerable: !0,
                get: function() {
                    return l.Asset
                }
            });
            var c = r(7255);
            Object.defineProperty(t, "Operation", {
                enumerable: !0,
                get: function() {
                    return c.Operation
                }
            }), Object.defineProperty(t, "AuthRequiredFlag", {
                enumerable: !0,
                get: function() {
                    return c.AuthRequiredFlag
                }
            }), Object.defineProperty(t, "AuthRevocableFlag", {
                enumerable: !0,
                get: function() {
                    return c.AuthRevocableFlag
                }
            }), Object.defineProperty(t, "AuthImmutableFlag", {
                enumerable: !0,
                get: function() {
                    return c.AuthImmutableFlag
                }
            });
            var p = r(6526);
            Object.keys(p).forEach((function(e) {
                "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return p[e]
                    }
                })
            }));
            var d = r(9440);
            Object.defineProperty(t, "Account", {
                enumerable: !0,
                get: function() {
                    return d.Account
                }
            });
            var f = r(6525);
            Object.defineProperty(t, "Network", {
                enumerable: !0,
                get: function() {
                    return f.Network
                }
            }), Object.defineProperty(t, "Networks", {
                enumerable: !0,
                get: function() {
                    return f.Networks
                }
            });
            var h = r(5649);
            Object.defineProperty(t, "StrKey", {
                enumerable: !0,
                get: function() {
                    return h.StrKey
                }
            });
            var m, y = r(5581),
                g = (m = y) && m.__esModule ? m : {
                    default: m
                };
            t.xdr = g.default, t.default = e.exports
        },
        7252: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sign = function(e, t) {
                return n.sign(e, t)
            }, t.verify = function(e, t, r) {
                return n.verify(e, t, r)
            };
            var n = {};
            t.FastSigning = "undefined" == typeof window ? function() {
                var e = void 0;
                try {
                    e = r(9410)
                } catch (e) {
                    return o()
                }
                return n.sign = function(t, r) {
                    return e.Sign(Buffer.from(t), r)
                }, n.verify = function(t, r, n) {
                    t = Buffer.from(t);
                    try {
                        return e.Verify(t, r, n)
                    } catch (e) {
                        return !1
                    }
                }, !0
            }() : o();

            function o() {
                var e = r(73);
                return n.sign = function(t, r) {
                    t = Buffer.from(t), t = new Uint8Array(t.toJSON().data), r = new Uint8Array(r.toJSON().data);
                    var n = e.sign.detached(t, r);
                    return Buffer.from(n)
                }, n.verify = function(t, r, n) {
                    return t = Buffer.from(t), t = new Uint8Array(t.toJSON().data), r = new Uint8Array(r.toJSON().data), n = new Uint8Array(n.toJSON().data), e.sign.detached.verify(t, r, n)
                }, !1
            }
        },
        7255: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Operation = t.AuthImmutableFlag = t.AuthRevocableFlag = t.AuthRequiredFlag = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                o = r(252),
                a = g(r(5845)),
                u = g(r(1395)),
                s = g(r(140)),
                i = g(r(161)),
                l = g(r(468)),
                c = g(r(2358)),
                p = r(9425),
                d = r(7256),
                f = r(5649),
                h = r(5695),
                m = g(r(5581)),
                y = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(r(9426));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var v = 1e7,
                w = (t.AuthRequiredFlag = 1, t.AuthRevocableFlag = 2, t.AuthImmutableFlag = 4, t.Operation = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return n(e, null, [{
                        key: "setSourceAccount",
                        value: function(e, t) {
                            if (t.source) {
                                if (!f.StrKey.isValidEd25519PublicKey(t.source)) throw new Error("Source address is invalid");
                                e.sourceAccount = h.Keypair.fromPublicKey(t.source).xdrAccountId()
                            }
                        }
                    }, {
                        key: "fromXDRObject",
                        value: function(e) {
                            function t(e) {
                                return f.StrKey.encodeEd25519PublicKey(e.ed25519())
                            }
                            var r = {};
                            e.sourceAccount() && (r.source = t(e.sourceAccount()));
                            var n = e.body().value();
                            switch (e.body().switch().name) {
                                case "createAccount":
                                    r.type = "createAccount", r.destination = t(n.destination()), r.startingBalance = this._fromXDRAmount(n.startingBalance());
                                    break;
                                case "payment":
                                    r.type = "payment", r.destination = t(n.destination()), r.asset = d.Asset.fromOperation(n.asset()), r.amount = this._fromXDRAmount(n.amount());
                                    break;
                                case "pathPayment":
                                    r.type = "pathPayment", r.sendAsset = d.Asset.fromOperation(n.sendAsset()), r.sendMax = this._fromXDRAmount(n.sendMax()), r.destination = t(n.destination()), r.destAsset = d.Asset.fromOperation(n.destAsset()), r.destAmount = this._fromXDRAmount(n.destAmount()), r.path = [];
                                    var o = n.path();
                                    Object.keys(o).forEach((function(e) {
                                        r.path.push(d.Asset.fromOperation(o[e]))
                                    }));
                                    break;
                                case "changeTrust":
                                    r.type = "changeTrust", r.line = d.Asset.fromOperation(n.line()), r.limit = this._fromXDRAmount(n.limit());
                                    break;
                                case "allowTrust":
                                    r.type = "allowTrust", r.trustor = t(n.trustor()), r.assetCode = n.asset().value().toString(), r.assetCode = (0, u.default)(r.assetCode, "\0"), r.authorize = n.authorize();
                                    break;
                                case "setOption":
                                    if (r.type = "setOptions", n.inflationDest() && (r.inflationDest = t(n.inflationDest())), r.clearFlags = n.clearFlags(), r.setFlags = n.setFlags(), r.masterWeight = n.masterWeight(), r.lowThreshold = n.lowThreshold(), r.medThreshold = n.medThreshold(), r.highThreshold = n.highThreshold(), r.homeDomain = void 0 !== n.homeDomain() ? n.homeDomain().toString("ascii") : void 0, n.signer()) {
                                        var a = {},
                                            s = n.signer().key().arm();
                                        "ed25519" === s ? a.ed25519PublicKey = t(n.signer().key()) : "preAuthTx" === s ? a.preAuthTx = n.signer().key().preAuthTx() : "hashX" === s && (a.sha256Hash = n.signer().key().hashX()), a.weight = n.signer().weight(), r.signer = a
                                    }
                                    break;
                                case "manageOffer":
                                    r.type = "manageOffer", r.selling = d.Asset.fromOperation(n.selling()), r.buying = d.Asset.fromOperation(n.buying()), r.amount = this._fromXDRAmount(n.amount()), r.price = this._fromXDRPrice(n.price()), r.offerId = n.offerId().toString();
                                    break;
                                case "createPassiveOffer":
                                    r.type = "createPassiveOffer", r.selling = d.Asset.fromOperation(n.selling()), r.buying = d.Asset.fromOperation(n.buying()), r.amount = this._fromXDRAmount(n.amount()), r.price = this._fromXDRPrice(n.price());
                                    break;
                                case "accountMerge":
                                    r.type = "accountMerge", r.destination = t(n);
                                    break;
                                case "manageDatum":
                                    r.type = "manageData", r.name = n.dataName().toString("ascii"), r.value = n.dataValue();
                                    break;
                                case "inflation":
                                    r.type = "inflation";
                                    break;
                                case "bumpSequence":
                                    r.type = "bumpSequence", r.bumpTo = n.bumpTo().toString();
                                    break;
                                default:
                                    throw new Error("Unknown operation")
                            }
                            return r
                        }
                    }, {
                        key: "isValidAmount",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!(0, i.default)(e)) return !1;
                            var r = void 0;
                            try {
                                r = new a.default(e)
                            } catch (e) {
                                return !1
                            }
                            return !(!t && r.isZero() || r.isNegative() || r.times(v).greaterThan(new a.default("9223372036854775807").toString()) || r.decimalPlaces() > 7 || r.isNaN() || !r.isFinite())
                        }
                    }, {
                        key: "constructAmountRequirementsError",
                        value: function(e) {
                            return e + " argument must be of type String, represent a positive number and have at most 7 digits after the decimal"
                        }
                    }, {
                        key: "_checkUnsignedIntValue",
                        value: function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            if (!(0, s.default)(t)) switch ((0, i.default)(t) && (t = parseFloat(t)), !0) {
                                case !(0, l.default)(t) || !(0, c.default)(t) || t % 1 != 0:
                                    throw new Error(e + " value is invalid");
                                case t < 0:
                                    throw new Error(e + " value must be unsigned");
                                case !r || r && r(t, e):
                                    return t;
                                default:
                                    throw new Error(e + " value is invalid")
                            }
                        }
                    }, {
                        key: "_toXDRAmount",
                        value: function(e) {
                            var t = new a.default(e).mul(v);
                            return o.Hyper.fromString(t.toString())
                        }
                    }, {
                        key: "_fromXDRAmount",
                        value: function(e) {
                            return new a.default(e).div(v).toFixed(7)
                        }
                    }, {
                        key: "_fromXDRPrice",
                        value: function(e) {
                            return new a.default(e.n()).div(new a.default(e.d())).toString()
                        }
                    }, {
                        key: "_toXDRPrice",
                        value: function(e) {
                            var t = void 0;
                            if (e.n && e.d) t = new m.default.Price(e);
                            else {
                                e = new a.default(e);
                                var r = (0, p.best_r)(e);
                                t = new m.default.Price({
                                    n: parseInt(r[0], 10),
                                    d: parseInt(r[1], 10)
                                })
                            }
                            if (t.n() < 0 || t.d() < 0) throw new Error("price must be positive");
                            return t
                        }
                    }]), e
                }());
            w.accountMerge = y.accountMerge, w.allowTrust = y.allowTrust, w.bumpSequence = y.bumpSequence, w.changeTrust = y.changeTrust, w.createAccount = y.createAccount, w.createPassiveOffer = y.createPassiveOffer, w.inflation = y.inflation, w.manageData = y.manageData, w.manageOffer = y.manageOffer, w.pathPayment = y.pathPayment, w.payment = y.payment, w.setOptions = y.setOptions
        },
        7256: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Asset = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                o = c(r(323)),
                a = c(r(1394)),
                u = c(r(1395)),
                s = c(r(5581)),
                i = r(5695),
                l = r(5649);

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.Asset = function() {
                function e(t, r) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), !/^[a-zA-Z0-9]{1,12}$/.test(t)) throw new Error("Asset code is invalid (maximum alphanumeric, 12 characters at max)");
                    if ("xlm" !== String(t).toLowerCase() && !r) throw new Error("Issuer cannot be null");
                    if (r && !l.StrKey.isValidEd25519PublicKey(r)) throw new Error("Issuer is invalid");
                    this.code = t, this.issuer = r
                }
                return n(e, [{
                    key: "toXDRObject",
                    value: function() {
                        if (this.isNative()) return s.default.Asset.assetTypeNative();
                        var e = void 0,
                            t = void 0;
                        this.code.length <= 4 ? (e = s.default.AssetAlphaNum4, t = "assetTypeCreditAlphanum4") : (e = s.default.AssetAlphaNum12, t = "assetTypeCreditAlphanum12");
                        var r = this.code.length <= 4 ? 4 : 12,
                            n = new e({
                                assetCode: (0, a.default)(this.code, r, "\0"),
                                issuer: i.Keypair.fromPublicKey(this.issuer).xdrAccountId()
                            });
                        return new s.default.Asset(t, n)
                    }
                }, {
                    key: "getCode",
                    value: function() {
                        return (0, o.default)(this.code)
                    }
                }, {
                    key: "getIssuer",
                    value: function() {
                        return (0, o.default)(this.issuer)
                    }
                }, {
                    key: "getAssetType",
                    value: function() {
                        return this.isNative() ? "native" : this.code.length >= 1 && this.code.length <= 4 ? "credit_alphanum4" : this.code.length >= 5 && this.code.length <= 12 ? "credit_alphanum12" : null
                    }
                }, {
                    key: "isNative",
                    value: function() {
                        return !this.issuer
                    }
                }, {
                    key: "equals",
                    value: function(e) {
                        return this.code === e.getCode() && this.issuer === e.getIssuer()
                    }
                }], [{
                    key: "native",
                    value: function() {
                        return new e("XLM")
                    }
                }, {
                    key: "fromOperation",
                    value: function(e) {
                        var t = void 0,
                            r = void 0;
                        switch (e.switch()) {
                            case s.default.AssetType.assetTypeNative():
                                return this.native();
                            case s.default.AssetType.assetTypeCreditAlphanum4():
                                t = e.alphaNum4();
                            case s.default.AssetType.assetTypeCreditAlphanum12():
                                return t = t || e.alphaNum12(), r = l.StrKey.encodeEd25519PublicKey(t.issuer().ed25519()), new this((0, u.default)(t.assetCode(), "\0"), r);
                            default:
                                throw new Error("Invalid asset type: " + e.switch().name)
                        }
                    }
                }]), e
            }()
        },
        9398: function(e, t, r) {
            var n = r(9399),
                o = r(2356);
            e.exports = function(e, t) {
                return null != e && o(e, t, n)
            }
        },
        9399: function(e, t) {
            var r = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                return null != e && r.call(e, t)
            }
        },
        9410: function(e, t) {},
        9411: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decodeBase58Check = function(e, t) {
                var r = o.default.decode(t),
                    s = r[0],
                    l = r.slice(0, r.length - 4),
                    c = l.slice(1),
                    p = r.slice(r.length - 4),
                    d = i[e];
                if ((0, n.default)(d)) throw new Error(e + ' is not a valid version byte name.  expected one of "accountId", "seed", or "none"');
                if (s !== d) throw new Error("invalid version byte.  expected " + d + ", got " + s);
                var f = function(e) {
                    var t = (0, a.hash)(e);
                    return (0, a.hash)(t).slice(0, 4)
                }(l);
                if (!(0, u.verifyChecksum)(f, p)) throw new Error("invalid checksum");
                if ("accountId" === e && 37 !== r.length) throw new Error("Decoded address length is invalid. Expected 37, got " + r.length);
                return Buffer.from(c)
            };
            var n = s(r(140)),
                o = s(r(9412)),
                a = r(6524),
                u = r(7253);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = {
                accountId: 0,
                none: 1,
                seed: 33
            }
        },
        9426: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(9427);
            Object.defineProperty(t, "accountMerge", {
                enumerable: !0,
                get: function() {
                    return n.accountMerge
                }
            });
            var o = r(9428);
            Object.defineProperty(t, "allowTrust", {
                enumerable: !0,
                get: function() {
                    return o.allowTrust
                }
            });
            var a = r(9429);
            Object.defineProperty(t, "bumpSequence", {
                enumerable: !0,
                get: function() {
                    return a.bumpSequence
                }
            });
            var u = r(9430);
            Object.defineProperty(t, "changeTrust", {
                enumerable: !0,
                get: function() {
                    return u.changeTrust
                }
            });
            var s = r(9431);
            Object.defineProperty(t, "createAccount", {
                enumerable: !0,
                get: function() {
                    return s.createAccount
                }
            });
            var i = r(9432);
            Object.defineProperty(t, "createPassiveOffer", {
                enumerable: !0,
                get: function() {
                    return i.createPassiveOffer
                }
            });
            var l = r(9433);
            Object.defineProperty(t, "inflation", {
                enumerable: !0,
                get: function() {
                    return l.inflation
                }
            });
            var c = r(9434);
            Object.defineProperty(t, "manageData", {
                enumerable: !0,
                get: function() {
                    return c.manageData
                }
            });
            var p = r(9435);
            Object.defineProperty(t, "manageOffer", {
                enumerable: !0,
                get: function() {
                    return p.manageOffer
                }
            });
            var d = r(9436);
            Object.defineProperty(t, "pathPayment", {
                enumerable: !0,
                get: function() {
                    return d.pathPayment
                }
            });
            var f = r(9437);
            Object.defineProperty(t, "payment", {
                enumerable: !0,
                get: function() {
                    return f.payment
                }
            });
            var h = r(9438);
            Object.defineProperty(t, "setOptions", {
                enumerable: !0,
                get: function() {
                    return h.setOptions
                }
            })
        },
        9427: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.accountMerge = function(e) {
                var t = {};
                if (!s.StrKey.isValidEd25519PublicKey(e.destination)) throw new Error("destination is invalid");
                return t.body = a.default.OperationBody.accountMerge(u.Keypair.fromPublicKey(e.destination).xdrAccountId()), this.setSourceAccount(t, e), new a.default.Operation(t)
            };
            var n, o = r(5581),
                a = (n = o) && n.__esModule ? n : {
                    default: n
                },
                u = r(5695),
                s = r(5649)
        },
        9428: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.allowTrust = function(e) {
                if (!u.StrKey.isValidEd25519PublicKey(e.trustor)) throw new Error("trustor is invalid");
                var t = {};
                if (t.trustor = a.Keypair.fromPublicKey(e.trustor).xdrAccountId(), e.assetCode.length <= 4) {
                    var r = (0, n.default)(e.assetCode, 4, "\0");
                    t.asset = o.default.AllowTrustOpAsset.assetTypeCreditAlphanum4(r)
                } else {
                    if (!(e.assetCode.length <= 12)) throw new Error("Asset code must be 12 characters at max.");
                    var s = (0, n.default)(e.assetCode, 12, "\0");
                    t.asset = o.default.AllowTrustOpAsset.assetTypeCreditAlphanum12(s)
                }
                t.authorize = e.authorize;
                var i = new o.default.AllowTrustOp(t),
                    l = {};
                return l.body = o.default.OperationBody.allowTrust(i), this.setSourceAccount(l, e), new o.default.Operation(l)
            };
            var n = s(r(1394)),
                o = s(r(5581)),
                a = r(5695),
                u = r(5649);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        9429: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bumpSequence = function(e) {
                var t = {};
                if (!(0, a.default)(e.bumpTo)) throw new Error("bumpTo must be a string");
                try {
                    new o.default(e.bumpTo)
                } catch (e) {
                    throw new Error("bumpTo must be a stringified number")
                }
                t.bumpTo = n.Hyper.fromString(e.bumpTo);
                var r = new u.default.BumpSequenceOp(t),
                    s = {};
                return s.body = u.default.OperationBody.bumpSequence(r), this.setSourceAccount(s, e), new u.default.Operation(s)
            };
            var n = r(252),
                o = s(r(5845)),
                a = s(r(161)),
                u = s(r(5581));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        9430: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.changeTrust = function(e) {
                var t = {};
                if (t.line = e.asset.toXDRObject(), !(0, n.default)(e.limit) && !this.isValidAmount(e.limit, !0)) throw new TypeError(this.constructAmountRequirementsError("limit"));
                e.limit ? t.limit = this._toXDRAmount(e.limit) : t.limit = o.Hyper.fromString(new a.default("9223372036854775807").toString());
                e.source && (t.source = e.source.masterKeypair);
                var r = new u.default.ChangeTrustOp(t),
                    s = {};
                return s.body = u.default.OperationBody.changeTrust(r), this.setSourceAccount(s, e), new u.default.Operation(s)
            };
            var n = s(r(140)),
                o = r(252),
                a = s(r(5845)),
                u = s(r(5581));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        9431: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createAccount = function(e) {
                if (!s.StrKey.isValidEd25519PublicKey(e.destination)) throw new Error("destination is invalid");
                if (!this.isValidAmount(e.startingBalance)) throw new TypeError(this.constructAmountRequirementsError("startingBalance"));
                var t = {};
                t.destination = u.Keypair.fromPublicKey(e.destination).xdrAccountId(), t.startingBalance = this._toXDRAmount(e.startingBalance);
                var r = new a.default.CreateAccountOp(t),
                    n = {};
                return n.body = a.default.OperationBody.createAccount(r), this.setSourceAccount(n, e), new a.default.Operation(n)
            };
            var n, o = r(5581),
                a = (n = o) && n.__esModule ? n : {
                    default: n
                },
                u = r(5695),
                s = r(5649)
        },
        9432: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createPassiveOffer = function(e) {
                var t = {};
                if (t.selling = e.selling.toXDRObject(), t.buying = e.buying.toXDRObject(), !this.isValidAmount(e.amount)) throw new TypeError(this.constructAmountRequirementsError("amount"));
                if (t.amount = this._toXDRAmount(e.amount), (0, n.default)(e.price)) throw new TypeError("price argument is required");
                t.price = this._toXDRPrice(e.price);
                var r = new o.default.CreatePassiveOfferOp(t),
                    a = {};
                return a.body = o.default.OperationBody.createPassiveOffer(r), this.setSourceAccount(a, e), new o.default.Operation(a)
            };
            var n = a(r(140)),
                o = a(r(5581));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        9433: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.inflation = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = {};
                return t.body = a.default.OperationBody.inflation(), this.setSourceAccount(t, e), new a.default.Operation(t)
            };
            var n, o = r(5581),
                a = (n = o) && n.__esModule ? n : {
                    default: n
                }
        },
        9434: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.manageData = function(e) {
                var t = {};
                if (!((0, n.default)(e.name) && e.name.length <= 64)) throw new Error("name must be a string, up to 64 characters");
                if (t.dataName = e.name, !(0, n.default)(e.value) && !Buffer.isBuffer(e.value) && null !== e.value) throw new Error("value must be a string, Buffer or null");
                (0, n.default)(e.value) ? t.dataValue = Buffer.from(e.value): t.dataValue = e.value;
                if (null !== t.dataValue && t.dataValue.length > 64) throw new Error("value cannot be longer that 64 bytes");
                var r = new o.default.ManageDataOp(t),
                    a = {};
                return a.body = o.default.OperationBody.manageDatum(r), this.setSourceAccount(a, e), new o.default.Operation(a)
            };
            var n = a(r(161)),
                o = a(r(5581));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        9435: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.manageOffer = function(e) {
                var t = {};
                if (t.selling = e.selling.toXDRObject(), t.buying = e.buying.toXDRObject(), !this.isValidAmount(e.amount, !0)) throw new TypeError(this.constructAmountRequirementsError("amount"));
                if (t.amount = this._toXDRAmount(e.amount), (0, n.default)(e.price)) throw new TypeError("price argument is required");
                t.price = this._toXDRPrice(e.price), (0, n.default)(e.offerId) ? e.offerId = "0" : e.offerId = e.offerId.toString();
                t.offerId = o.UnsignedHyper.fromString(e.offerId);
                var r = new a.default.ManageOfferOp(t),
                    u = {};
                return u.body = a.default.OperationBody.manageOffer(r), this.setSourceAccount(u, e), new a.default.Operation(u)
            };
            var n = u(r(140)),
                o = r(252),
                a = u(r(5581));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        9436: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pathPayment = function(e) {
                switch (!0) {
                    case !e.sendAsset:
                        throw new Error("Must specify a send asset");
                    case !this.isValidAmount(e.sendMax):
                        throw new TypeError(this.constructAmountRequirementsError("sendMax"));
                    case !s.StrKey.isValidEd25519PublicKey(e.destination):
                        throw new Error("destination is invalid");
                    case !e.destAsset:
                        throw new Error("Must provide a destAsset for a payment operation");
                    case !this.isValidAmount(e.destAmount):
                        throw new TypeError(this.constructAmountRequirementsError("destAmount"))
                }
                var t = {};
                t.sendAsset = e.sendAsset.toXDRObject(), t.sendMax = this._toXDRAmount(e.sendMax), t.destination = u.Keypair.fromPublicKey(e.destination).xdrAccountId(), t.destAsset = e.destAsset.toXDRObject(), t.destAmount = this._toXDRAmount(e.destAmount);
                var r = e.path ? e.path : [];
                t.path = r.map((function(e) {
                    return e.toXDRObject()
                }));
                var n = new a.default.PathPaymentOp(t),
                    o = {};
                return o.body = a.default.OperationBody.pathPayment(n), this.setSourceAccount(o, e), new a.default.Operation(o)
            };
            var n, o = r(5581),
                a = (n = o) && n.__esModule ? n : {
                    default: n
                },
                u = r(5695),
                s = r(5649)
        },
        9437: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.payment = function(e) {
                if (!s.StrKey.isValidEd25519PublicKey(e.destination)) throw new Error("destination is invalid");
                if (!e.asset) throw new Error("Must provide an asset for a payment operation");
                if (!this.isValidAmount(e.amount)) throw new TypeError(this.constructAmountRequirementsError("amount"));
                var t = {};
                t.destination = u.Keypair.fromPublicKey(e.destination).xdrAccountId(), t.asset = e.asset.toXDRObject(), t.amount = this._toXDRAmount(e.amount);
                var r = new a.default.PaymentOp(t),
                    n = {};
                return n.body = a.default.OperationBody.payment(r), this.setSourceAccount(n, e), new a.default.Operation(n)
            };
            var n, o = r(5581),
                a = (n = o) && n.__esModule ? n : {
                    default: n
                },
                u = r(5695),
                s = r(5649)
        },
        9438: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setOptions = function(e) {
                var t = {};
                if (e.inflationDest) {
                    if (!s.StrKey.isValidEd25519PublicKey(e.inflationDest)) throw new Error("inflationDest is invalid");
                    t.inflationDest = u.Keypair.fromPublicKey(e.inflationDest).xdrAccountId()
                }
                if (t.clearFlags = this._checkUnsignedIntValue("clearFlags", e.clearFlags), t.setFlags = this._checkUnsignedIntValue("setFlags", e.setFlags), t.masterWeight = this._checkUnsignedIntValue("masterWeight", e.masterWeight, l), t.lowThreshold = this._checkUnsignedIntValue("lowThreshold", e.lowThreshold, l), t.medThreshold = this._checkUnsignedIntValue("medThreshold", e.medThreshold, l), t.highThreshold = this._checkUnsignedIntValue("highThreshold", e.highThreshold, l), !(0, n.default)(e.homeDomain) && !(0, o.default)(e.homeDomain)) throw new TypeError("homeDomain argument must be of type String");
                if (t.homeDomain = e.homeDomain, e.signer) {
                    var r = this._checkUnsignedIntValue("signer.weight", e.signer.weight, l),
                        i = void 0,
                        c = 0;
                    if (e.signer.ed25519PublicKey) {
                        if (!s.StrKey.isValidEd25519PublicKey(e.signer.ed25519PublicKey)) throw new Error("signer.ed25519PublicKey is invalid.");
                        var p = s.StrKey.decodeEd25519PublicKey(e.signer.ed25519PublicKey);
                        i = new a.default.SignerKey.signerKeyTypeEd25519(p), c += 1
                    }
                    if (e.signer.preAuthTx) {
                        if ((0, o.default)(e.signer.preAuthTx) && (e.signer.preAuthTx = Buffer.from(e.signer.preAuthTx, "hex")), !Buffer.isBuffer(e.signer.preAuthTx) || 32 !== e.signer.preAuthTx.length) throw new Error("signer.preAuthTx must be 32 bytes Buffer.");
                        i = new a.default.SignerKey.signerKeyTypePreAuthTx(e.signer.preAuthTx), c += 1
                    }
                    if (e.signer.sha256Hash) {
                        if ((0, o.default)(e.signer.sha256Hash) && (e.signer.sha256Hash = Buffer.from(e.signer.sha256Hash, "hex")), !Buffer.isBuffer(e.signer.sha256Hash) || 32 !== e.signer.sha256Hash.length) throw new Error("signer.sha256Hash must be 32 bytes Buffer.");
                        i = new a.default.SignerKey.signerKeyTypeHashX(e.signer.sha256Hash), c += 1
                    }
                    if (1 !== c) throw new Error("Signer object must contain exactly one of signer.ed25519PublicKey, signer.sha256Hash, signer.preAuthTx.");
                    t.signer = new a.default.Signer({
                        key: i,
                        weight: r
                    })
                }
                var d = new a.default.SetOptionsOp(t),
                    f = {};
                return f.body = a.default.OperationBody.setOption(d), this.setSourceAccount(f, e), new a.default.Operation(f)
            };
            var n = i(r(140)),
                o = i(r(161)),
                a = i(r(5581)),
                u = r(5695),
                s = r(5649);

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e, t) {
                if (e >= 0 && e <= 255) return !0;
                throw new Error(t + " value must be between 0 and 255")
            }
        },
        9440: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Account = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                o = s(r(5845)),
                a = s(r(161)),
                u = r(5649);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.Account = function() {
                function e(t, r) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), !u.StrKey.isValidEd25519PublicKey(t)) throw new Error("accountId is invalid");
                    if (!(0, a.default)(r)) throw new Error("sequence must be of type string");
                    this._accountId = t, this.sequence = new o.default(r)
                }
                return n(e, [{
                    key: "accountId",
                    value: function() {
                        return this._accountId
                    }
                }, {
                    key: "sequenceNumber",
                    value: function() {
                        return this.sequence.toString()
                    }
                }, {
                    key: "incrementSequenceNumber",
                    value: function() {
                        this.sequence = this.sequence.add(1)
                    }
                }]), e
            }()
        }
    }
]);