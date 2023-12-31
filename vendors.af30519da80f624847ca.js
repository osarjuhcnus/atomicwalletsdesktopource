/*! For license information please see vendors.af30519da80f624847ca.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [213], {
        125: function(e, t, n) {
            "use strict";
            var r = n(21).Buffer,
                o = global.crypto || global.msCrypto;
            o && o.getRandomValues ? e.exports = function(e, t) {
                if (e > 4294967295) throw new RangeError("requested too many random bytes");
                var n = r.allocUnsafe(e);
                if (e > 0)
                    if (e > 65536)
                        for (var i = 0; i < e; i += 65536) o.getRandomValues(n.slice(i, i + 65536));
                    else o.getRandomValues(n);
                if ("function" == typeof t) return process.nextTick((function() {
                    t(null, n)
                }));
                return n
            } : e.exports = function() {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }
        },
        1461: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function(e, t) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            };

            function o(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }

            function i(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function s() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(i(arguments[t]));
                return e
            }
            var a = function(e, t) {
                    this.target = t, this.type = e
                },
                c = function(e) {
                    function t(t, n) {
                        var r = e.call(this, "error", n) || this;
                        return r.message = t.message, r.error = t, r
                    }
                    return o(t, e), t
                }(a),
                u = function(e) {
                    function t(t, n, r) {
                        void 0 === t && (t = 1e3), void 0 === n && (n = "");
                        var o = e.call(this, "close", r) || this;
                        return o.wasClean = !0, o.code = t, o.reason = n, o
                    }
                    return o(t, e), t
                }(a),
                f = function() {
                    if ("undefined" != typeof WebSocket) return WebSocket
                },
                l = {
                    maxReconnectionDelay: 1e4,
                    minReconnectionDelay: 1e3 + 4e3 * Math.random(),
                    minUptime: 5e3,
                    reconnectionDelayGrowFactor: 1.3,
                    connectionTimeout: 4e3,
                    maxRetries: 1 / 0,
                    maxEnqueuedMessages: 1 / 0,
                    startClosed: !1,
                    debug: !1
                },
                h = function() {
                    function e(e, t, n) {
                        var r = this;
                        void 0 === n && (n = {}), this._listeners = {
                            error: [],
                            message: [],
                            open: [],
                            close: []
                        }, this._retryCount = -1, this._shouldReconnect = !0, this._connectLock = !1, this._binaryType = "blob", this._closeCalled = !1, this._messageQueue = [], this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this._handleOpen = function(e) {
                            r._debug("open event");
                            var t = r._options.minUptime,
                                n = void 0 === t ? l.minUptime : t;
                            clearTimeout(r._connectTimeout), r._uptimeTimeout = setTimeout((function() {
                                return r._acceptOpen()
                            }), n), r._ws.binaryType = r._binaryType, r._messageQueue.forEach((function(e) {
                                return r._ws.send(e)
                            })), r._messageQueue = [], r.onopen && r.onopen(e), r._listeners.open.forEach((function(t) {
                                return r._callEventListener(e, t)
                            }))
                        }, this._handleMessage = function(e) {
                            r._debug("message event"), r.onmessage && r.onmessage(e), r._listeners.message.forEach((function(t) {
                                return r._callEventListener(e, t)
                            }))
                        }, this._handleError = function(e) {
                            r._debug("error event", e.message), r._disconnect(void 0, "TIMEOUT" === e.message ? "timeout" : void 0), r.onerror && r.onerror(e), r._debug("exec error listeners"), r._listeners.error.forEach((function(t) {
                                return r._callEventListener(e, t)
                            })), r._connect()
                        }, this._handleClose = function(e) {
                            r._debug("close event"), r._clearTimeouts(), r._shouldReconnect && r._connect(), r.onclose && r.onclose(e), r._listeners.close.forEach((function(t) {
                                return r._callEventListener(e, t)
                            }))
                        }, this._url = e, this._protocols = t, this._options = n, this._options.startClosed && (this._shouldReconnect = !1), this._connect()
                    }
                    return Object.defineProperty(e, "CONNECTING", {
                        get: function() {
                            return 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e, "OPEN", {
                        get: function() {
                            return 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e, "CLOSING", {
                        get: function() {
                            return 2
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e, "CLOSED", {
                        get: function() {
                            return 3
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "CONNECTING", {
                        get: function() {
                            return e.CONNECTING
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "OPEN", {
                        get: function() {
                            return e.OPEN
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "CLOSING", {
                        get: function() {
                            return e.CLOSING
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "CLOSED", {
                        get: function() {
                            return e.CLOSED
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "binaryType", {
                        get: function() {
                            return this._ws ? this._ws.binaryType : this._binaryType
                        },
                        set: function(e) {
                            this._binaryType = e, this._ws && (this._ws.binaryType = e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "retryCount", {
                        get: function() {
                            return Math.max(this._retryCount, 0)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "bufferedAmount", {
                        get: function() {
                            return this._messageQueue.reduce((function(e, t) {
                                return "string" == typeof t ? e += t.length : t instanceof Blob ? e += t.size : e += t.byteLength, e
                            }), 0) + (this._ws ? this._ws.bufferedAmount : 0)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "extensions", {
                        get: function() {
                            return this._ws ? this._ws.extensions : ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "protocol", {
                        get: function() {
                            return this._ws ? this._ws.protocol : ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "readyState", {
                        get: function() {
                            return this._ws ? this._ws.readyState : this._options.startClosed ? e.CLOSED : e.CONNECTING
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "url", {
                        get: function() {
                            return this._ws ? this._ws.url : ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.close = function(e, t) {
                        void 0 === e && (e = 1e3), this._closeCalled = !0, this._shouldReconnect = !1, this._clearTimeouts(), this._ws ? this._ws.readyState !== this.CLOSED ? this._ws.close(e, t) : this._debug("close: already closed") : this._debug("close enqueued: no ws instance")
                    }, e.prototype.reconnect = function(e, t) {
                        this._shouldReconnect = !0, this._closeCalled = !1, this._retryCount = -1, this._ws && this._ws.readyState !== this.CLOSED ? (this._disconnect(e, t), this._connect()) : this._connect()
                    }, e.prototype.send = function(e) {
                        if (this._ws && this._ws.readyState === this.OPEN) this._debug("send", e), this._ws.send(e);
                        else {
                            var t = this._options.maxEnqueuedMessages,
                                n = void 0 === t ? l.maxEnqueuedMessages : t;
                            this._messageQueue.length < n && (this._debug("enqueue", e), this._messageQueue.push(e))
                        }
                    }, e.prototype.addEventListener = function(e, t) {
                        this._listeners[e] && this._listeners[e].push(t)
                    }, e.prototype.dispatchEvent = function(e) {
                        var t, n, r = this._listeners[e.type];
                        if (r) try {
                            for (var o = function(e) {
                                    var t = "function" == typeof Symbol && e[Symbol.iterator],
                                        n = 0;
                                    return t ? t.call(e) : {
                                        next: function() {
                                            return e && n >= e.length && (e = void 0), {
                                                value: e && e[n++],
                                                done: !e
                                            }
                                        }
                                    }
                                }(r), i = o.next(); !i.done; i = o.next()) {
                                var s = i.value;
                                this._callEventListener(e, s)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (n = o.return) && n.call(o)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return !0
                    }, e.prototype.removeEventListener = function(e, t) {
                        this._listeners[e] && (this._listeners[e] = this._listeners[e].filter((function(e) {
                            return e !== t
                        })))
                    }, e.prototype._debug = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this._options.debug && console.log.apply(console, s(["RWS>"], e))
                    }, e.prototype._getNextDelay = function() {
                        var e = this._options,
                            t = e.reconnectionDelayGrowFactor,
                            n = void 0 === t ? l.reconnectionDelayGrowFactor : t,
                            r = e.minReconnectionDelay,
                            o = void 0 === r ? l.minReconnectionDelay : r,
                            i = e.maxReconnectionDelay,
                            s = void 0 === i ? l.maxReconnectionDelay : i,
                            a = 0;
                        return this._retryCount > 0 && (a = o * Math.pow(n, this._retryCount - 1)) > s && (a = s), this._debug("next delay", a), a
                    }, e.prototype._wait = function() {
                        var e = this;
                        return new Promise((function(t) {
                            setTimeout(t, e._getNextDelay())
                        }))
                    }, e.prototype._getNextUrl = function(e) {
                        if ("string" == typeof e) return Promise.resolve(e);
                        if ("function" == typeof e) {
                            var t = e();
                            if ("string" == typeof t) return Promise.resolve(t);
                            if (t.then) return t
                        }
                        throw Error("Invalid URL")
                    }, e.prototype._connect = function() {
                        var e = this;
                        if (!this._connectLock && this._shouldReconnect) {
                            this._connectLock = !0;
                            var t = this._options,
                                n = t.maxRetries,
                                r = void 0 === n ? l.maxRetries : n,
                                o = t.connectionTimeout,
                                i = void 0 === o ? l.connectionTimeout : o,
                                s = t.WebSocket,
                                a = void 0 === s ? f() : s;
                            if (this._retryCount >= r) this._debug("max retries reached", this._retryCount, ">=", r);
                            else {
                                if (this._retryCount++, this._debug("connect", this._retryCount), this._removeListeners(), void 0 === (c = a) || !c || 2 !== c.CLOSING) throw Error("No valid WebSocket class provided");
                                var c;
                                this._wait().then((function() {
                                    return e._getNextUrl(e._url)
                                })).then((function(t) {
                                    e._closeCalled || (e._debug("connect", {
                                        url: t,
                                        protocols: e._protocols
                                    }), e._ws = e._protocols ? new a(t, e._protocols) : new a(t), e._ws.binaryType = e._binaryType, e._connectLock = !1, e._addListeners(), e._connectTimeout = setTimeout((function() {
                                        return e._handleTimeout()
                                    }), i))
                                }))
                            }
                        }
                    }, e.prototype._handleTimeout = function() {
                        this._debug("timeout event"), this._handleError(new c(Error("TIMEOUT"), this))
                    }, e.prototype._disconnect = function(e, t) {
                        if (void 0 === e && (e = 1e3), this._clearTimeouts(), this._ws) {
                            this._removeListeners();
                            try {
                                this._ws.close(e, t), this._handleClose(new u(e, t, this))
                            } catch (e) {}
                        }
                    }, e.prototype._acceptOpen = function() {
                        this._debug("accept open"), this._retryCount = 0
                    }, e.prototype._callEventListener = function(e, t) {
                        "handleEvent" in t ? t.handleEvent(e) : t(e)
                    }, e.prototype._removeListeners = function() {
                        this._ws && (this._debug("removeListeners"), this._ws.removeEventListener("open", this._handleOpen), this._ws.removeEventListener("close", this._handleClose), this._ws.removeEventListener("message", this._handleMessage), this._ws.removeEventListener("error", this._handleError))
                    }, e.prototype._addListeners = function() {
                        this._ws && (this._debug("addListeners"), this._ws.addEventListener("open", this._handleOpen), this._ws.addEventListener("close", this._handleClose), this._ws.addEventListener("message", this._handleMessage), this._ws.addEventListener("error", this._handleError))
                    }, e.prototype._clearTimeouts = function() {
                        clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout)
                    }, e
                }();
            t.default = h
        },
        1767: function(e, t, n) {
            var r = n(101),
                o = n(21).Buffer;

            function i(e) {
                var t = o.allocUnsafe(4);
                return t.writeUInt32BE(e, 0), t
            }
            e.exports = function(e, t) {
                for (var n, s = o.alloc(0), a = 0; s.length < t;) n = i(a++), s = o.concat([s, r("sha1").update(e).update(n).digest()]);
                return s.slice(0, t)
            }
        },
        1768: function(e, t) {
            e.exports = function(e, t) {
                for (var n = e.length, r = -1; ++r < n;) e[r] ^= t[r];
                return e
            }
        },
        1769: function(e, t, n) {
            var r = n(35),
                o = n(21).Buffer;
            e.exports = function(e, t) {
                return o.from(e.toRed(r.mont(t.modulus)).redPow(new r(t.publicExponent)).fromRed().toArray())
            }
        },
        3119: function(e, t, n) {
            "use strict";
            var r = Object.prototype.hasOwnProperty;

            function o(e) {
                try {
                    return decodeURIComponent(e.replace(/\+/g, " "))
                } catch (e) {
                    return null
                }
            }

            function i(e) {
                try {
                    return encodeURIComponent(e)
                } catch (e) {
                    return null
                }
            }
            t.stringify = function(e, t) {
                t = t || "";
                var n, o, s = [];
                for (o in "string" != typeof t && (t = "?"), e)
                    if (r.call(e, o)) {
                        if ((n = e[o]) || null != n && !isNaN(n) || (n = ""), o = i(o), n = i(n), null === o || null === n) continue;
                        s.push(o + "=" + n)
                    } return s.length ? t + s.join("&") : ""
            }, t.parse = function(e) {
                for (var t, n = /([^=?#&]+)=?([^&]*)/g, r = {}; t = n.exec(e);) {
                    var i = o(t[1]),
                        s = o(t[2]);
                    null === i || null === s || i in r || (r[i] = s)
                }
                return r
            }
        },
        3167: function(e, t, n) {
            e.exports = function(e, t) {
                var r = n(3168),
                    o = "function" == typeof t;
                if (e > 65536) {
                    if (!o) throw new Error("Requested too many random bytes.");
                    t(new Error("Requested too many random bytes."))
                }
                if (void 0 !== r && r.randomBytes) {
                    if (!o) return "0x" + r.randomBytes(e).toString("hex");
                    r.randomBytes(e, (function(e, n) {
                        e ? t(c) : t(null, "0x" + n.toString("hex"))
                    }))
                } else {
                    var i;
                    if (void 0 !== r ? i = r : "undefined" != typeof msCrypto && (i = msCrypto), i && i.getRandomValues) {
                        var s = i.getRandomValues(new Uint8Array(e)),
                            a = "0x" + Array.from(s).map((function(e) {
                                return e.toString(16)
                            })).join("");
                        if (!o) return a;
                        t(null, a)
                    } else {
                        var c = new Error('No "crypto" object available. This Browser doesn\'t support generating secure random bytes.');
                        if (!o) throw c;
                        t(c)
                    }
                }
            }
        },
        3168: function(e, t, n) {
            e.exports = n(24)
        },
        3235: function(e, t, n) {
            t.publicEncrypt = n(3236), t.privateDecrypt = n(3237), t.privateEncrypt = function(e, n) {
                return t.publicEncrypt(e, n, !0)
            }, t.publicDecrypt = function(e, n) {
                return t.privateDecrypt(e, n, !0)
            }
        },
        3236: function(e, t, n) {
            var r = n(612),
                o = n(125),
                i = n(101),
                s = n(1767),
                a = n(1768),
                c = n(35),
                u = n(1769),
                f = n(1034),
                l = n(21).Buffer;
            e.exports = function(e, t, n) {
                var h;
                h = e.padding ? e.padding : n ? 1 : 4;
                var d, _ = r(e);
                if (4 === h) d = function(e, t) {
                    var n = e.modulus.byteLength(),
                        r = t.length,
                        u = i("sha1").update(l.alloc(0)).digest(),
                        f = u.length,
                        h = 2 * f;
                    if (r > n - h - 2) throw new Error("message too long");
                    var d = l.alloc(n - r - h - 2),
                        _ = n - f - 1,
                        p = o(f),
                        g = a(l.concat([u, d, l.alloc(1, 1), t], _), s(p, _)),
                        m = a(p, s(g, f));
                    return new c(l.concat([l.alloc(1), m, g], n))
                }(_, t);
                else if (1 === h) d = function(e, t, n) {
                    var r, i = t.length,
                        s = e.modulus.byteLength();
                    if (i > s - 11) throw new Error("message too long");
                    r = n ? l.alloc(s - i - 3, 255) : function(e) {
                        var t, n = l.allocUnsafe(e),
                            r = 0,
                            i = o(2 * e),
                            s = 0;
                        for (; r < e;) s === i.length && (i = o(2 * e), s = 0), (t = i[s++]) && (n[r++] = t);
                        return n
                    }(s - i - 3);
                    return new c(l.concat([l.from([0, n ? 1 : 2]), r, l.alloc(1), t], s))
                }(_, t, n);
                else {
                    if (3 !== h) throw new Error("unknown padding");
                    if ((d = new c(t)).cmp(_.modulus) >= 0) throw new Error("data too long for modulus")
                }
                return n ? f(d, _) : u(d, _)
            }
        },
        3237: function(e, t, n) {
            var r = n(612),
                o = n(1767),
                i = n(1768),
                s = n(35),
                a = n(1034),
                c = n(101),
                u = n(1769),
                f = n(21).Buffer;
            e.exports = function(e, t, n) {
                var l;
                l = e.padding ? e.padding : n ? 1 : 4;
                var h, d = r(e),
                    _ = d.modulus.byteLength();
                if (t.length > _ || new s(t).cmp(d.modulus) >= 0) throw new Error("decryption error");
                h = n ? u(new s(t), d) : a(t, d);
                var p = f.alloc(_ - h.length);
                if (h = f.concat([p, h], _), 4 === l) return function(e, t) {
                    var n = e.modulus.byteLength(),
                        r = c("sha1").update(f.alloc(0)).digest(),
                        s = r.length;
                    if (0 !== t[0]) throw new Error("decryption error");
                    var a = t.slice(1, s + 1),
                        u = t.slice(s + 1),
                        l = i(a, o(u, s)),
                        h = i(u, o(l, n - s - 1));
                    if (function(e, t) {
                            e = f.from(e), t = f.from(t);
                            var n = 0,
                                r = e.length;
                            e.length !== t.length && (n++, r = Math.min(e.length, t.length));
                            var o = -1;
                            for (; ++o < r;) n += e[o] ^ t[o];
                            return n
                        }(r, h.slice(0, s))) throw new Error("decryption error");
                    var d = s;
                    for (; 0 === h[d];) d++;
                    if (1 !== h[d++]) throw new Error("decryption error");
                    return h.slice(d)
                }(d, h);
                if (1 === l) return function(e, t, n) {
                    var r = t.slice(0, 2),
                        o = 2,
                        i = 0;
                    for (; 0 !== t[o++];)
                        if (o >= t.length) {
                            i++;
                            break
                        } var s = t.slice(2, o - 1);
                    ("0002" !== r.toString("hex") && !n || "0001" !== r.toString("hex") && n) && i++;
                    s.length < 8 && i++;
                    if (i) throw new Error("decryption error");
                    return t.slice(o)
                }(0, h, n);
                if (3 === l) return h;
                throw new Error("unknown padding")
            }
        },
        3238: function(e, t, n) {
            "use strict";

            function r() {
                throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
            }
            var o = n(21),
                i = n(125),
                s = o.Buffer,
                a = o.kMaxLength,
                c = global.crypto || global.msCrypto,
                u = Math.pow(2, 32) - 1;

            function f(e, t) {
                if ("number" != typeof e || e != e) throw new TypeError("offset must be a number");
                if (e > u || e < 0) throw new TypeError("offset must be a uint32");
                if (e > a || e > t) throw new RangeError("offset out of range")
            }

            function l(e, t, n) {
                if ("number" != typeof e || e != e) throw new TypeError("size must be a number");
                if (e > u || e < 0) throw new TypeError("size must be a uint32");
                if (e + t > n || e > a) throw new RangeError("buffer too small")
            }

            function h(e, t, n, r) {
                if (process.browser) {
                    var o = e.buffer,
                        s = new Uint8Array(o, t, n);
                    return c.getRandomValues(s), r ? void process.nextTick((function() {
                        r(null, e)
                    })) : e
                }
                if (!r) return i(n).copy(e, t), e;
                i(n, (function(n, o) {
                    if (n) return r(n);
                    o.copy(e, t), r(null, e)
                }))
            }
            c && c.getRandomValues || !process.browser ? (t.randomFill = function(e, t, n, r) {
                if (!(s.isBuffer(e) || e instanceof global.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                if ("function" == typeof t) r = t, t = 0, n = e.length;
                else if ("function" == typeof n) r = n, n = e.length - t;
                else if ("function" != typeof r) throw new TypeError('"cb" argument must be a function');
                return f(t, e.length), l(n, t, e.length), h(e, t, n, r)
            }, t.randomFillSync = function(e, t, n) {
                void 0 === t && (t = 0);
                if (!(s.isBuffer(e) || e instanceof global.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                f(t, e.length), void 0 === n && (n = e.length - t);
                return l(n, t, e.length), h(e, t, n)
            }) : (t.randomFill = r, t.randomFillSync = r)
        },
        3600: function(e, t, n) {
            "use strict";
            var r = n(3601),
                o = n(1861),
                i = n(3602);

            function s(e, t) {
                return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
            }

            function a(e) {
                var t = e.indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function c(e, t) {
                var n = function(e) {
                        var t;
                        switch (e.arrayFormat) {
                            case "index":
                                return function(e, n, r) {
                                    t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n
                                };
                            case "bracket":
                                return function(e, n, r) {
                                    t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                                };
                            default:
                                return function(e, t, n) {
                                    void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                                }
                        }
                    }(t = o({
                        arrayFormat: "none"
                    }, t)),
                    r = Object.create(null);
                return "string" != typeof e ? r : (e = e.trim().replace(/^[?#&]/, "")) ? (e.split("&").forEach((function(e) {
                    var t = e.replace(/\+/g, " ").split("="),
                        o = t.shift(),
                        s = t.length > 0 ? t.join("=") : void 0;
                    s = void 0 === s ? null : i(s), n(i(o), s, r)
                })), Object.keys(r).sort().reduce((function(e, t) {
                    var n = r[t];
                    return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((function(e, t) {
                            return Number(e) - Number(t)
                        })).map((function(e) {
                            return t[e]
                        })) : t
                    }(n) : e[t] = n, e
                }), Object.create(null))) : r
            }
            t.extract = a, t.parse = c, t.stringify = function(e, t) {
                !1 === (t = o({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none"
                }, t)).sort && (t.sort = function() {});
                var n = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return function(t, n, r) {
                                return null === n ? [s(t, e), "[", r, "]"].join("") : [s(t, e), "[", s(r, e), "]=", s(n, e)].join("")
                            };
                        case "bracket":
                            return function(t, n) {
                                return null === n ? s(t, e) : [s(t, e), "[]=", s(n, e)].join("")
                            };
                        default:
                            return function(t, n) {
                                return null === n ? s(t, e) : [s(t, e), "=", s(n, e)].join("")
                            }
                    }
                }(t);
                return e ? Object.keys(e).sort(t.sort).map((function(r) {
                    var o = e[r];
                    if (void 0 === o) return "";
                    if (null === o) return s(r, t);
                    if (Array.isArray(o)) {
                        var i = [];
                        return o.slice().forEach((function(e) {
                            void 0 !== e && i.push(n(r, e, i.length))
                        })), i.join("&")
                    }
                    return s(r, t) + "=" + s(o, t)
                })).filter((function(e) {
                    return e.length > 0
                })).join("&") : ""
            }, t.parseUrl = function(e, t) {
                return {
                    url: e.split("?")[0] || "",
                    query: c(a(e), t)
                }
            }
        },
        687: function(e, t, n) {
            e.exports = function() {
                "use strict";
                var e = function() {},
                    t = Object.prototype.hasOwnProperty,
                    n = Array.prototype.slice;

                function r(e, r, o) {
                    for (var i, s, a = 0, c = (o = n.call(arguments, 2)).length; a < c; a++)
                        for (i in s = o[a]) e && !t.call(s, i) || (r[i] = s[i])
                }
                var o = function(t, n, o, i) {
                    var s = this;
                    return "string" != typeof t && (i = o, o = n, n = t, t = null), "function" != typeof n && (i = o, o = n, n = function() {
                        return s.apply(this, arguments)
                    }), r(!1, n, s, i), n.prototype = function(t, n) {
                        var o;
                        return "function" == typeof Object.create ? o = Object.create(t) : (e.prototype = t, o = new e, e.prototype = null), n && r(!0, o, n), o
                    }(s.prototype, o), n.prototype.constructor = n, n.class_ = t || s.class_, n.super_ = s, n
                };

                function i() {}
                i.class_ = "Nevis", i.super_ = Object, i.extend = o;
                var s = i,
                    a = s.extend((function(e, t, n) {
                        this.qrious = e, this.element = t, this.element.qrious = e, this.enabled = Boolean(n)
                    }), {
                        draw: function(e) {},
                        getElement: function() {
                            return this.enabled || (this.enabled = !0, this.render()), this.element
                        },
                        getModuleSize: function(e) {
                            var t = this.qrious,
                                n = t.padding || 0,
                                r = Math.floor((t.size - 2 * n) / e.width);
                            return Math.max(1, r)
                        },
                        getOffset: function(e) {
                            var t = this.qrious,
                                n = t.padding;
                            if (null != n) return n;
                            var r = this.getModuleSize(e),
                                o = Math.floor((t.size - r * e.width) / 2);
                            return Math.max(0, o)
                        },
                        render: function(e) {
                            this.enabled && (this.resize(), this.reset(), this.draw(e))
                        },
                        reset: function() {},
                        resize: function() {}
                    }),
                    c = a.extend({
                        draw: function(e) {
                            var t, n, r = this.qrious,
                                o = this.getModuleSize(e),
                                i = parseInt((this.element.width - e.width * o) / 2),
                                s = this.element.getContext("2d");
                            for (s.fillStyle = r.foreground, s.globalAlpha = r.foregroundAlpha, t = 0; t < e.width; t++)
                                for (n = 0; n < e.width; n++) e.buffer[n * e.width + t] && s.fillRect(o * t + i, o * n + i, o, o)
                        },
                        reset: function() {
                            var e = this.qrious,
                                t = this.element.getContext("2d"),
                                n = e.size;
                            t.lineWidth = 1, t.clearRect(0, 0, n, n), t.fillStyle = e.background, t.globalAlpha = e.backgroundAlpha, t.fillRect(0, 0, n, n)
                        },
                        resize: function() {
                            var e = this.element;
                            e.width = e.height = this.qrious.size
                        }
                    }),
                    u = s.extend(null, {
                        BLOCK: [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28]
                    }),
                    f = s.extend(null, {
                        BLOCKS: [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30],
                        FINAL_FORMAT: [30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107],
                        LEVELS: {
                            L: 1,
                            M: 2,
                            Q: 3,
                            H: 4
                        }
                    }),
                    l = s.extend(null, {
                        EXPONENT: [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0],
                        LOG: [255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175]
                    }),
                    h = s.extend(null, {
                        BLOCK: [3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177]
                    }),
                    d = s.extend((function(e) {
                        var t, n, r, o, i, s = e.value.length;
                        for (this._badness = [], this._level = f.LEVELS[e.level], this._polynomial = [], this._value = e.value, this._version = 0, this._stringBuffer = []; this._version < 40 && (this._version++, r = 4 * (this._level - 1) + 16 * (this._version - 1), o = f.BLOCKS[r++], i = f.BLOCKS[r++], t = f.BLOCKS[r++], n = f.BLOCKS[r], !(s <= (r = t * (o + i) + i - 3 + (this._version <= 9)))););
                        this._dataBlock = t, this._eccBlock = n, this._neccBlock1 = o, this._neccBlock2 = i;
                        var a = this.width = 17 + 4 * this._version;
                        this.buffer = d._createArray(a * a), this._ecc = d._createArray(t + (t + n) * (o + i) + i), this._mask = d._createArray((a * (a + 1) + 1) / 2), this._insertFinders(), this._insertAlignments(), this.buffer[8 + a * (a - 8)] = 1, this._insertTimingGap(), this._reverseMask(), this._insertTimingRowAndColumn(), this._insertVersion(), this._syncMask(), this._convertBitStream(s), this._calculatePolynomial(), this._appendEccToData(), this._interleaveBlocks(), this._pack(), this._finish()
                    }), {
                        _addAlignment: function(e, t) {
                            var n, r = this.buffer,
                                o = this.width;
                            for (r[e + o * t] = 1, n = -2; n < 2; n++) r[e + n + o * (t - 2)] = 1, r[e - 2 + o * (t + n + 1)] = 1, r[e + 2 + o * (t + n)] = 1, r[e + n + 1 + o * (t + 2)] = 1;
                            for (n = 0; n < 2; n++) this._setMask(e - 1, t + n), this._setMask(e + 1, t - n), this._setMask(e - n, t - 1), this._setMask(e + n, t + 1)
                        },
                        _appendData: function(e, t, n, r) {
                            var o, i, s, a = this._polynomial,
                                c = this._stringBuffer;
                            for (i = 0; i < r; i++) c[n + i] = 0;
                            for (i = 0; i < t; i++) {
                                if (255 !== (o = l.LOG[c[e + i] ^ c[n]]))
                                    for (s = 1; s < r; s++) c[n + s - 1] = c[n + s] ^ l.EXPONENT[d._modN(o + a[r - s])];
                                else
                                    for (s = n; s < n + r; s++) c[s] = c[s + 1];
                                c[n + r - 1] = 255 === o ? 0 : l.EXPONENT[d._modN(o + a[0])]
                            }
                        },
                        _appendEccToData: function() {
                            var e, t = 0,
                                n = this._dataBlock,
                                r = this._calculateMaxLength(),
                                o = this._eccBlock;
                            for (e = 0; e < this._neccBlock1; e++) this._appendData(t, n, r, o), t += n, r += o;
                            for (e = 0; e < this._neccBlock2; e++) this._appendData(t, n + 1, r, o), t += n + 1, r += o
                        },
                        _applyMask: function(e) {
                            var t, n, r, o, i = this.buffer,
                                s = this.width;
                            switch (e) {
                                case 0:
                                    for (o = 0; o < s; o++)
                                        for (r = 0; r < s; r++) r + o & 1 || this._isMasked(r, o) || (i[r + o * s] ^= 1);
                                    break;
                                case 1:
                                    for (o = 0; o < s; o++)
                                        for (r = 0; r < s; r++) 1 & o || this._isMasked(r, o) || (i[r + o * s] ^= 1);
                                    break;
                                case 2:
                                    for (o = 0; o < s; o++)
                                        for (t = 0, r = 0; r < s; r++, t++) 3 === t && (t = 0), t || this._isMasked(r, o) || (i[r + o * s] ^= 1);
                                    break;
                                case 3:
                                    for (n = 0, o = 0; o < s; o++, n++)
                                        for (3 === n && (n = 0), t = n, r = 0; r < s; r++, t++) 3 === t && (t = 0), t || this._isMasked(r, o) || (i[r + o * s] ^= 1);
                                    break;
                                case 4:
                                    for (o = 0; o < s; o++)
                                        for (t = 0, n = o >> 1 & 1, r = 0; r < s; r++, t++) 3 === t && (t = 0, n = !n), n || this._isMasked(r, o) || (i[r + o * s] ^= 1);
                                    break;
                                case 5:
                                    for (n = 0, o = 0; o < s; o++, n++)
                                        for (3 === n && (n = 0), t = 0, r = 0; r < s; r++, t++) 3 === t && (t = 0), (r & o & 1) + !(!t | !n) || this._isMasked(r, o) || (i[r + o * s] ^= 1);
                                    break;
                                case 6:
                                    for (n = 0, o = 0; o < s; o++, n++)
                                        for (3 === n && (n = 0), t = 0, r = 0; r < s; r++, t++) 3 === t && (t = 0), (r & o & 1) + (t && t === n) & 1 || this._isMasked(r, o) || (i[r + o * s] ^= 1);
                                    break;
                                case 7:
                                    for (n = 0, o = 0; o < s; o++, n++)
                                        for (3 === n && (n = 0), t = 0, r = 0; r < s; r++, t++) 3 === t && (t = 0), (t && t === n) + (r + o & 1) & 1 || this._isMasked(r, o) || (i[r + o * s] ^= 1)
                            }
                        },
                        _calculateMaxLength: function() {
                            return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2
                        },
                        _calculatePolynomial: function() {
                            var e, t, n = this._eccBlock,
                                r = this._polynomial;
                            for (r[0] = 1, e = 0; e < n; e++) {
                                for (r[e + 1] = 1, t = e; t > 0; t--) r[t] = r[t] ? r[t - 1] ^ l.EXPONENT[d._modN(l.LOG[r[t]] + e)] : r[t - 1];
                                r[0] = l.EXPONENT[d._modN(l.LOG[r[0]] + e)]
                            }
                            for (e = 0; e <= n; e++) r[e] = l.LOG[r[e]]
                        },
                        _checkBadness: function() {
                            var e, t, n, r, o, i = 0,
                                s = this._badness,
                                a = this.buffer,
                                c = this.width;
                            for (o = 0; o < c - 1; o++)
                                for (r = 0; r < c - 1; r++)(a[r + c * o] && a[r + 1 + c * o] && a[r + c * (o + 1)] && a[r + 1 + c * (o + 1)] || !(a[r + c * o] || a[r + 1 + c * o] || a[r + c * (o + 1)] || a[r + 1 + c * (o + 1)])) && (i += d.N2);
                            var u = 0;
                            for (o = 0; o < c; o++) {
                                for (n = 0, s[0] = 0, e = 0, r = 0; r < c; r++) e === (t = a[r + c * o]) ? s[n]++ : s[++n] = 1, u += (e = t) ? 1 : -1;
                                i += this._getBadness(n)
                            }
                            u < 0 && (u = -u);
                            var f = 0,
                                l = u;
                            for (l += l << 2, l <<= 1; l > c * c;) l -= c * c, f++;
                            for (i += f * d.N4, r = 0; r < c; r++) {
                                for (n = 0, s[0] = 0, e = 0, o = 0; o < c; o++) e === (t = a[r + c * o]) ? s[n]++ : s[++n] = 1, e = t;
                                i += this._getBadness(n)
                            }
                            return i
                        },
                        _convertBitStream: function(e) {
                            var t, n, r = this._ecc,
                                o = this._version;
                            for (n = 0; n < e; n++) r[n] = this._value.charCodeAt(n);
                            var i = this._stringBuffer = r.slice(),
                                s = this._calculateMaxLength();
                            e >= s - 2 && (e = s - 2, o > 9 && e--);
                            var a = e;
                            if (o > 9) {
                                for (i[a + 2] = 0, i[a + 3] = 0; a--;) t = i[a], i[a + 3] |= 255 & t << 4, i[a + 2] = t >> 4;
                                i[2] |= 255 & e << 4, i[1] = e >> 4, i[0] = 64 | e >> 12
                            } else {
                                for (i[a + 1] = 0, i[a + 2] = 0; a--;) t = i[a], i[a + 2] |= 255 & t << 4, i[a + 1] = t >> 4;
                                i[1] |= 255 & e << 4, i[0] = 64 | e >> 4
                            }
                            for (a = e + 3 - (o < 10); a < s;) i[a++] = 236, i[a++] = 17
                        },
                        _getBadness: function(e) {
                            var t, n = 0,
                                r = this._badness;
                            for (t = 0; t <= e; t++) r[t] >= 5 && (n += d.N1 + r[t] - 5);
                            for (t = 3; t < e - 1; t += 2) r[t - 2] === r[t + 2] && r[t + 2] === r[t - 1] && r[t - 1] === r[t + 1] && 3 * r[t - 1] === r[t] && (0 === r[t - 3] || t + 3 > e || 3 * r[t - 3] >= 4 * r[t] || 3 * r[t + 3] >= 4 * r[t]) && (n += d.N3);
                            return n
                        },
                        _finish: function() {
                            var e, t;
                            this._stringBuffer = this.buffer.slice();
                            var n = 0,
                                r = 3e4;
                            for (t = 0; t < 8 && (this._applyMask(t), (e = this._checkBadness()) < r && (r = e, n = t), 7 !== n); t++) this.buffer = this._stringBuffer.slice();
                            n !== t && this._applyMask(n), r = f.FINAL_FORMAT[n + (this._level - 1 << 3)];
                            var o = this.buffer,
                                i = this.width;
                            for (t = 0; t < 8; t++, r >>= 1) 1 & r && (o[i - 1 - t + 8 * i] = 1, t < 6 ? o[8 + i * t] = 1 : o[8 + i * (t + 1)] = 1);
                            for (t = 0; t < 7; t++, r >>= 1) 1 & r && (o[8 + i * (i - 7 + t)] = 1, t ? o[6 - t + 8 * i] = 1 : o[7 + 8 * i] = 1)
                        },
                        _interleaveBlocks: function() {
                            var e, t, n = this._dataBlock,
                                r = this._ecc,
                                o = this._eccBlock,
                                i = 0,
                                s = this._calculateMaxLength(),
                                a = this._neccBlock1,
                                c = this._neccBlock2,
                                u = this._stringBuffer;
                            for (e = 0; e < n; e++) {
                                for (t = 0; t < a; t++) r[i++] = u[e + t * n];
                                for (t = 0; t < c; t++) r[i++] = u[a * n + e + t * (n + 1)]
                            }
                            for (t = 0; t < c; t++) r[i++] = u[a * n + e + t * (n + 1)];
                            for (e = 0; e < o; e++)
                                for (t = 0; t < a + c; t++) r[i++] = u[s + e + t * o];
                            this._stringBuffer = r
                        },
                        _insertAlignments: function() {
                            var e, t, n, r = this._version,
                                o = this.width;
                            if (r > 1)
                                for (e = u.BLOCK[r], n = o - 7;;) {
                                    for (t = o - 7; t > e - 3 && (this._addAlignment(t, n), !(t < e));) t -= e;
                                    if (n <= e + 9) break;
                                    n -= e, this._addAlignment(6, n), this._addAlignment(n, 6)
                                }
                        },
                        _insertFinders: function() {
                            var e, t, n, r, o = this.buffer,
                                i = this.width;
                            for (e = 0; e < 3; e++) {
                                for (t = 0, r = 0, 1 === e && (t = i - 7), 2 === e && (r = i - 7), o[r + 3 + i * (t + 3)] = 1, n = 0; n < 6; n++) o[r + n + i * t] = 1, o[r + i * (t + n + 1)] = 1, o[r + 6 + i * (t + n)] = 1, o[r + n + 1 + i * (t + 6)] = 1;
                                for (n = 1; n < 5; n++) this._setMask(r + n, t + 1), this._setMask(r + 1, t + n + 1), this._setMask(r + 5, t + n), this._setMask(r + n + 1, t + 5);
                                for (n = 2; n < 4; n++) o[r + n + i * (t + 2)] = 1, o[r + 2 + i * (t + n + 1)] = 1, o[r + 4 + i * (t + n)] = 1, o[r + n + 1 + i * (t + 4)] = 1
                            }
                        },
                        _insertTimingGap: function() {
                            var e, t, n = this.width;
                            for (t = 0; t < 7; t++) this._setMask(7, t), this._setMask(n - 8, t), this._setMask(7, t + n - 7);
                            for (e = 0; e < 8; e++) this._setMask(e, 7), this._setMask(e + n - 8, 7), this._setMask(e, n - 8)
                        },
                        _insertTimingRowAndColumn: function() {
                            var e, t = this.buffer,
                                n = this.width;
                            for (e = 0; e < n - 14; e++) 1 & e ? (this._setMask(8 + e, 6), this._setMask(6, 8 + e)) : (t[8 + e + 6 * n] = 1, t[6 + n * (8 + e)] = 1)
                        },
                        _insertVersion: function() {
                            var e, t, n, r, o = this.buffer,
                                i = this._version,
                                s = this.width;
                            if (i > 6)
                                for (e = h.BLOCK[i - 7], t = 17, n = 0; n < 6; n++)
                                    for (r = 0; r < 3; r++, t--) 1 & (t > 11 ? i >> t - 12 : e >> t) ? (o[5 - n + s * (2 - r + s - 11)] = 1, o[2 - r + s - 11 + s * (5 - n)] = 1) : (this._setMask(5 - n, 2 - r + s - 11), this._setMask(2 - r + s - 11, 5 - n))
                        },
                        _isMasked: function(e, t) {
                            var n = d._getMaskBit(e, t);
                            return 1 === this._mask[n]
                        },
                        _pack: function() {
                            var e, t, n, r = 1,
                                o = 1,
                                i = this.width,
                                s = i - 1,
                                a = i - 1,
                                c = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
                            for (t = 0; t < c; t++)
                                for (e = this._stringBuffer[t], n = 0; n < 8; n++, e <<= 1) {
                                    128 & e && (this.buffer[s + i * a] = 1);
                                    do {
                                        o ? s-- : (s++, r ? 0 !== a ? a-- : (r = !r, 6 == (s -= 2) && (s--, a = 9)) : a !== i - 1 ? a++ : (r = !r, 6 == (s -= 2) && (s--, a -= 8))), o = !o
                                    } while (this._isMasked(s, a))
                                }
                        },
                        _reverseMask: function() {
                            var e, t, n = this.width;
                            for (e = 0; e < 9; e++) this._setMask(e, 8);
                            for (e = 0; e < 8; e++) this._setMask(e + n - 8, 8), this._setMask(8, e);
                            for (t = 0; t < 7; t++) this._setMask(8, t + n - 7)
                        },
                        _setMask: function(e, t) {
                            var n = d._getMaskBit(e, t);
                            this._mask[n] = 1
                        },
                        _syncMask: function() {
                            var e, t, n = this.width;
                            for (t = 0; t < n; t++)
                                for (e = 0; e <= t; e++) this.buffer[e + n * t] && this._setMask(e, t)
                        }
                    }, {
                        _createArray: function(e) {
                            var t, n = [];
                            for (t = 0; t < e; t++) n[t] = 0;
                            return n
                        },
                        _getMaskBit: function(e, t) {
                            var n;
                            return e > t && (n = e, e = t, t = n), n = t, n += t * t, n >>= 1, n += e
                        },
                        _modN: function(e) {
                            for (; e >= 255;) e = ((e -= 255) >> 8) + (255 & e);
                            return e
                        },
                        N1: 3,
                        N2: 3,
                        N3: 40,
                        N4: 10
                    }),
                    _ = d,
                    p = a.extend({
                        draw: function() {
                            this.element.src = this.qrious.toDataURL()
                        },
                        reset: function() {
                            this.element.src = ""
                        },
                        resize: function() {
                            var e = this.element;
                            e.width = e.height = this.qrious.size
                        }
                    }),
                    g = s.extend((function(e, t, n, r) {
                        this.name = e, this.modifiable = Boolean(t), this.defaultValue = n, this._valueTransformer = r
                    }), {
                        transform: function(e) {
                            var t = this._valueTransformer;
                            return "function" == typeof t ? t(e, this) : e
                        }
                    }),
                    m = s.extend(null, {
                        abs: function(e) {
                            return null != e ? Math.abs(e) : null
                        },
                        hasOwn: function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        },
                        noop: function() {},
                        toUpperCase: function(e) {
                            return null != e ? e.toUpperCase() : null
                        }
                    }),
                    v = s.extend((function(e) {
                        this.options = {}, e.forEach((function(e) {
                            this.options[e.name] = e
                        }), this)
                    }), {
                        exists: function(e) {
                            return null != this.options[e]
                        },
                        get: function(e, t) {
                            return v._get(this.options[e], t)
                        },
                        getAll: function(e) {
                            var t, n = this.options,
                                r = {};
                            for (t in n) m.hasOwn(n, t) && (r[t] = v._get(n[t], e));
                            return r
                        },
                        init: function(e, t, n) {
                            var r, o;
                            for (r in "function" != typeof n && (n = m.noop), this.options) m.hasOwn(this.options, r) && (o = this.options[r], v._set(o, o.defaultValue, t), v._createAccessor(o, t, n));
                            this._setAll(e, t, !0)
                        },
                        set: function(e, t, n) {
                            return this._set(e, t, n)
                        },
                        setAll: function(e, t) {
                            return this._setAll(e, t)
                        },
                        _set: function(e, t, n, r) {
                            var o = this.options[e];
                            if (!o) throw new Error("Invalid option: " + e);
                            if (!o.modifiable && !r) throw new Error("Option cannot be modified: " + e);
                            return v._set(o, t, n)
                        },
                        _setAll: function(e, t, n) {
                            if (!e) return !1;
                            var r, o = !1;
                            for (r in e) m.hasOwn(e, r) && this._set(r, e[r], t, n) && (o = !0);
                            return o
                        }
                    }, {
                        _createAccessor: function(e, t, n) {
                            var r = {
                                get: function() {
                                    return v._get(e, t)
                                }
                            };
                            e.modifiable && (r.set = function(r) {
                                v._set(e, r, t) && n(r, e)
                            }), Object.defineProperty(t, e.name, r)
                        },
                        _get: function(e, t) {
                            return t["_" + e.name]
                        },
                        _set: function(e, t, n) {
                            var r = "_" + e.name,
                                o = n[r],
                                i = e.transform(null != t ? t : e.defaultValue);
                            return n[r] = i, i !== o
                        }
                    }),
                    y = v,
                    b = s.extend((function() {
                        this._services = {}
                    }), {
                        getService: function(e) {
                            var t = this._services[e];
                            if (!t) throw new Error("Service is not being managed with name: " + e);
                            return t
                        },
                        setService: function(e, t) {
                            if (this._services[e]) throw new Error("Service is already managed with name: " + e);
                            t && (this._services[e] = t)
                        }
                    }),
                    w = new y([new g("background", !0, "white"), new g("backgroundAlpha", !0, 1, m.abs), new g("element"), new g("foreground", !0, "black"), new g("foregroundAlpha", !0, 1, m.abs), new g("level", !0, "L", m.toUpperCase), new g("mime", !0, "image/png"), new g("padding", !0, null, m.abs), new g("size", !0, 100, m.abs), new g("value", !0, "")]),
                    E = new b,
                    k = s.extend((function(e) {
                        w.init(e, this, this.update.bind(this));
                        var t = w.get("element", this),
                            n = E.getService("element"),
                            r = t && n.isCanvas(t) ? t : n.createCanvas(),
                            o = t && n.isImage(t) ? t : n.createImage();
                        this._canvasRenderer = new c(this, r, !0), this._imageRenderer = new p(this, o, o === t), this.update()
                    }), {
                        get: function() {
                            return w.getAll(this)
                        },
                        set: function(e) {
                            w.setAll(e, this) && this.update()
                        },
                        toDataURL: function(e) {
                            return this.canvas.toDataURL(e || this.mime)
                        },
                        update: function() {
                            var e = new _({
                                level: this.level,
                                value: this.value
                            });
                            this._canvasRenderer.render(e), this._imageRenderer.render(e)
                        }
                    }, {
                        use: function(e) {
                            E.setService(e.getName(), e)
                        }
                    });
                Object.defineProperties(k.prototype, {
                    canvas: {
                        get: function() {
                            return this._canvasRenderer.getElement()
                        }
                    },
                    image: {
                        get: function() {
                            return this._imageRenderer.getElement()
                        }
                    }
                });
                var O = k,
                    x = s.extend({
                        getName: function() {}
                    }).extend({
                        createCanvas: function() {},
                        createImage: function() {},
                        getName: function() {
                            return "element"
                        },
                        isCanvas: function(e) {},
                        isImage: function(e) {}
                    }).extend({
                        createCanvas: function() {
                            return document.createElement("canvas")
                        },
                        createImage: function() {
                            return document.createElement("img")
                        },
                        isCanvas: function(e) {
                            return e instanceof HTMLCanvasElement
                        },
                        isImage: function(e) {
                            return e instanceof HTMLImageElement
                        }
                    });
                return O.use(new x), O
            }()
        },
        931: function(e, t, n) {
            var r = n(139);

            function o(e) {
                return e < r.OP_PUSHDATA1 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5
            }
            e.exports = {
                encodingLength: o,
                encode: function(e, t, n) {
                    var i = o(t);
                    return 1 === i ? e.writeUInt8(t, n) : 2 === i ? (e.writeUInt8(r.OP_PUSHDATA1, n), e.writeUInt8(t, n + 1)) : 3 === i ? (e.writeUInt8(r.OP_PUSHDATA2, n), e.writeUInt16LE(t, n + 1)) : (e.writeUInt8(r.OP_PUSHDATA4, n), e.writeUInt32LE(t, n + 1)), i
                },
                decode: function(e, t) {
                    var n, o, i = e.readUInt8(t);
                    if (i < r.OP_PUSHDATA1) n = i, o = 1;
                    else if (i === r.OP_PUSHDATA1) {
                        if (t + 2 > e.length) return null;
                        n = e.readUInt8(t + 1), o = 2
                    } else if (i === r.OP_PUSHDATA2) {
                        if (t + 3 > e.length) return null;
                        n = e.readUInt16LE(t + 1), o = 3
                    } else {
                        if (t + 5 > e.length) return null;
                        if (i !== r.OP_PUSHDATA4) throw new Error("Unexpected opcode");
                        n = e.readUInt32LE(t + 1), o = 5
                    }
                    return {
                        opcode: i,
                        number: n,
                        size: o
                    }
                }
            }
        }
    }
]);