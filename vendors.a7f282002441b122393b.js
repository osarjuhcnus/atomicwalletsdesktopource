(window.webpackJsonp = window.webpackJsonp || []).push([
    [251], {
        10226: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = i(10227),
                n = r(i(1397));
            t.isLocalHost = (e, t = !0) => {
                try {
                    if ("loopback" === a.parse(e).range() || e.startsWith("0") || ["127.0.0.1", "::ffff:127.0.0.1"].includes(e)) return !0;
                    if (t) {
                        const t = n.default.networkInterfaces();
                        return Object.keys(t).some(i => t[i].some(t => t.address === e))
                    }
                    return !1
                } catch (e) {
                    return !1
                }
            };
            t.isValidPeer = (e, i = !0) => (e.ip = (e => {
                try {
                    return a.process(e).toString()
                } catch (e) {
                    return
                }
            })(e.ip), !!e.ip && !t.isLocalHost(e.ip, i))
        },
        10282: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5512);
            t.formats = [e => {
                e.addFormat("vendorField", e => {
                    try {
                        return Buffer.from(e, "utf8").length <= r.maxVendorFieldLength()
                    } catch (e) {
                        return !1
                    }
                })
            }, e => {
                e.addFormat("peer", e => {
                    try {
                        return r.isValidPeer({
                            ip: e
                        }, !1)
                    } catch (e) {
                        return !1
                    }
                })
            }]
        },
        10283: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = r(i(7544)),
                n = i(5551),
                s = i(5550),
                o = i(5512);
            t.keywords = [e => {
                a.default.get("instanceof").definition.CONSTRUCTORS.BigNumber = o.BigNumber, e.addKeyword("bignumber", {
                    compile: e => (t, i, r, a) => {
                        const n = void 0 !== e.minimum ? e.minimum : 0,
                            s = void 0 !== e.maximum ? e.maximum : "9223372036854775807";
                        if (0 !== t && !t) return !1;
                        let c;
                        try {
                            c = o.BigNumber.make(t)
                        } catch (e) {
                            return !1
                        }
                        r && a && (r[a] = c);
                        let u = !1;
                        return e.bypassGenesis && r.id && (u = e.block ? 1 === r.height : o.isGenesisTransaction(r.id)), !!(!c.isLessThan(n) || c.isZero() && u) && !(c.isGreaterThan(s) && !u)
                    },
                    errors: !1,
                    modifying: !0,
                    metaSchema: {
                        type: "object",
                        properties: {
                            minimum: {
                                type: "integer"
                            },
                            maximum: {
                                type: "integer"
                            },
                            bypassGenesis: {
                                type: "boolean"
                            },
                            block: {
                                type: "boolean"
                            }
                        },
                        additionalItems: !1
                    }
                })
            }, e => {
                e.addKeyword("blockId", {
                    compile: e => (t, i, r) => {
                        if (r && 1 === r.height && e.allowNullWhenGenesis) return !t || 0 === Number(t);
                        if ("string" != typeof t) return !1;
                        const a = /^[0-9]{1,20}$/.test(t) || /^[0-9a-f]{16}$/i.test(t),
                            n = /^[0-9a-f]{64}$/i.test(t);
                        if (r && r.height) {
                            const t = e.isPreviousBlock ? r.height - 1 : r.height;
                            return s.configManager.getMilestone(t).block.idFullSha256 ? n : a
                        }
                        return a || n
                    },
                    errors: !1,
                    metaSchema: {
                        type: "object",
                        properties: {
                            allowNullWhenGenesis: {
                                type: "boolean"
                            },
                            isPreviousBlock: {
                                type: "boolean"
                            }
                        },
                        additionalItems: !1
                    }
                })
            }, e => {
                e.addKeyword("maxBytes", {
                    type: "string",
                    compile: (e, t) => i => "string" === t.type && Buffer.from(i, "utf8").byteLength <= e,
                    errors: !1,
                    metaSchema: {
                        type: "integer",
                        minimum: 0
                    }
                })
            }, e => {
                e.addKeyword("network", {
                    compile: e => t => e && t === s.configManager.get("network.pubKeyHash"),
                    errors: !1,
                    metaSchema: {
                        type: "boolean"
                    }
                })
            }, e => {
                e.addKeyword("transactionType", {
                    compile: e => (t, i, r) => {
                        if (t === n.TransactionType.MultiPayment && r && (!r.typeGroup || 1 === r.typeGroup) && r.asset && r.asset.payments) {
                            const e = s.configManager.getMilestone().multiPaymentLimit || 500;
                            return r.asset.payments.length <= e
                        }
                        return t === e
                    },
                    errors: !1,
                    metaSchema: {
                        type: "integer",
                        minimum: 0
                    }
                })
            }]
        },
        10284: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.schemas = {
                hex: {
                    $id: "hex",
                    type: "string",
                    pattern: "^[0123456789A-Fa-f]+$"
                },
                base58: {
                    $id: "base58",
                    type: "string",
                    pattern: "^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$"
                },
                alphanumeric: {
                    $id: "alphanumeric",
                    type: "string",
                    pattern: "^[a-zA-Z0-9]+$"
                },
                transactionId: {
                    $id: "transactionId",
                    allOf: [{
                        minLength: 64,
                        maxLength: 64
                    }, {
                        $ref: "hex"
                    }]
                },
                networkByte: {
                    $id: "networkByte",
                    network: !0
                },
                address: {
                    $id: "address",
                    allOf: [{
                        minLength: 34,
                        maxLength: 34
                    }, {
                        $ref: "base58"
                    }]
                },
                publicKey: {
                    $id: "publicKey",
                    allOf: [{
                        minLength: 66,
                        maxLength: 66
                    }, {
                        $ref: "hex"
                    }, {
                        transform: ["toLowerCase"]
                    }]
                },
                walletVote: {
                    $id: "walletVote",
                    allOf: [{
                        type: "string",
                        pattern: "^[+|-][a-zA-Z0-9]{66}$"
                    }, {
                        transform: ["toLowerCase"]
                    }]
                },
                username: {
                    $id: "delegateUsername",
                    allOf: [{
                        type: "string",
                        pattern: "^[a-z0-9!@$&_.]+$"
                    }, {
                        minLength: 1,
                        maxLength: 20
                    }, {
                        transform: ["toLowerCase"]
                    }]
                },
                genericName: {
                    $id: "genericName",
                    allOf: [{
                        type: "string",
                        pattern: "^[a-zA-Z0-9]+(( - |[ ._-])[a-zA-Z0-9]+)*[.]?$"
                    }, {
                        minLength: 1,
                        maxLength: 40
                    }]
                },
                uri: {
                    $id: "uri",
                    allOf: [{
                        format: "uri"
                    }, {
                        minLength: 4,
                        maxLength: 80
                    }]
                },
                blockHeader: {
                    $id: "blockHeader",
                    type: "object",
                    required: ["id", "timestamp", "previousBlock", "height", "totalAmount", "totalFee", "reward", "generatorPublicKey", "blockSignature"],
                    properties: {
                        id: {
                            blockId: {}
                        },
                        idHex: {
                            blockId: {}
                        },
                        version: {
                            type: "integer",
                            minimum: 0
                        },
                        timestamp: {
                            type: "integer",
                            minimum: 0
                        },
                        previousBlock: {
                            blockId: {
                                allowNullWhenGenesis: !0,
                                isPreviousBlock: !0
                            }
                        },
                        previousBlockHex: {
                            blockId: {
                                allowNullWhenGenesis: !0,
                                isPreviousBlock: !0
                            }
                        },
                        height: {
                            type: "integer",
                            minimum: 1
                        },
                        numberOfTransactions: {
                            type: "integer"
                        },
                        totalAmount: {
                            bignumber: {
                                minimum: 0,
                                bypassGenesis: !0,
                                block: !0
                            }
                        },
                        totalFee: {
                            bignumber: {
                                minimum: 0,
                                bypassGenesis: !0,
                                block: !0
                            }
                        },
                        reward: {
                            bignumber: {
                                minimum: 0
                            }
                        },
                        payloadLength: {
                            type: "integer",
                            minimum: 0
                        },
                        payloadHash: {
                            $ref: "hex"
                        },
                        generatorPublicKey: {
                            $ref: "publicKey"
                        },
                        blockSignature: {
                            $ref: "hex"
                        }
                    }
                },
                block: {
                    $id: "block",
                    $ref: "blockHeader",
                    properties: {
                        transactions: {
                            $ref: "transactions",
                            minItems: {
                                $data: "1/numberOfTransactions"
                            },
                            maxItems: {
                                $data: "1/numberOfTransactions"
                            }
                        }
                    }
                }
            }
        },
        10285: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(10286),
                a = i(10298),
                n = i(10299),
                s = i(10300),
                o = i(10301),
                c = i(10302),
                u = i(10303),
                d = i(10304),
                l = i(10305),
                p = i(10306),
                m = i(10307);
            ! function(e) {
                for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i])
            }(i(5660));
            t.BuilderFactory = class BuilderFactory {
                static transfer() {
                    return new p.TransferBuilder
                }
                static secondSignature() {
                    return new l.SecondSignatureBuilder
                }
                static delegateRegistration() {
                    return new r.DelegateRegistrationBuilder
                }
                static vote() {
                    return new m.VoteBuilder
                }
                static multiSignature() {
                    return new d.MultiSignatureBuilder
                }
                static ipfs() {
                    return new c.IPFSBuilder
                }
                static multiPayment() {
                    return new u.MultiPaymentBuilder
                }
                static delegateResignation() {
                    return new a.DelegateResignationBuilder
                }
                static htlcLock() {
                    return new s.HtlcLockBuilder
                }
                static htlcClaim() {
                    return new n.HtlcClaimBuilder
                }
                static htlcRefund() {
                    return new o.HtlcRefundBuilder
                }
            }
        },
        10286: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5512),
                a = i(5597),
                n = i(5660);
            class DelegateRegistrationBuilder extends n.TransactionBuilder {
                constructor() {
                    super(), this.data.type = a.DelegateRegistrationTransaction.type, this.data.typeGroup = a.DelegateRegistrationTransaction.typeGroup, this.data.fee = a.DelegateRegistrationTransaction.staticFee(), this.data.amount = r.BigNumber.ZERO, this.data.recipientId = void 0, this.data.senderPublicKey = void 0, this.data.asset = {
                        delegate: {}
                    }
                }
                usernameAsset(e) {
                    return this.data.asset.delegate.username = e, this
                }
                getStruct() {
                    const e = super.getStruct();
                    return e.amount = this.data.amount, e.recipientId = this.data.recipientId, e.asset = this.data.asset, e
                }
                instance() {
                    return this
                }
            }
            t.DelegateRegistrationBuilder = DelegateRegistrationBuilder
        },
        10287: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(i(2337)),
                s = i(5551),
                o = i(5708),
                c = i(5638),
                u = a(i(5639)),
                d = i(5659);
            class TransferTransaction extends d.Transaction {
                static getSchema() {
                    return u.transfer
                }
                hasVendorField() {
                    return !0
                }
                serialize(e) {
                    const {
                        data: t
                    } = this, i = new n.default(24, !0);
                    i.writeUint64(t.amount.toString()), i.writeUint32(t.expiration || 0);
                    const {
                        addressBuffer: r,
                        addressError: a
                    } = o.Address.toBuffer(t.recipientId);
                    return e.addressError = a, i.append(r), i
                }
                deserialize(e) {
                    const {
                        data: t
                    } = this;
                    t.amount = c.BigNumber.make(e.readUint64().toString()), t.expiration = e.readUint32(), t.recipientId = o.Address.fromBuffer(e.readBytes(21).toBuffer())
                }
            }
            t.TransferTransaction = TransferTransaction, TransferTransaction.typeGroup = s.TransactionTypeGroup.Core, TransferTransaction.type = s.TransactionType.Transfer, TransferTransaction.key = "transfer", TransferTransaction.defaultStaticFee = c.BigNumber.make("10000000")
        },
        10288: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(i(2337)),
                s = i(5551),
                o = i(5638),
                c = a(i(5639)),
                u = i(5659);
            class SecondSignatureRegistrationTransaction extends u.Transaction {
                static getSchema() {
                    return c.secondSignature
                }
                serialize(e) {
                    const {
                        data: t
                    } = this, i = new n.default(33, !0);
                    return i.append(t.asset.signature.publicKey, "hex"), i
                }
                deserialize(e) {
                    const {
                        data: t
                    } = this;
                    t.asset = {
                        signature: {
                            publicKey: e.readBytes(33).toString("hex")
                        }
                    }
                }
            }
            t.SecondSignatureRegistrationTransaction = SecondSignatureRegistrationTransaction, SecondSignatureRegistrationTransaction.typeGroup = s.TransactionTypeGroup.Core, SecondSignatureRegistrationTransaction.type = s.TransactionType.SecondSignature, SecondSignatureRegistrationTransaction.key = "secondSignature", SecondSignatureRegistrationTransaction.defaultStaticFee = o.BigNumber.make("500000000")
        },
        10289: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(i(2337)),
                s = i(5551),
                o = i(5638),
                c = a(i(5639)),
                u = i(5659);
            class DelegateRegistrationTransaction extends u.Transaction {
                static getSchema() {
                    return c.delegateRegistration
                }
                serialize(e) {
                    const {
                        data: t
                    } = this, i = Buffer.from(t.asset.delegate.username, "utf8"), r = new n.default(i.length, !0);
                    return r.writeByte(i.length), r.append(i, "hex"), r
                }
                deserialize(e) {
                    const {
                        data: t
                    } = this, i = e.readUint8();
                    t.asset = {
                        delegate: {
                            username: e.readString(i)
                        }
                    }
                }
            }
            t.DelegateRegistrationTransaction = DelegateRegistrationTransaction, DelegateRegistrationTransaction.typeGroup = s.TransactionTypeGroup.Core, DelegateRegistrationTransaction.type = s.TransactionType.DelegateRegistration, DelegateRegistrationTransaction.key = "delegateRegistration", DelegateRegistrationTransaction.defaultStaticFee = o.BigNumber.make("2500000000")
        },
        10290: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(i(2337)),
                s = i(5551),
                o = i(5638),
                c = a(i(5639)),
                u = i(5659);
            class VoteTransaction extends u.Transaction {
                static getSchema() {
                    return c.vote
                }
                serialize(e) {
                    const {
                        data: t
                    } = this, i = new n.default(24, !0), r = t.asset.votes.map(e => ("+" === e[0] ? "01" : "00") + e.slice(1)).join("");
                    return i.writeByte(t.asset.votes.length), i.append(r, "hex"), i
                }
                deserialize(e) {
                    const {
                        data: t
                    } = this, i = e.readUint8();
                    t.asset = {
                        votes: []
                    };
                    for (let r = 0; r < i; r++) {
                        let i = e.readBytes(34).toString("hex");
                        i = ("1" === i[1] ? "+" : "-") + i.slice(2), t.asset.votes.push(i)
                    }
                }
            }
            t.VoteTransaction = VoteTransaction, VoteTransaction.typeGroup = s.TransactionTypeGroup.Core, VoteTransaction.type = s.TransactionType.Vote, VoteTransaction.key = "vote", VoteTransaction.defaultStaticFee = o.BigNumber.make("100000000")
        },
        10291: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(i(2337)),
                s = i(5551),
                o = i(5550),
                c = i(5512),
                u = i(5638),
                d = a(i(5639)),
                l = i(5659);
            class MultiSignatureRegistrationTransaction extends l.Transaction {
                static getSchema() {
                    return d.multiSignature
                }
                static staticFee(e = {}) {
                    const t = super.staticFee(e),
                        i = e.data;
                    return i ? 2 === i.version ? t.times(i.asset.multiSignature.publicKeys.length + 1) : t.times(i.asset.multiSignatureLegacy.keysgroup.length + 1) : t
                }
                verify() {
                    return c.isException(this.data) || o.configManager.getMilestone().aip11 && super.verify()
                }
                serialize(e) {
                    const {
                        data: t
                    } = this;
                    let i;
                    if (2 === t.version) {
                        const {
                            min: e,
                            publicKeys: r
                        } = t.asset.multiSignature;
                        i = new n.default(2 + 33 * r.length), i.writeUint8(e), i.writeUint8(r.length);
                        for (const e of r) i.append(e, "hex")
                    } else {
                        const e = t.asset.multiSignatureLegacy.keysgroup.map(e => "+" === e[0] ? e.slice(1) : e).join(""),
                            r = Buffer.from(e, "hex");
                        i = new n.default(r.length + 3, !0), i.writeByte(t.asset.multiSignatureLegacy.min), i.writeByte(t.asset.multiSignatureLegacy.keysgroup.length), i.writeByte(t.asset.multiSignatureLegacy.lifetime), i.append(r, "hex")
                    }
                    return i
                }
                deserialize(e) {
                    const {
                        data: t
                    } = this;
                    if (2 === t.version) {
                        const i = {
                            publicKeys: [],
                            min: 0
                        };
                        i.min = e.readUint8();
                        const r = e.readUint8();
                        for (let t = 0; t < r; t++) {
                            const t = e.readBytes(33).toString("hex");
                            i.publicKeys.push(t)
                        }
                        t.asset = {
                            multiSignature: i
                        }
                    } else {
                        const i = {
                            keysgroup: [],
                            lifetime: 0,
                            min: 0
                        };
                        i.min = e.readUint8();
                        const r = e.readUint8();
                        i.lifetime = e.readUint8();
                        for (let t = 0; t < r; t++) {
                            const t = e.readBytes(33).toString("hex");
                            i.keysgroup.push(t)
                        }
                        t.asset = {
                            multiSignatureLegacy: i
                        }
                    }
                }
            }
            t.MultiSignatureRegistrationTransaction = MultiSignatureRegistrationTransaction, MultiSignatureRegistrationTransaction.typeGroup = s.TransactionTypeGroup.Core, MultiSignatureRegistrationTransaction.type = s.TransactionType.MultiSignature, MultiSignatureRegistrationTransaction.key = "multiSignature", MultiSignatureRegistrationTransaction.defaultStaticFee = u.BigNumber.make("500000000")
        },
        10292: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = i(7507),
                s = r(i(2337)),
                o = i(5551),
                c = i(5550),
                u = i(5638),
                d = a(i(5639)),
                l = i(5659);
            class IpfsTransaction extends l.Transaction {
                static getSchema() {
                    return d.ipfs
                }
                verify() {
                    return c.configManager.getMilestone().aip11 && super.verify()
                }
                serialize(e) {
                    const {
                        data: t
                    } = this, i = n.base58.decode(t.asset.ipfs), r = new s.default(i.length, !0);
                    return r.append(i, "hex"), r
                }
                deserialize(e) {
                    const {
                        data: t
                    } = this, i = e.readUint8(), r = e.readUint8(), a = e.readBytes(r).toBuffer(), s = Buffer.alloc(r + 2);
                    s.writeUInt8(i, 0), s.writeUInt8(r, 1), s.fill(a, 2), t.asset = {
                        ipfs: n.base58.encode(s)
                    }
                }
            }
            t.IpfsTransaction = IpfsTransaction, IpfsTransaction.typeGroup = o.TransactionTypeGroup.Core, IpfsTransaction.type = o.TransactionType.Ipfs, IpfsTransaction.key = "ipfs", IpfsTransaction.defaultStaticFee = u.BigNumber.make("500000000")
        },
        10293: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(i(2337)),
                s = i(5551),
                o = i(5708),
                c = i(5550),
                u = i(5638),
                d = a(i(5639)),
                l = i(5659);
            class MultiPaymentTransaction extends l.Transaction {
                static getSchema() {
                    return d.multiPayment
                }
                verify() {
                    return c.configManager.getMilestone().aip11 && super.verify()
                }
                hasVendorField() {
                    return !0
                }
                serialize(e) {
                    const {
                        data: t
                    } = this, i = new n.default(2 + 29 * t.asset.payments.length, !0);
                    i.writeUint16(t.asset.payments.length);
                    for (const r of t.asset.payments) {
                        i.writeUint64(r.amount.toString());
                        const {
                            addressBuffer: t,
                            addressError: a
                        } = o.Address.toBuffer(r.recipientId);
                        e.addressError = a || e.addressError, i.append(t)
                    }
                    return i
                }
                deserialize(e) {
                    const {
                        data: t
                    } = this, i = [], r = e.readUint16();
                    for (let t = 0; t < r; t++) i.push({
                        amount: u.BigNumber.make(e.readUint64().toString()),
                        recipientId: o.Address.fromBuffer(e.readBytes(21).toBuffer())
                    });
                    t.amount = u.BigNumber.ZERO, t.asset = {
                        payments: i
                    }
                }
            }
            t.MultiPaymentTransaction = MultiPaymentTransaction, MultiPaymentTransaction.typeGroup = s.TransactionTypeGroup.Core, MultiPaymentTransaction.type = s.TransactionType.MultiPayment, MultiPaymentTransaction.key = "multiPayment", MultiPaymentTransaction.defaultStaticFee = u.BigNumber.make("10000000")
        },
        10294: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(i(2337)),
                s = i(5551),
                o = i(5550),
                c = i(5638),
                u = a(i(5639)),
                d = i(5659);
            class DelegateResignationTransaction extends d.Transaction {
                static getSchema() {
                    return u.delegateResignation
                }
                verify() {
                    return o.configManager.getMilestone().aip11 && super.verify()
                }
                serialize(e) {
                    return new n.default(0)
                }
                deserialize(e) {}
            }
            t.DelegateResignationTransaction = DelegateResignationTransaction, DelegateResignationTransaction.typeGroup = s.TransactionTypeGroup.Core, DelegateResignationTransaction.type = s.TransactionType.DelegateResignation, DelegateResignationTransaction.key = "delegateResignation", DelegateResignationTransaction.defaultStaticFee = c.BigNumber.make("2500000000")
        },
        10295: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(i(2337)),
                s = i(5551),
                o = i(5708),
                c = i(5550),
                u = i(5638),
                d = a(i(5639)),
                l = i(5659);
            class HtlcLockTransaction extends l.Transaction {
                static getSchema() {
                    return d.htlcLock
                }
                verify() {
                    const e = c.configManager.getMilestone();
                    return !0 === e.aip11 && !0 === e.htlcEnabled && super.verify()
                }
                hasVendorField() {
                    return !0
                }
                serialize(e) {
                    const {
                        data: t
                    } = this, i = new n.default(66, !0);
                    return i.writeUint64(t.amount.toString()), i.append(Buffer.from(t.asset.lock.secretHash, "hex")), i.writeUint8(t.asset.lock.expiration.type), i.writeUint32(t.asset.lock.expiration.value), i.append(o.Address.toBuffer(t.recipientId).addressBuffer), i
                }
                deserialize(e) {
                    const {
                        data: t
                    } = this, i = u.BigNumber.make(e.readUint64().toString()), r = e.readBytes(32).toString("hex"), a = e.readUint8(), n = e.readUint32(), s = o.Address.fromBuffer(e.readBytes(21).toBuffer());
                    t.amount = i, t.recipientId = s, t.asset = {
                        lock: {
                            secretHash: r,
                            expiration: {
                                type: a,
                                value: n
                            }
                        }
                    }
                }
            }
            t.HtlcLockTransaction = HtlcLockTransaction, HtlcLockTransaction.typeGroup = s.TransactionTypeGroup.Core, HtlcLockTransaction.type = s.TransactionType.HtlcLock, HtlcLockTransaction.key = "htlcLock", HtlcLockTransaction.defaultStaticFee = u.BigNumber.make("10000000")
        },
        10296: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(i(2337)),
                s = i(5551),
                o = i(5550),
                c = i(5638),
                u = a(i(5639)),
                d = i(5659);
            class HtlcClaimTransaction extends d.Transaction {
                static getSchema() {
                    return u.htlcClaim
                }
                verify() {
                    const e = o.configManager.getMilestone();
                    return !0 === e.aip11 && !0 === e.htlcEnabled && super.verify()
                }
                serialize(e) {
                    const {
                        data: t
                    } = this, i = new n.default(64, !0);
                    return i.append(Buffer.from(t.asset.claim.lockTransactionId, "hex")), i.append(Buffer.from(t.asset.claim.unlockSecret, "hex")), i
                }
                deserialize(e) {
                    const {
                        data: t
                    } = this, i = e.readBytes(32).toString("hex"), r = e.readBytes(32).toString("hex");
                    t.asset = {
                        claim: {
                            lockTransactionId: i,
                            unlockSecret: r
                        }
                    }
                }
            }
            t.HtlcClaimTransaction = HtlcClaimTransaction, HtlcClaimTransaction.typeGroup = s.TransactionTypeGroup.Core, HtlcClaimTransaction.type = s.TransactionType.HtlcClaim, HtlcClaimTransaction.key = "htlcClaim", HtlcClaimTransaction.defaultStaticFee = c.BigNumber.ZERO
        },
        10297: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                },
                a = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(i(2337)),
                s = i(5551),
                o = i(5550),
                c = i(5638),
                u = a(i(5639)),
                d = i(5659);
            class HtlcRefundTransaction extends d.Transaction {
                static getSchema() {
                    return u.htlcRefund
                }
                verify() {
                    const e = o.configManager.getMilestone();
                    return !0 === e.aip11 && !0 === e.htlcEnabled && super.verify()
                }
                serialize(e) {
                    const {
                        data: t
                    } = this, i = new n.default(32, !0);
                    return i.append(Buffer.from(t.asset.refund.lockTransactionId, "hex")), i
                }
                deserialize(e) {
                    const {
                        data: t
                    } = this, i = e.readBytes(32).toString("hex");
                    t.asset = {
                        refund: {
                            lockTransactionId: i
                        }
                    }
                }
            }
            t.HtlcRefundTransaction = HtlcRefundTransaction, HtlcRefundTransaction.typeGroup = s.TransactionTypeGroup.Core, HtlcRefundTransaction.type = s.TransactionType.HtlcRefund, HtlcRefundTransaction.key = "htlcRefund", HtlcRefundTransaction.defaultStaticFee = c.BigNumber.ZERO
        },
        10298: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5512),
                a = i(5597),
                n = i(5660);
            class DelegateResignationBuilder extends n.TransactionBuilder {
                constructor() {
                    super(), this.data.type = a.DelegateResignationTransaction.type, this.data.typeGroup = a.DelegateResignationTransaction.typeGroup, this.data.version = 2, this.data.fee = a.DelegateResignationTransaction.staticFee(), this.data.amount = r.BigNumber.ZERO, this.data.senderPublicKey = void 0
                }
                getStruct() {
                    const e = super.getStruct();
                    return e.amount = this.data.amount, e
                }
                instance() {
                    return this
                }
            }
            t.DelegateResignationBuilder = DelegateResignationBuilder
        },
        10299: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5512),
                a = i(5597),
                n = i(5660);
            class HtlcClaimBuilder extends n.TransactionBuilder {
                constructor() {
                    super(), this.data.type = a.HtlcClaimTransaction.type, this.data.typeGroup = a.HtlcClaimTransaction.typeGroup, this.data.fee = a.HtlcClaimTransaction.staticFee(), this.data.amount = r.BigNumber.ZERO, this.data.asset = {}
                }
                htlcClaimAsset(e) {
                    return this.data.asset = {
                        claim: e
                    }, this
                }
                getStruct() {
                    const e = super.getStruct();
                    return e.amount = this.data.amount, e.asset = this.data.asset, e
                }
                instance() {
                    return this
                }
            }
            t.HtlcClaimBuilder = HtlcClaimBuilder
        },
        10300: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5512),
                a = i(5597),
                n = i(5660);
            class HtlcLockBuilder extends n.TransactionBuilder {
                constructor() {
                    super(), this.data.type = a.HtlcLockTransaction.type, this.data.typeGroup = a.HtlcLockTransaction.typeGroup, this.data.recipientId = void 0, this.data.amount = r.BigNumber.ZERO, this.data.fee = a.HtlcLockTransaction.staticFee(), this.data.vendorField = void 0, this.data.asset = {}
                }
                htlcLockAsset(e) {
                    return this.data.asset = {
                        lock: e
                    }, this
                }
                getStruct() {
                    const e = super.getStruct();
                    return e.recipientId = this.data.recipientId, e.amount = this.data.amount, e.vendorField = this.data.vendorField, e.asset = this.data.asset, e
                }
                instance() {
                    return this
                }
            }
            t.HtlcLockBuilder = HtlcLockBuilder
        },
        10301: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5512),
                a = i(5597),
                n = i(5660);
            class HtlcRefundBuilder extends n.TransactionBuilder {
                constructor() {
                    super(), this.data.type = a.HtlcRefundTransaction.type, this.data.typeGroup = a.HtlcRefundTransaction.typeGroup, this.data.fee = a.HtlcRefundTransaction.staticFee(), this.data.amount = r.BigNumber.ZERO, this.data.asset = {}
                }
                htlcRefundAsset(e) {
                    return this.data.asset = {
                        refund: e
                    }, this
                }
                getStruct() {
                    const e = super.getStruct();
                    return e.amount = this.data.amount, e.asset = this.data.asset, e
                }
                instance() {
                    return this
                }
            }
            t.HtlcRefundBuilder = HtlcRefundBuilder
        },
        10302: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5512),
                a = i(5597),
                n = i(5660);
            class IPFSBuilder extends n.TransactionBuilder {
                constructor() {
                    super(), this.data.type = a.IpfsTransaction.type, this.data.typeGroup = a.IpfsTransaction.typeGroup, this.data.fee = a.IpfsTransaction.staticFee(), this.data.amount = r.BigNumber.ZERO, this.data.asset = {}
                }
                ipfsAsset(e) {
                    return this.data.asset = {
                        ipfs: e
                    }, this
                }
                getStruct() {
                    const e = super.getStruct();
                    return e.amount = this.data.amount, e.asset = this.data.asset, e
                }
                instance() {
                    return this
                }
            }
            t.IPFSBuilder = IPFSBuilder
        },
        10303: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5585),
                a = i(5550),
                n = i(5512),
                s = i(5597),
                o = i(5660);
            class MultiPaymentBuilder extends o.TransactionBuilder {
                constructor() {
                    super(), this.data.type = s.MultiPaymentTransaction.type, this.data.typeGroup = s.MultiPaymentTransaction.typeGroup, this.data.fee = s.MultiPaymentTransaction.staticFee(), this.data.vendorField = void 0, this.data.asset = {
                        payments: []
                    }, this.data.amount = n.BigNumber.make(0)
                }
                addPayment(e, t) {
                    const i = a.configManager.getMilestone().multiPaymentLimit || 500;
                    if (this.data.asset.payments.length >= i) throw new r.MaximumPaymentCountExceededError(i);
                    return this.data.asset.payments.push({
                        amount: n.BigNumber.make(t),
                        recipientId: e
                    }), this
                }
                getStruct() {
                    if (!this.data.asset.payments || !Array.isArray(this.data.asset.payments) || this.data.asset.payments.length <= 1) throw new r.MinimumPaymentCountSubceededError;
                    const e = super.getStruct();
                    return e.senderPublicKey = this.data.senderPublicKey, e.vendorField = this.data.vendorField, e.amount = this.data.amount, e.asset = this.data.asset, e
                }
                instance() {
                    return this
                }
            }
            t.MultiPaymentBuilder = MultiPaymentBuilder
        },
        10304: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5512),
                a = i(5597),
                n = i(5660);
            class MultiSignatureBuilder extends n.TransactionBuilder {
                constructor() {
                    super(), this.data.type = a.MultiSignatureRegistrationTransaction.type, this.data.typeGroup = a.MultiSignatureRegistrationTransaction.typeGroup, this.data.version = 2, this.data.fee = r.BigNumber.ZERO, this.data.amount = r.BigNumber.ZERO, this.data.recipientId = void 0, this.data.senderPublicKey = void 0, this.data.asset = {
                        multiSignature: {
                            min: 0,
                            publicKeys: []
                        }
                    }
                }
                participant(e) {
                    const {
                        publicKeys: t
                    } = this.data.asset.multiSignature;
                    return t.length <= 16 && (t.push(e), this.data.fee = a.MultiSignatureRegistrationTransaction.staticFee({
                        data: this.data
                    })), this
                }
                min(e) {
                    return this.data.asset.multiSignature.min = e, this
                }
                multiSignatureAsset(e) {
                    return this.data.asset.multiSignature = e, this.data.fee = a.MultiSignatureRegistrationTransaction.staticFee({
                        data: this.data
                    }), this
                }
                getStruct() {
                    const e = super.getStruct();
                    return e.amount = this.data.amount, e.recipientId = this.data.recipientId, e.asset = this.data.asset, e
                }
                instance() {
                    return this
                }
            }
            t.MultiSignatureBuilder = MultiSignatureBuilder
        },
        10305: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5708),
                a = i(5512),
                n = i(5597),
                s = i(5660);
            class SecondSignatureBuilder extends s.TransactionBuilder {
                constructor() {
                    super(), this.data.type = n.SecondSignatureRegistrationTransaction.type, this.data.typeGroup = n.SecondSignatureRegistrationTransaction.typeGroup, this.data.fee = n.SecondSignatureRegistrationTransaction.staticFee(), this.data.amount = a.BigNumber.ZERO, this.data.recipientId = void 0, this.data.senderPublicKey = void 0, this.data.asset = {
                        signature: {}
                    }
                }
                signatureAsset(e) {
                    return this.data.asset.signature.publicKey = r.Keys.fromPassphrase(e).publicKey, this
                }
                getStruct() {
                    const e = super.getStruct();
                    return e.amount = this.data.amount, e.recipientId = this.data.recipientId, e.asset = this.data.asset, e
                }
                instance() {
                    return this
                }
            }
            t.SecondSignatureBuilder = SecondSignatureBuilder
        },
        10306: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5512),
                a = i(5597),
                n = i(5660);
            class TransferBuilder extends n.TransactionBuilder {
                constructor() {
                    super(), this.data.type = a.TransferTransaction.type, this.data.typeGroup = a.TransferTransaction.typeGroup, this.data.fee = a.TransferTransaction.staticFee(), this.data.amount = r.BigNumber.ZERO, this.data.recipientId = void 0, this.data.senderPublicKey = void 0, this.data.expiration = 0
                }
                expiration(e) {
                    return this.data.expiration = e, this.instance()
                }
                getStruct() {
                    const e = super.getStruct();
                    return e.amount = this.data.amount, e.recipientId = this.data.recipientId, e.asset = this.data.asset, e.vendorField = this.data.vendorField, e.expiration = this.data.expiration, e
                }
                instance() {
                    return this
                }
            }
            t.TransferBuilder = TransferBuilder
        },
        10307: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5512),
                a = i(5597),
                n = i(5660);
            class VoteBuilder extends n.TransactionBuilder {
                constructor() {
                    super(), this.data.type = a.VoteTransaction.type, this.data.typeGroup = a.VoteTransaction.typeGroup, this.data.fee = a.VoteTransaction.staticFee(), this.data.amount = r.BigNumber.ZERO, this.data.recipientId = void 0, this.data.senderPublicKey = void 0, this.data.asset = {
                        votes: []
                    }, this.signWithSenderAsRecipient = !0
                }
                votesAsset(e) {
                    return this.data.asset.votes = e, this
                }
                getStruct() {
                    const e = super.getStruct();
                    return e.amount = this.data.amount, e.recipientId = this.data.recipientId, e.asset = this.data.asset, e
                }
                instance() {
                    return this
                }
            }
            t.VoteBuilder = VoteBuilder
        },
        10308: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5585),
                a = i(5512),
                n = i(7548),
                s = i(6694),
                o = i(5597),
                c = i(6272),
                u = i(6271);
            t.TransactionFactory = class TransactionFactory {
                static fromHex(e) {
                    return this.fromSerialized(e)
                }
                static fromBytes(e, t = !0) {
                    return this.fromSerialized(e ? e.toString("hex") : void 0, t)
                }
                static fromBytesUnsafe(e, t) {
                    try {
                        const i = {
                                acceptLegacyVersion: !0
                            },
                            r = n.Deserializer.deserialize(e, i);
                        return r.data.id = t || c.Utils.getId(r.data, i), r.isVerified = !0, r
                    } catch (e) {
                        throw new r.InvalidTransactionBytesError(e.message)
                    }
                }
                static fromJson(e) {
                    const t = {
                        ...e
                    };
                    return t.amount = a.BigNumber.make(t.amount), t.fee = a.BigNumber.make(t.fee), this.fromData(t)
                }
                static fromData(e, t = !0) {
                    const {
                        value: i,
                        error: c
                    } = u.Verifier.verifySchema(e, t);
                    if (c && !a.isException(i)) throw new r.TransactionSchemaError(c);
                    const d = o.TransactionTypeFactory.create(i),
                        {
                            version: l
                        } = d.data;
                    return 1 === l && n.Deserializer.applyV1Compatibility(d.data), s.Serializer.serialize(d), this.fromBytes(d.serialized, t)
                }
                static fromSerialized(e, t = !0) {
                    try {
                        const i = n.Deserializer.deserialize(e);
                        i.data.id = c.Utils.getId(i.data);
                        const {
                            value: s,
                            error: o
                        } = u.Verifier.verifySchema(i.data, t);
                        if (o && !a.isException(s)) throw new r.TransactionSchemaError(o);
                        return i.isVerified = i.verify(), i
                    } catch (e) {
                        if (e instanceof r.TransactionVersionError || e instanceof r.TransactionSchemaError || e instanceof r.DuplicateParticipantInMultiSignatureError) throw e;
                        throw new r.InvalidTransactionBytesError(e.message)
                    }
                }
            }
        },
        10309: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5551),
                a = i(5585),
                n = i(6269),
                s = i(5597),
                o = i(6695);
            t.transactionRegistry = new class TransactionRegistry {
                constructor() {
                    this.transactionTypes = new Map, s.TransactionTypeFactory.initialize(this.transactionTypes), this.registerTransactionType(s.TransferTransaction), this.registerTransactionType(s.SecondSignatureRegistrationTransaction), this.registerTransactionType(s.DelegateRegistrationTransaction), this.registerTransactionType(s.VoteTransaction), this.registerTransactionType(s.MultiSignatureRegistrationTransaction), this.registerTransactionType(s.IpfsTransaction), this.registerTransactionType(s.MultiPaymentTransaction), this.registerTransactionType(s.DelegateResignationTransaction), this.registerTransactionType(s.HtlcLockTransaction), this.registerTransactionType(s.HtlcClaimTransaction), this.registerTransactionType(s.HtlcRefundTransaction), n.validator.extendTransaction(s.schemas.multiSignatureLegacy, !1)
                }
                registerTransactionType(e) {
                    const {
                        typeGroup: t,
                        type: i
                    } = e, r = o.InternalTransactionType.from(i, t);
                    if (this.transactionTypes.has(r)) throw new a.TransactionAlreadyRegisteredError(e.name);
                    if (Array.from(this.transactionTypes.values()).some(({
                            key: t
                        }) => t === e.key)) throw new a.TransactionKeyAlreadyRegisteredError(e.key);
                    this.transactionTypes.set(r, e), this.updateSchemas(e)
                }
                deregisterTransactionType(e) {
                    const {
                        typeGroup: t,
                        type: i
                    } = e, n = o.InternalTransactionType.from(i, t);
                    if (!this.transactionTypes.has(n)) throw new a.UnkownTransactionError(n.toString());
                    if (t === r.TransactionTypeGroup.Core) throw new a.CoreTransactionTypeGroupImmutableError;
                    const s = this.transactionTypes.get(n);
                    this.updateSchemas(s, !0), this.transactionTypes.delete(n)
                }
                updateSchemas(e, t) {
                    n.validator.extendTransaction(e.getSchema(), t)
                }
            }
        },
        10312: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        5512: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = r(i(7508)),
                n = i(7512),
                s = i(5868),
                o = i(6673);
            t.Base58 = o.Base58;
            const c = i(5638);
            t.BigNumber = c.BigNumber;
            const u = i(10226);
            t.isLocalHost = u.isLocalHost, t.isValidPeer = u.isValidPeer;
            const d = a.default(e => {
                    const t = new Set,
                        i = s.configManager.get("exceptions.blocks") || [],
                        r = s.configManager.get("exceptions.transactions") || [];
                    for (const e of i) t.add(e);
                    for (const e of r) t.add(e);
                    return t
                }),
                l = a.default(e => {
                    const t = new Set,
                        i = s.configManager.get("genesisBlock.transactions") || [];
                    for (const e of i) t.add(e.id);
                    return t
                });
            t.formatSatoshi = e => `${(+e/n.SATOSHI).toLocaleString("en",{minimumFractionDigits:0,maximumFractionDigits:8})} ${s.configManager.get("network.client.symbol")}`, t.isException = e => {
                const t = s.configManager.get("network");
                return d(t).has(e.id)
            }, t.isGenesisTransaction = e => {
                const t = s.configManager.get("network");
                return l(t).has(e)
            }, t.numberToHex = (e, t = 2) => {
                const i = Number(e).toString(16);
                return "0".repeat(t - i.length) + i
            }, t.maxVendorFieldLength = e => s.configManager.getMilestone(e).vendorFieldLength, t.isSupportedTransactionVersion = e => {
                const t = s.configManager.getMilestone().aip11;
                return (!t || 2 === e) && !(!t && 1 !== e)
            }
        },
        5597: function(e, t, i) {
            "use strict";

            function r(e) {
                for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i])
            }
            var a = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t.default = e, t
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(i(5659)), r(i(10287)), r(i(10288)), r(i(10289)), r(i(10290)), r(i(10291)), r(i(10292)), r(i(10293)), r(i(10294)), r(i(10295)), r(i(10296)), r(i(10297)), r(i(7546)), r(i(6695));
            const n = a(i(5639));
            t.schemas = n
        },
        5638: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(10122);
            t.BigNumber = r.BigNumber
        },
        5639: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(7506),
                a = i(5551),
                n = {
                    anyOf: [{
                        required: ["id", "signature"]
                    }, {
                        required: ["id", "signature", "signatures"]
                    }, {
                        required: ["id", "signatures"]
                    }]
                },
                s = {
                    additionalProperties: !1
                };
            t.transactionBaseSchema = {
                $id: void 0,
                type: "object",
                if: {
                    properties: {
                        version: {
                            anyOf: [{
                                type: "null"
                            }, {
                                const: 1
                            }]
                        }
                    }
                },
                then: {
                    required: ["type", "senderPublicKey", "fee", "amount", "timestamp"]
                },
                else: {
                    required: ["type", "senderPublicKey", "fee", "amount", "nonce"]
                },
                properties: {
                    id: {
                        anyOf: [{
                            $ref: "transactionId"
                        }, {
                            type: "null"
                        }]
                    },
                    version: {
                        enum: [1, 2]
                    },
                    network: {
                        $ref: "networkByte"
                    },
                    timestamp: {
                        type: "integer",
                        minimum: 0
                    },
                    nonce: {
                        bignumber: {
                            minimum: 0
                        }
                    },
                    typeGroup: {
                        type: "integer",
                        minimum: 0
                    },
                    amount: {
                        bignumber: {
                            minimum: 1,
                            bypassGenesis: !0
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 0,
                            bypassGenesis: !0
                        }
                    },
                    senderPublicKey: {
                        $ref: "publicKey"
                    },
                    signature: {
                        $ref: "alphanumeric"
                    },
                    secondSignature: {
                        $ref: "alphanumeric"
                    },
                    signSignature: {
                        $ref: "alphanumeric"
                    },
                    signatures: {
                        type: "array",
                        minItems: 1,
                        maxItems: 16,
                        additionalItems: !1,
                        uniqueItems: !0,
                        items: {
                            allOf: [{
                                minLength: 130,
                                maxLength: 130
                            }, {
                                $ref: "alphanumeric"
                            }]
                        }
                    }
                }
            }, t.extend = (e, t) => r(e, t), t.signedSchema = e => {
                const i = t.extend(e, n);
                return i.$id = e.$id + "Signed", i
            }, t.strictSchema = e => {
                const i = t.signedSchema(e),
                    r = t.extend(i, s);
                return r.$id = e.$id + "Strict", r
            }, t.transfer = t.extend(t.transactionBaseSchema, {
                $id: "transfer",
                required: ["recipientId"],
                properties: {
                    type: {
                        transactionType: a.TransactionType.Transfer
                    },
                    fee: {
                        bignumber: {
                            minimum: 1,
                            bypassGenesis: !0
                        }
                    },
                    vendorField: {
                        anyOf: [{
                            type: "null"
                        }, {
                            type: "string",
                            format: "vendorField"
                        }]
                    },
                    recipientId: {
                        $ref: "address"
                    },
                    expiration: {
                        type: "integer",
                        minimum: 0
                    }
                }
            }), t.secondSignature = t.extend(t.transactionBaseSchema, {
                $id: "secondSignature",
                required: ["asset"],
                properties: {
                    type: {
                        transactionType: a.TransactionType.SecondSignature
                    },
                    amount: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 1
                        }
                    },
                    secondSignature: {
                        type: "null"
                    },
                    asset: {
                        type: "object",
                        required: ["signature"],
                        properties: {
                            signature: {
                                type: "object",
                                required: ["publicKey"],
                                properties: {
                                    publicKey: {
                                        $ref: "publicKey"
                                    }
                                }
                            }
                        }
                    }
                }
            }), t.delegateRegistration = t.extend(t.transactionBaseSchema, {
                $id: "delegateRegistration",
                required: ["asset"],
                properties: {
                    type: {
                        transactionType: a.TransactionType.DelegateRegistration
                    },
                    amount: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 1,
                            bypassGenesis: !0
                        }
                    },
                    asset: {
                        type: "object",
                        required: ["delegate"],
                        properties: {
                            delegate: {
                                type: "object",
                                required: ["username"],
                                properties: {
                                    username: {
                                        $ref: "delegateUsername"
                                    }
                                }
                            }
                        }
                    }
                }
            }), t.vote = t.extend(t.transactionBaseSchema, {
                $id: "vote",
                required: ["asset"],
                properties: {
                    type: {
                        transactionType: a.TransactionType.Vote
                    },
                    amount: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 1
                        }
                    },
                    recipientId: {
                        $ref: "address"
                    },
                    asset: {
                        type: "object",
                        required: ["votes"],
                        properties: {
                            votes: {
                                type: "array",
                                minItems: 1,
                                maxItems: 1,
                                additionalItems: !1,
                                items: {
                                    $ref: "walletVote"
                                }
                            }
                        }
                    }
                }
            }), t.multiSignature = t.extend(t.transactionBaseSchema, {
                $id: "multiSignature",
                required: ["asset", "signatures"],
                properties: {
                    type: {
                        transactionType: a.TransactionType.MultiSignature
                    },
                    amount: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 1
                        }
                    },
                    asset: {
                        type: "object",
                        required: ["multiSignature"],
                        properties: {
                            multiSignature: {
                                type: "object",
                                required: ["min", "publicKeys"],
                                properties: {
                                    min: {
                                        type: "integer",
                                        minimum: 1,
                                        maximum: {
                                            $data: "1/publicKeys/length"
                                        }
                                    },
                                    publicKeys: {
                                        type: "array",
                                        minItems: 1,
                                        maxItems: 16,
                                        additionalItems: !1,
                                        uniqueItems: !0,
                                        items: {
                                            $ref: "publicKey"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    signatures: {
                        type: "array",
                        minItems: {
                            $data: "1/asset/multiSignature/min"
                        },
                        maxItems: {
                            $data: "1/asset/multiSignature/publicKeys/length"
                        },
                        additionalItems: !1,
                        uniqueItems: !0,
                        items: {
                            allOf: [{
                                minLength: 130,
                                maxLength: 130
                            }, {
                                $ref: "alphanumeric"
                            }]
                        }
                    }
                }
            });
            const o = t.extend(t.transactionBaseSchema, {});
            delete o.properties.signatures, t.multiSignatureLegacy = t.extend(o, {
                $id: "multiSignatureLegacy",
                required: ["asset"],
                properties: {
                    version: {
                        anyOf: [{
                            type: "null"
                        }, {
                            const: 1
                        }]
                    },
                    type: {
                        transactionType: a.TransactionType.MultiSignature
                    },
                    amount: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 1
                        }
                    },
                    asset: {
                        type: "object",
                        required: ["multiSignatureLegacy"],
                        properties: {
                            multiSignatureLegacy: {
                                type: "object",
                                required: ["keysgroup", "min", "lifetime"],
                                properties: {
                                    min: {
                                        type: "integer",
                                        minimum: 1,
                                        maximum: {
                                            $data: "1/keysgroup/length"
                                        }
                                    },
                                    lifetime: {
                                        type: "integer",
                                        minimum: 1,
                                        maximum: 72
                                    },
                                    keysgroup: {
                                        type: "array",
                                        minItems: 1,
                                        maxItems: 16,
                                        additionalItems: !1,
                                        items: {
                                            allOf: [{
                                                type: "string",
                                                minimum: 67,
                                                maximum: 67,
                                                transform: ["toLowerCase"]
                                            }]
                                        }
                                    }
                                }
                            }
                        }
                    },
                    signatures: {
                        type: "array",
                        minItems: 1,
                        maxItems: 1,
                        additionalItems: !1,
                        items: {
                            $ref: "alphanumeric"
                        }
                    }
                }
            }), t.ipfs = t.extend(t.transactionBaseSchema, {
                $id: "ipfs",
                properties: {
                    type: {
                        transactionType: a.TransactionType.Ipfs
                    },
                    amount: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 1
                        }
                    },
                    asset: {
                        type: "object",
                        required: ["ipfs"],
                        properties: {
                            ipfs: {
                                allOf: [{
                                    minLength: 2,
                                    maxLength: 90
                                }, {
                                    $ref: "base58"
                                }]
                            }
                        }
                    }
                }
            }), t.htlcLock = t.extend(t.transactionBaseSchema, {
                $id: "htlcLock",
                properties: {
                    type: {
                        transactionType: a.TransactionType.HtlcLock
                    },
                    amount: {
                        bignumber: {
                            minimum: 1
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 1
                        }
                    },
                    recipientId: {
                        $ref: "address"
                    },
                    vendorField: {
                        anyOf: [{
                            type: "null"
                        }, {
                            type: "string",
                            format: "vendorField"
                        }]
                    },
                    asset: {
                        type: "object",
                        required: ["lock"],
                        properties: {
                            lock: {
                                type: "object",
                                required: ["secretHash", "expiration"],
                                properties: {
                                    secretHash: {
                                        allOf: [{
                                            minLength: 64,
                                            maxLength: 64
                                        }, {
                                            $ref: "hex"
                                        }]
                                    },
                                    expiration: {
                                        type: "object",
                                        required: ["type", "value"],
                                        properties: {
                                            type: {
                                                enum: [1, 2]
                                            },
                                            value: {
                                                type: "integer",
                                                minimum: 0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }), t.htlcClaim = t.extend(t.transactionBaseSchema, {
                $id: "htlcClaim",
                properties: {
                    type: {
                        transactionType: a.TransactionType.HtlcClaim
                    },
                    amount: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    asset: {
                        type: "object",
                        required: ["claim"],
                        properties: {
                            claim: {
                                type: "object",
                                required: ["lockTransactionId", "unlockSecret"],
                                properties: {
                                    lockTransactionId: {
                                        $ref: "transactionId"
                                    },
                                    unlockSecret: {
                                        allOf: [{
                                            minLength: 64,
                                            maxLength: 64
                                        }, {
                                            $ref: "hex"
                                        }]
                                    }
                                }
                            }
                        }
                    }
                }
            }), t.htlcRefund = t.extend(t.transactionBaseSchema, {
                $id: "htlcRefund",
                properties: {
                    type: {
                        transactionType: a.TransactionType.HtlcRefund
                    },
                    amount: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    asset: {
                        type: "object",
                        required: ["refund"],
                        properties: {
                            refund: {
                                type: "object",
                                required: ["lockTransactionId"],
                                properties: {
                                    lockTransactionId: {
                                        $ref: "transactionId"
                                    }
                                }
                            }
                        }
                    }
                }
            }), t.multiPayment = t.extend(t.transactionBaseSchema, {
                $id: "multiPayment",
                properties: {
                    type: {
                        transactionType: a.TransactionType.MultiPayment
                    },
                    amount: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 1
                        }
                    },
                    vendorField: {
                        anyOf: [{
                            type: "null"
                        }, {
                            type: "string",
                            format: "vendorField"
                        }]
                    },
                    asset: {
                        type: "object",
                        required: ["payments"],
                        properties: {
                            payments: {
                                type: "array",
                                minItems: 2,
                                additionalItems: !1,
                                uniqueItems: !1,
                                items: {
                                    type: "object",
                                    required: ["amount", "recipientId"],
                                    properties: {
                                        amount: {
                                            bignumber: {
                                                minimum: 1
                                            }
                                        },
                                        recipientId: {
                                            $ref: "address"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }), t.delegateResignation = t.extend(t.transactionBaseSchema, {
                $id: "delegateResignation",
                properties: {
                    type: {
                        transactionType: a.TransactionType.DelegateResignation
                    },
                    amount: {
                        bignumber: {
                            minimum: 0,
                            maximum: 0
                        }
                    },
                    fee: {
                        bignumber: {
                            minimum: 1
                        }
                    }
                }
            })
        },
        5659: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5551),
                a = i(5585),
                n = i(5868),
                s = i(5638),
                o = i(6271);
            class Transaction {
                get id() {
                    return this.data.id
                }
                get type() {
                    return this.data.type
                }
                get typeGroup() {
                    return this.data.typeGroup
                }
                get verified() {
                    return this.isVerified
                }
                get key() {
                    return this.__proto__.constructor.key
                }
                get staticFee() {
                    return this.__proto__.constructor.staticFee({
                        data: this.data
                    })
                }
                static getSchema() {
                    throw new a.NotImplementedError
                }
                static staticFee(e = {}) {
                    const t = n.configManager.getMilestone(e.height);
                    if (t.fees && t.fees.staticFees) {
                        const e = t.fees.staticFees[this.key];
                        if (void 0 !== e) return s.BigNumber.make(e)
                    }
                    return this.defaultStaticFee
                }
                verify() {
                    return o.Verifier.verify(this.data)
                }
                verifySecondSignature(e) {
                    return o.Verifier.verifySecondSignature(this.data, e)
                }
                verifySchema() {
                    return o.Verifier.verifySchema(this.data)
                }
                toJson() {
                    const e = JSON.parse(JSON.stringify(this.data));
                    return e.typeGroup === r.TransactionTypeGroup.Core && delete e.typeGroup, 1 === e.version ? delete e.nonce : delete e.timestamp, e
                }
                hasVendorField() {
                    return !1
                }
            }
            t.Transaction = Transaction, Transaction.type = void 0, Transaction.typeGroup = void 0, Transaction.key = void 0, Transaction.defaultStaticFee = s.BigNumber.ZERO
        },
        5660: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(6270),
                a = i(5707),
                n = i(5551),
                s = i(5585),
                o = i(5708),
                c = i(5868),
                u = i(5512),
                d = i(7547),
                l = i(6271);
            t.TransactionBuilder = class TransactionBuilder {
                constructor() {
                    this.signWithSenderAsRecipient = !1, this.data = {
                        id: void 0,
                        timestamp: a.Slots.getTime(),
                        typeGroup: n.TransactionTypeGroup.Test,
                        nonce: u.BigNumber.ZERO,
                        version: c.configManager.getMilestone().aip11 ? 2 : 1
                    }
                }
                build(e = {}) {
                    return r.TransactionFactory.fromData({
                        ...this.data,
                        ...e
                    }, !1)
                }
                version(e) {
                    return this.data.version = e, this.instance()
                }
                typeGroup(e) {
                    return this.data.typeGroup = e, this.instance()
                }
                nonce(e) {
                    return e && (this.data.nonce = u.BigNumber.make(e)), this.instance()
                }
                network(e) {
                    return this.data.network = e, this.instance()
                }
                fee(e) {
                    return e && (this.data.fee = u.BigNumber.make(e)), this.instance()
                }
                amount(e) {
                    return this.data.amount = u.BigNumber.make(e), this.instance()
                }
                recipientId(e) {
                    return this.data.recipientId = e, this.instance()
                }
                senderPublicKey(e) {
                    return this.data.senderPublicKey = e, this.instance()
                }
                vendorField(e) {
                    const t = u.maxVendorFieldLength();
                    if (e) {
                        if (Buffer.from(e).length > t) throw new s.VendorFieldLengthExceededError(t);
                        this.data.vendorField = e
                    }
                    return this.instance()
                }
                sign(e) {
                    const t = o.Keys.fromPassphrase(e);
                    return this.signWithKeyPair(t)
                }
                signWithWif(e, t) {
                    const i = o.Keys.fromWIF(e, {
                        wif: t || c.configManager.get("network.wif")
                    });
                    return this.signWithKeyPair(i)
                }
                secondSign(e) {
                    return this.secondSignWithKeyPair(o.Keys.fromPassphrase(e))
                }
                secondSignWithWif(e, t) {
                    const i = o.Keys.fromWIF(e, {
                        wif: t || c.configManager.get("network.wif")
                    });
                    return this.secondSignWithKeyPair(i)
                }
                multiSign(e, t) {
                    const i = o.Keys.fromPassphrase(e);
                    return this.multiSignWithKeyPair(t, i)
                }
                multiSignWithWif(e, t, i) {
                    const r = o.Keys.fromWIF(t, {
                        wif: i || c.configManager.get("network.wif")
                    });
                    return this.multiSignWithKeyPair(e, r)
                }
                verify() {
                    return l.Verifier.verifyHash(this.data)
                }
                getStruct() {
                    if (!this.data.senderPublicKey || !this.data.signature && !this.data.signatures) throw new s.MissingTransactionSignatureError;
                    const e = {
                        id: r.Utils.getId(this.data).toString(),
                        signature: this.data.signature,
                        secondSignature: this.data.secondSignature,
                        version: this.data.version,
                        type: this.data.type,
                        fee: this.data.fee,
                        senderPublicKey: this.data.senderPublicKey,
                        network: this.data.network
                    };
                    return 1 === this.data.version ? e.timestamp = this.data.timestamp : (e.typeGroup = this.data.typeGroup, e.nonce = this.data.nonce), Array.isArray(this.data.signatures) && (e.signatures = this.data.signatures), e
                }
                signWithKeyPair(e) {
                    return this.data.senderPublicKey = e.publicKey, this.signWithSenderAsRecipient && (this.data.recipientId = o.Address.fromPublicKey(e.publicKey, this.data.network)), this.data.signature = d.Signer.sign(this.getSigningObject(), e), this.instance()
                }
                secondSignWithKeyPair(e) {
                    return this.data.secondSignature = d.Signer.secondSign(this.getSigningObject(), e), this.instance()
                }
                multiSignWithKeyPair(e, t) {
                    return this.data.signatures || (this.data.signatures = []), this.version(2), d.Signer.multiSign(this.getSigningObject(), t, e), this.instance()
                }
                getSigningObject() {
                    const e = {
                        ...this.data
                    };
                    for (const t of Object.keys(e))["model", "network", "id"].includes(t) && delete e[t];
                    return e
                }
            }
        },
        6269: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = r(i(10228)),
                n = r(i(7544)),
                s = i(5639),
                o = i(10282),
                c = i(10283),
                u = i(10284);
            class Validator {
                constructor(e) {
                    this.transactionSchemas = new Map, this.ajv = this.instantiateAjv(e)
                }
                static make(e = {}) {
                    return new Validator(e)
                }
                getInstance() {
                    return this.ajv
                }
                validate(e, t) {
                    return this.validateSchema(this.ajv, e, t)
                }
                validateException(e, t) {
                    const i = this.instantiateAjv({
                        allErrors: !0,
                        verbose: !0
                    });
                    for (const e of this.transactionSchemas.values()) this.extendTransactionSchema(i, e);
                    return this.validateSchema(i, e, t)
                }
                addFormat(e, t) {
                    this.ajv.addFormat(e, t)
                }
                addKeyword(e, t) {
                    this.ajv.addKeyword(e, t)
                }
                addSchema(e, t) {
                    this.ajv.addSchema(e, t)
                }
                removeKeyword(e) {
                    this.ajv.removeKeyword(e)
                }
                removeSchema(e) {
                    this.ajv.removeSchema(e)
                }
                extendTransaction(e, t) {
                    this.extendTransactionSchema(this.ajv, e, t)
                }
                validateSchema(e, t, i) {
                    try {
                        e.validate(t, i);
                        return {
                            value: i,
                            error: e.errors ? e.errorsText() : void 0,
                            errors: e.errors
                        }
                    } catch (e) {
                        return {
                            value: void 0,
                            error: e.stack,
                            errors: []
                        }
                    }
                }
                instantiateAjv(e) {
                    const t = new a.default({
                        $data: !0,
                        schemas: u.schemas,
                        removeAdditional: !0,
                        extendRefs: !0,
                        ...e
                    });
                    n.default(t);
                    for (const e of c.keywords) e(t);
                    for (const e of o.formats) e(t);
                    return t
                }
                extendTransactionSchema(e, t, i) {
                    i ? (this.transactionSchemas.delete(t.$id), e.removeSchema(t.$id), e.removeSchema(t.$id + "Signed"), e.removeSchema(t.$id + "Strict")) : (this.transactionSchemas.set(t.$id, t), e.addSchema(t), e.addSchema(s.signedSchema(t)), e.addSchema(s.strictSchema(t))), this.updateTransactionArray(e)
                }
                updateTransactionArray(e) {
                    e.removeSchema("block"), e.removeSchema("transactions"), e.addSchema({
                        $id: "transactions",
                        type: "array",
                        additionalItems: !1,
                        items: {
                            anyOf: [...this.transactionSchemas.keys()].map(e => ({
                                $ref: e + "Signed"
                            }))
                        }
                    }), e.addSchema(u.schemas.block)
                }
            }
            t.Validator = Validator, t.validator = Validator.make()
        },
        6270: function(e, t, i) {
            "use strict";

            function r(e) {
                for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(i(10285)), r(i(7548)), r(i(10308)), r(i(6694)), r(i(7547)), r(i(5597)), r(i(6272)), r(i(6271));
            var a = i(10309);
            t.TransactionRegistry = a.transactionRegistry
        },
        6271: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(6674),
                a = i(5585),
                n = i(5550),
                s = i(5512),
                o = i(6269),
                c = i(5597),
                u = i(6272);
            class Verifier {
                static verify(e) {
                    return !!s.isException(e) || !(n.configManager.getMilestone().aip11 && (!e.version || 1 === e.version)) && Verifier.verifyHash(e)
                }
                static verifySecondSignature(e, t) {
                    const i = e.secondSignature || e.signSignature;
                    if (!i) return !1;
                    const r = u.Utils.toHash(e, {
                        excludeSecondSignature: !0
                    });
                    return this.internalVerifySignature(r, i, t)
                }
                static verifySignatures(e, t) {
                    if (!t) throw new a.InvalidMultiSignatureAssetError;
                    const {
                        publicKeys: i,
                        min: n
                    } = t, {
                        signatures: s
                    } = e, o = u.Utils.toHash(e, {
                        excludeSignature: !0,
                        excludeSecondSignature: !0,
                        excludeMultiSignature: !0
                    }), c = {};
                    let d = !1,
                        l = 0;
                    for (let e = 0; e < s.length; e++) {
                        const t = s[e],
                            u = parseInt(t.slice(0, 2), 16);
                        if (c[u]) throw new a.DuplicateParticipantInMultiSignatureError;
                        c[u] = !0;
                        const p = t.slice(2, 130),
                            m = i[u];
                        if (r.Hash.verifySchnorr(o, p, m) && l++, l === n) {
                            d = !0;
                            break
                        }
                        if (s.length - (e + 1 - l) < n) break
                    }
                    return d
                }
                static verifyHash(e) {
                    const {
                        signature: t,
                        senderPublicKey: i
                    } = e;
                    if (!t) return !1;
                    const r = u.Utils.toHash(e, {
                        excludeSignature: !0,
                        excludeSecondSignature: !0
                    });
                    return this.internalVerifySignature(r, t, i)
                }
                static verifySchema(e, t = !0) {
                    const {
                        $id: i
                    } = c.TransactionTypeFactory.get(e.type, e.typeGroup).getSchema();
                    return o.validator.validate(t ? i + "Strict" : "" + i, e)
                }
                static internalVerifySignature(e, t, i) {
                    return 64 === Buffer.from(t, "hex").byteLength ? r.Hash.verifySchnorr(e, t, i) : r.Hash.verifyECDSA(e, t, i)
                }
            }
            t.Verifier = Verifier
        },
        6272: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5707),
                a = i(5585),
                n = i(5550),
                s = i(5512),
                o = i(6694),
                c = i(7546);
            class Utils {
                static toBytes(e) {
                    return o.Serializer.serialize(c.TransactionTypeFactory.create(e))
                }
                static toHash(e, t) {
                    return r.HashAlgorithms.sha256(o.Serializer.getBytes(e, t))
                }
                static getId(e, t = {}) {
                    const i = Utils.toHash(e, t).toString("hex");
                    if (t.addressError && !s.isException({
                            id: i
                        })) throw new a.AddressNetworkError(t.addressError);
                    const {
                        transactionIdFixTable: r
                    } = n.configManager.get("exceptions");
                    return r && r[i] ? r[i] : i
                }
            }
            t.Utils = Utils
        },
        6673: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = i(7507),
                n = r(i(7508)),
                s = i(5707);
            t.Base58 = {
                encodeCheck: n.default(e => {
                    const t = s.HashAlgorithms.hash256(e);
                    return a.base58.encode(Buffer.concat([e, t], e.length + 4))
                }),
                decodeCheck: n.default(e => {
                    const t = a.base58.decode(e),
                        i = t.slice(0, -4);
                    if (s.HashAlgorithms.hash256(i).readUInt32LE(0) !== t.slice(-4).readUInt32LE(0)) throw new Error("Invalid checksum");
                    return i
                })
            }
        },
        6694: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = r(i(2337)),
                n = i(6656),
                s = i(5551),
                o = i(5585),
                c = i(5708),
                u = i(5868),
                d = i(5512),
                l = i(5597);
            t.Serializer = class Serializer {
                static getBytes(e, t = {}) {
                    const i = e.version || 1;
                    if (t.acceptLegacyVersion || d.isSupportedTransactionVersion(i)) return 1 === i ? this.getBytesV1(e, t) : this.serialize(l.TransactionTypeFactory.create(e), t);
                    throw new o.TransactionVersionError(i)
                }
                static serialize(e, t = {}) {
                    const i = new a.default(512, !0);
                    this.serializeCommon(e.data, i), this.serializeVendorField(e, i);
                    const r = e.serialize(t).flip();
                    i.append(r), this.serializeSignatures(e.data, i, t);
                    const n = i.flip().toBuffer();
                    return e.serialized = n, n
                }
                static getBytesV1(e, t = {}) {
                    let i, r = 0;
                    switch (e.type) {
                        case s.TransactionType.SecondSignature: {
                            const {
                                signature: t
                            } = e.asset, n = new a.default(33, !0), s = Buffer.from(t.publicKey, "hex");
                            for (const e of s) n.writeByte(e);
                            n.flip(), i = new Uint8Array(n.toArrayBuffer()), r = i.length;
                            break
                        }
                        case s.TransactionType.DelegateRegistration:
                            i = Buffer.from(e.asset.delegate.username, "utf8"), r = i.length;
                            break;
                        case s.TransactionType.Vote:
                            e.asset.votes && (i = Buffer.from(e.asset.votes.join(""), "utf8"), r = i.length);
                            break;
                        case s.TransactionType.MultiSignature: {
                            const t = Buffer.from(e.asset.multiSignatureLegacy.keysgroup.join(""), "utf8"),
                                n = new a.default(2 + t.length, !0);
                            n.writeByte(e.asset.multiSignatureLegacy.min), n.writeByte(e.asset.multiSignatureLegacy.lifetime);
                            for (const e of t) n.writeByte(e);
                            n.flip(), i = n.toBuffer(), r = i.length;
                            break
                        }
                    }
                    const n = new a.default(266 + r, !0);
                    n.writeByte(e.type), n.writeInt(e.timestamp);
                    const o = Buffer.from(e.senderPublicKey, "hex");
                    for (const e of o) n.writeByte(e);
                    const {
                        transactionIdFixTable: d
                    } = u.configManager.get("exceptions");
                    if (d && Object.values(d).includes(e.id) || e.recipientId && 1 !== e.type && 4 !== e.type) {
                        const t = e.recipientId || c.Address.fromPublicKey(e.senderPublicKey, e.network),
                            i = c.Address.toBuffer(t).addressBuffer;
                        for (const e of i) n.writeByte(e)
                    } else
                        for (let e = 0; e < 21; e++) n.writeByte(0);
                    if (e.vendorField) {
                        const t = Buffer.from(e.vendorField),
                            i = t.length;
                        for (let e = 0; e < i; e++) n.writeByte(t[e]);
                        for (let e = i; e < 64; e++) n.writeByte(0)
                    } else
                        for (let e = 0; e < 64; e++) n.writeByte(0);
                    if (n.writeInt64(e.amount.toString()), n.writeInt64(e.fee.toString()), r > 0)
                        for (let e = 0; e < r; e++) n.writeByte(i[e]);
                    if (!t.excludeSignature && e.signature) {
                        const t = Buffer.from(e.signature, "hex");
                        for (const e of t) n.writeByte(e)
                    }
                    if (!t.excludeSecondSignature && e.secondSignature) {
                        const t = Buffer.from(e.secondSignature, "hex");
                        for (const e of t) n.writeByte(e)
                    }
                    n.flip();
                    const l = new Uint8Array(n.toArrayBuffer()),
                        p = [];
                    for (let e = 0; e < l.length; e++) p[e] = l[e];
                    return Buffer.from(p)
                }
                static serializeCommon(e, t) {
                    e.version = e.version || 1, void 0 === e.typeGroup && (e.typeGroup = s.TransactionTypeGroup.Core), t.writeByte(255), t.writeByte(e.version), t.writeByte(e.network || u.configManager.get("network.pubKeyHash")), 1 === e.version ? (t.writeByte(e.type), t.writeUint32(e.timestamp)) : (t.writeUint32(e.typeGroup), t.writeUint16(e.type), t.writeUint64(e.nonce.toString())), t.append(e.senderPublicKey, "hex"), t.writeUint64(e.fee.toString())
                }
                static serializeVendorField(e, t) {
                    if (e.hasVendorField()) {
                        const {
                            data: i
                        } = e;
                        if (i.vendorField) {
                            const e = Buffer.from(i.vendorField, "utf8");
                            t.writeByte(e.length), t.append(e)
                        } else t.writeByte(0)
                    } else t.writeByte(0)
                }
                static serializeSignatures(e, t, i = {}) {
                    e.signature && !i.excludeSignature && t.append(e.signature, "hex");
                    const r = e.secondSignature || e.signSignature;
                    r && !i.excludeSecondSignature && t.append(r, "hex"), e.signatures && (1 === e.version && n.Utils.isException(e) ? (t.append("ff", "hex"), t.append(e.signatures.join(""), "hex")) : i.excludeMultiSignature || t.append(e.signatures.join(""), "hex"))
                }
            }
        },
        6695: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5551);
            class InternalTransactionType {
                constructor(e, t) {
                    this.type = e, this.typeGroup = t
                }
                static from(e, t) {
                    void 0 === t && (t = r.TransactionTypeGroup.Core);
                    const i = `${t}-${e}`;
                    return this.types.has(i) || this.types.set(i, new InternalTransactionType(e, t)), this.types.get(i)
                }
                toString() {
                    return this.typeGroup === r.TransactionTypeGroup.Core ? "Core/" + this.type : `${this.typeGroup}/${this.type}`
                }
            }
            t.InternalTransactionType = InternalTransactionType, InternalTransactionType.types = new Map
        },
        7546: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5585),
                a = i(6695);
            t.TransactionTypeFactory = class TransactionTypeFactory {
                static initialize(e) {
                    this.transactionTypes = e
                }
                static create(e) {
                    const t = new(this.get(e.type, e.typeGroup));
                    return t.data = e, t.data.version = e.version || 1, t
                }
                static get(e, t) {
                    const i = a.InternalTransactionType.from(e, t);
                    if (this.transactionTypes.has(i)) return this.transactionTypes.get(i);
                    throw new r.UnkownTransactionError(i.toString())
                }
            }
        },
        7547: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5707),
                a = i(5512),
                n = i(6272);
            t.Signer = class Signer {
                static sign(e, t, i) {
                    i = i || {
                        excludeSignature: !0,
                        excludeSecondSignature: !0
                    };
                    const a = n.Utils.toHash(e, i),
                        s = e.version > 1 ? r.Hash.signSchnorr(a, t) : r.Hash.signECDSA(a, t);
                    return e.signature || i.excludeMultiSignature || (e.signature = s), s
                }
                static secondSign(e, t) {
                    const i = n.Utils.toHash(e, {
                            excludeSecondSignature: !0
                        }),
                        a = e.version > 1 ? r.Hash.signSchnorr(i, t) : r.Hash.signECDSA(i, t);
                    return e.secondSignature || (e.secondSignature = a), a
                }
                static multiSign(e, t, i = -1) {
                    e.signatures || (e.signatures = []), i = -1 === i ? e.signatures.length : i;
                    const s = n.Utils.toHash(e, {
                            excludeSignature: !0,
                            excludeSecondSignature: !0,
                            excludeMultiSignature: !0
                        }),
                        o = r.Hash.signSchnorr(s, t),
                        c = `${a.numberToHex(i)}${o}`;
                    return e.signatures.push(c), c
                }
            }
        },
        7548: function(e, t, i) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = r(i(2337)),
                n = i(5551),
                s = i(5585),
                o = i(5708),
                c = i(5512),
                u = i(5597);
            t.Deserializer = class Deserializer {
                static deserialize(e, t = {}) {
                    const i = {},
                        r = this.getByteBuffer(e);
                    this.deserializeCommon(i, r);
                    const a = u.TransactionTypeFactory.create(i);
                    if (this.deserializeVendorField(a, r), a.deserialize(r), this.deserializeSignatures(i, r), !t.acceptLegacyVersion && !c.isSupportedTransactionVersion(i.version)) throw new s.TransactionVersionError(i.version);
                    return 1 === i.version && this.applyV1Compatibility(i), a.serialized = r.flip().toBuffer(), a
                }
                static deserializeCommon(e, t) {
                    t.skip(1), e.version = t.readUint8(), e.network = t.readUint8(), 1 === e.version ? (e.type = t.readUint8(), e.timestamp = t.readUint32()) : (e.typeGroup = t.readUint32(), e.type = t.readUint16(), e.nonce = c.BigNumber.make(t.readUint64().toString())), e.senderPublicKey = t.readBytes(33).toString("hex"), e.fee = c.BigNumber.make(t.readUint64().toString()), e.amount = c.BigNumber.ZERO
                }
                static deserializeVendorField(e, t) {
                    const i = t.readUint8();
                    if (i > 0)
                        if (e.hasVendorField()) {
                            const r = t.readBytes(i).toBuffer();
                            e.data.vendorField = r.toString("utf8")
                        } else t.skip(i)
                }
                static deserializeSignatures(e, t) {
                    1 === e.version ? this.deserializeECDSA(e, t) : this.deserializeSchnorrOrECDSA(e, t)
                }
                static deserializeSchnorrOrECDSA(e, t) {
                    this.detectSchnorr(t) ? this.deserializeSchnorr(e, t) : this.deserializeECDSA(e, t)
                }
                static deserializeECDSA(e, t) {
                    const i = () => {
                        t.mark();
                        const e = t.skip(1).readBytes(1).toString("hex");
                        return t.reset(), parseInt(e, 16) + 2
                    };
                    if (t.remaining()) {
                        const r = i();
                        e.signature = t.readBytes(r).toString("hex")
                    }
                    const r = () => {
                        t.mark();
                        const e = t.readUint8();
                        return t.reset(), 255 === e
                    };
                    if (t.remaining() && !r()) {
                        const r = i();
                        e.secondSignature = t.readBytes(r).toString("hex")
                    }
                    if (t.remaining() && r()) {
                        t.skip(1);
                        const i = t.readBytes(t.limit - t.offset).toString("hex");
                        e.signatures = [i]
                    }
                    if (t.remaining()) throw new s.InvalidTransactionBytesError("signature buffer not exhausted")
                }
                static deserializeSchnorr(e, t) {
                    const i = () => t.remaining() && (t.remaining() % 64 == 0 || t.remaining() % 65 != 0);
                    if (i() && (e.signature = t.readBytes(64).toString("hex")), i() && (e.secondSignature = t.readBytes(64).toString("hex")), t.remaining()) {
                        if (t.remaining() % 65 != 0) throw new s.InvalidTransactionBytesError("signature buffer not exhausted");
                        {
                            e.signatures = [];
                            const i = t.remaining() / 65,
                                r = {};
                            for (let a = 0; a < i; a++) {
                                const i = t.readBytes(65).toString("hex"),
                                    a = parseInt(i.slice(0, 2), 16);
                                if (r[a]) throw new s.DuplicateParticipantInMultiSignatureError;
                                r[a] = !0, e.signatures.push(i)
                            }
                        }
                    }
                }
                static detectSchnorr(e) {
                    const t = e.remaining();
                    return 64 === t || 128 === t || (t % 65 == 0 || ((t - 64) % 65 == 0 || (t - 128) % 65 == 0))
                }
                static applyV1Compatibility(e) {
                    e.secondSignature = e.secondSignature || e.signSignature, e.typeGroup = n.TransactionTypeGroup.Core, e.type === n.TransactionType.Vote ? e.recipientId = o.Address.fromPublicKey(e.senderPublicKey, e.network) : e.type === n.TransactionType.MultiSignature && (e.asset.multiSignatureLegacy.keysgroup = e.asset.multiSignatureLegacy.keysgroup.map(e => e.startsWith("+") ? e : "+" + e))
                }
                static getByteBuffer(e) {
                    e instanceof Buffer || (e = Buffer.from(e, "hex"));
                    const t = new a.default(e.length, !0);
                    return t.append(e), t.reset(), t
                }
            }
        }
    }
]);