(window.webpackJsonp = window.webpackJsonp || []).push([
    [186], {
        1139: function(t, i, r) {
            "use strict";
            const e = r(61),
                n = r(670),
                h = n.SHIFT32,
                s = n.SHIFT16;
            i.parseHalf = function(t) {
                var i, r, e;
                return e = 128 & t[0] ? -1 : 1, i = (124 & t[0]) >> 2, r = (3 & t[0]) << 8 | t[1], i ? 31 === i ? e * (r ? NaN : Infinity) : e * Math.pow(2, i - 25) * (1024 + r) : 5.960464477539063e-8 * e * r
            }, i.arrayBufferToBignumber = function(t) {
                const i = t.byteLength;
                let r = "";
                for (let e = 0; e < i; e++) r += (n = t[e]) < 16 ? "0" + n.toString(16) : n.toString(16);
                var n;
                return new e(r, 16)
            }, i.buildMap = t => {
                const i = new Map,
                    r = Object.keys(t),
                    e = r.length;
                for (let n = 0; n < e; n++) i.set(r[n], t[r[n]]);
                return i
            }, i.buildInt32 = (t, i) => t * s + i, i.buildInt64 = (t, r, n, s) => {
                const u = i.buildInt32(t, r),
                    o = i.buildInt32(n, s);
                return u > 2097151 ? new e(u).times(h).plus(o) : u * h + o
            }, i.writeHalf = function(t, i) {
                const r = Buffer.allocUnsafe(4);
                r.writeFloatBE(i, 0);
                const e = r.readUInt32BE(0);
                if (0 != (8191 & e)) return !1;
                var n = e >> 16 & 32768;
                const h = e >> 23 & 255,
                    s = 8388607 & e;
                if (h >= 113 && h <= 142) n += (h - 112 << 10) + (s >> 13);
                else {
                    if (!(h >= 103 && h < 113)) return !1;
                    if (s & (1 << 126 - h) - 1) return !1;
                    n += s + 8388608 >> 126 - h
                }
                return t.writeUInt16BE(n, 0), !0
            }, i.keySorter = function(t, i) {
                var r = t[0].byteLength,
                    e = i[0].byteLength;
                return r > e ? 1 : e > r ? -1 : t[0].compare(i[0])
            }, i.isNegativeZero = t => 0 === t && 1 / t < 0, i.nextPowerOf2 = t => {
                let i = 0;
                if (t && !(t & t - 1)) return t;
                for (; 0 !== t;) t >>= 1, i += 1;
                return 1 << i
            }
        },
        2016: function(t, i, r) {
            "use strict";
            i.Diagnose = r(4235), i.Decoder = r(2017), i.Encoder = r(4238), i.Simple = r(2018), i.Tagged = r(2019), i.decodeAll = i.Decoder.decodeAll, i.decodeFirst = i.Decoder.decodeFirst, i.diagnose = i.Diagnose.diagnose, i.encode = i.Encoder.encode, i.decode = i.Decoder.decode, i.leveldb = {
                decode: i.Decoder.decodeAll,
                encode: i.Encoder.encode,
                buffer: !0,
                name: "cbor"
            }
        },
        2017: function(t, i, r) {
            "use strict";
            const e = r(2375),
                n = r(61),
                h = r(4236),
                s = r(1139),
                u = r(670),
                o = r(2018),
                a = r(2019),
                {
                    URL: l
                } = r(2020);
            class Decoder {
                constructor(t) {
                    !(t = t || {}).size || t.size < 65536 ? t.size = 65536 : t.size = s.nextPowerOf2(t.size), this._heap = new ArrayBuffer(t.size), this._heap8 = new Uint8Array(this._heap), this._buffer = Buffer.from(this._heap), this._reset(), this._knownTags = Object.assign({
                        0: t => new Date(t),
                        1: t => new Date(1e3 * t),
                        2: t => s.arrayBufferToBignumber(t),
                        3: t => u.NEG_ONE.minus(s.arrayBufferToBignumber(t)),
                        4: t => u.TEN.pow(t[0]).times(t[1]),
                        5: t => u.TWO.pow(t[0]).times(t[1]),
                        32: t => new l(t),
                        35: t => new RegExp(t)
                    }, t.tags), this.parser = h(global, {
                        log: console.log.bind(console),
                        pushInt: this.pushInt.bind(this),
                        pushInt32: this.pushInt32.bind(this),
                        pushInt32Neg: this.pushInt32Neg.bind(this),
                        pushInt64: this.pushInt64.bind(this),
                        pushInt64Neg: this.pushInt64Neg.bind(this),
                        pushFloat: this.pushFloat.bind(this),
                        pushFloatSingle: this.pushFloatSingle.bind(this),
                        pushFloatDouble: this.pushFloatDouble.bind(this),
                        pushTrue: this.pushTrue.bind(this),
                        pushFalse: this.pushFalse.bind(this),
                        pushUndefined: this.pushUndefined.bind(this),
                        pushNull: this.pushNull.bind(this),
                        pushInfinity: this.pushInfinity.bind(this),
                        pushInfinityNeg: this.pushInfinityNeg.bind(this),
                        pushNaN: this.pushNaN.bind(this),
                        pushNaNNeg: this.pushNaNNeg.bind(this),
                        pushArrayStart: this.pushArrayStart.bind(this),
                        pushArrayStartFixed: this.pushArrayStartFixed.bind(this),
                        pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this),
                        pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this),
                        pushObjectStart: this.pushObjectStart.bind(this),
                        pushObjectStartFixed: this.pushObjectStartFixed.bind(this),
                        pushObjectStartFixed32: this.pushObjectStartFixed32.bind(this),
                        pushObjectStartFixed64: this.pushObjectStartFixed64.bind(this),
                        pushByteString: this.pushByteString.bind(this),
                        pushByteStringStart: this.pushByteStringStart.bind(this),
                        pushUtf8String: this.pushUtf8String.bind(this),
                        pushUtf8StringStart: this.pushUtf8StringStart.bind(this),
                        pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this),
                        pushTagUnassigned: this.pushTagUnassigned.bind(this),
                        pushTagStart: this.pushTagStart.bind(this),
                        pushTagStart4: this.pushTagStart4.bind(this),
                        pushTagStart8: this.pushTagStart8.bind(this),
                        pushBreak: this.pushBreak.bind(this)
                    }, this._heap)
                }
                get _depth() {
                    return this._parents.length
                }
                get _currentParent() {
                    return this._parents[this._depth - 1]
                }
                get _ref() {
                    return this._currentParent.ref
                }
                _closeParent() {
                    var t = this._parents.pop();
                    if (t.length > 0) throw new Error(`Missing ${t.length} elements`);
                    switch (t.type) {
                        case u.PARENT.TAG:
                            this._push(this.createTag(t.ref[0], t.ref[1]));
                            break;
                        case u.PARENT.BYTE_STRING:
                            this._push(this.createByteString(t.ref, t.length));
                            break;
                        case u.PARENT.UTF8_STRING:
                            this._push(this.createUtf8String(t.ref, t.length));
                            break;
                        case u.PARENT.MAP:
                            if (t.values % 2 > 0) throw new Error("Odd number of elements in the map");
                            this._push(this.createMap(t.ref, t.length));
                            break;
                        case u.PARENT.OBJECT:
                            if (t.values % 2 > 0) throw new Error("Odd number of elements in the map");
                            this._push(this.createObject(t.ref, t.length));
                            break;
                        case u.PARENT.ARRAY:
                            this._push(this.createArray(t.ref, t.length))
                    }
                    this._currentParent && this._currentParent.type === u.PARENT.TAG && this._dec()
                }
                _dec() {
                    const t = this._currentParent;
                    t.length < 0 || (t.length--, 0 === t.length && this._closeParent())
                }
                _push(t, i) {
                    const r = this._currentParent;
                    switch (r.values++, r.type) {
                        case u.PARENT.ARRAY:
                        case u.PARENT.BYTE_STRING:
                        case u.PARENT.UTF8_STRING:
                            r.length > -1 ? this._ref[this._ref.length - r.length] = t : this._ref.push(t), this._dec();
                            break;
                        case u.PARENT.OBJECT:
                            null != r.tmpKey ? (this._ref[r.tmpKey] = t, r.tmpKey = null, this._dec()) : (r.tmpKey = t, "string" != typeof r.tmpKey && (r.type = u.PARENT.MAP, r.ref = s.buildMap(r.ref)));
                            break;
                        case u.PARENT.MAP:
                            null != r.tmpKey ? (this._ref.set(r.tmpKey, t), r.tmpKey = null, this._dec()) : r.tmpKey = t;
                            break;
                        case u.PARENT.TAG:
                            this._ref.push(t), i || this._dec();
                            break;
                        default:
                            throw new Error("Unknown parent type")
                    }
                }
                _createParent(t, i, r) {
                    this._parents[this._depth] = {
                        type: i,
                        length: r,
                        ref: t,
                        values: 0,
                        tmpKey: null
                    }
                }
                _reset() {
                    this._res = [], this._parents = [{
                        type: u.PARENT.ARRAY,
                        length: -1,
                        ref: this._res,
                        values: 0,
                        tmpKey: null
                    }]
                }
                createTag(t, i) {
                    const r = this._knownTags[t];
                    return r ? r(i) : new a(t, i)
                }
                createMap(t, i) {
                    return t
                }
                createObject(t, i) {
                    return t
                }
                createArray(t, i) {
                    return t
                }
                createByteString(t, i) {
                    return Buffer.concat(t)
                }
                createByteStringFromHeap(t, i) {
                    return t === i ? Buffer.alloc(0) : Buffer.from(this._heap.slice(t, i))
                }
                createInt(t) {
                    return t
                }
                createInt32(t, i) {
                    return s.buildInt32(t, i)
                }
                createInt64(t, i, r, e) {
                    return s.buildInt64(t, i, r, e)
                }
                createFloat(t) {
                    return t
                }
                createFloatSingle(t, i, r, n) {
                    return e.read([t, i, r, n], 0, !1, 23, 4)
                }
                createFloatDouble(t, i, r, n, h, s, u, o) {
                    return e.read([t, i, r, n, h, s, u, o], 0, !1, 52, 8)
                }
                createInt32Neg(t, i) {
                    return -1 - s.buildInt32(t, i)
                }
                createInt64Neg(t, i, r, e) {
                    const h = s.buildInt32(t, i),
                        o = s.buildInt32(r, e);
                    return h > u.MAX_SAFE_HIGH ? u.NEG_ONE.minus(new n(h).times(u.SHIFT32).plus(o)) : -1 - (h * u.SHIFT32 + o)
                }
                createTrue() {
                    return !0
                }
                createFalse() {
                    return !1
                }
                createNull() {
                    return null
                }
                createUndefined() {}
                createInfinity() {
                    return 1 / 0
                }
                createInfinityNeg() {
                    return -1 / 0
                }
                createNaN() {
                    return NaN
                }
                createNaNNeg() {
                    return NaN
                }
                createUtf8String(t, i) {
                    return t.join("")
                }
                createUtf8StringFromHeap(t, i) {
                    return t === i ? "" : this._buffer.toString("utf8", t, i)
                }
                createSimpleUnassigned(t) {
                    return new o(t)
                }
                pushInt(t) {
                    this._push(this.createInt(t))
                }
                pushInt32(t, i) {
                    this._push(this.createInt32(t, i))
                }
                pushInt64(t, i, r, e) {
                    this._push(this.createInt64(t, i, r, e))
                }
                pushFloat(t) {
                    this._push(this.createFloat(t))
                }
                pushFloatSingle(t, i, r, e) {
                    this._push(this.createFloatSingle(t, i, r, e))
                }
                pushFloatDouble(t, i, r, e, n, h, s, u) {
                    this._push(this.createFloatDouble(t, i, r, e, n, h, s, u))
                }
                pushInt32Neg(t, i) {
                    this._push(this.createInt32Neg(t, i))
                }
                pushInt64Neg(t, i, r, e) {
                    this._push(this.createInt64Neg(t, i, r, e))
                }
                pushTrue() {
                    this._push(this.createTrue())
                }
                pushFalse() {
                    this._push(this.createFalse())
                }
                pushNull() {
                    this._push(this.createNull())
                }
                pushUndefined() {
                    this._push(this.createUndefined())
                }
                pushInfinity() {
                    this._push(this.createInfinity())
                }
                pushInfinityNeg() {
                    this._push(this.createInfinityNeg())
                }
                pushNaN() {
                    this._push(this.createNaN())
                }
                pushNaNNeg() {
                    this._push(this.createNaNNeg())
                }
                pushArrayStart() {
                    this._createParent([], u.PARENT.ARRAY, -1)
                }
                pushArrayStartFixed(t) {
                    this._createArrayStartFixed(t)
                }
                pushArrayStartFixed32(t, i) {
                    const r = s.buildInt32(t, i);
                    this._createArrayStartFixed(r)
                }
                pushArrayStartFixed64(t, i, r, e) {
                    const n = s.buildInt64(t, i, r, e);
                    this._createArrayStartFixed(n)
                }
                pushObjectStart() {
                    this._createObjectStartFixed(-1)
                }
                pushObjectStartFixed(t) {
                    this._createObjectStartFixed(t)
                }
                pushObjectStartFixed32(t, i) {
                    const r = s.buildInt32(t, i);
                    this._createObjectStartFixed(r)
                }
                pushObjectStartFixed64(t, i, r, e) {
                    const n = s.buildInt64(t, i, r, e);
                    this._createObjectStartFixed(n)
                }
                pushByteStringStart() {
                    this._parents[this._depth] = {
                        type: u.PARENT.BYTE_STRING,
                        length: -1,
                        ref: [],
                        values: 0,
                        tmpKey: null
                    }
                }
                pushByteString(t, i) {
                    this._push(this.createByteStringFromHeap(t, i))
                }
                pushUtf8StringStart() {
                    this._parents[this._depth] = {
                        type: u.PARENT.UTF8_STRING,
                        length: -1,
                        ref: [],
                        values: 0,
                        tmpKey: null
                    }
                }
                pushUtf8String(t, i) {
                    this._push(this.createUtf8StringFromHeap(t, i))
                }
                pushSimpleUnassigned(t) {
                    this._push(this.createSimpleUnassigned(t))
                }
                pushTagStart(t) {
                    this._parents[this._depth] = {
                        type: u.PARENT.TAG,
                        length: 1,
                        ref: [t]
                    }
                }
                pushTagStart4(t, i) {
                    this.pushTagStart(s.buildInt32(t, i))
                }
                pushTagStart8(t, i, r, e) {
                    this.pushTagStart(s.buildInt64(t, i, r, e))
                }
                pushTagUnassigned(t) {
                    this._push(this.createTag(t))
                }
                pushBreak() {
                    if (this._currentParent.length > -1) throw new Error("Unexpected break");
                    this._closeParent()
                }
                _createObjectStartFixed(t) {
                    0 !== t ? this._createParent({}, u.PARENT.OBJECT, t) : this._push(this.createObject({}))
                }
                _createArrayStartFixed(t) {
                    0 !== t ? this._createParent(new Array(t), u.PARENT.ARRAY, t) : this._push(this.createArray([]))
                }
                _decode(t) {
                    if (0 === t.byteLength) throw new Error("Input too short");
                    this._reset(), this._heap8.set(t);
                    const i = this.parser.parse(t.byteLength);
                    if (this._depth > 1) {
                        for (; 0 === this._currentParent.length;) this._closeParent();
                        if (this._depth > 1) throw new Error("Undeterminated nesting")
                    }
                    if (i > 0) throw new Error("Failed to parse");
                    if (0 === this._res.length) throw new Error("No valid result")
                }
                decodeFirst(t) {
                    return this._decode(t), this._res[0]
                }
                decodeAll(t) {
                    return this._decode(t), this._res
                }
                static decode(t, i) {
                    "string" == typeof t && (t = Buffer.from(t, i || "hex"));
                    return new Decoder({
                        size: t.length
                    }).decodeFirst(t)
                }
                static decodeAll(t, i) {
                    "string" == typeof t && (t = Buffer.from(t, i || "hex"));
                    return new Decoder({
                        size: t.length
                    }).decodeAll(t)
                }
            }
            Decoder.decodeFirst = Decoder.decode, t.exports = Decoder
        },
        2018: function(t, i, r) {
            "use strict";
            const e = r(670),
                n = e.MT,
                h = e.SIMPLE,
                s = e.SYMS;
            class Simple {
                constructor(t) {
                    if ("number" != typeof t) throw new Error("Invalid Simple type: " + typeof t);
                    if (t < 0 || t > 255 || (0 | t) !== t) throw new Error("value must be a small positive integer: " + t);
                    this.value = t
                }
                toString() {
                    return "simple(" + this.value + ")"
                }
                inspect() {
                    return "simple(" + this.value + ")"
                }
                encodeCBOR(t) {
                    return t._pushInt(this.value, n.SIMPLE_FLOAT)
                }
                static isSimple(t) {
                    return t instanceof Simple
                }
                static decode(t, i) {
                    switch (null == i && (i = !0), t) {
                        case h.FALSE:
                            return !1;
                        case h.TRUE:
                            return !0;
                        case h.NULL:
                            return i ? null : s.NULL;
                        case h.UNDEFINED:
                            return i ? void 0 : s.UNDEFINED;
                        case -1:
                            if (!i) throw new Error("Invalid BREAK");
                            return s.BREAK;
                        default:
                            return new Simple(t)
                    }
                }
            }
            t.exports = Simple
        },
        2019: function(t, i, r) {
            "use strict";
            class Tagged {
                constructor(t, i, r) {
                    if (this.tag = t, this.value = i, this.err = r, "number" != typeof this.tag) throw new Error("Invalid tag type (" + typeof this.tag + ")");
                    if (this.tag < 0 || (0 | this.tag) !== this.tag) throw new Error("Tag must be a positive integer: " + this.tag)
                }
                toString() {
                    return `${this.tag}(${JSON.stringify(this.value)})`
                }
                encodeCBOR(t) {
                    return t._pushTag(this.tag), t.pushAny(this.value)
                }
                convert(t) {
                    var i, r;
                    if ("function" != typeof(r = null != t ? t[this.tag] : void 0) && "function" != typeof(r = Tagged["_tag" + this.tag])) return this;
                    try {
                        return r.call(Tagged, this.value)
                    } catch (t) {
                        return i = t, this.err = i, this
                    }
                }
            }
            t.exports = Tagged
        },
        2020: function(t, i, r) {
            "use strict";
            const {
                URLWithLegacySupport: e,
                format: n,
                URLSearchParams: h,
                defaultBase: s
            } = r(2021), u = r(4237);
            t.exports = {
                URL: e,
                URLSearchParams: h,
                format: n,
                relative: u,
                defaultBase: s
            }
        },
        2021: function(t, i, r) {
            "use strict";
            const e = self.location ? self.location.protocol + "//" + self.location.host : "",
                n = self.URL;
            t.exports = {
                URLWithLegacySupport: class URLWithLegacySupport {
                    constructor(t = "", i = e) {
                        this.super = new n(t, i), this.path = this.pathname + this.search, this.auth = this.username && this.password ? this.username + ":" + this.password : null, this.query = this.search && this.search.startsWith("?") ? this.search.slice(1) : null
                    }
                    get hash() {
                        return this.super.hash
                    }
                    get host() {
                        return this.super.host
                    }
                    get hostname() {
                        return this.super.hostname
                    }
                    get href() {
                        return this.super.href
                    }
                    get origin() {
                        return this.super.origin
                    }
                    get password() {
                        return this.super.password
                    }
                    get pathname() {
                        return this.super.pathname
                    }
                    get port() {
                        return this.super.port
                    }
                    get protocol() {
                        return this.super.protocol
                    }
                    get search() {
                        return this.super.search
                    }
                    get searchParams() {
                        return this.super.searchParams
                    }
                    get username() {
                        return this.super.username
                    }
                    set hash(t) {
                        this.super.hash = t
                    }
                    set host(t) {
                        this.super.host = t
                    }
                    set hostname(t) {
                        this.super.hostname = t
                    }
                    set href(t) {
                        this.super.href = t
                    }
                    set origin(t) {
                        this.super.origin = t
                    }
                    set password(t) {
                        this.super.password = t
                    }
                    set pathname(t) {
                        this.super.pathname = t
                    }
                    set port(t) {
                        this.super.port = t
                    }
                    set protocol(t) {
                        this.super.protocol = t
                    }
                    set search(t) {
                        this.super.search = t
                    }
                    set searchParams(t) {
                        this.super.searchParams = t
                    }
                    set username(t) {
                        this.super.username = t
                    }
                    createObjectURL(t) {
                        return this.super.createObjectURL(t)
                    }
                    revokeObjectURL(t) {
                        this.super.revokeObjectURL(t)
                    }
                    toJSON() {
                        return this.super.toJSON()
                    }
                    toString() {
                        return this.super.toString()
                    }
                    format() {
                        return this.toString()
                    }
                },
                URLSearchParams: self.URLSearchParams,
                defaultBase: e,
                format: function(t) {
                    if ("string" == typeof t) {
                        return new n(t).toString()
                    }
                    if (!(t instanceof n)) {
                        const i = t.username && t.password ? `${t.username}:${t.password}@` : "",
                            r = t.auth ? t.auth + "@" : "",
                            e = t.port ? ":" + t.port : "",
                            n = t.protocol ? t.protocol + "//" : "",
                            h = t.host || "",
                            s = t.hostname || "",
                            u = t.search || (t.query ? "?" + t.query : ""),
                            o = t.hash || "",
                            a = t.pathname || "";
                        return `${n}${i||r}${h||s+e}${t.path||a+u}${o}`
                    }
                }
            }
        },
        291: function(t, i, r) {
            "use strict";
            var e = this && this.__createBinding || (Object.create ? function(t, i, r, e) {
                    void 0 === e && (e = r), Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: function() {
                            return i[r]
                        }
                    })
                } : function(t, i, r, e) {
                    void 0 === e && (e = r), t[e] = i[r]
                }),
                n = this && this.__setModuleDefault || (Object.create ? function(t, i) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: i
                    })
                } : function(t, i) {
                    t.default = i
                }),
                h = this && this.__decorate || function(t, i, r, e) {
                    var n, h = arguments.length,
                        s = h < 3 ? i : null === e ? e = Object.getOwnPropertyDescriptor(i, r) : e;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, i, r, e);
                    else
                        for (var u = t.length - 1; u >= 0; u--)(n = t[u]) && (s = (h < 3 ? n(s) : h > 3 ? n(i, r, s) : n(i, r)) || s);
                    return h > 3 && s && Object.defineProperty(i, r, s), s
                },
                s = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var i = {};
                    if (null != t)
                        for (var r in t) "default" !== r && Object.hasOwnProperty.call(t, r) && e(i, t, r);
                    return n(i, t), i
                },
                u = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.deserializeUnchecked = i.deserialize = i.serialize = i.BinaryReader = i.BinaryWriter = i.BorshError = i.baseDecode = i.baseEncode = void 0;
            const o = u(r(3648)),
                a = u(r(84)),
                l = s(r(1076)),
                f = new("function" != typeof global.TextDecoder ? l.TextDecoder : global.TextDecoder)("utf-8", {
                    fatal: !0
                });
            i.baseEncode = function(t) {
                return "string" == typeof t && (t = Buffer.from(t, "utf8")), a.default.encode(Buffer.from(t))
            }, i.baseDecode = function(t) {
                return Buffer.from(a.default.decode(t))
            };
            class BorshError extends Error {
                constructor(t) {
                    super(t), this.fieldPath = [], this.originalMessage = t
                }
                addToFieldPath(t) {
                    this.fieldPath.splice(0, 0, t), this.message = this.originalMessage + ": " + this.fieldPath.join(".")
                }
            }
            i.BorshError = BorshError;
            class BinaryWriter {
                constructor() {
                    this.buf = Buffer.alloc(1024), this.length = 0
                }
                maybeResize() {
                    this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(1024)]))
                }
                writeU8(t) {
                    this.maybeResize(), this.buf.writeUInt8(t, this.length), this.length += 1
                }
                writeU16(t) {
                    this.maybeResize(), this.buf.writeUInt16LE(t, this.length), this.length += 2
                }
                writeU32(t) {
                    this.maybeResize(), this.buf.writeUInt32LE(t, this.length), this.length += 4
                }
                writeU64(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new o.default(t).toArray("le", 8)))
                }
                writeU128(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new o.default(t).toArray("le", 16)))
                }
                writeU256(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new o.default(t).toArray("le", 32)))
                }
                writeU512(t) {
                    this.maybeResize(), this.writeBuffer(Buffer.from(new o.default(t).toArray("le", 64)))
                }
                writeBuffer(t) {
                    this.buf = Buffer.concat([Buffer.from(this.buf.subarray(0, this.length)), t, Buffer.alloc(1024)]), this.length += t.length
                }
                writeString(t) {
                    this.maybeResize();
                    const i = Buffer.from(t, "utf8");
                    this.writeU32(i.length), this.writeBuffer(i)
                }
                writeFixedArray(t) {
                    this.writeBuffer(Buffer.from(t))
                }
                writeArray(t, i) {
                    this.maybeResize(), this.writeU32(t.length);
                    for (const r of t) this.maybeResize(), i(r)
                }
                toArray() {
                    return this.buf.subarray(0, this.length)
                }
            }

            function p(t, i, r) {
                const e = r.value;
                r.value = function(...t) {
                    try {
                        return e.apply(this, t)
                    } catch (t) {
                        if (t instanceof RangeError) {
                            const i = t.code;
                            if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(i) >= 0) throw new BorshError("Reached the end of buffer when deserializing")
                        }
                        throw t
                    }
                }
            }
            i.BinaryWriter = BinaryWriter;
            class BinaryReader {
                constructor(t) {
                    this.buf = t, this.offset = 0
                }
                readU8() {
                    const t = this.buf.readUInt8(this.offset);
                    return this.offset += 1, t
                }
                readU16() {
                    const t = this.buf.readUInt16LE(this.offset);
                    return this.offset += 2, t
                }
                readU32() {
                    const t = this.buf.readUInt32LE(this.offset);
                    return this.offset += 4, t
                }
                readU64() {
                    const t = this.readBuffer(8);
                    return new o.default(t, "le")
                }
                readU128() {
                    const t = this.readBuffer(16);
                    return new o.default(t, "le")
                }
                readU256() {
                    const t = this.readBuffer(32);
                    return new o.default(t, "le")
                }
                readU512() {
                    const t = this.readBuffer(64);
                    return new o.default(t, "le")
                }
                readBuffer(t) {
                    if (this.offset + t > this.buf.length) throw new BorshError(`Expected buffer length ${t} isn't within bounds`);
                    const i = this.buf.slice(this.offset, this.offset + t);
                    return this.offset += t, i
                }
                readString() {
                    const t = this.readU32(),
                        i = this.readBuffer(t);
                    try {
                        return f.decode(i)
                    } catch (t) {
                        throw new BorshError("Error decoding UTF-8 string: " + t)
                    }
                }
                readFixedArray(t) {
                    return new Uint8Array(this.readBuffer(t))
                }
                readArray(t) {
                    const i = this.readU32(),
                        r = Array();
                    for (let e = 0; e < i; ++e) r.push(t());
                    return r
                }
            }

            function m(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }

            function d(t, i, r, e, n) {
                try {
                    if ("string" == typeof e) n["write" + m(e)](r);
                    else if (e instanceof Array)
                        if ("number" == typeof e[0]) {
                            if (r.length !== e[0]) throw new BorshError(`Expecting byte array of length ${e[0]}, but got ${r.length} bytes`);
                            n.writeFixedArray(r)
                        } else if (2 === e.length && "number" == typeof e[1]) {
                        if (r.length !== e[1]) throw new BorshError(`Expecting byte array of length ${e[1]}, but got ${r.length} bytes`);
                        for (let i = 0; i < e[1]; i++) d(t, null, r[i], e[0], n)
                    } else n.writeArray(r, r => {
                        d(t, i, r, e[0], n)
                    });
                    else if (void 0 !== e.kind) switch (e.kind) {
                        case "option":
                            null == r ? n.writeU8(0) : (n.writeU8(1), d(t, i, r, e.type, n));
                            break;
                        default:
                            throw new BorshError(`FieldType ${e} unrecognized`)
                    } else c(t, r, n)
                } catch (t) {
                    throw t instanceof BorshError && t.addToFieldPath(i), t
                }
            }

            function c(t, i, r) {
                if ("function" == typeof i.borshSerialize) return void i.borshSerialize(r);
                const e = t.get(i.constructor);
                if (!e) throw new BorshError(`Class ${i.constructor.name} is missing in schema`);
                if ("struct" === e.kind) e.fields.map(([e, n]) => {
                    d(t, e, i[e], n, r)
                });
                else {
                    if ("enum" !== e.kind) throw new BorshError(`Unexpected schema kind: ${e.kind} for ${i.constructor.name}`);
                    {
                        const n = i[e.field];
                        for (let h = 0; h < e.values.length; ++h) {
                            const [s, u] = e.values[h];
                            if (s === n) {
                                r.writeU8(h), d(t, s, i[s], u, r);
                                break
                            }
                        }
                    }
                }
            }

            function g(t, i, r, e) {
                try {
                    if ("string" == typeof r) return e["read" + m(r)]();
                    if (r instanceof Array) {
                        if ("number" == typeof r[0]) return e.readFixedArray(r[0]);
                        if ("number" == typeof r[1]) {
                            const i = [];
                            for (let n = 0; n < r[1]; n++) i.push(g(t, null, r[0], e));
                            return i
                        }
                        return e.readArray(() => g(t, i, r[0], e))
                    }
                    if ("option" === r.kind) {
                        return e.readU8() ? g(t, i, r.type, e) : void 0
                    }
                    return M(t, r, e)
                } catch (t) {
                    throw t instanceof BorshError && t.addToFieldPath(i), t
                }
            }

            function M(t, i, r) {
                if ("function" == typeof i.borshDeserialize) return i.borshDeserialize(r);
                const e = t.get(i);
                if (!e) throw new BorshError(`Class ${i.name} is missing in schema`);
                if ("struct" === e.kind) {
                    const e = {};
                    for (const [n, h] of t.get(i).fields) e[n] = g(t, n, h, r);
                    return new i(e)
                }
                if ("enum" === e.kind) {
                    const n = r.readU8();
                    if (n >= e.values.length) throw new BorshError(`Enum index: ${n} is out of range`);
                    const [h, s] = e.values[n];
                    return new i({
                        [h]: g(t, h, s, r)
                    })
                }
                throw new BorshError(`Unexpected schema kind: ${e.kind} for ${i.constructor.name}`)
            }
            h([p], BinaryReader.prototype, "readU8", null), h([p], BinaryReader.prototype, "readU16", null), h([p], BinaryReader.prototype, "readU32", null), h([p], BinaryReader.prototype, "readU64", null), h([p], BinaryReader.prototype, "readU128", null), h([p], BinaryReader.prototype, "readU256", null), h([p], BinaryReader.prototype, "readU512", null), h([p], BinaryReader.prototype, "readString", null), h([p], BinaryReader.prototype, "readFixedArray", null), h([p], BinaryReader.prototype, "readArray", null), i.BinaryReader = BinaryReader, i.serialize = function(t, i, r = BinaryWriter) {
                const e = new r;
                return c(t, i, e), e.toArray()
            }, i.deserialize = function(t, i, r, e = BinaryReader) {
                const n = new e(r),
                    h = M(t, i, n);
                if (n.offset < r.length) throw new BorshError(`Unexpected ${r.length-n.offset} bytes after deserialized data`);
                return h
            }, i.deserializeUnchecked = function(t, i, r, e = BinaryReader) {
                return M(t, i, new e(r))
            }
        },
        35: function(t, i, r) {
            (function(t) {
                ! function(t, i) {
                    "use strict";

                    function e(t, i) {
                        if (!t) throw new Error(i || "Assertion failed")
                    }

                    function n(t, i) {
                        t.super_ = i;
                        var r = function() {};
                        r.prototype = i.prototype, t.prototype = new r, t.prototype.constructor = t
                    }

                    function h(t, i, r) {
                        if (h.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== i && "be" !== i || (r = i, i = 10), this._init(t || 0, i || 10, r || "be"))
                    }
                    var s;
                    "object" == typeof t ? t.exports = h : i.BN = h, h.BN = h, h.wordSize = 26;
                    try {
                        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(12).Buffer
                    } catch (t) {}

                    function u(t, i) {
                        var r = t.charCodeAt(i);
                        return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                    }

                    function o(t, i, r) {
                        var e = u(t, r);
                        return r - 1 >= i && (e |= u(t, r - 1) << 4), e
                    }

                    function a(t, i, r, e) {
                        for (var n = 0, h = Math.min(t.length, r), s = i; s < h; s++) {
                            var u = t.charCodeAt(s) - 48;
                            n *= e, n += u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u
                        }
                        return n
                    }
                    h.isBN = function(t) {
                        return t instanceof h || null !== t && "object" == typeof t && t.constructor.wordSize === h.wordSize && Array.isArray(t.words)
                    }, h.max = function(t, i) {
                        return t.cmp(i) > 0 ? t : i
                    }, h.min = function(t, i) {
                        return t.cmp(i) < 0 ? t : i
                    }, h.prototype._init = function(t, i, r) {
                        if ("number" == typeof t) return this._initNumber(t, i, r);
                        if ("object" == typeof t) return this._initArray(t, i, r);
                        "hex" === i && (i = 16), e(i === (0 | i) && i >= 2 && i <= 36);
                        var n = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === i ? this._parseHex(t, n, r) : (this._parseBase(t, i, n), "le" === r && this._initArray(this.toArray(), i, r)))
                    }, h.prototype._initNumber = function(t, i, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (e(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), i, r)
                    }, h.prototype._initArray = function(t, i, r) {
                        if (e("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var h, s, u = 0;
                        if ("be" === r)
                            for (n = t.length - 1, h = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[h] |= s << u & 67108863, this.words[h + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, h++);
                        else if ("le" === r)
                            for (n = 0, h = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[h] |= s << u & 67108863, this.words[h + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, h++);
                        return this.strip()
                    }, h.prototype._parseHex = function(t, i, r) {
                        this.length = Math.ceil((t.length - i) / 6), this.words = new Array(this.length);
                        for (var e = 0; e < this.length; e++) this.words[e] = 0;
                        var n, h = 0,
                            s = 0;
                        if ("be" === r)
                            for (e = t.length - 1; e >= i; e -= 2) n = o(t, i, e) << h, this.words[s] |= 67108863 & n, h >= 18 ? (h -= 18, s += 1, this.words[s] |= n >>> 26) : h += 8;
                        else
                            for (e = (t.length - i) % 2 == 0 ? i + 1 : i; e < t.length; e += 2) n = o(t, i, e) << h, this.words[s] |= 67108863 & n, h >= 18 ? (h -= 18, s += 1, this.words[s] |= n >>> 26) : h += 8;
                        this.strip()
                    }, h.prototype._parseBase = function(t, i, r) {
                        this.words = [0], this.length = 1;
                        for (var e = 0, n = 1; n <= 67108863; n *= i) e++;
                        e--, n = n / i | 0;
                        for (var h = t.length - r, s = h % e, u = Math.min(h, h - s) + r, o = 0, l = r; l < u; l += e) o = a(t, l, l + e, i), this.imuln(n), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o);
                        if (0 !== s) {
                            var f = 1;
                            for (o = a(t, l, t.length, i), l = 0; l < s; l++) f *= i;
                            this.imuln(f), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o)
                        }
                        this.strip()
                    }, h.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, h.prototype.clone = function() {
                        var t = new h(null);
                        return this.copy(t), t
                    }, h.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, h.prototype.strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, h.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, h.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function m(t, i, r) {
                        r.negative = i.negative ^ t.negative;
                        var e = t.length + i.length | 0;
                        r.length = e, e = e - 1 | 0;
                        var n = 0 | t.words[0],
                            h = 0 | i.words[0],
                            s = n * h,
                            u = 67108863 & s,
                            o = s / 67108864 | 0;
                        r.words[0] = u;
                        for (var a = 1; a < e; a++) {
                            for (var l = o >>> 26, f = 67108863 & o, p = Math.min(a, i.length - 1), m = Math.max(0, a - t.length + 1); m <= p; m++) {
                                var d = a - m | 0;
                                l += (s = (n = 0 | t.words[d]) * (h = 0 | i.words[m]) + f) / 67108864 | 0, f = 67108863 & s
                            }
                            r.words[a] = 0 | f, o = 0 | l
                        }
                        return 0 !== o ? r.words[a] = 0 | o : r.length--, r.strip()
                    }
                    h.prototype.toString = function(t, i) {
                        var r;
                        if (i = 0 | i || 1, 16 === (t = t || 10) || "hex" === t) {
                            r = "";
                            for (var n = 0, h = 0, s = 0; s < this.length; s++) {
                                var u = this.words[s],
                                    o = (16777215 & (u << n | h)).toString(16);
                                r = 0 !== (h = u >>> 24 - n & 16777215) || s !== this.length - 1 ? l[6 - o.length] + o + r : o + r, (n += 2) >= 26 && (n -= 26, s--)
                            }
                            for (0 !== h && (r = h.toString(16) + r); r.length % i != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var a = f[t],
                                m = p[t];
                            r = "";
                            var d = this.clone();
                            for (d.negative = 0; !d.isZero();) {
                                var c = d.modn(m).toString(t);
                                r = (d = d.idivn(m)).isZero() ? c + r : l[a - c.length] + c + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % i != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        e(!1, "Base should be between 2 and 36")
                    }, h.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && e(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, h.prototype.toJSON = function() {
                        return this.toString(16)
                    }, h.prototype.toBuffer = function(t, i) {
                        return e(void 0 !== s), this.toArrayLike(s, t, i)
                    }, h.prototype.toArray = function(t, i) {
                        return this.toArrayLike(Array, t, i)
                    }, h.prototype.toArrayLike = function(t, i, r) {
                        var n = this.byteLength(),
                            h = r || Math.max(1, n);
                        e(n <= h, "byte array longer than desired length"), e(h > 0, "Requested array length <= 0"), this.strip();
                        var s, u, o = "le" === i,
                            a = new t(h),
                            l = this.clone();
                        if (o) {
                            for (u = 0; !l.isZero(); u++) s = l.andln(255), l.iushrn(8), a[u] = s;
                            for (; u < h; u++) a[u] = 0
                        } else {
                            for (u = 0; u < h - n; u++) a[u] = 0;
                            for (u = 0; !l.isZero(); u++) s = l.andln(255), l.iushrn(8), a[h - u - 1] = s
                        }
                        return a
                    }, Math.clz32 ? h.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : h.prototype._countBits = function(t) {
                        var i = t,
                            r = 0;
                        return i >= 4096 && (r += 13, i >>>= 13), i >= 64 && (r += 7, i >>>= 7), i >= 8 && (r += 4, i >>>= 4), i >= 2 && (r += 2, i >>>= 2), r + i
                    }, h.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var i = t,
                            r = 0;
                        return 0 == (8191 & i) && (r += 13, i >>>= 13), 0 == (127 & i) && (r += 7, i >>>= 7), 0 == (15 & i) && (r += 4, i >>>= 4), 0 == (3 & i) && (r += 2, i >>>= 2), 0 == (1 & i) && r++, r
                    }, h.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            i = this._countBits(t);
                        return 26 * (this.length - 1) + i
                    }, h.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, i = 0; i < this.length; i++) {
                            var r = this._zeroBits(this.words[i]);
                            if (t += r, 26 !== r) break
                        }
                        return t
                    }, h.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, h.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, h.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, h.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, h.prototype.neg = function() {
                        return this.clone().ineg()
                    }, h.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, h.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] | t.words[i];
                        return this.strip()
                    }, h.prototype.ior = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuor(t)
                    }, h.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, h.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, h.prototype.iuand = function(t) {
                        var i;
                        i = this.length > t.length ? t : this;
                        for (var r = 0; r < i.length; r++) this.words[r] = this.words[r] & t.words[r];
                        return this.length = i.length, this.strip()
                    }, h.prototype.iand = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuand(t)
                    }, h.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, h.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, h.prototype.iuxor = function(t) {
                        var i, r;
                        this.length > t.length ? (i = this, r = t) : (i = t, r = this);
                        for (var e = 0; e < r.length; e++) this.words[e] = i.words[e] ^ r.words[e];
                        if (this !== i)
                            for (; e < i.length; e++) this.words[e] = i.words[e];
                        return this.length = i.length, this.strip()
                    }, h.prototype.ixor = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, h.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, h.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, h.prototype.inotn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i = 0 | Math.ceil(t / 26),
                            r = t % 26;
                        this._expand(i), r > 0 && i--;
                        for (var n = 0; n < i; n++) this.words[n] = 67108863 & ~this.words[n];
                        return r > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - r), this.strip()
                    }, h.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, h.prototype.setn = function(t, i) {
                        e("number" == typeof t && t >= 0);
                        var r = t / 26 | 0,
                            n = t % 26;
                        return this._expand(r + 1), this.words[r] = i ? this.words[r] | 1 << n : this.words[r] & ~(1 << n), this.strip()
                    }, h.prototype.iadd = function(t) {
                        var i, r, e;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, i = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, i = this.isub(t), t.negative = 1, i._normSign();
                        this.length > t.length ? (r = this, e = t) : (r = t, e = this);
                        for (var n = 0, h = 0; h < e.length; h++) i = (0 | r.words[h]) + (0 | e.words[h]) + n, this.words[h] = 67108863 & i, n = i >>> 26;
                        for (; 0 !== n && h < r.length; h++) i = (0 | r.words[h]) + n, this.words[h] = 67108863 & i, n = i >>> 26;
                        if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                        else if (r !== this)
                            for (; h < r.length; h++) this.words[h] = r.words[h];
                        return this
                    }, h.prototype.add = function(t) {
                        var i;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, i = this.sub(t), t.negative ^= 1, i) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, i = t.sub(this), this.negative = 1, i) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, h.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var i = this.iadd(t);
                            return t.negative = 1, i._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var r, e, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        n > 0 ? (r = this, e = t) : (r = t, e = this);
                        for (var h = 0, s = 0; s < e.length; s++) h = (i = (0 | r.words[s]) - (0 | e.words[s]) + h) >> 26, this.words[s] = 67108863 & i;
                        for (; 0 !== h && s < r.length; s++) h = (i = (0 | r.words[s]) + h) >> 26, this.words[s] = 67108863 & i;
                        if (0 === h && s < r.length && r !== this)
                            for (; s < r.length; s++) this.words[s] = r.words[s];
                        return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip()
                    }, h.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var d = function(t, i, r) {
                        var e, n, h, s = t.words,
                            u = i.words,
                            o = r.words,
                            a = 0,
                            l = 0 | s[0],
                            f = 8191 & l,
                            p = l >>> 13,
                            m = 0 | s[1],
                            d = 8191 & m,
                            c = m >>> 13,
                            g = 0 | s[2],
                            M = 8191 & g,
                            v = g >>> 13,
                            w = 0 | s[3],
                            y = 8191 & w,
                            b = w >>> 13,
                            _ = 0 | s[4],
                            S = 8191 & _,
                            A = _ >>> 13,
                            B = 0 | s[5],
                            N = 8191 & B,
                            E = B >>> 13,
                            I = 0 | s[6],
                            T = 8191 & I,
                            R = I >>> 13,
                            U = 0 | s[7],
                            F = 8191 & U,
                            x = U >>> 13,
                            k = 0 | s[8],
                            O = 8191 & k,
                            L = k >>> 13,
                            P = 0 | s[9],
                            D = 8191 & P,
                            j = P >>> 13,
                            z = 0 | u[0],
                            Z = 8191 & z,
                            q = z >>> 13,
                            G = 0 | u[1],
                            $ = 8191 & G,
                            H = G >>> 13,
                            C = 0 | u[2],
                            K = 8191 & C,
                            Y = C >>> 13,
                            W = 0 | u[3],
                            J = 8191 & W,
                            X = W >>> 13,
                            Q = 0 | u[4],
                            V = 8191 & Q,
                            tt = Q >>> 13,
                            it = 0 | u[5],
                            rt = 8191 & it,
                            et = it >>> 13,
                            nt = 0 | u[6],
                            ht = 8191 & nt,
                            st = nt >>> 13,
                            ut = 0 | u[7],
                            ot = 8191 & ut,
                            at = ut >>> 13,
                            lt = 0 | u[8],
                            ft = 8191 & lt,
                            pt = lt >>> 13,
                            mt = 0 | u[9],
                            dt = 8191 & mt,
                            ct = mt >>> 13;
                        r.negative = t.negative ^ i.negative, r.length = 19;
                        var gt = (a + (e = Math.imul(f, Z)) | 0) + ((8191 & (n = (n = Math.imul(f, q)) + Math.imul(p, Z) | 0)) << 13) | 0;
                        a = ((h = Math.imul(p, q)) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, e = Math.imul(d, Z), n = (n = Math.imul(d, q)) + Math.imul(c, Z) | 0, h = Math.imul(c, q);
                        var Mt = (a + (e = e + Math.imul(f, $) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, H) | 0) + Math.imul(p, $) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, H) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, e = Math.imul(M, Z), n = (n = Math.imul(M, q)) + Math.imul(v, Z) | 0, h = Math.imul(v, q), e = e + Math.imul(d, $) | 0, n = (n = n + Math.imul(d, H) | 0) + Math.imul(c, $) | 0, h = h + Math.imul(c, H) | 0;
                        var vt = (a + (e = e + Math.imul(f, K) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, Y) | 0) + Math.imul(p, K) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, Y) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, e = Math.imul(y, Z), n = (n = Math.imul(y, q)) + Math.imul(b, Z) | 0, h = Math.imul(b, q), e = e + Math.imul(M, $) | 0, n = (n = n + Math.imul(M, H) | 0) + Math.imul(v, $) | 0, h = h + Math.imul(v, H) | 0, e = e + Math.imul(d, K) | 0, n = (n = n + Math.imul(d, Y) | 0) + Math.imul(c, K) | 0, h = h + Math.imul(c, Y) | 0;
                        var wt = (a + (e = e + Math.imul(f, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, X) | 0) + Math.imul(p, J) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, X) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, e = Math.imul(S, Z), n = (n = Math.imul(S, q)) + Math.imul(A, Z) | 0, h = Math.imul(A, q), e = e + Math.imul(y, $) | 0, n = (n = n + Math.imul(y, H) | 0) + Math.imul(b, $) | 0, h = h + Math.imul(b, H) | 0, e = e + Math.imul(M, K) | 0, n = (n = n + Math.imul(M, Y) | 0) + Math.imul(v, K) | 0, h = h + Math.imul(v, Y) | 0, e = e + Math.imul(d, J) | 0, n = (n = n + Math.imul(d, X) | 0) + Math.imul(c, J) | 0, h = h + Math.imul(c, X) | 0;
                        var yt = (a + (e = e + Math.imul(f, V) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, tt) | 0) + Math.imul(p, V) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, tt) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, e = Math.imul(N, Z), n = (n = Math.imul(N, q)) + Math.imul(E, Z) | 0, h = Math.imul(E, q), e = e + Math.imul(S, $) | 0, n = (n = n + Math.imul(S, H) | 0) + Math.imul(A, $) | 0, h = h + Math.imul(A, H) | 0, e = e + Math.imul(y, K) | 0, n = (n = n + Math.imul(y, Y) | 0) + Math.imul(b, K) | 0, h = h + Math.imul(b, Y) | 0, e = e + Math.imul(M, J) | 0, n = (n = n + Math.imul(M, X) | 0) + Math.imul(v, J) | 0, h = h + Math.imul(v, X) | 0, e = e + Math.imul(d, V) | 0, n = (n = n + Math.imul(d, tt) | 0) + Math.imul(c, V) | 0, h = h + Math.imul(c, tt) | 0;
                        var bt = (a + (e = e + Math.imul(f, rt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, et) | 0) + Math.imul(p, rt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, et) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, e = Math.imul(T, Z), n = (n = Math.imul(T, q)) + Math.imul(R, Z) | 0, h = Math.imul(R, q), e = e + Math.imul(N, $) | 0, n = (n = n + Math.imul(N, H) | 0) + Math.imul(E, $) | 0, h = h + Math.imul(E, H) | 0, e = e + Math.imul(S, K) | 0, n = (n = n + Math.imul(S, Y) | 0) + Math.imul(A, K) | 0, h = h + Math.imul(A, Y) | 0, e = e + Math.imul(y, J) | 0, n = (n = n + Math.imul(y, X) | 0) + Math.imul(b, J) | 0, h = h + Math.imul(b, X) | 0, e = e + Math.imul(M, V) | 0, n = (n = n + Math.imul(M, tt) | 0) + Math.imul(v, V) | 0, h = h + Math.imul(v, tt) | 0, e = e + Math.imul(d, rt) | 0, n = (n = n + Math.imul(d, et) | 0) + Math.imul(c, rt) | 0, h = h + Math.imul(c, et) | 0;
                        var _t = (a + (e = e + Math.imul(f, ht) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, st) | 0) + Math.imul(p, ht) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, st) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, e = Math.imul(F, Z), n = (n = Math.imul(F, q)) + Math.imul(x, Z) | 0, h = Math.imul(x, q), e = e + Math.imul(T, $) | 0, n = (n = n + Math.imul(T, H) | 0) + Math.imul(R, $) | 0, h = h + Math.imul(R, H) | 0, e = e + Math.imul(N, K) | 0, n = (n = n + Math.imul(N, Y) | 0) + Math.imul(E, K) | 0, h = h + Math.imul(E, Y) | 0, e = e + Math.imul(S, J) | 0, n = (n = n + Math.imul(S, X) | 0) + Math.imul(A, J) | 0, h = h + Math.imul(A, X) | 0, e = e + Math.imul(y, V) | 0, n = (n = n + Math.imul(y, tt) | 0) + Math.imul(b, V) | 0, h = h + Math.imul(b, tt) | 0, e = e + Math.imul(M, rt) | 0, n = (n = n + Math.imul(M, et) | 0) + Math.imul(v, rt) | 0, h = h + Math.imul(v, et) | 0, e = e + Math.imul(d, ht) | 0, n = (n = n + Math.imul(d, st) | 0) + Math.imul(c, ht) | 0, h = h + Math.imul(c, st) | 0;
                        var St = (a + (e = e + Math.imul(f, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, at) | 0) + Math.imul(p, ot) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, at) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, e = Math.imul(O, Z), n = (n = Math.imul(O, q)) + Math.imul(L, Z) | 0, h = Math.imul(L, q), e = e + Math.imul(F, $) | 0, n = (n = n + Math.imul(F, H) | 0) + Math.imul(x, $) | 0, h = h + Math.imul(x, H) | 0, e = e + Math.imul(T, K) | 0, n = (n = n + Math.imul(T, Y) | 0) + Math.imul(R, K) | 0, h = h + Math.imul(R, Y) | 0, e = e + Math.imul(N, J) | 0, n = (n = n + Math.imul(N, X) | 0) + Math.imul(E, J) | 0, h = h + Math.imul(E, X) | 0, e = e + Math.imul(S, V) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(A, V) | 0, h = h + Math.imul(A, tt) | 0, e = e + Math.imul(y, rt) | 0, n = (n = n + Math.imul(y, et) | 0) + Math.imul(b, rt) | 0, h = h + Math.imul(b, et) | 0, e = e + Math.imul(M, ht) | 0, n = (n = n + Math.imul(M, st) | 0) + Math.imul(v, ht) | 0, h = h + Math.imul(v, st) | 0, e = e + Math.imul(d, ot) | 0, n = (n = n + Math.imul(d, at) | 0) + Math.imul(c, ot) | 0, h = h + Math.imul(c, at) | 0;
                        var At = (a + (e = e + Math.imul(f, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, pt) | 0) + Math.imul(p, ft) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, pt) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, e = Math.imul(D, Z), n = (n = Math.imul(D, q)) + Math.imul(j, Z) | 0, h = Math.imul(j, q), e = e + Math.imul(O, $) | 0, n = (n = n + Math.imul(O, H) | 0) + Math.imul(L, $) | 0, h = h + Math.imul(L, H) | 0, e = e + Math.imul(F, K) | 0, n = (n = n + Math.imul(F, Y) | 0) + Math.imul(x, K) | 0, h = h + Math.imul(x, Y) | 0, e = e + Math.imul(T, J) | 0, n = (n = n + Math.imul(T, X) | 0) + Math.imul(R, J) | 0, h = h + Math.imul(R, X) | 0, e = e + Math.imul(N, V) | 0, n = (n = n + Math.imul(N, tt) | 0) + Math.imul(E, V) | 0, h = h + Math.imul(E, tt) | 0, e = e + Math.imul(S, rt) | 0, n = (n = n + Math.imul(S, et) | 0) + Math.imul(A, rt) | 0, h = h + Math.imul(A, et) | 0, e = e + Math.imul(y, ht) | 0, n = (n = n + Math.imul(y, st) | 0) + Math.imul(b, ht) | 0, h = h + Math.imul(b, st) | 0, e = e + Math.imul(M, ot) | 0, n = (n = n + Math.imul(M, at) | 0) + Math.imul(v, ot) | 0, h = h + Math.imul(v, at) | 0, e = e + Math.imul(d, ft) | 0, n = (n = n + Math.imul(d, pt) | 0) + Math.imul(c, ft) | 0, h = h + Math.imul(c, pt) | 0;
                        var Bt = (a + (e = e + Math.imul(f, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, ct) | 0) + Math.imul(p, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, ct) | 0) + (n >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, e = Math.imul(D, $), n = (n = Math.imul(D, H)) + Math.imul(j, $) | 0, h = Math.imul(j, H), e = e + Math.imul(O, K) | 0, n = (n = n + Math.imul(O, Y) | 0) + Math.imul(L, K) | 0, h = h + Math.imul(L, Y) | 0, e = e + Math.imul(F, J) | 0, n = (n = n + Math.imul(F, X) | 0) + Math.imul(x, J) | 0, h = h + Math.imul(x, X) | 0, e = e + Math.imul(T, V) | 0, n = (n = n + Math.imul(T, tt) | 0) + Math.imul(R, V) | 0, h = h + Math.imul(R, tt) | 0, e = e + Math.imul(N, rt) | 0, n = (n = n + Math.imul(N, et) | 0) + Math.imul(E, rt) | 0, h = h + Math.imul(E, et) | 0, e = e + Math.imul(S, ht) | 0, n = (n = n + Math.imul(S, st) | 0) + Math.imul(A, ht) | 0, h = h + Math.imul(A, st) | 0, e = e + Math.imul(y, ot) | 0, n = (n = n + Math.imul(y, at) | 0) + Math.imul(b, ot) | 0, h = h + Math.imul(b, at) | 0, e = e + Math.imul(M, ft) | 0, n = (n = n + Math.imul(M, pt) | 0) + Math.imul(v, ft) | 0, h = h + Math.imul(v, pt) | 0;
                        var Nt = (a + (e = e + Math.imul(d, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ct) | 0) + Math.imul(c, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(c, ct) | 0) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, e = Math.imul(D, K), n = (n = Math.imul(D, Y)) + Math.imul(j, K) | 0, h = Math.imul(j, Y), e = e + Math.imul(O, J) | 0, n = (n = n + Math.imul(O, X) | 0) + Math.imul(L, J) | 0, h = h + Math.imul(L, X) | 0, e = e + Math.imul(F, V) | 0, n = (n = n + Math.imul(F, tt) | 0) + Math.imul(x, V) | 0, h = h + Math.imul(x, tt) | 0, e = e + Math.imul(T, rt) | 0, n = (n = n + Math.imul(T, et) | 0) + Math.imul(R, rt) | 0, h = h + Math.imul(R, et) | 0, e = e + Math.imul(N, ht) | 0, n = (n = n + Math.imul(N, st) | 0) + Math.imul(E, ht) | 0, h = h + Math.imul(E, st) | 0, e = e + Math.imul(S, ot) | 0, n = (n = n + Math.imul(S, at) | 0) + Math.imul(A, ot) | 0, h = h + Math.imul(A, at) | 0, e = e + Math.imul(y, ft) | 0, n = (n = n + Math.imul(y, pt) | 0) + Math.imul(b, ft) | 0, h = h + Math.imul(b, pt) | 0;
                        var Et = (a + (e = e + Math.imul(M, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(M, ct) | 0) + Math.imul(v, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(v, ct) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, e = Math.imul(D, J), n = (n = Math.imul(D, X)) + Math.imul(j, J) | 0, h = Math.imul(j, X), e = e + Math.imul(O, V) | 0, n = (n = n + Math.imul(O, tt) | 0) + Math.imul(L, V) | 0, h = h + Math.imul(L, tt) | 0, e = e + Math.imul(F, rt) | 0, n = (n = n + Math.imul(F, et) | 0) + Math.imul(x, rt) | 0, h = h + Math.imul(x, et) | 0, e = e + Math.imul(T, ht) | 0, n = (n = n + Math.imul(T, st) | 0) + Math.imul(R, ht) | 0, h = h + Math.imul(R, st) | 0, e = e + Math.imul(N, ot) | 0, n = (n = n + Math.imul(N, at) | 0) + Math.imul(E, ot) | 0, h = h + Math.imul(E, at) | 0, e = e + Math.imul(S, ft) | 0, n = (n = n + Math.imul(S, pt) | 0) + Math.imul(A, ft) | 0, h = h + Math.imul(A, pt) | 0;
                        var It = (a + (e = e + Math.imul(y, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(y, ct) | 0) + Math.imul(b, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(b, ct) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, e = Math.imul(D, V), n = (n = Math.imul(D, tt)) + Math.imul(j, V) | 0, h = Math.imul(j, tt), e = e + Math.imul(O, rt) | 0, n = (n = n + Math.imul(O, et) | 0) + Math.imul(L, rt) | 0, h = h + Math.imul(L, et) | 0, e = e + Math.imul(F, ht) | 0, n = (n = n + Math.imul(F, st) | 0) + Math.imul(x, ht) | 0, h = h + Math.imul(x, st) | 0, e = e + Math.imul(T, ot) | 0, n = (n = n + Math.imul(T, at) | 0) + Math.imul(R, ot) | 0, h = h + Math.imul(R, at) | 0, e = e + Math.imul(N, ft) | 0, n = (n = n + Math.imul(N, pt) | 0) + Math.imul(E, ft) | 0, h = h + Math.imul(E, pt) | 0;
                        var Tt = (a + (e = e + Math.imul(S, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, ct) | 0) + Math.imul(A, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(A, ct) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, e = Math.imul(D, rt), n = (n = Math.imul(D, et)) + Math.imul(j, rt) | 0, h = Math.imul(j, et), e = e + Math.imul(O, ht) | 0, n = (n = n + Math.imul(O, st) | 0) + Math.imul(L, ht) | 0, h = h + Math.imul(L, st) | 0, e = e + Math.imul(F, ot) | 0, n = (n = n + Math.imul(F, at) | 0) + Math.imul(x, ot) | 0, h = h + Math.imul(x, at) | 0, e = e + Math.imul(T, ft) | 0, n = (n = n + Math.imul(T, pt) | 0) + Math.imul(R, ft) | 0, h = h + Math.imul(R, pt) | 0;
                        var Rt = (a + (e = e + Math.imul(N, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(N, ct) | 0) + Math.imul(E, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(E, ct) | 0) + (n >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, e = Math.imul(D, ht), n = (n = Math.imul(D, st)) + Math.imul(j, ht) | 0, h = Math.imul(j, st), e = e + Math.imul(O, ot) | 0, n = (n = n + Math.imul(O, at) | 0) + Math.imul(L, ot) | 0, h = h + Math.imul(L, at) | 0, e = e + Math.imul(F, ft) | 0, n = (n = n + Math.imul(F, pt) | 0) + Math.imul(x, ft) | 0, h = h + Math.imul(x, pt) | 0;
                        var Ut = (a + (e = e + Math.imul(T, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(T, ct) | 0) + Math.imul(R, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(R, ct) | 0) + (n >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, e = Math.imul(D, ot), n = (n = Math.imul(D, at)) + Math.imul(j, ot) | 0, h = Math.imul(j, at), e = e + Math.imul(O, ft) | 0, n = (n = n + Math.imul(O, pt) | 0) + Math.imul(L, ft) | 0, h = h + Math.imul(L, pt) | 0;
                        var Ft = (a + (e = e + Math.imul(F, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(F, ct) | 0) + Math.imul(x, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(x, ct) | 0) + (n >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, e = Math.imul(D, ft), n = (n = Math.imul(D, pt)) + Math.imul(j, ft) | 0, h = Math.imul(j, pt);
                        var xt = (a + (e = e + Math.imul(O, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(O, ct) | 0) + Math.imul(L, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(L, ct) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863;
                        var kt = (a + (e = Math.imul(D, dt)) | 0) + ((8191 & (n = (n = Math.imul(D, ct)) + Math.imul(j, dt) | 0)) << 13) | 0;
                        return a = ((h = Math.imul(j, ct)) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, o[0] = gt, o[1] = Mt, o[2] = vt, o[3] = wt, o[4] = yt, o[5] = bt, o[6] = _t, o[7] = St, o[8] = At, o[9] = Bt, o[10] = Nt, o[11] = Et, o[12] = It, o[13] = Tt, o[14] = Rt, o[15] = Ut, o[16] = Ft, o[17] = xt, o[18] = kt, 0 !== a && (o[19] = a, r.length++), r
                    };

                    function c(t, i, r) {
                        return (new g).mulp(t, i, r)
                    }

                    function g(t, i) {
                        this.x = t, this.y = i
                    }
                    Math.imul || (d = m), h.prototype.mulTo = function(t, i) {
                        var r = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? d(this, t, i) : r < 63 ? m(this, t, i) : r < 1024 ? function(t, i, r) {
                            r.negative = i.negative ^ t.negative, r.length = t.length + i.length;
                            for (var e = 0, n = 0, h = 0; h < r.length - 1; h++) {
                                var s = n;
                                n = 0;
                                for (var u = 67108863 & e, o = Math.min(h, i.length - 1), a = Math.max(0, h - t.length + 1); a <= o; a++) {
                                    var l = h - a,
                                        f = (0 | t.words[l]) * (0 | i.words[a]),
                                        p = 67108863 & f;
                                    u = 67108863 & (p = p + u | 0), n += (s = (s = s + (f / 67108864 | 0) | 0) + (p >>> 26) | 0) >>> 26, s &= 67108863
                                }
                                r.words[h] = u, e = s, s = n
                            }
                            return 0 !== e ? r.words[h] = e : r.length--, r.strip()
                        }(this, t, i) : c(this, t, i)
                    }, g.prototype.makeRBT = function(t) {
                        for (var i = new Array(t), r = h.prototype._countBits(t) - 1, e = 0; e < t; e++) i[e] = this.revBin(e, r, t);
                        return i
                    }, g.prototype.revBin = function(t, i, r) {
                        if (0 === t || t === r - 1) return t;
                        for (var e = 0, n = 0; n < i; n++) e |= (1 & t) << i - n - 1, t >>= 1;
                        return e
                    }, g.prototype.permute = function(t, i, r, e, n, h) {
                        for (var s = 0; s < h; s++) e[s] = i[t[s]], n[s] = r[t[s]]
                    }, g.prototype.transform = function(t, i, r, e, n, h) {
                        this.permute(h, t, i, r, e, n);
                        for (var s = 1; s < n; s <<= 1)
                            for (var u = s << 1, o = Math.cos(2 * Math.PI / u), a = Math.sin(2 * Math.PI / u), l = 0; l < n; l += u)
                                for (var f = o, p = a, m = 0; m < s; m++) {
                                    var d = r[l + m],
                                        c = e[l + m],
                                        g = r[l + m + s],
                                        M = e[l + m + s],
                                        v = f * g - p * M;
                                    M = f * M + p * g, g = v, r[l + m] = d + g, e[l + m] = c + M, r[l + m + s] = d - g, e[l + m + s] = c - M, m !== u && (v = o * f - a * p, p = o * p + a * f, f = v)
                                }
                    }, g.prototype.guessLen13b = function(t, i) {
                        var r = 1 | Math.max(i, t),
                            e = 1 & r,
                            n = 0;
                        for (r = r / 2 | 0; r; r >>>= 1) n++;
                        return 1 << n + 1 + e
                    }, g.prototype.conjugate = function(t, i, r) {
                        if (!(r <= 1))
                            for (var e = 0; e < r / 2; e++) {
                                var n = t[e];
                                t[e] = t[r - e - 1], t[r - e - 1] = n, n = i[e], i[e] = -i[r - e - 1], i[r - e - 1] = -n
                            }
                    }, g.prototype.normalize13b = function(t, i) {
                        for (var r = 0, e = 0; e < i / 2; e++) {
                            var n = 8192 * Math.round(t[2 * e + 1] / i) + Math.round(t[2 * e] / i) + r;
                            t[e] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, g.prototype.convert13b = function(t, i, r, n) {
                        for (var h = 0, s = 0; s < i; s++) h += 0 | t[s], r[2 * s] = 8191 & h, h >>>= 13, r[2 * s + 1] = 8191 & h, h >>>= 13;
                        for (s = 2 * i; s < n; ++s) r[s] = 0;
                        e(0 === h), e(0 == (-8192 & h))
                    }, g.prototype.stub = function(t) {
                        for (var i = new Array(t), r = 0; r < t; r++) i[r] = 0;
                        return i
                    }, g.prototype.mulp = function(t, i, r) {
                        var e = 2 * this.guessLen13b(t.length, i.length),
                            n = this.makeRBT(e),
                            h = this.stub(e),
                            s = new Array(e),
                            u = new Array(e),
                            o = new Array(e),
                            a = new Array(e),
                            l = new Array(e),
                            f = new Array(e),
                            p = r.words;
                        p.length = e, this.convert13b(t.words, t.length, s, e), this.convert13b(i.words, i.length, a, e), this.transform(s, h, u, o, e, n), this.transform(a, h, l, f, e, n);
                        for (var m = 0; m < e; m++) {
                            var d = u[m] * l[m] - o[m] * f[m];
                            o[m] = u[m] * f[m] + o[m] * l[m], u[m] = d
                        }
                        return this.conjugate(u, o, e), this.transform(u, o, p, h, e, n), this.conjugate(p, h, e), this.normalize13b(p, e), r.negative = t.negative ^ i.negative, r.length = t.length + i.length, r.strip()
                    }, h.prototype.mul = function(t) {
                        var i = new h(null);
                        return i.words = new Array(this.length + t.length), this.mulTo(t, i)
                    }, h.prototype.mulf = function(t) {
                        var i = new h(null);
                        return i.words = new Array(this.length + t.length), c(this, t, i)
                    }, h.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, h.prototype.imuln = function(t) {
                        e("number" == typeof t), e(t < 67108864);
                        for (var i = 0, r = 0; r < this.length; r++) {
                            var n = (0 | this.words[r]) * t,
                                h = (67108863 & n) + (67108863 & i);
                            i >>= 26, i += n / 67108864 | 0, i += h >>> 26, this.words[r] = 67108863 & h
                        }
                        return 0 !== i && (this.words[r] = i, this.length++), this
                    }, h.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, h.prototype.sqr = function() {
                        return this.mul(this)
                    }, h.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, h.prototype.pow = function(t) {
                        var i = function(t) {
                            for (var i = new Array(t.bitLength()), r = 0; r < i.length; r++) {
                                var e = r / 26 | 0,
                                    n = r % 26;
                                i[r] = (t.words[e] & 1 << n) >>> n
                            }
                            return i
                        }(t);
                        if (0 === i.length) return new h(1);
                        for (var r = this, e = 0; e < i.length && 0 === i[e]; e++, r = r.sqr());
                        if (++e < i.length)
                            for (var n = r.sqr(); e < i.length; e++, n = n.sqr()) 0 !== i[e] && (r = r.mul(n));
                        return r
                    }, h.prototype.iushln = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i, r = t % 26,
                            n = (t - r) / 26,
                            h = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var s = 0;
                            for (i = 0; i < this.length; i++) {
                                var u = this.words[i] & h,
                                    o = (0 | this.words[i]) - u << r;
                                this.words[i] = o | s, s = u >>> 26 - r
                            }
                            s && (this.words[i] = s, this.length++)
                        }
                        if (0 !== n) {
                            for (i = this.length - 1; i >= 0; i--) this.words[i + n] = this.words[i];
                            for (i = 0; i < n; i++) this.words[i] = 0;
                            this.length += n
                        }
                        return this.strip()
                    }, h.prototype.ishln = function(t) {
                        return e(0 === this.negative), this.iushln(t)
                    }, h.prototype.iushrn = function(t, i, r) {
                        var n;
                        e("number" == typeof t && t >= 0), n = i ? (i - i % 26) / 26 : 0;
                        var h = t % 26,
                            s = Math.min((t - h) / 26, this.length),
                            u = 67108863 ^ 67108863 >>> h << h,
                            o = r;
                        if (n -= s, n = Math.max(0, n), o) {
                            for (var a = 0; a < s; a++) o.words[a] = this.words[a];
                            o.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, a = 0; a < this.length; a++) this.words[a] = this.words[a + s];
                        else this.words[0] = 0, this.length = 1;
                        var l = 0;
                        for (a = this.length - 1; a >= 0 && (0 !== l || a >= n); a--) {
                            var f = 0 | this.words[a];
                            this.words[a] = l << 26 - h | f >>> h, l = f & u
                        }
                        return o && 0 !== l && (o.words[o.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, h.prototype.ishrn = function(t, i, r) {
                        return e(0 === this.negative), this.iushrn(t, i, r)
                    }, h.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, h.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, h.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, h.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, h.prototype.testn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i = t % 26,
                            r = (t - i) / 26,
                            n = 1 << i;
                        return !(this.length <= r) && !!(this.words[r] & n)
                    }, h.prototype.imaskn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i = t % 26,
                            r = (t - i) / 26;
                        if (e(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                        if (0 !== i && r++, this.length = Math.min(r, this.length), 0 !== i) {
                            var n = 67108863 ^ 67108863 >>> i << i;
                            this.words[this.length - 1] &= n
                        }
                        return this.strip()
                    }, h.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, h.prototype.iaddn = function(t) {
                        return e("number" == typeof t), e(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, h.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                        return this.length = Math.max(this.length, i + 1), this
                    }, h.prototype.isubn = function(t) {
                        if (e("number" == typeof t), e(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
                        return this.strip()
                    }, h.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, h.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, h.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, h.prototype.abs = function() {
                        return this.clone().iabs()
                    }, h.prototype._ishlnsubmul = function(t, i, r) {
                        var n, h, s = t.length + r;
                        this._expand(s);
                        var u = 0;
                        for (n = 0; n < t.length; n++) {
                            h = (0 | this.words[n + r]) + u;
                            var o = (0 | t.words[n]) * i;
                            u = ((h -= 67108863 & o) >> 26) - (o / 67108864 | 0), this.words[n + r] = 67108863 & h
                        }
                        for (; n < this.length - r; n++) u = (h = (0 | this.words[n + r]) + u) >> 26, this.words[n + r] = 67108863 & h;
                        if (0 === u) return this.strip();
                        for (e(-1 === u), u = 0, n = 0; n < this.length; n++) u = (h = -(0 | this.words[n]) + u) >> 26, this.words[n] = 67108863 & h;
                        return this.negative = 1, this.strip()
                    }, h.prototype._wordDiv = function(t, i) {
                        var r = (this.length, t.length),
                            e = this.clone(),
                            n = t,
                            s = 0 | n.words[n.length - 1];
                        0 !== (r = 26 - this._countBits(s)) && (n = n.ushln(r), e.iushln(r), s = 0 | n.words[n.length - 1]);
                        var u, o = e.length - n.length;
                        if ("mod" !== i) {
                            (u = new h(null)).length = o + 1, u.words = new Array(u.length);
                            for (var a = 0; a < u.length; a++) u.words[a] = 0
                        }
                        var l = e.clone()._ishlnsubmul(n, 1, o);
                        0 === l.negative && (e = l, u && (u.words[o] = 1));
                        for (var f = o - 1; f >= 0; f--) {
                            var p = 67108864 * (0 | e.words[n.length + f]) + (0 | e.words[n.length + f - 1]);
                            for (p = Math.min(p / s | 0, 67108863), e._ishlnsubmul(n, p, f); 0 !== e.negative;) p--, e.negative = 0, e._ishlnsubmul(n, 1, f), e.isZero() || (e.negative ^= 1);
                            u && (u.words[f] = p)
                        }
                        return u && u.strip(), e.strip(), "div" !== i && 0 !== r && e.iushrn(r), {
                            div: u || null,
                            mod: e
                        }
                    }, h.prototype.divmod = function(t, i, r) {
                        return e(!t.isZero()), this.isZero() ? {
                            div: new h(0),
                            mod: new h(0)
                        } : 0 !== this.negative && 0 === t.negative ? (u = this.neg().divmod(t, i), "mod" !== i && (n = u.div.neg()), "div" !== i && (s = u.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                            div: n,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (u = this.divmod(t.neg(), i), "mod" !== i && (n = u.div.neg()), {
                            div: n,
                            mod: u.mod
                        }) : 0 != (this.negative & t.negative) ? (u = this.neg().divmod(t.neg(), i), "div" !== i && (s = u.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                            div: u.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new h(0),
                            mod: this
                        } : 1 === t.length ? "div" === i ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === i ? {
                            div: null,
                            mod: new h(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new h(this.modn(t.words[0]))
                        } : this._wordDiv(t, i);
                        var n, s, u
                    }, h.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, h.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, h.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, h.prototype.divRound = function(t) {
                        var i = this.divmod(t);
                        if (i.mod.isZero()) return i.div;
                        var r = 0 !== i.div.negative ? i.mod.isub(t) : i.mod,
                            e = t.ushrn(1),
                            n = t.andln(1),
                            h = r.cmp(e);
                        return h < 0 || 1 === n && 0 === h ? i.div : 0 !== i.div.negative ? i.div.isubn(1) : i.div.iaddn(1)
                    }, h.prototype.modn = function(t) {
                        e(t <= 67108863);
                        for (var i = (1 << 26) % t, r = 0, n = this.length - 1; n >= 0; n--) r = (i * r + (0 | this.words[n])) % t;
                        return r
                    }, h.prototype.idivn = function(t) {
                        e(t <= 67108863);
                        for (var i = 0, r = this.length - 1; r >= 0; r--) {
                            var n = (0 | this.words[r]) + 67108864 * i;
                            this.words[r] = n / t | 0, i = n % t
                        }
                        return this.strip()
                    }, h.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, h.prototype.egcd = function(t) {
                        e(0 === t.negative), e(!t.isZero());
                        var i = this,
                            r = t.clone();
                        i = 0 !== i.negative ? i.umod(t) : i.clone();
                        for (var n = new h(1), s = new h(0), u = new h(0), o = new h(1), a = 0; i.isEven() && r.isEven();) i.iushrn(1), r.iushrn(1), ++a;
                        for (var l = r.clone(), f = i.clone(); !i.isZero();) {
                            for (var p = 0, m = 1; 0 == (i.words[0] & m) && p < 26; ++p, m <<= 1);
                            if (p > 0)
                                for (i.iushrn(p); p-- > 0;)(n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(f)), n.iushrn(1), s.iushrn(1);
                            for (var d = 0, c = 1; 0 == (r.words[0] & c) && d < 26; ++d, c <<= 1);
                            if (d > 0)
                                for (r.iushrn(d); d-- > 0;)(u.isOdd() || o.isOdd()) && (u.iadd(l), o.isub(f)), u.iushrn(1), o.iushrn(1);
                            i.cmp(r) >= 0 ? (i.isub(r), n.isub(u), s.isub(o)) : (r.isub(i), u.isub(n), o.isub(s))
                        }
                        return {
                            a: u,
                            b: o,
                            gcd: r.iushln(a)
                        }
                    }, h.prototype._invmp = function(t) {
                        e(0 === t.negative), e(!t.isZero());
                        var i = this,
                            r = t.clone();
                        i = 0 !== i.negative ? i.umod(t) : i.clone();
                        for (var n, s = new h(1), u = new h(0), o = r.clone(); i.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                            for (var a = 0, l = 1; 0 == (i.words[0] & l) && a < 26; ++a, l <<= 1);
                            if (a > 0)
                                for (i.iushrn(a); a-- > 0;) s.isOdd() && s.iadd(o), s.iushrn(1);
                            for (var f = 0, p = 1; 0 == (r.words[0] & p) && f < 26; ++f, p <<= 1);
                            if (f > 0)
                                for (r.iushrn(f); f-- > 0;) u.isOdd() && u.iadd(o), u.iushrn(1);
                            i.cmp(r) >= 0 ? (i.isub(r), s.isub(u)) : (r.isub(i), u.isub(s))
                        }
                        return (n = 0 === i.cmpn(1) ? s : u).cmpn(0) < 0 && n.iadd(t), n
                    }, h.prototype.gcd = function(t) {
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
                                var h = i;
                                i = r, r = h
                            } else if (0 === n || 0 === r.cmpn(1)) break;
                            i.isub(r)
                        }
                        return r.iushln(e)
                    }, h.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, h.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, h.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, h.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, h.prototype.bincn = function(t) {
                        e("number" == typeof t);
                        var i = t % 26,
                            r = (t - i) / 26,
                            n = 1 << i;
                        if (this.length <= r) return this._expand(r + 1), this.words[r] |= n, this;
                        for (var h = n, s = r; 0 !== h && s < this.length; s++) {
                            var u = 0 | this.words[s];
                            h = (u += h) >>> 26, u &= 67108863, this.words[s] = u
                        }
                        return 0 !== h && (this.words[s] = h, this.length++), this
                    }, h.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, h.prototype.cmpn = function(t) {
                        var i, r = t < 0;
                        if (0 !== this.negative && !r) return -1;
                        if (0 === this.negative && r) return 1;
                        if (this.strip(), this.length > 1) i = 1;
                        else {
                            r && (t = -t), e(t <= 67108863, "Number is too big");
                            var n = 0 | this.words[0];
                            i = n === t ? 0 : n < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -i : i
                    }, h.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var i = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -i : i
                    }, h.prototype.ucmp = function(t) {
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
                    }, h.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, h.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, h.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, h.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, h.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, h.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, h.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, h.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, h.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, h.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, h.red = function(t) {
                        return new S(t)
                    }, h.prototype.toRed = function(t) {
                        return e(!this.red, "Already a number in reduction context"), e(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, h.prototype.fromRed = function() {
                        return e(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, h.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, h.prototype.forceRed = function(t) {
                        return e(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, h.prototype.redAdd = function(t) {
                        return e(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, h.prototype.redIAdd = function(t) {
                        return e(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, h.prototype.redSub = function(t) {
                        return e(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, h.prototype.redISub = function(t) {
                        return e(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, h.prototype.redShl = function(t) {
                        return e(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, h.prototype.redMul = function(t) {
                        return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, h.prototype.redIMul = function(t) {
                        return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, h.prototype.redSqr = function() {
                        return e(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, h.prototype.redISqr = function() {
                        return e(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, h.prototype.redSqrt = function() {
                        return e(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, h.prototype.redInvm = function() {
                        return e(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, h.prototype.redNeg = function() {
                        return e(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, h.prototype.redPow = function(t) {
                        return e(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var M = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function v(t, i) {
                        this.name = t, this.p = new h(i, 16), this.n = this.p.bitLength(), this.k = new h(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function w() {
                        v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function y() {
                        v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function b() {
                        v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function _() {
                        v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function S(t) {
                        if ("string" == typeof t) {
                            var i = h._prime(t);
                            this.m = i.p, this.prime = i
                        } else e(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function A(t) {
                        S.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new h(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    v.prototype._tmp = function() {
                        var t = new h(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, v.prototype.ireduce = function(t) {
                        var i, r = t;
                        do {
                            this.split(r, this.tmp), i = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (i > this.n);
                        var e = i < this.n ? -1 : r.ucmp(this.p);
                        return 0 === e ? (r.words[0] = 0, r.length = 1) : e > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                    }, v.prototype.split = function(t, i) {
                        t.iushrn(this.n, 0, i)
                    }, v.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, n(w, v), w.prototype.split = function(t, i) {
                        for (var r = Math.min(t.length, 9), e = 0; e < r; e++) i.words[e] = t.words[e];
                        if (i.length = r, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var n = t.words[9];
                        for (i.words[i.length++] = 4194303 & n, e = 10; e < t.length; e++) {
                            var h = 0 | t.words[e];
                            t.words[e - 10] = (4194303 & h) << 4 | n >>> 22, n = h
                        }
                        n >>>= 22, t.words[e - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, w.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var i = 0, r = 0; r < t.length; r++) {
                            var e = 0 | t.words[r];
                            i += 977 * e, t.words[r] = 67108863 & i, i = 64 * e + (i / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, n(y, v), n(b, v), n(_, v), _.prototype.imulK = function(t) {
                        for (var i = 0, r = 0; r < t.length; r++) {
                            var e = 19 * (0 | t.words[r]) + i,
                                n = 67108863 & e;
                            e >>>= 26, t.words[r] = n, i = e
                        }
                        return 0 !== i && (t.words[t.length++] = i), t
                    }, h._prime = function(t) {
                        if (M[t]) return M[t];
                        var i;
                        if ("k256" === t) i = new w;
                        else if ("p224" === t) i = new y;
                        else if ("p192" === t) i = new b;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            i = new _
                        }
                        return M[t] = i, i
                    }, S.prototype._verify1 = function(t) {
                        e(0 === t.negative, "red works only with positives"), e(t.red, "red works only with red numbers")
                    }, S.prototype._verify2 = function(t, i) {
                        e(0 == (t.negative | i.negative), "red works only with positives"), e(t.red && t.red === i.red, "red works only with red numbers")
                    }, S.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                    }, S.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, S.prototype.add = function(t, i) {
                        this._verify2(t, i);
                        var r = t.add(i);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    }, S.prototype.iadd = function(t, i) {
                        this._verify2(t, i);
                        var r = t.iadd(i);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r
                    }, S.prototype.sub = function(t, i) {
                        this._verify2(t, i);
                        var r = t.sub(i);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                    }, S.prototype.isub = function(t, i) {
                        this._verify2(t, i);
                        var r = t.isub(i);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r
                    }, S.prototype.shl = function(t, i) {
                        return this._verify1(t), this.imod(t.ushln(i))
                    }, S.prototype.imul = function(t, i) {
                        return this._verify2(t, i), this.imod(t.imul(i))
                    }, S.prototype.mul = function(t, i) {
                        return this._verify2(t, i), this.imod(t.mul(i))
                    }, S.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, S.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, S.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var i = this.m.andln(3);
                        if (e(i % 2 == 1), 3 === i) {
                            var r = this.m.add(new h(1)).iushrn(2);
                            return this.pow(t, r)
                        }
                        for (var n = this.m.subn(1), s = 0; !n.isZero() && 0 === n.andln(1);) s++, n.iushrn(1);
                        e(!n.isZero());
                        var u = new h(1).toRed(this),
                            o = u.redNeg(),
                            a = this.m.subn(1).iushrn(1),
                            l = this.m.bitLength();
                        for (l = new h(2 * l * l).toRed(this); 0 !== this.pow(l, a).cmp(o);) l.redIAdd(o);
                        for (var f = this.pow(l, n), p = this.pow(t, n.addn(1).iushrn(1)), m = this.pow(t, n), d = s; 0 !== m.cmp(u);) {
                            for (var c = m, g = 0; 0 !== c.cmp(u); g++) c = c.redSqr();
                            e(g < d);
                            var M = this.pow(f, new h(1).iushln(d - g - 1));
                            p = p.redMul(M), f = M.redSqr(), m = m.redMul(f), d = g
                        }
                        return p
                    }, S.prototype.invm = function(t) {
                        var i = t._invmp(this.m);
                        return 0 !== i.negative ? (i.negative = 0, this.imod(i).redNeg()) : this.imod(i)
                    }, S.prototype.pow = function(t, i) {
                        if (i.isZero()) return new h(1).toRed(this);
                        if (0 === i.cmpn(1)) return t.clone();
                        var r = new Array(16);
                        r[0] = new h(1).toRed(this), r[1] = t;
                        for (var e = 2; e < r.length; e++) r[e] = this.mul(r[e - 1], t);
                        var n = r[0],
                            s = 0,
                            u = 0,
                            o = i.bitLength() % 26;
                        for (0 === o && (o = 26), e = i.length - 1; e >= 0; e--) {
                            for (var a = i.words[e], l = o - 1; l >= 0; l--) {
                                var f = a >> l & 1;
                                n !== r[0] && (n = this.sqr(n)), 0 !== f || 0 !== s ? (s <<= 1, s |= f, (4 === ++u || 0 === e && 0 === l) && (n = this.mul(n, r[s]), u = 0, s = 0)) : u = 0
                            }
                            o = 26
                        }
                        return n
                    }, S.prototype.convertTo = function(t) {
                        var i = t.umod(this.m);
                        return i === t ? i.clone() : i
                    }, S.prototype.convertFrom = function(t) {
                        var i = t.clone();
                        return i.red = null, i
                    }, h.mont = function(t) {
                        return new A(t)
                    }, n(A, S), A.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, A.prototype.convertFrom = function(t) {
                        var i = this.imod(t.mul(this.rinv));
                        return i.red = null, i
                    }, A.prototype.imul = function(t, i) {
                        if (t.isZero() || i.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var r = t.imul(i),
                            e = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = r.isub(e).iushrn(this.shift),
                            h = n;
                        return n.cmp(this.m) >= 0 ? h = n.isub(this.m) : n.cmpn(0) < 0 && (h = n.iadd(this.m)), h._forceRed(this)
                    }, A.prototype.mul = function(t, i) {
                        if (t.isZero() || i.isZero()) return new h(0)._forceRed(this);
                        var r = t.mul(i),
                            e = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = r.isub(e).iushrn(this.shift),
                            s = n;
                        return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
                    }, A.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, r(81)(t))
        },
        3648: function(t, i, r) {
            (function(t) {
                ! function(t, i) {
                    "use strict";

                    function e(t, i) {
                        if (!t) throw new Error(i || "Assertion failed")
                    }

                    function n(t, i) {
                        t.super_ = i;
                        var r = function() {};
                        r.prototype = i.prototype, t.prototype = new r, t.prototype.constructor = t
                    }

                    function h(t, i, r) {
                        if (h.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== i && "be" !== i || (r = i, i = 10), this._init(t || 0, i || 10, r || "be"))
                    }
                    var s;
                    "object" == typeof t ? t.exports = h : i.BN = h, h.BN = h, h.wordSize = 26;
                    try {
                        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(12).Buffer
                    } catch (t) {}

                    function u(t, i) {
                        var r = t.charCodeAt(i);
                        return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void e(!1, "Invalid character in " + t)
                    }

                    function o(t, i, r) {
                        var e = u(t, r);
                        return r - 1 >= i && (e |= u(t, r - 1) << 4), e
                    }

                    function a(t, i, r, n) {
                        for (var h = 0, s = 0, u = Math.min(t.length, r), o = i; o < u; o++) {
                            var a = t.charCodeAt(o) - 48;
                            h *= n, s = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a, e(a >= 0 && s < n, "Invalid character"), h += s
                        }
                        return h
                    }

                    function l(t, i) {
                        t.words = i.words, t.length = i.length, t.negative = i.negative, t.red = i.red
                    }
                    if (h.isBN = function(t) {
                            return t instanceof h || null !== t && "object" == typeof t && t.constructor.wordSize === h.wordSize && Array.isArray(t.words)
                        }, h.max = function(t, i) {
                            return t.cmp(i) > 0 ? t : i
                        }, h.min = function(t, i) {
                            return t.cmp(i) < 0 ? t : i
                        }, h.prototype._init = function(t, i, r) {
                            if ("number" == typeof t) return this._initNumber(t, i, r);
                            if ("object" == typeof t) return this._initArray(t, i, r);
                            "hex" === i && (i = 16), e(i === (0 | i) && i >= 2 && i <= 36);
                            var n = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === i ? this._parseHex(t, n, r) : (this._parseBase(t, i, n), "le" === r && this._initArray(this.toArray(), i, r)))
                        }, h.prototype._initNumber = function(t, i, r) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (e(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), i, r)
                        }, h.prototype._initArray = function(t, i, r) {
                            if (e("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var n = 0; n < this.length; n++) this.words[n] = 0;
                            var h, s, u = 0;
                            if ("be" === r)
                                for (n = t.length - 1, h = 0; n >= 0; n -= 3) s = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[h] |= s << u & 67108863, this.words[h + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, h++);
                            else if ("le" === r)
                                for (n = 0, h = 0; n < t.length; n += 3) s = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[h] |= s << u & 67108863, this.words[h + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, h++);
                            return this._strip()
                        }, h.prototype._parseHex = function(t, i, r) {
                            this.length = Math.ceil((t.length - i) / 6), this.words = new Array(this.length);
                            for (var e = 0; e < this.length; e++) this.words[e] = 0;
                            var n, h = 0,
                                s = 0;
                            if ("be" === r)
                                for (e = t.length - 1; e >= i; e -= 2) n = o(t, i, e) << h, this.words[s] |= 67108863 & n, h >= 18 ? (h -= 18, s += 1, this.words[s] |= n >>> 26) : h += 8;
                            else
                                for (e = (t.length - i) % 2 == 0 ? i + 1 : i; e < t.length; e += 2) n = o(t, i, e) << h, this.words[s] |= 67108863 & n, h >= 18 ? (h -= 18, s += 1, this.words[s] |= n >>> 26) : h += 8;
                            this._strip()
                        }, h.prototype._parseBase = function(t, i, r) {
                            this.words = [0], this.length = 1;
                            for (var e = 0, n = 1; n <= 67108863; n *= i) e++;
                            e--, n = n / i | 0;
                            for (var h = t.length - r, s = h % e, u = Math.min(h, h - s) + r, o = 0, l = r; l < u; l += e) o = a(t, l, l + e, i), this.imuln(n), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o);
                            if (0 !== s) {
                                var f = 1;
                                for (o = a(t, l, t.length, i), l = 0; l < s; l++) f *= i;
                                this.imuln(f), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o)
                            }
                            this._strip()
                        }, h.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, h.prototype._move = function(t) {
                            l(t, this)
                        }, h.prototype.clone = function() {
                            var t = new h(null);
                            return this.copy(t), t
                        }, h.prototype._expand = function(t) {
                            for (; this.length < t;) this.words[this.length++] = 0;
                            return this
                        }, h.prototype._strip = function() {
                            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                            return this._normSign()
                        }, h.prototype._normSign = function() {
                            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                        }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                        h.prototype[Symbol.for("nodejs.util.inspect.custom")] = f
                    } catch (t) {
                        h.prototype.inspect = f
                    } else h.prototype.inspect = f;

                    function f() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var p = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        m = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    h.prototype.toString = function(t, i) {
                        var r;
                        if (i = 0 | i || 1, 16 === (t = t || 10) || "hex" === t) {
                            r = "";
                            for (var n = 0, h = 0, s = 0; s < this.length; s++) {
                                var u = this.words[s],
                                    o = (16777215 & (u << n | h)).toString(16);
                                h = u >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, s--), r = 0 !== h || s !== this.length - 1 ? p[6 - o.length] + o + r : o + r
                            }
                            for (0 !== h && (r = h.toString(16) + r); r.length % i != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var a = m[t],
                                l = d[t];
                            r = "";
                            var f = this.clone();
                            for (f.negative = 0; !f.isZero();) {
                                var c = f.modrn(l).toString(t);
                                r = (f = f.idivn(l)).isZero() ? c + r : p[a - c.length] + c + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % i != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        e(!1, "Base should be between 2 and 36")
                    }, h.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && e(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, h.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, s && (h.prototype.toBuffer = function(t, i) {
                        return this.toArrayLike(s, t, i)
                    }), h.prototype.toArray = function(t, i) {
                        return this.toArrayLike(Array, t, i)
                    };

                    function c(t, i, r) {
                        r.negative = i.negative ^ t.negative;
                        var e = t.length + i.length | 0;
                        r.length = e, e = e - 1 | 0;
                        var n = 0 | t.words[0],
                            h = 0 | i.words[0],
                            s = n * h,
                            u = 67108863 & s,
                            o = s / 67108864 | 0;
                        r.words[0] = u;
                        for (var a = 1; a < e; a++) {
                            for (var l = o >>> 26, f = 67108863 & o, p = Math.min(a, i.length - 1), m = Math.max(0, a - t.length + 1); m <= p; m++) {
                                var d = a - m | 0;
                                l += (s = (n = 0 | t.words[d]) * (h = 0 | i.words[m]) + f) / 67108864 | 0, f = 67108863 & s
                            }
                            r.words[a] = 0 | f, o = 0 | l
                        }
                        return 0 !== o ? r.words[a] = 0 | o : r.length--, r._strip()
                    }
                    h.prototype.toArrayLike = function(t, i, r) {
                        this._strip();
                        var n = this.byteLength(),
                            h = r || Math.max(1, n);
                        e(n <= h, "byte array longer than desired length"), e(h > 0, "Requested array length <= 0");
                        var s = function(t, i) {
                            return t.allocUnsafe ? t.allocUnsafe(i) : new t(i)
                        }(t, h);
                        return this["_toArrayLike" + ("le" === i ? "LE" : "BE")](s, n), s
                    }, h.prototype._toArrayLikeLE = function(t, i) {
                        for (var r = 0, e = 0, n = 0, h = 0; n < this.length; n++) {
                            var s = this.words[n] << h | e;
                            t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === h ? (r < t.length && (t[r++] = s >> 24 & 255), e = 0, h = 0) : (e = s >>> 24, h += 2)
                        }
                        if (r < t.length)
                            for (t[r++] = e; r < t.length;) t[r++] = 0
                    }, h.prototype._toArrayLikeBE = function(t, i) {
                        for (var r = t.length - 1, e = 0, n = 0, h = 0; n < this.length; n++) {
                            var s = this.words[n] << h | e;
                            t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === h ? (r >= 0 && (t[r--] = s >> 24 & 255), e = 0, h = 0) : (e = s >>> 24, h += 2)
                        }
                        if (r >= 0)
                            for (t[r--] = e; r >= 0;) t[r--] = 0
                    }, Math.clz32 ? h.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : h.prototype._countBits = function(t) {
                        var i = t,
                            r = 0;
                        return i >= 4096 && (r += 13, i >>>= 13), i >= 64 && (r += 7, i >>>= 7), i >= 8 && (r += 4, i >>>= 4), i >= 2 && (r += 2, i >>>= 2), r + i
                    }, h.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var i = t,
                            r = 0;
                        return 0 == (8191 & i) && (r += 13, i >>>= 13), 0 == (127 & i) && (r += 7, i >>>= 7), 0 == (15 & i) && (r += 4, i >>>= 4), 0 == (3 & i) && (r += 2, i >>>= 2), 0 == (1 & i) && r++, r
                    }, h.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            i = this._countBits(t);
                        return 26 * (this.length - 1) + i
                    }, h.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, i = 0; i < this.length; i++) {
                            var r = this._zeroBits(this.words[i]);
                            if (t += r, 26 !== r) break
                        }
                        return t
                    }, h.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, h.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, h.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, h.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, h.prototype.neg = function() {
                        return this.clone().ineg()
                    }, h.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, h.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] | t.words[i];
                        return this._strip()
                    }, h.prototype.ior = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuor(t)
                    }, h.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, h.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, h.prototype.iuand = function(t) {
                        var i;
                        i = this.length > t.length ? t : this;
                        for (var r = 0; r < i.length; r++) this.words[r] = this.words[r] & t.words[r];
                        return this.length = i.length, this._strip()
                    }, h.prototype.iand = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuand(t)
                    }, h.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, h.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, h.prototype.iuxor = function(t) {
                        var i, r;
                        this.length > t.length ? (i = this, r = t) : (i = t, r = this);
                        for (var e = 0; e < r.length; e++) this.words[e] = i.words[e] ^ r.words[e];
                        if (this !== i)
                            for (; e < i.length; e++) this.words[e] = i.words[e];
                        return this.length = i.length, this._strip()
                    }, h.prototype.ixor = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, h.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, h.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, h.prototype.inotn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i = 0 | Math.ceil(t / 26),
                            r = t % 26;
                        this._expand(i), r > 0 && i--;
                        for (var n = 0; n < i; n++) this.words[n] = 67108863 & ~this.words[n];
                        return r > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - r), this._strip()
                    }, h.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, h.prototype.setn = function(t, i) {
                        e("number" == typeof t && t >= 0);
                        var r = t / 26 | 0,
                            n = t % 26;
                        return this._expand(r + 1), this.words[r] = i ? this.words[r] | 1 << n : this.words[r] & ~(1 << n), this._strip()
                    }, h.prototype.iadd = function(t) {
                        var i, r, e;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, i = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, i = this.isub(t), t.negative = 1, i._normSign();
                        this.length > t.length ? (r = this, e = t) : (r = t, e = this);
                        for (var n = 0, h = 0; h < e.length; h++) i = (0 | r.words[h]) + (0 | e.words[h]) + n, this.words[h] = 67108863 & i, n = i >>> 26;
                        for (; 0 !== n && h < r.length; h++) i = (0 | r.words[h]) + n, this.words[h] = 67108863 & i, n = i >>> 26;
                        if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                        else if (r !== this)
                            for (; h < r.length; h++) this.words[h] = r.words[h];
                        return this
                    }, h.prototype.add = function(t) {
                        var i;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, i = this.sub(t), t.negative ^= 1, i) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, i = t.sub(this), this.negative = 1, i) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, h.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var i = this.iadd(t);
                            return t.negative = 1, i._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var r, e, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        n > 0 ? (r = this, e = t) : (r = t, e = this);
                        for (var h = 0, s = 0; s < e.length; s++) h = (i = (0 | r.words[s]) - (0 | e.words[s]) + h) >> 26, this.words[s] = 67108863 & i;
                        for (; 0 !== h && s < r.length; s++) h = (i = (0 | r.words[s]) + h) >> 26, this.words[s] = 67108863 & i;
                        if (0 === h && s < r.length && r !== this)
                            for (; s < r.length; s++) this.words[s] = r.words[s];
                        return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this._strip()
                    }, h.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var g = function(t, i, r) {
                        var e, n, h, s = t.words,
                            u = i.words,
                            o = r.words,
                            a = 0,
                            l = 0 | s[0],
                            f = 8191 & l,
                            p = l >>> 13,
                            m = 0 | s[1],
                            d = 8191 & m,
                            c = m >>> 13,
                            g = 0 | s[2],
                            M = 8191 & g,
                            v = g >>> 13,
                            w = 0 | s[3],
                            y = 8191 & w,
                            b = w >>> 13,
                            _ = 0 | s[4],
                            S = 8191 & _,
                            A = _ >>> 13,
                            B = 0 | s[5],
                            N = 8191 & B,
                            E = B >>> 13,
                            I = 0 | s[6],
                            T = 8191 & I,
                            R = I >>> 13,
                            U = 0 | s[7],
                            F = 8191 & U,
                            x = U >>> 13,
                            k = 0 | s[8],
                            O = 8191 & k,
                            L = k >>> 13,
                            P = 0 | s[9],
                            D = 8191 & P,
                            j = P >>> 13,
                            z = 0 | u[0],
                            Z = 8191 & z,
                            q = z >>> 13,
                            G = 0 | u[1],
                            $ = 8191 & G,
                            H = G >>> 13,
                            C = 0 | u[2],
                            K = 8191 & C,
                            Y = C >>> 13,
                            W = 0 | u[3],
                            J = 8191 & W,
                            X = W >>> 13,
                            Q = 0 | u[4],
                            V = 8191 & Q,
                            tt = Q >>> 13,
                            it = 0 | u[5],
                            rt = 8191 & it,
                            et = it >>> 13,
                            nt = 0 | u[6],
                            ht = 8191 & nt,
                            st = nt >>> 13,
                            ut = 0 | u[7],
                            ot = 8191 & ut,
                            at = ut >>> 13,
                            lt = 0 | u[8],
                            ft = 8191 & lt,
                            pt = lt >>> 13,
                            mt = 0 | u[9],
                            dt = 8191 & mt,
                            ct = mt >>> 13;
                        r.negative = t.negative ^ i.negative, r.length = 19;
                        var gt = (a + (e = Math.imul(f, Z)) | 0) + ((8191 & (n = (n = Math.imul(f, q)) + Math.imul(p, Z) | 0)) << 13) | 0;
                        a = ((h = Math.imul(p, q)) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, e = Math.imul(d, Z), n = (n = Math.imul(d, q)) + Math.imul(c, Z) | 0, h = Math.imul(c, q);
                        var Mt = (a + (e = e + Math.imul(f, $) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, H) | 0) + Math.imul(p, $) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, H) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, e = Math.imul(M, Z), n = (n = Math.imul(M, q)) + Math.imul(v, Z) | 0, h = Math.imul(v, q), e = e + Math.imul(d, $) | 0, n = (n = n + Math.imul(d, H) | 0) + Math.imul(c, $) | 0, h = h + Math.imul(c, H) | 0;
                        var vt = (a + (e = e + Math.imul(f, K) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, Y) | 0) + Math.imul(p, K) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, Y) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, e = Math.imul(y, Z), n = (n = Math.imul(y, q)) + Math.imul(b, Z) | 0, h = Math.imul(b, q), e = e + Math.imul(M, $) | 0, n = (n = n + Math.imul(M, H) | 0) + Math.imul(v, $) | 0, h = h + Math.imul(v, H) | 0, e = e + Math.imul(d, K) | 0, n = (n = n + Math.imul(d, Y) | 0) + Math.imul(c, K) | 0, h = h + Math.imul(c, Y) | 0;
                        var wt = (a + (e = e + Math.imul(f, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, X) | 0) + Math.imul(p, J) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, X) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, e = Math.imul(S, Z), n = (n = Math.imul(S, q)) + Math.imul(A, Z) | 0, h = Math.imul(A, q), e = e + Math.imul(y, $) | 0, n = (n = n + Math.imul(y, H) | 0) + Math.imul(b, $) | 0, h = h + Math.imul(b, H) | 0, e = e + Math.imul(M, K) | 0, n = (n = n + Math.imul(M, Y) | 0) + Math.imul(v, K) | 0, h = h + Math.imul(v, Y) | 0, e = e + Math.imul(d, J) | 0, n = (n = n + Math.imul(d, X) | 0) + Math.imul(c, J) | 0, h = h + Math.imul(c, X) | 0;
                        var yt = (a + (e = e + Math.imul(f, V) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, tt) | 0) + Math.imul(p, V) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, tt) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, e = Math.imul(N, Z), n = (n = Math.imul(N, q)) + Math.imul(E, Z) | 0, h = Math.imul(E, q), e = e + Math.imul(S, $) | 0, n = (n = n + Math.imul(S, H) | 0) + Math.imul(A, $) | 0, h = h + Math.imul(A, H) | 0, e = e + Math.imul(y, K) | 0, n = (n = n + Math.imul(y, Y) | 0) + Math.imul(b, K) | 0, h = h + Math.imul(b, Y) | 0, e = e + Math.imul(M, J) | 0, n = (n = n + Math.imul(M, X) | 0) + Math.imul(v, J) | 0, h = h + Math.imul(v, X) | 0, e = e + Math.imul(d, V) | 0, n = (n = n + Math.imul(d, tt) | 0) + Math.imul(c, V) | 0, h = h + Math.imul(c, tt) | 0;
                        var bt = (a + (e = e + Math.imul(f, rt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, et) | 0) + Math.imul(p, rt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, et) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, e = Math.imul(T, Z), n = (n = Math.imul(T, q)) + Math.imul(R, Z) | 0, h = Math.imul(R, q), e = e + Math.imul(N, $) | 0, n = (n = n + Math.imul(N, H) | 0) + Math.imul(E, $) | 0, h = h + Math.imul(E, H) | 0, e = e + Math.imul(S, K) | 0, n = (n = n + Math.imul(S, Y) | 0) + Math.imul(A, K) | 0, h = h + Math.imul(A, Y) | 0, e = e + Math.imul(y, J) | 0, n = (n = n + Math.imul(y, X) | 0) + Math.imul(b, J) | 0, h = h + Math.imul(b, X) | 0, e = e + Math.imul(M, V) | 0, n = (n = n + Math.imul(M, tt) | 0) + Math.imul(v, V) | 0, h = h + Math.imul(v, tt) | 0, e = e + Math.imul(d, rt) | 0, n = (n = n + Math.imul(d, et) | 0) + Math.imul(c, rt) | 0, h = h + Math.imul(c, et) | 0;
                        var _t = (a + (e = e + Math.imul(f, ht) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, st) | 0) + Math.imul(p, ht) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, st) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, e = Math.imul(F, Z), n = (n = Math.imul(F, q)) + Math.imul(x, Z) | 0, h = Math.imul(x, q), e = e + Math.imul(T, $) | 0, n = (n = n + Math.imul(T, H) | 0) + Math.imul(R, $) | 0, h = h + Math.imul(R, H) | 0, e = e + Math.imul(N, K) | 0, n = (n = n + Math.imul(N, Y) | 0) + Math.imul(E, K) | 0, h = h + Math.imul(E, Y) | 0, e = e + Math.imul(S, J) | 0, n = (n = n + Math.imul(S, X) | 0) + Math.imul(A, J) | 0, h = h + Math.imul(A, X) | 0, e = e + Math.imul(y, V) | 0, n = (n = n + Math.imul(y, tt) | 0) + Math.imul(b, V) | 0, h = h + Math.imul(b, tt) | 0, e = e + Math.imul(M, rt) | 0, n = (n = n + Math.imul(M, et) | 0) + Math.imul(v, rt) | 0, h = h + Math.imul(v, et) | 0, e = e + Math.imul(d, ht) | 0, n = (n = n + Math.imul(d, st) | 0) + Math.imul(c, ht) | 0, h = h + Math.imul(c, st) | 0;
                        var St = (a + (e = e + Math.imul(f, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, at) | 0) + Math.imul(p, ot) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, at) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, e = Math.imul(O, Z), n = (n = Math.imul(O, q)) + Math.imul(L, Z) | 0, h = Math.imul(L, q), e = e + Math.imul(F, $) | 0, n = (n = n + Math.imul(F, H) | 0) + Math.imul(x, $) | 0, h = h + Math.imul(x, H) | 0, e = e + Math.imul(T, K) | 0, n = (n = n + Math.imul(T, Y) | 0) + Math.imul(R, K) | 0, h = h + Math.imul(R, Y) | 0, e = e + Math.imul(N, J) | 0, n = (n = n + Math.imul(N, X) | 0) + Math.imul(E, J) | 0, h = h + Math.imul(E, X) | 0, e = e + Math.imul(S, V) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(A, V) | 0, h = h + Math.imul(A, tt) | 0, e = e + Math.imul(y, rt) | 0, n = (n = n + Math.imul(y, et) | 0) + Math.imul(b, rt) | 0, h = h + Math.imul(b, et) | 0, e = e + Math.imul(M, ht) | 0, n = (n = n + Math.imul(M, st) | 0) + Math.imul(v, ht) | 0, h = h + Math.imul(v, st) | 0, e = e + Math.imul(d, ot) | 0, n = (n = n + Math.imul(d, at) | 0) + Math.imul(c, ot) | 0, h = h + Math.imul(c, at) | 0;
                        var At = (a + (e = e + Math.imul(f, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, pt) | 0) + Math.imul(p, ft) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, pt) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, e = Math.imul(D, Z), n = (n = Math.imul(D, q)) + Math.imul(j, Z) | 0, h = Math.imul(j, q), e = e + Math.imul(O, $) | 0, n = (n = n + Math.imul(O, H) | 0) + Math.imul(L, $) | 0, h = h + Math.imul(L, H) | 0, e = e + Math.imul(F, K) | 0, n = (n = n + Math.imul(F, Y) | 0) + Math.imul(x, K) | 0, h = h + Math.imul(x, Y) | 0, e = e + Math.imul(T, J) | 0, n = (n = n + Math.imul(T, X) | 0) + Math.imul(R, J) | 0, h = h + Math.imul(R, X) | 0, e = e + Math.imul(N, V) | 0, n = (n = n + Math.imul(N, tt) | 0) + Math.imul(E, V) | 0, h = h + Math.imul(E, tt) | 0, e = e + Math.imul(S, rt) | 0, n = (n = n + Math.imul(S, et) | 0) + Math.imul(A, rt) | 0, h = h + Math.imul(A, et) | 0, e = e + Math.imul(y, ht) | 0, n = (n = n + Math.imul(y, st) | 0) + Math.imul(b, ht) | 0, h = h + Math.imul(b, st) | 0, e = e + Math.imul(M, ot) | 0, n = (n = n + Math.imul(M, at) | 0) + Math.imul(v, ot) | 0, h = h + Math.imul(v, at) | 0, e = e + Math.imul(d, ft) | 0, n = (n = n + Math.imul(d, pt) | 0) + Math.imul(c, ft) | 0, h = h + Math.imul(c, pt) | 0;
                        var Bt = (a + (e = e + Math.imul(f, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, ct) | 0) + Math.imul(p, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(p, ct) | 0) + (n >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, e = Math.imul(D, $), n = (n = Math.imul(D, H)) + Math.imul(j, $) | 0, h = Math.imul(j, H), e = e + Math.imul(O, K) | 0, n = (n = n + Math.imul(O, Y) | 0) + Math.imul(L, K) | 0, h = h + Math.imul(L, Y) | 0, e = e + Math.imul(F, J) | 0, n = (n = n + Math.imul(F, X) | 0) + Math.imul(x, J) | 0, h = h + Math.imul(x, X) | 0, e = e + Math.imul(T, V) | 0, n = (n = n + Math.imul(T, tt) | 0) + Math.imul(R, V) | 0, h = h + Math.imul(R, tt) | 0, e = e + Math.imul(N, rt) | 0, n = (n = n + Math.imul(N, et) | 0) + Math.imul(E, rt) | 0, h = h + Math.imul(E, et) | 0, e = e + Math.imul(S, ht) | 0, n = (n = n + Math.imul(S, st) | 0) + Math.imul(A, ht) | 0, h = h + Math.imul(A, st) | 0, e = e + Math.imul(y, ot) | 0, n = (n = n + Math.imul(y, at) | 0) + Math.imul(b, ot) | 0, h = h + Math.imul(b, at) | 0, e = e + Math.imul(M, ft) | 0, n = (n = n + Math.imul(M, pt) | 0) + Math.imul(v, ft) | 0, h = h + Math.imul(v, pt) | 0;
                        var Nt = (a + (e = e + Math.imul(d, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, ct) | 0) + Math.imul(c, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(c, ct) | 0) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, e = Math.imul(D, K), n = (n = Math.imul(D, Y)) + Math.imul(j, K) | 0, h = Math.imul(j, Y), e = e + Math.imul(O, J) | 0, n = (n = n + Math.imul(O, X) | 0) + Math.imul(L, J) | 0, h = h + Math.imul(L, X) | 0, e = e + Math.imul(F, V) | 0, n = (n = n + Math.imul(F, tt) | 0) + Math.imul(x, V) | 0, h = h + Math.imul(x, tt) | 0, e = e + Math.imul(T, rt) | 0, n = (n = n + Math.imul(T, et) | 0) + Math.imul(R, rt) | 0, h = h + Math.imul(R, et) | 0, e = e + Math.imul(N, ht) | 0, n = (n = n + Math.imul(N, st) | 0) + Math.imul(E, ht) | 0, h = h + Math.imul(E, st) | 0, e = e + Math.imul(S, ot) | 0, n = (n = n + Math.imul(S, at) | 0) + Math.imul(A, ot) | 0, h = h + Math.imul(A, at) | 0, e = e + Math.imul(y, ft) | 0, n = (n = n + Math.imul(y, pt) | 0) + Math.imul(b, ft) | 0, h = h + Math.imul(b, pt) | 0;
                        var Et = (a + (e = e + Math.imul(M, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(M, ct) | 0) + Math.imul(v, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(v, ct) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, e = Math.imul(D, J), n = (n = Math.imul(D, X)) + Math.imul(j, J) | 0, h = Math.imul(j, X), e = e + Math.imul(O, V) | 0, n = (n = n + Math.imul(O, tt) | 0) + Math.imul(L, V) | 0, h = h + Math.imul(L, tt) | 0, e = e + Math.imul(F, rt) | 0, n = (n = n + Math.imul(F, et) | 0) + Math.imul(x, rt) | 0, h = h + Math.imul(x, et) | 0, e = e + Math.imul(T, ht) | 0, n = (n = n + Math.imul(T, st) | 0) + Math.imul(R, ht) | 0, h = h + Math.imul(R, st) | 0, e = e + Math.imul(N, ot) | 0, n = (n = n + Math.imul(N, at) | 0) + Math.imul(E, ot) | 0, h = h + Math.imul(E, at) | 0, e = e + Math.imul(S, ft) | 0, n = (n = n + Math.imul(S, pt) | 0) + Math.imul(A, ft) | 0, h = h + Math.imul(A, pt) | 0;
                        var It = (a + (e = e + Math.imul(y, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(y, ct) | 0) + Math.imul(b, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(b, ct) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, e = Math.imul(D, V), n = (n = Math.imul(D, tt)) + Math.imul(j, V) | 0, h = Math.imul(j, tt), e = e + Math.imul(O, rt) | 0, n = (n = n + Math.imul(O, et) | 0) + Math.imul(L, rt) | 0, h = h + Math.imul(L, et) | 0, e = e + Math.imul(F, ht) | 0, n = (n = n + Math.imul(F, st) | 0) + Math.imul(x, ht) | 0, h = h + Math.imul(x, st) | 0, e = e + Math.imul(T, ot) | 0, n = (n = n + Math.imul(T, at) | 0) + Math.imul(R, ot) | 0, h = h + Math.imul(R, at) | 0, e = e + Math.imul(N, ft) | 0, n = (n = n + Math.imul(N, pt) | 0) + Math.imul(E, ft) | 0, h = h + Math.imul(E, pt) | 0;
                        var Tt = (a + (e = e + Math.imul(S, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, ct) | 0) + Math.imul(A, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(A, ct) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, e = Math.imul(D, rt), n = (n = Math.imul(D, et)) + Math.imul(j, rt) | 0, h = Math.imul(j, et), e = e + Math.imul(O, ht) | 0, n = (n = n + Math.imul(O, st) | 0) + Math.imul(L, ht) | 0, h = h + Math.imul(L, st) | 0, e = e + Math.imul(F, ot) | 0, n = (n = n + Math.imul(F, at) | 0) + Math.imul(x, ot) | 0, h = h + Math.imul(x, at) | 0, e = e + Math.imul(T, ft) | 0, n = (n = n + Math.imul(T, pt) | 0) + Math.imul(R, ft) | 0, h = h + Math.imul(R, pt) | 0;
                        var Rt = (a + (e = e + Math.imul(N, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(N, ct) | 0) + Math.imul(E, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(E, ct) | 0) + (n >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, e = Math.imul(D, ht), n = (n = Math.imul(D, st)) + Math.imul(j, ht) | 0, h = Math.imul(j, st), e = e + Math.imul(O, ot) | 0, n = (n = n + Math.imul(O, at) | 0) + Math.imul(L, ot) | 0, h = h + Math.imul(L, at) | 0, e = e + Math.imul(F, ft) | 0, n = (n = n + Math.imul(F, pt) | 0) + Math.imul(x, ft) | 0, h = h + Math.imul(x, pt) | 0;
                        var Ut = (a + (e = e + Math.imul(T, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(T, ct) | 0) + Math.imul(R, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(R, ct) | 0) + (n >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, e = Math.imul(D, ot), n = (n = Math.imul(D, at)) + Math.imul(j, ot) | 0, h = Math.imul(j, at), e = e + Math.imul(O, ft) | 0, n = (n = n + Math.imul(O, pt) | 0) + Math.imul(L, ft) | 0, h = h + Math.imul(L, pt) | 0;
                        var Ft = (a + (e = e + Math.imul(F, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(F, ct) | 0) + Math.imul(x, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(x, ct) | 0) + (n >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, e = Math.imul(D, ft), n = (n = Math.imul(D, pt)) + Math.imul(j, ft) | 0, h = Math.imul(j, pt);
                        var xt = (a + (e = e + Math.imul(O, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(O, ct) | 0) + Math.imul(L, dt) | 0)) << 13) | 0;
                        a = ((h = h + Math.imul(L, ct) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863;
                        var kt = (a + (e = Math.imul(D, dt)) | 0) + ((8191 & (n = (n = Math.imul(D, ct)) + Math.imul(j, dt) | 0)) << 13) | 0;
                        return a = ((h = Math.imul(j, ct)) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, o[0] = gt, o[1] = Mt, o[2] = vt, o[3] = wt, o[4] = yt, o[5] = bt, o[6] = _t, o[7] = St, o[8] = At, o[9] = Bt, o[10] = Nt, o[11] = Et, o[12] = It, o[13] = Tt, o[14] = Rt, o[15] = Ut, o[16] = Ft, o[17] = xt, o[18] = kt, 0 !== a && (o[19] = a, r.length++), r
                    };

                    function M(t, i, r) {
                        r.negative = i.negative ^ t.negative, r.length = t.length + i.length;
                        for (var e = 0, n = 0, h = 0; h < r.length - 1; h++) {
                            var s = n;
                            n = 0;
                            for (var u = 67108863 & e, o = Math.min(h, i.length - 1), a = Math.max(0, h - t.length + 1); a <= o; a++) {
                                var l = h - a,
                                    f = (0 | t.words[l]) * (0 | i.words[a]),
                                    p = 67108863 & f;
                                u = 67108863 & (p = p + u | 0), n += (s = (s = s + (f / 67108864 | 0) | 0) + (p >>> 26) | 0) >>> 26, s &= 67108863
                            }
                            r.words[h] = u, e = s, s = n
                        }
                        return 0 !== e ? r.words[h] = e : r.length--, r._strip()
                    }

                    function v(t, i, r) {
                        return M(t, i, r)
                    }

                    function w(t, i) {
                        this.x = t, this.y = i
                    }
                    Math.imul || (g = c), h.prototype.mulTo = function(t, i) {
                        var r = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? g(this, t, i) : r < 63 ? c(this, t, i) : r < 1024 ? M(this, t, i) : v(this, t, i)
                    }, w.prototype.makeRBT = function(t) {
                        for (var i = new Array(t), r = h.prototype._countBits(t) - 1, e = 0; e < t; e++) i[e] = this.revBin(e, r, t);
                        return i
                    }, w.prototype.revBin = function(t, i, r) {
                        if (0 === t || t === r - 1) return t;
                        for (var e = 0, n = 0; n < i; n++) e |= (1 & t) << i - n - 1, t >>= 1;
                        return e
                    }, w.prototype.permute = function(t, i, r, e, n, h) {
                        for (var s = 0; s < h; s++) e[s] = i[t[s]], n[s] = r[t[s]]
                    }, w.prototype.transform = function(t, i, r, e, n, h) {
                        this.permute(h, t, i, r, e, n);
                        for (var s = 1; s < n; s <<= 1)
                            for (var u = s << 1, o = Math.cos(2 * Math.PI / u), a = Math.sin(2 * Math.PI / u), l = 0; l < n; l += u)
                                for (var f = o, p = a, m = 0; m < s; m++) {
                                    var d = r[l + m],
                                        c = e[l + m],
                                        g = r[l + m + s],
                                        M = e[l + m + s],
                                        v = f * g - p * M;
                                    M = f * M + p * g, g = v, r[l + m] = d + g, e[l + m] = c + M, r[l + m + s] = d - g, e[l + m + s] = c - M, m !== u && (v = o * f - a * p, p = o * p + a * f, f = v)
                                }
                    }, w.prototype.guessLen13b = function(t, i) {
                        var r = 1 | Math.max(i, t),
                            e = 1 & r,
                            n = 0;
                        for (r = r / 2 | 0; r; r >>>= 1) n++;
                        return 1 << n + 1 + e
                    }, w.prototype.conjugate = function(t, i, r) {
                        if (!(r <= 1))
                            for (var e = 0; e < r / 2; e++) {
                                var n = t[e];
                                t[e] = t[r - e - 1], t[r - e - 1] = n, n = i[e], i[e] = -i[r - e - 1], i[r - e - 1] = -n
                            }
                    }, w.prototype.normalize13b = function(t, i) {
                        for (var r = 0, e = 0; e < i / 2; e++) {
                            var n = 8192 * Math.round(t[2 * e + 1] / i) + Math.round(t[2 * e] / i) + r;
                            t[e] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, w.prototype.convert13b = function(t, i, r, n) {
                        for (var h = 0, s = 0; s < i; s++) h += 0 | t[s], r[2 * s] = 8191 & h, h >>>= 13, r[2 * s + 1] = 8191 & h, h >>>= 13;
                        for (s = 2 * i; s < n; ++s) r[s] = 0;
                        e(0 === h), e(0 == (-8192 & h))
                    }, w.prototype.stub = function(t) {
                        for (var i = new Array(t), r = 0; r < t; r++) i[r] = 0;
                        return i
                    }, w.prototype.mulp = function(t, i, r) {
                        var e = 2 * this.guessLen13b(t.length, i.length),
                            n = this.makeRBT(e),
                            h = this.stub(e),
                            s = new Array(e),
                            u = new Array(e),
                            o = new Array(e),
                            a = new Array(e),
                            l = new Array(e),
                            f = new Array(e),
                            p = r.words;
                        p.length = e, this.convert13b(t.words, t.length, s, e), this.convert13b(i.words, i.length, a, e), this.transform(s, h, u, o, e, n), this.transform(a, h, l, f, e, n);
                        for (var m = 0; m < e; m++) {
                            var d = u[m] * l[m] - o[m] * f[m];
                            o[m] = u[m] * f[m] + o[m] * l[m], u[m] = d
                        }
                        return this.conjugate(u, o, e), this.transform(u, o, p, h, e, n), this.conjugate(p, h, e), this.normalize13b(p, e), r.negative = t.negative ^ i.negative, r.length = t.length + i.length, r._strip()
                    }, h.prototype.mul = function(t) {
                        var i = new h(null);
                        return i.words = new Array(this.length + t.length), this.mulTo(t, i)
                    }, h.prototype.mulf = function(t) {
                        var i = new h(null);
                        return i.words = new Array(this.length + t.length), v(this, t, i)
                    }, h.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, h.prototype.imuln = function(t) {
                        var i = t < 0;
                        i && (t = -t), e("number" == typeof t), e(t < 67108864);
                        for (var r = 0, n = 0; n < this.length; n++) {
                            var h = (0 | this.words[n]) * t,
                                s = (67108863 & h) + (67108863 & r);
                            r >>= 26, r += h / 67108864 | 0, r += s >>> 26, this.words[n] = 67108863 & s
                        }
                        return 0 !== r && (this.words[n] = r, this.length++), i ? this.ineg() : this
                    }, h.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, h.prototype.sqr = function() {
                        return this.mul(this)
                    }, h.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, h.prototype.pow = function(t) {
                        var i = function(t) {
                            for (var i = new Array(t.bitLength()), r = 0; r < i.length; r++) {
                                var e = r / 26 | 0,
                                    n = r % 26;
                                i[r] = t.words[e] >>> n & 1
                            }
                            return i
                        }(t);
                        if (0 === i.length) return new h(1);
                        for (var r = this, e = 0; e < i.length && 0 === i[e]; e++, r = r.sqr());
                        if (++e < i.length)
                            for (var n = r.sqr(); e < i.length; e++, n = n.sqr()) 0 !== i[e] && (r = r.mul(n));
                        return r
                    }, h.prototype.iushln = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i, r = t % 26,
                            n = (t - r) / 26,
                            h = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var s = 0;
                            for (i = 0; i < this.length; i++) {
                                var u = this.words[i] & h,
                                    o = (0 | this.words[i]) - u << r;
                                this.words[i] = o | s, s = u >>> 26 - r
                            }
                            s && (this.words[i] = s, this.length++)
                        }
                        if (0 !== n) {
                            for (i = this.length - 1; i >= 0; i--) this.words[i + n] = this.words[i];
                            for (i = 0; i < n; i++) this.words[i] = 0;
                            this.length += n
                        }
                        return this._strip()
                    }, h.prototype.ishln = function(t) {
                        return e(0 === this.negative), this.iushln(t)
                    }, h.prototype.iushrn = function(t, i, r) {
                        var n;
                        e("number" == typeof t && t >= 0), n = i ? (i - i % 26) / 26 : 0;
                        var h = t % 26,
                            s = Math.min((t - h) / 26, this.length),
                            u = 67108863 ^ 67108863 >>> h << h,
                            o = r;
                        if (n -= s, n = Math.max(0, n), o) {
                            for (var a = 0; a < s; a++) o.words[a] = this.words[a];
                            o.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, a = 0; a < this.length; a++) this.words[a] = this.words[a + s];
                        else this.words[0] = 0, this.length = 1;
                        var l = 0;
                        for (a = this.length - 1; a >= 0 && (0 !== l || a >= n); a--) {
                            var f = 0 | this.words[a];
                            this.words[a] = l << 26 - h | f >>> h, l = f & u
                        }
                        return o && 0 !== l && (o.words[o.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, h.prototype.ishrn = function(t, i, r) {
                        return e(0 === this.negative), this.iushrn(t, i, r)
                    }, h.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, h.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, h.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, h.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, h.prototype.testn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i = t % 26,
                            r = (t - i) / 26,
                            n = 1 << i;
                        return !(this.length <= r) && !!(this.words[r] & n)
                    }, h.prototype.imaskn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i = t % 26,
                            r = (t - i) / 26;
                        if (e(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                        if (0 !== i && r++, this.length = Math.min(r, this.length), 0 !== i) {
                            var n = 67108863 ^ 67108863 >>> i << i;
                            this.words[this.length - 1] &= n
                        }
                        return this._strip()
                    }, h.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, h.prototype.iaddn = function(t) {
                        return e("number" == typeof t), e(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, h.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                        return this.length = Math.max(this.length, i + 1), this
                    }, h.prototype.isubn = function(t) {
                        if (e("number" == typeof t), e(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
                        return this._strip()
                    }, h.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, h.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, h.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, h.prototype.abs = function() {
                        return this.clone().iabs()
                    }, h.prototype._ishlnsubmul = function(t, i, r) {
                        var n, h, s = t.length + r;
                        this._expand(s);
                        var u = 0;
                        for (n = 0; n < t.length; n++) {
                            h = (0 | this.words[n + r]) + u;
                            var o = (0 | t.words[n]) * i;
                            u = ((h -= 67108863 & o) >> 26) - (o / 67108864 | 0), this.words[n + r] = 67108863 & h
                        }
                        for (; n < this.length - r; n++) u = (h = (0 | this.words[n + r]) + u) >> 26, this.words[n + r] = 67108863 & h;
                        if (0 === u) return this._strip();
                        for (e(-1 === u), u = 0, n = 0; n < this.length; n++) u = (h = -(0 | this.words[n]) + u) >> 26, this.words[n] = 67108863 & h;
                        return this.negative = 1, this._strip()
                    }, h.prototype._wordDiv = function(t, i) {
                        var r = (this.length, t.length),
                            e = this.clone(),
                            n = t,
                            s = 0 | n.words[n.length - 1];
                        0 !== (r = 26 - this._countBits(s)) && (n = n.ushln(r), e.iushln(r), s = 0 | n.words[n.length - 1]);
                        var u, o = e.length - n.length;
                        if ("mod" !== i) {
                            (u = new h(null)).length = o + 1, u.words = new Array(u.length);
                            for (var a = 0; a < u.length; a++) u.words[a] = 0
                        }
                        var l = e.clone()._ishlnsubmul(n, 1, o);
                        0 === l.negative && (e = l, u && (u.words[o] = 1));
                        for (var f = o - 1; f >= 0; f--) {
                            var p = 67108864 * (0 | e.words[n.length + f]) + (0 | e.words[n.length + f - 1]);
                            for (p = Math.min(p / s | 0, 67108863), e._ishlnsubmul(n, p, f); 0 !== e.negative;) p--, e.negative = 0, e._ishlnsubmul(n, 1, f), e.isZero() || (e.negative ^= 1);
                            u && (u.words[f] = p)
                        }
                        return u && u._strip(), e._strip(), "div" !== i && 0 !== r && e.iushrn(r), {
                            div: u || null,
                            mod: e
                        }
                    }, h.prototype.divmod = function(t, i, r) {
                        return e(!t.isZero()), this.isZero() ? {
                            div: new h(0),
                            mod: new h(0)
                        } : 0 !== this.negative && 0 === t.negative ? (u = this.neg().divmod(t, i), "mod" !== i && (n = u.div.neg()), "div" !== i && (s = u.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
                            div: n,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (u = this.divmod(t.neg(), i), "mod" !== i && (n = u.div.neg()), {
                            div: n,
                            mod: u.mod
                        }) : 0 != (this.negative & t.negative) ? (u = this.neg().divmod(t.neg(), i), "div" !== i && (s = u.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
                            div: u.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new h(0),
                            mod: this
                        } : 1 === t.length ? "div" === i ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === i ? {
                            div: null,
                            mod: new h(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new h(this.modrn(t.words[0]))
                        } : this._wordDiv(t, i);
                        var n, s, u
                    }, h.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, h.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, h.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, h.prototype.divRound = function(t) {
                        var i = this.divmod(t);
                        if (i.mod.isZero()) return i.div;
                        var r = 0 !== i.div.negative ? i.mod.isub(t) : i.mod,
                            e = t.ushrn(1),
                            n = t.andln(1),
                            h = r.cmp(e);
                        return h < 0 || 1 === n && 0 === h ? i.div : 0 !== i.div.negative ? i.div.isubn(1) : i.div.iaddn(1)
                    }, h.prototype.modrn = function(t) {
                        var i = t < 0;
                        i && (t = -t), e(t <= 67108863);
                        for (var r = (1 << 26) % t, n = 0, h = this.length - 1; h >= 0; h--) n = (r * n + (0 | this.words[h])) % t;
                        return i ? -n : n
                    }, h.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, h.prototype.idivn = function(t) {
                        var i = t < 0;
                        i && (t = -t), e(t <= 67108863);
                        for (var r = 0, n = this.length - 1; n >= 0; n--) {
                            var h = (0 | this.words[n]) + 67108864 * r;
                            this.words[n] = h / t | 0, r = h % t
                        }
                        return this._strip(), i ? this.ineg() : this
                    }, h.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, h.prototype.egcd = function(t) {
                        e(0 === t.negative), e(!t.isZero());
                        var i = this,
                            r = t.clone();
                        i = 0 !== i.negative ? i.umod(t) : i.clone();
                        for (var n = new h(1), s = new h(0), u = new h(0), o = new h(1), a = 0; i.isEven() && r.isEven();) i.iushrn(1), r.iushrn(1), ++a;
                        for (var l = r.clone(), f = i.clone(); !i.isZero();) {
                            for (var p = 0, m = 1; 0 == (i.words[0] & m) && p < 26; ++p, m <<= 1);
                            if (p > 0)
                                for (i.iushrn(p); p-- > 0;)(n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(f)), n.iushrn(1), s.iushrn(1);
                            for (var d = 0, c = 1; 0 == (r.words[0] & c) && d < 26; ++d, c <<= 1);
                            if (d > 0)
                                for (r.iushrn(d); d-- > 0;)(u.isOdd() || o.isOdd()) && (u.iadd(l), o.isub(f)), u.iushrn(1), o.iushrn(1);
                            i.cmp(r) >= 0 ? (i.isub(r), n.isub(u), s.isub(o)) : (r.isub(i), u.isub(n), o.isub(s))
                        }
                        return {
                            a: u,
                            b: o,
                            gcd: r.iushln(a)
                        }
                    }, h.prototype._invmp = function(t) {
                        e(0 === t.negative), e(!t.isZero());
                        var i = this,
                            r = t.clone();
                        i = 0 !== i.negative ? i.umod(t) : i.clone();
                        for (var n, s = new h(1), u = new h(0), o = r.clone(); i.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                            for (var a = 0, l = 1; 0 == (i.words[0] & l) && a < 26; ++a, l <<= 1);
                            if (a > 0)
                                for (i.iushrn(a); a-- > 0;) s.isOdd() && s.iadd(o), s.iushrn(1);
                            for (var f = 0, p = 1; 0 == (r.words[0] & p) && f < 26; ++f, p <<= 1);
                            if (f > 0)
                                for (r.iushrn(f); f-- > 0;) u.isOdd() && u.iadd(o), u.iushrn(1);
                            i.cmp(r) >= 0 ? (i.isub(r), s.isub(u)) : (r.isub(i), u.isub(s))
                        }
                        return (n = 0 === i.cmpn(1) ? s : u).cmpn(0) < 0 && n.iadd(t), n
                    }, h.prototype.gcd = function(t) {
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
                                var h = i;
                                i = r, r = h
                            } else if (0 === n || 0 === r.cmpn(1)) break;
                            i.isub(r)
                        }
                        return r.iushln(e)
                    }, h.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, h.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, h.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, h.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, h.prototype.bincn = function(t) {
                        e("number" == typeof t);
                        var i = t % 26,
                            r = (t - i) / 26,
                            n = 1 << i;
                        if (this.length <= r) return this._expand(r + 1), this.words[r] |= n, this;
                        for (var h = n, s = r; 0 !== h && s < this.length; s++) {
                            var u = 0 | this.words[s];
                            h = (u += h) >>> 26, u &= 67108863, this.words[s] = u
                        }
                        return 0 !== h && (this.words[s] = h, this.length++), this
                    }, h.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, h.prototype.cmpn = function(t) {
                        var i, r = t < 0;
                        if (0 !== this.negative && !r) return -1;
                        if (0 === this.negative && r) return 1;
                        if (this._strip(), this.length > 1) i = 1;
                        else {
                            r && (t = -t), e(t <= 67108863, "Number is too big");
                            var n = 0 | this.words[0];
                            i = n === t ? 0 : n < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -i : i
                    }, h.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var i = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -i : i
                    }, h.prototype.ucmp = function(t) {
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
                    }, h.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, h.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, h.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, h.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, h.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, h.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, h.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, h.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, h.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, h.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, h.red = function(t) {
                        return new N(t)
                    }, h.prototype.toRed = function(t) {
                        return e(!this.red, "Already a number in reduction context"), e(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, h.prototype.fromRed = function() {
                        return e(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, h.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, h.prototype.forceRed = function(t) {
                        return e(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, h.prototype.redAdd = function(t) {
                        return e(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, h.prototype.redIAdd = function(t) {
                        return e(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, h.prototype.redSub = function(t) {
                        return e(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, h.prototype.redISub = function(t) {
                        return e(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, h.prototype.redShl = function(t) {
                        return e(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, h.prototype.redMul = function(t) {
                        return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, h.prototype.redIMul = function(t) {
                        return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, h.prototype.redSqr = function() {
                        return e(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, h.prototype.redISqr = function() {
                        return e(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, h.prototype.redSqrt = function() {
                        return e(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, h.prototype.redInvm = function() {
                        return e(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, h.prototype.redNeg = function() {
                        return e(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, h.prototype.redPow = function(t) {
                        return e(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var y = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function b(t, i) {
                        this.name = t, this.p = new h(i, 16), this.n = this.p.bitLength(), this.k = new h(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function _() {
                        b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function S() {
                        b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function A() {
                        b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function B() {
                        b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function N(t) {
                        if ("string" == typeof t) {
                            var i = h._prime(t);
                            this.m = i.p, this.prime = i
                        } else e(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function E(t) {
                        N.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new h(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    b.prototype._tmp = function() {
                        var t = new h(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, b.prototype.ireduce = function(t) {
                        var i, r = t;
                        do {
                            this.split(r, this.tmp), i = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (i > this.n);
                        var e = i < this.n ? -1 : r.ucmp(this.p);
                        return 0 === e ? (r.words[0] = 0, r.length = 1) : e > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                    }, b.prototype.split = function(t, i) {
                        t.iushrn(this.n, 0, i)
                    }, b.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, n(_, b), _.prototype.split = function(t, i) {
                        for (var r = Math.min(t.length, 9), e = 0; e < r; e++) i.words[e] = t.words[e];
                        if (i.length = r, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var n = t.words[9];
                        for (i.words[i.length++] = 4194303 & n, e = 10; e < t.length; e++) {
                            var h = 0 | t.words[e];
                            t.words[e - 10] = (4194303 & h) << 4 | n >>> 22, n = h
                        }
                        n >>>= 22, t.words[e - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, _.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var i = 0, r = 0; r < t.length; r++) {
                            var e = 0 | t.words[r];
                            i += 977 * e, t.words[r] = 67108863 & i, i = 64 * e + (i / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, n(S, b), n(A, b), n(B, b), B.prototype.imulK = function(t) {
                        for (var i = 0, r = 0; r < t.length; r++) {
                            var e = 19 * (0 | t.words[r]) + i,
                                n = 67108863 & e;
                            e >>>= 26, t.words[r] = n, i = e
                        }
                        return 0 !== i && (t.words[t.length++] = i), t
                    }, h._prime = function(t) {
                        if (y[t]) return y[t];
                        var i;
                        if ("k256" === t) i = new _;
                        else if ("p224" === t) i = new S;
                        else if ("p192" === t) i = new A;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            i = new B
                        }
                        return y[t] = i, i
                    }, N.prototype._verify1 = function(t) {
                        e(0 === t.negative, "red works only with positives"), e(t.red, "red works only with red numbers")
                    }, N.prototype._verify2 = function(t, i) {
                        e(0 == (t.negative | i.negative), "red works only with positives"), e(t.red && t.red === i.red, "red works only with red numbers")
                    }, N.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (l(t, t.umod(this.m)._forceRed(this)), t)
                    }, N.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, N.prototype.add = function(t, i) {
                        this._verify2(t, i);
                        var r = t.add(i);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                    }, N.prototype.iadd = function(t, i) {
                        this._verify2(t, i);
                        var r = t.iadd(i);
                        return r.cmp(this.m) >= 0 && r.isub(this.m), r
                    }, N.prototype.sub = function(t, i) {
                        this._verify2(t, i);
                        var r = t.sub(i);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                    }, N.prototype.isub = function(t, i) {
                        this._verify2(t, i);
                        var r = t.isub(i);
                        return r.cmpn(0) < 0 && r.iadd(this.m), r
                    }, N.prototype.shl = function(t, i) {
                        return this._verify1(t), this.imod(t.ushln(i))
                    }, N.prototype.imul = function(t, i) {
                        return this._verify2(t, i), this.imod(t.imul(i))
                    }, N.prototype.mul = function(t, i) {
                        return this._verify2(t, i), this.imod(t.mul(i))
                    }, N.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, N.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, N.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var i = this.m.andln(3);
                        if (e(i % 2 == 1), 3 === i) {
                            var r = this.m.add(new h(1)).iushrn(2);
                            return this.pow(t, r)
                        }
                        for (var n = this.m.subn(1), s = 0; !n.isZero() && 0 === n.andln(1);) s++, n.iushrn(1);
                        e(!n.isZero());
                        var u = new h(1).toRed(this),
                            o = u.redNeg(),
                            a = this.m.subn(1).iushrn(1),
                            l = this.m.bitLength();
                        for (l = new h(2 * l * l).toRed(this); 0 !== this.pow(l, a).cmp(o);) l.redIAdd(o);
                        for (var f = this.pow(l, n), p = this.pow(t, n.addn(1).iushrn(1)), m = this.pow(t, n), d = s; 0 !== m.cmp(u);) {
                            for (var c = m, g = 0; 0 !== c.cmp(u); g++) c = c.redSqr();
                            e(g < d);
                            var M = this.pow(f, new h(1).iushln(d - g - 1));
                            p = p.redMul(M), f = M.redSqr(), m = m.redMul(f), d = g
                        }
                        return p
                    }, N.prototype.invm = function(t) {
                        var i = t._invmp(this.m);
                        return 0 !== i.negative ? (i.negative = 0, this.imod(i).redNeg()) : this.imod(i)
                    }, N.prototype.pow = function(t, i) {
                        if (i.isZero()) return new h(1).toRed(this);
                        if (0 === i.cmpn(1)) return t.clone();
                        var r = new Array(16);
                        r[0] = new h(1).toRed(this), r[1] = t;
                        for (var e = 2; e < r.length; e++) r[e] = this.mul(r[e - 1], t);
                        var n = r[0],
                            s = 0,
                            u = 0,
                            o = i.bitLength() % 26;
                        for (0 === o && (o = 26), e = i.length - 1; e >= 0; e--) {
                            for (var a = i.words[e], l = o - 1; l >= 0; l--) {
                                var f = a >> l & 1;
                                n !== r[0] && (n = this.sqr(n)), 0 !== f || 0 !== s ? (s <<= 1, s |= f, (4 === ++u || 0 === e && 0 === l) && (n = this.mul(n, r[s]), u = 0, s = 0)) : u = 0
                            }
                            o = 26
                        }
                        return n
                    }, N.prototype.convertTo = function(t) {
                        var i = t.umod(this.m);
                        return i === t ? i.clone() : i
                    }, N.prototype.convertFrom = function(t) {
                        var i = t.clone();
                        return i.red = null, i
                    }, h.mont = function(t) {
                        return new E(t)
                    }, n(E, N), E.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, E.prototype.convertFrom = function(t) {
                        var i = this.imod(t.mul(this.rinv));
                        return i.red = null, i
                    }, E.prototype.imul = function(t, i) {
                        if (t.isZero() || i.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var r = t.imul(i),
                            e = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = r.isub(e).iushrn(this.shift),
                            h = n;
                        return n.cmp(this.m) >= 0 ? h = n.isub(this.m) : n.cmpn(0) < 0 && (h = n.iadd(this.m)), h._forceRed(this)
                    }, E.prototype.mul = function(t, i) {
                        if (t.isZero() || i.isZero()) return new h(0)._forceRed(this);
                        var r = t.mul(i),
                            e = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = r.isub(e).iushrn(this.shift),
                            s = n;
                        return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
                    }, E.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, r(81)(t))
        },
        4235: function(t, i, r) {
            "use strict";
            const e = r(2017),
                n = r(1139);
            class Diagnose extends e {
                createTag(t, i) {
                    return `${t}(${i})`
                }
                createInt(t) {
                    return super.createInt(t).toString()
                }
                createInt32(t, i) {
                    return super.createInt32(t, i).toString()
                }
                createInt64(t, i, r, e) {
                    return super.createInt64(t, i, r, e).toString()
                }
                createInt32Neg(t, i) {
                    return super.createInt32Neg(t, i).toString()
                }
                createInt64Neg(t, i, r, e) {
                    return super.createInt64Neg(t, i, r, e).toString()
                }
                createTrue() {
                    return "true"
                }
                createFalse() {
                    return "false"
                }
                createFloat(t) {
                    const i = super.createFloat(t);
                    return n.isNegativeZero(t) ? "-0_1" : i + "_1"
                }
                createFloatSingle(t, i, r, e) {
                    return super.createFloatSingle(t, i, r, e) + "_2"
                }
                createFloatDouble(t, i, r, e, n, h, s, u) {
                    return super.createFloatDouble(t, i, r, e, n, h, s, u) + "_3"
                }
                createByteString(t, i) {
                    const r = t.join(", ");
                    return -1 === i ? `(_ ${r})` : "h'" + r
                }
                createByteStringFromHeap(t, i) {
                    return `h'${Buffer.from(super.createByteStringFromHeap(t,i)).toString("hex")}'`
                }
                createInfinity() {
                    return "Infinity_1"
                }
                createInfinityNeg() {
                    return "-Infinity_1"
                }
                createNaN() {
                    return "NaN_1"
                }
                createNaNNeg() {
                    return "-NaN_1"
                }
                createNull() {
                    return "null"
                }
                createUndefined() {
                    return "undefined"
                }
                createSimpleUnassigned(t) {
                    return `simple(${t})`
                }
                createArray(t, i) {
                    const r = super.createArray(t, i);
                    return -1 === i ? `[_ ${r.join(", ")}]` : `[${r.join(", ")}]`
                }
                createMap(t, i) {
                    const r = super.createMap(t),
                        e = Array.from(r.keys()).reduce(h(r), "");
                    return -1 === i ? `{_ ${e}}` : `{${e}}`
                }
                createObject(t, i) {
                    const r = super.createObject(t),
                        e = Object.keys(r).reduce(h(r), "");
                    return -1 === i ? `{_ ${e}}` : `{${e}}`
                }
                createUtf8String(t, i) {
                    const r = t.join(", ");
                    return -1 === i ? `(_ ${r})` : `"${r}"`
                }
                createUtf8StringFromHeap(t, i) {
                    return `"${Buffer.from(super.createUtf8StringFromHeap(t,i)).toString("utf8")}"`
                }
                static diagnose(t, i) {
                    "string" == typeof t && (t = Buffer.from(t, i || "hex"));
                    return (new Diagnose).decodeFirst(t)
                }
            }

            function h(t) {
                return (i, r) => i ? `${i}, ${r}: ${t[r]}` : `${r}: ${t[r]}`
            }
            t.exports = Diagnose
        },
        4236: function(t, i) {
            t.exports = function(t, i, r) {
                "use asm";
                var e = new t.Uint8Array(r);
                var n = i.pushInt;
                var h = i.pushInt32;
                var s = i.pushInt32Neg;
                var u = i.pushInt64;
                var o = i.pushInt64Neg;
                var a = i.pushFloat;
                var l = i.pushFloatSingle;
                var f = i.pushFloatDouble;
                var p = i.pushTrue;
                var m = i.pushFalse;
                var d = i.pushUndefined;
                var c = i.pushNull;
                var g = i.pushInfinity;
                var M = i.pushInfinityNeg;
                var v = i.pushNaN;
                var w = i.pushNaNNeg;
                var y = i.pushArrayStart;
                var b = i.pushArrayStartFixed;
                var _ = i.pushArrayStartFixed32;
                var S = i.pushArrayStartFixed64;
                var A = i.pushObjectStart;
                var B = i.pushObjectStartFixed;
                var N = i.pushObjectStartFixed32;
                var E = i.pushObjectStartFixed64;
                var I = i.pushByteString;
                var T = i.pushByteStringStart;
                var R = i.pushUtf8String;
                var U = i.pushUtf8StringStart;
                var F = i.pushSimpleUnassigned;
                var x = i.pushTagStart;
                var k = i.pushTagStart4;
                var O = i.pushTagStart8;
                var L = i.pushTagUnassigned;
                var P = i.pushBreak;
                var D = t.Math.pow;
                var j = 0;
                var z = 0;
                var Z = 0;

                function q(t) {
                    t = t | 0;
                    j = 0;
                    z = t;
                    while ((j | 0) < (z | 0)) {
                        Z = Jt[e[j] & 255](e[j] | 0) | 0;
                        if ((Z | 0) > 0) {
                            break
                        }
                    }
                    return Z | 0
                }

                function G(t) {
                    t = t | 0;
                    if (((j | 0) + (t | 0) | 0) < (z | 0)) {
                        return 0
                    }
                    return 1
                }

                function $(t) {
                    t = t | 0;
                    return e[t | 0] << 8 | e[t + 1 | 0] | 0
                }

                function H(t) {
                    t = t | 0;
                    return e[t | 0] << 24 | e[t + 1 | 0] << 16 | e[t + 2 | 0] << 8 | e[t + 3 | 0] | 0
                }

                function C(t) {
                    t = t | 0;
                    n(t | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function K(t) {
                    t = t | 0;
                    if (G(1) | 0) {
                        return 1
                    }
                    n(e[j + 1 | 0] | 0);
                    j = j + 2 | 0;
                    return 0
                }

                function Y(t) {
                    t = t | 0;
                    if (G(2) | 0) {
                        return 1
                    }
                    n($(j + 1 | 0) | 0);
                    j = j + 3 | 0;
                    return 0
                }

                function W(t) {
                    t = t | 0;
                    if (G(4) | 0) {
                        return 1
                    }
                    h($(j + 1 | 0) | 0, $(j + 3 | 0) | 0);
                    j = j + 5 | 0;
                    return 0
                }

                function J(t) {
                    t = t | 0;
                    if (G(8) | 0) {
                        return 1
                    }
                    u($(j + 1 | 0) | 0, $(j + 3 | 0) | 0, $(j + 5 | 0) | 0, $(j + 7 | 0) | 0);
                    j = j + 9 | 0;
                    return 0
                }

                function X(t) {
                    t = t | 0;
                    n(-1 - (t - 32 | 0) | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function Q(t) {
                    t = t | 0;
                    if (G(1) | 0) {
                        return 1
                    }
                    n(-1 - (e[j + 1 | 0] | 0) | 0);
                    j = j + 2 | 0;
                    return 0
                }

                function V(t) {
                    t = t | 0;
                    var i = 0;
                    if (G(2) | 0) {
                        return 1
                    }
                    i = $(j + 1 | 0) | 0;
                    n(-1 - (i | 0) | 0);
                    j = j + 3 | 0;
                    return 0
                }

                function tt(t) {
                    t = t | 0;
                    if (G(4) | 0) {
                        return 1
                    }
                    s($(j + 1 | 0) | 0, $(j + 3 | 0) | 0);
                    j = j + 5 | 0;
                    return 0
                }

                function it(t) {
                    t = t | 0;
                    if (G(8) | 0) {
                        return 1
                    }
                    o($(j + 1 | 0) | 0, $(j + 3 | 0) | 0, $(j + 5 | 0) | 0, $(j + 7 | 0) | 0);
                    j = j + 9 | 0;
                    return 0
                }

                function rt(t) {
                    t = t | 0;
                    var i = 0;
                    var r = 0;
                    var e = 0;
                    e = t - 64 | 0;
                    if (G(e | 0) | 0) {
                        return 1
                    }
                    i = j + 1 | 0;
                    r = (j + 1 | 0) + (e | 0) | 0;
                    I(i | 0, r | 0);
                    j = r | 0;
                    return 0
                }

                function et(t) {
                    t = t | 0;
                    var i = 0;
                    var r = 0;
                    var n = 0;
                    if (G(1) | 0) {
                        return 1
                    }
                    n = e[j + 1 | 0] | 0;
                    i = j + 2 | 0;
                    r = (j + 2 | 0) + (n | 0) | 0;
                    if (G(n + 1 | 0) | 0) {
                        return 1
                    }
                    I(i | 0, r | 0);
                    j = r | 0;
                    return 0
                }

                function nt(t) {
                    t = t | 0;
                    var i = 0;
                    var r = 0;
                    var e = 0;
                    if (G(2) | 0) {
                        return 1
                    }
                    e = $(j + 1 | 0) | 0;
                    i = j + 3 | 0;
                    r = (j + 3 | 0) + (e | 0) | 0;
                    if (G(e + 2 | 0) | 0) {
                        return 1
                    }
                    I(i | 0, r | 0);
                    j = r | 0;
                    return 0
                }

                function ht(t) {
                    t = t | 0;
                    var i = 0;
                    var r = 0;
                    var e = 0;
                    if (G(4) | 0) {
                        return 1
                    }
                    e = H(j + 1 | 0) | 0;
                    i = j + 5 | 0;
                    r = (j + 5 | 0) + (e | 0) | 0;
                    if (G(e + 4 | 0) | 0) {
                        return 1
                    }
                    I(i | 0, r | 0);
                    j = r | 0;
                    return 0
                }

                function st(t) {
                    t = t | 0;
                    return 1
                }

                function ut(t) {
                    t = t | 0;
                    T();
                    j = j + 1 | 0;
                    return 0
                }

                function ot(t) {
                    t = t | 0;
                    var i = 0;
                    var r = 0;
                    var e = 0;
                    e = t - 96 | 0;
                    if (G(e | 0) | 0) {
                        return 1
                    }
                    i = j + 1 | 0;
                    r = (j + 1 | 0) + (e | 0) | 0;
                    R(i | 0, r | 0);
                    j = r | 0;
                    return 0
                }

                function at(t) {
                    t = t | 0;
                    var i = 0;
                    var r = 0;
                    var n = 0;
                    if (G(1) | 0) {
                        return 1
                    }
                    n = e[j + 1 | 0] | 0;
                    i = j + 2 | 0;
                    r = (j + 2 | 0) + (n | 0) | 0;
                    if (G(n + 1 | 0) | 0) {
                        return 1
                    }
                    R(i | 0, r | 0);
                    j = r | 0;
                    return 0
                }

                function lt(t) {
                    t = t | 0;
                    var i = 0;
                    var r = 0;
                    var e = 0;
                    if (G(2) | 0) {
                        return 1
                    }
                    e = $(j + 1 | 0) | 0;
                    i = j + 3 | 0;
                    r = (j + 3 | 0) + (e | 0) | 0;
                    if (G(e + 2 | 0) | 0) {
                        return 1
                    }
                    R(i | 0, r | 0);
                    j = r | 0;
                    return 0
                }

                function ft(t) {
                    t = t | 0;
                    var i = 0;
                    var r = 0;
                    var e = 0;
                    if (G(4) | 0) {
                        return 1
                    }
                    e = H(j + 1 | 0) | 0;
                    i = j + 5 | 0;
                    r = (j + 5 | 0) + (e | 0) | 0;
                    if (G(e + 4 | 0) | 0) {
                        return 1
                    }
                    R(i | 0, r | 0);
                    j = r | 0;
                    return 0
                }

                function pt(t) {
                    t = t | 0;
                    return 1
                }

                function mt(t) {
                    t = t | 0;
                    U();
                    j = j + 1 | 0;
                    return 0
                }

                function dt(t) {
                    t = t | 0;
                    b(t - 128 | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function ct(t) {
                    t = t | 0;
                    if (G(1) | 0) {
                        return 1
                    }
                    b(e[j + 1 | 0] | 0);
                    j = j + 2 | 0;
                    return 0
                }

                function gt(t) {
                    t = t | 0;
                    if (G(2) | 0) {
                        return 1
                    }
                    b($(j + 1 | 0) | 0);
                    j = j + 3 | 0;
                    return 0
                }

                function Mt(t) {
                    t = t | 0;
                    if (G(4) | 0) {
                        return 1
                    }
                    _($(j + 1 | 0) | 0, $(j + 3 | 0) | 0);
                    j = j + 5 | 0;
                    return 0
                }

                function vt(t) {
                    t = t | 0;
                    if (G(8) | 0) {
                        return 1
                    }
                    S($(j + 1 | 0) | 0, $(j + 3 | 0) | 0, $(j + 5 | 0) | 0, $(j + 7 | 0) | 0);
                    j = j + 9 | 0;
                    return 0
                }

                function wt(t) {
                    t = t | 0;
                    y();
                    j = j + 1 | 0;
                    return 0
                }

                function yt(t) {
                    t = t | 0;
                    var i = 0;
                    i = t - 160 | 0;
                    if (G(i | 0) | 0) {
                        return 1
                    }
                    B(i | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function bt(t) {
                    t = t | 0;
                    if (G(1) | 0) {
                        return 1
                    }
                    B(e[j + 1 | 0] | 0);
                    j = j + 2 | 0;
                    return 0
                }

                function _t(t) {
                    t = t | 0;
                    if (G(2) | 0) {
                        return 1
                    }
                    B($(j + 1 | 0) | 0);
                    j = j + 3 | 0;
                    return 0
                }

                function St(t) {
                    t = t | 0;
                    if (G(4) | 0) {
                        return 1
                    }
                    N($(j + 1 | 0) | 0, $(j + 3 | 0) | 0);
                    j = j + 5 | 0;
                    return 0
                }

                function At(t) {
                    t = t | 0;
                    if (G(8) | 0) {
                        return 1
                    }
                    E($(j + 1 | 0) | 0, $(j + 3 | 0) | 0, $(j + 5 | 0) | 0, $(j + 7 | 0) | 0);
                    j = j + 9 | 0;
                    return 0
                }

                function Bt(t) {
                    t = t | 0;
                    A();
                    j = j + 1 | 0;
                    return 0
                }

                function Nt(t) {
                    t = t | 0;
                    x(t - 192 | 0 | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function Et(t) {
                    t | 0;
                    x(t | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function It(t) {
                    t | 0;
                    x(t | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function Tt(t) {
                    t | 0;
                    x(t | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function Rt(t) {
                    t | 0;
                    x(t | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function Ut(t) {
                    t = t | 0;
                    x(t - 192 | 0 | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function Ft(t) {
                    t | 0;
                    x(t | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function xt(t) {
                    t | 0;
                    x(t | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function kt(t) {
                    t | 0;
                    x(t | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function Ot(t) {
                    t = t | 0;
                    if (G(1) | 0) {
                        return 1
                    }
                    x(e[j + 1 | 0] | 0);
                    j = j + 2 | 0;
                    return 0
                }

                function Lt(t) {
                    t = t | 0;
                    if (G(2) | 0) {
                        return 1
                    }
                    x($(j + 1 | 0) | 0);
                    j = j + 3 | 0;
                    return 0
                }

                function Pt(t) {
                    t = t | 0;
                    if (G(4) | 0) {
                        return 1
                    }
                    k($(j + 1 | 0) | 0, $(j + 3 | 0) | 0);
                    j = j + 5 | 0;
                    return 0
                }

                function Dt(t) {
                    t = t | 0;
                    if (G(8) | 0) {
                        return 1
                    }
                    O($(j + 1 | 0) | 0, $(j + 3 | 0) | 0, $(j + 5 | 0) | 0, $(j + 7 | 0) | 0);
                    j = j + 9 | 0;
                    return 0
                }

                function jt(t) {
                    t = t | 0;
                    F((t | 0) - 224 | 0);
                    j = j + 1 | 0;
                    return 0
                }

                function zt(t) {
                    t = t | 0;
                    m();
                    j = j + 1 | 0;
                    return 0
                }

                function Zt(t) {
                    t = t | 0;
                    p();
                    j = j + 1 | 0;
                    return 0
                }

                function qt(t) {
                    t = t | 0;
                    c();
                    j = j + 1 | 0;
                    return 0
                }

                function Gt(t) {
                    t = t | 0;
                    d();
                    j = j + 1 | 0;
                    return 0
                }

                function $t(t) {
                    t = t | 0;
                    if (G(1) | 0) {
                        return 1
                    }
                    F(e[j + 1 | 0] | 0);
                    j = j + 2 | 0;
                    return 0
                }

                function Ht(t) {
                    t = t | 0;
                    var i = 0;
                    var r = 0;
                    var n = 1.0;
                    var h = 0.0;
                    var s = 0.0;
                    var u = 0.0;
                    if (G(2) | 0) {
                        return 1
                    }
                    i = e[j + 1 | 0] | 0;
                    r = e[j + 2 | 0] | 0;
                    if ((i | 0) & 0x80) {
                        n = -1.0
                    }
                    h = +(((i | 0) & 0x7C) >> 2);
                    s = +(((i | 0) & 0x03) << 8 | r);
                    if (+h == 0.0) {
                        a(+(+n * +5.9604644775390625e-8 * +s))
                    } else if (+h == 31.0) {
                        if (+n == 1.0) {
                            if (+s > 0.0) {
                                v()
                            } else {
                                g()
                            }
                        } else {
                            if (+s > 0.0) {
                                w()
                            } else {
                                M()
                            }
                        }
                    } else {
                        a(+(+n * D(+2, +(+h - 25.0)) * +(1024.0 + s)))
                    }
                    j = j + 3 | 0;
                    return 0
                }

                function Ct(t) {
                    t = t | 0;
                    if (G(4) | 0) {
                        return 1
                    }
                    l(e[j + 1 | 0] | 0, e[j + 2 | 0] | 0, e[j + 3 | 0] | 0, e[j + 4 | 0] | 0);
                    j = j + 5 | 0;
                    return 0
                }

                function Kt(t) {
                    t = t | 0;
                    if (G(8) | 0) {
                        return 1
                    }
                    f(e[j + 1 | 0] | 0, e[j + 2 | 0] | 0, e[j + 3 | 0] | 0, e[j + 4 | 0] | 0, e[j + 5 | 0] | 0, e[j + 6 | 0] | 0, e[j + 7 | 0] | 0, e[j + 8 | 0] | 0);
                    j = j + 9 | 0;
                    return 0
                }

                function Yt(t) {
                    t = t | 0;
                    return 1
                }

                function Wt(t) {
                    t = t | 0;
                    P();
                    j = j + 1 | 0;
                    return 0
                }
                var Jt = [C, C, C, C, C, C, C, C, C, C, C, C, C, C, C, C, C, C, C, C, C, C, C, C, K, Y, W, J, Yt, Yt, Yt, Yt, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, Q, V, tt, it, Yt, Yt, Yt, Yt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, rt, et, nt, ht, st, Yt, Yt, Yt, ut, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, ot, at, lt, ft, pt, Yt, Yt, Yt, mt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, dt, ct, gt, Mt, vt, Yt, Yt, Yt, wt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, yt, bt, _t, St, At, Yt, Yt, Yt, Bt, Nt, Nt, Nt, Nt, Nt, Nt, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ut, Ot, Lt, Pt, Dt, Yt, Yt, Yt, Yt, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt, jt, zt, Zt, qt, Gt, $t, Ht, Ct, Kt, Yt, Yt, Yt, Wt];
                return {
                    parse: q
                }
            }
        },
        4237: function(t, i, r) {
            "use strict";
            const {
                URLWithLegacySupport: e,
                format: n
            } = r(2021);
            t.exports = (t, i = {}, r = {}, h) => {
                let s, u = i.protocol ? i.protocol.replace(":", "") : "http";
                u = (r[u] || h || u) + ":";
                try {
                    s = new e(t)
                } catch (t) {
                    s = {}
                }
                const o = Object.assign({}, i, {
                    protocol: u || s.protocol,
                    host: i.host || s.host
                });
                return new e(t, n(o)).toString()
            }
        },
        4238: function(t, i, r) {
            "use strict";
            const {
                URL: e
            } = r(2020), n = r(61), h = r(1139), s = r(670), u = s.MT, o = s.NUMBYTES, a = s.SHIFT32, l = s.SYMS, f = s.TAG, p = s.MT.SIMPLE_FLOAT << 5 | s.NUMBYTES.TWO, m = s.MT.SIMPLE_FLOAT << 5 | s.NUMBYTES.FOUR, d = s.MT.SIMPLE_FLOAT << 5 | s.NUMBYTES.EIGHT, c = s.MT.SIMPLE_FLOAT << 5 | s.SIMPLE.TRUE, g = s.MT.SIMPLE_FLOAT << 5 | s.SIMPLE.FALSE, M = s.MT.SIMPLE_FLOAT << 5 | s.SIMPLE.UNDEFINED, v = s.MT.SIMPLE_FLOAT << 5 | s.SIMPLE.NULL, w = new n("0x20000000000000"), y = Buffer.from("f97e00", "hex"), b = Buffer.from("f9fc00", "hex"), _ = Buffer.from("f97c00", "hex");
            class Encoder {
                constructor(t) {
                    t = t || {}, this.streaming = "function" == typeof t.stream, this.onData = t.stream, this.semanticTypes = [
                        [e, this._pushUrl],
                        [n, this._pushBigNumber]
                    ];
                    const i = t.genTypes || [],
                        r = i.length;
                    for (let t = 0; t < r; t++) this.addSemanticType(i[t][0], i[t][1]);
                    this._reset()
                }
                addSemanticType(t, i) {
                    const r = this.semanticTypes.length;
                    for (let e = 0; e < r; e++) {
                        if (this.semanticTypes[e][0] === t) {
                            const t = this.semanticTypes[e][1];
                            return this.semanticTypes[e][1] = i, t
                        }
                    }
                    return this.semanticTypes.push([t, i]), null
                }
                push(t) {
                    return !t || (this.result[this.offset] = t, this.resultMethod[this.offset] = 0, this.resultLength[this.offset] = t.length, this.offset++, this.streaming && this.onData(this.finalize()), !0)
                }
                pushWrite(t, i, r) {
                    return this.result[this.offset] = t, this.resultMethod[this.offset] = i, this.resultLength[this.offset] = r, this.offset++, this.streaming && this.onData(this.finalize()), !0
                }
                _pushUInt8(t) {
                    return this.pushWrite(t, 1, 1)
                }
                _pushUInt16BE(t) {
                    return this.pushWrite(t, 2, 2)
                }
                _pushUInt32BE(t) {
                    return this.pushWrite(t, 3, 4)
                }
                _pushDoubleBE(t) {
                    return this.pushWrite(t, 4, 8)
                }
                _pushNaN() {
                    return this.push(y)
                }
                _pushInfinity(t) {
                    const i = t < 0 ? b : _;
                    return this.push(i)
                }
                _pushFloat(t) {
                    const i = Buffer.allocUnsafe(2);
                    if (h.writeHalf(i, t) && h.parseHalf(i) === t) return this._pushUInt8(p) && this.push(i);
                    const r = Buffer.allocUnsafe(4);
                    return r.writeFloatBE(t, 0), r.readFloatBE(0) === t ? this._pushUInt8(m) && this.push(r) : this._pushUInt8(d) && this._pushDoubleBE(t)
                }
                _pushInt(t, i, r) {
                    const e = i << 5;
                    return t < 24 ? this._pushUInt8(e | t) : t <= 255 ? this._pushUInt8(e | o.ONE) && this._pushUInt8(t) : t <= 65535 ? this._pushUInt8(e | o.TWO) && this._pushUInt16BE(t) : t <= 4294967295 ? this._pushUInt8(e | o.FOUR) && this._pushUInt32BE(t) : t <= Number.MAX_SAFE_INTEGER ? this._pushUInt8(e | o.EIGHT) && this._pushUInt32BE(Math.floor(t / a)) && this._pushUInt32BE(t % a) : i === u.NEG_INT ? this._pushFloat(r) : this._pushFloat(t)
                }
                _pushIntNum(t) {
                    return t < 0 ? this._pushInt(-t - 1, u.NEG_INT, t) : this._pushInt(t, u.POS_INT)
                }
                _pushNumber(t) {
                    switch (!1) {
                        case t == t:
                            return this._pushNaN(t);
                        case isFinite(t):
                            return this._pushInfinity(t);
                        case t % 1 != 0:
                            return this._pushIntNum(t);
                        default:
                            return this._pushFloat(t)
                    }
                }
                _pushString(t) {
                    const i = Buffer.byteLength(t, "utf8");
                    return this._pushInt(i, u.UTF8_STRING) && this.pushWrite(t, 5, i)
                }
                _pushBoolean(t) {
                    return this._pushUInt8(t ? c : g)
                }
                _pushUndefined(t) {
                    return this._pushUInt8(M)
                }
                _pushArray(t, i) {
                    const r = i.length;
                    if (!t._pushInt(r, u.ARRAY)) return !1;
                    for (let e = 0; e < r; e++)
                        if (!t.pushAny(i[e])) return !1;
                    return !0
                }
                _pushTag(t) {
                    return this._pushInt(t, u.TAG)
                }
                _pushDate(t, i) {
                    return t._pushTag(f.DATE_EPOCH) && t.pushAny(Math.round(i / 1e3))
                }
                _pushBuffer(t, i) {
                    return t._pushInt(i.length, u.BYTE_STRING) && t.push(i)
                }
                _pushNoFilter(t, i) {
                    return t._pushBuffer(t, i.slice())
                }
                _pushRegexp(t, i) {
                    return t._pushTag(f.REGEXP) && t.pushAny(i.source)
                }
                _pushSet(t, i) {
                    if (!t._pushInt(i.size, u.ARRAY)) return !1;
                    for (let r of i)
                        if (!t.pushAny(r)) return !1;
                    return !0
                }
                _pushUrl(t, i) {
                    return t._pushTag(f.URI) && t.pushAny(i.format())
                }
                _pushBigint(t) {
                    let i = f.POS_BIGINT;
                    t.isNegative() && (t = t.negated().minus(1), i = f.NEG_BIGINT);
                    let r = t.toString(16);
                    r.length % 2 && (r = "0" + r);
                    const e = Buffer.from(r, "hex");
                    return this._pushTag(i) && this._pushBuffer(this, e)
                }
                _pushBigNumber(t, i) {
                    if (i.isNaN()) return t._pushNaN();
                    if (!i.isFinite()) return t._pushInfinity(i.isNegative() ? -1 / 0 : 1 / 0);
                    if (i.isInteger()) return t._pushBigint(i);
                    if (!t._pushTag(f.DECIMAL_FRAC) || !t._pushInt(2, u.ARRAY)) return !1;
                    const r = i.decimalPlaces(),
                        e = i.multipliedBy(new n(10).pow(r));
                    return !!t._pushIntNum(-r) && (e.abs().isLessThan(w) ? t._pushIntNum(e.toNumber()) : t._pushBigint(e))
                }
                _pushMap(t, i) {
                    return !!t._pushInt(i.size, u.MAP) && this._pushRawMap(i.size, Array.from(i))
                }
                _pushObject(t) {
                    if (!t) return this._pushUInt8(v);
                    for (var i = this.semanticTypes.length, r = 0; r < i; r++)
                        if (t instanceof this.semanticTypes[r][0]) return this.semanticTypes[r][1].call(t, this, t);
                    var e = t.encodeCBOR;
                    if ("function" == typeof e) return e.call(t, this);
                    var n = Object.keys(t),
                        h = n.length;
                    return !!this._pushInt(h, u.MAP) && this._pushRawMap(h, n.map(i => [i, t[i]]))
                }
                _pushRawMap(t, i) {
                    i = i.map((function(t) {
                        return t[0] = Encoder.encode(t[0]), t
                    })).sort(h.keySorter);
                    for (var r = 0; r < t; r++) {
                        if (!this.push(i[r][0])) return !1;
                        if (!this.pushAny(i[r][1])) return !1
                    }
                    return !0
                }
                write(t) {
                    return this.pushAny(t)
                }
                pushAny(t) {
                    switch (function(t) {
                            return {}.toString.call(t).slice(8, -1)
                        }(t)) {
                        case "Number":
                            return this._pushNumber(t);
                        case "String":
                            return this._pushString(t);
                        case "Boolean":
                            return this._pushBoolean(t);
                        case "Object":
                            return this._pushObject(t);
                        case "Array":
                            return this._pushArray(this, t);
                        case "Uint8Array":
                            return this._pushBuffer(this, Buffer.isBuffer(t) ? t : Buffer.from(t));
                        case "Null":
                            return this._pushUInt8(v);
                        case "Undefined":
                            return this._pushUndefined(t);
                        case "Map":
                            return this._pushMap(this, t);
                        case "Set":
                            return this._pushSet(this, t);
                        case "URL":
                            return this._pushUrl(this, t);
                        case "BigNumber":
                            return this._pushBigNumber(this, t);
                        case "Date":
                            return this._pushDate(this, t);
                        case "RegExp":
                            return this._pushRegexp(this, t);
                        case "Symbol":
                            switch (t) {
                                case l.NULL:
                                    return this._pushObject(null);
                                case l.UNDEFINED:
                                    return this._pushUndefined(void 0);
                                default:
                                    throw new Error("Unknown symbol: " + t.toString())
                            }
                        default:
                            throw new Error("Unknown type: " + typeof t + ", " + (t ? t.toString() : ""))
                    }
                }
                finalize() {
                    if (0 === this.offset) return null;
                    for (var t = this.result, i = this.resultLength, r = this.resultMethod, e = this.offset, n = 0, h = 0; h < e; h++) n += i[h];
                    var s = Buffer.allocUnsafe(n),
                        u = 0,
                        o = 0;
                    for (h = 0; h < e; h++) {
                        switch (o = i[h], r[h]) {
                            case 0:
                                t[h].copy(s, u);
                                break;
                            case 1:
                                s.writeUInt8(t[h], u, !0);
                                break;
                            case 2:
                                s.writeUInt16BE(t[h], u, !0);
                                break;
                            case 3:
                                s.writeUInt32BE(t[h], u, !0);
                                break;
                            case 4:
                                s.writeDoubleBE(t[h], u, !0);
                                break;
                            case 5:
                                s.write(t[h], u, o, "utf8");
                                break;
                            default:
                                throw new Error("unkown method")
                        }
                        u += o
                    }
                    var a = s;
                    return this._reset(), a
                }
                _reset() {
                    this.result = [], this.resultMethod = [], this.resultLength = [], this.offset = 0
                }
                static encode(t) {
                    const i = new Encoder;
                    if (!i.pushAny(t)) throw new Error("Failed to encode input");
                    return i.finalize()
                }
            }
            t.exports = Encoder
        },
        670: function(t, i, r) {
            "use strict";
            const e = r(61);
            i.MT = {
                POS_INT: 0,
                NEG_INT: 1,
                BYTE_STRING: 2,
                UTF8_STRING: 3,
                ARRAY: 4,
                MAP: 5,
                TAG: 6,
                SIMPLE_FLOAT: 7
            }, i.TAG = {
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
            }, i.NUMBYTES = {
                ZERO: 0,
                ONE: 24,
                TWO: 25,
                FOUR: 26,
                EIGHT: 27,
                INDEFINITE: 31
            }, i.SIMPLE = {
                FALSE: 20,
                TRUE: 21,
                NULL: 22,
                UNDEFINED: 23
            }, i.SYMS = {
                NULL: Symbol("null"),
                UNDEFINED: Symbol("undef"),
                PARENT: Symbol("parent"),
                BREAK: Symbol("break"),
                STREAM: Symbol("stream")
            }, i.SHIFT32 = Math.pow(2, 32), i.SHIFT16 = Math.pow(2, 16), i.MAX_SAFE_HIGH = 2097151, i.NEG_ONE = new e(-1), i.TEN = new e(10), i.TWO = new e(2), i.PARENT = {
                ARRAY: 0,
                OBJECT: 1,
                MAP: 2,
                TAG: 3,
                BYTE_STRING: 4,
                UTF8_STRING: 5
            }
        }
    }
]);