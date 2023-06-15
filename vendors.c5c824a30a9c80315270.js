(window.webpackJsonp = window.webpackJsonp || []).push([
    [321], {
        5508: function(e, t, r) {
            var a = r(5504),
                i = r(9629),
                n = e.exports = a.util = a.util || {};

            function s(e) {
                if (8 !== e && 16 !== e && 24 !== e && 32 !== e) throw new Error("Only 8, 16, 24, or 32 bits supported: " + e)
            }

            function o(e) {
                if (this.data = "", this.read = 0, "string" == typeof e) this.data = e;
                else if (n.isArrayBuffer(e) || n.isArrayBufferView(e))
                    if ("undefined" != typeof Buffer && e instanceof Buffer) this.data = e.toString("binary");
                    else {
                        var t = new Uint8Array(e);
                        try {
                            this.data = String.fromCharCode.apply(null, t)
                        } catch (e) {
                            for (var r = 0; r < t.length; ++r) this.putByte(t[r])
                        }
                    }
                else(e instanceof o || "object" == typeof e && "string" == typeof e.data && "number" == typeof e.read) && (this.data = e.data, this.read = e.read);
                this._constructedStringLength = 0
            }! function() {
                if ("undefined" != typeof process && process.nextTick && !process.browser) return n.nextTick = process.nextTick, void("function" == typeof setImmediate ? n.setImmediate = setImmediate : n.setImmediate = n.nextTick);
                if ("function" == typeof setImmediate) return n.setImmediate = function() {
                    return setImmediate.apply(void 0, arguments)
                }, void(n.nextTick = function(e) {
                    return setImmediate(e)
                });
                if (n.setImmediate = function(e) {
                        setTimeout(e, 0)
                    }, "undefined" != typeof window && "function" == typeof window.postMessage) {
                    var e = "forge.setImmediate",
                        t = [];
                    n.setImmediate = function(r) {
                        t.push(r), 1 === t.length && window.postMessage(e, "*")
                    }, window.addEventListener("message", (function(r) {
                        if (r.source === window && r.data === e) {
                            r.stopPropagation();
                            var a = t.slice();
                            t.length = 0, a.forEach((function(e) {
                                e()
                            }))
                        }
                    }), !0)
                }
                if ("undefined" != typeof MutationObserver) {
                    var r = Date.now(),
                        a = !0,
                        i = document.createElement("div");
                    t = [];
                    new MutationObserver((function() {
                        var e = t.slice();
                        t.length = 0, e.forEach((function(e) {
                            e()
                        }))
                    })).observe(i, {
                        attributes: !0
                    });
                    var s = n.setImmediate;
                    n.setImmediate = function(e) {
                        Date.now() - r > 15 ? (r = Date.now(), s(e)) : (t.push(e), 1 === t.length && i.setAttribute("a", a = !a))
                    }
                }
                n.nextTick = n.setImmediate
            }(), n.isNodejs = "undefined" != typeof process && process.versions && process.versions.node, n.globalScope = n.isNodejs ? global : "undefined" == typeof self ? window : self, n.isArray = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, n.isArrayBuffer = function(e) {
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            }, n.isArrayBufferView = function(e) {
                return e && n.isArrayBuffer(e.buffer) && void 0 !== e.byteLength
            }, n.ByteBuffer = o, n.ByteStringBuffer = o;
            n.ByteStringBuffer.prototype._optimizeConstructedString = function(e) {
                this._constructedStringLength += e, this._constructedStringLength > 4096 && (this.data.substr(0, 1), this._constructedStringLength = 0)
            }, n.ByteStringBuffer.prototype.length = function() {
                return this.data.length - this.read
            }, n.ByteStringBuffer.prototype.isEmpty = function() {
                return this.length() <= 0
            }, n.ByteStringBuffer.prototype.putByte = function(e) {
                return this.putBytes(String.fromCharCode(e))
            }, n.ByteStringBuffer.prototype.fillWithByte = function(e, t) {
                e = String.fromCharCode(e);
                for (var r = this.data; t > 0;) 1 & t && (r += e), (t >>>= 1) > 0 && (e += e);
                return this.data = r, this._optimizeConstructedString(t), this
            }, n.ByteStringBuffer.prototype.putBytes = function(e) {
                return this.data += e, this._optimizeConstructedString(e.length), this
            }, n.ByteStringBuffer.prototype.putString = function(e) {
                return this.putBytes(n.encodeUtf8(e))
            }, n.ByteStringBuffer.prototype.putInt16 = function(e) {
                return this.putBytes(String.fromCharCode(e >> 8 & 255) + String.fromCharCode(255 & e))
            }, n.ByteStringBuffer.prototype.putInt24 = function(e) {
                return this.putBytes(String.fromCharCode(e >> 16 & 255) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(255 & e))
            }, n.ByteStringBuffer.prototype.putInt32 = function(e) {
                return this.putBytes(String.fromCharCode(e >> 24 & 255) + String.fromCharCode(e >> 16 & 255) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(255 & e))
            }, n.ByteStringBuffer.prototype.putInt16Le = function(e) {
                return this.putBytes(String.fromCharCode(255 & e) + String.fromCharCode(e >> 8 & 255))
            }, n.ByteStringBuffer.prototype.putInt24Le = function(e) {
                return this.putBytes(String.fromCharCode(255 & e) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(e >> 16 & 255))
            }, n.ByteStringBuffer.prototype.putInt32Le = function(e) {
                return this.putBytes(String.fromCharCode(255 & e) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(e >> 16 & 255) + String.fromCharCode(e >> 24 & 255))
            }, n.ByteStringBuffer.prototype.putInt = function(e, t) {
                s(t);
                var r = "";
                do {
                    t -= 8, r += String.fromCharCode(e >> t & 255)
                } while (t > 0);
                return this.putBytes(r)
            }, n.ByteStringBuffer.prototype.putSignedInt = function(e, t) {
                return e < 0 && (e += 2 << t - 1), this.putInt(e, t)
            }, n.ByteStringBuffer.prototype.putBuffer = function(e) {
                return this.putBytes(e.getBytes())
            }, n.ByteStringBuffer.prototype.getByte = function() {
                return this.data.charCodeAt(this.read++)
            }, n.ByteStringBuffer.prototype.getInt16 = function() {
                var e = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1);
                return this.read += 2, e
            }, n.ByteStringBuffer.prototype.getInt24 = function() {
                var e = this.data.charCodeAt(this.read) << 16 ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2);
                return this.read += 3, e
            }, n.ByteStringBuffer.prototype.getInt32 = function() {
                var e = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3);
                return this.read += 4, e
            }, n.ByteStringBuffer.prototype.getInt16Le = function() {
                var e = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8;
                return this.read += 2, e
            }, n.ByteStringBuffer.prototype.getInt24Le = function() {
                var e = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16;
                return this.read += 3, e
            }, n.ByteStringBuffer.prototype.getInt32Le = function() {
                var e = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24;
                return this.read += 4, e
            }, n.ByteStringBuffer.prototype.getInt = function(e) {
                s(e);
                var t = 0;
                do {
                    t = (t << 8) + this.data.charCodeAt(this.read++), e -= 8
                } while (e > 0);
                return t
            }, n.ByteStringBuffer.prototype.getSignedInt = function(e) {
                var t = this.getInt(e),
                    r = 2 << e - 2;
                return t >= r && (t -= r << 1), t
            }, n.ByteStringBuffer.prototype.getBytes = function(e) {
                var t;
                return e ? (e = Math.min(this.length(), e), t = this.data.slice(this.read, this.read + e), this.read += e) : 0 === e ? t = "" : (t = 0 === this.read ? this.data : this.data.slice(this.read), this.clear()), t
            }, n.ByteStringBuffer.prototype.bytes = function(e) {
                return void 0 === e ? this.data.slice(this.read) : this.data.slice(this.read, this.read + e)
            }, n.ByteStringBuffer.prototype.at = function(e) {
                return this.data.charCodeAt(this.read + e)
            }, n.ByteStringBuffer.prototype.setAt = function(e, t) {
                return this.data = this.data.substr(0, this.read + e) + String.fromCharCode(t) + this.data.substr(this.read + e + 1), this
            }, n.ByteStringBuffer.prototype.last = function() {
                return this.data.charCodeAt(this.data.length - 1)
            }, n.ByteStringBuffer.prototype.copy = function() {
                var e = n.createBuffer(this.data);
                return e.read = this.read, e
            }, n.ByteStringBuffer.prototype.compact = function() {
                return this.read > 0 && (this.data = this.data.slice(this.read), this.read = 0), this
            }, n.ByteStringBuffer.prototype.clear = function() {
                return this.data = "", this.read = 0, this
            }, n.ByteStringBuffer.prototype.truncate = function(e) {
                var t = Math.max(0, this.length() - e);
                return this.data = this.data.substr(this.read, t), this.read = 0, this
            }, n.ByteStringBuffer.prototype.toHex = function() {
                for (var e = "", t = this.read; t < this.data.length; ++t) {
                    var r = this.data.charCodeAt(t);
                    r < 16 && (e += "0"), e += r.toString(16)
                }
                return e
            }, n.ByteStringBuffer.prototype.toString = function() {
                return n.decodeUtf8(this.bytes())
            }, n.DataBuffer = function(e, t) {
                t = t || {}, this.read = t.readOffset || 0, this.growSize = t.growSize || 1024;
                var r = n.isArrayBuffer(e),
                    a = n.isArrayBufferView(e);
                if (r || a) return this.data = r ? new DataView(e) : new DataView(e.buffer, e.byteOffset, e.byteLength), void(this.write = "writeOffset" in t ? t.writeOffset : this.data.byteLength);
                this.data = new DataView(new ArrayBuffer(0)), this.write = 0, null != e && this.putBytes(e), "writeOffset" in t && (this.write = t.writeOffset)
            }, n.DataBuffer.prototype.length = function() {
                return this.write - this.read
            }, n.DataBuffer.prototype.isEmpty = function() {
                return this.length() <= 0
            }, n.DataBuffer.prototype.accommodate = function(e, t) {
                if (this.length() >= e) return this;
                t = Math.max(t || this.growSize, e);
                var r = new Uint8Array(this.data.buffer, this.data.byteOffset, this.data.byteLength),
                    a = new Uint8Array(this.length() + t);
                return a.set(r), this.data = new DataView(a.buffer), this
            }, n.DataBuffer.prototype.putByte = function(e) {
                return this.accommodate(1), this.data.setUint8(this.write++, e), this
            }, n.DataBuffer.prototype.fillWithByte = function(e, t) {
                this.accommodate(t);
                for (var r = 0; r < t; ++r) this.data.setUint8(e);
                return this
            }, n.DataBuffer.prototype.putBytes = function(e, t) {
                if (n.isArrayBufferView(e)) {
                    var r = (a = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)).byteLength - a.byteOffset;
                    return this.accommodate(r), new Uint8Array(this.data.buffer, this.write).set(a), this.write += r, this
                }
                if (n.isArrayBuffer(e)) {
                    var a = new Uint8Array(e);
                    return this.accommodate(a.byteLength), new Uint8Array(this.data.buffer).set(a, this.write), this.write += a.byteLength, this
                }
                if (e instanceof n.DataBuffer || "object" == typeof e && "number" == typeof e.read && "number" == typeof e.write && n.isArrayBufferView(e.data)) {
                    a = new Uint8Array(e.data.byteLength, e.read, e.length());
                    return this.accommodate(a.byteLength), new Uint8Array(e.data.byteLength, this.write).set(a), this.write += a.byteLength, this
                }
                if (e instanceof n.ByteStringBuffer && (e = e.data, t = "binary"), t = t || "binary", "string" == typeof e) {
                    var i;
                    if ("hex" === t) return this.accommodate(Math.ceil(e.length / 2)), i = new Uint8Array(this.data.buffer, this.write), this.write += n.binary.hex.decode(e, i, this.write), this;
                    if ("base64" === t) return this.accommodate(3 * Math.ceil(e.length / 4)), i = new Uint8Array(this.data.buffer, this.write), this.write += n.binary.base64.decode(e, i, this.write), this;
                    if ("utf8" === t && (e = n.encodeUtf8(e), t = "binary"), "binary" === t || "raw" === t) return this.accommodate(e.length), i = new Uint8Array(this.data.buffer, this.write), this.write += n.binary.raw.decode(i), this;
                    if ("utf16" === t) return this.accommodate(2 * e.length), i = new Uint16Array(this.data.buffer, this.write), this.write += n.text.utf16.encode(i), this;
                    throw new Error("Invalid encoding: " + t)
                }
                throw Error("Invalid parameter: " + e)
            }, n.DataBuffer.prototype.putBuffer = function(e) {
                return this.putBytes(e), e.clear(), this
            }, n.DataBuffer.prototype.putString = function(e) {
                return this.putBytes(e, "utf16")
            }, n.DataBuffer.prototype.putInt16 = function(e) {
                return this.accommodate(2), this.data.setInt16(this.write, e), this.write += 2, this
            }, n.DataBuffer.prototype.putInt24 = function(e) {
                return this.accommodate(3), this.data.setInt16(this.write, e >> 8 & 65535), this.data.setInt8(this.write, e >> 16 & 255), this.write += 3, this
            }, n.DataBuffer.prototype.putInt32 = function(e) {
                return this.accommodate(4), this.data.setInt32(this.write, e), this.write += 4, this
            }, n.DataBuffer.prototype.putInt16Le = function(e) {
                return this.accommodate(2), this.data.setInt16(this.write, e, !0), this.write += 2, this
            }, n.DataBuffer.prototype.putInt24Le = function(e) {
                return this.accommodate(3), this.data.setInt8(this.write, e >> 16 & 255), this.data.setInt16(this.write, e >> 8 & 65535, !0), this.write += 3, this
            }, n.DataBuffer.prototype.putInt32Le = function(e) {
                return this.accommodate(4), this.data.setInt32(this.write, e, !0), this.write += 4, this
            }, n.DataBuffer.prototype.putInt = function(e, t) {
                s(t), this.accommodate(t / 8);
                do {
                    t -= 8, this.data.setInt8(this.write++, e >> t & 255)
                } while (t > 0);
                return this
            }, n.DataBuffer.prototype.putSignedInt = function(e, t) {
                return s(t), this.accommodate(t / 8), e < 0 && (e += 2 << t - 1), this.putInt(e, t)
            }, n.DataBuffer.prototype.getByte = function() {
                return this.data.getInt8(this.read++)
            }, n.DataBuffer.prototype.getInt16 = function() {
                var e = this.data.getInt16(this.read);
                return this.read += 2, e
            }, n.DataBuffer.prototype.getInt24 = function() {
                var e = this.data.getInt16(this.read) << 8 ^ this.data.getInt8(this.read + 2);
                return this.read += 3, e
            }, n.DataBuffer.prototype.getInt32 = function() {
                var e = this.data.getInt32(this.read);
                return this.read += 4, e
            }, n.DataBuffer.prototype.getInt16Le = function() {
                var e = this.data.getInt16(this.read, !0);
                return this.read += 2, e
            }, n.DataBuffer.prototype.getInt24Le = function() {
                var e = this.data.getInt8(this.read) ^ this.data.getInt16(this.read + 1, !0) << 8;
                return this.read += 3, e
            }, n.DataBuffer.prototype.getInt32Le = function() {
                var e = this.data.getInt32(this.read, !0);
                return this.read += 4, e
            }, n.DataBuffer.prototype.getInt = function(e) {
                s(e);
                var t = 0;
                do {
                    t = (t << 8) + this.data.getInt8(this.read++), e -= 8
                } while (e > 0);
                return t
            }, n.DataBuffer.prototype.getSignedInt = function(e) {
                var t = this.getInt(e),
                    r = 2 << e - 2;
                return t >= r && (t -= r << 1), t
            }, n.DataBuffer.prototype.getBytes = function(e) {
                var t;
                return e ? (e = Math.min(this.length(), e), t = this.data.slice(this.read, this.read + e), this.read += e) : 0 === e ? t = "" : (t = 0 === this.read ? this.data : this.data.slice(this.read), this.clear()), t
            }, n.DataBuffer.prototype.bytes = function(e) {
                return void 0 === e ? this.data.slice(this.read) : this.data.slice(this.read, this.read + e)
            }, n.DataBuffer.prototype.at = function(e) {
                return this.data.getUint8(this.read + e)
            }, n.DataBuffer.prototype.setAt = function(e, t) {
                return this.data.setUint8(e, t), this
            }, n.DataBuffer.prototype.last = function() {
                return this.data.getUint8(this.write - 1)
            }, n.DataBuffer.prototype.copy = function() {
                return new n.DataBuffer(this)
            }, n.DataBuffer.prototype.compact = function() {
                if (this.read > 0) {
                    var e = new Uint8Array(this.data.buffer, this.read),
                        t = new Uint8Array(e.byteLength);
                    t.set(e), this.data = new DataView(t), this.write -= this.read, this.read = 0
                }
                return this
            }, n.DataBuffer.prototype.clear = function() {
                return this.data = new DataView(new ArrayBuffer(0)), this.read = this.write = 0, this
            }, n.DataBuffer.prototype.truncate = function(e) {
                return this.write = Math.max(0, this.length() - e), this.read = Math.min(this.read, this.write), this
            }, n.DataBuffer.prototype.toHex = function() {
                for (var e = "", t = this.read; t < this.data.byteLength; ++t) {
                    var r = this.data.getUint8(t);
                    r < 16 && (e += "0"), e += r.toString(16)
                }
                return e
            }, n.DataBuffer.prototype.toString = function(e) {
                var t = new Uint8Array(this.data, this.read, this.length());
                if ("binary" === (e = e || "utf8") || "raw" === e) return n.binary.raw.encode(t);
                if ("hex" === e) return n.binary.hex.encode(t);
                if ("base64" === e) return n.binary.base64.encode(t);
                if ("utf8" === e) return n.text.utf8.decode(t);
                if ("utf16" === e) return n.text.utf16.decode(t);
                throw new Error("Invalid encoding: " + e)
            }, n.createBuffer = function(e, t) {
                return t = t || "raw", void 0 !== e && "utf8" === t && (e = n.encodeUtf8(e)), new n.ByteBuffer(e)
            }, n.fillString = function(e, t) {
                for (var r = ""; t > 0;) 1 & t && (r += e), (t >>>= 1) > 0 && (e += e);
                return r
            }, n.xorBytes = function(e, t, r) {
                for (var a = "", i = "", n = "", s = 0, o = 0; r > 0; --r, ++s) i = e.charCodeAt(s) ^ t.charCodeAt(s), o >= 10 && (a += n, n = "", o = 0), n += String.fromCharCode(i), ++o;
                return a += n
            }, n.hexToBytes = function(e) {
                var t = "",
                    r = 0;
                for (!0 & e.length && (r = 1, t += String.fromCharCode(parseInt(e[0], 16))); r < e.length; r += 2) t += String.fromCharCode(parseInt(e.substr(r, 2), 16));
                return t
            }, n.bytesToHex = function(e) {
                return n.createBuffer(e).toHex()
            }, n.int32ToBytes = function(e) {
                return String.fromCharCode(e >> 24 & 255) + String.fromCharCode(e >> 16 & 255) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(255 & e)
            };
            var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                c = [62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
                f = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
            n.encode64 = function(e, t) {
                for (var r, a, i, n = "", s = "", o = 0; o < e.length;) r = e.charCodeAt(o++), a = e.charCodeAt(o++), i = e.charCodeAt(o++), n += u.charAt(r >> 2), n += u.charAt((3 & r) << 4 | a >> 4), isNaN(a) ? n += "==" : (n += u.charAt((15 & a) << 2 | i >> 6), n += isNaN(i) ? "=" : u.charAt(63 & i)), t && n.length > t && (s += n.substr(0, t) + "\r\n", n = n.substr(t));
                return s += n
            }, n.decode64 = function(e) {
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                for (var t, r, a, i, n = "", s = 0; s < e.length;) t = c[e.charCodeAt(s++) - 43], r = c[e.charCodeAt(s++) - 43], a = c[e.charCodeAt(s++) - 43], i = c[e.charCodeAt(s++) - 43], n += String.fromCharCode(t << 2 | r >> 4), 64 !== a && (n += String.fromCharCode((15 & r) << 4 | a >> 2), 64 !== i && (n += String.fromCharCode((3 & a) << 6 | i)));
                return n
            }, n.encodeUtf8 = function(e) {
                return unescape(encodeURIComponent(e))
            }, n.decodeUtf8 = function(e) {
                return decodeURIComponent(escape(e))
            }, n.binary = {
                raw: {},
                hex: {},
                base64: {},
                base58: {},
                baseN: {
                    encode: i.encode,
                    decode: i.decode
                }
            }, n.binary.raw.encode = function(e) {
                return String.fromCharCode.apply(null, e)
            }, n.binary.raw.decode = function(e, t, r) {
                var a = t;
                a || (a = new Uint8Array(e.length));
                for (var i = r = r || 0, n = 0; n < e.length; ++n) a[i++] = e.charCodeAt(n);
                return t ? i - r : a
            }, n.binary.hex.encode = n.bytesToHex, n.binary.hex.decode = function(e, t, r) {
                var a = t;
                a || (a = new Uint8Array(Math.ceil(e.length / 2)));
                var i = 0,
                    n = r = r || 0;
                for (1 & e.length && (i = 1, a[n++] = parseInt(e[0], 16)); i < e.length; i += 2) a[n++] = parseInt(e.substr(i, 2), 16);
                return t ? n - r : a
            }, n.binary.base64.encode = function(e, t) {
                for (var r, a, i, n = "", s = "", o = 0; o < e.byteLength;) r = e[o++], a = e[o++], i = e[o++], n += u.charAt(r >> 2), n += u.charAt((3 & r) << 4 | a >> 4), isNaN(a) ? n += "==" : (n += u.charAt((15 & a) << 2 | i >> 6), n += isNaN(i) ? "=" : u.charAt(63 & i)), t && n.length > t && (s += n.substr(0, t) + "\r\n", n = n.substr(t));
                return s += n
            }, n.binary.base64.decode = function(e, t, r) {
                var a, i, n, s, o = t;
                o || (o = new Uint8Array(3 * Math.ceil(e.length / 4))), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                for (var u = 0, f = r = r || 0; u < e.length;) a = c[e.charCodeAt(u++) - 43], i = c[e.charCodeAt(u++) - 43], n = c[e.charCodeAt(u++) - 43], s = c[e.charCodeAt(u++) - 43], o[f++] = a << 2 | i >> 4, 64 !== n && (o[f++] = (15 & i) << 4 | n >> 2, 64 !== s && (o[f++] = (3 & n) << 6 | s));
                return t ? f - r : o.subarray(0, f)
            }, n.binary.base58.encode = function(e, t) {
                return n.binary.baseN.encode(e, f, t)
            }, n.binary.base58.decode = function(e, t) {
                return n.binary.baseN.decode(e, f, t)
            }, n.text = {
                utf8: {},
                utf16: {}
            }, n.text.utf8.encode = function(e, t, r) {
                e = n.encodeUtf8(e);
                var a = t;
                a || (a = new Uint8Array(e.length));
                for (var i = r = r || 0, s = 0; s < e.length; ++s) a[i++] = e.charCodeAt(s);
                return t ? i - r : a
            }, n.text.utf8.decode = function(e) {
                return n.decodeUtf8(String.fromCharCode.apply(null, e))
            }, n.text.utf16.encode = function(e, t, r) {
                var a = t;
                a || (a = new Uint8Array(2 * e.length));
                for (var i = new Uint16Array(a.buffer), n = r = r || 0, s = r, o = 0; o < e.length; ++o) i[s++] = e.charCodeAt(o), n += 2;
                return t ? n - r : a
            }, n.text.utf16.decode = function(e) {
                return String.fromCharCode.apply(null, new Uint16Array(e.buffer))
            }, n.deflate = function(e, t, r) {
                if (t = n.decode64(e.deflate(n.encode64(t)).rval), r) {
                    var a = 2;
                    32 & t.charCodeAt(1) && (a = 6), t = t.substring(a, t.length - 4)
                }
                return t
            }, n.inflate = function(e, t, r) {
                var a = e.inflate(n.encode64(t)).rval;
                return null === a ? null : n.decode64(a)
            };
            var d = function(e, t, r) {
                    if (!e) throw new Error("WebStorage not available.");
                    var a;
                    if (null === r ? a = e.removeItem(t) : (r = n.encode64(JSON.stringify(r)), a = e.setItem(t, r)), void 0 !== a && !0 !== a.rval) {
                        var i = new Error(a.error.message);
                        throw i.id = a.error.id, i.name = a.error.name, i
                    }
                },
                l = function(e, t) {
                    if (!e) throw new Error("WebStorage not available.");
                    var r = e.getItem(t);
                    if (e.init)
                        if (null === r.rval) {
                            if (r.error) {
                                var a = new Error(r.error.message);
                                throw a.id = r.error.id, a.name = r.error.name, a
                            }
                            r = null
                        } else r = r.rval;
                    return null !== r && (r = JSON.parse(n.decode64(r))), r
                },
                h = function(e, t, r, a) {
                    var i = l(e, t);
                    null === i && (i = {}), i[r] = a, d(e, t, i)
                },
                p = function(e, t, r) {
                    var a = l(e, t);
                    return null !== a && (a = r in a ? a[r] : null), a
                },
                g = function(e, t, r) {
                    var a = l(e, t);
                    if (null !== a && r in a) {
                        delete a[r];
                        var i = !0;
                        for (var n in a) {
                            i = !1;
                            break
                        }
                        i && (a = null), d(e, t, a)
                    }
                },
                y = function(e, t) {
                    d(e, t, null)
                },
                m = function(e, t, r) {
                    var a, i = null;
                    void 0 === r && (r = ["web", "flash"]);
                    var n = !1,
                        s = null;
                    for (var o in r) {
                        a = r[o];
                        try {
                            if ("flash" === a || "both" === a) {
                                if (null === t[0]) throw new Error("Flash local storage not available.");
                                i = e.apply(this, t), n = "flash" === a
                            }
                            "web" !== a && "both" !== a || (t[0] = localStorage, i = e.apply(this, t), n = !0)
                        } catch (e) {
                            s = e
                        }
                        if (n) break
                    }
                    if (!n) throw s;
                    return i
                };
            n.setItem = function(e, t, r, a, i) {
                m(h, arguments, i)
            }, n.getItem = function(e, t, r, a) {
                return m(p, arguments, a)
            }, n.removeItem = function(e, t, r, a) {
                m(g, arguments, a)
            }, n.clearItems = function(e, t, r) {
                m(y, arguments, r)
            }, n.parseUrl = function(e) {
                var t = /^(https?):\/\/([^:&^\/]*):?(\d*)(.*)$/g;
                t.lastIndex = 0;
                var r = t.exec(e),
                    a = null === r ? null : {
                        full: e,
                        scheme: r[1],
                        host: r[2],
                        port: r[3],
                        path: r[4]
                    };
                return a && (a.fullHost = a.host, a.port ? (80 !== a.port && "http" === a.scheme || 443 !== a.port && "https" === a.scheme) && (a.fullHost += ":" + a.port) : "http" === a.scheme ? a.port = 80 : "https" === a.scheme && (a.port = 443), a.full = a.scheme + "://" + a.fullHost), a
            };
            var C = null;
            n.getQueryVariables = function(e) {
                var t, r = function(e) {
                    for (var t = {}, r = e.split("&"), a = 0; a < r.length; a++) {
                        var i, n, s = r[a].indexOf("=");
                        s > 0 ? (i = r[a].substring(0, s), n = r[a].substring(s + 1)) : (i = r[a], n = null), i in t || (t[i] = []), i in Object.prototype || null === n || t[i].push(unescape(n))
                    }
                    return t
                };
                return void 0 === e ? (null === C && (C = "undefined" != typeof window && window.location && window.location.search ? r(window.location.search.substring(1)) : {}), t = C) : t = r(e), t
            }, n.parseFragment = function(e) {
                var t = e,
                    r = "",
                    a = e.indexOf("?");
                a > 0 && (t = e.substring(0, a), r = e.substring(a + 1));
                var i = t.split("/");
                return i.length > 0 && "" === i[0] && i.shift(), {
                    pathString: t,
                    queryString: r,
                    path: i,
                    query: "" === r ? {} : n.getQueryVariables(r)
                }
            }, n.makeRequest = function(e) {
                var t = n.parseFragment(e),
                    r = {
                        path: t.pathString,
                        query: t.queryString,
                        getPath: function(e) {
                            return void 0 === e ? t.path : t.path[e]
                        },
                        getQuery: function(e, r) {
                            var a;
                            return void 0 === e ? a = t.query : (a = t.query[e]) && void 0 !== r && (a = a[r]), a
                        },
                        getQueryLast: function(e, t) {
                            var a = r.getQuery(e);
                            return a ? a[a.length - 1] : t
                        }
                    };
                return r
            }, n.makeLink = function(e, t, r) {
                e = jQuery.isArray(e) ? e.join("/") : e;
                var a = jQuery.param(t || {});
                return r = r || "", e + (a.length > 0 ? "?" + a : "") + (r.length > 0 ? "#" + r : "")
            }, n.setPath = function(e, t, r) {
                if ("object" == typeof e && null !== e)
                    for (var a = 0, i = t.length; a < i;) {
                        var n = t[a++];
                        if (a == i) e[n] = r;
                        else {
                            var s = n in e;
                            (!s || s && "object" != typeof e[n] || s && null === e[n]) && (e[n] = {}), e = e[n]
                        }
                    }
            }, n.getPath = function(e, t, r) {
                for (var a = 0, i = t.length, n = !0; n && a < i && "object" == typeof e && null !== e;) {
                    var s = t[a++];
                    (n = s in e) && (e = e[s])
                }
                return n ? e : r
            }, n.deletePath = function(e, t) {
                if ("object" == typeof e && null !== e)
                    for (var r = 0, a = t.length; r < a;) {
                        var i = t[r++];
                        if (r == a) delete e[i];
                        else {
                            if (!(i in e) || "object" != typeof e[i] || null === e[i]) break;
                            e = e[i]
                        }
                    }
            }, n.isEmpty = function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            }, n.format = function(e) {
                for (var t, r, a = /%./g, i = 0, n = [], s = 0; t = a.exec(e);) {
                    (r = e.substring(s, a.lastIndex - 2)).length > 0 && n.push(r), s = a.lastIndex;
                    var o = t[0][1];
                    switch (o) {
                        case "s":
                        case "o":
                            i < arguments.length ? n.push(arguments[1 + i++]) : n.push("<?>");
                            break;
                        case "%":
                            n.push("%");
                            break;
                        default:
                            n.push("<%" + o + "?>")
                    }
                }
                return n.push(e.substring(s)), n.join("")
            }, n.formatNumber = function(e, t, r, a) {
                var i = e,
                    n = isNaN(t = Math.abs(t)) ? 2 : t,
                    s = void 0 === r ? "," : r,
                    o = void 0 === a ? "." : a,
                    u = i < 0 ? "-" : "",
                    c = parseInt(i = Math.abs(+i || 0).toFixed(n), 10) + "",
                    f = c.length > 3 ? c.length % 3 : 0;
                return u + (f ? c.substr(0, f) + o : "") + c.substr(f).replace(/(\d{3})(?=\d)/g, "$1" + o) + (n ? s + Math.abs(i - c).toFixed(n).slice(2) : "")
            }, n.formatSize = function(e) {
                return e = e >= 1073741824 ? n.formatNumber(e / 1073741824, 2, ".", "") + " GiB" : e >= 1048576 ? n.formatNumber(e / 1048576, 2, ".", "") + " MiB" : e >= 1024 ? n.formatNumber(e / 1024, 0) + " KiB" : n.formatNumber(e, 0) + " bytes"
            }, n.bytesFromIP = function(e) {
                return -1 !== e.indexOf(".") ? n.bytesFromIPv4(e) : -1 !== e.indexOf(":") ? n.bytesFromIPv6(e) : null
            }, n.bytesFromIPv4 = function(e) {
                if (4 !== (e = e.split(".")).length) return null;
                for (var t = n.createBuffer(), r = 0; r < e.length; ++r) {
                    var a = parseInt(e[r], 10);
                    if (isNaN(a)) return null;
                    t.putByte(a)
                }
                return t.getBytes()
            }, n.bytesFromIPv6 = function(e) {
                for (var t = 0, r = 2 * (8 - (e = e.split(":").filter((function(e) {
                        return 0 === e.length && ++t, !0
                    }))).length + t), a = n.createBuffer(), i = 0; i < 8; ++i)
                    if (e[i] && 0 !== e[i].length) {
                        var s = n.hexToBytes(e[i]);
                        s.length < 2 && a.putByte(0), a.putBytes(s)
                    } else a.fillWithByte(0, r), r = 0;
                return a.getBytes()
            }, n.bytesToIP = function(e) {
                return 4 === e.length ? n.bytesToIPv4(e) : 16 === e.length ? n.bytesToIPv6(e) : null
            }, n.bytesToIPv4 = function(e) {
                if (4 !== e.length) return null;
                for (var t = [], r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
                return t.join(".")
            }, n.bytesToIPv6 = function(e) {
                if (16 !== e.length) return null;
                for (var t = [], r = [], a = 0, i = 0; i < e.length; i += 2) {
                    for (var s = n.bytesToHex(e[i] + e[i + 1]);
                        "0" === s[0] && "0" !== s;) s = s.substr(1);
                    if ("0" === s) {
                        var o = r[r.length - 1],
                            u = t.length;
                        o && u === o.end + 1 ? (o.end = u, o.end - o.start > r[a].end - r[a].start && (a = r.length - 1)) : r.push({
                            start: u,
                            end: u
                        })
                    }
                    t.push(s)
                }
                if (r.length > 0) {
                    var c = r[a];
                    c.end - c.start > 0 && (t.splice(c.start, c.end - c.start + 1, ""), 0 === c.start && t.unshift(""), 7 === c.end && t.push(""))
                }
                return t.join(":")
            }, n.estimateCores = function(e, t) {
                if ("function" == typeof e && (t = e, e = {}), e = e || {}, "cores" in n && !e.update) return t(null, n.cores);
                if ("undefined" != typeof navigator && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0) return n.cores = navigator.hardwareConcurrency, t(null, n.cores);
                if ("undefined" == typeof Worker) return n.cores = 1, t(null, n.cores);
                if ("undefined" == typeof Blob) return n.cores = 2, t(null, n.cores);
                var r = URL.createObjectURL(new Blob(["(", function() {
                    self.addEventListener("message", (function(e) {
                        for (var t = Date.now(), r = t + 4; Date.now() < r;);
                        self.postMessage({
                            st: t,
                            et: r
                        })
                    }))
                }.toString(), ")()"], {
                    type: "application/javascript"
                }));
                ! function e(a, i, s) {
                    if (0 === i) {
                        var o = Math.floor(a.reduce((function(e, t) {
                            return e + t
                        }), 0) / a.length);
                        return n.cores = Math.max(1, o), URL.revokeObjectURL(r), t(null, n.cores)
                    }! function(e, t) {
                        for (var a = [], i = [], n = 0; n < e; ++n) {
                            var s = new Worker(r);
                            s.addEventListener("message", (function(r) {
                                if (i.push(r.data), i.length === e) {
                                    for (var n = 0; n < e; ++n) a[n].terminate();
                                    t(null, i)
                                }
                            })), a.push(s)
                        }
                        for (n = 0; n < e; ++n) a[n].postMessage(n)
                    }(s, (function(t, r) {
                        a.push(function(e, t) {
                            for (var r = [], a = 0; a < e; ++a)
                                for (var i = t[a], n = r[a] = [], s = 0; s < e; ++s)
                                    if (a !== s) {
                                        var o = t[s];
                                        (i.st > o.st && i.st < o.et || o.st > i.st && o.st < i.et) && n.push(s)
                                    } return r.reduce((function(e, t) {
                                return Math.max(e, t.length)
                            }), 0)
                        }(s, r)), e(a, i - 1, s)
                    }))
                }([], 5, 16)
            }
        },
        7380: function(e, t, r) {
            var a = r(5504);
            r(6592), r(5940), r(7376), r(5746), r(9644), r(5941), r(6597), r(7381), r(6235), r(5508);
            var i = a.asn1,
                n = e.exports = a.pki = a.pki || {},
                s = n.oids,
                o = {};
            o.CN = s.commonName, o.commonName = "CN", o.C = s.countryName, o.countryName = "C", o.L = s.localityName, o.localityName = "L", o.ST = s.stateOrProvinceName, o.stateOrProvinceName = "ST", o.O = s.organizationName, o.organizationName = "O", o.OU = s.organizationalUnitName, o.organizationalUnitName = "OU", o.E = s.emailAddress, o.emailAddress = "E";
            var u = a.pki.rsa.publicKeyValidator,
                c = {
                    name: "Certificate",
                    tagClass: i.Class.UNIVERSAL,
                    type: i.Type.SEQUENCE,
                    constructed: !0,
                    value: [{
                        name: "Certificate.TBSCertificate",
                        tagClass: i.Class.UNIVERSAL,
                        type: i.Type.SEQUENCE,
                        constructed: !0,
                        captureAsn1: "tbsCertificate",
                        value: [{
                            name: "Certificate.TBSCertificate.version",
                            tagClass: i.Class.CONTEXT_SPECIFIC,
                            type: 0,
                            constructed: !0,
                            optional: !0,
                            value: [{
                                name: "Certificate.TBSCertificate.version.integer",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.INTEGER,
                                constructed: !1,
                                capture: "certVersion"
                            }]
                        }, {
                            name: "Certificate.TBSCertificate.serialNumber",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Type.INTEGER,
                            constructed: !1,
                            capture: "certSerialNumber"
                        }, {
                            name: "Certificate.TBSCertificate.signature",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Type.SEQUENCE,
                            constructed: !0,
                            value: [{
                                name: "Certificate.TBSCertificate.signature.algorithm",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.OID,
                                constructed: !1,
                                capture: "certinfoSignatureOid"
                            }, {
                                name: "Certificate.TBSCertificate.signature.parameters",
                                tagClass: i.Class.UNIVERSAL,
                                optional: !0,
                                captureAsn1: "certinfoSignatureParams"
                            }]
                        }, {
                            name: "Certificate.TBSCertificate.issuer",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Type.SEQUENCE,
                            constructed: !0,
                            captureAsn1: "certIssuer"
                        }, {
                            name: "Certificate.TBSCertificate.validity",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Type.SEQUENCE,
                            constructed: !0,
                            value: [{
                                name: "Certificate.TBSCertificate.validity.notBefore (utc)",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.UTCTIME,
                                constructed: !1,
                                optional: !0,
                                capture: "certValidity1UTCTime"
                            }, {
                                name: "Certificate.TBSCertificate.validity.notBefore (generalized)",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.GENERALIZEDTIME,
                                constructed: !1,
                                optional: !0,
                                capture: "certValidity2GeneralizedTime"
                            }, {
                                name: "Certificate.TBSCertificate.validity.notAfter (utc)",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.UTCTIME,
                                constructed: !1,
                                optional: !0,
                                capture: "certValidity3UTCTime"
                            }, {
                                name: "Certificate.TBSCertificate.validity.notAfter (generalized)",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.GENERALIZEDTIME,
                                constructed: !1,
                                optional: !0,
                                capture: "certValidity4GeneralizedTime"
                            }]
                        }, {
                            name: "Certificate.TBSCertificate.subject",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Type.SEQUENCE,
                            constructed: !0,
                            captureAsn1: "certSubject"
                        }, u, {
                            name: "Certificate.TBSCertificate.issuerUniqueID",
                            tagClass: i.Class.CONTEXT_SPECIFIC,
                            type: 1,
                            constructed: !0,
                            optional: !0,
                            value: [{
                                name: "Certificate.TBSCertificate.issuerUniqueID.id",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.BITSTRING,
                                constructed: !1,
                                captureBitStringValue: "certIssuerUniqueId"
                            }]
                        }, {
                            name: "Certificate.TBSCertificate.subjectUniqueID",
                            tagClass: i.Class.CONTEXT_SPECIFIC,
                            type: 2,
                            constructed: !0,
                            optional: !0,
                            value: [{
                                name: "Certificate.TBSCertificate.subjectUniqueID.id",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.BITSTRING,
                                constructed: !1,
                                captureBitStringValue: "certSubjectUniqueId"
                            }]
                        }, {
                            name: "Certificate.TBSCertificate.extensions",
                            tagClass: i.Class.CONTEXT_SPECIFIC,
                            type: 3,
                            constructed: !0,
                            captureAsn1: "certExtensions",
                            optional: !0
                        }]
                    }, {
                        name: "Certificate.signatureAlgorithm",
                        tagClass: i.Class.UNIVERSAL,
                        type: i.Type.SEQUENCE,
                        constructed: !0,
                        value: [{
                            name: "Certificate.signatureAlgorithm.algorithm",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Type.OID,
                            constructed: !1,
                            capture: "certSignatureOid"
                        }, {
                            name: "Certificate.TBSCertificate.signature.parameters",
                            tagClass: i.Class.UNIVERSAL,
                            optional: !0,
                            captureAsn1: "certSignatureParams"
                        }]
                    }, {
                        name: "Certificate.signatureValue",
                        tagClass: i.Class.UNIVERSAL,
                        type: i.Type.BITSTRING,
                        constructed: !1,
                        captureBitStringValue: "certSignature"
                    }]
                },
                f = {
                    name: "rsapss",
                    tagClass: i.Class.UNIVERSAL,
                    type: i.Type.SEQUENCE,
                    constructed: !0,
                    value: [{
                        name: "rsapss.hashAlgorithm",
                        tagClass: i.Class.CONTEXT_SPECIFIC,
                        type: 0,
                        constructed: !0,
                        value: [{
                            name: "rsapss.hashAlgorithm.AlgorithmIdentifier",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Class.SEQUENCE,
                            constructed: !0,
                            optional: !0,
                            value: [{
                                name: "rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.OID,
                                constructed: !1,
                                capture: "hashOid"
                            }]
                        }]
                    }, {
                        name: "rsapss.maskGenAlgorithm",
                        tagClass: i.Class.CONTEXT_SPECIFIC,
                        type: 1,
                        constructed: !0,
                        value: [{
                            name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Class.SEQUENCE,
                            constructed: !0,
                            optional: !0,
                            value: [{
                                name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.OID,
                                constructed: !1,
                                capture: "maskGenOid"
                            }, {
                                name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.SEQUENCE,
                                constructed: !0,
                                value: [{
                                    name: "rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",
                                    tagClass: i.Class.UNIVERSAL,
                                    type: i.Type.OID,
                                    constructed: !1,
                                    capture: "maskGenHashOid"
                                }]
                            }]
                        }]
                    }, {
                        name: "rsapss.saltLength",
                        tagClass: i.Class.CONTEXT_SPECIFIC,
                        type: 2,
                        optional: !0,
                        value: [{
                            name: "rsapss.saltLength.saltLength",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Class.INTEGER,
                            constructed: !1,
                            capture: "saltLength"
                        }]
                    }, {
                        name: "rsapss.trailerField",
                        tagClass: i.Class.CONTEXT_SPECIFIC,
                        type: 3,
                        optional: !0,
                        value: [{
                            name: "rsapss.trailer.trailer",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Class.INTEGER,
                            constructed: !1,
                            capture: "trailer"
                        }]
                    }]
                },
                d = {
                    name: "CertificationRequestInfo",
                    tagClass: i.Class.UNIVERSAL,
                    type: i.Type.SEQUENCE,
                    constructed: !0,
                    captureAsn1: "certificationRequestInfo",
                    value: [{
                        name: "CertificationRequestInfo.integer",
                        tagClass: i.Class.UNIVERSAL,
                        type: i.Type.INTEGER,
                        constructed: !1,
                        capture: "certificationRequestInfoVersion"
                    }, {
                        name: "CertificationRequestInfo.subject",
                        tagClass: i.Class.UNIVERSAL,
                        type: i.Type.SEQUENCE,
                        constructed: !0,
                        captureAsn1: "certificationRequestInfoSubject"
                    }, u, {
                        name: "CertificationRequestInfo.attributes",
                        tagClass: i.Class.CONTEXT_SPECIFIC,
                        type: 0,
                        constructed: !0,
                        optional: !0,
                        capture: "certificationRequestInfoAttributes",
                        value: [{
                            name: "CertificationRequestInfo.attributes",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Type.SEQUENCE,
                            constructed: !0,
                            value: [{
                                name: "CertificationRequestInfo.attributes.type",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.OID,
                                constructed: !1
                            }, {
                                name: "CertificationRequestInfo.attributes.value",
                                tagClass: i.Class.UNIVERSAL,
                                type: i.Type.SET,
                                constructed: !0
                            }]
                        }]
                    }]
                },
                l = {
                    name: "CertificationRequest",
                    tagClass: i.Class.UNIVERSAL,
                    type: i.Type.SEQUENCE,
                    constructed: !0,
                    captureAsn1: "csr",
                    value: [d, {
                        name: "CertificationRequest.signatureAlgorithm",
                        tagClass: i.Class.UNIVERSAL,
                        type: i.Type.SEQUENCE,
                        constructed: !0,
                        value: [{
                            name: "CertificationRequest.signatureAlgorithm.algorithm",
                            tagClass: i.Class.UNIVERSAL,
                            type: i.Type.OID,
                            constructed: !1,
                            capture: "csrSignatureOid"
                        }, {
                            name: "CertificationRequest.signatureAlgorithm.parameters",
                            tagClass: i.Class.UNIVERSAL,
                            optional: !0,
                            captureAsn1: "csrSignatureParams"
                        }]
                    }, {
                        name: "CertificationRequest.signature",
                        tagClass: i.Class.UNIVERSAL,
                        type: i.Type.BITSTRING,
                        constructed: !1,
                        captureBitStringValue: "csrSignature"
                    }]
                };

            function h(e, t) {
                "string" == typeof t && (t = {
                    shortName: t
                });
                for (var r, a = null, i = 0; null === a && i < e.attributes.length; ++i) r = e.attributes[i], (t.type && t.type === r.type || t.name && t.name === r.name || t.shortName && t.shortName === r.shortName) && (a = r);
                return a
            }
            n.RDNAttributesAsArray = function(e, t) {
                for (var r, a, n, u = [], c = 0; c < e.value.length; ++c) {
                    r = e.value[c];
                    for (var f = 0; f < r.value.length; ++f) n = {}, a = r.value[f], n.type = i.derToOid(a.value[0].value), n.value = a.value[1].value, n.valueTagClass = a.value[1].type, n.type in s && (n.name = s[n.type], n.name in o && (n.shortName = o[n.name])), t && (t.update(n.type), t.update(n.value)), u.push(n)
                }
                return u
            }, n.CRIAttributesAsArray = function(e) {
                for (var t = [], r = 0; r < e.length; ++r)
                    for (var a = e[r], u = i.derToOid(a.value[0].value), c = a.value[1].value, f = 0; f < c.length; ++f) {
                        var d = {};
                        if (d.type = u, d.value = c[f].value, d.valueTagClass = c[f].type, d.type in s && (d.name = s[d.type], d.name in o && (d.shortName = o[d.name])), d.type === s.extensionRequest) {
                            d.extensions = [];
                            for (var l = 0; l < d.value.length; ++l) d.extensions.push(n.certificateExtensionFromAsn1(d.value[l]))
                        }
                        t.push(d)
                    }
                return t
            };
            var p = function(e, t, r) {
                var a = {};
                if (e !== s["RSASSA-PSS"]) return a;
                r && (a = {
                    hash: {
                        algorithmOid: s.sha1
                    },
                    mgf: {
                        algorithmOid: s.mgf1,
                        hash: {
                            algorithmOid: s.sha1
                        }
                    },
                    saltLength: 20
                });
                var n = {},
                    o = [];
                if (!i.validate(t, f, n, o)) {
                    var u = new Error("Cannot read RSASSA-PSS parameter block.");
                    throw u.errors = o, u
                }
                return void 0 !== n.hashOid && (a.hash = a.hash || {}, a.hash.algorithmOid = i.derToOid(n.hashOid)), void 0 !== n.maskGenOid && (a.mgf = a.mgf || {}, a.mgf.algorithmOid = i.derToOid(n.maskGenOid), a.mgf.hash = a.mgf.hash || {}, a.mgf.hash.algorithmOid = i.derToOid(n.maskGenHashOid)), void 0 !== n.saltLength && (a.saltLength = n.saltLength.charCodeAt(0)), a
            };

            function g(e) {
                for (var t, r, n = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []), s = e.attributes, o = 0; o < s.length; ++o) {
                    var u = (t = s[o]).value,
                        c = i.Type.PRINTABLESTRING;
                    "valueTagClass" in t && (c = t.valueTagClass) === i.Type.UTF8 && (u = a.util.encodeUtf8(u)), r = i.create(i.Class.UNIVERSAL, i.Type.SET, !0, [i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(t.type).getBytes()), i.create(i.Class.UNIVERSAL, c, !1, u)])]), n.value.push(r)
                }
                return n
            }

            function y(e) {
                for (var t, r = 0; r < e.length; ++r) {
                    if (void 0 === (t = e[r]).name && (t.type && t.type in n.oids ? t.name = n.oids[t.type] : t.shortName && t.shortName in o && (t.name = n.oids[o[t.shortName]])), void 0 === t.type) {
                        if (!t.name || !(t.name in n.oids)) throw (u = new Error("Attribute type not specified.")).attribute = t, u;
                        t.type = n.oids[t.name]
                    }
                    if (void 0 === t.shortName && t.name && t.name in o && (t.shortName = o[t.name]), t.type === s.extensionRequest && (t.valueConstructed = !0, t.valueTagClass = i.Type.SEQUENCE, !t.value && t.extensions)) {
                        t.value = [];
                        for (var a = 0; a < t.extensions.length; ++a) t.value.push(n.certificateExtensionToAsn1(m(t.extensions[a])))
                    }
                    var u;
                    if (void 0 === t.value) throw (u = new Error("Attribute value not specified.")).attribute = t, u
                }
            }

            function m(e, t) {
                if (t = t || {}, void 0 === e.name && e.id && e.id in n.oids && (e.name = n.oids[e.id]), void 0 === e.id) {
                    if (!e.name || !(e.name in n.oids)) throw (S = new Error("Extension ID not specified.")).extension = e, S;
                    e.id = n.oids[e.name]
                }
                if (void 0 !== e.value) return e;
                if ("keyUsage" === e.name) {
                    var r = 0,
                        o = 0,
                        u = 0;
                    e.digitalSignature && (o |= 128, r = 7), e.nonRepudiation && (o |= 64, r = 6), e.keyEncipherment && (o |= 32, r = 5), e.dataEncipherment && (o |= 16, r = 4), e.keyAgreement && (o |= 8, r = 3), e.keyCertSign && (o |= 4, r = 2), e.cRLSign && (o |= 2, r = 1), e.encipherOnly && (o |= 1, r = 0), e.decipherOnly && (u |= 128, r = 7);
                    var c = String.fromCharCode(r);
                    0 !== u ? c += String.fromCharCode(o) + String.fromCharCode(u) : 0 !== o && (c += String.fromCharCode(o)), e.value = i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, c)
                } else if ("basicConstraints" === e.name) e.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []), e.cA && e.value.value.push(i.create(i.Class.UNIVERSAL, i.Type.BOOLEAN, !1, String.fromCharCode(255))), "pathLenConstraint" in e && e.value.value.push(i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, i.integerToDer(e.pathLenConstraint).getBytes()));
                else if ("extKeyUsage" === e.name) {
                    e.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
                    var f = e.value.value;
                    for (var d in e) !0 === e[d] && (d in s ? f.push(i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(s[d]).getBytes())) : -1 !== d.indexOf(".") && f.push(i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(d).getBytes())))
                } else if ("nsCertType" === e.name) {
                    r = 0, o = 0;
                    e.client && (o |= 128, r = 7), e.server && (o |= 64, r = 6), e.email && (o |= 32, r = 5), e.objsign && (o |= 16, r = 4), e.reserved && (o |= 8, r = 3), e.sslCA && (o |= 4, r = 2), e.emailCA && (o |= 2, r = 1), e.objCA && (o |= 1, r = 0);
                    c = String.fromCharCode(r);
                    0 !== o && (c += String.fromCharCode(o)), e.value = i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, c)
                } else if ("subjectAltName" === e.name || "issuerAltName" === e.name) {
                    e.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
                    for (var l = 0; l < e.altNames.length; ++l) {
                        c = (C = e.altNames[l]).value;
                        if (7 === C.type && C.ip) {
                            if (null === (c = a.util.bytesFromIP(C.ip))) throw (S = new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.')).extension = e, S
                        } else 8 === C.type && (c = C.oid ? i.oidToDer(i.oidToDer(C.oid)) : i.oidToDer(c));
                        e.value.value.push(i.create(i.Class.CONTEXT_SPECIFIC, C.type, !1, c))
                    }
                } else if ("nsComment" === e.name && t.cert) {
                    if (!/^[\x00-\x7F]*$/.test(e.comment) || e.comment.length < 1 || e.comment.length > 128) throw new Error('Invalid "nsComment" content.');
                    e.value = i.create(i.Class.UNIVERSAL, i.Type.IA5STRING, !1, e.comment)
                } else if ("subjectKeyIdentifier" === e.name && t.cert) {
                    var h = t.cert.generateSubjectKeyIdentifier();
                    e.subjectKeyIdentifier = h.toHex(), e.value = i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, h.getBytes())
                } else if ("authorityKeyIdentifier" === e.name && t.cert) {
                    e.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
                    f = e.value.value;
                    if (e.keyIdentifier) {
                        var p = !0 === e.keyIdentifier ? t.cert.generateSubjectKeyIdentifier().getBytes() : e.keyIdentifier;
                        f.push(i.create(i.Class.CONTEXT_SPECIFIC, 0, !1, p))
                    }
                    if (e.authorityCertIssuer) {
                        var y = [i.create(i.Class.CONTEXT_SPECIFIC, 4, !0, [g(!0 === e.authorityCertIssuer ? t.cert.issuer : e.authorityCertIssuer)])];
                        f.push(i.create(i.Class.CONTEXT_SPECIFIC, 1, !0, y))
                    }
                    if (e.serialNumber) {
                        var m = a.util.hexToBytes(!0 === e.serialNumber ? t.cert.serialNumber : e.serialNumber);
                        f.push(i.create(i.Class.CONTEXT_SPECIFIC, 2, !1, m))
                    }
                } else if ("cRLDistributionPoints" === e.name) {
                    e.value = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
                    f = e.value.value;
                    var C, v = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []),
                        E = i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, []);
                    for (l = 0; l < e.altNames.length; ++l) {
                        c = (C = e.altNames[l]).value;
                        if (7 === C.type && C.ip) {
                            if (null === (c = a.util.bytesFromIP(C.ip))) throw (S = new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.')).extension = e, S
                        } else 8 === C.type && (c = C.oid ? i.oidToDer(i.oidToDer(C.oid)) : i.oidToDer(c));
                        E.value.push(i.create(i.Class.CONTEXT_SPECIFIC, C.type, !1, c))
                    }
                    v.value.push(i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [E])), f.push(v)
                }
                var S;
                if (void 0 === e.value) throw (S = new Error("Extension value not specified.")).extension = e, S;
                return e
            }

            function C(e, t) {
                switch (e) {
                    case s["RSASSA-PSS"]:
                        var r = [];
                        return void 0 !== t.hash.algorithmOid && r.push(i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(t.hash.algorithmOid).getBytes()), i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, "")])])), void 0 !== t.mgf.algorithmOid && r.push(i.create(i.Class.CONTEXT_SPECIFIC, 1, !0, [i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(t.mgf.algorithmOid).getBytes()), i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(t.mgf.hash.algorithmOid).getBytes()), i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, "")])])])), void 0 !== t.saltLength && r.push(i.create(i.Class.CONTEXT_SPECIFIC, 2, !0, [i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, i.integerToDer(t.saltLength).getBytes())])), i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, r);
                    default:
                        return i.create(i.Class.UNIVERSAL, i.Type.NULL, !1, "")
                }
            }

            function v(e) {
                var t = i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, []);
                if (0 === e.attributes.length) return t;
                for (var r = e.attributes, n = 0; n < r.length; ++n) {
                    var s = r[n],
                        o = s.value,
                        u = i.Type.UTF8;
                    "valueTagClass" in s && (u = s.valueTagClass), u === i.Type.UTF8 && (o = a.util.encodeUtf8(o));
                    var c = !1;
                    "valueConstructed" in s && (c = s.valueConstructed);
                    var f = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(s.type).getBytes()), i.create(i.Class.UNIVERSAL, i.Type.SET, !0, [i.create(i.Class.UNIVERSAL, u, c, o)])]);
                    t.value.push(f)
                }
                return t
            }
            n.certificateFromPem = function(e, t, r) {
                var s = a.pem.decode(e)[0];
                if ("CERTIFICATE" !== s.type && "X509 CERTIFICATE" !== s.type && "TRUSTED CERTIFICATE" !== s.type) {
                    var o = new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');
                    throw o.headerType = s.type, o
                }
                if (s.procType && "ENCRYPTED" === s.procType.type) throw new Error("Could not convert certificate from PEM; PEM is encrypted.");
                var u = i.fromDer(s.body, r);
                return n.certificateFromAsn1(u, t)
            }, n.certificateToPem = function(e, t) {
                var r = {
                    type: "CERTIFICATE",
                    body: i.toDer(n.certificateToAsn1(e)).getBytes()
                };
                return a.pem.encode(r, {
                    maxline: t
                })
            }, n.publicKeyFromPem = function(e) {
                var t = a.pem.decode(e)[0];
                if ("PUBLIC KEY" !== t.type && "RSA PUBLIC KEY" !== t.type) {
                    var r = new Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');
                    throw r.headerType = t.type, r
                }
                if (t.procType && "ENCRYPTED" === t.procType.type) throw new Error("Could not convert public key from PEM; PEM is encrypted.");
                var s = i.fromDer(t.body);
                return n.publicKeyFromAsn1(s)
            }, n.publicKeyToPem = function(e, t) {
                var r = {
                    type: "PUBLIC KEY",
                    body: i.toDer(n.publicKeyToAsn1(e)).getBytes()
                };
                return a.pem.encode(r, {
                    maxline: t
                })
            }, n.publicKeyToRSAPublicKeyPem = function(e, t) {
                var r = {
                    type: "RSA PUBLIC KEY",
                    body: i.toDer(n.publicKeyToRSAPublicKey(e)).getBytes()
                };
                return a.pem.encode(r, {
                    maxline: t
                })
            }, n.getPublicKeyFingerprint = function(e, t) {
                var r, s = (t = t || {}).md || a.md.sha1.create();
                switch (t.type || "RSAPublicKey") {
                    case "RSAPublicKey":
                        r = i.toDer(n.publicKeyToRSAPublicKey(e)).getBytes();
                        break;
                    case "SubjectPublicKeyInfo":
                        r = i.toDer(n.publicKeyToAsn1(e)).getBytes();
                        break;
                    default:
                        throw new Error('Unknown fingerprint type "' + t.type + '".')
                }
                s.start(), s.update(r);
                var o = s.digest();
                if ("hex" === t.encoding) {
                    var u = o.toHex();
                    return t.delimiter ? u.match(/.{2}/g).join(t.delimiter) : u
                }
                if ("binary" === t.encoding) return o.getBytes();
                if (t.encoding) throw new Error('Unknown encoding "' + t.encoding + '".');
                return o
            }, n.certificationRequestFromPem = function(e, t, r) {
                var s = a.pem.decode(e)[0];
                if ("CERTIFICATE REQUEST" !== s.type) {
                    var o = new Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');
                    throw o.headerType = s.type, o
                }
                if (s.procType && "ENCRYPTED" === s.procType.type) throw new Error("Could not convert certification request from PEM; PEM is encrypted.");
                var u = i.fromDer(s.body, r);
                return n.certificationRequestFromAsn1(u, t)
            }, n.certificationRequestToPem = function(e, t) {
                var r = {
                    type: "CERTIFICATE REQUEST",
                    body: i.toDer(n.certificationRequestToAsn1(e)).getBytes()
                };
                return a.pem.encode(r, {
                    maxline: t
                })
            }, n.createCertificate = function() {
                var e = {
                    version: 2,
                    serialNumber: "00",
                    signatureOid: null,
                    signature: null,
                    siginfo: {}
                };
                return e.siginfo.algorithmOid = null, e.validity = {}, e.validity.notBefore = new Date, e.validity.notAfter = new Date, e.issuer = {}, e.issuer.getField = function(t) {
                    return h(e.issuer, t)
                }, e.issuer.addField = function(t) {
                    y([t]), e.issuer.attributes.push(t)
                }, e.issuer.attributes = [], e.issuer.hash = null, e.subject = {}, e.subject.getField = function(t) {
                    return h(e.subject, t)
                }, e.subject.addField = function(t) {
                    y([t]), e.subject.attributes.push(t)
                }, e.subject.attributes = [], e.subject.hash = null, e.extensions = [], e.publicKey = null, e.md = null, e.setSubject = function(t, r) {
                    y(t), e.subject.attributes = t, delete e.subject.uniqueId, r && (e.subject.uniqueId = r), e.subject.hash = null
                }, e.setIssuer = function(t, r) {
                    y(t), e.issuer.attributes = t, delete e.issuer.uniqueId, r && (e.issuer.uniqueId = r), e.issuer.hash = null
                }, e.setExtensions = function(t) {
                    for (var r = 0; r < t.length; ++r) m(t[r], {
                        cert: e
                    });
                    e.extensions = t
                }, e.getExtension = function(t) {
                    "string" == typeof t && (t = {
                        name: t
                    });
                    for (var r, a = null, i = 0; null === a && i < e.extensions.length; ++i) r = e.extensions[i], (t.id && r.id === t.id || t.name && r.name === t.name) && (a = r);
                    return a
                }, e.sign = function(t, r) {
                    e.md = r || a.md.sha1.create();
                    var o = s[e.md.algorithm + "WithRSAEncryption"];
                    if (!o) {
                        var u = new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");
                        throw u.algorithm = e.md.algorithm, u
                    }
                    e.signatureOid = e.siginfo.algorithmOid = o, e.tbsCertificate = n.getTBSCertificate(e);
                    var c = i.toDer(e.tbsCertificate);
                    e.md.update(c.getBytes()), e.signature = t.sign(e.md)
                }, e.verify = function(t) {
                    var r = !1;
                    if (!e.issued(t)) {
                        var o = t.issuer,
                            u = e.subject;
                        throw (g = new Error("The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.")).expectedIssuer = o.attributes, g.actualIssuer = u.attributes, g
                    }
                    var c = t.md;
                    if (null === c) {
                        if (t.signatureOid in s) switch (s[t.signatureOid]) {
                            case "sha1WithRSAEncryption":
                                c = a.md.sha1.create();
                                break;
                            case "md5WithRSAEncryption":
                                c = a.md.md5.create();
                                break;
                            case "sha256WithRSAEncryption":
                                c = a.md.sha256.create();
                                break;
                            case "sha384WithRSAEncryption":
                                c = a.md.sha384.create();
                                break;
                            case "sha512WithRSAEncryption":
                                c = a.md.sha512.create();
                                break;
                            case "RSASSA-PSS":
                                c = a.md.sha256.create()
                        }
                        if (null === c) throw (g = new Error("Could not compute certificate digest. Unknown signature OID.")).signatureOid = t.signatureOid, g;
                        var f = t.tbsCertificate || n.getTBSCertificate(t),
                            d = i.toDer(f);
                        c.update(d.getBytes())
                    }
                    if (null !== c) {
                        var l;
                        switch (t.signatureOid) {
                            case s.sha1WithRSAEncryption:
                                l = void 0;
                                break;
                            case s["RSASSA-PSS"]:
                                var h, p, g;
                                if (void 0 === (h = s[t.signatureParameters.mgf.hash.algorithmOid]) || void 0 === a.md[h]) throw (g = new Error("Unsupported MGF hash function.")).oid = t.signatureParameters.mgf.hash.algorithmOid, g.name = h, g;
                                if (void 0 === (p = s[t.signatureParameters.mgf.algorithmOid]) || void 0 === a.mgf[p]) throw (g = new Error("Unsupported MGF function.")).oid = t.signatureParameters.mgf.algorithmOid, g.name = p, g;
                                if (p = a.mgf[p].create(a.md[h].create()), void 0 === (h = s[t.signatureParameters.hash.algorithmOid]) || void 0 === a.md[h]) throw {
                                    message: "Unsupported RSASSA-PSS hash function.",
                                    oid: t.signatureParameters.hash.algorithmOid,
                                    name: h
                                };
                                l = a.pss.create(a.md[h].create(), p, t.signatureParameters.saltLength)
                        }
                        r = e.publicKey.verify(c.digest().getBytes(), t.signature, l)
                    }
                    return r
                }, e.isIssuer = function(t) {
                    var r = !1,
                        a = e.issuer,
                        i = t.subject;
                    if (a.hash && i.hash) r = a.hash === i.hash;
                    else if (a.attributes.length === i.attributes.length) {
                        var n, s;
                        r = !0;
                        for (var o = 0; r && o < a.attributes.length; ++o) n = a.attributes[o], s = i.attributes[o], n.type === s.type && n.value === s.value || (r = !1)
                    }
                    return r
                }, e.issued = function(t) {
                    return t.isIssuer(e)
                }, e.generateSubjectKeyIdentifier = function() {
                    return n.getPublicKeyFingerprint(e.publicKey, {
                        type: "RSAPublicKey"
                    })
                }, e.verifySubjectKeyIdentifier = function() {
                    for (var t = s.subjectKeyIdentifier, r = 0; r < e.extensions.length; ++r) {
                        var i = e.extensions[r];
                        if (i.id === t) {
                            var n = e.generateSubjectKeyIdentifier().getBytes();
                            return a.util.hexToBytes(i.subjectKeyIdentifier) === n
                        }
                    }
                    return !1
                }, e
            }, n.certificateFromAsn1 = function(e, t) {
                var r = {},
                    o = [];
                if (!i.validate(e, c, r, o)) throw (l = new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.")).errors = o, l;
                if (i.derToOid(r.publicKeyOid) !== n.oids.rsaEncryption) throw new Error("Cannot read public key. OID is not RSA.");
                var u = n.createCertificate();
                u.version = r.certVersion ? r.certVersion.charCodeAt(0) : 0;
                var f = a.util.createBuffer(r.certSerialNumber);
                u.serialNumber = f.toHex(), u.signatureOid = a.asn1.derToOid(r.certSignatureOid), u.signatureParameters = p(u.signatureOid, r.certSignatureParams, !0), u.siginfo.algorithmOid = a.asn1.derToOid(r.certinfoSignatureOid), u.siginfo.parameters = p(u.siginfo.algorithmOid, r.certinfoSignatureParams, !1), u.signature = r.certSignature;
                var d = [];
                if (void 0 !== r.certValidity1UTCTime && d.push(i.utcTimeToDate(r.certValidity1UTCTime)), void 0 !== r.certValidity2GeneralizedTime && d.push(i.generalizedTimeToDate(r.certValidity2GeneralizedTime)), void 0 !== r.certValidity3UTCTime && d.push(i.utcTimeToDate(r.certValidity3UTCTime)), void 0 !== r.certValidity4GeneralizedTime && d.push(i.generalizedTimeToDate(r.certValidity4GeneralizedTime)), d.length > 2) throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");
                if (d.length < 2) throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");
                if (u.validity.notBefore = d[0], u.validity.notAfter = d[1], u.tbsCertificate = r.tbsCertificate, t) {
                    var l;
                    if (u.md = null, u.signatureOid in s) switch (s[u.signatureOid]) {
                        case "sha1WithRSAEncryption":
                            u.md = a.md.sha1.create();
                            break;
                        case "md5WithRSAEncryption":
                            u.md = a.md.md5.create();
                            break;
                        case "sha256WithRSAEncryption":
                            u.md = a.md.sha256.create();
                            break;
                        case "sha384WithRSAEncryption":
                            u.md = a.md.sha384.create();
                            break;
                        case "sha512WithRSAEncryption":
                            u.md = a.md.sha512.create();
                            break;
                        case "RSASSA-PSS":
                            u.md = a.md.sha256.create()
                    }
                    if (null === u.md) throw (l = new Error("Could not compute certificate digest. Unknown signature OID.")).signatureOid = u.signatureOid, l;
                    var g = i.toDer(u.tbsCertificate);
                    u.md.update(g.getBytes())
                }
                var m = a.md.sha1.create();
                u.issuer.getField = function(e) {
                    return h(u.issuer, e)
                }, u.issuer.addField = function(e) {
                    y([e]), u.issuer.attributes.push(e)
                }, u.issuer.attributes = n.RDNAttributesAsArray(r.certIssuer, m), r.certIssuerUniqueId && (u.issuer.uniqueId = r.certIssuerUniqueId), u.issuer.hash = m.digest().toHex();
                var C = a.md.sha1.create();
                return u.subject.getField = function(e) {
                    return h(u.subject, e)
                }, u.subject.addField = function(e) {
                    y([e]), u.subject.attributes.push(e)
                }, u.subject.attributes = n.RDNAttributesAsArray(r.certSubject, C), r.certSubjectUniqueId && (u.subject.uniqueId = r.certSubjectUniqueId), u.subject.hash = C.digest().toHex(), r.certExtensions ? u.extensions = n.certificateExtensionsFromAsn1(r.certExtensions) : u.extensions = [], u.publicKey = n.publicKeyFromAsn1(r.subjectPublicKeyInfo), u
            }, n.certificateExtensionsFromAsn1 = function(e) {
                for (var t = [], r = 0; r < e.value.length; ++r)
                    for (var a = e.value[r], i = 0; i < a.value.length; ++i) t.push(n.certificateExtensionFromAsn1(a.value[i]));
                return t
            }, n.certificateExtensionFromAsn1 = function(e) {
                var t = {};
                if (t.id = i.derToOid(e.value[0].value), t.critical = !1, e.value[1].type === i.Type.BOOLEAN ? (t.critical = 0 !== e.value[1].value.charCodeAt(0), t.value = e.value[2].value) : t.value = e.value[1].value, t.id in s)
                    if (t.name = s[t.id], "keyUsage" === t.name) {
                        var r = 0,
                            n = 0;
                        (u = i.fromDer(t.value)).value.length > 1 && (r = u.value.charCodeAt(1), n = u.value.length > 2 ? u.value.charCodeAt(2) : 0), t.digitalSignature = 128 == (128 & r), t.nonRepudiation = 64 == (64 & r), t.keyEncipherment = 32 == (32 & r), t.dataEncipherment = 16 == (16 & r), t.keyAgreement = 8 == (8 & r), t.keyCertSign = 4 == (4 & r), t.cRLSign = 2 == (2 & r), t.encipherOnly = 1 == (1 & r), t.decipherOnly = 128 == (128 & n)
                    } else if ("basicConstraints" === t.name) {
                    (u = i.fromDer(t.value)).value.length > 0 && u.value[0].type === i.Type.BOOLEAN ? t.cA = 0 !== u.value[0].value.charCodeAt(0) : t.cA = !1;
                    var o = null;
                    u.value.length > 0 && u.value[0].type === i.Type.INTEGER ? o = u.value[0].value : u.value.length > 1 && (o = u.value[1].value), null !== o && (t.pathLenConstraint = i.derToInteger(o))
                } else if ("extKeyUsage" === t.name)
                    for (var u = i.fromDer(t.value), c = 0; c < u.value.length; ++c) {
                        var f = i.derToOid(u.value[c].value);
                        f in s ? t[s[f]] = !0 : t[f] = !0
                    } else if ("nsCertType" === t.name) {
                        r = 0;
                        (u = i.fromDer(t.value)).value.length > 1 && (r = u.value.charCodeAt(1)), t.client = 128 == (128 & r), t.server = 64 == (64 & r), t.email = 32 == (32 & r), t.objsign = 16 == (16 & r), t.reserved = 8 == (8 & r), t.sslCA = 4 == (4 & r), t.emailCA = 2 == (2 & r), t.objCA = 1 == (1 & r)
                    } else if ("subjectAltName" === t.name || "issuerAltName" === t.name) {
                    var d;
                    t.altNames = [];
                    u = i.fromDer(t.value);
                    for (var l = 0; l < u.value.length; ++l) {
                        var h = {
                            type: (d = u.value[l]).type,
                            value: d.value
                        };
                        switch (t.altNames.push(h), d.type) {
                            case 1:
                            case 2:
                            case 6:
                                break;
                            case 7:
                                h.ip = a.util.bytesToIP(d.value);
                                break;
                            case 8:
                                h.oid = i.derToOid(d.value)
                        }
                    }
                } else if ("subjectKeyIdentifier" === t.name) {
                    u = i.fromDer(t.value);
                    t.subjectKeyIdentifier = a.util.bytesToHex(u.value)
                }
                return t
            }, n.certificationRequestFromAsn1 = function(e, t) {
                var r = {},
                    o = [];
                if (!i.validate(e, l, r, o)) throw (c = new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.")).errors = o, c;
                if (i.derToOid(r.publicKeyOid) !== n.oids.rsaEncryption) throw new Error("Cannot read public key. OID is not RSA.");
                var u = n.createCertificationRequest();
                if (u.version = r.csrVersion ? r.csrVersion.charCodeAt(0) : 0, u.signatureOid = a.asn1.derToOid(r.csrSignatureOid), u.signatureParameters = p(u.signatureOid, r.csrSignatureParams, !0), u.siginfo.algorithmOid = a.asn1.derToOid(r.csrSignatureOid), u.siginfo.parameters = p(u.siginfo.algorithmOid, r.csrSignatureParams, !1), u.signature = r.csrSignature, u.certificationRequestInfo = r.certificationRequestInfo, t) {
                    var c;
                    if (u.md = null, u.signatureOid in s) switch (s[u.signatureOid]) {
                        case "sha1WithRSAEncryption":
                            u.md = a.md.sha1.create();
                            break;
                        case "md5WithRSAEncryption":
                            u.md = a.md.md5.create();
                            break;
                        case "sha256WithRSAEncryption":
                            u.md = a.md.sha256.create();
                            break;
                        case "sha384WithRSAEncryption":
                            u.md = a.md.sha384.create();
                            break;
                        case "sha512WithRSAEncryption":
                            u.md = a.md.sha512.create();
                            break;
                        case "RSASSA-PSS":
                            u.md = a.md.sha256.create()
                    }
                    if (null === u.md) throw (c = new Error("Could not compute certification request digest. Unknown signature OID.")).signatureOid = u.signatureOid, c;
                    var f = i.toDer(u.certificationRequestInfo);
                    u.md.update(f.getBytes())
                }
                var d = a.md.sha1.create();
                return u.subject.getField = function(e) {
                    return h(u.subject, e)
                }, u.subject.addField = function(e) {
                    y([e]), u.subject.attributes.push(e)
                }, u.subject.attributes = n.RDNAttributesAsArray(r.certificationRequestInfoSubject, d), u.subject.hash = d.digest().toHex(), u.publicKey = n.publicKeyFromAsn1(r.subjectPublicKeyInfo), u.getAttribute = function(e) {
                    return h(u, e)
                }, u.addAttribute = function(e) {
                    y([e]), u.attributes.push(e)
                }, u.attributes = n.CRIAttributesAsArray(r.certificationRequestInfoAttributes || []), u
            }, n.createCertificationRequest = function() {
                var e = {
                    version: 0,
                    signatureOid: null,
                    signature: null,
                    siginfo: {}
                };
                return e.siginfo.algorithmOid = null, e.subject = {}, e.subject.getField = function(t) {
                    return h(e.subject, t)
                }, e.subject.addField = function(t) {
                    y([t]), e.subject.attributes.push(t)
                }, e.subject.attributes = [], e.subject.hash = null, e.publicKey = null, e.attributes = [], e.getAttribute = function(t) {
                    return h(e, t)
                }, e.addAttribute = function(t) {
                    y([t]), e.attributes.push(t)
                }, e.md = null, e.setSubject = function(t) {
                    y(t), e.subject.attributes = t, e.subject.hash = null
                }, e.setAttributes = function(t) {
                    y(t), e.attributes = t
                }, e.sign = function(t, r) {
                    e.md = r || a.md.sha1.create();
                    var o = s[e.md.algorithm + "WithRSAEncryption"];
                    if (!o) {
                        var u = new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");
                        throw u.algorithm = e.md.algorithm, u
                    }
                    e.signatureOid = e.siginfo.algorithmOid = o, e.certificationRequestInfo = n.getCertificationRequestInfo(e);
                    var c = i.toDer(e.certificationRequestInfo);
                    e.md.update(c.getBytes()), e.signature = t.sign(e.md)
                }, e.verify = function() {
                    var t = !1,
                        r = e.md;
                    if (null === r) {
                        if (e.signatureOid in s) switch (s[e.signatureOid]) {
                            case "sha1WithRSAEncryption":
                                r = a.md.sha1.create();
                                break;
                            case "md5WithRSAEncryption":
                                r = a.md.md5.create();
                                break;
                            case "sha256WithRSAEncryption":
                                r = a.md.sha256.create();
                                break;
                            case "sha384WithRSAEncryption":
                                r = a.md.sha384.create();
                                break;
                            case "sha512WithRSAEncryption":
                                r = a.md.sha512.create();
                                break;
                            case "RSASSA-PSS":
                                r = a.md.sha256.create()
                        }
                        if (null === r) throw (l = new Error("Could not compute certification request digest. Unknown signature OID.")).signatureOid = e.signatureOid, l;
                        var o = e.certificationRequestInfo || n.getCertificationRequestInfo(e),
                            u = i.toDer(o);
                        r.update(u.getBytes())
                    }
                    if (null !== r) {
                        var c;
                        switch (e.signatureOid) {
                            case s.sha1WithRSAEncryption:
                                break;
                            case s["RSASSA-PSS"]:
                                var f, d, l;
                                if (void 0 === (f = s[e.signatureParameters.mgf.hash.algorithmOid]) || void 0 === a.md[f]) throw (l = new Error("Unsupported MGF hash function.")).oid = e.signatureParameters.mgf.hash.algorithmOid, l.name = f, l;
                                if (void 0 === (d = s[e.signatureParameters.mgf.algorithmOid]) || void 0 === a.mgf[d]) throw (l = new Error("Unsupported MGF function.")).oid = e.signatureParameters.mgf.algorithmOid, l.name = d, l;
                                if (d = a.mgf[d].create(a.md[f].create()), void 0 === (f = s[e.signatureParameters.hash.algorithmOid]) || void 0 === a.md[f]) throw (l = new Error("Unsupported RSASSA-PSS hash function.")).oid = e.signatureParameters.hash.algorithmOid, l.name = f, l;
                                c = a.pss.create(a.md[f].create(), d, e.signatureParameters.saltLength)
                        }
                        t = e.publicKey.verify(r.digest().getBytes(), e.signature, c)
                    }
                    return t
                }, e
            };
            var E = new Date("1950-01-01T00:00:00Z"),
                S = new Date("2050-01-01T00:00:00Z");

            function I(e) {
                return e >= E && e < S ? i.create(i.Class.UNIVERSAL, i.Type.UTCTIME, !1, i.dateToUtcTime(e)) : i.create(i.Class.UNIVERSAL, i.Type.GENERALIZEDTIME, !1, i.dateToGeneralizedTime(e))
            }
            n.getTBSCertificate = function(e) {
                var t = I(e.validity.notBefore),
                    r = I(e.validity.notAfter),
                    s = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.CONTEXT_SPECIFIC, 0, !0, [i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, i.integerToDer(e.version).getBytes())]), i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, a.util.hexToBytes(e.serialNumber)), i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(e.siginfo.algorithmOid).getBytes()), C(e.siginfo.algorithmOid, e.siginfo.parameters)]), g(e.issuer), i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [t, r]), g(e.subject), n.publicKeyToAsn1(e.publicKey)]);
                return e.issuer.uniqueId && s.value.push(i.create(i.Class.CONTEXT_SPECIFIC, 1, !0, [i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, String.fromCharCode(0) + e.issuer.uniqueId)])), e.subject.uniqueId && s.value.push(i.create(i.Class.CONTEXT_SPECIFIC, 2, !0, [i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, String.fromCharCode(0) + e.subject.uniqueId)])), e.extensions.length > 0 && s.value.push(n.certificateExtensionsToAsn1(e.extensions)), s
            }, n.getCertificationRequestInfo = function(e) {
                return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.INTEGER, !1, i.integerToDer(e.version).getBytes()), g(e.subject), n.publicKeyToAsn1(e.publicKey), v(e)])
            }, n.distinguishedNameToAsn1 = function(e) {
                return g(e)
            }, n.certificateToAsn1 = function(e) {
                var t = e.tbsCertificate || n.getTBSCertificate(e);
                return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [t, i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(e.signatureOid).getBytes()), C(e.signatureOid, e.signatureParameters)]), i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, String.fromCharCode(0) + e.signature)])
            }, n.certificateExtensionsToAsn1 = function(e) {
                var t = i.create(i.Class.CONTEXT_SPECIFIC, 3, !0, []),
                    r = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
                t.value.push(r);
                for (var a = 0; a < e.length; ++a) r.value.push(n.certificateExtensionToAsn1(e[a]));
                return t
            }, n.certificateExtensionToAsn1 = function(e) {
                var t = i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, []);
                t.value.push(i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(e.id).getBytes())), e.critical && t.value.push(i.create(i.Class.UNIVERSAL, i.Type.BOOLEAN, !1, String.fromCharCode(255)));
                var r = e.value;
                return "string" != typeof e.value && (r = i.toDer(r).getBytes()), t.value.push(i.create(i.Class.UNIVERSAL, i.Type.OCTETSTRING, !1, r)), t
            }, n.certificationRequestToAsn1 = function(e) {
                var t = e.certificationRequestInfo || n.getCertificationRequestInfo(e);
                return i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [t, i.create(i.Class.UNIVERSAL, i.Type.SEQUENCE, !0, [i.create(i.Class.UNIVERSAL, i.Type.OID, !1, i.oidToDer(e.signatureOid).getBytes()), C(e.signatureOid, e.signatureParameters)]), i.create(i.Class.UNIVERSAL, i.Type.BITSTRING, !1, String.fromCharCode(0) + e.signature)])
            }, n.createCaStore = function(e) {
                var t = {
                    certs: {}
                };

                function r(e) {
                    return s(e), t.certs[e.hash] || null
                }

                function s(e) {
                    if (!e.hash) {
                        var t = a.md.sha1.create();
                        e.attributes = n.RDNAttributesAsArray(g(e), t), e.hash = t.digest().toHex()
                    }
                }
                if (t.getIssuer = function(e) {
                        return r(e.issuer)
                    }, t.addCertificate = function(e) {
                        if ("string" == typeof e && (e = a.pki.certificateFromPem(e)), s(e.subject), !t.hasCertificate(e))
                            if (e.subject.hash in t.certs) {
                                var r = t.certs[e.subject.hash];
                                a.util.isArray(r) || (r = [r]), r.push(e), t.certs[e.subject.hash] = r
                            } else t.certs[e.subject.hash] = e
                    }, t.hasCertificate = function(e) {
                        "string" == typeof e && (e = a.pki.certificateFromPem(e));
                        var t = r(e.subject);
                        if (!t) return !1;
                        a.util.isArray(t) || (t = [t]);
                        for (var s = i.toDer(n.certificateToAsn1(e)).getBytes(), o = 0; o < t.length; ++o) {
                            if (s === i.toDer(n.certificateToAsn1(t[o])).getBytes()) return !0
                        }
                        return !1
                    }, t.listAllCertificates = function() {
                        var e = [];
                        for (var r in t.certs)
                            if (t.certs.hasOwnProperty(r)) {
                                var i = t.certs[r];
                                if (a.util.isArray(i))
                                    for (var n = 0; n < i.length; ++n) e.push(i[n]);
                                else e.push(i)
                            } return e
                    }, t.removeCertificate = function(e) {
                        var o;
                        if ("string" == typeof e && (e = a.pki.certificateFromPem(e)), s(e.subject), !t.hasCertificate(e)) return null;
                        var u = r(e.subject);
                        if (!a.util.isArray(u)) return o = t.certs[e.subject.hash], delete t.certs[e.subject.hash], o;
                        for (var c = i.toDer(n.certificateToAsn1(e)).getBytes(), f = 0; f < u.length; ++f) {
                            c === i.toDer(n.certificateToAsn1(u[f])).getBytes() && (o = u[f], u.splice(f, 1))
                        }
                        return 0 === u.length && delete t.certs[e.subject.hash], o
                    }, e)
                    for (var o = 0; o < e.length; ++o) {
                        var u = e[o];
                        t.addCertificate(u)
                    }
                return t
            }, n.certificateError = {
                bad_certificate: "forge.pki.BadCertificate",
                unsupported_certificate: "forge.pki.UnsupportedCertificate",
                certificate_revoked: "forge.pki.CertificateRevoked",
                certificate_expired: "forge.pki.CertificateExpired",
                certificate_unknown: "forge.pki.CertificateUnknown",
                unknown_ca: "forge.pki.UnknownCertificateAuthority"
            }, n.verifyCertificateChain = function(e, t, r) {
                "function" == typeof r && (r = {
                    verify: r
                }), r = r || {};
                var i = (t = t.slice(0)).slice(0),
                    s = r.validityCheckDate;
                void 0 === s && (s = new Date);
                var o = !0,
                    u = null,
                    c = 0;
                do {
                    var f = t.shift(),
                        d = null,
                        l = !1;
                    if (s && (s < f.validity.notBefore || s > f.validity.notAfter) && (u = {
                            message: "Certificate is not valid yet or has expired.",
                            error: n.certificateError.certificate_expired,
                            notBefore: f.validity.notBefore,
                            notAfter: f.validity.notAfter,
                            now: s
                        }), null === u) {
                        if (null === (d = t[0] || e.getIssuer(f)) && f.isIssuer(f) && (l = !0, d = f), d) {
                            var h = d;
                            a.util.isArray(h) || (h = [h]);
                            for (var p = !1; !p && h.length > 0;) {
                                d = h.shift();
                                try {
                                    p = d.verify(f)
                                } catch (e) {}
                            }
                            p || (u = {
                                message: "Certificate signature is invalid.",
                                error: n.certificateError.bad_certificate
                            })
                        }
                        null !== u || d && !l || e.hasCertificate(f) || (u = {
                            message: "Certificate is not trusted.",
                            error: n.certificateError.unknown_ca
                        })
                    }
                    if (null === u && d && !f.isIssuer(d) && (u = {
                            message: "Certificate issuer is invalid.",
                            error: n.certificateError.bad_certificate
                        }), null === u)
                        for (var g = {
                                keyUsage: !0,
                                basicConstraints: !0
                            }, y = 0; null === u && y < f.extensions.length; ++y) {
                            var m = f.extensions[y];
                            m.critical && !(m.name in g) && (u = {
                                message: "Certificate has an unsupported critical extension.",
                                error: n.certificateError.unsupported_certificate
                            })
                        }
                    if (null === u && (!o || 0 === t.length && (!d || l))) {
                        var C = f.getExtension("basicConstraints"),
                            v = f.getExtension("keyUsage");
                        if (null !== v && (v.keyCertSign && null !== C || (u = {
                                message: "Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",
                                error: n.certificateError.bad_certificate
                            })), null !== u || null === C || C.cA || (u = {
                                message: "Certificate basicConstraints indicates the certificate is not a CA.",
                                error: n.certificateError.bad_certificate
                            }), null === u && null !== v && "pathLenConstraint" in C) c - 1 > C.pathLenConstraint && (u = {
                            message: "Certificate basicConstraints pathLenConstraint violated.",
                            error: n.certificateError.bad_certificate
                        })
                    }
                    var E = null === u || u.error,
                        S = r.verify ? r.verify(E, c, i) : E;
                    if (!0 !== S) throw !0 === E && (u = {
                        message: "The application rejected the certificate.",
                        error: n.certificateError.bad_certificate
                    }), (S || 0 === S) && ("object" != typeof S || a.util.isArray(S) ? "string" == typeof S && (u.error = S) : (S.message && (u.message = S.message), S.error && (u.error = S.error))), u;
                    u = null, o = !1, ++c
                } while (t.length > 0);
                return !0
            }
        },
        9698: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TRANSACTION_TYPE = {
                GENESIS: 1,
                PAYMENT: 2,
                ISSUE: 3,
                TRANSFER: 4,
                REISSUE: 5,
                BURN: 6,
                EXCHANGE: 7,
                LEASE: 8,
                CANCEL_LEASE: 9,
                ALIAS: 10,
                MASS_TRANSFER: 11,
                DATA: 12,
                SET_SCRIPT: 13,
                SPONSORSHIP: 14,
                SET_ASSET_SCRIPT: 15,
                INVOKE_SCRIPT: 16
            }, t.DATA_FIELD_TYPE = {
                INTEGER: "integer",
                BOOLEAN: "boolean",
                STRING: "string",
                BINARY: "binary"
            }
        }
    }
]);