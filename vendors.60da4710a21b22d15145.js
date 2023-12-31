(window.webpackJsonp = window.webpackJsonp || []).push([
    [264], {
        5595: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
                }(r(9692))
        },
        5617: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.factory = function(e) {
                return function(t) {
                    var r = [],
                        n = Object.entries(e).reduce((function(e, n) {
                            var s, i = n[0],
                                o = n[1];
                            try {
                                var a = o(t);
                                return Object.assign(e, ((s = {})[i] = a, s))
                            } catch (e) {
                                r.push({
                                    path: i,
                                    message: e.message
                                })
                            }
                        }), Object.create(null));
                    if (r.length) throw new Error("Errors: " + JSON.stringify(r, null, 4));
                    return n
                }
            }
        },
        5618: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(5595),
                s = r(7401),
                i = function(e) {
                    return e || Date.now()
                };
            t.getDefaultTransform = function() {
                return {
                    type: n.pipe(n.prop("type"), s.validate(s.requiredValidator("type"))),
                    version: n.pipe(n.prop("version"), s.validate(s.requiredValidator("version"))),
                    senderPublicKey: n.pipe(n.prop("senderPublicKey"), s.validate(s.requiredValidator("senderPublicKey"))),
                    timestamp: n.pipe(n.prop("timestamp"), i),
                    fee: n.pipe(n.prop("fee"), n.getCoins, s.validate(s.requiredValidator("fee")))
                }
            }
        },
        6082: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(6258),
                s = r(6655),
                i = r(9958),
                o = r(7469);
            var a;
            ! function(e) {
                e[e.GENESIS = 1] = "GENESIS", e[e.PAYMENT = 2] = "PAYMENT", e[e.ISSUE = 3] = "ISSUE", e[e.TRANSFER = 4] = "TRANSFER", e[e.REISSUE = 5] = "REISSUE", e[e.BURN = 6] = "BURN", e[e.EXCHANGE = 7] = "EXCHANGE", e[e.LEASE = 8] = "LEASE", e[e.CANCEL_LEASE = 9] = "CANCEL_LEASE", e[e.ALIAS = 10] = "ALIAS", e[e.MASS_TRANSFER = 11] = "MASS_TRANSFER", e[e.DATA = 12] = "DATA", e[e.SET_SCRIPT = 13] = "SET_SCRIPT", e[e.SPONSORSHIP = 14] = "SPONSORSHIP", e[e.SET_ASSET_SCRIPT = 15] = "SET_ASSET_SCRIPT", e[e.INVOKE_SCRIPT = 16] = "INVOKE_SCRIPT"
            }(a = t.TRANSACTION_TYPE || (t.TRANSACTION_TYPE = {}));
            const c = {
                    toBytes: n.SHORT,
                    fromBytes: s.P_SHORT
                },
                u = {
                    toBytes: n.INT,
                    fromBytes: s.P_INT
                };
            var l;
            ! function(e) {
                e.longField = e => [e, {
                    toBytes: n.LONG,
                    fromBytes: s.P_LONG
                }], e.byteField = e => [e, {
                    toBytes: n.BYTE,
                    fromBytes: s.P_BYTE
                }], e.booleanField = e => [e, {
                    toBytes: n.BOOL,
                    fromBytes: s.P_BOOLEAN
                }], e.stringField = e => [e, {
                    toBytes: n.LEN(n.SHORT)(n.STRING),
                    fromBytes: s.P_STRING_VAR(s.P_SHORT)
                }], e.base58field32 = e => [e, {
                    toBytes: n.BASE58_STRING,
                    fromBytes: s.P_BASE58_FIXED(32)
                }], e.base58Option32 = e => [e, {
                    toBytes: e => "WAVES" === e ? n.OPTION(n.BASE58_STRING)(null) : n.OPTION(n.BASE58_STRING)(e),
                    fromBytes: s.P_OPTION(s.P_BASE58_FIXED(32))
                }], e.base64field = e => [e, {
                    toBytes: n.LEN(n.SHORT)(n.BASE64_STRING),
                    fromBytes: s.P_BASE64(s.P_SHORT)
                }], e.byteConstant = e => ["noname", {
                    toBytes: () => Uint8Array.from([e]),
                    fromBytes: () => ({
                        value: void 0,
                        shift: 1
                    })
                }], e.alias = ["alias", {
                    toBytes: n.LEN(n.SHORT)(n.STRING),
                    fromBytes: s.byteNewAliasToString
                }], e.amount = e.longField("amount"), e.assetDescription = e.stringField("description"), e.assetId = e.base58field32("assetId"), e.assetName = e.stringField("name"), e.attachment = ["attachment", {
                    toBytes: n.LEN(n.SHORT)(n.BASE58_STRING),
                    fromBytes: s.P_BASE58_VAR(s.P_SHORT)
                }], e.chainId = e.byteField("chainId"), e.decimals = e.byteField("decimals"), e.fee = e.longField("fee"), e.leaseAssetId = e.base58Option32("leaseAssetId"), e.leaseId = e.base58field32("leaseId"), e.optionalAssetId = e.base58Option32("assetId"), e.quantity = e.longField("quantity"), e.reissuable = e.booleanField("reissuable"), e.recipient = ["recipient", {
                    toBytes: n.ADDRESS_OR_ALIAS,
                    fromBytes: s.byteToAddressOrAlias
                }], e.script = ["script", {
                    toBytes: n.SCRIPT,
                    fromBytes: s.byteToScript
                }], e.senderPublicKey = e.base58field32("senderPublicKey"), e.signature = ["signature", {
                    toBytes: n.BASE58_STRING,
                    fromBytes: s.P_BASE58_FIXED(64)
                }], e.timestamp = e.longField("timestamp"), e.type = e.byteField("type"), e.version = e.byteField("version"), e.proofs = ["proofs", {
                    type: "array",
                    items: {
                        toBytes: n.LEN(n.SHORT)(n.BASE58_STRING),
                        fromBytes: s.P_BASE58_VAR(s.P_SHORT)
                    }
                }];
                const t = {
                    type: "object",
                    schema: [e.recipient, e.amount]
                };
                e.transfers = ["transfers", {
                    type: "array",
                    items: t
                }];
                const r = {
                    type: "dataTxField",
                    items: new Map([
                        [i.DATA_FIELD_TYPE.INTEGER, {
                            toBytes: n.LONG,
                            fromBytes: s.P_LONG
                        }],
                        [i.DATA_FIELD_TYPE.BOOLEAN, {
                            toBytes: n.BOOL,
                            fromBytes: s.P_BOOLEAN
                        }],
                        [i.DATA_FIELD_TYPE.BINARY, {
                            toBytes: n.LEN(n.SHORT)(n.BASE64_STRING),
                            fromBytes: s.P_BASE64(s.P_SHORT)
                        }],
                        [i.DATA_FIELD_TYPE.STRING, {
                            toBytes: n.LEN(n.SHORT)(n.STRING),
                            fromBytes: s.P_STRING_VAR(s.P_SHORT)
                        }]
                    ])
                };
                e.data = ["data", {
                    type: "array",
                    items: r
                }];
                const o = [
                        [0, {
                            toBytes: n.LONG,
                            fromBytes: s.P_LONG
                        }, "integer"],
                        [1, {
                            toBytes: n.LEN(n.INT)(n.BASE64_STRING),
                            fromBytes: s.P_BASE64(s.P_INT)
                        }, "binary"],
                        [2, {
                            toBytes: n.LEN(n.INT)(n.STRING),
                            fromBytes: s.P_STRING_VAR(s.P_INT)
                        }, "string"],
                        [6, {
                            toBytes: () => Uint8Array.from([]),
                            fromBytes: () => ({
                                value: !0,
                                shift: 0
                            })
                        }, "boolean"],
                        [7, {
                            toBytes: () => Uint8Array.from([]),
                            fromBytes: () => ({
                                value: !1,
                                shift: 0
                            })
                        }, "boolean"]
                    ],
                    a = i.anyOf([...o, [11, {
                        type: "array",
                        toBytes: n.INT,
                        fromBytes: s.P_INT,
                        items: i.anyOf(o, {
                            valueField: "value"
                        })
                    }, "list"]], {
                        valueField: "value"
                    });
                e.functionCall = ["call", {
                    type: "object",
                    optional: !0,
                    schema: [e.byteConstant(9), e.byteConstant(1), ["function", {
                            toBytes: n.LEN(n.INT)(n.STRING),
                            fromBytes: s.P_STRING_VAR(s.P_INT)
                        }],
                        ["args", {
                            type: "array",
                            toBytes: n.INT,
                            fromBytes: s.P_INT,
                            items: a
                        }]
                    ]
                }], e.payment = {
                    type: "object",
                    withLength: c,
                    schema: [e.amount, e.optionalAssetId]
                }, e.payments = ["payment", {
                    type: "array",
                    items: e.payment
                }]
            }(l = t.txFields || (t.txFields = {})), t.orderSchemaV1 = {
                type: "object",
                schema: [l.senderPublicKey, l.base58field32("matcherPublicKey"), ["assetPair", {
                        type: "object",
                        schema: [l.base58Option32("amountAsset"), l.base58Option32("priceAsset")]
                    }],
                    ["orderType", {
                        toBytes: e => n.BYTE("sell" === e ? 1 : 0),
                        fromBytes: (e, t = 0) => 1 === s.P_BYTE(e, t).value ? {
                            value: "sell",
                            shift: 1
                        } : {
                            value: "buy",
                            shift: 1
                        }
                    }], l.longField("price"), l.longField("amount"), l.timestamp, l.longField("expiration"), l.longField("matcherFee")
                ]
            }, t.orderSchemaV2 = {
                type: "object",
                schema: [l.version, ...t.orderSchemaV1.schema]
            }, t.orderSchemaV3 = {
                type: "object",
                schema: [...t.orderSchemaV2.schema, ["matcherFeeAssetId", l.optionalAssetId[1]]]
            }, t.aliasSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.senderPublicKey, [
                    ["alias", "chainId"], {
                        type: "object",
                        withLength: c,
                        schema: [l.byteConstant(2), l.chainId, l.alias]
                    }
                ], l.fee, l.timestamp]
            }, t.burnSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.assetId, l.amount, l.fee, l.timestamp]
            }, t.cancelLeaseSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.fee, l.timestamp, l.leaseId]
            }, t.invokeScriptSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, ["dApp", l.recipient[1]], l.functionCall, l.payments, l.fee, ["feeAssetId", l.optionalAssetId[1]], l.timestamp]
            }, t.dataSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.senderPublicKey, l.data, l.timestamp, l.fee]
            }, t.proofsSchemaV0 = {
                type: "object",
                schema: [
                    ["signature", {
                        toBytes: n.BASE58_STRING,
                        fromBytes: s.P_BASE58_FIXED(64)
                    }]
                ]
            }, t.proofsSchemaV1 = {
                type: "object",
                schema: [l.byteConstant(1), l.proofs]
            };
            const p = {
                type: "object",
                schema: [...t.orderSchemaV1.schema, l.signature]
            };
            t.exchangeSchemaV1 = {
                type: "object",
                schema: [l.type, ["order1", {
                        fromBytes: () => ({
                            value: void 0,
                            shift: 4
                        }),
                        toBytes: e => n.INT(o.serializerFromSchema(p)(e).length)
                    }],
                    ["order2", {
                        fromBytes: () => ({
                            value: void 0,
                            shift: 4
                        }),
                        toBytes: e => n.INT(o.serializerFromSchema(p)(e).length)
                    }],
                    ["order1", p],
                    ["order2", p], l.longField("price"), l.longField("amount"), l.longField("buyMatcherFee"), l.longField("sellMatcherFee"), l.longField("fee"), l.longField("timestamp")
                ]
            };
            const f = i.anyOf([
                [1, {
                    type: "object",
                    withLength: {
                        toBytes: e => n.INT(e - 1),
                        fromBytes: e => {
                            const {
                                value: t,
                                shift: r
                            } = s.P_INT(e);
                            return {
                                value: t + 1,
                                shift: r
                            }
                        }
                    },
                    schema: [l.byteConstant(1), ...t.orderSchemaV1.schema, ...t.proofsSchemaV0.schema]
                }],
                [2, {
                    type: "object",
                    withLength: u,
                    schema: [...t.orderSchemaV2.schema, ...t.proofsSchemaV1.schema]
                }]
            ], {
                discriminatorField: "version",
                discriminatorBytePos: 4
            });
            t.exchangeSchemaV2 = {
                type: "object",
                schema: [l.byteConstant(0), l.type, l.version, ["order1", f],
                    ["order2", f], l.longField("price"), l.longField("amount"), l.longField("buyMatcherFee"), l.longField("sellMatcherFee"), l.longField("fee"), l.longField("timestamp")
                ]
            }, t.issueSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.assetName, l.assetDescription, l.quantity, l.decimals, l.reissuable, l.fee, l.timestamp, l.script]
            }, t.leaseSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.leaseAssetId, l.senderPublicKey, l.recipient, l.amount, l.fee, l.timestamp]
            }, t.massTransferSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.senderPublicKey, l.optionalAssetId, l.transfers, l.timestamp, l.fee, l.attachment]
            }, t.reissueSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.assetId, l.quantity, l.reissuable, l.fee, l.timestamp]
            }, t.setAssetScriptSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.assetId, l.fee, l.timestamp, l.script]
            }, t.setScriptSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.chainId, l.senderPublicKey, l.script, l.fee, l.timestamp]
            }, t.sponsorshipSchemaV1 = {
                type: "object",
                schema: [l.type, l.version, l.senderPublicKey, l.assetId, l.longField("minSponsoredAssetFee"), l.fee, l.timestamp]
            }, t.transferSchemaV2 = {
                type: "object",
                schema: [l.type, l.version, l.senderPublicKey, l.optionalAssetId, ["feeAssetId", l.optionalAssetId[1]], l.timestamp, l.amount, l.fee, l.recipient, l.attachment]
            }, t.schemasByTypeMap = {
                [a.GENESIS]: {},
                [a.PAYMENT]: {},
                [a.ISSUE]: {
                    2: t.issueSchemaV2
                },
                [a.TRANSFER]: {
                    2: t.transferSchemaV2
                },
                [a.REISSUE]: {
                    2: t.reissueSchemaV2
                },
                [a.BURN]: {
                    2: t.burnSchemaV2
                },
                [a.EXCHANGE]: {
                    1: t.exchangeSchemaV1,
                    2: t.exchangeSchemaV2
                },
                [a.LEASE]: {
                    2: t.leaseSchemaV2
                },
                [a.CANCEL_LEASE]: {
                    2: t.cancelLeaseSchemaV2
                },
                [a.ALIAS]: {
                    2: t.aliasSchemaV2
                },
                [a.MASS_TRANSFER]: {
                    1: t.massTransferSchemaV1
                },
                [a.DATA]: {
                    1: t.dataSchemaV1
                },
                [a.SET_SCRIPT]: {
                    1: t.setScriptSchemaV1
                },
                [a.SPONSORSHIP]: {
                    1: t.sponsorshipSchemaV1
                },
                [a.SET_ASSET_SCRIPT]: {
                    1: t.setAssetScriptSchemaV1
                },
                [a.INVOKE_SCRIPT]: {
                    1: t.invokeScriptSchemaV1
                }
            }, t.orderVersionMap = {
                1: t.orderSchemaV1,
                2: t.orderSchemaV2,
                3: t.orderSchemaV3
            }, t.getTransactionSchema = function(e, r) {
                const n = t.schemasByTypeMap[e];
                if ("object" != typeof n) throw new Error("Incorrect tx type: " + e);
                const s = n[r || 1];
                if ("object" != typeof s) throw new Error("Incorrect tx version: " + r);
                return s
            }
        },
        6258: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(7468),
                s = r(2342),
                i = r(6654),
                o = r(1);
            t.empty = Uint8Array.from([]), t.zero = Uint8Array.from([0]), t.one = Uint8Array.from([1]), t.BASE58_STRING = e => n.default.decode(e), t.BASE64_STRING = e => s.toByteArray(e.replace("base64:", "")), t.STRING = e => {
                return e ? (r = e, Uint8Array.from([...unescape(encodeURIComponent(r))].map(e => e.charCodeAt(0)))) : t.empty;
                var r
            }, t.BYTE = e => Uint8Array.from([e]), t.BOOL = e => t.BYTE(1 == e ? 1 : 0), t.BYTES = e => Uint8Array.from(e), t.SHORT = e => {
                const t = o.fromNumber(e, !0);
                return Uint8Array.from(t.toBytesBE().slice(6))
            }, t.INT = e => {
                const t = o.fromNumber(e, !0);
                return Uint8Array.from(t.toBytesBE().slice(4))
            }, t.OPTION = e => r => null == r || "string" == typeof r && 0 == r.length ? t.zero : i.concat(t.one, e(r)), t.LEN = e => t => r => {
                const n = t(r),
                    s = e(n.length);
                return i.concat(s, n)
            }, t.COUNT = e => t => r => {
                const n = i.concat(...r.map(e => t(e))),
                    s = e(r.length);
                return i.concat(s, n)
            }, t.LONG = e => {
                let t;
                if ("number" == typeof e) {
                    if (e > Math.pow(2, 53) - 1) throw new Error(e + " is too big to be precisely represented as js number. Use string instead");
                    t = o.fromNumber(e)
                } else t = o.fromString(e.toString());
                return Uint8Array.from(t.toBytesBE())
            }, t.SCRIPT = e => t.OPTION(t.LEN(t.SHORT)(t.BASE64_STRING))(e ? e.slice(7) : null), t.ALIAS = e => {
                const [r, n, s] = e.split(":");
                if (!n || 1 !== n.length) throw new Error("Invalid network byte in alias");
                if (!s || 0 === s.length) throw new Error("Invalid alias body");
                return i.concat([2], [n.charCodeAt(0)], t.LEN(t.SHORT)(t.STRING)(s))
            }, t.ADDRESS_OR_ALIAS = e => e.startsWith("alias") ? t.ALIAS(e) : t.BASE58_STRING(e)
        },
        6613: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TYPES = {
                GENESIS: 1,
                PAYMENT: 2,
                ISSUE: 3,
                TRANSFER: 4,
                REISSUE: 5,
                BURN: 6,
                EXCHANGE: 7,
                LEASE: 8,
                CANCEL_LEASE: 9,
                ALIAS: 10,
                MASS_TRANSFER: 11,
                DATA: 12,
                SET_SCRIPT: 13,
                SPONSORSHIP: 14,
                SET_ASSET_SCRIPT: 15,
                INVOKE_SCRIPT: 16
            }, t.ALIAS = {
                AVAILABLE_CHARS: "-.0123456789@_abcdefghijklmnopqrstuvwxyz",
                MAX_ALIAS_LENGTH: 30,
                MIN_ALIAS_LENGTH: 4
            }
        },
        6654: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.concat = (...e) => e.reduce((e, t) => Uint8Array.from([...e, ...t]), new Uint8Array(0)), t.range = (e, t, r = 1) => Array.from({
                length: t - e
            }).map((t, n) => n * r + e)
        },
        6655: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(1),
                s = r(9957),
                i = r(7468),
                o = r(2342);
            t.ALIAS_VERSION = 2;
            t.P_OPTION = e => (t, r = 0) => {
                if (0 === t[r]) return {
                    value: null,
                    shift: 1
                };
                const n = e(t, r + 1);
                return {
                    value: n.value,
                    shift: n.shift + 1
                }
            }, t.P_BYTE = (e, t = 0) => ({
                value: e[t],
                shift: 1
            }), t.P_SHORT = (e, t = 0) => ({
                value: 256 * e[t] + e[t + 1],
                shift: 2
            }), t.P_INT = (e, t = 0) => ({
                value: Math.pow(2, 24) * e[t] + Math.pow(2, 16) * e[t + 1] + Math.pow(2, 8) * e[t + 2] + e[t + 3],
                shift: 4
            }), t.P_LONG = (e, t = 0) => ({
                value: n.fromBytesBE(Array.from(e.slice(t, t + 8))).toString(),
                shift: 8
            }), t.P_BOOLEAN = (e, t = 0) => ({
                value: !!e[t],
                shift: 1
            }), t.P_STRING_FIXED = e => (t, r = 0) => {
                const n = s.Utf8ArrayToStr(t.slice(r, r + e));
                return {
                    shift: e,
                    value: n
                }
            }, t.P_STRING_VAR = e => (r, n = 0) => {
                const s = e(r, n),
                    {
                        value: i
                    } = t.P_STRING_FIXED(s.value)(r, n + s.shift);
                return {
                    shift: s.value + s.shift,
                    value: i
                }
            }, t.P_BASE58_FIXED = e => (t, r = 0) => ({
                value: i.default.encode(t.slice(r, r + e)),
                shift: e
            }), t.P_BASE58_VAR = e => (r, n = 0) => {
                const s = e(r, n),
                    {
                        value: i
                    } = t.P_BASE58_FIXED(s.value)(r, n + 2);
                return {
                    shift: s.value + 2,
                    value: i
                }
            }, t.P_BASE64 = e => (t, r = 0) => {
                const n = e(t, r),
                    s = "base64:" + o.fromByteArray(t.slice(r + n.shift, r + n.shift + n.value));
                return {
                    shift: n.value + n.shift,
                    value: s
                }
            };
            t.byteToStringWithLength = (e, r = 0) => {
                const n = t.P_SHORT(e, r),
                    {
                        value: i
                    } = (o = n.value, (e, t) => {
                        const r = s.Utf8ArrayToStr(e.slice(t, t + o));
                        return {
                            shift: o,
                            value: r
                        }
                    })(e, r + 2);
                var o;
                return {
                    shift: n.value + 2,
                    value: i
                }
            }, t.byteToBase58 = (e, t = 0, r) => {
                const n = r || 32;
                return {
                    value: i.default.encode(e.slice(t, t + n)),
                    shift: n
                }
            }, t.byteToBase58WithLength = (e, r = 0) => {
                const n = t.P_SHORT(e, r);
                return {
                    value: i.default.encode(e.slice(r + n.shift, r + n.shift + n.value)),
                    shift: n.shift + n.value
                }
            }, t.byteToAddressOrAlias = (e, r = 0) => {
                if (e[r] === t.ALIAS_VERSION) {
                    const n = t.byteToStringWithLength(e, r + 2);
                    return {
                        shift: n.shift + 2,
                        value: `alias:${String.fromCharCode(e[r+1])}:${n.value}`
                    }
                }
                return t.byteToBase58(e, r, 26)
            }, t.byteNewAliasToString = (e, r = 0) => {
                const n = t.P_SHORT(e, r).value + 2,
                    {
                        value: s
                    } = t.byteToStringWithLength(e, r);
                return {
                    shift: n,
                    value: s
                }
            }, t.byteToScript = (e, r = 0) => {
                if (0 === e[r]) return {
                    shift: 1,
                    value: null
                };
                const n = t.P_SHORT(e, r + 1),
                    s = r + 1 + n.shift,
                    i = r + 1 + n.shift + n.value;
                return {
                    value: "base64:" + o.fromByteArray(e.slice(s, i)),
                    shift: i - r
                }
            }
        },
        7385: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                var t = {
                    strict: !1
                };
                null != e && !0 === e.strict && (t.strict = !0);
                var r, n, s, i, o = {
                        '"': '"',
                        "\\": "\\",
                        "/": "/",
                        b: "\b",
                        f: "\f",
                        n: "\n",
                        r: "\r",
                        t: "\t"
                    },
                    a = function(e) {
                        throw {
                            name: "SyntaxError",
                            message: e,
                            at: r,
                            text: s
                        }
                    },
                    c = function(e) {
                        return e && e !== n && a("Expected '" + e + "' instead of '" + n + "'"), n = s.charAt(r), r += 1, n
                    },
                    u = function() {
                        var t, r = "";
                        for ("-" === n && (r = "-", c("-")); n >= "0" && n <= "9";) r += n, c();
                        if ("." === n)
                            for (r += "."; c() && n >= "0" && n <= "9";) r += n;
                        if ("e" === n || "E" === n)
                            for (r += n, c(), "-" !== n && "+" !== n || (r += n, c()); n >= "0" && n <= "9";) r += n, c();
                        return t = +r, e && e.parse ? e.parse(r) : isFinite(t) ? r.length > 15 ? r : t : void a("Bad number")
                    },
                    l = function() {
                        var e, t, r, s = "";
                        if ('"' === n)
                            for (; c();) {
                                if ('"' === n) return c(), s;
                                if ("\\" === n)
                                    if (c(), "u" === n) {
                                        for (r = 0, t = 0; t < 4 && (e = parseInt(c(), 16), isFinite(e)); t += 1) r = 16 * r + e;
                                        s += String.fromCharCode(r)
                                    } else {
                                        if ("string" != typeof o[n]) break;
                                        s += o[n]
                                    }
                                else s += n
                            }
                        a("Bad string")
                    },
                    p = function() {
                        for (; n && n <= " ";) c()
                    };
                i = function() {
                    switch (p(), n) {
                        case "{":
                            return function() {
                                var e, r = {};
                                if ("{" === n) {
                                    if (c("{"), p(), "}" === n) return c("}"), r;
                                    for (; n;) {
                                        if (e = l(), p(), c(":"), !0 === t.strict && Object.hasOwnProperty.call(r, e) && a('Duplicate key "' + e + '"'), r[e] = i(), p(), "}" === n) return c("}"), r;
                                        c(","), p()
                                    }
                                }
                                a("Bad object")
                            }();
                        case "[":
                            return function() {
                                var e = [];
                                if ("[" === n) {
                                    if (c("["), p(), "]" === n) return c("]"), e;
                                    for (; n;) {
                                        if (e.push(i()), p(), "]" === n) return c("]"), e;
                                        c(","), p()
                                    }
                                }
                                a("Bad array")
                            }();
                        case '"':
                            return l();
                        case "-":
                            return u();
                        default:
                            return n >= "0" && n <= "9" ? u() : function() {
                                switch (n) {
                                    case "t":
                                        return c("t"), c("r"), c("u"), c("e"), !0;
                                    case "f":
                                        return c("f"), c("a"), c("l"), c("s"), c("e"), !1;
                                    case "n":
                                        return c("n"), c("u"), c("l"), c("l"), null
                                }
                                a("Unexpected '" + n + "'")
                            }()
                    }
                };
                var f, h, y, d = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    m = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    };

                function S(e) {
                    return d.lastIndex = 0, d.test(e) ? '"' + e.replace(d, (function(e) {
                        var t = m[e];
                        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })) + '"' : '"' + e + '"'
                }
                return {
                    parse: function(e, t) {
                        var o;
                        return s = e + "", r = 0, n = " ", o = i(), p(), n && a("Syntax error"), "function" == typeof t ? function e(r, n) {
                            var s, i = r[n];
                            return i && "object" == typeof i && Object.keys(i).forEach((function(t) {
                                void 0 !== (s = e(i, t)) ? i[t] = s : delete i[t]
                            })), t.call(r, n, i)
                        }({
                            "": o
                        }, "") : o
                    },
                    stringify: function(t, r, n) {
                        var s;
                        if (f = "", h = "", "number" == typeof n)
                            for (s = 0; s < n; s += 1) h += " ";
                        else "string" == typeof n && (h = n);
                        if (y = r, r && "function" != typeof r && ("object" != typeof r || "number" != typeof r.length)) throw new Error("JSON.stringify");
                        return function t(r, n) {
                            var s, i, o, a, c, u = f,
                                l = n[r],
                                p = e && e.isInstance && e.isInstance(l);
                            switch (p && !l.isFinite() && (l = null), p ? l = e.stringify(l) : l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(r)), "function" == typeof y && (l = y.call(n, r, l)), typeof l) {
                                case "string":
                                    return p ? l : S(l);
                                case "number":
                                    return isFinite(l) ? String(l) : "null";
                                case "boolean":
                                    return String(l);
                                case "object":
                                    if (!l) return "null";
                                    if (f += h, c = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                                        for (a = l.length, s = 0; s < a; s += 1) c[s] = t(s, l) || "null";
                                        return o = 0 === c.length ? "[]" : f ? "[\n" + f + c.join(",\n" + f) + "\n" + u + "]" : "[" + c.join(",") + "]", f = u, o
                                    }
                                    if (y && "object" == typeof y)
                                        for (a = y.length, s = 0; s < a; s += 1) "string" == typeof y[s] && (o = t(i = y[s], l)) && c.push(S(i) + (f ? ": " : ":") + o);
                                    else
                                        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (o = t(i, l)) && c.push(S(i) + (f ? ": " : ":") + o);
                                    return o = 0 === c.length ? "{}" : f ? "{\n" + f + c.join(",\n" + f) + "\n" + u + "}" : "{" + c.join(",") + "}", f = u, o
                            }
                        }("", {
                            "": t
                        })
                    }
                }
            }
        },
        7400: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(9691);
            t.convert = n.convert;
            var s = r(9693);
            t.toNode = s.toNode
        },
        7401: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBase64 = function(e) {
                return /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/.test(e)
            }, t.isString = function(e) {
                return "string" == typeof e
            }, t.required = function(e) {
                return null != e
            }, t.charsInDictionary = function(e) {
                return function(t) {
                    return t.split("").every((function(t) {
                        return e.includes(t)
                    }))
                }
            }, t.createValidator = function(e, t) {
                return function(r) {
                    return e(r) ? null : t
                }
            }, t.requiredValidator = function(e) {
                return t.createValidator(t.required, 'Property "' + e + '" is required!')
            }, t.validate = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return function(t) {
                    var r = e.reduce((function(e, r) {
                        var n = r(t);
                        return n && e.push(n), e
                    }), []);
                    if (r.length) throw new Error("Validation error! Details: " + JSON.stringify(r, null, 4));
                    return t
                }
            }
        },
        7467: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(6082),
                s = r(7469),
                i = r(9959),
                o = r(9960);
            t.json = o;
            const a = r(6258);
            t.serializePrimitives = a;
            const c = r(6655);
            t.parsePrimitives = c;
            const u = r(6082);
            t.schemas = u;
            const l = {
                serializerFromSchema: s.serializerFromSchema,
                serializeTx: s.serializeTx,
                serializeOrder: s.serializeOrder,
                parserFromSchema: i.parserFromSchema,
                parseTx: i.parseTx,
                parseOrder: i.parseOrder
            };

            function p(e, t, r, n) {
                const o = s.serializerFromSchema(t, n),
                    a = i.parserFromSchema(t, r)(o(e)).value;
                return Object.assign({}, e, a)
            }
            t.binary = l, t.convertLongFields = p, t.convertTxLongFields = function(e, t, r) {
                const {
                    type: s,
                    version: i
                } = e;
                return p(e, n.getTransactionSchema(s, i), t, r)
            }
        },
        7468: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
                s = n.split("").reduce((e, t, r) => (e[t] = r, e), {});
            t.default = {
                encode(e) {
                    if (!e.length) return "";
                    const t = [0];
                    for (let r = 0; r < e.length; r++) {
                        for (let e = 0; e < t.length; e++) t[e] <<= 8;
                        t[0] += e[r];
                        let n = 0;
                        for (let e = 0; e < t.length; e++) t[e] += n, n = t[e] / 58 | 0, t[e] %= 58;
                        for (; n;) t.push(n % 58), n = n / 58 | 0
                    }
                    for (let r = 0; 0 === e[r] && r < e.length - 1; r++) t.push(0);
                    return t.reverse().map((function(e) {
                        return n[e]
                    })).join("")
                },
                decode(e) {
                    if (!e.length) return new Uint8Array(0);
                    const t = [0];
                    for (let r = 0; r < e.length; r++) {
                        const n = e[r];
                        if (!(n in s)) throw new Error(`There is no character "${n}" in the Base58 sequence!`);
                        for (let e = 0; e < t.length; e++) t[e] *= 58;
                        t[0] += s[n];
                        let i = 0;
                        for (let e = 0; e < t.length; e++) t[e] += i, i = t[e] >> 8, t[e] &= 255;
                        for (; i;) t.push(255 & i), i >>= 8
                    }
                    for (let r = 0;
                        "1" === e[r] && r < e.length - 1; r++) t.push(0);
                    return new Uint8Array(t.reverse())
                }
            }
        },
        7469: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(6258),
                s = r(6654),
                i = r(6082);
            t.serializerFromSchema = (e, r) => i => {
                let o, a;
                if ("array" === e.type) return o = t.serializerFromSchema(e.items, r), a = s.concat(...i.map(e => o(e))), s.concat((e.toBytes || n.SHORT)(i.length), a);
                if ("object" === e.type) {
                    let n = Uint8Array.from([]);
                    if (e.optional && null == i) return Uint8Array.from([0]);
                    if (e.schema.forEach(e => {
                            const [c, u] = e;
                            let l;
                            l = Array.isArray(c) ? c.reduce((e, t) => Object.assign({}, e, {
                                [t]: i[t]
                            }), {}) : i[c], o = t.serializerFromSchema(u, r), a = o(l), n = s.concat(n, a)
                        }), e.withLength) {
                        const t = e.withLength.toBytes(n.length);
                        n = s.concat(t, n)
                    }
                    return e.optional && (n = s.concat([1], n)), n
                }
                if ("anyOf" === e.type) {
                    const c = i[e.discriminatorField],
                        u = e.itemByKey(c);
                    if (null == u) throw new Error("Serializer Error: Unknown anyOf type: " + c);
                    return "boolean" === u.strKey && 6 === u.key && !1 === i.value && (u.key = 7), o = t.serializerFromSchema(u.schema, r), null == e.valueField ? o(i) : (a = o(i[e.valueField]), s.concat((e.toBytes || n.BYTE)(u.key), a))
                }
                if ("primitive" === e.type || void 0 === e.type) return e.toBytes(i);
                if ("dataTxField" === e.type) {
                    const c = n.LEN(n.SHORT)(n.STRING)(i.key),
                        u = i.type,
                        l = e.items.get(u);
                    if (null == l) throw new Error("Serializer Error: Unknown dataTxField type: " + u);
                    const p = [...e.items.values()].findIndex(e => e === l);
                    return o = t.serializerFromSchema(l, r), a = o(i.value), s.concat(c, n.BYTE(p), a)
                }
                throw new Error("Serializer Error: Unknown schema type: " + e.type)
            }, t.serializeTx = function(e, r) {
                const {
                    type: n,
                    version: s
                } = e, o = i.getTransactionSchema(n, s);
                return t.serializerFromSchema(o, r)(e)
            }, t.serializeOrder = function(e, r) {
                const n = e.version || 1,
                    s = i.orderVersionMap[n];
                if (null == s) throw new Error("Unknown order version: " + n);
                return t.serializerFromSchema(s, r)(e)
            }
        },
        9691: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(6613),
                i = r(5595),
                o = function(e, t) {
                    return Object.assign({}, e, {
                        fee: t(e.fee)
                    })
                };
            t.issue = function(e, t) {
                return n({}, o(e, t), {
                    quantity: t(e.quantity)
                })
            }, t.transfer = function(e, t) {
                return n({}, o(e, t), {
                    amount: t(e.amount)
                })
            }, t.reissue = function(e, t) {
                return n({}, o(e, t), {
                    quantity: t(e.quantity)
                })
            }, t.burn = function(e, t) {
                return n({}, o(e, t), {
                    quantity: t(e.quantity)
                })
            }, t.order = function(e, t) {
                return n({}, e, {
                    price: t(e.price),
                    amount: t(e.amount),
                    matcherFee: t(e.matcherFee)
                })
            }, t.exchange = function(e, r) {
                return n({}, o(e, r), {
                    buyOrder: t.order(e.buyOrder, r),
                    sellOrder: t.order(e.sellOrder, r),
                    amount: r(e.amount),
                    price: r(e.price),
                    sellMatcherFee: r(e.sellMatcherFee),
                    buyMatcherFee: r(e.buyMatcherFee)
                })
            }, t.lease = function(e, t) {
                return n({}, o(e, t), {
                    amount: t(e.amount)
                })
            }, t.cancelLease = function(e, t) {
                return o(e, t)
            }, t.alias = function(e, t) {
                return o(e, t)
            }, t.massTransfer = function(e, t) {
                return n({}, o(e, t), {
                    transfers: e.transfers.map((function(e) {
                        return n({}, e, {
                            amount: t(e.amount)
                        })
                    }))
                })
            }, t.data = function(e, t) {
                return n({}, o(e, t), {
                    data: e.data.map((function(e) {
                        switch (e.type) {
                            case "integer":
                                return n({}, e, {
                                    value: t(e.value)
                                });
                            default:
                                return e
                        }
                    }))
                })
            }, t.setScript = function(e, t) {
                return o(e, t)
            }, t.sponsorship = function(e, t) {
                return n({}, o(e, t), {
                    minSponsoredAssetFee: t(e.minSponsoredAssetFee)
                })
            }, t.invokeScript = function(e, t) {
                return n({}, o(e, t), {
                    payment: e.payment && e.payment.map((function(e) {
                        return n({}, e, {
                            amount: t(e.amount)
                        })
                    })),
                    call: n({}, e.call, {
                        args: e.call && e.call.args.map((function(e) {
                            return n({}, e, {
                                value: "integer" === e.type ? t(e.value) : e.value
                            })
                        }))
                    })
                })
            }, t.setAssetScript = function(e, t) {
                return o(e, t)
            }, t.convert = function(e, r) {
                if (i.isOrder(e)) return t.order(e, r);
                switch (e.type) {
                    case s.TYPES.ISSUE:
                        return t.issue(e, r);
                    case s.TYPES.TRANSFER:
                        return t.transfer(e, r);
                    case s.TYPES.REISSUE:
                        return t.reissue(e, r);
                    case s.TYPES.BURN:
                        return t.burn(e, r);
                    case s.TYPES.EXCHANGE:
                        return t.exchange(e, r);
                    case s.TYPES.LEASE:
                        return t.lease(e, r);
                    case s.TYPES.CANCEL_LEASE:
                        return t.cancelLease(e, r);
                    case s.TYPES.ALIAS:
                        return t.alias(e, r);
                    case s.TYPES.MASS_TRANSFER:
                        return t.massTransfer(e, r);
                    case s.TYPES.DATA:
                        return t.data(e, r);
                    case s.TYPES.SET_SCRIPT:
                        return t.setScript(e, r);
                    case s.TYPES.SPONSORSHIP:
                        return t.sponsorship(e, r);
                    case s.TYPES.SET_ASSET_SCRIPT:
                        return t.setAssetScript(e, r);
                    case s.TYPES.INVOKE_SCRIPT:
                        return t.invokeScript(e, r);
                    default:
                        throw new Error("Unknown transaction type!")
                }
            }
        },
        9692: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getAssetId = function(e) {
                return e && "object" == typeof e ? "toCoins" in e ? e.asset.id : "assetId" in e ? e.assetId : null : null
            }, t.getCoins = function(e) {
                return null == e ? null : "object" == typeof e ? "toCoins" in e ? e.toCoins() : "toFixed" in e ? e.toFixed() : String(e.coins) : String(e)
            }, t.curry = function(e) {
                function t(r) {
                    for (var n = [], s = 1; s < arguments.length; s++) n[s - 1] = arguments[s];
                    return r.length <= n.length ? r.apply(void 0, n) : function() {
                        for (var r = [], s = 0; s < arguments.length; s++) r[s] = arguments[s];
                        return t.apply(void 0, [e].concat(n.concat(r)))
                    }
                }
                return function() {
                    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                    return t.apply(void 0, [e].concat(r))
                }
            }, t.ifElse = function(e, t, r) {
                return function(n) {
                    return e(n) ? t(n) : r(n)
                }
            }, t.has = t.curry((function(e, t) {
                return Object.prototype.hasOwnProperty.call(t, e)
            })), t.emptyError = function(e) {
                return function(t) {
                    if (null == t) throw new Error(e);
                    return t
                }
            }, t.isOrder = function(e) {
                return "orderType" in e
            }, t.length = function(e) {
                return e.length
            }, t.lt = t.curry((function(e, t) {
                return e < t
            })), t.gt = t.curry((function(e, t) {
                return e > t
            })), t.lte = t.curry((function(e, t) {
                return e <= t
            })), t.gte = t.curry((function(e, t) {
                return e >= t
            })), t.head = function(e) {
                return e[0]
            }, t.defaultTo = function(e) {
                return function(t) {
                    return null == t ? e : t
                }
            }, t.map = t.curry((function(e, t) {
                return t.map(e)
            })), t.prop = t.curry((function(e, t) {
                return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0
            })), t.pipe = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return function(t) {
                    return e.reduce((function(e, t) {
                        return t(e)
                    }), t)
                }
            }
        },
        9693: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(9694),
                s = r(9695),
                i = r(9696),
                o = r(9697),
                a = r(9699),
                c = r(9700),
                u = r(9701),
                l = r(9702),
                p = r(9703),
                f = r(9704),
                h = r(9705),
                y = r(9706),
                d = r(9707),
                m = r(6613),
                S = r(5595),
                v = r(9708);
            t.node = {
                alias: n.alias,
                burn: s.burn,
                cancelLease: i.cancelLease,
                data: o.data,
                exchange: a.exchange,
                issue: c.issue,
                reissue: u.reissue,
                lease: l.lease,
                massTransfer: p.massTransfer,
                setAssetScript: f.setAssetScript,
                setScript: h.setScript,
                sponsorship: y.sponsorship,
                transfer: d.transfer,
                order: a.remapOrder,
                invokeScript: v.invokeScript
            }, t.toNode = function(e) {
                if (S.isOrder(e)) return a.remapOrder(e);
                switch (e.type) {
                    case m.TYPES.ISSUE:
                        return c.issue(e);
                    case m.TYPES.TRANSFER:
                        return d.transfer(e);
                    case m.TYPES.REISSUE:
                        return u.reissue(e);
                    case m.TYPES.BURN:
                        return s.burn(e);
                    case m.TYPES.EXCHANGE:
                        return a.exchange(e);
                    case m.TYPES.LEASE:
                        return l.lease(e);
                    case m.TYPES.CANCEL_LEASE:
                        return i.cancelLease(e);
                    case m.TYPES.ALIAS:
                        return n.alias(e);
                    case m.TYPES.MASS_TRANSFER:
                        return p.massTransfer(e);
                    case m.TYPES.DATA:
                        return o.data(e);
                    case m.TYPES.SET_SCRIPT:
                        return h.setScript(e);
                    case m.TYPES.SPONSORSHIP:
                        return y.sponsorship(e);
                    case m.TYPES.SET_ASSET_SCRIPT:
                        return f.setAssetScript(e);
                    case m.TYPES.INVOKE_SCRIPT:
                        return v.invokeScript(e);
                    default:
                        throw new Error("Unknown transaction type!")
                }
            }
        },
        9694: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(6613),
                i = r(5617),
                o = r(5618),
                a = r(5595),
                c = r(7401);
            t.alias = i.factory(n({}, o.getDefaultTransform(), {
                alias: a.pipe(a.prop("alias"), c.validate(c.requiredValidator("alias"), c.createValidator(c.isString, "Alias is not a string!"), c.createValidator(a.pipe(a.length, a.gte(s.ALIAS.MAX_ALIAS_LENGTH)), "Alias max length is " + s.ALIAS.MAX_ALIAS_LENGTH), c.createValidator(a.pipe(a.length, a.lte(s.ALIAS.MIN_ALIAS_LENGTH)), "Alias min length is " + s.ALIAS.MIN_ALIAS_LENGTH), c.createValidator(c.charsInDictionary(s.ALIAS.AVAILABLE_CHARS), 'Available alias chars is "' + s.ALIAS.AVAILABLE_CHARS + '"')))
            }))
        },
        9695: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595);
            t.burn = s.factory(n({}, i.getDefaultTransform(), {
                assetId: o.pipe(o.ifElse(o.has("assetId"), o.prop("assetId"), o.pipe(o.prop("quantity"), o.getAssetId)), o.emptyError("Has no assetId!")),
                quantity: o.pipe(o.prop("quantity"), o.getCoins),
                chainId: o.prop("chainId")
            }))
        },
        9696: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595);
            t.cancelLease = s.factory(n({}, i.getDefaultTransform(), {
                leaseId: o.prop("leaseId"),
                chainId: o.prop("chainId")
            }))
        },
        9697: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(9698),
                i = r(5617),
                o = r(5618),
                a = r(5595),
                c = function(e) {
                    switch (e.type) {
                        case s.DATA_FIELD_TYPE.BINARY:
                        case s.DATA_FIELD_TYPE.STRING:
                        case s.DATA_FIELD_TYPE.BOOLEAN:
                            return e.value;
                        case s.DATA_FIELD_TYPE.INTEGER:
                            return a.getCoins(e.value)
                    }
                };
            t.data = i.factory(n({}, o.getDefaultTransform(), {
                data: a.pipe(a.prop("data"), a.map((function(e) {
                    return {
                        key: a.prop("key", e),
                        type: a.prop("type", e),
                        value: c(e)
                    }
                })))
            }))
        },
        9699: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595),
                a = s.factory({
                    amountAsset: o.pipe(o.prop("amount"), o.getAssetId),
                    priceAsset: o.pipe(o.prop("price"), o.getAssetId)
                });
            t.remapOrder = s.factory({
                version: o.prop("version"),
                matcherPublicKey: o.prop("matcherPublicKey"),
                orderType: o.prop("orderType"),
                timestamp: o.prop("timestamp"),
                expiration: o.prop("expiration"),
                senderPublicKey: o.prop("senderPublicKey"),
                proofs: o.prop("proofs"),
                price: o.pipe(o.prop("price"), o.getCoins),
                amount: o.pipe(o.prop("amount"), o.getCoins),
                matcherFee: o.pipe(o.prop("matcherFee"), o.getCoins),
                matcherFeeAssetId: o.pipe(o.prop("matcherFee"), o.getAssetId),
                assetPair: a
            }), t.exchange = s.factory(n({}, i.getDefaultTransform(), {
                buyOrder: o.pipe(o.prop("buyOrder"), t.remapOrder),
                sellOrder: o.pipe(o.prop("sellOrder"), t.remapOrder),
                price: o.pipe(o.prop("price"), o.getCoins),
                amount: o.pipe(o.prop("amount"), o.getCoins),
                buyMatcherFee: o.pipe(o.prop("buyMatcherFee"), o.getCoins),
                sellMatcherFee: o.pipe(o.prop("sellMatcherFee"), o.getCoins)
            }))
        },
        9700: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595);
            t.issue = s.factory(n({}, i.getDefaultTransform(), {
                name: o.prop("name"),
                description: o.prop("description"),
                decimals: o.prop("precision"),
                quantity: o.pipe(o.prop("quantity"), o.getCoins),
                reissuable: o.prop("reissuable"),
                chainId: o.prop("chainId"),
                script: o.prop("script")
            }))
        },
        9701: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595);
            t.reissue = s.factory(n({}, i.getDefaultTransform(), {
                assetId: o.pipe(o.ifElse(o.has("assetId"), o.prop("assetId"), o.pipe(o.prop("quantity"), o.getAssetId)), o.emptyError("Has no assetId!")),
                quantity: o.pipe(o.prop("quantity"), o.getCoins),
                reissuable: o.prop("reissuable"),
                chainId: o.prop("chainId")
            }))
        },
        9702: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595);
            t.lease = s.factory(n({}, i.getDefaultTransform(), {
                amount: o.pipe(o.prop("amount"), o.getCoins),
                recipient: o.prop("recipient")
            }))
        },
        9703: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595),
                a = s.factory({
                    recipient: o.prop("recipient"),
                    amount: o.pipe(o.prop("amount"), o.getCoins)
                });
            t.massTransfer = s.factory(n({}, i.getDefaultTransform(), {
                transfers: o.pipe(o.prop("transfers"), o.map(a)),
                assetId: o.pipe(o.ifElse(o.has("assetId"), o.prop("assetId"), o.pipe(o.prop("transfers"), (function(e) {
                    if (!e.length) throw new Error("MassTransfer transaction must have one transfer!");
                    return e[0]
                }), o.prop("amount"), o.getAssetId)), o.emptyError("Has no assetId!")),
                attachment: o.prop("attachment")
            }))
        },
        9704: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595);
            t.setAssetScript = s.factory(n({}, i.getDefaultTransform(), {
                assetId: o.prop("assetId"),
                script: o.prop("script"),
                chainId: o.prop("chainId")
            }))
        },
        9705: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595);
            t.setScript = s.factory(n({}, i.getDefaultTransform(), {
                script: o.prop("script"),
                chainId: o.prop("chainId")
            }))
        },
        9706: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595);
            t.sponsorship = s.factory(n({}, i.getDefaultTransform(), {
                assetId: o.pipe(o.prop("minSponsoredAssetFee"), o.getAssetId),
                minSponsoredAssetFee: o.pipe(o.prop("minSponsoredAssetFee"), o.getCoins)
            }))
        },
        9707: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595);
            t.transfer = s.factory(n({}, i.getDefaultTransform(), {
                recipient: o.prop("recipient"),
                amount: o.pipe(o.prop("amount"), o.getCoins),
                feeAssetId: o.pipe(o.prop("fee"), o.getAssetId, o.defaultTo("WAVES")),
                assetId: o.pipe(o.prop("amount"), o.getAssetId),
                attachment: o.pipe(o.prop("attachment"), o.defaultTo(""))
            }))
        },
        9708: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = r(5617),
                i = r(5618),
                o = r(5595),
                a = function(e) {
                    return null == e
                },
                c = function() {
                    return null
                },
                u = s.factory({
                    function: o.prop("function"),
                    args: o.pipe(o.prop("args"), o.map((function(e) {
                        return "integer" === e.type ? {
                            type: e.type,
                            value: o.getCoins(e.value)
                        } : e
                    })))
                }),
                l = s.factory({
                    amount: o.getCoins,
                    assetId: o.getAssetId
                });
            t.invokeScript = s.factory(n({}, i.getDefaultTransform(), {
                chainId: o.prop("chainId"),
                dApp: o.prop("dApp"),
                feeAssetId: o.pipe(o.prop("fee"), o.getAssetId, o.defaultTo("WAVES")),
                call: o.pipe(o.prop("call"), o.ifElse(a, c, (function(e) {
                    return u(e)
                }))),
                payment: o.pipe(o.prop("payment"), o.ifElse(a, c, (function(e) {
                    return o.map(l)(e)
                })))
            }))
        },
        9717: function(e, t, r) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                        return e
                    }).apply(this, arguments)
                },
                s = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(s, i) {
                        function o(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            e.done ? s(e.value) : new r((function(t) {
                                t(e.value)
                            })).then(o, a)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                },
                i = this && this.__generator || function(e, t) {
                    var r, n, s, i, o = {
                        label: 0,
                        sent: function() {
                            if (1 & s[0]) throw s[1];
                            return s[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (r = 1, n && (s = 2 & i[0] ? n.return : i[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, i[1])).done) return s;
                                    switch (n = 0, s && (i = [2 & i[0], s.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            s = i;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(s = o.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                                o.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && o.label < s[1]) {
                                                o.label = s[1], s = i;
                                                break
                                            }
                                            if (s && o.label < s[2]) {
                                                o.label = s[2], o.ops.push(i);
                                                break
                                            }
                                            s[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, o)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    r = s = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(9718);
            var o = r(9904),
                a = r(6507),
                c = function() {
                    function e(e) {
                        this.ready = !1, this._networkCode = null == e.networkCode ? 87 : e.networkCode, this._wavesLibPromise = null, this._initTransportPromise = null, this._debug = null != e.debug && e.debug, this._openTimeout = e.openTimeout, this._listenTimeout = e.listenTimeout, this._exchangeTimeout = e.exchangeTimeout, this._error = null, this._transport = e.transport || a.default, this.tryConnect().catch((function(e) {
                            return console.warn("Ledger lib is not available", e)
                        }))
                    }
                    return e.prototype.tryConnect = function() {
                        return s(this, void 0, void 0, (function() {
                            var e, t;
                            return i(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 3, , 4]), e = this.disconnect(), this._initU2FTransport(), this._setSettings(), this._initWavesLib(), [4, e];
                                    case 1:
                                        return r.sent(), [4, Promise.all([this._initTransportPromise, this._wavesLibPromise])];
                                    case 2:
                                        return r.sent(), [3, 4];
                                    case 3:
                                        throw t = r.sent(), new Error(t);
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.disconnect = function() {
                        return s(this, void 0, void 0, (function() {
                            var e;
                            return i(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (e = this._initTransportPromise, this._initTransportPromise = null, this._wavesLibPromise = null, !e) return [3, 4];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, e];
                                    case 2:
                                        return t.sent().close(), [3, 4];
                                    case 3:
                                        return t.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.getTransport = function() {
                        return s(this, void 0, void 0, (function() {
                            return i(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 5]), [4, this._wavesLibPromise];
                                    case 1:
                                        return [2, e.sent()];
                                    case 2:
                                        return e.sent(), [4, this.tryConnect()];
                                    case 3:
                                        return e.sent(), [4, this._wavesLibPromise];
                                    case 4:
                                        return [2, e.sent()];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.getUserDataById = function(e) {
                        return s(this, void 0, void 0, (function() {
                            var t, r, s, o;
                            return i(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 3, , 4]), [4, this.getTransport()];
                                    case 1:
                                        return t = i.sent(), r = this.getPathById(e), [4, t.getWalletPublicKey(r, !1)];
                                    case 2:
                                        return s = i.sent(), [2, n({}, s, {
                                            id: e,
                                            path: r
                                        })];
                                    case 3:
                                        throw o = i.sent(), this.tryConnect(), this._error = o, o;
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.getVersion = function() {
                        return s(this, void 0, void 0, (function() {
                            var e;
                            return i(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 3, , 4]), [4, this.getTransport()];
                                    case 1:
                                        return [4, t.sent().getVersion()];
                                    case 2:
                                        return [2, t.sent()];
                                    case 3:
                                        throw e = t.sent(), this.tryConnect(), this._error = e, e;
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.getPaginationUsersData = function(e, t) {
                        return s(this, void 0, void 0, (function() {
                            var r, n, s, o;
                            return i(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        r = [], i.label = 1;
                                    case 1:
                                        i.trys.push([1, 6, , 7]), n = e, i.label = 2;
                                    case 2:
                                        return n <= e + t ? [4, this.getUserDataById(n)] : [3, 5];
                                    case 3:
                                        s = i.sent(), r.push(s), i.label = 4;
                                    case 4:
                                        return n++, [3, 2];
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        throw o = i.sent(), this.tryConnect(), this._error = o, o;
                                    case 7:
                                        return [2, r]
                                }
                            }))
                        }))
                    }, e.prototype.signTransaction = function(e, t, r, n) {
                        return void 0 === n && (n = 2), s(this, void 0, void 0, (function() {
                            var s, o, a;
                            return i(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        s = this.getPathById(e), o = new Buffer(r), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, , 5]), [4, this.getTransport()];
                                    case 2:
                                        return [4, i.sent().signTransaction(s, t.precision, o, n)];
                                    case 3:
                                        return [2, i.sent()];
                                    case 4:
                                        throw a = i.sent(), this.tryConnect(), this._error = a, a;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.signOrder = function(e, t, r) {
                        return s(this, void 0, void 0, (function() {
                            var n, s, o;
                            return i(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        n = this.getPathById(e), s = new Buffer(r), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, , 5]), [4, this.getTransport()];
                                    case 2:
                                        return [4, i.sent().signOrder(n, t.precision, s)];
                                    case 3:
                                        return [2, i.sent()];
                                    case 4:
                                        throw o = i.sent(), this.tryConnect(), this._error = o, o;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.signSomeData = function(e, t) {
                        return s(this, void 0, void 0, (function() {
                            var r, n, s;
                            return i(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        r = this.getPathById(e), n = new Buffer(t), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, , 5]), [4, this.getTransport()];
                                    case 2:
                                        return [4, i.sent().signSomeData(r, n)];
                                    case 3:
                                        return [2, i.sent()];
                                    case 4:
                                        throw s = i.sent(), this.tryConnect(), this._error = s, s;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.signRequest = function(e, t) {
                        return s(this, void 0, void 0, (function() {
                            var r, n, s;
                            return i(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        r = this.getPathById(e), n = new Buffer(t), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, , 5]), [4, this.getTransport()];
                                    case 2:
                                        return [4, i.sent().signRequest(r, n)];
                                    case 3:
                                        return [2, i.sent()];
                                    case 4:
                                        throw s = i.sent(), this.tryConnect(), this._error = s, s;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.signMessage = function(e, t) {
                        return s(this, void 0, void 0, (function() {
                            var r, n, s;
                            return i(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        r = this.getPathById(e), n = new Buffer(t, "ascii"), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, , 5]), [4, this.getTransport()];
                                    case 2:
                                        return [4, i.sent().signMessage(r, n)];
                                    case 3:
                                        return [2, i.sent()];
                                    case 4:
                                        throw s = i.sent(), this.tryConnect(), this._error = s, s;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.getLastError = function() {
                        return this._error
                    }, e.prototype.probeDevice = function() {
                        return s(this, void 0, void 0, (function() {
                            var e;
                            return i(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.ready ? [3, 2] : [4, this.tryConnect()];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        this._error = null, t.label = 3;
                                    case 3:
                                        return t.trys.push([3, 5, , 6]), [4, this.getUserDataById(1)];
                                    case 4:
                                        return t.sent(), [3, 6];
                                    case 5:
                                        return e = t.sent(), this._error = e, [2, !1];
                                    case 6:
                                        return [2, !0]
                                }
                            }))
                        }))
                    }, e.prototype.getPathById = function(e) {
                        return "44'/5741564'/0'/0'/" + e + "'"
                    }, e.prototype._setSettings = function() {
                        var e = this;
                        this._initTransportPromise.then((function(t) {
                            t.setDebugMode(e._debug), t.setExchangeTimeout(e._exchangeTimeout)
                        })).catch((function(e) {
                            return console.warn("can't init ledger", e)
                        }))
                    }, e.prototype._initU2FTransport = function() {
                        return this.ready = !1, this._initTransportPromise = this._transport.create(this._openTimeout, this._listenTimeout), this._initTransportPromise.catch((function(e) {
                            return console.warn("Can't init transport", e)
                        })), this._initTransportPromise
                    }, e.prototype._initWavesLib = function() {
                        var e = this;
                        return this._wavesLibPromise = this._initTransportPromise.then((function(t) {
                            return e.ready = !0, new o.Waves(t, e._networkCode)
                        })), this._wavesLibPromise
                    }, e
                }();
            t.WavesLedger = c, t.default = c
        },
        9904: function(e, t, r) {
            "use strict";
            var n = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(s, i) {
                        function o(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            e.done ? s(e.value) : new r((function(t) {
                                t(e.value)
                            })).then(o, a)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                },
                s = this && this.__generator || function(e, t) {
                    var r, n, s, i, o = {
                        label: 0,
                        sent: function() {
                            if (1 & s[0]) throw s[1];
                            return s[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (r = 1, n && (s = 2 & i[0] ? n.return : i[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, i[1])).done) return s;
                                    switch (n = 0, s && (i = [2 & i[0], s.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            s = i;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(s = o.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                                o.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && o.label < s[1]) {
                                                o.label = s[1], s = i;
                                                break
                                            }
                                            if (s && o.label < s[2]) {
                                                o.label = s[2], o.ops.push(i);
                                                break
                                            }
                                            s[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, o)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    r = s = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(9905),
                o = {
                    SW_OK: 36864,
                    SW_USER_CANCELLED: 37120,
                    SW_CONDITIONS_NOT_SATISFIED: 27013,
                    SW_BUFFER_OVERFLOW: 27024,
                    SW_INCORRECT_P1_P2: 27270,
                    SW_INS_NOT_SUPPORTED: 27904,
                    SW_CLA_NOT_SUPPORTED: 28160,
                    SW_SECURITY_STATUS_NOT_SATISFIED: 27010
                },
                a = "WAVES",
                c = 32,
                u = 35,
                l = 2,
                p = {
                    ORDER: 252,
                    SOME_DATA: 253,
                    REQUEST: 254,
                    MESSAGE: 255
                },
                f = 128,
                h = 8,
                y = 87,
                d = function() {
                    function e(e, t) {
                        void 0 === t && (t = y), this._version = null, this.transport = e, this.networkCode = t, this.decorateClassByTransport()
                    }
                    return e.prototype.decorateClassByTransport = function() {
                        this.transport.decorateAppAPIMethods(this, ["getWalletPublicKey", "_signData", "getVersion"], a)
                    }, e._toInt32Bytes = function(e) {
                        var t = new ArrayBuffer(4);
                        return new DataView(t).setUint32(0, e, !1), new Uint8Array(t)
                    }, e.prototype.getWalletPublicKey = function(t, r) {
                        return void 0 === r && (r = !1), n(this, void 0, void 0, (function() {
                            var n, o, a, p, f, h;
                            return s(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return n = e.splitPath(t), o = r ? 128 : 0, [4, this.transport.send(128, 4, o, this.networkCode, n)];
                                    case 1:
                                        return a = s.sent(), p = i.base58Encode(a.slice(0, c)), f = a.slice(c, c + u).toString("ascii"), h = a.slice(-l).toString("hex"), [2, {
                                            publicKey: p,
                                            address: f,
                                            statusCode: h
                                        }]
                                }
                            }))
                        }))
                    }, e.prototype.signTransaction = function(e, t, r, i) {
                        return void 0 === i && (i = 2), n(this, void 0, void 0, (function() {
                            var n, i;
                            return s(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return n = r[0], [4, this._fillDataForSign(e, n, 2, t, h, r)];
                                    case 1:
                                        return i = s.sent(), [4, this._signData(i)];
                                    case 2:
                                        return [2, s.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.signOrder = function(e, t, r) {
                        return n(this, void 0, void 0, (function() {
                            var n;
                            return s(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, this._fillDataForSign(e, p.ORDER, 0, t, h, r)];
                                    case 1:
                                        return n = s.sent(), [4, this._signData(n)];
                                    case 2:
                                        return [2, s.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.signSomeData = function(e, t) {
                        return n(this, void 0, void 0, (function() {
                            var r;
                            return s(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this._fillDataForSign(e, p.SOME_DATA, 0, 0, 0, t)];
                                    case 1:
                                        return r = n.sent(), [4, this._signData(r)];
                                    case 2:
                                        return [2, n.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.signRequest = function(e, t) {
                        return n(this, void 0, void 0, (function() {
                            var r;
                            return s(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this._fillDataForSign(e, p.REQUEST, 0, 0, 0, t)];
                                    case 1:
                                        return r = n.sent(), [4, this._signData(r)];
                                    case 2:
                                        return [2, n.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.signMessage = function(e, t) {
                        return n(this, void 0, void 0, (function() {
                            var r;
                            return s(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this._fillDataForSign(e, p.MESSAGE, 0, 0, 0, t)];
                                    case 1:
                                        return r = n.sent(), [4, this._signData(r)];
                                    case 2:
                                        return [2, n.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.getVersion = function() {
                        return n(this, void 0, void 0, (function() {
                            var t, r, n;
                            return s(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        this._version || (this._version = this.transport.send(128, 6, 0, 0)), s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, this._version];
                                    case 2:
                                        if (t = s.sent(), r = e.checkError(t.slice(-2))) throw r;
                                        return [2, t.slice(0, -2)];
                                    case 3:
                                        throw n = s.sent(), this._version = null, n;
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype._fillDataForSign = function(t, r, i, o, a, c) {
                        return n(this, void 0, void 0, (function() {
                            var n, u;
                            return s(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, this.getVersion()];
                                    case 1:
                                        return (n = s.sent())[0] >= 1 && n[1] >= 1 && n[2] >= 0 ? (u = Buffer.concat([e.splitPath(t), Buffer.from([o, a, r, i]), e._toInt32Bytes(c.byteLength)]), [2, Buffer.concat([u, c, c])]) : (u = Buffer.concat([e.splitPath(t), Buffer.from([o, a, r, i])]), [2, Buffer.concat([u, c])])
                                }
                            }))
                        }))
                    }, e.prototype._signData = function(t) {
                        return n(this, void 0, void 0, (function() {
                            var r, n, o, a, c, u, l, p, h, y;
                            return s(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, t];
                                    case 1:
                                        r = s.sent(), n = f - 5, o = r.length, a = 0, s.label = 2;
                                    case 2:
                                        return o > a ? (u = Math.min(o - a, n), l = o - a > n ? 0 : 128, p = this.networkCode, h = r.slice(a, u + a), a += u, [4, this.transport.send(128, 2, l, p, h)]) : [3, 4];
                                    case 3:
                                        if (c = s.sent(), y = e.checkError(c.slice(-2))) throw y;
                                        return [3, 2];
                                    case 4:
                                        return [2, i.base58Encode(c.slice(0, -2))]
                                }
                            }))
                        }))
                    }, e.checkError = function(e) {
                        var t = 256 * e[0] + e[1];
                        return t === o.SW_OK ? null : {
                            error: "Wrong data",
                            status: t
                        }
                    }, e.splitPath = function(e) {
                        var t = [];
                        e.split("/").forEach((function(e) {
                            var r = parseInt(e, 10);
                            isNaN(r) || (e.length > 1 && "'" === e[e.length - 1] && (r += 2147483648), t.push(r))
                        }));
                        var r = new Buffer(4 * t.length);
                        return t.forEach((function(e, t) {
                            r.writeUInt32BE(e, 4 * t)
                        })), r
                    }, e
                }();
            t.Waves = d
        },
        9905: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.base58Encode = function(e) {
                if (!e.length) return "";
                for (var t = [0], r = 0; r < e.length; r++) {
                    for (var n = 0; n < t.length; n++) t[n] <<= 8;
                    t[0] += e[r];
                    for (var s = 0, i = 0; i < t.length; i++) t[i] += s, s = t[i] / 58 | 0, t[i] %= 58;
                    for (; s;) t.push(s % 58), s = s / 58 | 0
                }
                for (r = 0; 0 === e[r] && r < e.length - 1; r++) t.push(0);
                return t.reverse().map((function(e) {
                    return "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" [e]
                })).join("")
            }
        },
        9957: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, s, i;
            t.Utf8ArrayToStr = (n = new Array(128), s = String.fromCodePoint || String.fromCharCode, i = [], function(e) {
                var t, r, o = e.length;
                i.length = 0;
                for (var a = 0; a < o;)(r = e[a++]) <= 127 ? t = r : r <= 223 ? t = (31 & r) << 6 | 63 & e[a++] : r <= 239 ? t = (15 & r) << 12 | (63 & e[a++]) << 6 | 63 & e[a++] : String.fromCodePoint ? t = (7 & r) << 18 | (63 & e[a++]) << 12 | (63 & e[a++]) << 6 | 63 & e[a++] : (t = 63, a += 3), i.push(n[t] || (n[t] = s(t)));
                return i.join("")
            })
        },
        9958: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e.INTEGER = "integer", e.BOOLEAN = "boolean", e.STRING = "string", e.BINARY = "binary"
                }(t.DATA_FIELD_TYPE || (t.DATA_FIELD_TYPE = {})), t.anyOf = function(e, t) {
                    return new AnyOfClass(e, t)
                };
            class AnyOfClass {
                constructor(e, t) {
                    this._items = e, this.type = "anyOf", this.discriminatorField = "type", this.discriminatorBytePos = 0, Object.assign(this, t)
                }
                itemByKey(e) {
                    const t = this._items.find(([t, r, n]) => n === e || t == e);
                    return t && {
                        schema: t[1],
                        key: t[0],
                        strKey: t[2]
                    }
                }
                itemByByteKey(e) {
                    const t = this._items.find(([t, r]) => t === e);
                    return t && {
                        schema: t[1],
                        key: t[0],
                        strKey: t[2] || t[0].toString(10)
                    }
                }
            }
        },
        9959: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(6655),
                s = r(6654),
                i = r(6082);
            t.parserFromSchema = (e, r) => (i, o = 0) => {
                let a = o;
                if ("array" === e.type) {
                    const c = [],
                        {
                            value: u,
                            shift: l
                        } = (e.fromBytes || n.P_SHORT)(i, o);
                    return a += l, s.range(0, u).forEach(n => {
                        const s = t.parserFromSchema(e.items, r),
                            {
                                value: o,
                                shift: u
                            } = s(i, a);
                        c.push(o), a += u
                    }), {
                        value: c,
                        shift: a - o
                    }
                }
                if ("object" === e.type) {
                    if (e.optional) {
                        const e = 1 === i[a];
                        if (a += 1, !e) return {
                            value: void 0,
                            shift: 1
                        }
                    }
                    if (e.withLength) {
                        const t = e.withLength.fromBytes(i, a);
                        a += t.shift
                    }
                    const n = {};
                    return e.schema.forEach(e => {
                        const [s, o] = e, c = t.parserFromSchema(o, r), {
                            value: u,
                            shift: l
                        } = c(i, a);
                        a += l, void 0 !== u && (Array.isArray(s) ? Object.assign(n, u) : n[s] = u)
                    }), {
                        value: n,
                        shift: a - o
                    }
                }
                if ("anyOf" === e.type) {
                    const s = (e.fromBytes || n.P_BYTE)(i, a + e.discriminatorBytePos);
                    e.valueField && 0 === e.discriminatorBytePos && (a += s.shift);
                    const c = e.itemByByteKey(s.value);
                    if (null == c) throw new Error("Failed to get schema for item with bytecode: " + s.value);
                    const u = t.parserFromSchema(c.schema, r),
                        {
                            value: l,
                            shift: p
                        } = u(i, a);
                    return a += p, {
                        value: e.valueField ? {
                            [e.discriminatorField]: c.strKey,
                            [e.valueField]: l
                        } : l,
                        shift: a - o
                    }
                }
                if ("dataTxField" === e.type) {
                    const s = n.byteToStringWithLength(i, a);
                    a += s.shift;
                    let o = n.P_BYTE(i, a);
                    a += o.shift;
                    const c = [...e.items].find((e, t) => t === o.value);
                    if (!c) throw new Error("Parser Error: Unknown dataTxField type: " + o.value);
                    const u = t.parserFromSchema(c[1], r)(i, a);
                    return {
                        value: {
                            value: u.value,
                            key: s.value,
                            type: c[0]
                        },
                        shift: u.shift + s.shift + o.shift
                    }
                }
                if ("primitive" === e.type || void 0 === e.type) {
                    const t = e.fromBytes;
                    let {
                        value: s,
                        shift: a
                    } = t(i, o);
                    return t === n.P_LONG && r && (s = r(s)), {
                        value: s,
                        shift: a
                    }
                }
                throw new Error("Parser Error: Unknown schema type: " + e.type)
            }, t.parseHeader = e => {
                let t = 0,
                    r = n.P_BYTE(e, t);
                t += r.shift, 0 === r.value && (r = n.P_BYTE(e, t), t += r.shift);
                let s = n.P_BYTE(e, t);
                return {
                    type: r.value,
                    version: s.value
                }
            }, t.parseTx = function(e, r) {
                const {
                    type: n,
                    version: s
                } = t.parseHeader(e), o = i.getTransactionSchema(n, s);
                return t.parserFromSchema(o, r)(e).value
            }, t.parseOrder = function(e, r) {
                return t.parserFromSchema(i.orderSchemaV2, r)(e).value
            }
        },
        9960: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(7385),
                {
                    parse: s,
                    stringify: i
                } = n(),
                o = r(6082),
                a = r(6258),
                c = r(7467);

            function u(e, t) {
                return 0 === e.length ? t : "object" == typeof t ? u(e.slice(1), t[e[0]]) : void 0
            }

            function l(e, t) {
                const r = [],
                    n = [];

                function s(o) {
                    return "string" == typeof o && (l = e, function e(t, r) {
                        if (null == r) return !1;
                        if (0 === t.length && ("primitive" === r.type || void 0 === r.type)) return r.toBytes === a.LONG;
                        if ("object" === r.type) {
                            const n = r.schema.find(([e, r]) => e === t[0]);
                            return e(t.slice(1), n && n[1])
                        }
                        if ("array" === r.type) return e(t.slice(1), r.items);
                        if ("dataTxField" === r.type) {
                            if ("value" !== t[0]) return !1;
                            const n = u(c.slice(0, c.length - 1), l),
                                s = r.items.get(n.type);
                            return e(t.slice(1), s)
                        }
                        if ("anyOf" === r.type) {
                            const n = u(c.slice(0, c.length - 1), l)[r.discriminatorField],
                                s = r.itemByKey(n);
                            return !!s && (null != r.valueField && c[c.length - 1] === r.valueField ? e(t.slice(1), s.schema) : e(t, s.schema))
                        }
                        return !1
                    }(c = r, t)) ? o : "boolean" == typeof o || o instanceof Boolean || null === o || "number" == typeof o || o instanceof Number || "string" == typeof o || o instanceof String || o instanceof Date ? JSON.stringify(o) : Array.isArray(o) ? function(e) {
                        let t = "[";
                        const i = n.length;
                        n[i] = e;
                        for (let n = 0; n < e.length; n++) {
                            let o = n + "",
                                a = e[n];
                            void 0 !== a && "function" != typeof a ? (r[i] = o, t += s(a)) : t += "null", n < e.length - 1 && (t += ",")
                        }
                        return n.length = i, r.length = i, t += "]", t
                    }(o) : o && "object" == typeof o ? function(e) {
                        let t = !0,
                            o = "{";
                        const a = n.length;
                        n[a] = e;
                        for (let n in e)
                            if (e.hasOwnProperty(n)) {
                                let c = e[n];
                                i(c) && (t ? t = !1 : o += ",", o += '"' + n + '":', r[a] = n, o += s(c))
                            } return n.length = a, r.length = a, o += "}", o
                    }(o) : void 0;
                    var c, l
                }

                function i(e) {
                    return void 0 !== e && "function" != typeof e
                }
                return s(e) || ""
            }
            t.stringifyWithSchema = l, t.parseTx = function(e, t) {
                const r = s(e);
                return t ? c.convertTxLongFields(r, t) : r
            }, t.stringifyTx = function(e, t) {
                const {
                    type: r,
                    version: n
                } = e, s = o.getTransactionSchema(r, n);
                return l(c.convertLongFields(e, s, void 0, t), s)
            }, t.parseOrder = function(e, t) {
                const r = s(e),
                    n = 2 === r.version ? o.orderSchemaV2 : o.orderSchemaV1;
                return t ? c.convertLongFields(r, n, t) : r
            }, t.stringifyOrder = function(e, t) {
                const r = 2 === e.version ? o.orderSchemaV2 : o.orderSchemaV1;
                return l(c.convertLongFields(e, r, void 0, t), r)
            }
        }
    }
]);