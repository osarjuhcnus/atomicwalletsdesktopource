(window.webpackJsonp = window.webpackJsonp || []).push([
    [82], {
        1146: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Params = t.ModuleAccount = t.BaseAccount = t.protobufPackage = void 0;
            const i = o(n(1)),
                r = o(n(8)),
                s = n(113);
            t.protobufPackage = "cosmos.auth.v1beta1";
            const a = {
                address: "",
                accountNumber: i.default.UZERO,
                sequence: i.default.UZERO
            };
            t.BaseAccount = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.address && t.uint32(10).string(e.address), void 0 !== e.pubKey && s.Any.encode(e.pubKey, t.uint32(18).fork()).ldelim(), e.accountNumber.isZero() || t.uint32(24).uint64(e.accountNumber), e.sequence.isZero() || t.uint32(32).uint64(e.sequence), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, a);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.address = n.string();
                                break;
                            case 2:
                                i.pubKey = s.Any.decode(n, n.uint32());
                                break;
                            case 3:
                                i.accountNumber = n.uint64();
                                break;
                            case 4:
                                i.sequence = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, a);
                    return void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", void 0 !== e.pubKey && null !== e.pubKey ? t.pubKey = s.Any.fromJSON(e.pubKey) : t.pubKey = void 0, void 0 !== e.accountNumber && null !== e.accountNumber ? t.accountNumber = i.default.fromString(e.accountNumber) : t.accountNumber = i.default.UZERO, void 0 !== e.sequence && null !== e.sequence ? t.sequence = i.default.fromString(e.sequence) : t.sequence = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = e.address), void 0 !== e.pubKey && (t.pubKey = e.pubKey ? s.Any.toJSON(e.pubKey) : void 0), void 0 !== e.accountNumber && (t.accountNumber = (e.accountNumber || i.default.UZERO).toString()), void 0 !== e.sequence && (t.sequence = (e.sequence || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    var t;
                    const n = Object.assign({}, a);
                    return n.address = null !== (t = e.address) && void 0 !== t ? t : "", void 0 !== e.pubKey && null !== e.pubKey ? n.pubKey = s.Any.fromPartial(e.pubKey) : n.pubKey = void 0, void 0 !== e.accountNumber && null !== e.accountNumber ? n.accountNumber = e.accountNumber : n.accountNumber = i.default.UZERO, void 0 !== e.sequence && null !== e.sequence ? n.sequence = e.sequence : n.sequence = i.default.UZERO, n
                }
            };
            const d = {
                name: "",
                permissions: ""
            };
            t.ModuleAccount = {
                encode(e, n = r.default.Writer.create()) {
                    void 0 !== e.baseAccount && t.BaseAccount.encode(e.baseAccount, n.uint32(10).fork()).ldelim(), "" !== e.name && n.uint32(18).string(e.name);
                    for (const t of e.permissions) n.uint32(26).string(t);
                    return n
                },
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, d);
                    for (s.permissions = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.baseAccount = t.BaseAccount.decode(o, o.uint32());
                                break;
                            case 2:
                                s.name = o.string();
                                break;
                            case 3:
                                s.permissions.push(o.string());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, d);
                    if (n.permissions = [], void 0 !== e.baseAccount && null !== e.baseAccount ? n.baseAccount = t.BaseAccount.fromJSON(e.baseAccount) : n.baseAccount = void 0, void 0 !== e.name && null !== e.name ? n.name = String(e.name) : n.name = "", void 0 !== e.permissions && null !== e.permissions)
                        for (const t of e.permissions) n.permissions.push(String(t));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.baseAccount && (n.baseAccount = e.baseAccount ? t.BaseAccount.toJSON(e.baseAccount) : void 0), void 0 !== e.name && (n.name = e.name), e.permissions ? n.permissions = e.permissions.map(e => e) : n.permissions = [], n
                },
                fromPartial(e) {
                    var n;
                    const o = Object.assign({}, d);
                    if (void 0 !== e.baseAccount && null !== e.baseAccount ? o.baseAccount = t.BaseAccount.fromPartial(e.baseAccount) : o.baseAccount = void 0, o.name = null !== (n = e.name) && void 0 !== n ? n : "", o.permissions = [], void 0 !== e.permissions && null !== e.permissions)
                        for (const t of e.permissions) o.permissions.push(t);
                    return o
                }
            };
            const u = {
                maxMemoCharacters: i.default.UZERO,
                txSigLimit: i.default.UZERO,
                txSizeCostPerByte: i.default.UZERO,
                sigVerifyCostEd25519: i.default.UZERO,
                sigVerifyCostSecp256k1: i.default.UZERO
            };
            t.Params = {
                encode: (e, t = r.default.Writer.create()) => (e.maxMemoCharacters.isZero() || t.uint32(8).uint64(e.maxMemoCharacters), e.txSigLimit.isZero() || t.uint32(16).uint64(e.txSigLimit), e.txSizeCostPerByte.isZero() || t.uint32(24).uint64(e.txSizeCostPerByte), e.sigVerifyCostEd25519.isZero() || t.uint32(32).uint64(e.sigVerifyCostEd25519), e.sigVerifyCostSecp256k1.isZero() || t.uint32(40).uint64(e.sigVerifyCostSecp256k1), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.maxMemoCharacters = n.uint64();
                                break;
                            case 2:
                                i.txSigLimit = n.uint64();
                                break;
                            case 3:
                                i.txSizeCostPerByte = n.uint64();
                                break;
                            case 4:
                                i.sigVerifyCostEd25519 = n.uint64();
                                break;
                            case 5:
                                i.sigVerifyCostSecp256k1 = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.maxMemoCharacters && null !== e.maxMemoCharacters ? t.maxMemoCharacters = i.default.fromString(e.maxMemoCharacters) : t.maxMemoCharacters = i.default.UZERO, void 0 !== e.txSigLimit && null !== e.txSigLimit ? t.txSigLimit = i.default.fromString(e.txSigLimit) : t.txSigLimit = i.default.UZERO, void 0 !== e.txSizeCostPerByte && null !== e.txSizeCostPerByte ? t.txSizeCostPerByte = i.default.fromString(e.txSizeCostPerByte) : t.txSizeCostPerByte = i.default.UZERO, void 0 !== e.sigVerifyCostEd25519 && null !== e.sigVerifyCostEd25519 ? t.sigVerifyCostEd25519 = i.default.fromString(e.sigVerifyCostEd25519) : t.sigVerifyCostEd25519 = i.default.UZERO, void 0 !== e.sigVerifyCostSecp256k1 && null !== e.sigVerifyCostSecp256k1 ? t.sigVerifyCostSecp256k1 = i.default.fromString(e.sigVerifyCostSecp256k1) : t.sigVerifyCostSecp256k1 = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.maxMemoCharacters && (t.maxMemoCharacters = (e.maxMemoCharacters || i.default.UZERO).toString()), void 0 !== e.txSigLimit && (t.txSigLimit = (e.txSigLimit || i.default.UZERO).toString()), void 0 !== e.txSizeCostPerByte && (t.txSizeCostPerByte = (e.txSizeCostPerByte || i.default.UZERO).toString()), void 0 !== e.sigVerifyCostEd25519 && (t.sigVerifyCostEd25519 = (e.sigVerifyCostEd25519 || i.default.UZERO).toString()), void 0 !== e.sigVerifyCostSecp256k1 && (t.sigVerifyCostSecp256k1 = (e.sigVerifyCostSecp256k1 || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.maxMemoCharacters && null !== e.maxMemoCharacters ? t.maxMemoCharacters = e.maxMemoCharacters : t.maxMemoCharacters = i.default.UZERO, void 0 !== e.txSigLimit && null !== e.txSigLimit ? t.txSigLimit = e.txSigLimit : t.txSigLimit = i.default.UZERO, void 0 !== e.txSizeCostPerByte && null !== e.txSizeCostPerByte ? t.txSizeCostPerByte = e.txSizeCostPerByte : t.txSizeCostPerByte = i.default.UZERO, void 0 !== e.sigVerifyCostEd25519 && null !== e.sigVerifyCostEd25519 ? t.sigVerifyCostEd25519 = e.sigVerifyCostEd25519 : t.sigVerifyCostEd25519 = i.default.UZERO, void 0 !== e.sigVerifyCostSecp256k1 && null !== e.sigVerifyCostSecp256k1 ? t.sigVerifyCostSecp256k1 = e.sigVerifyCostSecp256k1 : t.sigVerifyCostSecp256k1 = i.default.UZERO, t
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        1159: function(e, t) {
            function n(e) {
                return 41 + (e.script ? e.script.length : 106)
            }

            function o(e) {
                return 9 + (e.script ? e.script.length : 25)
            }

            function i(e, t) {
                return n({}) * t
            }

            function r(e, t) {
                return 10 + e.reduce((function(e, t) {
                    return e + n(t)
                }), 0) + t.reduce((function(e, t) {
                    return e + o(t)
                }), 0)
            }

            function s(e) {
                return "number" != typeof e ? NaN : isFinite(e) ? Math.floor(e) !== e || e < 0 ? NaN : e : NaN
            }

            function a(e) {
                return e.reduce((function(e, t) {
                    return e + s(t.value)
                }), 0)
            }
            var d = o({});
            e.exports = {
                dustThreshold: i,
                finalize: function(e, t, n) {
                    var o = r(e, t),
                        s = n * (o + d),
                        u = a(e) - (a(t) + s);
                    u > i(0, n) && (t = t.concat({
                        value: u
                    }));
                    var c = a(e) - a(t);
                    return isFinite(c) ? {
                        inputs: e,
                        outputs: t,
                        fee: c
                    } : {
                        fee: n * o
                    }
                },
                inputBytes: n,
                outputBytes: o,
                sumOrNaN: a,
                sumForgiving: function(e) {
                    return e.reduce((function(e, t) {
                        return e + (isFinite(t.value) ? t.value : 0)
                    }), 0)
                },
                transactionBytes: r,
                uintOrNaN: s
            }
        },
        1475: function(e, t) {
            var n = [].slice;
            e.exports = function(e, t) {
                if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
                var o = n.call(arguments, 2);
                return function() {
                    return t.apply(e, o.concat(n.call(arguments)))
                }
            }
        },
        160: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DecProto = t.IntProto = t.DecCoin = t.Coin = t.protobufPackage = void 0;
            const i = o(n(1)),
                r = o(n(8));
            t.protobufPackage = "cosmos.base.v1beta1";
            const s = {
                denom: "",
                amount: ""
            };
            t.Coin = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), "" !== e.amount && t.uint32(18).string(e.amount), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, s);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.denom = n.string();
                                break;
                            case 2:
                                i.amount = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, s);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", void 0 !== e.amount && null !== e.amount ? t.amount = String(e.amount) : t.amount = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), void 0 !== e.amount && (t.amount = e.amount), t
                },
                fromPartial(e) {
                    var t, n;
                    const o = Object.assign({}, s);
                    return o.denom = null !== (t = e.denom) && void 0 !== t ? t : "", o.amount = null !== (n = e.amount) && void 0 !== n ? n : "", o
                }
            };
            const a = {
                denom: "",
                amount: ""
            };
            t.DecCoin = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), "" !== e.amount && t.uint32(18).string(e.amount), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, a);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.denom = n.string();
                                break;
                            case 2:
                                i.amount = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, a);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", void 0 !== e.amount && null !== e.amount ? t.amount = String(e.amount) : t.amount = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), void 0 !== e.amount && (t.amount = e.amount), t
                },
                fromPartial(e) {
                    var t, n;
                    const o = Object.assign({}, a);
                    return o.denom = null !== (t = e.denom) && void 0 !== t ? t : "", o.amount = null !== (n = e.amount) && void 0 !== n ? n : "", o
                }
            };
            const d = {
                int: ""
            };
            t.IntProto = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.int && t.uint32(10).string(e.int), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.int = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.int && null !== e.int ? t.int = String(e.int) : t.int = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.int && (t.int = e.int), t
                },
                fromPartial(e) {
                    var t;
                    const n = Object.assign({}, d);
                    return n.int = null !== (t = e.int) && void 0 !== t ? t : "", n
                }
            };
            const u = {
                dec: ""
            };
            t.DecProto = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.dec && t.uint32(10).string(e.dec), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.dec = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.dec && null !== e.dec ? t.dec = String(e.dec) : t.dec = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.dec && (t.dec = e.dec), t
                },
                fromPartial(e) {
                    var t;
                    const n = Object.assign({}, u);
                    return n.dec = null !== (t = e.dec) && void 0 !== t ? t : "", n
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        1717: function(e, t, n) {
            var o = n(43),
                i = n(145).Stream,
                r = n(3102);

            function s() {
                this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2097152, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1
            }
            e.exports = s, o.inherits(s, i), s.create = function(e) {
                var t = new this;
                for (var n in e = e || {}) t[n] = e[n];
                return t
            }, s.isStreamLike = function(e) {
                return "function" != typeof e && "string" != typeof e && "boolean" != typeof e && "number" != typeof e && !Buffer.isBuffer(e)
            }, s.prototype.append = function(e) {
                if (s.isStreamLike(e)) {
                    if (!(e instanceof r)) {
                        var t = r.create(e, {
                            maxDataSize: 1 / 0,
                            pauseStream: this.pauseStreams
                        });
                        e.on("data", this._checkDataSize.bind(this)), e = t
                    }
                    this._handleErrors(e), this.pauseStreams && e.pause()
                }
                return this._streams.push(e), this
            }, s.prototype.pipe = function(e, t) {
                return i.prototype.pipe.call(this, e, t), this.resume(), e
            }, s.prototype._getNext = function() {
                if (this._currentStream = null, this._insideLoop) this._pendingNext = !0;
                else {
                    this._insideLoop = !0;
                    try {
                        do {
                            this._pendingNext = !1, this._realGetNext()
                        } while (this._pendingNext)
                    } finally {
                        this._insideLoop = !1
                    }
                }
            }, s.prototype._realGetNext = function() {
                var e = this._streams.shift();
                void 0 !== e ? "function" == typeof e ? e(function(e) {
                    s.isStreamLike(e) && (e.on("data", this._checkDataSize.bind(this)), this._handleErrors(e)), this._pipeNext(e)
                }.bind(this)) : this._pipeNext(e) : this.end()
            }, s.prototype._pipeNext = function(e) {
                if (this._currentStream = e, s.isStreamLike(e)) return e.on("end", this._getNext.bind(this)), void e.pipe(this, {
                    end: !1
                });
                var t = e;
                this.write(t), this._getNext()
            }, s.prototype._handleErrors = function(e) {
                var t = this;
                e.on("error", (function(e) {
                    t._emitError(e)
                }))
            }, s.prototype.write = function(e) {
                this.emit("data", e)
            }, s.prototype.pause = function() {
                this.pauseStreams && (this.pauseStreams && this._currentStream && "function" == typeof this._currentStream.pause && this._currentStream.pause(), this.emit("pause"))
            }, s.prototype.resume = function() {
                this._released || (this._released = !0, this.writable = !0, this._getNext()), this.pauseStreams && this._currentStream && "function" == typeof this._currentStream.resume && this._currentStream.resume(), this.emit("resume")
            }, s.prototype.end = function() {
                this._reset(), this.emit("end")
            }, s.prototype.destroy = function() {
                this._reset(), this.emit("close")
            }, s.prototype._reset = function() {
                this.writable = !1, this._streams = [], this._currentStream = null
            }, s.prototype._checkDataSize = function() {
                if (this._updateDataSize(), !(this.dataSize <= this.maxDataSize)) {
                    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
                    this._emitError(new Error(e))
                }
            }, s.prototype._updateDataSize = function() {
                this.dataSize = 0;
                var e = this;
                this._streams.forEach((function(t) {
                    t.dataSize && (e.dataSize += t.dataSize)
                })), this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize)
            }, s.prototype._emitError = function(e) {
                this._reset(), this.emit("error", e)
            }
        },
        2029: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MsgClientImpl = t.MsgMultiSendResponse = t.MsgMultiSend = t.MsgSendResponse = t.MsgSend = t.protobufPackage = void 0;
            const i = o(n(1)),
                r = o(n(8)),
                s = n(160),
                a = n(2030);
            t.protobufPackage = "cosmos.bank.v1beta1";
            const d = {
                fromAddress: "",
                toAddress: ""
            };
            t.MsgSend = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.fromAddress && t.uint32(10).string(e.fromAddress), "" !== e.toAddress && t.uint32(18).string(e.toAddress);
                    for (const n of e.amount) s.Coin.encode(n, t.uint32(26).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, d);
                    for (i.amount = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.fromAddress = n.string();
                                break;
                            case 2:
                                i.toAddress = n.string();
                                break;
                            case 3:
                                i.amount.push(s.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    if (t.amount = [], void 0 !== e.fromAddress && null !== e.fromAddress ? t.fromAddress = String(e.fromAddress) : t.fromAddress = "", void 0 !== e.toAddress && null !== e.toAddress ? t.toAddress = String(e.toAddress) : t.toAddress = "", void 0 !== e.amount && null !== e.amount)
                        for (const n of e.amount) t.amount.push(s.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress), void 0 !== e.toAddress && (t.toAddress = e.toAddress), e.amount ? t.amount = e.amount.map(e => e ? s.Coin.toJSON(e) : void 0) : t.amount = [], t
                },
                fromPartial(e) {
                    var t, n;
                    const o = Object.assign({}, d);
                    if (o.fromAddress = null !== (t = e.fromAddress) && void 0 !== t ? t : "", o.toAddress = null !== (n = e.toAddress) && void 0 !== n ? n : "", o.amount = [], void 0 !== e.amount && null !== e.amount)
                        for (const t of e.amount) o.amount.push(s.Coin.fromPartial(t));
                    return o
                }
            };
            const u = {};
            t.MsgSendResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, u),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, u)
            };
            const c = {};
            t.MsgMultiSend = {
                encode(e, t = r.default.Writer.create()) {
                    for (const n of e.inputs) a.Input.encode(n, t.uint32(10).fork()).ldelim();
                    for (const n of e.outputs) a.Output.encode(n, t.uint32(18).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, c);
                    for (i.inputs = [], i.outputs = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.inputs.push(a.Input.decode(n, n.uint32()));
                                break;
                            case 2:
                                i.outputs.push(a.Output.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    if (t.inputs = [], t.outputs = [], void 0 !== e.inputs && null !== e.inputs)
                        for (const n of e.inputs) t.inputs.push(a.Input.fromJSON(n));
                    if (void 0 !== e.outputs && null !== e.outputs)
                        for (const n of e.outputs) t.outputs.push(a.Output.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.inputs ? t.inputs = e.inputs.map(e => e ? a.Input.toJSON(e) : void 0) : t.inputs = [], e.outputs ? t.outputs = e.outputs.map(e => e ? a.Output.toJSON(e) : void 0) : t.outputs = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    if (t.inputs = [], void 0 !== e.inputs && null !== e.inputs)
                        for (const n of e.inputs) t.inputs.push(a.Input.fromPartial(n));
                    if (t.outputs = [], void 0 !== e.outputs && null !== e.outputs)
                        for (const n of e.outputs) t.outputs.push(a.Output.fromPartial(n));
                    return t
                }
            };
            const l = {};
            t.MsgMultiSendResponse = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, l);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, l),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, l)
            };
            t.MsgClientImpl = class MsgClientImpl {
                constructor(e) {
                    this.rpc = e, this.Send = this.Send.bind(this), this.MultiSend = this.MultiSend.bind(this)
                }
                Send(e) {
                    const n = t.MsgSend.encode(e).finish();
                    return this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", n).then(e => t.MsgSendResponse.decode(new r.default.Reader(e)))
                }
                MultiSend(e) {
                    const n = t.MsgMultiSend.encode(e).finish();
                    return this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", n).then(e => t.MsgMultiSendResponse.decode(new r.default.Reader(e)))
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        2030: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Metadata = t.DenomUnit = t.Supply = t.Output = t.Input = t.SendEnabled = t.Params = t.protobufPackage = void 0;
            const i = o(n(1)),
                r = o(n(8)),
                s = n(160);
            t.protobufPackage = "cosmos.bank.v1beta1";
            const a = {
                defaultSendEnabled: !1
            };
            t.Params = {
                encode(e, n = r.default.Writer.create()) {
                    for (const o of e.sendEnabled) t.SendEnabled.encode(o, n.uint32(10).fork()).ldelim();
                    return !0 === e.defaultSendEnabled && n.uint32(16).bool(e.defaultSendEnabled), n
                },
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, a);
                    for (s.sendEnabled = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.sendEnabled.push(t.SendEnabled.decode(o, o.uint32()));
                                break;
                            case 2:
                                s.defaultSendEnabled = o.bool();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, a);
                    if (n.sendEnabled = [], void 0 !== e.sendEnabled && null !== e.sendEnabled)
                        for (const o of e.sendEnabled) n.sendEnabled.push(t.SendEnabled.fromJSON(o));
                    return void 0 !== e.defaultSendEnabled && null !== e.defaultSendEnabled ? n.defaultSendEnabled = Boolean(e.defaultSendEnabled) : n.defaultSendEnabled = !1, n
                },
                toJSON(e) {
                    const n = {};
                    return e.sendEnabled ? n.sendEnabled = e.sendEnabled.map(e => e ? t.SendEnabled.toJSON(e) : void 0) : n.sendEnabled = [], void 0 !== e.defaultSendEnabled && (n.defaultSendEnabled = e.defaultSendEnabled), n
                },
                fromPartial(e) {
                    var n;
                    const o = Object.assign({}, a);
                    if (o.sendEnabled = [], void 0 !== e.sendEnabled && null !== e.sendEnabled)
                        for (const n of e.sendEnabled) o.sendEnabled.push(t.SendEnabled.fromPartial(n));
                    return o.defaultSendEnabled = null !== (n = e.defaultSendEnabled) && void 0 !== n && n, o
                }
            };
            const d = {
                denom: "",
                enabled: !1
            };
            t.SendEnabled = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), !0 === e.enabled && t.uint32(16).bool(e.enabled), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.denom = n.string();
                                break;
                            case 2:
                                i.enabled = n.bool();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", void 0 !== e.enabled && null !== e.enabled ? t.enabled = Boolean(e.enabled) : t.enabled = !1, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), void 0 !== e.enabled && (t.enabled = e.enabled), t
                },
                fromPartial(e) {
                    var t, n;
                    const o = Object.assign({}, d);
                    return o.denom = null !== (t = e.denom) && void 0 !== t ? t : "", o.enabled = null !== (n = e.enabled) && void 0 !== n && n, o
                }
            };
            const u = {
                address: ""
            };
            t.Input = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.address && t.uint32(10).string(e.address);
                    for (const n of e.coins) s.Coin.encode(n, t.uint32(18).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (i.coins = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.address = n.string();
                                break;
                            case 2:
                                i.coins.push(s.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    if (t.coins = [], void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", void 0 !== e.coins && null !== e.coins)
                        for (const n of e.coins) t.coins.push(s.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = e.address), e.coins ? t.coins = e.coins.map(e => e ? s.Coin.toJSON(e) : void 0) : t.coins = [], t
                },
                fromPartial(e) {
                    var t;
                    const n = Object.assign({}, u);
                    if (n.address = null !== (t = e.address) && void 0 !== t ? t : "", n.coins = [], void 0 !== e.coins && null !== e.coins)
                        for (const t of e.coins) n.coins.push(s.Coin.fromPartial(t));
                    return n
                }
            };
            const c = {
                address: ""
            };
            t.Output = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.address && t.uint32(10).string(e.address);
                    for (const n of e.coins) s.Coin.encode(n, t.uint32(18).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, c);
                    for (i.coins = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.address = n.string();
                                break;
                            case 2:
                                i.coins.push(s.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    if (t.coins = [], void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", void 0 !== e.coins && null !== e.coins)
                        for (const n of e.coins) t.coins.push(s.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = e.address), e.coins ? t.coins = e.coins.map(e => e ? s.Coin.toJSON(e) : void 0) : t.coins = [], t
                },
                fromPartial(e) {
                    var t;
                    const n = Object.assign({}, c);
                    if (n.address = null !== (t = e.address) && void 0 !== t ? t : "", n.coins = [], void 0 !== e.coins && null !== e.coins)
                        for (const t of e.coins) n.coins.push(s.Coin.fromPartial(t));
                    return n
                }
            };
            const l = {};
            t.Supply = {
                encode(e, t = r.default.Writer.create()) {
                    for (const n of e.total) s.Coin.encode(n, t.uint32(10).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, l);
                    for (i.total = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.total.push(s.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    if (t.total = [], void 0 !== e.total && null !== e.total)
                        for (const n of e.total) t.total.push(s.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.total ? t.total = e.total.map(e => e ? s.Coin.toJSON(e) : void 0) : t.total = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    if (t.total = [], void 0 !== e.total && null !== e.total)
                        for (const n of e.total) t.total.push(s.Coin.fromPartial(n));
                    return t
                }
            };
            const f = {
                denom: "",
                exponent: 0,
                aliases: ""
            };
            t.DenomUnit = {
                encode(e, t = r.default.Writer.create()) {
                    "" !== e.denom && t.uint32(10).string(e.denom), 0 !== e.exponent && t.uint32(16).uint32(e.exponent);
                    for (const n of e.aliases) t.uint32(26).string(n);
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, f);
                    for (i.aliases = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.denom = n.string();
                                break;
                            case 2:
                                i.exponent = n.uint32();
                                break;
                            case 3:
                                i.aliases.push(n.string());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.aliases = [], void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", void 0 !== e.exponent && null !== e.exponent ? t.exponent = Number(e.exponent) : t.exponent = 0, void 0 !== e.aliases && null !== e.aliases)
                        for (const n of e.aliases) t.aliases.push(String(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), void 0 !== e.exponent && (t.exponent = e.exponent), e.aliases ? t.aliases = e.aliases.map(e => e) : t.aliases = [], t
                },
                fromPartial(e) {
                    var t, n;
                    const o = Object.assign({}, f);
                    if (o.denom = null !== (t = e.denom) && void 0 !== t ? t : "", o.exponent = null !== (n = e.exponent) && void 0 !== n ? n : 0, o.aliases = [], void 0 !== e.aliases && null !== e.aliases)
                        for (const t of e.aliases) o.aliases.push(t);
                    return o
                }
            };
            const p = {
                description: "",
                base: "",
                display: ""
            };
            t.Metadata = {
                encode(e, n = r.default.Writer.create()) {
                    "" !== e.description && n.uint32(10).string(e.description);
                    for (const o of e.denomUnits) t.DenomUnit.encode(o, n.uint32(18).fork()).ldelim();
                    return "" !== e.base && n.uint32(26).string(e.base), "" !== e.display && n.uint32(34).string(e.display), n
                },
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, p);
                    for (s.denomUnits = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.description = o.string();
                                break;
                            case 2:
                                s.denomUnits.push(t.DenomUnit.decode(o, o.uint32()));
                                break;
                            case 3:
                                s.base = o.string();
                                break;
                            case 4:
                                s.display = o.string();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, p);
                    if (n.denomUnits = [], void 0 !== e.description && null !== e.description ? n.description = String(e.description) : n.description = "", void 0 !== e.denomUnits && null !== e.denomUnits)
                        for (const o of e.denomUnits) n.denomUnits.push(t.DenomUnit.fromJSON(o));
                    return void 0 !== e.base && null !== e.base ? n.base = String(e.base) : n.base = "", void 0 !== e.display && null !== e.display ? n.display = String(e.display) : n.display = "", n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.description && (n.description = e.description), e.denomUnits ? n.denomUnits = e.denomUnits.map(e => e ? t.DenomUnit.toJSON(e) : void 0) : n.denomUnits = [], void 0 !== e.base && (n.base = e.base), void 0 !== e.display && (n.display = e.display), n
                },
                fromPartial(e) {
                    var n, o, i;
                    const r = Object.assign({}, p);
                    if (r.description = null !== (n = e.description) && void 0 !== n ? n : "", r.denomUnits = [], void 0 !== e.denomUnits && null !== e.denomUnits)
                        for (const n of e.denomUnits) r.denomUnits.push(t.DenomUnit.fromPartial(n));
                    return r.base = null !== (o = e.base) && void 0 !== o ? o : "", r.display = null !== (i = e.display) && void 0 !== i ? i : "", r
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        2044: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CompressedNonExistenceProof = t.CompressedExistenceProof = t.CompressedBatchEntry = t.CompressedBatchProof = t.BatchEntry = t.BatchProof = t.InnerSpec = t.ProofSpec = t.InnerOp = t.LeafOp = t.CommitmentProof = t.NonExistenceProof = t.ExistenceProof = t.lengthOpToJSON = t.lengthOpFromJSON = t.LengthOp = t.hashOpToJSON = t.hashOpFromJSON = t.HashOp = t.protobufPackage = void 0;
            const i = o(n(1)),
                r = o(n(8));
            var s, a;

            function d(e) {
                switch (e) {
                    case 0:
                    case "NO_HASH":
                        return s.NO_HASH;
                    case 1:
                    case "SHA256":
                        return s.SHA256;
                    case 2:
                    case "SHA512":
                        return s.SHA512;
                    case 3:
                    case "KECCAK":
                        return s.KECCAK;
                    case 4:
                    case "RIPEMD160":
                        return s.RIPEMD160;
                    case 5:
                    case "BITCOIN":
                        return s.BITCOIN;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return s.UNRECOGNIZED
                }
            }

            function u(e) {
                switch (e) {
                    case s.NO_HASH:
                        return "NO_HASH";
                    case s.SHA256:
                        return "SHA256";
                    case s.SHA512:
                        return "SHA512";
                    case s.KECCAK:
                        return "KECCAK";
                    case s.RIPEMD160:
                        return "RIPEMD160";
                    case s.BITCOIN:
                        return "BITCOIN";
                    default:
                        return "UNKNOWN"
                }
            }

            function c(e) {
                switch (e) {
                    case 0:
                    case "NO_PREFIX":
                        return a.NO_PREFIX;
                    case 1:
                    case "VAR_PROTO":
                        return a.VAR_PROTO;
                    case 2:
                    case "VAR_RLP":
                        return a.VAR_RLP;
                    case 3:
                    case "FIXED32_BIG":
                        return a.FIXED32_BIG;
                    case 4:
                    case "FIXED32_LITTLE":
                        return a.FIXED32_LITTLE;
                    case 5:
                    case "FIXED64_BIG":
                        return a.FIXED64_BIG;
                    case 6:
                    case "FIXED64_LITTLE":
                        return a.FIXED64_LITTLE;
                    case 7:
                    case "REQUIRE_32_BYTES":
                        return a.REQUIRE_32_BYTES;
                    case 8:
                    case "REQUIRE_64_BYTES":
                        return a.REQUIRE_64_BYTES;
                    case -1:
                    case "UNRECOGNIZED":
                    default:
                        return a.UNRECOGNIZED
                }
            }

            function l(e) {
                switch (e) {
                    case a.NO_PREFIX:
                        return "NO_PREFIX";
                    case a.VAR_PROTO:
                        return "VAR_PROTO";
                    case a.VAR_RLP:
                        return "VAR_RLP";
                    case a.FIXED32_BIG:
                        return "FIXED32_BIG";
                    case a.FIXED32_LITTLE:
                        return "FIXED32_LITTLE";
                    case a.FIXED64_BIG:
                        return "FIXED64_BIG";
                    case a.FIXED64_LITTLE:
                        return "FIXED64_LITTLE";
                    case a.REQUIRE_32_BYTES:
                        return "REQUIRE_32_BYTES";
                    case a.REQUIRE_64_BYTES:
                        return "REQUIRE_64_BYTES";
                    default:
                        return "UNKNOWN"
                }
            }
            t.protobufPackage = "ics23",
                function(e) {
                    e[e.NO_HASH = 0] = "NO_HASH", e[e.SHA256 = 1] = "SHA256", e[e.SHA512 = 2] = "SHA512", e[e.KECCAK = 3] = "KECCAK", e[e.RIPEMD160 = 4] = "RIPEMD160", e[e.BITCOIN = 5] = "BITCOIN", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(s = t.HashOp || (t.HashOp = {})), t.hashOpFromJSON = d, t.hashOpToJSON = u,
                function(e) {
                    e[e.NO_PREFIX = 0] = "NO_PREFIX", e[e.VAR_PROTO = 1] = "VAR_PROTO", e[e.VAR_RLP = 2] = "VAR_RLP", e[e.FIXED32_BIG = 3] = "FIXED32_BIG", e[e.FIXED32_LITTLE = 4] = "FIXED32_LITTLE", e[e.FIXED64_BIG = 5] = "FIXED64_BIG", e[e.FIXED64_LITTLE = 6] = "FIXED64_LITTLE", e[e.REQUIRE_32_BYTES = 7] = "REQUIRE_32_BYTES", e[e.REQUIRE_64_BYTES = 8] = "REQUIRE_64_BYTES", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
                }(a = t.LengthOp || (t.LengthOp = {})), t.lengthOpFromJSON = c, t.lengthOpToJSON = l;
            const f = {};
            t.ExistenceProof = {
                encode(e, n = r.default.Writer.create()) {
                    0 !== e.key.length && n.uint32(10).bytes(e.key), 0 !== e.value.length && n.uint32(18).bytes(e.value), void 0 !== e.leaf && t.LeafOp.encode(e.leaf, n.uint32(26).fork()).ldelim();
                    for (const o of e.path) t.InnerOp.encode(o, n.uint32(34).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, f);
                    for (s.path = [], s.key = new Uint8Array, s.value = new Uint8Array; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.key = o.bytes();
                                break;
                            case 2:
                                s.value = o.bytes();
                                break;
                            case 3:
                                s.leaf = t.LeafOp.decode(o, o.uint32());
                                break;
                            case 4:
                                s.path.push(t.InnerOp.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, f);
                    if (n.path = [], n.key = new Uint8Array, n.value = new Uint8Array, void 0 !== e.key && null !== e.key && (n.key = E(e.key)), void 0 !== e.value && null !== e.value && (n.value = E(e.value)), void 0 !== e.leaf && null !== e.leaf ? n.leaf = t.LeafOp.fromJSON(e.leaf) : n.leaf = void 0, void 0 !== e.path && null !== e.path)
                        for (const o of e.path) n.path.push(t.InnerOp.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.key && (n.key = C(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.value && (n.value = C(void 0 !== e.value ? e.value : new Uint8Array)), void 0 !== e.leaf && (n.leaf = e.leaf ? t.LeafOp.toJSON(e.leaf) : void 0), e.path ? n.path = e.path.map(e => e ? t.InnerOp.toJSON(e) : void 0) : n.path = [], n
                },
                fromPartial(e) {
                    var n, o;
                    const i = Object.assign({}, f);
                    if (i.key = null !== (n = e.key) && void 0 !== n ? n : new Uint8Array, i.value = null !== (o = e.value) && void 0 !== o ? o : new Uint8Array, void 0 !== e.leaf && null !== e.leaf ? i.leaf = t.LeafOp.fromPartial(e.leaf) : i.leaf = void 0, i.path = [], void 0 !== e.path && null !== e.path)
                        for (const n of e.path) i.path.push(t.InnerOp.fromPartial(n));
                    return i
                }
            };
            const p = {};
            t.NonExistenceProof = {
                encode: (e, n = r.default.Writer.create()) => (0 !== e.key.length && n.uint32(10).bytes(e.key), void 0 !== e.left && t.ExistenceProof.encode(e.left, n.uint32(18).fork()).ldelim(), void 0 !== e.right && t.ExistenceProof.encode(e.right, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, p);
                    for (s.key = new Uint8Array; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.key = o.bytes();
                                break;
                            case 2:
                                s.left = t.ExistenceProof.decode(o, o.uint32());
                                break;
                            case 3:
                                s.right = t.ExistenceProof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, p);
                    return n.key = new Uint8Array, void 0 !== e.key && null !== e.key && (n.key = E(e.key)), void 0 !== e.left && null !== e.left ? n.left = t.ExistenceProof.fromJSON(e.left) : n.left = void 0, void 0 !== e.right && null !== e.right ? n.right = t.ExistenceProof.fromJSON(e.right) : n.right = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.key && (n.key = C(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.left && (n.left = e.left ? t.ExistenceProof.toJSON(e.left) : void 0), void 0 !== e.right && (n.right = e.right ? t.ExistenceProof.toJSON(e.right) : void 0), n
                },
                fromPartial(e) {
                    var n;
                    const o = Object.assign({}, p);
                    return o.key = null !== (n = e.key) && void 0 !== n ? n : new Uint8Array, void 0 !== e.left && null !== e.left ? o.left = t.ExistenceProof.fromPartial(e.left) : o.left = void 0, void 0 !== e.right && null !== e.right ? o.right = t.ExistenceProof.fromPartial(e.right) : o.right = void 0, o
                }
            };
            const m = {};
            t.CommitmentProof = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.exist && t.ExistenceProof.encode(e.exist, n.uint32(10).fork()).ldelim(), void 0 !== e.nonexist && t.NonExistenceProof.encode(e.nonexist, n.uint32(18).fork()).ldelim(), void 0 !== e.batch && t.BatchProof.encode(e.batch, n.uint32(26).fork()).ldelim(), void 0 !== e.compressed && t.CompressedBatchProof.encode(e.compressed, n.uint32(34).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, m);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.exist = t.ExistenceProof.decode(o, o.uint32());
                                break;
                            case 2:
                                s.nonexist = t.NonExistenceProof.decode(o, o.uint32());
                                break;
                            case 3:
                                s.batch = t.BatchProof.decode(o, o.uint32());
                                break;
                            case 4:
                                s.compressed = t.CompressedBatchProof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, m);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.ExistenceProof.fromJSON(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.NonExistenceProof.fromJSON(e.nonexist) : n.nonexist = void 0, void 0 !== e.batch && null !== e.batch ? n.batch = t.BatchProof.fromJSON(e.batch) : n.batch = void 0, void 0 !== e.compressed && null !== e.compressed ? n.compressed = t.CompressedBatchProof.fromJSON(e.compressed) : n.compressed = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.exist && (n.exist = e.exist ? t.ExistenceProof.toJSON(e.exist) : void 0), void 0 !== e.nonexist && (n.nonexist = e.nonexist ? t.NonExistenceProof.toJSON(e.nonexist) : void 0), void 0 !== e.batch && (n.batch = e.batch ? t.BatchProof.toJSON(e.batch) : void 0), void 0 !== e.compressed && (n.compressed = e.compressed ? t.CompressedBatchProof.toJSON(e.compressed) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, m);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.ExistenceProof.fromPartial(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.NonExistenceProof.fromPartial(e.nonexist) : n.nonexist = void 0, void 0 !== e.batch && null !== e.batch ? n.batch = t.BatchProof.fromPartial(e.batch) : n.batch = void 0, void 0 !== e.compressed && null !== e.compressed ? n.compressed = t.CompressedBatchProof.fromPartial(e.compressed) : n.compressed = void 0, n
                }
            };
            const h = {
                hash: 0,
                prehashKey: 0,
                prehashValue: 0,
                length: 0
            };
            t.LeafOp = {
                encode: (e, t = r.default.Writer.create()) => (0 !== e.hash && t.uint32(8).int32(e.hash), 0 !== e.prehashKey && t.uint32(16).int32(e.prehashKey), 0 !== e.prehashValue && t.uint32(24).int32(e.prehashValue), 0 !== e.length && t.uint32(32).int32(e.length), 0 !== e.prefix.length && t.uint32(42).bytes(e.prefix), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, h);
                    for (i.prefix = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.hash = n.int32();
                                break;
                            case 2:
                                i.prehashKey = n.int32();
                                break;
                            case 3:
                                i.prehashValue = n.int32();
                                break;
                            case 4:
                                i.length = n.int32();
                                break;
                            case 5:
                                i.prefix = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    return t.prefix = new Uint8Array, void 0 !== e.hash && null !== e.hash ? t.hash = d(e.hash) : t.hash = 0, void 0 !== e.prehashKey && null !== e.prehashKey ? t.prehashKey = d(e.prehashKey) : t.prehashKey = 0, void 0 !== e.prehashValue && null !== e.prehashValue ? t.prehashValue = d(e.prehashValue) : t.prehashValue = 0, void 0 !== e.length && null !== e.length ? t.length = c(e.length) : t.length = 0, void 0 !== e.prefix && null !== e.prefix && (t.prefix = E(e.prefix)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.hash && (t.hash = u(e.hash)), void 0 !== e.prehashKey && (t.prehashKey = u(e.prehashKey)), void 0 !== e.prehashValue && (t.prehashValue = u(e.prehashValue)), void 0 !== e.length && (t.length = l(e.length)), void 0 !== e.prefix && (t.prefix = C(void 0 !== e.prefix ? e.prefix : new Uint8Array)), t
                },
                fromPartial(e) {
                    var t, n, o, i, r;
                    const s = Object.assign({}, h);
                    return s.hash = null !== (t = e.hash) && void 0 !== t ? t : 0, s.prehashKey = null !== (n = e.prehashKey) && void 0 !== n ? n : 0, s.prehashValue = null !== (o = e.prehashValue) && void 0 !== o ? o : 0, s.length = null !== (i = e.length) && void 0 !== i ? i : 0, s.prefix = null !== (r = e.prefix) && void 0 !== r ? r : new Uint8Array, s
                }
            };
            const v = {
                hash: 0
            };
            t.InnerOp = {
                encode: (e, t = r.default.Writer.create()) => (0 !== e.hash && t.uint32(8).int32(e.hash), 0 !== e.prefix.length && t.uint32(18).bytes(e.prefix), 0 !== e.suffix.length && t.uint32(26).bytes(e.suffix), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, v);
                    for (i.prefix = new Uint8Array, i.suffix = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.hash = n.int32();
                                break;
                            case 2:
                                i.prefix = n.bytes();
                                break;
                            case 3:
                                i.suffix = n.bytes();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    return t.prefix = new Uint8Array, t.suffix = new Uint8Array, void 0 !== e.hash && null !== e.hash ? t.hash = d(e.hash) : t.hash = 0, void 0 !== e.prefix && null !== e.prefix && (t.prefix = E(e.prefix)), void 0 !== e.suffix && null !== e.suffix && (t.suffix = E(e.suffix)), t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.hash && (t.hash = u(e.hash)), void 0 !== e.prefix && (t.prefix = C(void 0 !== e.prefix ? e.prefix : new Uint8Array)), void 0 !== e.suffix && (t.suffix = C(void 0 !== e.suffix ? e.suffix : new Uint8Array)), t
                },
                fromPartial(e) {
                    var t, n, o;
                    const i = Object.assign({}, v);
                    return i.hash = null !== (t = e.hash) && void 0 !== t ? t : 0, i.prefix = null !== (n = e.prefix) && void 0 !== n ? n : new Uint8Array, i.suffix = null !== (o = e.suffix) && void 0 !== o ? o : new Uint8Array, i
                }
            };
            const g = {
                maxDepth: 0,
                minDepth: 0
            };
            t.ProofSpec = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.leafSpec && t.LeafOp.encode(e.leafSpec, n.uint32(10).fork()).ldelim(), void 0 !== e.innerSpec && t.InnerSpec.encode(e.innerSpec, n.uint32(18).fork()).ldelim(), 0 !== e.maxDepth && n.uint32(24).int32(e.maxDepth), 0 !== e.minDepth && n.uint32(32).int32(e.minDepth), n),
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, g);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.leafSpec = t.LeafOp.decode(o, o.uint32());
                                break;
                            case 2:
                                s.innerSpec = t.InnerSpec.decode(o, o.uint32());
                                break;
                            case 3:
                                s.maxDepth = o.int32();
                                break;
                            case 4:
                                s.minDepth = o.int32();
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, g);
                    return void 0 !== e.leafSpec && null !== e.leafSpec ? n.leafSpec = t.LeafOp.fromJSON(e.leafSpec) : n.leafSpec = void 0, void 0 !== e.innerSpec && null !== e.innerSpec ? n.innerSpec = t.InnerSpec.fromJSON(e.innerSpec) : n.innerSpec = void 0, void 0 !== e.maxDepth && null !== e.maxDepth ? n.maxDepth = Number(e.maxDepth) : n.maxDepth = 0, void 0 !== e.minDepth && null !== e.minDepth ? n.minDepth = Number(e.minDepth) : n.minDepth = 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.leafSpec && (n.leafSpec = e.leafSpec ? t.LeafOp.toJSON(e.leafSpec) : void 0), void 0 !== e.innerSpec && (n.innerSpec = e.innerSpec ? t.InnerSpec.toJSON(e.innerSpec) : void 0), void 0 !== e.maxDepth && (n.maxDepth = e.maxDepth), void 0 !== e.minDepth && (n.minDepth = e.minDepth), n
                },
                fromPartial(e) {
                    var n, o;
                    const i = Object.assign({}, g);
                    return void 0 !== e.leafSpec && null !== e.leafSpec ? i.leafSpec = t.LeafOp.fromPartial(e.leafSpec) : i.leafSpec = void 0, void 0 !== e.innerSpec && null !== e.innerSpec ? i.innerSpec = t.InnerSpec.fromPartial(e.innerSpec) : i.innerSpec = void 0, i.maxDepth = null !== (n = e.maxDepth) && void 0 !== n ? n : 0, i.minDepth = null !== (o = e.minDepth) && void 0 !== o ? o : 0, i
                }
            };
            const b = {
                childOrder: 0,
                childSize: 0,
                minPrefixLength: 0,
                maxPrefixLength: 0,
                hash: 0
            };
            t.InnerSpec = {
                encode(e, t = r.default.Writer.create()) {
                    t.uint32(10).fork();
                    for (const n of e.childOrder) t.int32(n);
                    return t.ldelim(), 0 !== e.childSize && t.uint32(16).int32(e.childSize), 0 !== e.minPrefixLength && t.uint32(24).int32(e.minPrefixLength), 0 !== e.maxPrefixLength && t.uint32(32).int32(e.maxPrefixLength), 0 !== e.emptyChild.length && t.uint32(42).bytes(e.emptyChild), 0 !== e.hash && t.uint32(48).int32(e.hash), t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, b);
                    for (i.childOrder = [], i.emptyChild = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                if (2 == (7 & e)) {
                                    const e = n.uint32() + n.pos;
                                    for (; n.pos < e;) i.childOrder.push(n.int32())
                                } else i.childOrder.push(n.int32());
                                break;
                            case 2:
                                i.childSize = n.int32();
                                break;
                            case 3:
                                i.minPrefixLength = n.int32();
                                break;
                            case 4:
                                i.maxPrefixLength = n.int32();
                                break;
                            case 5:
                                i.emptyChild = n.bytes();
                                break;
                            case 6:
                                i.hash = n.int32();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    if (t.childOrder = [], t.emptyChild = new Uint8Array, void 0 !== e.childOrder && null !== e.childOrder)
                        for (const n of e.childOrder) t.childOrder.push(Number(n));
                    return void 0 !== e.childSize && null !== e.childSize ? t.childSize = Number(e.childSize) : t.childSize = 0, void 0 !== e.minPrefixLength && null !== e.minPrefixLength ? t.minPrefixLength = Number(e.minPrefixLength) : t.minPrefixLength = 0, void 0 !== e.maxPrefixLength && null !== e.maxPrefixLength ? t.maxPrefixLength = Number(e.maxPrefixLength) : t.maxPrefixLength = 0, void 0 !== e.emptyChild && null !== e.emptyChild && (t.emptyChild = E(e.emptyChild)), void 0 !== e.hash && null !== e.hash ? t.hash = d(e.hash) : t.hash = 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.childOrder ? t.childOrder = e.childOrder.map(e => e) : t.childOrder = [], void 0 !== e.childSize && (t.childSize = e.childSize), void 0 !== e.minPrefixLength && (t.minPrefixLength = e.minPrefixLength), void 0 !== e.maxPrefixLength && (t.maxPrefixLength = e.maxPrefixLength), void 0 !== e.emptyChild && (t.emptyChild = C(void 0 !== e.emptyChild ? e.emptyChild : new Uint8Array)), void 0 !== e.hash && (t.hash = u(e.hash)), t
                },
                fromPartial(e) {
                    var t, n, o, i, r;
                    const s = Object.assign({}, b);
                    if (s.childOrder = [], void 0 !== e.childOrder && null !== e.childOrder)
                        for (const t of e.childOrder) s.childOrder.push(t);
                    return s.childSize = null !== (t = e.childSize) && void 0 !== t ? t : 0, s.minPrefixLength = null !== (n = e.minPrefixLength) && void 0 !== n ? n : 0, s.maxPrefixLength = null !== (o = e.maxPrefixLength) && void 0 !== o ? o : 0, s.emptyChild = null !== (i = e.emptyChild) && void 0 !== i ? i : new Uint8Array, s.hash = null !== (r = e.hash) && void 0 !== r ? r : 0, s
                }
            };
            const y = {};
            t.BatchProof = {
                encode(e, n = r.default.Writer.create()) {
                    for (const o of e.entries) t.BatchEntry.encode(o, n.uint32(10).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, y);
                    for (s.entries = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.entries.push(t.BatchEntry.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, y);
                    if (n.entries = [], void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.BatchEntry.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.entries ? n.entries = e.entries.map(e => e ? t.BatchEntry.toJSON(e) : void 0) : n.entries = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, y);
                    if (n.entries = [], void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.BatchEntry.fromPartial(o));
                    return n
                }
            };
            const O = {};
            t.BatchEntry = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.exist && t.ExistenceProof.encode(e.exist, n.uint32(10).fork()).ldelim(), void 0 !== e.nonexist && t.NonExistenceProof.encode(e.nonexist, n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, O);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.exist = t.ExistenceProof.decode(o, o.uint32());
                                break;
                            case 2:
                                s.nonexist = t.NonExistenceProof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, O);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.ExistenceProof.fromJSON(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.NonExistenceProof.fromJSON(e.nonexist) : n.nonexist = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.exist && (n.exist = e.exist ? t.ExistenceProof.toJSON(e.exist) : void 0), void 0 !== e.nonexist && (n.nonexist = e.nonexist ? t.NonExistenceProof.toJSON(e.nonexist) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, O);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.ExistenceProof.fromPartial(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.NonExistenceProof.fromPartial(e.nonexist) : n.nonexist = void 0, n
                }
            };
            const S = {};
            t.CompressedBatchProof = {
                encode(e, n = r.default.Writer.create()) {
                    for (const o of e.entries) t.CompressedBatchEntry.encode(o, n.uint32(10).fork()).ldelim();
                    for (const o of e.lookupInners) t.InnerOp.encode(o, n.uint32(18).fork()).ldelim();
                    return n
                },
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, S);
                    for (s.entries = [], s.lookupInners = []; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.entries.push(t.CompressedBatchEntry.decode(o, o.uint32()));
                                break;
                            case 2:
                                s.lookupInners.push(t.InnerOp.decode(o, o.uint32()));
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, S);
                    if (n.entries = [], n.lookupInners = [], void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.CompressedBatchEntry.fromJSON(o));
                    if (void 0 !== e.lookupInners && null !== e.lookupInners)
                        for (const o of e.lookupInners) n.lookupInners.push(t.InnerOp.fromJSON(o));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return e.entries ? n.entries = e.entries.map(e => e ? t.CompressedBatchEntry.toJSON(e) : void 0) : n.entries = [], e.lookupInners ? n.lookupInners = e.lookupInners.map(e => e ? t.InnerOp.toJSON(e) : void 0) : n.lookupInners = [], n
                },
                fromPartial(e) {
                    const n = Object.assign({}, S);
                    if (n.entries = [], void 0 !== e.entries && null !== e.entries)
                        for (const o of e.entries) n.entries.push(t.CompressedBatchEntry.fromPartial(o));
                    if (n.lookupInners = [], void 0 !== e.lookupInners && null !== e.lookupInners)
                        for (const o of e.lookupInners) n.lookupInners.push(t.InnerOp.fromPartial(o));
                    return n
                }
            };
            const x = {};
            t.CompressedBatchEntry = {
                encode: (e, n = r.default.Writer.create()) => (void 0 !== e.exist && t.CompressedExistenceProof.encode(e.exist, n.uint32(10).fork()).ldelim(), void 0 !== e.nonexist && t.CompressedNonExistenceProof.encode(e.nonexist, n.uint32(18).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, x);
                    for (; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.exist = t.CompressedExistenceProof.decode(o, o.uint32());
                                break;
                            case 2:
                                s.nonexist = t.CompressedNonExistenceProof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, x);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.CompressedExistenceProof.fromJSON(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.CompressedNonExistenceProof.fromJSON(e.nonexist) : n.nonexist = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.exist && (n.exist = e.exist ? t.CompressedExistenceProof.toJSON(e.exist) : void 0), void 0 !== e.nonexist && (n.nonexist = e.nonexist ? t.CompressedNonExistenceProof.toJSON(e.nonexist) : void 0), n
                },
                fromPartial(e) {
                    const n = Object.assign({}, x);
                    return void 0 !== e.exist && null !== e.exist ? n.exist = t.CompressedExistenceProof.fromPartial(e.exist) : n.exist = void 0, void 0 !== e.nonexist && null !== e.nonexist ? n.nonexist = t.CompressedNonExistenceProof.fromPartial(e.nonexist) : n.nonexist = void 0, n
                }
            };
            const k = {
                path: 0
            };
            t.CompressedExistenceProof = {
                encode(e, n = r.default.Writer.create()) {
                    0 !== e.key.length && n.uint32(10).bytes(e.key), 0 !== e.value.length && n.uint32(18).bytes(e.value), void 0 !== e.leaf && t.LeafOp.encode(e.leaf, n.uint32(26).fork()).ldelim(), n.uint32(34).fork();
                    for (const t of e.path) n.int32(t);
                    return n.ldelim(), n
                },
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, k);
                    for (s.path = [], s.key = new Uint8Array, s.value = new Uint8Array; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.key = o.bytes();
                                break;
                            case 2:
                                s.value = o.bytes();
                                break;
                            case 3:
                                s.leaf = t.LeafOp.decode(o, o.uint32());
                                break;
                            case 4:
                                if (2 == (7 & e)) {
                                    const e = o.uint32() + o.pos;
                                    for (; o.pos < e;) s.path.push(o.int32())
                                } else s.path.push(o.int32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, k);
                    if (n.path = [], n.key = new Uint8Array, n.value = new Uint8Array, void 0 !== e.key && null !== e.key && (n.key = E(e.key)), void 0 !== e.value && null !== e.value && (n.value = E(e.value)), void 0 !== e.leaf && null !== e.leaf ? n.leaf = t.LeafOp.fromJSON(e.leaf) : n.leaf = void 0, void 0 !== e.path && null !== e.path)
                        for (const t of e.path) n.path.push(Number(t));
                    return n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.key && (n.key = C(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.value && (n.value = C(void 0 !== e.value ? e.value : new Uint8Array)), void 0 !== e.leaf && (n.leaf = e.leaf ? t.LeafOp.toJSON(e.leaf) : void 0), e.path ? n.path = e.path.map(e => e) : n.path = [], n
                },
                fromPartial(e) {
                    var n, o;
                    const i = Object.assign({}, k);
                    if (i.key = null !== (n = e.key) && void 0 !== n ? n : new Uint8Array, i.value = null !== (o = e.value) && void 0 !== o ? o : new Uint8Array, void 0 !== e.leaf && null !== e.leaf ? i.leaf = t.LeafOp.fromPartial(e.leaf) : i.leaf = void 0, i.path = [], void 0 !== e.path && null !== e.path)
                        for (const t of e.path) i.path.push(t);
                    return i
                }
            };
            const P = {};
            t.CompressedNonExistenceProof = {
                encode: (e, n = r.default.Writer.create()) => (0 !== e.key.length && n.uint32(10).bytes(e.key), void 0 !== e.left && t.CompressedExistenceProof.encode(e.left, n.uint32(18).fork()).ldelim(), void 0 !== e.right && t.CompressedExistenceProof.encode(e.right, n.uint32(26).fork()).ldelim(), n),
                decode(e, n) {
                    const o = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let i = void 0 === n ? o.len : o.pos + n;
                    const s = Object.assign({}, P);
                    for (s.key = new Uint8Array; o.pos < i;) {
                        const e = o.uint32();
                        switch (e >>> 3) {
                            case 1:
                                s.key = o.bytes();
                                break;
                            case 2:
                                s.left = t.CompressedExistenceProof.decode(o, o.uint32());
                                break;
                            case 3:
                                s.right = t.CompressedExistenceProof.decode(o, o.uint32());
                                break;
                            default:
                                o.skipType(7 & e)
                        }
                    }
                    return s
                },
                fromJSON(e) {
                    const n = Object.assign({}, P);
                    return n.key = new Uint8Array, void 0 !== e.key && null !== e.key && (n.key = E(e.key)), void 0 !== e.left && null !== e.left ? n.left = t.CompressedExistenceProof.fromJSON(e.left) : n.left = void 0, void 0 !== e.right && null !== e.right ? n.right = t.CompressedExistenceProof.fromJSON(e.right) : n.right = void 0, n
                },
                toJSON(e) {
                    const n = {};
                    return void 0 !== e.key && (n.key = C(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.left && (n.left = e.left ? t.CompressedExistenceProof.toJSON(e.left) : void 0), void 0 !== e.right && (n.right = e.right ? t.CompressedExistenceProof.toJSON(e.right) : void 0), n
                },
                fromPartial(e) {
                    var n;
                    const o = Object.assign({}, P);
                    return o.key = null !== (n = e.key) && void 0 !== n ? n : new Uint8Array, void 0 !== e.left && null !== e.left ? o.left = t.CompressedExistenceProof.fromPartial(e.left) : o.left = void 0, void 0 !== e.right && null !== e.right ? o.right = t.CompressedExistenceProof.fromPartial(e.right) : o.right = void 0, o
                }
            };
            var N = (() => {
                if (void 0 !== N) return N;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const R = N.atob || (e => N.Buffer.from(e, "base64").toString("binary"));

            function E(e) {
                const t = R(e),
                    n = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                return n
            }
            const w = N.btoa || (e => N.Buffer.from(e, "binary").toString("base64"));

            function C(e) {
                const t = [];
                for (const n of e) t.push(String.fromCharCode(n));
                return w(t.join(""))
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        2070: function(e, t, n) {
            var o = n(4391),
                i = n(4392),
                r = n(1159);

            function s(e, t) {
                return e.value - t * r.inputBytes(e)
            }
            e.exports = function(e, t, n) {
                e = e.concat().sort((function(e, t) {
                    return s(t, n) - s(e, n)
                }));
                var r = i(e, t, n);
                return r.inputs ? r : o(e, t, n)
            }
        },
        2526: function(e, t, n) {
            var o, i, r;
            i = [], void 0 === (r = "function" == typeof(o = function() {
                var e = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

                function t(e) {
                    var t, n, o = e.replace(/^v/, "").replace(/\+.*$/, ""),
                        i = (n = "-", -1 === (t = o).indexOf(n) ? t.length : t.indexOf(n)),
                        r = o.substring(0, i).split(".");
                    return r.push(o.substring(i + 1)), r
                }

                function n(e) {
                    return isNaN(Number(e)) ? e : Number(e)
                }

                function o(t) {
                    if ("string" != typeof t) throw new TypeError("Invalid argument expected string");
                    if (!e.test(t)) throw new Error("Invalid argument not valid semver ('" + t + "' received)")
                }

                function i(e, i) {
                    [e, i].forEach(o);
                    for (var r = t(e), s = t(i), a = 0; a < Math.max(r.length - 1, s.length - 1); a++) {
                        var d = parseInt(r[a] || 0, 10),
                            u = parseInt(s[a] || 0, 10);
                        if (d > u) return 1;
                        if (u > d) return -1
                    }
                    var c = r[r.length - 1],
                        l = s[s.length - 1];
                    if (c && l) {
                        var f = c.split(".").map(n),
                            p = l.split(".").map(n);
                        for (a = 0; a < Math.max(f.length, p.length); a++) {
                            if (void 0 === f[a] || "string" == typeof p[a] && "number" == typeof f[a]) return -1;
                            if (void 0 === p[a] || "string" == typeof f[a] && "number" == typeof p[a]) return 1;
                            if (f[a] > p[a]) return 1;
                            if (p[a] > f[a]) return -1
                        }
                    } else if (c || l) return c ? -1 : 1;
                    return 0
                }
                var r = [">", ">=", "=", "<", "<="],
                    s = {
                        ">": [1],
                        ">=": [0, 1],
                        "=": [0],
                        "<=": [-1, 0],
                        "<": [-1]
                    };
                return i.validate = function(t) {
                    return "string" == typeof t && e.test(t)
                }, i.compare = function(e, t, n) {
                    ! function(e) {
                        if ("string" != typeof e) throw new TypeError("Invalid operator type, expected string but got " + typeof e);
                        if (-1 === r.indexOf(e)) throw new TypeError("Invalid operator, expected one of " + r.join("|"))
                    }(n);
                    var o = i(e, t);
                    return s[n].indexOf(o) > -1
                }, i
            }) ? o.apply(t, i) : o) || (e.exports = r)
        },
        2533: function(e, t, n) {
            function o(e) {
                if (e) return function(e) {
                    for (var t in o.prototype) e[t] = o.prototype[t];
                    return e
                }(e)
            }
            e.exports = o, o.prototype.on = o.prototype.addEventListener = function(e, t) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
            }, o.prototype.once = function(e, t) {
                function n() {
                    this.off(e, n), t.apply(this, arguments)
                }
                return n.fn = t, this.on(e, n), this
            }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function(e, t) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n, o = this._callbacks["$" + e];
                if (!o) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                for (var i = 0; i < o.length; i++)
                    if ((n = o[i]) === t || n.fn === t) {
                        o.splice(i, 1);
                        break
                    } return 0 === o.length && delete this._callbacks["$" + e], this
            }, o.prototype.emit = function(e) {
                this._callbacks = this._callbacks || {};
                for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                if (n) {
                    o = 0;
                    for (var i = (n = n.slice(0)).length; o < i; ++o) n[o].apply(this, t)
                }
                return this
            }, o.prototype.listeners = function(e) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
            }, o.prototype.hasListeners = function(e) {
                return !!this.listeners(e).length
            }
        },
        2727: function(e, t, n) {
            var o = n(2728),
                i = n(101);

            function r(e, t) {
                var n;
                (Array.isArray(e) || e instanceof Uint8Array) && (e = new Buffer(e)), null != t ? ("number" == typeof t && (t = new Buffer([t])), n = Buffer.concat([t, e])) : n = e;
                var i = d(n).slice(0, 4),
                    r = Buffer.concat([n, i]);
                return o.encode(r)
            }

            function s(e, t) {
                var n, i = o.decode(e),
                    r = new Buffer(i);
                if (null == t) n = 0;
                else if ("number" == typeof t && (t = new Buffer([t])), n = t.length, r.slice(0, n).toString("hex") !== t.toString("hex")) throw new Error("Invalid version");
                var s = r.slice(-4),
                    a = r.length - 4,
                    u = r.slice(0, a),
                    c = d(u).slice(0, 4);
                if (s.toString("hex") !== c.toString("hex")) throw new Error("Invalid checksum");
                return u.slice(n)
            }

            function a(e, t) {
                try {
                    s(e, t)
                } catch (e) {
                    return !1
                }
                return !0
            }

            function d(e) {
                var t = i("sha256").update(e).digest();
                return i("sha256").update(t).digest()
            }
            e.exports = {
                encode: r,
                decode: s,
                isValid: a,
                createEncoder: function(e) {
                    return function(t) {
                        return r(t, e)
                    }
                },
                createDecoder: function(e) {
                    return function(t) {
                        return s(t, e)
                    }
                },
                createValidator: function(e) {
                    return function(t) {
                        return a(t, e)
                    }
                }
            }
        },
        2728: function(e, t) {
            for (var n = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", o = {}, i = 0; i < n.length; i++) o[n.charAt(i)] = i;
            e.exports = {
                encode: function(e) {
                    if (0 === e.length) return "";
                    var t, o = [0];
                    for (s = 0; s < e.length; s++) {
                        for (t = 0; t < o.length; t++) o[t] <<= 8;
                        o[0] += e[s];
                        var i = 0;
                        for (t = 0; t < o.length; ++t) o[t] += i, i = o[t] / 58 | 0, o[t] %= 58;
                        for (; i;) o.push(i % 58), i = i / 58 | 0
                    }
                    for (s = 0; 0 === e[s] && s < e.length - 1; s++) o.push(0);
                    for (var r = "", s = o.length - 1; s >= 0; s--) r += n[o[s]];
                    return r
                },
                decode: function(e) {
                    if (0 === e.length) return [];
                    var t, n, i = [0];
                    for (t = 0; t < e.length; t++) {
                        var r = e[t];
                        if (!(r in o)) throw new Error("Non-base58 character");
                        for (n = 0; n < i.length; n++) i[n] *= 58;
                        i[0] += o[r];
                        var s = 0;
                        for (n = 0; n < i.length; ++n) i[n] += s, s = i[n] >> 8, i[n] &= 255;
                        for (; s;) i.push(255 & s), s >>= 8
                    }
                    for (t = 0;
                        "1" === e[t] && t < e.length - 1; t++) i.push(0);
                    return i.reverse()
                }
            }
        },
        295: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PageResponse = t.PageRequest = t.protobufPackage = void 0;
            const i = o(n(1)),
                r = o(n(8));
            t.protobufPackage = "cosmos.base.query.v1beta1";
            const s = {
                offset: i.default.UZERO,
                limit: i.default.UZERO,
                countTotal: !1
            };
            t.PageRequest = {
                encode: (e, t = r.default.Writer.create()) => (0 !== e.key.length && t.uint32(10).bytes(e.key), e.offset.isZero() || t.uint32(16).uint64(e.offset), e.limit.isZero() || t.uint32(24).uint64(e.limit), !0 === e.countTotal && t.uint32(32).bool(e.countTotal), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, s);
                    for (i.key = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.key = n.bytes();
                                break;
                            case 2:
                                i.offset = n.uint64();
                                break;
                            case 3:
                                i.limit = n.uint64();
                                break;
                            case 4:
                                i.countTotal = n.bool();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, s);
                    return t.key = new Uint8Array, void 0 !== e.key && null !== e.key && (t.key = c(e.key)), void 0 !== e.offset && null !== e.offset ? t.offset = i.default.fromString(e.offset) : t.offset = i.default.UZERO, void 0 !== e.limit && null !== e.limit ? t.limit = i.default.fromString(e.limit) : t.limit = i.default.UZERO, void 0 !== e.countTotal && null !== e.countTotal ? t.countTotal = Boolean(e.countTotal) : t.countTotal = !1, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.key && (t.key = f(void 0 !== e.key ? e.key : new Uint8Array)), void 0 !== e.offset && (t.offset = (e.offset || i.default.UZERO).toString()), void 0 !== e.limit && (t.limit = (e.limit || i.default.UZERO).toString()), void 0 !== e.countTotal && (t.countTotal = e.countTotal), t
                },
                fromPartial(e) {
                    var t, n;
                    const o = Object.assign({}, s);
                    return o.key = null !== (t = e.key) && void 0 !== t ? t : new Uint8Array, void 0 !== e.offset && null !== e.offset ? o.offset = e.offset : o.offset = i.default.UZERO, void 0 !== e.limit && null !== e.limit ? o.limit = e.limit : o.limit = i.default.UZERO, o.countTotal = null !== (n = e.countTotal) && void 0 !== n && n, o
                }
            };
            const a = {
                total: i.default.UZERO
            };
            t.PageResponse = {
                encode: (e, t = r.default.Writer.create()) => (0 !== e.nextKey.length && t.uint32(10).bytes(e.nextKey), e.total.isZero() || t.uint32(16).uint64(e.total), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, a);
                    for (i.nextKey = new Uint8Array; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.nextKey = n.bytes();
                                break;
                            case 2:
                                i.total = n.uint64();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, a);
                    return t.nextKey = new Uint8Array, void 0 !== e.nextKey && null !== e.nextKey && (t.nextKey = c(e.nextKey)), void 0 !== e.total && null !== e.total ? t.total = i.default.fromString(e.total) : t.total = i.default.UZERO, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.nextKey && (t.nextKey = f(void 0 !== e.nextKey ? e.nextKey : new Uint8Array)), void 0 !== e.total && (t.total = (e.total || i.default.UZERO).toString()), t
                },
                fromPartial(e) {
                    var t;
                    const n = Object.assign({}, a);
                    return n.nextKey = null !== (t = e.nextKey) && void 0 !== t ? t : new Uint8Array, void 0 !== e.total && null !== e.total ? n.total = e.total : n.total = i.default.UZERO, n
                }
            };
            var d = (() => {
                if (void 0 !== d) return d;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw "Unable to locate global object"
            })();
            const u = d.atob || (e => d.Buffer.from(e, "base64").toString("binary"));

            function c(e) {
                const t = u(e),
                    n = new Uint8Array(t.length);
                for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                return n
            }
            const l = d.btoa || (e => d.Buffer.from(e, "binary").toString("base64"));

            function f(e) {
                const t = [];
                for (const n of e) t.push(String.fromCharCode(n));
                return l(t.join(""))
            }
            r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        3031: function(e, t) {
            function n(e) {
                return Object.prototype.toString.call(e)
            }
            t.isArray = function(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e)
            }, t.isBoolean = function(e) {
                return "boolean" == typeof e
            }, t.isNull = function(e) {
                return null === e
            }, t.isNullOrUndefined = function(e) {
                return null == e
            }, t.isNumber = function(e) {
                return "number" == typeof e
            }, t.isString = function(e) {
                return "string" == typeof e
            }, t.isSymbol = function(e) {
                return "symbol" == typeof e
            }, t.isUndefined = function(e) {
                return void 0 === e
            }, t.isRegExp = function(e) {
                return "[object RegExp]" === n(e)
            }, t.isObject = function(e) {
                return "object" == typeof e && null !== e
            }, t.isDate = function(e) {
                return "[object Date]" === n(e)
            }, t.isError = function(e) {
                return "[object Error]" === n(e) || e instanceof Error
            }, t.isFunction = function(e) {
                return "function" == typeof e
            }, t.isPrimitive = function(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }, t.isBuffer = Buffer.isBuffer
        },
        3478: function(e, t) {
            ! function() {
                "use strict";

                function e(t, n, o, i) {
                    return this instanceof e ? (this.domain = t || void 0, this.path = n || "/", this.secure = !!o, this.script = !!i, this) : new e(t, n, o, i)
                }

                function n(e, t, o) {
                    return e instanceof n ? e : this instanceof n ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(o || "/"), this.explicit_path = !1, this.domain = t || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, e && this.parse(e, t, o), this) : new n(e, t, o)
                }
                e.All = Object.freeze(Object.create(null)), t.CookieAccessInfo = e, t.Cookie = n, n.prototype.toString = function() {
                    var e = [this.name + "=" + this.value];
                    return this.expiration_date !== 1 / 0 && e.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && e.push("domain=" + this.domain), this.path && e.push("path=" + this.path), this.secure && e.push("secure"), this.noscript && e.push("httponly"), e.join("; ")
                }, n.prototype.toValueString = function() {
                    return this.name + "=" + this.value
                };
                var o = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;

                function i() {
                    var e, t;
                    return this instanceof i ? (e = Object.create(null), this.setCookie = function(o, i, r) {
                        var s, a;
                        if (s = (o = new n(o, i, r)).expiration_date <= Date.now(), void 0 !== e[o.name]) {
                            for (t = e[o.name], a = 0; a < t.length; a += 1)
                                if (t[a].collidesWith(o)) return s ? (t.splice(a, 1), 0 === t.length && delete e[o.name], !1) : (t[a] = o, o);
                            return !s && (t.push(o), o)
                        }
                        return !s && (e[o.name] = [o], e[o.name])
                    }, this.getCookie = function(n, o) {
                        var i, r;
                        if (t = e[n])
                            for (r = 0; r < t.length; r += 1)
                                if ((i = t[r]).expiration_date <= Date.now()) 0 === t.length && delete e[i.name];
                                else if (i.matches(o)) return i
                    }, this.getCookies = function(t) {
                        var n, o, i = [];
                        for (n in e)(o = this.getCookie(n, t)) && i.push(o);
                        return i.toString = function() {
                            return i.join(":")
                        }, i.toValueString = function() {
                            return i.map((function(e) {
                                return e.toValueString()
                            })).join("; ")
                        }, i
                    }, this) : new i
                }
                n.prototype.parse = function(e, t, o) {
                    if (this instanceof n) {
                        if (e.length > 32768) return void console.warn("Cookie too long for parsing (>32768 characters)");
                        var i, r = e.split(";").filter((function(e) {
                                return !!e
                            })),
                            s = r[0].match(/([^=]+)=([\s\S]*)/);
                        if (!s) return void console.warn("Invalid cookie header encountered. Header: '" + e + "'");
                        var a = s[1],
                            d = s[2];
                        if ("string" != typeof a || 0 === a.length || "string" != typeof d) return void console.warn("Unable to extract values from cookie header. Cookie: '" + e + "'");
                        for (this.name = a, this.value = d, i = 1; i < r.length; i += 1) switch (a = (s = r[i].match(/([^=]+)(?:=([\s\S]*))?/))[1].trim().toLowerCase(), d = s[2], a) {
                            case "httponly":
                                this.noscript = !0;
                                break;
                            case "expires":
                                this.expiration_date = d ? Number(Date.parse(d)) : 1 / 0;
                                break;
                            case "path":
                                this.path = d ? d.trim() : "", this.explicit_path = !0;
                                break;
                            case "domain":
                                this.domain = d ? d.trim() : "", this.explicit_domain = !!this.domain;
                                break;
                            case "secure":
                                this.secure = !0
                        }
                        return this.explicit_path || (this.path = o || "/"), this.explicit_domain || (this.domain = t), this
                    }
                    return (new n).parse(e, t, o)
                }, n.prototype.matches = function(t) {
                    return t === e.All || !(this.noscript && t.script || this.secure && !t.secure || !this.collidesWith(t))
                }, n.prototype.collidesWith = function(e) {
                    if (this.path && !e.path || this.domain && !e.domain) return !1;
                    if (this.path && 0 !== e.path.indexOf(this.path)) return !1;
                    if (this.explicit_path && 0 !== e.path.indexOf(this.path)) return !1;
                    var t = e.domain && e.domain.replace(/^[\.]/, ""),
                        n = this.domain && this.domain.replace(/^[\.]/, "");
                    if (n === t) return !0;
                    if (n) {
                        if (!this.explicit_domain) return !1;
                        var o = t.indexOf(n);
                        return -1 !== o && o === t.length - n.length
                    }
                    return !0
                }, t.CookieJar = i, i.prototype.setCookies = function(e, t, i) {
                    var r, s, a = [];
                    for (e = (e = Array.isArray(e) ? e : e.split(o)).map((function(e) {
                            return new n(e, t, i)
                        })), r = 0; r < e.length; r += 1) s = e[r], this.setCookie(s, t, i) && a.push(s);
                    return a
                }
            }()
        },
        3496: function(e, t, n) {
            const o = n(3497),
                {
                    hexStringToBuffer: i,
                    profiles: r
                } = n(3505),
                {
                    cidV0ToV1Base32: s
                } = n(3526);
            e.exports = {
                helpers: {
                    cidV0ToV1Base32: s
                },
                decode: function(e) {
                    const t = i(e),
                        n = o.getCodec(t),
                        s = o.rmPrefix(t);
                    let a = r[n];
                    return a || (a = r.default), a.decode(s)
                },
                fromIpfs: function(e) {
                    return this.encode("ipfs-ns", e)
                },
                fromSwarm: function(e) {
                    return this.encode("swarm-ns", e)
                },
                encode: function(e, t) {
                    let n = r[e];
                    n || (n = r.default);
                    const i = n.encode(t);
                    return o.addPrefix(e, i).toString("hex")
                },
                getCodec: function(e) {
                    let t = i(e);
                    return o.getCodec(t)
                }
            }
        },
        3505: function(e, t, n) {
            const o = n(1854),
                i = n(1071),
                r = e => {
                    let t = e.slice(0, 2),
                        n = e.slice(2),
                        o = "";
                    return o = "0x" === t ? n : e, i.fromHexString(o)
                },
                s = {
                    swarm: e => {
                        const t = i.encode(r(e), "keccak-256");
                        return new o(1, "swarm-manifest", t).buffer
                    },
                    ipfs: e => {
                        const t = i.fromB58String(e);
                        return new o(1, "dag-pb", t).buffer
                    },
                    utf8: e => Buffer.from(e, "utf8")
                },
                a = {
                    hexMultiHash: e => {
                        const t = new o(e);
                        return i.decode(t.multihash).digest.toString("hex")
                    },
                    b58MultiHash: e => {
                        const t = new o(e);
                        return i.toB58String(t.multihash)
                    },
                    utf8: e => e.toString("utf8")
                },
                d = {
                    "swarm-ns": {
                        encode: s.swarm,
                        decode: a.hexMultiHash
                    },
                    "ipfs-ns": {
                        encode: s.ipfs,
                        decode: a.b58MultiHash
                    },
                    "ipns-ns": {
                        encode: s.ipfs,
                        decode: a.b58MultiHash
                    },
                    default: {
                        encode: s.utf8,
                        decode: a.utf8
                    }
                };
            t.hexStringToBuffer = r, t.profiles = d
        },
        3526: function(e, t, n) {
            const o = n(1854);
            t.cidV0ToV1Base32 = e => {
                let t = new o(e);
                return 0 === t.version && (t = t.toV1()), t.toString("base32")
            }
        },
        4099: function(e, t, n) {
            ! function(t) {
                "use strict";
                var n = {
                    bytesToHex: function(e) {
                        return function(e) {
                            return e.map((function(e) {
                                return t = e.toString(16), n = 2, t.length > n ? t : Array(n - t.length + 1).join("0") + t;
                                var t, n
                            })).join("")
                        }(e)
                    },
                    hexToBytes: function(e) {
                        if (e.length % 2 == 1) throw new Error("hexToBytes can't have a string with an odd number of characters.");
                        return 0 === e.indexOf("0x") && (e = e.slice(2)), e.match(/../g).map((function(e) {
                            return parseInt(e, 16)
                        }))
                    }
                };
                e.exports ? e.exports = n : t.convertHex = n
            }(this)
        },
        4100: function(e, t, n) {
            ! function(t) {
                "use strict";
                var n = {
                    bytesToString: function(e) {
                        return e.map((function(e) {
                            return String.fromCharCode(e)
                        })).join("")
                    },
                    stringToBytes: function(e) {
                        return e.split("").map((function(e) {
                            return e.charCodeAt(0)
                        }))
                    }
                };
                n.UTF8 = {
                    bytesToString: function(e) {
                        return decodeURIComponent(escape(n.bytesToString(e)))
                    },
                    stringToBytes: function(e) {
                        return n.stringToBytes(unescape(encodeURIComponent(e)))
                    }
                }, e.exports ? e.exports = n : t.convertString = n
            }(this)
        },
        4320: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QueryClientImpl = t.QueryParamsResponse = t.QueryParamsRequest = t.QueryAccountResponse = t.QueryAccountRequest = t.protobufPackage = void 0;
            const i = o(n(1)),
                r = o(n(8)),
                s = n(113),
                a = n(1146);
            t.protobufPackage = "cosmos.auth.v1beta1";
            const d = {
                address: ""
            };
            t.QueryAccountRequest = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.address && t.uint32(10).string(e.address), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, d);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.address = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, d);
                    return void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = e.address), t
                },
                fromPartial(e) {
                    var t;
                    const n = Object.assign({}, d);
                    return n.address = null !== (t = e.address) && void 0 !== t ? t : "", n
                }
            };
            const u = {};
            t.QueryAccountResponse = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.account && s.Any.encode(e.account, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.account = s.Any.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.account && null !== e.account ? t.account = s.Any.fromJSON(e.account) : t.account = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.account && (t.account = e.account ? s.Any.toJSON(e.account) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.account && null !== e.account ? t.account = s.Any.fromPartial(e.account) : t.account = void 0, t
                }
            };
            const c = {};
            t.QueryParamsRequest = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, c);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, c),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, c)
            };
            const l = {};
            t.QueryParamsResponse = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.params && a.Params.encode(e.params, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, l);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.params = a.Params.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.params && null !== e.params ? t.params = a.Params.fromJSON(e.params) : t.params = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.params && (t.params = e.params ? a.Params.toJSON(e.params) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.params && null !== e.params ? t.params = a.Params.fromPartial(e.params) : t.params = void 0, t
                }
            };
            t.QueryClientImpl = class QueryClientImpl {
                constructor(e) {
                    this.rpc = e, this.Account = this.Account.bind(this), this.Params = this.Params.bind(this)
                }
                Account(e) {
                    const n = t.QueryAccountRequest.encode(e).finish();
                    return this.rpc.request("cosmos.auth.v1beta1.Query", "Account", n).then(e => t.QueryAccountResponse.decode(new r.default.Reader(e)))
                }
                Params(e) {
                    const n = t.QueryParamsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.auth.v1beta1.Query", "Params", n).then(e => t.QueryParamsResponse.decode(new r.default.Reader(e)))
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4322: function(e, t, n) {
            "use strict";
            var o = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QueryClientImpl = t.QueryDenomMetadataResponse = t.QueryDenomMetadataRequest = t.QueryDenomsMetadataResponse = t.QueryDenomsMetadataRequest = t.QueryParamsResponse = t.QueryParamsRequest = t.QuerySupplyOfResponse = t.QuerySupplyOfRequest = t.QueryTotalSupplyResponse = t.QueryTotalSupplyRequest = t.QueryAllBalancesResponse = t.QueryAllBalancesRequest = t.QueryBalanceResponse = t.QueryBalanceRequest = t.protobufPackage = void 0;
            const i = o(n(1)),
                r = o(n(8)),
                s = n(160),
                a = n(295),
                d = n(2030);
            t.protobufPackage = "cosmos.bank.v1beta1";
            const u = {
                address: "",
                denom: ""
            };
            t.QueryBalanceRequest = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.address && t.uint32(10).string(e.address), "" !== e.denom && t.uint32(18).string(e.denom), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, u);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.address = n.string();
                                break;
                            case 2:
                                i.denom = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, u);
                    return void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = e.address), void 0 !== e.denom && (t.denom = e.denom), t
                },
                fromPartial(e) {
                    var t, n;
                    const o = Object.assign({}, u);
                    return o.address = null !== (t = e.address) && void 0 !== t ? t : "", o.denom = null !== (n = e.denom) && void 0 !== n ? n : "", o
                }
            };
            const c = {};
            t.QueryBalanceResponse = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.balance && s.Coin.encode(e.balance, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, c);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.balance = s.Coin.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.balance && null !== e.balance ? t.balance = s.Coin.fromJSON(e.balance) : t.balance = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.balance && (t.balance = e.balance ? s.Coin.toJSON(e.balance) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, c);
                    return void 0 !== e.balance && null !== e.balance ? t.balance = s.Coin.fromPartial(e.balance) : t.balance = void 0, t
                }
            };
            const l = {
                address: ""
            };
            t.QueryAllBalancesRequest = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.address && t.uint32(10).string(e.address), void 0 !== e.pagination && a.PageRequest.encode(e.pagination, t.uint32(18).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, l);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.address = n.string();
                                break;
                            case 2:
                                i.pagination = a.PageRequest.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, l);
                    return void 0 !== e.address && null !== e.address ? t.address = String(e.address) : t.address = "", void 0 !== e.pagination && null !== e.pagination ? t.pagination = a.PageRequest.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.address && (t.address = e.address), void 0 !== e.pagination && (t.pagination = e.pagination ? a.PageRequest.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    var t;
                    const n = Object.assign({}, l);
                    return n.address = null !== (t = e.address) && void 0 !== t ? t : "", void 0 !== e.pagination && null !== e.pagination ? n.pagination = a.PageRequest.fromPartial(e.pagination) : n.pagination = void 0, n
                }
            };
            const f = {};
            t.QueryAllBalancesResponse = {
                encode(e, t = r.default.Writer.create()) {
                    for (const n of e.balances) s.Coin.encode(n, t.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && a.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(), t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, f);
                    for (i.balances = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.balances.push(s.Coin.decode(n, n.uint32()));
                                break;
                            case 2:
                                i.pagination = a.PageResponse.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, f);
                    if (t.balances = [], void 0 !== e.balances && null !== e.balances)
                        for (const n of e.balances) t.balances.push(s.Coin.fromJSON(n));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = a.PageResponse.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.balances ? t.balances = e.balances.map(e => e ? s.Coin.toJSON(e) : void 0) : t.balances = [], void 0 !== e.pagination && (t.pagination = e.pagination ? a.PageResponse.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, f);
                    if (t.balances = [], void 0 !== e.balances && null !== e.balances)
                        for (const n of e.balances) t.balances.push(s.Coin.fromPartial(n));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = a.PageResponse.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const p = {};
            t.QueryTotalSupplyRequest = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, p);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, p),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, p)
            };
            const m = {};
            t.QueryTotalSupplyResponse = {
                encode(e, t = r.default.Writer.create()) {
                    for (const n of e.supply) s.Coin.encode(n, t.uint32(10).fork()).ldelim();
                    return t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, m);
                    for (i.supply = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.supply.push(s.Coin.decode(n, n.uint32()));
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, m);
                    if (t.supply = [], void 0 !== e.supply && null !== e.supply)
                        for (const n of e.supply) t.supply.push(s.Coin.fromJSON(n));
                    return t
                },
                toJSON(e) {
                    const t = {};
                    return e.supply ? t.supply = e.supply.map(e => e ? s.Coin.toJSON(e) : void 0) : t.supply = [], t
                },
                fromPartial(e) {
                    const t = Object.assign({}, m);
                    if (t.supply = [], void 0 !== e.supply && null !== e.supply)
                        for (const n of e.supply) t.supply.push(s.Coin.fromPartial(n));
                    return t
                }
            };
            const h = {
                denom: ""
            };
            t.QuerySupplyOfRequest = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, h);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.denom = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, h);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), t
                },
                fromPartial(e) {
                    var t;
                    const n = Object.assign({}, h);
                    return n.denom = null !== (t = e.denom) && void 0 !== t ? t : "", n
                }
            };
            const v = {};
            t.QuerySupplyOfResponse = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.amount && s.Coin.encode(e.amount, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, v);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.amount = s.Coin.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, v);
                    return void 0 !== e.amount && null !== e.amount ? t.amount = s.Coin.fromJSON(e.amount) : t.amount = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.amount && (t.amount = e.amount ? s.Coin.toJSON(e.amount) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, v);
                    return void 0 !== e.amount && null !== e.amount ? t.amount = s.Coin.fromPartial(e.amount) : t.amount = void 0, t
                }
            };
            const g = {};
            t.QueryParamsRequest = {
                encode: (e, t = r.default.Writer.create()) => t,
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, g);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        n.skipType(7 & e)
                    }
                    return i
                },
                fromJSON: e => Object.assign({}, g),
                toJSON: e => ({}),
                fromPartial: e => Object.assign({}, g)
            };
            const b = {};
            t.QueryParamsResponse = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.params && d.Params.encode(e.params, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, b);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.params = d.Params.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.params && null !== e.params ? t.params = d.Params.fromJSON(e.params) : t.params = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.params && (t.params = e.params ? d.Params.toJSON(e.params) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, b);
                    return void 0 !== e.params && null !== e.params ? t.params = d.Params.fromPartial(e.params) : t.params = void 0, t
                }
            };
            const y = {};
            t.QueryDenomsMetadataRequest = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.pagination && a.PageRequest.encode(e.pagination, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, y);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.pagination = a.PageRequest.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, y);
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = a.PageRequest.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.pagination && (t.pagination = e.pagination ? a.PageRequest.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, y);
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = a.PageRequest.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const O = {};
            t.QueryDenomsMetadataResponse = {
                encode(e, t = r.default.Writer.create()) {
                    for (const n of e.metadatas) d.Metadata.encode(n, t.uint32(10).fork()).ldelim();
                    return void 0 !== e.pagination && a.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(), t
                },
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, O);
                    for (i.metadatas = []; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.metadatas.push(d.Metadata.decode(n, n.uint32()));
                                break;
                            case 2:
                                i.pagination = a.PageResponse.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, O);
                    if (t.metadatas = [], void 0 !== e.metadatas && null !== e.metadatas)
                        for (const n of e.metadatas) t.metadatas.push(d.Metadata.fromJSON(n));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = a.PageResponse.fromJSON(e.pagination) : t.pagination = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return e.metadatas ? t.metadatas = e.metadatas.map(e => e ? d.Metadata.toJSON(e) : void 0) : t.metadatas = [], void 0 !== e.pagination && (t.pagination = e.pagination ? a.PageResponse.toJSON(e.pagination) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, O);
                    if (t.metadatas = [], void 0 !== e.metadatas && null !== e.metadatas)
                        for (const n of e.metadatas) t.metadatas.push(d.Metadata.fromPartial(n));
                    return void 0 !== e.pagination && null !== e.pagination ? t.pagination = a.PageResponse.fromPartial(e.pagination) : t.pagination = void 0, t
                }
            };
            const S = {
                denom: ""
            };
            t.QueryDenomMetadataRequest = {
                encode: (e, t = r.default.Writer.create()) => ("" !== e.denom && t.uint32(10).string(e.denom), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, S);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.denom = n.string();
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, S);
                    return void 0 !== e.denom && null !== e.denom ? t.denom = String(e.denom) : t.denom = "", t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.denom && (t.denom = e.denom), t
                },
                fromPartial(e) {
                    var t;
                    const n = Object.assign({}, S);
                    return n.denom = null !== (t = e.denom) && void 0 !== t ? t : "", n
                }
            };
            const x = {};
            t.QueryDenomMetadataResponse = {
                encode: (e, t = r.default.Writer.create()) => (void 0 !== e.metadata && d.Metadata.encode(e.metadata, t.uint32(10).fork()).ldelim(), t),
                decode(e, t) {
                    const n = e instanceof r.default.Reader ? e : new r.default.Reader(e);
                    let o = void 0 === t ? n.len : n.pos + t;
                    const i = Object.assign({}, x);
                    for (; n.pos < o;) {
                        const e = n.uint32();
                        switch (e >>> 3) {
                            case 1:
                                i.metadata = d.Metadata.decode(n, n.uint32());
                                break;
                            default:
                                n.skipType(7 & e)
                        }
                    }
                    return i
                },
                fromJSON(e) {
                    const t = Object.assign({}, x);
                    return void 0 !== e.metadata && null !== e.metadata ? t.metadata = d.Metadata.fromJSON(e.metadata) : t.metadata = void 0, t
                },
                toJSON(e) {
                    const t = {};
                    return void 0 !== e.metadata && (t.metadata = e.metadata ? d.Metadata.toJSON(e.metadata) : void 0), t
                },
                fromPartial(e) {
                    const t = Object.assign({}, x);
                    return void 0 !== e.metadata && null !== e.metadata ? t.metadata = d.Metadata.fromPartial(e.metadata) : t.metadata = void 0, t
                }
            };
            t.QueryClientImpl = class QueryClientImpl {
                constructor(e) {
                    this.rpc = e, this.Balance = this.Balance.bind(this), this.AllBalances = this.AllBalances.bind(this), this.TotalSupply = this.TotalSupply.bind(this), this.SupplyOf = this.SupplyOf.bind(this), this.Params = this.Params.bind(this), this.DenomMetadata = this.DenomMetadata.bind(this), this.DenomsMetadata = this.DenomsMetadata.bind(this)
                }
                Balance(e) {
                    const n = t.QueryBalanceRequest.encode(e).finish();
                    return this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", n).then(e => t.QueryBalanceResponse.decode(new r.default.Reader(e)))
                }
                AllBalances(e) {
                    const n = t.QueryAllBalancesRequest.encode(e).finish();
                    return this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", n).then(e => t.QueryAllBalancesResponse.decode(new r.default.Reader(e)))
                }
                TotalSupply(e) {
                    const n = t.QueryTotalSupplyRequest.encode(e).finish();
                    return this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", n).then(e => t.QueryTotalSupplyResponse.decode(new r.default.Reader(e)))
                }
                SupplyOf(e) {
                    const n = t.QuerySupplyOfRequest.encode(e).finish();
                    return this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", n).then(e => t.QuerySupplyOfResponse.decode(new r.default.Reader(e)))
                }
                Params(e) {
                    const n = t.QueryParamsRequest.encode(e).finish();
                    return this.rpc.request("cosmos.bank.v1beta1.Query", "Params", n).then(e => t.QueryParamsResponse.decode(new r.default.Reader(e)))
                }
                DenomMetadata(e) {
                    const n = t.QueryDenomMetadataRequest.encode(e).finish();
                    return this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", n).then(e => t.QueryDenomMetadataResponse.decode(new r.default.Reader(e)))
                }
                DenomsMetadata(e) {
                    const n = t.QueryDenomsMetadataRequest.encode(e).finish();
                    return this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", n).then(e => t.QueryDenomsMetadataResponse.decode(new r.default.Reader(e)))
                }
            }, r.default.util.Long !== i.default && (r.default.util.Long = i.default, r.default.configure())
        },
        4391: function(e, t, n) {
            var o = n(1159);
            e.exports = function(e, t, n) {
                if (!isFinite(o.uintOrNaN(n))) return {};
                for (var i = o.transactionBytes([], t), r = 0, s = [], a = o.sumOrNaN(t), d = 0; d < e.length; ++d) {
                    var u = e[d],
                        c = o.inputBytes(u),
                        l = n * c,
                        f = o.uintOrNaN(u.value);
                    if (l > u.value) {
                        if (d === e.length - 1) return {
                            fee: n * (i + c)
                        }
                    } else if (i += c, r += f, s.push(u), !(r < a + n * i)) return o.finalize(s, t, n)
                }
                return {
                    fee: n * i
                }
            }
        },
        4392: function(e, t, n) {
            var o = n(1159);
            e.exports = function(e, t, n) {
                if (!isFinite(o.uintOrNaN(n))) return {};
                for (var i = o.transactionBytes([], t), r = 0, s = [], a = o.sumOrNaN(t), d = o.dustThreshold({}, n), u = 0; u < e.length; ++u) {
                    var c = e[u],
                        l = o.inputBytes(c),
                        f = n * (i + l),
                        p = o.uintOrNaN(c.value);
                    if (!(r + p > a + f + d) && (i += l, r += p, s.push(c), !(r < a + f))) return o.finalize(s, t, n)
                }
                return {
                    fee: n * i
                }
            }
        },
        4575: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, o;
                if (typeof e + typeof t != "stringstring") return !1;
                for (e = e.split("."), t = t.split("."), n = 0, o = Math.max(e.length, t.length); n < o; n++) {
                    if (e[n] && !t[n] && parseInt(e[n]) > 0 || parseInt(e[n]) > parseInt(t[n])) return 1;
                    if (t[n] && !e[n] && parseInt(t[n]) > 0 || parseInt(e[n]) < parseInt(t[n])) return -1
                }
                return 0
            }
        },
        570: function(e, t) {
            e.exports = function(e, t) {
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }
        }
    }
]);