/*! For license information please see vendors.1f2ac203aebcc5cafcd1.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [41], {
        1406: function(e, t, n) {
            e.exports = function(e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var i = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
                }
                return n.m = e, n.c = t, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var i in e) n.d(r, i, function(t) {
                            return e[t]
                        }.bind(null, i));
                    return r
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 22)
            }([function(e, t) {
                e.exports = n(551)
            }, function(e, t) {
                e.exports = n(552)
            }, function(e, t) {
                e.exports = n(462)
            }, function(e, t) {
                e.exports = n(463)
            }, function(e, t) {
                e.exports = n(3326)
            }, function(e, t) {
                e.exports = n(151)
            }, function(e, t) {
                e.exports = n(1809)
            }, function(e, t) {
                e.exports = n(2363)
            }, function(e, t) {
                e.exports = n(282)
            }, function(e, t) {
                e.exports = n(3333)
            }, function(e, t) {
                e.exports = n(3334)
            }, function(e, t) {
                e.exports = n(1383)
            }, function(e, t) {
                e.exports = n(3335)
            }, function(e, t) {
                e.exports = n(85)
            }, function(e, t) {
                e.exports = n(547)
            }, function(e, t) {
                e.exports = n(548)
            }, function(e, t) {
                e.exports = n(549)
            }, function(e, t) {
                e.exports = n(3337)
            }, function(e, t) {
                e.exports = n(3354)
            }, function(e, t) {
                e.exports = n(3415)
            }, function(e) {
                e.exports = {
                    a: "2.6.6"
                }
            }, function(e, t) {
                e.exports = n(338)
            }, function(e, t, n) {
                "use strict";
                n.r(t);
                var r = {};
                n.r(r), n.d(r, "byte2hexStr", (function() {
                    return B
                })), n.d(r, "bytesToString", (function() {
                    return F
                })), n.d(r, "hextoString", (function() {
                    return O
                })), n.d(r, "byteArray2hexStr", (function() {
                    return D
                })), n.d(r, "base64DecodeFromString", (function() {
                    return q
                })), n.d(r, "base64EncodeToString", (function() {
                    return K
                }));
                var i = {};
                n.r(i), n.d(i, "bin2String", (function() {
                    return V
                })), n.d(i, "arrayEquals", (function() {
                    return z
                })), n.d(i, "stringToBytes", (function() {
                    return M
                })), n.d(i, "byte2hexStr", (function() {
                    return B
                })), n.d(i, "bytesToString", (function() {
                    return F
                })), n.d(i, "hextoString", (function() {
                    return O
                })), n.d(i, "byteArray2hexStr", (function() {
                    return D
                })), n.d(i, "base64DecodeFromString", (function() {
                    return q
                })), n.d(i, "base64EncodeToString", (function() {
                    return K
                })), n.d(i, "hexChar2byte", (function() {
                    return J
                })), n.d(i, "isHexChar", (function() {
                    return G
                })), n.d(i, "hexStr2byteArray", (function() {
                    return Y
                })), n.d(i, "strToDate", (function() {
                    return X
                })), n.d(i, "isNumber", (function() {
                    return $
                })), n.d(i, "getStringType", (function() {
                    return Z
                }));
                var o = {};
                n.r(o), n.d(o, "encode58", (function() {
                    return ne
                })), n.d(o, "decode58", (function() {
                    return re
                }));
                var s = {};
                n.r(s), n.d(s, "getBase58CheckAddress", (function() {
                    return he
                })), n.d(s, "decodeBase58Address", (function() {
                    return fe
                })), n.d(s, "signTransaction", (function() {
                    return ve
                })), n.d(s, "arrayToBase64String", (function() {
                    return pe
                })), n.d(s, "signBytes", (function() {
                    return ge
                })), n.d(s, "getRowBytesFromTransactionBase64", (function() {
                    return me
                })), n.d(s, "genPriKey", (function() {
                    return ye
                })), n.d(s, "computeAddress", (function() {
                    return be
                })), n.d(s, "getAddressFromPriKey", (function() {
                    return ke
                })), n.d(s, "decode58Check", (function() {
                    return xe
                })), n.d(s, "isAddressValid", (function() {
                    return we
                })), n.d(s, "getBase58CheckAddressFromPriKeyBase64String", (function() {
                    return Ae
                })), n.d(s, "getHexStrAddressFromPriKeyBase64String", (function() {
                    return Ie
                })), n.d(s, "getAddressFromPriKeyBase64String", (function() {
                    return We
                })), n.d(s, "getPubKeyFromPriKey", (function() {
                    return Se
                })), n.d(s, "ECKeySign", (function() {
                    return Pe
                })), n.d(s, "SHA256", (function() {
                    return _e
                })), n.d(s, "passwordToAddress", (function() {
                    return Ce
                })), n.d(s, "pkToAddress", (function() {
                    return Ne
                }));
                var a = {};
                n.r(a), n.d(a, "generateAccount", (function() {
                    return Te
                }));
                var u = {};
                n.r(u), n.d(u, "decodeParams", (function() {
                    return Ee
                })), n.d(u, "encodeParams", (function() {
                    return Be
                }));
                var c = n(0),
                    l = n.n(c),
                    d = n(1),
                    h = n.n(d),
                    f = n(8),
                    v = n.n(f),
                    p = n(2),
                    g = n.n(p),
                    m = n(3),
                    y = n.n(m),
                    b = n(14),
                    k = n.n(b),
                    x = n(15),
                    w = n.n(x),
                    A = n(11),
                    I = n.n(A),
                    W = n(16),
                    S = n.n(W),
                    P = n(5),
                    _ = n.n(P),
                    C = n(17),
                    N = n.n(C),
                    T = n(4),
                    j = n.n(T);

                function E() {
                    var e = this;
                    this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", this.encode = function(t) {
                        for (var n, r, i, o, s, a, u, c = "", l = 0; l < t.length;) o = (n = t.charCodeAt(l++)) >> 2, s = (3 & n) << 4 | (r = t.charCodeAt(l++)) >> 4, a = (15 & r) << 2 | (i = t.charCodeAt(l++)) >> 6, u = 63 & i, isNaN(r) ? a = u = 64 : isNaN(i) && (u = 64), c = c + e._keyStr.charAt(o) + e._keyStr.charAt(s) + e._keyStr.charAt(a) + e._keyStr.charAt(u);
                        return c
                    }, this.encodeIgnoreUtf8 = function(t) {
                        for (var n, r, i, o, s, a, u, c = "", l = 0; l < t.length;) o = (n = t[l++]) >> 2, s = (3 & n) << 4 | (r = t[l++]) >> 4, a = (15 & r) << 2 | (i = t[l++]) >> 6, u = 63 & i, isNaN(r) ? a = u = 64 : isNaN(i) && (u = 64), c = c + e._keyStr.charAt(o) + e._keyStr.charAt(s) + e._keyStr.charAt(a) + e._keyStr.charAt(u);
                        return c
                    }, this.decode = function(t) {
                        var n, r, i, o, s, a, u = "",
                            c = 0;
                        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length;) n = e._keyStr.indexOf(t.charAt(c++)) << 2 | (o = e._keyStr.indexOf(t.charAt(c++))) >> 4, r = (15 & o) << 4 | (s = e._keyStr.indexOf(t.charAt(c++))) >> 2, i = (3 & s) << 6 | (a = e._keyStr.indexOf(t.charAt(c++))), u += String.fromCharCode(n), 64 != s && (u += String.fromCharCode(r)), 64 != a && (u += String.fromCharCode(i));
                        return e._utf8_decode(u)
                    }, this.decodeToByteArray = function(t) {
                        var n, r, i, o, s, a, u = "",
                            c = 0;
                        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length;) n = e._keyStr.indexOf(t.charAt(c++)) << 2 | (o = e._keyStr.indexOf(t.charAt(c++))) >> 4, r = (15 & o) << 4 | (s = e._keyStr.indexOf(t.charAt(c++))) >> 2, i = (3 & s) << 6 | (a = e._keyStr.indexOf(t.charAt(c++))), u += String.fromCharCode(n), 64 != s && (u += String.fromCharCode(r)), 64 != a && (u += String.fromCharCode(i));
                        return e._out2ByteArray(u)
                    }, this._out2ByteArray = function(e) {
                        for (var t = new Array(e.length), n = 0, r = 0; n < e.length;) r = e.charCodeAt(n), t[n] = r, n++;
                        return t
                    }, this._utf8_encode = function(e) {
                        e = e.replace(/\r\n/g, "\n");
                        for (var t = "", n = 0; n < e.length; n++) {
                            var r = e.charCodeAt(n);
                            r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
                        }
                        return t
                    }, this._utf8_decode = function(e) {
                        for (var t = "", n = 0, r = 0, i = 0, o = 0; n < e.length;)(r = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(r), n++) : r > 191 && r < 224 ? (i = e.charCodeAt(n + 1), t += String.fromCharCode((31 & r) << 6 | 63 & i), n += 2) : (i = e.charCodeAt(n + 1), o = e.charCodeAt(n + 2), t += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | 63 & o), n += 3);
                        return t
                    }
                }

                function B(e) {
                    if ("number" != typeof e) throw new Error("Input must be a number");
                    if (e < 0 || e > 255) throw new Error("Input must be a byte");
                    var t = "";
                    return (t += "0123456789ABCDEF".charAt(e >> 4)) + "0123456789ABCDEF".charAt(15 & e)
                }

                function F(e) {
                    if ("string" == typeof e) return e;
                    for (var t = "", n = 0; n < e.length; n++) {
                        var r = e[n].toString(2),
                            i = r.match(/^1+?(?=0)/);
                        if (i && 8 === r.length) {
                            for (var o = i[0].length, s = e[n].toString(2).slice(7 - o), a = 1; a < o; a++) s += e[a + n].toString(2).slice(2);
                            t += String.fromCharCode(parseInt(s, 2)), n += o - 1
                        } else t += String.fromCharCode(e[n])
                    }
                    return t
                }

                function O(e) {
                    for (var t = e.replace(/^0x/, "").split(""), n = "", r = 0; r < t.length / 2; r++) {
                        var i = "0x".concat(t[2 * r]).concat(t[2 * r + 1]);
                        n += String.fromCharCode(i)
                    }
                    return n
                }

                function D(e) {
                    for (var t = "", n = 0; n < e.length; n++) t += B(e[n]);
                    return t
                }

                function q(e) {
                    return (new E).decodeToByteArray(e)
                }

                function K(e) {
                    return (new E).encodeIgnoreUtf8(e)
                }
                var H = n(6),
                    U = n.n(H),
                    L = "41",
                    R = /^(41)/;

                function V(e) {
                    return F(e)
                }

                function z(e, t, n) {
                    if (e.length != t.length) return !1;
                    var r;
                    for (r = 0; r < e.length; r++)
                        if (n) {
                            if (e[r] != t[r]) return !1
                        } else if (JSON.stringify(e[r]) != JSON.stringify(t[r])) return !1;
                    return !0
                }

                function M(e) {
                    if ("string" != typeof e) throw new Error("The passed string is not a string");
                    var t, n, r = new Array;
                    t = e.length;
                    for (var i = 0; i < t; i++)(n = e.charCodeAt(i)) >= 65536 && n <= 1114111 ? (r.push(n >> 18 & 7 | 240), r.push(n >> 12 & 63 | 128), r.push(n >> 6 & 63 | 128), r.push(63 & n | 128)) : n >= 2048 && n <= 65535 ? (r.push(n >> 12 & 15 | 224), r.push(n >> 6 & 63 | 128), r.push(63 & n | 128)) : n >= 128 && n <= 2047 ? (r.push(n >> 6 & 31 | 192), r.push(63 & n | 128)) : r.push(255 & n);
                    return r
                }

                function J(e) {
                    var t;
                    if (e >= "A" && e <= "F" ? t = e.charCodeAt(0) - "A".charCodeAt(0) + 10 : e >= "a" && e <= "f" ? t = e.charCodeAt(0) - "a".charCodeAt(0) + 10 : e >= "0" && e <= "9" && (t = e.charCodeAt(0) - "0".charCodeAt(0)), "number" == typeof t) return t;
                    throw new Error("The passed hex char is not a valid hex char")
                }

                function G(e) {
                    return e >= "A" && e <= "F" || e >= "a" && e <= "f" || e >= "0" && e <= "9" ? 1 : 0
                }

                function Y(e) {
                    if ("string" != typeof e) throw new Error("The passed string is not a string");
                    for (var t = Array(), n = 0, r = 0, i = 0, o = 0; o < e.length; o++) {
                        var s = e.charAt(o);
                        if (!G(s)) throw new Error("The passed hex char is not a valid hex string");
                        n <<= 4, n += J(s), 0 == ++r % 2 && (t[i++] = n, n = 0)
                    }
                    return t
                }

                function X(e) {
                    if (!/^\d{4}-\d{2}-\d{2}( \d{2}-\d{2}-\d{2}|)/.test(e)) throw new Error("The passed date string is not valid");
                    var t = e.split(" "),
                        n = t[0].split("-"),
                        r = parseInt(n[0], 10),
                        i = parseInt(n[1], 10) - 1,
                        o = parseInt(n[2], 10);
                    if (t.length > 1) {
                        var s = t[1].split("-"),
                            a = parseInt(s[0], 10),
                            u = parseInt(s[1], 10),
                            c = parseInt(s[2], 10);
                        return new Date(r, i, o, a, u, c)
                    }
                    return new Date(r, i, o)
                }

                function $(e) {
                    return e >= "0" && e <= "9" ? 1 : 0
                }

                function Z(e) {
                    if (null == e) return -1;
                    if ("string" != typeof e) return -1;
                    if (0 == e.length || "" == e) return -1;
                    var t = 0;
                    if (40 == e.length)
                        for (; t < 40 && G(e.charAt(t)); t++);
                    if (40 == t) return 1;
                    for (t = 0; t < e.length && $(e.charAt(t)); t++);
                    if (t == e.length) return 2;
                    for (t = 0; t < e.length; t++)
                        if (e.charAt(t) > " ") return 3;
                    return -1
                }
                for (var Q = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", ee = {}, te = 0; te < Q.length; te++) ee[Q.charAt(te)] = te;

                function ne(e) {
                    if (0 === e.length) return "";
                    var t, n, r = [0];
                    for (t = 0; t < e.length; t++) {
                        for (n = 0; n < r.length; n++) r[n] <<= 8;
                        r[0] += e[t];
                        var i = 0;
                        for (n = 0; n < r.length; ++n) r[n] += i, i = r[n] / 58 | 0, r[n] %= 58;
                        for (; i;) r.push(i % 58), i = i / 58 | 0
                    }
                    for (t = 0; 0 === e[t] && t < e.length - 1; t++) r.push(0);
                    return r.reverse().map((function(e) {
                        return Q[e]
                    })).join("")
                }

                function re(e) {
                    if (0 === e.length) return [];
                    var t, n, r = [0];
                    for (t = 0; t < e.length; t++) {
                        var i = e[t];
                        if (!(i in ee)) throw new Error("Non-base58 character");
                        for (n = 0; n < r.length; n++) r[n] *= 58;
                        r[0] += ee[i];
                        var o = 0;
                        for (n = 0; n < r.length; ++n) r[n] += o, o = r[n] >> 8, r[n] &= 255;
                        for (; o;) r.push(255 & o), o >>= 8
                    }
                    for (t = 0;
                        "1" === e[t] && t < e.length - 1; t++) r.push(0);
                    return r.reverse()
                }
                var ie = n(13),
                    oe = n(10),
                    se = oe.utils.keccak256,
                    ae = oe.utils.sha256,
                    ue = oe.utils.toUtf8Bytes,
                    ce = oe.utils.recoverAddress,
                    le = oe.utils.SigningKey,
                    de = oe.utils.AbiCoder;

                function he(e) {
                    var t = _e(e),
                        n = _e(t).slice(0, 4);
                    return ne(n = e.concat(n))
                }

                function fe(e) {
                    if ("string" != typeof e) return !1;
                    if (e.length <= 4) return !1;
                    var t = re(e);
                    if (e.length <= 4) return !1;
                    var n = t.length - 4,
                        r = t.slice(n),
                        i = _e(t = t.slice(0, n)),
                        o = _e(i).slice(0, 4);
                    if (r[0] == o[0] && r[1] == o[1] && r[2] == o[2] && r[3] == o[3]) return t;
                    throw new Error("Invalid address provided")
                }

                function ve(e, t) {
                    "string" == typeof e && (e = Y(e));
                    var n = Pe(Y(t.txID), e);
                    return Array.isArray(t.signature) ? t.signature.includes(n) || t.signature.push(n) : t.signature = [n], t
                }

                function pe(e) {
                    return btoa(String.fromCharCode.apply(String, U()(e)))
                }

                function ge(e, t) {
                    return "string" == typeof e && (e = Y(e)), Pe(_e(t), e)
                }

                function me(e) {
                    var t = q(e);
                    return proto.protocol.Transaction.deserializeBinary(t).getRawData().serializeBinary()
                }

                function ye() {
                    for (var e = new ie.ec("secp256k1").genKeyPair().getPrivate().toString("hex"); e.length < 64;) e = "0".concat(e);
                    return Y(e)
                }

                function be(e) {
                    65 === e.length && (e = e.slice(1));
                    var t = se(e).toString().substring(2);
                    return Y(L + t.substring(24))
                }

                function ke(e) {
                    return be(Se(e))
                }

                function xe(e) {
                    var t = re(e);
                    if (t.length <= 4) return !1;
                    var n = t.slice(0, t.length - 4),
                        r = _e(n),
                        i = _e(r);
                    return i[0] === t[n.length] && i[1] === t[n.length + 1] && i[2] === t[n.length + 2] && i[3] === t[n.length + 3] && n
                }

                function we(e) {
                    if ("string" != typeof e) return !1;
                    if (34 !== e.length) return !1;
                    var t = re(e);
                    if (25 !== t.length) return !1;
                    if (65 !== t[0]) return !1;
                    var n = t.slice(21),
                        r = _e(t = t.slice(0, 21)),
                        i = _e(r).slice(0, 4);
                    return n[0] == i[0] && n[1] == i[1] && n[2] == i[2] && n[3] == i[3]
                }

                function Ae(e) {
                    return he(be(Se(q(e))))
                }

                function Ie(e) {
                    return D(be(Se(q(e))))
                }

                function We(e) {
                    return K(be(Se(q(e))))
                }

                function Se(e) {
                    for (var t = new ie.ec("secp256k1").keyFromPrivate(e, "bytes").getPublic(), n = t.x, r = t.y, i = n.toString("hex"); i.length < 64;) i = "0".concat(i);
                    for (var o = r.toString("hex"); o.length < 64;) o = "0".concat(o);
                    return Y("04".concat(i).concat(o))
                }

                function Pe(e, t) {
                    for (var n = new ie.ec("secp256k1").keyFromPrivate(t, "bytes").sign(e), r = n.r, i = n.s, o = n.recoveryParam, s = r.toString("hex"); s.length < 64;) s = "0".concat(s);
                    for (var a = i.toString("hex"); a.length < 64;) a = "0".concat(a);
                    return s + a + B(o)
                }

                function _e(e) {
                    var t = D(e);
                    return Y(ae("0x" + t).replace(/^0x/, ""))
                }

                function Ce(e) {
                    return he(ke(q(e)))
                }

                function Ne(e) {
                    return he(ke(Y(e)))
                }

                function Te() {
                    var e = ye(),
                        t = Se(e),
                        n = ke(e);
                    return {
                        privateKey: D(e),
                        publicKey: D(t),
                        address: {
                            base58: he(n),
                            hex: D(n)
                        }
                    }
                }
                var je = new de;

                function Ee(e, t, n, r) {
                    if (n && "boolean" != typeof n || (r = n, n = t, t = e, e = []), r && n.replace(/^0x/, "").length % 64 == 8 && (n = "0x" + n.replace(/^0x/, "").substring(8)), n.replace(/^0x/, "").length % 64) throw new Error("The encoded string is not valid. Its length must be a multiple of 64.");
                    return je.decode(t, n).reduce((function(n, r, i) {
                        return "address" == t[i] && (r = L + r.substr(2).toLowerCase()), e.length ? n[e[i]] = r : n.push(r), n
                    }), e.length ? {} : [])
                }

                function Be(e, t) {
                    for (var n = 0; n < e.length; n++) "address" === e[n] && (t[n] = dt.address.toHex(t[n]).replace(R, "0x"));
                    return je.encode(e, t)
                }
                var Fe, Oe = n(18),
                    De = n.n(Oe),
                    qe = n(9),
                    Ke = n.n(qe),
                    He = {
                        isValidURL: function(e) {
                            return "string" == typeof e && De.a.isURL(e.toString(), {
                                protocols: ["http", "https"],
                                require_tld: !1
                            })
                        },
                        isObject: function(e) {
                            return e === Object(e) && "[object Array]" !== Object.prototype.toString.call(e)
                        },
                        isArray: function(e) {
                            return Array.isArray(e)
                        },
                        isJson: function(e) {
                            try {
                                return !!JSON.parse(e)
                            } catch (e) {
                                return !1
                            }
                        },
                        isBoolean: function(e) {
                            return "boolean" == typeof e
                        },
                        isBigNumber: function(e) {
                            return e && (e instanceof Ke.a || e.constructor && "BigNumber" === e.constructor.name)
                        },
                        isString: function(e) {
                            return "string" == typeof e || e && e.constructor && "String" === e.constructor.name
                        },
                        isFunction: function(e) {
                            return "function" == typeof e
                        },
                        isHex: function(e) {
                            return "string" == typeof e && !isNaN(parseInt(e, 16)) && /^(0x|)[a-fA-F0-9]+$/.test(e)
                        },
                        isInteger: function(e) {
                            return null !== e && Number.isInteger(Number(e))
                        },
                        hasProperty: function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        },
                        hasProperties: function(e) {
                            for (var t = this, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                            return r.length && !r.map((function(n) {
                                return t.hasProperty(e, n)
                            })).includes(!1)
                        },
                        injectPromise: function(e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            return new Promise((function(t, r) {
                                e.apply(void 0, n.concat([function(e, n) {
                                    e ? r(e) : t(n)
                                }]))
                            }))
                        },
                        promiseInjector: function(e) {
                            var t = this;
                            return function(n) {
                                for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                                return t.injectPromise.apply(t, [n.bind(e)].concat(i))
                            }
                        },
                        mapEvent: function(e) {
                            var t = {
                                block: e.block_number,
                                timestamp: e.block_timestamp,
                                contract: e.contract_address,
                                name: e.event_name,
                                transaction: e.transaction_id,
                                result: e.result,
                                resourceNode: e.resource_Node || (e._unconfirmed ? "fullNode" : "solidityNode")
                            };
                            return e._unconfirmed && (t.unconfirmed = e._unconfirmed), e._fingerprint && (t.fingerprint = e._fingerprint), t
                        },
                        parseEvent: function(e, t) {
                            var n = t.inputs;
                            if (!e.result) return e;
                            if (this.isObject(e.result))
                                for (var r = 0; r < n.length; r++) {
                                    var i = n[r];
                                    "address" == i.type && i.name in e.result && (e.result[i.name] = L + e.result[i.name].substr(2).toLowerCase())
                                } else this.isArray(e.result) && (e.result = e.result.reduce((function(e, t, r) {
                                    var i = n[r],
                                        o = i.name;
                                    return "address" == i.type && (t = L + t.substr(2).toLowerCase()), e[o] = t, e
                                }), {}));
                            return e
                        },
                        padLeft: function(e, t, n) {
                            for (var r = e.toString(); r.length < n;) r = t + r;
                            return r
                        },
                        isNotNullOrUndefined: function(e) {
                            return null != e
                        },
                        sleep: function() {
                            var e = h()(l.a.mark((function e() {
                                var t, n = arguments;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = n.length > 0 && void 0 !== n[0] ? n[0] : 1e3, e.abrupt("return", new Promise((function(e) {
                                                return setTimeout(e, t)
                                            })));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    },
                    Ue = j()({}, He, {
                        code: i,
                        accounts: a,
                        base58: o,
                        bytes: r,
                        crypto: s,
                        abi: u
                    }),
                    Le = {
                        HttpProvider: function() {
                            function e(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e4,
                                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "/";
                                if (g()(this, e), !Ue.isValidURL(t)) throw new Error("Invalid URL provided to HttpProvider");
                                if (isNaN(n) || n < 0) throw new Error("Invalid timeout duration provided");
                                if (!Ue.isObject(o)) throw new Error("Invalid headers object provided");
                                t = t.replace(/\/+$/, ""), this.host = t, this.timeout = n, this.user = r, this.password = i, this.headers = o, this.statusPage = s, this.instance = N.a.create({
                                    baseURL: t,
                                    timeout: n,
                                    headers: o,
                                    auth: r && {
                                        user: r,
                                        password: i
                                    }
                                })
                            }
                            return y()(e, [{
                                key: "setStatusPage",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/";
                                    this.statusPage = e
                                }
                            }, {
                                key: "isConnected",
                                value: function() {
                                    var e = h()(l.a.mark((function e() {
                                        var t, n = arguments;
                                        return l.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : this.statusPage, e.abrupt("return", this.request(t).then((function(e) {
                                                        return Ue.hasProperties(e, "blockID", "block_header")
                                                    })).catch((function() {
                                                        return !1
                                                    })));
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, this)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }()
                            }, {
                                key: "request",
                                value: function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "get";
                                    return n = n.toLowerCase(), this.instance.request({
                                        data: "post" == n && Object.keys(t).length ? t : null,
                                        params: "get" == n && t,
                                        url: e,
                                        method: n
                                    }).then((function(e) {
                                        return e.data
                                    }))
                                }
                            }]), e
                        }()
                    },
                    Re = n(19),
                    Ve = n.n(Re),
                    ze = n(20),
                    Me = n(12),
                    Je = n.n(Me),
                    Ge = n(7),
                    Ye = n.n(Ge),
                    Xe = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (g()(this, e), !t || !t instanceof dt) throw new Error("Expected instance of TronWeb");
                            this.tronWeb = t
                        }
                        return y()(e, [{
                            key: "invalid",
                            value: function(e) {
                                return e.msg || "Invalid ".concat(e.name).concat("address" === e.type ? " address" : "", " provided")
                            }
                        }, {
                            key: "notPositive",
                            value: function(e) {
                                return "".concat(e.name, " must be a positive integer")
                            }
                        }, {
                            key: "notEqual",
                            value: function(e) {
                                return e.msg || "".concat(e.names[0], " can not be equal to ").concat(e.names[1])
                            }
                        }, {
                            key: "notValid",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Function,
                                    n = {},
                                    r = !1,
                                    i = !0,
                                    o = !1,
                                    s = void 0;
                                try {
                                    for (var a, u = e[Symbol.iterator](); !(i = (a = u.next()).done); i = !0) {
                                        var c = a.value,
                                            l = c.name,
                                            d = c.names,
                                            h = c.value,
                                            f = c.type,
                                            v = c.gt,
                                            p = c.lt,
                                            g = c.gte,
                                            m = c.lte;
                                        if (c.se, !c.optional || Ue.isNotNullOrUndefined(h) && ("boolean" === f || !1 !== h)) {
                                            switch (n[c.name] = c.value, f) {
                                                case "address":
                                                    this.tronWeb.isAddress(h) ? n[l] = this.tronWeb.address.toHex(h) : r = !0;
                                                    break;
                                                case "integer":
                                                    (!Ue.isInteger(h) || "number" == typeof v && h <= c.gt || "number" == typeof p && h >= c.lt || "number" == typeof g && h < c.gte || "number" == typeof m && h > c.lte) && (r = !0);
                                                    break;
                                                case "positive-integer":
                                                    if (!Ue.isInteger(h) || h <= 0) return void t(this.notPositive(c));
                                                    break;
                                                case "tokenId":
                                                    Ue.isString(h) && h.length || (r = !0);
                                                    break;
                                                case "notEmptyObject":
                                                    Ue.isObject(h) && Object.keys(h).length || (r = !0);
                                                    break;
                                                case "notEqual":
                                                    if (n[d[0]] === n[d[1]]) return t(this.notEqual(c)), !0;
                                                    break;
                                                case "resource":
                                                    ["BANDWIDTH", "ENERGY"].includes(h) || (r = !0);
                                                    break;
                                                case "url":
                                                    Ue.isValidURL(h) || (r = !0);
                                                    break;
                                                case "hex":
                                                    Ue.isHex(h) || (r = !0);
                                                    break;
                                                case "array":
                                                    Array.isArray(h) || (r = !0);
                                                    break;
                                                case "not-empty-string":
                                                    Ue.isString(h) && h.length || (r = !0);
                                                    break;
                                                case "boolean":
                                                    Ue.isBoolean(h) || (r = !0);
                                                    break;
                                                case "string":
                                                    (!Ue.isString(h) || "number" == typeof v && h.length <= c.gt || "number" == typeof p && h.length >= c.lt || "number" == typeof g && h.length < c.gte || "number" == typeof m && h.length > c.lte) && (r = !0)
                                            }
                                            if (r) return t(this.invalid(c)), !0
                                        }
                                    }
                                } catch (e) {
                                    o = !0, s = e
                                } finally {
                                    try {
                                        i || null == u.return || u.return()
                                    } finally {
                                        if (o) throw s
                                    }
                                }
                                return !1
                            }
                        }]), e
                    }();

                function $e(e) {
                    return Fe.tronWeb.address.toHex(e)
                }

                function Ze(e) {
                    return Fe.tronWeb.fromUtf8(e)
                }

                function Qe(e, t) {
                    return e.Error ? t(e.Error) : e.result && e.result.message ? t(Fe.tronWeb.toUtf8(e.result.message)) : t(null, e)
                }
                var et = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (g()(this, e), !t || !t instanceof dt) throw new Error("Expected instance of TronWeb");
                            Fe = this, this.tronWeb = t, this.injectPromise = Ue.promiseInjector(this), this.validator = new Xe(t)
                        }
                        return y()(e, [{
                            key: "sendTrx",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.tronWeb.defaultAddress.hex,
                                    r = arguments.length > 3 ? arguments[3] : void 0,
                                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                if (Ue.isFunction(r) && (i = r, r = {}), Ue.isFunction(n) ? (i = n, n = this.tronWeb.defaultAddress.hex) : Ue.isObject(n) && (r = n, n = this.tronWeb.defaultAddress.hex), !i) return this.injectPromise(this.sendTrx, e, t, n, r);
                                if (t = parseInt(t), !this.validator.notValid([{
                                        name: "recipient",
                                        type: "address",
                                        value: e
                                    }, {
                                        name: "origin",
                                        type: "address",
                                        value: n
                                    }, {
                                        names: ["recipient", "origin"],
                                        type: "notEqual",
                                        msg: "Cannot transfer TRX to the same account"
                                    }, {
                                        name: "amount",
                                        type: "integer",
                                        gt: 0,
                                        value: t
                                    }], i)) {
                                    var o = {
                                        to_address: $e(e),
                                        owner_address: $e(n),
                                        amount: t
                                    };
                                    r && r.permissionId && (o.Permission_id = r.permissionId), this.tronWeb.fullNode.request("wallet/createtransaction", o, "post").then((function(e) {
                                        return Qe(e, i)
                                    })).catch((function(e) {
                                        return i(e)
                                    }))
                                }
                            }
                        }, {
                            key: "sendToken",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.tronWeb.defaultAddress.hex,
                                    i = arguments.length > 4 ? arguments[4] : void 0,
                                    o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                                if (Ue.isFunction(i) && (o = i, i = {}), Ue.isFunction(r) ? (o = r, r = this.tronWeb.defaultAddress.hex) : Ue.isObject(r) && (i = r, r = this.tronWeb.defaultAddress.hex), !o) return this.injectPromise(this.sendToken, e, t, n, r, i);
                                if (t = parseInt(t), !this.validator.notValid([{
                                        name: "recipient",
                                        type: "address",
                                        value: e
                                    }, {
                                        name: "origin",
                                        type: "address",
                                        value: r
                                    }, {
                                        names: ["recipient", "origin"],
                                        type: "notEqual",
                                        msg: "Cannot transfer tokens to the same account"
                                    }, {
                                        name: "amount",
                                        type: "integer",
                                        gt: 0,
                                        value: t
                                    }, {
                                        name: "token ID",
                                        type: "tokenId",
                                        value: n
                                    }], o)) {
                                    var s = {
                                        to_address: $e(e),
                                        owner_address: $e(r),
                                        asset_name: Ze(n),
                                        amount: parseInt(t)
                                    };
                                    i && i.permissionId && (s.Permission_id = i.permissionId), this.tronWeb.fullNode.request("wallet/transferasset", s, "post").then((function(e) {
                                        return Qe(e, o)
                                    })).catch((function(e) {
                                        return o(e)
                                    }))
                                }
                            }
                        }, {
                            key: "purchaseToken",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.tronWeb.defaultAddress.hex,
                                    i = arguments.length > 4 ? arguments[4] : void 0,
                                    o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                                if (Ue.isFunction(i) && (o = i, i = {}), Ue.isFunction(r) ? (o = r, r = this.tronWeb.defaultAddress.hex) : Ue.isObject(r) && (i = r, r = this.tronWeb.defaultAddress.hex), !o) return this.injectPromise(this.purchaseToken, e, t, n, r, i);
                                if (!this.validator.notValid([{
                                        name: "buyer",
                                        type: "address",
                                        value: r
                                    }, {
                                        name: "issuer",
                                        type: "address",
                                        value: e
                                    }, {
                                        names: ["buyer", "issuer"],
                                        type: "notEqual",
                                        msg: "Cannot purchase tokens from same account"
                                    }, {
                                        name: "amount",
                                        type: "integer",
                                        gt: 0,
                                        value: n
                                    }, {
                                        name: "token ID",
                                        type: "tokenId",
                                        value: t
                                    }], o)) {
                                    var s = {
                                        to_address: $e(e),
                                        owner_address: $e(r),
                                        asset_name: Ze(t),
                                        amount: parseInt(n)
                                    };
                                    i && i.permissionId && (s.Permission_id = i.permissionId), this.tronWeb.fullNode.request("wallet/participateassetissue", s, "post").then((function(e) {
                                        return Qe(e, o)
                                    })).catch((function(e) {
                                        return o(e)
                                    }))
                                }
                            }
                        }, {
                            key: "freezeBalance",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "BANDWIDTH",
                                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.tronWeb.defaultAddress.hex,
                                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0,
                                    o = arguments.length > 5 ? arguments[5] : void 0,
                                    s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                                if (Ue.isFunction(o) && (s = o, o = {}), Ue.isFunction(i) ? (s = i, i = void 0) : Ue.isObject(i) && (o = i, i = void 0), Ue.isFunction(r) ? (s = r, r = this.tronWeb.defaultAddress.hex) : Ue.isObject(r) && (o = r, r = this.tronWeb.defaultAddress.hex), Ue.isFunction(t) && (s = t, t = 3), Ue.isFunction(n) && (s = n, n = "BANDWIDTH"), !s) return this.injectPromise(this.freezeBalance, e, t, n, r, i, o);
                                if (!this.validator.notValid([{
                                        name: "origin",
                                        type: "address",
                                        value: r
                                    }, {
                                        name: "receiver",
                                        type: "address",
                                        value: i,
                                        optional: !0
                                    }, {
                                        name: "amount",
                                        type: "integer",
                                        gt: 0,
                                        value: e
                                    }, {
                                        name: "duration",
                                        type: "integer",
                                        gte: 3,
                                        value: t
                                    }, {
                                        name: "resource",
                                        type: "resource",
                                        value: n,
                                        msg: 'Invalid resource provided: Expected "BANDWIDTH" or "ENERGY'
                                    }], s)) {
                                    var a = {
                                        owner_address: $e(r),
                                        frozen_balance: parseInt(e),
                                        frozen_duration: parseInt(t),
                                        resource: n
                                    };
                                    Ue.isNotNullOrUndefined(i) && $e(i) !== $e(r) && (a.receiver_address = $e(i)), o && o.permissionId && (a.Permission_id = o.permissionId), this.tronWeb.fullNode.request("wallet/freezebalance", a, "post").then((function(e) {
                                        return Qe(e, s)
                                    })).catch((function(e) {
                                        return s(e)
                                    }))
                                }
                            }
                        }, {
                            key: "unfreezeBalance",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "BANDWIDTH",
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.tronWeb.defaultAddress.hex,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                    r = arguments.length > 3 ? arguments[3] : void 0,
                                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                if (Ue.isFunction(r) && (i = r, r = {}), Ue.isFunction(n) ? (i = n, n = void 0) : Ue.isObject(n) && (r = n, n = void 0), Ue.isFunction(t) ? (i = t, t = this.tronWeb.defaultAddress.hex) : Ue.isObject(t) && (r = t, t = this.tronWeb.defaultAddress.hex), Ue.isFunction(e) && (i = e, e = "BANDWIDTH"), !i) return this.injectPromise(this.unfreezeBalance, e, t, n, r);
                                if (!this.validator.notValid([{
                                        name: "origin",
                                        type: "address",
                                        value: t
                                    }, {
                                        name: "receiver",
                                        type: "address",
                                        value: n,
                                        optional: !0
                                    }, {
                                        name: "resource",
                                        type: "resource",
                                        value: e,
                                        msg: 'Invalid resource provided: Expected "BANDWIDTH" or "ENERGY'
                                    }], i)) {
                                    var o = {
                                        owner_address: $e(t),
                                        resource: e
                                    };
                                    Ue.isNotNullOrUndefined(n) && $e(n) !== $e(t) && (o.receiver_address = $e(n)), r && r.permissionId && (o.Permission_id = r.permissionId), this.tronWeb.fullNode.request("wallet/unfreezebalance", o, "post").then((function(e) {
                                        return Qe(e, i)
                                    })).catch((function(e) {
                                        return i(e)
                                    }))
                                }
                            }
                        }, {
                            key: "withdrawBlockRewards",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    t = arguments.length > 1 ? arguments[1] : void 0,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (Ue.isFunction(t) && (n = t, t = {}), Ue.isFunction(e) ? (n = e, e = this.tronWeb.defaultAddress.hex) : Ue.isObject(e) && (t = e, e = this.tronWeb.defaultAddress.hex), !n) return this.injectPromise(this.withdrawBlockRewards, e, t);
                                if (!this.validator.notValid([{
                                        name: "origin",
                                        type: "address",
                                        value: e
                                    }], n)) {
                                    var r = {
                                        owner_address: $e(e)
                                    };
                                    t && t.permissionId && (r.Permission_id = t.permissionId), this.tronWeb.fullNode.request("wallet/withdrawbalance", r, "post").then((function(e) {
                                        return Qe(e, n)
                                    })).catch((function(e) {
                                        return n(e)
                                    }))
                                }
                            }
                        }, {
                            key: "applyForSR",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = arguments.length > 2 ? arguments[2] : void 0,
                                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                if (Ue.isFunction(n) && (r = n, n = {}), Ue.isValidURL(e) && (r = t || !1, t = e, e = this.tronWeb.defaultAddress.hex), Ue.isObject(t) && (n = t = e = this.tronWeb.defaultAddress.hex), !r) return this.injectPromise(this.applyForSR, e, t, n);
                                if (!this.validator.notValid([{
                                        name: "origin",
                                        type: "address",
                                        value: e
                                    }, {
                                        name: "url",
                                        type: "url",
                                        value: t,
                                        msg: "Invalid url provided"
                                    }], r)) {
                                    var i = {
                                        owner_address: $e(e),
                                        url: Ze(t)
                                    };
                                    n && n.permissionId && (i.Permission_id = n.permissionId), this.tronWeb.fullNode.request("wallet/createwitness", i, "post").then((function(e) {
                                        return Qe(e, r)
                                    })).catch((function(e) {
                                        return r(e)
                                    }))
                                }
                            }
                        }, {
                            key: "vote",
                            value: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.tronWeb.defaultAddress.hex,
                                    r = arguments.length > 2 ? arguments[2] : void 0,
                                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                if (Ue.isFunction(r) && (i = r, r = {}), Ue.isFunction(n) ? (i = n, n = this.tronWeb.defaultAddress.hex) : Ue.isObject(n) && (r = n, n = this.tronWeb.defaultAddress.hex), !i) return this.injectPromise(this.vote, t, n, r);
                                if (!this.validator.notValid([{
                                        name: "voter",
                                        type: "address",
                                        value: n
                                    }, {
                                        name: "votes",
                                        type: "notEmptyObject",
                                        value: t
                                    }], i)) {
                                    var o = !1;
                                    if (t = Object.entries(t).map((function(t) {
                                            var n = Ye()(t, 2),
                                                r = n[0],
                                                i = n[1];
                                            if (!o) return e.validator.notValid([{
                                                name: "SR",
                                                type: "address",
                                                value: r
                                            }, {
                                                name: "vote count",
                                                type: "integer",
                                                gt: 0,
                                                value: i,
                                                msg: "Invalid vote count provided for SR: " + r
                                            }]) ? o = !0 : {
                                                vote_address: $e(r),
                                                vote_count: parseInt(i)
                                            }
                                        })), !o) {
                                        var s = {
                                            owner_address: $e(n),
                                            votes: t
                                        };
                                        r && r.permissionId && (s.Permission_id = r.permissionId), this.tronWeb.fullNode.request("wallet/votewitnessaccount", s, "post").then((function(e) {
                                            return Qe(e, i)
                                        })).catch((function(e) {
                                            return i(e)
                                        }))
                                    }
                                }
                            }
                        }, {
                            key: "createSmartContract",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.tronWeb.defaultAddress.hex,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (Ue.isFunction(t) && (n = t, t = this.tronWeb.defaultAddress.hex), !n) return this.injectPromise(this.createSmartContract, e, t);
                                var r = e.feeLimit || 1e9,
                                    i = e.userFeePercentage;
                                "number" == typeof i || i || (i = 100);
                                var o = e.originEnergyLimit || 1e7,
                                    s = e.callValue || 0,
                                    a = e.tokenValue,
                                    u = e.tokenId || e.token_id,
                                    c = e.abi,
                                    l = void 0 !== c && c,
                                    d = e.bytecode,
                                    h = void 0 !== d && d,
                                    f = e.parameters,
                                    v = void 0 === f ? [] : f,
                                    p = e.name,
                                    g = void 0 === p ? "" : p;
                                if (l && Ue.isString(l)) try {
                                    l = JSON.parse(l)
                                } catch (e) {
                                    return n("Invalid options.abi provided")
                                }
                                if (l.entrys && (l = l.entrys), !Ue.isArray(l)) return n("Invalid options.abi provided");
                                var m = l.some((function(e) {
                                    return "constructor" == e.type && e.payable
                                }));
                                if (!this.validator.notValid([{
                                        name: "bytecode",
                                        type: "hex",
                                        value: h
                                    }, {
                                        name: "feeLimit",
                                        type: "integer",
                                        value: r,
                                        gt: 0,
                                        lte: 1e9
                                    }, {
                                        name: "callValue",
                                        type: "integer",
                                        value: s,
                                        gte: 0
                                    }, {
                                        name: "userFeePercentage",
                                        type: "integer",
                                        value: i,
                                        gte: 0,
                                        lte: 100
                                    }, {
                                        name: "originEnergyLimit",
                                        type: "integer",
                                        value: o,
                                        gte: 0,
                                        lte: 1e7
                                    }, {
                                        name: "parameters",
                                        type: "array",
                                        value: v
                                    }, {
                                        name: "issuer",
                                        type: "address",
                                        value: t
                                    }, {
                                        name: "tokenValue",
                                        type: "integer",
                                        value: a,
                                        gte: 0,
                                        optional: !0
                                    }, {
                                        name: "tokenId",
                                        type: "integer",
                                        value: u,
                                        gte: 0,
                                        optional: !0
                                    }], n)) {
                                    if (m && 0 == s && 0 == a) return n("When contract is payable, options.callValue or options.tokenValue must be a positive integer");
                                    if (!m && (s > 0 || a > 0)) return n("When contract is not payable, options.callValue and options.tokenValue must be 0");
                                    var y = l.find((function(e) {
                                        return "constructor" === e.type
                                    }));
                                    if (void 0 !== y && y) {
                                        var b = new de,
                                            k = [],
                                            x = [];
                                        if (y = y.inputs, v.length != y.length) return n("constructor needs ".concat(y.length, " but ").concat(v.length, " provided"));
                                        for (var w = 0; w < v.length; w++) {
                                            var A = y[w].type,
                                                I = v[w];
                                            if (!A || !Ue.isString(A) || !A.length) return n("Invalid parameter type provided: " + A);
                                            "address" == A && (I = $e(I).replace(R, "0x")), k.push(A), x.push(I)
                                        }
                                        try {
                                            v = b.encode(k, x).replace(/^(0x)/, "")
                                        } catch (e) {
                                            return n(e)
                                        }
                                    } else v = "";
                                    var W = {
                                        owner_address: $e(t),
                                        fee_limit: parseInt(r),
                                        call_value: parseInt(s),
                                        consume_user_resource_percent: i,
                                        origin_energy_limit: o,
                                        abi: JSON.stringify(l),
                                        bytecode: h,
                                        parameter: v,
                                        name: g
                                    };
                                    Ue.isNotNullOrUndefined(a) && (W.call_token_value = parseInt(a)), Ue.isNotNullOrUndefined(u) && (W.token_id = parseInt(u)), e && e.permissionId && (W.Permission_id = e.permissionId), this.tronWeb.fullNode.request("wallet/deploycontract", W, "post").then((function(e) {
                                        return Qe(e, n)
                                    })).catch((function(e) {
                                        return n(e)
                                    }))
                                }
                            }
                        }, {
                            key: "triggerSmartContract",
                            value: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return "object" !== v()(t[2]) && (t[2] = {
                                    feeLimit: t[2],
                                    callValue: t[3]
                                }, t.splice(3, 1)), this._triggerSmartContract.apply(this, t)
                            }
                        }, {
                            key: "triggerConstantContract",
                            value: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return t[2]._isConstant = !0, this.triggerSmartContract.apply(this, t)
                            }
                        }, {
                            key: "_triggerSmartContract",
                            value: function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.tronWeb.defaultAddress.hex,
                                    o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                                if (Ue.isFunction(i) && (o = i, i = this.tronWeb.defaultAddress.hex), Ue.isFunction(r) && (o = r, r = []), !o) return this.injectPromise(this._triggerSmartContract, e, t, n, r, i);
                                var s = Object.assign({
                                        callValue: 0,
                                        feeLimit: 1e9
                                    }, n),
                                    a = s.tokenValue,
                                    u = s.tokenId,
                                    c = s.callValue,
                                    l = s.feeLimit;
                                if (!this.validator.notValid([{
                                        name: "feeLimit",
                                        type: "integer",
                                        value: l,
                                        gt: 0,
                                        lte: 1e9
                                    }, {
                                        name: "callValue",
                                        type: "integer",
                                        value: c,
                                        gte: 0
                                    }, {
                                        name: "parameters",
                                        type: "array",
                                        value: r
                                    }, {
                                        name: "contract",
                                        type: "address",
                                        value: e
                                    }, {
                                        name: "issuer",
                                        type: "address",
                                        value: i,
                                        optional: !0
                                    }, {
                                        name: "tokenValue",
                                        type: "integer",
                                        value: a,
                                        gte: 0,
                                        optional: !0
                                    }, {
                                        name: "tokenId",
                                        type: "integer",
                                        value: u,
                                        gte: 0,
                                        optional: !0
                                    }, {
                                        name: "function selector",
                                        type: "not-empty-string",
                                        value: t
                                    }], o)) {
                                    if (t = t.replace("/s*/g", ""), r.length) {
                                        for (var d = new de, h = [], f = [], v = 0; v < r.length; v++) {
                                            var p = r[v],
                                                g = p.type,
                                                m = p.value;
                                            if (!g || !Ue.isString(g) || !g.length) return o("Invalid parameter type provided: " + g);
                                            "address" == g && (m = $e(m).replace(R, "0x")), h.push(g), f.push(m)
                                        }
                                        try {
                                            h = h.map((function(e) {
                                                return /trcToken/.test(e) && (e = e.replace(/trcToken/, "uint256")), e
                                            })), r = d.encode(h, f).replace(/^(0x)/, "")
                                        } catch (e) {
                                            return o(e)
                                        }
                                    } else r = "";
                                    var y = {
                                        contract_address: $e(e),
                                        owner_address: $e(i),
                                        function_selector: t,
                                        parameter: r
                                    };
                                    n._isConstant || (y.call_value = parseInt(c), y.fee_limit = parseInt(l), Ue.isNotNullOrUndefined(a) && (y.call_token_value = parseInt(a)), Ue.isNotNullOrUndefined(u) && (y.token_id = parseInt(u))), n.permissionId && (y.Permission_id = n.permissionId), this.tronWeb.fullNode.request("wallet/trigger".concat(n._isConstant ? "constant" : "smart", "contract"), y, "post").then((function(e) {
                                        return Qe(e, o)
                                    })).catch((function(e) {
                                        return o(e)
                                    }))
                                }
                            }
                        }, {
                            key: "clearABI",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.tronWeb.defaultAddress.hex,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (!n) return this.injectPromise(this.clearABI, e, t);
                                if (!this.tronWeb.isAddress(e)) return n("Invalid contract address provided");
                                if (!this.tronWeb.isAddress(t)) return n("Invalid owner address provided");
                                var r = {
                                    contract_address: $e(e),
                                    owner_address: $e(t)
                                };
                                this.tronWeb.trx.cache.contracts[e] && delete this.tronWeb.trx.cache.contracts[e], this.tronWeb.fullNode.request("wallet/clearabi", r, "post").then((function(e) {
                                    return Qe(e, n)
                                })).catch((function(e) {
                                    return n(e)
                                }))
                            }
                        }, {
                            key: "createToken",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.tronWeb.defaultAddress.hex,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (Ue.isFunction(t) && (n = t, t = this.tronWeb.defaultAddress.hex), !n) return this.injectPromise(this.createToken, e, t);
                                var r = e.name,
                                    i = void 0 !== r && r,
                                    o = e.abbreviation,
                                    s = void 0 !== o && o,
                                    a = e.description,
                                    u = void 0 !== a && a,
                                    c = e.url,
                                    l = void 0 !== c && c,
                                    d = e.totalSupply,
                                    h = void 0 === d ? 0 : d,
                                    f = e.trxRatio,
                                    v = void 0 === f ? 1 : f,
                                    p = e.tokenRatio,
                                    g = void 0 === p ? 1 : p,
                                    m = e.saleStart,
                                    y = void 0 === m ? Date.now() : m,
                                    b = e.saleEnd,
                                    k = void 0 !== b && b,
                                    x = e.freeBandwidth,
                                    w = void 0 === x ? 0 : x,
                                    A = e.freeBandwidthLimit,
                                    I = void 0 === A ? 0 : A,
                                    W = e.frozenAmount,
                                    S = void 0 === W ? 0 : W,
                                    P = e.frozenDuration,
                                    _ = void 0 === P ? 0 : P,
                                    C = e.voteScore,
                                    N = e.precision;
                                if (!this.validator.notValid([{
                                        name: "Supply amount",
                                        type: "positive-integer",
                                        value: h
                                    }, {
                                        name: "TRX ratio",
                                        type: "positive-integer",
                                        value: v
                                    }, {
                                        name: "Token ratio",
                                        type: "positive-integer",
                                        value: g
                                    }, {
                                        name: "token abbreviation",
                                        type: "not-empty-string",
                                        value: s
                                    }, {
                                        name: "token name",
                                        type: "not-empty-string",
                                        value: i
                                    }, {
                                        name: "token description",
                                        type: "not-empty-string",
                                        value: u
                                    }, {
                                        name: "token url",
                                        type: "url",
                                        value: l
                                    }, {
                                        name: "issuer",
                                        type: "address",
                                        value: t
                                    }, {
                                        name: "sale start timestamp",
                                        type: "integer",
                                        value: y,
                                        gte: Date.now()
                                    }, {
                                        name: "sale end timestamp",
                                        type: "integer",
                                        value: k,
                                        gt: y
                                    }, {
                                        name: "Free bandwidth amount",
                                        type: "integer",
                                        value: w,
                                        gte: 0
                                    }, {
                                        name: "Free bandwidth limit",
                                        type: "integer",
                                        value: I,
                                        gte: 0
                                    }, {
                                        name: "Frozen supply",
                                        type: "integer",
                                        value: S,
                                        gte: 0
                                    }, {
                                        name: "Frozen duration",
                                        type: "integer",
                                        value: _,
                                        gte: 0
                                    }], n)) {
                                    if (Ue.isNotNullOrUndefined(C) && (!Ue.isInteger(C) || C <= 0)) return n("voteScore must be a positive integer greater than 0");
                                    if (Ue.isNotNullOrUndefined(N) && (!Ue.isInteger(N) || N <= 0 || N > 6)) return n("precision must be a positive integer > 0 and <= 6");
                                    var T = {
                                        owner_address: $e(t),
                                        name: Ze(i),
                                        abbr: Ze(s),
                                        description: Ze(u),
                                        url: Ze(l),
                                        total_supply: parseInt(h),
                                        trx_num: parseInt(v),
                                        num: parseInt(g),
                                        start_time: parseInt(y),
                                        end_time: parseInt(k),
                                        free_asset_net_limit: parseInt(w),
                                        public_free_asset_net_limit: parseInt(I),
                                        frozen_supply: {
                                            frozen_amount: parseInt(S),
                                            frozen_days: parseInt(_)
                                        }
                                    };
                                    !this.tronWeb.fullnodeSatisfies(">=3.5.0") || parseInt(S) > 0 || delete T.frozen_supply, N && !isNaN(parseInt(N)) && (T.precision = parseInt(N)), C && !isNaN(parseInt(C)) && (T.vote_score = parseInt(C)), e && e.permissionId && (T.Permission_id = e.permissionId), this.tronWeb.fullNode.request("wallet/createassetissue", T, "post").then((function(e) {
                                        return Qe(e, n)
                                    })).catch((function(e) {
                                        return n(e)
                                    }))
                                }
                            }
                        }, {
                            key: "updateAccount",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.tronWeb.defaultAddress.hex,
                                    n = arguments.length > 2 ? arguments[2] : void 0,
                                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                if (Ue.isFunction(n) && (r = n, n = {}), Ue.isFunction(t) ? (r = t, t = this.tronWeb.defaultAddress.hex) : Ue.isObject(t) && (n = t, t = this.tronWeb.defaultAddress.hex), !r) return this.injectPromise(this.updateAccount, e, t, n);
                                if (!this.validator.notValid([{
                                        name: "Name",
                                        type: "not-empty-string",
                                        value: e
                                    }, {
                                        name: "origin",
                                        type: "address",
                                        value: t
                                    }], r)) {
                                    var i = {
                                        account_name: Ze(e),
                                        owner_address: $e(t)
                                    };
                                    n && n.permissionId && (i.Permission_id = n.permissionId), this.tronWeb.fullNode.request("wallet/updateaccount", i, "post").then((function(e) {
                                        return Qe(e, r)
                                    })).catch((function(e) {
                                        return r(e)
                                    }))
                                }
                            }
                        }, {
                            key: "setAccountId",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.tronWeb.defaultAddress.hex,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (Ue.isFunction(t) && (n = t, t = this.tronWeb.defaultAddress.hex), !n) return this.injectPromise(this.setAccountId, e, t);
                                e && Ue.isString(e) && e.startsWith("0x") && (e = e.slice(2)), this.validator.notValid([{
                                    name: "accountId",
                                    type: "hex",
                                    value: e
                                }, {
                                    name: "accountId",
                                    type: "string",
                                    lte: 32,
                                    gte: 8,
                                    value: e
                                }, {
                                    name: "origin",
                                    type: "address",
                                    value: t
                                }], n) || this.tronWeb.fullNode.request("wallet/setaccountid", {
                                    account_id: e,
                                    owner_address: $e(t)
                                }, "post").then((function(e) {
                                    return Qe(e, n)
                                })).catch((function(e) {
                                    return n(e)
                                }))
                            }
                        }, {
                            key: "updateToken",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.tronWeb.defaultAddress.hex,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (Ue.isFunction(t) ? (n = t, t = this.tronWeb.defaultAddress.hex) : Ue.isObject(t) && (e = t, t = this.tronWeb.defaultAddress.hex), !n) return this.injectPromise(this.updateToken, e, t);
                                var r = e,
                                    i = r.description,
                                    o = void 0 !== i && i,
                                    s = r.url,
                                    a = void 0 !== s && s,
                                    u = r.freeBandwidth,
                                    c = void 0 === u ? 0 : u,
                                    l = r.freeBandwidthLimit,
                                    d = void 0 === l ? 0 : l;
                                if (!this.validator.notValid([{
                                        name: "token description",
                                        type: "not-empty-string",
                                        value: o
                                    }, {
                                        name: "token url",
                                        type: "url",
                                        value: a
                                    }, {
                                        name: "issuer",
                                        type: "address",
                                        value: t
                                    }, {
                                        name: "Free bandwidth amount",
                                        type: "positive-integer",
                                        value: c
                                    }, {
                                        name: "Free bandwidth limit",
                                        type: "positive-integer",
                                        value: d
                                    }], n)) {
                                    var h = {
                                        owner_address: $e(t),
                                        description: Ze(o),
                                        url: Ze(a),
                                        new_limit: parseInt(c),
                                        new_public_limit: parseInt(d)
                                    };
                                    e && e.permissionId && (h.Permission_id = e.permissionId), this.tronWeb.fullNode.request("wallet/updateasset", h, "post").then((function(e) {
                                        return Qe(e, n)
                                    })).catch((function(e) {
                                        return n(e)
                                    }))
                                }
                            }
                        }, {
                            key: "sendAsset",
                            value: function() {
                                return this.sendToken.apply(this, arguments)
                            }
                        }, {
                            key: "purchaseAsset",
                            value: function() {
                                return this.purchaseToken.apply(this, arguments)
                            }
                        }, {
                            key: "createAsset",
                            value: function() {
                                return this.createToken.apply(this, arguments)
                            }
                        }, {
                            key: "updateAsset",
                            value: function() {
                                return this.updateToken.apply(this, arguments)
                            }
                        }, {
                            key: "createProposal",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.tronWeb.defaultAddress.hex,
                                    n = arguments.length > 2 ? arguments[2] : void 0,
                                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                if (Ue.isFunction(n) && (r = n, n = {}), Ue.isFunction(t) ? (r = t, t = this.tronWeb.defaultAddress.hex) : Ue.isObject(t) && (n = t, t = this.tronWeb.defaultAddress.hex), !r) return this.injectPromise(this.createProposal, e, t, n);
                                if (!this.validator.notValid([{
                                        name: "issuer",
                                        type: "address",
                                        value: t
                                    }], r)) {
                                    var i = "Invalid proposal parameters provided";
                                    if (!e) return r(i);
                                    Ue.isArray(e) || (e = [e]);
                                    var o = !0,
                                        s = !1,
                                        a = void 0;
                                    try {
                                        for (var u, c = e[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
                                            var l = u.value;
                                            if (!Ue.isObject(l)) return r(i)
                                        }
                                    } catch (e) {
                                        s = !0, a = e
                                    } finally {
                                        try {
                                            o || null == c.return || c.return()
                                        } finally {
                                            if (s) throw a
                                        }
                                    }
                                    var d = {
                                        owner_address: $e(t),
                                        parameters: e
                                    };
                                    n && n.permissionId && (d.Permission_id = n.permissionId), this.tronWeb.fullNode.request("wallet/proposalcreate", d, "post").then((function(e) {
                                        return Qe(e, r)
                                    })).catch((function(e) {
                                        return r(e)
                                    }))
                                }
                            }
                        }, {
                            key: "deleteProposal",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.tronWeb.defaultAddress.hex,
                                    n = arguments.length > 2 ? arguments[2] : void 0,
                                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                if (Ue.isFunction(n) && (r = n, n = {}), Ue.isFunction(t) ? (r = t, t = this.tronWeb.defaultAddress.hex) : Ue.isObject(t) && (n = t, t = this.tronWeb.defaultAddress.hex), !r) return this.injectPromise(this.deleteProposal, e, t, n);
                                if (!this.validator.notValid([{
                                        name: "issuer",
                                        type: "address",
                                        value: t
                                    }, {
                                        name: "proposalID",
                                        type: "integer",
                                        value: e,
                                        gte: 0
                                    }], r)) {
                                    var i = {
                                        owner_address: $e(t),
                                        proposal_id: parseInt(e)
                                    };
                                    n && n.permissionId && (i.Permission_id = n.permissionId), this.tronWeb.fullNode.request("wallet/proposaldelete", i, "post").then((function(e) {
                                        return Qe(e, r)
                                    })).catch((function(e) {
                                        return r(e)
                                    }))
                                }
                            }
                        }, {
                            key: "voteProposal",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.tronWeb.defaultAddress.hex,
                                    r = arguments.length > 3 ? arguments[3] : void 0,
                                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                if (Ue.isFunction(r) && (i = r, r = {}), Ue.isFunction(n) ? (i = n, n = this.tronWeb.defaultAddress.hex) : Ue.isObject(n) && (r = n, n = this.tronWeb.defaultAddress.hex), !i) return this.injectPromise(this.voteProposal, e, t, n, r);
                                if (!this.validator.notValid([{
                                        name: "voter",
                                        type: "address",
                                        value: n
                                    }, {
                                        name: "proposalID",
                                        type: "integer",
                                        value: e,
                                        gte: 0
                                    }, {
                                        name: "has approval",
                                        type: "boolean",
                                        value: t
                                    }], i)) {
                                    var o = {
                                        owner_address: $e(n),
                                        proposal_id: parseInt(e),
                                        is_add_approval: t
                                    };
                                    r && r.permissionId && (o.Permission_id = r.permissionId), this.tronWeb.fullNode.request("wallet/proposalapprove", o, "post").then((function(e) {
                                        return Qe(e, i)
                                    })).catch((function(e) {
                                        return i(e)
                                    }))
                                }
                            }
                        }, {
                            key: "createTRXExchange",
                            value: function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.tronWeb.defaultAddress.hex,
                                    i = arguments.length > 4 ? arguments[4] : void 0,
                                    o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                                if (Ue.isFunction(i) && (o = i, i = {}), Ue.isFunction(r) ? (o = r, r = this.tronWeb.defaultAddress.hex) : Ue.isObject(r) && (i = r, r = this.tronWeb.defaultAddress.hex), !o) return this.injectPromise(this.createTRXExchange, e, t, n, r, i);
                                if (!this.validator.notValid([{
                                        name: "owner",
                                        type: "address",
                                        value: r
                                    }, {
                                        name: "token name",
                                        type: "not-empty-string",
                                        value: e
                                    }, {
                                        name: "token balance",
                                        type: "positive-integer",
                                        value: t
                                    }, {
                                        name: "trx balance",
                                        type: "positive-integer",
                                        value: n
                                    }], o)) {
                                    var s = {
                                        owner_address: $e(r),
                                        first_token_id: Ze(e),
                                        first_token_balance: t,
                                        second_token_id: "5f",
                                        second_token_balance: n
                                    };
                                    i && i.permissionId && (s.Permission_id = i.permissionId), this.tronWeb.fullNode.request("wallet/exchangecreate", s, "post").then((function(e) {
                                        o(null, e)
                                    })).catch((function(e) {
                                        return o(e)
                                    }))
                                }
                            }
                        }, {
                            key: "createTokenExchange",
                            value: function(e, t, n, r) {
                                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.tronWeb.defaultAddress.hex,
                                    o = arguments.length > 5 ? arguments[5] : void 0,
                                    s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                                if (Ue.isFunction(o) && (s = o, o = {}), Ue.isFunction(i) ? (s = i, i = this.tronWeb.defaultAddress.hex) : Ue.isObject(i) && (o = i, i = this.tronWeb.defaultAddress.hex), !s) return this.injectPromise(this.createTokenExchange, e, t, n, r, i, o);
                                if (!this.validator.notValid([{
                                        name: "owner",
                                        type: "address",
                                        value: i
                                    }, {
                                        name: "first token name",
                                        type: "not-empty-string",
                                        value: e
                                    }, {
                                        name: "second token name",
                                        type: "not-empty-string",
                                        value: n
                                    }, {
                                        name: "first token balance",
                                        type: "positive-integer",
                                        value: t
                                    }, {
                                        name: "second token balance",
                                        type: "positive-integer",
                                        value: r
                                    }], s)) {
                                    var a = {
                                        owner_address: $e(i),
                                        first_token_id: Ze(e),
                                        first_token_balance: t,
                                        second_token_id: Ze(n),
                                        second_token_balance: r
                                    };
                                    o && o.permissionId && (a.Permission_id = o.permissionId), this.tronWeb.fullNode.request("wallet/exchangecreate", a, "post").then((function(e) {
                                        s(null, e)
                                    })).catch((function(e) {
                                        return s(e)
                                    }))
                                }
                            }
                        }, {
                            key: "injectExchangeTokens",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.tronWeb.defaultAddress.hex,
                                    i = arguments.length > 4 ? arguments[4] : void 0,
                                    o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                                if (Ue.isFunction(i) && (o = i, i = {}), Ue.isFunction(r) ? (o = r, r = this.tronWeb.defaultAddress.hex) : Ue.isObject(r) && (i = r, r = this.tronWeb.defaultAddress.hex), !o) return this.injectPromise(this.injectExchangeTokens, e, t, n, r, i);
                                if (!this.validator.notValid([{
                                        name: "owner",
                                        type: "address",
                                        value: r
                                    }, {
                                        name: "token name",
                                        type: "not-empty-string",
                                        value: t
                                    }, {
                                        name: "token amount",
                                        type: "integer",
                                        value: n,
                                        gte: 1
                                    }, {
                                        name: "exchangeID",
                                        type: "integer",
                                        value: e,
                                        gte: 0
                                    }], o)) {
                                    var s = {
                                        owner_address: $e(r),
                                        exchange_id: parseInt(e),
                                        token_id: Ze(t),
                                        quant: parseInt(n)
                                    };
                                    i && i.permissionId && (s.Permission_id = i.permissionId), this.tronWeb.fullNode.request("wallet/exchangeinject", s, "post").then((function(e) {
                                        return Qe(e, o)
                                    })).catch((function(e) {
                                        return o(e)
                                    }))
                                }
                            }
                        }, {
                            key: "withdrawExchangeTokens",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.tronWeb.defaultAddress.hex,
                                    i = arguments.length > 4 ? arguments[4] : void 0,
                                    o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                                if (Ue.isFunction(i) && (o = i, i = {}), Ue.isFunction(r) ? (o = r, r = this.tronWeb.defaultAddress.hex) : Ue.isObject(r) && (i = r, r = this.tronWeb.defaultAddress.hex), !o) return this.injectPromise(this.withdrawExchangeTokens, e, t, n, r, i);
                                if (!this.validator.notValid([{
                                        name: "owner",
                                        type: "address",
                                        value: r
                                    }, {
                                        name: "token name",
                                        type: "not-empty-string",
                                        value: t
                                    }, {
                                        name: "token amount",
                                        type: "integer",
                                        value: n,
                                        gte: 1
                                    }, {
                                        name: "exchangeID",
                                        type: "integer",
                                        value: e,
                                        gte: 0
                                    }], o)) {
                                    var s = {
                                        owner_address: $e(r),
                                        exchange_id: parseInt(e),
                                        token_id: Ze(t),
                                        quant: parseInt(n)
                                    };
                                    i && i.permissionId && (s.Permission_id = i.permissionId), this.tronWeb.fullNode.request("wallet/exchangewithdraw", s, "post").then((function(e) {
                                        return Qe(e, o)
                                    })).catch((function(e) {
                                        return o(e)
                                    }))
                                }
                            }
                        }, {
                            key: "tradeExchangeTokens",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.tronWeb.defaultAddress.hex,
                                    o = arguments.length > 5 ? arguments[5] : void 0,
                                    s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                                if (Ue.isFunction(o) && (s = o, o = {}), Ue.isFunction(i) ? (s = i, i = this.tronWeb.defaultAddress.hex) : Ue.isObject(i) && (o = i, i = this.tronWeb.defaultAddress.hex), !s) return this.injectPromise(this.tradeExchangeTokens, e, t, n, r, i, o);
                                if (!this.validator.notValid([{
                                        name: "owner",
                                        type: "address",
                                        value: i
                                    }, {
                                        name: "token name",
                                        type: "not-empty-string",
                                        value: t
                                    }, {
                                        name: "tokenAmountSold",
                                        type: "integer",
                                        value: n,
                                        gte: 1
                                    }, {
                                        name: "tokenAmountExpected",
                                        type: "integer",
                                        value: r,
                                        gte: 1
                                    }, {
                                        name: "exchangeID",
                                        type: "integer",
                                        value: e,
                                        gte: 0
                                    }], s)) {
                                    var a = {
                                        owner_address: $e(i),
                                        exchange_id: parseInt(e),
                                        token_id: this.tronWeb.fromAscii(t),
                                        quant: parseInt(n),
                                        expected: parseInt(r)
                                    };
                                    o && o.permissionId && (a.Permission_id = o.permissionId), this.tronWeb.fullNode.request("wallet/exchangetransaction", a, "post").then((function(e) {
                                        return Qe(e, s)
                                    })).catch((function(e) {
                                        return s(e)
                                    }))
                                }
                            }
                        }, {
                            key: "updateSetting",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.tronWeb.defaultAddress.hex,
                                    r = arguments.length > 3 ? arguments[3] : void 0,
                                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                if (Ue.isFunction(r) && (i = r, r = {}), Ue.isFunction(n) ? (i = n, n = this.tronWeb.defaultAddress.hex) : Ue.isObject(n) && (r = n, n = this.tronWeb.defaultAddress.hex), !i) return this.injectPromise(this.updateSetting, e, t, n, r);
                                if (!this.validator.notValid([{
                                        name: "owner",
                                        type: "address",
                                        value: n
                                    }, {
                                        name: "contract",
                                        type: "address",
                                        value: e
                                    }, {
                                        name: "userFeePercentage",
                                        type: "integer",
                                        value: t,
                                        gte: 0,
                                        lte: 100
                                    }], i)) {
                                    var o = {
                                        owner_address: $e(n),
                                        contract_address: $e(e),
                                        consume_user_resource_percent: t
                                    };
                                    r && r.permissionId && (o.Permission_id = r.permissionId), this.tronWeb.fullNode.request("wallet/updatesetting", o, "post").then((function(e) {
                                        return Qe(e, i)
                                    })).catch((function(e) {
                                        return i(e)
                                    }))
                                }
                            }
                        }, {
                            key: "updateEnergyLimit",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.tronWeb.defaultAddress.hex,
                                    r = arguments.length > 3 ? arguments[3] : void 0,
                                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                if (Ue.isFunction(r) && (i = r, r = {}), Ue.isFunction(n) ? (i = n, n = this.tronWeb.defaultAddress.hex) : Ue.isObject(n) && (r = n, n = this.tronWeb.defaultAddress.hex), !i) return this.injectPromise(this.updateEnergyLimit, e, t, n, r);
                                if (!this.validator.notValid([{
                                        name: "owner",
                                        type: "address",
                                        value: n
                                    }, {
                                        name: "contract",
                                        type: "address",
                                        value: e
                                    }, {
                                        name: "originEnergyLimit",
                                        type: "integer",
                                        value: t,
                                        gte: 0,
                                        lte: 1e7
                                    }], i)) {
                                    var o = {
                                        owner_address: $e(n),
                                        contract_address: $e(e),
                                        origin_energy_limit: t
                                    };
                                    r && r.permissionId && (o.Permission_id = r.permissionId), this.tronWeb.fullNode.request("wallet/updateenergylimit", o, "post").then((function(e) {
                                        return Qe(e, i)
                                    })).catch((function(e) {
                                        return i(e)
                                    }))
                                }
                            }
                        }, {
                            key: "checkPermissions",
                            value: function(e, t) {
                                if (e) {
                                    if (e.type !== t || !e.permission_name || !Ue.isString(e.permission_name) || !Ue.isInteger(e.threshold) || e.threshold < 1 || !e.keys) return !1;
                                    var n = !0,
                                        r = !1,
                                        i = void 0;
                                    try {
                                        for (var o, s = e.keys[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                            var a = o.value;
                                            if (!this.tronWeb.isAddress(a.address) || !Ue.isInteger(a.weight) || a.weight > e.threshold || a.weight < 1 || 2 === t && !e.operations) return !1
                                        }
                                    } catch (e) {
                                        r = !0, i = e
                                    } finally {
                                        try {
                                            n || null == s.return || s.return()
                                        } finally {
                                            if (r) throw i
                                        }
                                    }
                                }
                                return !0
                            }
                        }, {
                            key: "updateAccountPermissions",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                if (Ue.isFunction(r) && (i = r, r = !1), Ue.isFunction(n) && (i = n, n = r = !1), Ue.isFunction(t) && (i = t, t = n = r = !1), !i) return this.injectPromise(this.updateAccountPermissions, e, t, n, r);
                                if (!this.tronWeb.isAddress(e)) return i("Invalid ownerAddress provided");
                                if (!this.checkPermissions(t, 0)) return i("Invalid ownerPermissions provided");
                                if (!this.checkPermissions(n, 1)) return i("Invalid witnessPermissions provided");
                                Array.isArray(r) || (r = [r]);
                                var o = !0,
                                    s = !1,
                                    a = void 0;
                                try {
                                    for (var u, c = r[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
                                        var l = u.value;
                                        if (!this.checkPermissions(l, 2)) return i("Invalid activesPermissions provided")
                                    }
                                } catch (e) {
                                    s = !0, a = e
                                } finally {
                                    try {
                                        o || null == c.return || c.return()
                                    } finally {
                                        if (s) throw a
                                    }
                                }
                                var d = {
                                    owner_address: e
                                };
                                t && (d.owner = t), n && (d.witness = n), r && (d.actives = 1 === r.length ? r[0] : r), this.tronWeb.fullNode.request("wallet/accountpermissionupdate", d, "post").then((function(e) {
                                    return Qe(e, i)
                                })).catch((function(e) {
                                    return i(e)
                                }))
                            }
                        }]), e
                    }(),
                    tt = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (g()(this, e), !t || !t instanceof dt) throw new Error("Expected instance of TronWeb");
                            this.tronWeb = t, this.injectPromise = Ue.promiseInjector(this), this.cache = {
                                contracts: {}
                            }, this.validator = new Xe(t)
                        }
                        return y()(e, [{
                            key: "_parseToken",
                            value: function(e) {
                                return j()({}, e, {
                                    name: this.tronWeb.toUtf8(e.name),
                                    abbr: e.abbr && this.tronWeb.toUtf8(e.abbr),
                                    description: e.description && this.tronWeb.toUtf8(e.description),
                                    url: e.url && this.tronWeb.toUtf8(e.url)
                                })
                            }
                        }, {
                            key: "getCurrentBlock",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) return this.injectPromise(this.getCurrentBlock);
                                this.tronWeb.fullNode.request("wallet/getnowblock").then((function(t) {
                                    e(null, t)
                                })).catch((function(t) {
                                    return e(t)
                                }))
                            }
                        }, {
                            key: "getConfirmedCurrentBlock",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) return this.injectPromise(this.getConfirmedCurrentBlock);
                                this.tronWeb.solidityNode.request("walletsolidity/getnowblock").then((function(t) {
                                    e(null, t)
                                })).catch((function(t) {
                                    return e(t)
                                }))
                            }
                        }, {
                            key: "getBlock",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultBlock,
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return Ue.isFunction(e) && (t = e, e = this.tronWeb.defaultBlock), t ? !1 === e ? t("No block identifier provided") : ("earliest" == e && (e = 0), "latest" == e ? this.getCurrentBlock(t) : isNaN(e) && Ue.isHex(e) ? this.getBlockByHash(e, t) : void this.getBlockByNumber(e, t)) : this.injectPromise(this.getBlock, e)
                            }
                        }, {
                            key: "getBlockByHash",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (!t) return this.injectPromise(this.getBlockByHash, e);
                                this.tronWeb.fullNode.request("wallet/getblockbyid", {
                                    value: e
                                }, "post").then((function(e) {
                                    if (!Object.keys(e).length) return t("Block not found");
                                    t(null, e)
                                })).catch((function(e) {
                                    return t(e)
                                }))
                            }
                        }, {
                            key: "getBlockByNumber",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return t ? !Ue.isInteger(e) || e < 0 ? t("Invalid block number provided") : void this.tronWeb.fullNode.request("wallet/getblockbynum", {
                                    num: parseInt(e)
                                }, "post").then((function(e) {
                                    if (!Object.keys(e).length) return t("Block not found");
                                    t(null, e)
                                })).catch((function(e) {
                                    return t(e)
                                })) : this.injectPromise(this.getBlockByNumber, e)
                            }
                        }, {
                            key: "getBlockTransactionCount",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultBlock,
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (Ue.isFunction(e) && (t = e, e = this.tronWeb.defaultBlock), !t) return this.injectPromise(this.getBlockTransactionCount, e);
                                this.getBlock(e).then((function(e) {
                                    var n = e.transactions;
                                    t(null, (void 0 === n ? [] : n).length)
                                })).catch((function(e) {
                                    return t(e)
                                }))
                            }
                        }, {
                            key: "getTransactionFromBlock",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultBlock,
                                    t = arguments.length > 1 ? arguments[1] : void 0,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (Ue.isFunction(t) && (n = t, t = 0), Ue.isFunction(e) && (n = e, e = this.tronWeb.defaultBlock), !n) return this.injectPromise(this.getTransactionFromBlock, e, t);
                                this.getBlock(e).then((function(e) {
                                    var r = e.transactions,
                                        i = void 0 !== r && r;
                                    i ? "number" == typeof t ? t >= 0 && t < i.length ? n(null, i[t]) : n("Invalid transaction index provided") : n(null, i) : n("Transaction not found in block")
                                })).catch((function(e) {
                                    return n(e)
                                }))
                            }
                        }, {
                            key: "getTransaction",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (!t) return this.injectPromise(this.getTransaction, e);
                                this.tronWeb.fullNode.request("wallet/gettransactionbyid", {
                                    value: e
                                }, "post").then((function(e) {
                                    if (!Object.keys(e).length) return t("Transaction not found");
                                    t(null, e)
                                })).catch((function(e) {
                                    return t(e)
                                }))
                            }
                        }, {
                            key: "getConfirmedTransaction",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (!t) return this.injectPromise(this.getConfirmedTransaction, e);
                                this.tronWeb.solidityNode.request("walletsolidity/gettransactionbyid", {
                                    value: e
                                }, "post").then((function(e) {
                                    if (!Object.keys(e).length) return t("Transaction not found");
                                    t(null, e)
                                })).catch((function(e) {
                                    return t(e)
                                }))
                            }
                        }, {
                            key: "getUnconfirmedTransactionInfo",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return this._getTransactionInfoById(e, {
                                    confirmed: !1
                                }, t)
                            }
                        }, {
                            key: "getTransactionInfo",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return this._getTransactionInfoById(e, {
                                    confirmed: !0
                                }, t)
                            }
                        }, {
                            key: "_getTransactionInfoById",
                            value: function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (!n) return this.injectPromise(this._getTransactionInfoById, e, t);
                                this.tronWeb[t.confirmed ? "solidityNode" : "fullNode"].request("wallet".concat(t.confirmed ? "solidity" : "", "/gettransactioninfobyid"), {
                                    value: e
                                }, "post").then((function(e) {
                                    n(null, e)
                                })).catch((function(e) {
                                    return n(e)
                                }))
                            }
                        }, {
                            key: "getTransactionsToAddress",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                return Ue.isFunction(n) && (r = n, n = 0), Ue.isFunction(t) && (r = t, t = 30), r ? (e = this.tronWeb.address.toHex(e), this.getTransactionsRelated(e, "to", t, n, r)) : this.injectPromise(this.getTransactionsToAddress, e, t, n)
                            }
                        }, {
                            key: "getTransactionsFromAddress",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                return Ue.isFunction(n) && (r = n, n = 0), Ue.isFunction(t) && (r = t, t = 30), r ? (e = this.tronWeb.address.toHex(e), this.getTransactionsRelated(e, "from", t, n, r)) : this.injectPromise(this.getTransactionsFromAddress, e, t, n)
                            }
                        }, {
                            key: "getTransactionsRelated",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t, n, r, i, o, s, a, u, c, d = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = d.length > 0 && void 0 !== d[0] ? d[0] : this.tronWeb.defaultAddress.hex, n = d.length > 1 && void 0 !== d[1] ? d[1] : "all", r = d.length > 2 && void 0 !== d[2] ? d[2] : 30, i = d.length > 3 && void 0 !== d[3] ? d[3] : 0, o = d.length > 4 && void 0 !== d[4] && d[4], Ue.isFunction(i) && (o = i, i = 0), Ue.isFunction(r) && (o = r, r = 30), Ue.isFunction(n) && (o = n, n = "all"), Ue.isFunction(t) && (o = t, t = this.tronWeb.defaultAddress.hex), o) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.getTransactionsRelated, t, n, r, i));
                                            case 11:
                                                if (["to", "from", "all"].includes(n)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return e.abrupt("return", o('Invalid direction provided: Expected "to", "from" or "all"'));
                                            case 13:
                                                if ("all" != n) {
                                                    e.next = 27;
                                                    break
                                                }
                                                return e.prev = 14, e.next = 17, Promise.all([this.getTransactionsRelated(t, "from", r, i), this.getTransactionsRelated(t, "to", r, i)]);
                                            case 17:
                                                return s = e.sent, a = Ye()(s, 2), u = a[0], c = a[1], e.abrupt("return", o(null, [].concat(U()(u.map((function(e) {
                                                    return e.direction = "from", e
                                                }))), U()(c.map((function(e) {
                                                    return e.direction = "to", e
                                                })))).sort((function(e, t) {
                                                    return t.raw_data.timestamp - e.raw_data.timestamp
                                                }))));
                                            case 24:
                                                return e.prev = 24, e.t0 = e.catch(14), e.abrupt("return", o(e.t0));
                                            case 27:
                                                if (this.tronWeb.isAddress(t)) {
                                                    e.next = 29;
                                                    break
                                                }
                                                return e.abrupt("return", o("Invalid address provided"));
                                            case 29:
                                                if (!(!Ue.isInteger(r) || r < 0 || i && r < 1)) {
                                                    e.next = 31;
                                                    break
                                                }
                                                return e.abrupt("return", o("Invalid limit provided"));
                                            case 31:
                                                if (Ue.isInteger(i) && !(i < 0)) {
                                                    e.next = 33;
                                                    break
                                                }
                                                return e.abrupt("return", o("Invalid offset provided"));
                                            case 33:
                                                t = this.tronWeb.address.toHex(t), this.tronWeb.solidityNode.request("walletextension/gettransactions".concat(n, "this"), {
                                                    account: {
                                                        address: t
                                                    },
                                                    offset: i,
                                                    limit: r
                                                }, "post").then((function(e) {
                                                    var t = e.transaction;
                                                    o(null, t)
                                                })).catch((function(e) {
                                                    return o(e)
                                                }));
                                            case 35:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [14, 24]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getAccount",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return Ue.isFunction(e) && (t = e, e = this.tronWeb.defaultAddress.hex), t ? this.tronWeb.isAddress(e) ? (e = this.tronWeb.address.toHex(e), void this.tronWeb.solidityNode.request("walletsolidity/getaccount", {
                                    address: e
                                }, "post").then((function(e) {
                                    t(null, e)
                                })).catch((function(e) {
                                    return t(e)
                                }))) : t("Invalid address provided") : this.injectPromise(this.getAccount, e)
                            }
                        }, {
                            key: "getAccountById",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (!t) return this.injectPromise(this.getAccountById, e);
                                this.getAccountInfoById(e, {
                                    confirmed: !0
                                }, t)
                            }
                        }, {
                            key: "getAccountInfoById",
                            value: function(e, t, n) {
                                this.validator.notValid([{
                                    name: "accountId",
                                    type: "hex",
                                    value: e
                                }, {
                                    name: "accountId",
                                    type: "string",
                                    lte: 32,
                                    gte: 8,
                                    value: e
                                }], n) || (e.startsWith("0x") && (e = e.slice(2)), this.tronWeb[t.confirmed ? "solidityNode" : "fullNode"].request("wallet".concat(t.confirmed ? "solidity" : "", "/getaccountbyid"), {
                                    account_id: e
                                }, "post").then((function(e) {
                                    n(null, e)
                                })).catch((function(e) {
                                    return n(e)
                                })))
                            }
                        }, {
                            key: "getBalance",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (Ue.isFunction(e) && (t = e, e = this.tronWeb.defaultAddress.hex), !t) return this.injectPromise(this.getBalance, e);
                                this.getAccount(e).then((function(e) {
                                    var n = e.balance;
                                    t(null, void 0 === n ? 0 : n)
                                })).catch((function(e) {
                                    return t(e)
                                }))
                            }
                        }, {
                            key: "getUnconfirmedAccount",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return Ue.isFunction(e) && (t = e, e = this.tronWeb.defaultAddress.hex), t ? this.tronWeb.isAddress(e) ? (e = this.tronWeb.address.toHex(e), void this.tronWeb.fullNode.request("wallet/getaccount", {
                                    address: e
                                }, "post").then((function(e) {
                                    t(null, e)
                                })).catch((function(e) {
                                    return t(e)
                                }))) : t("Invalid address provided") : this.injectPromise(this.getUnconfirmedAccount, e)
                            }
                        }, {
                            key: "getUnconfirmedAccountById",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (!t) return this.injectPromise(this.getUnconfirmedAccountById, e);
                                this.getAccountInfoById(e, {
                                    confirmed: !1
                                }, t)
                            }
                        }, {
                            key: "getUnconfirmedBalance",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (Ue.isFunction(e) && (t = e, e = this.tronWeb.defaultAddress.hex), !t) return this.injectPromise(this.getUnconfirmedBalance, e);
                                this.getUnconfirmedAccount(e).then((function(e) {
                                    var n = e.balance;
                                    t(null, void 0 === n ? 0 : n)
                                })).catch((function(e) {
                                    return t(e)
                                }))
                            }
                        }, {
                            key: "getBandwidth",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return Ue.isFunction(e) && (t = e, e = this.tronWeb.defaultAddress.hex), t ? this.tronWeb.isAddress(e) ? (e = this.tronWeb.address.toHex(e), void this.tronWeb.fullNode.request("wallet/getaccountnet", {
                                    address: e
                                }, "post").then((function(e) {
                                    var n = e.freeNetUsed,
                                        r = void 0 === n ? 0 : n,
                                        i = e.freeNetLimit,
                                        o = void 0 === i ? 0 : i,
                                        s = e.NetUsed,
                                        a = void 0 === s ? 0 : s,
                                        u = e.NetLimit;
                                    t(null, o - r + ((void 0 === u ? 0 : u) - a))
                                })).catch((function(e) {
                                    return t(e)
                                }))) : t("Invalid address provided") : this.injectPromise(this.getBandwidth, e)
                            }
                        }, {
                            key: "getTokensIssuedByAddress",
                            value: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return Ue.isFunction(t) && (n = t, t = this.tronWeb.defaultAddress.hex), n ? this.tronWeb.isAddress(t) ? (t = this.tronWeb.address.toHex(t), void this.tronWeb.fullNode.request("wallet/getassetissuebyaccount", {
                                    address: t
                                }, "post").then((function(t) {
                                    var r = t.assetIssue,
                                        i = void 0 !== r && r;
                                    if (!i) return n(null, {});
                                    var o = i.map((function(t) {
                                        return e._parseToken(t)
                                    })).reduce((function(e, t) {
                                        return e[t.name] = t, e
                                    }), {});
                                    n(null, o)
                                })).catch((function(e) {
                                    return n(e)
                                }))) : n("Invalid address provided") : this.injectPromise(this.getTokensIssuedByAddress, t)
                            }
                        }, {
                            key: "getTokenFromID",
                            value: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return n ? (Ue.isInteger(t) && (t = t.toString()), Ue.isString(t) && t.length ? void this.tronWeb.fullNode.request("wallet/getassetissuebyname", {
                                    value: this.tronWeb.fromUtf8(t)
                                }, "post").then((function(t) {
                                    if (!t.name) return n("Token does not exist");
                                    n(null, e._parseToken(t))
                                })).catch((function(e) {
                                    return n(e)
                                })) : n("Invalid token ID provided")) : this.injectPromise(this.getTokenFromID, t)
                            }
                        }, {
                            key: "listNodes",
                            value: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!t) return this.injectPromise(this.listNodes);
                                this.tronWeb.fullNode.request("wallet/listnodes").then((function(n) {
                                    var r = n.nodes;
                                    t(null, (void 0 === r ? [] : r).map((function(t) {
                                        var n = t.address,
                                            r = n.host,
                                            i = n.port;
                                        return "".concat(e.tronWeb.toUtf8(r), ":").concat(i)
                                    })))
                                })).catch((function(e) {
                                    return t(e)
                                }))
                            }
                        }, {
                            key: "getBlockRange",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return Ue.isFunction(t) && (n = t, t = 30), Ue.isFunction(e) && (n = e, e = 0), n ? !Ue.isInteger(e) || e < 0 ? n("Invalid start of range provided") : !Ue.isInteger(t) || t <= e ? n("Invalid end of range provided") : void this.tronWeb.fullNode.request("wallet/getblockbylimitnext", {
                                    startNum: parseInt(e),
                                    endNum: parseInt(t) + 1
                                }, "post").then((function(e) {
                                    var t = e.block;
                                    n(null, void 0 === t ? [] : t)
                                })).catch((function(e) {
                                    return n(e)
                                })) : this.injectPromise(this.getBlockRange, e, t)
                            }
                        }, {
                            key: "listSuperRepresentatives",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) return this.injectPromise(this.listSuperRepresentatives);
                                this.tronWeb.fullNode.request("wallet/listwitnesses").then((function(t) {
                                    var n = t.witnesses;
                                    e(null, void 0 === n ? [] : n)
                                })).catch((function(t) {
                                    return e(t)
                                }))
                            }
                        }, {
                            key: "listTokens",
                            value: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return Ue.isFunction(n) && (r = n, n = 0), Ue.isFunction(t) && (r = t, t = 0), r ? !Ue.isInteger(t) || t < 0 || n && t < 1 ? r("Invalid limit provided") : !Ue.isInteger(n) || n < 0 ? r("Invalid offset provided") : t ? void this.tronWeb.fullNode.request("wallet/getpaginatedassetissuelist", {
                                    offset: parseInt(n),
                                    limit: parseInt(t)
                                }, "post").then((function(t) {
                                    var n = t.assetIssue;
                                    r(null, (void 0 === n ? [] : n).map((function(t) {
                                        return e._parseToken(t)
                                    })))
                                })).catch((function(e) {
                                    return r(e)
                                })) : this.tronWeb.fullNode.request("wallet/getassetissuelist").then((function(t) {
                                    var n = t.assetIssue;
                                    r(null, (void 0 === n ? [] : n).map((function(t) {
                                        return e._parseToken(t)
                                    })))
                                })).catch((function(e) {
                                    return r(e)
                                })) : this.injectPromise(this.listTokens, t, n)
                            }
                        }, {
                            key: "timeUntilNextVoteCycle",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) return this.injectPromise(this.timeUntilNextVoteCycle);
                                this.tronWeb.fullNode.request("wallet/getnextmaintenancetime").then((function(t) {
                                    var n = t.num,
                                        r = void 0 === n ? -1 : n;
                                    if (-1 == r) return e("Failed to get time until next vote cycle");
                                    e(null, Math.floor(r / 1e3))
                                })).catch((function(t) {
                                    return e(t)
                                }))
                            }
                        }, {
                            key: "getContract",
                            value: function(e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return n ? this.tronWeb.isAddress(e) ? void(this.cache.contracts[e] ? n(null, this.cache.contracts[e]) : (e = this.tronWeb.address.toHex(e), this.tronWeb.fullNode.request("wallet/getcontract", {
                                    value: e
                                }).then((function(r) {
                                    if (r.Error) return n("Contract does not exist");
                                    t.cache.contracts[e] = r, n(null, r)
                                })).catch((function(e) {
                                    return n(e)
                                })))) : n("Invalid contract address provided") : this.injectPromise(this.getContract, e)
                            }
                        }, {
                            key: "verifyMessage",
                            value: function() {
                                var t = h()(l.a.mark((function t() {
                                    var n, r, i, o, s, a = arguments;
                                    return l.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (n = a.length > 0 && void 0 !== a[0] && a[0], r = a.length > 1 && void 0 !== a[1] && a[1], i = a.length > 2 && void 0 !== a[2] ? a[2] : this.tronWeb.defaultAddress.base58, o = !(a.length > 3 && void 0 !== a[3]) || a[3], s = a.length > 4 && void 0 !== a[4] && a[4], Ue.isFunction(i) && (s = i, i = this.tronWeb.defaultAddress.base58, o = !0), Ue.isFunction(o) && (s = o, o = !0), s) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return t.abrupt("return", this.injectPromise(this.verifyMessage, n, r, i, o));
                                            case 9:
                                                if (Ue.isHex(n)) {
                                                    t.next = 11;
                                                    break
                                                }
                                                return t.abrupt("return", s("Expected hex message input"));
                                            case 11:
                                                if (!e.verifySignature(n, i, r, o)) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return t.abrupt("return", s(null, !0));
                                            case 13:
                                                s("Signature does not match");
                                            case 14:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "sign",
                            value: function() {
                                var t = h()(l.a.mark((function t() {
                                    var n, r, i, o, s, a, u = arguments;
                                    return l.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (n = u.length > 0 && void 0 !== u[0] && u[0], r = u.length > 1 && void 0 !== u[1] ? u[1] : this.tronWeb.defaultPrivateKey, i = !(u.length > 2 && void 0 !== u[2]) || u[2], o = u.length > 3 && void 0 !== u[3] && u[3], s = u.length > 4 && void 0 !== u[4] && u[4], Ue.isFunction(o) && (s = o, o = !1), Ue.isFunction(i) && (s = i, i = !0, o = !1), Ue.isFunction(r) && (s = r, r = this.tronWeb.defaultPrivateKey, i = !0, o = !1), s) {
                                                    t.next = 10;
                                                    break
                                                }
                                                return t.abrupt("return", this.injectPromise(this.sign, n, r, i, o));
                                            case 10:
                                                if (!Ue.isString(n)) {
                                                    t.next = 21;
                                                    break
                                                }
                                                if (Ue.isHex(n)) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return t.abrupt("return", s("Expected hex message input"));
                                            case 13:
                                                return t.prev = 13, a = e.signString(n, r, i), t.abrupt("return", s(null, a));
                                            case 18:
                                                t.prev = 18, t.t0 = t.catch(13), s(t.t0);
                                            case 21:
                                                if (Ue.isObject(n)) {
                                                    t.next = 23;
                                                    break
                                                }
                                                return t.abrupt("return", s("Invalid transaction provided"));
                                            case 23:
                                                if (o || !n.signature) {
                                                    t.next = 25;
                                                    break
                                                }
                                                return t.abrupt("return", s("Transaction is already signed"));
                                            case 25:
                                                if (t.prev = 25, o) {
                                                    t.next = 30;
                                                    break
                                                }
                                                if (this.tronWeb.address.toHex(this.tronWeb.address.fromPrivateKey(r)).toLowerCase() === n.raw_data.contract[0].parameter.value.owner_address.toLowerCase()) {
                                                    t.next = 30;
                                                    break
                                                }
                                                return t.abrupt("return", s("Private key does not match address in transaction"));
                                            case 30:
                                                return t.abrupt("return", s(null, Ue.crypto.signTransaction(r, n)));
                                            case 33:
                                                t.prev = 33, t.t1 = t.catch(25), s(t.t1);
                                            case 36:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this, [
                                        [13, 18],
                                        [25, 33]
                                    ])
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "multiSign",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t, n, r, i, o, s, a, u = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = u.length > 0 && void 0 !== u[0] && u[0], n = u.length > 1 && void 0 !== u[1] ? u[1] : this.tronWeb.defaultPrivateKey, r = u.length > 2 && void 0 !== u[2] && u[2], i = u.length > 3 && void 0 !== u[3] && u[3], Ue.isFunction(r) && (i = r, r = 0), Ue.isFunction(n) && (i = n, n = this.tronWeb.defaultPrivateKey, r = 0), i) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.multiSign, t, n, r));
                                            case 8:
                                                if (Ue.isObject(t) && t.raw_data && t.raw_data.contract) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return e.abrupt("return", i("Invalid transaction provided"));
                                            case 10:
                                                if (t.raw_data.contract[0].Permission_id || !(r > 0)) {
                                                    e.next = 30;
                                                    break
                                                }
                                                return t.raw_data.contract[0].Permission_id = r, o = this.tronWeb.address.toHex(this.tronWeb.address.fromPrivateKey(n)).toLowerCase(), e.next = 15, this.getSignWeight(t, r);
                                            case 15:
                                                if ("PERMISSION_ERROR" !== (s = e.sent).result.code) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return e.abrupt("return", i(s.result.message));
                                            case 18:
                                                if (a = !1, s.permission.keys.map((function(e) {
                                                        e.address === o && (a = !0)
                                                    })), a) {
                                                    e.next = 22;
                                                    break
                                                }
                                                return e.abrupt("return", i(n + " has no permission to sign"));
                                            case 22:
                                                if (!s.approved_list || -1 == s.approved_list.indexOf(o)) {
                                                    e.next = 24;
                                                    break
                                                }
                                                return e.abrupt("return", i(n + " already sign transaction"));
                                            case 24:
                                                if (!s.transaction || !s.transaction.transaction) {
                                                    e.next = 29;
                                                    break
                                                }
                                                t = s.transaction.transaction, r > 0 && (t.raw_data.contract[0].Permission_id = r), e.next = 30;
                                                break;
                                            case 29:
                                                return e.abrupt("return", i("Invalid transaction provided"));
                                            case 30:
                                                return e.prev = 30, e.abrupt("return", i(null, Ue.crypto.signTransaction(n, t)));
                                            case 34:
                                                e.prev = 34, e.t0 = e.catch(30), i(e.t0);
                                            case 37:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [30, 34]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getApprovedList",
                            value: function() {
                                var e = h()(l.a.mark((function e(t) {
                                    var n, r = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (n = r.length > 1 && void 0 !== r[1] && r[1]) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.getApprovedList, t));
                                            case 3:
                                                if (Ue.isObject(t)) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.abrupt("return", n("Invalid transaction provided"));
                                            case 5:
                                                this.tronWeb.fullNode.request("wallet/getapprovedlist", t, "post").then((function(e) {
                                                    n(null, e)
                                                })).catch((function(e) {
                                                    return n(e)
                                                }));
                                            case 6:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getSignWeight",
                            value: function() {
                                var e = h()(l.a.mark((function e(t, n) {
                                    var r, i = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (r = i.length > 2 && void 0 !== i[2] && i[2], Ue.isFunction(n) && (r = n, n = void 0), r) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.getSignWeight, t, n));
                                            case 4:
                                                if (Ue.isObject(t) && t.raw_data && t.raw_data.contract) {
                                                    e.next = 6;
                                                    break
                                                }
                                                return e.abrupt("return", r("Invalid transaction provided"));
                                            case 6:
                                                if (Ue.isInteger(n) ? t.raw_data.contract[0].Permission_id = parseInt(n) : "number" != typeof t.raw_data.contract[0].Permission_id && (t.raw_data.contract[0].Permission_id = 0), Ue.isObject(t)) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", r("Invalid transaction provided"));
                                            case 9:
                                                this.tronWeb.fullNode.request("wallet/getsignweight", t, "post").then((function(e) {
                                                    r(null, e)
                                                })).catch((function(e) {
                                                    return r(e)
                                                }));
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "sendRawTransaction",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return Ue.isFunction(t) && (n = t, t = {}), n ? Ue.isObject(e) ? Ue.isObject(t) ? e.signature && Ue.isArray(e.signature) ? void this.tronWeb.fullNode.request("wallet/broadcasttransaction", e, "post").then((function(t) {
                                    t.result && (t.transaction = e), n(null, t)
                                })).catch((function(e) {
                                    return n(e)
                                })) : n("Transaction is not signed") : n("Invalid options provided") : n("Invalid transaction provided") : this.injectPromise(this.sendRawTransaction, e, t)
                            }
                        }, {
                            key: "sendTransaction",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t, n, r, i, o, s, a, u, c = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = c.length > 0 && void 0 !== c[0] && c[0], n = c.length > 1 && void 0 !== c[1] && c[1], r = c.length > 2 && void 0 !== c[2] ? c[2] : {}, i = c.length > 3 && void 0 !== c[3] && c[3], Ue.isFunction(r) && (i = r, r = {}), "string" == typeof r && (r = {
                                                        privateKey: r
                                                    }), i) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.sendTransaction, t, n, r));
                                            case 8:
                                                if (this.tronWeb.isAddress(t)) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return e.abrupt("return", i("Invalid recipient provided"));
                                            case 10:
                                                if (Ue.isInteger(n) && !(n <= 0)) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return e.abrupt("return", i("Invalid amount provided"));
                                            case 12:
                                                if ((r = j()({
                                                        privateKey: this.tronWeb.defaultPrivateKey,
                                                        address: this.tronWeb.defaultAddress.hex
                                                    }, r)).privateKey || r.address) {
                                                    e.next = 15;
                                                    break
                                                }
                                                return e.abrupt("return", i("Function requires either a private key or address to be set"));
                                            case 15:
                                                return e.prev = 15, o = r.privateKey ? this.tronWeb.address.fromPrivateKey(r.privateKey) : r.address, e.next = 19, this.tronWeb.transactionBuilder.sendTrx(t, n, o);
                                            case 19:
                                                return s = e.sent, e.next = 22, this.sign(s, r.privateKey || void 0);
                                            case 22:
                                                return a = e.sent, e.next = 25, this.sendRawTransaction(a);
                                            case 25:
                                                return u = e.sent, e.abrupt("return", i(null, u));
                                            case 29:
                                                return e.prev = 29, e.t0 = e.catch(15), e.abrupt("return", i(e.t0));
                                            case 32:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [15, 29]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "sendToken",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t, n, r, i, o, s, a, u, c, d = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = d.length > 0 && void 0 !== d[0] && d[0], n = d.length > 1 && void 0 !== d[1] && d[1], r = d.length > 2 && void 0 !== d[2] && d[2], i = d.length > 3 && void 0 !== d[3] ? d[3] : {}, o = d.length > 4 && void 0 !== d[4] && d[4], Ue.isFunction(i) && (o = i, i = {}), "string" == typeof i && (i = {
                                                        privateKey: i
                                                    }), o) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.sendToken, t, n, r, i));
                                            case 9:
                                                if (this.tronWeb.isAddress(t)) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", o("Invalid recipient provided"));
                                            case 11:
                                                if (Ue.isInteger(n) && !(n <= 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return e.abrupt("return", o("Invalid amount provided"));
                                            case 13:
                                                if (Ue.isInteger(r) && (r = r.toString()), Ue.isString(r)) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", o("Invalid token ID provided"));
                                            case 16:
                                                if ((i = j()({
                                                        privateKey: this.tronWeb.defaultPrivateKey,
                                                        address: this.tronWeb.defaultAddress.hex
                                                    }, i)).privateKey || i.address) {
                                                    e.next = 19;
                                                    break
                                                }
                                                return e.abrupt("return", o("Function requires either a private key or address to be set"));
                                            case 19:
                                                return e.prev = 19, s = i.privateKey ? this.tronWeb.address.fromPrivateKey(i.privateKey) : i.address, e.next = 23, this.tronWeb.transactionBuilder.sendToken(t, n, r, s);
                                            case 23:
                                                return a = e.sent, e.next = 26, this.sign(a, i.privateKey || void 0);
                                            case 26:
                                                return u = e.sent, e.next = 29, this.sendRawTransaction(u);
                                            case 29:
                                                return c = e.sent, e.abrupt("return", o(null, c));
                                            case 33:
                                                return e.prev = 33, e.t0 = e.catch(19), e.abrupt("return", o(e.t0));
                                            case 36:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [19, 33]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "freezeBalance",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t, n, r, i, o, s, a, u, c, d, h = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = h.length > 0 && void 0 !== h[0] ? h[0] : 0, n = h.length > 1 && void 0 !== h[1] ? h[1] : 3, r = h.length > 2 && void 0 !== h[2] ? h[2] : "BANDWIDTH", i = h.length > 3 && void 0 !== h[3] ? h[3] : {}, o = h.length > 4 && void 0 !== h[4] ? h[4] : void 0, s = h.length > 5 && void 0 !== h[5] && h[5], Ue.isFunction(o) && (s = o, o = void 0), Ue.isFunction(n) && (s = n, n = 3), Ue.isFunction(r) && (s = r, r = "BANDWIDTH"), Ue.isFunction(i) && (s = i, i = {}), "string" == typeof i && (i = {
                                                        privateKey: i
                                                    }), s) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.freezeBalance, t, n, r, i, o));
                                            case 13:
                                                if (["BANDWIDTH", "ENERGY"].includes(r)) {
                                                    e.next = 15;
                                                    break
                                                }
                                                return e.abrupt("return", s('Invalid resource provided: Expected "BANDWIDTH" or "ENERGY"'));
                                            case 15:
                                                if (Ue.isInteger(t) && !(t <= 0)) {
                                                    e.next = 17;
                                                    break
                                                }
                                                return e.abrupt("return", s("Invalid amount provided"));
                                            case 17:
                                                if (Ue.isInteger(n) && !(n < 3)) {
                                                    e.next = 19;
                                                    break
                                                }
                                                return e.abrupt("return", s("Invalid duration provided, minimum of 3 days"));
                                            case 19:
                                                if ((i = j()({
                                                        privateKey: this.tronWeb.defaultPrivateKey,
                                                        address: this.tronWeb.defaultAddress.hex
                                                    }, i)).privateKey || i.address) {
                                                    e.next = 22;
                                                    break
                                                }
                                                return e.abrupt("return", s("Function requires either a private key or address to be set"));
                                            case 22:
                                                return e.prev = 22, a = i.privateKey ? this.tronWeb.address.fromPrivateKey(i.privateKey) : i.address, e.next = 26, this.tronWeb.transactionBuilder.freezeBalance(t, n, r, a, o);
                                            case 26:
                                                return u = e.sent, e.next = 29, this.sign(u, i.privateKey || void 0);
                                            case 29:
                                                return c = e.sent, e.next = 32, this.sendRawTransaction(c);
                                            case 32:
                                                return d = e.sent, e.abrupt("return", s(null, d));
                                            case 36:
                                                return e.prev = 36, e.t0 = e.catch(22), e.abrupt("return", s(e.t0));
                                            case 39:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [22, 36]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "unfreezeBalance",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t, n, r, i, o, s, a, u, c = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = c.length > 0 && void 0 !== c[0] ? c[0] : "BANDWIDTH", n = c.length > 1 && void 0 !== c[1] ? c[1] : {}, r = c.length > 2 && void 0 !== c[2] ? c[2] : void 0, i = c.length > 3 && void 0 !== c[3] && c[3], Ue.isFunction(r) && (i = r, r = void 0), Ue.isFunction(t) && (i = t, t = "BANDWIDTH"), Ue.isFunction(n) && (i = n, n = {}), "string" == typeof n && (n = {
                                                        privateKey: n
                                                    }), i) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.unfreezeBalance, t, n, r));
                                            case 10:
                                                if (["BANDWIDTH", "ENERGY"].includes(t)) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return e.abrupt("return", i('Invalid resource provided: Expected "BANDWIDTH" or "ENERGY"'));
                                            case 12:
                                                if ((n = j()({
                                                        privateKey: this.tronWeb.defaultPrivateKey,
                                                        address: this.tronWeb.defaultAddress.hex
                                                    }, n)).privateKey || n.address) {
                                                    e.next = 15;
                                                    break
                                                }
                                                return e.abrupt("return", i("Function requires either a private key or address to be set"));
                                            case 15:
                                                return e.prev = 15, o = n.privateKey ? this.tronWeb.address.fromPrivateKey(n.privateKey) : n.address, e.next = 19, this.tronWeb.transactionBuilder.unfreezeBalance(t, o, r);
                                            case 19:
                                                return s = e.sent, e.next = 22, this.sign(s, n.privateKey || void 0);
                                            case 22:
                                                return a = e.sent, e.next = 25, this.sendRawTransaction(a);
                                            case 25:
                                                return u = e.sent, e.abrupt("return", i(null, u));
                                            case 29:
                                                return e.prev = 29, e.t0 = e.catch(15), e.abrupt("return", i(e.t0));
                                            case 32:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [15, 29]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "updateAccount",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t, n, r, i, o, s, a, u = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = u.length > 0 && void 0 !== u[0] && u[0], n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, r = u.length > 2 && void 0 !== u[2] && u[2], Ue.isFunction(n) && (r = n, n = {}), "string" == typeof n && (n = {
                                                        privateKey: n
                                                    }), r) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.updateAccount, t, n));
                                            case 7:
                                                if (Ue.isString(t) && t.length) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", r("Name must be a string"));
                                            case 9:
                                                if ((n = j()({
                                                        privateKey: this.tronWeb.defaultPrivateKey,
                                                        address: this.tronWeb.defaultAddress.hex
                                                    }, n)).privateKey || n.address) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return e.abrupt("return", r("Function requires either a private key or address to be set"));
                                            case 12:
                                                return e.prev = 12, i = n.privateKey ? this.tronWeb.address.fromPrivateKey(n.privateKey) : n.address, e.next = 16, this.tronWeb.transactionBuilder.updateAccount(t, i);
                                            case 16:
                                                return o = e.sent, e.next = 19, this.sign(o, n.privateKey || void 0);
                                            case 19:
                                                return s = e.sent, e.next = 22, this.sendRawTransaction(s);
                                            case 22:
                                                return a = e.sent, e.abrupt("return", r(null, a));
                                            case 26:
                                                return e.prev = 26, e.t0 = e.catch(12), e.abrupt("return", r(e.t0));
                                            case 29:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [12, 26]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "signMessage",
                            value: function() {
                                return this.sign.apply(this, arguments)
                            }
                        }, {
                            key: "sendAsset",
                            value: function() {
                                return this.sendToken.apply(this, arguments)
                            }
                        }, {
                            key: "send",
                            value: function() {
                                return this.sendTransaction.apply(this, arguments)
                            }
                        }, {
                            key: "sendTrx",
                            value: function() {
                                return this.sendTransaction.apply(this, arguments)
                            }
                        }, {
                            key: "broadcast",
                            value: function() {
                                return this.sendRawTransaction.apply(this, arguments)
                            }
                        }, {
                            key: "signTransaction",
                            value: function() {
                                return this.sign.apply(this, arguments)
                            }
                        }, {
                            key: "getProposal",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return t ? !Ue.isInteger(e) || e < 0 ? t("Invalid proposalID provided") : void this.tronWeb.fullNode.request("wallet/getproposalbyid", {
                                    id: parseInt(e)
                                }, "post").then((function(e) {
                                    t(null, e)
                                })).catch((function(e) {
                                    return t(e)
                                })) : this.injectPromise(this.getProposal, e)
                            }
                        }, {
                            key: "listProposals",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) return this.injectPromise(this.listProposals);
                                this.tronWeb.fullNode.request("wallet/listproposals", {}, "post").then((function(t) {
                                    var n = t.proposals;
                                    e(null, void 0 === n ? [] : n)
                                })).catch((function(t) {
                                    return e(t)
                                }))
                            }
                        }, {
                            key: "getChainParameters",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) return this.injectPromise(this.getChainParameters);
                                this.tronWeb.fullNode.request("wallet/getchainparameters", {}, "post").then((function(t) {
                                    var n = t.chainParameter;
                                    e(null, void 0 === n ? [] : n)
                                })).catch((function(t) {
                                    return e(t)
                                }))
                            }
                        }, {
                            key: "getAccountResources",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tronWeb.defaultAddress.hex,
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return t ? this.tronWeb.isAddress(e) ? void this.tronWeb.fullNode.request("wallet/getaccountresource", {
                                    address: this.tronWeb.address.toHex(e)
                                }, "post").then((function(e) {
                                    t(null, e)
                                })).catch((function(e) {
                                    return t(e)
                                })) : t("Invalid address provided") : this.injectPromise(this.getAccountResources, e)
                            }
                        }, {
                            key: "getExchangeByID",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return t ? !Ue.isInteger(e) || e < 0 ? t("Invalid exchangeID provided") : void this.tronWeb.fullNode.request("wallet/getexchangebyid", {
                                    id: e
                                }, "post").then((function(e) {
                                    t(null, e)
                                })).catch((function(e) {
                                    return t(e)
                                })) : this.injectPromise(this.getExchangeByID, e)
                            }
                        }, {
                            key: "listExchanges",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) return this.injectPromise(this.listExchanges);
                                this.tronWeb.fullNode.request("wallet/listexchanges", {}, "post").then((function(t) {
                                    var n = t.exchanges;
                                    e(null, void 0 === n ? [] : n)
                                }), "post").catch((function(t) {
                                    return e(t)
                                }))
                            }
                        }, {
                            key: "listExchangesPaginated",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (Ue.isFunction(t) && (n = t, t = 0), Ue.isFunction(e) && (n = e, e = 30), !n) return this.injectPromise(this.listExchanges);
                                this.tronWeb.fullNode.request("wallet/listexchangespaginated", {
                                    limit: e,
                                    offset: t
                                }, "post").then((function(e) {
                                    var t = e.exchanges;
                                    n(null, void 0 === t ? [] : t)
                                })).catch((function(e) {
                                    return n(e)
                                }))
                            }
                        }, {
                            key: "getNodeInfo",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) return this.injectPromise(this.getNodeInfo);
                                this.tronWeb.fullNode.request("wallet/getnodeinfo", {}, "post").then((function(t) {
                                    e(null, t)
                                }), "post").catch((function(t) {
                                    return e(t)
                                }))
                            }
                        }, {
                            key: "getTokenListByName",
                            value: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return n ? (Ue.isInteger(t) && (t = t.toString()), Ue.isString(t) && t.length ? void this.tronWeb.fullNode.request("wallet/getassetissuelistbyname", {
                                    value: this.tronWeb.fromUtf8(t)
                                }, "post").then((function(t) {
                                    if (!t.name) return n("Token does not exist");
                                    n(null, e._parseToken(t))
                                })).catch((function(e) {
                                    return n(e)
                                })) : n("Invalid token ID provided")) : this.injectPromise(this.getTokenListByName, t)
                            }
                        }, {
                            key: "getTokenByID",
                            value: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return n ? (Ue.isInteger(t) && (t = t.toString()), Ue.isString(t) && t.length ? void this.tronWeb.fullNode.request("wallet/getassetissuebyid", {
                                    value: t
                                }, "post").then((function(t) {
                                    if (!t.name) return n("Token does not exist");
                                    n(null, e._parseToken(t))
                                })).catch((function(e) {
                                    return n(e)
                                })) : n("Invalid token ID provided")) : this.injectPromise(this.getTokenByID, t)
                            }
                        }], [{
                            key: "verifySignature",
                            value: function(e, t, n) {
                                var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                                e = e.replace(/^0x/, ""), n = n.replace(/^0x/, "");
                                var i = [].concat(U()(ue(r ? "TRON Signed Message:\n32" : "Ethereum Signed Message:\n32")), U()(Ue.code.hexStr2byteArray(e))),
                                    o = se(i),
                                    s = ce(o, {
                                        recoveryParam: "1c" == n.substring(128, 130) ? 1 : 0,
                                        r: "0x" + n.substring(0, 64),
                                        s: "0x" + n.substring(64, 128)
                                    }),
                                    a = L + s.substr(2);
                                return dt.address.fromHex(a) == dt.address.fromHex(t)
                            }
                        }, {
                            key: "signString",
                            value: function(e, t) {
                                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                e = e.replace(/^0x/, "");
                                var r = new le(t),
                                    i = [].concat(U()(ue(n ? "TRON Signed Message:\n32" : "Ethereum Signed Message:\n32")), U()(Ue.code.hexStr2byteArray(e))),
                                    o = se(i),
                                    s = r.signDigest(o);
                                return ["0x", s.r.substring(2), s.s.substring(2), Number(s.v).toString(16)].join("")
                            }
                        }]), e
                    }(),
                    nt = function(e) {
                        return e.map((function(e) {
                            return e.type
                        }))
                    },
                    rt = function(e, t) {
                        var n = e.map((function(e) {
                                return e.name
                            })).filter((function(e) {
                                return !!e
                            })),
                            r = e.map((function(e) {
                                return e.type
                            }));
                        return Ue.abi.decodeParams(n, r, t)
                    },
                    it = function() {
                        function e(t, n) {
                            g()(this, e), this.tronWeb = t.tronWeb, this.contract = t, this.abi = n, this.name = n.name || (n.name = n.type), this.inputs = n.inputs || [], this.outputs = n.outputs || [], this.functionSelector = function(e) {
                                return e.name + "(" + nt(e.inputs || []).join(",") + ")"
                            }(n), this.signature = this.tronWeb.sha3(this.functionSelector, !1).slice(0, 8), this.injectPromise = Ue.promiseInjector(this), this.defaultOptions = {
                                feeLimit: 1e9,
                                callValue: 0,
                                userFeePercentage: 100,
                                shouldPollResponse: !1
                            }
                        }
                        return y()(e, [{
                            key: "decodeInput",
                            value: function(e) {
                                return rt(this.inputs, "0x" + e)
                            }
                        }, {
                            key: "onMethod",
                            value: function() {
                                for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                var i = nt(this.inputs);
                                return n.forEach((function(t, r) {
                                    "address" == i[r] && (n[r] = e.tronWeb.address.toHex(t).replace(R, "0x")), "address[]" == i[r] && (n[r] = n[r].map((function(t) {
                                        return e.tronWeb.address.toHex(t).replace(R, "0x")
                                    })))
                                })), {
                                    call: function() {
                                        for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                                        return e._call.apply(e, [i, n].concat(r))
                                    },
                                    send: function() {
                                        for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                                        return e._send.apply(e, [i, n].concat(r))
                                    },
                                    watch: function() {
                                        return e._watch.apply(e, arguments)
                                    }
                                }
                            }
                        }, {
                            key: "_call",
                            value: function() {
                                var e = h()(l.a.mark((function e(t, n) {
                                    var r, i, o, s, a = this,
                                        u = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (r = u.length > 2 && void 0 !== u[2] ? u[2] : {}, i = u.length > 3 && void 0 !== u[3] && u[3], Ue.isFunction(r) && (i = r, r = {}), i) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this._call, t, n, r));
                                            case 5:
                                                if (t.length === n.length) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.abrupt("return", i("Invalid argument count provided"));
                                            case 7:
                                                if (this.contract.address) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", i("Smart contract is missing address"));
                                            case 9:
                                                if (this.contract.deployed) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", i("Calling smart contracts requires you to load the contract first"));
                                            case 11:
                                                if (o = this.abi.stateMutability, ["pure", "view"].includes(o.toLowerCase())) {
                                                    e.next = 14;
                                                    break
                                                }
                                                return e.abrupt("return", i('Methods with state mutability "'.concat(o, '" must use send()')));
                                            case 14:
                                                r = j()({}, this.defaultOptions, {
                                                    from: this.tronWeb.defaultAddress.hex
                                                }, r), s = n.map((function(e, n) {
                                                    return {
                                                        type: t[n],
                                                        value: e
                                                    }
                                                })), this.tronWeb.transactionBuilder.triggerSmartContract(this.contract.address, this.functionSelector, r, s, !!r.from && this.tronWeb.address.toHex(r.from), (function(e, t) {
                                                    if (e) return i(e);
                                                    if (!Ue.hasProperty(t, "constant_result")) return i("Failed to execute");
                                                    try {
                                                        var n = t.constant_result[0].length;
                                                        if (0 === n || n % 64 == 8) {
                                                            var r = "The call has been reverted or has thrown an error.";
                                                            if (0 !== n) {
                                                                r += " Error message: ";
                                                                for (var o = "", s = t.constant_result[0].substring(8), u = 0; u < n - 8; u += 64) o += a.tronWeb.toUtf8(s.substring(u, u + 64));
                                                                r += o.replace(/(\u0000|\u000b|\f)+/g, " ").replace(/ +/g, " ").replace(/\s+$/g, "")
                                                            }
                                                            return i(r)
                                                        }
                                                        var c = rt(a.outputs, "0x" + t.constant_result[0]);
                                                        return 1 === c.length && (c = c[0]), i(null, c)
                                                    } catch (e) {
                                                        return i(e)
                                                    }
                                                }));
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "_send",
                            value: function() {
                                var e = h()(l.a.mark((function e(t, n) {
                                    var r, i, o, s, a, u, c, d, f, v, p, g = this,
                                        m = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (r = m.length > 2 && void 0 !== m[2] ? m[2] : {}, i = m.length > 3 && void 0 !== m[3] ? m[3] : this.tronWeb.defaultPrivateKey, o = m.length > 4 && void 0 !== m[4] && m[4], Ue.isFunction(i) && (o = i, i = this.tronWeb.defaultPrivateKey), Ue.isFunction(r) && (o = r, r = {}), o) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this._send, t, n, r, i));
                                            case 7:
                                                if (t.length === n.length) {
                                                    e.next = 9;
                                                    break
                                                }
                                                throw new Error("Invalid argument count provided");
                                            case 9:
                                                if (this.contract.address) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", o("Smart contract is missing address"));
                                            case 11:
                                                if (this.contract.deployed) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return e.abrupt("return", o("Calling smart contracts requires you to load the contract first"));
                                            case 13:
                                                if (s = this.abi.stateMutability, !["pure", "view"].includes(s.toLowerCase())) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", o('Methods with state mutability "'.concat(s, '" must use call()')));
                                            case 16:
                                                return ["payable"].includes(s.toLowerCase()) || (r.callValue = 0), r = j()({}, this.defaultOptions, {
                                                    from: this.tronWeb.defaultAddress.hex
                                                }, r), a = n.map((function(e, n) {
                                                    return {
                                                        type: t[n],
                                                        value: e
                                                    }
                                                })), e.prev = 19, u = i ? this.tronWeb.address.fromPrivateKey(i) : this.tronWeb.defaultAddress.base58, e.next = 23, this.tronWeb.transactionBuilder.triggerSmartContract(this.contract.address, this.functionSelector, r, a, this.tronWeb.address.toHex(u));
                                            case 23:
                                                if ((c = e.sent).result && c.result.result) {
                                                    e.next = 26;
                                                    break
                                                }
                                                return e.abrupt("return", o("Unknown error: " + JSON.stringify(c, null, 2)));
                                            case 26:
                                                return e.next = 28, this.tronWeb.trx.sign(c.transaction, i);
                                            case 28:
                                                if ((d = e.sent).signature) {
                                                    e.next = 33;
                                                    break
                                                }
                                                if (i) {
                                                    e.next = 32;
                                                    break
                                                }
                                                return e.abrupt("return", o("Transaction was not signed properly"));
                                            case 32:
                                                return e.abrupt("return", o("Invalid private key provided"));
                                            case 33:
                                                return e.next = 35, this.tronWeb.trx.sendRawTransaction(d);
                                            case 35:
                                                if (!(f = e.sent).code) {
                                                    e.next = 40;
                                                    break
                                                }
                                                return v = {
                                                    error: f.code,
                                                    message: f.code
                                                }, f.message && (v.message = this.tronWeb.toUtf8(f.message)), e.abrupt("return", o(v));
                                            case 40:
                                                if (r.shouldPollResponse) {
                                                    e.next = 42;
                                                    break
                                                }
                                                return e.abrupt("return", o(null, d.txID));
                                            case 42:
                                                (p = function() {
                                                    var e = h()(l.a.mark((function e() {
                                                        var t, n, i, s = arguments;
                                                        return l.a.wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    if (20 != (t = s.length > 0 && void 0 !== s[0] ? s[0] : 0)) {
                                                                        e.next = 3;
                                                                        break
                                                                    }
                                                                    return e.abrupt("return", o({
                                                                        error: "Cannot find result in solidity node",
                                                                        transaction: d
                                                                    }));
                                                                case 3:
                                                                    return e.next = 5, g.tronWeb.trx.getTransactionInfo(d.txID);
                                                                case 5:
                                                                    if (n = e.sent, Object.keys(n).length) {
                                                                        e.next = 8;
                                                                        break
                                                                    }
                                                                    return e.abrupt("return", setTimeout((function() {
                                                                        p(t + 1)
                                                                    }), 3e3));
                                                                case 8:
                                                                    if (!n.result || "FAILED" != n.result) {
                                                                        e.next = 10;
                                                                        break
                                                                    }
                                                                    return e.abrupt("return", o({
                                                                        error: g.tronWeb.toUtf8(n.resMessage),
                                                                        transaction: d,
                                                                        output: n
                                                                    }));
                                                                case 10:
                                                                    if (Ue.hasProperty(n, "contractResult")) {
                                                                        e.next = 12;
                                                                        break
                                                                    }
                                                                    return e.abrupt("return", o({
                                                                        error: "Failed to execute: " + JSON.stringify(n, null, 2),
                                                                        transaction: d,
                                                                        output: n
                                                                    }));
                                                                case 12:
                                                                    if (!r.rawResponse) {
                                                                        e.next = 14;
                                                                        break
                                                                    }
                                                                    return e.abrupt("return", o(null, n));
                                                                case 14:
                                                                    return 1 === (i = rt(g.outputs, "0x" + n.contractResult[0])).length && (i = i[0]), e.abrupt("return", o(null, i));
                                                                case 17:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function() {
                                                        return e.apply(this, arguments)
                                                    }
                                                }())(), e.next = 49;
                                                break;
                                            case 46:
                                                return e.prev = 46, e.t0 = e.catch(19), e.abrupt("return", o(e.t0));
                                            case 49:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [19, 46]
                                    ])
                                })));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "_watch",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t, n, r, i, o, s, a, u = this,
                                        c = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = c.length > 0 && void 0 !== c[0] ? c[0] : {}, n = c.length > 1 && void 0 !== c[1] && c[1], Ue.isFunction(t) && (n = t, t = {}), Ue.isFunction(n)) {
                                                    e.next = 5;
                                                    break
                                                }
                                                throw new Error("Expected callback to be provided");
                                            case 5:
                                                if (this.contract.address) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.abrupt("return", n("Smart contract is missing address"));
                                            case 7:
                                                if (this.abi.type && /event/i.test(this.abi.type)) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", n("Invalid method type for event watching"));
                                            case 9:
                                                if (this.tronWeb.eventServer) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return", n("No event server configured"));
                                            case 11:
                                                return r = !1, i = !1, o = Date.now() - 1e3, s = function() {
                                                    var e = h()(l.a.mark((function e() {
                                                        var n, r, s, a, c, d;
                                                        return l.a.wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.prev = 0, n = {
                                                                        since: o,
                                                                        eventName: u.name,
                                                                        sort: "block_timestamp",
                                                                        blockNumber: "latest",
                                                                        filters: t.filters
                                                                    }, t.resourceNode && (/full/i.test(t.resourceNode) ? n.onlyUnconfirmed = !0 : n.onlyConfirmed = !0), e.next = 5, u.tronWeb.event.getEventsByContractAddress(u.contract.address, n);
                                                                case 5:
                                                                    return r = e.sent, s = r.sort((function(e, t) {
                                                                        return t.block - e.block
                                                                    })), a = Ye()(s, 1), c = a[0], d = r.filter((function(e, n) {
                                                                        return !(t.resourceNode && e.resourceNode && t.resourceNode.toLowerCase() !== e.resourceNode.toLowerCase() || r.slice(0, n).some((function(t) {
                                                                            return JSON.stringify(t) == JSON.stringify(e)
                                                                        })) || i && !(e.block > i))
                                                                    })), c && (i = c.block), e.abrupt("return", d);
                                                                case 12:
                                                                    return e.prev = 12, e.t0 = e.catch(0), e.abrupt("return", Promise.reject(e.t0));
                                                                case 15:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e, null, [
                                                            [0, 12]
                                                        ])
                                                    })));
                                                    return function() {
                                                        return e.apply(this, arguments)
                                                    }
                                                }(), a = function() {
                                                    r && clearInterval(r), r = setInterval((function() {
                                                        s().then((function(e) {
                                                            return e.forEach((function(e) {
                                                                n(null, Ue.parseEvent(e, u.abi))
                                                            }))
                                                        })).catch((function(e) {
                                                            return n(e)
                                                        }))
                                                    }), 3e3)
                                                }, e.next = 18, s();
                                            case 18:
                                                return a(), e.abrupt("return", {
                                                    start: a(),
                                                    stop: function() {
                                                        r && (clearInterval(r), r = !1)
                                                    }
                                                });
                                            case 20:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }]), e
                    }(),
                    ot = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (g()(this, e), !t || !t instanceof dt) throw new Error("Expected instance of TronWeb");
                            this.tronWeb = t, this.injectPromise = Ue.promiseInjector(this), this.address = r, this.abi = n, this.eventListener = !1, this.bytecode = !1, this.deployed = !1, this.lastBlock = !1, this.methods = {}, this.methodInstances = {}, this.props = [], this.tronWeb.isAddress(r) ? this.deployed = !0 : this.address = !1, this.loadAbi(n)
                        }
                        return y()(e, [{
                            key: "_getEvents",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t, n, r, i, o, s, a = this,
                                        u = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = u.length > 0 && void 0 !== u[0] ? u[0] : {}, e.next = 3, this.tronWeb.event.getEventsByContractAddress(this.address, t);
                                            case 3:
                                                return n = e.sent, r = n.sort((function(e, t) {
                                                    return t.block - e.block
                                                })), i = Ye()(r, 1), o = i[0], s = n.filter((function(e, r) {
                                                    return !(t.resourceNode && e.resourceNode && t.resourceNode.toLowerCase() !== e.resourceNode.toLowerCase() || n.slice(0, r).some((function(t) {
                                                        return JSON.stringify(t) == JSON.stringify(e)
                                                    })) || a.lastBlock && !(e.block > a.lastBlock))
                                                })), o && (this.lastBlock = o.block), e.abrupt("return", s);
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "_startEventListener",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t, n, r = this,
                                        i = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = i.length > 0 && void 0 !== i[0] ? i[0] : {}, n = i.length > 1 ? i[1] : void 0, Ue.isFunction(t) && (n = t, t = {}), this.eventListener && clearInterval(this.eventListener), this.tronWeb.eventServer) {
                                                    e.next = 6;
                                                    break
                                                }
                                                throw new Error("Event server is not configured");
                                            case 6:
                                                if (this.address) {
                                                    e.next = 8;
                                                    break
                                                }
                                                throw new Error("Contract is not configured with an address");
                                            case 8:
                                                return this.eventCallback = n, e.next = 11, this._getEvents(t);
                                            case 11:
                                                this.eventListener = setInterval((function() {
                                                    r._getEvents(t).then((function(e) {
                                                        return e.forEach((function(e) {
                                                            r.eventCallback && r.eventCallback(e)
                                                        }))
                                                    })).catch((function(e) {
                                                        console.error("Failed to get event list", e)
                                                    }))
                                                }), 3e3);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "_stopEventListener",
                            value: function() {
                                this.eventListener && (clearInterval(this.eventListener), this.eventListener = !1, this.eventCallback = !1)
                            }
                        }, {
                            key: "hasProperty",
                            value: function(e) {
                                return this.hasOwnProperty(e) || this.__proto__.hasOwnProperty(e)
                            }
                        }, {
                            key: "loadAbi",
                            value: function(e) {
                                var t = this;
                                this.abi = e, this.methods = {}, this.props.forEach((function(e) {
                                    return delete t[e]
                                })), e.forEach((function(e) {
                                    if (e.type && !/constructor/i.test(e.type)) {
                                        var n = new it(t, e),
                                            r = n.onMethod.bind(n),
                                            i = n.name,
                                            o = n.functionSelector,
                                            s = n.signature;
                                        t.methods[i] = r, t.methods[o] = r, t.methods[s] = r, t.methodInstances[i] = n, t.methodInstances[o] = n, t.methodInstances[s] = n, t.hasProperty(i) || (t[i] = r, t.props.push(i)), t.hasProperty(o) || (t[o] = r, t.props.push(o)), t.hasProperty(s) || (t[s] = r, t.props.push(s))
                                    }
                                }))
                            }
                        }, {
                            key: "decodeInput",
                            value: function(e) {
                                var t = e.substring(0, 8),
                                    n = e.substring(8);
                                if (!this.methodInstances[t]) throw new Error("Contract method " + t + " not found");
                                return {
                                    name: this.methodInstances[t].name,
                                    params: this.methodInstances[t].decodeInput(n)
                                }
                            }
                        }, {
                            key: "new",
                            value: function() {
                                var e = h()(l.a.mark((function e(t) {
                                    var n, r, i, o, s, a, u = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (n = u.length > 1 && void 0 !== u[1] ? u[1] : this.tronWeb.defaultPrivateKey, r = u.length > 2 && void 0 !== u[2] && u[2], Ue.isFunction(n) && (r = n, n = this.tronWeb.defaultPrivateKey), r) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.new, t, n));
                                            case 5:
                                                return e.prev = 5, i = this.tronWeb.address.fromPrivateKey(n), e.next = 9, this.tronWeb.transactionBuilder.createSmartContract(t, i);
                                            case 9:
                                                return o = e.sent, e.next = 12, this.tronWeb.trx.sign(o, n);
                                            case 12:
                                                return s = e.sent, e.next = 15, this.tronWeb.trx.sendRawTransaction(s);
                                            case 15:
                                                if (!(a = e.sent).code) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return e.abrupt("return", r({
                                                    error: a.code,
                                                    message: this.tronWeb.toUtf8(a.message)
                                                }));
                                            case 18:
                                                return e.next = 20, Ue.sleep(3e3);
                                            case 20:
                                                return e.abrupt("return", this.at(s.contract_address, r));
                                            case 23:
                                                return e.prev = 23, e.t0 = e.catch(5), e.abrupt("return", r(e.t0));
                                            case 26:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [5, 23]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "at",
                            value: function() {
                                var e = h()(l.a.mark((function e(t) {
                                    var n, r, i = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (n = i.length > 1 && void 0 !== i[1] && i[1]) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.at, t));
                                            case 3:
                                                return e.prev = 3, e.next = 6, this.tronWeb.trx.getContract(t);
                                            case 6:
                                                if ((r = e.sent).contract_address) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", n("Unknown error: " + JSON.stringify(r, null, 2)));
                                            case 9:
                                                return this.address = r.contract_address, this.bytecode = r.bytecode, this.deployed = !0, this.loadAbi(r.abi.entrys), e.abrupt("return", n(null, this));
                                            case 16:
                                                if (e.prev = 16, e.t0 = e.catch(3), !e.t0.toString().includes("does not exist")) {
                                                    e.next = 20;
                                                    break
                                                }
                                                return e.abrupt("return", n("Contract has not been deployed on the network"));
                                            case 20:
                                                return e.abrupt("return", n(e.t0));
                                            case 21:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [3, 16]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "events",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (Ue.isFunction(e) && (t = e, e = {}), !Ue.isFunction(t)) throw new Error("Callback function expected");
                                var n = this;
                                return {
                                    start: function() {
                                        var r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                        return r ? (n._startEventListener(e, t).then((function() {
                                            r()
                                        })).catch((function(e) {
                                            r(e)
                                        })), this) : (n._startEventListener(e, t), this)
                                    },
                                    stop: function() {
                                        n._stopEventListener()
                                    }
                                }
                            }
                        }]), e
                    }(),
                    st = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (g()(this, e), !t || !t instanceof dt) throw new Error("Expected instance of TronWeb");
                            this.tronWeb = t, this.pluginNoOverride = ["register"]
                        }
                        return y()(e, [{
                            key: "register",
                            value: function(e, t) {
                                var n = {
                                        requires: "0.0.0",
                                        components: {}
                                    },
                                    r = {
                                        plugged: [],
                                        skipped: []
                                    },
                                    i = new e(this.tronWeb);
                                if (Ue.isFunction(i.pluginInterface) && (n = i.pluginInterface(t)), !Je.a.satisfies(dt.version, n.requires)) throw new Error("The plugin is not compatible with this version of TronWeb");
                                for (var o in n.components)
                                    if (this.tronWeb.hasOwnProperty(o)) {
                                        var s = n.components[o],
                                            a = this.tronWeb[o].pluginNoOverride || [];
                                        for (var u in s) "constructor" === u || this.tronWeb[o][u] && (a.includes(u) || /^_/.test(u)) ? r.skipped.push(u) : (this.tronWeb[o][u] = s[u].bind(this.tronWeb[o]), r.plugged.push(u))
                                    } return r
                            }
                        }]), e
                    }(),
                    at = n(21),
                    ut = n.n(at),
                    ct = function() {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (g()(this, e), !(t && t instanceof dt)) throw new Error("Expected instance of TronWeb");
                            this.tronWeb = t, this.injectPromise = Ue.promiseInjector(this)
                        }
                        return y()(e, [{
                            key: "setServer",
                            value: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "healthcheck";
                                if (!t) return this.tronWeb.eventServer = !1;
                                if (Ue.isString(t) && (t = new Le.HttpProvider(t)), !this.tronWeb.isValidProvider(t)) throw new Error("Invalid event server provided");
                                this.tronWeb.eventServer = t, this.tronWeb.eventServer.isConnected = function() {
                                    return e.tronWeb.eventServer.request(n).then((function() {
                                        return !0
                                    })).catch((function() {
                                        return !1
                                    }))
                                }
                            }
                        }, {
                            key: "getEventsByContractAddress",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    r = Object.assign({
                                        sinceTimestamp: 0,
                                        eventName: !1,
                                        blockNumber: !1,
                                        size: 20,
                                        page: 1
                                    }, t),
                                    i = r.sinceTimestamp,
                                    o = r.since,
                                    s = r.fromTimestamp,
                                    a = r.eventName,
                                    u = r.blockNumber,
                                    c = r.size,
                                    l = r.page,
                                    d = r.onlyConfirmed,
                                    h = r.onlyUnconfirmed,
                                    f = r.previousLastEventFingerprint,
                                    p = r.previousFingerprint,
                                    g = r.fingerprint,
                                    m = r.rawResponse,
                                    y = r.sort,
                                    b = r.filters;
                                if (!n) return this.injectPromise(this.getEventsByContractAddress, e, t);
                                if (s = s || i || o, !this.tronWeb.eventServer) return n("No event server configured");
                                var k = [];
                                if (!this.tronWeb.isAddress(e)) return n("Invalid contract address provided");
                                if (a && !e) return n("Usage of event name filtering requires a contract address");
                                if (void 0 !== s && !Ue.isInteger(s)) return n("Invalid fromTimestamp provided");
                                if (!Ue.isInteger(c)) return n("Invalid size provided");
                                if (c > 200 && (console.warn("Defaulting to maximum accepted size: 200"), c = 200), !Ue.isInteger(l)) return n("Invalid page provided");
                                if (u && !a) return n("Usage of block number filtering requires an event name");
                                e && k.push(this.tronWeb.address.fromHex(e)), a && k.push(a), u && k.push(u);
                                var x = {
                                    size: c,
                                    page: l
                                };
                                return "object" === v()(b) && Object.keys(b).length > 0 && (x.filters = JSON.stringify(b)), s && (x.fromTimestamp = x.since = s), d && (x.onlyConfirmed = d), h && !d && (x.onlyUnconfirmed = h), y && (x.sort = y), (g = g || p || f) && (x.fingerprint = g), this.tronWeb.eventServer.request("event/contract/".concat(k.join("/"), "?").concat(ut.a.stringify(x))).then((function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    return e ? Ue.isArray(e) ? n(null, !0 === m ? e : e.map((function(e) {
                                        return Ue.mapEvent(e)
                                    }))) : n(e) : n("Unknown error occurred")
                                })).catch((function(e) {
                                    return n(e.response && e.response.data || e)
                                }))
                            }
                        }, {
                            key: "getEventsByTransactionID",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return Ue.isFunction(t) && (n = t, t = {}), n ? this.tronWeb.eventServer ? this.tronWeb.eventServer.request("event/transaction/".concat(e)).then((function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    return e ? Ue.isArray(e) ? n(null, !0 === t.rawResponse ? e : e.map((function(e) {
                                        return Ue.mapEvent(e)
                                    }))) : n(e) : n("Unknown error occurred")
                                })).catch((function(e) {
                                    return n(e.response && e.response.data || e)
                                })) : n("No event server configured") : this.injectPromise(this.getEventsByTransactionID, e, t)
                            }
                        }]), e
                    }();
                n.d(t, "default", (function() {
                    return dt
                }));
                var lt = "3.5.0",
                    dt = function(e) {
                        function t() {
                            var e, n, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            return g()(this, t), e = k()(this, w()(t).call(this)), "object" === v()(r) && (r.fullNode || r.fullHost) ? (n = r.fullNode || r.fullHost, i = r.solidityNode || r.fullHost, o = r.eventServer || r.fullHost, s = r.privateKey) : n = r, Ue.isString(n) && (n = new Le.HttpProvider(n)), Ue.isString(i) && (i = new Le.HttpProvider(i)), Ue.isString(o) && (o = new Le.HttpProvider(o)), e.event = new ct(I()(e)), e.transactionBuilder = new et(I()(e)), e.trx = new tt(I()(e)), e.plugin = new st(I()(e)), e.utils = Ue, e.setFullNode(n), e.setSolidityNode(i), e.setEventServer(o), e.providers = Le, e.BigNumber = Ke.a, e.defaultBlock = !1, e.defaultPrivateKey = !1, e.defaultAddress = {
                                hex: !1,
                                base58: !1
                            }, ["sha3", "toHex", "toUtf8", "fromUtf8", "toAscii", "fromAscii", "toDecimal", "fromDecimal", "toSun", "fromSun", "toBigNumber", "isAddress", "createAccount", "address", "version"].forEach((function(n) {
                                e[n] = t[n]
                            })), s && e.setPrivateKey(s), e.fullnodeVersion = lt, e.injectPromise = Ue.promiseInjector(I()(e)), e
                        }
                        return S()(t, e), y()(t, [{
                            key: "getFullnodeVersion",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, this.trx.getNodeInfo();
                                            case 3:
                                                t = e.sent, this.fullnodeVersion = t.configNodeInfo.codeVersion, 2 === this.fullnodeVersion.split(".").length && (this.fullnodeVersion += ".0"), e.next = 11;
                                                break;
                                            case 8:
                                                e.prev = 8, e.t0 = e.catch(0), this.fullnodeVersion = lt;
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [0, 8]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "setDefaultBlock",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if ([!1, "latest", "earliest", 0].includes(e)) return this.defaultBlock = e;
                                if (!Ue.isInteger(e) || !e) throw new Error("Invalid block ID provided");
                                this.defaultBlock = Math.abs(e)
                            }
                        }, {
                            key: "setPrivateKey",
                            value: function(e) {
                                try {
                                    this.setAddress(this.address.fromPrivateKey(e))
                                } catch (e) {
                                    throw new Error("Invalid private key provided")
                                }
                                this.defaultPrivateKey = e, this.emit("privateKeyChanged", e)
                            }
                        }, {
                            key: "setAddress",
                            value: function(e) {
                                if (!this.isAddress(e)) throw new Error("Invalid address provided");
                                var t = this.address.toHex(e),
                                    n = this.address.fromHex(e);
                                this.defaultPrivateKey && this.address.fromPrivateKey(this.defaultPrivateKey) !== n && (this.defaultPrivateKey = !1), this.defaultAddress = {
                                    hex: t,
                                    base58: n
                                }, this.emit("addressChanged", {
                                    hex: t,
                                    base58: n
                                })
                            }
                        }, {
                            key: "fullnodeSatisfies",
                            value: function(e) {
                                return Je.a.satisfies(this.fullnodeVersion, e)
                            }
                        }, {
                            key: "isValidProvider",
                            value: function(e) {
                                return Object.values(Le).some((function(t) {
                                    return e instanceof t
                                }))
                            }
                        }, {
                            key: "setFullNode",
                            value: function(e) {
                                if (Ue.isString(e) && (e = new Le.HttpProvider(e)), !this.isValidProvider(e)) throw new Error("Invalid full node provided");
                                this.fullNode = e, this.fullNode.setStatusPage("wallet/getnowblock"), this.getFullnodeVersion()
                            }
                        }, {
                            key: "setSolidityNode",
                            value: function(e) {
                                if (Ue.isString(e) && (e = new Le.HttpProvider(e)), !this.isValidProvider(e)) throw new Error("Invalid solidity node provided");
                                this.solidityNode = e, this.solidityNode.setStatusPage("walletsolidity/getnowblock")
                            }
                        }, {
                            key: "setEventServer",
                            value: function() {
                                var e;
                                (e = this.event).setServer.apply(e, arguments)
                            }
                        }, {
                            key: "currentProviders",
                            value: function() {
                                return {
                                    fullNode: this.fullNode,
                                    solidityNode: this.solidityNode,
                                    eventServer: this.eventServer
                                }
                            }
                        }, {
                            key: "currentProvider",
                            value: function() {
                                return this.currentProviders()
                            }
                        }, {
                            key: "getEventResult",
                            value: function() {
                                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                return "object" !== v()(n[1]) && (n[1] = {
                                    sinceTimestamp: n[1] || 0,
                                    eventName: n[2] || !1,
                                    blockNumber: n[3] || !1,
                                    size: n[4] || 20,
                                    page: n[5] || 1
                                }, n.splice(2, 4), Ue.isFunction(n[2]) || (Ue.isFunction(n[1].page) ? (n[2] = n[1].page, n[1].page = 1) : Ue.isFunction(n[1].size) && (n[2] = n[1].size, n[1].size = 20, n[1].page = 1))), (e = this.event).getEventsByContractAddress.apply(e, n)
                            }
                        }, {
                            key: "getEventByTransactionID",
                            value: function() {
                                var e;
                                return (e = this.event).getEventsByTransactionID.apply(e, arguments)
                            }
                        }, {
                            key: "contract",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return new ot(this, e, t)
                            }
                        }, {
                            key: "isConnected",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t, n = arguments;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = n.length > 0 && void 0 !== n[0] && n[0]) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return e.abrupt("return", this.injectPromise(this.isConnected));
                                            case 3:
                                                return e.t0 = t, e.next = 6, this.fullNode.isConnected();
                                            case 6:
                                                return e.t1 = e.sent, e.next = 9, this.solidityNode.isConnected();
                                            case 9:
                                                if (e.t2 = e.sent, e.t3 = this.eventServer, !e.t3) {
                                                    e.next = 15;
                                                    break
                                                }
                                                return e.next = 14, this.eventServer.isConnected();
                                            case 14:
                                                e.t3 = e.sent;
                                            case 15:
                                                return e.t4 = e.t3, e.t5 = {
                                                    fullNode: e.t1,
                                                    solidityNode: e.t2,
                                                    eventServer: e.t4
                                                }, e.abrupt("return", (0, e.t0)(null, e.t5));
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }], [{
                            key: "sha3",
                            value: function(e) {
                                return (arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] ? "" : "0x") + se(Buffer.from(e, "utf-8")).toString().substring(2)
                            }
                        }, {
                            key: "toHex",
                            value: function(e) {
                                if (Ue.isBoolean(e)) return t.fromDecimal(+e);
                                if (Ue.isBigNumber(e)) return t.fromDecimal(e);
                                if ("object" === v()(e)) return t.fromUtf8(JSON.stringify(e));
                                if (Ue.isString(e)) {
                                    if (/^(-|)0x/.test(e)) return e;
                                    if (!isFinite(e)) return t.fromUtf8(e)
                                }
                                var n = t.fromDecimal(e);
                                if ("0xNaN" === n) throw new Error("The passed value is not convertible to a hex string");
                                return n
                            }
                        }, {
                            key: "toUtf8",
                            value: function(e) {
                                if (Ue.isHex(e)) return e = e.replace(/^0x/, ""), Buffer.from(e, "hex").toString("utf8");
                                throw new Error("The passed value is not a valid hex string")
                            }
                        }, {
                            key: "fromUtf8",
                            value: function(e) {
                                if (!Ue.isString(e)) throw new Error("The passed value is not a valid utf-8 string");
                                return "0x" + Buffer.from(e, "utf8").toString("hex")
                            }
                        }, {
                            key: "toAscii",
                            value: function(e) {
                                if (Ue.isHex(e)) {
                                    var t = "",
                                        n = 0,
                                        r = e.length;
                                    for ("0x" === e.substring(0, 2) && (n = 2); n < r; n += 2) {
                                        var i = parseInt(e.substr(n, 2), 16);
                                        t += String.fromCharCode(i)
                                    }
                                    return t
                                }
                                throw new Error("The passed value is not a valid hex string")
                            }
                        }, {
                            key: "fromAscii",
                            value: function(e, t) {
                                if (!Ue.isString(e)) throw new Error("The passed value is not a valid utf-8 string");
                                return "0x" + Buffer.from(e, "ascii").toString("hex").padEnd(t, "0")
                            }
                        }, {
                            key: "toDecimal",
                            value: function(e) {
                                return t.toBigNumber(e).toNumber()
                            }
                        }, {
                            key: "fromDecimal",
                            value: function(e) {
                                var n = t.toBigNumber(e),
                                    r = n.toString(16);
                                return n.isLessThan(0) ? "-0x" + r.substr(1) : "0x" + r
                            }
                        }, {
                            key: "fromSun",
                            value: function(e) {
                                var n = t.toBigNumber(e).div(1e6);
                                return Ue.isBigNumber(e) ? n : n.toString(10)
                            }
                        }, {
                            key: "toSun",
                            value: function(e) {
                                var n = t.toBigNumber(e).times(1e6);
                                return Ue.isBigNumber(e) ? n : n.toString(10)
                            }
                        }, {
                            key: "toBigNumber",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                return Ue.isBigNumber(e) ? e : Ue.isString(e) && /^(-|)0x/.test(e) ? new Ke.a(e.replace("0x", ""), 16) : new Ke.a(e.toString(10), 10)
                            }
                        }, {
                            key: "isAddress",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!Ue.isString(e)) return !1;
                                if (42 === e.length) try {
                                    return t.isAddress(Ue.crypto.getBase58CheckAddress(Ue.code.hexStr2byteArray(e)))
                                } catch (e) {
                                    return !1
                                }
                                try {
                                    return Ue.crypto.isAddressValid(e)
                                } catch (e) {
                                    return !1
                                }
                            }
                        }, {
                            key: "createAccount",
                            value: function() {
                                var e = h()(l.a.mark((function e() {
                                    var t;
                                    return l.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t = Ue.accounts.generateAccount(), e.abrupt("return", t);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "address",
                            get: function() {
                                return {
                                    fromHex: function(e) {
                                        return Ue.isHex(e) ? Ue.crypto.getBase58CheckAddress(Ue.code.hexStr2byteArray(e.replace(/^0x/, L))) : e
                                    },
                                    toHex: function(e) {
                                        return Ue.isHex(e) ? e.toLowerCase().replace(/^0x/, L) : Ue.code.byteArray2hexStr(Ue.crypto.decodeBase58Address(e)).toLowerCase()
                                    },
                                    fromPrivateKey: function(e) {
                                        try {
                                            return Ue.crypto.pkToAddress(e)
                                        } catch (e) {
                                            return !1
                                        }
                                    }
                                }
                            }
                        }]), t
                    }(Ve.a);
                _()(dt, "providers", Le), _()(dt, "BigNumber", Ke.a), _()(dt, "TransactionBuilder", et), _()(dt, "Trx", tt), _()(dt, "Contract", ot), _()(dt, "Plugin", st), _()(dt, "Event", ct), _()(dt, "version", ze.a), _()(dt, "utils", Ue)
            }]).default
        },
        2293: function(e, t, n) {
            "use strict";
            var r = n(5289);
            t.getPublicSuffix = function(e) {
                return r.get(e)
            }
        },
        2294: function(e, t, n) {
            "use strict";

            function r() {}
            t.Store = r, r.prototype.synchronous = !1, r.prototype.findCookie = function(e, t, n, r) {
                throw new Error("findCookie is not implemented")
            }, r.prototype.findCookies = function(e, t, n) {
                throw new Error("findCookies is not implemented")
            }, r.prototype.putCookie = function(e, t) {
                throw new Error("putCookie is not implemented")
            }, r.prototype.updateCookie = function(e, t, n) {
                throw new Error("updateCookie is not implemented")
            }, r.prototype.removeCookie = function(e, t, n, r) {
                throw new Error("removeCookie is not implemented")
            }, r.prototype.removeCookies = function(e, t, n) {
                throw new Error("removeCookies is not implemented")
            }, r.prototype.removeAllCookies = function(e) {
                throw new Error("removeAllCookies is not implemented")
            }, r.prototype.getAllCookies = function(e) {
                throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)")
            }
        },
        2295: function(e, t, n) {
            "use strict";
            var r = n(2293);
            t.permuteDomain = function(e) {
                var t = r.getPublicSuffix(e);
                if (!t) return null;
                if (t == e) return [e];
                for (var n = e.slice(0, -(t.length + 1)).split(".").reverse(), i = t, o = [i]; n.length;) i = n.shift() + "." + i, o.push(i);
                return o
            }
        },
        2296: function(e, t, n) {
            "use strict";
            t.pathMatch = function(e, t) {
                if (t === e) return !0;
                if (0 === e.indexOf(t)) {
                    if ("/" === t.substr(-1)) return !0;
                    if ("/" === e.substr(t.length, 1)) return !0
                }
                return !1
            }
        },
        5288: function(e, t, n) {
            "use strict";
            var r, i = n(598),
                o = n(102).parse,
                s = n(43),
                a = n(2293),
                u = n(2294).Store,
                c = n(5291).MemoryCookieStore,
                l = n(2296).pathMatch,
                d = n(5292);
            try {
                r = n(469)
            } catch (e) {
                console.warn("tough-cookie: can't load punycode; won't use punycode for domain normalization")
            }
            var h = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/,
                f = /[\x00-\x1F]/,
                v = ["\n", "\r", "\0"],
                p = /[\x20-\x3A\x3C-\x7E]+/,
                g = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/,
                m = {
                    jan: 0,
                    feb: 1,
                    mar: 2,
                    apr: 3,
                    may: 4,
                    jun: 5,
                    jul: 6,
                    aug: 7,
                    sep: 8,
                    oct: 9,
                    nov: 10,
                    dec: 11
                },
                y = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                b = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

            function k(e, t, n, r) {
                for (var i = 0; i < e.length;) {
                    var o = e.charCodeAt(i);
                    if (o <= 47 || o >= 58) break;
                    i++
                }
                return i < t || i > n ? null : r || i == e.length ? parseInt(e.substr(0, i), 10) : null
            }

            function x(e) {
                var t = e.split(":"),
                    n = [0, 0, 0];
                if (3 !== t.length) return null;
                for (var r = 0; r < 3; r++) {
                    var i = 2 == r,
                        o = k(t[r], 1, 2, i);
                    if (null === o) return null;
                    n[r] = o
                }
                return n
            }

            function w(e) {
                e = String(e).substr(0, 3).toLowerCase();
                var t = m[e];
                return t >= 0 ? t : null
            }

            function A(e) {
                if (e) {
                    var t = e.split(g);
                    if (t) {
                        for (var n = null, r = null, i = null, o = null, s = null, a = null, u = 0; u < t.length; u++) {
                            var c, l = t[u].trim();
                            if (l.length) null === i && (c = x(l)) ? (n = c[0], r = c[1], i = c[2]) : null !== o || null === (c = k(l, 1, 2, !0)) ? null !== s || null === (c = w(l)) ? null === a && null !== (c = k(l, 2, 4, !0)) && ((a = c) >= 70 && a <= 99 ? a += 1900 : a >= 0 && a <= 69 && (a += 2e3)) : s = c : o = c
                        }
                        if (!(null === o || null === s || null === a || null === i || o < 1 || o > 31 || a < 1601 || n > 23 || r > 59 || i > 59)) return new Date(Date.UTC(a, s, o, n, r, i))
                    }
                }
            }

            function I(e) {
                var t = e.getUTCDate();
                t = t >= 10 ? t : "0" + t;
                var n = e.getUTCHours();
                n = n >= 10 ? n : "0" + n;
                var r = e.getUTCMinutes();
                r = r >= 10 ? r : "0" + r;
                var i = e.getUTCSeconds();
                return i = i >= 10 ? i : "0" + i, b[e.getUTCDay()] + ", " + t + " " + y[e.getUTCMonth()] + " " + e.getUTCFullYear() + " " + n + ":" + r + ":" + i + " GMT"
            }

            function W(e) {
                return null == e ? null : (e = e.trim().replace(/^\./, ""), r && /[^\u0001-\u007f]/.test(e) && (e = r.toASCII(e)), e.toLowerCase())
            }

            function S(e, t, n) {
                if (null == e || null == t) return null;
                if (!1 !== n && (e = W(e), t = W(t)), e == t) return !0;
                if (i.isIP(e)) return !1;
                var r = e.indexOf(t);
                return !(r <= 0) && (e.length === t.length + r && "." === e.substr(r - 1, 1))
            }

            function P(e) {
                if (!e || "/" !== e.substr(0, 1)) return "/";
                if ("/" === e) return e;
                var t = e.lastIndexOf("/");
                return 0 === t ? "/" : e.slice(0, t)
            }

            function _(e, t) {
                var n, r, i = (e = function(e) {
                    for (var t = 0; t < v.length; t++) {
                        var n = e.indexOf(v[t]); - 1 !== n && (e = e.substr(0, n))
                    }
                    return e
                }(e)).indexOf("=");
                if (t) 0 === i && (i = (e = e.substr(1)).indexOf("="));
                else if (i <= 0) return;
                if (i <= 0 ? (n = "", r = e.trim()) : (n = e.substr(0, i).trim(), r = e.substr(i + 1).trim()), !f.test(n) && !f.test(r)) {
                    var o = new B;
                    return o.key = n, o.value = r, o
                }
            }

            function C(e, t) {
                t && "object" == typeof t || (t = {});
                var n = (e = e.trim()).indexOf(";"),
                    r = _(-1 === n ? e : e.substr(0, n), !!t.loose);
                if (r) {
                    if (-1 === n) return r;
                    var i = e.slice(n + 1).trim();
                    if (0 === i.length) return r;
                    for (var o = i.split(";"); o.length;) {
                        var s = o.shift().trim();
                        if (0 !== s.length) {
                            var a, u, c = s.indexOf("=");
                            switch (-1 === c ? (a = s, u = null) : (a = s.substr(0, c), u = s.substr(c + 1)), a = a.trim().toLowerCase(), u && (u = u.trim()), a) {
                                case "expires":
                                    if (u) {
                                        var l = A(u);
                                        l && (r.expires = l)
                                    }
                                    break;
                                case "max-age":
                                    if (u && /^-?[0-9]+$/.test(u)) {
                                        var d = parseInt(u, 10);
                                        r.setMaxAge(d)
                                    }
                                    break;
                                case "domain":
                                    if (u) {
                                        var h = u.trim().replace(/^\./, "");
                                        h && (r.domain = h.toLowerCase())
                                    }
                                    break;
                                case "path":
                                    r.path = u && "/" === u[0] ? u : null;
                                    break;
                                case "secure":
                                    r.secure = !0;
                                    break;
                                case "httponly":
                                    r.httpOnly = !0;
                                    break;
                                default:
                                    r.extensions = r.extensions || [], r.extensions.push(s)
                            }
                        }
                    }
                    return r
                }
            }

            function N(e) {
                var t;
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    return e
                }
                return t
            }

            function T(e) {
                if (!e) return null;
                var t;
                if ("string" == typeof e) {
                    if ((t = N(e)) instanceof Error) return null
                } else t = e;
                for (var n = new B, r = 0; r < B.serializableProperties.length; r++) {
                    var i = B.serializableProperties[r];
                    void 0 !== t[i] && t[i] !== B.prototype[i] && ("expires" === i || "creation" === i || "lastAccessed" === i ? null === t[i] ? n[i] = null : n[i] = "Infinity" == t[i] ? "Infinity" : new Date(t[i]) : n[i] = t[i])
                }
                return n
            }

            function j(e, t) {
                var n = 0,
                    r = e.path ? e.path.length : 0;
                return 0 !== (n = (t.path ? t.path.length : 0) - r) || 0 !== (n = (e.creation ? e.creation.getTime() : 2147483647e3) - (t.creation ? t.creation.getTime() : 2147483647e3)) ? n : n = e.creationIndex - t.creationIndex
            }

            function E(e) {
                if (e instanceof Object) return e;
                try {
                    e = decodeURI(e)
                } catch (e) {}
                return o(e)
            }

            function B(e) {
                e = e || {}, Object.keys(e).forEach((function(t) {
                    B.prototype.hasOwnProperty(t) && B.prototype[t] !== e[t] && "_" !== t.substr(0, 1) && (this[t] = e[t])
                }), this), this.creation = this.creation || new Date, Object.defineProperty(this, "creationIndex", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: ++B.cookiesCreated
                })
            }

            function F(e, t) {
                "boolean" == typeof t ? t = {
                    rejectPublicSuffixes: t
                } : null == t && (t = {}), null != t.rejectPublicSuffixes && (this.rejectPublicSuffixes = t.rejectPublicSuffixes), null != t.looseMode && (this.enableLooseMode = t.looseMode), e || (e = new c), this.store = e
            }
            B.cookiesCreated = 0, B.parse = C, B.fromJSON = T, B.prototype.key = "", B.prototype.value = "", B.prototype.expires = "Infinity", B.prototype.maxAge = null, B.prototype.domain = null, B.prototype.path = null, B.prototype.secure = !1, B.prototype.httpOnly = !1, B.prototype.extensions = null, B.prototype.hostOnly = null, B.prototype.pathIsDefault = null, B.prototype.creation = null, B.prototype.lastAccessed = null, Object.defineProperty(B.prototype, "creationIndex", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: 0
            }), B.serializableProperties = Object.keys(B.prototype).filter((function(e) {
                return !(B.prototype[e] instanceof Function || "creationIndex" === e || "_" === e.substr(0, 1))
            })), B.prototype.inspect = function() {
                var e = Date.now();
                return 'Cookie="' + this.toString() + "; hostOnly=" + (null != this.hostOnly ? this.hostOnly : "?") + "; aAge=" + (this.lastAccessed ? e - this.lastAccessed.getTime() + "ms" : "?") + "; cAge=" + (this.creation ? e - this.creation.getTime() + "ms" : "?") + '"'
            }, s.inspect.custom && (B.prototype[s.inspect.custom] = B.prototype.inspect), B.prototype.toJSON = function() {
                for (var e = {}, t = B.serializableProperties, n = 0; n < t.length; n++) {
                    var r = t[n];
                    this[r] !== B.prototype[r] && ("expires" === r || "creation" === r || "lastAccessed" === r ? null === this[r] ? e[r] = null : e[r] = "Infinity" == this[r] ? "Infinity" : this[r].toISOString() : "maxAge" === r ? null !== this[r] && (e[r] = this[r] == 1 / 0 || this[r] == -1 / 0 ? this[r].toString() : this[r]) : this[r] !== B.prototype[r] && (e[r] = this[r]))
                }
                return e
            }, B.prototype.clone = function() {
                return T(this.toJSON())
            }, B.prototype.validate = function() {
                if (!h.test(this.value)) return !1;
                if (!(this.expires == 1 / 0 || this.expires instanceof Date || A(this.expires))) return !1;
                if (null != this.maxAge && this.maxAge <= 0) return !1;
                if (null != this.path && !p.test(this.path)) return !1;
                var e = this.cdomain();
                if (e) {
                    if (e.match(/\.$/)) return !1;
                    if (null == a.getPublicSuffix(e)) return !1
                }
                return !0
            }, B.prototype.setExpires = function(e) {
                e instanceof Date ? this.expires = e : this.expires = A(e) || "Infinity"
            }, B.prototype.setMaxAge = function(e) {
                this.maxAge = e === 1 / 0 || e === -1 / 0 ? e.toString() : e
            }, B.prototype.cookieString = function() {
                var e = this.value;
                return null == e && (e = ""), "" === this.key ? e : this.key + "=" + e
            }, B.prototype.toString = function() {
                var e = this.cookieString();
                return this.expires != 1 / 0 && (this.expires instanceof Date ? e += "; Expires=" + I(this.expires) : e += "; Expires=" + this.expires), null != this.maxAge && this.maxAge != 1 / 0 && (e += "; Max-Age=" + this.maxAge), this.domain && !this.hostOnly && (e += "; Domain=" + this.domain), this.path && (e += "; Path=" + this.path), this.secure && (e += "; Secure"), this.httpOnly && (e += "; HttpOnly"), this.extensions && this.extensions.forEach((function(t) {
                    e += "; " + t
                })), e
            }, B.prototype.TTL = function(e) {
                if (null != this.maxAge) return this.maxAge <= 0 ? 0 : 1e3 * this.maxAge;
                var t = this.expires;
                return t != 1 / 0 ? (t instanceof Date || (t = A(t) || 1 / 0), t == 1 / 0 ? 1 / 0 : t.getTime() - (e || Date.now())) : 1 / 0
            }, B.prototype.expiryTime = function(e) {
                if (null != this.maxAge) {
                    var t = e || this.creation || new Date,
                        n = this.maxAge <= 0 ? -1 / 0 : 1e3 * this.maxAge;
                    return t.getTime() + n
                }
                return this.expires == 1 / 0 ? 1 / 0 : this.expires.getTime()
            }, B.prototype.expiryDate = function(e) {
                var t = this.expiryTime(e);
                return t == 1 / 0 ? new Date(2147483647e3) : t == -1 / 0 ? new Date(0) : new Date(t)
            }, B.prototype.isPersistent = function() {
                return null != this.maxAge || this.expires != 1 / 0
            }, B.prototype.cdomain = B.prototype.canonicalizedDomain = function() {
                return null == this.domain ? null : W(this.domain)
            }, F.prototype.store = null, F.prototype.rejectPublicSuffixes = !0, F.prototype.enableLooseMode = !1;
            var O = [];

            function D(e) {
                return function() {
                    if (!this.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
                    var t, n, r = Array.prototype.slice.call(arguments);
                    if (r.push((function(e, r) {
                            t = e, n = r
                        })), this[e].apply(this, r), t) throw t;
                    return n
                }
            }
            O.push("setCookie"), F.prototype.setCookie = function(e, t, n, r) {
                var i, o = E(t);
                n instanceof Function && (r = n, n = {});
                var s = W(o.hostname),
                    u = this.enableLooseMode;
                if (null != n.loose && (u = n.loose), e instanceof B || (e = B.parse(e, {
                        loose: u
                    })), !e) return i = new Error("Cookie failed to parse"), r(n.ignoreError ? null : i);
                var c = n.now || new Date;
                if (this.rejectPublicSuffixes && e.domain && null == a.getPublicSuffix(e.cdomain())) return i = new Error("Cookie has domain set to a public suffix"), r(n.ignoreError ? null : i);
                if (e.domain) {
                    if (!S(s, e.cdomain(), !1)) return i = new Error("Cookie not in this host's domain. Cookie:" + e.cdomain() + " Request:" + s), r(n.ignoreError ? null : i);
                    null == e.hostOnly && (e.hostOnly = !1)
                } else e.hostOnly = !0, e.domain = s;
                if (e.path && "/" === e.path[0] || (e.path = P(o.pathname), e.pathIsDefault = !0), !1 === n.http && e.httpOnly) return i = new Error("Cookie is HttpOnly and this isn't an HTTP API"), r(n.ignoreError ? null : i);
                var l = this.store;
                l.updateCookie || (l.updateCookie = function(e, t, n) {
                    this.putCookie(t, n)
                }), l.findCookie(e.domain, e.path, e.key, (function(t, i) {
                    if (t) return r(t);
                    var o = function(t) {
                        if (t) return r(t);
                        r(null, e)
                    };
                    if (i) {
                        if (!1 === n.http && i.httpOnly) return t = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), r(n.ignoreError ? null : t);
                        e.creation = i.creation, e.creationIndex = i.creationIndex, e.lastAccessed = c, l.updateCookie(i, e, o)
                    } else e.creation = e.lastAccessed = c, l.putCookie(e, o)
                }))
            }, O.push("getCookies"), F.prototype.getCookies = function(e, t, n) {
                var r = E(e);
                t instanceof Function && (n = t, t = {});
                var i = W(r.hostname),
                    o = r.pathname || "/",
                    s = t.secure;
                null != s || !r.protocol || "https:" != r.protocol && "wss:" != r.protocol || (s = !0);
                var a = t.http;
                null == a && (a = !0);
                var u = t.now || Date.now(),
                    c = !1 !== t.expire,
                    d = !!t.allPaths,
                    h = this.store;

                function f(e) {
                    if (e.hostOnly) {
                        if (e.domain != i) return !1
                    } else if (!S(i, e.domain, !1)) return !1;
                    return !(!d && !l(o, e.path)) && (!(e.secure && !s) && (!(e.httpOnly && !a) && (!(c && e.expiryTime() <= u) || (h.removeCookie(e.domain, e.path, e.key, (function() {})), !1))))
                }
                h.findCookies(i, d ? null : o, (function(e, r) {
                    if (e) return n(e);
                    r = r.filter(f), !1 !== t.sort && (r = r.sort(j));
                    var i = new Date;
                    r.forEach((function(e) {
                        e.lastAccessed = i
                    })), n(null, r)
                }))
            }, O.push("getCookieString"), F.prototype.getCookieString = function() {
                var e = Array.prototype.slice.call(arguments, 0),
                    t = e.pop(),
                    n = function(e, n) {
                        e ? t(e) : t(null, n.sort(j).map((function(e) {
                            return e.cookieString()
                        })).join("; "))
                    };
                e.push(n), this.getCookies.apply(this, e)
            }, O.push("getSetCookieStrings"), F.prototype.getSetCookieStrings = function() {
                var e = Array.prototype.slice.call(arguments, 0),
                    t = e.pop(),
                    n = function(e, n) {
                        e ? t(e) : t(null, n.map((function(e) {
                            return e.toString()
                        })))
                    };
                e.push(n), this.getCookies.apply(this, e)
            }, O.push("serialize"), F.prototype.serialize = function(e) {
                var t = this.store.constructor.name;
                "Object" === t && (t = null);
                var n = {
                    version: "tough-cookie@" + d,
                    storeType: t,
                    rejectPublicSuffixes: !!this.rejectPublicSuffixes,
                    cookies: []
                };
                if (!this.store.getAllCookies || "function" != typeof this.store.getAllCookies) return e(new Error("store does not support getAllCookies and cannot be serialized"));
                this.store.getAllCookies((function(t, r) {
                    return t ? e(t) : (n.cookies = r.map((function(e) {
                        return delete(e = e instanceof B ? e.toJSON() : e).creationIndex, e
                    })), e(null, n))
                }))
            }, F.prototype.toJSON = function() {
                return this.serializeSync()
            }, O.push("_importCookies"), F.prototype._importCookies = function(e, t) {
                var n = this,
                    r = e.cookies;
                if (!r || !Array.isArray(r)) return t(new Error("serialized jar has no cookies array"));
                r = r.slice(),
                    function e(i) {
                        if (i) return t(i);
                        if (!r.length) return t(i, n);
                        var o;
                        try {
                            o = T(r.shift())
                        } catch (e) {
                            return t(e)
                        }
                        if (null === o) return e(null);
                        n.store.putCookie(o, e)
                    }()
            }, F.deserialize = function(e, t, n) {
                var r;
                if (3 !== arguments.length && (n = t, t = null), "string" == typeof e) {
                    if ((r = N(e)) instanceof Error) return n(r)
                } else r = e;
                var i = new F(t, r.rejectPublicSuffixes);
                i._importCookies(r, (function(e) {
                    if (e) return n(e);
                    n(null, i)
                }))
            }, F.deserializeSync = function(e, t) {
                var n = "string" == typeof e ? JSON.parse(e) : e,
                    r = new F(t, n.rejectPublicSuffixes);
                if (!r.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
                return r._importCookiesSync(n), r
            }, F.fromJSON = F.deserializeSync, F.prototype.clone = function(e, t) {
                1 === arguments.length && (t = e, e = null), this.serialize((function(n, r) {
                    if (n) return t(n);
                    F.deserialize(r, e, t)
                }))
            }, O.push("removeAllCookies"), F.prototype.removeAllCookies = function(e) {
                var t = this.store;
                if (t.removeAllCookies instanceof Function && t.removeAllCookies !== u.prototype.removeAllCookies) return t.removeAllCookies(e);
                t.getAllCookies((function(n, r) {
                    if (n) return e(n);
                    if (0 === r.length) return e(null);
                    var i = 0,
                        o = [];

                    function s(t) {
                        if (t && o.push(t), ++i === r.length) return e(o.length ? o[0] : null)
                    }
                    r.forEach((function(e) {
                        t.removeCookie(e.domain, e.path, e.key, s)
                    }))
                }))
            }, F.prototype._cloneSync = D("clone"), F.prototype.cloneSync = function(e) {
                if (!e.synchronous) throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
                return this._cloneSync(e)
            }, O.forEach((function(e) {
                F.prototype[e + "Sync"] = D(e)
            })), t.version = d, t.CookieJar = F, t.Cookie = B, t.Store = u, t.MemoryCookieStore = c, t.parseDate = A, t.formatDate = I, t.parse = C, t.fromJSON = T, t.domainMatch = S, t.defaultPath = P, t.pathMatch = l, t.getPublicSuffix = a.getPublicSuffix, t.cookieCompare = j, t.permuteDomain = n(2295).permuteDomain, t.permutePath = function(e) {
                if ("/" === e) return ["/"];
                e.lastIndexOf("/") === e.length - 1 && (e = e.substr(0, e.length - 1));
                for (var t = [e]; e.length > 1;) {
                    var n = e.lastIndexOf("/");
                    if (0 === n) break;
                    e = e.substr(0, n), t.push(e)
                }
                return t.push("/"), t
            }, t.canonicalDomain = W
        },
        5291: function(e, t, n) {
            "use strict";
            var r = n(2294).Store,
                i = n(2295).permuteDomain,
                o = n(2296).pathMatch,
                s = n(43);

            function a() {
                r.call(this), this.idx = {}
            }
            s.inherits(a, r), t.MemoryCookieStore = a, a.prototype.idx = null, a.prototype.synchronous = !0, a.prototype.inspect = function() {
                return "{ idx: " + s.inspect(this.idx, !1, 2) + " }"
            }, s.inspect.custom && (a.prototype[s.inspect.custom] = a.prototype.inspect), a.prototype.findCookie = function(e, t, n, r) {
                return this.idx[e] && this.idx[e][t] ? r(null, this.idx[e][t][n] || null) : r(null, void 0)
            }, a.prototype.findCookies = function(e, t, n) {
                var r, s = [];
                if (!e) return n(null, []);
                r = t ? function(e) {
                    Object.keys(e).forEach((function(n) {
                        if (o(t, n)) {
                            var r = e[n];
                            for (var i in r) s.push(r[i])
                        }
                    }))
                } : function(e) {
                    for (var t in e) {
                        var n = e[t];
                        for (var r in n) s.push(n[r])
                    }
                };
                var a = i(e) || [e],
                    u = this.idx;
                a.forEach((function(e) {
                    var t = u[e];
                    t && r(t)
                })), n(null, s)
            }, a.prototype.putCookie = function(e, t) {
                this.idx[e.domain] || (this.idx[e.domain] = {}), this.idx[e.domain][e.path] || (this.idx[e.domain][e.path] = {}), this.idx[e.domain][e.path][e.key] = e, t(null)
            }, a.prototype.updateCookie = function(e, t, n) {
                this.putCookie(t, n)
            }, a.prototype.removeCookie = function(e, t, n, r) {
                this.idx[e] && this.idx[e][t] && this.idx[e][t][n] && delete this.idx[e][t][n], r(null)
            }, a.prototype.removeCookies = function(e, t, n) {
                return this.idx[e] && (t ? delete this.idx[e][t] : delete this.idx[e]), n(null)
            }, a.prototype.removeAllCookies = function(e) {
                return this.idx = {}, e(null)
            }, a.prototype.getAllCookies = function(e) {
                var t = [],
                    n = this.idx;
                Object.keys(n).forEach((function(e) {
                    Object.keys(n[e]).forEach((function(r) {
                        Object.keys(n[e][r]).forEach((function(i) {
                            null !== i && t.push(n[e][r][i])
                        }))
                    }))
                })), t.sort((function(e, t) {
                    return (e.creationIndex || 0) - (t.creationIndex || 0)
                })), e(null, t)
            }
        },
        5292: function(e, t) {
            e.exports = "2.5.0"
        }
    }
]);