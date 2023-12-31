/*! For license information please see vendors.d97c19ef260b75ea99fc.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [133], {
        1068: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.rlphash = e.ripemd160FromArray = e.ripemd160FromString = e.ripemd160 = e.sha256FromArray = e.sha256FromString = e.sha256 = e.keccakFromArray = e.keccakFromHexString = e.keccakFromString = e.keccak256 = e.keccak = void 0;
            var n = r(2347),
                i = r(101),
                o = r(266),
                s = r(344),
                u = r(622);
            e.keccak = function(t, e) {
                switch (void 0 === e && (e = 256), (0, u.assertIsBuffer)(t), e) {
                    case 224:
                        return (0, n.keccak224)(t);
                    case 256:
                        return (0, n.keccak256)(t);
                    case 384:
                        return (0, n.keccak384)(t);
                    case 512:
                        return (0, n.keccak512)(t);
                    default:
                        throw new Error("Invald algorithm: keccak".concat(e))
                }
            };
            e.keccak256 = function(t) {
                return (0, e.keccak)(t)
            };
            e.keccakFromString = function(t, r) {
                void 0 === r && (r = 256), (0, u.assertIsString)(t);
                var n = Buffer.from(t, "utf8");
                return (0, e.keccak)(n, r)
            };
            e.keccakFromHexString = function(t, r) {
                return void 0 === r && (r = 256), (0, u.assertIsHexString)(t), (0, e.keccak)((0, s.toBuffer)(t), r)
            };
            e.keccakFromArray = function(t, r) {
                return void 0 === r && (r = 256), (0, u.assertIsArray)(t), (0, e.keccak)((0, s.toBuffer)(t), r)
            };
            var a = function(t) {
                return t = (0, s.toBuffer)(t), i("sha256").update(t).digest()
            };
            e.sha256 = function(t) {
                return (0, u.assertIsBuffer)(t), a(t)
            };
            e.sha256FromString = function(t) {
                return (0, u.assertIsString)(t), a(t)
            };
            e.sha256FromArray = function(t) {
                return (0, u.assertIsArray)(t), a(t)
            };
            var h = function(t, e) {
                t = (0, s.toBuffer)(t);
                var r = i("rmd160").update(t).digest();
                return !0 === e ? (0, s.setLengthLeft)(r, 32) : r
            };
            e.ripemd160 = function(t, e) {
                return (0, u.assertIsBuffer)(t), h(t, e)
            };
            e.ripemd160FromString = function(t, e) {
                return (0, u.assertIsString)(t), h(t, e)
            };
            e.ripemd160FromArray = function(t, e) {
                return (0, u.assertIsArray)(t), h(t, e)
            };
            e.rlphash = function(t) {
                return (0, e.keccak)(o.rlp.encode(t))
            }
        },
        1069: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.toType = e.TypeOutput = e.bnToRlp = e.bnToUnpaddedBuffer = e.bnToHex = void 0;
            var n, i = r(266),
                o = r(412),
                s = r(344);

            function u(t) {
                return (0, s.unpadBuffer)(t.toArrayLike(Buffer))
            }
            e.bnToHex = function(t) {
                    return "0x".concat(t.toString(16))
                }, e.bnToUnpaddedBuffer = u, e.bnToRlp = function(t) {
                    return u(t)
                },
                function(t) {
                    t[t.Number = 0] = "Number", t[t.BN = 1] = "BN", t[t.Buffer = 2] = "Buffer", t[t.PrefixedHexString = 3] = "PrefixedHexString"
                }(n = e.TypeOutput || (e.TypeOutput = {})), e.toType = function(t, e) {
                    if (null === t) return null;
                    if (void 0 !== t) {
                        if ("string" == typeof t && !(0, o.isHexString)(t)) throw new Error("A string must be provided with a 0x-prefix, given: ".concat(t));
                        if ("number" == typeof t && !Number.isSafeInteger(t)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
                        var r = (0, s.toBuffer)(t);
                        if (e === n.Buffer) return r;
                        if (e === n.BN) return new i.BN(r);
                        if (e === n.Number) {
                            var u = new i.BN(r),
                                a = new i.BN(Number.MAX_SAFE_INTEGER.toString());
                            if (u.gt(a)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)");
                            return u.toNumber()
                        }
                        return "0x".concat(r.toString("hex"))
                    }
                }
        },
        1385: function(t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, r, n) {
                    return new(r || (r = Promise))((function(i, o) {
                        function s(t) {
                            try {
                                a(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(t) {
                            try {
                                a(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(s, u)
                        }
                        a((n = n.apply(t, e || [])).next())
                    }))
                },
                i = this && this.__generator || function(t, e) {
                    var r, n, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
                            return function(o) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                    switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1], i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, s)
                                } catch (t) {
                                    o = [6, t], n = 0
                                } finally {
                                    r = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, u])
                        }
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(1386),
                s = r(3457);
            e.createPrivateKey = function() {
                    return n(this, void 0, void 0, (function() {
                        var t;
                        return i(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, s.getRandomBytes(32)];
                                case 1:
                                    return t = e.sent(), o.privateKeyVerify(t) ? [2, t] : [3, 0];
                                case 2:
                                    return [2]
                            }
                        }))
                    }))
                }, e.createPrivateKeySync = function() {
                    for (;;) {
                        var t = s.getRandomBytesSync(32);
                        if (o.privateKeyVerify(t)) return t
                    }
                },
                function(t) {
                    for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
                }(r(1386))
        },
        1386: function(t, e, r) {
            t.exports = r(3455)(r(3456))
        },
        1843: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.KECCAK256_RLP = e.KECCAK256_RLP_S = e.KECCAK256_RLP_ARRAY = e.KECCAK256_RLP_ARRAY_S = e.KECCAK256_NULL = e.KECCAK256_NULL_S = e.TWO_POW256 = e.MAX_INTEGER = e.MAX_UINT64 = void 0;
            var n = r(12),
                i = r(266);
            e.MAX_UINT64 = new i.BN("ffffffffffffffff", 16), e.MAX_INTEGER = new i.BN("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), e.TWO_POW256 = new i.BN("10000000000000000000000000000000000000000000000000000000000000000", 16), e.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", e.KECCAK256_NULL = n.Buffer.from(e.KECCAK256_NULL_S, "hex"), e.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", e.KECCAK256_RLP_ARRAY = n.Buffer.from(e.KECCAK256_RLP_ARRAY_S, "hex"), e.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", e.KECCAK256_RLP = n.Buffer.from(e.KECCAK256_RLP_S, "hex")
        },
        1844: function(t, e, r) {
            "use strict";
            var n = this && this.__read || function(t, e) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!r) return t;
                    var n, i, o = r.call(t),
                        s = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value)
                    } catch (t) {
                        i = {
                            error: t
                        }
                    } finally {
                        try {
                            n && !n.done && (r = o.return) && r.call(o)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return s
                },
                i = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isZeroAddress = e.zeroAddress = e.importPublic = e.privateToAddress = e.privateToPublic = e.publicToAddress = e.pubToAddress = e.isValidPublic = e.isValidPrivate = e.generateAddress2 = e.generateAddress = e.isValidChecksumAddress = e.toChecksumAddress = e.isValidAddress = e.Account = void 0;
            var o = i(r(72)),
                s = r(266),
                u = r(1385),
                a = r(412),
                h = r(1843),
                f = r(344),
                l = r(1068),
                c = r(622),
                d = r(1069),
                p = function() {
                    function t(t, e, r, n) {
                        void 0 === t && (t = new s.BN(0)), void 0 === e && (e = new s.BN(0)), void 0 === r && (r = h.KECCAK256_RLP), void 0 === n && (n = h.KECCAK256_NULL), this.nonce = t, this.balance = e, this.stateRoot = r, this.codeHash = n, this._validate()
                    }
                    return t.fromAccountData = function(e) {
                        var r = e.nonce,
                            n = e.balance,
                            i = e.stateRoot,
                            o = e.codeHash;
                        return new t(r ? new s.BN((0, f.toBuffer)(r)) : void 0, n ? new s.BN((0, f.toBuffer)(n)) : void 0, i ? (0, f.toBuffer)(i) : void 0, o ? (0, f.toBuffer)(o) : void 0)
                    }, t.fromRlpSerializedAccount = function(t) {
                        var e = s.rlp.decode(t);
                        if (!Array.isArray(e)) throw new Error("Invalid serialized account input. Must be array");
                        return this.fromValuesArray(e)
                    }, t.fromValuesArray = function(e) {
                        var r = n(e, 4),
                            i = r[0],
                            o = r[1],
                            u = r[2],
                            a = r[3];
                        return new t(new s.BN(i), new s.BN(o), u, a)
                    }, t.prototype._validate = function() {
                        if (this.nonce.lt(new s.BN(0))) throw new Error("nonce must be greater than zero");
                        if (this.balance.lt(new s.BN(0))) throw new Error("balance must be greater than zero");
                        if (32 !== this.stateRoot.length) throw new Error("stateRoot must have a length of 32");
                        if (32 !== this.codeHash.length) throw new Error("codeHash must have a length of 32")
                    }, t.prototype.raw = function() {
                        return [(0, d.bnToUnpaddedBuffer)(this.nonce), (0, d.bnToUnpaddedBuffer)(this.balance), this.stateRoot, this.codeHash]
                    }, t.prototype.serialize = function() {
                        return s.rlp.encode(this.raw())
                    }, t.prototype.isContract = function() {
                        return !this.codeHash.equals(h.KECCAK256_NULL)
                    }, t.prototype.isEmpty = function() {
                        return this.balance.isZero() && this.nonce.isZero() && this.codeHash.equals(h.KECCAK256_NULL)
                    }, t
                }();
            e.Account = p;
            e.isValidAddress = function(t) {
                try {
                    (0, c.assertIsString)(t)
                } catch (t) {
                    return !1
                }
                return /^0x[0-9a-fA-F]{40}$/.test(t)
            };
            e.toChecksumAddress = function(t, e) {
                (0, c.assertIsHexString)(t);
                var r = (0, a.stripHexPrefix)(t).toLowerCase(),
                    n = "";
                e && (n = (0, d.toType)(e, d.TypeOutput.BN).toString() + "0x");
                for (var i = (0, l.keccakFromString)(n + r).toString("hex"), o = "0x", s = 0; s < r.length; s++) parseInt(i[s], 16) >= 8 ? o += r[s].toUpperCase() : o += r[s];
                return o
            };
            e.isValidChecksumAddress = function(t, r) {
                return (0, e.isValidAddress)(t) && (0, e.toChecksumAddress)(t, r) === t
            };
            e.generateAddress = function(t, e) {
                (0, c.assertIsBuffer)(t), (0, c.assertIsBuffer)(e);
                var r = new s.BN(e);
                return r.isZero() ? (0, l.rlphash)([t, null]).slice(-20) : (0, l.rlphash)([t, Buffer.from(r.toArray())]).slice(-20)
            };
            e.generateAddress2 = function(t, e, r) {
                return (0, c.assertIsBuffer)(t), (0, c.assertIsBuffer)(e), (0, c.assertIsBuffer)(r), (0, o.default)(20 === t.length), (0, o.default)(32 === e.length), (0, l.keccak256)(Buffer.concat([Buffer.from("ff", "hex"), t, e, (0, l.keccak256)(r)])).slice(-20)
            };
            e.isValidPrivate = function(t) {
                return (0, u.privateKeyVerify)(t)
            };
            e.isValidPublic = function(t, e) {
                return void 0 === e && (e = !1), (0, c.assertIsBuffer)(t), 64 === t.length ? (0, u.publicKeyVerify)(Buffer.concat([Buffer.from([4]), t])) : !!e && (0, u.publicKeyVerify)(t)
            };
            e.pubToAddress = function(t, e) {
                return void 0 === e && (e = !1), (0, c.assertIsBuffer)(t), e && 64 !== t.length && (t = Buffer.from((0, u.publicKeyConvert)(t, !1).slice(1))), (0, o.default)(64 === t.length), (0, l.keccak)(t).slice(-20)
            }, e.publicToAddress = e.pubToAddress;
            e.privateToPublic = function(t) {
                return (0, c.assertIsBuffer)(t), Buffer.from((0, u.publicKeyCreate)(t, !1)).slice(1)
            };
            e.privateToAddress = function(t) {
                return (0, e.publicToAddress)((0, e.privateToPublic)(t))
            };
            e.importPublic = function(t) {
                return (0, c.assertIsBuffer)(t), 64 !== t.length && (t = Buffer.from((0, u.publicKeyConvert)(t, !1).slice(1))), t
            };
            e.zeroAddress = function() {
                var t = (0, f.zeros)(20);
                return (0, f.bufferToHex)(t)
            };
            e.isZeroAddress = function(t) {
                try {
                    (0, c.assertIsString)(t)
                } catch (t) {
                    return !1
                }
                return (0, e.zeroAddress)() === t
            }
        },
        1852: function(t, e, r) {
            var n = r(3489).keccak_256,
                i = r(3490);

            function o(t) {
                return t ? i.toUnicode(t, {
                    useStd3ASCII: !0,
                    transitional: !1
                }) : t
            }
            e.hash = function(t) {
                for (var e = "", r = 0; r < 32; r++) e += "00";
                if (name = o(t), name) {
                    var i = name.split(".");
                    for (r = i.length - 1; r >= 0; r--) {
                        var s = n(i[r]);
                        e = n(new Buffer(e + s, "hex"))
                    }
                }
                return "0x" + e
            }, e.normalize = o
        },
        1857: function(t, e, r) {
            r(3529);
            const n = (t, e) => parseInt(t.slice(2 * e + 2, 2 * e + 4), 16),
                i = t => (t.length - 2) / 2,
                o = (t, e) => e.length === 2 * t + 2 ? e : o(t, "0x0" + e.slice(2)),
                s = (t, e) => e.length === 2 * t + 2 ? e : s(t, e + "0"),
                u = t => {
                    let e = [];
                    for (let r = 2, n = t.length; r < n; r += 2) e.push(parseInt(t.slice(r, r + 2), 16));
                    return e
                },
                a = t => {
                    let e = "0x";
                    for (let r = 0, n = t.length; r < n; ++r) {
                        let n = t[r];
                        e += (n < 16 ? "0" : "") + n.toString(16)
                    }
                    return e
                };
            t.exports = {
                random: t => {
                    let e;
                    e = "undefined" != typeof window && window.crypto && window.crypto.getRandomValues ? window.crypto.getRandomValues(new Uint8Array(t)) : r(24).randomBytes(t);
                    let n = "0x";
                    for (let r = 0; r < t; ++r) n += ("00" + e[r].toString(16)).slice(-2);
                    return n
                },
                length: i,
                concat: (t, e) => t.concat(e.slice(2)),
                flatten: t => "0x" + t.reduce((t, e) => t + e.slice(2), ""),
                slice: (t, e, r) => "0x" + r.slice(2 * t + 2, 2 * e + 2),
                reverse: t => {
                    let e = "0x";
                    for (let r = 0, n = i(t); r < n; ++r) e += t.slice(2 * (n - r), 2 * (n - r + 1));
                    return e
                },
                pad: o,
                padRight: s,
                fromAscii: t => {
                    let e = "0x";
                    for (let r = 0; r < t.length; ++r) e += ("00" + t.charCodeAt(r).toString(16)).slice(-2);
                    return e
                },
                toAscii: t => {
                    let e = "";
                    for (let r = 2; r < t.length; r += 2) e += String.fromCharCode(parseInt(t.slice(r, r + 2), 16));
                    return e
                },
                fromString: t => {
                    const e = t => {
                        const e = t.toString(16);
                        return e.length < 2 ? "0" + e : e
                    };
                    let r = "0x";
                    for (let n = 0; n != t.length; n++) {
                        let i = t.charCodeAt(n);
                        if (i < 128) r += e(i);
                        else {
                            if (i < 2048) r += e(i >> 6 | 192);
                            else {
                                if (i > 55295 && i < 56320) {
                                    if (++n == t.length) return null;
                                    let o = t.charCodeAt(n);
                                    if (o < 56320 || o > 57343) return null;
                                    i = 65536 + ((1023 & i) << 10) + (1023 & o), r += e(i >> 18 | 240), r += e(i >> 12 & 63 | 128)
                                } else r += e(i >> 12 | 224);
                                r += e(i >> 6 & 63 | 128)
                            }
                            r += e(63 & i | 128)
                        }
                    }
                    return r
                },
                toString: t => {
                    let e = "",
                        r = 0,
                        o = i(t);
                    for (; r < o;) {
                        let i = n(t, r++);
                        if (i > 127) {
                            if (i > 191 && i < 224) {
                                if (r >= o) return null;
                                i = (31 & i) << 6 | 63 & n(t, r)
                            } else if (i > 223 && i < 240) {
                                if (r + 1 >= o) return null;
                                i = (15 & i) << 12 | (63 & n(t, r)) << 6 | 63 & n(t, ++r)
                            } else {
                                if (!(i > 239 && i < 248)) return null;
                                if (r + 2 >= o) return null;
                                i = (7 & i) << 18 | (63 & n(t, r)) << 12 | (63 & n(t, ++r)) << 6 | 63 & n(t, ++r)
                            }++r
                        }
                        if (i <= 65535) e += String.fromCharCode(i);
                        else {
                            if (!(i <= 1114111)) return null;
                            i -= 65536, e += String.fromCharCode(i >> 10 | 55296), e += String.fromCharCode(1023 & i | 56320)
                        }
                    }
                    return e
                },
                fromNumber: t => {
                    let e = t.toString(16);
                    return e.length % 2 == 0 ? "0x" + e : "0x0" + e
                },
                toNumber: t => parseInt(t.slice(2), 16),
                fromNat: t => "0x0" === t ? "0x" : t.length % 2 == 0 ? t : "0x0" + t.slice(2),
                toNat: t => "0" === t[2] ? "0x" + t.slice(3) : t,
                fromArray: a,
                toArray: u,
                fromUint8Array: t => a([].slice.call(t, 0)),
                toUint8Array: t => new Uint8Array(u(t))
            }
        },
        2336: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.createHashFunction = function(t) {
                return function(e) {
                    var r = t();
                    return r.update(e), Buffer.from(r.digest())
                }
            }
        },
        2347: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(2336),
                i = r(554);
            e.keccak224 = n.createHashFunction((function() {
                return i("keccak224")
            })), e.keccak256 = n.createHashFunction((function() {
                return i("keccak256")
            })), e.keccak384 = n.createHashFunction((function() {
                return i("keccak384")
            })), e.keccak512 = n.createHashFunction((function() {
                return i("keccak512")
            }))
        },
        241: function(t, e, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
                    void 0 === n && (n = r);
                    var i = Object.getOwnPropertyDescriptor(e, r);
                    i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    }), Object.defineProperty(t, n, i)
                } : function(t, e, r, n) {
                    void 0 === n && (n = r), t[n] = e[r]
                }),
                i = this && this.__exportStar || function(t, e) {
                    for (var r in t) "default" === r || Object.prototype.hasOwnProperty.call(e, r) || n(e, t, r)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isHexString = e.getKeys = e.fromAscii = e.fromUtf8 = e.toAscii = e.arrayContainsArray = e.getBinarySize = e.padToEven = e.stripHexPrefix = e.isHexPrefixed = void 0, i(r(1843), e), i(r(1844), e), i(r(3458), e), i(r(1068), e), i(r(3459), e), i(r(344), e), i(r(3460), e), i(r(266), e), i(r(1069), e);
            var o = r(412);
            Object.defineProperty(e, "isHexPrefixed", {
                enumerable: !0,
                get: function() {
                    return o.isHexPrefixed
                }
            }), Object.defineProperty(e, "stripHexPrefix", {
                enumerable: !0,
                get: function() {
                    return o.stripHexPrefix
                }
            }), Object.defineProperty(e, "padToEven", {
                enumerable: !0,
                get: function() {
                    return o.padToEven
                }
            }), Object.defineProperty(e, "getBinarySize", {
                enumerable: !0,
                get: function() {
                    return o.getBinarySize
                }
            }), Object.defineProperty(e, "arrayContainsArray", {
                enumerable: !0,
                get: function() {
                    return o.arrayContainsArray
                }
            }), Object.defineProperty(e, "toAscii", {
                enumerable: !0,
                get: function() {
                    return o.toAscii
                }
            }), Object.defineProperty(e, "fromUtf8", {
                enumerable: !0,
                get: function() {
                    return o.fromUtf8
                }
            }), Object.defineProperty(e, "fromAscii", {
                enumerable: !0,
                get: function() {
                    return o.fromAscii
                }
            }), Object.defineProperty(e, "getKeys", {
                enumerable: !0,
                get: function() {
                    return o.getKeys
                }
            }), Object.defineProperty(e, "isHexString", {
                enumerable: !0,
                get: function() {
                    return o.isHexString
                }
            })
        },
        266: function(t, e, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
                    void 0 === n && (n = r);
                    var i = Object.getOwnPropertyDescriptor(e, r);
                    i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    }), Object.defineProperty(t, n, i)
                } : function(t, e, r, n) {
                    void 0 === n && (n = r), t[n] = e[r]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                o = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && n(e, t, r);
                    return i(e, t), e
                },
                s = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.rlp = e.BN = void 0;
            var u = s(r(3454));
            e.BN = u.default;
            var a = o(r(546));
            e.rlp = a
        },
        2749: function(t, e, r) {
            var n;
            n = function() {
                "use strict";

                function t(t) {
                    return "function" == typeof t
                }
                var e = Array.isArray ? Array.isArray : function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    r = 0,
                    n = void 0,
                    i = void 0,
                    o = function(t, e) {
                        c[r] = t, c[r + 1] = e, 2 === (r += 2) && (i ? i(d) : y())
                    },
                    s = "undefined" != typeof window ? window : void 0,
                    u = s || {},
                    a = u.MutationObserver || u.WebKitMutationObserver,
                    h = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                    f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function l() {
                    var t = setTimeout;
                    return function() {
                        return t(d, 1)
                    }
                }
                var c = new Array(1e3);

                function d() {
                    for (var t = 0; t < r; t += 2)(0, c[t])(c[t + 1]), c[t] = void 0, c[t + 1] = void 0;
                    r = 0
                }
                var p, m, g, v, y = void 0;

                function w(t, e) {
                    var r = this,
                        n = new this.constructor(_);
                    void 0 === n[M] && I(n);
                    var i = r._state;
                    if (i) {
                        var s = arguments[i - 1];
                        o((function() {
                            return P(i, n, s, r._result)
                        }))
                    } else E(r, n, t, e);
                    return n
                }

                function b(t) {
                    if (t && "object" == typeof t && t.constructor === this) return t;
                    var e = new this(_);
                    return x(e, t), e
                }
                h ? y = function() {
                    return process.nextTick(d)
                } : a ? (m = 0, g = new a(d), v = document.createTextNode(""), g.observe(v, {
                    characterData: !0
                }), y = function() {
                    v.data = m = ++m % 2
                }) : f ? ((p = new MessageChannel).port1.onmessage = d, y = function() {
                    return p.port2.postMessage(0)
                }) : y = void 0 === s ? function() {
                    try {
                        var t = Function("return this")().require("vertx");
                        return void 0 !== (n = t.runOnLoop || t.runOnContext) ? function() {
                            n(d)
                        } : l()
                    } catch (t) {
                        return l()
                    }
                }() : l();
                var M = Math.random().toString(36).substring(2);

                function _() {}

                function A(e, r, n) {
                    r.constructor === e.constructor && n === w && r.constructor.resolve === b ? function(t, e) {
                        1 === e._state ? B(t, e._result) : 2 === e._state ? S(t, e._result) : E(e, void 0, (function(e) {
                            return x(t, e)
                        }), (function(e) {
                            return S(t, e)
                        }))
                    }(e, r) : void 0 === n ? B(e, r) : t(n) ? function(t, e, r) {
                        o((function(t) {
                            var n = !1,
                                i = function(t, e, r, n) {
                                    try {
                                        t.call(e, r, n)
                                    } catch (t) {
                                        return t
                                    }
                                }(r, e, (function(r) {
                                    n || (n = !0, e !== r ? x(t, r) : B(t, r))
                                }), (function(e) {
                                    n || (n = !0, S(t, e))
                                }), t._label);
                            !n && i && (n = !0, S(t, i))
                        }), t)
                    }(e, r, n) : B(e, r)
                }

                function x(t, e) {
                    if (t === e) S(t, new TypeError("You cannot resolve a promise with itself"));
                    else if (i = typeof(n = e), null === n || "object" !== i && "function" !== i) B(t, e);
                    else {
                        var r = void 0;
                        try {
                            r = e.then
                        } catch (e) {
                            return void S(t, e)
                        }
                        A(t, e, r)
                    }
                    var n, i
                }

                function k(t) {
                    t._onerror && t._onerror(t._result), T(t)
                }

                function B(t, e) {
                    void 0 === t._state && (t._result = e, t._state = 1, 0 !== t._subscribers.length && o(T, t))
                }

                function S(t, e) {
                    void 0 === t._state && (t._state = 2, t._result = e, o(k, t))
                }

                function E(t, e, r, n) {
                    var i = t._subscribers,
                        s = i.length;
                    t._onerror = null, i[s] = e, i[s + 1] = r, i[s + 2] = n, 0 === s && t._state && o(T, t)
                }

                function T(t) {
                    var e = t._subscribers,
                        r = t._state;
                    if (0 !== e.length) {
                        for (var n = void 0, i = void 0, o = t._result, s = 0; s < e.length; s += 3) n = e[s], i = e[s + r], n ? P(r, n, i, o) : i(o);
                        t._subscribers.length = 0
                    }
                }

                function P(e, r, n, i) {
                    var o = t(n),
                        s = void 0,
                        u = void 0,
                        a = !0;
                    if (o) {
                        try {
                            s = n(i)
                        } catch (t) {
                            a = !1, u = t
                        }
                        if (r === s) return void S(r, new TypeError("A promises callback cannot return that same promise."))
                    } else s = i;
                    void 0 !== r._state || (o && a ? x(r, s) : !1 === a ? S(r, u) : 1 === e ? B(r, s) : 2 === e && S(r, s))
                }
                var N = 0;

                function I(t) {
                    t[M] = N++, t._state = void 0, t._result = void 0, t._subscribers = []
                }
                var C = function() {
                        function t(t, r) {
                            this._instanceConstructor = t, this.promise = new t(_), this.promise[M] || I(this.promise), e(r) ? (this.length = r.length, this._remaining = r.length, this._result = new Array(this.length), 0 === this.length ? B(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(r), 0 === this._remaining && B(this.promise, this._result))) : S(this.promise, new Error("Array Methods must be provided an Array"))
                        }
                        return t.prototype._enumerate = function(t) {
                            for (var e = 0; void 0 === this._state && e < t.length; e++) this._eachEntry(t[e], e)
                        }, t.prototype._eachEntry = function(t, e) {
                            var r = this._instanceConstructor,
                                n = r.resolve;
                            if (n === b) {
                                var i = void 0,
                                    o = void 0,
                                    s = !1;
                                try {
                                    i = t.then
                                } catch (t) {
                                    s = !0, o = t
                                }
                                if (i === w && void 0 !== t._state) this._settledAt(t._state, e, t._result);
                                else if ("function" != typeof i) this._remaining--, this._result[e] = t;
                                else if (r === K) {
                                    var u = new r(_);
                                    s ? S(u, o) : A(u, t, i), this._willSettleAt(u, e)
                                } else this._willSettleAt(new r((function(e) {
                                    return e(t)
                                })), e)
                            } else this._willSettleAt(n(t), e)
                        }, t.prototype._settledAt = function(t, e, r) {
                            var n = this.promise;
                            void 0 === n._state && (this._remaining--, 2 === t ? S(n, r) : this._result[e] = r), 0 === this._remaining && B(n, this._result)
                        }, t.prototype._willSettleAt = function(t, e) {
                            var r = this;
                            E(t, void 0, (function(t) {
                                return r._settledAt(1, e, t)
                            }), (function(t) {
                                return r._settledAt(2, e, t)
                            }))
                        }, t
                    }(),
                    K = function() {
                        function e(t) {
                            this[M] = N++, this._result = this._state = void 0, this._subscribers = [], _ !== t && ("function" != typeof t && function() {
                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }(), this instanceof e ? function(t, e) {
                                try {
                                    e((function(e) {
                                        x(t, e)
                                    }), (function(e) {
                                        S(t, e)
                                    }))
                                } catch (e) {
                                    S(t, e)
                                }
                            }(this, t) : function() {
                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }())
                        }
                        return e.prototype.catch = function(t) {
                            return this.then(null, t)
                        }, e.prototype.finally = function(e) {
                            var r = this.constructor;
                            return t(e) ? this.then((function(t) {
                                return r.resolve(e()).then((function() {
                                    return t
                                }))
                            }), (function(t) {
                                return r.resolve(e()).then((function() {
                                    throw t
                                }))
                            })) : this.then(e, e)
                        }, e
                    }();
                return K.prototype.then = w, K.all = function(t) {
                    return new C(this, t).promise
                }, K.race = function(t) {
                    var r = this;
                    return e(t) ? new r((function(e, n) {
                        for (var i = t.length, o = 0; o < i; o++) r.resolve(t[o]).then(e, n)
                    })) : new r((function(t, e) {
                        return e(new TypeError("You must pass an array to race."))
                    }))
                }, K.resolve = b, K.reject = function(t) {
                    var e = new this(_);
                    return S(e, t), e
                }, K._setScheduler = function(t) {
                    i = t
                }, K._setAsap = function(t) {
                    o = t
                }, K._asap = o, K.polyfill = function() {
                    var t = void 0;
                    if ("undefined" != typeof global) t = global;
                    else if ("undefined" != typeof self) t = self;
                    else try {
                        t = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var e = t.Promise;
                    if (e) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(e.resolve())
                        } catch (t) {}
                        if ("[object Promise]" === r && !e.cast) return
                    }
                    t.Promise = K
                }, K.Promise = K, K
            }, t.exports = n()
        },
        344: function(t, e, r) {
            "use strict";
            var n = this && this.__values || function(t) {
                    var e = "function" == typeof Symbol && Symbol.iterator,
                        r = e && t[e],
                        n = 0;
                    if (r) return r.call(t);
                    if (t && "number" == typeof t.length) return {
                        next: function() {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    };
                    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                },
                i = this && this.__read || function(t, e) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!r) return t;
                    var n, i, o = r.call(t),
                        s = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value)
                    } catch (t) {
                        i = {
                            error: t
                        }
                    } finally {
                        try {
                            n && !n.done && (r = o.return) && r.call(o)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return s
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.bufArrToArr = e.arrToBufArr = e.validateNoLeadingZeroes = e.baToJSON = e.toUtf8 = e.addHexPrefix = e.toUnsigned = e.fromSigned = e.bufferToHex = e.bufferToInt = e.toBuffer = e.unpadHexString = e.unpadArray = e.unpadBuffer = e.setLengthRight = e.setLengthLeft = e.zeros = e.intToBuffer = e.intToHex = void 0;
            var o = r(266),
                s = r(412),
                u = r(622);
            e.intToHex = function(t) {
                if (!Number.isSafeInteger(t) || t < 0) throw new Error("Received an invalid integer type: ".concat(t));
                return "0x".concat(t.toString(16))
            };
            e.intToBuffer = function(t) {
                var r = (0, e.intToHex)(t);
                return Buffer.from((0, s.padToEven)(r.slice(2)), "hex")
            };
            e.zeros = function(t) {
                return Buffer.allocUnsafe(t).fill(0)
            };
            var a = function(t, r, n) {
                var i = (0, e.zeros)(r);
                return n ? t.length < r ? (t.copy(i), i) : t.slice(0, r) : t.length < r ? (t.copy(i, r - t.length), i) : t.slice(-r)
            };
            e.setLengthLeft = function(t, e) {
                return (0, u.assertIsBuffer)(t), a(t, e, !1)
            };
            e.setLengthRight = function(t, e) {
                return (0, u.assertIsBuffer)(t), a(t, e, !0)
            };
            var h = function(t) {
                for (var e = t[0]; t.length > 0 && "0" === e.toString();) e = (t = t.slice(1))[0];
                return t
            };
            e.unpadBuffer = function(t) {
                return (0, u.assertIsBuffer)(t), h(t)
            };
            e.unpadArray = function(t) {
                return (0, u.assertIsArray)(t), h(t)
            };
            e.unpadHexString = function(t) {
                return (0, u.assertIsHexString)(t), t = (0, s.stripHexPrefix)(t), h(t)
            };
            e.toBuffer = function(t) {
                if (null == t) return Buffer.allocUnsafe(0);
                if (Buffer.isBuffer(t)) return Buffer.from(t);
                if (Array.isArray(t) || t instanceof Uint8Array) return Buffer.from(t);
                if ("string" == typeof t) {
                    if (!(0, s.isHexString)(t)) throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ".concat(t));
                    return Buffer.from((0, s.padToEven)((0, s.stripHexPrefix)(t)), "hex")
                }
                if ("number" == typeof t) return (0, e.intToBuffer)(t);
                if (o.BN.isBN(t)) {
                    if (t.isNeg()) throw new Error("Cannot convert negative BN to buffer. Given: ".concat(t));
                    return t.toArrayLike(Buffer)
                }
                if (t.toArray) return Buffer.from(t.toArray());
                if (t.toBuffer) return Buffer.from(t.toBuffer());
                throw new Error("invalid type")
            };
            e.bufferToInt = function(t) {
                return new o.BN((0, e.toBuffer)(t)).toNumber()
            };
            e.bufferToHex = function(t) {
                return "0x" + (t = (0, e.toBuffer)(t)).toString("hex")
            };
            e.fromSigned = function(t) {
                return new o.BN(t).fromTwos(256)
            };
            e.toUnsigned = function(t) {
                return Buffer.from(t.toTwos(256).toArray())
            };
            e.addHexPrefix = function(t) {
                return "string" != typeof t || (0, s.isHexPrefixed)(t) ? t : "0x" + t
            };
            e.toUtf8 = function(t) {
                if ((t = (0, s.stripHexPrefix)(t)).length % 2 != 0) throw new Error("Invalid non-even hex string input for toUtf8() provided");
                return Buffer.from(t.replace(/^(00)+|(00)+$/g, ""), "hex").toString("utf8")
            };
            e.baToJSON = function(t) {
                if (Buffer.isBuffer(t)) return "0x".concat(t.toString("hex"));
                if (t instanceof Array) {
                    for (var r = [], n = 0; n < t.length; n++) r.push((0, e.baToJSON)(t[n]));
                    return r
                }
            };
            e.validateNoLeadingZeroes = function(t) {
                var e, r;
                try {
                    for (var o = n(Object.entries(t)), s = o.next(); !s.done; s = o.next()) {
                        var u = i(s.value, 2),
                            a = u[0],
                            h = u[1];
                        if (void 0 !== h && h.length > 0 && 0 === h[0]) throw new Error("".concat(a, " cannot have leading zeroes, received: ").concat(h.toString("hex")))
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        s && !s.done && (r = o.return) && r.call(o)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, e.arrToBufArr = function t(e) {
                return Array.isArray(e) ? e.map((function(e) {
                    return t(e)
                })) : Buffer.from(e)
            }, e.bufArrToArr = function t(e) {
                return Array.isArray(e) ? e.map((function(e) {
                    return t(e)
                })) : Uint8Array.from(null != e ? e : [])
            }
        },
        3454: function(t, e, r) {
            (function(t) {
                ! function(t, e) {
                    "use strict";

                    function n(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function i(t, e) {
                        t.super_ = e;
                        var r = function() {};
                        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                    }

                    function o(t, e, r) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                    }
                    var s;
                    "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(12).Buffer
                    } catch (t) {}

                    function u(t, e) {
                        var r = t.charCodeAt(e);
                        return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + t)
                    }

                    function a(t, e, r) {
                        var n = u(t, r);
                        return r - 1 >= e && (n |= u(t, r - 1) << 4), n
                    }

                    function h(t, e, r, i) {
                        for (var o = 0, s = 0, u = Math.min(t.length, r), a = e; a < u; a++) {
                            var h = t.charCodeAt(a) - 48;
                            o *= i, s = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h, n(h >= 0 && s < i, "Invalid character"), o += s
                        }
                        return o
                    }

                    function f(t, e) {
                        t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                    }
                    if (o.isBN = function(t) {
                            return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                        }, o.max = function(t, e) {
                            return t.cmp(e) > 0 ? t : e
                        }, o.min = function(t, e) {
                            return t.cmp(e) < 0 ? t : e
                        }, o.prototype._init = function(t, e, r) {
                            if ("number" == typeof t) return this._initNumber(t, e, r);
                            if ("object" == typeof t) return this._initArray(t, e, r);
                            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                            var i = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)))
                        }, o.prototype._initNumber = function(t, e, r) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                        }, o.prototype._initArray = function(t, e, r) {
                            if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var o, s, u = 0;
                            if ("be" === r)
                                for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << u & 67108863, this.words[o + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);
                            else if ("le" === r)
                                for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << u & 67108863, this.words[o + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);
                            return this._strip()
                        }, o.prototype._parseHex = function(t, e, r) {
                            this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                            for (var n = 0; n < this.length; n++) this.words[n] = 0;
                            var i, o = 0,
                                s = 0;
                            if ("be" === r)
                                for (n = t.length - 1; n >= e; n -= 2) i = a(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                            else
                                for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) i = a(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                            this._strip()
                        }, o.prototype._parseBase = function(t, e, r) {
                            this.words = [0], this.length = 1;
                            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                            n--, i = i / e | 0;
                            for (var o = t.length - r, s = o % n, u = Math.min(o, o - s) + r, a = 0, f = r; f < u; f += n) a = h(t, f, f + n, e), this.imuln(i), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
                            if (0 !== s) {
                                var l = 1;
                                for (a = h(t, f, t.length, e), f = 0; f < s; f++) l *= e;
                                this.imuln(l), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a)
                            }
                            this._strip()
                        }, o.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, o.prototype._move = function(t) {
                            f(t, this)
                        }, o.prototype.clone = function() {
                            var t = new o(null);
                            return this.copy(t), t
                        }, o.prototype._expand = function(t) {
                            for (; this.length < t;) this.words[this.length++] = 0;
                            return this
                        }, o.prototype._strip = function() {
                            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                            return this._normSign()
                        }, o.prototype._normSign = function() {
                            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                        }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l
                    } catch (t) {
                        o.prototype.inspect = l
                    } else o.prototype.inspect = l;

                    function l() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    o.prototype.toString = function(t, e) {
                        var r;
                        if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                            r = "";
                            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                                var u = this.words[s],
                                    a = (16777215 & (u << i | o)).toString(16);
                                o = u >>> 24 - i & 16777215, (i += 2) >= 26 && (i -= 26, s--), r = 0 !== o || s !== this.length - 1 ? c[6 - a.length] + a + r : a + r
                            }
                            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var h = d[t],
                                f = p[t];
                            r = "";
                            var l = this.clone();
                            for (l.negative = 0; !l.isZero();) {
                                var m = l.modrn(f).toString(t);
                                r = (l = l.idivn(f)).isZero() ? m + r : c[h - m.length] + m + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % e != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, s && (o.prototype.toBuffer = function(t, e) {
                        return this.toArrayLike(s, t, e)
                    }), o.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    };

                    function m(t, e, r) {
                        r.negative = e.negative ^ t.negative;
                        var n = t.length + e.length | 0;
                        r.length = n, n = n - 1 | 0;
                        var i = 0 | t.words[0],
                            o = 0 | e.words[0],
                            s = i * o,
                            u = 67108863 & s,
                            a = s / 67108864 | 0;
                        r.words[0] = u;
                        for (var h = 1; h < n; h++) {
                            for (var f = a >>> 26, l = 67108863 & a, c = Math.min(h, e.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
                                var p = h - d | 0;
                                f += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + l) / 67108864 | 0, l = 67108863 & s
                            }
                            r.words[h] = 0 | l, a = 0 | f
                        }
                        return 0 !== a ? r.words[h] = 0 | a : r.length--, r._strip()
                    }
                    o.prototype.toArrayLike = function(t, e, r) {
                        this._strip();
                        var i = this.byteLength(),
                            o = r || Math.max(1, i);
                        n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0");
                        var s = function(t, e) {
                            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                        }(t, o);
                        return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s
                    }, o.prototype._toArrayLikeLE = function(t, e) {
                        for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                            var s = this.words[i] << o | n;
                            t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
                        }
                        if (r < t.length)
                            for (t[r++] = n; r < t.length;) t[r++] = 0
                    }, o.prototype._toArrayLikeBE = function(t, e) {
                        for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                            var s = this.words[i] << o | n;
                            t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
                        }
                        if (r >= 0)
                            for (t[r--] = n; r >= 0;) t[r--] = 0
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var e = t,
                            r = 0;
                        return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var e = t,
                            r = 0;
                        return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            e = this._countBits(t);
                        return 26 * (this.length - 1) + e
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, e = 0; e < this.length; e++) {
                            var r = this._zeroBits(this.words[e]);
                            if (t += r, 26 !== r) break
                        }
                        return t
                    }, o.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, o.prototype.neg = function() {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                        return this._strip()
                    }, o.prototype.ior = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var e;
                        e = this.length > t.length ? t : this;
                        for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                        return this.length = e.length, this._strip()
                    }, o.prototype.iand = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var e, r;
                        this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                        for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                        if (this !== e)
                            for (; n < e.length; n++) this.words[n] = e.words[n];
                        return this.length = e.length, this._strip()
                    }, o.prototype.ixor = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26),
                            r = t % 26;
                        this._expand(e), r > 0 && e--;
                        for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                        return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this._strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, e) {
                        n("number" == typeof t && t >= 0);
                        var r = t / 26 | 0,
                            i = t % 26;
                        return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this._strip()
                    }, o.prototype.iadd = function(t) {
                        var e, r, n;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                        this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                        for (var i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                        for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                        if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (r !== this)
                            for (; o < r.length; o++) this.words[o] = r.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var e;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var e = this.iadd(t);
                            return t.negative = 1, e._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var r, n, i = this.cmp(t);
                        if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        i > 0 ? (r = this, n = t) : (r = t, n = this);
                        for (var o = 0, s = 0; s < n.length; s++) o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                        for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                        if (0 === o && s < r.length && r !== this)
                            for (; s < r.length; s++) this.words[s] = r.words[s];
                        return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this._strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var g = function(t, e, r) {
                        var n, i, o, s = t.words,
                            u = e.words,
                            a = r.words,
                            h = 0,
                            f = 0 | s[0],
                            l = 8191 & f,
                            c = f >>> 13,
                            d = 0 | s[1],
                            p = 8191 & d,
                            m = d >>> 13,
                            g = 0 | s[2],
                            v = 8191 & g,
                            y = g >>> 13,
                            w = 0 | s[3],
                            b = 8191 & w,
                            M = w >>> 13,
                            _ = 0 | s[4],
                            A = 8191 & _,
                            x = _ >>> 13,
                            k = 0 | s[5],
                            B = 8191 & k,
                            S = k >>> 13,
                            E = 0 | s[6],
                            T = 8191 & E,
                            P = E >>> 13,
                            N = 0 | s[7],
                            I = 8191 & N,
                            C = N >>> 13,
                            K = 0 | s[8],
                            O = 8191 & K,
                            L = K >>> 13,
                            R = 0 | s[9],
                            j = 8191 & R,
                            U = R >>> 13,
                            H = 0 | u[0],
                            z = 8191 & H,
                            Z = H >>> 13,
                            F = 0 | u[1],
                            q = 8191 & F,
                            V = F >>> 13,
                            $ = 0 | u[2],
                            D = 8191 & $,
                            J = $ >>> 13,
                            X = 0 | u[3],
                            Y = 8191 & X,
                            G = X >>> 13,
                            W = 0 | u[4],
                            Q = 8191 & W,
                            tt = W >>> 13,
                            et = 0 | u[5],
                            rt = 8191 & et,
                            nt = et >>> 13,
                            it = 0 | u[6],
                            ot = 8191 & it,
                            st = it >>> 13,
                            ut = 0 | u[7],
                            at = 8191 & ut,
                            ht = ut >>> 13,
                            ft = 0 | u[8],
                            lt = 8191 & ft,
                            ct = ft >>> 13,
                            dt = 0 | u[9],
                            pt = 8191 & dt,
                            mt = dt >>> 13;
                        r.negative = t.negative ^ e.negative, r.length = 19;
                        var gt = (h + (n = Math.imul(l, z)) | 0) + ((8191 & (i = (i = Math.imul(l, Z)) + Math.imul(c, z) | 0)) << 13) | 0;
                        h = ((o = Math.imul(c, Z)) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(p, z), i = (i = Math.imul(p, Z)) + Math.imul(m, z) | 0, o = Math.imul(m, Z);
                        var vt = (h + (n = n + Math.imul(l, q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, V) | 0) + Math.imul(c, q) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(c, V) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(v, z), i = (i = Math.imul(v, Z)) + Math.imul(y, z) | 0, o = Math.imul(y, Z), n = n + Math.imul(p, q) | 0, i = (i = i + Math.imul(p, V) | 0) + Math.imul(m, q) | 0, o = o + Math.imul(m, V) | 0;
                        var yt = (h + (n = n + Math.imul(l, D) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, J) | 0) + Math.imul(c, D) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(c, J) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(b, z), i = (i = Math.imul(b, Z)) + Math.imul(M, z) | 0, o = Math.imul(M, Z), n = n + Math.imul(v, q) | 0, i = (i = i + Math.imul(v, V) | 0) + Math.imul(y, q) | 0, o = o + Math.imul(y, V) | 0, n = n + Math.imul(p, D) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(m, D) | 0, o = o + Math.imul(m, J) | 0;
                        var wt = (h + (n = n + Math.imul(l, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, G) | 0) + Math.imul(c, Y) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(c, G) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(A, z), i = (i = Math.imul(A, Z)) + Math.imul(x, z) | 0, o = Math.imul(x, Z), n = n + Math.imul(b, q) | 0, i = (i = i + Math.imul(b, V) | 0) + Math.imul(M, q) | 0, o = o + Math.imul(M, V) | 0, n = n + Math.imul(v, D) | 0, i = (i = i + Math.imul(v, J) | 0) + Math.imul(y, D) | 0, o = o + Math.imul(y, J) | 0, n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, G) | 0) + Math.imul(m, Y) | 0, o = o + Math.imul(m, G) | 0;
                        var bt = (h + (n = n + Math.imul(l, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, tt) | 0) + Math.imul(c, Q) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(c, tt) | 0) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(B, z), i = (i = Math.imul(B, Z)) + Math.imul(S, z) | 0, o = Math.imul(S, Z), n = n + Math.imul(A, q) | 0, i = (i = i + Math.imul(A, V) | 0) + Math.imul(x, q) | 0, o = o + Math.imul(x, V) | 0, n = n + Math.imul(b, D) | 0, i = (i = i + Math.imul(b, J) | 0) + Math.imul(M, D) | 0, o = o + Math.imul(M, J) | 0, n = n + Math.imul(v, Y) | 0, i = (i = i + Math.imul(v, G) | 0) + Math.imul(y, Y) | 0, o = o + Math.imul(y, G) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0;
                        var Mt = (h + (n = n + Math.imul(l, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, nt) | 0) + Math.imul(c, rt) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(c, nt) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(T, z), i = (i = Math.imul(T, Z)) + Math.imul(P, z) | 0, o = Math.imul(P, Z), n = n + Math.imul(B, q) | 0, i = (i = i + Math.imul(B, V) | 0) + Math.imul(S, q) | 0, o = o + Math.imul(S, V) | 0, n = n + Math.imul(A, D) | 0, i = (i = i + Math.imul(A, J) | 0) + Math.imul(x, D) | 0, o = o + Math.imul(x, J) | 0, n = n + Math.imul(b, Y) | 0, i = (i = i + Math.imul(b, G) | 0) + Math.imul(M, Y) | 0, o = o + Math.imul(M, G) | 0, n = n + Math.imul(v, Q) | 0, i = (i = i + Math.imul(v, tt) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, nt) | 0;
                        var _t = (h + (n = n + Math.imul(l, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(c, st) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(I, z), i = (i = Math.imul(I, Z)) + Math.imul(C, z) | 0, o = Math.imul(C, Z), n = n + Math.imul(T, q) | 0, i = (i = i + Math.imul(T, V) | 0) + Math.imul(P, q) | 0, o = o + Math.imul(P, V) | 0, n = n + Math.imul(B, D) | 0, i = (i = i + Math.imul(B, J) | 0) + Math.imul(S, D) | 0, o = o + Math.imul(S, J) | 0, n = n + Math.imul(A, Y) | 0, i = (i = i + Math.imul(A, G) | 0) + Math.imul(x, Y) | 0, o = o + Math.imul(x, G) | 0, n = n + Math.imul(b, Q) | 0, i = (i = i + Math.imul(b, tt) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(v, rt) | 0, i = (i = i + Math.imul(v, nt) | 0) + Math.imul(y, rt) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, st) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0;
                        var At = (h + (n = n + Math.imul(l, at) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ht) | 0) + Math.imul(c, at) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(c, ht) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(O, z), i = (i = Math.imul(O, Z)) + Math.imul(L, z) | 0, o = Math.imul(L, Z), n = n + Math.imul(I, q) | 0, i = (i = i + Math.imul(I, V) | 0) + Math.imul(C, q) | 0, o = o + Math.imul(C, V) | 0, n = n + Math.imul(T, D) | 0, i = (i = i + Math.imul(T, J) | 0) + Math.imul(P, D) | 0, o = o + Math.imul(P, J) | 0, n = n + Math.imul(B, Y) | 0, i = (i = i + Math.imul(B, G) | 0) + Math.imul(S, Y) | 0, o = o + Math.imul(S, G) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, tt) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, tt) | 0, n = n + Math.imul(b, rt) | 0, i = (i = i + Math.imul(b, nt) | 0) + Math.imul(M, rt) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(v, ot) | 0, i = (i = i + Math.imul(v, st) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, n = n + Math.imul(p, at) | 0, i = (i = i + Math.imul(p, ht) | 0) + Math.imul(m, at) | 0, o = o + Math.imul(m, ht) | 0;
                        var xt = (h + (n = n + Math.imul(l, lt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ct) | 0) + Math.imul(c, lt) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(c, ct) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(j, z), i = (i = Math.imul(j, Z)) + Math.imul(U, z) | 0, o = Math.imul(U, Z), n = n + Math.imul(O, q) | 0, i = (i = i + Math.imul(O, V) | 0) + Math.imul(L, q) | 0, o = o + Math.imul(L, V) | 0, n = n + Math.imul(I, D) | 0, i = (i = i + Math.imul(I, J) | 0) + Math.imul(C, D) | 0, o = o + Math.imul(C, J) | 0, n = n + Math.imul(T, Y) | 0, i = (i = i + Math.imul(T, G) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, G) | 0, n = n + Math.imul(B, Q) | 0, i = (i = i + Math.imul(B, tt) | 0) + Math.imul(S, Q) | 0, o = o + Math.imul(S, tt) | 0, n = n + Math.imul(A, rt) | 0, i = (i = i + Math.imul(A, nt) | 0) + Math.imul(x, rt) | 0, o = o + Math.imul(x, nt) | 0, n = n + Math.imul(b, ot) | 0, i = (i = i + Math.imul(b, st) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, st) | 0, n = n + Math.imul(v, at) | 0, i = (i = i + Math.imul(v, ht) | 0) + Math.imul(y, at) | 0, o = o + Math.imul(y, ht) | 0, n = n + Math.imul(p, lt) | 0, i = (i = i + Math.imul(p, ct) | 0) + Math.imul(m, lt) | 0, o = o + Math.imul(m, ct) | 0;
                        var kt = (h + (n = n + Math.imul(l, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, mt) | 0) + Math.imul(c, pt) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(c, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(j, q), i = (i = Math.imul(j, V)) + Math.imul(U, q) | 0, o = Math.imul(U, V), n = n + Math.imul(O, D) | 0, i = (i = i + Math.imul(O, J) | 0) + Math.imul(L, D) | 0, o = o + Math.imul(L, J) | 0, n = n + Math.imul(I, Y) | 0, i = (i = i + Math.imul(I, G) | 0) + Math.imul(C, Y) | 0, o = o + Math.imul(C, G) | 0, n = n + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, tt) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, tt) | 0, n = n + Math.imul(B, rt) | 0, i = (i = i + Math.imul(B, nt) | 0) + Math.imul(S, rt) | 0, o = o + Math.imul(S, nt) | 0, n = n + Math.imul(A, ot) | 0, i = (i = i + Math.imul(A, st) | 0) + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, n = n + Math.imul(b, at) | 0, i = (i = i + Math.imul(b, ht) | 0) + Math.imul(M, at) | 0, o = o + Math.imul(M, ht) | 0, n = n + Math.imul(v, lt) | 0, i = (i = i + Math.imul(v, ct) | 0) + Math.imul(y, lt) | 0, o = o + Math.imul(y, ct) | 0;
                        var Bt = (h + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(j, D), i = (i = Math.imul(j, J)) + Math.imul(U, D) | 0, o = Math.imul(U, J), n = n + Math.imul(O, Y) | 0, i = (i = i + Math.imul(O, G) | 0) + Math.imul(L, Y) | 0, o = o + Math.imul(L, G) | 0, n = n + Math.imul(I, Q) | 0, i = (i = i + Math.imul(I, tt) | 0) + Math.imul(C, Q) | 0, o = o + Math.imul(C, tt) | 0, n = n + Math.imul(T, rt) | 0, i = (i = i + Math.imul(T, nt) | 0) + Math.imul(P, rt) | 0, o = o + Math.imul(P, nt) | 0, n = n + Math.imul(B, ot) | 0, i = (i = i + Math.imul(B, st) | 0) + Math.imul(S, ot) | 0, o = o + Math.imul(S, st) | 0, n = n + Math.imul(A, at) | 0, i = (i = i + Math.imul(A, ht) | 0) + Math.imul(x, at) | 0, o = o + Math.imul(x, ht) | 0, n = n + Math.imul(b, lt) | 0, i = (i = i + Math.imul(b, ct) | 0) + Math.imul(M, lt) | 0, o = o + Math.imul(M, ct) | 0;
                        var St = (h + (n = n + Math.imul(v, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(y, mt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(j, Y), i = (i = Math.imul(j, G)) + Math.imul(U, Y) | 0, o = Math.imul(U, G), n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, tt) | 0, n = n + Math.imul(I, rt) | 0, i = (i = i + Math.imul(I, nt) | 0) + Math.imul(C, rt) | 0, o = o + Math.imul(C, nt) | 0, n = n + Math.imul(T, ot) | 0, i = (i = i + Math.imul(T, st) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, st) | 0, n = n + Math.imul(B, at) | 0, i = (i = i + Math.imul(B, ht) | 0) + Math.imul(S, at) | 0, o = o + Math.imul(S, ht) | 0, n = n + Math.imul(A, lt) | 0, i = (i = i + Math.imul(A, ct) | 0) + Math.imul(x, lt) | 0, o = o + Math.imul(x, ct) | 0;
                        var Et = (h + (n = n + Math.imul(b, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(b, mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(M, mt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(j, Q), i = (i = Math.imul(j, tt)) + Math.imul(U, Q) | 0, o = Math.imul(U, tt), n = n + Math.imul(O, rt) | 0, i = (i = i + Math.imul(O, nt) | 0) + Math.imul(L, rt) | 0, o = o + Math.imul(L, nt) | 0, n = n + Math.imul(I, ot) | 0, i = (i = i + Math.imul(I, st) | 0) + Math.imul(C, ot) | 0, o = o + Math.imul(C, st) | 0, n = n + Math.imul(T, at) | 0, i = (i = i + Math.imul(T, ht) | 0) + Math.imul(P, at) | 0, o = o + Math.imul(P, ht) | 0, n = n + Math.imul(B, lt) | 0, i = (i = i + Math.imul(B, ct) | 0) + Math.imul(S, lt) | 0, o = o + Math.imul(S, ct) | 0;
                        var Tt = (h + (n = n + Math.imul(A, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(x, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(j, rt), i = (i = Math.imul(j, nt)) + Math.imul(U, rt) | 0, o = Math.imul(U, nt), n = n + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, n = n + Math.imul(I, at) | 0, i = (i = i + Math.imul(I, ht) | 0) + Math.imul(C, at) | 0, o = o + Math.imul(C, ht) | 0, n = n + Math.imul(T, lt) | 0, i = (i = i + Math.imul(T, ct) | 0) + Math.imul(P, lt) | 0, o = o + Math.imul(P, ct) | 0;
                        var Pt = (h + (n = n + Math.imul(B, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, mt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(S, mt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(j, ot), i = (i = Math.imul(j, st)) + Math.imul(U, ot) | 0, o = Math.imul(U, st), n = n + Math.imul(O, at) | 0, i = (i = i + Math.imul(O, ht) | 0) + Math.imul(L, at) | 0, o = o + Math.imul(L, ht) | 0, n = n + Math.imul(I, lt) | 0, i = (i = i + Math.imul(I, ct) | 0) + Math.imul(C, lt) | 0, o = o + Math.imul(C, ct) | 0;
                        var Nt = (h + (n = n + Math.imul(T, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(P, mt) | 0) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(j, at), i = (i = Math.imul(j, ht)) + Math.imul(U, at) | 0, o = Math.imul(U, ht), n = n + Math.imul(O, lt) | 0, i = (i = i + Math.imul(O, ct) | 0) + Math.imul(L, lt) | 0, o = o + Math.imul(L, ct) | 0;
                        var It = (h + (n = n + Math.imul(I, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, mt) | 0) + Math.imul(C, pt) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(C, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(j, lt), i = (i = Math.imul(j, ct)) + Math.imul(U, lt) | 0, o = Math.imul(U, ct);
                        var Ct = (h + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                        h = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863;
                        var Kt = (h + (n = Math.imul(j, pt)) | 0) + ((8191 & (i = (i = Math.imul(j, mt)) + Math.imul(U, pt) | 0)) << 13) | 0;
                        return h = ((o = Math.imul(U, mt)) + (i >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, a[0] = gt, a[1] = vt, a[2] = yt, a[3] = wt, a[4] = bt, a[5] = Mt, a[6] = _t, a[7] = At, a[8] = xt, a[9] = kt, a[10] = Bt, a[11] = St, a[12] = Et, a[13] = Tt, a[14] = Pt, a[15] = Nt, a[16] = It, a[17] = Ct, a[18] = Kt, 0 !== h && (a[19] = h, r.length++), r
                    };

                    function v(t, e, r) {
                        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var u = 67108863 & n, a = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= a; h++) {
                                var f = o - h,
                                    l = (0 | t.words[f]) * (0 | e.words[h]),
                                    c = 67108863 & l;
                                u = 67108863 & (c = c + u | 0), i += (s = (s = s + (l / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, s &= 67108863
                            }
                            r.words[o] = u, n = s, s = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r._strip()
                    }

                    function y(t, e, r) {
                        return v(t, e, r)
                    }

                    function w(t, e) {
                        this.x = t, this.y = e
                    }
                    Math.imul || (g = m), o.prototype.mulTo = function(t, e) {
                        var r = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? g(this, t, e) : r < 63 ? m(this, t, e) : r < 1024 ? v(this, t, e) : y(this, t, e)
                    }, w.prototype.makeRBT = function(t) {
                        for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                        return e
                    }, w.prototype.revBin = function(t, e, r) {
                        if (0 === t || t === r - 1) return t;
                        for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                        return n
                    }, w.prototype.permute = function(t, e, r, n, i, o) {
                        for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]]
                    }, w.prototype.transform = function(t, e, r, n, i, o) {
                        this.permute(o, t, e, r, n, i);
                        for (var s = 1; s < i; s <<= 1)
                            for (var u = s << 1, a = Math.cos(2 * Math.PI / u), h = Math.sin(2 * Math.PI / u), f = 0; f < i; f += u)
                                for (var l = a, c = h, d = 0; d < s; d++) {
                                    var p = r[f + d],
                                        m = n[f + d],
                                        g = r[f + d + s],
                                        v = n[f + d + s],
                                        y = l * g - c * v;
                                    v = l * v + c * g, g = y, r[f + d] = p + g, n[f + d] = m + v, r[f + d + s] = p - g, n[f + d + s] = m - v, d !== u && (y = a * l - h * c, c = a * c + h * l, l = y)
                                }
                    }, w.prototype.guessLen13b = function(t, e) {
                        var r = 1 | Math.max(e, t),
                            n = 1 & r,
                            i = 0;
                        for (r = r / 2 | 0; r; r >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, w.prototype.conjugate = function(t, e, r) {
                        if (!(r <= 1))
                            for (var n = 0; n < r / 2; n++) {
                                var i = t[n];
                                t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                            }
                    }, w.prototype.normalize13b = function(t, e) {
                        for (var r = 0, n = 0; n < e / 2; n++) {
                            var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                            t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                        }
                        return t
                    }, w.prototype.convert13b = function(t, e, r, i) {
                        for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
                        for (s = 2 * e; s < i; ++s) r[s] = 0;
                        n(0 === o), n(0 == (-8192 & o))
                    }, w.prototype.stub = function(t) {
                        for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                        return e
                    }, w.prototype.mulp = function(t, e, r) {
                        var n = 2 * this.guessLen13b(t.length, e.length),
                            i = this.makeRBT(n),
                            o = this.stub(n),
                            s = new Array(n),
                            u = new Array(n),
                            a = new Array(n),
                            h = new Array(n),
                            f = new Array(n),
                            l = new Array(n),
                            c = r.words;
                        c.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, h, n), this.transform(s, o, u, a, n, i), this.transform(h, o, f, l, n, i);
                        for (var d = 0; d < n; d++) {
                            var p = u[d] * f[d] - a[d] * l[d];
                            a[d] = u[d] * l[d] + a[d] * f[d], u[d] = p
                        }
                        return this.conjugate(u, a, n), this.transform(u, a, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                    }, o.prototype.mul = function(t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                    }, o.prototype.mulf = function(t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), y(this, t, e)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        var e = t < 0;
                        e && (t = -t), n("number" == typeof t), n(t < 67108864);
                        for (var r = 0, i = 0; i < this.length; i++) {
                            var o = (0 | this.words[i]) * t,
                                s = (67108863 & o) + (67108863 & r);
                            r >>= 26, r += o / 67108864 | 0, r += s >>> 26, this.words[i] = 67108863 & s
                        }
                        return 0 !== r && (this.words[i] = r, this.length++), e ? this.ineg() : this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var e = function(t) {
                            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                                var n = r / 26 | 0,
                                    i = r % 26;
                                e[r] = t.words[n] >>> i & 1
                            }
                            return e
                        }(t);
                        if (0 === e.length) return new o(1);
                        for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                        if (++n < e.length)
                            for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                        return r
                    }, o.prototype.iushln = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e, r = t % 26,
                            i = (t - r) / 26,
                            o = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var s = 0;
                            for (e = 0; e < this.length; e++) {
                                var u = this.words[e] & o,
                                    a = (0 | this.words[e]) - u << r;
                                this.words[e] = a | s, s = u >>> 26 - r
                            }
                            s && (this.words[e] = s, this.length++)
                        }
                        if (0 !== i) {
                            for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                            for (e = 0; e < i; e++) this.words[e] = 0;
                            this.length += i
                        }
                        return this._strip()
                    }, o.prototype.ishln = function(t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, e, r) {
                        var i;
                        n("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            u = 67108863 ^ 67108863 >>> o << o,
                            a = r;
                        if (i -= s, i = Math.max(0, i), a) {
                            for (var h = 0; h < s; h++) a.words[h] = this.words[h];
                            a.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, h = 0; h < this.length; h++) this.words[h] = this.words[h + s];
                        else this.words[0] = 0, this.length = 1;
                        var f = 0;
                        for (h = this.length - 1; h >= 0 && (0 !== f || h >= i); h--) {
                            var l = 0 | this.words[h];
                            this.words[h] = f << 26 - o | l >>> o, f = l & u
                        }
                        return a && 0 !== f && (a.words[a.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, o.prototype.ishrn = function(t, e, r) {
                        return n(0 === this.negative), this.iushrn(t, e, r)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e = t % 26,
                            r = (t - e) / 26,
                            i = 1 << e;
                        return !(this.length <= r) && !!(this.words[r] & i)
                    }, o.prototype.imaskn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e = t % 26,
                            r = (t - e) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                        if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
                            var i = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= i
                        }
                        return this._strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                        return this.length = Math.max(this.length, e + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                        return this._strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, e, r) {
                        var i, o, s = t.length + r;
                        this._expand(s);
                        var u = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + r]) + u;
                            var a = (0 | t.words[i]) * e;
                            u = ((o -= 67108863 & a) >> 26) - (a / 67108864 | 0), this.words[i + r] = 67108863 & o
                        }
                        for (; i < this.length - r; i++) u = (o = (0 | this.words[i + r]) + u) >> 26, this.words[i + r] = 67108863 & o;
                        if (0 === u) return this._strip();
                        for (n(-1 === u), u = 0, i = 0; i < this.length; i++) u = (o = -(0 | this.words[i]) + u) >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, o.prototype._wordDiv = function(t, e) {
                        var r = (this.length, t.length),
                            n = this.clone(),
                            i = t,
                            s = 0 | i.words[i.length - 1];
                        0 !== (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
                        var u, a = n.length - i.length;
                        if ("mod" !== e) {
                            (u = new o(null)).length = a + 1, u.words = new Array(u.length);
                            for (var h = 0; h < u.length; h++) u.words[h] = 0
                        }
                        var f = n.clone()._ishlnsubmul(i, 1, a);
                        0 === f.negative && (n = f, u && (u.words[a] = 1));
                        for (var l = a - 1; l >= 0; l--) {
                            var c = 67108864 * (0 | n.words[i.length + l]) + (0 | n.words[i.length + l - 1]);
                            for (c = Math.min(c / s | 0, 67108863), n._ishlnsubmul(i, c, l); 0 !== n.negative;) c--, n.negative = 0, n._ishlnsubmul(i, 1, l), n.isZero() || (n.negative ^= 1);
                            u && (u.words[l] = c)
                        }
                        return u && u._strip(), n._strip(), "div" !== e && 0 !== r && n.iushrn(r), {
                            div: u || null,
                            mod: n
                        }
                    }, o.prototype.divmod = function(t, e, r) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (u = this.neg().divmod(t, e), "mod" !== e && (i = u.div.neg()), "div" !== e && (s = u.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                            div: i,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (u = this.divmod(t.neg(), e), "mod" !== e && (i = u.div.neg()), {
                            div: i,
                            mod: u.mod
                        }) : 0 != (this.negative & t.negative) ? (u = this.neg().divmod(t.neg(), e), "div" !== e && (s = u.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                            div: u.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === e ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === e ? {
                            div: null,
                            mod: new o(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modrn(t.words[0]))
                        } : this._wordDiv(t, e);
                        var i, s, u
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var e = this.divmod(t);
                        if (e.mod.isZero()) return e.div;
                        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                            n = t.ushrn(1),
                            i = t.andln(1),
                            o = r.cmp(n);
                        return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }, o.prototype.modrn = function(t) {
                        var e = t < 0;
                        e && (t = -t), n(t <= 67108863);
                        for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--) i = (r * i + (0 | this.words[o])) % t;
                        return e ? -i : i
                    }, o.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, o.prototype.idivn = function(t) {
                        var e = t < 0;
                        e && (t = -t), n(t <= 67108863);
                        for (var r = 0, i = this.length - 1; i >= 0; i--) {
                            var o = (0 | this.words[i]) + 67108864 * r;
                            this.words[i] = o / t | 0, r = o % t
                        }
                        return this._strip(), e ? this.ineg() : this
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var e = this,
                            r = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var i = new o(1), s = new o(0), u = new o(0), a = new o(1), h = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++h;
                        for (var f = r.clone(), l = e.clone(); !e.isZero();) {
                            for (var c = 0, d = 1; 0 == (e.words[0] & d) && c < 26; ++c, d <<= 1);
                            if (c > 0)
                                for (e.iushrn(c); c-- > 0;)(i.isOdd() || s.isOdd()) && (i.iadd(f), s.isub(l)), i.iushrn(1), s.iushrn(1);
                            for (var p = 0, m = 1; 0 == (r.words[0] & m) && p < 26; ++p, m <<= 1);
                            if (p > 0)
                                for (r.iushrn(p); p-- > 0;)(u.isOdd() || a.isOdd()) && (u.iadd(f), a.isub(l)), u.iushrn(1), a.iushrn(1);
                            e.cmp(r) >= 0 ? (e.isub(r), i.isub(u), s.isub(a)) : (r.isub(e), u.isub(i), a.isub(s))
                        }
                        return {
                            a: u,
                            b: a,
                            gcd: r.iushln(h)
                        }
                    }, o.prototype._invmp = function(t) {
                        n(0 === t.negative), n(!t.isZero());
                        var e = this,
                            r = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var i, s = new o(1), u = new o(0), a = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                            for (var h = 0, f = 1; 0 == (e.words[0] & f) && h < 26; ++h, f <<= 1);
                            if (h > 0)
                                for (e.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(a), s.iushrn(1);
                            for (var l = 0, c = 1; 0 == (r.words[0] & c) && l < 26; ++l, c <<= 1);
                            if (l > 0)
                                for (r.iushrn(l); l-- > 0;) u.isOdd() && u.iadd(a), u.iushrn(1);
                            e.cmp(r) >= 0 ? (e.isub(r), s.isub(u)) : (r.isub(e), u.isub(s))
                        }
                        return (i = 0 === e.cmpn(1) ? s : u).cmpn(0) < 0 && i.iadd(t), i
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var e = this.clone(),
                            r = t.clone();
                        e.negative = 0, r.negative = 0;
                        for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                        for (;;) {
                            for (; e.isEven();) e.iushrn(1);
                            for (; r.isEven();) r.iushrn(1);
                            var i = e.cmp(r);
                            if (i < 0) {
                                var o = e;
                                e = r, r = o
                            } else if (0 === i || 0 === r.cmpn(1)) break;
                            e.isub(r)
                        }
                        return r.iushln(n)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        n("number" == typeof t);
                        var e = t % 26,
                            r = (t - e) / 26,
                            i = 1 << e;
                        if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                        for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                            var u = 0 | this.words[s];
                            o = (u += o) >>> 26, u &= 67108863, this.words[s] = u
                        }
                        return 0 !== o && (this.words[s] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var e, r = t < 0;
                        if (0 !== this.negative && !r) return -1;
                        if (0 === this.negative && r) return 1;
                        if (this._strip(), this.length > 1) e = 1;
                        else {
                            r && (t = -t), n(t <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            e = i === t ? 0 : i < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -e : e
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var e = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -e : e
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var e = 0, r = this.length - 1; r >= 0; r--) {
                            var n = 0 | this.words[r],
                                i = 0 | t.words[r];
                            if (n !== i) {
                                n < i ? e = -1 : n > i && (e = 1);
                                break
                            }
                        }
                        return e
                    }, o.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, o.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, o.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, o.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, o.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, o.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, o.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, o.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, o.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, o.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, o.red = function(t) {
                        return new B(t)
                    }, o.prototype.toRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var b = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function M(t, e) {
                        this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function _() {
                        M.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function A() {
                        M.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function x() {
                        M.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function k() {
                        M.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function B(t) {
                        if ("string" == typeof t) {
                            var e = o._prime(t);
                            this.m = e.p, this.prime = e
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function S(t) {
                        B.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    M.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, M.prototype.ireduce = function(t) {
                        var e, r = t;
                        do {
                            this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var n = e < this.n ? -1 : r.ucmp(this.p);
                        return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                    }, M.prototype.split = function(t, e) {
                        t.iushrn(this.n, 0, e)
                    }, M.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, i(_, M), _.prototype.split = function(t, e) {
                        for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n];
                        if (e.length = r, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var i = t.words[9];
                        for (e.words[e.length++] = 4194303 & i, n = 10; n < t.length; n++) {
                            var o = 0 | t.words[n];
                            t.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                        }
                        i >>>= 22, t.words[n - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, _.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, r = 0; r < t.length; r++) {
                            var n = 0 | t.words[r];
                            e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, i(A, M), i(x, M), i(k, M), k.prototype.imulK = function(t) {
                        for (var e = 0, r = 0; r < t.length; r++) {
                            var n = 19 * (0 | t.words[r]) + e,
                                i = 67108863 & n;
                            n >>>= 26, t.words[r] = i, e = n
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, o._prime = function(t) {
                        if (b[t]) return b[t];
                        var e;
                        if ("k256" === t) e = new _;
                        else if ("p224" === t) e = new A;
                        else if ("p192" === t) e = new x;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new k
                        }
                        return b[t] = e, e
                    }, B.prototype._verify1 = function(t) {
                        n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers")
                    }, B.prototype._verify2 = function(t, e) {
                        n(0 == (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers")
                    }, B.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (f(t, t.umod(this.m)._forceRed(this)), t)
                    }, B.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, B.prototype.add = function(t, e) {
                        this._verify2(t, e);
                        var r = t.add(e);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    }, B.prototype.iadd = function(t, e) {
                        this._verify2(t, e);
                        var r = t.iadd(e);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r
                    }, B.prototype.sub = function(t, e) {
                        this._verify2(t, e);
                        var r = t.sub(e);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                    }, B.prototype.isub = function(t, e) {
                        this._verify2(t, e);
                        var r = t.isub(e);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r
                    }, B.prototype.shl = function(t, e) {
                        return this._verify1(t), this.imod(t.ushln(e))
                    }, B.prototype.imul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.imul(e))
                    }, B.prototype.mul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.mul(e))
                    }, B.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, B.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, B.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var e = this.m.andln(3);
                        if (n(e % 2 == 1), 3 === e) {
                            var r = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, r)
                        }
                        for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                        n(!i.isZero());
                        var u = new o(1).toRed(this),
                            a = u.redNeg(),
                            h = this.m.subn(1).iushrn(1),
                            f = this.m.bitLength();
                        for (f = new o(2 * f * f).toRed(this); 0 !== this.pow(f, h).cmp(a);) f.redIAdd(a);
                        for (var l = this.pow(f, i), c = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = s; 0 !== d.cmp(u);) {
                            for (var m = d, g = 0; 0 !== m.cmp(u); g++) m = m.redSqr();
                            n(g < p);
                            var v = this.pow(l, new o(1).iushln(p - g - 1));
                            c = c.redMul(v), l = v.redSqr(), d = d.redMul(l), p = g
                        }
                        return c
                    }, B.prototype.invm = function(t) {
                        var e = t._invmp(this.m);
                        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                    }, B.prototype.pow = function(t, e) {
                        if (e.isZero()) return new o(1).toRed(this);
                        if (0 === e.cmpn(1)) return t.clone();
                        var r = new Array(16);
                        r[0] = new o(1).toRed(this), r[1] = t;
                        for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                        var i = r[0],
                            s = 0,
                            u = 0,
                            a = e.bitLength() % 26;
                        for (0 === a && (a = 26), n = e.length - 1; n >= 0; n--) {
                            for (var h = e.words[n], f = a - 1; f >= 0; f--) {
                                var l = h >> f & 1;
                                i !== r[0] && (i = this.sqr(i)), 0 !== l || 0 !== s ? (s <<= 1, s |= l, (4 === ++u || 0 === n && 0 === f) && (i = this.mul(i, r[s]), u = 0, s = 0)) : u = 0
                            }
                            a = 26
                        }
                        return i
                    }, B.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, B.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null, e
                    }, o.mont = function(t) {
                        return new S(t)
                    }, i(S, B), S.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, S.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null, e
                    }, S.prototype.imul = function(t, e) {
                        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var r = t.imul(e),
                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = r.isub(n).iushrn(this.shift),
                            o = i;
                        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                    }, S.prototype.mul = function(t, e) {
                        if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                        var r = t.mul(e),
                            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = r.isub(n).iushrn(this.shift),
                            s = i;
                        return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                    }, S.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, r(81)(t))
        },
        3455: function(t, e) {
            const r = "Impossible case. Please create issue.",
                n = "The tweak was out of range or the resulted private key is invalid",
                i = "The tweak was out of range or equal to zero",
                o = "Unknow error on context randomization",
                s = "Private Key is invalid",
                u = "Public Key could not be parsed",
                a = "Public Key serialization error",
                h = "The sum of the public keys is not valid",
                f = "Signature could not be parsed",
                l = "The nonce generation function failed, or the private key was invalid",
                c = "Public key could not be recover",
                d = "Scalar was invalid (zero or overflow)";

            function p(t, e) {
                if (!t) throw new Error(e)
            }

            function m(t, e, r) {
                if (p(e instanceof Uint8Array, `Expected ${t} to be an Uint8Array`), void 0 !== r)
                    if (Array.isArray(r)) {
                        const n = `Expected ${t} to be an Uint8Array with length [${r.join(", ")}]`;
                        p(r.includes(e.length), n)
                    } else {
                        const n = `Expected ${t} to be an Uint8Array with length ${r}`;
                        p(e.length === r, n)
                    }
            }

            function g(t) {
                p("Boolean" === y(t), "Expected compressed to be a Boolean")
            }

            function v(t = (t => new Uint8Array(t)), e) {
                return "function" == typeof t && (t = t(e)), m("output", t, e), t
            }

            function y(t) {
                return Object.prototype.toString.call(t).slice(8, -1)
            }
            t.exports = t => ({
                contextRandomize(e) {
                    switch (p(null === e || e instanceof Uint8Array, "Expected seed to be an Uint8Array or null"), null !== e && m("seed", e, 32), t.contextRandomize(e)) {
                        case 1:
                            throw new Error(o)
                    }
                },
                privateKeyVerify: e => (m("private key", e, 32), 0 === t.privateKeyVerify(e)),
                privateKeyNegate(e) {
                    switch (m("private key", e, 32), t.privateKeyNegate(e)) {
                        case 0:
                            return e;
                        case 1:
                            throw new Error(r)
                    }
                },
                privateKeyTweakAdd(e, r) {
                    switch (m("private key", e, 32), m("tweak", r, 32), t.privateKeyTweakAdd(e, r)) {
                        case 0:
                            return e;
                        case 1:
                            throw new Error(n)
                    }
                },
                privateKeyTweakMul(e, r) {
                    switch (m("private key", e, 32), m("tweak", r, 32), t.privateKeyTweakMul(e, r)) {
                        case 0:
                            return e;
                        case 1:
                            throw new Error(i)
                    }
                },
                publicKeyVerify: e => (m("public key", e, [33, 65]), 0 === t.publicKeyVerify(e)),
                publicKeyCreate(e, r = !0, n) {
                    switch (m("private key", e, 32), g(r), n = v(n, r ? 33 : 65), t.publicKeyCreate(n, e)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(s);
                        case 2:
                            throw new Error(a)
                    }
                },
                publicKeyConvert(e, r = !0, n) {
                    switch (m("public key", e, [33, 65]), g(r), n = v(n, r ? 33 : 65), t.publicKeyConvert(n, e)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(u);
                        case 2:
                            throw new Error(a)
                    }
                },
                publicKeyNegate(e, n = !0, i) {
                    switch (m("public key", e, [33, 65]), g(n), i = v(i, n ? 33 : 65), t.publicKeyNegate(i, e)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(u);
                        case 2:
                            throw new Error(r);
                        case 3:
                            throw new Error(a)
                    }
                },
                publicKeyCombine(e, r = !0, n) {
                    p(Array.isArray(e), "Expected public keys to be an Array"), p(e.length > 0, "Expected public keys array will have more than zero items");
                    for (const t of e) m("public key", t, [33, 65]);
                    switch (g(r), n = v(n, r ? 33 : 65), t.publicKeyCombine(n, e)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(u);
                        case 2:
                            throw new Error(h);
                        case 3:
                            throw new Error(a)
                    }
                },
                publicKeyTweakAdd(e, r, i = !0, o) {
                    switch (m("public key", e, [33, 65]), m("tweak", r, 32), g(i), o = v(o, i ? 33 : 65), t.publicKeyTweakAdd(o, e, r)) {
                        case 0:
                            return o;
                        case 1:
                            throw new Error(u);
                        case 2:
                            throw new Error(n)
                    }
                },
                publicKeyTweakMul(e, r, n = !0, o) {
                    switch (m("public key", e, [33, 65]), m("tweak", r, 32), g(n), o = v(o, n ? 33 : 65), t.publicKeyTweakMul(o, e, r)) {
                        case 0:
                            return o;
                        case 1:
                            throw new Error(u);
                        case 2:
                            throw new Error(i)
                    }
                },
                signatureNormalize(e) {
                    switch (m("signature", e, 64), t.signatureNormalize(e)) {
                        case 0:
                            return e;
                        case 1:
                            throw new Error(f)
                    }
                },
                signatureExport(e, n) {
                    m("signature", e, 64);
                    const i = {
                        output: n = v(n, 72),
                        outputlen: 72
                    };
                    switch (t.signatureExport(i, e)) {
                        case 0:
                            return n.slice(0, i.outputlen);
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(r)
                    }
                },
                signatureImport(e, n) {
                    switch (m("signature", e), n = v(n, 64), t.signatureImport(n, e)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(r)
                    }
                },
                ecdsaSign(e, n, i = {}, o) {
                    m("message", e, 32), m("private key", n, 32), p("Object" === y(i), "Expected options to be an Object"), void 0 !== i.data && m("options.data", i.data), void 0 !== i.noncefn && p("Function" === y(i.noncefn), "Expected options.noncefn to be a Function");
                    const s = {
                        signature: o = v(o, 64),
                        recid: null
                    };
                    switch (t.ecdsaSign(s, e, n, i.data, i.noncefn)) {
                        case 0:
                            return s;
                        case 1:
                            throw new Error(l);
                        case 2:
                            throw new Error(r)
                    }
                },
                ecdsaVerify(e, r, n) {
                    switch (m("signature", e, 64), m("message", r, 32), m("public key", n, [33, 65]), t.ecdsaVerify(e, r, n)) {
                        case 0:
                            return !0;
                        case 3:
                            return !1;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(u)
                    }
                },
                ecdsaRecover(e, n, i, o = !0, s) {
                    switch (m("signature", e, 64), p("Number" === y(n) && n >= 0 && n <= 3, "Expected recovery id to be a Number within interval [0, 3]"), m("message", i, 32), g(o), s = v(s, o ? 33 : 65), t.ecdsaRecover(s, e, n, i)) {
                        case 0:
                            return s;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(c);
                        case 3:
                            throw new Error(r)
                    }
                },
                ecdh(e, r, n = {}, i) {
                    switch (m("public key", e, [33, 65]), m("private key", r, 32), p("Object" === y(n), "Expected options to be an Object"), void 0 !== n.data && m("options.data", n.data), void 0 !== n.hashfn ? (p("Function" === y(n.hashfn), "Expected options.hashfn to be a Function"), void 0 !== n.xbuf && m("options.xbuf", n.xbuf, 32), void 0 !== n.ybuf && m("options.ybuf", n.ybuf, 32), m("output", i)) : i = v(i, 32), t.ecdh(i, e, r, n.data, n.hashfn, n.xbuf, n.ybuf)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(u);
                        case 2:
                            throw new Error(d)
                    }
                }
            })
        },
        3456: function(t, e, r) {
            const n = new(0, r(85).ec)("secp256k1"),
                i = n.curve,
                o = i.n.constructor;

            function s(t) {
                const e = t[0];
                switch (e) {
                    case 2:
                    case 3:
                        return 33 !== t.length ? null : function(t, e) {
                            let r = new o(e);
                            if (r.cmp(i.p) >= 0) return null;
                            r = r.toRed(i.red);
                            let s = r.redSqr().redIMul(r).redIAdd(i.b).redSqrt();
                            return 3 === t !== s.isOdd() && (s = s.redNeg()), n.keyPair({
                                pub: {
                                    x: r,
                                    y: s
                                }
                            })
                        }(e, t.subarray(1, 33));
                    case 4:
                    case 6:
                    case 7:
                        return 65 !== t.length ? null : function(t, e, r) {
                            let s = new o(e),
                                u = new o(r);
                            if (s.cmp(i.p) >= 0 || u.cmp(i.p) >= 0) return null;
                            if (s = s.toRed(i.red), u = u.toRed(i.red), (6 === t || 7 === t) && u.isOdd() !== (7 === t)) return null;
                            const a = s.redSqr().redIMul(s);
                            return u.redSqr().redISub(a.redIAdd(i.b)).isZero() ? n.keyPair({
                                pub: {
                                    x: s,
                                    y: u
                                }
                            }) : null
                        }(e, t.subarray(1, 33), t.subarray(33, 65));
                    default:
                        return null
                }
            }

            function u(t, e) {
                const r = e.encode(null, 33 === t.length);
                for (let e = 0; e < t.length; ++e) t[e] = r[e]
            }
            t.exports = {
                contextRandomize: () => 0,
                privateKeyVerify(t) {
                    const e = new o(t);
                    return e.cmp(i.n) < 0 && !e.isZero() ? 0 : 1
                },
                privateKeyNegate(t) {
                    const e = new o(t),
                        r = i.n.sub(e).umod(i.n).toArrayLike(Uint8Array, "be", 32);
                    return t.set(r), 0
                },
                privateKeyTweakAdd(t, e) {
                    const r = new o(e);
                    if (r.cmp(i.n) >= 0) return 1;
                    if (r.iadd(new o(t)), r.cmp(i.n) >= 0 && r.isub(i.n), r.isZero()) return 1;
                    const n = r.toArrayLike(Uint8Array, "be", 32);
                    return t.set(n), 0
                },
                privateKeyTweakMul(t, e) {
                    let r = new o(e);
                    if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
                    r.imul(new o(t)), r.cmp(i.n) >= 0 && (r = r.umod(i.n));
                    const n = r.toArrayLike(Uint8Array, "be", 32);
                    return t.set(n), 0
                },
                publicKeyVerify: t => null === s(t) ? 1 : 0,
                publicKeyCreate(t, e) {
                    const r = new o(e);
                    if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
                    return u(t, n.keyFromPrivate(e).getPublic()), 0
                },
                publicKeyConvert(t, e) {
                    const r = s(e);
                    if (null === r) return 1;
                    return u(t, r.getPublic()), 0
                },
                publicKeyNegate(t, e) {
                    const r = s(e);
                    if (null === r) return 1;
                    const n = r.getPublic();
                    return n.y = n.y.redNeg(), u(t, n), 0
                },
                publicKeyCombine(t, e) {
                    const r = new Array(e.length);
                    for (let t = 0; t < e.length; ++t)
                        if (r[t] = s(e[t]), null === r[t]) return 1;
                    let n = r[0].getPublic();
                    for (let t = 1; t < r.length; ++t) n = n.add(r[t].pub);
                    return n.isInfinity() ? 2 : (u(t, n), 0)
                },
                publicKeyTweakAdd(t, e, r) {
                    const n = s(e);
                    if (null === n) return 1;
                    if ((r = new o(r)).cmp(i.n) >= 0) return 2;
                    const a = n.getPublic().add(i.g.mul(r));
                    return a.isInfinity() ? 2 : (u(t, a), 0)
                },
                publicKeyTweakMul(t, e, r) {
                    const n = s(e);
                    if (null === n) return 1;
                    if ((r = new o(r)).cmp(i.n) >= 0 || r.isZero()) return 2;
                    return u(t, n.getPublic().mul(r)), 0
                },
                signatureNormalize(t) {
                    const e = new o(t.subarray(0, 32)),
                        r = new o(t.subarray(32, 64));
                    return e.cmp(i.n) >= 0 || r.cmp(i.n) >= 0 ? 1 : (1 === r.cmp(n.nh) && t.set(i.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32), 0)
                },
                signatureExport(t, e) {
                    const r = e.subarray(0, 32),
                        n = e.subarray(32, 64);
                    if (new o(r).cmp(i.n) >= 0) return 1;
                    if (new o(n).cmp(i.n) >= 0) return 1;
                    const {
                        output: s
                    } = t;
                    let u = s.subarray(4, 37);
                    u[0] = 0, u.set(r, 1);
                    let a = 33,
                        h = 0;
                    for (; a > 1 && 0 === u[h] && !(128 & u[h + 1]); --a, ++h);
                    if (u = u.subarray(h), 128 & u[0]) return 1;
                    if (a > 1 && 0 === u[0] && !(128 & u[1])) return 1;
                    let f = s.subarray(39, 72);
                    f[0] = 0, f.set(n, 1);
                    let l = 33,
                        c = 0;
                    for (; l > 1 && 0 === f[c] && !(128 & f[c + 1]); --l, ++c);
                    return f = f.subarray(c), 128 & f[0] || l > 1 && 0 === f[0] && !(128 & f[1]) ? 1 : (t.outputlen = 6 + a + l, s[0] = 48, s[1] = t.outputlen - 2, s[2] = 2, s[3] = u.length, s.set(u, 4), s[4 + a] = 2, s[5 + a] = f.length, s.set(f, 6 + a), 0)
                },
                signatureImport(t, e) {
                    if (e.length < 8) return 1;
                    if (e.length > 72) return 1;
                    if (48 !== e[0]) return 1;
                    if (e[1] !== e.length - 2) return 1;
                    if (2 !== e[2]) return 1;
                    const r = e[3];
                    if (0 === r) return 1;
                    if (5 + r >= e.length) return 1;
                    if (2 !== e[4 + r]) return 1;
                    const n = e[5 + r];
                    if (0 === n) return 1;
                    if (6 + r + n !== e.length) return 1;
                    if (128 & e[4]) return 1;
                    if (r > 1 && 0 === e[4] && !(128 & e[5])) return 1;
                    if (128 & e[r + 6]) return 1;
                    if (n > 1 && 0 === e[r + 6] && !(128 & e[r + 7])) return 1;
                    let s = e.subarray(4, 4 + r);
                    if (33 === s.length && 0 === s[0] && (s = s.subarray(1)), s.length > 32) return 1;
                    let u = e.subarray(6 + r);
                    if (33 === u.length && 0 === u[0] && (u = u.slice(1)), u.length > 32) throw new Error("S length is too long");
                    let a = new o(s);
                    a.cmp(i.n) >= 0 && (a = new o(0));
                    let h = new o(e.subarray(6 + r));
                    return h.cmp(i.n) >= 0 && (h = new o(0)), t.set(a.toArrayLike(Uint8Array, "be", 32), 0), t.set(h.toArrayLike(Uint8Array, "be", 32), 32), 0
                },
                ecdsaSign(t, e, r, s, u) {
                    if (u) {
                        const t = u;
                        u = n => {
                            const i = t(e, r, null, s, n);
                            if (!(i instanceof Uint8Array && 32 === i.length)) throw new Error("This is the way");
                            return new o(i)
                        }
                    }
                    const a = new o(r);
                    if (a.cmp(i.n) >= 0 || a.isZero()) return 1;
                    let h;
                    try {
                        h = n.sign(e, r, {
                            canonical: !0,
                            k: u,
                            pers: s
                        })
                    } catch (t) {
                        return 1
                    }
                    return t.signature.set(h.r.toArrayLike(Uint8Array, "be", 32), 0), t.signature.set(h.s.toArrayLike(Uint8Array, "be", 32), 32), t.recid = h.recoveryParam, 0
                },
                ecdsaVerify(t, e, r) {
                    const u = {
                            r: t.subarray(0, 32),
                            s: t.subarray(32, 64)
                        },
                        a = new o(u.r),
                        h = new o(u.s);
                    if (a.cmp(i.n) >= 0 || h.cmp(i.n) >= 0) return 1;
                    if (1 === h.cmp(n.nh) || a.isZero() || h.isZero()) return 3;
                    const f = s(r);
                    if (null === f) return 2;
                    const l = f.getPublic();
                    return n.verify(e, u, l) ? 0 : 3
                },
                ecdsaRecover(t, e, r, s) {
                    const a = {
                            r: e.slice(0, 32),
                            s: e.slice(32, 64)
                        },
                        h = new o(a.r),
                        f = new o(a.s);
                    if (h.cmp(i.n) >= 0 || f.cmp(i.n) >= 0) return 1;
                    if (h.isZero() || f.isZero()) return 2;
                    let l;
                    try {
                        l = n.recoverPubKey(s, a, r)
                    } catch (t) {
                        return 2
                    }
                    return u(t, l), 0
                },
                ecdh(t, e, r, u, a, h, f) {
                    const l = s(e);
                    if (null === l) return 1;
                    const c = new o(r);
                    if (c.cmp(i.n) >= 0 || c.isZero()) return 2;
                    const d = l.getPublic().mul(c);
                    if (void 0 === a) {
                        const e = d.encode(null, !0),
                            r = n.hash().update(e).digest();
                        for (let e = 0; e < 32; ++e) t[e] = r[e]
                    } else {
                        h || (h = new Uint8Array(32));
                        const e = d.getX().toArray("be", 32);
                        for (let t = 0; t < 32; ++t) h[t] = e[t];
                        f || (f = new Uint8Array(32));
                        const r = d.getY().toArray("be", 32);
                        for (let t = 0; t < 32; ++t) f[t] = r[t];
                        const n = a(h, f, u);
                        if (!(n instanceof Uint8Array && n.length === t.length)) return 2;
                        t.set(n)
                    }
                    return 0
                }
            }
        },
        3457: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(125);
            e.getRandomBytes = function(t) {
                return new Promise((function(e, r) {
                    n(t, (function(t, n) {
                        t ? r(t) : e(n)
                    }))
                }))
            }, e.getRandomBytesSync = function(t) {
                return n(t)
            }
        },
        3458: function(t, e, r) {
            "use strict";
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Address = void 0;
            var i = n(r(72)),
                o = r(266),
                s = r(344),
                u = r(1844),
                a = function() {
                    function t(t) {
                        (0, i.default)(20 === t.length, "Invalid address length"), this.buf = t
                    }
                    return t.zero = function() {
                        return new t((0, s.zeros)(20))
                    }, t.fromString = function(e) {
                        return (0, i.default)((0, u.isValidAddress)(e), "Invalid address"), new t((0, s.toBuffer)(e))
                    }, t.fromPublicKey = function(e) {
                        return (0, i.default)(Buffer.isBuffer(e), "Public key should be Buffer"), new t((0, u.pubToAddress)(e))
                    }, t.fromPrivateKey = function(e) {
                        return (0, i.default)(Buffer.isBuffer(e), "Private key should be Buffer"), new t((0, u.privateToAddress)(e))
                    }, t.generate = function(e, r) {
                        return (0, i.default)(o.BN.isBN(r)), new t((0, u.generateAddress)(e.buf, r.toArrayLike(Buffer)))
                    }, t.generate2 = function(e, r, n) {
                        return (0, i.default)(Buffer.isBuffer(r)), (0, i.default)(Buffer.isBuffer(n)), new t((0, u.generateAddress2)(e.buf, r, n))
                    }, t.prototype.equals = function(t) {
                        return this.buf.equals(t.buf)
                    }, t.prototype.isZero = function() {
                        return this.equals(t.zero())
                    }, t.prototype.isPrecompileOrSystemAddress = function() {
                        var t = new o.BN(this.buf),
                            e = new o.BN(0),
                            r = new o.BN("ffff", "hex");
                        return t.gte(e) && t.lte(r)
                    }, t.prototype.toString = function() {
                        return "0x" + this.buf.toString("hex")
                    }, t.prototype.toBuffer = function() {
                        return Buffer.from(this.buf)
                    }, t
                }();
            e.Address = a
        },
        3459: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.hashPersonalMessage = e.isValidSignature = e.fromRpcSig = e.toCompactSig = e.toRpcSig = e.ecrecover = e.ecsign = void 0;
            var n = r(1385),
                i = r(266),
                o = r(344),
                s = r(1068),
                u = r(622),
                a = r(1069);

            function h(t, e) {
                var r = (0, a.toType)(t, a.TypeOutput.BN);
                if (r.eqn(0) || r.eqn(1)) return (0, a.toType)(t, a.TypeOutput.BN);
                if (!e) return r.subn(27);
                var n = (0, a.toType)(e, a.TypeOutput.BN);
                return r.sub(n.muln(2).addn(35))
            }

            function f(t) {
                var e = new i.BN(t);
                return e.eqn(0) || e.eqn(1)
            }
            e.ecsign = function(t, e, r) {
                var i = (0, n.ecdsaSign)(t, e),
                    o = i.signature,
                    s = i.recid,
                    u = Buffer.from(o.slice(0, 32)),
                    h = Buffer.from(o.slice(32, 64));
                if (!r || "number" == typeof r) {
                    if (r && !Number.isSafeInteger(r)) throw new Error("The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)");
                    return {
                        r: u,
                        s: h,
                        v: r ? s + (2 * r + 35) : s + 27
                    }
                }
                return {
                    r: u,
                    s: h,
                    v: (0, a.toType)(r, a.TypeOutput.BN).muln(2).addn(35).addn(s).toArrayLike(Buffer)
                }
            };
            e.ecrecover = function(t, e, r, i, s) {
                var u = Buffer.concat([(0, o.setLengthLeft)(r, 32), (0, o.setLengthLeft)(i, 32)], 64),
                    a = h(e, s);
                if (!f(a)) throw new Error("Invalid signature v value");
                var l = (0, n.ecdsaRecover)(u, a.toNumber(), t);
                return Buffer.from((0, n.publicKeyConvert)(l, !1).slice(1))
            };
            e.toRpcSig = function(t, e, r, n) {
                if (!f(h(t, n))) throw new Error("Invalid signature v value");
                return (0, o.bufferToHex)(Buffer.concat([(0, o.setLengthLeft)(e, 32), (0, o.setLengthLeft)(r, 32), (0, o.toBuffer)(t)]))
            };
            e.toCompactSig = function(t, e, r, n) {
                if (!f(h(t, n))) throw new Error("Invalid signature v value");
                var i = (0, a.toType)(t, a.TypeOutput.Number),
                    s = r;
                return (i > 28 && i % 2 == 1 || 1 === i || 28 === i) && ((s = Buffer.from(r))[0] |= 128), (0, o.bufferToHex)(Buffer.concat([(0, o.setLengthLeft)(e, 32), (0, o.setLengthLeft)(s, 32)]))
            };
            e.fromRpcSig = function(t) {
                var e, r, n, i = (0, o.toBuffer)(t);
                if (i.length >= 65) e = i.slice(0, 32), r = i.slice(32, 64), n = (0, o.bufferToInt)(i.slice(64));
                else {
                    if (64 !== i.length) throw new Error("Invalid signature length");
                    e = i.slice(0, 32), r = i.slice(32, 64), n = (0, o.bufferToInt)(i.slice(32, 33)) >> 7, r[0] &= 127
                }
                return n < 27 && (n += 27), {
                    v: n,
                    r: e,
                    s: r
                }
            };
            e.isValidSignature = function(t, e, r, n, o) {
                void 0 === n && (n = !0);
                var s = new i.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                    u = new i.BN("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
                if (32 !== e.length || 32 !== r.length) return !1;
                if (!f(h(t, o))) return !1;
                var a = new i.BN(e),
                    l = new i.BN(r);
                return !(a.isZero() || a.gt(u) || l.isZero() || l.gt(u)) && (!n || 1 !== l.cmp(s))
            };
            e.hashPersonalMessage = function(t) {
                (0, u.assertIsBuffer)(t);
                var e = Buffer.from("Ethereum Signed Message:\n".concat(t.length), "utf-8");
                return (0, s.keccak)(Buffer.concat([e, t]))
            }
        },
        3460: function(t, e, r) {
            "use strict";
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.defineProperties = void 0;
            var i = n(r(72)),
                o = r(412),
                s = r(266),
                u = r(344);
            e.defineProperties = function(t, e, r) {
                if (t.raw = [], t._fields = [], t.toJSON = function(e) {
                        if (void 0 === e && (e = !1), e) {
                            var r = {};
                            return t._fields.forEach((function(e) {
                                r[e] = "0x".concat(t[e].toString("hex"))
                            })), r
                        }
                        return (0, u.baToJSON)(t.raw)
                    }, t.serialize = function() {
                        return s.rlp.encode(t.raw)
                    }, e.forEach((function(e, r) {
                        function n() {
                            return t.raw[r]
                        }

                        function o(n) {
                            "00" !== (n = (0, u.toBuffer)(n)).toString("hex") || e.allowZero || (n = Buffer.allocUnsafe(0)), e.allowLess && e.length ? (n = (0, u.unpadBuffer)(n), (0, i.default)(e.length >= n.length, "The field ".concat(e.name, " must not have more ").concat(e.length, " bytes"))) : e.allowZero && 0 === n.length || !e.length || (0, i.default)(e.length === n.length, "The field ".concat(e.name, " must have byte length of ").concat(e.length)), t.raw[r] = n
                        }
                        t._fields.push(e.name), Object.defineProperty(t, e.name, {
                            enumerable: !0,
                            configurable: !0,
                            get: n,
                            set: o
                        }), e.default && (t[e.name] = e.default), e.alias && Object.defineProperty(t, e.alias, {
                            enumerable: !1,
                            configurable: !0,
                            set: o,
                            get: n
                        })
                    })), r)
                    if ("string" == typeof r && (r = Buffer.from((0, o.stripHexPrefix)(r), "hex")), Buffer.isBuffer(r) && (r = s.rlp.decode(r)), Array.isArray(r)) {
                        if (r.length > t._fields.length) throw new Error("wrong number of fields in data");
                        r.forEach((function(e, r) {
                            t[t._fields[r]] = (0, u.toBuffer)(e)
                        }))
                    } else {
                        if ("object" != typeof r) throw new Error("invalid data");
                        var n = Object.keys(r);
                        e.forEach((function(e) {
                            -1 !== n.indexOf(e.name) && (t[e.name] = r[e.name]), -1 !== n.indexOf(e.alias) && (t[e.alias] = r[e.alias])
                        }))
                    }
            }
        },
        3461: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(3462);

            function i(t) {
                return "string" == typeof t && (!!/^(0x)?[0-9a-f]{512}$/i.test(t) && !(!/^(0x)?[0-9a-f]{512}$/.test(t) && !/^(0x)?[0-9A-F]{512}$/.test(t)))
            }

            function o(t, e) {
                "object" == typeof e && e.constructor === Uint8Array && (e = n.bytesToHex(e));
                const r = n.keccak256(e).replace("0x", "");
                for (let e = 0; e < 12; e += 4) {
                    const n = (parseInt(r.substr(e, 2), 16) << 8) + parseInt(r.substr(e + 2, 2), 16) & 2047,
                        i = 1 << n % 4;
                    if ((s(t.charCodeAt(t.length - 1 - Math.floor(n / 4))) & i) !== i) return !1
                }
                return !0
            }

            function s(t) {
                if (t >= 48 && t <= 57) return t - 48;
                if (t >= 65 && t <= 70) return t - 55;
                if (t >= 97 && t <= 102) return t - 87;
                throw new Error("invalid bloom")
            }

            function u(t) {
                return "string" == typeof t && (!!/^(0x)?[0-9a-f]{64}$/i.test(t) && !(!/^(0x)?[0-9a-f]{64}$/.test(t) && !/^(0x)?[0-9A-F]{64}$/.test(t)))
            }

            function a(t) {
                return "string" == typeof t && (!!t.match(/^(0x)?[0-9a-fA-F]{40}$/) || !!t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/))
            }
            e.isBloom = i, e.isInBloom = o, e.isUserEthereumAddressInBloom = function(t, e) {
                if (!i(t)) throw new Error("Invalid bloom given");
                if (!a(e)) throw new Error(`Invalid ethereum address given: "${e}"`);
                return o(t, n.padLeft(e, 64))
            }, e.isContractAddressInBloom = function(t, e) {
                if (!i(t)) throw new Error("Invalid bloom given");
                if (!a(e)) throw new Error(`Invalid contract address given: "${e}"`);
                return o(t, e)
            }, e.isTopicInBloom = function(t, e) {
                if (!i(t)) throw new Error("Invalid bloom given");
                if (!u(e)) throw new Error("Invalid topic");
                return o(t, e)
            }, e.isTopic = u, e.isAddress = a
        },
        3462: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const n = r(465);

            function i(t) {
                if (null == t) throw new Error("cannot convert null value to array");
                if ("string" == typeof t) {
                    const e = t.match(/^(0x)?[0-9a-fA-F]*$/);
                    if (!e) throw new Error("invalid hexidecimal string");
                    if ("0x" !== e[1]) throw new Error("hex string must have 0x prefix");
                    (t = t.substring(2)).length % 2 && (t = "0" + t);
                    const r = [];
                    for (let e = 0; e < t.length; e += 2) r.push(parseInt(t.substr(e, 2), 16));
                    return o(new Uint8Array(r))
                }
                if (function(t) {
                        if (!t || parseInt(String(t.length)) != t.length || "string" == typeof t) return !1;
                        for (let e = 0; e < t.length; e++) {
                            const r = t[e];
                            if (r < 0 || r >= 256 || parseInt(String(r)) != r) return !1
                        }
                        return !0
                    }(t)) return o(new Uint8Array(t));
                throw new Error("invalid arrayify value")
            }

            function o(t) {
                return void 0 !== t.slice || (t.slice = () => {
                    const e = Array.prototype.slice.call(arguments);
                    return o(new Uint8Array(Array.prototype.slice.apply(t, e)))
                }), t
            }
            e.keccak256 = function(t) {
                return "0x" + n.keccak_256(i(t))
            }, e.padLeft = (t, e) => {
                const r = /^0x/i.test(t) || "number" == typeof t,
                    n = e - (t = t.toString().replace(/^0x/i, "")).length + 1 >= 0 ? e - t.length + 1 : 0;
                return (r ? "0x" : "") + new Array(n).join("0") + t
            }, e.bytesToHex = function(t) {
                const e = [];
                for (let r = 0; r < t.length; r++) e.push((t[r] >>> 4).toString(16)), e.push((15 & t[r]).toString(16));
                return "0x" + e.join("").replace(/^0+/, "")
            }, e.toByteArray = i
        },
        3469: function(t, e) {
            var r = function() {
                if ("object" == typeof self && self) return self;
                if ("object" == typeof window && window) return window;
                throw new Error("Unable to resolve global `this`")
            };
            t.exports = function() {
                if (this) return this;
                if ("object" == typeof globalThis && globalThis) return globalThis;
                try {
                    Object.defineProperty(Object.prototype, "__global__", {
                        get: function() {
                            return this
                        },
                        configurable: !0
                    })
                } catch (t) {
                    return r()
                }
                try {
                    return __global__ || r()
                } finally {
                    delete Object.prototype.__global__
                }
            }()
        },
        3489: function(t, e) {
            ! function() {
                "use strict";
                var e = "object" == typeof window ? window : {};
                !e.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node && (e = global);
                for (var r = !e.JS_SHA3_NO_COMMON_JS && "object" == typeof t && t.exports, n = "0123456789abcdef".split(""), i = [0, 8, 16, 24], o = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], s = [224, 256, 384, 512], u = ["hex", "buffer", "arrayBuffer", "array"], a = function(t, e, r) {
                        return function(n) {
                            return new w(t, e, t).update(n)[r]()
                        }
                    }, h = function(t, e, r) {
                        return function(n, i) {
                            return new w(t, e, i).update(n)[r]()
                        }
                    }, f = function(t, e) {
                        var r = a(t, e, "hex");
                        r.create = function() {
                            return new w(t, e, t)
                        }, r.update = function(t) {
                            return r.create().update(t)
                        };
                        for (var n = 0; n < u.length; ++n) {
                            var i = u[n];
                            r[i] = a(t, e, i)
                        }
                        return r
                    }, l = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: s,
                        createMethod: f
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: s,
                        createMethod: f
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: [128, 256],
                        createMethod: function(t, e) {
                            var r = h(t, e, "hex");
                            r.create = function(r) {
                                return new w(t, e, r)
                            }, r.update = function(t, e) {
                                return r.create(e).update(t)
                            };
                            for (var n = 0; n < u.length; ++n) {
                                var i = u[n];
                                r[i] = h(t, e, i)
                            }
                            return r
                        }
                    }], c = {}, d = [], p = 0; p < l.length; ++p)
                    for (var m = l[p], g = m.bits, v = 0; v < g.length; ++v) {
                        var y = m.name + "_" + g[v];
                        d.push(y), c[y] = m.createMethod(g[v], m.padding)
                    }

                function w(t, e, r) {
                    this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var n = 0; n < 50; ++n) this.s[n] = 0
                }
                w.prototype.update = function(t) {
                    var e = "string" != typeof t;
                    e && t.constructor === ArrayBuffer && (t = new Uint8Array(t));
                    for (var r, n, o = t.length, s = this.blocks, u = this.byteCount, a = this.blockCount, h = 0, f = this.s; h < o;) {
                        if (this.reset)
                            for (this.reset = !1, s[0] = this.block, r = 1; r < a + 1; ++r) s[r] = 0;
                        if (e)
                            for (r = this.start; h < o && r < u; ++h) s[r >> 2] |= t[h] << i[3 & r++];
                        else
                            for (r = this.start; h < o && r < u; ++h)(n = t.charCodeAt(h)) < 128 ? s[r >> 2] |= n << i[3 & r++] : n < 2048 ? (s[r >> 2] |= (192 | n >> 6) << i[3 & r++], s[r >> 2] |= (128 | 63 & n) << i[3 & r++]) : n < 55296 || n >= 57344 ? (s[r >> 2] |= (224 | n >> 12) << i[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << i[3 & r++], s[r >> 2] |= (128 | 63 & n) << i[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++h)), s[r >> 2] |= (240 | n >> 18) << i[3 & r++], s[r >> 2] |= (128 | n >> 12 & 63) << i[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << i[3 & r++], s[r >> 2] |= (128 | 63 & n) << i[3 & r++]);
                        if (this.lastByteIndex = r, r >= u) {
                            for (this.start = r - u, this.block = s[a], r = 0; r < a; ++r) f[r] ^= s[r];
                            b(f), this.reset = !0
                        } else this.start = r
                    }
                    return this
                }, w.prototype.finalize = function() {
                    var t = this.blocks,
                        e = this.lastByteIndex,
                        r = this.blockCount,
                        n = this.s;
                    if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                        for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
                    for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
                    b(n)
                }, w.prototype.toString = w.prototype.hex = function() {
                    this.finalize();
                    for (var t, e = this.blockCount, r = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, u = 0, a = ""; u < i;) {
                        for (s = 0; s < e && u < i; ++s, ++u) t = r[s], a += n[t >> 4 & 15] + n[15 & t] + n[t >> 12 & 15] + n[t >> 8 & 15] + n[t >> 20 & 15] + n[t >> 16 & 15] + n[t >> 28 & 15] + n[t >> 24 & 15];
                        u % e == 0 && (b(r), s = 0)
                    }
                    return o && (t = r[s], o > 0 && (a += n[t >> 4 & 15] + n[15 & t]), o > 1 && (a += n[t >> 12 & 15] + n[t >> 8 & 15]), o > 2 && (a += n[t >> 20 & 15] + n[t >> 16 & 15])), a
                }, w.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t, e = this.blockCount,
                        r = this.s,
                        n = this.outputBlocks,
                        i = this.extraBytes,
                        o = 0,
                        s = 0,
                        u = this.outputBits >> 3;
                    t = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(u);
                    for (var a = new Uint32Array(t); s < n;) {
                        for (o = 0; o < e && s < n; ++o, ++s) a[s] = r[o];
                        s % e == 0 && b(r)
                    }
                    return i && (a[o] = r[o], t = t.slice(0, u)), t
                }, w.prototype.buffer = w.prototype.arrayBuffer, w.prototype.digest = w.prototype.array = function() {
                    this.finalize();
                    for (var t, e, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, u = 0, a = []; u < i;) {
                        for (s = 0; s < r && u < i; ++s, ++u) t = u << 2, e = n[s], a[t] = 255 & e, a[t + 1] = e >> 8 & 255, a[t + 2] = e >> 16 & 255, a[t + 3] = e >> 24 & 255;
                        u % r == 0 && b(n)
                    }
                    return o && (t = u << 2, e = n[s], o > 0 && (a[t] = 255 & e), o > 1 && (a[t + 1] = e >> 8 & 255), o > 2 && (a[t + 2] = e >> 16 & 255)), a
                };
                var b = function(t) {
                    var e, r, n, i, s, u, a, h, f, l, c, d, p, m, g, v, y, w, b, M, _, A, x, k, B, S, E, T, P, N, I, C, K, O, L, R, j, U, H, z, Z, F, q, V, $, D, J, X, Y, G, W, Q, tt, et, rt, nt, it, ot, st, ut, at, ht, ft;
                    for (n = 0; n < 48; n += 2) i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], s = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], u = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], h = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], f = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (u << 1 | a >>> 31), r = (p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (a << 1 | u >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = i ^ (h << 1 | f >>> 31), r = s ^ (f << 1 | h >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = u ^ (l << 1 | c >>> 31), r = a ^ (c << 1 | l >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = h ^ (d << 1 | p >>> 31), r = f ^ (p << 1 | d >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = l ^ (i << 1 | s >>> 31), r = c ^ (s << 1 | i >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, m = t[0], g = t[1], D = t[11] << 4 | t[10] >>> 28, J = t[10] << 4 | t[11] >>> 28, T = t[20] << 3 | t[21] >>> 29, P = t[21] << 3 | t[20] >>> 29, ut = t[31] << 9 | t[30] >>> 23, at = t[30] << 9 | t[31] >>> 23, F = t[40] << 18 | t[41] >>> 14, q = t[41] << 18 | t[40] >>> 14, O = t[2] << 1 | t[3] >>> 31, L = t[3] << 1 | t[2] >>> 31, v = t[13] << 12 | t[12] >>> 20, y = t[12] << 12 | t[13] >>> 20, X = t[22] << 10 | t[23] >>> 22, Y = t[23] << 10 | t[22] >>> 22, N = t[33] << 13 | t[32] >>> 19, I = t[32] << 13 | t[33] >>> 19, ht = t[42] << 2 | t[43] >>> 30, ft = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, rt = t[4] << 30 | t[5] >>> 2, R = t[14] << 6 | t[15] >>> 26, j = t[15] << 6 | t[14] >>> 26, w = t[25] << 11 | t[24] >>> 21, b = t[24] << 11 | t[25] >>> 21, G = t[34] << 15 | t[35] >>> 17, W = t[35] << 15 | t[34] >>> 17, C = t[45] << 29 | t[44] >>> 3, K = t[44] << 29 | t[45] >>> 3, k = t[6] << 28 | t[7] >>> 4, B = t[7] << 28 | t[6] >>> 4, nt = t[17] << 23 | t[16] >>> 9, it = t[16] << 23 | t[17] >>> 9, U = t[26] << 25 | t[27] >>> 7, H = t[27] << 25 | t[26] >>> 7, M = t[36] << 21 | t[37] >>> 11, _ = t[37] << 21 | t[36] >>> 11, Q = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, V = t[8] << 27 | t[9] >>> 5, $ = t[9] << 27 | t[8] >>> 5, S = t[18] << 20 | t[19] >>> 12, E = t[19] << 20 | t[18] >>> 12, ot = t[29] << 7 | t[28] >>> 25, st = t[28] << 7 | t[29] >>> 25, z = t[38] << 8 | t[39] >>> 24, Z = t[39] << 8 | t[38] >>> 24, A = t[48] << 14 | t[49] >>> 18, x = t[49] << 14 | t[48] >>> 18, t[0] = m ^ ~v & w, t[1] = g ^ ~y & b, t[10] = k ^ ~S & T, t[11] = B ^ ~E & P, t[20] = O ^ ~R & U, t[21] = L ^ ~j & H, t[30] = V ^ ~D & X, t[31] = $ ^ ~J & Y, t[40] = et ^ ~nt & ot, t[41] = rt ^ ~it & st, t[2] = v ^ ~w & M, t[3] = y ^ ~b & _, t[12] = S ^ ~T & N, t[13] = E ^ ~P & I, t[22] = R ^ ~U & z, t[23] = j ^ ~H & Z, t[32] = D ^ ~X & G, t[33] = J ^ ~Y & W, t[42] = nt ^ ~ot & ut, t[43] = it ^ ~st & at, t[4] = w ^ ~M & A, t[5] = b ^ ~_ & x, t[14] = T ^ ~N & C, t[15] = P ^ ~I & K, t[24] = U ^ ~z & F, t[25] = H ^ ~Z & q, t[34] = X ^ ~G & Q, t[35] = Y ^ ~W & tt, t[44] = ot ^ ~ut & ht, t[45] = st ^ ~at & ft, t[6] = M ^ ~A & m, t[7] = _ ^ ~x & g, t[16] = N ^ ~C & k, t[17] = I ^ ~K & B, t[26] = z ^ ~F & O, t[27] = Z ^ ~q & L, t[36] = G ^ ~Q & V, t[37] = W ^ ~tt & $, t[46] = ut ^ ~ht & et, t[47] = at ^ ~ft & rt, t[8] = A ^ ~m & v, t[9] = x ^ ~g & y, t[18] = C ^ ~k & S, t[19] = K ^ ~B & E, t[28] = F ^ ~O & R, t[29] = q ^ ~L & j, t[38] = Q ^ ~V & D, t[39] = tt ^ ~$ & J, t[48] = ht ^ ~et & nt, t[49] = ft ^ ~rt & it, t[0] ^= o[n], t[1] ^= o[n + 1]
                };
                if (r) t.exports = c;
                else
                    for (p = 0; p < d.length; ++p) e[d[p]] = c[d[p]]
            }()
        },
        3528: function(t, e, r) {
            const n = r(1857),
                i = r(3530),
                o = r(85),
                s = (r(3531), new o.ec("secp256k1")),
                {
                    keccak256: u,
                    keccak256s: a
                } = r(3532),
                h = t => {
                    const e = a(t.slice(2));
                    let r = "0x";
                    for (let n = 0; n < 40; n++) r += parseInt(e[n + 2], 16) > 7 ? t[n + 2].toUpperCase() : t[n + 2];
                    return r
                },
                f = t => {
                    const e = new Buffer(t.slice(2), "hex"),
                        r = "0x" + s.keyFromPrivate(e).getPublic(!1, "hex").slice(2),
                        n = u(r);
                    return {
                        address: h("0x" + n.slice(-40)),
                        privateKey: t
                    }
                },
                l = ([t, e, r]) => n.flatten([e, r, t]),
                c = t => [n.slice(64, n.length(t), t), n.slice(0, 32, t), n.slice(32, 64, t)],
                d = t => (e, r) => {
                    const o = s.keyFromPrivate(new Buffer(r.slice(2), "hex")).sign(new Buffer(e.slice(2), "hex"), {
                        canonical: !0
                    });
                    return l([i.fromString(n.fromNumber(t + o.recoveryParam)), n.pad(32, n.fromNat("0x" + o.r.toString(16))), n.pad(32, n.fromNat("0x" + o.s.toString(16)))])
                },
                p = d(27);
            t.exports = {
                create: t => {
                    const e = u(n.concat(n.random(32), t || n.random(32))),
                        r = n.concat(n.concat(n.random(32), e), n.random(32)),
                        i = u(r);
                    return f(i)
                },
                toChecksum: h,
                fromPrivate: f,
                sign: p,
                makeSigner: d,
                recover: (t, e) => {
                    const r = c(e),
                        i = {
                            v: n.toNumber(r[0]),
                            r: r[1].slice(2),
                            s: r[2].slice(2)
                        },
                        o = "0x" + s.recoverPubKey(new Buffer(t.slice(2), "hex"), i, i.v < 2 ? i.v : 1 - i.v % 2).encode("hex", !1).slice(2),
                        a = u(o);
                    return h("0x" + a.slice(-40))
                },
                encodeSignature: l,
                decodeSignature: c
            }
        },
        3529: function(t, e) {
            const r = (t, e) => {
                let r = [];
                for (var n = 0; n < t; ++n) r.push(e(n));
                return r
            };
            t.exports = {
                generate: r,
                replicate: (t, e) => r(t, () => e),
                concat: (t, e) => t.concat(e),
                flatten: t => {
                    let e = [];
                    for (let r = 0, n = t.length; r < n; ++r)
                        for (let n = 0, i = t[r].length; n < i; ++n) e.push(t[r][n]);
                    return e
                },
                chunksOf: (t, e) => {
                    let r = [];
                    for (let n = 0, i = e.length; n < i; n += t) r.push(e.slice(n, n + t));
                    return r
                }
            }
        },
        3530: function(t, e, r) {
            const n = r(35),
                i = r(1857),
                o = t => new n(t.slice(2), 16),
                s = t => {
                    const e = "0x" + ("0x" === t.slice(0, 2) ? new n(t.slice(2), 16) : new n(t, 10)).toString("hex");
                    return "0x0" === e ? "0x" : e
                },
                u = t => "string" == typeof t ? /^0x/.test(t) ? t : "0x" + t : "0x" + new n(t).toString("hex"),
                a = t => o(t).toNumber(),
                h = t => (e, r) => "0x" + o(e)[t](o(r)).toString("hex"),
                f = h("add"),
                l = h("mul"),
                c = h("div"),
                d = h("sub");
            t.exports = {
                toString: t => o(t).toString(10),
                fromString: s,
                toNumber: a,
                fromNumber: u,
                toEther: t => a(c(t, s("10000000000"))) / 1e8,
                fromEther: t => l(u(Math.floor(1e8 * t)), s("10000000000")),
                toUint256: t => i.pad(32, t),
                add: f,
                mul: l,
                div: c,
                sub: d
            }
        },
        3531: function(t, e) {
            t.exports = {
                encode: t => {
                    const e = t => {
                            return (e = t.toString(16)).length % 2 == 0 ? e : "0" + e;
                            var e
                        },
                        r = (t, r) => t < 56 ? e(r + t) : e(r + e(t).length / 2 + 55) + e(t),
                        n = t => {
                            if ("string" == typeof t) {
                                const e = t.slice(2);
                                return (2 != e.length || e >= "80" ? r(e.length / 2, 128) : "") + e
                            } {
                                const e = t.map(n).join("");
                                return r(e.length / 2, 192) + e
                            }
                        };
                    return "0x" + n(t)
                },
                decode: t => {
                    let e = 2;
                    const r = () => {
                            if (e >= t.length) throw "";
                            const r = t.slice(e, e + 2);
                            return r < "80" ? (e += 2, "0x" + r) : r < "c0" ? i() : o()
                        },
                        n = () => {
                            const r = parseInt(t.slice(e, e += 2), 16) % 64;
                            return r < 56 ? r : parseInt(t.slice(e, e += 2 * (r - 55)), 16)
                        },
                        i = () => {
                            const r = n();
                            return "0x" + t.slice(e, e += 2 * r)
                        },
                        o = () => {
                            const t = 2 * n() + e;
                            let i = [];
                            for (; e < t;) i.push(r());
                            return i
                        };
                    try {
                        return r()
                    } catch (t) {
                        return []
                    }
                }
            }
        },
        3532: function(t, e) {
            const r = "0123456789abcdef".split(""),
                n = [1, 256, 65536, 16777216],
                i = [0, 8, 16, 24],
                o = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                s = t => {
                    var e, r, n, i, s, u, a, h, f, l, c, d, p, m, g, v, y, w, b, M, _, A, x, k, B, S, E, T, P, N, I, C, K, O, L, R, j, U, H, z, Z, F, q, V, $, D, J, X, Y, G, W, Q, tt, et, rt, nt, it, ot, st, ut, at, ht, ft;
                    for (n = 0; n < 48; n += 2) i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], s = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], u = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], h = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], f = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (u << 1 | a >>> 31), r = (p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (a << 1 | u >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = i ^ (h << 1 | f >>> 31), r = s ^ (f << 1 | h >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = u ^ (l << 1 | c >>> 31), r = a ^ (c << 1 | l >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = h ^ (d << 1 | p >>> 31), r = f ^ (p << 1 | d >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = l ^ (i << 1 | s >>> 31), r = c ^ (s << 1 | i >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, m = t[0], g = t[1], D = t[11] << 4 | t[10] >>> 28, J = t[10] << 4 | t[11] >>> 28, T = t[20] << 3 | t[21] >>> 29, P = t[21] << 3 | t[20] >>> 29, ut = t[31] << 9 | t[30] >>> 23, at = t[30] << 9 | t[31] >>> 23, F = t[40] << 18 | t[41] >>> 14, q = t[41] << 18 | t[40] >>> 14, O = t[2] << 1 | t[3] >>> 31, L = t[3] << 1 | t[2] >>> 31, v = t[13] << 12 | t[12] >>> 20, y = t[12] << 12 | t[13] >>> 20, X = t[22] << 10 | t[23] >>> 22, Y = t[23] << 10 | t[22] >>> 22, N = t[33] << 13 | t[32] >>> 19, I = t[32] << 13 | t[33] >>> 19, ht = t[42] << 2 | t[43] >>> 30, ft = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, rt = t[4] << 30 | t[5] >>> 2, R = t[14] << 6 | t[15] >>> 26, j = t[15] << 6 | t[14] >>> 26, w = t[25] << 11 | t[24] >>> 21, b = t[24] << 11 | t[25] >>> 21, G = t[34] << 15 | t[35] >>> 17, W = t[35] << 15 | t[34] >>> 17, C = t[45] << 29 | t[44] >>> 3, K = t[44] << 29 | t[45] >>> 3, k = t[6] << 28 | t[7] >>> 4, B = t[7] << 28 | t[6] >>> 4, nt = t[17] << 23 | t[16] >>> 9, it = t[16] << 23 | t[17] >>> 9, U = t[26] << 25 | t[27] >>> 7, H = t[27] << 25 | t[26] >>> 7, M = t[36] << 21 | t[37] >>> 11, _ = t[37] << 21 | t[36] >>> 11, Q = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, V = t[8] << 27 | t[9] >>> 5, $ = t[9] << 27 | t[8] >>> 5, S = t[18] << 20 | t[19] >>> 12, E = t[19] << 20 | t[18] >>> 12, ot = t[29] << 7 | t[28] >>> 25, st = t[28] << 7 | t[29] >>> 25, z = t[38] << 8 | t[39] >>> 24, Z = t[39] << 8 | t[38] >>> 24, A = t[48] << 14 | t[49] >>> 18, x = t[49] << 14 | t[48] >>> 18, t[0] = m ^ ~v & w, t[1] = g ^ ~y & b, t[10] = k ^ ~S & T, t[11] = B ^ ~E & P, t[20] = O ^ ~R & U, t[21] = L ^ ~j & H, t[30] = V ^ ~D & X, t[31] = $ ^ ~J & Y, t[40] = et ^ ~nt & ot, t[41] = rt ^ ~it & st, t[2] = v ^ ~w & M, t[3] = y ^ ~b & _, t[12] = S ^ ~T & N, t[13] = E ^ ~P & I, t[22] = R ^ ~U & z, t[23] = j ^ ~H & Z, t[32] = D ^ ~X & G, t[33] = J ^ ~Y & W, t[42] = nt ^ ~ot & ut, t[43] = it ^ ~st & at, t[4] = w ^ ~M & A, t[5] = b ^ ~_ & x, t[14] = T ^ ~N & C, t[15] = P ^ ~I & K, t[24] = U ^ ~z & F, t[25] = H ^ ~Z & q, t[34] = X ^ ~G & Q, t[35] = Y ^ ~W & tt, t[44] = ot ^ ~ut & ht, t[45] = st ^ ~at & ft, t[6] = M ^ ~A & m, t[7] = _ ^ ~x & g, t[16] = N ^ ~C & k, t[17] = I ^ ~K & B, t[26] = z ^ ~F & O, t[27] = Z ^ ~q & L, t[36] = G ^ ~Q & V, t[37] = W ^ ~tt & $, t[46] = ut ^ ~ht & et, t[47] = at ^ ~ft & rt, t[8] = A ^ ~m & v, t[9] = x ^ ~g & y, t[18] = C ^ ~k & S, t[19] = K ^ ~B & E, t[28] = F ^ ~O & R, t[29] = q ^ ~L & j, t[38] = Q ^ ~V & D, t[39] = tt ^ ~$ & J, t[48] = ht ^ ~et & nt, t[49] = ft ^ ~rt & it, t[0] ^= o[n], t[1] ^= o[n + 1]
                },
                u = t => e => {
                    var o;
                    if ("0x" === e.slice(0, 2)) {
                        o = [];
                        for (var u = 2, a = e.length; u < a; u += 2) o.push(parseInt(e.slice(u, u + 2), 16))
                    } else o = e;
                    return ((t, e) => {
                        for (var o, u = e.length, a = t.blocks, h = t.blockCount << 2, f = t.blockCount, l = t.outputBlocks, c = t.s, d = 0; d < u;) {
                            if (t.reset)
                                for (t.reset = !1, a[0] = t.block, g = 1; g < f + 1; ++g) a[g] = 0;
                            if ("string" != typeof e)
                                for (g = t.start; d < u && g < h; ++d) a[g >> 2] |= e[d] << i[3 & g++];
                            else
                                for (g = t.start; d < u && g < h; ++d)(o = e.charCodeAt(d)) < 128 ? a[g >> 2] |= o << i[3 & g++] : o < 2048 ? (a[g >> 2] |= (192 | o >> 6) << i[3 & g++], a[g >> 2] |= (128 | 63 & o) << i[3 & g++]) : o < 55296 || o >= 57344 ? (a[g >> 2] |= (224 | o >> 12) << i[3 & g++], a[g >> 2] |= (128 | o >> 6 & 63) << i[3 & g++], a[g >> 2] |= (128 | 63 & o) << i[3 & g++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++d)), a[g >> 2] |= (240 | o >> 18) << i[3 & g++], a[g >> 2] |= (128 | o >> 12 & 63) << i[3 & g++], a[g >> 2] |= (128 | o >> 6 & 63) << i[3 & g++], a[g >> 2] |= (128 | 63 & o) << i[3 & g++]);
                            if (t.lastByteIndex = g, g >= h) {
                                for (t.start = g - h, t.block = a[f], g = 0; g < f; ++g) c[g] ^= a[g];
                                s(c), t.reset = !0
                            } else t.start = g
                        }
                        if (a[(g = t.lastByteIndex) >> 2] |= n[3 & g], t.lastByteIndex === h)
                            for (a[0] = a[f], g = 1; g < f + 1; ++g) a[g] = 0;
                        for (a[f - 1] |= 2147483648, g = 0; g < f; ++g) c[g] ^= a[g];
                        s(c);
                        for (var p, m = "", g = 0, v = 0; v < l;) {
                            for (g = 0; g < f && v < l; ++g, ++v) p = c[g], m += r[p >> 4 & 15] + r[15 & p] + r[p >> 12 & 15] + r[p >> 8 & 15] + r[p >> 20 & 15] + r[p >> 16 & 15] + r[p >> 28 & 15] + r[p >> 24 & 15];
                            v % f == 0 && (s(c), g = 0)
                        }
                        return "0x" + m
                    })((t => {
                        return {
                            blocks: [],
                            reset: !0,
                            block: 0,
                            start: 0,
                            blockCount: 1600 - (t << 1) >> 5,
                            outputBlocks: t >> 5,
                            s: (e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [].concat(e, e, e, e, e))
                        };
                        var e
                    })(t), o)
                };
            t.exports = {
                keccak256: u(256),
                keccak512: u(512),
                keccak256s: u(256),
                keccak512s: u(512)
            }
        },
        412: function(t, e, r) {
            "use strict";

            function n(t) {
                if ("string" != typeof t) throw new Error("[isHexPrefixed] input must be type 'string', received type ".concat(typeof t));
                return "0" === t[0] && "x" === t[1]
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isHexString = e.getKeys = e.fromAscii = e.fromUtf8 = e.toAscii = e.arrayContainsArray = e.getBinarySize = e.padToEven = e.stripHexPrefix = e.isHexPrefixed = void 0, e.isHexPrefixed = n;

            function i(t) {
                var e = t;
                if ("string" != typeof e) throw new Error("[padToEven] value must be type 'string', received ".concat(typeof e));
                return e.length % 2 && (e = "0".concat(e)), e
            }
            e.stripHexPrefix = function(t) {
                if ("string" != typeof t) throw new Error("[stripHexPrefix] input must be type 'string', received ".concat(typeof t));
                return n(t) ? t.slice(2) : t
            }, e.padToEven = i, e.getBinarySize = function(t) {
                if ("string" != typeof t) throw new Error("[getBinarySize] method requires input type 'string', recieved ".concat(typeof t));
                return Buffer.byteLength(t, "utf8")
            }, e.arrayContainsArray = function(t, e, r) {
                if (!0 !== Array.isArray(t)) throw new Error("[arrayContainsArray] method requires input 'superset' to be an array, got type '".concat(typeof t, "'"));
                if (!0 !== Array.isArray(e)) throw new Error("[arrayContainsArray] method requires input 'subset' to be an array, got type '".concat(typeof e, "'"));
                return e[r ? "some" : "every"]((function(e) {
                    return t.indexOf(e) >= 0
                }))
            }, e.toAscii = function(t) {
                var e = "",
                    r = 0,
                    n = t.length;
                for ("0x" === t.substring(0, 2) && (r = 2); r < n; r += 2) {
                    var i = parseInt(t.substr(r, 2), 16);
                    e += String.fromCharCode(i)
                }
                return e
            }, e.fromUtf8 = function(t) {
                var e = Buffer.from(t, "utf8");
                return "0x".concat(i(e.toString("hex")).replace(/^0+|0+$/g, ""))
            }, e.fromAscii = function(t) {
                for (var e = "", r = 0; r < t.length; r++) {
                    var n = t.charCodeAt(r).toString(16);
                    e += n.length < 2 ? "0".concat(n) : n
                }
                return "0x".concat(e)
            }, e.getKeys = function(t, e, r) {
                if (!Array.isArray(t)) throw new Error("[getKeys] method expects input 'params' to be an array, got ".concat(typeof t));
                if ("string" != typeof e) throw new Error("[getKeys] method expects input 'key' to be type 'string', got ".concat(typeof t));
                for (var n = [], i = 0; i < t.length; i++) {
                    var o = t[i][e];
                    if (r && !o) o = "";
                    else if ("string" != typeof o) throw new Error("invalid abi - expected type 'string', received ".concat(typeof o));
                    n.push(o)
                }
                return n
            }, e.isHexString = function(t, e) {
                return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e)
            }
        },
        622: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.assertIsString = e.assertIsArray = e.assertIsBuffer = e.assertIsHexString = void 0;
            var n = r(412);
            e.assertIsHexString = function(t) {
                if (!(0, n.isHexString)(t)) {
                    var e = "This method only supports 0x-prefixed hex strings but input was: ".concat(t);
                    throw new Error(e)
                }
            };
            e.assertIsBuffer = function(t) {
                if (!Buffer.isBuffer(t)) {
                    var e = "This method only supports Buffer but input was: ".concat(t);
                    throw new Error(e)
                }
            };
            e.assertIsArray = function(t) {
                if (!Array.isArray(t)) {
                    var e = "This method only supports number arrays but input was: ".concat(t);
                    throw new Error(e)
                }
            };
            e.assertIsString = function(t) {
                if ("string" != typeof t) {
                    var e = "This method only supports strings but input was: ".concat(t);
                    throw new Error(e)
                }
            }
        }
    }
]);