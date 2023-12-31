/*! For license information please see vendors.c9f460a41c78f3271660.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [292], {
        5948: function(e, r, t) {
            "use strict";

            function n(e) {
                for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t])
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), n(t(5949)), n(t(9907)), n(t(7445)), n(t(9937)), n(t(9938)), n(t(7451)), n(t(9939));
            var o = t(6080),
                a = t(6254),
                i = t(7447),
                s = t(7448),
                u = t(7450),
                c = t(7449),
                l = t(6648),
                f = t(6256),
                p = t(6649),
                h = t(7446);
            r.libs = {
                base64: l,
                base58: o.default,
                converters: a.default,
                axlsign: i.default,
                blake2b: s,
                secureRandom: c.default,
                keccak256: u.keccak256
            }, r.utils = {
                concatUint8Arrays: f.concatUint8Arrays,
                convert: p.default,
                crypto: h.default
            }
        },
        5949: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e[e.SEND_OLD = 2] = "SEND_OLD", e[e.ISSUE = 3] = "ISSUE", e[e.TRANSFER = 4] = "TRANSFER", e[e.REISSUE = 5] = "REISSUE", e[e.BURN = 6] = "BURN", e[e.EXCHANGE = 7] = "EXCHANGE", e[e.LEASE = 8] = "LEASE", e[e.CANCEL_LEASING = 9] = "CANCEL_LEASING", e[e.CREATE_ALIAS = 10] = "CREATE_ALIAS", e[e.MASS_TRANSFER = 11] = "MASS_TRANSFER", e[e.DATA = 12] = "DATA", e[e.SET_SCRIPT = 13] = "SET_SCRIPT", e[e.SPONSORSHIP = 14] = "SPONSORSHIP", e[e.SET_ASSET_SCRIPT = 15] = "SET_ASSET_SCRIPT"
                }(r.TRANSACTION_TYPE_NUMBER || (r.TRANSACTION_TYPE_NUMBER = {})),
                function(e) {
                    e.ISSUE = "issue", e.TRANSFER = "transfer", e.REISSUE = "reissue", e.BURN = "burn", e.EXCHANGE = "exchange", e.LEASE = "lease", e.CANCEL_LEASING = "cancelLeasing", e.CREATE_ALIAS = "createAlias", e.MASS_TRANSFER = "massTransfer", e.DATA = "data", e.SET_SCRIPT = "setScript", e.SET_ASSET_SCRIPT = "setAssetScript", e.SPONSORSHIP = "sponsorship"
                }(r.TRANSACTION_TYPE || (r.TRANSACTION_TYPE = {})),
                function(e) {
                    e[e.ISSUE = 2] = "ISSUE", e[e.TRANSFER = 2] = "TRANSFER", e[e.REISSUE = 2] = "REISSUE", e[e.BURN = 2] = "BURN", e[e.EXCHANGE = 2] = "EXCHANGE", e[e.LEASE = 2] = "LEASE", e[e.CANCEL_LEASING = 2] = "CANCEL_LEASING", e[e.CREATE_ALIAS = 2] = "CREATE_ALIAS", e[e.MASS_TRANSFER = 1] = "MASS_TRANSFER", e[e.DATA = 1] = "DATA", e[e.SET_SCRIPT = 1] = "SET_SCRIPT", e[e.SET_ASSET_SCRIPT = 1] = "SET_ASSET_SCRIPT", e[e.SPONSORSHIP = 1] = "SPONSORSHIP"
                }(r.TRANSACTION_TYPE_VERSION || (r.TRANSACTION_TYPE_VERSION = {})), r.ORDER_VERSION = 2,
                function(e) {
                    e[e.INTEGER = 0] = "INTEGER", e[e.BOOLEAN = 1] = "BOOLEAN", e[e.BINARY = 2] = "BINARY", e[e.STRING = 3] = "STRING"
                }(r.DATA_TRANSACTION_FIELD_TYPES || (r.DATA_TRANSACTION_FIELD_TYPES = {})), r.WAVES_ID = "WAVES", r.WAVES_BLOCKCHAIN_ID = "", r.MAINNET_BYTE = "W".charCodeAt(0), r.TESTNET_BYTE = "T".charCodeAt(0), r.ADDRESS_VERSION = 1, r.ALIAS_VERSION = 2, r.SET_SCRIPT_LANG_VERSION = 1, r.TRANSFER_ATTACHMENT_BYTE_LIMIT = 140, r.DATA_TX_SIZE_WITHOUT_ENTRIES = 52, r.DATA_ENTRIES_BYTE_LIMIT = 143360 - r.DATA_TX_SIZE_WITHOUT_ENTRIES, r.INITIAL_NONCE = 0, r.PRIVATE_KEY_LENGTH = 32, r.PUBLIC_KEY_LENGTH = 32, r.STUB_NAME = "reservedName"
        },
        6080: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var n = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
                o = n.split("").reduce((function(e, r, t) {
                    return e[r] = t, e
                }), {});
            r.default = {
                encode: function(e) {
                    if (!e.length) return "";
                    for (var r = [0], t = 0; t < e.length; t++) {
                        for (var o = 0; o < r.length; o++) r[o] <<= 8;
                        r[0] += e[t];
                        for (var a = 0, i = 0; i < r.length; i++) r[i] += a, a = r[i] / 58 | 0, r[i] %= 58;
                        for (; a;) r.push(a % 58), a = a / 58 | 0
                    }
                    for (t = 0; 0 === e[t] && t < e.length - 1; t++) r.push(0);
                    return r.reverse().map((function(e) {
                        return n[e]
                    })).join("")
                },
                decode: function(e) {
                    if (!e.length) return new Uint8Array(0);
                    for (var r = [0], t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (!(n in o)) throw 'There is no character "' + n + '" in the Base58 sequence!';
                        for (var a = 0; a < r.length; a++) r[a] *= 58;
                        r[0] += o[n];
                        var i = 0;
                        for (a = 0; a < r.length; a++) r[a] += i, i = r[a] >> 8, r[a] &= 255;
                        for (; i;) r.push(255 & i), i >>= 8
                    }
                    for (t = 0;
                        "1" === e[t] && t < e.length - 1; t++) r.push(0);
                    return new Uint8Array(r.reverse())
                }
            }
        },
        6254: function(e, r, t) {
            var n = t(7442),
                o = t(6646).BigNumber,
                a = function() {
                    var e, r = {},
                        t = [];
                    for (e = 0; e <= 9; ++e) {
                        var i = e.toString();
                        r[i] = e, t.push(i)
                    }
                    for (e = 10; e <= 15; ++e) {
                        var s = String.fromCharCode("a".charCodeAt(0) + e - 10),
                            u = String.fromCharCode("A".charCodeAt(0) + e - 10);
                        r[s] = e, r[u] = e, t.push(s)
                    }
                    return {
                        byteArrayToHexString: function(e) {
                            for (var r = "", n = 0; n < e.length; ++n) e[n] < 0 && (e[n] += 256), r += t[e[n] >> 4] + t[15 & e[n]];
                            return r
                        },
                        stringToByteArray: function(e) {
                            for (var r = [], t = 0; t < e.length; t++) {
                                var n = e.charCodeAt(t);
                                n < 128 ? r.push(n) : n < 2048 ? r.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? r.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (t++, n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(t)), r.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
                            }
                            return r
                        },
                        hexStringToByteArray: function(e) {
                            var t = [],
                                n = 0;
                            for (0 != e.length % 2 && (t.push(r[e.charAt(0)]), ++n); n < e.length - 1; n += 2) t.push((r[e.charAt(n)] << 4) + r[e.charAt(n + 1)]);
                            return t
                        },
                        stringToHexString: function(e) {
                            return this.byteArrayToHexString(this.stringToByteArray(e))
                        },
                        hexStringToString: function(e) {
                            return this.byteArrayToString(this.hexStringToByteArray(e))
                        },
                        checkBytesToIntInput: function(e, r, t) {
                            var n = t || 0;
                            if (n < 0) throw new Error("Start index should not be negative");
                            if (e.length < n + r) throw new Error("Need at least " + r + " bytes to convert to an integer");
                            return n
                        },
                        byteArrayToSignedShort: function(e, r) {
                            var t = this.checkBytesToIntInput(e, 2, r),
                                n = e[t];
                            return n += e[t + 1] << 8
                        },
                        byteArrayToSignedInt32: function(e, r) {
                            var t = this.checkBytesToIntInput(e, 4, r),
                                n = e[t];
                            return n += e[t + 1] << 8, n += e[t + 2] << 16, n += e[t + 3] << 24
                        },
                        byteArrayToBigInteger: function(e) {
                            for (var r, t = new o("256", 10), n = new o("0", 10), a = e.length - 1; a >= 0; a--) {
                                var i = e[a];
                                r = new o(i).times(t.pow(e.length - 1 - a)), n = n.plus(r)
                            }
                            return n
                        },
                        byteArrayToSignBigInteger: function(e) {
                            for (var r, t = e[0] >= 128 && 8 === e.length, n = new o("0", 10), a = e.length - 1; a >= 0; a--) {
                                var i = e[a];
                                t && (i = 255 & ~i), r = new o(i).times(new o("256", 10).pow(e.length - 1 - a)), n = n.plus(r)
                            }
                            return t && (n = n.plus(1), n = new o(0).minus(n)), n
                        },
                        byteArrayToWordArray: function(e) {
                            for (var r = 0, t = 0, n = 0, o = e.length, a = new Uint32Array((o / 4 | 0) + (o % 4 == 0 ? 0 : 1)); r < o - o % 4;) a[t++] = e[r++] << 24 | e[r++] << 16 | e[r++] << 8 | e[r++];
                            o % 4 != 0 && (n = e[r++] << 24, o % 4 > 1 && (n |= e[r++] << 16), o % 4 > 2 && (n |= e[r++] << 8), a[t] = n);
                            var i = new Object;
                            return i.sigBytes = o, i.words = a, i
                        },
                        wordArrayToByteArray: function(e) {
                            return a.wordArrayToByteArrayImpl(e, !0)
                        },
                        wordArrayToByteArrayImpl: function(e, r) {
                            var t = e.words.length;
                            if (0 == t) return new Array(0);
                            var n, o, a = new Array(e.sigBytes),
                                i = 0;
                            for (o = 0; o < t - 1; o++) n = e.words[o], a[i++] = r ? n >> 24 : n >> 24 & 255, a[i++] = n >> 16 & 255, a[i++] = n >> 8 & 255, a[i++] = 255 & n;
                            return n = e.words[t - 1], a[i++] = r ? n >> 24 : n >> 24 & 255, e.sigBytes % 4 == 0 && (a[i++] = n >> 16 & 255, a[i++] = n >> 8 & 255, a[i++] = 255 & n), e.sigBytes % 4 > 1 && (a[i++] = n >> 16 & 255), e.sigBytes % 4 > 2 && (a[i++] = n >> 8 & 255), a
                        },
                        byteArrayToString: function(e, r, t) {
                            if (0 == t) return "";
                            if (r && t) {
                                var n = this.checkBytesToIntInput(e, parseInt(t, 10), parseInt(r, 10));
                                e = e.slice(r, r + t)
                            }
                            var o = [1, 1, 1, 1, 2, 2, 3, 0],
                                a = e.length,
                                i = "";
                            for (n = 0; n < a;) {
                                var s = e[n++];
                                if (128 & s) {
                                    var u = o[s >> 3 & 7];
                                    if (!(64 & s) || !u || n + u > a) return null;
                                    for (s &= 63 >> u; u > 0; u -= 1) {
                                        var c = e[n++];
                                        if (128 != (192 & c)) return null;
                                        s = s << 6 | 63 & c
                                    }
                                }
                                i += String.fromCharCode(s)
                            }
                            return i
                        },
                        byteArrayToShortArray: function(e) {
                            var r, t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            for (r = 0; r < 16; r++) t[r] = e[2 * r] | e[2 * r + 1] << 8;
                            return t
                        },
                        shortArrayToByteArray: function(e) {
                            var r, t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            for (r = 0; r < 16; r++) t[2 * r] = 255 & e[r], t[2 * r + 1] = e[r] >> 8;
                            return t
                        },
                        shortArrayToHexString: function(e) {
                            for (var r = "", n = 0; n < e.length; n++) r += t[e[n] >> 4 & 15] + t[15 & e[n]] + t[e[n] >> 12 & 15] + t[e[n] >> 8 & 15];
                            return r
                        },
                        intToBytes_: function(e, r, t, n) {
                            var o = Math.floor(t / 2),
                                a = -1 * (o + 1);
                            if (e != Math.floor(e) || e < a || e > t) throw new Error(e + " is not a " + 8 * r + " bit integer");
                            var i, s = [],
                                u = e >= 0 && e <= o ? 0 : e > o && e <= t ? 1 : 2;
                            2 == u && (e = -1 * e - 1);
                            for (var c = 0; c < r; c++) i = 2 == u ? 255 - e % 256 : e % 256, n ? s.unshift(i) : s.push(i), 1 == u ? e = Math.floor(e / 256) : e >>= 8;
                            return s
                        },
                        int32ToBytes: function(e, r) {
                            return a.intToBytes_(e, 4, 4294967295, r)
                        },
                        int16ToBytes: function(e, r) {
                            return a.intToBytes_(e, 2, 65535, r)
                        },
                        wordArrayToByteArrayEx: function(e) {
                            for (var r = e.words, t = e.sigBytes, n = new Uint8Array(t), o = 0; o < t; o++) {
                                var a = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                n[o] = a
                            }
                            return n
                        },
                        byteArrayToWordArrayEx: function(e) {
                            for (var r = e.length, t = [], o = 0; o < r; o++) t[o >>> 2] |= (255 & e[o]) << 24 - o % 4 * 8;
                            return n.lib.WordArray.create(t, r)
                        }
                    }
                }();
            r.default = a
        },
        6256: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.concatUint8Arrays = function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                if (e.length < 2) throw new Error("Two or more Uint8Array are expected");
                if (!e.every((function(e) {
                        return e instanceof Uint8Array
                    }))) throw new Error("One of arguments is not a Uint8Array");
                for (var t = e.length, n = e.reduce((function(e, r) {
                        return e + r.length
                    }), 0), o = new Uint8Array(n), a = 0, i = 0; i < t; i++) o.set(e[i], a), a += e[i].length;
                return o
            }
        },
        6649: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var n = t(6254),
                o = t(6646);

            function a(e, r) {
                for (var t = e.toString(2).split(".")[0], n = r.toString(2).split(".")[0], o = Math.min(t.length, n.length), a = t.slice(t.length - o), i = n.slice(n.length - o), s = new Array(o), u = o - 1; u >= 0; u--) s[u] = "1" === a[u] && "1" === i[u] ? "1" : "0";
                return parseInt(s.join(""), 2)
            }
            r.default = {
                booleanToBytes: function(e) {
                    if ("boolean" != typeof e) throw new Error("Boolean input is expected");
                    return e ? [1] : [0]
                },
                bytesToBoolean: function(e) {
                    if (1 !== e.length) throw new Error("Wrong bytes length");
                    return !!e[0]
                },
                shortToByteArray: function(e) {
                    if ("number" != typeof e) throw new Error("Numeric input is expected");
                    return n.default.int16ToBytes(e, !0)
                },
                bytesToByteArrayWithSize: function(e) {
                    if (!(e instanceof Array || e instanceof Uint8Array)) throw new Error("Byte array or Uint8Array input is expected");
                    if (e instanceof Array && !e.every((function(e) {
                            return "number" == typeof e
                        }))) throw new Error("Byte array contains non-numeric elements");
                    return e instanceof Array || (e = Array.prototype.slice.call(e)), n.default.int16ToBytes(e.length, !0).concat(e)
                },
                longToByteArray: function(e, r) {
                    if ("number" != typeof e) throw new Error("Numeric input is expected");
                    for (var t = new Array(r), n = r - 1; n >= 0; n--) t[n] = 255 & e, e /= 256;
                    return t
                },
                signLongToByteArray: function(e) {
                    if ("number" != typeof e) throw new Error("Numeric input is expected");
                    for (var r = [0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < r.length; t++) {
                        var n = 255 & e;
                        r[t] = n, e = (e - n) / 256
                    }
                    return r.reverse()
                },
                bigNumberToByteArray: function(e, r) {
                    if (!(e instanceof o.BigNumber)) throw new Error("BigNumber input is expected");
                    for (var t = a.bind(null, new o.BigNumber(255)), n = [], i = r - 1; i >= 0; i--) n[i] = t(e), e = e.div(256);
                    return n
                },
                signBigNumberToByteArray: function(e) {
                    if (!(e instanceof o.BigNumber)) throw new Error("BigNumber input is expected");
                    var r = e.lt(new o.BigNumber(0)),
                        t = a.bind(null, new o.BigNumber(255));
                    r && (e = e.plus(1, 10));
                    for (var n = new Array(8), i = 7; i >= 0; i--) n[i] = t(e), r && (n[i] = 255 & ~n[i]), e = e.div(256);
                    return n
                },
                stringToByteArray: function(e) {
                    if ("number" == typeof e && (e = String(e)), "string" != typeof e) throw new Error("String input is expected");
                    return n.default.stringToByteArray(e)
                },
                stringToByteArrayWithSize: function(e) {
                    if ("number" == typeof e && (e = String(e)), "string" != typeof e) throw new Error("String input is expected");
                    var r = n.default.stringToByteArray(e);
                    return n.default.int16ToBytes(r.length, !0).concat(r)
                }
            }
        },
        7445: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var n = {
                    networkByte: t(5948).MAINNET_BYTE,
                    logLevel: "warning",
                    minimalSeedLength: 15
                },
                o = function() {
                    function e() {
                        this.props = Object.assign(Object.create(null), n)
                    }
                    return e.prototype.getNetworkByte = function() {
                        return this.props.networkByte
                    }, e.prototype.getLogLevel = function() {
                        return this.props.logLevel
                    }, e.prototype.set = function(e) {
                        Object.assign(this.props, e)
                    }, e.prototype.get = function(e) {
                        return this.props[e]
                    }, e.prototype.clear = function() {
                        this.props = Object.assign(Object.create(null), n)
                    }, e
                }();
            r.config = new o
        },
        7446: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var n = t(7442),
                o = t(7447),
                a = t(6080),
                i = t(7448),
                s = t(6254),
                u = t(7449),
                c = t(7450),
                l = t(6256),
                f = t(5948),
                p = t(5949);

            function h(e) {
                var r;
                r = "string" == typeof e ? s.default.stringToByteArray(e) : e;
                var t = s.default.byteArrayToWordArrayEx(Uint8Array.from(r)),
                    o = n.SHA256(t);
                return s.default.wordArrayToByteArrayEx(o)
            }

            function y(e) {
                return i.blake2b(e, null, 32)
            }

            function d(e) {
                return function(e) {
                    return c.keccak256.array(e)
                }(y(e))
            }

            function m(e, r) {
                for (void 0 === r && (r = 5e3); r--;) e = s.default.byteArrayToHexString(h(e));
                return e
            }
            r.default = {
                buildTransactionSignature: function(e, r) {
                    if (!(e && e instanceof Uint8Array)) throw new Error("Missing or invalid data");
                    if (!r || "string" != typeof r) throw new Error("Missing or invalid private key");
                    var t = a.default.decode(r);
                    if (t.length !== p.PRIVATE_KEY_LENGTH) throw new Error("Invalid public key");
                    var n = o.default.sign(t, e, u.default.randomUint8Array(64));
                    return a.default.encode(n)
                },
                isValidSignature: function(e, r, t) {
                    if (!(e && e instanceof Uint8Array)) throw new Error("Missing or invalid data");
                    if (!r || "string" != typeof r) throw new Error("Missing or invalid signature");
                    if (!t || "string" != typeof t) throw new Error("Missing or invalid public key");
                    var n = a.default.decode(r),
                        i = a.default.decode(t);
                    if (i.length !== p.PUBLIC_KEY_LENGTH) throw new Error("Invalid public key");
                    return o.default.verify(i, e, n)
                },
                buildTransactionId: function(e) {
                    if (!(e && e instanceof Uint8Array)) throw new Error("Missing or invalid data");
                    var r = y(e);
                    return a.default.encode(r)
                },
                buildKeyPair: function(e) {
                    if (!e || "string" != typeof e) throw new Error("Missing or invalid seed phrase");
                    var r = function(e) {
                            var r = new Uint8Array(s.default.int32ToBytes(p.INITIAL_NONCE, !0));
                            return h(d(l.concatUint8Arrays(r, e)))
                        }(Uint8Array.from(s.default.stringToByteArray(e))),
                        t = o.default.generateKeyPair(r);
                    return {
                        privateKey: t.private,
                        publicKey: t.public
                    }
                },
                isValidAddress: function(e) {
                    if (!e || "string" != typeof e) throw new Error("Missing or invalid address");
                    var r = a.default.decode(e);
                    if (1 !== r[0] || r[1] !== f.config.getNetworkByte()) return !1;
                    for (var t = r.slice(0, 22), n = r.slice(22, 26), o = d(t).slice(0, 4), i = 0; i < 4; i++)
                        if (n[i] !== o[i]) return !1;
                    return !0
                },
                buildRawAddress: function(e) {
                    if (!(e && e.length === p.PUBLIC_KEY_LENGTH && e instanceof Uint8Array)) throw new Error("Missing or invalid public key");
                    var r = Uint8Array.from([p.ADDRESS_VERSION, f.config.getNetworkByte()]),
                        t = Uint8Array.from(d(e).slice(0, 20)),
                        n = l.concatUint8Arrays(r, t),
                        o = Uint8Array.from(d(n).slice(0, 4));
                    return a.default.encode(l.concatUint8Arrays(n, o))
                },
                encryptSeed: function(e, r, t) {
                    if (!e || "string" != typeof e) throw new Error("Seed is required");
                    if (!r || "string" != typeof r) throw new Error("Password is required");
                    return r = m(r, t), n.AES.encrypt(e, r).toString()
                },
                decryptSeed: function(e, r, t) {
                    if (!e || "string" != typeof e) throw new Error("Encrypted seed is required");
                    if (!r || "string" != typeof r) throw new Error("Password is required");
                    r = m(r, t);
                    var o = n.AES.decrypt(e, r);
                    return s.default.hexStringToString(o.toString())
                },
                generateRandomUint32Array: function(e) {
                    if (!e || e < 0) throw new Error("Missing or invalid array length");
                    for (var r = u.default.randomUint8Array(e), t = u.default.randomUint8Array(e), n = new Uint32Array(e), o = 0; o < e; o++) {
                        var a = s.default.byteArrayToHexString(h("" + r[o] + t[o])),
                            i = parseInt(a.slice(0, 13), 16);
                        n.set([i], o)
                    }
                    return n
                }
            }
        },
        7447: function(e, r, t) {
            "use strict";
            r.__esModule = !0;
            var n = Object.create(null),
                o = function(e) {
                    var r, t = new Float64Array(16);
                    if (e)
                        for (r = 0; r < e.length; r++) t[r] = e[r];
                    return t
                },
                a = (new Uint8Array(16), new Uint8Array(32));
            a[0] = 9;
            var i = o(),
                s = o([1]),
                u = o([56129, 1]),
                c = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                l = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                f = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                p = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                h = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function y(e, r, t, n) {
                e[r] = t >> 24 & 255, e[r + 1] = t >> 16 & 255, e[r + 2] = t >> 8 & 255, e[r + 3] = 255 & t, e[r + 4] = n >> 24 & 255, e[r + 5] = n >> 16 & 255, e[r + 6] = n >> 8 & 255, e[r + 7] = 255 & n
            }

            function d(e, r, t, n) {
                return function(e, r, t, n, o) {
                    var a, i = 0;
                    for (a = 0; a < o; a++) i |= e[r + a] ^ t[n + a];
                    return (1 & i - 1 >>> 8) - 1
                }(e, r, t, n, 32)
            }

            function m(e, r) {
                for (var t = 0; t < 16; t++) e[t] = 0 | r[t]
            }

            function g(e) {
                var r, t, n = 1;
                for (r = 0; r < 16; r++) t = e[r] + n + 65535, n = Math.floor(t / 65536), e[r] = t - 65536 * n;
                e[0] += n - 1 + 37 * (n - 1)
            }

            function w(e, r, t) {
                for (var n, o = ~(t - 1), a = 0; a < 16; a++) n = o & (e[a] ^ r[a]), e[a] ^= n, r[a] ^= n
            }

            function A(e, r) {
                var t, n, a, i = o(),
                    s = o();
                for (t = 0; t < 16; t++) s[t] = r[t];
                for (g(s), g(s), g(s), n = 0; n < 2; n++) {
                    for (i[0] = s[0] - 65517, t = 1; t < 15; t++) i[t] = s[t] - 65535 - (i[t - 1] >> 16 & 1), i[t - 1] &= 65535;
                    i[15] = s[15] - 32767 - (i[14] >> 16 & 1), a = i[15] >> 16 & 1, i[14] &= 65535, w(s, i, 1 - a)
                }
                for (t = 0; t < 16; t++) e[2 * t] = 255 & s[t], e[2 * t + 1] = s[t] >> 8
            }

            function b(e, r) {
                var t = new Uint8Array(32),
                    n = new Uint8Array(32);
                return A(t, e), A(n, r), d(t, 0, n, 0)
            }

            function v(e) {
                var r = new Uint8Array(32);
                return A(r, e), 1 & r[0]
            }

            function E(e, r) {
                for (var t = 0; t < 16; t++) e[t] = r[2 * t] + (r[2 * t + 1] << 8);
                e[15] &= 32767
            }

            function S(e, r, t) {
                for (var n = 0; n < 16; n++) e[n] = r[n] + t[n]
            }

            function T(e, r, t) {
                for (var n = 0; n < 16; n++) e[n] = r[n] - t[n]
            }

            function _(e, r, t) {
                var n, o, a = 0,
                    i = 0,
                    s = 0,
                    u = 0,
                    c = 0,
                    l = 0,
                    f = 0,
                    p = 0,
                    h = 0,
                    y = 0,
                    d = 0,
                    m = 0,
                    g = 0,
                    w = 0,
                    A = 0,
                    b = 0,
                    v = 0,
                    E = 0,
                    S = 0,
                    T = 0,
                    _ = 0,
                    I = 0,
                    B = 0,
                    N = 0,
                    R = 0,
                    U = 0,
                    k = 0,
                    P = 0,
                    M = 0,
                    C = 0,
                    O = 0,
                    x = t[0],
                    L = t[1],
                    j = t[2],
                    D = t[3],
                    V = t[4],
                    K = t[5],
                    F = t[6],
                    H = t[7],
                    G = t[8],
                    z = t[9],
                    Y = t[10],
                    X = t[11],
                    q = t[12],
                    W = t[13],
                    J = t[14],
                    Z = t[15];
                a += (n = r[0]) * x, i += n * L, s += n * j, u += n * D, c += n * V, l += n * K, f += n * F, p += n * H, h += n * G, y += n * z, d += n * Y, m += n * X, g += n * q, w += n * W, A += n * J, b += n * Z, i += (n = r[1]) * x, s += n * L, u += n * j, c += n * D, l += n * V, f += n * K, p += n * F, h += n * H, y += n * G, d += n * z, m += n * Y, g += n * X, w += n * q, A += n * W, b += n * J, v += n * Z, s += (n = r[2]) * x, u += n * L, c += n * j, l += n * D, f += n * V, p += n * K, h += n * F, y += n * H, d += n * G, m += n * z, g += n * Y, w += n * X, A += n * q, b += n * W, v += n * J, E += n * Z, u += (n = r[3]) * x, c += n * L, l += n * j, f += n * D, p += n * V, h += n * K, y += n * F, d += n * H, m += n * G, g += n * z, w += n * Y, A += n * X, b += n * q, v += n * W, E += n * J, S += n * Z, c += (n = r[4]) * x, l += n * L, f += n * j, p += n * D, h += n * V, y += n * K, d += n * F, m += n * H, g += n * G, w += n * z, A += n * Y, b += n * X, v += n * q, E += n * W, S += n * J, T += n * Z, l += (n = r[5]) * x, f += n * L, p += n * j, h += n * D, y += n * V, d += n * K, m += n * F, g += n * H, w += n * G, A += n * z, b += n * Y, v += n * X, E += n * q, S += n * W, T += n * J, _ += n * Z, f += (n = r[6]) * x, p += n * L, h += n * j, y += n * D, d += n * V, m += n * K, g += n * F, w += n * H, A += n * G, b += n * z, v += n * Y, E += n * X, S += n * q, T += n * W, _ += n * J, I += n * Z, p += (n = r[7]) * x, h += n * L, y += n * j, d += n * D, m += n * V, g += n * K, w += n * F, A += n * H, b += n * G, v += n * z, E += n * Y, S += n * X, T += n * q, _ += n * W, I += n * J, B += n * Z, h += (n = r[8]) * x, y += n * L, d += n * j, m += n * D, g += n * V, w += n * K, A += n * F, b += n * H, v += n * G, E += n * z, S += n * Y, T += n * X, _ += n * q, I += n * W, B += n * J, N += n * Z, y += (n = r[9]) * x, d += n * L, m += n * j, g += n * D, w += n * V, A += n * K, b += n * F, v += n * H, E += n * G, S += n * z, T += n * Y, _ += n * X, I += n * q, B += n * W, N += n * J, R += n * Z, d += (n = r[10]) * x, m += n * L, g += n * j, w += n * D, A += n * V, b += n * K, v += n * F, E += n * H, S += n * G, T += n * z, _ += n * Y, I += n * X, B += n * q, N += n * W, R += n * J, U += n * Z, m += (n = r[11]) * x, g += n * L, w += n * j, A += n * D, b += n * V, v += n * K, E += n * F, S += n * H, T += n * G, _ += n * z, I += n * Y, B += n * X, N += n * q, R += n * W, U += n * J, k += n * Z, g += (n = r[12]) * x, w += n * L, A += n * j, b += n * D, v += n * V, E += n * K, S += n * F, T += n * H, _ += n * G, I += n * z, B += n * Y, N += n * X, R += n * q, U += n * W, k += n * J, P += n * Z, w += (n = r[13]) * x, A += n * L, b += n * j, v += n * D, E += n * V, S += n * K, T += n * F, _ += n * H, I += n * G, B += n * z, N += n * Y, R += n * X, U += n * q, k += n * W, P += n * J, M += n * Z, A += (n = r[14]) * x, b += n * L, v += n * j, E += n * D, S += n * V, T += n * K, _ += n * F, I += n * H, B += n * G, N += n * z, R += n * Y, U += n * X, k += n * q, P += n * W, M += n * J, C += n * Z, b += (n = r[15]) * x, i += 38 * (E += n * j), s += 38 * (S += n * D), u += 38 * (T += n * V), c += 38 * (_ += n * K), l += 38 * (I += n * F), f += 38 * (B += n * H), p += 38 * (N += n * G), h += 38 * (R += n * z), y += 38 * (U += n * Y), d += 38 * (k += n * X), m += 38 * (P += n * q), g += 38 * (M += n * W), w += 38 * (C += n * J), A += 38 * (O += n * Z), a = (n = (a += 38 * (v += n * L)) + (o = 1) + 65535) - 65536 * (o = Math.floor(n / 65536)), i = (n = i + o + 65535) - 65536 * (o = Math.floor(n / 65536)), s = (n = s + o + 65535) - 65536 * (o = Math.floor(n / 65536)), u = (n = u + o + 65535) - 65536 * (o = Math.floor(n / 65536)), c = (n = c + o + 65535) - 65536 * (o = Math.floor(n / 65536)), l = (n = l + o + 65535) - 65536 * (o = Math.floor(n / 65536)), f = (n = f + o + 65535) - 65536 * (o = Math.floor(n / 65536)), p = (n = p + o + 65535) - 65536 * (o = Math.floor(n / 65536)), h = (n = h + o + 65535) - 65536 * (o = Math.floor(n / 65536)), y = (n = y + o + 65535) - 65536 * (o = Math.floor(n / 65536)), d = (n = d + o + 65535) - 65536 * (o = Math.floor(n / 65536)), m = (n = m + o + 65535) - 65536 * (o = Math.floor(n / 65536)), g = (n = g + o + 65535) - 65536 * (o = Math.floor(n / 65536)), w = (n = w + o + 65535) - 65536 * (o = Math.floor(n / 65536)), A = (n = A + o + 65535) - 65536 * (o = Math.floor(n / 65536)), b = (n = b + o + 65535) - 65536 * (o = Math.floor(n / 65536)), a = (n = (a += o - 1 + 37 * (o - 1)) + (o = 1) + 65535) - 65536 * (o = Math.floor(n / 65536)), i = (n = i + o + 65535) - 65536 * (o = Math.floor(n / 65536)), s = (n = s + o + 65535) - 65536 * (o = Math.floor(n / 65536)), u = (n = u + o + 65535) - 65536 * (o = Math.floor(n / 65536)), c = (n = c + o + 65535) - 65536 * (o = Math.floor(n / 65536)), l = (n = l + o + 65535) - 65536 * (o = Math.floor(n / 65536)), f = (n = f + o + 65535) - 65536 * (o = Math.floor(n / 65536)), p = (n = p + o + 65535) - 65536 * (o = Math.floor(n / 65536)), h = (n = h + o + 65535) - 65536 * (o = Math.floor(n / 65536)), y = (n = y + o + 65535) - 65536 * (o = Math.floor(n / 65536)), d = (n = d + o + 65535) - 65536 * (o = Math.floor(n / 65536)), m = (n = m + o + 65535) - 65536 * (o = Math.floor(n / 65536)), g = (n = g + o + 65535) - 65536 * (o = Math.floor(n / 65536)), w = (n = w + o + 65535) - 65536 * (o = Math.floor(n / 65536)), A = (n = A + o + 65535) - 65536 * (o = Math.floor(n / 65536)), b = (n = b + o + 65535) - 65536 * (o = Math.floor(n / 65536)), a += o - 1 + 37 * (o - 1), e[0] = a, e[1] = i, e[2] = s, e[3] = u, e[4] = c, e[5] = l, e[6] = f, e[7] = p, e[8] = h, e[9] = y, e[10] = d, e[11] = m, e[12] = g, e[13] = w, e[14] = A, e[15] = b
            }

            function I(e, r) {
                _(e, r, r)
            }

            function B(e, r) {
                var t, n = o();
                for (t = 0; t < 16; t++) n[t] = r[t];
                for (t = 253; t >= 0; t--) I(n, n), 2 !== t && 4 !== t && _(n, n, r);
                for (t = 0; t < 16; t++) e[t] = n[t]
            }

            function N(e, r, t) {
                var n, a, i = new Uint8Array(32),
                    s = new Float64Array(80),
                    c = o(),
                    l = o(),
                    f = o(),
                    p = o(),
                    h = o(),
                    y = o();
                for (a = 0; a < 31; a++) i[a] = r[a];
                for (i[31] = 127 & r[31] | 64, i[0] &= 248, E(s, t), a = 0; a < 16; a++) l[a] = s[a], p[a] = c[a] = f[a] = 0;
                for (c[0] = p[0] = 1, a = 254; a >= 0; --a) w(c, l, n = i[a >>> 3] >>> (7 & a) & 1), w(f, p, n), S(h, c, f), T(c, c, f), S(f, l, p), T(l, l, p), I(p, h), I(y, c), _(c, f, c), _(f, l, h), S(h, c, f), T(c, c, f), I(l, c), T(f, p, y), _(c, f, u), S(c, c, p), _(f, f, c), _(c, p, y), _(p, l, s), I(l, h), w(c, l, n), w(f, p, n);
                for (a = 0; a < 16; a++) s[a + 16] = c[a], s[a + 32] = f[a], s[a + 48] = l[a], s[a + 64] = p[a];
                var d = s.subarray(32),
                    m = s.subarray(16);
                return B(d, d), _(m, m, d), A(e, m), 0
            }
            var R = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function U(e, r, t, n) {
                for (var o, a, i, s, u, c, l, f, p, h, y, d, m, g, w, A, b, v, E, S, T, _, I, B, N, U, k = new Int32Array(16), P = new Int32Array(16), M = e[0], C = e[1], O = e[2], x = e[3], L = e[4], j = e[5], D = e[6], V = e[7], K = r[0], F = r[1], H = r[2], G = r[3], z = r[4], Y = r[5], X = r[6], q = r[7], W = 0; n >= 128;) {
                    for (E = 0; E < 16; E++) S = 8 * E + W, k[E] = t[S + 0] << 24 | t[S + 1] << 16 | t[S + 2] << 8 | t[S + 3], P[E] = t[S + 4] << 24 | t[S + 5] << 16 | t[S + 6] << 8 | t[S + 7];
                    for (E = 0; E < 80; E++)
                        if (o = M, a = C, i = O, s = x, u = L, c = j, l = D, V, p = K, h = F, y = H, d = G, m = z, g = Y, w = X, q, I = 65535 & (_ = q), B = _ >>> 16, N = 65535 & (T = V), U = T >>> 16, I += 65535 & (_ = (z >>> 14 | L << 18) ^ (z >>> 18 | L << 14) ^ (L >>> 9 | z << 23)), B += _ >>> 16, N += 65535 & (T = (L >>> 14 | z << 18) ^ (L >>> 18 | z << 14) ^ (z >>> 9 | L << 23)), U += T >>> 16, I += 65535 & (_ = z & Y ^ ~z & X), B += _ >>> 16, N += 65535 & (T = L & j ^ ~L & D), U += T >>> 16, I += 65535 & (_ = R[2 * E + 1]), B += _ >>> 16, N += 65535 & (T = R[2 * E]), U += T >>> 16, T = k[E % 16], B += (_ = P[E % 16]) >>> 16, N += 65535 & T, U += T >>> 16, N += (B += (I += 65535 & _) >>> 16) >>> 16, I = 65535 & (_ = v = 65535 & I | B << 16), B = _ >>> 16, N = 65535 & (T = b = 65535 & N | (U += N >>> 16) << 16), U = T >>> 16, I += 65535 & (_ = (K >>> 28 | M << 4) ^ (M >>> 2 | K << 30) ^ (M >>> 7 | K << 25)), B += _ >>> 16, N += 65535 & (T = (M >>> 28 | K << 4) ^ (K >>> 2 | M << 30) ^ (K >>> 7 | M << 25)), U += T >>> 16, B += (_ = K & F ^ K & H ^ F & H) >>> 16, N += 65535 & (T = M & C ^ M & O ^ C & O), U += T >>> 16, f = 65535 & (N += (B += (I += 65535 & _) >>> 16) >>> 16) | (U += N >>> 16) << 16, A = 65535 & I | B << 16, I = 65535 & (_ = d), B = _ >>> 16, N = 65535 & (T = s), U = T >>> 16, B += (_ = v) >>> 16, N += 65535 & (T = b), U += T >>> 16, C = o, O = a, x = i, L = s = 65535 & (N += (B += (I += 65535 & _) >>> 16) >>> 16) | (U += N >>> 16) << 16, j = u, D = c, V = l, M = f, F = p, H = h, G = y, z = d = 65535 & I | B << 16, Y = m, X = g, q = w, K = A, E % 16 == 15)
                            for (S = 0; S < 16; S++) T = k[S], I = 65535 & (_ = P[S]), B = _ >>> 16, N = 65535 & T, U = T >>> 16, T = k[(S + 9) % 16], I += 65535 & (_ = P[(S + 9) % 16]), B += _ >>> 16, N += 65535 & T, U += T >>> 16, b = k[(S + 1) % 16], I += 65535 & (_ = ((v = P[(S + 1) % 16]) >>> 1 | b << 31) ^ (v >>> 8 | b << 24) ^ (v >>> 7 | b << 25)), B += _ >>> 16, N += 65535 & (T = (b >>> 1 | v << 31) ^ (b >>> 8 | v << 24) ^ b >>> 7), U += T >>> 16, b = k[(S + 14) % 16], B += (_ = ((v = P[(S + 14) % 16]) >>> 19 | b << 13) ^ (b >>> 29 | v << 3) ^ (v >>> 6 | b << 26)) >>> 16, N += 65535 & (T = (b >>> 19 | v << 13) ^ (v >>> 29 | b << 3) ^ b >>> 6), U += T >>> 16, U += (N += (B += (I += 65535 & _) >>> 16) >>> 16) >>> 16, k[S] = 65535 & N | U << 16, P[S] = 65535 & I | B << 16;
                    I = 65535 & (_ = K), B = _ >>> 16, N = 65535 & (T = M), U = T >>> 16, T = e[0], B += (_ = r[0]) >>> 16, N += 65535 & T, U += T >>> 16, U += (N += (B += (I += 65535 & _) >>> 16) >>> 16) >>> 16, e[0] = M = 65535 & N | U << 16, r[0] = K = 65535 & I | B << 16, I = 65535 & (_ = F), B = _ >>> 16, N = 65535 & (T = C), U = T >>> 16, T = e[1], B += (_ = r[1]) >>> 16, N += 65535 & T, U += T >>> 16, U += (N += (B += (I += 65535 & _) >>> 16) >>> 16) >>> 16, e[1] = C = 65535 & N | U << 16, r[1] = F = 65535 & I | B << 16, I = 65535 & (_ = H), B = _ >>> 16, N = 65535 & (T = O), U = T >>> 16, T = e[2], B += (_ = r[2]) >>> 16, N += 65535 & T, U += T >>> 16, U += (N += (B += (I += 65535 & _) >>> 16) >>> 16) >>> 16, e[2] = O = 65535 & N | U << 16, r[2] = H = 65535 & I | B << 16, I = 65535 & (_ = G), B = _ >>> 16, N = 65535 & (T = x), U = T >>> 16, T = e[3], B += (_ = r[3]) >>> 16, N += 65535 & T, U += T >>> 16, U += (N += (B += (I += 65535 & _) >>> 16) >>> 16) >>> 16, e[3] = x = 65535 & N | U << 16, r[3] = G = 65535 & I | B << 16, I = 65535 & (_ = z), B = _ >>> 16, N = 65535 & (T = L), U = T >>> 16, T = e[4], B += (_ = r[4]) >>> 16, N += 65535 & T, U += T >>> 16, U += (N += (B += (I += 65535 & _) >>> 16) >>> 16) >>> 16, e[4] = L = 65535 & N | U << 16, r[4] = z = 65535 & I | B << 16, I = 65535 & (_ = Y), B = _ >>> 16, N = 65535 & (T = j), U = T >>> 16, T = e[5], B += (_ = r[5]) >>> 16, N += 65535 & T, U += T >>> 16, U += (N += (B += (I += 65535 & _) >>> 16) >>> 16) >>> 16, e[5] = j = 65535 & N | U << 16, r[5] = Y = 65535 & I | B << 16, I = 65535 & (_ = X), B = _ >>> 16, N = 65535 & (T = D), U = T >>> 16, T = e[6], B += (_ = r[6]) >>> 16, N += 65535 & T, U += T >>> 16, U += (N += (B += (I += 65535 & _) >>> 16) >>> 16) >>> 16, e[6] = D = 65535 & N | U << 16, r[6] = X = 65535 & I | B << 16, I = 65535 & (_ = q), B = _ >>> 16, N = 65535 & (T = V), U = T >>> 16, T = e[7], B += (_ = r[7]) >>> 16, N += 65535 & T, U += T >>> 16, U += (N += (B += (I += 65535 & _) >>> 16) >>> 16) >>> 16, e[7] = V = 65535 & N | U << 16, r[7] = q = 65535 & I | B << 16, W += 128, n -= 128
                }
                return n
            }

            function k(e, r, t) {
                var n, o = new Int32Array(8),
                    a = new Int32Array(8),
                    i = new Uint8Array(256),
                    s = t;
                for (o[0] = 1779033703, o[1] = 3144134277, o[2] = 1013904242, o[3] = 2773480762, o[4] = 1359893119, o[5] = 2600822924, o[6] = 528734635, o[7] = 1541459225, a[0] = 4089235720, a[1] = 2227873595, a[2] = 4271175723, a[3] = 1595750129, a[4] = 2917565137, a[5] = 725511199, a[6] = 4215389547, a[7] = 327033209, U(o, a, r, t), t %= 128, n = 0; n < t; n++) i[n] = r[s - t + n];
                for (i[t] = 128, i[(t = 256 - 128 * (t < 112 ? 1 : 0)) - 9] = 0, y(i, t - 8, s / 536870912 | 0, s << 3), U(o, a, i, t), n = 0; n < 8; n++) y(e, 8 * n, o[n], a[n]);
                return 0
            }

            function P(e, r) {
                var t = o(),
                    n = o(),
                    a = o(),
                    i = o(),
                    s = o(),
                    u = o(),
                    c = o(),
                    f = o(),
                    p = o();
                T(t, e[1], e[0]), T(p, r[1], r[0]), _(t, t, p), S(n, e[0], e[1]), S(p, r[0], r[1]), _(n, n, p), _(a, e[3], r[3]), _(a, a, l), _(i, e[2], r[2]), S(i, i, i), T(s, n, t), T(u, i, a), S(c, i, a), S(f, n, t), _(e[0], s, u), _(e[1], f, c), _(e[2], c, u), _(e[3], s, f)
            }

            function M(e, r, t) {
                for (var n = 0; n < 4; n++) w(e[n], r[n], t)
            }

            function C(e, r) {
                var t = o(),
                    n = o(),
                    a = o();
                B(a, r[2]), _(t, r[0], a), _(n, r[1], a), A(e, n), e[31] ^= v(t) << 7
            }

            function O(e, r, t) {
                var n, o;
                for (m(e[0], i), m(e[1], s), m(e[2], s), m(e[3], i), o = 255; o >= 0; --o) M(e, r, n = t[o / 8 | 0] >> (7 & o) & 1), P(r, e), P(e, e), M(e, r, n)
            }

            function x(e, r) {
                var t = [o(), o(), o(), o()];
                m(t[0], f), m(t[1], p), m(t[2], s), _(t[3], f, p), O(e, t, r)
            }
            var L = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function j(e, r) {
                var t, n, o, a;
                for (n = 63; n >= 32; --n) {
                    for (t = 0, o = n - 32, a = n - 12; o < a; ++o) r[o] += t - 16 * r[n] * L[o - (n - 32)], t = r[o] + 128 >> 8, r[o] -= 256 * t;
                    r[o] += t, r[n] = 0
                }
                for (t = 0, o = 0; o < 32; o++) r[o] += t - (r[31] >> 4) * L[o], t = r[o] >> 8, r[o] &= 255;
                for (o = 0; o < 32; o++) r[o] -= t * L[o];
                for (n = 0; n < 32; n++) r[n + 1] += r[n] >> 8, e[n] = 255 & r[n]
            }

            function D(e) {
                var r, t = new Float64Array(64);
                for (r = 0; r < 64; r++) t[r] = e[r];
                for (r = 0; r < 64; r++) e[r] = 0;
                j(e, t)
            }

            function V(e, r, t, n, a) {
                for (var i = new Uint8Array(64), s = [o(), o(), o(), o()], u = 0; u < 32; u++) i[u] = n[u];
                i[0] &= 248, i[31] &= 127, i[31] |= 64, x(s, i), C(i.subarray(32), s);
                var c, l = 128 & i[63];
                return c = a ? function(e, r, t, n, a) {
                    new Uint8Array(64);
                    var i, s, u = new Uint8Array(64),
                        c = new Uint8Array(64),
                        l = new Float64Array(64),
                        f = [o(), o(), o(), o()];
                    for (e[0] = 254, i = 1; i < 32; i++) e[i] = 255;
                    for (i = 0; i < 32; i++) e[32 + i] = n[i];
                    for (i = 0; i < t; i++) e[64 + i] = r[i];
                    for (i = 0; i < 64; i++) e[t + 64 + i] = a[i];
                    for (k(c, e, t + 128), D(c), x(f, c), C(e, f), i = 0; i < 32; i++) e[i + 32] = n[32 + i];
                    for (k(u, e, t + 64), D(u), i = 0; i < 64; i++) e[t + 64 + i] = 0;
                    for (i = 0; i < 64; i++) l[i] = 0;
                    for (i = 0; i < 32; i++) l[i] = c[i];
                    for (i = 0; i < 32; i++)
                        for (s = 0; s < 32; s++) l[i + s] += u[i] * n[s];
                    return j(e.subarray(32, t + 64), l), t + 64
                }(e, r, t, i, a) : function(e, r, t, n) {
                    new Uint8Array(64);
                    var a, i, s = new Uint8Array(64),
                        u = new Uint8Array(64),
                        c = new Float64Array(64),
                        l = [o(), o(), o(), o()];
                    for (a = 0; a < t; a++) e[64 + a] = r[a];
                    for (a = 0; a < 32; a++) e[32 + a] = n[a];
                    for (k(u, e.subarray(32), t + 32), D(u), x(l, u), C(e, l), a = 0; a < 32; a++) e[a + 32] = n[32 + a];
                    for (k(s, e, t + 64), D(s), a = 0; a < 64; a++) c[a] = 0;
                    for (a = 0; a < 32; a++) c[a] = u[a];
                    for (a = 0; a < 32; a++)
                        for (i = 0; i < 32; i++) c[a + i] += s[a] * n[i];
                    return j(e.subarray(32), c), t + 64
                }(e, r, t, i), e[63] |= l, c
            }

            function K(e, r) {
                var t = o(),
                    n = o(),
                    a = o(),
                    u = o(),
                    l = o(),
                    f = o(),
                    p = o();
                return m(e[2], s), E(e[1], r), I(a, e[1]), _(u, a, c), T(a, a, e[2]), S(u, e[2], u), I(l, u), I(f, l), _(p, f, l), _(t, p, a), _(t, t, u),
                    function(e, r) {
                        var t, n = o();
                        for (t = 0; t < 16; t++) n[t] = r[t];
                        for (t = 250; t >= 0; t--) I(n, n), 1 !== t && _(n, n, r);
                        for (t = 0; t < 16; t++) e[t] = n[t]
                    }(t, t), _(t, t, a), _(t, t, u), _(t, t, u), _(e[0], t, u), I(n, e[0]), _(n, n, u), b(n, a) && _(e[0], e[0], h), I(n, e[0]), _(n, n, u), b(n, a) ? -1 : (v(e[0]) === r[31] >> 7 && T(e[0], i, e[0]), _(e[3], e[0], e[1]), 0)
            }

            function F(e, r, t, n) {
                var a = function(e) {
                    var r = new Uint8Array(32),
                        t = o(),
                        n = o(),
                        a = o();
                    return E(t, e), S(n, t, s), T(a, t, s), B(n, n), _(n, n, a), A(r, n), r
                }(n);
                return a[31] |= 128 & r[63], r[63] &= 127,
                    function(e, r, t, n) {
                        var a, i = new Uint8Array(32),
                            s = new Uint8Array(64),
                            u = [o(), o(), o(), o()],
                            c = [o(), o(), o(), o()];
                        if (-1, t < 64) return -1;
                        if (K(c, n)) return -1;
                        for (a = 0; a < t; a++) e[a] = r[a];
                        for (a = 0; a < 32; a++) e[a + 32] = n[a];
                        if (k(s, e, t), D(s), O(u, c, s), x(c, r.subarray(32)), P(u, c), C(i, u), t -= 64, d(r, 0, i, 0)) {
                            for (a = 0; a < t; a++) e[a] = 0;
                            return -1
                        }
                        for (a = 0; a < t; a++) e[a] = r[a + 64];
                        return t
                    }(e, r, t, a)
            }

            function H() {
                for (var e, r, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                for (r = 0; r < arguments.length; r++)
                    if ("[object Uint8Array]" !== (e = Object.prototype.toString.call(arguments[r]))) throw new TypeError("unexpected type " + e + ", use Uint8Array")
            }
            n.sharedKey = function(e, r) {
                if (H(r, e), 32 !== r.length) throw new Error("wrong public key length");
                if (32 !== e.length) throw new Error("wrong secret key length");
                var t = new Uint8Array(32);
                return N(t, e, r), t
            }, n.signMessage = function(e, r, t) {
                if (H(r, e), 32 !== e.length) throw new Error("wrong secret key length");
                if (t) {
                    if (H(t), 64 !== t.length) throw new Error("wrong random data length");
                    var n = new Uint8Array(128 + r.length);
                    return V(n, r, r.length, e, t), new Uint8Array(n.subarray(0, 64 + r.length))
                }
                var o = new Uint8Array(64 + r.length);
                return V(o, r, r.length, e), o
            }, n.openMessage = function(e, r) {
                if (H(r, e), 32 !== e.length) throw new Error("wrong public key length");
                var t = new Uint8Array(r.length),
                    n = F(t, r, r.length, e);
                if (n < 0) return null;
                for (var o = new Uint8Array(n), a = 0; a < o.length; a++) o[a] = t[a];
                return o
            }, n.sign = function(e, r, t) {
                if (H(e, r), 32 !== e.length) throw new Error("wrong secret key length");
                if (t && (H(t), 64 !== t.length)) throw new Error("wrong random data length");
                var n = new Uint8Array((t ? 128 : 64) + r.length);
                V(n, r, r.length, e, t);
                for (var o = new Uint8Array(64), a = 0; a < o.length; a++) o[a] = n[a];
                return o
            }, n.verify = function(e, r, t) {
                if (H(r, t, e), 64 !== t.length) throw new Error("wrong signature length");
                if (32 !== e.length) throw new Error("wrong public key length");
                var n, o = new Uint8Array(64 + r.length),
                    a = new Uint8Array(64 + r.length);
                for (n = 0; n < 64; n++) o[n] = t[n];
                for (n = 0; n < r.length; n++) o[n + 64] = r[n];
                return F(a, o, o.length, e) >= 0
            }, n.generateKeyPair = function(e) {
                if (H(e), 32 !== e.length) throw new Error("wrong seed length");
                for (var r = new Uint8Array(32), t = new Uint8Array(32), n = 0; n < 32; n++) r[n] = e[n];
                return N(t, r, a), r[0] &= 248, r[31] &= 127, r[31] |= 64, t[31] &= 127, {
                    public: t,
                    private: r
                }
            }, r.default = n
        },
        7448: function(e, r, t) {
            "use strict";
            r.__esModule = !0;

            function n(e, r, t) {
                var n = e[r] + e[t],
                    o = e[r + 1] + e[t + 1];
                n >= 4294967296 && o++, e[r] = n, e[r + 1] = o
            }

            function o(e, r, t, n) {
                var o = e[r] + t;
                t < 0 && (o += 4294967296);
                var a = e[r + 1] + n;
                o >= 4294967296 && a++, e[r] = o, e[r + 1] = a
            }

            function a(e, r) {
                return e[r] ^ e[r + 1] << 8 ^ e[r + 2] << 16 ^ e[r + 3] << 24
            }

            function i(e, r, t, a, i, s) {
                var u = l[i],
                    f = l[i + 1],
                    p = l[s],
                    h = l[s + 1];
                n(c, e, r), o(c, e, u, f);
                var y = c[a] ^ c[e],
                    d = c[a + 1] ^ c[e + 1];
                c[a] = d, c[a + 1] = y, n(c, t, a), y = c[r] ^ c[t], d = c[r + 1] ^ c[t + 1], c[r] = y >>> 24 ^ d << 8, c[r + 1] = d >>> 24 ^ y << 8, n(c, e, r), o(c, e, p, h), y = c[a] ^ c[e], d = c[a + 1] ^ c[e + 1], c[a] = y >>> 16 ^ d << 16, c[a + 1] = d >>> 16 ^ y << 16, n(c, t, a), y = c[r] ^ c[t], d = c[r + 1] ^ c[t + 1], c[r] = d >>> 31 ^ y << 1, c[r + 1] = y >>> 31 ^ d << 1
            }
            var s = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]),
                u = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3].map((function(e) {
                    return 2 * e
                }))),
                c = new Uint32Array(32),
                l = new Uint32Array(32);

            function f(e, r) {
                var t = 0;
                for (t = 0; t < 16; t++) c[t] = e.h[t], c[t + 16] = s[t];
                for (c[24] = c[24] ^ e.t, c[25] = c[25] ^ e.t / 4294967296, r && (c[28] = ~c[28], c[29] = ~c[29]), t = 0; t < 32; t++) l[t] = a(e.b, 4 * t);
                for (t = 0; t < 12; t++) i(0, 8, 16, 24, u[16 * t + 0], u[16 * t + 1]), i(2, 10, 18, 26, u[16 * t + 2], u[16 * t + 3]), i(4, 12, 20, 28, u[16 * t + 4], u[16 * t + 5]), i(6, 14, 22, 30, u[16 * t + 6], u[16 * t + 7]), i(0, 10, 20, 30, u[16 * t + 8], u[16 * t + 9]), i(2, 12, 22, 24, u[16 * t + 10], u[16 * t + 11]), i(4, 14, 16, 26, u[16 * t + 12], u[16 * t + 13]), i(6, 8, 18, 28, u[16 * t + 14], u[16 * t + 15]);
                for (t = 0; t < 16; t++) e.h[t] = e.h[t] ^ c[t] ^ c[t + 16]
            }

            function p(e, r) {
                if (0 === e || e > 64) throw new Error("Illegal output length, expected 0 < length <= 64");
                if (r && r.length > 64) throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
                for (var t = {
                        b: new Uint8Array(128),
                        h: new Uint32Array(16),
                        t: 0,
                        c: 0,
                        outlen: e
                    }, n = 0; n < 16; n++) t.h[n] = s[n];
                var o = r ? r.length : 0;
                return t.h[0] ^= 16842752 ^ o << 8 ^ e, r && (h(t, r), t.c = 128), t
            }

            function h(e, r) {
                for (var t = 0; t < r.length; t++) 128 === e.c && (e.t += e.c, f(e, !1), e.c = 0), e.b[e.c++] = r[t]
            }

            function y(e) {
                for (e.t += e.c; e.c < 128;) e.b[e.c++] = 0;
                f(e, !0);
                for (var r = new Uint8Array(e.outlen), t = 0; t < e.outlen; t++) r[t] = e.h[t >> 2] >> 8 * (3 & t);
                return r
            }

            function d(e, r, t) {
                t = t || 64, e = function(e) {
                    var r;
                    if (e instanceof Uint8Array) r = e;
                    else if (e instanceof Buffer) r = new Uint8Array(e);
                    else {
                        if ("string" != typeof e) throw new Error("Input must be an string, Buffer or Uint8Array");
                        r = new Uint8Array(Buffer.from(e, "utf8"))
                    }
                    return r
                }(e);
                var n = p(t, r);
                return h(n, e), y(n)
            }
            r.blake2bInit = p, r.blake2bUpdate = h, r.blake2bFinal = y, r.blake2b = d, r.blake2bHex = function(e, r, t) {
                var n, o = d(e, r, t);
                return n = o, Array.prototype.map.call(n, (function(e) {
                    return (e < 16 ? "0" : "") + e.toString(16)
                })).join("")
            }
        },
        7449: function(e, r, t) {
            "use strict";

            function n(e, r) {
                return r = r || {
                    type: "Array"
                }, "undefined" != typeof window || "undefined" != typeof self ? function(e, r) {
                    var t = new Uint8Array(e);
                    switch ((self.crypto || self.msCrypto).getRandomValues(t), r.type) {
                        case "Array":
                            return [].slice.call(t);
                        case "Buffer":
                            try {
                                new Buffer(1)
                            } catch (e) {
                                throw new Error("Buffer not supported in this environment. Use Node.js or Browserify for browser support.")
                            }
                            return new Buffer(t);
                        case "Uint8Array":
                            return t;
                        default:
                            throw new Error(r.type + " is unsupported.")
                    }
                }(e, r) : function(e, r) {
                    var n = t(24).randomBytes(e);
                    switch (r.type) {
                        case "Array":
                            return [].slice.call(n);
                        case "Buffer":
                            return n;
                        case "Uint8Array":
                            for (var o = new Uint8Array(e), a = 0; a < e; ++a) o[a] = n.readUInt8(a);
                            return o;
                        default:
                            throw new Error(r.type + " is unsupported.")
                    }
                }(e, r)
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = {
                secureRandom: n,
                randomArray: function(e) {
                    return n(e, {
                        type: "Array"
                    })
                },
                randomUint8Array: function(e) {
                    return n(e, {
                        type: "Uint8Array"
                    })
                },
                randomBuffer: function(e) {
                    return n(e, {
                        type: "Buffer"
                    })
                }
            }
        },
        7450: function(e, r, t) {
            "use strict";
            r.__esModule = !0;
            for (var n = "0123456789abcdef".split(""), o = [0, 8, 16, 24], a = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], i = [224, 256, 384, 512], s = ["hex", "buffer", "arrayBuffer", "array"], u = function(e, r, t) {
                    return function(n) {
                        return new A(e, r, e).update(n)[t]()
                    }
                }, c = function(e, r, t) {
                    return function(n, o) {
                        return new A(e, r, o).update(n)[t]()
                    }
                }, l = function(e, r) {
                    var t = u(e, r, "hex");
                    t.create = function() {
                        return new A(e, r, e)
                    }, t.update = function(e) {
                        return t.create().update(e)
                    };
                    for (var n = 0; n < s.length; ++n) {
                        var o = s[n];
                        t[o] = u(e, r, o)
                    }
                    return t
                }, f = [{
                    name: "keccak",
                    padding: [1, 256, 65536, 16777216],
                    bits: i,
                    createMethod: l
                }, {
                    name: "sha3",
                    padding: [6, 1536, 393216, 100663296],
                    bits: i,
                    createMethod: l
                }, {
                    name: "shake",
                    padding: [31, 7936, 2031616, 520093696],
                    bits: [128, 256],
                    createMethod: function(e, r) {
                        var t = c(e, r, "hex");
                        t.create = function(t) {
                            return new A(e, r, t)
                        }, t.update = function(e, r) {
                            return t.create(r).update(e)
                        };
                        for (var n = 0; n < s.length; ++n) {
                            var o = s[n];
                            t[o] = c(e, r, o)
                        }
                        return t
                    }
                }], p = {}, h = [], y = 0; y < f.length; ++y)
                for (var d = f[y], m = d.bits, g = 0; g < m.length; ++g) {
                    var w = d.name + "_" + m[g];
                    h.push(w), p[w] = d.createMethod(m[g], d.padding)
                }

            function A(e, r, t) {
                this.blocks = [], this.s = [], this.padding = r, this.outputBits = t, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = t >> 5, this.extraBytes = (31 & t) >> 3;
                for (var n = 0; n < 50; ++n) this.s[n] = 0
            }
            A.prototype.update = function(e) {
                var r = "string" != typeof e;
                r && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
                for (var t, n, a = e.length, i = this.blocks, s = this.byteCount, u = this.blockCount, c = 0, l = this.s; c < a;) {
                    if (this.reset)
                        for (this.reset = !1, i[0] = this.block, t = 1; t < u + 1; ++t) i[t] = 0;
                    if (r)
                        for (t = this.start; c < a && t < s; ++c) i[t >> 2] |= e[c] << o[3 & t++];
                    else
                        for (t = this.start; c < a && t < s; ++c)(n = e.charCodeAt(c)) < 128 ? i[t >> 2] |= n << o[3 & t++] : n < 2048 ? (i[t >> 2] |= (192 | n >> 6) << o[3 & t++], i[t >> 2] |= (128 | 63 & n) << o[3 & t++]) : n < 55296 || n >= 57344 ? (i[t >> 2] |= (224 | n >> 12) << o[3 & t++], i[t >> 2] |= (128 | n >> 6 & 63) << o[3 & t++], i[t >> 2] |= (128 | 63 & n) << o[3 & t++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++c)), i[t >> 2] |= (240 | n >> 18) << o[3 & t++], i[t >> 2] |= (128 | n >> 12 & 63) << o[3 & t++], i[t >> 2] |= (128 | n >> 6 & 63) << o[3 & t++], i[t >> 2] |= (128 | 63 & n) << o[3 & t++]);
                    if (this.lastByteIndex = t, t >= s) {
                        for (this.start = t - s, this.block = i[u], t = 0; t < u; ++t) l[t] ^= i[t];
                        b(l), this.reset = !0
                    } else this.start = t
                }
                return this
            }, A.prototype.finalize = function() {
                var e = this.blocks,
                    r = this.lastByteIndex,
                    t = this.blockCount,
                    n = this.s;
                if (e[r >> 2] |= this.padding[3 & r], this.lastByteIndex === this.byteCount)
                    for (e[0] = e[t], r = 1; r < t + 1; ++r) e[r] = 0;
                for (e[t - 1] |= 2147483648, r = 0; r < t; ++r) n[r] ^= e[r];
                b(n)
            }, A.prototype.toString = A.prototype.hex = function() {
                this.finalize();
                for (var e, r = this.blockCount, t = this.s, o = this.outputBlocks, a = this.extraBytes, i = 0, s = 0, u = ""; s < o;) {
                    for (i = 0; i < r && s < o; ++i, ++s) e = t[i], u += n[e >> 4 & 15] + n[15 & e] + n[e >> 12 & 15] + n[e >> 8 & 15] + n[e >> 20 & 15] + n[e >> 16 & 15] + n[e >> 28 & 15] + n[e >> 24 & 15];
                    s % r == 0 && (b(t), i = 0)
                }
                return a && (e = t[i], a > 0 && (u += n[e >> 4 & 15] + n[15 & e]), a > 1 && (u += n[e >> 12 & 15] + n[e >> 8 & 15]), a > 2 && (u += n[e >> 20 & 15] + n[e >> 16 & 15])), u
            }, A.prototype.arrayBuffer = function() {
                this.finalize();
                var e, r = this.blockCount,
                    t = this.s,
                    n = this.outputBlocks,
                    o = this.extraBytes,
                    a = 0,
                    i = 0,
                    s = this.outputBits >> 3;
                e = o ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(s);
                for (var u = new Uint32Array(e); i < n;) {
                    for (a = 0; a < r && i < n; ++a, ++i) u[i] = t[a];
                    i % r == 0 && b(t)
                }
                return o && (u[a] = t[a], e = e.slice(0, s)), e
            }, A.prototype.buffer = A.prototype.arrayBuffer, A.prototype.digest = A.prototype.array = function() {
                this.finalize();
                for (var e, r, t = this.blockCount, n = this.s, o = this.outputBlocks, a = this.extraBytes, i = 0, s = 0, u = []; s < o;) {
                    for (i = 0; i < t && s < o; ++i, ++s) e = s << 2, r = n[i], u[e] = 255 & r, u[e + 1] = r >> 8 & 255, u[e + 2] = r >> 16 & 255, u[e + 3] = r >> 24 & 255;
                    s % t == 0 && b(n)
                }
                return a && (e = s << 2, r = n[i], a > 0 && (u[e] = 255 & r), a > 1 && (u[e + 1] = r >> 8 & 255), a > 2 && (u[e + 2] = r >> 16 & 255)), u
            };
            var b = function(e) {
                var r, t, n, o, i, s, u, c, l, f, p, h, y, d, m, g, w, A, b, v, E, S, T, _, I, B, N, R, U, k, P, M, C, O, x, L, j, D, V, K, F, H, G, z, Y, X, q, W, J, Z, Q, $, ee, re, te, ne, oe, ae, ie, se, ue, ce, le;
                for (n = 0; n < 48; n += 2) o = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], u = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], f = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], p = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], r = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (s << 1 | u >>> 31), t = (y = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (u << 1 | s >>> 31), e[0] ^= r, e[1] ^= t, e[10] ^= r, e[11] ^= t, e[20] ^= r, e[21] ^= t, e[30] ^= r, e[31] ^= t, e[40] ^= r, e[41] ^= t, r = o ^ (c << 1 | l >>> 31), t = i ^ (l << 1 | c >>> 31), e[2] ^= r, e[3] ^= t, e[12] ^= r, e[13] ^= t, e[22] ^= r, e[23] ^= t, e[32] ^= r, e[33] ^= t, e[42] ^= r, e[43] ^= t, r = s ^ (f << 1 | p >>> 31), t = u ^ (p << 1 | f >>> 31), e[4] ^= r, e[5] ^= t, e[14] ^= r, e[15] ^= t, e[24] ^= r, e[25] ^= t, e[34] ^= r, e[35] ^= t, e[44] ^= r, e[45] ^= t, r = c ^ (h << 1 | y >>> 31), t = l ^ (y << 1 | h >>> 31), e[6] ^= r, e[7] ^= t, e[16] ^= r, e[17] ^= t, e[26] ^= r, e[27] ^= t, e[36] ^= r, e[37] ^= t, e[46] ^= r, e[47] ^= t, r = f ^ (o << 1 | i >>> 31), t = p ^ (i << 1 | o >>> 31), e[8] ^= r, e[9] ^= t, e[18] ^= r, e[19] ^= t, e[28] ^= r, e[29] ^= t, e[38] ^= r, e[39] ^= t, e[48] ^= r, e[49] ^= t, d = e[0], m = e[1], X = e[11] << 4 | e[10] >>> 28, q = e[10] << 4 | e[11] >>> 28, R = e[20] << 3 | e[21] >>> 29, U = e[21] << 3 | e[20] >>> 29, se = e[31] << 9 | e[30] >>> 23, ue = e[30] << 9 | e[31] >>> 23, H = e[40] << 18 | e[41] >>> 14, G = e[41] << 18 | e[40] >>> 14, O = e[2] << 1 | e[3] >>> 31, x = e[3] << 1 | e[2] >>> 31, g = e[13] << 12 | e[12] >>> 20, w = e[12] << 12 | e[13] >>> 20, W = e[22] << 10 | e[23] >>> 22, J = e[23] << 10 | e[22] >>> 22, k = e[33] << 13 | e[32] >>> 19, P = e[32] << 13 | e[33] >>> 19, ce = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, re = e[5] << 30 | e[4] >>> 2, te = e[4] << 30 | e[5] >>> 2, L = e[14] << 6 | e[15] >>> 26, j = e[15] << 6 | e[14] >>> 26, A = e[25] << 11 | e[24] >>> 21, b = e[24] << 11 | e[25] >>> 21, Z = e[34] << 15 | e[35] >>> 17, Q = e[35] << 15 | e[34] >>> 17, M = e[45] << 29 | e[44] >>> 3, C = e[44] << 29 | e[45] >>> 3, _ = e[6] << 28 | e[7] >>> 4, I = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, oe = e[16] << 23 | e[17] >>> 9, D = e[26] << 25 | e[27] >>> 7, V = e[27] << 25 | e[26] >>> 7, v = e[36] << 21 | e[37] >>> 11, E = e[37] << 21 | e[36] >>> 11, $ = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, z = e[8] << 27 | e[9] >>> 5, Y = e[9] << 27 | e[8] >>> 5, B = e[18] << 20 | e[19] >>> 12, N = e[19] << 20 | e[18] >>> 12, ae = e[29] << 7 | e[28] >>> 25, ie = e[28] << 7 | e[29] >>> 25, K = e[38] << 8 | e[39] >>> 24, F = e[39] << 8 | e[38] >>> 24, S = e[48] << 14 | e[49] >>> 18, T = e[49] << 14 | e[48] >>> 18, e[0] = d ^ ~g & A, e[1] = m ^ ~w & b, e[10] = _ ^ ~B & R, e[11] = I ^ ~N & U, e[20] = O ^ ~L & D, e[21] = x ^ ~j & V, e[30] = z ^ ~X & W, e[31] = Y ^ ~q & J, e[40] = re ^ ~ne & ae, e[41] = te ^ ~oe & ie, e[2] = g ^ ~A & v, e[3] = w ^ ~b & E, e[12] = B ^ ~R & k, e[13] = N ^ ~U & P, e[22] = L ^ ~D & K, e[23] = j ^ ~V & F, e[32] = X ^ ~W & Z, e[33] = q ^ ~J & Q, e[42] = ne ^ ~ae & se, e[43] = oe ^ ~ie & ue, e[4] = A ^ ~v & S, e[5] = b ^ ~E & T, e[14] = R ^ ~k & M, e[15] = U ^ ~P & C, e[24] = D ^ ~K & H, e[25] = V ^ ~F & G, e[34] = W ^ ~Z & $, e[35] = J ^ ~Q & ee, e[44] = ae ^ ~se & ce, e[45] = ie ^ ~ue & le, e[6] = v ^ ~S & d, e[7] = E ^ ~T & m, e[16] = k ^ ~M & _, e[17] = P ^ ~C & I, e[26] = K ^ ~H & O, e[27] = F ^ ~G & x, e[36] = Z ^ ~$ & z, e[37] = Q ^ ~ee & Y, e[46] = se ^ ~ce & re, e[47] = ue ^ ~le & te, e[8] = S ^ ~d & g, e[9] = T ^ ~m & w, e[18] = M ^ ~_ & B, e[19] = C ^ ~I & N, e[28] = H ^ ~O & L, e[29] = G ^ ~x & j, e[38] = $ ^ ~z & X, e[39] = ee ^ ~Y & q, e[48] = ce ^ ~re & ne, e[49] = le ^ ~te & oe, e[0] ^= a[n], e[1] ^= a[n + 1]
            };
            r.keccak256 = p.keccak_256
        },
        7451: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"]
        },
        9907: function(e, r, t) {
            "use strict";
            var n, o = this && this.__extends || (n = function(e, r) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, r) {
                        e.__proto__ = r
                    } || function(e, r) {
                        for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t])
                    })(e, r)
            }, function(e, r) {
                function t() {
                    this.constructor = e
                }
                n(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t)
            });
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var a = t(6646),
                i = t(6648),
                s = t(6080),
                u = t(6649),
                c = t(6256),
                l = t(5949),
                f = t(5948),
                p = t(5949);

            function h(e) {
                if (!e) throw new Error("Asset ID should not be empty");
                return e === p.WAVES_ID ? p.WAVES_BLOCKCHAIN_ID : e
            }

            function y(e) {
                var r = u.default.stringToByteArrayWithSize(e);
                return [p.ALIAS_VERSION, f.config.getNetworkByte()].concat(r)
            }

            function d(e) {
                var r = e.replace("base64:", "");
                return r.length > 0 && r.length % 4 == 0
            }
            var m = function(e) {
                this.name = e
            };
            r.ByteProcessor = m;
            var g = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    var r = s.default.decode(e);
                    return Promise.resolve(r)
                }, r
            }(m);
            r.Base58 = g;
            var w = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    if ("string" != typeof e) throw new Error("You should pass a string to BinaryDataEntry constructor");
                    if (d(e)) {
                        if ("base64:" !== e.slice(0, 7)) throw new Error('Blob should be encoded in base64 and prefixed with "base64:"');
                        var r = e.slice(7),
                            t = Uint8Array.from(i.toByteArray(r)),
                            n = Uint8Array.from(u.default.shortToByteArray(t.length));
                        return Promise.resolve(c.concatUint8Arrays(n, t))
                    }
                    return Promise.resolve(Uint8Array.from([]))
                }, r
            }(m);
            r.Base64 = w;
            var A = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    if (null != e && "string" != typeof e) throw new Error("You should pass a string to BinaryDataEntry constructor");
                    if (null != e && d(e)) {
                        if ("base64:" !== e.slice(0, 7)) throw new Error('Blob should be encoded in base64 and prefixed with "base64:"');
                        var r = e.slice(7),
                            t = Uint8Array.from(i.toByteArray(r)),
                            n = Uint8Array.from(u.default.shortToByteArray(t.length));
                        return Promise.resolve(c.concatUint8Arrays(n, t))
                    }
                    return Promise.resolve(Uint8Array.from([]))
                }, r
            }(m);
            r.Base64Asset = A;
            var b = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    var r = u.default.booleanToBytes(e);
                    return Promise.resolve(Uint8Array.from(r))
                }, r
            }(m);
            r.Bool = b;
            var v = function(e) {
                function r(r, t) {
                    var n = e.call(this, r) || this;
                    return n.length = t, n
                }
                return o(r, e), r.prototype.process = function(e) {
                    var r;
                    return "number" == typeof e ? r = u.default.longToByteArray(e, this.length) : ("string" == typeof e && (e = new a.BigNumber(e)), r = u.default.bigNumberToByteArray(e, this.length)), Promise.resolve(Uint8Array.from(r))
                }, r
            }(m);
            r.Int = v;
            var E = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    var r;
                    return "number" == typeof e ? r = u.default.longToByteArray(e, 8) : ("string" == typeof e && (e = new a.BigNumber(e)), r = u.default.signBigNumberToByteArray(e)), Promise.resolve(Uint8Array.from(r))
                }, r
            }(m);
            r.SignLong = E;
            var S = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    if ("number" != typeof e) throw new Error("You should pass a number to Short constructor");
                    if (e < 0 || e > 65535) throw new Error("Short value must fit between 0 and 65535");
                    return Promise.resolve(Uint8Array.from(u.default.shortToByteArray(e)))
                }, r
            }(m);
            r.Short = S;
            var T = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    var r = u.default.stringToByteArrayWithSize(e);
                    return Promise.resolve(Uint8Array.from(r))
                }, r
            }(m);
            r.StringWithLength = T;
            var _ = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    var r = y(e),
                        t = u.default.bytesToByteArrayWithSize(r);
                    return Promise.resolve(Uint8Array.from(t))
                }, r
            }(m);
            r.Alias = _;
            var I = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    var r = (e = h(e)) ? c.concatUint8Arrays(Uint8Array.from([1]), s.default.decode(e)) : Uint8Array.from([0]);
                    return Promise.resolve(r)
                }, r
            }(m);
            r.AssetId = I;
            var B = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    if ("string" == typeof e && (e = Uint8Array.from(u.default.stringToByteArray(e))), e.length > p.TRANSFER_ATTACHMENT_BYTE_LIMIT) throw new Error("Maximum attachment length is exceeded");
                    var r = u.default.bytesToByteArrayWithSize(e);
                    return Promise.resolve(Uint8Array.from(r))
                }, r
            }(m);
            r.Attachment = B;
            var N = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    return e = h(e), Promise.resolve(s.default.decode(e))
                }, r
            }(m);
            r.MandatoryAssetId = N;
            var R = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    if ("buy" === e) return b.prototype.process.call(this, !1);
                    if ("sell" === e) return b.prototype.process.call(this, !0);
                    throw new Error('There are no other order types besides "buy" and "sell"')
                }, r
            }(m);
            r.OrderType = R;
            var U = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    if (e.length <= 30) {
                        var r = y(e);
                        return Promise.resolve(Uint8Array.from(r))
                    }
                    var t = s.default.decode(e);
                    return Promise.resolve(Uint8Array.from(t))
                }, r
            }(m);
            r.Recipient = U;
            var k = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    return d(e) ? Promise.resolve(Uint8Array.from([l.SET_SCRIPT_LANG_VERSION])) : Promise.resolve(Uint8Array.from([0]))
                }, r
            }(m);
            r.ScriptVersion = k;
            var P = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    for (var r = new U(l.STUB_NAME), t = new v(l.STUB_NAME, 8), n = [], o = 0; o < e.length; o++) n.push(r.process(e[o].recipient)), n.push(t.process(e[o].amount));
                    return Promise.all(n).then((function(r) {
                        var t = u.default.shortToByteArray(e.length),
                            n = Uint8Array.from(t);
                        return c.concatUint8Arrays.apply(void 0, [n].concat(r))
                    }))
                }, r
            }(m);
            r.Transfers = P;
            var M = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    return E.prototype.process.call(this, e).then((function(e) {
                        var r = Uint8Array.from([0]);
                        return c.concatUint8Arrays(r, e)
                    }))
                }, r
            }(m);
            r.IntegerDataEntry = M;
            var C = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    return b.prototype.process.call(this, e).then((function(e) {
                        var r = Uint8Array.from([1]);
                        return c.concatUint8Arrays(r, e)
                    }))
                }, r
            }(m);
            r.BooleanDataEntry = C;
            var O = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    return w.prototype.process.call(this, e).then((function(e) {
                        var r = Uint8Array.from([2]);
                        return Promise.resolve(c.concatUint8Arrays(r, e))
                    }))
                }, r
            }(m);
            r.BinaryDataEntry = O;
            var x = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    return T.prototype.process.call(this, e).then((function(e) {
                        var r = Uint8Array.from([3]);
                        return c.concatUint8Arrays(r, e)
                    }))
                }, r
            }(m);
            r.StringDataEntry = x;
            var L = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e), r.prototype.process = function(e) {
                    var r = this,
                        t = Uint8Array.from(u.default.shortToByteArray(e.length));
                    return e.length ? Promise.all(e.map((function(e) {
                        var t = function(t) {
                            return T.prototype.process.call(r, e.key).then((function(e) {
                                return c.concatUint8Arrays(e, t)
                            }))
                        };
                        switch (e.type) {
                            case "integer":
                                return M.prototype.process.call(r, e.value).then(t);
                            case "boolean":
                                return C.prototype.process.call(r, e.value).then(t);
                            case "binary":
                                return O.prototype.process.call(r, e.value).then(t);
                            case "string":
                                return x.prototype.process.call(r, e.value).then(t);
                            default:
                                throw new Error('There is no data type "' + e.type + '"')
                        }
                    }))).then((function(e) {
                        var r = c.concatUint8Arrays.apply(void 0, [t].concat(e));
                        if (r.length > l.DATA_ENTRIES_BYTE_LIMIT) throw new Error("Data transaction is too large (140KB max)");
                        return r
                    })) : Promise.resolve(Uint8Array.from([0, 0]))
                }, r
            }(m);
            r.DataEntries = L
        },
        9937: function(e, r, t) {
            "use strict";
            var n, o, a = this && this.__extends || (n = function(e, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, r) {
                            e.__proto__ = r
                        } || function(e, r) {
                            for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t])
                        })(e, r)
                }, function(e, r) {
                    function t() {
                        this.constructor = e
                    }
                    n(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t)
                }),
                i = this && this.__assign || function() {
                    return (i = Object.assign || function(e) {
                        for (var r, t = 1, n = arguments.length; t < n; t++)
                            for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                        return e
                    }).apply(this, arguments)
                };
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var s = t(5948),
                u = t(6256),
                c = t(7446),
                l = t(5949),
                f = t(6649),
                p = t(6080),
                h = {
                    code: "NO_DATA",
                    message: "No data"
                },
                y = {
                    code: "FIELD_ERROR",
                    message: "Invalid field",
                    field: null
                };

            function d(e) {
                var r = [];
                e && e.length || r.push(h);
                var t = Object.create(null),
                    n = [];
                if (e.forEach((function(e) {
                        e instanceof s.ByteProcessor ? (t[e.name] = e, n.push((function(r) {
                            try {
                                return e.process(r[e.name])
                            } catch (r) {
                                throw i({}, y, {
                                    field: e.name,
                                    message: r.message
                                })
                            }
                        }))) : "number" == typeof e ? n.push(Uint8Array.from([e])) : r.push(i({}, y, {
                            field: e
                        }))
                    })), r.length) throw r;
                return function() {
                    function r(e) {
                        void 0 === e && (e = {});
                        var r = this;
                        if (this._errors = [], this._rawData = Object.keys(t).reduce((function(r, t) {
                                return r[t] = e[t], r
                            }), {}), this._dataHolders = n.map((function(e) {
                                if ("function" != typeof e) return e;
                                try {
                                    return e(r._rawData)
                                } catch (e) {
                                    r._errors.push(e)
                                }
                            })), this._errors.length) throw this._errors
                    }
                    return r.prototype.getSignature = function(e) {
                        return this.getBytes().then((function(r) {
                            return c.default.buildTransactionSignature(r, e)
                        }))
                    }, r.prototype.getBytes = function() {
                        return Promise.all(this._dataHolders).then((function(e) {
                            return 1 === e.length ? e[0] : u.concatUint8Arrays.apply(void 0, e)
                        }))
                    }, r.prototype.getDebugBytes = function() {
                        var r = this;
                        return Promise.all(e.map((function(e, t) {
                            var n = e && e.name ? r._rawData[e.name] : null,
                                o = r._dataHolders[t];
                            return o instanceof Promise ? o.then((function(r) {
                                return {
                                    bytes: r,
                                    from: e && e.name || e,
                                    value: n
                                }
                            })) : Promise.resolve({
                                bytes: o,
                                from: e,
                                value: n
                            })
                        })))
                    }, r.prototype.getExactBytes = function(e) {
                        if (!(e in t)) throw new Error("There is no field '" + e + "' in 'RequestDataType class");
                        var r = t[e],
                            n = this._rawData[e];
                        return r.process(n)
                    }, r
                }()
            }
            r.generate = d, r.TX_NUMBER_MAP = Object.create(null), r.TX_TYPE_MAP = Object.create(null), r.CREATE_ORDER_SIGNATURE = d([new s.Base58("senderPublicKey"), new s.Base58("matcherPublicKey"), new s.AssetId("amountAsset"), new s.AssetId("priceAsset"), new s.OrderType("orderType"), new s.Int("price", 8), new s.Int("amount", 8), new s.Int("timestamp", 8), new s.Int("expiration", 8), new s.Int("matcherFee", 8)]), r.CREATE_ORDER_SIGNATURE_V2 = d([l.ORDER_VERSION, new s.Base58("senderPublicKey"), new s.Base58("matcherPublicKey"), new s.AssetId("amountAsset"), new s.AssetId("priceAsset"), new s.OrderType("orderType"), new s.Int("price", 8), new s.Int("amount", 8), new s.Int("timestamp", 8), new s.Int("expiration", 8), new s.Int("matcherFee", 8)]), r.AUTH_ORDER_SIGNATURE = d([new s.Base58("senderPublicKey"), new s.Int("timestamp", 8)]), r.CANCEL_ORDER_SIGNATURE = d([new s.Base58("senderPublicKey"), new s.Base58("orderId")]), r.CANCEL_ALL_ORDERS_SIGNATURE = d([new s.Base58("senderPublicKey"), new s.Int("timestamp", 8)]), r.MATCHER_BYTES_GENERATOR_MAP = {
                CREATE_ORDER: {
                    1: r.CREATE_ORDER_SIGNATURE,
                    2: r.CREATE_ORDER_SIGNATURE_V2
                },
                AUTH_ORDER: {
                    1: r.AUTH_ORDER_SIGNATURE
                },
                CANCEL_ORDER: {
                    1: r.CANCEL_ORDER_SIGNATURE
                },
                CANCEL_ALL_ORDERS: {
                    1: r.CANCEL_ALL_ORDERS_SIGNATURE
                }
            }, r.ISSUE = d([3, new s.Base58("senderPublicKey"), new s.StringWithLength("name"), new s.StringWithLength("description"), new s.Int("quantity", 8), new s.Int("precision", 1), new s.Bool("reissuable"), new s.Int("fee", 8), new s.Int("timestamp", 8), new s.ScriptVersion("script"), new s.Base64Asset("script")]), r.ISSUE_V2 = d([3, 2, new s.Int("chainId", 1), new s.Base58("senderPublicKey"), new s.StringWithLength("name"), new s.StringWithLength("description"), new s.Int("quantity", 8), new s.Int("precision", 1), new s.Bool("reissuable"), new s.Int("fee", 8), new s.Int("timestamp", 8), new s.ScriptVersion("script"), new s.Base64Asset("script")]), r.TX_NUMBER_MAP[3] = r.ISSUE_V2, r.TX_TYPE_MAP.issue = r.ISSUE_V2, r.TRANSFER = d([4, new s.Base58("senderPublicKey"), new s.AssetId("assetId"), new s.AssetId("feeAssetId"), new s.Int("timestamp", 8), new s.Int("amount", 8), new s.Int("fee", 8), new s.Recipient("recipient"), new s.Attachment("attachment")]), r.TRANSFER_V2 = d([4, 2, new s.Base58("senderPublicKey"), new s.AssetId("assetId"), new s.AssetId("feeAssetId"), new s.Int("timestamp", 8), new s.Int("amount", 8), new s.Int("fee", 8), new s.Recipient("recipient"), new s.Attachment("attachment")]), r.TX_NUMBER_MAP[4] = r.TRANSFER_V2, r.TX_TYPE_MAP.transfer = r.TRANSFER_V2, r.REISSUE = d([5, new s.Base58("senderPublicKey"), new s.MandatoryAssetId("assetId"), new s.Int("quantity", 8), new s.Bool("reissuable"), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.REISSUE_V2 = d([5, 2, new s.Int("chainId", 1), new s.Base58("senderPublicKey"), new s.MandatoryAssetId("assetId"), new s.Int("quantity", 8), new s.Bool("reissuable"), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.TX_NUMBER_MAP[5] = r.REISSUE_V2, r.TX_TYPE_MAP.reissue = r.REISSUE_V2, r.BURN = d([6, new s.Base58("senderPublicKey"), new s.MandatoryAssetId("assetId"), new s.Int("quantity", 8), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.BURN_V2 = d([6, 2, new s.Int("chainId", 1), new s.Base58("senderPublicKey"), new s.MandatoryAssetId("assetId"), new s.Int("quantity", 8), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.TX_NUMBER_MAP[6] = r.BURN_V2, r.TX_TYPE_MAP.burn = r.BURN_V2;
            var m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a(t, e), t.prototype.process = function(e) {
                    var t, n = e.version || 0,
                        o = r.MATCHER_BYTES_GENERATOR_MAP.CREATE_ORDER[n];
                    if (!o) throw new Error('Has no order schema with version "' + n + '"');
                    if (2 === e.version) {
                        var a = e.proofs.map((function(e) {
                            var r = p.default.decode(e);
                            return u.concatUint8Arrays(Uint8Array.from(f.default.longToByteArray(r.length, 2)), r)
                        }));
                        t = u.concatUint8Arrays.apply(void 0, [Uint8Array.from([1]), Uint8Array.from(f.default.longToByteArray(e.proofs.length, 2))].concat(a))
                    } else t = p.default.decode(e.signature);
                    return new o(e).getBytes().then((function(e) {
                        return u.concatUint8Arrays(Uint8Array.from(f.default.longToByteArray(e.length + t.length, 4)), Uint8Array.from(f.default.longToByteArray(n || 1, 1)), e.slice(2 === n ? 1 : 0), t)
                    }))
                }, t
            }(s.ByteProcessor);
            r.Order = m, r.EXCHANGE = d([7, new m("buyOrder"), new m("sellOrder"), new s.Int("price", 8), new s.Int("amount", 8), new s.Int("buyMatcherFee", 8), new s.Int("sellMatcherFee", 8), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.EXCHANGE_V2 = d([0, 7, 2, new m("buyOrder"), new m("sellOrder"), new s.Int("price", 8), new s.Int("amount", 8), new s.Int("buyMatcherFee", 8), new s.Int("sellMatcherFee", 8), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.LEASE = d([8, 0, new s.Base58("senderPublicKey"), new s.Recipient("recipient"), new s.Int("amount", 8), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.LEASE_V2 = d([8, 2, 0, new s.Base58("senderPublicKey"), new s.Recipient("recipient"), new s.Int("amount", 8), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.TX_NUMBER_MAP[8] = r.LEASE_V2, r.TX_TYPE_MAP.lease = r.LEASE_V2, r.CANCEL_LEASING = d([9, new s.Base58("senderPublicKey"), new s.Int("fee", 8), new s.Int("timestamp", 8), new s.Base58("transactionId")]), r.CANCEL_LEASING_V2 = d([9, 2, new s.Int("chainId", 1), new s.Base58("senderPublicKey"), new s.Int("fee", 8), new s.Int("timestamp", 8), new s.Base58("transactionId")]), r.TX_NUMBER_MAP[9] = r.CANCEL_LEASING_V2, r.TX_TYPE_MAP.cancelLeasing = r.CANCEL_LEASING_V2, r.CREATE_ALIAS = d([10, new s.Base58("senderPublicKey"), new s.Alias("alias"), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.CREATE_ALIAS_V2 = d([10, 2, new s.Base58("senderPublicKey"), new s.Alias("alias"), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.TX_NUMBER_MAP[10] = r.CREATE_ALIAS_V2, r.TX_TYPE_MAP.createAlias = r.CREATE_ALIAS_V2, r.MASS_TRANSFER = d([11, 1, new s.Base58("senderPublicKey"), new s.AssetId("assetId"), new s.Transfers("transfers"), new s.Int("timestamp", 8), new s.Int("fee", 8), new s.Attachment("attachment")]), r.TX_NUMBER_MAP[11] = r.MASS_TRANSFER, r.TX_TYPE_MAP.massTransfer = r.MASS_TRANSFER, r.DATA = d([12, 1, new s.Base58("senderPublicKey"), new s.DataEntries("data"), new s.Int("timestamp", 8), new s.Int("fee", 8)]), r.TX_NUMBER_MAP[12] = r.DATA, r.TX_TYPE_MAP.data = r.DATA, r.SET_SCRIPT = d([13, 1, new s.Int("chainId", 1), new s.Base58("senderPublicKey"), new s.ScriptVersion("script"), new s.Base64("script"), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.TX_NUMBER_MAP[13] = r.SET_SCRIPT, r.TX_TYPE_MAP.setScript = r.SET_SCRIPT, r.SET_ASSET_SCRIPT = d([15, 1, new s.Int("chainId", 1), new s.Base58("senderPublicKey"), new s.MandatoryAssetId("assetId"), new s.Int("fee", 8), new s.Int("timestamp", 8), new s.ScriptVersion("script"), new s.Base64("script")]), r.TX_NUMBER_MAP[15] = r.SET_ASSET_SCRIPT, r.TX_TYPE_MAP.setAssetScript = r.SET_ASSET_SCRIPT, r.SPONSORSHIP = d([14, 1, new s.Base58("senderPublicKey"), new s.Base58("assetId"), new s.Int("minSponsoredAssetFee", 8), new s.Int("fee", 8), new s.Int("timestamp", 8)]), r.TX_NUMBER_MAP[14] = r.SPONSORSHIP, r.TX_TYPE_MAP.sponsorship = r.SPONSORSHIP, r.BYTES_GENERATORS_MAP = ((o = {})[3] = {
                1: r.ISSUE,
                2: r.ISSUE_V2
            }, o[4] = {
                1: r.TRANSFER,
                2: r.TRANSFER_V2
            }, o[5] = {
                1: r.REISSUE,
                2: r.REISSUE_V2
            }, o[6] = {
                1: r.BURN,
                2: r.BURN_V2
            }, o[7] = {
                1: r.EXCHANGE,
                2: r.EXCHANGE_V2
            }, o[8] = {
                1: r.LEASE,
                2: r.LEASE_V2
            }, o[9] = {
                1: r.CANCEL_LEASING,
                2: r.CANCEL_LEASING_V2
            }, o[10] = {
                1: r.CREATE_ALIAS,
                2: r.CREATE_ALIAS_V2
            }, o[11] = {
                1: r.MASS_TRANSFER
            }, o[12] = {
                1: r.DATA
            }, o[13] = {
                1: r.SET_SCRIPT
            }, o[14] = {
                1: r.SPONSORSHIP
            }, o[15] = {
                1: r.SET_ASSET_SCRIPT
            }, o)
        },
        9938: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var n = t(7445),
                o = t(5948),
                a = t(7451),
                i = function() {
                    function e(e) {
                        if (e.length < n.config.get("minimalSeedLength")) throw new Error("Your seed length is less than allowed in config");
                        var r = o.utils.crypto.buildKeyPair(e);
                        this.phrase = e, this.address = o.utils.crypto.buildRawAddress(r.publicKey), this.keyPair = {
                            privateKey: o.libs.base58.encode(r.privateKey),
                            publicKey: o.libs.base58.encode(r.publicKey)
                        }, Object.freeze(this), Object.freeze(this.keyPair)
                    }
                    return e.prototype.encrypt = function(r, t) {
                        return e.encryptSeedPhrase(this.phrase, r, t)
                    }, e.encryptSeedPhrase = function(e, r, t) {
                        if (void 0 === t && (t = 5e3), r && r.length, e.length < n.config.get("minimalSeedLength")) throw new Error("The seed phrase you are trying to encrypt is too short");
                        return o.utils.crypto.encryptSeed(e, r, t)
                    }, e.decryptSeedPhrase = function(e, r, t) {
                        void 0 === t && (t = 5e3);
                        var a;
                        try {
                            a = o.utils.crypto.decryptSeed(e, r, t)
                        } catch (e) {
                            throw new Error("The password is wrong")
                        }
                        if ("" === a || a.length < n.config.get("minimalSeedLength")) throw new Error("The password is wrong");
                        return a
                    }, e.create = function(r) {
                        void 0 === r && (r = 15);
                        var t = e._generateNewSeed(r),
                            o = n.config.get("minimalSeedLength");
                        if (t.length < o) throw new Error("The resulted seed length is less than the minimum length (" + o + ")");
                        return new e(t)
                    }, e.fromExistingPhrase = function(r) {
                        var t = n.config.get("minimalSeedLength");
                        if (r.length < t) throw new Error("The resulted seed length is less than the minimum length (" + t + ")");
                        return new e(r)
                    }, e._generateNewSeed = function(e) {
                        for (var r = o.utils.crypto.generateRandomUint32Array(e), t = a.default.length, n = [], i = 0; i < e; i++) {
                            var s = r[i] % t;
                            n.push(a.default[s])
                        }
                        return r.set(new Uint8Array(r.length)), n.join(" ")
                    }, e
                }();
            r.Seed = i
        },
        9939: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var n = t(9940);
            r.parseTransactionBytes = function(e) {
                var t = n.getNumberFromBytes(e, 1);
                switch (t) {
                    case 3:
                        return r.parseIssueTx(e);
                    case 4:
                        return r.parseTransferTx(e);
                    case 5:
                        return r.parseReissueTx(e);
                    case 6:
                        return r.parseBurnTx(e);
                    case 8:
                        return r.parseLeaseTx(e);
                    case 9:
                        return r.parseCancelLeaseTx(e);
                    case 10:
                        return r.parseCreateAliasTx(e);
                    case 11:
                        return r.parseMassTransferTx(e);
                    case 7:
                        throw new Error("Exchange transaction parser is not supported!");
                    case 12:
                        return r.parseDataTx(e);
                    case 13:
                        return r.parseSetScriptTx(e);
                    case 14:
                        return r.parseSponsorshipTx(e);
                    case 15:
                        return r.parseSetAssetScriptTx(e);
                    default:
                        throw new Error("Type " + t + " is not supported!")
                }
            }, r.parseOrderBytes = function() {}, r.parseIssueTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toNumber("chainId"), n.toBase58("senderPublicKey"), n.toStringWithLength("name"), n.toStringWithLength("description"), n.toBigNumber("quantity"), n.toNumber("precision"), n.toBoolean("reissuable"), n.toBigNumber("fee"), n.toBigNumber("timestamp"), n.toScript("script")]), r.parseTransferTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toBase58("senderPublicKey"), n.toAssetId("assetId"), n.toAssetId("feeAssetId"), n.toBigNumber("timestamp"), n.toBigNumber("amount"), n.toBigNumber("fee"), n.toAddressOrAlias("recipient"), n.toStringWithLength("attachment")]), r.parseReissueTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toNumber("chainId"), n.toBase58("senderPublicKey"), n.toBase58("assetId"), n.toBigNumber("quantity"), n.toBoolean("reissuable"), n.toBigNumber("fee"), n.toBigNumber("timestamp")]), r.parseBurnTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toNumber("chainId"), n.toBase58("senderPublicKey"), n.toBase58("assetId"), n.toBigNumber("quantity"), n.toBigNumber("fee"), n.toBigNumber("timestamp")]), r.parseLeaseTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toAssetId("leaseAssetId"), n.toBase58("senderPublicKey"), n.toAddressOrAlias("recipient"), n.toBigNumber("amount"), n.toBigNumber("fee"), n.toBigNumber("timestamp")]), r.parseCancelLeaseTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toNumber("chainId"), n.toBase58("senderPublicKey"), n.toBigNumber("fee"), n.toBigNumber("timestamp"), n.toBase58("transactionId")]), r.parseCreateAliasTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toBase58("senderPublicKey"), n.toNewAlias("alias"), n.toBigNumber("fee"), n.toBigNumber("timestamp")]), r.parseMassTransferTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toBase58("senderPublicKey"), n.toAssetId("assetId"), n.toTransfers("transfers"), n.toBigNumber("timestamp"), n.toBigNumber("fee"), n.toStringWithLength("attachment")]), r.parseDataTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toBase58("senderPublicKey"), n.toData("data"), n.toBigNumber("timestamp"), n.toBigNumber("fee")]), r.parseSetScriptTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toNumber("chainId"), n.toBase58("senderPublicKey"), n.toScript("script"), n.toBigNumber("fee"), n.toBigNumber("timestamp")]), r.parseSetAssetScriptTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toNumber("chainId"), n.toBase58("senderPublicKey"), n.toBase58("assetId"), n.toBigNumber("fee"), n.toBigNumber("timestamp"), n.toScript("script")]), r.parseSponsorshipTx = n.parseConstructor([n.toNumber("type"), n.toNumber("version"), n.toBase58("senderPublicKey"), n.toBase58("assetId"), n.toBigNumber("minSponsoredAssetFee"), n.toBigNumber("fee"), n.toBigNumber("timestamp")])
        },
        9940: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var n = t(6254),
                o = t(6080),
                a = t(6648),
                i = t(5949),
                s = function(e) {
                    switch (e) {
                        case 0:
                            return "integer";
                        case 1:
                            return "boolean";
                        case 2:
                            return "binary";
                        case 3:
                            return "string";
                        default:
                            throw new Error("Unknown data field code " + e + "!")
                    }
                },
                u = function(e, r) {
                    return function(t, n) {
                        return t.data || (t.data = Object.create(null)), t.data[e] = c(r)(t, n), t
                    }
                },
                c = function(e) {
                    return function(r, t) {
                        var n = r.cursor || 0,
                            o = e(t, n),
                            a = o.shift,
                            i = o.value;
                        return function(e, r) {
                            e.cursor || (e.cursor = 0), e.cursor += r
                        }(r, a), i
                    }
                },
                l = function(e) {
                    return function(r, t) {
                        return {
                            value: n.default.byteArrayToBigInteger(r.slice(t, t + e)),
                            shift: e
                        }
                    }
                },
                f = function(e) {
                    return function(r, t) {
                        return {
                            value: n.default.byteArrayToSignBigInteger(r.slice(t, t + e)),
                            shift: e
                        }
                    }
                },
                p = function(e) {
                    return function(r, t) {
                        var n = l(e)(r, t);
                        return {
                            shift: e,
                            value: n.value.toNumber()
                        }
                    }
                },
                h = function(e, r) {
                    return {
                        value: !!e[r],
                        shift: 1
                    }
                },
                y = function(e) {
                    return function(r, t) {
                        var o = n.default.byteArrayToString(r.slice(t, t + e));
                        return {
                            shift: e,
                            value: o
                        }
                    }
                },
                d = function(e, r) {
                    var t = p(2)(e, r),
                        n = y(t.value)(e, r + 2).value;
                    return {
                        shift: t.value + 2,
                        value: n
                    }
                },
                m = function(e, r, t) {
                    var n = t || 32;
                    return {
                        value: o.default.encode(e.slice(r, r + n)),
                        shift: n
                    }
                },
                g = function(e, r) {
                    return e[r] ? {
                        shift: 33,
                        value: m(e, r + 1).value
                    } : {
                        shift: 1,
                        value: "WAVES"
                    }
                },
                w = function(e, r) {
                    if (e[r] === i.ALIAS_VERSION) {
                        var t = d(e, r + 2);
                        return {
                            shift: t.shift + 2,
                            value: t.value
                        }
                    }
                    return m(e, r, 26)
                },
                A = function(e, r) {
                    return {
                        shift: p(2)(e, r).value + 2,
                        value: d(e, r + 4).value
                    }
                },
                b = function(e, r) {
                    for (var t = p(2)(e, r).value, n = [], o = 2, a = 0; a < t; a++) {
                        var i = w(e, r + o);
                        o += i.shift;
                        var s = l(8)(e, r + o);
                        o += s.shift, n.push({
                            recipient: i.value,
                            amount: s.value
                        })
                    }
                    return {
                        shift: o,
                        value: n
                    }
                },
                v = function(e, r) {
                    if (0 === e[r]) return {
                        shift: 1,
                        value: "base64:"
                    };
                    var t = p(2)(e, r + 1),
                        n = r + 1 + t.shift,
                        o = r + 1 + t.shift + t.value;
                    return {
                        value: "base64:" + a.fromByteArray(e.slice(n, o)),
                        shift: o - r
                    }
                },
                E = function(e, t) {
                    for (var n = r.getNumberFromBytes(e, 2, t), o = [], i = 2, u = 0; u < n; u++) {
                        var c = r.getNumberFromBytes(e, 2, t + i);
                        i += 2;
                        var l = y(c)(e, t + i).value;
                        i += c;
                        var p = r.getNumberFromBytes(e, 1, t + i);
                        i += 1;
                        var d = s(p),
                            m = void 0;
                        switch (p) {
                            case 0:
                                m = f(8)(e, t + i).value, i += 8;
                                break;
                            case 1:
                                var g = h(e, t + i);
                                m = g.value, i += g.shift;
                                break;
                            case 2:
                                var w = r.getNumberFromBytes(e, 2, t + i);
                                i += 2, m = "base64:" + a.fromByteArray(e.slice(t + i, t + i + w)), i += w;
                                break;
                            case 3:
                                var A = r.getNumberFromBytes(e, 2, t + i);
                                i += 2, m = y(A)(e, t + i).value, i += A
                        }
                        o.push({
                            key: l,
                            type: d,
                            value: m
                        })
                    }
                    return {
                        value: o,
                        shift: i
                    }
                };
            r.getNumberFromBytes = function(e, r, t) {
                return void 0 === t && (t = 0), p(r)(e, t).value
            }, r.toBoolean = function(e) {
                return u(e, h)
            }, r.toBigNumber = function(e) {
                return u(e, l(8))
            }, r.toNumber = function(e) {
                return u(e, p(1))
            }, r.toStringWithLength = function(e) {
                return u(e, d)
            }, r.toBase58 = function(e) {
                return u(e, m)
            }, r.toAssetId = function(e) {
                return u(e, g)
            }, r.toAddressOrAlias = function(e) {
                return u(e, w)
            }, r.toNewAlias = function(e) {
                return u(e, A)
            }, r.toTransfers = function(e) {
                return u(e, b)
            }, r.toScript = function(e) {
                return u(e, v)
            }, r.toData = function(e) {
                return u(e, E)
            }, r.parseConstructor = function(e) {
                return function(r) {
                    return e.reduce((function(e, t) {
                        return t(e, r)
                    }), Object.create(null)).data
                }
            }
        }
    }
]);