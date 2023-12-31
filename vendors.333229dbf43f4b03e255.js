(window.webpackJsonp = window.webpackJsonp || []).push([
    [304], {
        7170: function(e, r, t) {
            (t => {
                if ("object" == typeof window) {
                    const r = {};
                    e.exports ? e.exports = t(r, !1) : window.bls = t(r, !1)
                } else t(r, !0)
            })((r, n) => {
                r.BN254 = 0, r.BN381_1 = 1, r.BLS12_381 = 5, r.ethMode = !1, r.ETH_MODE_DRAFT_05 = 1, r.ETH_MODE_DRAFT_06 = 2, r.ETH_MODE_DRAFT_07 = 3;
                const i = (e, r) => {
                        const t = e.mod,
                            n = e.ethMode ? 4 : 6,
                            i = 10 * n + 6 + (e.ethMode ? 200 : 0),
                            s = 8 * n,
                            l = 144 * (e.ethMode ? 1 : 2),
                            a = 144 * (e.ethMode ? 2 : 1),
                            o = e => t._blsMalloc(e),
                            u = e => {
                                t._blsFree(e)
                            },
                            c = (e, r) => {
                                for (let n = 0; n < r.length; n++) t.HEAP8[e + n] = r.charCodeAt(n)
                            };
                        e.toHex = (e, r, t) => {
                            let n = "";
                            for (let i = 0; i < t; i++) n += ("0" + e[r + i].toString(16)).slice(-2);
                            return n
                        }, e.toHexStr = r => e.toHex(r, 0, r.length), e.fromHexStr = e => {
                            if (1 & e.length) throw new Error("fromHexStr:length must be even " + e.length);
                            const r = e.length / 2,
                                t = new Uint8Array(r);
                            for (let n = 0; n < r; n++) t[n] = parseInt(e.slice(2 * n, 2 * n + 2), 16);
                            return t
                        };
                        const f = (e, r) => {
                                t.HEAP32.set(r, e / 4)
                            },
                            d = (e, r = !0) => (n, i = 0) => {
                                const s = o(3096),
                                    l = e(s, 3096, n, i);
                                if (l <= 0) throw new Error("err gen_str:" + n);
                                let a = null;
                                return a = r ? ((e, r) => {
                                    let n = "";
                                    for (let i = 0; i < r; i++) n += String.fromCharCode(t.HEAP8[e + i]);
                                    return n
                                })(s, l) : new Uint8Array(t.HEAP8.subarray(s, s + l)), u(s), a
                            },
                            p = e => d(e, !1),
                            y = e => (r, n) => {
                                const i = o(n.length);
                                t.HEAP8.set(n, i);
                                const s = e(r, i, n.length);
                                if (u(i), 0 === s) throw new Error("err _wrapDeserialize", n)
                            },
                            b = (e, r, n = !1) => function() {
                                const i = [...arguments],
                                    s = i[r],
                                    l = Object.prototype.toString.apply(s);
                                if (["[object String]", "[object Uint8Array]", "[object Array]"].indexOf(l) < 0) throw new Error(`err bad type:"${l}". Use String or Uint8Array.`);
                                const a = i[r + 1],
                                    f = o(s.length);
                                "[object String]" === l ? c(f, s) : t.HEAP8.set(s, f);
                                const d = e(...i.slice(0, r), f, s.length, a);
                                if (u(f), n) return d;
                                if (d) throw new Error("err _wrapInput " + s)
                            },
                            g = (e, r, t, n, i) => {
                                const s = r._allocAndCopy(),
                                    l = i._allocAndCopy(),
                                    a = o(t * n.length);
                                for (let e = 0; e < n.length; e++) f(a + t * e, n[e].a_);
                                e(s, a, n.length, l), u(a), u(l), r._saveAndFree(s)
                            },
                            m = (e, r, t, n, i) => {
                                const l = n.length;
                                if (l != i.length) throw "recover:bad length";
                                const a = r._alloc(),
                                    c = o(t * l),
                                    d = o(s * l);
                                for (let e = 0; e < l; e++) f(c + t * e, n[e].a_), f(d + s * e, i[e].a_);
                                const p = e(a, c, d, l);
                                if (u(d), u(c), r._saveAndFree(a), p) throw "callRecover"
                            };
                        e.blsInit = (r = (e.ethMode ? e.BLS12_381 : e.BN254)) => {
                            const n = t._blsInit(r, i);
                            if (n) throw "blsInit err " + n
                        }, e.getCurveOrder = d(t._blsGetCurveOrder), e.getFieldOrder = d(t._blsGetFieldOrder), e.blsIdSetDecStr = b(t._blsIdSetDecStr, 1), e.blsIdSetHexStr = b(t._blsIdSetHexStr, 1), e.blsIdGetDecStr = d(t._blsIdGetDecStr), e.blsIdGetHexStr = d(t._blsIdGetHexStr), e.blsIdSerialize = p(t._blsIdSerialize), e.blsSecretKeySerialize = p(t._blsSecretKeySerialize), e.blsPublicKeySerialize = p(t._blsPublicKeySerialize), e.blsSignatureSerialize = p(t._blsSignatureSerialize), e.blsIdDeserialize = y(t._blsIdDeserialize), e.blsSecretKeyDeserialize = y(t._blsSecretKeyDeserialize), e.blsPublicKeyDeserialize = y(t._blsPublicKeyDeserialize), e.blsSignatureDeserialize = y(t._blsSignatureDeserialize), e.blsPublicKeySerializeUncompressed = p(t._blsPublicKeySerializeUncompressed), e.blsSignatureSerializeUncompressed = p(t._blsSignatureSerializeUncompressed), e.blsPublicKeyDeserializeUncompressed = y(t._blsPublicKeyDeserializeUncompressed), e.blsSignatureDeserializeUncompressed = y(t._blsSignatureDeserializeUncompressed), e.blsSecretKeySetLittleEndian = b(t._blsSecretKeySetLittleEndian, 1), e.blsSecretKeySetLittleEndianMod = b(t._blsSecretKeySetLittleEndianMod, 1), e.blsHashToSecretKey = b(t._blsHashToSecretKey, 1), e.blsSign = b(t._blsSign, 2), e.blsVerify = b(t._blsVerify, 2, !0);
                        class Common {
                            constructor(e) {
                                this.a_ = new Uint32Array(e / 4)
                            }
                            deserializeHexStr(r) {
                                this.deserialize(e.fromHexStr(r))
                            }
                            serializeToHexStr() {
                                return e.toHexStr(this.serialize())
                            }
                            dump(e = "") {
                                console.log(e + this.serializeToHexStr())
                            }
                            clear() {
                                this.a_.fill(0)
                            }
                            _alloc() {
                                return o(4 * this.a_.length)
                            }
                            _allocAndCopy() {
                                const e = this._alloc();
                                return t.HEAP32.set(this.a_, e / 4), e
                            }
                            _save(e) {
                                this.a_.set(t.HEAP32.subarray(e / 4, e / 4 + this.a_.length))
                            }
                            _saveAndFree(e) {
                                this._save(e), u(e)
                            }
                            _setter(e, r, t) {
                                const n = this._alloc(),
                                    i = e(n, r, t);
                                if (this._saveAndFree(n), i) throw new Error("_setter err")
                            }
                            _getter(e, r, t) {
                                const n = this._allocAndCopy(),
                                    i = e(n, r, t);
                                return u(n), i
                            }
                            _isEqual(e, r) {
                                const t = this._allocAndCopy(),
                                    n = r._allocAndCopy(),
                                    i = e(t, n);
                                return u(n), u(t), 1 === i
                            }
                            _op1(e) {
                                const r = new this.constructor,
                                    t = this._allocAndCopy(),
                                    n = r._alloc();
                                return e(n, t), r._saveAndFree(n), u(t), r
                            }
                            _op2(e, r, t = null) {
                                const n = t ? new t : new this.constructor,
                                    i = this._allocAndCopy(),
                                    s = r._allocAndCopy(),
                                    l = n._alloc();
                                return e(l, i, s), n._saveAndFree(l), u(s), u(i), n
                            }
                            _update(e, r) {
                                const t = this._allocAndCopy(),
                                    n = r._allocAndCopy();
                                e(t, n), u(n), this._saveAndFree(t)
                            }
                        }
                        e.Id = class extends Common {
                            constructor() {
                                super(s)
                            }
                            setInt(e) {
                                this._setter(t._blsIdSetInt, e)
                            }
                            isEqual(e) {
                                return this._isEqual(t._blsIdIsEqual, e)
                            }
                            deserialize(r) {
                                this._setter(e.blsIdDeserialize, r)
                            }
                            serialize() {
                                return this._getter(e.blsIdSerialize)
                            }
                            setStr(r, t = 10) {
                                switch (t) {
                                    case 10:
                                        return void this._setter(e.blsIdSetDecStr, r);
                                    case 16:
                                        return void this._setter(e.blsIdSetHexStr, r);
                                    default:
                                        throw "BlsId.setStr:bad base:" + t
                                }
                            }
                            getStr(r = 10) {
                                switch (r) {
                                    case 10:
                                        return this._getter(e.blsIdGetDecStr);
                                    case 16:
                                        return this._getter(e.blsIdGetHexStr);
                                    default:
                                        throw "BlsId.getStr:bad base:" + r
                                }
                            }
                            setLittleEndian(r) {
                                this._setter(e.blsSecretKeySetLittleEndian, r)
                            }
                            setLittleEndianMod(r) {
                                this._setter(e.blsSecretKeySetLittleEndianMod, r)
                            }
                            setByCSPRNG() {
                                const r = new Uint8Array(s);
                                e.getRandomValues(r), this.setLittleEndian(r)
                            }
                        }, e.deserializeHexStrToId = r => {
                            const t = new e.Id;
                            return t.deserializeHexStr(r), t
                        }, e.SecretKey = class extends Common {
                            constructor() {
                                super(48)
                            }
                            setInt(e) {
                                this._setter(t._blsIdSetInt, e)
                            }
                            isZero() {
                                return 1 === this._getter(t._blsSecretKeyIsZero)
                            }
                            isEqual(e) {
                                return this._isEqual(t._blsSecretKeyIsEqual, e)
                            }
                            deserialize(r) {
                                this._setter(e.blsSecretKeyDeserialize, r)
                            }
                            serialize() {
                                return this._getter(e.blsSecretKeySerialize)
                            }
                            add(e) {
                                this._update(t._blsSecretKeyAdd, e)
                            }
                            share(e, r) {
                                g(t._blsSecretKeyShare, this, 48, e, r)
                            }
                            recover(e, r) {
                                m(t._blsSecretKeyRecover, this, 48, e, r)
                            }
                            setHashOf(r) {
                                this._setter(e.blsHashToSecretKey, r)
                            }
                            setLittleEndian(r) {
                                this._setter(e.blsSecretKeySetLittleEndian, r)
                            }
                            setLittleEndianMod(r) {
                                this._setter(e.blsSecretKeySetLittleEndianMod, r)
                            }
                            setByCSPRNG() {
                                const r = new Uint8Array(48);
                                e.getRandomValues(r), this.setLittleEndian(r)
                            }
                            getPublicKey() {
                                const r = new e.PublicKey,
                                    n = this._allocAndCopy(),
                                    i = r._alloc();
                                return t._blsGetPublicKey(i, n), r._saveAndFree(i), u(n), r
                            }
                            sign(r) {
                                const t = new e.Signature,
                                    n = this._allocAndCopy(),
                                    i = t._alloc();
                                return e.blsSign(i, n, r), t._saveAndFree(i), u(n), t
                            }
                        }, e.deserializeHexStrToSecretKey = r => {
                            const t = new e.SecretKey;
                            return t.deserializeHexStr(r), t
                        }, e.PublicKey = class extends Common {
                            constructor() {
                                super(l)
                            }
                            isZero() {
                                return 1 === this._getter(t._blsPublicKeyIsZero)
                            }
                            isEqual(e) {
                                return this._isEqual(t._blsPublicKeyIsEqual, e)
                            }
                            deserialize(r) {
                                this._setter(e.blsPublicKeyDeserialize, r)
                            }
                            serialize() {
                                return this._getter(e.blsPublicKeySerialize)
                            }
                            deserializeUncompressed(r) {
                                this._setter(e.blsPublicKeyDeserializeUncompressed, r)
                            }
                            serializeUncompressed() {
                                return this._getter(e.blsPublicKeySerializeUncompressed)
                            }
                            add(e) {
                                this._update(t._blsPublicKeyAdd, e)
                            }
                            share(e, r) {
                                g(t._blsPublicKeyShare, this, l, e, r)
                            }
                            recover(e, r) {
                                m(t._blsPublicKeyRecover, this, l, e, r)
                            }
                            isValidOrder() {
                                return this._getter(t._blsPublicKeyIsValidOrder)
                            }
                            verify(r, t) {
                                const n = this._allocAndCopy(),
                                    i = r._allocAndCopy(),
                                    s = e.blsVerify(i, n, t);
                                return u(i), u(n), 0 != s
                            }
                        }, e.deserializeHexStrToPublicKey = r => {
                            const t = new e.PublicKey;
                            return t.deserializeHexStr(r), t
                        }, e.Signature = class extends Common {
                            constructor() {
                                super(a)
                            }
                            isZero() {
                                return 1 === this._getter(t._blsSignatureIsZero)
                            }
                            isEqual(e) {
                                return this._isEqual(t._blsSignatureIsEqual, e)
                            }
                            deserialize(r) {
                                this._setter(e.blsSignatureDeserialize, r)
                            }
                            serialize() {
                                return this._getter(e.blsSignatureSerialize)
                            }
                            deserializeUncompressed(r) {
                                this._setter(e.blsSignatureDeserializeUncompressed, r)
                            }
                            serializeUncompressed() {
                                return this._getter(e.blsSignatureSerializeUncompressed)
                            }
                            add(e) {
                                this._update(t._blsSignatureAdd, e)
                            }
                            recover(e, r) {
                                m(t._blsSignatureRecover, this, a, e, r)
                            }
                            isValidOrder() {
                                return this._getter(t._blsSignatureIsValidOrder)
                            }
                            aggregate(e) {
                                const r = e.length,
                                    n = this._allocAndCopy(),
                                    i = o(a * r);
                                for (let n = 0; n < r; n++) t.HEAP32.set(e[n].a_, (i + a * n) / 4);
                                const s = t._blsAggregateSignature(n, i, r);
                                return u(i), this._saveAndFree(n), 1 == s
                            }
                            fastAggregateVerify(e, r) {
                                const n = e.length,
                                    i = r.length,
                                    s = this._allocAndCopy(),
                                    a = o(l * n),
                                    c = o(i);
                                for (let r = 0; r < n; r++) t.HEAP32.set(e[r].a_, (a + l * r) / 4);
                                t.HEAP8.set(r, c);
                                const f = t._blsFastAggregateVerify(s, a, n, c, i);
                                return u(c), u(a), u(s), 1 == f
                            }
                            aggregateVerifyNoCheck(e, r) {
                                const n = e.length;
                                if (0 == n || r.length != 32 * n) return !1;
                                const i = this._allocAndCopy(),
                                    s = o(l * n),
                                    a = o(r.length);
                                for (let r = 0; r < n; r++) t.HEAP32.set(e[r].a_, (s + l * r) / 4);
                                t.HEAP8.set(r, a);
                                const c = t._blsAggregateVerifyNoCheck(i, s, a, 32, n);
                                return u(a), u(s), u(i), 1 == c
                            }
                        }, e.deserializeHexStrToSignature = r => {
                            const t = new e.Signature;
                            return t.deserializeHexStr(r), t
                        }, e.setETHmode = e => {
                            if (0 != t._blsSetETHmode(e)) throw new Error("bad setETHmode " + e)
                        }, e.verifySignatureOrder = e => {
                            t._blsSignatureVerifyOrder(e)
                        }, e.verifyPublicKeyOrder = e => {
                            t._blsPublicKeyVerifyOrder(e)
                        }, e.areAllMsgDifferent = (e, r) => {
                            const t = e.length / r;
                            if (e.length != t * r) return !1;
                            h = {};
                            for (let n = 0; n < t; n++) {
                                const t = e.subarray(n * r, (n + 1) * r);
                                if (t in h) return !1;
                                h[t] = !0
                            }
                            return !0
                        }, e.multiVerify = (r, n, i) => {
                            const s = n.length;
                            if (r.length != s || i.length != s) return !1;
                            for (let e = 0; e < s; e++)
                                if (32 != i[e].length) return !1;
                            const c = o(a * s),
                                f = o(l * s),
                                d = o(32 * s),
                                p = o(8 * s);
                            e.getRandomValues(t.HEAP8.subarray(p, p + 8 * s));
                            for (let e = 0; e < s; e++) t.HEAP32.set(n[e].a_, (c + a * e) / 4), t.HEAP32.set(r[e].a_, (f + l * e) / 4), t.HEAP8.set(i[e], d + 32 * e);
                            const y = t._blsMultiVerify(c, f, d, 32, p, 8, s, 0);
                            return u(p), u(d), u(f), u(c), 1 == y
                        }, e.blsInit(r), e.ethMode && e.setETHmode(e.ETH_MODE_DRAFT_07)
                    },
                    s = function(e, t) {
                        const n = new Uint8Array(t);
                        r.getRandomValues(n);
                        for (let i = 0; i < t; i++) r.mod.HEAP8[e + i] = n[i]
                    };
                return r.setRandFunc = e => {
                    r.getRandomValues = e
                }, r.init = (l = r.BN254) => {
                    r.curveType = l;
                    return new Promise(a => {
                        if (n) {
                            const e = t(24);
                            r.getRandomValues = e.randomFillSync;
                            const n = t(104);
                            t(9037)("./bls_c.js")({
                                cryptoGetRandomValues: s,
                                locateFile: e => n.join(__dirname, e)
                            }).then(e => {
                                r.mod = e, i(r, l), a()
                            })
                        } else {
                            const n = window.crypto || window.msCrypto;
                            r.getRandomValues = e => n.getRandomValues(e), fetch("./bls_c.wasm").then(e => e.arrayBuffer()).then(e => new Uint8Array(e)).then(() => {
                                e.exports ? r.mod = t(7171)() : r.mod = Module(), r.mod.cryptoGetRandomValues = s, r.mod.onRuntimeInitialized = () => {
                                    i(r, l), a()
                                }
                            })
                        }
                    })
                }, r
            })
        },
        7171: function(e, r, t) {
            var n, i = (n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, "undefined" != typeof __filename && (n = n || __filename), function(e) {
                e = void 0 !== (e = e || {}) ? e : {};
                var r, i = {};
                for (r in e) e.hasOwnProperty(r) && (i[r] = e[r]);
                var s = [],
                    l = !1,
                    a = !1,
                    o = !1,
                    u = !1;
                l = "object" == typeof window, a = "function" == typeof importScripts, o = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, u = !l && !o && !a;
                var c, f, d, p, y = "";

                function h(r) {
                    return e.locateFile ? e.locateFile(r, y) : y + r
                }
                o ? (y = a ? t(104).dirname(y) + "/" : __dirname + "/", c = function(e, r) {
                    return d || (d = t(142)), p || (p = t(104)), e = p.normalize(e), d.readFileSync(e, r ? null : "utf8")
                }, f = function(e) {
                    var r = c(e, !0);
                    return r.buffer || (r = new Uint8Array(r)), w(r.buffer), r
                }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), s = process.argv.slice(2), e.inspect = function() {
                    return "[Emscripten Module object]"
                }) : u ? ("undefined" != typeof read && (c = function(e) {
                    return read(e)
                }), f = function(e) {
                    var r;
                    return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (w("object" == typeof(r = read(e, "binary"))), r)
                }, "undefined" != typeof scriptArgs ? s = scriptArgs : void 0 !== arguments && (s = arguments), "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (l || a) && (a ? y = self.location.href : document.currentScript && (y = document.currentScript.src), n && (y = n), y = 0 !== y.indexOf("blob:") ? y.substr(0, y.lastIndexOf("/") + 1) : "", c = function(e) {
                    var r = new XMLHttpRequest;
                    return r.open("GET", e, !1), r.send(null), r.responseText
                }, a && (f = function(e) {
                    var r = new XMLHttpRequest;
                    return r.open("GET", e, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response)
                }));
                var b, g, m = e.print || console.log.bind(console),
                    _ = e.printErr || console.warn.bind(console);
                for (r in i) i.hasOwnProperty(r) && (e[r] = i[r]);
                i = null, e.arguments && (s = e.arguments), e.thisProgram && e.thisProgram, e.quit && e.quit, e.wasmBinary && (b = e.wasmBinary), e.noExitRuntime && e.noExitRuntime, "object" != typeof WebAssembly && _("no native wasm support detected");
                var S = new WebAssembly.Table({
                        initial: 197,
                        maximum: 197,
                        element: "anyfunc"
                    }),
                    v = !1;

                function w(e, r) {
                    e || W("Assertion failed: " + r)
                }
                "undefined" != typeof TextDecoder && new TextDecoder("utf8"), "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
                var K, A, E, P = 65536;

                function I(r) {
                    K = r, e.HEAP8 = new Int8Array(r), e.HEAP16 = new Int16Array(r), e.HEAP32 = E = new Int32Array(r), e.HEAPU8 = A = new Uint8Array(r), e.HEAPU16 = new Uint16Array(r), e.HEAPU32 = new Uint32Array(r), e.HEAPF32 = new Float32Array(r), e.HEAPF64 = new Float64Array(r)
                }
                var x = 5322560,
                    z = 79520,
                    D = e.INITIAL_MEMORY || 16777216;

                function H(r) {
                    for (; r.length > 0;) {
                        var t = r.shift();
                        if ("function" != typeof t) {
                            var n = t.func;
                            "number" == typeof n ? void 0 === t.arg ? e.dynCall_v(n) : e.dynCall_vi(n, t.arg) : n(void 0 === t.arg ? null : t.arg)
                        } else t()
                    }
                }(g = e.wasmMemory ? e.wasmMemory : new WebAssembly.Memory({
                    initial: D / P,
                    maximum: D / P
                })) && (K = g.buffer), D = K.byteLength, I(K), E[z >> 2] = x;
                var O = [],
                    B = [],
                    R = [],
                    U = [];

                function F() {
                    if (e.preRun)
                        for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) G(e.preRun.shift());
                    H(O)
                }

                function N() {
                    H(B)
                }

                function C() {
                    H(R)
                }

                function M() {
                    if (e.postRun)
                        for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) L(e.postRun.shift());
                    H(U)
                }

                function G(e) {
                    O.unshift(e)
                }

                function L(e) {
                    U.unshift(e)
                }
                var k = 0,
                    T = null,
                    V = null;

                function q(r) {
                    k++, e.monitorRunDependencies && e.monitorRunDependencies(k)
                }

                function j(r) {
                    if (k--, e.monitorRunDependencies && e.monitorRunDependencies(k), 0 == k && (null !== T && (clearInterval(T), T = null), V)) {
                        var t = V;
                        V = null, t()
                    }
                }

                function W(r) {
                    throw e.onAbort && e.onAbort(r), m(r += ""), _(r), v = !0, r = "abort(" + r + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(r)
                }
                e.preloadedImages = {}, e.preloadedAudios = {};
                var Z = "data:application/octet-stream;base64,";

                function $(e) {
                    return String.prototype.startsWith ? e.startsWith(Z) : 0 === e.indexOf(Z)
                }
                var X = "bls_c.wasm";

                function Y() {
                    try {
                        if (b) return new Uint8Array(b);
                        if (f) return f(X);
                        throw "both async and sync fetching of the wasm failed"
                    } catch (e) {
                        W(e)
                    }
                }

                function J() {
                    return b || !l && !a || "function" != typeof fetch ? new Promise((function(e, r) {
                        e(Y())
                    })) : fetch(X, {
                        credentials: "same-origin"
                    }).then((function(e) {
                        if (!e.ok) throw "failed to load wasm binary file at '" + X + "'";
                        return e.arrayBuffer()
                    })).catch((function() {
                        return Y()
                    }))
                }

                function Q() {
                    var r = {
                        a: te
                    };

                    function t(r, t) {
                        var n = r.exports;
                        e.asm = n, j()
                    }

                    function n(e) {
                        t(e.instance)
                    }

                    function i(e) {
                        return J().then((function(e) {
                            return WebAssembly.instantiate(e, r)
                        })).then(e, (function(e) {
                            _("failed to asynchronously prepare wasm: " + e), W(e)
                        }))
                    }
                    if (q(), e.instantiateWasm) try {
                        return e.instantiateWasm(r, t)
                    } catch (e) {
                        return _("Module.instantiateWasm callback failed with error: " + e), !1
                    }
                    return function() {
                        if (b || "function" != typeof WebAssembly.instantiateStreaming || $(X) || "function" != typeof fetch) return i(n);
                        fetch(X, {
                            credentials: "same-origin"
                        }).then((function(e) {
                            return WebAssembly.instantiateStreaming(e, r).then(n, (function(e) {
                                _("wasm streaming compile failed: " + e), _("falling back to ArrayBuffer instantiation"), i(n)
                            }))
                        }))
                    }(), {}
                }

                function ee(e, r, t) {
                    A.copyWithin(e, r, r + t)
                }

                function re(e) {
                    return !1
                }
                $(X) || (X = h(X)), B.push({
                    func: function() {
                        se()
                    }
                });
                var te = {
                        a: ee,
                        b: re,
                        memory: g,
                        table: S
                    },
                    ne = Q();
                e.asm = ne;
                var ie, se = e.___wasm_call_ctors = function() {
                    return (se = e.___wasm_call_ctors = e.asm.c).apply(null, arguments)
                };

                function le(r) {
                    function t() {
                        ie || (ie = !0, e.calledRun = !0, v || (N(), C(), e.onRuntimeInitialized && e.onRuntimeInitialized(), M()))
                    }
                    r = r || s, k > 0 || (F(), k > 0 || (e.setStatus ? (e.setStatus("Running..."), setTimeout((function() {
                        setTimeout((function() {
                            e.setStatus("")
                        }), 1), t()
                    }), 1)) : t()))
                }
                if (e._blsSetETHmode = function() {
                        return (e._blsSetETHmode = e.asm.d).apply(null, arguments)
                    }, e._blsInit = function() {
                        return (e._blsInit = e.asm.e).apply(null, arguments)
                    }, e._blsSetETHserialization = function() {
                        return (e._blsSetETHserialization = e.asm.f).apply(null, arguments)
                    }, e._blsMalloc = function() {
                        return (e._blsMalloc = e.asm.g).apply(null, arguments)
                    }, e._blsFree = function() {
                        return (e._blsFree = e.asm.h).apply(null, arguments)
                    }, e._blsIdSetInt = function() {
                        return (e._blsIdSetInt = e.asm.i).apply(null, arguments)
                    }, e._blsSecretKeySetLittleEndian = function() {
                        return (e._blsSecretKeySetLittleEndian = e.asm.j).apply(null, arguments)
                    }, e._blsSecretKeySetLittleEndianMod = function() {
                        return (e._blsSecretKeySetLittleEndianMod = e.asm.k).apply(null, arguments)
                    }, e._blsGetPublicKey = function() {
                        return (e._blsGetPublicKey = e.asm.l).apply(null, arguments)
                    }, e._blsHashToSignature = function() {
                        return (e._blsHashToSignature = e.asm.m).apply(null, arguments)
                    }, e._blsSign = function() {
                        return (e._blsSign = e.asm.n).apply(null, arguments)
                    }, e._blsVerify = function() {
                        return (e._blsVerify = e.asm.o).apply(null, arguments)
                    }, e._blsMultiVerify = function() {
                        return (e._blsMultiVerify = e.asm.p).apply(null, arguments)
                    }, e._blsAggregateSignature = function() {
                        return (e._blsAggregateSignature = e.asm.q).apply(null, arguments)
                    }, e._blsSignatureAdd = function() {
                        return (e._blsSignatureAdd = e.asm.r).apply(null, arguments)
                    }, e._blsPublicKeyAdd = function() {
                        return (e._blsPublicKeyAdd = e.asm.s).apply(null, arguments)
                    }, e._blsFastAggregateVerify = function() {
                        return (e._blsFastAggregateVerify = e.asm.t).apply(null, arguments)
                    }, e._blsAggregateVerifyNoCheck = function() {
                        return (e._blsAggregateVerifyNoCheck = e.asm.u).apply(null, arguments)
                    }, e._blsIdSerialize = function() {
                        return (e._blsIdSerialize = e.asm.v).apply(null, arguments)
                    }, e._blsSecretKeySerialize = function() {
                        return (e._blsSecretKeySerialize = e.asm.w).apply(null, arguments)
                    }, e._blsPublicKeySerialize = function() {
                        return (e._blsPublicKeySerialize = e.asm.x).apply(null, arguments)
                    }, e._blsSignatureSerialize = function() {
                        return (e._blsSignatureSerialize = e.asm.y).apply(null, arguments)
                    }, e._blsIdDeserialize = function() {
                        return (e._blsIdDeserialize = e.asm.z).apply(null, arguments)
                    }, e._blsSecretKeyDeserialize = function() {
                        return (e._blsSecretKeyDeserialize = e.asm.A).apply(null, arguments)
                    }, e._blsPublicKeyDeserialize = function() {
                        return (e._blsPublicKeyDeserialize = e.asm.B).apply(null, arguments)
                    }, e._blsSignatureDeserialize = function() {
                        return (e._blsSignatureDeserialize = e.asm.C).apply(null, arguments)
                    }, e._blsIdIsEqual = function() {
                        return (e._blsIdIsEqual = e.asm.D).apply(null, arguments)
                    }, e._blsSecretKeyIsEqual = function() {
                        return (e._blsSecretKeyIsEqual = e.asm.E).apply(null, arguments)
                    }, e._blsPublicKeyIsEqual = function() {
                        return (e._blsPublicKeyIsEqual = e.asm.F).apply(null, arguments)
                    }, e._blsSignatureIsEqual = function() {
                        return (e._blsSignatureIsEqual = e.asm.G).apply(null, arguments)
                    }, e._blsIdIsZero = function() {
                        return (e._blsIdIsZero = e.asm.H).apply(null, arguments)
                    }, e._blsSecretKeyIsZero = function() {
                        return (e._blsSecretKeyIsZero = e.asm.I).apply(null, arguments)
                    }, e._blsPublicKeyIsZero = function() {
                        return (e._blsPublicKeyIsZero = e.asm.J).apply(null, arguments)
                    }, e._blsSignatureIsZero = function() {
                        return (e._blsSignatureIsZero = e.asm.K).apply(null, arguments)
                    }, e._blsSecretKeyShare = function() {
                        return (e._blsSecretKeyShare = e.asm.L).apply(null, arguments)
                    }, e._blsPublicKeyShare = function() {
                        return (e._blsPublicKeyShare = e.asm.M).apply(null, arguments)
                    }, e._blsSecretKeyRecover = function() {
                        return (e._blsSecretKeyRecover = e.asm.N).apply(null, arguments)
                    }, e._blsPublicKeyRecover = function() {
                        return (e._blsPublicKeyRecover = e.asm.O).apply(null, arguments)
                    }, e._blsSignatureRecover = function() {
                        return (e._blsSignatureRecover = e.asm.P).apply(null, arguments)
                    }, e._blsSecretKeyAdd = function() {
                        return (e._blsSecretKeyAdd = e.asm.Q).apply(null, arguments)
                    }, e._blsSignatureVerifyOrder = function() {
                        return (e._blsSignatureVerifyOrder = e.asm.R).apply(null, arguments)
                    }, e._blsPublicKeyVerifyOrder = function() {
                        return (e._blsPublicKeyVerifyOrder = e.asm.S).apply(null, arguments)
                    }, e._blsSignatureIsValidOrder = function() {
                        return (e._blsSignatureIsValidOrder = e.asm.T).apply(null, arguments)
                    }, e._blsPublicKeyIsValidOrder = function() {
                        return (e._blsPublicKeyIsValidOrder = e.asm.U).apply(null, arguments)
                    }, e._blsVerifyAggregatedHashes = function() {
                        return (e._blsVerifyAggregatedHashes = e.asm.V).apply(null, arguments)
                    }, e._blsSignHash = function() {
                        return (e._blsSignHash = e.asm.W).apply(null, arguments)
                    }, e._blsPublicKeySerializeUncompressed = function() {
                        return (e._blsPublicKeySerializeUncompressed = e.asm.X).apply(null, arguments)
                    }, e._blsSignatureSerializeUncompressed = function() {
                        return (e._blsSignatureSerializeUncompressed = e.asm.Y).apply(null, arguments)
                    }, e._blsPublicKeyDeserializeUncompressed = function() {
                        return (e._blsPublicKeyDeserializeUncompressed = e.asm.Z).apply(null, arguments)
                    }, e._blsSignatureDeserializeUncompressed = function() {
                        return (e._blsSignatureDeserializeUncompressed = e.asm._).apply(null, arguments)
                    }, e._blsVerifyPairing = function() {
                        return (e._blsVerifyPairing = e.asm.$).apply(null, arguments)
                    }, e._blsVerifyHash = function() {
                        return (e._blsVerifyHash = e.asm.aa).apply(null, arguments)
                    }, e._blsSecretKeySub = function() {
                        return (e._blsSecretKeySub = e.asm.ba).apply(null, arguments)
                    }, e._blsPublicKeySub = function() {
                        return (e._blsPublicKeySub = e.asm.ca).apply(null, arguments)
                    }, e._blsSignatureSub = function() {
                        return (e._blsSignatureSub = e.asm.da).apply(null, arguments)
                    }, e._blsGetOpUnitSize = function() {
                        return (e._blsGetOpUnitSize = e.asm.ea).apply(null, arguments)
                    }, e._blsGetCurveOrder = function() {
                        return (e._blsGetCurveOrder = e.asm.fa).apply(null, arguments)
                    }, e._blsGetFieldOrder = function() {
                        return (e._blsGetFieldOrder = e.asm.ga).apply(null, arguments)
                    }, e._blsGetSerializedSecretKeyByteSize = function() {
                        return (e._blsGetSerializedSecretKeyByteSize = e.asm.ha).apply(null, arguments)
                    }, e._blsGetFrByteSize = function() {
                        return (e._blsGetFrByteSize = e.asm.ia).apply(null, arguments)
                    }, e._blsGetSerializedPublicKeyByteSize = function() {
                        return (e._blsGetSerializedPublicKeyByteSize = e.asm.ja).apply(null, arguments)
                    }, e._blsGetG1ByteSize = function() {
                        return (e._blsGetG1ByteSize = e.asm.ka).apply(null, arguments)
                    }, e._blsGetSerializedSignatureByteSize = function() {
                        return (e._blsGetSerializedSignatureByteSize = e.asm.la).apply(null, arguments)
                    }, e._blsGetGeneratorOfPublicKey = function() {
                        return (e._blsGetGeneratorOfPublicKey = e.asm.ma).apply(null, arguments)
                    }, e._blsIdSetDecStr = function() {
                        return (e._blsIdSetDecStr = e.asm.na).apply(null, arguments)
                    }, e._blsIdSetHexStr = function() {
                        return (e._blsIdSetHexStr = e.asm.oa).apply(null, arguments)
                    }, e._blsIdSetLittleEndian = function() {
                        return (e._blsIdSetLittleEndian = e.asm.pa).apply(null, arguments)
                    }, e._blsIdGetDecStr = function() {
                        return (e._blsIdGetDecStr = e.asm.qa).apply(null, arguments)
                    }, e._blsIdGetHexStr = function() {
                        return (e._blsIdGetHexStr = e.asm.ra).apply(null, arguments)
                    }, e._blsHashToSecretKey = function() {
                        return (e._blsHashToSecretKey = e.asm.sa).apply(null, arguments)
                    }, e._blsGetPop = function() {
                        return (e._blsGetPop = e.asm.ta).apply(null, arguments)
                    }, e._blsVerifyPop = function() {
                        return (e._blsVerifyPop = e.asm.ua).apply(null, arguments)
                    }, e._blsIdGetLittleEndian = function() {
                        return (e._blsIdGetLittleEndian = e.asm.va).apply(null, arguments)
                    }, e._blsSecretKeySetDecStr = function() {
                        return (e._blsSecretKeySetDecStr = e.asm.wa).apply(null, arguments)
                    }, e._blsSecretKeySetHexStr = function() {
                        return (e._blsSecretKeySetHexStr = e.asm.xa).apply(null, arguments)
                    }, e._blsSecretKeyGetLittleEndian = function() {
                        return (e._blsSecretKeyGetLittleEndian = e.asm.ya).apply(null, arguments)
                    }, e._blsSecretKeyGetDecStr = function() {
                        return (e._blsSecretKeyGetDecStr = e.asm.za).apply(null, arguments)
                    }, e._blsSecretKeyGetHexStr = function() {
                        return (e._blsSecretKeyGetHexStr = e.asm.Aa).apply(null, arguments)
                    }, e._blsPublicKeySetHexStr = function() {
                        return (e._blsPublicKeySetHexStr = e.asm.Ba).apply(null, arguments)
                    }, e._blsPublicKeyGetHexStr = function() {
                        return (e._blsPublicKeyGetHexStr = e.asm.Ca).apply(null, arguments)
                    }, e._blsSignatureSetHexStr = function() {
                        return (e._blsSignatureSetHexStr = e.asm.Da).apply(null, arguments)
                    }, e._blsSignatureGetHexStr = function() {
                        return (e._blsSignatureGetHexStr = e.asm.Ea).apply(null, arguments)
                    }, e._blsDHKeyExchange = function() {
                        return (e._blsDHKeyExchange = e.asm.Fa).apply(null, arguments)
                    }, e._blsMultiAggregateSignature = function() {
                        return (e._blsMultiAggregateSignature = e.asm.Ga).apply(null, arguments)
                    }, e._blsMultiAggregatePublicKey = function() {
                        return (e._blsMultiAggregatePublicKey = e.asm.Ha).apply(null, arguments)
                    }, e.dynCall_vi = function() {
                        return (e.dynCall_vi = e.asm.Ia).apply(null, arguments)
                    }, e.asm = ne, e.then = function(r) {
                        if (ie) r(e);
                        else {
                            var t = e.onRuntimeInitialized;
                            e.onRuntimeInitialized = function() {
                                t && t(), r(e)
                            }
                        }
                        return e
                    }, V = function e() {
                        ie || le(), ie || (V = e)
                    }, e.run = le, e.preInit)
                    for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); e.preInit.length > 0;) e.preInit.pop()();
                return le(), e
            });
            e.exports = i
        },
        9030: function(e, r, t) {
            "use strict";
            e.exports = {
                account: t(9031),
                transaction: t(9039)
            }
        },
        9031: function(e, r, t) {
            "use strict";
            var n = t(2),
                i = n(t(551)),
                s = n(t(552)),
                l = n(t(2363)),
                a = n(t(462)),
                o = n(t(463)),
                u = t(9032).derivePath,
                c = t(24),
                f = t(550),
                d = t(322),
                p = t(555),
                y = t(9034),
                h = t(9035),
                b = t(9036),
                g = t(9038),
                m = g.ERD,
                _ = g.MNEMONIC_LEN,
                S = g.HD_PREFIX,
                v = function() {
                    function e() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        (0, a.default)(this, e), this.privateKey = null, this.publicKey = null, r && (t ? this.loadFromKeyFile(r, t) : console.warn("empty password provided for the keyfile"))
                    }
                    var r;
                    return (0, o.default)(e, [{
                        key: "loadFromKeyFile",
                        value: function(e, r) {
                            var t = e.crypto.kdfparams,
                                n = y.generateDerivedKey(Buffer.from(r), Buffer.from(t.salt, "hex"), t.n, t.r, t.p, t.dklen),
                                i = Buffer.from(e.crypto.ciphertext, "hex");
                            if (c.createHmac("sha256", n.slice(16, 32)).update(i).digest().toString("hex") !== e.crypto.mac) throw new Error("MAC mismatch, possibly wrong password");
                            for (var s = c.createDecipheriv(e.crypto.cipher, n.slice(0, 16), Buffer.from(e.crypto.cipherparams.iv, "hex")), l = Buffer.concat([s.update(i), s.final()]); l.length < 32;) {
                                var a = Buffer.from([0]);
                                l = Buffer.concat([a, l])
                            }
                            return this.loadFromPrivateKey(l), this
                        }
                    }, {
                        key: "generateKeyFile",
                        value: function(e) {
                            if (this.publicKey && this.privateKey) {
                                var r = c.randomBytes(32),
                                    t = {
                                        dklen: 32,
                                        salt: r.toString("hex"),
                                        n: 4096,
                                        r: 8,
                                        p: 1
                                    },
                                    n = c.randomBytes(16),
                                    i = y.generateDerivedKey(Buffer.from(e), r, t.n, t.r, t.p, t.dklen),
                                    s = c.createCipheriv("aes-128-ctr", i.slice(0, 16), n),
                                    l = Buffer.concat([s.update(this.privateKey), s.final()]),
                                    a = c.createHmac("sha256", i.slice(16, 32)).update(l).digest();
                                return {
                                    version: 4,
                                    id: f({
                                        random: c.randomBytes(16)
                                    }),
                                    address: this.publicKeyAsString(),
                                    bech32: this.address(),
                                    crypto: {
                                        ciphertext: l.toString("hex"),
                                        cipherparams: {
                                            iv: n.toString("hex")
                                        },
                                        cipher: "aes-128-ctr",
                                        kdf: "scrypt",
                                        kdfparams: t,
                                        mac: a.toString("hex")
                                    }
                                }
                            }
                            console.warn("Account is not initialised")
                        }
                    }, {
                        key: "generateKeyFileFromPrivateKey",
                        value: function(e, r) {
                            return this.loadFromSeed(e), this.generateKeyFile(r)
                        }
                    }, {
                        key: "loadFromPrivateKey",
                        value: function(e) {
                            this.privateKey = e, this.publicKey = h.generatePublicKey(e)
                        }
                    }, {
                        key: "loadFromSeed",
                        value: function(e) {
                            var r = h.generatePairFromSeed(e),
                                t = (0, l.default)(r, 2),
                                n = t[0],
                                i = t[1];
                            this.publicKey = n, this.privateKey = i
                        }
                    }, {
                        key: "loadFromHexPrivateKey",
                        value: function(e) {
                            var r = Buffer.from(e, "hex");
                            this.loadFromPrivateKey(r)
                        }
                    }, {
                        key: "publicKeyAsString",
                        value: function() {
                            return Buffer.from(this.publicKey).toString("hex")
                        }
                    }, {
                        key: "address",
                        value: function() {
                            var e = d.toWords(Buffer.from(this.publicKey));
                            return d.encode(m, e)
                        }
                    }, {
                        key: "hexPublicKeyFromAddress",
                        value: function(e) {
                            var r = d.decode(e, 256);
                            return Buffer.from(d.fromWords(r.words)).toString("hex")
                        }
                    }, {
                        key: "addressFromHexPublicKey",
                        value: function(e) {
                            var r = d.toWords(Buffer.from(e, "hex"));
                            return d.encode(m, r)
                        }
                    }, {
                        key: "privateKeyAsString",
                        value: function() {
                            return Buffer.from(this.privateKey).toString("hex")
                        }
                    }, {
                        key: "initNewKeyPair",
                        value: function() {
                            var e = h.keyPair(),
                                r = (0, l.default)(e, 2),
                                t = r[0],
                                n = r[1];
                            return this.publicKey = t, this.privateKey = n, [this.publicKey, this.privateKey]
                        }
                    }, {
                        key: "initNewAccountFromPassword",
                        value: function(e) {
                            return this.initNewKeyPair(), this.generateKeyFile(e)
                        }
                    }, {
                        key: "generateMnemonic",
                        value: function() {
                            return p.generateMnemonic(_)
                        }
                    }, {
                        key: "privateKeyFromMnemonic",
                        value: function(e) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                            if (!p.validateMnemonic(e)) throw new Error("wrong mnemonic format");
                            var n = p.mnemonicToSeedSync(e, t),
                                i = u("".concat(S, "/").concat(r, "'"), n),
                                s = i.key;
                            return s.toString("hex")
                        }
                    }, {
                        key: "loadFromMnemonic",
                        value: function(e) {
                            var r = this.privateKeyFromMnemonic(e);
                            return this.loadFromSeed(Buffer.from(r, "hex"))
                        }
                    }, {
                        key: "sign",
                        value: function(e) {
                            if (this.privateKey) {
                                var r = h.sign(e, this.privateKey);
                                return Buffer.from(r).toString("hex")
                            }
                            console.warn("account is not initialized, cannot sign message")
                        }
                    }, {
                        key: "initBLS",
                        value: (r = (0, s.default)(i.default.mark((function e() {
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", b.init());
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "generateBLSKeypair",
                        value: function(e) {
                            return b.generatePairFromSeed(e)
                        }
                    }, {
                        key: "computeBLSSig",
                        value: function(e, r) {
                            return b.sign(e, r)
                        }
                    }]), e
                }();
            e.exports = v
        },
        9032: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.derivePath = r.isValidPath = r.getPublicKey = r.CKDPriv = r.getMasterKeyFromSeed = void 0;
            const n = t(320),
                i = t(73),
                s = t(9033);
            r.getMasterKeyFromSeed = e => {
                const r = n("sha512", "ed25519 seed").update(Buffer.from(e, "hex")).digest();
                return {
                    key: r.slice(0, 32),
                    chainCode: r.slice(32)
                }
            }, r.CKDPriv = ({
                key: e,
                chainCode: r
            }, t) => {
                const i = Buffer.allocUnsafe(4);
                i.writeUInt32BE(t, 0);
                const s = Buffer.concat([Buffer.alloc(1, 0), e, i]),
                    l = n("sha512", r).update(s).digest();
                return {
                    key: l.slice(0, 32),
                    chainCode: l.slice(32)
                }
            }, r.getPublicKey = (e, r = !0) => {
                const t = i.sign.keyPair.fromSeed(e).secretKey.subarray(32),
                    n = Buffer.alloc(1, 0);
                return r ? Buffer.concat([n, Buffer.from(t)]) : Buffer.from(t)
            }, r.isValidPath = e => !!s.pathRegex.test(e) && !e.split("/").slice(1).map(s.replaceDerive).some(isNaN), r.derivePath = (e, t, n = 2147483648) => {
                if (!r.isValidPath(e)) throw new Error("Invalid derivation path");
                const {
                    key: i,
                    chainCode: l
                } = r.getMasterKeyFromSeed(t);
                return e.split("/").slice(1).map(s.replaceDerive).map(e => parseInt(e, 10)).reduce((e, t) => r.CKDPriv(e, t + n), {
                    key: i,
                    chainCode: l
                })
            }
        },
        9033: function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.replaceDerive = r.pathRegex = void 0, r.pathRegex = new RegExp("^m(\\/[0-9]+')+$"), r.replaceDerive = e => e.replace("'", "")
        },
        9034: function(e, r, t) {
            "use strict";
            var n = t(5830);
            e.exports = {
                generateDerivedKey: function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4096,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
                        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                        l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 32;
                    return n(e, r, t, i, s, l)
                }
            }
        },
        9035: function(e, r, t) {
            "use strict";
            var n = t(73);
            e.exports = {
                keyPair: function(e) {
                    var r = n.sign.keyPair();
                    return [r.publicKey, r.secretKey]
                },
                sign: function(e, r) {
                    var t = n.sign(e, r);
                    return t.slice(0, t.length - e.length)
                },
                generatePublicKey: function(e) {
                    return n.sign.keyPair.fromSecretKey(e).publicKey
                },
                generatePairFromSeed: function(e) {
                    e = Uint8Array.from(e);
                    var r = n.sign.keyPair.fromSeed(e);
                    return [r.publicKey, r.secretKey]
                }
            }
        },
        9036: function(e, r, t) {
            "use strict";
            var n = t(2),
                i = n(t(551)),
                s = n(t(552)),
                l = t(7170),
                a = function() {
                    var e = (0, s.default)(i.default.mark((function e() {
                        return i.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l.init(l.BLS12_381);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            e.exports = {
                generatePairFromSeed: function(e) {
                    var r = new l.SecretKey;
                    r.setLittleEndian(Uint8Array.from(Buffer.from(e, "hex")));
                    var t = r.getPublicKey();
                    return {
                        publicKey: Buffer.from(t.serialize()).toString("hex"),
                        privateKey: Buffer.from(r.serialize()).toString("hex")
                    }
                },
                sign: function(e, r) {
                    var t = new l.SecretKey;
                    t.setLittleEndian(Uint8Array.from(Buffer.from(r, "hex")));
                    var n = Uint8Array.from(Buffer.from(e, "hex"));
                    return Buffer.from(t.sign(n).serialize()).toString("hex")
                },
                init: a
            }
        },
        9037: function(e, r, t) {
            var n = {
                "./bls.js": 7170,
                "./bls_c.js": 7171
            };

            function i(e) {
                var r = s(e);
                return t(r)
            }

            function s(e) {
                if (!t.o(n, e)) {
                    var r = new Error("Cannot find module '" + e + "'");
                    throw r.code = "MODULE_NOT_FOUND", r
                }
                return n[e]
            }
            i.keys = function() {
                return Object.keys(n)
            }, i.resolve = s, e.exports = i, i.id = 9037
        },
        9038: function(e, r, t) {
            "use strict";
            var n = "".concat("m/44'/508'/0'/0'", "/0'");
            e.exports = {
                HD_PREFIX: "m/44'/508'/0'/0'",
                HD_PATH: n,
                MNEMONIC_LEN: 256,
                ERD: "erd",
                ACC_TYPE_WEB: "web",
                ACC_TYPE_LEDGER: "ledger"
            }
        },
        9039: function(e, r, t) {
            "use strict";
            var n = t(2),
                i = n(t(462)),
                s = n(t(463)),
                l = t(322),
                a = t(9040),
                o = function() {
                    function e(r) {
                        var t = r.nonce,
                            n = void 0 === t ? 0 : t,
                            s = r.from,
                            l = void 0 === s ? "" : s,
                            a = r.to,
                            o = void 0 === a ? "" : a,
                            u = r.senderUsername,
                            c = void 0 === u ? "" : u,
                            f = r.receiverUsername,
                            d = void 0 === f ? "" : f,
                            p = r.value,
                            y = void 0 === p ? "" : p,
                            h = r.gasPrice,
                            b = void 0 === h ? "" : h,
                            g = r.gasLimit,
                            m = void 0 === g ? "" : g,
                            _ = r.data,
                            S = void 0 === _ ? "" : _,
                            v = r.chainID,
                            w = void 0 === v ? "" : v,
                            K = r.version,
                            A = void 0 === K ? 0 : K;
                        (0, i.default)(this, e), e.validateAddresses([l, o]), this.nonce = n, this.sender = l, this.receiver = o, this.senderUsername = c, this.receiverUsername = d, this.value = y, this.gasPrice = b, this.gasLimit = m, this.data = S, this.chainID = w, this.version = A, this.signature = ""
                    }
                    return (0, s.default)(e, [{
                        key: "prepareForSigning",
                        value: function() {
                            var e = {
                                nonce: this.nonce,
                                value: this.value,
                                receiver: this.receiver,
                                sender: this.sender
                            };
                            this.senderUsername && (e.senderUsername = this.senderUsername), this.receiverUsername && (e.receiverUsername = this.receiverUsername), this.gasPrice && (e.gasPrice = this.gasPrice), this.gasLimit && (e.gasLimit = this.gasLimit), this.data && (e.data = Buffer.from(this.data).toString("base64")), this.chainID && (e.chainID = this.chainID), this.version && (e.version = this.version);
                            var r = JSON.stringify(e);
                            return Buffer.from(r)
                        }
                    }, {
                        key: "prepareForNode",
                        value: function() {
                            return {
                                nonce: this.nonce,
                                value: this.value,
                                receiver: this.receiver,
                                sender: this.sender,
                                senderUsername: this.senderUsername,
                                receiverUsername: this.receiverUsername,
                                gasPrice: this.gasPrice,
                                gasLimit: this.gasLimit,
                                data: Buffer.from(this.data).toString("base64"),
                                chainID: this.chainID,
                                version: this.version,
                                signature: this.signature
                            }
                        }
                    }, {
                        key: "computeFee",
                        value: function(e) {
                            var r = e.minGasLimit,
                                t = e.gasPerDataByte,
                                n = e.gasPriceModifier,
                                i = r + Buffer.from(this.data).length * t,
                                s = parseInt(this.gasLimit),
                                l = parseInt(this.gasPrice);
                            if (i > s) throw new Error("Not enough gas provided ".concat(s));
                            var o = new a(l),
                                u = new a(i).multipliedBy(o);
                            if (i === s) return u;
                            var c = new a(s - i),
                                f = o.multipliedBy(new a(n)),
                                d = c.multipliedBy(f);
                            return u.plus(d)
                        }
                    }], [{
                        key: "validateAddresses",
                        value: function(e) {
                            var r = !0,
                                t = !1,
                                n = void 0;
                            try {
                                for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done); r = !0) {
                                    var a = i.value;
                                    try {
                                        l.decode(a)
                                    } catch (e) {
                                        throw new Error("invalid bech32 address")
                                    }
                                }
                            } catch (e) {
                                t = !0, n = e
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (t) throw n
                                }
                            }
                        }
                    }]), e
                }();
            e.exports = o
        },
        9040: function(e, r, t) {
            var n;
            ! function(i) {
                "use strict";
                var s, l = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    a = Math.ceil,
                    o = Math.floor,
                    u = "[BigNumber Error] ",
                    c = u + "Number primitive has more than 15 significant digits: ",
                    f = 1e14,
                    d = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    p = 1e9;

                function y(e) {
                    var r = 0 | e;
                    return e > 0 || e === r ? r : r - 1
                }

                function h(e) {
                    for (var r, t, n = 1, i = e.length, s = e[0] + ""; n < i;) {
                        for (t = 14 - (r = e[n++] + "").length; t--; r = "0" + r);
                        s += r
                    }
                    for (i = s.length; 48 === s.charCodeAt(--i););
                    return s.slice(0, i + 1 || 1)
                }

                function b(e, r) {
                    var t, n, i = e.c,
                        s = r.c,
                        l = e.s,
                        a = r.s,
                        o = e.e,
                        u = r.e;
                    if (!l || !a) return null;
                    if (t = i && !i[0], n = s && !s[0], t || n) return t ? n ? 0 : -a : l;
                    if (l != a) return l;
                    if (t = l < 0, n = o == u, !i || !s) return n ? 0 : !i ^ t ? 1 : -1;
                    if (!n) return o > u ^ t ? 1 : -1;
                    for (a = (o = i.length) < (u = s.length) ? o : u, l = 0; l < a; l++)
                        if (i[l] != s[l]) return i[l] > s[l] ^ t ? 1 : -1;
                    return o == u ? 0 : o > u ^ t ? 1 : -1
                }

                function g(e, r, t, n) {
                    if (e < r || e > t || e !== o(e)) throw Error(u + (n || "Argument") + ("number" == typeof e ? e < r || e > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function m(e) {
                    var r = e.c.length - 1;
                    return y(e.e / 14) == r && e.c[r] % 2 != 0
                }

                function _(e, r) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r
                }

                function S(e, r, t) {
                    var n, i;
                    if (r < 0) {
                        for (i = t + "."; ++r; i += t);
                        e = i + e
                    } else if (++r > (n = e.length)) {
                        for (i = t, r -= n; --r; i += t);
                        e += i
                    } else r < n && (e = e.slice(0, r) + "." + e.slice(r));
                    return e
                }(s = function e(r) {
                    var t, n, i, s, v, w, K, A, E, P = G.prototype = {
                            constructor: G,
                            toString: null,
                            valueOf: null
                        },
                        I = new G(1),
                        x = 20,
                        z = 4,
                        D = -7,
                        H = 21,
                        O = -1e7,
                        B = 1e7,
                        R = !1,
                        U = 1,
                        F = 0,
                        N = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: " ",
                            suffix: ""
                        },
                        C = "0123456789abcdefghijklmnopqrstuvwxyz",
                        M = !0;

                    function G(e, r) {
                        var t, s, a, u, f, d, p, y, h = this;
                        if (!(h instanceof G)) return new G(e, r);
                        if (null == r) {
                            if (e && !0 === e._isBigNumber) return h.s = e.s, void(!e.c || e.e > B ? h.c = h.e = null : e.e < O ? h.c = [h.e = 0] : (h.e = e.e, h.c = e.c.slice()));
                            if ((d = "number" == typeof e) && 0 * e == 0) {
                                if (h.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (u = 0, f = e; f >= 10; f /= 10, u++);
                                    return void(u > B ? h.c = h.e = null : (h.e = u, h.c = [e]))
                                }
                                y = String(e)
                            } else {
                                if (!l.test(y = String(e))) return i(h, y, d);
                                h.s = 45 == y.charCodeAt(0) ? (y = y.slice(1), -1) : 1
                            }(u = y.indexOf(".")) > -1 && (y = y.replace(".", "")), (f = y.search(/e/i)) > 0 ? (u < 0 && (u = f), u += +y.slice(f + 1), y = y.substring(0, f)) : u < 0 && (u = y.length)
                        } else {
                            if (g(r, 2, C.length, "Base"), 10 == r && M) return V(h = new G(e), x + h.e + 1, z);
                            if (y = String(e), d = "number" == typeof e) {
                                if (0 * e != 0) return i(h, y, d, r);
                                if (h.s = 1 / e < 0 ? (y = y.slice(1), -1) : 1, G.DEBUG && y.replace(/^0\.0*|\./, "").length > 15) throw Error(c + e)
                            } else h.s = 45 === y.charCodeAt(0) ? (y = y.slice(1), -1) : 1;
                            for (t = C.slice(0, r), u = f = 0, p = y.length; f < p; f++)
                                if (t.indexOf(s = y.charAt(f)) < 0) {
                                    if ("." == s) {
                                        if (f > u) {
                                            u = p;
                                            continue
                                        }
                                    } else if (!a && (y == y.toUpperCase() && (y = y.toLowerCase()) || y == y.toLowerCase() && (y = y.toUpperCase()))) {
                                        a = !0, f = -1, u = 0;
                                        continue
                                    }
                                    return i(h, String(e), d, r)
                                } d = !1, (u = (y = n(y, r, 10, h.s)).indexOf(".")) > -1 ? y = y.replace(".", "") : u = y.length
                        }
                        for (f = 0; 48 === y.charCodeAt(f); f++);
                        for (p = y.length; 48 === y.charCodeAt(--p););
                        if (y = y.slice(f, ++p)) {
                            if (p -= f, d && G.DEBUG && p > 15 && (e > 9007199254740991 || e !== o(e))) throw Error(c + h.s * e);
                            if ((u = u - f - 1) > B) h.c = h.e = null;
                            else if (u < O) h.c = [h.e = 0];
                            else {
                                if (h.e = u, h.c = [], f = (u + 1) % 14, u < 0 && (f += 14), f < p) {
                                    for (f && h.c.push(+y.slice(0, f)), p -= 14; f < p;) h.c.push(+y.slice(f, f += 14));
                                    f = 14 - (y = y.slice(f)).length
                                } else f -= p;
                                for (; f--; y += "0");
                                h.c.push(+y)
                            }
                        } else h.c = [h.e = 0]
                    }

                    function L(e, r, t, n) {
                        var i, s, l, a, o;
                        if (null == t ? t = z : g(t, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], l = e.e, null == r) o = h(e.c), o = 1 == n || 2 == n && (l <= D || l >= H) ? _(o, l) : S(o, l, "0");
                        else if (s = (e = V(new G(e), r, t)).e, a = (o = h(e.c)).length, 1 == n || 2 == n && (r <= s || s <= D)) {
                            for (; a < r; o += "0", a++);
                            o = _(o, s)
                        } else if (r -= l, o = S(o, s, "0"), s + 1 > a) {
                            if (--r > 0)
                                for (o += "."; r--; o += "0");
                        } else if ((r += s - a) > 0)
                            for (s + 1 == a && (o += "."); r--; o += "0");
                        return e.s < 0 && i ? "-" + o : o
                    }

                    function k(e, r) {
                        for (var t, n = 1, i = new G(e[0]); n < e.length; n++) {
                            if (!(t = new G(e[n])).s) {
                                i = t;
                                break
                            }
                            r.call(i, t) && (i = t)
                        }
                        return i
                    }

                    function T(e, r, t) {
                        for (var n = 1, i = r.length; !r[--i]; r.pop());
                        for (i = r[0]; i >= 10; i /= 10, n++);
                        return (t = n + 14 * t - 1) > B ? e.c = e.e = null : t < O ? e.c = [e.e = 0] : (e.e = t, e.c = r), e
                    }

                    function V(e, r, t, n) {
                        var i, s, l, u, c, p, y, h = e.c,
                            b = d;
                        if (h) {
                            e: {
                                for (i = 1, u = h[0]; u >= 10; u /= 10, i++);
                                if ((s = r - i) < 0) s += 14,
                                l = r,
                                y = (c = h[p = 0]) / b[i - l - 1] % 10 | 0;
                                else if ((p = a((s + 1) / 14)) >= h.length) {
                                    if (!n) break e;
                                    for (; h.length <= p; h.push(0));
                                    c = y = 0, i = 1, l = (s %= 14) - 14 + 1
                                } else {
                                    for (c = u = h[p], i = 1; u >= 10; u /= 10, i++);
                                    y = (l = (s %= 14) - 14 + i) < 0 ? 0 : c / b[i - l - 1] % 10 | 0
                                }
                                if (n = n || r < 0 || null != h[p + 1] || (l < 0 ? c : c % b[i - l - 1]), n = t < 4 ? (y || n) && (0 == t || t == (e.s < 0 ? 3 : 2)) : y > 5 || 5 == y && (4 == t || n || 6 == t && (s > 0 ? l > 0 ? c / b[i - l] : 0 : h[p - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !h[0]) return h.length = 0,
                                n ? (r -= e.e + 1, h[0] = b[(14 - r % 14) % 14], e.e = -r || 0) : h[0] = e.e = 0,
                                e;
                                if (0 == s ? (h.length = p, u = 1, p--) : (h.length = p + 1, u = b[14 - s], h[p] = l > 0 ? o(c / b[i - l] % b[l]) * u : 0), n)
                                    for (;;) {
                                        if (0 == p) {
                                            for (s = 1, l = h[0]; l >= 10; l /= 10, s++);
                                            for (l = h[0] += u, u = 1; l >= 10; l /= 10, u++);
                                            s != u && (e.e++, h[0] == f && (h[0] = 1));
                                            break
                                        }
                                        if (h[p] += u, h[p] != f) break;
                                        h[p--] = 0, u = 1
                                    }
                                for (s = h.length; 0 === h[--s]; h.pop());
                            }
                            e.e > B ? e.c = e.e = null : e.e < O && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function q(e) {
                        var r, t = e.e;
                        return null === t ? e.toString() : (r = h(e.c), r = t <= D || t >= H ? _(r, t) : S(r, t, "0"), e.s < 0 ? "-" + r : r)
                    }
                    return G.clone = e, G.ROUND_UP = 0, G.ROUND_DOWN = 1, G.ROUND_CEIL = 2, G.ROUND_FLOOR = 3, G.ROUND_HALF_UP = 4, G.ROUND_HALF_DOWN = 5, G.ROUND_HALF_EVEN = 6, G.ROUND_HALF_CEIL = 7, G.ROUND_HALF_FLOOR = 8, G.EUCLID = 9, G.config = G.set = function(e) {
                        var r, t;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(u + "Object expected: " + e);
                            if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (g(t = e[r], 0, p, r), x = t), e.hasOwnProperty(r = "ROUNDING_MODE") && (g(t = e[r], 0, 8, r), z = t), e.hasOwnProperty(r = "EXPONENTIAL_AT") && ((t = e[r]) && t.pop ? (g(t[0], -p, 0, r), g(t[1], 0, p, r), D = t[0], H = t[1]) : (g(t, -p, p, r), D = -(H = t < 0 ? -t : t))), e.hasOwnProperty(r = "RANGE"))
                                if ((t = e[r]) && t.pop) g(t[0], -p, -1, r), g(t[1], 1, p, r), O = t[0], B = t[1];
                                else {
                                    if (g(t, -p, p, r), !t) throw Error(u + r + " cannot be zero: " + t);
                                    O = -(B = t < 0 ? -t : t)
                                } if (e.hasOwnProperty(r = "CRYPTO")) {
                                if ((t = e[r]) !== !!t) throw Error(u + r + " not true or false: " + t);
                                if (t) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw R = !t, Error(u + "crypto unavailable");
                                    R = t
                                } else R = t
                            }
                            if (e.hasOwnProperty(r = "MODULO_MODE") && (g(t = e[r], 0, 9, r), U = t), e.hasOwnProperty(r = "POW_PRECISION") && (g(t = e[r], 0, p, r), F = t), e.hasOwnProperty(r = "FORMAT")) {
                                if ("object" != typeof(t = e[r])) throw Error(u + r + " not an object: " + t);
                                N = t
                            }
                            if (e.hasOwnProperty(r = "ALPHABET")) {
                                if ("string" != typeof(t = e[r]) || /^.?$|[+\-.\s]|(.).*\1/.test(t)) throw Error(u + r + " invalid: " + t);
                                M = "0123456789" == t.slice(0, 10), C = t
                            }
                        }
                        return {
                            DECIMAL_PLACES: x,
                            ROUNDING_MODE: z,
                            EXPONENTIAL_AT: [D, H],
                            RANGE: [O, B],
                            CRYPTO: R,
                            MODULO_MODE: U,
                            POW_PRECISION: F,
                            FORMAT: N,
                            ALPHABET: C
                        }
                    }, G.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!G.DEBUG) return !0;
                        var r, t, n = e.c,
                            i = e.e,
                            s = e.s;
                        e: if ("[object Array]" == {}.toString.call(n)) {
                            if ((1 === s || -1 === s) && i >= -p && i <= p && i === o(i)) {
                                if (0 === n[0]) {
                                    if (0 === i && 1 === n.length) return !0;
                                    break e
                                }
                                if ((r = (i + 1) % 14) < 1 && (r += 14), String(n[0]).length == r) {
                                    for (r = 0; r < n.length; r++)
                                        if ((t = n[r]) < 0 || t >= f || t !== o(t)) break e;
                                    if (0 !== t) return !0
                                }
                            }
                        } else if (null === n && null === i && (null === s || 1 === s || -1 === s)) return !0;
                        throw Error(u + "Invalid BigNumber: " + e)
                    }, G.maximum = G.max = function() {
                        return k(arguments, P.lt)
                    }, G.minimum = G.min = function() {
                        return k(arguments, P.gt)
                    }, G.random = (s = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return o(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var r, t, n, i, l, c = 0,
                            f = [],
                            y = new G(I);
                        if (null == e ? e = x : g(e, 0, p), i = a(e / 14), R)
                            if (crypto.getRandomValues) {
                                for (r = crypto.getRandomValues(new Uint32Array(i *= 2)); c < i;)(l = 131072 * r[c] + (r[c + 1] >>> 11)) >= 9e15 ? (t = crypto.getRandomValues(new Uint32Array(2)), r[c] = t[0], r[c + 1] = t[1]) : (f.push(l % 1e14), c += 2);
                                c = i / 2
                            } else {
                                if (!crypto.randomBytes) throw R = !1, Error(u + "crypto unavailable");
                                for (r = crypto.randomBytes(i *= 7); c < i;)(l = 281474976710656 * (31 & r[c]) + 1099511627776 * r[c + 1] + 4294967296 * r[c + 2] + 16777216 * r[c + 3] + (r[c + 4] << 16) + (r[c + 5] << 8) + r[c + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, c) : (f.push(l % 1e14), c += 7);
                                c = i / 7
                            } if (!R)
                            for (; c < i;)(l = s()) < 9e15 && (f[c++] = l % 1e14);
                        for (e %= 14, (i = f[--c]) && e && (l = d[14 - e], f[c] = o(i / l) * l); 0 === f[c]; f.pop(), c--);
                        if (c < 0) f = [n = 0];
                        else {
                            for (n = -1; 0 === f[0]; f.splice(0, 1), n -= 14);
                            for (c = 1, l = f[0]; l >= 10; l /= 10, c++);
                            c < 14 && (n -= 14 - c)
                        }
                        return y.e = n, y.c = f, y
                    }), G.sum = function() {
                        for (var e = 1, r = arguments, t = new G(r[0]); e < r.length;) t = t.plus(r[e++]);
                        return t
                    }, n = function() {
                        function e(e, r, t, n) {
                            for (var i, s, l = [0], a = 0, o = e.length; a < o;) {
                                for (s = l.length; s--; l[s] *= r);
                                for (l[0] += n.indexOf(e.charAt(a++)), i = 0; i < l.length; i++) l[i] > t - 1 && (null == l[i + 1] && (l[i + 1] = 0), l[i + 1] += l[i] / t | 0, l[i] %= t)
                            }
                            return l.reverse()
                        }
                        return function(r, n, i, s, l) {
                            var a, o, u, c, f, d, p, y, b = r.indexOf("."),
                                g = x,
                                m = z;
                            for (b >= 0 && (c = F, F = 0, r = r.replace(".", ""), d = (y = new G(n)).pow(r.length - b), F = c, y.c = e(S(h(d.c), d.e, "0"), 10, i, "0123456789"), y.e = y.c.length), u = c = (p = e(r, n, i, l ? (a = C, "0123456789") : (a = "0123456789", C))).length; 0 == p[--c]; p.pop());
                            if (!p[0]) return a.charAt(0);
                            if (b < 0 ? --u : (d.c = p, d.e = u, d.s = s, p = (d = t(d, y, g, m, i)).c, f = d.r, u = d.e), b = p[o = u + g + 1], c = i / 2, f = f || o < 0 || null != p[o + 1], f = m < 4 ? (null != b || f) && (0 == m || m == (d.s < 0 ? 3 : 2)) : b > c || b == c && (4 == m || f || 6 == m && 1 & p[o - 1] || m == (d.s < 0 ? 8 : 7)), o < 1 || !p[0]) r = f ? S(a.charAt(1), -g, a.charAt(0)) : a.charAt(0);
                            else {
                                if (p.length = o, f)
                                    for (--i; ++p[--o] > i;) p[o] = 0, o || (++u, p = [1].concat(p));
                                for (c = p.length; !p[--c];);
                                for (b = 0, r = ""; b <= c; r += a.charAt(p[b++]));
                                r = S(r, u, a.charAt(0))
                            }
                            return r
                        }
                    }(), t = function() {
                        function e(e, r, t) {
                            var n, i, s, l, a = 0,
                                o = e.length,
                                u = r % 1e7,
                                c = r / 1e7 | 0;
                            for (e = e.slice(); o--;) a = ((i = u * (s = e[o] % 1e7) + (n = c * s + (l = e[o] / 1e7 | 0) * u) % 1e7 * 1e7 + a) / t | 0) + (n / 1e7 | 0) + c * l, e[o] = i % t;
                            return a && (e = [a].concat(e)), e
                        }

                        function r(e, r, t, n) {
                            var i, s;
                            if (t != n) s = t > n ? 1 : -1;
                            else
                                for (i = s = 0; i < t; i++)
                                    if (e[i] != r[i]) {
                                        s = e[i] > r[i] ? 1 : -1;
                                        break
                                    } return s
                        }

                        function t(e, r, t, n) {
                            for (var i = 0; t--;) e[t] -= i, i = e[t] < r[t] ? 1 : 0, e[t] = i * n + e[t] - r[t];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(n, i, s, l, a) {
                            var u, c, d, p, h, b, g, m, _, S, v, w, K, A, E, P, I, x = n.s == i.s ? 1 : -1,
                                z = n.c,
                                D = i.c;
                            if (!(z && z[0] && D && D[0])) return new G(n.s && i.s && (z ? !D || z[0] != D[0] : D) ? z && 0 == z[0] || !D ? 0 * x : x / 0 : NaN);
                            for (_ = (m = new G(x)).c = [], x = s + (c = n.e - i.e) + 1, a || (a = f, c = y(n.e / 14) - y(i.e / 14), x = x / 14 | 0), d = 0; D[d] == (z[d] || 0); d++);
                            if (D[d] > (z[d] || 0) && c--, x < 0) _.push(1), p = !0;
                            else {
                                for (A = z.length, P = D.length, d = 0, x += 2, (h = o(a / (D[0] + 1))) > 1 && (D = e(D, h, a), z = e(z, h, a), P = D.length, A = z.length), K = P, v = (S = z.slice(0, P)).length; v < P; S[v++] = 0);
                                I = D.slice(), I = [0].concat(I), E = D[0], D[1] >= a / 2 && E++;
                                do {
                                    if (h = 0, (u = r(D, S, P, v)) < 0) {
                                        if (w = S[0], P != v && (w = w * a + (S[1] || 0)), (h = o(w / E)) > 1)
                                            for (h >= a && (h = a - 1), g = (b = e(D, h, a)).length, v = S.length; 1 == r(b, S, g, v);) h--, t(b, P < g ? I : D, g, a), g = b.length, u = 1;
                                        else 0 == h && (u = h = 1), g = (b = D.slice()).length;
                                        if (g < v && (b = [0].concat(b)), t(S, b, v, a), v = S.length, -1 == u)
                                            for (; r(D, S, P, v) < 1;) h++, t(S, P < v ? I : D, v, a), v = S.length
                                    } else 0 === u && (h++, S = [0]);
                                    _[d++] = h, S[0] ? S[v++] = z[K] || 0 : (S = [z[K]], v = 1)
                                } while ((K++ < A || null != S[0]) && x--);
                                p = null != S[0], _[0] || _.splice(0, 1)
                            }
                            if (a == f) {
                                for (d = 1, x = _[0]; x >= 10; x /= 10, d++);
                                V(m, s + (m.e = d + 14 * c - 1) + 1, l, p)
                            } else m.e = c, m.r = +p;
                            return m
                        }
                    }(), v = /^(-?)0([xbo])(?=\w[\w.]*$)/i, w = /^([^.]+)\.$/, K = /^\.([^.]+)$/, A = /^-?(Infinity|NaN)$/, E = /^\s*\+(?=[\w.])|^\s+|\s+$/g, i = function(e, r, t, n) {
                        var i, s = t ? r : r.replace(E, "");
                        if (A.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                        else {
                            if (!t && (s = s.replace(v, (function(e, r, t) {
                                    return i = "x" == (t = t.toLowerCase()) ? 16 : "b" == t ? 2 : 8, n && n != i ? e : r
                                })), n && (i = n, s = s.replace(w, "$1").replace(K, "0.$1")), r != s)) return new G(s, i);
                            if (G.DEBUG) throw Error(u + "Not a" + (n ? " base " + n : "") + " number: " + r);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, P.absoluteValue = P.abs = function() {
                        var e = new G(this);
                        return e.s < 0 && (e.s = 1), e
                    }, P.comparedTo = function(e, r) {
                        return b(this, new G(e, r))
                    }, P.decimalPlaces = P.dp = function(e, r) {
                        var t, n, i, s = this;
                        if (null != e) return g(e, 0, p), null == r ? r = z : g(r, 0, 8), V(new G(s), e + s.e + 1, r);
                        if (!(t = s.c)) return null;
                        if (n = 14 * ((i = t.length - 1) - y(this.e / 14)), i = t[i])
                            for (; i % 10 == 0; i /= 10, n--);
                        return n < 0 && (n = 0), n
                    }, P.dividedBy = P.div = function(e, r) {
                        return t(this, new G(e, r), x, z)
                    }, P.dividedToIntegerBy = P.idiv = function(e, r) {
                        return t(this, new G(e, r), 0, 1)
                    }, P.exponentiatedBy = P.pow = function(e, r) {
                        var t, n, i, s, l, c, f, d, p = this;
                        if ((e = new G(e)).c && !e.isInteger()) throw Error(u + "Exponent not an integer: " + q(e));
                        if (null != r && (r = new G(r)), l = e.e > 14, !p.c || !p.c[0] || 1 == p.c[0] && !p.e && 1 == p.c.length || !e.c || !e.c[0]) return d = new G(Math.pow(+q(p), l ? e.s * (2 - m(e)) : +q(e))), r ? d.mod(r) : d;
                        if (c = e.s < 0, r) {
                            if (r.c ? !r.c[0] : !r.s) return new G(NaN);
                            (n = !c && p.isInteger() && r.isInteger()) && (p = p.mod(r))
                        } else {
                            if (e.e > 9 && (p.e > 0 || p.e < -1 || (0 == p.e ? p.c[0] > 1 || l && p.c[1] >= 24e7 : p.c[0] < 8e13 || l && p.c[0] <= 9999975e7))) return s = p.s < 0 && m(e) ? -0 : 0, p.e > -1 && (s = 1 / s), new G(c ? 1 / s : s);
                            F && (s = a(F / 14 + 2))
                        }
                        for (l ? (t = new G(.5), c && (e.s = 1), f = m(e)) : f = (i = Math.abs(+q(e))) % 2, d = new G(I);;) {
                            if (f) {
                                if (!(d = d.times(p)).c) break;
                                s ? d.c.length > s && (d.c.length = s) : n && (d = d.mod(r))
                            }
                            if (i) {
                                if (0 === (i = o(i / 2))) break;
                                f = i % 2
                            } else if (V(e = e.times(t), e.e + 1, 1), e.e > 14) f = m(e);
                            else {
                                if (0 === (i = +q(e))) break;
                                f = i % 2
                            }
                            p = p.times(p), s ? p.c && p.c.length > s && (p.c.length = s) : n && (p = p.mod(r))
                        }
                        return n ? d : (c && (d = I.div(d)), r ? d.mod(r) : s ? V(d, F, z, void 0) : d)
                    }, P.integerValue = function(e) {
                        var r = new G(this);
                        return null == e ? e = z : g(e, 0, 8), V(r, r.e + 1, e)
                    }, P.isEqualTo = P.eq = function(e, r) {
                        return 0 === b(this, new G(e, r))
                    }, P.isFinite = function() {
                        return !!this.c
                    }, P.isGreaterThan = P.gt = function(e, r) {
                        return b(this, new G(e, r)) > 0
                    }, P.isGreaterThanOrEqualTo = P.gte = function(e, r) {
                        return 1 === (r = b(this, new G(e, r))) || 0 === r
                    }, P.isInteger = function() {
                        return !!this.c && y(this.e / 14) > this.c.length - 2
                    }, P.isLessThan = P.lt = function(e, r) {
                        return b(this, new G(e, r)) < 0
                    }, P.isLessThanOrEqualTo = P.lte = function(e, r) {
                        return -1 === (r = b(this, new G(e, r))) || 0 === r
                    }, P.isNaN = function() {
                        return !this.s
                    }, P.isNegative = function() {
                        return this.s < 0
                    }, P.isPositive = function() {
                        return this.s > 0
                    }, P.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, P.minus = function(e, r) {
                        var t, n, i, s, l = this,
                            a = l.s;
                        if (r = (e = new G(e, r)).s, !a || !r) return new G(NaN);
                        if (a != r) return e.s = -r, l.plus(e);
                        var o = l.e / 14,
                            u = e.e / 14,
                            c = l.c,
                            d = e.c;
                        if (!o || !u) {
                            if (!c || !d) return c ? (e.s = -r, e) : new G(d ? l : NaN);
                            if (!c[0] || !d[0]) return d[0] ? (e.s = -r, e) : new G(c[0] ? l : 3 == z ? -0 : 0)
                        }
                        if (o = y(o), u = y(u), c = c.slice(), a = o - u) {
                            for ((s = a < 0) ? (a = -a, i = c) : (u = o, i = d), i.reverse(), r = a; r--; i.push(0));
                            i.reverse()
                        } else
                            for (n = (s = (a = c.length) < (r = d.length)) ? a : r, a = r = 0; r < n; r++)
                                if (c[r] != d[r]) {
                                    s = c[r] < d[r];
                                    break
                                } if (s && (i = c, c = d, d = i, e.s = -e.s), (r = (n = d.length) - (t = c.length)) > 0)
                            for (; r--; c[t++] = 0);
                        for (r = f - 1; n > a;) {
                            if (c[--n] < d[n]) {
                                for (t = n; t && !c[--t]; c[t] = r);
                                --c[t], c[n] += f
                            }
                            c[n] -= d[n]
                        }
                        for (; 0 == c[0]; c.splice(0, 1), --u);
                        return c[0] ? T(e, c, u) : (e.s = 3 == z ? -1 : 1, e.c = [e.e = 0], e)
                    }, P.modulo = P.mod = function(e, r) {
                        var n, i, s = this;
                        return e = new G(e, r), !s.c || !e.s || e.c && !e.c[0] ? new G(NaN) : !e.c || s.c && !s.c[0] ? new G(s) : (9 == U ? (i = e.s, e.s = 1, n = t(s, e, 0, 3), e.s = i, n.s *= i) : n = t(s, e, 0, U), (e = s.minus(n.times(e))).c[0] || 1 != U || (e.s = s.s), e)
                    }, P.multipliedBy = P.times = function(e, r) {
                        var t, n, i, s, l, a, o, u, c, d, p, h, b, g, m = this,
                            _ = m.c,
                            S = (e = new G(e, r)).c;
                        if (!(_ && S && _[0] && S[0])) return !m.s || !e.s || _ && !_[0] && !S || S && !S[0] && !_ ? e.c = e.e = e.s = null : (e.s *= m.s, _ && S ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (n = y(m.e / 14) + y(e.e / 14), e.s *= m.s, (o = _.length) < (d = S.length) && (b = _, _ = S, S = b, i = o, o = d, d = i), i = o + d, b = []; i--; b.push(0));
                        for (g = f, 1e7, i = d; --i >= 0;) {
                            for (t = 0, p = S[i] % 1e7, h = S[i] / 1e7 | 0, s = i + (l = o); s > i;) t = ((u = p * (u = _[--l] % 1e7) + (a = h * u + (c = _[l] / 1e7 | 0) * p) % 1e7 * 1e7 + b[s] + t) / g | 0) + (a / 1e7 | 0) + h * c, b[s--] = u % g;
                            b[s] = t
                        }
                        return t ? ++n : b.splice(0, 1), T(e, b, n)
                    }, P.negated = function() {
                        var e = new G(this);
                        return e.s = -e.s || null, e
                    }, P.plus = function(e, r) {
                        var t, n = this,
                            i = n.s;
                        if (r = (e = new G(e, r)).s, !i || !r) return new G(NaN);
                        if (i != r) return e.s = -r, n.minus(e);
                        var s = n.e / 14,
                            l = e.e / 14,
                            a = n.c,
                            o = e.c;
                        if (!s || !l) {
                            if (!a || !o) return new G(i / 0);
                            if (!a[0] || !o[0]) return o[0] ? e : new G(a[0] ? n : 0 * i)
                        }
                        if (s = y(s), l = y(l), a = a.slice(), i = s - l) {
                            for (i > 0 ? (l = s, t = o) : (i = -i, t = a), t.reverse(); i--; t.push(0));
                            t.reverse()
                        }
                        for ((i = a.length) - (r = o.length) < 0 && (t = o, o = a, a = t, r = i), i = 0; r;) i = (a[--r] = a[r] + o[r] + i) / f | 0, a[r] = f === a[r] ? 0 : a[r] % f;
                        return i && (a = [i].concat(a), ++l), T(e, a, l)
                    }, P.precision = P.sd = function(e, r) {
                        var t, n, i, s = this;
                        if (null != e && e !== !!e) return g(e, 1, p), null == r ? r = z : g(r, 0, 8), V(new G(s), e, r);
                        if (!(t = s.c)) return null;
                        if (n = 14 * (i = t.length - 1) + 1, i = t[i]) {
                            for (; i % 10 == 0; i /= 10, n--);
                            for (i = t[0]; i >= 10; i /= 10, n++);
                        }
                        return e && s.e + 1 > n && (n = s.e + 1), n
                    }, P.shiftedBy = function(e) {
                        return g(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                    }, P.squareRoot = P.sqrt = function() {
                        var e, r, n, i, s, l = this,
                            a = l.c,
                            o = l.s,
                            u = l.e,
                            c = x + 4,
                            f = new G("0.5");
                        if (1 !== o || !a || !a[0]) return new G(!o || o < 0 && (!a || a[0]) ? NaN : a ? l : 1 / 0);
                        if (0 == (o = Math.sqrt(+q(l))) || o == 1 / 0 ? (((r = h(a)).length + u) % 2 == 0 && (r += "0"), o = Math.sqrt(+r), u = y((u + 1) / 2) - (u < 0 || u % 2), n = new G(r = o == 1 / 0 ? "5e" + u : (r = o.toExponential()).slice(0, r.indexOf("e") + 1) + u)) : n = new G(o + ""), n.c[0])
                            for ((o = (u = n.e) + c) < 3 && (o = 0);;)
                                if (s = n, n = f.times(s.plus(t(l, s, c, 1))), h(s.c).slice(0, o) === (r = h(n.c)).slice(0, o)) {
                                    if (n.e < u && --o, "9999" != (r = r.slice(o - 3, o + 1)) && (i || "4999" != r)) {
                                        +r && (+r.slice(1) || "5" != r.charAt(0)) || (V(n, n.e + x + 2, 1), e = !n.times(n).eq(l));
                                        break
                                    }
                                    if (!i && (V(s, s.e + x + 2, 0), s.times(s).eq(l))) {
                                        n = s;
                                        break
                                    }
                                    c += 4, o += 4, i = 1
                                } return V(n, n.e + x + 1, z, e)
                    }, P.toExponential = function(e, r) {
                        return null != e && (g(e, 0, p), e++), L(this, e, r, 1)
                    }, P.toFixed = function(e, r) {
                        return null != e && (g(e, 0, p), e = e + this.e + 1), L(this, e, r)
                    }, P.toFormat = function(e, r, t) {
                        var n, i = this;
                        if (null == t) null != e && r && "object" == typeof r ? (t = r, r = null) : e && "object" == typeof e ? (t = e, e = r = null) : t = N;
                        else if ("object" != typeof t) throw Error(u + "Argument not an object: " + t);
                        if (n = i.toFixed(e, r), i.c) {
                            var s, l = n.split("."),
                                a = +t.groupSize,
                                o = +t.secondaryGroupSize,
                                c = t.groupSeparator || "",
                                f = l[0],
                                d = l[1],
                                p = i.s < 0,
                                y = p ? f.slice(1) : f,
                                h = y.length;
                            if (o && (s = a, a = o, o = s, h -= s), a > 0 && h > 0) {
                                for (s = h % a || a, f = y.substr(0, s); s < h; s += a) f += c + y.substr(s, a);
                                o > 0 && (f += c + y.slice(s)), p && (f = "-" + f)
                            }
                            n = d ? f + (t.decimalSeparator || "") + ((o = +t.fractionGroupSize) ? d.replace(new RegExp("\\d{" + o + "}\\B", "g"), "$&" + (t.fractionGroupSeparator || "")) : d) : f
                        }
                        return (t.prefix || "") + n + (t.suffix || "")
                    }, P.toFraction = function(e) {
                        var r, n, i, s, l, a, o, c, f, p, y, b, g = this,
                            m = g.c;
                        if (null != e && (!(o = new G(e)).isInteger() && (o.c || 1 !== o.s) || o.lt(I))) throw Error(u + "Argument " + (o.isInteger() ? "out of range: " : "not an integer: ") + q(o));
                        if (!m) return new G(g);
                        for (r = new G(I), f = n = new G(I), i = c = new G(I), b = h(m), l = r.e = b.length - g.e - 1, r.c[0] = d[(a = l % 14) < 0 ? 14 + a : a], e = !e || o.comparedTo(r) > 0 ? l > 0 ? r : f : o, a = B, B = 1 / 0, o = new G(b), c.c[0] = 0; p = t(o, r, 0, 1), 1 != (s = n.plus(p.times(i))).comparedTo(e);) n = i, i = s, f = c.plus(p.times(s = f)), c = s, r = o.minus(p.times(s = r)), o = s;
                        return s = t(e.minus(n), i, 0, 1), c = c.plus(s.times(f)), n = n.plus(s.times(i)), c.s = f.s = g.s, y = t(f, i, l *= 2, z).minus(g).abs().comparedTo(t(c, n, l, z).minus(g).abs()) < 1 ? [f, i] : [c, n], B = a, y
                    }, P.toNumber = function() {
                        return +q(this)
                    }, P.toPrecision = function(e, r) {
                        return null != e && g(e, 1, p), L(this, e, r, 2)
                    }, P.toString = function(e) {
                        var r, t = this,
                            i = t.s,
                            s = t.e;
                        return null === s ? i ? (r = "Infinity", i < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = s <= D || s >= H ? _(h(t.c), s) : S(h(t.c), s, "0") : 10 === e && M ? r = S(h((t = V(new G(t), x + s + 1, z)).c), t.e, "0") : (g(e, 2, C.length, "Base"), r = n(S(h(t.c), s, "0"), 10, e, i, !0)), i < 0 && t.c[0] && (r = "-" + r)), r
                    }, P.valueOf = P.toJSON = function() {
                        return q(this)
                    }, P._isBigNumber = !0, null != r && G.set(r), G
                }()).default = s.BigNumber = s, void 0 === (n = function() {
                    return s
                }.call(r, t, r, e)) || (e.exports = n)
            }()
        }
    }
]);