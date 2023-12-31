(window.webpackJsonp = window.webpackJsonp || []).push([
    [189], {
        1002: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LiquidityPoolAsset = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                a = s(r(323)),
                o = s(r(51)),
                i = r(335),
                u = r(1616);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.LiquidityPoolAsset = function() {
                function e(t, r, n) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), !(t && t instanceof i.Asset)) throw new Error("assetA is invalid");
                    if (!(r && r instanceof i.Asset)) throw new Error("assetB is invalid");
                    if (-1 !== i.Asset.compare(t, r)) throw new Error("Assets are not in lexicographic order");
                    if (!n || n !== u.LiquidityPoolFeeV18) throw new Error("fee is invalid");
                    this.assetA = t, this.assetB = r, this.fee = n
                }
                return n(e, [{
                    key: "toXDRObject",
                    value: function() {
                        var e = new o.default.LiquidityPoolConstantProductParameters({
                                assetA: this.assetA.toXDRObject(),
                                assetB: this.assetB.toXDRObject(),
                                fee: this.fee
                            }),
                            t = new o.default.LiquidityPoolParameters("liquidityPoolConstantProduct", e);
                        return new o.default.ChangeTrustAsset("assetTypePoolShare", t)
                    }
                }, {
                    key: "getLiquidityPoolParameters",
                    value: function() {
                        return (0, a.default)({
                            assetA: this.assetA,
                            assetB: this.assetB,
                            fee: this.fee
                        })
                    }
                }, {
                    key: "getAssetType",
                    value: function() {
                        return "liquidity_pool_shares"
                    }
                }, {
                    key: "equals",
                    value: function(e) {
                        return this.assetA.equals(e.assetA) && this.assetB.equals(e.assetB) && this.fee === e.fee
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "liquidity_pool:" + (0, u.getLiquidityPoolId)("constant_product", this.getLiquidityPoolParameters()).toString("hex")
                    }
                }], [{
                    key: "fromOperation",
                    value: function(e) {
                        var t = e.switch();
                        if (t === o.default.AssetType.assetTypePoolShare()) {
                            var r = e.liquidityPool().constantProduct();
                            return new this(i.Asset.fromOperation(r.assetA()), i.Asset.fromOperation(r.assetB()), r.fee())
                        }
                        throw new Error("Invalid asset type: " + t.name)
                    }
                }]), e
            }()
        },
        1003: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LiquidityPoolId = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                a = i(r(323)),
                o = i(r(51));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.LiquidityPoolId = function() {
                function e(t) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), !t) throw new Error("liquidityPoolId cannot be empty");
                    if (!/^[a-f0-9]{64}$/.test(t)) throw new Error("Liquidity pool ID is not a valid hash");
                    this.liquidityPoolId = t
                }
                return n(e, [{
                    key: "toXDRObject",
                    value: function() {
                        var e = o.default.PoolId.fromXDR(this.liquidityPoolId, "hex");
                        return new o.default.TrustLineAsset("assetTypePoolShare", e)
                    }
                }, {
                    key: "getLiquidityPoolId",
                    value: function() {
                        return (0, a.default)(this.liquidityPoolId)
                    }
                }, {
                    key: "getAssetType",
                    value: function() {
                        return "liquidity_pool_shares"
                    }
                }, {
                    key: "equals",
                    value: function(e) {
                        return this.liquidityPoolId === e.getLiquidityPoolId()
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "liquidity_pool:" + this.liquidityPoolId
                    }
                }], [{
                    key: "fromOperation",
                    value: function(e) {
                        var t = e.switch();
                        if (t === o.default.AssetType.assetTypePoolShare()) return new this(e.liquidityPoolId().toString("hex"));
                        throw new Error("Invalid asset type: " + t.name)
                    }
                }]), e
            }()
        },
        1004: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Memo = t.MemoReturn = t.MemoHash = t.MemoText = t.MemoID = t.MemoNone = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                a = c(r(140)),
                o = c(r(161)),
                i = c(r(323)),
                u = r(252),
                s = c(r(285)),
                l = c(r(51));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var f = t.MemoNone = "none",
                y = t.MemoID = "id",
                h = t.MemoText = "text",
                p = t.MemoHash = "hash",
                m = t.MemoReturn = "return",
                v = function() {
                    function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        switch (d(this, e), this._type = t, this._value = r, this._type) {
                            case f:
                                break;
                            case y:
                                e._validateIdValue(r);
                                break;
                            case h:
                                e._validateTextValue(r);
                                break;
                            case p:
                            case m:
                                e._validateHashValue(r), (0, o.default)(r) && (this._value = Buffer.from(r, "hex"));
                                break;
                            default:
                                throw new Error("Invalid memo type")
                        }
                    }
                    return n(e, [{
                        key: "toXDRObject",
                        value: function() {
                            switch (this._type) {
                                case f:
                                    return l.default.Memo.memoNone();
                                case y:
                                    return l.default.Memo.memoId(u.UnsignedHyper.fromString(this._value));
                                case h:
                                    return l.default.Memo.memoText(this._value);
                                case p:
                                    return l.default.Memo.memoHash(this._value);
                                case m:
                                    return l.default.Memo.memoReturn(this._value);
                                default:
                                    return null
                            }
                        }
                    }, {
                        key: "type",
                        get: function() {
                            return (0, i.default)(this._type)
                        },
                        set: function(e) {
                            throw new Error("Memo is immutable")
                        }
                    }, {
                        key: "value",
                        get: function() {
                            switch (this._type) {
                                case f:
                                    return null;
                                case y:
                                case h:
                                    return (0, i.default)(this._value);
                                case p:
                                case m:
                                    return Buffer.from(this._value);
                                default:
                                    throw new Error("Invalid memo type")
                            }
                        },
                        set: function(e) {
                            throw new Error("Memo is immutable")
                        }
                    }], [{
                        key: "_validateIdValue",
                        value: function(e) {
                            var t = new Error("Expects a int64 as a string. Got " + e);
                            if (!(0, o.default)(e)) throw t;
                            var r = void 0;
                            try {
                                r = new s.default(e)
                            } catch (e) {
                                throw t
                            }
                            if (!r.isFinite()) throw t;
                            if (r.isNaN()) throw t
                        }
                    }, {
                        key: "_validateTextValue",
                        value: function(e) {
                            if (!l.default.Memo.armTypeForArm("text").isValid(e)) throw new Error("Expects string, array or buffer, max 28 bytes")
                        }
                    }, {
                        key: "_validateHashValue",
                        value: function(e) {
                            var t = new Error("Expects a 32 byte hash value or hex encoded string. Got " + e);
                            if (null === e || (0, a.default)(e)) throw t;
                            var r = void 0;
                            if ((0, o.default)(e)) {
                                if (!/^[0-9A-Fa-f]{64}$/g.test(e)) throw t;
                                r = Buffer.from(e, "hex")
                            } else {
                                if (!Buffer.isBuffer(e)) throw t;
                                r = Buffer.from(e)
                            }
                            if (!r.length || 32 !== r.length) throw t
                        }
                    }, {
                        key: "none",
                        value: function() {
                            return new e(f)
                        }
                    }, {
                        key: "text",
                        value: function(t) {
                            return new e(h, t)
                        }
                    }, {
                        key: "id",
                        value: function(t) {
                            return new e(y, t)
                        }
                    }, {
                        key: "hash",
                        value: function(t) {
                            return new e(p, t)
                        }
                    }, {
                        key: "return",
                        value: function(t) {
                            return new e(m, t)
                        }
                    }, {
                        key: "fromXDRObject",
                        value: function(t) {
                            switch (t.arm()) {
                                case "id":
                                    return e.id(t.value().toString());
                                case "text":
                                    return e.text(t.value());
                                case "hash":
                                    return e.hash(t.value());
                                case "retHash":
                                    return e.return(t.value())
                            }
                            if (void 0 === t.value()) return e.none();
                            throw new Error("Unknown type")
                        }
                    }]), e
                }();
            t.Memo = v
        },
        154: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StrKey = void 0;
            var n = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }();
            t.decodeCheck = h, t.encodeCheck = p;
            var a = c(r(2357)),
                o = c(r(5388)),
                i = c(r(140)),
                u = c(r(1401)),
                s = c(r(161)),
                l = r(2841);

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = {
                    ed25519PublicKey: 48,
                    ed25519SecretSeed: 144,
                    med25519PublicKey: 96,
                    preAuthTx: 152,
                    sha256Hash: 184,
                    signedPayload: 120
                },
                f = {
                    G: "ed25519PublicKey",
                    S: "ed25519SecretSeed",
                    M: "med25519PublicKey",
                    T: "preAuthTx",
                    X: "sha256Hash",
                    P: "signedPayload"
                };
            t.StrKey = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return n(e, null, [{
                    key: "encodeEd25519PublicKey",
                    value: function(e) {
                        return p("ed25519PublicKey", e)
                    }
                }, {
                    key: "decodeEd25519PublicKey",
                    value: function(e) {
                        return h("ed25519PublicKey", e)
                    }
                }, {
                    key: "isValidEd25519PublicKey",
                    value: function(e) {
                        return y("ed25519PublicKey", e)
                    }
                }, {
                    key: "encodeEd25519SecretSeed",
                    value: function(e) {
                        return p("ed25519SecretSeed", e)
                    }
                }, {
                    key: "decodeEd25519SecretSeed",
                    value: function(e) {
                        return h("ed25519SecretSeed", e)
                    }
                }, {
                    key: "isValidEd25519SecretSeed",
                    value: function(e) {
                        return y("ed25519SecretSeed", e)
                    }
                }, {
                    key: "encodeMed25519PublicKey",
                    value: function(e) {
                        return p("med25519PublicKey", e)
                    }
                }, {
                    key: "decodeMed25519PublicKey",
                    value: function(e) {
                        return h("med25519PublicKey", e)
                    }
                }, {
                    key: "isValidMed25519PublicKey",
                    value: function(e) {
                        return y("med25519PublicKey", e)
                    }
                }, {
                    key: "encodePreAuthTx",
                    value: function(e) {
                        return p("preAuthTx", e)
                    }
                }, {
                    key: "decodePreAuthTx",
                    value: function(e) {
                        return h("preAuthTx", e)
                    }
                }, {
                    key: "encodeSha256Hash",
                    value: function(e) {
                        return p("sha256Hash", e)
                    }
                }, {
                    key: "decodeSha256Hash",
                    value: function(e) {
                        return h("sha256Hash", e)
                    }
                }, {
                    key: "encodeSignedPayload",
                    value: function(e) {
                        return p("signedPayload", e)
                    }
                }, {
                    key: "decodeSignedPayload",
                    value: function(e) {
                        return h("signedPayload", e)
                    }
                }, {
                    key: "isValidSignedPayload",
                    value: function(e) {
                        return y("signedPayload", e)
                    }
                }, {
                    key: "getVersionByteForPrefix",
                    value: function(e) {
                        return f[e[0]]
                    }
                }]), e
            }();

            function y(e, t) {
                if (!(0, s.default)(t)) return !1;
                switch (e) {
                    case "ed25519PublicKey":
                    case "ed25519SecretSeed":
                    case "preAuthTx":
                    case "sha256Hash":
                        if (56 !== t.length) return !1;
                        break;
                    case "med25519PublicKey":
                        if (69 !== t.length) return !1;
                        break;
                    case "signedPayload":
                        if (t.length < 56 || t.length > 165) return !1;
                        break;
                    default:
                        return !1
                }
                var r = "";
                try {
                    r = h(e, t)
                } catch (e) {
                    return !1
                }
                switch (e) {
                    case "ed25519PublicKey":
                    case "ed25519SecretSeed":
                    case "preAuthTx":
                    case "sha256Hash":
                        return 32 === r.length;
                    case "med25519PublicKey":
                        return 40 === r.length;
                    case "signedPayload":
                        return r.length >= 40 && r.length <= 100;
                    default:
                        return !1
                }
            }

            function h(e, t) {
                if (!(0, s.default)(t)) throw new TypeError("encoded argument must be of type String");
                var r = a.default.decode(t),
                    n = r[0],
                    o = r.slice(0, -2),
                    u = o.slice(1),
                    c = r.slice(-2);
                if (t !== a.default.encode(r)) throw new Error("invalid encoded string");
                var f = d[e];
                if ((0, i.default)(f)) throw new Error(e + " is not a valid version byte name. Expected one of " + Object.keys(d).join(", "));
                if (n !== f) throw new Error("invalid version byte. expected " + f + ", got " + n);
                var y = m(o);
                if (!(0, l.verifyChecksum)(y, c)) throw new Error("invalid checksum");
                return Buffer.from(u)
            }

            function p(e, t) {
                if ((0, u.default)(t) || (0, i.default)(t)) throw new Error("cannot encode null data");
                var r = d[e];
                if ((0, i.default)(r)) throw new Error(e + " is not a valid version byte name. Expected one of " + Object.keys(d).join(", "));
                t = Buffer.from(t);
                var n = Buffer.from([r]),
                    o = Buffer.concat([n, t]),
                    s = m(o),
                    l = Buffer.concat([o, s]);
                return a.default.encode(l)
            }

            function m(e) {
                var t = Buffer.alloc(2);
                return t.writeUInt16LE(o.default.crc16xmodem(e), 0), t
            }
        },
        1615: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sign = function(e, t) {
                return n.sign(e, t)
            }, t.verify = function(e, t, r) {
                return n.verify(e, t, r)
            }, t.generate = function(e) {
                return n.generate(e)
            };
            var n = {};
            t.FastSigning = "undefined" == typeof window ? function() {
                var e = void 0;
                try {
                    e = r(2753)
                } catch (e) {
                    return a()
                }
                return Object.keys(e).length ? (n.generate = function(t) {
                    var r = Buffer.alloc(e.crypto_sign_PUBLICKEYBYTES),
                        n = Buffer.alloc(e.crypto_sign_SECRETKEYBYTES);
                    return e.crypto_sign_seed_keypair(r, n, t), r
                }, n.sign = function(t, r) {
                    t = Buffer.from(t);
                    var n = Buffer.alloc(e.crypto_sign_BYTES);
                    return e.crypto_sign_detached(n, t, r), n
                }, n.verify = function(t, r, n) {
                    t = Buffer.from(t);
                    try {
                        return e.crypto_sign_verify_detached(r, t, n)
                    } catch (e) {
                        return !1
                    }
                }, !0) : a()
            }() : a();

            function a() {
                var e = r(73);
                return n.generate = function(t) {
                    var r = new Uint8Array(t),
                        n = e.sign.keyPair.fromSeed(r);
                    return Buffer.from(n.publicKey)
                }, n.sign = function(t, r) {
                    t = Buffer.from(t), t = new Uint8Array(t.toJSON().data), r = new Uint8Array(r.toJSON().data);
                    var n = e.sign.detached(t, r);
                    return Buffer.from(n)
                }, n.verify = function(t, r, n) {
                    return t = Buffer.from(t), t = new Uint8Array(t.toJSON().data), r = new Uint8Array(r.toJSON().data), n = new Uint8Array(n.toJSON().data), e.sign.detached.verify(t, r, n)
                }, !1
            }
        },
        1642: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Operation = t.AuthClawbackEnabledFlag = t.AuthImmutableFlag = t.AuthRevocableFlag = t.AuthRequiredFlag = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                a = r(252),
                o = w(r(285)),
                i = w(r(1395)),
                u = w(r(140)),
                s = w(r(161)),
                l = w(r(468)),
                c = w(r(2358)),
                d = r(2842),
                f = r(335),
                y = r(1002),
                h = r(1643),
                p = r(154),
                m = r(1003),
                v = w(r(51)),
                g = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(r(2843)),
                b = r(213);

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var S = 1e7,
                A = (t.AuthRequiredFlag = 1, t.AuthRevocableFlag = 2, t.AuthImmutableFlag = 4, t.AuthClawbackEnabledFlag = 8, t.Operation = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return n(e, null, [{
                        key: "setSourceAccount",
                        value: function(e, t) {
                            if (t.source) try {
                                e.sourceAccount = (0, b.decodeAddressToMuxedAccount)(t.source)
                            } catch (e) {
                                throw new Error("Source address is invalid")
                            }
                        }
                    }, {
                        key: "fromXDRObject",
                        value: function(e) {
                            var t = {};
                            e.sourceAccount() && (t.source = (0, b.encodeMuxedAccountToAddress)(e.sourceAccount()));
                            var r = e.body().value(),
                                n = e.body().switch().name;
                            switch (n) {
                                case "createAccount":
                                    t.type = "createAccount", t.destination = P(r.destination()), t.startingBalance = this._fromXDRAmount(r.startingBalance());
                                    break;
                                case "payment":
                                    t.type = "payment", t.destination = (0, b.encodeMuxedAccountToAddress)(r.destination()), t.asset = f.Asset.fromOperation(r.asset()), t.amount = this._fromXDRAmount(r.amount());
                                    break;
                                case "pathPaymentStrictReceive":
                                    t.type = "pathPaymentStrictReceive", t.sendAsset = f.Asset.fromOperation(r.sendAsset()), t.sendMax = this._fromXDRAmount(r.sendMax()), t.destination = (0, b.encodeMuxedAccountToAddress)(r.destination()), t.destAsset = f.Asset.fromOperation(r.destAsset()), t.destAmount = this._fromXDRAmount(r.destAmount()), t.path = [];
                                    var a = r.path();
                                    Object.keys(a).forEach((function(e) {
                                        t.path.push(f.Asset.fromOperation(a[e]))
                                    }));
                                    break;
                                case "pathPaymentStrictSend":
                                    t.type = "pathPaymentStrictSend", t.sendAsset = f.Asset.fromOperation(r.sendAsset()), t.sendAmount = this._fromXDRAmount(r.sendAmount()), t.destination = (0, b.encodeMuxedAccountToAddress)(r.destination()), t.destAsset = f.Asset.fromOperation(r.destAsset()), t.destMin = this._fromXDRAmount(r.destMin()), t.path = [];
                                    var o = r.path();
                                    Object.keys(o).forEach((function(e) {
                                        t.path.push(f.Asset.fromOperation(o[e]))
                                    }));
                                    break;
                                case "changeTrust":
                                    switch (t.type = "changeTrust", r.line().switch()) {
                                        case v.default.AssetType.assetTypePoolShare():
                                            t.line = y.LiquidityPoolAsset.fromOperation(r.line());
                                            break;
                                        default:
                                            t.line = f.Asset.fromOperation(r.line())
                                    }
                                    t.limit = this._fromXDRAmount(r.limit());
                                    break;
                                case "allowTrust":
                                    t.type = "allowTrust", t.trustor = P(r.trustor()), t.assetCode = r.asset().value().toString(), t.assetCode = (0, i.default)(t.assetCode, "\0"), t.authorize = r.authorize();
                                    break;
                                case "setOptions":
                                    if (t.type = "setOptions", r.inflationDest() && (t.inflationDest = P(r.inflationDest())), t.clearFlags = r.clearFlags(), t.setFlags = r.setFlags(), t.masterWeight = r.masterWeight(), t.lowThreshold = r.lowThreshold(), t.medThreshold = r.medThreshold(), t.highThreshold = r.highThreshold(), t.homeDomain = void 0 !== r.homeDomain() ? r.homeDomain().toString("ascii") : void 0, r.signer()) {
                                        var u = {},
                                            s = r.signer().key().arm();
                                        if ("ed25519" === s) u.ed25519PublicKey = P(r.signer().key());
                                        else if ("preAuthTx" === s) u.preAuthTx = r.signer().key().preAuthTx();
                                        else if ("hashX" === s) u.sha256Hash = r.signer().key().hashX();
                                        else if ("ed25519SignedPayload" === s) {
                                            var l = r.signer().key().ed25519SignedPayload();
                                            u.ed25519SignedPayload = p.StrKey.encodeSignedPayload(l.toXDR())
                                        }
                                        u.weight = r.signer().weight(), t.signer = u
                                    }
                                    break;
                                case "manageOffer":
                                case "manageSellOffer":
                                    t.type = "manageSellOffer", t.selling = f.Asset.fromOperation(r.selling()), t.buying = f.Asset.fromOperation(r.buying()), t.amount = this._fromXDRAmount(r.amount()), t.price = this._fromXDRPrice(r.price()), t.offerId = r.offerId().toString();
                                    break;
                                case "manageBuyOffer":
                                    t.type = "manageBuyOffer", t.selling = f.Asset.fromOperation(r.selling()), t.buying = f.Asset.fromOperation(r.buying()), t.buyAmount = this._fromXDRAmount(r.buyAmount()), t.price = this._fromXDRPrice(r.price()), t.offerId = r.offerId().toString();
                                    break;
                                case "createPassiveOffer":
                                case "createPassiveSellOffer":
                                    t.type = "createPassiveSellOffer", t.selling = f.Asset.fromOperation(r.selling()), t.buying = f.Asset.fromOperation(r.buying()), t.amount = this._fromXDRAmount(r.amount()), t.price = this._fromXDRPrice(r.price());
                                    break;
                                case "accountMerge":
                                    t.type = "accountMerge", t.destination = (0, b.encodeMuxedAccountToAddress)(r);
                                    break;
                                case "manageData":
                                    t.type = "manageData", t.name = r.dataName().toString("ascii"), t.value = r.dataValue();
                                    break;
                                case "inflation":
                                    t.type = "inflation";
                                    break;
                                case "bumpSequence":
                                    t.type = "bumpSequence", t.bumpTo = r.bumpTo().toString();
                                    break;
                                case "createClaimableBalance":
                                    t.type = "createClaimableBalance", t.asset = f.Asset.fromOperation(r.asset()), t.amount = this._fromXDRAmount(r.amount()), t.claimants = [], r.claimants().forEach((function(e) {
                                        t.claimants.push(h.Claimant.fromXDR(e))
                                    }));
                                    break;
                                case "claimClaimableBalance":
                                    t.type = "claimClaimableBalance", t.balanceId = r.toXDR("hex");
                                    break;
                                case "beginSponsoringFutureReserves":
                                    t.type = "beginSponsoringFutureReserves", t.sponsoredId = P(r.sponsoredId());
                                    break;
                                case "endSponsoringFutureReserves":
                                    t.type = "endSponsoringFutureReserves";
                                    break;
                                case "revokeSponsorship":
                                    ! function(e, t) {
                                        switch (e.switch().name) {
                                            case "revokeSponsorshipLedgerEntry":
                                                var r = e.ledgerKey();
                                                switch (r.switch().name) {
                                                    case v.default.LedgerEntryType.account().name:
                                                        t.type = "revokeAccountSponsorship", t.account = P(r.account().accountId());
                                                        break;
                                                    case v.default.LedgerEntryType.trustline().name:
                                                        t.type = "revokeTrustlineSponsorship", t.account = P(r.trustLine().accountId());
                                                        var n = r.trustLine().asset();
                                                        switch (n.switch()) {
                                                            case v.default.AssetType.assetTypePoolShare():
                                                                t.asset = m.LiquidityPoolId.fromOperation(n);
                                                                break;
                                                            default:
                                                                t.asset = f.Asset.fromOperation(n)
                                                        }
                                                        break;
                                                    case v.default.LedgerEntryType.offer().name:
                                                        t.type = "revokeOfferSponsorship", t.seller = P(r.offer().sellerId()), t.offerId = r.offer().offerId().toString();
                                                        break;
                                                    case v.default.LedgerEntryType.data().name:
                                                        t.type = "revokeDataSponsorship", t.account = P(r.data().accountId()), t.name = r.data().dataName().toString("ascii");
                                                        break;
                                                    case v.default.LedgerEntryType.claimableBalance().name:
                                                        t.type = "revokeClaimableBalanceSponsorship", t.balanceId = r.claimableBalance().balanceId().toXDR("hex");
                                                        break;
                                                    case v.default.LedgerEntryType.liquidityPool().name:
                                                        t.type = "revokeLiquidityPoolSponsorship", t.liquidityPoolId = r.liquidityPool().liquidityPoolId().toString("hex");
                                                        break;
                                                    default:
                                                        throw new Error("Unknown ledgerKey: " + e.switch().name)
                                                }
                                                break;
                                            case "revokeSponsorshipSigner":
                                                t.type = "revokeSignerSponsorship", t.account = P(e.signer().accountId()), t.signer = function(e) {
                                                    var t = {};
                                                    switch (e.switch().name) {
                                                        case v.default.SignerKeyType.signerKeyTypeEd25519().name:
                                                            t.ed25519PublicKey = p.StrKey.encodeEd25519PublicKey(e.ed25519());
                                                            break;
                                                        case v.default.SignerKeyType.signerKeyTypePreAuthTx().name:
                                                            t.preAuthTx = e.preAuthTx().toString("hex");
                                                            break;
                                                        case v.default.SignerKeyType.signerKeyTypeHashX().name:
                                                            t.sha256Hash = e.hashX().toString("hex");
                                                            break;
                                                        default:
                                                            throw new Error("Unknown signerKey: " + e.switch().name)
                                                    }
                                                    return t
                                                }(e.signer().signerKey());
                                                break;
                                            default:
                                                throw new Error("Unknown revokeSponsorship: " + e.switch().name)
                                        }
                                    }(r, t);
                                    break;
                                case "clawback":
                                    t.type = "clawback", t.amount = this._fromXDRAmount(r.amount()), t.from = (0, b.encodeMuxedAccountToAddress)(r.from()), t.asset = f.Asset.fromOperation(r.asset());
                                    break;
                                case "clawbackClaimableBalance":
                                    t.type = "clawbackClaimableBalance", t.balanceId = r.toXDR("hex");
                                    break;
                                case "setTrustLineFlags":
                                    t.type = "setTrustLineFlags", t.asset = f.Asset.fromOperation(r.asset()), t.trustor = P(r.trustor());
                                    var c = r.clearFlags(),
                                        d = r.setFlags(),
                                        g = {
                                            authorized: v.default.TrustLineFlags.authorizedFlag(),
                                            authorizedToMaintainLiabilities: v.default.TrustLineFlags.authorizedToMaintainLiabilitiesFlag(),
                                            clawbackEnabled: v.default.TrustLineFlags.trustlineClawbackEnabledFlag()
                                        };
                                    t.flags = {}, Object.keys(g).forEach((function(e) {
                                        var r;
                                        t.flags[e] = (r = g[e].value, !!(d & r) || !(c & r) && void 0)
                                    }));
                                    break;
                                case "liquidityPoolDeposit":
                                    t.type = "liquidityPoolDeposit", t.liquidityPoolId = r.liquidityPoolId().toString("hex"), t.maxAmountA = this._fromXDRAmount(r.maxAmountA()), t.maxAmountB = this._fromXDRAmount(r.maxAmountB()), t.minPrice = this._fromXDRPrice(r.minPrice()), t.maxPrice = this._fromXDRPrice(r.maxPrice());
                                    break;
                                case "liquidityPoolWithdraw":
                                    t.type = "liquidityPoolWithdraw", t.liquidityPoolId = r.liquidityPoolId().toString("hex"), t.amount = this._fromXDRAmount(r.amount()), t.minAmountA = this._fromXDRAmount(r.minAmountA()), t.minAmountB = this._fromXDRAmount(r.minAmountB());
                                    break;
                                default:
                                    throw new Error("Unknown operation: " + n)
                            }
                            return t
                        }
                    }, {
                        key: "isValidAmount",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!(0, s.default)(e)) return !1;
                            var r = void 0;
                            try {
                                r = new o.default(e)
                            } catch (e) {
                                return !1
                            }
                            return !(!t && r.isZero() || r.isNegative() || r.times(S).greaterThan(new o.default("9223372036854775807").toString()) || r.decimalPlaces() > 7 || r.isNaN() || !r.isFinite())
                        }
                    }, {
                        key: "constructAmountRequirementsError",
                        value: function(e) {
                            return e + " argument must be of type String, represent a positive number and have at most 7 digits after the decimal"
                        }
                    }, {
                        key: "_checkUnsignedIntValue",
                        value: function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            if (!(0, u.default)(t)) switch ((0, s.default)(t) && (t = parseFloat(t)), !0) {
                                case !(0, l.default)(t) || !(0, c.default)(t) || t % 1 != 0:
                                    throw new Error(e + " value is invalid");
                                case t < 0:
                                    throw new Error(e + " value must be unsigned");
                                case !r || r && r(t, e):
                                    return t;
                                default:
                                    throw new Error(e + " value is invalid")
                            }
                        }
                    }, {
                        key: "_toXDRAmount",
                        value: function(e) {
                            var t = new o.default(e).mul(S);
                            return a.Hyper.fromString(t.toString())
                        }
                    }, {
                        key: "_fromXDRAmount",
                        value: function(e) {
                            return new o.default(e).div(S).toFixed(7)
                        }
                    }, {
                        key: "_fromXDRPrice",
                        value: function(e) {
                            return new o.default(e.n()).div(new o.default(e.d())).toString()
                        }
                    }, {
                        key: "_toXDRPrice",
                        value: function(e) {
                            var t = void 0;
                            if (e.n && e.d) t = new v.default.Price(e);
                            else {
                                e = new o.default(e);
                                var r = (0, d.best_r)(e);
                                t = new v.default.Price({
                                    n: parseInt(r[0], 10),
                                    d: parseInt(r[1], 10)
                                })
                            }
                            if (t.n() < 0 || t.d() < 0) throw new Error("price must be positive");
                            return t
                        }
                    }]), e
                }());

            function P(e) {
                return p.StrKey.encodeEd25519PublicKey(e.ed25519())
            }
            A.accountMerge = g.accountMerge, A.allowTrust = g.allowTrust, A.bumpSequence = g.bumpSequence, A.changeTrust = g.changeTrust, A.createAccount = g.createAccount, A.createClaimableBalance = g.createClaimableBalance, A.claimClaimableBalance = g.claimClaimableBalance, A.clawbackClaimableBalance = g.clawbackClaimableBalance, A.createPassiveSellOffer = g.createPassiveSellOffer, A.inflation = g.inflation, A.manageData = g.manageData, A.manageSellOffer = g.manageSellOffer, A.manageBuyOffer = g.manageBuyOffer, A.pathPaymentStrictReceive = g.pathPaymentStrictReceive, A.pathPaymentStrictSend = g.pathPaymentStrictSend, A.payment = g.payment, A.setOptions = g.setOptions, A.beginSponsoringFutureReserves = g.beginSponsoringFutureReserves, A.endSponsoringFutureReserves = g.endSponsoringFutureReserves, A.revokeAccountSponsorship = g.revokeAccountSponsorship, A.revokeTrustlineSponsorship = g.revokeTrustlineSponsorship, A.revokeOfferSponsorship = g.revokeOfferSponsorship, A.revokeDataSponsorship = g.revokeDataSponsorship, A.revokeClaimableBalanceSponsorship = g.revokeClaimableBalanceSponsorship, A.revokeLiquidityPoolSponsorship = g.revokeLiquidityPoolSponsorship, A.revokeSignerSponsorship = g.revokeSignerSponsorship, A.clawback = g.clawback, A.setTrustLineFlags = g.setTrustLineFlags, A.liquidityPoolDeposit = g.liquidityPoolDeposit, A.liquidityPoolWithdraw = g.liquidityPoolWithdraw
        },
        1644: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.claimClaimableBalance = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(e.balanceId);
                var t = {};
                t.balanceId = o.default.ClaimableBalanceId.fromXDR(e.balanceId, "hex");
                var r = new o.default.ClaimClaimableBalanceOp(t),
                    n = {};
                return n.body = o.default.OperationBody.claimClaimableBalance(r), this.setSourceAccount(n, e), new o.default.Operation(n)
            }, t.validateClaimableBalanceId = i;
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                };

            function i(e) {
                if ("string" != typeof e || 72 !== e.length) throw new Error("must provide a valid claimable balance id")
            }
        },
        1646: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SignerKey = void 0;
            var n, a = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                o = r(51),
                i = (n = o) && n.__esModule ? n : {
                    default: n
                },
                u = r(154);
            t.SignerKey = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return a(e, null, [{
                    key: "decodeAddress",
                    value: function(e) {
                        var t = {
                                ed25519PublicKey: i.default.SignerKey.signerKeyTypeEd25519,
                                preAuthTx: i.default.SignerKey.signerKeyTypePreAuthTx,
                                sha256Hash: i.default.SignerKey.signerKeyTypeHashX,
                                signedPayload: i.default.SignerKey.signerKeyTypeEd25519SignedPayload
                            },
                            r = u.StrKey.getVersionByteForPrefix(e),
                            n = t[r];
                        if (!n) throw new Error("invalid signer key type (" + r + ")");
                        var a = (0, u.decodeCheck)(r, e);
                        switch (r) {
                            case "signedPayload":
                                return n(new i.default.SignerKeyEd25519SignedPayload({
                                    ed25519: a.slice(0, 32),
                                    payload: a.slice(36)
                                }));
                            case "ed25519PublicKey":
                            case "preAuthTx":
                            case "sha256Hash":
                            default:
                                return n(a)
                        }
                    }
                }, {
                    key: "encodeSignerKey",
                    value: function(e) {
                        var t = void 0,
                            r = void 0;
                        switch (e.switch()) {
                            case i.default.SignerKeyType.signerKeyTypeEd25519():
                                t = "ed25519PublicKey", r = e.value();
                                break;
                            case i.default.SignerKeyType.signerKeyTypePreAuthTx():
                                t = "preAuthTx", r = e.value();
                                break;
                            case i.default.SignerKeyType.signerKeyTypeHashX():
                                t = "sha256Hash", r = e.value();
                                break;
                            case i.default.SignerKeyType.signerKeyTypeEd25519SignedPayload():
                                t = "signedPayload", r = e.ed25519SignedPayload().toXDR("raw");
                                break;
                            default:
                                throw new Error("invalid SignerKey (type: " + e.switch() + ")")
                        }
                        return (0, u.encodeCheck)(t, r)
                    }
                }]), e
            }()
        },
        235: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Keypair = void 0;
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                o = f(r(73)),
                i = f(r(140)),
                u = f(r(161)),
                s = r(1615),
                l = r(154),
                c = r(385),
                d = f(r(51));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.Keypair = function() {
                function e(t) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), "ed25519" !== t.type) throw new Error("Invalid keys type");
                    if (this.type = t.type, t.secretKey) {
                        if (t.secretKey = Buffer.from(t.secretKey), 32 !== t.secretKey.length) throw new Error("secretKey length is invalid");
                        if (this._secretSeed = t.secretKey, this._publicKey = (0, s.generate)(t.secretKey), this._secretKey = Buffer.concat([t.secretKey, this._publicKey]), t.publicKey && !this._publicKey.equals(Buffer.from(t.publicKey))) throw new Error("secretKey does not match publicKey")
                    } else if (this._publicKey = Buffer.from(t.publicKey), 32 !== this._publicKey.length) throw new Error("publicKey length is invalid")
                }
                return a(e, [{
                    key: "xdrAccountId",
                    value: function() {
                        return new d.default.AccountId.publicKeyTypeEd25519(this._publicKey)
                    }
                }, {
                    key: "xdrPublicKey",
                    value: function() {
                        return new d.default.PublicKey.publicKeyTypeEd25519(this._publicKey)
                    }
                }, {
                    key: "xdrMuxedAccount",
                    value: function(e) {
                        if (!(0, i.default)(e)) {
                            if (!(0, u.default)(e)) throw new TypeError("expected string for ID, got " + (void 0 === e ? "undefined" : n(e)));
                            return d.default.MuxedAccount.keyTypeMuxedEd25519(new d.default.MuxedAccountMed25519({
                                id: d.default.Uint64.fromString(e),
                                ed25519: this._publicKey
                            }))
                        }
                        return new d.default.MuxedAccount.keyTypeEd25519(this._publicKey)
                    }
                }, {
                    key: "rawPublicKey",
                    value: function() {
                        return this._publicKey
                    }
                }, {
                    key: "signatureHint",
                    value: function() {
                        var e = this.xdrAccountId().toXDR();
                        return e.slice(e.length - 4)
                    }
                }, {
                    key: "publicKey",
                    value: function() {
                        return l.StrKey.encodeEd25519PublicKey(this._publicKey)
                    }
                }, {
                    key: "secret",
                    value: function() {
                        if (!this._secretSeed) throw new Error("no secret key available");
                        if ("ed25519" === this.type) return l.StrKey.encodeEd25519SecretSeed(this._secretSeed);
                        throw new Error("Invalid Keypair type")
                    }
                }, {
                    key: "rawSecretKey",
                    value: function() {
                        return this._secretSeed
                    }
                }, {
                    key: "canSign",
                    value: function() {
                        return !!this._secretKey
                    }
                }, {
                    key: "sign",
                    value: function(e) {
                        if (!this.canSign()) throw new Error("cannot sign: no secret key available");
                        return (0, s.sign)(e, this._secretKey)
                    }
                }, {
                    key: "verify",
                    value: function(e, t) {
                        return (0, s.verify)(e, t, this._publicKey)
                    }
                }, {
                    key: "signDecorated",
                    value: function(e) {
                        var t = this.sign(e),
                            r = this.signatureHint();
                        return new d.default.DecoratedSignature({
                            hint: r,
                            signature: t
                        })
                    }
                }, {
                    key: "signPayloadDecorated",
                    value: function(e) {
                        var t = this.sign(e),
                            r = this.signatureHint(),
                            n = Buffer.from(e.slice(-4));
                        return n.length < 4 && (n = Buffer.concat([n, Buffer.alloc(4 - e.length, 0)])), new d.default.DecoratedSignature({
                            hint: n.map((function(e, t) {
                                return e ^ r[t]
                            })),
                            signature: t
                        })
                    }
                }], [{
                    key: "fromSecret",
                    value: function(e) {
                        var t = l.StrKey.decodeEd25519SecretSeed(e);
                        return this.fromRawEd25519Seed(t)
                    }
                }, {
                    key: "fromRawEd25519Seed",
                    value: function(e) {
                        return new this({
                            type: "ed25519",
                            secretKey: e
                        })
                    }
                }, {
                    key: "master",
                    value: function(e) {
                        if (!e) throw new Error("No network selected. Please pass a network argument, e.g. `Keypair.master(Networks.PUBLIC)`.");
                        return this.fromRawEd25519Seed((0, c.hash)(e))
                    }
                }, {
                    key: "fromPublicKey",
                    value: function(e) {
                        if (32 !== (e = l.StrKey.decodeEd25519PublicKey(e)).length) throw new Error("Invalid Stellar public key");
                        return new this({
                            type: "ed25519",
                            publicKey: e
                        })
                    }
                }, {
                    key: "random",
                    value: function() {
                        var e = o.default.randomBytes(32);
                        return this.fromRawEd25519Seed(e)
                    }
                }]), e
            }()
        },
        2843: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(2844);
            Object.defineProperty(t, "manageSellOffer", {
                enumerable: !0,
                get: function() {
                    return n.manageSellOffer
                }
            });
            var a = r(2845);
            Object.defineProperty(t, "createPassiveSellOffer", {
                enumerable: !0,
                get: function() {
                    return a.createPassiveSellOffer
                }
            });
            var o = r(2846);
            Object.defineProperty(t, "accountMerge", {
                enumerable: !0,
                get: function() {
                    return o.accountMerge
                }
            });
            var i = r(2847);
            Object.defineProperty(t, "allowTrust", {
                enumerable: !0,
                get: function() {
                    return i.allowTrust
                }
            });
            var u = r(2848);
            Object.defineProperty(t, "bumpSequence", {
                enumerable: !0,
                get: function() {
                    return u.bumpSequence
                }
            });
            var s = r(2849);
            Object.defineProperty(t, "changeTrust", {
                enumerable: !0,
                get: function() {
                    return s.changeTrust
                }
            });
            var l = r(2850);
            Object.defineProperty(t, "createAccount", {
                enumerable: !0,
                get: function() {
                    return l.createAccount
                }
            });
            var c = r(2851);
            Object.defineProperty(t, "createClaimableBalance", {
                enumerable: !0,
                get: function() {
                    return c.createClaimableBalance
                }
            });
            var d = r(1644);
            Object.defineProperty(t, "claimClaimableBalance", {
                enumerable: !0,
                get: function() {
                    return d.claimClaimableBalance
                }
            });
            var f = r(2852);
            Object.defineProperty(t, "clawbackClaimableBalance", {
                enumerable: !0,
                get: function() {
                    return f.clawbackClaimableBalance
                }
            });
            var y = r(2853);
            Object.defineProperty(t, "inflation", {
                enumerable: !0,
                get: function() {
                    return y.inflation
                }
            });
            var h = r(2854);
            Object.defineProperty(t, "manageData", {
                enumerable: !0,
                get: function() {
                    return h.manageData
                }
            });
            var p = r(2855);
            Object.defineProperty(t, "manageBuyOffer", {
                enumerable: !0,
                get: function() {
                    return p.manageBuyOffer
                }
            });
            var m = r(2856);
            Object.defineProperty(t, "pathPaymentStrictReceive", {
                enumerable: !0,
                get: function() {
                    return m.pathPaymentStrictReceive
                }
            });
            var v = r(2857);
            Object.defineProperty(t, "pathPaymentStrictSend", {
                enumerable: !0,
                get: function() {
                    return v.pathPaymentStrictSend
                }
            });
            var g = r(2858);
            Object.defineProperty(t, "payment", {
                enumerable: !0,
                get: function() {
                    return g.payment
                }
            });
            var b = r(2859);
            Object.defineProperty(t, "setOptions", {
                enumerable: !0,
                get: function() {
                    return b.setOptions
                }
            });
            var w = r(2860);
            Object.defineProperty(t, "beginSponsoringFutureReserves", {
                enumerable: !0,
                get: function() {
                    return w.beginSponsoringFutureReserves
                }
            });
            var S = r(2861);
            Object.defineProperty(t, "endSponsoringFutureReserves", {
                enumerable: !0,
                get: function() {
                    return S.endSponsoringFutureReserves
                }
            });
            var A = r(2862);
            Object.defineProperty(t, "revokeAccountSponsorship", {
                enumerable: !0,
                get: function() {
                    return A.revokeAccountSponsorship
                }
            }), Object.defineProperty(t, "revokeTrustlineSponsorship", {
                enumerable: !0,
                get: function() {
                    return A.revokeTrustlineSponsorship
                }
            }), Object.defineProperty(t, "revokeOfferSponsorship", {
                enumerable: !0,
                get: function() {
                    return A.revokeOfferSponsorship
                }
            }), Object.defineProperty(t, "revokeDataSponsorship", {
                enumerable: !0,
                get: function() {
                    return A.revokeDataSponsorship
                }
            }), Object.defineProperty(t, "revokeClaimableBalanceSponsorship", {
                enumerable: !0,
                get: function() {
                    return A.revokeClaimableBalanceSponsorship
                }
            }), Object.defineProperty(t, "revokeLiquidityPoolSponsorship", {
                enumerable: !0,
                get: function() {
                    return A.revokeLiquidityPoolSponsorship
                }
            }), Object.defineProperty(t, "revokeSignerSponsorship", {
                enumerable: !0,
                get: function() {
                    return A.revokeSignerSponsorship
                }
            });
            var P = r(2863);
            Object.defineProperty(t, "clawback", {
                enumerable: !0,
                get: function() {
                    return P.clawback
                }
            });
            var O = r(2864);
            Object.defineProperty(t, "setTrustLineFlags", {
                enumerable: !0,
                get: function() {
                    return O.setTrustLineFlags
                }
            });
            var k = r(2865);
            Object.defineProperty(t, "liquidityPoolDeposit", {
                enumerable: !0,
                get: function() {
                    return k.liquidityPoolDeposit
                }
            });
            var _ = r(2866);
            Object.defineProperty(t, "liquidityPoolWithdraw", {
                enumerable: !0,
                get: function() {
                    return _.liquidityPoolWithdraw
                }
            })
        },
        2844: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.manageSellOffer = function(e) {
                var t = {};
                if (t.selling = e.selling.toXDRObject(), t.buying = e.buying.toXDRObject(), !this.isValidAmount(e.amount, !0)) throw new TypeError(this.constructAmountRequirementsError("amount"));
                if (t.amount = this._toXDRAmount(e.amount), (0, n.default)(e.price)) throw new TypeError("price argument is required");
                t.price = this._toXDRPrice(e.price), (0, n.default)(e.offerId) ? e.offerId = "0" : e.offerId = e.offerId.toString();
                t.offerId = a.Hyper.fromString(e.offerId);
                var r = new o.default.ManageSellOfferOp(t),
                    i = {};
                return i.body = o.default.OperationBody.manageSellOffer(r), this.setSourceAccount(i, e), new o.default.Operation(i)
            };
            var n = i(r(140)),
                a = r(252),
                o = i(r(51));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        2845: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createPassiveSellOffer = function(e) {
                var t = {};
                if (t.selling = e.selling.toXDRObject(), t.buying = e.buying.toXDRObject(), !this.isValidAmount(e.amount)) throw new TypeError(this.constructAmountRequirementsError("amount"));
                if (t.amount = this._toXDRAmount(e.amount), (0, n.default)(e.price)) throw new TypeError("price argument is required");
                t.price = this._toXDRPrice(e.price);
                var r = new a.default.CreatePassiveSellOfferOp(t),
                    o = {};
                return o.body = a.default.OperationBody.createPassiveSellOffer(r), this.setSourceAccount(o, e), new a.default.Operation(o)
            };
            var n = o(r(140)),
                a = o(r(51));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        2846: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.accountMerge = function(e) {
                var t = {};
                try {
                    t.body = o.default.OperationBody.accountMerge((0, i.decodeAddressToMuxedAccount)(e.destination))
                } catch (e) {
                    throw new Error("destination is invalid")
                }
                return this.setSourceAccount(t, e), new o.default.Operation(t)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                },
                i = r(213)
        },
        2847: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.allowTrust = function(e) {
                if (!i.StrKey.isValidEd25519PublicKey(e.trustor)) throw new Error("trustor is invalid");
                var t = {};
                if (t.trustor = o.Keypair.fromPublicKey(e.trustor).xdrAccountId(), e.assetCode.length <= 4) {
                    var r = (0, n.default)(e.assetCode, 4, "\0");
                    t.asset = a.default.AssetCode.assetTypeCreditAlphanum4(r)
                } else {
                    if (!(e.assetCode.length <= 12)) throw new Error("Asset code must be 12 characters at max.");
                    var u = (0, n.default)(e.assetCode, 12, "\0");
                    t.asset = a.default.AssetCode.assetTypeCreditAlphanum12(u)
                }
                "boolean" == typeof e.authorize ? e.authorize ? t.authorize = a.default.TrustLineFlags.authorizedFlag().value : t.authorize = 0 : t.authorize = e.authorize;
                var s = new a.default.AllowTrustOp(t),
                    l = {};
                return l.body = a.default.OperationBody.allowTrust(s), this.setSourceAccount(l, e), new a.default.Operation(l)
            };
            var n = u(r(1394)),
                a = u(r(51)),
                o = r(235),
                i = r(154);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        2848: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bumpSequence = function(e) {
                var t = {};
                if (!(0, o.default)(e.bumpTo)) throw new Error("bumpTo must be a string");
                try {
                    new a.default(e.bumpTo)
                } catch (e) {
                    throw new Error("bumpTo must be a stringified number")
                }
                t.bumpTo = n.Hyper.fromString(e.bumpTo);
                var r = new i.default.BumpSequenceOp(t),
                    u = {};
                return u.body = i.default.OperationBody.bumpSequence(r), this.setSourceAccount(u, e), new i.default.Operation(u)
            };
            var n = r(252),
                a = u(r(285)),
                o = u(r(161)),
                i = u(r(51));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        2849: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.changeTrust = function(e) {
                var t = {};
                if (e.asset instanceof u.Asset) t.line = e.asset.toChangeTrustXDRObject();
                else {
                    if (!(e.asset instanceof s.LiquidityPoolAsset)) throw new TypeError("asset must be Asset or LiquidityPoolAsset");
                    t.line = e.asset.toXDRObject()
                }
                if (!(0, n.default)(e.limit) && !this.isValidAmount(e.limit, !0)) throw new TypeError(this.constructAmountRequirementsError("limit"));
                e.limit ? t.limit = this._toXDRAmount(e.limit) : t.limit = a.Hyper.fromString(new o.default("9223372036854775807").toString());
                e.source && (t.source = e.source.masterKeypair);
                var r = new i.default.ChangeTrustOp(t),
                    l = {};
                return l.body = i.default.OperationBody.changeTrust(r), this.setSourceAccount(l, e), new i.default.Operation(l)
            };
            var n = l(r(140)),
                a = r(252),
                o = l(r(285)),
                i = l(r(51)),
                u = r(335),
                s = r(1002);

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        2850: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createAccount = function(e) {
                if (!u.StrKey.isValidEd25519PublicKey(e.destination)) throw new Error("destination is invalid");
                if (!this.isValidAmount(e.startingBalance, !0)) throw new TypeError("startingBalance must be of type String, represent a non-negative number and have at most 7 digits after the decimal");
                var t = {};
                t.destination = i.Keypair.fromPublicKey(e.destination).xdrAccountId(), t.startingBalance = this._toXDRAmount(e.startingBalance);
                var r = new o.default.CreateAccountOp(t),
                    n = {};
                return n.body = o.default.OperationBody.createAccount(r), this.setSourceAccount(n, e), new o.default.Operation(n)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                },
                i = r(235),
                u = r(154)
        },
        2851: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createClaimableBalance = function(e) {
                if (!(e.asset instanceof i.Asset)) throw new Error("must provide an asset for create claimable balance operation");
                if (!this.isValidAmount(e.amount)) throw new TypeError(this.constructAmountRequirementsError("amount"));
                if (!Array.isArray(e.claimants) || 0 === e.claimants.length) throw new Error("must provide at least one claimant");
                var t = {};
                t.asset = e.asset.toXDRObject(), t.amount = this._toXDRAmount(e.amount), t.claimants = e.claimants.map((function(e) {
                    return e.toXDRObject()
                }));
                var r = new o.default.CreateClaimableBalanceOp(t),
                    n = {};
                return n.body = o.default.OperationBody.createClaimableBalance(r), this.setSourceAccount(n, e), new o.default.Operation(n)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                },
                i = r(335)
        },
        2852: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.clawbackClaimableBalance = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, i.validateClaimableBalanceId)(e.balanceId);
                var t = {
                        balanceId: o.default.ClaimableBalanceId.fromXDR(e.balanceId, "hex")
                    },
                    r = {
                        body: o.default.OperationBody.clawbackClaimableBalance(new o.default.ClawbackClaimableBalanceOp(t))
                    };
                return this.setSourceAccount(r, e), new o.default.Operation(r)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                },
                i = r(1644)
        },
        2853: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.inflation = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = {};
                return t.body = o.default.OperationBody.inflation(), this.setSourceAccount(t, e), new o.default.Operation(t)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                }
        },
        2854: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.manageData = function(e) {
                var t = {};
                if (!((0, n.default)(e.name) && e.name.length <= 64)) throw new Error("name must be a string, up to 64 characters");
                if (t.dataName = e.name, !(0, n.default)(e.value) && !Buffer.isBuffer(e.value) && null !== e.value) throw new Error("value must be a string, Buffer or null");
                (0, n.default)(e.value) ? t.dataValue = Buffer.from(e.value): t.dataValue = e.value;
                if (null !== t.dataValue && t.dataValue.length > 64) throw new Error("value cannot be longer that 64 bytes");
                var r = new a.default.ManageDataOp(t),
                    o = {};
                return o.body = a.default.OperationBody.manageData(r), this.setSourceAccount(o, e), new a.default.Operation(o)
            };
            var n = o(r(161)),
                a = o(r(51));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        2855: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.manageBuyOffer = function(e) {
                var t = {};
                if (t.selling = e.selling.toXDRObject(), t.buying = e.buying.toXDRObject(), !this.isValidAmount(e.buyAmount, !0)) throw new TypeError(this.constructAmountRequirementsError("buyAmount"));
                if (t.buyAmount = this._toXDRAmount(e.buyAmount), (0, n.default)(e.price)) throw new TypeError("price argument is required");
                t.price = this._toXDRPrice(e.price), (0, n.default)(e.offerId) ? e.offerId = "0" : e.offerId = e.offerId.toString();
                t.offerId = a.Hyper.fromString(e.offerId);
                var r = new o.default.ManageBuyOfferOp(t),
                    i = {};
                return i.body = o.default.OperationBody.manageBuyOffer(r), this.setSourceAccount(i, e), new o.default.Operation(i)
            };
            var n = i(r(140)),
                a = r(252),
                o = i(r(51));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        2856: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pathPaymentStrictReceive = function(e) {
                switch (!0) {
                    case !e.sendAsset:
                        throw new Error("Must specify a send asset");
                    case !this.isValidAmount(e.sendMax):
                        throw new TypeError(this.constructAmountRequirementsError("sendMax"));
                    case !e.destAsset:
                        throw new Error("Must provide a destAsset for a payment operation");
                    case !this.isValidAmount(e.destAmount):
                        throw new TypeError(this.constructAmountRequirementsError("destAmount"))
                }
                var t = {};
                t.sendAsset = e.sendAsset.toXDRObject(), t.sendMax = this._toXDRAmount(e.sendMax);
                try {
                    t.destination = (0, i.decodeAddressToMuxedAccount)(e.destination)
                } catch (e) {
                    throw new Error("destination is invalid")
                }
                t.destAsset = e.destAsset.toXDRObject(), t.destAmount = this._toXDRAmount(e.destAmount);
                var r = e.path ? e.path : [];
                t.path = r.map((function(e) {
                    return e.toXDRObject()
                }));
                var n = new o.default.PathPaymentStrictReceiveOp(t),
                    a = {};
                return a.body = o.default.OperationBody.pathPaymentStrictReceive(n), this.setSourceAccount(a, e), new o.default.Operation(a)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                },
                i = r(213)
        },
        2857: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pathPaymentStrictSend = function(e) {
                switch (!0) {
                    case !e.sendAsset:
                        throw new Error("Must specify a send asset");
                    case !this.isValidAmount(e.sendAmount):
                        throw new TypeError(this.constructAmountRequirementsError("sendAmount"));
                    case !e.destAsset:
                        throw new Error("Must provide a destAsset for a payment operation");
                    case !this.isValidAmount(e.destMin):
                        throw new TypeError(this.constructAmountRequirementsError("destMin"))
                }
                var t = {};
                t.sendAsset = e.sendAsset.toXDRObject(), t.sendAmount = this._toXDRAmount(e.sendAmount);
                try {
                    t.destination = (0, i.decodeAddressToMuxedAccount)(e.destination)
                } catch (e) {
                    throw new Error("destination is invalid")
                }
                t.destAsset = e.destAsset.toXDRObject(), t.destMin = this._toXDRAmount(e.destMin);
                var r = e.path ? e.path : [];
                t.path = r.map((function(e) {
                    return e.toXDRObject()
                }));
                var n = new o.default.PathPaymentStrictSendOp(t),
                    a = {};
                return a.body = o.default.OperationBody.pathPaymentStrictSend(n), this.setSourceAccount(a, e), new o.default.Operation(a)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                },
                i = r(213)
        },
        2858: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.payment = function(e) {
                if (!e.asset) throw new Error("Must provide an asset for a payment operation");
                if (!this.isValidAmount(e.amount)) throw new TypeError(this.constructAmountRequirementsError("amount"));
                var t = {};
                try {
                    t.destination = (0, i.decodeAddressToMuxedAccount)(e.destination)
                } catch (e) {
                    throw new Error("destination is invalid")
                }
                t.asset = e.asset.toXDRObject(), t.amount = this._toXDRAmount(e.amount);
                var r = new o.default.PaymentOp(t),
                    n = {};
                return n.body = o.default.OperationBody.payment(r), this.setSourceAccount(n, e), new o.default.Operation(n)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                },
                i = r(213)
        },
        2859: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setOptions = function(e) {
                var t = {};
                if (e.inflationDest) {
                    if (!u.StrKey.isValidEd25519PublicKey(e.inflationDest)) throw new Error("inflationDest is invalid");
                    t.inflationDest = i.Keypair.fromPublicKey(e.inflationDest).xdrAccountId()
                }
                if (t.clearFlags = this._checkUnsignedIntValue("clearFlags", e.clearFlags), t.setFlags = this._checkUnsignedIntValue("setFlags", e.setFlags), t.masterWeight = this._checkUnsignedIntValue("masterWeight", e.masterWeight, l), t.lowThreshold = this._checkUnsignedIntValue("lowThreshold", e.lowThreshold, l), t.medThreshold = this._checkUnsignedIntValue("medThreshold", e.medThreshold, l), t.highThreshold = this._checkUnsignedIntValue("highThreshold", e.highThreshold, l), !(0, n.default)(e.homeDomain) && !(0, a.default)(e.homeDomain)) throw new TypeError("homeDomain argument must be of type String");
                if (t.homeDomain = e.homeDomain, e.signer) {
                    var r = this._checkUnsignedIntValue("signer.weight", e.signer.weight, l),
                        s = void 0,
                        c = 0;
                    if (e.signer.ed25519PublicKey) {
                        if (!u.StrKey.isValidEd25519PublicKey(e.signer.ed25519PublicKey)) throw new Error("signer.ed25519PublicKey is invalid.");
                        var d = u.StrKey.decodeEd25519PublicKey(e.signer.ed25519PublicKey);
                        s = new o.default.SignerKey.signerKeyTypeEd25519(d), c += 1
                    }
                    if (e.signer.preAuthTx) {
                        if ((0, a.default)(e.signer.preAuthTx) && (e.signer.preAuthTx = Buffer.from(e.signer.preAuthTx, "hex")), !Buffer.isBuffer(e.signer.preAuthTx) || 32 !== e.signer.preAuthTx.length) throw new Error("signer.preAuthTx must be 32 bytes Buffer.");
                        s = new o.default.SignerKey.signerKeyTypePreAuthTx(e.signer.preAuthTx), c += 1
                    }
                    if (e.signer.sha256Hash) {
                        if ((0, a.default)(e.signer.sha256Hash) && (e.signer.sha256Hash = Buffer.from(e.signer.sha256Hash, "hex")), !Buffer.isBuffer(e.signer.sha256Hash) || 32 !== e.signer.sha256Hash.length) throw new Error("signer.sha256Hash must be 32 bytes Buffer.");
                        s = new o.default.SignerKey.signerKeyTypeHashX(e.signer.sha256Hash), c += 1
                    }
                    if (e.signer.ed25519SignedPayload) {
                        if (!u.StrKey.isValidSignedPayload(e.signer.ed25519SignedPayload)) throw new Error("signer.ed25519SignedPayload is invalid.");
                        var f = u.StrKey.decodeSignedPayload(e.signer.ed25519SignedPayload),
                            y = o.default.SignerKeyEd25519SignedPayload.fromXDR(f);
                        s = o.default.SignerKey.signerKeyTypeEd25519SignedPayload(y), c += 1
                    }
                    if (1 !== c) throw new Error("Signer object must contain exactly one of signer.ed25519PublicKey, signer.sha256Hash, signer.preAuthTx.");
                    t.signer = new o.default.Signer({
                        key: s,
                        weight: r
                    })
                }
                var h = new o.default.SetOptionsOp(t),
                    p = {};
                return p.body = o.default.OperationBody.setOptions(h), this.setSourceAccount(p, e), new o.default.Operation(p)
            };
            var n = s(r(140)),
                a = s(r(161)),
                o = s(r(51)),
                i = r(235),
                u = r(154);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e, t) {
                if (e >= 0 && e <= 255) return !0;
                throw new Error(t + " value must be between 0 and 255")
            }
        },
        2860: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.beginSponsoringFutureReserves = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!i.StrKey.isValidEd25519PublicKey(e.sponsoredId)) throw new Error("sponsoredId is invalid");
                var t = new o.default.BeginSponsoringFutureReservesOp({
                        sponsoredId: u.Keypair.fromPublicKey(e.sponsoredId).xdrAccountId()
                    }),
                    r = {};
                return r.body = o.default.OperationBody.beginSponsoringFutureReserves(t), this.setSourceAccount(r, e), new o.default.Operation(r)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                },
                i = r(154),
                u = r(235)
        },
        2861: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.endSponsoringFutureReserves = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = {};
                return t.body = o.default.OperationBody.endSponsoringFutureReserves(), this.setSourceAccount(t, e), new o.default.Operation(t)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                }
        },
        2862: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.revokeAccountSponsorship = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!o.StrKey.isValidEd25519PublicKey(e.account)) throw new Error("account is invalid");
                var t = a.default.LedgerKey.account(new a.default.LedgerKeyAccount({
                        accountId: i.Keypair.fromPublicKey(e.account).xdrAccountId()
                    })),
                    r = a.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(t),
                    n = {};
                return n.body = a.default.OperationBody.revokeSponsorship(r), this.setSourceAccount(n, e), new a.default.Operation(n)
            }, t.revokeTrustlineSponsorship = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!o.StrKey.isValidEd25519PublicKey(e.account)) throw new Error("account is invalid");
                var t = void 0;
                if (e.asset instanceof u.Asset) t = e.asset.toTrustLineXDRObject();
                else {
                    if (!(e.asset instanceof s.LiquidityPoolId)) throw new TypeError("asset must be an Asset or LiquidityPoolId");
                    t = e.asset.toXDRObject()
                }
                var r = a.default.LedgerKey.trustline(new a.default.LedgerKeyTrustLine({
                        accountId: i.Keypair.fromPublicKey(e.account).xdrAccountId(),
                        asset: t
                    })),
                    n = a.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(r),
                    l = {};
                return l.body = a.default.OperationBody.revokeSponsorship(n), this.setSourceAccount(l, e), new a.default.Operation(l)
            }, t.revokeOfferSponsorship = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!o.StrKey.isValidEd25519PublicKey(e.seller)) throw new Error("seller is invalid");
                if (!(0, n.default)(e.offerId)) throw new Error("offerId is invalid");
                var t = a.default.LedgerKey.offer(new a.default.LedgerKeyOffer({
                        sellerId: i.Keypair.fromPublicKey(e.seller).xdrAccountId(),
                        offerId: a.default.Int64.fromString(e.offerId)
                    })),
                    r = a.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(t),
                    u = {};
                return u.body = a.default.OperationBody.revokeSponsorship(r), this.setSourceAccount(u, e), new a.default.Operation(u)
            }, t.revokeDataSponsorship = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!o.StrKey.isValidEd25519PublicKey(e.account)) throw new Error("account is invalid");
                if (!(0, n.default)(e.name) || e.name.length > 64) throw new Error("name must be a string, up to 64 characters");
                var t = a.default.LedgerKey.data(new a.default.LedgerKeyData({
                        accountId: i.Keypair.fromPublicKey(e.account).xdrAccountId(),
                        dataName: e.name
                    })),
                    r = a.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(t),
                    u = {};
                return u.body = a.default.OperationBody.revokeSponsorship(r), this.setSourceAccount(u, e), new a.default.Operation(u)
            }, t.revokeClaimableBalanceSponsorship = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!(0, n.default)(e.balanceId)) throw new Error("balanceId is invalid");
                var t = a.default.LedgerKey.claimableBalance(new a.default.LedgerKeyClaimableBalance({
                        balanceId: a.default.ClaimableBalanceId.fromXDR(e.balanceId, "hex")
                    })),
                    r = a.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(t),
                    o = {};
                return o.body = a.default.OperationBody.revokeSponsorship(r), this.setSourceAccount(o, e), new a.default.Operation(o)
            }, t.revokeLiquidityPoolSponsorship = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!(0, n.default)(e.liquidityPoolId)) throw new Error("liquidityPoolId is invalid");
                var t = a.default.LedgerKey.liquidityPool(new a.default.LedgerKeyLiquidityPool({
                        liquidityPoolId: a.default.PoolId.fromXDR(e.liquidityPoolId, "hex")
                    })),
                    r = a.default.RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(t),
                    o = {
                        body: a.default.OperationBody.revokeSponsorship(r)
                    };
                return this.setSourceAccount(o, e), new a.default.Operation(o)
            }, t.revokeSignerSponsorship = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!o.StrKey.isValidEd25519PublicKey(e.account)) throw new Error("account is invalid");
                var t = void 0;
                if (e.signer.ed25519PublicKey) {
                    if (!o.StrKey.isValidEd25519PublicKey(e.signer.ed25519PublicKey)) throw new Error("signer.ed25519PublicKey is invalid.");
                    var r = o.StrKey.decodeEd25519PublicKey(e.signer.ed25519PublicKey);
                    t = new a.default.SignerKey.signerKeyTypeEd25519(r)
                } else if (e.signer.preAuthTx) {
                    var u = void 0;
                    if (u = (0, n.default)(e.signer.preAuthTx) ? Buffer.from(e.signer.preAuthTx, "hex") : e.signer.preAuthTx, !Buffer.isBuffer(u) || 32 !== u.length) throw new Error("signer.preAuthTx must be 32 bytes Buffer.");
                    t = new a.default.SignerKey.signerKeyTypePreAuthTx(u)
                } else {
                    if (!e.signer.sha256Hash) throw new Error("signer is invalid");
                    var s = void 0;
                    if (s = (0, n.default)(e.signer.sha256Hash) ? Buffer.from(e.signer.sha256Hash, "hex") : e.signer.sha256Hash, !Buffer.isBuffer(s) || 32 !== s.length) throw new Error("signer.sha256Hash must be 32 bytes Buffer.");
                    t = new a.default.SignerKey.signerKeyTypeHashX(s)
                }
                var l = new a.default.RevokeSponsorshipOpSigner({
                        accountId: i.Keypair.fromPublicKey(e.account).xdrAccountId(),
                        signerKey: t
                    }),
                    c = a.default.RevokeSponsorshipOp.revokeSponsorshipSigner(l),
                    d = {};
                return d.body = a.default.OperationBody.revokeSponsorship(c), this.setSourceAccount(d, e), new a.default.Operation(d)
            };
            var n = l(r(161)),
                a = l(r(51)),
                o = r(154),
                i = r(235),
                u = r(335),
                s = r(1003);

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        2863: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.clawback = function(e) {
                var t = {};
                if (!this.isValidAmount(e.amount)) throw new TypeError(this.constructAmountRequirementsError("amount"));
                t.amount = this._toXDRAmount(e.amount), t.asset = e.asset.toXDRObject();
                try {
                    t.from = (0, i.decodeAddressToMuxedAccount)(e.from)
                } catch (e) {
                    throw new Error("from address is invalid")
                }
                var r = {
                    body: o.default.OperationBody.clawback(new o.default.ClawbackOp(t))
                };
                return this.setSourceAccount(r, e), new o.default.Operation(r)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                },
                i = r(213)
        },
        2864: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t.setTrustLineFlags = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = {};
                if ("object" !== n(e.flags) || 0 === Object.keys(e.flags).length) throw new Error("opts.flags must be a map of boolean flags to modify");
                var r = {
                        authorized: i.default.TrustLineFlags.authorizedFlag(),
                        authorizedToMaintainLiabilities: i.default.TrustLineFlags.authorizedToMaintainLiabilitiesFlag(),
                        clawbackEnabled: i.default.TrustLineFlags.trustlineClawbackEnabledFlag()
                    },
                    a = 0,
                    o = 0;
                Object.keys(e.flags).forEach((function(t) {
                    if (!Object.prototype.hasOwnProperty.call(r, t)) throw new Error("unsupported flag name specified: " + t);
                    var n = e.flags[t],
                        i = r[t].value;
                    !0 === n ? o |= i : !1 === n && (a |= i)
                })), t.trustor = u.Keypair.fromPublicKey(e.trustor).xdrAccountId(), t.asset = e.asset.toXDRObject(), t.clearFlags = a, t.setFlags = o;
                var s = {
                    body: i.default.OperationBody.setTrustLineFlags(new i.default.SetTrustLineFlagsOp(t))
                };
                return this.setSourceAccount(s, e), new i.default.Operation(s)
            };
            var a, o = r(51),
                i = (a = o) && a.__esModule ? a : {
                    default: a
                },
                u = r(235)
        },
        2865: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.liquidityPoolDeposit = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.liquidityPoolId,
                    r = e.maxAmountA,
                    o = e.maxAmountB,
                    i = e.minPrice,
                    u = e.maxPrice,
                    s = {};
                if (!t) throw new TypeError("liquidityPoolId argument is required");
                if (s.liquidityPoolId = a.default.PoolId.fromXDR(t, "hex"), !this.isValidAmount(r, !0)) throw new TypeError("maxAmountA argument is required");
                if (s.maxAmountA = this._toXDRAmount(r), !this.isValidAmount(o, !0)) throw new TypeError("maxAmountB argument is required");
                if (s.maxAmountB = this._toXDRAmount(o), (0, n.default)(i)) throw new TypeError("minPrice argument is required");
                if (s.minPrice = this._toXDRPrice(i), (0, n.default)(u)) throw new TypeError("maxPrice argument is required");
                s.maxPrice = this._toXDRPrice(u);
                var l = new a.default.LiquidityPoolDepositOp(s),
                    c = {
                        body: a.default.OperationBody.liquidityPoolDeposit(l)
                    };
                return this.setSourceAccount(c, e), new a.default.Operation(c)
            };
            var n = o(r(140)),
                a = o(r(51));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        2866: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.liquidityPoolWithdraw = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = {};
                if (!e.liquidityPoolId) throw new TypeError("liquidityPoolId argument is required");
                if (t.liquidityPoolId = o.default.PoolId.fromXDR(e.liquidityPoolId, "hex"), !this.isValidAmount(e.amount)) throw new TypeError("amount argument is required");
                if (t.amount = this._toXDRAmount(e.amount), !this.isValidAmount(e.minAmountA, !0)) throw new TypeError("minAmountA argument is required");
                if (t.minAmountA = this._toXDRAmount(e.minAmountA), !this.isValidAmount(e.minAmountB, !0)) throw new TypeError("minAmountB argument is required");
                t.minAmountB = this._toXDRAmount(e.minAmountB);
                var r = new o.default.LiquidityPoolWithdrawOp(t),
                    n = {
                        body: o.default.OperationBody.liquidityPoolWithdraw(r)
                    };
                return this.setSourceAccount(n, e), new o.default.Operation(n)
            };
            var n, a = r(51),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                }
        },
        2868: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MuxedAccount = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                a = l(r(161)),
                o = l(r(51)),
                i = r(1647),
                u = r(154),
                s = r(213);

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.MuxedAccount = function() {
                function e(t, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n = t.accountId();
                    if (!u.StrKey.isValidEd25519PublicKey(n)) throw new Error("accountId is invalid");
                    this.account = t, this._muxedXdr = (0, s.encodeMuxedAccount)(n, r), this._mAddress = (0, s.encodeMuxedAccountToAddress)(this._muxedXdr), this._id = r
                }
                return n(e, [{
                    key: "baseAccount",
                    value: function() {
                        return this.account
                    }
                }, {
                    key: "accountId",
                    value: function() {
                        return this._mAddress
                    }
                }, {
                    key: "id",
                    value: function() {
                        return this._id
                    }
                }, {
                    key: "setId",
                    value: function(e) {
                        if (!(0, a.default)(e)) throw new Error("id should be a string representing a number (uint64)");
                        return this._muxedXdr.med25519().id(o.default.Uint64.fromString(e)), this._mAddress = (0, s.encodeMuxedAccountToAddress)(this._muxedXdr), this._id = e, this
                    }
                }, {
                    key: "sequenceNumber",
                    value: function() {
                        return this.account.sequenceNumber()
                    }
                }, {
                    key: "incrementSequenceNumber",
                    value: function() {
                        return this.account.incrementSequenceNumber()
                    }
                }, {
                    key: "toXDRObject",
                    value: function() {
                        return this._muxedXdr
                    }
                }, {
                    key: "equals",
                    value: function(e) {
                        return this.accountId() === e.accountId()
                    }
                }], [{
                    key: "fromAddress",
                    value: function(t, r) {
                        var n = (0, s.decodeAddressToMuxedAccount)(t),
                            a = (0, s.extractBaseAddress)(t),
                            o = n.med25519().id().toString();
                        return new e(new i.Account(a, r), o)
                    }
                }]), e
            }()
        },
        2869: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.Networks = {
                PUBLIC: "Public Global Stellar Network ; September 2015",
                TESTNET: "Test SDF Network ; September 2015"
            }
        }
    }
]);