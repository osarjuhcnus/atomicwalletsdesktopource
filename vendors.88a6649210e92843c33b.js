(window.webpackJsonp = window.webpackJsonp || []).push([
    [83], {
        103: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = o(198),
                n = o(262),
                s = o(1055),
                a = o(613);

            function i(e, t) {
                if (null == e) throw new Error(t);
                return e
            }
            t.orThrow = function(e, t = "value must not be null") {
                return i(e, t)
            }, t.newDuration = function(e) {
                if (!Number.isSafeInteger(e)) throw new TypeError("duration cannot have fractional seconds");
                const t = new r.Duration;
                return t.setSeconds(e), t
            }, t.normalizeEntityId = function e(t, o) {
                switch (typeof o) {
                    case "object":
                        if (null == o[t]) break;
                        return Object.assign({
                            shard: 0,
                            realm: 0
                        }, o);
                    case "string": {
                        const r = o.split(".");
                        if (1 === r.length) {
                            return e(t, {
                                [t]: Number(r[0])
                            })
                        }
                        if (3 === r.length) return {
                            shard: Number(r[0]),
                            realm: Number(r[1]),
                            [t]: Number(r[2])
                        };
                        break
                    }
                    case "number":
                        if (!Number.isInteger(o) || o < 0) break;
                        if (!Number.isSafeInteger(o)) throw new Error(`${t} ID outside safe integer range for number: ${o}`);
                        return e(t, {
                            [t]: o
                        })
                }
                throw new Error(`invalid ${t} ID: ${o}`)
            }, t.getSdkKeys = function(e) {
                return e.getKeysList().map(e => a.Ed25519PublicKey.fromBytes(e.getEd25519_asU8()))
            }, t.setTimeoutAwaitable = function(e) {
                return new Promise(t => setTimeout(t, e))
            }, t.timeoutPromise = function(e, t, o) {
                const r = new Promise((t, r) => {
                    setTimeout(() => {
                        o(r)
                    }, e)
                });
                return Promise.race([t, r])
            }, t.reqDefined = i, t.runValidation = function(e, t) {
                const o = [];
                if (t(o), o.length > 0) throw new s.LocalValidationError(e.constructor.name, o)
            }, t.getResponseHeader = function(e) {
                switch (e.getResponseCase()) {
                    case n.Response.ResponseCase.RESPONSE_NOT_SET:
                        throw new Error("expected body for query response: " + e.toString());
                    case n.Response.ResponseCase.GETBYKEY:
                        return e.getGetbykey().getHeader();
                    case n.Response.ResponseCase.GETBYSOLIDITYID:
                        return e.getGetbysolidityid().getHeader();
                    case n.Response.ResponseCase.CONTRACTCALLLOCAL:
                        return e.getContractcalllocal().getHeader();
                    case n.Response.ResponseCase.CONTRACTGETBYTECODERESPONSE:
                        return e.getContractgetbytecoderesponse().getHeader();
                    case n.Response.ResponseCase.CONTRACTGETINFO:
                        return e.getContractgetinfo().getHeader();
                    case n.Response.ResponseCase.CONTRACTGETRECORDSRESPONSE:
                        return e.getContractgetrecordsresponse().getHeader();
                    case n.Response.ResponseCase.CRYPTOGETACCOUNTBALANCE:
                        return e.getCryptogetaccountbalance().getHeader();
                    case n.Response.ResponseCase.CRYPTOGETACCOUNTRECORDS:
                        return e.getCryptogetaccountrecords().getHeader();
                    case n.Response.ResponseCase.CRYPTOGETINFO:
                        return e.getCryptogetinfo().getHeader();
                    case n.Response.ResponseCase.CRYPTOGETCLAIM:
                        return e.getCryptogetclaim().getHeader();
                    case n.Response.ResponseCase.CRYPTOGETPROXYSTAKERS:
                        return e.getCryptogetproxystakers().getHeader();
                    case n.Response.ResponseCase.FILEGETCONTENTS:
                        return e.getFilegetcontents().getHeader();
                    case n.Response.ResponseCase.FILEGETINFO:
                        return e.getFilegetinfo().getHeader();
                    case n.Response.ResponseCase.TRANSACTIONGETRECEIPT:
                        return e.getTransactiongetreceipt().getHeader();
                    case n.Response.ResponseCase.TRANSACTIONGETRECORD:
                        return e.getTransactiongetrecord().getHeader();
                    case n.Response.ResponseCase.TRANSACTIONGETFASTRECORD:
                        return e.getTransactiongetfastrecord().getHeader();
                    default:
                        throw new Error("unsupported response case " + e.getResponseCase())
                }
            }, t.utf8encode = function(e) {
                const t = e.length;
                let o = -1;
                const r = new Uint8Array(3 * t);
                for (let n = 0, s = 0, a = 0; a !== t;) {
                    if (n = e.charCodeAt(a), a += 1, n >= 55296 && n <= 56319) {
                        if (a === t) {
                            r[o += 1] = 239, r[o += 1] = 191, r[o += 1] = 189;
                            break
                        }
                        if (s = e.charCodeAt(a), !(s >= 56320 && s <= 57343)) {
                            r[o += 1] = 239, r[o += 1] = 191, r[o += 1] = 189;
                            continue
                        }
                        if (n = 1024 * (n - 55296) + s - 56320 + 65536, a += 1, n > 65535) {
                            r[o += 1] = 240 | n >>> 18, r[o += 1] = 128 | n >>> 12 & 63, r[o += 1] = 128 | n >>> 6 & 63, r[o += 1] = 128 | 63 & n;
                            continue
                        }
                    }
                    n <= 127 ? r[o += 1] = 0 | n : n <= 2047 ? (r[o += 1] = 192 | n >>> 6, r[o += 1] = 128 | 63 & n) : (r[o += 1] = 224 | n >>> 12, r[o += 1] = 128 | n >>> 6 & 63, r[o += 1] = 128 | 63 & n)
                }
                return r.subarray(0, o + 1)
            }
        },
        1041: function(e, t, o) {
            var r = o(28),
                n = Function("return this")();
            r.exportSymbol("proto.proto.ResponseCodeEnum", null, n), proto.proto.ResponseCodeEnum = {
                OK: 0,
                INVALID_TRANSACTION: 1,
                PAYER_ACCOUNT_NOT_FOUND: 2,
                INVALID_NODE_ACCOUNT: 3,
                TRANSACTION_EXPIRED: 4,
                INVALID_TRANSACTION_START: 5,
                INVALID_TRANSACTION_DURATION: 6,
                INVALID_SIGNATURE: 7,
                MEMO_TOO_LONG: 8,
                INSUFFICIENT_TX_FEE: 9,
                INSUFFICIENT_PAYER_BALANCE: 10,
                DUPLICATE_TRANSACTION: 11,
                BUSY: 12,
                NOT_SUPPORTED: 13,
                INVALID_FILE_ID: 14,
                INVALID_ACCOUNT_ID: 15,
                INVALID_CONTRACT_ID: 16,
                INVALID_TRANSACTION_ID: 17,
                RECEIPT_NOT_FOUND: 18,
                RECORD_NOT_FOUND: 19,
                INVALID_SOLIDITY_ID: 20,
                UNKNOWN: 21,
                SUCCESS: 22,
                FAIL_INVALID: 23,
                FAIL_FEE: 24,
                FAIL_BALANCE: 25,
                KEY_REQUIRED: 26,
                BAD_ENCODING: 27,
                INSUFFICIENT_ACCOUNT_BALANCE: 28,
                INVALID_SOLIDITY_ADDRESS: 29,
                INSUFFICIENT_GAS: 30,
                CONTRACT_SIZE_LIMIT_EXCEEDED: 31,
                LOCAL_CALL_MODIFICATION_EXCEPTION: 32,
                CONTRACT_REVERT_EXECUTED: 33,
                CONTRACT_EXECUTION_EXCEPTION: 34,
                INVALID_RECEIVING_NODE_ACCOUNT: 35,
                MISSING_QUERY_HEADER: 36,
                ACCOUNT_UPDATE_FAILED: 37,
                INVALID_KEY_ENCODING: 38,
                NULL_SOLIDITY_ADDRESS: 39,
                CONTRACT_UPDATE_FAILED: 40,
                INVALID_QUERY_HEADER: 41,
                INVALID_FEE_SUBMITTED: 42,
                INVALID_PAYER_SIGNATURE: 43,
                KEY_NOT_PROVIDED: 44,
                INVALID_EXPIRATION_TIME: 45,
                NO_WACL_KEY: 46,
                FILE_CONTENT_EMPTY: 47,
                INVALID_ACCOUNT_AMOUNTS: 48,
                EMPTY_TRANSACTION_BODY: 49,
                INVALID_TRANSACTION_BODY: 50,
                INVALID_SIGNATURE_TYPE_MISMATCHING_KEY: 51,
                INVALID_SIGNATURE_COUNT_MISMATCHING_KEY: 52,
                EMPTY_CLAIM_BODY: 53,
                EMPTY_CLAIM_HASH: 54,
                EMPTY_CLAIM_KEYS: 55,
                INVALID_CLAIM_HASH_SIZE: 56,
                EMPTY_QUERY_BODY: 57,
                EMPTY_CLAIM_QUERY: 58,
                CLAIM_NOT_FOUND: 59,
                ACCOUNT_ID_DOES_NOT_EXIST: 60,
                CLAIM_ALREADY_EXISTS: 61,
                INVALID_FILE_WACL: 62,
                SERIALIZATION_FAILED: 63,
                TRANSACTION_OVERSIZE: 64,
                TRANSACTION_TOO_MANY_LAYERS: 65,
                CONTRACT_DELETED: 66,
                PLATFORM_NOT_ACTIVE: 67,
                KEY_PREFIX_MISMATCH: 68,
                PLATFORM_TRANSACTION_NOT_CREATED: 69,
                INVALID_RENEWAL_PERIOD: 70,
                INVALID_PAYER_ACCOUNT_ID: 71,
                ACCOUNT_DELETED: 72,
                FILE_DELETED: 73,
                ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS: 74,
                SETTING_NEGATIVE_ACCOUNT_BALANCE: 75,
                OBTAINER_REQUIRED: 76,
                OBTAINER_SAME_CONTRACT_ID: 77,
                OBTAINER_DOES_NOT_EXIST: 78,
                MODIFYING_IMMUTABLE_CONTRACT: 79,
                FILE_SYSTEM_EXCEPTION: 80,
                AUTORENEW_DURATION_NOT_IN_RANGE: 81,
                ERROR_DECODING_BYTESTRING: 82,
                CONTRACT_FILE_EMPTY: 83,
                CONTRACT_BYTECODE_EMPTY: 84,
                INVALID_INITIAL_BALANCE: 85,
                INVALID_RECEIVE_RECORD_THRESHOLD: 86,
                INVALID_SEND_RECORD_THRESHOLD: 87,
                ACCOUNT_IS_NOT_GENESIS_ACCOUNT: 88,
                PAYER_ACCOUNT_UNAUTHORIZED: 89,
                INVALID_FREEZE_TRANSACTION_BODY: 90,
                FREEZE_TRANSACTION_BODY_NOT_FOUND: 91,
                TRANSFER_LIST_SIZE_LIMIT_EXCEEDED: 92,
                RESULT_SIZE_LIMIT_EXCEEDED: 93,
                NOT_SPECIAL_ACCOUNT: 94,
                CONTRACT_NEGATIVE_GAS: 95,
                CONTRACT_NEGATIVE_VALUE: 96,
                INVALID_FEE_FILE: 97,
                INVALID_EXCHANGE_RATE_FILE: 98,
                INSUFFICIENT_LOCAL_CALL_GAS: 99,
                ENTITY_NOT_ALLOWED_TO_DELETE: 100,
                AUTHORIZATION_FAILED: 101,
                FILE_UPLOADED_PROTO_INVALID: 102,
                FILE_UPLOADED_PROTO_NOT_SAVED_TO_DISK: 103,
                FEE_SCHEDULE_FILE_PART_UPLOADED: 104,
                EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED: 105,
                MAX_CONTRACT_STORAGE_EXCEEDED: 106,
                TRANSAFER_ACCOUNT_SAME_AS_DELETE_ACCOUNT: 107,
                TOTAL_LEDGER_BALANCE_INVALID: 108,
                EXPIRATION_REDUCTION_NOT_ALLOWED: 110,
                INVALID_TOPIC_ID: 150,
                TOPIC_DELETED: 151,
                TOPIC_NOT_ENABLED: 152,
                INVALID_TOPIC_VALID_START_TIME: 153,
                INVALID_TOPIC_EXPIRATION_TIME: 154,
                INVALID_ADMIN_KEY: 155,
                INVALID_SUBMIT_KEY: 156,
                UNAUTHORIZED: 157,
                INVALID_TOPIC_MESSAGE: 158,
                INVALID_AUTORENEW_ACCOUNT: 159,
                AUTORENEW_ACCOUNT_NOT_ALLOWED: 160,
                AUTORENEW_ACCOUNT_SIGNATURE_MISSING: 161,
                TOPIC_EXPIRED: 162
            }, r.object.extend(t, proto.proto)
        },
        105: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")();
            n.exportSymbol("proto.proto.Timestamp", null, s), n.exportSymbol("proto.proto.TimestampSeconds", null, s), proto.proto.Timestamp = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.Timestamp, r.Message), n.DEBUG && !COMPILED && (proto.proto.Timestamp.displayName = "proto.proto.Timestamp"), proto.proto.TimestampSeconds = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.TimestampSeconds, r.Message), n.DEBUG && !COMPILED && (proto.proto.TimestampSeconds.displayName = "proto.proto.TimestampSeconds"), r.Message.GENERATE_TO_OBJECT && (proto.proto.Timestamp.prototype.toObject = function(e) {
                return proto.proto.Timestamp.toObject(e, this)
            }, proto.proto.Timestamp.toObject = function(e, t) {
                var o = {
                    seconds: r.Message.getFieldWithDefault(t, 1, 0),
                    nanos: r.Message.getFieldWithDefault(t, 2, 0)
                };
                return e && (o.$jspbMessageInstance = t), o
            }), proto.proto.Timestamp.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.Timestamp;
                return proto.proto.Timestamp.deserializeBinaryFromReader(o, t)
            }, proto.proto.Timestamp.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = t.readInt64();
                            e.setSeconds(o);
                            break;
                        case 2:
                            o = t.readInt32();
                            e.setNanos(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.Timestamp.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.Timestamp.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.Timestamp.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                0 !== (o = e.getSeconds()) && t.writeInt64(1, o), 0 !== (o = e.getNanos()) && t.writeInt32(2, o)
            }, proto.proto.Timestamp.prototype.getSeconds = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.proto.Timestamp.prototype.setSeconds = function(e) {
                return r.Message.setProto3IntField(this, 1, e)
            }, proto.proto.Timestamp.prototype.getNanos = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.proto.Timestamp.prototype.setNanos = function(e) {
                return r.Message.setProto3IntField(this, 2, e)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.TimestampSeconds.prototype.toObject = function(e) {
                return proto.proto.TimestampSeconds.toObject(e, this)
            }, proto.proto.TimestampSeconds.toObject = function(e, t) {
                var o = {
                    seconds: r.Message.getFieldWithDefault(t, 1, 0)
                };
                return e && (o.$jspbMessageInstance = t), o
            }), proto.proto.TimestampSeconds.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.TimestampSeconds;
                return proto.proto.TimestampSeconds.deserializeBinaryFromReader(o, t)
            }, proto.proto.TimestampSeconds.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = t.readInt64();
                            e.setSeconds(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.TimestampSeconds.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.TimestampSeconds.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.TimestampSeconds.serializeBinaryToWriter = function(e, t) {
                var o;
                0 !== (o = e.getSeconds()) && t.writeInt64(1, o)
            }, proto.proto.TimestampSeconds.prototype.getSeconds = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.proto.TimestampSeconds.prototype.setSeconds = function(e) {
                return r.Message.setProto3IntField(this, 1, e)
            }, n.object.extend(t, proto.proto)
        },
        1052: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(1793);
            n.object.extend(proto, a);
            var i = o(36);
            n.object.extend(proto, i);
            var p = o(64);
            n.object.extend(proto, p);
            var c = o(119);
            n.object.extend(proto, c), n.exportSymbol("proto.proto.TransactionGetReceiptQuery", null, s), n.exportSymbol("proto.proto.TransactionGetReceiptResponse", null, s), proto.proto.TransactionGetReceiptQuery = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.TransactionGetReceiptQuery, r.Message), n.DEBUG && !COMPILED && (proto.proto.TransactionGetReceiptQuery.displayName = "proto.proto.TransactionGetReceiptQuery"), proto.proto.TransactionGetReceiptResponse = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.TransactionGetReceiptResponse, r.Message), n.DEBUG && !COMPILED && (proto.proto.TransactionGetReceiptResponse.displayName = "proto.proto.TransactionGetReceiptResponse"), r.Message.GENERATE_TO_OBJECT && (proto.proto.TransactionGetReceiptQuery.prototype.toObject = function(e) {
                return proto.proto.TransactionGetReceiptQuery.toObject(e, this)
            }, proto.proto.TransactionGetReceiptQuery.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && p.QueryHeader.toObject(e, o),
                    transactionid: (o = t.getTransactionid()) && i.TransactionID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.TransactionGetReceiptQuery.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.TransactionGetReceiptQuery;
                return proto.proto.TransactionGetReceiptQuery.deserializeBinaryFromReader(o, t)
            }, proto.proto.TransactionGetReceiptQuery.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new p.QueryHeader;
                            t.readMessage(o, p.QueryHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new i.TransactionID;
                            t.readMessage(o, i.TransactionID.deserializeBinaryFromReader), e.setTransactionid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.TransactionGetReceiptQuery.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.TransactionGetReceiptQuery.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.TransactionGetReceiptQuery.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, p.QueryHeader.serializeBinaryToWriter), null != (o = e.getTransactionid()) && t.writeMessage(2, o, i.TransactionID.serializeBinaryToWriter)
            }, proto.proto.TransactionGetReceiptQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, p.QueryHeader, 1)
            }, proto.proto.TransactionGetReceiptQuery.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.TransactionGetReceiptQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.TransactionGetReceiptQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.TransactionGetReceiptQuery.prototype.getTransactionid = function() {
                return r.Message.getWrapperField(this, i.TransactionID, 2)
            }, proto.proto.TransactionGetReceiptQuery.prototype.setTransactionid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.TransactionGetReceiptQuery.prototype.clearTransactionid = function() {
                return this.setTransactionid(void 0)
            }, proto.proto.TransactionGetReceiptQuery.prototype.hasTransactionid = function() {
                return null != r.Message.getField(this, 2)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.TransactionGetReceiptResponse.prototype.toObject = function(e) {
                return proto.proto.TransactionGetReceiptResponse.toObject(e, this)
            }, proto.proto.TransactionGetReceiptResponse.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && c.ResponseHeader.toObject(e, o),
                    receipt: (o = t.getReceipt()) && a.TransactionReceipt.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.TransactionGetReceiptResponse.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.TransactionGetReceiptResponse;
                return proto.proto.TransactionGetReceiptResponse.deserializeBinaryFromReader(o, t)
            }, proto.proto.TransactionGetReceiptResponse.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new c.ResponseHeader;
                            t.readMessage(o, c.ResponseHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new a.TransactionReceipt;
                            t.readMessage(o, a.TransactionReceipt.deserializeBinaryFromReader), e.setReceipt(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.TransactionGetReceiptResponse.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.TransactionGetReceiptResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.TransactionGetReceiptResponse.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, c.ResponseHeader.serializeBinaryToWriter), null != (o = e.getReceipt()) && t.writeMessage(2, o, a.TransactionReceipt.serializeBinaryToWriter)
            }, proto.proto.TransactionGetReceiptResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, c.ResponseHeader, 1)
            }, proto.proto.TransactionGetReceiptResponse.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.TransactionGetReceiptResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.TransactionGetReceiptResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.TransactionGetReceiptResponse.prototype.getReceipt = function() {
                return r.Message.getWrapperField(this, a.TransactionReceipt, 2)
            }, proto.proto.TransactionGetReceiptResponse.prototype.setReceipt = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.TransactionGetReceiptResponse.prototype.clearReceipt = function() {
                return this.setReceipt(void 0)
            }, proto.proto.TransactionGetReceiptResponse.prototype.hasReceipt = function() {
                return null != r.Message.getField(this, 2)
            }, n.object.extend(t, proto.proto)
        },
        1053: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(617);
            n.object.extend(proto, a);
            var i = o(36);
            n.object.extend(proto, i);
            var p = o(64);
            n.object.extend(proto, p);
            var c = o(119);
            n.object.extend(proto, c), n.exportSymbol("proto.proto.TransactionGetRecordQuery", null, s), n.exportSymbol("proto.proto.TransactionGetRecordResponse", null, s), proto.proto.TransactionGetRecordQuery = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.TransactionGetRecordQuery, r.Message), n.DEBUG && !COMPILED && (proto.proto.TransactionGetRecordQuery.displayName = "proto.proto.TransactionGetRecordQuery"), proto.proto.TransactionGetRecordResponse = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.TransactionGetRecordResponse, r.Message), n.DEBUG && !COMPILED && (proto.proto.TransactionGetRecordResponse.displayName = "proto.proto.TransactionGetRecordResponse"), r.Message.GENERATE_TO_OBJECT && (proto.proto.TransactionGetRecordQuery.prototype.toObject = function(e) {
                return proto.proto.TransactionGetRecordQuery.toObject(e, this)
            }, proto.proto.TransactionGetRecordQuery.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && p.QueryHeader.toObject(e, o),
                    transactionid: (o = t.getTransactionid()) && i.TransactionID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.TransactionGetRecordQuery.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.TransactionGetRecordQuery;
                return proto.proto.TransactionGetRecordQuery.deserializeBinaryFromReader(o, t)
            }, proto.proto.TransactionGetRecordQuery.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new p.QueryHeader;
                            t.readMessage(o, p.QueryHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new i.TransactionID;
                            t.readMessage(o, i.TransactionID.deserializeBinaryFromReader), e.setTransactionid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.TransactionGetRecordQuery.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.TransactionGetRecordQuery.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.TransactionGetRecordQuery.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, p.QueryHeader.serializeBinaryToWriter), null != (o = e.getTransactionid()) && t.writeMessage(2, o, i.TransactionID.serializeBinaryToWriter)
            }, proto.proto.TransactionGetRecordQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, p.QueryHeader, 1)
            }, proto.proto.TransactionGetRecordQuery.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.TransactionGetRecordQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.TransactionGetRecordQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.TransactionGetRecordQuery.prototype.getTransactionid = function() {
                return r.Message.getWrapperField(this, i.TransactionID, 2)
            }, proto.proto.TransactionGetRecordQuery.prototype.setTransactionid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.TransactionGetRecordQuery.prototype.clearTransactionid = function() {
                return this.setTransactionid(void 0)
            }, proto.proto.TransactionGetRecordQuery.prototype.hasTransactionid = function() {
                return null != r.Message.getField(this, 2)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.TransactionGetRecordResponse.prototype.toObject = function(e) {
                return proto.proto.TransactionGetRecordResponse.toObject(e, this)
            }, proto.proto.TransactionGetRecordResponse.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && c.ResponseHeader.toObject(e, o),
                    transactionrecord: (o = t.getTransactionrecord()) && a.TransactionRecord.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.TransactionGetRecordResponse.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.TransactionGetRecordResponse;
                return proto.proto.TransactionGetRecordResponse.deserializeBinaryFromReader(o, t)
            }, proto.proto.TransactionGetRecordResponse.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new c.ResponseHeader;
                            t.readMessage(o, c.ResponseHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 3:
                            o = new a.TransactionRecord;
                            t.readMessage(o, a.TransactionRecord.deserializeBinaryFromReader), e.setTransactionrecord(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.TransactionGetRecordResponse.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.TransactionGetRecordResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.TransactionGetRecordResponse.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, c.ResponseHeader.serializeBinaryToWriter), null != (o = e.getTransactionrecord()) && t.writeMessage(3, o, a.TransactionRecord.serializeBinaryToWriter)
            }, proto.proto.TransactionGetRecordResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, c.ResponseHeader, 1)
            }, proto.proto.TransactionGetRecordResponse.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.TransactionGetRecordResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.TransactionGetRecordResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.TransactionGetRecordResponse.prototype.getTransactionrecord = function() {
                return r.Message.getWrapperField(this, a.TransactionRecord, 3)
            }, proto.proto.TransactionGetRecordResponse.prototype.setTransactionrecord = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.TransactionGetRecordResponse.prototype.clearTransactionrecord = function() {
                return this.setTransactionrecord(void 0)
            }, proto.proto.TransactionGetRecordResponse.prototype.hasTransactionrecord = function() {
                return null != r.Message.getField(this, 3)
            }, n.object.extend(t, proto.proto)
        },
        119: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(64);
            n.object.extend(proto, a);
            var i = o(1041);
            n.object.extend(proto, i), n.exportSymbol("proto.proto.ResponseHeader", null, s), proto.proto.ResponseHeader = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.ResponseHeader, r.Message), n.DEBUG && !COMPILED && (proto.proto.ResponseHeader.displayName = "proto.proto.ResponseHeader"), r.Message.GENERATE_TO_OBJECT && (proto.proto.ResponseHeader.prototype.toObject = function(e) {
                return proto.proto.ResponseHeader.toObject(e, this)
            }, proto.proto.ResponseHeader.toObject = function(e, t) {
                var o = {
                    nodetransactionprecheckcode: r.Message.getFieldWithDefault(t, 1, 0),
                    responsetype: r.Message.getFieldWithDefault(t, 2, 0),
                    cost: r.Message.getFieldWithDefault(t, 3, "0"),
                    stateproof: t.getStateproof_asB64()
                };
                return e && (o.$jspbMessageInstance = t), o
            }), proto.proto.ResponseHeader.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.ResponseHeader;
                return proto.proto.ResponseHeader.deserializeBinaryFromReader(o, t)
            }, proto.proto.ResponseHeader.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = t.readEnum();
                            e.setNodetransactionprecheckcode(o);
                            break;
                        case 2:
                            o = t.readEnum();
                            e.setResponsetype(o);
                            break;
                        case 3:
                            o = t.readUint64String();
                            e.setCost(o);
                            break;
                        case 4:
                            o = t.readBytes();
                            e.setStateproof(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.ResponseHeader.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.ResponseHeader.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.ResponseHeader.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                0 !== (o = e.getNodetransactionprecheckcode()) && t.writeEnum(1, o), 0 !== (o = e.getResponsetype()) && t.writeEnum(2, o), o = e.getCost(), 0 !== parseInt(o, 10) && t.writeUint64String(3, o), (o = e.getStateproof_asU8()).length > 0 && t.writeBytes(4, o)
            }, proto.proto.ResponseHeader.prototype.getNodetransactionprecheckcode = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.proto.ResponseHeader.prototype.setNodetransactionprecheckcode = function(e) {
                return r.Message.setProto3EnumField(this, 1, e)
            }, proto.proto.ResponseHeader.prototype.getResponsetype = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.proto.ResponseHeader.prototype.setResponsetype = function(e) {
                return r.Message.setProto3EnumField(this, 2, e)
            }, proto.proto.ResponseHeader.prototype.getCost = function() {
                return r.Message.getFieldWithDefault(this, 3, "0")
            }, proto.proto.ResponseHeader.prototype.setCost = function(e) {
                return r.Message.setProto3StringIntField(this, 3, e)
            }, proto.proto.ResponseHeader.prototype.getStateproof = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.proto.ResponseHeader.prototype.getStateproof_asB64 = function() {
                return r.Message.bytesAsB64(this.getStateproof())
            }, proto.proto.ResponseHeader.prototype.getStateproof_asU8 = function() {
                return r.Message.bytesAsU8(this.getStateproof())
            }, proto.proto.ResponseHeader.prototype.setStateproof = function(e) {
                return r.Message.setProto3BytesField(this, 4, e)
            }, n.object.extend(t, proto.proto)
        },
        176: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(36);
            n.object.extend(proto, a);
            var i = o(615);
            n.object.extend(proto, i), n.exportSymbol("proto.proto.Transaction", null, s), n.exportSymbol("proto.proto.Transaction.BodydataCase", null, s), proto.proto.Transaction = function(e) {
                r.Message.initialize(this, e, 0, -1, null, proto.proto.Transaction.oneofGroups_)
            }, n.inherits(proto.proto.Transaction, r.Message), n.DEBUG && !COMPILED && (proto.proto.Transaction.displayName = "proto.proto.Transaction"), proto.proto.Transaction.oneofGroups_ = [
                [1, 4]
            ], proto.proto.Transaction.BodydataCase = {
                BODYDATA_NOT_SET: 0,
                BODY: 1,
                BODYBYTES: 4
            }, proto.proto.Transaction.prototype.getBodydataCase = function() {
                return r.Message.computeOneofCase(this, proto.proto.Transaction.oneofGroups_[0])
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.Transaction.prototype.toObject = function(e) {
                return proto.proto.Transaction.toObject(e, this)
            }, proto.proto.Transaction.toObject = function(e, t) {
                var o, r = {
                    body: (o = t.getBody()) && i.TransactionBody.toObject(e, o),
                    bodybytes: t.getBodybytes_asB64(),
                    sigs: (o = t.getSigs()) && a.SignatureList.toObject(e, o),
                    sigmap: (o = t.getSigmap()) && a.SignatureMap.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.Transaction.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.Transaction;
                return proto.proto.Transaction.deserializeBinaryFromReader(o, t)
            }, proto.proto.Transaction.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new i.TransactionBody;
                            t.readMessage(o, i.TransactionBody.deserializeBinaryFromReader), e.setBody(o);
                            break;
                        case 4:
                            o = t.readBytes();
                            e.setBodybytes(o);
                            break;
                        case 2:
                            o = new a.SignatureList;
                            t.readMessage(o, a.SignatureList.deserializeBinaryFromReader), e.setSigs(o);
                            break;
                        case 3:
                            o = new a.SignatureMap;
                            t.readMessage(o, a.SignatureMap.deserializeBinaryFromReader), e.setSigmap(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.Transaction.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.Transaction.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.Transaction.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getBody()) && t.writeMessage(1, o, i.TransactionBody.serializeBinaryToWriter), null != (o = r.Message.getField(e, 4)) && t.writeBytes(4, o), null != (o = e.getSigs()) && t.writeMessage(2, o, a.SignatureList.serializeBinaryToWriter), null != (o = e.getSigmap()) && t.writeMessage(3, o, a.SignatureMap.serializeBinaryToWriter)
            }, proto.proto.Transaction.prototype.getBody = function() {
                return r.Message.getWrapperField(this, i.TransactionBody, 1)
            }, proto.proto.Transaction.prototype.setBody = function(e) {
                return r.Message.setOneofWrapperField(this, 1, proto.proto.Transaction.oneofGroups_[0], e)
            }, proto.proto.Transaction.prototype.clearBody = function() {
                return this.setBody(void 0)
            }, proto.proto.Transaction.prototype.hasBody = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.Transaction.prototype.getBodybytes = function() {
                return r.Message.getFieldWithDefault(this, 4, "")
            }, proto.proto.Transaction.prototype.getBodybytes_asB64 = function() {
                return r.Message.bytesAsB64(this.getBodybytes())
            }, proto.proto.Transaction.prototype.getBodybytes_asU8 = function() {
                return r.Message.bytesAsU8(this.getBodybytes())
            }, proto.proto.Transaction.prototype.setBodybytes = function(e) {
                return r.Message.setOneofField(this, 4, proto.proto.Transaction.oneofGroups_[0], e)
            }, proto.proto.Transaction.prototype.clearBodybytes = function() {
                return r.Message.setOneofField(this, 4, proto.proto.Transaction.oneofGroups_[0], void 0)
            }, proto.proto.Transaction.prototype.hasBodybytes = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.Transaction.prototype.getSigs = function() {
                return r.Message.getWrapperField(this, a.SignatureList, 2)
            }, proto.proto.Transaction.prototype.setSigs = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.Transaction.prototype.clearSigs = function() {
                return this.setSigs(void 0)
            }, proto.proto.Transaction.prototype.hasSigs = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.Transaction.prototype.getSigmap = function() {
                return r.Message.getWrapperField(this, a.SignatureMap, 3)
            }, proto.proto.Transaction.prototype.setSigmap = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.Transaction.prototype.clearSigmap = function() {
                return this.setSigmap(void 0)
            }, proto.proto.Transaction.prototype.hasSigmap = function() {
                return null != r.Message.getField(this, 3)
            }, n.object.extend(t, proto.proto)
        },
        1775: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(36);
            n.object.extend(proto, a);
            var i = o(105);
            n.object.extend(proto, i), n.exportSymbol("proto.proto.SystemDeleteTransactionBody", null, s), n.exportSymbol("proto.proto.SystemDeleteTransactionBody.IdCase", null, s), proto.proto.SystemDeleteTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, proto.proto.SystemDeleteTransactionBody.oneofGroups_)
            }, n.inherits(proto.proto.SystemDeleteTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.SystemDeleteTransactionBody.displayName = "proto.proto.SystemDeleteTransactionBody"), proto.proto.SystemDeleteTransactionBody.oneofGroups_ = [
                [1, 2, 4]
            ], proto.proto.SystemDeleteTransactionBody.IdCase = {
                ID_NOT_SET: 0,
                FILEID: 1,
                CONTRACTID: 2,
                TOPICID: 4
            }, proto.proto.SystemDeleteTransactionBody.prototype.getIdCase = function() {
                return r.Message.computeOneofCase(this, proto.proto.SystemDeleteTransactionBody.oneofGroups_[0])
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.SystemDeleteTransactionBody.prototype.toObject = function(e) {
                return proto.proto.SystemDeleteTransactionBody.toObject(e, this)
            }, proto.proto.SystemDeleteTransactionBody.toObject = function(e, t) {
                var o, r = {
                    fileid: (o = t.getFileid()) && a.FileID.toObject(e, o),
                    contractid: (o = t.getContractid()) && a.ContractID.toObject(e, o),
                    topicid: (o = t.getTopicid()) && a.TopicID.toObject(e, o),
                    expirationtime: (o = t.getExpirationtime()) && i.TimestampSeconds.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.SystemDeleteTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.SystemDeleteTransactionBody;
                return proto.proto.SystemDeleteTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.SystemDeleteTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.FileID;
                            t.readMessage(o, a.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        case 2:
                            o = new a.ContractID;
                            t.readMessage(o, a.ContractID.deserializeBinaryFromReader), e.setContractid(o);
                            break;
                        case 4:
                            o = new a.TopicID;
                            t.readMessage(o, a.TopicID.deserializeBinaryFromReader), e.setTopicid(o);
                            break;
                        case 3:
                            o = new i.TimestampSeconds;
                            t.readMessage(o, i.TimestampSeconds.deserializeBinaryFromReader), e.setExpirationtime(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.SystemDeleteTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.SystemDeleteTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.SystemDeleteTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getFileid()) && t.writeMessage(1, o, a.FileID.serializeBinaryToWriter), null != (o = e.getContractid()) && t.writeMessage(2, o, a.ContractID.serializeBinaryToWriter), null != (o = e.getTopicid()) && t.writeMessage(4, o, a.TopicID.serializeBinaryToWriter), null != (o = e.getExpirationtime()) && t.writeMessage(3, o, i.TimestampSeconds.serializeBinaryToWriter)
            }, proto.proto.SystemDeleteTransactionBody.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, a.FileID, 1)
            }, proto.proto.SystemDeleteTransactionBody.prototype.setFileid = function(e) {
                return r.Message.setOneofWrapperField(this, 1, proto.proto.SystemDeleteTransactionBody.oneofGroups_[0], e)
            }, proto.proto.SystemDeleteTransactionBody.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.SystemDeleteTransactionBody.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.SystemDeleteTransactionBody.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, a.ContractID, 2)
            }, proto.proto.SystemDeleteTransactionBody.prototype.setContractid = function(e) {
                return r.Message.setOneofWrapperField(this, 2, proto.proto.SystemDeleteTransactionBody.oneofGroups_[0], e)
            }, proto.proto.SystemDeleteTransactionBody.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.SystemDeleteTransactionBody.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.SystemDeleteTransactionBody.prototype.getTopicid = function() {
                return r.Message.getWrapperField(this, a.TopicID, 4)
            }, proto.proto.SystemDeleteTransactionBody.prototype.setTopicid = function(e) {
                return r.Message.setOneofWrapperField(this, 4, proto.proto.SystemDeleteTransactionBody.oneofGroups_[0], e)
            }, proto.proto.SystemDeleteTransactionBody.prototype.clearTopicid = function() {
                return this.setTopicid(void 0)
            }, proto.proto.SystemDeleteTransactionBody.prototype.hasTopicid = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.SystemDeleteTransactionBody.prototype.getExpirationtime = function() {
                return r.Message.getWrapperField(this, i.TimestampSeconds, 3)
            }, proto.proto.SystemDeleteTransactionBody.prototype.setExpirationtime = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.SystemDeleteTransactionBody.prototype.clearExpirationtime = function() {
                return this.setExpirationtime(void 0)
            }, proto.proto.SystemDeleteTransactionBody.prototype.hasExpirationtime = function() {
                return null != r.Message.getField(this, 3)
            }, n.object.extend(t, proto.proto)
        },
        1776: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(36);
            n.object.extend(proto, a), n.exportSymbol("proto.proto.SystemUndeleteTransactionBody", null, s), n.exportSymbol("proto.proto.SystemUndeleteTransactionBody.IdCase", null, s), proto.proto.SystemUndeleteTransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, proto.proto.SystemUndeleteTransactionBody.oneofGroups_)
            }, n.inherits(proto.proto.SystemUndeleteTransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.SystemUndeleteTransactionBody.displayName = "proto.proto.SystemUndeleteTransactionBody"), proto.proto.SystemUndeleteTransactionBody.oneofGroups_ = [
                [1, 2, 3]
            ], proto.proto.SystemUndeleteTransactionBody.IdCase = {
                ID_NOT_SET: 0,
                FILEID: 1,
                CONTRACTID: 2,
                TOPICID: 3
            }, proto.proto.SystemUndeleteTransactionBody.prototype.getIdCase = function() {
                return r.Message.computeOneofCase(this, proto.proto.SystemUndeleteTransactionBody.oneofGroups_[0])
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.SystemUndeleteTransactionBody.prototype.toObject = function(e) {
                return proto.proto.SystemUndeleteTransactionBody.toObject(e, this)
            }, proto.proto.SystemUndeleteTransactionBody.toObject = function(e, t) {
                var o, r = {
                    fileid: (o = t.getFileid()) && a.FileID.toObject(e, o),
                    contractid: (o = t.getContractid()) && a.ContractID.toObject(e, o),
                    topicid: (o = t.getTopicid()) && a.TopicID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.SystemUndeleteTransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.SystemUndeleteTransactionBody;
                return proto.proto.SystemUndeleteTransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.SystemUndeleteTransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.FileID;
                            t.readMessage(o, a.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        case 2:
                            o = new a.ContractID;
                            t.readMessage(o, a.ContractID.deserializeBinaryFromReader), e.setContractid(o);
                            break;
                        case 3:
                            o = new a.TopicID;
                            t.readMessage(o, a.TopicID.deserializeBinaryFromReader), e.setTopicid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.SystemUndeleteTransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.SystemUndeleteTransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.SystemUndeleteTransactionBody.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getFileid()) && t.writeMessage(1, o, a.FileID.serializeBinaryToWriter), null != (o = e.getContractid()) && t.writeMessage(2, o, a.ContractID.serializeBinaryToWriter), null != (o = e.getTopicid()) && t.writeMessage(3, o, a.TopicID.serializeBinaryToWriter)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, a.FileID, 1)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.setFileid = function(e) {
                return r.Message.setOneofWrapperField(this, 1, proto.proto.SystemUndeleteTransactionBody.oneofGroups_[0], e)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, a.ContractID, 2)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.setContractid = function(e) {
                return r.Message.setOneofWrapperField(this, 2, proto.proto.SystemUndeleteTransactionBody.oneofGroups_[0], e)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.getTopicid = function() {
                return r.Message.getWrapperField(this, a.TopicID, 3)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.setTopicid = function(e) {
                return r.Message.setOneofWrapperField(this, 3, proto.proto.SystemUndeleteTransactionBody.oneofGroups_[0], e)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.clearTopicid = function() {
                return this.setTopicid(void 0)
            }, proto.proto.SystemUndeleteTransactionBody.prototype.hasTopicid = function() {
                return null != r.Message.getField(this, 3)
            }, n.object.extend(t, proto.proto)
        },
        1793: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(36);
            n.object.extend(proto, a);
            var i = o(1041);
            n.object.extend(proto, i);
            var p = o(3257);
            n.object.extend(proto, p), n.exportSymbol("proto.proto.TransactionReceipt", null, s), proto.proto.TransactionReceipt = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.TransactionReceipt, r.Message), n.DEBUG && !COMPILED && (proto.proto.TransactionReceipt.displayName = "proto.proto.TransactionReceipt"), r.Message.GENERATE_TO_OBJECT && (proto.proto.TransactionReceipt.prototype.toObject = function(e) {
                return proto.proto.TransactionReceipt.toObject(e, this)
            }, proto.proto.TransactionReceipt.toObject = function(e, t) {
                var o, n = {
                    status: r.Message.getFieldWithDefault(t, 1, 0),
                    accountid: (o = t.getAccountid()) && a.AccountID.toObject(e, o),
                    fileid: (o = t.getFileid()) && a.FileID.toObject(e, o),
                    contractid: (o = t.getContractid()) && a.ContractID.toObject(e, o),
                    exchangerate: (o = t.getExchangerate()) && p.ExchangeRateSet.toObject(e, o),
                    topicid: (o = t.getTopicid()) && a.TopicID.toObject(e, o),
                    topicsequencenumber: r.Message.getFieldWithDefault(t, 7, 0),
                    topicrunninghash: t.getTopicrunninghash_asB64()
                };
                return e && (n.$jspbMessageInstance = t), n
            }), proto.proto.TransactionReceipt.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.TransactionReceipt;
                return proto.proto.TransactionReceipt.deserializeBinaryFromReader(o, t)
            }, proto.proto.TransactionReceipt.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = t.readEnum();
                            e.setStatus(o);
                            break;
                        case 2:
                            o = new a.AccountID;
                            t.readMessage(o, a.AccountID.deserializeBinaryFromReader), e.setAccountid(o);
                            break;
                        case 3:
                            o = new a.FileID;
                            t.readMessage(o, a.FileID.deserializeBinaryFromReader), e.setFileid(o);
                            break;
                        case 4:
                            o = new a.ContractID;
                            t.readMessage(o, a.ContractID.deserializeBinaryFromReader), e.setContractid(o);
                            break;
                        case 5:
                            o = new p.ExchangeRateSet;
                            t.readMessage(o, p.ExchangeRateSet.deserializeBinaryFromReader), e.setExchangerate(o);
                            break;
                        case 6:
                            o = new a.TopicID;
                            t.readMessage(o, a.TopicID.deserializeBinaryFromReader), e.setTopicid(o);
                            break;
                        case 7:
                            o = t.readUint64();
                            e.setTopicsequencenumber(o);
                            break;
                        case 8:
                            o = t.readBytes();
                            e.setTopicrunninghash(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.TransactionReceipt.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.TransactionReceipt.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.TransactionReceipt.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                0 !== (o = e.getStatus()) && t.writeEnum(1, o), null != (o = e.getAccountid()) && t.writeMessage(2, o, a.AccountID.serializeBinaryToWriter), null != (o = e.getFileid()) && t.writeMessage(3, o, a.FileID.serializeBinaryToWriter), null != (o = e.getContractid()) && t.writeMessage(4, o, a.ContractID.serializeBinaryToWriter), null != (o = e.getExchangerate()) && t.writeMessage(5, o, p.ExchangeRateSet.serializeBinaryToWriter), null != (o = e.getTopicid()) && t.writeMessage(6, o, a.TopicID.serializeBinaryToWriter), 0 !== (o = e.getTopicsequencenumber()) && t.writeUint64(7, o), (o = e.getTopicrunninghash_asU8()).length > 0 && t.writeBytes(8, o)
            }, proto.proto.TransactionReceipt.prototype.getStatus = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.proto.TransactionReceipt.prototype.setStatus = function(e) {
                return r.Message.setProto3EnumField(this, 1, e)
            }, proto.proto.TransactionReceipt.prototype.getAccountid = function() {
                return r.Message.getWrapperField(this, a.AccountID, 2)
            }, proto.proto.TransactionReceipt.prototype.setAccountid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.TransactionReceipt.prototype.clearAccountid = function() {
                return this.setAccountid(void 0)
            }, proto.proto.TransactionReceipt.prototype.hasAccountid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.TransactionReceipt.prototype.getFileid = function() {
                return r.Message.getWrapperField(this, a.FileID, 3)
            }, proto.proto.TransactionReceipt.prototype.setFileid = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.TransactionReceipt.prototype.clearFileid = function() {
                return this.setFileid(void 0)
            }, proto.proto.TransactionReceipt.prototype.hasFileid = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.TransactionReceipt.prototype.getContractid = function() {
                return r.Message.getWrapperField(this, a.ContractID, 4)
            }, proto.proto.TransactionReceipt.prototype.setContractid = function(e) {
                return r.Message.setWrapperField(this, 4, e)
            }, proto.proto.TransactionReceipt.prototype.clearContractid = function() {
                return this.setContractid(void 0)
            }, proto.proto.TransactionReceipt.prototype.hasContractid = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.TransactionReceipt.prototype.getExchangerate = function() {
                return r.Message.getWrapperField(this, p.ExchangeRateSet, 5)
            }, proto.proto.TransactionReceipt.prototype.setExchangerate = function(e) {
                return r.Message.setWrapperField(this, 5, e)
            }, proto.proto.TransactionReceipt.prototype.clearExchangerate = function() {
                return this.setExchangerate(void 0)
            }, proto.proto.TransactionReceipt.prototype.hasExchangerate = function() {
                return null != r.Message.getField(this, 5)
            }, proto.proto.TransactionReceipt.prototype.getTopicid = function() {
                return r.Message.getWrapperField(this, a.TopicID, 6)
            }, proto.proto.TransactionReceipt.prototype.setTopicid = function(e) {
                return r.Message.setWrapperField(this, 6, e)
            }, proto.proto.TransactionReceipt.prototype.clearTopicid = function() {
                return this.setTopicid(void 0)
            }, proto.proto.TransactionReceipt.prototype.hasTopicid = function() {
                return null != r.Message.getField(this, 6)
            }, proto.proto.TransactionReceipt.prototype.getTopicsequencenumber = function() {
                return r.Message.getFieldWithDefault(this, 7, 0)
            }, proto.proto.TransactionReceipt.prototype.setTopicsequencenumber = function(e) {
                return r.Message.setProto3IntField(this, 7, e)
            }, proto.proto.TransactionReceipt.prototype.getTopicrunninghash = function() {
                return r.Message.getFieldWithDefault(this, 8, "")
            }, proto.proto.TransactionReceipt.prototype.getTopicrunninghash_asB64 = function() {
                return r.Message.bytesAsB64(this.getTopicrunninghash())
            }, proto.proto.TransactionReceipt.prototype.getTopicrunninghash_asU8 = function() {
                return r.Message.bytesAsU8(this.getTopicrunninghash())
            }, proto.proto.TransactionReceipt.prototype.setTopicrunninghash = function(e) {
                return r.Message.setProto3BytesField(this, 8, e)
            }, n.object.extend(t, proto.proto)
        },
        1795: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(617);
            n.object.extend(proto, a);
            var i = o(36);
            n.object.extend(proto, i);
            var p = o(64);
            n.object.extend(proto, p);
            var c = o(119);
            n.object.extend(proto, c), n.exportSymbol("proto.proto.TransactionGetFastRecordQuery", null, s), n.exportSymbol("proto.proto.TransactionGetFastRecordResponse", null, s), proto.proto.TransactionGetFastRecordQuery = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.TransactionGetFastRecordQuery, r.Message), n.DEBUG && !COMPILED && (proto.proto.TransactionGetFastRecordQuery.displayName = "proto.proto.TransactionGetFastRecordQuery"), proto.proto.TransactionGetFastRecordResponse = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.TransactionGetFastRecordResponse, r.Message), n.DEBUG && !COMPILED && (proto.proto.TransactionGetFastRecordResponse.displayName = "proto.proto.TransactionGetFastRecordResponse"), r.Message.GENERATE_TO_OBJECT && (proto.proto.TransactionGetFastRecordQuery.prototype.toObject = function(e) {
                return proto.proto.TransactionGetFastRecordQuery.toObject(e, this)
            }, proto.proto.TransactionGetFastRecordQuery.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && p.QueryHeader.toObject(e, o),
                    transactionid: (o = t.getTransactionid()) && i.TransactionID.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.TransactionGetFastRecordQuery.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.TransactionGetFastRecordQuery;
                return proto.proto.TransactionGetFastRecordQuery.deserializeBinaryFromReader(o, t)
            }, proto.proto.TransactionGetFastRecordQuery.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new p.QueryHeader;
                            t.readMessage(o, p.QueryHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new i.TransactionID;
                            t.readMessage(o, i.TransactionID.deserializeBinaryFromReader), e.setTransactionid(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.TransactionGetFastRecordQuery.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.TransactionGetFastRecordQuery.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.TransactionGetFastRecordQuery.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, p.QueryHeader.serializeBinaryToWriter), null != (o = e.getTransactionid()) && t.writeMessage(2, o, i.TransactionID.serializeBinaryToWriter)
            }, proto.proto.TransactionGetFastRecordQuery.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, p.QueryHeader, 1)
            }, proto.proto.TransactionGetFastRecordQuery.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.TransactionGetFastRecordQuery.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.TransactionGetFastRecordQuery.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.TransactionGetFastRecordQuery.prototype.getTransactionid = function() {
                return r.Message.getWrapperField(this, i.TransactionID, 2)
            }, proto.proto.TransactionGetFastRecordQuery.prototype.setTransactionid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.TransactionGetFastRecordQuery.prototype.clearTransactionid = function() {
                return this.setTransactionid(void 0)
            }, proto.proto.TransactionGetFastRecordQuery.prototype.hasTransactionid = function() {
                return null != r.Message.getField(this, 2)
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.TransactionGetFastRecordResponse.prototype.toObject = function(e) {
                return proto.proto.TransactionGetFastRecordResponse.toObject(e, this)
            }, proto.proto.TransactionGetFastRecordResponse.toObject = function(e, t) {
                var o, r = {
                    header: (o = t.getHeader()) && c.ResponseHeader.toObject(e, o),
                    transactionrecord: (o = t.getTransactionrecord()) && a.TransactionRecord.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.TransactionGetFastRecordResponse.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.TransactionGetFastRecordResponse;
                return proto.proto.TransactionGetFastRecordResponse.deserializeBinaryFromReader(o, t)
            }, proto.proto.TransactionGetFastRecordResponse.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new c.ResponseHeader;
                            t.readMessage(o, c.ResponseHeader.deserializeBinaryFromReader), e.setHeader(o);
                            break;
                        case 2:
                            o = new a.TransactionRecord;
                            t.readMessage(o, a.TransactionRecord.deserializeBinaryFromReader), e.setTransactionrecord(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.TransactionGetFastRecordResponse.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.TransactionGetFastRecordResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.TransactionGetFastRecordResponse.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getHeader()) && t.writeMessage(1, o, c.ResponseHeader.serializeBinaryToWriter), null != (o = e.getTransactionrecord()) && t.writeMessage(2, o, a.TransactionRecord.serializeBinaryToWriter)
            }, proto.proto.TransactionGetFastRecordResponse.prototype.getHeader = function() {
                return r.Message.getWrapperField(this, c.ResponseHeader, 1)
            }, proto.proto.TransactionGetFastRecordResponse.prototype.setHeader = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.TransactionGetFastRecordResponse.prototype.clearHeader = function() {
                return this.setHeader(void 0)
            }, proto.proto.TransactionGetFastRecordResponse.prototype.hasHeader = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.TransactionGetFastRecordResponse.prototype.getTransactionrecord = function() {
                return r.Message.getWrapperField(this, a.TransactionRecord, 2)
            }, proto.proto.TransactionGetFastRecordResponse.prototype.setTransactionrecord = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.TransactionGetFastRecordResponse.prototype.clearTransactionrecord = function() {
                return this.setTransactionrecord(void 0)
            }, proto.proto.TransactionGetFastRecordResponse.prototype.hasTransactionrecord = function() {
                return null != r.Message.getField(this, 2)
            }, n.object.extend(t, proto.proto)
        },
        1806: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = o(410);
            t.MirrorConsensusTopicResponse = class MirrorConsensusTopicResponse {
                constructor(e) {
                    this.consensusTimestamp = r.Time._fromProto(e.getConsensustimestamp()), this.message = e.getMessage_asU8(), this.runningHash = e.getRunninghash_asU8(), this.sequenceNumber = e.getSequencenumber()
                }
                toString() {
                    return Buffer.from(this.message).toString("utf8")
                }
            }
        },
        1807: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.MirrorSubscriptionHandle = class MirrorSubscriptionHandle {
                constructor(e) {
                    this.call = e
                }
                unsubscribe() {
                    this.call()
                }
            }
        },
        2362: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = o(3254),
                n = o(289);
            var s = n.grpc.Code;
            ! function(e) {
                for (var o in e) t.hasOwnProperty(o) || (t[o] = e[o])
            }(o(3268));
            const a = {
                    "https://grpc-web.myhbarwallet.com": {
                        shard: 0,
                        realm: 0,
                        account: 3
                    }
                },
                i = {
                    "https://grpc-web.testnet.myhbarwallet.com": {
                        shard: 0,
                        realm: 0,
                        account: 3
                    }
                };
            class Client extends r.BaseClient {
                constructor({
                    network: e = i,
                    operator: t
                }) {
                    super(e, t)
                }
                static forMainnet() {
                    return new Client({
                        network: a
                    })
                }
                static forTestnet() {
                    return new Client({
                        network: i
                    })
                }
                static fromFile() {
                    throw new Error("Client.fromFile is not supported in the browser")
                }
                static fromJson(e) {
                    return new Client(JSON.parse(e))
                }
                close() {
                    throw new Error("Client.close is not supported in the browser")
                }
                _unaryCall(e, t, o) {
                    return new Promise((r, a) => n.grpc.unary(o, {
                        host: e,
                        request: t,
                        onEnd(e) {
                            e.status === s.OK && null != e.message ? r(e.message) : a(new Error(e.statusMessage))
                        }
                    }))
                }
            }
            t.Client = Client;
            var p = o(3317);
            t.MirrorClient = p.MirrorClient;
            var c = o(3318);
            t.MirrorConsensusTopicQuery = c.MirrorConsensusTopicQuery
        },
        239: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(1041);
            n.object.extend(proto, a), n.exportSymbol("proto.proto.TransactionResponse", null, s), proto.proto.TransactionResponse = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.TransactionResponse, r.Message), n.DEBUG && !COMPILED && (proto.proto.TransactionResponse.displayName = "proto.proto.TransactionResponse"), r.Message.GENERATE_TO_OBJECT && (proto.proto.TransactionResponse.prototype.toObject = function(e) {
                return proto.proto.TransactionResponse.toObject(e, this)
            }, proto.proto.TransactionResponse.toObject = function(e, t) {
                var o = {
                    nodetransactionprecheckcode: r.Message.getFieldWithDefault(t, 1, 0)
                };
                return e && (o.$jspbMessageInstance = t), o
            }), proto.proto.TransactionResponse.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.TransactionResponse;
                return proto.proto.TransactionResponse.deserializeBinaryFromReader(o, t)
            }, proto.proto.TransactionResponse.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = t.readEnum();
                            e.setNodetransactionprecheckcode(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.TransactionResponse.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.TransactionResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.TransactionResponse.serializeBinaryToWriter = function(e, t) {
                var o;
                0 !== (o = e.getNodetransactionprecheckcode()) && t.writeEnum(1, o)
            }, proto.proto.TransactionResponse.prototype.getNodetransactionprecheckcode = function() {
                return r.Message.getFieldWithDefault(this, 1, 0)
            }, proto.proto.TransactionResponse.prototype.setNodetransactionprecheckcode = function(e) {
                return r.Message.setProto3EnumField(this, 1, e)
            }, n.object.extend(t, proto.proto)
        },
        240: function(e, t, o) {
            o(3262);
            var r = o(239),
                n = o(263),
                s = o(262),
                a = o(176),
                i = o(289).grpc,
                p = function() {
                    function e() {}
                    return e.serviceName = "proto.SmartContractService", e
                }();

            function c(e, t) {
                this.serviceHost = e, this.options = t || {}
            }
            p.createContract = {
                methodName: "createContract",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: a.Transaction,
                responseType: r.TransactionResponse
            }, p.updateContract = {
                methodName: "updateContract",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: a.Transaction,
                responseType: r.TransactionResponse
            }, p.contractCallMethod = {
                methodName: "contractCallMethod",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: a.Transaction,
                responseType: r.TransactionResponse
            }, p.getContractInfo = {
                methodName: "getContractInfo",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: n.Query,
                responseType: s.Response
            }, p.contractCallLocalMethod = {
                methodName: "contractCallLocalMethod",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: n.Query,
                responseType: s.Response
            }, p.ContractGetBytecode = {
                methodName: "ContractGetBytecode",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: n.Query,
                responseType: s.Response
            }, p.getBySolidityID = {
                methodName: "getBySolidityID",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: n.Query,
                responseType: s.Response
            }, p.getTxRecordByContractID = {
                methodName: "getTxRecordByContractID",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: n.Query,
                responseType: s.Response
            }, p.deleteContract = {
                methodName: "deleteContract",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: a.Transaction,
                responseType: r.TransactionResponse
            }, p.systemDelete = {
                methodName: "systemDelete",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: a.Transaction,
                responseType: r.TransactionResponse
            }, p.systemUndelete = {
                methodName: "systemUndelete",
                service: p,
                requestStream: !1,
                responseStream: !1,
                requestType: a.Transaction,
                responseType: r.TransactionResponse
            }, t.SmartContractService = p, c.prototype.createContract = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = i.unary(p.createContract, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== i.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, c.prototype.updateContract = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = i.unary(p.updateContract, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== i.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, c.prototype.contractCallMethod = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = i.unary(p.contractCallMethod, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== i.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, c.prototype.getContractInfo = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = i.unary(p.getContractInfo, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== i.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, c.prototype.contractCallLocalMethod = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = i.unary(p.contractCallLocalMethod, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== i.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, c.prototype.contractGetBytecode = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = i.unary(p.ContractGetBytecode, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== i.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, c.prototype.getBySolidityID = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = i.unary(p.getBySolidityID, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== i.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, c.prototype.getTxRecordByContractID = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = i.unary(p.getTxRecordByContractID, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== i.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, c.prototype.deleteContract = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = i.unary(p.deleteContract, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== i.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, c.prototype.systemDelete = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = i.unary(p.systemDelete, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== i.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, c.prototype.systemUndelete = function(e, t, o) {
                2 === arguments.length && (o = arguments[1]);
                var r = i.unary(p.systemUndelete, {
                    request: e,
                    host: this.serviceHost,
                    metadata: t,
                    transport: this.options.transport,
                    debug: this.options.debug,
                    onEnd: function(e) {
                        if (o)
                            if (e.status !== i.Code.OK) {
                                var t = new Error(e.statusMessage);
                                t.code = e.status, t.metadata = e.trailers, o(t, null)
                            } else o(null, e.message)
                    }
                });
                return {
                    cancel: function() {
                        o = null, r.close()
                    }
                }
            }, t.SmartContractServiceClient = c
        },
        262: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(1774);
            n.object.extend(proto, a);
            var i = o(1042);
            n.object.extend(proto, i);
            var p = o(500);
            n.object.extend(proto, p);
            var c = o(1043);
            n.object.extend(proto, c);
            var u = o(1044);
            n.object.extend(proto, u);
            var d = o(1045);
            n.object.extend(proto, d);
            var l = o(1046);
            n.object.extend(proto, l);
            var y = o(1047);
            n.object.extend(proto, y);
            var g = o(1048);
            n.object.extend(proto, g);
            var T = o(1794);
            n.object.extend(proto, T);
            var f = o(1049);
            n.object.extend(proto, f);
            var R = o(1050);
            n.object.extend(proto, R);
            var C = o(1051);
            n.object.extend(proto, C);
            var B = o(1052);
            n.object.extend(proto, B);
            var h = o(1053);
            n.object.extend(proto, h);
            var F = o(1795);
            n.object.extend(proto, F);
            var M = o(1054);
            n.object.extend(proto, M), n.exportSymbol("proto.proto.Response", null, s), n.exportSymbol("proto.proto.Response.ResponseCase", null, s), proto.proto.Response = function(e) {
                r.Message.initialize(this, e, 0, -1, null, proto.proto.Response.oneofGroups_)
            }, n.inherits(proto.proto.Response, r.Message), n.DEBUG && !COMPILED && (proto.proto.Response.displayName = "proto.proto.Response"), proto.proto.Response.oneofGroups_ = [
                [1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 150]
            ], proto.proto.Response.ResponseCase = {
                RESPONSE_NOT_SET: 0,
                GETBYKEY: 1,
                GETBYSOLIDITYID: 2,
                CONTRACTCALLLOCAL: 3,
                CONTRACTGETBYTECODERESPONSE: 5,
                CONTRACTGETINFO: 4,
                CONTRACTGETRECORDSRESPONSE: 6,
                CRYPTOGETACCOUNTBALANCE: 7,
                CRYPTOGETACCOUNTRECORDS: 8,
                CRYPTOGETINFO: 9,
                CRYPTOGETCLAIM: 10,
                CRYPTOGETPROXYSTAKERS: 11,
                FILEGETCONTENTS: 12,
                FILEGETINFO: 13,
                TRANSACTIONGETRECEIPT: 14,
                TRANSACTIONGETRECORD: 15,
                TRANSACTIONGETFASTRECORD: 16,
                CONSENSUSGETTOPICINFO: 150
            }, proto.proto.Response.prototype.getResponseCase = function() {
                return r.Message.computeOneofCase(this, proto.proto.Response.oneofGroups_[0])
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.Response.prototype.toObject = function(e) {
                return proto.proto.Response.toObject(e, this)
            }, proto.proto.Response.toObject = function(e, t) {
                var o, r = {
                    getbykey: (o = t.getGetbykey()) && a.GetByKeyResponse.toObject(e, o),
                    getbysolidityid: (o = t.getGetbysolidityid()) && i.GetBySolidityIDResponse.toObject(e, o),
                    contractcalllocal: (o = t.getContractcalllocal()) && p.ContractCallLocalResponse.toObject(e, o),
                    contractgetbytecoderesponse: (o = t.getContractgetbytecoderesponse()) && c.ContractGetBytecodeResponse.toObject(e, o),
                    contractgetinfo: (o = t.getContractgetinfo()) && u.ContractGetInfoResponse.toObject(e, o),
                    contractgetrecordsresponse: (o = t.getContractgetrecordsresponse()) && d.ContractGetRecordsResponse.toObject(e, o),
                    cryptogetaccountbalance: (o = t.getCryptogetaccountbalance()) && l.CryptoGetAccountBalanceResponse.toObject(e, o),
                    cryptogetaccountrecords: (o = t.getCryptogetaccountrecords()) && y.CryptoGetAccountRecordsResponse.toObject(e, o),
                    cryptogetinfo: (o = t.getCryptogetinfo()) && g.CryptoGetInfoResponse.toObject(e, o),
                    cryptogetclaim: (o = t.getCryptogetclaim()) && T.CryptoGetClaimResponse.toObject(e, o),
                    cryptogetproxystakers: (o = t.getCryptogetproxystakers()) && f.CryptoGetStakersResponse.toObject(e, o),
                    filegetcontents: (o = t.getFilegetcontents()) && R.FileGetContentsResponse.toObject(e, o),
                    filegetinfo: (o = t.getFilegetinfo()) && C.FileGetInfoResponse.toObject(e, o),
                    transactiongetreceipt: (o = t.getTransactiongetreceipt()) && B.TransactionGetReceiptResponse.toObject(e, o),
                    transactiongetrecord: (o = t.getTransactiongetrecord()) && h.TransactionGetRecordResponse.toObject(e, o),
                    transactiongetfastrecord: (o = t.getTransactiongetfastrecord()) && F.TransactionGetFastRecordResponse.toObject(e, o),
                    consensusgettopicinfo: (o = t.getConsensusgettopicinfo()) && M.ConsensusGetTopicInfoResponse.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.Response.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.Response;
                return proto.proto.Response.deserializeBinaryFromReader(o, t)
            }, proto.proto.Response.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.GetByKeyResponse;
                            t.readMessage(o, a.GetByKeyResponse.deserializeBinaryFromReader), e.setGetbykey(o);
                            break;
                        case 2:
                            o = new i.GetBySolidityIDResponse;
                            t.readMessage(o, i.GetBySolidityIDResponse.deserializeBinaryFromReader), e.setGetbysolidityid(o);
                            break;
                        case 3:
                            o = new p.ContractCallLocalResponse;
                            t.readMessage(o, p.ContractCallLocalResponse.deserializeBinaryFromReader), e.setContractcalllocal(o);
                            break;
                        case 5:
                            o = new c.ContractGetBytecodeResponse;
                            t.readMessage(o, c.ContractGetBytecodeResponse.deserializeBinaryFromReader), e.setContractgetbytecoderesponse(o);
                            break;
                        case 4:
                            o = new u.ContractGetInfoResponse;
                            t.readMessage(o, u.ContractGetInfoResponse.deserializeBinaryFromReader), e.setContractgetinfo(o);
                            break;
                        case 6:
                            o = new d.ContractGetRecordsResponse;
                            t.readMessage(o, d.ContractGetRecordsResponse.deserializeBinaryFromReader), e.setContractgetrecordsresponse(o);
                            break;
                        case 7:
                            o = new l.CryptoGetAccountBalanceResponse;
                            t.readMessage(o, l.CryptoGetAccountBalanceResponse.deserializeBinaryFromReader), e.setCryptogetaccountbalance(o);
                            break;
                        case 8:
                            o = new y.CryptoGetAccountRecordsResponse;
                            t.readMessage(o, y.CryptoGetAccountRecordsResponse.deserializeBinaryFromReader), e.setCryptogetaccountrecords(o);
                            break;
                        case 9:
                            o = new g.CryptoGetInfoResponse;
                            t.readMessage(o, g.CryptoGetInfoResponse.deserializeBinaryFromReader), e.setCryptogetinfo(o);
                            break;
                        case 10:
                            o = new T.CryptoGetClaimResponse;
                            t.readMessage(o, T.CryptoGetClaimResponse.deserializeBinaryFromReader), e.setCryptogetclaim(o);
                            break;
                        case 11:
                            o = new f.CryptoGetStakersResponse;
                            t.readMessage(o, f.CryptoGetStakersResponse.deserializeBinaryFromReader), e.setCryptogetproxystakers(o);
                            break;
                        case 12:
                            o = new R.FileGetContentsResponse;
                            t.readMessage(o, R.FileGetContentsResponse.deserializeBinaryFromReader), e.setFilegetcontents(o);
                            break;
                        case 13:
                            o = new C.FileGetInfoResponse;
                            t.readMessage(o, C.FileGetInfoResponse.deserializeBinaryFromReader), e.setFilegetinfo(o);
                            break;
                        case 14:
                            o = new B.TransactionGetReceiptResponse;
                            t.readMessage(o, B.TransactionGetReceiptResponse.deserializeBinaryFromReader), e.setTransactiongetreceipt(o);
                            break;
                        case 15:
                            o = new h.TransactionGetRecordResponse;
                            t.readMessage(o, h.TransactionGetRecordResponse.deserializeBinaryFromReader), e.setTransactiongetrecord(o);
                            break;
                        case 16:
                            o = new F.TransactionGetFastRecordResponse;
                            t.readMessage(o, F.TransactionGetFastRecordResponse.deserializeBinaryFromReader), e.setTransactiongetfastrecord(o);
                            break;
                        case 150:
                            o = new M.ConsensusGetTopicInfoResponse;
                            t.readMessage(o, M.ConsensusGetTopicInfoResponse.deserializeBinaryFromReader), e.setConsensusgettopicinfo(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.Response.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.Response.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.Response.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getGetbykey()) && t.writeMessage(1, o, a.GetByKeyResponse.serializeBinaryToWriter), null != (o = e.getGetbysolidityid()) && t.writeMessage(2, o, i.GetBySolidityIDResponse.serializeBinaryToWriter), null != (o = e.getContractcalllocal()) && t.writeMessage(3, o, p.ContractCallLocalResponse.serializeBinaryToWriter), null != (o = e.getContractgetbytecoderesponse()) && t.writeMessage(5, o, c.ContractGetBytecodeResponse.serializeBinaryToWriter), null != (o = e.getContractgetinfo()) && t.writeMessage(4, o, u.ContractGetInfoResponse.serializeBinaryToWriter), null != (o = e.getContractgetrecordsresponse()) && t.writeMessage(6, o, d.ContractGetRecordsResponse.serializeBinaryToWriter), null != (o = e.getCryptogetaccountbalance()) && t.writeMessage(7, o, l.CryptoGetAccountBalanceResponse.serializeBinaryToWriter), null != (o = e.getCryptogetaccountrecords()) && t.writeMessage(8, o, y.CryptoGetAccountRecordsResponse.serializeBinaryToWriter), null != (o = e.getCryptogetinfo()) && t.writeMessage(9, o, g.CryptoGetInfoResponse.serializeBinaryToWriter), null != (o = e.getCryptogetclaim()) && t.writeMessage(10, o, T.CryptoGetClaimResponse.serializeBinaryToWriter), null != (o = e.getCryptogetproxystakers()) && t.writeMessage(11, o, f.CryptoGetStakersResponse.serializeBinaryToWriter), null != (o = e.getFilegetcontents()) && t.writeMessage(12, o, R.FileGetContentsResponse.serializeBinaryToWriter), null != (o = e.getFilegetinfo()) && t.writeMessage(13, o, C.FileGetInfoResponse.serializeBinaryToWriter), null != (o = e.getTransactiongetreceipt()) && t.writeMessage(14, o, B.TransactionGetReceiptResponse.serializeBinaryToWriter), null != (o = e.getTransactiongetrecord()) && t.writeMessage(15, o, h.TransactionGetRecordResponse.serializeBinaryToWriter), null != (o = e.getTransactiongetfastrecord()) && t.writeMessage(16, o, F.TransactionGetFastRecordResponse.serializeBinaryToWriter), null != (o = e.getConsensusgettopicinfo()) && t.writeMessage(150, o, M.ConsensusGetTopicInfoResponse.serializeBinaryToWriter)
            }, proto.proto.Response.prototype.getGetbykey = function() {
                return r.Message.getWrapperField(this, a.GetByKeyResponse, 1)
            }, proto.proto.Response.prototype.setGetbykey = function(e) {
                return r.Message.setOneofWrapperField(this, 1, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearGetbykey = function() {
                return this.setGetbykey(void 0)
            }, proto.proto.Response.prototype.hasGetbykey = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.Response.prototype.getGetbysolidityid = function() {
                return r.Message.getWrapperField(this, i.GetBySolidityIDResponse, 2)
            }, proto.proto.Response.prototype.setGetbysolidityid = function(e) {
                return r.Message.setOneofWrapperField(this, 2, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearGetbysolidityid = function() {
                return this.setGetbysolidityid(void 0)
            }, proto.proto.Response.prototype.hasGetbysolidityid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.Response.prototype.getContractcalllocal = function() {
                return r.Message.getWrapperField(this, p.ContractCallLocalResponse, 3)
            }, proto.proto.Response.prototype.setContractcalllocal = function(e) {
                return r.Message.setOneofWrapperField(this, 3, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearContractcalllocal = function() {
                return this.setContractcalllocal(void 0)
            }, proto.proto.Response.prototype.hasContractcalllocal = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.Response.prototype.getContractgetbytecoderesponse = function() {
                return r.Message.getWrapperField(this, c.ContractGetBytecodeResponse, 5)
            }, proto.proto.Response.prototype.setContractgetbytecoderesponse = function(e) {
                return r.Message.setOneofWrapperField(this, 5, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearContractgetbytecoderesponse = function() {
                return this.setContractgetbytecoderesponse(void 0)
            }, proto.proto.Response.prototype.hasContractgetbytecoderesponse = function() {
                return null != r.Message.getField(this, 5)
            }, proto.proto.Response.prototype.getContractgetinfo = function() {
                return r.Message.getWrapperField(this, u.ContractGetInfoResponse, 4)
            }, proto.proto.Response.prototype.setContractgetinfo = function(e) {
                return r.Message.setOneofWrapperField(this, 4, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearContractgetinfo = function() {
                return this.setContractgetinfo(void 0)
            }, proto.proto.Response.prototype.hasContractgetinfo = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.Response.prototype.getContractgetrecordsresponse = function() {
                return r.Message.getWrapperField(this, d.ContractGetRecordsResponse, 6)
            }, proto.proto.Response.prototype.setContractgetrecordsresponse = function(e) {
                return r.Message.setOneofWrapperField(this, 6, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearContractgetrecordsresponse = function() {
                return this.setContractgetrecordsresponse(void 0)
            }, proto.proto.Response.prototype.hasContractgetrecordsresponse = function() {
                return null != r.Message.getField(this, 6)
            }, proto.proto.Response.prototype.getCryptogetaccountbalance = function() {
                return r.Message.getWrapperField(this, l.CryptoGetAccountBalanceResponse, 7)
            }, proto.proto.Response.prototype.setCryptogetaccountbalance = function(e) {
                return r.Message.setOneofWrapperField(this, 7, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearCryptogetaccountbalance = function() {
                return this.setCryptogetaccountbalance(void 0)
            }, proto.proto.Response.prototype.hasCryptogetaccountbalance = function() {
                return null != r.Message.getField(this, 7)
            }, proto.proto.Response.prototype.getCryptogetaccountrecords = function() {
                return r.Message.getWrapperField(this, y.CryptoGetAccountRecordsResponse, 8)
            }, proto.proto.Response.prototype.setCryptogetaccountrecords = function(e) {
                return r.Message.setOneofWrapperField(this, 8, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearCryptogetaccountrecords = function() {
                return this.setCryptogetaccountrecords(void 0)
            }, proto.proto.Response.prototype.hasCryptogetaccountrecords = function() {
                return null != r.Message.getField(this, 8)
            }, proto.proto.Response.prototype.getCryptogetinfo = function() {
                return r.Message.getWrapperField(this, g.CryptoGetInfoResponse, 9)
            }, proto.proto.Response.prototype.setCryptogetinfo = function(e) {
                return r.Message.setOneofWrapperField(this, 9, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearCryptogetinfo = function() {
                return this.setCryptogetinfo(void 0)
            }, proto.proto.Response.prototype.hasCryptogetinfo = function() {
                return null != r.Message.getField(this, 9)
            }, proto.proto.Response.prototype.getCryptogetclaim = function() {
                return r.Message.getWrapperField(this, T.CryptoGetClaimResponse, 10)
            }, proto.proto.Response.prototype.setCryptogetclaim = function(e) {
                return r.Message.setOneofWrapperField(this, 10, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearCryptogetclaim = function() {
                return this.setCryptogetclaim(void 0)
            }, proto.proto.Response.prototype.hasCryptogetclaim = function() {
                return null != r.Message.getField(this, 10)
            }, proto.proto.Response.prototype.getCryptogetproxystakers = function() {
                return r.Message.getWrapperField(this, f.CryptoGetStakersResponse, 11)
            }, proto.proto.Response.prototype.setCryptogetproxystakers = function(e) {
                return r.Message.setOneofWrapperField(this, 11, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearCryptogetproxystakers = function() {
                return this.setCryptogetproxystakers(void 0)
            }, proto.proto.Response.prototype.hasCryptogetproxystakers = function() {
                return null != r.Message.getField(this, 11)
            }, proto.proto.Response.prototype.getFilegetcontents = function() {
                return r.Message.getWrapperField(this, R.FileGetContentsResponse, 12)
            }, proto.proto.Response.prototype.setFilegetcontents = function(e) {
                return r.Message.setOneofWrapperField(this, 12, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearFilegetcontents = function() {
                return this.setFilegetcontents(void 0)
            }, proto.proto.Response.prototype.hasFilegetcontents = function() {
                return null != r.Message.getField(this, 12)
            }, proto.proto.Response.prototype.getFilegetinfo = function() {
                return r.Message.getWrapperField(this, C.FileGetInfoResponse, 13)
            }, proto.proto.Response.prototype.setFilegetinfo = function(e) {
                return r.Message.setOneofWrapperField(this, 13, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearFilegetinfo = function() {
                return this.setFilegetinfo(void 0)
            }, proto.proto.Response.prototype.hasFilegetinfo = function() {
                return null != r.Message.getField(this, 13)
            }, proto.proto.Response.prototype.getTransactiongetreceipt = function() {
                return r.Message.getWrapperField(this, B.TransactionGetReceiptResponse, 14)
            }, proto.proto.Response.prototype.setTransactiongetreceipt = function(e) {
                return r.Message.setOneofWrapperField(this, 14, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearTransactiongetreceipt = function() {
                return this.setTransactiongetreceipt(void 0)
            }, proto.proto.Response.prototype.hasTransactiongetreceipt = function() {
                return null != r.Message.getField(this, 14)
            }, proto.proto.Response.prototype.getTransactiongetrecord = function() {
                return r.Message.getWrapperField(this, h.TransactionGetRecordResponse, 15)
            }, proto.proto.Response.prototype.setTransactiongetrecord = function(e) {
                return r.Message.setOneofWrapperField(this, 15, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearTransactiongetrecord = function() {
                return this.setTransactiongetrecord(void 0)
            }, proto.proto.Response.prototype.hasTransactiongetrecord = function() {
                return null != r.Message.getField(this, 15)
            }, proto.proto.Response.prototype.getTransactiongetfastrecord = function() {
                return r.Message.getWrapperField(this, F.TransactionGetFastRecordResponse, 16)
            }, proto.proto.Response.prototype.setTransactiongetfastrecord = function(e) {
                return r.Message.setOneofWrapperField(this, 16, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearTransactiongetfastrecord = function() {
                return this.setTransactiongetfastrecord(void 0)
            }, proto.proto.Response.prototype.hasTransactiongetfastrecord = function() {
                return null != r.Message.getField(this, 16)
            }, proto.proto.Response.prototype.getConsensusgettopicinfo = function() {
                return r.Message.getWrapperField(this, M.ConsensusGetTopicInfoResponse, 150)
            }, proto.proto.Response.prototype.setConsensusgettopicinfo = function(e) {
                return r.Message.setOneofWrapperField(this, 150, proto.proto.Response.oneofGroups_[0], e)
            }, proto.proto.Response.prototype.clearConsensusgettopicinfo = function() {
                return this.setConsensusgettopicinfo(void 0)
            }, proto.proto.Response.prototype.hasConsensusgettopicinfo = function() {
                return null != r.Message.getField(this, 150)
            }, n.object.extend(t, proto.proto)
        },
        263: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(1774);
            n.object.extend(proto, a);
            var i = o(1042);
            n.object.extend(proto, i);
            var p = o(500);
            n.object.extend(proto, p);
            var c = o(1044);
            n.object.extend(proto, c);
            var u = o(1043);
            n.object.extend(proto, u);
            var d = o(1045);
            n.object.extend(proto, d);
            var l = o(1046);
            n.object.extend(proto, l);
            var y = o(1047);
            n.object.extend(proto, y);
            var g = o(1048);
            n.object.extend(proto, g);
            var T = o(1794);
            n.object.extend(proto, T);
            var f = o(1049);
            n.object.extend(proto, f);
            var R = o(1050);
            n.object.extend(proto, R);
            var C = o(1051);
            n.object.extend(proto, C);
            var B = o(1052);
            n.object.extend(proto, B);
            var h = o(1053);
            n.object.extend(proto, h);
            var F = o(1795);
            n.object.extend(proto, F);
            var M = o(1054);
            n.object.extend(proto, M), n.exportSymbol("proto.proto.Query", null, s), n.exportSymbol("proto.proto.Query.QueryCase", null, s), proto.proto.Query = function(e) {
                r.Message.initialize(this, e, 0, -1, null, proto.proto.Query.oneofGroups_)
            }, n.inherits(proto.proto.Query, r.Message), n.DEBUG && !COMPILED && (proto.proto.Query.displayName = "proto.proto.Query"), proto.proto.Query.oneofGroups_ = [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 50]
            ], proto.proto.Query.QueryCase = {
                QUERY_NOT_SET: 0,
                GETBYKEY: 1,
                GETBYSOLIDITYID: 2,
                CONTRACTCALLLOCAL: 3,
                CONTRACTGETINFO: 4,
                CONTRACTGETBYTECODE: 5,
                CONTRACTGETRECORDS: 6,
                CRYPTOGETACCOUNTBALANCE: 7,
                CRYPTOGETACCOUNTRECORDS: 8,
                CRYPTOGETINFO: 9,
                CRYPTOGETCLAIM: 10,
                CRYPTOGETPROXYSTAKERS: 11,
                FILEGETCONTENTS: 12,
                FILEGETINFO: 13,
                TRANSACTIONGETRECEIPT: 14,
                TRANSACTIONGETRECORD: 15,
                TRANSACTIONGETFASTRECORD: 16,
                CONSENSUSGETTOPICINFO: 50
            }, proto.proto.Query.prototype.getQueryCase = function() {
                return r.Message.computeOneofCase(this, proto.proto.Query.oneofGroups_[0])
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.Query.prototype.toObject = function(e) {
                return proto.proto.Query.toObject(e, this)
            }, proto.proto.Query.toObject = function(e, t) {
                var o, r = {
                    getbykey: (o = t.getGetbykey()) && a.GetByKeyQuery.toObject(e, o),
                    getbysolidityid: (o = t.getGetbysolidityid()) && i.GetBySolidityIDQuery.toObject(e, o),
                    contractcalllocal: (o = t.getContractcalllocal()) && p.ContractCallLocalQuery.toObject(e, o),
                    contractgetinfo: (o = t.getContractgetinfo()) && c.ContractGetInfoQuery.toObject(e, o),
                    contractgetbytecode: (o = t.getContractgetbytecode()) && u.ContractGetBytecodeQuery.toObject(e, o),
                    contractgetrecords: (o = t.getContractgetrecords()) && d.ContractGetRecordsQuery.toObject(e, o),
                    cryptogetaccountbalance: (o = t.getCryptogetaccountbalance()) && l.CryptoGetAccountBalanceQuery.toObject(e, o),
                    cryptogetaccountrecords: (o = t.getCryptogetaccountrecords()) && y.CryptoGetAccountRecordsQuery.toObject(e, o),
                    cryptogetinfo: (o = t.getCryptogetinfo()) && g.CryptoGetInfoQuery.toObject(e, o),
                    cryptogetclaim: (o = t.getCryptogetclaim()) && T.CryptoGetClaimQuery.toObject(e, o),
                    cryptogetproxystakers: (o = t.getCryptogetproxystakers()) && f.CryptoGetStakersQuery.toObject(e, o),
                    filegetcontents: (o = t.getFilegetcontents()) && R.FileGetContentsQuery.toObject(e, o),
                    filegetinfo: (o = t.getFilegetinfo()) && C.FileGetInfoQuery.toObject(e, o),
                    transactiongetreceipt: (o = t.getTransactiongetreceipt()) && B.TransactionGetReceiptQuery.toObject(e, o),
                    transactiongetrecord: (o = t.getTransactiongetrecord()) && h.TransactionGetRecordQuery.toObject(e, o),
                    transactiongetfastrecord: (o = t.getTransactiongetfastrecord()) && F.TransactionGetFastRecordQuery.toObject(e, o),
                    consensusgettopicinfo: (o = t.getConsensusgettopicinfo()) && M.ConsensusGetTopicInfoQuery.toObject(e, o)
                };
                return e && (r.$jspbMessageInstance = t), r
            }), proto.proto.Query.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.Query;
                return proto.proto.Query.deserializeBinaryFromReader(o, t)
            }, proto.proto.Query.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.GetByKeyQuery;
                            t.readMessage(o, a.GetByKeyQuery.deserializeBinaryFromReader), e.setGetbykey(o);
                            break;
                        case 2:
                            o = new i.GetBySolidityIDQuery;
                            t.readMessage(o, i.GetBySolidityIDQuery.deserializeBinaryFromReader), e.setGetbysolidityid(o);
                            break;
                        case 3:
                            o = new p.ContractCallLocalQuery;
                            t.readMessage(o, p.ContractCallLocalQuery.deserializeBinaryFromReader), e.setContractcalllocal(o);
                            break;
                        case 4:
                            o = new c.ContractGetInfoQuery;
                            t.readMessage(o, c.ContractGetInfoQuery.deserializeBinaryFromReader), e.setContractgetinfo(o);
                            break;
                        case 5:
                            o = new u.ContractGetBytecodeQuery;
                            t.readMessage(o, u.ContractGetBytecodeQuery.deserializeBinaryFromReader), e.setContractgetbytecode(o);
                            break;
                        case 6:
                            o = new d.ContractGetRecordsQuery;
                            t.readMessage(o, d.ContractGetRecordsQuery.deserializeBinaryFromReader), e.setContractgetrecords(o);
                            break;
                        case 7:
                            o = new l.CryptoGetAccountBalanceQuery;
                            t.readMessage(o, l.CryptoGetAccountBalanceQuery.deserializeBinaryFromReader), e.setCryptogetaccountbalance(o);
                            break;
                        case 8:
                            o = new y.CryptoGetAccountRecordsQuery;
                            t.readMessage(o, y.CryptoGetAccountRecordsQuery.deserializeBinaryFromReader), e.setCryptogetaccountrecords(o);
                            break;
                        case 9:
                            o = new g.CryptoGetInfoQuery;
                            t.readMessage(o, g.CryptoGetInfoQuery.deserializeBinaryFromReader), e.setCryptogetinfo(o);
                            break;
                        case 10:
                            o = new T.CryptoGetClaimQuery;
                            t.readMessage(o, T.CryptoGetClaimQuery.deserializeBinaryFromReader), e.setCryptogetclaim(o);
                            break;
                        case 11:
                            o = new f.CryptoGetStakersQuery;
                            t.readMessage(o, f.CryptoGetStakersQuery.deserializeBinaryFromReader), e.setCryptogetproxystakers(o);
                            break;
                        case 12:
                            o = new R.FileGetContentsQuery;
                            t.readMessage(o, R.FileGetContentsQuery.deserializeBinaryFromReader), e.setFilegetcontents(o);
                            break;
                        case 13:
                            o = new C.FileGetInfoQuery;
                            t.readMessage(o, C.FileGetInfoQuery.deserializeBinaryFromReader), e.setFilegetinfo(o);
                            break;
                        case 14:
                            o = new B.TransactionGetReceiptQuery;
                            t.readMessage(o, B.TransactionGetReceiptQuery.deserializeBinaryFromReader), e.setTransactiongetreceipt(o);
                            break;
                        case 15:
                            o = new h.TransactionGetRecordQuery;
                            t.readMessage(o, h.TransactionGetRecordQuery.deserializeBinaryFromReader), e.setTransactiongetrecord(o);
                            break;
                        case 16:
                            o = new F.TransactionGetFastRecordQuery;
                            t.readMessage(o, F.TransactionGetFastRecordQuery.deserializeBinaryFromReader), e.setTransactiongetfastrecord(o);
                            break;
                        case 50:
                            o = new M.ConsensusGetTopicInfoQuery;
                            t.readMessage(o, M.ConsensusGetTopicInfoQuery.deserializeBinaryFromReader), e.setConsensusgettopicinfo(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.Query.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.Query.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.Query.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getGetbykey()) && t.writeMessage(1, o, a.GetByKeyQuery.serializeBinaryToWriter), null != (o = e.getGetbysolidityid()) && t.writeMessage(2, o, i.GetBySolidityIDQuery.serializeBinaryToWriter), null != (o = e.getContractcalllocal()) && t.writeMessage(3, o, p.ContractCallLocalQuery.serializeBinaryToWriter), null != (o = e.getContractgetinfo()) && t.writeMessage(4, o, c.ContractGetInfoQuery.serializeBinaryToWriter), null != (o = e.getContractgetbytecode()) && t.writeMessage(5, o, u.ContractGetBytecodeQuery.serializeBinaryToWriter), null != (o = e.getContractgetrecords()) && t.writeMessage(6, o, d.ContractGetRecordsQuery.serializeBinaryToWriter), null != (o = e.getCryptogetaccountbalance()) && t.writeMessage(7, o, l.CryptoGetAccountBalanceQuery.serializeBinaryToWriter), null != (o = e.getCryptogetaccountrecords()) && t.writeMessage(8, o, y.CryptoGetAccountRecordsQuery.serializeBinaryToWriter), null != (o = e.getCryptogetinfo()) && t.writeMessage(9, o, g.CryptoGetInfoQuery.serializeBinaryToWriter), null != (o = e.getCryptogetclaim()) && t.writeMessage(10, o, T.CryptoGetClaimQuery.serializeBinaryToWriter), null != (o = e.getCryptogetproxystakers()) && t.writeMessage(11, o, f.CryptoGetStakersQuery.serializeBinaryToWriter), null != (o = e.getFilegetcontents()) && t.writeMessage(12, o, R.FileGetContentsQuery.serializeBinaryToWriter), null != (o = e.getFilegetinfo()) && t.writeMessage(13, o, C.FileGetInfoQuery.serializeBinaryToWriter), null != (o = e.getTransactiongetreceipt()) && t.writeMessage(14, o, B.TransactionGetReceiptQuery.serializeBinaryToWriter), null != (o = e.getTransactiongetrecord()) && t.writeMessage(15, o, h.TransactionGetRecordQuery.serializeBinaryToWriter), null != (o = e.getTransactiongetfastrecord()) && t.writeMessage(16, o, F.TransactionGetFastRecordQuery.serializeBinaryToWriter), null != (o = e.getConsensusgettopicinfo()) && t.writeMessage(50, o, M.ConsensusGetTopicInfoQuery.serializeBinaryToWriter)
            }, proto.proto.Query.prototype.getGetbykey = function() {
                return r.Message.getWrapperField(this, a.GetByKeyQuery, 1)
            }, proto.proto.Query.prototype.setGetbykey = function(e) {
                return r.Message.setOneofWrapperField(this, 1, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearGetbykey = function() {
                return this.setGetbykey(void 0)
            }, proto.proto.Query.prototype.hasGetbykey = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.Query.prototype.getGetbysolidityid = function() {
                return r.Message.getWrapperField(this, i.GetBySolidityIDQuery, 2)
            }, proto.proto.Query.prototype.setGetbysolidityid = function(e) {
                return r.Message.setOneofWrapperField(this, 2, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearGetbysolidityid = function() {
                return this.setGetbysolidityid(void 0)
            }, proto.proto.Query.prototype.hasGetbysolidityid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.Query.prototype.getContractcalllocal = function() {
                return r.Message.getWrapperField(this, p.ContractCallLocalQuery, 3)
            }, proto.proto.Query.prototype.setContractcalllocal = function(e) {
                return r.Message.setOneofWrapperField(this, 3, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearContractcalllocal = function() {
                return this.setContractcalllocal(void 0)
            }, proto.proto.Query.prototype.hasContractcalllocal = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.Query.prototype.getContractgetinfo = function() {
                return r.Message.getWrapperField(this, c.ContractGetInfoQuery, 4)
            }, proto.proto.Query.prototype.setContractgetinfo = function(e) {
                return r.Message.setOneofWrapperField(this, 4, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearContractgetinfo = function() {
                return this.setContractgetinfo(void 0)
            }, proto.proto.Query.prototype.hasContractgetinfo = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.Query.prototype.getContractgetbytecode = function() {
                return r.Message.getWrapperField(this, u.ContractGetBytecodeQuery, 5)
            }, proto.proto.Query.prototype.setContractgetbytecode = function(e) {
                return r.Message.setOneofWrapperField(this, 5, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearContractgetbytecode = function() {
                return this.setContractgetbytecode(void 0)
            }, proto.proto.Query.prototype.hasContractgetbytecode = function() {
                return null != r.Message.getField(this, 5)
            }, proto.proto.Query.prototype.getContractgetrecords = function() {
                return r.Message.getWrapperField(this, d.ContractGetRecordsQuery, 6)
            }, proto.proto.Query.prototype.setContractgetrecords = function(e) {
                return r.Message.setOneofWrapperField(this, 6, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearContractgetrecords = function() {
                return this.setContractgetrecords(void 0)
            }, proto.proto.Query.prototype.hasContractgetrecords = function() {
                return null != r.Message.getField(this, 6)
            }, proto.proto.Query.prototype.getCryptogetaccountbalance = function() {
                return r.Message.getWrapperField(this, l.CryptoGetAccountBalanceQuery, 7)
            }, proto.proto.Query.prototype.setCryptogetaccountbalance = function(e) {
                return r.Message.setOneofWrapperField(this, 7, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearCryptogetaccountbalance = function() {
                return this.setCryptogetaccountbalance(void 0)
            }, proto.proto.Query.prototype.hasCryptogetaccountbalance = function() {
                return null != r.Message.getField(this, 7)
            }, proto.proto.Query.prototype.getCryptogetaccountrecords = function() {
                return r.Message.getWrapperField(this, y.CryptoGetAccountRecordsQuery, 8)
            }, proto.proto.Query.prototype.setCryptogetaccountrecords = function(e) {
                return r.Message.setOneofWrapperField(this, 8, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearCryptogetaccountrecords = function() {
                return this.setCryptogetaccountrecords(void 0)
            }, proto.proto.Query.prototype.hasCryptogetaccountrecords = function() {
                return null != r.Message.getField(this, 8)
            }, proto.proto.Query.prototype.getCryptogetinfo = function() {
                return r.Message.getWrapperField(this, g.CryptoGetInfoQuery, 9)
            }, proto.proto.Query.prototype.setCryptogetinfo = function(e) {
                return r.Message.setOneofWrapperField(this, 9, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearCryptogetinfo = function() {
                return this.setCryptogetinfo(void 0)
            }, proto.proto.Query.prototype.hasCryptogetinfo = function() {
                return null != r.Message.getField(this, 9)
            }, proto.proto.Query.prototype.getCryptogetclaim = function() {
                return r.Message.getWrapperField(this, T.CryptoGetClaimQuery, 10)
            }, proto.proto.Query.prototype.setCryptogetclaim = function(e) {
                return r.Message.setOneofWrapperField(this, 10, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearCryptogetclaim = function() {
                return this.setCryptogetclaim(void 0)
            }, proto.proto.Query.prototype.hasCryptogetclaim = function() {
                return null != r.Message.getField(this, 10)
            }, proto.proto.Query.prototype.getCryptogetproxystakers = function() {
                return r.Message.getWrapperField(this, f.CryptoGetStakersQuery, 11)
            }, proto.proto.Query.prototype.setCryptogetproxystakers = function(e) {
                return r.Message.setOneofWrapperField(this, 11, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearCryptogetproxystakers = function() {
                return this.setCryptogetproxystakers(void 0)
            }, proto.proto.Query.prototype.hasCryptogetproxystakers = function() {
                return null != r.Message.getField(this, 11)
            }, proto.proto.Query.prototype.getFilegetcontents = function() {
                return r.Message.getWrapperField(this, R.FileGetContentsQuery, 12)
            }, proto.proto.Query.prototype.setFilegetcontents = function(e) {
                return r.Message.setOneofWrapperField(this, 12, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearFilegetcontents = function() {
                return this.setFilegetcontents(void 0)
            }, proto.proto.Query.prototype.hasFilegetcontents = function() {
                return null != r.Message.getField(this, 12)
            }, proto.proto.Query.prototype.getFilegetinfo = function() {
                return r.Message.getWrapperField(this, C.FileGetInfoQuery, 13)
            }, proto.proto.Query.prototype.setFilegetinfo = function(e) {
                return r.Message.setOneofWrapperField(this, 13, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearFilegetinfo = function() {
                return this.setFilegetinfo(void 0)
            }, proto.proto.Query.prototype.hasFilegetinfo = function() {
                return null != r.Message.getField(this, 13)
            }, proto.proto.Query.prototype.getTransactiongetreceipt = function() {
                return r.Message.getWrapperField(this, B.TransactionGetReceiptQuery, 14)
            }, proto.proto.Query.prototype.setTransactiongetreceipt = function(e) {
                return r.Message.setOneofWrapperField(this, 14, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearTransactiongetreceipt = function() {
                return this.setTransactiongetreceipt(void 0)
            }, proto.proto.Query.prototype.hasTransactiongetreceipt = function() {
                return null != r.Message.getField(this, 14)
            }, proto.proto.Query.prototype.getTransactiongetrecord = function() {
                return r.Message.getWrapperField(this, h.TransactionGetRecordQuery, 15)
            }, proto.proto.Query.prototype.setTransactiongetrecord = function(e) {
                return r.Message.setOneofWrapperField(this, 15, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearTransactiongetrecord = function() {
                return this.setTransactiongetrecord(void 0)
            }, proto.proto.Query.prototype.hasTransactiongetrecord = function() {
                return null != r.Message.getField(this, 15)
            }, proto.proto.Query.prototype.getTransactiongetfastrecord = function() {
                return r.Message.getWrapperField(this, F.TransactionGetFastRecordQuery, 16)
            }, proto.proto.Query.prototype.setTransactiongetfastrecord = function(e) {
                return r.Message.setOneofWrapperField(this, 16, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearTransactiongetfastrecord = function() {
                return this.setTransactiongetfastrecord(void 0)
            }, proto.proto.Query.prototype.hasTransactiongetfastrecord = function() {
                return null != r.Message.getField(this, 16)
            }, proto.proto.Query.prototype.getConsensusgettopicinfo = function() {
                return r.Message.getWrapperField(this, M.ConsensusGetTopicInfoQuery, 50)
            }, proto.proto.Query.prototype.setConsensusgettopicinfo = function(e) {
                return r.Message.setOneofWrapperField(this, 50, proto.proto.Query.oneofGroups_[0], e)
            }, proto.proto.Query.prototype.clearConsensusgettopicinfo = function() {
                return this.setConsensusgettopicinfo(void 0)
            }, proto.proto.Query.prototype.hasConsensusgettopicinfo = function() {
                return null != r.Message.getField(this, 50)
            }, n.object.extend(t, proto.proto)
        },
        3262: function(e, t, o) {
            var r = o(28),
                n = (Function("return this")(), o(239));
            r.object.extend(proto, n);
            var s = o(263);
            r.object.extend(proto, s);
            var a = o(262);
            r.object.extend(proto, a);
            var i = o(176);
            r.object.extend(proto, i)
        },
        3317: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.MirrorClient = class MirrorClient {
                constructor(e) {
                    this.endpoint = e
                }
                close() {
                    console.warn("Close is not implememented for the web version of `MirrorClient`")
                }
            }
        },
        3318: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = o(3319),
                n = o(289),
                s = o(1807),
                a = o(1806),
                i = o(3320);
            class MirrorConsensusTopicQuery extends i.BaseMirrorConsensusTopicQuery {
                subscribe(e, t, o) {
                    this._validate();
                    const i = n.grpc.invoke(r.ConsensusService.subscribeTopic, {
                        host: e.endpoint,
                        request: this._builder,
                        onMessage(e) {
                            t(new a.MirrorConsensusTopicResponse(e))
                        },
                        onEnd(e, t) {
                            null != o && o(new Error(`Received status code: ${e} and message: ${t}`))
                        }
                    });
                    return new s.MirrorSubscriptionHandle(i.close)
                }
            }
            t.MirrorConsensusTopicQuery = MirrorConsensusTopicQuery
        },
        3320: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = o(1808),
                n = o(410),
                s = o(1055);
            t.BaseMirrorConsensusTopicQuery = class BaseMirrorConsensusTopicQuery {
                constructor() {
                    this._builder = new r.ConsensusTopicQuery
                }
                setTopicId(e) {
                    return this._builder.setTopicid(e._toProto()), this
                }
                setStartTime(e) {
                    return this._builder.setConsensusstarttime(n.Time.fromDate(e)._toProto()), this
                }
                setEndTime(e) {
                    return this._builder.setConsensusendtime(n.Time.fromDate(e)._toProto()), this
                }
                setLimit(e) {
                    return this._builder.setLimit(e), this
                }
                _validate() {
                    if (!this._builder.hasTopicid()) throw new s.LocalValidationError("MirrorConsensusTopicQuery", ["`.setTopicId()` is required to be called"])
                }
            }
        },
        615: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(1775);
            n.object.extend(proto, a);
            var i = o(1776);
            n.object.extend(proto, i);
            var p = o(1777);
            n.object.extend(proto, p);
            var c = o(1778);
            n.object.extend(proto, c);
            var u = o(1779);
            n.object.extend(proto, u);
            var d = o(1780);
            n.object.extend(proto, d);
            var l = o(616);
            n.object.extend(proto, l);
            var y = o(1781);
            n.object.extend(proto, y);
            var g = o(1782);
            n.object.extend(proto, g);
            var T = o(3256);
            n.object.extend(proto, T);
            var f = o(1040);
            n.object.extend(proto, f);
            var R = o(1783);
            n.object.extend(proto, R);
            var C = o(1784);
            n.object.extend(proto, C);
            var B = o(1785);
            n.object.extend(proto, B);
            var h = o(1786);
            n.object.extend(proto, h);
            var F = o(1787);
            n.object.extend(proto, F);
            var M = o(198);
            n.object.extend(proto, M);
            var m = o(36);
            n.object.extend(proto, m);
            var E = o(1788);
            n.object.extend(proto, E);
            var b = o(1789);
            n.object.extend(proto, b);
            var O = o(1790);
            n.object.extend(proto, O);
            var G = o(1791);
            n.object.extend(proto, G);
            var I = o(1792);
            n.object.extend(proto, I), n.exportSymbol("proto.proto.TransactionBody", null, s), n.exportSymbol("proto.proto.TransactionBody.DataCase", null, s), proto.proto.TransactionBody = function(e) {
                r.Message.initialize(this, e, 0, -1, null, proto.proto.TransactionBody.oneofGroups_)
            }, n.inherits(proto.proto.TransactionBody, r.Message), n.DEBUG && !COMPILED && (proto.proto.TransactionBody.displayName = "proto.proto.TransactionBody"), proto.proto.TransactionBody.oneofGroups_ = [
                [7, 8, 9, 22, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27]
            ], proto.proto.TransactionBody.DataCase = {
                DATA_NOT_SET: 0,
                CONTRACTCALL: 7,
                CONTRACTCREATEINSTANCE: 8,
                CONTRACTUPDATEINSTANCE: 9,
                CONTRACTDELETEINSTANCE: 22,
                CRYPTOADDCLAIM: 10,
                CRYPTOCREATEACCOUNT: 11,
                CRYPTODELETE: 12,
                CRYPTODELETECLAIM: 13,
                CRYPTOTRANSFER: 14,
                CRYPTOUPDATEACCOUNT: 15,
                FILEAPPEND: 16,
                FILECREATE: 17,
                FILEDELETE: 18,
                FILEUPDATE: 19,
                SYSTEMDELETE: 20,
                SYSTEMUNDELETE: 21,
                FREEZE: 23,
                CONSENSUSCREATETOPIC: 24,
                CONSENSUSUPDATETOPIC: 25,
                CONSENSUSDELETETOPIC: 26,
                CONSENSUSSUBMITMESSAGE: 27
            }, proto.proto.TransactionBody.prototype.getDataCase = function() {
                return r.Message.computeOneofCase(this, proto.proto.TransactionBody.oneofGroups_[0])
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.TransactionBody.prototype.toObject = function(e) {
                return proto.proto.TransactionBody.toObject(e, this)
            }, proto.proto.TransactionBody.toObject = function(e, t) {
                var o, n = {
                    transactionid: (o = t.getTransactionid()) && m.TransactionID.toObject(e, o),
                    nodeaccountid: (o = t.getNodeaccountid()) && m.AccountID.toObject(e, o),
                    transactionfee: r.Message.getFieldWithDefault(t, 3, "0"),
                    transactionvalidduration: (o = t.getTransactionvalidduration()) && M.Duration.toObject(e, o),
                    generaterecord: r.Message.getBooleanFieldWithDefault(t, 5, !1),
                    memo: r.Message.getFieldWithDefault(t, 6, ""),
                    contractcall: (o = t.getContractcall()) && c.ContractCallTransactionBody.toObject(e, o),
                    contractcreateinstance: (o = t.getContractcreateinstance()) && u.ContractCreateTransactionBody.toObject(e, o),
                    contractupdateinstance: (o = t.getContractupdateinstance()) && d.ContractUpdateTransactionBody.toObject(e, o),
                    contractdeleteinstance: (o = t.getContractdeleteinstance()) && E.ContractDeleteTransactionBody.toObject(e, o),
                    cryptoaddclaim: (o = t.getCryptoaddclaim()) && l.CryptoAddClaimTransactionBody.toObject(e, o),
                    cryptocreateaccount: (o = t.getCryptocreateaccount()) && y.CryptoCreateTransactionBody.toObject(e, o),
                    cryptodelete: (o = t.getCryptodelete()) && g.CryptoDeleteTransactionBody.toObject(e, o),
                    cryptodeleteclaim: (o = t.getCryptodeleteclaim()) && T.CryptoDeleteClaimTransactionBody.toObject(e, o),
                    cryptotransfer: (o = t.getCryptotransfer()) && f.CryptoTransferTransactionBody.toObject(e, o),
                    cryptoupdateaccount: (o = t.getCryptoupdateaccount()) && R.CryptoUpdateTransactionBody.toObject(e, o),
                    fileappend: (o = t.getFileappend()) && C.FileAppendTransactionBody.toObject(e, o),
                    filecreate: (o = t.getFilecreate()) && B.FileCreateTransactionBody.toObject(e, o),
                    filedelete: (o = t.getFiledelete()) && h.FileDeleteTransactionBody.toObject(e, o),
                    fileupdate: (o = t.getFileupdate()) && F.FileUpdateTransactionBody.toObject(e, o),
                    systemdelete: (o = t.getSystemdelete()) && a.SystemDeleteTransactionBody.toObject(e, o),
                    systemundelete: (o = t.getSystemundelete()) && i.SystemUndeleteTransactionBody.toObject(e, o),
                    freeze: (o = t.getFreeze()) && p.FreezeTransactionBody.toObject(e, o),
                    consensuscreatetopic: (o = t.getConsensuscreatetopic()) && b.ConsensusCreateTopicTransactionBody.toObject(e, o),
                    consensusupdatetopic: (o = t.getConsensusupdatetopic()) && O.ConsensusUpdateTopicTransactionBody.toObject(e, o),
                    consensusdeletetopic: (o = t.getConsensusdeletetopic()) && G.ConsensusDeleteTopicTransactionBody.toObject(e, o),
                    consensussubmitmessage: (o = t.getConsensussubmitmessage()) && I.ConsensusSubmitMessageTransactionBody.toObject(e, o)
                };
                return e && (n.$jspbMessageInstance = t), n
            }), proto.proto.TransactionBody.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.TransactionBody;
                return proto.proto.TransactionBody.deserializeBinaryFromReader(o, t)
            }, proto.proto.TransactionBody.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new m.TransactionID;
                            t.readMessage(o, m.TransactionID.deserializeBinaryFromReader), e.setTransactionid(o);
                            break;
                        case 2:
                            o = new m.AccountID;
                            t.readMessage(o, m.AccountID.deserializeBinaryFromReader), e.setNodeaccountid(o);
                            break;
                        case 3:
                            o = t.readUint64String();
                            e.setTransactionfee(o);
                            break;
                        case 4:
                            o = new M.Duration;
                            t.readMessage(o, M.Duration.deserializeBinaryFromReader), e.setTransactionvalidduration(o);
                            break;
                        case 5:
                            o = t.readBool();
                            e.setGeneraterecord(o);
                            break;
                        case 6:
                            o = t.readString();
                            e.setMemo(o);
                            break;
                        case 7:
                            o = new c.ContractCallTransactionBody;
                            t.readMessage(o, c.ContractCallTransactionBody.deserializeBinaryFromReader), e.setContractcall(o);
                            break;
                        case 8:
                            o = new u.ContractCreateTransactionBody;
                            t.readMessage(o, u.ContractCreateTransactionBody.deserializeBinaryFromReader), e.setContractcreateinstance(o);
                            break;
                        case 9:
                            o = new d.ContractUpdateTransactionBody;
                            t.readMessage(o, d.ContractUpdateTransactionBody.deserializeBinaryFromReader), e.setContractupdateinstance(o);
                            break;
                        case 22:
                            o = new E.ContractDeleteTransactionBody;
                            t.readMessage(o, E.ContractDeleteTransactionBody.deserializeBinaryFromReader), e.setContractdeleteinstance(o);
                            break;
                        case 10:
                            o = new l.CryptoAddClaimTransactionBody;
                            t.readMessage(o, l.CryptoAddClaimTransactionBody.deserializeBinaryFromReader), e.setCryptoaddclaim(o);
                            break;
                        case 11:
                            o = new y.CryptoCreateTransactionBody;
                            t.readMessage(o, y.CryptoCreateTransactionBody.deserializeBinaryFromReader), e.setCryptocreateaccount(o);
                            break;
                        case 12:
                            o = new g.CryptoDeleteTransactionBody;
                            t.readMessage(o, g.CryptoDeleteTransactionBody.deserializeBinaryFromReader), e.setCryptodelete(o);
                            break;
                        case 13:
                            o = new T.CryptoDeleteClaimTransactionBody;
                            t.readMessage(o, T.CryptoDeleteClaimTransactionBody.deserializeBinaryFromReader), e.setCryptodeleteclaim(o);
                            break;
                        case 14:
                            o = new f.CryptoTransferTransactionBody;
                            t.readMessage(o, f.CryptoTransferTransactionBody.deserializeBinaryFromReader), e.setCryptotransfer(o);
                            break;
                        case 15:
                            o = new R.CryptoUpdateTransactionBody;
                            t.readMessage(o, R.CryptoUpdateTransactionBody.deserializeBinaryFromReader), e.setCryptoupdateaccount(o);
                            break;
                        case 16:
                            o = new C.FileAppendTransactionBody;
                            t.readMessage(o, C.FileAppendTransactionBody.deserializeBinaryFromReader), e.setFileappend(o);
                            break;
                        case 17:
                            o = new B.FileCreateTransactionBody;
                            t.readMessage(o, B.FileCreateTransactionBody.deserializeBinaryFromReader), e.setFilecreate(o);
                            break;
                        case 18:
                            o = new h.FileDeleteTransactionBody;
                            t.readMessage(o, h.FileDeleteTransactionBody.deserializeBinaryFromReader), e.setFiledelete(o);
                            break;
                        case 19:
                            o = new F.FileUpdateTransactionBody;
                            t.readMessage(o, F.FileUpdateTransactionBody.deserializeBinaryFromReader), e.setFileupdate(o);
                            break;
                        case 20:
                            o = new a.SystemDeleteTransactionBody;
                            t.readMessage(o, a.SystemDeleteTransactionBody.deserializeBinaryFromReader), e.setSystemdelete(o);
                            break;
                        case 21:
                            o = new i.SystemUndeleteTransactionBody;
                            t.readMessage(o, i.SystemUndeleteTransactionBody.deserializeBinaryFromReader), e.setSystemundelete(o);
                            break;
                        case 23:
                            o = new p.FreezeTransactionBody;
                            t.readMessage(o, p.FreezeTransactionBody.deserializeBinaryFromReader), e.setFreeze(o);
                            break;
                        case 24:
                            o = new b.ConsensusCreateTopicTransactionBody;
                            t.readMessage(o, b.ConsensusCreateTopicTransactionBody.deserializeBinaryFromReader), e.setConsensuscreatetopic(o);
                            break;
                        case 25:
                            o = new O.ConsensusUpdateTopicTransactionBody;
                            t.readMessage(o, O.ConsensusUpdateTopicTransactionBody.deserializeBinaryFromReader), e.setConsensusupdatetopic(o);
                            break;
                        case 26:
                            o = new G.ConsensusDeleteTopicTransactionBody;
                            t.readMessage(o, G.ConsensusDeleteTopicTransactionBody.deserializeBinaryFromReader), e.setConsensusdeletetopic(o);
                            break;
                        case 27:
                            o = new I.ConsensusSubmitMessageTransactionBody;
                            t.readMessage(o, I.ConsensusSubmitMessageTransactionBody.deserializeBinaryFromReader), e.setConsensussubmitmessage(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.TransactionBody.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.TransactionBody.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.TransactionBody.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getTransactionid()) && t.writeMessage(1, o, m.TransactionID.serializeBinaryToWriter), null != (o = e.getNodeaccountid()) && t.writeMessage(2, o, m.AccountID.serializeBinaryToWriter), o = e.getTransactionfee(), 0 !== parseInt(o, 10) && t.writeUint64String(3, o), null != (o = e.getTransactionvalidduration()) && t.writeMessage(4, o, M.Duration.serializeBinaryToWriter), (o = e.getGeneraterecord()) && t.writeBool(5, o), (o = e.getMemo()).length > 0 && t.writeString(6, o), null != (o = e.getContractcall()) && t.writeMessage(7, o, c.ContractCallTransactionBody.serializeBinaryToWriter), null != (o = e.getContractcreateinstance()) && t.writeMessage(8, o, u.ContractCreateTransactionBody.serializeBinaryToWriter), null != (o = e.getContractupdateinstance()) && t.writeMessage(9, o, d.ContractUpdateTransactionBody.serializeBinaryToWriter), null != (o = e.getContractdeleteinstance()) && t.writeMessage(22, o, E.ContractDeleteTransactionBody.serializeBinaryToWriter), null != (o = e.getCryptoaddclaim()) && t.writeMessage(10, o, l.CryptoAddClaimTransactionBody.serializeBinaryToWriter), null != (o = e.getCryptocreateaccount()) && t.writeMessage(11, o, y.CryptoCreateTransactionBody.serializeBinaryToWriter), null != (o = e.getCryptodelete()) && t.writeMessage(12, o, g.CryptoDeleteTransactionBody.serializeBinaryToWriter), null != (o = e.getCryptodeleteclaim()) && t.writeMessage(13, o, T.CryptoDeleteClaimTransactionBody.serializeBinaryToWriter), null != (o = e.getCryptotransfer()) && t.writeMessage(14, o, f.CryptoTransferTransactionBody.serializeBinaryToWriter), null != (o = e.getCryptoupdateaccount()) && t.writeMessage(15, o, R.CryptoUpdateTransactionBody.serializeBinaryToWriter), null != (o = e.getFileappend()) && t.writeMessage(16, o, C.FileAppendTransactionBody.serializeBinaryToWriter), null != (o = e.getFilecreate()) && t.writeMessage(17, o, B.FileCreateTransactionBody.serializeBinaryToWriter), null != (o = e.getFiledelete()) && t.writeMessage(18, o, h.FileDeleteTransactionBody.serializeBinaryToWriter), null != (o = e.getFileupdate()) && t.writeMessage(19, o, F.FileUpdateTransactionBody.serializeBinaryToWriter), null != (o = e.getSystemdelete()) && t.writeMessage(20, o, a.SystemDeleteTransactionBody.serializeBinaryToWriter), null != (o = e.getSystemundelete()) && t.writeMessage(21, o, i.SystemUndeleteTransactionBody.serializeBinaryToWriter), null != (o = e.getFreeze()) && t.writeMessage(23, o, p.FreezeTransactionBody.serializeBinaryToWriter), null != (o = e.getConsensuscreatetopic()) && t.writeMessage(24, o, b.ConsensusCreateTopicTransactionBody.serializeBinaryToWriter), null != (o = e.getConsensusupdatetopic()) && t.writeMessage(25, o, O.ConsensusUpdateTopicTransactionBody.serializeBinaryToWriter), null != (o = e.getConsensusdeletetopic()) && t.writeMessage(26, o, G.ConsensusDeleteTopicTransactionBody.serializeBinaryToWriter), null != (o = e.getConsensussubmitmessage()) && t.writeMessage(27, o, I.ConsensusSubmitMessageTransactionBody.serializeBinaryToWriter)
            }, proto.proto.TransactionBody.prototype.getTransactionid = function() {
                return r.Message.getWrapperField(this, m.TransactionID, 1)
            }, proto.proto.TransactionBody.prototype.setTransactionid = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.TransactionBody.prototype.clearTransactionid = function() {
                return this.setTransactionid(void 0)
            }, proto.proto.TransactionBody.prototype.hasTransactionid = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.TransactionBody.prototype.getNodeaccountid = function() {
                return r.Message.getWrapperField(this, m.AccountID, 2)
            }, proto.proto.TransactionBody.prototype.setNodeaccountid = function(e) {
                return r.Message.setWrapperField(this, 2, e)
            }, proto.proto.TransactionBody.prototype.clearNodeaccountid = function() {
                return this.setNodeaccountid(void 0)
            }, proto.proto.TransactionBody.prototype.hasNodeaccountid = function() {
                return null != r.Message.getField(this, 2)
            }, proto.proto.TransactionBody.prototype.getTransactionfee = function() {
                return r.Message.getFieldWithDefault(this, 3, "0")
            }, proto.proto.TransactionBody.prototype.setTransactionfee = function(e) {
                return r.Message.setProto3StringIntField(this, 3, e)
            }, proto.proto.TransactionBody.prototype.getTransactionvalidduration = function() {
                return r.Message.getWrapperField(this, M.Duration, 4)
            }, proto.proto.TransactionBody.prototype.setTransactionvalidduration = function(e) {
                return r.Message.setWrapperField(this, 4, e)
            }, proto.proto.TransactionBody.prototype.clearTransactionvalidduration = function() {
                return this.setTransactionvalidduration(void 0)
            }, proto.proto.TransactionBody.prototype.hasTransactionvalidduration = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.TransactionBody.prototype.getGeneraterecord = function() {
                return r.Message.getBooleanFieldWithDefault(this, 5, !1)
            }, proto.proto.TransactionBody.prototype.setGeneraterecord = function(e) {
                return r.Message.setProto3BooleanField(this, 5, e)
            }, proto.proto.TransactionBody.prototype.getMemo = function() {
                return r.Message.getFieldWithDefault(this, 6, "")
            }, proto.proto.TransactionBody.prototype.setMemo = function(e) {
                return r.Message.setProto3StringField(this, 6, e)
            }, proto.proto.TransactionBody.prototype.getContractcall = function() {
                return r.Message.getWrapperField(this, c.ContractCallTransactionBody, 7)
            }, proto.proto.TransactionBody.prototype.setContractcall = function(e) {
                return r.Message.setOneofWrapperField(this, 7, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearContractcall = function() {
                return this.setContractcall(void 0)
            }, proto.proto.TransactionBody.prototype.hasContractcall = function() {
                return null != r.Message.getField(this, 7)
            }, proto.proto.TransactionBody.prototype.getContractcreateinstance = function() {
                return r.Message.getWrapperField(this, u.ContractCreateTransactionBody, 8)
            }, proto.proto.TransactionBody.prototype.setContractcreateinstance = function(e) {
                return r.Message.setOneofWrapperField(this, 8, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearContractcreateinstance = function() {
                return this.setContractcreateinstance(void 0)
            }, proto.proto.TransactionBody.prototype.hasContractcreateinstance = function() {
                return null != r.Message.getField(this, 8)
            }, proto.proto.TransactionBody.prototype.getContractupdateinstance = function() {
                return r.Message.getWrapperField(this, d.ContractUpdateTransactionBody, 9)
            }, proto.proto.TransactionBody.prototype.setContractupdateinstance = function(e) {
                return r.Message.setOneofWrapperField(this, 9, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearContractupdateinstance = function() {
                return this.setContractupdateinstance(void 0)
            }, proto.proto.TransactionBody.prototype.hasContractupdateinstance = function() {
                return null != r.Message.getField(this, 9)
            }, proto.proto.TransactionBody.prototype.getContractdeleteinstance = function() {
                return r.Message.getWrapperField(this, E.ContractDeleteTransactionBody, 22)
            }, proto.proto.TransactionBody.prototype.setContractdeleteinstance = function(e) {
                return r.Message.setOneofWrapperField(this, 22, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearContractdeleteinstance = function() {
                return this.setContractdeleteinstance(void 0)
            }, proto.proto.TransactionBody.prototype.hasContractdeleteinstance = function() {
                return null != r.Message.getField(this, 22)
            }, proto.proto.TransactionBody.prototype.getCryptoaddclaim = function() {
                return r.Message.getWrapperField(this, l.CryptoAddClaimTransactionBody, 10)
            }, proto.proto.TransactionBody.prototype.setCryptoaddclaim = function(e) {
                return r.Message.setOneofWrapperField(this, 10, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearCryptoaddclaim = function() {
                return this.setCryptoaddclaim(void 0)
            }, proto.proto.TransactionBody.prototype.hasCryptoaddclaim = function() {
                return null != r.Message.getField(this, 10)
            }, proto.proto.TransactionBody.prototype.getCryptocreateaccount = function() {
                return r.Message.getWrapperField(this, y.CryptoCreateTransactionBody, 11)
            }, proto.proto.TransactionBody.prototype.setCryptocreateaccount = function(e) {
                return r.Message.setOneofWrapperField(this, 11, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearCryptocreateaccount = function() {
                return this.setCryptocreateaccount(void 0)
            }, proto.proto.TransactionBody.prototype.hasCryptocreateaccount = function() {
                return null != r.Message.getField(this, 11)
            }, proto.proto.TransactionBody.prototype.getCryptodelete = function() {
                return r.Message.getWrapperField(this, g.CryptoDeleteTransactionBody, 12)
            }, proto.proto.TransactionBody.prototype.setCryptodelete = function(e) {
                return r.Message.setOneofWrapperField(this, 12, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearCryptodelete = function() {
                return this.setCryptodelete(void 0)
            }, proto.proto.TransactionBody.prototype.hasCryptodelete = function() {
                return null != r.Message.getField(this, 12)
            }, proto.proto.TransactionBody.prototype.getCryptodeleteclaim = function() {
                return r.Message.getWrapperField(this, T.CryptoDeleteClaimTransactionBody, 13)
            }, proto.proto.TransactionBody.prototype.setCryptodeleteclaim = function(e) {
                return r.Message.setOneofWrapperField(this, 13, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearCryptodeleteclaim = function() {
                return this.setCryptodeleteclaim(void 0)
            }, proto.proto.TransactionBody.prototype.hasCryptodeleteclaim = function() {
                return null != r.Message.getField(this, 13)
            }, proto.proto.TransactionBody.prototype.getCryptotransfer = function() {
                return r.Message.getWrapperField(this, f.CryptoTransferTransactionBody, 14)
            }, proto.proto.TransactionBody.prototype.setCryptotransfer = function(e) {
                return r.Message.setOneofWrapperField(this, 14, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearCryptotransfer = function() {
                return this.setCryptotransfer(void 0)
            }, proto.proto.TransactionBody.prototype.hasCryptotransfer = function() {
                return null != r.Message.getField(this, 14)
            }, proto.proto.TransactionBody.prototype.getCryptoupdateaccount = function() {
                return r.Message.getWrapperField(this, R.CryptoUpdateTransactionBody, 15)
            }, proto.proto.TransactionBody.prototype.setCryptoupdateaccount = function(e) {
                return r.Message.setOneofWrapperField(this, 15, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearCryptoupdateaccount = function() {
                return this.setCryptoupdateaccount(void 0)
            }, proto.proto.TransactionBody.prototype.hasCryptoupdateaccount = function() {
                return null != r.Message.getField(this, 15)
            }, proto.proto.TransactionBody.prototype.getFileappend = function() {
                return r.Message.getWrapperField(this, C.FileAppendTransactionBody, 16)
            }, proto.proto.TransactionBody.prototype.setFileappend = function(e) {
                return r.Message.setOneofWrapperField(this, 16, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearFileappend = function() {
                return this.setFileappend(void 0)
            }, proto.proto.TransactionBody.prototype.hasFileappend = function() {
                return null != r.Message.getField(this, 16)
            }, proto.proto.TransactionBody.prototype.getFilecreate = function() {
                return r.Message.getWrapperField(this, B.FileCreateTransactionBody, 17)
            }, proto.proto.TransactionBody.prototype.setFilecreate = function(e) {
                return r.Message.setOneofWrapperField(this, 17, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearFilecreate = function() {
                return this.setFilecreate(void 0)
            }, proto.proto.TransactionBody.prototype.hasFilecreate = function() {
                return null != r.Message.getField(this, 17)
            }, proto.proto.TransactionBody.prototype.getFiledelete = function() {
                return r.Message.getWrapperField(this, h.FileDeleteTransactionBody, 18)
            }, proto.proto.TransactionBody.prototype.setFiledelete = function(e) {
                return r.Message.setOneofWrapperField(this, 18, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearFiledelete = function() {
                return this.setFiledelete(void 0)
            }, proto.proto.TransactionBody.prototype.hasFiledelete = function() {
                return null != r.Message.getField(this, 18)
            }, proto.proto.TransactionBody.prototype.getFileupdate = function() {
                return r.Message.getWrapperField(this, F.FileUpdateTransactionBody, 19)
            }, proto.proto.TransactionBody.prototype.setFileupdate = function(e) {
                return r.Message.setOneofWrapperField(this, 19, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearFileupdate = function() {
                return this.setFileupdate(void 0)
            }, proto.proto.TransactionBody.prototype.hasFileupdate = function() {
                return null != r.Message.getField(this, 19)
            }, proto.proto.TransactionBody.prototype.getSystemdelete = function() {
                return r.Message.getWrapperField(this, a.SystemDeleteTransactionBody, 20)
            }, proto.proto.TransactionBody.prototype.setSystemdelete = function(e) {
                return r.Message.setOneofWrapperField(this, 20, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearSystemdelete = function() {
                return this.setSystemdelete(void 0)
            }, proto.proto.TransactionBody.prototype.hasSystemdelete = function() {
                return null != r.Message.getField(this, 20)
            }, proto.proto.TransactionBody.prototype.getSystemundelete = function() {
                return r.Message.getWrapperField(this, i.SystemUndeleteTransactionBody, 21)
            }, proto.proto.TransactionBody.prototype.setSystemundelete = function(e) {
                return r.Message.setOneofWrapperField(this, 21, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearSystemundelete = function() {
                return this.setSystemundelete(void 0)
            }, proto.proto.TransactionBody.prototype.hasSystemundelete = function() {
                return null != r.Message.getField(this, 21)
            }, proto.proto.TransactionBody.prototype.getFreeze = function() {
                return r.Message.getWrapperField(this, p.FreezeTransactionBody, 23)
            }, proto.proto.TransactionBody.prototype.setFreeze = function(e) {
                return r.Message.setOneofWrapperField(this, 23, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearFreeze = function() {
                return this.setFreeze(void 0)
            }, proto.proto.TransactionBody.prototype.hasFreeze = function() {
                return null != r.Message.getField(this, 23)
            }, proto.proto.TransactionBody.prototype.getConsensuscreatetopic = function() {
                return r.Message.getWrapperField(this, b.ConsensusCreateTopicTransactionBody, 24)
            }, proto.proto.TransactionBody.prototype.setConsensuscreatetopic = function(e) {
                return r.Message.setOneofWrapperField(this, 24, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearConsensuscreatetopic = function() {
                return this.setConsensuscreatetopic(void 0)
            }, proto.proto.TransactionBody.prototype.hasConsensuscreatetopic = function() {
                return null != r.Message.getField(this, 24)
            }, proto.proto.TransactionBody.prototype.getConsensusupdatetopic = function() {
                return r.Message.getWrapperField(this, O.ConsensusUpdateTopicTransactionBody, 25)
            }, proto.proto.TransactionBody.prototype.setConsensusupdatetopic = function(e) {
                return r.Message.setOneofWrapperField(this, 25, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearConsensusupdatetopic = function() {
                return this.setConsensusupdatetopic(void 0)
            }, proto.proto.TransactionBody.prototype.hasConsensusupdatetopic = function() {
                return null != r.Message.getField(this, 25)
            }, proto.proto.TransactionBody.prototype.getConsensusdeletetopic = function() {
                return r.Message.getWrapperField(this, G.ConsensusDeleteTopicTransactionBody, 26)
            }, proto.proto.TransactionBody.prototype.setConsensusdeletetopic = function(e) {
                return r.Message.setOneofWrapperField(this, 26, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearConsensusdeletetopic = function() {
                return this.setConsensusdeletetopic(void 0)
            }, proto.proto.TransactionBody.prototype.hasConsensusdeletetopic = function() {
                return null != r.Message.getField(this, 26)
            }, proto.proto.TransactionBody.prototype.getConsensussubmitmessage = function() {
                return r.Message.getWrapperField(this, I.ConsensusSubmitMessageTransactionBody, 27)
            }, proto.proto.TransactionBody.prototype.setConsensussubmitmessage = function(e) {
                return r.Message.setOneofWrapperField(this, 27, proto.proto.TransactionBody.oneofGroups_[0], e)
            }, proto.proto.TransactionBody.prototype.clearConsensussubmitmessage = function() {
                return this.setConsensussubmitmessage(void 0)
            }, proto.proto.TransactionBody.prototype.hasConsensussubmitmessage = function() {
                return null != r.Message.getField(this, 27)
            }, n.object.extend(t, proto.proto)
        },
        617: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(105);
            n.object.extend(proto, a);
            var i = o(36);
            n.object.extend(proto, i);
            var p = o(1793);
            n.object.extend(proto, p);
            var c = o(1040);
            n.object.extend(proto, c);
            var u = o(500);
            n.object.extend(proto, u), n.exportSymbol("proto.proto.TransactionRecord", null, s), n.exportSymbol("proto.proto.TransactionRecord.BodyCase", null, s), proto.proto.TransactionRecord = function(e) {
                r.Message.initialize(this, e, 0, -1, null, proto.proto.TransactionRecord.oneofGroups_)
            }, n.inherits(proto.proto.TransactionRecord, r.Message), n.DEBUG && !COMPILED && (proto.proto.TransactionRecord.displayName = "proto.proto.TransactionRecord"), proto.proto.TransactionRecord.oneofGroups_ = [
                [7, 8]
            ], proto.proto.TransactionRecord.BodyCase = {
                BODY_NOT_SET: 0,
                CONTRACTCALLRESULT: 7,
                CONTRACTCREATERESULT: 8
            }, proto.proto.TransactionRecord.prototype.getBodyCase = function() {
                return r.Message.computeOneofCase(this, proto.proto.TransactionRecord.oneofGroups_[0])
            }, r.Message.GENERATE_TO_OBJECT && (proto.proto.TransactionRecord.prototype.toObject = function(e) {
                return proto.proto.TransactionRecord.toObject(e, this)
            }, proto.proto.TransactionRecord.toObject = function(e, t) {
                var o, n = {
                    receipt: (o = t.getReceipt()) && p.TransactionReceipt.toObject(e, o),
                    transactionhash: t.getTransactionhash_asB64(),
                    consensustimestamp: (o = t.getConsensustimestamp()) && a.Timestamp.toObject(e, o),
                    transactionid: (o = t.getTransactionid()) && i.TransactionID.toObject(e, o),
                    memo: r.Message.getFieldWithDefault(t, 5, ""),
                    transactionfee: r.Message.getFieldWithDefault(t, 6, 0),
                    contractcallresult: (o = t.getContractcallresult()) && u.ContractFunctionResult.toObject(e, o),
                    contractcreateresult: (o = t.getContractcreateresult()) && u.ContractFunctionResult.toObject(e, o),
                    transferlist: (o = t.getTransferlist()) && c.TransferList.toObject(e, o)
                };
                return e && (n.$jspbMessageInstance = t), n
            }), proto.proto.TransactionRecord.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.TransactionRecord;
                return proto.proto.TransactionRecord.deserializeBinaryFromReader(o, t)
            }, proto.proto.TransactionRecord.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new p.TransactionReceipt;
                            t.readMessage(o, p.TransactionReceipt.deserializeBinaryFromReader), e.setReceipt(o);
                            break;
                        case 2:
                            o = t.readBytes();
                            e.setTransactionhash(o);
                            break;
                        case 3:
                            o = new a.Timestamp;
                            t.readMessage(o, a.Timestamp.deserializeBinaryFromReader), e.setConsensustimestamp(o);
                            break;
                        case 4:
                            o = new i.TransactionID;
                            t.readMessage(o, i.TransactionID.deserializeBinaryFromReader), e.setTransactionid(o);
                            break;
                        case 5:
                            o = t.readString();
                            e.setMemo(o);
                            break;
                        case 6:
                            o = t.readUint64();
                            e.setTransactionfee(o);
                            break;
                        case 7:
                            o = new u.ContractFunctionResult;
                            t.readMessage(o, u.ContractFunctionResult.deserializeBinaryFromReader), e.setContractcallresult(o);
                            break;
                        case 8:
                            o = new u.ContractFunctionResult;
                            t.readMessage(o, u.ContractFunctionResult.deserializeBinaryFromReader), e.setContractcreateresult(o);
                            break;
                        case 10:
                            o = new c.TransferList;
                            t.readMessage(o, c.TransferList.deserializeBinaryFromReader), e.setTransferlist(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.TransactionRecord.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.TransactionRecord.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.TransactionRecord.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getReceipt()) && t.writeMessage(1, o, p.TransactionReceipt.serializeBinaryToWriter), (o = e.getTransactionhash_asU8()).length > 0 && t.writeBytes(2, o), null != (o = e.getConsensustimestamp()) && t.writeMessage(3, o, a.Timestamp.serializeBinaryToWriter), null != (o = e.getTransactionid()) && t.writeMessage(4, o, i.TransactionID.serializeBinaryToWriter), (o = e.getMemo()).length > 0 && t.writeString(5, o), 0 !== (o = e.getTransactionfee()) && t.writeUint64(6, o), null != (o = e.getContractcallresult()) && t.writeMessage(7, o, u.ContractFunctionResult.serializeBinaryToWriter), null != (o = e.getContractcreateresult()) && t.writeMessage(8, o, u.ContractFunctionResult.serializeBinaryToWriter), null != (o = e.getTransferlist()) && t.writeMessage(10, o, c.TransferList.serializeBinaryToWriter)
            }, proto.proto.TransactionRecord.prototype.getReceipt = function() {
                return r.Message.getWrapperField(this, p.TransactionReceipt, 1)
            }, proto.proto.TransactionRecord.prototype.setReceipt = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.TransactionRecord.prototype.clearReceipt = function() {
                return this.setReceipt(void 0)
            }, proto.proto.TransactionRecord.prototype.hasReceipt = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.TransactionRecord.prototype.getTransactionhash = function() {
                return r.Message.getFieldWithDefault(this, 2, "")
            }, proto.proto.TransactionRecord.prototype.getTransactionhash_asB64 = function() {
                return r.Message.bytesAsB64(this.getTransactionhash())
            }, proto.proto.TransactionRecord.prototype.getTransactionhash_asU8 = function() {
                return r.Message.bytesAsU8(this.getTransactionhash())
            }, proto.proto.TransactionRecord.prototype.setTransactionhash = function(e) {
                return r.Message.setProto3BytesField(this, 2, e)
            }, proto.proto.TransactionRecord.prototype.getConsensustimestamp = function() {
                return r.Message.getWrapperField(this, a.Timestamp, 3)
            }, proto.proto.TransactionRecord.prototype.setConsensustimestamp = function(e) {
                return r.Message.setWrapperField(this, 3, e)
            }, proto.proto.TransactionRecord.prototype.clearConsensustimestamp = function() {
                return this.setConsensustimestamp(void 0)
            }, proto.proto.TransactionRecord.prototype.hasConsensustimestamp = function() {
                return null != r.Message.getField(this, 3)
            }, proto.proto.TransactionRecord.prototype.getTransactionid = function() {
                return r.Message.getWrapperField(this, i.TransactionID, 4)
            }, proto.proto.TransactionRecord.prototype.setTransactionid = function(e) {
                return r.Message.setWrapperField(this, 4, e)
            }, proto.proto.TransactionRecord.prototype.clearTransactionid = function() {
                return this.setTransactionid(void 0)
            }, proto.proto.TransactionRecord.prototype.hasTransactionid = function() {
                return null != r.Message.getField(this, 4)
            }, proto.proto.TransactionRecord.prototype.getMemo = function() {
                return r.Message.getFieldWithDefault(this, 5, "")
            }, proto.proto.TransactionRecord.prototype.setMemo = function(e) {
                return r.Message.setProto3StringField(this, 5, e)
            }, proto.proto.TransactionRecord.prototype.getTransactionfee = function() {
                return r.Message.getFieldWithDefault(this, 6, 0)
            }, proto.proto.TransactionRecord.prototype.setTransactionfee = function(e) {
                return r.Message.setProto3IntField(this, 6, e)
            }, proto.proto.TransactionRecord.prototype.getContractcallresult = function() {
                return r.Message.getWrapperField(this, u.ContractFunctionResult, 7)
            }, proto.proto.TransactionRecord.prototype.setContractcallresult = function(e) {
                return r.Message.setOneofWrapperField(this, 7, proto.proto.TransactionRecord.oneofGroups_[0], e)
            }, proto.proto.TransactionRecord.prototype.clearContractcallresult = function() {
                return this.setContractcallresult(void 0)
            }, proto.proto.TransactionRecord.prototype.hasContractcallresult = function() {
                return null != r.Message.getField(this, 7)
            }, proto.proto.TransactionRecord.prototype.getContractcreateresult = function() {
                return r.Message.getWrapperField(this, u.ContractFunctionResult, 8)
            }, proto.proto.TransactionRecord.prototype.setContractcreateresult = function(e) {
                return r.Message.setOneofWrapperField(this, 8, proto.proto.TransactionRecord.oneofGroups_[0], e)
            }, proto.proto.TransactionRecord.prototype.clearContractcreateresult = function() {
                return this.setContractcreateresult(void 0)
            }, proto.proto.TransactionRecord.prototype.hasContractcreateresult = function() {
                return null != r.Message.getField(this, 8)
            }, proto.proto.TransactionRecord.prototype.getTransferlist = function() {
                return r.Message.getWrapperField(this, c.TransferList, 10)
            }, proto.proto.TransactionRecord.prototype.setTransferlist = function(e) {
                return r.Message.setWrapperField(this, 10, e)
            }, proto.proto.TransactionRecord.prototype.clearTransferlist = function() {
                return this.setTransferlist(void 0)
            }, proto.proto.TransactionRecord.prototype.hasTransferlist = function() {
                return null != r.Message.getField(this, 10)
            }, n.object.extend(t, proto.proto)
        },
        64: function(e, t, o) {
            var r = o(28),
                n = r,
                s = Function("return this")(),
                a = o(176);
            n.object.extend(proto, a), n.exportSymbol("proto.proto.QueryHeader", null, s), n.exportSymbol("proto.proto.ResponseType", null, s), proto.proto.QueryHeader = function(e) {
                r.Message.initialize(this, e, 0, -1, null, null)
            }, n.inherits(proto.proto.QueryHeader, r.Message), n.DEBUG && !COMPILED && (proto.proto.QueryHeader.displayName = "proto.proto.QueryHeader"), r.Message.GENERATE_TO_OBJECT && (proto.proto.QueryHeader.prototype.toObject = function(e) {
                return proto.proto.QueryHeader.toObject(e, this)
            }, proto.proto.QueryHeader.toObject = function(e, t) {
                var o, n = {
                    payment: (o = t.getPayment()) && a.Transaction.toObject(e, o),
                    responsetype: r.Message.getFieldWithDefault(t, 2, 0)
                };
                return e && (n.$jspbMessageInstance = t), n
            }), proto.proto.QueryHeader.deserializeBinary = function(e) {
                var t = new r.BinaryReader(e),
                    o = new proto.proto.QueryHeader;
                return proto.proto.QueryHeader.deserializeBinaryFromReader(o, t)
            }, proto.proto.QueryHeader.deserializeBinaryFromReader = function(e, t) {
                for (; t.nextField() && !t.isEndGroup();) {
                    switch (t.getFieldNumber()) {
                        case 1:
                            var o = new a.Transaction;
                            t.readMessage(o, a.Transaction.deserializeBinaryFromReader), e.setPayment(o);
                            break;
                        case 2:
                            o = t.readEnum();
                            e.setResponsetype(o);
                            break;
                        default:
                            t.skipField()
                    }
                }
                return e
            }, proto.proto.QueryHeader.prototype.serializeBinary = function() {
                var e = new r.BinaryWriter;
                return proto.proto.QueryHeader.serializeBinaryToWriter(this, e), e.getResultBuffer()
            }, proto.proto.QueryHeader.serializeBinaryToWriter = function(e, t) {
                var o = void 0;
                null != (o = e.getPayment()) && t.writeMessage(1, o, a.Transaction.serializeBinaryToWriter), 0 !== (o = e.getResponsetype()) && t.writeEnum(2, o)
            }, proto.proto.QueryHeader.prototype.getPayment = function() {
                return r.Message.getWrapperField(this, a.Transaction, 1)
            }, proto.proto.QueryHeader.prototype.setPayment = function(e) {
                return r.Message.setWrapperField(this, 1, e)
            }, proto.proto.QueryHeader.prototype.clearPayment = function() {
                return this.setPayment(void 0)
            }, proto.proto.QueryHeader.prototype.hasPayment = function() {
                return null != r.Message.getField(this, 1)
            }, proto.proto.QueryHeader.prototype.getResponsetype = function() {
                return r.Message.getFieldWithDefault(this, 2, 0)
            }, proto.proto.QueryHeader.prototype.setResponsetype = function(e) {
                return r.Message.setProto3EnumField(this, 2, e)
            }, proto.proto.ResponseType = {
                ANSWER_ONLY: 0,
                ANSWER_STATE_PROOF: 1,
                COST_ANSWER: 2,
                COST_ANSWER_STATE_PROOF: 3
            }, n.object.extend(t, proto.proto)
        }
    }
]);