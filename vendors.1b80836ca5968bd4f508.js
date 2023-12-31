/*! For license information please see vendors.1b80836ca5968bd4f508.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [50], {
        2337: function(t, e, i) {
            var r, n, s;
            n = [i(2929)], void 0 === (s = "function" == typeof(r = function(t) {
                "use strict";
                var e = function(t, i, n) {
                    if (void 0 === t && (t = e.DEFAULT_CAPACITY), void 0 === i && (i = e.DEFAULT_ENDIAN), void 0 === n && (n = e.DEFAULT_NOASSERT), !n) {
                        if ((t |= 0) < 0) throw RangeError("Illegal capacity");
                        i = !!i, n = !!n
                    }
                    this.buffer = 0 === t ? r : new ArrayBuffer(t), this.view = 0 === t ? null : new Uint8Array(this.buffer), this.offset = 0, this.markedOffset = -1, this.limit = t, this.littleEndian = i, this.noAssert = n
                };
                e.VERSION = "5.0.1", e.LITTLE_ENDIAN = !0, e.BIG_ENDIAN = !1, e.DEFAULT_CAPACITY = 16, e.DEFAULT_ENDIAN = e.BIG_ENDIAN, e.DEFAULT_NOASSERT = !1, e.Long = t || null;
                var i = e.prototype;
                i.__isByteBuffer__, Object.defineProperty(i, "__isByteBuffer__", {
                    value: !0,
                    enumerable: !1,
                    configurable: !1
                });
                var r = new ArrayBuffer(0),
                    n = String.fromCharCode;

                function s(t) {
                    var e = 0;
                    return function() {
                        return e < t.length ? t.charCodeAt(e++) : null
                    }
                }

                function f() {
                    var t = [],
                        e = [];
                    return function() {
                        if (0 === arguments.length) return e.join("") + n.apply(String, t);
                        t.length + arguments.length > 1024 && (e.push(n.apply(String, t)), t.length = 0), Array.prototype.push.apply(t, arguments)
                    }
                }

                function o(t, e, i, r, n) {
                    var s, f, o = 8 * n - r - 1,
                        h = (1 << o) - 1,
                        a = h >> 1,
                        l = -7,
                        u = i ? n - 1 : 0,
                        g = i ? -1 : 1,
                        v = t[e + u];
                    for (u += g, s = v & (1 << -l) - 1, v >>= -l, l += o; l > 0; s = 256 * s + t[e + u], u += g, l -= 8);
                    for (f = s & (1 << -l) - 1, s >>= -l, l += r; l > 0; f = 256 * f + t[e + u], u += g, l -= 8);
                    if (0 === s) s = 1 - a;
                    else {
                        if (s === h) return f ? NaN : 1 / 0 * (v ? -1 : 1);
                        f += Math.pow(2, r), s -= a
                    }
                    return (v ? -1 : 1) * f * Math.pow(2, s - r)
                }

                function h(t, e, i, r, n, s) {
                    var f, o, h, a = 8 * s - n - 1,
                        l = (1 << a) - 1,
                        u = l >> 1,
                        g = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        v = r ? 0 : s - 1,
                        w = r ? 1 : -1,
                        b = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, f = l) : (f = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -f)) < 1 && (f--, h *= 2), (e += f + u >= 1 ? g / h : g * Math.pow(2, 1 - u)) * h >= 2 && (f++, h /= 2), f + u >= l ? (o = 0, f = l) : f + u >= 1 ? (o = (e * h - 1) * Math.pow(2, n), f += u) : (o = e * Math.pow(2, u - 1) * Math.pow(2, n), f = 0)); n >= 8; t[i + v] = 255 & o, v += w, o /= 256, n -= 8);
                    for (f = f << n | o, a += n; a > 0; t[i + v] = 255 & f, v += w, f /= 256, a -= 8);
                    t[i + v - w] |= 128 * b
                }
                e.accessor = function() {
                    return Uint8Array
                }, e.allocate = function(t, i, r) {
                    return new e(t, i, r)
                }, e.concat = function(t, i, r, n) {
                    "boolean" != typeof i && "string" == typeof i || (n = r, r = i, i = void 0);
                    for (var s, f = 0, o = 0, h = t.length; o < h; ++o) e.isByteBuffer(t[o]) || (t[o] = e.wrap(t[o], i)), (s = t[o].limit - t[o].offset) > 0 && (f += s);
                    if (0 === f) return new e(0, r, n);
                    var a, l = new e(f, r, n);
                    for (o = 0; o < h;)(s = (a = t[o++]).limit - a.offset) <= 0 || (l.view.set(a.view.subarray(a.offset, a.limit), l.offset), l.offset += s);
                    return l.limit = l.offset, l.offset = 0, l
                }, e.isByteBuffer = function(t) {
                    return !0 === (t && t.__isByteBuffer__)
                }, e.type = function() {
                    return ArrayBuffer
                }, e.wrap = function(t, r, n, s) {
                    if ("string" != typeof r && (s = n, n = r, r = void 0), "string" == typeof t) switch (void 0 === r && (r = "utf8"), r) {
                        case "base64":
                            return e.fromBase64(t, n);
                        case "hex":
                            return e.fromHex(t, n);
                        case "binary":
                            return e.fromBinary(t, n);
                        case "utf8":
                            return e.fromUTF8(t, n);
                        case "debug":
                            return e.fromDebug(t, n);
                        default:
                            throw Error("Unsupported encoding: " + r)
                    }
                    if (null === t || "object" != typeof t) throw TypeError("Illegal buffer");
                    var f;
                    if (e.isByteBuffer(t)) return (f = i.clone.call(t)).markedOffset = -1, f;
                    if (t instanceof Uint8Array) f = new e(0, n, s), t.length > 0 && (f.buffer = t.buffer, f.offset = t.byteOffset, f.limit = t.byteOffset + t.byteLength, f.view = new Uint8Array(t.buffer));
                    else if (t instanceof ArrayBuffer) f = new e(0, n, s), t.byteLength > 0 && (f.buffer = t, f.offset = 0, f.limit = t.byteLength, f.view = t.byteLength > 0 ? new Uint8Array(t) : null);
                    else {
                        if ("[object Array]" !== Object.prototype.toString.call(t)) throw TypeError("Illegal buffer");
                        (f = new e(t.length, n, s)).limit = t.length;
                        for (var o = 0; o < t.length; ++o) f.view[o] = t[o]
                    }
                    return f
                }, i.writeBitSet = function(t, e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if (!(t instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    var r, n = e,
                        s = t.length,
                        f = s >> 3,
                        o = 0;
                    for (e += this.writeVarint32(s, e); f--;) r = 1 & !!t[o++] | (1 & !!t[o++]) << 1 | (1 & !!t[o++]) << 2 | (1 & !!t[o++]) << 3 | (1 & !!t[o++]) << 4 | (1 & !!t[o++]) << 5 | (1 & !!t[o++]) << 6 | (1 & !!t[o++]) << 7, this.writeByte(r, e++);
                    if (o < s) {
                        var h = 0;
                        for (r = 0; o < s;) r |= (1 & !!t[o++]) << h++;
                        this.writeByte(r, e++)
                    }
                    return i ? (this.offset = e, this) : e - n
                }, i.readBitSet = function(t) {
                    var e = void 0 === t;
                    e && (t = this.offset);
                    var i, r = this.readVarint32(t),
                        n = r.value,
                        s = n >> 3,
                        f = 0,
                        o = [];
                    for (t += r.length; s--;) i = this.readByte(t++), o[f++] = !!(1 & i), o[f++] = !!(2 & i), o[f++] = !!(4 & i), o[f++] = !!(8 & i), o[f++] = !!(16 & i), o[f++] = !!(32 & i), o[f++] = !!(64 & i), o[f++] = !!(128 & i);
                    if (f < n) {
                        var h = 0;
                        for (i = this.readByte(t++); f < n;) o[f++] = !!(i >> h++ & 1)
                    }
                    return e && (this.offset = t), o
                }, i.readBytes = function(t, e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + t > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+" + t + ") <= " + this.buffer.byteLength)
                    }
                    var r = this.slice(e, e + t);
                    return i && (this.offset += t), r
                }, i.writeBytes = i.append, i.writeInt8 = function(t, e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                        if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    e += 1;
                    var r = this.buffer.byteLength;
                    return e > r && this.resize((r *= 2) > e ? r : e), e -= 1, this.view[e] = t, i && (this.offset += 1), this
                }, i.writeByte = i.writeInt8, i.readInt8 = function(t) {
                    var e = void 0 === t;
                    if (e && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
                    }
                    var i = this.view[t];
                    return 128 == (128 & i) && (i = -(255 - i + 1)), e && (this.offset += 1), i
                }, i.readByte = i.readInt8, i.writeUint8 = function(t, e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                        if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    e += 1;
                    var r = this.buffer.byteLength;
                    return e > r && this.resize((r *= 2) > e ? r : e), e -= 1, this.view[e] = t, i && (this.offset += 1), this
                }, i.writeUInt8 = i.writeUint8, i.readUint8 = function(t) {
                    var e = void 0 === t;
                    if (e && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
                    }
                    var i = this.view[t];
                    return e && (this.offset += 1), i
                }, i.readUInt8 = i.readUint8, i.writeInt16 = function(t, e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                        if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    e += 2;
                    var r = this.buffer.byteLength;
                    return e > r && this.resize((r *= 2) > e ? r : e), e -= 2, this.littleEndian ? (this.view[e + 1] = (65280 & t) >>> 8, this.view[e] = 255 & t) : (this.view[e] = (65280 & t) >>> 8, this.view[e + 1] = 255 & t), i && (this.offset += 2), this
                }, i.writeShort = i.writeInt16, i.readInt16 = function(t) {
                    var e = void 0 === t;
                    if (e && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength)
                    }
                    var i = 0;
                    return this.littleEndian ? (i = this.view[t], i |= this.view[t + 1] << 8) : (i = this.view[t] << 8, i |= this.view[t + 1]), 32768 == (32768 & i) && (i = -(65535 - i + 1)), e && (this.offset += 2), i
                }, i.readShort = i.readInt16, i.writeUint16 = function(t, e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                        if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    e += 2;
                    var r = this.buffer.byteLength;
                    return e > r && this.resize((r *= 2) > e ? r : e), e -= 2, this.littleEndian ? (this.view[e + 1] = (65280 & t) >>> 8, this.view[e] = 255 & t) : (this.view[e] = (65280 & t) >>> 8, this.view[e + 1] = 255 & t), i && (this.offset += 2), this
                }, i.writeUInt16 = i.writeUint16, i.readUint16 = function(t) {
                    var e = void 0 === t;
                    if (e && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+2) <= " + this.buffer.byteLength)
                    }
                    var i = 0;
                    return this.littleEndian ? (i = this.view[t], i |= this.view[t + 1] << 8) : (i = this.view[t] << 8, i |= this.view[t + 1]), e && (this.offset += 2), i
                }, i.readUInt16 = i.readUint16, i.writeInt32 = function(t, e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                        if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    e += 4;
                    var r = this.buffer.byteLength;
                    return e > r && this.resize((r *= 2) > e ? r : e), e -= 4, this.littleEndian ? (this.view[e + 3] = t >>> 24 & 255, this.view[e + 2] = t >>> 16 & 255, this.view[e + 1] = t >>> 8 & 255, this.view[e] = 255 & t) : (this.view[e] = t >>> 24 & 255, this.view[e + 1] = t >>> 16 & 255, this.view[e + 2] = t >>> 8 & 255, this.view[e + 3] = 255 & t), i && (this.offset += 4), this
                }, i.writeInt = i.writeInt32, i.readInt32 = function(t) {
                    var e = void 0 === t;
                    if (e && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
                    }
                    var i = 0;
                    return this.littleEndian ? (i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0), i |= 0, e && (this.offset += 4), i
                }, i.readInt = i.readInt32, i.writeUint32 = function(t, e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                        if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    e += 4;
                    var r = this.buffer.byteLength;
                    return e > r && this.resize((r *= 2) > e ? r : e), e -= 4, this.littleEndian ? (this.view[e + 3] = t >>> 24 & 255, this.view[e + 2] = t >>> 16 & 255, this.view[e + 1] = t >>> 8 & 255, this.view[e] = 255 & t) : (this.view[e] = t >>> 24 & 255, this.view[e + 1] = t >>> 16 & 255, this.view[e + 2] = t >>> 8 & 255, this.view[e + 3] = 255 & t), i && (this.offset += 4), this
                }, i.writeUInt32 = i.writeUint32, i.readUint32 = function(t) {
                    var e = void 0 === t;
                    if (e && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
                    }
                    var i = 0;
                    return this.littleEndian ? (i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0), e && (this.offset += 4), i
                }, i.readUInt32 = i.readUint32, t && (i.writeInt64 = function(e, i) {
                    var r = void 0 === i;
                    if (r && (i = this.offset), !this.noAssert) {
                        if ("number" == typeof e) e = t.fromNumber(e);
                        else if ("string" == typeof e) e = t.fromString(e);
                        else if (!(e && e instanceof t)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                        if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
                        if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
                    }
                    "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e)), i += 8;
                    var n = this.buffer.byteLength;
                    i > n && this.resize((n *= 2) > i ? n : i), i -= 8;
                    var s = e.low,
                        f = e.high;
                    return this.littleEndian ? (this.view[i + 3] = s >>> 24 & 255, this.view[i + 2] = s >>> 16 & 255, this.view[i + 1] = s >>> 8 & 255, this.view[i] = 255 & s, i += 4, this.view[i + 3] = f >>> 24 & 255, this.view[i + 2] = f >>> 16 & 255, this.view[i + 1] = f >>> 8 & 255, this.view[i] = 255 & f) : (this.view[i] = f >>> 24 & 255, this.view[i + 1] = f >>> 16 & 255, this.view[i + 2] = f >>> 8 & 255, this.view[i + 3] = 255 & f, i += 4, this.view[i] = s >>> 24 & 255, this.view[i + 1] = s >>> 16 & 255, this.view[i + 2] = s >>> 8 & 255, this.view[i + 3] = 255 & s), r && (this.offset += 8), this
                }, i.writeLong = i.writeInt64, i.readInt64 = function(e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                    }
                    var r = 0,
                        n = 0;
                    this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], r += this.view[e + 3] << 24 >>> 0, e += 4, n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0, e += 4, r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], r += this.view[e] << 24 >>> 0);
                    var s = new t(r, n, !1);
                    return i && (this.offset += 8), s
                }, i.readLong = i.readInt64, i.writeUint64 = function(e, i) {
                    var r = void 0 === i;
                    if (r && (i = this.offset), !this.noAssert) {
                        if ("number" == typeof e) e = t.fromNumber(e);
                        else if ("string" == typeof e) e = t.fromString(e);
                        else if (!(e && e instanceof t)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                        if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
                        if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
                    }
                    "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e)), i += 8;
                    var n = this.buffer.byteLength;
                    i > n && this.resize((n *= 2) > i ? n : i), i -= 8;
                    var s = e.low,
                        f = e.high;
                    return this.littleEndian ? (this.view[i + 3] = s >>> 24 & 255, this.view[i + 2] = s >>> 16 & 255, this.view[i + 1] = s >>> 8 & 255, this.view[i] = 255 & s, i += 4, this.view[i + 3] = f >>> 24 & 255, this.view[i + 2] = f >>> 16 & 255, this.view[i + 1] = f >>> 8 & 255, this.view[i] = 255 & f) : (this.view[i] = f >>> 24 & 255, this.view[i + 1] = f >>> 16 & 255, this.view[i + 2] = f >>> 8 & 255, this.view[i + 3] = 255 & f, i += 4, this.view[i] = s >>> 24 & 255, this.view[i + 1] = s >>> 16 & 255, this.view[i + 2] = s >>> 8 & 255, this.view[i + 3] = 255 & s), r && (this.offset += 8), this
                }, i.writeUInt64 = i.writeUint64, i.readUint64 = function(e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                    }
                    var r = 0,
                        n = 0;
                    this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], r += this.view[e + 3] << 24 >>> 0, e += 4, n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0, e += 4, r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], r += this.view[e] << 24 >>> 0);
                    var s = new t(r, n, !0);
                    return i && (this.offset += 8), s
                }, i.readUInt64 = i.readUint64), i.writeFloat32 = function(t, e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof t) throw TypeError("Illegal value: " + t + " (not a number)");
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    e += 4;
                    var r = this.buffer.byteLength;
                    return e > r && this.resize((r *= 2) > e ? r : e), e -= 4, h(this.view, t, e, this.littleEndian, 23, 4), i && (this.offset += 4), this
                }, i.writeFloat = i.writeFloat32, i.readFloat32 = function(t) {
                    var e = void 0 === t;
                    if (e && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
                    }
                    var i = o(this.view, t, this.littleEndian, 23, 4);
                    return e && (this.offset += 4), i
                }, i.readFloat = i.readFloat32, i.writeFloat64 = function(t, e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof t) throw TypeError("Illegal value: " + t + " (not a number)");
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    e += 8;
                    var r = this.buffer.byteLength;
                    return e > r && this.resize((r *= 2) > e ? r : e), e -= 8, h(this.view, t, e, this.littleEndian, 52, 8), i && (this.offset += 8), this
                }, i.writeDouble = i.writeFloat64, i.readFloat64 = function(t) {
                    var e = void 0 === t;
                    if (e && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
                    }
                    var i = o(this.view, t, this.littleEndian, 52, 8);
                    return e && (this.offset += 8), i
                }, i.readDouble = i.readFloat64, e.MAX_VARINT32_BYTES = 5, e.calculateVarint32 = function(t) {
                    return (t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 1 << 21 ? 3 : t < 1 << 28 ? 4 : 5
                }, e.zigZagEncode32 = function(t) {
                    return ((t |= 0) << 1 ^ t >> 31) >>> 0
                }, e.zigZagDecode32 = function(t) {
                    return t >>> 1 ^ -(1 & t) | 0
                }, i.writeVarint32 = function(t, i) {
                    var r = void 0 === i;
                    if (r && (i = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                        if (t |= 0, "number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
                        if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
                    }
                    var n, s = e.calculateVarint32(t);
                    i += s;
                    var f = this.buffer.byteLength;
                    for (i > f && this.resize((f *= 2) > i ? f : i), i -= s, t >>>= 0; t >= 128;) n = 127 & t | 128, this.view[i++] = n, t >>>= 7;
                    return this.view[i++] = t, r ? (this.offset = i, this) : s
                }, i.writeVarint32ZigZag = function(t, i) {
                    return this.writeVarint32(e.zigZagEncode32(t), i)
                }, i.readVarint32 = function(t) {
                    var e = void 0 === t;
                    if (e && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
                    }
                    var i, r = 0,
                        n = 0;
                    do {
                        if (!this.noAssert && t > this.limit) {
                            var s = Error("Truncated");
                            throw s.truncated = !0, s
                        }
                        i = this.view[t++], r < 5 && (n |= (127 & i) << 7 * r), ++r
                    } while (0 != (128 & i));
                    return n |= 0, e ? (this.offset = t, n) : {
                        value: n,
                        length: r
                    }
                }, i.readVarint32ZigZag = function(t) {
                    var i = this.readVarint32(t);
                    return "object" == typeof i ? i.value = e.zigZagDecode32(i.value) : i = e.zigZagDecode32(i), i
                }, t && (e.MAX_VARINT64_BYTES = 10, e.calculateVarint64 = function(e) {
                    "number" == typeof e ? e = t.fromNumber(e) : "string" == typeof e && (e = t.fromString(e));
                    var i = e.toInt() >>> 0,
                        r = e.shiftRightUnsigned(28).toInt() >>> 0,
                        n = e.shiftRightUnsigned(56).toInt() >>> 0;
                    return 0 == n ? 0 == r ? i < 16384 ? i < 128 ? 1 : 2 : i < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : n < 128 ? 9 : 10
                }, e.zigZagEncode64 = function(e) {
                    return "number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()), e.shiftLeft(1).xor(e.shiftRight(63)).toUnsigned()
                }, e.zigZagDecode64 = function(e) {
                    return "number" == typeof e ? e = t.fromNumber(e, !1) : "string" == typeof e ? e = t.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()), e.shiftRightUnsigned(1).xor(e.and(t.ONE).toSigned().negate()).toSigned()
                }, i.writeVarint64 = function(i, r) {
                    var n = void 0 === r;
                    if (n && (r = this.offset), !this.noAssert) {
                        if ("number" == typeof i) i = t.fromNumber(i);
                        else if ("string" == typeof i) i = t.fromString(i);
                        else if (!(i && i instanceof t)) throw TypeError("Illegal value: " + i + " (not an integer or Long)");
                        if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                        if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                    }
                    "number" == typeof i ? i = t.fromNumber(i, !1) : "string" == typeof i ? i = t.fromString(i, !1) : !1 !== i.unsigned && (i = i.toSigned());
                    var s = e.calculateVarint64(i),
                        f = i.toInt() >>> 0,
                        o = i.shiftRightUnsigned(28).toInt() >>> 0,
                        h = i.shiftRightUnsigned(56).toInt() >>> 0;
                    r += s;
                    var a = this.buffer.byteLength;
                    switch (r > a && this.resize((a *= 2) > r ? a : r), r -= s, s) {
                        case 10:
                            this.view[r + 9] = h >>> 7 & 1;
                        case 9:
                            this.view[r + 8] = 9 !== s ? 128 | h : 127 & h;
                        case 8:
                            this.view[r + 7] = 8 !== s ? o >>> 21 | 128 : o >>> 21 & 127;
                        case 7:
                            this.view[r + 6] = 7 !== s ? o >>> 14 | 128 : o >>> 14 & 127;
                        case 6:
                            this.view[r + 5] = 6 !== s ? o >>> 7 | 128 : o >>> 7 & 127;
                        case 5:
                            this.view[r + 4] = 5 !== s ? 128 | o : 127 & o;
                        case 4:
                            this.view[r + 3] = 4 !== s ? f >>> 21 | 128 : f >>> 21 & 127;
                        case 3:
                            this.view[r + 2] = 3 !== s ? f >>> 14 | 128 : f >>> 14 & 127;
                        case 2:
                            this.view[r + 1] = 2 !== s ? f >>> 7 | 128 : f >>> 7 & 127;
                        case 1:
                            this.view[r] = 1 !== s ? 128 | f : 127 & f
                    }
                    return n ? (this.offset += s, this) : s
                }, i.writeVarint64ZigZag = function(t, i) {
                    return this.writeVarint64(e.zigZagEncode64(t), i)
                }, i.readVarint64 = function(e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                    }
                    var r = e,
                        n = 0,
                        s = 0,
                        f = 0,
                        o = 0;
                    if (n = 127 & (o = this.view[e++]), 128 & o && (n |= (127 & (o = this.view[e++])) << 7, (128 & o || this.noAssert && void 0 === o) && (n |= (127 & (o = this.view[e++])) << 14, (128 & o || this.noAssert && void 0 === o) && (n |= (127 & (o = this.view[e++])) << 21, (128 & o || this.noAssert && void 0 === o) && (s = 127 & (o = this.view[e++]), (128 & o || this.noAssert && void 0 === o) && (s |= (127 & (o = this.view[e++])) << 7, (128 & o || this.noAssert && void 0 === o) && (s |= (127 & (o = this.view[e++])) << 14, (128 & o || this.noAssert && void 0 === o) && (s |= (127 & (o = this.view[e++])) << 21, (128 & o || this.noAssert && void 0 === o) && (f = 127 & (o = this.view[e++]), (128 & o || this.noAssert && void 0 === o) && (f |= (127 & (o = this.view[e++])) << 7, 128 & o || this.noAssert && void 0 === o)))))))))) throw Error("Buffer overrun");
                    var h = t.fromBits(n | s << 28, s >>> 4 | f << 24, !1);
                    return i ? (this.offset = e, h) : {
                        value: h,
                        length: e - r
                    }
                }, i.readVarint64ZigZag = function(i) {
                    var r = this.readVarint64(i);
                    return r && r.value instanceof t ? r.value = e.zigZagDecode64(r.value) : r = e.zigZagDecode64(r), r
                }), i.writeCString = function(t, e) {
                    var i = void 0 === e;
                    i && (e = this.offset);
                    var r, n = t.length;
                    if (!this.noAssert) {
                        if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
                        for (r = 0; r < n; ++r)
                            if (0 === t.charCodeAt(r)) throw RangeError("Illegal str: Contains NULL-characters");
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    n = l.calculateUTF16asUTF8(s(t))[1], e += n + 1;
                    var f = this.buffer.byteLength;
                    return e > f && this.resize((f *= 2) > e ? f : e), e -= n + 1, l.encodeUTF16toUTF8(s(t), function(t) {
                        this.view[e++] = t
                    }.bind(this)), this.view[e++] = 0, i ? (this.offset = e, this) : n
                }, i.readCString = function(t) {
                    var e = void 0 === t;
                    if (e && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
                    }
                    var i, r = t,
                        n = -1;
                    return l.decodeUTF8toUTF16(function() {
                        if (0 === n) return null;
                        if (t >= this.limit) throw RangeError("Illegal range: Truncated data, " + t + " < " + this.limit);
                        return 0 === (n = this.view[t++]) ? null : n
                    }.bind(this), i = f(), !0), e ? (this.offset = t, i()) : {
                        string: i(),
                        length: t - r
                    }
                }, i.writeIString = function(t, e) {
                    var i = void 0 === e;
                    if (i && (e = this.offset), !this.noAssert) {
                        if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    var r, n = e;
                    r = l.calculateUTF16asUTF8(s(t), this.noAssert)[1], e += 4 + r;
                    var f = this.buffer.byteLength;
                    if (e > f && this.resize((f *= 2) > e ? f : e), e -= 4 + r, this.littleEndian ? (this.view[e + 3] = r >>> 24 & 255, this.view[e + 2] = r >>> 16 & 255, this.view[e + 1] = r >>> 8 & 255, this.view[e] = 255 & r) : (this.view[e] = r >>> 24 & 255, this.view[e + 1] = r >>> 16 & 255, this.view[e + 2] = r >>> 8 & 255, this.view[e + 3] = 255 & r), e += 4, l.encodeUTF16toUTF8(s(t), function(t) {
                            this.view[e++] = t
                        }.bind(this)), e !== n + 4 + r) throw RangeError("Illegal range: Truncated data, " + e + " == " + (e + 4 + r));
                    return i ? (this.offset = e, this) : e - n
                }, i.readIString = function(t) {
                    var i = void 0 === t;
                    if (i && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+4) <= " + this.buffer.byteLength)
                    }
                    var r = t,
                        n = this.readUint32(t),
                        s = this.readUTF8String(n, e.METRICS_BYTES, t += 4);
                    return t += s.length, i ? (this.offset = t, s.string) : {
                        string: s.string,
                        length: t - r
                    }
                }, e.METRICS_CHARS = "c", e.METRICS_BYTES = "b", i.writeUTF8String = function(t, e) {
                    var i, r = void 0 === e;
                    if (r && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    var n = e;
                    i = l.calculateUTF16asUTF8(s(t))[1], e += i;
                    var f = this.buffer.byteLength;
                    return e > f && this.resize((f *= 2) > e ? f : e), e -= i, l.encodeUTF16toUTF8(s(t), function(t) {
                        this.view[e++] = t
                    }.bind(this)), r ? (this.offset = e, this) : e - n
                }, i.writeString = i.writeUTF8String, e.calculateUTF8Chars = function(t) {
                    return l.calculateUTF16asUTF8(s(t))[0]
                }, e.calculateUTF8Bytes = function(t) {
                    return l.calculateUTF16asUTF8(s(t))[1]
                }, e.calculateString = e.calculateUTF8Bytes, i.readUTF8String = function(t, i, r) {
                    "number" == typeof i && (r = i, i = void 0);
                    var n = void 0 === r;
                    if (n && (r = this.offset), void 0 === i && (i = e.METRICS_CHARS), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal length: " + t + " (not an integer)");
                        if (t |= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                        if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                    }
                    var s, o = 0,
                        h = r;
                    if (i === e.METRICS_CHARS) {
                        if (s = f(), l.decodeUTF8(function() {
                                return o < t && r < this.limit ? this.view[r++] : null
                            }.bind(this), (function(t) {
                                ++o, l.UTF8toUTF16(t, s)
                            })), o !== t) throw RangeError("Illegal range: Truncated data, " + o + " == " + t);
                        return n ? (this.offset = r, s()) : {
                            string: s(),
                            length: r - h
                        }
                    }
                    if (i === e.METRICS_BYTES) {
                        if (!this.noAssert) {
                            if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                            if ((r >>>= 0) < 0 || r + t > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+" + t + ") <= " + this.buffer.byteLength)
                        }
                        var a = r + t;
                        if (l.decodeUTF8toUTF16(function() {
                                return r < a ? this.view[r++] : null
                            }.bind(this), s = f(), this.noAssert), r !== a) throw RangeError("Illegal range: Truncated data, " + r + " == " + a);
                        return n ? (this.offset = r, s()) : {
                            string: s(),
                            length: r - h
                        }
                    }
                    throw TypeError("Unsupported metrics: " + i)
                }, i.readString = i.readUTF8String, i.writeVString = function(t, i) {
                    var r = void 0 === i;
                    if (r && (i = this.offset), !this.noAssert) {
                        if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
                        if ("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
                        if ((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
                    }
                    var n, f, o = i;
                    n = l.calculateUTF16asUTF8(s(t), this.noAssert)[1], f = e.calculateVarint32(n), i += f + n;
                    var h = this.buffer.byteLength;
                    if (i > h && this.resize((h *= 2) > i ? h : i), i -= f + n, i += this.writeVarint32(n, i), l.encodeUTF16toUTF8(s(t), function(t) {
                            this.view[i++] = t
                        }.bind(this)), i !== o + n + f) throw RangeError("Illegal range: Truncated data, " + i + " == " + (i + n + f));
                    return r ? (this.offset = i, this) : i - o
                }, i.readVString = function(t) {
                    var i = void 0 === t;
                    if (i && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
                    }
                    var r = t,
                        n = this.readVarint32(t),
                        s = this.readUTF8String(n.value, e.METRICS_BYTES, t += n.length);
                    return t += s.length, i ? (this.offset = t, s.string) : {
                        string: s.string,
                        length: t - r
                    }
                }, i.append = function(t, i, r) {
                    "number" != typeof i && "string" == typeof i || (r = i, i = void 0);
                    var n = void 0 === r;
                    if (n && (r = this.offset), !this.noAssert) {
                        if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                        if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                    }
                    t instanceof e || (t = e.wrap(t, i));
                    var s = t.limit - t.offset;
                    if (s <= 0) return this;
                    r += s;
                    var f = this.buffer.byteLength;
                    return r > f && this.resize((f *= 2) > r ? f : r), r -= s, this.view.set(t.view.subarray(t.offset, t.limit), r), t.offset += s, n && (this.offset += s), this
                }, i.appendTo = function(t, e) {
                    return t.append(this, e), this
                }, i.assert = function(t) {
                    return this.noAssert = !t, this
                }, i.capacity = function() {
                    return this.buffer.byteLength
                }, i.clear = function() {
                    return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, this
                }, i.clone = function(t) {
                    var i = new e(0, this.littleEndian, this.noAssert);
                    return t ? (i.buffer = new ArrayBuffer(this.buffer.byteLength), i.view = new Uint8Array(i.buffer)) : (i.buffer = this.buffer, i.view = this.view), i.offset = this.offset, i.markedOffset = this.markedOffset, i.limit = this.limit, i
                }, i.compact = function(t, e) {
                    if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
                    }
                    if (0 === t && e === this.buffer.byteLength) return this;
                    var i = e - t;
                    if (0 === i) return this.buffer = r, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= t), this.offset = 0, this.limit = 0, this;
                    var n = new ArrayBuffer(i),
                        s = new Uint8Array(n);
                    return s.set(this.view.subarray(t, e)), this.buffer = n, this.view = s, this.markedOffset >= 0 && (this.markedOffset -= t), this.offset = 0, this.limit = i, this
                }, i.copy = function(t, i) {
                    if (void 0 === t && (t = this.offset), void 0 === i && (i = this.limit), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (t >>>= 0, "number" != typeof i || i % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (i >>>= 0, t < 0 || t > i || i > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + i + " <= " + this.buffer.byteLength)
                    }
                    if (t === i) return new e(0, this.littleEndian, this.noAssert);
                    var r = i - t,
                        n = new e(r, this.littleEndian, this.noAssert);
                    return n.offset = 0, n.limit = r, n.markedOffset >= 0 && (n.markedOffset -= t), this.copyTo(n, 0, t, i), n
                }, i.copyTo = function(t, i, r, n) {
                    var s, f;
                    if (!this.noAssert && !e.isByteBuffer(t)) throw TypeError("Illegal target: Not a ByteBuffer");
                    if (i = (f = void 0 === i) ? t.offset : 0 | i, r = (s = void 0 === r) ? this.offset : 0 | r, n = void 0 === n ? this.limit : 0 | n, i < 0 || i > t.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + i + " <= " + t.buffer.byteLength);
                    if (r < 0 || n > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + r + " <= " + this.buffer.byteLength);
                    var o = n - r;
                    return 0 === o ? t : (t.ensureCapacity(i + o), t.view.set(this.view.subarray(r, n), i), s && (this.offset += o), f && (t.offset += o), this)
                }, i.ensureCapacity = function(t) {
                    var e = this.buffer.byteLength;
                    return e < t ? this.resize((e *= 2) > t ? e : t) : this
                }, i.fill = function(t, e, i) {
                    var r = void 0 === e;
                    if (r && (e = this.offset), "string" == typeof t && t.length > 0 && (t = t.charCodeAt(0)), void 0 === e && (e = this.offset), void 0 === i && (i = this.limit), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal value: " + t + " (not an integer)");
                        if (t |= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (e >>>= 0, "number" != typeof i || i % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (i >>>= 0, e < 0 || e > i || i > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + i + " <= " + this.buffer.byteLength)
                    }
                    if (e >= i) return this;
                    for (; e < i;) this.view[e++] = t;
                    return r && (this.offset = e), this
                }, i.flip = function() {
                    return this.limit = this.offset, this.offset = 0, this
                }, i.mark = function(t) {
                    if (t = void 0 === t ? this.offset : t, !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    return this.markedOffset = t, this
                }, i.order = function(t) {
                    if (!this.noAssert && "boolean" != typeof t) throw TypeError("Illegal littleEndian: Not a boolean");
                    return this.littleEndian = !!t, this
                }, i.LE = function(t) {
                    return this.littleEndian = void 0 === t || !!t, this
                }, i.BE = function(t) {
                    return this.littleEndian = void 0 !== t && !t, this
                }, i.prepend = function(t, i, r) {
                    "number" != typeof i && "string" == typeof i || (r = i, i = void 0);
                    var n = void 0 === r;
                    if (n && (r = this.offset), !this.noAssert) {
                        if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                        if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                    }
                    t instanceof e || (t = e.wrap(t, i));
                    var s = t.limit - t.offset;
                    if (s <= 0) return this;
                    var f = s - r;
                    if (f > 0) {
                        var o = new ArrayBuffer(this.buffer.byteLength + f),
                            h = new Uint8Array(o);
                        h.set(this.view.subarray(r, this.buffer.byteLength), s), this.buffer = o, this.view = h, this.offset += f, this.markedOffset >= 0 && (this.markedOffset += f), this.limit += f, r += f
                    } else new Uint8Array(this.buffer);
                    return this.view.set(t.view.subarray(t.offset, t.limit), r - s), t.offset = t.limit, n && (this.offset -= s), this
                }, i.prependTo = function(t, e) {
                    return t.prepend(this, e), this
                }, i.printDebug = function(t) {
                    "function" != typeof t && (t = console.log.bind(console)), t(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0))
                }, i.remaining = function() {
                    return this.limit - this.offset
                }, i.reset = function() {
                    return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, this
                }, i.resize = function(t) {
                    if (!this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal capacity: " + t + " (not an integer)");
                        if ((t |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + t)
                    }
                    if (this.buffer.byteLength < t) {
                        var e = new ArrayBuffer(t),
                            i = new Uint8Array(e);
                        i.set(this.view), this.buffer = e, this.view = i
                    }
                    return this
                }, i.reverse = function(t, e) {
                    if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
                    }
                    return t === e || Array.prototype.reverse.call(this.view.subarray(t, e)), this
                }, i.skip = function(t) {
                    if (!this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal length: " + t + " (not an integer)");
                        t |= 0
                    }
                    var e = this.offset + t;
                    if (!this.noAssert && (e < 0 || e > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + t + " <= " + this.buffer.byteLength);
                    return this.offset = e, this
                }, i.slice = function(t, e) {
                    if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
                    }
                    var i = this.clone();
                    return i.offset = t, i.limit = e, i
                }, i.toBuffer = function(t) {
                    var e = this.offset,
                        i = this.limit;
                    if (!this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: Not an integer");
                        if (e >>>= 0, "number" != typeof i || i % 1 != 0) throw TypeError("Illegal limit: Not an integer");
                        if (i >>>= 0, e < 0 || e > i || i > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + i + " <= " + this.buffer.byteLength)
                    }
                    if (!t && 0 === e && i === this.buffer.byteLength) return this.buffer;
                    if (e === i) return r;
                    var n = new ArrayBuffer(i - e);
                    return new Uint8Array(n).set(new Uint8Array(this.buffer).subarray(e, i), 0), n
                }, i.toArrayBuffer = i.toBuffer, i.toString = function(t, e, i) {
                    if (void 0 === t) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
                    switch ("number" == typeof t && (i = e = t = "utf8"), t) {
                        case "utf8":
                            return this.toUTF8(e, i);
                        case "base64":
                            return this.toBase64(e, i);
                        case "hex":
                            return this.toHex(e, i);
                        case "binary":
                            return this.toBinary(e, i);
                        case "debug":
                            return this.toDebug();
                        case "columns":
                            return this.toColumns();
                        default:
                            throw Error("Unsupported encoding: " + t)
                    }
                };
                var a = function() {
                    for (var t = {}, e = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47], i = [], r = 0, n = e.length; r < n; ++r) i[e[r]] = r;
                    return t.encode = function(t, i) {
                        for (var r, n; null !== (r = t());) i(e[r >> 2 & 63]), n = (3 & r) << 4, null !== (r = t()) ? (i(e[63 & ((n |= r >> 4 & 15) | r >> 4 & 15)]), n = (15 & r) << 2, null !== (r = t()) ? (i(e[63 & (n | r >> 6 & 3)]), i(e[63 & r])) : (i(e[63 & n]), i(61))) : (i(e[63 & n]), i(61), i(61))
                    }, t.decode = function(t, e) {
                        var r, n, s;

                        function f(t) {
                            throw Error("Illegal character code: " + t)
                        }
                        for (; null !== (r = t());)
                            if (void 0 === (n = i[r]) && f(r), null !== (r = t()) && (void 0 === (s = i[r]) && f(r), e(n << 2 >>> 0 | (48 & s) >> 4), null !== (r = t()))) {
                                if (void 0 === (n = i[r])) {
                                    if (61 === r) break;
                                    f(r)
                                }
                                if (e((15 & s) << 4 >>> 0 | (60 & n) >> 2), null !== (r = t())) {
                                    if (void 0 === (s = i[r])) {
                                        if (61 === r) break;
                                        f(r)
                                    }
                                    e((3 & n) << 6 >>> 0 | s)
                                }
                            }
                    }, t.test = function(t) {
                        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
                    }, t
                }();
                i.toBase64 = function(t, e) {
                    if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), e |= 0, (t |= 0) < 0 || e > this.capacity || t > e) throw RangeError("begin, end");
                    var i;
                    return a.encode(function() {
                        return t < e ? this.view[t++] : null
                    }.bind(this), i = f()), i()
                }, e.fromBase64 = function(t, i) {
                    if ("string" != typeof t) throw TypeError("str");
                    var r = new e(t.length / 4 * 3, i),
                        n = 0;
                    return a.decode(s(t), (function(t) {
                        r.view[n++] = t
                    })), r.limit = n, r
                }, e.btoa = function(t) {
                    return e.fromBinary(t).toBase64()
                }, e.atob = function(t) {
                    return e.fromBase64(t).toBinary()
                }, i.toBinary = function(t, e) {
                    if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), e |= 0, (t |= 0) < 0 || e > this.capacity() || t > e) throw RangeError("begin, end");
                    if (t === e) return "";
                    for (var i = [], r = []; t < e;) i.push(this.view[t++]), i.length >= 1024 && (r.push(String.fromCharCode.apply(String, i)), i = []);
                    return r.join("") + String.fromCharCode.apply(String, i)
                }, e.fromBinary = function(t, i) {
                    if ("string" != typeof t) throw TypeError("str");
                    for (var r, n = 0, s = t.length, f = new e(s, i); n < s;) {
                        if ((r = t.charCodeAt(n)) > 255) throw RangeError("illegal char code: " + r);
                        f.view[n++] = r
                    }
                    return f.limit = s, f
                }, i.toDebug = function(t) {
                    for (var e, i = -1, r = this.buffer.byteLength, n = "", s = "", f = ""; i < r;) {
                        if (-1 !== i && (n += (e = this.view[i]) < 16 ? "0" + e.toString(16).toUpperCase() : e.toString(16).toUpperCase(), t && (s += e > 32 && e < 127 ? String.fromCharCode(e) : ".")), ++i, t && i > 0 && i % 16 == 0 && i !== r) {
                            for (; n.length < 51;) n += " ";
                            f += n + s + "\n", n = s = ""
                        }
                        i === this.offset && i === this.limit ? n += i === this.markedOffset ? "!" : "|" : i === this.offset ? n += i === this.markedOffset ? "[" : "<" : i === this.limit ? n += i === this.markedOffset ? "]" : ">" : n += i === this.markedOffset ? "'" : t || 0 !== i && i !== r ? " " : ""
                    }
                    if (t && " " !== n) {
                        for (; n.length < 51;) n += " ";
                        f += n + s + "\n"
                    }
                    return t ? f : n
                }, e.fromDebug = function(t, i, r) {
                    for (var n, s, f = t.length, o = new e((f + 1) / 3 | 0, i, r), h = 0, a = 0, l = !1, u = !1, g = !1, v = !1, w = !1; h < f;) {
                        switch (n = t.charAt(h++)) {
                            case "!":
                                if (!r) {
                                    if (u || g || v) {
                                        w = !0;
                                        break
                                    }
                                    u = g = v = !0
                                }
                                o.offset = o.markedOffset = o.limit = a, l = !1;
                                break;
                            case "|":
                                if (!r) {
                                    if (u || v) {
                                        w = !0;
                                        break
                                    }
                                    u = v = !0
                                }
                                o.offset = o.limit = a, l = !1;
                                break;
                            case "[":
                                if (!r) {
                                    if (u || g) {
                                        w = !0;
                                        break
                                    }
                                    u = g = !0
                                }
                                o.offset = o.markedOffset = a, l = !1;
                                break;
                            case "<":
                                if (!r) {
                                    if (u) {
                                        w = !0;
                                        break
                                    }
                                    u = !0
                                }
                                o.offset = a, l = !1;
                                break;
                            case "]":
                                if (!r) {
                                    if (v || g) {
                                        w = !0;
                                        break
                                    }
                                    v = g = !0
                                }
                                o.limit = o.markedOffset = a, l = !1;
                                break;
                            case ">":
                                if (!r) {
                                    if (v) {
                                        w = !0;
                                        break
                                    }
                                    v = !0
                                }
                                o.limit = a, l = !1;
                                break;
                            case "'":
                                if (!r) {
                                    if (g) {
                                        w = !0;
                                        break
                                    }
                                    g = !0
                                }
                                o.markedOffset = a, l = !1;
                                break;
                            case " ":
                                l = !1;
                                break;
                            default:
                                if (!r && l) {
                                    w = !0;
                                    break
                                }
                                if (s = parseInt(n + t.charAt(h++), 16), !r && (isNaN(s) || s < 0 || s > 255)) throw TypeError("Illegal str: Not a debug encoded string");
                                o.view[a++] = s, l = !0
                        }
                        if (w) throw TypeError("Illegal str: Invalid symbol at " + h)
                    }
                    if (!r) {
                        if (!u || !v) throw TypeError("Illegal str: Missing offset or limit");
                        if (a < o.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + a + " < " + f)
                    }
                    return o
                }, i.toHex = function(t, e) {
                    if (t = void 0 === t ? this.offset : t, e = void 0 === e ? this.limit : e, !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
                    }
                    for (var i, r = new Array(e - t); t < e;)(i = this.view[t++]) < 16 ? r.push("0", i.toString(16)) : r.push(i.toString(16));
                    return r.join("")
                }, e.fromHex = function(t, i, r) {
                    if (!r) {
                        if ("string" != typeof t) throw TypeError("Illegal str: Not a string");
                        if (t.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2")
                    }
                    for (var n, s = t.length, f = new e(s / 2 | 0, i), o = 0, h = 0; o < s; o += 2) {
                        if (n = parseInt(t.substring(o, o + 2), 16), !r && (!isFinite(n) || n < 0 || n > 255)) throw TypeError("Illegal str: Contains non-hex characters");
                        f.view[h++] = n
                    }
                    return f.limit = h, f
                };
                var l = function() {
                    var t = {
                        MAX_CODEPOINT: 1114111,
                        encodeUTF8: function(t, e) {
                            var i = null;
                            for ("number" == typeof t && (i = t, t = function() {
                                    return null
                                }); null !== i || null !== (i = t());) i < 128 ? e(127 & i) : i < 2048 ? (e(i >> 6 & 31 | 192), e(63 & i | 128)) : i < 65536 ? (e(i >> 12 & 15 | 224), e(i >> 6 & 63 | 128), e(63 & i | 128)) : (e(i >> 18 & 7 | 240), e(i >> 12 & 63 | 128), e(i >> 6 & 63 | 128), e(63 & i | 128)), i = null
                        },
                        decodeUTF8: function(t, e) {
                            for (var i, r, n, s, f = function(t) {
                                    t = t.slice(0, t.indexOf(null));
                                    var e = Error(t.toString());
                                    throw e.name = "TruncatedError", e.bytes = t, e
                                }; null !== (i = t());)
                                if (0 == (128 & i)) e(i);
                                else if (192 == (224 & i)) null === (r = t()) && f([i, r]), e((31 & i) << 6 | 63 & r);
                            else if (224 == (240 & i))(null === (r = t()) || null === (n = t())) && f([i, r, n]), e((15 & i) << 12 | (63 & r) << 6 | 63 & n);
                            else {
                                if (240 != (248 & i)) throw RangeError("Illegal starting byte: " + i);
                                (null === (r = t()) || null === (n = t()) || null === (s = t())) && f([i, r, n, s]), e((7 & i) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & s)
                            }
                        },
                        UTF16toUTF8: function(t, e) {
                            for (var i, r = null; null !== (i = null !== r ? r : t());) i >= 55296 && i <= 57343 && null !== (r = t()) && r >= 56320 && r <= 57343 ? (e(1024 * (i - 55296) + r - 56320 + 65536), r = null) : e(i);
                            null !== r && e(r)
                        },
                        UTF8toUTF16: function(t, e) {
                            var i = null;
                            for ("number" == typeof t && (i = t, t = function() {
                                    return null
                                }); null !== i || null !== (i = t());) i <= 65535 ? e(i) : (e(55296 + ((i -= 65536) >> 10)), e(i % 1024 + 56320)), i = null
                        },
                        encodeUTF16toUTF8: function(e, i) {
                            t.UTF16toUTF8(e, (function(e) {
                                t.encodeUTF8(e, i)
                            }))
                        },
                        decodeUTF8toUTF16: function(e, i) {
                            t.decodeUTF8(e, (function(e) {
                                t.UTF8toUTF16(e, i)
                            }))
                        },
                        calculateCodePoint: function(t) {
                            return t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4
                        },
                        calculateUTF8: function(t) {
                            for (var e, i = 0; null !== (e = t());) i += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
                            return i
                        },
                        calculateUTF16asUTF8: function(e) {
                            var i = 0,
                                r = 0;
                            return t.UTF16toUTF8(e, (function(t) {
                                ++i, r += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4
                            })), [i, r]
                        }
                    };
                    return t
                }();
                return i.toUTF8 = function(t, e) {
                    if (void 0 === t && (t = this.offset), void 0 === e && (e = this.limit), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (t >>>= 0, "number" != typeof e || e % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (e >>>= 0, t < 0 || t > e || e > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + e + " <= " + this.buffer.byteLength)
                    }
                    var i;
                    try {
                        l.decodeUTF8toUTF16(function() {
                            return t < e ? this.view[t++] : null
                        }.bind(this), i = f())
                    } catch (i) {
                        if (t !== e) throw RangeError("Illegal range: Truncated data, " + t + " != " + e)
                    }
                    return i()
                }, e.fromUTF8 = function(t, i, r) {
                    if (!r && "string" != typeof t) throw TypeError("Illegal str: Not a string");
                    var n = new e(l.calculateUTF16asUTF8(s(t), !0)[1], i, r),
                        f = 0;
                    return l.encodeUTF16toUTF8(s(t), (function(t) {
                        n.view[f++] = t
                    })), n.limit = f, n
                }, e
            }) ? r.apply(e, n) : r) || (t.exports = s)
        },
        2350: function(t, e) {
            t.exports = function(t, e) {
                if ("function" == typeof t.compare) return t.compare(e);
                if (t === e) return 0;
                for (var i = t.length, r = e.length, n = 0, s = Math.min(i, r); n < s && t[n] === e[n];) ++n;
                return n !== s && (i = t[n], r = e[n]), i < r ? -1 : r < i ? 1 : 0
            }
        },
        236: function(t, e) {
            t.exports = function(t, e) {
                for (var i = Math.min(t.length, e.length), r = new Buffer(i), n = 0; n < i; ++n) r[n] = t[n] ^ e[n];
                return r
            }
        },
        2929: function(t, e, i) {
            var r, n, s;
            n = [], void 0 === (s = "function" == typeof(r = function() {
                "use strict";

                function t(t, e, i) {
                    this.low = 0 | t, this.high = 0 | e, this.unsigned = !!i
                }

                function e(t) {
                    return !0 === (t && t.__isLong__)
                }
                t.prototype.__isLong__, Object.defineProperty(t.prototype, "__isLong__", {
                    value: !0,
                    enumerable: !1,
                    configurable: !1
                }), t.isLong = e;
                var i = {},
                    r = {};

                function n(t, e) {
                    var n, s, o;
                    return e ? (o = 0 <= (t >>>= 0) && t < 256) && (s = r[t]) ? s : (n = f(t, (0 | t) < 0 ? -1 : 0, !0), o && (r[t] = n), n) : (o = -128 <= (t |= 0) && t < 128) && (s = i[t]) ? s : (n = f(t, t < 0 ? -1 : 0, !1), o && (i[t] = n), n)
                }

                function s(t, e) {
                    if (isNaN(t) || !isFinite(t)) return e ? b : w;
                    if (e) {
                        if (t < 0) return b;
                        if (t >= u) return m
                    } else {
                        if (t <= -g) return E;
                        if (t + 1 >= g) return p
                    }
                    return t < 0 ? s(-t, e).neg() : f(t % l | 0, t / l | 0, e)
                }

                function f(e, i, r) {
                    return new t(e, i, r)
                }
                t.fromInt = n, t.fromNumber = s, t.fromBits = f;
                var o = Math.pow;

                function h(t, e, i) {
                    if (0 === t.length) throw Error("empty string");
                    if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t) return w;
                    if ("number" == typeof e ? (i = e, e = !1) : e = !!e, (i = i || 10) < 2 || 36 < i) throw RangeError("radix");
                    var r;
                    if ((r = t.indexOf("-")) > 0) throw Error("interior hyphen");
                    if (0 === r) return h(t.substring(1), e, i).neg();
                    for (var n = s(o(i, 8)), f = w, a = 0; a < t.length; a += 8) {
                        var l = Math.min(8, t.length - a),
                            u = parseInt(t.substring(a, a + l), i);
                        if (l < 8) {
                            var g = s(o(i, l));
                            f = f.mul(g).add(s(u))
                        } else f = (f = f.mul(n)).add(s(u))
                    }
                    return f.unsigned = e, f
                }

                function a(e) {
                    return e instanceof t ? e : "number" == typeof e ? s(e) : "string" == typeof e ? h(e) : f(e.low, e.high, e.unsigned)
                }
                t.fromString = h, t.fromValue = a;
                var l = 4294967296,
                    u = l * l,
                    g = u / 2,
                    v = n(1 << 24),
                    w = n(0);
                t.ZERO = w;
                var b = n(0, !0);
                t.UZERO = b;
                var y = n(1);
                t.ONE = y;
                var d = n(1, !0);
                t.UONE = d;
                var c = n(-1);
                t.NEG_ONE = c;
                var p = f(-1, 2147483647, !1);
                t.MAX_VALUE = p;
                var m = f(-1, -1, !0);
                t.MAX_UNSIGNED_VALUE = m;
                var E = f(0, -2147483648, !1);
                t.MIN_VALUE = E;
                var I = t.prototype;
                return I.toInt = function() {
                    return this.unsigned ? this.low >>> 0 : this.low
                }, I.toNumber = function() {
                    return this.unsigned ? (this.high >>> 0) * l + (this.low >>> 0) : this.high * l + (this.low >>> 0)
                }, I.toString = function(t) {
                    if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
                    if (this.isZero()) return "0";
                    if (this.isNegative()) {
                        if (this.eq(E)) {
                            var e = s(t),
                                i = this.div(e),
                                r = i.mul(e).sub(this);
                            return i.toString(t) + r.toInt().toString(t)
                        }
                        return "-" + this.neg().toString(t)
                    }
                    for (var n = s(o(t, 6), this.unsigned), f = this, h = "";;) {
                        var a = f.div(n),
                            l = (f.sub(a.mul(n)).toInt() >>> 0).toString(t);
                        if ((f = a).isZero()) return l + h;
                        for (; l.length < 6;) l = "0" + l;
                        h = "" + l + h
                    }
                }, I.getHighBits = function() {
                    return this.high
                }, I.getHighBitsUnsigned = function() {
                    return this.high >>> 0
                }, I.getLowBits = function() {
                    return this.low
                }, I.getLowBitsUnsigned = function() {
                    return this.low >>> 0
                }, I.getNumBitsAbs = function() {
                    if (this.isNegative()) return this.eq(E) ? 64 : this.neg().getNumBitsAbs();
                    for (var t = 0 != this.high ? this.high : this.low, e = 31; e > 0 && 0 == (t & 1 << e); e--);
                    return 0 != this.high ? e + 33 : e + 1
                }, I.isZero = function() {
                    return 0 === this.high && 0 === this.low
                }, I.isNegative = function() {
                    return !this.unsigned && this.high < 0
                }, I.isPositive = function() {
                    return this.unsigned || this.high >= 0
                }, I.isOdd = function() {
                    return 1 == (1 & this.low)
                }, I.isEven = function() {
                    return 0 == (1 & this.low)
                }, I.equals = function(t) {
                    return e(t) || (t = a(t)), (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && this.high === t.high && this.low === t.low
                }, I.eq = I.equals, I.notEquals = function(t) {
                    return !this.eq(t)
                }, I.neq = I.notEquals, I.lessThan = function(t) {
                    return this.comp(t) < 0
                }, I.lt = I.lessThan, I.lessThanOrEqual = function(t) {
                    return this.comp(t) <= 0
                }, I.lte = I.lessThanOrEqual, I.greaterThan = function(t) {
                    return this.comp(t) > 0
                }, I.gt = I.greaterThan, I.greaterThanOrEqual = function(t) {
                    return this.comp(t) >= 0
                }, I.gte = I.greaterThanOrEqual, I.compare = function(t) {
                    if (e(t) || (t = a(t)), this.eq(t)) return 0;
                    var i = this.isNegative(),
                        r = t.isNegative();
                    return i && !r ? -1 : !i && r ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
                }, I.comp = I.compare, I.negate = function() {
                    return !this.unsigned && this.eq(E) ? E : this.not().add(y)
                }, I.neg = I.negate, I.add = function(t) {
                    e(t) || (t = a(t));
                    var i = this.high >>> 16,
                        r = 65535 & this.high,
                        n = this.low >>> 16,
                        s = 65535 & this.low,
                        o = t.high >>> 16,
                        h = 65535 & t.high,
                        l = t.low >>> 16,
                        u = 0,
                        g = 0,
                        v = 0,
                        w = 0;
                    return v += (w += s + (65535 & t.low)) >>> 16, g += (v += n + l) >>> 16, u += (g += r + h) >>> 16, u += i + o, f((v &= 65535) << 16 | (w &= 65535), (u &= 65535) << 16 | (g &= 65535), this.unsigned)
                }, I.subtract = function(t) {
                    return e(t) || (t = a(t)), this.add(t.neg())
                }, I.sub = I.subtract, I.multiply = function(t) {
                    if (this.isZero()) return w;
                    if (e(t) || (t = a(t)), t.isZero()) return w;
                    if (this.eq(E)) return t.isOdd() ? E : w;
                    if (t.eq(E)) return this.isOdd() ? E : w;
                    if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
                    if (t.isNegative()) return this.mul(t.neg()).neg();
                    if (this.lt(v) && t.lt(v)) return s(this.toNumber() * t.toNumber(), this.unsigned);
                    var i = this.high >>> 16,
                        r = 65535 & this.high,
                        n = this.low >>> 16,
                        o = 65535 & this.low,
                        h = t.high >>> 16,
                        l = 65535 & t.high,
                        u = t.low >>> 16,
                        g = 65535 & t.low,
                        b = 0,
                        y = 0,
                        d = 0,
                        c = 0;
                    return d += (c += o * g) >>> 16, y += (d += n * g) >>> 16, d &= 65535, y += (d += o * u) >>> 16, b += (y += r * g) >>> 16, y &= 65535, b += (y += n * u) >>> 16, y &= 65535, b += (y += o * l) >>> 16, b += i * g + r * u + n * l + o * h, f((d &= 65535) << 16 | (c &= 65535), (b &= 65535) << 16 | (y &= 65535), this.unsigned)
                }, I.mul = I.multiply, I.divide = function(t) {
                    if (e(t) || (t = a(t)), t.isZero()) throw Error("division by zero");
                    if (this.isZero()) return this.unsigned ? b : w;
                    var i, r, n;
                    if (this.unsigned) {
                        if (t.unsigned || (t = t.toUnsigned()), t.gt(this)) return b;
                        if (t.gt(this.shru(1))) return d;
                        n = b
                    } else {
                        if (this.eq(E)) return t.eq(y) || t.eq(c) ? E : t.eq(E) ? y : (i = this.shr(1).div(t).shl(1)).eq(w) ? t.isNegative() ? y : c : (r = this.sub(t.mul(i)), n = i.add(r.div(t)));
                        if (t.eq(E)) return this.unsigned ? b : w;
                        if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
                        if (t.isNegative()) return this.div(t.neg()).neg();
                        n = w
                    }
                    for (r = this; r.gte(t);) {
                        i = Math.max(1, Math.floor(r.toNumber() / t.toNumber()));
                        for (var f = Math.ceil(Math.log(i) / Math.LN2), h = f <= 48 ? 1 : o(2, f - 48), l = s(i), u = l.mul(t); u.isNegative() || u.gt(r);) u = (l = s(i -= h, this.unsigned)).mul(t);
                        l.isZero() && (l = y), n = n.add(l), r = r.sub(u)
                    }
                    return n
                }, I.div = I.divide, I.modulo = function(t) {
                    return e(t) || (t = a(t)), this.sub(this.div(t).mul(t))
                }, I.mod = I.modulo, I.not = function() {
                    return f(~this.low, ~this.high, this.unsigned)
                }, I.and = function(t) {
                    return e(t) || (t = a(t)), f(this.low & t.low, this.high & t.high, this.unsigned)
                }, I.or = function(t) {
                    return e(t) || (t = a(t)), f(this.low | t.low, this.high | t.high, this.unsigned)
                }, I.xor = function(t) {
                    return e(t) || (t = a(t)), f(this.low ^ t.low, this.high ^ t.high, this.unsigned)
                }, I.shiftLeft = function(t) {
                    return e(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? f(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : f(0, this.low << t - 32, this.unsigned)
                }, I.shl = I.shiftLeft, I.shiftRight = function(t) {
                    return e(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? f(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : f(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned)
                }, I.shr = I.shiftRight, I.shiftRightUnsigned = function(t) {
                    if (e(t) && (t = t.toInt()), 0 == (t &= 63)) return this;
                    var i = this.high;
                    return t < 32 ? f(this.low >>> t | i << 32 - t, i >>> t, this.unsigned) : f(32 === t ? i : i >>> t - 32, 0, this.unsigned)
                }, I.shru = I.shiftRightUnsigned, I.toSigned = function() {
                    return this.unsigned ? f(this.low, this.high, !1) : this
                }, I.toUnsigned = function() {
                    return this.unsigned ? this : f(this.low, this.high, !0)
                }, I.toBytes = function(t) {
                    return t ? this.toBytesLE() : this.toBytesBE()
                }, I.toBytesLE = function() {
                    var t = this.high,
                        e = this.low;
                    return [255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255]
                }, I.toBytesBE = function() {
                    var t = this.high,
                        e = this.low;
                    return [t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
                }, t
            }) ? r.apply(e, n) : r) || (t.exports = s)
        }
    }
]);