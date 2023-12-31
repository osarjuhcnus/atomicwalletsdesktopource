/*! For license information please see vendors.ab7a706c2a47f0a3516d.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [140], {
        628: function(t, i, r) {
            (function(t, i, r, e, n, o, s) {
                "use strict";
                o = o && o.hasOwnProperty("default") ? o.default : o, s = s && s.hasOwnProperty("default") ? s.default : s;
                var h = function(t, i) {
                        return (h = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, i) {
                                t.__proto__ = i
                            } || function(t, i) {
                                for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r])
                            })(t, i)
                    },
                    u = function() {
                        return (u = Object.assign || function(t) {
                            for (var i, r = 1, e = arguments.length; r < e; r++)
                                for (var n in i = arguments[r]) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                            return t
                        }).apply(this, arguments)
                    };

                function a(t, i, r, e) {
                    return new(r || (r = Promise))((function(n, o) {
                        function s(t) {
                            try {
                                u(e.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function h(t) {
                            try {
                                u(e.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(t) {
                            t.done ? n(t.value) : new r((function(i) {
                                i(t.value)
                            })).then(s, h)
                        }
                        u((e = e.apply(t, i || [])).next())
                    }))
                }

                function l(t, i) {
                    var r, e, n, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & n[0]) throw n[1];
                            return n[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: h(0),
                        throw: h(1),
                        return: h(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function h(o) {
                        return function(h) {
                            return function(o) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, e && (n = 2 & o[0] ? e.return : o[0] ? e.throw || ((n = e.return) && n.call(e), 0) : e.next) && !(n = n.call(e, o[1])).done) return n;
                                    switch (e = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            n = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, e = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < n[1]) {
                                                s.label = n[1], n = o;
                                                break
                                            }
                                            if (n && s.label < n[2]) {
                                                s.label = n[2], s.ops.push(o);
                                                break
                                            }
                                            n[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    o = i.call(t, s)
                                } catch (t) {
                                    o = [6, t], e = 0
                                } finally {
                                    r = n = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, h])
                        }
                    }
                }

                function f(t, i) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!r) return t;
                    var e, n, o = r.call(t),
                        s = [];
                    try {
                        for (;
                            (void 0 === i || i-- > 0) && !(e = o.next()).done;) s.push(e.value)
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            e && !e.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return s
                }

                function c() {
                    for (var t = [], i = 0; i < arguments.length; i++) t = t.concat(f(arguments[i]));
                    return t
                }
                var d = function(t) {
                        var i = {
                                version: t.version,
                                nonce: t.nonce || 0,
                                toaddr: r.bytes.hexToByteArray(t.toAddr.replace("0x", "").toLowerCase()),
                                senderpubkey: e.ZilliqaMessage.ByteArray.create({
                                    data: r.bytes.hexToByteArray(t.pubKey || "00")
                                }),
                                amount: e.ZilliqaMessage.ByteArray.create({
                                    data: Uint8Array.from(t.amount.toArrayLike(Buffer, void 0, 16))
                                }),
                                gasprice: e.ZilliqaMessage.ByteArray.create({
                                    data: Uint8Array.from(t.gasPrice.toArrayLike(Buffer, void 0, 16))
                                }),
                                gaslimit: t.gasLimit,
                                code: t.code && t.code.length ? Uint8Array.from(c(t.code).map((function(t) {
                                    return t.charCodeAt(0)
                                }))) : null,
                                data: t.data && t.data.length ? Uint8Array.from(c(t.data).map((function(t) {
                                    return t.charCodeAt(0)
                                }))) : null
                            },
                            n = e.ZilliqaMessage.ProtoTransactionCoreInfo.create(i);
                        return Buffer.from(e.ZilliqaMessage.ProtoTransactionCoreInfo.encode(n).finish())
                    },
                    m = function(t) {
                        return r.validation.isPlainObject(t) && r.validation.matchesObject(t, {})
                    },
                    p = function(t) {
                        var i = {
                            version: [r.validation.required(r.validation.isNumber)],
                            toAddr: [r.validation.required(r.validation.isAddress)],
                            amount: [r.validation.required(r.validation.isBN)],
                            gasPrice: [r.validation.required(r.validation.isBN)],
                            gasLimit: [r.validation.required(r.validation.isLong)],
                            code: [r.validation.isString],
                            data: [r.validation.isString],
                            receipt: [m],
                            nonce: [r.validation.required(r.validation.isNumber)],
                            signature: [r.validation.required(r.validation.isSignature)]
                        };
                        return r.validation.matchesObject(t, i)
                    },
                    v = function(t) {
                        var r, e;
                        if (Array.isArray(t.payload) && t.payload[0].method === i.RPCMethod.CreateTransaction && p(t.payload[0].params[0])) {
                            var n = [];
                            try {
                                for (var o = function(t) {
                                        var i = "function" == typeof Symbol && t[Symbol.iterator],
                                            r = 0;
                                        return i ? i.call(t) : {
                                            next: function() {
                                                return t && r >= t.length && (t = void 0), {
                                                    value: t && t[r++],
                                                    done: !t
                                                }
                                            }
                                        }
                                    }(t.payload), s = o.next(); !s.done; s = o.next()) {
                                    var h = s.value,
                                        a = h.params[0];
                                    n.push(u(u({}, h), {
                                        params: [u(u({}, a), {
                                            amount: a.amount.toString(),
                                            gasLimit: a.gasLimit.toString(),
                                            gasPrice: a.gasPrice.toString()
                                        })]
                                    }))
                                }
                            } catch (t) {
                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    s && !s.done && (e = o.return) && e.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return u(u({}, t), {
                                payload: n
                            })
                        }
                        return !Array.isArray(t.payload) && t.payload.method === i.RPCMethod.CreateTransaction && p(t.payload.params[0]) ? (a = t.payload.params[0], u(u({}, t), {
                            payload: u(u({}, t.payload), {
                                params: [u(u({}, a), {
                                    amount: a.amount.toString(),
                                    gasLimit: a.gasLimit.toString(),
                                    gasPrice: a.gasPrice.toString()
                                })]
                            })
                        })) : t
                    };

                function g(t) {
                    return a(this, void 0, void 0, (function() {
                        return l(this, (function(i) {
                            return [2, new Promise((function(i) {
                                setTimeout((function() {
                                    return i()
                                }), t)
                            }))]
                        }))
                    }))
                }
                var y = Object.freeze({
                        encodeTransactionProto: d,
                        isTxReceipt: m,
                        isTxParams: p,
                        formatOutgoingTx: v,
                        sleep: g
                    }),
                    M = function() {
                        function t(t) {
                            this.privateKey = this.normalizePrivateKey(t), this.publicKey = n.getPubKeyFromPrivateKey(this.privateKey), this.address = n.getAddressFromPublicKey(this.publicKey), this.bech32Address = n.toBech32Address(this.address)
                        }
                        return t.fromFile = function(i, r) {
                            return a(this, void 0, void 0, (function() {
                                var e;
                                return l(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return o.trys.push([0, 2, , 3]), e = JSON.parse(i), [4, n.decryptPrivateKey(r, e)];
                                        case 1:
                                            return [2, new t(o.sent())];
                                        case 2:
                                            throw o.sent(), new Error("Could not decrypt keystore file.");
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        }, t.prototype.toFile = function(t, i) {
                            return void 0 === i && (i = "scrypt"), a(this, void 0, void 0, (function() {
                                return l(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!t || !t.length) throw new Error("Passphrase cannot have a length of 0");
                                            return [4, n.encryptPrivateKey(i, this.privateKey, t)];
                                        case 1:
                                            return [2, r.sent()]
                                    }
                                }))
                            }))
                        }, t.prototype.signTransaction = function(t) {
                            return n.sign(t, this.privateKey, this.publicKey)
                        }, t.prototype.normalizePrivateKey = function(t) {
                            return n.normalizePrivateKey(t)
                        }, t
                    }(),
                    w = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

                function b(t, i) {
                    return t(i = {
                        exports: {}
                    }, i.exports), i.exports
                }
                var _, x, S = {},
                    A = b((function(t) {
                        ! function(t, i) {
                            function r(t, i) {
                                if (!t) throw new Error(i || "Assertion failed")
                            }

                            function e(t, i) {
                                t.super_ = i;
                                var r = function() {};
                                r.prototype = i.prototype, t.prototype = new r, t.prototype.constructor = t
                            }

                            function n(t, i, r) {
                                if (n.isBN(t)) return t;
                                this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== i && "be" !== i || (r = i, i = 10), this._init(t || 0, i || 10, r || "be"))
                            }
                            var o;
                            "object" == typeof t ? t.exports = n : i.BN = n, n.BN = n, n.wordSize = 26;
                            try {
                                o = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : S.Buffer
                            } catch (t) {}

                            function s(t, i) {
                                var r = t.charCodeAt(i);
                                return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                            }

                            function h(t, i, r) {
                                var e = s(t, r);
                                return r - 1 >= i && (e |= s(t, r - 1) << 4), e
                            }

                            function u(t, i, r, e) {
                                for (var n = 0, o = Math.min(t.length, r), s = i; s < o; s++) {
                                    var h = t.charCodeAt(s) - 48;
                                    n *= e, n += h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h
                                }
                                return n
                            }
                            n.isBN = function(t) {
                                return t instanceof n || null !== t && "object" == typeof t && t.constructor.wordSize === n.wordSize && Array.isArray(t.words)
                            }, n.max = function(t, i) {
                                return t.cmp(i) > 0 ? t : i
                            }, n.min = function(t, i) {
                                return t.cmp(i) < 0 ? t : i
                            }, n.prototype._init = function(t, i, e) {
                                if ("number" == typeof t) return this._initNumber(t, i, e);
                                if ("object" == typeof t) return this._initArray(t, i, e);
                                "hex" === i && (i = 16), r(i === (0 | i) && i >= 2 && i <= 36);
                                var n = 0;
                                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === i ? this._parseHex(t, n, e) : (this._parseBase(t, i, n), "le" === e && this._initArray(this.toArray(), i, e)))
                            }, n.prototype._initNumber = function(t, i, e) {
                                t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), i, e)
                            }, n.prototype._initArray = function(t, i, e) {
                                if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                                this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                                for (var n = 0; n < this.length; n++) this.words[n] = 0;
                                var o, s, h = 0;
                                if ("be" === e)
                                    for (n = t.length - 1, o = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= s << h & 67108863, this.words[o + 1] = s >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, o++);
                                else if ("le" === e)
                                    for (n = 0, o = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= s << h & 67108863, this.words[o + 1] = s >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, o++);
                                return this.strip()
                            }, n.prototype._parseHex = function(t, i, r) {
                                this.length = Math.ceil((t.length - i) / 6), this.words = new Array(this.length);
                                for (var e = 0; e < this.length; e++) this.words[e] = 0;
                                var n, o = 0,
                                    s = 0;
                                if ("be" === r)
                                    for (e = t.length - 1; e >= i; e -= 2) n = h(t, i, e) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                                else
                                    for (e = (t.length - i) % 2 == 0 ? i + 1 : i; e < t.length; e += 2) n = h(t, i, e) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                                this.strip()
                            }, n.prototype._parseBase = function(t, i, r) {
                                this.words = [0], this.length = 1;
                                for (var e = 0, n = 1; n <= 67108863; n *= i) e++;
                                e--, n = n / i | 0;
                                for (var o = t.length - r, s = o % e, h = Math.min(o, o - s) + r, a = 0, l = r; l < h; l += e) a = u(t, l, l + e, i), this.imuln(n), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
                                if (0 !== s) {
                                    var f = 1;
                                    for (a = u(t, l, t.length, i), l = 0; l < s; l++) f *= i;
                                    this.imuln(f), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a)
                                }
                                this.strip()
                            }, n.prototype.copy = function(t) {
                                t.words = new Array(this.length);
                                for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                                t.length = this.length, t.negative = this.negative, t.red = this.red
                            }, n.prototype.clone = function() {
                                var t = new n(null);
                                return this.copy(t), t
                            }, n.prototype._expand = function(t) {
                                for (; this.length < t;) this.words[this.length++] = 0;
                                return this
                            }, n.prototype.strip = function() {
                                for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                                return this._normSign()
                            }, n.prototype._normSign = function() {
                                return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                            }, n.prototype.inspect = function() {
                                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                            };
                            var a = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                                l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                                f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                            function c(t, i, r) {
                                r.negative = i.negative ^ t.negative;
                                var e = t.length + i.length | 0;
                                r.length = e, e = e - 1 | 0;
                                var n = 0 | t.words[0],
                                    o = 0 | i.words[0],
                                    s = n * o,
                                    h = 67108863 & s,
                                    u = s / 67108864 | 0;
                                r.words[0] = h;
                                for (var a = 1; a < e; a++) {
                                    for (var l = u >>> 26, f = 67108863 & u, c = Math.min(a, i.length - 1), d = Math.max(0, a - t.length + 1); d <= c; d++) {
                                        var m = a - d | 0;
                                        l += (s = (n = 0 | t.words[m]) * (o = 0 | i.words[d]) + f) / 67108864 | 0, f = 67108863 & s
                                    }
                                    r.words[a] = 0 | f, u = 0 | l
                                }
                                return 0 !== u ? r.words[a] = 0 | u : r.length--, r.strip()
                            }
                            n.prototype.toString = function(t, i) {
                                var e;
                                if (i = 0 | i || 1, 16 === (t = t || 10) || "hex" === t) {
                                    e = "";
                                    for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                                        var h = this.words[s],
                                            u = (16777215 & (h << n | o)).toString(16);
                                        e = 0 != (o = h >>> 24 - n & 16777215) || s !== this.length - 1 ? a[6 - u.length] + u + e : u + e, (n += 2) >= 26 && (n -= 26, s--)
                                    }
                                    for (0 !== o && (e = o.toString(16) + e); e.length % i != 0;) e = "0" + e;
                                    return 0 !== this.negative && (e = "-" + e), e
                                }
                                if (t === (0 | t) && t >= 2 && t <= 36) {
                                    var c = l[t],
                                        d = f[t];
                                    e = "";
                                    var m = this.clone();
                                    for (m.negative = 0; !m.isZero();) {
                                        var p = m.modn(d).toString(t);
                                        e = (m = m.idivn(d)).isZero() ? p + e : a[c - p.length] + p + e
                                    }
                                    for (this.isZero() && (e = "0" + e); e.length % i != 0;) e = "0" + e;
                                    return 0 !== this.negative && (e = "-" + e), e
                                }
                                r(!1, "Base should be between 2 and 36")
                            }, n.prototype.toNumber = function() {
                                var t = this.words[0];
                                return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                            }, n.prototype.toJSON = function() {
                                return this.toString(16)
                            }, n.prototype.toBuffer = function(t, i) {
                                return r(void 0 !== o), this.toArrayLike(o, t, i)
                            }, n.prototype.toArray = function(t, i) {
                                return this.toArrayLike(Array, t, i)
                            }, n.prototype.toArrayLike = function(t, i, e) {
                                var n = this.byteLength(),
                                    o = e || Math.max(1, n);
                                r(n <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0"), this.strip();
                                var s, h, u = "le" === i,
                                    a = new t(o),
                                    l = this.clone();
                                if (u) {
                                    for (h = 0; !l.isZero(); h++) s = l.andln(255), l.iushrn(8), a[h] = s;
                                    for (; h < o; h++) a[h] = 0
                                } else {
                                    for (h = 0; h < o - n; h++) a[h] = 0;
                                    for (h = 0; !l.isZero(); h++) s = l.andln(255), l.iushrn(8), a[o - h - 1] = s
                                }
                                return a
                            }, Math.clz32 ? n.prototype._countBits = function(t) {
                                return 32 - Math.clz32(t)
                            } : n.prototype._countBits = function(t) {
                                var i = t,
                                    r = 0;
                                return i >= 4096 && (r += 13, i >>>= 13), i >= 64 && (r += 7, i >>>= 7), i >= 8 && (r += 4, i >>>= 4), i >= 2 && (r += 2, i >>>= 2), r + i
                            }, n.prototype._zeroBits = function(t) {
                                if (0 === t) return 26;
                                var i = t,
                                    r = 0;
                                return 0 == (8191 & i) && (r += 13, i >>>= 13), 0 == (127 & i) && (r += 7, i >>>= 7), 0 == (15 & i) && (r += 4, i >>>= 4), 0 == (3 & i) && (r += 2, i >>>= 2), 0 == (1 & i) && r++, r
                            }, n.prototype.bitLength = function() {
                                var t = this.words[this.length - 1],
                                    i = this._countBits(t);
                                return 26 * (this.length - 1) + i
                            }, n.prototype.zeroBits = function() {
                                if (this.isZero()) return 0;
                                for (var t = 0, i = 0; i < this.length; i++) {
                                    var r = this._zeroBits(this.words[i]);
                                    if (t += r, 26 !== r) break
                                }
                                return t
                            }, n.prototype.byteLength = function() {
                                return Math.ceil(this.bitLength() / 8)
                            }, n.prototype.toTwos = function(t) {
                                return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                            }, n.prototype.fromTwos = function(t) {
                                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                            }, n.prototype.isNeg = function() {
                                return 0 !== this.negative
                            }, n.prototype.neg = function() {
                                return this.clone().ineg()
                            }, n.prototype.ineg = function() {
                                return this.isZero() || (this.negative ^= 1), this
                            }, n.prototype.iuor = function(t) {
                                for (; this.length < t.length;) this.words[this.length++] = 0;
                                for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] | t.words[i];
                                return this.strip()
                            }, n.prototype.ior = function(t) {
                                return r(0 == (this.negative | t.negative)), this.iuor(t)
                            }, n.prototype.or = function(t) {
                                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                            }, n.prototype.uor = function(t) {
                                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                            }, n.prototype.iuand = function(t) {
                                var i;
                                i = this.length > t.length ? t : this;
                                for (var r = 0; r < i.length; r++) this.words[r] = this.words[r] & t.words[r];
                                return this.length = i.length, this.strip()
                            }, n.prototype.iand = function(t) {
                                return r(0 == (this.negative | t.negative)), this.iuand(t)
                            }, n.prototype.and = function(t) {
                                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                            }, n.prototype.uand = function(t) {
                                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                            }, n.prototype.iuxor = function(t) {
                                var i, r;
                                this.length > t.length ? (i = this, r = t) : (i = t, r = this);
                                for (var e = 0; e < r.length; e++) this.words[e] = i.words[e] ^ r.words[e];
                                if (this !== i)
                                    for (; e < i.length; e++) this.words[e] = i.words[e];
                                return this.length = i.length, this.strip()
                            }, n.prototype.ixor = function(t) {
                                return r(0 == (this.negative | t.negative)), this.iuxor(t)
                            }, n.prototype.xor = function(t) {
                                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                            }, n.prototype.uxor = function(t) {
                                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                            }, n.prototype.inotn = function(t) {
                                r("number" == typeof t && t >= 0);
                                var i = 0 | Math.ceil(t / 26),
                                    e = t % 26;
                                this._expand(i), e > 0 && i--;
                                for (var n = 0; n < i; n++) this.words[n] = 67108863 & ~this.words[n];
                                return e > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - e), this.strip()
                            }, n.prototype.notn = function(t) {
                                return this.clone().inotn(t)
                            }, n.prototype.setn = function(t, i) {
                                r("number" == typeof t && t >= 0);
                                var e = t / 26 | 0,
                                    n = t % 26;
                                return this._expand(e + 1), this.words[e] = i ? this.words[e] | 1 << n : this.words[e] & ~(1 << n), this.strip()
                            }, n.prototype.iadd = function(t) {
                                var i, r, e;
                                if (0 !== this.negative && 0 === t.negative) return this.negative = 0, i = this.isub(t), this.negative ^= 1, this._normSign();
                                if (0 === this.negative && 0 !== t.negative) return t.negative = 0, i = this.isub(t), t.negative = 1, i._normSign();
                                this.length > t.length ? (r = this, e = t) : (r = t, e = this);
                                for (var n = 0, o = 0; o < e.length; o++) i = (0 | r.words[o]) + (0 | e.words[o]) + n, this.words[o] = 67108863 & i, n = i >>> 26;
                                for (; 0 !== n && o < r.length; o++) i = (0 | r.words[o]) + n, this.words[o] = 67108863 & i, n = i >>> 26;
                                if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                                else if (r !== this)
                                    for (; o < r.length; o++) this.words[o] = r.words[o];
                                return this
                            }, n.prototype.add = function(t) {
                                var i;
                                return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, i = this.sub(t), t.negative ^= 1, i) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, i = t.sub(this), this.negative = 1, i) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                            }, n.prototype.isub = function(t) {
                                if (0 !== t.negative) {
                                    t.negative = 0;
                                    var i = this.iadd(t);
                                    return t.negative = 1, i._normSign()
                                }
                                if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                                var r, e, n = this.cmp(t);
                                if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                                n > 0 ? (r = this, e = t) : (r = t, e = this);
                                for (var o = 0, s = 0; s < e.length; s++) o = (i = (0 | r.words[s]) - (0 | e.words[s]) + o) >> 26, this.words[s] = 67108863 & i;
                                for (; 0 !== o && s < r.length; s++) o = (i = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & i;
                                if (0 === o && s < r.length && r !== this)
                                    for (; s < r.length; s++) this.words[s] = r.words[s];
                                return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip()
                            }, n.prototype.sub = function(t) {
                                return this.clone().isub(t)
                            };
                            var d = function(t, i, r) {
                                var e, n, o, s = t.words,
                                    h = i.words,
                                    u = r.words,
                                    a = 0,
                                    l = 0 | s[0],
                                    f = 8191 & l,
                                    c = l >>> 13,
                                    d = 0 | s[1],
                                    m = 8191 & d,
                                    p = d >>> 13,
                                    v = 0 | s[2],
                                    g = 8191 & v,
                                    y = v >>> 13,
                                    M = 0 | s[3],
                                    w = 8191 & M,
                                    b = M >>> 13,
                                    _ = 0 | s[4],
                                    x = 8191 & _,
                                    S = _ >>> 13,
                                    A = 0 | s[5],
                                    k = 8191 & A,
                                    P = A >>> 13,
                                    T = 0 | s[6],
                                    B = 8191 & T,
                                    L = T >>> 13,
                                    E = 0 | s[7],
                                    K = 8191 & E,
                                    R = E >>> 13,
                                    N = 0 | s[8],
                                    z = 8191 & N,
                                    j = N >>> 13,
                                    C = 0 | s[9],
                                    O = 8191 & C,
                                    q = C >>> 13,
                                    Z = 0 | h[0],
                                    I = 8191 & Z,
                                    H = Z >>> 13,
                                    F = 0 | h[1],
                                    W = 8191 & F,
                                    G = F >>> 13,
                                    D = 0 | h[2],
                                    U = 8191 & D,
                                    J = D >>> 13,
                                    V = 0 | h[3],
                                    X = 8191 & V,
                                    Y = V >>> 13,
                                    Q = 0 | h[4],
                                    $ = 8191 & Q,
                                    tt = Q >>> 13,
                                    it = 0 | h[5],
                                    rt = 8191 & it,
                                    et = it >>> 13,
                                    nt = 0 | h[6],
                                    ot = 8191 & nt,
                                    st = nt >>> 13,
                                    ht = 0 | h[7],
                                    ut = 8191 & ht,
                                    at = ht >>> 13,
                                    lt = 0 | h[8],
                                    ft = 8191 & lt,
                                    ct = lt >>> 13,
                                    dt = 0 | h[9],
                                    mt = 8191 & dt,
                                    pt = dt >>> 13;
                                r.negative = t.negative ^ i.negative, r.length = 19;
                                var vt = (a + (e = Math.imul(f, I)) | 0) + ((8191 & (n = (n = Math.imul(f, H)) + Math.imul(c, I) | 0)) << 13) | 0;
                                a = ((o = Math.imul(c, H)) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, e = Math.imul(m, I), n = (n = Math.imul(m, H)) + Math.imul(p, I) | 0, o = Math.imul(p, H);
                                var gt = (a + (e = e + Math.imul(f, W) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, G) | 0) + Math.imul(c, W) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(c, G) | 0) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, e = Math.imul(g, I), n = (n = Math.imul(g, H)) + Math.imul(y, I) | 0, o = Math.imul(y, H), e = e + Math.imul(m, W) | 0, n = (n = n + Math.imul(m, G) | 0) + Math.imul(p, W) | 0, o = o + Math.imul(p, G) | 0;
                                var yt = (a + (e = e + Math.imul(f, U) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, J) | 0) + Math.imul(c, U) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(c, J) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, e = Math.imul(w, I), n = (n = Math.imul(w, H)) + Math.imul(b, I) | 0, o = Math.imul(b, H), e = e + Math.imul(g, W) | 0, n = (n = n + Math.imul(g, G) | 0) + Math.imul(y, W) | 0, o = o + Math.imul(y, G) | 0, e = e + Math.imul(m, U) | 0, n = (n = n + Math.imul(m, J) | 0) + Math.imul(p, U) | 0, o = o + Math.imul(p, J) | 0;
                                var Mt = (a + (e = e + Math.imul(f, X) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, Y) | 0) + Math.imul(c, X) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(c, Y) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, e = Math.imul(x, I), n = (n = Math.imul(x, H)) + Math.imul(S, I) | 0, o = Math.imul(S, H), e = e + Math.imul(w, W) | 0, n = (n = n + Math.imul(w, G) | 0) + Math.imul(b, W) | 0, o = o + Math.imul(b, G) | 0, e = e + Math.imul(g, U) | 0, n = (n = n + Math.imul(g, J) | 0) + Math.imul(y, U) | 0, o = o + Math.imul(y, J) | 0, e = e + Math.imul(m, X) | 0, n = (n = n + Math.imul(m, Y) | 0) + Math.imul(p, X) | 0, o = o + Math.imul(p, Y) | 0;
                                var wt = (a + (e = e + Math.imul(f, $) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, tt) | 0) + Math.imul(c, $) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(c, tt) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, e = Math.imul(k, I), n = (n = Math.imul(k, H)) + Math.imul(P, I) | 0, o = Math.imul(P, H), e = e + Math.imul(x, W) | 0, n = (n = n + Math.imul(x, G) | 0) + Math.imul(S, W) | 0, o = o + Math.imul(S, G) | 0, e = e + Math.imul(w, U) | 0, n = (n = n + Math.imul(w, J) | 0) + Math.imul(b, U) | 0, o = o + Math.imul(b, J) | 0, e = e + Math.imul(g, X) | 0, n = (n = n + Math.imul(g, Y) | 0) + Math.imul(y, X) | 0, o = o + Math.imul(y, Y) | 0, e = e + Math.imul(m, $) | 0, n = (n = n + Math.imul(m, tt) | 0) + Math.imul(p, $) | 0, o = o + Math.imul(p, tt) | 0;
                                var bt = (a + (e = e + Math.imul(f, rt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, et) | 0) + Math.imul(c, rt) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(c, et) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, e = Math.imul(B, I), n = (n = Math.imul(B, H)) + Math.imul(L, I) | 0, o = Math.imul(L, H), e = e + Math.imul(k, W) | 0, n = (n = n + Math.imul(k, G) | 0) + Math.imul(P, W) | 0, o = o + Math.imul(P, G) | 0, e = e + Math.imul(x, U) | 0, n = (n = n + Math.imul(x, J) | 0) + Math.imul(S, U) | 0, o = o + Math.imul(S, J) | 0, e = e + Math.imul(w, X) | 0, n = (n = n + Math.imul(w, Y) | 0) + Math.imul(b, X) | 0, o = o + Math.imul(b, Y) | 0, e = e + Math.imul(g, $) | 0, n = (n = n + Math.imul(g, tt) | 0) + Math.imul(y, $) | 0, o = o + Math.imul(y, tt) | 0, e = e + Math.imul(m, rt) | 0, n = (n = n + Math.imul(m, et) | 0) + Math.imul(p, rt) | 0, o = o + Math.imul(p, et) | 0;
                                var _t = (a + (e = e + Math.imul(f, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(c, st) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, e = Math.imul(K, I), n = (n = Math.imul(K, H)) + Math.imul(R, I) | 0, o = Math.imul(R, H), e = e + Math.imul(B, W) | 0, n = (n = n + Math.imul(B, G) | 0) + Math.imul(L, W) | 0, o = o + Math.imul(L, G) | 0, e = e + Math.imul(k, U) | 0, n = (n = n + Math.imul(k, J) | 0) + Math.imul(P, U) | 0, o = o + Math.imul(P, J) | 0, e = e + Math.imul(x, X) | 0, n = (n = n + Math.imul(x, Y) | 0) + Math.imul(S, X) | 0, o = o + Math.imul(S, Y) | 0, e = e + Math.imul(w, $) | 0, n = (n = n + Math.imul(w, tt) | 0) + Math.imul(b, $) | 0, o = o + Math.imul(b, tt) | 0, e = e + Math.imul(g, rt) | 0, n = (n = n + Math.imul(g, et) | 0) + Math.imul(y, rt) | 0, o = o + Math.imul(y, et) | 0, e = e + Math.imul(m, ot) | 0, n = (n = n + Math.imul(m, st) | 0) + Math.imul(p, ot) | 0, o = o + Math.imul(p, st) | 0;
                                var xt = (a + (e = e + Math.imul(f, ut) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, at) | 0) + Math.imul(c, ut) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(c, at) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, e = Math.imul(z, I), n = (n = Math.imul(z, H)) + Math.imul(j, I) | 0, o = Math.imul(j, H), e = e + Math.imul(K, W) | 0, n = (n = n + Math.imul(K, G) | 0) + Math.imul(R, W) | 0, o = o + Math.imul(R, G) | 0, e = e + Math.imul(B, U) | 0, n = (n = n + Math.imul(B, J) | 0) + Math.imul(L, U) | 0, o = o + Math.imul(L, J) | 0, e = e + Math.imul(k, X) | 0, n = (n = n + Math.imul(k, Y) | 0) + Math.imul(P, X) | 0, o = o + Math.imul(P, Y) | 0, e = e + Math.imul(x, $) | 0, n = (n = n + Math.imul(x, tt) | 0) + Math.imul(S, $) | 0, o = o + Math.imul(S, tt) | 0, e = e + Math.imul(w, rt) | 0, n = (n = n + Math.imul(w, et) | 0) + Math.imul(b, rt) | 0, o = o + Math.imul(b, et) | 0, e = e + Math.imul(g, ot) | 0, n = (n = n + Math.imul(g, st) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, e = e + Math.imul(m, ut) | 0, n = (n = n + Math.imul(m, at) | 0) + Math.imul(p, ut) | 0, o = o + Math.imul(p, at) | 0;
                                var St = (a + (e = e + Math.imul(f, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, ct) | 0) + Math.imul(c, ft) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(c, ct) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, e = Math.imul(O, I), n = (n = Math.imul(O, H)) + Math.imul(q, I) | 0, o = Math.imul(q, H), e = e + Math.imul(z, W) | 0, n = (n = n + Math.imul(z, G) | 0) + Math.imul(j, W) | 0, o = o + Math.imul(j, G) | 0, e = e + Math.imul(K, U) | 0, n = (n = n + Math.imul(K, J) | 0) + Math.imul(R, U) | 0, o = o + Math.imul(R, J) | 0, e = e + Math.imul(B, X) | 0, n = (n = n + Math.imul(B, Y) | 0) + Math.imul(L, X) | 0, o = o + Math.imul(L, Y) | 0, e = e + Math.imul(k, $) | 0, n = (n = n + Math.imul(k, tt) | 0) + Math.imul(P, $) | 0, o = o + Math.imul(P, tt) | 0, e = e + Math.imul(x, rt) | 0, n = (n = n + Math.imul(x, et) | 0) + Math.imul(S, rt) | 0, o = o + Math.imul(S, et) | 0, e = e + Math.imul(w, ot) | 0, n = (n = n + Math.imul(w, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0, e = e + Math.imul(g, ut) | 0, n = (n = n + Math.imul(g, at) | 0) + Math.imul(y, ut) | 0, o = o + Math.imul(y, at) | 0, e = e + Math.imul(m, ft) | 0, n = (n = n + Math.imul(m, ct) | 0) + Math.imul(p, ft) | 0, o = o + Math.imul(p, ct) | 0;
                                var At = (a + (e = e + Math.imul(f, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, pt) | 0) + Math.imul(c, mt) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(c, pt) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, e = Math.imul(O, W), n = (n = Math.imul(O, G)) + Math.imul(q, W) | 0, o = Math.imul(q, G), e = e + Math.imul(z, U) | 0, n = (n = n + Math.imul(z, J) | 0) + Math.imul(j, U) | 0, o = o + Math.imul(j, J) | 0, e = e + Math.imul(K, X) | 0, n = (n = n + Math.imul(K, Y) | 0) + Math.imul(R, X) | 0, o = o + Math.imul(R, Y) | 0, e = e + Math.imul(B, $) | 0, n = (n = n + Math.imul(B, tt) | 0) + Math.imul(L, $) | 0, o = o + Math.imul(L, tt) | 0, e = e + Math.imul(k, rt) | 0, n = (n = n + Math.imul(k, et) | 0) + Math.imul(P, rt) | 0, o = o + Math.imul(P, et) | 0, e = e + Math.imul(x, ot) | 0, n = (n = n + Math.imul(x, st) | 0) + Math.imul(S, ot) | 0, o = o + Math.imul(S, st) | 0, e = e + Math.imul(w, ut) | 0, n = (n = n + Math.imul(w, at) | 0) + Math.imul(b, ut) | 0, o = o + Math.imul(b, at) | 0, e = e + Math.imul(g, ft) | 0, n = (n = n + Math.imul(g, ct) | 0) + Math.imul(y, ft) | 0, o = o + Math.imul(y, ct) | 0;
                                var kt = (a + (e = e + Math.imul(m, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, pt) | 0) + Math.imul(p, mt) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(p, pt) | 0) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, e = Math.imul(O, U), n = (n = Math.imul(O, J)) + Math.imul(q, U) | 0, o = Math.imul(q, J), e = e + Math.imul(z, X) | 0, n = (n = n + Math.imul(z, Y) | 0) + Math.imul(j, X) | 0, o = o + Math.imul(j, Y) | 0, e = e + Math.imul(K, $) | 0, n = (n = n + Math.imul(K, tt) | 0) + Math.imul(R, $) | 0, o = o + Math.imul(R, tt) | 0, e = e + Math.imul(B, rt) | 0, n = (n = n + Math.imul(B, et) | 0) + Math.imul(L, rt) | 0, o = o + Math.imul(L, et) | 0, e = e + Math.imul(k, ot) | 0, n = (n = n + Math.imul(k, st) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, st) | 0, e = e + Math.imul(x, ut) | 0, n = (n = n + Math.imul(x, at) | 0) + Math.imul(S, ut) | 0, o = o + Math.imul(S, at) | 0, e = e + Math.imul(w, ft) | 0, n = (n = n + Math.imul(w, ct) | 0) + Math.imul(b, ft) | 0, o = o + Math.imul(b, ct) | 0;
                                var Pt = (a + (e = e + Math.imul(g, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(g, pt) | 0) + Math.imul(y, mt) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(y, pt) | 0) + (n >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, e = Math.imul(O, X), n = (n = Math.imul(O, Y)) + Math.imul(q, X) | 0, o = Math.imul(q, Y), e = e + Math.imul(z, $) | 0, n = (n = n + Math.imul(z, tt) | 0) + Math.imul(j, $) | 0, o = o + Math.imul(j, tt) | 0, e = e + Math.imul(K, rt) | 0, n = (n = n + Math.imul(K, et) | 0) + Math.imul(R, rt) | 0, o = o + Math.imul(R, et) | 0, e = e + Math.imul(B, ot) | 0, n = (n = n + Math.imul(B, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, e = e + Math.imul(k, ut) | 0, n = (n = n + Math.imul(k, at) | 0) + Math.imul(P, ut) | 0, o = o + Math.imul(P, at) | 0, e = e + Math.imul(x, ft) | 0, n = (n = n + Math.imul(x, ct) | 0) + Math.imul(S, ft) | 0, o = o + Math.imul(S, ct) | 0;
                                var Tt = (a + (e = e + Math.imul(w, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(w, pt) | 0) + Math.imul(b, mt) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(b, pt) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, e = Math.imul(O, $), n = (n = Math.imul(O, tt)) + Math.imul(q, $) | 0, o = Math.imul(q, tt), e = e + Math.imul(z, rt) | 0, n = (n = n + Math.imul(z, et) | 0) + Math.imul(j, rt) | 0, o = o + Math.imul(j, et) | 0, e = e + Math.imul(K, ot) | 0, n = (n = n + Math.imul(K, st) | 0) + Math.imul(R, ot) | 0, o = o + Math.imul(R, st) | 0, e = e + Math.imul(B, ut) | 0, n = (n = n + Math.imul(B, at) | 0) + Math.imul(L, ut) | 0, o = o + Math.imul(L, at) | 0, e = e + Math.imul(k, ft) | 0, n = (n = n + Math.imul(k, ct) | 0) + Math.imul(P, ft) | 0, o = o + Math.imul(P, ct) | 0;
                                var Bt = (a + (e = e + Math.imul(x, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(x, pt) | 0) + Math.imul(S, mt) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(S, pt) | 0) + (n >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, e = Math.imul(O, rt), n = (n = Math.imul(O, et)) + Math.imul(q, rt) | 0, o = Math.imul(q, et), e = e + Math.imul(z, ot) | 0, n = (n = n + Math.imul(z, st) | 0) + Math.imul(j, ot) | 0, o = o + Math.imul(j, st) | 0, e = e + Math.imul(K, ut) | 0, n = (n = n + Math.imul(K, at) | 0) + Math.imul(R, ut) | 0, o = o + Math.imul(R, at) | 0, e = e + Math.imul(B, ft) | 0, n = (n = n + Math.imul(B, ct) | 0) + Math.imul(L, ft) | 0, o = o + Math.imul(L, ct) | 0;
                                var Lt = (a + (e = e + Math.imul(k, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(k, pt) | 0) + Math.imul(P, mt) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(P, pt) | 0) + (n >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, e = Math.imul(O, ot), n = (n = Math.imul(O, st)) + Math.imul(q, ot) | 0, o = Math.imul(q, st), e = e + Math.imul(z, ut) | 0, n = (n = n + Math.imul(z, at) | 0) + Math.imul(j, ut) | 0, o = o + Math.imul(j, at) | 0, e = e + Math.imul(K, ft) | 0, n = (n = n + Math.imul(K, ct) | 0) + Math.imul(R, ft) | 0, o = o + Math.imul(R, ct) | 0;
                                var Et = (a + (e = e + Math.imul(B, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(B, pt) | 0) + Math.imul(L, mt) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(L, pt) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, e = Math.imul(O, ut), n = (n = Math.imul(O, at)) + Math.imul(q, ut) | 0, o = Math.imul(q, at), e = e + Math.imul(z, ft) | 0, n = (n = n + Math.imul(z, ct) | 0) + Math.imul(j, ft) | 0, o = o + Math.imul(j, ct) | 0;
                                var Kt = (a + (e = e + Math.imul(K, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(K, pt) | 0) + Math.imul(R, mt) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(R, pt) | 0) + (n >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, e = Math.imul(O, ft), n = (n = Math.imul(O, ct)) + Math.imul(q, ft) | 0, o = Math.imul(q, ct);
                                var Rt = (a + (e = e + Math.imul(z, mt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(z, pt) | 0) + Math.imul(j, mt) | 0)) << 13) | 0;
                                a = ((o = o + Math.imul(j, pt) | 0) + (n >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863;
                                var Nt = (a + (e = Math.imul(O, mt)) | 0) + ((8191 & (n = (n = Math.imul(O, pt)) + Math.imul(q, mt) | 0)) << 13) | 0;
                                return a = ((o = Math.imul(q, pt)) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, u[0] = vt, u[1] = gt, u[2] = yt, u[3] = Mt, u[4] = wt, u[5] = bt, u[6] = _t, u[7] = xt, u[8] = St, u[9] = At, u[10] = kt, u[11] = Pt, u[12] = Tt, u[13] = Bt, u[14] = Lt, u[15] = Et, u[16] = Kt, u[17] = Rt, u[18] = Nt, 0 !== a && (u[19] = a, r.length++), r
                            };

                            function m(t, i, r) {
                                return (new p).mulp(t, i, r)
                            }

                            function p(t, i) {
                                this.x = t, this.y = i
                            }
                            Math.imul || (d = c), n.prototype.mulTo = function(t, i) {
                                var r = this.length + t.length;
                                return 10 === this.length && 10 === t.length ? d(this, t, i) : r < 63 ? c(this, t, i) : r < 1024 ? function(t, i, r) {
                                    r.negative = i.negative ^ t.negative, r.length = t.length + i.length;
                                    for (var e = 0, n = 0, o = 0; o < r.length - 1; o++) {
                                        var s = n;
                                        n = 0;
                                        for (var h = 67108863 & e, u = Math.min(o, i.length - 1), a = Math.max(0, o - t.length + 1); a <= u; a++) {
                                            var l = o - a,
                                                f = (0 | t.words[l]) * (0 | i.words[a]),
                                                c = 67108863 & f;
                                            h = 67108863 & (c = c + h | 0), n += (s = (s = s + (f / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, s &= 67108863
                                        }
                                        r.words[o] = h, e = s, s = n
                                    }
                                    return 0 !== e ? r.words[o] = e : r.length--, r.strip()
                                }(this, t, i) : m(this, t, i)
                            }, p.prototype.makeRBT = function(t) {
                                for (var i = new Array(t), r = n.prototype._countBits(t) - 1, e = 0; e < t; e++) i[e] = this.revBin(e, r, t);
                                return i
                            }, p.prototype.revBin = function(t, i, r) {
                                if (0 === t || t === r - 1) return t;
                                for (var e = 0, n = 0; n < i; n++) e |= (1 & t) << i - n - 1, t >>= 1;
                                return e
                            }, p.prototype.permute = function(t, i, r, e, n, o) {
                                for (var s = 0; s < o; s++) e[s] = i[t[s]], n[s] = r[t[s]]
                            }, p.prototype.transform = function(t, i, r, e, n, o) {
                                this.permute(o, t, i, r, e, n);
                                for (var s = 1; s < n; s <<= 1)
                                    for (var h = s << 1, u = Math.cos(2 * Math.PI / h), a = Math.sin(2 * Math.PI / h), l = 0; l < n; l += h)
                                        for (var f = u, c = a, d = 0; d < s; d++) {
                                            var m = r[l + d],
                                                p = e[l + d],
                                                v = r[l + d + s],
                                                g = e[l + d + s],
                                                y = f * v - c * g;
                                            g = f * g + c * v, v = y, r[l + d] = m + v, e[l + d] = p + g, r[l + d + s] = m - v, e[l + d + s] = p - g, d !== h && (y = u * f - a * c, c = u * c + a * f, f = y)
                                        }
                            }, p.prototype.guessLen13b = function(t, i) {
                                var r = 1 | Math.max(i, t),
                                    e = 1 & r,
                                    n = 0;
                                for (r = r / 2 | 0; r; r >>>= 1) n++;
                                return 1 << n + 1 + e
                            }, p.prototype.conjugate = function(t, i, r) {
                                if (!(r <= 1))
                                    for (var e = 0; e < r / 2; e++) {
                                        var n = t[e];
                                        t[e] = t[r - e - 1], t[r - e - 1] = n, n = i[e], i[e] = -i[r - e - 1], i[r - e - 1] = -n
                                    }
                            }, p.prototype.normalize13b = function(t, i) {
                                for (var r = 0, e = 0; e < i / 2; e++) {
                                    var n = 8192 * Math.round(t[2 * e + 1] / i) + Math.round(t[2 * e] / i) + r;
                                    t[e] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                                }
                                return t
                            }, p.prototype.convert13b = function(t, i, e, n) {
                                for (var o = 0, s = 0; s < i; s++) o += 0 | t[s], e[2 * s] = 8191 & o, o >>>= 13, e[2 * s + 1] = 8191 & o, o >>>= 13;
                                for (s = 2 * i; s < n; ++s) e[s] = 0;
                                r(0 === o), r(0 == (-8192 & o))
                            }, p.prototype.stub = function(t) {
                                for (var i = new Array(t), r = 0; r < t; r++) i[r] = 0;
                                return i
                            }, p.prototype.mulp = function(t, i, r) {
                                var e = 2 * this.guessLen13b(t.length, i.length),
                                    n = this.makeRBT(e),
                                    o = this.stub(e),
                                    s = new Array(e),
                                    h = new Array(e),
                                    u = new Array(e),
                                    a = new Array(e),
                                    l = new Array(e),
                                    f = new Array(e),
                                    c = r.words;
                                c.length = e, this.convert13b(t.words, t.length, s, e), this.convert13b(i.words, i.length, a, e), this.transform(s, o, h, u, e, n), this.transform(a, o, l, f, e, n);
                                for (var d = 0; d < e; d++) {
                                    var m = h[d] * l[d] - u[d] * f[d];
                                    u[d] = h[d] * f[d] + u[d] * l[d], h[d] = m
                                }
                                return this.conjugate(h, u, e), this.transform(h, u, c, o, e, n), this.conjugate(c, o, e), this.normalize13b(c, e), r.negative = t.negative ^ i.negative, r.length = t.length + i.length, r.strip()
                            }, n.prototype.mul = function(t) {
                                var i = new n(null);
                                return i.words = new Array(this.length + t.length), this.mulTo(t, i)
                            }, n.prototype.mulf = function(t) {
                                var i = new n(null);
                                return i.words = new Array(this.length + t.length), m(this, t, i)
                            }, n.prototype.imul = function(t) {
                                return this.clone().mulTo(t, this)
                            }, n.prototype.imuln = function(t) {
                                r("number" == typeof t), r(t < 67108864);
                                for (var i = 0, e = 0; e < this.length; e++) {
                                    var n = (0 | this.words[e]) * t,
                                        o = (67108863 & n) + (67108863 & i);
                                    i >>= 26, i += n / 67108864 | 0, i += o >>> 26, this.words[e] = 67108863 & o
                                }
                                return 0 !== i && (this.words[e] = i, this.length++), this
                            }, n.prototype.muln = function(t) {
                                return this.clone().imuln(t)
                            }, n.prototype.sqr = function() {
                                return this.mul(this)
                            }, n.prototype.isqr = function() {
                                return this.imul(this.clone())
                            }, n.prototype.pow = function(t) {
                                var i = function(t) {
                                    for (var i = new Array(t.bitLength()), r = 0; r < i.length; r++) {
                                        var e = r / 26 | 0,
                                            n = r % 26;
                                        i[r] = (t.words[e] & 1 << n) >>> n
                                    }
                                    return i
                                }(t);
                                if (0 === i.length) return new n(1);
                                for (var r = this, e = 0; e < i.length && 0 === i[e]; e++, r = r.sqr());
                                if (++e < i.length)
                                    for (var o = r.sqr(); e < i.length; e++, o = o.sqr()) 0 !== i[e] && (r = r.mul(o));
                                return r
                            }, n.prototype.iushln = function(t) {
                                r("number" == typeof t && t >= 0);
                                var i, e = t % 26,
                                    n = (t - e) / 26,
                                    o = 67108863 >>> 26 - e << 26 - e;
                                if (0 !== e) {
                                    var s = 0;
                                    for (i = 0; i < this.length; i++) {
                                        var h = this.words[i] & o,
                                            u = (0 | this.words[i]) - h << e;
                                        this.words[i] = u | s, s = h >>> 26 - e
                                    }
                                    s && (this.words[i] = s, this.length++)
                                }
                                if (0 !== n) {
                                    for (i = this.length - 1; i >= 0; i--) this.words[i + n] = this.words[i];
                                    for (i = 0; i < n; i++) this.words[i] = 0;
                                    this.length += n
                                }
                                return this.strip()
                            }, n.prototype.ishln = function(t) {
                                return r(0 === this.negative), this.iushln(t)
                            }, n.prototype.iushrn = function(t, i, e) {
                                var n;
                                r("number" == typeof t && t >= 0), n = i ? (i - i % 26) / 26 : 0;
                                var o = t % 26,
                                    s = Math.min((t - o) / 26, this.length),
                                    h = 67108863 ^ 67108863 >>> o << o,
                                    u = e;
                                if (n -= s, n = Math.max(0, n), u) {
                                    for (var a = 0; a < s; a++) u.words[a] = this.words[a];
                                    u.length = s
                                }
                                if (0 === s);
                                else if (this.length > s)
                                    for (this.length -= s, a = 0; a < this.length; a++) this.words[a] = this.words[a + s];
                                else this.words[0] = 0, this.length = 1;
                                var l = 0;
                                for (a = this.length - 1; a >= 0 && (0 !== l || a >= n); a--) {
                                    var f = 0 | this.words[a];
                                    this.words[a] = l << 26 - o | f >>> o, l = f & h
                                }
                                return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                            }, n.prototype.ishrn = function(t, i, e) {
                                return r(0 === this.negative), this.iushrn(t, i, e)
                            }, n.prototype.shln = function(t) {
                                return this.clone().ishln(t)
                            }, n.prototype.ushln = function(t) {
                                return this.clone().iushln(t)
                            }, n.prototype.shrn = function(t) {
                                return this.clone().ishrn(t)
                            }, n.prototype.ushrn = function(t) {
                                return this.clone().iushrn(t)
                            }, n.prototype.testn = function(t) {
                                r("number" == typeof t && t >= 0);
                                var i = t % 26,
                                    e = (t - i) / 26,
                                    n = 1 << i;
                                return !(this.length <= e || !(this.words[e] & n))
                            }, n.prototype.imaskn = function(t) {
                                r("number" == typeof t && t >= 0);
                                var i = t % 26,
                                    e = (t - i) / 26;
                                if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= e) return this;
                                if (0 !== i && e++, this.length = Math.min(e, this.length), 0 !== i) {
                                    var n = 67108863 ^ 67108863 >>> i << i;
                                    this.words[this.length - 1] &= n
                                }
                                return this.strip()
                            }, n.prototype.maskn = function(t) {
                                return this.clone().imaskn(t)
                            }, n.prototype.iaddn = function(t) {
                                return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                            }, n.prototype._iaddn = function(t) {
                                this.words[0] += t;
                                for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                                return this.length = Math.max(this.length, i + 1), this
                            }, n.prototype.isubn = function(t) {
                                if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                                if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                                if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                                else
                                    for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
                                return this.strip()
                            }, n.prototype.addn = function(t) {
                                return this.clone().iaddn(t)
                            }, n.prototype.subn = function(t) {
                                return this.clone().isubn(t)
                            }, n.prototype.iabs = function() {
                                return this.negative = 0, this
                            }, n.prototype.abs = function() {
                                return this.clone().iabs()
                            }, n.prototype._ishlnsubmul = function(t, i, e) {
                                var n, o, s = t.length + e;
                                this._expand(s);
                                var h = 0;
                                for (n = 0; n < t.length; n++) {
                                    o = (0 | this.words[n + e]) + h;
                                    var u = (0 | t.words[n]) * i;
                                    h = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[n + e] = 67108863 & o
                                }
                                for (; n < this.length - e; n++) h = (o = (0 | this.words[n + e]) + h) >> 26, this.words[n + e] = 67108863 & o;
                                if (0 === h) return this.strip();
                                for (r(-1 === h), h = 0, n = 0; n < this.length; n++) h = (o = -(0 | this.words[n]) + h) >> 26, this.words[n] = 67108863 & o;
                                return this.negative = 1, this.strip()
                            }, n.prototype._wordDiv = function(t, i) {
                                var r = (this.length, t.length),
                                    e = this.clone(),
                                    o = t,
                                    s = 0 | o.words[o.length - 1];
                                0 != (r = 26 - this._countBits(s)) && (o = o.ushln(r), e.iushln(r), s = 0 | o.words[o.length - 1]);
                                var h, u = e.length - o.length;
                                if ("mod" !== i) {
                                    (h = new n(null)).length = u + 1, h.words = new Array(h.length);
                                    for (var a = 0; a < h.length; a++) h.words[a] = 0
                                }
                                var l = e.clone()._ishlnsubmul(o, 1, u);
                                0 === l.negative && (e = l, h && (h.words[u] = 1));
                                for (var f = u - 1; f >= 0; f--) {
                                    var c = 67108864 * (0 | e.words[o.length + f]) + (0 | e.words[o.length + f - 1]);
                                    for (c = Math.min(c / s | 0, 67108863), e._ishlnsubmul(o, c, f); 0 !== e.negative;) c--, e.negative = 0, e._ishlnsubmul(o, 1, f), e.isZero() || (e.negative ^= 1);
                                    h && (h.words[f] = c)
                                }
                                return h && h.strip(), e.strip(), "div" !== i && 0 !== r && e.iushrn(r), {
                                    div: h || null,
                                    mod: e
                                }
                            }, n.prototype.divmod = function(t, i, e) {
                                return r(!t.isZero()), this.isZero() ? {
                                    div: new n(0),
                                    mod: new n(0)
                                } : 0 !== this.negative && 0 === t.negative ? (h = this.neg().divmod(t, i), "mod" !== i && (o = h.div.neg()), "div" !== i && (s = h.mod.neg(), e && 0 !== s.negative && s.iadd(t)), {
                                    div: o,
                                    mod: s
                                }) : 0 === this.negative && 0 !== t.negative ? (h = this.divmod(t.neg(), i), "mod" !== i && (o = h.div.neg()), {
                                    div: o,
                                    mod: h.mod
                                }) : 0 != (this.negative & t.negative) ? (h = this.neg().divmod(t.neg(), i), "div" !== i && (s = h.mod.neg(), e && 0 !== s.negative && s.isub(t)), {
                                    div: h.div,
                                    mod: s
                                }) : t.length > this.length || this.cmp(t) < 0 ? {
                                    div: new n(0),
                                    mod: this
                                } : 1 === t.length ? "div" === i ? {
                                    div: this.divn(t.words[0]),
                                    mod: null
                                } : "mod" === i ? {
                                    div: null,
                                    mod: new n(this.modn(t.words[0]))
                                } : {
                                    div: this.divn(t.words[0]),
                                    mod: new n(this.modn(t.words[0]))
                                } : this._wordDiv(t, i);
                                var o, s, h
                            }, n.prototype.div = function(t) {
                                return this.divmod(t, "div", !1).div
                            }, n.prototype.mod = function(t) {
                                return this.divmod(t, "mod", !1).mod
                            }, n.prototype.umod = function(t) {
                                return this.divmod(t, "mod", !0).mod
                            }, n.prototype.divRound = function(t) {
                                var i = this.divmod(t);
                                if (i.mod.isZero()) return i.div;
                                var r = 0 !== i.div.negative ? i.mod.isub(t) : i.mod,
                                    e = t.ushrn(1),
                                    n = t.andln(1),
                                    o = r.cmp(e);
                                return o < 0 || 1 === n && 0 === o ? i.div : 0 !== i.div.negative ? i.div.isubn(1) : i.div.iaddn(1)
                            }, n.prototype.modn = function(t) {
                                r(t <= 67108863);
                                for (var i = (1 << 26) % t, e = 0, n = this.length - 1; n >= 0; n--) e = (i * e + (0 | this.words[n])) % t;
                                return e
                            }, n.prototype.idivn = function(t) {
                                r(t <= 67108863);
                                for (var i = 0, e = this.length - 1; e >= 0; e--) {
                                    var n = (0 | this.words[e]) + 67108864 * i;
                                    this.words[e] = n / t | 0, i = n % t
                                }
                                return this.strip()
                            }, n.prototype.divn = function(t) {
                                return this.clone().idivn(t)
                            }, n.prototype.egcd = function(t) {
                                r(0 === t.negative), r(!t.isZero());
                                var i = this,
                                    e = t.clone();
                                i = 0 !== i.negative ? i.umod(t) : i.clone();
                                for (var o = new n(1), s = new n(0), h = new n(0), u = new n(1), a = 0; i.isEven() && e.isEven();) i.iushrn(1), e.iushrn(1), ++a;
                                for (var l = e.clone(), f = i.clone(); !i.isZero();) {
                                    for (var c = 0, d = 1; 0 == (i.words[0] & d) && c < 26; ++c, d <<= 1);
                                    if (c > 0)
                                        for (i.iushrn(c); c-- > 0;)(o.isOdd() || s.isOdd()) && (o.iadd(l), s.isub(f)), o.iushrn(1), s.iushrn(1);
                                    for (var m = 0, p = 1; 0 == (e.words[0] & p) && m < 26; ++m, p <<= 1);
                                    if (m > 0)
                                        for (e.iushrn(m); m-- > 0;)(h.isOdd() || u.isOdd()) && (h.iadd(l), u.isub(f)), h.iushrn(1), u.iushrn(1);
                                    i.cmp(e) >= 0 ? (i.isub(e), o.isub(h), s.isub(u)) : (e.isub(i), h.isub(o), u.isub(s))
                                }
                                return {
                                    a: h,
                                    b: u,
                                    gcd: e.iushln(a)
                                }
                            }, n.prototype._invmp = function(t) {
                                r(0 === t.negative), r(!t.isZero());
                                var i = this,
                                    e = t.clone();
                                i = 0 !== i.negative ? i.umod(t) : i.clone();
                                for (var o, s = new n(1), h = new n(0), u = e.clone(); i.cmpn(1) > 0 && e.cmpn(1) > 0;) {
                                    for (var a = 0, l = 1; 0 == (i.words[0] & l) && a < 26; ++a, l <<= 1);
                                    if (a > 0)
                                        for (i.iushrn(a); a-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                                    for (var f = 0, c = 1; 0 == (e.words[0] & c) && f < 26; ++f, c <<= 1);
                                    if (f > 0)
                                        for (e.iushrn(f); f-- > 0;) h.isOdd() && h.iadd(u), h.iushrn(1);
                                    i.cmp(e) >= 0 ? (i.isub(e), s.isub(h)) : (e.isub(i), h.isub(s))
                                }
                                return (o = 0 === i.cmpn(1) ? s : h).cmpn(0) < 0 && o.iadd(t), o
                            }, n.prototype.gcd = function(t) {
                                if (this.isZero()) return t.abs();
                                if (t.isZero()) return this.abs();
                                var i = this.clone(),
                                    r = t.clone();
                                i.negative = 0, r.negative = 0;
                                for (var e = 0; i.isEven() && r.isEven(); e++) i.iushrn(1), r.iushrn(1);
                                for (;;) {
                                    for (; i.isEven();) i.iushrn(1);
                                    for (; r.isEven();) r.iushrn(1);
                                    var n = i.cmp(r);
                                    if (n < 0) {
                                        var o = i;
                                        i = r, r = o
                                    } else if (0 === n || 0 === r.cmpn(1)) break;
                                    i.isub(r)
                                }
                                return r.iushln(e)
                            }, n.prototype.invm = function(t) {
                                return this.egcd(t).a.umod(t)
                            }, n.prototype.isEven = function() {
                                return 0 == (1 & this.words[0])
                            }, n.prototype.isOdd = function() {
                                return 1 == (1 & this.words[0])
                            }, n.prototype.andln = function(t) {
                                return this.words[0] & t
                            }, n.prototype.bincn = function(t) {
                                r("number" == typeof t);
                                var i = t % 26,
                                    e = (t - i) / 26,
                                    n = 1 << i;
                                if (this.length <= e) return this._expand(e + 1), this.words[e] |= n, this;
                                for (var o = n, s = e; 0 !== o && s < this.length; s++) {
                                    var h = 0 | this.words[s];
                                    o = (h += o) >>> 26, h &= 67108863, this.words[s] = h
                                }
                                return 0 !== o && (this.words[s] = o, this.length++), this
                            }, n.prototype.isZero = function() {
                                return 1 === this.length && 0 === this.words[0]
                            }, n.prototype.cmpn = function(t) {
                                var i, e = t < 0;
                                if (0 !== this.negative && !e) return -1;
                                if (0 === this.negative && e) return 1;
                                if (this.strip(), this.length > 1) i = 1;
                                else {
                                    e && (t = -t), r(t <= 67108863, "Number is too big");
                                    var n = 0 | this.words[0];
                                    i = n === t ? 0 : n < t ? -1 : 1
                                }
                                return 0 !== this.negative ? 0 | -i : i
                            }, n.prototype.cmp = function(t) {
                                if (0 !== this.negative && 0 === t.negative) return -1;
                                if (0 === this.negative && 0 !== t.negative) return 1;
                                var i = this.ucmp(t);
                                return 0 !== this.negative ? 0 | -i : i
                            }, n.prototype.ucmp = function(t) {
                                if (this.length > t.length) return 1;
                                if (this.length < t.length) return -1;
                                for (var i = 0, r = this.length - 1; r >= 0; r--) {
                                    var e = 0 | this.words[r],
                                        n = 0 | t.words[r];
                                    if (e !== n) {
                                        e < n ? i = -1 : e > n && (i = 1);
                                        break
                                    }
                                }
                                return i
                            }, n.prototype.gtn = function(t) {
                                return 1 === this.cmpn(t)
                            }, n.prototype.gt = function(t) {
                                return 1 === this.cmp(t)
                            }, n.prototype.gten = function(t) {
                                return this.cmpn(t) >= 0
                            }, n.prototype.gte = function(t) {
                                return this.cmp(t) >= 0
                            }, n.prototype.ltn = function(t) {
                                return -1 === this.cmpn(t)
                            }, n.prototype.lt = function(t) {
                                return -1 === this.cmp(t)
                            }, n.prototype.lten = function(t) {
                                return this.cmpn(t) <= 0
                            }, n.prototype.lte = function(t) {
                                return this.cmp(t) <= 0
                            }, n.prototype.eqn = function(t) {
                                return 0 === this.cmpn(t)
                            }, n.prototype.eq = function(t) {
                                return 0 === this.cmp(t)
                            }, n.red = function(t) {
                                return new _(t)
                            }, n.prototype.toRed = function(t) {
                                return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                            }, n.prototype.fromRed = function() {
                                return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                            }, n.prototype._forceRed = function(t) {
                                return this.red = t, this
                            }, n.prototype.forceRed = function(t) {
                                return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                            }, n.prototype.redAdd = function(t) {
                                return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                            }, n.prototype.redIAdd = function(t) {
                                return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                            }, n.prototype.redSub = function(t) {
                                return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                            }, n.prototype.redISub = function(t) {
                                return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                            }, n.prototype.redShl = function(t) {
                                return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                            }, n.prototype.redMul = function(t) {
                                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                            }, n.prototype.redIMul = function(t) {
                                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                            }, n.prototype.redSqr = function() {
                                return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                            }, n.prototype.redISqr = function() {
                                return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                            }, n.prototype.redSqrt = function() {
                                return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                            }, n.prototype.redInvm = function() {
                                return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                            }, n.prototype.redNeg = function() {
                                return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                            }, n.prototype.redPow = function(t) {
                                return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                            };
                            var v = {
                                k256: null,
                                p224: null,
                                p192: null,
                                p25519: null
                            };

                            function g(t, i) {
                                this.name = t, this.p = new n(i, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                            }

                            function y() {
                                g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                            }

                            function M() {
                                g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                            }

                            function w() {
                                g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                            }

                            function b() {
                                g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                            }

                            function _(t) {
                                if ("string" == typeof t) {
                                    var i = n._prime(t);
                                    this.m = i.p, this.prime = i
                                } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                            }

                            function x(t) {
                                _.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                            }
                            g.prototype._tmp = function() {
                                var t = new n(null);
                                return t.words = new Array(Math.ceil(this.n / 13)), t
                            }, g.prototype.ireduce = function(t) {
                                var i, r = t;
                                do {
                                    this.split(r, this.tmp), i = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                                } while (i > this.n);
                                var e = i < this.n ? -1 : r.ucmp(this.p);
                                return 0 === e ? (r.words[0] = 0, r.length = 1) : e > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                            }, g.prototype.split = function(t, i) {
                                t.iushrn(this.n, 0, i)
                            }, g.prototype.imulK = function(t) {
                                return t.imul(this.k)
                            }, e(y, g), y.prototype.split = function(t, i) {
                                for (var r = Math.min(t.length, 9), e = 0; e < r; e++) i.words[e] = t.words[e];
                                if (i.length = r, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                                var n = t.words[9];
                                for (i.words[i.length++] = 4194303 & n, e = 10; e < t.length; e++) {
                                    var o = 0 | t.words[e];
                                    t.words[e - 10] = (4194303 & o) << 4 | n >>> 22, n = o
                                }
                                n >>>= 22, t.words[e - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                            }, y.prototype.imulK = function(t) {
                                t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                                for (var i = 0, r = 0; r < t.length; r++) {
                                    var e = 0 | t.words[r];
                                    i += 977 * e, t.words[r] = 67108863 & i, i = 64 * e + (i / 67108864 | 0)
                                }
                                return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                            }, e(M, g), e(w, g), e(b, g), b.prototype.imulK = function(t) {
                                for (var i = 0, r = 0; r < t.length; r++) {
                                    var e = 19 * (0 | t.words[r]) + i,
                                        n = 67108863 & e;
                                    e >>>= 26, t.words[r] = n, i = e
                                }
                                return 0 !== i && (t.words[t.length++] = i), t
                            }, n._prime = function(t) {
                                if (v[t]) return v[t];
                                var i;
                                if ("k256" === t) i = new y;
                                else if ("p224" === t) i = new M;
                                else if ("p192" === t) i = new w;
                                else {
                                    if ("p25519" !== t) throw new Error("Unknown prime " + t);
                                    i = new b
                                }
                                return v[t] = i, i
                            }, _.prototype._verify1 = function(t) {
                                r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                            }, _.prototype._verify2 = function(t, i) {
                                r(0 == (t.negative | i.negative), "red works only with positives"), r(t.red && t.red === i.red, "red works only with red numbers")
                            }, _.prototype.imod = function(t) {
                                return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                            }, _.prototype.neg = function(t) {
                                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                            }, _.prototype.add = function(t, i) {
                                this._verify2(t, i);
                                var r = t.add(i);
                                return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                            }, _.prototype.iadd = function(t, i) {
                                this._verify2(t, i);
                                var r = t.iadd(i);
                                return r.cmp(this.m) >= 0 && r.isub(this.m), r
                            }, _.prototype.sub = function(t, i) {
                                this._verify2(t, i);
                                var r = t.sub(i);
                                return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                            }, _.prototype.isub = function(t, i) {
                                this._verify2(t, i);
                                var r = t.isub(i);
                                return r.cmpn(0) < 0 && r.iadd(this.m), r
                            }, _.prototype.shl = function(t, i) {
                                return this._verify1(t), this.imod(t.ushln(i))
                            }, _.prototype.imul = function(t, i) {
                                return this._verify2(t, i), this.imod(t.imul(i))
                            }, _.prototype.mul = function(t, i) {
                                return this._verify2(t, i), this.imod(t.mul(i))
                            }, _.prototype.isqr = function(t) {
                                return this.imul(t, t.clone())
                            }, _.prototype.sqr = function(t) {
                                return this.mul(t, t)
                            }, _.prototype.sqrt = function(t) {
                                if (t.isZero()) return t.clone();
                                var i = this.m.andln(3);
                                if (r(i % 2 == 1), 3 === i) {
                                    var e = this.m.add(new n(1)).iushrn(2);
                                    return this.pow(t, e)
                                }
                                for (var o = this.m.subn(1), s = 0; !o.isZero() && 0 === o.andln(1);) s++, o.iushrn(1);
                                r(!o.isZero());
                                var h = new n(1).toRed(this),
                                    u = h.redNeg(),
                                    a = this.m.subn(1).iushrn(1),
                                    l = this.m.bitLength();
                                for (l = new n(2 * l * l).toRed(this); 0 !== this.pow(l, a).cmp(u);) l.redIAdd(u);
                                for (var f = this.pow(l, o), c = this.pow(t, o.addn(1).iushrn(1)), d = this.pow(t, o), m = s; 0 !== d.cmp(h);) {
                                    for (var p = d, v = 0; 0 !== p.cmp(h); v++) p = p.redSqr();
                                    r(v < m);
                                    var g = this.pow(f, new n(1).iushln(m - v - 1));
                                    c = c.redMul(g), f = g.redSqr(), d = d.redMul(f), m = v
                                }
                                return c
                            }, _.prototype.invm = function(t) {
                                var i = t._invmp(this.m);
                                return 0 !== i.negative ? (i.negative = 0, this.imod(i).redNeg()) : this.imod(i)
                            }, _.prototype.pow = function(t, i) {
                                if (i.isZero()) return new n(1).toRed(this);
                                if (0 === i.cmpn(1)) return t.clone();
                                var r = new Array(16);
                                r[0] = new n(1).toRed(this), r[1] = t;
                                for (var e = 2; e < r.length; e++) r[e] = this.mul(r[e - 1], t);
                                var o = r[0],
                                    s = 0,
                                    h = 0,
                                    u = i.bitLength() % 26;
                                for (0 === u && (u = 26), e = i.length - 1; e >= 0; e--) {
                                    for (var a = i.words[e], l = u - 1; l >= 0; l--) {
                                        var f = a >> l & 1;
                                        o !== r[0] && (o = this.sqr(o)), 0 !== f || 0 !== s ? (s <<= 1, s |= f, (4 == ++h || 0 === e && 0 === l) && (o = this.mul(o, r[s]), h = 0, s = 0)) : h = 0
                                    }
                                    u = 26
                                }
                                return o
                            }, _.prototype.convertTo = function(t) {
                                var i = t.umod(this.m);
                                return i === t ? i.clone() : i
                            }, _.prototype.convertFrom = function(t) {
                                var i = t.clone();
                                return i.red = null, i
                            }, n.mont = function(t) {
                                return new x(t)
                            }, e(x, _), x.prototype.convertTo = function(t) {
                                return this.imod(t.ushln(this.shift))
                            }, x.prototype.convertFrom = function(t) {
                                var i = this.imod(t.mul(this.rinv));
                                return i.red = null, i
                            }, x.prototype.imul = function(t, i) {
                                if (t.isZero() || i.isZero()) return t.words[0] = 0, t.length = 1, t;
                                var r = t.imul(i),
                                    e = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                    n = r.isub(e).iushrn(this.shift),
                                    o = n;
                                return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
                            }, x.prototype.mul = function(t, i) {
                                if (t.isZero() || i.isZero()) return new n(0)._forceRed(this);
                                var r = t.mul(i),
                                    e = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                    o = r.isub(e).iushrn(this.shift),
                                    s = o;
                                return o.cmp(this.m) >= 0 ? s = o.isub(this.m) : o.cmpn(0) < 0 && (s = o.iadd(this.m)), s._forceRed(this)
                            }, x.prototype.invm = function(t) {
                                return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                            }
                        }(t, w)
                    })),
                    k = function(t) {
                        function i(i, r) {
                            void 0 === r && (r = []);
                            var e = t.call(this) || this;
                            return e.accounts = {}, r.length && (e.accounts = r.reduce((function(t, i) {
                                var r;
                                return u(u({}, t), ((r = {})[i.address] = i, r))
                            }), {})), e.provider = i, e.defaultAccount = r[0], e
                        }
                        return function(t, i) {
                            function r() {
                                this.constructor = t
                            }
                            h(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                        }(i, t), i.prototype.create = function() {
                            var t, i = n.schnorr.generatePrivateKey(),
                                r = new M(i);
                            return this.accounts = u(u({}, this.accounts), ((t = {})[r.address] = r, t)), this.defaultAccount || (this.defaultAccount = r), r.address
                        }, i.prototype.addByPrivateKey = function(t) {
                            var i, r = new M(t);
                            return this.accounts = u(u({}, this.accounts), ((i = {})[r.address] = r, i)), this.defaultAccount || (this.defaultAccount = r), r.address
                        }, i.prototype.addByKeystore = function(t, i) {
                            return a(this, void 0, void 0, (function() {
                                var r, e;
                                return l(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, M.fromFile(t, i)];
                                        case 1:
                                            return r = n.sent(), this.accounts = u(u({}, this.accounts), ((e = {})[r.address] = r, e)), this.defaultAccount || (this.defaultAccount = r), [2, r.address]
                                    }
                                }))
                            }))
                        }, i.prototype.addByMnemonic = function(t, i) {
                            if (void 0 === i && (i = 0), !this.isValidMnemonic(t)) throw new Error("Invalid mnemonic phrase: " + t);
                            var r = o.mnemonicToSeed(t),
                                e = s.fromMasterSeed(r).derive("m/44'/313'/0'/0/" + i).privateKey.toString("hex");
                            return this.addByPrivateKey(e)
                        }, i.prototype.addByMnemonicLedger = function(t, i) {
                            if (void 0 === i && (i = 0), !this.isValidMnemonic(t)) throw new Error("Invalid mnemonic phrase: " + t);
                            var r = o.mnemonicToSeed(t),
                                e = s.fromMasterSeed(r).derive("m/44'/313'/" + i + "'/0'/0'").privateKey.toString("hex");
                            return this.addByPrivateKey(e)
                        }, i.prototype.export = function(t, i, r) {
                            if (void 0 === r && (r = "scrypt"), !this.accounts[t]) throw new Error("No account with address " + t + " exists");
                            return this.accounts[t].toFile(i, r)
                        }, i.prototype.remove = function(t) {
                            if (this.accounts[t]) {
                                var i = this.accounts,
                                    r = t,
                                    e = (i[r], function(t, i) {
                                        var r = {};
                                        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && i.indexOf(e) < 0 && (r[e] = t[e]);
                                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                            var n = 0;
                                            for (e = Object.getOwnPropertySymbols(t); n < e.length; n++) i.indexOf(e[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, e[n]) && (r[e[n]] = t[e[n]])
                                        }
                                        return r
                                    }(i, ["symbol" == typeof r ? r : r + ""]));
                                return this.accounts = e, !0
                            }
                            return !1
                        }, i.prototype.setDefault = function(t) {
                            this.defaultAccount = this.accounts[t]
                        }, i.prototype.sign = function(t, i) {
                            if (t.txParams && t.txParams.pubKey) {
                                var r = n.getAddressFromPublicKey(t.txParams.pubKey);
                                if (!this.accounts[r]) throw new Error("Could not sign the transaction with " + r + " as it does not exist");
                                return this.signWith(t, r, i)
                            }
                            if (!this.defaultAccount) throw new Error("This wallet has no default account.");
                            return this.signWith(t, this.defaultAccount.address, i)
                        }, i.prototype.signBatch = function(t) {
                            return a(this, void 0, void 0, (function() {
                                var i, r, e, n, o, s, h;
                                return l(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (i = [], !this.defaultAccount) throw new Error("This wallet has no default account.");
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 7, , 8]), r = this.accounts[this.defaultAccount.address], [4, this.provider.send("GetBalance", r.address.replace("0x", "").toLowerCase())];
                                        case 2:
                                            if (void 0 === (e = a.sent()).result) throw new Error("Could not get balance");
                                            if ("number" != typeof e.result.nonce) throw new Error("Could not get nonce");
                                            n = e.result.nonce + 1, o = function(e) {
                                                var o, h, a;
                                                return l(this, (function(l) {
                                                    switch (l.label) {
                                                        case 0:
                                                            return o = e + n, h = t[e].map((function(t) {
                                                                return u(u({}, t), {
                                                                    nonce: o,
                                                                    pubKey: r.publicKey
                                                                })
                                                            })), [4, s.sign(h)];
                                                        case 1:
                                                            return a = l.sent(), i.push(a), [2]
                                                    }
                                                }))
                                            }, s = this, h = 0, a.label = 3;
                                        case 3:
                                            return h < t.length ? [5, o(h)] : [3, 6];
                                        case 4:
                                            a.sent(), a.label = 5;
                                        case 5:
                                            return h++, [3, 3];
                                        case 6:
                                            return [3, 8];
                                        case 7:
                                            throw a.sent();
                                        case 8:
                                            return [2, i]
                                    }
                                }))
                            }))
                        }, i.prototype.signWith = function(t, i, r) {
                            return a(this, void 0, void 0, (function() {
                                var e, n, o, s, h, a, f, c;
                                return l(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            if (!this.accounts[i]) throw new Error("The selected account does not exist on this Wallet instance.");
                                            e = this.accounts[i], n = t.txParams.gasPrice, o = new A(t.txParams.gasLimit.toString()), s = n.mul(o).add(t.txParams.amount), h = 0, l.label = 1;
                                        case 1:
                                            if (l.trys.push([1, 5, , 6]), t.txParams.nonce) return [3, 4];
                                            if (r) throw new Error("No nonce detected in tx params when signing in offline mode");
                                            return void 0 !== r && r ? [3, 3] : [4, this.provider.send("GetBalance", e.address.replace("0x", "").toLowerCase())];
                                        case 2:
                                            if (void 0 === (a = l.sent()).result) throw new Error("Could not get balance");
                                            if (f = new A(a.result.balance), s.gt(f)) throw new Error("You do not have enough funds, need " + s.toString() + " but only have " + f.toString());
                                            if ("number" != typeof a.result.nonce) throw new Error("Could not get nonce");
                                            h = a.result.nonce, l.label = 3;
                                        case 3:
                                            return [2, (c = t.map((function(t) {
                                                return u(u({}, t), {
                                                    nonce: t.nonce || h + 1,
                                                    pubKey: e.publicKey
                                                })
                                            }))).map((function(t) {
                                                return u(u({}, t), {
                                                    signature: e.signTransaction(c.bytes)
                                                })
                                            }))];
                                        case 4:
                                            return [2, t.map((function(t) {
                                                return u(u({}, t), {
                                                    pubKey: e.publicKey
                                                })
                                            })).map((function(i) {
                                                return u(u({}, i), {
                                                    signature: e.signTransaction(t.bytes)
                                                })
                                            }))];
                                        case 5:
                                            throw l.sent();
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }))
                        }, i.prototype.isValidMnemonic = function(t) {
                            return !(t.trim().split(/\s+/g).length < 12) && o.validateMnemonic(t)
                        }, i
                    }(i.Signer);
                (_ = t.TxStatus || (t.TxStatus = {}))[_.Initialised = 0] = "Initialised", _[_.Pending = 1] = "Pending", _[_.Confirmed = 2] = "Confirmed", _[_.Rejected = 3] = "Rejected", (x = t.TxEventName || (t.TxEventName = {})).Error = "error", x.Receipt = "receipt", x.Track = "track";
                var P = T;

                function T(t, i) {
                    if (!t) throw new Error(i || "Assertion failed")
                }

                function B(t, i) {
                    return 55296 == (64512 & t.charCodeAt(i)) && !(i < 0 || i + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(i + 1))
                }

                function L(t) {
                    return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
                }

                function E(t) {
                    return 1 === t.length ? "0" + t : t
                }

                function K(t) {
                    return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
                }
                T.equal = function(t, i, r) {
                    if (t != i) throw new Error(r || "Assertion failed: " + t + " != " + i)
                };
                var R = {
                    inherits: b((function(t) {
                        "function" == typeof Object.create ? t.exports = function(t, i) {
                            i && (t.super_ = i, t.prototype = Object.create(i.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : t.exports = function(t, i) {
                            if (i) {
                                t.super_ = i;
                                var r = function() {};
                                r.prototype = i.prototype, t.prototype = new r, t.prototype.constructor = t
                            }
                        }
                    })),
                    toArray: function(t, i) {
                        if (Array.isArray(t)) return t.slice();
                        if (!t) return [];
                        var r = [];
                        if ("string" == typeof t)
                            if (i) {
                                if ("hex" === i)
                                    for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
                            } else
                                for (var e = 0, n = 0; n < t.length; n++) {
                                    var o = t.charCodeAt(n);
                                    o < 128 ? r[e++] = o : o < 2048 ? (r[e++] = o >> 6 | 192, r[e++] = 63 & o | 128) : B(t, n) ? (o = 65536 + ((1023 & o) << 10) + (1023 & t.charCodeAt(++n)), r[e++] = o >> 18 | 240, r[e++] = o >> 12 & 63 | 128, r[e++] = o >> 6 & 63 | 128, r[e++] = 63 & o | 128) : (r[e++] = o >> 12 | 224, r[e++] = o >> 6 & 63 | 128, r[e++] = 63 & o | 128)
                                } else
                                    for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
                        return r
                    },
                    toHex: function(t) {
                        for (var i = "", r = 0; r < t.length; r++) i += E(t[r].toString(16));
                        return i
                    },
                    htonl: L,
                    toHex32: function(t, i) {
                        for (var r = "", e = 0; e < t.length; e++) {
                            var n = t[e];
                            "little" === i && (n = L(n)), r += K(n.toString(16))
                        }
                        return r
                    },
                    zero2: E,
                    zero8: K,
                    join32: function(t, i, r, e) {
                        var n = r - i;
                        P(n % 4 == 0);
                        for (var o = new Array(n / 4), s = 0, h = i; s < o.length; s++, h += 4) {
                            var u;
                            u = "big" === e ? t[h] << 24 | t[h + 1] << 16 | t[h + 2] << 8 | t[h + 3] : t[h + 3] << 24 | t[h + 2] << 16 | t[h + 1] << 8 | t[h], o[s] = u >>> 0
                        }
                        return o
                    },
                    split32: function(t, i) {
                        for (var r = new Array(4 * t.length), e = 0, n = 0; e < t.length; e++, n += 4) {
                            var o = t[e];
                            "big" === i ? (r[n] = o >>> 24, r[n + 1] = o >>> 16 & 255, r[n + 2] = o >>> 8 & 255, r[n + 3] = 255 & o) : (r[n + 3] = o >>> 24, r[n + 2] = o >>> 16 & 255, r[n + 1] = o >>> 8 & 255, r[n] = 255 & o)
                        }
                        return r
                    },
                    rotr32: function(t, i) {
                        return t >>> i | t << 32 - i
                    },
                    rotl32: function(t, i) {
                        return t << i | t >>> 32 - i
                    },
                    sum32: function(t, i) {
                        return t + i >>> 0
                    },
                    sum32_3: function(t, i, r) {
                        return t + i + r >>> 0
                    },
                    sum32_4: function(t, i, r, e) {
                        return t + i + r + e >>> 0
                    },
                    sum32_5: function(t, i, r, e, n) {
                        return t + i + r + e + n >>> 0
                    },
                    sum64: function(t, i, r, e) {
                        var n = t[i],
                            o = e + t[i + 1] >>> 0,
                            s = (o < e ? 1 : 0) + r + n;
                        t[i] = s >>> 0, t[i + 1] = o
                    },
                    sum64_hi: function(t, i, r, e) {
                        return (i + e >>> 0 < i ? 1 : 0) + t + r >>> 0
                    },
                    sum64_lo: function(t, i, r, e) {
                        return i + e >>> 0
                    },
                    sum64_4_hi: function(t, i, r, e, n, o, s, h) {
                        var u = 0,
                            a = i;
                        return u += (a = a + e >>> 0) < i ? 1 : 0, u += (a = a + o >>> 0) < o ? 1 : 0, t + r + n + s + (u += (a = a + h >>> 0) < h ? 1 : 0) >>> 0
                    },
                    sum64_4_lo: function(t, i, r, e, n, o, s, h) {
                        return i + e + o + h >>> 0
                    },
                    sum64_5_hi: function(t, i, r, e, n, o, s, h, u, a) {
                        var l = 0,
                            f = i;
                        return l += (f = f + e >>> 0) < i ? 1 : 0, l += (f = f + o >>> 0) < o ? 1 : 0, l += (f = f + h >>> 0) < h ? 1 : 0, t + r + n + s + u + (l += (f = f + a >>> 0) < a ? 1 : 0) >>> 0
                    },
                    sum64_5_lo: function(t, i, r, e, n, o, s, h, u, a) {
                        return i + e + o + h + a >>> 0
                    },
                    rotr64_hi: function(t, i, r) {
                        return (i << 32 - r | t >>> r) >>> 0
                    },
                    rotr64_lo: function(t, i, r) {
                        return (t << 32 - r | i >>> r) >>> 0
                    },
                    shr64_hi: function(t, i, r) {
                        return t >>> r
                    },
                    shr64_lo: function(t, i, r) {
                        return (t << 32 - r | i >>> r) >>> 0
                    }
                };

                function N() {
                    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
                }
                var z = N;
                N.prototype.update = function(t, i) {
                    if (t = R.toArray(t, i), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                        var r = (t = this.pending).length % this._delta8;
                        this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = R.join32(t, 0, t.length - r, this.endian);
                        for (var e = 0; e < t.length; e += this._delta32) this._update(t, e, e + this._delta32)
                    }
                    return this
                }, N.prototype.digest = function(t) {
                    return this.update(this._pad()), P(null === this.pending), this._digest(t)
                }, N.prototype._pad = function() {
                    var t = this.pendingTotal,
                        i = this._delta8,
                        r = i - (t + this.padLength) % i,
                        e = new Array(r + this.padLength);
                    e[0] = 128;
                    for (var n = 1; n < r; n++) e[n] = 0;
                    if (t <<= 3, "big" === this.endian) {
                        for (var o = 8; o < this.padLength; o++) e[n++] = 0;
                        e[n++] = 0, e[n++] = 0, e[n++] = 0, e[n++] = 0, e[n++] = t >>> 24 & 255, e[n++] = t >>> 16 & 255, e[n++] = t >>> 8 & 255, e[n++] = 255 & t
                    } else
                        for (e[n++] = 255 & t, e[n++] = t >>> 8 & 255, e[n++] = t >>> 16 & 255, e[n++] = t >>> 24 & 255, e[n++] = 0, e[n++] = 0, e[n++] = 0, e[n++] = 0, o = 8; o < this.padLength; o++) e[n++] = 0;
                    return e
                };
                var j = {
                        BlockHash: z
                    },
                    C = R.rotr32;

                function O(t, i, r) {
                    return t & i ^ ~t & r
                }

                function q(t, i, r) {
                    return t & i ^ t & r ^ i & r
                }

                function Z(t, i, r) {
                    return t ^ i ^ r
                }
                var I = {
                        ft_1: function(t, i, r, e) {
                            return 0 === t ? O(i, r, e) : 1 === t || 3 === t ? Z(i, r, e) : 2 === t ? q(i, r, e) : void 0
                        },
                        ch32: O,
                        maj32: q,
                        p32: Z,
                        s0_256: function(t) {
                            return C(t, 2) ^ C(t, 13) ^ C(t, 22)
                        },
                        s1_256: function(t) {
                            return C(t, 6) ^ C(t, 11) ^ C(t, 25)
                        },
                        g0_256: function(t) {
                            return C(t, 7) ^ C(t, 18) ^ t >>> 3
                        },
                        g1_256: function(t) {
                            return C(t, 17) ^ C(t, 19) ^ t >>> 10
                        }
                    },
                    H = R.rotl32,
                    F = R.sum32,
                    W = R.sum32_5,
                    G = I.ft_1,
                    D = j.BlockHash,
                    U = [1518500249, 1859775393, 2400959708, 3395469782];

                function J() {
                    if (!(this instanceof J)) return new J;
                    D.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
                }
                R.inherits(J, D);
                var V = J;
                J.blockSize = 512, J.outSize = 160, J.hmacStrength = 80, J.padLength = 64, J.prototype._update = function(t, i) {
                    for (var r = this.W, e = 0; e < 16; e++) r[e] = t[i + e];
                    for (; e < r.length; e++) r[e] = H(r[e - 3] ^ r[e - 8] ^ r[e - 14] ^ r[e - 16], 1);
                    var n = this.h[0],
                        o = this.h[1],
                        s = this.h[2],
                        h = this.h[3],
                        u = this.h[4];
                    for (e = 0; e < r.length; e++) {
                        var a = ~~(e / 20),
                            l = W(H(n, 5), G(a, o, s, h), u, r[e], U[a]);
                        u = h, h = s, s = H(o, 30), o = n, n = l
                    }
                    this.h[0] = F(this.h[0], n), this.h[1] = F(this.h[1], o), this.h[2] = F(this.h[2], s), this.h[3] = F(this.h[3], h), this.h[4] = F(this.h[4], u)
                }, J.prototype._digest = function(t) {
                    return "hex" === t ? R.toHex32(this.h, "big") : R.split32(this.h, "big")
                };
                var X = R.sum32,
                    Y = R.sum32_4,
                    Q = R.sum32_5,
                    $ = I.ch32,
                    tt = I.maj32,
                    it = I.s0_256,
                    rt = I.s1_256,
                    et = I.g0_256,
                    nt = I.g1_256,
                    ot = j.BlockHash,
                    st = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

                function ht() {
                    if (!(this instanceof ht)) return new ht;
                    ot.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = st, this.W = new Array(64)
                }
                R.inherits(ht, ot);
                var ut = ht;

                function at() {
                    if (!(this instanceof at)) return new at;
                    ut.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
                }
                ht.blockSize = 512, ht.outSize = 256, ht.hmacStrength = 192, ht.padLength = 64, ht.prototype._update = function(t, i) {
                    for (var r = this.W, e = 0; e < 16; e++) r[e] = t[i + e];
                    for (; e < r.length; e++) r[e] = Y(nt(r[e - 2]), r[e - 7], et(r[e - 15]), r[e - 16]);
                    var n = this.h[0],
                        o = this.h[1],
                        s = this.h[2],
                        h = this.h[3],
                        u = this.h[4],
                        a = this.h[5],
                        l = this.h[6],
                        f = this.h[7];
                    for (P(this.k.length === r.length), e = 0; e < r.length; e++) {
                        var c = Q(f, rt(u), $(u, a, l), this.k[e], r[e]),
                            d = X(it(n), tt(n, o, s));
                        f = l, l = a, a = u, u = X(h, c), h = s, s = o, o = n, n = X(c, d)
                    }
                    this.h[0] = X(this.h[0], n), this.h[1] = X(this.h[1], o), this.h[2] = X(this.h[2], s), this.h[3] = X(this.h[3], h), this.h[4] = X(this.h[4], u), this.h[5] = X(this.h[5], a), this.h[6] = X(this.h[6], l), this.h[7] = X(this.h[7], f)
                }, ht.prototype._digest = function(t) {
                    return "hex" === t ? R.toHex32(this.h, "big") : R.split32(this.h, "big")
                }, R.inherits(at, ut);
                var lt = at;
                at.blockSize = 512, at.outSize = 224, at.hmacStrength = 192, at.padLength = 64, at.prototype._digest = function(t) {
                    return "hex" === t ? R.toHex32(this.h.slice(0, 7), "big") : R.split32(this.h.slice(0, 7), "big")
                };
                var ft = R.rotr64_hi,
                    ct = R.rotr64_lo,
                    dt = R.shr64_hi,
                    mt = R.shr64_lo,
                    pt = R.sum64,
                    vt = R.sum64_hi,
                    gt = R.sum64_lo,
                    yt = R.sum64_4_hi,
                    Mt = R.sum64_4_lo,
                    wt = R.sum64_5_hi,
                    bt = R.sum64_5_lo,
                    _t = j.BlockHash,
                    xt = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                function St() {
                    if (!(this instanceof St)) return new St;
                    _t.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = xt, this.W = new Array(160)
                }
                R.inherits(St, _t);
                var At = St;

                function kt(t, i, r, e, n) {
                    var o = t & r ^ ~t & n;
                    return o < 0 && (o += 4294967296), o
                }

                function Pt(t, i, r, e, n, o) {
                    var s = i & e ^ ~i & o;
                    return s < 0 && (s += 4294967296), s
                }

                function Tt(t, i, r, e, n) {
                    var o = t & r ^ t & n ^ r & n;
                    return o < 0 && (o += 4294967296), o
                }

                function Bt(t, i, r, e, n, o) {
                    var s = i & e ^ i & o ^ e & o;
                    return s < 0 && (s += 4294967296), s
                }

                function Lt(t, i) {
                    var r = ft(t, i, 28) ^ ft(i, t, 2) ^ ft(i, t, 7);
                    return r < 0 && (r += 4294967296), r
                }

                function Et(t, i) {
                    var r = ct(t, i, 28) ^ ct(i, t, 2) ^ ct(i, t, 7);
                    return r < 0 && (r += 4294967296), r
                }

                function Kt(t, i) {
                    var r = ft(t, i, 14) ^ ft(t, i, 18) ^ ft(i, t, 9);
                    return r < 0 && (r += 4294967296), r
                }

                function Rt(t, i) {
                    var r = ct(t, i, 14) ^ ct(t, i, 18) ^ ct(i, t, 9);
                    return r < 0 && (r += 4294967296), r
                }

                function Nt(t, i) {
                    var r = ft(t, i, 1) ^ ft(t, i, 8) ^ dt(t, i, 7);
                    return r < 0 && (r += 4294967296), r
                }

                function zt(t, i) {
                    var r = ct(t, i, 1) ^ ct(t, i, 8) ^ mt(t, i, 7);
                    return r < 0 && (r += 4294967296), r
                }

                function jt(t, i) {
                    var r = ft(t, i, 19) ^ ft(i, t, 29) ^ dt(t, i, 6);
                    return r < 0 && (r += 4294967296), r
                }

                function Ct(t, i) {
                    var r = ct(t, i, 19) ^ ct(i, t, 29) ^ mt(t, i, 6);
                    return r < 0 && (r += 4294967296), r
                }

                function Ot() {
                    if (!(this instanceof Ot)) return new Ot;
                    At.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
                }
                St.blockSize = 1024, St.outSize = 512, St.hmacStrength = 192, St.padLength = 128, St.prototype._prepareBlock = function(t, i) {
                    for (var r = this.W, e = 0; e < 32; e++) r[e] = t[i + e];
                    for (; e < r.length; e += 2) {
                        var n = jt(r[e - 4], r[e - 3]),
                            o = Ct(r[e - 4], r[e - 3]),
                            s = r[e - 14],
                            h = r[e - 13],
                            u = Nt(r[e - 30], r[e - 29]),
                            a = zt(r[e - 30], r[e - 29]),
                            l = r[e - 32],
                            f = r[e - 31];
                        r[e] = yt(n, o, s, h, u, a, l, f), r[e + 1] = Mt(n, o, s, h, u, a, l, f)
                    }
                }, St.prototype._update = function(t, i) {
                    this._prepareBlock(t, i);
                    var r = this.W,
                        e = this.h[0],
                        n = this.h[1],
                        o = this.h[2],
                        s = this.h[3],
                        h = this.h[4],
                        u = this.h[5],
                        a = this.h[6],
                        l = this.h[7],
                        f = this.h[8],
                        c = this.h[9],
                        d = this.h[10],
                        m = this.h[11],
                        p = this.h[12],
                        v = this.h[13],
                        g = this.h[14],
                        y = this.h[15];
                    P(this.k.length === r.length);
                    for (var M = 0; M < r.length; M += 2) {
                        var w = g,
                            b = y,
                            _ = Kt(f, c),
                            x = Rt(f, c),
                            S = kt(f, 0, d, 0, p),
                            A = Pt(0, c, 0, m, 0, v),
                            k = this.k[M],
                            T = this.k[M + 1],
                            B = r[M],
                            L = r[M + 1],
                            E = wt(w, b, _, x, S, A, k, T, B, L),
                            K = bt(w, b, _, x, S, A, k, T, B, L);
                        w = Lt(e, n), b = Et(e, n), _ = Tt(e, 0, o, 0, h), x = Bt(0, n, 0, s, 0, u);
                        var R = vt(w, b, _, x),
                            N = gt(w, b, _, x);
                        g = p, y = v, p = d, v = m, d = f, m = c, f = vt(a, l, E, K), c = gt(l, l, E, K), a = h, l = u, h = o, u = s, o = e, s = n, e = vt(E, K, R, N), n = gt(E, K, R, N)
                    }
                    pt(this.h, 0, e, n), pt(this.h, 2, o, s), pt(this.h, 4, h, u), pt(this.h, 6, a, l), pt(this.h, 8, f, c), pt(this.h, 10, d, m), pt(this.h, 12, p, v), pt(this.h, 14, g, y)
                }, St.prototype._digest = function(t) {
                    return "hex" === t ? R.toHex32(this.h, "big") : R.split32(this.h, "big")
                }, R.inherits(Ot, At);
                var qt = Ot;
                Ot.blockSize = 1024, Ot.outSize = 384, Ot.hmacStrength = 192, Ot.padLength = 128, Ot.prototype._digest = function(t) {
                    return "hex" === t ? R.toHex32(this.h.slice(0, 12), "big") : R.split32(this.h.slice(0, 12), "big")
                };
                var Zt = {
                        sha1: V,
                        sha224: lt,
                        sha256: ut,
                        sha384: qt,
                        sha512: At
                    },
                    It = R.rotl32,
                    Ht = R.sum32,
                    Ft = R.sum32_3,
                    Wt = R.sum32_4,
                    Gt = j.BlockHash;

                function Dt() {
                    if (!(this instanceof Dt)) return new Dt;
                    Gt.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
                }
                R.inherits(Dt, Gt);
                var Ut = Dt;

                function Jt(t, i, r, e) {
                    return t <= 15 ? i ^ r ^ e : t <= 31 ? i & r | ~i & e : t <= 47 ? (i | ~r) ^ e : t <= 63 ? i & e | r & ~e : i ^ (r | ~e)
                }

                function Vt(t) {
                    return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
                }

                function Xt(t) {
                    return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
                }
                Dt.blockSize = 512, Dt.outSize = 160, Dt.hmacStrength = 192, Dt.padLength = 64, Dt.prototype._update = function(t, i) {
                    for (var r = this.h[0], e = this.h[1], n = this.h[2], o = this.h[3], s = this.h[4], h = r, u = e, a = n, l = o, f = s, c = 0; c < 80; c++) {
                        var d = Ht(It(Wt(r, Jt(c, e, n, o), t[Yt[c] + i], Vt(c)), $t[c]), s);
                        r = s, s = o, o = It(n, 10), n = e, e = d, d = Ht(It(Wt(h, Jt(79 - c, u, a, l), t[Qt[c] + i], Xt(c)), ti[c]), f), h = f, f = l, l = It(a, 10), a = u, u = d
                    }
                    d = Ft(this.h[1], n, l), this.h[1] = Ft(this.h[2], o, f), this.h[2] = Ft(this.h[3], s, h), this.h[3] = Ft(this.h[4], r, u), this.h[4] = Ft(this.h[0], e, a), this.h[0] = d
                }, Dt.prototype._digest = function(t) {
                    return "hex" === t ? R.toHex32(this.h, "little") : R.split32(this.h, "little")
                };
                var Yt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                    Qt = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                    $t = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                    ti = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
                    ii = {
                        ripemd160: Ut
                    };

                function ri(t, i, r) {
                    if (!(this instanceof ri)) return new ri(t, i, r);
                    this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(R.toArray(i, r))
                }
                var ei = ri;
                ri.prototype._init = function(t) {
                    t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), P(t.length <= this.blockSize);
                    for (var i = t.length; i < this.blockSize; i++) t.push(0);
                    for (i = 0; i < t.length; i++) t[i] ^= 54;
                    for (this.inner = (new this.Hash).update(t), i = 0; i < t.length; i++) t[i] ^= 106;
                    this.outer = (new this.Hash).update(t)
                }, ri.prototype.update = function(t, i) {
                    return this.inner.update(t, i), this
                }, ri.prototype.digest = function(t) {
                    return this.outer.update(this.inner.digest()), this.outer.digest(t)
                };
                var ni = b((function(t, i) {
                        var r = i;
                        r.utils = R, r.common = j, r.sha = Zt, r.ripemd = ii, r.hmac = ei, r.sha1 = r.sha.sha1, r.sha256 = r.sha.sha256, r.sha224 = r.sha.sha224, r.sha384 = r.sha.sha384, r.sha512 = r.sha.sha512, r.ripemd160 = r.ripemd.ripemd160
                    })),
                    oi = function() {
                        function e(r, e, o, s, h) {
                            void 0 === o && (o = t.TxStatus.Initialised), void 0 === s && (s = !1), void 0 === h && (h = !0), this.code = "", this.data = "", this.version = r.version, this.toAddr = h ? n.normaliseAddress(r.toAddr) : n.toChecksumAddress(r.toAddr), this.nonce = r.nonce, this.pubKey = r.pubKey, this.amount = r.amount, this.code = r.code || "", this.data = r.data || "", this.signature = r.signature, this.gasPrice = r.gasPrice, this.gasLimit = r.gasLimit, this.receipt = r.receipt, this.provider = e, this.status = o, this.toDS = s, this.blockConfirmation = 0, this.eventEmitter = new i.EventEmitter
                        }
                        return e.confirm = function(i, r) {
                            return new e(i, r, t.TxStatus.Confirmed)
                        }, e.reject = function(i, r) {
                            return new e(i, r, t.TxStatus.Rejected)
                        }, Object.defineProperty(e.prototype, "hash", {
                            get: function() {
                                var t = this.bytes.toString("hex");
                                return ni.sha256().update(t, "hex").digest("hex")
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "bytes", {
                            get: function() {
                                return d(this.txParams)
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "senderAddress", {
                            get: function() {
                                return this.pubKey ? n.getAddressFromPublicKey(this.pubKey) : "0".repeat(40)
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "txParams", {
                            get: function() {
                                return {
                                    version: this.version,
                                    toAddr: n.normaliseAddress(this.toAddr),
                                    nonce: this.nonce,
                                    pubKey: this.pubKey,
                                    amount: this.amount,
                                    gasPrice: this.gasPrice,
                                    gasLimit: this.gasLimit,
                                    code: this.code,
                                    data: this.data,
                                    signature: this.signature,
                                    receipt: this.receipt
                                }
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "payload", {
                            get: function() {
                                return {
                                    version: 0,
                                    toAddr: this.toAddr,
                                    nonce: this.nonce,
                                    pubKey: this.pubKey,
                                    amount: this.amount.toString(),
                                    gasPrice: this.gasPrice.toString(),
                                    gasLimit: this.gasLimit.toString(),
                                    code: this.code,
                                    data: this.data,
                                    signature: this.signature,
                                    receipt: this.receipt
                                }
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.isPending = function() {
                            return this.status === t.TxStatus.Pending
                        }, e.prototype.isInitialised = function() {
                            return this.status === t.TxStatus.Initialised
                        }, e.prototype.getReceipt = function() {
                            return this.receipt
                        }, e.prototype.isConfirmed = function() {
                            return this.status === t.TxStatus.Confirmed
                        }, e.prototype.isRejected = function() {
                            return this.status === t.TxStatus.Rejected
                        }, e.prototype.setProvider = function(t) {
                            this.provider = t
                        }, e.prototype.setStatus = function(t) {
                            return this.status = t, this
                        }, e.prototype.observed = function() {
                            return this.eventEmitter
                        }, e.prototype.blockConfirm = function(i, e, n) {
                            return void 0 === e && (e = 4), void 0 === n && (n = 1e3), a(this, void 0, void 0, (function() {
                                var o, s, h, u, a, f, c;
                                return l(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return this.status = t.TxStatus.Pending, [4, this.getBlockNumber()];
                                        case 1:
                                            o = l.sent(), s = o, h = 0, l.label = 2;
                                        case 2:
                                            if (!(h < e)) return [3, 12];
                                            l.label = 3;
                                        case 3:
                                            return l.trys.push([3, 8, , 9]), [4, this.getBlockNumber()];
                                        case 4:
                                            return u = l.sent(), a = s.add(new r.BN(0 === h ? h : 1)), u.gte(a) ? (s = u, this.emit(t.TxEventName.Track, {
                                                txHash: i,
                                                attempt: h,
                                                currentBlock: s.toString()
                                            }), [4, this.trackTx(i)]) : [3, 6];
                                        case 5:
                                            return l.sent() ? (this.blockConfirmation = u.sub(o).toNumber(), [2, this]) : [3, 7];
                                        case 6:
                                            h = h - 1 >= 0 ? h - 1 : 0, l.label = 7;
                                        case 7:
                                            return [3, 9];
                                        case 8:
                                            throw f = l.sent(), this.status = t.TxStatus.Rejected, f;
                                        case 9:
                                            return h + 1 < e ? [4, g(n)] : [3, 11];
                                        case 10:
                                            l.sent(), l.label = 11;
                                        case 11:
                                            return h += 1, [3, 2];
                                        case 12:
                                            return [4, this.getBlockNumber()];
                                        case 13:
                                            throw c = l.sent(), this.blockConfirmation = c.sub(o).toNumber(), this.status = t.TxStatus.Rejected, new Error("The transaction is still not confirmed after " + e + " blocks.")
                                    }
                                }))
                            }))
                        }, e.prototype.confirm = function(r, e, n) {
                            return void 0 === e && (e = i.GET_TX_ATTEMPTS), void 0 === n && (n = 1e3), a(this, void 0, void 0, (function() {
                                var i, o;
                                return l(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            this.status = t.TxStatus.Pending, i = 0, s.label = 1;
                                        case 1:
                                            if (!(i < e)) return [3, 8];
                                            this.emit(t.TxEventName.Track, {
                                                txHash: r,
                                                attempt: i
                                            }), s.label = 2;
                                        case 2:
                                            return s.trys.push([2, 4, , 5]), [4, this.trackTx(r)];
                                        case 3:
                                            return s.sent() ? [2, this] : [3, 5];
                                        case 4:
                                            throw o = s.sent(), this.status = t.TxStatus.Rejected, o;
                                        case 5:
                                            return i + 1 < e ? [4, g(n * i)] : [3, 7];
                                        case 6:
                                            s.sent(), s.label = 7;
                                        case 7:
                                            return i++, [3, 1];
                                        case 8:
                                            throw this.status = t.TxStatus.Rejected, new Error("The transaction is still not confirmed after " + e + " attempts.")
                                    }
                                }))
                            }))
                        }, e.prototype.map = function(t) {
                            var i = t(this.txParams);
                            return this.setParams(i), this
                        }, e.prototype.setParams = function(t) {
                            this.version = t.version, this.toAddr = n.normaliseAddress(t.toAddr), this.nonce = t.nonce, this.pubKey = t.pubKey, this.amount = t.amount, this.code = t.code || "", this.data = t.data || "", this.signature = t.signature, this.gasPrice = t.gasPrice, this.gasLimit = t.gasLimit, this.receipt = t.receipt
                        }, e.prototype.trackTx = function(r) {
                            return a(this, void 0, void 0, (function() {
                                var e;
                                return l(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.provider.send(i.RPCMethod.GetTransaction, r)];
                                        case 1:
                                            return (e = n.sent()).error ? (this.emit(t.TxEventName.Error, e.error), [2, !1]) : (this.id = e.result.ID, this.receipt = u(u({}, e.result.receipt), {
                                                cumulative_gas: parseInt(e.result.receipt.cumulative_gas, 10)
                                            }), this.emit(t.TxEventName.Receipt, this.receipt), this.status = this.receipt && this.receipt.success ? t.TxStatus.Confirmed : t.TxStatus.Rejected, [2, !0])
                                    }
                                }))
                            }))
                        }, e.prototype.getBlockNumber = function() {
                            return a(this, void 0, void 0, (function() {
                                var t;
                                return l(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, 2, , 3]), [4, this.provider.send(i.RPCMethod.GetLatestTxBlock)];
                                        case 1:
                                            if (void 0 === (t = e.sent()).error && t.result.header.BlockNum) return [2, new r.BN(t.result.header.BlockNum)];
                                            throw new Error("Can not get latest BlockNumber");
                                        case 2:
                                            throw e.sent();
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        }, e.prototype.emit = function(t, i) {
                            this.eventEmitter.emit(t, u(u({}, i), {
                                event: t
                            }))
                        }, e
                    }(),
                    si = function() {
                        function r(t, r) {
                            this.provider = t, this.provider.middleware.request.use(v, i.RPCMethod.CreateTransaction), this.signer = r
                        }
                        return r.prototype.new = function(i, r, e) {
                            return void 0 === r && (r = !1), void 0 === e && (e = !0), new oi(i, this.provider, t.TxStatus.Initialised, r, e)
                        }, r.prototype.payment = function(t) {
                            return a(this, void 0, void 0, (function() {
                                var r, e, n, o;
                                return l(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return null == (r = this.signer.defaultAccount) ? [3, 2] : (e = r.address, [4, this.provider.send(i.RPCMethod.GetBalance, e.replace("0x", "").toLowerCase())]);
                                        case 1:
                                            if ((n = s.sent()).error) throw n.error;
                                            if (o = new A(n.result.balance), 1 === t.amount.cmp(o)) throw new Error("No sufficient fund");
                                            return [3, 3];
                                        case 2:
                                            throw new Error("No default wallet");
                                        case 3:
                                            return [2, this.new(t, !0)]
                                    }
                                }))
                            }))
                        }, r
                    }();
                t.util = y, t.Account = M, t.Wallet = k, t.Transaction = oi, t.TransactionFactory = si, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            })(i, r(507), r(471), r(3664), r(472), r(3669), r(1405))
        }
    }
]);