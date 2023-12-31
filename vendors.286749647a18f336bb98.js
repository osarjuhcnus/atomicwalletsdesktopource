(window.webpackJsonp = window.webpackJsonp || []).push([
    [232], {
        5498: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TRANSACTION_TYPE = {
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
            }, t.DATA_FIELD_TYPE = {
                INTEGER: "integer",
                BOOLEAN: "boolean",
                BINARY: "binary",
                STRING: "string"
            }
        },
        5510: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(6075),
                n = r(7384),
                s = r(9650),
                o = r(9651);
            t.json = o;
            const a = r(6236);
            t.serializePrimitives = a;
            const c = r(6599);
            t.parsePrimitives = c;
            const u = r(6075);
            t.schemas = u;
            const l = {
                serializerFromSchema: n.serializerFromSchema,
                serializeTx: n.serializeTx,
                serializeOrder: n.serializeOrder,
                parserFromSchema: s.parserFromSchema,
                parseTx: s.parseTx,
                parseOrder: s.parseOrder
            };

            function f(e, t, r, i) {
                const o = n.serializerFromSchema(t, i),
                    a = s.parserFromSchema(t, r)(o(e)).value;
                return Object.assign({}, e, a)
            }
            t.binary = l, t.convertLongFields = f, t.convertTxLongFields = function(e, t, r) {
                const {
                    type: n,
                    version: s
                } = e;
                return f(e, i.getTransactionSchema(n, s), t, r)
            }
        },
        5546: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
                }(r(5547));
            const i = r(9652),
                n = r(9653),
                s = r(9654),
                o = r(9655),
                a = r(9656),
                c = r(9657),
                u = r(9658),
                l = r(9659),
                f = r(9660),
                d = r(9661),
                p = r(9662),
                h = r(9663),
                m = r(9664),
                y = r(9665),
                v = r(7386),
                b = r(9666),
                g = r(9667),
                S = r(9668),
                A = r(9669);
            t.validate = {
                transfer: i.transferValidator,
                massTransfer: n.massTransferValidator,
                alias: s.aliasValidator,
                issue: p.issueValidator,
                reissue: d.reissueValidator,
                sponsorship: u.sponsorshipValidator,
                burn: o.burnValidator,
                setAssetScript: l.setAssetScriptValidator,
                cancelLease: a.cancelLeaseValidator,
                data: c.dataValidator,
                lease: h.leaseValidator,
                setScript: f.setScriptValidator,
                invokeScript: m.invokeValidator,
                exchange: y.exchangeValidator,
                cancelOrder: b.cancelOrderValidator,
                customData: g.customDataValidator,
                order: v.orderValidator,
                wavesAuth: A.authValidator,
                auth: S.authValidator
            }
        },
        5547: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5517),
                n = 140,
                s = {
                    AVAILABLE_CHARS: "-.0123456789@_abcdefghijklmnopqrstuvwxyz",
                    MAX_ALIAS_LENGTH: 30,
                    MIN_ALIAS_LENGTH: 4
                },
                o = 4,
                a = 16,
                c = 1e3;
            t.defaultValue = e => () => e, t.nope = e => e, t.pipe = (...e) => t => e.reduce((e, t) => t(e), t), t.validatePipe = (...e) => t => {
                let r = !0;
                for (const i of e)
                    if (r = !!i(t), !r) return !1;
                return r
            }, t.prop = e => t => t ? t[e] : void 0, t.lte = e => t => e >= t, t.gte = e => t => e <= t, t.ifElse = (e, t, r) => i => e(i) ? t(i) : r(i), t.isEq = e => r => {
                switch (!0) {
                    case t.isNumber(r) && t.isNumber(e):
                        return Number(r) === Number(e);
                    case t.isString(r) && t.isString(e):
                        return String(e) === String(r);
                    case t.isBoolean(r) && t.isBoolean(e):
                        return Boolean(r) === Boolean(e);
                    default:
                        return e === r
                }
            }, t.orEq = e => r => e.some(t.isEq(r)), t.isRequired = e => t => !e || null != t, t.isString = e => "string" == typeof e || e instanceof String, t.isNumber = e => ("number" == typeof e || e instanceof Number) && !isNaN(Number(e)), t.isNumberLike = e => !(null == e || isNaN(Number(e)) || !e && 0 !== e), t.isBoolean = e => null != e && ("boolean" == typeof e || e instanceof Boolean), t.isByteArray = e => {
                if (!e) return !1;
                const r = new Uint8Array(e);
                return r.length === e.length && r.every((r, i) => t.isEq(r)(e[i]))
            }, t.isArray = e => Array.isArray(e), t.bytesLength = e => t => {
                try {
                    return Uint8Array.from(t).length === e
                } catch (e) {
                    return !1
                }
            }, t.isBase58 = e => {
                try {
                    i.base58Decode(e)
                } catch (e) {
                    return !1
                }
                return !0
            }, t.isBase64 = e => {
                try {
                    e = e.replace(/^base64:/, ""), i.base64Decode(e)
                } catch (e) {
                    return !1
                }
                return !0
            }, t.isValidAddress = (e, r) => {
                if ("string" != typeof e || !t.isBase58(e)) return !1;
                let n = i.base58Decode(e);
                if (1 !== n[0]) return !1;
                if (null != r && n[1] != r) return !1;
                let s = n.slice(0, 22),
                    o = n.slice(22, 26),
                    a = i.keccak(i.blake2b(s)).slice(0, 4);
                for (let e = 0; e < 4; e++)
                    if (o[e] !== a[e]) return !1;
                return !0
            };
            var u;
            t.isValidAliasName = t.ifElse((u = s.AVAILABLE_CHARS, e => e.split("").every(e => u.includes(e))), t.pipe(t.prop("length"), t.validatePipe(t.lte(s.MAX_ALIAS_LENGTH), t.gte(s.MIN_ALIAS_LENGTH))), t.defaultValue(!1)), t.isValidAlias = t.validatePipe(t.isString, t.pipe(e => e.split(":"), t.ifElse(e => "alias" !== e[0] || 3 !== e.length, t.defaultValue(!1), t.pipe(t.prop(2), t.isValidAliasName)))), t.isHash = t.validatePipe(t.isRequired(!0), t.isBase58, t.pipe(e => i.base58Decode(e), t.bytesLength(32))), t.isPublicKey = t.isHash, t.isAssetId = t.ifElse(t.orEq(["", null, void 0, "WAVES"]), t.defaultValue(!0), t.isHash), t.isAttachment = t.ifElse(t.orEq([null, void 0]), t.defaultValue(!0), t.pipe(t.ifElse(t.isBase58, i.base58Decode, t.nope), t.ifElse(t.isByteArray, t.pipe(t.prop("length"), t.lte(n)), t.defaultValue(!1))));
            const l = {
                integer: t.isNumberLike,
                boolean: t.isBoolean,
                string: t.isString,
                binary: t.isBase64
            };
            t.isValidDataPair = e => !(!l[e.type] || !l[e.type](e.value)), t.isValidData = t.validatePipe(t.isRequired(!0), t.pipe(t.prop("key"), t.validatePipe(t.isString, e => !!e)), t.isValidDataPair), t.isValidAssetName = t.validatePipe(t.isRequired(!0), t.isString, t.pipe(i.stringToBytes, t.prop("length"), t.ifElse(t.gte(o), t.lte(a), t.defaultValue(!1)))), t.isValidAssetDescription = t.ifElse(t.isRequired(!1), t.defaultValue(!0), t.pipe(i.stringToBytes, t.prop("length"), t.lte(c))), t.exception = e => {
                throw new Error(e)
            }, t.isRecipient = t.ifElse(t.isValidAddress, t.defaultValue(!0), t.isValidAlias), t.validateByShema = (e, r) => i => (Object.entries(e).forEach(([e, n]) => {
                const s = t.prop(e)(i || {});
                n(s) || t.exception(r(e, s))
            }), !0), t.getError = (e, t) => `tx "${e}", has wrong data: ${JSON.stringify(t)}. Check tx data.`
        },
        5576: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5517);
            t.mapObj = (e, t) => Object.entries(e).map(([e, r]) => [e, t(r)]).reduce((e, [t, r]) => Object.assign({}, e, {
                [t]: r
            }), {}), t.getSenderPublicKey = function(e, t) {
                if (0 === e.length && null == t.senderPublicKey) throw new Error("Please provide either seed or senderPublicKey");
                return null == t.senderPublicKey ? i.publicKey(e[0][0]) : t.senderPublicKey
            }, t.base64Prefix = e => null == e || "base64:" === e.slice(0, 7) ? e : "base64:" + e, t.addProof = function(e, t, r) {
                if (null == r) return e.proofs = [...e.proofs, t], e;
                if (null != e.proofs && e.proofs[r]) throw new Error(`Proof at index ${r} already exists.`);
                for (let t = e.proofs.length; t < r; t++) e.proofs.push("");
                return e.proofs[r] = t, e
            }, t.convertToPairs = function(e) {
                return null == e ? [] : "string" == typeof e || "privateKey" in e ? [
                    [e, void 0]
                ] : Array.isArray(e) ? e.map((e, t) => [e, t]).filter(([e, t]) => e) : Object.keys(e).map(e => parseInt(e)).filter(e => !isNaN(e)).sort().map(t => [e[t], t])
            }, t.isOrder = e => void 0 !== e.assetPair, t.networkByte = function(e, t) {
                switch (typeof e) {
                    case "string":
                        return e.charCodeAt(0);
                    case "number":
                        return e;
                    default:
                        return t
                }
            }, t.fee = function(e, t) {
                return e.fee ? e.fee : e.additionalFee ? t + e.additionalFee : t
            }, t.normalizeAssetId = function(e) {
                return "WAVES" === (e = e || null) ? null : e
            }
        },
        5633: function(e, t, r) {
            "use strict";
            var i = r(7391),
                n = Object.prototype.toString;

            function s(e) {
                return "[object Array]" === n.call(e)
            }

            function o(e) {
                return void 0 === e
            }

            function a(e) {
                return null !== e && "object" == typeof e
            }

            function c(e) {
                return "[object Function]" === n.call(e)
            }

            function u(e, t) {
                if (null != e)
                    if ("object" != typeof e && (e = [e]), s(e))
                        for (var r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
                    else
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e)
            }
            e.exports = {
                isArray: s,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === n.call(e)
                },
                isBuffer: function(e) {
                    return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: a,
                isUndefined: o,
                isDate: function(e) {
                    return "[object Date]" === n.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === n.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === n.call(e)
                },
                isFunction: c,
                isStream: function(e) {
                    return a(e) && c(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                },
                forEach: u,
                merge: function e() {
                    var t = {};

                    function r(r, i) {
                        "object" == typeof t[i] && "object" == typeof r ? t[i] = e(t[i], r) : t[i] = r
                    }
                    for (var i = 0, n = arguments.length; i < n; i++) u(arguments[i], r);
                    return t
                },
                deepMerge: function e() {
                    var t = {};

                    function r(r, i) {
                        "object" == typeof t[i] && "object" == typeof r ? t[i] = e(t[i], r) : t[i] = "object" == typeof r ? e({}, r) : r
                    }
                    for (var i = 0, n = arguments.length; i < n; i++) u(arguments[i], r);
                    return t
                },
                extend: function(e, t, r) {
                    return u(t, (function(t, n) {
                        e[n] = r && "function" == typeof t ? i(t, r) : t
                    })), e
                },
                trim: function(e) {
                    return e.replace(/^\s*/, "").replace(/\s*$/, "")
                }
            }
        },
        5938: function(e, t, r) {
            "use strict";
            var i = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(6591);
            t.massTransfer = n.massTransfer;
            var s = r(6600);
            t.reissue = s.reissue;
            var o = r(6601);
            t.burn = o.burn;
            var a = r(6602);
            t.exchange = a.exchange;
            var c = r(6603);
            t.lease = c.lease;
            var u = r(6604);
            t.cancelLease = u.cancelLease;
            var l = r(6605);
            t.data = l.data;
            var f = r(6606);
            t.issue = f.issue;
            var d = r(6607);
            t.transfer = d.transfer;
            var p = r(6608);
            t.alias = p.alias;
            var h = r(6609);
            t.setScript = h.setScript;
            var m = r(6610);
            t.setAssetScript = m.setAssetScript;
            var y = r(6611);
            t.sponsorship = y.sponsorship;
            var v = r(9670);
            t.order = v.order;
            var b = r(9671);
            t.cancelOrder = b.cancelOrder;
            var g = r(7387);
            t.customData = g.customData, t.serializeCustomData = g.serializeCustomData;
            var S = r(7388);
            t.auth = S.auth;
            var A = r(7389);
            t.wavesAuth = A.wavesAuth;
            var E = r(6612);
            t.invokeScript = E.invokeScript;
            var T = r(9672);
            t.signTx = T.signTx, t.verify = T.verify, t.serialize = T.serialize, t.submitOrder = T.submitOrder, t.cancelSubmittedOrder = T.cancelSubmittedOrder, t.verifyAuthData = T.verifyAuthData, t.verifyCustomData = T.verifyCustomData, t.verifyWavesAuthData = T.verifyWavesAuthData;
            var N = r(7399);
            t.waitForTx = N.waitForTx, t.broadcast = N.broadcast;
            var _ = r(9689);
            t.makeTx = _.makeTx;
            const P = {
                crypto: i(r(5517)),
                marshall: i(r(5510))
            };
            t.libs = P;
            const O = i(r(9690));
            t.seedUtils = O;
            const I = i(r(7399));
            t.nodeInteraction = I;
            const w = i(r(5546));
            t.validators = w
        },
        6075: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(6236),
                n = r(6599),
                s = r(9649),
                o = r(7384);
            var a;
            ! function(e) {
                e[e.GENESIS = 1] = "GENESIS", e[e.PAYMENT = 2] = "PAYMENT", e[e.ISSUE = 3] = "ISSUE", e[e.TRANSFER = 4] = "TRANSFER", e[e.REISSUE = 5] = "REISSUE", e[e.BURN = 6] = "BURN", e[e.EXCHANGE = 7] = "EXCHANGE", e[e.LEASE = 8] = "LEASE", e[e.CANCEL_LEASE = 9] = "CANCEL_LEASE", e[e.ALIAS = 10] = "ALIAS", e[e.MASS_TRANSFER = 11] = "MASS_TRANSFER", e[e.DATA = 12] = "DATA", e[e.SET_SCRIPT = 13] = "SET_SCRIPT", e[e.SPONSORSHIP = 14] = "SPONSORSHIP", e[e.SET_ASSET_SCRIPT = 15] = "SET_ASSET_SCRIPT", e[e.INVOKE_SCRIPT = 16] = "INVOKE_SCRIPT"
            }(a = t.TRANSACTION_TYPE || (t.TRANSACTION_TYPE = {}));
            const c = {
                    toBytes: i.SHORT,
                    fromBytes: n.P_SHORT
                },
                u = {
                    toBytes: i.INT,
                    fromBytes: n.P_INT
                };
            var l;
            ! function(e) {
                e.longField = e => [e, {
                    toBytes: i.LONG,
                    fromBytes: n.P_LONG
                }], e.byteField = e => [e, {
                    toBytes: i.BYTE,
                    fromBytes: n.P_BYTE
                }], e.booleanField = e => [e, {
                    toBytes: i.BOOL,
                    fromBytes: n.P_BOOLEAN
                }], e.stringField = e => [e, {
                    toBytes: i.LEN(i.SHORT)(i.STRING),
                    fromBytes: n.P_STRING_VAR(n.P_SHORT)
                }], e.base58field32 = e => [e, {
                    toBytes: i.BASE58_STRING,
                    fromBytes: n.P_BASE58_FIXED(32)
                }], e.base58Option32 = e => [e, {
                    toBytes: e => "WAVES" === e ? i.OPTION(i.BASE58_STRING)(null) : i.OPTION(i.BASE58_STRING)(e),
                    fromBytes: n.P_OPTION(n.P_BASE58_FIXED(32))
                }], e.base64field = e => [e, {
                    toBytes: i.LEN(i.SHORT)(i.BASE64_STRING),
                    fromBytes: n.P_BASE64(n.P_SHORT)
                }], e.byteConstant = e => ["noname", {
                    toBytes: () => Uint8Array.from([e]),
                    fromBytes: () => ({
                        value: void 0,
                        shift: 1
                    })
                }], e.alias = ["alias", {
                    toBytes: i.LEN(i.SHORT)(i.STRING),
                    fromBytes: n.byteNewAliasToString
                }], e.amount = e.longField("amount"), e.assetDescription = e.stringField("description"), e.assetId = e.base58field32("assetId"), e.assetName = e.stringField("name"), e.attachment = ["attachment", {
                    toBytes: i.LEN(i.SHORT)(i.BASE58_STRING),
                    fromBytes: n.P_BASE58_VAR(n.P_SHORT)
                }], e.chainId = e.byteField("chainId"), e.decimals = e.byteField("decimals"), e.fee = e.longField("fee"), e.leaseAssetId = e.base58Option32("leaseAssetId"), e.leaseId = e.base58field32("leaseId"), e.optionalAssetId = e.base58Option32("assetId"), e.quantity = e.longField("quantity"), e.reissuable = e.booleanField("reissuable"), e.recipient = ["recipient", {
                    toBytes: i.ADDRESS_OR_ALIAS,
                    fromBytes: n.byteToAddressOrAlias
                }], e.script = ["script", {
                    toBytes: i.SCRIPT,
                    fromBytes: n.byteToScript
                }], e.senderPublicKey = e.base58field32("senderPublicKey"), e.signature = ["signature", {
                    toBytes: i.BASE58_STRING,
                    fromBytes: n.P_BASE58_FIXED(64)
                }], e.timestamp = e.longField("timestamp"), e.type = e.byteField("type"), e.version = e.byteField("version"), e.proofs = ["proofs", {
                    type: "array",
                    items: {
                        toBytes: i.LEN(i.SHORT)(i.BASE58_STRING),
                        fromBytes: n.P_BASE58_VAR(n.P_SHORT)
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
                        [s.DATA_FIELD_TYPE.INTEGER, {
                            toBytes: i.LONG,
                            fromBytes: n.P_LONG
                        }],
                        [s.DATA_FIELD_TYPE.BOOLEAN, {
                            toBytes: i.BOOL,
                            fromBytes: n.P_BOOLEAN
                        }],
                        [s.DATA_FIELD_TYPE.BINARY, {
                            toBytes: i.LEN(i.SHORT)(i.BASE64_STRING),
                            fromBytes: n.P_BASE64(n.P_SHORT)
                        }],
                        [s.DATA_FIELD_TYPE.STRING, {
                            toBytes: i.LEN(i.SHORT)(i.STRING),
                            fromBytes: n.P_STRING_VAR(n.P_SHORT)
                        }]
                    ])
                };
                e.data = ["data", {
                    type: "array",
                    items: r
                }];
                const o = s.anyOf([
                    [0, {
                        toBytes: i.LONG,
                        fromBytes: n.P_LONG
                    }, "integer"],
                    [1, {
                        toBytes: i.LEN(i.INT)(i.BASE64_STRING),
                        fromBytes: n.P_BASE64(n.P_INT)
                    }, "binary"],
                    [2, {
                        toBytes: i.LEN(i.INT)(i.STRING),
                        fromBytes: n.P_STRING_VAR(n.P_INT)
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
                ], {
                    valueField: "value"
                });
                e.functionCall = ["call", {
                    type: "object",
                    optional: !0,
                    schema: [e.byteConstant(9), e.byteConstant(1), ["function", {
                            toBytes: i.LEN(i.INT)(i.STRING),
                            fromBytes: n.P_STRING_VAR(n.P_INT)
                        }],
                        ["args", {
                            type: "array",
                            toBytes: i.INT,
                            fromBytes: n.P_INT,
                            items: o
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
                        toBytes: e => i.BYTE("sell" === e ? 1 : 0),
                        fromBytes: (e, t = 0) => 1 === n.P_BYTE(e, t).value ? {
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
                        toBytes: i.BASE58_STRING,
                        fromBytes: n.P_BASE58_FIXED(64)
                    }]
                ]
            }, t.proofsSchemaV1 = {
                type: "object",
                schema: [l.byteConstant(1), l.proofs]
            };
            const f = {
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
                        toBytes: e => i.INT(o.serializerFromSchema(f)(e).length)
                    }],
                    ["order2", {
                        fromBytes: () => ({
                            value: void 0,
                            shift: 4
                        }),
                        toBytes: e => i.INT(o.serializerFromSchema(f)(e).length)
                    }],
                    ["order1", f],
                    ["order2", f], l.longField("price"), l.longField("amount"), l.longField("buyMatcherFee"), l.longField("sellMatcherFee"), l.longField("fee"), l.longField("timestamp")
                ]
            };
            const d = s.anyOf([
                [1, {
                    type: "object",
                    withLength: {
                        toBytes: e => i.INT(e - 1),
                        fromBytes: e => {
                            const {
                                value: t,
                                shift: r
                            } = n.P_INT(e);
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
                schema: [l.byteConstant(0), l.type, l.version, ["order1", d],
                    ["order2", d], l.longField("price"), l.longField("amount"), l.longField("buyMatcherFee"), l.longField("sellMatcherFee"), l.longField("fee"), l.longField("timestamp")
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
                const i = t.schemasByTypeMap[e];
                if ("object" != typeof i) throw new Error("Incorrect tx type: " + e);
                const n = i[r || 1];
                if ("object" != typeof n) throw new Error("Incorrect tx version: " + r);
                return n
            }
        },
        6236: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(7383),
                n = r(2342),
                s = r(6598),
                o = r(1);
            t.empty = Uint8Array.from([]), t.zero = Uint8Array.from([0]), t.one = Uint8Array.from([1]), t.BASE58_STRING = e => i.default.decode(e), t.BASE64_STRING = e => n.toByteArray(e.replace("base64:", "")), t.STRING = e => {
                return e ? (r = e, Uint8Array.from([...unescape(encodeURIComponent(r))].map(e => e.charCodeAt(0)))) : t.empty;
                var r
            }, t.BYTE = e => Uint8Array.from([e]), t.BOOL = e => t.BYTE(1 == e ? 1 : 0), t.BYTES = e => Uint8Array.from(e), t.SHORT = e => {
                const t = o.fromNumber(e, !0);
                return Uint8Array.from(t.toBytesBE().slice(6))
            }, t.INT = e => {
                const t = o.fromNumber(e, !0);
                return Uint8Array.from(t.toBytesBE().slice(4))
            }, t.OPTION = e => r => null == r || "string" == typeof r && 0 == r.length ? t.zero : s.concat(t.one, e(r)), t.LEN = e => t => r => {
                const i = t(r),
                    n = e(i.length);
                return s.concat(n, i)
            }, t.COUNT = e => t => r => {
                const i = s.concat(...r.map(e => t(e))),
                    n = e(r.length);
                return s.concat(n, i)
            }, t.LONG = e => {
                let t;
                if ("number" == typeof e) {
                    if (e > Math.pow(2, 53) - 1) throw new Error(e + " is too big to be precisely represented as js number. Use string instead");
                    t = o.fromNumber(e)
                } else t = o.fromString(e.toString());
                return Uint8Array.from(t.toBytesBE())
            }, t.SCRIPT = e => t.OPTION(t.LEN(t.SHORT)(t.BASE64_STRING))(e ? e.slice(7) : null), t.ALIAS = e => {
                const [r, i, n] = e.split(":");
                if (!i || 1 !== i.length) throw new Error("Invalid network byte in alias");
                if (!n || 0 === n.length) throw new Error("Invalid alias body");
                return s.concat([2], [i.charCodeAt(0)], t.LEN(t.SHORT)(t.STRING)(n))
            }, t.ADDRESS_OR_ALIAS = e => e.startsWith("alias") ? t.ALIAS(e) : t.BASE58_STRING(e)
        },
        6238: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(6616);
            t.toBigNumber = function(e) {
                return e instanceof i.BigNumber ? e : new i.BigNumber(e)
            }
        },
        6591: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5576),
                s = r(5517),
                o = r(5510),
                a = r(5546);
            t.massTransfer = function(e, t) {
                const r = i.TRANSACTION_TYPE.MASS_TRANSFER,
                    c = e.version || 1,
                    u = n.convertToPairs(t),
                    l = n.getSenderPublicKey(u, e);
                if (!Array.isArray(e.transfers)) throw new Error('["transfers should be array"]');
                const f = {
                    type: r,
                    version: c,
                    senderPublicKey: l,
                    assetId: n.normalizeAssetId(e.assetId),
                    transfers: e.transfers,
                    fee: n.fee(e, 1e5 + 1e5 * Math.ceil(.5 * e.transfers.length)),
                    timestamp: e.timestamp || Date.now(),
                    attachment: e.attachment || "",
                    proofs: e.proofs || [],
                    id: ""
                };
                a.validate.massTransfer(f);
                const d = o.binary.serializeTx(f);
                return u.forEach(([e, t]) => n.addProof(f, s.signBytes(e, d), t)), f.id = s.base58Encode(s.blake2b(d)), f
            }
        },
        6598: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.concat = (...e) => e.reduce((e, t) => Uint8Array.from([...e, ...t]), new Uint8Array(0)), t.range = (e, t, r = 1) => Array.from({
                length: t - e
            }).map((t, i) => i * r + e)
        },
        6599: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(1),
                n = r(9648),
                s = r(7383),
                o = r(2342);
            t.ALIAS_VERSION = 2;
            t.P_OPTION = e => (t, r = 0) => {
                if (0 === t[r]) return {
                    value: null,
                    shift: 1
                };
                const i = e(t, r + 1);
                return {
                    value: i.value,
                    shift: i.shift + 1
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
                value: i.fromBytesBE(Array.from(e.slice(t, t + 8))).toString(),
                shift: 8
            }), t.P_BOOLEAN = (e, t = 0) => ({
                value: !!e[t],
                shift: 1
            }), t.P_STRING_FIXED = e => (t, r = 0) => {
                const i = n.Utf8ArrayToStr(t.slice(r, r + e));
                return {
                    shift: e,
                    value: i
                }
            }, t.P_STRING_VAR = e => (r, i = 0) => {
                const n = e(r, i),
                    {
                        value: s
                    } = t.P_STRING_FIXED(n.value)(r, i + n.shift);
                return {
                    shift: n.value + n.shift,
                    value: s
                }
            }, t.P_BASE58_FIXED = e => (t, r = 0) => ({
                value: s.default.encode(t.slice(r, r + e)),
                shift: e
            }), t.P_BASE58_VAR = e => (r, i = 0) => {
                const n = e(r, i),
                    {
                        value: s
                    } = t.P_BASE58_FIXED(n.value)(r, i + 2);
                return {
                    shift: n.value + 2,
                    value: s
                }
            }, t.P_BASE64 = e => (t, r = 0) => {
                const i = e(t, r),
                    n = "base64:" + o.fromByteArray(t.slice(r + i.shift, r + i.shift + i.value));
                return {
                    shift: i.value + i.shift,
                    value: n
                }
            };
            t.byteToStringWithLength = (e, r = 0) => {
                const i = t.P_SHORT(e, r),
                    {
                        value: s
                    } = (o = i.value, (e, t) => {
                        const r = n.Utf8ArrayToStr(e.slice(t, t + o));
                        return {
                            shift: o,
                            value: r
                        }
                    })(e, r + 2);
                var o;
                return {
                    shift: i.value + 2,
                    value: s
                }
            }, t.byteToBase58 = (e, t = 0, r) => {
                const i = r || 32;
                return {
                    value: s.default.encode(e.slice(t, t + i)),
                    shift: i
                }
            }, t.byteToBase58WithLength = (e, r = 0) => {
                const i = t.P_SHORT(e, r);
                return {
                    value: s.default.encode(e.slice(r + i.shift, r + i.shift + i.value)),
                    shift: i.shift + i.value
                }
            }, t.byteToAddressOrAlias = (e, r = 0) => {
                if (e[r] === t.ALIAS_VERSION) {
                    const i = t.byteToStringWithLength(e, r + 2);
                    return {
                        shift: i.shift + 2,
                        value: `alias:${String.fromCharCode(e[r+1])}:${i.value}`
                    }
                }
                return t.byteToBase58(e, r, 26)
            }, t.byteNewAliasToString = (e, r = 0) => {
                const i = t.P_SHORT(e, r).value + 2,
                    {
                        value: n
                    } = t.byteToStringWithLength(e, r);
                return {
                    shift: i,
                    value: n
                }
            }, t.byteToScript = (e, r = 0) => {
                if (0 === e[r]) return {
                    shift: 1,
                    value: null
                };
                const i = t.P_SHORT(e, r + 1),
                    n = r + 1 + i.shift,
                    s = r + 1 + i.shift + i.value;
                return {
                    value: "base64:" + o.fromByteArray(e.slice(n, s)),
                    shift: s - r
                }
            }
        },
        6600: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5517),
                s = r(5576),
                o = r(5510),
                a = r(5546);
            t.reissue = function(e, t) {
                const r = i.TRANSACTION_TYPE.REISSUE,
                    c = e.version || 2,
                    u = s.convertToPairs(t),
                    l = {
                        type: r,
                        version: c,
                        senderPublicKey: s.getSenderPublicKey(u, e),
                        assetId: e.assetId,
                        quantity: e.quantity,
                        reissuable: e.reissuable,
                        chainId: s.networkByte(e.chainId, 87),
                        fee: s.fee(e, 1e8),
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: ""
                    };
                a.validate.reissue(l);
                const f = o.binary.serializeTx(l);
                return u.forEach(([e, t]) => s.addProof(l, n.signBytes(e, f), t)), l.id = n.base58Encode(n.blake2b(f)), l
            }
        },
        6601: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5510),
                s = r(5517),
                o = r(5576),
                a = r(5546);
            t.burn = function(e, t) {
                const r = i.TRANSACTION_TYPE.BURN,
                    c = e.version || 2,
                    u = o.convertToPairs(t),
                    l = {
                        type: r,
                        version: c,
                        senderPublicKey: o.getSenderPublicKey(u, e),
                        assetId: e.assetId,
                        amount: e.amount,
                        chainId: o.networkByte(e.chainId, 87),
                        fee: o.fee(e, 1e5),
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: ""
                    };
                a.validate.burn(l);
                const f = n.binary.serializeTx(l);
                return u.forEach(([e, t]) => o.addProof(l, s.signBytes(e, f), t)), l.id = s.base58Encode(s.blake2b(f)), l
            }
        },
        6602: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5510),
                s = r(5517),
                o = r(5576),
                a = r(5546);
            t.exchange = function(e, t) {
                const r = i.TRANSACTION_TYPE.EXCHANGE,
                    c = e.version || 2,
                    u = o.convertToPairs(t),
                    l = {
                        type: r,
                        version: c,
                        senderPublicKey: o.getSenderPublicKey(u, e),
                        order1: e.order1,
                        order2: e.order2,
                        price: e.price,
                        amount: e.amount,
                        buyMatcherFee: e.buyMatcherFee,
                        sellMatcherFee: e.sellMatcherFee,
                        fee: o.fee(e, 1e5),
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: ""
                    };
                a.validate.exchange(l);
                const f = n.binary.serializeTx(l);
                return u.forEach(([e, t]) => o.addProof(l, s.signBytes(e, f), t)), Object.assign({}, l, {
                    id: s.base58Encode(s.blake2b(f))
                })
            }
        },
        6603: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5517),
                s = r(5576),
                o = r(5510),
                a = r(5546);
            t.lease = function(e, t) {
                const r = i.TRANSACTION_TYPE.LEASE,
                    c = e.version || 2,
                    u = s.convertToPairs(t),
                    l = {
                        type: r,
                        version: c,
                        senderPublicKey: s.getSenderPublicKey(u, e),
                        amount: e.amount,
                        recipient: e.recipient,
                        fee: s.fee(e, 1e5),
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: ""
                    };
                a.validate.lease(l);
                const f = o.binary.serializeTx(l);
                return u.forEach(([e, t]) => s.addProof(l, n.signBytes(e, f), t)), l.id = n.base58Encode(n.blake2b(f)), l
            }
        },
        6604: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5510),
                s = r(5517),
                o = r(5576),
                a = r(5546);
            t.cancelLease = function(e, t) {
                const r = i.TRANSACTION_TYPE.CANCEL_LEASE,
                    c = e.version || 2,
                    u = o.convertToPairs(t),
                    l = {
                        type: r,
                        version: c,
                        senderPublicKey: o.getSenderPublicKey(u, e),
                        leaseId: e.leaseId,
                        fee: o.fee(e, 1e5),
                        timestamp: e.timestamp || Date.now(),
                        chainId: o.networkByte(e.chainId, 87),
                        proofs: e.proofs || [],
                        id: ""
                    };
                a.validate.cancelLease(l);
                const f = n.binary.serializeTx(l);
                return u.forEach(([e, t]) => o.addProof(l, s.signBytes(e, f), t)), l.id = s.base58Encode(s.blake2b(f)), l
            }
        },
        6605: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5510),
                {
                    BASE58_STRING: n,
                    BASE64_STRING: s,
                    BYTE: o,
                    BYTES: a,
                    COUNT: c,
                    LEN: u,
                    LONG: l,
                    SHORT: f,
                    STRING: d
                } = i.serializePrimitives,
                p = r(5517),
                h = r(5498),
                m = r(5576),
                y = r(5510),
                v = r(5546),
                b = {
                    integer: ["integer", 0, l],
                    number: ["integer", 0, l],
                    boolean: ["boolean", 1, o],
                    string: ["string", 3, u(f)(d)],
                    binary: ["binary", 2, e => u(f)(s)(e.slice(7))],
                    _: ["binary", 2, u(f)(a)]
                },
                g = e => b[typeof e] || b._;
            t.data = function(e, t) {
                const r = h.TRANSACTION_TYPE.DATA,
                    i = e.version || 1,
                    s = m.convertToPairs(t),
                    a = m.getSenderPublicKey(s, e);
                if (!Array.isArray(e.data)) throw new Error('["data should be array"]');
                const b = e.timestamp || Date.now();
                let S = p.concat(o(h.TRANSACTION_TYPE.DATA), o(1), n(a), c(f)(e => p.concat(u(f)(d)(e.key), [g(e.value)[1]], g(e.value)[2](e.value)))(e.data), l(b));
                const A = 1e5 * Math.floor(1 + (S.length + 8 - 1) / 1024),
                    E = {
                        type: r,
                        version: i,
                        senderPublicKey: a,
                        fee: m.fee(e, A),
                        timestamp: b,
                        proofs: e.proofs || [],
                        id: "",
                        data: e.data && e.data.map(e => {
                            if (e.type) return e;
                            {
                                const t = g(e.value)[0];
                                return {
                                    type: t,
                                    key: e.key,
                                    value: "binary" === t ? "base64:" + Buffer.from(e.value).toString("base64") : e.value
                                }
                            }
                        })
                    };
                v.validate.data(E);
                const T = y.binary.serializeTx(E);
                return s.forEach(([e, t]) => m.addProof(E, p.signBytes(e, T), t)), E.id = p.base58Encode(p.blake2b(T)), E
            }
        },
        6606: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5517),
                s = r(5576),
                o = r(5510),
                a = r(5546);
            t.issue = function(e, t) {
                const r = i.TRANSACTION_TYPE.ISSUE,
                    c = e.version || 2,
                    u = s.convertToPairs(t),
                    l = {
                        type: r,
                        version: c,
                        senderPublicKey: s.getSenderPublicKey(u, e),
                        name: e.name,
                        description: e.description,
                        quantity: e.quantity,
                        script: null == e.script ? void 0 : s.base64Prefix(e.script),
                        decimals: null == e.decimals ? 8 : e.decimals,
                        reissuable: e.reissuable || !1,
                        fee: 1 === e.quantity ? s.fee(e, 1e6) : s.fee(e, 1e8),
                        timestamp: e.timestamp || Date.now(),
                        chainId: s.networkByte(e.chainId, 87),
                        proofs: e.proofs || [],
                        id: ""
                    };
                a.validate.issue(l);
                const f = o.binary.serializeTx(l);
                return u.forEach(([e, t]) => s.addProof(l, n.signBytes(e, f), t)), l.id = n.base58Encode(n.blake2b(f)), l
            }
        },
        6607: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5517),
                s = r(5576),
                o = r(5546),
                a = r(5510);
            t.transfer = function(e, t) {
                const r = i.TRANSACTION_TYPE.TRANSFER,
                    c = e.version || 2,
                    u = s.convertToPairs(t),
                    l = {
                        type: r,
                        version: c,
                        senderPublicKey: s.getSenderPublicKey(u, e),
                        assetId: s.normalizeAssetId(e.assetId),
                        recipient: e.recipient,
                        amount: e.amount,
                        attachment: e.attachment || "",
                        fee: s.fee(e, 1e5),
                        feeAssetId: s.normalizeAssetId(e.feeAssetId),
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: ""
                    };
                o.validate.transfer(l);
                const f = a.binary.serializeTx(l);
                return u.forEach(([e, t]) => s.addProof(l, n.signBytes(e, f), t)), l.id = n.base58Encode(n.blake2b(f)), l
            }
        },
        6608: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5510),
                s = r(5517),
                o = r(5576),
                a = r(5546);
            t.alias = function(e, t) {
                const r = i.TRANSACTION_TYPE.ALIAS,
                    c = e.version || 2,
                    u = o.convertToPairs(t),
                    l = {
                        type: r,
                        version: c,
                        senderPublicKey: o.getSenderPublicKey(u, e),
                        alias: e.alias,
                        fee: o.fee(e, 1e5),
                        timestamp: e.timestamp || Date.now(),
                        chainId: o.networkByte(e.chainId, 87),
                        proofs: e.proofs || [],
                        id: ""
                    };
                a.validate.alias(l);
                const f = n.binary.serializeTx(l);
                u.forEach(([e, t]) => o.addProof(l, s.signBytes(e, f), t));
                const d = [f[0], ...f.slice(36, -16)];
                return l.id = s.base58Encode(s.blake2b(Uint8Array.from(d))), l
            }
        },
        6609: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5517),
                s = r(5576),
                o = r(5510),
                a = r(5546);
            t.setScript = function(e, t) {
                const r = i.TRANSACTION_TYPE.SET_SCRIPT,
                    c = e.version || 1,
                    u = s.convertToPairs(t),
                    l = s.getSenderPublicKey(u, e);
                if (void 0 === e.script) throw new Error("Script field cannot be undefined. Use null explicitly to remove script");
                const f = {
                    type: r,
                    version: c,
                    senderPublicKey: l,
                    chainId: s.networkByte(e.chainId, 87),
                    fee: s.fee(e, 1e6),
                    timestamp: e.timestamp || Date.now(),
                    proofs: e.proofs || [],
                    id: "",
                    script: s.base64Prefix(e.script)
                };
                a.validate.setScript(f);
                const d = o.binary.serializeTx(f);
                return u.forEach(([e, t]) => s.addProof(f, n.signBytes(e, d), t)), f.id = n.base58Encode(n.blake2b(d)), f
            }
        },
        6610: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5517),
                s = r(5576),
                o = r(5510),
                a = r(5546);
            t.setAssetScript = function(e, t) {
                const r = i.TRANSACTION_TYPE.SET_ASSET_SCRIPT,
                    c = e.version || 1,
                    u = s.convertToPairs(t),
                    l = s.getSenderPublicKey(u, e);
                if (null == e.script) throw new Error("Asset script cannot be empty");
                const f = {
                    type: r,
                    version: c,
                    senderPublicKey: l,
                    assetId: e.assetId,
                    chainId: s.networkByte(e.chainId, 87),
                    fee: s.fee(e, 1e8),
                    timestamp: e.timestamp || Date.now(),
                    proofs: e.proofs || [],
                    id: "",
                    script: s.base64Prefix(e.script)
                };
                a.validate.setAssetScript(f);
                const d = o.binary.serializeTx(f);
                return u.forEach(([e, t]) => s.addProof(f, n.signBytes(e, d), t)), f.id = n.base58Encode(n.blake2b(d)), f
            }
        },
        6611: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5517),
                s = r(5576),
                o = r(5510),
                a = r(5546);
            t.sponsorship = function(e, t) {
                const r = i.TRANSACTION_TYPE.SPONSORSHIP,
                    c = e.version || 1,
                    u = s.convertToPairs(t),
                    l = {
                        type: r,
                        version: c,
                        senderPublicKey: s.getSenderPublicKey(u, e),
                        minSponsoredAssetFee: e.minSponsoredAssetFee,
                        assetId: e.assetId,
                        fee: s.fee(e, 1e8),
                        timestamp: e.timestamp || Date.now(),
                        proofs: e.proofs || [],
                        id: ""
                    };
                a.validate.sponsorship(l);
                const f = o.binary.serializeTx(l);
                return u.forEach(([e, t]) => s.addProof(l, n.signBytes(e, f), t)), l.id = n.base58Encode(n.blake2b(f)), l
            }
        },
        6612: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5517),
                s = r(5576),
                o = r(5510),
                a = r(5546);
            t.invokeScript = function(e, t) {
                const r = i.TRANSACTION_TYPE.INVOKE_SCRIPT,
                    u = e.version || 1,
                    l = s.convertToPairs(t),
                    f = {
                        type: r,
                        version: u,
                        senderPublicKey: s.getSenderPublicKey(l, e),
                        dApp: e.dApp,
                        call: e.call && Object.assign({
                            args: []
                        }, e.call),
                        payment: c(e.payment),
                        fee: s.fee(e, 5e5),
                        feeAssetId: s.normalizeAssetId(e.feeAssetId),
                        timestamp: e.timestamp || Date.now(),
                        chainId: s.networkByte(e.chainId, 87),
                        proofs: e.proofs || [],
                        id: ""
                    };
                a.validate.invokeScript(f);
                const d = o.binary.serializeTx(f);
                return l.forEach(([e, t]) => s.addProof(f, n.signBytes(e, d), t)), f.id = n.base58Encode(n.base58Encode(n.blake2b(d))), f
            };
            const c = e => null == e ? [] : e.map(e => Object.assign({}, e, {
                assetId: "WAVES" === e.assetId ? null : e.assetId
            }))
        },
        6614: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(9709);
            t.Asset = i.Asset;
            var n = r(9710);
            t.Candle = n.Candle;
            var s = r(9711);
            t.Money = s.Money;
            var o = r(9712);
            t.OrderPrice = o.OrderPrice;
            var a = r(9713);
            t.AssetPair = a.AssetPair;
            var c = r(6615);
            t.config = c.config
        },
        6615: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                remapAsset: function(e) {
                    return e
                },
                remapCandle: function(e) {
                    return e
                }
            };
            ! function(e) {
                e.get = function(e) {
                    return i[e]
                }, e.set = function e(t, r) {
                    "string" == typeof t ? i[t] = r : Object.keys(t).forEach((function(r) {
                        return e(r, t[r])
                    }))
                }
            }(t.config || (t.config = {}))
        },
        6616: function(e, t, r) {
            ! function(e) {
                "use strict";
                var t = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    r = Math.ceil,
                    i = Math.floor,
                    n = "[BigNumber Error] ",
                    s = n + "Number primitive has more than 15 significant digits: ",
                    o = 1e14,
                    a = 14,
                    c = 9007199254740991,
                    u = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    l = 1e7,
                    f = 1e9;

                function d(e) {
                    var t = 0 | e;
                    return e > 0 || e === t ? t : t - 1
                }

                function p(e) {
                    for (var t, r, i = 1, n = e.length, s = e[0] + ""; i < n;) {
                        for (t = e[i++] + "", r = a - t.length; r--; t = "0" + t);
                        s += t
                    }
                    for (n = s.length; 48 === s.charCodeAt(--n););
                    return s.slice(0, n + 1 || 1)
                }

                function h(e, t) {
                    var r, i, n = e.c,
                        s = t.c,
                        o = e.s,
                        a = t.s,
                        c = e.e,
                        u = t.e;
                    if (!o || !a) return null;
                    if (r = n && !n[0], i = s && !s[0], r || i) return r ? i ? 0 : -a : o;
                    if (o != a) return o;
                    if (r = o < 0, i = c == u, !n || !s) return i ? 0 : !n ^ r ? 1 : -1;
                    if (!i) return c > u ^ r ? 1 : -1;
                    for (a = (c = n.length) < (u = s.length) ? c : u, o = 0; o < a; o++)
                        if (n[o] != s[o]) return n[o] > s[o] ^ r ? 1 : -1;
                    return c == u ? 0 : c > u ^ r ? 1 : -1
                }

                function m(e, t, r, s) {
                    if (e < t || e > r || e !== i(e)) throw Error(n + (s || "Argument") + ("number" == typeof e ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function y(e) {
                    var t = e.c.length - 1;
                    return d(e.e / a) == t && e.c[t] % 2 != 0
                }

                function v(e, t) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function b(e, t, r) {
                    var i, n;
                    if (t < 0) {
                        for (n = r + "."; ++t; n += r);
                        e = n + e
                    } else if (++t > (i = e.length)) {
                        for (n = r, t -= i; --t; n += r);
                        e += n
                    } else t < i && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }
                var g = function e(g) {
                        var S, A, E, T, N, _, P, O, I, w = K.prototype = {
                                constructor: K,
                                toString: null,
                                valueOf: null
                            },
                            R = new K(1),
                            B = 20,
                            C = 4,
                            L = -7,
                            F = 21,
                            x = -1e7,
                            j = 1e7,
                            V = !1,
                            D = 1,
                            k = 0,
                            U = {
                                prefix: "",
                                groupSize: 3,
                                secondaryGroupSize: 0,
                                groupSeparator: ",",
                                decimalSeparator: ".",
                                fractionGroupSize: 0,
                                fractionGroupSeparator: " ",
                                suffix: ""
                            },
                            M = "0123456789abcdefghijklmnopqrstuvwxyz";

                        function K(e, r) {
                            var n, o, u, l, f, d, p, h, y = this;
                            if (!(y instanceof K)) return new K(e, r);
                            if (null == r) {
                                if (e && !0 === e._isBigNumber) return y.s = e.s, void(!e.c || e.e > j ? y.c = y.e = null : e.e < x ? y.c = [y.e = 0] : (y.e = e.e, y.c = e.c.slice()));
                                if ((d = "number" == typeof e) && 0 * e == 0) {
                                    if (y.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                        for (l = 0, f = e; f >= 10; f /= 10, l++);
                                        return void(l > j ? y.c = y.e = null : (y.e = l, y.c = [e]))
                                    }
                                    h = String(e)
                                } else {
                                    if (!t.test(h = String(e))) return E(y, h, d);
                                    y.s = 45 == h.charCodeAt(0) ? (h = h.slice(1), -1) : 1
                                }(l = h.indexOf(".")) > -1 && (h = h.replace(".", "")), (f = h.search(/e/i)) > 0 ? (l < 0 && (l = f), l += +h.slice(f + 1), h = h.substring(0, f)) : l < 0 && (l = h.length)
                            } else {
                                if (m(r, 2, M.length, "Base"), 10 == r) return H(y = new K(e), B + y.e + 1, C);
                                if (h = String(e), d = "number" == typeof e) {
                                    if (0 * e != 0) return E(y, h, d, r);
                                    if (y.s = 1 / e < 0 ? (h = h.slice(1), -1) : 1, K.DEBUG && h.replace(/^0\.0*|\./, "").length > 15) throw Error(s + e)
                                } else y.s = 45 === h.charCodeAt(0) ? (h = h.slice(1), -1) : 1;
                                for (n = M.slice(0, r), l = f = 0, p = h.length; f < p; f++)
                                    if (n.indexOf(o = h.charAt(f)) < 0) {
                                        if ("." == o) {
                                            if (f > l) {
                                                l = p;
                                                continue
                                            }
                                        } else if (!u && (h == h.toUpperCase() && (h = h.toLowerCase()) || h == h.toLowerCase() && (h = h.toUpperCase()))) {
                                            u = !0, f = -1, l = 0;
                                            continue
                                        }
                                        return E(y, String(e), d, r)
                                    } d = !1, (l = (h = A(h, r, 10, y.s)).indexOf(".")) > -1 ? h = h.replace(".", "") : l = h.length
                            }
                            for (f = 0; 48 === h.charCodeAt(f); f++);
                            for (p = h.length; 48 === h.charCodeAt(--p););
                            if (h = h.slice(f, ++p)) {
                                if (p -= f, d && K.DEBUG && p > 15 && (e > c || e !== i(e))) throw Error(s + y.s * e);
                                if ((l = l - f - 1) > j) y.c = y.e = null;
                                else if (l < x) y.c = [y.e = 0];
                                else {
                                    if (y.e = l, y.c = [], f = (l + 1) % a, l < 0 && (f += a), f < p) {
                                        for (f && y.c.push(+h.slice(0, f)), p -= a; f < p;) y.c.push(+h.slice(f, f += a));
                                        f = a - (h = h.slice(f)).length
                                    } else f -= p;
                                    for (; f--; h += "0");
                                    y.c.push(+h)
                                }
                            } else y.c = [y.e = 0]
                        }

                        function q(e, t, r, i) {
                            var n, s, o, a, c;
                            if (null == r ? r = C : m(r, 0, 8), !e.c) return e.toString();
                            if (n = e.c[0], o = e.e, null == t) c = p(e.c), c = 1 == i || 2 == i && (o <= L || o >= F) ? v(c, o) : b(c, o, "0");
                            else if (s = (e = H(new K(e), t, r)).e, a = (c = p(e.c)).length, 1 == i || 2 == i && (t <= s || s <= L)) {
                                for (; a < t; c += "0", a++);
                                c = v(c, s)
                            } else if (t -= o, c = b(c, s, "0"), s + 1 > a) {
                                if (--t > 0)
                                    for (c += "."; t--; c += "0");
                            } else if ((t += s - a) > 0)
                                for (s + 1 == a && (c += "."); t--; c += "0");
                            return e.s < 0 && n ? "-" + c : c
                        }

                        function G(e, t) {
                            for (var r, i = 1, n = new K(e[0]); i < e.length; i++) {
                                if (!(r = new K(e[i])).s) {
                                    n = r;
                                    break
                                }
                                t.call(n, r) && (n = r)
                            }
                            return n
                        }

                        function Y(e, t, r) {
                            for (var i = 1, n = t.length; !t[--n]; t.pop());
                            for (n = t[0]; n >= 10; n /= 10, i++);
                            return (r = i + r * a - 1) > j ? e.c = e.e = null : r < x ? e.c = [e.e = 0] : (e.e = r, e.c = t), e
                        }

                        function H(e, t, n, s) {
                            var c, l, f, d, p, h, m, y = e.c,
                                v = u;
                            if (y) {
                                e: {
                                    for (c = 1, d = y[0]; d >= 10; d /= 10, c++);
                                    if ((l = t - c) < 0) l += a,
                                    f = t,
                                    m = (p = y[h = 0]) / v[c - f - 1] % 10 | 0;
                                    else if ((h = r((l + 1) / a)) >= y.length) {
                                        if (!s) break e;
                                        for (; y.length <= h; y.push(0));
                                        p = m = 0, c = 1, f = (l %= a) - a + 1
                                    } else {
                                        for (p = d = y[h], c = 1; d >= 10; d /= 10, c++);
                                        m = (f = (l %= a) - a + c) < 0 ? 0 : p / v[c - f - 1] % 10 | 0
                                    }
                                    if (s = s || t < 0 || null != y[h + 1] || (f < 0 ? p : p % v[c - f - 1]), s = n < 4 ? (m || s) && (0 == n || n == (e.s < 0 ? 3 : 2)) : m > 5 || 5 == m && (4 == n || s || 6 == n && (l > 0 ? f > 0 ? p / v[c - f] : 0 : y[h - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !y[0]) return y.length = 0,
                                    s ? (t -= e.e + 1, y[0] = v[(a - t % a) % a], e.e = -t || 0) : y[0] = e.e = 0,
                                    e;
                                    if (0 == l ? (y.length = h, d = 1, h--) : (y.length = h + 1, d = v[a - l], y[h] = f > 0 ? i(p / v[c - f] % v[f]) * d : 0), s)
                                        for (;;) {
                                            if (0 == h) {
                                                for (l = 1, f = y[0]; f >= 10; f /= 10, l++);
                                                for (f = y[0] += d, d = 1; f >= 10; f /= 10, d++);
                                                l != d && (e.e++, y[0] == o && (y[0] = 1));
                                                break
                                            }
                                            if (y[h] += d, y[h] != o) break;
                                            y[h--] = 0, d = 1
                                        }
                                    for (l = y.length; 0 === y[--l]; y.pop());
                                }
                                e.e > j ? e.c = e.e = null : e.e < x && (e.c = [e.e = 0])
                            }
                            return e
                        }

                        function z(e) {
                            var t, r = e.e;
                            return null === r ? e.toString() : (t = p(e.c), t = r <= L || r >= F ? v(t, r) : b(t, r, "0"), e.s < 0 ? "-" + t : t)
                        }
                        return K.clone = e, K.ROUND_UP = 0, K.ROUND_DOWN = 1, K.ROUND_CEIL = 2, K.ROUND_FLOOR = 3, K.ROUND_HALF_UP = 4, K.ROUND_HALF_DOWN = 5, K.ROUND_HALF_EVEN = 6, K.ROUND_HALF_CEIL = 7, K.ROUND_HALF_FLOOR = 8, K.EUCLID = 9, K.config = K.set = function(e) {
                            var t, r;
                            if (null != e) {
                                if ("object" != typeof e) throw Error(n + "Object expected: " + e);
                                if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (m(r = e[t], 0, f, t), B = r), e.hasOwnProperty(t = "ROUNDING_MODE") && (m(r = e[t], 0, 8, t), C = r), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((r = e[t]) && r.pop ? (m(r[0], -f, 0, t), m(r[1], 0, f, t), L = r[0], F = r[1]) : (m(r, -f, f, t), L = -(F = r < 0 ? -r : r))), e.hasOwnProperty(t = "RANGE"))
                                    if ((r = e[t]) && r.pop) m(r[0], -f, -1, t), m(r[1], 1, f, t), x = r[0], j = r[1];
                                    else {
                                        if (m(r, -f, f, t), !r) throw Error(n + t + " cannot be zero: " + r);
                                        x = -(j = r < 0 ? -r : r)
                                    } if (e.hasOwnProperty(t = "CRYPTO")) {
                                    if ((r = e[t]) !== !!r) throw Error(n + t + " not true or false: " + r);
                                    if (r) {
                                        if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw V = !r, Error(n + "crypto unavailable");
                                        V = r
                                    } else V = r
                                }
                                if (e.hasOwnProperty(t = "MODULO_MODE") && (m(r = e[t], 0, 9, t), D = r), e.hasOwnProperty(t = "POW_PRECISION") && (m(r = e[t], 0, f, t), k = r), e.hasOwnProperty(t = "FORMAT")) {
                                    if ("object" != typeof(r = e[t])) throw Error(n + t + " not an object: " + r);
                                    U = r
                                }
                                if (e.hasOwnProperty(t = "ALPHABET")) {
                                    if ("string" != typeof(r = e[t]) || /^.$|[+-.\s]|(.).*\1/.test(r)) throw Error(n + t + " invalid: " + r);
                                    M = r
                                }
                            }
                            return {
                                DECIMAL_PLACES: B,
                                ROUNDING_MODE: C,
                                EXPONENTIAL_AT: [L, F],
                                RANGE: [x, j],
                                CRYPTO: V,
                                MODULO_MODE: D,
                                POW_PRECISION: k,
                                FORMAT: U,
                                ALPHABET: M
                            }
                        }, K.isBigNumber = function(e) {
                            if (!e || !0 !== e._isBigNumber) return !1;
                            if (!K.DEBUG) return !0;
                            var t, r, s = e.c,
                                c = e.e,
                                u = e.s;
                            e: if ("[object Array]" == {}.toString.call(s)) {
                                if ((1 === u || -1 === u) && c >= -f && c <= f && c === i(c)) {
                                    if (0 === s[0]) {
                                        if (0 === c && 1 === s.length) return !0;
                                        break e
                                    }
                                    if ((t = (c + 1) % a) < 1 && (t += a), String(s[0]).length == t) {
                                        for (t = 0; t < s.length; t++)
                                            if ((r = s[t]) < 0 || r >= o || r !== i(r)) break e;
                                        if (0 !== r) return !0
                                    }
                                }
                            } else if (null === s && null === c && (null === u || 1 === u || -1 === u)) return !0;
                            throw Error(n + "Invalid BigNumber: " + e)
                        }, K.maximum = K.max = function() {
                            return G(arguments, w.lt)
                        }, K.minimum = K.min = function() {
                            return G(arguments, w.gt)
                        }, K.random = (T = 9007199254740992 * Math.random() & 2097151 ? function() {
                            return i(9007199254740992 * Math.random())
                        } : function() {
                            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                        }, function(e) {
                            var t, s, o, c, l, d = 0,
                                p = [],
                                h = new K(R);
                            if (null == e ? e = B : m(e, 0, f), c = r(e / a), V)
                                if (crypto.getRandomValues) {
                                    for (t = crypto.getRandomValues(new Uint32Array(c *= 2)); d < c;)(l = 131072 * t[d] + (t[d + 1] >>> 11)) >= 9e15 ? (s = crypto.getRandomValues(new Uint32Array(2)), t[d] = s[0], t[d + 1] = s[1]) : (p.push(l % 1e14), d += 2);
                                    d = c / 2
                                } else {
                                    if (!crypto.randomBytes) throw V = !1, Error(n + "crypto unavailable");
                                    for (t = crypto.randomBytes(c *= 7); d < c;)(l = 281474976710656 * (31 & t[d]) + 1099511627776 * t[d + 1] + 4294967296 * t[d + 2] + 16777216 * t[d + 3] + (t[d + 4] << 16) + (t[d + 5] << 8) + t[d + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, d) : (p.push(l % 1e14), d += 7);
                                    d = c / 7
                                } if (!V)
                                for (; d < c;)(l = T()) < 9e15 && (p[d++] = l % 1e14);
                            for (c = p[--d], e %= a, c && e && (l = u[a - e], p[d] = i(c / l) * l); 0 === p[d]; p.pop(), d--);
                            if (d < 0) p = [o = 0];
                            else {
                                for (o = -1; 0 === p[0]; p.splice(0, 1), o -= a);
                                for (d = 1, l = p[0]; l >= 10; l /= 10, d++);
                                d < a && (o -= a - d)
                            }
                            return h.e = o, h.c = p, h
                        }), K.sum = function() {
                            for (var e = 1, t = arguments, r = new K(t[0]); e < t.length;) r = r.plus(t[e++]);
                            return r
                        }, A = function() {
                            function e(e, t, r, i) {
                                for (var n, s, o = [0], a = 0, c = e.length; a < c;) {
                                    for (s = o.length; s--; o[s] *= t);
                                    for (o[0] += i.indexOf(e.charAt(a++)), n = 0; n < o.length; n++) o[n] > r - 1 && (null == o[n + 1] && (o[n + 1] = 0), o[n + 1] += o[n] / r | 0, o[n] %= r)
                                }
                                return o.reverse()
                            }
                            return function(t, r, i, n, s) {
                                var o, a, c, u, l, f, d, h, m = t.indexOf("."),
                                    y = B,
                                    v = C;
                                for (m >= 0 && (u = k, k = 0, t = t.replace(".", ""), f = (h = new K(r)).pow(t.length - m), k = u, h.c = e(b(p(f.c), f.e, "0"), 10, i, "0123456789"), h.e = h.c.length), c = u = (d = e(t, r, i, s ? (o = M, "0123456789") : (o = "0123456789", M))).length; 0 == d[--u]; d.pop());
                                if (!d[0]) return o.charAt(0);
                                if (m < 0 ? --c : (f.c = d, f.e = c, f.s = n, d = (f = S(f, h, y, v, i)).c, l = f.r, c = f.e), m = d[a = c + y + 1], u = i / 2, l = l || a < 0 || null != d[a + 1], l = v < 4 ? (null != m || l) && (0 == v || v == (f.s < 0 ? 3 : 2)) : m > u || m == u && (4 == v || l || 6 == v && 1 & d[a - 1] || v == (f.s < 0 ? 8 : 7)), a < 1 || !d[0]) t = l ? b(o.charAt(1), -y, o.charAt(0)) : o.charAt(0);
                                else {
                                    if (d.length = a, l)
                                        for (--i; ++d[--a] > i;) d[a] = 0, a || (++c, d = [1].concat(d));
                                    for (u = d.length; !d[--u];);
                                    for (m = 0, t = ""; m <= u; t += o.charAt(d[m++]));
                                    t = b(t, c, o.charAt(0))
                                }
                                return t
                            }
                        }(), S = function() {
                            function e(e, t, r) {
                                var i, n, s, o, a = 0,
                                    c = e.length,
                                    u = t % l,
                                    f = t / l | 0;
                                for (e = e.slice(); c--;) a = ((n = u * (s = e[c] % l) + (i = f * s + (o = e[c] / l | 0) * u) % l * l + a) / r | 0) + (i / l | 0) + f * o, e[c] = n % r;
                                return a && (e = [a].concat(e)), e
                            }

                            function t(e, t, r, i) {
                                var n, s;
                                if (r != i) s = r > i ? 1 : -1;
                                else
                                    for (n = s = 0; n < r; n++)
                                        if (e[n] != t[n]) {
                                            s = e[n] > t[n] ? 1 : -1;
                                            break
                                        } return s
                            }

                            function r(e, t, r, i) {
                                for (var n = 0; r--;) e[r] -= n, n = e[r] < t[r] ? 1 : 0, e[r] = n * i + e[r] - t[r];
                                for (; !e[0] && e.length > 1; e.splice(0, 1));
                            }
                            return function(n, s, c, u, l) {
                                var f, p, h, m, y, v, b, g, S, A, E, T, N, _, P, O, I, w = n.s == s.s ? 1 : -1,
                                    R = n.c,
                                    B = s.c;
                                if (!(R && R[0] && B && B[0])) return new K(n.s && s.s && (R ? !B || R[0] != B[0] : B) ? R && 0 == R[0] || !B ? 0 * w : w / 0 : NaN);
                                for (S = (g = new K(w)).c = [], w = c + (p = n.e - s.e) + 1, l || (l = o, p = d(n.e / a) - d(s.e / a), w = w / a | 0), h = 0; B[h] == (R[h] || 0); h++);
                                if (B[h] > (R[h] || 0) && p--, w < 0) S.push(1), m = !0;
                                else {
                                    for (_ = R.length, O = B.length, h = 0, w += 2, (y = i(l / (B[0] + 1))) > 1 && (B = e(B, y, l), R = e(R, y, l), O = B.length, _ = R.length), N = O, E = (A = R.slice(0, O)).length; E < O; A[E++] = 0);
                                    I = B.slice(), I = [0].concat(I), P = B[0], B[1] >= l / 2 && P++;
                                    do {
                                        if (y = 0, (f = t(B, A, O, E)) < 0) {
                                            if (T = A[0], O != E && (T = T * l + (A[1] || 0)), (y = i(T / P)) > 1)
                                                for (y >= l && (y = l - 1), b = (v = e(B, y, l)).length, E = A.length; 1 == t(v, A, b, E);) y--, r(v, O < b ? I : B, b, l), b = v.length, f = 1;
                                            else 0 == y && (f = y = 1), b = (v = B.slice()).length;
                                            if (b < E && (v = [0].concat(v)), r(A, v, E, l), E = A.length, -1 == f)
                                                for (; t(B, A, O, E) < 1;) y++, r(A, O < E ? I : B, E, l), E = A.length
                                        } else 0 === f && (y++, A = [0]);
                                        S[h++] = y, A[0] ? A[E++] = R[N] || 0 : (A = [R[N]], E = 1)
                                    } while ((N++ < _ || null != A[0]) && w--);
                                    m = null != A[0], S[0] || S.splice(0, 1)
                                }
                                if (l == o) {
                                    for (h = 1, w = S[0]; w >= 10; w /= 10, h++);
                                    H(g, c + (g.e = h + p * a - 1) + 1, u, m)
                                } else g.e = p, g.r = +m;
                                return g
                            }
                        }(), N = /^(-?)0([xbo])(?=\w[\w.]*$)/i, _ = /^([^.]+)\.$/, P = /^\.([^.]+)$/, O = /^-?(Infinity|NaN)$/, I = /^\s*\+(?=[\w.])|^\s+|\s+$/g, E = function(e, t, r, i) {
                            var s, o = r ? t : t.replace(I, "");
                            if (O.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1;
                            else {
                                if (!r && (o = o.replace(N, (function(e, t, r) {
                                        return s = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, i && i != s ? e : t
                                    })), i && (s = i, o = o.replace(_, "$1").replace(P, "0.$1")), t != o)) return new K(o, s);
                                if (K.DEBUG) throw Error(n + "Not a" + (i ? " base " + i : "") + " number: " + t);
                                e.s = null
                            }
                            e.c = e.e = null
                        }, w.absoluteValue = w.abs = function() {
                            var e = new K(this);
                            return e.s < 0 && (e.s = 1), e
                        }, w.comparedTo = function(e, t) {
                            return h(this, new K(e, t))
                        }, w.decimalPlaces = w.dp = function(e, t) {
                            var r, i, n, s = this;
                            if (null != e) return m(e, 0, f), null == t ? t = C : m(t, 0, 8), H(new K(s), e + s.e + 1, t);
                            if (!(r = s.c)) return null;
                            if (i = ((n = r.length - 1) - d(this.e / a)) * a, n = r[n])
                                for (; n % 10 == 0; n /= 10, i--);
                            return i < 0 && (i = 0), i
                        }, w.dividedBy = w.div = function(e, t) {
                            return S(this, new K(e, t), B, C)
                        }, w.dividedToIntegerBy = w.idiv = function(e, t) {
                            return S(this, new K(e, t), 0, 1)
                        }, w.exponentiatedBy = w.pow = function(e, t) {
                            var s, o, c, u, l, f, d, p, h = this;
                            if ((e = new K(e)).c && !e.isInteger()) throw Error(n + "Exponent not an integer: " + z(e));
                            if (null != t && (t = new K(t)), l = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return p = new K(Math.pow(+z(h), l ? 2 - y(e) : +z(e))), t ? p.mod(t) : p;
                            if (f = e.s < 0, t) {
                                if (t.c ? !t.c[0] : !t.s) return new K(NaN);
                                (o = !f && h.isInteger() && t.isInteger()) && (h = h.mod(t))
                            } else {
                                if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || l && h.c[1] >= 24e7 : h.c[0] < 8e13 || l && h.c[0] <= 9999975e7))) return u = h.s < 0 && y(e) ? -0 : 0, h.e > -1 && (u = 1 / u), new K(f ? 1 / u : u);
                                k && (u = r(k / a + 2))
                            }
                            for (l ? (s = new K(.5), f && (e.s = 1), d = y(e)) : d = (c = Math.abs(+z(e))) % 2, p = new K(R);;) {
                                if (d) {
                                    if (!(p = p.times(h)).c) break;
                                    u ? p.c.length > u && (p.c.length = u) : o && (p = p.mod(t))
                                }
                                if (c) {
                                    if (0 === (c = i(c / 2))) break;
                                    d = c % 2
                                } else if (H(e = e.times(s), e.e + 1, 1), e.e > 14) d = y(e);
                                else {
                                    if (0 == (c = +z(e))) break;
                                    d = c % 2
                                }
                                h = h.times(h), u ? h.c && h.c.length > u && (h.c.length = u) : o && (h = h.mod(t))
                            }
                            return o ? p : (f && (p = R.div(p)), t ? p.mod(t) : u ? H(p, k, C, void 0) : p)
                        }, w.integerValue = function(e) {
                            var t = new K(this);
                            return null == e ? e = C : m(e, 0, 8), H(t, t.e + 1, e)
                        }, w.isEqualTo = w.eq = function(e, t) {
                            return 0 === h(this, new K(e, t))
                        }, w.isFinite = function() {
                            return !!this.c
                        }, w.isGreaterThan = w.gt = function(e, t) {
                            return h(this, new K(e, t)) > 0
                        }, w.isGreaterThanOrEqualTo = w.gte = function(e, t) {
                            return 1 === (t = h(this, new K(e, t))) || 0 === t
                        }, w.isInteger = function() {
                            return !!this.c && d(this.e / a) > this.c.length - 2
                        }, w.isLessThan = w.lt = function(e, t) {
                            return h(this, new K(e, t)) < 0
                        }, w.isLessThanOrEqualTo = w.lte = function(e, t) {
                            return -1 === (t = h(this, new K(e, t))) || 0 === t
                        }, w.isNaN = function() {
                            return !this.s
                        }, w.isNegative = function() {
                            return this.s < 0
                        }, w.isPositive = function() {
                            return this.s > 0
                        }, w.isZero = function() {
                            return !!this.c && 0 == this.c[0]
                        }, w.minus = function(e, t) {
                            var r, i, n, s, c = this,
                                u = c.s;
                            if (t = (e = new K(e, t)).s, !u || !t) return new K(NaN);
                            if (u != t) return e.s = -t, c.plus(e);
                            var l = c.e / a,
                                f = e.e / a,
                                p = c.c,
                                h = e.c;
                            if (!l || !f) {
                                if (!p || !h) return p ? (e.s = -t, e) : new K(h ? c : NaN);
                                if (!p[0] || !h[0]) return h[0] ? (e.s = -t, e) : new K(p[0] ? c : 3 == C ? -0 : 0)
                            }
                            if (l = d(l), f = d(f), p = p.slice(), u = l - f) {
                                for ((s = u < 0) ? (u = -u, n = p) : (f = l, n = h), n.reverse(), t = u; t--; n.push(0));
                                n.reverse()
                            } else
                                for (i = (s = (u = p.length) < (t = h.length)) ? u : t, u = t = 0; t < i; t++)
                                    if (p[t] != h[t]) {
                                        s = p[t] < h[t];
                                        break
                                    } if (s && (n = p, p = h, h = n, e.s = -e.s), (t = (i = h.length) - (r = p.length)) > 0)
                                for (; t--; p[r++] = 0);
                            for (t = o - 1; i > u;) {
                                if (p[--i] < h[i]) {
                                    for (r = i; r && !p[--r]; p[r] = t);
                                    --p[r], p[i] += o
                                }
                                p[i] -= h[i]
                            }
                            for (; 0 == p[0]; p.splice(0, 1), --f);
                            return p[0] ? Y(e, p, f) : (e.s = 3 == C ? -1 : 1, e.c = [e.e = 0], e)
                        }, w.modulo = w.mod = function(e, t) {
                            var r, i, n = this;
                            return e = new K(e, t), !n.c || !e.s || e.c && !e.c[0] ? new K(NaN) : !e.c || n.c && !n.c[0] ? new K(n) : (9 == D ? (i = e.s, e.s = 1, r = S(n, e, 0, 3), e.s = i, r.s *= i) : r = S(n, e, 0, D), (e = n.minus(r.times(e))).c[0] || 1 != D || (e.s = n.s), e)
                        }, w.multipliedBy = w.times = function(e, t) {
                            var r, i, n, s, c, u, f, p, h, m, y, v, b, g, S, A = this,
                                E = A.c,
                                T = (e = new K(e, t)).c;
                            if (!(E && T && E[0] && T[0])) return !A.s || !e.s || E && !E[0] && !T || T && !T[0] && !E ? e.c = e.e = e.s = null : (e.s *= A.s, E && T ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                            for (i = d(A.e / a) + d(e.e / a), e.s *= A.s, (f = E.length) < (m = T.length) && (b = E, E = T, T = b, n = f, f = m, m = n), n = f + m, b = []; n--; b.push(0));
                            for (g = o, S = l, n = m; --n >= 0;) {
                                for (r = 0, y = T[n] % S, v = T[n] / S | 0, s = n + (c = f); s > n;) r = ((p = y * (p = E[--c] % S) + (u = v * p + (h = E[c] / S | 0) * y) % S * S + b[s] + r) / g | 0) + (u / S | 0) + v * h, b[s--] = p % g;
                                b[s] = r
                            }
                            return r ? ++i : b.splice(0, 1), Y(e, b, i)
                        }, w.negated = function() {
                            var e = new K(this);
                            return e.s = -e.s || null, e
                        }, w.plus = function(e, t) {
                            var r, i = this,
                                n = i.s;
                            if (t = (e = new K(e, t)).s, !n || !t) return new K(NaN);
                            if (n != t) return e.s = -t, i.minus(e);
                            var s = i.e / a,
                                c = e.e / a,
                                u = i.c,
                                l = e.c;
                            if (!s || !c) {
                                if (!u || !l) return new K(n / 0);
                                if (!u[0] || !l[0]) return l[0] ? e : new K(u[0] ? i : 0 * n)
                            }
                            if (s = d(s), c = d(c), u = u.slice(), n = s - c) {
                                for (n > 0 ? (c = s, r = l) : (n = -n, r = u), r.reverse(); n--; r.push(0));
                                r.reverse()
                            }
                            for ((n = u.length) - (t = l.length) < 0 && (r = l, l = u, u = r, t = n), n = 0; t;) n = (u[--t] = u[t] + l[t] + n) / o | 0, u[t] = o === u[t] ? 0 : u[t] % o;
                            return n && (u = [n].concat(u), ++c), Y(e, u, c)
                        }, w.precision = w.sd = function(e, t) {
                            var r, i, n, s = this;
                            if (null != e && e !== !!e) return m(e, 1, f), null == t ? t = C : m(t, 0, 8), H(new K(s), e, t);
                            if (!(r = s.c)) return null;
                            if (i = (n = r.length - 1) * a + 1, n = r[n]) {
                                for (; n % 10 == 0; n /= 10, i--);
                                for (n = r[0]; n >= 10; n /= 10, i++);
                            }
                            return e && s.e + 1 > i && (i = s.e + 1), i
                        }, w.shiftedBy = function(e) {
                            return m(e, -c, c), this.times("1e" + e)
                        }, w.squareRoot = w.sqrt = function() {
                            var e, t, r, i, n, s = this,
                                o = s.c,
                                a = s.s,
                                c = s.e,
                                u = B + 4,
                                l = new K("0.5");
                            if (1 !== a || !o || !o[0]) return new K(!a || a < 0 && (!o || o[0]) ? NaN : o ? s : 1 / 0);
                            if (0 == (a = Math.sqrt(+z(s))) || a == 1 / 0 ? (((t = p(o)).length + c) % 2 == 0 && (t += "0"), a = Math.sqrt(+t), c = d((c + 1) / 2) - (c < 0 || c % 2), r = new K(t = a == 1 / 0 ? "5e" + c : (t = a.toExponential()).slice(0, t.indexOf("e") + 1) + c)) : r = new K(a + ""), r.c[0])
                                for ((a = (c = r.e) + u) < 3 && (a = 0);;)
                                    if (n = r, r = l.times(n.plus(S(s, n, u, 1))), p(n.c).slice(0, a) === (t = p(r.c)).slice(0, a)) {
                                        if (r.e < c && --a, "9999" != (t = t.slice(a - 3, a + 1)) && (i || "4999" != t)) {
                                            +t && (+t.slice(1) || "5" != t.charAt(0)) || (H(r, r.e + B + 2, 1), e = !r.times(r).eq(s));
                                            break
                                        }
                                        if (!i && (H(n, n.e + B + 2, 0), n.times(n).eq(s))) {
                                            r = n;
                                            break
                                        }
                                        u += 4, a += 4, i = 1
                                    } return H(r, r.e + B + 1, C, e)
                        }, w.toExponential = function(e, t) {
                            return null != e && (m(e, 0, f), e++), q(this, e, t, 1)
                        }, w.toFixed = function(e, t) {
                            return null != e && (m(e, 0, f), e = e + this.e + 1), q(this, e, t)
                        }, w.toFormat = function(e, t, r) {
                            var i, s = this;
                            if (null == r) null != e && t && "object" == typeof t ? (r = t, t = null) : e && "object" == typeof e ? (r = e, e = t = null) : r = U;
                            else if ("object" != typeof r) throw Error(n + "Argument not an object: " + r);
                            if (i = s.toFixed(e, t), s.c) {
                                var o, a = i.split("."),
                                    c = +r.groupSize,
                                    u = +r.secondaryGroupSize,
                                    l = r.groupSeparator || "",
                                    f = a[0],
                                    d = a[1],
                                    p = s.s < 0,
                                    h = p ? f.slice(1) : f,
                                    m = h.length;
                                if (u && (o = c, c = u, u = o, m -= o), c > 0 && m > 0) {
                                    for (o = m % c || c, f = h.substr(0, o); o < m; o += c) f += l + h.substr(o, c);
                                    u > 0 && (f += l + h.slice(o)), p && (f = "-" + f)
                                }
                                i = d ? f + (r.decimalSeparator || "") + ((u = +r.fractionGroupSize) ? d.replace(new RegExp("\\d{" + u + "}\\B", "g"), "$&" + (r.fractionGroupSeparator || "")) : d) : f
                            }
                            return (r.prefix || "") + i + (r.suffix || "")
                        }, w.toFraction = function(e) {
                            var t, r, i, s, o, c, l, f, d, h, m, y, v = this,
                                b = v.c;
                            if (null != e && (!(l = new K(e)).isInteger() && (l.c || 1 !== l.s) || l.lt(R))) throw Error(n + "Argument " + (l.isInteger() ? "out of range: " : "not an integer: ") + z(l));
                            if (!b) return new K(v);
                            for (t = new K(R), d = r = new K(R), i = f = new K(R), y = p(b), o = t.e = y.length - v.e - 1, t.c[0] = u[(c = o % a) < 0 ? a + c : c], e = !e || l.comparedTo(t) > 0 ? o > 0 ? t : d : l, c = j, j = 1 / 0, l = new K(y), f.c[0] = 0; h = S(l, t, 0, 1), 1 != (s = r.plus(h.times(i))).comparedTo(e);) r = i, i = s, d = f.plus(h.times(s = d)), f = s, t = l.minus(h.times(s = t)), l = s;
                            return s = S(e.minus(r), i, 0, 1), f = f.plus(s.times(d)), r = r.plus(s.times(i)), f.s = d.s = v.s, m = S(d, i, o *= 2, C).minus(v).abs().comparedTo(S(f, r, o, C).minus(v).abs()) < 1 ? [d, i] : [f, r], j = c, m
                        }, w.toNumber = function() {
                            return +z(this)
                        }, w.toPrecision = function(e, t) {
                            return null != e && m(e, 1, f), q(this, e, t, 2)
                        }, w.toString = function(e) {
                            var t, r = this,
                                i = r.s,
                                n = r.e;
                            return null === n ? i ? (t = "Infinity", i < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = n <= L || n >= F ? v(p(r.c), n) : b(p(r.c), n, "0") : 10 === e ? t = b(p((r = H(new K(r), B + n + 1, C)).c), r.e, "0") : (m(e, 2, M.length, "Base"), t = A(b(p(r.c), n, "0"), 10, e, i, !0)), i < 0 && r.c[0] && (t = "-" + t)), t
                        }, w.valueOf = w.toJSON = function() {
                            return z(this)
                        }, w._isBigNumber = !0, w[Symbol.toStringTag] = "BigNumber", w[Symbol.for("nodejs.util.inspect.custom")] = w.valueOf, null != g && K.set(g), K
                    }(),
                    S = function() {
                        return (S = Object.assign || function(e) {
                            for (var t, r = 1, i = arguments.length; r < i; r++)
                                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e
                        }).apply(this, arguments)
                    },
                    A = function() {
                        function e() {
                            this.format = e.DEFAULT_FORMAT, g.config({
                                FORMAT: this.format
                            })
                        }
                        return e.prototype.set = function(e) {
                            "FORMAT" in e && (this.format = S({}, this.format, e.FORMAT), e.FORMAT = this.format), g.config(e)
                        }, e.DEFAULT_FORMAT = {
                            prefix: "",
                            decimalSeparator: ".",
                            groupSeparator: ",",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            fractionGroupSeparator: " ",
                            fractionGroupSize: 0,
                            suffix: ""
                        }, e
                    }();
                e.BigNumber = function() {
                        function e(t) {
                            "object" == typeof t && e.isBigNumber(t) ? this.bn = t.bn.plus(0) : this.bn = e.toBigNumberJs(t)
                        }
                        return e.prototype.clone = function() {
                            return new e(this)
                        }, e.prototype.add = function(t) {
                            return new e(this.bn.plus(e.toBigNumberJs(t)))
                        }, e.prototype.sub = function(t) {
                            return new e(this.bn.minus(e.toBigNumberJs(t)))
                        }, e.prototype.mul = function(t) {
                            return new e(this.bn.times(e.toBigNumberJs(t)))
                        }, e.prototype.div = function(t) {
                            return new e(this.bn.div(e.toBigNumberJs(t)))
                        }, e.prototype.pow = function(t) {
                            return new e(this.bn.pow(e.toBigNumberJs(t)))
                        }, e.prototype.sqrt = function() {
                            return new e(this.bn.sqrt())
                        }, e.prototype.abs = function() {
                            return new e(this.bn.abs())
                        }, e.prototype.mod = function(t) {
                            return new e(this.bn.mod(e.toBigNumberJs(t)))
                        }, e.prototype.roundTo = function(t, r) {
                            return void 0 === t && (t = 0), void 0 === r && (r = 4), new e(this.bn.dp(t || 0, r))
                        }, e.prototype.eq = function(t) {
                            return this.bn.eq(e.toBigNumberJs(t))
                        }, e.prototype.lt = function(t) {
                            return this.bn.lt(e.toBigNumberJs(t))
                        }, e.prototype.gt = function(t) {
                            return this.bn.gt(e.toBigNumberJs(t))
                        }, e.prototype.lte = function(t) {
                            return this.bn.lte(e.toBigNumberJs(t))
                        }, e.prototype.gte = function(t) {
                            return this.bn.gte(e.toBigNumberJs(t))
                        }, e.prototype.isNaN = function() {
                            return this.bn.isNaN()
                        }, e.prototype.isFinite = function() {
                            return this.bn.isFinite()
                        }, e.prototype.isZero = function() {
                            return this.eq(0)
                        }, e.prototype.isPositive = function() {
                            return this.gt(0)
                        }, e.prototype.isNegative = function() {
                            return this.lt(0)
                        }, e.prototype.isInt = function() {
                            return this.bn.isInteger()
                        }, e.prototype.getDecimalsCount = function() {
                            return this.bn.dp()
                        }, e.prototype.isEven = function() {
                            return this.mod(2).eq(0)
                        }, e.prototype.isOdd = function() {
                            return !this.isEven()
                        }, e.prototype.isInSignedRange = function() {
                            return this.gte(e.MIN_VALUE) && this.lte(e.MAX_VALUE)
                        }, e.prototype.isInUnsignedRange = function() {
                            return this.gte(e.MIN_UNSIGNED_VALUE) && this.lte(e.MAX_UNSIGNED_VALUE)
                        }, e.prototype.toFormat = function(e, t, r) {
                            return this.bn.toFormat(e, t, r)
                        }, e.prototype.toFixed = function(e, t) {
                            return null == e ? this.bn.toFixed() : this.bn.toFixed(e, t)
                        }, e.prototype.toString = function() {
                            return this.toFixed()
                        }, e.prototype.toNumber = function() {
                            return this.bn.toNumber()
                        }, e.prototype.toJSON = function() {
                            return this.bn.toFixed()
                        }, e.prototype.valueOf = function() {
                            return this.bn.valueOf()
                        }, e.prototype.toBytes = function(t) {
                            var r = void 0 === t ? {} : t,
                                i = r.isSigned,
                                n = void 0 === i || i,
                                s = r.isLong,
                                o = void 0 === s || s;
                            if (!this.isInt()) throw new Error("Cant create bytes from number with decimals!");
                            if (!n && this.isNegative()) throw new Error("Cant create bytes from negative number in signed mode!");
                            if (o && n && !this.isInSignedRange()) throw new Error("Number is not from signed numbers range");
                            if (o && !n && !this.isInUnsignedRange()) throw new Error("Number is not from unsigned numbers range");
                            var a = n && this.isNegative(),
                                c = a ? "1" : "0",
                                u = this.bn.plus(c).toString(2).replace("-", ""),
                                l = o ? 64 : 8 * Math.ceil(u.length / 8),
                                f = e._toLength(l, u).split(""),
                                d = [];
                            do {
                                d.push(parseInt(f.splice(0, 8).join(""), 2))
                            } while (f.length);
                            return a ? Uint8Array.from(d.map((function(e) {
                                return 255 - e
                            }))) : Uint8Array.from(d)
                        }, e.fromBytes = function(t, r) {
                            var i = void 0 === r ? {} : r,
                                n = i.isSigned,
                                s = void 0 === n || n,
                                o = i.isLong,
                                a = void 0 === o || o;
                            if (a && 8 !== t.length) throw new Error("Wrong bytes length! Minimal length is 8 byte!");
                            t = !a && t.length > 0 || a ? t : [0];
                            var c = !!s && t[0] > 127,
                                u = Array.from(t).map((function(e) {
                                    return c ? 255 - e : e
                                })).map((function(t) {
                                    return e._toLength(8, t.toString(2))
                                })).join(""),
                                l = new e(new g(u, 2));
                            return c ? l.mul(-1).sub(1) : l
                        }, e.max = function() {
                            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return e.toBigNumber(t).reduce((function(e, t) {
                                return e.gte(t) ? e : t
                            }))
                        }, e.min = function() {
                            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return e.toBigNumber(t).reduce((function(e, t) {
                                return e.lte(t) ? e : t
                            }))
                        }, e.sum = function() {
                            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            return e.toBigNumber(t).reduce((function(e, t) {
                                return e.add(t)
                            }))
                        }, e.isBigNumber = function(t) {
                            return t && "object" == typeof t && (t instanceof e || Object.entries(e.prototype).filter((function(e) {
                                return "_" !== e[0].charAt(0)
                            })).every((function(e) {
                                var r = e[0],
                                    i = e[1];
                                return r in t && typeof i == typeof t[r]
                            })))
                        }, e.toBigNumber = function(t) {
                            return Array.isArray(t) ? t.map((function(t) {
                                return new e(t)
                            })) : new e(t)
                        }, e.toBigNumberJs = function(t) {
                            return g.isBigNumber(t) ? t : t instanceof e ? t.bn : new g(t)
                        }, e._toLength = function(e, t) {
                            return new Array(e).fill("0", 0, e).concat(t.split("")).slice(-e).join("")
                        }, e.MIN_VALUE = new e("-9223372036854775808"), e.MAX_VALUE = new e("9223372036854775807"), e.MIN_UNSIGNED_VALUE = new e("0"), e.MAX_UNSIGNED_VALUE = new e("18446744073709551615"), e.config = new A, e
                    }(),
                    function(e) {
                        ! function(e) {
                            e[e.ROUND_UP = 0] = "ROUND_UP", e[e.ROUND_DOWN = 1] = "ROUND_DOWN", e[e.ROUND_CEIL = 2] = "ROUND_CEIL", e[e.ROUND_FLOOR = 3] = "ROUND_FLOOR", e[e.ROUND_HALF_UP = 4] = "ROUND_HALF_UP", e[e.ROUND_HALF_DOWN = 5] = "ROUND_HALF_DOWN", e[e.ROUND_HALF_EVEN = 6] = "ROUND_HALF_EVEN", e[e.ROUND_HALF_CEIL = 7] = "ROUND_HALF_CEIL", e[e.ROUND_HALF_FLOOR = 8] = "ROUND_HALF_FLOOR"
                        }(e.ROUND_MODE || (e.ROUND_MODE = {}))
                    }(e.BigNumber || (e.BigNumber = {}));
                var E = e.BigNumber;
                e.default = E, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t)
        },
        7383: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
                n = i.split("").reduce((e, t, r) => (e[t] = r, e), {});
            t.default = {
                encode(e) {
                    if (!e.length) return "";
                    const t = [0];
                    for (let r = 0; r < e.length; r++) {
                        for (let e = 0; e < t.length; e++) t[e] <<= 8;
                        t[0] += e[r];
                        let i = 0;
                        for (let e = 0; e < t.length; e++) t[e] += i, i = t[e] / 58 | 0, t[e] %= 58;
                        for (; i;) t.push(i % 58), i = i / 58 | 0
                    }
                    for (let r = 0; 0 === e[r] && r < e.length - 1; r++) t.push(0);
                    return t.reverse().map((function(e) {
                        return i[e]
                    })).join("")
                },
                decode(e) {
                    if (!e.length) return new Uint8Array(0);
                    const t = [0];
                    for (let r = 0; r < e.length; r++) {
                        const i = e[r];
                        if (!(i in n)) throw new Error(`There is no character "${i}" in the Base58 sequence!`);
                        for (let e = 0; e < t.length; e++) t[e] *= 58;
                        t[0] += n[i];
                        let s = 0;
                        for (let e = 0; e < t.length; e++) t[e] += s, s = t[e] >> 8, t[e] &= 255;
                        for (; s;) t.push(255 & s), s >>= 8
                    }
                    for (let r = 0;
                        "1" === e[r] && r < e.length - 1; r++) t.push(0);
                    return new Uint8Array(t.reverse())
                }
            }
        },
        7384: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(6236),
                n = r(6598),
                s = r(6075);
            t.serializerFromSchema = (e, r) => s => {
                let o, a;
                if ("array" === e.type) return o = t.serializerFromSchema(e.items, r), a = n.concat(...s.map(e => o(e))), n.concat((e.toBytes || i.SHORT)(s.length), a);
                if ("object" === e.type) {
                    let i = Uint8Array.from([]);
                    if (e.optional && null == s) return Uint8Array.from([0]);
                    if (e.schema.forEach(e => {
                            const [c, u] = e;
                            let l;
                            l = Array.isArray(c) ? c.reduce((e, t) => Object.assign({}, e, {
                                [t]: s[t]
                            }), {}) : s[c], o = t.serializerFromSchema(u, r), a = o(l), i = n.concat(i, a)
                        }), e.withLength) {
                        const t = e.withLength.toBytes(i.length);
                        i = n.concat(t, i)
                    }
                    return e.optional && (i = n.concat([1], i)), i
                }
                if ("anyOf" === e.type) {
                    const c = s[e.discriminatorField],
                        u = e.itemByKey(c);
                    if (null == u) throw new Error("Serializer Error: Unknown anyOf type: " + c);
                    return "boolean" === u.strKey && 6 === u.key && !1 === s.value && (u.key = 7), o = t.serializerFromSchema(u.schema, r), null == e.valueField ? o(s) : (a = o(s[e.valueField]), n.concat((e.toBytes || i.BYTE)(u.key), a))
                }
                if ("primitive" === e.type || void 0 === e.type) return e.toBytes(s);
                if ("dataTxField" === e.type) {
                    const c = i.LEN(i.SHORT)(i.STRING)(s.key),
                        u = s.type,
                        l = e.items.get(u);
                    if (null == l) throw new Error("Serializer Error: Unknown dataTxField type: " + u);
                    const f = [...e.items.values()].findIndex(e => e === l);
                    return o = t.serializerFromSchema(l, r), a = o(s.value), n.concat(c, i.BYTE(f), a)
                }
                throw new Error("Serializer Error: Unknown schema type: " + e.type)
            }, t.serializeTx = function(e, r) {
                const {
                    type: i,
                    version: n
                } = e, o = s.getTransactionSchema(i, n);
                return t.serializerFromSchema(o, r)(e)
            }, t.serializeOrder = function(e, r) {
                const i = e.version || 1,
                    n = s.orderVersionMap[i];
                if (null == n) throw new Error("Unknown order version: " + i);
                return t.serializerFromSchema(n, r)(e)
            }
        },
        7386: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5547),
                n = {
                    orderType: i.orEq(["sell", "buy"]),
                    senderPublicKey: i.isPublicKey,
                    matcherPublicKey: i.isPublicKey,
                    version: i.orEq([void 0, 0, 1, 2, 3]),
                    assetPair: i.validatePipe(i.isRequired(!0), i.pipe(i.prop("amountAsset"), i.isAssetId), i.pipe(i.prop("priceAsset"), i.isAssetId)),
                    price: i.isNumberLike,
                    amount: i.isNumberLike,
                    matcherFee: i.isNumberLike,
                    expiration: i.isNumberLike,
                    timestamp: i.isNumber,
                    proofs: i.ifElse(i.isArray, i.defaultValue(!0), i.orEq([void 0]))
                },
                s = {
                    matcherFeeAssetId: i.orEq([void 0, null, "WAVES"])
                },
                o = {
                    matcherFeeAssetId: i.isAssetId
                },
                a = i.validateByShema(n, i.getError),
                c = i.validateByShema(s, i.getError),
                u = i.validateByShema(o, i.getError);
            t.orderValidator = i.validatePipe(a, i.ifElse(i.pipe(i.prop("version"), i.isEq(3)), u, c))
        },
        7387: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5517),
                n = r(5510),
                s = r(5510),
                o = r(5546);

            function a(e) {
                if (1 === e.version) return i.concat([255, 255, 255, 1], n.serializePrimitives.BASE64_STRING(e.binary));
                if (2 === e.version) {
                    const t = s.binary.serializerFromSchema(n.schemas.txFields.data[1]);
                    return i.concat([255, 255, 255, 2], t(e.data))
                }
                throw new Error("Invalid CustomData version: " + e.version)
            }
            t.customData = function(e, t) {
                o.validate.customData(e);
                let r = a(e);
                const n = i.base58Encode(i.blake2b(r)),
                    s = e.publicKey ? e.publicKey : t && i.publicKey(t),
                    c = t && i.signBytes(t, r);
                return Object.assign({}, e, {
                    hash: n,
                    publicKey: s,
                    signature: c
                })
            }, t.serializeCustomData = a
        },
        7388: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5517),
                n = r(5510),
                {
                    STRING: s,
                    LEN: o,
                    SHORT: a
                } = n.serializePrimitives,
                c = r(5576),
                u = r(5546);
            t.serializeAuthData = e => i.concat(o(a)(s)("WavesWalletAuthentication"), o(a)(s)(e.host || ""), o(a)(s)(e.data || "")), t.auth = function(e, r, n) {
                const s = c.convertToPairs(r),
                    o = e.publicKey || c.getSenderPublicKey(s, {
                        senderPublicKey: void 0
                    });
                u.validate.auth(e);
                const a = {
                        hash: "",
                        signature: "",
                        host: e.host,
                        data: e.data,
                        publicKey: o,
                        address: i.address({
                            publicKey: o
                        }, n)
                    },
                    l = t.serializeAuthData(a);
                return a.signature = null != r && i.signBytes(r, l) || "", a.hash = i.base58Encode(i.blake2b(Uint8Array.from(l))), a
            }
        },
        7389: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5517),
                n = r(5510),
                {
                    LONG: s,
                    BASE58_STRING: o
                } = n.serializePrimitives,
                a = r(5576),
                c = r(5546);
            t.serializeWavesAuthData = e => i.concat(o(e.publicKey), s(e.timestamp)), t.wavesAuth = function(e, r, n) {
                const s = a.convertToPairs(r),
                    o = e.publicKey || a.getSenderPublicKey(s, {
                        senderPublicKey: void 0
                    }),
                    u = e.timestamp || Date.now();
                c.validate.wavesAuth({
                    publicKey: o,
                    timestamp: u
                });
                const l = {
                        hash: "",
                        signature: "",
                        timestamp: u,
                        publicKey: o,
                        address: i.address({
                            publicKey: o
                        }, n)
                    },
                    f = t.serializeWavesAuthData(l);
                return l.signature = s.map(([e]) => i.signBytes(e, f))[0] || "", l.hash = i.base58Encode(i.blake2b(Uint8Array.from(f))), l
            }
        },
        7390: function(e, t, r) {
            e.exports = r(9673)
        },
        7391: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var r = new Array(arguments.length), i = 0; i < r.length; i++) r[i] = arguments[i];
                    return e.apply(t, r)
                }
            }
        },
        7392: function(e, t, r) {
            "use strict";
            var i = r(5633);

            function n(e) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, r) {
                if (!t) return e;
                var s;
                if (r) s = r(t);
                else if (i.isURLSearchParams(t)) s = t.toString();
                else {
                    var o = [];
                    i.forEach(t, (function(e, t) {
                        null != e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, (function(e) {
                            i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), o.push(n(t) + "=" + n(e))
                        })))
                    })), s = o.join("&")
                }
                if (s) {
                    var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + s
                }
                return e
            }
        },
        7393: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        },
        7394: function(e, t, r) {
            "use strict";
            var i = r(5633),
                n = r(9678),
                s = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function o(e, t) {
                !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var a, c = {
                adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (a = r(7395)), a),
                transformRequest: [function(e, t) {
                    return n(t, "Accept"), n(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (o(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (o(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                }
            };
            c.headers = {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }, i.forEach(["delete", "get", "head"], (function(e) {
                c.headers[e] = {}
            })), i.forEach(["post", "put", "patch"], (function(e) {
                c.headers[e] = i.merge(s)
            })), e.exports = c
        },
        7395: function(e, t, r) {
            "use strict";
            var i = r(5633),
                n = r(9679),
                s = r(7392),
                o = r(9681),
                a = r(9684),
                c = r(9685),
                u = r(7396);
            e.exports = function(e) {
                return new Promise((function(t, l) {
                    var f = e.data,
                        d = e.headers;
                    i.isFormData(f) && delete d["Content-Type"];
                    var p = new XMLHttpRequest;
                    if (e.auth) {
                        var h = e.auth.username || "",
                            m = e.auth.password || "";
                        d.Authorization = "Basic " + btoa(h + ":" + m)
                    }
                    var y = o(e.baseURL, e.url);
                    if (p.open(e.method.toUpperCase(), s(y, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function() {
                            if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                                var r = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null,
                                    i = {
                                        data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                        status: p.status,
                                        statusText: p.statusText,
                                        headers: r,
                                        config: e,
                                        request: p
                                    };
                                n(t, l, i), p = null
                            }
                        }, p.onabort = function() {
                            p && (l(u("Request aborted", e, "ECONNABORTED", p)), p = null)
                        }, p.onerror = function() {
                            l(u("Network Error", e, null, p)), p = null
                        }, p.ontimeout = function() {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), l(u(t, e, "ECONNABORTED", p)), p = null
                        }, i.isStandardBrowserEnv()) {
                        var v = r(9686),
                            b = (e.withCredentials || c(y)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
                        b && (d[e.xsrfHeaderName] = b)
                    }
                    if ("setRequestHeader" in p && i.forEach(d, (function(e, t) {
                            void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e)
                        })), i.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try {
                        p.responseType = e.responseType
                    } catch (t) {
                        if ("json" !== e.responseType) throw t
                    }
                    "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                        p && (p.abort(), l(e), p = null)
                    })), void 0 === f && (f = null), p.send(f)
                }))
            }
        },
        7396: function(e, t, r) {
            "use strict";
            var i = r(9680);
            e.exports = function(e, t, r, n, s) {
                var o = new Error(e);
                return i(o, t, r, n, s)
            }
        },
        7397: function(e, t, r) {
            "use strict";
            var i = r(5633);
            e.exports = function(e, t) {
                t = t || {};
                var r = {},
                    n = ["url", "method", "params", "data"],
                    s = ["headers", "auth", "proxy"],
                    o = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
                i.forEach(n, (function(e) {
                    void 0 !== t[e] && (r[e] = t[e])
                })), i.forEach(s, (function(n) {
                    i.isObject(t[n]) ? r[n] = i.deepMerge(e[n], t[n]) : void 0 !== t[n] ? r[n] = t[n] : i.isObject(e[n]) ? r[n] = i.deepMerge(e[n]) : void 0 !== e[n] && (r[n] = e[n])
                })), i.forEach(o, (function(i) {
                    void 0 !== t[i] ? r[i] = t[i] : void 0 !== e[i] && (r[i] = e[i])
                }));
                var a = n.concat(s).concat(o),
                    c = Object.keys(t).filter((function(e) {
                        return -1 === a.indexOf(e)
                    }));
                return i.forEach(c, (function(i) {
                    void 0 !== t[i] ? r[i] = t[i] : void 0 !== e[i] && (r[i] = e[i])
                })), r
            }
        },
        7398: function(e, t, r) {
            "use strict";

            function i(e) {
                this.message = e
            }
            i.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, i.prototype.__CANCEL__ = !0, e.exports = i
        },
        7399: function(e, t, r) {
            "use strict";
            var i = this && this.__awaiter || function(e, t, r, i) {
                    return new(r || (r = Promise))((function(n, s) {
                        function o(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function c(e) {
                            e.done ? n(e.value) : new r((function(t) {
                                t(e.value)
                            })).then(o, a)
                        }
                        c((i = i.apply(e, t || [])).next())
                    }))
                },
                n = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = n(r(7390)),
                o = r(5510),
                a = e => {
                    const t = {},
                        r = new Promise((r, i) => {
                            t.resolve = r, t.id = setTimeout(() => r(), e)
                        });
                    return r.cancel = () => {
                        t.resolve(), clearTimeout(t.id)
                    }, r
                },
                c = (e, t, r = 1e3) => a(r).then(r => t ? Promise.reject(new Error("Tx wait stopped: timeout")) : e()),
                u = {
                    timeout: 12e4,
                    apiBase: "https://nodes.wavesplatform.com"
                };

            function l(e, r) {
                return i(this, void 0, void 0, (function*() {
                    const {
                        timeout: i,
                        apiBase: n
                    } = Object.assign({}, u, r);
                    let s = !1;
                    const o = a(i);
                    o.then(() => s = !0);
                    const l = () => t.currentHeight(n).then(t => t >= e ? (o.cancel(), t) : c(l, s, 1e4)).catch(e => c(l, s));
                    return l()
                }))
            }

            function f(e, t) {
                return i(this, void 0, void 0, (function*() {
                    const {
                        timeout: r,
                        apiBase: i
                    } = Object.assign({}, u, t);
                    let n = !1;
                    const o = a(r);
                    o.then(() => n = !0);
                    const c = () => s.default.get("transactions/info/" + e, {
                        baseURL: i
                    }).then(e => (o.cancel(), e.data)).catch(e => a(1e3).then(e => n ? Promise.reject(new Error("Tx wait stopped: timeout")) : c()));
                    return c()
                }))
            }
            t.currentHeight = e => i(this, void 0, void 0, (function*() {
                return yield s.default.get("/blocks/height", {
                    baseURL: e
                }).then(e => e.data && e.data.height)
            })), t.waitForHeight = l, t.waitForTx = f;
            const d = e => 400 === e.status ? Promise.reject(Object.assign(new Error, e.data)) : e,
                p = e => 400 === e || e >= 200 && e < 300;
            t.waitForTxWithNConfirmations = function(e, t, r) {
                return i(this, void 0, void 0, (function*() {
                    const {
                        timeout: i
                    } = Object.assign({}, u, r);
                    let n = !1;
                    a(i).then(() => n = !0);
                    let s = yield f(e, r), o = s.height, c = s.height;
                    for (; o + t > c;) {
                        if (n) throw new Error("Tx wait stopped: timeout");
                        yield l(o + t, r), s = yield f(e, r), o = s.height
                    }
                    return s
                }))
            }, t.waitNBlocks = function(e, r = u) {
                return i(this, void 0, void 0, (function*() {
                    const {
                        apiBase: i
                    } = Object.assign({}, u, r), n = (yield t.currentHeight(i)) + e;
                    return yield l(n, r)
                }))
            }, t.transactionById = function(e, t) {
                return i(this, void 0, void 0, (function*() {
                    return s.default.get("transactions/info/" + e, {
                        baseURL: t,
                        validateStatus: e => 404 === e || p(e)
                    }).then(e => 311 === e.data.error ? null : e.data)
                }))
            }, t.balance = function(e, t) {
                return i(this, void 0, void 0, (function*() {
                    return s.default.get("addresses/balance/" + e, {
                        baseURL: t,
                        validateStatus: p
                    }).then(d).then(e => e.data.balance)
                }))
            }, t.balanceDetails = function(e, t) {
                return i(this, void 0, void 0, (function*() {
                    return s.default.get("addresses/balance/details/" + e, {
                        baseURL: t,
                        validateStatus: p
                    }).then(d).then(e => e.data)
                }))
            }, t.assetBalance = function(e, t, r) {
                return i(this, void 0, void 0, (function*() {
                    return s.default.get(`assets/balance/${t}/${e}`, {
                        baseURL: r,
                        validateStatus: p
                    }).then(d).then(e => e.data.balance)
                }))
            }, t.accountData = function(e, t) {
                return i(this, void 0, void 0, (function*() {
                    let r, i;
                    "string" == typeof e ? (r = e, i = void 0) : (r = e.address, i = e.match && encodeURIComponent("string" == typeof e.match ? e.match : e.match.source));
                    const n = "addresses/data/" + r,
                        o = {
                            baseURL: t,
                            params: {
                                matches: i
                            },
                            validateStatus: p
                        };
                    return (yield s.default.get(n, o).then(d).then(e => e.data)).reduce((e, t) => Object.assign({}, e, {
                        [t.key]: t
                    }), {})
                }))
            }, t.accountDataByKey = function(e, t, r) {
                return i(this, void 0, void 0, (function*() {
                    return s.default.get(`addresses/data/${t}/${e}`, {
                        baseURL: r,
                        validateStatus: e => 404 === e || p(e)
                    }).then(d).then(e => 404 === e.status ? null : e.data)
                }))
            }, t.scriptInfo = function(e, t) {
                return i(this, void 0, void 0, (function*() {
                    return s.default.get("addresses/scriptInfo/" + e, {
                        baseURL: t,
                        validateStatus: e => p(e)
                    }).then(d).then(e => e.data)
                }))
            }, t.scriptMeta = function(e, t) {
                return i(this, void 0, void 0, (function*() {
                    return s.default.get(`addresses/scriptInfo/${e}/meta`, {
                        baseURL: t,
                        validateStatus: e => p(e)
                    }).then(d).then(e => e.data)
                }))
            }, t.rewards = function(...e) {
                return i(this, void 0, void 0, (function*() {
                    let t, r = "blockchain/rewards/";
                    return void 0 !== e[1] ? (r += e[0].toString(), t = e[1]) : t = e[0], s.default.get(r, {
                        baseURL: t,
                        validateStatus: e => p(e)
                    }).then(d).then(e => e.data)
                }))
            }, t.stateChanges = function(e, t) {
                return i(this, void 0, void 0, (function*() {
                    return s.default.get("debug/stateChanges/info/" + e, {
                        baseURL: t,
                        validateStatus: e => p(e)
                    }).then(d).then(e => e.data && e.data.stateChanges)
                }))
            }, t.broadcast = function(e, t) {
                return s.default.post("transactions/broadcast", o.json.stringifyTx(e), {
                    baseURL: t,
                    headers: {
                        "content-type": "application/json"
                    },
                    validateStatus: p
                }).then(d).then(e => e.data)
            }
        },
        9648: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, n, s;
            t.Utf8ArrayToStr = (i = new Array(128), n = String.fromCodePoint || String.fromCharCode, s = [], function(e) {
                var t, r, o = e.length;
                s.length = 0;
                for (var a = 0; a < o;)(r = e[a++]) <= 127 ? t = r : r <= 223 ? t = (31 & r) << 6 | 63 & e[a++] : r <= 239 ? t = (15 & r) << 12 | (63 & e[a++]) << 6 | 63 & e[a++] : String.fromCodePoint ? t = (7 & r) << 18 | (63 & e[a++]) << 12 | (63 & e[a++]) << 6 | 63 & e[a++] : (t = 63, a += 3), s.push(i[t] || (i[t] = n(t)));
                return s.join("")
            })
        },
        9649: function(e, t, r) {
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
                    const t = this._items.find(([t, r, i]) => i === e || t == e);
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
        9650: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(6599),
                n = r(6598),
                s = r(6075);
            t.parserFromSchema = (e, r) => (s, o = 0) => {
                let a = o;
                if ("array" === e.type) {
                    const c = [],
                        {
                            value: u,
                            shift: l
                        } = (e.fromBytes || i.P_SHORT)(s, o);
                    return a += l, n.range(0, u).forEach(i => {
                        const n = t.parserFromSchema(e.items, r),
                            {
                                value: o,
                                shift: u
                            } = n(s, a);
                        c.push(o), a += u
                    }), {
                        value: c,
                        shift: a - o
                    }
                }
                if ("object" === e.type) {
                    if (e.optional) {
                        const e = 1 === s[a];
                        if (a += 1, !e) return {
                            value: void 0,
                            shift: 1
                        }
                    }
                    if (e.withLength) {
                        const t = e.withLength.fromBytes(s, a);
                        a += t.shift
                    }
                    const i = {};
                    return e.schema.forEach(e => {
                        const [n, o] = e, c = t.parserFromSchema(o, r), {
                            value: u,
                            shift: l
                        } = c(s, a);
                        a += l, void 0 !== u && (Array.isArray(n) ? Object.assign(i, u) : i[n] = u)
                    }), {
                        value: i,
                        shift: a - o
                    }
                }
                if ("anyOf" === e.type) {
                    const n = (e.fromBytes || i.P_BYTE)(s, a + e.discriminatorBytePos);
                    e.valueField && 0 === e.discriminatorBytePos && (a += n.shift);
                    const c = e.itemByByteKey(n.value);
                    if (null == c) throw new Error("Failed to get schema for item with bytecode: " + n.value);
                    const u = t.parserFromSchema(c.schema, r),
                        {
                            value: l,
                            shift: f
                        } = u(s, a);
                    return a += f, {
                        value: e.valueField ? {
                            [e.discriminatorField]: c.strKey,
                            [e.valueField]: l
                        } : l,
                        shift: a - o
                    }
                }
                if ("dataTxField" === e.type) {
                    const n = i.byteToStringWithLength(s, a);
                    a += n.shift;
                    let o = i.P_BYTE(s, a);
                    a += o.shift;
                    const c = [...e.items].find((e, t) => t === o.value);
                    if (!c) throw new Error("Parser Error: Unknown dataTxField type: " + o.value);
                    const u = t.parserFromSchema(c[1], r)(s, a);
                    return {
                        value: {
                            value: u.value,
                            key: n.value,
                            type: c[0]
                        },
                        shift: u.shift + n.shift + o.shift
                    }
                }
                if ("primitive" === e.type || void 0 === e.type) {
                    const t = e.fromBytes;
                    let {
                        value: n,
                        shift: a
                    } = t(s, o);
                    return t === i.P_LONG && r && (n = r(n)), {
                        value: n,
                        shift: a
                    }
                }
                throw new Error("Parser Error: Unknown schema type: " + e.type)
            }, t.parseHeader = e => {
                let t = 0,
                    r = i.P_BYTE(e, t);
                t += r.shift, 0 === r.value && (r = i.P_BYTE(e, t), t += r.shift);
                let n = i.P_BYTE(e, t);
                return {
                    type: r.value,
                    version: n.value
                }
            }, t.parseTx = function(e, r) {
                const {
                    type: i,
                    version: n
                } = t.parseHeader(e), o = s.getTransactionSchema(i, n);
                return t.parserFromSchema(o, r)(e).value
            }, t.parseOrder = function(e, r) {
                return t.parserFromSchema(s.orderSchemaV2, r)(e).value
            }
        },
        9651: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(7385),
                {
                    parse: n,
                    stringify: s
                } = i(),
                o = r(6075),
                a = r(6236),
                c = r(5510);

            function u(e, t) {
                return 0 === e.length ? t : "object" == typeof t ? u(e.slice(1), t[e[0]]) : void 0
            }

            function l(e, t) {
                const r = [],
                    i = [];

                function n(o) {
                    return "string" == typeof o && (l = e, function e(t, r) {
                        if (null == r) return !1;
                        if (0 === t.length && ("primitive" === r.type || void 0 === r.type)) return r.toBytes === a.LONG;
                        if ("object" === r.type) {
                            const i = r.schema.find(([e, r]) => e === t[0]);
                            return e(t.slice(1), i && i[1])
                        }
                        if ("array" === r.type) return e(t.slice(1), r.items);
                        if ("dataTxField" === r.type) {
                            if ("value" !== t[0]) return !1;
                            const i = u(c.slice(0, c.length - 1), l),
                                n = r.items.get(i.type);
                            return e(t.slice(1), n)
                        }
                        if ("anyOf" === r.type) {
                            const i = u(c.slice(0, c.length - 1), l)[r.discriminatorField],
                                n = r.itemByKey(i);
                            return !!n && (null != r.valueField && c[c.length - 1] === r.valueField ? e(t.slice(1), n.schema) : e(t, n.schema))
                        }
                        return !1
                    }(c = r, t)) ? o : "boolean" == typeof o || o instanceof Boolean || null === o || "number" == typeof o || o instanceof Number || "string" == typeof o || o instanceof String || o instanceof Date ? JSON.stringify(o) : Array.isArray(o) ? function(e) {
                        let t = "[";
                        const s = i.length;
                        i[s] = e;
                        for (let i = 0; i < e.length; i++) {
                            let o = i + "",
                                a = e[i];
                            void 0 !== a && "function" != typeof a ? (r[s] = o, t += n(a)) : t += "null", i < e.length - 1 && (t += ",")
                        }
                        return i.length = s, r.length = s, t += "]", t
                    }(o) : o && "object" == typeof o ? function(e) {
                        let t = !0,
                            o = "{";
                        const a = i.length;
                        i[a] = e;
                        for (let i in e)
                            if (e.hasOwnProperty(i)) {
                                let c = e[i];
                                s(c) && (t ? t = !1 : o += ",", o += '"' + i + '":', r[a] = i, o += n(c))
                            } return i.length = a, r.length = a, o += "}", o
                    }(o) : void 0;
                    var c, l
                }

                function s(e) {
                    return void 0 !== e && "function" != typeof e
                }
                return n(e) || ""
            }
            t.stringifyWithSchema = l, t.parseTx = function(e, t) {
                const r = n(e);
                return t ? c.convertTxLongFields(r, t) : r
            }, t.stringifyTx = function(e, t) {
                const {
                    type: r,
                    version: i
                } = e, n = o.getTransactionSchema(r, i);
                return l(c.convertLongFields(e, n, void 0, t), n)
            }, t.parseOrder = function(e, t) {
                const r = n(e),
                    i = 2 === r.version ? o.orderSchemaV2 : o.orderSchemaV1;
                return t ? c.convertLongFields(r, i, t) : r
            }, t.stringifyOrder = function(e, t) {
                const r = 2 === e.version ? o.orderSchemaV2 : o.orderSchemaV1;
                return l(c.convertLongFields(e, r, void 0, t), r)
            }
        },
        9652: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.TRANSFER),
                    senderPublicKey: n.isPublicKey,
                    version: n.orEq([void 0, 2]),
                    assetId: n.isAssetId,
                    feeAssetId: n.isAssetId,
                    recipient: n.isRecipient,
                    amount: n.isNumberLike,
                    attachment: n.isAttachment,
                    fee: n.isNumberLike,
                    timestamp: n.isNumber,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.transferValidator = n.validateByShema(s, n.getError)
        },
        9653: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.MASS_TRANSFER),
                    senderPublicKey: n.isPublicKey,
                    version: n.orEq([void 0, 0, 1]),
                    transfers: n.validatePipe(n.isArray, n.pipe(n.prop("length"), n.gte(0)), e => e.every(n.validatePipe(n.isRequired(!0), n.pipe(n.prop("recipient"), n.isRecipient), n.pipe(n.prop("amount"), n.isNumberLike)))),
                    assetId: n.isAssetId,
                    attachment: n.isAttachment,
                    fee: n.isNumberLike,
                    timestamp: n.isNumber,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.massTransferValidator = n.validateByShema(s, n.getError)
        },
        9654: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.ALIAS),
                    version: n.orEq([void 0, 2]),
                    senderPublicKey: n.isPublicKey,
                    alias: n.isValidAliasName,
                    fee: n.isNumberLike,
                    chainId: n.isNumber,
                    timestamp: n.isNumber,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.aliasValidator = n.validateByShema(s, n.getError)
        },
        9655: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.BURN),
                    senderPublicKey: n.isPublicKey,
                    version: n.orEq([void 0, 2]),
                    assetId: n.isAssetId,
                    amount: n.isNumberLike,
                    chainId: n.isNumber,
                    fee: n.isNumberLike,
                    timestamp: n.isNumber,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.burnValidator = n.validateByShema(s, n.getError)
        },
        9656: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.CANCEL_LEASE),
                    senderPublicKey: n.isPublicKey,
                    version: n.orEq([void 0, 2]),
                    leaseId: n.isAssetId,
                    chainId: n.isNumber,
                    fee: n.isNumberLike,
                    timestamp: n.isNumber,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.cancelLeaseValidator = n.validateByShema(s, n.getError)
        },
        9657: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.DATA),
                    senderPublicKey: n.isPublicKey,
                    version: n.orEq([void 0, 0, 1]),
                    data: e => n.isArray(e) && e.every(e => n.isValidData(e)),
                    fee: n.isNumberLike,
                    timestamp: n.isNumber,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.dataValidator = n.validateByShema(s, n.getError)
        },
        9658: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.SPONSORSHIP),
                    senderPublicKey: n.isPublicKey,
                    version: n.orEq([void 0, 0, 1]),
                    assetId: n.isAssetId,
                    minSponsoredAssetFee: n.isNumberLike,
                    fee: n.isNumberLike,
                    timestamp: n.isNumber,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.sponsorshipValidator = n.validateByShema(s, n.getError)
        },
        9659: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.SET_ASSET_SCRIPT),
                    senderPublicKey: n.isPublicKey,
                    version: n.orEq([void 0, 0, 1]),
                    assetId: n.isAssetId,
                    chainId: n.isNumber,
                    fee: n.isNumberLike,
                    timestamp: n.isNumber,
                    script: n.isBase64,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.setAssetScriptValidator = n.validateByShema(s, n.getError)
        },
        9660: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.SET_SCRIPT),
                    senderPublicKey: n.isPublicKey,
                    version: n.orEq([void 0, 0, 1]),
                    chainId: n.isNumber,
                    fee: n.isNumberLike,
                    timestamp: n.isNumber,
                    script: n.ifElse(n.isEq(null), n.defaultValue(!0), n.isBase64),
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.setScriptValidator = n.validateByShema(s, n.getError)
        },
        9661: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.REISSUE),
                    senderPublicKey: n.isPublicKey,
                    version: n.orEq([void 0, 2]),
                    assetId: n.isAssetId,
                    quantity: n.isNumberLike,
                    reissuable: n.isBoolean,
                    chainId: n.isNumber,
                    fee: n.isNumberLike,
                    timestamp: n.isNumber,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.reissueValidator = n.validateByShema(s, n.getError)
        },
        9662: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.ISSUE),
                    version: n.orEq([void 0, 2]),
                    senderPublicKey: n.isPublicKey,
                    name: n.isValidAssetName,
                    description: n.isValidAssetDescription,
                    quantity: n.isNumberLike,
                    decimals: n.isNumber,
                    reissuable: n.isBoolean,
                    script: n.ifElse(n.isRequired(!0), n.isBase64, n.defaultValue(!0)),
                    chainId: n.isNumber,
                    fee: n.isNumberLike,
                    timestamp: n.isNumber,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.issueValidator = n.validateByShema(s, n.getError)
        },
        9663: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.LEASE),
                    version: n.orEq([void 0, 2]),
                    senderPublicKey: n.isPublicKey,
                    recipient: n.isRecipient,
                    amount: n.isNumberLike,
                    fee: n.isNumberLike,
                    timestamp: n.isNumber,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.leaseValidator = n.validateByShema(s, n.getError)
        },
        9664: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(5547),
                s = {
                    type: n.isEq(i.TRANSACTION_TYPE.INVOKE_SCRIPT),
                    senderPublicKey: n.isPublicKey,
                    version: n.orEq([void 0, 0, 1]),
                    dApp: n.isRecipient,
                    call: n.ifElse(n.isRequired(!1), n.defaultValue(!0), n.validatePipe(n.pipe(n.prop("function"), n.isString), n.pipe(n.prop("function"), n.prop("length"), n.gte(0)), n.pipe(n.prop("args"), n.isArray), e => e.every(n.validatePipe(n.isRequired(!0), n.isValidDataPair)))),
                    payment: n.validatePipe(n.isArray, e => e.every(n.validatePipe(n.pipe(n.prop("amount"), n.isNumberLike), n.pipe(n.prop("assetId"), n.isAssetId)))),
                    fee: n.isNumberLike,
                    feeAssetId: n.isAssetId,
                    chainId: n.isNumber,
                    timestamp: n.isNumber,
                    proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0]))
                };
            t.invokeValidator = n.validateByShema(s, n.getError)
        },
        9665: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(7386),
                s = r(5547),
                o = {
                    type: s.isEq(i.TRANSACTION_TYPE.EXCHANGE),
                    senderPublicKey: s.isPublicKey,
                    version: s.orEq([void 0, 0, 1, 2]),
                    order1: s.validatePipe(s.isRequired(!0), n.orderValidator),
                    order2: s.validatePipe(s.isRequired(!0), n.orderValidator),
                    amount: s.isNumberLike,
                    price: s.isNumberLike,
                    buyMatcherFee: s.isNumberLike,
                    sellMatcherFee: s.isNumberLike,
                    fee: s.isNumberLike,
                    timestamp: s.isNumber,
                    proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0]))
                };
            t.exchangeValidator = s.validateByShema(o, s.getError)
        },
        9666: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5547),
                n = {
                    sender: i.isPublicKey,
                    orderId: i.isHash,
                    signature: i.isBase58,
                    hash: i.isBase58
                };
            t.cancelOrderValidator = i.validateByShema(n, i.getError)
        },
        9667: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5547),
                n = {
                    version: i.isEq(1),
                    binary: i.isBase64
                },
                s = {
                    version: i.isEq(2),
                    data: i.validatePipe(i.isArray, e => e.every(i.validatePipe(i.isRequired(!0), i.isValidDataPair)))
                },
                o = i.validateByShema(n, i.getError),
                a = i.validateByShema(s, i.getError);
            t.customDataValidator = i.ifElse(i.pipe(i.prop("version"), i.isEq(1)), o, a)
        },
        9668: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5547),
                n = {
                    data: i.isString,
                    host: i.isString
                };
            t.authValidator = i.validateByShema(n, i.getError)
        },
        9669: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5547),
                n = {
                    publicKey: i.isPublicKey,
                    timestamp: i.isNumber
                };
            t.authValidator = i.validateByShema(n, i.getError)
        },
        9670: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5517),
                n = r(5576),
                s = r(5510),
                o = r(5546);
            t.order = function(e, t) {
                const r = n.isOrder(e) ? e.assetPair.amountAsset : e.amountAsset,
                    a = n.isOrder(e) ? e.assetPair.priceAsset : e.priceAsset,
                    c = n.isOrder(e) ? e.proofs : [],
                    {
                        matcherFee: u,
                        matcherPublicKey: l,
                        price: f,
                        amount: d,
                        orderType: p,
                        expiration: h,
                        timestamp: m
                    } = e,
                    y = m || Date.now(),
                    v = n.convertToPairs(t),
                    b = e.senderPublicKey || n.getSenderPublicKey(v, e),
                    g = {
                        orderType: p,
                        version: null === e.version ? void 0 : e.version || 2,
                        assetPair: {
                            amountAsset: r,
                            priceAsset: a
                        },
                        price: f,
                        amount: d,
                        timestamp: y,
                        expiration: h || y + 25056e5,
                        matcherFee: u || 3e5,
                        matcherPublicKey: l,
                        senderPublicKey: b,
                        proofs: c,
                        id: ""
                    };
                3 === g.version && (g.matcherFeeAssetId = "WAVES" === e.matcherFeeAssetId ? null : e.matcherFeeAssetId);
                const S = s.binary.serializeOrder(g);
                return v.forEach(([e, t]) => n.addProof(g, i.signBytes(e, S), t)), o.validate.order(g), g.id = i.base58Encode(i.blake2b(S)), void 0 !== g.version && 1 !== g.version || (g.signature = g.proofs && g.proofs[0]), g
            }
        },
        9671: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5517),
                n = r(5510),
                {
                    BASE58_STRING: s
                } = n.serializePrimitives,
                o = r(5576),
                a = r(5546);
            t.cancelOrderParamsToBytes = e => i.concat(s(e.sender), s(e.orderId)), t.cancelOrder = function(e, t) {
                const r = o.convertToPairs(t),
                    n = e.senderPublicKey || o.getSenderPublicKey(r, {
                        senderPublicKey: void 0
                    }),
                    c = i.concat(s(n), s(e.orderId)),
                    u = e.signature || null != t && i.signBytes(t, c) || "",
                    l = i.base58Encode(i.blake2b(Uint8Array.from(c))),
                    f = {
                        sender: n,
                        orderId: e.orderId,
                        signature: u,
                        hash: l
                    };
                return a.validate.cancelOrder(f), f
            }
        },
        9672: function(e, t, r) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = i(r(7390)),
                s = r(5510),
                o = r(5517),
                a = r(5498),
                c = r(6606),
                u = r(6607),
                l = r(6600),
                f = r(6601),
                d = r(6603),
                p = r(6604),
                h = r(6605),
                m = r(6591),
                y = r(6608),
                v = r(6609),
                b = r(5576),
                g = r(6610),
                S = r(6602),
                A = r(6611),
                E = r(6612),
                T = r(7387),
                N = r(7388),
                _ = r(7389);

            function P(e) {
                return b.isOrder(e) ? s.binary.serializeOrder(e) : s.binary.serializeTx(e)
            }
            t.txTypeMap = {
                [a.TRANSACTION_TYPE.ISSUE]: {
                    sign: (e, t) => c.issue(e, t)
                },
                [a.TRANSACTION_TYPE.TRANSFER]: {
                    sign: (e, t) => u.transfer(e, t)
                },
                [a.TRANSACTION_TYPE.REISSUE]: {
                    sign: (e, t) => l.reissue(e, t)
                },
                [a.TRANSACTION_TYPE.BURN]: {
                    sign: (e, t) => f.burn(e, t)
                },
                [a.TRANSACTION_TYPE.LEASE]: {
                    sign: (e, t) => d.lease(e, t)
                },
                [a.TRANSACTION_TYPE.CANCEL_LEASE]: {
                    sign: (e, t) => p.cancelLease(e, t)
                },
                [a.TRANSACTION_TYPE.ALIAS]: {
                    sign: (e, t) => y.alias(e, t)
                },
                [a.TRANSACTION_TYPE.MASS_TRANSFER]: {
                    sign: (e, t) => m.massTransfer(e, t)
                },
                [a.TRANSACTION_TYPE.DATA]: {
                    sign: (e, t) => h.data(e, t)
                },
                [a.TRANSACTION_TYPE.SET_SCRIPT]: {
                    sign: (e, t) => v.setScript(e, t)
                },
                [a.TRANSACTION_TYPE.SET_ASSET_SCRIPT]: {
                    sign: (e, t) => g.setAssetScript(e, t)
                },
                [a.TRANSACTION_TYPE.SPONSORSHIP]: {
                    sign: (e, t) => A.sponsorship(e, t)
                },
                [a.TRANSACTION_TYPE.EXCHANGE]: {
                    sign: (e, t) => S.exchange(e, t)
                },
                [a.TRANSACTION_TYPE.INVOKE_SCRIPT]: {
                    sign: (e, t) => E.invokeScript(e, t)
                }
            }, t.signTx = function(e, r) {
                if (!t.txTypeMap[e.type]) throw new Error("Unknown tx type: " + e.type);
                return t.txTypeMap[e.type].sign(e, r)
            }, t.serialize = P, t.verify = function(e, t = 0, r) {
                r = r || e.senderPublicKey;
                const i = P(e),
                    n = null == e.version ? e.signature : e.proofs[t];
                return o.verifySignature(r, i, n)
            }, t.verifyCustomData = function(e) {
                const t = T.serializeCustomData(e);
                return o.verifySignature(e.publicKey, t, e.signature)
            }, t.verifyAuthData = function(e, t, r) {
                r = r || "W";
                const i = N.serializeAuthData(t);
                return o.address({
                    publicKey: e.publicKey
                }, r) === e.address && o.verifySignature(e.publicKey, i, e.signature)
            }, t.verifyWavesAuthData = function(e, t, r) {
                r = r || "W";
                const i = _.serializeWavesAuthData(t);
                return o.address({
                    publicKey: e.publicKey
                }, r) === e.address && o.verifySignature(e.publicKey, i, e.signature)
            }, t.submitOrder = function(e, t) {
                let r, i;
                return "string" == typeof t ? (i = t, r = "matcher/orderbook") : (i = t.matcherUrl, r = t.market ? "matcher/orderbook/market" : "matcher/orderbook"), n.default.post(r, s.json.stringifyOrder(e), {
                    baseURL: i,
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(e => e.data).catch(e => Promise.reject(e.response && 400 === e.response.status ? new Error(e.response.data.message) : e))
            }, t.cancelSubmittedOrder = function(e, t, r, i) {
                return n.default.post(`matcher/orderbook/${t||"WAVES"}/${r||"WAVES"}/cancel`, JSON.stringify(e), {
                    baseURL: i,
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(e => e.data).catch(e => Promise.reject(e.response && 400 === e.response.status ? new Error(e.response.data.message) : e))
            }
        },
        9673: function(e, t, r) {
            "use strict";
            var i = r(5633),
                n = r(7391),
                s = r(9674),
                o = r(7397);

            function a(e) {
                var t = new s(e),
                    r = n(s.prototype.request, t);
                return i.extend(r, s.prototype, t), i.extend(r, t), r
            }
            var c = a(r(7394));
            c.Axios = s, c.create = function(e) {
                return a(o(c.defaults, e))
            }, c.Cancel = r(7398), c.CancelToken = r(9687), c.isCancel = r(7393), c.all = function(e) {
                return Promise.all(e)
            }, c.spread = r(9688), e.exports = c, e.exports.default = c
        },
        9674: function(e, t, r) {
            "use strict";
            var i = r(5633),
                n = r(7392),
                s = r(9675),
                o = r(9676),
                a = r(7397);

            function c(e) {
                this.defaults = e, this.interceptors = {
                    request: new s,
                    response: new s
                }
            }
            c.prototype.request = function(e) {
                "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t = [o, void 0],
                    r = Promise.resolve(e);
                for (this.interceptors.request.forEach((function(e) {
                        t.unshift(e.fulfilled, e.rejected)
                    })), this.interceptors.response.forEach((function(e) {
                        t.push(e.fulfilled, e.rejected)
                    })); t.length;) r = r.then(t.shift(), t.shift());
                return r
            }, c.prototype.getUri = function(e) {
                return e = a(this.defaults, e), n(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }, i.forEach(["delete", "get", "head", "options"], (function(e) {
                c.prototype[e] = function(t, r) {
                    return this.request(i.merge(r || {}, {
                        method: e,
                        url: t
                    }))
                }
            })), i.forEach(["post", "put", "patch"], (function(e) {
                c.prototype[e] = function(t, r, n) {
                    return this.request(i.merge(n || {}, {
                        method: e,
                        url: t,
                        data: r
                    }))
                }
            })), e.exports = c
        },
        9675: function(e, t, r) {
            "use strict";
            var i = r(5633);

            function n() {
                this.handlers = []
            }
            n.prototype.use = function(e, t) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t
                }), this.handlers.length - 1
            }, n.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }, n.prototype.forEach = function(e) {
                i.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }))
            }, e.exports = n
        },
        9676: function(e, t, r) {
            "use strict";
            var i = r(5633),
                n = r(9677),
                s = r(7393),
                o = r(7394);

            function a(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            e.exports = function(e) {
                return a(e), e.headers = e.headers || {}, e.data = n(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                    delete e.headers[t]
                })), (e.adapter || o.adapter)(e).then((function(t) {
                    return a(e), t.data = n(t.data, t.headers, e.transformResponse), t
                }), (function(t) {
                    return s(t) || (a(e), t && t.response && (t.response.data = n(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                }))
            }
        },
        9677: function(e, t, r) {
            "use strict";
            var i = r(5633);
            e.exports = function(e, t, r) {
                return i.forEach(r, (function(r) {
                    e = r(e, t)
                })), e
            }
        },
        9678: function(e, t, r) {
            "use strict";
            var i = r(5633);
            e.exports = function(e, t) {
                i.forEach(e, (function(r, i) {
                    i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[i])
                }))
            }
        },
        9679: function(e, t, r) {
            "use strict";
            var i = r(7396);
            e.exports = function(e, t, r) {
                var n = r.config.validateStatus;
                !n || n(r.status) ? e(r) : t(i("Request failed with status code " + r.status, r.config, null, r.request, r))
            }
        },
        9680: function(e, t, r) {
            "use strict";
            e.exports = function(e, t, r, i, n) {
                return e.config = t, r && (e.code = r), e.request = i, e.response = n, e.isAxiosError = !0, e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }, e
            }
        },
        9681: function(e, t, r) {
            "use strict";
            var i = r(9682),
                n = r(9683);
            e.exports = function(e, t) {
                return e && !i(t) ? n(e, t) : t
            }
        },
        9682: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
            }
        },
        9683: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        },
        9684: function(e, t, r) {
            "use strict";
            var i = r(5633),
                n = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, r, s, o = {};
                return e ? (i.forEach(e.split("\n"), (function(e) {
                    if (s = e.indexOf(":"), t = i.trim(e.substr(0, s)).toLowerCase(), r = i.trim(e.substr(s + 1)), t) {
                        if (o[t] && n.indexOf(t) >= 0) return;
                        o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([r]) : o[t] ? o[t] + ", " + r : r
                    }
                })), o) : o
            }
        },
        9685: function(e, t, r) {
            "use strict";
            var i = r(5633);
            e.exports = i.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    r = document.createElement("a");

                function n(e) {
                    var i = e;
                    return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
                        href: r.href,
                        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                        host: r.host,
                        search: r.search ? r.search.replace(/^\?/, "") : "",
                        hash: r.hash ? r.hash.replace(/^#/, "") : "",
                        hostname: r.hostname,
                        port: r.port,
                        pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                    }
                }
                return e = n(window.location.href),
                    function(t) {
                        var r = i.isString(t) ? n(t) : t;
                        return r.protocol === e.protocol && r.host === e.host
                    }
            }() : function() {
                return !0
            }
        },
        9686: function(e, t, r) {
            "use strict";
            var i = r(5633);
            e.exports = i.isStandardBrowserEnv() ? {
                write: function(e, t, r, n, s, o) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)), i.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), i.isString(n) && a.push("path=" + n), i.isString(s) && a.push("domain=" + s), !0 === o && a.push("secure"), document.cookie = a.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        9687: function(e, t, r) {
            "use strict";
            var i = r(7398);

            function n(e) {
                if ("function" != typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) {
                    t = e
                }));
                var r = this;
                e((function(e) {
                    r.reason || (r.reason = new i(e), t(r.reason))
                }))
            }
            n.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, n.source = function() {
                var e;
                return {
                    token: new n((function(t) {
                        e = t
                    })),
                    cancel: e
                }
            }, e.exports = n
        },
        9688: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        },
        9689: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5498),
                n = r(6606),
                s = r(6607),
                o = r(6600),
                a = r(6601),
                c = r(6603),
                u = r(6604),
                l = r(6608),
                f = r(6591),
                d = r(6605),
                p = r(6609),
                h = r(6610),
                m = r(6611),
                y = r(6602),
                v = r(6612);
            t.makeTx = function(e) {
                switch (e.type) {
                    case i.TRANSACTION_TYPE.ISSUE:
                        return n.issue(e);
                    case i.TRANSACTION_TYPE.TRANSFER:
                        return s.transfer(e);
                    case i.TRANSACTION_TYPE.REISSUE:
                        return o.reissue(e);
                    case i.TRANSACTION_TYPE.BURN:
                        return a.burn(e);
                    case i.TRANSACTION_TYPE.LEASE:
                        return c.lease(e);
                    case i.TRANSACTION_TYPE.CANCEL_LEASE:
                        return u.cancelLease(e);
                    case i.TRANSACTION_TYPE.ALIAS:
                        return l.alias(e);
                    case i.TRANSACTION_TYPE.MASS_TRANSFER:
                        return f.massTransfer(e);
                    case i.TRANSACTION_TYPE.DATA:
                        return d.data(e);
                    case i.TRANSACTION_TYPE.SET_SCRIPT:
                        return p.setScript(e);
                    case i.TRANSACTION_TYPE.SET_ASSET_SCRIPT:
                        return h.setAssetScript(e);
                    case i.TRANSACTION_TYPE.SPONSORSHIP:
                        return m.sponsorship(e);
                    case i.TRANSACTION_TYPE.EXCHANGE:
                        return y.exchange(e);
                    case i.TRANSACTION_TYPE.INVOKE_SCRIPT:
                        return v.invokeScript(e);
                    default:
                        throw new Error("Unknown tx type: " + e.type)
                }
            }
        },
        9690: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = r(5517);
            t.encryptSeed = i.encryptSeed, t.decryptSeed = i.decryptSeed;
            const n = r(5510);
            class Seed {
                constructor(e, t) {
                    if (e.length < 12) throw new Error("Your seed length is less than allowed in config");
                    this.phrase = e, this.address = i.address(e, t), this.keyPair = {
                        privateKey: i.privateKey(e),
                        publicKey: i.publicKey(e)
                    }, Object.freeze(this), Object.freeze(this.keyPair)
                }
                encrypt(e, t) {
                    return Seed.encryptSeedPhrase(this.phrase, e, t)
                }
                static encryptSeedPhrase(e, t, r = 5e3) {
                    if (t && t.length, e.length < 12) throw new Error("The seed phrase you are trying to encrypt is too short");
                    return i.encryptSeed(e, t, r)
                }
                static decryptSeedPhrase(e, t, r = 5e3) {
                    let n;
                    try {
                        n = i.decryptSeed(e, t, r)
                    } catch (e) {
                        throw new Error("The password is wrong")
                    }
                    if ("" === n || n.length < 12) throw new Error("The password is wrong");
                    return n
                }
                static create(e = 15) {
                    const t = s(e);
                    if (t.length < 12) throw new Error("The resulted seed length is less than the minimum length (12)");
                    return new Seed(t)
                }
                static fromExistingPhrase(e) {
                    if (e.length < 12) throw new Error("The resulted seed length is less than the minimum length (12)");
                    return new Seed(e)
                }
            }

            function s(e = 15) {
                return i.randomSeed(e)
            }
            t.Seed = Seed, t.generateNewSeed = s, t.strengthenPassword = function(e, t = 5e3) {
                for (; t--;) {
                    const t = n.serializePrimitives.STRING(e);
                    e = i.base16Encode(i.sha256(t))
                }
                return e
            }
        },
        9709: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(6615),
                n = r(6238),
                s = function() {
                    function e(e) {
                        e = i.config.get("remapAsset")(e), this.quantity = n.toBigNumber(e.quantity), this.minSponsoredFee = n.toBigNumber(e.minSponsoredFee), this.ticker = e.ticker || null, this.id = e.id, this.name = e.name, this.precision = e.precision, this.description = e.description, this.height = e.height, this.timestamp = e.timestamp, this.sender = e.sender, this.reissuable = e.reissuable, this.hasScript = e.hasScript || !1, this.displayName = e.ticker || e.name
                    }
                    return e.prototype.toJSON = function() {
                        return {
                            ticker: this.ticker,
                            id: this.id,
                            name: this.name,
                            precision: this.precision,
                            description: this.description,
                            height: this.height,
                            timestamp: this.timestamp,
                            sender: this.sender,
                            quantity: this.quantity,
                            reissuable: this.reissuable,
                            hasScript: this.hasScript,
                            minSponsoredFee: this.minSponsoredFee
                        }
                    }, e.prototype.toString = function() {
                        return this.id
                    }, e.isAsset = function(t) {
                        return t instanceof e
                    }, e
                }();
            t.Asset = s
        },
        9710: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(6615),
                n = r(6238),
                s = function() {
                    function e(e) {
                        var t = this;
                        e = i.config.get("remapCandle")(e);
                        ["open", "close", "high", "low", "volume", "quoteVolume", "weightedAveragePrice"].forEach((function(r) {
                            return t[r] = n.toBigNumber(e[r])
                        })), this.time = e.time, this.maxHeight = e.maxHeight, this.txsCount = e.txsCount
                    }
                    return e.prototype.toJSON = function() {
                        return {
                            time: this.time,
                            open: this.open,
                            close: this.close,
                            high: this.high,
                            low: this.low,
                            volume: this.volume,
                            quoteVolume: this.quoteVolume,
                            weightedAveragePrice: this.weightedAveragePrice,
                            maxHeight: this.maxHeight,
                            txsCount: this.txsCount
                        }
                    }, e.prototype.toString = function() {
                        return "[object Candle]"
                    }, e.isCandle = function(t) {
                        return t instanceof e
                    }, e
                }();
            t.Candle = s
        },
        9711: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(6616),
                n = r(6238),
                s = function() {
                    function e(t, r) {
                        var i = e._getDivider(r.precision);
                        this.asset = r, this._coins = n.toBigNumber(t).roundTo(0, 3), this._tokens = this._coins.div(i)
                    }
                    return e.prototype.getCoins = function() {
                        return this._coins.add(0)
                    }, e.prototype.getTokens = function() {
                        return this._tokens.add(0)
                    }, e.prototype.toCoins = function() {
                        return this._coins.toFixed(0)
                    }, e.prototype.toTokens = function() {
                        return this._tokens.toFixed(this.asset.precision)
                    }, e.prototype.toFormat = function(e) {
                        return this._tokens.toFormat(e)
                    }, e.prototype.add = function(t) {
                        this._matchAssets(t);
                        var r = t.getCoins();
                        return new e(this._coins.add(r), this.asset)
                    }, e.prototype.plus = function(e) {
                        return this.add(e)
                    }, e.prototype.sub = function(t) {
                        this._matchAssets(t);
                        var r = t.getCoins();
                        return new e(this._coins.sub(r), this.asset)
                    }, e.prototype.minus = function(e) {
                        return this.sub(e)
                    }, e.prototype.times = function(t) {
                        return this._matchAssets(t), new e(this.getCoins().mul(t.getCoins()), this.asset)
                    }, e.prototype.div = function(t) {
                        return this._matchAssets(t), new e(this.getCoins().div(t.getCoins()), this.asset)
                    }, e.prototype.eq = function(e) {
                        return this._matchAssets(e), this._coins.eq(e.getCoins())
                    }, e.prototype.lt = function(e) {
                        return this._matchAssets(e), this._coins.lt(e.getCoins())
                    }, e.prototype.lte = function(e) {
                        return this._matchAssets(e), this._coins.lte(e.getCoins())
                    }, e.prototype.gt = function(e) {
                        return this._matchAssets(e), this._coins.gt(e.getCoins())
                    }, e.prototype.gte = function(e) {
                        return this._matchAssets(e), this._coins.gte(e.getCoins())
                    }, e.prototype.safeSub = function(e) {
                        return this.asset.id === e.asset.id ? this.sub(e) : this
                    }, e.prototype.toNonNegative = function() {
                        return this.getTokens().lt(0) ? this.cloneWithTokens(0) : this
                    }, e.prototype.cloneWithCoins = function(t) {
                        return new e(new i.BigNumber(t), this.asset)
                    }, e.prototype.cloneWithTokens = function(t) {
                        var r = e._tokensToCoins(t, this.asset.precision);
                        return new e(r, this.asset)
                    }, e.prototype.convertTo = function(t, r) {
                        return e.convert(this, t, n.toBigNumber(r))
                    }, e.prototype.toJSON = function() {
                        return {
                            assetId: this.asset.id,
                            tokens: this.toTokens()
                        }
                    }, e.prototype.toString = function() {
                        return this.toTokens() + " " + this.asset.id
                    }, e.prototype._matchAssets = function(e) {
                        if (this.asset.id !== e.asset.id) throw new Error("You cannot apply arithmetic operations to Money created with different assets")
                    }, e.max = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return e.reduce((function(e, t) {
                            return e.gte(t) ? e : t
                        }))
                    }, e.min = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return e.reduce((function(e, t) {
                            return e.lte(t) ? e : t
                        }))
                    }, e.isMoney = function(t) {
                        return t instanceof e
                    }, e.convert = function(t, r, n) {
                        if (t.asset === r) return t;
                        var s = t.asset.precision - r.precision,
                            o = new i.BigNumber(10).pow(s),
                            a = t.getCoins().mul(n).div(o).roundTo(0, 1).toFixed();
                        return new e(new i.BigNumber(a), r)
                    }, e.fromTokens = function(t, r) {
                        return new e(n.toBigNumber(t).mul(new i.BigNumber(10).pow(r.precision)), r)
                    }, e.fromCoins = function(t, r) {
                        return new e(t, r)
                    }, e._tokensToCoins = function(t, r) {
                        var n = e._getDivider(r);
                        return t = new i.BigNumber(t).toFixed(r), new i.BigNumber(t).mul(n)
                    }, e._getDivider = function(e) {
                        return new i.BigNumber(10).pow(e)
                    }, e
                }();
            t.Money = s
        },
        9712: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(6616),
                n = r(6238),
                s = function() {
                    function e(t, r) {
                        var i = e._getMatcherDivider(r.precisionDifference);
                        this.pair = r, this._matcherCoins = t, this._tokens = this._matcherCoins.div(i)
                    }
                    return e.prototype.getMatcherCoins = function() {
                        return this._matcherCoins.clone()
                    }, e.prototype.getTokens = function() {
                        return this._tokens.clone()
                    }, e.prototype.toMatcherCoins = function() {
                        return this._matcherCoins.toFixed(0)
                    }, e.prototype.toTokens = function() {
                        return this._tokens.toFixed(this.pair.priceAsset.precision)
                    }, e.prototype.toFormat = function() {
                        return this._tokens.toFormat(this.pair.priceAsset.precision)
                    }, e.prototype.toJSON = function() {
                        return {
                            amountAssetId: this.pair.amountAsset.id,
                            priceAssetId: this.pair.priceAsset.id,
                            priceTokens: this.toTokens()
                        }
                    }, e.prototype.toString = function() {
                        return this.toTokens() + " " + this.pair.amountAsset.id + "/" + this.pair.priceAsset.id
                    }, e.fromMatcherCoins = function(t, r) {
                        return e._checkAmount(t), new e(n.toBigNumber(t), r)
                    }, e.fromTokens = function(t, r) {
                        e._checkAmount(t), t = n.toBigNumber(t).toFixed(r.priceAsset.precision);
                        var s = e._getMatcherDivider(r.precisionDifference);
                        return new e(new i.BigNumber(t).mul(s), r)
                    }, e._getMatcherDivider = function(t) {
                        return new i.BigNumber(10).pow(t).mul(e._MATCHER_SCALE)
                    }, e.isOrderPrice = function(t) {
                        return t instanceof e
                    }, e._checkAmount = function(e) {
                        if (!(["string", "number"].includes(typeof e) || e instanceof i.BigNumber)) throw new Error("Please use strings to create instances of OrderPrice")
                    }, e._MATCHER_SCALE = new i.BigNumber(10).pow(8), e
                }();
            t.OrderPrice = s
        },
        9713: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    this.amountAsset = e, this.priceAsset = t, this.precisionDifference = this.priceAsset.precision - this.amountAsset.precision
                }
                return e.prototype.toJSON = function() {
                    return {
                        amountAsset: this.amountAsset.id,
                        priceAsset: this.priceAsset.id
                    }
                }, e.prototype.toString = function() {
                    return this.amountAsset + "/" + this.priceAsset
                }, e.isAssetPair = function(t) {
                    return t instanceof e
                }, e
            }();
            t.AssetPair = i
        }
    }
]);