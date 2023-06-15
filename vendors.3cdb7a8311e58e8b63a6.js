(window.webpackJsonp = window.webpackJsonp || []).push([
    [54], {
        1682: function(e, t, r) {
            "use strict";
            var n = o(r(214)),
                a = o(r(595)),
                i = o(r(216));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = function(e) {
                    var t = new ArrayBuffer(132),
                        r = new Uint32Array(t),
                        n = new Uint8Array(t),
                        a = 4;
                    if (null === e) r[0] = 4294967295;
                    else {
                        r[0] = e.length;
                        for (var i = 0; i < e.length; ++i) n[a++] = e.charCodeAt(i)
                    }
                    return new Uint8Array(t, 0, a)
                },
                s = function(e) {
                    var t = new ArrayBuffer(516),
                        r = new Uint32Array(t),
                        n = new Uint8Array(t),
                        a = 4;
                    if (null === e) r[0] = 4294967295;
                    else {
                        r[0] = e.length;
                        for (var i = 0; i < e.length; ++i) n[a++] = e[i]
                    }
                    return new Uint8Array(t, 0, a)
                },
                c = function(e) {
                    var t = new ArrayBuffer(8),
                        r = new Uint32Array(t);
                    return r[0] = e, r[1] = Math.floor(e / 4294967296), new Uint8Array(t, 0, 8)
                },
                l = function(e) {
                    var t = new ArrayBuffer(264),
                        r = u(e.namespaceId),
                        n = u(e.name),
                        a = new Uint8Array(t);
                    new Uint32Array(t)[0] = r.length + n.length;
                    for (var i = 4, o = 0; o < r.length; ++o) a[i++] = r[o];
                    for (o = 0; o < n.length; ++o) a[i++] = n[o];
                    return new Uint8Array(t, 0, i)
                },
                f = function(e) {
                    var t = new ArrayBuffer(276),
                        r = l(e.mosaicId),
                        n = c(e.quantity),
                        a = new Uint8Array(t);
                    new Uint32Array(t)[0] = r.length + n.length;
                    for (var i = 4, o = 0; o < r.length; ++o) a[i++] = r[o];
                    for (o = 0; o < n.length; ++o) a[i++] = n[o];
                    return new Uint8Array(t, 0, i)
                },
                d = function(e) {
                    var t = new ArrayBuffer(2764),
                        r = new Uint32Array(t),
                        n = new Uint8Array(t),
                        i = 0,
                        o = 0;
                    r[i++] = e.length, o += 4;
                    for (var u = [], s = 0; s < e.length; ++s) u.push({
                        entity: e[s],
                        value: a.default.mosaicIdToName(e[s].mosaicId) + " : " + e[s].quantity
                    });
                    u.sort((function(e, t) {
                        return e.value < t.value ? -1 : e.value > t.value
                    }));
                    for (s = 0; s < u.length; ++s) {
                        e = u[s].entity;
                        for (var c = f(e), l = 0; l < c.length; ++l) n[o++] = c[l]
                    }
                    return new Uint8Array(t, 0, o)
                },
                p = function(e) {
                    var t = new ArrayBuffer(1024),
                        r = new Uint32Array(t),
                        n = new Uint8Array(t),
                        a = u(e.name),
                        i = u(e.value);
                    r[0] = a.length + i.length;
                    for (var o = 4, s = 0; s < a.length; ++s) n[o++] = a[s];
                    for (s = 0; s < i.length; ++s) n[o++] = i[s];
                    return new Uint8Array(t, 0, o)
                },
                g = function(e) {
                    var t = new ArrayBuffer(1024),
                        r = new Uint32Array(t),
                        n = new Uint8Array(t),
                        a = 0,
                        i = 0;
                    r[a++] = e.length, i += 4;
                    for (var o = e, u = (o = [], 0); u < e.length; ++u) o.push(e[u]);
                    var s = {
                        divisibility: 1,
                        initialSupply: 2,
                        supplyMutable: 3,
                        transferable: 4
                    };
                    o.sort((function(e, t) {
                        return s[e.name] < s[t.name] ? -1 : s[e.name] > s[t.name]
                    }));
                    for (u = 0; u < o.length; ++u) {
                        e = o[u];
                        for (var c = p(e), l = 0; l < c.length; ++l) n[i++] = c[l]
                    }
                    return new Uint8Array(t, 0, i)
                },
                m = function(e) {
                    var t = new ArrayBuffer(1024),
                        r = new Uint32Array(t);
                    if (null === e) return r[0] = 0, new Uint8Array(t, 0, 4);
                    var n = new Uint8Array(t);
                    r[1] = e.type;
                    for (var a = 8, i = u(e.recipient), o = 0; o < i.length; ++o) n[a++] = i[o];
                    var s = l(e.mosaicId);
                    for (o = 0; o < s.length; ++o) n[a++] = s[o];
                    var f = c(e.fee);
                    for (o = 0; o < f.length; ++o) n[a++] = f[o];
                    return r[0] = 4 + i.length + s.length + 8, new Uint8Array(t, 0, a)
                },
                h = function(e) {
                    var t = new ArrayBuffer(2868),
                        r = new Uint32Array(t),
                        a = new Uint8Array(t),
                        i = n.default.hex2ua(e.creator);
                    r[0] = i.length;
                    for (var o = 4, u = 0; u < i.length; ++u) a[o++] = i[u];
                    var c = l(e.id);
                    for (u = 0; u < c.length; ++u) a[o++] = c[u];
                    var f = n.default.hex2ua(n.default.utf8ToHex(e.description));
                    for (i = s(f), u = 0; u < i.length; ++u) a[o++] = i[u];
                    for (i = g(e.properties), u = 0; u < i.length; ++u) a[o++] = i[u];
                    var d = m(e.levy);
                    for (u = 0; u < d.length; ++u) a[o++] = d[u];
                    return new Uint8Array(t, 0, o)
                };
            e.exports = {
                _serializeSafeString: u,
                _serializeUaString: s,
                _serializeLong: c,
                _serializeMosaicId: l,
                _serializeMosaicAndQuantity: f,
                _serializeMosaics: d,
                _serializeProperty: p,
                _serializeProperties: g,
                _serializeLevy: m,
                _serializeMosaicDefinition: h,
                serializeTransaction: function e(t) {
                    var r = new ArrayBuffer(3276),
                        a = new Uint32Array(r),
                        o = new Uint8Array(r);
                    a[0] = t.type, a[1] = t.version, a[2] = t.timeStamp;
                    var s = n.default.hex2ua(t.signer);
                    a[3] = s.length;
                    for (var f = 16, p = 0; p < s.length; ++p) o[f++] = s[p];
                    var g = f / 4;
                    if (a[g++] = t.fee, a[g++] = Math.floor(t.fee / 4294967296), a[g++] = t.deadline, f += 12, a[0] === i.default.transfer) {
                        a[g++] = t.recipient.length, f += 4;
                        for (p = 0; p < t.recipient.length; ++p) o[f++] = t.recipient.charCodeAt(p);
                        if (g = f / 4, a[g++] = t.amount, a[g++] = Math.floor(t.amount / 4294967296), f += 8, 1 === t.message.type || 2 === t.message.type)
                            if (0 === (s = n.default.hex2ua(t.message.payload)).length) a[g++] = 0, f += 4;
                            else {
                                a[g++] = 8 + s.length, a[g++] = t.message.type, a[g++] = s.length, f += 12;
                                for (p = 0; p < s.length; ++p) o[f++] = s[p]
                            } if ((16777215 & a[1]) >= 2)
                            for (s = d(t.mosaics), p = 0; p < s.length; ++p) o[f++] = s[p]
                    } else if (a[0] === i.default.provisionNamespace) {
                        a[g++] = t.rentalFeeSink.length, f += 4;
                        for (p = 0; p < t.rentalFeeSink.length; ++p) o[f++] = t.rentalFeeSink.charCodeAt(p);
                        g = f / 4, a[g++] = t.rentalFee, a[g++] = Math.floor(t.rentalFee / 4294967296), f += 8;
                        for (s = u(t.newPart), p = 0; p < s.length; ++p) o[f++] = s[p];
                        for (s = u(t.parent), p = 0; p < s.length; ++p) o[f++] = s[p]
                    } else if (a[0] === i.default.mosaicDefinition) {
                        s = h(t.mosaicDefinition);
                        a[g++] = s.length, f += 4;
                        for (p = 0; p < s.length; ++p) o[f++] = s[p];
                        s = u(t.creationFeeSink);
                        for (p = 0; p < s.length; ++p) o[f++] = s[p];
                        s = c(t.creationFee);
                        for (p = 0; p < s.length; ++p) o[f++] = s[p]
                    } else if (a[0] === i.default.mosaicSupply) {
                        var m = l(t.mosaicId);
                        for (p = 0; p < m.length; ++p) o[f++] = m[p];
                        s = new ArrayBuffer(4);
                        (a = new Uint32Array(s))[0] = t.supplyType;
                        var v = new Uint8Array(s);
                        for (p = 0; p < v.length; ++p) o[f++] = v[p];
                        var y = c(t.delta);
                        for (p = 0; p < y.length; ++p) o[f++] = y[p]
                    } else if (a[0] === i.default.multisigSignature) {
                        s = n.default.hex2ua(t.otherHash.data);
                        a[g++] = 4 + s.length, a[g++] = s.length, f += 8;
                        for (p = 0; p < s.length; ++p) o[f++] = s[p];
                        g = f / 4, s = t.otherAccount, a[g++] = s.length, f += 4;
                        for (p = 0; p < s.length; ++p) o[f++] = s.charCodeAt(p)
                    } else if (a[0] === i.default.multisigTransaction) {
                        s = e(t.otherTrans);
                        a[g++] = s.length, f += 4;
                        for (p = 0; p < s.length; ++p) o[f++] = s[p]
                    } else if (a[0] === i.default.multisigModification) {
                        s = t.modifications;
                        a[g++] = s.length, f += 4;
                        for (p = 0; p < s.length; ++p) {
                            a[g++] = 40, f += 4, 1 == s[p].modificationType ? a[g++] = 1 : a[g++] = 2, f += 4, a[g++] = 32, f += 4;
                            for (var A = n.default.hex2ua(t.modifications[p].cosignatoryAccount), M = 0; M < A.length; ++M) o[f++] = A[M];
                            g = f / 4
                        }(16777215 & a[1]) >= 2 && (a[g++] = 4, f += 4, a[g++] = t.minCosignatories.relativeChange.toString(16), f += 4)
                    } else if (a[0] === i.default.importanceTransfer) {
                        a[g++] = t.mode, f += 4, a[g++] = 32, f += 4;
                        for (A = n.default.hex2ua(t.remoteAccount), M = 0; M < A.length; ++M) o[f++] = A[M]
                    }
                    return new Uint8Array(r, 0, f)
                }
            }
        },
        1683: function(e, t, r) {
            "use strict";
            var n = d(r(3e3)),
                a = d(r(3001)),
                i = d(r(3002)),
                o = d(r(3003)),
                u = d(r(3004)),
                s = d(r(3005)),
                c = d(r(3006)),
                l = d(r(3007)),
                f = d(r(1684));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                prepare: function(e) {
                    switch (e) {
                        case "transferTransaction":
                            return n.default.prepare;
                        case "mosaicTransferTransaction":
                            return n.default.prepareMosaic;
                        case "mosaicDefinitionTransaction":
                            return i.default.prepare;
                        case "multisigAggregateModificationTransaction":
                            return u.default.prepare;
                        case "namespaceProvisionTransaction":
                            return s.default.prepare;
                        case "signatureTransaction":
                            return a.default.prepare;
                        case "mosaicSupplyChangeTransaction":
                            return o.default.prepare;
                        case "importanceTransferTransaction":
                            return c.default.prepare;
                        default:
                            return {}
                    }
                },
                send: l.default,
                prepareMessage: f.default.prepare
            }
        },
        1684: function(e, t, r) {
            "use strict";
            var n = o(r(1014)),
                a = o(r(214)),
                i = o(r(90));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                prepare: function(e, t) {
                    return 2 === t.messageType && e.privateKey ? {
                        type: 2,
                        payload: n.default.encode(e.privateKey, t.recipientPublicKey, t.message.toString())
                    } : 2 === t.messageType && e.isHW ? {
                        type: 2,
                        payload: a.default.utf8ToHex(t.message.toString()),
                        publicKey: t.recipientPublicKey
                    } : 0 === t.messageType && i.default.isHexadecimal(t.message.toString()) ? {
                        type: 1,
                        payload: "fe" + t.message.toString()
                    } : {
                        type: 1,
                        payload: a.default.utf8ToHex(t.message.toString())
                    }
                }
            }
        },
        214: function(e, t, r) {
            "use strict";
            var n, a = r(391),
                i = (n = a) && n.__esModule ? n : {
                    default: n
                };
            var o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
                u = function(e, t, r) {
                    for (; e.length < r;) e = t + e;
                    return e
                },
                s = function(e) {
                    for (var t = "", r = 0; r < e.length; r++) {
                        var n = e.charCodeAt(r);
                        n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128))
                    }
                    return t
                };
            e.exports = {
                hex2ua_reversed: function(e) {
                    for (var t = e.toString(), r = new Uint8Array(t.length / 2), n = 0; n < t.length; n += 2) r[r.length - 1 - n / 2] = parseInt(t.substr(n, 2), 16);
                    return r
                },
                hex2ua: function(e) {
                    for (var t = e.toString(), r = new Uint8Array(t.length / 2), n = 0; n < t.length; n += 2) r[n / 2] = parseInt(t.substr(n, 2), 16);
                    return r
                },
                ua2hex: function(e) {
                    for (var t = "", r = 0; r < e.length; r++) {
                        var n = e[r];
                        t += o[n >>> 4], t += o[15 & n]
                    }
                    return t
                },
                hex2a: function(e) {
                    for (var t = e.toString(), r = "", n = 0; n < t.length; n += 2) r += String.fromCharCode(parseInt(t.substr(n, 2), 16));
                    return r
                },
                utf8ToHex: function(e) {
                    for (var t = s(e), r = "", n = 0; n < t.length; n++) r += u(t.charCodeAt(n).toString(16), "0", 2);
                    return r
                },
                ua2words: function(e, t) {
                    for (var r = [], n = 0; n < t; n += 4) {
                        var a = 16777216 * e[n] + 65536 * (e[n + 1] || 0) + 256 * (e[n + 2] || 0) + (e[n + 3] || 0);
                        r.push(a > 2147483647 ? a - 4294967296 : a)
                    }
                    return i.default.lib.WordArray.create(r, t)
                },
                words2ua: function(e, t) {
                    for (var r = 0; r < e.length; r += 4) {
                        var n = t.words[r / 4];
                        n < 0 && (n += 4294967296), e[r] = n >>> 24, e[r + 1] = n >>> 16 & 255, e[r + 2] = n >>> 8 & 255, e[r + 3] = 255 & n
                    }
                    return e
                },
                rstr2utf8: s,
                utf82rstr: function(e) {
                    for (var t = "", r = 0, n = 0, a = 0, i = 0; r < e.length;)(n = e.charCodeAt(r)) < 128 ? (t += String.fromCharCode(n), r++) : n > 191 && n < 224 ? (a = e.charCodeAt(r + 1), t += String.fromCharCode((31 & n) << 6 | 63 & a), r += 2) : (a = e.charCodeAt(r + 1), i = e.charCodeAt(r + 2), t += String.fromCharCode((15 & n) << 12 | (63 & a) << 6 | 63 & i), r += 3);
                    return t
                }
            }
        },
        215: function(e, t, r) {
            "use strict";
            var n = {
                mainnet: {
                    id: 104,
                    prefix: "68",
                    char: "N"
                },
                testnet: {
                    id: -104,
                    prefix: "98",
                    char: "T"
                },
                mijin: {
                    id: 96,
                    prefix: "60",
                    char: "M"
                }
            };
            e.exports = {
                data: n,
                id2Prefix: function(e) {
                    return 104 === e ? "68" : -104 === e ? "98" : "60"
                },
                id2Char: function(e) {
                    return 104 === e ? "N" : -104 === e ? "T" : "M"
                },
                char2Id: function(e) {
                    return "N" === e ? 104 : "T" === e ? -104 : 96
                },
                getVersion: function(e, t) {
                    return t === n.mainnet.id ? 1744830464 | e : t === n.testnet.id ? 2550136832 | e : 1610612736 | e
                }
            }
        },
        216: function(e, t, r) {
            "use strict";
            e.exports = {
                transfer: 257,
                importanceTransfer: 2049,
                multisigModification: 4097,
                multisigSignature: 4098,
                multisigTransaction: 4100,
                provisionNamespace: 8193,
                mosaicDefinition: 16385,
                mosaicSupply: 16386
            }
        },
        217: function(e, t, r) {
            "use strict";
            var n = c(r(2994)),
                a = c(r(2995)),
                i = c(r(2996)),
                o = c(r(2997)),
                u = c(r(2998)),
                s = c(r(2999));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function(e, t) {
                switch (t) {
                    case "account":
                        return e ? n.default : (0, n.default)();
                    case "accountInfoQR":
                        return e ? u.default.accountInfo : u.default.accountInfo();
                    case "common":
                        return e ? a.default.common : a.default.common();
                    case "commonTransactionPart":
                        return e ? o.default.commonPart : o.default.commonPart();
                    case "endpoint":
                        return e ? a.default.endpoint : a.default.endpoint();
                    case "mosaicAttachment":
                        return e ? i.default.attachment : i.default.attachment();
                    case "mosaicDefinitionMetaDataPair":
                        return i.default.definitionMetaDataPair();
                    case "mosaicDefinitionTransaction":
                        return e ? o.default.mosaicDefinition : o.default.mosaicDefinition();
                    case "invoice":
                        return e ? u.default.invoice : u.default.invoice();
                    case "transferTransaction":
                        return e ? o.default.transfer : o.default.transfer();
                    case "signatureTransaction":
                        return e ? o.default.signature : o.default.signature();
                    case "messageTypes":
                        return a.default.messageTypes();
                    case "mosaicSupplyChangeTransaction":
                        return e ? o.default.mosaicSupplyChange : o.default.mosaicSupplyChange();
                    case "multisigAggregateModification":
                        return e ? o.default.multisigAggregateModification : o.default.multisigAggregateModification();
                    case "multisigCosignatoryModification":
                        return e ? a.default.multisigCosignatoryModification : a.default.multisigCosignatoryModification();
                    case "namespaceProvisionTransaction":
                        return e ? o.default.namespaceProvision : o.default.namespaceProvision();
                    case "importanceTransferTransaction":
                        return e ? o.default.importanceTransfer : o.default.importanceTransfer();
                    case "wallet":
                        return e ? s.default : (0, s.default)();
                    case "walletQR":
                        return e ? u.default.wallet : u.default.wallet();
                    default:
                        return {}
                }
            };
            e.exports = {
                get: function(e) {
                    return l(0, e)
                },
                create: function(e) {
                    return l(1, e)
                }
            }
        },
        2360: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(196),
                a = w(r(394)),
                i = w(r(214)),
                o = w(r(595)),
                u = w(r(593)),
                s = w(r(215)),
                c = w(r(1014)),
                l = w(r(90)),
                f = w(r(2992)),
                d = w(r(1682)),
                p = w(r(216)),
                g = w(r(596)),
                m = w(r(597)),
                h = w(r(2993)),
                v = w(r(1683)),
                y = w(r(217)),
                A = w(r(1685)),
                M = w(r(257)),
                S = w(r(391)),
                T = w(r(3114)),
                x = w(r(3147));

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = {
                crypto: {
                    keyPair: {
                        create: n.create
                    },
                    helpers: c.default,
                    nacl: u.default,
                    js: S.default,
                    verifySignature: n.verifySignature
                },
                model: {
                    address: a.default,
                    network: s.default,
                    nodes: g.default,
                    transactionTypes: p.default,
                    sinks: m.default,
                    wallet: h.default,
                    transactions: v.default,
                    objects: y.default,
                    fees: M.default,
                    apostille: x.default
                },
                utils: {
                    convert: i.default,
                    helpers: l.default,
                    nty: f.default,
                    serialization: d.default,
                    format: o.default
                },
                com: {
                    requests: A.default,
                    websockets: T.default
                }
            }
        },
        257: function(e, t, r) {
            "use strict";
            var n = i(r(90)),
                a = i(r(595));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = Math.floor(3 * .05 * 1e6),
                u = Math.floor(3 * .05 * 1e6),
                s = Math.floor(3 * .05 * 1e6),
                c = Math.floor(3 * .05 * 1e6),
                l = Math.floor(5e5),
                f = function(e) {
                    var t = Math.floor(Math.max(1, e / 1e4));
                    return t > 25 ? 25 : t
                },
                d = function(e, t, r, n) {
                    return 0 === r ? 0 : 8999999999 * t * e / r / Math.pow(10, n + 6)
                };
            e.exports = {
                multisigTransaction: o,
                rootProvisionNamespaceTransaction: 1e8,
                subProvisionNamespaceTransaction: 1e7,
                mosaicDefinitionTransaction: 1e7,
                namespaceAndMosaicCommon: u,
                signatureTransaction: s,
                calculateMosaics: function(e, t, r) {
                    for (var i = 0, o = 0, u = 0, s = 0; s < r.length; s++) {
                        var c = r[s],
                            l = a.default.mosaicIdToName(c.mosaicId);
                        if (!(l in t)) return ["unknown mosaic divisibility"];
                        var p = t[l],
                            g = n.default.grep(p.mosaicDefinition.properties, (function(e) {
                                return "divisibility" === e.name
                            })),
                            m = 1 === g.length ? ~~g[0].value : 0,
                            h = p.supply,
                            v = c.quantity;
                        if (h <= 1e4 && 0 === m) o = .05;
                        else {
                            var y = h * Math.pow(10, m);
                            u = Math.floor(.8 * Math.log(Math.floor(9e15 / y)));
                            var A = d(e, v, h, m);
                            o = f(Math.ceil(A))
                        }
                        i += .05 * Math.max(1, o - u)
                    }
                    return i
                },
                calculateMinimum: f,
                calculateMessage: function(e, t) {
                    if (!e.payload || !e.payload.length) return 0;
                    var r = e.payload.length / 2;
                    return t && 2 == e.type && (r = 48 + 16 * Math.ceil(r / 16)), .05 * (Math.floor(r / 32) + 1)
                },
                calculateXemEquivalent: d,
                currentFeeFactor: .05,
                importanceTransferTransaction: c,
                multisigAggregateModificationTransaction: l
            }
        },
        2992: function(e, t, r) {
            "use strict";
            e.exports = {
                createNotaryData: function(e, t, r, n, a, i, o, u, s) {
                    return {
                        data: [{
                            filename: e,
                            tags: t,
                            fileHash: r,
                            owner: i,
                            fromMultisig: o,
                            dedicatedAccount: u,
                            dedicatedPrivateKey: s,
                            txHash: n,
                            txMultisigHash: a,
                            timeStamp: (new Date).toUTCString()
                        }]
                    }
                },
                updateNotaryData: function(e, t) {
                    return e.data.push(t.data[0]), e
                }
            }
        },
        2993: function(e, t, r) {
            "use strict";
            var n = l(r(593)),
                a = l(r(214)),
                i = l(r(90)),
                o = l(r(196)),
                u = l(r(1014)),
                s = l(r(394)),
                c = l(r(217));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                createPRNG: function(e, t, r) {
                    if (!e.length || !t.length || !r) throw new Error("A parameter is missing !");
                    var i = a.default.ua2hex(n.default.randomBytes(32)),
                        l = o.default.create(i),
                        f = s.default.toAddress(l.publicKey.toString(), r),
                        d = u.default.encodePrivKey(i, t);
                    return c.default.create("wallet")(e, f, !0, "pass:bip32", d, r)
                },
                createBrain: function(e, t, r) {
                    if (!e.length || !t.length || !r) throw new Error("A parameter is missing !");
                    var n = u.default.derivePassSha(t, 6e3).priv,
                        a = o.default.create(n),
                        i = s.default.toAddress(a.publicKey.toString(), r);
                    return c.default.create("wallet")(e, i, !0, "pass:6k", "", r)
                },
                importPrivateKey: function(e, t, r, n) {
                    if (!(e.length && t.length && n && r)) throw new Error("A parameter is missing !");
                    if (!i.default.isPrivateKeyValid(r)) throw new Error("Private key is not valid !");
                    var a = o.default.create(r),
                        l = s.default.toAddress(a.publicKey.toString(), n),
                        f = u.default.encodePrivKey(r, t);
                    return c.default.create("wallet")(e, l, !1, "pass:enc", f, n)
                }
            }
        },
        2994: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, r, n, a) {
                return {
                    address: e || "",
                    label: t || "",
                    child: r || "",
                    encrypted: n || "",
                    iv: a || ""
                }
            }
        },
        2995: function(e, t, r) {
            "use strict";
            e.exports = {
                endpoint: function(e, t) {
                    return {
                        host: e || "",
                        port: t || ""
                    }
                },
                common: function(e, t, r) {
                    return {
                        password: e || "",
                        privateKey: t || "",
                        isHW: r || !1
                    }
                },
                messageTypes: function() {
                    return [{
                        value: 0,
                        name: "Hexadecimal"
                    }, {
                        value: 1,
                        name: "Unencrypted"
                    }, {
                        value: 2,
                        name: "Encrypted"
                    }]
                },
                multisigCosignatoryModification: function(e, t) {
                    return {
                        modificationType: e || 1,
                        cosignatoryAccount: t
                    }
                }
            }
        },
        2996: function(e, t, r) {
            "use strict";
            e.exports = {
                attachment: function(e, t, r) {
                    return {
                        mosaicId: {
                            namespaceId: e || "",
                            name: t || ""
                        },
                        quantity: r || 0
                    }
                },
                definitionMetaDataPair: function() {
                    return {
                        "nem:xem": {
                            mosaicDefinition: {
                                creator: "3e82e1c1e4a75adaa3cba8c101c3cd31d9817a2eb966eb3b511fb2ed45b8e262",
                                description: "reserved xem mosaic",
                                id: {
                                    namespaceId: "nem",
                                    name: "xem"
                                },
                                properties: [{
                                    name: "divisibility",
                                    value: "6"
                                }, {
                                    name: "initialSupply",
                                    value: "8999999999"
                                }, {
                                    name: "supplyMutable",
                                    value: "false"
                                }, {
                                    name: "transferable",
                                    value: "true"
                                }],
                                levy: {}
                            }
                        }
                    }
                }
            }
        },
        2997: function(e, t, r) {
            "use strict";
            e.exports = {
                multisigAggregateModification: function() {
                    return {
                        modifications: [],
                        relativeChange: null,
                        isMultisig: !1,
                        multisigAccount: ""
                    }
                },
                transfer: function(e, t, r) {
                    return {
                        amount: t || 0,
                        recipient: e || "",
                        recipientPublicKey: "",
                        isMultisig: !1,
                        multisigAccount: "",
                        message: r || "",
                        messageType: 1,
                        mosaics: []
                    }
                },
                signature: function(e, t) {
                    var r = "";
                    return void 0 !== e && e.length && (r = e.toUpperCase().replace(/-/g, "")), {
                        otherHash: {
                            data: t || ""
                        },
                        otherAccount: r
                    }
                },
                mosaicDefinition: function() {
                    return {
                        mosaicName: "",
                        namespaceParent: "",
                        mosaicDescription: "",
                        properties: {
                            initialSupply: 0,
                            divisibility: 0,
                            transferable: !0,
                            supplyMutable: !0
                        },
                        levy: {
                            mosaic: null,
                            address: "",
                            feeType: 1,
                            fee: 5
                        },
                        isMultisig: !1,
                        multisigAccount: ""
                    }
                },
                mosaicSupplyChange: function() {
                    return {
                        mosaic: "",
                        supplyType: 1,
                        delta: 0,
                        isMultisig: !1,
                        multisigAccount: ""
                    }
                },
                namespaceProvision: function(e, t) {
                    return {
                        namespaceName: e || "",
                        namespaceParent: t || null,
                        isMultisig: !1,
                        multisigAccount: ""
                    }
                },
                importanceTransfer: function(e, t) {
                    return {
                        remoteAccount: e || "",
                        mode: t || "",
                        isMultisig: !1,
                        multisigAccount: ""
                    }
                },
                commonPart: function(e, t, r, n, a, i) {
                    return {
                        type: e || "",
                        version: a || "",
                        signer: t || "",
                        timeStamp: r || "",
                        deadline: r + 60 * n || ""
                    }
                }
            }
        },
        2998: function(e, t, r) {
            "use strict";
            e.exports = {
                accountInfo: function(e, t, r, n) {
                    return {
                        v: e || "",
                        type: 1,
                        data: {
                            addr: r || "",
                            name: n || ""
                        }
                    }
                },
                wallet: function(e, t, r, n, a) {
                    return {
                        v: e || "",
                        type: t || "",
                        data: {
                            name: r || "",
                            priv_key: n || "",
                            salt: a || ""
                        }
                    }
                },
                invoice: function() {
                    return {
                        v: "v = 1 for testnet, v = 2 for mainnet",
                        type: 2,
                        data: {
                            addr: "",
                            amount: 0,
                            msg: "",
                            name: ""
                        }
                    }
                }
            }
        },
        2999: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, r, n, a, i) {
                return {
                    name: e,
                    accounts: {
                        0: {
                            brain: r,
                            algo: n,
                            encrypted: a.ciphertext || "",
                            iv: a.iv || "",
                            address: t.toUpperCase().replace(/-/g, ""),
                            label: "Primary",
                            network: i
                        }
                    }
                }
            }
        },
        3e3: function(e, t, r) {
            "use strict";
            var n = f(r(215)),
                a = f(r(90)),
                i = f(r(216)),
                o = f(r(257)),
                u = f(r(196)),
                s = f(r(217)),
                c = f(r(395)),
                l = f(r(1684));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = function(e, t, r, u, c, l, f, d, p) {
                var g = a.default.createNEMTimeStamp(),
                    m = f ? n.default.getVersion(2, p) : n.default.getVersion(1, p),
                    h = s.default.create("commonTransactionPart")(i.default.transfer, e, g, l, m),
                    v = f ? d : o.default.currentFeeFactor * o.default.calculateMinimum(r / 1e6),
                    y = Math.floor(1e6 * (c + v)),
                    A = {
                        recipient: t.toUpperCase().replace(/-/g, ""),
                        amount: r,
                        fee: y,
                        message: u,
                        mosaics: f
                    };
                return a.default.extendObj(h, A)
            };
            e.exports = {
                prepare: function(e, t, r) {
                    if (!e || !t || !r) throw new Error("Missing parameter !");
                    var i = u.default.create(a.default.fixPrivateKey(e.privateKey)),
                        s = t.isMultisig ? t.multisigAccount.publicKey : i.publicKey.toString(),
                        f = t.recipient.toString(),
                        p = Math.round(1e6 * t.amount),
                        g = l.default.prepare(e, t),
                        m = o.default.calculateMessage(g, e.isHW),
                        h = r === n.default.data.testnet.id ? 60 : 1440,
                        v = d(s, f, p, g, m, h, null, null, r);
                    return t.isMultisig && (v = (0, c.default)(i.publicKey.toString(), v, h, r)), v
                },
                prepareMosaic: function(e, t, r, i) {
                    if (!(e && t && r && null !== t.mosaics && i)) throw new Error("Missing parameter !");
                    var s = u.default.create(a.default.fixPrivateKey(e.privateKey)),
                        f = t.isMultisig ? t.multisigAccount.publicKey : s.publicKey.toString(),
                        p = t.recipient.toString(),
                        g = Math.round(1e6 * t.amount),
                        m = l.default.prepare(e, t),
                        h = o.default.calculateMessage(m, e.isHW),
                        v = i === n.default.data.testnet.id ? 60 : 1440,
                        y = t.mosaics,
                        A = o.default.calculateMosaics(g, r, y),
                        M = d(f, p, g, m, h, v, y, A, i);
                    return t.isMultisig && (M = (0, c.default)(s.publicKey.toString(), M, v, i)), M
                }
            }
        },
        3001: function(e, t, r) {
            "use strict";
            var n = c(r(215)),
                a = c(r(90)),
                i = c(r(216)),
                o = c(r(257)),
                u = c(r(196)),
                s = c(r(217));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = {
                prepare: function(e, t, r) {
                    if (!e || !t || !r) throw new Error("Missing parameter !");
                    var c = u.default.create(a.default.fixPrivateKey(e.privateKey)),
                        l = r === n.default.data.testnet.id ? 60 : 1440,
                        f = c.publicKey.toString(),
                        d = a.default.createNEMTimeStamp(),
                        p = n.default.getVersion(1, r),
                        g = s.default.create("commonTransactionPart")(i.default.multisigSignature, f, d, l, p),
                        m = {
                            fee: o.default.signatureTransaction
                        };
                    return a.default.extendObj(t, g, m)
                }
            }
        },
        3002: function(e, t, r) {
            "use strict";
            var n = f(r(215)),
                a = f(r(90)),
                i = f(r(216)),
                o = f(r(257)),
                u = f(r(196)),
                s = f(r(217)),
                c = f(r(597)),
                l = f(r(395));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = function(e, t, r, u, c, l, f, d, p, g) {
                var m = a.default.createNEMTimeStamp(),
                    h = n.default.getVersion(1, g),
                    v = s.default.create("commonTransactionPart")(i.default.mosaicDefinition, e, m, p, h),
                    y = o.default.namespaceAndMosaicCommon,
                    A = d ? {
                        type: d.feeType,
                        recipient: d.address.toUpperCase().replace(/-/g, ""),
                        mosaicId: d.mosaic,
                        fee: d.fee
                    } : null,
                    M = {
                        creationFeeSink: t.replace(/-/g, ""),
                        creationFee: r,
                        mosaicDefinition: {
                            creator: e,
                            id: {
                                namespaceId: u,
                                name: c
                            },
                            description: l,
                            properties: Object.keys(f).map((function(e, t) {
                                return {
                                    name: e,
                                    value: f[e].toString()
                                }
                            })),
                            levy: A
                        },
                        fee: y
                    };
                return a.default.extendObj(v, M)
            };
            e.exports = {
                prepare: function(e, t, r) {
                    var i = u.default.create(a.default.fixPrivateKey(e.privateKey)),
                        s = t.isMultisig ? t.multisigAccount.publicKey : i.publicKey.toString(),
                        f = c.default.mosaic[r].toUpperCase().replace(/-/g, ""),
                        p = o.default.mosaicDefinitionTransaction,
                        g = t.namespaceParent.fqn,
                        m = t.mosaicName.toString(),
                        h = t.mosaicDescription.toString(),
                        v = t.properties,
                        y = t.levy.mosaic ? t.levy : null,
                        A = r === n.default.data.testnet.id ? 60 : 1440,
                        M = d(s, f, p, g, m, h, v, y, A, r);
                    return t.isMultisig && (M = (0, l.default)(i.publicKey.toString(), M, A, r)), M
                }
            }
        },
        3003: function(e, t, r) {
            "use strict";
            var n = l(r(215)),
                a = l(r(90)),
                i = l(r(216)),
                o = l(r(257)),
                u = l(r(196)),
                s = l(r(217)),
                c = l(r(395));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = function(e, t, r, u, c, l) {
                var f = a.default.createNEMTimeStamp(),
                    d = n.default.getVersion(1, l),
                    p = s.default.create("commonTransactionPart")(i.default.mosaicSupply, e, f, c, d),
                    g = {
                        mosaicId: t,
                        supplyType: r,
                        delta: u,
                        fee: o.default.namespaceAndMosaicCommon
                    };
                return a.default.extendObj(p, g)
            };
            e.exports = {
                prepare: function(e, t, r) {
                    var i = u.default.create(a.default.fixPrivateKey(e.privateKey)),
                        o = t.isMultisig ? t.multisigAccount.publicKey : i.publicKey.toString(),
                        s = r === n.default.data.testnet.id ? 60 : 1440,
                        l = f(o, t.mosaic, t.supplyType, t.delta, s, r);
                    return t.isMultisig && (l = (0, c.default)(i.publicKey.toString(), l, s, r)), l
                }
            }
        },
        3004: function(e, t, r) {
            "use strict";
            var n = f(r(215)),
                a = f(r(90)),
                i = f(r(216)),
                o = f(r(196)),
                u = f(r(257)),
                s = f(r(217)),
                c = f(r(394)),
                l = f(r(395));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = function(e, t, r, o, l, f) {
                var d = a.default.createNEMTimeStamp(),
                    p = null === r || 0 === r,
                    g = p ? n.default.getVersion(1, f) : n.default.getVersion(2, f),
                    m = s.default.create("commonTransactionPart")(i.default.multisigModification, e, d, l, g),
                    h = {
                        fee: u.default.multisigAggregateModificationTransaction,
                        modifications: t,
                        minCosignatories: {
                            relativeChange: 0
                        }
                    };
                return o ? (p ? delete h.minCosignatories : h.minCosignatories.relativeChange = r, h.modifications.length > 1 && h.modifications.sort((function(e, t) {
                    return e.modificationType - t.modificationType || c.default.toAddress(e.cosignatoryAccount, f).localeCompare(c.default.toAddress(t.cosignatoryAccount, f))
                }))) : (h.minCosignatories.relativeChange = r, h.modifications.length > 1 && h.modifications.sort((function(e, t) {
                    return c.default.toAddress(e.cosignatoryAccount, f) < c.default.toAddress(t.cosignatoryAccount, f) ? -1 : c.default.toAddress(e.cosignatoryAccount, f) > c.default.toAddress(t.cosignatoryAccount, f) ? 1 : 0
                }))), a.default.extendObj(m, h)
            };
            e.exports = {
                prepare: function(e, t, r) {
                    if (!e || !t || !r) throw new Error("Missing parameter !");
                    var i = o.default.create(a.default.fixPrivateKey(e.privateKey)),
                        u = t.isMultisig ? t.multisigAccount.publicKey : i.publicKey.toString(),
                        s = r === n.default.data.testnet.id ? 60 : 1440,
                        c = d(u, t.modifications, t.relativeChange, t.isMultisig, s, r);
                    return t.isMultisig && (c = (0, l.default)(i.publicKey.toString(), c, s, r)), c
                }
            }
        },
        3005: function(e, t, r) {
            "use strict";
            var n = f(r(215)),
                a = f(r(90)),
                i = f(r(216)),
                o = f(r(257)),
                u = f(r(196)),
                s = f(r(217)),
                c = f(r(597)),
                l = f(r(395));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = function(e, t, r, u, c, l, f) {
                var d = a.default.createNEMTimeStamp(),
                    p = n.default.getVersion(1, f),
                    g = s.default.create("commonTransactionPart")(i.default.provisionNamespace, e, d, l, p),
                    m = o.default.namespaceAndMosaicCommon,
                    h = {
                        rentalFeeSink: t.toUpperCase().replace(/-/g, ""),
                        rentalFee: r,
                        parent: u,
                        newPart: c,
                        fee: m
                    };
                return a.default.extendObj(g, h)
            };
            e.exports = {
                prepare: function(e, t, r) {
                    if (!e || !t || !r) throw new Error("Missing parameter !");
                    var i = u.default.create(a.default.fixPrivateKey(e.privateKey)),
                        s = t.isMultisig ? t.multisigAccount.publicKey : i.publicKey.toString(),
                        f = c.default.namespace[r].toUpperCase().replace(/-/g, ""),
                        p = void 0;
                    p = t.namespaceParent ? o.default.subProvisionNamespaceTransaction : o.default.rootProvisionNamespaceTransaction;
                    var g = t.namespaceParent ? t.namespaceParent.fqn : null,
                        m = t.namespaceName.toString(),
                        h = r === n.default.data.testnet.id ? 60 : 1440,
                        v = d(s, f, p, g, m, h, r);
                    return t.isMultisig && (v = (0, l.default)(i.publicKey.toString(), v, h, r)), v
                }
            }
        },
        3006: function(e, t, r) {
            "use strict";
            var n = l(r(215)),
                a = l(r(90)),
                i = l(r(216)),
                o = l(r(257)),
                u = l(r(196)),
                s = l(r(217)),
                c = l(r(395));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = function(e, t, r, u, c) {
                var l = a.default.createNEMTimeStamp(),
                    f = n.default.getVersion(1, c),
                    d = s.default.create("commonTransactionPart")(i.default.importanceTransfer, e, l, u, f),
                    p = {
                        remoteAccount: t,
                        mode: r,
                        fee: o.default.importanceTransferTransaction
                    };
                return a.default.extendObj(d, p)
            };
            e.exports = {
                prepare: function(e, t, r) {
                    if (!e || !t || !r) throw new Error("Missing parameter !");
                    var i = u.default.create(a.default.fixPrivateKey(e.privateKey)),
                        o = t.isMultisig ? t.multisigAccount.publicKey : i.publicKey.toString(),
                        s = r === n.default.data.testnet.id ? 60 : 1440,
                        l = f(o, t.remoteAccount, t.mode, s, r);
                    return t.isMultisig && (l = (0, c.default)(i.publicKey.toString(), l, s, r)), l
                }
            }
        },
        3007: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = s(r(90)),
                a = s(r(214)),
                i = s(r(1682)),
                o = s(r(196)),
                u = s(r(1685));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e, t, r) {
                if (!r || !t || !e) throw new Error("Missing parameter !");
                if (64 !== e.privateKey.length && 66 !== e.privateKey.length) throw new Error("Invalid private key, length must be 64 or 66 characters !");
                if (!n.default.isHexadecimal(e.privateKey)) throw new Error("Private key must be hexadecimal only !");
                var s = o.default.create(n.default.fixPrivateKey(e.privateKey)),
                    c = i.default.serializeTransaction(t),
                    l = s.sign(c),
                    f = {
                        data: a.default.ua2hex(c),
                        signature: l.toString()
                    };
                return u.default.transaction.announce(r, JSON.stringify(f))
            }
        },
        3147: function(e, t, r) {
            "use strict";
            var n = l(r(391)),
                a = l(r(90)),
                i = (l(r(214)), l(r(196))),
                o = l(r(394)),
                u = l(r(597)),
                s = l(r(217)),
                c = l(r(1683));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = {
                    MD5: {
                        name: "MD5",
                        signedVersion: "81",
                        version: "01"
                    },
                    SHA1: {
                        name: "SHA1",
                        signedVersion: "82",
                        version: "02"
                    },
                    SHA256: {
                        name: "SHA256",
                        signedVersion: "83",
                        version: "03"
                    },
                    "SHA3-256": {
                        name: "SHA3-256",
                        signedVersion: "88",
                        version: "08"
                    },
                    "SHA3-512": {
                        name: "SHA3-512",
                        signedVersion: "89",
                        version: "09"
                    }
                },
                d = function(e, t, r) {
                    var a = void 0;
                    return a = r ? "4e5459" + t.signedVersion : "4e5459" + t.version, "MD5" === t.name ? a + n.default.MD5(e) : "SHA1" === t.name ? a + n.default.SHA1(e) : "SHA256" === t.name ? a + n.default.SHA256(e) : "SHA3-256" === t.name ? a + n.default.SHA3(e, {
                        outputLength: 256
                    }) : a + n.default.SHA3(e, {
                        outputLength: 512
                    })
                },
                p = function(e, t) {
                    var r = e.substring(0, 10).substring(8);
                    return "01" === r || "81" === r ? n.default.MD5(t).toString(n.default.enc.Hex) : "02" === r || "82" === r ? n.default.SHA1(t).toString(n.default.enc.Hex) : "03" === r || "83" === r ? n.default.SHA256(t).toString(n.default.enc.Hex) : "08" === r || "88" === r ? n.default.SHA3(t, {
                        outputLength: 256
                    }).toString(n.default.enc.Hex) : n.default.SHA3(t, {
                        outputLength: 512
                    }).toString(n.default.enc.Hex)
                },
                g = function(e) {
                    for (var t = Object.keys(f), r = 0; t.length > r; r++)
                        if (f[t[r]].signedVersion === e) return !0;
                    return !1
                },
                m = function(e, t, r) {
                    var u = i.default.create(a.default.fixPrivateKey(e.privateKey)).sign(n.default.SHA256(t).toString(n.default.enc.Hex)).toString(),
                        s = a.default.fixPrivateKey(u),
                        c = i.default.create(s);
                    return {
                        address: o.default.toAddress(c.publicKey.toString(), r),
                        privateKey: s
                    }
                };
            e.exports = {
                create: function(e, t, r, n, o, l, f, p, g) {
                    var h = {},
                        v = void 0;
                    if (p) {
                        var y = i.default.create(a.default.fixPrivateKey(e.privateKey));
                        h = m(e, t, g);
                        var A = d(r, o, p),
                            M = A.substring(0, 8),
                            S = A.substring(8);
                        v = M + y.sign(S).toString()
                    } else h.address = u.default.apostille[g].toUpperCase().replace(/-/g, ""), h.privateKey = "None (public sink)", v = d(r, o, p);
                    var T = s.default.create("transferTransaction")(h.address, 0, v);
                    T.isMultisig = l, T.multisigAccount = f, T.messageType = 0;
                    var x = c.default.prepare("transferTransaction")(e, T, g);
                    return {
                        data: {
                            file: {
                                name: t,
                                hash: v.substring(8),
                                content: r
                            },
                            hash: "fe" + v,
                            checksum: "fe" + v.substring(0, 8),
                            dedicatedAccount: {
                                address: h.address,
                                privateKey: h.privateKey
                            },
                            tags: n
                        },
                        transaction: x
                    }
                },
                generateAccount: m,
                hashing: f,
                verify: function(e, t) {
                    var r = void 0,
                        n = (r = 4100 === t.type ? t.otherTrans.message.payload : t.message.payload).substring(0, 10).substring(8),
                        a = p(r, e);
                    return g(n) ? i.default.verifySignature(t.signer, a, r.substring(10)) : a === r.substring(10)
                },
                isSigned: g
            }
        },
        394: function(e, t, r) {
            "use strict";
            var n = o(r(214)),
                a = o(r(215)),
                i = o(r(391));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                s = function(e) {
                    var t = [],
                        r = Math.floor(e.length / 5),
                        n = e.length % 5;
                    if (0 != n) {
                        for (var a = 0; a < 5 - n; a++) e += "\0";
                        r += 1
                    }
                    for (var i = 0; i < r; i++) t.push(u.charAt(e.charCodeAt(5 * i) >> 3)), t.push(u.charAt((7 & e.charCodeAt(5 * i)) << 2 | e.charCodeAt(5 * i + 1) >> 6)), t.push(u.charAt((63 & e.charCodeAt(5 * i + 1)) >> 1)), t.push(u.charAt((1 & e.charCodeAt(5 * i + 1)) << 4 | e.charCodeAt(5 * i + 2) >> 4)), t.push(u.charAt((15 & e.charCodeAt(5 * i + 2)) << 1 | e.charCodeAt(5 * i + 3) >> 7)), t.push(u.charAt((127 & e.charCodeAt(5 * i + 3)) >> 2)), t.push(u.charAt((3 & e.charCodeAt(5 * i + 3)) << 3 | e.charCodeAt(5 * i + 4) >> 5)), t.push(u.charAt(31 & e.charCodeAt(5 * i + 4)));
                    var o = 0;
                    1 == n ? o = 6 : 2 == n ? o = 4 : 3 == n ? o = 3 : 4 == n && (o = 1);
                    for (var s = 0; s < o; s++) t.pop();
                    for (var c = 0; c < o; c++) t.push("=");
                    return t.join("")
                },
                c = function(e) {
                    for (var t = new ArrayBuffer(5 * e.length / 8), r = new Uint8Array(t), n = 0; n < e.length / 8; n++) {
                        for (var a = [0, 0, 0, 0, 0, 0, 0, 0], i = 0; i < 8; ++i) a[i] = u.indexOf(e[8 * n + i]);
                        r[5 * n + 0] = a[0] << 3 | a[1] >> 2, r[5 * n + 1] = (3 & a[1]) << 6 | a[2] << 1 | a[3] >> 4, r[5 * n + 2] = (15 & a[3]) << 4 | a[4] >> 1, r[5 * n + 3] = (1 & a[4]) << 7 | a[5] << 2 | a[6] >> 3, r[5 * n + 4] = (7 & a[6]) << 5 | a[7]
                    }
                    return r
                };
            e.exports = {
                b32encode: s,
                b32decode: c,
                toAddress: function(e, t) {
                    var r = i.default.enc.Hex.parse(e),
                        o = i.default.SHA3(r, {
                            outputLength: 256
                        }),
                        u = i.default.RIPEMD160(o),
                        c = a.default.id2Prefix(t) + i.default.enc.Hex.stringify(u),
                        l = i.default.SHA3(i.default.enc.Hex.parse(c), {
                            outputLength: 256
                        }),
                        f = i.default.enc.Hex.stringify(l).substr(0, 8),
                        d = n.default.hex2a(c + f);
                    return s(d)
                },
                isFromNetwork: function(e, t) {
                    var r = e.toString().toUpperCase().replace(/-/g, "")[0];
                    return a.default.id2Char(t) === r
                },
                isValid: function(e) {
                    var t = e.toString().toUpperCase().replace(/-/g, "");
                    if (!t || 40 !== t.length) return !1;
                    var r = n.default.ua2hex(c(t)),
                        a = i.default.enc.Hex.parse(r.slice(0, 42)),
                        o = i.default.SHA3(a, {
                            outputLength: 256
                        });
                    return i.default.enc.Hex.stringify(o).substr(0, 8) === r.slice(42)
                },
                clean: function(e) {
                    return e.toUpperCase().replace(/-|\s/g, "")
                }
            }
        },
        395: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = s(r(215)),
                a = s(r(90)),
                i = s(r(216)),
                o = s(r(257)),
                u = s(r(217));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e, t, r, s) {
                var c = a.default.createNEMTimeStamp(),
                    l = n.default.getVersion(1, s),
                    f = u.default.create("commonTransactionPart")(i.default.multisigTransaction, e, c, r, l, s),
                    d = {
                        fee: o.default.multisigTransaction,
                        otherTrans: t
                    };
                return a.default.extendObj(f, d)
            }
        },
        595: function(e, t, r) {
            "use strict";
            var n = o(r(214)),
                a = o(r(394)),
                i = o(r(216));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = function(e, t, r) {
                    if (void 0 === e) return e;
                    var n = c(t);
                    if (!(n in r)) return ["unknown mosaic divisibility", e];
                    var a = r[n],
                        i = $.grep(a.mosaicDefinition.properties, (function(e) {
                            return "divisibility" === e.name
                        })),
                        o = 1 === i.length ? ~~i[0].value : 0,
                        u = parseInt(e, 10);
                    if (!u) return 0 === o ? ["0", ""] : ["0", u.toFixed(o).split(".")[1]];
                    var s = (u /= Math.pow(10, o)).toFixed(o).split(".");
                    return [s[0].split(/(?=(?:...)*$)/).join(" "), s[1] || ""]
                },
                s = function(e) {
                    if (void 0 === e) return e;
                    var t = e;
                    if (t && t.length > 2 && "f" === t[0] && "e" === t[1]) return "HEX: " + t.slice(2);
                    var r = void 0;
                    try {
                        r = decodeURIComponent(escape(n.default.hex2a(t)))
                    } catch (a) {
                        r = n.default.hex2a(t), console.log("invalid text input: " + e)
                    }
                    return r
                },
                c = function(e) {
                    return e ? e.namespaceId + ":" + e.name : e
                };
            e.exports = {
                splitHex: function(e) {
                    return void 0 === e ? e : (e.match(/[\s\S]{1,64}/g) || []).join("\n")
                },
                hexMessage: function(e) {
                    return void 0 === e ? e : 1 === e.type ? s(e.payload) : ""
                },
                hexToUtf8: s,
                importanceTransferMode: function(e) {
                    if (void 0 === e) return e;
                    return 1 === e ? "Activation" : 2 === e ? "Deactivation" : "Unknown"
                },
                nemValue: function(e) {
                    if (void 0 === e) return e;
                    var t = e;
                    if (t) {
                        var r = (t /= 1e6).toFixed(6).split(".");
                        return [r[0].split(/(?=(?:...)*$)/).join(" "), r[1]]
                    }
                    return ["0", "000000"]
                },
                nemImportanceScore: function(e) {
                    if (void 0 === e) return e;
                    var t = e;
                    return t ? [(t = (t *= 1e4).toFixed(4).split("."))[0], t[1]] : [t, 0]
                },
                levyFee: function(e, t, r, n) {
                    if (void 0 === e || void 0 === n) return e;
                    if (void 0 !== r && void 0 !== r.type) {
                        var a = void 0;
                        a = 1 === r.type ? r.fee : t / 1e6 * e.quantity * r.fee / 1e4;
                        var i = u(a, r.mosaicId, n);
                        return i[0] + "." + i[1]
                    }
                },
                supplyRaw: function(e, t) {
                    var r = ~~t,
                        n = parseInt(e, 10);
                    if (!n) return 0 === r ? ["0", ""] : ["0", n.toFixed(r).split(".")[1]];
                    var a = (n /= Math.pow(10, r)).toFixed(r).split(".");
                    return [a[0].split(/(?=(?:...)*$)/).join(" "), a[1] || ""]
                },
                supply: u,
                nemDate: function(e) {
                    var t = Date.UTC(2015, 2, 29, 0, 6, 25);
                    return void 0 === e ? e : new Date(t + 1e3 * e).toUTCString()
                },
                pubToAddress: function(e, t) {
                    return e && a.default.toAddress(e, t)
                },
                address: function(e) {
                    return e && e.toUpperCase().replace(/-/g, "").match(/.{1,6}/g).join("-")
                },
                mosaicIdToName: c,
                txTypeToName: function(e) {
                    switch (e) {
                        case i.default.transfer:
                            return "Transfer";
                        case i.default.importanceTransfer:
                            return "ImportanceTransfer";
                        case i.default.multisigModification:
                            return "MultisigModification";
                        case i.default.provisionNamespace:
                            return "ProvisionNamespace";
                        case i.default.mosaicDefinition:
                            return "MosaicDefinition";
                        case i.default.mosaicSupply:
                            return "MosaicSupply";
                        default:
                            return "Unknown_" + e
                    }
                }
            }
        },
        596: function(e, t, r) {
            "use strict";
            e.exports = {
                defaultTestnet: "http://23.228.67.85",
                defaultMainnet: "http://hugealice3.nem.ninja",
                defaultMijin: "",
                mainnetExplorer: "http://chain.nem.ninja/#/transfer/",
                testnetExplorer: "http://bob.nem.ninja:8765/#/transfer/",
                mijinExplorer: "",
                searchOnTestnet: [{
                    uri: "http://bigalice2.nem.ninja",
                    location: "America / New_York"
                }, {
                    uri: "http://192.3.61.243",
                    location: "America / Los_Angeles"
                }, {
                    uri: "http://23.228.67.85",
                    location: "America / Los_Angeles"
                }],
                searchOnMainnet: [{
                    uri: "http://62.75.171.41",
                    location: "Germany"
                }, {
                    uri: "http://104.251.212.131",
                    location: "USA"
                }, {
                    uri: "http://45.124.65.125",
                    location: "Hong Kong"
                }, {
                    uri: "http://185.53.131.101",
                    location: "Netherlands"
                }, {
                    uri: "http://sz.nemchina.com",
                    location: "China"
                }],
                searchOnMijin: [{
                    uri: "",
                    location: ""
                }],
                testnet: [{
                    uri: "http://104.128.226.60"
                }, {
                    uri: "http://23.228.67.85"
                }, {
                    uri: "http://192.3.61.243"
                }, {
                    uri: "http://50.3.87.123"
                }, {
                    uri: "http://localhost"
                }],
                mainnet: [{
                    uri: "http://hugealice.nem.ninja"
                }, {
                    uri: "http://hugealice2.nem.ninja"
                }, {
                    uri: "http://hugealice3.nem.ninja"
                }, {
                    uri: "http://hugealice4.nem.ninja"
                }, {
                    uri: "http://62.75.171.41"
                }, {
                    uri: "http://san.nem.ninja"
                }, {
                    uri: "http://go.nem.ninja"
                }, {
                    uri: "http://hachi.nem.ninja"
                }, {
                    uri: "http://jusan.nem.ninja"
                }, {
                    uri: "http://nijuichi.nem.ninja"
                }, {
                    uri: "http://alice2.nem.ninja"
                }, {
                    uri: "http://alice3.nem.ninja"
                }, {
                    uri: "http://alice4.nem.ninja"
                }, {
                    uri: "http://alice5.nem.ninja"
                }, {
                    uri: "http://alice6.nem.ninja"
                }, {
                    uri: "http://alice7.nem.ninja"
                }, {
                    uri: "http://localhost"
                }],
                mijin: [{
                    uri: ""
                }],
                apostilleAuditServer: "http://185.117.22.58:4567/verify",
                supernodes: "https://supernodes.nem.io/nodes",
                defaultPort: 7890,
                mijinPort: 7895,
                websocketPort: 7778,
                marketInfo: "https://poloniex.com/public",
                btcPrice: "https://blockchain.info/ticker"
            }
        },
        597: function(e, t, r) {
            "use strict";
            e.exports = {
                namespace: {
                    "-104": "TAMESP-ACEWH4-MKFMBC-VFERDP-OOP4FK-7MTDJE-YP35",
                    104: "NAMESP-ACEWH4-MKFMBC-VFERDP-OOP4FK-7MTBXD-PZZA",
                    96: "MAMESP-ACEWH4-MKFMBC-VFERDP-OOP4FK-7MTCZT-G5E7"
                },
                mosaic: {
                    "-104": "TBMOSA-ICOD4F-54EE5C-DMR23C-CBGOAM-2XSJBR-5OLC",
                    104: "NBMOSA-ICOD4F-54EE5C-DMR23C-CBGOAM-2XSIUX-6TRS",
                    96: "MBMOSA-ICOD4F-54EE5C-DMR23C-CBGOAM-2XSKYH-TOJD"
                },
                apostille: {
                    "-104": "TC7MCY-5AGJQX-ZQ4BN3-BOPNXU-VIGDJC-OHBPGU-M2GE",
                    104: "NCZSJH-LTIMES-ERVBVK-OW6US6-4YDZG2-PFGQCS-V23J",
                    96: "MCGDK2-J46BOD-GGKMPI-KCBGTB-BIWL6A-L5ZKLK-Q56A"
                }
            }
        },
        90: function(e, t, r) {
            "use strict";
            a(r(214));
            var n = a(r(595));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = Date.UTC(2015, 2, 29, 0, 6, 25, 0),
                o = function(e) {
                    return null !== e.match("^(0x|0X)?[a-fA-F0-9]+$")
                };
            e.exports = {
                needsSignature: function(e, t) {
                    if (e.transaction.signer === t.account.publicKey) return !1;
                    if (e.transaction.otherTrans.signer === t.account.publicKey) return !1;
                    for (var r = 0; r < e.transaction.signatures.length; r++)
                        if (e.transaction.signatures[r].signer === t.account.publicKey) return !1;
                    if (!t.meta.cosignatoryOf.length) return !1;
                    for (var n = 0; n < t.meta.cosignatoryOf.length; n++) {
                        if (t.meta.cosignatoryOf[n].publicKey === e.transaction.otherTrans.signer) return !0;
                        if (n === t.meta.cosignatoryOf.length - 1) return !1
                    }
                    return !0
                },
                haveTx: function(e, t) {
                    var r = null;
                    for (r = 0; t.length > r; r++)
                        if (t[r].meta.hash.data === e) return !0;
                    return !1
                },
                getTransactionIndex: function(e, t) {
                    var r = null;
                    for (r = 0; t.length > r; r++)
                        if (t[r].meta.hash.data === e) return r;
                    return 0
                },
                haveCosig: function(e, t) {
                    var r = null;
                    for (r = 0; t.length > r; r++)
                        if (t[r].cosignatoryAccount === e) return !0;
                    return !1
                },
                createNEMTimeStamp: function() {
                    return Math.floor(Date.now() / 1e3 - i / 1e3)
                },
                fixPrivateKey: function(e) {
                    return ("0000000000000000000000000000000000000000000000000000000000000000" + e.replace(/^00/, "")).slice(-64)
                },
                isPrivateKeyValid: function(e) {
                    return 64 !== e.length && 66 !== e.length ? (console.error("Private key length must be 64 or 66 characters !"), !1) : !!o(e) || (console.error("Private key must be hexadecimal only !"), !1)
                },
                isPublicKeyValid: function(e) {
                    return 64 !== e.length ? (console.error("Public key length must be 64 or 66 characters !"), !1) : !!o(e) || (console.error("Public key must be hexadecimal only !"), !1)
                },
                createTimeStamp: function() {
                    return new Date
                },
                getTimestampShort: function(e) {
                    var t = e.getDate(),
                        r = e.getMonth() + 1;
                    return t < 10 && (t = "0" + t), r < 10 && (r = "0" + r), e.getFullYear() + "-" + r + "-" + t
                },
                convertDateToString: function(e) {
                    return e.toDateString()
                },
                extendObj: function() {
                    for (var e = 1; e < arguments.length; e++)
                        for (var t in arguments[e]) arguments[e].hasOwnProperty(t) && (arguments[0][t] = arguments[e][t]);
                    return arguments[0]
                },
                isHexadecimal: o,
                searchMosaicDefinitionArray: function(e, t) {
                    for (var r = {}, a = 0; a < t.length; a++)
                        for (var i = 0; i < e.length; i++) e[i].mosaic.id.name === t[a] && (r[n.default.mosaicIdToName(e[i].mosaic.id)] = e[i].mosaic);
                    return r
                },
                grep: function(e, t) {
                    for (var r = [], n = e.length, a = 0; a < n; a++) {
                        var i = e[a];
                        t(i) && r.push(i)
                    }
                    return r
                },
                isTextAmountValid: function(e) {
                    var t = Number(e.toString().replace(/,/g, "."));
                    return !Number.isNaN(t) && Number.isFinite(t) && t >= 0
                },
                cleanTextAmount: function(e) {
                    return Number(e.toString().replace(/,/g, "."))
                },
                formatEndpoint: function(e) {
                    return e.host + ":" + e.port
                },
                isJSON: function(e) {
                    try {
                        return JSON.parse(e), !0
                    } catch (e) {
                        return !1
                    }
                }
            }
        }
    }
]);