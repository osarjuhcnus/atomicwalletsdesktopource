(window.webpackJsonp = window.webpackJsonp || []).push([
    [149], {
        1024: function(t, e, n) {
            "use strict";
            var r = n(69).EventEmitter,
                o = n(18),
                i = n(288),
                s = n(496),
                a = n(197);

            function c(t, e, n) {
                var o = this;
                r.call(this), setTimeout((function() {
                    o._start(t, e, n)
                }), 0)
            }
            o(c, r), c.prototype._start = function(t, e, n) {
                var r = this,
                    o = new global.XDomainRequest;
                e = a.addQuery(e, "t=" + +new Date), o.onerror = function() {
                    r._error()
                }, o.ontimeout = function() {
                    r._error()
                }, o.onprogress = function() {
                    o.responseText, r.emit("chunk", 200, o.responseText)
                }, o.onload = function() {
                    r.emit("finish", 200, o.responseText), r._cleanup(!1)
                }, this.xdr = o, this.unloadRef = i.unloadAdd((function() {
                    r._cleanup(!0)
                }));
                try {
                    this.xdr.open(t, e), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(n)
                } catch (t) {
                    this._error()
                }
            }, c.prototype._error = function() {
                this.emit("finish", 0, ""), this._cleanup(!1)
            }, c.prototype._cleanup = function(t) {
                if (this.xdr) {
                    if (this.removeAllListeners(), i.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, t) try {
                        this.xdr.abort()
                    } catch (t) {}
                    this.unloadRef = this.xdr = null
                }
            }, c.prototype.close = function() {
                this._cleanup(!0)
            }, c.enabled = !(!global.XDomainRequest || !s.hasDomain()), t.exports = c
        },
        1025: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(1725),
                i = n(1026);
            t.exports = function(t) {
                function e(e, n) {
                    o.call(this, t.transportName, e, n)
                }
                return r(e, o), e.enabled = function(e, n) {
                    if (!global.document) return !1;
                    var r = i.extend({}, n);
                    return r.sameOrigin = !0, t.enabled(r) && o.enabled()
                }, e.transportName = "iframe-" + t.transportName, e.needBody = !0, e.roundTrips = o.roundTrips + t.roundTrips - 1, e.facadeTransport = t, e
            }
        },
        1026: function(t, e, n) {
            "use strict";
            t.exports = {
                isObject: function(t) {
                    var e = typeof t;
                    return "function" === e || "object" === e && !!t
                },
                extend: function(t) {
                    if (!this.isObject(t)) return t;
                    for (var e, n, r = 1, o = arguments.length; r < o; r++)
                        for (n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t
                }
            }
        },
        1027: function(t, e, n) {
            "use strict";

            function r(t) {
                this.type = t
            }
            r.prototype.initEvent = function(t, e, n) {
                return this.type = t, this.bubbles = e, this.cancelable = n, this.timeStamp = +new Date, this
            }, r.prototype.stopPropagation = function() {}, r.prototype.preventDefault = function() {}, r.CAPTURING_PHASE = 1, r.AT_TARGET = 2, r.BUBBLING_PHASE = 3, t.exports = r
        },
        1431: function(t, e, n) {
            t.exports = function(t) {
                "use strict";
                var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

                function n(t, e) {
                    var n = t[0],
                        r = t[1],
                        o = t[2],
                        i = t[3];
                    r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[1] - 389564586 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[2] + 606105819 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[3] - 1044525330 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[5] + 1200080426 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[6] - 1473231341 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[7] - 45705983 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[9] - 1958414417 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[10] - 42063 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[11] - 1990404162 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[13] - 40341101 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[14] - 1502002290 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[15] + 1236535329 | 0) << 22 | r >>> 10) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[6] - 1069501632 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[11] + 643717713 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[0] - 373897302 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[10] + 38016083 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[15] - 660478335 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[4] - 405537848 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[14] - 1019803690 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[3] - 187363961 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[8] + 1163531501 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[2] - 51403784 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[7] + 1735328473 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[12] - 1926607734 | 0) << 20 | r >>> 12) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[8] - 2022574463 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[11] + 1839030562 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[14] - 35309556 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[4] + 1272893353 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[7] - 155497632 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[10] - 1094730640 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[0] - 358537222 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[3] - 722521979 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[6] + 76029189 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[12] - 421815835 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[15] + 530742520 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[2] - 995338651 | 0) << 23 | r >>> 9) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[7] + 1126891415 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[14] - 1416354905 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[5] - 57434055 | 0) << 21 | r >>> 11) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[3] - 1894986606 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[10] - 1051523 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[1] - 2054922799 | 0) << 21 | r >>> 11) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[15] - 30611744 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[6] - 1560198380 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[13] + 1309151649 | 0) << 21 | r >>> 11) + o | 0, r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[11] - 1120210379 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[2] + 718787259 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[9] - 343485551 | 0) << 21 | r >>> 11) + o | 0, t[0] = n + t[0] | 0, t[1] = r + t[1] | 0, t[2] = o + t[2] | 0, t[3] = i + t[3] | 0
                }

                function r(t) {
                    var e, n = [];
                    for (e = 0; e < 64; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
                    return n
                }

                function o(t) {
                    var e, n = [];
                    for (e = 0; e < 64; e += 4) n[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
                    return n
                }

                function i(t) {
                    var e, o, i, s, a, c, u = t.length,
                        h = [1732584193, -271733879, -1732584194, 271733878];
                    for (e = 64; e <= u; e += 64) n(h, r(t.substring(e - 64, e)));
                    for (o = (t = t.substring(e - 64)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e = 0; e < o; e += 1) i[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
                    if (i[e >> 2] |= 128 << (e % 4 << 3), e > 55)
                        for (n(h, i), e = 0; e < 16; e += 1) i[e] = 0;
                    return s = (s = 8 * u).toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), c = parseInt(s[1], 16) || 0, i[14] = a, i[15] = c, n(h, i), h
                }

                function s(t) {
                    var n, r = "";
                    for (n = 0; n < 4; n += 1) r += e[t >> 8 * n + 4 & 15] + e[t >> 8 * n & 15];
                    return r
                }

                function a(t) {
                    var e;
                    for (e = 0; e < t.length; e += 1) t[e] = s(t[e]);
                    return t.join("")
                }

                function c(t) {
                    return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t
                }

                function u(t) {
                    var e, n = [],
                        r = t.length;
                    for (e = 0; e < r - 1; e += 2) n.push(parseInt(t.substr(e, 2), 16));
                    return String.fromCharCode.apply(String, n)
                }

                function h() {
                    this.reset()
                }
                return a(i("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
                    function e(t, e) {
                        return (t = 0 | t || 0) < 0 ? Math.max(t + e, 0) : Math.min(t, e)
                    }
                    ArrayBuffer.prototype.slice = function(n, r) {
                        var o, i, s, a, c = this.byteLength,
                            u = e(n, c),
                            h = c;
                        return r !== t && (h = e(r, c)), u > h ? new ArrayBuffer(0) : (o = h - u, i = new ArrayBuffer(o), s = new Uint8Array(i), a = new Uint8Array(this, u, o), s.set(a), i)
                    }
                }(), h.prototype.append = function(t) {
                    return this.appendBinary(c(t)), this
                }, h.prototype.appendBinary = function(t) {
                    this._buff += t, this._length += t.length;
                    var e, o = this._buff.length;
                    for (e = 64; e <= o; e += 64) n(this._hash, r(this._buff.substring(e - 64, e)));
                    return this._buff = this._buff.substring(e - 64), this
                }, h.prototype.end = function(t) {
                    var e, n, r = this._buff,
                        o = r.length,
                        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (e = 0; e < o; e += 1) i[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
                    return this._finish(i, o), n = a(this._hash), t && (n = u(n)), this.reset(), n
                }, h.prototype.reset = function() {
                    return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
                }, h.prototype.getState = function() {
                    return {
                        buff: this._buff,
                        length: this._length,
                        hash: this._hash.slice()
                    }
                }, h.prototype.setState = function(t) {
                    return this._buff = t.buff, this._length = t.length, this._hash = t.hash, this
                }, h.prototype.destroy = function() {
                    delete this._hash, delete this._buff, delete this._length
                }, h.prototype._finish = function(t, e) {
                    var r, o, i, s = e;
                    if (t[s >> 2] |= 128 << (s % 4 << 3), s > 55)
                        for (n(this._hash, t), s = 0; s < 16; s += 1) t[s] = 0;
                    r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), i = parseInt(r[1], 16) || 0, t[14] = o, t[15] = i, n(this._hash, t)
                }, h.hash = function(t, e) {
                    return h.hashBinary(c(t), e)
                }, h.hashBinary = function(t, e) {
                    var n = a(i(t));
                    return e ? u(n) : n
                }, h.ArrayBuffer = function() {
                    this.reset()
                }, h.ArrayBuffer.prototype.append = function(t) {
                    var e, r, i, s, a, c = (r = this._buff.buffer, i = t, s = !0, (a = new Uint8Array(r.byteLength + i.byteLength)).set(new Uint8Array(r)), a.set(new Uint8Array(i), r.byteLength), s ? a : a.buffer),
                        u = c.length;
                    for (this._length += t.byteLength, e = 64; e <= u; e += 64) n(this._hash, o(c.subarray(e - 64, e)));
                    return this._buff = e - 64 < u ? new Uint8Array(c.buffer.slice(e - 64)) : new Uint8Array(0), this
                }, h.ArrayBuffer.prototype.end = function(t) {
                    var e, n, r = this._buff,
                        o = r.length,
                        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (e = 0; e < o; e += 1) i[e >> 2] |= r[e] << (e % 4 << 3);
                    return this._finish(i, o), n = a(this._hash), t && (n = u(n)), this.reset(), n
                }, h.ArrayBuffer.prototype.reset = function() {
                    return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
                }, h.ArrayBuffer.prototype.getState = function() {
                    var t, e = h.prototype.getState.call(this);
                    return e.buff = (t = e.buff, String.fromCharCode.apply(null, new Uint8Array(t))), e
                }, h.ArrayBuffer.prototype.setState = function(t) {
                    return t.buff = function(t, e) {
                        var n, r = t.length,
                            o = new ArrayBuffer(r),
                            i = new Uint8Array(o);
                        for (n = 0; n < r; n += 1) i[n] = t.charCodeAt(n);
                        return e ? i : o
                    }(t.buff, !0), h.prototype.setState.call(this, t)
                }, h.ArrayBuffer.prototype.destroy = h.prototype.destroy, h.ArrayBuffer.prototype._finish = h.prototype._finish, h.ArrayBuffer.hash = function(t, e) {
                    var r = a(function(t) {
                        var e, r, i, s, a, c, u = t.length,
                            h = [1732584193, -271733879, -1732584194, 271733878];
                        for (e = 64; e <= u; e += 64) n(h, o(t.subarray(e - 64, e)));
                        for (t = e - 64 < u ? t.subarray(e - 64) : new Uint8Array(0), r = t.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e = 0; e < r; e += 1) i[e >> 2] |= t[e] << (e % 4 << 3);
                        if (i[e >> 2] |= 128 << (e % 4 << 3), e > 55)
                            for (n(h, i), e = 0; e < 16; e += 1) i[e] = 0;
                        return s = (s = 8 * u).toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(s[2], 16), c = parseInt(s[1], 16) || 0, i[14] = a, i[15] = c, n(h, i), h
                    }(new Uint8Array(t)));
                    return e ? u(r) : r
                }, h
            }()
        },
        1462: function(t, e, n) {
            var r = n(2529),
                o = n(957),
                i = n(1466),
                s = n(568)("socket.io-client");
            t.exports = e = c;
            var a = e.managers = {};

            function c(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, o = r(t),
                    c = o.source,
                    u = o.id,
                    h = o.path,
                    l = a[u] && h in a[u].nsps;
                return e.forceNew || e["force new connection"] || !1 === e.multiplex || l ? (s("ignoring socket cache for %s", c), n = i(c, e)) : (a[u] || (s("new io instance for %s", c), a[u] = i(c, e)), n = a[u]), o.query && !e.query && (e.query = o.query), n.socket(o.path, e)
            }
            e.protocol = o.protocol, e.connect = c, e.Manager = n(1466), e.Socket = n(1472)
        },
        1464: function(t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == n.call(t)
            }
        },
        1465: function(t, e) {
            t.exports = function(t) {
                return n && Buffer.isBuffer(t) || r && (t instanceof ArrayBuffer || function(t) {
                    return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
                }(t))
            };
            var n = "function" == typeof Buffer && "function" == typeof Buffer.isBuffer,
                r = "function" == typeof ArrayBuffer
        },
        1466: function(t, e, n) {
            var r = n(2535),
                o = n(1472),
                i = n(1473),
                s = n(957),
                a = n(1474),
                c = n(1475),
                u = n(568)("socket.io-client:manager"),
                h = n(1471),
                l = n(2551),
                f = Object.prototype.hasOwnProperty;

            function p(t, e) {
                if (!(this instanceof p)) return new p(t, e);
                t && "object" == typeof t && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new l({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
                var n = e.parser || s;
                this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = !1 !== e.autoConnect, this.autoConnect && this.open()
            }
            t.exports = p, p.prototype.emitAll = function() {
                for (var t in this.emit.apply(this, arguments), this.nsps) f.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
            }, p.prototype.updateSocketIds = function() {
                for (var t in this.nsps) f.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
            }, p.prototype.generateId = function(t) {
                return ("/" === t ? "" : t + "#") + this.engine.id
            }, i(p.prototype), p.prototype.reconnection = function(t) {
                return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
            }, p.prototype.reconnectionAttempts = function(t) {
                return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
            }, p.prototype.reconnectionDelay = function(t) {
                return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
            }, p.prototype.randomizationFactor = function(t) {
                return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
            }, p.prototype.reconnectionDelayMax = function(t) {
                return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
            }, p.prototype.timeout = function(t) {
                return arguments.length ? (this._timeout = t, this) : this._timeout
            }, p.prototype.maybeReconnectOnOpen = function() {
                !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
            }, p.prototype.open = p.prototype.connect = function(t, e) {
                if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                u("opening %s", this.uri), this.engine = r(this.uri, this.opts);
                var n = this.engine,
                    o = this;
                this.readyState = "opening", this.skipReconnect = !1;
                var i = a(n, "open", (function() {
                        o.onopen(), t && t()
                    })),
                    s = a(n, "error", (function(e) {
                        if (u("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", e), t) {
                            var n = new Error("Connection error");
                            n.data = e, t(n)
                        } else o.maybeReconnectOnOpen()
                    }));
                if (!1 !== this._timeout) {
                    var c = this._timeout;
                    u("connect attempt will timeout after %d", c);
                    var h = setTimeout((function() {
                        u("connect attempt timed out after %d", c), i.destroy(), n.close(), n.emit("error", "timeout"), o.emitAll("connect_timeout", c)
                    }), c);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(h)
                        }
                    })
                }
                return this.subs.push(i), this.subs.push(s), this
            }, p.prototype.onopen = function() {
                u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                var t = this.engine;
                this.subs.push(a(t, "data", c(this, "ondata"))), this.subs.push(a(t, "ping", c(this, "onping"))), this.subs.push(a(t, "pong", c(this, "onpong"))), this.subs.push(a(t, "error", c(this, "onerror"))), this.subs.push(a(t, "close", c(this, "onclose"))), this.subs.push(a(this.decoder, "decoded", c(this, "ondecoded")))
            }, p.prototype.onping = function() {
                this.lastPing = new Date, this.emitAll("ping")
            }, p.prototype.onpong = function() {
                this.emitAll("pong", new Date - this.lastPing)
            }, p.prototype.ondata = function(t) {
                this.decoder.add(t)
            }, p.prototype.ondecoded = function(t) {
                this.emit("packet", t)
            }, p.prototype.onerror = function(t) {
                u("error", t), this.emitAll("error", t)
            }, p.prototype.socket = function(t, e) {
                var n = this.nsps[t];
                if (!n) {
                    n = new o(this, t, e), this.nsps[t] = n;
                    var r = this;
                    n.on("connecting", i), n.on("connect", (function() {
                        n.id = r.generateId(t)
                    })), this.autoConnect && i()
                }

                function i() {
                    ~h(r.connecting, n) || r.connecting.push(n)
                }
                return n
            }, p.prototype.destroy = function(t) {
                var e = h(this.connecting, t);
                ~e && this.connecting.splice(e, 1), this.connecting.length || this.close()
            }, p.prototype.packet = function(t) {
                u("writing packet %j", t);
                var e = this;
                t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, (function(n) {
                    for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
                    e.encoding = !1, e.processPacketQueue()
                })))
            }, p.prototype.processPacketQueue = function() {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var t = this.packetBuffer.shift();
                    this.packet(t)
                }
            }, p.prototype.cleanup = function() {
                u("cleanup");
                for (var t = this.subs.length, e = 0; e < t; e++) {
                    this.subs.shift().destroy()
                }
                this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
            }, p.prototype.close = p.prototype.disconnect = function() {
                u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
            }, p.prototype.onclose = function(t) {
                u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
            }, p.prototype.reconnect = function() {
                if (this.reconnecting || this.skipReconnect) return this;
                var t = this;
                if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
                else {
                    var e = this.backoff.duration();
                    u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
                    var n = setTimeout((function() {
                        t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open((function(e) {
                            e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect())
                        })))
                    }), e);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(n)
                        }
                    })
                }
            }, p.prototype.onreconnect = function() {
                var t = this.backoff.attempts;
                this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t)
            }
        },
        1472: function(t, e, n) {
            var r = n(957),
                o = n(1473),
                i = n(2550),
                s = n(1474),
                a = n(1475),
                c = n(568)("socket.io-client:socket"),
                u = n(569),
                h = n(1469);
            t.exports = p;
            var l = {
                    connect: 1,
                    connect_error: 1,
                    connect_timeout: 1,
                    connecting: 1,
                    disconnect: 1,
                    error: 1,
                    reconnect: 1,
                    reconnect_attempt: 1,
                    reconnect_failed: 1,
                    reconnect_error: 1,
                    reconnecting: 1,
                    ping: 1,
                    pong: 1
                },
                f = o.prototype.emit;

            function p(t, e, n) {
                this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
            }
            o(p.prototype), p.prototype.subEvents = function() {
                if (!this.subs) {
                    var t = this.io;
                    this.subs = [s(t, "open", a(this, "onopen")), s(t, "packet", a(this, "onpacket")), s(t, "close", a(this, "onclose"))]
                }
            }, p.prototype.open = p.prototype.connect = function() {
                return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this
            }, p.prototype.send = function() {
                var t = i(arguments);
                return t.unshift("message"), this.emit.apply(this, t), this
            }, p.prototype.emit = function(t) {
                if (l.hasOwnProperty(t)) return f.apply(this, arguments), this;
                var e = i(arguments),
                    n = {
                        type: (void 0 !== this.flags.binary ? this.flags.binary : h(e)) ? r.BINARY_EVENT : r.EVENT,
                        data: e,
                        options: {}
                    };
                return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this
            }, p.prototype.packet = function(t) {
                t.nsp = this.nsp, this.io.packet(t)
            }, p.prototype.onopen = function() {
                if (c("transport is open - connecting"), "/" !== this.nsp)
                    if (this.query) {
                        var t = "object" == typeof this.query ? u.encode(this.query) : this.query;
                        c("sending connect packet with query %s", t), this.packet({
                            type: r.CONNECT,
                            query: t
                        })
                    } else this.packet({
                        type: r.CONNECT
                    })
            }, p.prototype.onclose = function(t) {
                c("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t)
            }, p.prototype.onpacket = function(t) {
                var e = t.nsp === this.nsp,
                    n = t.type === r.ERROR && "/" === t.nsp;
                if (e || n) switch (t.type) {
                    case r.CONNECT:
                        this.onconnect();
                        break;
                    case r.EVENT:
                    case r.BINARY_EVENT:
                        this.onevent(t);
                        break;
                    case r.ACK:
                    case r.BINARY_ACK:
                        this.onack(t);
                        break;
                    case r.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case r.ERROR:
                        this.emit("error", t.data)
                }
            }, p.prototype.onevent = function(t) {
                var e = t.data || [];
                c("emitting event %j", e), null != t.id && (c("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? f.apply(this, e) : this.receiveBuffer.push(e)
            }, p.prototype.ack = function(t) {
                var e = this,
                    n = !1;
                return function() {
                    if (!n) {
                        n = !0;
                        var o = i(arguments);
                        c("sending ack %j", o), e.packet({
                            type: h(o) ? r.BINARY_ACK : r.ACK,
                            id: t,
                            data: o
                        })
                    }
                }
            }, p.prototype.onack = function(t) {
                var e = this.acks[t.id];
                "function" == typeof e ? (c("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : c("bad ack %s", t.id)
            }, p.prototype.onconnect = function() {
                this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
            }, p.prototype.emitBuffered = function() {
                var t;
                for (t = 0; t < this.receiveBuffer.length; t++) f.apply(this, this.receiveBuffer[t]);
                for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
                this.sendBuffer = []
            }, p.prototype.ondisconnect = function() {
                c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
            }, p.prototype.destroy = function() {
                if (this.subs) {
                    for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
                    this.subs = null
                }
                this.io.destroy(this)
            }, p.prototype.close = p.prototype.disconnect = function() {
                return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
                    type: r.DISCONNECT
                })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
            }, p.prototype.compress = function(t) {
                return this.flags.compress = t, this
            }, p.prototype.binary = function(t) {
                return this.flags.binary = t, this
            }
        },
        1473: function(t, e, n) {
            function r(t) {
                if (t) return function(t) {
                    for (var e in r.prototype) t[e] = r.prototype[e];
                    return t
                }(t)
            }
            t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
            }, r.prototype.once = function(t, e) {
                function n() {
                    this.off(t, n), e.apply(this, arguments)
                }
                return n.fn = e, this.on(t, n), this
            }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n, r = this._callbacks["$" + t];
                if (!r) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                for (var o = 0; o < r.length; o++)
                    if ((n = r[o]) === e || n.fn === e) {
                        r.splice(o, 1);
                        break
                    } return this
            }, r.prototype.emit = function(t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    n = this._callbacks["$" + t];
                if (n)
                    for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, e);
                return this
            }, r.prototype.listeners = function(t) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
            }, r.prototype.hasListeners = function(t) {
                return !!this.listeners(t).length
            }
        },
        1474: function(t, e) {
            t.exports = function(t, e, n) {
                return t.on(e, n), {
                    destroy: function() {
                        t.removeListener(e, n)
                    }
                }
            }
        },
        1585: function(t, e, n) {
            var r = n(1586);

            function o() {
                if (!(this instanceof o)) return new o;
                this.reg = new Array(8), this.chunk = [], this.size = 0, this.reset()
            }

            function i(t, e) {
                return (t << (e %= 32) | t >>> 32 - e) >>> 0
            }

            function s(t) {
                return 0 <= t && t < 16 ? 2043430169 : 16 <= t && t < 64 ? 2055708042 : void console.error("invalid j for constant Tj")
            }

            function a(t, e, n, r) {
                return 0 <= t && t < 16 ? (e ^ n ^ r) >>> 0 : 16 <= t && t < 64 ? (e & n | e & r | n & r) >>> 0 : (console.error("invalid j for bool function FF"), 0)
            }

            function c(t, e, n, r) {
                return 0 <= t && t < 16 ? (e ^ n ^ r) >>> 0 : 16 <= t && t < 64 ? (e & n | ~e & r) >>> 0 : (console.error("invalid j for bool function GG"), 0)
            }
            t.exports = o, o.prototype.reset = function() {
                this.reg[0] = 1937774191, this.reg[1] = 1226093241, this.reg[2] = 388252375, this.reg[3] = 3666478592, this.reg[4] = 2842636476, this.reg[5] = 372324522, this.reg[6] = 3817729613, this.reg[7] = 2969243214, this.chunk = [], this.size = 0
            }, o.prototype.write = function(t) {
                var e = "string" == typeof t ? r.strToBytes(t) : t;
                this.size += e.length;
                var n = 64 - this.chunk.length;
                if (e.length < n) this.chunk = this.chunk.concat(e);
                else
                    for (this.chunk = this.chunk.concat(e.slice(0, n)); this.chunk.length >= 64;) this._compress(this.chunk), n < e.length ? this.chunk = e.slice(n, Math.min(n + 64, e.length)) : this.chunk = [], n += 64
            }, o.prototype.sum = function(t, e) {
                t && (this.reset(), this.write(t)), this._fill();
                for (var n = 0; n < this.chunk.length; n += 64) this._compress(this.chunk.slice(n, n + 64));
                var o = null;
                if ("hex" == e) {
                    o = "";
                    for (n = 0; n < 8; n++) o += r.padStart(this.reg[n].toString(16), 8, "0")
                } else
                    for (o = new Array(32), n = 0; n < 8; n++) h = this.reg[n], o[4 * n + 3] = (255 & h) >>> 0, h >>>= 8, o[4 * n + 2] = (255 & h) >>> 0, h >>>= 8, o[4 * n + 1] = (255 & h) >>> 0, h >>>= 8, o[4 * n] = (255 & h) >>> 0;
                return this.reset(), o
            }, o.prototype._compress = function(t) {
                if (t < 64) console.error("compress error: not enough data");
                else {
                    for (var e = function(t) {
                            for (var e = new Array(132), n = 0; n < 16; n++) e[n] = t[4 * n] << 24, e[n] |= t[4 * n + 1] << 16, e[n] |= t[4 * n + 2] << 8, e[n] |= t[4 * n + 3], e[n] >>>= 0;
                            for (var r = 16; r < 68; r++) x = e[r - 16] ^ e[r - 9] ^ i(e[r - 3], 15), x = x ^ i(x, 15) ^ i(x, 23), e[r] = (x ^ i(e[r - 13], 7) ^ e[r - 6]) >>> 0;
                            for (r = 0; r < 64; r++) e[r + 68] = (e[r] ^ e[r + 4]) >>> 0;
                            return e
                        }(t), n = this.reg.slice(0), r = 0; r < 64; r++) {
                        var o = i(n[0], 12) + n[4] + i(s(r), r),
                            u = ((o = i(o = (4294967295 & o) >>> 0, 7)) ^ i(n[0], 12)) >>> 0,
                            h = a(r, n[0], n[1], n[2]);
                        h = (4294967295 & (h = h + n[3] + u + e[r + 68])) >>> 0;
                        var l = c(r, n[4], n[5], n[6]);
                        l = (4294967295 & (l = l + n[7] + o + e[r])) >>> 0, n[3] = n[2], n[2] = i(n[1], 9), n[1] = n[0], n[0] = h, n[7] = n[6], n[6] = i(n[5], 19), n[5] = n[4], n[4] = (l ^ i(l, 9) ^ i(l, 17)) >>> 0
                    }
                    for (var f = 0; f < 8; f++) this.reg[f] = (this.reg[f] ^ n[f]) >>> 0
                }
            }, o.prototype._fill = function() {
                var t = 8 * this.size,
                    e = this.chunk.push(128) % 64;
                for (64 - e < 8 && (e -= 64); e < 56; e++) this.chunk.push(0);
                for (var n = 0; n < 4; n++) {
                    var r = Math.floor(t / 4294967296);
                    this.chunk.push(r >>> 8 * (3 - n) & 255)
                }
                for (n = 0; n < 4; n++) this.chunk.push(t >>> 8 * (3 - n) & 255)
            }
        },
        1586: function(t, e, n) {
            var r = e,
                o = n(35),
                i = n(24);
            r.strToBytes = function(t) {
                for (var e, n, r = [], o = 0; o < t.length; o++) {
                    e = t.charCodeAt(o), n = [];
                    do {
                        n.push(255 & e), e >>= 8
                    } while (e);
                    r = r.concat(n.reverse())
                }
                return r
            }, r.hashToBN = function(t) {
                if ("string" == typeof t) return new o(t, 16);
                for (var e = "", n = 0; n < t.length; n++) {
                    var r = t[n].toString(16);
                    1 == r.length && (e += "0"), e += r
                }
                return new o(e, 16)
            }, r.random = function(t) {
                return i.randomBytes(t).toString("hex")
            }, r.padStart = function(t, e, n) {
                return t.length >= e ? t : n.repeat(e - t.length) + t
            }
        },
        1720: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(197),
                i = n(3122),
                s = n(3123);

            function a(t, e, n, r, a) {
                var c = o.addPath(t, e),
                    u = this;
                i.call(this, t, n), this.poll = new s(r, c, a), this.poll.on("message", (function(t) {
                    u.emit("message", t)
                })), this.poll.once("close", (function(t, e) {
                    u.poll = null, u.emit("close", t, e), u.close()
                }))
            }
            r(a, i), a.prototype.close = function() {
                i.prototype.close.call(this), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null)
            }, t.exports = a
        },
        1721: function(t, e, n) {
            "use strict";
            var r = n(69).EventEmitter,
                o = n(18),
                i = n(288),
                s = n(197),
                a = global.XMLHttpRequest;

            function c(t, e, n, o) {
                var i = this;
                r.call(this), setTimeout((function() {
                    i._start(t, e, n, o)
                }), 0)
            }
            o(c, r), c.prototype._start = function(t, e, n, r) {
                var o = this;
                try {
                    this.xhr = new a
                } catch (t) {}
                if (!this.xhr) return this.emit("finish", 0, "no xhr support"), void this._cleanup();
                e = s.addQuery(e, "t=" + +new Date), this.unloadRef = i.unloadAdd((function() {
                    o._cleanup(!0)
                }));
                try {
                    this.xhr.open(t, e, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function() {
                        o.emit("finish", 0, ""), o._cleanup(!1)
                    })
                } catch (t) {
                    return this.emit("finish", 0, ""), void this._cleanup(!1)
                }
                if (r && r.noCredentials || !c.supportsCORS || (this.xhr.withCredentials = "true"), r && r.headers)
                    for (var u in r.headers) this.xhr.setRequestHeader(u, r.headers[u]);
                this.xhr.onreadystatechange = function() {
                    if (o.xhr) {
                        var t, e, n = o.xhr;
                        switch (n.readyState, n.readyState) {
                            case 3:
                                try {
                                    e = n.status, t = n.responseText
                                } catch (t) {}
                                1223 === e && (e = 204), 200 === e && t && t.length > 0 && o.emit("chunk", e, t);
                                break;
                            case 4:
                                1223 === (e = n.status) && (e = 204), 12005 !== e && 12029 !== e || (e = 0), n.responseText, o.emit("finish", e, n.responseText), o._cleanup(!1)
                        }
                    }
                };
                try {
                    o.xhr.send(n)
                } catch (t) {
                    o.emit("finish", 0, ""), o._cleanup(!1)
                }
            }, c.prototype._cleanup = function(t) {
                if (this.xhr) {
                    if (this.removeAllListeners(), i.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function() {}, this.xhr.ontimeout && (this.xhr.ontimeout = null), t) try {
                        this.xhr.abort()
                    } catch (t) {}
                    this.unloadRef = this.xhr = null
                }
            }, c.prototype.close = function() {
                this._cleanup(!0)
            }, c.enabled = !!a;
            var u = ["Active"].concat("Object").join("X");
            !c.enabled && u in global && (a = function() {
                try {
                    return new global[u]("Microsoft.XMLHTTP")
                } catch (t) {
                    return null
                }
            }, c.enabled = !!new a);
            var h = !1;
            try {
                h = "withCredentials" in new a
            } catch (t) {}
            c.supportsCORS = h, t.exports = c
        },
        1722: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(402),
                i = n(607),
                s = n(1024);

            function a(t) {
                if (!s.enabled) throw new Error("Transport created when disabled");
                o.call(this, t, "/xhr_streaming", i, s)
            }
            r(a, o), a.enabled = function(t) {
                return !t.cookie_needed && !t.nullOrigin && (s.enabled && t.sameScheme)
            }, a.transportName = "xdr-streaming", a.roundTrips = 2, t.exports = a
        },
        1723: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(402),
                i = n(3124),
                s = n(608),
                a = n(1724);

            function c(t) {
                if (!c.enabled()) throw new Error("Transport created when disabled");
                o.call(this, t, "/eventsource", i, s)
            }
            r(c, o), c.enabled = function() {
                return !!a
            }, c.transportName = "eventsource", c.roundTrips = 2, t.exports = c
        },
        1724: function(t, e) {
            t.exports = global.EventSource
        },
        1725: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(261),
                i = n(69).EventEmitter,
                s = n(1726),
                a = n(197),
                c = n(497),
                u = n(288),
                h = n(401);

            function l(t, e, n) {
                if (!l.enabled()) throw new Error("Transport created when disabled");
                i.call(this);
                var r = this;
                this.origin = a.getOrigin(n), this.baseUrl = n, this.transUrl = e, this.transport = t, this.windowId = h.string(8);
                var o = a.addPath(n, "/iframe.html") + "#" + this.windowId;
                this.iframeObj = c.createIframe(o, (function(t) {
                    r.emit("close", 1006, "Unable to load an iframe (" + t + ")"), r.close()
                })), this.onmessageCallback = this._message.bind(this), u.attachEvent("message", this.onmessageCallback)
            }
            r(l, i), l.prototype.close = function() {
                if (this.removeAllListeners(), this.iframeObj) {
                    u.detachEvent("message", this.onmessageCallback);
                    try {
                        this.postMessage("c")
                    } catch (t) {}
                    this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null
                }
            }, l.prototype._message = function(t) {
                if (t.data, !a.isOriginEqual(t.origin, this.origin)) return t.origin, void this.origin;
                var e;
                try {
                    e = o.parse(t.data)
                } catch (e) {
                    return void t.data
                }
                if (e.windowId !== this.windowId) return e.windowId, void this.windowId;
                switch (e.type) {
                    case "s":
                        this.iframeObj.loaded(), this.postMessage("s", o.stringify([s, this.transport, this.transUrl, this.baseUrl]));
                        break;
                    case "t":
                        this.emit("message", e.data);
                        break;
                    case "c":
                        var n;
                        try {
                            n = o.parse(e.data)
                        } catch (t) {
                            return void e.data
                        }
                        this.emit("close", n[0], n[1]), this.close()
                }
            }, l.prototype.postMessage = function(t, e) {
                this.iframeObj.post(o.stringify({
                    windowId: this.windowId,
                    type: t,
                    data: e || ""
                }), this.origin)
            }, l.prototype.send = function(t) {
                this.postMessage("m", t)
            }, l.enabled = function() {
                return c.iframeEnabled
            }, l.transportName = "iframe", l.roundTrips = 2, t.exports = l
        },
        1726: function(t, e) {
            t.exports = "1.1.4"
        },
        1727: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(3125),
                i = n(495),
                s = n(402);

            function a(t) {
                if (!o.enabled) throw new Error("Transport created when disabled");
                s.call(this, t, "/htmlfile", o, i)
            }
            r(a, s), a.enabled = function(t) {
                return o.enabled && t.sameOrigin
            }, a.transportName = "htmlfile", a.roundTrips = 2, t.exports = a
        },
        1728: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(402),
                i = n(607),
                s = n(608),
                a = n(495);

            function c(t) {
                if (!a.enabled && !s.enabled) throw new Error("Transport created when disabled");
                o.call(this, t, "/xhr", i, s)
            }
            r(c, o), c.enabled = function(t) {
                return !t.nullOrigin && (!(!a.enabled || !t.sameOrigin) || s.enabled)
            }, c.transportName = "xhr-polling", c.roundTrips = 2, t.exports = c
        },
        1729: function(t, e, n) {
            "use strict";
            t.exports = global.location || {
                origin: "http://localhost:80",
                protocol: "http",
                host: "localhost",
                port: 80,
                href: "http://localhost/",
                hash: ""
            }
        },
        1730: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(69).EventEmitter,
                i = n(261),
                s = n(495),
                a = n(1731);

            function c(t) {
                var e = this;
                o.call(this), this.ir = new a(t, s), this.ir.once("finish", (function(t, n) {
                    e.ir = null, e.emit("message", i.stringify([t, n]))
                }))
            }
            r(c, o), c.transportName = "iframe-info-receiver", c.prototype.close = function() {
                this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners()
            }, t.exports = c
        },
        1731: function(t, e, n) {
            "use strict";
            var r = n(69).EventEmitter,
                o = n(18),
                i = n(261),
                s = n(1026);

            function a(t, e) {
                r.call(this);
                var n = this,
                    o = +new Date;
                this.xo = new e("GET", t), this.xo.once("finish", (function(t, e) {
                    var r, a;
                    if (200 === t) {
                        if (a = +new Date - o, e) try {
                            r = i.parse(e)
                        } catch (t) {}
                        s.isObject(r) || (r = {})
                    }
                    n.emit("finish", r, a), n.removeAllListeners()
                }))
            }
            o(a, r), a.prototype.close = function() {
                this.removeAllListeners(), this.xo.close()
            }, t.exports = a
        },
        197: function(t, e, n) {
            "use strict";
            var r = n(1719);
            t.exports = {
                getOrigin: function(t) {
                    if (!t) return null;
                    var e = new r(t);
                    if ("file:" === e.protocol) return null;
                    var n = e.port;
                    return n || (n = "https:" === e.protocol ? "443" : "80"), e.protocol + "//" + e.hostname + ":" + n
                },
                isOriginEqual: function(t, e) {
                    var n = this.getOrigin(t) === this.getOrigin(e);
                    return n
                },
                isSchemeEqual: function(t, e) {
                    return t.split(":")[0] === e.split(":")[0]
                },
                addPath: function(t, e) {
                    var n = t.split("?");
                    return n[0] + e + (n[1] ? "?" + n[1] : "")
                },
                addQuery: function(t, e) {
                    return t + (-1 === t.indexOf("?") ? "?" + e : "&" + e)
                }
            }
        },
        2529: function(t, e, n) {
            var r = n(1463),
                o = n(568)("socket.io-client:url");
            t.exports = function(t, e) {
                var n = t;
                e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host);
                "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), o("parse %s", t), n = r(t));
                n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443"));
                n.path = n.path || "/";
                var i = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
                return n.id = n.protocol + "://" + i + ":" + n.port, n.href = n.protocol + "://" + i + (e && e.port === n.port ? "" : ":" + n.port), n
            }
        },
        2530: function(t, e, n) {
            function r(t) {
                var n;

                function r() {
                    if (r.enabled) {
                        var t = r,
                            o = +new Date,
                            i = o - (n || o);
                        t.diff = i, t.prev = n, t.curr = o, n = o;
                        for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                        s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                        var c = 0;
                        s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                            if ("%%" === n) return n;
                            c++;
                            var o = e.formatters[r];
                            if ("function" == typeof o) {
                                var i = s[c];
                                n = o.call(t, i), s.splice(c, 1), c--
                            }
                            return n
                        })), e.formatArgs.call(t, s);
                        var u = r.log || e.log || console.log.bind(console);
                        u.apply(t, s)
                    }
                }
                return r.namespace = t, r.enabled = e.enabled(t), r.useColors = e.useColors(), r.color = function(t) {
                    var n, r = 0;
                    for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
                    return e.colors[Math.abs(r) % e.colors.length]
                }(t), r.destroy = o, "function" == typeof e.init && e.init(r), e.instances.push(r), r
            }

            function o() {
                var t = e.instances.indexOf(this);
                return -1 !== t && (e.instances.splice(t, 1), !0)
            }(e = t.exports = r.debug = r.default = r).coerce = function(t) {
                return t instanceof Error ? t.stack || t.message : t
            }, e.disable = function() {
                e.enable("")
            }, e.enable = function(t) {
                var n;
                e.save(t), e.names = [], e.skips = [];
                var r = ("string" == typeof t ? t : "").split(/[\s,]+/),
                    o = r.length;
                for (n = 0; n < o; n++) r[n] && ("-" === (t = r[n].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
                for (n = 0; n < e.instances.length; n++) {
                    var i = e.instances[n];
                    i.enabled = e.enabled(i.namespace)
                }
            }, e.enabled = function(t) {
                if ("*" === t[t.length - 1]) return !0;
                var n, r;
                for (n = 0, r = e.skips.length; n < r; n++)
                    if (e.skips[n].test(t)) return !1;
                for (n = 0, r = e.names.length; n < r; n++)
                    if (e.names[n].test(t)) return !0;
                return !1
            }, e.humanize = n(934), e.instances = [], e.names = [], e.skips = [], e.formatters = {}
        },
        2531: function(t, e, n) {
            function r() {
                var t;
                try {
                    t = e.storage.debug
                } catch (t) {}
                return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t
            }(e = t.exports = n(2532)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }, e.formatArgs = function(t) {
                var n = this.useColors;
                if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return;
                var r = "color: " + this.color;
                t.splice(1, 0, r, "color: inherit");
                var o = 0,
                    i = 0;
                t[0].replace(/%[a-zA-Z%]/g, (function(t) {
                    "%%" !== t && (o++, "%c" === t && (i = o))
                })), t.splice(i, 0, r)
            }, e.save = function(t) {
                try {
                    null == t ? e.storage.removeItem("debug") : e.storage.debug = t
                } catch (t) {}
            }, e.load = r, e.useColors = function() {
                if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (t) {}
            }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function(t) {
                try {
                    return JSON.stringify(t)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }, e.enable(r())
        },
        2532: function(t, e, n) {
            function r(t) {
                var n;

                function r() {
                    if (r.enabled) {
                        var t = r,
                            o = +new Date,
                            i = o - (n || o);
                        t.diff = i, t.prev = n, t.curr = o, n = o;
                        for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                        s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                        var c = 0;
                        s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                            if ("%%" === n) return n;
                            c++;
                            var o = e.formatters[r];
                            if ("function" == typeof o) {
                                var i = s[c];
                                n = o.call(t, i), s.splice(c, 1), c--
                            }
                            return n
                        })), e.formatArgs.call(t, s);
                        var u = r.log || e.log || console.log.bind(console);
                        u.apply(t, s)
                    }
                }
                return r.namespace = t, r.enabled = e.enabled(t), r.useColors = e.useColors(), r.color = function(t) {
                    var n, r = 0;
                    for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
                    return e.colors[Math.abs(r) % e.colors.length]
                }(t), r.destroy = o, "function" == typeof e.init && e.init(r), e.instances.push(r), r
            }

            function o() {
                var t = e.instances.indexOf(this);
                return -1 !== t && (e.instances.splice(t, 1), !0)
            }(e = t.exports = r.debug = r.default = r).coerce = function(t) {
                return t instanceof Error ? t.stack || t.message : t
            }, e.disable = function() {
                e.enable("")
            }, e.enable = function(t) {
                var n;
                e.save(t), e.names = [], e.skips = [];
                var r = ("string" == typeof t ? t : "").split(/[\s,]+/),
                    o = r.length;
                for (n = 0; n < o; n++) r[n] && ("-" === (t = r[n].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
                for (n = 0; n < e.instances.length; n++) {
                    var i = e.instances[n];
                    i.enabled = e.enabled(i.namespace)
                }
            }, e.enabled = function(t) {
                if ("*" === t[t.length - 1]) return !0;
                var n, r;
                for (n = 0, r = e.skips.length; n < r; n++)
                    if (e.skips[n].test(t)) return !1;
                for (n = 0, r = e.names.length; n < r; n++)
                    if (e.names[n].test(t)) return !0;
                return !1
            }, e.humanize = n(934), e.instances = [], e.names = [], e.skips = [], e.formatters = {}
        },
        2534: function(t, e, n) {
            var r = n(1464),
                o = n(1465),
                i = Object.prototype.toString,
                s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),
                a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
            e.deconstructPacket = function(t) {
                var e = [],
                    n = t.data,
                    i = t;
                return i.data = function t(e, n) {
                    if (!e) return e;
                    if (o(e)) {
                        var i = {
                            _placeholder: !0,
                            num: n.length
                        };
                        return n.push(e), i
                    }
                    if (r(e)) {
                        for (var s = new Array(e.length), a = 0; a < e.length; a++) s[a] = t(e[a], n);
                        return s
                    }
                    if ("object" == typeof e && !(e instanceof Date)) {
                        s = {};
                        for (var c in e) s[c] = t(e[c], n);
                        return s
                    }
                    return e
                }(n, e), i.attachments = e.length, {
                    packet: i,
                    buffers: e
                }
            }, e.reconstructPacket = function(t, e) {
                return t.data = function t(e, n) {
                    if (!e) return e;
                    if (e && !0 === e._placeholder) {
                        if ("number" == typeof e.num && e.num >= 0 && e.num < n.length) return n[e.num];
                        throw new Error("illegal attachments")
                    }
                    if (r(e))
                        for (var o = 0; o < e.length; o++) e[o] = t(e[o], n);
                    else if ("object" == typeof e)
                        for (var i in e) e[i] = t(e[i], n);
                    return e
                }(t.data, e), t.attachments = void 0, t
            }, e.removeBlobs = function(t, e) {
                var n = 0,
                    i = t;
                ! function t(c, u, h) {
                    if (!c) return c;
                    if (s && c instanceof Blob || a && c instanceof File) {
                        n++;
                        var l = new FileReader;
                        l.onload = function() {
                            h ? h[u] = this.result : i = this.result, --n || e(i)
                        }, l.readAsArrayBuffer(c)
                    } else if (r(c))
                        for (var f = 0; f < c.length; f++) t(c[f], f, c);
                    else if ("object" == typeof c && !o(c))
                        for (var p in c) t(c[p], p, c)
                }(i), n || e(i)
            }
        },
        2709: function(t, e, n) {
            var r = e;
            r.sm2 = n(2710), r.sm3 = n(1585), r.version = n(2711).version
        },
        2710: function(t, e, n) {
            var r = n(1585),
                o = n(1586),
                i = n(85),
                s = n(35),
                a = n(935),
                c = n(141),
                u = n(18),
                l = new a({
                    hash: c.sha256,
                    entropy: "UQi4W3Y2bJfzleYy+oEZ2kA9A+9jrmwewST9vmBZNgMmFyzzH0S9Vol/UK",
                    nonce: "0123456789avcdef",
                    pers: "0123456789abcdef"
                });

            function f(t) {
                if (!(this instanceof f)) return new f(t);
                i.curve.short.call(this, t)
            }
            u(f, i.curve.short);
            var p = {
                type: "SM2",
                prime: null,
                p: "FFFFFFFE FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF 00000000 FFFFFFFF FFFFFFFF",
                a: "FFFFFFFE FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF 00000000 FFFFFFFF FFFFFFFC",
                b: "28E9FA9E 9D9F5E34 4D5A9E4B CF6509A7 F39789F5 15AB8F92 DDBCBD41 4D940E93",
                n: "FFFFFFFE FFFFFFFF FFFFFFFF FFFFFFFF 7203DF6B 21C6052B 53BBF409 39D54123",
                hash: r,
                gRed: !1,
                g: ["32C4AE2C 1F198119 5F990446 6A39C994 8FE30BBF F2660BE1 715A4589 334C74C7", "BC3736A2 F4F6779C 59BDCEE3 6B692153 D0A9877C C62A4740 02DF32E5 2139F0A0"]
            };

            function d(t, e, n) {
                if (null == t) return SM2.point();
                var r;
                if (null != e) {
                    if (r = SM2.point(t, e), !SM2.validate(r)) throw "point is not on curve"
                } else {
                    var o = new s(t, 16).toRed(SM2.red),
                        i = o.redSqr().redMul(o);
                    "odd" === n != (i = i.redIAdd(o.redMul(SM2.a)).redIAdd(SM2.b).redSqrt()).fromRed().isOdd() && (i = i.redNeg()), r = SM2.point(o, i)
                }
                return r
            }

            function g(t, e) {
                if (!(this instanceof g)) return new g(t, e);
                this.curve = SM2, this.pub = null, this.pri = null;
                var n = !1,
                    r = !1;
                if (null != t)
                    if ("string" == typeof t) this._pubFromString(t);
                    else if (Array.isArray(t)) this._pubFromBytes(t);
                else {
                    if (!("x" in t && t.x instanceof s && "y" in t && t.y instanceof s)) throw "invalid public key";
                    this.pub = t, n = !0
                }
                if (null != e) {
                    if ("string" == typeof e) this.pri = new s(e, 16);
                    else {
                        if (!(e instanceof s)) throw "invalid private key";
                        this.pri = e, r = !0
                    }
                    null == this.pub && (this.pub = SM2.g.mul(this.pri))
                }
                if (!(n && r || this.validate())) throw "invalid key"
            }
            e.curve = SM2 = f(p), e.SM2KeyPair = g, e.genKeyPair = function() {
                var t = 0,
                    e = SM2.n.sub(new s(2));
                do {
                    t = new s(l.generate(32, "hex", o.random(64)))
                } while (t.cmp(e) > 0);
                return new g(null, t)
            }, g.prototype._pubFromString = function(t) {
                var e = "invalid key string";
                if (t.length < 66) throw e;
                var n = t.slice(2, 66);
                switch (t.slice(0, 2)) {
                    case "00":
                        throw "public key should not be infinity";
                    case "02":
                        this.pub = d(n, null, "even");
                        break;
                    case "03":
                        this.pub = d(n, null, "odd");
                        break;
                    case "04":
                    case "06":
                    case "07":
                        if (t.length < 130) throw e;
                        this.pub = d(n, t.slice(66, 130));
                        break;
                    default:
                        throw e
                }
            }, g.prototype._pubFromBytes = function(t) {
                var e = "unrecognized key";
                if (t.length < 33) throw e;
                var n = t.slice(1, 33);
                switch (t[0]) {
                    case 0:
                        throw "public key should not be infinity";
                    case 2:
                        this.pub = d(n, null, "even");
                        break;
                    case 3:
                        this.pub = d(n, null, "odd");
                        break;
                    case 4:
                    case 6:
                    case 7:
                        if (t.length < 65) throw e;
                        this.pub = d(n, t.slice(33, 65));
                        break;
                    default:
                        throw e
                }
            }, g.prototype.validate = function() {
                if (null != this.pub) {
                    if (this.pub.isInfinity()) return !1;
                    if (!this.curve.validate(this.pub)) return !1;
                    if (!this.pub.mul(this.curve.n).isInfinity()) return !1
                }
                if (null != this.pri) {
                    if (this.pri.cmp(this.curve.n.sub(new s(2))) > 0) return !1;
                    if (null != this.pub && !this.pub.eq(this.curve.g.mul(this.pri))) return !1
                }
                return !0
            }, g.prototype.pubToString = function(t) {
                var e = "";
                switch (t) {
                    case "compress":
                        return (e = this.pub.getY().isEven() ? "02" : "03") + this.pub.getX().toString(16, 32);
                    case "mix":
                        e = this.pub.getY().isEven() ? "06" : "07";
                        break;
                    default:
                        e = "04"
                }
                return e + this.pub.getX().toString(16, 32) + this.pub.getY().toString(16, 32)
            }, g.prototype.pubToBytes = function(t) {
                var e = [];
                switch (t) {
                    case "compress":
                        return this.pub.getY().isEven() ? e.push(2) : e.push(3), e.concat(this.pub.getX().toArray("be", 32));
                    case "mix":
                        this.pub.getY().isEven() ? e.push(6) : e.push(7);
                        break;
                    default:
                        e.push(4)
                }
                return e.concat(this.pub.getX().toArray("be", 32)).concat(this.pub.getY().toArray("be", 32))
            }, g.prototype.sign = function(t) {
                if (null == this.pri) throw "cannot sign message without private key";
                return "string" == typeof t ? this.signDigest((new r).sum(this._combine(o.strToBytes(t)))) : this.signDigest((new r).sum(this._combine(t)))
            }, g.prototype.verify = function(t, e, n) {
                if (null == this.pub) throw "cannot verify signature without public key";
                return this.verifyDigest((new r).sum(this._combine(t)), e, n)
            }, g.prototype.signRaw = function(t) {
                return this.signDigest((new r).sum(t))
            }, g.prototype.verifyRaw = function(t, e, n) {
                return this.verifyDigest((new r).sum(t), e, n)
            }, g.prototype.signDigest = function(t) {
                for (var e = {
                        r: "",
                        s: ""
                    };;) {
                    var n = new s(l.generate(32, "hex", o.random(64)), 16).umod(this.curve.n),
                        r = this.curve.g.mul(n),
                        i = o.hashToBN(t).add(r.getX()).umod(this.curve.n);
                    if (console.log("k =", n.toString()), !i.isZero() && !i.add(n).eq(this.curve.n)) {
                        var a = new s(1).add(this.pri).invm(this.curve.n),
                            c = n.sub(i.mul(this.pri)).umod(this.curve.n),
                            u = a.mul(c).umod(this.curve.n);
                        if (!u.isZero()) {
                            e.r = o.padStart(i.toString(16), 64, "0"), e.s = o.padStart(u.toString(16), 64, "0");
                            break
                        }
                    }
                }
                return e
            }, g.prototype.verifyDigest = function(t, e, n) {
                var r = new s(e, 16);
                if (r.cmp(this.curve.n) >= 0) return !1;
                var i = new s(n, 16);
                if (i.cmp(this.curve.n) >= 0) return !1;
                var a = r.add(i).umod(this.curve.n);
                if (a.isZero()) return !1;
                var c = this.curve.g.mul(i).add(this.pub.mul(a));
                return !!o.hashToBN(t).add(c.getX()).umod(this.curve.n).eq(r)
            }, g.prototype._combine = function(t) {
                var e = [0, 128, 49, 50, 51, 52, 53, 54, 55, 56, 49, 50, 51, 52, 53, 54, 55, 56];
                return e = (e = (e = (e = (e = (e = e.concat(this.curve.a.fromRed().toArray())).concat(this.curve.b.fromRed().toArray())).concat(this.curve.g.getX().toArray())).concat(this.curve.g.getY().toArray())).concat(this.pub.getX().toArray())).concat(this.pub.getY().toArray()), h = new r, e = h.sum(e), console.log(e.join()), "string" == typeof t ? e.concat(o.strToBytes(t)) : e.concat(t)
            }, g.prototype.toString = function() {
                var t = "public: ";
                return this.pub ? t += "(" + this.pub.getX().toString(16) + ", " + this.pub.getY().toString(16) + ")" : t += "null", t += ", private: ", this.pri ? t += o.padStart(this.pri.toString(16), 64, "0") : t += "null", t
            }
        },
        2711: function(t) {
            t.exports = JSON.parse('{"name":"sm.js","version":"0.1.7","description":"SM series cryptography in javascript implementation","main":"index.js","scripts":{"test":"","dist":"browserify -r ./index.js:sm.js > dist/sm.js","postdist":"uglifyjs -mc -o dist/sm.min.js dist/sm.js","prepublish":"npm run dist"},"repository":{"type":"git","url":"git+https://github.com/AlverLyu/sm.js.git"},"keywords":["sm2","sm3","crypto","ecc"],"author":"Alver Lyu","license":"MIT","bugs":{"url":"https://github.com/AlverLyu/sm.js/issues"},"homepage":"https://github.com/AlverLyu/sm.js#readme","dependencies":{"bn.js":"^4.11.6","elliptic":"^6.4.0","hash.js":"^1.0.3","hmac-drbg":"^1.0.1","inherits":"^2.0.3"},"devDependencies":{"uglify-js":"^3.0.15"}}')
        },
        288: function(t, e, n) {
            "use strict";
            var r = n(401),
                o = {},
                i = !1,
                s = global.chrome && global.chrome.app && global.chrome.app.runtime;
            t.exports = {
                attachEvent: function(t, e) {
                    void 0 !== global.addEventListener ? global.addEventListener(t, e, !1) : global.document && global.attachEvent && (global.document.attachEvent("on" + t, e), global.attachEvent("on" + t, e))
                },
                detachEvent: function(t, e) {
                    void 0 !== global.addEventListener ? global.removeEventListener(t, e, !1) : global.document && global.detachEvent && (global.document.detachEvent("on" + t, e), global.detachEvent("on" + t, e))
                },
                unloadAdd: function(t) {
                    if (s) return null;
                    var e = r.string(8);
                    return o[e] = t, i && setTimeout(this.triggerUnloadCallbacks, 0), e
                },
                unloadDel: function(t) {
                    t in o && delete o[t]
                },
                triggerUnloadCallbacks: function() {
                    for (var t in o) o[t](), delete o[t]
                }
            };
            s || t.exports.attachEvent("unload", (function() {
                i || (i = !0, t.exports.triggerUnloadCallbacks())
            }))
        },
        3116: function(t, e, n) {
            "use strict";
            t.exports = [n(3117), n(3121), n(1722), n(1723), n(1025)(n(1723)), n(1727), n(1025)(n(1727)), n(1728), n(3126), n(1025)(n(1728)), n(3127)]
        },
        3117: function(t, e, n) {
            "use strict";
            var r = n(288),
                o = n(197),
                i = n(18),
                s = n(69).EventEmitter,
                a = n(3120);

            function c(t, e, n) {
                if (!c.enabled()) throw new Error("Transport created when disabled");
                s.call(this);
                var i = this,
                    u = o.addPath(t, "/websocket");
                u = "https" === u.slice(0, 5) ? "wss" + u.slice(5) : "ws" + u.slice(4), this.url = u, this.ws = new a(this.url, [], n), this.ws.onmessage = function(t) {
                    t.data, i.emit("message", t.data)
                }, this.unloadRef = r.unloadAdd((function() {
                    i.ws.close()
                })), this.ws.onclose = function(t) {
                    t.code, t.reason, i.emit("close", t.code, t.reason), i._cleanup()
                }, this.ws.onerror = function(t) {
                    i.emit("close", 1006, "WebSocket connection broken"), i._cleanup()
                }
            }
            i(c, s), c.prototype.send = function(t) {
                var e = "[" + t + "]";
                this.ws.send(e)
            }, c.prototype.close = function() {
                var t = this.ws;
                this._cleanup(), t && t.close()
            }, c.prototype._cleanup = function() {
                var t = this.ws;
                t && (t.onmessage = t.onclose = t.onerror = null), r.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners()
            }, c.enabled = function() {
                return !!a
            }, c.transportName = "websocket", c.roundTrips = 2, t.exports = c
        },
        3120: function(t, e, n) {
            "use strict";
            var r = global.WebSocket || global.MozWebSocket;
            t.exports = r ? function(t) {
                return new r(t)
            } : void 0
        },
        3121: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(402),
                i = n(607),
                s = n(608),
                a = n(495),
                c = n(496);

            function u(t) {
                if (!a.enabled && !s.enabled) throw new Error("Transport created when disabled");
                o.call(this, t, "/xhr_streaming", i, s)
            }
            r(u, o), u.enabled = function(t) {
                return !t.nullOrigin && (!c.isOpera() && s.enabled)
            }, u.transportName = "xhr-streaming", u.roundTrips = 2, u.needBody = !!global.document, t.exports = u
        },
        3122: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(69).EventEmitter;

            function i(t, e) {
                o.call(this), this.sendBuffer = [], this.sender = e, this.url = t
            }
            r(i, o), i.prototype.send = function(t) {
                this.sendBuffer.push(t), this.sendStop || this.sendSchedule()
            }, i.prototype.sendScheduleWait = function() {
                var t, e = this;
                this.sendStop = function() {
                    e.sendStop = null, clearTimeout(t)
                }, t = setTimeout((function() {
                    e.sendStop = null, e.sendSchedule()
                }), 25)
            }, i.prototype.sendSchedule = function() {
                this.sendBuffer.length;
                var t = this;
                if (this.sendBuffer.length > 0) {
                    var e = "[" + this.sendBuffer.join(",") + "]";
                    this.sendStop = this.sender(this.url, e, (function(e) {
                        t.sendStop = null, e ? (t.emit("close", e.code || 1006, "Sending error: " + e), t.close()) : t.sendScheduleWait()
                    })), this.sendBuffer = []
                }
            }, i.prototype._cleanup = function() {
                this.removeAllListeners()
            }, i.prototype.close = function() {
                this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null)
            }, t.exports = i
        },
        3123: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(69).EventEmitter;

            function i(t, e, n) {
                o.call(this), this.Receiver = t, this.receiveUrl = e, this.AjaxObject = n, this._scheduleReceiver()
            }
            r(i, o), i.prototype._scheduleReceiver = function() {
                var t = this,
                    e = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
                e.on("message", (function(e) {
                    t.emit("message", e)
                })), e.once("close", (function(n, r) {
                    t.pollIsClosing, t.poll = e = null, t.pollIsClosing || ("network" === r ? t._scheduleReceiver() : (t.emit("close", n || 1006, r), t.removeAllListeners()))
                }))
            }, i.prototype.abort = function() {
                this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort()
            }, t.exports = i
        },
        3124: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(69).EventEmitter,
                i = n(1724);

            function s(t) {
                o.call(this);
                var e = this,
                    n = this.es = new i(t);
                n.onmessage = function(t) {
                    t.data, e.emit("message", decodeURI(t.data))
                }, n.onerror = function(t) {
                    n.readyState;
                    var r = 2 !== n.readyState ? "network" : "permanent";
                    e._cleanup(), e._close(r)
                }
            }
            r(s, o), s.prototype.abort = function() {
                this._cleanup(), this._close("user")
            }, s.prototype._cleanup = function() {
                var t = this.es;
                t && (t.onmessage = t.onerror = null, t.close(), this.es = null)
            }, s.prototype._close = function(t) {
                var e = this;
                setTimeout((function() {
                    e.emit("close", null, t), e.removeAllListeners()
                }), 200)
            }, t.exports = s
        },
        3125: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(497),
                i = n(197),
                s = n(69).EventEmitter,
                a = n(401);

            function c(t) {
                s.call(this);
                var e = this;
                o.polluteGlobalNamespace(), this.id = "a" + a.string(6), t = i.addQuery(t, "c=" + decodeURIComponent(o.WPrefix + "." + this.id)), c.htmlfileEnabled;
                var n = c.htmlfileEnabled ? o.createHtmlfile : o.createIframe;
                global[o.WPrefix][this.id] = {
                    start: function() {
                        e.iframeObj.loaded()
                    },
                    message: function(t) {
                        e.emit("message", t)
                    },
                    stop: function() {
                        e._cleanup(), e._close("network")
                    }
                }, this.iframeObj = n(t, (function() {
                    e._cleanup(), e._close("permanent")
                }))
            }
            r(c, s), c.prototype.abort = function() {
                this._cleanup(), this._close("user")
            }, c.prototype._cleanup = function() {
                this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete global[o.WPrefix][this.id]
            }, c.prototype._close = function(t) {
                this.emit("close", null, t), this.removeAllListeners()
            }, c.htmlfileEnabled = !1;
            var u = ["Active"].concat("Object").join("X");
            if (u in global) try {
                c.htmlfileEnabled = !!new global[u]("htmlfile")
            } catch (t) {}
            c.enabled = c.htmlfileEnabled || o.iframeEnabled, t.exports = c
        },
        3126: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(402),
                i = n(1722),
                s = n(607),
                a = n(1024);

            function c(t) {
                if (!a.enabled) throw new Error("Transport created when disabled");
                o.call(this, t, "/xhr", s, a)
            }
            r(c, o), c.enabled = i.enabled, c.transportName = "xdr-polling", c.roundTrips = 2, t.exports = c
        },
        3127: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(1720),
                i = n(3128),
                s = n(3129);

            function a(t) {
                if (!a.enabled()) throw new Error("Transport created when disabled");
                o.call(this, t, "/jsonp", s, i)
            }
            r(a, o), a.enabled = function() {
                return !!global.document
            }, a.transportName = "jsonp-polling", a.roundTrips = 1, a.needBody = !0, t.exports = a
        },
        3128: function(t, e, n) {
            "use strict";
            var r = n(497),
                o = n(401),
                i = n(496),
                s = n(197),
                a = n(18),
                c = n(69).EventEmitter;

            function u(t) {
                var e = this;
                c.call(this), r.polluteGlobalNamespace(), this.id = "a" + o.string(6);
                var n = s.addQuery(t, "c=" + encodeURIComponent(r.WPrefix + "." + this.id));
                global[r.WPrefix][this.id] = this._callback.bind(this), this._createScript(n), this.timeoutId = setTimeout((function() {
                    e._abort(new Error("JSONP script loaded abnormally (timeout)"))
                }), u.timeout)
            }
            a(u, c), u.prototype.abort = function() {
                if (global[r.WPrefix][this.id]) {
                    var t = new Error("JSONP user aborted read");
                    t.code = 1e3, this._abort(t)
                }
            }, u.timeout = 35e3, u.scriptErrorTimeout = 1e3, u.prototype._callback = function(t) {
                this._cleanup(), this.aborting || (t && this.emit("message", t), this.emit("close", null, "network"), this.removeAllListeners())
            }, u.prototype._abort = function(t) {
                this._cleanup(), this.aborting = !0, this.emit("close", t.code, t.message), this.removeAllListeners()
            }, u.prototype._cleanup = function() {
                if (clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
                    var t = this.script;
                    t.parentNode.removeChild(t), t.onreadystatechange = t.onerror = t.onload = t.onclick = null, this.script = null
                }
                delete global[r.WPrefix][this.id]
            }, u.prototype._scriptError = function() {
                var t = this;
                this.errorTimer || (this.errorTimer = setTimeout((function() {
                    t.loadedOkay || t._abort(new Error("JSONP script loaded abnormally (onerror)"))
                }), u.scriptErrorTimeout))
            }, u.prototype._createScript = function(t) {
                var e, n = this,
                    r = this.script = global.document.createElement("script");
                if (r.id = "a" + o.string(8), r.src = t, r.type = "text/javascript", r.charset = "UTF-8", r.onerror = this._scriptError.bind(this), r.onload = function() {
                        n._abort(new Error("JSONP script loaded abnormally (onload)"))
                    }, r.onreadystatechange = function() {
                        if (r.readyState, /loaded|closed/.test(r.readyState)) {
                            if (r && r.htmlFor && r.onclick) {
                                n.loadedOkay = !0;
                                try {
                                    r.onclick()
                                } catch (t) {}
                            }
                            r && n._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))
                        }
                    }, void 0 === r.async && global.document.attachEvent)
                    if (i.isOpera())(e = this.script2 = global.document.createElement("script")).text = "try{var a = document.getElementById('" + r.id + "'); if(a)a.onerror();}catch(x){};", r.async = e.async = !1;
                    else {
                        try {
                            r.htmlFor = r.id, r.event = "onclick"
                        } catch (t) {}
                        r.async = !0
                    } void 0 !== r.async && (r.async = !0);
                var s = global.document.getElementsByTagName("head")[0];
                s.insertBefore(r, s.firstChild), e && s.insertBefore(e, s.firstChild)
            }, t.exports = u
        },
        3129: function(t, e, n) {
            "use strict";
            var r, o, i = n(401),
                s = n(197);
            t.exports = function(t, e, n) {
                r || ((r = global.document.createElement("form")).style.display = "none", r.style.position = "absolute", r.method = "POST", r.enctype = "application/x-www-form-urlencoded", r.acceptCharset = "UTF-8", (o = global.document.createElement("textarea")).name = "d", r.appendChild(o), global.document.body.appendChild(r));
                var a = "a" + i.string(8);
                r.target = a, r.action = s.addQuery(s.addPath(t, "/jsonp_send"), "i=" + a);
                var c = function(t) {
                    try {
                        return global.document.createElement('<iframe name="' + t + '">')
                    } catch (n) {
                        var e = global.document.createElement("iframe");
                        return e.name = t, e
                    }
                }(a);
                c.id = a, c.style.display = "none", r.appendChild(c);
                try {
                    o.value = e
                } catch (t) {}
                r.submit();
                var u = function(t) {
                    c.onerror && (c.onreadystatechange = c.onerror = c.onload = null, setTimeout((function() {
                        c.parentNode.removeChild(c), c = null
                    }), 500), o.value = "", n(t))
                };
                return c.onerror = function() {
                        u()
                    }, c.onload = function() {
                        u()
                    }, c.onreadystatechange = function(t) {
                        c.readyState, "complete" === c.readyState && u()
                    },
                    function() {
                        u(new Error("Aborted"))
                    }
            }
        },
        3130: function(t, e, n) {
            "use strict";
            n(3131);
            var r, o = n(1719),
                i = n(18),
                s = n(261),
                a = n(401),
                c = n(3132),
                u = n(197),
                h = n(288),
                l = n(3133),
                f = n(1026),
                p = n(496),
                d = n(3134),
                g = n(1027),
                y = n(3135),
                m = n(1729),
                b = n(3136),
                v = n(3137),
                C = n(3138);

            function w(t, e, n) {
                if (!(this instanceof w)) return new w(t, e, n);
                if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
                y.call(this), this.readyState = w.CONNECTING, this.extensions = "", this.protocol = "", (n = n || {}).protocols_whitelist && d.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = n.transports, this._transportOptions = n.transportOptions || {};
                var r = n.sessionId || 8;
                if ("function" == typeof r) this._generateSessionId = r;
                else {
                    if ("number" != typeof r) throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
                    this._generateSessionId = function() {
                        return a.string(r)
                    }
                }
                this._server = n.server || a.numberString(1e3);
                var i = new o(t);
                if (!i.host || !i.protocol) throw new SyntaxError("The URL '" + t + "' is invalid");
                if (i.hash) throw new SyntaxError("The URL must not contain a fragment");
                if ("http:" !== i.protocol && "https:" !== i.protocol) throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + i.protocol + "' is not allowed.");
                var s = "https:" === i.protocol;
                if ("https" === m.protocol && !s) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
                e ? Array.isArray(e) || (e = [e]) : e = [];
                var c = e.sort();
                c.forEach((function(t, e) {
                    if (!t) throw new SyntaxError("The protocols entry '" + t + "' is invalid.");
                    if (e < c.length - 1 && t === c[e + 1]) throw new SyntaxError("The protocols entry '" + t + "' is duplicated.")
                }));
                var h = u.getOrigin(m.href);
                this._origin = h ? h.toLowerCase() : null, i.set("pathname", i.pathname.replace(/\/+$/, "")), this.url = i.href, this.url, this._urlInfo = {
                    nullOrigin: !p.hasDomain(),
                    sameOrigin: u.isOriginEqual(this.url, m.href),
                    sameScheme: u.isSchemeEqual(this.url, m.href)
                }, this._ir = new C(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this))
            }

            function F(t) {
                return 1e3 === t || t >= 3e3 && t <= 4999
            }
            i(w, y), w.prototype.close = function(t, e) {
                if (t && !F(t)) throw new Error("InvalidAccessError: Invalid code");
                if (e && e.length > 123) throw new SyntaxError("reason argument has an invalid length");
                if (this.readyState !== w.CLOSING && this.readyState !== w.CLOSED) {
                    this._close(t || 1e3, e || "Normal closure", !0)
                }
            }, w.prototype.send = function(t) {
                if ("string" != typeof t && (t = "" + t), this.readyState === w.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
                this.readyState === w.OPEN && this._transport.send(c.quote(t))
            }, w.version = n(1726), w.CONNECTING = 0, w.OPEN = 1, w.CLOSING = 2, w.CLOSED = 3, w.prototype._receiveInfo = function(t, e) {
                if (this._ir = null, t) {
                    this._rto = this.countRTO(e), this._transUrl = t.base_url ? t.base_url : this.url, t = f.extend(t, this._urlInfo);
                    var n = r.filterToEnabled(this._transportsWhitelist, t);
                    this._transports = n.main, this._transports.length, this._connect()
                } else this._close(1002, "Cannot connect to server")
            }, w.prototype._connect = function() {
                for (var t = this._transports.shift(); t; t = this._transports.shift()) {
                    if (t.transportName, t.needBody && (!global.document.body || void 0 !== global.document.readyState && "complete" !== global.document.readyState && "interactive" !== global.document.readyState)) return this._transports.unshift(t), void h.attachEvent("load", this._connect.bind(this));
                    var e = this._rto * t.roundTrips || 5e3;
                    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), e);
                    var n = u.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()),
                        r = this._transportOptions[t.transportName],
                        o = new t(n, this._transUrl, r);
                    return o.on("message", this._transportMessage.bind(this)), o.once("close", this._transportClose.bind(this)), o.transportName = t.transportName, void(this._transport = o)
                }
                this._close(2e3, "All transports failed", !1)
            }, w.prototype._transportTimeout = function() {
                this.readyState === w.CONNECTING && this._transportClose(2007, "Transport timed out")
            }, w.prototype._transportMessage = function(t) {
                var e, n = this,
                    r = t.slice(0, 1),
                    o = t.slice(1);
                switch (r) {
                    case "o":
                        return void this._open();
                    case "h":
                        return this.dispatchEvent(new g("heartbeat")), void this.transport
                }
                if (o) try {
                    e = s.parse(o)
                } catch (t) {}
                if (void 0 !== e) switch (r) {
                    case "a":
                        Array.isArray(e) && e.forEach((function(t) {
                            n.transport, n.dispatchEvent(new v(t))
                        }));
                        break;
                    case "m":
                        this.transport, this.dispatchEvent(new v(e));
                        break;
                    case "c":
                        Array.isArray(e) && 2 === e.length && this._close(e[0], e[1], !0)
                }
            }, w.prototype._transportClose = function(t, e) {
                this.transport, this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), F(t) || 2e3 === t || this.readyState !== w.CONNECTING ? this._close(t, e) : this._connect()
            }, w.prototype._open = function() {
                this._transport.transportName, this.readyState, this.readyState === w.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = w.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new g("open")), this.transport) : this._close(1006, "Server lost session")
            }, w.prototype._close = function(t, e, n) {
                this.transport, this.readyState;
                var r = !1;
                if (this._ir && (r = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === w.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
                this.readyState = w.CLOSING, setTimeout(function() {
                    this.readyState = w.CLOSED, r && this.dispatchEvent(new g("error"));
                    var o = new b("close");
                    o.wasClean = n || !1, o.code = t || 1e3, o.reason = e, this.dispatchEvent(o), this.onmessage = this.onclose = this.onerror = null
                }.bind(this), 0)
            }, w.prototype.countRTO = function(t) {
                return t > 100 ? 4 * t : 300 + t
            }, t.exports = function(t) {
                return r = l(t), n(3141)(w, t), w
            }
        },
        3131: function(t, e, n) {
            "use strict";
            var r, o = Array.prototype,
                i = Object.prototype,
                s = Function.prototype,
                a = String.prototype,
                c = o.slice,
                u = i.toString,
                h = function(t) {
                    return "[object Function]" === i.toString.call(t)
                },
                l = function(t) {
                    return "[object String]" === u.call(t)
                },
                f = Object.defineProperty && function() {
                    try {
                        return Object.defineProperty({}, "x", {}), !0
                    } catch (t) {
                        return !1
                    }
                }();
            r = f ? function(t, e, n, r) {
                !r && e in t || Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: n
                })
            } : function(t, e, n, r) {
                !r && e in t || (t[e] = n)
            };
            var p = function(t, e, n) {
                    for (var o in e) i.hasOwnProperty.call(e, o) && r(t, o, e[o], n)
                },
                d = function(t) {
                    if (null == t) throw new TypeError("can't convert " + t + " to object");
                    return Object(t)
                };

            function g(t) {
                var e = +t;
                return e != e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
            }

            function y() {}
            p(s, {
                bind: function(t) {
                    var e = this;
                    if (!h(e)) throw new TypeError("Function.prototype.bind called on incompatible " + e);
                    for (var n = c.call(arguments, 1), r = function() {
                            if (this instanceof a) {
                                var r = e.apply(this, n.concat(c.call(arguments)));
                                return Object(r) === r ? r : this
                            }
                            return e.apply(t, n.concat(c.call(arguments)))
                        }, o = Math.max(0, e.length - n.length), i = [], s = 0; s < o; s++) i.push("$" + s);
                    var a = Function("binder", "return function (" + i.join(",") + "){ return binder.apply(this, arguments); }")(r);
                    return e.prototype && (y.prototype = e.prototype, a.prototype = new y, y.prototype = null), a
                }
            }), p(Array, {
                isArray: function(t) {
                    return "[object Array]" === u.call(t)
                }
            });
            var m, b, v, C = Object("a"),
                w = "a" !== C[0] || !(0 in C);
            p(o, {
                forEach: function(t) {
                    var e = d(this),
                        n = w && l(this) ? this.split("") : e,
                        r = arguments[1],
                        o = -1,
                        i = n.length >>> 0;
                    if (!h(t)) throw new TypeError;
                    for (; ++o < i;) o in n && t.call(r, n[o], o, e)
                }
            }, (m = o.forEach, b = !0, v = !0, m && (m.call("foo", (function(t, e, n) {
                "object" != typeof n && (b = !1)
            })), m.call([1], (function() {
                v = "string" == typeof this
            }), "x")), !(m && b && v)));
            var F = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
            p(o, {
                indexOf: function(t) {
                    var e = w && l(this) ? this.split("") : d(this),
                        n = e.length >>> 0;
                    if (!n) return -1;
                    var r = 0;
                    for (arguments.length > 1 && (r = g(arguments[1])), r = r >= 0 ? r : Math.max(0, n + r); r < n; r++)
                        if (r in e && e[r] === t) return r;
                    return -1
                }
            }, F);
            var _, E = a.split;
            2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? (_ = void 0 === /()??/.exec("")[1], a.split = function(t, e) {
                var n = this;
                if (void 0 === t && 0 === e) return [];
                if ("[object RegExp]" !== u.call(t)) return E.call(this, t, e);
                var r, i, s, a, c = [],
                    h = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.extended ? "x" : "") + (t.sticky ? "y" : ""),
                    l = 0;
                for (t = new RegExp(t.source, h + "g"), n += "", _ || (r = new RegExp("^" + t.source + "$(?!\\s)", h)), e = void 0 === e ? -1 >>> 0 : function(t) {
                        return t >>> 0
                    }(e);
                    (i = t.exec(n)) && !((s = i.index + i[0].length) > l && (c.push(n.slice(l, i.index)), !_ && i.length > 1 && i[0].replace(r, (function() {
                        for (var t = 1; t < arguments.length - 2; t++) void 0 === arguments[t] && (i[t] = void 0)
                    })), i.length > 1 && i.index < n.length && o.push.apply(c, i.slice(1)), a = i[0].length, l = s, c.length >= e));) t.lastIndex === i.index && t.lastIndex++;
                return l === n.length ? !a && t.test("") || c.push("") : c.push(n.slice(l)), c.length > e ? c.slice(0, e) : c
            }) : "0".split(void 0, 0).length && (a.split = function(t, e) {
                return void 0 === t && 0 === e ? [] : E.call(this, t, e)
            });
            var x = a.substr,
                k = "".substr && "b" !== "0b".substr(-1);
            p(a, {
                substr: function(t, e) {
                    return x.call(this, t < 0 && (t = this.length + t) < 0 ? 0 : t, e)
                }
            }, k)
        },
        3132: function(t, e, n) {
            "use strict";
            var r, o = n(261),
                i = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g;
            t.exports = {
                quote: function(t) {
                    var e = o.stringify(t);
                    return i.lastIndex = 0, i.test(e) ? (r || (r = function(t) {
                        var e, n = {},
                            r = [];
                        for (e = 0; e < 65536; e++) r.push(String.fromCharCode(e));
                        return t.lastIndex = 0, r.join("").replace(t, (function(t) {
                            return n[t] = "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4), ""
                        })), t.lastIndex = 0, n
                    }(i)), e.replace(i, (function(t) {
                        return r[t]
                    }))) : e
                }
            }
        },
        3133: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return {
                    filterToEnabled: function(e, n) {
                        var r = {
                            main: [],
                            facade: []
                        };
                        return e ? "string" == typeof e && (e = [e]) : e = [], t.forEach((function(t) {
                            t && ("websocket" === t.transportName && !1 === n.websocket || (e.length && -1 === e.indexOf(t.transportName) ? t.transportName : t.enabled(n) ? (t.transportName, r.main.push(t), t.facadeTransport && r.facade.push(t.facadeTransport)) : t.transportName))
                        })), r
                    }
                }
            }
        },
        3134: function(t, e, n) {
            "use strict";
            var r = {};
            ["log", "debug", "warn"].forEach((function(t) {
                var e;
                try {
                    e = global.console && global.console[t] && global.console[t].apply
                } catch (t) {}
                r[t] = e ? function() {
                    return global.console[t].apply(global.console, arguments)
                } : "log" === t ? function() {} : r.log
            })), t.exports = r
        },
        3135: function(t, e, n) {
            "use strict";

            function r() {
                this._listeners = {}
            }
            r.prototype.addEventListener = function(t, e) {
                t in this._listeners || (this._listeners[t] = []);
                var n = this._listeners[t]; - 1 === n.indexOf(e) && (n = n.concat([e])), this._listeners[t] = n
            }, r.prototype.removeEventListener = function(t, e) {
                var n = this._listeners[t];
                if (n) {
                    var r = n.indexOf(e); - 1 === r || (n.length > 1 ? this._listeners[t] = n.slice(0, r).concat(n.slice(r + 1)) : delete this._listeners[t])
                }
            }, r.prototype.dispatchEvent = function() {
                var t = arguments[0],
                    e = t.type,
                    n = 1 === arguments.length ? [t] : Array.apply(null, arguments);
                if (this["on" + e] && this["on" + e].apply(this, n), e in this._listeners)
                    for (var r = this._listeners[e], o = 0; o < r.length; o++) r[o].apply(this, n)
            }, t.exports = r
        },
        3136: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(1027);

            function i() {
                o.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = ""
            }
            r(i, o), t.exports = i
        },
        3137: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(1027);

            function i(t) {
                o.call(this), this.initEvent("message", !1, !1), this.data = t
            }
            r(i, o), t.exports = i
        },
        3138: function(t, e, n) {
            "use strict";
            var r = n(69).EventEmitter,
                o = n(18),
                i = n(197),
                s = n(1024),
                a = n(608),
                c = n(495),
                u = n(3139),
                h = n(3140),
                l = n(1731);

            function f(t, e) {
                var n = this;
                r.call(this), setTimeout((function() {
                    n.doXhr(t, e)
                }), 0)
            }
            o(f, r), f._getReceiver = function(t, e, n) {
                return n.sameOrigin ? new l(e, c) : a.enabled ? new l(e, a) : s.enabled && n.sameScheme ? new l(e, s) : h.enabled() ? new h(t, e) : new l(e, u)
            }, f.prototype.doXhr = function(t, e) {
                var n = this,
                    r = i.addPath(t, "/info");
                this.xo = f._getReceiver(t, r, e), this.timeoutRef = setTimeout((function() {
                    n._cleanup(!1), n.emit("finish")
                }), f.timeout), this.xo.once("finish", (function(t, e) {
                    n._cleanup(!0), n.emit("finish", t, e)
                }))
            }, f.prototype._cleanup = function(t) {
                clearTimeout(this.timeoutRef), this.timeoutRef = null, !t && this.xo && this.xo.close(), this.xo = null
            }, f.prototype.close = function() {
                this.removeAllListeners(), this._cleanup(!1)
            }, f.timeout = 8e3, t.exports = f
        },
        3139: function(t, e, n) {
            "use strict";
            var r = n(69).EventEmitter;

            function o() {
                var t = this;
                r.call(this), this.to = setTimeout((function() {
                    t.emit("finish", 200, "{}")
                }), o.timeout)
            }
            n(18)(o, r), o.prototype.close = function() {
                clearTimeout(this.to)
            }, o.timeout = 2e3, t.exports = o
        },
        3140: function(t, e, n) {
            "use strict";
            var r = n(69).EventEmitter,
                o = n(18),
                i = n(261),
                s = n(288),
                a = n(1725),
                c = n(1730);

            function u(t, e) {
                var n = this;
                r.call(this);
                var o = function() {
                    var r = n.ifr = new a(c.transportName, e, t);
                    r.once("message", (function(t) {
                        if (t) {
                            var e;
                            try {
                                e = i.parse(t)
                            } catch (t) {
                                return n.emit("finish"), void n.close()
                            }
                            var r = e[0],
                                o = e[1];
                            n.emit("finish", r, o)
                        }
                        n.close()
                    })), r.once("close", (function() {
                        n.emit("finish"), n.close()
                    }))
                };
                global.document.body ? o() : s.attachEvent("load", o)
            }
            o(u, r), u.enabled = function() {
                return a.enabled()
            }, u.prototype.close = function() {
                this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null
            }, t.exports = u
        },
        3141: function(t, e, n) {
            "use strict";
            var r = n(197),
                o = n(288),
                i = n(261),
                s = n(3142),
                a = n(1730),
                c = n(497),
                u = n(1729);
            t.exports = function(t, e) {
                var n, h = {};
                e.forEach((function(t) {
                    t.facadeTransport && (h[t.facadeTransport.transportName] = t.facadeTransport)
                })), h[a.transportName] = a, t.bootstrap_iframe = function() {
                    var e;
                    c.currentWindowId = u.hash.slice(1);
                    o.attachEvent("message", (function(o) {
                        if (o.source === parent && (void 0 === n && (n = o.origin), o.origin === n)) {
                            var a;
                            try {
                                a = i.parse(o.data)
                            } catch (t) {
                                return void o.data
                            }
                            if (a.windowId === c.currentWindowId) switch (a.type) {
                                case "s":
                                    var l;
                                    try {
                                        l = i.parse(a.data)
                                    } catch (t) {
                                        a.data;
                                        break
                                    }
                                    var f = l[0],
                                        p = l[1],
                                        d = l[2],
                                        g = l[3];
                                    if (f !== t.version) throw new Error('Incompatible SockJS! Main site uses: "' + f + '", the iframe: "' + t.version + '".');
                                    if (!r.isOriginEqual(d, u.href) || !r.isOriginEqual(g, u.href)) throw new Error("Can't connect to different domain from within an iframe. (" + u.href + ", " + d + ", " + g + ")");
                                    e = new s(new h[p](d, g));
                                    break;
                                case "m":
                                    e._send(a.data);
                                    break;
                                case "c":
                                    e && e._close(), e = null
                            }
                        }
                    })), c.postMessage("s")
                }
            }
        },
        3142: function(t, e, n) {
            "use strict";
            var r = n(261),
                o = n(497);

            function i(t) {
                this._transport = t, t.on("message", this._transportMessage.bind(this)), t.on("close", this._transportClose.bind(this))
            }
            i.prototype._transportClose = function(t, e) {
                o.postMessage("c", r.stringify([t, e]))
            }, i.prototype._transportMessage = function(t) {
                o.postMessage("t", t)
            }, i.prototype._send = function(t) {
                this._transport.send(t)
            }, i.prototype._close = function() {
                this._transport.close(), this._transport.removeAllListeners()
            }, t.exports = i
        },
        3666: function(t, e, n) {
            var r = n(3667)(__dirname);
            t.exports = r
        },
        401: function(t, e, n) {
            "use strict";
            var r = n(24);
            t.exports = {
                string: function(t) {
                    for (var e = "abcdefghijklmnopqrstuvwxyz012345".length, n = r.randomBytes(t), o = [], i = 0; i < t; i++) o.push("abcdefghijklmnopqrstuvwxyz012345".substr(n[i] % e, 1));
                    return o.join("")
                },
                number: function(t) {
                    return Math.floor(Math.random() * t)
                },
                numberString: function(t) {
                    var e = ("" + (t - 1)).length;
                    return (new Array(e + 1).join("0") + this.number(t)).slice(-e)
                }
            }
        },
        402: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(197),
                i = n(1720);

            function s(t, e, n, r) {
                i.call(this, t, e, function(t) {
                    return function(e, n, r) {
                        var i = {};
                        "string" == typeof n && (i.headers = {
                            "Content-type": "text/plain"
                        });
                        var s = o.addPath(e, "/xhr_send"),
                            a = new t("POST", s, n, i);
                        return a.once("finish", (function(t) {
                                if (a = null, 200 !== t && 204 !== t) return r(new Error("http status " + t));
                                r()
                            })),
                            function() {
                                a.close(), a = null;
                                var t = new Error("Aborted");
                                t.code = 1e3, r(t)
                            }
                    }
                }(r), n, r)
            }
            r(s, i), t.exports = s
        },
        495: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(1721);

            function i(t, e, n) {
                o.call(this, t, e, n, {
                    noCredentials: !0
                })
            }
            r(i, o), i.enabled = o.enabled, t.exports = i
        },
        496: function(t, e, n) {
            "use strict";
            t.exports = {
                isOpera: function() {
                    return global.navigator && /opera/i.test(global.navigator.userAgent)
                },
                isKonqueror: function() {
                    return global.navigator && /konqueror/i.test(global.navigator.userAgent)
                },
                hasDomain: function() {
                    if (!global.document) return !0;
                    try {
                        return !!global.document.domain
                    } catch (t) {
                        return !1
                    }
                }
            }
        },
        497: function(t, e, n) {
            "use strict";
            var r = n(288),
                o = n(261),
                i = n(496);
            t.exports = {
                WPrefix: "_jp",
                currentWindowId: null,
                polluteGlobalNamespace: function() {
                    t.exports.WPrefix in global || (global[t.exports.WPrefix] = {})
                },
                postMessage: function(e, n) {
                    global.parent !== global && global.parent.postMessage(o.stringify({
                        windowId: t.exports.currentWindowId,
                        type: e,
                        data: n || ""
                    }), "*")
                },
                createIframe: function(t, e) {
                    var n, o, i = global.document.createElement("iframe"),
                        s = function() {
                            clearTimeout(n);
                            try {
                                i.onload = null
                            } catch (t) {}
                            i.onerror = null
                        },
                        a = function() {
                            i && (s(), setTimeout((function() {
                                i && i.parentNode.removeChild(i), i = null
                            }), 0), r.unloadDel(o))
                        },
                        c = function(t) {
                            i && (a(), e(t))
                        };
                    return i.src = t, i.style.display = "none", i.style.position = "absolute", i.onerror = function() {
                        c("onerror")
                    }, i.onload = function() {
                        clearTimeout(n), n = setTimeout((function() {
                            c("onload timeout")
                        }), 2e3)
                    }, global.document.body.appendChild(i), n = setTimeout((function() {
                        c("timeout")
                    }), 15e3), o = r.unloadAdd(a), {
                        post: function(t, e) {
                            try {
                                setTimeout((function() {
                                    i && i.contentWindow && i.contentWindow.postMessage(t, e)
                                }), 0)
                            } catch (t) {}
                        },
                        cleanup: a,
                        loaded: s
                    }
                },
                createHtmlfile: function(e, n) {
                    var o, i, s, a = ["Active"].concat("Object").join("X"),
                        c = new global[a]("htmlfile"),
                        u = function() {
                            clearTimeout(o), s.onerror = null
                        },
                        h = function() {
                            c && (u(), r.unloadDel(i), s.parentNode.removeChild(s), s = c = null, CollectGarbage())
                        },
                        l = function(t) {
                            c && (h(), n(t))
                        };
                    c.open(), c.write('<html><script>document.domain="' + global.document.domain + '";<\/script></html>'), c.close(), c.parentWindow[t.exports.WPrefix] = global[t.exports.WPrefix];
                    var f = c.createElement("div");
                    return c.body.appendChild(f), s = c.createElement("iframe"), f.appendChild(s), s.src = e, s.onerror = function() {
                        l("onerror")
                    }, o = setTimeout((function() {
                        l("timeout")
                    }), 15e3), i = r.unloadAdd(h), {
                        post: function(t, e) {
                            try {
                                setTimeout((function() {
                                    s && s.contentWindow && s.contentWindow.postMessage(t, e)
                                }), 0)
                            } catch (t) {}
                        },
                        cleanup: h,
                        loaded: u
                    }
                }
            }, t.exports.iframeEnabled = !1, global.document && (t.exports.iframeEnabled = ("function" == typeof global.postMessage || "object" == typeof global.postMessage) && !i.isKonqueror())
        },
        568: function(t, e, n) {
            function r() {
                var t;
                try {
                    t = e.storage.debug
                } catch (t) {}
                return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t
            }(e = t.exports = n(2530)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }, e.formatArgs = function(t) {
                var n = this.useColors;
                if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return;
                var r = "color: " + this.color;
                t.splice(1, 0, r, "color: inherit");
                var o = 0,
                    i = 0;
                t[0].replace(/%[a-zA-Z%]/g, (function(t) {
                    "%%" !== t && (o++, "%c" === t && (i = o))
                })), t.splice(i, 0, r)
            }, e.save = function(t) {
                try {
                    null == t ? e.storage.removeItem("debug") : e.storage.debug = t
                } catch (t) {}
            }, e.load = r, e.useColors = function() {
                if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (t) {}
            }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function(t) {
                try {
                    return JSON.stringify(t)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }, e.enable(r())
        },
        606: function(t, e, n) {
            "use strict";
            var r = n(3116);
            t.exports = n(3130)(r), "_sockjs_onload" in global && setTimeout(global._sockjs_onload, 1)
        },
        607: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(69).EventEmitter;

            function i(t, e) {
                o.call(this);
                var n = this;
                this.bufferPosition = 0, this.xo = new e("POST", t, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", (function(t, e) {
                    n._chunkHandler(t, e), n.xo = null;
                    var r = 200 === t ? "network" : "permanent";
                    n.emit("close", null, r), n._cleanup()
                }))
            }
            r(i, o), i.prototype._chunkHandler = function(t, e) {
                if (200 === t && e)
                    for (var n = -1;; this.bufferPosition += n + 1) {
                        var r = e.slice(this.bufferPosition);
                        if (-1 === (n = r.indexOf("\n"))) break;
                        var o = r.slice(0, n);
                        o && this.emit("message", o)
                    }
            }, i.prototype._cleanup = function() {
                this.removeAllListeners()
            }, i.prototype.abort = function() {
                this.xo && (this.xo.close(), this.emit("close", null, "user"), this.xo = null), this._cleanup()
            }, t.exports = i
        },
        608: function(t, e, n) {
            "use strict";
            var r = n(18),
                o = n(1721);

            function i(t, e, n, r) {
                o.call(this, t, e, n, r)
            }
            r(i, o), i.enabled = o.enabled && o.supportsCORS, t.exports = i
        },
        957: function(t, e, n) {
            var r = n(2531)("socket.io-parser"),
                o = n(2533),
                i = n(2534),
                s = n(1464),
                a = n(1465);

            function c() {}
            e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = c, e.Decoder = l;
            var u = e.ERROR + '"encode error"';

            function h(t) {
                var n = "" + t.type;
                if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"), t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data) {
                    var o = function(t) {
                        try {
                            return JSON.stringify(t)
                        } catch (t) {
                            return !1
                        }
                    }(t.data);
                    if (!1 === o) return u;
                    n += o
                }
                return r("encoded %j as %s", t, n), n
            }

            function l() {
                this.reconstructor = null
            }

            function f(t) {
                this.reconPack = t, this.buffers = []
            }

            function p(t) {
                return {
                    type: e.ERROR,
                    data: "parser error: " + t
                }
            }
            c.prototype.encode = function(t, n) {
                (r("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) ? function(t, e) {
                    i.removeBlobs(t, (function(t) {
                        var n = i.deconstructPacket(t),
                            r = h(n.packet),
                            o = n.buffers;
                        o.unshift(r), e(o)
                    }))
                }(t, n) : n([h(t)])
            }, o(l.prototype), l.prototype.add = function(t) {
                var n;
                if ("string" == typeof t) {
                    if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                    n = function(t) {
                        var n = 0,
                            o = {
                                type: Number(t.charAt(0))
                            };
                        if (null == e.types[o.type]) return p("unknown packet type " + o.type);
                        if (e.BINARY_EVENT === o.type || e.BINARY_ACK === o.type) {
                            for (var i = n + 1;
                                "-" !== t.charAt(++n) && n != t.length;);
                            var a = t.substring(i, n);
                            if (a != Number(a) || "-" !== t.charAt(n)) throw new Error("Illegal attachments");
                            o.attachments = Number(a)
                        }
                        if ("/" === t.charAt(n + 1)) {
                            for (i = n + 1; ++n;) {
                                if ("," === (u = t.charAt(n))) break;
                                if (n === t.length) break
                            }
                            o.nsp = t.substring(i, n)
                        } else o.nsp = "/";
                        var c = t.charAt(n + 1);
                        if ("" !== c && Number(c) == c) {
                            for (i = n + 1; ++n;) {
                                var u;
                                if (null == (u = t.charAt(n)) || Number(u) != u) {
                                    --n;
                                    break
                                }
                                if (n === t.length) break
                            }
                            o.id = Number(t.substring(i, n + 1))
                        }
                        if (t.charAt(++n)) {
                            var h = function(t) {
                                try {
                                    return JSON.parse(t)
                                } catch (t) {
                                    return !1
                                }
                            }(t.substr(n));
                            if (!(!1 !== h && (o.type === e.ERROR || s(h)))) return p("invalid payload");
                            o.data = h
                        }
                        return r("decoded %s as %j", t, o), o
                    }(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new f(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n)
                } else {
                    if (!a(t) && !t.base64) throw new Error("Unknown type: " + t);
                    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                    (n = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", n))
                }
            }, l.prototype.destroy = function() {
                this.reconstructor && this.reconstructor.finishedReconstruction()
            }, f.prototype.takeBinaryData = function(t) {
                if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
                    var e = i.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(), e
                }
                return null
            }, f.prototype.finishedReconstruction = function() {
                this.reconPack = null, this.buffers = []
            }
        }
    }
]);