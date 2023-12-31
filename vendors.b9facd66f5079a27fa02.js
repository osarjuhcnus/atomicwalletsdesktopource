(window.webpackJsonp = window.webpackJsonp || []).push([
    [155], {
        1038: function(t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, r, n) {
                return new(r || (r = Promise))((function(a, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function i(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(o, i)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const a = r(73),
                s = r(24),
                o = r(613),
                i = r(614),
                c = r(3255),
                u = r(1039);
            class Ed25519PrivateKey {
                constructor({
                    privateKey: t,
                    publicKey: e
                }) {
                    if (t.length !== a.sign.secretKeyLength) throw new u.BadKeyError;
                    this._keyData = t, this.publicKey = o.Ed25519PublicKey.fromBytes(e)
                }
                static fromBytes(t) {
                    const e = t instanceof Uint8Array ? t : Uint8Array.from(t);
                    let r;
                    switch (t.length) {
                        case 32:
                            r = a.sign.keyPair.fromSeed(e);
                            break;
                        case 64:
                            r = a.sign.keyPair.fromSecretKey(e);
                            break;
                        default:
                            throw new u.BadKeyError
                    }
                    const {
                        secretKey: n,
                        publicKey: s
                    } = r;
                    return new Ed25519PrivateKey({
                        privateKey: n,
                        publicKey: s
                    })
                }
                static fromString(t) {
                    switch (t.length) {
                        case 64:
                        case 128: {
                            const e = Ed25519PrivateKey.fromBytes(i.decodeHex(t));
                            return e._asStringRaw = t, e
                        }
                        case 96:
                            if (t.startsWith(i.ed25519PrivKeyPrefix)) {
                                const e = t.slice(32),
                                    r = Ed25519PrivateKey.fromBytes(i.decodeHex(e));
                                return r._asStringRaw = e, r
                            }
                    }
                    throw new u.BadKeyError
                }
                static fromMnemonic(t, e) {
                    return n(this, void 0, void 0, (function*() {
                        const r = t.toString(),
                            n = "mnemonic" + e,
                            a = yield i.pbkdf2(r, n, 2048, 64, "sha512"), o = s.createHmac("sha512", "ed25519 seed");
                        o.update(a);
                        const c = o.digest();
                        let u = c.subarray(0, 32),
                            d = c.subarray(32);
                        for (const t of [44, 3030, 0, 0])({
                            keyBytes: u,
                            chainCode: d
                        } = i.deriveChildKey(u, d, t));
                        const l = Ed25519PrivateKey.fromBytes(u);
                        return l._chainCode = d, l
                    }))
                }
                static fromKeystore(t, e) {
                    return n(this, void 0, void 0, (function*() {
                        return new Ed25519PrivateKey(yield c.loadKeystore(t, e))
                    }))
                }
                static generate() {
                    return n(this, void 0, void 0, (function*() {
                        return this.fromBytes(yield i.randomBytes(32))
                    }))
                }
                derive(t) {
                    if (null == this._chainCode) throw new Error("this Ed25519 private key does not support key derivation");
                    const {
                        keyBytes: e,
                        chainCode: r
                    } = i.deriveChildKey(this._keyData.subarray(0, 32), this._chainCode, t), n = Ed25519PrivateKey.fromBytes(e);
                    return n._chainCode = r, n
                }
                get supportsDerivation() {
                    return null != this._chainCode
                }
                toBytes() {
                    return this._keyData.slice(0, 32)
                }
                toString(t = !1) {
                    return null == this._asStringRaw && (this._asStringRaw = i.encodeHex(this._keyData.subarray(0, 32))), (t ? "" : i.ed25519PrivKeyPrefix) + this._asStringRaw
                }
                toKeystore(t) {
                    return c.createKeystore(this._keyData, t)
                }
            }
            e.Ed25519PrivateKey = Ed25519PrivateKey
        },
        1039: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            class BadKeyError extends Error {
                constructor() {
                    super("Failed to parse correct key"), this.name = "BadKeyError"
                }
            }
            e.BadKeyError = BadKeyError
        },
        1055: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            class LocalValidationError extends Error {
                constructor(t, e) {
                    super(`${t} failed validation:\n${e.join("\n")}`), this.name = "ValidationError"
                }
            }
            e.LocalValidationError = LocalValidationError
        },
        1056: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            class HederaStatusError extends Error {
                constructor(t) {
                    super("Hedera returned response code: " + t.toString()), this.status = t, this.name = "HederaStatusError"
                }
            }
            e.HederaStatusError = HederaStatusError
        },
        1057: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(1040),
                s = r(218),
                o = r(219),
                i = r(129),
                c = r(91);
            class CryptoTransferTransaction extends n.TransactionBuilder {
                constructor() {
                    super(), this._body = new a.CryptoTransferTransactionBody, this._body.setTransfers(new a.TransferList), this._inner.setCryptotransfer(this._body)
                }
                addSender(t, e) {
                    const r = "number" == typeof e ? i.Hbar.fromTinybar(e) : e;
                    return r._check({
                        allowNegative: !1
                    }), this.addTransfer(t, r.negated())
                }
                addRecipient(t, e) {
                    const r = "number" == typeof e ? i.Hbar.fromTinybar(e) : e;
                    return r._check({
                        allowNegative: !1
                    }), this.addTransfer(t, r)
                }
                addTransfer(t, e) {
                    const r = this._body.getTransfers() || new a.TransferList;
                    this._body.setTransfers(r);
                    const n = new a.AccountAmount;
                    return n.setAccountid(new c.AccountId(t)._toProto()), n.setAmount(e._toProto()), r.addAccountamounts(n), this
                }
                _doValidate(t) {
                    const e = this._body.getTransfers().getAccountamountsList();
                    if (0 === e.length) return void t.push("CryptoTransferTransaction must have at least one transfer");
                    const r = e.reduce((t, e) => t.plus(e.getAmount()), new s.default(0));
                    r.isZero() || t.push("CryptoTransferTransaction must have zero sum; got: " + r)
                }
                get _method() {
                    return o.CryptoService.cryptoTransfer
                }
            }
            e.CryptoTransferTransaction = CryptoTransferTransaction
        },
        1058: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(91),
                a = r(501),
                s = r(155),
                o = r(199),
                i = r(3265),
                c = r(408);
            class TransactionReceipt {
                constructor(t, e, r, n, a, s) {
                    this.status = t, this._accountId = e, this._fileId = r, this._contractId = n, this._topicId = a, this._exchangeRateSet = s
                }
                getAccountId() {
                    return this._accountId
                }
                getFileId() {
                    return this._fileId
                }
                getContractId() {
                    return this._contractId
                }
                getTopicId() {
                    return this._topicId
                }
                static _fromProto(t) {
                    return new TransactionReceipt(new c.Status(t.getStatus()), t.hasAccountid() ? n.AccountId._fromProto(t.getAccountid()) : null, t.hasFileid() ? o.FileId._fromProto(t.getFileid()) : null, t.hasContractid() ? s.ContractId._fromProto(t.getContractid()) : null, t.hasTopicid() ? a.ConsensusTopicId._fromProto(t.getTopicid()) : null, t.hasExchangerate() ? i.exchangeRateSetToSdk(t.getExchangerate()) : null)
                }
            }
            e.TransactionReceipt = TransactionReceipt
        },
        1059: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(3266),
                a = r(500),
                s = r(155),
                o = r(218),
                i = r(614);
            e.ContractFunctionResult = class ContractFunctionResult {
                constructor(t) {
                    t instanceof a.ContractFunctionResult ? (this._bytes = t.getContractcallresult_asU8(), this.contractId = t.hasContractid() ? s.ContractId._fromProto(t.getContractid()) : null, this.errorMessage = t.getErrormessage(), this.bloom = t.getBloom_asU8(), this.gasUsed = t.getGasused(), this.logs = n.contractLogInfoListToSdk(t.getLoginfoList())) : (this.contractId = new s.ContractId(0), this._bytes = t, this.errorMessage = "", this.bloom = new Uint8Array, this.gasUsed = 0, this.logs = [])
                }
                asBytes() {
                    return this._bytes
                }
                getString(t) {
                    return Buffer.from(this.getBytes(t)).toString("utf-8")
                }
                getBytes(t) {
                    const e = this.getInt32(t),
                        r = new DataView(this._bytes.buffer, this._bytes.byteOffset + e + 28, 4).getInt32(0);
                    return this._bytes.subarray(e + 32, e + 32 + r)
                }
                getBytes32(t) {
                    return this._bytes.subarray(32 * t, 32 * t + 32)
                }
                getBool(t) {
                    return 0 !== this._bytes[32 * t + 31]
                }
                getInt8(t) {
                    return this._bytes[32 * t + 31]
                }
                getInt32(t) {
                    return new DataView(this._bytes.buffer, this._bytes.byteOffset + 32 * t + 28, 4).getInt32(0)
                }
                getInt64(t) {
                    return new o.default(i.encodeHex(this._getBytes32(t).subarray(24, 32)), 16)
                }
                getInt256(t) {
                    return new o.default(i.encodeHex(this._getBytes32(t)), 16)
                }
                getUint8(t) {
                    return this._bytes[32 * t + 31]
                }
                getUint32(t) {
                    return new DataView(this._bytes.buffer, this._bytes.byteOffset + 32 * t + 28, 4).getUint32(0)
                }
                getUint64(t) {
                    return new o.default(i.encodeHex(this._getBytes32(t).subarray(24, 32)), 16)
                }
                getUint256(t) {
                    return new o.default(i.encodeHex(this._getBytes32(t)), 16)
                }
                getAddress(t) {
                    return Buffer.from(this._bytes.subarray(32 * t + 12, 32 * t + 32)).toString("hex")
                }
                _getBytes32(t) {
                    return this._bytes.subarray(32 * t, 32 * t + 32)
                }
            }
        },
        1060: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(218),
                a = r(3278),
                s = r(103);

            function o(t, e, r) {
                r(e, n.default.isBigNumber(t) ? t.toNumber() : t)
            }
            e.ContractFunctionParams = class ContractFunctionParams {
                constructor() {
                    this._arguments = [], this._selector = new a.ContractFunctionSelector
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
                    return this._selector.addBytes32(), this._addParam(t, !0)
                }
                addBytesArray(t) {
                    return this._selector.addBytesArray(), this._addParam(t, !0)
                }
                addBytes32Array(t) {
                    for (const [e, r] of t.entries())
                        if (32 !== r.length) throw new Error("addBytes32 expected array to be of length 32, but received " + r.length);
                    return this._selector.addBytes32(), this._addParam(t, !0)
                }
                addBool(t) {
                    return this._selector.addBool(), this._addParam(t, !1)
                }
                addInt8(t) {
                    return this._selector.addInt8(), this._addParam(t, !1)
                }
                addInt32(t) {
                    return this._selector.addInt32(), this._addParam(t, !1)
                }
                addInt64(t) {
                    return this._selector.addInt64(), this._addParam(t, !1)
                }
                addInt256(t) {
                    return this._selector.addInt256(), this._addParam(t, !1)
                }
                addInt8Array(t) {
                    return this._selector.addInt8Array(), this._addParam(t, !0)
                }
                addInt32Array(t) {
                    return this._selector.addInt32Array(), this._addParam(t, !0)
                }
                addInt64Array(t) {
                    return this._selector.addInt64Array(), this._addParam(t, !0)
                }
                addInt256Array(t) {
                    return this._selector.addInt256Array(), this._addParam(t, !0)
                }
                addUint8(t) {
                    return this._selector.addUint8(), this._addParam(t, !1)
                }
                addUint32(t) {
                    return this._selector.addUint32(), this._addParam(t, !1)
                }
                addUint64(t) {
                    return this._selector.addUint64(), this._addParam(t, !1)
                }
                addUint256(t) {
                    return this._selector.addUint256(), this._addParam(t, !1)
                }
                addUint8Array(t) {
                    return this._selector.addUint8Array(), this._addParam(t, !0)
                }
                addUint32Array(t) {
                    return this._selector.addUint32Array(), this._addParam(t, !0)
                }
                addUint64Array(t) {
                    return this._selector.addUint64Array(), this._addParam(t, !0)
                }
                addUint256Array(t) {
                    return this._selector.addUint256Array(), this._addParam(t, !0)
                }
                addAddress(t) {
                    const e = Buffer.from(t, "hex");
                    if (20 !== e.length) throw new Error("`address` type requires parameter to be exactly 20 bytes");
                    return this._selector.addAddress(), this._addParam(e, !1)
                }
                addAddressArray(t) {
                    const e = [];
                    for (const [r, n] of t.entries()) {
                        const t = Buffer.from(n, "hex");
                        if (20 !== t.length) throw new Error("`address` type requires parameter to be exactly 20 bytes");
                        e.push(t)
                    }
                    return this._selector.addAddressArray(), this._addParam(e, !0)
                }
                addFunction(t, e) {
                    const r = Buffer.from(t, "hex"),
                        n = e._build(null);
                    if (20 !== r.length) throw new Error("`function` type requires parameter `address` to be exactly 20 bytes");
                    this._selector.addFunction();
                    const a = new Uint8Array(24);
                    return a.set(r, 0), a.set(n, 20), this._addParam(a, !1)
                }
                _addParam(t, e) {
                    const r = this._selector._paramTypes.length - 1,
                        i = function t(e, r) {
                            let i = new Uint8Array(32),
                                c = new DataView(i.buffer, 0);
                            if (r.array) {
                                if (!Array.isArray(e)) throw new TypeError("SolidityType indicates type is array, but parameter is not an array");
                                const n = [];
                                for (const [a, s] of e.entries()) {
                                    const e = t(s, {
                                        ty: r.ty,
                                        array: !1
                                    });
                                    n.push(e)
                                }
                                const s = n.map(t => t.length).reduce((t, e) => t + e);
                                switch (r.ty) {
                                    case a.ArgumentType.uint8:
                                    case a.ArgumentType.int8:
                                    case a.ArgumentType.uint16:
                                    case a.ArgumentType.int16:
                                    case a.ArgumentType.uint32:
                                    case a.ArgumentType.int32:
                                    case a.ArgumentType.uint64:
                                    case a.ArgumentType.int64:
                                    case a.ArgumentType.uint256:
                                    case a.ArgumentType.int256:
                                    case a.ArgumentType.bool:
                                    case a.ArgumentType.bytes32:
                                    case a.ArgumentType.address:
                                    case a.ArgumentType.func:
                                        i = new Uint8Array(s + 32);
                                        break;
                                    case a.ArgumentType.bytes:
                                    case a.ArgumentType.string:
                                        i = new Uint8Array(32 * n.length + s + 32);
                                        break;
                                    default:
                                        throw new TypeError("Expected param type to be ArgumentType, but received " + r.ty)
                                }
                                c = new DataView(i.buffer, 28), c.setUint32(0, n.length);
                                let o = 32 * n.length;
                                for (const [t, e] of n.entries()) switch (r.ty) {
                                    case a.ArgumentType.uint8:
                                    case a.ArgumentType.int8:
                                    case a.ArgumentType.uint16:
                                    case a.ArgumentType.int16:
                                    case a.ArgumentType.uint32:
                                    case a.ArgumentType.int32:
                                    case a.ArgumentType.uint64:
                                    case a.ArgumentType.int64:
                                    case a.ArgumentType.uint256:
                                    case a.ArgumentType.int256:
                                    case a.ArgumentType.bool:
                                    case a.ArgumentType.bytes32:
                                    case a.ArgumentType.address:
                                    case a.ArgumentType.func:
                                        i.set(e, 32 * t + 32);
                                        break;
                                    case a.ArgumentType.bytes:
                                    case a.ArgumentType.string:
                                        const n = new DataView(i.buffer, 32 * (t + 1) + 28);
                                        n.setUint32(0, o), i.set(e, n.getUint32(0) + 32), o += e.length;
                                        break;
                                    default:
                                        throw new TypeError("Expected param type to be ArgumentType, but received " + r.ty)
                                }
                                return i
                            }
                            switch (r.ty) {
                                case a.ArgumentType.uint8:
                                    return o(e, 31, c.setUint8.bind(c)), i;
                                case a.ArgumentType.int8:
                                    return o(e, 31, c.setInt8.bind(c)), i;
                                case a.ArgumentType.uint16:
                                    return o(e, 30, c.setUint16.bind(c)), i;
                                case a.ArgumentType.int16:
                                    return o(e, 30, c.setInt16.bind(c)), i;
                                case a.ArgumentType.uint32:
                                    return o(e, 28, c.setUint32.bind(c)), i;
                                case a.ArgumentType.int32:
                                    return o(e, 28, c.setInt32.bind(c)), i;
                                case a.ArgumentType.uint64:
                                case a.ArgumentType.int64:
                                    if (n.default.isBigNumber(e)) {
                                        let t = e.toString(16);
                                        if (t.length > 16) throw new TypeError("uint64/int64 requires BigNumber to be less than or equal to 8 bytes");
                                        if (!e.isInteger()) throw new TypeError("uint64/int64 requires BigNumber to be an integer");
                                        t.length % 2 == 1 && (t = "0" + t);
                                        const r = Buffer.from(t, "hex");
                                        i.set(r, 32 - r.length)
                                    }
                                    return i;
                                case a.ArgumentType.int256:
                                case a.ArgumentType.uint256:
                                    if (n.default.isBigNumber(e)) {
                                        let t = e.toString(16);
                                        t.length % 2 == 1 && (t = "0" + t);
                                        const r = Buffer.from(t, "hex");
                                        i.set(r, 32 - r.length)
                                    }
                                    return i;
                                case a.ArgumentType.address:
                                    return i.set(e, 12), i;
                                case a.ArgumentType.bool:
                                    return i[31] = e ? 1 : 0, i;
                                case a.ArgumentType.func:
                                    return i.set(e, 8), i;
                                case a.ArgumentType.bytes32:
                                    return i.set(e, 0), i;
                                case a.ArgumentType.bytes:
                                case a.ArgumentType.string:
                                    const t = e instanceof Uint8Array ? e : s.utf8encode(e);
                                    return i = Math.floor(t.length / 32) >= 0 && 0 !== Math.floor(t.length % 32) ? new Uint8Array(32 * (Math.floor(t.length / 32) + 1) + 32) : new Uint8Array(64), i.set(t, 32), c = new DataView(i.buffer, 28), c.setUint32(0, t.length), i;
                                default:
                                    throw new Error("Unsupported argument type: " + r)
                            }
                        }(t, this._selector._paramTypes[r]);
                    return this._arguments.push({
                        dynamic: e,
                        value: i
                    }), this
                }
                _build(t) {
                    const e = null != t,
                        r = e ? 4 : 0,
                        n = 0 === this._arguments.length ? r : 32 * this._arguments.length + this._arguments.map(t => t.dynamic ? t.value.length : 0).reduce((t, e) => t + e) + r,
                        a = new Uint8Array(n);
                    e && a.set(this._selector._build(t), 0);
                    let s = 32 * this._arguments.length;
                    for (const [t, {
                            dynamic: e,
                            value: n
                        }] of this._arguments.entries())
                        if (e) {
                            const e = new DataView(a.buffer, r + 32 * t + 28);
                            e.setUint32(0, s), a.set(n, e.getUint32(0) + r), s += n.length
                        } else a.set(n, r + 32 * t);
                    return a
                }
            }
        },
        111: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(615),
                a = r(103),
                s = r(1798),
                o = r(176),
                i = r(129),
                c = r(91),
                u = r(409);
            e.TransactionBuilder = class TransactionBuilder {
                constructor() {
                    this._inner = new n.TransactionBody, this._inner.setTransactionvalidduration(a.newDuration(120))
                }
                setTransactionId(t) {
                    return this._inner.setTransactionid((t instanceof u.TransactionId ? t : new u.TransactionId(t))._toProto()), this
                }
                setTransactionValidDuration(t) {
                    return this._inner.setTransactionvalidduration(a.newDuration(Math.min(t, 120))), this
                }
                setMaxTransactionFee(t) {
                    const e = "number" == typeof t ? i.Hbar.fromTinybar(t) : t;
                    return e._check({
                        allowNegative: !1
                    }), this._inner.setTransactionfee(e._toProto()), this
                }
                setNodeAccountId(t) {
                    return this._node = new c.AccountId(t), this._inner.setNodeaccountid(this._node._toProto()), this
                }
                setTransactionMemo(t) {
                    return this._inner.setMemo(t), this
                }
                setGenerateRecord(t) {
                    return this._inner.setGeneraterecord(t), this
                }
                validate() {
                    a.runValidation(this, t => {
                        this._inner.hasTransactionid() || t.push("missing ID for transaction"), 2 * this._inner.getMemo().length > 100 && t.push("memo may not be longer than 100 bytes"), this._doValidate(t)
                    })
                }
                build(t) {
                    if (t && "0" === this._inner.getTransactionfee() && this._inner.setTransactionfee(t.maxTransactionFee._toProto()), t && !this._inner.hasTransactionid() && t._getOperatorAccountId()) {
                        const e = new u.TransactionId(t._getOperatorAccountId());
                        this._inner.setTransactionid(e._toProto())
                    }
                    if (this._inner.hasTransactionvalidduration() || this.setTransactionValidDuration(120), !this._node && !t) throw new Error("`setNodeAccountId` must be called if client is not supplied");
                    this._node || (this._node = t._randomNode().id), this._node && !this._inner.hasNodeaccountid() && this.setNodeAccountId(this._node), this.validate();
                    const e = new o.Transaction;
                    return e.setBodybytes(this._inner.serializeBinary()), new s.Transaction(this._node, e, this._inner, this._method)
                }
                execute(t) {
                    return this.build(t).execute(t)
                }
            }
        },
        129: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(218),
                a = r(1771),
                s = r(1772),
                o = r(499);

            function i(t, e) {
                return (n.default.isBigNumber(t) ? t : new n.default(t)).multipliedBy(e._toTinybarCount())
            }
            const c = new n.default(2).pow(63).minus(1),
                u = c.dividedBy(s.HbarUnit.Hbar._toTinybarCount()),
                d = new n.default(-2).pow(63).dividedBy(s.HbarUnit.Hbar._toTinybarCount());
            class Hbar {
                constructor(t) {
                    const e = t instanceof n.default ? t : new n.default(t);
                    if (e.isZero() ? this._tinybar = e : (this._tinybar = e.multipliedBy(s.HbarUnit.Hbar._toTinybarCount()), this._check({
                            allowNegative: !0
                        })), this._unit = s.HbarUnit.Hbar, "number" == typeof t && t >= Math.pow(2, 53)) throw new a.HbarRangeError(this)
                }
                static from(t, e) {
                    const r = t instanceof n.default ? t : new n.default(t),
                        a = new Hbar(0);
                    return a._tinybar = r.multipliedBy(e._toTinybarCount()), a
                }
                static fromTinybar(t) {
                    const e = t instanceof n.default ? t : new n.default(t),
                        r = new Hbar(0);
                    if (r._tinybar = e, "number" == typeof t && t >= Math.pow(2, 53)) throw new a.HbarRangeError(r);
                    return r
                }
                static of (t) {
                    return console.warn("`Hbar.of` is deprecated. Use `new Hbar(amount)` instead."), new Hbar(t)
                }
                static zero() {
                    return console.warn("`Hbar.zero()` is deprecated. If you want to use `Hbar.zero()` for \ncomparisions then use `Hbar.ZERO` static field, otherwise use `new Hbar(0)`"), new Hbar(new n.default(0))
                }
                toString() {
                    return this._unit === s.HbarUnit.Tinybar ? `${this.value()} ${this._unit.toString()}` : `${this.value()} ${this._unit.toString()} (${this._tinybar.toString(10)} tinybar)`
                }
                value() {
                    return this.as(s.HbarUnit.Hbar)
                }
                asTinybar() {
                    return this.as(s.HbarUnit.Tinybar)
                }
                as(t) {
                    return "tinybar" === t.toString() ? this._tinybar : this._tinybar.dividedBy(t._toTinybarCount())
                }
                multipliedBy(t) {
                    return new Hbar(this._tinybar.multipliedBy(t))
                }
                plus(t, e) {
                    return new Hbar((t instanceof Hbar ? this._tinybar.plus(t._tinybar) : this._tinybar.plus(i(t, e))).dividedBy(s.HbarUnit.Hbar._toTinybarCount()))
                }
                minus(t, e) {
                    return new Hbar((t instanceof Hbar ? this._tinybar.minus(t._tinybar) : this._tinybar.minus(i(t, e))).dividedBy(s.HbarUnit.Hbar._toTinybarCount()))
                }
                isEqualTo(t, e) {
                    return t instanceof Hbar ? this._tinybar.isEqualTo(t._tinybar) : this._tinybar.isEqualTo(i(t, e))
                }
                isGreaterThan(t, e) {
                    return t instanceof Hbar ? this._tinybar.isGreaterThan(t._tinybar) : this._tinybar.isGreaterThan(i(t, e))
                }
                isGreaterThanOrEqualTo(t, e) {
                    return t instanceof Hbar ? this._tinybar.isGreaterThanOrEqualTo(t._tinybar) : this._tinybar.isGreaterThanOrEqualTo(i(t, e))
                }
                isLessThan(t, e) {
                    return t instanceof Hbar ? this._tinybar.isLessThan(t._tinybar) : this._tinybar.isLessThan(i(t, e))
                }
                isLessThanOrEqualTo(t, e) {
                    return t instanceof Hbar ? this._tinybar.isLessThanOrEqualTo(t._tinybar) : this._tinybar.isLessThanOrEqualTo(i(t, e))
                }
                comparedTo(t, e) {
                    return t instanceof Hbar ? this._tinybar.comparedTo(t._tinybar) : this._tinybar.comparedTo(i(t, e))
                }
                isZero() {
                    return this._tinybar.isZero()
                }
                negated() {
                    return Hbar.fromTinybar(this._tinybar.negated())
                }
                isNegative() {
                    return this._tinybar.isNegative()
                }
                isPositive() {
                    return this._tinybar.isPositive()
                }
                _check({
                    allowNegative: t
                }) {
                    if (this._tinybar.isNegative() && !t && this._tinybar.isLessThan(c)) throw new a.HbarRangeError(this);
                    if (this._tinybar.isGreaterThan(c)) throw new a.HbarRangeError(this)
                }
                _toProto() {
                    return String(this._tinybar)
                }
                _toProtoValue() {
                    const t = new o.UInt64Value;
                    return t.setValue(this._tinybar.toNumber()), t
                }
            }
            e.Hbar = Hbar, Hbar.MAX = new Hbar(u), Hbar.MIN = new Hbar(d), Hbar.ZERO = new Hbar(0)
        },
        155: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(36),
                a = r(103),
                s = r(341),
                o = r(218);
            class ContractId extends s.PublicKey {
                constructor(t, e, r) {
                    if (super(), "number" == typeof t && null != e && null != r) this.shard = t, this.realm = e, this.contract = r;
                    else {
                        const e = t,
                            r = e instanceof ContractId ? e : a.normalizeEntityId("contract", e);
                        this.shard = r.shard, this.realm = r.realm, this.contract = r.contract
                    }
                }
                static fromString(t) {
                    return new ContractId(t)
                }
                static _fromProto(t) {
                    return new ContractId({
                        shard: t.getShardnum(),
                        realm: t.getRealmnum(),
                        contract: t.getContractnum()
                    })
                }
                toString() {
                    return `${this.shard}.${this.realm}.${this.contract}`
                }
                static fromSolidityAddress(t) {
                    if (40 !== t.length) throw new Error("Invalid hex encoded solidity address length:\n                    expected length 40, got length " + t.length);
                    const e = new o.default(t.slice(0, 8), 16).toNumber(),
                        r = new o.default(t.slice(8, 24), 16).toNumber(),
                        n = new o.default(t.slice(24, 40), 16).toNumber();
                    return new ContractId(e, r, n)
                }
                toSolidityAddress() {
                    const t = new Uint8Array(20),
                        e = new DataView(t, 0, 20);
                    return e.setUint32(0, this.shard), e.setUint32(8, this.realm), e.setUint32(16, this.contract), Buffer.from(t).toString("hex")
                }
                _toProto() {
                    const t = new n.ContractID;
                    return t.setShardnum(this.shard), t.setRealmnum(this.realm), t.setContractnum(this.contract), t
                }
                _toProtoKey() {
                    const t = new n.Key;
                    return t.setContractid(this._toProto()), t
                }
            }
            e.ContractId = ContractId
        },
        165: function(t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, r, n) {
                return new(r || (r = Promise))((function(a, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function i(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(o, i)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const a = r(64),
                s = r(263),
                o = r(1056),
                i = r(1797),
                c = r(103),
                u = r(129),
                d = r(615),
                l = r(91),
                h = r(408);
            e.QueryBuilder = class QueryBuilder {
                constructor() {
                    this._inner = new s.Query, this._maxPaymentAmount = null, this._paymentAmount = null
                }
                setMaxQueryPayment(t) {
                    const e = "number" == typeof t ? u.Hbar.fromTinybar(t) : t;
                    return e._check({
                        allowNegative: !1
                    }), this._maxPaymentAmount = e, this
                }
                setQueryPayment(t) {
                    const e = "number" == typeof t ? u.Hbar.fromTinybar(t) : t;
                    return e._check({
                        allowNegative: !1
                    }), this._paymentAmount = e, this
                }
                setQueryPaymentTransaction(t) {
                    return this._getHeader().setPayment(t._toProto()), this
                }
                getCost(t) {
                    return n(this, void 0, void 0, (function*() {
                        const {
                            CryptoTransferTransaction: e
                        } = yield Promise.resolve().then(() => r(1057));
                        this._localValidate(!1);
                        const n = this._getHeader(),
                            s = n.getResponsetype(),
                            o = n.getPayment();
                        try {
                            const r = t._randomNode();
                            n.setResponsetype(a.ResponseType.COST_ANSWER), n.setPayment((yield(new e).addRecipient(r.id, 0).addSender(t._getOperatorAccountId(), 0).build(t).signWith(t._getOperatorKey(), t._getOperatorSigner()))._toProto());
                            const i = yield t._unaryCall(r.url, this._inner.clone(), this._getMethod()), c = this._mapResponseHeader(i);
                            return new h.Status(c.getNodetransactionprecheckcode())._throwIfError(), u.Hbar.fromTinybar(c.getCost())
                        } finally {
                            n.setResponsetype(s), n.setPayment(o)
                        }
                    }))
                }
                execute(t) {
                    let e = null;
                    return c.timeoutPromise(this._getDefaultExecuteTimeout(), (() => n(this, void 0, void 0, (function*() {
                        let r;
                        if (this._isPaymentRequired()) {
                            if (this._getHeader().hasPayment()) {
                                const e = this._getHeader().getPayment().getBodybytes_asU8(),
                                    n = d.TransactionBody.deserializeBinary(e),
                                    a = l.AccountId._fromProto(n.getNodeaccountid());
                                r = t._getNode(a)
                            } else if (null != this._paymentAmount) r = t._randomNode(), yield this._generatePaymentTransaction(t, r, this._paymentAmount);
                            else if (null != this._maxPaymentAmount || null != t.maxQueryPayment) {
                                r = t._randomNode();
                                const e = null == this._maxPaymentAmount ? t.maxQueryPayment : this._maxPaymentAmount,
                                    n = yield this.getCost(t);
                                if (n.isGreaterThan(e)) throw new i.MaxQueryPaymentExceededError(n, e);
                                yield this._generatePaymentTransaction(t, r, n)
                            }
                        } else r = t._randomNode();
                        this._localValidate();
                        for (let n = 0;; n += 1) {
                            if (n > 0) {
                                const t = Math.floor(500 * Math.random() * (Math.pow(2, n) - 1));
                                yield c.setTimeoutAwaitable(t)
                            }
                            const a = yield t._unaryCall(r.url, this._inner, this._getMethod());
                            if (e = new h.Status(this._mapResponseHeader(a).getNodetransactionprecheckcode()), !this._shouldRetry(e, a)) return e._throwIfError(), this._mapResponse(a)
                        }
                    })))(), t => {
                        t(null == e ? new Error("timed out") : new o.HederaStatusError(e))
                    })
                }
                _toProto() {
                    return this._inner
                }
                _shouldRetry(t, e) {
                    return t.code === h.Status.Busy.code
                }
                _getDefaultExecuteTimeout() {
                    return 1e4
                }
                _isPaymentRequired() {
                    return !0
                }
                _localValidate(t = !0) {
                    c.runValidation(this, e => {
                        t && this._isPaymentRequired() && !this._getHeader().hasPayment() && e.push("one of `.setPayment()` or `.setPaymentAmount()` is required"), this._doLocalValidate(e)
                    })
                }
                _generatePaymentTransaction(t, e, a) {
                    return n(this, void 0, void 0, (function*() {
                        const n = "number" == typeof a ? u.Hbar.fromTinybar(a) : a;
                        n._check({
                            allowNegative: !1
                        });
                        const {
                            CryptoTransferTransaction: s
                        } = yield Promise.resolve().then(() => r(1057)), o = yield(new s).setNodeAccountId(e.id).addRecipient(e.id, n).addSender(t._getOperatorAccountId(), n).setMaxTransactionFee(new u.Hbar(1)).build(t).signWith(t._getOperatorKey(), t._getOperatorSigner());
                        return this.setQueryPaymentTransaction(o), this
                    }))
                }
            }
        },
        1771: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            class HbarRangeError extends Error {
                constructor(t) {
                    super("Hbar amount out of range: " + t.toString()), this.name = "HbarRangeError", this.amount = t
                }
            }
            e.HbarRangeError = HbarRangeError
        },
        1772: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(218);
            class HbarUnit {
                constructor(t) {
                    this._unit = t
                }
                getSymbol() {
                    switch (this._unit) {
                        case "tinybar":
                            return "tℏ";
                        case "microbar":
                            return "μℏ";
                        case "millibar":
                            return "mℏ";
                        case "hbar":
                            return "ℏ";
                        case "kilobar":
                            return "kℏ";
                        case "megabar":
                            return "Mℏ";
                        case "gigabar":
                            return "Gℏ";
                        default:
                            throw new TypeError("HbarUnit was not a valid value")
                    }
                }
                _toTinybarCount() {
                    switch (this._unit) {
                        case "tinybar":
                            return new n.default(1);
                        case "microbar":
                            return new n.default(100);
                        case "millibar":
                            return new n.default(1e5);
                        case "hbar":
                            return new n.default(1e8);
                        case "kilobar":
                            return new n.default(1e8).multipliedBy(1e3);
                        case "megabar":
                            return new n.default(1e8).multipliedBy(1e6);
                        case "gigabar":
                            return new n.default(1e8).multipliedBy(1e9);
                        default:
                            throw new TypeError("HbarUnit was not a valid value")
                    }
                }
                toString() {
                    return this._unit
                }
            }
            e.HbarUnit = HbarUnit, HbarUnit.Tinybar = new HbarUnit("tinybar"), HbarUnit.Microbar = new HbarUnit("microbar"), HbarUnit.Millibar = new HbarUnit("millibar"), HbarUnit.Hbar = new HbarUnit("hbar"), HbarUnit.Kilobar = new HbarUnit("kilobar"), HbarUnit.Megabar = new HbarUnit("megabar"), HbarUnit.Gigabar = new HbarUnit("gigabar")
        },
        1773: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            class KeyMismatchError extends Error {
                constructor(t, e) {
                    super("key mismatch when loading from keystore"), this.name = "KeyMismatchError", this._hmac = t.toString("hex"), this._expectedHmac = e.toString("hex")
                }
            }
            e.KeyMismatchError = KeyMismatchError
        },
        1796: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(165),
                a = r(219),
                s = r(64),
                o = r(129),
                i = r(91),
                c = r(1046);
            class AccountBalanceQuery extends n.QueryBuilder {
                constructor() {
                    super(), this._builder = new c.CryptoGetAccountBalanceQuery, this._builder.setHeader(new s.QueryHeader), this._inner.setCryptogetaccountbalance(this._builder)
                }
                setAccountId(t) {
                    return this._builder.setAccountid(new i.AccountId(t)._toProto()), this
                }
                _doLocalValidate(t) {
                    this._builder.hasAccountid() || t.push("`.setAccountId()` required")
                }
                _getMethod() {
                    return a.CryptoService.cryptoGetBalance
                }
                _getHeader() {
                    return this._builder.getHeader()
                }
                _mapResponseHeader(t) {
                    return t.getCryptogetaccountbalance().getHeader()
                }
                _mapResponse(t) {
                    const e = t.getCryptogetaccountbalance();
                    return o.Hbar.fromTinybar(e.getBalance())
                }
            }
            e.AccountBalanceQuery = AccountBalanceQuery
        },
        1797: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            class MaxQueryPaymentExceededError extends Error {
                constructor(t, e) {
                    super(`query cost of ${t.value()} HBAR exceeds max set on client: ${e.value()} HBAR`), this.name = "MaxQueryPaymentExceededError", this.queryCost = t, this.maxQueryPayment = e
                }
            }
            e.MaxQueryPaymentExceededError = MaxQueryPaymentExceededError
        },
        1798: function(t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, r, n) {
                return new(r || (r = Promise))((function(a, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function i(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(o, i)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const a = r(73),
                s = r(176),
                o = r(615),
                i = r(36),
                c = r(103),
                u = r(28),
                d = r(219),
                l = r(240),
                h = r(264),
                y = r(1799),
                _ = r(91),
                m = r(409),
                T = r(408);
            class Transaction {
                constructor(t, e, r, n) {
                    this._node = t, this._inner = e, this._txnId = c.orThrow(r.getTransactionid()), this._validDurationSeconds = c.orThrow(r.getTransactionvalidduration()).getSeconds(), this._method = n
                }
                static fromBytes(t) {
                    const e = s.Transaction.deserializeBinary(t),
                        r = o.TransactionBody.deserializeBinary(e.getBodybytes_asU8()),
                        n = _.AccountId._fromProto(c.orThrow(r.getNodeaccountid(), "transaction missing node account ID")),
                        a = function(t) {
                            switch (t.getDataCase()) {
                                case o.TransactionBody.DataCase.CONTRACTCALL:
                                    return l.SmartContractService.contractCallMethod;
                                case o.TransactionBody.DataCase.CONTRACTCREATEINSTANCE:
                                    return l.SmartContractService.createContract;
                                case o.TransactionBody.DataCase.CONTRACTUPDATEINSTANCE:
                                    return l.SmartContractService.updateContract;
                                case o.TransactionBody.DataCase.CONTRACTDELETEINSTANCE:
                                    return l.SmartContractService.deleteContract;
                                case o.TransactionBody.DataCase.CRYPTOADDCLAIM:
                                    return d.CryptoService.addClaim;
                                case o.TransactionBody.DataCase.CRYPTOCREATEACCOUNT:
                                    return d.CryptoService.createAccount;
                                case o.TransactionBody.DataCase.CRYPTODELETE:
                                    return d.CryptoService.cryptoDelete;
                                case o.TransactionBody.DataCase.CRYPTODELETECLAIM:
                                    return d.CryptoService.deleteClaim;
                                case o.TransactionBody.DataCase.CRYPTOTRANSFER:
                                    return d.CryptoService.cryptoTransfer;
                                case o.TransactionBody.DataCase.CRYPTOUPDATEACCOUNT:
                                    return d.CryptoService.updateAccount;
                                case o.TransactionBody.DataCase.FILEAPPEND:
                                    return h.FileService.appendContent;
                                case o.TransactionBody.DataCase.FILECREATE:
                                    return h.FileService.createFile;
                                case o.TransactionBody.DataCase.FILEDELETE:
                                    return h.FileService.deleteFile;
                                case o.TransactionBody.DataCase.FILEUPDATE:
                                    return h.FileService.updateFile;
                                case o.TransactionBody.DataCase.SYSTEMDELETE:
                                    return l.SmartContractService.systemDelete;
                                case o.TransactionBody.DataCase.SYSTEMUNDELETE:
                                    return l.SmartContractService.systemUndelete;
                                case o.TransactionBody.DataCase.FREEZE:
                                    return y.FreezeService.freeze;
                                case o.TransactionBody.DataCase.DATA_NOT_SET:
                                    throw new Error("transaction body missing");
                                default:
                                    throw new Error("unsupported body case:" + t.getDataCase().toString())
                            }
                        }(r);
                    return new Transaction(n, e, r, a)
                }
                get id() {
                    return m.TransactionId._fromProto(this._txnId)
                }
                _checkPubKey(t) {
                    if (this._inner.hasSigmap())
                        for (const e of this._inner.getSigmap().getSigpairList())
                            if (t._bytesEqual(e.getPubkeyprefix_asU8())) throw new Error(`transaction ${this._txnId} already signed with public key ${t.toString()}`)
                }
                _addSignature({
                    signature: t,
                    publicKey: e
                }) {
                    const r = new i.SignaturePair;
                    r.setPubkeyprefix(e.toBytes()), r.setEd25519(t);
                    const n = this._inner.getSigmap() || new i.SignatureMap;
                    return n.addSigpair(r), this._inner.setSigmap(n), this
                }
                sign(t) {
                    return this._checkPubKey(t.publicKey), this._addSignature({
                        signature: a.sign(this._inner.getBodybytes_asU8(), t._keyData),
                        publicKey: t.publicKey
                    })
                }
                signWith(t, e) {
                    return n(this, void 0, void 0, (function*() {
                        this._checkPubKey(t);
                        const r = e(this._inner.getBodybytes_asU8()),
                            n = r instanceof Promise ? yield r: r;
                        return this._addSignature({
                            signature: n,
                            publicKey: t
                        }), this
                    }))
                }
                execute(t) {
                    return n(this, void 0, void 0, (function*() {
                        t._getOperatorKey() && t._getOperatorSigner() && (yield this.signWith(t._getOperatorKey(), t._getOperatorSigner()));
                        const e = t._getNode(this._node),
                            r = Date.now() + 1e3 * this._validDurationSeconds;
                        for (let n = 0;; n += 1) {
                            if (n > 0) {
                                const t = Math.floor(500 * Math.random() * (Math.pow(2, n) - 1));
                                if (Date.now() + t > r) throw new Error("timed out waiting to send transaction ID: " + this._txnId.toString());
                                yield c.setTimeoutAwaitable(t)
                            }
                            const a = yield t._unaryCall(e.url, this._inner, this._method), s = new T.Status(a.getNodetransactionprecheckcode());
                            if (!s._isBusy()) return s._throwIfError(), this.id
                        }
                    }))
                }
                getReceipt(t) {
                    return this.id.getReceipt(t)
                }
                getRecord(t) {
                    return this.id.getRecord(t)
                }
                _toProto() {
                    return u.Message.cloneMessage(this._inner)
                }
                toBytes() {
                    return this._inner.serializeBinary()
                }
                toString() {
                    const t = this._toProto().toObject(),
                        e = t.bodybytes instanceof Uint8Array ? Buffer.from(t.bodybytes) : Buffer.from(t.bodybytes, "base64");
                    return t.body = o.TransactionBody.deserializeBinary(e).toObject(), JSON.stringify(t, null, 4)
                }
            }
            e.Transaction = Transaction
        },
        1800: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(165),
                a = r(1052),
                s = r(64),
                o = r(409),
                i = r(1058),
                c = r(219),
                u = r(408);
            class TransactionReceiptQuery extends n.QueryBuilder {
                constructor() {
                    super(), this._builder = new a.TransactionGetReceiptQuery, this._builder.setHeader(new s.QueryHeader), this._inner.setTransactiongetreceipt(this._builder)
                }
                setTransactionId(t) {
                    return this._builder.setTransactionid(new o.TransactionId(t)._toProto()), this
                }
                _doLocalValidate(t) {
                    this._builder.hasTransactionid() || t.push("`.setTransactionId()` required")
                }
                _getMethod() {
                    return c.CryptoService.getTransactionReceipts
                }
                _shouldRetry(t, e) {
                    if (super._shouldRetry(t, e)) return !0;
                    if (t.code === u.Status.Ok.code) {
                        const t = e.getTransactiongetreceipt().getReceipt(),
                            r = new u.Status(t.getStatus());
                        if ([u.Status.Ok.code, u.Status.Busy.code, u.Status.Unknown.code].includes(r.code)) return !0
                    }
                    return !1
                }
                _getDefaultExecuteTimeout() {
                    return 12e4
                }
                _isPaymentRequired() {
                    return !1
                }
                _getHeader() {
                    return this._builder.getHeader()
                }
                _mapResponseHeader(t) {
                    return t.getTransactiongetreceipt().getHeader()
                }
                _mapResponse(t) {
                    const e = t.getTransactiongetreceipt();
                    return i.TransactionReceipt._fromProto(e.getReceipt())
                }
            }
            e.TransactionReceiptQuery = TransactionReceiptQuery
        },
        1801: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(341),
                a = r(36);
            class ThresholdKey extends n.PublicKey {
                constructor(t) {
                    super(), this._keys = [], this._threshold = t
                }
                add(t) {
                    return this._keys.push(t._toProtoKey()), this
                }
                addAll(...t) {
                    return this._keys.push(...t.map(t => t._toProtoKey())), this
                }
                _toProtoKey() {
                    if (0 === this._keys.length) throw new Error("ThresholdKey must have at least one key");
                    if (this._threshold > this._keys.length) throw new Error(`ThresholdKey must have at least as many keys as threshold: ${this._threshold}; # of keys currently: ${this._keys.length}`);
                    const t = new a.KeyList;
                    t.setKeysList(this._keys);
                    const e = new a.ThresholdKey;
                    e.setThreshold(this._threshold), e.setKeys(t);
                    const r = new a.Key;
                    return r.setThresholdkey(e), r
                }
            }
            e.ThresholdKey = ThresholdKey
        },
        1802: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(36);
            e.KeyList = class KeyList {
                constructor() {
                    this._keys = []
                }
                add(t) {
                    return this._keys.push(t._toProtoKey()), this
                }
                addAll(...t) {
                    return this._keys.push(...t.map(t => t._toProtoKey())), this
                }
                _toProtoKey() {
                    const t = new n.KeyList;
                    t.setKeysList(this._keys);
                    const e = new n.Key;
                    return e.setKeylist(t), e
                }
            }
        },
        1803: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(165),
                a = r(1053),
                s = r(64),
                o = r(409),
                i = r(219),
                c = r(618),
                u = r(119);
            class TransactionRecordQuery extends n.QueryBuilder {
                constructor() {
                    super(), this._builder = new a.TransactionGetRecordQuery, this._builder.setHeader(new s.QueryHeader), this._inner.setTransactiongetrecord(this._builder)
                }
                setTransactionId(t) {
                    return this._builder.setTransactionid(new o.TransactionId(t)._toProto()), this
                }
                _doLocalValidate(t) {
                    this._builder.hasTransactionid() || t.push("`.setTransactionId()` required")
                }
                _getHeader() {
                    return this._builder.getHeader()
                }
                _getMethod() {
                    return i.CryptoService.getTxRecordByTxID
                }
                _mapResponseHeader(t) {
                    const e = t.getTransactiongetrecord().getHeader();
                    return null == e ? new u.ResponseHeader : e
                }
                _mapResponse(t) {
                    const e = t.getTransactiongetrecord();
                    return c.TransactionRecord._fromProto(e.getTransactionrecord())
                }
            }
            e.TransactionRecordQuery = TransactionRecordQuery
        },
        265: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(105);

            function a(t) {
                return 1e3 * t.getSeconds() + Math.floor(t.getNanos() / 1e6)
            }
            e.dateToTimestamp = function(t) {
                const e = t instanceof Date ? t.getTime() : t;
                return {
                    seconds: Math.floor(e / 1e3),
                    nanos: Math.floor(e % 1e3 * 1e6)
                }
            }, e.timestampToDate = function(t) {
                return new Date(a(t))
            }, e.timestampToMs = a, e.timestampToProto = function({
                seconds: t,
                nanos: e
            }) {
                const r = new n.Timestamp;
                return r.setSeconds(t), r.setNanos(e), r
            }
        },
        3254: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(73),
                a = r(129),
                s = r(1038),
                o = r(91),
                i = r(1796);
            e.BaseClient = class BaseClient {
                constructor(t, e) {
                    this._nodes = [], this._maxTransactionFee = new a.Hbar(1), this._maxQueryPayment = new a.Hbar(1), this.replaceNodes(t), e && (null != e.privateKey ? this.setOperator(e.account, e.privateKey) : this.setOperatorWith(e.account, e.publicKey, e.signer))
                }
                putNode(t, e) {
                    return this._nodes.push({
                        id: new o.AccountId(t),
                        url: e
                    }), this
                }
                setOperator(t, e) {
                    const r = "string" == typeof e ? s.Ed25519PrivateKey.fromString(e) : e;
                    return this._operatorAccount = new o.AccountId(t), this._operatorPublicKey = r.publicKey, this._operatorSigner = t => n.sign(t, r._keyData), this
                }
                setOperatorWith(t, e, r) {
                    return this._operatorAccount = new o.AccountId(t), this._operatorPublicKey = e, this._operatorSigner = r, this
                }
                replaceNodes(t) {
                    return this._nodes = Array.isArray(t) ? t : Object.entries(t).map(([t, e]) => ({
                        url: t,
                        id: new o.AccountId(e)
                    })), this
                }
                _getOperatorAccountId() {
                    return this._operatorAccount
                }
                _getOperatorSigner() {
                    return this._operatorSigner
                }
                _getOperatorKey() {
                    return this._operatorPublicKey
                }
                get maxTransactionFee() {
                    return this._maxTransactionFee
                }
                get maxQueryPayment() {
                    return this._maxQueryPayment
                }
                setMaxTransactionFee(t) {
                    return this._maxTransactionFee = t, this
                }
                setMaxQueryPayment(t) {
                    return this._maxQueryPayment = t instanceof a.Hbar ? t : a.Hbar.fromTinybar(t), this
                }
                getAccountBalance(t) {
                    return (new i.AccountBalanceQuery).setAccountId(t).execute(this)
                }
                _randomNode() {
                    return this._nodes[Math.floor(Math.random() * this._nodes.length)]
                }
                _getNode(t) {
                    const e = this._nodes.find(e => e.url === t || "object" == typeof t && e.id.account === t.account && e.id.realm === t.realm && e.id.shard === t.shard);
                    if (e) return e;
                    throw new Error("could not find node: " + JSON.stringify(t))
                }
            }
        },
        3255: function(t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, r, n) {
                return new(r || (r = Promise))((function(a, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function i(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(o, i)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const a = r(24),
                s = r(73),
                o = r(614),
                i = r(1773);
            e.createKeystore = function(t, e) {
                return n(this, void 0, void 0, (function*() {
                    const r = 262144,
                        n = a.randomBytes(32),
                        s = yield o.pbkdf2(e, n, r, 32, "sha256"), i = a.randomBytes(16), c = a.createCipheriv("aes-128-ctr", s.slice(0, 16), i), u = Buffer.concat([c.update(t), c.final()]), d = a.createHmac(o.hmacAlgo, s.slice(16)).update(u).digest(), l = {
                            version: 1,
                            crypto: {
                                ciphertext: u.toString("hex"),
                                cipherparams: {
                                    iv: i.toString("hex")
                                },
                                cipher: "aes-128-ctr",
                                kdf: "pbkdf2",
                                kdfparams: {
                                    dkLen: 32,
                                    salt: n.toString("hex"),
                                    c: r,
                                    prf: "hmac-sha256"
                                },
                                mac: d.toString("hex")
                            }
                        };
                    return Buffer.from(JSON.stringify(l))
                }))
            }, e.loadKeystore = function(t, e) {
                return n(this, void 0, void 0, (function*() {
                    const r = JSON.parse(Buffer.from(t).toString());
                    if (1 !== r.version) throw new Error("unsupported keystore version: " + r.version);
                    const {
                        ciphertext: n,
                        cipherparams: {
                            iv: c
                        },
                        cipher: u,
                        kdf: d,
                        kdfparams: {
                            dkLen: l,
                            salt: h,
                            c: y,
                            prf: _
                        },
                        mac: m
                    } = r.crypto;
                    if ("pbkdf2" !== d) throw new Error("unsupported key derivation function: " + d);
                    if ("hmac-sha256" !== _) throw new Error("unsupported key derivation hash function: " + _);
                    const T = Buffer.from(h, "hex"),
                        p = Buffer.from(c, "hex"),
                        f = Buffer.from(n, "hex"),
                        b = yield o.pbkdf2(e, T, y, l, "sha256"), S = Buffer.from(m, "hex"), g = a.createHmac(o.hmacAlgo, b.slice(16)).update(f).digest();
                    if (!S.equals(g)) throw new i.KeyMismatchError(S, g);
                    const I = a.createDecipheriv(u, b.slice(0, 16), p),
                        A = Buffer.concat([I.update(f), I.final()]),
                        {
                            secretKey: C,
                            publicKey: w
                        } = s.sign.keyPair.fromSecretKey(Uint8Array.from(A));
                    return {
                        privateKey: C,
                        publicKey: w
                    }
                }))
            }
        },
        3265: function(t, e, r) {
            "use strict";

            function n(t) {
                return {
                    hbarEquiv: t.getHbarequiv(),
                    centEquiv: t.getCentequiv(),
                    expirationTime: new Date(t.getExpirationtime().getSeconds())
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.exchangeRateToSdk = n, e.exchangeRateSetToSdk = function(t) {
                return {
                    currentRate: n(t.getCurrentrate()),
                    nextRate: n(t.getCurrentrate())
                }
            }
        },
        3266: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(155);
            e.contractLogInfoListToSdk = function(t) {
                return t.map(t => ({
                    contractId: n.ContractId._fromProto(t.getContractid()),
                    bloom: t.getBloom_asU8(),
                    topics: t.getTopicList_asU8(),
                    data: t.getData_asU8()
                }))
            }
        },
        3267: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(91),
                a = r(129);
            e.transferFromProto = function(t) {
                return {
                    accountId: n.AccountId._fromProto(t.getAccountid()),
                    amount: a.Hbar.fromTinybar(t.getAmount())
                }
            }
        },
        3268: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(3269);
            e.AccountCreateTransaction = n.AccountCreateTransaction;
            var a = r(3270);
            e.AccountUpdateTransaction = a.AccountUpdateTransaction;
            var s = r(3271);
            e.AccountDeleteTransaction = s.AccountDeleteTransaction;
            var o = r(3272);
            e.AccountInfoQuery = o.AccountInfoQuery;
            var i = r(1796);
            e.AccountBalanceQuery = i.AccountBalanceQuery;
            var c = r(3273);
            e.AccountRecordsQuery = c.AccountRecordsQuery;
            var u = r(3274);
            e.AccountStakersQuery = u.AccountStakersQuery;
            var d = r(1057);
            e.CryptoTransferTransaction = d.CryptoTransferTransaction;
            var l = r(3275);
            e.ContractCreateTransaction = l.ContractCreateTransaction;
            var h = r(3276);
            e.ContractDeleteTransaction = h.ContractDeleteTransaction;
            var y = r(3277);
            e.ContractExecuteTransaction = y.ContractExecuteTransaction;
            var _ = r(3279);
            e.ContractUpdateTransaction = _.ContractUpdateTransaction;
            var m = r(1059);
            e.ContractFunctionResult = m.ContractFunctionResult;
            var T = r(3280);
            e.FileCreateTransaction = T.FileCreateTransaction;
            var p = r(3281);
            e.FileDeleteTransaction = p.FileDeleteTransaction;
            var f = r(3282);
            e.FileUpdateTransaction = f.FileUpdateTransaction;
            var b = r(3283);
            e.FileAppendTransaction = b.FileAppendTransaction;
            var S = r(3284);
            e.FileInfoQuery = S.FileInfoQuery;
            var g = r(3285);
            e.FileContentsQuery = g.FileContentsQuery;
            var I = r(3286);
            e.ContractCallQuery = I.ContractCallQuery;
            var A = r(3287);
            e.ContractRecordsQuery = A.ContractRecordsQuery;
            var C = r(3288);
            e.ContractInfoQuery = C.ContractInfoQuery;
            var w = r(3289);
            e.ContractBytecodeQuery = w.ContractBytecodeQuery;
            var E = r(1800);
            e.TransactionReceiptQuery = E.TransactionReceiptQuery;
            var P = r(1803);
            e.TransactionRecordQuery = P.TransactionRecordQuery;
            var v = r(3290);
            e.SystemDeleteTransaction = v.SystemDeleteTransaction;
            var R = r(3291);
            e.SystemUndeleteTransaction = R.SystemUndeleteTransaction;
            var N = r(3292);
            e.FreezeTransaction = N.FreezeTransaction;
            var D = r(3293);
            e.GetBySolidityIdQuery = D.GetBySolidityIdQuery;
            var B = r(1798);
            e.Transaction = B.Transaction;
            var x = r(408);
            e.Status = x.Status;
            var O = r(1056);
            e.HederaStatusError = O.HederaStatusError;
            var H = r(1055);
            e.LocalValidationError = H.LocalValidationError;
            var M = r(1039);
            e.BadKeyError = M.BadKeyError;
            var U = r(1771);
            e.HbarRangeError = U.HbarRangeError;
            var F = r(1797);
            e.MaxQueryPaymentExceededError = F.MaxQueryPaymentExceededError;
            var L = r(3294);
            e.HederaError = L.HederaError;
            var K = r(3295);
            e.ValidationError = K.ValidationError;
            var k = r(3296);
            e.TinybarValueError = k.TinybarValueError;
            var Q = r(3297);
            e.MaxPaymentExceededError = Q.MaxPaymentExceededError;
            var V = r(1038);
            e.Ed25519PrivateKey = V.Ed25519PrivateKey;
            var G = r(613);
            e.Ed25519PublicKey = G.Ed25519PublicKey;
            var j = r(1801);
            e.ThresholdKey = j.ThresholdKey;
            var q = r(341);
            e.PublicKey = q.PublicKey;
            var Y = r(1802);
            e.KeyList = Y.KeyList;
            var z = r(3298);
            e.Mnemonic = z.Mnemonic;
            var $ = r(1773);
            e.KeyMismatchError = $.KeyMismatchError;
            var X = r(129);
            e.Hbar = X.Hbar;
            var W = r(1772);
            e.HbarUnit = W.HbarUnit;
            var Z = r(91);
            e.AccountId = Z.AccountId;
            var J = r(155);
            e.ContractId = J.ContractId;
            var tt = r(199);
            e.FileId = tt.FileId;
            var et = r(409);
            e.TransactionId = et.TransactionId;
            var rt = r(1058);
            e.TransactionReceipt = rt.TransactionReceipt;
            var nt = r(618);
            e.TransactionRecord = nt.TransactionRecord;
            var at = r(1060);
            e.ContractFunctionParams = at.ContractFunctionParams;
            var st = r(410);
            e.Time = st.Time;
            var ot = r(3311);
            e.ConsensusTopicCreateTransaction = ot.ConsensusTopicCreateTransaction;
            var it = r(3313);
            e.ConsensusTopicDeleteTransaction = it.ConsensusTopicDeleteTransaction;
            var ct = r(3314);
            e.ConsensusTopicUpdateTransaction = ct.ConsensusTopicUpdateTransaction;
            var ut = r(3315);
            e.ConsensusTopicInfoQuery = ut.ConsensusTopicInfoQuery;
            var dt = r(501);
            e.ConsensusTopicId = dt.ConsensusTopicId;
            var lt = r(3316);
            e.ConsensusSubmitMessageTransaction = lt.ConsensusSubmitMessageTransaction;
            var ht = r(1806);
            e.MirrorConsensusTopicResponse = ht.MirrorConsensusTopicResponse;
            var yt = r(1807);
            e.MirrorSubscriptionHandle = yt.MirrorSubscriptionHandle
        },
        3269: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(1781),
                s = r(103),
                o = r(219),
                i = r(129),
                c = r(218),
                u = r(91);
            class AccountCreateTransaction extends n.TransactionBuilder {
                constructor() {
                    super();
                    const t = new a.CryptoCreateTransactionBody;
                    this._body = t, this._inner.setCryptocreateaccount(t), this.setAutoRenewPeriod(789e4), this.setReceiveRecordThreshold(i.Hbar.MAX), this.setSendRecordThreshold(i.Hbar.MAX)
                }
                setKey(t) {
                    return this._body.setKey(t._toProtoKey()), this
                }
                setAutoRenewPeriod(t) {
                    return this._body.setAutorenewperiod(s.newDuration(t)), this
                }
                setInitialBalance(t) {
                    const e = "number" == typeof t ? i.Hbar.fromTinybar(t) : t;
                    return e._check({
                        allowNegative: !1
                    }), this._body.setInitialbalance(e._toProto()), this
                }
                setReceiveRecordThreshold(t) {
                    const e = "number" == typeof t ? i.Hbar.fromTinybar(t) : t;
                    return e._check({
                        allowNegative: !1
                    }), this._body.setReceiverecordthreshold(e._toProto()), this
                }
                setSendRecordThreshold(t) {
                    const e = "number" == typeof t ? i.Hbar.fromTinybar(t) : t;
                    return e._check({
                        allowNegative: !1
                    }), this._body.setSendrecordthreshold(e._toProto()), this
                }
                setReceiverSignatureRequired(t) {
                    return this._body.setReceiversigrequired(t), this
                }
                setProxyAccountId(t) {
                    return this._body.setProxyaccountid(new u.AccountId(t)._toProto()), this
                }
                get _method() {
                    return o.CryptoService.createAccount
                }
                _doValidate(t) {
                    this._body.hasKey() || t.push("AccountCreateTransaction requires .setKey()"), new c.default(this._body.getInitialbalance()).isNegative() && t.push("AccountCreateTransaction must have a positive setInitialBalance")
                }
            }
            e.AccountCreateTransaction = AccountCreateTransaction
        },
        3270: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(1783),
                s = r(103),
                o = r(219),
                i = r(129),
                c = r(91),
                u = r(265),
                d = r(499);
            class AccountUpdateTransaction extends n.TransactionBuilder {
                constructor() {
                    super();
                    const t = new a.CryptoUpdateTransactionBody;
                    this._body = t, this._inner.setCryptoupdateaccount(t)
                }
                setAccountId(t) {
                    return this._body.setAccountidtoupdate(new c.AccountId(t)._toProto()), this
                }
                setKey(t) {
                    return this._body.setKey(t._toProtoKey()), this
                }
                setExpirationTime(t) {
                    return this._body.setExpirationtime(u.timestampToProto(u.dateToTimestamp(t))), this
                }
                setAutoRenewPeriod(t) {
                    return this._body.setAutorenewperiod(s.newDuration(t)), this
                }
                setProxyAccountId(t) {
                    return this._body.setProxyaccountid(t._toProto()), this
                }
                setPorxyAccount(t) {
                    return console.warn("deprecated: `.setPorxyAccount` was renamed to `.setProxyAccountId`"), this.setProxyAccountId(t)
                }
                setReceiverSignatureRequired(t) {
                    const e = new d.BoolValue;
                    return e.setValue(t), this._body.setReceiversigrequiredwrapper(e), this
                }
                setReceiveRecordThreshold(t) {
                    const e = "number" == typeof t ? i.Hbar.fromTinybar(t) : t;
                    return e._check({
                        allowNegative: !1
                    }), this._body.setReceiverecordthresholdwrapper(e._toProtoValue()), this
                }
                setSendRecordThreshold(t) {
                    const e = "number" == typeof t ? i.Hbar.fromTinybar(t) : t;
                    return e._check({
                        allowNegative: !1
                    }), this._body.setSendrecordthresholdwrapper(e._toProtoValue()), this
                }
                get _method() {
                    return o.CryptoService.updateAccount
                }
                _doValidate(t) {
                    this._body.hasAccountidtoupdate() || t.push("AccountUpdateTransaction requires .setAccountId()")
                }
            }
            e.AccountUpdateTransaction = AccountUpdateTransaction
        },
        3271: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(219),
                s = r(1782),
                o = r(91);
            class AccountDeleteTransaction extends n.TransactionBuilder {
                constructor() {
                    super();
                    const t = new s.CryptoDeleteTransactionBody;
                    this._body = t, this._inner.setCryptodelete(t)
                }
                setDeleteAccountId(t) {
                    return this._body.setDeleteaccountid(new o.AccountId(t)._toProto()), this
                }
                setTransferAccountId(t) {
                    return this._body.setTransferaccountid(new o.AccountId(t)._toProto()), this
                }
                get _method() {
                    return a.CryptoService.cryptoDelete
                }
                _doValidate(t) {
                    this._body.hasDeleteaccountid() || t.push("AccountDeleteTransaction requires .setAccountid()")
                }
            }
            e.AccountDeleteTransaction = AccountDeleteTransaction
        },
        3272: function(t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, r, n) {
                return new(r || (r = Promise))((function(a, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function i(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(o, i)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const a = r(165),
                s = r(1048),
                o = r(219),
                i = r(64),
                c = r(129),
                u = r(91),
                d = r(265),
                l = r(341);
            class AccountInfoQuery extends a.QueryBuilder {
                constructor() {
                    super(), this._builder = new s.CryptoGetInfoQuery, this._builder.setHeader(new i.QueryHeader), this._inner.setCryptogetinfo(this._builder)
                }
                setAccountId(t) {
                    return this._builder.setAccountid(new u.AccountId(t)._toProto()), this
                }
                getCost(t) {
                    const e = Object.create(null, {
                        getCost: {
                            get: () => super.getCost
                        }
                    });
                    return n(this, void 0, void 0, (function*() {
                        const r = c.Hbar.fromTinybar(25),
                            n = yield e.getCost.call(this, t);
                        return n.isGreaterThan(r) ? n : r
                    }))
                }
                _doLocalValidate(t) {
                    this._builder.hasAccountid() || t.push("`.setAccountId()` required")
                }
                _getMethod() {
                    return o.CryptoService.getAccountInfo
                }
                _getHeader() {
                    return this._builder.getHeader()
                }
                _mapResponseHeader(t) {
                    return t.getCryptogetinfo().getHeader()
                }
                _mapResponse(t) {
                    const e = t.getCryptogetinfo().getAccountinfo(),
                        r = c.Hbar.fromTinybar(e.getGeneratesendrecordthreshold()),
                        n = c.Hbar.fromTinybar(e.getGeneratereceiverecordthreshold());
                    return {
                        accountId: u.AccountId._fromProto(e.getAccountid()),
                        contractAccountId: e.getContractaccountid(),
                        isDeleted: e.getDeleted(),
                        key: l._fromProtoKey(e.getKey()),
                        balance: c.Hbar.fromTinybar(e.getBalance()),
                        generateSendRecordThreshold: r,
                        generateReceiveRecordThreshold: n,
                        isReceiverSignatureRequired: e.getReceiversigrequired(),
                        expirationTime: new Date(d.timestampToMs(e.getExpirationtime())),
                        autoRenewPeriod: e.getAutorenewperiod().getSeconds(),
                        proxyAccountId: e.hasProxyaccountid() ? u.AccountId._fromProto(e.getProxyaccountid()) : null,
                        proxyReceived: c.Hbar.fromTinybar(e.getProxyreceived())
                    }
                }
            }
            e.AccountInfoQuery = AccountInfoQuery
        },
        3273: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(165),
                a = r(219),
                s = r(64),
                o = r(91),
                i = r(1047),
                c = r(618);
            class AccountRecordsQuery extends n.QueryBuilder {
                constructor() {
                    super(), this._builder = new i.CryptoGetAccountRecordsQuery, this._builder.setHeader(new s.QueryHeader), this._inner.setCryptogetaccountrecords(this._builder)
                }
                setAccountId(t) {
                    return this._builder.setAccountid(new o.AccountId(t)._toProto()), this
                }
                _doLocalValidate(t) {
                    this._builder.hasAccountid() || t.push("`.setAccountId()` required")
                }
                _getMethod() {
                    return a.CryptoService.getAccountRecords
                }
                _getHeader() {
                    return this._builder.getHeader()
                }
                _mapResponseHeader(t) {
                    return t.getCryptogetaccountrecords().getHeader()
                }
                _mapResponse(t) {
                    return t.getCryptogetaccountrecords().getRecordsList().map(c.TransactionRecord._fromProto)
                }
            }
            e.AccountRecordsQuery = AccountRecordsQuery
        },
        3274: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(165),
                a = r(219),
                s = r(64),
                o = r(91),
                i = r(1049),
                c = r(129);
            class AccountStakersQuery extends n.QueryBuilder {
                constructor() {
                    super(), this._builder = new i.CryptoGetStakersQuery, this._builder.setHeader(new s.QueryHeader), this._inner.setCryptogetproxystakers(this._builder)
                }
                setAccountId(t) {
                    return this._builder.setAccountid(new o.AccountId(t)._toProto()), this
                }
                _doLocalValidate(t) {
                    this._builder.hasAccountid() || t.push("`.setAccountId()` required")
                }
                _getMethod() {
                    return a.CryptoService.getStakersByAccountID
                }
                _getHeader() {
                    return this._builder.getHeader()
                }
                _mapResponseHeader(t) {
                    return t.getCryptogetproxystakers().getHeader()
                }
                _mapResponse(t) {
                    return t.getCryptogetproxystakers().getStakers().getProxystakerList().map(t => ({
                        accountId: o.AccountId._fromProto(t.getAccountid()),
                        amount: c.Hbar.fromTinybar(t.getAmount())
                    }))
                }
            }
            e.AccountStakersQuery = AccountStakersQuery
        },
        3275: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(1779),
                s = r(103),
                o = r(240),
                i = r(129),
                c = r(199),
                u = r(91);
            class ContractCreateTransaction extends n.TransactionBuilder {
                constructor() {
                    super(), this._body = new a.ContractCreateTransactionBody, this._inner.setContractcreateinstance(this._body), this.setAutoRenewPeriod(789e4)
                }
                setBytecodeFileId(t) {
                    return this._body.setFileid(new c.FileId(t)._toProto()), this
                }
                setAdminKey(t) {
                    return this._body.setAdminkey(t._toProtoKey()), this
                }
                setGas(t) {
                    return this._body.setGas(String(t)), this
                }
                setInitialBalance(t) {
                    const e = "number" == typeof t ? i.Hbar.fromTinybar(t) : t;
                    return e._check({
                        allowNegative: !1
                    }), this._body.setInitialbalance(e._toProto()), this
                }
                setProxyAccountId(t) {
                    return this._body.setProxyaccountid(new u.AccountId(t)._toProto()), this
                }
                setAutoRenewPeriod(t) {
                    return this._body.setAutorenewperiod(s.newDuration(t)), this
                }
                setConstructorParams(t) {
                    return this._body.setConstructorparameters(t._build(null)), this
                }
                setContractMemo(t) {
                    return this._body.setMemo(t), this
                }
                _doValidate(t) {
                    this._body.hasFileid() || t.push(".setBytecodeFile() required")
                }
                get _method() {
                    return o.SmartContractService.createContract
                }
            }
            e.ContractCreateTransaction = ContractCreateTransaction
        },
        3276: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(240),
                s = r(1788),
                o = r(155);
            class ContractDeleteTransaction extends n.TransactionBuilder {
                constructor() {
                    super(), this._body = new s.ContractDeleteTransactionBody, this._inner.setContractdeleteinstance(this._body)
                }
                setContractId(t) {
                    return this._body.setContractid(new o.ContractId(t)._toProto()), this
                }
                _doValidate(t) {
                    this._body.hasContractid() || t.push(".setContractId() required")
                }
                get _method() {
                    return a.SmartContractService.deleteContract
                }
            }
            e.ContractDeleteTransaction = ContractDeleteTransaction
        },
        3277: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(240),
                s = r(1778),
                o = r(155),
                i = r(1060),
                c = r(129);
            class ContractExecuteTransaction extends n.TransactionBuilder {
                constructor() {
                    super(), this._body = new s.ContractCallTransactionBody, this._inner.setContractcall(this._body)
                }
                setGas(t) {
                    return this._body.setGas(String(t)), this
                }
                setPayableAmount(t) {
                    const e = "number" == typeof t ? c.Hbar.fromTinybar(t) : t;
                    return e._check({
                        allowNegative: !1
                    }), this._body.setAmount(e._toProto()), this
                }
                setFunction(t, e) {
                    return this._body.setFunctionparameters((null != e ? e : new i.ContractFunctionParams)._build(t)), this
                }
                setContractId(t) {
                    return this._body.setContractid(new o.ContractId(t)._toProto()), this
                }
                _doValidate(t) {
                    this._body.hasContractid() || t.push(".setContractId() required")
                }
                get _method() {
                    return a.SmartContractService.contractCallMethod
                }
            }
            e.ContractExecuteTransaction = ContractExecuteTransaction
        },
        3278: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(465);
            var a;
            ! function(t) {
                t[t.uint8 = 0] = "uint8", t[t.int8 = 1] = "int8", t[t.uint16 = 2] = "uint16", t[t.int16 = 3] = "int16", t[t.uint32 = 4] = "uint32", t[t.int32 = 5] = "int32", t[t.uint64 = 6] = "uint64", t[t.int64 = 7] = "int64", t[t.uint256 = 8] = "uint256", t[t.int256 = 9] = "int256", t[t.string = 10] = "string", t[t.bool = 11] = "bool", t[t.bytes = 12] = "bytes", t[t.bytes32 = 13] = "bytes32", t[t.address = 14] = "address", t[t.func = 15] = "func"
            }(a = e.ArgumentType || (e.ArgumentType = {}));
            e.ContractFunctionSelector = class ContractFunctionSelector {
                constructor(t = null) {
                    this._name = null, this._params = "", this._paramTypes = [], null != t && (this._name = t)
                }
                addString() {
                    return this._addParam({
                        ty: a.string,
                        array: !1
                    })
                }
                addStringArray() {
                    return this._addParam({
                        ty: a.string,
                        array: !0
                    })
                }
                addBytes() {
                    return this._addParam({
                        ty: a.bytes,
                        array: !1
                    })
                }
                addBytes32() {
                    return this._addParam({
                        ty: a.bytes32,
                        array: !1
                    })
                }
                addBytesArray() {
                    return this._addParam({
                        ty: a.bytes,
                        array: !0
                    })
                }
                addBytes32Array() {
                    return this._addParam({
                        ty: a.bytes32,
                        array: !0
                    })
                }
                addInt8() {
                    return this._addParam({
                        ty: a.int8,
                        array: !1
                    })
                }
                addInt32() {
                    return this._addParam({
                        ty: a.int32,
                        array: !1
                    })
                }
                addInt64() {
                    return this._addParam({
                        ty: a.int64,
                        array: !1
                    })
                }
                addInt256() {
                    return this._addParam({
                        ty: a.int256,
                        array: !1
                    })
                }
                addInt8Array() {
                    return this._addParam({
                        ty: a.int8,
                        array: !0
                    })
                }
                addInt32Array() {
                    return this._addParam({
                        ty: a.int32,
                        array: !0
                    })
                }
                addInt64Array() {
                    return this._addParam({
                        ty: a.int64,
                        array: !0
                    })
                }
                addInt256Array() {
                    return this._addParam({
                        ty: a.int256,
                        array: !0
                    })
                }
                addUint8() {
                    return this._addParam({
                        ty: a.uint8,
                        array: !1
                    })
                }
                addUint32() {
                    return this._addParam({
                        ty: a.uint32,
                        array: !1
                    })
                }
                addUint64() {
                    return this._addParam({
                        ty: a.uint64,
                        array: !1
                    })
                }
                addUint256() {
                    return this._addParam({
                        ty: a.uint256,
                        array: !1
                    })
                }
                addUint8Array() {
                    return this._addParam({
                        ty: a.uint8,
                        array: !0
                    })
                }
                addUint32Array() {
                    return this._addParam({
                        ty: a.uint32,
                        array: !0
                    })
                }
                addUint64Array() {
                    return this._addParam({
                        ty: a.uint64,
                        array: !0
                    })
                }
                addUint256Array() {
                    return this._addParam({
                        ty: a.uint256,
                        array: !0
                    })
                }
                addBool() {
                    return this._addParam({
                        ty: a.bool,
                        array: !1
                    })
                }
                addAddress() {
                    return this._addParam({
                        ty: a.address,
                        array: !1
                    })
                }
                addAddressArray() {
                    return this._addParam({
                        ty: a.address,
                        array: !0
                    })
                }
                addFunction() {
                    return this._addParam({
                        ty: a.func,
                        array: !1
                    })
                }
                _addParam(t) {
                    return this._paramTypes.length > 0 && (this._params += ","), this._params += function(t) {
                        let e = "";
                        switch (t.ty) {
                            case a.uint8:
                                e = "uint8";
                                break;
                            case a.int8:
                                e = "int8";
                                break;
                            case a.uint16:
                                e = "uint16";
                                break;
                            case a.int16:
                                e = "int16";
                                break;
                            case a.uint32:
                                e = "uint32";
                                break;
                            case a.int32:
                                e = "int32";
                                break;
                            case a.uint64:
                                e = "uint64";
                                break;
                            case a.int64:
                                e = "int64";
                                break;
                            case a.uint256:
                                e = "uint256";
                                break;
                            case a.int256:
                                e = "int256";
                                break;
                            case a.string:
                                e = "string";
                                break;
                            case a.bool:
                                e = "bool";
                                break;
                            case a.bytes:
                                e = "bytes";
                                break;
                            case a.bytes32:
                                e = "bytes32";
                                break;
                            case a.address:
                                e = "address";
                                break;
                            case a.func:
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
                    return new Uint8Array(n.keccak256.arrayBuffer(this.toString()).slice(0, 4))
                }
                toString() {
                    return `${this._name}(${this._params})`
                }
            }
        },
        3279: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(240),
                s = r(1780),
                o = r(103),
                i = r(155),
                c = r(91),
                u = r(199),
                d = r(265);
            class ContractUpdateTransaction extends n.TransactionBuilder {
                constructor() {
                    super(), this._body = new s.ContractUpdateTransactionBody, this._inner.setContractupdateinstance(this._body)
                }
                setContractId(t) {
                    return this._body.setContractid(new i.ContractId(t)._toProto()), this
                }
                setAdminKey(t) {
                    return this._body.setAdminkey(t._toProtoKey()), this
                }
                setProxyAccountId(t) {
                    return this._body.setProxyaccountid(new c.AccountId(t)._toProto()), this
                }
                setBytecodeFileId(t) {
                    return this._body.setFileid(new u.FileId(t)._toProto()), this
                }
                setAutoRenewPeriod(t) {
                    return this._body.setAutorenewperiod(o.newDuration(t)), this
                }
                setExpirationTime(t) {
                    return this._body.setExpirationtime(d.timestampToProto(d.dateToTimestamp(t))), this
                }
                setContractMemo(t) {
                    return this._body.setMemo(t), this
                }
                _doValidate(t) {
                    this._body.hasContractid() || t.push(".setContractId() required")
                }
                get _method() {
                    return a.SmartContractService.updateContract
                }
            }
            e.ContractUpdateTransaction = ContractUpdateTransaction
        },
        3286: function(t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, r, n) {
                return new(r || (r = Promise))((function(a, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function i(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(o, i)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const a = r(165),
                s = r(64),
                o = r(240),
                i = r(155),
                c = r(1059),
                u = r(500),
                d = r(1060);
            class ContractCallQuery extends a.QueryBuilder {
                constructor() {
                    super(), this._builder = new u.ContractCallLocalQuery, this._builder.setHeader(new s.QueryHeader), this._inner.setContractcalllocal(this._builder)
                }
                setContractId(t) {
                    return this._builder.setContractid(new i.ContractId(t)._toProto()), this
                }
                setFunction(t, e) {
                    return this._builder.setFunctionparameters((null != e ? e : new d.ContractFunctionParams)._build(t)), this
                }
                setGas(t) {
                    return this._builder.setGas(t), this
                }
                setMaxResultSize(t) {
                    return this._builder.setMaxresultsize(t), this
                }
                getCost(t) {
                    const e = Object.create(null, {
                        getCost: {
                            get: () => super.getCost
                        }
                    });
                    return n(this, void 0, void 0, (function*() {
                        return (yield e.getCost.call(this, t)).multipliedBy(1.1)
                    }))
                }
                _doLocalValidate(t) {
                    this._builder.hasContractid() || t.push(".setContractId() required")
                }
                _getMethod() {
                    return o.SmartContractService.contractCallLocalMethod
                }
                _getHeader() {
                    return this._builder.getHeader()
                }
                _mapResponseHeader(t) {
                    return t.getContractcalllocal().getHeader()
                }
                _mapResponse(t) {
                    return new c.ContractFunctionResult(t.getContractcalllocal().getFunctionresult())
                }
            }
            e.ContractCallQuery = ContractCallQuery
        },
        3287: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(165),
                a = r(64),
                s = r(240),
                o = r(618),
                i = r(155),
                c = r(1045);
            class ContractRecordsQuery extends n.QueryBuilder {
                constructor() {
                    super(), this._builder = new c.ContractGetRecordsQuery, this._builder.setHeader(new a.QueryHeader), this._inner.setContractgetrecords(this._builder)
                }
                setContractId(t) {
                    return this._builder.setContractid(new i.ContractId(t)._toProto()), this
                }
                _doLocalValidate(t) {
                    this._builder.hasContractid() || t.push(".setContractId() required")
                }
                _getMethod() {
                    return s.SmartContractService.getTxRecordByContractID
                }
                _getHeader() {
                    return this._builder.getHeader()
                }
                _mapResponseHeader(t) {
                    return t.getContractgetrecordsresponse().getHeader()
                }
                _mapResponse(t) {
                    return t.getContractgetrecordsresponse().getRecordsList().map(o.TransactionRecord._fromProto)
                }
            }
            e.ContractRecordsQuery = ContractRecordsQuery
        },
        3288: function(t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, r, n) {
                return new(r || (r = Promise))((function(a, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function i(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(o, i)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const a = r(165),
                s = r(1044),
                o = r(64),
                i = r(240),
                c = r(155),
                u = r(91),
                d = r(265),
                l = r(341),
                h = r(129);
            class ContractInfoQuery extends a.QueryBuilder {
                constructor() {
                    super(), this._builder = new s.ContractGetInfoQuery, this._builder.setHeader(new o.QueryHeader), this._inner.setContractgetinfo(this._builder)
                }
                setContractId(t) {
                    return this._builder.setContractid(new c.ContractId(t)._toProto()), this
                }
                getCost(t) {
                    const e = Object.create(null, {
                        getCost: {
                            get: () => super.getCost
                        }
                    });
                    return n(this, void 0, void 0, (function*() {
                        const r = h.Hbar.fromTinybar(25),
                            n = yield e.getCost.call(this, t);
                        return n.isGreaterThan(r) ? n : r
                    }))
                }
                _doLocalValidate(t) {
                    this._builder.hasContractid() || t.push(".setContractId() required")
                }
                _getMethod() {
                    return i.SmartContractService.getContractInfo
                }
                _getHeader() {
                    return this._builder.getHeader()
                }
                _mapResponseHeader(t) {
                    return t.getContractgetinfo().getHeader()
                }
                _mapResponse(t) {
                    const e = t.getContractgetinfo().getContractinfo();
                    return {
                        contractId: c.ContractId._fromProto(e.getContractid()),
                        accountId: u.AccountId._fromProto(e.getAccountid()),
                        contractAccountId: e.getContractaccountid(),
                        adminKey: e.hasAdminkey() ? l._fromProtoKey(e.getAdminkey()) : null,
                        expirationTime: d.timestampToDate(e.getExpirationtime()),
                        autoRenewPeriod: e.getAutorenewperiod().getSeconds(),
                        storage: e.getStorage(),
                        contractMemo: e.getMemo()
                    }
                }
            }
            e.ContractInfoQuery = ContractInfoQuery
        },
        3289: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(165),
                a = r(64),
                s = r(240),
                o = r(1043),
                i = r(155);
            class ContractBytecodeQuery extends n.QueryBuilder {
                constructor() {
                    super(), this._builder = new o.ContractGetBytecodeQuery, this._builder.setHeader(new a.QueryHeader), this._inner.setContractgetbytecode(this._builder)
                }
                setContractId(t) {
                    return this._builder.setContractid(new i.ContractId(t)._toProto()), this
                }
                _doLocalValidate(t) {
                    this._builder.hasContractid() || t.push(".setContractId() required")
                }
                _getMethod() {
                    return s.SmartContractService.ContractGetBytecode
                }
                _getHeader() {
                    return this._builder.getHeader()
                }
                _mapResponseHeader(t) {
                    return t.getContractgetbytecoderesponse().getHeader()
                }
                _mapResponse(t) {
                    return t.getContractgetbytecoderesponse().getBytecode_asU8()
                }
            }
            e.ContractBytecodeQuery = ContractBytecodeQuery
        },
        3290: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(1775),
                s = r(265),
                o = r(199),
                i = r(155),
                c = r(264),
                u = r(103);
            class SystemDeleteTransaction extends n.TransactionBuilder {
                constructor() {
                    super(), this._body = new a.SystemDeleteTransactionBody, this.setExpirationTime(Date.now() + 789e7), this._inner.setSystemdelete(this._body)
                }
                setExpirationTime(t) {
                    return this._body.setExpirationtime(s.timestampToProto(s.dateToTimestamp(t))), this
                }
                setId(t) {
                    console.warn("`.setId` is deprecated. Use `.setFileId` or `.setContractId` instead");
                    try {
                        const e = u.normalizeEntityId("file", t);
                        this._body.setFileid(new o.FileId(e)._toProto())
                    } catch (e) {
                        const r = u.normalizeEntityId("contract", t);
                        this._body.setContractid(new i.ContractId(r)._toProto())
                    }
                    return this
                }
                setFileId(t) {
                    return this._body.setFileid(new o.FileId(t)._toProto()), this
                }
                setContractId(t) {
                    return this._body.setContractid(new i.ContractId(t)._toProto()), this
                }
                _doValidate(t) {
                    null != !this._body.hasContractid() || this._body.hasFileid() || t.push("SystemDelete must have an id set. Use `.setFileId()` or `.setContractId()")
                }
                get _method() {
                    return c.FileService.systemDelete
                }
            }
            e.SystemDeleteTransaction = SystemDeleteTransaction
        },
        3291: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(199),
                s = r(155),
                o = r(264),
                i = r(1776),
                c = r(103);
            class SystemUndeleteTransaction extends n.TransactionBuilder {
                constructor() {
                    super(), this._body = new i.SystemUndeleteTransactionBody, this._inner.setSystemundelete(this._body)
                }
                setId(t) {
                    console.warn("`.setId` is deprecated. Use `.setFileId` or `.setContractId` instead");
                    try {
                        const e = c.normalizeEntityId("file", t);
                        this._body.setFileid(new a.FileId(e)._toProto())
                    } catch (e) {
                        const r = c.normalizeEntityId("contract", t);
                        this._body.setContractid(new s.ContractId(r)._toProto())
                    }
                    return this
                }
                setFileId(t) {
                    return this._body.setFileid(new a.FileId(t)._toProto()), this
                }
                setContractId(t) {
                    return this._body.setContractid(new s.ContractId(t)._toProto()), this
                }
                _doValidate(t) {
                    null != !this._body.hasContractid() || this._body.hasFileid() || t.push("SystemDelete must have an id set. Use `.setFileId()` or `.setContractId()")
                }
                get _method() {
                    return o.FileService.systemDelete
                }
            }
            e.SystemUndeleteTransaction = SystemUndeleteTransaction
        },
        3292: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(1777),
                s = r(1799);
            class FreezeTransaction extends n.TransactionBuilder {
                constructor() {
                    super(), this._body = new a.FreezeTransactionBody, this._inner.setFreeze(this._body)
                }
                setStartTime(t, e) {
                    let r, n;
                    return "number" == typeof t && null != e ? (r = t, n = e) : (console.warn("passing `Date` is deprecated; pass the `hour` and `minute` as separate parameters"), r = t.getHours(), n = t.getMinutes()), this._body.setStarthour(r), this._body.setStartmin(n), this
                }
                setEndTime(t, e) {
                    let r, n;
                    return "number" == typeof t && null != e ? (r = t, n = e) : (console.warn("passing `Date` is deprecated; pass the `hour` and `minute` as separate parameters"), r = t.getHours(), n = t.getMinutes()), this._body.setEndhour(r), this._body.setEndmin(n), this
                }
                _doValidate() {}
                get _method() {
                    return s.FreezeService.freeze
                }
            }
            e.FreezeTransaction = FreezeTransaction
        },
        3293: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(165),
                a = r(64),
                s = r(199),
                o = r(155),
                i = r(91),
                c = r(1042),
                u = r(240);
            class GetBySolidityIdQuery extends n.QueryBuilder {
                constructor() {
                    super(), this._builder = new c.GetBySolidityIDQuery, this._builder.setHeader(new a.QueryHeader), this._inner.setGetbysolidityid(this._builder)
                }
                setSolidityId(t) {
                    return this._builder.setSolidityid(t), this
                }
                _doLocalValidate() {}
                _getHeader() {
                    return this._builder.getHeader()
                }
                _getMethod() {
                    return u.SmartContractService.getBySolidityID
                }
                _mapResponseHeader(t) {
                    return t.getGetbysolidityid().getHeader()
                }
                _mapResponse(t) {
                    const e = t.getGetbysolidityid();
                    if (e.hasAccountid()) return {
                        type: "ACCOUNT",
                        accountId: i.AccountId._fromProto(e.getAccountid())
                    };
                    if (e.hasContractid()) return {
                        type: "CONTRACT",
                        contractId: o.ContractId._fromProto(e.getContractid())
                    };
                    if (e.hasFileid()) return {
                        type: "FILE",
                        fileId: s.FileId._fromProto(e.getFileid())
                    };
                    throw new Error("unreachable")
                }
            }
            e.GetBySolidityIdQuery = GetBySolidityIdQuery
        },
        3294: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(408);
            class HederaError extends Error {
                constructor(t) {
                    console.warn("`HederaError` has been renamed to `HederaStatusError`");
                    const e = new n.Status(t).toString();
                    super(`Hedera returned response code: ${e} (${t})`), this.name = "HederaError", this.code = t, this.codeName = e
                }
            }
            e.HederaError = HederaError
        },
        3295: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            class ValidationError extends Error {
                constructor(t, e) {
                    console.warn("`ValidationError` has been renamed to `LocalValidationError`"), super(`${t} failed validation:\n${e.join("\n")}`), this.name = "ValidationError"
                }
            }
            e.ValidationError = ValidationError
        },
        3296: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(218),
                a = r(129);
            class TinybarValueError extends Error {
                constructor(t, e) {
                    let r;
                    console.warn("`TinybarValueError` has been renamed to `HbarRangeError`"), r = e instanceof a.Hbar ? e.asTinybar() : e instanceof n.default ? e : new n.default(e), super(`${t}: ${r.toString()}`), this.name = "TinybarValueError", this.amount = r
                }
            }
            e.TinybarValueError = TinybarValueError
        },
        3297: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            class MaxPaymentExceededError extends Error {
                constructor(t, e) {
                    console.warn("`MaxPaymentExceededError` has been renamed to `MaxQueryPaymentExceededError`"), super(`query cost of ${t.value()} HBAR exceeds max set on client: ${e.value()} HBAR`), this.name = "MaxPaymentExceededError", this.queryCost = t
                }
            }
            e.MaxPaymentExceededError = MaxPaymentExceededError
        },
        3298: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(555),
                a = r(1038);
            class Mnemonic {
                constructor(t) {
                    this.words = t
                }
                toPrivateKey(t) {
                    return a.Ed25519PrivateKey.fromMnemonic(this, t)
                }
                static generate() {
                    return new Mnemonic(n.generateMnemonic(256).split(" "))
                }
                static fromString(t) {
                    return new Mnemonic(t.split(" "))
                }
                toString() {
                    return this.words.join(" ")
                }
            }
            e.Mnemonic = Mnemonic
        },
        3311: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(1789),
                s = r(502),
                o = r(103),
                i = r(91);
            class ConsensusTopicCreateTransaction extends n.TransactionBuilder {
                constructor() {
                    super();
                    const t = new a.ConsensusCreateTopicTransactionBody;
                    this._body = t, this._inner.setConsensuscreatetopic(t), this.setAutoRenewPeriod(789e4)
                }
                setAdminKey(t) {
                    return this._body.setAdminkey(t._toProtoKey()), this
                }
                setSubmitKey(t) {
                    return this._body.setSubmitkey(t._toProtoKey()), this
                }
                setValidStart(t) {
                    return this._body.setValidstarttime(t._toProto()), this
                }
                setExpirationTime(t) {
                    return this._body.setExpirationtime(t._toProto()), this
                }
                setTopicMemo(t) {
                    return this._body.setMemo(t), this
                }
                setAutoRenewPeriod(t) {
                    return this._body.setAutorenewperiod(o.newDuration(t)), this
                }
                setAutoRenewAccount(t) {
                    return this._body.setAutorenewaccount(new i.AccountId(t)._toProto()), this
                }
                get _method() {
                    return s.ConsensusService.createTopic
                }
                _doValidate(t) {}
            }
            e.ConsensusTopicCreateTransaction = ConsensusTopicCreateTransaction
        },
        3313: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(1791),
                s = r(502),
                o = r(501);
            class ConsensusTopicDeleteTransaction extends n.TransactionBuilder {
                constructor() {
                    super();
                    const t = new a.ConsensusDeleteTopicTransactionBody;
                    this._body = t, this._inner.setConsensusdeletetopic(t)
                }
                setTopicId(t) {
                    return this._body.setTopicid(new o.ConsensusTopicId(t)._toProto()), this
                }
                get _method() {
                    return s.ConsensusService.deleteTopic
                }
                _doValidate(t) {}
            }
            e.ConsensusTopicDeleteTransaction = ConsensusTopicDeleteTransaction
        },
        3314: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(1790),
                s = r(502),
                o = r(103),
                i = r(91),
                c = r(501),
                u = r(499);
            class ConsensusTopicUpdateTransaction extends n.TransactionBuilder {
                constructor() {
                    super();
                    const t = new a.ConsensusUpdateTopicTransactionBody;
                    this._body = t, this._inner.setConsensusupdatetopic(t)
                }
                setTopicId(t) {
                    return this._body.setTopicid(new c.ConsensusTopicId(t)._toProto()), this
                }
                setAdminKey(t) {
                    return this._body.setAdminkey(t._toProtoKey()), this
                }
                setSubmitKey(t) {
                    return this._body.setSubmitkey(t._toProtoKey()), this
                }
                setExpirationTime(t) {
                    return this._body.setExpirationtime(t._toProto()), this
                }
                setTopicMemo(t) {
                    const e = new u.StringValue;
                    return e.setValue(t), this._body.setMemo(e), this
                }
                setAutoRenewPeriod(t) {
                    return this._body.setAutorenewperiod(o.newDuration(t)), this
                }
                setAutoRenewAccount(t) {
                    return this._body.setAutorenewaccount(new i.AccountId(t)._toProto()), this
                }
                clearTopicMemo() {
                    return this._body.clearMemo(), this
                }
                clearAdminKey() {
                    return this._body.clearAdminkey(), this
                }
                clearSubmitKey() {
                    return this._body.clearSubmitkey(), this
                }
                clearAutoRenewAccount() {
                    return this._body.clearAutorenewaccount(), this
                }
                get _method() {
                    return s.ConsensusService.updateTopic
                }
                _doValidate(t) {}
            }
            e.ConsensusTopicUpdateTransaction = ConsensusTopicUpdateTransaction
        },
        3315: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(165),
                a = r(64),
                s = r(502),
                o = r(1054),
                i = r(410),
                c = r(341),
                u = r(91);
            class ConsensusTopicInfoQuery extends n.QueryBuilder {
                constructor() {
                    super(), this._builder = new o.ConsensusGetTopicInfoQuery, this._builder.setHeader(new a.QueryHeader), this._inner.setConsensusgettopicinfo(this._builder)
                }
                setTopicId(t) {
                    return this._builder.setTopicid(t._toProto()), this
                }
                _doLocalValidate(t) {
                    this._builder.hasTopicid() || t.push(".setTopicId() required")
                }
                _getMethod() {
                    return s.ConsensusService.getTopicInfo
                }
                _getHeader() {
                    return this._builder.getHeader()
                }
                _mapResponseHeader(t) {
                    return t.getConsensusgettopicinfo().getHeader()
                }
                _mapResponse(t) {
                    const e = t.getConsensusgettopicinfo().getTopicinfo();
                    return {
                        topicMemo: e.getMemo(),
                        runningHash: e.getRunninghash_asU8(),
                        sequenceNumber: e.getSequencenumber(),
                        expirationTime: i.Time._fromProto(e.getExpirationtime()),
                        adminKey: e.hasAdminkey() ? c._fromProtoKey(e.getAdminkey()) : null,
                        submitKey: e.hasSubmitkey() ? c._fromProtoKey(e.getSubmitkey()) : null,
                        autoRenewPeriod: e.getAutorenewperiod().getSeconds(),
                        autoRenewAccount: e.hasAutorenewaccount() ? u.AccountId._fromProto(e.getAutorenewaccount()) : null
                    }
                }
            }
            e.ConsensusTopicInfoQuery = ConsensusTopicInfoQuery
        },
        3316: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(111),
                a = r(1792),
                s = r(502),
                o = r(501),
                i = r(103);
            class ConsensusSubmitMessageTransaction extends n.TransactionBuilder {
                constructor() {
                    super();
                    const t = new a.ConsensusSubmitMessageTransactionBody;
                    this._body = t, this._inner.setConsensussubmitmessage(t)
                }
                setTopicId(t) {
                    return this._body.setTopicid(new o.ConsensusTopicId(t)._toProto()), this
                }
                setMessage(t) {
                    return t instanceof Uint8Array ? this._body.setMessage(t) : this._body.setMessage(i.utf8encode(t)), this
                }
                get _method() {
                    return s.ConsensusService.submitMessage
                }
                _doValidate(t) {}
            }
            e.ConsensusSubmitMessageTransaction = ConsensusSubmitMessageTransaction
        },
        341: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });

            function n(t) {
                const {
                    Ed25519PublicKey: e
                } = r(613), {
                    ContractId: n
                } = r(155), {
                    ThresholdKey: s
                } = r(1801), {
                    KeyList: o
                } = r(1802);
                if (t.hasEd25519()) return new e(t.getEcdsa384_asU8());
                if (t.hasContractid()) return n._fromProto(t.getContractid());
                if (t.hasThresholdkey()) {
                    const e = t.getThresholdkey(),
                        r = a(e.getKeys());
                    return new s(e.getThreshold()).addAll(...r)
                }
                if (t.hasKeylist()) return (new o).addAll(...a(t.getKeylist()));
                throw new Error("not implemented key case: " + t.getKeyCase())
            }

            function a(t) {
                return t.getKeysList().map(n)
            }
            e.PublicKey = class PublicKey {}, e._fromProtoKey = n, e._fromProtoKeyList = a
        },
        408: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(1056);
            class Status {
                constructor(t) {
                    this.code = t
                }
                toString() {
                    switch (this.code) {
                        case Status.Ok.code:
                            return "OK";
                        case Status.InvalidTransaction.code:
                            return "INVALID_TRANSACTION";
                        case Status.PayerAccountNotFound.code:
                            return "PAYER_ACCOUNT_NOT_FOUND";
                        case Status.InvalidNodeAccount.code:
                            return "INVALID_NODE_ACCOUNT";
                        case Status.TransactionExpired.code:
                            return "TRANSACTION_EXPIRED";
                        case Status.InvalidTransactionStart.code:
                            return "INVALID_TRANSACTION_START";
                        case Status.InvalidTransactionDuration.code:
                            return "INVALID_TRANSACTION_DURATION";
                        case Status.InvalidSignature.code:
                            return "INVALID_SIGNATURE";
                        case Status.MemoTooLong.code:
                            return "MEMO_TOO_LONG";
                        case Status.InsufficientTxFee.code:
                            return "INSUFFICIENT_TX_FEE";
                        case Status.InsufficientPayerBalance.code:
                            return "INSUFFICIENT_PAYER_BALANCE";
                        case Status.DuplicateTransaction.code:
                            return "DUPLICATE_TRANSACTION";
                        case Status.Busy.code:
                            return "BUSY";
                        case Status.NotSupported.code:
                            return "NOT_SUPPORTED";
                        case Status.InvalidFileId.code:
                            return "INVALID_FILE_ID";
                        case Status.InvalidAccountId.code:
                            return "INVALID_ACCOUNT_ID";
                        case Status.InvalidContractId.code:
                            return "INVALID_CONTRACT_ID";
                        case Status.InvalidTransactionId.code:
                            return "INVALID_TRANSACTION_ID";
                        case Status.ReceiptNotFound.code:
                            return "RECEIPT_NOT_FOUND";
                        case Status.RecordNotFound.code:
                            return "RECORD_NOT_FOUND";
                        case Status.InvalidSolidityId.code:
                            return "INVALID_SOLIDITY_ID";
                        case Status.Unknown.code:
                            return "UNKNOWN";
                        case Status.Success.code:
                            return "SUCCESS";
                        case Status.FailInvalid.code:
                            return "FAIL_INVALID";
                        case Status.FailFee.code:
                            return "FAIL_FEE";
                        case Status.FailBalance.code:
                            return "FAIL_BALANCE";
                        case Status.KeyRequired.code:
                            return "KEY_REQUIRED";
                        case Status.BadEncoding.code:
                            return "BAD_ENCODING";
                        case Status.InsufficientAccountBalance.code:
                            return "INSUFFICIENT_ACCOUNT_BALANCE";
                        case Status.InvalidSolidityAddress.code:
                            return "INVALID_SOLIDITY_ADDRESS";
                        case Status.InsufficientGas.code:
                            return "INSUFFICIENT_GAS";
                        case Status.ContractSizeLimitExceeded.code:
                            return "CONTRACT_SIZE_LIMIT_EXCEEDED";
                        case Status.LocalCallModificationException.code:
                            return "LOCAL_CALL_MODIFICATION_EXCEPTION";
                        case Status.ContractRevertExecuted.code:
                            return "CONTRACT_REVERT_EXECUTED";
                        case Status.ContractExecutionException.code:
                            return "CONTRACT_EXECUTION_EXCEPTION";
                        case Status.InvalidReceivingNodeAccount.code:
                            return "INVALID_RECEIVING_NODE_ACCOUNT";
                        case Status.MissingQueryHeader.code:
                            return "MISSING_QUERY_HEADER";
                        case Status.AccountUpdateFailed.code:
                            return "ACCOUNT_UPDATE_FAILED";
                        case Status.InvalidKeyEncoding.code:
                            return "INVALID_KEY_ENCODING";
                        case Status.NullSolidityAddress.code:
                            return "NULL_SOLIDITY_ADDRESS";
                        case Status.ContractUpdateFailed.code:
                            return "CONTRACT_UPDATE_FAILED";
                        case Status.InvalidQueryHeader.code:
                            return "INVALID_QUERY_HEADER";
                        case Status.InvalidFeeSubmitted.code:
                            return "INVALID_FEE_SUBMITTED";
                        case Status.InvalidPayerSignature.code:
                            return "INVALID_PAYER_SIGNATURE";
                        case Status.KeyNotProvided.code:
                            return "KEY_NOT_PROVIDED";
                        case Status.InvalidExpirationTime.code:
                            return "INVALID_EXPIRATION_TIME";
                        case Status.NoWaclKey.code:
                            return "NO_WACL_KEY";
                        case Status.FileContentEmpty.code:
                            return "FILE_CONTENT_EMPTY";
                        case Status.InvalidAccountAmounts.code:
                            return "INVALID_ACCOUNT_AMOUNTS";
                        case Status.EmptyTransactionBody.code:
                            return "EMPTY_TRANSACTION_BODY";
                        case Status.InvalidTransactionBody.code:
                            return "INVALID_TRANSACTION_BODY";
                        case Status.InvalidSignatureTypeMismatchingKey.code:
                            return "INVALID_SIGNATURE_TYPE_MISMATCHING_KEY";
                        case Status.InvalidSignatureCountMismatchingKey.code:
                            return "INVALID_SIGNATURE_COUNT_MISMATCHING_KEY";
                        case Status.EmptyClaimBody.code:
                            return "EMPTY_CLAIM_BODY";
                        case Status.EmptyClaimHash.code:
                            return "EMPTY_CLAIM_HASH";
                        case Status.EmptyClaimKeys.code:
                            return "EMPTY_CLAIM_KEYS";
                        case Status.InvalidClaimHashSize.code:
                            return "INVALID_CLAIM_HASH_SIZE";
                        case Status.EmptyQueryBody.code:
                            return "EMPTY_QUERY_BODY";
                        case Status.EmptyClaimQuery.code:
                            return "EMPTY_CLAIM_QUERY";
                        case Status.ClaimNotFound.code:
                            return "CLAIM_NOT_FOUND";
                        case Status.AccountIdDoesNotExist.code:
                            return "ACCOUNT_ID_DOES_NOT_EXIST";
                        case Status.ClaimAlreadyExists.code:
                            return "CLAIM_ALREADY_EXISTS";
                        case Status.InvalidFileWacl.code:
                            return "INVALID_FILE_WACL";
                        case Status.SerializationFailed.code:
                            return "SERIALIZATION_FAILED";
                        case Status.TransactionOversize.code:
                            return "TRANSACTION_OVERSIZE";
                        case Status.TransactionTooManyLayers.code:
                            return "TRANSACTION_TOO_MANY_LAYERS";
                        case Status.ContractDeleted.code:
                            return "CONTRACT_DELETED";
                        case Status.PlatformNotActive.code:
                            return "PLATFORM_NOT_ACTIVE";
                        case Status.KeyPrefixMismatch.code:
                            return "KEY_PREFIX_MISMATCH";
                        case Status.PlatformTransactionNotCreated.code:
                            return "PLATFORM_TRANSACTION_NOT_CREATED";
                        case Status.InvalidRenewalPeriod.code:
                            return "INVALID_RENEWAL_PERIOD";
                        case Status.InvalidPayerAccountId.code:
                            return "INVALID_PAYER_ACCOUNT_ID";
                        case Status.AccountDeleted.code:
                            return "ACCOUNT_DELETED";
                        case Status.FileDeleted.code:
                            return "FILE_DELETED";
                        case Status.AccountRepeatedInAccountAmounts.code:
                            return "ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS";
                        case Status.SettingNegativeAccountBalance.code:
                            return "SETTING_NEGATIVE_ACCOUNT_BALANCE";
                        case Status.ObtainerRequired.code:
                            return "OBTAINER_REQUIRED";
                        case Status.ObtainerSameContractId.code:
                            return "OBTAINER_SAME_CONTRACT_ID";
                        case Status.ObtainerDoesNotExist.code:
                            return "OBTAINER_DOES_NOT_EXIST";
                        case Status.ModifyingImmutableContract.code:
                            return "MODIFYING_IMMUTABLE_CONTRACT";
                        case Status.FileSystemException.code:
                            return "FILE_SYSTEM_EXCEPTION";
                        case Status.AutorenewDurationNotInRange.code:
                            return "AUTORENEW_DURATION_NOT_IN_RANGE";
                        case Status.ErrorDecodingBytestring.code:
                            return "ERROR_DECODING_BYTESTRING";
                        case Status.ContractFileEmpty.code:
                            return "CONTRACT_FILE_EMPTY";
                        case Status.ContractBytecodeEmpty.code:
                            return "CONTRACT_BYTECODE_EMPTY";
                        case Status.InvalidInitialBalance.code:
                            return "INVALID_INITIAL_BALANCE";
                        case Status.InvalidReceiveRecordThreshold.code:
                            return "INVALID_RECEIVE_RECORD_THRESHOLD";
                        case Status.InvalidSendRecordThreshold.code:
                            return "INVALID_SEND_RECORD_THRESHOLD";
                        case Status.AccountIsNotGenesisAccount.code:
                            return "ACCOUNT_IS_NOT_GENESIS_ACCOUNT";
                        case Status.PayerAccountUnauthorized.code:
                            return "PAYER_ACCOUNT_UNAUTHORIZED";
                        case Status.InvalidFreezeTransactionBody.code:
                            return "INVALID_FREEZE_TRANSACTION_BODY";
                        case Status.FreezeTransactionBodyNotFound.code:
                            return "FREEZE_TRANSACTION_BODY_NOT_FOUND";
                        case Status.TransferListSizeLimitExceeded.code:
                            return "TRANSFER_LIST_SIZE_LIMIT_EXCEEDED";
                        case Status.ResultSizeLimitExceeded.code:
                            return "RESULT_SIZE_LIMIT_EXCEEDED";
                        case Status.NotSpecialAccount.code:
                            return "NOT_SPECIAL_ACCOUNT";
                        case Status.ContractNegativeGas.code:
                            return "CONTRACT_NEGATIVE_GAS";
                        case Status.ContractNegativeValue.code:
                            return "CONTRACT_NEGATIVE_VALUE";
                        case Status.InvalidFeeFile.code:
                            return "INVALID_FEE_FILE";
                        case Status.InvalidExchangeRateFile.code:
                            return "INVALID_EXCHANGE_RATE_FILE";
                        case Status.InsufficientLocalCallGas.code:
                            return "INSUFFICIENT_LOCAL_CALL_GAS";
                        case Status.EntityNotAllowedToDelete.code:
                            return "ENTITY_NOT_ALLOWED_TO_DELETE";
                        case Status.AuthorizationFailed.code:
                            return "AUTHORIZATION_FAILED";
                        case Status.FileUploadedProtoInvalid.code:
                            return "FILE_UPLOADED_PROTO_INVALID";
                        case Status.FileUploadedProtoNotSavedToDisk.code:
                            return "FILE_UPLOADED_PROTO_NOT_SAVED_TO_DISK";
                        case Status.FeeScheduleFilePartUploaded.code:
                            return "FEE_SCHEDULE_FILE_PART_UPLOADED";
                        case Status.ExchangeRateChangeLimitExceeded.code:
                            return "EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED";
                        default:
                            return "UNKNOWN STATUS CODE (4120)"
                    }
                }
                _isBusy() {
                    return Status.Busy.code === this.code
                }
                _isError() {
                    switch (this.code) {
                        case Status.Success.code:
                        case Status.Ok.code:
                            return !1;
                        case Status.Unknown.code:
                        case Status.ReceiptNotFound.code:
                        case Status.RecordNotFound.code:
                        default:
                            return !0
                    }
                }
                _throwIfError() {
                    if (this._isError()) throw new n.HederaStatusError(this)
                }
            }
            e.Status = Status, Status.Ok = new Status(0), Status.InvalidTransaction = new Status(1), Status.PayerAccountNotFound = new Status(2), Status.InvalidNodeAccount = new Status(3), Status.TransactionExpired = new Status(4), Status.InvalidTransactionStart = new Status(5), Status.InvalidTransactionDuration = new Status(6), Status.InvalidSignature = new Status(7), Status.MemoTooLong = new Status(8), Status.InsufficientTxFee = new Status(9), Status.InsufficientPayerBalance = new Status(10), Status.DuplicateTransaction = new Status(11), Status.Busy = new Status(12), Status.NotSupported = new Status(13), Status.InvalidFileId = new Status(14), Status.InvalidAccountId = new Status(15), Status.InvalidContractId = new Status(16), Status.InvalidTransactionId = new Status(17), Status.ReceiptNotFound = new Status(18), Status.RecordNotFound = new Status(19), Status.InvalidSolidityId = new Status(20), Status.Unknown = new Status(21), Status.Success = new Status(22), Status.FailInvalid = new Status(23), Status.FailFee = new Status(24), Status.FailBalance = new Status(25), Status.KeyRequired = new Status(26), Status.BadEncoding = new Status(27), Status.InsufficientAccountBalance = new Status(28), Status.InvalidSolidityAddress = new Status(29), Status.InsufficientGas = new Status(30), Status.ContractSizeLimitExceeded = new Status(31), Status.LocalCallModificationException = new Status(32), Status.ContractRevertExecuted = new Status(33), Status.ContractExecutionException = new Status(34), Status.InvalidReceivingNodeAccount = new Status(35), Status.MissingQueryHeader = new Status(36), Status.AccountUpdateFailed = new Status(37), Status.InvalidKeyEncoding = new Status(38), Status.NullSolidityAddress = new Status(39), Status.ContractUpdateFailed = new Status(40), Status.InvalidQueryHeader = new Status(41), Status.InvalidFeeSubmitted = new Status(42), Status.InvalidPayerSignature = new Status(43), Status.KeyNotProvided = new Status(44), Status.InvalidExpirationTime = new Status(45), Status.NoWaclKey = new Status(46), Status.FileContentEmpty = new Status(47), Status.InvalidAccountAmounts = new Status(48), Status.EmptyTransactionBody = new Status(49), Status.InvalidTransactionBody = new Status(50), Status.InvalidSignatureTypeMismatchingKey = new Status(51), Status.InvalidSignatureCountMismatchingKey = new Status(52), Status.EmptyClaimBody = new Status(53), Status.EmptyClaimHash = new Status(54), Status.EmptyClaimKeys = new Status(55), Status.InvalidClaimHashSize = new Status(56), Status.EmptyQueryBody = new Status(57), Status.EmptyClaimQuery = new Status(58), Status.ClaimNotFound = new Status(59), Status.AccountIdDoesNotExist = new Status(60), Status.ClaimAlreadyExists = new Status(61), Status.InvalidFileWacl = new Status(62), Status.SerializationFailed = new Status(63), Status.TransactionOversize = new Status(64), Status.TransactionTooManyLayers = new Status(65), Status.ContractDeleted = new Status(66), Status.PlatformNotActive = new Status(67), Status.KeyPrefixMismatch = new Status(68), Status.PlatformTransactionNotCreated = new Status(69), Status.InvalidRenewalPeriod = new Status(70), Status.InvalidPayerAccountId = new Status(71), Status.AccountDeleted = new Status(72), Status.FileDeleted = new Status(73), Status.AccountRepeatedInAccountAmounts = new Status(74), Status.SettingNegativeAccountBalance = new Status(75), Status.ObtainerRequired = new Status(76), Status.ObtainerSameContractId = new Status(77), Status.ObtainerDoesNotExist = new Status(78), Status.ModifyingImmutableContract = new Status(79), Status.FileSystemException = new Status(80), Status.AutorenewDurationNotInRange = new Status(81), Status.ErrorDecodingBytestring = new Status(82), Status.ContractFileEmpty = new Status(83), Status.ContractBytecodeEmpty = new Status(84), Status.InvalidInitialBalance = new Status(85), Status.InvalidReceiveRecordThreshold = new Status(86), Status.InvalidSendRecordThreshold = new Status(87), Status.AccountIsNotGenesisAccount = new Status(88), Status.PayerAccountUnauthorized = new Status(89), Status.InvalidFreezeTransactionBody = new Status(90), Status.FreezeTransactionBodyNotFound = new Status(91), Status.TransferListSizeLimitExceeded = new Status(92), Status.ResultSizeLimitExceeded = new Status(93), Status.NotSpecialAccount = new Status(94), Status.ContractNegativeGas = new Status(95), Status.ContractNegativeValue = new Status(96), Status.InvalidFeeFile = new Status(97), Status.InvalidExchangeRateFile = new Status(98), Status.InsufficientLocalCallGas = new Status(99), Status.EntityNotAllowedToDelete = new Status(100), Status.AuthorizationFailed = new Status(101), Status.FileUploadedProtoInvalid = new Status(102), Status.FileUploadedProtoNotSavedToDisk = new Status(103), Status.FeeScheduleFilePartUploaded = new Status(104), Status.ExchangeRateChangeLimitExceeded = new Status(105)
        },
        409: function(t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, r, n) {
                return new(r || (r = Promise))((function(a, s) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function i(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(o, i)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const a = r(91),
                s = r(36),
                o = r(103),
                i = r(105),
                c = r(265),
                u = r(1800),
                d = r(1803),
                l = r(410);
            class TransactionId {
                constructor(t) {
                    if (t.validStart || t.validStartSeconds) {
                        const e = t;
                        if (e instanceof TransactionId) this.accountId = e.accountId, this.validStart = new l.Time(e.validStart.seconds, e.validStart.nanos);
                        else if (this.accountId = new a.AccountId(e.account), "validStart" in e) {
                            const {
                                seconds: t,
                                nanos: r
                            } = c.dateToTimestamp(e.validStart);
                            this.validStart = new l.Time(t, r)
                        } else this.validStart = new l.Time(e.validStartSeconds, e.validStartNanos)
                    } else {
                        this.accountId = new a.AccountId(t);
                        const {
                            seconds: e,
                            nanos: r
                        } = c.dateToTimestamp(Date.now() - 1e4);
                        this.validStart = new l.Time(e, r)
                    }
                }
                static withValidStart(t, e) {
                    return new TransactionId({
                        account: t,
                        validStartSeconds: e.seconds,
                        validStartNanos: e.nanos
                    })
                }
                static fromString(t) {
                    const [e, r] = t.split("@"), [n, s] = r.split(".");
                    return new TransactionId({
                        account: new a.AccountId(e),
                        validStartSeconds: Number(n),
                        validStartNanos: Number(s)
                    })
                }
                toString() {
                    return `${this.accountId.toString()}@${this.validStart.seconds}.${this.validStart.nanos}`
                }
                getReceipt(t) {
                    return n(this, void 0, void 0, (function*() {
                        const e = yield(new u.TransactionReceiptQuery).setTransactionId(this).execute(t);
                        return e.status._throwIfError(), e
                    }))
                }
                getRecord(t) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.getReceipt(t), (new d.TransactionRecordQuery).setTransactionId(this).execute(t)
                    }))
                }
                static _fromProto(t) {
                    const e = o.orThrow(t.getTransactionvalidstart()).getSeconds(),
                        r = o.orThrow(t.getTransactionvalidstart()).getNanos();
                    return new TransactionId({
                        account: a.AccountId._fromProto(o.orThrow(t.getAccountid())),
                        validStartSeconds: e,
                        validStartNanos: r
                    })
                }
                _toProto() {
                    const t = new s.TransactionID;
                    t.setAccountid(this.accountId._toProto());
                    const e = new i.Timestamp;
                    return e.setSeconds(this.validStart.seconds), e.setNanos(this.validStart.nanos), t.setTransactionvalidstart(e), t
                }
            }
            e.TransactionId = TransactionId
        },
        410: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(105);
            class Time {
                constructor(t, e) {
                    this.seconds = t, this.nanos = e
                }
                asDate() {
                    return new Date(1e3 * this.seconds + Math.floor(this.nanos / 1e6))
                }
                static fromDate(t) {
                    const e = "number" == typeof t ? t : t.getMilliseconds();
                    return new Time(e / 1e3, e % 1e3 * 1e6)
                }
                _toProto() {
                    const t = new n.Timestamp;
                    return t.setSeconds(this.seconds), t.setNanos(this.nanos), t
                }
                static _fromProto(t) {
                    return new Time(t.getSeconds(), t.getNanos())
                }
            }
            e.Time = Time
        },
        501: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(36),
                a = r(103),
                s = r(218);
            class ConsensusTopicId {
                constructor(t, e, r) {
                    if ("number" == typeof t && null != e && null != r) this.shard = t, this.realm = e, this.topic = r;
                    else {
                        const e = t,
                            r = e instanceof ConsensusTopicId ? e : a.normalizeEntityId("topic", e);
                        this.shard = r.shard, this.realm = r.realm, this.topic = r.topic
                    }
                }
                static fromString(t) {
                    return new ConsensusTopicId(t)
                }
                static _fromProto(t) {
                    return new ConsensusTopicId({
                        shard: t.getShardnum(),
                        realm: t.getRealmnum(),
                        topic: t.getTopicnum()
                    })
                }
                toString() {
                    return `${this.shard}.${this.realm}.${this.topic}`
                }
                static fromSolidityAddress(t) {
                    if (40 !== t.length) throw new Error("Invalid hex encoded solidity address length:\n                    expected length 40, got length " + t.length);
                    const e = new s.default(t.slice(0, 8), 16).toNumber(),
                        r = new s.default(t.slice(8, 24), 16).toNumber(),
                        n = new s.default(t.slice(24, 40), 16).toNumber();
                    return new ConsensusTopicId(e, r, n)
                }
                toSolidityAddress() {
                    const t = new Uint8Array(20),
                        e = new DataView(t.buffer, 0, 20);
                    return e.setUint32(0, this.shard), e.setUint32(8, this.realm), e.setUint32(16, this.topic), Buffer.from(t.buffer).toString("hex")
                }
                _toProto() {
                    const t = new n.TopicID;
                    return t.setShardnum(this.shard), t.setRealmnum(this.realm), t.setTopicnum(this.topic), t
                }
            }
            e.ConsensusTopicId = ConsensusTopicId
        },
        613: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(73),
                a = r(36),
                s = r(614),
                o = r(1039);
            class Ed25519PublicKey {
                constructor(t) {
                    if (t.length !== n.sign.publicKeyLength) throw new o.BadKeyError;
                    this._keyData = t
                }
                static fromBytes(t) {
                    return new Ed25519PublicKey(t)
                }
                static fromString(t) {
                    switch (t.length) {
                        case 64: {
                            const e = new Ed25519PublicKey(s.decodeHex(t));
                            return e._asStringRaw = t, e
                        }
                        case 88:
                            if (t.startsWith(s.ed25519PubKeyPrefix)) {
                                const e = t.slice(24),
                                    r = new Ed25519PublicKey(s.decodeHex(e));
                                return r._asStringRaw = e, r
                            }
                    }
                    throw new o.BadKeyError
                }
                toBytes() {
                    return this._keyData.slice()
                }
                toString(t = !1) {
                    return null == this._asStringRaw && (this._asStringRaw = s.encodeHex(this._keyData)), (t ? "" : s.ed25519PubKeyPrefix) + this._asStringRaw
                }
                _toProtoKey() {
                    const t = new a.Key;
                    return t.setEd25519(this.toBytes()), t
                }
                _bytesEqual(t) {
                    return this._keyData === t
                }
            }
            e.Ed25519PublicKey = Ed25519PublicKey
        },
        614: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(24),
                a = r(43);
            e.pbkdf2 = a.promisify(n.pbkdf2), e.randomBytes = a.promisify(n.randomBytes), e.ed25519PrivKeyPrefix = "302e020100300506032b657004220420", e.ed25519PubKeyPrefix = "302a300506032b6570032100", e.hmacAlgo = "sha384", e.encodeHex = function(t) {
                return t.reduce((t, e) => (e < 16 && (t += "0"), t + e.toString(16)), "")
            }, e.decodeHex = function(t) {
                if (t.length % 2 != 0) throw new Error("hex code must be even length");
                const e = t.length / 2,
                    r = new Uint8Array(t.length / 2);
                for (let n = 0; n < e; n += 1) {
                    const e = 2 * n;
                    r[n] = Number.parseInt(t.slice(e, e + 2), 16)
                }
                return r
            }, e.deriveChildKey = function(t, e, r) {
                const a = n.createHmac("SHA512", Buffer.from(e)),
                    s = Buffer.alloc(37);
                s[0] = 0, s.set(t, 1), new DataView(s.buffer).setUint32(33, r, !1), s[33] |= 128, a.update(s);
                const o = a.digest();
                return {
                    keyBytes: o.subarray(0, 32),
                    chainCode: o.subarray(32)
                }
            }
        },
        618: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(1058),
                a = r(1059),
                s = r(409),
                o = r(410),
                i = r(129),
                c = r(3267);
            class TransactionRecord {
                constructor(t) {
                    this._callResult = null, this._callResultIsCreate = !1, this.receipt = n.TransactionReceipt._fromProto(t.getReceipt()), this.transactionHash = t.getTransactionhash_asU8(), this.consensusTimestamp = o.Time._fromProto(t.getConsensustimestamp()), this.transactionId = s.TransactionId._fromProto(t.getTransactionid()), this.transactionMemo = t.getMemo(), this.transactionFee = i.Hbar.fromTinybar(t.getTransactionfee()), this.transfers = u(t.getTransferlist()), t.hasContractcallresult() ? (this._callResult = new a.ContractFunctionResult(t.getContractcreateresult()), this._callResultIsCreate = !0) : t.hasContractcreateresult() && (this._callResult = new a.ContractFunctionResult(t.getContractcallresult()))
                }
                static _fromProto(t) {
                    return new TransactionRecord(t)
                }
                getContractCreateResult() {
                    if (null == this._callResult || this._callResultIsCreate) throw new Error("record does not contain a contract create result");
                    return this._callResult
                }
                getContractExecuteResult() {
                    if (null == this._callResult || !this._callResultIsCreate) throw new Error("record does not contain a contract execute result");
                    return this._callResult
                }
            }

            function u(t) {
                return t.getAccountamountsList().map(c.transferFromProto)
            }
            e.TransactionRecord = TransactionRecord, e.transferListToSdk = u
        },
        91: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(36),
                a = r(103),
                s = r(218);
            class AccountId {
                constructor(t, e, r) {
                    if ("number" == typeof t && null != e && null != r) this.shard = t, this.realm = e, this.account = r;
                    else {
                        const e = t,
                            r = e instanceof AccountId ? e : a.normalizeEntityId("account", e);
                        this.shard = r.shard, this.realm = r.realm, this.account = r.account
                    }
                }
                static fromString(t) {
                    return new AccountId(t)
                }
                static _fromProto(t) {
                    return new AccountId({
                        shard: t.getShardnum(),
                        realm: t.getRealmnum(),
                        account: t.getAccountnum()
                    })
                }
                toString() {
                    return `${this.shard}.${this.realm}.${this.account}`
                }
                static fromSolidityAddress(t) {
                    if (40 !== t.length) throw new Error("Invalid hex encoded solidity address length:\n                    expected length 40, got length " + t.length);
                    const e = new s.default(t.slice(0, 8), 16).toNumber(),
                        r = new s.default(t.slice(8, 24), 16).toNumber(),
                        n = new s.default(t.slice(24, 40), 16).toNumber();
                    return new AccountId(e, r, n)
                }
                toSolidityAddress() {
                    const t = new Uint8Array(20),
                        e = new DataView(t.buffer, 0, 20);
                    return e.setUint32(0, this.shard), e.setUint32(8, this.realm), e.setUint32(16, this.account), Buffer.from(t.buffer).toString("hex")
                }
                _toProto() {
                    const t = new n.AccountID;
                    return t.setShardnum(this.shard), t.setRealmnum(this.realm), t.setAccountnum(this.account), t
                }
            }
            e.AccountId = AccountId
        }
    }
]);