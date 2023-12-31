/*! For license information please see vendors.e76ff8d2e48d3dcea7c8.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [142], {
        1011: function(e, t, r) {
            "use strict";

            function n(e) {
                var t = new Error;
                this.name = t.name = "ValidationError", this.message = t.message = e, this.stack = t.stack
            }
            n.prototype = Object.create(Error.prototype), e.exports = {
                ValidationError: n,
                validate: function(e, t) {
                    if (!e) throw new n(t)
                }
            }
        },
        1140: function(e, t, r) {
            "use strict";
            const n = r(61).BigNumber,
                s = r(433),
                i = r(102),
                o = new n(-1),
                a = new n(10),
                u = new n(2);
            class Tagged {
                constructor(e, t, r) {
                    if (this.tag = e, this.value = t, this.err = r, "number" != typeof this.tag) throw new Error("Invalid tag type (" + typeof this.tag + ")");
                    if (this.tag < 0 || (0 | this.tag) !== this.tag) throw new Error("Tag must be a positive integer: " + this.tag)
                }
                toString() {
                    return `${this.tag}(${JSON.stringify(this.value)})`
                }
                encodeCBOR(e) {
                    return e._pushTag(this.tag), e.pushAny(this.value)
                }
                convert(e) {
                    let t = null != e ? e[this.tag] : void 0;
                    if ("function" != typeof t && (t = Tagged["_tag_" + this.tag], "function" != typeof t)) return this;
                    try {
                        return t.call(Tagged, this.value)
                    } catch (e) {
                        return this.err = e, this
                    }
                }
                static _tag_0(e) {
                    return new Date(e)
                }
                static _tag_1(e) {
                    return new Date(1e3 * e)
                }
                static _tag_2(e) {
                    return s.bufferToBignumber(e)
                }
                static _tag_3(e) {
                    return o.minus(s.bufferToBignumber(e))
                }
                static _tag_4(e) {
                    return a.pow(e[0]).times(e[1])
                }
                static _tag_5(e) {
                    return u.pow(e[0]).times(e[1])
                }
                static _tag_32(e) {
                    return i.parse(e)
                }
                static _tag_35(e) {
                    return new RegExp(e)
                }
            }
            e.exports = Tagged
        },
        153: function(e, t, r) {
            var n = r(21).Buffer,
                s = r(145).Transform,
                i = r(1400).StringDecoder;

            function o(e) {
                s.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
            }
            r(18)(o, s), o.prototype.update = function(e, t, r) {
                "string" == typeof e && (e = n.from(e, t));
                var s = this._update(e);
                return this.hashMode ? this : (r && (s = this._toString(s, r)), s)
            }, o.prototype.setAutoPadding = function() {}, o.prototype.getAuthTag = function() {
                throw new Error("trying to get auth tag in unsupported state")
            }, o.prototype.setAuthTag = function() {
                throw new Error("trying to set auth tag in unsupported state")
            }, o.prototype.setAAD = function() {
                throw new Error("trying to set aad in unsupported state")
            }, o.prototype._transform = function(e, t, r) {
                var n;
                try {
                    this.hashMode ? this._update(e) : this.push(this._update(e))
                } catch (e) {
                    n = e
                } finally {
                    r(n)
                }
            }, o.prototype._flush = function(e) {
                var t;
                try {
                    this.push(this.__final())
                } catch (e) {
                    t = e
                }
                e(t)
            }, o.prototype._finalOrDigest = function(e) {
                var t = this.__final() || n.alloc(0);
                return e && (t = this._toString(t, e, !0)), t
            }, o.prototype._toString = function(e, t, r) {
                if (this._decoder || (this._decoder = new i(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings");
                var n = this._decoder.write(e);
                return r && (n += this._decoder.end()), n
            }, e.exports = o
        },
        1711: function(e, t) {
            var r = Array.prototype.slice;

            function n(e) {
                var t = this,
                    n = r.call(arguments, 1);
                return new Promise((function(r, i) {
                    if ("function" == typeof e && (e = e.apply(t, n)), !e || "function" != typeof e.next) return r(e);

                    function o(t) {
                        var r;
                        try {
                            r = e.next(t)
                        } catch (e) {
                            return i(e)
                        }
                        c(r)
                    }

                    function a(t) {
                        var r;
                        try {
                            r = e.throw(t)
                        } catch (e) {
                            return i(e)
                        }
                        c(r)
                    }

                    function c(e) {
                        if (e.done) return r(e.value);
                        var n = s.call(t, e.value);
                        return n && u(n) ? n.then(o, a) : a(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "' + String(e.value) + '"'))
                    }
                    o()
                }))
            }

            function s(e) {
                return e ? u(e) ? e : function(e) {
                    var t = e.constructor;
                    return !!t && ("GeneratorFunction" === t.name || "GeneratorFunction" === t.displayName || c(t.prototype))
                }(e) || c(e) ? n.call(this, e) : "function" == typeof e ? i.call(this, e) : Array.isArray(e) ? o.call(this, e) : Object == e.constructor ? a.call(this, e) : e : e
            }

            function i(e) {
                var t = this;
                return new Promise((function(n, s) {
                    e.call(t, (function(e, t) {
                        if (e) return s(e);
                        arguments.length > 2 && (t = r.call(arguments, 1)), n(t)
                    }))
                }))
            }

            function o(e) {
                return Promise.all(e.map(s, this))
            }

            function a(e) {
                for (var t = new e.constructor, r = Object.keys(e), n = [], i = 0; i < r.length; i++) {
                    var o = r[i],
                        a = s.call(this, e[o]);
                    a && u(a) ? c(a, o) : t[o] = e[o]
                }
                return Promise.all(n).then((function() {
                    return t
                }));

                function c(e, r) {
                    t[r] = void 0, n.push(e.then((function(e) {
                        t[r] = e
                    })))
                }
            }

            function u(e) {
                return "function" == typeof e.then
            }

            function c(e) {
                return "function" == typeof e.next && "function" == typeof e.throw
            }
            e.exports = n.default = n.co = n, n.wrap = function(e) {
                return t.__generatorFunction__ = e, t;

                function t() {
                    return n.call(this, e.apply(this, arguments))
                }
            }
        },
        1854: function(e, t, r) {
            "use strict";
            const {
                Buffer: n
            } = r(12), s = r(1071), i = r(3513), o = r(3519), a = r(503), u = r(3524), c = r(3525);
            class CID {
                constructor(e, t, r, a) {
                    if (h.isCID(e)) {
                        const t = e;
                        return this.version = t.version, this.codec = t.codec, this.multihash = n.from(t.multihash), void(this.multibaseName = t.multibaseName || (0 === t.version ? "base58btc" : "base32"))
                    }
                    if ("string" == typeof e) {
                        const t = i.isEncoded(e);
                        if (t) {
                            const r = i.decode(e);
                            this.version = parseInt(r.slice(0, 1).toString("hex"), 16), this.codec = o.getCodec(r.slice(1)), this.multihash = o.rmPrefix(r.slice(1)), this.multibaseName = t
                        } else this.version = 0, this.codec = "dag-pb", this.multihash = s.fromB58String(e), this.multibaseName = "base58btc";
                        return CID.validateCID(this), void Object.defineProperty(this, "string", {
                            value: e
                        })
                    }
                    if (n.isBuffer(e)) {
                        const t = e.slice(0, 1),
                            r = parseInt(t.toString("hex"), 16);
                        if (1 === r) {
                            const t = e;
                            this.version = r, this.codec = o.getCodec(t.slice(1)), this.multihash = o.rmPrefix(t.slice(1)), this.multibaseName = "base32"
                        } else this.version = 0, this.codec = "dag-pb", this.multihash = e, this.multibaseName = "base58btc";
                        CID.validateCID(this)
                    } else this.version = e, this.codec = t, this.multihash = r, this.multibaseName = a || (0 === e ? "base58btc" : "base32"), CID.validateCID(this)
                }
                get buffer() {
                    let e = this._buffer;
                    if (!e) {
                        if (0 === this.version) e = this.multihash;
                        else {
                            if (1 !== this.version) throw new Error("unsupported version");
                            e = n.concat([n.from("01", "hex"), o.getCodeVarint(this.codec), this.multihash])
                        }
                        Object.defineProperty(this, "_buffer", {
                            value: e
                        })
                    }
                    return e
                }
                get prefix() {
                    return n.concat([n.from("0" + this.version, "hex"), o.getCodeVarint(this.codec), s.prefix(this.multihash)])
                }
                toV0() {
                    if ("dag-pb" !== this.codec) throw new Error("Cannot convert a non dag-pb CID to CIDv0");
                    const {
                        name: e,
                        length: t
                    } = s.decode(this.multihash);
                    if ("sha2-256" !== e) throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                    if (32 !== t) throw new Error("Cannot convert non 32 byte multihash CID to CIDv0");
                    return new h(0, this.codec, this.multihash)
                }
                toV1() {
                    return new h(1, this.codec, this.multihash)
                }
                toBaseEncodedString(e = this.multibaseName) {
                    if (this.string && e === this.multibaseName) return this.string;
                    let t = null;
                    if (0 === this.version) {
                        if ("base58btc" !== e) throw new Error("not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()");
                        t = s.toB58String(this.multihash)
                    } else {
                        if (1 !== this.version) throw new Error("unsupported version");
                        t = i.encode(e, this.buffer).toString()
                    }
                    return e === this.multibaseName && Object.defineProperty(this, "string", {
                        value: t
                    }), t
                } [Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")"
                }
                toString(e) {
                    return this.toBaseEncodedString(e)
                }
                toJSON() {
                    return {
                        codec: this.codec,
                        version: this.version,
                        hash: this.multihash
                    }
                }
                equals(e) {
                    return this.codec === e.codec && this.version === e.version && this.multihash.equals(e.multihash)
                }
                static validateCID(e) {
                    const t = u.checkCIDComponents(e);
                    if (t) throw new Error(t)
                }
            }
            const h = c(CID, {
                className: "CID",
                symbolName: "@ipld/js-cid/CID"
            });
            h.codecs = a, e.exports = h
        },
        1855: function(e, t, r) {
            "use strict";
            const n = r(470),
                {
                    Buffer: s
                } = r(12);

            function i(e) {
                return parseInt(e.toString("hex"), 16)
            }

            function o(e) {
                let t = e.toString(16);
                return t.length % 2 == 1 && (t = "0" + t), s.from(t, "hex")
            }
            e.exports = {
                numberToBuffer: o,
                bufferToNumber: i,
                varintBufferEncode: function(e) {
                    return s.from(n.encode(i(e)))
                },
                varintBufferDecode: function(e) {
                    return o(n.decode(e))
                },
                varintEncode: function(e) {
                    return s.from(n.encode(e))
                }
            }
        },
        2022: function(e, t, r) {
            "use strict";
            const n = r(145),
                s = r(102),
                i = r(61).BigNumber,
                o = r(525),
                a = (r(1140), r(524), r(433)),
                u = r(355),
                c = u.MT,
                h = u.NUMBYTES,
                l = u.SHIFT32,
                p = u.SYMS,
                f = u.TAG,
                d = u.MT.SIMPLE_FLOAT << 5 | u.NUMBYTES.TWO,
                g = u.MT.SIMPLE_FLOAT << 5 | u.NUMBYTES.FOUR,
                b = u.MT.SIMPLE_FLOAT << 5 | u.NUMBYTES.EIGHT,
                y = u.MT.SIMPLE_FLOAT << 5 | u.SIMPLE.TRUE,
                m = u.MT.SIMPLE_FLOAT << 5 | u.SIMPLE.FALSE,
                v = u.MT.SIMPLE_FLOAT << 5 | u.SIMPLE.UNDEFINED,
                k = u.MT.SIMPLE_FLOAT << 5 | u.SIMPLE.NULL,
                _ = new i("0x20000000000000"),
                w = a.hasBigInt ? BigInt("-1") : -1,
                E = Buffer.from("f97e00", "hex"),
                S = Buffer.from("f9fc00", "hex"),
                I = Buffer.from("f97c00", "hex"),
                A = Buffer.from("f98000", "hex"),
                T = Symbol("CBOR_LOOP_DETECT");
            class Encoder extends n.Transform {
                constructor(e) {
                    (e = e || {}).readableObjectMode = !1, e.writableObjectMode = !0, super(e), this.canonical = e.canonical, this.encodeUndefined = e.encodeUndefined, this.disallowUndefinedKeys = !!e.disallowUndefinedKeys, this.dateType = null != e.dateType ? e.dateType.toLowerCase() : "number", "symbol" == typeof e.detectLoops ? this.detectLoops = e.detectLoops : this.detectLoops = e.detectLoops ? Symbol("CBOR_DETECT") : null, this.semanticTypes = [Array, this._pushArray, Date, this._pushDate, Buffer, this._pushBuffer, Map, this._pushMap, o, this._pushNoFilter, RegExp, this._pushRegexp, Set, this._pushSet, s.Url, this._pushUrl, i, this._pushBigNumber, ArrayBuffer, this._pushUint8Array, Uint8ClampedArray, this._pushUint8Array, Uint8Array, this._pushUint8Array, Uint16Array, this._pushArray, Uint32Array, this._pushArray, Int8Array, this._pushArray, Int16Array, this._pushArray, Int32Array, this._pushArray, Float32Array, this._pushFloatArray, Float64Array, this._pushFloatArray];
                    const t = e.genTypes || [];
                    for (let e = 0, r = t.length; e < r; e += 2) this.addSemanticType(t[e], t[e + 1])
                }
                _transform(e, t, r) {
                    return r(!1 === this.pushAny(e) ? new Error("Push Error") : void 0)
                }
                _flush(e) {
                    return e()
                }
                addSemanticType(e, t) {
                    for (let r = 0, n = this.semanticTypes.length; r < n; r += 2) {
                        if (this.semanticTypes[r] === e) {
                            const e = this.semanticTypes[r + 1];
                            return this.semanticTypes[r + 1] = t, e
                        }
                    }
                    return this.semanticTypes.push(e, t), null
                }
                _pushUInt8(e) {
                    const t = Buffer.allocUnsafe(1);
                    return t.writeUInt8(e), this.push(t)
                }
                _pushUInt16BE(e) {
                    const t = Buffer.allocUnsafe(2);
                    return t.writeUInt16BE(e), this.push(t)
                }
                _pushUInt32BE(e) {
                    const t = Buffer.allocUnsafe(4);
                    return t.writeUInt32BE(e), this.push(t)
                }
                _pushDoubleBE(e) {
                    const t = Buffer.allocUnsafe(8);
                    return t.writeDoubleBE(e), this.push(t)
                }
                _pushNaN() {
                    return this.push(E)
                }
                _pushInfinity(e) {
                    const t = e < 0 ? S : I;
                    return this.push(t)
                }
                _pushFloat(e) {
                    if (this.canonical) {
                        const t = Buffer.allocUnsafe(2);
                        if (a.writeHalf(t, e) && a.parseHalf(t) === e) return this._pushUInt8(d) && this.push(t);
                        const r = Buffer.allocUnsafe(4);
                        if (r.writeFloatBE(e), r.readFloatBE(0) === e) return this._pushUInt8(g) && this.push(r)
                    }
                    return this._pushUInt8(b) && this._pushDoubleBE(e)
                }
                _pushInt(e, t, r) {
                    const n = t << 5;
                    switch (!1) {
                        case !(e < 24):
                            return this._pushUInt8(n | e);
                        case !(e <= 255):
                            return this._pushUInt8(n | h.ONE) && this._pushUInt8(e);
                        case !(e <= 65535):
                            return this._pushUInt8(n | h.TWO) && this._pushUInt16BE(e);
                        case !(e <= 4294967295):
                            return this._pushUInt8(n | h.FOUR) && this._pushUInt32BE(e);
                        case !(e <= Number.MAX_SAFE_INTEGER):
                            return this._pushUInt8(n | h.EIGHT) && this._pushUInt32BE(Math.floor(e / l)) && this._pushUInt32BE(e % l);
                        default:
                            return t === c.NEG_INT ? this._pushFloat(r) : this._pushFloat(e)
                    }
                }
                _pushIntNum(e) {
                    return Object.is(e, -0) ? this.push(A) : e < 0 ? this._pushInt(-e - 1, c.NEG_INT, e) : this._pushInt(e, c.POS_INT)
                }
                _pushNumber(e) {
                    switch (!1) {
                        case !isNaN(e):
                            return this._pushNaN(e);
                        case isFinite(e):
                            return this._pushInfinity(e);
                        case Math.round(e) !== e:
                            return this._pushIntNum(e);
                        default:
                            return this._pushFloat(e)
                    }
                }
                _pushString(e) {
                    const t = Buffer.byteLength(e, "utf8");
                    return this._pushInt(t, c.UTF8_STRING) && this.push(e, "utf8")
                }
                _pushBoolean(e) {
                    return this._pushUInt8(e ? y : m)
                }
                _pushUndefined(e) {
                    switch (typeof this.encodeUndefined) {
                        case "undefined":
                            return this._pushUInt8(v);
                        case "function":
                            return this.pushAny(this.encodeUndefined.call(this, e));
                        case "object":
                            if (Buffer.isBuffer(this.encodeUndefined)) return this.push(this.encodeUndefined)
                    }
                    return this.pushAny(this.encodeUndefined)
                }
                _pushNull(e) {
                    return this._pushUInt8(k)
                }
                _pushArray(e, t) {
                    const r = t.length;
                    if (!e._pushInt(r, c.ARRAY)) return !1;
                    for (let n = 0; n < r; n++)
                        if (!e.pushAny(t[n])) return !1;
                    return !0
                }
                _pushTag(e) {
                    return this._pushInt(e, c.TAG)
                }
                _pushDate(e, t) {
                    switch (e.dateType) {
                        case "string":
                            return e._pushTag(f.DATE_STRING) && e._pushString(t.toISOString());
                        case "int":
                        case "integer":
                            return e._pushTag(f.DATE_EPOCH) && e._pushIntNum(Math.round(t / 1e3));
                        case "float":
                            return e._pushTag(f.DATE_EPOCH) && e._pushFloat(t / 1e3);
                        case "number":
                        default:
                            return e._pushTag(f.DATE_EPOCH) && e.pushAny(t / 1e3)
                    }
                }
                _pushBuffer(e, t) {
                    return e._pushInt(t.length, c.BYTE_STRING) && e.push(t)
                }
                _pushNoFilter(e, t) {
                    return e._pushBuffer(e, t.slice())
                }
                _pushRegexp(e, t) {
                    return e._pushTag(f.REGEXP) && e.pushAny(t.source)
                }
                _pushSet(e, t) {
                    if (!e._pushInt(t.size, c.ARRAY)) return !1;
                    for (const r of t)
                        if (!e.pushAny(r)) return !1;
                    return !0
                }
                _pushUrl(e, t) {
                    return e._pushTag(f.URI) && e.pushAny(t.format())
                }
                _pushBigint(e, t = !1) {
                    let r = f.POS_BIGINT;
                    t ? e < 0 && (e = -e + w, r = f.NEG_BIGINT) : e.isNegative() && (e = e.negated().minus(1), r = f.NEG_BIGINT);
                    let n = e.toString(16);
                    n.length % 2 && (n = "0" + n);
                    const s = Buffer.from(n, "hex");
                    return this._pushTag(r) && this._pushBuffer(this, s)
                }
                _pushBigNumber(e, t) {
                    if (t.isNaN()) return e._pushNaN();
                    if (!t.isFinite()) return e._pushInfinity(t.isNegative() ? -1 / 0 : 1 / 0);
                    if (t.isInteger()) return e._pushBigint(t);
                    if (!e._pushTag(f.DECIMAL_FRAC) || !e._pushInt(2, c.ARRAY)) return !1;
                    const r = t.decimalPlaces(),
                        n = t.times(new i(10).pow(r));
                    return !!e._pushIntNum(-r) && (n.abs().isLessThan(_) ? e._pushIntNum(n.toNumber()) : e._pushBigint(n))
                }
                _pushMap(e, t) {
                    if (!e._pushInt(t.size, c.MAP)) return !1;
                    if (e.canonical) {
                        const r = [];
                        for (const e of t.entries()) r.push(e);
                        r.sort((e, t) => {
                            const r = Encoder.encode(e[0]),
                                n = Encoder.encode(t[0]);
                            return r.compare(n)
                        });
                        for (const [t, n] of r) {
                            if (e.disallowUndefinedKeys && void 0 === t) throw new Error("Invalid Map key: undefined");
                            if (!e.pushAny(t) || !e.pushAny(n)) return !1
                        }
                    } else
                        for (const [r, n] of t) {
                            if (e.disallowUndefinedKeys && void 0 === r) throw new Error("Invalid Map key: undefined");
                            if (!e.pushAny(r) || !e.pushAny(n)) return !1
                        }
                    return !0
                }
                _pushUint8Array(e, t) {
                    return e._pushBuffer(e, Buffer.from(t))
                }
                _pushFloatArray(e, t) {
                    const r = t.length;
                    if (!e._pushInt(r, c.ARRAY)) return !1;
                    for (let n = 0; n < r; n++)
                        if (!e._pushFloat(t[n])) return !1;
                    return !0
                }
                removeLoopDetectors(e) {
                    if (!this.detectLoops || "object" != typeof e || !e) return !1;
                    const t = e[T];
                    if (!t || t !== this.detectLoops) return !1;
                    if (delete e[T], Array.isArray(e))
                        for (const t of e) this.removeLoopDetectors(t);
                    else
                        for (const t in e) this.removeLoopDetectors(e[t]);
                    return !0
                }
                _pushObject(e) {
                    if (!e) return this._pushNull(e);
                    if (this.detectLoops) {
                        if (e[T] === this.detectLoops) throw new Error("Loop detected while CBOR encoding");
                        e[T] = this.detectLoops
                    }
                    const t = e.encodeCBOR;
                    if ("function" == typeof t) return t.call(e, this);
                    for (let t = 0, r = this.semanticTypes.length; t < r; t += 2) {
                        if (e instanceof this.semanticTypes[t]) return this.semanticTypes[t + 1].call(e, this, e)
                    }
                    const r = Object.keys(e),
                        n = {};
                    if (this.canonical && r.sort((e, t) => {
                            const r = n[e] || (n[e] = Encoder.encode(e)),
                                s = n[t] || (n[t] = Encoder.encode(t));
                            return r.compare(s)
                        }), !this._pushInt(r.length, c.MAP)) return !1;
                    let s;
                    for (let t = 0, i = r.length; t < i; t++) {
                        const i = r[t];
                        if (this.canonical && (s = n[i])) {
                            if (!this.push(s)) return !1
                        } else if (!this._pushString(i)) return !1;
                        if (!this.pushAny(e[i])) return !1
                    }
                    return !0
                }
                pushAny(e) {
                    switch (typeof e) {
                        case "number":
                            return this._pushNumber(e);
                        case "bigint":
                            return this._pushBigint(e, !0);
                        case "string":
                            return this._pushString(e);
                        case "boolean":
                            return this._pushBoolean(e);
                        case "undefined":
                            return this._pushUndefined(e);
                        case "object":
                            return this._pushObject(e);
                        case "symbol":
                            switch (e) {
                                case p.NULL:
                                    return this._pushNull(null);
                                case p.UNDEFINED:
                                    return this._pushUndefined(void 0);
                                default:
                                    throw new Error("Unknown symbol: " + e.toString())
                            }
                        default:
                            throw new Error("Unknown type: " + typeof e + ", " + (e ? e.toString() : ""))
                    }
                }
                _pushAny(e) {
                    return this.pushAny(e)
                }
                _encodeAll(e) {
                    const t = new o;
                    this.pipe(t);
                    for (const t of e) void 0 === t ? this._pushUndefined() : null === t ? this._pushNull(null) : this.write(t);
                    return this.end(), t.read()
                }
                static encode() {
                    const e = Array.prototype.slice.apply(arguments);
                    return (new Encoder)._encodeAll(e)
                }
                static encodeCanonical() {
                    const e = Array.prototype.slice.apply(arguments);
                    return new Encoder({
                        canonical: !0
                    })._encodeAll(e)
                }
                static encodeOne(e, t) {
                    return new Encoder(t)._encodeAll([e])
                }
            }
            e.exports = Encoder
        },
        2964: function(e, t, r) {
            "use strict";
            var n = r(2965),
                s = r(2966),
                i = r(2967),
                o = r(1011),
                a = o.validate;
            var u = o.ValidationError,
                c = ["bitcoincash", "bchtest", "bchreg"];

            function h(e) {
                for (var t = new Uint8Array(e.length), r = 0; r < e.length; ++r) t[r] = 31 & e[r].charCodeAt(0);
                return t
            }

            function l(e, t) {
                var r = new Uint8Array(e.length + t.length);
                return r.set(e), r.set(t, e.length), r
            }

            function p(e) {
                for (var t = [656907472481, 522768456162, 0xf33e5fb3c4, 748107326120, 130178868336], r = s(1), n = 0; n < e.length; ++n) {
                    var i = e[n],
                        o = r.shiftRight(35);
                    r = r.and(34359738367).shiftLeft(5).xor(i);
                    for (var a = 0; a < t.length; ++a) o.shiftRight(a).and(1).equals(1) && (r = r.xor(t[a]))
                }
                return r.xor(1)
            }

            function f(e) {
                return e === e.toLowerCase() || e === e.toUpperCase()
            }
            e.exports = {
                encode: function(e, t, r) {
                    a("string" == typeof e && function(e) {
                        return f(e) && -1 !== c.indexOf(e.toLowerCase())
                    }(e), "Invalid prefix: " + e + "."), a("string" == typeof t, "Invalid type: " + t + "."), a(r instanceof Uint8Array, "Invalid hash: " + r + ".");
                    var s, o = l(h(e), new Uint8Array(1)),
                        d = function(e) {
                            switch (e) {
                                case "P2PKH":
                                    return 0;
                                case "P2SH":
                                    return 8;
                                default:
                                    throw new u("Invalid type: " + e + ".")
                            }
                        }(t) + function(e) {
                            switch (8 * e.length) {
                                case 160:
                                    return 0;
                                case 192:
                                    return 1;
                                case 224:
                                    return 2;
                                case 256:
                                    return 3;
                                case 320:
                                    return 4;
                                case 384:
                                    return 5;
                                case 448:
                                    return 6;
                                case 512:
                                    return 7;
                                default:
                                    throw new u("Invalid hash size: " + e.length + ".")
                            }
                        }(r),
                        g = (s = l(new Uint8Array([d]), r), i(s, 8, 5)),
                        b = l(l(o, g), new Uint8Array(8)),
                        y = l(g, function(e) {
                            for (var t = new Uint8Array(8), r = 0; r < 8; ++r) t[7 - r] = e.and(31).toJSNumber(), e = e.shiftRight(5);
                            return t
                        }(p(b)));
                    return e + ":" + n.encode(y)
                },
                decode: function(e) {
                    a("string" == typeof e && f(e), "Invalid address: " + e + ".");
                    var t = e.toLowerCase().split(":");
                    a(2 === t.length, "Missing prefix: " + e + ".");
                    var r = t[0],
                        s = n.decode(t[1]);
                    a(function(e, t) {
                        var r = l(h(e), new Uint8Array(1));
                        return p(l(r, t)).equals(0)
                    }(r, s), "Invalid checksum: " + e + ".");
                    var o, c = (o = s.subarray(0, -8), i(o, 5, 8, !0)),
                        d = c[0],
                        g = c.subarray(1);
                    return a(function(e) {
                        switch (7 & e) {
                            case 0:
                                return 160;
                            case 1:
                                return 192;
                            case 2:
                                return 224;
                            case 3:
                                return 256;
                            case 4:
                                return 320;
                            case 5:
                                return 384;
                            case 6:
                                return 448;
                            case 7:
                                return 512
                        }
                    }(d) === 8 * g.length, "Invalid hash size: " + e + "."), {
                        prefix: r,
                        type: function(e) {
                            switch (120 & e) {
                                case 0:
                                    return "P2PKH";
                                case 8:
                                    return "P2SH";
                                default:
                                    throw new u("Invalid address type in version byte: " + e + ".")
                            }
                        }(d),
                        hash: g
                    }
                },
                ValidationError: u
            }
        },
        2965: function(e, t, r) {
            "use strict";
            var n = r(1011).validate,
                s = {
                    q: 0,
                    p: 1,
                    z: 2,
                    r: 3,
                    y: 4,
                    9: 5,
                    x: 6,
                    8: 7,
                    g: 8,
                    f: 9,
                    2: 10,
                    t: 11,
                    v: 12,
                    d: 13,
                    w: 14,
                    0: 15,
                    s: 16,
                    3: 17,
                    j: 18,
                    n: 19,
                    5: 20,
                    4: 21,
                    k: 22,
                    h: 23,
                    c: 24,
                    e: 25,
                    6: 26,
                    m: 27,
                    u: 28,
                    a: 29,
                    7: 30,
                    l: 31
                };
            e.exports = {
                encode: function(e) {
                    n(e instanceof Uint8Array, "Invalid data: " + e + ".");
                    for (var t = "", r = 0; r < e.length; ++r) {
                        var s = e[r];
                        n(0 <= s && s < 32, "Invalid value: " + s + "."), t += "qpzry9x8gf2tvdw0s3jn54khce6mua7l" [s]
                    }
                    return t
                },
                decode: function(e) {
                    n("string" == typeof e, "Invalid base32-encoded string: " + e + ".");
                    for (var t = new Uint8Array(e.length), r = 0; r < e.length; ++r) {
                        var i = e[r];
                        n(i in s, "Invalid value: " + i + "."), t[r] = s[i]
                    }
                    return t
                }
            }
        },
        2966: function(e, t, r) {
            (function(e) {
                var r, n = function(e) {
                    "use strict";
                    var t = 1e7,
                        r = 9007199254740992,
                        s = c(r),
                        i = Math.log(r);

                    function o(e, t) {
                        return void 0 === e ? o[0] : void 0 !== t ? 10 == +t ? z(e) : L(e, t) : z(e)
                    }

                    function BigInteger(e, t) {
                        this.value = e, this.sign = t, this.isSmall = !1
                    }

                    function a(e) {
                        this.value = e, this.sign = e < 0, this.isSmall = !0
                    }

                    function u(e) {
                        return -r < e && e < r
                    }

                    function c(e) {
                        return e < 1e7 ? [e] : e < 1e14 ? [e % 1e7, Math.floor(e / 1e7)] : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)]
                    }

                    function h(e) {
                        l(e);
                        var r = e.length;
                        if (r < 4 && A(e, s) < 0) switch (r) {
                            case 0:
                                return 0;
                            case 1:
                                return e[0];
                            case 2:
                                return e[0] + e[1] * t;
                            default:
                                return e[0] + (e[1] + e[2] * t) * t
                        }
                        return e
                    }

                    function l(e) {
                        for (var t = e.length; 0 === e[--t];);
                        e.length = t + 1
                    }

                    function p(e) {
                        for (var t = new Array(e), r = -1; ++r < e;) t[r] = 0;
                        return t
                    }

                    function f(e) {
                        return e > 0 ? Math.floor(e) : Math.ceil(e)
                    }

                    function d(e, r) {
                        var n, s, i = e.length,
                            o = r.length,
                            a = new Array(i),
                            u = 0,
                            c = t;
                        for (s = 0; s < o; s++) u = (n = e[s] + r[s] + u) >= c ? 1 : 0, a[s] = n - u * c;
                        for (; s < i;) u = (n = e[s] + u) === c ? 1 : 0, a[s++] = n - u * c;
                        return u > 0 && a.push(u), a
                    }

                    function g(e, t) {
                        return e.length >= t.length ? d(e, t) : d(t, e)
                    }

                    function b(e, r) {
                        var n, s, i = e.length,
                            o = new Array(i),
                            a = t;
                        for (s = 0; s < i; s++) n = e[s] - a + r, r = Math.floor(n / a), o[s] = n - r * a, r += 1;
                        for (; r > 0;) o[s++] = r % a, r = Math.floor(r / a);
                        return o
                    }

                    function y(e, t) {
                        var r, n, s = e.length,
                            i = t.length,
                            o = new Array(s),
                            a = 0;
                        for (r = 0; r < i; r++)(n = e[r] - a - t[r]) < 0 ? (n += 1e7, a = 1) : a = 0, o[r] = n;
                        for (r = i; r < s; r++) {
                            if (!((n = e[r] - a) < 0)) {
                                o[r++] = n;
                                break
                            }
                            n += 1e7, o[r] = n
                        }
                        for (; r < s; r++) o[r] = e[r];
                        return l(o), o
                    }

                    function m(e, t, r) {
                        var n, s, i = e.length,
                            o = new Array(i),
                            u = -t;
                        for (n = 0; n < i; n++) s = e[n] + u, u = Math.floor(s / 1e7), s %= 1e7, o[n] = s < 0 ? s + 1e7 : s;
                        return "number" == typeof(o = h(o)) ? (r && (o = -o), new a(o)) : new BigInteger(o, r)
                    }

                    function v(e, t) {
                        var r, n, s, i, o = e.length,
                            a = t.length,
                            u = p(o + a);
                        for (s = 0; s < o; ++s) {
                            i = e[s];
                            for (var c = 0; c < a; ++c) r = i * t[c] + u[s + c], n = Math.floor(r / 1e7), u[s + c] = r - 1e7 * n, u[s + c + 1] += n
                        }
                        return l(u), u
                    }

                    function k(e, r) {
                        var n, s, i = e.length,
                            o = new Array(i),
                            a = t,
                            u = 0;
                        for (s = 0; s < i; s++) n = e[s] * r + u, u = Math.floor(n / a), o[s] = n - u * a;
                        for (; u > 0;) o[s++] = u % a, u = Math.floor(u / a);
                        return o
                    }

                    function _(e, t) {
                        for (var r = []; t-- > 0;) r.push(0);
                        return r.concat(e)
                    }

                    function w(e, r, n) {
                        return new BigInteger(e < t ? k(r, e) : v(r, c(e)), n)
                    }

                    function E(e) {
                        var t, r, n, s, i = e.length,
                            o = p(i + i);
                        for (n = 0; n < i; n++) {
                            r = 0 - (s = e[n]) * s;
                            for (var a = n; a < i; a++) t = s * e[a] * 2 + o[n + a] + r, r = Math.floor(t / 1e7), o[n + a] = t - 1e7 * r;
                            o[n + i] = r
                        }
                        return l(o), o
                    }

                    function S(e, t) {
                        var r, n, s, i, o = e.length,
                            a = p(o);
                        for (s = 0, r = o - 1; r >= 0; --r) s = (i = 1e7 * s + e[r]) - (n = f(i / t)) * t, a[r] = 0 | n;
                        return [a, 0 | s]
                    }

                    function I(e, r) {
                        var n, s, i = z(r),
                            u = e.value,
                            d = i.value;
                        if (0 === d) throw new Error("Cannot divide by zero");
                        if (e.isSmall) return i.isSmall ? [new a(f(u / d)), new a(u % d)] : [o[0], e];
                        if (i.isSmall) {
                            if (1 === d) return [e, o[0]];
                            if (-1 == d) return [e.negate(), o[0]];
                            var g = Math.abs(d);
                            if (g < t) {
                                s = h((n = S(u, g))[0]);
                                var b = n[1];
                                return e.sign && (b = -b), "number" == typeof s ? (e.sign !== i.sign && (s = -s), [new a(s), new a(b)]) : [new BigInteger(s, e.sign !== i.sign), new a(b)]
                            }
                            d = c(g)
                        }
                        var m = A(u, d);
                        if (-1 === m) return [o[0], e];
                        if (0 === m) return [o[e.sign === i.sign ? 1 : -1], o[0]];
                        s = (n = u.length + d.length <= 200 ? function(e, r) {
                            var n, s, i, o, a, u, c, l = e.length,
                                f = r.length,
                                d = t,
                                g = p(r.length),
                                b = r[f - 1],
                                y = Math.ceil(d / (2 * b)),
                                m = k(e, y),
                                v = k(r, y);
                            for (m.length <= l && m.push(0), v.push(0), b = v[f - 1], s = l - f; s >= 0; s--) {
                                for (n = d - 1, m[s + f] !== b && (n = Math.floor((m[s + f] * d + m[s + f - 1]) / b)), i = 0, o = 0, u = v.length, a = 0; a < u; a++) i += n * v[a], c = Math.floor(i / d), o += m[s + a] - (i - c * d), i = c, o < 0 ? (m[s + a] = o + d, o = -1) : (m[s + a] = o, o = 0);
                                for (; 0 !== o;) {
                                    for (n -= 1, i = 0, a = 0; a < u; a++)(i += m[s + a] - d + v[a]) < 0 ? (m[s + a] = i + d, i = 0) : (m[s + a] = i, i = 1);
                                    o += i
                                }
                                g[s] = n
                            }
                            return m = S(m, y)[0], [h(g), h(m)]
                        }(u, d) : function(e, t) {
                            for (var r, n, s, i, o, a = e.length, u = t.length, c = [], p = []; a;)
                                if (p.unshift(e[--a]), l(p), A(p, t) < 0) c.push(0);
                                else {
                                    s = 1e7 * p[(n = p.length) - 1] + p[n - 2], i = 1e7 * t[u - 1] + t[u - 2], n > u && (s = 1e7 * (s + 1)), r = Math.ceil(s / i);
                                    do {
                                        if (A(o = k(t, r), p) <= 0) break;
                                        r--
                                    } while (r);
                                    c.push(r), p = y(p, o)
                                } return c.reverse(), [h(c), h(p)]
                        }(u, d))[0];
                        var v = e.sign !== i.sign,
                            _ = n[1],
                            w = e.sign;
                        return "number" == typeof s ? (v && (s = -s), s = new a(s)) : s = new BigInteger(s, v), "number" == typeof _ ? (w && (_ = -_), _ = new a(_)) : _ = new BigInteger(_, w), [s, _]
                    }

                    function A(e, t) {
                        if (e.length !== t.length) return e.length > t.length ? 1 : -1;
                        for (var r = e.length - 1; r >= 0; r--)
                            if (e[r] !== t[r]) return e[r] > t[r] ? 1 : -1;
                        return 0
                    }

                    function T(e) {
                        var t = e.abs();
                        return !t.isUnit() && (!!(t.equals(2) || t.equals(3) || t.equals(5)) || !(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0))
                    }

                    function N(e, t) {
                        for (var r, s, i, a = e.prev(), u = a, c = 0; u.isEven();) u = u.divide(2), c++;
                        e: for (s = 0; s < t.length; s++)
                            if (!e.lesser(t[s]) && !(i = n(t[s]).modPow(u, e)).equals(o[1]) && !i.equals(a)) {
                                for (r = c - 1; 0 != r; r--) {
                                    if ((i = i.square().mod(e)).isUnit()) return !1;
                                    if (i.equals(a)) continue e
                                }
                                return !1
                            }
                        return !0
                    }
                    BigInteger.prototype = Object.create(o.prototype), a.prototype = Object.create(o.prototype), BigInteger.prototype.add = function(e) {
                        var t = z(e);
                        if (this.sign !== t.sign) return this.subtract(t.negate());
                        var r = this.value,
                            n = t.value;
                        return t.isSmall ? new BigInteger(b(r, Math.abs(n)), this.sign) : new BigInteger(g(r, n), this.sign)
                    }, BigInteger.prototype.plus = BigInteger.prototype.add, a.prototype.add = function(e) {
                        var t = z(e),
                            r = this.value;
                        if (r < 0 !== t.sign) return this.subtract(t.negate());
                        var n = t.value;
                        if (t.isSmall) {
                            if (u(r + n)) return new a(r + n);
                            n = c(Math.abs(n))
                        }
                        return new BigInteger(b(n, Math.abs(r)), r < 0)
                    }, a.prototype.plus = a.prototype.add, BigInteger.prototype.subtract = function(e) {
                        var t = z(e);
                        if (this.sign !== t.sign) return this.add(t.negate());
                        var r = this.value,
                            n = t.value;
                        return t.isSmall ? m(r, Math.abs(n), this.sign) : function(e, t, r) {
                            var n;
                            return A(e, t) >= 0 ? n = y(e, t) : (n = y(t, e), r = !r), "number" == typeof(n = h(n)) ? (r && (n = -n), new a(n)) : new BigInteger(n, r)
                        }(r, n, this.sign)
                    }, BigInteger.prototype.minus = BigInteger.prototype.subtract, a.prototype.subtract = function(e) {
                        var t = z(e),
                            r = this.value;
                        if (r < 0 !== t.sign) return this.add(t.negate());
                        var n = t.value;
                        return t.isSmall ? new a(r - n) : m(n, Math.abs(r), r >= 0)
                    }, a.prototype.minus = a.prototype.subtract, BigInteger.prototype.negate = function() {
                        return new BigInteger(this.value, !this.sign)
                    }, a.prototype.negate = function() {
                        var e = this.sign,
                            t = new a(-this.value);
                        return t.sign = !e, t
                    }, BigInteger.prototype.abs = function() {
                        return new BigInteger(this.value, !1)
                    }, a.prototype.abs = function() {
                        return new a(Math.abs(this.value))
                    }, BigInteger.prototype.multiply = function(e) {
                        var r, n, s, i = z(e),
                            a = this.value,
                            u = i.value,
                            h = this.sign !== i.sign;
                        if (i.isSmall) {
                            if (0 === u) return o[0];
                            if (1 === u) return this;
                            if (-1 === u) return this.negate();
                            if ((r = Math.abs(u)) < t) return new BigInteger(k(a, r), h);
                            u = c(r)
                        }
                        return n = a.length, s = u.length, new BigInteger(-.012 * n - .012 * s + 15e-6 * n * s > 0 ? function e(t, r) {
                            var n = Math.max(t.length, r.length);
                            if (n <= 30) return v(t, r);
                            n = Math.ceil(n / 2);
                            var s = t.slice(n),
                                i = t.slice(0, n),
                                o = r.slice(n),
                                a = r.slice(0, n),
                                u = e(i, a),
                                c = e(s, o),
                                h = e(g(i, s), g(a, o)),
                                p = g(g(u, _(y(y(h, u), c), n)), _(c, 2 * n));
                            return l(p), p
                        }(a, u) : v(a, u), h)
                    }, BigInteger.prototype.times = BigInteger.prototype.multiply, a.prototype._multiplyBySmall = function(e) {
                        return u(e.value * this.value) ? new a(e.value * this.value) : w(Math.abs(e.value), c(Math.abs(this.value)), this.sign !== e.sign)
                    }, BigInteger.prototype._multiplyBySmall = function(e) {
                        return 0 === e.value ? o[0] : 1 === e.value ? this : -1 === e.value ? this.negate() : w(Math.abs(e.value), this.value, this.sign !== e.sign)
                    }, a.prototype.multiply = function(e) {
                        return z(e)._multiplyBySmall(this)
                    }, a.prototype.times = a.prototype.multiply, BigInteger.prototype.square = function() {
                        return new BigInteger(E(this.value), !1)
                    }, a.prototype.square = function() {
                        var e = this.value * this.value;
                        return u(e) ? new a(e) : new BigInteger(E(c(Math.abs(this.value))), !1)
                    }, BigInteger.prototype.divmod = function(e) {
                        var t = I(this, e);
                        return {
                            quotient: t[0],
                            remainder: t[1]
                        }
                    }, a.prototype.divmod = BigInteger.prototype.divmod, BigInteger.prototype.divide = function(e) {
                        return I(this, e)[0]
                    }, a.prototype.over = a.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide, BigInteger.prototype.mod = function(e) {
                        return I(this, e)[1]
                    }, a.prototype.remainder = a.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod, BigInteger.prototype.pow = function(e) {
                        var t, r, n, s = z(e),
                            i = this.value,
                            c = s.value;
                        if (0 === c) return o[1];
                        if (0 === i) return o[0];
                        if (1 === i) return o[1];
                        if (-1 === i) return s.isEven() ? o[1] : o[-1];
                        if (s.sign) return o[0];
                        if (!s.isSmall) throw new Error("The exponent " + s.toString() + " is too large.");
                        if (this.isSmall && u(t = Math.pow(i, c))) return new a(f(t));
                        for (r = this, n = o[1]; !0 & c && (n = n.times(r), --c), 0 !== c;) c /= 2, r = r.square();
                        return n
                    }, a.prototype.pow = BigInteger.prototype.pow, BigInteger.prototype.modPow = function(e, t) {
                        if (e = z(e), (t = z(t)).isZero()) throw new Error("Cannot take modPow with modulus 0");
                        for (var r = o[1], n = this.mod(t); e.isPositive();) {
                            if (n.isZero()) return o[0];
                            e.isOdd() && (r = r.multiply(n).mod(t)), e = e.divide(2), n = n.square().mod(t)
                        }
                        return r
                    }, a.prototype.modPow = BigInteger.prototype.modPow, BigInteger.prototype.compareAbs = function(e) {
                        var t = z(e),
                            r = this.value,
                            n = t.value;
                        return t.isSmall ? 1 : A(r, n)
                    }, a.prototype.compareAbs = function(e) {
                        var t = z(e),
                            r = Math.abs(this.value),
                            n = t.value;
                        return t.isSmall ? r === (n = Math.abs(n)) ? 0 : r > n ? 1 : -1 : -1
                    }, BigInteger.prototype.compare = function(e) {
                        if (e === 1 / 0) return -1;
                        if (e === -1 / 0) return 1;
                        var t = z(e),
                            r = this.value,
                            n = t.value;
                        return this.sign !== t.sign ? t.sign ? 1 : -1 : t.isSmall ? this.sign ? -1 : 1 : A(r, n) * (this.sign ? -1 : 1)
                    }, BigInteger.prototype.compareTo = BigInteger.prototype.compare, a.prototype.compare = function(e) {
                        if (e === 1 / 0) return -1;
                        if (e === -1 / 0) return 1;
                        var t = z(e),
                            r = this.value,
                            n = t.value;
                        return t.isSmall ? r == n ? 0 : r > n ? 1 : -1 : r < 0 !== t.sign ? r < 0 ? -1 : 1 : r < 0 ? 1 : -1
                    }, a.prototype.compareTo = a.prototype.compare, BigInteger.prototype.equals = function(e) {
                        return 0 === this.compare(e)
                    }, a.prototype.eq = a.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals, BigInteger.prototype.notEquals = function(e) {
                        return 0 !== this.compare(e)
                    }, a.prototype.neq = a.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals, BigInteger.prototype.greater = function(e) {
                        return this.compare(e) > 0
                    }, a.prototype.gt = a.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater, BigInteger.prototype.lesser = function(e) {
                        return this.compare(e) < 0
                    }, a.prototype.lt = a.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser, BigInteger.prototype.greaterOrEquals = function(e) {
                        return this.compare(e) >= 0
                    }, a.prototype.geq = a.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals, BigInteger.prototype.lesserOrEquals = function(e) {
                        return this.compare(e) <= 0
                    }, a.prototype.leq = a.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals, BigInteger.prototype.isEven = function() {
                        return 0 == (1 & this.value[0])
                    }, a.prototype.isEven = function() {
                        return 0 == (1 & this.value)
                    }, BigInteger.prototype.isOdd = function() {
                        return 1 == (1 & this.value[0])
                    }, a.prototype.isOdd = function() {
                        return 1 == (1 & this.value)
                    }, BigInteger.prototype.isPositive = function() {
                        return !this.sign
                    }, a.prototype.isPositive = function() {
                        return this.value > 0
                    }, BigInteger.prototype.isNegative = function() {
                        return this.sign
                    }, a.prototype.isNegative = function() {
                        return this.value < 0
                    }, BigInteger.prototype.isUnit = function() {
                        return !1
                    }, a.prototype.isUnit = function() {
                        return 1 === Math.abs(this.value)
                    }, BigInteger.prototype.isZero = function() {
                        return !1
                    }, a.prototype.isZero = function() {
                        return 0 === this.value
                    }, BigInteger.prototype.isDivisibleBy = function(e) {
                        var t = z(e),
                            r = t.value;
                        return 0 !== r && (1 === r || (2 === r ? this.isEven() : this.mod(t).equals(o[0])))
                    }, a.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy, BigInteger.prototype.isPrime = function(e) {
                        var t = T(this);
                        if (void 0 !== t) return t;
                        var r = this.abs(),
                            s = r.bitLength();
                        if (s <= 64) return N(r, [2, 325, 9375, 28178, 450775, 9780504, 1795265022]);
                        for (var i = Math.log(2) * s, o = Math.ceil(!0 === e ? 2 * Math.pow(i, 2) : i), a = [], u = 0; u < o; u++) a.push(n(u + 2));
                        return N(r, a)
                    }, a.prototype.isPrime = BigInteger.prototype.isPrime, BigInteger.prototype.isProbablePrime = function(e) {
                        var t = T(this);
                        if (void 0 !== t) return t;
                        for (var r = this.abs(), s = void 0 === e ? 5 : e, i = [], o = 0; o < s; o++) i.push(n.randBetween(2, r.minus(2)));
                        return N(r, i)
                    }, a.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime, BigInteger.prototype.modInv = function(e) {
                        for (var t, r, s, i = n.zero, o = n.one, a = z(e), u = this.abs(); !u.equals(n.zero);) t = a.divide(u), r = i, s = a, i = o, a = u, o = r.subtract(t.multiply(o)), u = s.subtract(t.multiply(u));
                        if (!a.equals(1)) throw new Error(this.toString() + " and " + e.toString() + " are not co-prime");
                        return -1 === i.compare(0) && (i = i.add(e)), this.isNegative() ? i.negate() : i
                    }, a.prototype.modInv = BigInteger.prototype.modInv, BigInteger.prototype.next = function() {
                        var e = this.value;
                        return this.sign ? m(e, 1, this.sign) : new BigInteger(b(e, 1), this.sign)
                    }, a.prototype.next = function() {
                        var e = this.value;
                        return e + 1 < r ? new a(e + 1) : new BigInteger(s, !1)
                    }, BigInteger.prototype.prev = function() {
                        var e = this.value;
                        return this.sign ? new BigInteger(b(e, 1), !0) : m(e, 1, this.sign)
                    }, a.prototype.prev = function() {
                        var e = this.value;
                        return e - 1 > -r ? new a(e - 1) : new BigInteger(s, !0)
                    };
                    for (var B = [1]; 2 * B[B.length - 1] <= t;) B.push(2 * B[B.length - 1]);
                    var x = B.length,
                        M = B[x - 1];

                    function U(e) {
                        return ("number" == typeof e || "string" == typeof e) && +Math.abs(e) <= t || e instanceof BigInteger && e.value.length <= 1
                    }

                    function O(e, t, r) {
                        t = z(t);
                        for (var s = e.isNegative(), i = t.isNegative(), o = s ? e.not() : e, a = i ? t.not() : t, u = 0, c = 0, h = null, l = null, p = []; !o.isZero() || !a.isZero();) u = (h = I(o, M))[1].toJSNumber(), s && (u = M - 1 - u), c = (l = I(a, M))[1].toJSNumber(), i && (c = M - 1 - c), o = h[0], a = l[0], p.push(r(u, c));
                        for (var f = 0 !== r(s ? 1 : 0, i ? 1 : 0) ? n(-1) : n(0), d = p.length - 1; d >= 0; d -= 1) f = f.multiply(M).add(n(p[d]));
                        return f
                    }
                    BigInteger.prototype.shiftLeft = function(e) {
                        if (!U(e)) throw new Error(String(e) + " is too large for shifting.");
                        if ((e = +e) < 0) return this.shiftRight(-e);
                        var t = this;
                        if (t.isZero()) return t;
                        for (; e >= x;) t = t.multiply(M), e -= x - 1;
                        return t.multiply(B[e])
                    }, a.prototype.shiftLeft = BigInteger.prototype.shiftLeft, BigInteger.prototype.shiftRight = function(e) {
                        var t;
                        if (!U(e)) throw new Error(String(e) + " is too large for shifting.");
                        if ((e = +e) < 0) return this.shiftLeft(-e);
                        for (var r = this; e >= x;) {
                            if (r.isZero() || r.isNegative() && r.isUnit()) return r;
                            r = (t = I(r, M))[1].isNegative() ? t[0].prev() : t[0], e -= x - 1
                        }
                        return (t = I(r, B[e]))[1].isNegative() ? t[0].prev() : t[0]
                    }, a.prototype.shiftRight = BigInteger.prototype.shiftRight, BigInteger.prototype.not = function() {
                        return this.negate().prev()
                    }, a.prototype.not = BigInteger.prototype.not, BigInteger.prototype.and = function(e) {
                        return O(this, e, (function(e, t) {
                            return e & t
                        }))
                    }, a.prototype.and = BigInteger.prototype.and, BigInteger.prototype.or = function(e) {
                        return O(this, e, (function(e, t) {
                            return e | t
                        }))
                    }, a.prototype.or = BigInteger.prototype.or, BigInteger.prototype.xor = function(e) {
                        return O(this, e, (function(e, t) {
                            return e ^ t
                        }))
                    }, a.prototype.xor = BigInteger.prototype.xor;

                    function R(e) {
                        var r = e.value,
                            n = "number" == typeof r ? r | 1 << 30 : r[0] + r[1] * t | 1073758208;
                        return n & -n
                    }

                    function D(e, t) {
                        return e = z(e), t = z(t), e.greater(t) ? e : t
                    }

                    function C(e, t) {
                        return e = z(e), t = z(t), e.lesser(t) ? e : t
                    }

                    function P(e, t) {
                        if (e = z(e).abs(), t = z(t).abs(), e.equals(t)) return e;
                        if (e.isZero()) return t;
                        if (t.isZero()) return e;
                        for (var r, n, s = o[1]; e.isEven() && t.isEven();) r = Math.min(R(e), R(t)), e = e.divide(r), t = t.divide(r), s = s.multiply(r);
                        for (; e.isEven();) e = e.divide(R(e));
                        do {
                            for (; t.isEven();) t = t.divide(R(t));
                            e.greater(t) && (n = t, t = e, e = n), t = t.subtract(e)
                        } while (!t.isZero());
                        return s.isUnit() ? e : e.multiply(s)
                    }
                    BigInteger.prototype.bitLength = function() {
                        var e = this;
                        return e.compareTo(n(0)) < 0 && (e = e.negate().subtract(n(1))), 0 === e.compareTo(n(0)) ? n(0) : n(function e(t, r) {
                            if (r.compareTo(t) <= 0) {
                                var s = e(t, r.square(r)),
                                    i = s.p,
                                    o = s.e,
                                    a = i.multiply(r);
                                return a.compareTo(t) <= 0 ? {
                                    p: a,
                                    e: 2 * o + 1
                                } : {
                                    p: i,
                                    e: 2 * o
                                }
                            }
                            return {
                                p: n(1),
                                e: 0
                            }
                        }(e, n(2)).e).add(n(1))
                    }, a.prototype.bitLength = BigInteger.prototype.bitLength;
                    var L = function(e, t) {
                        for (var r = e.length, n = Math.abs(t), s = 0; s < r; s++) {
                            if ("-" !== (h = e[s].toLowerCase()) && /[a-z0-9]/.test(h)) {
                                if (/[0-9]/.test(h) && +h >= n) {
                                    if ("1" === h && 1 === n) continue;
                                    throw new Error(h + " is not a valid digit in base " + t + ".")
                                }
                                if (h.charCodeAt(0) - 87 >= n) throw new Error(h + " is not a valid digit in base " + t + ".")
                            }
                        }
                        if (2 <= t && t <= 36 && r <= i / Math.log(t)) {
                            var o = parseInt(e, t);
                            if (isNaN(o)) throw new Error(h + " is not a valid digit in base " + t + ".");
                            return new a(parseInt(e, t))
                        }
                        t = z(t);
                        var u = [],
                            c = "-" === e[0];
                        for (s = c ? 1 : 0; s < e.length; s++) {
                            var h, l = (h = e[s].toLowerCase()).charCodeAt(0);
                            if (48 <= l && l <= 57) u.push(z(h));
                            else if (97 <= l && l <= 122) u.push(z(h.charCodeAt(0) - 87));
                            else {
                                if ("<" !== h) throw new Error(h + " is not a valid character");
                                var p = s;
                                do {
                                    s++
                                } while (">" !== e[s]);
                                u.push(z(e.slice(p + 1, s)))
                            }
                        }
                        return F(u, t, c)
                    };

                    function F(e, t, r) {
                        var n, s = o[0],
                            i = o[1];
                        for (n = e.length - 1; n >= 0; n--) s = s.add(e[n].times(i)), i = i.times(t);
                        return r ? s.negate() : s
                    }

                    function j(e) {
                        return e <= 35 ? "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e) : "<" + e + ">"
                    }

                    function q(e, t) {
                        if ((t = n(t)).isZero()) {
                            if (e.isZero()) return {
                                value: [0],
                                isNegative: !1
                            };
                            throw new Error("Cannot convert nonzero numbers to base 0.")
                        }
                        if (t.equals(-1)) {
                            if (e.isZero()) return {
                                value: [0],
                                isNegative: !1
                            };
                            if (e.isNegative()) return {
                                value: [].concat.apply([], Array.apply(null, Array(-e)).map(Array.prototype.valueOf, [1, 0])),
                                isNegative: !1
                            };
                            var r = Array.apply(null, Array(+e - 1)).map(Array.prototype.valueOf, [0, 1]);
                            return r.unshift([1]), {
                                value: [].concat.apply([], r),
                                isNegative: !1
                            }
                        }
                        var s = !1;
                        if (e.isNegative() && t.isPositive() && (s = !0, e = e.abs()), t.equals(1)) return e.isZero() ? {
                            value: [0],
                            isNegative: !1
                        } : {
                            value: Array.apply(null, Array(+e)).map(Number.prototype.valueOf, 1),
                            isNegative: s
                        };
                        for (var i, o = [], a = e; a.isNegative() || a.compareAbs(t) >= 0;) {
                            i = a.divmod(t), a = i.quotient;
                            var u = i.remainder;
                            u.isNegative() && (u = t.minus(u).abs(), a = a.next()), o.push(u.toJSNumber())
                        }
                        return o.push(a.toJSNumber()), {
                            value: o.reverse(),
                            isNegative: s
                        }
                    }

                    function G(e, t) {
                        var r = q(e, t);
                        return (r.isNegative ? "-" : "") + r.value.map(j).join("")
                    }

                    function Y(e) {
                        if (u(+e)) {
                            var t = +e;
                            if (t === f(t)) return new a(t);
                            throw new Error("Invalid integer: " + e)
                        }
                        var r = "-" === e[0];
                        r && (e = e.slice(1));
                        var n = e.split(/e/i);
                        if (n.length > 2) throw new Error("Invalid integer: " + n.join("e"));
                        if (2 === n.length) {
                            var s = n[1];
                            if ("+" === s[0] && (s = s.slice(1)), (s = +s) !== f(s) || !u(s)) throw new Error("Invalid integer: " + s + " is not a valid exponent.");
                            var i = n[0],
                                o = i.indexOf(".");
                            if (o >= 0 && (s -= i.length - o - 1, i = i.slice(0, o) + i.slice(o + 1)), s < 0) throw new Error("Cannot include negative exponent part for integers");
                            e = i += new Array(s + 1).join("0")
                        }
                        if (!/^([0-9][0-9]*)$/.test(e)) throw new Error("Invalid integer: " + e);
                        for (var c = [], h = e.length, p = h - 7; h > 0;) c.push(+e.slice(p, h)), (p -= 7) < 0 && (p = 0), h -= 7;
                        return l(c), new BigInteger(c, r)
                    }

                    function z(e) {
                        return "number" == typeof e ? function(e) {
                            if (u(e)) {
                                if (e !== f(e)) throw new Error(e + " is not an integer.");
                                return new a(e)
                            }
                            return Y(e.toString())
                        }(e) : "string" == typeof e ? Y(e) : e
                    }
                    BigInteger.prototype.toArray = function(e) {
                        return q(this, e)
                    }, a.prototype.toArray = function(e) {
                        return q(this, e)
                    }, BigInteger.prototype.toString = function(e) {
                        if (void 0 === e && (e = 10), 10 !== e) return G(this, e);
                        for (var t, r = this.value, n = r.length, s = String(r[--n]); --n >= 0;) t = String(r[n]), s += "0000000".slice(t.length) + t;
                        return (this.sign ? "-" : "") + s
                    }, a.prototype.toString = function(e) {
                        return void 0 === e && (e = 10), 10 != e ? G(this, e) : String(this.value)
                    }, BigInteger.prototype.toJSON = a.prototype.toJSON = function() {
                        return this.toString()
                    }, BigInteger.prototype.valueOf = function() {
                        return parseInt(this.toString(), 10)
                    }, BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf, a.prototype.valueOf = function() {
                        return this.value
                    }, a.prototype.toJSNumber = a.prototype.valueOf;
                    for (var H = 0; H < 1e3; H++) o[H] = new a(H), H > 0 && (o[-H] = new a(-H));
                    return o.one = o[1], o.zero = o[0], o.minusOne = o[-1], o.max = D, o.min = C, o.gcd = P, o.lcm = function(e, t) {
                        return e = z(e).abs(), t = z(t).abs(), e.divide(P(e, t)).multiply(t)
                    }, o.isInstance = function(e) {
                        return e instanceof BigInteger || e instanceof a
                    }, o.randBetween = function(e, r) {
                        var n = C(e = z(e), r = z(r)),
                            s = D(e, r).subtract(n).add(1);
                        if (s.isSmall) return n.add(Math.floor(Math.random() * s));
                        for (var i = [], o = !0, u = s.value.length - 1; u >= 0; u--) {
                            var c = o ? s.value[u] : t,
                                l = f(Math.random() * c);
                            i.unshift(l), l < c && (o = !1)
                        }
                        return i = h(i), n.add("number" == typeof i ? new a(i) : new BigInteger(i, !1))
                    }, o.fromArray = function(e, t, r) {
                        return F(e.map(z), z(t || 10), r)
                    }, o
                }();
                e.hasOwnProperty("exports") && (e.exports = n), void 0 === (r = function() {
                    return n
                }.apply(t, [])) || (e.exports = r)
            }).call(this, r(81)(e))
        },
        2967: function(e, t, r) {
            "use strict";
            var n = r(1011).validate;
            e.exports = function(e, t, r, s) {
                for (var i = s ? Math.floor(e.length * t / r) : Math.ceil(e.length * t / r), o = (1 << r) - 1, a = new Uint8Array(i), u = 0, c = 0, h = 0, l = 0; l < e.length; ++l) {
                    var p = e[l];
                    for (n(0 <= p && p >> t == 0, "Invalid value: " + p + "."), c = c << t | p, h += t; h >= r;) h -= r, a[u] = c >> h & o, ++u
                }
                return s ? n(h < t && 0 == (c << r - h & o), "Input cannot be converted to " + r + " bits without padding, but strict mode was used.") : h > 0 && (a[u] = c << r - h & o, ++u), a
            }
        },
        3513: function(e, t, r) {
            "use strict";
            const {
                Buffer: n
            } = r(12), s = r(3514);
            (t = e.exports = o).encode = function(e, t) {
                const r = a(e);
                return o(r.name, n.from(r.encode(t)))
            }, t.decode = function(e) {
                n.isBuffer(e) && (e = e.toString());
                const t = e.substring(0, 1);
                "string" == typeof(e = e.substring(1, e.length)) && (e = n.from(e));
                const r = a(t);
                return n.from(r.decode(e.toString()))
            }, t.isEncoded = function(e) {
                n.isBuffer(e) && (e = e.toString());
                if ("[object String]" !== Object.prototype.toString.call(e)) return !1;
                const t = e.substring(0, 1);
                try {
                    return a(t).name
                } catch (e) {
                    return !1
                }
            }, t.names = Object.freeze(Object.keys(s.names)), t.codes = Object.freeze(Object.keys(s.codes));
            const i = new Error("Unsupported encoding");

            function o(e, t) {
                if (!t) throw new Error("requires an encoded buffer");
                const r = a(e),
                    s = n.from(r.code);
                return function(e, t) {
                    a(e).decode(t.toString())
                }(r.name, t), n.concat([s, t])
            }

            function a(e) {
                let t;
                if (s.names[e]) t = s.names[e];
                else {
                    if (!s.codes[e]) throw i;
                    t = s.codes[e]
                }
                if (!t.isImplemented()) throw new Error("Base " + e + " is not implemented yet");
                return t
            }
        },
        3514: function(e, t, r) {
            "use strict";
            const n = r(3515),
                s = r(939),
                i = r(3516),
                o = r(3517),
                a = r(3518),
                u = [
                    ["base1", "1", "", "1"],
                    ["base2", "0", s, "01"],
                    ["base8", "7", s, "01234567"],
                    ["base10", "9", s, "0123456789"],
                    ["base16", "f", i, "0123456789abcdef"],
                    ["base32", "b", o, "abcdefghijklmnopqrstuvwxyz234567"],
                    ["base32pad", "c", o, "abcdefghijklmnopqrstuvwxyz234567="],
                    ["base32hex", "v", o, "0123456789abcdefghijklmnopqrstuv"],
                    ["base32hexpad", "t", o, "0123456789abcdefghijklmnopqrstuv="],
                    ["base32z", "h", o, "ybndrfg8ejkmcpqxot1uwisza345h769"],
                    ["base58flickr", "Z", s, "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"],
                    ["base58btc", "z", s, "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],
                    ["base64", "m", a, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],
                    ["base64pad", "M", a, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],
                    ["base64url", "u", a, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"],
                    ["base64urlpad", "U", a, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="]
                ],
                c = u.reduce((e, t) => (e[t[0]] = new n(t[0], t[1], t[2], t[3]), e), {}),
                h = u.reduce((e, t) => (e[t[1]] = c[t[0]], e), {});
            e.exports = {
                names: c,
                codes: h
            }
        },
        3515: function(e, t, r) {
            "use strict";
            e.exports = class Base {
                constructor(e, t, r, n) {
                    this.name = e, this.code = t, this.alphabet = n, r && n && (this.engine = r(n))
                }
                encode(e) {
                    return this.engine.encode(e)
                }
                decode(e) {
                    return this.engine.decode(e)
                }
                isImplemented() {
                    return this.engine
                }
            }
        },
        3516: function(e, t, r) {
            "use strict";
            const {
                Buffer: n
            } = r(12);
            e.exports = function(e) {
                return {
                    encode: e => "string" == typeof e ? n.from(e).toString("hex") : e.toString("hex"),
                    decode(t) {
                        for (const r of t)
                            if (e.indexOf(r) < 0) throw new Error("invalid base16 character");
                        return n.from(t, "hex")
                    }
                }
            }
        },
        3517: function(e, t, r) {
            "use strict";

            function n(e, t) {
                const r = e.byteLength,
                    n = new Uint8Array(e),
                    s = t.indexOf("=") === t.length - 1;
                s && (t = t.substring(0, t.length - 1));
                let i = 0,
                    o = 0,
                    a = "";
                for (let e = 0; e < r; e++)
                    for (o = o << 8 | n[e], i += 8; i >= 5;) a += t[o >>> i - 5 & 31], i -= 5;
                if (i > 0 && (a += t[o << 5 - i & 31]), s)
                    for (; a.length % 8 != 0;) a += "=";
                return a
            }
            e.exports = function(e) {
                return {
                    encode: t => n("string" == typeof t ? Uint8Array.from(t) : t, e),
                    decode(t) {
                        for (const r of t)
                            if (e.indexOf(r) < 0) throw new Error("invalid base32 character");
                        return function(e, t) {
                            const r = (e = e.replace(new RegExp("=", "g"), "")).length;
                            let n = 0,
                                s = 0,
                                i = 0;
                            const o = new Uint8Array(5 * r / 8 | 0);
                            for (let a = 0; a < r; a++) s = s << 5 | t.indexOf(e[a]), n += 5, n >= 8 && (o[i++] = s >>> n - 8 & 255, n -= 8);
                            return o.buffer
                        }(t, e)
                    }
                }
            }
        },
        3518: function(e, t, r) {
            "use strict";
            const {
                Buffer: n
            } = r(12);
            e.exports = function(e) {
                const t = e.indexOf("=") > -1,
                    r = e.indexOf("-") > -1 && e.indexOf("_") > -1;
                return {
                    encode(e) {
                        let s = "";
                        s = "string" == typeof e ? n.from(e).toString("base64") : e.toString("base64"), r && (s = s.replace(/\+/g, "-").replace(/\//g, "_"));
                        const i = s.indexOf("=");
                        return i > 0 && !t && (s = s.substring(0, i)), s
                    },
                    decode(t) {
                        for (const r of t)
                            if (e.indexOf(r) < 0) throw new Error("invalid base64 character");
                        return n.from(t, "base64")
                    }
                }
            }
        },
        3519: function(e, t, r) {
            "use strict";
            const {
                Buffer: n
            } = r(12), s = r(470), i = r(3520), o = r(3521), a = r(1855);
            (t = e.exports).addPrefix = (e, t) => {
                let r;
                if (n.isBuffer(e)) r = a.varintBufferEncode(e);
                else {
                    if (!o[e]) throw new Error("multicodec not recognized");
                    r = o[e]
                }
                return n.concat([r, t])
            }, t.rmPrefix = e => (s.decode(e), e.slice(s.decode.bytes)), t.getCodec = e => {
                const t = s.decode(e),
                    r = i.get(t);
                if (void 0 === r) throw new Error(`Code ${t} not found`);
                return r
            }, t.getName = e => i.get(e), t.getNumber = e => {
                const t = o[e];
                if (void 0 === t) throw new Error("Codec `" + e + "` not found");
                return a.varintBufferDecode(t)[0]
            }, t.getCode = e => s.decode(e), t.getCodeVarint = e => {
                const t = o[e];
                if (void 0 === t) throw new Error("Codec `" + e + "` not found");
                return t
            }, t.getVarint = e => s.encode(e);
            const u = r(3522);
            Object.assign(t, u), t.print = r(3523)
        },
        3520: function(e, t, r) {
            "use strict";
            const n = r(503),
                s = new Map;
            for (const e in n) {
                const t = n[e];
                s.set(t, e)
            }
            e.exports = Object.freeze(s)
        },
        3521: function(e, t, r) {
            "use strict";
            const n = r(503),
                s = r(1855).varintEncode,
                i = {};
            for (const e in n) {
                const t = n[e];
                i[e] = s(t)
            }
            e.exports = Object.freeze(i)
        },
        3522: function(e, t, r) {
            "use strict";
            const n = r(503),
                s = {};
            for (const [e, t] of Object.entries(n)) s[e.toUpperCase().replace(/-/g, "_")] = t;
            e.exports = Object.freeze(s)
        },
        3523: function(e, t, r) {
            "use strict";
            const n = r(503),
                s = {};
            for (const [e, t] of Object.entries(n)) void 0 === s[t] && (s[t] = e);
            e.exports = Object.freeze(s)
        },
        3524: function(e, t, r) {
            "use strict";
            const n = r(1071),
                {
                    Buffer: s
                } = r(12);
            var i = {
                checkCIDComponents: function(e) {
                    if (null == e) return "null values are not valid CIDs";
                    if (0 !== e.version && 1 !== e.version) return "Invalid version, must be a number equal to 1 or 0";
                    if ("string" != typeof e.codec) return "codec must be string";
                    if (0 === e.version) {
                        if ("dag-pb" !== e.codec) return "codec must be 'dag-pb' for CIDv0";
                        if ("base58btc" !== e.multibaseName) return "multibaseName must be 'base58btc' for CIDv0"
                    }
                    if (!s.isBuffer(e.multihash)) return "multihash must be a Buffer";
                    try {
                        n.validate(e.multihash)
                    } catch (e) {
                        let t = e.message;
                        return t || (t = "Multihash validation failed"), t
                    }
                }
            };
            e.exports = i
        },
        3525: function(e, t, r) {
            "use strict";
            e.exports = function(e, {
                className: t,
                symbolName: r
            }) {
                const n = Symbol.for(r),
                    s = {
                        [t]: class extends e {
                            constructor(...e) {
                                super(...e), Object.defineProperty(this, n, {
                                    value: !0
                                })
                            }
                            get[Symbol.toStringTag]() {
                                return t
                            }
                        }
                    } [t];
                return s["is" + t] = e => !(!e || !e[n]), s
            }, e.exports.proto = function(e, {
                className: t,
                symbolName: r,
                withoutNew: n
            }) {
                const s = Symbol.for(r),
                    i = {
                        [t]: function(...t) {
                            if (n && !(this instanceof i)) return new i(...t);
                            const r = e.call(this, ...t) || this;
                            return r && !r[s] && Object.defineProperty(r, s, {
                                value: !0
                            }), r
                        }
                    } [t];
                return i.prototype = Object.create(e.prototype), i.prototype.constructor = i, Object.defineProperty(i.prototype, Symbol.toStringTag, {
                    get: () => t
                }), i["is" + t] = e => !(!e || !e[s]), i
            }
        },
        355: function(e, t, r) {
            "use strict";
            t.MT = {
                POS_INT: 0,
                NEG_INT: 1,
                BYTE_STRING: 2,
                UTF8_STRING: 3,
                ARRAY: 4,
                MAP: 5,
                TAG: 6,
                SIMPLE_FLOAT: 7
            }, t.TAG = {
                DATE_STRING: 0,
                DATE_EPOCH: 1,
                POS_BIGINT: 2,
                NEG_BIGINT: 3,
                DECIMAL_FRAC: 4,
                BIGFLOAT: 5,
                BASE64URL_EXPECTED: 21,
                BASE64_EXPECTED: 22,
                BASE16_EXPECTED: 23,
                CBOR: 24,
                URI: 32,
                BASE64URL: 33,
                BASE64: 34,
                REGEXP: 35,
                MIME: 36
            }, t.NUMBYTES = {
                ZERO: 0,
                ONE: 24,
                TWO: 25,
                FOUR: 26,
                EIGHT: 27,
                INDEFINITE: 31
            }, t.SIMPLE = {
                FALSE: 20,
                TRUE: 21,
                NULL: 22,
                UNDEFINED: 23
            }, t.SYMS = {
                NULL: Symbol("null"),
                UNDEFINED: Symbol("undef"),
                PARENT: Symbol("parent"),
                BREAK: Symbol("break"),
                STREAM: Symbol("stream")
            }, t.SHIFT32 = Math.pow(2, 32)
        },
        4247: function(e, t, r) {
            "use strict";
            t.Commented = r(4248), t.Diagnose = r(4250), t.Decoder = r(671), t.Encoder = r(2022), t.Simple = r(524), t.Tagged = r(1140), t.Map = r(4251), t.comment = t.Commented.comment, t.decodeAll = t.Decoder.decodeAll, t.decodeFirst = t.Decoder.decodeFirst, t.decodeAllSync = t.Decoder.decodeAllSync, t.decodeFirstSync = t.Decoder.decodeFirstSync, t.diagnose = t.Diagnose.diagnose, t.encode = t.Encoder.encode, t.encodeCanonical = t.Encoder.encodeCanonical, t.encodeOne = t.Encoder.encodeOne, t.decode = t.Decoder.decodeFirstSync, t.leveldb = {
                decode: t.Decoder.decodeAllSync,
                encode: t.Encoder.encode,
                buffer: !0,
                name: "cbor"
            }, t.hasBigInt = r(433).hasBigInt
        },
        4248: function(e, t, r) {
            "use strict";
            const n = r(145),
                s = r(43),
                i = (r(433), r(524), r(671)),
                o = r(355),
                a = r(61).BigNumber,
                u = r(525),
                c = o.MT,
                h = o.NUMBYTES,
                l = o.SYMS;

            function p(e) {
                return e > 1 ? "s" : ""
            }
            class Commented extends n.Transform {
                constructor(e) {
                    (e = e || {}).readableObjectMode = !1, e.writableObjectMode = !1;
                    const t = null != e.max_depth ? e.max_depth : 10;
                    delete e.max_depth, super(e), this.depth = 1, this.max_depth = t, this.all = new u, this.parser = new i(e), this.parser.on("value", this._on_value.bind(this)), this.parser.on("start", this._on_start.bind(this)), this.parser.on("start-string", this._on_start_string.bind(this)), this.parser.on("stop", this._on_stop.bind(this)), this.parser.on("more-bytes", this._on_more.bind(this)), this.parser.on("error", this._on_error.bind(this)), this.parser.on("data", this._on_data.bind(this)), this.parser.bs.on("read", this._on_read.bind(this))
                }
                _transform(e, t, r) {
                    this.parser.write(e, t, r)
                }
                _flush(e) {
                    return this.parser._flush(e)
                }
                static comment(e, t, r) {
                    if (null == e) throw new Error("input required");
                    let n = "string" == typeof e ? "hex" : void 0,
                        s = 10;
                    switch (typeof t) {
                        case "function":
                            r = t;
                            break;
                        case "string":
                            n = t;
                            break;
                        case "number":
                            s = t;
                            break;
                        case "object":
                            const e = t.encoding,
                                i = t.max_depth;
                            n = null != e ? e : n, s = null != i ? i : s;
                            break;
                        case "undefined":
                            break;
                        default:
                            throw new Error("Unknown option type")
                    }
                    const i = new u,
                        o = new Commented({
                            max_depth: s
                        });
                    let a = null;
                    return "function" == typeof r ? (o.on("end", () => {
                        r(null, i.toString("utf8"))
                    }), o.on("error", r)) : a = new Promise((e, t) => (o.on("end", () => {
                        e(i.toString("utf8"))
                    }), o.on("error", t))), o.pipe(i), o.end(e, n), a
                }
                _on_error(e) {
                    return this.push("ERROR: ") && this.push(e.toString()) && this.push("\n")
                }
                _on_read(e) {
                    this.all.write(e);
                    const t = e.toString("hex");
                    this.push(new Array(this.depth + 1).join("  ")), this.push(t);
                    let r = 2 * (this.max_depth - this.depth);
                    return r -= t.length, r < 1 && (r = 1), this.push(new Array(r + 1).join(" ")), this.push("-- ")
                }
                _on_more(e, t, r, n) {
                    this.depth++;
                    let s = "";
                    switch (e) {
                        case c.POS_INT:
                            s = "Positive number,";
                            break;
                        case c.NEG_INT:
                            s = "Negative number,";
                            break;
                        case c.ARRAY:
                            s = "Array, length";
                            break;
                        case c.MAP:
                            s = "Map, count";
                            break;
                        case c.BYTE_STRING:
                            s = "Bytes, length";
                            break;
                        case c.UTF8_STRING:
                            s = "String, length";
                            break;
                        case c.SIMPLE_FLOAT:
                            s = 1 === t ? "Simple value," : "Float,"
                    }
                    return this.push(s + " next " + t + " byte" + p(t) + "\n")
                }
                _on_start_string(e, t, r, n) {
                    this.depth++;
                    let s = "";
                    switch (e) {
                        case c.BYTE_STRING:
                            s = "Bytes, length: " + t;
                            break;
                        case c.UTF8_STRING:
                            s = "String, length: " + t.toString()
                    }
                    return this.push(s + "\n")
                }
                _on_start(e, t, r, n) {
                    return this.depth++, t !== l.BREAK && this.push((() => {
                        switch (r) {
                            case c.ARRAY:
                                return "[" + n + "], ";
                            case c.MAP:
                                return n % 2 ? "{Val:" + Math.floor(n / 2) + "}, " : "{Key:" + Math.floor(n / 2) + "}, "
                        }
                    })()), this.push((() => {
                        switch (e) {
                            case c.TAG:
                                return "Tag #" + t;
                            case c.ARRAY:
                                return t === l.STREAM ? "Array (streaming)" : "Array, " + t + " item" + p(t);
                            case c.MAP:
                                return t === l.STREAM ? "Map (streaming)" : "Map, " + t + " pair" + p(t);
                            case c.BYTE_STRING:
                                return "Bytes (streaming)";
                            case c.UTF8_STRING:
                                return "String (streaming)"
                        }
                    })()), this.push("\n")
                }
                _on_stop(e) {
                    return this.depth--
                }
                _on_value(e, t, r, n) {
                    switch (e !== l.BREAK && this.push((() => {
                            switch (t) {
                                case c.ARRAY:
                                    return "[" + r + "], ";
                                case c.MAP:
                                    return r % 2 ? "{Val:" + Math.floor(r / 2) + "}, " : "{Key:" + Math.floor(r / 2) + "}, "
                            }
                        })()), e === l.BREAK ? this.push("BREAK\n") : e === l.NULL ? this.push("null\n") : e === l.UNDEFINED ? this.push("undefined\n") : "string" == typeof e ? (this.depth--, e.length > 0 && (this.push(JSON.stringify(e)), this.push("\n"))) : Buffer.isBuffer(e) ? (this.depth--, e.length > 0 && (this.push(e.toString("hex")), this.push("\n"))) : e instanceof a ? (this.push(e.toString()), this.push("\n")) : (this.push(s.inspect(e)), this.push("\n")), n) {
                        case h.ONE:
                        case h.TWO:
                        case h.FOUR:
                        case h.EIGHT:
                            this.depth--
                    }
                }
                _on_data() {
                    return this.push("0x"), this.push(this.all.read().toString("hex")), this.push("\n")
                }
            }
            e.exports = Commented
        },
        4249: function(e, t, r) {
            "use strict";
            t = e.exports = o;
            var n = r(145).Transform,
                s = r(43).inherits,
                i = r(525);

            function o(e) {
                n.call(this, e), this._writableState.objectMode = !1, this._readableState.objectMode = !0, this.bs = new i, this.__restart()
            }
            t.One = -1, s(o, n), o.prototype._transform = function(e, t, r) {
                for (this.bs.write(e); this.bs.length >= this.__needed;) {
                    var n, s = null === this.__needed ? void 0 : this.bs.read(this.__needed);
                    try {
                        n = this.__parser.next(s)
                    } catch (e) {
                        return r(e)
                    }
                    this.__needed && (this.__fresh = !1), n.done ? (this.push(n.value), this.__restart()) : this.__needed = 0 | n.value
                }
                return r()
            }, o.prototype.__restart = function() {
                this.__needed = null, this.__parser = this._parse(), this.__fresh = !0
            }, o.prototype._flush = function(e) {
                e(this.__fresh ? null : new Error("unexpected end of input"))
            }
        },
        4250: function(e, t, r) {
            "use strict";
            const n = r(145),
                s = r(43),
                i = r(671),
                o = (r(524), r(433)),
                a = r(355),
                u = r(61).BigNumber,
                c = r(525),
                h = a.MT,
                l = a.SYMS;
            class Diagnose extends n.Transform {
                constructor(e) {
                    const t = null != (e = e || {}).separator ? e.separator : "\n";
                    delete e.separator;
                    const r = null != e.stream_errors && e.stream_errors;
                    delete e.stream_errors, e.readableObjectMode = !1, e.writableObjectMode = !1, super(e), this.float_bytes = -1, this.separator = t, this.stream_errors = r, this.parser = new i(e), this.parser.on("more-bytes", this._on_more.bind(this)), this.parser.on("value", this._on_value.bind(this)), this.parser.on("start", this._on_start.bind(this)), this.parser.on("stop", this._on_stop.bind(this)), this.parser.on("data", this._on_data.bind(this)), this.parser.on("error", this._on_error.bind(this))
                }
                _transform(e, t, r) {
                    return this.parser.write(e, t, r)
                }
                _flush(e) {
                    return this.parser._flush(t => this.stream_errors ? (t && this._on_error(t), e()) : e(t))
                }
                static diagnose(e, t, r) {
                    if (null == e) throw new Error("input required");
                    let n = {},
                        s = "hex";
                    switch (typeof t) {
                        case "function":
                            r = t, s = o.guessEncoding(e);
                            break;
                        case "object":
                            n = o.extend({}, t), s = null != n.encoding ? n.encoding : o.guessEncoding(e), delete n.encoding;
                            break;
                        default:
                            s = null != t ? t : "hex"
                    }
                    const i = new c,
                        a = new Diagnose(n);
                    let u = null;
                    return "function" == typeof r ? (a.on("end", () => r(null, i.toString("utf8"))), a.on("error", r)) : u = new Promise((e, t) => (a.on("end", () => e(i.toString("utf8"))), a.on("error", t))), a.pipe(i), a.end(e, s), u
                }
                _on_error(e) {
                    return this.stream_errors ? this.push(e.toString()) : this.emit("error", e)
                }
                _on_more(e, t, r, n) {
                    if (e === h.SIMPLE_FLOAT) return this.float_bytes = function() {
                        switch (t) {
                            case 2:
                                return 1;
                            case 4:
                                return 2;
                            case 8:
                                return 3
                        }
                    }()
                }
                _fore(e, t) {
                    switch (e) {
                        case h.BYTE_STRING:
                        case h.UTF8_STRING:
                        case h.ARRAY:
                            if (t > 0) return this.push(", ");
                            break;
                        case h.MAP:
                            if (t > 0) return t % 2 ? this.push(": ") : this.push(", ")
                    }
                }
                _on_value(e, t, r) {
                    if (e !== l.BREAK) return this._fore(t, r), this.push(function() {
                        switch (!1) {
                            case e !== l.NULL:
                                return "null";
                            case e !== l.UNDEFINED:
                                return "undefined";
                            case "string" != typeof e:
                                return JSON.stringify(e);
                            case !(this.float_bytes > 0):
                                const t = this.float_bytes;
                                return this.float_bytes = -1, s.inspect(e) + "_" + t;
                            case !Buffer.isBuffer(e):
                                return "h'" + e.toString("hex") + "'";
                            case !(e instanceof u):
                                return e.toString();
                            default:
                                return s.inspect(e)
                        }
                    }.call(this))
                }
                _on_start(e, t, r, n) {
                    if (this._fore(r, n), this.push(function() {
                            switch (e) {
                                case h.TAG:
                                    return t + "(";
                                case h.ARRAY:
                                    return "[";
                                case h.MAP:
                                    return "{";
                                case h.BYTE_STRING:
                                case h.UTF8_STRING:
                                    return "(";
                                default:
                                    throw new Error("Unknown diagnostic type: " + e)
                            }
                        }()), t === l.STREAM) return this.push("_ ")
                }
                _on_stop(e) {
                    return this.push(function() {
                        switch (e) {
                            case h.TAG:
                                return ")";
                            case h.ARRAY:
                                return "]";
                            case h.MAP:
                                return "}";
                            case h.BYTE_STRING:
                            case h.UTF8_STRING:
                                return ")";
                            default:
                                throw new Error("Unknown diagnostic type: " + e)
                        }
                    }())
                }
                _on_data() {
                    return this.push(this.separator)
                }
            }
            e.exports = Diagnose
        },
        4251: function(e, t, r) {
            "use strict";
            const n = r(2022),
                s = r(671),
                i = r(355).MT;
            class CborMap extends Map {
                constructor(e) {
                    super(e)
                }
                static _encode(e) {
                    return n.encodeCanonical(e).toString("base64")
                }
                static _decode(e) {
                    return s.decodeFirstSync(e, "base64")
                }
                get(e) {
                    return super.get(CborMap._encode(e))
                }
                set(e, t) {
                    return super.set(CborMap._encode(e), t)
                }
                delete(e) {
                    return super.delete(CborMap._encode(e))
                }
                has(e) {
                    return super.has(CborMap._encode(e))
                }* keys() {
                    for (const e of super.keys()) yield CborMap._decode(e)
                }* entries() {
                    for (const e of super.entries()) yield [CborMap._decode(e[0]), e[1]]
                } [Symbol.iterator]() {
                    return this.entries()
                }
                forEach(e, t) {
                    if ("function" != typeof e) throw new TypeError("Must be function");
                    for (const t of super.entries()) e.call(this, t[1], CborMap._decode(t[0]), this)
                }
                encodeCBOR(e) {
                    if (!e._pushInt(this.size, i.MAP)) return !1;
                    if (e.canonical) {
                        const t = Array.from(super.entries()).map(e => [Buffer.from(e[0], "base64"), e[1]]);
                        t.sort((e, t) => e[0].compare(t[0]));
                        for (const r of t)
                            if (!e.push(r[0]) || !e.pushAny(r[1])) return !1
                    } else
                        for (const t of super.entries())
                            if (!e.push(Buffer.from(t[0], "base64")) || !e.pushAny(t[1])) return !1;
                    return !0
                }
            }
            e.exports = CborMap
        },
        433: function(e, t, r) {
            "use strict";
            const n = r(142),
                s = r(145),
                i = r(61).BigNumber,
                o = r(355),
                a = o.NUMBYTES,
                u = o.SHIFT32;
            t.hasBigInt = "function" == typeof BigInt, t.parseCBORint = function(e, t) {
                switch (e) {
                    case a.ONE:
                        return t.readUInt8(0);
                    case a.TWO:
                        return t.readUInt16BE(0);
                    case a.FOUR:
                        return t.readUInt32BE(0);
                    case a.EIGHT:
                        const r = t.readUInt32BE(0),
                            n = t.readUInt32BE(4);
                        return r > 2097151 ? new i(r).times(u).plus(n) : r * u + n;
                    default:
                        throw new Error("Invalid additional info for int: " + e)
                }
            }, t.writeHalf = function(e, t) {
                const r = Buffer.allocUnsafe(4);
                r.writeFloatBE(t);
                const n = r.readUInt32BE(0);
                if (0 != (8191 & n)) return !1;
                let s = n >> 16 & 32768;
                const i = n >> 23 & 255,
                    o = 8388607 & n;
                if (i >= 113 && i <= 142) s += (i - 112 << 10) + (o >> 13);
                else {
                    if (!(i >= 103 && i < 113)) return !1;
                    if (o & (1 << 126 - i) - 1) return !1;
                    s += o + 8388608 >> 126 - i
                }
                return e.writeUInt16BE(s), !0
            }, t.parseHalf = function(e) {
                const t = 128 & e[0] ? -1 : 1,
                    r = (124 & e[0]) >> 2,
                    n = (3 & e[0]) << 8 | e[1];
                return r ? 31 === r ? t * (n ? NaN : Infinity) : t * Math.pow(2, r - 25) * (1024 + n) : 5.960464477539063e-8 * t * n
            }, t.parseCBORfloat = function(e) {
                switch (e.length) {
                    case 2:
                        return t.parseHalf(e);
                    case 4:
                        return e.readFloatBE(0);
                    case 8:
                        return e.readDoubleBE(0);
                    default:
                        throw new Error("Invalid float size: " + e.length)
                }
            }, t.hex = function(e) {
                return Buffer.from(e.replace(/^0x/, ""), "hex")
            }, t.bin = function(e) {
                let t = 0,
                    r = (e = e.replace(/\s/g, "")).length % 8 || 8;
                const n = [];
                for (; r <= e.length;) n.push(parseInt(e.slice(t, r), 2)), t = r, r += 8;
                return Buffer.from(n)
            }, t.extend = function() {
                let e = arguments[0];
                const t = 2 <= arguments.length ? Array.prototype.slice.call(arguments, 1) : [],
                    r = t.length;
                null == e && (e = {});
                for (let n = 0; n < r; n++) {
                    const r = t[n];
                    for (const t in r) {
                        const n = r[t];
                        e[t] = n
                    }
                }
                return e
            }, t.arrayEqual = function(e, t) {
                return null == e && null == t || null != e && null != t && (e.length === t.length && e.every((e, r) => e === t[r]))
            }, t.bufferEqual = function(e, t) {
                if (null == e && null == t) return !0;
                if (null == e || null == t) return !1;
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(t) || e.length !== t.length) return !1;
                const r = e.length;
                let n, s, i = !0;
                for (n = s = 0; s < r; n = ++s) {
                    const r = e[n];
                    i &= t[n] === r
                }
                return !!i
            }, t.bufferToBignumber = function(e) {
                return new i(e.toString("hex"), 16)
            }, t.bufferToBigInt = function(e) {
                return BigInt("0x" + e.toString("hex"))
            }, t.DeHexStream = class DeHexStream extends s.Readable {
                constructor(e) {
                    super(), (e = e.replace(/^0x/, "")) && this.push(Buffer.from(e, "hex")), this.push(null)
                }
            }, t.HexStream = class HexStream extends s.Transform {
                constructor(e) {
                    super(e)
                }
                _transform(e, t, r) {
                    return this.push(e.toString("hex")), r()
                }
            }, t.printError = function(e) {
                if (null != e) return console.error(e)
            }, t.streamFiles = function(e, r, i) {
                const o = e.shift();
                if (!o) return i();
                const a = r();
                a.on("end", () => t.streamFiles(e, r, i)), a.on("error", i);
                const u = "-" === o ? process.stdin : o instanceof s.Stream ? o : n.createReadStream(o);
                return u.on("error", i), u.pipe(a)
            }, t.guessEncoding = function(e) {
                switch (!1) {
                    case "string" != typeof e:
                        return "hex";
                    case !Buffer.isBuffer(e):
                        return;
                    default:
                        throw new Error("Unknown input type")
                }
            }
        },
        503: function(e) {
            e.exports = JSON.parse('{"identity":0,"ip4":4,"tcp":6,"sha1":17,"sha2-256":18,"sha2-512":19,"sha3-512":20,"sha3-384":21,"sha3-256":22,"sha3-224":23,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,"blake3":30,"dccp":33,"murmur3-128":34,"murmur3-32":35,"ip6":41,"ip6zone":42,"path":47,"multicodec":48,"multihash":49,"multiaddr":50,"multibase":51,"dns":53,"dns4":54,"dns6":55,"dnsaddr":56,"protobuf":80,"cbor":81,"raw":85,"dbl-sha2-256":86,"rlp":96,"bencode":99,"dag-pb":112,"dag-cbor":113,"libp2p-key":114,"git-raw":120,"torrent-info":123,"torrent-file":124,"leofcoin-block":129,"leofcoin-tx":130,"leofcoin-pr":131,"sctp":132,"dag-jose":133,"dag-cose":134,"eth-block":144,"eth-block-list":145,"eth-tx-trie":146,"eth-tx":147,"eth-tx-receipt-trie":148,"eth-tx-receipt":149,"eth-state-trie":150,"eth-account-snapshot":151,"eth-storage-trie":152,"bitcoin-block":176,"bitcoin-tx":177,"bitcoin-witness-commitment":178,"zcash-block":192,"zcash-tx":193,"stellar-block":208,"stellar-tx":209,"md4":212,"md5":213,"bmt":214,"decred-block":224,"decred-tx":225,"ipld-ns":226,"ipfs-ns":227,"swarm-ns":228,"ipns-ns":229,"zeronet":230,"secp256k1-pub":231,"bls12_381-g1-pub":234,"bls12_381-g2-pub":235,"x25519-pub":236,"ed25519-pub":237,"dash-block":240,"dash-tx":241,"swarm-manifest":250,"swarm-feed":251,"udp":273,"p2p-webrtc-star":275,"p2p-webrtc-direct":276,"p2p-stardust":277,"p2p-circuit":290,"dag-json":297,"udt":301,"utp":302,"unix":400,"p2p":421,"ipfs":421,"https":443,"onion":444,"onion3":445,"garlic64":446,"garlic32":447,"tls":448,"quic":460,"ws":477,"wss":478,"p2p-websocket-star":479,"http":480,"json":512,"messagepack":513,"libp2p-peer-record":769,"sha2-256-trunc254-padded":4114,"ripemd-128":4178,"ripemd-160":4179,"ripemd-256":4180,"ripemd-320":4181,"x11":4352,"sm3-256":21325,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"skein256-8":45825,"skein256-16":45826,"skein256-24":45827,"skein256-32":45828,"skein256-40":45829,"skein256-48":45830,"skein256-56":45831,"skein256-64":45832,"skein256-72":45833,"skein256-80":45834,"skein256-88":45835,"skein256-96":45836,"skein256-104":45837,"skein256-112":45838,"skein256-120":45839,"skein256-128":45840,"skein256-136":45841,"skein256-144":45842,"skein256-152":45843,"skein256-160":45844,"skein256-168":45845,"skein256-176":45846,"skein256-184":45847,"skein256-192":45848,"skein256-200":45849,"skein256-208":45850,"skein256-216":45851,"skein256-224":45852,"skein256-232":45853,"skein256-240":45854,"skein256-248":45855,"skein256-256":45856,"skein512-8":45857,"skein512-16":45858,"skein512-24":45859,"skein512-32":45860,"skein512-40":45861,"skein512-48":45862,"skein512-56":45863,"skein512-64":45864,"skein512-72":45865,"skein512-80":45866,"skein512-88":45867,"skein512-96":45868,"skein512-104":45869,"skein512-112":45870,"skein512-120":45871,"skein512-128":45872,"skein512-136":45873,"skein512-144":45874,"skein512-152":45875,"skein512-160":45876,"skein512-168":45877,"skein512-176":45878,"skein512-184":45879,"skein512-192":45880,"skein512-200":45881,"skein512-208":45882,"skein512-216":45883,"skein512-224":45884,"skein512-232":45885,"skein512-240":45886,"skein512-248":45887,"skein512-256":45888,"skein512-264":45889,"skein512-272":45890,"skein512-280":45891,"skein512-288":45892,"skein512-296":45893,"skein512-304":45894,"skein512-312":45895,"skein512-320":45896,"skein512-328":45897,"skein512-336":45898,"skein512-344":45899,"skein512-352":45900,"skein512-360":45901,"skein512-368":45902,"skein512-376":45903,"skein512-384":45904,"skein512-392":45905,"skein512-400":45906,"skein512-408":45907,"skein512-416":45908,"skein512-424":45909,"skein512-432":45910,"skein512-440":45911,"skein512-448":45912,"skein512-456":45913,"skein512-464":45914,"skein512-472":45915,"skein512-480":45916,"skein512-488":45917,"skein512-496":45918,"skein512-504":45919,"skein512-512":45920,"skein1024-8":45921,"skein1024-16":45922,"skein1024-24":45923,"skein1024-32":45924,"skein1024-40":45925,"skein1024-48":45926,"skein1024-56":45927,"skein1024-64":45928,"skein1024-72":45929,"skein1024-80":45930,"skein1024-88":45931,"skein1024-96":45932,"skein1024-104":45933,"skein1024-112":45934,"skein1024-120":45935,"skein1024-128":45936,"skein1024-136":45937,"skein1024-144":45938,"skein1024-152":45939,"skein1024-160":45940,"skein1024-168":45941,"skein1024-176":45942,"skein1024-184":45943,"skein1024-192":45944,"skein1024-200":45945,"skein1024-208":45946,"skein1024-216":45947,"skein1024-224":45948,"skein1024-232":45949,"skein1024-240":45950,"skein1024-248":45951,"skein1024-256":45952,"skein1024-264":45953,"skein1024-272":45954,"skein1024-280":45955,"skein1024-288":45956,"skein1024-296":45957,"skein1024-304":45958,"skein1024-312":45959,"skein1024-320":45960,"skein1024-328":45961,"skein1024-336":45962,"skein1024-344":45963,"skein1024-352":45964,"skein1024-360":45965,"skein1024-368":45966,"skein1024-376":45967,"skein1024-384":45968,"skein1024-392":45969,"skein1024-400":45970,"skein1024-408":45971,"skein1024-416":45972,"skein1024-424":45973,"skein1024-432":45974,"skein1024-440":45975,"skein1024-448":45976,"skein1024-456":45977,"skein1024-464":45978,"skein1024-472":45979,"skein1024-480":45980,"skein1024-488":45981,"skein1024-496":45982,"skein1024-504":45983,"skein1024-512":45984,"skein1024-520":45985,"skein1024-528":45986,"skein1024-536":45987,"skein1024-544":45988,"skein1024-552":45989,"skein1024-560":45990,"skein1024-568":45991,"skein1024-576":45992,"skein1024-584":45993,"skein1024-592":45994,"skein1024-600":45995,"skein1024-608":45996,"skein1024-616":45997,"skein1024-624":45998,"skein1024-632":45999,"skein1024-640":46000,"skein1024-648":46001,"skein1024-656":46002,"skein1024-664":46003,"skein1024-672":46004,"skein1024-680":46005,"skein1024-688":46006,"skein1024-696":46007,"skein1024-704":46008,"skein1024-712":46009,"skein1024-720":46010,"skein1024-728":46011,"skein1024-736":46012,"skein1024-744":46013,"skein1024-752":46014,"skein1024-760":46015,"skein1024-768":46016,"skein1024-776":46017,"skein1024-784":46018,"skein1024-792":46019,"skein1024-800":46020,"skein1024-808":46021,"skein1024-816":46022,"skein1024-824":46023,"skein1024-832":46024,"skein1024-840":46025,"skein1024-848":46026,"skein1024-856":46027,"skein1024-864":46028,"skein1024-872":46029,"skein1024-880":46030,"skein1024-888":46031,"skein1024-896":46032,"skein1024-904":46033,"skein1024-912":46034,"skein1024-920":46035,"skein1024-928":46036,"skein1024-936":46037,"skein1024-944":46038,"skein1024-952":46039,"skein1024-960":46040,"skein1024-968":46041,"skein1024-976":46042,"skein1024-984":46043,"skein1024-992":46044,"skein1024-1000":46045,"skein1024-1008":46046,"skein1024-1016":46047,"skein1024-1024":46048,"poseidon-bls12_381-a2-fc1":46081,"poseidon-bls12_381-a2-fc1-sc":46082,"zeroxcert-imprint-256":52753,"fil-commitment-unsealed":61697,"fil-commitment-sealed":61698,"holochain-adr-v0":8417572,"holochain-adr-v1":8483108,"holochain-key-v0":9728292,"holochain-key-v1":9793828,"holochain-sig-v0":10645796,"holochain-sig-v1":10711332}')
        },
        524: function(e, t, r) {
            "use strict";
            const n = r(43),
                s = r(355),
                i = s.MT,
                o = s.SIMPLE,
                a = s.SYMS;
            class Simple {
                constructor(e) {
                    if ("number" != typeof e) throw new Error("Invalid Simple type: " + typeof e);
                    if (e < 0 || e > 255 || (0 | e) !== e) throw new Error("value must be a small positive integer: " + e);
                    this.value = e
                }
                toString() {
                    return "simple(" + this.value + ")"
                } [n.inspect.custom](e, t) {
                    return "simple(" + this.value + ")"
                }
                inspect(e, t) {
                    return "simple(" + this.value + ")"
                }
                encodeCBOR(e) {
                    return e._pushInt(this.value, i.SIMPLE_FLOAT)
                }
                static isSimple(e) {
                    return e instanceof Simple
                }
                static decode(e, t) {
                    switch (null == t && (t = !0), e) {
                        case o.FALSE:
                            return !1;
                        case o.TRUE:
                            return !0;
                        case o.NULL:
                            return t ? null : a.NULL;
                        case o.UNDEFINED:
                            return t ? void 0 : a.UNDEFINED;
                        case -1:
                            if (!t) throw new Error("Invalid BREAK");
                            return a.BREAK;
                        default:
                            return new Simple(e)
                    }
                }
            }
            e.exports = Simple
        },
        671: function(e, t, r) {
            "use strict";
            const n = r(4249),
                s = r(1140),
                i = r(524),
                o = r(433),
                a = r(61).BigNumber,
                u = r(525),
                c = r(355),
                h = c.MT,
                l = c.NUMBYTES,
                p = (c.SIMPLE, c.SYMS),
                f = new a(-1),
                d = f.minus(new a(Number.MAX_SAFE_INTEGER.toString(16), 16)),
                g = Symbol("count"),
                b = (Symbol("pending_key"), Symbol("major type")),
                y = Symbol("error"),
                m = Symbol("not found");

            function v(e, t, r) {
                const n = [];
                return n[g] = r, n[p.PARENT] = e, n[b] = t, n
            }

            function k(e, t) {
                const r = new u;
                return r[p.PARENT] = e, r[b] = t, r
            }

            function _(e) {
                return o.bufferToBigInt(e)
            }
            const w = o.hasBigInt ? BigInt("-1") : -1;

            function E(e) {
                return w - o.bufferToBigInt(e)
            }
            class Decoder extends n {
                constructor(e) {
                    const t = (e = e || {}).tags;
                    delete e.tags;
                    const r = null != e.max_depth ? e.max_depth : -1;
                    delete e.max_depth;
                    const n = !!o.hasBigInt && !!e.bigint;
                    delete e.bigint, super(e), this.running = !0, this.max_depth = r, this.tags = t, n && (null == this.tags && (this.tags = {}), this.tags[2] = _, this.tags[3] = E)
                }
                static nullcheck(e) {
                    switch (e) {
                        case p.NULL:
                            return null;
                        case p.UNDEFINED:
                            return;
                        case m:
                            throw new Error("Value not found");
                        default:
                            return e
                    }
                }
                static decodeFirstSync(e, t) {
                    let r, n = {};
                    switch (typeof(t = t || {
                            encoding: "hex"
                        })) {
                        case "string":
                            r = t;
                            break;
                        case "object":
                            n = o.extend({}, t), r = n.encoding, delete n.encoding
                    }
                    const s = new Decoder(n),
                        i = new u(e, null != r ? r : o.guessEncoding(e)),
                        a = s._parse();
                    let c = a.next();
                    for (; !c.done;) {
                        const e = i.read(c.value);
                        if (null == e || e.length !== c.value) throw new Error("Insufficient data");
                        c = a.next(e)
                    }
                    return Decoder.nullcheck(c.value)
                }
                static decodeAllSync(e, t) {
                    let r, n = {};
                    switch (typeof(t = t || {
                            encoding: "hex"
                        })) {
                        case "string":
                            r = t;
                            break;
                        case "object":
                            n = o.extend({}, t), r = n.encoding, delete n.encoding
                    }
                    const s = new Decoder(n),
                        i = new u(e, null != r ? r : o.guessEncoding(e)),
                        a = [];
                    for (; i.length > 0;) {
                        const e = s._parse();
                        let t = e.next();
                        for (; !t.done;) {
                            const r = i.read(t.value);
                            if (null == r || r.length !== t.value) throw new Error("Insufficient data");
                            t = e.next(r)
                        }
                        a.push(Decoder.nullcheck(t.value))
                    }
                    return a
                }
                static decodeFirst(e, t, r) {
                    let n = {},
                        s = !1,
                        i = "hex";
                    switch (typeof t) {
                        case "function":
                            r = t, i = o.guessEncoding(e);
                            break;
                        case "string":
                            i = t;
                            break;
                        case "object":
                            n = o.extend({}, t), i = null != n.encoding ? n.encoding : o.guessEncoding(e), delete n.encoding, s = null != n.required && n.required, delete n.required
                    }
                    const a = new Decoder(n);
                    let u, c = m;
                    return a.on("data", e => {
                        c = Decoder.nullcheck(e), a.close()
                    }), "function" == typeof r ? (a.once("error", e => {
                        const t = c;
                        return c = y, a.close(), r(e, t)
                    }), a.once("end", () => {
                        switch (c) {
                            case m:
                                return s ? r(new Error("No CBOR found")) : r(null, c);
                            case y:
                                return;
                            default:
                                return r(null, c)
                        }
                    })) : u = new Promise((e, t) => (a.once("error", e => (c = y, a.close(), t(e))), a.once("end", () => {
                        switch (c) {
                            case m:
                                return s ? t(new Error("No CBOR found")) : e(c);
                            case y:
                                return;
                            default:
                                return e(c)
                        }
                    }))), a.end(e, i), u
                }
                static decodeAll(e, t, r) {
                    let n = {},
                        s = "hex";
                    switch (typeof t) {
                        case "function":
                            r = t, s = o.guessEncoding(e);
                            break;
                        case "string":
                            s = t;
                            break;
                        case "object":
                            n = o.extend({}, t), s = null != n.encoding ? n.encoding : o.guessEncoding(e), delete n.encoding
                    }
                    const i = new Decoder(n);
                    let a;
                    const u = [];
                    return i.on("data", e => u.push(Decoder.nullcheck(e))), "function" == typeof r ? (i.on("error", r), i.on("end", () => r(null, u))) : a = new Promise((e, t) => {
                        i.on("error", t), i.on("end", () => e(u))
                    }), i.end(e, s), a
                }
                close() {
                    this.running = !1, this.__fresh = !0
                }* _parse() {
                    let e = null,
                        t = 0,
                        r = null;
                    for (;;) {
                        if (this.max_depth >= 0 && t > this.max_depth) throw new Error("Maximum depth " + this.max_depth + " exceeded");
                        const n = (yield 1)[0];
                        if (!this.running) throw new Error("Unexpected data: 0x" + n.toString(16));
                        const c = n >> 5,
                            y = 31 & n,
                            m = null != e ? e[b] : void 0,
                            _ = null != e ? e.length : void 0;
                        switch (y) {
                            case l.ONE:
                                this.emit("more-bytes", c, 1, m, _), r = (yield 1)[0];
                                break;
                            case l.TWO:
                            case l.FOUR:
                            case l.EIGHT:
                                const e = 1 << y - 24;
                                this.emit("more-bytes", c, e, m, _);
                                const t = yield e;
                                r = c === h.SIMPLE_FLOAT ? t : o.parseCBORint(y, t);
                                break;
                            case 28:
                            case 29:
                            case 30:
                                throw this.running = !1, new Error("Additional info not implemented: " + y);
                            case l.INDEFINITE:
                                r = -1;
                                break;
                            default:
                                r = y
                        }
                        switch (c) {
                            case h.POS_INT:
                                break;
                            case h.NEG_INT:
                                r = r === Number.MAX_SAFE_INTEGER ? d : r instanceof a ? f.minus(r) : -1 - r;
                                break;
                            case h.BYTE_STRING:
                            case h.UTF8_STRING:
                                switch (r) {
                                    case 0:
                                        this.emit("start-string", c, r, m, _), r = c === h.BYTE_STRING ? Buffer.allocUnsafe(0) : "";
                                        break;
                                    case -1:
                                        this.emit("start", c, p.STREAM, m, _), e = k(e, c), t++;
                                        continue;
                                    default:
                                        this.emit("start-string", c, r, m, _), r = yield r, c === h.UTF8_STRING && (r = r.toString("utf-8"))
                                }
                                break;
                            case h.ARRAY:
                            case h.MAP:
                                switch (r) {
                                    case 0:
                                        r = c === h.MAP ? {} : [];
                                        break;
                                    case -1:
                                        this.emit("start", c, p.STREAM, m, _), e = v(e, c, -1), t++;
                                        continue;
                                    default:
                                        this.emit("start", c, r, m, _), e = v(e, c, r * (c - 3)), t++;
                                        continue
                                }
                                break;
                            case h.TAG:
                                this.emit("start", c, r, m, _), e = v(e, c, 1), e.push(r), t++;
                                continue;
                            case h.SIMPLE_FLOAT:
                                r = "number" == typeof r ? i.decode(r, null != e) : o.parseCBORfloat(r)
                        }
                        this.emit("value", r, m, _, y);
                        let w = !1;
                        for (; null != e;) {
                            switch (!1) {
                                case r !== p.BREAK:
                                    e[g] = 1;
                                    break;
                                case !Array.isArray(e):
                                    e.push(r);
                                    break;
                                case !(e instanceof u):
                                    const t = e[b];
                                    if (null != t && t !== c) throw this.running = !1, new Error("Invalid major type in indefinite encoding");
                                    e.write(r)
                            }
                            if (0 != --e[g]) {
                                w = !0;
                                break
                            }
                            if (--t, delete e[g], this.emit("stop", e[b]), Array.isArray(e)) switch (e[b]) {
                                case h.ARRAY:
                                    r = e;
                                    break;
                                case h.MAP:
                                    let t = !0;
                                    if (e.length % 2 != 0) throw new Error("Invalid map length: " + e.length);
                                    for (let r = 0, n = e.length; r < n; r += 2)
                                        if ("string" != typeof e[r]) {
                                            t = !1;
                                            break
                                        } if (t) {
                                        r = {};
                                        for (let t = 0, n = e.length; t < n; t += 2) r[e[t]] = e[t + 1]
                                    } else {
                                        r = new Map;
                                        for (let t = 0, n = e.length; t < n; t += 2) r.set(e[t], e[t + 1])
                                    }
                                    break;
                                case h.TAG:
                                    r = new s(e[0], e[1]).convert(this.tags)
                            } else if (e instanceof u) switch (e[b]) {
                                case h.BYTE_STRING:
                                    r = e.slice();
                                    break;
                                case h.UTF8_STRING:
                                    r = e.toString("utf-8")
                            }
                            const n = e;
                            e = e[p.PARENT], delete n[p.PARENT], delete n[b]
                        }
                        if (!w) return r
                    }
                }
            }
            Decoder.NOT_FOUND = m, e.exports = Decoder
        }
    }
]);