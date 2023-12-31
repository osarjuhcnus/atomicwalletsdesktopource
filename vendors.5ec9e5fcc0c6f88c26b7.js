(window.webpackJsonp = window.webpackJsonp || []).push([
    [322], {
        5425: function(e, r, n) {
            "use strict";
            var H = n(2);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var G = function(e, r) {
                    if (!r && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = X(r);
                    if (n && n.has(e)) return n.get(e);
                    var H = {},
                        G = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var q in e)
                        if ("default" !== q && Object.prototype.hasOwnProperty.call(e, q)) {
                            var V = G ? Object.getOwnPropertyDescriptor(e, q) : null;
                            V && (V.get || V.set) ? Object.defineProperty(H, q, V) : H[q] = e[q]
                        } H.default = e, n && n.set(e, H);
                    return H
                }(n(9525)),
                q = H(n(461)),
                V = n(29),
                W = n(26),
                $ = n(930);

            function X(e) {
                if ("function" != typeof WeakMap) return null;
                var r = new WeakMap,
                    n = new WeakMap;
                return (X = function(e) {
                    return e ? n : r
                })(e)
            }
            class ALGOCoin extends((0, $.HasProviders)(q.default)) {
                constructor({
                    alias: e,
                    notify: r,
                    feeData: n,
                    explorers: H,
                    txWebUrl: G,
                    socket: q
                }) {
                    super({
                        alias: e,
                        notify: r,
                        name: "Algorand",
                        ticker: "ALGO",
                        decimal: 6,
                        derivation: "m/44'/283'/0'/0/0",
                        unspendableBalance: "100000",
                        explorers: H,
                        txWebUrl: G,
                        socket: q
                    }), this.fee = n.fee, this.transactions = []
                }
                async loadWallet(e) {
                    const r = G.secretKeyToMnemonic(e),
                        n = G.mnemonicToSecretKey(r);
                    if (!n) throw new V.WalletError({
                        type: W.WALLET_ERROR,
                        error: new Error("can't get a privateKey!"),
                        instance: this
                    });
                    return this.privateKey = Buffer.from(n.sk).toString("hex"), this.address = n.addr, this
                }
                async getInfo() {
                    const {
                        balance: e = null
                    } = await this.getProvider("balance").getInfo(this.address);
                    return this.balance = e, {
                        balance: e
                    }
                }
                getAddress() {
                    if (this.privateKey) {
                        const e = new Uint8Array(Buffer.from(this.privateKey, "hex")),
                            r = G.secretKeyToMnemonic(e);
                        return G.mnemonicToSecretKey(r).addr
                    }
                    throw new V.WalletError({
                        type: W.WALLET_ERROR,
                        error: new Error("privateKey is empty!"),
                        instance: this
                    })
                }
                validateAddress(e) {
                    return G.isValidAddress(e)
                }
                async createTransaction({
                    address: e,
                    amount: r
                }) {
                    const n = await this.getProvider("send").getLatestBlock();
                    return this.signTransaction({
                        from: this.address,
                        to: e,
                        fee: Number(this.fee),
                        amount: Number(r),
                        firstRound: n["last-round"],
                        lastRound: n["last-round"] + 1e3,
                        note: new Uint8Array(0),
                        genesisID: "mainnet-v1.0",
                        genesisHash: "wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=",
                        flatFee: !0
                    }).blob
                }
                signTransaction(e) {
                    const r = new Uint8Array(Buffer.from(this.privateKey, "hex"));
                    return G.signTransaction(e, r)
                }
            }
            var Y = ALGOCoin;
            r.default = Y
        },
        9525: function(module, exports, __webpack_require__) {
            var t;
            self, t = function() {
                return (() => {
                    var __webpack_modules__ = {
                            5406: function(e) {
                                e.exports = function(e) {
                                    var r = {};

                                    function n(H) {
                                        if (r[H]) return r[H].exports;
                                        var G = r[H] = {
                                            i: H,
                                            l: !1,
                                            exports: {}
                                        };
                                        return e[H].call(G.exports, G, G.exports, n), G.l = !0, G.exports
                                    }
                                    return n.m = e, n.c = r, n.d = function(e, r, H) {
                                        n.o(e, r) || Object.defineProperty(e, r, {
                                            enumerable: !0,
                                            get: H
                                        })
                                    }, n.r = function(e) {
                                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                            value: "Module"
                                        }), Object.defineProperty(e, "__esModule", {
                                            value: !0
                                        })
                                    }, n.t = function(e, r) {
                                        if (1 & r && (e = n(e)), 8 & r) return e;
                                        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
                                        var H = Object.create(null);
                                        if (n.r(H), Object.defineProperty(H, "default", {
                                                enumerable: !0,
                                                value: e
                                            }), 2 & r && "string" != typeof e)
                                            for (var G in e) n.d(H, G, function(r) {
                                                return e[r]
                                            }.bind(null, G));
                                        return H
                                    }, n.n = function(e) {
                                        var r = e && e.__esModule ? function() {
                                            return e.default
                                        } : function() {
                                            return e
                                        };
                                        return n.d(r, "a", r), r
                                    }, n.o = function(e, r) {
                                        return Object.prototype.hasOwnProperty.call(e, r)
                                    }, n.p = "", n(n.s = 0)
                                }([function(e, r, n) {
                                    "use strict";
                                    n.r(r), n.d(r, "encode", (function() {
                                        return de
                                    })), n.d(r, "decode", (function() {
                                        return Ue
                                    })), n.d(r, "decodeAsync", (function() {
                                        return De
                                    })), n.d(r, "decodeArrayStream", (function() {
                                        return Ne
                                    })), n.d(r, "decodeStream", (function() {
                                        return Pe
                                    })), n.d(r, "Decoder", (function() {
                                        return _e
                                    })), n.d(r, "Encoder", (function() {
                                        return pe
                                    })), n.d(r, "ExtensionCodec", (function() {
                                        return ue
                                    })), n.d(r, "ExtData", (function() {
                                        return Z
                                    })), n.d(r, "EXT_TIMESTAMP", (function() {
                                        return re
                                    })), n.d(r, "encodeDateToTimeSpec", (function() {
                                        return oe
                                    })), n.d(r, "encodeTimeSpecToTimestamp", (function() {
                                        return ne
                                    })), n.d(r, "decodeTimestampToTimeSpec", (function() {
                                        return ie
                                    })), n.d(r, "encodeTimestampExtension", (function() {
                                        return se
                                    })), n.d(r, "decodeTimestampExtension", (function() {
                                        return ae
                                    }));
                                    var H = function(e, r) {
                                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                                            if (!n) return e;
                                            var H, G, q = n.call(e),
                                                V = [];
                                            try {
                                                for (;
                                                    (void 0 === r || r-- > 0) && !(H = q.next()).done;) V.push(H.value)
                                            } catch (e) {
                                                G = {
                                                    error: e
                                                }
                                            } finally {
                                                try {
                                                    H && !H.done && (n = q.return) && n.call(q)
                                                } finally {
                                                    if (G) throw G.error
                                                }
                                            }
                                            return V
                                        },
                                        G = function() {
                                            for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(H(arguments[r]));
                                            return e
                                        },
                                        q = "undefined" != typeof process && "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder;

                                    function V(e) {
                                        for (var r = e.length, n = 0, H = 0; H < r;) {
                                            var G = e.charCodeAt(H++);
                                            if (0 != (4294967168 & G))
                                                if (0 == (4294965248 & G)) n += 2;
                                                else {
                                                    if (G >= 55296 && G <= 56319 && H < r) {
                                                        var q = e.charCodeAt(H);
                                                        56320 == (64512 & q) && (++H, G = ((1023 & G) << 10) + (1023 & q) + 65536)
                                                    }
                                                    n += 0 == (4294901760 & G) ? 3 : 4
                                                }
                                            else n++
                                        }
                                        return n
                                    }
                                    var W = q ? new TextEncoder : void 0,
                                        $ = "undefined" != typeof process ? 200 : 0,
                                        X = (null == W ? void 0 : W.encodeInto) ? function(e, r, n) {
                                            W.encodeInto(e, r.subarray(n))
                                        } : function(e, r, n) {
                                            r.set(W.encode(e), n)
                                        };

                                    function Y(e, r, n) {
                                        for (var H = r, q = H + n, V = [], W = ""; H < q;) {
                                            var $ = e[H++];
                                            if (0 == (128 & $)) V.push($);
                                            else if (192 == (224 & $)) {
                                                var X = 63 & e[H++];
                                                V.push((31 & $) << 6 | X)
                                            } else if (224 == (240 & $)) {
                                                X = 63 & e[H++];
                                                var Y = 63 & e[H++];
                                                V.push((31 & $) << 12 | X << 6 | Y)
                                            } else if (240 == (248 & $)) {
                                                var J = (7 & $) << 18 | (X = 63 & e[H++]) << 12 | (Y = 63 & e[H++]) << 6 | 63 & e[H++];
                                                J > 65535 && (J -= 65536, V.push(J >>> 10 & 1023 | 55296), J = 56320 | 1023 & J), V.push(J)
                                            } else V.push($);
                                            V.length >= 4096 && (W += String.fromCharCode.apply(String, G(V)), V.length = 0)
                                        }
                                        return V.length > 0 && (W += String.fromCharCode.apply(String, G(V))), W
                                    }
                                    var J = q ? new TextDecoder : null,
                                        Q = "undefined" != typeof process ? 200 : 0,
                                        Z = function(e, r) {
                                            this.type = e, this.data = r
                                        };

                                    function ee(e, r, n) {
                                        var H = Math.floor(n / 4294967296),
                                            G = n;
                                        e.setUint32(r, H), e.setUint32(r + 4, G)
                                    }

                                    function te(e, r) {
                                        var n = e.getInt32(r),
                                            H = e.getUint32(r + 4),
                                            G = n < Math.floor(Number.MIN_SAFE_INTEGER / 4294967296) || n === Math.floor(Number.MIN_SAFE_INTEGER / 4294967296) && 0 === H,
                                            q = n > Math.floor(Number.MAX_SAFE_INTEGER / 4294967296);
                                        return G || q ? BigInt(n) * BigInt(4294967296) + BigInt(H) : 4294967296 * n + H
                                    }
                                    var re = -1;

                                    function ne(e) {
                                        var r, n = e.sec,
                                            H = e.nsec;
                                        if (n >= 0 && H >= 0 && n <= 17179869183) {
                                            if (0 === H && n <= 4294967295) {
                                                var G = new Uint8Array(4);
                                                return (r = new DataView(G.buffer)).setUint32(0, n), G
                                            }
                                            var q = n / 4294967296,
                                                V = 4294967295 & n;
                                            return G = new Uint8Array(8), (r = new DataView(G.buffer)).setUint32(0, H << 2 | 3 & q), r.setUint32(4, V), G
                                        }
                                        return G = new Uint8Array(12), (r = new DataView(G.buffer)).setUint32(0, H), ee(r, 4, n), G
                                    }

                                    function oe(e) {
                                        var r = e.getTime(),
                                            n = Math.floor(r / 1e3),
                                            H = 1e6 * (r - 1e3 * n),
                                            G = Math.floor(H / 1e9);
                                        return {
                                            sec: n + G,
                                            nsec: H - 1e9 * G
                                        }
                                    }

                                    function se(e) {
                                        return e instanceof Date ? ne(oe(e)) : null
                                    }

                                    function ie(e) {
                                        var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
                                        switch (e.byteLength) {
                                            case 4:
                                                return {
                                                    sec: r.getUint32(0), nsec: 0
                                                };
                                            case 8:
                                                var n = r.getUint32(0);
                                                return {
                                                    sec: 4294967296 * (3 & n) + r.getUint32(4), nsec: n >>> 2
                                                };
                                            case 12:
                                                return {
                                                    sec: te(r, 4), nsec: r.getUint32(0)
                                                };
                                            default:
                                                throw new Error("Unrecognized data size for timestamp: " + e.length)
                                        }
                                    }

                                    function ae(e) {
                                        var r = ie(e);
                                        return new Date(1e3 * r.sec + r.nsec / 1e6)
                                    }
                                    var ce = {
                                            type: re,
                                            encode: se,
                                            decode: ae
                                        },
                                        ue = function() {
                                            function e() {
                                                this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(ce)
                                            }
                                            return e.prototype.register = function(e) {
                                                var r = e.type,
                                                    n = e.encode,
                                                    H = e.decode;
                                                if (r >= 0) this.encoders[r] = n, this.decoders[r] = H;
                                                else {
                                                    var G = 1 + r;
                                                    this.builtInEncoders[G] = n, this.builtInDecoders[G] = H
                                                }
                                            }, e.prototype.tryToEncode = function(e, r) {
                                                for (var n = 0; n < this.builtInEncoders.length; n++)
                                                    if (null != (H = this.builtInEncoders[n]) && null != (G = H(e, r))) return new Z(-1 - n, G);
                                                for (n = 0; n < this.encoders.length; n++) {
                                                    var H, G;
                                                    if (null != (H = this.encoders[n]) && null != (G = H(e, r))) return new Z(n, G)
                                                }
                                                return e instanceof Z ? e : null
                                            }, e.prototype.decode = function(e, r, n) {
                                                var H = r < 0 ? this.builtInDecoders[-1 - r] : this.decoders[r];
                                                return H ? H(e, r, n) : new Z(r, e)
                                            }, e.defaultCodec = new e, e
                                        }();

                                    function le(e) {
                                        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer ? new Uint8Array(e) : Uint8Array.from(e)
                                    }
                                    var he = function(e) {
                                            var r = "function" == typeof Symbol && Symbol.iterator,
                                                n = r && e[r],
                                                H = 0;
                                            if (n) return n.call(e);
                                            if (e && "number" == typeof e.length) return {
                                                next: function() {
                                                    return e && H >= e.length && (e = void 0), {
                                                        value: e && e[H++],
                                                        done: !e
                                                    }
                                                }
                                            };
                                            throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
                                        },
                                        pe = function() {
                                            function e(e, r, n, H, G, q, V, W) {
                                                void 0 === e && (e = ue.defaultCodec), void 0 === r && (r = void 0), void 0 === n && (n = 100), void 0 === H && (H = 2048), void 0 === G && (G = !1), void 0 === q && (q = !1), void 0 === V && (V = !1), void 0 === W && (W = !1), this.extensionCodec = e, this.context = r, this.maxDepth = n, this.initialBufferSize = H, this.sortKeys = G, this.forceFloat32 = q, this.ignoreUndefined = V, this.forceIntegerToFloat = W, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer)
                                            }
                                            return e.prototype.getUint8Array = function() {
                                                return this.bytes.subarray(0, this.pos)
                                            }, e.prototype.reinitializeState = function() {
                                                this.pos = 0
                                            }, e.prototype.encode = function(e) {
                                                return this.reinitializeState(), this.doEncode(e, 1), this.getUint8Array()
                                            }, e.prototype.doEncode = function(e, r) {
                                                if (r > this.maxDepth) throw new Error("Too deep objects in depth " + r);
                                                null == e ? this.encodeNil() : "boolean" == typeof e ? this.encodeBoolean(e) : "number" == typeof e ? this.encodeNumber(e) : "string" == typeof e ? this.encodeString(e) : "bigint" == typeof e ? this.encodebigint(e) : this.encodeObject(e, r)
                                            }, e.prototype.ensureBufferSizeToWrite = function(e) {
                                                var r = this.pos + e;
                                                this.view.byteLength < r && this.resizeBuffer(2 * r)
                                            }, e.prototype.resizeBuffer = function(e) {
                                                var r = new ArrayBuffer(e),
                                                    n = new Uint8Array(r),
                                                    H = new DataView(r);
                                                n.set(this.bytes), this.view = H, this.bytes = n
                                            }, e.prototype.encodeNil = function() {
                                                this.writeU8(192)
                                            }, e.prototype.encodeBoolean = function(e) {
                                                !1 === e ? this.writeU8(194) : this.writeU8(195)
                                            }, e.prototype.encodeNumber = function(e) {
                                                Number.isSafeInteger(e) && !this.forceIntegerToFloat ? e >= 0 ? e < 128 ? this.writeU8(e) : e < 256 ? (this.writeU8(204), this.writeU8(e)) : e < 65536 ? (this.writeU8(205), this.writeU16(e)) : e < 4294967296 ? (this.writeU8(206), this.writeU32(e)) : (this.writeU8(207), this.writeU64(e)) : e >= -32 ? this.writeU8(224 | e + 32) : e >= -128 ? (this.writeU8(208), this.writeI8(e)) : e >= -32768 ? (this.writeU8(209), this.writeI16(e)) : e >= -2147483648 ? (this.writeU8(210), this.writeI32(e)) : (this.writeU8(211), this.writeI64(e)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(e)) : (this.writeU8(203), this.writeF64(e))
                                            }, e.prototype.encodebigint = function(e) {
                                                e >= BigInt(0) ? e < BigInt(128) ? this.writeU8(Number(e)) : e < BigInt(256) ? (this.writeU8(204), this.writeU8(Number(e))) : e < BigInt(65536) ? (this.writeU8(205), this.writeU16(Number(e))) : e < BigInt(4294967296) ? (this.writeU8(206), this.writeU32(Number(e))) : (this.writeU8(207), this.writeBig64(e)) : e >= BigInt(-32) ? this.writeU8(224 | Number(e) + 32) : e >= BigInt(-128) ? (this.writeU8(208), this.writeI8(Number(e))) : e >= BigInt(-32768) ? (this.writeU8(209), this.writeI16(Number(e))) : e >= BigInt(-2147483648) ? (this.writeU8(210), this.writeI32(Number(e))) : (this.writeU8(211), this.writeBig64(e))
                                            }, e.prototype.writeStringHeader = function(e) {
                                                if (e < 32) this.writeU8(160 + e);
                                                else if (e < 256) this.writeU8(217), this.writeU8(e);
                                                else if (e < 65536) this.writeU8(218), this.writeU16(e);
                                                else {
                                                    if (!(e < 4294967296)) throw new Error("Too long string: " + e + " bytes in UTF-8");
                                                    this.writeU8(219), this.writeU32(e)
                                                }
                                            }, e.prototype.encodeString = function(e) {
                                                var r = e.length;
                                                if (q && r > $) {
                                                    var n = V(e);
                                                    this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n), X(e, this.bytes, this.pos), this.pos += n
                                                } else n = V(e), this.ensureBufferSizeToWrite(5 + n), this.writeStringHeader(n),
                                                    function(e, r, n) {
                                                        for (var H = e.length, G = n, q = 0; q < H;) {
                                                            var V = e.charCodeAt(q++);
                                                            if (0 != (4294967168 & V)) {
                                                                if (0 == (4294965248 & V)) r[G++] = V >> 6 & 31 | 192;
                                                                else {
                                                                    if (V >= 55296 && V <= 56319 && q < H) {
                                                                        var W = e.charCodeAt(q);
                                                                        56320 == (64512 & W) && (++q, V = ((1023 & V) << 10) + (1023 & W) + 65536)
                                                                    }
                                                                    0 == (4294901760 & V) ? (r[G++] = V >> 12 & 15 | 224, r[G++] = V >> 6 & 63 | 128) : (r[G++] = V >> 18 & 7 | 240, r[G++] = V >> 12 & 63 | 128, r[G++] = V >> 6 & 63 | 128)
                                                                }
                                                                r[G++] = 63 & V | 128
                                                            } else r[G++] = V
                                                        }
                                                    }(e, this.bytes, this.pos), this.pos += n
                                            }, e.prototype.encodeObject = function(e, r) {
                                                var n = this.extensionCodec.tryToEncode(e, this.context);
                                                if (null != n) this.encodeExtension(n);
                                                else if (Array.isArray(e)) this.encodeArray(e, r);
                                                else if (ArrayBuffer.isView(e)) this.encodeBinary(e);
                                                else {
                                                    if ("object" != typeof e) throw new Error("Unrecognized object: " + Object.prototype.toString.apply(e));
                                                    this.encodeMap(e, r)
                                                }
                                            }, e.prototype.encodeBinary = function(e) {
                                                var r = e.byteLength;
                                                if (r < 256) this.writeU8(196), this.writeU8(r);
                                                else if (r < 65536) this.writeU8(197), this.writeU16(r);
                                                else {
                                                    if (!(r < 4294967296)) throw new Error("Too large binary: " + r);
                                                    this.writeU8(198), this.writeU32(r)
                                                }
                                                var n = le(e);
                                                this.writeU8a(n)
                                            }, e.prototype.encodeArray = function(e, r) {
                                                var n, H, G = e.length;
                                                if (G < 16) this.writeU8(144 + G);
                                                else if (G < 65536) this.writeU8(220), this.writeU16(G);
                                                else {
                                                    if (!(G < 4294967296)) throw new Error("Too large array: " + G);
                                                    this.writeU8(221), this.writeU32(G)
                                                }
                                                try {
                                                    for (var q = he(e), V = q.next(); !V.done; V = q.next()) {
                                                        var W = V.value;
                                                        this.doEncode(W, r + 1)
                                                    }
                                                } catch (e) {
                                                    n = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        V && !V.done && (H = q.return) && H.call(q)
                                                    } finally {
                                                        if (n) throw n.error
                                                    }
                                                }
                                            }, e.prototype.countWithoutUndefined = function(e, r) {
                                                var n, H, G = 0;
                                                try {
                                                    for (var q = he(r), V = q.next(); !V.done; V = q.next()) void 0 !== e[V.value] && G++
                                                } catch (e) {
                                                    n = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        V && !V.done && (H = q.return) && H.call(q)
                                                    } finally {
                                                        if (n) throw n.error
                                                    }
                                                }
                                                return G
                                            }, e.prototype.encodeMap = function(e, r) {
                                                var n, H, G = Object.keys(e);
                                                this.sortKeys && G.sort();
                                                var q = this.ignoreUndefined ? this.countWithoutUndefined(e, G) : G.length;
                                                if (q < 16) this.writeU8(128 + q);
                                                else if (q < 65536) this.writeU8(222), this.writeU16(q);
                                                else {
                                                    if (!(q < 4294967296)) throw new Error("Too large map object: " + q);
                                                    this.writeU8(223), this.writeU32(q)
                                                }
                                                try {
                                                    for (var V = he(G), W = V.next(); !W.done; W = V.next()) {
                                                        var $ = W.value,
                                                            X = e[$];
                                                        this.ignoreUndefined && void 0 === X || (this.encodeString($), this.doEncode(X, r + 1))
                                                    }
                                                } catch (e) {
                                                    n = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        W && !W.done && (H = V.return) && H.call(V)
                                                    } finally {
                                                        if (n) throw n.error
                                                    }
                                                }
                                            }, e.prototype.encodeExtension = function(e) {
                                                var r = e.data.length;
                                                if (1 === r) this.writeU8(212);
                                                else if (2 === r) this.writeU8(213);
                                                else if (4 === r) this.writeU8(214);
                                                else if (8 === r) this.writeU8(215);
                                                else if (16 === r) this.writeU8(216);
                                                else if (r < 256) this.writeU8(199), this.writeU8(r);
                                                else if (r < 65536) this.writeU8(200), this.writeU16(r);
                                                else {
                                                    if (!(r < 4294967296)) throw new Error("Too large extension object: " + r);
                                                    this.writeU8(201), this.writeU32(r)
                                                }
                                                this.writeI8(e.type), this.writeU8a(e.data)
                                            }, e.prototype.writeU8 = function(e) {
                                                this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, e), this.pos++
                                            }, e.prototype.writeU8a = function(e) {
                                                var r = e.length;
                                                this.ensureBufferSizeToWrite(r), this.bytes.set(e, this.pos), this.pos += r
                                            }, e.prototype.writeI8 = function(e) {
                                                this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e), this.pos++
                                            }, e.prototype.writeU16 = function(e) {
                                                this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, e), this.pos += 2
                                            }, e.prototype.writeI16 = function(e) {
                                                this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, e), this.pos += 2
                                            }, e.prototype.writeU32 = function(e) {
                                                this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, e), this.pos += 4
                                            }, e.prototype.writeI32 = function(e) {
                                                this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, e), this.pos += 4
                                            }, e.prototype.writeF32 = function(e) {
                                                this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, e), this.pos += 4
                                            }, e.prototype.writeF64 = function(e) {
                                                this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, e), this.pos += 8
                                            }, e.prototype.writeU64 = function(e) {
                                                this.ensureBufferSizeToWrite(8),
                                                    function(e, r, n) {
                                                        var H = n / 4294967296,
                                                            G = n;
                                                        e.setUint32(r, H), e.setUint32(r + 4, G)
                                                    }(this.view, this.pos, e), this.pos += 8
                                            }, e.prototype.writeI64 = function(e) {
                                                this.ensureBufferSizeToWrite(8), ee(this.view, this.pos, e), this.pos += 8
                                            }, e.prototype.writeBig64 = function(e) {
                                                this.ensureBufferSizeToWrite(8),
                                                    function(e, r, n) {
                                                        var H = Number(n / BigInt(4294967296)),
                                                            G = Number(n % BigInt(4294967296));
                                                        H < 0 && 0 !== G && (H -= 1), e.setUint32(r, H), e.setUint32(r + 4, G)
                                                    }(this.view, this.pos, e), this.pos += 8
                                            }, e
                                        }(),
                                        fe = {};

                                    function de(e, r) {
                                        return void 0 === r && (r = fe), new pe(r.extensionCodec, r.context, r.maxDepth, r.initialBufferSize, r.sortKeys, r.forceFloat32, r.ignoreUndefined, r.forceIntegerToFloat).encode(e)
                                    }

                                    function ge(e) {
                                        return (e < 0 ? "-" : "") + "0x" + Math.abs(e).toString(16).padStart(2, "0")
                                    }
                                    var ye = function() {
                                            function e(e, r) {
                                                void 0 === e && (e = 16), void 0 === r && (r = 16), this.maxKeyLength = e, this.maxLengthPerKey = r, this.hit = 0, this.miss = 0, this.caches = [];
                                                for (var n = 0; n < this.maxKeyLength; n++) this.caches.push([])
                                            }
                                            return e.prototype.canBeCached = function(e) {
                                                return e > 0 && e <= this.maxKeyLength
                                            }, e.prototype.get = function(e, r, n) {
                                                var H = this.caches[n - 1],
                                                    G = H.length;
                                                e: for (var q = 0; q < G; q++) {
                                                    for (var V = H[q], W = V.bytes, $ = 0; $ < n; $++)
                                                        if (W[$] !== e[r + $]) continue e;
                                                    return V.value
                                                }
                                                return null
                                            }, e.prototype.store = function(e, r) {
                                                var n = this.caches[e.length - 1],
                                                    H = {
                                                        bytes: e,
                                                        value: r
                                                    };
                                                n.length >= this.maxLengthPerKey ? n[Math.random() * n.length | 0] = H : n.push(H)
                                            }, e.prototype.decode = function(e, r, n) {
                                                var H = this.get(e, r, n);
                                                if (null != H) return this.hit++, H;
                                                this.miss++;
                                                var G = Y(e, r, n),
                                                    q = Uint8Array.prototype.slice.call(e, r, r + n);
                                                return this.store(q, G), G
                                            }, e
                                        }(),
                                        me = function(e, r) {
                                            var n, H, G, q, V = {
                                                label: 0,
                                                sent: function() {
                                                    if (1 & G[0]) throw G[1];
                                                    return G[1]
                                                },
                                                trys: [],
                                                ops: []
                                            };
                                            return q = {
                                                next: W(0),
                                                throw: W(1),
                                                return: W(2)
                                            }, "function" == typeof Symbol && (q[Symbol.iterator] = function() {
                                                return this
                                            }), q;

                                            function W(q) {
                                                return function(W) {
                                                    return function(q) {
                                                        if (n) throw new TypeError("Generator is already executing.");
                                                        for (; V;) try {
                                                            if (n = 1, H && (G = 2 & q[0] ? H.return : q[0] ? H.throw || ((G = H.return) && G.call(H), 0) : H.next) && !(G = G.call(H, q[1])).done) return G;
                                                            switch (H = 0, G && (q = [2 & q[0], G.value]), q[0]) {
                                                                case 0:
                                                                case 1:
                                                                    G = q;
                                                                    break;
                                                                case 4:
                                                                    return V.label++, {
                                                                        value: q[1],
                                                                        done: !1
                                                                    };
                                                                case 5:
                                                                    V.label++, H = q[1], q = [0];
                                                                    continue;
                                                                case 7:
                                                                    q = V.ops.pop(), V.trys.pop();
                                                                    continue;
                                                                default:
                                                                    if (!((G = (G = V.trys).length > 0 && G[G.length - 1]) || 6 !== q[0] && 2 !== q[0])) {
                                                                        V = 0;
                                                                        continue
                                                                    }
                                                                    if (3 === q[0] && (!G || q[1] > G[0] && q[1] < G[3])) {
                                                                        V.label = q[1];
                                                                        break
                                                                    }
                                                                    if (6 === q[0] && V.label < G[1]) {
                                                                        V.label = G[1], G = q;
                                                                        break
                                                                    }
                                                                    if (G && V.label < G[2]) {
                                                                        V.label = G[2], V.ops.push(q);
                                                                        break
                                                                    }
                                                                    G[2] && V.ops.pop(), V.trys.pop();
                                                                    continue
                                                            }
                                                            q = r.call(e, V)
                                                        } catch (e) {
                                                            q = [6, e], H = 0
                                                        } finally {
                                                            n = G = 0
                                                        }
                                                        if (5 & q[0]) throw q[1];
                                                        return {
                                                            value: q[0] ? q[1] : void 0,
                                                            done: !0
                                                        }
                                                    }([q, W])
                                                }
                                            }
                                        },
                                        be = function(e) {
                                            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                                            var r, n = e[Symbol.asyncIterator];
                                            return n ? n.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), r = {}, H("next"), H("throw"), H("return"), r[Symbol.asyncIterator] = function() {
                                                return this
                                            }, r);

                                            function H(n) {
                                                r[n] = e[n] && function(r) {
                                                    return new Promise((function(H, G) {
                                                        ! function(e, r, n, H) {
                                                            Promise.resolve(H).then((function(r) {
                                                                e({
                                                                    value: r,
                                                                    done: n
                                                                })
                                                            }), r)
                                                        }(H, G, (r = e[n](r)).done, r.value)
                                                    }))
                                                }
                                            }
                                        },
                                        Ae = function(e) {
                                            return this instanceof Ae ? (this.v = e, this) : new Ae(e)
                                        },
                                        we = function(e, r, n) {
                                            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                                            var H, G = n.apply(e, r || []),
                                                q = [];
                                            return H = {}, V("next"), V("throw"), V("return"), H[Symbol.asyncIterator] = function() {
                                                return this
                                            }, H;

                                            function V(e) {
                                                G[e] && (H[e] = function(r) {
                                                    return new Promise((function(n, H) {
                                                        q.push([e, r, n, H]) > 1 || W(e, r)
                                                    }))
                                                })
                                            }

                                            function W(e, r) {
                                                try {
                                                    (n = G[e](r)).value instanceof Ae ? Promise.resolve(n.value.v).then($, X) : Y(q[0][2], n)
                                                } catch (e) {
                                                    Y(q[0][3], e)
                                                }
                                                var n
                                            }

                                            function $(e) {
                                                W("next", e)
                                            }

                                            function X(e) {
                                                W("throw", e)
                                            }

                                            function Y(e, r) {
                                                e(r), q.shift(), q.length && W(q[0][0], q[0][1])
                                            }
                                        },
                                        ve = new DataView(new ArrayBuffer(0)),
                                        xe = new Uint8Array(ve.buffer),
                                        Se = function() {
                                            try {
                                                ve.getInt8(0)
                                            } catch (e) {
                                                return e.constructor
                                            }
                                            throw new Error("never reached")
                                        }(),
                                        Ee = new Se("Insufficient data"),
                                        Te = new ye,
                                        _e = function() {
                                            function e(e, r, n, H, G, q, V, W) {
                                                void 0 === e && (e = ue.defaultCodec), void 0 === r && (r = void 0), void 0 === n && (n = 4294967295), void 0 === H && (H = 4294967295), void 0 === G && (G = 4294967295), void 0 === q && (q = 4294967295), void 0 === V && (V = 4294967295), void 0 === W && (W = Te), this.extensionCodec = e, this.context = r, this.maxStrLength = n, this.maxBinLength = H, this.maxArrayLength = G, this.maxMapLength = q, this.maxExtLength = V, this.keyDecoder = W, this.totalPos = 0, this.pos = 0, this.view = ve, this.bytes = xe, this.headByte = -1, this.stack = []
                                            }
                                            return e.prototype.reinitializeState = function() {
                                                this.totalPos = 0, this.headByte = -1
                                            }, e.prototype.setBuffer = function(e) {
                                                this.bytes = le(e), this.view = function(e) {
                                                    if (e instanceof ArrayBuffer) return new DataView(e);
                                                    var r = le(e);
                                                    return new DataView(r.buffer, r.byteOffset, r.byteLength)
                                                }(this.bytes), this.pos = 0
                                            }, e.prototype.appendBuffer = function(e) {
                                                if (-1 !== this.headByte || this.hasRemaining()) {
                                                    var r = this.bytes.subarray(this.pos),
                                                        n = le(e),
                                                        H = new Uint8Array(r.length + n.length);
                                                    H.set(r), H.set(n, r.length), this.setBuffer(H)
                                                } else this.setBuffer(e)
                                            }, e.prototype.hasRemaining = function(e) {
                                                return void 0 === e && (e = 1), this.view.byteLength - this.pos >= e
                                            }, e.prototype.createNoExtraBytesError = function(e) {
                                                var r = this.view,
                                                    n = this.pos;
                                                return new RangeError("Extra " + (r.byteLength - n) + " of " + r.byteLength + " byte(s) found at buffer[" + e + "]")
                                            }, e.prototype.decode = function(e) {
                                                return this.reinitializeState(), this.setBuffer(e), this.doDecodeSingleSync()
                                            }, e.prototype.doDecodeSingleSync = function() {
                                                var e = this.doDecodeSync();
                                                if (this.hasRemaining()) throw this.createNoExtraBytesError(this.pos);
                                                return e
                                            }, e.prototype.decodeAsync = function(e) {
                                                var r, n, H, G;
                                                return function(e, r, n, H) {
                                                    return new(n || (n = Promise))((function(r, G) {
                                                        function q(e) {
                                                            try {
                                                                W(H.next(e))
                                                            } catch (e) {
                                                                G(e)
                                                            }
                                                        }

                                                        function V(e) {
                                                            try {
                                                                W(H.throw(e))
                                                            } catch (e) {
                                                                G(e)
                                                            }
                                                        }

                                                        function W(e) {
                                                            var H;
                                                            e.done ? r(e.value) : (H = e.value, H instanceof n ? H : new n((function(e) {
                                                                e(H)
                                                            }))).then(q, V)
                                                        }
                                                        W((H = H.apply(e, [])).next())
                                                    }))
                                                }(this, 0, void 0, (function() {
                                                    var q, V, W, $, X, Y, J, Q;
                                                    return me(this, (function(Z) {
                                                        switch (Z.label) {
                                                            case 0:
                                                                q = !1, Z.label = 1;
                                                            case 1:
                                                                Z.trys.push([1, 6, 7, 12]), r = be(e), Z.label = 2;
                                                            case 2:
                                                                return [4, r.next()];
                                                            case 3:
                                                                if ((n = Z.sent()).done) return [3, 5];
                                                                if (W = n.value, q) throw this.createNoExtraBytesError(this.totalPos);
                                                                this.appendBuffer(W);
                                                                try {
                                                                    V = this.doDecodeSync(), q = !0
                                                                } catch (e) {
                                                                    if (!(e instanceof Se)) throw e
                                                                }
                                                                this.totalPos += this.pos, Z.label = 4;
                                                            case 4:
                                                                return [3, 2];
                                                            case 5:
                                                                return [3, 12];
                                                            case 6:
                                                                return $ = Z.sent(), H = {
                                                                    error: $
                                                                }, [3, 12];
                                                            case 7:
                                                                return Z.trys.push([7, , 10, 11]), n && !n.done && (G = r.return) ? [4, G.call(r)] : [3, 9];
                                                            case 8:
                                                                Z.sent(), Z.label = 9;
                                                            case 9:
                                                                return [3, 11];
                                                            case 10:
                                                                if (H) throw H.error;
                                                                return [7];
                                                            case 11:
                                                                return [7];
                                                            case 12:
                                                                if (q) {
                                                                    if (this.hasRemaining()) throw this.createNoExtraBytesError(this.totalPos);
                                                                    return [2, V]
                                                                }
                                                                throw Y = (X = this).headByte, J = X.pos, Q = X.totalPos, new RangeError("Insufficient data in parcing " + ge(Y) + " at " + Q + " (" + J + " in the current buffer)")
                                                        }
                                                    }))
                                                }))
                                            }, e.prototype.decodeArrayStream = function(e) {
                                                return this.decodeMultiAsync(e, !0)
                                            }, e.prototype.decodeStream = function(e) {
                                                return this.decodeMultiAsync(e, !1)
                                            }, e.prototype.decodeMultiAsync = function(e, r) {
                                                return we(this, arguments, (function() {
                                                    var n, H, G, q, V, W, $, X, Y;
                                                    return me(this, (function(J) {
                                                        switch (J.label) {
                                                            case 0:
                                                                n = r, H = -1, J.label = 1;
                                                            case 1:
                                                                J.trys.push([1, 13, 14, 19]), G = be(e), J.label = 2;
                                                            case 2:
                                                                return [4, Ae(G.next())];
                                                            case 3:
                                                                if ((q = J.sent()).done) return [3, 12];
                                                                if (V = q.value, r && 0 === H) throw this.createNoExtraBytesError(this.totalPos);
                                                                this.appendBuffer(V), n && (H = this.readArraySize(), n = !1, this.complete()), J.label = 4;
                                                            case 4:
                                                                J.trys.push([4, 9, , 10]), J.label = 5;
                                                            case 5:
                                                                return [4, Ae(this.doDecodeSync())];
                                                            case 6:
                                                                return [4, J.sent()];
                                                            case 7:
                                                                return J.sent(), 0 == --H ? [3, 8] : [3, 5];
                                                            case 8:
                                                                return [3, 10];
                                                            case 9:
                                                                if (!((W = J.sent()) instanceof Se)) throw W;
                                                                return [3, 10];
                                                            case 10:
                                                                this.totalPos += this.pos, J.label = 11;
                                                            case 11:
                                                                return [3, 2];
                                                            case 12:
                                                                return [3, 19];
                                                            case 13:
                                                                return $ = J.sent(), X = {
                                                                    error: $
                                                                }, [3, 19];
                                                            case 14:
                                                                return J.trys.push([14, , 17, 18]), q && !q.done && (Y = G.return) ? [4, Ae(Y.call(G))] : [3, 16];
                                                            case 15:
                                                                J.sent(), J.label = 16;
                                                            case 16:
                                                                return [3, 18];
                                                            case 17:
                                                                if (X) throw X.error;
                                                                return [7];
                                                            case 18:
                                                                return [7];
                                                            case 19:
                                                                return [2]
                                                        }
                                                    }))
                                                }))
                                            }, e.prototype.doDecodeSync = function() {
                                                e: for (;;) {
                                                    var e = this.readHeadByte(),
                                                        r = void 0;
                                                    if (e >= 224) r = e - 256;
                                                    else if (e < 192)
                                                        if (e < 128) r = e;
                                                        else if (e < 144) {
                                                        if (0 != (H = e - 128)) {
                                                            this.pushMapState(H), this.complete();
                                                            continue e
                                                        }
                                                        r = {}
                                                    } else if (e < 160) {
                                                        if (0 != (H = e - 144)) {
                                                            this.pushArrayState(H), this.complete();
                                                            continue e
                                                        }
                                                        r = []
                                                    } else {
                                                        var n = e - 160;
                                                        r = this.decodeUtf8String(n, 0)
                                                    } else if (192 === e) r = null;
                                                    else if (194 === e) r = !1;
                                                    else if (195 === e) r = !0;
                                                    else if (202 === e) r = this.readF32();
                                                    else if (203 === e) r = this.readF64();
                                                    else if (204 === e) r = this.readU8();
                                                    else if (205 === e) r = this.readU16();
                                                    else if (206 === e) r = this.readU32();
                                                    else if (207 === e) r = this.readU64();
                                                    else if (208 === e) r = this.readI8();
                                                    else if (209 === e) r = this.readI16();
                                                    else if (210 === e) r = this.readI32();
                                                    else if (211 === e) r = this.readI64();
                                                    else if (217 === e) n = this.lookU8(), r = this.decodeUtf8String(n, 1);
                                                    else if (218 === e) n = this.lookU16(), r = this.decodeUtf8String(n, 2);
                                                    else if (219 === e) n = this.lookU32(), r = this.decodeUtf8String(n, 4);
                                                    else if (220 === e) {
                                                        if (0 !== (H = this.readU16())) {
                                                            this.pushArrayState(H), this.complete();
                                                            continue e
                                                        }
                                                        r = []
                                                    } else if (221 === e) {
                                                        if (0 !== (H = this.readU32())) {
                                                            this.pushArrayState(H), this.complete();
                                                            continue e
                                                        }
                                                        r = []
                                                    } else if (222 === e) {
                                                        if (0 !== (H = this.readU16())) {
                                                            this.pushMapState(H), this.complete();
                                                            continue e
                                                        }
                                                        r = {}
                                                    } else if (223 === e) {
                                                        if (0 !== (H = this.readU32())) {
                                                            this.pushMapState(H), this.complete();
                                                            continue e
                                                        }
                                                        r = {}
                                                    } else if (196 === e) {
                                                        var H = this.lookU8();
                                                        r = this.decodeBinary(H, 1)
                                                    } else if (197 === e) H = this.lookU16(), r = this.decodeBinary(H, 2);
                                                    else if (198 === e) H = this.lookU32(), r = this.decodeBinary(H, 4);
                                                    else if (212 === e) r = this.decodeExtension(1, 0);
                                                    else if (213 === e) r = this.decodeExtension(2, 0);
                                                    else if (214 === e) r = this.decodeExtension(4, 0);
                                                    else if (215 === e) r = this.decodeExtension(8, 0);
                                                    else if (216 === e) r = this.decodeExtension(16, 0);
                                                    else if (199 === e) H = this.lookU8(), r = this.decodeExtension(H, 1);
                                                    else if (200 === e) H = this.lookU16(), r = this.decodeExtension(H, 2);
                                                    else {
                                                        if (201 !== e) throw new Error("Unrecognized type byte: " + ge(e));
                                                        H = this.lookU32(), r = this.decodeExtension(H, 4)
                                                    }
                                                    this.complete();
                                                    for (var G = this.stack; G.length > 0;) {
                                                        var q = G[G.length - 1];
                                                        if (0 === q.type) {
                                                            if (q.array[q.position] = r, q.position++, q.position !== q.size) continue e;
                                                            G.pop(), r = q.array
                                                        } else {
                                                            if (1 === q.type) {
                                                                if ("string" != (V = typeof r) && "number" !== V) throw new Error("The type of key must be string or number but " + typeof r);
                                                                q.key = r, q.type = 2;
                                                                continue e
                                                            }
                                                            if (q.map[q.key] = r, q.readCount++, q.readCount !== q.size) {
                                                                q.key = null, q.type = 1;
                                                                continue e
                                                            }
                                                            G.pop(), r = q.map
                                                        }
                                                    }
                                                    return r
                                                }
                                                var V
                                            }, e.prototype.readHeadByte = function() {
                                                return -1 === this.headByte && (this.headByte = this.readU8()), this.headByte
                                            }, e.prototype.complete = function() {
                                                this.headByte = -1
                                            }, e.prototype.readArraySize = function() {
                                                var e = this.readHeadByte();
                                                switch (e) {
                                                    case 220:
                                                        return this.readU16();
                                                    case 221:
                                                        return this.readU32();
                                                    default:
                                                        if (e < 160) return e - 144;
                                                        throw new Error("Unrecognized array type byte: " + ge(e))
                                                }
                                            }, e.prototype.pushMapState = function(e) {
                                                if (e > this.maxMapLength) throw new Error("Max length exceeded: map length (" + e + ") > maxMapLengthLength (" + this.maxMapLength + ")");
                                                this.stack.push({
                                                    type: 1,
                                                    size: e,
                                                    key: null,
                                                    readCount: 0,
                                                    map: {}
                                                })
                                            }, e.prototype.pushArrayState = function(e) {
                                                if (e > this.maxArrayLength) throw new Error("Max length exceeded: array length (" + e + ") > maxArrayLength (" + this.maxArrayLength + ")");
                                                this.stack.push({
                                                    type: 0,
                                                    size: e,
                                                    array: new Array(e),
                                                    position: 0
                                                })
                                            }, e.prototype.decodeUtf8String = function(e, r) {
                                                var n;
                                                if (e > this.maxStrLength) throw new Error("Max length exceeded: UTF-8 byte length (" + e + ") > maxStrLength (" + this.maxStrLength + ")");
                                                if (this.bytes.byteLength < this.pos + r + e) throw Ee;
                                                var H, G = this.pos + r;
                                                return H = this.stateIsMapKey() && (null === (n = this.keyDecoder) || void 0 === n ? void 0 : n.canBeCached(e)) ? this.keyDecoder.decode(this.bytes, G, e) : q && e > Q ? function(e, r, n) {
                                                    var H = e.subarray(r, r + n);
                                                    return J.decode(H)
                                                }(this.bytes, G, e) : Y(this.bytes, G, e), this.pos += r + e, H
                                            }, e.prototype.stateIsMapKey = function() {
                                                return this.stack.length > 0 && 1 === this.stack[this.stack.length - 1].type
                                            }, e.prototype.decodeBinary = function(e, r) {
                                                if (e > this.maxBinLength) throw new Error("Max length exceeded: bin length (" + e + ") > maxBinLength (" + this.maxBinLength + ")");
                                                if (!this.hasRemaining(e + r)) throw Ee;
                                                var n = this.pos + r,
                                                    H = this.bytes.subarray(n, n + e);
                                                return this.pos += r + e, H
                                            }, e.prototype.decodeExtension = function(e, r) {
                                                if (e > this.maxExtLength) throw new Error("Max length exceeded: ext length (" + e + ") > maxExtLength (" + this.maxExtLength + ")");
                                                var n = this.view.getInt8(this.pos + r),
                                                    H = this.decodeBinary(e, r + 1);
                                                return this.extensionCodec.decode(H, n, this.context)
                                            }, e.prototype.lookU8 = function() {
                                                return this.view.getUint8(this.pos)
                                            }, e.prototype.lookU16 = function() {
                                                return this.view.getUint16(this.pos)
                                            }, e.prototype.lookU32 = function() {
                                                return this.view.getUint32(this.pos)
                                            }, e.prototype.readU8 = function() {
                                                var e = this.view.getUint8(this.pos);
                                                return this.pos++, e
                                            }, e.prototype.readI8 = function() {
                                                var e = this.view.getInt8(this.pos);
                                                return this.pos++, e
                                            }, e.prototype.readU16 = function() {
                                                var e = this.view.getUint16(this.pos);
                                                return this.pos += 2, e
                                            }, e.prototype.readI16 = function() {
                                                var e = this.view.getInt16(this.pos);
                                                return this.pos += 2, e
                                            }, e.prototype.readU32 = function() {
                                                var e = this.view.getUint32(this.pos);
                                                return this.pos += 4, e
                                            }, e.prototype.readI32 = function() {
                                                var e = this.view.getInt32(this.pos);
                                                return this.pos += 4, e
                                            }, e.prototype.readU64 = function() {
                                                var e, r, n, H, G = (e = this.view, r = this.pos, n = e.getUint32(r), H = e.getUint32(r + 4), n > Math.floor(Number.MAX_SAFE_INTEGER / 4294967296) ? BigInt(n) * BigInt(4294967296) + BigInt(H) : 4294967296 * n + H);
                                                return this.pos += 8, G
                                            }, e.prototype.readI64 = function() {
                                                var e = te(this.view, this.pos);
                                                return this.pos += 8, e
                                            }, e.prototype.readF32 = function() {
                                                var e = this.view.getFloat32(this.pos);
                                                return this.pos += 4, e
                                            }, e.prototype.readF64 = function() {
                                                var e = this.view.getFloat64(this.pos);
                                                return this.pos += 8, e
                                            }, e
                                        }(),
                                        Be = {};

                                    function Ue(e, r) {
                                        return void 0 === r && (r = Be), new _e(r.extensionCodec, r.context, r.maxStrLength, r.maxBinLength, r.maxArrayLength, r.maxMapLength, r.maxExtLength).decode(e)
                                    }
                                    var ke = function(e, r) {
                                            var n, H, G, q, V = {
                                                label: 0,
                                                sent: function() {
                                                    if (1 & G[0]) throw G[1];
                                                    return G[1]
                                                },
                                                trys: [],
                                                ops: []
                                            };
                                            return q = {
                                                next: W(0),
                                                throw: W(1),
                                                return: W(2)
                                            }, "function" == typeof Symbol && (q[Symbol.iterator] = function() {
                                                return this
                                            }), q;

                                            function W(q) {
                                                return function(W) {
                                                    return function(q) {
                                                        if (n) throw new TypeError("Generator is already executing.");
                                                        for (; V;) try {
                                                            if (n = 1, H && (G = 2 & q[0] ? H.return : q[0] ? H.throw || ((G = H.return) && G.call(H), 0) : H.next) && !(G = G.call(H, q[1])).done) return G;
                                                            switch (H = 0, G && (q = [2 & q[0], G.value]), q[0]) {
                                                                case 0:
                                                                case 1:
                                                                    G = q;
                                                                    break;
                                                                case 4:
                                                                    return V.label++, {
                                                                        value: q[1],
                                                                        done: !1
                                                                    };
                                                                case 5:
                                                                    V.label++, H = q[1], q = [0];
                                                                    continue;
                                                                case 7:
                                                                    q = V.ops.pop(), V.trys.pop();
                                                                    continue;
                                                                default:
                                                                    if (!((G = (G = V.trys).length > 0 && G[G.length - 1]) || 6 !== q[0] && 2 !== q[0])) {
                                                                        V = 0;
                                                                        continue
                                                                    }
                                                                    if (3 === q[0] && (!G || q[1] > G[0] && q[1] < G[3])) {
                                                                        V.label = q[1];
                                                                        break
                                                                    }
                                                                    if (6 === q[0] && V.label < G[1]) {
                                                                        V.label = G[1], G = q;
                                                                        break
                                                                    }
                                                                    if (G && V.label < G[2]) {
                                                                        V.label = G[2], V.ops.push(q);
                                                                        break
                                                                    }
                                                                    G[2] && V.ops.pop(), V.trys.pop();
                                                                    continue
                                                            }
                                                            q = r.call(e, V)
                                                        } catch (e) {
                                                            q = [6, e], H = 0
                                                        } finally {
                                                            n = G = 0
                                                        }
                                                        if (5 & q[0]) throw q[1];
                                                        return {
                                                            value: q[0] ? q[1] : void 0,
                                                            done: !0
                                                        }
                                                    }([q, W])
                                                }
                                            }
                                        },
                                        Ie = function(e) {
                                            return this instanceof Ie ? (this.v = e, this) : new Ie(e)
                                        },
                                        Ce = function(e, r, n) {
                                            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                                            var H, G = n.apply(e, r || []),
                                                q = [];
                                            return H = {}, V("next"), V("throw"), V("return"), H[Symbol.asyncIterator] = function() {
                                                return this
                                            }, H;

                                            function V(e) {
                                                G[e] && (H[e] = function(r) {
                                                    return new Promise((function(n, H) {
                                                        q.push([e, r, n, H]) > 1 || W(e, r)
                                                    }))
                                                })
                                            }

                                            function W(e, r) {
                                                try {
                                                    (n = G[e](r)).value instanceof Ie ? Promise.resolve(n.value.v).then($, X) : Y(q[0][2], n)
                                                } catch (e) {
                                                    Y(q[0][3], e)
                                                }
                                                var n
                                            }

                                            function $(e) {
                                                W("next", e)
                                            }

                                            function X(e) {
                                                W("throw", e)
                                            }

                                            function Y(e, r) {
                                                e(r), q.shift(), q.length && W(q[0][0], q[0][1])
                                            }
                                        };

                                    function Re(e) {
                                        if (null == e) throw new Error("Assertion Failure: value must not be null nor undefined")
                                    }

                                    function Oe(e) {
                                        return null != e[Symbol.asyncIterator] ? e : function(e) {
                                            return Ce(this, arguments, (function() {
                                                var r, n, H, G;
                                                return ke(this, (function(q) {
                                                    switch (q.label) {
                                                        case 0:
                                                            r = e.getReader(), q.label = 1;
                                                        case 1:
                                                            q.trys.push([1, , 9, 10]), q.label = 2;
                                                        case 2:
                                                            return [4, Ie(r.read())];
                                                        case 3:
                                                            return n = q.sent(), H = n.done, G = n.value, H ? [4, Ie(void 0)] : [3, 5];
                                                        case 4:
                                                            return [2, q.sent()];
                                                        case 5:
                                                            return Re(G), [4, Ie(G)];
                                                        case 6:
                                                            return [4, q.sent()];
                                                        case 7:
                                                            return q.sent(), [3, 2];
                                                        case 8:
                                                            return [3, 10];
                                                        case 9:
                                                            return r.releaseLock(), [7];
                                                        case 10:
                                                            return [2]
                                                    }
                                                }))
                                            }))
                                        }(e)
                                    }

                                    function De(e, r) {
                                        return void 0 === r && (r = Be),
                                            function(e, r, n, H) {
                                                return new(n || (n = Promise))((function(r, G) {
                                                    function q(e) {
                                                        try {
                                                            W(H.next(e))
                                                        } catch (e) {
                                                            G(e)
                                                        }
                                                    }

                                                    function V(e) {
                                                        try {
                                                            W(H.throw(e))
                                                        } catch (e) {
                                                            G(e)
                                                        }
                                                    }

                                                    function W(e) {
                                                        var H;
                                                        e.done ? r(e.value) : (H = e.value, H instanceof n ? H : new n((function(e) {
                                                            e(H)
                                                        }))).then(q, V)
                                                    }
                                                    W((H = H.apply(e, [])).next())
                                                }))
                                            }(this, 0, void 0, (function() {
                                                var n;
                                                return function(e, r) {
                                                    var n, H, G, q, V = {
                                                        label: 0,
                                                        sent: function() {
                                                            if (1 & G[0]) throw G[1];
                                                            return G[1]
                                                        },
                                                        trys: [],
                                                        ops: []
                                                    };
                                                    return q = {
                                                        next: W(0),
                                                        throw: W(1),
                                                        return: W(2)
                                                    }, "function" == typeof Symbol && (q[Symbol.iterator] = function() {
                                                        return this
                                                    }), q;

                                                    function W(q) {
                                                        return function(W) {
                                                            return function(q) {
                                                                if (n) throw new TypeError("Generator is already executing.");
                                                                for (; V;) try {
                                                                    if (n = 1, H && (G = 2 & q[0] ? H.return : q[0] ? H.throw || ((G = H.return) && G.call(H), 0) : H.next) && !(G = G.call(H, q[1])).done) return G;
                                                                    switch (H = 0, G && (q = [2 & q[0], G.value]), q[0]) {
                                                                        case 0:
                                                                        case 1:
                                                                            G = q;
                                                                            break;
                                                                        case 4:
                                                                            return V.label++, {
                                                                                value: q[1],
                                                                                done: !1
                                                                            };
                                                                        case 5:
                                                                            V.label++, H = q[1], q = [0];
                                                                            continue;
                                                                        case 7:
                                                                            q = V.ops.pop(), V.trys.pop();
                                                                            continue;
                                                                        default:
                                                                            if (!((G = (G = V.trys).length > 0 && G[G.length - 1]) || 6 !== q[0] && 2 !== q[0])) {
                                                                                V = 0;
                                                                                continue
                                                                            }
                                                                            if (3 === q[0] && (!G || q[1] > G[0] && q[1] < G[3])) {
                                                                                V.label = q[1];
                                                                                break
                                                                            }
                                                                            if (6 === q[0] && V.label < G[1]) {
                                                                                V.label = G[1], G = q;
                                                                                break
                                                                            }
                                                                            if (G && V.label < G[2]) {
                                                                                V.label = G[2], V.ops.push(q);
                                                                                break
                                                                            }
                                                                            G[2] && V.ops.pop(), V.trys.pop();
                                                                            continue
                                                                    }
                                                                    q = r.call(e, V)
                                                                } catch (e) {
                                                                    q = [6, e], H = 0
                                                                } finally {
                                                                    n = G = 0
                                                                }
                                                                if (5 & q[0]) throw q[1];
                                                                return {
                                                                    value: q[0] ? q[1] : void 0,
                                                                    done: !0
                                                                }
                                                            }([q, W])
                                                        }
                                                    }
                                                }(this, (function(H) {
                                                    return n = Oe(e), [2, new _e(r.extensionCodec, r.context, r.maxStrLength, r.maxBinLength, r.maxArrayLength, r.maxMapLength, r.maxExtLength).decodeAsync(n)]
                                                }))
                                            }))
                                    }

                                    function Ne(e, r) {
                                        void 0 === r && (r = Be);
                                        var n = Oe(e);
                                        return new _e(r.extensionCodec, r.context, r.maxStrLength, r.maxBinLength, r.maxArrayLength, r.maxMapLength, r.maxExtLength).decodeArrayStream(n)
                                    }

                                    function Pe(e, r) {
                                        void 0 === r && (r = Be);
                                        var n = Oe(e);
                                        return new _e(r.extensionCodec, r.context, r.maxStrLength, r.maxBinLength, r.maxArrayLength, r.maxMapLength, r.maxExtLength).decodeStream(n)
                                    }
                                }])
                            },
                            5155: (e, r) => {
                                "use strict";
                                r.byteLength = function(e) {
                                    var r = $(e),
                                        n = r[0],
                                        H = r[1];
                                    return 3 * (n + H) / 4 - H
                                }, r.toByteArray = function(e) {
                                    var r, n, q = $(e),
                                        V = q[0],
                                        W = q[1],
                                        X = new G(function(e, r, n) {
                                            return 3 * (r + n) / 4 - n
                                        }(0, V, W)),
                                        Y = 0,
                                        J = W > 0 ? V - 4 : V;
                                    for (n = 0; n < J; n += 4) r = H[e.charCodeAt(n)] << 18 | H[e.charCodeAt(n + 1)] << 12 | H[e.charCodeAt(n + 2)] << 6 | H[e.charCodeAt(n + 3)], X[Y++] = r >> 16 & 255, X[Y++] = r >> 8 & 255, X[Y++] = 255 & r;
                                    return 2 === W && (r = H[e.charCodeAt(n)] << 2 | H[e.charCodeAt(n + 1)] >> 4, X[Y++] = 255 & r), 1 === W && (r = H[e.charCodeAt(n)] << 10 | H[e.charCodeAt(n + 1)] << 4 | H[e.charCodeAt(n + 2)] >> 2, X[Y++] = r >> 8 & 255, X[Y++] = 255 & r), X
                                }, r.fromByteArray = function(e) {
                                    for (var r, H = e.length, G = H % 3, q = [], V = 16383, W = 0, $ = H - G; W < $; W += V) q.push(X(e, W, W + V > $ ? $ : W + V));
                                    return 1 === G ? (r = e[H - 1], q.push(n[r >> 2] + n[r << 4 & 63] + "==")) : 2 === G && (r = (e[H - 2] << 8) + e[H - 1], q.push(n[r >> 10] + n[r >> 4 & 63] + n[r << 2 & 63] + "=")), q.join("")
                                };
                                for (var n = [], H = [], G = "undefined" != typeof Uint8Array ? Uint8Array : Array, q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", V = 0, W = q.length; V < W; ++V) n[V] = q[V], H[q.charCodeAt(V)] = V;

                                function $(e) {
                                    var r = e.length;
                                    if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                                    var n = e.indexOf("=");
                                    return -1 === n && (n = r), [n, n === r ? 0 : 4 - n % 4]
                                }

                                function X(e, r, H) {
                                    for (var G, q, V = [], W = r; W < H; W += 3) G = (e[W] << 16 & 16711680) + (e[W + 1] << 8 & 65280) + (255 & e[W + 2]), V.push(n[(q = G) >> 18 & 63] + n[q >> 12 & 63] + n[q >> 6 & 63] + n[63 & q]);
                                    return V.join("")
                                }
                                H["-".charCodeAt(0)] = 62, H["_".charCodeAt(0)] = 63
                            },
                            5117: function(e, r, n) {
                                var H;
                                ! function(G) {
                                    "use strict";
                                    var q, V = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                                        W = Math.ceil,
                                        $ = Math.floor,
                                        X = "[BigNumber Error] ",
                                        Y = X + "Number primitive has more than 15 significant digits: ",
                                        J = 1e14,
                                        Q = 14,
                                        Z = 9007199254740991,
                                        ee = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                                        te = 1e7,
                                        re = 1e9;

                                    function ne(e) {
                                        var r = 0 | e;
                                        return e > 0 || e === r ? r : r - 1
                                    }

                                    function oe(e) {
                                        for (var r, n, H = 1, G = e.length, q = e[0] + ""; H < G;) {
                                            for (r = e[H++] + "", n = Q - r.length; n--; r = "0" + r);
                                            q += r
                                        }
                                        for (G = q.length; 48 === q.charCodeAt(--G););
                                        return q.slice(0, G + 1 || 1)
                                    }

                                    function se(e, r) {
                                        var n, H, G = e.c,
                                            q = r.c,
                                            V = e.s,
                                            W = r.s,
                                            $ = e.e,
                                            X = r.e;
                                        if (!V || !W) return null;
                                        if (n = G && !G[0], H = q && !q[0], n || H) return n ? H ? 0 : -W : V;
                                        if (V != W) return V;
                                        if (n = V < 0, H = $ == X, !G || !q) return H ? 0 : !G ^ n ? 1 : -1;
                                        if (!H) return $ > X ^ n ? 1 : -1;
                                        for (W = ($ = G.length) < (X = q.length) ? $ : X, V = 0; V < W; V++)
                                            if (G[V] != q[V]) return G[V] > q[V] ^ n ? 1 : -1;
                                        return $ == X ? 0 : $ > X ^ n ? 1 : -1
                                    }

                                    function ie(e, r, n, H) {
                                        if (e < r || e > n || e !== $(e)) throw Error(X + (H || "Argument") + ("number" == typeof e ? e < r || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                                    }

                                    function ae(e) {
                                        var r = e.c.length - 1;
                                        return ne(e.e / Q) == r && e.c[r] % 2 != 0
                                    }

                                    function ce(e, r) {
                                        return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r
                                    }

                                    function ue(e, r, n) {
                                        var H, G;
                                        if (r < 0) {
                                            for (G = n + "."; ++r; G += n);
                                            e = G + e
                                        } else if (++r > (H = e.length)) {
                                            for (G = n, r -= H; --r; G += n);
                                            e += G
                                        } else r < H && (e = e.slice(0, r) + "." + e.slice(r));
                                        return e
                                    }(q = function e(r) {
                                        var n, H, G, q, le, he, pe, fe, de, ge, ye = ke.prototype = {
                                                constructor: ke,
                                                toString: null,
                                                valueOf: null
                                            },
                                            me = new ke(1),
                                            be = 20,
                                            Ae = 4,
                                            we = -7,
                                            ve = 21,
                                            xe = -1e7,
                                            Se = 1e7,
                                            Ee = !1,
                                            Te = 1,
                                            _e = 0,
                                            Be = {
                                                prefix: "",
                                                groupSize: 3,
                                                secondaryGroupSize: 0,
                                                groupSeparator: ",",
                                                decimalSeparator: ".",
                                                fractionGroupSize: 0,
                                                fractionGroupSeparator: " ",
                                                suffix: ""
                                            },
                                            Ue = "0123456789abcdefghijklmnopqrstuvwxyz";

                                        function ke(e, r) {
                                            var n, q, W, X, J, ee, te, re, ne = this;
                                            if (!(ne instanceof ke)) return new ke(e, r);
                                            if (null == r) {
                                                if (e && !0 === e._isBigNumber) return ne.s = e.s, void(!e.c || e.e > Se ? ne.c = ne.e = null : e.e < xe ? ne.c = [ne.e = 0] : (ne.e = e.e, ne.c = e.c.slice()));
                                                if ((ee = "number" == typeof e) && 0 * e == 0) {
                                                    if (ne.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                                        for (X = 0, J = e; J >= 10; J /= 10, X++);
                                                        return void(X > Se ? ne.c = ne.e = null : (ne.e = X, ne.c = [e]))
                                                    }
                                                    re = String(e)
                                                } else {
                                                    if (!V.test(re = String(e))) return G(ne, re, ee);
                                                    ne.s = 45 == re.charCodeAt(0) ? (re = re.slice(1), -1) : 1
                                                }(X = re.indexOf(".")) > -1 && (re = re.replace(".", "")), (J = re.search(/e/i)) > 0 ? (X < 0 && (X = J), X += +re.slice(J + 1), re = re.substring(0, J)) : X < 0 && (X = re.length)
                                            } else {
                                                if (ie(r, 2, Ue.length, "Base"), 10 == r) return Oe(ne = new ke(e), be + ne.e + 1, Ae);
                                                if (re = String(e), ee = "number" == typeof e) {
                                                    if (0 * e != 0) return G(ne, re, ee, r);
                                                    if (ne.s = 1 / e < 0 ? (re = re.slice(1), -1) : 1, ke.DEBUG && re.replace(/^0\.0*|\./, "").length > 15) throw Error(Y + e)
                                                } else ne.s = 45 === re.charCodeAt(0) ? (re = re.slice(1), -1) : 1;
                                                for (n = Ue.slice(0, r), X = J = 0, te = re.length; J < te; J++)
                                                    if (n.indexOf(q = re.charAt(J)) < 0) {
                                                        if ("." == q) {
                                                            if (J > X) {
                                                                X = te;
                                                                continue
                                                            }
                                                        } else if (!W && (re == re.toUpperCase() && (re = re.toLowerCase()) || re == re.toLowerCase() && (re = re.toUpperCase()))) {
                                                            W = !0, J = -1, X = 0;
                                                            continue
                                                        }
                                                        return G(ne, String(e), ee, r)
                                                    } ee = !1, (X = (re = H(re, r, 10, ne.s)).indexOf(".")) > -1 ? re = re.replace(".", "") : X = re.length
                                            }
                                            for (J = 0; 48 === re.charCodeAt(J); J++);
                                            for (te = re.length; 48 === re.charCodeAt(--te););
                                            if (re = re.slice(J, ++te)) {
                                                if (te -= J, ee && ke.DEBUG && te > 15 && (e > Z || e !== $(e))) throw Error(Y + ne.s * e);
                                                if ((X = X - J - 1) > Se) ne.c = ne.e = null;
                                                else if (X < xe) ne.c = [ne.e = 0];
                                                else {
                                                    if (ne.e = X, ne.c = [], J = (X + 1) % Q, X < 0 && (J += Q), J < te) {
                                                        for (J && ne.c.push(+re.slice(0, J)), te -= Q; J < te;) ne.c.push(+re.slice(J, J += Q));
                                                        J = Q - (re = re.slice(J)).length
                                                    } else J -= te;
                                                    for (; J--; re += "0");
                                                    ne.c.push(+re)
                                                }
                                            } else ne.c = [ne.e = 0]
                                        }

                                        function Ie(e, r, n, H) {
                                            var G, q, V, W, $;
                                            if (null == n ? n = Ae : ie(n, 0, 8), !e.c) return e.toString();
                                            if (G = e.c[0], V = e.e, null == r) $ = oe(e.c), $ = 1 == H || 2 == H && (V <= we || V >= ve) ? ce($, V) : ue($, V, "0");
                                            else if (q = (e = Oe(new ke(e), r, n)).e, W = ($ = oe(e.c)).length, 1 == H || 2 == H && (r <= q || q <= we)) {
                                                for (; W < r; $ += "0", W++);
                                                $ = ce($, q)
                                            } else if (r -= V, $ = ue($, q, "0"), q + 1 > W) {
                                                if (--r > 0)
                                                    for ($ += "."; r--; $ += "0");
                                            } else if ((r += q - W) > 0)
                                                for (q + 1 == W && ($ += "."); r--; $ += "0");
                                            return e.s < 0 && G ? "-" + $ : $
                                        }

                                        function Ce(e, r) {
                                            for (var n, H = 1, G = new ke(e[0]); H < e.length; H++) {
                                                if (!(n = new ke(e[H])).s) {
                                                    G = n;
                                                    break
                                                }
                                                r.call(G, n) && (G = n)
                                            }
                                            return G
                                        }

                                        function Re(e, r, n) {
                                            for (var H = 1, G = r.length; !r[--G]; r.pop());
                                            for (G = r[0]; G >= 10; G /= 10, H++);
                                            return (n = H + n * Q - 1) > Se ? e.c = e.e = null : n < xe ? e.c = [e.e = 0] : (e.e = n, e.c = r), e
                                        }

                                        function Oe(e, r, n, H) {
                                            var G, q, V, X, Y, Z, te, re = e.c,
                                                ne = ee;
                                            if (re) {
                                                e: {
                                                    for (G = 1, X = re[0]; X >= 10; X /= 10, G++);
                                                    if ((q = r - G) < 0) q += Q,
                                                    V = r,
                                                    te = (Y = re[Z = 0]) / ne[G - V - 1] % 10 | 0;
                                                    else if ((Z = W((q + 1) / Q)) >= re.length) {
                                                        if (!H) break e;
                                                        for (; re.length <= Z; re.push(0));
                                                        Y = te = 0, G = 1, V = (q %= Q) - Q + 1
                                                    } else {
                                                        for (Y = X = re[Z], G = 1; X >= 10; X /= 10, G++);
                                                        te = (V = (q %= Q) - Q + G) < 0 ? 0 : Y / ne[G - V - 1] % 10 | 0
                                                    }
                                                    if (H = H || r < 0 || null != re[Z + 1] || (V < 0 ? Y : Y % ne[G - V - 1]), H = n < 4 ? (te || H) && (0 == n || n == (e.s < 0 ? 3 : 2)) : te > 5 || 5 == te && (4 == n || H || 6 == n && (q > 0 ? V > 0 ? Y / ne[G - V] : 0 : re[Z - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !re[0]) return re.length = 0,
                                                    H ? (r -= e.e + 1, re[0] = ne[(Q - r % Q) % Q], e.e = -r || 0) : re[0] = e.e = 0,
                                                    e;
                                                    if (0 == q ? (re.length = Z, X = 1, Z--) : (re.length = Z + 1, X = ne[Q - q], re[Z] = V > 0 ? $(Y / ne[G - V] % ne[V]) * X : 0), H)
                                                        for (;;) {
                                                            if (0 == Z) {
                                                                for (q = 1, V = re[0]; V >= 10; V /= 10, q++);
                                                                for (V = re[0] += X, X = 1; V >= 10; V /= 10, X++);
                                                                q != X && (e.e++, re[0] == J && (re[0] = 1));
                                                                break
                                                            }
                                                            if (re[Z] += X, re[Z] != J) break;
                                                            re[Z--] = 0, X = 1
                                                        }
                                                    for (q = re.length; 0 === re[--q]; re.pop());
                                                }
                                                e.e > Se ? e.c = e.e = null : e.e < xe && (e.c = [e.e = 0])
                                            }
                                            return e
                                        }

                                        function De(e) {
                                            var r, n = e.e;
                                            return null === n ? e.toString() : (r = oe(e.c), r = n <= we || n >= ve ? ce(r, n) : ue(r, n, "0"), e.s < 0 ? "-" + r : r)
                                        }
                                        return ke.clone = e, ke.ROUND_UP = 0, ke.ROUND_DOWN = 1, ke.ROUND_CEIL = 2, ke.ROUND_FLOOR = 3, ke.ROUND_HALF_UP = 4, ke.ROUND_HALF_DOWN = 5, ke.ROUND_HALF_EVEN = 6, ke.ROUND_HALF_CEIL = 7, ke.ROUND_HALF_FLOOR = 8, ke.EUCLID = 9, ke.config = ke.set = function(e) {
                                            var r, n;
                                            if (null != e) {
                                                if ("object" != typeof e) throw Error(X + "Object expected: " + e);
                                                if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (ie(n = e[r], 0, re, r), be = n), e.hasOwnProperty(r = "ROUNDING_MODE") && (ie(n = e[r], 0, 8, r), Ae = n), e.hasOwnProperty(r = "EXPONENTIAL_AT") && ((n = e[r]) && n.pop ? (ie(n[0], -re, 0, r), ie(n[1], 0, re, r), we = n[0], ve = n[1]) : (ie(n, -re, re, r), we = -(ve = n < 0 ? -n : n))), e.hasOwnProperty(r = "RANGE"))
                                                    if ((n = e[r]) && n.pop) ie(n[0], -re, -1, r), ie(n[1], 1, re, r), xe = n[0], Se = n[1];
                                                    else {
                                                        if (ie(n, -re, re, r), !n) throw Error(X + r + " cannot be zero: " + n);
                                                        xe = -(Se = n < 0 ? -n : n)
                                                    } if (e.hasOwnProperty(r = "CRYPTO")) {
                                                    if ((n = e[r]) !== !!n) throw Error(X + r + " not true or false: " + n);
                                                    if (n) {
                                                        if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Ee = !n, Error(X + "crypto unavailable");
                                                        Ee = n
                                                    } else Ee = n
                                                }
                                                if (e.hasOwnProperty(r = "MODULO_MODE") && (ie(n = e[r], 0, 9, r), Te = n), e.hasOwnProperty(r = "POW_PRECISION") && (ie(n = e[r], 0, re, r), _e = n), e.hasOwnProperty(r = "FORMAT")) {
                                                    if ("object" != typeof(n = e[r])) throw Error(X + r + " not an object: " + n);
                                                    Be = n
                                                }
                                                if (e.hasOwnProperty(r = "ALPHABET")) {
                                                    if ("string" != typeof(n = e[r]) || /^.?$|[+\-.\s]|(.).*\1/.test(n)) throw Error(X + r + " invalid: " + n);
                                                    Ue = n
                                                }
                                            }
                                            return {
                                                DECIMAL_PLACES: be,
                                                ROUNDING_MODE: Ae,
                                                EXPONENTIAL_AT: [we, ve],
                                                RANGE: [xe, Se],
                                                CRYPTO: Ee,
                                                MODULO_MODE: Te,
                                                POW_PRECISION: _e,
                                                FORMAT: Be,
                                                ALPHABET: Ue
                                            }
                                        }, ke.isBigNumber = function(e) {
                                            if (!e || !0 !== e._isBigNumber) return !1;
                                            if (!ke.DEBUG) return !0;
                                            var r, n, H = e.c,
                                                G = e.e,
                                                q = e.s;
                                            e: if ("[object Array]" == {}.toString.call(H)) {
                                                if ((1 === q || -1 === q) && G >= -re && G <= re && G === $(G)) {
                                                    if (0 === H[0]) {
                                                        if (0 === G && 1 === H.length) return !0;
                                                        break e
                                                    }
                                                    if ((r = (G + 1) % Q) < 1 && (r += Q), String(H[0]).length == r) {
                                                        for (r = 0; r < H.length; r++)
                                                            if ((n = H[r]) < 0 || n >= J || n !== $(n)) break e;
                                                        if (0 !== n) return !0
                                                    }
                                                }
                                            } else if (null === H && null === G && (null === q || 1 === q || -1 === q)) return !0;
                                            throw Error(X + "Invalid BigNumber: " + e)
                                        }, ke.maximum = ke.max = function() {
                                            return Ce(arguments, ye.lt)
                                        }, ke.minimum = ke.min = function() {
                                            return Ce(arguments, ye.gt)
                                        }, ke.random = (q = 9007199254740992, le = Math.random() * q & 2097151 ? function() {
                                            return $(Math.random() * q)
                                        } : function() {
                                            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                                        }, function(e) {
                                            var r, n, H, G, q, V = 0,
                                                Y = [],
                                                J = new ke(me);
                                            if (null == e ? e = be : ie(e, 0, re), G = W(e / Q), Ee)
                                                if (crypto.getRandomValues) {
                                                    for (r = crypto.getRandomValues(new Uint32Array(G *= 2)); V < G;)(q = 131072 * r[V] + (r[V + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)), r[V] = n[0], r[V + 1] = n[1]) : (Y.push(q % 1e14), V += 2);
                                                    V = G / 2
                                                } else {
                                                    if (!crypto.randomBytes) throw Ee = !1, Error(X + "crypto unavailable");
                                                    for (r = crypto.randomBytes(G *= 7); V < G;)(q = 281474976710656 * (31 & r[V]) + 1099511627776 * r[V + 1] + 4294967296 * r[V + 2] + 16777216 * r[V + 3] + (r[V + 4] << 16) + (r[V + 5] << 8) + r[V + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, V) : (Y.push(q % 1e14), V += 7);
                                                    V = G / 7
                                                } if (!Ee)
                                                for (; V < G;)(q = le()) < 9e15 && (Y[V++] = q % 1e14);
                                            for (G = Y[--V], e %= Q, G && e && (q = ee[Q - e], Y[V] = $(G / q) * q); 0 === Y[V]; Y.pop(), V--);
                                            if (V < 0) Y = [H = 0];
                                            else {
                                                for (H = -1; 0 === Y[0]; Y.splice(0, 1), H -= Q);
                                                for (V = 1, q = Y[0]; q >= 10; q /= 10, V++);
                                                V < Q && (H -= Q - V)
                                            }
                                            return J.e = H, J.c = Y, J
                                        }), ke.sum = function() {
                                            for (var e = 1, r = arguments, n = new ke(r[0]); e < r.length;) n = n.plus(r[e++]);
                                            return n
                                        }, H = function() {
                                            var e = "0123456789";

                                            function r(e, r, n, H) {
                                                for (var G, q, V = [0], W = 0, $ = e.length; W < $;) {
                                                    for (q = V.length; q--; V[q] *= r);
                                                    for (V[0] += H.indexOf(e.charAt(W++)), G = 0; G < V.length; G++) V[G] > n - 1 && (null == V[G + 1] && (V[G + 1] = 0), V[G + 1] += V[G] / n | 0, V[G] %= n)
                                                }
                                                return V.reverse()
                                            }
                                            return function(H, G, q, V, W) {
                                                var $, X, Y, J, Q, Z, ee, te, re = H.indexOf("."),
                                                    ne = be,
                                                    se = Ae;
                                                for (re >= 0 && (J = _e, _e = 0, H = H.replace(".", ""), Z = (te = new ke(G)).pow(H.length - re), _e = J, te.c = r(ue(oe(Z.c), Z.e, "0"), 10, q, e), te.e = te.c.length), Y = J = (ee = r(H, G, q, W ? ($ = Ue, e) : ($ = e, Ue))).length; 0 == ee[--J]; ee.pop());
                                                if (!ee[0]) return $.charAt(0);
                                                if (re < 0 ? --Y : (Z.c = ee, Z.e = Y, Z.s = V, ee = (Z = n(Z, te, ne, se, q)).c, Q = Z.r, Y = Z.e), re = ee[X = Y + ne + 1], J = q / 2, Q = Q || X < 0 || null != ee[X + 1], Q = se < 4 ? (null != re || Q) && (0 == se || se == (Z.s < 0 ? 3 : 2)) : re > J || re == J && (4 == se || Q || 6 == se && 1 & ee[X - 1] || se == (Z.s < 0 ? 8 : 7)), X < 1 || !ee[0]) H = Q ? ue($.charAt(1), -ne, $.charAt(0)) : $.charAt(0);
                                                else {
                                                    if (ee.length = X, Q)
                                                        for (--q; ++ee[--X] > q;) ee[X] = 0, X || (++Y, ee = [1].concat(ee));
                                                    for (J = ee.length; !ee[--J];);
                                                    for (re = 0, H = ""; re <= J; H += $.charAt(ee[re++]));
                                                    H = ue(H, Y, $.charAt(0))
                                                }
                                                return H
                                            }
                                        }(), n = function() {
                                            function e(e, r, n) {
                                                var H, G, q, V, W = 0,
                                                    $ = e.length,
                                                    X = r % te,
                                                    Y = r / te | 0;
                                                for (e = e.slice(); $--;) W = ((G = X * (q = e[$] % te) + (H = Y * q + (V = e[$] / te | 0) * X) % te * te + W) / n | 0) + (H / te | 0) + Y * V, e[$] = G % n;
                                                return W && (e = [W].concat(e)), e
                                            }

                                            function r(e, r, n, H) {
                                                var G, q;
                                                if (n != H) q = n > H ? 1 : -1;
                                                else
                                                    for (G = q = 0; G < n; G++)
                                                        if (e[G] != r[G]) {
                                                            q = e[G] > r[G] ? 1 : -1;
                                                            break
                                                        } return q
                                            }

                                            function n(e, r, n, H) {
                                                for (var G = 0; n--;) e[n] -= G, G = e[n] < r[n] ? 1 : 0, e[n] = G * H + e[n] - r[n];
                                                for (; !e[0] && e.length > 1; e.splice(0, 1));
                                            }
                                            return function(H, G, q, V, W) {
                                                var X, Y, Z, ee, te, re, oe, se, ie, ae, ce, ue, le, he, pe, fe, de, ge = H.s == G.s ? 1 : -1,
                                                    ye = H.c,
                                                    me = G.c;
                                                if (!(ye && ye[0] && me && me[0])) return new ke(H.s && G.s && (ye ? !me || ye[0] != me[0] : me) ? ye && 0 == ye[0] || !me ? 0 * ge : ge / 0 : NaN);
                                                for (ie = (se = new ke(ge)).c = [], ge = q + (Y = H.e - G.e) + 1, W || (W = J, Y = ne(H.e / Q) - ne(G.e / Q), ge = ge / Q | 0), Z = 0; me[Z] == (ye[Z] || 0); Z++);
                                                if (me[Z] > (ye[Z] || 0) && Y--, ge < 0) ie.push(1), ee = !0;
                                                else {
                                                    for (he = ye.length, fe = me.length, Z = 0, ge += 2, (te = $(W / (me[0] + 1))) > 1 && (me = e(me, te, W), ye = e(ye, te, W), fe = me.length, he = ye.length), le = fe, ce = (ae = ye.slice(0, fe)).length; ce < fe; ae[ce++] = 0);
                                                    de = me.slice(), de = [0].concat(de), pe = me[0], me[1] >= W / 2 && pe++;
                                                    do {
                                                        if (te = 0, (X = r(me, ae, fe, ce)) < 0) {
                                                            if (ue = ae[0], fe != ce && (ue = ue * W + (ae[1] || 0)), (te = $(ue / pe)) > 1)
                                                                for (te >= W && (te = W - 1), oe = (re = e(me, te, W)).length, ce = ae.length; 1 == r(re, ae, oe, ce);) te--, n(re, fe < oe ? de : me, oe, W), oe = re.length, X = 1;
                                                            else 0 == te && (X = te = 1), oe = (re = me.slice()).length;
                                                            if (oe < ce && (re = [0].concat(re)), n(ae, re, ce, W), ce = ae.length, -1 == X)
                                                                for (; r(me, ae, fe, ce) < 1;) te++, n(ae, fe < ce ? de : me, ce, W), ce = ae.length
                                                        } else 0 === X && (te++, ae = [0]);
                                                        ie[Z++] = te, ae[0] ? ae[ce++] = ye[le] || 0 : (ae = [ye[le]], ce = 1)
                                                    } while ((le++ < he || null != ae[0]) && ge--);
                                                    ee = null != ae[0], ie[0] || ie.splice(0, 1)
                                                }
                                                if (W == J) {
                                                    for (Z = 1, ge = ie[0]; ge >= 10; ge /= 10, Z++);
                                                    Oe(se, q + (se.e = Z + Y * Q - 1) + 1, V, ee)
                                                } else se.e = Y, se.r = +ee;
                                                return se
                                            }
                                        }(), he = /^(-?)0([xbo])(?=\w[\w.]*$)/i, pe = /^([^.]+)\.$/, fe = /^\.([^.]+)$/, de = /^-?(Infinity|NaN)$/, ge = /^\s*\+(?=[\w.])|^\s+|\s+$/g, G = function(e, r, n, H) {
                                            var G, q = n ? r : r.replace(ge, "");
                                            if (de.test(q)) e.s = isNaN(q) ? null : q < 0 ? -1 : 1;
                                            else {
                                                if (!n && (q = q.replace(he, (function(e, r, n) {
                                                        return G = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, H && H != G ? e : r
                                                    })), H && (G = H, q = q.replace(pe, "$1").replace(fe, "0.$1")), r != q)) return new ke(q, G);
                                                if (ke.DEBUG) throw Error(X + "Not a" + (H ? " base " + H : "") + " number: " + r);
                                                e.s = null
                                            }
                                            e.c = e.e = null
                                        }, ye.absoluteValue = ye.abs = function() {
                                            var e = new ke(this);
                                            return e.s < 0 && (e.s = 1), e
                                        }, ye.comparedTo = function(e, r) {
                                            return se(this, new ke(e, r))
                                        }, ye.decimalPlaces = ye.dp = function(e, r) {
                                            var n, H, G, q = this;
                                            if (null != e) return ie(e, 0, re), null == r ? r = Ae : ie(r, 0, 8), Oe(new ke(q), e + q.e + 1, r);
                                            if (!(n = q.c)) return null;
                                            if (H = ((G = n.length - 1) - ne(this.e / Q)) * Q, G = n[G])
                                                for (; G % 10 == 0; G /= 10, H--);
                                            return H < 0 && (H = 0), H
                                        }, ye.dividedBy = ye.div = function(e, r) {
                                            return n(this, new ke(e, r), be, Ae)
                                        }, ye.dividedToIntegerBy = ye.idiv = function(e, r) {
                                            return n(this, new ke(e, r), 0, 1)
                                        }, ye.exponentiatedBy = ye.pow = function(e, r) {
                                            var n, H, G, q, V, Y, J, Z, ee = this;
                                            if ((e = new ke(e)).c && !e.isInteger()) throw Error(X + "Exponent not an integer: " + De(e));
                                            if (null != r && (r = new ke(r)), V = e.e > 14, !ee.c || !ee.c[0] || 1 == ee.c[0] && !ee.e && 1 == ee.c.length || !e.c || !e.c[0]) return Z = new ke(Math.pow(+De(ee), V ? 2 - ae(e) : +De(e))), r ? Z.mod(r) : Z;
                                            if (Y = e.s < 0, r) {
                                                if (r.c ? !r.c[0] : !r.s) return new ke(NaN);
                                                (H = !Y && ee.isInteger() && r.isInteger()) && (ee = ee.mod(r))
                                            } else {
                                                if (e.e > 9 && (ee.e > 0 || ee.e < -1 || (0 == ee.e ? ee.c[0] > 1 || V && ee.c[1] >= 24e7 : ee.c[0] < 8e13 || V && ee.c[0] <= 9999975e7))) return q = ee.s < 0 && ae(e) ? -0 : 0, ee.e > -1 && (q = 1 / q), new ke(Y ? 1 / q : q);
                                                _e && (q = W(_e / Q + 2))
                                            }
                                            for (V ? (n = new ke(.5), Y && (e.s = 1), J = ae(e)) : J = (G = Math.abs(+De(e))) % 2, Z = new ke(me);;) {
                                                if (J) {
                                                    if (!(Z = Z.times(ee)).c) break;
                                                    q ? Z.c.length > q && (Z.c.length = q) : H && (Z = Z.mod(r))
                                                }
                                                if (G) {
                                                    if (0 === (G = $(G / 2))) break;
                                                    J = G % 2
                                                } else if (Oe(e = e.times(n), e.e + 1, 1), e.e > 14) J = ae(e);
                                                else {
                                                    if (0 == (G = +De(e))) break;
                                                    J = G % 2
                                                }
                                                ee = ee.times(ee), q ? ee.c && ee.c.length > q && (ee.c.length = q) : H && (ee = ee.mod(r))
                                            }
                                            return H ? Z : (Y && (Z = me.div(Z)), r ? Z.mod(r) : q ? Oe(Z, _e, Ae, void 0) : Z)
                                        }, ye.integerValue = function(e) {
                                            var r = new ke(this);
                                            return null == e ? e = Ae : ie(e, 0, 8), Oe(r, r.e + 1, e)
                                        }, ye.isEqualTo = ye.eq = function(e, r) {
                                            return 0 === se(this, new ke(e, r))
                                        }, ye.isFinite = function() {
                                            return !!this.c
                                        }, ye.isGreaterThan = ye.gt = function(e, r) {
                                            return se(this, new ke(e, r)) > 0
                                        }, ye.isGreaterThanOrEqualTo = ye.gte = function(e, r) {
                                            return 1 === (r = se(this, new ke(e, r))) || 0 === r
                                        }, ye.isInteger = function() {
                                            return !!this.c && ne(this.e / Q) > this.c.length - 2
                                        }, ye.isLessThan = ye.lt = function(e, r) {
                                            return se(this, new ke(e, r)) < 0
                                        }, ye.isLessThanOrEqualTo = ye.lte = function(e, r) {
                                            return -1 === (r = se(this, new ke(e, r))) || 0 === r
                                        }, ye.isNaN = function() {
                                            return !this.s
                                        }, ye.isNegative = function() {
                                            return this.s < 0
                                        }, ye.isPositive = function() {
                                            return this.s > 0
                                        }, ye.isZero = function() {
                                            return !!this.c && 0 == this.c[0]
                                        }, ye.minus = function(e, r) {
                                            var n, H, G, q, V = this,
                                                W = V.s;
                                            if (r = (e = new ke(e, r)).s, !W || !r) return new ke(NaN);
                                            if (W != r) return e.s = -r, V.plus(e);
                                            var $ = V.e / Q,
                                                X = e.e / Q,
                                                Y = V.c,
                                                Z = e.c;
                                            if (!$ || !X) {
                                                if (!Y || !Z) return Y ? (e.s = -r, e) : new ke(Z ? V : NaN);
                                                if (!Y[0] || !Z[0]) return Z[0] ? (e.s = -r, e) : new ke(Y[0] ? V : 3 == Ae ? -0 : 0)
                                            }
                                            if ($ = ne($), X = ne(X), Y = Y.slice(), W = $ - X) {
                                                for ((q = W < 0) ? (W = -W, G = Y) : (X = $, G = Z), G.reverse(), r = W; r--; G.push(0));
                                                G.reverse()
                                            } else
                                                for (H = (q = (W = Y.length) < (r = Z.length)) ? W : r, W = r = 0; r < H; r++)
                                                    if (Y[r] != Z[r]) {
                                                        q = Y[r] < Z[r];
                                                        break
                                                    } if (q && (G = Y, Y = Z, Z = G, e.s = -e.s), (r = (H = Z.length) - (n = Y.length)) > 0)
                                                for (; r--; Y[n++] = 0);
                                            for (r = J - 1; H > W;) {
                                                if (Y[--H] < Z[H]) {
                                                    for (n = H; n && !Y[--n]; Y[n] = r);
                                                    --Y[n], Y[H] += J
                                                }
                                                Y[H] -= Z[H]
                                            }
                                            for (; 0 == Y[0]; Y.splice(0, 1), --X);
                                            return Y[0] ? Re(e, Y, X) : (e.s = 3 == Ae ? -1 : 1, e.c = [e.e = 0], e)
                                        }, ye.modulo = ye.mod = function(e, r) {
                                            var H, G, q = this;
                                            return e = new ke(e, r), !q.c || !e.s || e.c && !e.c[0] ? new ke(NaN) : !e.c || q.c && !q.c[0] ? new ke(q) : (9 == Te ? (G = e.s, e.s = 1, H = n(q, e, 0, 3), e.s = G, H.s *= G) : H = n(q, e, 0, Te), (e = q.minus(H.times(e))).c[0] || 1 != Te || (e.s = q.s), e)
                                        }, ye.multipliedBy = ye.times = function(e, r) {
                                            var n, H, G, q, V, W, $, X, Y, Z, ee, re, oe, se, ie, ae = this,
                                                ce = ae.c,
                                                ue = (e = new ke(e, r)).c;
                                            if (!(ce && ue && ce[0] && ue[0])) return !ae.s || !e.s || ce && !ce[0] && !ue || ue && !ue[0] && !ce ? e.c = e.e = e.s = null : (e.s *= ae.s, ce && ue ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                                            for (H = ne(ae.e / Q) + ne(e.e / Q), e.s *= ae.s, ($ = ce.length) < (Z = ue.length) && (oe = ce, ce = ue, ue = oe, G = $, $ = Z, Z = G), G = $ + Z, oe = []; G--; oe.push(0));
                                            for (se = J, ie = te, G = Z; --G >= 0;) {
                                                for (n = 0, ee = ue[G] % ie, re = ue[G] / ie | 0, q = G + (V = $); q > G;) n = ((X = ee * (X = ce[--V] % ie) + (W = re * X + (Y = ce[V] / ie | 0) * ee) % ie * ie + oe[q] + n) / se | 0) + (W / ie | 0) + re * Y, oe[q--] = X % se;
                                                oe[q] = n
                                            }
                                            return n ? ++H : oe.splice(0, 1), Re(e, oe, H)
                                        }, ye.negated = function() {
                                            var e = new ke(this);
                                            return e.s = -e.s || null, e
                                        }, ye.plus = function(e, r) {
                                            var n, H = this,
                                                G = H.s;
                                            if (r = (e = new ke(e, r)).s, !G || !r) return new ke(NaN);
                                            if (G != r) return e.s = -r, H.minus(e);
                                            var q = H.e / Q,
                                                V = e.e / Q,
                                                W = H.c,
                                                $ = e.c;
                                            if (!q || !V) {
                                                if (!W || !$) return new ke(G / 0);
                                                if (!W[0] || !$[0]) return $[0] ? e : new ke(W[0] ? H : 0 * G)
                                            }
                                            if (q = ne(q), V = ne(V), W = W.slice(), G = q - V) {
                                                for (G > 0 ? (V = q, n = $) : (G = -G, n = W), n.reverse(); G--; n.push(0));
                                                n.reverse()
                                            }
                                            for ((G = W.length) - (r = $.length) < 0 && (n = $, $ = W, W = n, r = G), G = 0; r;) G = (W[--r] = W[r] + $[r] + G) / J | 0, W[r] = J === W[r] ? 0 : W[r] % J;
                                            return G && (W = [G].concat(W), ++V), Re(e, W, V)
                                        }, ye.precision = ye.sd = function(e, r) {
                                            var n, H, G, q = this;
                                            if (null != e && e !== !!e) return ie(e, 1, re), null == r ? r = Ae : ie(r, 0, 8), Oe(new ke(q), e, r);
                                            if (!(n = q.c)) return null;
                                            if (H = (G = n.length - 1) * Q + 1, G = n[G]) {
                                                for (; G % 10 == 0; G /= 10, H--);
                                                for (G = n[0]; G >= 10; G /= 10, H++);
                                            }
                                            return e && q.e + 1 > H && (H = q.e + 1), H
                                        }, ye.shiftedBy = function(e) {
                                            return ie(e, -9007199254740991, Z), this.times("1e" + e)
                                        }, ye.squareRoot = ye.sqrt = function() {
                                            var e, r, H, G, q, V = this,
                                                W = V.c,
                                                $ = V.s,
                                                X = V.e,
                                                Y = be + 4,
                                                J = new ke("0.5");
                                            if (1 !== $ || !W || !W[0]) return new ke(!$ || $ < 0 && (!W || W[0]) ? NaN : W ? V : 1 / 0);
                                            if (0 == ($ = Math.sqrt(+De(V))) || $ == 1 / 0 ? (((r = oe(W)).length + X) % 2 == 0 && (r += "0"), $ = Math.sqrt(+r), X = ne((X + 1) / 2) - (X < 0 || X % 2), H = new ke(r = $ == 1 / 0 ? "5e" + X : (r = $.toExponential()).slice(0, r.indexOf("e") + 1) + X)) : H = new ke($ + ""), H.c[0])
                                                for (($ = (X = H.e) + Y) < 3 && ($ = 0);;)
                                                    if (q = H, H = J.times(q.plus(n(V, q, Y, 1))), oe(q.c).slice(0, $) === (r = oe(H.c)).slice(0, $)) {
                                                        if (H.e < X && --$, "9999" != (r = r.slice($ - 3, $ + 1)) && (G || "4999" != r)) {
                                                            +r && (+r.slice(1) || "5" != r.charAt(0)) || (Oe(H, H.e + be + 2, 1), e = !H.times(H).eq(V));
                                                            break
                                                        }
                                                        if (!G && (Oe(q, q.e + be + 2, 0), q.times(q).eq(V))) {
                                                            H = q;
                                                            break
                                                        }
                                                        Y += 4, $ += 4, G = 1
                                                    } return Oe(H, H.e + be + 1, Ae, e)
                                        }, ye.toExponential = function(e, r) {
                                            return null != e && (ie(e, 0, re), e++), Ie(this, e, r, 1)
                                        }, ye.toFixed = function(e, r) {
                                            return null != e && (ie(e, 0, re), e = e + this.e + 1), Ie(this, e, r)
                                        }, ye.toFormat = function(e, r, n) {
                                            var H, G = this;
                                            if (null == n) null != e && r && "object" == typeof r ? (n = r, r = null) : e && "object" == typeof e ? (n = e, e = r = null) : n = Be;
                                            else if ("object" != typeof n) throw Error(X + "Argument not an object: " + n);
                                            if (H = G.toFixed(e, r), G.c) {
                                                var q, V = H.split("."),
                                                    W = +n.groupSize,
                                                    $ = +n.secondaryGroupSize,
                                                    Y = n.groupSeparator || "",
                                                    J = V[0],
                                                    Q = V[1],
                                                    Z = G.s < 0,
                                                    ee = Z ? J.slice(1) : J,
                                                    te = ee.length;
                                                if ($ && (q = W, W = $, $ = q, te -= q), W > 0 && te > 0) {
                                                    for (q = te % W || W, J = ee.substr(0, q); q < te; q += W) J += Y + ee.substr(q, W);
                                                    $ > 0 && (J += Y + ee.slice(q)), Z && (J = "-" + J)
                                                }
                                                H = Q ? J + (n.decimalSeparator || "") + (($ = +n.fractionGroupSize) ? Q.replace(new RegExp("\\d{" + $ + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : Q) : J
                                            }
                                            return (n.prefix || "") + H + (n.suffix || "")
                                        }, ye.toFraction = function(e) {
                                            var r, H, G, q, V, W, $, Y, J, Z, te, re, ne = this,
                                                se = ne.c;
                                            if (null != e && (!($ = new ke(e)).isInteger() && ($.c || 1 !== $.s) || $.lt(me))) throw Error(X + "Argument " + ($.isInteger() ? "out of range: " : "not an integer: ") + De($));
                                            if (!se) return new ke(ne);
                                            for (r = new ke(me), J = H = new ke(me), G = Y = new ke(me), re = oe(se), V = r.e = re.length - ne.e - 1, r.c[0] = ee[(W = V % Q) < 0 ? Q + W : W], e = !e || $.comparedTo(r) > 0 ? V > 0 ? r : J : $, W = Se, Se = 1 / 0, $ = new ke(re), Y.c[0] = 0; Z = n($, r, 0, 1), 1 != (q = H.plus(Z.times(G))).comparedTo(e);) H = G, G = q, J = Y.plus(Z.times(q = J)), Y = q, r = $.minus(Z.times(q = r)), $ = q;
                                            return q = n(e.minus(H), G, 0, 1), Y = Y.plus(q.times(J)), H = H.plus(q.times(G)), Y.s = J.s = ne.s, te = n(J, G, V *= 2, Ae).minus(ne).abs().comparedTo(n(Y, H, V, Ae).minus(ne).abs()) < 1 ? [J, G] : [Y, H], Se = W, te
                                        }, ye.toNumber = function() {
                                            return +De(this)
                                        }, ye.toPrecision = function(e, r) {
                                            return null != e && ie(e, 1, re), Ie(this, e, r, 2)
                                        }, ye.toString = function(e) {
                                            var r, n = this,
                                                G = n.s,
                                                q = n.e;
                                            return null === q ? G ? (r = "Infinity", G < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = q <= we || q >= ve ? ce(oe(n.c), q) : ue(oe(n.c), q, "0") : 10 === e ? r = ue(oe((n = Oe(new ke(n), be + q + 1, Ae)).c), n.e, "0") : (ie(e, 2, Ue.length, "Base"), r = H(ue(oe(n.c), q, "0"), 10, e, G, !0)), G < 0 && n.c[0] && (r = "-" + r)), r
                                        }, ye.valueOf = ye.toJSON = function() {
                                            return De(this)
                                        }, ye._isBigNumber = !0, null != r && ke.set(r), ke
                                    }()).default = q.BigNumber = q, void 0 === (H = function() {
                                        return q
                                    }.call(r, n, r, e)) || (e.exports = H)
                                }()
                            },
                            2486: (e, r, n) => {
                                "use strict";
                                const H = n(5155),
                                    G = n(4525),
                                    q = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                                r.Buffer = $, r.SlowBuffer = function(e) {
                                    return +e != e && (e = 0), $.alloc(+e)
                                }, r.INSPECT_MAX_BYTES = 50;
                                const V = 2147483647;

                                function W(e) {
                                    if (e > V) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                                    const r = new Uint8Array(e);
                                    return Object.setPrototypeOf(r, $.prototype), r
                                }

                                function $(e, r, n) {
                                    if ("number" == typeof e) {
                                        if ("string" == typeof r) throw new TypeError('The "string" argument must be of type string. Received type number');
                                        return J(e)
                                    }
                                    return X(e, r, n)
                                }

                                function X(e, r, n) {
                                    if ("string" == typeof e) return function(e, r) {
                                        if ("string" == typeof r && "" !== r || (r = "utf8"), !$.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                                        const n = 0 | te(e, r);
                                        let H = W(n);
                                        const G = H.write(e, r);
                                        return G !== n && (H = H.slice(0, G)), H
                                    }(e, r);
                                    if (ArrayBuffer.isView(e)) return function(e) {
                                        if (Ne(e, Uint8Array)) {
                                            const r = new Uint8Array(e);
                                            return Z(r.buffer, r.byteOffset, r.byteLength)
                                        }
                                        return Q(e)
                                    }(e);
                                    if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                                    if (Ne(e, ArrayBuffer) || e && Ne(e.buffer, ArrayBuffer)) return Z(e, r, n);
                                    if ("undefined" != typeof SharedArrayBuffer && (Ne(e, SharedArrayBuffer) || e && Ne(e.buffer, SharedArrayBuffer))) return Z(e, r, n);
                                    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                                    const H = e.valueOf && e.valueOf();
                                    if (null != H && H !== e) return $.from(H, r, n);
                                    const G = function(e) {
                                        if ($.isBuffer(e)) {
                                            const r = 0 | ee(e.length),
                                                n = W(r);
                                            return 0 === n.length || e.copy(n, 0, 0, r), n
                                        }
                                        return void 0 !== e.length ? "number" != typeof e.length || Pe(e.length) ? W(0) : Q(e) : "Buffer" === e.type && Array.isArray(e.data) ? Q(e.data) : void 0
                                    }(e);
                                    if (G) return G;
                                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return $.from(e[Symbol.toPrimitive]("string"), r, n);
                                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                                }

                                function Y(e) {
                                    if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                                    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
                                }

                                function J(e) {
                                    return Y(e), W(e < 0 ? 0 : 0 | ee(e))
                                }

                                function Q(e) {
                                    const r = e.length < 0 ? 0 : 0 | ee(e.length),
                                        n = W(r);
                                    for (let H = 0; H < r; H += 1) n[H] = 255 & e[H];
                                    return n
                                }

                                function Z(e, r, n) {
                                    if (r < 0 || e.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
                                    if (e.byteLength < r + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                                    let H;
                                    return H = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n), Object.setPrototypeOf(H, $.prototype), H
                                }

                                function ee(e) {
                                    if (e >= V) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + V.toString(16) + " bytes");
                                    return 0 | e
                                }

                                function te(e, r) {
                                    if ($.isBuffer(e)) return e.length;
                                    if (ArrayBuffer.isView(e) || Ne(e, ArrayBuffer)) return e.byteLength;
                                    if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                                    const n = e.length,
                                        H = arguments.length > 2 && !0 === arguments[2];
                                    if (!H && 0 === n) return 0;
                                    let G = !1;
                                    for (;;) switch (r) {
                                        case "ascii":
                                        case "latin1":
                                        case "binary":
                                            return n;
                                        case "utf8":
                                        case "utf-8":
                                            return Re(e).length;
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return 2 * n;
                                        case "hex":
                                            return n >>> 1;
                                        case "base64":
                                            return Oe(e).length;
                                        default:
                                            if (G) return H ? -1 : Re(e).length;
                                            r = ("" + r).toLowerCase(), G = !0
                                    }
                                }

                                function re(e, r, n) {
                                    let H = !1;
                                    if ((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
                                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                                    if ((n >>>= 0) <= (r >>>= 0)) return "";
                                    for (e || (e = "utf8");;) switch (e) {
                                        case "hex":
                                            return ye(this, r, n);
                                        case "utf8":
                                        case "utf-8":
                                            return pe(this, r, n);
                                        case "ascii":
                                            return de(this, r, n);
                                        case "latin1":
                                        case "binary":
                                            return ge(this, r, n);
                                        case "base64":
                                            return he(this, r, n);
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return me(this, r, n);
                                        default:
                                            if (H) throw new TypeError("Unknown encoding: " + e);
                                            e = (e + "").toLowerCase(), H = !0
                                    }
                                }

                                function ne(e, r, n) {
                                    const H = e[r];
                                    e[r] = e[n], e[n] = H
                                }

                                function oe(e, r, n, H, G) {
                                    if (0 === e.length) return -1;
                                    if ("string" == typeof n ? (H = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), Pe(n = +n) && (n = G ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                                        if (G) return -1;
                                        n = e.length - 1
                                    } else if (n < 0) {
                                        if (!G) return -1;
                                        n = 0
                                    }
                                    if ("string" == typeof r && (r = $.from(r, H)), $.isBuffer(r)) return 0 === r.length ? -1 : se(e, r, n, H, G);
                                    if ("number" == typeof r) return r &= 255, "function" == typeof Uint8Array.prototype.indexOf ? G ? Uint8Array.prototype.indexOf.call(e, r, n) : Uint8Array.prototype.lastIndexOf.call(e, r, n) : se(e, [r], n, H, G);
                                    throw new TypeError("val must be string, number or Buffer")
                                }

                                function se(e, r, n, H, G) {
                                    let q, V = 1,
                                        W = e.length,
                                        $ = r.length;
                                    if (void 0 !== H && ("ucs2" === (H = String(H).toLowerCase()) || "ucs-2" === H || "utf16le" === H || "utf-16le" === H)) {
                                        if (e.length < 2 || r.length < 2) return -1;
                                        V = 2, W /= 2, $ /= 2, n /= 2
                                    }

                                    function X(e, r) {
                                        return 1 === V ? e[r] : e.readUInt16BE(r * V)
                                    }
                                    if (G) {
                                        let H = -1;
                                        for (q = n; q < W; q++)
                                            if (X(e, q) === X(r, -1 === H ? 0 : q - H)) {
                                                if (-1 === H && (H = q), q - H + 1 === $) return H * V
                                            } else - 1 !== H && (q -= q - H), H = -1
                                    } else
                                        for (n + $ > W && (n = W - $), q = n; q >= 0; q--) {
                                            let n = !0;
                                            for (let H = 0; H < $; H++)
                                                if (X(e, q + H) !== X(r, H)) {
                                                    n = !1;
                                                    break
                                                } if (n) return q
                                        }
                                    return -1
                                }

                                function ie(e, r, n, H) {
                                    n = Number(n) || 0;
                                    const G = e.length - n;
                                    H ? (H = Number(H)) > G && (H = G) : H = G;
                                    const q = r.length;
                                    let V;
                                    for (H > q / 2 && (H = q / 2), V = 0; V < H; ++V) {
                                        const H = parseInt(r.substr(2 * V, 2), 16);
                                        if (Pe(H)) return V;
                                        e[n + V] = H
                                    }
                                    return V
                                }

                                function ae(e, r, n, H) {
                                    return De(Re(r, e.length - n), e, n, H)
                                }

                                function ce(e, r, n, H) {
                                    return De(function(e) {
                                        const r = [];
                                        for (let n = 0; n < e.length; ++n) r.push(255 & e.charCodeAt(n));
                                        return r
                                    }(r), e, n, H)
                                }

                                function ue(e, r, n, H) {
                                    return De(Oe(r), e, n, H)
                                }

                                function le(e, r, n, H) {
                                    return De(function(e, r) {
                                        let n, H, G;
                                        const q = [];
                                        for (let V = 0; V < e.length && !((r -= 2) < 0); ++V) n = e.charCodeAt(V), H = n >> 8, G = n % 256, q.push(G), q.push(H);
                                        return q
                                    }(r, e.length - n), e, n, H)
                                }

                                function he(e, r, n) {
                                    return 0 === r && n === e.length ? H.fromByteArray(e) : H.fromByteArray(e.slice(r, n))
                                }

                                function pe(e, r, n) {
                                    n = Math.min(e.length, n);
                                    const H = [];
                                    let G = r;
                                    for (; G < n;) {
                                        const r = e[G];
                                        let q = null,
                                            V = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
                                        if (G + V <= n) {
                                            let n, H, W, $;
                                            switch (V) {
                                                case 1:
                                                    r < 128 && (q = r);
                                                    break;
                                                case 2:
                                                    n = e[G + 1], 128 == (192 & n) && ($ = (31 & r) << 6 | 63 & n, $ > 127 && (q = $));
                                                    break;
                                                case 3:
                                                    n = e[G + 1], H = e[G + 2], 128 == (192 & n) && 128 == (192 & H) && ($ = (15 & r) << 12 | (63 & n) << 6 | 63 & H, $ > 2047 && ($ < 55296 || $ > 57343) && (q = $));
                                                    break;
                                                case 4:
                                                    n = e[G + 1], H = e[G + 2], W = e[G + 3], 128 == (192 & n) && 128 == (192 & H) && 128 == (192 & W) && ($ = (15 & r) << 18 | (63 & n) << 12 | (63 & H) << 6 | 63 & W, $ > 65535 && $ < 1114112 && (q = $))
                                            }
                                        }
                                        null === q ? (q = 65533, V = 1) : q > 65535 && (q -= 65536, H.push(q >>> 10 & 1023 | 55296), q = 56320 | 1023 & q), H.push(q), G += V
                                    }
                                    return function(e) {
                                        const r = e.length;
                                        if (r <= fe) return String.fromCharCode.apply(String, e);
                                        let n = "",
                                            H = 0;
                                        for (; H < r;) n += String.fromCharCode.apply(String, e.slice(H, H += fe));
                                        return n
                                    }(H)
                                }
                                r.kMaxLength = V, $.TYPED_ARRAY_SUPPORT = function() {
                                    try {
                                        const e = new Uint8Array(1),
                                            r = {
                                                foo: function() {
                                                    return 42
                                                }
                                            };
                                        return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(e, r), 42 === e.foo()
                                    } catch (e) {
                                        return !1
                                    }
                                }(), $.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty($.prototype, "parent", {
                                    enumerable: !0,
                                    get: function() {
                                        if ($.isBuffer(this)) return this.buffer
                                    }
                                }), Object.defineProperty($.prototype, "offset", {
                                    enumerable: !0,
                                    get: function() {
                                        if ($.isBuffer(this)) return this.byteOffset
                                    }
                                }), $.poolSize = 8192, $.from = function(e, r, n) {
                                    return X(e, r, n)
                                }, Object.setPrototypeOf($.prototype, Uint8Array.prototype), Object.setPrototypeOf($, Uint8Array), $.alloc = function(e, r, n) {
                                    return function(e, r, n) {
                                        return Y(e), e <= 0 ? W(e) : void 0 !== r ? "string" == typeof n ? W(e).fill(r, n) : W(e).fill(r) : W(e)
                                    }(e, r, n)
                                }, $.allocUnsafe = function(e) {
                                    return J(e)
                                }, $.allocUnsafeSlow = function(e) {
                                    return J(e)
                                }, $.isBuffer = function(e) {
                                    return null != e && !0 === e._isBuffer && e !== $.prototype
                                }, $.compare = function(e, r) {
                                    if (Ne(e, Uint8Array) && (e = $.from(e, e.offset, e.byteLength)), Ne(r, Uint8Array) && (r = $.from(r, r.offset, r.byteLength)), !$.isBuffer(e) || !$.isBuffer(r)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                                    if (e === r) return 0;
                                    let n = e.length,
                                        H = r.length;
                                    for (let G = 0, q = Math.min(n, H); G < q; ++G)
                                        if (e[G] !== r[G]) {
                                            n = e[G], H = r[G];
                                            break
                                        } return n < H ? -1 : H < n ? 1 : 0
                                }, $.isEncoding = function(e) {
                                    switch (String(e).toLowerCase()) {
                                        case "hex":
                                        case "utf8":
                                        case "utf-8":
                                        case "ascii":
                                        case "latin1":
                                        case "binary":
                                        case "base64":
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return !0;
                                        default:
                                            return !1
                                    }
                                }, $.concat = function(e, r) {
                                    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                                    if (0 === e.length) return $.alloc(0);
                                    let n;
                                    if (void 0 === r)
                                        for (r = 0, n = 0; n < e.length; ++n) r += e[n].length;
                                    const H = $.allocUnsafe(r);
                                    let G = 0;
                                    for (n = 0; n < e.length; ++n) {
                                        let r = e[n];
                                        if (Ne(r, Uint8Array)) G + r.length > H.length ? ($.isBuffer(r) || (r = $.from(r)), r.copy(H, G)) : Uint8Array.prototype.set.call(H, r, G);
                                        else {
                                            if (!$.isBuffer(r)) throw new TypeError('"list" argument must be an Array of Buffers');
                                            r.copy(H, G)
                                        }
                                        G += r.length
                                    }
                                    return H
                                }, $.byteLength = te, $.prototype._isBuffer = !0, $.prototype.swap16 = function() {
                                    const e = this.length;
                                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                                    for (let r = 0; r < e; r += 2) ne(this, r, r + 1);
                                    return this
                                }, $.prototype.swap32 = function() {
                                    const e = this.length;
                                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                                    for (let r = 0; r < e; r += 4) ne(this, r, r + 3), ne(this, r + 1, r + 2);
                                    return this
                                }, $.prototype.swap64 = function() {
                                    const e = this.length;
                                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                                    for (let r = 0; r < e; r += 8) ne(this, r, r + 7), ne(this, r + 1, r + 6), ne(this, r + 2, r + 5), ne(this, r + 3, r + 4);
                                    return this
                                }, $.prototype.toString = function() {
                                    const e = this.length;
                                    return 0 === e ? "" : 0 === arguments.length ? pe(this, 0, e) : re.apply(this, arguments)
                                }, $.prototype.toLocaleString = $.prototype.toString, $.prototype.equals = function(e) {
                                    if (!$.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                                    return this === e || 0 === $.compare(this, e)
                                }, $.prototype.inspect = function() {
                                    let e = "";
                                    const n = r.INSPECT_MAX_BYTES;
                                    return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
                                }, q && ($.prototype[q] = $.prototype.inspect), $.prototype.compare = function(e, r, n, H, G) {
                                    if (Ne(e, Uint8Array) && (e = $.from(e, e.offset, e.byteLength)), !$.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                                    if (void 0 === r && (r = 0), void 0 === n && (n = e ? e.length : 0), void 0 === H && (H = 0), void 0 === G && (G = this.length), r < 0 || n > e.length || H < 0 || G > this.length) throw new RangeError("out of range index");
                                    if (H >= G && r >= n) return 0;
                                    if (H >= G) return -1;
                                    if (r >= n) return 1;
                                    if (this === e) return 0;
                                    let q = (G >>>= 0) - (H >>>= 0),
                                        V = (n >>>= 0) - (r >>>= 0);
                                    const W = Math.min(q, V),
                                        X = this.slice(H, G),
                                        Y = e.slice(r, n);
                                    for (let e = 0; e < W; ++e)
                                        if (X[e] !== Y[e]) {
                                            q = X[e], V = Y[e];
                                            break
                                        } return q < V ? -1 : V < q ? 1 : 0
                                }, $.prototype.includes = function(e, r, n) {
                                    return -1 !== this.indexOf(e, r, n)
                                }, $.prototype.indexOf = function(e, r, n) {
                                    return oe(this, e, r, n, !0)
                                }, $.prototype.lastIndexOf = function(e, r, n) {
                                    return oe(this, e, r, n, !1)
                                }, $.prototype.write = function(e, r, n, H) {
                                    if (void 0 === r) H = "utf8", n = this.length, r = 0;
                                    else if (void 0 === n && "string" == typeof r) H = r, n = this.length, r = 0;
                                    else {
                                        if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                        r >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === H && (H = "utf8")) : (H = n, n = void 0)
                                    }
                                    const G = this.length - r;
                                    if ((void 0 === n || n > G) && (n = G), e.length > 0 && (n < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                                    H || (H = "utf8");
                                    let q = !1;
                                    for (;;) switch (H) {
                                        case "hex":
                                            return ie(this, e, r, n);
                                        case "utf8":
                                        case "utf-8":
                                            return ae(this, e, r, n);
                                        case "ascii":
                                        case "latin1":
                                        case "binary":
                                            return ce(this, e, r, n);
                                        case "base64":
                                            return ue(this, e, r, n);
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return le(this, e, r, n);
                                        default:
                                            if (q) throw new TypeError("Unknown encoding: " + H);
                                            H = ("" + H).toLowerCase(), q = !0
                                    }
                                }, $.prototype.toJSON = function() {
                                    return {
                                        type: "Buffer",
                                        data: Array.prototype.slice.call(this._arr || this, 0)
                                    }
                                };
                                const fe = 4096;

                                function de(e, r, n) {
                                    let H = "";
                                    n = Math.min(e.length, n);
                                    for (let G = r; G < n; ++G) H += String.fromCharCode(127 & e[G]);
                                    return H
                                }

                                function ge(e, r, n) {
                                    let H = "";
                                    n = Math.min(e.length, n);
                                    for (let G = r; G < n; ++G) H += String.fromCharCode(e[G]);
                                    return H
                                }

                                function ye(e, r, n) {
                                    const H = e.length;
                                    (!r || r < 0) && (r = 0), (!n || n < 0 || n > H) && (n = H);
                                    let G = "";
                                    for (let H = r; H < n; ++H) G += Le[e[H]];
                                    return G
                                }

                                function me(e, r, n) {
                                    const H = e.slice(r, n);
                                    let G = "";
                                    for (let e = 0; e < H.length - 1; e += 2) G += String.fromCharCode(H[e] + 256 * H[e + 1]);
                                    return G
                                }

                                function be(e, r, n) {
                                    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                                    if (e + r > n) throw new RangeError("Trying to access beyond buffer length")
                                }

                                function Ae(e, r, n, H, G, q) {
                                    if (!$.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                                    if (r > G || r < q) throw new RangeError('"value" argument is out of bounds');
                                    if (n + H > e.length) throw new RangeError("Index out of range")
                                }

                                function we(e, r, n, H, G) {
                                    Ue(r, H, G, e, n, 7);
                                    let q = Number(r & BigInt(4294967295));
                                    e[n++] = q, q >>= 8, e[n++] = q, q >>= 8, e[n++] = q, q >>= 8, e[n++] = q;
                                    let V = Number(r >> BigInt(32) & BigInt(4294967295));
                                    return e[n++] = V, V >>= 8, e[n++] = V, V >>= 8, e[n++] = V, V >>= 8, e[n++] = V, n
                                }

                                function ve(e, r, n, H, G) {
                                    Ue(r, H, G, e, n, 7);
                                    let q = Number(r & BigInt(4294967295));
                                    e[n + 7] = q, q >>= 8, e[n + 6] = q, q >>= 8, e[n + 5] = q, q >>= 8, e[n + 4] = q;
                                    let V = Number(r >> BigInt(32) & BigInt(4294967295));
                                    return e[n + 3] = V, V >>= 8, e[n + 2] = V, V >>= 8, e[n + 1] = V, V >>= 8, e[n] = V, n + 8
                                }

                                function xe(e, r, n, H, G, q) {
                                    if (n + H > e.length) throw new RangeError("Index out of range");
                                    if (n < 0) throw new RangeError("Index out of range")
                                }

                                function Se(e, r, n, H, q) {
                                    return r = +r, n >>>= 0, q || xe(e, 0, n, 4), G.write(e, r, n, H, 23, 4), n + 4
                                }

                                function Ee(e, r, n, H, q) {
                                    return r = +r, n >>>= 0, q || xe(e, 0, n, 8), G.write(e, r, n, H, 52, 8), n + 8
                                }
                                $.prototype.slice = function(e, r) {
                                    const n = this.length;
                                    (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), r < e && (r = e);
                                    const H = this.subarray(e, r);
                                    return Object.setPrototypeOf(H, $.prototype), H
                                }, $.prototype.readUintLE = $.prototype.readUIntLE = function(e, r, n) {
                                    e >>>= 0, r >>>= 0, n || be(e, r, this.length);
                                    let H = this[e],
                                        G = 1,
                                        q = 0;
                                    for (; ++q < r && (G *= 256);) H += this[e + q] * G;
                                    return H
                                }, $.prototype.readUintBE = $.prototype.readUIntBE = function(e, r, n) {
                                    e >>>= 0, r >>>= 0, n || be(e, r, this.length);
                                    let H = this[e + --r],
                                        G = 1;
                                    for (; r > 0 && (G *= 256);) H += this[e + --r] * G;
                                    return H
                                }, $.prototype.readUint8 = $.prototype.readUInt8 = function(e, r) {
                                    return e >>>= 0, r || be(e, 1, this.length), this[e]
                                }, $.prototype.readUint16LE = $.prototype.readUInt16LE = function(e, r) {
                                    return e >>>= 0, r || be(e, 2, this.length), this[e] | this[e + 1] << 8
                                }, $.prototype.readUint16BE = $.prototype.readUInt16BE = function(e, r) {
                                    return e >>>= 0, r || be(e, 2, this.length), this[e] << 8 | this[e + 1]
                                }, $.prototype.readUint32LE = $.prototype.readUInt32LE = function(e, r) {
                                    return e >>>= 0, r || be(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                                }, $.prototype.readUint32BE = $.prototype.readUInt32BE = function(e, r) {
                                    return e >>>= 0, r || be(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                                }, $.prototype.readBigUInt64LE = Fe((function(e) {
                                    ke(e >>>= 0, "offset");
                                    const r = this[e],
                                        n = this[e + 7];
                                    void 0 !== r && void 0 !== n || Ie(e, this.length - 8);
                                    const H = r + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                                        G = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
                                    return BigInt(H) + (BigInt(G) << BigInt(32))
                                })), $.prototype.readBigUInt64BE = Fe((function(e) {
                                    ke(e >>>= 0, "offset");
                                    const r = this[e],
                                        n = this[e + 7];
                                    void 0 !== r && void 0 !== n || Ie(e, this.length - 8);
                                    const H = r * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                                        G = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
                                    return (BigInt(H) << BigInt(32)) + BigInt(G)
                                })), $.prototype.readIntLE = function(e, r, n) {
                                    e >>>= 0, r >>>= 0, n || be(e, r, this.length);
                                    let H = this[e],
                                        G = 1,
                                        q = 0;
                                    for (; ++q < r && (G *= 256);) H += this[e + q] * G;
                                    return G *= 128, H >= G && (H -= Math.pow(2, 8 * r)), H
                                }, $.prototype.readIntBE = function(e, r, n) {
                                    e >>>= 0, r >>>= 0, n || be(e, r, this.length);
                                    let H = r,
                                        G = 1,
                                        q = this[e + --H];
                                    for (; H > 0 && (G *= 256);) q += this[e + --H] * G;
                                    return G *= 128, q >= G && (q -= Math.pow(2, 8 * r)), q
                                }, $.prototype.readInt8 = function(e, r) {
                                    return e >>>= 0, r || be(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                                }, $.prototype.readInt16LE = function(e, r) {
                                    e >>>= 0, r || be(e, 2, this.length);
                                    const n = this[e] | this[e + 1] << 8;
                                    return 32768 & n ? 4294901760 | n : n
                                }, $.prototype.readInt16BE = function(e, r) {
                                    e >>>= 0, r || be(e, 2, this.length);
                                    const n = this[e + 1] | this[e] << 8;
                                    return 32768 & n ? 4294901760 | n : n
                                }, $.prototype.readInt32LE = function(e, r) {
                                    return e >>>= 0, r || be(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                                }, $.prototype.readInt32BE = function(e, r) {
                                    return e >>>= 0, r || be(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                                }, $.prototype.readBigInt64LE = Fe((function(e) {
                                    ke(e >>>= 0, "offset");
                                    const r = this[e],
                                        n = this[e + 7];
                                    void 0 !== r && void 0 !== n || Ie(e, this.length - 8);
                                    const H = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
                                    return (BigInt(H) << BigInt(32)) + BigInt(r + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
                                })), $.prototype.readBigInt64BE = Fe((function(e) {
                                    ke(e >>>= 0, "offset");
                                    const r = this[e],
                                        n = this[e + 7];
                                    void 0 !== r && void 0 !== n || Ie(e, this.length - 8);
                                    const H = (r << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                                    return (BigInt(H) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n)
                                })), $.prototype.readFloatLE = function(e, r) {
                                    return e >>>= 0, r || be(e, 4, this.length), G.read(this, e, !0, 23, 4)
                                }, $.prototype.readFloatBE = function(e, r) {
                                    return e >>>= 0, r || be(e, 4, this.length), G.read(this, e, !1, 23, 4)
                                }, $.prototype.readDoubleLE = function(e, r) {
                                    return e >>>= 0, r || be(e, 8, this.length), G.read(this, e, !0, 52, 8)
                                }, $.prototype.readDoubleBE = function(e, r) {
                                    return e >>>= 0, r || be(e, 8, this.length), G.read(this, e, !1, 52, 8)
                                }, $.prototype.writeUintLE = $.prototype.writeUIntLE = function(e, r, n, H) {
                                    e = +e, r >>>= 0, n >>>= 0, H || Ae(this, e, r, n, Math.pow(2, 8 * n) - 1, 0);
                                    let G = 1,
                                        q = 0;
                                    for (this[r] = 255 & e; ++q < n && (G *= 256);) this[r + q] = e / G & 255;
                                    return r + n
                                }, $.prototype.writeUintBE = $.prototype.writeUIntBE = function(e, r, n, H) {
                                    e = +e, r >>>= 0, n >>>= 0, H || Ae(this, e, r, n, Math.pow(2, 8 * n) - 1, 0);
                                    let G = n - 1,
                                        q = 1;
                                    for (this[r + G] = 255 & e; --G >= 0 && (q *= 256);) this[r + G] = e / q & 255;
                                    return r + n
                                }, $.prototype.writeUint8 = $.prototype.writeUInt8 = function(e, r, n) {
                                    return e = +e, r >>>= 0, n || Ae(this, e, r, 1, 255, 0), this[r] = 255 & e, r + 1
                                }, $.prototype.writeUint16LE = $.prototype.writeUInt16LE = function(e, r, n) {
                                    return e = +e, r >>>= 0, n || Ae(this, e, r, 2, 65535, 0), this[r] = 255 & e, this[r + 1] = e >>> 8, r + 2
                                }, $.prototype.writeUint16BE = $.prototype.writeUInt16BE = function(e, r, n) {
                                    return e = +e, r >>>= 0, n || Ae(this, e, r, 2, 65535, 0), this[r] = e >>> 8, this[r + 1] = 255 & e, r + 2
                                }, $.prototype.writeUint32LE = $.prototype.writeUInt32LE = function(e, r, n) {
                                    return e = +e, r >>>= 0, n || Ae(this, e, r, 4, 4294967295, 0), this[r + 3] = e >>> 24, this[r + 2] = e >>> 16, this[r + 1] = e >>> 8, this[r] = 255 & e, r + 4
                                }, $.prototype.writeUint32BE = $.prototype.writeUInt32BE = function(e, r, n) {
                                    return e = +e, r >>>= 0, n || Ae(this, e, r, 4, 4294967295, 0), this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = 255 & e, r + 4
                                }, $.prototype.writeBigUInt64LE = Fe((function(e, r = 0) {
                                    return we(this, e, r, BigInt(0), BigInt("0xffffffffffffffff"))
                                })), $.prototype.writeBigUInt64BE = Fe((function(e, r = 0) {
                                    return ve(this, e, r, BigInt(0), BigInt("0xffffffffffffffff"))
                                })), $.prototype.writeIntLE = function(e, r, n, H) {
                                    if (e = +e, r >>>= 0, !H) {
                                        const H = Math.pow(2, 8 * n - 1);
                                        Ae(this, e, r, n, H - 1, -H)
                                    }
                                    let G = 0,
                                        q = 1,
                                        V = 0;
                                    for (this[r] = 255 & e; ++G < n && (q *= 256);) e < 0 && 0 === V && 0 !== this[r + G - 1] && (V = 1), this[r + G] = (e / q >> 0) - V & 255;
                                    return r + n
                                }, $.prototype.writeIntBE = function(e, r, n, H) {
                                    if (e = +e, r >>>= 0, !H) {
                                        const H = Math.pow(2, 8 * n - 1);
                                        Ae(this, e, r, n, H - 1, -H)
                                    }
                                    let G = n - 1,
                                        q = 1,
                                        V = 0;
                                    for (this[r + G] = 255 & e; --G >= 0 && (q *= 256);) e < 0 && 0 === V && 0 !== this[r + G + 1] && (V = 1), this[r + G] = (e / q >> 0) - V & 255;
                                    return r + n
                                }, $.prototype.writeInt8 = function(e, r, n) {
                                    return e = +e, r >>>= 0, n || Ae(this, e, r, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[r] = 255 & e, r + 1
                                }, $.prototype.writeInt16LE = function(e, r, n) {
                                    return e = +e, r >>>= 0, n || Ae(this, e, r, 2, 32767, -32768), this[r] = 255 & e, this[r + 1] = e >>> 8, r + 2
                                }, $.prototype.writeInt16BE = function(e, r, n) {
                                    return e = +e, r >>>= 0, n || Ae(this, e, r, 2, 32767, -32768), this[r] = e >>> 8, this[r + 1] = 255 & e, r + 2
                                }, $.prototype.writeInt32LE = function(e, r, n) {
                                    return e = +e, r >>>= 0, n || Ae(this, e, r, 4, 2147483647, -2147483648), this[r] = 255 & e, this[r + 1] = e >>> 8, this[r + 2] = e >>> 16, this[r + 3] = e >>> 24, r + 4
                                }, $.prototype.writeInt32BE = function(e, r, n) {
                                    return e = +e, r >>>= 0, n || Ae(this, e, r, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = 255 & e, r + 4
                                }, $.prototype.writeBigInt64LE = Fe((function(e, r = 0) {
                                    return we(this, e, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                                })), $.prototype.writeBigInt64BE = Fe((function(e, r = 0) {
                                    return ve(this, e, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                                })), $.prototype.writeFloatLE = function(e, r, n) {
                                    return Se(this, e, r, !0, n)
                                }, $.prototype.writeFloatBE = function(e, r, n) {
                                    return Se(this, e, r, !1, n)
                                }, $.prototype.writeDoubleLE = function(e, r, n) {
                                    return Ee(this, e, r, !0, n)
                                }, $.prototype.writeDoubleBE = function(e, r, n) {
                                    return Ee(this, e, r, !1, n)
                                }, $.prototype.copy = function(e, r, n, H) {
                                    if (!$.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                                    if (n || (n = 0), H || 0 === H || (H = this.length), r >= e.length && (r = e.length), r || (r = 0), H > 0 && H < n && (H = n), H === n) return 0;
                                    if (0 === e.length || 0 === this.length) return 0;
                                    if (r < 0) throw new RangeError("targetStart out of bounds");
                                    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                                    if (H < 0) throw new RangeError("sourceEnd out of bounds");
                                    H > this.length && (H = this.length), e.length - r < H - n && (H = e.length - r + n);
                                    const G = H - n;
                                    return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(r, n, H) : Uint8Array.prototype.set.call(e, this.subarray(n, H), r), G
                                }, $.prototype.fill = function(e, r, n, H) {
                                    if ("string" == typeof e) {
                                        if ("string" == typeof r ? (H = r, r = 0, n = this.length) : "string" == typeof n && (H = n, n = this.length), void 0 !== H && "string" != typeof H) throw new TypeError("encoding must be a string");
                                        if ("string" == typeof H && !$.isEncoding(H)) throw new TypeError("Unknown encoding: " + H);
                                        if (1 === e.length) {
                                            const r = e.charCodeAt(0);
                                            ("utf8" === H && r < 128 || "latin1" === H) && (e = r)
                                        }
                                    } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                                    if (r < 0 || this.length < r || this.length < n) throw new RangeError("Out of range index");
                                    if (n <= r) return this;
                                    let G;
                                    if (r >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                                        for (G = r; G < n; ++G) this[G] = e;
                                    else {
                                        const q = $.isBuffer(e) ? e : $.from(e, H),
                                            V = q.length;
                                        if (0 === V) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                                        for (G = 0; G < n - r; ++G) this[G + r] = q[G % V]
                                    }
                                    return this
                                };
                                const Te = {};

                                function _e(e, r, n) {
                                    Te[e] = class extends n {
                                        constructor() {
                                            super(), Object.defineProperty(this, "message", {
                                                value: r.apply(this, arguments),
                                                writable: !0,
                                                configurable: !0
                                            }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                                        }
                                        get code() {
                                            return e
                                        }
                                        set code(e) {
                                            Object.defineProperty(this, "code", {
                                                configurable: !0,
                                                enumerable: !0,
                                                value: e,
                                                writable: !0
                                            })
                                        }
                                        toString() {
                                            return `${this.name} [${e}]: ${this.message}`
                                        }
                                    }
                                }

                                function Be(e) {
                                    let r = "",
                                        n = e.length;
                                    const H = "-" === e[0] ? 1 : 0;
                                    for (; n >= H + 4; n -= 3) r = `_${e.slice(n-3,n)}${r}`;
                                    return `${e.slice(0,n)}${r}`
                                }

                                function Ue(e, r, n, H, G, q) {
                                    if (e > n || e < r) {
                                        const H = "bigint" == typeof r ? "n" : "";
                                        let G;
                                        throw G = q > 3 ? 0 === r || r === BigInt(0) ? `>= 0${H} and < 2${H} ** ${8*(q+1)}${H}` : `>= -(2${H} ** ${8*(q+1)-1}${H}) and < 2 ** ${8*(q+1)-1}${H}` : `>= ${r}${H} and <= ${n}${H}`, new Te.ERR_OUT_OF_RANGE("value", G, e)
                                    }! function(e, r, n) {
                                        ke(r, "offset"), void 0 !== e[r] && void 0 !== e[r + n] || Ie(r, e.length - (n + 1))
                                    }(H, G, q)
                                }

                                function ke(e, r) {
                                    if ("number" != typeof e) throw new Te.ERR_INVALID_ARG_TYPE(r, "number", e)
                                }

                                function Ie(e, r, n) {
                                    if (Math.floor(e) !== e) throw ke(e, n), new Te.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
                                    if (r < 0) throw new Te.ERR_BUFFER_OUT_OF_BOUNDS;
                                    throw new Te.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${r}`, e)
                                }
                                _e("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
                                    return e ? e + " is outside of buffer bounds" : "Attempt to access memory outside buffer bounds"
                                }), RangeError), _e("ERR_INVALID_ARG_TYPE", (function(e, r) {
                                    return `The "${e}" argument must be of type number. Received type ${typeof r}`
                                }), TypeError), _e("ERR_OUT_OF_RANGE", (function(e, r, n) {
                                    let H = `The value of "${e}" is out of range.`,
                                        G = n;
                                    return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? G = Be(String(n)) : "bigint" == typeof n && (G = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (G = Be(G)), G += "n"), H += ` It must be ${r}. Received ${G}`, H
                                }), RangeError);
                                const Ce = /[^+/0-9A-Za-z-_]/g;

                                function Re(e, r) {
                                    let n;
                                    r = r || 1 / 0;
                                    const H = e.length;
                                    let G = null;
                                    const q = [];
                                    for (let V = 0; V < H; ++V) {
                                        if (n = e.charCodeAt(V), n > 55295 && n < 57344) {
                                            if (!G) {
                                                if (n > 56319) {
                                                    (r -= 3) > -1 && q.push(239, 191, 189);
                                                    continue
                                                }
                                                if (V + 1 === H) {
                                                    (r -= 3) > -1 && q.push(239, 191, 189);
                                                    continue
                                                }
                                                G = n;
                                                continue
                                            }
                                            if (n < 56320) {
                                                (r -= 3) > -1 && q.push(239, 191, 189), G = n;
                                                continue
                                            }
                                            n = 65536 + (G - 55296 << 10 | n - 56320)
                                        } else G && (r -= 3) > -1 && q.push(239, 191, 189);
                                        if (G = null, n < 128) {
                                            if ((r -= 1) < 0) break;
                                            q.push(n)
                                        } else if (n < 2048) {
                                            if ((r -= 2) < 0) break;
                                            q.push(n >> 6 | 192, 63 & n | 128)
                                        } else if (n < 65536) {
                                            if ((r -= 3) < 0) break;
                                            q.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                                        } else {
                                            if (!(n < 1114112)) throw new Error("Invalid code point");
                                            if ((r -= 4) < 0) break;
                                            q.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                                        }
                                    }
                                    return q
                                }

                                function Oe(e) {
                                    return H.toByteArray(function(e) {
                                        if ((e = (e = e.split("=")[0]).trim().replace(Ce, "")).length < 2) return "";
                                        for (; e.length % 4 != 0;) e += "=";
                                        return e
                                    }(e))
                                }

                                function De(e, r, n, H) {
                                    let G;
                                    for (G = 0; G < H && !(G + n >= r.length || G >= e.length); ++G) r[G + n] = e[G];
                                    return G
                                }

                                function Ne(e, r) {
                                    return e instanceof r || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === r.name
                                }

                                function Pe(e) {
                                    return e != e
                                }
                                const Le = function() {
                                    const e = "0123456789abcdef",
                                        r = new Array(256);
                                    for (let n = 0; n < 16; ++n) {
                                        const H = 16 * n;
                                        for (let G = 0; G < 16; ++G) r[H + G] = e[n] + e[G]
                                    }
                                    return r
                                }();

                                function Fe(e) {
                                    return "undefined" == typeof BigInt ? ze : e
                                }

                                function ze() {
                                    throw new Error("BigInt not supported")
                                }
                            },
                            7615: (e, r, n) => {
                                "use strict";
                                var H = n(1801),
                                    G = n(2550),
                                    q = G(H("String.prototype.indexOf"));
                                e.exports = function(e, r) {
                                    var n = H(e, !!r);
                                    return "function" == typeof n && q(e, ".prototype.") > -1 ? G(n) : n
                                }
                            },
                            2550: (e, r, n) => {
                                "use strict";
                                var H = n(1930),
                                    G = n(1801),
                                    q = G("%Function.prototype.apply%"),
                                    V = G("%Function.prototype.call%"),
                                    W = G("%Reflect.apply%", !0) || H.call(V, q),
                                    $ = G("%Object.getOwnPropertyDescriptor%", !0),
                                    X = G("%Object.defineProperty%", !0),
                                    Y = G("%Math.max%");
                                if (X) try {
                                    X({}, "a", {
                                        value: 1
                                    })
                                } catch (e) {
                                    X = null
                                }
                                e.exports = function(e) {
                                    var r = W(H, V, arguments);
                                    if ($ && X) {
                                        var n = $(r, "length");
                                        n.configurable && X(r, "length", {
                                            value: 1 + Y(0, e.length - (arguments.length - 1))
                                        })
                                    }
                                    return r
                                };
                                var J = function() {
                                    return W(H, q, arguments)
                                };
                                X ? X(e.exports, "apply", {
                                    value: J
                                }) : e.exports.apply = J
                            },
                            1069: e => {
                                function r(e) {
                                    if (e) return function(e) {
                                        for (var n in r.prototype) e[n] = r.prototype[n];
                                        return e
                                    }(e)
                                }
                                e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, r) {
                                    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(r), this
                                }, r.prototype.once = function(e, r) {
                                    function n() {
                                        this.off(e, n), r.apply(this, arguments)
                                    }
                                    return n.fn = r, this.on(e, n), this
                                }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, r) {
                                    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                                    var n, H = this._callbacks["$" + e];
                                    if (!H) return this;
                                    if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                                    for (var G = 0; G < H.length; G++)
                                        if ((n = H[G]) === r || n.fn === r) {
                                            H.splice(G, 1);
                                            break
                                        } return 0 === H.length && delete this._callbacks["$" + e], this
                                }, r.prototype.emit = function(e) {
                                    this._callbacks = this._callbacks || {};
                                    for (var r = new Array(arguments.length - 1), n = this._callbacks["$" + e], H = 1; H < arguments.length; H++) r[H - 1] = arguments[H];
                                    if (n) {
                                        H = 0;
                                        for (var G = (n = n.slice(0)).length; H < G; ++H) n[H].apply(this, r)
                                    }
                                    return this
                                }, r.prototype.listeners = function(e) {
                                    return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
                                }, r.prototype.hasListeners = function(e) {
                                    return !!this.listeners(e).length
                                }
                            },
                            5799: e => {
                                e.exports = H, H.default = H, H.stable = q, H.stableStringify = q;
                                var r = [],
                                    n = [];

                                function H(e, H, G) {
                                    var q;
                                    for (function e(H, G, q, V) {
                                            var W;
                                            if ("object" == typeof H && null !== H) {
                                                for (W = 0; W < q.length; W++)
                                                    if (q[W] === H) {
                                                        var $ = Object.getOwnPropertyDescriptor(V, G);
                                                        return void(void 0 !== $.get ? $.configurable ? (Object.defineProperty(V, G, {
                                                            value: "[Circular]"
                                                        }), r.push([V, G, H, $])) : n.push([H, G]) : (V[G] = "[Circular]", r.push([V, G, H])))
                                                    } if (q.push(H), Array.isArray(H))
                                                    for (W = 0; W < H.length; W++) e(H[W], W, q, H);
                                                else {
                                                    var X = Object.keys(H);
                                                    for (W = 0; W < X.length; W++) {
                                                        var Y = X[W];
                                                        e(H[Y], Y, q, H)
                                                    }
                                                }
                                                q.pop()
                                            }
                                        }(e, "", [], void 0), q = 0 === n.length ? JSON.stringify(e, H, G) : JSON.stringify(e, W(H), G); 0 !== r.length;) {
                                        var V = r.pop();
                                        4 === V.length ? Object.defineProperty(V[0], V[1], V[3]) : V[0][V[1]] = V[2]
                                    }
                                    return q
                                }

                                function G(e, r) {
                                    return e < r ? -1 : e > r ? 1 : 0
                                }

                                function q(e, H, G) {
                                    var q, $ = V(e, "", [], void 0) || e;
                                    for (q = 0 === n.length ? JSON.stringify($, H, G) : JSON.stringify($, W(H), G); 0 !== r.length;) {
                                        var X = r.pop();
                                        4 === X.length ? Object.defineProperty(X[0], X[1], X[3]) : X[0][X[1]] = X[2]
                                    }
                                    return q
                                }

                                function V(e, H, q, W) {
                                    var $;
                                    if ("object" == typeof e && null !== e) {
                                        for ($ = 0; $ < q.length; $++)
                                            if (q[$] === e) {
                                                var X = Object.getOwnPropertyDescriptor(W, H);
                                                return void(void 0 !== X.get ? X.configurable ? (Object.defineProperty(W, H, {
                                                    value: "[Circular]"
                                                }), r.push([W, H, e, X])) : n.push([e, H]) : (W[H] = "[Circular]", r.push([W, H, e])))
                                            } if ("function" == typeof e.toJSON) return;
                                        if (q.push(e), Array.isArray(e))
                                            for ($ = 0; $ < e.length; $++) V(e[$], $, q, e);
                                        else {
                                            var Y = {},
                                                J = Object.keys(e).sort(G);
                                            for ($ = 0; $ < J.length; $++) {
                                                var Q = J[$];
                                                V(e[Q], Q, q, e), Y[Q] = e[Q]
                                            }
                                            if (void 0 === W) return Y;
                                            r.push([W, H, e]), W[H] = Y
                                        }
                                        q.pop()
                                    }
                                }

                                function W(e) {
                                    return e = void 0 !== e ? e : function(e, r) {
                                            return r
                                        },
                                        function(r, H) {
                                            if (n.length > 0)
                                                for (var G = 0; G < n.length; G++) {
                                                    var q = n[G];
                                                    if (q[1] === r && q[0] === H) {
                                                        H = "[Circular]", n.splice(G, 1);
                                                        break
                                                    }
                                                }
                                            return e.call(this, r, H)
                                        }
                                }
                            },
                            9930: e => {
                                "use strict";
                                var r = "Function.prototype.bind called on incompatible ",
                                    n = Array.prototype.slice,
                                    H = Object.prototype.toString,
                                    G = "[object Function]";
                                e.exports = function(e) {
                                    var q = this;
                                    if ("function" != typeof q || H.call(q) !== G) throw new TypeError(r + q);
                                    for (var V, W = n.call(arguments, 1), $ = function() {
                                            if (this instanceof V) {
                                                var r = q.apply(this, W.concat(n.call(arguments)));
                                                return Object(r) === r ? r : this
                                            }
                                            return q.apply(e, W.concat(n.call(arguments)))
                                        }, X = Math.max(0, q.length - W.length), Y = [], J = 0; J < X; J++) Y.push("$" + J);
                                    if (V = Function("binder", "return function (" + Y.join(",") + "){ return binder.apply(this,arguments); }")($), q.prototype) {
                                        var Q = function() {};
                                        Q.prototype = q.prototype, V.prototype = new Q, Q.prototype = null
                                    }
                                    return V
                                }
                            },
                            1930: (e, r, n) => {
                                "use strict";
                                var H = n(9930);
                                e.exports = Function.prototype.bind || H
                            },
                            1801: (e, r, n) => {
                                "use strict";
                                var H, G = SyntaxError,
                                    q = Function,
                                    V = TypeError,
                                    W = function(e) {
                                        try {
                                            return q('"use strict"; return (' + e + ").constructor;")()
                                        } catch (e) {}
                                    },
                                    $ = Object.getOwnPropertyDescriptor;
                                if ($) try {
                                    $({}, "")
                                } catch (e) {
                                    $ = null
                                }
                                var X = function() {
                                        throw new V
                                    },
                                    Y = $ ? function() {
                                        try {
                                            return X
                                        } catch (e) {
                                            try {
                                                return $(arguments, "callee").get
                                            } catch (e) {
                                                return X
                                            }
                                        }
                                    }() : X,
                                    J = n(9905)(),
                                    Q = Object.getPrototypeOf || function(e) {
                                        return e.__proto__
                                    },
                                    Z = {},
                                    ee = "undefined" == typeof Uint8Array ? H : Q(Uint8Array),
                                    te = {
                                        "%AggregateError%": "undefined" == typeof AggregateError ? H : AggregateError,
                                        "%Array%": Array,
                                        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? H : ArrayBuffer,
                                        "%ArrayIteratorPrototype%": J ? Q([][Symbol.iterator]()) : H,
                                        "%AsyncFromSyncIteratorPrototype%": H,
                                        "%AsyncFunction%": Z,
                                        "%AsyncGenerator%": Z,
                                        "%AsyncGeneratorFunction%": Z,
                                        "%AsyncIteratorPrototype%": Z,
                                        "%Atomics%": "undefined" == typeof Atomics ? H : Atomics,
                                        "%BigInt%": "undefined" == typeof BigInt ? H : BigInt,
                                        "%Boolean%": Boolean,
                                        "%DataView%": "undefined" == typeof DataView ? H : DataView,
                                        "%Date%": Date,
                                        "%decodeURI%": decodeURI,
                                        "%decodeURIComponent%": decodeURIComponent,
                                        "%encodeURI%": encodeURI,
                                        "%encodeURIComponent%": encodeURIComponent,
                                        "%Error%": Error,
                                        "%eval%": eval,
                                        "%EvalError%": EvalError,
                                        "%Float32Array%": "undefined" == typeof Float32Array ? H : Float32Array,
                                        "%Float64Array%": "undefined" == typeof Float64Array ? H : Float64Array,
                                        "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? H : FinalizationRegistry,
                                        "%Function%": q,
                                        "%GeneratorFunction%": Z,
                                        "%Int8Array%": "undefined" == typeof Int8Array ? H : Int8Array,
                                        "%Int16Array%": "undefined" == typeof Int16Array ? H : Int16Array,
                                        "%Int32Array%": "undefined" == typeof Int32Array ? H : Int32Array,
                                        "%isFinite%": isFinite,
                                        "%isNaN%": isNaN,
                                        "%IteratorPrototype%": J ? Q(Q([][Symbol.iterator]())) : H,
                                        "%JSON%": "object" == typeof JSON ? JSON : H,
                                        "%Map%": "undefined" == typeof Map ? H : Map,
                                        "%MapIteratorPrototype%": "undefined" != typeof Map && J ? Q((new Map)[Symbol.iterator]()) : H,
                                        "%Math%": Math,
                                        "%Number%": Number,
                                        "%Object%": Object,
                                        "%parseFloat%": parseFloat,
                                        "%parseInt%": parseInt,
                                        "%Promise%": "undefined" == typeof Promise ? H : Promise,
                                        "%Proxy%": "undefined" == typeof Proxy ? H : Proxy,
                                        "%RangeError%": RangeError,
                                        "%ReferenceError%": ReferenceError,
                                        "%Reflect%": "undefined" == typeof Reflect ? H : Reflect,
                                        "%RegExp%": RegExp,
                                        "%Set%": "undefined" == typeof Set ? H : Set,
                                        "%SetIteratorPrototype%": "undefined" != typeof Set && J ? Q((new Set)[Symbol.iterator]()) : H,
                                        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? H : SharedArrayBuffer,
                                        "%String%": String,
                                        "%StringIteratorPrototype%": J ? Q("" [Symbol.iterator]()) : H,
                                        "%Symbol%": J ? Symbol : H,
                                        "%SyntaxError%": G,
                                        "%ThrowTypeError%": Y,
                                        "%TypedArray%": ee,
                                        "%TypeError%": V,
                                        "%Uint8Array%": "undefined" == typeof Uint8Array ? H : Uint8Array,
                                        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? H : Uint8ClampedArray,
                                        "%Uint16Array%": "undefined" == typeof Uint16Array ? H : Uint16Array,
                                        "%Uint32Array%": "undefined" == typeof Uint32Array ? H : Uint32Array,
                                        "%URIError%": URIError,
                                        "%WeakMap%": "undefined" == typeof WeakMap ? H : WeakMap,
                                        "%WeakRef%": "undefined" == typeof WeakRef ? H : WeakRef,
                                        "%WeakSet%": "undefined" == typeof WeakSet ? H : WeakSet
                                    },
                                    re = {
                                        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                                        "%ArrayPrototype%": ["Array", "prototype"],
                                        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                                        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                                        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                                        "%ArrayProto_values%": ["Array", "prototype", "values"],
                                        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                                        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                                        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                                        "%BooleanPrototype%": ["Boolean", "prototype"],
                                        "%DataViewPrototype%": ["DataView", "prototype"],
                                        "%DatePrototype%": ["Date", "prototype"],
                                        "%ErrorPrototype%": ["Error", "prototype"],
                                        "%EvalErrorPrototype%": ["EvalError", "prototype"],
                                        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                                        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                                        "%FunctionPrototype%": ["Function", "prototype"],
                                        "%Generator%": ["GeneratorFunction", "prototype"],
                                        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                                        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                                        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                                        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                                        "%JSONParse%": ["JSON", "parse"],
                                        "%JSONStringify%": ["JSON", "stringify"],
                                        "%MapPrototype%": ["Map", "prototype"],
                                        "%NumberPrototype%": ["Number", "prototype"],
                                        "%ObjectPrototype%": ["Object", "prototype"],
                                        "%ObjProto_toString%": ["Object", "prototype", "toString"],
                                        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                                        "%PromisePrototype%": ["Promise", "prototype"],
                                        "%PromiseProto_then%": ["Promise", "prototype", "then"],
                                        "%Promise_all%": ["Promise", "all"],
                                        "%Promise_reject%": ["Promise", "reject"],
                                        "%Promise_resolve%": ["Promise", "resolve"],
                                        "%RangeErrorPrototype%": ["RangeError", "prototype"],
                                        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                                        "%RegExpPrototype%": ["RegExp", "prototype"],
                                        "%SetPrototype%": ["Set", "prototype"],
                                        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                                        "%StringPrototype%": ["String", "prototype"],
                                        "%SymbolPrototype%": ["Symbol", "prototype"],
                                        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                                        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                                        "%TypeErrorPrototype%": ["TypeError", "prototype"],
                                        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                                        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                                        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                                        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                                        "%URIErrorPrototype%": ["URIError", "prototype"],
                                        "%WeakMapPrototype%": ["WeakMap", "prototype"],
                                        "%WeakSetPrototype%": ["WeakSet", "prototype"]
                                    },
                                    ne = n(1930),
                                    oe = n(9284),
                                    se = ne.call(Function.call, Array.prototype.concat),
                                    ie = ne.call(Function.apply, Array.prototype.splice),
                                    ae = ne.call(Function.call, String.prototype.replace),
                                    ce = ne.call(Function.call, String.prototype.slice),
                                    ue = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                                    le = /\\(\\)?/g,
                                    he = function(e) {
                                        var r = ce(e, 0, 1),
                                            n = ce(e, -1);
                                        if ("%" === r && "%" !== n) throw new G("invalid intrinsic syntax, expected closing `%`");
                                        if ("%" === n && "%" !== r) throw new G("invalid intrinsic syntax, expected opening `%`");
                                        var H = [];
                                        return ae(e, ue, (function(e, r, n, G) {
                                            H[H.length] = n ? ae(G, le, "$1") : r || e
                                        })), H
                                    },
                                    pe = function(e, r) {
                                        var n, H = e;
                                        if (oe(re, H) && (H = "%" + (n = re[H])[0] + "%"), oe(te, H)) {
                                            var q = te[H];
                                            if (q === Z && (q = function e(r) {
                                                    var n;
                                                    if ("%AsyncFunction%" === r) n = W("async function () {}");
                                                    else if ("%GeneratorFunction%" === r) n = W("function* () {}");
                                                    else if ("%AsyncGeneratorFunction%" === r) n = W("async function* () {}");
                                                    else if ("%AsyncGenerator%" === r) {
                                                        var H = e("%AsyncGeneratorFunction%");
                                                        H && (n = H.prototype)
                                                    } else if ("%AsyncIteratorPrototype%" === r) {
                                                        var G = e("%AsyncGenerator%");
                                                        G && (n = Q(G.prototype))
                                                    }
                                                    return te[r] = n, n
                                                }(H)), void 0 === q && !r) throw new V("intrinsic " + e + " exists, but is not available. Please file an issue!");
                                            return {
                                                alias: n,
                                                name: H,
                                                value: q
                                            }
                                        }
                                        throw new G("intrinsic " + e + " does not exist!")
                                    };
                                e.exports = function(e, r) {
                                    if ("string" != typeof e || 0 === e.length) throw new V("intrinsic name must be a non-empty string");
                                    if (arguments.length > 1 && "boolean" != typeof r) throw new V('"allowMissing" argument must be a boolean');
                                    var n = he(e),
                                        H = n.length > 0 ? n[0] : "",
                                        q = pe("%" + H + "%", r),
                                        W = q.name,
                                        X = q.value,
                                        Y = !1,
                                        J = q.alias;
                                    J && (H = J[0], ie(n, se([0, 1], J)));
                                    for (var Q = 1, Z = !0; Q < n.length; Q += 1) {
                                        var ee = n[Q],
                                            re = ce(ee, 0, 1),
                                            ne = ce(ee, -1);
                                        if (('"' === re || "'" === re || "`" === re || '"' === ne || "'" === ne || "`" === ne) && re !== ne) throw new G("property names with quotes must have matching quotes");
                                        if ("constructor" !== ee && Z || (Y = !0), oe(te, W = "%" + (H += "." + ee) + "%")) X = te[W];
                                        else if (null != X) {
                                            if (!(ee in X)) {
                                                if (!r) throw new V("base intrinsic for " + e + " exists, but the property is not available.");
                                                return
                                            }
                                            if ($ && Q + 1 >= n.length) {
                                                var ae = $(X, ee);
                                                X = (Z = !!ae) && "get" in ae && !("originalValue" in ae.get) ? ae.get : X[ee]
                                            } else Z = oe(X, ee), X = X[ee];
                                            Z && !Y && (te[W] = X)
                                        }
                                    }
                                    return X
                                }
                            },
                            9905: (e, r, n) => {
                                "use strict";
                                var H = "undefined" != typeof Symbol && Symbol,
                                    G = n(5682);
                                e.exports = function() {
                                    return "function" == typeof H && "function" == typeof Symbol && "symbol" == typeof H("foo") && "symbol" == typeof Symbol("bar") && G()
                                }
                            },
                            5682: e => {
                                "use strict";
                                e.exports = function() {
                                    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                                    if ("symbol" == typeof Symbol.iterator) return !0;
                                    var e = {},
                                        r = Symbol("test"),
                                        n = Object(r);
                                    if ("string" == typeof r) return !1;
                                    if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                                    if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
                                    for (r in e[r] = 42, e) return !1;
                                    if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
                                    if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
                                    var H = Object.getOwnPropertySymbols(e);
                                    if (1 !== H.length || H[0] !== r) return !1;
                                    if (!Object.prototype.propertyIsEnumerable.call(e, r)) return !1;
                                    if ("function" == typeof Object.getOwnPropertyDescriptor) {
                                        var G = Object.getOwnPropertyDescriptor(e, r);
                                        if (42 !== G.value || !0 !== G.enumerable) return !1
                                    }
                                    return !0
                                }
                            },
                            9284: (e, r, n) => {
                                "use strict";
                                var H = n(1930);
                                e.exports = H.call(Function.call, Object.prototype.hasOwnProperty)
                            },
                            7267: (e, r, n) => {
                                var H;
                                ! function() {
                                    "use strict";
                                    var r = "object" == typeof window ? window : {};
                                    !r.HI_BASE32_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node && (r = n.g);
                                    var G = !r.HI_BASE32_NO_COMMON_JS && e.exports,
                                        q = n.amdO,
                                        V = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split(""),
                                        W = {
                                            A: 0,
                                            B: 1,
                                            C: 2,
                                            D: 3,
                                            E: 4,
                                            F: 5,
                                            G: 6,
                                            H: 7,
                                            I: 8,
                                            J: 9,
                                            K: 10,
                                            L: 11,
                                            M: 12,
                                            N: 13,
                                            O: 14,
                                            P: 15,
                                            Q: 16,
                                            R: 17,
                                            S: 18,
                                            T: 19,
                                            U: 20,
                                            V: 21,
                                            W: 22,
                                            X: 23,
                                            Y: 24,
                                            Z: 25,
                                            2: 26,
                                            3: 27,
                                            4: 28,
                                            5: 29,
                                            6: 30,
                                            7: 31
                                        },
                                        $ = [0, 0, 0, 0, 0, 0, 0, 0],
                                        X = function(e, r) {
                                            r.length > 10 && (r = "..." + r.substr(-10));
                                            var n = new Error("Decoded data is not valid UTF-8. Maybe try base32.decode.asBytes()? Partial data after reading " + e + " bytes: " + r + " <-");
                                            throw n.position = e, n
                                        },
                                        Y = function(e) {
                                            if ("" === e) return [];
                                            if (!/^[A-Z2-7=]+$/.test(e)) throw new Error("Invalid base32 characters");
                                            for (var r, n, H, G, q, V, $, X, Y = [], J = 0, Q = (e = e.replace(/=/g, "")).length, Z = 0, ee = Q >> 3 << 3; Z < ee;) r = W[e.charAt(Z++)], n = W[e.charAt(Z++)], H = W[e.charAt(Z++)], G = W[e.charAt(Z++)], q = W[e.charAt(Z++)], V = W[e.charAt(Z++)], $ = W[e.charAt(Z++)], X = W[e.charAt(Z++)], Y[J++] = 255 & (r << 3 | n >>> 2), Y[J++] = 255 & (n << 6 | H << 1 | G >>> 4), Y[J++] = 255 & (G << 4 | q >>> 1), Y[J++] = 255 & (q << 7 | V << 2 | $ >>> 3), Y[J++] = 255 & ($ << 5 | X);
                                            var te = Q - ee;
                                            return 2 === te ? (r = W[e.charAt(Z++)], n = W[e.charAt(Z++)], Y[J++] = 255 & (r << 3 | n >>> 2)) : 4 === te ? (r = W[e.charAt(Z++)], n = W[e.charAt(Z++)], H = W[e.charAt(Z++)], G = W[e.charAt(Z++)], Y[J++] = 255 & (r << 3 | n >>> 2), Y[J++] = 255 & (n << 6 | H << 1 | G >>> 4)) : 5 === te ? (r = W[e.charAt(Z++)], n = W[e.charAt(Z++)], H = W[e.charAt(Z++)], G = W[e.charAt(Z++)], q = W[e.charAt(Z++)], Y[J++] = 255 & (r << 3 | n >>> 2), Y[J++] = 255 & (n << 6 | H << 1 | G >>> 4), Y[J++] = 255 & (G << 4 | q >>> 1)) : 7 === te && (r = W[e.charAt(Z++)], n = W[e.charAt(Z++)], H = W[e.charAt(Z++)], G = W[e.charAt(Z++)], q = W[e.charAt(Z++)], V = W[e.charAt(Z++)], $ = W[e.charAt(Z++)], Y[J++] = 255 & (r << 3 | n >>> 2), Y[J++] = 255 & (n << 6 | H << 1 | G >>> 4), Y[J++] = 255 & (G << 4 | q >>> 1), Y[J++] = 255 & (q << 7 | V << 2 | $ >>> 3)), Y
                                        },
                                        J = function(e, r) {
                                            if (!r) return function(e) {
                                                for (var r, n, H = "", G = e.length, q = 0, V = 0; q < G;)
                                                    if ((r = e[q++]) <= 127) H += String.fromCharCode(r);
                                                    else {
                                                        r > 191 && r <= 223 ? (n = 31 & r, V = 1) : r <= 239 ? (n = 15 & r, V = 2) : r <= 247 ? (n = 7 & r, V = 3) : X(q, H);
                                                        for (var W = 0; W < V; ++W)((r = e[q++]) < 128 || r > 191) && X(q, H), n <<= 6, n += 63 & r;
                                                        n >= 55296 && n <= 57343 && X(q, H), n > 1114111 && X(q, H), n <= 65535 ? H += String.fromCharCode(n) : (n -= 65536, H += String.fromCharCode(55296 + (n >> 10)), H += String.fromCharCode(56320 + (1023 & n)))
                                                    } return H
                                            }(Y(e));
                                            if ("" === e) return "";
                                            if (!/^[A-Z2-7=]+$/.test(e)) throw new Error("Invalid base32 characters");
                                            var n, H, G, q, V, $, J, Q, Z = "",
                                                ee = e.indexOf("="); - 1 === ee && (ee = e.length);
                                            for (var te = 0, re = ee >> 3 << 3; te < re;) n = W[e.charAt(te++)], H = W[e.charAt(te++)], G = W[e.charAt(te++)], q = W[e.charAt(te++)], V = W[e.charAt(te++)], $ = W[e.charAt(te++)], J = W[e.charAt(te++)], Q = W[e.charAt(te++)], Z += String.fromCharCode(255 & (n << 3 | H >>> 2)) + String.fromCharCode(255 & (H << 6 | G << 1 | q >>> 4)) + String.fromCharCode(255 & (q << 4 | V >>> 1)) + String.fromCharCode(255 & (V << 7 | $ << 2 | J >>> 3)) + String.fromCharCode(255 & (J << 5 | Q));
                                            var ne = ee - re;
                                            return 2 === ne ? (n = W[e.charAt(te++)], H = W[e.charAt(te++)], Z += String.fromCharCode(255 & (n << 3 | H >>> 2))) : 4 === ne ? (n = W[e.charAt(te++)], H = W[e.charAt(te++)], G = W[e.charAt(te++)], q = W[e.charAt(te++)], Z += String.fromCharCode(255 & (n << 3 | H >>> 2)) + String.fromCharCode(255 & (H << 6 | G << 1 | q >>> 4))) : 5 === ne ? (n = W[e.charAt(te++)], H = W[e.charAt(te++)], G = W[e.charAt(te++)], q = W[e.charAt(te++)], V = W[e.charAt(te++)], Z += String.fromCharCode(255 & (n << 3 | H >>> 2)) + String.fromCharCode(255 & (H << 6 | G << 1 | q >>> 4)) + String.fromCharCode(255 & (q << 4 | V >>> 1))) : 7 === ne && (n = W[e.charAt(te++)], H = W[e.charAt(te++)], G = W[e.charAt(te++)], q = W[e.charAt(te++)], V = W[e.charAt(te++)], $ = W[e.charAt(te++)], J = W[e.charAt(te++)], Z += String.fromCharCode(255 & (n << 3 | H >>> 2)) + String.fromCharCode(255 & (H << 6 | G << 1 | q >>> 4)) + String.fromCharCode(255 & (q << 4 | V >>> 1)) + String.fromCharCode(255 & (V << 7 | $ << 2 | J >>> 3))), Z
                                        },
                                        Q = {
                                            encode: function(e, r) {
                                                var n = "string" != typeof e;
                                                return n && e.constructor === ArrayBuffer && (e = new Uint8Array(e)), n ? function(e) {
                                                    for (var r, n, H, G, q, W = "", $ = e.length, X = 0, Y = 5 * parseInt($ / 5); X < Y;) r = e[X++], n = e[X++], H = e[X++], G = e[X++], q = e[X++], W += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[31 & (n << 4 | H >>> 4)] + V[31 & (H << 1 | G >>> 7)] + V[G >>> 2 & 31] + V[31 & (G << 3 | q >>> 5)] + V[31 & q];
                                                    var J = $ - Y;
                                                    return 1 === J ? (r = e[X], W += V[r >>> 3] + V[r << 2 & 31] + "======") : 2 === J ? (r = e[X++], n = e[X], W += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[n << 4 & 31] + "====") : 3 === J ? (r = e[X++], n = e[X++], H = e[X], W += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[31 & (n << 4 | H >>> 4)] + V[H << 1 & 31] + "===") : 4 === J && (r = e[X++], n = e[X++], H = e[X++], G = e[X], W += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[31 & (n << 4 | H >>> 4)] + V[31 & (H << 1 | G >>> 7)] + V[G >>> 2 & 31] + V[G << 3 & 31] + "="), W
                                                }(e) : r ? function(e) {
                                                    for (var r, n, H, G, q, W = "", $ = e.length, X = 0, Y = 5 * parseInt($ / 5); X < Y;) r = e.charCodeAt(X++), n = e.charCodeAt(X++), H = e.charCodeAt(X++), G = e.charCodeAt(X++), q = e.charCodeAt(X++), W += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[31 & (n << 4 | H >>> 4)] + V[31 & (H << 1 | G >>> 7)] + V[G >>> 2 & 31] + V[31 & (G << 3 | q >>> 5)] + V[31 & q];
                                                    var J = $ - Y;
                                                    return 1 === J ? (r = e.charCodeAt(X), W += V[r >>> 3] + V[r << 2 & 31] + "======") : 2 === J ? (r = e.charCodeAt(X++), n = e.charCodeAt(X), W += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[n << 4 & 31] + "====") : 3 === J ? (r = e.charCodeAt(X++), n = e.charCodeAt(X++), H = e.charCodeAt(X), W += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[31 & (n << 4 | H >>> 4)] + V[H << 1 & 31] + "===") : 4 === J && (r = e.charCodeAt(X++), n = e.charCodeAt(X++), H = e.charCodeAt(X++), G = e.charCodeAt(X), W += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[31 & (n << 4 | H >>> 4)] + V[31 & (H << 1 | G >>> 7)] + V[G >>> 2 & 31] + V[G << 3 & 31] + "="), W
                                                }(e) : function(e) {
                                                    var r, n, H, G, q, W, X, Y = !1,
                                                        J = "",
                                                        Q = 0,
                                                        Z = 0,
                                                        ee = e.length;
                                                    if ("" === e) return J;
                                                    do {
                                                        for ($[0] = $[5], $[1] = $[6], $[2] = $[7], X = Z; Q < ee && X < 5; ++Q)(W = e.charCodeAt(Q)) < 128 ? $[X++] = W : W < 2048 ? ($[X++] = 192 | W >> 6, $[X++] = 128 | 63 & W) : W < 55296 || W >= 57344 ? ($[X++] = 224 | W >> 12, $[X++] = 128 | W >> 6 & 63, $[X++] = 128 | 63 & W) : (W = 65536 + ((1023 & W) << 10 | 1023 & e.charCodeAt(++Q)), $[X++] = 240 | W >> 18, $[X++] = 128 | W >> 12 & 63, $[X++] = 128 | W >> 6 & 63, $[X++] = 128 | 63 & W);
                                                        Z = X - 5, Q === ee && ++Q, Q > ee && X < 6 && (Y = !0), r = $[0], X > 4 ? (n = $[1], H = $[2], G = $[3], q = $[4], J += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[31 & (n << 4 | H >>> 4)] + V[31 & (H << 1 | G >>> 7)] + V[G >>> 2 & 31] + V[31 & (G << 3 | q >>> 5)] + V[31 & q]) : 1 === X ? J += V[r >>> 3] + V[r << 2 & 31] + "======" : 2 === X ? (n = $[1], J += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[n << 4 & 31] + "====") : 3 === X ? (n = $[1], H = $[2], J += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[31 & (n << 4 | H >>> 4)] + V[H << 1 & 31] + "===") : (n = $[1], H = $[2], G = $[3], J += V[r >>> 3] + V[31 & (r << 2 | n >>> 6)] + V[n >>> 1 & 31] + V[31 & (n << 4 | H >>> 4)] + V[31 & (H << 1 | G >>> 7)] + V[G >>> 2 & 31] + V[G << 3 & 31] + "=")
                                                    } while (!Y);
                                                    return J
                                                }(e)
                                            },
                                            decode: J
                                        };
                                    J.asBytes = Y, G ? e.exports = Q : (r.base32 = Q, q && (void 0 === (H = function() {
                                        return Q
                                    }.call(Q, n, Q, e)) || (e.exports = H)))
                                }()
                            },
                            4525: (e, r) => {
                                r.read = function(e, r, n, H, G) {
                                    var q, V, W = 8 * G - H - 1,
                                        $ = (1 << W) - 1,
                                        X = $ >> 1,
                                        Y = -7,
                                        J = n ? G - 1 : 0,
                                        Q = n ? -1 : 1,
                                        Z = e[r + J];
                                    for (J += Q, q = Z & (1 << -Y) - 1, Z >>= -Y, Y += W; Y > 0; q = 256 * q + e[r + J], J += Q, Y -= 8);
                                    for (V = q & (1 << -Y) - 1, q >>= -Y, Y += H; Y > 0; V = 256 * V + e[r + J], J += Q, Y -= 8);
                                    if (0 === q) q = 1 - X;
                                    else {
                                        if (q === $) return V ? NaN : 1 / 0 * (Z ? -1 : 1);
                                        V += Math.pow(2, H), q -= X
                                    }
                                    return (Z ? -1 : 1) * V * Math.pow(2, q - H)
                                }, r.write = function(e, r, n, H, G, q) {
                                    var V, W, $, X = 8 * q - G - 1,
                                        Y = (1 << X) - 1,
                                        J = Y >> 1,
                                        Q = 23 === G ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                        Z = H ? 0 : q - 1,
                                        ee = H ? 1 : -1,
                                        te = r < 0 || 0 === r && 1 / r < 0 ? 1 : 0;
                                    for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (W = isNaN(r) ? 1 : 0, V = Y) : (V = Math.floor(Math.log(r) / Math.LN2), r * ($ = Math.pow(2, -V)) < 1 && (V--, $ *= 2), (r += V + J >= 1 ? Q / $ : Q * Math.pow(2, 1 - J)) * $ >= 2 && (V++, $ /= 2), V + J >= Y ? (W = 0, V = Y) : V + J >= 1 ? (W = (r * $ - 1) * Math.pow(2, G), V += J) : (W = r * Math.pow(2, J - 1) * Math.pow(2, G), V = 0)); G >= 8; e[n + Z] = 255 & W, Z += ee, W /= 256, G -= 8);
                                    for (V = V << G | W, X += G; X > 0; e[n + Z] = 255 & V, Z += ee, V /= 256, X -= 8);
                                    e[n + Z - ee] |= 128 * te
                                }
                            },
                            3477: (module, exports, __webpack_require__) => {
                                var __WEBPACK_AMD_DEFINE_RESULT__;
                                ! function() {
                                    "use strict";
                                    var ERROR = "input is invalid type",
                                        WINDOW = "object" == typeof window,
                                        root = WINDOW ? window : {};
                                    root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
                                    var WEB_WORKER = !WINDOW && "object" == typeof self,
                                        NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                                    NODE_JS ? root = __webpack_require__.g : WEB_WORKER && (root = self);
                                    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports,
                                        AMD = __webpack_require__.amdO,
                                        ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                                        HEX_CHARS = "0123456789abcdef".split(""),
                                        EXTRA = [-2147483648, 8388608, 32768, 128],
                                        SHIFT = [24, 16, 8, 0],
                                        K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                                        OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
                                        blocks = [];
                                    !root.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                                        return "[object Array]" === Object.prototype.toString.call(e)
                                    }), !ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                                        return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                                    });
                                    var createOutputMethod = function(e, r) {
                                            return function(n) {
                                                return new Sha256(r, !0).update(n)[e]()
                                            }
                                        },
                                        createMethod = function(e) {
                                            var r = createOutputMethod("hex", e);
                                            NODE_JS && (r = nodeWrap(r, e)), r.create = function() {
                                                return new Sha256(e)
                                            }, r.update = function(e) {
                                                return r.create().update(e)
                                            };
                                            for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
                                                var H = OUTPUT_TYPES[n];
                                                r[H] = createOutputMethod(H, e)
                                            }
                                            return r
                                        },
                                        nodeWrap = function(method, is224) {
                                            var crypto = eval("require('crypto')"),
                                                Buffer = eval("require('buffer').Buffer"),
                                                algorithm = is224 ? "sha224" : "sha256",
                                                nodeMethod = function(e) {
                                                    if ("string" == typeof e) return crypto.createHash(algorithm).update(e, "utf8").digest("hex");
                                                    if (null == e) throw new Error(ERROR);
                                                    return e.constructor === ArrayBuffer && (e = new Uint8Array(e)), Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(e)).digest("hex") : method(e)
                                                };
                                            return nodeMethod
                                        },
                                        createHmacOutputMethod = function(e, r) {
                                            return function(n, H) {
                                                return new HmacSha256(n, r, !0).update(H)[e]()
                                            }
                                        },
                                        createHmacMethod = function(e) {
                                            var r = createHmacOutputMethod("hex", e);
                                            r.create = function(r) {
                                                return new HmacSha256(r, e)
                                            }, r.update = function(e, n) {
                                                return r.create(e).update(n)
                                            };
                                            for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
                                                var H = OUTPUT_TYPES[n];
                                                r[H] = createHmacOutputMethod(H, e)
                                            }
                                            return r
                                        };

                                    function Sha256(e, r) {
                                        r ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = e
                                    }

                                    function HmacSha256(e, r, n) {
                                        var H, G = typeof e;
                                        if ("string" === G) {
                                            var q, V = [],
                                                W = e.length,
                                                $ = 0;
                                            for (H = 0; H < W; ++H)(q = e.charCodeAt(H)) < 128 ? V[$++] = q : q < 2048 ? (V[$++] = 192 | q >> 6, V[$++] = 128 | 63 & q) : q < 55296 || q >= 57344 ? (V[$++] = 224 | q >> 12, V[$++] = 128 | q >> 6 & 63, V[$++] = 128 | 63 & q) : (q = 65536 + ((1023 & q) << 10 | 1023 & e.charCodeAt(++H)), V[$++] = 240 | q >> 18, V[$++] = 128 | q >> 12 & 63, V[$++] = 128 | q >> 6 & 63, V[$++] = 128 | 63 & q);
                                            e = V
                                        } else {
                                            if ("object" !== G) throw new Error(ERROR);
                                            if (null === e) throw new Error(ERROR);
                                            if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                                            else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw new Error(ERROR)
                                        }
                                        e.length > 64 && (e = new Sha256(r, !0).update(e).array());
                                        var X = [],
                                            Y = [];
                                        for (H = 0; H < 64; ++H) {
                                            var J = e[H] || 0;
                                            X[H] = 92 ^ J, Y[H] = 54 ^ J
                                        }
                                        Sha256.call(this, r, n), this.update(Y), this.oKeyPad = X, this.inner = !0, this.sharedMemory = n
                                    }
                                    Sha256.prototype.update = function(e) {
                                        if (!this.finalized) {
                                            var r, n = typeof e;
                                            if ("string" !== n) {
                                                if ("object" !== n) throw new Error(ERROR);
                                                if (null === e) throw new Error(ERROR);
                                                if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                                                else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw new Error(ERROR);
                                                r = !0
                                            }
                                            for (var H, G, q = 0, V = e.length, W = this.blocks; q < V;) {
                                                if (this.hashed && (this.hashed = !1, W[0] = this.block, W[16] = W[1] = W[2] = W[3] = W[4] = W[5] = W[6] = W[7] = W[8] = W[9] = W[10] = W[11] = W[12] = W[13] = W[14] = W[15] = 0), r)
                                                    for (G = this.start; q < V && G < 64; ++q) W[G >> 2] |= e[q] << SHIFT[3 & G++];
                                                else
                                                    for (G = this.start; q < V && G < 64; ++q)(H = e.charCodeAt(q)) < 128 ? W[G >> 2] |= H << SHIFT[3 & G++] : H < 2048 ? (W[G >> 2] |= (192 | H >> 6) << SHIFT[3 & G++], W[G >> 2] |= (128 | 63 & H) << SHIFT[3 & G++]) : H < 55296 || H >= 57344 ? (W[G >> 2] |= (224 | H >> 12) << SHIFT[3 & G++], W[G >> 2] |= (128 | H >> 6 & 63) << SHIFT[3 & G++], W[G >> 2] |= (128 | 63 & H) << SHIFT[3 & G++]) : (H = 65536 + ((1023 & H) << 10 | 1023 & e.charCodeAt(++q)), W[G >> 2] |= (240 | H >> 18) << SHIFT[3 & G++], W[G >> 2] |= (128 | H >> 12 & 63) << SHIFT[3 & G++], W[G >> 2] |= (128 | H >> 6 & 63) << SHIFT[3 & G++], W[G >> 2] |= (128 | 63 & H) << SHIFT[3 & G++]);
                                                this.lastByteIndex = G, this.bytes += G - this.start, G >= 64 ? (this.block = W[16], this.start = G - 64, this.hash(), this.hashed = !0) : this.start = G
                                            }
                                            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                                        }
                                    }, Sha256.prototype.finalize = function() {
                                        if (!this.finalized) {
                                            this.finalized = !0;
                                            var e = this.blocks,
                                                r = this.lastByteIndex;
                                            e[16] = this.block, e[r >> 2] |= EXTRA[3 & r], this.block = e[16], r >= 56 && (this.hashed || this.hash(), e[0] = this.block, e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.hBytes << 3 | this.bytes >>> 29, e[15] = this.bytes << 3, this.hash()
                                        }
                                    }, Sha256.prototype.hash = function() {
                                        var e, r, n, H, G, q, V, W, $, X = this.h0,
                                            Y = this.h1,
                                            J = this.h2,
                                            Q = this.h3,
                                            Z = this.h4,
                                            ee = this.h5,
                                            te = this.h6,
                                            re = this.h7,
                                            ne = this.blocks;
                                        for (e = 16; e < 64; ++e) r = ((G = ne[e - 15]) >>> 7 | G << 25) ^ (G >>> 18 | G << 14) ^ G >>> 3, n = ((G = ne[e - 2]) >>> 17 | G << 15) ^ (G >>> 19 | G << 13) ^ G >>> 10, ne[e] = ne[e - 16] + r + ne[e - 7] + n << 0;
                                        for ($ = Y & J, e = 0; e < 64; e += 4) this.first ? (this.is224 ? (q = 300032, re = (G = ne[0] - 1413257819) - 150054599 << 0, Q = G + 24177077 << 0) : (q = 704751109, re = (G = ne[0] - 210244248) - 1521486534 << 0, Q = G + 143694565 << 0), this.first = !1) : (r = (X >>> 2 | X << 30) ^ (X >>> 13 | X << 19) ^ (X >>> 22 | X << 10), H = (q = X & Y) ^ X & J ^ $, re = Q + (G = re + (n = (Z >>> 6 | Z << 26) ^ (Z >>> 11 | Z << 21) ^ (Z >>> 25 | Z << 7)) + (Z & ee ^ ~Z & te) + K[e] + ne[e]) << 0, Q = G + (r + H) << 0), r = (Q >>> 2 | Q << 30) ^ (Q >>> 13 | Q << 19) ^ (Q >>> 22 | Q << 10), H = (V = Q & X) ^ Q & Y ^ q, te = J + (G = te + (n = (re >>> 6 | re << 26) ^ (re >>> 11 | re << 21) ^ (re >>> 25 | re << 7)) + (re & Z ^ ~re & ee) + K[e + 1] + ne[e + 1]) << 0, r = ((J = G + (r + H) << 0) >>> 2 | J << 30) ^ (J >>> 13 | J << 19) ^ (J >>> 22 | J << 10), H = (W = J & Q) ^ J & X ^ V, ee = Y + (G = ee + (n = (te >>> 6 | te << 26) ^ (te >>> 11 | te << 21) ^ (te >>> 25 | te << 7)) + (te & re ^ ~te & Z) + K[e + 2] + ne[e + 2]) << 0, r = ((Y = G + (r + H) << 0) >>> 2 | Y << 30) ^ (Y >>> 13 | Y << 19) ^ (Y >>> 22 | Y << 10), H = ($ = Y & J) ^ Y & Q ^ W, Z = X + (G = Z + (n = (ee >>> 6 | ee << 26) ^ (ee >>> 11 | ee << 21) ^ (ee >>> 25 | ee << 7)) + (ee & te ^ ~ee & re) + K[e + 3] + ne[e + 3]) << 0, X = G + (r + H) << 0;
                                        this.h0 = this.h0 + X << 0, this.h1 = this.h1 + Y << 0, this.h2 = this.h2 + J << 0, this.h3 = this.h3 + Q << 0, this.h4 = this.h4 + Z << 0, this.h5 = this.h5 + ee << 0, this.h6 = this.h6 + te << 0, this.h7 = this.h7 + re << 0
                                    }, Sha256.prototype.hex = function() {
                                        this.finalize();
                                        var e = this.h0,
                                            r = this.h1,
                                            n = this.h2,
                                            H = this.h3,
                                            G = this.h4,
                                            q = this.h5,
                                            V = this.h6,
                                            W = this.h7,
                                            $ = HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[H >> 28 & 15] + HEX_CHARS[H >> 24 & 15] + HEX_CHARS[H >> 20 & 15] + HEX_CHARS[H >> 16 & 15] + HEX_CHARS[H >> 12 & 15] + HEX_CHARS[H >> 8 & 15] + HEX_CHARS[H >> 4 & 15] + HEX_CHARS[15 & H] + HEX_CHARS[G >> 28 & 15] + HEX_CHARS[G >> 24 & 15] + HEX_CHARS[G >> 20 & 15] + HEX_CHARS[G >> 16 & 15] + HEX_CHARS[G >> 12 & 15] + HEX_CHARS[G >> 8 & 15] + HEX_CHARS[G >> 4 & 15] + HEX_CHARS[15 & G] + HEX_CHARS[q >> 28 & 15] + HEX_CHARS[q >> 24 & 15] + HEX_CHARS[q >> 20 & 15] + HEX_CHARS[q >> 16 & 15] + HEX_CHARS[q >> 12 & 15] + HEX_CHARS[q >> 8 & 15] + HEX_CHARS[q >> 4 & 15] + HEX_CHARS[15 & q] + HEX_CHARS[V >> 28 & 15] + HEX_CHARS[V >> 24 & 15] + HEX_CHARS[V >> 20 & 15] + HEX_CHARS[V >> 16 & 15] + HEX_CHARS[V >> 12 & 15] + HEX_CHARS[V >> 8 & 15] + HEX_CHARS[V >> 4 & 15] + HEX_CHARS[15 & V];
                                        return this.is224 || ($ += HEX_CHARS[W >> 28 & 15] + HEX_CHARS[W >> 24 & 15] + HEX_CHARS[W >> 20 & 15] + HEX_CHARS[W >> 16 & 15] + HEX_CHARS[W >> 12 & 15] + HEX_CHARS[W >> 8 & 15] + HEX_CHARS[W >> 4 & 15] + HEX_CHARS[15 & W]), $
                                    }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function() {
                                        this.finalize();
                                        var e = this.h0,
                                            r = this.h1,
                                            n = this.h2,
                                            H = this.h3,
                                            G = this.h4,
                                            q = this.h5,
                                            V = this.h6,
                                            W = this.h7,
                                            $ = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, H >> 24 & 255, H >> 16 & 255, H >> 8 & 255, 255 & H, G >> 24 & 255, G >> 16 & 255, G >> 8 & 255, 255 & G, q >> 24 & 255, q >> 16 & 255, q >> 8 & 255, 255 & q, V >> 24 & 255, V >> 16 & 255, V >> 8 & 255, 255 & V];
                                        return this.is224 || $.push(W >> 24 & 255, W >> 16 & 255, W >> 8 & 255, 255 & W), $
                                    }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function() {
                                        this.finalize();
                                        var e = new ArrayBuffer(this.is224 ? 28 : 32),
                                            r = new DataView(e);
                                        return r.setUint32(0, this.h0), r.setUint32(4, this.h1), r.setUint32(8, this.h2), r.setUint32(12, this.h3), r.setUint32(16, this.h4), r.setUint32(20, this.h5), r.setUint32(24, this.h6), this.is224 || r.setUint32(28, this.h7), e
                                    }, HmacSha256.prototype = new Sha256, HmacSha256.prototype.finalize = function() {
                                        if (Sha256.prototype.finalize.call(this), this.inner) {
                                            this.inner = !1;
                                            var e = this.array();
                                            Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(e), Sha256.prototype.finalize.call(this)
                                        }
                                    };
                                    var exports = createMethod();
                                    exports.sha256 = exports, exports.sha224 = createMethod(!0), exports.sha256.hmac = createHmacMethod(), exports.sha224.hmac = createHmacMethod(!0), COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, root.sha224 = exports.sha224, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                                        return exports
                                    }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                                }()
                            },
                            583: (e, r, n) => {
                                var H;
                                ! function() {
                                    "use strict";
                                    var G = "input is invalid type",
                                        q = "object" == typeof window,
                                        V = q ? window : {};
                                    V.JS_SHA3_NO_WINDOW && (q = !1);
                                    var W = !q && "object" == typeof self;
                                    !V.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? V = n.g : W && (V = self);
                                    var $ = !V.JS_SHA3_NO_COMMON_JS && e.exports,
                                        X = n.amdO,
                                        Y = !V.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                                        J = "0123456789abcdef".split(""),
                                        Q = [4, 1024, 262144, 67108864],
                                        Z = [0, 8, 16, 24],
                                        ee = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                                        te = [224, 256, 384, 512],
                                        re = [128, 256],
                                        ne = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                                        oe = {
                                            128: 168,
                                            256: 136
                                        };
                                    !V.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                                        return "[object Array]" === Object.prototype.toString.call(e)
                                    }), !Y || !V.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                                        return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                                    });
                                    for (var se = function(e, r, n) {
                                            return function(H) {
                                                return new we(e, r, e).update(H)[n]()
                                            }
                                        }, ie = function(e, r, n) {
                                            return function(H, G) {
                                                return new we(e, r, G).update(H)[n]()
                                            }
                                        }, ae = function(e, r, n) {
                                            return function(r, H, G, q) {
                                                return pe["cshake" + e].update(r, H, G, q)[n]()
                                            }
                                        }, ce = function(e, r, n) {
                                            return function(r, H, G, q) {
                                                return pe["kmac" + e].update(r, H, G, q)[n]()
                                            }
                                        }, ue = function(e, r, n, H) {
                                            for (var G = 0; G < ne.length; ++G) {
                                                var q = ne[G];
                                                e[q] = r(n, H, q)
                                            }
                                            return e
                                        }, le = function(e, r) {
                                            var n = se(e, r, "hex");
                                            return n.create = function() {
                                                return new we(e, r, e)
                                            }, n.update = function(e) {
                                                return n.create().update(e)
                                            }, ue(n, se, e, r)
                                        }, he = [{
                                            name: "keccak",
                                            padding: [1, 256, 65536, 16777216],
                                            bits: te,
                                            createMethod: le
                                        }, {
                                            name: "sha3",
                                            padding: [6, 1536, 393216, 100663296],
                                            bits: te,
                                            createMethod: le
                                        }, {
                                            name: "shake",
                                            padding: [31, 7936, 2031616, 520093696],
                                            bits: re,
                                            createMethod: function(e, r) {
                                                var n = ie(e, r, "hex");
                                                return n.create = function(n) {
                                                    return new we(e, r, n)
                                                }, n.update = function(e, r) {
                                                    return n.create(r).update(e)
                                                }, ue(n, ie, e, r)
                                            }
                                        }, {
                                            name: "cshake",
                                            padding: Q,
                                            bits: re,
                                            createMethod: function(e, r) {
                                                var n = oe[e],
                                                    H = ae(e, 0, "hex");
                                                return H.create = function(H, G, q) {
                                                    return G || q ? new we(e, r, H).bytepad([G, q], n) : pe["shake" + e].create(H)
                                                }, H.update = function(e, r, n, G) {
                                                    return H.create(r, n, G).update(e)
                                                }, ue(H, ae, e, r)
                                            }
                                        }, {
                                            name: "kmac",
                                            padding: Q,
                                            bits: re,
                                            createMethod: function(e, r) {
                                                var n = oe[e],
                                                    H = ce(e, 0, "hex");
                                                return H.create = function(H, G, q) {
                                                    return new ve(e, r, G).bytepad(["KMAC", q], n).bytepad([H], n)
                                                }, H.update = function(e, r, n, G) {
                                                    return H.create(e, n, G).update(r)
                                                }, ue(H, ce, e, r)
                                            }
                                        }], pe = {}, fe = [], de = 0; de < he.length; ++de)
                                        for (var ge = he[de], ye = ge.bits, me = 0; me < ye.length; ++me) {
                                            var be = ge.name + "_" + ye[me];
                                            if (fe.push(be), pe[be] = ge.createMethod(ye[me], ge.padding), "sha3" !== ge.name) {
                                                var Ae = ge.name + ye[me];
                                                fe.push(Ae), pe[Ae] = pe[be]
                                            }
                                        }

                                    function we(e, r, n) {
                                        this.blocks = [], this.s = [], this.padding = r, this.outputBits = n, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = n >> 5, this.extraBytes = (31 & n) >> 3;
                                        for (var H = 0; H < 50; ++H) this.s[H] = 0
                                    }

                                    function ve(e, r, n) {
                                        we.call(this, e, r, n)
                                    }
                                    we.prototype.update = function(e) {
                                        if (this.finalized) throw new Error("finalize already called");
                                        var r, n = typeof e;
                                        if ("string" !== n) {
                                            if ("object" !== n) throw new Error(G);
                                            if (null === e) throw new Error(G);
                                            if (Y && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                                            else if (!(Array.isArray(e) || Y && ArrayBuffer.isView(e))) throw new Error(G);
                                            r = !0
                                        }
                                        for (var H, q, V = this.blocks, W = this.byteCount, $ = e.length, X = this.blockCount, J = 0, Q = this.s; J < $;) {
                                            if (this.reset)
                                                for (this.reset = !1, V[0] = this.block, H = 1; H < X + 1; ++H) V[H] = 0;
                                            if (r)
                                                for (H = this.start; J < $ && H < W; ++J) V[H >> 2] |= e[J] << Z[3 & H++];
                                            else
                                                for (H = this.start; J < $ && H < W; ++J)(q = e.charCodeAt(J)) < 128 ? V[H >> 2] |= q << Z[3 & H++] : q < 2048 ? (V[H >> 2] |= (192 | q >> 6) << Z[3 & H++], V[H >> 2] |= (128 | 63 & q) << Z[3 & H++]) : q < 55296 || q >= 57344 ? (V[H >> 2] |= (224 | q >> 12) << Z[3 & H++], V[H >> 2] |= (128 | q >> 6 & 63) << Z[3 & H++], V[H >> 2] |= (128 | 63 & q) << Z[3 & H++]) : (q = 65536 + ((1023 & q) << 10 | 1023 & e.charCodeAt(++J)), V[H >> 2] |= (240 | q >> 18) << Z[3 & H++], V[H >> 2] |= (128 | q >> 12 & 63) << Z[3 & H++], V[H >> 2] |= (128 | q >> 6 & 63) << Z[3 & H++], V[H >> 2] |= (128 | 63 & q) << Z[3 & H++]);
                                            if (this.lastByteIndex = H, H >= W) {
                                                for (this.start = H - W, this.block = V[X], H = 0; H < X; ++H) Q[H] ^= V[H];
                                                xe(Q), this.reset = !0
                                            } else this.start = H
                                        }
                                        return this
                                    }, we.prototype.encode = function(e, r) {
                                        var n = 255 & e,
                                            H = 1,
                                            G = [n];
                                        for (n = 255 & (e >>= 8); n > 0;) G.unshift(n), n = 255 & (e >>= 8), ++H;
                                        return r ? G.push(H) : G.unshift(H), this.update(G), G.length
                                    }, we.prototype.encodeString = function(e) {
                                        var r, n = typeof e;
                                        if ("string" !== n) {
                                            if ("object" !== n) throw new Error(G);
                                            if (null === e) throw new Error(G);
                                            if (Y && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                                            else if (!(Array.isArray(e) || Y && ArrayBuffer.isView(e))) throw new Error(G);
                                            r = !0
                                        }
                                        var H = 0,
                                            q = e.length;
                                        if (r) H = q;
                                        else
                                            for (var V = 0; V < e.length; ++V) {
                                                var W = e.charCodeAt(V);
                                                W < 128 ? H += 1 : W < 2048 ? H += 2 : W < 55296 || W >= 57344 ? H += 3 : (W = 65536 + ((1023 & W) << 10 | 1023 & e.charCodeAt(++V)), H += 4)
                                            }
                                        return H += this.encode(8 * H), this.update(e), H
                                    }, we.prototype.bytepad = function(e, r) {
                                        for (var n = this.encode(r), H = 0; H < e.length; ++H) n += this.encodeString(e[H]);
                                        var G = r - n % r,
                                            q = [];
                                        return q.length = G, this.update(q), this
                                    }, we.prototype.finalize = function() {
                                        if (!this.finalized) {
                                            this.finalized = !0;
                                            var e = this.blocks,
                                                r = this.lastByteIndex,
                                                n = this.blockCount,
                                                H = this.s;
                                            if (e[r >> 2] |= this.padding[3 & r], this.lastByteIndex === this.byteCount)
                                                for (e[0] = e[n], r = 1; r < n + 1; ++r) e[r] = 0;
                                            for (e[n - 1] |= 2147483648, r = 0; r < n; ++r) H[r] ^= e[r];
                                            xe(H)
                                        }
                                    }, we.prototype.toString = we.prototype.hex = function() {
                                        this.finalize();
                                        for (var e, r = this.blockCount, n = this.s, H = this.outputBlocks, G = this.extraBytes, q = 0, V = 0, W = ""; V < H;) {
                                            for (q = 0; q < r && V < H; ++q, ++V) e = n[q], W += J[e >> 4 & 15] + J[15 & e] + J[e >> 12 & 15] + J[e >> 8 & 15] + J[e >> 20 & 15] + J[e >> 16 & 15] + J[e >> 28 & 15] + J[e >> 24 & 15];
                                            V % r == 0 && (xe(n), q = 0)
                                        }
                                        return G && (e = n[q], W += J[e >> 4 & 15] + J[15 & e], G > 1 && (W += J[e >> 12 & 15] + J[e >> 8 & 15]), G > 2 && (W += J[e >> 20 & 15] + J[e >> 16 & 15])), W
                                    }, we.prototype.arrayBuffer = function() {
                                        this.finalize();
                                        var e, r = this.blockCount,
                                            n = this.s,
                                            H = this.outputBlocks,
                                            G = this.extraBytes,
                                            q = 0,
                                            V = 0,
                                            W = this.outputBits >> 3;
                                        e = G ? new ArrayBuffer(H + 1 << 2) : new ArrayBuffer(W);
                                        for (var $ = new Uint32Array(e); V < H;) {
                                            for (q = 0; q < r && V < H; ++q, ++V) $[V] = n[q];
                                            V % r == 0 && xe(n)
                                        }
                                        return G && ($[q] = n[q], e = e.slice(0, W)), e
                                    }, we.prototype.buffer = we.prototype.arrayBuffer, we.prototype.digest = we.prototype.array = function() {
                                        this.finalize();
                                        for (var e, r, n = this.blockCount, H = this.s, G = this.outputBlocks, q = this.extraBytes, V = 0, W = 0, $ = []; W < G;) {
                                            for (V = 0; V < n && W < G; ++V, ++W) e = W << 2, r = H[V], $[e] = 255 & r, $[e + 1] = r >> 8 & 255, $[e + 2] = r >> 16 & 255, $[e + 3] = r >> 24 & 255;
                                            W % n == 0 && xe(H)
                                        }
                                        return q && (e = W << 2, r = H[V], $[e] = 255 & r, q > 1 && ($[e + 1] = r >> 8 & 255), q > 2 && ($[e + 2] = r >> 16 & 255)), $
                                    }, ve.prototype = new we, ve.prototype.finalize = function() {
                                        return this.encode(this.outputBits, !0), we.prototype.finalize.call(this)
                                    };
                                    var xe = function(e) {
                                        var r, n, H, G, q, V, W, $, X, Y, J, Q, Z, te, re, ne, oe, se, ie, ae, ce, ue, le, he, pe, fe, de, ge, ye, me, be, Ae, we, ve, xe, Se, Ee, Te, _e, Be, Ue, ke, Ie, Ce, Re, Oe, De, Ne, Pe, Le, Fe, ze, je, Me, He, Ge, Ke, qe, Ve, We, $e, Xe, Ye;
                                        for (H = 0; H < 48; H += 2) G = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], q = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], V = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], W = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], $ = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], X = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], Y = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], J = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], r = (Q = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (V << 1 | W >>> 31), n = (Z = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (W << 1 | V >>> 31), e[0] ^= r, e[1] ^= n, e[10] ^= r, e[11] ^= n, e[20] ^= r, e[21] ^= n, e[30] ^= r, e[31] ^= n, e[40] ^= r, e[41] ^= n, r = G ^ ($ << 1 | X >>> 31), n = q ^ (X << 1 | $ >>> 31), e[2] ^= r, e[3] ^= n, e[12] ^= r, e[13] ^= n, e[22] ^= r, e[23] ^= n, e[32] ^= r, e[33] ^= n, e[42] ^= r, e[43] ^= n, r = V ^ (Y << 1 | J >>> 31), n = W ^ (J << 1 | Y >>> 31), e[4] ^= r, e[5] ^= n, e[14] ^= r, e[15] ^= n, e[24] ^= r, e[25] ^= n, e[34] ^= r, e[35] ^= n, e[44] ^= r, e[45] ^= n, r = $ ^ (Q << 1 | Z >>> 31), n = X ^ (Z << 1 | Q >>> 31), e[6] ^= r, e[7] ^= n, e[16] ^= r, e[17] ^= n, e[26] ^= r, e[27] ^= n, e[36] ^= r, e[37] ^= n, e[46] ^= r, e[47] ^= n, r = Y ^ (G << 1 | q >>> 31), n = J ^ (q << 1 | G >>> 31), e[8] ^= r, e[9] ^= n, e[18] ^= r, e[19] ^= n, e[28] ^= r, e[29] ^= n, e[38] ^= r, e[39] ^= n, e[48] ^= r, e[49] ^= n, te = e[0], re = e[1], Oe = e[11] << 4 | e[10] >>> 28, De = e[10] << 4 | e[11] >>> 28, ge = e[20] << 3 | e[21] >>> 29, ye = e[21] << 3 | e[20] >>> 29, We = e[31] << 9 | e[30] >>> 23, $e = e[30] << 9 | e[31] >>> 23, ke = e[40] << 18 | e[41] >>> 14, Ie = e[41] << 18 | e[40] >>> 14, ve = e[2] << 1 | e[3] >>> 31, xe = e[3] << 1 | e[2] >>> 31, ne = e[13] << 12 | e[12] >>> 20, oe = e[12] << 12 | e[13] >>> 20, Ne = e[22] << 10 | e[23] >>> 22, Pe = e[23] << 10 | e[22] >>> 22, me = e[33] << 13 | e[32] >>> 19, be = e[32] << 13 | e[33] >>> 19, Xe = e[42] << 2 | e[43] >>> 30, Ye = e[43] << 2 | e[42] >>> 30, Me = e[5] << 30 | e[4] >>> 2, He = e[4] << 30 | e[5] >>> 2, Se = e[14] << 6 | e[15] >>> 26, Ee = e[15] << 6 | e[14] >>> 26, se = e[25] << 11 | e[24] >>> 21, ie = e[24] << 11 | e[25] >>> 21, Le = e[34] << 15 | e[35] >>> 17, Fe = e[35] << 15 | e[34] >>> 17, Ae = e[45] << 29 | e[44] >>> 3, we = e[44] << 29 | e[45] >>> 3, he = e[6] << 28 | e[7] >>> 4, pe = e[7] << 28 | e[6] >>> 4, Ge = e[17] << 23 | e[16] >>> 9, Ke = e[16] << 23 | e[17] >>> 9, Te = e[26] << 25 | e[27] >>> 7, _e = e[27] << 25 | e[26] >>> 7, ae = e[36] << 21 | e[37] >>> 11, ce = e[37] << 21 | e[36] >>> 11, ze = e[47] << 24 | e[46] >>> 8, je = e[46] << 24 | e[47] >>> 8, Ce = e[8] << 27 | e[9] >>> 5, Re = e[9] << 27 | e[8] >>> 5, fe = e[18] << 20 | e[19] >>> 12, de = e[19] << 20 | e[18] >>> 12, qe = e[29] << 7 | e[28] >>> 25, Ve = e[28] << 7 | e[29] >>> 25, Be = e[38] << 8 | e[39] >>> 24, Ue = e[39] << 8 | e[38] >>> 24, ue = e[48] << 14 | e[49] >>> 18, le = e[49] << 14 | e[48] >>> 18, e[0] = te ^ ~ne & se, e[1] = re ^ ~oe & ie, e[10] = he ^ ~fe & ge, e[11] = pe ^ ~de & ye, e[20] = ve ^ ~Se & Te, e[21] = xe ^ ~Ee & _e, e[30] = Ce ^ ~Oe & Ne, e[31] = Re ^ ~De & Pe, e[40] = Me ^ ~Ge & qe, e[41] = He ^ ~Ke & Ve, e[2] = ne ^ ~se & ae, e[3] = oe ^ ~ie & ce, e[12] = fe ^ ~ge & me, e[13] = de ^ ~ye & be, e[22] = Se ^ ~Te & Be, e[23] = Ee ^ ~_e & Ue, e[32] = Oe ^ ~Ne & Le, e[33] = De ^ ~Pe & Fe, e[42] = Ge ^ ~qe & We, e[43] = Ke ^ ~Ve & $e, e[4] = se ^ ~ae & ue, e[5] = ie ^ ~ce & le, e[14] = ge ^ ~me & Ae, e[15] = ye ^ ~be & we, e[24] = Te ^ ~Be & ke, e[25] = _e ^ ~Ue & Ie, e[34] = Ne ^ ~Le & ze, e[35] = Pe ^ ~Fe & je, e[44] = qe ^ ~We & Xe, e[45] = Ve ^ ~$e & Ye, e[6] = ae ^ ~ue & te, e[7] = ce ^ ~le & re, e[16] = me ^ ~Ae & he, e[17] = be ^ ~we & pe, e[26] = Be ^ ~ke & ve, e[27] = Ue ^ ~Ie & xe, e[36] = Le ^ ~ze & Ce, e[37] = Fe ^ ~je & Re, e[46] = We ^ ~Xe & Me, e[47] = $e ^ ~Ye & He, e[8] = ue ^ ~te & ne, e[9] = le ^ ~re & oe, e[18] = Ae ^ ~he & fe, e[19] = we ^ ~pe & de, e[28] = ke ^ ~ve & Se, e[29] = Ie ^ ~xe & Ee, e[38] = ze ^ ~Ce & Oe, e[39] = je ^ ~Re & De, e[48] = Xe ^ ~Me & Ge, e[49] = Ye ^ ~He & Ke, e[0] ^= ee[H], e[1] ^= ee[H + 1]
                                    };
                                    if ($) e.exports = pe;
                                    else {
                                        for (de = 0; de < fe.length; ++de) V[fe[de]] = pe[fe[de]];
                                        X && (void 0 === (H = function() {
                                            return pe
                                        }.call(r, n, r, e)) || (e.exports = H))
                                    }
                                }()
                            },
                            9757: (e, r, n) => {
                                var H;
                                ! function() {
                                    "use strict";
                                    var r = "input is invalid type",
                                        G = "object" == typeof window,
                                        q = G ? window : {};
                                    q.JS_SHA512_NO_WINDOW && (G = !1);
                                    var V = !G && "object" == typeof self;
                                    !q.JS_SHA512_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? q = n.g : V && (q = self);
                                    var W = !q.JS_SHA512_NO_COMMON_JS && e.exports,
                                        $ = n.amdO,
                                        X = !q.JS_SHA512_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                                        Y = "0123456789abcdef".split(""),
                                        J = [-2147483648, 8388608, 32768, 128],
                                        Q = [24, 16, 8, 0],
                                        Z = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                                        ee = ["hex", "array", "digest", "arrayBuffer"],
                                        te = [];
                                    !q.JS_SHA512_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                                        return "[object Array]" === Object.prototype.toString.call(e)
                                    }), !X || !q.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                                        return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                                    });
                                    var re = function(e, r) {
                                            return function(n) {
                                                return new ie(r, !0).update(n)[e]()
                                            }
                                        },
                                        ne = function(e) {
                                            var r = re("hex", e);
                                            r.create = function() {
                                                return new ie(e)
                                            }, r.update = function(e) {
                                                return r.create().update(e)
                                            };
                                            for (var n = 0; n < ee.length; ++n) {
                                                var H = ee[n];
                                                r[H] = re(H, e)
                                            }
                                            return r
                                        },
                                        oe = function(e, r) {
                                            return function(n, H) {
                                                return new ae(n, r, !0).update(H)[e]()
                                            }
                                        },
                                        se = function(e) {
                                            var r = oe("hex", e);
                                            r.create = function(r) {
                                                return new ae(r, e)
                                            }, r.update = function(e, n) {
                                                return r.create(e).update(n)
                                            };
                                            for (var n = 0; n < ee.length; ++n) {
                                                var H = ee[n];
                                                r[H] = oe(H, e)
                                            }
                                            return r
                                        };

                                    function ie(e, r) {
                                        r ? (te[0] = te[1] = te[2] = te[3] = te[4] = te[5] = te[6] = te[7] = te[8] = te[9] = te[10] = te[11] = te[12] = te[13] = te[14] = te[15] = te[16] = te[17] = te[18] = te[19] = te[20] = te[21] = te[22] = te[23] = te[24] = te[25] = te[26] = te[27] = te[28] = te[29] = te[30] = te[31] = te[32] = 0, this.blocks = te) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 384 == e ? (this.h0h = 3418070365, this.h0l = 3238371032, this.h1h = 1654270250, this.h1l = 914150663, this.h2h = 2438529370, this.h2l = 812702999, this.h3h = 355462360, this.h3l = 4144912697, this.h4h = 1731405415, this.h4l = 4290775857, this.h5h = 2394180231, this.h5l = 1750603025, this.h6h = 3675008525, this.h6l = 1694076839, this.h7h = 1203062813, this.h7l = 3204075428) : 256 == e ? (this.h0h = 573645204, this.h0l = 4230739756, this.h1h = 2673172387, this.h1l = 3360449730, this.h2h = 596883563, this.h2l = 1867755857, this.h3h = 2520282905, this.h3l = 1497426621, this.h4h = 2519219938, this.h4l = 2827943907, this.h5h = 3193839141, this.h5l = 1401305490, this.h6h = 721525244, this.h6l = 746961066, this.h7h = 246885852, this.h7l = 2177182882) : 224 == e ? (this.h0h = 2352822216, this.h0l = 424955298, this.h1h = 1944164710, this.h1l = 2312950998, this.h2h = 502970286, this.h2l = 855612546, this.h3h = 1738396948, this.h3l = 1479516111, this.h4h = 258812777, this.h4l = 2077511080, this.h5h = 2011393907, this.h5l = 79989058, this.h6h = 1067287976, this.h6l = 1780299464, this.h7h = 286451373, this.h7l = 2446758561) : (this.h0h = 1779033703, this.h0l = 4089235720, this.h1h = 3144134277, this.h1l = 2227873595, this.h2h = 1013904242, this.h2l = 4271175723, this.h3h = 2773480762, this.h3l = 1595750129, this.h4h = 1359893119, this.h4l = 2917565137, this.h5h = 2600822924, this.h5l = 725511199, this.h6h = 528734635, this.h6l = 4215389547, this.h7h = 1541459225, this.h7l = 327033209), this.bits = e, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1
                                    }

                                    function ae(e, n, H) {
                                        var G, q = typeof e;
                                        if ("string" !== q) {
                                            if ("object" !== q) throw new Error(r);
                                            if (null === e) throw new Error(r);
                                            if (X && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                                            else if (!(Array.isArray(e) || X && ArrayBuffer.isView(e))) throw new Error(r);
                                            G = !0
                                        }
                                        var V = e.length;
                                        if (!G) {
                                            for (var W, $ = [], Y = (V = e.length, 0), J = 0; J < V; ++J)(W = e.charCodeAt(J)) < 128 ? $[Y++] = W : W < 2048 ? ($[Y++] = 192 | W >> 6, $[Y++] = 128 | 63 & W) : W < 55296 || W >= 57344 ? ($[Y++] = 224 | W >> 12, $[Y++] = 128 | W >> 6 & 63, $[Y++] = 128 | 63 & W) : (W = 65536 + ((1023 & W) << 10 | 1023 & e.charCodeAt(++J)), $[Y++] = 240 | W >> 18, $[Y++] = 128 | W >> 12 & 63, $[Y++] = 128 | W >> 6 & 63, $[Y++] = 128 | 63 & W);
                                            e = $
                                        }
                                        e.length > 128 && (e = new ie(n, !0).update(e).array());
                                        var Q = [],
                                            Z = [];
                                        for (J = 0; J < 128; ++J) {
                                            var ee = e[J] || 0;
                                            Q[J] = 92 ^ ee, Z[J] = 54 ^ ee
                                        }
                                        ie.call(this, n, H), this.update(Z), this.oKeyPad = Q, this.inner = !0, this.sharedMemory = H
                                    }
                                    ie.prototype.update = function(e) {
                                        if (this.finalized) throw new Error("finalize already called");
                                        var n, H = typeof e;
                                        if ("string" !== H) {
                                            if ("object" !== H) throw new Error(r);
                                            if (null === e) throw new Error(r);
                                            if (X && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                                            else if (!(Array.isArray(e) || X && ArrayBuffer.isView(e))) throw new Error(r);
                                            n = !0
                                        }
                                        for (var G, q, V = 0, W = e.length, $ = this.blocks; V < W;) {
                                            if (this.hashed && (this.hashed = !1, $[0] = this.block, $[1] = $[2] = $[3] = $[4] = $[5] = $[6] = $[7] = $[8] = $[9] = $[10] = $[11] = $[12] = $[13] = $[14] = $[15] = $[16] = $[17] = $[18] = $[19] = $[20] = $[21] = $[22] = $[23] = $[24] = $[25] = $[26] = $[27] = $[28] = $[29] = $[30] = $[31] = $[32] = 0), n)
                                                for (q = this.start; V < W && q < 128; ++V) $[q >> 2] |= e[V] << Q[3 & q++];
                                            else
                                                for (q = this.start; V < W && q < 128; ++V)(G = e.charCodeAt(V)) < 128 ? $[q >> 2] |= G << Q[3 & q++] : G < 2048 ? ($[q >> 2] |= (192 | G >> 6) << Q[3 & q++], $[q >> 2] |= (128 | 63 & G) << Q[3 & q++]) : G < 55296 || G >= 57344 ? ($[q >> 2] |= (224 | G >> 12) << Q[3 & q++], $[q >> 2] |= (128 | G >> 6 & 63) << Q[3 & q++], $[q >> 2] |= (128 | 63 & G) << Q[3 & q++]) : (G = 65536 + ((1023 & G) << 10 | 1023 & e.charCodeAt(++V)), $[q >> 2] |= (240 | G >> 18) << Q[3 & q++], $[q >> 2] |= (128 | G >> 12 & 63) << Q[3 & q++], $[q >> 2] |= (128 | G >> 6 & 63) << Q[3 & q++], $[q >> 2] |= (128 | 63 & G) << Q[3 & q++]);
                                            this.lastByteIndex = q, this.bytes += q - this.start, q >= 128 ? (this.block = $[32], this.start = q - 128, this.hash(), this.hashed = !0) : this.start = q
                                        }
                                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                                    }, ie.prototype.finalize = function() {
                                        if (!this.finalized) {
                                            this.finalized = !0;
                                            var e = this.blocks,
                                                r = this.lastByteIndex;
                                            e[32] = this.block, e[r >> 2] |= J[3 & r], this.block = e[32], r >= 112 && (this.hashed || this.hash(), e[0] = this.block, e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = e[16] = e[17] = e[18] = e[19] = e[20] = e[21] = e[22] = e[23] = e[24] = e[25] = e[26] = e[27] = e[28] = e[29] = e[30] = e[31] = e[32] = 0), e[30] = this.hBytes << 3 | this.bytes >>> 29, e[31] = this.bytes << 3, this.hash()
                                        }
                                    }, ie.prototype.hash = function() {
                                        var e, r, n, H, G, q, V, W, $, X, Y, J, Q, ee, te, re, ne, oe, se, ie, ae, ce, ue, le, he, pe = this.h0h,
                                            fe = this.h0l,
                                            de = this.h1h,
                                            ge = this.h1l,
                                            ye = this.h2h,
                                            me = this.h2l,
                                            be = this.h3h,
                                            Ae = this.h3l,
                                            we = this.h4h,
                                            ve = this.h4l,
                                            xe = this.h5h,
                                            Se = this.h5l,
                                            Ee = this.h6h,
                                            Te = this.h6l,
                                            _e = this.h7h,
                                            Be = this.h7l,
                                            Ue = this.blocks;
                                        for (e = 32; e < 160; e += 2) r = ((ie = Ue[e - 30]) >>> 1 | (ae = Ue[e - 29]) << 31) ^ (ie >>> 8 | ae << 24) ^ ie >>> 7, n = (ae >>> 1 | ie << 31) ^ (ae >>> 8 | ie << 24) ^ (ae >>> 7 | ie << 25), H = ((ie = Ue[e - 4]) >>> 19 | (ae = Ue[e - 3]) << 13) ^ (ae >>> 29 | ie << 3) ^ ie >>> 6, G = (ae >>> 19 | ie << 13) ^ (ie >>> 29 | ae << 3) ^ (ae >>> 6 | ie << 26), ie = Ue[e - 32], ae = Ue[e - 31], $ = ((ce = Ue[e - 14]) >>> 16) + (ie >>> 16) + (r >>> 16) + (H >>> 16) + ((W = (65535 & ce) + (65535 & ie) + (65535 & r) + (65535 & H) + ((V = ((ue = Ue[e - 13]) >>> 16) + (ae >>> 16) + (n >>> 16) + (G >>> 16) + ((q = (65535 & ue) + (65535 & ae) + (65535 & n) + (65535 & G)) >>> 16)) >>> 16)) >>> 16), Ue[e] = $ << 16 | 65535 & W, Ue[e + 1] = V << 16 | 65535 & q;
                                        var ke = pe,
                                            Ie = fe,
                                            Ce = de,
                                            Re = ge,
                                            Oe = ye,
                                            De = me,
                                            Ne = be,
                                            Pe = Ae,
                                            Le = we,
                                            Fe = ve,
                                            ze = xe,
                                            je = Se,
                                            Me = Ee,
                                            He = Te,
                                            Ge = _e,
                                            Ke = Be;
                                        for (re = Ce & Oe, ne = Re & De, e = 0; e < 160; e += 8) r = (ke >>> 28 | Ie << 4) ^ (Ie >>> 2 | ke << 30) ^ (Ie >>> 7 | ke << 25), n = (Ie >>> 28 | ke << 4) ^ (ke >>> 2 | Ie << 30) ^ (ke >>> 7 | Ie << 25), H = (Le >>> 14 | Fe << 18) ^ (Le >>> 18 | Fe << 14) ^ (Fe >>> 9 | Le << 23), G = (Fe >>> 14 | Le << 18) ^ (Fe >>> 18 | Le << 14) ^ (Le >>> 9 | Fe << 23), oe = (X = ke & Ce) ^ ke & Oe ^ re, se = (Y = Ie & Re) ^ Ie & De ^ ne, le = Le & ze ^ ~Le & Me, he = Fe & je ^ ~Fe & He, ie = Ue[e], ae = Ue[e + 1], ie = ($ = ((ce = Z[e]) >>> 16) + (ie >>> 16) + (le >>> 16) + (H >>> 16) + (Ge >>> 16) + ((W = (65535 & ce) + (65535 & ie) + (65535 & le) + (65535 & H) + (65535 & Ge) + ((V = ((ue = Z[e + 1]) >>> 16) + (ae >>> 16) + (he >>> 16) + (G >>> 16) + (Ke >>> 16) + ((q = (65535 & ue) + (65535 & ae) + (65535 & he) + (65535 & G) + (65535 & Ke)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, ae = V << 16 | 65535 & q, ce = ($ = (oe >>> 16) + (r >>> 16) + ((W = (65535 & oe) + (65535 & r) + ((V = (se >>> 16) + (n >>> 16) + ((q = (65535 & se) + (65535 & n)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, ue = V << 16 | 65535 & q, Ge = ($ = (Ne >>> 16) + (ie >>> 16) + ((W = (65535 & Ne) + (65535 & ie) + ((V = (Pe >>> 16) + (ae >>> 16) + ((q = (65535 & Pe) + (65535 & ae)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, Ke = V << 16 | 65535 & q, r = ((Ne = ($ = (ce >>> 16) + (ie >>> 16) + ((W = (65535 & ce) + (65535 & ie) + ((V = (ue >>> 16) + (ae >>> 16) + ((q = (65535 & ue) + (65535 & ae)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W) >>> 28 | (Pe = V << 16 | 65535 & q) << 4) ^ (Pe >>> 2 | Ne << 30) ^ (Pe >>> 7 | Ne << 25), n = (Pe >>> 28 | Ne << 4) ^ (Ne >>> 2 | Pe << 30) ^ (Ne >>> 7 | Pe << 25), H = (Ge >>> 14 | Ke << 18) ^ (Ge >>> 18 | Ke << 14) ^ (Ke >>> 9 | Ge << 23), G = (Ke >>> 14 | Ge << 18) ^ (Ke >>> 18 | Ge << 14) ^ (Ge >>> 9 | Ke << 23), oe = (J = Ne & ke) ^ Ne & Ce ^ X, se = (Q = Pe & Ie) ^ Pe & Re ^ Y, le = Ge & Le ^ ~Ge & ze, he = Ke & Fe ^ ~Ke & je, ie = Ue[e + 2], ae = Ue[e + 3], ie = ($ = ((ce = Z[e + 2]) >>> 16) + (ie >>> 16) + (le >>> 16) + (H >>> 16) + (Me >>> 16) + ((W = (65535 & ce) + (65535 & ie) + (65535 & le) + (65535 & H) + (65535 & Me) + ((V = ((ue = Z[e + 3]) >>> 16) + (ae >>> 16) + (he >>> 16) + (G >>> 16) + (He >>> 16) + ((q = (65535 & ue) + (65535 & ae) + (65535 & he) + (65535 & G) + (65535 & He)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, ae = V << 16 | 65535 & q, ce = ($ = (oe >>> 16) + (r >>> 16) + ((W = (65535 & oe) + (65535 & r) + ((V = (se >>> 16) + (n >>> 16) + ((q = (65535 & se) + (65535 & n)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, ue = V << 16 | 65535 & q, Me = ($ = (Oe >>> 16) + (ie >>> 16) + ((W = (65535 & Oe) + (65535 & ie) + ((V = (De >>> 16) + (ae >>> 16) + ((q = (65535 & De) + (65535 & ae)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, He = V << 16 | 65535 & q, r = ((Oe = ($ = (ce >>> 16) + (ie >>> 16) + ((W = (65535 & ce) + (65535 & ie) + ((V = (ue >>> 16) + (ae >>> 16) + ((q = (65535 & ue) + (65535 & ae)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W) >>> 28 | (De = V << 16 | 65535 & q) << 4) ^ (De >>> 2 | Oe << 30) ^ (De >>> 7 | Oe << 25), n = (De >>> 28 | Oe << 4) ^ (Oe >>> 2 | De << 30) ^ (Oe >>> 7 | De << 25), H = (Me >>> 14 | He << 18) ^ (Me >>> 18 | He << 14) ^ (He >>> 9 | Me << 23), G = (He >>> 14 | Me << 18) ^ (He >>> 18 | Me << 14) ^ (Me >>> 9 | He << 23), oe = (ee = Oe & Ne) ^ Oe & ke ^ J, se = (te = De & Pe) ^ De & Ie ^ Q, le = Me & Ge ^ ~Me & Le, he = He & Ke ^ ~He & Fe, ie = Ue[e + 4], ae = Ue[e + 5], ie = ($ = ((ce = Z[e + 4]) >>> 16) + (ie >>> 16) + (le >>> 16) + (H >>> 16) + (ze >>> 16) + ((W = (65535 & ce) + (65535 & ie) + (65535 & le) + (65535 & H) + (65535 & ze) + ((V = ((ue = Z[e + 5]) >>> 16) + (ae >>> 16) + (he >>> 16) + (G >>> 16) + (je >>> 16) + ((q = (65535 & ue) + (65535 & ae) + (65535 & he) + (65535 & G) + (65535 & je)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, ae = V << 16 | 65535 & q, ce = ($ = (oe >>> 16) + (r >>> 16) + ((W = (65535 & oe) + (65535 & r) + ((V = (se >>> 16) + (n >>> 16) + ((q = (65535 & se) + (65535 & n)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, ue = V << 16 | 65535 & q, ze = ($ = (Ce >>> 16) + (ie >>> 16) + ((W = (65535 & Ce) + (65535 & ie) + ((V = (Re >>> 16) + (ae >>> 16) + ((q = (65535 & Re) + (65535 & ae)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, je = V << 16 | 65535 & q, r = ((Ce = ($ = (ce >>> 16) + (ie >>> 16) + ((W = (65535 & ce) + (65535 & ie) + ((V = (ue >>> 16) + (ae >>> 16) + ((q = (65535 & ue) + (65535 & ae)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W) >>> 28 | (Re = V << 16 | 65535 & q) << 4) ^ (Re >>> 2 | Ce << 30) ^ (Re >>> 7 | Ce << 25), n = (Re >>> 28 | Ce << 4) ^ (Ce >>> 2 | Re << 30) ^ (Ce >>> 7 | Re << 25), H = (ze >>> 14 | je << 18) ^ (ze >>> 18 | je << 14) ^ (je >>> 9 | ze << 23), G = (je >>> 14 | ze << 18) ^ (je >>> 18 | ze << 14) ^ (ze >>> 9 | je << 23), oe = (re = Ce & Oe) ^ Ce & Ne ^ ee, se = (ne = Re & De) ^ Re & Pe ^ te, le = ze & Me ^ ~ze & Ge, he = je & He ^ ~je & Ke, ie = Ue[e + 6], ae = Ue[e + 7], ie = ($ = ((ce = Z[e + 6]) >>> 16) + (ie >>> 16) + (le >>> 16) + (H >>> 16) + (Le >>> 16) + ((W = (65535 & ce) + (65535 & ie) + (65535 & le) + (65535 & H) + (65535 & Le) + ((V = ((ue = Z[e + 7]) >>> 16) + (ae >>> 16) + (he >>> 16) + (G >>> 16) + (Fe >>> 16) + ((q = (65535 & ue) + (65535 & ae) + (65535 & he) + (65535 & G) + (65535 & Fe)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, ae = V << 16 | 65535 & q, ce = ($ = (oe >>> 16) + (r >>> 16) + ((W = (65535 & oe) + (65535 & r) + ((V = (se >>> 16) + (n >>> 16) + ((q = (65535 & se) + (65535 & n)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, ue = V << 16 | 65535 & q, Le = ($ = (ke >>> 16) + (ie >>> 16) + ((W = (65535 & ke) + (65535 & ie) + ((V = (Ie >>> 16) + (ae >>> 16) + ((q = (65535 & Ie) + (65535 & ae)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, Fe = V << 16 | 65535 & q, ke = ($ = (ce >>> 16) + (ie >>> 16) + ((W = (65535 & ce) + (65535 & ie) + ((V = (ue >>> 16) + (ae >>> 16) + ((q = (65535 & ue) + (65535 & ae)) >>> 16)) >>> 16)) >>> 16)) << 16 | 65535 & W, Ie = V << 16 | 65535 & q;
                                        $ = (pe >>> 16) + (ke >>> 16) + ((W = (65535 & pe) + (65535 & ke) + ((V = (fe >>> 16) + (Ie >>> 16) + ((q = (65535 & fe) + (65535 & Ie)) >>> 16)) >>> 16)) >>> 16), this.h0h = $ << 16 | 65535 & W, this.h0l = V << 16 | 65535 & q, $ = (de >>> 16) + (Ce >>> 16) + ((W = (65535 & de) + (65535 & Ce) + ((V = (ge >>> 16) + (Re >>> 16) + ((q = (65535 & ge) + (65535 & Re)) >>> 16)) >>> 16)) >>> 16), this.h1h = $ << 16 | 65535 & W, this.h1l = V << 16 | 65535 & q, $ = (ye >>> 16) + (Oe >>> 16) + ((W = (65535 & ye) + (65535 & Oe) + ((V = (me >>> 16) + (De >>> 16) + ((q = (65535 & me) + (65535 & De)) >>> 16)) >>> 16)) >>> 16), this.h2h = $ << 16 | 65535 & W, this.h2l = V << 16 | 65535 & q, $ = (be >>> 16) + (Ne >>> 16) + ((W = (65535 & be) + (65535 & Ne) + ((V = (Ae >>> 16) + (Pe >>> 16) + ((q = (65535 & Ae) + (65535 & Pe)) >>> 16)) >>> 16)) >>> 16), this.h3h = $ << 16 | 65535 & W, this.h3l = V << 16 | 65535 & q, $ = (we >>> 16) + (Le >>> 16) + ((W = (65535 & we) + (65535 & Le) + ((V = (ve >>> 16) + (Fe >>> 16) + ((q = (65535 & ve) + (65535 & Fe)) >>> 16)) >>> 16)) >>> 16), this.h4h = $ << 16 | 65535 & W, this.h4l = V << 16 | 65535 & q, $ = (xe >>> 16) + (ze >>> 16) + ((W = (65535 & xe) + (65535 & ze) + ((V = (Se >>> 16) + (je >>> 16) + ((q = (65535 & Se) + (65535 & je)) >>> 16)) >>> 16)) >>> 16), this.h5h = $ << 16 | 65535 & W, this.h5l = V << 16 | 65535 & q, $ = (Ee >>> 16) + (Me >>> 16) + ((W = (65535 & Ee) + (65535 & Me) + ((V = (Te >>> 16) + (He >>> 16) + ((q = (65535 & Te) + (65535 & He)) >>> 16)) >>> 16)) >>> 16), this.h6h = $ << 16 | 65535 & W, this.h6l = V << 16 | 65535 & q, $ = (_e >>> 16) + (Ge >>> 16) + ((W = (65535 & _e) + (65535 & Ge) + ((V = (Be >>> 16) + (Ke >>> 16) + ((q = (65535 & Be) + (65535 & Ke)) >>> 16)) >>> 16)) >>> 16), this.h7h = $ << 16 | 65535 & W, this.h7l = V << 16 | 65535 & q
                                    }, ie.prototype.hex = function() {
                                        this.finalize();
                                        var e = this.h0h,
                                            r = this.h0l,
                                            n = this.h1h,
                                            H = this.h1l,
                                            G = this.h2h,
                                            q = this.h2l,
                                            V = this.h3h,
                                            W = this.h3l,
                                            $ = this.h4h,
                                            X = this.h4l,
                                            J = this.h5h,
                                            Q = this.h5l,
                                            Z = this.h6h,
                                            ee = this.h6l,
                                            te = this.h7h,
                                            re = this.h7l,
                                            ne = this.bits,
                                            oe = Y[e >> 28 & 15] + Y[e >> 24 & 15] + Y[e >> 20 & 15] + Y[e >> 16 & 15] + Y[e >> 12 & 15] + Y[e >> 8 & 15] + Y[e >> 4 & 15] + Y[15 & e] + Y[r >> 28 & 15] + Y[r >> 24 & 15] + Y[r >> 20 & 15] + Y[r >> 16 & 15] + Y[r >> 12 & 15] + Y[r >> 8 & 15] + Y[r >> 4 & 15] + Y[15 & r] + Y[n >> 28 & 15] + Y[n >> 24 & 15] + Y[n >> 20 & 15] + Y[n >> 16 & 15] + Y[n >> 12 & 15] + Y[n >> 8 & 15] + Y[n >> 4 & 15] + Y[15 & n] + Y[H >> 28 & 15] + Y[H >> 24 & 15] + Y[H >> 20 & 15] + Y[H >> 16 & 15] + Y[H >> 12 & 15] + Y[H >> 8 & 15] + Y[H >> 4 & 15] + Y[15 & H] + Y[G >> 28 & 15] + Y[G >> 24 & 15] + Y[G >> 20 & 15] + Y[G >> 16 & 15] + Y[G >> 12 & 15] + Y[G >> 8 & 15] + Y[G >> 4 & 15] + Y[15 & G] + Y[q >> 28 & 15] + Y[q >> 24 & 15] + Y[q >> 20 & 15] + Y[q >> 16 & 15] + Y[q >> 12 & 15] + Y[q >> 8 & 15] + Y[q >> 4 & 15] + Y[15 & q] + Y[V >> 28 & 15] + Y[V >> 24 & 15] + Y[V >> 20 & 15] + Y[V >> 16 & 15] + Y[V >> 12 & 15] + Y[V >> 8 & 15] + Y[V >> 4 & 15] + Y[15 & V];
                                        return ne >= 256 && (oe += Y[W >> 28 & 15] + Y[W >> 24 & 15] + Y[W >> 20 & 15] + Y[W >> 16 & 15] + Y[W >> 12 & 15] + Y[W >> 8 & 15] + Y[W >> 4 & 15] + Y[15 & W]), ne >= 384 && (oe += Y[$ >> 28 & 15] + Y[$ >> 24 & 15] + Y[$ >> 20 & 15] + Y[$ >> 16 & 15] + Y[$ >> 12 & 15] + Y[$ >> 8 & 15] + Y[$ >> 4 & 15] + Y[15 & $] + Y[X >> 28 & 15] + Y[X >> 24 & 15] + Y[X >> 20 & 15] + Y[X >> 16 & 15] + Y[X >> 12 & 15] + Y[X >> 8 & 15] + Y[X >> 4 & 15] + Y[15 & X] + Y[J >> 28 & 15] + Y[J >> 24 & 15] + Y[J >> 20 & 15] + Y[J >> 16 & 15] + Y[J >> 12 & 15] + Y[J >> 8 & 15] + Y[J >> 4 & 15] + Y[15 & J] + Y[Q >> 28 & 15] + Y[Q >> 24 & 15] + Y[Q >> 20 & 15] + Y[Q >> 16 & 15] + Y[Q >> 12 & 15] + Y[Q >> 8 & 15] + Y[Q >> 4 & 15] + Y[15 & Q]), 512 == ne && (oe += Y[Z >> 28 & 15] + Y[Z >> 24 & 15] + Y[Z >> 20 & 15] + Y[Z >> 16 & 15] + Y[Z >> 12 & 15] + Y[Z >> 8 & 15] + Y[Z >> 4 & 15] + Y[15 & Z] + Y[ee >> 28 & 15] + Y[ee >> 24 & 15] + Y[ee >> 20 & 15] + Y[ee >> 16 & 15] + Y[ee >> 12 & 15] + Y[ee >> 8 & 15] + Y[ee >> 4 & 15] + Y[15 & ee] + Y[te >> 28 & 15] + Y[te >> 24 & 15] + Y[te >> 20 & 15] + Y[te >> 16 & 15] + Y[te >> 12 & 15] + Y[te >> 8 & 15] + Y[te >> 4 & 15] + Y[15 & te] + Y[re >> 28 & 15] + Y[re >> 24 & 15] + Y[re >> 20 & 15] + Y[re >> 16 & 15] + Y[re >> 12 & 15] + Y[re >> 8 & 15] + Y[re >> 4 & 15] + Y[15 & re]), oe
                                    }, ie.prototype.toString = ie.prototype.hex, ie.prototype.digest = function() {
                                        this.finalize();
                                        var e = this.h0h,
                                            r = this.h0l,
                                            n = this.h1h,
                                            H = this.h1l,
                                            G = this.h2h,
                                            q = this.h2l,
                                            V = this.h3h,
                                            W = this.h3l,
                                            $ = this.h4h,
                                            X = this.h4l,
                                            Y = this.h5h,
                                            J = this.h5l,
                                            Q = this.h6h,
                                            Z = this.h6l,
                                            ee = this.h7h,
                                            te = this.h7l,
                                            re = this.bits,
                                            ne = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, H >> 24 & 255, H >> 16 & 255, H >> 8 & 255, 255 & H, G >> 24 & 255, G >> 16 & 255, G >> 8 & 255, 255 & G, q >> 24 & 255, q >> 16 & 255, q >> 8 & 255, 255 & q, V >> 24 & 255, V >> 16 & 255, V >> 8 & 255, 255 & V];
                                        return re >= 256 && ne.push(W >> 24 & 255, W >> 16 & 255, W >> 8 & 255, 255 & W), re >= 384 && ne.push($ >> 24 & 255, $ >> 16 & 255, $ >> 8 & 255, 255 & $, X >> 24 & 255, X >> 16 & 255, X >> 8 & 255, 255 & X, Y >> 24 & 255, Y >> 16 & 255, Y >> 8 & 255, 255 & Y, J >> 24 & 255, J >> 16 & 255, J >> 8 & 255, 255 & J), 512 == re && ne.push(Q >> 24 & 255, Q >> 16 & 255, Q >> 8 & 255, 255 & Q, Z >> 24 & 255, Z >> 16 & 255, Z >> 8 & 255, 255 & Z, ee >> 24 & 255, ee >> 16 & 255, ee >> 8 & 255, 255 & ee, te >> 24 & 255, te >> 16 & 255, te >> 8 & 255, 255 & te), ne
                                    }, ie.prototype.array = ie.prototype.digest, ie.prototype.arrayBuffer = function() {
                                        this.finalize();
                                        var e = this.bits,
                                            r = new ArrayBuffer(e / 8),
                                            n = new DataView(r);
                                        return n.setUint32(0, this.h0h), n.setUint32(4, this.h0l), n.setUint32(8, this.h1h), n.setUint32(12, this.h1l), n.setUint32(16, this.h2h), n.setUint32(20, this.h2l), n.setUint32(24, this.h3h), e >= 256 && n.setUint32(28, this.h3l), e >= 384 && (n.setUint32(32, this.h4h), n.setUint32(36, this.h4l), n.setUint32(40, this.h5h), n.setUint32(44, this.h5l)), 512 == e && (n.setUint32(48, this.h6h), n.setUint32(52, this.h6l), n.setUint32(56, this.h7h), n.setUint32(60, this.h7l)), r
                                    }, ie.prototype.clone = function() {
                                        var e = new ie(this.bits, !1);
                                        return this.copyTo(e), e
                                    }, ie.prototype.copyTo = function(e) {
                                        var r = 0,
                                            n = ["h0h", "h0l", "h1h", "h1l", "h2h", "h2l", "h3h", "h3l", "h4h", "h4l", "h5h", "h5l", "h6h", "h6l", "h7h", "h7l", "start", "bytes", "hBytes", "finalized", "hashed", "lastByteIndex"];
                                        for (r = 0; r < n.length; ++r) e[n[r]] = this[n[r]];
                                        for (r = 0; r < this.blocks.length; ++r) e.blocks[r] = this.blocks[r]
                                    }, ae.prototype = new ie, ae.prototype.finalize = function() {
                                        if (ie.prototype.finalize.call(this), this.inner) {
                                            this.inner = !1;
                                            var e = this.array();
                                            ie.call(this, this.bits, this.sharedMemory), this.update(this.oKeyPad), this.update(e), ie.prototype.finalize.call(this)
                                        }
                                    }, ae.prototype.clone = function() {
                                        var e = new ae([], this.bits, !1);
                                        this.copyTo(e), e.inner = this.inner;
                                        for (var r = 0; r < this.oKeyPad.length; ++r) e.oKeyPad[r] = this.oKeyPad[r];
                                        return e
                                    };
                                    var ce = ne(512);
                                    ce.sha512 = ce, ce.sha384 = ne(384), ce.sha512_256 = ne(256), ce.sha512_224 = ne(224), ce.sha512.hmac = se(512), ce.sha384.hmac = se(384), ce.sha512_256.hmac = se(256), ce.sha512_224.hmac = se(224), W ? e.exports = ce : (q.sha512 = ce.sha512, q.sha384 = ce.sha384, q.sha512_256 = ce.sha512_256, q.sha512_224 = ce.sha512_224, $ && (void 0 === (H = function() {
                                        return ce
                                    }.call(ce, n, ce, e)) || (e.exports = H)))
                                }()
                            },
                            4360: (e, r, n) => {
                                var H = n(592).stringify,
                                    G = n(9385);
                                e.exports = function(e) {
                                    return {
                                        parse: G(e),
                                        stringify: H
                                    }
                                }, e.exports.parse = G(), e.exports.stringify = H
                            },
                            9385: (e, r, n) => {
                                var H = null;
                                const G = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,
                                    q = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
                                e.exports = function(e) {
                                    "use strict";
                                    var r = {
                                        strict: !1,
                                        storeAsString: !1,
                                        alwaysParseAsBig: !1,
                                        useNativeBigInt: !1,
                                        protoAction: "error",
                                        constructorAction: "error"
                                    };
                                    if (null != e) {
                                        if (!0 === e.strict && (r.strict = !0), !0 === e.storeAsString && (r.storeAsString = !0), r.alwaysParseAsBig = !0 === e.alwaysParseAsBig && e.alwaysParseAsBig, r.useNativeBigInt = !0 === e.useNativeBigInt && e.useNativeBigInt, void 0 !== e.constructorAction) {
                                            if ("error" !== e.constructorAction && "ignore" !== e.constructorAction && "preserve" !== e.constructorAction) throw new Error('Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ' + e.constructorAction);
                                            r.constructorAction = e.constructorAction
                                        }
                                        if (void 0 !== e.protoAction) {
                                            if ("error" !== e.protoAction && "ignore" !== e.protoAction && "preserve" !== e.protoAction) throw new Error('Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ' + e.protoAction);
                                            r.protoAction = e.protoAction
                                        }
                                    }
                                    var V, W, $, X, Y = {
                                            '"': '"',
                                            "\\": "\\",
                                            "/": "/",
                                            b: "\b",
                                            f: "\f",
                                            n: "\n",
                                            r: "\r",
                                            t: "\t"
                                        },
                                        J = function(e) {
                                            throw {
                                                name: "SyntaxError",
                                                message: e,
                                                at: V,
                                                text: $
                                            }
                                        },
                                        Q = function(e) {
                                            return e && e !== W && J("Expected '" + e + "' instead of '" + W + "'"), W = $.charAt(V), V += 1, W
                                        },
                                        Z = function() {
                                            var e, G = "";
                                            for ("-" === W && (G = "-", Q("-")); W >= "0" && W <= "9";) G += W, Q();
                                            if ("." === W)
                                                for (G += "."; Q() && W >= "0" && W <= "9";) G += W;
                                            if ("e" === W || "E" === W)
                                                for (G += W, Q(), "-" !== W && "+" !== W || (G += W, Q()); W >= "0" && W <= "9";) G += W, Q();
                                            if (e = +G, isFinite(e)) return null == H && (H = n(5117)), G.length > 15 ? r.storeAsString ? G : r.useNativeBigInt ? BigInt(G) : new H(G) : r.alwaysParseAsBig ? r.useNativeBigInt ? BigInt(e) : new H(e) : e;
                                            J("Bad number")
                                        },
                                        ee = function() {
                                            var e, r, n, H = "";
                                            if ('"' === W)
                                                for (var G = V; Q();) {
                                                    if ('"' === W) return V - 1 > G && (H += $.substring(G, V - 1)), Q(), H;
                                                    if ("\\" === W) {
                                                        if (V - 1 > G && (H += $.substring(G, V - 1)), Q(), "u" === W) {
                                                            for (n = 0, r = 0; r < 4 && (e = parseInt(Q(), 16), isFinite(e)); r += 1) n = 16 * n + e;
                                                            H += String.fromCharCode(n)
                                                        } else {
                                                            if ("string" != typeof Y[W]) break;
                                                            H += Y[W]
                                                        }
                                                        G = V
                                                    }
                                                }
                                            J("Bad string")
                                        },
                                        te = function() {
                                            for (; W && W <= " ";) Q()
                                        };
                                    return X = function() {
                                            switch (te(), W) {
                                                case "{":
                                                    return function() {
                                                        var e, n = Object.create(null);
                                                        if ("{" === W) {
                                                            if (Q("{"), te(), "}" === W) return Q("}"), n;
                                                            for (; W;) {
                                                                if (e = ee(), te(), Q(":"), !0 === r.strict && Object.hasOwnProperty.call(n, e) && J('Duplicate key "' + e + '"'), !0 === G.test(e) ? "error" === r.protoAction ? J("Object contains forbidden prototype property") : "ignore" === r.protoAction ? X() : n[e] = X() : !0 === q.test(e) ? "error" === r.constructorAction ? J("Object contains forbidden constructor property") : "ignore" === r.constructorAction ? X() : n[e] = X() : n[e] = X(), te(), "}" === W) return Q("}"), n;
                                                                Q(","), te()
                                                            }
                                                        }
                                                        J("Bad object")
                                                    }();
                                                case "[":
                                                    return function() {
                                                        var e = [];
                                                        if ("[" === W) {
                                                            if (Q("["), te(), "]" === W) return Q("]"), e;
                                                            for (; W;) {
                                                                if (e.push(X()), te(), "]" === W) return Q("]"), e;
                                                                Q(","), te()
                                                            }
                                                        }
                                                        J("Bad array")
                                                    }();
                                                case '"':
                                                    return ee();
                                                case "-":
                                                    return Z();
                                                default:
                                                    return W >= "0" && W <= "9" ? Z() : function() {
                                                        switch (W) {
                                                            case "t":
                                                                return Q("t"), Q("r"), Q("u"), Q("e"), !0;
                                                            case "f":
                                                                return Q("f"), Q("a"), Q("l"), Q("s"), Q("e"), !1;
                                                            case "n":
                                                                return Q("n"), Q("u"), Q("l"), Q("l"), null
                                                        }
                                                        J("Unexpected '" + W + "'")
                                                    }()
                                            }
                                        },
                                        function(e, r) {
                                            var n;
                                            return $ = e + "", V = 0, W = " ", n = X(), te(), W && J("Syntax error"), "function" == typeof r ? function e(n, H) {
                                                var G, q = n[H];
                                                return q && "object" == typeof q && Object.keys(q).forEach((function(r) {
                                                    void 0 !== (G = e(q, r)) ? q[r] = G : delete q[r]
                                                })), r.call(n, H, q)
                                            }({
                                                "": n
                                            }, "") : n
                                        }
                                }
                            },
                            592: (e, r, n) => {
                                var H = n(5117),
                                    G = e.exports;
                                ! function() {
                                    "use strict";
                                    var e, r, n, q = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                                        V = {
                                            "\b": "\\b",
                                            "\t": "\\t",
                                            "\n": "\\n",
                                            "\f": "\\f",
                                            "\r": "\\r",
                                            '"': '\\"',
                                            "\\": "\\\\"
                                        };

                                    function W(e) {
                                        return q.lastIndex = 0, q.test(e) ? '"' + e.replace(q, (function(e) {
                                            var r = V[e];
                                            return "string" == typeof r ? r : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                                        })) + '"' : '"' + e + '"'
                                    }

                                    function $(G, q) {
                                        var V, X, Y, J, Q, Z = e,
                                            ee = q[G],
                                            te = null != ee && (ee instanceof H || H.isBigNumber(ee));
                                        switch (ee && "object" == typeof ee && "function" == typeof ee.toJSON && (ee = ee.toJSON(G)), "function" == typeof n && (ee = n.call(q, G, ee)), typeof ee) {
                                            case "string":
                                                return te ? ee : W(ee);
                                            case "number":
                                                return isFinite(ee) ? String(ee) : "null";
                                            case "boolean":
                                            case "null":
                                            case "bigint":
                                                return String(ee);
                                            case "object":
                                                if (!ee) return "null";
                                                if (e += r, Q = [], "[object Array]" === Object.prototype.toString.apply(ee)) {
                                                    for (J = ee.length, V = 0; V < J; V += 1) Q[V] = $(V, ee) || "null";
                                                    return Y = 0 === Q.length ? "[]" : e ? "[\n" + e + Q.join(",\n" + e) + "\n" + Z + "]" : "[" + Q.join(",") + "]", e = Z, Y
                                                }
                                                if (n && "object" == typeof n)
                                                    for (J = n.length, V = 0; V < J; V += 1) "string" == typeof n[V] && (Y = $(X = n[V], ee)) && Q.push(W(X) + (e ? ": " : ":") + Y);
                                                else Object.keys(ee).forEach((function(r) {
                                                    var n = $(r, ee);
                                                    n && Q.push(W(r) + (e ? ": " : ":") + n)
                                                }));
                                                return Y = 0 === Q.length ? "{}" : e ? "{\n" + e + Q.join(",\n" + e) + "\n" + Z + "}" : "{" + Q.join(",") + "}", e = Z, Y
                                        }
                                    }
                                    "function" != typeof G.stringify && (G.stringify = function(H, G, q) {
                                        var V;
                                        if (e = "", r = "", "number" == typeof q)
                                            for (V = 0; V < q; V += 1) r += " ";
                                        else "string" == typeof q && (r = q);
                                        if (n = G, G && "function" != typeof G && ("object" != typeof G || "number" != typeof G.length)) throw new Error("JSON.stringify");
                                        return $("", {
                                            "": H
                                        })
                                    })
                                }()
                            },
                            3126: (e, r, n) => {
                                var H = "function" == typeof Map && Map.prototype,
                                    G = Object.getOwnPropertyDescriptor && H ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
                                    q = H && G && "function" == typeof G.get ? G.get : null,
                                    V = H && Map.prototype.forEach,
                                    W = "function" == typeof Set && Set.prototype,
                                    $ = Object.getOwnPropertyDescriptor && W ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
                                    X = W && $ && "function" == typeof $.get ? $.get : null,
                                    Y = W && Set.prototype.forEach,
                                    J = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                                    Q = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                                    Z = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                                    ee = Boolean.prototype.valueOf,
                                    te = Object.prototype.toString,
                                    re = Function.prototype.toString,
                                    ne = String.prototype.match,
                                    oe = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                                    se = Object.getOwnPropertySymbols,
                                    ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
                                    ae = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                                    ce = Object.prototype.propertyIsEnumerable,
                                    ue = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
                                        return e.__proto__
                                    } : null),
                                    le = n(4654).custom,
                                    he = le && ye(le) ? le : null,
                                    pe = "function" == typeof Symbol && void 0 !== Symbol.toStringTag ? Symbol.toStringTag : null;

                                function fe(e, r, n) {
                                    var H = "double" === (n.quoteStyle || r) ? '"' : "'";
                                    return H + e + H
                                }

                                function de(e) {
                                    return String(e).replace(/"/g, "&quot;")
                                }

                                function ge(e) {
                                    return !("[object Array]" !== Ae(e) || pe && "object" == typeof e && pe in e)
                                }

                                function ye(e) {
                                    if (ae) return e && "object" == typeof e && e instanceof Symbol;
                                    if ("symbol" == typeof e) return !0;
                                    if (!e || "object" != typeof e || !ie) return !1;
                                    try {
                                        return ie.call(e), !0
                                    } catch (e) {}
                                    return !1
                                }
                                e.exports = function e(r, n, H, G) {
                                    var W = n || {};
                                    if (be(W, "quoteStyle") && "single" !== W.quoteStyle && "double" !== W.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                                    if (be(W, "maxStringLength") && ("number" == typeof W.maxStringLength ? W.maxStringLength < 0 && W.maxStringLength !== 1 / 0 : null !== W.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                                    var $ = !be(W, "customInspect") || W.customInspect;
                                    if ("boolean" != typeof $) throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
                                    if (be(W, "indent") && null !== W.indent && "\t" !== W.indent && !(parseInt(W.indent, 10) === W.indent && W.indent > 0)) throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
                                    if (void 0 === r) return "undefined";
                                    if (null === r) return "null";
                                    if ("boolean" == typeof r) return r ? "true" : "false";
                                    if ("string" == typeof r) return ve(r, W);
                                    if ("number" == typeof r) return 0 === r ? 1 / 0 / r > 0 ? "0" : "-0" : String(r);
                                    if ("bigint" == typeof r) return String(r) + "n";
                                    var te = void 0 === W.depth ? 5 : W.depth;
                                    if (void 0 === H && (H = 0), H >= te && te > 0 && "object" == typeof r) return ge(r) ? "[Array]" : "[Object]";
                                    var se, ce = function(e, r) {
                                        var n;
                                        if ("\t" === e.indent) n = "\t";
                                        else {
                                            if (!("number" == typeof e.indent && e.indent > 0)) return null;
                                            n = Array(e.indent + 1).join(" ")
                                        }
                                        return {
                                            base: n,
                                            prev: Array(r + 1).join(n)
                                        }
                                    }(W, H);
                                    if (void 0 === G) G = [];
                                    else if (we(G, r) >= 0) return "[Circular]";

                                    function le(r, n, q) {
                                        if (n && (G = G.slice()).push(n), q) {
                                            var V = {
                                                depth: W.depth
                                            };
                                            return be(W, "quoteStyle") && (V.quoteStyle = W.quoteStyle), e(r, V, H + 1, G)
                                        }
                                        return e(r, W, H + 1, G)
                                    }
                                    if ("function" == typeof r) {
                                        var me = function(e) {
                                                if (e.name) return e.name;
                                                var r = ne.call(re.call(e), /^function\s*([\w$]+)/);
                                                return r ? r[1] : null
                                            }(r),
                                            xe = Be(r, le);
                                        return "[Function" + (me ? ": " + me : " (anonymous)") + "]" + (xe.length > 0 ? " { " + xe.join(", ") + " }" : "")
                                    }
                                    if (ye(r)) {
                                        var Ue = ae ? String(r).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : ie.call(r);
                                        return "object" != typeof r || ae ? Ue : Se(Ue)
                                    }
                                    if ((se = r) && "object" == typeof se && ("undefined" != typeof HTMLElement && se instanceof HTMLElement || "string" == typeof se.nodeName && "function" == typeof se.getAttribute)) {
                                        for (var ke = "<" + String(r.nodeName).toLowerCase(), Ie = r.attributes || [], Ce = 0; Ce < Ie.length; Ce++) ke += " " + Ie[Ce].name + "=" + fe(de(Ie[Ce].value), "double", W);
                                        return ke += ">", r.childNodes && r.childNodes.length && (ke += "..."), ke + "</" + String(r.nodeName).toLowerCase() + ">"
                                    }
                                    if (ge(r)) {
                                        if (0 === r.length) return "[]";
                                        var Re = Be(r, le);
                                        return ce && ! function(e) {
                                            for (var r = 0; r < e.length; r++)
                                                if (we(e[r], "\n") >= 0) return !1;
                                            return !0
                                        }(Re) ? "[" + _e(Re, ce) + "]" : "[ " + Re.join(", ") + " ]"
                                    }
                                    if (function(e) {
                                            return !("[object Error]" !== Ae(e) || pe && "object" == typeof e && pe in e)
                                        }(r)) {
                                        var Oe = Be(r, le);
                                        return 0 === Oe.length ? "[" + String(r) + "]" : "{ [" + String(r) + "] " + Oe.join(", ") + " }"
                                    }
                                    if ("object" == typeof r && $) {
                                        if (he && "function" == typeof r[he]) return r[he]();
                                        if ("function" == typeof r.inspect) return r.inspect()
                                    }
                                    if (function(e) {
                                            if (!q || !e || "object" != typeof e) return !1;
                                            try {
                                                q.call(e);
                                                try {
                                                    X.call(e)
                                                } catch (e) {
                                                    return !0
                                                }
                                                return e instanceof Map
                                            } catch (e) {}
                                            return !1
                                        }(r)) {
                                        var De = [];
                                        return V.call(r, (function(e, n) {
                                            De.push(le(n, r, !0) + " => " + le(e, r))
                                        })), Te("Map", q.call(r), De, ce)
                                    }
                                    if (function(e) {
                                            if (!X || !e || "object" != typeof e) return !1;
                                            try {
                                                X.call(e);
                                                try {
                                                    q.call(e)
                                                } catch (e) {
                                                    return !0
                                                }
                                                return e instanceof Set
                                            } catch (e) {}
                                            return !1
                                        }(r)) {
                                        var Ne = [];
                                        return Y.call(r, (function(e) {
                                            Ne.push(le(e, r))
                                        })), Te("Set", X.call(r), Ne, ce)
                                    }
                                    if (function(e) {
                                            if (!J || !e || "object" != typeof e) return !1;
                                            try {
                                                J.call(e, J);
                                                try {
                                                    Q.call(e, Q)
                                                } catch (e) {
                                                    return !0
                                                }
                                                return e instanceof WeakMap
                                            } catch (e) {}
                                            return !1
                                        }(r)) return Ee("WeakMap");
                                    if (function(e) {
                                            if (!Q || !e || "object" != typeof e) return !1;
                                            try {
                                                Q.call(e, Q);
                                                try {
                                                    J.call(e, J)
                                                } catch (e) {
                                                    return !0
                                                }
                                                return e instanceof WeakSet
                                            } catch (e) {}
                                            return !1
                                        }(r)) return Ee("WeakSet");
                                    if (function(e) {
                                            if (!Z || !e || "object" != typeof e) return !1;
                                            try {
                                                return Z.call(e), !0
                                            } catch (e) {}
                                            return !1
                                        }(r)) return Ee("WeakRef");
                                    if (function(e) {
                                            return !("[object Number]" !== Ae(e) || pe && "object" == typeof e && pe in e)
                                        }(r)) return Se(le(Number(r)));
                                    if (function(e) {
                                            if (!e || "object" != typeof e || !oe) return !1;
                                            try {
                                                return oe.call(e), !0
                                            } catch (e) {}
                                            return !1
                                        }(r)) return Se(le(oe.call(r)));
                                    if (function(e) {
                                            return !("[object Boolean]" !== Ae(e) || pe && "object" == typeof e && pe in e)
                                        }(r)) return Se(ee.call(r));
                                    if (function(e) {
                                            return !("[object String]" !== Ae(e) || pe && "object" == typeof e && pe in e)
                                        }(r)) return Se(le(String(r)));
                                    if (! function(e) {
                                            return !("[object Date]" !== Ae(e) || pe && "object" == typeof e && pe in e)
                                        }(r) && ! function(e) {
                                            return !("[object RegExp]" !== Ae(e) || pe && "object" == typeof e && pe in e)
                                        }(r)) {
                                        var Pe = Be(r, le),
                                            Le = ue ? ue(r) === Object.prototype : r instanceof Object || r.constructor === Object,
                                            Fe = r instanceof Object ? "" : "null prototype",
                                            ze = !Le && pe && Object(r) === r && pe in r ? Ae(r).slice(8, -1) : Fe ? "Object" : "",
                                            je = (Le || "function" != typeof r.constructor ? "" : r.constructor.name ? r.constructor.name + " " : "") + (ze || Fe ? "[" + [].concat(ze || [], Fe || []).join(": ") + "] " : "");
                                        return 0 === Pe.length ? je + "{}" : ce ? je + "{" + _e(Pe, ce) + "}" : je + "{ " + Pe.join(", ") + " }"
                                    }
                                    return String(r)
                                };
                                var me = Object.prototype.hasOwnProperty || function(e) {
                                    return e in this
                                };

                                function be(e, r) {
                                    return me.call(e, r)
                                }

                                function Ae(e) {
                                    return te.call(e)
                                }

                                function we(e, r) {
                                    if (e.indexOf) return e.indexOf(r);
                                    for (var n = 0, H = e.length; n < H; n++)
                                        if (e[n] === r) return n;
                                    return -1
                                }

                                function ve(e, r) {
                                    if (e.length > r.maxStringLength) {
                                        var n = e.length - r.maxStringLength,
                                            H = "... " + n + " more character" + (n > 1 ? "s" : "");
                                        return ve(e.slice(0, r.maxStringLength), r) + H
                                    }
                                    return fe(e.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, xe), "single", r)
                                }

                                function xe(e) {
                                    var r = e.charCodeAt(0),
                                        n = {
                                            8: "b",
                                            9: "t",
                                            10: "n",
                                            12: "f",
                                            13: "r"
                                        } [r];
                                    return n ? "\\" + n : "\\x" + (r < 16 ? "0" : "") + r.toString(16).toUpperCase()
                                }

                                function Se(e) {
                                    return "Object(" + e + ")"
                                }

                                function Ee(e) {
                                    return e + " { ? }"
                                }

                                function Te(e, r, n, H) {
                                    return e + " (" + r + ") {" + (H ? _e(n, H) : n.join(", ")) + "}"
                                }

                                function _e(e, r) {
                                    if (0 === e.length) return "";
                                    var n = "\n" + r.prev + r.base;
                                    return n + e.join("," + n) + "\n" + r.prev
                                }

                                function Be(e, r) {
                                    var n = ge(e),
                                        H = [];
                                    if (n) {
                                        H.length = e.length;
                                        for (var G = 0; G < e.length; G++) H[G] = be(e, G) ? r(e[G], e) : ""
                                    }
                                    var q, V = "function" == typeof se ? se(e) : [];
                                    if (ae) {
                                        q = {};
                                        for (var W = 0; W < V.length; W++) q["$" + V[W]] = V[W]
                                    }
                                    for (var $ in e) be(e, $) && (n && String(Number($)) === $ && $ < e.length || ae && q["$" + $] instanceof Symbol || (/[^\w$]/.test($) ? H.push(r($, e) + ": " + r(e[$], e)) : H.push($ + ": " + r(e[$], e))));
                                    if ("function" == typeof se)
                                        for (var X = 0; X < V.length; X++) ce.call(e, V[X]) && H.push("[" + r(V[X]) + "]: " + r(e[V[X]], e));
                                    return H
                                }
                            },
                            9368: e => {
                                "use strict";

                                function r(e) {
                                    if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
                                }

                                function n(e, r) {
                                    for (var n, H = "", G = 0, q = -1, V = 0, W = 0; W <= e.length; ++W) {
                                        if (W < e.length) n = e.charCodeAt(W);
                                        else {
                                            if (47 === n) break;
                                            n = 47
                                        }
                                        if (47 === n) {
                                            if (q === W - 1 || 1 === V);
                                            else if (q !== W - 1 && 2 === V) {
                                                if (H.length < 2 || 2 !== G || 46 !== H.charCodeAt(H.length - 1) || 46 !== H.charCodeAt(H.length - 2))
                                                    if (H.length > 2) {
                                                        var $ = H.lastIndexOf("/");
                                                        if ($ !== H.length - 1) {
                                                            -1 === $ ? (H = "", G = 0) : G = (H = H.slice(0, $)).length - 1 - H.lastIndexOf("/"), q = W, V = 0;
                                                            continue
                                                        }
                                                    } else if (2 === H.length || 1 === H.length) {
                                                    H = "", G = 0, q = W, V = 0;
                                                    continue
                                                }
                                                r && (H.length > 0 ? H += "/.." : H = "..", G = 2)
                                            } else H.length > 0 ? H += "/" + e.slice(q + 1, W) : H = e.slice(q + 1, W), G = W - q - 1;
                                            q = W, V = 0
                                        } else 46 === n && -1 !== V ? ++V : V = -1
                                    }
                                    return H
                                }
                                var H = {
                                    resolve: function() {
                                        for (var e, H = "", G = !1, q = arguments.length - 1; q >= -1 && !G; q--) {
                                            var V;
                                            q >= 0 ? V = arguments[q] : (void 0 === e && (e = process.cwd()), V = e), r(V), 0 !== V.length && (H = V + "/" + H, G = 47 === V.charCodeAt(0))
                                        }
                                        return H = n(H, !G), G ? H.length > 0 ? "/" + H : "/" : H.length > 0 ? H : "."
                                    },
                                    normalize: function(e) {
                                        if (r(e), 0 === e.length) return ".";
                                        var H = 47 === e.charCodeAt(0),
                                            G = 47 === e.charCodeAt(e.length - 1);
                                        return 0 !== (e = n(e, !H)).length || H || (e = "."), e.length > 0 && G && (e += "/"), H ? "/" + e : e
                                    },
                                    isAbsolute: function(e) {
                                        return r(e), e.length > 0 && 47 === e.charCodeAt(0)
                                    },
                                    join: function() {
                                        if (0 === arguments.length) return ".";
                                        for (var e, n = 0; n < arguments.length; ++n) {
                                            var G = arguments[n];
                                            r(G), G.length > 0 && (void 0 === e ? e = G : e += "/" + G)
                                        }
                                        return void 0 === e ? "." : H.normalize(e)
                                    },
                                    relative: function(e, n) {
                                        if (r(e), r(n), e === n) return "";
                                        if ((e = H.resolve(e)) === (n = H.resolve(n))) return "";
                                        for (var G = 1; G < e.length && 47 === e.charCodeAt(G); ++G);
                                        for (var q = e.length, V = q - G, W = 1; W < n.length && 47 === n.charCodeAt(W); ++W);
                                        for (var $ = n.length - W, X = V < $ ? V : $, Y = -1, J = 0; J <= X; ++J) {
                                            if (J === X) {
                                                if ($ > X) {
                                                    if (47 === n.charCodeAt(W + J)) return n.slice(W + J + 1);
                                                    if (0 === J) return n.slice(W + J)
                                                } else V > X && (47 === e.charCodeAt(G + J) ? Y = J : 0 === J && (Y = 0));
                                                break
                                            }
                                            var Q = e.charCodeAt(G + J);
                                            if (Q !== n.charCodeAt(W + J)) break;
                                            47 === Q && (Y = J)
                                        }
                                        var Z = "";
                                        for (J = G + Y + 1; J <= q; ++J) J !== q && 47 !== e.charCodeAt(J) || (0 === Z.length ? Z += ".." : Z += "/..");
                                        return Z.length > 0 ? Z + n.slice(W + Y) : (W += Y, 47 === n.charCodeAt(W) && ++W, n.slice(W))
                                    },
                                    _makeLong: function(e) {
                                        return e
                                    },
                                    dirname: function(e) {
                                        if (r(e), 0 === e.length) return ".";
                                        for (var n = e.charCodeAt(0), H = 47 === n, G = -1, q = !0, V = e.length - 1; V >= 1; --V)
                                            if (47 === (n = e.charCodeAt(V))) {
                                                if (!q) {
                                                    G = V;
                                                    break
                                                }
                                            } else q = !1;
                                        return -1 === G ? H ? "/" : "." : H && 1 === G ? "//" : e.slice(0, G)
                                    },
                                    basename: function(e, n) {
                                        if (void 0 !== n && "string" != typeof n) throw new TypeError('"ext" argument must be a string');
                                        r(e);
                                        var H, G = 0,
                                            q = -1,
                                            V = !0;
                                        if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                                            if (n.length === e.length && n === e) return "";
                                            var W = n.length - 1,
                                                $ = -1;
                                            for (H = e.length - 1; H >= 0; --H) {
                                                var X = e.charCodeAt(H);
                                                if (47 === X) {
                                                    if (!V) {
                                                        G = H + 1;
                                                        break
                                                    }
                                                } else - 1 === $ && (V = !1, $ = H + 1), W >= 0 && (X === n.charCodeAt(W) ? -1 == --W && (q = H) : (W = -1, q = $))
                                            }
                                            return G === q ? q = $ : -1 === q && (q = e.length), e.slice(G, q)
                                        }
                                        for (H = e.length - 1; H >= 0; --H)
                                            if (47 === e.charCodeAt(H)) {
                                                if (!V) {
                                                    G = H + 1;
                                                    break
                                                }
                                            } else - 1 === q && (V = !1, q = H + 1);
                                        return -1 === q ? "" : e.slice(G, q)
                                    },
                                    extname: function(e) {
                                        r(e);
                                        for (var n = -1, H = 0, G = -1, q = !0, V = 0, W = e.length - 1; W >= 0; --W) {
                                            var $ = e.charCodeAt(W);
                                            if (47 !== $) - 1 === G && (q = !1, G = W + 1), 46 === $ ? -1 === n ? n = W : 1 !== V && (V = 1) : -1 !== n && (V = -1);
                                            else if (!q) {
                                                H = W + 1;
                                                break
                                            }
                                        }
                                        return -1 === n || -1 === G || 0 === V || 1 === V && n === G - 1 && n === H + 1 ? "" : e.slice(n, G)
                                    },
                                    format: function(e) {
                                        if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                                        return function(e, r) {
                                            var n = r.dir || r.root,
                                                H = r.base || (r.name || "") + (r.ext || "");
                                            return n ? n === r.root ? n + H : n + "/" + H : H
                                        }(0, e)
                                    },
                                    parse: function(e) {
                                        r(e);
                                        var n = {
                                            root: "",
                                            dir: "",
                                            base: "",
                                            ext: "",
                                            name: ""
                                        };
                                        if (0 === e.length) return n;
                                        var H, G = e.charCodeAt(0),
                                            q = 47 === G;
                                        q ? (n.root = "/", H = 1) : H = 0;
                                        for (var V = -1, W = 0, $ = -1, X = !0, Y = e.length - 1, J = 0; Y >= H; --Y)
                                            if (47 !== (G = e.charCodeAt(Y))) - 1 === $ && (X = !1, $ = Y + 1), 46 === G ? -1 === V ? V = Y : 1 !== J && (J = 1) : -1 !== V && (J = -1);
                                            else if (!X) {
                                            W = Y + 1;
                                            break
                                        }
                                        return -1 === V || -1 === $ || 0 === J || 1 === J && V === $ - 1 && V === W + 1 ? -1 !== $ && (n.base = n.name = 0 === W && q ? e.slice(1, $) : e.slice(W, $)) : (0 === W && q ? (n.name = e.slice(1, V), n.base = e.slice(1, $)) : (n.name = e.slice(W, V), n.base = e.slice(W, $)), n.ext = e.slice(V, $)), W > 0 ? n.dir = e.slice(0, W - 1) : q && (n.dir = "/"), n
                                    },
                                    sep: "/",
                                    delimiter: ":",
                                    win32: null,
                                    posix: null
                                };
                                H.posix = H, e.exports = H
                            },
                            9370: (e, r) => {
                                "use strict";
                                var n = Object.prototype.hasOwnProperty;

                                function H(e) {
                                    try {
                                        return decodeURIComponent(e.replace(/\+/g, " "))
                                    } catch (e) {
                                        return null
                                    }
                                }

                                function G(e) {
                                    try {
                                        return encodeURIComponent(e)
                                    } catch (e) {
                                        return null
                                    }
                                }
                                r.stringify = function(e, r) {
                                    r = r || "";
                                    var H, q, V = [];
                                    for (q in "string" != typeof r && (r = "?"), e)
                                        if (n.call(e, q)) {
                                            if ((H = e[q]) || null != H && !isNaN(H) || (H = ""), q = G(q), H = G(H), null === q || null === H) continue;
                                            V.push(q + "=" + H)
                                        } return V.length ? r + V.join("&") : ""
                                }, r.parse = function(e) {
                                    for (var r, n = /([^=?#&]+)=?([^&]*)/g, G = {}; r = n.exec(e);) {
                                        var q = H(r[1]),
                                            V = H(r[2]);
                                        null === q || null === V || q in G || (G[q] = V)
                                    }
                                    return G
                                }
                            },
                            1926: e => {
                                "use strict";
                                e.exports = function(e, r) {
                                    if (r = r.split(":")[0], !(e = +e)) return !1;
                                    switch (r) {
                                        case "http":
                                        case "ws":
                                            return 80 !== e;
                                        case "https":
                                        case "wss":
                                            return 443 !== e;
                                        case "ftp":
                                            return 21 !== e;
                                        case "gopher":
                                            return 70 !== e;
                                        case "file":
                                            return !1
                                    }
                                    return 0 !== e
                                }
                            },
                            3680: (e, r, n) => {
                                "use strict";
                                var H = n(1801),
                                    G = n(7615),
                                    q = n(3126),
                                    V = H("%TypeError%"),
                                    W = H("%WeakMap%", !0),
                                    $ = H("%Map%", !0),
                                    X = G("WeakMap.prototype.get", !0),
                                    Y = G("WeakMap.prototype.set", !0),
                                    J = G("WeakMap.prototype.has", !0),
                                    Q = G("Map.prototype.get", !0),
                                    Z = G("Map.prototype.set", !0),
                                    ee = G("Map.prototype.has", !0),
                                    te = function(e, r) {
                                        for (var n, H = e; null !== (n = H.next); H = n)
                                            if (n.key === r) return H.next = n.next, n.next = e.next, e.next = n, n
                                    };
                                e.exports = function() {
                                    var e, r, n, H = {
                                        assert: function(e) {
                                            if (!H.has(e)) throw new V("Side channel does not contain " + q(e))
                                        },
                                        get: function(H) {
                                            if (W && H && ("object" == typeof H || "function" == typeof H)) {
                                                if (e) return X(e, H)
                                            } else if ($) {
                                                if (r) return Q(r, H)
                                            } else if (n) return function(e, r) {
                                                var n = te(e, r);
                                                return n && n.value
                                            }(n, H)
                                        },
                                        has: function(H) {
                                            if (W && H && ("object" == typeof H || "function" == typeof H)) {
                                                if (e) return J(e, H)
                                            } else if ($) {
                                                if (r) return ee(r, H)
                                            } else if (n) return function(e, r) {
                                                return !!te(e, r)
                                            }(n, H);
                                            return !1
                                        },
                                        set: function(H, G) {
                                            W && H && ("object" == typeof H || "function" == typeof H) ? (e || (e = new W), Y(e, H, G)) : $ ? (r || (r = new $), Z(r, H, G)) : (n || (n = {
                                                key: {},
                                                next: null
                                            }), function(e, r, n) {
                                                var H = te(e, r);
                                                H ? H.value = n : e.next = {
                                                    key: r,
                                                    next: e.next,
                                                    value: n
                                                }
                                            }(n, H, G))
                                        }
                                    };
                                    return H
                                }
                            },
                            2858: e => {
                                "use strict";

                                function r(e, r) {
                                    (null == r || r > e.length) && (r = e.length);
                                    for (var n = 0, H = new Array(r); n < r; n++) H[n] = e[n];
                                    return H
                                }

                                function n() {
                                    this._defaults = []
                                } ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach((function(e) {
                                    n.prototype[e] = function() {
                                        for (var r = arguments.length, n = new Array(r), H = 0; H < r; H++) n[H] = arguments[H];
                                        return this._defaults.push({
                                            fn: e,
                                            args: n
                                        }), this
                                    }
                                })), n.prototype._setDefaults = function(e) {
                                    this._defaults.forEach((function(n) {
                                        var H;
                                        e[n.fn].apply(e, function(e) {
                                            if (Array.isArray(e)) return r(e)
                                        }(H = n.args) || function(e) {
                                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                                        }(H) || function(e, n) {
                                            if (e) {
                                                if ("string" == typeof e) return r(e, n);
                                                var H = Object.prototype.toString.call(e).slice(8, -1);
                                                return "Object" === H && e.constructor && (H = e.constructor.name), "Map" === H || "Set" === H ? Array.from(e) : "Arguments" === H || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H) ? r(e, n) : void 0
                                            }
                                        }(H) || function() {
                                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }())
                                    }))
                                }, e.exports = n
                            },
                            5391: (e, r, n) => {
                                "use strict";

                                function H(e) {
                                    return (H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                        return typeof e
                                    } : function(e) {
                                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                    })(e)
                                }
                                var G;
                                "undefined" != typeof window ? G = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), G = void 0) : G = self;
                                var q = n(1069),
                                    V = n(5799),
                                    W = n(3065),
                                    $ = n(4287),
                                    X = n(1960),
                                    Y = n(969),
                                    J = n(2858);

                                function Q() {}
                                e.exports = function(e, n) {
                                    return "function" == typeof n ? new r.Request("GET", e).end(n) : 1 === arguments.length ? new r.Request("GET", e) : new r.Request(e, n)
                                };
                                var Z = r = e.exports;
                                r.Request = ie, Z.getXHR = function() {
                                    if (G.XMLHttpRequest && (!G.location || "file:" !== G.location.protocol || !G.ActiveXObject)) return new XMLHttpRequest;
                                    try {
                                        return new ActiveXObject("Microsoft.XMLHTTP")
                                    } catch (e) {}
                                    try {
                                        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                                    } catch (e) {}
                                    try {
                                        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                                    } catch (e) {}
                                    try {
                                        return new ActiveXObject("Msxml2.XMLHTTP")
                                    } catch (e) {}
                                    throw new Error("Browser-only version of superagent could not find XHR")
                                };
                                var ee = "".trim ? function(e) {
                                    return e.trim()
                                } : function(e) {
                                    return e.replace(/(^\s*|\s*$)/g, "")
                                };

                                function te(e) {
                                    if (!X(e)) return e;
                                    var r = [];
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && re(r, n, e[n]);
                                    return r.join("&")
                                }

                                function re(e, r, n) {
                                    if (void 0 !== n)
                                        if (null !== n)
                                            if (Array.isArray(n)) n.forEach((function(n) {
                                                re(e, r, n)
                                            }));
                                            else if (X(n))
                                        for (var H in n) Object.prototype.hasOwnProperty.call(n, H) && re(e, "".concat(r, "[").concat(H, "]"), n[H]);
                                    else e.push(encodeURI(r) + "=" + encodeURIComponent(n));
                                    else e.push(encodeURI(r))
                                }

                                function ne(e) {
                                    for (var r, n, H = {}, G = e.split("&"), q = 0, V = G.length; q < V; ++q) - 1 === (n = (r = G[q]).indexOf("=")) ? H[decodeURIComponent(r)] = "" : H[decodeURIComponent(r.slice(0, n))] = decodeURIComponent(r.slice(n + 1));
                                    return H
                                }

                                function oe(e) {
                                    return /[/+]json($|[^-\w])/i.test(e)
                                }

                                function se(e) {
                                    this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
                                    var r = this.xhr.status;
                                    1223 === r && (r = 204), this._setStatusProperties(r), this.headers = function(e) {
                                        for (var r, n, H, G, q = e.split(/\r?\n/), V = {}, W = 0, $ = q.length; W < $; ++W) - 1 !== (r = (n = q[W]).indexOf(":")) && (H = n.slice(0, r).toLowerCase(), G = ee(n.slice(r + 1)), V[H] = G);
                                        return V
                                    }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
                                }

                                function ie(e, r) {
                                    var n = this;
                                    this._query = this._query || [], this.method = e, this.url = r, this.header = {}, this._header = {}, this.on("end", (function() {
                                        var e, r = null,
                                            H = null;
                                        try {
                                            H = new se(n)
                                        } catch (e) {
                                            return (r = new Error("Parser is unable to parse the response")).parse = !0, r.original = e, n.xhr ? (r.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, r.status = n.xhr.status ? n.xhr.status : null, r.statusCode = r.status) : (r.rawResponse = null, r.status = null), n.callback(r)
                                        }
                                        n.emit("response", H);
                                        try {
                                            n._isResponseOK(H) || (e = new Error(H.statusText || H.text || "Unsuccessful HTTP response"))
                                        } catch (r) {
                                            e = r
                                        }
                                        e ? (e.original = r, e.response = H, e.status = H.status, n.callback(e, H)) : n.callback(null, H)
                                    }))
                                }

                                function ae(e, r, n) {
                                    var H = Z("DELETE", e);
                                    return "function" == typeof r && (n = r, r = null), r && H.send(r), n && H.end(n), H
                                }
                                Z.serializeObject = te, Z.parseString = ne, Z.types = {
                                    html: "text/html",
                                    json: "application/json",
                                    xml: "text/xml",
                                    urlencoded: "application/x-www-form-urlencoded",
                                    form: "application/x-www-form-urlencoded",
                                    "form-data": "application/x-www-form-urlencoded"
                                }, Z.serialize = {
                                    "application/x-www-form-urlencoded": W.stringify,
                                    "application/json": V
                                }, Z.parse = {
                                    "application/x-www-form-urlencoded": ne,
                                    "application/json": JSON.parse
                                }, Y(se.prototype), se.prototype._parseBody = function(e) {
                                    var r = Z.parse[this.type];
                                    return this.req._parser ? this.req._parser(this, e) : (!r && oe(this.type) && (r = Z.parse["application/json"]), r && e && (e.length > 0 || e instanceof Object) ? r(e) : null)
                                }, se.prototype.toError = function() {
                                    var e = this.req,
                                        r = e.method,
                                        n = e.url,
                                        H = "cannot ".concat(r, " ").concat(n, " (").concat(this.status, ")"),
                                        G = new Error(H);
                                    return G.status = this.status, G.method = r, G.url = n, G
                                }, Z.Response = se, q(ie.prototype), $(ie.prototype), ie.prototype.type = function(e) {
                                    return this.set("Content-Type", Z.types[e] || e), this
                                }, ie.prototype.accept = function(e) {
                                    return this.set("Accept", Z.types[e] || e), this
                                }, ie.prototype.auth = function(e, r, n) {
                                    1 === arguments.length && (r = ""), "object" === H(r) && null !== r && (n = r, r = ""), n || (n = {
                                        type: "function" == typeof btoa ? "basic" : "auto"
                                    });
                                    var G = function(e) {
                                        if ("function" == typeof btoa) return btoa(e);
                                        throw new Error("Cannot use basic auth, btoa is not a function")
                                    };
                                    return this._auth(e, r, n, G)
                                }, ie.prototype.query = function(e) {
                                    return "string" != typeof e && (e = te(e)), e && this._query.push(e), this
                                }, ie.prototype.attach = function(e, r, n) {
                                    if (r) {
                                        if (this._data) throw new Error("superagent can't mix .send() and .attach()");
                                        this._getFormData().append(e, r, n || r.name)
                                    }
                                    return this
                                }, ie.prototype._getFormData = function() {
                                    return this._formData || (this._formData = new G.FormData), this._formData
                                }, ie.prototype.callback = function(e, r) {
                                    if (this._shouldRetry(e, r)) return this._retry();
                                    var n = this._callback;
                                    this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, r)
                                }, ie.prototype.crossDomainError = function() {
                                    var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
                                    e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
                                }, ie.prototype.agent = function() {
                                    return console.warn("This is not supported in browser version of superagent"), this
                                }, ie.prototype.ca = ie.prototype.agent, ie.prototype.buffer = ie.prototype.ca, ie.prototype.write = function() {
                                    throw new Error("Streaming is not supported in browser version of superagent")
                                }, ie.prototype.pipe = ie.prototype.write, ie.prototype._isHost = function(e) {
                                    return e && "object" === H(e) && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
                                }, ie.prototype.end = function(e) {
                                    this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || Q, this._finalizeQueryString(), this._end()
                                }, ie.prototype._setUploadTimeout = function() {
                                    var e = this;
                                    this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout((function() {
                                        e._timeoutError("Upload timeout of ", e._uploadTimeout, "ETIMEDOUT")
                                    }), this._uploadTimeout))
                                }, ie.prototype._end = function() {
                                    if (this._aborted) return this.callback(new Error("The request has been aborted even before .end() was called"));
                                    var e = this;
                                    this.xhr = Z.getXHR();
                                    var r = this.xhr,
                                        n = this._formData || this._data;
                                    this._setTimeouts(), r.onreadystatechange = function() {
                                        var n = r.readyState;
                                        if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 === n) {
                                            var H;
                                            try {
                                                H = r.status
                                            } catch (e) {
                                                H = 0
                                            }
                                            if (!H) {
                                                if (e.timedout || e._aborted) return;
                                                return e.crossDomainError()
                                            }
                                            e.emit("end")
                                        }
                                    };
                                    var H = function(r, n) {
                                        n.total > 0 && (n.percent = n.loaded / n.total * 100, 100 === n.percent && clearTimeout(e._uploadTimeoutTimer)), n.direction = r, e.emit("progress", n)
                                    };
                                    if (this.hasListeners("progress")) try {
                                        r.addEventListener("progress", H.bind(null, "download")), r.upload && r.upload.addEventListener("progress", H.bind(null, "upload"))
                                    } catch (e) {}
                                    r.upload && this._setUploadTimeout();
                                    try {
                                        this.username && this.password ? r.open(this.method, this.url, !0, this.username, this.password) : r.open(this.method, this.url, !0)
                                    } catch (e) {
                                        return this.callback(e)
                                    }
                                    if (this._withCredentials && (r.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof n && !this._isHost(n)) {
                                        var G = this._header["content-type"],
                                            q = this._serializer || Z.serialize[G ? G.split(";")[0] : ""];
                                        !q && oe(G) && (q = Z.serialize["application/json"]), q && (n = q(n))
                                    }
                                    for (var V in this.header) null !== this.header[V] && Object.prototype.hasOwnProperty.call(this.header, V) && r.setRequestHeader(V, this.header[V]);
                                    this._responseType && (r.responseType = this._responseType), this.emit("request", this), r.send(void 0 === n ? null : n)
                                }, Z.agent = function() {
                                    return new J
                                }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach((function(e) {
                                    J.prototype[e.toLowerCase()] = function(r, n) {
                                        var H = new Z.Request(e, r);
                                        return this._setDefaults(H), n && H.end(n), H
                                    }
                                })), J.prototype.del = J.prototype.delete, Z.get = function(e, r, n) {
                                    var H = Z("GET", e);
                                    return "function" == typeof r && (n = r, r = null), r && H.query(r), n && H.end(n), H
                                }, Z.head = function(e, r, n) {
                                    var H = Z("HEAD", e);
                                    return "function" == typeof r && (n = r, r = null), r && H.query(r), n && H.end(n), H
                                }, Z.options = function(e, r, n) {
                                    var H = Z("OPTIONS", e);
                                    return "function" == typeof r && (n = r, r = null), r && H.send(r), n && H.end(n), H
                                }, Z.del = ae, Z.delete = ae, Z.patch = function(e, r, n) {
                                    var H = Z("PATCH", e);
                                    return "function" == typeof r && (n = r, r = null), r && H.send(r), n && H.end(n), H
                                }, Z.post = function(e, r, n) {
                                    var H = Z("POST", e);
                                    return "function" == typeof r && (n = r, r = null), r && H.send(r), n && H.end(n), H
                                }, Z.put = function(e, r, n) {
                                    var H = Z("PUT", e);
                                    return "function" == typeof r && (n = r, r = null), r && H.send(r), n && H.end(n), H
                                }
                            },
                            1960: e => {
                                "use strict";

                                function r(e) {
                                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                        return typeof e
                                    } : function(e) {
                                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                    })(e)
                                }
                                e.exports = function(e) {
                                    return null !== e && "object" === r(e)
                                }
                            },
                            4287: (e, r, n) => {
                                "use strict";

                                function H(e) {
                                    return (H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                        return typeof e
                                    } : function(e) {
                                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                    })(e)
                                }
                                var G = n(1960);

                                function q(e) {
                                    if (e) return function(e) {
                                        for (var r in q.prototype) Object.prototype.hasOwnProperty.call(q.prototype, r) && (e[r] = q.prototype[r]);
                                        return e
                                    }(e)
                                }
                                e.exports = q, q.prototype.clearTimeout = function() {
                                    return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this
                                }, q.prototype.parse = function(e) {
                                    return this._parser = e, this
                                }, q.prototype.responseType = function(e) {
                                    return this._responseType = e, this
                                }, q.prototype.serialize = function(e) {
                                    return this._serializer = e, this
                                }, q.prototype.timeout = function(e) {
                                    if (!e || "object" !== H(e)) return this._timeout = e, this._responseTimeout = 0, this._uploadTimeout = 0, this;
                                    for (var r in e)
                                        if (Object.prototype.hasOwnProperty.call(e, r)) switch (r) {
                                            case "deadline":
                                                this._timeout = e.deadline;
                                                break;
                                            case "response":
                                                this._responseTimeout = e.response;
                                                break;
                                            case "upload":
                                                this._uploadTimeout = e.upload;
                                                break;
                                            default:
                                                console.warn("Unknown timeout option", r)
                                        }
                                    return this
                                }, q.prototype.retry = function(e, r) {
                                    return 0 !== arguments.length && !0 !== e || (e = 1), e <= 0 && (e = 0), this._maxRetries = e, this._retries = 0, this._retryCallback = r, this
                                };
                                var V = new Set(["ETIMEDOUT", "ECONNRESET", "EADDRINUSE", "ECONNREFUSED", "EPIPE", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN"]),
                                    W = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
                                q.prototype._shouldRetry = function(e, r) {
                                    if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
                                    if (this._retryCallback) try {
                                        var n = this._retryCallback(e, r);
                                        if (!0 === n) return !0;
                                        if (!1 === n) return !1
                                    } catch (e) {
                                        console.error(e)
                                    }
                                    if (r && r.status && W.has(r.status)) return !0;
                                    if (e) {
                                        if (e.code && V.has(e.code)) return !0;
                                        if (e.timeout && "ECONNABORTED" === e.code) return !0;
                                        if (e.crossDomain) return !0
                                    }
                                    return !1
                                }, q.prototype._retry = function() {
                                    return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this.timedoutError = null, this._end()
                                }, q.prototype.then = function(e, r) {
                                    var n = this;
                                    if (!this._fullfilledPromise) {
                                        var H = this;
                                        this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise((function(e, r) {
                                            H.on("abort", (function() {
                                                if (!(n._maxRetries && n._maxRetries > n._retries))
                                                    if (n.timedout && n.timedoutError) r(n.timedoutError);
                                                    else {
                                                        var e = new Error("Aborted");
                                                        e.code = "ABORTED", e.status = n.status, e.method = n.method, e.url = n.url, r(e)
                                                    }
                                            })), H.end((function(n, H) {
                                                n ? r(n) : e(H)
                                            }))
                                        }))
                                    }
                                    return this._fullfilledPromise.then(e, r)
                                }, q.prototype.catch = function(e) {
                                    return this.then(void 0, e)
                                }, q.prototype.use = function(e) {
                                    return e(this), this
                                }, q.prototype.ok = function(e) {
                                    if ("function" != typeof e) throw new Error("Callback required");
                                    return this._okCallback = e, this
                                }, q.prototype._isResponseOK = function(e) {
                                    return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300)
                                }, q.prototype.get = function(e) {
                                    return this._header[e.toLowerCase()]
                                }, q.prototype.getHeader = q.prototype.get, q.prototype.set = function(e, r) {
                                    if (G(e)) {
                                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && this.set(n, e[n]);
                                        return this
                                    }
                                    return this._header[e.toLowerCase()] = r, this.header[e] = r, this
                                }, q.prototype.unset = function(e) {
                                    return delete this._header[e.toLowerCase()], delete this.header[e], this
                                }, q.prototype.field = function(e, r) {
                                    if (null == e) throw new Error(".field(name, val) name can not be empty");
                                    if (this._data) throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
                                    if (G(e)) {
                                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && this.field(n, e[n]);
                                        return this
                                    }
                                    if (Array.isArray(r)) {
                                        for (var H in r) Object.prototype.hasOwnProperty.call(r, H) && this.field(e, r[H]);
                                        return this
                                    }
                                    if (null == r) throw new Error(".field(name, val) val can not be empty");
                                    return "boolean" == typeof r && (r = String(r)), this._getFormData().append(e, r), this
                                }, q.prototype.abort = function() {
                                    return this._aborted || (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort")), this
                                }, q.prototype._auth = function(e, r, n, H) {
                                    switch (n.type) {
                                        case "basic":
                                            this.set("Authorization", "Basic ".concat(H("".concat(e, ":").concat(r))));
                                            break;
                                        case "auto":
                                            this.username = e, this.password = r;
                                            break;
                                        case "bearer":
                                            this.set("Authorization", "Bearer ".concat(e))
                                    }
                                    return this
                                }, q.prototype.withCredentials = function(e) {
                                    return void 0 === e && (e = !0), this._withCredentials = e, this
                                }, q.prototype.redirects = function(e) {
                                    return this._maxRedirects = e, this
                                }, q.prototype.maxResponseSize = function(e) {
                                    if ("number" != typeof e) throw new TypeError("Invalid argument");
                                    return this._maxResponseSize = e, this
                                }, q.prototype.toJSON = function() {
                                    return {
                                        method: this.method,
                                        url: this.url,
                                        data: this._data,
                                        headers: this._header
                                    }
                                }, q.prototype.send = function(e) {
                                    var r = G(e),
                                        n = this._header["content-type"];
                                    if (this._formData) throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
                                    if (r && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});
                                    else if (e && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
                                    if (r && G(this._data))
                                        for (var H in e) Object.prototype.hasOwnProperty.call(e, H) && (this._data[H] = e[H]);
                                    else "string" == typeof e ? (n || this.type("form"), (n = this._header["content-type"]) && (n = n.toLowerCase().trim()), this._data = "application/x-www-form-urlencoded" === n ? this._data ? "".concat(this._data, "&").concat(e) : e : (this._data || "") + e) : this._data = e;
                                    return !r || this._isHost(e) || n || this.type("json"), this
                                }, q.prototype.sortQuery = function(e) {
                                    return this._sort = void 0 === e || e, this
                                }, q.prototype._finalizeQueryString = function() {
                                    var e = this._query.join("&");
                                    if (e && (this.url += (this.url.includes("?") ? "&" : "?") + e), this._query.length = 0, this._sort) {
                                        var r = this.url.indexOf("?");
                                        if (r >= 0) {
                                            var n = this.url.slice(r + 1).split("&");
                                            "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.slice(0, r) + "?" + n.join("&")
                                        }
                                    }
                                }, q.prototype._appendQueryString = function() {
                                    console.warn("Unsupported")
                                }, q.prototype._timeoutError = function(e, r, n) {
                                    if (!this._aborted) {
                                        var H = new Error("".concat(e + r, "ms exceeded"));
                                        H.timeout = r, H.code = "ECONNABORTED", H.errno = n, this.timedout = !0, this.timedoutError = H, this.abort(), this.callback(H)
                                    }
                                }, q.prototype._setTimeouts = function() {
                                    var e = this;
                                    this._timeout && !this._timer && (this._timer = setTimeout((function() {
                                        e._timeoutError("Timeout of ", e._timeout, "ETIME")
                                    }), this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout((function() {
                                        e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT")
                                    }), this._responseTimeout))
                                }
                            },
                            969: (e, r, n) => {
                                "use strict";
                                var H = n(3094);

                                function G(e) {
                                    if (e) return function(e) {
                                        for (var r in G.prototype) Object.prototype.hasOwnProperty.call(G.prototype, r) && (e[r] = G.prototype[r]);
                                        return e
                                    }(e)
                                }
                                e.exports = G, G.prototype.get = function(e) {
                                    return this.header[e.toLowerCase()]
                                }, G.prototype._setHeaderProperties = function(e) {
                                    var r = e["content-type"] || "";
                                    this.type = H.type(r);
                                    var n = H.params(r);
                                    for (var G in n) Object.prototype.hasOwnProperty.call(n, G) && (this[G] = n[G]);
                                    this.links = {};
                                    try {
                                        e.link && (this.links = H.parseLinks(e.link))
                                    } catch (e) {}
                                }, G.prototype._setStatusProperties = function(e) {
                                    var r = e / 100 | 0;
                                    this.statusCode = e, this.status = this.statusCode, this.statusType = r, this.info = 1 === r, this.ok = 2 === r, this.redirect = 3 === r, this.clientError = 4 === r, this.serverError = 5 === r, this.error = (4 === r || 5 === r) && this.toError(), this.created = 201 === e, this.accepted = 202 === e, this.noContent = 204 === e, this.badRequest = 400 === e, this.unauthorized = 401 === e, this.notAcceptable = 406 === e, this.forbidden = 403 === e, this.notFound = 404 === e, this.unprocessableEntity = 422 === e
                                }
                            },
                            3094: (e, r) => {
                                "use strict";

                                function n(e, r) {
                                    var n;
                                    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                        if (Array.isArray(e) || (n = function(e, r) {
                                                if (e) {
                                                    if ("string" == typeof e) return H(e, r);
                                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? H(e, r) : void 0
                                                }
                                            }(e)) || r && e && "number" == typeof e.length) {
                                            n && (e = n);
                                            var G = 0,
                                                q = function() {};
                                            return {
                                                s: q,
                                                n: function() {
                                                    return G >= e.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: e[G++]
                                                    }
                                                },
                                                e: function(e) {
                                                    throw e
                                                },
                                                f: q
                                            }
                                        }
                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var V, W = !0,
                                        $ = !1;
                                    return {
                                        s: function() {
                                            n = e[Symbol.iterator]()
                                        },
                                        n: function() {
                                            var e = n.next();
                                            return W = e.done, e
                                        },
                                        e: function(e) {
                                            $ = !0, V = e
                                        },
                                        f: function() {
                                            try {
                                                W || null == n.return || n.return()
                                            } finally {
                                                if ($) throw V
                                            }
                                        }
                                    }
                                }

                                function H(e, r) {
                                    (null == r || r > e.length) && (r = e.length);
                                    for (var n = 0, H = new Array(r); n < r; n++) H[n] = e[n];
                                    return H
                                }
                                r.type = function(e) {
                                    return e.split(/ *; */).shift()
                                }, r.params = function(e) {
                                    var r, H = {},
                                        G = n(e.split(/ *; */));
                                    try {
                                        for (G.s(); !(r = G.n()).done;) {
                                            var q = r.value.split(/ *= */),
                                                V = q.shift(),
                                                W = q.shift();
                                            V && W && (H[V] = W)
                                        }
                                    } catch (e) {
                                        G.e(e)
                                    } finally {
                                        G.f()
                                    }
                                    return H
                                }, r.parseLinks = function(e) {
                                    var r, H = {},
                                        G = n(e.split(/ *, */));
                                    try {
                                        for (G.s(); !(r = G.n()).done;) {
                                            var q = r.value.split(/ *; */),
                                                V = q[0].slice(1, -1);
                                            H[q[1].split(/ *= */)[1].slice(1, -1)] = V
                                        }
                                    } catch (e) {
                                        G.e(e)
                                    } finally {
                                        G.f()
                                    }
                                    return H
                                }, r.cleanHeader = function(e, r) {
                                    return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, r && (delete e.authorization, delete e.cookie), e
                                }
                            },
                            5335: e => {
                                "use strict";
                                var r = String.prototype.replace,
                                    n = /%20/g,
                                    H = "RFC3986";
                                e.exports = {
                                    default: H,
                                    formatters: {
                                        RFC1738: function(e) {
                                            return r.call(e, n, "+")
                                        },
                                        RFC3986: function(e) {
                                            return String(e)
                                        }
                                    },
                                    RFC1738: "RFC1738",
                                    RFC3986: H
                                }
                            },
                            3065: (e, r, n) => {
                                "use strict";
                                var H = n(4246),
                                    G = n(1688),
                                    q = n(5335);
                                e.exports = {
                                    formats: q,
                                    parse: G,
                                    stringify: H
                                }
                            },
                            1688: (e, r, n) => {
                                "use strict";
                                var H = n(4562),
                                    G = Object.prototype.hasOwnProperty,
                                    q = Array.isArray,
                                    V = {
                                        allowDots: !1,
                                        allowPrototypes: !1,
                                        allowSparse: !1,
                                        arrayLimit: 20,
                                        charset: "utf-8",
                                        charsetSentinel: !1,
                                        comma: !1,
                                        decoder: H.decode,
                                        delimiter: "&",
                                        depth: 5,
                                        ignoreQueryPrefix: !1,
                                        interpretNumericEntities: !1,
                                        parameterLimit: 1e3,
                                        parseArrays: !0,
                                        plainObjects: !1,
                                        strictNullHandling: !1
                                    },
                                    W = function(e) {
                                        return e.replace(/&#(\d+);/g, (function(e, r) {
                                            return String.fromCharCode(parseInt(r, 10))
                                        }))
                                    },
                                    $ = function(e, r) {
                                        return e && "string" == typeof e && r.comma && e.indexOf(",") > -1 ? e.split(",") : e
                                    },
                                    X = function(e, r, n, H) {
                                        if (e) {
                                            var q = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                                                V = /(\[[^[\]]*])/g,
                                                W = n.depth > 0 && /(\[[^[\]]*])/.exec(q),
                                                X = W ? q.slice(0, W.index) : q,
                                                Y = [];
                                            if (X) {
                                                if (!n.plainObjects && G.call(Object.prototype, X) && !n.allowPrototypes) return;
                                                Y.push(X)
                                            }
                                            for (var J = 0; n.depth > 0 && null !== (W = V.exec(q)) && J < n.depth;) {
                                                if (J += 1, !n.plainObjects && G.call(Object.prototype, W[1].slice(1, -1)) && !n.allowPrototypes) return;
                                                Y.push(W[1])
                                            }
                                            return W && Y.push("[" + q.slice(W.index) + "]"),
                                                function(e, r, n, H) {
                                                    for (var G = H ? r : $(r, n), q = e.length - 1; q >= 0; --q) {
                                                        var V, W = e[q];
                                                        if ("[]" === W && n.parseArrays) V = [].concat(G);
                                                        else {
                                                            V = n.plainObjects ? Object.create(null) : {};
                                                            var X = "[" === W.charAt(0) && "]" === W.charAt(W.length - 1) ? W.slice(1, -1) : W,
                                                                Y = parseInt(X, 10);
                                                            n.parseArrays || "" !== X ? !isNaN(Y) && W !== X && String(Y) === X && Y >= 0 && n.parseArrays && Y <= n.arrayLimit ? (V = [])[Y] = G : V[X] = G : V = {
                                                                0: G
                                                            }
                                                        }
                                                        G = V
                                                    }
                                                    return G
                                                }(Y, r, n, H)
                                        }
                                    };
                                e.exports = function(e, r) {
                                    var n = function(e) {
                                        if (!e) return V;
                                        if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw new TypeError("Decoder has to be a function.");
                                        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                                        var r = void 0 === e.charset ? V.charset : e.charset;
                                        return {
                                            allowDots: void 0 === e.allowDots ? V.allowDots : !!e.allowDots,
                                            allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : V.allowPrototypes,
                                            allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : V.allowSparse,
                                            arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : V.arrayLimit,
                                            charset: r,
                                            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : V.charsetSentinel,
                                            comma: "boolean" == typeof e.comma ? e.comma : V.comma,
                                            decoder: "function" == typeof e.decoder ? e.decoder : V.decoder,
                                            delimiter: "string" == typeof e.delimiter || H.isRegExp(e.delimiter) ? e.delimiter : V.delimiter,
                                            depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : V.depth,
                                            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                                            interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : V.interpretNumericEntities,
                                            parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : V.parameterLimit,
                                            parseArrays: !1 !== e.parseArrays,
                                            plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : V.plainObjects,
                                            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : V.strictNullHandling
                                        }
                                    }(r);
                                    if ("" === e || null == e) return n.plainObjects ? Object.create(null) : {};
                                    for (var Y = "string" == typeof e ? function(e, r) {
                                            var n, X = {},
                                                Y = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                                                J = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                                                Q = Y.split(r.delimiter, J),
                                                Z = -1,
                                                ee = r.charset;
                                            if (r.charsetSentinel)
                                                for (n = 0; n < Q.length; ++n) 0 === Q[n].indexOf("utf8=") && ("utf8=%E2%9C%93" === Q[n] ? ee = "utf-8" : "utf8=%26%2310003%3B" === Q[n] && (ee = "iso-8859-1"), Z = n, n = Q.length);
                                            for (n = 0; n < Q.length; ++n)
                                                if (n !== Z) {
                                                    var te, re, ne = Q[n],
                                                        oe = ne.indexOf("]="),
                                                        se = -1 === oe ? ne.indexOf("=") : oe + 1; - 1 === se ? (te = r.decoder(ne, V.decoder, ee, "key"), re = r.strictNullHandling ? null : "") : (te = r.decoder(ne.slice(0, se), V.decoder, ee, "key"), re = H.maybeMap($(ne.slice(se + 1), r), (function(e) {
                                                        return r.decoder(e, V.decoder, ee, "value")
                                                    }))), re && r.interpretNumericEntities && "iso-8859-1" === ee && (re = W(re)), ne.indexOf("[]=") > -1 && (re = q(re) ? [re] : re), G.call(X, te) ? X[te] = H.combine(X[te], re) : X[te] = re
                                                } return X
                                        }(e, n) : e, J = n.plainObjects ? Object.create(null) : {}, Q = Object.keys(Y), Z = 0; Z < Q.length; ++Z) {
                                        var ee = Q[Z],
                                            te = X(ee, Y[ee], n, "string" == typeof e);
                                        J = H.merge(J, te, n)
                                    }
                                    return !0 === n.allowSparse ? J : H.compact(J)
                                }
                            },
                            4246: (e, r, n) => {
                                "use strict";
                                var H = n(3680),
                                    G = n(4562),
                                    q = n(5335),
                                    V = Object.prototype.hasOwnProperty,
                                    W = {
                                        brackets: function(e) {
                                            return e + "[]"
                                        },
                                        comma: "comma",
                                        indices: function(e, r) {
                                            return e + "[" + r + "]"
                                        },
                                        repeat: function(e) {
                                            return e
                                        }
                                    },
                                    $ = Array.isArray,
                                    X = Array.prototype.push,
                                    Y = function(e, r) {
                                        X.apply(e, $(r) ? r : [r])
                                    },
                                    J = Date.prototype.toISOString,
                                    Q = q.default,
                                    Z = {
                                        addQueryPrefix: !1,
                                        allowDots: !1,
                                        charset: "utf-8",
                                        charsetSentinel: !1,
                                        delimiter: "&",
                                        encode: !0,
                                        encoder: G.encode,
                                        encodeValuesOnly: !1,
                                        format: Q,
                                        formatter: q.formatters[Q],
                                        indices: !1,
                                        serializeDate: function(e) {
                                            return J.call(e)
                                        },
                                        skipNulls: !1,
                                        strictNullHandling: !1
                                    },
                                    ee = function e(r, n, q, V, W, X, J, Q, ee, te, re, ne, oe, se, ie) {
                                        var ae, ce = r;
                                        if (ie.has(r)) throw new RangeError("Cyclic object value");
                                        if ("function" == typeof J ? ce = J(n, ce) : ce instanceof Date ? ce = te(ce) : "comma" === q && $(ce) && (ce = G.maybeMap(ce, (function(e) {
                                                return e instanceof Date ? te(e) : e
                                            }))), null === ce) {
                                            if (V) return X && !oe ? X(n, Z.encoder, se, "key", re) : n;
                                            ce = ""
                                        }
                                        if ("string" == typeof(ae = ce) || "number" == typeof ae || "boolean" == typeof ae || "symbol" == typeof ae || "bigint" == typeof ae || G.isBuffer(ce)) return X ? [ne(oe ? n : X(n, Z.encoder, se, "key", re)) + "=" + ne(X(ce, Z.encoder, se, "value", re))] : [ne(n) + "=" + ne(String(ce))];
                                        var ue, le = [];
                                        if (void 0 === ce) return le;
                                        if ("comma" === q && $(ce)) ue = [{
                                            value: ce.length > 0 ? ce.join(",") || null : void 0
                                        }];
                                        else if ($(J)) ue = J;
                                        else {
                                            var he = Object.keys(ce);
                                            ue = Q ? he.sort(Q) : he
                                        }
                                        for (var pe = 0; pe < ue.length; ++pe) {
                                            var fe = ue[pe],
                                                de = "object" == typeof fe && void 0 !== fe.value ? fe.value : ce[fe];
                                            if (!W || null !== de) {
                                                var ge = $(ce) ? "function" == typeof q ? q(n, fe) : n : n + (ee ? "." + fe : "[" + fe + "]");
                                                ie.set(r, !0);
                                                var ye = H();
                                                Y(le, e(de, ge, q, V, W, X, J, Q, ee, te, re, ne, oe, se, ye))
                                            }
                                        }
                                        return le
                                    };
                                e.exports = function(e, r) {
                                    var n, G = e,
                                        X = function(e) {
                                            if (!e) return Z;
                                            if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                                            var r = e.charset || Z.charset;
                                            if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                                            var n = q.default;
                                            if (void 0 !== e.format) {
                                                if (!V.call(q.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                                                n = e.format
                                            }
                                            var H = q.formatters[n],
                                                G = Z.filter;
                                            return ("function" == typeof e.filter || $(e.filter)) && (G = e.filter), {
                                                addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : Z.addQueryPrefix,
                                                allowDots: void 0 === e.allowDots ? Z.allowDots : !!e.allowDots,
                                                charset: r,
                                                charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : Z.charsetSentinel,
                                                delimiter: void 0 === e.delimiter ? Z.delimiter : e.delimiter,
                                                encode: "boolean" == typeof e.encode ? e.encode : Z.encode,
                                                encoder: "function" == typeof e.encoder ? e.encoder : Z.encoder,
                                                encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : Z.encodeValuesOnly,
                                                filter: G,
                                                format: n,
                                                formatter: H,
                                                serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : Z.serializeDate,
                                                skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : Z.skipNulls,
                                                sort: "function" == typeof e.sort ? e.sort : null,
                                                strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : Z.strictNullHandling
                                            }
                                        }(r);
                                    "function" == typeof X.filter ? G = (0, X.filter)("", G) : $(X.filter) && (n = X.filter);
                                    var J, Q = [];
                                    if ("object" != typeof G || null === G) return "";
                                    J = r && r.arrayFormat in W ? r.arrayFormat : r && "indices" in r ? r.indices ? "indices" : "repeat" : "indices";
                                    var te = W[J];
                                    n || (n = Object.keys(G)), X.sort && n.sort(X.sort);
                                    for (var re = H(), ne = 0; ne < n.length; ++ne) {
                                        var oe = n[ne];
                                        X.skipNulls && null === G[oe] || Y(Q, ee(G[oe], oe, te, X.strictNullHandling, X.skipNulls, X.encode ? X.encoder : null, X.filter, X.sort, X.allowDots, X.serializeDate, X.format, X.formatter, X.encodeValuesOnly, X.charset, re))
                                    }
                                    var se = Q.join(X.delimiter),
                                        ie = !0 === X.addQueryPrefix ? "?" : "";
                                    return X.charsetSentinel && ("iso-8859-1" === X.charset ? ie += "utf8=%26%2310003%3B&" : ie += "utf8=%E2%9C%93&"), se.length > 0 ? ie + se : ""
                                }
                            },
                            4562: (e, r, n) => {
                                "use strict";
                                var H = n(5335),
                                    G = Object.prototype.hasOwnProperty,
                                    q = Array.isArray,
                                    V = function() {
                                        for (var e = [], r = 0; r < 256; ++r) e.push("%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase());
                                        return e
                                    }(),
                                    W = function(e, r) {
                                        for (var n = r && r.plainObjects ? Object.create(null) : {}, H = 0; H < e.length; ++H) void 0 !== e[H] && (n[H] = e[H]);
                                        return n
                                    };
                                e.exports = {
                                    arrayToObject: W,
                                    assign: function(e, r) {
                                        return Object.keys(r).reduce((function(e, n) {
                                            return e[n] = r[n], e
                                        }), e)
                                    },
                                    combine: function(e, r) {
                                        return [].concat(e, r)
                                    },
                                    compact: function(e) {
                                        for (var r = [{
                                                obj: {
                                                    o: e
                                                },
                                                prop: "o"
                                            }], n = [], H = 0; H < r.length; ++H)
                                            for (var G = r[H], V = G.obj[G.prop], W = Object.keys(V), $ = 0; $ < W.length; ++$) {
                                                var X = W[$],
                                                    Y = V[X];
                                                "object" == typeof Y && null !== Y && -1 === n.indexOf(Y) && (r.push({
                                                    obj: V,
                                                    prop: X
                                                }), n.push(Y))
                                            }
                                        return function(e) {
                                            for (; e.length > 1;) {
                                                var r = e.pop(),
                                                    n = r.obj[r.prop];
                                                if (q(n)) {
                                                    for (var H = [], G = 0; G < n.length; ++G) void 0 !== n[G] && H.push(n[G]);
                                                    r.obj[r.prop] = H
                                                }
                                            }
                                        }(r), e
                                    },
                                    decode: function(e, r, n) {
                                        var H = e.replace(/\+/g, " ");
                                        if ("iso-8859-1" === n) return H.replace(/%[0-9a-f]{2}/gi, unescape);
                                        try {
                                            return decodeURIComponent(H)
                                        } catch (e) {
                                            return H
                                        }
                                    },
                                    encode: function(e, r, n, G, q) {
                                        if (0 === e.length) return e;
                                        var W = e;
                                        if ("symbol" == typeof e ? W = Symbol.prototype.toString.call(e) : "string" != typeof e && (W = String(e)), "iso-8859-1" === n) return escape(W).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                                            return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                                        }));
                                        for (var $ = "", X = 0; X < W.length; ++X) {
                                            var Y = W.charCodeAt(X);
                                            45 === Y || 46 === Y || 95 === Y || 126 === Y || Y >= 48 && Y <= 57 || Y >= 65 && Y <= 90 || Y >= 97 && Y <= 122 || q === H.RFC1738 && (40 === Y || 41 === Y) ? $ += W.charAt(X) : Y < 128 ? $ += V[Y] : Y < 2048 ? $ += V[192 | Y >> 6] + V[128 | 63 & Y] : Y < 55296 || Y >= 57344 ? $ += V[224 | Y >> 12] + V[128 | Y >> 6 & 63] + V[128 | 63 & Y] : (X += 1, Y = 65536 + ((1023 & Y) << 10 | 1023 & W.charCodeAt(X)), $ += V[240 | Y >> 18] + V[128 | Y >> 12 & 63] + V[128 | Y >> 6 & 63] + V[128 | 63 & Y])
                                        }
                                        return $
                                    },
                                    isBuffer: function(e) {
                                        return !(!e || "object" != typeof e || !(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e)))
                                    },
                                    isRegExp: function(e) {
                                        return "[object RegExp]" === Object.prototype.toString.call(e)
                                    },
                                    maybeMap: function(e, r) {
                                        if (q(e)) {
                                            for (var n = [], H = 0; H < e.length; H += 1) n.push(r(e[H]));
                                            return n
                                        }
                                        return r(e)
                                    },
                                    merge: function e(r, n, H) {
                                        if (!n) return r;
                                        if ("object" != typeof n) {
                                            if (q(r)) r.push(n);
                                            else {
                                                if (!r || "object" != typeof r) return [r, n];
                                                (H && (H.plainObjects || H.allowPrototypes) || !G.call(Object.prototype, n)) && (r[n] = !0)
                                            }
                                            return r
                                        }
                                        if (!r || "object" != typeof r) return [r].concat(n);
                                        var V = r;
                                        return q(r) && !q(n) && (V = W(r, H)), q(r) && q(n) ? (n.forEach((function(n, q) {
                                            if (G.call(r, q)) {
                                                var V = r[q];
                                                V && "object" == typeof V && n && "object" == typeof n ? r[q] = e(V, n, H) : r.push(n)
                                            } else r[q] = n
                                        })), r) : Object.keys(n).reduce((function(r, q) {
                                            var V = n[q];
                                            return G.call(r, q) ? r[q] = e(r[q], V, H) : r[q] = V, r
                                        }), V)
                                    }
                                }
                            },
                            7765: function(e, r) {
                                ! function(e) {
                                    "use strict";
                                    var r = function(e) {
                                            var r, n = new Float64Array(16);
                                            if (e)
                                                for (r = 0; r < e.length; r++) n[r] = e[r];
                                            return n
                                        },
                                        n = function() {
                                            throw new Error("no PRNG")
                                        },
                                        H = new Uint8Array(16),
                                        G = new Uint8Array(32);
                                    G[0] = 9;
                                    var q = r(),
                                        V = r([1]),
                                        W = r([56129, 1]),
                                        $ = r([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                                        X = r([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                                        Y = r([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                                        J = r([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                                        Q = r([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                                    function Z(e, r, n, H) {
                                        e[r] = n >> 24 & 255, e[r + 1] = n >> 16 & 255, e[r + 2] = n >> 8 & 255, e[r + 3] = 255 & n, e[r + 4] = H >> 24 & 255, e[r + 5] = H >> 16 & 255, e[r + 6] = H >> 8 & 255, e[r + 7] = 255 & H
                                    }

                                    function ee(e, r, n, H, G) {
                                        var q, V = 0;
                                        for (q = 0; q < G; q++) V |= e[r + q] ^ n[H + q];
                                        return (1 & V - 1 >>> 8) - 1
                                    }

                                    function te(e, r, n, H) {
                                        return ee(e, r, n, H, 16)
                                    }

                                    function re(e, r, n, H) {
                                        return ee(e, r, n, H, 32)
                                    }

                                    function ne(e, r, n, H) {
                                        ! function(e, r, n, H) {
                                            for (var G, q = 255 & H[0] | (255 & H[1]) << 8 | (255 & H[2]) << 16 | (255 & H[3]) << 24, V = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, W = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, $ = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, X = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, Y = 255 & H[4] | (255 & H[5]) << 8 | (255 & H[6]) << 16 | (255 & H[7]) << 24, J = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, Q = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, Z = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, ee = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, te = 255 & H[8] | (255 & H[9]) << 8 | (255 & H[10]) << 16 | (255 & H[11]) << 24, re = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, ne = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, oe = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, se = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, ie = 255 & H[12] | (255 & H[13]) << 8 | (255 & H[14]) << 16 | (255 & H[15]) << 24, ae = q, ce = V, ue = W, le = $, he = X, pe = Y, fe = J, de = Q, ge = Z, ye = ee, me = te, be = re, Ae = ne, we = oe, ve = se, xe = ie, Se = 0; Se < 20; Se += 2) ae ^= (G = (Ae ^= (G = (ge ^= (G = (he ^= (G = ae + Ae | 0) << 7 | G >>> 25) + ae | 0) << 9 | G >>> 23) + he | 0) << 13 | G >>> 19) + ge | 0) << 18 | G >>> 14, pe ^= (G = (ce ^= (G = (we ^= (G = (ye ^= (G = pe + ce | 0) << 7 | G >>> 25) + pe | 0) << 9 | G >>> 23) + ye | 0) << 13 | G >>> 19) + we | 0) << 18 | G >>> 14, me ^= (G = (fe ^= (G = (ue ^= (G = (ve ^= (G = me + fe | 0) << 7 | G >>> 25) + me | 0) << 9 | G >>> 23) + ve | 0) << 13 | G >>> 19) + ue | 0) << 18 | G >>> 14, xe ^= (G = (be ^= (G = (de ^= (G = (le ^= (G = xe + be | 0) << 7 | G >>> 25) + xe | 0) << 9 | G >>> 23) + le | 0) << 13 | G >>> 19) + de | 0) << 18 | G >>> 14, ae ^= (G = (le ^= (G = (ue ^= (G = (ce ^= (G = ae + le | 0) << 7 | G >>> 25) + ae | 0) << 9 | G >>> 23) + ce | 0) << 13 | G >>> 19) + ue | 0) << 18 | G >>> 14, pe ^= (G = (he ^= (G = (de ^= (G = (fe ^= (G = pe + he | 0) << 7 | G >>> 25) + pe | 0) << 9 | G >>> 23) + fe | 0) << 13 | G >>> 19) + de | 0) << 18 | G >>> 14, me ^= (G = (ye ^= (G = (ge ^= (G = (be ^= (G = me + ye | 0) << 7 | G >>> 25) + me | 0) << 9 | G >>> 23) + be | 0) << 13 | G >>> 19) + ge | 0) << 18 | G >>> 14, xe ^= (G = (ve ^= (G = (we ^= (G = (Ae ^= (G = xe + ve | 0) << 7 | G >>> 25) + xe | 0) << 9 | G >>> 23) + Ae | 0) << 13 | G >>> 19) + we | 0) << 18 | G >>> 14;
                                            ae = ae + q | 0, ce = ce + V | 0, ue = ue + W | 0, le = le + $ | 0, he = he + X | 0, pe = pe + Y | 0, fe = fe + J | 0, de = de + Q | 0, ge = ge + Z | 0, ye = ye + ee | 0, me = me + te | 0, be = be + re | 0, Ae = Ae + ne | 0, we = we + oe | 0, ve = ve + se | 0, xe = xe + ie | 0, e[0] = ae >>> 0 & 255, e[1] = ae >>> 8 & 255, e[2] = ae >>> 16 & 255, e[3] = ae >>> 24 & 255, e[4] = ce >>> 0 & 255, e[5] = ce >>> 8 & 255, e[6] = ce >>> 16 & 255, e[7] = ce >>> 24 & 255, e[8] = ue >>> 0 & 255, e[9] = ue >>> 8 & 255, e[10] = ue >>> 16 & 255, e[11] = ue >>> 24 & 255, e[12] = le >>> 0 & 255, e[13] = le >>> 8 & 255, e[14] = le >>> 16 & 255, e[15] = le >>> 24 & 255, e[16] = he >>> 0 & 255, e[17] = he >>> 8 & 255, e[18] = he >>> 16 & 255, e[19] = he >>> 24 & 255, e[20] = pe >>> 0 & 255, e[21] = pe >>> 8 & 255, e[22] = pe >>> 16 & 255, e[23] = pe >>> 24 & 255, e[24] = fe >>> 0 & 255, e[25] = fe >>> 8 & 255, e[26] = fe >>> 16 & 255, e[27] = fe >>> 24 & 255, e[28] = de >>> 0 & 255, e[29] = de >>> 8 & 255, e[30] = de >>> 16 & 255, e[31] = de >>> 24 & 255, e[32] = ge >>> 0 & 255, e[33] = ge >>> 8 & 255, e[34] = ge >>> 16 & 255, e[35] = ge >>> 24 & 255, e[36] = ye >>> 0 & 255, e[37] = ye >>> 8 & 255, e[38] = ye >>> 16 & 255, e[39] = ye >>> 24 & 255, e[40] = me >>> 0 & 255, e[41] = me >>> 8 & 255, e[42] = me >>> 16 & 255, e[43] = me >>> 24 & 255, e[44] = be >>> 0 & 255, e[45] = be >>> 8 & 255, e[46] = be >>> 16 & 255, e[47] = be >>> 24 & 255, e[48] = Ae >>> 0 & 255, e[49] = Ae >>> 8 & 255, e[50] = Ae >>> 16 & 255, e[51] = Ae >>> 24 & 255, e[52] = we >>> 0 & 255, e[53] = we >>> 8 & 255, e[54] = we >>> 16 & 255, e[55] = we >>> 24 & 255, e[56] = ve >>> 0 & 255, e[57] = ve >>> 8 & 255, e[58] = ve >>> 16 & 255, e[59] = ve >>> 24 & 255, e[60] = xe >>> 0 & 255, e[61] = xe >>> 8 & 255, e[62] = xe >>> 16 & 255, e[63] = xe >>> 24 & 255
                                        }(e, r, n, H)
                                    }

                                    function oe(e, r, n, H) {
                                        ! function(e, r, n, H) {
                                            for (var G, q = 255 & H[0] | (255 & H[1]) << 8 | (255 & H[2]) << 16 | (255 & H[3]) << 24, V = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, W = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, $ = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, X = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, Y = 255 & H[4] | (255 & H[5]) << 8 | (255 & H[6]) << 16 | (255 & H[7]) << 24, J = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, Q = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, Z = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, ee = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, te = 255 & H[8] | (255 & H[9]) << 8 | (255 & H[10]) << 16 | (255 & H[11]) << 24, re = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, ne = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, oe = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, se = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, ie = 255 & H[12] | (255 & H[13]) << 8 | (255 & H[14]) << 16 | (255 & H[15]) << 24, ae = 0; ae < 20; ae += 2) q ^= (G = (ne ^= (G = (Z ^= (G = (X ^= (G = q + ne | 0) << 7 | G >>> 25) + q | 0) << 9 | G >>> 23) + X | 0) << 13 | G >>> 19) + Z | 0) << 18 | G >>> 14, Y ^= (G = (V ^= (G = (oe ^= (G = (ee ^= (G = Y + V | 0) << 7 | G >>> 25) + Y | 0) << 9 | G >>> 23) + ee | 0) << 13 | G >>> 19) + oe | 0) << 18 | G >>> 14, te ^= (G = (J ^= (G = (W ^= (G = (se ^= (G = te + J | 0) << 7 | G >>> 25) + te | 0) << 9 | G >>> 23) + se | 0) << 13 | G >>> 19) + W | 0) << 18 | G >>> 14, ie ^= (G = (re ^= (G = (Q ^= (G = ($ ^= (G = ie + re | 0) << 7 | G >>> 25) + ie | 0) << 9 | G >>> 23) + $ | 0) << 13 | G >>> 19) + Q | 0) << 18 | G >>> 14, q ^= (G = ($ ^= (G = (W ^= (G = (V ^= (G = q + $ | 0) << 7 | G >>> 25) + q | 0) << 9 | G >>> 23) + V | 0) << 13 | G >>> 19) + W | 0) << 18 | G >>> 14, Y ^= (G = (X ^= (G = (Q ^= (G = (J ^= (G = Y + X | 0) << 7 | G >>> 25) + Y | 0) << 9 | G >>> 23) + J | 0) << 13 | G >>> 19) + Q | 0) << 18 | G >>> 14, te ^= (G = (ee ^= (G = (Z ^= (G = (re ^= (G = te + ee | 0) << 7 | G >>> 25) + te | 0) << 9 | G >>> 23) + re | 0) << 13 | G >>> 19) + Z | 0) << 18 | G >>> 14, ie ^= (G = (se ^= (G = (oe ^= (G = (ne ^= (G = ie + se | 0) << 7 | G >>> 25) + ie | 0) << 9 | G >>> 23) + ne | 0) << 13 | G >>> 19) + oe | 0) << 18 | G >>> 14;
                                            e[0] = q >>> 0 & 255, e[1] = q >>> 8 & 255, e[2] = q >>> 16 & 255, e[3] = q >>> 24 & 255, e[4] = Y >>> 0 & 255, e[5] = Y >>> 8 & 255, e[6] = Y >>> 16 & 255, e[7] = Y >>> 24 & 255, e[8] = te >>> 0 & 255, e[9] = te >>> 8 & 255, e[10] = te >>> 16 & 255, e[11] = te >>> 24 & 255, e[12] = ie >>> 0 & 255, e[13] = ie >>> 8 & 255, e[14] = ie >>> 16 & 255, e[15] = ie >>> 24 & 255, e[16] = J >>> 0 & 255, e[17] = J >>> 8 & 255, e[18] = J >>> 16 & 255, e[19] = J >>> 24 & 255, e[20] = Q >>> 0 & 255, e[21] = Q >>> 8 & 255, e[22] = Q >>> 16 & 255, e[23] = Q >>> 24 & 255, e[24] = Z >>> 0 & 255, e[25] = Z >>> 8 & 255, e[26] = Z >>> 16 & 255, e[27] = Z >>> 24 & 255, e[28] = ee >>> 0 & 255, e[29] = ee >>> 8 & 255, e[30] = ee >>> 16 & 255, e[31] = ee >>> 24 & 255
                                        }(e, r, n, H)
                                    }
                                    var se = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

                                    function ie(e, r, n, H, G, q, V) {
                                        var W, $, X = new Uint8Array(16),
                                            Y = new Uint8Array(64);
                                        for ($ = 0; $ < 16; $++) X[$] = 0;
                                        for ($ = 0; $ < 8; $++) X[$] = q[$];
                                        for (; G >= 64;) {
                                            for (ne(Y, X, V, se), $ = 0; $ < 64; $++) e[r + $] = n[H + $] ^ Y[$];
                                            for (W = 1, $ = 8; $ < 16; $++) W = W + (255 & X[$]) | 0, X[$] = 255 & W, W >>>= 8;
                                            G -= 64, r += 64, H += 64
                                        }
                                        if (G > 0)
                                            for (ne(Y, X, V, se), $ = 0; $ < G; $++) e[r + $] = n[H + $] ^ Y[$];
                                        return 0
                                    }

                                    function ae(e, r, n, H, G) {
                                        var q, V, W = new Uint8Array(16),
                                            $ = new Uint8Array(64);
                                        for (V = 0; V < 16; V++) W[V] = 0;
                                        for (V = 0; V < 8; V++) W[V] = H[V];
                                        for (; n >= 64;) {
                                            for (ne($, W, G, se), V = 0; V < 64; V++) e[r + V] = $[V];
                                            for (q = 1, V = 8; V < 16; V++) q = q + (255 & W[V]) | 0, W[V] = 255 & q, q >>>= 8;
                                            n -= 64, r += 64
                                        }
                                        if (n > 0)
                                            for (ne($, W, G, se), V = 0; V < n; V++) e[r + V] = $[V];
                                        return 0
                                    }

                                    function ce(e, r, n, H, G) {
                                        var q = new Uint8Array(32);
                                        oe(q, H, G, se);
                                        for (var V = new Uint8Array(8), W = 0; W < 8; W++) V[W] = H[W + 16];
                                        return ae(e, r, n, V, q)
                                    }

                                    function ue(e, r, n, H, G, q, V) {
                                        var W = new Uint8Array(32);
                                        oe(W, q, V, se);
                                        for (var $ = new Uint8Array(8), X = 0; X < 8; X++) $[X] = q[X + 16];
                                        return ie(e, r, n, H, G, $, W)
                                    }
                                    var le = function(e) {
                                        var r, n, H, G, q, V, W, $;
                                        this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, r = 255 & e[0] | (255 & e[1]) << 8, this.r[0] = 8191 & r, n = 255 & e[2] | (255 & e[3]) << 8, this.r[1] = 8191 & (r >>> 13 | n << 3), H = 255 & e[4] | (255 & e[5]) << 8, this.r[2] = 7939 & (n >>> 10 | H << 6), G = 255 & e[6] | (255 & e[7]) << 8, this.r[3] = 8191 & (H >>> 7 | G << 9), q = 255 & e[8] | (255 & e[9]) << 8, this.r[4] = 255 & (G >>> 4 | q << 12), this.r[5] = q >>> 1 & 8190, V = 255 & e[10] | (255 & e[11]) << 8, this.r[6] = 8191 & (q >>> 14 | V << 2), W = 255 & e[12] | (255 & e[13]) << 8, this.r[7] = 8065 & (V >>> 11 | W << 5), $ = 255 & e[14] | (255 & e[15]) << 8, this.r[8] = 8191 & (W >>> 8 | $ << 8), this.r[9] = $ >>> 5 & 127, this.pad[0] = 255 & e[16] | (255 & e[17]) << 8, this.pad[1] = 255 & e[18] | (255 & e[19]) << 8, this.pad[2] = 255 & e[20] | (255 & e[21]) << 8, this.pad[3] = 255 & e[22] | (255 & e[23]) << 8, this.pad[4] = 255 & e[24] | (255 & e[25]) << 8, this.pad[5] = 255 & e[26] | (255 & e[27]) << 8, this.pad[6] = 255 & e[28] | (255 & e[29]) << 8, this.pad[7] = 255 & e[30] | (255 & e[31]) << 8
                                    };

                                    function he(e, r, n, H, G, q) {
                                        var V = new le(q);
                                        return V.update(n, H, G), V.finish(e, r), 0
                                    }

                                    function pe(e, r, n, H, G, q) {
                                        var V = new Uint8Array(16);
                                        return he(V, 0, n, H, G, q), te(e, r, V, 0)
                                    }

                                    function fe(e, r, n, H, G) {
                                        var q;
                                        if (n < 32) return -1;
                                        for (ue(e, 0, r, 0, n, H, G), he(e, 16, e, 32, n - 32, e), q = 0; q < 16; q++) e[q] = 0;
                                        return 0
                                    }

                                    function de(e, r, n, H, G) {
                                        var q, V = new Uint8Array(32);
                                        if (n < 32) return -1;
                                        if (ce(V, 0, 32, H, G), 0 !== pe(r, 16, r, 32, n - 32, V)) return -1;
                                        for (ue(e, 0, r, 0, n, H, G), q = 0; q < 32; q++) e[q] = 0;
                                        return 0
                                    }

                                    function ge(e, r) {
                                        var n;
                                        for (n = 0; n < 16; n++) e[n] = 0 | r[n]
                                    }

                                    function ye(e) {
                                        var r, n, H = 1;
                                        for (r = 0; r < 16; r++) n = e[r] + H + 65535, H = Math.floor(n / 65536), e[r] = n - 65536 * H;
                                        e[0] += H - 1 + 37 * (H - 1)
                                    }

                                    function me(e, r, n) {
                                        for (var H, G = ~(n - 1), q = 0; q < 16; q++) H = G & (e[q] ^ r[q]), e[q] ^= H, r[q] ^= H
                                    }

                                    function be(e, n) {
                                        var H, G, q, V = r(),
                                            W = r();
                                        for (H = 0; H < 16; H++) W[H] = n[H];
                                        for (ye(W), ye(W), ye(W), G = 0; G < 2; G++) {
                                            for (V[0] = W[0] - 65517, H = 1; H < 15; H++) V[H] = W[H] - 65535 - (V[H - 1] >> 16 & 1), V[H - 1] &= 65535;
                                            V[15] = W[15] - 32767 - (V[14] >> 16 & 1), q = V[15] >> 16 & 1, V[14] &= 65535, me(W, V, 1 - q)
                                        }
                                        for (H = 0; H < 16; H++) e[2 * H] = 255 & W[H], e[2 * H + 1] = W[H] >> 8
                                    }

                                    function Ae(e, r) {
                                        var n = new Uint8Array(32),
                                            H = new Uint8Array(32);
                                        return be(n, e), be(H, r), re(n, 0, H, 0)
                                    }

                                    function we(e) {
                                        var r = new Uint8Array(32);
                                        return be(r, e), 1 & r[0]
                                    }

                                    function ve(e, r) {
                                        var n;
                                        for (n = 0; n < 16; n++) e[n] = r[2 * n] + (r[2 * n + 1] << 8);
                                        e[15] &= 32767
                                    }

                                    function xe(e, r, n) {
                                        for (var H = 0; H < 16; H++) e[H] = r[H] + n[H]
                                    }

                                    function Se(e, r, n) {
                                        for (var H = 0; H < 16; H++) e[H] = r[H] - n[H]
                                    }

                                    function Ee(e, r, n) {
                                        var H, G, q = 0,
                                            V = 0,
                                            W = 0,
                                            $ = 0,
                                            X = 0,
                                            Y = 0,
                                            J = 0,
                                            Q = 0,
                                            Z = 0,
                                            ee = 0,
                                            te = 0,
                                            re = 0,
                                            ne = 0,
                                            oe = 0,
                                            se = 0,
                                            ie = 0,
                                            ae = 0,
                                            ce = 0,
                                            ue = 0,
                                            le = 0,
                                            he = 0,
                                            pe = 0,
                                            fe = 0,
                                            de = 0,
                                            ge = 0,
                                            ye = 0,
                                            me = 0,
                                            be = 0,
                                            Ae = 0,
                                            we = 0,
                                            ve = 0,
                                            xe = n[0],
                                            Se = n[1],
                                            Ee = n[2],
                                            Te = n[3],
                                            _e = n[4],
                                            Be = n[5],
                                            Ue = n[6],
                                            ke = n[7],
                                            Ie = n[8],
                                            Ce = n[9],
                                            Re = n[10],
                                            Oe = n[11],
                                            De = n[12],
                                            Ne = n[13],
                                            Pe = n[14],
                                            Le = n[15];
                                        q += (H = r[0]) * xe, V += H * Se, W += H * Ee, $ += H * Te, X += H * _e, Y += H * Be, J += H * Ue, Q += H * ke, Z += H * Ie, ee += H * Ce, te += H * Re, re += H * Oe, ne += H * De, oe += H * Ne, se += H * Pe, ie += H * Le, V += (H = r[1]) * xe, W += H * Se, $ += H * Ee, X += H * Te, Y += H * _e, J += H * Be, Q += H * Ue, Z += H * ke, ee += H * Ie, te += H * Ce, re += H * Re, ne += H * Oe, oe += H * De, se += H * Ne, ie += H * Pe, ae += H * Le, W += (H = r[2]) * xe, $ += H * Se, X += H * Ee, Y += H * Te, J += H * _e, Q += H * Be, Z += H * Ue, ee += H * ke, te += H * Ie, re += H * Ce, ne += H * Re, oe += H * Oe, se += H * De, ie += H * Ne, ae += H * Pe, ce += H * Le, $ += (H = r[3]) * xe, X += H * Se, Y += H * Ee, J += H * Te, Q += H * _e, Z += H * Be, ee += H * Ue, te += H * ke, re += H * Ie, ne += H * Ce, oe += H * Re, se += H * Oe, ie += H * De, ae += H * Ne, ce += H * Pe, ue += H * Le, X += (H = r[4]) * xe, Y += H * Se, J += H * Ee, Q += H * Te, Z += H * _e, ee += H * Be, te += H * Ue, re += H * ke, ne += H * Ie, oe += H * Ce, se += H * Re, ie += H * Oe, ae += H * De, ce += H * Ne, ue += H * Pe, le += H * Le, Y += (H = r[5]) * xe, J += H * Se, Q += H * Ee, Z += H * Te, ee += H * _e, te += H * Be, re += H * Ue, ne += H * ke, oe += H * Ie, se += H * Ce, ie += H * Re, ae += H * Oe, ce += H * De, ue += H * Ne, le += H * Pe, he += H * Le, J += (H = r[6]) * xe, Q += H * Se, Z += H * Ee, ee += H * Te, te += H * _e, re += H * Be, ne += H * Ue, oe += H * ke, se += H * Ie, ie += H * Ce, ae += H * Re, ce += H * Oe, ue += H * De, le += H * Ne, he += H * Pe, pe += H * Le, Q += (H = r[7]) * xe, Z += H * Se, ee += H * Ee, te += H * Te, re += H * _e, ne += H * Be, oe += H * Ue, se += H * ke, ie += H * Ie, ae += H * Ce, ce += H * Re, ue += H * Oe, le += H * De, he += H * Ne, pe += H * Pe, fe += H * Le, Z += (H = r[8]) * xe, ee += H * Se, te += H * Ee, re += H * Te, ne += H * _e, oe += H * Be, se += H * Ue, ie += H * ke, ae += H * Ie, ce += H * Ce, ue += H * Re, le += H * Oe, he += H * De, pe += H * Ne, fe += H * Pe, de += H * Le, ee += (H = r[9]) * xe, te += H * Se, re += H * Ee, ne += H * Te, oe += H * _e, se += H * Be, ie += H * Ue, ae += H * ke, ce += H * Ie, ue += H * Ce, le += H * Re, he += H * Oe, pe += H * De, fe += H * Ne, de += H * Pe, ge += H * Le, te += (H = r[10]) * xe, re += H * Se, ne += H * Ee, oe += H * Te, se += H * _e, ie += H * Be, ae += H * Ue, ce += H * ke, ue += H * Ie, le += H * Ce, he += H * Re, pe += H * Oe, fe += H * De, de += H * Ne, ge += H * Pe, ye += H * Le, re += (H = r[11]) * xe, ne += H * Se, oe += H * Ee, se += H * Te, ie += H * _e, ae += H * Be, ce += H * Ue, ue += H * ke, le += H * Ie, he += H * Ce, pe += H * Re, fe += H * Oe, de += H * De, ge += H * Ne, ye += H * Pe, me += H * Le, ne += (H = r[12]) * xe, oe += H * Se, se += H * Ee, ie += H * Te, ae += H * _e, ce += H * Be, ue += H * Ue, le += H * ke, he += H * Ie, pe += H * Ce, fe += H * Re, de += H * Oe, ge += H * De, ye += H * Ne, me += H * Pe, be += H * Le, oe += (H = r[13]) * xe, se += H * Se, ie += H * Ee, ae += H * Te, ce += H * _e, ue += H * Be, le += H * Ue, he += H * ke, pe += H * Ie, fe += H * Ce, de += H * Re, ge += H * Oe, ye += H * De, me += H * Ne, be += H * Pe, Ae += H * Le, se += (H = r[14]) * xe, ie += H * Se, ae += H * Ee, ce += H * Te, ue += H * _e, le += H * Be, he += H * Ue, pe += H * ke, fe += H * Ie, de += H * Ce, ge += H * Re, ye += H * Oe, me += H * De, be += H * Ne, Ae += H * Pe, we += H * Le, ie += (H = r[15]) * xe, V += 38 * (ce += H * Ee), W += 38 * (ue += H * Te), $ += 38 * (le += H * _e), X += 38 * (he += H * Be), Y += 38 * (pe += H * Ue), J += 38 * (fe += H * ke), Q += 38 * (de += H * Ie), Z += 38 * (ge += H * Ce), ee += 38 * (ye += H * Re), te += 38 * (me += H * Oe), re += 38 * (be += H * De), ne += 38 * (Ae += H * Ne), oe += 38 * (we += H * Pe), se += 38 * (ve += H * Le), q = (H = (q += 38 * (ae += H * Se)) + (G = 1) + 65535) - 65536 * (G = Math.floor(H / 65536)), V = (H = V + G + 65535) - 65536 * (G = Math.floor(H / 65536)), W = (H = W + G + 65535) - 65536 * (G = Math.floor(H / 65536)), $ = (H = $ + G + 65535) - 65536 * (G = Math.floor(H / 65536)), X = (H = X + G + 65535) - 65536 * (G = Math.floor(H / 65536)), Y = (H = Y + G + 65535) - 65536 * (G = Math.floor(H / 65536)), J = (H = J + G + 65535) - 65536 * (G = Math.floor(H / 65536)), Q = (H = Q + G + 65535) - 65536 * (G = Math.floor(H / 65536)), Z = (H = Z + G + 65535) - 65536 * (G = Math.floor(H / 65536)), ee = (H = ee + G + 65535) - 65536 * (G = Math.floor(H / 65536)), te = (H = te + G + 65535) - 65536 * (G = Math.floor(H / 65536)), re = (H = re + G + 65535) - 65536 * (G = Math.floor(H / 65536)), ne = (H = ne + G + 65535) - 65536 * (G = Math.floor(H / 65536)), oe = (H = oe + G + 65535) - 65536 * (G = Math.floor(H / 65536)), se = (H = se + G + 65535) - 65536 * (G = Math.floor(H / 65536)), ie = (H = ie + G + 65535) - 65536 * (G = Math.floor(H / 65536)), q = (H = (q += G - 1 + 37 * (G - 1)) + (G = 1) + 65535) - 65536 * (G = Math.floor(H / 65536)), V = (H = V + G + 65535) - 65536 * (G = Math.floor(H / 65536)), W = (H = W + G + 65535) - 65536 * (G = Math.floor(H / 65536)), $ = (H = $ + G + 65535) - 65536 * (G = Math.floor(H / 65536)), X = (H = X + G + 65535) - 65536 * (G = Math.floor(H / 65536)), Y = (H = Y + G + 65535) - 65536 * (G = Math.floor(H / 65536)), J = (H = J + G + 65535) - 65536 * (G = Math.floor(H / 65536)), Q = (H = Q + G + 65535) - 65536 * (G = Math.floor(H / 65536)), Z = (H = Z + G + 65535) - 65536 * (G = Math.floor(H / 65536)), ee = (H = ee + G + 65535) - 65536 * (G = Math.floor(H / 65536)), te = (H = te + G + 65535) - 65536 * (G = Math.floor(H / 65536)), re = (H = re + G + 65535) - 65536 * (G = Math.floor(H / 65536)), ne = (H = ne + G + 65535) - 65536 * (G = Math.floor(H / 65536)), oe = (H = oe + G + 65535) - 65536 * (G = Math.floor(H / 65536)), se = (H = se + G + 65535) - 65536 * (G = Math.floor(H / 65536)), ie = (H = ie + G + 65535) - 65536 * (G = Math.floor(H / 65536)), q += G - 1 + 37 * (G - 1), e[0] = q, e[1] = V, e[2] = W, e[3] = $, e[4] = X, e[5] = Y, e[6] = J, e[7] = Q, e[8] = Z, e[9] = ee, e[10] = te, e[11] = re, e[12] = ne, e[13] = oe, e[14] = se, e[15] = ie
                                    }

                                    function Te(e, r) {
                                        Ee(e, r, r)
                                    }

                                    function _e(e, n) {
                                        var H, G = r();
                                        for (H = 0; H < 16; H++) G[H] = n[H];
                                        for (H = 253; H >= 0; H--) Te(G, G), 2 !== H && 4 !== H && Ee(G, G, n);
                                        for (H = 0; H < 16; H++) e[H] = G[H]
                                    }

                                    function Be(e, n) {
                                        var H, G = r();
                                        for (H = 0; H < 16; H++) G[H] = n[H];
                                        for (H = 250; H >= 0; H--) Te(G, G), 1 !== H && Ee(G, G, n);
                                        for (H = 0; H < 16; H++) e[H] = G[H]
                                    }

                                    function Ue(e, n, H) {
                                        var G, q, V = new Uint8Array(32),
                                            $ = new Float64Array(80),
                                            X = r(),
                                            Y = r(),
                                            J = r(),
                                            Q = r(),
                                            Z = r(),
                                            ee = r();
                                        for (q = 0; q < 31; q++) V[q] = n[q];
                                        for (V[31] = 127 & n[31] | 64, V[0] &= 248, ve($, H), q = 0; q < 16; q++) Y[q] = $[q], Q[q] = X[q] = J[q] = 0;
                                        for (X[0] = Q[0] = 1, q = 254; q >= 0; --q) me(X, Y, G = V[q >>> 3] >>> (7 & q) & 1), me(J, Q, G), xe(Z, X, J), Se(X, X, J), xe(J, Y, Q), Se(Y, Y, Q), Te(Q, Z), Te(ee, X), Ee(X, J, X), Ee(J, Y, Z), xe(Z, X, J), Se(X, X, J), Te(Y, X), Se(J, Q, ee), Ee(X, J, W), xe(X, X, Q), Ee(J, J, X), Ee(X, Q, ee), Ee(Q, Y, $), Te(Y, Z), me(X, Y, G), me(J, Q, G);
                                        for (q = 0; q < 16; q++) $[q + 16] = X[q], $[q + 32] = J[q], $[q + 48] = Y[q], $[q + 64] = Q[q];
                                        var te = $.subarray(32),
                                            re = $.subarray(16);
                                        return _e(te, te), Ee(re, re, te), be(e, re), 0
                                    }

                                    function ke(e, r) {
                                        return Ue(e, r, G)
                                    }

                                    function Ie(e, r) {
                                        return n(r, 32), ke(e, r)
                                    }

                                    function Ce(e, r, n) {
                                        var G = new Uint8Array(32);
                                        return Ue(G, n, r), oe(e, H, G, se)
                                    }
                                    le.prototype.blocks = function(e, r, n) {
                                        for (var H, G, q, V, W, $, X, Y, J, Q, Z, ee, te, re, ne, oe, se, ie, ae, ce = this.fin ? 0 : 2048, ue = this.h[0], le = this.h[1], he = this.h[2], pe = this.h[3], fe = this.h[4], de = this.h[5], ge = this.h[6], ye = this.h[7], me = this.h[8], be = this.h[9], Ae = this.r[0], we = this.r[1], ve = this.r[2], xe = this.r[3], Se = this.r[4], Ee = this.r[5], Te = this.r[6], _e = this.r[7], Be = this.r[8], Ue = this.r[9]; n >= 16;) Q = J = 0, Q += (ue += 8191 & (H = 255 & e[r + 0] | (255 & e[r + 1]) << 8)) * Ae, Q += (le += 8191 & (H >>> 13 | (G = 255 & e[r + 2] | (255 & e[r + 3]) << 8) << 3)) * (5 * Ue), Q += (he += 8191 & (G >>> 10 | (q = 255 & e[r + 4] | (255 & e[r + 5]) << 8) << 6)) * (5 * Be), Q += (pe += 8191 & (q >>> 7 | (V = 255 & e[r + 6] | (255 & e[r + 7]) << 8) << 9)) * (5 * _e), J = (Q += (fe += 8191 & (V >>> 4 | (W = 255 & e[r + 8] | (255 & e[r + 9]) << 8) << 12)) * (5 * Te)) >>> 13, Q &= 8191, Q += (de += W >>> 1 & 8191) * (5 * Ee), Q += (ge += 8191 & (W >>> 14 | ($ = 255 & e[r + 10] | (255 & e[r + 11]) << 8) << 2)) * (5 * Se), Q += (ye += 8191 & ($ >>> 11 | (X = 255 & e[r + 12] | (255 & e[r + 13]) << 8) << 5)) * (5 * xe), Q += (me += 8191 & (X >>> 8 | (Y = 255 & e[r + 14] | (255 & e[r + 15]) << 8) << 8)) * (5 * ve), Z = J += (Q += (be += Y >>> 5 | ce) * (5 * we)) >>> 13, Z += ue * we, Z += le * Ae, Z += he * (5 * Ue), Z += pe * (5 * Be), J = (Z += fe * (5 * _e)) >>> 13, Z &= 8191, Z += de * (5 * Te), Z += ge * (5 * Ee), Z += ye * (5 * Se), Z += me * (5 * xe), J += (Z += be * (5 * ve)) >>> 13, Z &= 8191, ee = J, ee += ue * ve, ee += le * we, ee += he * Ae, ee += pe * (5 * Ue), J = (ee += fe * (5 * Be)) >>> 13, ee &= 8191, ee += de * (5 * _e), ee += ge * (5 * Te), ee += ye * (5 * Ee), ee += me * (5 * Se), te = J += (ee += be * (5 * xe)) >>> 13, te += ue * xe, te += le * ve, te += he * we, te += pe * Ae, J = (te += fe * (5 * Ue)) >>> 13, te &= 8191, te += de * (5 * Be), te += ge * (5 * _e), te += ye * (5 * Te), te += me * (5 * Ee), re = J += (te += be * (5 * Se)) >>> 13, re += ue * Se, re += le * xe, re += he * ve, re += pe * we, J = (re += fe * Ae) >>> 13, re &= 8191, re += de * (5 * Ue), re += ge * (5 * Be), re += ye * (5 * _e), re += me * (5 * Te), ne = J += (re += be * (5 * Ee)) >>> 13, ne += ue * Ee, ne += le * Se, ne += he * xe, ne += pe * ve, J = (ne += fe * we) >>> 13, ne &= 8191, ne += de * Ae, ne += ge * (5 * Ue), ne += ye * (5 * Be), ne += me * (5 * _e), oe = J += (ne += be * (5 * Te)) >>> 13, oe += ue * Te, oe += le * Ee, oe += he * Se, oe += pe * xe, J = (oe += fe * ve) >>> 13, oe &= 8191, oe += de * we, oe += ge * Ae, oe += ye * (5 * Ue), oe += me * (5 * Be), se = J += (oe += be * (5 * _e)) >>> 13, se += ue * _e, se += le * Te, se += he * Ee, se += pe * Se, J = (se += fe * xe) >>> 13, se &= 8191, se += de * ve, se += ge * we, se += ye * Ae, se += me * (5 * Ue), ie = J += (se += be * (5 * Be)) >>> 13, ie += ue * Be, ie += le * _e, ie += he * Te, ie += pe * Ee, J = (ie += fe * Se) >>> 13, ie &= 8191, ie += de * xe, ie += ge * ve, ie += ye * we, ie += me * Ae, ae = J += (ie += be * (5 * Ue)) >>> 13, ae += ue * Ue, ae += le * Be, ae += he * _e, ae += pe * Te, J = (ae += fe * Ee) >>> 13, ae &= 8191, ae += de * Se, ae += ge * xe, ae += ye * ve, ae += me * we, ue = Q = 8191 & (J = (J = ((J += (ae += be * Ae) >>> 13) << 2) + J | 0) + (Q &= 8191) | 0), le = Z += J >>>= 13, he = ee &= 8191, pe = te &= 8191, fe = re &= 8191, de = ne &= 8191, ge = oe &= 8191, ye = se &= 8191, me = ie &= 8191, be = ae &= 8191, r += 16, n -= 16;
                                        this.h[0] = ue, this.h[1] = le, this.h[2] = he, this.h[3] = pe, this.h[4] = fe, this.h[5] = de, this.h[6] = ge, this.h[7] = ye, this.h[8] = me, this.h[9] = be
                                    }, le.prototype.finish = function(e, r) {
                                        var n, H, G, q, V = new Uint16Array(10);
                                        if (this.leftover) {
                                            for (q = this.leftover, this.buffer[q++] = 1; q < 16; q++) this.buffer[q] = 0;
                                            this.fin = 1, this.blocks(this.buffer, 0, 16)
                                        }
                                        for (n = this.h[1] >>> 13, this.h[1] &= 8191, q = 2; q < 10; q++) this.h[q] += n, n = this.h[q] >>> 13, this.h[q] &= 8191;
                                        for (this.h[0] += 5 * n, n = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += n, n = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += n, V[0] = this.h[0] + 5, n = V[0] >>> 13, V[0] &= 8191, q = 1; q < 10; q++) V[q] = this.h[q] + n, n = V[q] >>> 13, V[q] &= 8191;
                                        for (V[9] -= 8192, H = (1 ^ n) - 1, q = 0; q < 10; q++) V[q] &= H;
                                        for (H = ~H, q = 0; q < 10; q++) this.h[q] = this.h[q] & H | V[q];
                                        for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), G = this.h[0] + this.pad[0], this.h[0] = 65535 & G, q = 1; q < 8; q++) G = (this.h[q] + this.pad[q] | 0) + (G >>> 16) | 0, this.h[q] = 65535 & G;
                                        e[r + 0] = this.h[0] >>> 0 & 255, e[r + 1] = this.h[0] >>> 8 & 255, e[r + 2] = this.h[1] >>> 0 & 255, e[r + 3] = this.h[1] >>> 8 & 255, e[r + 4] = this.h[2] >>> 0 & 255, e[r + 5] = this.h[2] >>> 8 & 255, e[r + 6] = this.h[3] >>> 0 & 255, e[r + 7] = this.h[3] >>> 8 & 255, e[r + 8] = this.h[4] >>> 0 & 255, e[r + 9] = this.h[4] >>> 8 & 255, e[r + 10] = this.h[5] >>> 0 & 255, e[r + 11] = this.h[5] >>> 8 & 255, e[r + 12] = this.h[6] >>> 0 & 255, e[r + 13] = this.h[6] >>> 8 & 255, e[r + 14] = this.h[7] >>> 0 & 255, e[r + 15] = this.h[7] >>> 8 & 255
                                    }, le.prototype.update = function(e, r, n) {
                                        var H, G;
                                        if (this.leftover) {
                                            for ((G = 16 - this.leftover) > n && (G = n), H = 0; H < G; H++) this.buffer[this.leftover + H] = e[r + H];
                                            if (n -= G, r += G, this.leftover += G, this.leftover < 16) return;
                                            this.blocks(this.buffer, 0, 16), this.leftover = 0
                                        }
                                        if (n >= 16 && (G = n - n % 16, this.blocks(e, r, G), r += G, n -= G), n) {
                                            for (H = 0; H < n; H++) this.buffer[this.leftover + H] = e[r + H];
                                            this.leftover += n
                                        }
                                    };
                                    var Re = fe,
                                        Oe = de,
                                        De = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                                    function Ne(e, r, n, H) {
                                        for (var G, q, V, W, $, X, Y, J, Q, Z, ee, te, re, ne, oe, se, ie, ae, ce, ue, le, he, pe, fe, de, ge, ye = new Int32Array(16), me = new Int32Array(16), be = e[0], Ae = e[1], we = e[2], ve = e[3], xe = e[4], Se = e[5], Ee = e[6], Te = e[7], _e = r[0], Be = r[1], Ue = r[2], ke = r[3], Ie = r[4], Ce = r[5], Re = r[6], Oe = r[7], Ne = 0; H >= 128;) {
                                            for (ce = 0; ce < 16; ce++) ue = 8 * ce + Ne, ye[ce] = n[ue + 0] << 24 | n[ue + 1] << 16 | n[ue + 2] << 8 | n[ue + 3], me[ce] = n[ue + 4] << 24 | n[ue + 5] << 16 | n[ue + 6] << 8 | n[ue + 7];
                                            for (ce = 0; ce < 80; ce++)
                                                if (G = be, q = Ae, V = we, W = ve, $ = xe, X = Se, Y = Ee, Q = _e, Z = Be, ee = Ue, te = ke, re = Ie, ne = Ce, oe = Re, pe = 65535 & (he = Oe), fe = he >>> 16, de = 65535 & (le = Te), ge = le >>> 16, pe += 65535 & (he = (Ie >>> 14 | xe << 18) ^ (Ie >>> 18 | xe << 14) ^ (xe >>> 9 | Ie << 23)), fe += he >>> 16, de += 65535 & (le = (xe >>> 14 | Ie << 18) ^ (xe >>> 18 | Ie << 14) ^ (Ie >>> 9 | xe << 23)), ge += le >>> 16, pe += 65535 & (he = Ie & Ce ^ ~Ie & Re), fe += he >>> 16, de += 65535 & (le = xe & Se ^ ~xe & Ee), ge += le >>> 16, pe += 65535 & (he = De[2 * ce + 1]), fe += he >>> 16, de += 65535 & (le = De[2 * ce]), ge += le >>> 16, le = ye[ce % 16], fe += (he = me[ce % 16]) >>> 16, de += 65535 & le, ge += le >>> 16, de += (fe += (pe += 65535 & he) >>> 16) >>> 16, pe = 65535 & (he = ae = 65535 & pe | fe << 16), fe = he >>> 16, de = 65535 & (le = ie = 65535 & de | (ge += de >>> 16) << 16), ge = le >>> 16, pe += 65535 & (he = (_e >>> 28 | be << 4) ^ (be >>> 2 | _e << 30) ^ (be >>> 7 | _e << 25)), fe += he >>> 16, de += 65535 & (le = (be >>> 28 | _e << 4) ^ (_e >>> 2 | be << 30) ^ (_e >>> 7 | be << 25)), ge += le >>> 16, fe += (he = _e & Be ^ _e & Ue ^ Be & Ue) >>> 16, de += 65535 & (le = be & Ae ^ be & we ^ Ae & we), ge += le >>> 16, J = 65535 & (de += (fe += (pe += 65535 & he) >>> 16) >>> 16) | (ge += de >>> 16) << 16, se = 65535 & pe | fe << 16, pe = 65535 & (he = te), fe = he >>> 16, de = 65535 & (le = W), ge = le >>> 16, fe += (he = ae) >>> 16, de += 65535 & (le = ie), ge += le >>> 16, Ae = G, we = q, ve = V, xe = W = 65535 & (de += (fe += (pe += 65535 & he) >>> 16) >>> 16) | (ge += de >>> 16) << 16, Se = $, Ee = X, Te = Y, be = J, Be = Q, Ue = Z, ke = ee, Ie = te = 65535 & pe | fe << 16, Ce = re, Re = ne, Oe = oe, _e = se, ce % 16 == 15)
                                                    for (ue = 0; ue < 16; ue++) le = ye[ue], pe = 65535 & (he = me[ue]), fe = he >>> 16, de = 65535 & le, ge = le >>> 16, le = ye[(ue + 9) % 16], pe += 65535 & (he = me[(ue + 9) % 16]), fe += he >>> 16, de += 65535 & le, ge += le >>> 16, ie = ye[(ue + 1) % 16], pe += 65535 & (he = ((ae = me[(ue + 1) % 16]) >>> 1 | ie << 31) ^ (ae >>> 8 | ie << 24) ^ (ae >>> 7 | ie << 25)), fe += he >>> 16, de += 65535 & (le = (ie >>> 1 | ae << 31) ^ (ie >>> 8 | ae << 24) ^ ie >>> 7), ge += le >>> 16, ie = ye[(ue + 14) % 16], fe += (he = ((ae = me[(ue + 14) % 16]) >>> 19 | ie << 13) ^ (ie >>> 29 | ae << 3) ^ (ae >>> 6 | ie << 26)) >>> 16, de += 65535 & (le = (ie >>> 19 | ae << 13) ^ (ae >>> 29 | ie << 3) ^ ie >>> 6), ge += le >>> 16, ge += (de += (fe += (pe += 65535 & he) >>> 16) >>> 16) >>> 16, ye[ue] = 65535 & de | ge << 16, me[ue] = 65535 & pe | fe << 16;
                                            pe = 65535 & (he = _e), fe = he >>> 16, de = 65535 & (le = be), ge = le >>> 16, le = e[0], fe += (he = r[0]) >>> 16, de += 65535 & le, ge += le >>> 16, ge += (de += (fe += (pe += 65535 & he) >>> 16) >>> 16) >>> 16, e[0] = be = 65535 & de | ge << 16, r[0] = _e = 65535 & pe | fe << 16, pe = 65535 & (he = Be), fe = he >>> 16, de = 65535 & (le = Ae), ge = le >>> 16, le = e[1], fe += (he = r[1]) >>> 16, de += 65535 & le, ge += le >>> 16, ge += (de += (fe += (pe += 65535 & he) >>> 16) >>> 16) >>> 16, e[1] = Ae = 65535 & de | ge << 16, r[1] = Be = 65535 & pe | fe << 16, pe = 65535 & (he = Ue), fe = he >>> 16, de = 65535 & (le = we), ge = le >>> 16, le = e[2], fe += (he = r[2]) >>> 16, de += 65535 & le, ge += le >>> 16, ge += (de += (fe += (pe += 65535 & he) >>> 16) >>> 16) >>> 16, e[2] = we = 65535 & de | ge << 16, r[2] = Ue = 65535 & pe | fe << 16, pe = 65535 & (he = ke), fe = he >>> 16, de = 65535 & (le = ve), ge = le >>> 16, le = e[3], fe += (he = r[3]) >>> 16, de += 65535 & le, ge += le >>> 16, ge += (de += (fe += (pe += 65535 & he) >>> 16) >>> 16) >>> 16, e[3] = ve = 65535 & de | ge << 16, r[3] = ke = 65535 & pe | fe << 16, pe = 65535 & (he = Ie), fe = he >>> 16, de = 65535 & (le = xe), ge = le >>> 16, le = e[4], fe += (he = r[4]) >>> 16, de += 65535 & le, ge += le >>> 16, ge += (de += (fe += (pe += 65535 & he) >>> 16) >>> 16) >>> 16, e[4] = xe = 65535 & de | ge << 16, r[4] = Ie = 65535 & pe | fe << 16, pe = 65535 & (he = Ce), fe = he >>> 16, de = 65535 & (le = Se), ge = le >>> 16, le = e[5], fe += (he = r[5]) >>> 16, de += 65535 & le, ge += le >>> 16, ge += (de += (fe += (pe += 65535 & he) >>> 16) >>> 16) >>> 16, e[5] = Se = 65535 & de | ge << 16, r[5] = Ce = 65535 & pe | fe << 16, pe = 65535 & (he = Re), fe = he >>> 16, de = 65535 & (le = Ee), ge = le >>> 16, le = e[6], fe += (he = r[6]) >>> 16, de += 65535 & le, ge += le >>> 16, ge += (de += (fe += (pe += 65535 & he) >>> 16) >>> 16) >>> 16, e[6] = Ee = 65535 & de | ge << 16, r[6] = Re = 65535 & pe | fe << 16, pe = 65535 & (he = Oe), fe = he >>> 16, de = 65535 & (le = Te), ge = le >>> 16, le = e[7], fe += (he = r[7]) >>> 16, de += 65535 & le, ge += le >>> 16, ge += (de += (fe += (pe += 65535 & he) >>> 16) >>> 16) >>> 16, e[7] = Te = 65535 & de | ge << 16, r[7] = Oe = 65535 & pe | fe << 16, Ne += 128, H -= 128
                                        }
                                        return H
                                    }

                                    function Pe(e, r, n) {
                                        var H, G = new Int32Array(8),
                                            q = new Int32Array(8),
                                            V = new Uint8Array(256),
                                            W = n;
                                        for (G[0] = 1779033703, G[1] = 3144134277, G[2] = 1013904242, G[3] = 2773480762, G[4] = 1359893119, G[5] = 2600822924, G[6] = 528734635, G[7] = 1541459225, q[0] = 4089235720, q[1] = 2227873595, q[2] = 4271175723, q[3] = 1595750129, q[4] = 2917565137, q[5] = 725511199, q[6] = 4215389547, q[7] = 327033209, Ne(G, q, r, n), n %= 128, H = 0; H < n; H++) V[H] = r[W - n + H];
                                        for (V[n] = 128, V[(n = 256 - 128 * (n < 112 ? 1 : 0)) - 9] = 0, Z(V, n - 8, W / 536870912 | 0, W << 3), Ne(G, q, V, n), H = 0; H < 8; H++) Z(e, 8 * H, G[H], q[H]);
                                        return 0
                                    }

                                    function Le(e, n) {
                                        var H = r(),
                                            G = r(),
                                            q = r(),
                                            V = r(),
                                            W = r(),
                                            $ = r(),
                                            Y = r(),
                                            J = r(),
                                            Q = r();
                                        Se(H, e[1], e[0]), Se(Q, n[1], n[0]), Ee(H, H, Q), xe(G, e[0], e[1]), xe(Q, n[0], n[1]), Ee(G, G, Q), Ee(q, e[3], n[3]), Ee(q, q, X), Ee(V, e[2], n[2]), xe(V, V, V), Se(W, G, H), Se($, V, q), xe(Y, V, q), xe(J, G, H), Ee(e[0], W, $), Ee(e[1], J, Y), Ee(e[2], Y, $), Ee(e[3], W, J)
                                    }

                                    function Fe(e, r, n) {
                                        var H;
                                        for (H = 0; H < 4; H++) me(e[H], r[H], n)
                                    }

                                    function ze(e, n) {
                                        var H = r(),
                                            G = r(),
                                            q = r();
                                        _e(q, n[2]), Ee(H, n[0], q), Ee(G, n[1], q), be(e, G), e[31] ^= we(H) << 7
                                    }

                                    function je(e, r, n) {
                                        var H, G;
                                        for (ge(e[0], q), ge(e[1], V), ge(e[2], V), ge(e[3], q), G = 255; G >= 0; --G) Fe(e, r, H = n[G / 8 | 0] >> (7 & G) & 1), Le(r, e), Le(e, e), Fe(e, r, H)
                                    }

                                    function Me(e, n) {
                                        var H = [r(), r(), r(), r()];
                                        ge(H[0], Y), ge(H[1], J), ge(H[2], V), Ee(H[3], Y, J), je(e, H, n)
                                    }

                                    function He(e, H, G) {
                                        var q, V = new Uint8Array(64),
                                            W = [r(), r(), r(), r()];
                                        for (G || n(H, 32), Pe(V, H, 32), V[0] &= 248, V[31] &= 127, V[31] |= 64, Me(W, V), ze(e, W), q = 0; q < 32; q++) H[q + 32] = e[q];
                                        return 0
                                    }
                                    var Ge = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

                                    function Ke(e, r) {
                                        var n, H, G, q;
                                        for (H = 63; H >= 32; --H) {
                                            for (n = 0, G = H - 32, q = H - 12; G < q; ++G) r[G] += n - 16 * r[H] * Ge[G - (H - 32)], n = Math.floor((r[G] + 128) / 256), r[G] -= 256 * n;
                                            r[G] += n, r[H] = 0
                                        }
                                        for (n = 0, G = 0; G < 32; G++) r[G] += n - (r[31] >> 4) * Ge[G], n = r[G] >> 8, r[G] &= 255;
                                        for (G = 0; G < 32; G++) r[G] -= n * Ge[G];
                                        for (H = 0; H < 32; H++) r[H + 1] += r[H] >> 8, e[H] = 255 & r[H]
                                    }

                                    function qe(e) {
                                        var r, n = new Float64Array(64);
                                        for (r = 0; r < 64; r++) n[r] = e[r];
                                        for (r = 0; r < 64; r++) e[r] = 0;
                                        Ke(e, n)
                                    }

                                    function Ve(e, n, H, G) {
                                        var q, V, W = new Uint8Array(64),
                                            $ = new Uint8Array(64),
                                            X = new Uint8Array(64),
                                            Y = new Float64Array(64),
                                            J = [r(), r(), r(), r()];
                                        Pe(W, G, 32), W[0] &= 248, W[31] &= 127, W[31] |= 64;
                                        var Q = H + 64;
                                        for (q = 0; q < H; q++) e[64 + q] = n[q];
                                        for (q = 0; q < 32; q++) e[32 + q] = W[32 + q];
                                        for (Pe(X, e.subarray(32), H + 32), qe(X), Me(J, X), ze(e, J), q = 32; q < 64; q++) e[q] = G[q];
                                        for (Pe($, e, H + 64), qe($), q = 0; q < 64; q++) Y[q] = 0;
                                        for (q = 0; q < 32; q++) Y[q] = X[q];
                                        for (q = 0; q < 32; q++)
                                            for (V = 0; V < 32; V++) Y[q + V] += $[q] * W[V];
                                        return Ke(e.subarray(32), Y), Q
                                    }

                                    function We(e, n, H, G) {
                                        var W, X = new Uint8Array(32),
                                            Y = new Uint8Array(64),
                                            J = [r(), r(), r(), r()],
                                            Z = [r(), r(), r(), r()];
                                        if (H < 64) return -1;
                                        if (function(e, n) {
                                                var H = r(),
                                                    G = r(),
                                                    W = r(),
                                                    X = r(),
                                                    Y = r(),
                                                    J = r(),
                                                    Z = r();
                                                return ge(e[2], V), ve(e[1], n), Te(W, e[1]), Ee(X, W, $), Se(W, W, e[2]), xe(X, e[2], X), Te(Y, X), Te(J, Y), Ee(Z, J, Y), Ee(H, Z, W), Ee(H, H, X), Be(H, H), Ee(H, H, W), Ee(H, H, X), Ee(H, H, X), Ee(e[0], H, X), Te(G, e[0]), Ee(G, G, X), Ae(G, W) && Ee(e[0], e[0], Q), Te(G, e[0]), Ee(G, G, X), Ae(G, W) ? -1 : (we(e[0]) === n[31] >> 7 && Se(e[0], q, e[0]), Ee(e[3], e[0], e[1]), 0)
                                            }(Z, G)) return -1;
                                        for (W = 0; W < H; W++) e[W] = n[W];
                                        for (W = 0; W < 32; W++) e[W + 32] = G[W];
                                        if (Pe(Y, e, H), qe(Y), je(J, Z, Y), Me(Z, n.subarray(32)), Le(J, Z), ze(X, J), H -= 64, re(n, 0, X, 0)) {
                                            for (W = 0; W < H; W++) e[W] = 0;
                                            return -1
                                        }
                                        for (W = 0; W < H; W++) e[W] = n[W + 64];
                                        return H
                                    }

                                    function $e(e, r) {
                                        if (32 !== e.length) throw new Error("bad key size");
                                        if (24 !== r.length) throw new Error("bad nonce size")
                                    }

                                    function Xe() {
                                        for (var e = 0; e < arguments.length; e++)
                                            if (!(arguments[e] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
                                    }

                                    function Ye(e) {
                                        for (var r = 0; r < e.length; r++) e[r] = 0
                                    }
                                    e.lowlevel = {
                                            crypto_core_hsalsa20: oe,
                                            crypto_stream_xor: ue,
                                            crypto_stream: ce,
                                            crypto_stream_salsa20_xor: ie,
                                            crypto_stream_salsa20: ae,
                                            crypto_onetimeauth: he,
                                            crypto_onetimeauth_verify: pe,
                                            crypto_verify_16: te,
                                            crypto_verify_32: re,
                                            crypto_secretbox: fe,
                                            crypto_secretbox_open: de,
                                            crypto_scalarmult: Ue,
                                            crypto_scalarmult_base: ke,
                                            crypto_box_beforenm: Ce,
                                            crypto_box_afternm: Re,
                                            crypto_box: function(e, r, n, H, G, q) {
                                                var V = new Uint8Array(32);
                                                return Ce(V, G, q), Re(e, r, n, H, V)
                                            },
                                            crypto_box_open: function(e, r, n, H, G, q) {
                                                var V = new Uint8Array(32);
                                                return Ce(V, G, q), Oe(e, r, n, H, V)
                                            },
                                            crypto_box_keypair: Ie,
                                            crypto_hash: Pe,
                                            crypto_sign: Ve,
                                            crypto_sign_keypair: He,
                                            crypto_sign_open: We,
                                            crypto_secretbox_KEYBYTES: 32,
                                            crypto_secretbox_NONCEBYTES: 24,
                                            crypto_secretbox_ZEROBYTES: 32,
                                            crypto_secretbox_BOXZEROBYTES: 16,
                                            crypto_scalarmult_BYTES: 32,
                                            crypto_scalarmult_SCALARBYTES: 32,
                                            crypto_box_PUBLICKEYBYTES: 32,
                                            crypto_box_SECRETKEYBYTES: 32,
                                            crypto_box_BEFORENMBYTES: 32,
                                            crypto_box_NONCEBYTES: 24,
                                            crypto_box_ZEROBYTES: 32,
                                            crypto_box_BOXZEROBYTES: 16,
                                            crypto_sign_BYTES: 64,
                                            crypto_sign_PUBLICKEYBYTES: 32,
                                            crypto_sign_SECRETKEYBYTES: 64,
                                            crypto_sign_SEEDBYTES: 32,
                                            crypto_hash_BYTES: 64,
                                            gf: r,
                                            D: $,
                                            L: Ge,
                                            pack25519: be,
                                            unpack25519: ve,
                                            M: Ee,
                                            A: xe,
                                            S: Te,
                                            Z: Se,
                                            pow2523: Be,
                                            add: Le,
                                            set25519: ge,
                                            modL: Ke,
                                            scalarmult: je,
                                            scalarbase: Me
                                        }, e.randomBytes = function(e) {
                                            var r = new Uint8Array(e);
                                            return n(r, e), r
                                        }, e.secretbox = function(e, r, n) {
                                            Xe(e, r, n), $e(n, r);
                                            for (var H = new Uint8Array(32 + e.length), G = new Uint8Array(H.length), q = 0; q < e.length; q++) H[q + 32] = e[q];
                                            return fe(G, H, H.length, r, n), G.subarray(16)
                                        }, e.secretbox.open = function(e, r, n) {
                                            Xe(e, r, n), $e(n, r);
                                            for (var H = new Uint8Array(16 + e.length), G = new Uint8Array(H.length), q = 0; q < e.length; q++) H[q + 16] = e[q];
                                            return H.length < 32 || 0 !== de(G, H, H.length, r, n) ? null : G.subarray(32)
                                        }, e.secretbox.keyLength = 32, e.secretbox.nonceLength = 24, e.secretbox.overheadLength = 16, e.scalarMult = function(e, r) {
                                            if (Xe(e, r), 32 !== e.length) throw new Error("bad n size");
                                            if (32 !== r.length) throw new Error("bad p size");
                                            var n = new Uint8Array(32);
                                            return Ue(n, e, r), n
                                        }, e.scalarMult.base = function(e) {
                                            if (Xe(e), 32 !== e.length) throw new Error("bad n size");
                                            var r = new Uint8Array(32);
                                            return ke(r, e), r
                                        }, e.scalarMult.scalarLength = 32, e.scalarMult.groupElementLength = 32, e.box = function(r, n, H, G) {
                                            var q = e.box.before(H, G);
                                            return e.secretbox(r, n, q)
                                        }, e.box.before = function(e, r) {
                                            Xe(e, r),
                                                function(e, r) {
                                                    if (32 !== e.length) throw new Error("bad public key size");
                                                    if (32 !== r.length) throw new Error("bad secret key size")
                                                }(e, r);
                                            var n = new Uint8Array(32);
                                            return Ce(n, e, r), n
                                        }, e.box.after = e.secretbox, e.box.open = function(r, n, H, G) {
                                            var q = e.box.before(H, G);
                                            return e.secretbox.open(r, n, q)
                                        }, e.box.open.after = e.secretbox.open, e.box.keyPair = function() {
                                            var e = new Uint8Array(32),
                                                r = new Uint8Array(32);
                                            return Ie(e, r), {
                                                publicKey: e,
                                                secretKey: r
                                            }
                                        }, e.box.keyPair.fromSecretKey = function(e) {
                                            if (Xe(e), 32 !== e.length) throw new Error("bad secret key size");
                                            var r = new Uint8Array(32);
                                            return ke(r, e), {
                                                publicKey: r,
                                                secretKey: new Uint8Array(e)
                                            }
                                        }, e.box.publicKeyLength = 32, e.box.secretKeyLength = 32, e.box.sharedKeyLength = 32, e.box.nonceLength = 24, e.box.overheadLength = e.secretbox.overheadLength, e.sign = function(e, r) {
                                            if (Xe(e, r), 64 !== r.length) throw new Error("bad secret key size");
                                            var n = new Uint8Array(64 + e.length);
                                            return Ve(n, e, e.length, r), n
                                        }, e.sign.open = function(e, r) {
                                            if (Xe(e, r), 32 !== r.length) throw new Error("bad public key size");
                                            var n = new Uint8Array(e.length),
                                                H = We(n, e, e.length, r);
                                            if (H < 0) return null;
                                            for (var G = new Uint8Array(H), q = 0; q < G.length; q++) G[q] = n[q];
                                            return G
                                        }, e.sign.detached = function(r, n) {
                                            for (var H = e.sign(r, n), G = new Uint8Array(64), q = 0; q < G.length; q++) G[q] = H[q];
                                            return G
                                        }, e.sign.detached.verify = function(e, r, n) {
                                            if (Xe(e, r, n), 64 !== r.length) throw new Error("bad signature size");
                                            if (32 !== n.length) throw new Error("bad public key size");
                                            var H, G = new Uint8Array(64 + e.length),
                                                q = new Uint8Array(64 + e.length);
                                            for (H = 0; H < 64; H++) G[H] = r[H];
                                            for (H = 0; H < e.length; H++) G[H + 64] = e[H];
                                            return We(q, G, G.length, n) >= 0
                                        }, e.sign.keyPair = function() {
                                            var e = new Uint8Array(32),
                                                r = new Uint8Array(64);
                                            return He(e, r), {
                                                publicKey: e,
                                                secretKey: r
                                            }
                                        }, e.sign.keyPair.fromSecretKey = function(e) {
                                            if (Xe(e), 64 !== e.length) throw new Error("bad secret key size");
                                            for (var r = new Uint8Array(32), n = 0; n < r.length; n++) r[n] = e[32 + n];
                                            return {
                                                publicKey: r,
                                                secretKey: new Uint8Array(e)
                                            }
                                        }, e.sign.keyPair.fromSeed = function(e) {
                                            if (Xe(e), 32 !== e.length) throw new Error("bad seed size");
                                            for (var r = new Uint8Array(32), n = new Uint8Array(64), H = 0; H < 32; H++) n[H] = e[H];
                                            return He(r, n, !0), {
                                                publicKey: r,
                                                secretKey: n
                                            }
                                        }, e.sign.publicKeyLength = 32, e.sign.secretKeyLength = 64, e.sign.seedLength = 32, e.sign.signatureLength = 64, e.hash = function(e) {
                                            Xe(e);
                                            var r = new Uint8Array(64);
                                            return Pe(r, e, e.length), r
                                        }, e.hash.hashLength = 64, e.verify = function(e, r) {
                                            return Xe(e, r), 0 !== e.length && 0 !== r.length && e.length === r.length && 0 === ee(e, 0, r, 0, e.length)
                                        }, e.setPRNG = function(e) {
                                            n = e
                                        },
                                        function() {
                                            var r = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                                            r && r.getRandomValues ? e.setPRNG((function(e, n) {
                                                var H, G = new Uint8Array(n);
                                                for (H = 0; H < n; H += 65536) r.getRandomValues(G.subarray(H, H + Math.min(n - H, 65536)));
                                                for (H = 0; H < n; H++) e[H] = G[H];
                                                Ye(G)
                                            })) : (r = __webpack_require__(24)) && r.randomBytes && e.setPRNG((function(e, n) {
                                                var H, G = r.randomBytes(n);
                                                for (H = 0; H < n; H++) e[H] = G[H];
                                                Ye(G)
                                            }))
                                        }()
                                }(void 0 !== e && e.exports ? e.exports : self.nacl = self.nacl || {})
                            },
                            1042: (e, r, n) => {
                                "use strict";
                                var H = n(1926),
                                    G = n(9370),
                                    q = /[\n\r\t]/g,
                                    V = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                                    W = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                                    $ = /^[a-zA-Z]:/,
                                    X = /^[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;

                                function Y(e) {
                                    return (e || "").toString().replace(X, "")
                                }
                                var J = [
                                        ["#", "hash"],
                                        ["?", "query"],
                                        function(e, r) {
                                            return ee(r.protocol) ? e.replace(/\\/g, "/") : e
                                        },
                                        ["/", "pathname"],
                                        ["@", "auth", 1],
                                        [NaN, "host", void 0, 1, 1],
                                        [/:(\d*)$/, "port", void 0, 1],
                                        [NaN, "hostname", void 0, 1, 1]
                                    ],
                                    Q = {
                                        hash: 1,
                                        query: 1
                                    };

                                function Z(e) {
                                    var r, H = ("undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {}).location || {},
                                        G = {},
                                        q = typeof(e = e || H);
                                    if ("blob:" === e.protocol) G = new re(unescape(e.pathname), {});
                                    else if ("string" === q)
                                        for (r in G = new re(e, {}), Q) delete G[r];
                                    else if ("object" === q) {
                                        for (r in e) r in Q || (G[r] = e[r]);
                                        void 0 === G.slashes && (G.slashes = V.test(e.href))
                                    }
                                    return G
                                }

                                function ee(e) {
                                    return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e
                                }

                                function te(e, r) {
                                    e = (e = Y(e)).replace(q, ""), r = r || {};
                                    var n, H = W.exec(e),
                                        G = H[1] ? H[1].toLowerCase() : "",
                                        V = !!H[2],
                                        $ = !!H[3],
                                        X = 0;
                                    return V ? $ ? (n = H[2] + H[3] + H[4], X = H[2].length + H[3].length) : (n = H[2] + H[4], X = H[2].length) : $ ? (n = H[3] + H[4], X = H[3].length) : n = H[4], "file:" === G ? X >= 2 && (n = n.slice(2)) : ee(G) ? n = H[4] : G ? V && (n = n.slice(2)) : X >= 2 && ee(r.protocol) && (n = H[4]), {
                                        protocol: G,
                                        slashes: V || ee(G),
                                        slashesCount: X,
                                        rest: n
                                    }
                                }

                                function re(e, r, n) {
                                    if (e = (e = Y(e)).replace(q, ""), !(this instanceof re)) return new re(e, r, n);
                                    var V, W, X, Q, ne, oe, se = J.slice(),
                                        ie = typeof r,
                                        ae = this,
                                        ce = 0;
                                    for ("object" !== ie && "string" !== ie && (n = r, r = null), n && "function" != typeof n && (n = G.parse), V = !(W = te(e || "", r = Z(r))).protocol && !W.slashes, ae.slashes = W.slashes || V && r.slashes, ae.protocol = W.protocol || r.protocol || "", e = W.rest, ("file:" === W.protocol && (2 !== W.slashesCount || $.test(e)) || !W.slashes && (W.protocol || W.slashesCount < 2 || !ee(ae.protocol))) && (se[3] = [/(.*)/, "pathname"]); ce < se.length; ce++) "function" != typeof(Q = se[ce]) ? (X = Q[0], oe = Q[1], X != X ? ae[oe] = e : "string" == typeof X ? ~(ne = "@" === X ? e.lastIndexOf(X) : e.indexOf(X)) && ("number" == typeof Q[2] ? (ae[oe] = e.slice(0, ne), e = e.slice(ne + Q[2])) : (ae[oe] = e.slice(ne), e = e.slice(0, ne))) : (ne = X.exec(e)) && (ae[oe] = ne[1], e = e.slice(0, ne.index)), ae[oe] = ae[oe] || V && Q[3] && r[oe] || "", Q[4] && (ae[oe] = ae[oe].toLowerCase())) : e = Q(e, ae);
                                    n && (ae.query = n(ae.query)), V && r.slashes && "/" !== ae.pathname.charAt(0) && ("" !== ae.pathname || "" !== r.pathname) && (ae.pathname = function(e, r) {
                                        if ("" === e) return r;
                                        for (var n = (r || "/").split("/").slice(0, -1).concat(e.split("/")), H = n.length, G = n[H - 1], q = !1, V = 0; H--;) "." === n[H] ? n.splice(H, 1) : ".." === n[H] ? (n.splice(H, 1), V++) : V && (0 === H && (q = !0), n.splice(H, 1), V--);
                                        return q && n.unshift(""), "." !== G && ".." !== G || n.push(""), n.join("/")
                                    }(ae.pathname, r.pathname)), "/" !== ae.pathname.charAt(0) && ee(ae.protocol) && (ae.pathname = "/" + ae.pathname), H(ae.port, ae.protocol) || (ae.host = ae.hostname, ae.port = ""), ae.username = ae.password = "", ae.auth && (~(ne = ae.auth.indexOf(":")) ? (ae.username = ae.auth.slice(0, ne), ae.username = encodeURIComponent(decodeURIComponent(ae.username)), ae.password = ae.auth.slice(ne + 1), ae.password = encodeURIComponent(decodeURIComponent(ae.password))) : ae.username = encodeURIComponent(decodeURIComponent(ae.auth)), ae.auth = ae.password ? ae.username + ":" + ae.password : ae.username), ae.origin = "file:" !== ae.protocol && ee(ae.protocol) && ae.host ? ae.protocol + "//" + ae.host : "null", ae.href = ae.toString()
                                }
                                re.prototype = {
                                    set: function(e, r, n) {
                                        var q = this;
                                        switch (e) {
                                            case "query":
                                                "string" == typeof r && r.length && (r = (n || G.parse)(r)), q[e] = r;
                                                break;
                                            case "port":
                                                q[e] = r, H(r, q.protocol) ? r && (q.host = q.hostname + ":" + r) : (q.host = q.hostname, q[e] = "");
                                                break;
                                            case "hostname":
                                                q[e] = r, q.port && (r += ":" + q.port), q.host = r;
                                                break;
                                            case "host":
                                                q[e] = r, /:\d+$/.test(r) ? (r = r.split(":"), q.port = r.pop(), q.hostname = r.join(":")) : (q.hostname = r, q.port = "");
                                                break;
                                            case "protocol":
                                                q.protocol = r.toLowerCase(), q.slashes = !n;
                                                break;
                                            case "pathname":
                                            case "hash":
                                                if (r) {
                                                    var V = "pathname" === e ? "/" : "#";
                                                    q[e] = r.charAt(0) !== V ? V + r : r
                                                } else q[e] = r;
                                                break;
                                            case "username":
                                            case "password":
                                                q[e] = encodeURIComponent(r);
                                                break;
                                            case "auth":
                                                var W = r.indexOf(":");
                                                ~W ? (q.username = r.slice(0, W), q.username = encodeURIComponent(decodeURIComponent(q.username)), q.password = r.slice(W + 1), q.password = encodeURIComponent(decodeURIComponent(q.password))) : q.username = encodeURIComponent(decodeURIComponent(r))
                                        }
                                        for (var $ = 0; $ < J.length; $++) {
                                            var X = J[$];
                                            X[4] && (q[X[1]] = q[X[1]].toLowerCase())
                                        }
                                        return q.auth = q.password ? q.username + ":" + q.password : q.username, q.origin = "file:" !== q.protocol && ee(q.protocol) && q.host ? q.protocol + "//" + q.host : "null", q.href = q.toString(), q
                                    },
                                    toString: function(e) {
                                        e && "function" == typeof e || (e = G.stringify);
                                        var r, n = this,
                                            H = n.host,
                                            q = n.protocol;
                                        q && ":" !== q.charAt(q.length - 1) && (q += ":");
                                        var V = q + (n.protocol && n.slashes || ee(n.protocol) ? "//" : "");
                                        return n.username ? (V += n.username, n.password && (V += ":" + n.password), V += "@") : n.password ? (V += ":" + n.password, V += "@") : "file:" !== n.protocol && ee(n.protocol) && !H && "/" !== n.pathname && (V += "@"), ":" === H[H.length - 1] && (H += ":"), V += H + n.pathname, (r = "object" == typeof n.query ? e(n.query) : n.query) && (V += "?" !== r.charAt(0) ? "?" + r : r), n.hash && (V += n.hash), V
                                    }
                                }, re.extractProtocol = te, re.location = Z, re.trimLeft = Y, re.qs = G, e.exports = re
                            },
                            5922: (e, r, n) => {
                                var H = n(2486).Buffer;
                                const {
                                    default: G
                                } = n(1113), {
                                    setSendTransactionHeaders: q
                                } = n(5180);
                                e.exports = {
                                    Algod: function(e = "", r = "http://r2.algorand.network", n = 4180, V = {}) {
                                        let W = e;
                                        "string" == typeof W && (W = {
                                            "X-Algo-API-Token": W
                                        });
                                        const $ = new G(W, r, n, V);

                                        function X(e) {
                                            return void 0 !== e.noteb64 && null !== e.noteb64 && (e.note = H.from(e.noteb64, "base64")), e
                                        }
                                        this.status = async (e = {}) => (await $.get("/v1/status", {}, e)).body, this.healthCheck = async (e = {}) => {
                                            const r = await $.get("/health", {}, e);
                                            if (!r.ok) throw new Error("Health response: " + r.status);
                                            return {}
                                        }, this.statusAfterBlock = async (e, r = {}) => {
                                            if (!Number.isInteger(e)) throw Error("roundNumber should be an integer");
                                            return (await $.get("/v1/status/wait-for-block-after/" + e, {}, r)).body
                                        }, this.pendingTransactions = async (e, r = {}) => {
                                            if (!Number.isInteger(e)) throw Error("maxTxns should be an integer");
                                            const n = await $.get("/v1/transactions/pending", {
                                                max: e
                                            }, r);
                                            if (200 === n.statusCode && void 0 !== n.body.truncatedTxns.transactions)
                                                for (let e = 0; e < n.body.truncatedTxns.transactions.length; e++) n.body.truncatedTxns.transactions[e] = X(n.body.truncatedTxns.transactions[e]);
                                            return n.body
                                        }, this.versions = async (e = {}) => (await $.get("/versions", {}, e)).body, this.ledgerSupply = async (e = {}) => (await $.get("/v1/ledger/supply", {}, e)).body, this.transactionByAddress = async (e, r = null, n = null, H = null, G = {}) => {
                                            if (null !== r && !Number.isInteger(r)) throw Error("first round should be an integer");
                                            if (null !== n && !Number.isInteger(n)) throw Error("last round should be an integer");
                                            const q = await $.get(`/v1/account/${e}/transactions`, {
                                                firstRound: r,
                                                lastRound: n,
                                                max: H
                                            }, G);
                                            if (200 === q.statusCode && void 0 !== q.body.transactions)
                                                for (let e = 0; e < q.body.transactions.length; e++) q.body.transactions[e] = X(q.body.transactions[e]);
                                            return q.body
                                        }, this.transactionByAddressAndDate = async (e, r, n, H = null, G = {}) => {
                                            const q = await $.get(`/v1/account/${e}/transactions`, {
                                                fromDate: r,
                                                toDate: n,
                                                max: H
                                            }, G);
                                            if (200 === q.statusCode && void 0 !== q.body.transactions)
                                                for (let e = 0; e < q.body.transactions.length; e++) q.body.transactions[e] = X(q.body.transactions[e]);
                                            return q.body
                                        }, this.transactionById = async (e, r = {}) => {
                                            const n = await $.get("/v1/transaction/" + e, {}, r);
                                            return 200 === n.statusCode && (n.body = X(n.body)), n.body
                                        }, this.transactionInformation = async (e, r, n = {}) => {
                                            const H = await $.get(`/v1/account/${e}/transaction/${r}`, {}, n);
                                            return 200 === H.statusCode && (H.body = X(H.body)), H.body
                                        }, this.pendingTransactionInformation = async (e, r = {}) => {
                                            const n = await $.get("/v1/transactions/pending/" + e, {}, r);
                                            return 200 === n.statusCode && (n.body = X(n.body)), n.body
                                        }, this.accountInformation = async (e, r = {}) => (await $.get("/v1/account/" + e, {}, r)).body, this.assetInformation = async (e, r = {}) => (await $.get("/v1/asset/" + e, {}, r)).body, this.suggestedFee = async (e = {}) => (await $.get("/v1/transactions/fee", {}, e)).body, this.sendRawTransaction = async (e, r = {}) => {
                                            const n = q(r);
                                            return (await $.post("/v1/transactions", H.from(e), n)).body
                                        }, this.sendRawTransactions = async (e, r = {}) => {
                                            const n = q(r),
                                                G = Array.prototype.concat(...e.map(e => Array.from(e)));
                                            return (await $.post("/v1/transactions", H.from(G), n)).body
                                        }, this.getTransactionParams = async (e = {}) => (await $.get("/v1/transactions/params", {}, e)).body, this.suggestParams = async (e = {}) => {
                                            const r = await this.getTransactionParams(e);
                                            return {
                                                flatFee: !1,
                                                fee: r.fee,
                                                firstRound: r.lastRound,
                                                lastRound: r.lastRound + 1e3,
                                                genesisID: r.genesisID,
                                                genesisHash: r.genesishashb64
                                            }
                                        }, this.block = async (e, r = {}) => {
                                            if (!Number.isInteger(e)) throw Error("roundNumber should be an integer");
                                            const n = await $.get("/v1/block/" + e, {}, r);
                                            if (200 === n.statusCode && void 0 !== n.body.txns.transactions)
                                                for (let e = 0; e < n.body.txns.transactions.length; e++) n.body.txns.transactions[e] = X(n.body.txns.transactions[e]);
                                            return n.body
                                        }
                                    }
                                }
                            },
                            1834: (e, r, n) => {
                                var H = n(2486).Buffer;
                                const G = n(7116),
                                    q = n(3033),
                                    V = n(1063),
                                    W = n(5583),
                                    $ = n(8800),
                                    X = n(9404),
                                    Y = n(2514),
                                    J = n(9417);
                                e.exports = {
                                    DynamicFee: class {
                                        constructor(e, r, n, q, V, W) {
                                            if (!Number.isSafeInteger(r) || r < 0) throw Error("amount must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger(n) || n < 0) throw Error("firstValid must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger(q) || q < 0) throw Error("lastValid must be a positive number and smaller than 2^53-1");
                                            if (void 0 === V && (V = G.ALGORAND_ZERO_ADDRESS_STRING), void 0 === W) {
                                                const e = X.randomBytes(32);
                                                W = H.from(e).toString("base64")
                                            }
                                            const J = H.from("ASAFAgEHBgUmAyD+vKC7FEpaTqe0OKRoGsgObKEFvLYH/FZTJclWlfaiEyDmmpYeby1feshmB5JlUr6YI17TM2PKiJGLuck4qRW2+SB/g7Flf/H8U7ktwYFIodZd/C1LH6PWdyhK3dIAEm2QaTIEIhIzABAjEhAzAAcxABIQMwAIMQESEDEWIxIQMRAjEhAxBygSEDEJKRIQMQgkEhAxAiUSEDEEIQQSEDEGKhIQ", "base64"),
                                                Q = [r, n, q, e, V, W],
                                                Z = [Y.valTypes.INT, Y.valTypes.INT, Y.valTypes.INT, Y.valTypes.ADDRESS, Y.valTypes.ADDRESS, Y.valTypes.BASE64],
                                                ee = Y.inject(J, [5, 6, 7, 11, 44, 76], Q, Z);
                                            this.programBytes = ee;
                                            const te = new $.LogicSig(ee, void 0);
                                            this.address = te.address()
                                        }
                                        getProgram() {
                                            return this.programBytes
                                        }
                                        getAddress() {
                                            return this.address
                                        }
                                    },
                                    getDynamicFeeTransactions: function(e, r, n, H) {
                                        if (!r.verify(G.decodeAddress(e.from).publicKey)) throw new Error("invalid signature");
                                        e.fee = H, e.fee < J.ALGORAND_MIN_TX_FEE && (e.fee = J.ALGORAND_MIN_TX_FEE);
                                        const W = X.keyPairFromSecretKey(n),
                                            $ = G.encodeAddress(W.publicKey),
                                            {
                                                lease: Y
                                            } = e;
                                        delete e.lease;
                                        const Q = new J.Transaction(e);
                                        Q.addLease(Y, H);
                                        const Z = {
                                                from: $,
                                                to: e.from,
                                                fee: H,
                                                amount: Q.fee,
                                                firstRound: e.firstRound,
                                                lastRound: e.lastRound,
                                                genesisHash: e.genesisHash,
                                                type: "pay"
                                            },
                                            ee = new J.Transaction(Z);
                                        ee.addLease(Y, H);
                                        const te = V.assignGroupID([ee, Q], void 0),
                                            re = te[0],
                                            ne = te[1],
                                            oe = {
                                                lsig: r.get_obj_for_encoding(),
                                                txn: ne.get_obj_for_encoding()
                                            },
                                            se = re.signTxn(n),
                                            ie = q.encode(oe),
                                            ae = new Uint8Array(se.length + ie.length);
                                        return ae.set(se), ae.set(ie, se.length), ae
                                    },
                                    signDynamicFee: function(e, r, n) {
                                        const H = W.readProgram(e, void 0),
                                            q = H[0],
                                            V = H[1],
                                            Y = X.keyPairFromSecretKey(r),
                                            J = {
                                                from: G.encodeAddress(Y.publicKey),
                                                to: G.encodeAddress(V[0]),
                                                fee: 0,
                                                amount: q[2],
                                                closeRemainderTo: G.encodeAddress(V[1]),
                                                firstRound: q[3],
                                                lastRound: q[4],
                                                genesisHash: n,
                                                type: "pay",
                                                lease: new Uint8Array(V[2])
                                            },
                                            Q = new $.LogicSig(e, void 0);
                                        return Q.sign(r), {
                                            txn: J,
                                            lsig: Q
                                        }
                                    }
                                }
                            },
                            1786: (e, r, n) => {
                                var H = n(2486).Buffer;
                                const G = n(3477),
                                    {
                                        keccak256: q
                                    } = n(583),
                                    V = n(5583),
                                    W = n(8800),
                                    $ = n(2514),
                                    X = n(9417);
                                e.exports = {
                                    HTLC: class {
                                        constructor(e, r, n, G, q, V) {
                                            if (!Number.isSafeInteger(q) || q < 0) throw Error("expiryRound must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger(V) || V < 0) throw Error("maxFee must be a positive number and smaller than 2^53-1");
                                            let X = "";
                                            if ("sha256" === n) X = "ASAECAEACSYDIOaalh5vLV96yGYHkmVSvpgjXtMzY8qIkYu5yTipFbb5IH+DsWV/8fxTuS3BgUih1l38LUsfo9Z3KErd0gASbZBpIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMQEiDjEQIxIQMQcyAxIQMQgkEhAxCSgSLQEpEhAxCSoSMQIlDRAREA==";
                                            else {
                                                if ("keccak256" !== n) throw Error("hash function unrecognized");
                                                X = "ASAECAEACSYDIOaalh5vLV96yGYHkmVSvpgjXtMzY8qIkYu5yTipFbb5IH+DsWV/8fxTuS3BgUih1l38LUsfo9Z3KErd0gASbZBpIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMQEiDjEQIxIQMQcyAxIQMQgkEhAxCSgSLQIpEhAxCSoSMQIlDRAREA=="
                                            }
                                            if (32 !== H.from(G, "base64").length) throw Error("hash image must be 32 bytes");
                                            const Y = H.from(X, "base64"),
                                                J = [V, q, r, G, e],
                                                Q = [$.valTypes.INT, $.valTypes.INT, $.valTypes.ADDRESS, $.valTypes.BASE64, $.valTypes.ADDRESS],
                                                Z = $.inject(Y, [3, 6, 10, 42, 76], J, Q);
                                            this.programBytes = Z;
                                            const ee = new W.LogicSig(Z, void 0);
                                            this.address = ee.address()
                                        }
                                        getProgram() {
                                            return this.programBytes
                                        }
                                        getAddress() {
                                            return this.address
                                        }
                                    },
                                    signTransactionWithHTLCUnlock: function(e, r, n) {
                                        const $ = H.from(n, "base64"),
                                            Y = V.readProgram(e, void 0),
                                            J = Y[0],
                                            Q = Y[1][1],
                                            Z = e[e.length - 15];
                                        if (1 === Z) {
                                            const e = G.create();
                                            if (e.update($), !H.from(e.hex(), "hex").equals(Q)) throw new Error("sha256 hash of preimage did not match stored contract hash")
                                        } else {
                                            if (2 !== Z) throw new Error("hash function in contract unrecognized");
                                            {
                                                const e = q.create();
                                                if (e.update($), !H.from(e.hex(), "hex").equals(Q)) throw new Error("keccak256 hash of preimage did not match stored contract hash")
                                            }
                                        }
                                        const ee = [$],
                                            te = new W.LogicSig(e, ee);
                                        delete r.to;
                                        const re = J[0],
                                            ne = new X.Transaction(r);
                                        if (ne.fee > re) throw new Error(`final fee of payment transaction${ne.fee.toString()}greater than transaction max fee${re.toString()}`);
                                        return W.signLogicSigTransaction(r, te)
                                    }
                                }
                            },
                            8886: (e, r, n) => {
                                const H = n(1834),
                                    G = n(1786),
                                    q = n(4748),
                                    V = n(3758),
                                    W = n(2200);
                                e.exports = {
                                    DynamicFee: H.DynamicFee,
                                    getDynamicFeeTransactions: H.getDynamicFeeTransactions,
                                    signDynamicFee: H.signDynamicFee,
                                    HTLC: G.HTLC,
                                    signTransactionWithHTLCUnlock: G.signTransactionWithHTLCUnlock,
                                    LimitOrder: q.LimitOrder,
                                    getSwapAssetsTransaction: q.getSwapAssetsTransaction,
                                    Split: V.Split,
                                    getSplitFundsTransaction: V.getSplitFundsTransaction,
                                    PeriodicPayment: W.PeriodicPayment,
                                    getPeriodicPaymentWithdrawalTransaction: W.getPeriodicPaymentWithdrawalTransaction
                                }
                            },
                            4748: (e, r, n) => {
                                var H = n(2486).Buffer;
                                const G = n(7116),
                                    q = n(1988),
                                    V = n(1063),
                                    W = n(5583),
                                    $ = n(8800),
                                    X = n(9404),
                                    Y = n(2514),
                                    J = n(413);
                                e.exports = {
                                    LimitOrder: class {
                                        constructor(e, r, n, G, q, V, W) {
                                            if (!Number.isSafeInteger(r) || r < 0) throw Error("assetid must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger(n) || n < 0) throw Error("ratn must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger(G) || G < 0) throw Error("ratd must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger(q) || q < 0) throw Error("expiryRound must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger(V) || V < 0) throw Error("minTrade must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger(W) || W < 0) throw Error("maxFee must be a positive number and smaller than 2^53-1");
                                            const X = H.from("ASAKAAEFAgYEBwgJCiYBIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMRYiEjEQIxIQMQEkDhAyBCMSQABVMgQlEjEIIQQNEDEJMgMSEDMBECEFEhAzAREhBhIQMwEUKBIQMwETMgMSEDMBEiEHHTUCNQExCCEIHTUENQM0ATQDDUAAJDQBNAMSNAI0BA8QQAAWADEJKBIxAiEJDRAxBzIDEhAxCCISEBA=", "base64"),
                                                J = [W, V, r, G, n, q, e],
                                                Q = [Y.valTypes.INT, Y.valTypes.INT, Y.valTypes.INT, Y.valTypes.INT, Y.valTypes.INT, Y.valTypes.INT, Y.valTypes.ADDRESS],
                                                Z = Y.inject(X, [5, 7, 9, 10, 11, 12, 16], J, Q);
                                            this.programBytes = Z;
                                            const ee = new $.LogicSig(Z, void 0);
                                            this.address = ee.address(), this.owner = e, this.assetid = r
                                        }
                                        getProgram() {
                                            return this.programBytes
                                        }
                                        getAddress() {
                                            return this.address
                                        }
                                    },
                                    getSwapAssetsTransaction: function(e, r, n, H, Y, Q, Z, ee) {
                                        const te = X.keyPairFromSecretKey(H),
                                            re = G.encodeAddress(te.publicKey),
                                            ne = W.readProgram(e, void 0),
                                            oe = ne[0],
                                            se = ne[1];
                                        let ie;
                                        const ae = oe[6],
                                            ce = G.encodeAddress(se[0]),
                                            ue = $.makeLogicSig(e, void 0),
                                            le = ue.address(),
                                            he = [q.makePaymentTxn(le, re, Y, n, ie, Q, Z, void 0, ee, void 0), q.makeAssetTransferTxn(re, ce, ie, void 0, Y, r, Q, Z, void 0, ee, void 0, ae)],
                                            pe = V.assignGroupID(he),
                                            fe = oe[7],
                                            de = oe[8];
                                        if (r * fe < n * de) throw new Error(`bad payment ratio, ${r.toString()}*${fe.toString()} !>= ${n.toString()}*${de.toString()}`);
                                        const ge = oe[4];
                                        if (n < ge) throw new Error(`payment amount ${n.toString()} less than minimum trade ${ge.toString()}`);
                                        const ye = oe[2];
                                        if (pe[0].fee > ye) throw new Error(`final fee of payment transaction ${pe[0].fee.toString()} greater than transaction max fee ${ye.toString()}`);
                                        if (pe[1].fee > ye) throw new Error(`final fee of asset transaction ${pe[1].fee.toString()} greater than transaction max fee ${ye.toString()}`);
                                        const me = $.signLogicSigTransactionObject(pe[0], ue),
                                            be = pe[1].signTxn(H);
                                        return J.concatArrays(me.blob, be)
                                    }
                                }
                            },
                            2200: (e, r, n) => {
                                var H = n(2486).Buffer;
                                const G = n(7116),
                                    q = n(1988),
                                    V = n(5583),
                                    W = n(8800),
                                    $ = n(9404),
                                    X = n(2514);
                                e.exports = {
                                    PeriodicPayment: class {
                                        constructor(e, r, n, G, q, V, X) {
                                            if (this.receiver = e, !Number.isSafeInteger(r) || r < 0) throw Error("amount must be a positive number and smaller than 2^53-1");
                                            if (this.amount = r, !Number.isSafeInteger(n) || n < 0) throw Error("withdrawalWindow must be a positive number and smaller than 2^53-1");
                                            if (this.withdrawalWindow = n, !Number.isSafeInteger(G) || G < 0) throw Error("period must be a positive number and smaller than 2^53-1");
                                            if (this.period = G, !Number.isSafeInteger(q) || q < 0) throw Error("expiryRound must be a positive number and smaller than 2^53-1");
                                            if (this.expiryRound = q, !Number.isSafeInteger(V) || V < 0) throw Error("maxFee must be a positive number and smaller than 2^53-1");
                                            if (this.maxFee = V, void 0 === X) {
                                                const e = $.randomBytes(32);
                                                this.lease = H.from(e).toString("base64")
                                            } else this.lease = X;
                                            this.programBytes = this.getProgram();
                                            const Y = new W.LogicSig(this.programBytes, void 0);
                                            this.address = Y.address()
                                        }
                                        getProgram() {
                                            const e = H.from("ASAHAQYFAAQDByYCIAECAwQFBgcIAQIDBAUGBwgBAgMEBQYHCAECAwQFBgcIIJKvkYTkEzwJf2arzJOxERsSogG9nQzKPkpIoc4TzPTFMRAiEjEBIw4QMQIkGCUSEDEEIQQxAggSEDEGKBIQMQkyAxIxBykSEDEIIQUSEDEJKRIxBzIDEhAxAiEGDRAxCCUSEBEQ", "base64"),
                                                r = [this.maxFee, this.period, this.withdrawalWindow, this.amount, this.expiryRound, this.lease, this.receiver],
                                                n = [X.valTypes.INT, X.valTypes.INT, X.valTypes.INT, X.valTypes.INT, X.valTypes.INT, X.valTypes.BASE64, X.valTypes.ADDRESS];
                                            return X.inject(e, [4, 5, 7, 8, 9, 12, 46], r, n)
                                        }
                                        getAddress() {
                                            return this.address
                                        }
                                    },
                                    getPeriodicPaymentWithdrawalTransaction: function(e, r, n, H) {
                                        const $ = V.readProgram(e, void 0),
                                            X = $[0],
                                            Y = $[1],
                                            J = X[2],
                                            Q = X[4],
                                            Z = X[5];
                                        if (n % J != 0) throw new Error(`firstValid round ${n.toString()} was not a multiple of contract period ${J.toString()}`);
                                        const ee = Y[1],
                                            te = G.encodeAddress(ee),
                                            re = Y[0],
                                            ne = new Uint8Array(re),
                                            oe = n + Q,
                                            se = te;
                                        let ie, ae;
                                        const ce = W.makeLogicSig(e, void 0),
                                            ue = ce.address(),
                                            le = {
                                                from: ue,
                                                to: se,
                                                fee: r,
                                                amount: Z,
                                                closeRemainderTo: ie,
                                                firstRound: n,
                                                lastRound: oe,
                                                note: ae,
                                                genesisHash: H,
                                                genesisID: "",
                                                type: "pay",
                                                lease: ne
                                            },
                                            he = q.makePaymentTxn(ue, se, r, Z, ie, n, oe, ae, H, "");
                                        if (he.fee > X[1]) throw new Error(`final fee of payment transaction${he.fee.toString()}greater than transaction max fee${X[1].toString()}`);
                                        return W.signLogicSigTransaction(le, ce)
                                    }
                                }
                            },
                            3758: (e, r, n) => {
                                var H = n(2486).Buffer;
                                const G = n(7116),
                                    q = n(1988),
                                    V = n(1063),
                                    W = n(8800),
                                    $ = n(5583),
                                    X = n(2514),
                                    Y = n(413);
                                e.exports = {
                                    Split: class {
                                        constructor(e, r, n, G, q, V, $, Y) {
                                            if (!Number.isSafeInteger(q) || q < 0) throw Error("rat2 must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger(G) || G < 0) throw Error("rat1 must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger(V) || V < 0) throw Error("expiryRound must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger($) || $ < 0) throw Error("minPay must be a positive number and smaller than 2^53-1");
                                            if (!Number.isSafeInteger(Y) || Y < 0) throw Error("maxFee must be a positive number and smaller than 2^53-1");
                                            const J = H.from("ASAIAQUCAAYHCAkmAyCztwQn0+DycN+vsk+vJWcsoz/b7NDS6i33HOkvTpf+YiC3qUpIgHGWE8/1LPh9SGCalSN7IaITeeWSXbfsS5wsXyC4kBQ38Z8zcwWVAym4S8vpFB/c0XC6R4mnPi9EBADsPDEQIhIxASMMEDIEJBJAABkxCSgSMQcyAxIQMQglEhAxAiEEDRAiQAAuMwAAMwEAEjEJMgMSEDMABykSEDMBByoSEDMACCEFCzMBCCEGCxIQMwAIIQcPEBA=", "base64"),
                                                Q = [Y, V, q, G, $, e, r, n],
                                                Z = [X.valTypes.INT, X.valTypes.INT, X.valTypes.INT, X.valTypes.INT, X.valTypes.INT, X.valTypes.ADDRESS, X.valTypes.ADDRESS, X.valTypes.ADDRESS],
                                                ee = X.inject(J, [4, 7, 8, 9, 10, 14, 47, 80], Q, Z);
                                            this.programBytes = ee;
                                            const te = W.makeLogicSig(ee, void 0);
                                            this.address = te.address()
                                        }
                                        getProgram() {
                                            return this.programBytes
                                        }
                                        getAddress() {
                                            return this.address
                                        }
                                    },
                                    getSplitFundsTransaction: function(e, r, n, H, X, J) {
                                        const Q = $.readProgram(e, void 0),
                                            Z = Q[0],
                                            ee = Q[1];
                                        let te = Z[6],
                                            re = Z[5],
                                            ne = 0;
                                        const oe = (e, r) => {
                                                if ("number" != typeof e || "number" != typeof r) throw new Error("gcd operates only on positive integers");
                                                return r ? oe(r, e % r) : e
                                            },
                                            se = oe(te, re);
                                        te = Math.floor(te / se), re = Math.floor(re / se);
                                        const ie = re / te;
                                        ne = Math.round(r / (1 + ie));
                                        const ae = r - ne;
                                        if (re * ne != te * ae) throw Error("could not split funds in a way that satisfied the contract ratio");
                                        const ce = W.makeLogicSig(e, void 0).address(),
                                            ue = G.encodeAddress(ee[1]),
                                            le = G.encodeAddress(ee[2]),
                                            he = [q.makePaymentTxn(ce, ue, X, ne, void 0, n, H, void 0, J), q.makePaymentTxn(ce, le, X, ae, void 0, n, H, void 0, J)],
                                            pe = V.assignGroupID(he).map(e => W.signLogicSigTransactionObject(e, W).blob);
                                        return Y.concatArrays(pe[0], pe[1])
                                    }
                                }
                            },
                            2514: (e, r, n) => {
                                var H = n(2486).Buffer;
                                const G = n(7116);

                                function q(e, r) {
                                    let n = 0;
                                    for (; r > 128;) e.push(255 & r | 128), r >>= 7, n += 1;
                                    return e.push(255 & r), n + 1
                                }
                                const V = {
                                    INT: 1,
                                    ADDRESS: 2,
                                    BASE64: 3
                                };
                                e.exports = {
                                    inject: function(e, r, n, W) {
                                        if (r.length !== n.length || r.length !== W.length) throw new Error("Lengths do not match");
                                        let $ = e;

                                        function X(e, r, n, G) {
                                            const q = e.slice(0, n),
                                                V = e.slice(n + G, e.length),
                                                W = [q, H.from(r), V];
                                            return H.concat(W)
                                        }
                                        for (let e = 0; e < r.length; e++) {
                                            let Y = 0,
                                                J = n[e];
                                            switch (W[e]) {
                                                case V.INT:
                                                    const n = [];
                                                    Y = q(n, J), $ = X($, n, r[e], 1);
                                                    break;
                                                case V.ADDRESS:
                                                    J = G.decodeAddress(J), $ = X($, J.publicKey, r[e], 32);
                                                    break;
                                                case V.BASE64:
                                                    const W = [];
                                                    J = H.from(J, "base64"), q(W, J.length), J = H.concat([H.from(W), J]), $ = X($, J, r[e], 33);
                                                    break;
                                                default:
                                                    throw new Error("unrecognized value type")
                                            }
                                            if (0 !== Y)
                                                for (let e = 0; e < r.length; e++) r[e] += Y - 1
                                        }
                                        return $
                                    },
                                    valTypes: V
                                }
                            },
                            7677: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    JQ: () => m,
                                    _4: () => x,
                                    X3: () => v,
                                    R0: () => b,
                                    jD: () => A,
                                    Yh: () => O,
                                    bL: () => D,
                                    Ls: () => R,
                                    UV: () => ne,
                                    Ax: () => w,
                                    A9: () => re,
                                    w1: () => S,
                                    NK: () => d,
                                    RY: () => y,
                                    Pu: () => g,
                                    Vk: () => $,
                                    nh: () => J,
                                    kG: () => W,
                                    qH: () => Y,
                                    JH: () => X,
                                    vJ: () => ie,
                                    o5: () => ae,
                                    AE: () => se
                                });
                                var H = n(7116),
                                    G = n(8922),
                                    q = n(413),
                                    V = n(2486).Buffer;
                                const W = 65535,
                                    $ = 32,
                                    X = 1,
                                    Y = 1,
                                    J = 2,
                                    Q = /^([a-z\d[\](),]+)\[([1-9][\d]*)]$/,
                                    Z = /^ufixed([1-9][\d]*)x([1-9][\d]*)$/;
                                class d {
                                    static from(e) {
                                        if (e.endsWith("[]")) {
                                            const r = d.from(e.slice(0, e.length - 2));
                                            return new x(r)
                                        }
                                        if (e.endsWith("]")) {
                                            const r = e.match(Q);
                                            if (3 !== r.length) throw new Error("malformed static array string: " + e);
                                            const n = r[2],
                                                H = parseInt(n, 10);
                                            if (H > W) throw new Error("array length exceeds limit " + W);
                                            const G = d.from(r[1]);
                                            return new v(G, H)
                                        }
                                        if (e.startsWith("uint")) {
                                            const r = e => [...e].every(e => "0123456789".includes(e)),
                                                n = e.slice(4, e.length);
                                            if (!r(n)) throw new Error("malformed uint string: " + n);
                                            const H = parseInt(n, 10);
                                            if (H > W) throw new Error("malformed uint string: " + H);
                                            return new g(H)
                                        }
                                        if ("byte" === e) return new A;
                                        if (e.startsWith("ufixed")) {
                                            const r = e.match(Z);
                                            if (3 !== r.length) throw new Error("malformed ufixed type: " + e);
                                            const n = parseInt(r[1], 10),
                                                H = parseInt(r[2], 10);
                                            return new y(n, H)
                                        }
                                        if ("bool" === e) return new b;
                                        if ("address" === e) return new m;
                                        if ("string" === e) return new w;
                                        if (e.length >= 2 && "(" === e[0] && ")" === e[e.length - 1]) {
                                            const r = S.parseTupleContent(e.slice(1, e.length - 1)),
                                                n = [];
                                            for (let e = 0; e < r.length; e++) {
                                                const H = d.from(r[e]);
                                                n.push(H)
                                            }
                                            return new S(n)
                                        }
                                        throw new Error(`cannot convert a string ${e} to an ABI type`)
                                    }
                                }
                                class g extends d {
                                    constructor(e) {
                                        if (super(), e % 8 != 0 || e < 8 || e > 512) throw new Error("unsupported uint type bitSize: " + e);
                                        this.bitSize = e
                                    }
                                    toString() {
                                        return "uint" + this.bitSize
                                    }
                                    equals(e) {
                                        return e instanceof g && this.bitSize === e.bitSize
                                    }
                                    isDynamic() {
                                        return !1
                                    }
                                    byteLen() {
                                        return this.bitSize / 8
                                    }
                                    encode(e) {
                                        if ("bigint" != typeof e && "number" != typeof e) throw new Error(`Cannot encode value as uint${this.bitSize}: ${e}`);
                                        if (e >= BigInt(2 ** this.bitSize) || e < BigInt(0)) throw new Error(`${e} is not a non-negative int or too big to fit in size uint${this.bitSize}`);
                                        if ("number" == typeof e && !Number.isSafeInteger(e)) throw new Error(e + " should be converted into a BigInt before it is encoded");
                                        return (0, G.j)(e, this.bitSize / 8)
                                    }
                                    decode(e) {
                                        if (e.length !== this.bitSize / 8) throw new Error("byte string must correspond to a uint" + this.bitSize);
                                        return (0, G.v)(e)
                                    }
                                }
                                class y extends d {
                                    constructor(e, r) {
                                        if (super(), e % 8 != 0 || e < 8 || e > 512) throw new Error("unsupported ufixed type bitSize: " + e);
                                        if (r > 160 || r < 1) throw new Error("unsupported ufixed type precision: " + r);
                                        this.bitSize = e, this.precision = r
                                    }
                                    toString() {
                                        return `ufixed${this.bitSize}x${this.precision}`
                                    }
                                    equals(e) {
                                        return e instanceof y && this.bitSize === e.bitSize && this.precision === e.precision
                                    }
                                    isDynamic() {
                                        return !1
                                    }
                                    byteLen() {
                                        return this.bitSize / 8
                                    }
                                    encode(e) {
                                        if ("bigint" != typeof e && "number" != typeof e) throw new Error(`Cannot encode value as ${this.toString()}: ${e}`);
                                        if (e >= BigInt(2 ** this.bitSize) || e < BigInt(0)) throw new Error(`${e} is not a non-negative int or too big to fit in size ${this.toString()}`);
                                        if ("number" == typeof e && !Number.isSafeInteger(e)) throw new Error(e + " should be converted into a BigInt before it is encoded");
                                        return (0, G.j)(e, this.bitSize / 8)
                                    }
                                    decode(e) {
                                        if (e.length !== this.bitSize / 8) throw new Error("byte string must correspond to a " + this.toString());
                                        return (0, G.v)(e)
                                    }
                                }
                                class m extends d {
                                    toString() {
                                        return "address"
                                    }
                                    equals(e) {
                                        return e instanceof m
                                    }
                                    isDynamic() {
                                        return !1
                                    }
                                    byteLen() {
                                        return $
                                    }
                                    encode(e) {
                                        if ("string" != typeof e && !(e instanceof Uint8Array)) throw new Error(`Cannot encode value as ${this.toString()}: ${e}`);
                                        if ("string" == typeof e) return (0, H.decodeAddress)(e).publicKey;
                                        if (32 !== e.byteLength) throw new Error("byte string must be 32 bytes long for an address");
                                        return e
                                    }
                                    decode(e) {
                                        if (32 !== e.byteLength) throw new Error("byte string must be 32 bytes long for an address");
                                        return (0, H.encodeAddress)(e)
                                    }
                                }
                                class b extends d {
                                    toString() {
                                        return "bool"
                                    }
                                    equals(e) {
                                        return e instanceof b
                                    }
                                    isDynamic() {
                                        return !1
                                    }
                                    byteLen() {
                                        return Y
                                    }
                                    encode(e) {
                                        if ("boolean" != typeof e) throw new Error("Cannot encode value as bool: " + e);
                                        return e ? new Uint8Array([128]) : new Uint8Array([0])
                                    }
                                    decode(e) {
                                        if (1 !== e.byteLength) throw new Error("bool string must be 1 byte long");
                                        const r = e[0];
                                        if (128 === r) return !0;
                                        if (0 === r) return !1;
                                        throw new Error("boolean could not be decoded from the byte string")
                                    }
                                }
                                class A extends d {
                                    toString() {
                                        return "byte"
                                    }
                                    equals(e) {
                                        return e instanceof A
                                    }
                                    isDynamic() {
                                        return !1
                                    }
                                    byteLen() {
                                        return X
                                    }
                                    encode(e) {
                                        if ("number" != typeof e && "bigint" != typeof e) throw new Error("Cannot encode value as byte: " + e);
                                        if ("bigint" == typeof e && (e = Number(e)), e < 0 || e > 255) throw new Error(e + " cannot be encoded into a byte");
                                        return new Uint8Array([e])
                                    }
                                    decode(e) {
                                        if (1 !== e.byteLength) throw new Error("byte string must be 1 byte long");
                                        return e[0]
                                    }
                                }
                                class w extends d {
                                    toString() {
                                        return "string"
                                    }
                                    equals(e) {
                                        return e instanceof w
                                    }
                                    isDynamic() {
                                        return !0
                                    }
                                    byteLen() {
                                        throw new Error(this.toString() + " is a dynamic type")
                                    }
                                    encode(e) {
                                        if ("string" != typeof e && !(e instanceof Uint8Array)) throw new Error("Cannot encode value as string: " + e);
                                        const r = V.from(e),
                                            n = (0, G.j)(e.length, J),
                                            H = new Uint8Array(e.length + J);
                                        return H.set(n), H.set(r, J), H
                                    }
                                    decode(e) {
                                        if (e.length < J) throw new Error(`byte string is too short to be decoded. Actual length is ${e.length}, but expected at least ${J}`);
                                        const r = V.from(e).readUIntBE(0, J),
                                            n = e.slice(J, e.length);
                                        if (r !== n.length) throw new Error(`string length bytes do not match the actual length of string. Expected ${r}, got ${n.length}`);
                                        return V.from(n).toString("utf-8")
                                    }
                                }
                                class v extends d {
                                    constructor(e, r) {
                                        if (super(), r < 1) throw new Error("static array must have a length greater than 0: " + r);
                                        this.childType = e, this.staticLength = r
                                    }
                                    toString() {
                                        return `${this.childType.toString()}[${this.staticLength}]`
                                    }
                                    equals(e) {
                                        return e instanceof v && this.staticLength === e.staticLength && this.childType.equals(e.childType)
                                    }
                                    isDynamic() {
                                        return this.childType.isDynamic()
                                    }
                                    byteLen() {
                                        return this.childType.constructor === b ? Math.ceil(this.staticLength / 8) : this.staticLength * this.childType.byteLen()
                                    }
                                    encode(e) {
                                        if (!(Array.isArray(e) || e instanceof Uint8Array)) throw new Error(`Cannot encode value as ${this.toString()}: ${e}`);
                                        if (e.length !== this.staticLength) throw new Error(`Value array does not match static array length. Expected ${this.staticLength}, got ${e.length}`);
                                        return this.toABITupleType().encode(e)
                                    }
                                    decode(e) {
                                        return this.toABITupleType().decode(e)
                                    }
                                    toABITupleType() {
                                        return new S(Array(this.staticLength).fill(this.childType))
                                    }
                                }
                                class x extends d {
                                    constructor(e) {
                                        super(), this.childType = e
                                    }
                                    toString() {
                                        return this.childType.toString() + "[]"
                                    }
                                    equals(e) {
                                        return e instanceof x && this.childType.equals(e.childType)
                                    }
                                    isDynamic() {
                                        return !0
                                    }
                                    byteLen() {
                                        throw new Error(this.toString() + " is a dynamic type")
                                    }
                                    encode(e) {
                                        if (!(Array.isArray(e) || e instanceof Uint8Array)) throw new Error(`Cannot encode value as ${this.toString()}: ${e}`);
                                        const r = this.toABITupleType(e.length),
                                            n = r.encode(e),
                                            H = (0, G.j)(r.childTypes.length, J);
                                        return (0, q.concatArrays)(H, n)
                                    }
                                    decode(e) {
                                        const r = V.from(e).readUIntBE(0, J);
                                        return this.toABITupleType(r).decode(e.slice(J, e.length))
                                    }
                                    toABITupleType(e) {
                                        return new S(Array(e).fill(this.childType))
                                    }
                                }
                                class S extends d {
                                    constructor(e) {
                                        if (super(), e.length >= W) throw new Error("tuple type child type number larger than maximum uint16 error");
                                        this.childTypes = e
                                    }
                                    toString() {
                                        const e = [];
                                        for (let r = 0; r < this.childTypes.length; r++) e[r] = this.childTypes[r].toString();
                                        return `(${e.join(",")})`
                                    }
                                    equals(e) {
                                        return e instanceof S && this.childTypes.length === e.childTypes.length && this.childTypes.every((r, n) => r.equals(e.childTypes[n]))
                                    }
                                    isDynamic() {
                                        return this.childTypes.some(e => e.isDynamic())
                                    }
                                    byteLen() {
                                        let e = 0;
                                        for (let r = 0; r < this.childTypes.length; r++)
                                            if (this.childTypes[r].constructor === b) {
                                                const n = te(this.childTypes, r, 1),
                                                    H = n + 1;
                                                r += n, e += Math.trunc((H + 7) / 8)
                                            } else e += this.childTypes[r].byteLen();
                                        return e
                                    }
                                    encode(e) {
                                        if (!(Array.isArray(e) || e instanceof Uint8Array)) throw new Error(`Cannot encode value as ${this.toString()}: ${e}`);
                                        const r = Array.from(e);
                                        if (e.length > W) throw new Error("length of tuple array should not exceed a uint16");
                                        const n = this.childTypes,
                                            H = [],
                                            V = [],
                                            $ = new Map;
                                        let X = 0;
                                        for (; X < n.length;) {
                                            const e = n[X];
                                            if (e.isDynamic()) $.set(H.length, !0), H.push(new Uint8Array([0, 0])), V.push(e.encode(r[X]));
                                            else {
                                                if (e.constructor === b) {
                                                    const e = te(n, X, -1);
                                                    let q = te(n, X, 1);
                                                    if (e % 8 != 0) throw new Error("expected before index should have number of bool mod 8 equal 0");
                                                    q = Math.min(7, q);
                                                    const V = ee(r.slice(X, X + q + 1));
                                                    H.push((0, G.j)(V, 1)), X += q
                                                } else {
                                                    const n = e.encode(r[X]);
                                                    H.push(n)
                                                }
                                                $.set(X, !1), V.push(new Uint8Array)
                                            }
                                            X += 1
                                        }
                                        let Y = 0;
                                        for (const e of H) Y += e.length;
                                        let Q = 0;
                                        for (let e = 0; e < H.length; e++) {
                                            if ($.get(e)) {
                                                const r = Y + Q;
                                                if (r > W) throw new Error(`byte length of ${r} should not exceed a uint16`);
                                                H[e] = (0, G.j)(r, J)
                                            }
                                            Q += V[e].length
                                        }
                                        return (0, q.concatArrays)(...H, ...V)
                                    }
                                    decode(e) {
                                        const r = this.childTypes,
                                            n = [],
                                            H = [];
                                        let G = 0,
                                            q = 0;
                                        const W = V.from(e);
                                        for (; G < r.length;) {
                                            const V = r[G];
                                            if (V.isDynamic()) {
                                                if (e.slice(q, e.length).length < J) throw new Error("dynamic type in tuple is too short to be decoded");
                                                const r = W.readUIntBE(q, J);
                                                if (n.length > 0 && (n[n.length - 1].right = r, r < n[n.length - 1].left)) throw new Error("dynamic index segment miscalculation: left is greater than right index");
                                                const G = {
                                                    left: r,
                                                    right: -1
                                                };
                                                n.push(G), H.push(null), q += J
                                            } else if (V.constructor === b) {
                                                const r = te(this.childTypes, G, -1);
                                                let n = te(this.childTypes, G, 1);
                                                if (r % 8 != 0) throw new Error("expected before bool number mod 8 === 0");
                                                n = Math.min(7, n);
                                                for (let r = 0; r <= n; r++) {
                                                    const n = 128 >> r;
                                                    (e[q] & n) > 0 ? H.push(new Uint8Array([128])) : H.push(new Uint8Array([0]))
                                                }
                                                G += n, q += 1
                                            } else {
                                                const r = V.byteLen();
                                                H.push(e.slice(q, q + r)), q += r
                                            }
                                            if (G !== r.length - 1 && q >= e.length) throw new Error("input byte not enough to decode");
                                            G += 1
                                        }
                                        if (n.length > 0 && (n[n.length - 1].right = e.length, q = e.length), q < e.length) throw new Error("input byte not fully consumed");
                                        for (let e = 0; e < n.length; e++) {
                                            const r = n[e];
                                            if (r.left > r.right) throw new Error("dynamic segment should display a [l, r] space with l <= r");
                                            if (e !== n.length - 1 && r.right !== n[e + 1].left) throw new Error("dynamic segment should be consecutive")
                                        }
                                        let $ = 0;
                                        for (let G = 0; G < r.length; G++) r[G].isDynamic() && (H[G] = e.slice(n[$].left, n[$].right), $ += 1);
                                        const X = [];
                                        for (let e = 0; e < r.length; e++) {
                                            const n = r[e].decode(H[e]);
                                            X.push(n)
                                        }
                                        return X
                                    }
                                    static parseTupleContent(e) {
                                        if (0 === e.length) return [];
                                        if (e.endsWith(",") || e.startsWith(",")) throw new Error("tuple string should not start with comma");
                                        if (e.includes(",,")) throw new Error("tuple string should not have consecutive commas");
                                        const r = [];
                                        let n = 0,
                                            H = "";
                                        for (const G of e) H += G, "(" === G ? n += 1 : ")" === G ? n -= 1 : "," === G && 0 === n && (r.push(H.slice(0, H.length - 1)), H = "");
                                        if (0 !== H.length && r.push(H), 0 !== n) throw new Error("tuple string has mismatched parentheses");
                                        return r
                                    }
                                }

                                function ee(e) {
                                    let r = 0;
                                    if (e.length > 8) throw new Error("value list passed in should be no greater than length 8");
                                    for (let n = 0; n < e.length; n++) {
                                        const H = e[n];
                                        if ("boolean" != typeof H) throw new Error("non-boolean values cannot be compressed into a byte");
                                        H && (r |= 1 << 7 - n)
                                    }
                                    return r
                                }

                                function te(e, r, n) {
                                    let H = 0;
                                    for (;;) {
                                        const G = r + n * H;
                                        if (e[G].constructor !== b) {
                                            H -= 1;
                                            break
                                        }
                                        if (G !== e.length - 1 && 1 === n) H += 1;
                                        else {
                                            if (!(G > 0 && -1 === n)) break;
                                            H += 1
                                        }
                                    }
                                    return H
                                }
                                var re, ne, oe = n(9404);

                                function se(e) {
                                    return e === re.any || e === re.pay || e === re.keyreg || e === re.acfg || e === re.axfer || e === re.afrz || e === re.appl
                                }

                                function ie(e, r) {
                                    return e === re.any || r.type && r.type.toString() === e.toString()
                                }

                                function ae(e) {
                                    return e === ne.account || e === ne.application || e === ne.asset
                                }! function(e) {
                                    e.any = "txn", e.pay = "pay", e.keyreg = "keyreg", e.acfg = "acfg", e.axfer = "axfer", e.afrz = "afrz", e.appl = "appl"
                                }(re || (re = {})),
                                function(e) {
                                    e.account = "account", e.application = "application", e.asset = "asset"
                                }(ne || (ne = {}));
                                class R {
                                    constructor(e) {
                                        if ("string" != typeof e.name || "object" != typeof e.returns || !Array.isArray(e.args)) throw new Error("Invalid ABIMethod parameters");
                                        this.name = e.name, this.description = e.desc, this.args = e.args.map(({
                                            type: e,
                                            name: r,
                                            desc: n
                                        }) => se(e) || ae(e) ? {
                                            type: e,
                                            name: r,
                                            description: n
                                        } : {
                                            type: d.from(e),
                                            name: r,
                                            description: n
                                        }), this.returns = {
                                            type: "void" === e.returns.type ? e.returns.type : d.from(e.returns.type),
                                            description: e.returns.desc
                                        }
                                    }
                                    getSignature() {
                                        const e = this.args.map(e => e.type.toString()).join(","),
                                            r = this.returns.type.toString();
                                        return `${this.name}(${e})${r}`
                                    }
                                    getSelector() {
                                        const e = (0, oe.genericHash)(this.getSignature());
                                        return new Uint8Array(e.slice(0, 4))
                                    }
                                    txnCount() {
                                        let e = 1;
                                        for (const r of this.args) "string" == typeof r.type && se(r.type) && (e += 1);
                                        return e
                                    }
                                    toJSON() {
                                        return {
                                            name: this.name,
                                            desc: this.description,
                                            args: this.args.map(({
                                                type: e,
                                                name: r,
                                                description: n
                                            }) => ({
                                                type: e.toString(),
                                                name: r,
                                                desc: n
                                            })),
                                            returns: {
                                                type: this.returns.type.toString(),
                                                desc: this.returns.description
                                            }
                                        }
                                    }
                                    static fromSignature(e) {
                                        const {
                                            name: r,
                                            args: n,
                                            returns: H
                                        } = function(e) {
                                            const r = e.indexOf("(");
                                            if (-1 === r) throw new Error("Invalid method signature: " + e);
                                            let n = -1,
                                                H = 0;
                                            for (let G = r; G < e.length; G++) {
                                                const r = e[G];
                                                if ("(" === r) H += 1;
                                                else if (")" === r) {
                                                    if (0 === H) break;
                                                    if (H -= 1, 0 === H) {
                                                        n = G;
                                                        break
                                                    }
                                                }
                                            }
                                            if (-1 === n) throw new Error("Invalid method signature: " + e);
                                            return {
                                                name: e.slice(0, r),
                                                args: S.parseTupleContent(e.slice(r + 1, n)),
                                                returns: e.slice(n + 1)
                                            }
                                        }(e);
                                        return new R({
                                            name: r,
                                            args: n.map(e => ({
                                                type: e
                                            })),
                                            returns: {
                                                type: H
                                            }
                                        })
                                    }
                                }
                                class O {
                                    constructor(e) {
                                        if ("string" != typeof e.name || !Array.isArray(e.methods) || e.networks && "object" != typeof e.networks) throw new Error("Invalid ABIContract parameters");
                                        this.name = e.name, this.description = e.desc, this.networks = e.networks ? {
                                            ...e.networks
                                        } : {}, this.methods = e.methods.map(e => new R(e))
                                    }
                                    toJSON() {
                                        return {
                                            name: this.name,
                                            desc: this.description,
                                            networks: this.networks,
                                            methods: this.methods.map(e => e.toJSON())
                                        }
                                    }
                                }
                                class D {
                                    constructor(e) {
                                        if ("string" != typeof e.name || !Array.isArray(e.methods)) throw new Error("Invalid ABIInterface parameters");
                                        this.name = e.name, this.description = e.desc, this.methods = e.methods.map(e => new R(e))
                                    }
                                    toJSON() {
                                        return {
                                            name: this.name,
                                            desc: this.description,
                                            methods: this.methods.map(e => e.toJSON())
                                        }
                                    }
                                }
                            },
                            7988: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    Z: () => q
                                });
                                var H = n(9404),
                                    G = n(7116);

                                function q() {
                                    const e = H.keyPair();
                                    return {
                                        addr: G.encodeAddress(e.publicKey),
                                        sk: e.secretKey
                                    }
                                }
                            },
                            2691: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    Z: () => c
                                });
                                var H = n(7116),
                                    G = n(3033),
                                    q = n(9404),
                                    V = n(413),
                                    W = n(2486).Buffer;
                                class c {
                                    constructor({
                                        bidderKey: e,
                                        bidAmount: r,
                                        bidID: n,
                                        auctionKey: G,
                                        auctionID: q,
                                        maxPrice: V
                                    }) {
                                        this.name = "Bid", this.tag = W.from([97, 66]);
                                        const $ = H.decodeAddress(e),
                                            X = H.decodeAddress(G);
                                        if (!Number.isSafeInteger(r) || r < 0) throw Error("Bid amount must be positive and 2^53-1");
                                        if (!Number.isSafeInteger(n) || n < 0) throw Error("BidID must be positive and 2^53-1");
                                        if (!Number.isSafeInteger(q) || q < 0) throw Error("auctionID must be positive");
                                        Object.assign(this, {
                                            bidderKey: $,
                                            bidAmount: r,
                                            bidID: n,
                                            auctionKey: X,
                                            auctionID: q,
                                            maxPrice: V
                                        })
                                    }
                                    get_obj_for_encoding() {
                                        return {
                                            bidder: W.from(this.bidderKey.publicKey),
                                            cur: this.bidAmount,
                                            price: this.maxPrice,
                                            id: this.bidID,
                                            auc: W.from(this.auctionKey.publicKey),
                                            aid: this.auctionID
                                        }
                                    }
                                    signBid(e) {
                                        const r = G.encode(this.get_obj_for_encoding()),
                                            n = W.from(V.concatArrays(this.tag, r)),
                                            H = q.sign(n, e),
                                            $ = {
                                                t: "b",
                                                b: {
                                                    sig: W.from(H),
                                                    bid: this.get_obj_for_encoding()
                                                }
                                            };
                                        return new Uint8Array(G.encode($))
                                    }
                                }
                            },
                            1113: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    default: () => f
                                });
                                var H = n(413),
                                    G = n(1042),
                                    q = n.n(G),
                                    V = n(9368),
                                    W = n.n(V),
                                    $ = n(5391),
                                    X = n(2486).Buffer;
                                class l {
                                    constructor(e, r, n, H = {}) {
                                        this.defaultHeaders = H;
                                        const G = new(q())(r, {});
                                        if (void 0 !== n && G.set("port", n.toString()), 0 === G.protocol.length) throw new Error("Invalid base server URL, protocol must be defined.");
                                        this.baseURL = G, this.tokenHeader = e
                                    }
                                    addressWithPath(e) {
                                        return new(q())(W().posix.join(this.baseURL.pathname, e), this.baseURL).toString()
                                    }
                                    static superagentToHTTPClientResponse(e) {
                                        return e.body instanceof ArrayBuffer && (e.body = new Uint8Array(e.body)), e
                                    }
                                    static formatSuperagentError(e) {
                                        if (e.response) try {
                                            const r = JSON.parse(X.from(e.response.body).toString());
                                            e.message = `Network request error. Received status ${e.response.status}: ${r.message}`
                                        } catch (e) {}
                                        return e
                                    }
                                    async get(e, r, n = {}) {
                                        const H = $.get(this.addressWithPath(e)).set(this.tokenHeader).set(this.defaultHeaders).set(n).responseType("arraybuffer").query(r);
                                        try {
                                            const e = await H;
                                            return l.superagentToHTTPClientResponse(e)
                                        } catch (e) {
                                            throw l.formatSuperagentError(e)
                                        }
                                    }
                                    async post(e, r, n, H = {}) {
                                        const G = $.post(this.addressWithPath(e)).set(this.tokenHeader).set(this.defaultHeaders).set(H).query(n).serialize(e => e).responseType("arraybuffer").send(X.from(r));
                                        try {
                                            const e = await G;
                                            return l.superagentToHTTPClientResponse(e)
                                        } catch (e) {
                                            throw l.formatSuperagentError(e)
                                        }
                                    }
                                    async delete(e, r, n, H = {}) {
                                        const G = $.delete(this.addressWithPath(e)).set(this.tokenHeader).set(this.defaultHeaders).set(H).query(n).serialize(e => e).responseType("arraybuffer").send(X.from(r));
                                        try {
                                            const e = await G;
                                            return l.superagentToHTTPClientResponse(e)
                                        } catch (e) {
                                            throw l.formatSuperagentError(e)
                                        }
                                    }
                                }
                                var Y = n(2486).Buffer;

                                function J(e) {
                                    return Object.keys(e).reduce((r, n) => (r[n.toLowerCase()] = e[n], r), {})
                                }
                                class f {
                                    constructor(e, r, n, H = {}) {
                                        this.bc = void 0 !== r ? new l(e, r, n, H) : e
                                    }
                                    static parseJSON(e, r, n = {}) {
                                        try {
                                            return 0 === Object.keys(n).length ? e && JSON.parse(e) : e && H.parseJSON(e, n)
                                        } catch (n) {
                                            const H = n;
                                            throw H.rawResponse = e || null, H.statusCode = r, H
                                        }
                                    }
                                    static serializeData(e, r) {
                                        if (!e) return new Uint8Array(0);
                                        if ("application/json" === r["content-type"]) return new Uint8Array(Y.from(JSON.stringify(e)));
                                        if ("string" == typeof e) return new Uint8Array(Y.from(e));
                                        if (e instanceof Uint8Array) return e;
                                        throw new Error("provided data is neither a string nor a Uint8Array and content-type is not application/json")
                                    }
                                    static prepareResponse(e, r, n = {}) {
                                        let H, {
                                            body: G
                                        } = e;
                                        return "application/msgpack" !== r && (H = G && Y.from(G).toString() || ""), "application/json" === r && (G = f.parseJSON(H, e.status, n)), {
                                            ...e,
                                            body: G,
                                            text: H,
                                            ok: 2 === Math.trunc(e.status / 100)
                                        }
                                    }
                                    static prepareResponseError(e) {
                                        return e.response && (e.response = f.prepareResponse(e.response, "application/json"), e.status = e.response.status), e
                                    }
                                    async get(e, r, n = {}, H = {}) {
                                        const G = function(e) {
                                                if (void 0 === e || !Object.prototype.hasOwnProperty.call(e, "format")) return "application/json";
                                                switch (e.format) {
                                                    case "msgpack":
                                                        return "application/msgpack";
                                                    case "json":
                                                    default:
                                                        return "application/json"
                                                }
                                            }(r),
                                            q = {
                                                ...n,
                                                accept: G
                                            };
                                        try {
                                            const n = await this.bc.get(e, function(e) {
                                                for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (e[r] && 0 !== e[r].length || delete e[r]);
                                                return e
                                            }(r), q);
                                            return f.prepareResponse(n, G, H)
                                        } catch (e) {
                                            throw f.prepareResponseError(e)
                                        }
                                    }
                                    async post(e, r, n = {}) {
                                        const H = {
                                            "content-type": "application/json",
                                            ...J(n)
                                        };
                                        try {
                                            const n = await this.bc.post(e, f.serializeData(r, H), void 0, H);
                                            return f.prepareResponse(n, "application/json")
                                        } catch (e) {
                                            throw f.prepareResponseError(e)
                                        }
                                    }
                                    async delete(e, r, n = {}) {
                                        const H = {
                                                "content-type": "application/json",
                                                ...J(n)
                                            },
                                            G = await this.bc.delete(e, f.serializeData(r, H), void 0, H);
                                        return f.prepareResponse(G, "application/json")
                                    }
                                }
                            },
                            6477: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    Z: () => i
                                });
                                var H = n(3480),
                                    G = n(9417),
                                    q = n(2486).Buffer;
                                class i extends H.Z {
                                    constructor(e, r = "http://127.0.0.1", n = 7833, H = {}) {
                                        super("X-KMD-API-Token", e, r, n, H)
                                    }
                                    async versions() {
                                        return (await this.c.get("/versions")).body
                                    }
                                    async listWallets() {
                                        return (await this.c.get("/v1/wallets")).body
                                    }
                                    async createWallet(e, r, n = new Uint8Array, H = "sqlite") {
                                        const G = {
                                            wallet_name: e,
                                            wallet_driver_name: H,
                                            wallet_password: r,
                                            master_derivation_key: q.from(n).toString("base64")
                                        };
                                        return (await this.c.post("/v1/wallet", G)).body
                                    }
                                    async initWalletHandle(e, r) {
                                        const n = {
                                            wallet_id: e,
                                            wallet_password: r
                                        };
                                        return (await this.c.post("/v1/wallet/init", n)).body
                                    }
                                    async releaseWalletHandle(e) {
                                        const r = {
                                            wallet_handle_token: e
                                        };
                                        return (await this.c.post("/v1/wallet/release", r)).body
                                    }
                                    async renewWalletHandle(e) {
                                        const r = {
                                            wallet_handle_token: e
                                        };
                                        return (await this.c.post("/v1/wallet/renew", r)).body
                                    }
                                    async renameWallet(e, r, n) {
                                        const H = {
                                            wallet_id: e,
                                            wallet_password: r,
                                            wallet_name: n
                                        };
                                        return (await this.c.post("/v1/wallet/rename", H)).body
                                    }
                                    async getWallet(e) {
                                        const r = {
                                            wallet_handle_token: e
                                        };
                                        return (await this.c.post("/v1/wallet/info", r)).body
                                    }
                                    async exportMasterDerivationKey(e, r) {
                                        const n = {
                                                wallet_handle_token: e,
                                                wallet_password: r
                                            },
                                            H = await this.c.post("/v1/master-key/export", n);
                                        return {
                                            master_derivation_key: q.from(H.body.master_derivation_key, "base64")
                                        }
                                    }
                                    async importKey(e, r) {
                                        const n = {
                                            wallet_handle_token: e,
                                            private_key: q.from(r).toString("base64")
                                        };
                                        return (await this.c.post("/v1/key/import", n)).body
                                    }
                                    async exportKey(e, r, n) {
                                        const H = {
                                                wallet_handle_token: e,
                                                address: n,
                                                wallet_password: r
                                            },
                                            G = await this.c.post("/v1/key/export", H);
                                        return {
                                            private_key: q.from(G.body.private_key, "base64")
                                        }
                                    }
                                    async generateKey(e) {
                                        const r = {
                                            wallet_handle_token: e,
                                            display_mnemonic: !1
                                        };
                                        return (await this.c.post("/v1/key", r)).body
                                    }
                                    async deleteKey(e, r, n) {
                                        const H = {
                                            wallet_handle_token: e,
                                            address: n,
                                            wallet_password: r
                                        };
                                        return (await this.c.delete("/v1/key", H)).body
                                    }
                                    async listKeys(e) {
                                        const r = {
                                            wallet_handle_token: e
                                        };
                                        return (await this.c.post("/v1/key/list", r)).body
                                    }
                                    async signTransaction(e, r, n) {
                                        const H = G.instantiateTxnIfNeeded(n),
                                            V = {
                                                wallet_handle_token: e,
                                                wallet_password: r,
                                                transaction: q.from(H.toByte()).toString("base64")
                                            },
                                            W = await this.c.post("/v1/transaction/sign", V);
                                        return 200 === W.status ? q.from(W.body.signed_transaction, "base64") : W.body
                                    }
                                    async signTransactionWithSpecificPublicKey(e, r, n, H) {
                                        const V = G.instantiateTxnIfNeeded(n),
                                            W = {
                                                wallet_handle_token: e,
                                                wallet_password: r,
                                                transaction: q.from(V.toByte()).toString("base64"),
                                                public_key: q.from(H).toString("base64")
                                            },
                                            $ = await this.c.post("/v1/transaction/sign", W);
                                        return 200 === $.status ? q.from($.body.signed_transaction, "base64") : $.body
                                    }
                                    async listMultisig(e) {
                                        const r = {
                                            wallet_handle_token: e
                                        };
                                        return (await this.c.post("/v1/multisig/list", r)).body
                                    }
                                    async importMultisig(e, r, n, H) {
                                        const G = {
                                            wallet_handle_token: e,
                                            multisig_version: r,
                                            threshold: n,
                                            pks: H
                                        };
                                        return (await this.c.post("/v1/multisig/import", G)).body
                                    }
                                    async exportMultisig(e, r) {
                                        const n = {
                                            wallet_handle_token: e,
                                            address: r
                                        };
                                        return (await this.c.post("/v1/multisig/export", n)).body
                                    }
                                    async signMultisigTransaction(e, r, n, H, V) {
                                        const W = G.instantiateTxnIfNeeded(n),
                                            $ = {
                                                wallet_handle_token: e,
                                                transaction: q.from(W.toByte()).toString("base64"),
                                                public_key: q.from(H).toString("base64"),
                                                partial_multisig: V,
                                                wallet_password: r
                                            };
                                        return (await this.c.post("/v1/multisig/sign", $)).body
                                    }
                                    async deleteMultisig(e, r, n) {
                                        const H = {
                                            wallet_handle_token: e,
                                            address: n,
                                            wallet_password: r
                                        };
                                        return (await this.c.delete("/v1/multisig", H)).body
                                    }
                                }
                            },
                            1663: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    Z: () => k
                                });
                                var H = n(3480),
                                    G = n(8680);
                                class s extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.account = n, this.account = n
                                    }
                                    path() {
                                        return "/v2/accounts/" + this.account
                                    }
                                    exclude(e) {
                                        return this.query.exclude = e, this
                                    }
                                }
                                class i extends G.Z {
                                    constructor(e, r, n, H) {
                                        super(e, r), this.account = n, this.assetID = H, this.account = n, this.assetID = H
                                    }
                                    path() {
                                        return `/v2/accounts/${this.account}/assets/${this.assetID}`
                                    }
                                }
                                class a extends G.Z {
                                    constructor(e, r, n, H) {
                                        super(e, r), this.account = n, this.applicationID = H, this.account = n, this.applicationID = H
                                    }
                                    path() {
                                        return `/v2/accounts/${this.account}/applications/${this.applicationID}`
                                    }
                                }
                                var q = n(3033);
                                class u extends G.Z {
                                    constructor(e, r) {
                                        if (super(e), !Number.isInteger(r)) throw Error("roundNumber should be an integer");
                                        this.round = r, this.query = {
                                            format: "msgpack"
                                        }
                                    }
                                    path() {
                                        return "/v2/blocks/" + this.round
                                    }
                                    prepare(e) {
                                        if (e && e.byteLength > 0) return q.decode(e)
                                    }
                                }
                                var V = n(2486).Buffer;

                                function W(e = {}) {
                                    let r = e;
                                    return Object.keys(r).every(e => "content-type" !== e.toLowerCase()) && (r = {
                                        ...e
                                    }, r["Content-Type"] = "text/plain"), r
                                }
                                class p extends G.Z {
                                    constructor(e, r) {
                                        super(e), this.source = r, this.source = r
                                    }
                                    path() {
                                        return "/v2/teal/compile"
                                    }
                                    async
                                        do(e = {}) {
                                            const r = W(e);
                                            return (await this.c.post(this.path(), V.from(this.source), r)).body
                                        }
                                }
                                var $ = n(2486).Buffer;
                                class d extends G.Z {
                                    constructor(e, r) {
                                        super(e), this.blob = q.encode(r.get_obj_for_encoding(!0))
                                    }
                                    path() {
                                        return "/v2/teal/dryrun"
                                    }
                                    async
                                        do(e = {}) {
                                            const r = W(e);
                                            return (await this.c.post(this.path(), $.from(this.blob), r)).body
                                        }
                                }
                                class g extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.index = n, this.index = n
                                    }
                                    path() {
                                        return "/v2/assets/" + this.index
                                    }
                                }
                                class y extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.index = n, this.index = n
                                    }
                                    path() {
                                        return "/v2/applications/" + this.index
                                    }
                                }
                                class m extends G.Z {
                                    path() {
                                        return "/health"
                                    }
                                    async
                                        do(e = {}) {
                                            const r = await this.c.get(this.path(), {}, e);
                                            if (!r.ok) throw new Error("Health response: " + r.status);
                                            return {}
                                        }
                                }
                                class b extends G.Z {
                                    constructor(e, r) {
                                        super(e), this.txid = r, this.txid = r, this.query.format = "msgpack"
                                    }
                                    prepare(e) {
                                        if (e && e.byteLength > 0) return q.decode(e)
                                    }
                                    path() {
                                        return "/v2/transactions/pending/" + this.txid
                                    }
                                    max(e) {
                                        return this.query.max = e, this
                                    }
                                }
                                class A extends G.Z {
                                    constructor(e) {
                                        super(e), this.query.format = "msgpack"
                                    }
                                    path() {
                                        return "/v2/transactions/pending"
                                    }
                                    prepare(e) {
                                        if (e && e.byteLength > 0) return q.decode(e)
                                    }
                                    max(e) {
                                        return this.query.max = e, this
                                    }
                                }
                                class w extends G.Z {
                                    constructor(e, r) {
                                        super(e), this.address = r, this.address = r, this.query.format = "msgpack"
                                    }
                                    prepare(e) {
                                        if (e && e.byteLength > 0) return q.decode(e)
                                    }
                                    path() {
                                        return `/v2/accounts/${this.address}/transactions/pending`
                                    }
                                    max(e) {
                                        return this.query.max = e, this
                                    }
                                }
                                var X = n(5180);
                                class x extends G.Z {
                                    path() {
                                        return "/v2/status"
                                    }
                                }
                                class S extends G.Z {
                                    constructor(e, r, n) {
                                        if (super(e, r), this.round = n, !Number.isInteger(n)) throw Error("round should be an integer");
                                        this.round = n
                                    }
                                    path() {
                                        return "/v2/status/wait-for-block-after/" + this.round
                                    }
                                }
                                class E extends G.Z {
                                    path() {
                                        return "/v2/transactions/params"
                                    }
                                    prepare(e) {
                                        return {
                                            flatFee: !1,
                                            fee: e.fee,
                                            firstRound: e["last-round"],
                                            lastRound: e["last-round"] + 1e3,
                                            genesisID: e["genesis-id"],
                                            genesisHash: e["genesis-hash"]
                                        }
                                    }
                                }
                                class T extends G.Z {
                                    path() {
                                        return "/v2/ledger/supply"
                                    }
                                }
                                class _ extends G.Z {
                                    path() {
                                        return "/versions"
                                    }
                                }
                                class B extends G.Z {
                                    path() {
                                        return "/genesis"
                                    }
                                }
                                class U extends G.Z {
                                    constructor(e, r, n, H) {
                                        super(e, r), this.round = n, this.txID = H, this.round = n, this.txID = H
                                    }
                                    path() {
                                        return `/v2/blocks/${this.round}/transactions/${this.txID}/proof`
                                    }
                                }
                                class k extends H.Z {
                                    constructor(e, r = "http://r2.algorand.network", n = 4180, H = {}) {
                                        super("X-Algo-API-Token", e, r, n, H)
                                    }
                                    healthCheck() {
                                        return new m(this.c)
                                    }
                                    versionsCheck() {
                                        return new _(this.c)
                                    }
                                    sendRawTransaction(e) {
                                        return new X.default(this.c, e)
                                    }
                                    accountInformation(e) {
                                        return new s(this.c, this.intDecoding, e)
                                    }
                                    accountAssetInformation(e, r) {
                                        return new i(this.c, this.intDecoding, e, r)
                                    }
                                    accountApplicationInformation(e, r) {
                                        return new a(this.c, this.intDecoding, e, r)
                                    }
                                    block(e) {
                                        return new u(this.c, e)
                                    }
                                    pendingTransactionInformation(e) {
                                        return new b(this.c, e)
                                    }
                                    pendingTransactionsInformation() {
                                        return new A(this.c)
                                    }
                                    pendingTransactionByAddress(e) {
                                        return new w(this.c, e)
                                    }
                                    status() {
                                        return new x(this.c, this.intDecoding)
                                    }
                                    statusAfterBlock(e) {
                                        return new S(this.c, this.intDecoding, e)
                                    }
                                    getTransactionParams() {
                                        return new E(this.c)
                                    }
                                    supply() {
                                        return new T(this.c, this.intDecoding)
                                    }
                                    compile(e) {
                                        return new p(this.c, e)
                                    }
                                    dryrun(e) {
                                        return new d(this.c, e)
                                    }
                                    getAssetByID(e) {
                                        return new g(this.c, this.intDecoding, e)
                                    }
                                    getApplicationByID(e) {
                                        return new y(this.c, this.intDecoding, e)
                                    }
                                    genesis() {
                                        return new B(this.c, this.intDecoding)
                                    }
                                    getProof(e, r) {
                                        return new U(this.c, this.intDecoding, e, r)
                                    }
                                }
                            },
                            227: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    Account: () => a,
                                    AccountApplicationResponse: () => c,
                                    AccountAssetResponse: () => u,
                                    AccountParticipation: () => l,
                                    AccountStateDelta: () => h,
                                    Application: () => p,
                                    ApplicationLocalState: () => f,
                                    ApplicationParams: () => d,
                                    ApplicationStateSchema: () => g,
                                    Asset: () => y,
                                    AssetHolding: () => m,
                                    AssetParams: () => b,
                                    BlockResponse: () => A,
                                    BuildVersion: () => w,
                                    CatchpointAbortResponse: () => v,
                                    CatchpointStartResponse: () => x,
                                    CompileResponse: () => S,
                                    DryrunRequest: () => E,
                                    DryrunResponse: () => T,
                                    DryrunSource: () => _,
                                    DryrunState: () => B,
                                    DryrunTxnResult: () => U,
                                    ErrorResponse: () => k,
                                    EvalDelta: () => I,
                                    EvalDeltaKeyValue: () => C,
                                    NodeStatusResponse: () => R,
                                    PendingTransactionResponse: () => O,
                                    PendingTransactionsResponse: () => D,
                                    PostTransactionsResponse: () => N,
                                    ProofResponse: () => P,
                                    SupplyResponse: () => L,
                                    TealKeyValue: () => F,
                                    TealValue: () => z,
                                    TransactionParametersResponse: () => j,
                                    Version: () => M
                                });
                                var H = n(2486).Buffer;

                                function G(e, r) {
                                    let n;
                                    if (e instanceof Uint8Array) n = r ? e : H.from(e).toString("base64");
                                    else if ("function" == typeof e.get_obj_for_encoding) n = e.get_obj_for_encoding(r);
                                    else if (Array.isArray(e)) {
                                        n = [];
                                        for (const H of e) n.push(G(H, r))
                                    } else if ("object" == typeof e) {
                                        const H = {};
                                        for (const n of Object.keys(e)) H[n] = G(e[n], r);
                                        n = H
                                    } else {
                                        if (! function(e) {
                                                return void 0 === e || null == e || "object" != typeof e && "function" != typeof e
                                            }(e)) throw new Error("Unsupported value: " + String(e));
                                        n = e
                                    }
                                    return n
                                }
                                class s {
                                    get_obj_for_encoding(e = !1) {
                                        const r = {};
                                        for (const n of Object.keys(this.attribute_map)) {
                                            const H = this.attribute_map[n],
                                                q = this[n];
                                            void 0 !== q && (r[H] = null === q ? null : G(q, e))
                                        }
                                        return r
                                    }
                                }
                                var q = n(2486).Buffer;
                                class a extends s {
                                    constructor({
                                        address: e,
                                        amount: r,
                                        amountWithoutPendingRewards: n,
                                        minBalance: H,
                                        pendingRewards: G,
                                        rewards: q,
                                        round: V,
                                        status: W,
                                        totalAppsOptedIn: $,
                                        totalAssetsOptedIn: X,
                                        totalCreatedApps: Y,
                                        totalCreatedAssets: J,
                                        appsLocalState: Q,
                                        appsTotalExtraPages: Z,
                                        appsTotalSchema: ee,
                                        assets: te,
                                        authAddr: re,
                                        createdApps: ne,
                                        createdAssets: oe,
                                        participation: se,
                                        rewardBase: ie,
                                        sigType: ae
                                    }) {
                                        super(), this.address = e, this.amount = r, this.amountWithoutPendingRewards = n, this.minBalance = H, this.pendingRewards = G, this.rewards = q, this.round = V, this.status = W, this.totalAppsOptedIn = $, this.totalAssetsOptedIn = X, this.totalCreatedApps = Y, this.totalCreatedAssets = J, this.appsLocalState = Q, this.appsTotalExtraPages = Z, this.appsTotalSchema = ee, this.assets = te, this.authAddr = re, this.createdApps = ne, this.createdAssets = oe, this.participation = se, this.rewardBase = ie, this.sigType = ae, this.attribute_map = {
                                            address: "address",
                                            amount: "amount",
                                            amountWithoutPendingRewards: "amount-without-pending-rewards",
                                            minBalance: "min-balance",
                                            pendingRewards: "pending-rewards",
                                            rewards: "rewards",
                                            round: "round",
                                            status: "status",
                                            totalAppsOptedIn: "total-apps-opted-in",
                                            totalAssetsOptedIn: "total-assets-opted-in",
                                            totalCreatedApps: "total-created-apps",
                                            totalCreatedAssets: "total-created-assets",
                                            appsLocalState: "apps-local-state",
                                            appsTotalExtraPages: "apps-total-extra-pages",
                                            appsTotalSchema: "apps-total-schema",
                                            assets: "assets",
                                            authAddr: "auth-addr",
                                            createdApps: "created-apps",
                                            createdAssets: "created-assets",
                                            participation: "participation",
                                            rewardBase: "reward-base",
                                            sigType: "sig-type"
                                        }
                                    }
                                }
                                class c extends s {
                                    constructor(e, r, n) {
                                        super(), this.round = e, this.appLocalState = r, this.createdApp = n, this.attribute_map = {
                                            round: "round",
                                            appLocalState: "app-local-state",
                                            createdApp: "created-app"
                                        }
                                    }
                                }
                                class u extends s {
                                    constructor(e, r, n) {
                                        super(), this.round = e, this.assetHolding = r, this.createdAsset = n, this.attribute_map = {
                                            round: "round",
                                            assetHolding: "asset-holding",
                                            createdAsset: "created-asset"
                                        }
                                    }
                                }
                                class l extends s {
                                    constructor({
                                        selectionParticipationKey: e,
                                        voteFirstValid: r,
                                        voteKeyDilution: n,
                                        voteLastValid: H,
                                        voteParticipationKey: G,
                                        stateProofKey: V
                                    }) {
                                        super(), this.selectionParticipationKey = "string" == typeof e ? new Uint8Array(q.from(e, "base64")) : e, this.voteFirstValid = r, this.voteKeyDilution = n, this.voteLastValid = H, this.voteParticipationKey = "string" == typeof G ? new Uint8Array(q.from(G, "base64")) : G, this.stateProofKey = "string" == typeof V ? new Uint8Array(q.from(V, "base64")) : V, this.attribute_map = {
                                            selectionParticipationKey: "selection-participation-key",
                                            voteFirstValid: "vote-first-valid",
                                            voteKeyDilution: "vote-key-dilution",
                                            voteLastValid: "vote-last-valid",
                                            voteParticipationKey: "vote-participation-key",
                                            stateProofKey: "state-proof-key"
                                        }
                                    }
                                }
                                class h extends s {
                                    constructor(e, r) {
                                        super(), this.address = e, this.delta = r, this.attribute_map = {
                                            address: "address",
                                            delta: "delta"
                                        }
                                    }
                                }
                                class p extends s {
                                    constructor(e, r) {
                                        super(), this.id = e, this.params = r, this.attribute_map = {
                                            id: "id",
                                            params: "params"
                                        }
                                    }
                                }
                                class f extends s {
                                    constructor(e, r, n) {
                                        super(), this.id = e, this.schema = r, this.keyValue = n, this.attribute_map = {
                                            id: "id",
                                            schema: "schema",
                                            keyValue: "key-value"
                                        }
                                    }
                                }
                                class d extends s {
                                    constructor({
                                        approvalProgram: e,
                                        clearStateProgram: r,
                                        creator: n,
                                        extraProgramPages: H,
                                        globalState: G,
                                        globalStateSchema: V,
                                        localStateSchema: W
                                    }) {
                                        super(), this.approvalProgram = "string" == typeof e ? new Uint8Array(q.from(e, "base64")) : e, this.clearStateProgram = "string" == typeof r ? new Uint8Array(q.from(r, "base64")) : r, this.creator = n, this.extraProgramPages = H, this.globalState = G, this.globalStateSchema = V, this.localStateSchema = W, this.attribute_map = {
                                            approvalProgram: "approval-program",
                                            clearStateProgram: "clear-state-program",
                                            creator: "creator",
                                            extraProgramPages: "extra-program-pages",
                                            globalState: "global-state",
                                            globalStateSchema: "global-state-schema",
                                            localStateSchema: "local-state-schema"
                                        }
                                    }
                                }
                                class g extends s {
                                    constructor(e, r) {
                                        super(), this.numUint = e, this.numByteSlice = r, this.attribute_map = {
                                            numUint: "num-uint",
                                            numByteSlice: "num-byte-slice"
                                        }
                                    }
                                }
                                class y extends s {
                                    constructor(e, r) {
                                        super(), this.index = e, this.params = r, this.attribute_map = {
                                            index: "index",
                                            params: "params"
                                        }
                                    }
                                }
                                class m extends s {
                                    constructor(e, r, n) {
                                        super(), this.amount = e, this.assetId = r, this.isFrozen = n, this.attribute_map = {
                                            amount: "amount",
                                            assetId: "asset-id",
                                            isFrozen: "is-frozen"
                                        }
                                    }
                                }
                                class b extends s {
                                    constructor({
                                        creator: e,
                                        decimals: r,
                                        total: n,
                                        clawback: H,
                                        defaultFrozen: G,
                                        freeze: V,
                                        manager: W,
                                        metadataHash: $,
                                        name: X,
                                        nameB64: Y,
                                        reserve: J,
                                        unitName: Q,
                                        unitNameB64: Z,
                                        url: ee,
                                        urlB64: te
                                    }) {
                                        super(), this.creator = e, this.decimals = r, this.total = n, this.clawback = H, this.defaultFrozen = G, this.freeze = V, this.manager = W, this.metadataHash = "string" == typeof $ ? new Uint8Array(q.from($, "base64")) : $, this.name = X, this.nameB64 = "string" == typeof Y ? new Uint8Array(q.from(Y, "base64")) : Y, this.reserve = J, this.unitName = Q, this.unitNameB64 = "string" == typeof Z ? new Uint8Array(q.from(Z, "base64")) : Z, this.url = ee, this.urlB64 = "string" == typeof te ? new Uint8Array(q.from(te, "base64")) : te, this.attribute_map = {
                                            creator: "creator",
                                            decimals: "decimals",
                                            total: "total",
                                            clawback: "clawback",
                                            defaultFrozen: "default-frozen",
                                            freeze: "freeze",
                                            manager: "manager",
                                            metadataHash: "metadata-hash",
                                            name: "name",
                                            nameB64: "name-b64",
                                            reserve: "reserve",
                                            unitName: "unit-name",
                                            unitNameB64: "unit-name-b64",
                                            url: "url",
                                            urlB64: "url-b64"
                                        }
                                    }
                                }
                                class A extends s {
                                    constructor(e, r) {
                                        super(), this.block = e, this.cert = r, this.attribute_map = {
                                            block: "block",
                                            cert: "cert"
                                        }
                                    }
                                }
                                class w extends s {
                                    constructor({
                                        branch: e,
                                        buildNumber: r,
                                        channel: n,
                                        commitHash: H,
                                        major: G,
                                        minor: q
                                    }) {
                                        super(), this.branch = e, this.buildNumber = r, this.channel = n, this.commitHash = H, this.major = G, this.minor = q, this.attribute_map = {
                                            branch: "branch",
                                            buildNumber: "build_number",
                                            channel: "channel",
                                            commitHash: "commit_hash",
                                            major: "major",
                                            minor: "minor"
                                        }
                                    }
                                }
                                class v extends s {
                                    constructor(e) {
                                        super(), this.catchupMessage = e, this.attribute_map = {
                                            catchupMessage: "catchup-message"
                                        }
                                    }
                                }
                                class x extends s {
                                    constructor(e) {
                                        super(), this.catchupMessage = e, this.attribute_map = {
                                            catchupMessage: "catchup-message"
                                        }
                                    }
                                }
                                class S extends s {
                                    constructor(e, r) {
                                        super(), this.hash = e, this.result = r, this.attribute_map = {
                                            hash: "hash",
                                            result: "result"
                                        }
                                    }
                                }
                                class E extends s {
                                    constructor({
                                        accounts: e,
                                        apps: r,
                                        latestTimestamp: n,
                                        protocolVersion: H,
                                        round: G,
                                        sources: q,
                                        txns: V
                                    }) {
                                        super(), this.accounts = e, this.apps = r, this.latestTimestamp = n, this.protocolVersion = H, this.round = G, this.sources = q, this.txns = V, this.attribute_map = {
                                            accounts: "accounts",
                                            apps: "apps",
                                            latestTimestamp: "latest-timestamp",
                                            protocolVersion: "protocol-version",
                                            round: "round",
                                            sources: "sources",
                                            txns: "txns"
                                        }
                                    }
                                }
                                class T extends s {
                                    constructor(e, r, n) {
                                        super(), this.error = e, this.protocolVersion = r, this.txns = n, this.attribute_map = {
                                            error: "error",
                                            protocolVersion: "protocol-version",
                                            txns: "txns"
                                        }
                                    }
                                }
                                class _ extends s {
                                    constructor(e, r, n, H) {
                                        super(), this.fieldName = e, this.source = r, this.txnIndex = n, this.appIndex = H, this.attribute_map = {
                                            fieldName: "field-name",
                                            source: "source",
                                            txnIndex: "txn-index",
                                            appIndex: "app-index"
                                        }
                                    }
                                }
                                class B extends s {
                                    constructor({
                                        line: e,
                                        pc: r,
                                        stack: n,
                                        error: H,
                                        scratch: G
                                    }) {
                                        super(), this.line = e, this.pc = r, this.stack = n, this.error = H, this.scratch = G, this.attribute_map = {
                                            line: "line",
                                            pc: "pc",
                                            stack: "stack",
                                            error: "error",
                                            scratch: "scratch"
                                        }
                                    }
                                }
                                class U extends s {
                                    constructor({
                                        disassembly: e,
                                        appCallMessages: r,
                                        appCallTrace: n,
                                        cost: H,
                                        globalDelta: G,
                                        localDeltas: q,
                                        logicSigDisassembly: V,
                                        logicSigMessages: W,
                                        logicSigTrace: $,
                                        logs: X
                                    }) {
                                        super(), this.disassembly = e, this.appCallMessages = r, this.appCallTrace = n, this.cost = H, this.globalDelta = G, this.localDeltas = q, this.logicSigDisassembly = V, this.logicSigMessages = W, this.logicSigTrace = $, this.logs = X, this.attribute_map = {
                                            disassembly: "disassembly",
                                            appCallMessages: "app-call-messages",
                                            appCallTrace: "app-call-trace",
                                            cost: "cost",
                                            globalDelta: "global-delta",
                                            localDeltas: "local-deltas",
                                            logicSigDisassembly: "logic-sig-disassembly",
                                            logicSigMessages: "logic-sig-messages",
                                            logicSigTrace: "logic-sig-trace",
                                            logs: "logs"
                                        }
                                    }
                                }
                                class k extends s {
                                    constructor(e, r) {
                                        super(), this.message = e, this.data = r, this.attribute_map = {
                                            message: "message",
                                            data: "data"
                                        }
                                    }
                                }
                                class I extends s {
                                    constructor(e, r, n) {
                                        super(), this.action = e, this.bytes = r, this.uint = n, this.attribute_map = {
                                            action: "action",
                                            bytes: "bytes",
                                            uint: "uint"
                                        }
                                    }
                                }
                                class C extends s {
                                    constructor(e, r) {
                                        super(), this.key = e, this.value = r, this.attribute_map = {
                                            key: "key",
                                            value: "value"
                                        }
                                    }
                                }
                                class R extends s {
                                    constructor({
                                        catchupTime: e,
                                        lastRound: r,
                                        lastVersion: n,
                                        nextVersion: H,
                                        nextVersionRound: G,
                                        nextVersionSupported: q,
                                        stoppedAtUnsupportedRound: V,
                                        timeSinceLastRound: W,
                                        catchpoint: $,
                                        catchpointAcquiredBlocks: X,
                                        catchpointProcessedAccounts: Y,
                                        catchpointTotalAccounts: J,
                                        catchpointTotalBlocks: Q,
                                        catchpointVerifiedAccounts: Z,
                                        lastCatchpoint: ee
                                    }) {
                                        super(), this.catchupTime = e, this.lastRound = r, this.lastVersion = n, this.nextVersion = H, this.nextVersionRound = G, this.nextVersionSupported = q, this.stoppedAtUnsupportedRound = V, this.timeSinceLastRound = W, this.catchpoint = $, this.catchpointAcquiredBlocks = X, this.catchpointProcessedAccounts = Y, this.catchpointTotalAccounts = J, this.catchpointTotalBlocks = Q, this.catchpointVerifiedAccounts = Z, this.lastCatchpoint = ee, this.attribute_map = {
                                            catchupTime: "catchup-time",
                                            lastRound: "last-round",
                                            lastVersion: "last-version",
                                            nextVersion: "next-version",
                                            nextVersionRound: "next-version-round",
                                            nextVersionSupported: "next-version-supported",
                                            stoppedAtUnsupportedRound: "stopped-at-unsupported-round",
                                            timeSinceLastRound: "time-since-last-round",
                                            catchpoint: "catchpoint",
                                            catchpointAcquiredBlocks: "catchpoint-acquired-blocks",
                                            catchpointProcessedAccounts: "catchpoint-processed-accounts",
                                            catchpointTotalAccounts: "catchpoint-total-accounts",
                                            catchpointTotalBlocks: "catchpoint-total-blocks",
                                            catchpointVerifiedAccounts: "catchpoint-verified-accounts",
                                            lastCatchpoint: "last-catchpoint"
                                        }
                                    }
                                }
                                class O extends s {
                                    constructor({
                                        poolError: e,
                                        txn: r,
                                        applicationIndex: n,
                                        assetClosingAmount: H,
                                        assetIndex: G,
                                        closeRewards: q,
                                        closingAmount: V,
                                        confirmedRound: W,
                                        globalStateDelta: $,
                                        innerTxns: X,
                                        localStateDelta: Y,
                                        logs: J,
                                        receiverRewards: Q,
                                        senderRewards: Z
                                    }) {
                                        super(), this.poolError = e, this.txn = r, this.applicationIndex = n, this.assetClosingAmount = H, this.assetIndex = G, this.closeRewards = q, this.closingAmount = V, this.confirmedRound = W, this.globalStateDelta = $, this.innerTxns = X, this.localStateDelta = Y, this.logs = J, this.receiverRewards = Q, this.senderRewards = Z, this.attribute_map = {
                                            poolError: "pool-error",
                                            txn: "txn",
                                            applicationIndex: "application-index",
                                            assetClosingAmount: "asset-closing-amount",
                                            assetIndex: "asset-index",
                                            closeRewards: "close-rewards",
                                            closingAmount: "closing-amount",
                                            confirmedRound: "confirmed-round",
                                            globalStateDelta: "global-state-delta",
                                            innerTxns: "inner-txns",
                                            localStateDelta: "local-state-delta",
                                            logs: "logs",
                                            receiverRewards: "receiver-rewards",
                                            senderRewards: "sender-rewards"
                                        }
                                    }
                                }
                                class D extends s {
                                    constructor(e, r) {
                                        super(), this.topTransactions = e, this.totalTransactions = r, this.attribute_map = {
                                            topTransactions: "top-transactions",
                                            totalTransactions: "total-transactions"
                                        }
                                    }
                                }
                                class N extends s {
                                    constructor(e) {
                                        super(), this.txid = e, this.attribute_map = {
                                            txid: "txId"
                                        }
                                    }
                                }
                                class P extends s {
                                    constructor({
                                        idx: e,
                                        proof: r,
                                        stibhash: n,
                                        treedepth: H,
                                        hashtype: G
                                    }) {
                                        super(), this.idx = e, this.proof = "string" == typeof r ? new Uint8Array(q.from(r, "base64")) : r, this.stibhash = "string" == typeof n ? new Uint8Array(q.from(n, "base64")) : n, this.treedepth = H, this.hashtype = G, this.attribute_map = {
                                            idx: "idx",
                                            proof: "proof",
                                            stibhash: "stibhash",
                                            treedepth: "treedepth",
                                            hashtype: "hashtype"
                                        }
                                    }
                                }
                                class L extends s {
                                    constructor(e, r, n) {
                                        super(), this.currentRound = e, this.onlineMoney = r, this.totalMoney = n, this.attribute_map = {
                                            currentRound: "current_round",
                                            onlineMoney: "online-money",
                                            totalMoney: "total-money"
                                        }
                                    }
                                }
                                class F extends s {
                                    constructor(e, r) {
                                        super(), this.key = e, this.value = r, this.attribute_map = {
                                            key: "key",
                                            value: "value"
                                        }
                                    }
                                }
                                class z extends s {
                                    constructor(e, r, n) {
                                        super(), this.type = e, this.bytes = r, this.uint = n, this.attribute_map = {
                                            type: "type",
                                            bytes: "bytes",
                                            uint: "uint"
                                        }
                                    }
                                }
                                class j extends s {
                                    constructor({
                                        consensusVersion: e,
                                        fee: r,
                                        genesisHash: n,
                                        genesisId: H,
                                        lastRound: G,
                                        minFee: V
                                    }) {
                                        super(), this.consensusVersion = e, this.fee = r, this.genesisHash = "string" == typeof n ? new Uint8Array(q.from(n, "base64")) : n, this.genesisId = H, this.lastRound = G, this.minFee = V, this.attribute_map = {
                                            consensusVersion: "consensus-version",
                                            fee: "fee",
                                            genesisHash: "genesis-hash",
                                            genesisId: "genesis-id",
                                            lastRound: "last-round",
                                            minFee: "min-fee"
                                        }
                                    }
                                }
                                class M extends s {
                                    constructor(e, r, n, H) {
                                        super(), this.build = e, this.genesisHashB64 = "string" == typeof r ? new Uint8Array(q.from(r, "base64")) : r, this.genesisId = n, this.versions = H, this.attribute_map = {
                                            build: "build",
                                            genesisHashB64: "genesis_hash_b64",
                                            genesisId: "genesis_id",
                                            versions: "versions"
                                        }
                                    }
                                }
                            },
                            5180: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    setSendTransactionHeaders: () => V,
                                    default: () => c
                                });
                                var H = n(8680),
                                    G = n(413),
                                    q = n(2486).Buffer;

                                function V(e = {}) {
                                    let r = e;
                                    return Object.keys(r).every(e => "content-type" !== e.toLowerCase()) && (r = {
                                        ...e
                                    }, r["Content-Type"] = "application/x-binary"), r
                                }

                                function W(e) {
                                    return e && void 0 !== e.byteLength
                                }
                                class c extends H.Z {
                                    constructor(e, r) {
                                        super(e);
                                        let n = r;
                                        if (Array.isArray(r)) {
                                            if (!r.every(W)) throw new TypeError("Array elements must be byte arrays");
                                            n = (0, G.concatArrays)(...r)
                                        } else if (!W(n)) throw new TypeError("Argument must be byte array");
                                        this.txnBytesToPost = n
                                    }
                                    path() {
                                        return "/v2/transactions"
                                    }
                                    async
                                        do(e = {}) {
                                            const r = V(e);
                                            return (await this.c.post(this.path(), q.from(this.txnBytesToPost), r)).body
                                        }
                                }
                            },
                            9582: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    Z: () => T
                                });
                                var H = n(3480),
                                    G = n(8680);
                                class s extends G.Z {
                                    path() {
                                        return "/health"
                                    }
                                }
                                class i extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.index = n, this.index = n
                                    }
                                    path() {
                                        return `/v2/assets/${this.index}/balances`
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    currencyGreaterThan(e) {
                                        return this.query["currency-greater-than"] = e, this
                                    }
                                    currencyLessThan(e) {
                                        return this.query["currency-less-than"] = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    includeAll(e = !0) {
                                        return this.query["include-all"] = e, this
                                    }
                                }
                                var q = n(2486).Buffer;

                                function V(e) {
                                    return "string" == typeof e ? e : q.from(e).toString("base64")
                                }
                                class u extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.account = n, this.account = n
                                    }
                                    path() {
                                        return `/v2/accounts/${this.account}/transactions`
                                    }
                                    notePrefix(e) {
                                        return this.query["note-prefix"] = V(e), this
                                    }
                                    txType(e) {
                                        return this.query["tx-type"] = e, this
                                    }
                                    sigType(e) {
                                        return this.query["sig-type"] = e, this
                                    }
                                    txid(e) {
                                        return this.query.txid = e, this
                                    }
                                    round(e) {
                                        return this.query.round = e, this
                                    }
                                    minRound(e) {
                                        return this.query["min-round"] = e, this
                                    }
                                    maxRound(e) {
                                        return this.query["max-round"] = e, this
                                    }
                                    assetID(e) {
                                        return this.query["asset-id"] = e, this
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    beforeTime(e) {
                                        return this.query["before-time"] = e, this
                                    }
                                    afterTime(e) {
                                        return this.query["after-time"] = e, this
                                    }
                                    currencyGreaterThan(e) {
                                        return this.query["currency-greater-than"] = e, this
                                    }
                                    currencyLessThan(e) {
                                        return this.query["currency-less-than"] = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    rekeyTo(e) {
                                        return this.query["rekey-to"] = e, this
                                    }
                                }
                                class l extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.index = n, this.index = n
                                    }
                                    path() {
                                        return `/v2/assets/${this.index}/transactions`
                                    }
                                    notePrefix(e) {
                                        return this.query["note-prefix"] = V(e), this
                                    }
                                    txType(e) {
                                        return this.query["tx-type"] = e, this
                                    }
                                    sigType(e) {
                                        return this.query["sig-type"] = e, this
                                    }
                                    txid(e) {
                                        return this.query.txid = e, this
                                    }
                                    round(e) {
                                        return this.query.round = e, this
                                    }
                                    minRound(e) {
                                        return this.query["min-round"] = e, this
                                    }
                                    maxRound(e) {
                                        return this.query["max-round"] = e, this
                                    }
                                    assetID(e) {
                                        return this.query["asset-id"] = e, this
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    beforeTime(e) {
                                        return this.query["before-time"] = e, this
                                    }
                                    afterTime(e) {
                                        return this.query["after-time"] = e, this
                                    }
                                    currencyGreaterThan(e) {
                                        return this.query["currency-greater-than"] = e, this
                                    }
                                    currencyLessThan(e) {
                                        return this.query["currency-less-than"] = e, this
                                    }
                                    addressRole(e) {
                                        return this.query["address-role"] = e, this
                                    }
                                    address(e) {
                                        return this.query.address = e, this
                                    }
                                    excludeCloseTo(e) {
                                        return this.query["exclude-close-to"] = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    rekeyTo(e) {
                                        return this.query["rekey-to"] = e, this
                                    }
                                }
                                class h extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.round = n, this.round = n
                                    }
                                    path() {
                                        return "/v2/blocks/" + this.round
                                    }
                                }
                                class p extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.txID = n, this.txID = n
                                    }
                                    path() {
                                        return "/v2/transactions/" + this.txID
                                    }
                                }
                                class f extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.account = n, this.account = n
                                    }
                                    path() {
                                        return "/v2/accounts/" + this.account
                                    }
                                    round(e) {
                                        return this.query.round = e, this
                                    }
                                    includeAll(e = !0) {
                                        return this.query["include-all"] = e, this
                                    }
                                    exclude(e) {
                                        return this.query.exclude = e, this
                                    }
                                }
                                class d extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.account = n, this.account = n
                                    }
                                    path() {
                                        return `/v2/accounts/${this.account}/assets`
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    round(e) {
                                        return this.query.round = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    includeAll(e = !0) {
                                        return this.query["include-all"] = e, this
                                    }
                                    assetId(e) {
                                        return this.query["asset-id"] = e, this
                                    }
                                }
                                class g extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.account = n, this.account = n
                                    }
                                    path() {
                                        return `/v2/accounts/${this.account}/created-assets`
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    round(e) {
                                        return this.query.round = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    includeAll(e = !0) {
                                        return this.query["include-all"] = e, this
                                    }
                                    assetID(e) {
                                        return this.query["asset-id"] = e, this
                                    }
                                }
                                class y extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.account = n, this.account = n
                                    }
                                    path() {
                                        return `/v2/accounts/${this.account}/apps-local-state`
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    round(e) {
                                        return this.query.round = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    includeAll(e = !0) {
                                        return this.query["include-all"] = e, this
                                    }
                                    applicationID(e) {
                                        return this.query["application-id"] = e, this
                                    }
                                }
                                class m extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.account = n, this.account = n
                                    }
                                    path() {
                                        return `/v2/accounts/${this.account}/created-applications`
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    round(e) {
                                        return this.query.round = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    includeAll(e = !0) {
                                        return this.query["include-all"] = e, this
                                    }
                                    applicationID(e) {
                                        return this.query["application-id"] = e, this
                                    }
                                }
                                class b extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.index = n, this.index = n
                                    }
                                    path() {
                                        return "/v2/assets/" + this.index
                                    }
                                    includeAll(e = !0) {
                                        return this.query["include-all"] = e, this
                                    }
                                }
                                class A extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.index = n, this.index = n
                                    }
                                    path() {
                                        return "/v2/applications/" + this.index
                                    }
                                    includeAll(e = !0) {
                                        return this.query["include-all"] = e, this
                                    }
                                }
                                class w extends G.Z {
                                    constructor(e, r, n) {
                                        super(e, r), this.appID = n, this.appID = n
                                    }
                                    path() {
                                        return `/v2/applications/${this.appID}/logs`
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    minRound(e) {
                                        return this.query["min-round"] = e, this
                                    }
                                    maxRound(e) {
                                        return this.query["max-round"] = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    sender(e) {
                                        return this.query["sender-address"] = e, this
                                    }
                                    txid(e) {
                                        return this.query.txid = e, this
                                    }
                                }
                                class v extends G.Z {
                                    path() {
                                        return "/v2/accounts"
                                    }
                                    currencyGreaterThan(e) {
                                        return this.query["currency-greater-than"] = e, this
                                    }
                                    currencyLessThan(e) {
                                        return this.query["currency-less-than"] = e, this
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    assetID(e) {
                                        return this.query["asset-id"] = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    round(e) {
                                        return this.query.round = e, this
                                    }
                                    authAddr(e) {
                                        return this.query["auth-addr"] = e, this
                                    }
                                    applicationID(e) {
                                        return this.query["application-id"] = e, this
                                    }
                                    includeAll(e = !0) {
                                        return this.query["include-all"] = e, this
                                    }
                                    exclude(e) {
                                        return this.query.exclude = e, this
                                    }
                                }
                                class x extends G.Z {
                                    path() {
                                        return "/v2/transactions"
                                    }
                                    notePrefix(e) {
                                        return this.query["note-prefix"] = V(e), this
                                    }
                                    txType(e) {
                                        return this.query["tx-type"] = e, this
                                    }
                                    sigType(e) {
                                        return this.query["sig-type"] = e, this
                                    }
                                    txid(e) {
                                        return this.query.txid = e, this
                                    }
                                    round(e) {
                                        return this.query.round = e, this
                                    }
                                    minRound(e) {
                                        return this.query["min-round"] = e, this
                                    }
                                    maxRound(e) {
                                        return this.query["max-round"] = e, this
                                    }
                                    assetID(e) {
                                        return this.query["asset-id"] = e, this
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    beforeTime(e) {
                                        return this.query["before-time"] = e, this
                                    }
                                    afterTime(e) {
                                        return this.query["after-time"] = e, this
                                    }
                                    currencyGreaterThan(e) {
                                        return this.query["currency-greater-than"] = e, this
                                    }
                                    currencyLessThan(e) {
                                        return this.query["currency-less-than"] = e, this
                                    }
                                    addressRole(e) {
                                        return this.query["address-role"] = e, this
                                    }
                                    address(e) {
                                        return this.query.address = e, this
                                    }
                                    excludeCloseTo(e) {
                                        return this.query["exclude-close-to"] = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    rekeyTo(e) {
                                        return this.query["rekey-to"] = e, this
                                    }
                                    applicationID(e) {
                                        return this.query["application-id"] = e, this
                                    }
                                }
                                class S extends G.Z {
                                    path() {
                                        return "/v2/assets"
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    creator(e) {
                                        return this.query.creator = e, this
                                    }
                                    name(e) {
                                        return this.query.name = e, this
                                    }
                                    unit(e) {
                                        return this.query.unit = e, this
                                    }
                                    index(e) {
                                        return this.query["asset-id"] = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    includeAll(e = !0) {
                                        return this.query["include-all"] = e, this
                                    }
                                }
                                class E extends G.Z {
                                    path() {
                                        return "/v2/applications"
                                    }
                                    index(e) {
                                        return this.query["application-id"] = e, this
                                    }
                                    creator(e) {
                                        return this.query.creator = e, this
                                    }
                                    nextToken(e) {
                                        return this.query.next = e, this
                                    }
                                    limit(e) {
                                        return this.query.limit = e, this
                                    }
                                    includeAll(e = !0) {
                                        return this.query["include-all"] = e, this
                                    }
                                }
                                class T extends H.Z {
                                    constructor(e, r = "http://127.0.0.1", n = 8080, H = {}) {
                                        super("X-Indexer-API-Token", e, r, n, H)
                                    }
                                    makeHealthCheck() {
                                        return new s(this.c, this.intDecoding)
                                    }
                                    lookupAssetBalances(e) {
                                        return new i(this.c, this.intDecoding, e)
                                    }
                                    lookupAssetTransactions(e) {
                                        return new l(this.c, this.intDecoding, e)
                                    }
                                    lookupAccountTransactions(e) {
                                        return new u(this.c, this.intDecoding, e)
                                    }
                                    lookupBlock(e) {
                                        return new h(this.c, this.intDecoding, e)
                                    }
                                    lookupTransactionByID(e) {
                                        return new p(this.c, this.intDecoding, e)
                                    }
                                    lookupAccountByID(e) {
                                        return new f(this.c, this.intDecoding, e)
                                    }
                                    lookupAccountAssets(e) {
                                        return new d(this.c, this.intDecoding, e)
                                    }
                                    lookupAccountCreatedAssets(e) {
                                        return new g(this.c, this.intDecoding, e)
                                    }
                                    lookupAccountAppLocalStates(e) {
                                        return new y(this.c, this.intDecoding, e)
                                    }
                                    lookupAccountCreatedApplications(e) {
                                        return new m(this.c, this.intDecoding, e)
                                    }
                                    lookupAssetByID(e) {
                                        return new b(this.c, this.intDecoding, e)
                                    }
                                    lookupApplications(e) {
                                        return new A(this.c, this.intDecoding, e)
                                    }
                                    lookupApplicationLogs(e) {
                                        return new w(this.c, this.intDecoding, e)
                                    }
                                    searchAccounts() {
                                        return new v(this.c, this.intDecoding)
                                    }
                                    searchForTransactions() {
                                        return new x(this.c, this.intDecoding)
                                    }
                                    searchForAssets() {
                                        return new S(this.c, this.intDecoding)
                                    }
                                    searchForApplications() {
                                        return new E(this.c, this.intDecoding)
                                    }
                                }
                            },
                            8680: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    Z: () => o
                                });
                                var H = n(7197);
                                class o {
                                    constructor(e, r) {
                                        this.c = e, this.query = {}, this.intDecoding = r || H.Z.DEFAULT
                                    }
                                    prepare(e) {
                                        return e
                                    }
                                    async
                                        do(e = {}) {
                                            const r = {};
                                            "default" !== this.intDecoding && (r.intDecoding = this.intDecoding);
                                            const n = await this.c.get(this.path(), this.query, e, r);
                                            return this.prepare(n.body)
                                        }
                                        setIntDecoding(e) {
                                            if ("default" !== e && "safe" !== e && "mixed" !== e && "bigint" !== e) throw new Error("Invalid method for int decoding: " + e);
                                            return this.intDecoding = e, this
                                        }
                                }
                            },
                            3480: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    Z: () => s
                                });
                                var H = n(1113),
                                    G = n(7197);
                                class s {
                                    constructor(e, r, n, q, V = {}) {
                                        if ("function" == typeof r.get) this.c = new H.default(r);
                                        else {
                                            let G;
                                            G = "string" == typeof r ? function(e = "", r) {
                                                const n = {};
                                                return n[r] = e, n
                                            }(r, e) : r, this.c = new H.default(G, n, q, V)
                                        }
                                        this.intDecoding = G.Z.DEFAULT
                                    }
                                    setIntEncoding(e) {
                                        this.intDecoding = e
                                    }
                                    getIntEncoding() {
                                        return this.intDecoding
                                    }
                                }
                            },
                            3458: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    b: () => Q,
                                    A: () => d
                                });
                                var H = n(7677),
                                    G = n(9417),
                                    q = n(1988),
                                    V = n(1063),
                                    W = n(5062),
                                    $ = n(834),
                                    X = n(1624),
                                    Y = n(2486).Buffer;
                                const J = Y.from([21, 31, 124, 117]);
                                var Q;

                                function Z(e, r, n) {
                                    if (null != n && e === n) return 0;
                                    const H = null == n ? 0 : 1;
                                    for (let n = 0; n < r.length; n++)
                                        if (e === r[n]) return n + H;
                                    return r.push(e), r.length - 1 + H
                                }! function(e) {
                                    e[e.BUILDING = 0] = "BUILDING", e[e.BUILT = 1] = "BUILT", e[e.SIGNED = 2] = "SIGNED", e[e.SUBMITTED = 3] = "SUBMITTED", e[e.COMMITTED = 4] = "COMMITTED"
                                }(Q || (Q = {}));
                                class d {
                                    constructor() {
                                        this.status = Q.BUILDING, this.transactions = [], this.methodCalls = new Map, this.signedTxns = [], this.txIDs = []
                                    }
                                    getStatus() {
                                        return this.status
                                    }
                                    count() {
                                        return this.transactions.length
                                    }
                                    clone() {
                                        const e = new d;
                                        return e.transactions = this.transactions.map(({
                                            txn: e,
                                            signer: r
                                        }) => ({
                                            txn: G.Transaction.from_obj_for_encoding({
                                                ...e.get_obj_for_encoding(),
                                                grp: void 0
                                            }),
                                            signer: r
                                        })), e.methodCalls = new Map(this.methodCalls), e
                                    }
                                    addTransaction(e) {
                                        if (this.status !== Q.BUILDING) throw new Error("Cannot add transactions when composer status is not BUILDING");
                                        if (this.transactions.length === d.MAX_GROUP_SIZE) throw new Error("Adding an additional transaction exceeds the maximum atomic group size of " + d.MAX_GROUP_SIZE);
                                        if (e.txn.group && e.txn.group.some(e => 0 !== e)) throw new Error("Cannot add a transaction with nonzero group ID");
                                        this.transactions.push(e)
                                    }
                                    addMethodCall({
                                        appID: e,
                                        method: r,
                                        methodArgs: n,
                                        sender: G,
                                        suggestedParams: V,
                                        onComplete: W,
                                        approvalProgram: Y,
                                        clearProgram: J,
                                        numGlobalInts: ee,
                                        numGlobalByteSlices: te,
                                        numLocalInts: re,
                                        numLocalByteSlices: ne,
                                        extraPages: oe,
                                        note: se,
                                        lease: ie,
                                        rekeyTo: ae,
                                        signer: ce
                                    }) {
                                        if (this.status !== Q.BUILDING) throw new Error("Cannot add transactions when composer status is not BUILDING");
                                        if (this.transactions.length + r.txnCount() > d.MAX_GROUP_SIZE) throw new Error("Adding additional transactions exceeds the maximum atomic group size of " + d.MAX_GROUP_SIZE);
                                        if (0 === e) {
                                            if (null == Y || null == J || null == ee || null == te || null == re || null == ne) throw new Error("One of the following required parameters for application creation is missing: approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices")
                                        } else if (W === X.hq.UpdateApplicationOC) {
                                            if (null == Y || null == J) throw new Error("One of the following required parameters for OnApplicationComplete.UpdateApplicationOC is missing: approvalProgram, clearProgram");
                                            if (null != ee || null != te || null != re || null != ne || null != oe) throw new Error("One of the following application creation parameters were set on a non-creation call: numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices, extraPages")
                                        } else if (null != Y || null != J || null != ee || null != te || null != re || null != ne || null != oe) throw new Error("One of the following application creation parameters were set on a non-creation call: approvalProgram, clearProgram, numGlobalInts, numGlobalByteSlices, numLocalInts, numLocalByteSlices, extraPages");
                                        if (null == n && (n = []), n.length !== r.args.length) throw new Error(`Incorrect number of method arguments. Expected ${r.args.length}, got ${n.length}`);
                                        let ue = [],
                                            le = [];
                                        const he = [],
                                            pe = [],
                                            fe = [],
                                            de = new Map;
                                        for (let e = 0; e < n.length; e++) {
                                            let G = r.args[e].type;
                                            const q = n[e];
                                            if ((0, H.AE)(G)) {
                                                if (!(0, $.Xw)(q) || !(0, H.vJ)(G, q.txn)) throw new Error(`Expected ${G} transaction for argument at index ${e}`);
                                                if (q.txn.group && q.txn.group.some(e => 0 !== e)) throw new Error("Cannot add a transaction with nonzero group ID");
                                                he.push(q)
                                            } else {
                                                if ((0, $.Xw)(q)) throw new Error("Expected non-transaction value for argument at index " + e);
                                                if ((0, H.o5)(G) && (de.set(pe.length, ue.length), pe.push(G), fe.push(q), G = new H.Pu(8)), "string" == typeof G) throw new Error("Unknown ABI type: " + G);
                                                ue.push(G), le.push(q)
                                            }
                                        }
                                        const ge = [],
                                            ye = [],
                                            me = [],
                                            be = [];
                                        for (let r = 0; r < pe.length; r++) {
                                            const n = pe[r],
                                                q = fe[r];
                                            let V = 0;
                                            switch (n) {
                                                case H.UV.account: {
                                                    const e = new H.JQ;
                                                    V = Z(e.decode(e.encode(q)), ye, G);
                                                    break
                                                }
                                                case H.UV.application: {
                                                    const r = new H.Pu(64),
                                                        n = r.decode(r.encode(q));
                                                    if (n > Number.MAX_SAFE_INTEGER) throw new Error("Expected safe integer for application value, got " + n);
                                                    V = Z(Number(n), me, e);
                                                    break
                                                }
                                                case H.UV.asset: {
                                                    const e = new H.Pu(64),
                                                        r = e.decode(e.encode(q));
                                                    if (r > Number.MAX_SAFE_INTEGER) throw new Error("Expected safe integer for asset value, got " + r);
                                                    V = Z(Number(r), be);
                                                    break
                                                }
                                                default:
                                                    throw new Error("Unknown reference type: " + n)
                                            }
                                            ge.push(V)
                                        }
                                        for (let e = 0; e < ge.length; e++) le[de.get(e)] = ge[e];
                                        if (ue.length > 15) {
                                            const e = ue.slice(14),
                                                r = le.slice(14);
                                            ue = ue.slice(0, 14), le = le.slice(0, 14), ue.push(new H.w1(e)), le.push(r)
                                        }
                                        const Ae = [r.getSelector()];
                                        for (let e = 0; e < ue.length; e++) Ae.push(ue[e].encode(le[e]));
                                        const we = {
                                            txn: (0, q.makeApplicationCallTxnFromObject)({
                                                from: G,
                                                appIndex: e,
                                                appArgs: Ae,
                                                accounts: ye,
                                                foreignApps: me,
                                                foreignAssets: be,
                                                onComplete: null == W ? X.hq.NoOpOC : W,
                                                approvalProgram: Y,
                                                clearProgram: J,
                                                numGlobalInts: ee,
                                                numGlobalByteSlices: te,
                                                numLocalInts: re,
                                                numLocalByteSlices: ne,
                                                extraPages: oe,
                                                lease: ie,
                                                note: se,
                                                rekeyTo: ae,
                                                suggestedParams: V
                                            }),
                                            signer: ce
                                        };
                                        this.transactions.push(...he, we), this.methodCalls.set(this.transactions.length - 1, r)
                                    }
                                    buildGroup() {
                                        if (this.status === Q.BUILDING) {
                                            if (0 === this.transactions.length) throw new Error("Cannot build a group with 0 transactions");
                                            this.transactions.length > 1 && (0, V.assignGroupID)(this.transactions.map(e => e.txn)), this.status = Q.BUILT
                                        }
                                        return this.transactions
                                    }
                                    async gatherSignatures() {
                                        if (this.status >= Q.SIGNED) return this.signedTxns;
                                        const e = this.buildGroup(),
                                            r = e.map(e => e.txn),
                                            n = new Map;
                                        for (let r = 0; r < e.length; r++) {
                                            const {
                                                signer: H
                                            } = e[r];
                                            n.has(H) || n.set(H, []), n.get(H).push(r)
                                        }
                                        const H = Array.from(n),
                                            q = await Promise.all(H.map(([e, n]) => e(r, n))),
                                            V = e.map(() => null);
                                        for (let e = 0; e < H.length; e++) {
                                            const r = H[e][1],
                                                n = q[e];
                                            for (let e = 0; e < r.length; e++) V[r[e]] = n[e]
                                        }
                                        if (!V.every(e => null != e)) throw new Error("Missing signatures. Got " + V);
                                        const W = V.map((e, r) => {
                                            try {
                                                return (0, G.decodeSignedTransaction)(e).txn.txID()
                                            } catch (e) {
                                                throw new Error(`Cannot decode signed transaction at index ${r}. ${e}`)
                                            }
                                        });
                                        return this.signedTxns = V, this.txIDs = W, this.status = Q.SIGNED, V
                                    }
                                    async submit(e) {
                                        if (this.status > Q.SUBMITTED) throw new Error("Transaction group cannot be resubmitted");
                                        const r = await this.gatherSignatures();
                                        return await e.sendRawTransaction(r).do(), this.status = Q.SUBMITTED, this.txIDs
                                    }
                                    async execute(e, r) {
                                        if (this.status === Q.COMMITTED) throw new Error("Transaction group has already been executed successfully");
                                        const n = await this.submit(e);
                                        this.status = Q.SUBMITTED;
                                        const H = this.transactions.findIndex((e, r) => this.methodCalls.has(r)),
                                            G = -1 === H ? 0 : H,
                                            q = await (0, W.K)(e, n[G], r);
                                        this.status = Q.COMMITTED;
                                        const V = q["confirmed-round"],
                                            $ = [];
                                        for (const [r, G] of this.methodCalls) {
                                            const V = n[r],
                                                W = {
                                                    txID: V,
                                                    rawReturnValue: new Uint8Array
                                                };
                                            try {
                                                const n = r === H ? q : await e.pendingTransactionInformation(V).do();
                                                if (W.txInfo = n, "void" !== G.returns.type) {
                                                    const e = n.logs || [];
                                                    if (0 === e.length) throw new Error("App call transaction did not log a return value");
                                                    const r = Y.from(e[e.length - 1], "base64");
                                                    if (r.byteLength < 4 || !r.slice(0, 4).equals(J)) throw new Error("App call transaction did not log a return value");
                                                    W.rawReturnValue = new Uint8Array(r.slice(4)), W.returnValue = G.returns.type.decode(W.rawReturnValue)
                                                }
                                            } catch (e) {
                                                W.decodeError = e
                                            }
                                            $.push(W)
                                        }
                                        return {
                                            confirmedRound: V,
                                            txIDs: n,
                                            methodResults: $
                                        }
                                    }
                                }
                                d.MAX_GROUP_SIZE = 16
                            },
                            9070: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    rD: () => G,
                                    _: () => q,
                                    HN: () => V
                                });
                                const H = 1e6,
                                    G = "Microalgos should be positive and less than 2^53 - 1.";

                                function q(e) {
                                    if (e < 0 || !Number.isSafeInteger(e)) throw new Error(G);
                                    return e / H
                                }

                                function V(e) {
                                    const r = e * H;
                                    return Math.round(r)
                                }
                            },
                            4383: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    P: () => $,
                                    x: () => y
                                });
                                var H = n(227),
                                    G = n(1824),
                                    q = n(7116),
                                    V = n(2486).Buffer;

                                function W(e) {
                                    return e.params["approval-program"] = V.from(e.params["approval-program"].toString(), "base64"), e.params["clear-state-program"] = V.from(e.params["clear-state-program"].toString(), "base64"), e
                                }
                                async function $({
                                    client: e,
                                    txns: r,
                                    protocolVersion: n,
                                    latestTimestamp: V,
                                    round: $,
                                    sources: X
                                }) {
                                    const Y = [],
                                        J = [],
                                        Q = [],
                                        Z = [],
                                        ee = [];
                                    for (const e of r) e.txn.type === G.i.appl && (ee.push((0, q.encodeAddress)(e.txn.from.publicKey)), e.txn.appAccounts && ee.push(...e.txn.appAccounts.map(e => (0, q.encodeAddress)(e.publicKey))), e.txn.appForeignApps && (Q.push(...e.txn.appForeignApps), ee.push(...e.txn.appForeignApps.map(e => (0, q.getApplicationAddress)(e)))), e.txn.appForeignAssets && Z.push(...e.txn.appForeignAssets), void 0 === e.txn.appIndex || 0 === e.txn.appIndex ? Y.push(new H.Application(1380011588, new H.ApplicationParams({
                                        creator: (0, q.encodeAddress)(e.txn.from.publicKey),
                                        approvalProgram: e.txn.appApprovalProgram,
                                        clearStateProgram: e.txn.appClearProgram,
                                        localStateSchema: new H.ApplicationStateSchema(e.txn.appLocalInts, e.txn.appLocalByteSlices),
                                        globalStateSchema: new H.ApplicationStateSchema(e.txn.appGlobalInts, e.txn.appGlobalByteSlices)
                                    }))) : (Q.push(e.txn.appIndex), ee.push((0, q.getApplicationAddress)(e.txn.appIndex))));
                                    const te = [];
                                    for (const r of [...new Set(Z)]) te.push(e.getAssetByID(r).do().then(e => {
                                        ee.push(e.params.creator)
                                    }));
                                    await Promise.all(te);
                                    const re = [];
                                    for (const r of [...new Set(Q)]) re.push(e.getApplicationByID(r).do().then(e => {
                                        const r = W(e);
                                        Y.push(r), ee.push(r.params.creator)
                                    }));
                                    await Promise.all(re);
                                    const ne = [];
                                    for (const r of [...new Set(ee)]) ne.push(e.accountInformation(r).do().then(e => {
                                        "created-apps" in e && (e["created-apps"] = e["created-apps"].map(e => W(e))), J.push(e)
                                    }));
                                    return await Promise.all(ne), new H.DryrunRequest({
                                        txns: r.map(e => ({
                                            ...e,
                                            txn: e.txn.get_obj_for_encoding()
                                        })),
                                        accounts: J,
                                        apps: Y,
                                        latestTimestamp: V,
                                        round: $,
                                        protocolVersion: n,
                                        sources: X
                                    })
                                }
                                class u {
                                    constructor(e) {
                                        this.type = 0, this.bytes = "", this.uint = 0, this.type = e.type, this.bytes = e.bytes, this.uint = e.uint
                                    }
                                    toString() {
                                        return 1 === this.type ? "0x" + V.from(this.bytes, "base64").toString("hex") : this.uint.toString()
                                    }
                                }
                                class l {
                                    constructor(e) {
                                        this.error = "", this.line = 0, this.pc = 0, this.scratch = [], this.stack = [], this.error = void 0 === e.error ? "" : e.error, this.line = e.line, this.pc = e.pc, this.scratch = e.scratch, this.stack = e.stack.map(e => new u(e))
                                    }
                                }
                                class h {
                                    constructor(e) {
                                        this.trace = [], void 0 !== e && (this.trace = e.map(e => new l(e)))
                                    }
                                }

                                function X(e, r) {
                                    return e.length > r && r > 0 ? e.slice(0, r) + "..." : e
                                }

                                function Y(e, r) {
                                    if (0 === r.length) return "";
                                    let n = null;
                                    for (let H = 0; H < r.length; H++)(H > e.length || JSON.stringify(e[H]) !== JSON.stringify(r[H])) && (n = H);
                                    if (null == n) return "";
                                    const H = r[n];
                                    return H.bytes.length > 0 ? `${n} = 0x${V.from(H.bytes,"base64").toString("hex")}` : `${n} = ${H.uint.toString()}`
                                }

                                function J(e, r) {
                                    return `[${(r?e.reverse():e).map(e=>{switch(e.type){case 1:return"0x"+V.from(e.bytes,"base64").toString("hex");case 2:return""+e.uint.toString();default:return""}}).join(", ")}]`
                                }
                                class g {
                                    constructor(e) {
                                        this.disassembly = [], this.appCallMessages = [], this.localDeltas = [], this.globalDelta = [], this.cost = 0, this.logicSigMessages = [], this.logicSigDisassembly = [], this.logs = [], this.appCallTrace = void 0, this.logicSigTrace = void 0, this.required = ["disassembly"], this.optionals = ["app-call-messages", "local-deltas", "global-delta", "cost", "logic-sig-messages", "logic-sig-disassembly", "logs"], this.traces = ["app-call-trace", "logic-sig-trace"], this.disassembly = e.disassembly, this.appCallMessages = e["app-call-messages"], this.localDeltas = e["local-deltas"], this.globalDelta = e["global-delta"], this.cost = e.cost, this.logicSigMessages = e["logic-sig-messages"], this.logicSigDisassembly = e["logic-sig-disassembly"], this.logs = e.logs, this.appCallTrace = new h(e["app-call-trace"]), this.logicSigTrace = new h(e["logic-sig-trace"])
                                    }
                                    appCallRejected() {
                                        return void 0 !== this.appCallMessages && this.appCallMessages.includes("REJECT")
                                    }
                                    logicSigRejected() {
                                        return void 0 !== this.logicSigMessages && this.logicSigMessages.includes("REJECT")
                                    }
                                    static trace(e, r, n) {
                                        let H = 30;
                                        void 0 === n.maxValueWidth && (H = n.maxValueWidth);
                                        const G = [
                                            ["pc#", "ln#", "source", "scratch", "stack"]
                                        ];
                                        for (let q = 0; q < e.trace.length; q++) {
                                            const {
                                                line: V,
                                                error: W,
                                                pc: $,
                                                scratch: Q,
                                                stack: Z
                                            } = e.trace[q], ee = void 0 !== Q ? Q : [], te = q > 0 && void 0 !== e.trace[q - 1].scratch ? e.trace[q - 1].scratch : [], re = "" === W ? r[V] : `!! ${W} !!`;
                                            G.push([$.toString().padEnd(3, " "), V.toString().padEnd(3, " "), X(re, H), X(Y(te, ee), H), X(J(Z, n.topOfStackFirst), H)])
                                        }
                                        const q = G.reduce((e, r) => {
                                            const n = new Array(G[0].length).fill(0);
                                            for (let H = 0; H < e.length; H++) n[H] = r[H].length > e[H] ? r[H].length : e[H];
                                            return n
                                        }, new Array(G[0].length).fill(0));
                                        return G.map(e => e.map((e, r) => e.padEnd(q[r] + 1, " ")).join("|").trim()).join("\n") + "\n"
                                    }
                                    appTrace(e) {
                                        if (void 0 === this.appCallTrace || !this.disassembly) return "";
                                        let r = e;
                                        return void 0 === e && (r = {
                                            maxValueWidth: 30,
                                            topOfStackFirst: !1
                                        }), g.trace(this.appCallTrace, this.disassembly, r)
                                    }
                                    lsigTrace(e) {
                                        if (void 0 === this.logicSigTrace || void 0 === this.logicSigDisassembly) return "";
                                        let r = e;
                                        return void 0 === e && (r = {
                                            maxValueWidth: 30,
                                            topOfStackFirst: !0
                                        }), g.trace(this.logicSigTrace, this.logicSigDisassembly, r)
                                    }
                                }
                                class y {
                                    constructor(e) {
                                        this.error = "", this.protocolVersion = "", this.txns = [], this.error = e.error, this.protocolVersion = e["protocol-version"], this.txns = e.txns.map(e => new g(e))
                                    }
                                }
                            },
                            7116: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    ALGORAND_ZERO_ADDRESS_STRING: () => X,
                                    MALFORMED_ADDRESS_ERROR_MSG: () => Q,
                                    CHECKSUM_ADDRESS_ERROR_MSG: () => Z,
                                    INVALID_MSIG_VERSION_ERROR_MSG: () => ee,
                                    INVALID_MSIG_THRESHOLD_ERROR_MSG: () => te,
                                    INVALID_MSIG_PK_ERROR_MSG: () => re,
                                    UNEXPECTED_PK_LEN_ERROR_MSG: () => ne,
                                    decodeAddress: () => oe,
                                    isValidAddress: () => se,
                                    encodeAddress: () => ie,
                                    fromMultisigPreImg: () => ae,
                                    fromMultisigPreImgAddrs: () => ce,
                                    getApplicationAddress: () => ue
                                });
                                var H = n(7267),
                                    G = n.n(H),
                                    q = n(9404),
                                    V = n(413),
                                    W = n(6963),
                                    $ = n(2486).Buffer;
                                const X = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ",
                                    Y = new Uint8Array([77, 117, 108, 116, 105, 115, 105, 103, 65, 100, 100, 114]),
                                    J = $.from("appID"),
                                    Q = "address seems to be malformed",
                                    Z = "wrong checksum for address",
                                    ee = "invalid multisig version",
                                    te = "bad multisig threshold",
                                    re = "bad multisig public key - wrong length",
                                    ne = "nacl public key length is not 32 bytes";

                                function oe(e) {
                                    if ("string" != typeof e || 58 !== e.length) throw new Error(Q);
                                    const r = G().decode.asBytes(e.toString());
                                    if (36 !== r.length) throw new Error(Q);
                                    const n = new Uint8Array(r.slice(0, 32)),
                                        H = new Uint8Array(r.slice(q.PUBLIC_KEY_LENGTH, 36)),
                                        W = q.genericHash(n).slice(q.HASH_BYTES_LENGTH - 4, q.HASH_BYTES_LENGTH);
                                    if (!V.arrayEqual(W, H)) throw new Error(Z);
                                    return {
                                        publicKey: n,
                                        checksum: H
                                    }
                                }

                                function se(e) {
                                    try {
                                        oe(e)
                                    } catch (e) {
                                        return !1
                                    }
                                    return !0
                                }

                                function ie(e) {
                                    const r = q.genericHash(e).slice(q.PUBLIC_KEY_LENGTH - 4, q.PUBLIC_KEY_LENGTH);
                                    return G().encode(V.concatArrays(e, r)).toString().slice(0, 58)
                                }

                                function ae({
                                    version: e,
                                    threshold: r,
                                    pks: n
                                }) {
                                    if (1 !== e || e > 255 || e < 0) throw new Error(ee);
                                    if (0 === r || 0 === n.length || r > n.length || r > 255) throw new Error(te);
                                    if (32 !== q.PUBLIC_KEY_LENGTH) throw new Error(ne);
                                    const H = new Uint8Array(Y.length + 2 + 32 * n.length);
                                    H.set(Y, 0), H.set([e], Y.length), H.set([r], Y.length + 1);
                                    for (let e = 0; e < n.length; e++) {
                                        if (32 !== n[e].length) throw new Error(re);
                                        H.set(n[e], Y.length + 2 + 32 * e)
                                    }
                                    return new Uint8Array(q.genericHash(H))
                                }

                                function ce({
                                    version: e,
                                    threshold: r,
                                    addrs: n
                                }) {
                                    return ie(ae({
                                        version: e,
                                        threshold: r,
                                        pks: n.map(e => oe(e).publicKey)
                                    }))
                                }

                                function ue(e) {
                                    const r = V.concatArrays(J, (0, W.T)(e)),
                                        n = q.genericHash(r);
                                    return ie(new Uint8Array(n))
                                }
                            },
                            8922: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    j: () => G,
                                    v: () => q
                                });
                                var H = n(2486).Buffer;

                                function G(e, r) {
                                    let n = e.toString(16);
                                    n.length !== 2 * r && (n = n.padStart(2 * r, "0"));
                                    const H = new Uint8Array(n.length / 2);
                                    for (let e = 0, r = 0; e < n.length / 2; e++, r += 2) H[e] = parseInt(n.slice(r, r + 2), 16);
                                    return H
                                }

                                function q(e) {
                                    let r = BigInt(0);
                                    const n = H.from(e);
                                    for (let H = 0; H < e.length; H++) r = BigInt(Number(n.readUIntBE(H, 1))) + r * BigInt(256);
                                    return r
                                }
                            },
                            3033: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    ERROR_CONTAINS_EMPTY_STRING: () => G,
                                    encode: () => q,
                                    decode: () => V
                                });
                                var H = n(5406);
                                const G = "The object contains empty or 0 values. First empty or 0 value encountered during encoding: ";

                                function q(e) {
                                    const r = function(e) {
                                        for (const r in e)
                                            if (Object.prototype.hasOwnProperty.call(e, r) && (!e[r] || 0 === e[r].length)) return {
                                                containsEmpty: !0,
                                                firstEmptyKey: r
                                            };
                                        return {
                                            containsEmpty: !1,
                                            firstEmptyKey: void 0
                                        }
                                    }(e);
                                    if (r.containsEmpty) throw new Error(G + r.firstEmptyKey);
                                    return H.encode(e, {
                                        sortKeys: !0
                                    })
                                }

                                function V(e) {
                                    return H.decode(e)
                                }
                            },
                            6963: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    T: () => G,
                                    u: () => q
                                });
                                var H = n(2486).Buffer;

                                function G(e) {
                                    if ("bigint" != typeof e && !Number.isInteger(e) || e < 0 || e > BigInt("0xffffffffffffffff")) throw new Error("Input is not a 64-bit unsigned integer");
                                    const r = H.allocUnsafe(8);
                                    return r.writeBigUInt64BE(BigInt(e)), new Uint8Array(r)
                                }

                                function q(e, r = "safe") {
                                    if ("safe" !== r && "mixed" !== r && "bigint" !== r) throw new Error("Unknown decodingMode option: " + r);
                                    if (0 === e.byteLength || e.byteLength > 8) throw new Error("Data has unacceptable length. Expected length is between 1 and 8, got " + e.byteLength);
                                    const n = H.allocUnsafe(8 - e.byteLength);
                                    n.fill(0);
                                    const G = H.concat([n, H.from(e)]).readBigUInt64BE(),
                                        q = G > Number.MAX_SAFE_INTEGER;
                                    if ("safe" === r) {
                                        if (q) throw new Error(`Integer exceeds maximum safe integer: ${G.toString()}. Try decoding with "mixed" or "safe" decodingMode.`);
                                        return Number(G)
                                    }
                                    return "mixed" !== r || q ? G : Number(G)
                                }
                            },
                            1063: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    TxGroup: () => u,
                                    computeGroupID: () => X,
                                    assignGroupID: () => Y,
                                    default: () => J
                                });
                                var H = n(9417),
                                    G = n(9404),
                                    q = n(3033),
                                    V = n(7116),
                                    W = n(413),
                                    $ = n(2486).Buffer;
                                class u {
                                    constructor(e) {
                                        if (this.name = "Transaction group", this.tag = $.from("TG"), e.length > 16) {
                                            const r = `${e.length.toString()} transactions grouped together but max group size is ${16..toString()}`;
                                            throw Error(r)
                                        }
                                        this.txGroupHashes = e
                                    }
                                    get_obj_for_encoding() {
                                        return {
                                            txlist: this.txGroupHashes
                                        }
                                    }
                                    static from_obj_for_encoding(e) {
                                        const r = Object.create(this.prototype);
                                        r.name = "Transaction group", r.tag = $.from("TG"), r.txGroupHashes = [];
                                        for (const n of e.txlist) r.txGroupHashes.push($.from(n));
                                        return r
                                    }
                                    toByte() {
                                        return q.encode(this.get_obj_for_encoding())
                                    }
                                }

                                function X(e) {
                                    const r = [];
                                    for (const n of e) {
                                        const e = H.instantiateTxnIfNeeded(n);
                                        r.push(e.rawTxID())
                                    }
                                    const n = new u(r),
                                        q = n.toByte(),
                                        V = $.from(W.concatArrays(n.tag, q)),
                                        X = G.genericHash(V);
                                    return $.from(X)
                                }

                                function Y(e, r) {
                                    const n = X(e),
                                        G = [];
                                    for (const q of e) {
                                        const e = H.instantiateTxnIfNeeded(q);
                                        r && V.encodeAddress(e.from.publicKey) !== r || (e.group = n, G.push(e))
                                    }
                                    return G
                                }
                                const J = u
                            },
                            5583: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    checkByteConstBlock: () => Z,
                                    checkIntConstBlock: () => Q,
                                    checkProgram: () => J,
                                    checkPushByteOp: () => te,
                                    checkPushIntOp: () => ee,
                                    langspecEvalMaxVersion: () => re,
                                    langspecLogicSigVersion: () => ne,
                                    parseUvarint: () => q,
                                    readProgram: () => Y
                                });
                                const H = JSON.parse('{"z_":6,"BV":5,"AP":[{"Opcode":0,"Name":"err","Cost":1,"Size":1,"Doc":"Fail immediately.","Groups":["Flow Control"]},{"Opcode":1,"Name":"sha256","Args":"B","Returns":"B","Cost":35,"Size":1,"Doc":"SHA256 hash of value A, yields [32]byte","Groups":["Arithmetic"]},{"Opcode":2,"Name":"keccak256","Args":"B","Returns":"B","Cost":130,"Size":1,"Doc":"Keccak256 hash of value A, yields [32]byte","Groups":["Arithmetic"]},{"Opcode":3,"Name":"sha512_256","Args":"B","Returns":"B","Cost":45,"Size":1,"Doc":"SHA512_256 hash of value A, yields [32]byte","Groups":["Arithmetic"]},{"Opcode":4,"Name":"ed25519verify","Args":"BBB","Returns":"U","Cost":1900,"Size":1,"Doc":"for (data A, signature B, pubkey C) verify the signature of (\\"ProgData\\" || program_hash || data) against the pubkey => {0 or 1}","DocExtra":"The 32 byte public key is the last element on the stack, preceded by the 64 byte signature at the second-to-last element on the stack, preceded by the data which was signed at the third-to-last element on the stack.","Groups":["Arithmetic"]},{"Opcode":5,"Name":"ecdsa_verify","Args":"BBBBB","Returns":"U","Cost":1700,"Size":2,"Doc":"for (data A, signature B, C and pubkey D, E) verify the signature of the data against the pubkey => {0 or 1}","DocExtra":"The 32 byte Y-component of a public key is the last element on the stack, preceded by X-component of a pubkey, preceded by S and R components of a signature, preceded by the data that is fifth element on the stack. All values are big-endian encoded. The signed data must be 32 bytes long, and signatures in lower-S form are only accepted.","ImmediateNote":"{uint8 curve index}","Groups":["Arithmetic"]},{"Opcode":6,"Name":"ecdsa_pk_decompress","Args":"B","Returns":"BB","Cost":650,"Size":2,"Doc":"decompress pubkey A into components X, Y","DocExtra":"The 33 byte public key in a compressed form to be decompressed into X and Y (top) components. All values are big-endian encoded.","ImmediateNote":"{uint8 curve index}","Groups":["Arithmetic"]},{"Opcode":7,"Name":"ecdsa_pk_recover","Args":"BUBB","Returns":"BB","Cost":2000,"Size":2,"Doc":"for (data A, recovery id B, signature C, D) recover a public key","DocExtra":"S (top) and R elements of a signature, recovery id and data (bottom) are expected on the stack and used to deriver a public key. All values are big-endian encoded. The signed data must be 32 bytes long.","ImmediateNote":"{uint8 curve index}","Groups":["Arithmetic"]},{"Opcode":8,"Name":"+","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A plus B. Fail on overflow.","DocExtra":"Overflow is an error condition which halts execution and fails the transaction. Full precision is available from `addw`.","Groups":["Arithmetic"]},{"Opcode":9,"Name":"-","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A minus B. Fail if B > A.","Groups":["Arithmetic"]},{"Opcode":10,"Name":"/","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A divided by B (truncated division). Fail if B == 0.","DocExtra":"`divmodw` is available to divide the two-element values produced by `mulw` and `addw`.","Groups":["Arithmetic"]},{"Opcode":11,"Name":"*","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A times B. Fail on overflow.","DocExtra":"Overflow is an error condition which halts execution and fails the transaction. Full precision is available from `mulw`.","Groups":["Arithmetic"]},{"Opcode":12,"Name":"<","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A less than B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":13,"Name":">","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A greater than B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":14,"Name":"<=","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A less than or equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":15,"Name":">=","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A greater than or equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":16,"Name":"&&","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A is not zero and B is not zero => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":17,"Name":"||","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A is not zero or B is not zero => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":18,"Name":"==","Args":"..","Returns":"U","Cost":1,"Size":1,"Doc":"A is equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":19,"Name":"!=","Args":"..","Returns":"U","Cost":1,"Size":1,"Doc":"A is not equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":20,"Name":"!","Args":"U","Returns":"U","Cost":1,"Size":1,"Doc":"A == 0 yields 1; else 0","Groups":["Arithmetic"]},{"Opcode":21,"Name":"len","Args":"B","Returns":"U","Cost":1,"Size":1,"Doc":"yields length of byte value A","Groups":["Arithmetic"]},{"Opcode":22,"Name":"itob","Args":"U","Returns":"B","Cost":1,"Size":1,"Doc":"converts uint64 A to big endian bytes","Groups":["Arithmetic"]},{"Opcode":23,"Name":"btoi","Args":"B","Returns":"U","Cost":1,"Size":1,"Doc":"converts bytes A as big endian to uint64","DocExtra":"`btoi` fails if the input is longer than 8 bytes.","Groups":["Arithmetic"]},{"Opcode":24,"Name":"%","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A modulo B. Fail if B == 0.","Groups":["Arithmetic"]},{"Opcode":25,"Name":"|","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A bitwise-or B","Groups":["Arithmetic"]},{"Opcode":26,"Name":"&","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A bitwise-and B","Groups":["Arithmetic"]},{"Opcode":27,"Name":"^","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A bitwise-xor B","Groups":["Arithmetic"]},{"Opcode":28,"Name":"~","Args":"U","Returns":"U","Cost":1,"Size":1,"Doc":"bitwise invert value A","Groups":["Arithmetic"]},{"Opcode":29,"Name":"mulw","Args":"UU","Returns":"UU","Cost":1,"Size":1,"Doc":"A times B as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low","Groups":["Arithmetic"]},{"Opcode":30,"Name":"addw","Args":"UU","Returns":"UU","Cost":1,"Size":1,"Doc":"A plus B as a 128-bit result. X is the carry-bit, Y is the low-order 64 bits.","Groups":["Arithmetic"]},{"Opcode":31,"Name":"divmodw","Args":"UUUU","Returns":"UUUU","Cost":20,"Size":1,"Doc":"W,X = (A,B / C,D); Y,Z = (A,B modulo C,D)","DocExtra":"The notation J,K indicates that two uint64 values J and K are interpreted as a uint128 value, with J as the high uint64 and K the low.","Groups":["Arithmetic"]},{"Opcode":32,"Name":"intcblock","Cost":1,"Size":0,"Doc":"prepare block of uint64 constants for use by intc","DocExtra":"`intcblock` loads following program bytes into an array of integer constants in the evaluator. These integer constants can be referred to by `intc` and `intc_*` which will push the value onto the stack. Subsequent calls to `intcblock` reset and replace the integer constants available to the script.","ImmediateNote":"{varuint length} [{varuint value}, ...]","Groups":["Loading Values"]},{"Opcode":33,"Name":"intc","Returns":"U","Cost":1,"Size":2,"Doc":"Ith constant from intcblock","ImmediateNote":"{uint8 int constant index}","Groups":["Loading Values"]},{"Opcode":34,"Name":"intc_0","Returns":"U","Cost":1,"Size":1,"Doc":"constant 0 from intcblock","Groups":["Loading Values"]},{"Opcode":35,"Name":"intc_1","Returns":"U","Cost":1,"Size":1,"Doc":"constant 1 from intcblock","Groups":["Loading Values"]},{"Opcode":36,"Name":"intc_2","Returns":"U","Cost":1,"Size":1,"Doc":"constant 2 from intcblock","Groups":["Loading Values"]},{"Opcode":37,"Name":"intc_3","Returns":"U","Cost":1,"Size":1,"Doc":"constant 3 from intcblock","Groups":["Loading Values"]},{"Opcode":38,"Name":"bytecblock","Cost":1,"Size":0,"Doc":"prepare block of byte-array constants for use by bytec","DocExtra":"`bytecblock` loads the following program bytes into an array of byte-array constants in the evaluator. These constants can be referred to by `bytec` and `bytec_*` which will push the value onto the stack. Subsequent calls to `bytecblock` reset and replace the bytes constants available to the script.","ImmediateNote":"{varuint length} [({varuint value length} bytes), ...]","Groups":["Loading Values"]},{"Opcode":39,"Name":"bytec","Returns":"B","Cost":1,"Size":2,"Doc":"Ith constant from bytecblock","ImmediateNote":"{uint8 byte constant index}","Groups":["Loading Values"]},{"Opcode":40,"Name":"bytec_0","Returns":"B","Cost":1,"Size":1,"Doc":"constant 0 from bytecblock","Groups":["Loading Values"]},{"Opcode":41,"Name":"bytec_1","Returns":"B","Cost":1,"Size":1,"Doc":"constant 1 from bytecblock","Groups":["Loading Values"]},{"Opcode":42,"Name":"bytec_2","Returns":"B","Cost":1,"Size":1,"Doc":"constant 2 from bytecblock","Groups":["Loading Values"]},{"Opcode":43,"Name":"bytec_3","Returns":"B","Cost":1,"Size":1,"Doc":"constant 3 from bytecblock","Groups":["Loading Values"]},{"Opcode":44,"Name":"arg","Returns":"B","Cost":1,"Size":2,"Doc":"Nth LogicSig argument","ImmediateNote":"{uint8 arg index N}","Groups":["Loading Values"]},{"Opcode":45,"Name":"arg_0","Returns":"B","Cost":1,"Size":1,"Doc":"LogicSig argument 0","Groups":["Loading Values"]},{"Opcode":46,"Name":"arg_1","Returns":"B","Cost":1,"Size":1,"Doc":"LogicSig argument 1","Groups":["Loading Values"]},{"Opcode":47,"Name":"arg_2","Returns":"B","Cost":1,"Size":1,"Doc":"LogicSig argument 2","Groups":["Loading Values"]},{"Opcode":48,"Name":"arg_3","Returns":"B","Cost":1,"Size":1,"Doc":"LogicSig argument 3","Groups":["Loading Values"]},{"Opcode":49,"Name":"txn","Returns":".","Cost":1,"Size":2,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"field F of current transaction","DocExtra":"FirstValidTime causes the program to fail. The field is reserved for future use.","ImmediateNote":"{uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":50,"Name":"global","Returns":".","Cost":1,"Size":2,"Doc":"global field F","ImmediateNote":"{uint8 global field index}","Groups":["Loading Values"]},{"Opcode":51,"Name":"gtxn","Returns":".","Cost":1,"Size":3,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"field F of the Tth transaction in the current group","DocExtra":"for notes on transaction fields available, see `txn`. If this transaction is _i_ in the group, `gtxn i field` is equivalent to `txn field`.","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":52,"Name":"load","Returns":".","Cost":1,"Size":2,"Doc":"Ith scratch space value. All scratch spaces are 0 at program start.","ImmediateNote":"{uint8 position in scratch space to load from}","Groups":["Loading Values"]},{"Opcode":53,"Name":"store","Args":".","Cost":1,"Size":2,"Doc":"store A to the Ith scratch space","ImmediateNote":"{uint8 position in scratch space to store to}","Groups":["Loading Values"]},{"Opcode":54,"Name":"txna","Returns":".","Cost":1,"Size":3,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ith value of the array field F of the current transaction","ImmediateNote":"{uint8 transaction field index} {uint8 transaction field array index}","Groups":["Loading Values"]},{"Opcode":55,"Name":"gtxna","Returns":".","Cost":1,"Size":4,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ith value of the array field F from the Tth transaction in the current group","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index} {uint8 transaction field array index}","Groups":["Loading Values"]},{"Opcode":56,"Name":"gtxns","Args":"U","Returns":".","Cost":1,"Size":2,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"field F of the Ath transaction in the current group","DocExtra":"for notes on transaction fields available, see `txn`. If top of stack is _i_, `gtxns field` is equivalent to `gtxn _i_ field`. gtxns exists so that _i_ can be calculated, often based on the index of the current transaction.","ImmediateNote":"{uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":57,"Name":"gtxnsa","Args":"U","Returns":".","Cost":1,"Size":3,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ith value of the array field F from the Ath transaction in the current group","ImmediateNote":"{uint8 transaction field index} {uint8 transaction field array index}","Groups":["Loading Values"]},{"Opcode":58,"Name":"gload","Returns":".","Cost":1,"Size":3,"Doc":"Ith scratch space value of the Tth transaction in the current group","DocExtra":"`gload` fails unless the requested transaction is an ApplicationCall and T < GroupIndex.","ImmediateNote":"{uint8 transaction group index} {uint8 position in scratch space to load from}","Groups":["Loading Values"]},{"Opcode":59,"Name":"gloads","Args":"U","Returns":".","Cost":1,"Size":2,"Doc":"Ith scratch space value of the Ath transaction in the current group","DocExtra":"`gloads` fails unless the requested transaction is an ApplicationCall and A < GroupIndex.","ImmediateNote":"{uint8 position in scratch space to load from}","Groups":["Loading Values"]},{"Opcode":60,"Name":"gaid","Returns":"U","Cost":1,"Size":2,"Doc":"ID of the asset or application created in the Tth transaction of the current group","DocExtra":"`gaid` fails unless the requested transaction created an asset or application and T < GroupIndex.","ImmediateNote":"{uint8 transaction group index}","Groups":["Loading Values"]},{"Opcode":61,"Name":"gaids","Args":"U","Returns":"U","Cost":1,"Size":1,"Doc":"ID of the asset or application created in the Ath transaction of the current group","DocExtra":"`gaids` fails unless the requested transaction created an asset or application and A < GroupIndex.","Groups":["Loading Values"]},{"Opcode":62,"Name":"loads","Args":"U","Returns":".","Cost":1,"Size":1,"Doc":"Ath scratch space value.  All scratch spaces are 0 at program start.","Groups":["Loading Values"]},{"Opcode":63,"Name":"stores","Args":"U.","Cost":1,"Size":1,"Doc":"store B to the Ath scratch space","Groups":["Loading Values"]},{"Opcode":64,"Name":"bnz","Args":"U","Cost":1,"Size":3,"Doc":"branch to TARGET if value A is not zero","DocExtra":"The `bnz` instruction opcode 0x40 is followed by two immediate data bytes which are a high byte first and low byte second which together form a 16 bit offset which the instruction may branch to. For a bnz instruction at `pc`, if the last element of the stack is not zero then branch to instruction at `pc + 3 + N`, else proceed to next instruction at `pc + 3`. Branch targets must be aligned instructions. (e.g. Branching to the second byte of a 2 byte op will be rejected.) Starting at v4, the offset is treated as a signed 16 bit integer allowing for backward branches and looping. In prior version (v1 to v3), branch offsets are limited to forward branches only, 0-0x7fff.\\n\\nAt v2 it became allowed to branch to the end of the program exactly after the last instruction: bnz to byte N (with 0-indexing) was illegal for a TEAL program with N bytes before v2, and is legal after it. This change eliminates the need for a last instruction of no-op as a branch target at the end. (Branching beyond the end--in other words, to a byte larger than N--is still illegal and will cause the program to fail.)","ImmediateNote":"{int16 branch offset, big endian}","Groups":["Flow Control"]},{"Opcode":65,"Name":"bz","Args":"U","Cost":1,"Size":3,"Doc":"branch to TARGET if value A is zero","DocExtra":"See `bnz` for details on how branches work. `bz` inverts the behavior of `bnz`.","ImmediateNote":"{int16 branch offset, big endian}","Groups":["Flow Control"]},{"Opcode":66,"Name":"b","Cost":1,"Size":3,"Doc":"branch unconditionally to TARGET","DocExtra":"See `bnz` for details on how branches work. `b` always jumps to the offset.","ImmediateNote":"{int16 branch offset, big endian}","Groups":["Flow Control"]},{"Opcode":67,"Name":"return","Args":"U","Cost":1,"Size":1,"Doc":"use A as success value; end","Groups":["Flow Control"]},{"Opcode":68,"Name":"assert","Args":"U","Cost":1,"Size":1,"Doc":"immediately fail unless A is a non-zero number","Groups":["Flow Control"]},{"Opcode":72,"Name":"pop","Args":".","Cost":1,"Size":1,"Doc":"discard A","Groups":["Flow Control"]},{"Opcode":73,"Name":"dup","Args":".","Returns":"..","Cost":1,"Size":1,"Doc":"duplicate A","Groups":["Flow Control"]},{"Opcode":74,"Name":"dup2","Args":"..","Returns":"....","Cost":1,"Size":1,"Doc":"duplicate A and B","Groups":["Flow Control"]},{"Opcode":75,"Name":"dig","Args":".","Returns":"..","Cost":1,"Size":2,"Doc":"Nth value from the top of the stack. dig 0 is equivalent to dup","ImmediateNote":"{uint8 depth}","Groups":["Flow Control"]},{"Opcode":76,"Name":"swap","Args":"..","Returns":"..","Cost":1,"Size":1,"Doc":"swaps A and B on stack","Groups":["Flow Control"]},{"Opcode":77,"Name":"select","Args":"..U","Returns":".","Cost":1,"Size":1,"Doc":"selects one of two values based on top-of-stack: B if C != 0, else A","Groups":["Flow Control"]},{"Opcode":78,"Name":"cover","Args":".","Returns":".","Cost":1,"Size":2,"Doc":"remove top of stack, and place it deeper in the stack such that N elements are above it. Fails if stack depth <= N.","ImmediateNote":"{uint8 depth}","Groups":["Flow Control"]},{"Opcode":79,"Name":"uncover","Args":".","Returns":".","Cost":1,"Size":2,"Doc":"remove the value at depth N in the stack and shift above items down so the Nth deep value is on top of the stack. Fails if stack depth <= N.","ImmediateNote":"{uint8 depth}","Groups":["Flow Control"]},{"Opcode":80,"Name":"concat","Args":"BB","Returns":"B","Cost":1,"Size":1,"Doc":"join A and B","DocExtra":"`concat` fails if the result would be greater than 4096 bytes.","Groups":["Arithmetic"]},{"Opcode":81,"Name":"substring","Args":"B","Returns":"B","Cost":1,"Size":3,"Doc":"A range of bytes from A starting at S up to but not including E. If E < S, or either is larger than the array length, the program fails","ImmediateNote":"{uint8 start position} {uint8 end position}","Groups":["Byte Array Manipulation"]},{"Opcode":82,"Name":"substring3","Args":"BUU","Returns":"B","Cost":1,"Size":1,"Doc":"A range of bytes from A starting at B up to but not including C. If C < B, or either is larger than the array length, the program fails","Groups":["Byte Array Manipulation"]},{"Opcode":83,"Name":"getbit","Args":".U","Returns":"U","Cost":1,"Size":1,"Doc":"Bth bit of (byte-array or integer) A.","DocExtra":"see explanation of bit ordering in setbit","Groups":["Arithmetic"]},{"Opcode":84,"Name":"setbit","Args":".UU","Returns":".","Cost":1,"Size":1,"Doc":"Copy of (byte-array or integer) A, with the Bth bit set to (0 or 1) C","DocExtra":"When A is a uint64, index 0 is the least significant bit. Setting bit 3 to 1 on the integer 0 yields 8, or 2^3. When A is a byte array, index 0 is the leftmost bit of the leftmost byte. Setting bits 0 through 11 to 1 in a 4-byte-array of 0s yields the byte array 0xfff00000. Setting bit 3 to 1 on the 1-byte-array 0x00 yields the byte array 0x10.","Groups":["Arithmetic"]},{"Opcode":85,"Name":"getbyte","Args":"BU","Returns":"U","Cost":1,"Size":1,"Doc":"Bth byte of A, as an integer","Groups":["Arithmetic"]},{"Opcode":86,"Name":"setbyte","Args":"BUU","Returns":"B","Cost":1,"Size":1,"Doc":"Copy of A with the Bth byte set to small integer (between 0..255) C","Groups":["Arithmetic"]},{"Opcode":87,"Name":"extract","Args":"B","Returns":"B","Cost":1,"Size":3,"Doc":"A range of bytes from A starting at S up to but not including S+L. If L is 0, then extract to the end of the string. If S or S+L is larger than the array length, the program fails","ImmediateNote":"{uint8 start position} {uint8 length}","Groups":["Byte Array Manipulation"]},{"Opcode":88,"Name":"extract3","Args":"BUU","Returns":"B","Cost":1,"Size":1,"Doc":"A range of bytes from A starting at B up to but not including B+C. If B+C is larger than the array length, the program fails","Groups":["Byte Array Manipulation"]},{"Opcode":89,"Name":"extract_uint16","Args":"BU","Returns":"U","Cost":1,"Size":1,"Doc":"A uint16 formed from a range of big-endian bytes from A starting at B up to but not including B+2. If B+2 is larger than the array length, the program fails","Groups":["Byte Array Manipulation"]},{"Opcode":90,"Name":"extract_uint32","Args":"BU","Returns":"U","Cost":1,"Size":1,"Doc":"A uint32 formed from a range of big-endian bytes from A starting at B up to but not including B+4. If B+4 is larger than the array length, the program fails","Groups":["Byte Array Manipulation"]},{"Opcode":91,"Name":"extract_uint64","Args":"BU","Returns":"U","Cost":1,"Size":1,"Doc":"A uint64 formed from a range of big-endian bytes from A starting at B up to but not including B+8. If B+8 is larger than the array length, the program fails","Groups":["Byte Array Manipulation"]},{"Opcode":96,"Name":"balance","Args":".","Returns":"U","Cost":1,"Size":1,"Doc":"get balance for account A, in microalgos. The balance is observed after the effects of previous transactions in the group, and after the fee for the current transaction is deducted.","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: value.","Groups":["State Access"]},{"Opcode":97,"Name":"app_opted_in","Args":".U","Returns":"U","Cost":1,"Size":1,"Doc":"1 if account A is opted in to application B, else 0","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: 1 if opted in and 0 otherwise.","Groups":["State Access"]},{"Opcode":98,"Name":"app_local_get","Args":".B","Returns":".","Cost":1,"Size":1,"Doc":"local state of the key B in the current application in account A","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), state key. Return: value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":99,"Name":"app_local_get_ex","Args":".UB","Returns":".U","Cost":1,"Size":1,"Doc":"X is the local state of application B, key C in account A. Y is 1 if key existed, else 0","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset), state key. Return: did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":100,"Name":"app_global_get","Args":"B","Returns":".","Cost":1,"Size":1,"Doc":"global state of the key A in the current application","DocExtra":"params: state key. Return: value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":101,"Name":"app_global_get_ex","Args":"UB","Returns":".U","Cost":1,"Size":1,"Doc":"X is the global state of application A, key B. Y is 1 if key existed, else 0","DocExtra":"params: Txn.ForeignApps offset (or, since v4, an _available_ application id), state key. Return: did_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":102,"Name":"app_local_put","Args":".B.","Cost":1,"Size":1,"Doc":"write C to key B in account A\'s local state of the current application","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), state key, value.","Groups":["State Access"]},{"Opcode":103,"Name":"app_global_put","Args":"B.","Cost":1,"Size":1,"Doc":"write B to key A in the global state of the current application","Groups":["State Access"]},{"Opcode":104,"Name":"app_local_del","Args":".B","Cost":1,"Size":1,"Doc":"delete key B from account A\'s local state of the current application","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), state key.\\n\\nDeleting a key which is already absent has no effect on the application local state. (In particular, it does _not_ cause the program to fail.)","Groups":["State Access"]},{"Opcode":105,"Name":"app_global_del","Args":"B","Cost":1,"Size":1,"Doc":"delete key A from the global state of the current application","DocExtra":"params: state key.\\n\\nDeleting a key which is already absent has no effect on the application global state. (In particular, it does _not_ cause the program to fail.)","Groups":["State Access"]},{"Opcode":112,"Name":"asset_holding_get","Args":".U","Returns":".U","Cost":1,"Size":2,"ArgEnum":["AssetBalance","AssetFrozen"],"ArgEnumTypes":"UU","Doc":"X is field F from account A\'s holding of asset B. Y is 1 if A is opted into B, else 0","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ address), asset id (or, since v4, a Txn.ForeignAssets offset). Return: did_exist flag (1 if the asset existed and 0 otherwise), value.","ImmediateNote":"{uint8 asset holding field index}","Groups":["State Access"]},{"Opcode":113,"Name":"asset_params_get","Args":"U","Returns":".U","Cost":1,"Size":2,"ArgEnum":["AssetTotal","AssetDecimals","AssetDefaultFrozen","AssetUnitName","AssetName","AssetURL","AssetMetadataHash","AssetManager","AssetReserve","AssetFreeze","AssetClawback","AssetCreator"],"ArgEnumTypes":"UUUBBBBBBBBB","Doc":"X is field F from asset A. Y is 1 if A exists, else 0","DocExtra":"params: Txn.ForeignAssets offset (or, since v4, an _available_ asset id. Return: did_exist flag (1 if the asset existed and 0 otherwise), value.","ImmediateNote":"{uint8 asset params field index}","Groups":["State Access"]},{"Opcode":114,"Name":"app_params_get","Args":"U","Returns":".U","Cost":1,"Size":2,"ArgEnum":["AppApprovalProgram","AppClearStateProgram","AppGlobalNumUint","AppGlobalNumByteSlice","AppLocalNumUint","AppLocalNumByteSlice","AppExtraProgramPages","AppCreator","AppAddress"],"ArgEnumTypes":"BBUUUUUBB","Doc":"X is field F from app A. Y is 1 if A exists, else 0","DocExtra":"params: Txn.ForeignApps offset or an _available_ app id. Return: did_exist flag (1 if the application existed and 0 otherwise), value.","ImmediateNote":"{uint8 app params field index}","Groups":["State Access"]},{"Opcode":115,"Name":"acct_params_get","Args":".","Returns":".U","Cost":1,"Size":2,"Doc":"X is field F from account A. Y is 1 if A owns positive algos, else 0","ImmediateNote":"{uint8 account params field index}","Groups":["State Access"]},{"Opcode":120,"Name":"min_balance","Args":".","Returns":"U","Cost":1,"Size":1,"Doc":"get minimum required balance for account A, in microalgos. Required balance is affected by [ASA](https://developer.algorand.org/docs/features/asa/#assets-overview) and [App](https://developer.algorand.org/docs/features/asc1/stateful/#minimum-balance-requirement-for-a-smart-contract) usage. When creating or opting into an app, the minimum balance grows before the app code runs, therefore the increase is visible there. When deleting or closing out, the minimum balance decreases after the app executes.","DocExtra":"params: Txn.Accounts offset (or, since v4, an _available_ account address), _available_ application id (or, since v4, a Txn.ForeignApps offset). Return: value.","Groups":["State Access"]},{"Opcode":128,"Name":"pushbytes","Returns":"B","Cost":1,"Size":0,"Doc":"immediate BYTES","DocExtra":"pushbytes args are not added to the bytecblock during assembly processes","ImmediateNote":"{varuint length} {bytes}","Groups":["Loading Values"]},{"Opcode":129,"Name":"pushint","Returns":"U","Cost":1,"Size":0,"Doc":"immediate UINT","DocExtra":"pushint args are not added to the intcblock during assembly processes","ImmediateNote":"{varuint int}","Groups":["Loading Values"]},{"Opcode":136,"Name":"callsub","Cost":1,"Size":3,"Doc":"branch unconditionally to TARGET, saving the next instruction on the call stack","DocExtra":"The call stack is separate from the data stack. Only `callsub` and `retsub` manipulate it.","ImmediateNote":"{int16 branch offset, big endian}","Groups":["Flow Control"]},{"Opcode":137,"Name":"retsub","Cost":1,"Size":1,"Doc":"pop the top instruction from the call stack and branch to it","DocExtra":"The call stack is separate from the data stack. Only `callsub` and `retsub` manipulate it.","Groups":["Flow Control"]},{"Opcode":144,"Name":"shl","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A times 2^B, modulo 2^64","Groups":["Arithmetic"]},{"Opcode":145,"Name":"shr","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A divided by 2^B","Groups":["Arithmetic"]},{"Opcode":146,"Name":"sqrt","Args":"U","Returns":"U","Cost":4,"Size":1,"Doc":"The largest integer I such that I^2 <= A","Groups":["Arithmetic"]},{"Opcode":147,"Name":"bitlen","Args":".","Returns":"U","Cost":1,"Size":1,"Doc":"The highest set bit in A. If A is a byte-array, it is interpreted as a big-endian unsigned integer. bitlen of 0 is 0, bitlen of 8 is 4","DocExtra":"bitlen interprets arrays as big-endian integers, unlike setbit/getbit","Groups":["Arithmetic"]},{"Opcode":148,"Name":"exp","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A raised to the Bth power. Fail if A == B == 0 and on overflow","Groups":["Arithmetic"]},{"Opcode":149,"Name":"expw","Args":"UU","Returns":"UU","Cost":10,"Size":1,"Doc":"A raised to the Bth power as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low. Fail if A == B == 0 or if the results exceeds 2^128-1","Groups":["Arithmetic"]},{"Opcode":150,"Name":"bsqrt","Args":"B","Returns":"B","Cost":40,"Size":1,"Doc":"The largest integer I such that I^2 <= A. A and I are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":151,"Name":"divw","Args":"UUU","Returns":"U","Cost":1,"Size":1,"Doc":"A,B / C. Fail if C == 0 or if result overflows.","DocExtra":"The notation A,B indicates that A and B are interpreted as a uint128 value, with A as the high uint64 and B the low.","Groups":["Arithmetic"]},{"Opcode":160,"Name":"b+","Args":"BB","Returns":"B","Cost":10,"Size":1,"Doc":"A plus B. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":161,"Name":"b-","Args":"BB","Returns":"B","Cost":10,"Size":1,"Doc":"A minus B. A and B are interpreted as big-endian unsigned integers. Fail on underflow.","Groups":["Byte Array Arithmetic"]},{"Opcode":162,"Name":"b/","Args":"BB","Returns":"B","Cost":20,"Size":1,"Doc":"A divided by B (truncated division). A and B are interpreted as big-endian unsigned integers. Fail if B is zero.","Groups":["Byte Array Arithmetic"]},{"Opcode":163,"Name":"b*","Args":"BB","Returns":"B","Cost":20,"Size":1,"Doc":"A times B. A and B are interpreted as big-endian unsigned integers.","Groups":["Byte Array Arithmetic"]},{"Opcode":164,"Name":"b<","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"1 if A is less than B, else 0. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":165,"Name":"b>","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"1 if A is greater than B, else 0. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":166,"Name":"b<=","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"1 if A is less than or equal to B, else 0. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":167,"Name":"b>=","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"1 if A is greater than or equal to B, else 0. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":168,"Name":"b==","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"1 if A is equal to B, else 0. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":169,"Name":"b!=","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"0 if A is equal to B, else 1. A and B are interpreted as big-endian unsigned integers","Groups":["Byte Array Arithmetic"]},{"Opcode":170,"Name":"b%","Args":"BB","Returns":"B","Cost":20,"Size":1,"Doc":"A modulo B. A and B are interpreted as big-endian unsigned integers. Fail if B is zero.","Groups":["Byte Array Arithmetic"]},{"Opcode":171,"Name":"b|","Args":"BB","Returns":"B","Cost":6,"Size":1,"Doc":"A bitwise-or B. A and B are zero-left extended to the greater of their lengths","Groups":["Byte Array Logic"]},{"Opcode":172,"Name":"b&","Args":"BB","Returns":"B","Cost":6,"Size":1,"Doc":"A bitwise-and B. A and B are zero-left extended to the greater of their lengths","Groups":["Byte Array Logic"]},{"Opcode":173,"Name":"b^","Args":"BB","Returns":"B","Cost":6,"Size":1,"Doc":"A bitwise-xor B. A and B are zero-left extended to the greater of their lengths","Groups":["Byte Array Logic"]},{"Opcode":174,"Name":"b~","Args":"B","Returns":"B","Cost":4,"Size":1,"Doc":"A with all bits inverted","Groups":["Byte Array Logic"]},{"Opcode":175,"Name":"bzero","Args":"U","Returns":"B","Cost":1,"Size":1,"Doc":"zero filled byte-array of length A","Groups":["Loading Values"]},{"Opcode":176,"Name":"log","Args":"B","Cost":1,"Size":1,"Doc":"write A to log state of the current application","DocExtra":"`log` fails if called more than MaxLogCalls times in a program, or if the sum of logged bytes exceeds 1024 bytes.","Groups":["State Access"]},{"Opcode":177,"Name":"itxn_begin","Cost":1,"Size":1,"Doc":"begin preparation of a new inner transaction in a new transaction group","DocExtra":"`itxn_begin` initializes Sender to the application address; Fee to the minimum allowable, taking into account MinTxnFee and credit from overpaying in earlier transactions; FirstValid/LastValid to the values in the invoking transaction, and all other fields to zero or empty values.","Groups":["Inner Transactions"]},{"Opcode":178,"Name":"itxn_field","Args":".","Cost":1,"Size":2,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"set field F of the current inner transaction to A","DocExtra":"`itxn_field` fails if A is of the wrong type for F, including a byte array of the wrong size for use as an address when F is an address field. `itxn_field` also fails if A is an account, asset, or app that is not _available_, or an attempt is made extend an array field beyond the limit imposed by consensus parameters. (Addresses set into asset params of acfg transactions need not be _available_.)","ImmediateNote":"{uint8 transaction field index}","Groups":["Inner Transactions"]},{"Opcode":179,"Name":"itxn_submit","Cost":1,"Size":1,"Doc":"execute the current inner transaction group. Fail if executing this group would exceed the inner transaction limit, or if any transaction in the group fails.","DocExtra":"`itxn_submit` resets the current transaction so that it can not be resubmitted. A new `itxn_begin` is required to prepare another inner transaction.","Groups":["Inner Transactions"]},{"Opcode":180,"Name":"itxn","Returns":".","Cost":1,"Size":2,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"field F of the last inner transaction","ImmediateNote":"{uint8 transaction field index}","Groups":["Inner Transactions"]},{"Opcode":181,"Name":"itxna","Returns":".","Cost":1,"Size":3,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ith value of the array field F of the last inner transaction","ImmediateNote":"{uint8 transaction field index} {uint8 transaction field array index}","Groups":["Inner Transactions"]},{"Opcode":182,"Name":"itxn_next","Cost":1,"Size":1,"Doc":"begin preparation of a new inner transaction in the same transaction group","DocExtra":"`itxn_next` initializes the transaction exactly as `itxn_begin` does","Groups":["Inner Transactions"]},{"Opcode":183,"Name":"gitxn","Returns":".","Cost":1,"Size":3,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages","Nonparticipation","Logs","NumLogs","CreatedAssetID","CreatedApplicationID","LastLog","StateProofPK"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUUUBUUUBB","Doc":"field F of the Tth transaction in the last inner group submitted","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index}","Groups":["Inner Transactions"]},{"Opcode":184,"Name":"gitxna","Returns":".","Cost":1,"Size":4,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ith value of the array field F from the Tth transaction in the last inner group submitted","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index} {uint8 transaction field array index}","Groups":["Inner Transactions"]},{"Opcode":192,"Name":"txnas","Args":"U","Returns":".","Cost":1,"Size":2,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ath value of the array field F of the current transaction","ImmediateNote":"{uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":193,"Name":"gtxnas","Args":"U","Returns":".","Cost":1,"Size":3,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Ath value of the array field F from the Tth transaction in the current group","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":194,"Name":"gtxnsas","Args":"UU","Returns":".","Cost":1,"Size":2,"ArgEnum":["ApplicationArgs","Accounts","Assets","Applications","Logs"],"ArgEnumTypes":"BBUUB","Doc":"Bth value of the array field F from the Ath transaction in the current group","ImmediateNote":"{uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":195,"Name":"args","Args":"U","Returns":"B","Cost":1,"Size":1,"Doc":"Ath LogicSig argument","Groups":["Loading Values"]},{"Opcode":196,"Name":"gloadss","Args":"UU","Returns":".","Cost":1,"Size":1,"Doc":"Bth scratch space value of the Ath transaction in the current group","Groups":["Loading Values"]},{"Opcode":197,"Name":"itxnas","Args":"U","Returns":".","Cost":1,"Size":2,"Doc":"Ath value of the array field F of the last inner transaction","ImmediateNote":"{uint8 transaction field index}","Groups":["Inner Transactions"]},{"Opcode":198,"Name":"gitxnas","Args":"U","Returns":".","Cost":1,"Size":3,"Doc":"Ath value of the array field F from the Tth transaction in the last inner group submitted","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index}","Groups":["Inner Transactions"]}]}');
                                let G;

                                function q(e) {
                                    let r = 0,
                                        n = 0;
                                    for (let H = 0; H < e.length; H++) {
                                        const G = e[H];
                                        if (G < 128) return H > 9 || 9 === H && G > 1 ? [0, -(H + 1)] : [r | G << n, H + 1];
                                        r += (127 & G) << n, n += 7
                                    }
                                    return [0, 0]
                                }

                                function V(e, r) {
                                    let n = 1;
                                    const H = q(e.slice(r + n)),
                                        G = H[0];
                                    let V = H[1];
                                    if (V <= 0) throw new Error("could not decode int const block size at pc=" + (r + n));
                                    const W = [];
                                    n += V;
                                    for (let H = 0; H < G; H++) {
                                        if (r + n >= e.length) throw new Error("intcblock ran past end of program");
                                        let G;
                                        if ([G, V] = q(e.slice(r + n)), V <= 0) throw new Error(`could not decode int const[${H}] block size at pc=${r+n}`);
                                        W.push(G), n += V
                                    }
                                    return [n, W]
                                }

                                function W(e, r) {
                                    let n = 1;
                                    const H = q(e.slice(r + n)),
                                        G = H[0];
                                    let V = H[1];
                                    if (V <= 0) throw new Error("could not decode []byte const block size at pc=" + (r + n));
                                    const W = [];
                                    n += V;
                                    for (let H = 0; H < G; H++) {
                                        if (r + n >= e.length) throw new Error("bytecblock ran past end of program");
                                        let G;
                                        if ([G, V] = q(e.slice(r + n)), V <= 0) throw new Error(`could not decode []byte] const[${H}] block size at pc=${r+n}`);
                                        if (n += V, r + n + G > e.length) throw new Error("bytecblock ran past end of program");
                                        const $ = e.slice(r + n, r + n + G);
                                        W.push($), n += G
                                    }
                                    return [n, W]
                                }

                                function $(e, r) {
                                    let n = 1;
                                    const [H, G] = q(e.slice(r + n));
                                    if (G <= 0) throw new Error("could not decode push int const at pc=" + (r + n));
                                    return n += G, [n, H]
                                }

                                function X(e, r) {
                                    let n = 1;
                                    const [H, G] = q(e.slice(r + n));
                                    if (G <= 0) throw new Error("could not decode push []byte const size at pc=" + (r + n));
                                    if (n += G, r + n + H > e.length) throw new Error("pushbytes ran past end of program");
                                    const V = e.slice(r + n, r + n + H);
                                    return n += H, [n, V]
                                }

                                function Y(e, r) {
                                    if (!e) throw new Error("empty program");
                                    if (void 0 === r && (r = []), !Array.isArray(r)) throw new Error("invalid arguments");
                                    const [n, Y] = q(e);
                                    if (Y <= 0) throw new Error("version parsing error");
                                    if (n > H.z_) throw new Error("unsupported version");
                                    let J = 0,
                                        {
                                            length: Q
                                        } = e;
                                    for (const e of r) Q += e.length;
                                    if (Q > 1e3) throw new Error("program too long");
                                    if (!G) {
                                        G = {};
                                        for (const e of H.AP) G[e.Opcode] = e
                                    }
                                    let Z = Y,
                                        ee = [],
                                        te = [];
                                    for (; Z < e.length;) {
                                        const r = G[e[Z]];
                                        if (void 0 === r) throw new Error("invalid instruction");
                                        J += r.Cost;
                                        let n = r.Size;
                                        if (0 === n) switch (r.Opcode) {
                                            case 32: {
                                                let r;
                                                [n, r] = V(e, Z), ee = ee.concat(r);
                                                break
                                            }
                                            case 38: {
                                                let r;
                                                [n, r] = W(e, Z), te = te.concat(r);
                                                break
                                            }
                                            case 129: {
                                                let r;
                                                [n, r] = $(e, Z), ee.push(r);
                                                break
                                            }
                                            case 128: {
                                                let r;
                                                [n, r] = X(e, Z), te.push(r);
                                                break
                                            }
                                            default:
                                                throw new Error("invalid instruction")
                                        }
                                        Z += n
                                    }
                                    if (n < 4 && J > 2e4) throw new Error("program too costly for Teal version < 4. consider using v4.");
                                    return [ee, te, !0]
                                }

                                function J(e, r) {
                                    const [, , n] = Y(e, r);
                                    return n
                                }

                                function Q(e, r) {
                                    const [n] = V(e, r);
                                    return n
                                }

                                function Z(e, r) {
                                    const [n] = W(e, r);
                                    return n
                                }

                                function ee(e, r) {
                                    const [n] = $(e, r);
                                    return n
                                }

                                function te(e, r) {
                                    const [n] = X(e, r);
                                    return n
                                }
                                const re = H.z_,
                                    ne = H.BV
                            },
                            8800: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    LogicSig: () => h,
                                    LogicSigAccount: () => p,
                                    makeLogicSig: () => J,
                                    signLogicSigTransactionObject: () => Q,
                                    signLogicSigTransaction: () => Z,
                                    logicSigFromByte: () => ee,
                                    tealSign: () => re,
                                    tealSignFromProgram: () => ne
                                });
                                var H = n(9404),
                                    G = n(7116),
                                    q = n(3033),
                                    V = n(5583),
                                    W = n(4158),
                                    $ = n(413),
                                    X = n(9417),
                                    Y = n(2486).Buffer;
                                class h {
                                    constructor(e, r) {
                                        if (this.tag = Y.from("Program"), r && (!Array.isArray(r) || !r.every(e => e.constructor === Uint8Array || Y.isBuffer(e)))) throw new TypeError("Invalid arguments");
                                        let n;
                                        if (null != r && (n = r.map(e => new Uint8Array(e))), !V.checkProgram(e, n)) throw new Error("Invalid program");
                                        this.logic = e, this.args = n, this.sig = void 0, this.msig = void 0
                                    }
                                    get_obj_for_encoding() {
                                        const e = {
                                            l: this.logic
                                        };
                                        return this.args && (e.arg = this.args), this.sig ? e.sig = this.sig : this.msig && (e.msig = this.msig), e
                                    }
                                    static from_obj_for_encoding(e) {
                                        const r = new h(e.l, e.arg);
                                        return r.sig = e.sig, r.msig = e.msig, r
                                    }
                                    verify(e) {
                                        if (this.sig && this.msig) return !1;
                                        try {
                                            V.checkProgram(this.logic, this.args)
                                        } catch (e) {
                                            return !1
                                        }
                                        const r = $.concatArrays(this.tag, this.logic);
                                        if (!this.sig && !this.msig) {
                                            const n = H.genericHash(r);
                                            return $.arrayEqual(n, e)
                                        }
                                        return this.sig ? H.verify(r, this.sig, e) : (0, W.F2)(r, this.msig, e)
                                    }
                                    address() {
                                        const e = $.concatArrays(this.tag, this.logic),
                                            r = H.genericHash(e);
                                        return G.encodeAddress(new Uint8Array(r))
                                    }
                                    sign(e, r) {
                                        if (null == r) this.sig = this.signProgram(e);
                                        else {
                                            const n = r.addrs.map(e => ({
                                                pk: G.decodeAddress(e).publicKey
                                            }));
                                            this.msig = {
                                                v: r.version,
                                                thr: r.threshold,
                                                subsig: n
                                            };
                                            const [H, q] = this.singleSignMultisig(e, this.msig);
                                            this.msig.subsig[q].s = H
                                        }
                                    }
                                    appendToMultisig(e) {
                                        if (void 0 === this.msig) throw new Error("no multisig present");
                                        const [r, n] = this.singleSignMultisig(e, this.msig);
                                        this.msig.subsig[n].s = r
                                    }
                                    signProgram(e) {
                                        const r = $.concatArrays(this.tag, this.logic);
                                        return H.sign(r, e)
                                    }
                                    singleSignMultisig(e, r) {
                                        let n = -1;
                                        const G = H.keyPairFromSecretKey(e).publicKey;
                                        for (let e = 0; e < r.subsig.length; e++) {
                                            const {
                                                pk: H
                                            } = r.subsig[e];
                                            if ($.arrayEqual(H, G)) {
                                                n = e;
                                                break
                                            }
                                        }
                                        if (-1 === n) throw new Error("invalid secret key");
                                        return [this.signProgram(e), n]
                                    }
                                    toByte() {
                                        return q.encode(this.get_obj_for_encoding())
                                    }
                                    static fromByte(e) {
                                        const r = q.decode(e);
                                        return h.from_obj_for_encoding(r)
                                    }
                                }
                                class p {
                                    constructor(e, r) {
                                        this.lsig = new h(e, r), this.sigkey = void 0
                                    }
                                    get_obj_for_encoding() {
                                        const e = {
                                            lsig: this.lsig.get_obj_for_encoding()
                                        };
                                        return this.sigkey && (e.sigkey = this.sigkey), e
                                    }
                                    static from_obj_for_encoding(e) {
                                        const r = new p(e.lsig.l, e.lsig.arg);
                                        return r.lsig = h.from_obj_for_encoding(e.lsig), r.sigkey = e.sigkey, r
                                    }
                                    toByte() {
                                        return q.encode(this.get_obj_for_encoding())
                                    }
                                    static fromByte(e) {
                                        const r = q.decode(e);
                                        return p.from_obj_for_encoding(r)
                                    }
                                    isDelegated() {
                                        return !(!this.lsig.sig && !this.lsig.msig)
                                    }
                                    verify() {
                                        const e = this.address();
                                        return this.lsig.verify(G.decodeAddress(e).publicKey)
                                    }
                                    address() {
                                        if (this.lsig.sig && this.lsig.msig) throw new Error("LogicSig has too many signatures. At most one of sig or msig may be present");
                                        if (this.lsig.sig) {
                                            if (!this.sigkey) throw new Error("Signing key for delegated account is missing");
                                            return G.encodeAddress(this.sigkey)
                                        }
                                        if (this.lsig.msig) {
                                            const e = {
                                                version: this.lsig.msig.v,
                                                threshold: this.lsig.msig.thr,
                                                pks: this.lsig.msig.subsig.map(e => e.pk)
                                            };
                                            return G.encodeAddress(G.fromMultisigPreImg(e))
                                        }
                                        return this.lsig.address()
                                    }
                                    signMultisig(e, r) {
                                        this.lsig.sign(r, e)
                                    }
                                    appendToMultisig(e) {
                                        this.lsig.appendToMultisig(e)
                                    }
                                    sign(e) {
                                        this.lsig.sign(e), this.sigkey = H.keyPairFromSecretKey(e).publicKey
                                    }
                                }

                                function J(e, r) {
                                    return new h(e, r)
                                }

                                function Q(e, r) {
                                    let n, V;
                                    if (r instanceof p) n = r.lsig, V = G.decodeAddress(r.address()).publicKey;
                                    else if (n = r, n.sig) V = e.from.publicKey;
                                    else if (n.msig) {
                                        const e = {
                                            version: n.msig.v,
                                            threshold: n.msig.thr,
                                            pks: n.msig.subsig.map(e => e.pk)
                                        };
                                        V = G.fromMultisigPreImg(e)
                                    } else V = G.decodeAddress(n.address()).publicKey;
                                    return function(e, r, n) {
                                        if (!r.verify(n)) throw new Error("Logic signature verification failed. Ensure the program and signature are valid.");
                                        const G = {
                                            lsig: r.get_obj_for_encoding(),
                                            txn: e.get_obj_for_encoding()
                                        };
                                        return H.bytesEqual(n, e.from.publicKey) || (G.sgnr = Y.from(n)), {
                                            txID: e.txID().toString(),
                                            blob: q.encode(G)
                                        }
                                    }(e, n, V)
                                }

                                function Z(e, r) {
                                    return Q(X.instantiateTxnIfNeeded(e), r)
                                }

                                function ee(e) {
                                    return h.fromByte(e)
                                }
                                const te = Y.from("ProgData");

                                function re(e, r, n) {
                                    const q = $.concatArrays(G.decodeAddress(n).publicKey, r),
                                        V = Y.from($.concatArrays(te, q));
                                    return H.sign(V, e)
                                }

                                function ne(e, r, n) {
                                    return re(e, r, new h(n).address())
                                }
                            },
                            6608: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    MULTISIG_BAD_SENDER_ERROR_MSG: () => ve,
                                    signTransaction: () => xe,
                                    signBid: () => Se,
                                    signBytes: () => Ee,
                                    verifyBytes: () => Te,
                                    encodeObj: () => _e,
                                    decodeObj: () => Be,
                                    ERROR_MULTISIG_BAD_SENDER: () => Ue,
                                    ERROR_INVALID_MICROALGOS: () => ke,
                                    Algodv2: () => ee.Z,
                                    Kmd: () => te.Z,
                                    IntDecoding: () => re.Z,
                                    Indexer: () => ne.Z,
                                    waitForConfirmation: () => oe.K,
                                    isValidAddress: () => G.isValidAddress,
                                    encodeAddress: () => G.encodeAddress,
                                    decodeAddress: () => G.decodeAddress,
                                    getApplicationAddress: () => G.getApplicationAddress,
                                    bytesToBigInt: () => se.v,
                                    bigIntToBytes: () => se.j,
                                    encodeUint64: () => ie.T,
                                    decodeUint64: () => ie.u,
                                    generateAccount: () => ae.Z,
                                    modelsv2: () => ce,
                                    mnemonicToMasterDerivationKey: () => ue.OF,
                                    masterDerivationKeyToMnemonic: () => ue.vC,
                                    secretKeyToMnemonic: () => ue.QX,
                                    mnemonicToSecretKey: () => ue.Ch,
                                    seedFromMnemonic: () => ue.mE,
                                    mnemonicFromSeed: () => ue.w3,
                                    microalgosToAlgos: () => Y._,
                                    algosToMicroalgos: () => Y.HN,
                                    INVALID_MICROALGOS_ERROR_MSG: () => Y.rD,
                                    computeGroupID: () => le.computeGroupID,
                                    assignGroupID: () => le.assignGroupID,
                                    LogicSigAccount: () => he.LogicSigAccount,
                                    makeLogicSig: () => he.makeLogicSig,
                                    signLogicSigTransaction: () => he.signLogicSigTransaction,
                                    signLogicSigTransactionObject: () => he.signLogicSigTransactionObject,
                                    logicSigFromByte: () => he.logicSigFromByte,
                                    tealSign: () => he.tealSign,
                                    tealSignFromProgram: () => he.tealSignFromProgram,
                                    signMultisigTransaction: () => pe.PU,
                                    mergeMultisigTransactions: () => pe.J6,
                                    appendSignMultisigTransaction: () => pe.PO,
                                    multisigAddress: () => pe.vH,
                                    LogicTemplates: () => Ie,
                                    DryrunResult: () => fe.x,
                                    createDryrun: () => fe.P,
                                    OnApplicationComplete: () => de.OnApplicationComplete,
                                    makeApplicationCallTxnFromObject: () => de.makeApplicationCallTxnFromObject,
                                    makeApplicationClearStateTxn: () => de.makeApplicationClearStateTxn,
                                    makeApplicationClearStateTxnFromObject: () => de.makeApplicationClearStateTxnFromObject,
                                    makeApplicationCloseOutTxn: () => de.makeApplicationCloseOutTxn,
                                    makeApplicationCloseOutTxnFromObject: () => de.makeApplicationCloseOutTxnFromObject,
                                    makeApplicationCreateTxn: () => de.makeApplicationCreateTxn,
                                    makeApplicationCreateTxnFromObject: () => de.makeApplicationCreateTxnFromObject,
                                    makeApplicationDeleteTxn: () => de.makeApplicationDeleteTxn,
                                    makeApplicationDeleteTxnFromObject: () => de.makeApplicationDeleteTxnFromObject,
                                    makeApplicationNoOpTxn: () => de.makeApplicationNoOpTxn,
                                    makeApplicationNoOpTxnFromObject: () => de.makeApplicationNoOpTxnFromObject,
                                    makeApplicationOptInTxn: () => de.makeApplicationOptInTxn,
                                    makeApplicationOptInTxnFromObject: () => de.makeApplicationOptInTxnFromObject,
                                    makeApplicationUpdateTxn: () => de.makeApplicationUpdateTxn,
                                    makeApplicationUpdateTxnFromObject: () => de.makeApplicationUpdateTxnFromObject,
                                    makeAssetConfigTxn: () => de.makeAssetConfigTxn,
                                    makeAssetConfigTxnWithSuggestedParams: () => de.makeAssetConfigTxnWithSuggestedParams,
                                    makeAssetConfigTxnWithSuggestedParamsFromObject: () => de.makeAssetConfigTxnWithSuggestedParamsFromObject,
                                    makeAssetCreateTxn: () => de.makeAssetCreateTxn,
                                    makeAssetCreateTxnWithSuggestedParams: () => de.makeAssetCreateTxnWithSuggestedParams,
                                    makeAssetCreateTxnWithSuggestedParamsFromObject: () => de.makeAssetCreateTxnWithSuggestedParamsFromObject,
                                    makeAssetDestroyTxn: () => de.makeAssetDestroyTxn,
                                    makeAssetDestroyTxnWithSuggestedParams: () => de.makeAssetDestroyTxnWithSuggestedParams,
                                    makeAssetDestroyTxnWithSuggestedParamsFromObject: () => de.makeAssetDestroyTxnWithSuggestedParamsFromObject,
                                    makeAssetFreezeTxn: () => de.makeAssetFreezeTxn,
                                    makeAssetFreezeTxnWithSuggestedParams: () => de.makeAssetFreezeTxnWithSuggestedParams,
                                    makeAssetFreezeTxnWithSuggestedParamsFromObject: () => de.makeAssetFreezeTxnWithSuggestedParamsFromObject,
                                    makeAssetTransferTxn: () => de.makeAssetTransferTxn,
                                    makeAssetTransferTxnWithSuggestedParams: () => de.makeAssetTransferTxnWithSuggestedParams,
                                    makeAssetTransferTxnWithSuggestedParamsFromObject: () => de.makeAssetTransferTxnWithSuggestedParamsFromObject,
                                    makeKeyRegistrationTxn: () => de.makeKeyRegistrationTxn,
                                    makeKeyRegistrationTxnWithSuggestedParams: () => de.makeKeyRegistrationTxnWithSuggestedParams,
                                    makeKeyRegistrationTxnWithSuggestedParamsFromObject: () => de.makeKeyRegistrationTxnWithSuggestedParamsFromObject,
                                    makePaymentTxn: () => de.makePaymentTxn,
                                    makePaymentTxnWithSuggestedParams: () => de.makePaymentTxnWithSuggestedParams,
                                    makePaymentTxnWithSuggestedParamsFromObject: () => de.makePaymentTxnWithSuggestedParamsFromObject,
                                    ALGORAND_MIN_TX_FEE: () => V.ALGORAND_MIN_TX_FEE,
                                    Transaction: () => V.Transaction,
                                    decodeSignedTransaction: () => V.decodeSignedTransaction,
                                    decodeUnsignedTransaction: () => V.decodeUnsignedTransaction,
                                    encodeUnsignedTransaction: () => V.encodeUnsignedTransaction,
                                    instantiateTxnIfNeeded: () => V.instantiateTxnIfNeeded,
                                    isTransactionWithSigner: () => ge.Xw,
                                    makeBasicAccountTransactionSigner: () => ge.x7,
                                    makeLogicSigAccountTransactionSigner: () => ge.i1,
                                    makeMultiSigAccountTransactionSigner: () => ge.Vj,
                                    AtomicTransactionComposer: () => ye.A,
                                    AtomicTransactionComposerStatus: () => ye.b,
                                    TransactionType: () => me.i,
                                    ABIAddressType: () => be.JQ,
                                    ABIArrayDynamicType: () => be._4,
                                    ABIArrayStaticType: () => be.X3,
                                    ABIBoolType: () => be.R0,
                                    ABIByteType: () => be.jD,
                                    ABIContract: () => be.Yh,
                                    ABIInterface: () => be.bL,
                                    ABIMethod: () => be.Ls,
                                    ABIReferenceType: () => be.UV,
                                    ABIStringType: () => be.Ax,
                                    ABITransactionType: () => be.A9,
                                    ABITupleType: () => be.w1,
                                    ABIType: () => be.NK,
                                    ABIUfixedType: () => be.RY,
                                    ABIUintType: () => be.Pu,
                                    ADDR_BYTE_SIZE: () => be.Vk,
                                    LENGTH_ENCODE_BYTE_SIZE: () => be.nh,
                                    MAX_LEN: () => be.kG,
                                    SINGLE_BOOL_SIZE: () => be.qH,
                                    SINGLE_BYTE_SIZE: () => be.JH,
                                    abiCheckTransactionType: () => be.vJ,
                                    abiTypeIsReference: () => be.o5,
                                    abiTypeIsTransaction: () => be.AE
                                });
                                var H = n(9404),
                                    G = n(7116),
                                    q = n(3033),
                                    V = n(9417),
                                    W = n(8886),
                                    $ = n.n(W),
                                    X = n(2691),
                                    Y = n(9070),
                                    J = n(413),
                                    Q = n(5922),
                                    Z = {};
                                for (const e in Q)["default", "MULTISIG_BAD_SENDER_ERROR_MSG", "signTransaction", "signBid", "signBytes", "verifyBytes", "encodeObj", "decodeObj", "ERROR_MULTISIG_BAD_SENDER", "ERROR_INVALID_MICROALGOS", "Algodv2", "Kmd", "IntDecoding", "Indexer", "waitForConfirmation", "isValidAddress", "encodeAddress", "decodeAddress", "getApplicationAddress", "bytesToBigInt", "bigIntToBytes", "encodeUint64", "decodeUint64", "generateAccount", "modelsv2", "mnemonicToMasterDerivationKey", "masterDerivationKeyToMnemonic", "secretKeyToMnemonic", "mnemonicToSecretKey", "seedFromMnemonic", "mnemonicFromSeed", "microalgosToAlgos", "algosToMicroalgos", "INVALID_MICROALGOS_ERROR_MSG", "computeGroupID", "assignGroupID", "LogicSigAccount", "makeLogicSig", "signLogicSigTransaction", "signLogicSigTransactionObject", "logicSigFromByte", "tealSign", "tealSignFromProgram", "signMultisigTransaction", "mergeMultisigTransactions", "appendSignMultisigTransaction", "multisigAddress", "LogicTemplates"].indexOf(e) < 0 && (Z[e] = () => Q[e]);
                                n.d(r, Z);
                                var ee = n(1663),
                                    te = n(6477),
                                    re = n(7197),
                                    ne = n(9582),
                                    oe = n(5062),
                                    se = n(8922),
                                    ie = n(6963),
                                    ae = n(7988),
                                    ce = n(227),
                                    ue = n(3510),
                                    le = n(1063),
                                    he = n(8800),
                                    pe = n(4158),
                                    fe = n(4383),
                                    de = n(1988),
                                    ge = n(834),
                                    ye = n(3458),
                                    me = n(2380),
                                    be = n(7677),
                                    Ae = n(2486).Buffer;
                                const we = Ae.from([77, 88]),
                                    ve = "The transaction sender address and multisig preimage do not match.";

                                function xe(e, r) {
                                    if (void 0 === e.from) {
                                        const n = H.keyPairFromSecretKey(r);
                                        e.from = G.encodeAddress(n.publicKey)
                                    }
                                    const n = V.instantiateTxnIfNeeded(e);
                                    return {
                                        txID: n.txID().toString(),
                                        blob: n.signTxn(r)
                                    }
                                }

                                function Se(e, r) {
                                    return new X.Z(e).signBid(r)
                                }

                                function Ee(e, r) {
                                    const n = Ae.from(J.concatArrays(we, e));
                                    return H.sign(n, r)
                                }

                                function Te(e, r, n) {
                                    const q = Ae.from(J.concatArrays(we, e)),
                                        V = G.decodeAddress(n).publicKey;
                                    return H.verify(q, r, V)
                                }

                                function _e(e) {
                                    return new Uint8Array(q.encode(e))
                                }

                                function Be(e) {
                                    return q.decode(e)
                                }
                                const Ue = new Error(ve),
                                    ke = new Error(Y.rD),
                                    Ie = $()
                            },
                            1988: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    makePaymentTxnWithSuggestedParams: () => V,
                                    makePaymentTxn: () => W,
                                    makePaymentTxnWithSuggestedParamsFromObject: () => $,
                                    makeKeyRegistrationTxnWithSuggestedParams: () => X,
                                    makeKeyRegistrationTxn: () => Y,
                                    makeKeyRegistrationTxnWithSuggestedParamsFromObject: () => J,
                                    makeAssetCreateTxnWithSuggestedParams: () => Q,
                                    makeAssetCreateTxn: () => Z,
                                    makeAssetCreateTxnWithSuggestedParamsFromObject: () => ee,
                                    makeAssetConfigTxnWithSuggestedParams: () => te,
                                    makeAssetConfigTxn: () => re,
                                    makeAssetConfigTxnWithSuggestedParamsFromObject: () => ne,
                                    makeAssetDestroyTxnWithSuggestedParams: () => oe,
                                    makeAssetDestroyTxn: () => se,
                                    makeAssetDestroyTxnWithSuggestedParamsFromObject: () => ie,
                                    makeAssetFreezeTxnWithSuggestedParams: () => ae,
                                    makeAssetFreezeTxn: () => ce,
                                    makeAssetFreezeTxnWithSuggestedParamsFromObject: () => ue,
                                    makeAssetTransferTxnWithSuggestedParams: () => le,
                                    makeAssetTransferTxn: () => he,
                                    makeAssetTransferTxnWithSuggestedParamsFromObject: () => pe,
                                    makeApplicationCreateTxn: () => fe,
                                    makeApplicationCreateTxnFromObject: () => de,
                                    makeApplicationUpdateTxn: () => ge,
                                    makeApplicationUpdateTxnFromObject: () => ye,
                                    makeApplicationDeleteTxn: () => me,
                                    makeApplicationDeleteTxnFromObject: () => be,
                                    makeApplicationOptInTxn: () => Ae,
                                    makeApplicationOptInTxnFromObject: () => we,
                                    makeApplicationCloseOutTxn: () => ve,
                                    makeApplicationCloseOutTxnFromObject: () => xe,
                                    makeApplicationClearStateTxn: () => Se,
                                    makeApplicationClearStateTxnFromObject: () => Ee,
                                    makeApplicationNoOpTxn: () => Te,
                                    makeApplicationNoOpTxnFromObject: () => _e,
                                    OnApplicationComplete: () => G.hq,
                                    makeApplicationCallTxnFromObject: () => Be
                                });
                                var H = n(9417),
                                    G = n(1624),
                                    q = n(1824);

                                function V(e, r, n, G, V, W, $) {
                                    const X = {
                                        from: e,
                                        to: r,
                                        amount: n,
                                        closeRemainderTo: G,
                                        note: V,
                                        suggestedParams: W,
                                        type: q.i.pay,
                                        reKeyTo: $
                                    };
                                    return new H.Transaction(X)
                                }

                                function W(e, r, n, H, G, q, W, $, X, Y, J) {
                                    return V(e, r, H, G, $, {
                                        genesisHash: X,
                                        genesisID: Y,
                                        firstRound: q,
                                        lastRound: W,
                                        fee: n
                                    }, J)
                                }

                                function $(e) {
                                    return V(e.from, e.to, e.amount, e.closeRemainderTo, e.note, e.suggestedParams, e.rekeyTo)
                                }

                                function X(e, r, n, G, V, W, $, X, Y, J = !1, Q) {
                                    const Z = {
                                        from: e,
                                        note: r,
                                        voteKey: n,
                                        selectionKey: G,
                                        voteFirst: V,
                                        voteLast: W,
                                        voteKeyDilution: $,
                                        suggestedParams: X,
                                        type: q.i.keyreg,
                                        reKeyTo: Y,
                                        nonParticipation: J,
                                        stateProofKey: Q
                                    };
                                    return new H.Transaction(Z)
                                }

                                function Y(e, r, n, H, G, q, V, W, $, Y, J, Q, Z, ee = !1, te) {
                                    return X(e, G, W, $, Y, J, Q, {
                                        genesisHash: q,
                                        genesisID: V,
                                        firstRound: n,
                                        lastRound: H,
                                        fee: r
                                    }, Z, ee, te)
                                }

                                function J(e) {
                                    return X(e.from, e.note, e.voteKey, e.selectionKey, e.voteFirst, e.voteLast, e.voteKeyDilution, e.suggestedParams, e.rekeyTo, e.nonParticipation, e.stateProofKey)
                                }

                                function Q(e, r, n, G, V, W, $, X, Y, J, Q, Z, ee, te, re) {
                                    const ne = {
                                        from: e,
                                        note: r,
                                        suggestedParams: te,
                                        assetTotal: n,
                                        assetDecimals: G,
                                        assetDefaultFrozen: V,
                                        assetUnitName: J,
                                        assetName: Q,
                                        assetURL: Z,
                                        assetMetadataHash: ee,
                                        assetManager: W,
                                        assetReserve: $,
                                        assetFreeze: X,
                                        assetClawback: Y,
                                        type: q.i.acfg,
                                        reKeyTo: re
                                    };
                                    return new H.Transaction(ne)
                                }

                                function Z(e, r, n, H, G, q, V, W, $, X, Y, J, Z, ee, te, re, ne, oe, se) {
                                    return Q(e, G, W, $, X, Y, J, Z, ee, te, re, ne, oe, {
                                        genesisHash: q,
                                        genesisID: V,
                                        firstRound: n,
                                        lastRound: H,
                                        fee: r
                                    }, se)
                                }

                                function ee(e) {
                                    return Q(e.from, e.note, e.total, e.decimals, e.defaultFrozen, e.manager, e.reserve, e.freeze, e.clawback, e.unitName, e.assetName, e.assetURL, e.assetMetadataHash, e.suggestedParams, e.rekeyTo)
                                }

                                function te(e, r, n, G, V, W, $, X, Y = !0, J) {
                                    if (Y && (void 0 === G || void 0 === V || void 0 === W || void 0 === $)) throw Error("strict empty address checking was turned on, but at least one empty address was provided");
                                    const Q = {
                                        from: e,
                                        suggestedParams: X,
                                        assetIndex: n,
                                        assetManager: G,
                                        assetReserve: V,
                                        assetFreeze: W,
                                        assetClawback: $,
                                        type: q.i.acfg,
                                        note: r,
                                        reKeyTo: J
                                    };
                                    return new H.Transaction(Q)
                                }

                                function re(e, r, n, H, G, q, V, W, $, X, Y, J, Q = !0, Z) {
                                    return te(e, G, W, $, X, Y, J, {
                                        genesisHash: q,
                                        genesisID: V,
                                        firstRound: n,
                                        lastRound: H,
                                        fee: r
                                    }, Q, Z)
                                }

                                function ne(e) {
                                    return te(e.from, e.note, e.assetIndex, e.manager, e.reserve, e.freeze, e.clawback, e.suggestedParams, e.strictEmptyAddressChecking, e.rekeyTo)
                                }

                                function oe(e, r, n, G, V) {
                                    const W = {
                                        from: e,
                                        suggestedParams: G,
                                        assetIndex: n,
                                        type: q.i.acfg,
                                        note: r,
                                        reKeyTo: V
                                    };
                                    return new H.Transaction(W)
                                }

                                function se(e, r, n, H, G, q, V, W, $) {
                                    return oe(e, G, W, {
                                        genesisHash: q,
                                        genesisID: V,
                                        firstRound: n,
                                        lastRound: H,
                                        fee: r
                                    }, $)
                                }

                                function ie(e) {
                                    return oe(e.from, e.note, e.assetIndex, e.suggestedParams, e.rekeyTo)
                                }

                                function ae(e, r, n, G, V, W, $) {
                                    const X = {
                                        from: e,
                                        type: q.i.afrz,
                                        freezeAccount: G,
                                        assetIndex: n,
                                        freezeState: V,
                                        note: r,
                                        suggestedParams: W,
                                        reKeyTo: $
                                    };
                                    return new H.Transaction(X)
                                }

                                function ce(e, r, n, H, G, q, V, W, $, X, Y) {
                                    return ae(e, G, W, $, X, {
                                        genesisHash: q,
                                        genesisID: V,
                                        firstRound: n,
                                        lastRound: H,
                                        fee: r
                                    }, Y)
                                }

                                function ue(e) {
                                    return ae(e.from, e.note, e.assetIndex, e.freezeTarget, e.freezeState, e.suggestedParams, e.rekeyTo)
                                }

                                function le(e, r, n, G, V, W, $, X, Y) {
                                    const J = {
                                        type: q.i.axfer,
                                        from: e,
                                        to: r,
                                        amount: V,
                                        suggestedParams: X,
                                        assetIndex: $,
                                        note: W,
                                        assetRevocationTarget: G,
                                        closeRemainderTo: n,
                                        reKeyTo: Y
                                    };
                                    return new H.Transaction(J)
                                }

                                function he(e, r, n, H, G, q, V, W, $, X, Y, J, Q) {
                                    return le(e, r, n, H, q, $, J, {
                                        genesisHash: X,
                                        genesisID: Y,
                                        firstRound: V,
                                        lastRound: W,
                                        fee: G
                                    }, Q)
                                }

                                function pe(e) {
                                    return le(e.from, e.to, e.closeRemainderTo, e.revocationTarget, e.amount, e.note, e.assetIndex, e.suggestedParams, e.rekeyTo)
                                }

                                function fe(e, r, n, G, V, W, $, X, Y, J, Q, Z, ee, te, re, ne, oe) {
                                    const se = {
                                        type: q.i.appl,
                                        from: e,
                                        suggestedParams: r,
                                        appIndex: 0,
                                        appOnComplete: n,
                                        appLocalInts: W,
                                        appLocalByteSlices: $,
                                        appGlobalInts: X,
                                        appGlobalByteSlices: Y,
                                        appApprovalProgram: G,
                                        appClearProgram: V,
                                        appArgs: J,
                                        appAccounts: Q,
                                        appForeignApps: Z,
                                        appForeignAssets: ee,
                                        note: te,
                                        lease: re,
                                        reKeyTo: ne,
                                        extraPages: oe
                                    };
                                    return new H.Transaction(se)
                                }

                                function de(e) {
                                    return fe(e.from, e.suggestedParams, e.onComplete, e.approvalProgram, e.clearProgram, e.numLocalInts, e.numLocalByteSlices, e.numGlobalInts, e.numGlobalByteSlices, e.appArgs, e.accounts, e.foreignApps, e.foreignAssets, e.note, e.lease, e.rekeyTo, e.extraPages)
                                }

                                function ge(e, r, n, V, W, $, X, Y, J, Q, Z, ee) {
                                    const te = {
                                        type: q.i.appl,
                                        from: e,
                                        suggestedParams: r,
                                        appIndex: n,
                                        appApprovalProgram: V,
                                        appOnComplete: G.hq.UpdateApplicationOC,
                                        appClearProgram: W,
                                        appArgs: $,
                                        appAccounts: X,
                                        appForeignApps: Y,
                                        appForeignAssets: J,
                                        note: Q,
                                        lease: Z,
                                        reKeyTo: ee
                                    };
                                    return new H.Transaction(te)
                                }

                                function ye(e) {
                                    return ge(e.from, e.suggestedParams, e.appIndex, e.approvalProgram, e.clearProgram, e.appArgs, e.accounts, e.foreignApps, e.foreignAssets, e.note, e.lease, e.rekeyTo)
                                }

                                function me(e, r, n, V, W, $, X, Y, J, Q) {
                                    const Z = {
                                        type: q.i.appl,
                                        from: e,
                                        suggestedParams: r,
                                        appIndex: n,
                                        appOnComplete: G.hq.DeleteApplicationOC,
                                        appArgs: V,
                                        appAccounts: W,
                                        appForeignApps: $,
                                        appForeignAssets: X,
                                        note: Y,
                                        lease: J,
                                        reKeyTo: Q
                                    };
                                    return new H.Transaction(Z)
                                }

                                function be(e) {
                                    return me(e.from, e.suggestedParams, e.appIndex, e.appArgs, e.accounts, e.foreignApps, e.foreignAssets, e.note, e.lease, e.rekeyTo)
                                }

                                function Ae(e, r, n, V, W, $, X, Y, J, Q) {
                                    const Z = {
                                        type: q.i.appl,
                                        from: e,
                                        suggestedParams: r,
                                        appIndex: n,
                                        appOnComplete: G.hq.OptInOC,
                                        appArgs: V,
                                        appAccounts: W,
                                        appForeignApps: $,
                                        appForeignAssets: X,
                                        note: Y,
                                        lease: J,
                                        reKeyTo: Q
                                    };
                                    return new H.Transaction(Z)
                                }

                                function we(e) {
                                    return Ae(e.from, e.suggestedParams, e.appIndex, e.appArgs, e.accounts, e.foreignApps, e.foreignAssets, e.note, e.lease, e.rekeyTo)
                                }

                                function ve(e, r, n, V, W, $, X, Y, J, Q) {
                                    const Z = {
                                        type: q.i.appl,
                                        from: e,
                                        suggestedParams: r,
                                        appIndex: n,
                                        appOnComplete: G.hq.CloseOutOC,
                                        appArgs: V,
                                        appAccounts: W,
                                        appForeignApps: $,
                                        appForeignAssets: X,
                                        note: Y,
                                        lease: J,
                                        reKeyTo: Q
                                    };
                                    return new H.Transaction(Z)
                                }

                                function xe(e) {
                                    return ve(e.from, e.suggestedParams, e.appIndex, e.appArgs, e.accounts, e.foreignApps, e.foreignAssets, e.note, e.lease, e.rekeyTo)
                                }

                                function Se(e, r, n, V, W, $, X, Y, J, Q) {
                                    const Z = {
                                        type: q.i.appl,
                                        from: e,
                                        suggestedParams: r,
                                        appIndex: n,
                                        appOnComplete: G.hq.ClearStateOC,
                                        appArgs: V,
                                        appAccounts: W,
                                        appForeignApps: $,
                                        appForeignAssets: X,
                                        note: Y,
                                        lease: J,
                                        reKeyTo: Q
                                    };
                                    return new H.Transaction(Z)
                                }

                                function Ee(e) {
                                    return Se(e.from, e.suggestedParams, e.appIndex, e.appArgs, e.accounts, e.foreignApps, e.foreignAssets, e.note, e.lease, e.rekeyTo)
                                }

                                function Te(e, r, n, V, W, $, X, Y, J, Q) {
                                    const Z = {
                                        type: q.i.appl,
                                        from: e,
                                        suggestedParams: r,
                                        appIndex: n,
                                        appOnComplete: G.hq.NoOpOC,
                                        appArgs: V,
                                        appAccounts: W,
                                        appForeignApps: $,
                                        appForeignAssets: X,
                                        note: Y,
                                        lease: J,
                                        reKeyTo: Q
                                    };
                                    return new H.Transaction(Z)
                                }

                                function _e(e) {
                                    return Te(e.from, e.suggestedParams, e.appIndex, e.appArgs, e.accounts, e.foreignApps, e.foreignAssets, e.note, e.lease, e.rekeyTo)
                                }

                                function Be(e) {
                                    const r = {
                                        type: q.i.appl,
                                        from: e.from,
                                        suggestedParams: e.suggestedParams,
                                        appIndex: e.appIndex,
                                        appOnComplete: e.onComplete,
                                        appLocalInts: e.numLocalInts,
                                        appLocalByteSlices: e.numLocalByteSlices,
                                        appGlobalInts: e.numGlobalInts,
                                        appGlobalByteSlices: e.numGlobalByteSlices,
                                        appApprovalProgram: e.approvalProgram,
                                        appClearProgram: e.clearProgram,
                                        appArgs: e.appArgs,
                                        appAccounts: e.accounts,
                                        appForeignApps: e.foreignApps,
                                        appForeignAssets: e.foreignAssets,
                                        note: e.note,
                                        lease: e.lease,
                                        reKeyTo: e.rekeyTo,
                                        extraPages: e.extraPages
                                    };
                                    return new H.Transaction(r)
                                }
                            },
                            3510: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    vC: () => te,
                                    w3: () => Y,
                                    OF: () => ee,
                                    Ch: () => Q,
                                    QX: () => Z,
                                    mE: () => J
                                });
                                const H = ["abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle", "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut", "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort", "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft", "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative", "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot", "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple", "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance", "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory", "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat", "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"];
                                var G = n(9404),
                                    q = n(7116);
                                const V = "failed to decode mnemonic";

                                function W(e) {
                                    const r = [];
                                    let n = 0,
                                        H = 0;
                                    return e.forEach((function(e) {
                                        n |= e << H, H += 8, H >= 11 && (r.push(2047 & n), n >>= 11, H -= 11)
                                    })), H && r.push(n), r
                                }

                                function $(e) {
                                    return e.map(e => H[e])
                                }

                                function X(e) {
                                    return $(W(G.genericHash(e)))[0]
                                }

                                function Y(e) {
                                    if (e.length !== G.SEED_BTYES_LENGTH) throw new RangeError("Seed length must be " + G.SEED_BTYES_LENGTH);
                                    const r = $(W(e)),
                                        n = X(e);
                                    return `${r.join(" ")} ${n}`
                                }

                                function J(e) {
                                    const r = e.split(" "),
                                        n = r.slice(0, 24);
                                    for (const e of n)
                                        if (-1 === H.indexOf(e)) throw new Error("the mnemonic contains a word that is not in the wordlist");
                                    const G = r[r.length - 1];
                                    let q = function(e) {
                                        const r = [];
                                        let n = 0,
                                            H = 0;
                                        return e.forEach((function(e) {
                                            for (n |= e << H, H += 11; H >= 8;) r.push(255 & n), n >>= 8, H -= 8
                                        })), H && r.push(n), new Uint8Array(r)
                                    }(n.map(e => H.indexOf(e)));
                                    if (33 !== q.length) throw new Error(V);
                                    if (0 !== q[q.length - 1]) throw new Error(V);
                                    if (q = q.slice(0, q.length - 1), X(q) === G) return q;
                                    throw new Error(V)
                                }

                                function Q(e) {
                                    const r = J(e),
                                        n = G.keyPairFromSeed(r);
                                    return {
                                        addr: q.encodeAddress(n.publicKey),
                                        sk: n.secretKey
                                    }
                                }

                                function Z(e) {
                                    return Y(e.slice(0, G.SEED_BTYES_LENGTH))
                                }

                                function ee(e) {
                                    return J(e)
                                }

                                function te(e) {
                                    return Y(e)
                                }
                            },
                            4158: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    J6: () => J,
                                    F2: () => Q,
                                    PU: () => Z,
                                    PO: () => ee,
                                    vH: () => te
                                });
                                var H = n(9404),
                                    G = n(7116),
                                    q = n(3033),
                                    V = n(9417),
                                    W = n(413),
                                    $ = n(2486).Buffer;
                                const X = "Cannot merge txs. Multisig preimages differ",
                                    Y = "Cannot mutate a multisig field as it would invalidate all existing signatures.";
                                class h extends V.Transaction {
                                    addLease() {
                                        throw new Error(Y)
                                    }
                                    addRekey() {
                                        throw new Error(Y)
                                    }
                                    signTxn(e) {
                                        throw new Error("Cannot sign a multisig transaction using `signTxn`. Use `partialSignTxn` instead.")
                                    }
                                    partialSignTxn({
                                        version: e,
                                        threshold: r,
                                        pks: n
                                    }, V) {
                                        const W = H.keyPairFromSecretKey(V).publicKey;
                                        return function(e, {
                                            rawSig: r,
                                            myPk: n
                                        }, {
                                            version: V,
                                            threshold: W,
                                            pks: X
                                        }) {
                                            let Y = !1;
                                            const J = X.map(e => H.bytesEqual(e, n) ? (Y = !0, {
                                                pk: $.from(e),
                                                s: r
                                            }) : {
                                                pk: $.from(e)
                                            });
                                            if (!1 === Y) throw new Error("Key does not exist");
                                            const Q = {
                                                    msig: {
                                                        v: V,
                                                        thr: W,
                                                        subsig: J
                                                    },
                                                    txn: e
                                                },
                                                Z = G.fromMultisigPreImg({
                                                    version: V,
                                                    threshold: W,
                                                    pks: X
                                                });
                                            return G.encodeAddress(e.snd) !== G.encodeAddress(Z) && (Q.sgnr = $.from(Z)), new Uint8Array(q.encode(Q))
                                        }(this.get_obj_for_encoding(), {
                                            rawSig: this.rawSignTxn(V),
                                            myPk: W
                                        }, {
                                            version: e,
                                            threshold: r,
                                            pks: n
                                        })
                                    }
                                    static from_obj_for_encoding(e) {
                                        return super.from_obj_for_encoding(e)
                                    }
                                }

                                function J(e) {
                                    if (e.length < 2) throw new Error("Not enough multisig transactions to merge. Need at least two");
                                    const r = q.decode(e[0]),
                                        n = h.from_obj_for_encoding(r.txn).txID(),
                                        H = r.sgnr ? G.encodeAddress(r.sgnr) : void 0,
                                        V = {
                                            version: r.msig.v,
                                            threshold: r.msig.thr,
                                            pks: r.msig.subsig.map(e => e.pk)
                                        },
                                        W = G.encodeAddress(G.fromMultisigPreImg(V));
                                    let Y = r.msig.subsig;
                                    for (let V = 0; V < e.length; V++) {
                                        const J = q.decode(e[V]);
                                        if (h.from_obj_for_encoding(J.txn).txID() !== n) throw new Error("Cannot merge txs. txIDs differ");
                                        if (H !== (J.sgnr ? G.encodeAddress(J.sgnr) : void 0)) throw new Error("Cannot merge txs. Auth addrs differ");
                                        if (J.msig.subsig.length !== r.msig.subsig.length) throw new Error(X);
                                        const Q = {
                                            version: J.msig.v,
                                            threshold: J.msig.thr,
                                            pks: J.msig.subsig.map(e => e.pk)
                                        };
                                        if (W !== G.encodeAddress(G.fromMultisigPreImg(Q))) throw new Error(X);
                                        Y = J.msig.subsig.map((e, n) => {
                                            const H = r.msig.subsig[n];
                                            if (H.s) {
                                                if (e.s && 0 !== $.compare($.from(e.s), $.from(H.s))) throw new Error("Cannot merge txs. subsigs are mismatched.");
                                                return {
                                                    pk: H.pk,
                                                    s: H.s
                                                }
                                            }
                                            return e.s ? {
                                                pk: H.pk,
                                                s: e.s
                                            } : H
                                        })
                                    }
                                    const J = {
                                        msig: {
                                            v: r.msig.v,
                                            thr: r.msig.thr,
                                            subsig: Y
                                        },
                                        txn: r.txn
                                    };
                                    return void 0 !== H && (J.sgnr = $.from(G.decodeAddress(H).publicKey)), new Uint8Array(q.encode(J))
                                }

                                function Q(e, r, n) {
                                    const q = r.v,
                                        V = r.thr,
                                        $ = r.subsig,
                                        X = $.map(e => e.pk);
                                    if (r.subsig.length < V) return !1;
                                    let Y;
                                    try {
                                        Y = G.fromMultisigPreImg({
                                            version: q,
                                            threshold: V,
                                            pks: X
                                        })
                                    } catch (e) {
                                        return !1
                                    }
                                    if (!W.arrayEqual(Y, n)) return !1;
                                    let J = 0;
                                    for (const e of $) void 0 !== e.s && (J += 1);
                                    if (J < V) return !1;
                                    let Q = 0;
                                    for (const r of $) void 0 !== r.s && H.verify(e, r.s, r.pk) && (Q += 1);
                                    return !(Q < V)
                                }

                                function Z(e, {
                                    version: r,
                                    threshold: n,
                                    addrs: H
                                }, q) {
                                    const W = G.fromMultisigPreImgAddrs({
                                        version: r,
                                        threshold: n,
                                        addrs: H
                                    });
                                    Object.prototype.hasOwnProperty.call(e, "from") || (e.from = W);
                                    const $ = H.map(e => G.decodeAddress(e).publicKey);
                                    let X, Y;
                                    return e instanceof V.Transaction ? (X = e, Y = h.prototype.partialSignTxn.call(X, {
                                        version: r,
                                        threshold: n,
                                        pks: $
                                    }, q)) : (X = new h(e), Y = X.partialSignTxn({
                                        version: r,
                                        threshold: n,
                                        pks: $
                                    }, q)), {
                                        txID: X.txID().toString(),
                                        blob: Y
                                    }
                                }

                                function ee(e, {
                                    version: r,
                                    threshold: n,
                                    addrs: H
                                }, V) {
                                    const W = H.map(e => G.decodeAddress(e).publicKey),
                                        $ = q.decode(e),
                                        X = h.from_obj_for_encoding($.txn),
                                        Y = X.partialSignTxn({
                                            version: r,
                                            threshold: n,
                                            pks: W
                                        }, V);
                                    return {
                                        txID: X.txID().toString(),
                                        blob: J([e, Y])
                                    }
                                }

                                function te({
                                    version: e,
                                    threshold: r,
                                    addrs: n
                                }) {
                                    return G.fromMultisigPreImgAddrs({
                                        version: e,
                                        threshold: r,
                                        addrs: n
                                    })
                                }
                            },
                            9404: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    genericHash: () => W,
                                    randomBytes: () => $,
                                    keyPairFromSeed: () => X,
                                    keyPair: () => Y,
                                    keyPairFromSecretKey: () => J,
                                    sign: () => Q,
                                    bytesEqual: () => Z,
                                    verify: () => ee,
                                    PUBLIC_KEY_LENGTH: () => te,
                                    SECRET_KEY_LENGTH: () => re,
                                    HASH_BYTES_LENGTH: () => ne,
                                    SEED_BTYES_LENGTH: () => oe
                                });
                                var H = n(7765),
                                    G = n.n(H),
                                    q = n(9757),
                                    V = n.n(q);

                                function W(e) {
                                    return V().sha512_256.array(e)
                                }

                                function $(e) {
                                    return G().randomBytes(e)
                                }

                                function X(e) {
                                    return G().sign.keyPair.fromSeed(e)
                                }

                                function Y() {
                                    return X($(G().box.secretKeyLength))
                                }

                                function J(e) {
                                    return G().sign.keyPair.fromSecretKey(e)
                                }

                                function Q(e, r) {
                                    return G().sign.detached(e, r)
                                }

                                function Z(e, r) {
                                    return G().verify(e, r)
                                }

                                function ee(e, r, n) {
                                    return G().sign.detached.verify(e, r, n)
                                }
                                const te = G().sign.publicKeyLength,
                                    re = G().sign.secretKeyLength,
                                    ne = 32,
                                    oe = 32
                            },
                            834: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    x7: () => q,
                                    i1: () => V,
                                    Vj: () => W,
                                    Xw: () => $
                                });
                                var H = n(8800),
                                    G = n(4158);

                                function q(e) {
                                    return (r, n) => {
                                        const H = [];
                                        for (const G of n) H.push(r[G].signTxn(e.sk));
                                        return Promise.resolve(H)
                                    }
                                }

                                function V(e) {
                                    return (r, n) => {
                                        const G = [];
                                        for (const q of n) {
                                            const {
                                                blob: n
                                            } = (0, H.signLogicSigTransactionObject)(r[q], e);
                                            G.push(n)
                                        }
                                        return Promise.resolve(G)
                                    }
                                }

                                function W(e, r) {
                                    return (n, H) => {
                                        const q = [];
                                        for (const V of H) {
                                            const H = n[V],
                                                W = [];
                                            for (const n of r) {
                                                const {
                                                    blob: r
                                                } = (0, G.PU)(H, e, n);
                                                W.push(r)
                                            }
                                            q.push((0, G.J6)(W))
                                        }
                                        return Promise.resolve(q)
                                    }
                                }

                                function $(e) {
                                    return "object" == typeof e && 2 === Object.keys(e).length && "object" == typeof e.txn && "function" == typeof e.signer
                                }
                            },
                            9417: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    ALGORAND_MIN_TX_FEE: () => J,
                                    Transaction: () => f,
                                    encodeUnsignedTransaction: () => Z,
                                    decodeUnsignedTransaction: () => ee,
                                    decodeSignedTransaction: () => te,
                                    instantiateTxnIfNeeded: () => re,
                                    default: () => ne
                                });
                                var H = n(7267),
                                    G = n.n(H),
                                    q = n(7116),
                                    V = n(3033),
                                    W = n(9404),
                                    $ = n(413),
                                    X = n(1624),
                                    Y = n(2486).Buffer;
                                const J = 1e3;

                                function Q(e, r, n) {
                                    if (null == e) return;
                                    let H;
                                    if ("string" == typeof e ? H = Y.from(e, "base64") : e.constructor === Uint8Array ? H = Y.from(e) : Y.isBuffer(e) && (H = e), null == H || H.byteLength !== n) throw Error(`${r} must be a ${n} byte Uint8Array or Buffer or base64 string.`);
                                    return H
                                }
                                class f {
                                    constructor({
                                        ...e
                                    }) {
                                        this.name = "Transaction", this.tag = Y.from("TX");
                                        const r = {
                                            type: X.iU.pay,
                                            flatFee: !1,
                                            nonParticipation: !1
                                        };
                                        if (void 0 === e.type && (e.type = r.type), void 0 === e.flatFee && (e.flatFee = r.flatFee), e.type === X.iU.keyreg && void 0 !== e.voteKey && void 0 === e.nonParticipation && (e.nonParticipation = r.nonParticipation), void 0 !== e.suggestedParams) {
                                            const r = e;
                                            r.genesisHash = r.suggestedParams.genesisHash, r.fee = r.suggestedParams.fee, void 0 !== r.suggestedParams.flatFee && (r.flatFee = r.suggestedParams.flatFee), r.firstRound = r.suggestedParams.firstRound, r.lastRound = r.suggestedParams.lastRound, r.genesisID = r.suggestedParams.genesisID
                                        }
                                        const n = e;
                                        if (n.from = q.decodeAddress(n.from), void 0 !== n.to && (n.to = q.decodeAddress(n.to)), void 0 !== n.closeRemainderTo && (n.closeRemainderTo = q.decodeAddress(n.closeRemainderTo)), void 0 !== n.assetManager && (n.assetManager = q.decodeAddress(n.assetManager)), void 0 !== n.assetReserve && (n.assetReserve = q.decodeAddress(n.assetReserve)), void 0 !== n.assetFreeze && (n.assetFreeze = q.decodeAddress(n.assetFreeze)), void 0 !== n.assetClawback && (n.assetClawback = q.decodeAddress(n.assetClawback)), void 0 !== n.assetRevocationTarget && (n.assetRevocationTarget = q.decodeAddress(n.assetRevocationTarget)), void 0 !== n.freezeAccount && (n.freezeAccount = q.decodeAddress(n.freezeAccount)), void 0 !== n.reKeyTo && (n.reKeyTo = q.decodeAddress(n.reKeyTo)), void 0 === n.genesisHash) throw Error("genesis hash must be specified and in a base64 string.");
                                        if (n.genesisHash = Y.from(n.genesisHash, "base64"), void 0 !== n.amount && (!(Number.isSafeInteger(n.amount) || "bigint" == typeof n.amount && n.amount <= BigInt("0xffffffffffffffff")) || n.amount < 0)) throw Error("Amount must be a positive number and smaller than 2^64-1. If the number is larger than 2^53-1, use bigint.");
                                        if (!Number.isSafeInteger(n.fee) || n.fee < 0) throw Error("fee must be a positive number and smaller than 2^53-1");
                                        if (!Number.isSafeInteger(n.firstRound) || n.firstRound < 0) throw Error("firstRound must be a positive number");
                                        if (!Number.isSafeInteger(n.lastRound) || n.lastRound < 0) throw Error("lastRound must be a positive number");
                                        if (void 0 !== n.extraPages && (!Number.isInteger(n.extraPages) || n.extraPages < 0 || n.extraPages > 3)) throw Error("extraPages must be an Integer between and including 0 to 3");
                                        if (void 0 !== n.assetTotal && (!(Number.isSafeInteger(n.assetTotal) || "bigint" == typeof n.assetTotal && n.assetTotal <= BigInt("0xffffffffffffffff")) || n.assetTotal < 0)) throw Error("Total asset issuance must be a positive number and smaller than 2^64-1. If the number is larger than 2^53-1, use bigint.");
                                        if (void 0 !== n.assetDecimals && (!Number.isSafeInteger(n.assetDecimals) || n.assetDecimals < 0 || n.assetDecimals > 19)) throw Error("assetDecimals must be a positive number and smaller than " + 19..toString());
                                        if (void 0 !== n.assetIndex && (!Number.isSafeInteger(n.assetIndex) || n.assetIndex < 0)) throw Error("Asset index must be a positive number and smaller than 2^53-1");
                                        if (void 0 !== n.appIndex && (!Number.isSafeInteger(n.appIndex) || n.appIndex < 0)) throw Error("Application index must be a positive number and smaller than 2^53-1");
                                        if (void 0 !== n.appLocalInts && (!Number.isSafeInteger(n.appLocalInts) || n.appLocalInts < 0)) throw Error("Application local ints count must be a positive number and smaller than 2^53-1");
                                        if (void 0 !== n.appLocalByteSlices && (!Number.isSafeInteger(n.appLocalByteSlices) || n.appLocalByteSlices < 0)) throw Error("Application local byte slices count must be a positive number and smaller than 2^53-1");
                                        if (void 0 !== n.appGlobalInts && (!Number.isSafeInteger(n.appGlobalInts) || n.appGlobalInts < 0)) throw Error("Application global ints count must be a positive number and smaller than 2^53-1");
                                        if (void 0 !== n.appGlobalByteSlices && (!Number.isSafeInteger(n.appGlobalByteSlices) || n.appGlobalByteSlices < 0)) throw Error("Application global byte slices count must be a positive number and smaller than 2^53-1");
                                        if (void 0 !== n.appApprovalProgram && n.appApprovalProgram.constructor !== Uint8Array) throw Error("appApprovalProgram must be a Uint8Array.");
                                        if (void 0 !== n.appClearProgram && n.appClearProgram.constructor !== Uint8Array) throw Error("appClearProgram must be a Uint8Array.");
                                        if (void 0 !== n.appArgs) {
                                            if (!Array.isArray(n.appArgs)) throw Error("appArgs must be an Array of Uint8Array.");
                                            n.appArgs = n.appArgs.slice(), n.appArgs.forEach(e => {
                                                if (e.constructor !== Uint8Array) throw Error("each element of AppArgs must be a Uint8Array.")
                                            })
                                        } else n.appArgs = [];
                                        if (void 0 !== n.appAccounts) {
                                            if (!Array.isArray(n.appAccounts)) throw Error("appAccounts must be an Array of addresses.");
                                            n.appAccounts = n.appAccounts.map(e => q.decodeAddress(e))
                                        }
                                        if (void 0 !== n.appForeignApps) {
                                            if (!Array.isArray(n.appForeignApps)) throw Error("appForeignApps must be an Array of integers.");
                                            n.appForeignApps = n.appForeignApps.slice(), n.appForeignApps.forEach(e => {
                                                if (!Number.isSafeInteger(e) || e < 0) throw Error("each foreign application index must be a positive number and smaller than 2^53-1")
                                            })
                                        }
                                        if (void 0 !== n.appForeignAssets) {
                                            if (!Array.isArray(n.appForeignAssets)) throw Error("appForeignAssets must be an Array of integers.");
                                            n.appForeignAssets = n.appForeignAssets.slice(), n.appForeignAssets.forEach(e => {
                                                if (!Number.isSafeInteger(e) || e < 0) throw Error("each foreign asset index must be a positive number and smaller than 2^53-1")
                                            })
                                        }
                                        if (void 0 !== n.assetMetadataHash && 0 !== n.assetMetadataHash.length) {
                                            if ("string" == typeof n.assetMetadataHash && (n.assetMetadataHash = new Uint8Array(Y.from(n.assetMetadataHash))), n.assetMetadataHash.constructor !== Uint8Array || 32 !== n.assetMetadataHash.byteLength) throw Error("assetMetadataHash must be a 32 byte Uint8Array or string.");
                                            n.assetMetadataHash.every(e => 0 === e) && (n.assetMetadataHash = void 0)
                                        } else n.assetMetadataHash = void 0;
                                        if (void 0 !== n.note) {
                                            if (n.note.constructor !== Uint8Array) throw Error("note must be a Uint8Array.")
                                        } else n.note = new Uint8Array(0);
                                        if (void 0 !== n.lease) {
                                            if (n.lease.constructor !== Uint8Array) throw Error("lease must be a Uint8Array.");
                                            if (32 !== n.lease.length) throw Error(`lease must be of length ${32..toString()}.`);
                                            n.lease.every(e => 0 === e) && (n.lease = new Uint8Array(0))
                                        } else n.lease = new Uint8Array(0);
                                        if (n.voteKey = Q(n.voteKey, "voteKey", 32), n.selectionKey = Q(n.selectionKey, "selectionKey", 32), n.stateProofKey = Q(n.stateProofKey, "stateProofKey", 64), n.nonParticipation && (n.voteKey || n.selectionKey || n.voteFirst || n.stateProofKey || n.voteLast || n.voteKeyDilution)) throw new Error("nonParticipation is true but participation params are present.");
                                        if (!n.nonParticipation && (n.voteKey || n.selectionKey || n.stateProofKey || n.voteFirst || n.voteLast || n.voteKeyDilution) && !(n.voteKey && n.selectionKey && n.voteFirst && n.voteLast && n.voteKeyDilution)) throw new Error("online key registration missing at least one of the following fields: voteKey, selectionKey, voteFirst, voteLast, voteKeyDilution");
                                        delete n.suggestedParams, Object.assign(this, $.removeUndefinedProperties(n)), n.flatFee || (this.fee *= this.estimateSize(), this.fee < J && (this.fee = J)), this.group = void 0
                                    }
                                    get_obj_for_encoding() {
                                        if ("pay" === this.type) {
                                            const e = {
                                                amt: this.amount,
                                                fee: this.fee,
                                                fv: this.firstRound,
                                                lv: this.lastRound,
                                                note: Y.from(this.note),
                                                snd: Y.from(this.from.publicKey),
                                                type: "pay",
                                                gen: this.genesisID,
                                                gh: this.genesisHash,
                                                lx: Y.from(this.lease),
                                                grp: this.group
                                            };
                                            return void 0 !== this.closeRemainderTo && q.encodeAddress(this.closeRemainderTo.publicKey) !== q.ALGORAND_ZERO_ADDRESS_STRING && (e.close = Y.from(this.closeRemainderTo.publicKey)), void 0 !== this.reKeyTo && (e.rekey = Y.from(this.reKeyTo.publicKey)), void 0 !== this.to && (e.rcv = Y.from(this.to.publicKey)), e.note.length || delete e.note, e.amt || delete e.amt, e.fee || delete e.fee, e.fv || delete e.fv, e.gen || delete e.gen, void 0 === e.grp && delete e.grp, e.lx.length || delete e.lx, e.rekey || delete e.rekey, e
                                        }
                                        if ("keyreg" === this.type) {
                                            const e = {
                                                fee: this.fee,
                                                fv: this.firstRound,
                                                lv: this.lastRound,
                                                note: Y.from(this.note),
                                                snd: Y.from(this.from.publicKey),
                                                type: this.type,
                                                gen: this.genesisID,
                                                gh: this.genesisHash,
                                                lx: Y.from(this.lease),
                                                grp: this.group,
                                                votekey: this.voteKey,
                                                selkey: this.selectionKey,
                                                sprfkey: this.stateProofKey,
                                                votefst: this.voteFirst,
                                                votelst: this.voteLast,
                                                votekd: this.voteKeyDilution
                                            };
                                            return e.note.length || delete e.note, e.lx.length || delete e.lx, e.fee || delete e.fee, e.fv || delete e.fv, e.gen || delete e.gen, void 0 === e.grp && delete e.grp, void 0 !== this.reKeyTo && (e.rekey = Y.from(this.reKeyTo.publicKey)), this.nonParticipation && (e.nonpart = !0), e.selkey || delete e.selkey, e.votekey || delete e.votekey, e.sprfkey || delete e.sprfkey, e.votefst || delete e.votefst, e.votelst || delete e.votelst, e.votekd || delete e.votekd, e
                                        }
                                        if ("acfg" === this.type) {
                                            const e = {
                                                fee: this.fee,
                                                fv: this.firstRound,
                                                lv: this.lastRound,
                                                note: Y.from(this.note),
                                                snd: Y.from(this.from.publicKey),
                                                type: this.type,
                                                gen: this.genesisID,
                                                gh: this.genesisHash,
                                                lx: Y.from(this.lease),
                                                grp: this.group,
                                                caid: this.assetIndex,
                                                apar: {
                                                    t: this.assetTotal,
                                                    df: this.assetDefaultFrozen,
                                                    dc: this.assetDecimals
                                                }
                                            };
                                            return void 0 !== this.assetManager && (e.apar.m = Y.from(this.assetManager.publicKey)), void 0 !== this.assetReserve && (e.apar.r = Y.from(this.assetReserve.publicKey)), void 0 !== this.assetFreeze && (e.apar.f = Y.from(this.assetFreeze.publicKey)), void 0 !== this.assetClawback && (e.apar.c = Y.from(this.assetClawback.publicKey)), void 0 !== this.assetName && (e.apar.an = this.assetName), void 0 !== this.assetUnitName && (e.apar.un = this.assetUnitName), void 0 !== this.assetURL && (e.apar.au = this.assetURL), void 0 !== this.assetMetadataHash && (e.apar.am = Y.from(this.assetMetadataHash)), e.note.length || delete e.note, e.lx.length || delete e.lx, e.amt || delete e.amt, e.fee || delete e.fee, e.fv || delete e.fv, e.gen || delete e.gen, void 0 !== this.reKeyTo && (e.rekey = Y.from(this.reKeyTo.publicKey)), e.caid || delete e.caid, e.apar.t || e.apar.un || e.apar.an || e.apar.df || e.apar.m || e.apar.r || e.apar.f || e.apar.c || e.apar.au || e.apar.am || e.apar.dc ? (e.apar.t || delete e.apar.t, e.apar.dc || delete e.apar.dc, e.apar.un || delete e.apar.un, e.apar.an || delete e.apar.an, e.apar.df || delete e.apar.df, e.apar.m || delete e.apar.m, e.apar.r || delete e.apar.r, e.apar.f || delete e.apar.f, e.apar.c || delete e.apar.c, e.apar.au || delete e.apar.au, e.apar.am || delete e.apar.am) : delete e.apar, void 0 === e.grp && delete e.grp, e
                                        }
                                        if ("axfer" === this.type) {
                                            const e = {
                                                aamt: this.amount,
                                                fee: this.fee,
                                                fv: this.firstRound,
                                                lv: this.lastRound,
                                                note: Y.from(this.note),
                                                snd: Y.from(this.from.publicKey),
                                                arcv: Y.from(this.to.publicKey),
                                                type: this.type,
                                                gen: this.genesisID,
                                                gh: this.genesisHash,
                                                lx: Y.from(this.lease),
                                                grp: this.group,
                                                xaid: this.assetIndex
                                            };
                                            return void 0 !== this.closeRemainderTo && (e.aclose = Y.from(this.closeRemainderTo.publicKey)), void 0 !== this.assetRevocationTarget && (e.asnd = Y.from(this.assetRevocationTarget.publicKey)), e.note.length || delete e.note, e.lx.length || delete e.lx, e.aamt || delete e.aamt, e.amt || delete e.amt, e.fee || delete e.fee, e.fv || delete e.fv, e.gen || delete e.gen, void 0 === e.grp && delete e.grp, e.aclose || delete e.aclose, e.asnd || delete e.asnd, e.rekey || delete e.rekey, void 0 !== this.reKeyTo && (e.rekey = Y.from(this.reKeyTo.publicKey)), e
                                        }
                                        if ("afrz" === this.type) {
                                            const e = {
                                                fee: this.fee,
                                                fv: this.firstRound,
                                                lv: this.lastRound,
                                                note: Y.from(this.note),
                                                snd: Y.from(this.from.publicKey),
                                                type: this.type,
                                                gen: this.genesisID,
                                                gh: this.genesisHash,
                                                lx: Y.from(this.lease),
                                                grp: this.group,
                                                faid: this.assetIndex,
                                                afrz: this.freezeState
                                            };
                                            return void 0 !== this.freezeAccount && (e.fadd = Y.from(this.freezeAccount.publicKey)), e.note.length || delete e.note, e.lx.length || delete e.lx, e.amt || delete e.amt, e.fee || delete e.fee, e.fv || delete e.fv, e.gen || delete e.gen, e.afrz || delete e.afrz, void 0 === e.grp && delete e.grp, void 0 !== this.reKeyTo && (e.rekey = Y.from(this.reKeyTo.publicKey)), e
                                        }
                                        if ("appl" === this.type) {
                                            const e = {
                                                fee: this.fee,
                                                fv: this.firstRound,
                                                lv: this.lastRound,
                                                note: Y.from(this.note),
                                                snd: Y.from(this.from.publicKey),
                                                type: this.type,
                                                gen: this.genesisID,
                                                gh: this.genesisHash,
                                                lx: Y.from(this.lease),
                                                grp: this.group,
                                                apid: this.appIndex,
                                                apan: this.appOnComplete,
                                                apls: {
                                                    nui: this.appLocalInts,
                                                    nbs: this.appLocalByteSlices
                                                },
                                                apgs: {
                                                    nui: this.appGlobalInts,
                                                    nbs: this.appGlobalByteSlices
                                                },
                                                apfa: this.appForeignApps,
                                                apas: this.appForeignAssets,
                                                apep: this.extraPages
                                            };
                                            return void 0 !== this.reKeyTo && (e.rekey = Y.from(this.reKeyTo.publicKey)), void 0 !== this.appApprovalProgram && (e.apap = Y.from(this.appApprovalProgram)), void 0 !== this.appClearProgram && (e.apsu = Y.from(this.appClearProgram)), void 0 !== this.appArgs && (e.apaa = this.appArgs.map(e => Y.from(e))), void 0 !== this.appAccounts && (e.apat = this.appAccounts.map(e => Y.from(e.publicKey))), e.note.length || delete e.note, e.lx.length || delete e.lx, e.amt || delete e.amt, e.fee || delete e.fee, e.fv || delete e.fv, e.gen || delete e.gen, e.apid || delete e.apid, e.apls.nui || delete e.apls.nui, e.apls.nbs || delete e.apls.nbs, e.apls.nui || e.apls.nbs || delete e.apls, e.apgs.nui || delete e.apgs.nui, e.apgs.nbs || delete e.apgs.nbs, e.apaa && e.apaa.length || delete e.apaa, e.apgs.nui || e.apgs.nbs || delete e.apgs, e.apap || delete e.apap, e.apsu || delete e.apsu, e.apan || delete e.apan, e.apfa && e.apfa.length || delete e.apfa, e.apas && e.apas.length || delete e.apas, e.apat && e.apat.length || delete e.apat, e.apep || delete e.apep, void 0 === e.grp && delete e.grp, e
                                        }
                                    }
                                    static from_obj_for_encoding(e) {
                                        const r = Object.create(this.prototype);
                                        if (r.name = "Transaction", r.tag = Y.from("TX"), r.genesisID = e.gen, r.genesisHash = Y.from(e.gh), !(0, X.v8)(e.type)) throw new Error("Unrecognized transaction type: " + e.type);
                                        return r.type = e.type, r.fee = e.fee, r.firstRound = e.fv, r.lastRound = e.lv, r.note = new Uint8Array(e.note), r.lease = new Uint8Array(e.lx), r.from = q.decodeAddress(q.encodeAddress(new Uint8Array(e.snd))), void 0 !== e.grp && (r.group = Y.from(e.grp)), void 0 !== e.rekey && (r.reKeyTo = q.decodeAddress(q.encodeAddress(new Uint8Array(e.rekey)))), "pay" === e.type ? (r.amount = e.amt, r.to = q.decodeAddress(q.encodeAddress(new Uint8Array(e.rcv))), void 0 !== e.close && (r.closeRemainderTo = q.decodeAddress(q.encodeAddress(e.close)))) : "keyreg" === e.type ? (void 0 !== e.votekey && (r.voteKey = Y.from(e.votekey)), void 0 !== e.selkey && (r.selectionKey = Y.from(e.selkey)), void 0 !== e.sprfkey && (r.stateProofKey = Y.from(e.sprfkey)), void 0 !== e.votekd && (r.voteKeyDilution = e.votekd), void 0 !== e.votefst && (r.voteFirst = e.votefst), void 0 !== e.votelst && (r.voteLast = e.votelst), void 0 !== e.nonpart && (r.nonParticipation = e.nonpart)) : "acfg" === e.type ? (void 0 !== e.caid && (r.assetIndex = e.caid), void 0 !== e.apar && (r.assetTotal = e.apar.t, r.assetDefaultFrozen = e.apar.df, void 0 !== e.apar.dc && (r.assetDecimals = e.apar.dc), void 0 !== e.apar.m && (r.assetManager = q.decodeAddress(q.encodeAddress(new Uint8Array(e.apar.m)))), void 0 !== e.apar.r && (r.assetReserve = q.decodeAddress(q.encodeAddress(new Uint8Array(e.apar.r)))), void 0 !== e.apar.f && (r.assetFreeze = q.decodeAddress(q.encodeAddress(new Uint8Array(e.apar.f)))), void 0 !== e.apar.c && (r.assetClawback = q.decodeAddress(q.encodeAddress(new Uint8Array(e.apar.c)))), void 0 !== e.apar.un && (r.assetUnitName = e.apar.un), void 0 !== e.apar.an && (r.assetName = e.apar.an), void 0 !== e.apar.au && (r.assetURL = e.apar.au), void 0 !== e.apar.am && (r.assetMetadataHash = e.apar.am))) : "axfer" === e.type ? (void 0 !== e.xaid && (r.assetIndex = e.xaid), void 0 !== e.aamt && (r.amount = e.aamt), void 0 !== e.aclose && (r.closeRemainderTo = q.decodeAddress(q.encodeAddress(new Uint8Array(e.aclose)))), void 0 !== e.asnd && (r.assetRevocationTarget = q.decodeAddress(q.encodeAddress(new Uint8Array(e.asnd)))), r.to = q.decodeAddress(q.encodeAddress(new Uint8Array(e.arcv)))) : "afrz" === e.type ? (void 0 !== e.afrz && (r.freezeState = e.afrz), void 0 !== e.faid && (r.assetIndex = e.faid), r.freezeAccount = q.decodeAddress(q.encodeAddress(new Uint8Array(e.fadd)))) : "appl" === e.type && (void 0 !== e.apid && (r.appIndex = e.apid), void 0 !== e.apan && (r.appOnComplete = e.apan), void 0 !== e.apls && (void 0 !== e.apls.nui && (r.appLocalInts = e.apls.nui), void 0 !== e.apls.nbs && (r.appLocalByteSlices = e.apls.nbs)), void 0 !== e.apgs && (void 0 !== e.apgs.nui && (r.appGlobalInts = e.apgs.nui), void 0 !== e.apgs.nbs && (r.appGlobalByteSlices = e.apgs.nbs)), void 0 !== e.apep && (r.extraPages = e.apep), void 0 !== e.apap && (r.appApprovalProgram = new Uint8Array(e.apap)), void 0 !== e.apsu && (r.appClearProgram = new Uint8Array(e.apsu)), void 0 !== e.apaa && (r.appArgs = e.apaa.map(e => new Uint8Array(e))), void 0 !== e.apat && (r.appAccounts = e.apat.map(e => q.decodeAddress(q.encodeAddress(new Uint8Array(e))))), void 0 !== e.apfa && (r.appForeignApps = e.apfa), void 0 !== e.apas && (r.appForeignAssets = e.apas)), r
                                    }
                                    estimateSize() {
                                        return this.toByte().length + 75
                                    }
                                    bytesToSign() {
                                        const e = this.toByte();
                                        return Y.from($.concatArrays(this.tag, e))
                                    }
                                    toByte() {
                                        return V.encode(this.get_obj_for_encoding())
                                    }
                                    rawSignTxn(e) {
                                        const r = this.bytesToSign(),
                                            n = W.sign(r, e);
                                        return Y.from(n)
                                    }
                                    signTxn(e) {
                                        const r = {
                                                sig: this.rawSignTxn(e),
                                                txn: this.get_obj_for_encoding()
                                            },
                                            n = W.keyPairFromSecretKey(e).publicKey;
                                        return q.encodeAddress(n) !== q.encodeAddress(this.from.publicKey) && (r.sgnr = Y.from(n)), new Uint8Array(V.encode(r))
                                    }
                                    rawTxID() {
                                        const e = this.toByte(),
                                            r = Y.from($.concatArrays(this.tag, e));
                                        return Y.from(W.genericHash(r))
                                    }
                                    txID() {
                                        const e = this.rawTxID();
                                        return G().encode(e).slice(0, 52)
                                    }
                                    addLease(e, r = 0) {
                                        let n;
                                        if (void 0 !== e) {
                                            if (e.constructor !== Uint8Array) throw Error("lease must be a Uint8Array.");
                                            if (32 !== e.length) throw Error(`lease must be of length ${32..toString()}.`);
                                            n = new Uint8Array(e)
                                        } else n = new Uint8Array(0);
                                        this.lease = n, 0 !== r && (this.fee += 37 * r)
                                    }
                                    addRekey(e, r = 0) {
                                        void 0 !== e && (this.reKeyTo = q.decodeAddress(e)), 0 !== r && (this.fee += 37 * r)
                                    }
                                    _getDictForDisplay() {
                                        const e = {
                                            ...this
                                        };
                                        return e.tag = e.tag.toString(), e.from = q.encodeAddress(e.from.publicKey), void 0 !== e.to && (e.to = q.encodeAddress(e.to.publicKey)), void 0 !== e.freezeAccount && (e.freezeAccount = q.encodeAddress(e.freezeAccount.publicKey)), void 0 !== e.closeRemainderTo && (e.closeRemainderTo = q.encodeAddress(e.closeRemainderTo.publicKey)), void 0 !== e.assetManager && (e.assetManager = q.encodeAddress(e.assetManager.publicKey)), void 0 !== e.assetReserve && (e.assetReserve = q.encodeAddress(e.assetReserve.publicKey)), void 0 !== e.assetFreeze && (e.assetFreeze = q.encodeAddress(e.assetFreeze.publicKey)), void 0 !== e.assetClawback && (e.assetClawback = q.encodeAddress(e.assetClawback.publicKey)), void 0 !== e.assetRevocationTarget && (e.assetRevocationTarget = q.encodeAddress(e.assetRevocationTarget.publicKey)), void 0 !== e.reKeyTo && (e.reKeyTo = q.encodeAddress(e.reKeyTo.publicKey)), e.genesisHash = e.genesisHash.toString("base64"), e
                                    }
                                    prettyPrint() {
                                        console.log(this._getDictForDisplay())
                                    }
                                    toString() {
                                        return JSON.stringify(this._getDictForDisplay())
                                    }
                                }

                                function Z(e) {
                                    const r = e.get_obj_for_encoding();
                                    return V.encode(r)
                                }

                                function ee(e) {
                                    const r = V.decode(e);
                                    return f.from_obj_for_encoding(r)
                                }

                                function te(e) {
                                    const r = V.decode(e);
                                    return {
                                        ...r,
                                        txn: f.from_obj_for_encoding(r.txn)
                                    }
                                }

                                function re(e) {
                                    return e instanceof f ? e : new f(e)
                                }
                                const ne = f
                            },
                            2380: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    i: () => H.i
                                });
                                var H = n(1824)
                            },
                            7197: (e, r, n) => {
                                "use strict";
                                var H;
                                n.d(r, {
                                        Z: () => G
                                    }),
                                    function(e) {
                                        e.DEFAULT = "default", e.SAFE = "safe", e.MIXED = "mixed", e.BIGINT = "bigint"
                                    }(H || (H = {}));
                                const G = H
                            },
                            1624: (e, r, n) => {
                                "use strict";
                                var H, G;

                                function q(e) {
                                    return e === H.pay || e === H.keyreg || e === H.acfg || e === H.axfer || e === H.afrz || e === H.appl
                                }
                                n.d(r, {
                                        iU: () => H,
                                        v8: () => q,
                                        hq: () => G
                                    }),
                                    function(e) {
                                        e.pay = "pay", e.keyreg = "keyreg", e.acfg = "acfg", e.axfer = "axfer", e.afrz = "afrz", e.appl = "appl"
                                    }(H || (H = {})),
                                    function(e) {
                                        e[e.NoOpOC = 0] = "NoOpOC", e[e.OptInOC = 1] = "OptInOC", e[e.CloseOutOC = 2] = "CloseOutOC", e[e.ClearStateOC = 3] = "ClearStateOC", e[e.UpdateApplicationOC = 4] = "UpdateApplicationOC", e[e.DeleteApplicationOC = 5] = "DeleteApplicationOC"
                                    }(G || (G = {}))
                            },
                            1824: (e, r, n) => {
                                "use strict";
                                n.d(r, {
                                    i: () => H.iU
                                });
                                var H = n(1624)
                            },
                            413: (e, r, n) => {
                                "use strict";
                                n.r(r), n.d(r, {
                                    parseJSON: () => W,
                                    arrayEqual: () => $,
                                    concatArrays: () => X,
                                    removeUndefinedProperties: () => Y,
                                    isNode: () => J
                                });
                                var H = n(4360),
                                    G = n.n(H),
                                    q = n(7197);
                                const V = G()({
                                    useNativeBigInt: !0,
                                    strict: !0
                                });

                                function W(e, r) {
                                    const n = r && r.intDecoding ? r.intDecoding : q.Z.DEFAULT;
                                    return V.parse(e, (e, r) => {
                                        if (null != r && "object" == typeof r && null == Object.getPrototypeOf(r) && Object.setPrototypeOf(r, Object.prototype), "bigint" == typeof r) {
                                            if ("bigint" === n || "mixed" === n && r > Number.MAX_SAFE_INTEGER) return r;
                                            if ("default" === n || "mixed" === n) return Number(r);
                                            throw new Error(`Integer exceeds maximum safe integer: ${r.toString()}. Try parsing with a different intDecoding option.`)
                                        }
                                        return "number" == typeof r && "bigint" === n && Number.isInteger(r) ? BigInt(r) : r
                                    })
                                }

                                function $(e, r) {
                                    return e.length === r.length && Array.from(e).every((e, n) => e === r[n])
                                }

                                function X(...e) {
                                    const r = e.reduce((e, r) => e + r.length, 0),
                                        n = new Uint8Array(r);
                                    let H = 0;
                                    for (let r = 0; r < e.length; r++) n.set(e[r], H), H += e[r].length;
                                    return n
                                }

                                function Y(e) {
                                    const r = {
                                        ...e
                                    };
                                    return Object.keys(r).forEach(e => {
                                        void 0 === r[e] && delete r[e]
                                    }), r
                                }

                                function J() {
                                    return "object" == typeof process && "object" == typeof process.versions && void 0 !== process.versions.node
                                }
                            },
                            5062: (e, r, n) => {
                                "use strict";
                                async function H(e, r, n) {
                                    const H = await e.status().do();
                                    if (void 0 === H) throw new Error("Unable to get node status");
                                    const G = H["last-round"] + 1;
                                    let q = G;
                                    for (; q < G + n;) {
                                        let n = !1;
                                        try {
                                            const H = await e.pendingTransactionInformation(r).do();
                                            if (H["confirmed-round"]) return H;
                                            if (H["pool-error"]) throw n = !0, new Error("Transaction Rejected: " + H["pool-error"])
                                        } catch (e) {
                                            if (n) throw e
                                        }
                                        await e.statusAfterBlock(q).do(), q += 1
                                    }
                                    throw new Error(`Transaction not confirmed after ${n} rounds`)
                                }
                                n.d(r, {
                                    K: () => H
                                })
                            },
                            4654: () => {}
                        },
                        __webpack_module_cache__ = {};

                    function __webpack_require__(e) {
                        var r = __webpack_module_cache__[e];
                        if (void 0 !== r) return r.exports;
                        var n = __webpack_module_cache__[e] = {
                            exports: {}
                        };
                        return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports
                    }
                    __webpack_require__.amdO = {}, __webpack_require__.n = e => {
                        var r = e && e.__esModule ? () => e.default : () => e;
                        return __webpack_require__.d(r, {
                            a: r
                        }), r
                    }, __webpack_require__.d = (e, r) => {
                        for (var n in r) __webpack_require__.o(r, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: r[n]
                        })
                    }, __webpack_require__.g = function() {
                        if ("object" == typeof globalThis) return globalThis;
                        try {
                            return this || new Function("return this")()
                        } catch (e) {
                            if ("object" == typeof window) return window
                        }
                    }(), __webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), __webpack_require__.r = e => {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    };
                    var __webpack_exports__ = {};
                    return (() => {
                        "use strict";
                        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                            default: () => n
                        });
                        var e = __webpack_require__(6608),
                            r = {};
                        for (const n in e) "default" !== n && (r[n] = () => e[n]);
                        __webpack_require__.d(__webpack_exports__, r);
                        const n = e
                    })(), __webpack_exports__
                })()
            }, module.exports = t()
        }
    }
]);