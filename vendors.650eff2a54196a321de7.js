(window.webpackJsonp = window.webpackJsonp || []).push([
    [72], {
        1033: function(t, e, i) {
            "use strict";
            var r = i(406).codes.ERR_STREAM_PREMATURE_CLOSE;

            function n() {}
            t.exports = function t(e, i, o) {
                if ("function" == typeof i) return t(e, null, i);
                i || (i = {}), o = function(t) {
                    var e = !1;
                    return function() {
                        if (!e) {
                            e = !0;
                            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                            t.apply(this, r)
                        }
                    }
                }(o || n);
                var a = i.readable || !1 !== i.readable && e.readable,
                    s = i.writable || !1 !== i.writable && e.writable,
                    h = function() {
                        e.writable || l()
                    },
                    u = e._writableState && e._writableState.finished,
                    l = function() {
                        s = !1, u = !0, a || o.call(e)
                    },
                    f = e._readableState && e._readableState.endEmitted,
                    d = function() {
                        a = !1, f = !0, s || o.call(e)
                    },
                    c = function(t) {
                        o.call(e, t)
                    },
                    p = function() {
                        var t;
                        return a && !f ? (e._readableState && e._readableState.ended || (t = new r), o.call(e, t)) : s && !u ? (e._writableState && e._writableState.ended || (t = new r), o.call(e, t)) : void 0
                    },
                    m = function() {
                        e.req.on("finish", l)
                    };
                return ! function(t) {
                        return t.setHeader && "function" == typeof t.abort
                    }(e) ? s && !e._writableState && (e.on("end", h), e.on("close", h)) : (e.on("complete", l), e.on("abort", p), e.req ? m() : e.on("request", m)), e.on("end", d), e.on("finish", l), !1 !== i.error && e.on("error", c), e.on("close", p),
                    function() {
                        e.removeListener("complete", l), e.removeListener("abort", p), e.removeListener("request", m), e.req && e.req.removeListener("finish", l), e.removeListener("end", h), e.removeListener("close", h), e.removeListener("finish", l), e.removeListener("end", d), e.removeListener("error", c), e.removeListener("close", p)
                    }
            }
        },
        172: function(t, e, i) {
            "use strict";
            var r = i(101),
                n = i(2732);
            t.exports = n((function(t) {
                var e = r("sha256").update(t).digest();
                return r("sha256").update(e).digest()
            }))
        },
        1744: function(t) {
            t.exports = JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}')
        },
        1754: function(t, e, i) {
            "use strict";
            var r;
            t.exports = R, R.ReadableState = S;
            i(69).EventEmitter;
            var n = function(t, e) {
                    return t.listeners(e).length
                },
                o = i(1755),
                a = i(12).Buffer,
                s = ("undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {};
            var h, u = i(43);
            h = u && u.debuglog ? u.debuglog("stream") : function() {};
            var l, f, d, c = i(3217),
                p = i(1756),
                m = i(1757).getHighWaterMark,
                g = i(406).codes,
                v = g.ERR_INVALID_ARG_TYPE,
                y = g.ERR_STREAM_PUSH_AFTER_EOF,
                w = g.ERR_METHOD_NOT_IMPLEMENTED,
                b = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            i(18)(R, o);
            var M = p.errorOrDestroy,
                _ = ["error", "close", "destroy", "pause", "resume"];

            function S(t, e, n) {
                r = r || i(407), t = t || {}, "boolean" != typeof n && (n = e instanceof r), this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = m(this, t, "readableHighWaterMark", n), this.buffer = new c, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (l || (l = i(283).StringDecoder), this.decoder = new l(t.encoding), this.encoding = t.encoding)
            }

            function R(t) {
                if (r = r || i(407), !(this instanceof R)) return new R(t);
                var e = this instanceof r;
                this._readableState = new S(t, this, e), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), o.call(this)
            }

            function E(t, e, i, r, n) {
                h("readableAddChunk", e);
                var o, u = t._readableState;
                if (null === e) u.reading = !1,
                    function(t, e) {
                        if (h("onEofChunk"), e.ended) return;
                        if (e.decoder) {
                            var i = e.decoder.end();
                            i && i.length && (e.buffer.push(i), e.length += e.objectMode ? 1 : i.length)
                        }
                        e.ended = !0, e.sync ? T(t) : (e.needReadable = !1, e.emittedReadable || (e.emittedReadable = !0, x(t)))
                    }(t, u);
                else if (n || (o = function(t, e) {
                        var i;
                        r = e, a.isBuffer(r) || r instanceof s || "string" == typeof e || void 0 === e || t.objectMode || (i = new v("chunk", ["string", "Buffer", "Uint8Array"], e));
                        var r;
                        return i
                    }(u, e)), o) M(t, o);
                else if (u.objectMode || e && e.length > 0)
                    if ("string" == typeof e || u.objectMode || Object.getPrototypeOf(e) === a.prototype || (e = function(t) {
                            return a.from(t)
                        }(e)), r) u.endEmitted ? M(t, new b) : k(t, u, e, !0);
                    else if (u.ended) M(t, new y);
                else {
                    if (u.destroyed) return !1;
                    u.reading = !1, u.decoder && !i ? (e = u.decoder.write(e), u.objectMode || 0 !== e.length ? k(t, u, e, !1) : L(t, u)) : k(t, u, e, !1)
                } else r || (u.reading = !1, L(t, u));
                return !u.ended && (u.length < u.highWaterMark || 0 === u.length)
            }

            function k(t, e, i, r) {
                e.flowing && 0 === e.length && !e.sync ? (e.awaitDrain = 0, t.emit("data", i)) : (e.length += e.objectMode ? 1 : i.length, r ? e.buffer.unshift(i) : e.buffer.push(i), e.needReadable && T(t)), L(t, e)
            }
            Object.defineProperty(R.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(t) {
                    this._readableState && (this._readableState.destroyed = t)
                }
            }), R.prototype.destroy = p.destroy, R.prototype._undestroy = p.undestroy, R.prototype._destroy = function(t, e) {
                e(t)
            }, R.prototype.push = function(t, e) {
                var i, r = this._readableState;
                return r.objectMode ? i = !0 : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && (t = a.from(t, e), e = ""), i = !0), E(this, t, e, !1, i)
            }, R.prototype.unshift = function(t) {
                return E(this, t, null, !0, !1)
            }, R.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, R.prototype.setEncoding = function(t) {
                l || (l = i(283).StringDecoder);
                var e = new l(t);
                this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
                for (var r = this._readableState.buffer.head, n = ""; null !== r;) n += e.write(r.data), r = r.next;
                return this._readableState.buffer.clear(), "" !== n && this._readableState.buffer.push(n), this._readableState.length = n.length, this
            };

            function A(t, e) {
                return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
                    return t >= 1073741824 ? t = 1073741824 : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
                }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
            }

            function T(t) {
                var e = t._readableState;
                h("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = !1, e.emittedReadable || (h("emitReadable", e.flowing), e.emittedReadable = !0, process.nextTick(x, t))
            }

            function x(t) {
                var e = t._readableState;
                h("emitReadable_", e.destroyed, e.length, e.ended), e.destroyed || !e.length && !e.ended || (t.emit("readable"), e.emittedReadable = !1), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, N(t)
            }

            function L(t, e) {
                e.readingMore || (e.readingMore = !0, process.nextTick(O, t, e))
            }

            function O(t, e) {
                for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && 0 === e.length);) {
                    var i = e.length;
                    if (h("maybeReadMore read 0"), t.read(0), i === e.length) break
                }
                e.readingMore = !1
            }

            function j(t) {
                var e = t._readableState;
                e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = !0 : t.listenerCount("data") > 0 && t.resume()
            }

            function P(t) {
                h("readable nexttick read 0"), t.read(0)
            }

            function D(t, e) {
                h("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = !1, t.emit("resume"), N(t), e.flowing && !e.reading && t.read(0)
            }

            function N(t) {
                var e = t._readableState;
                for (h("flow", e.flowing); e.flowing && null !== t.read(););
            }

            function B(t, e) {
                return 0 === e.length ? null : (e.objectMode ? i = e.buffer.shift() : !t || t >= e.length ? (i = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length), e.buffer.clear()) : i = e.buffer.consume(t, e.decoder), i);
                var i
            }

            function q(t) {
                var e = t._readableState;
                h("endReadable", e.endEmitted), e.endEmitted || (e.ended = !0, process.nextTick(I, e, t))
            }

            function I(t, e) {
                if (h("endReadableNT", t.endEmitted, t.length), !t.endEmitted && 0 === t.length && (t.endEmitted = !0, e.readable = !1, e.emit("end"), t.autoDestroy)) {
                    var i = e._writableState;
                    (!i || i.autoDestroy && i.finished) && e.destroy()
                }
            }

            function C(t, e) {
                for (var i = 0, r = t.length; i < r; i++)
                    if (t[i] === e) return i;
                return -1
            }
            R.prototype.read = function(t) {
                h("read", t), t = parseInt(t, 10);
                var e = this._readableState,
                    i = t;
                if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && ((0 !== e.highWaterMark ? e.length >= e.highWaterMark : e.length > 0) || e.ended)) return h("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? q(this) : T(this), null;
                if (0 === (t = A(t, e)) && e.ended) return 0 === e.length && q(this), null;
                var r, n = e.needReadable;
                return h("need readable", n), (0 === e.length || e.length - t < e.highWaterMark) && h("length less than watermark", n = !0), e.ended || e.reading ? h("reading or ended", n = !1) : n && (h("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = A(i, e))), null === (r = t > 0 ? B(t, e) : null) ? (e.needReadable = e.length <= e.highWaterMark, t = 0) : (e.length -= t, e.awaitDrain = 0), 0 === e.length && (e.ended || (e.needReadable = !0), i !== t && e.ended && q(this)), null !== r && this.emit("data", r), r
            }, R.prototype._read = function(t) {
                M(this, new w("_read()"))
            }, R.prototype.pipe = function(t, e) {
                var i = this,
                    r = this._readableState;
                switch (r.pipesCount) {
                    case 0:
                        r.pipes = t;
                        break;
                    case 1:
                        r.pipes = [r.pipes, t];
                        break;
                    default:
                        r.pipes.push(t)
                }
                r.pipesCount += 1, h("pipe count=%d opts=%j", r.pipesCount, e);
                var o = (!e || !1 !== e.end) && t !== process.stdout && t !== process.stderr ? s : m;

                function a(e, n) {
                    h("onunpipe"), e === i && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, h("cleanup"), t.removeListener("close", c), t.removeListener("finish", p), t.removeListener("drain", u), t.removeListener("error", d), t.removeListener("unpipe", a), i.removeListener("end", s), i.removeListener("end", m), i.removeListener("data", f), l = !0, !r.awaitDrain || t._writableState && !t._writableState.needDrain || u())
                }

                function s() {
                    h("onend"), t.end()
                }
                r.endEmitted ? process.nextTick(o) : i.once("end", o), t.on("unpipe", a);
                var u = function(t) {
                    return function() {
                        var e = t._readableState;
                        h("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && n(t, "data") && (e.flowing = !0, N(t))
                    }
                }(i);
                t.on("drain", u);
                var l = !1;

                function f(e) {
                    h("ondata");
                    var n = t.write(e);
                    h("dest.write", n), !1 === n && ((1 === r.pipesCount && r.pipes === t || r.pipesCount > 1 && -1 !== C(r.pipes, t)) && !l && (h("false write response, pause", r.awaitDrain), r.awaitDrain++), i.pause())
                }

                function d(e) {
                    h("onerror", e), m(), t.removeListener("error", d), 0 === n(t, "error") && M(t, e)
                }

                function c() {
                    t.removeListener("finish", p), m()
                }

                function p() {
                    h("onfinish"), t.removeListener("close", c), m()
                }

                function m() {
                    h("unpipe"), i.unpipe(t)
                }
                return i.on("data", f),
                    function(t, e, i) {
                        if ("function" == typeof t.prependListener) return t.prependListener(e, i);
                        t._events && t._events[e] ? Array.isArray(t._events[e]) ? t._events[e].unshift(i) : t._events[e] = [i, t._events[e]] : t.on(e, i)
                    }(t, "error", d), t.once("close", c), t.once("finish", p), t.emit("pipe", i), r.flowing || (h("pipe resume"), i.resume()), t
            }, R.prototype.unpipe = function(t) {
                var e = this._readableState,
                    i = {
                        hasUnpiped: !1
                    };
                if (0 === e.pipesCount) return this;
                if (1 === e.pipesCount) return t && t !== e.pipes || (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, i)), this;
                if (!t) {
                    var r = e.pipes,
                        n = e.pipesCount;
                    e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                    for (var o = 0; o < n; o++) r[o].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var a = C(e.pipes, t);
                return -1 === a || (e.pipes.splice(a, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, i)), this
            }, R.prototype.on = function(t, e) {
                var i = o.prototype.on.call(this, t, e),
                    r = this._readableState;
                return "data" === t ? (r.readableListening = this.listenerCount("readable") > 0, !1 !== r.flowing && this.resume()) : "readable" === t && (r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.flowing = !1, r.emittedReadable = !1, h("on readable", r.length, r.reading), r.length ? T(this) : r.reading || process.nextTick(P, this))), i
            }, R.prototype.addListener = R.prototype.on, R.prototype.removeListener = function(t, e) {
                var i = o.prototype.removeListener.call(this, t, e);
                return "readable" === t && process.nextTick(j, this), i
            }, R.prototype.removeAllListeners = function(t) {
                var e = o.prototype.removeAllListeners.apply(this, arguments);
                return "readable" !== t && void 0 !== t || process.nextTick(j, this), e
            }, R.prototype.resume = function() {
                var t = this._readableState;
                return t.flowing || (h("resume"), t.flowing = !t.readableListening, function(t, e) {
                    e.resumeScheduled || (e.resumeScheduled = !0, process.nextTick(D, t, e))
                }(this, t)), t.paused = !1, this
            }, R.prototype.pause = function() {
                return h("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (h("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, R.prototype.wrap = function(t) {
                var e = this,
                    i = this._readableState,
                    r = !1;
                for (var n in t.on("end", (function() {
                        if (h("wrapped end"), i.decoder && !i.ended) {
                            var t = i.decoder.end();
                            t && t.length && e.push(t)
                        }
                        e.push(null)
                    })), t.on("data", (function(n) {
                        (h("wrapped data"), i.decoder && (n = i.decoder.write(n)), i.objectMode && null == n) || (i.objectMode || n && n.length) && (e.push(n) || (r = !0, t.pause()))
                    })), t) void 0 === this[n] && "function" == typeof t[n] && (this[n] = function(e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                }(n));
                for (var o = 0; o < _.length; o++) t.on(_[o], this.emit.bind(this, _[o]));
                return this._read = function(e) {
                    h("wrapped _read", e), r && (r = !1, t.resume())
                }, this
            }, "function" == typeof Symbol && (R.prototype[Symbol.asyncIterator] = function() {
                return void 0 === f && (f = i(3218)), f(this)
            }), Object.defineProperty(R.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(R.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(R.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(t) {
                    this._readableState && (this._readableState.flowing = t)
                }
            }), R._fromList = B, Object.defineProperty(R.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }), "function" == typeof Symbol && (R.from = function(t, e) {
                return void 0 === d && (d = i(3219)), d(R, t, e)
            })
        },
        1755: function(t, e, i) {
            t.exports = i(69).EventEmitter
        },
        1756: function(t, e, i) {
            "use strict";

            function r(t, e) {
                o(t, e), n(t)
            }

            function n(t) {
                t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close")
            }

            function o(t, e) {
                t.emit("error", e)
            }
            t.exports = {
                destroy: function(t, e) {
                    var i = this,
                        a = this._readableState && this._readableState.destroyed,
                        s = this._writableState && this._writableState.destroyed;
                    return a || s ? (e ? e(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(o, this, t)) : process.nextTick(o, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, (function(t) {
                        !e && t ? i._writableState ? i._writableState.errorEmitted ? process.nextTick(n, i) : (i._writableState.errorEmitted = !0, process.nextTick(r, i, t)) : process.nextTick(r, i, t) : e ? (process.nextTick(n, i), e(t)) : process.nextTick(n, i)
                    })), this)
                },
                undestroy: function() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                },
                errorOrDestroy: function(t, e) {
                    var i = t._readableState,
                        r = t._writableState;
                    i && i.autoDestroy || r && r.autoDestroy ? t.destroy(e) : t.emit("error", e)
                }
            }
        },
        1757: function(t, e, i) {
            "use strict";
            var r = i(406).codes.ERR_INVALID_OPT_VALUE;
            t.exports = {
                getHighWaterMark: function(t, e, i, n) {
                    var o = function(t, e, i) {
                        return null != t.highWaterMark ? t.highWaterMark : e ? t[i] : null
                    }(e, n, i);
                    if (null != o) {
                        if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new r(n ? i : "highWaterMark", o);
                        return Math.floor(o)
                    }
                    return t.objectMode ? 16 : 16384
                }
            }
        },
        1758: function(t, e, i) {
            "use strict";

            function r(t) {
                var e = this;
                this.next = null, this.entry = null, this.finish = function() {
                    ! function(t, e, i) {
                        var r = t.entry;
                        t.entry = null;
                        for (; r;) {
                            var n = r.callback;
                            e.pendingcb--, n(i), r = r.next
                        }
                        e.corkedRequestsFree.next = t
                    }(e, t)
                }
            }
            var n;
            t.exports = R, R.WritableState = S;
            var o = {
                    deprecate: i(553)
                },
                a = i(1755),
                s = i(12).Buffer,
                h = ("undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {};
            var u, l = i(1756),
                f = i(1757).getHighWaterMark,
                d = i(406).codes,
                c = d.ERR_INVALID_ARG_TYPE,
                p = d.ERR_METHOD_NOT_IMPLEMENTED,
                m = d.ERR_MULTIPLE_CALLBACK,
                g = d.ERR_STREAM_CANNOT_PIPE,
                v = d.ERR_STREAM_DESTROYED,
                y = d.ERR_STREAM_NULL_VALUES,
                w = d.ERR_STREAM_WRITE_AFTER_END,
                b = d.ERR_UNKNOWN_ENCODING,
                M = l.errorOrDestroy;

            function _() {}

            function S(t, e, o) {
                n = n || i(407), t = t || {}, "boolean" != typeof o && (o = e instanceof n), this.objectMode = !!t.objectMode, o && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = f(this, t, "writableHighWaterMark", o), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var a = !1 === t.decodeStrings;
                this.decodeStrings = !a, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(t) {
                    ! function(t, e) {
                        var i = t._writableState,
                            r = i.sync,
                            n = i.writecb;
                        if ("function" != typeof n) throw new m;
                        if (function(t) {
                                t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
                            }(i), e) ! function(t, e, i, r, n) {
                            --e.pendingcb, i ? (process.nextTick(n, r), process.nextTick(L, t, e), t._writableState.errorEmitted = !0, M(t, r)) : (n(r), t._writableState.errorEmitted = !0, M(t, r), L(t, e))
                        }(t, i, r, e, n);
                        else {
                            var o = T(i) || t.destroyed;
                            o || i.corked || i.bufferProcessing || !i.bufferedRequest || A(t, i), r ? process.nextTick(k, t, i, o, n) : k(t, i, o, n)
                        }
                    }(e, t)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new r(this)
            }

            function R(t) {
                var e = this instanceof(n = n || i(407));
                if (!e && !u.call(R, this)) return new R(t);
                this._writableState = new S(t, this, e), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), a.call(this)
            }

            function E(t, e, i, r, n, o, a) {
                e.writelen = r, e.writecb = a, e.writing = !0, e.sync = !0, e.destroyed ? e.onwrite(new v("write")) : i ? t._writev(n, e.onwrite) : t._write(n, o, e.onwrite), e.sync = !1
            }

            function k(t, e, i, r) {
                i || function(t, e) {
                    0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
                }(t, e), e.pendingcb--, r(), L(t, e)
            }

            function A(t, e) {
                e.bufferProcessing = !0;
                var i = e.bufferedRequest;
                if (t._writev && i && i.next) {
                    var n = e.bufferedRequestCount,
                        o = new Array(n),
                        a = e.corkedRequestsFree;
                    a.entry = i;
                    for (var s = 0, h = !0; i;) o[s] = i, i.isBuf || (h = !1), i = i.next, s += 1;
                    o.allBuffers = h, E(t, e, !0, e.length, o, "", a.finish), e.pendingcb++, e.lastBufferedRequest = null, a.next ? (e.corkedRequestsFree = a.next, a.next = null) : e.corkedRequestsFree = new r(e), e.bufferedRequestCount = 0
                } else {
                    for (; i;) {
                        var u = i.chunk,
                            l = i.encoding,
                            f = i.callback;
                        if (E(t, e, !1, e.objectMode ? 1 : u.length, u, l, f), i = i.next, e.bufferedRequestCount--, e.writing) break
                    }
                    null === i && (e.lastBufferedRequest = null)
                }
                e.bufferedRequest = i, e.bufferProcessing = !1
            }

            function T(t) {
                return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
            }

            function x(t, e) {
                t._final((function(i) {
                    e.pendingcb--, i && M(t, i), e.prefinished = !0, t.emit("prefinish"), L(t, e)
                }))
            }

            function L(t, e) {
                var i = T(e);
                if (i && (function(t, e) {
                        e.prefinished || e.finalCalled || ("function" != typeof t._final || e.destroyed ? (e.prefinished = !0, t.emit("prefinish")) : (e.pendingcb++, e.finalCalled = !0, process.nextTick(x, t, e)))
                    }(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"), e.autoDestroy))) {
                    var r = t._readableState;
                    (!r || r.autoDestroy && r.endEmitted) && t.destroy()
                }
                return i
            }
            i(18)(R, a), S.prototype.getBuffer = function() {
                    for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
                    return e
                },
                function() {
                    try {
                        Object.defineProperty(S.prototype, "buffer", {
                            get: o.deprecate((function() {
                                return this.getBuffer()
                            }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (t) {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (u = Function.prototype[Symbol.hasInstance], Object.defineProperty(R, Symbol.hasInstance, {
                    value: function(t) {
                        return !!u.call(this, t) || this === R && (t && t._writableState instanceof S)
                    }
                })) : u = function(t) {
                    return t instanceof this
                }, R.prototype.pipe = function() {
                    M(this, new g)
                }, R.prototype.write = function(t, e, i) {
                    var r, n = this._writableState,
                        o = !1,
                        a = !n.objectMode && (r = t, s.isBuffer(r) || r instanceof h);
                    return a && !s.isBuffer(t) && (t = function(t) {
                        return s.from(t)
                    }(t)), "function" == typeof e && (i = e, e = null), a ? e = "buffer" : e || (e = n.defaultEncoding), "function" != typeof i && (i = _), n.ending ? function(t, e) {
                        var i = new w;
                        M(t, i), process.nextTick(e, i)
                    }(this, i) : (a || function(t, e, i, r) {
                        var n;
                        return null === i ? n = new y : "string" == typeof i || e.objectMode || (n = new c("chunk", ["string", "Buffer"], i)), !n || (M(t, n), process.nextTick(r, n), !1)
                    }(this, n, t, i)) && (n.pendingcb++, o = function(t, e, i, r, n, o) {
                        if (!i) {
                            var a = function(t, e, i) {
                                t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = s.from(e, i));
                                return e
                            }(e, r, n);
                            r !== a && (i = !0, n = "buffer", r = a)
                        }
                        var h = e.objectMode ? 1 : r.length;
                        e.length += h;
                        var u = e.length < e.highWaterMark;
                        u || (e.needDrain = !0);
                        if (e.writing || e.corked) {
                            var l = e.lastBufferedRequest;
                            e.lastBufferedRequest = {
                                chunk: r,
                                encoding: n,
                                isBuf: i,
                                callback: o,
                                next: null
                            }, l ? l.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
                        } else E(t, e, !1, h, r, n, o);
                        return u
                    }(this, n, a, t, e, i)), o
                }, R.prototype.cork = function() {
                    this._writableState.corked++
                }, R.prototype.uncork = function() {
                    var t = this._writableState;
                    t.corked && (t.corked--, t.writing || t.corked || t.bufferProcessing || !t.bufferedRequest || A(this, t))
                }, R.prototype.setDefaultEncoding = function(t) {
                    if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new b(t);
                    return this._writableState.defaultEncoding = t, this
                }, Object.defineProperty(R.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(R.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), R.prototype._write = function(t, e, i) {
                    i(new p("_write()"))
                }, R.prototype._writev = null, R.prototype.end = function(t, e, i) {
                    var r = this._writableState;
                    return "function" == typeof t ? (i = t, t = null, e = null) : "function" == typeof e && (i = e, e = null), null != t && this.write(t, e), r.corked && (r.corked = 1, this.uncork()), r.ending || function(t, e, i) {
                        e.ending = !0, L(t, e), i && (e.finished ? process.nextTick(i) : t.once("finish", i));
                        e.ended = !0, t.writable = !1
                    }(this, r, i), this
                }, Object.defineProperty(R.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(R.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(t) {
                        this._writableState && (this._writableState.destroyed = t)
                    }
                }), R.prototype.destroy = l.destroy, R.prototype._undestroy = l.undestroy, R.prototype._destroy = function(t, e) {
                    e(t)
                }
        },
        1759: function(t, e, i) {
            "use strict";
            t.exports = l;
            var r = i(406).codes,
                n = r.ERR_METHOD_NOT_IMPLEMENTED,
                o = r.ERR_MULTIPLE_CALLBACK,
                a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                s = r.ERR_TRANSFORM_WITH_LENGTH_0,
                h = i(407);

            function u(t, e) {
                var i = this._transformState;
                i.transforming = !1;
                var r = i.writecb;
                if (null === r) return this.emit("error", new o);
                i.writechunk = null, i.writecb = null, null != e && this.push(e), r(t);
                var n = this._readableState;
                n.reading = !1, (n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
            }

            function l(t) {
                if (!(this instanceof l)) return new l(t);
                h.call(this, t), this._transformState = {
                    afterTransform: u.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", f)
            }

            function f() {
                var t = this;
                "function" != typeof this._flush || this._readableState.destroyed ? d(this, null, null) : this._flush((function(e, i) {
                    d(t, e, i)
                }))
            }

            function d(t, e, i) {
                if (e) return t.emit("error", e);
                if (null != i && t.push(i), t._writableState.length) throw new s;
                if (t._transformState.transforming) throw new a;
                return t.push(null)
            }
            i(18)(l, h), l.prototype.push = function(t, e) {
                return this._transformState.needTransform = !1, h.prototype.push.call(this, t, e)
            }, l.prototype._transform = function(t, e, i) {
                i(new n("_transform()"))
            }, l.prototype._write = function(t, e, i) {
                var r = this._transformState;
                if (r.writecb = i, r.writechunk = t, r.writeencoding = e, !r.transforming) {
                    var n = this._readableState;
                    (r.needTransform || n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
                }
            }, l.prototype._read = function(t) {
                var e = this._transformState;
                null === e.writechunk || e.transforming ? e.needTransform = !0 : (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform))
            }, l.prototype._destroy = function(t, e) {
                h.prototype._destroy.call(this, t, (function(t) {
                    e(t)
                }))
            }
        },
        1760: function(t, e, i) {
            (function(t) {
                ! function(t, e) {
                    "use strict";

                    function r(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function n(t, e) {
                        t.super_ = e;
                        var i = function() {};
                        i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
                    }

                    function o(t, e, i) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (i = e, e = 10), this._init(t || 0, e || 10, i || "be"))
                    }
                    var a;
                    "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        a = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : i(12).Buffer
                    } catch (t) {}

                    function s(t, e) {
                        var i = t.charCodeAt(e);
                        return i >= 48 && i <= 57 ? i - 48 : i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : void r(!1, "Invalid character in " + t)
                    }

                    function h(t, e, i) {
                        var r = s(t, i);
                        return i - 1 >= e && (r |= s(t, i - 1) << 4), r
                    }

                    function u(t, e, i, n) {
                        for (var o = 0, a = 0, s = Math.min(t.length, i), h = e; h < s; h++) {
                            var u = t.charCodeAt(h) - 48;
                            o *= n, a = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u, r(u >= 0 && a < n, "Invalid character"), o += a
                        }
                        return o
                    }

                    function l(t, e) {
                        t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                    }
                    if (o.isBN = function(t) {
                            return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                        }, o.max = function(t, e) {
                            return t.cmp(e) > 0 ? t : e
                        }, o.min = function(t, e) {
                            return t.cmp(e) < 0 ? t : e
                        }, o.prototype._init = function(t, e, i) {
                            if ("number" == typeof t) return this._initNumber(t, e, i);
                            if ("object" == typeof t) return this._initArray(t, e, i);
                            "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                            var n = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, i) : (this._parseBase(t, e, n), "le" === i && this._initArray(this.toArray(), e, i)))
                        }, o.prototype._initNumber = function(t, e, i) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), e, i)
                        }, o.prototype._initArray = function(t, e, i) {
                            if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var n = 0; n < this.length; n++) this.words[n] = 0;
                            var o, a, s = 0;
                            if ("be" === i)
                                for (n = t.length - 1, o = 0; n >= 0; n -= 3) a = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                            else if ("le" === i)
                                for (n = 0, o = 0; n < t.length; n += 3) a = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                            return this._strip()
                        }, o.prototype._parseHex = function(t, e, i) {
                            this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                            for (var r = 0; r < this.length; r++) this.words[r] = 0;
                            var n, o = 0,
                                a = 0;
                            if ("be" === i)
                                for (r = t.length - 1; r >= e; r -= 2) n = h(t, e, r) << o, this.words[a] |= 67108863 & n, o >= 18 ? (o -= 18, a += 1, this.words[a] |= n >>> 26) : o += 8;
                            else
                                for (r = (t.length - e) % 2 == 0 ? e + 1 : e; r < t.length; r += 2) n = h(t, e, r) << o, this.words[a] |= 67108863 & n, o >= 18 ? (o -= 18, a += 1, this.words[a] |= n >>> 26) : o += 8;
                            this._strip()
                        }, o.prototype._parseBase = function(t, e, i) {
                            this.words = [0], this.length = 1;
                            for (var r = 0, n = 1; n <= 67108863; n *= e) r++;
                            r--, n = n / e | 0;
                            for (var o = t.length - i, a = o % r, s = Math.min(o, o - a) + i, h = 0, l = i; l < s; l += r) h = u(t, l, l + r, e), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                            if (0 !== a) {
                                var f = 1;
                                for (h = u(t, l, t.length, e), l = 0; l < a; l++) f *= e;
                                this.imuln(f), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
                            }
                            this._strip()
                        }, o.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, o.prototype._move = function(t) {
                            l(t, this)
                        }, o.prototype.clone = function() {
                            var t = new o(null);
                            return this.copy(t), t
                        }, o.prototype._expand = function(t) {
                            for (; this.length < t;) this.words[this.length++] = 0;
                            return this
                        }, o.prototype._strip = function() {
                            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                            return this._normSign()
                        }, o.prototype._normSign = function() {
                            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                        }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = f
                    } catch (t) {
                        o.prototype.inspect = f
                    } else o.prototype.inspect = f;

                    function f() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    o.prototype.toString = function(t, e) {
                        var i;
                        if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                            i = "";
                            for (var n = 0, o = 0, a = 0; a < this.length; a++) {
                                var s = this.words[a],
                                    h = (16777215 & (s << n | o)).toString(16);
                                o = s >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, a--), i = 0 !== o || a !== this.length - 1 ? d[6 - h.length] + h + i : h + i
                            }
                            for (0 !== o && (i = o.toString(16) + i); i.length % e != 0;) i = "0" + i;
                            return 0 !== this.negative && (i = "-" + i), i
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var u = c[t],
                                l = p[t];
                            i = "";
                            var f = this.clone();
                            for (f.negative = 0; !f.isZero();) {
                                var m = f.modrn(l).toString(t);
                                i = (f = f.idivn(l)).isZero() ? m + i : d[u - m.length] + m + i
                            }
                            for (this.isZero() && (i = "0" + i); i.length % e != 0;) i = "0" + i;
                            return 0 !== this.negative && (i = "-" + i), i
                        }
                        r(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, a && (o.prototype.toBuffer = function(t, e) {
                        return this.toArrayLike(a, t, e)
                    }), o.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    };

                    function m(t, e, i) {
                        i.negative = e.negative ^ t.negative;
                        var r = t.length + e.length | 0;
                        i.length = r, r = r - 1 | 0;
                        var n = 0 | t.words[0],
                            o = 0 | e.words[0],
                            a = n * o,
                            s = 67108863 & a,
                            h = a / 67108864 | 0;
                        i.words[0] = s;
                        for (var u = 1; u < r; u++) {
                            for (var l = h >>> 26, f = 67108863 & h, d = Math.min(u, e.length - 1), c = Math.max(0, u - t.length + 1); c <= d; c++) {
                                var p = u - c | 0;
                                l += (a = (n = 0 | t.words[p]) * (o = 0 | e.words[c]) + f) / 67108864 | 0, f = 67108863 & a
                            }
                            i.words[u] = 0 | f, h = 0 | l
                        }
                        return 0 !== h ? i.words[u] = 0 | h : i.length--, i._strip()
                    }
                    o.prototype.toArrayLike = function(t, e, i) {
                        this._strip();
                        var n = this.byteLength(),
                            o = i || Math.max(1, n);
                        r(n <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0");
                        var a = function(t, e) {
                            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                        }(t, o);
                        return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](a, n), a
                    }, o.prototype._toArrayLikeLE = function(t, e) {
                        for (var i = 0, r = 0, n = 0, o = 0; n < this.length; n++) {
                            var a = this.words[n] << o | r;
                            t[i++] = 255 & a, i < t.length && (t[i++] = a >> 8 & 255), i < t.length && (t[i++] = a >> 16 & 255), 6 === o ? (i < t.length && (t[i++] = a >> 24 & 255), r = 0, o = 0) : (r = a >>> 24, o += 2)
                        }
                        if (i < t.length)
                            for (t[i++] = r; i < t.length;) t[i++] = 0
                    }, o.prototype._toArrayLikeBE = function(t, e) {
                        for (var i = t.length - 1, r = 0, n = 0, o = 0; n < this.length; n++) {
                            var a = this.words[n] << o | r;
                            t[i--] = 255 & a, i >= 0 && (t[i--] = a >> 8 & 255), i >= 0 && (t[i--] = a >> 16 & 255), 6 === o ? (i >= 0 && (t[i--] = a >> 24 & 255), r = 0, o = 0) : (r = a >>> 24, o += 2)
                        }
                        if (i >= 0)
                            for (t[i--] = r; i >= 0;) t[i--] = 0
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var e = t,
                            i = 0;
                        return e >= 4096 && (i += 13, e >>>= 13), e >= 64 && (i += 7, e >>>= 7), e >= 8 && (i += 4, e >>>= 4), e >= 2 && (i += 2, e >>>= 2), i + e
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var e = t,
                            i = 0;
                        return 0 == (8191 & e) && (i += 13, e >>>= 13), 0 == (127 & e) && (i += 7, e >>>= 7), 0 == (15 & e) && (i += 4, e >>>= 4), 0 == (3 & e) && (i += 2, e >>>= 2), 0 == (1 & e) && i++, i
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            e = this._countBits(t);
                        return 26 * (this.length - 1) + e
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, e = 0; e < this.length; e++) {
                            var i = this._zeroBits(this.words[e]);
                            if (t += i, 26 !== i) break
                        }
                        return t
                    }, o.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, o.prototype.neg = function() {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                        return this._strip()
                    }, o.prototype.ior = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var e;
                        e = this.length > t.length ? t : this;
                        for (var i = 0; i < e.length; i++) this.words[i] = this.words[i] & t.words[i];
                        return this.length = e.length, this._strip()
                    }, o.prototype.iand = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var e, i;
                        this.length > t.length ? (e = this, i = t) : (e = t, i = this);
                        for (var r = 0; r < i.length; r++) this.words[r] = e.words[r] ^ i.words[r];
                        if (this !== e)
                            for (; r < e.length; r++) this.words[r] = e.words[r];
                        return this.length = e.length, this._strip()
                    }, o.prototype.ixor = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26),
                            i = t % 26;
                        this._expand(e), i > 0 && e--;
                        for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
                        return i > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - i), this._strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, e) {
                        r("number" == typeof t && t >= 0);
                        var i = t / 26 | 0,
                            n = t % 26;
                        return this._expand(i + 1), this.words[i] = e ? this.words[i] | 1 << n : this.words[i] & ~(1 << n), this._strip()
                    }, o.prototype.iadd = function(t) {
                        var e, i, r;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                        this.length > t.length ? (i = this, r = t) : (i = t, r = this);
                        for (var n = 0, o = 0; o < r.length; o++) e = (0 | i.words[o]) + (0 | r.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                        for (; 0 !== n && o < i.length; o++) e = (0 | i.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                        if (this.length = i.length, 0 !== n) this.words[this.length] = n, this.length++;
                        else if (i !== this)
                            for (; o < i.length; o++) this.words[o] = i.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var e;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var e = this.iadd(t);
                            return t.negative = 1, e._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var i, r, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        n > 0 ? (i = this, r = t) : (i = t, r = this);
                        for (var o = 0, a = 0; a < r.length; a++) o = (e = (0 | i.words[a]) - (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                        for (; 0 !== o && a < i.length; a++) o = (e = (0 | i.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
                        if (0 === o && a < i.length && i !== this)
                            for (; a < i.length; a++) this.words[a] = i.words[a];
                        return this.length = Math.max(this.length, a), i !== this && (this.negative = 1), this._strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var g = function(t, e, i) {
                        var r, n, o, a = t.words,
                            s = e.words,
                            h = i.words,
                            u = 0,
                            l = 0 | a[0],
                            f = 8191 & l,
                            d = l >>> 13,
                            c = 0 | a[1],
                            p = 8191 & c,
                            m = c >>> 13,
                            g = 0 | a[2],
                            v = 8191 & g,
                            y = g >>> 13,
                            w = 0 | a[3],
                            b = 8191 & w,
                            M = w >>> 13,
                            _ = 0 | a[4],
                            S = 8191 & _,
                            R = _ >>> 13,
                            E = 0 | a[5],
                            k = 8191 & E,
                            A = E >>> 13,
                            T = 0 | a[6],
                            x = 8191 & T,
                            L = T >>> 13,
                            O = 0 | a[7],
                            j = 8191 & O,
                            P = O >>> 13,
                            D = 0 | a[8],
                            N = 8191 & D,
                            B = D >>> 13,
                            q = 0 | a[9],
                            I = 8191 & q,
                            C = q >>> 13,
                            W = 0 | s[0],
                            H = 8191 & W,
                            U = W >>> 13,
                            F = 0 | s[1],
                            Z = 8191 & F,
                            K = F >>> 13,
                            V = 0 | s[2],
                            z = 8191 & V,
                            G = V >>> 13,
                            Y = 0 | s[3],
                            J = 8191 & Y,
                            Q = Y >>> 13,
                            X = 0 | s[4],
                            $ = 8191 & X,
                            tt = X >>> 13,
                            et = 0 | s[5],
                            it = 8191 & et,
                            rt = et >>> 13,
                            nt = 0 | s[6],
                            ot = 8191 & nt,
                            at = nt >>> 13,
                            st = 0 | s[7],
                            ht = 8191 & st,
                            ut = st >>> 13,
                            lt = 0 | s[8],
                            ft = 8191 & lt,
                            dt = lt >>> 13,
                            ct = 0 | s[9],
                            pt = 8191 & ct,
                            mt = ct >>> 13;
                        i.negative = t.negative ^ e.negative, i.length = 19;
                        var gt = (u + (r = Math.imul(f, H)) | 0) + ((8191 & (n = (n = Math.imul(f, U)) + Math.imul(d, H) | 0)) << 13) | 0;
                        u = ((o = Math.imul(d, U)) + (n >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, r = Math.imul(p, H), n = (n = Math.imul(p, U)) + Math.imul(m, H) | 0, o = Math.imul(m, U);
                        var vt = (u + (r = r + Math.imul(f, Z) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, K) | 0) + Math.imul(d, Z) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, K) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, r = Math.imul(v, H), n = (n = Math.imul(v, U)) + Math.imul(y, H) | 0, o = Math.imul(y, U), r = r + Math.imul(p, Z) | 0, n = (n = n + Math.imul(p, K) | 0) + Math.imul(m, Z) | 0, o = o + Math.imul(m, K) | 0;
                        var yt = (u + (r = r + Math.imul(f, z) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, G) | 0) + Math.imul(d, z) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, G) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, r = Math.imul(b, H), n = (n = Math.imul(b, U)) + Math.imul(M, H) | 0, o = Math.imul(M, U), r = r + Math.imul(v, Z) | 0, n = (n = n + Math.imul(v, K) | 0) + Math.imul(y, Z) | 0, o = o + Math.imul(y, K) | 0, r = r + Math.imul(p, z) | 0, n = (n = n + Math.imul(p, G) | 0) + Math.imul(m, z) | 0, o = o + Math.imul(m, G) | 0;
                        var wt = (u + (r = r + Math.imul(f, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, Q) | 0) + Math.imul(d, J) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, Q) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, r = Math.imul(S, H), n = (n = Math.imul(S, U)) + Math.imul(R, H) | 0, o = Math.imul(R, U), r = r + Math.imul(b, Z) | 0, n = (n = n + Math.imul(b, K) | 0) + Math.imul(M, Z) | 0, o = o + Math.imul(M, K) | 0, r = r + Math.imul(v, z) | 0, n = (n = n + Math.imul(v, G) | 0) + Math.imul(y, z) | 0, o = o + Math.imul(y, G) | 0, r = r + Math.imul(p, J) | 0, n = (n = n + Math.imul(p, Q) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, Q) | 0;
                        var bt = (u + (r = r + Math.imul(f, $) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, tt) | 0) + Math.imul(d, $) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, tt) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, r = Math.imul(k, H), n = (n = Math.imul(k, U)) + Math.imul(A, H) | 0, o = Math.imul(A, U), r = r + Math.imul(S, Z) | 0, n = (n = n + Math.imul(S, K) | 0) + Math.imul(R, Z) | 0, o = o + Math.imul(R, K) | 0, r = r + Math.imul(b, z) | 0, n = (n = n + Math.imul(b, G) | 0) + Math.imul(M, z) | 0, o = o + Math.imul(M, G) | 0, r = r + Math.imul(v, J) | 0, n = (n = n + Math.imul(v, Q) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, Q) | 0, r = r + Math.imul(p, $) | 0, n = (n = n + Math.imul(p, tt) | 0) + Math.imul(m, $) | 0, o = o + Math.imul(m, tt) | 0;
                        var Mt = (u + (r = r + Math.imul(f, it) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, rt) | 0) + Math.imul(d, it) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, rt) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, r = Math.imul(x, H), n = (n = Math.imul(x, U)) + Math.imul(L, H) | 0, o = Math.imul(L, U), r = r + Math.imul(k, Z) | 0, n = (n = n + Math.imul(k, K) | 0) + Math.imul(A, Z) | 0, o = o + Math.imul(A, K) | 0, r = r + Math.imul(S, z) | 0, n = (n = n + Math.imul(S, G) | 0) + Math.imul(R, z) | 0, o = o + Math.imul(R, G) | 0, r = r + Math.imul(b, J) | 0, n = (n = n + Math.imul(b, Q) | 0) + Math.imul(M, J) | 0, o = o + Math.imul(M, Q) | 0, r = r + Math.imul(v, $) | 0, n = (n = n + Math.imul(v, tt) | 0) + Math.imul(y, $) | 0, o = o + Math.imul(y, tt) | 0, r = r + Math.imul(p, it) | 0, n = (n = n + Math.imul(p, rt) | 0) + Math.imul(m, it) | 0, o = o + Math.imul(m, rt) | 0;
                        var _t = (u + (r = r + Math.imul(f, ot) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, at) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, at) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, r = Math.imul(j, H), n = (n = Math.imul(j, U)) + Math.imul(P, H) | 0, o = Math.imul(P, U), r = r + Math.imul(x, Z) | 0, n = (n = n + Math.imul(x, K) | 0) + Math.imul(L, Z) | 0, o = o + Math.imul(L, K) | 0, r = r + Math.imul(k, z) | 0, n = (n = n + Math.imul(k, G) | 0) + Math.imul(A, z) | 0, o = o + Math.imul(A, G) | 0, r = r + Math.imul(S, J) | 0, n = (n = n + Math.imul(S, Q) | 0) + Math.imul(R, J) | 0, o = o + Math.imul(R, Q) | 0, r = r + Math.imul(b, $) | 0, n = (n = n + Math.imul(b, tt) | 0) + Math.imul(M, $) | 0, o = o + Math.imul(M, tt) | 0, r = r + Math.imul(v, it) | 0, n = (n = n + Math.imul(v, rt) | 0) + Math.imul(y, it) | 0, o = o + Math.imul(y, rt) | 0, r = r + Math.imul(p, ot) | 0, n = (n = n + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, at) | 0;
                        var St = (u + (r = r + Math.imul(f, ht) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, ut) | 0) + Math.imul(d, ht) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, ut) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, r = Math.imul(N, H), n = (n = Math.imul(N, U)) + Math.imul(B, H) | 0, o = Math.imul(B, U), r = r + Math.imul(j, Z) | 0, n = (n = n + Math.imul(j, K) | 0) + Math.imul(P, Z) | 0, o = o + Math.imul(P, K) | 0, r = r + Math.imul(x, z) | 0, n = (n = n + Math.imul(x, G) | 0) + Math.imul(L, z) | 0, o = o + Math.imul(L, G) | 0, r = r + Math.imul(k, J) | 0, n = (n = n + Math.imul(k, Q) | 0) + Math.imul(A, J) | 0, o = o + Math.imul(A, Q) | 0, r = r + Math.imul(S, $) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(R, $) | 0, o = o + Math.imul(R, tt) | 0, r = r + Math.imul(b, it) | 0, n = (n = n + Math.imul(b, rt) | 0) + Math.imul(M, it) | 0, o = o + Math.imul(M, rt) | 0, r = r + Math.imul(v, ot) | 0, n = (n = n + Math.imul(v, at) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, at) | 0, r = r + Math.imul(p, ht) | 0, n = (n = n + Math.imul(p, ut) | 0) + Math.imul(m, ht) | 0, o = o + Math.imul(m, ut) | 0;
                        var Rt = (u + (r = r + Math.imul(f, ft) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, dt) | 0) + Math.imul(d, ft) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, dt) | 0) + (n >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, r = Math.imul(I, H), n = (n = Math.imul(I, U)) + Math.imul(C, H) | 0, o = Math.imul(C, U), r = r + Math.imul(N, Z) | 0, n = (n = n + Math.imul(N, K) | 0) + Math.imul(B, Z) | 0, o = o + Math.imul(B, K) | 0, r = r + Math.imul(j, z) | 0, n = (n = n + Math.imul(j, G) | 0) + Math.imul(P, z) | 0, o = o + Math.imul(P, G) | 0, r = r + Math.imul(x, J) | 0, n = (n = n + Math.imul(x, Q) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, Q) | 0, r = r + Math.imul(k, $) | 0, n = (n = n + Math.imul(k, tt) | 0) + Math.imul(A, $) | 0, o = o + Math.imul(A, tt) | 0, r = r + Math.imul(S, it) | 0, n = (n = n + Math.imul(S, rt) | 0) + Math.imul(R, it) | 0, o = o + Math.imul(R, rt) | 0, r = r + Math.imul(b, ot) | 0, n = (n = n + Math.imul(b, at) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, at) | 0, r = r + Math.imul(v, ht) | 0, n = (n = n + Math.imul(v, ut) | 0) + Math.imul(y, ht) | 0, o = o + Math.imul(y, ut) | 0, r = r + Math.imul(p, ft) | 0, n = (n = n + Math.imul(p, dt) | 0) + Math.imul(m, ft) | 0, o = o + Math.imul(m, dt) | 0;
                        var Et = (u + (r = r + Math.imul(f, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, mt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, mt) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, r = Math.imul(I, Z), n = (n = Math.imul(I, K)) + Math.imul(C, Z) | 0, o = Math.imul(C, K), r = r + Math.imul(N, z) | 0, n = (n = n + Math.imul(N, G) | 0) + Math.imul(B, z) | 0, o = o + Math.imul(B, G) | 0, r = r + Math.imul(j, J) | 0, n = (n = n + Math.imul(j, Q) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, Q) | 0, r = r + Math.imul(x, $) | 0, n = (n = n + Math.imul(x, tt) | 0) + Math.imul(L, $) | 0, o = o + Math.imul(L, tt) | 0, r = r + Math.imul(k, it) | 0, n = (n = n + Math.imul(k, rt) | 0) + Math.imul(A, it) | 0, o = o + Math.imul(A, rt) | 0, r = r + Math.imul(S, ot) | 0, n = (n = n + Math.imul(S, at) | 0) + Math.imul(R, ot) | 0, o = o + Math.imul(R, at) | 0, r = r + Math.imul(b, ht) | 0, n = (n = n + Math.imul(b, ut) | 0) + Math.imul(M, ht) | 0, o = o + Math.imul(M, ut) | 0, r = r + Math.imul(v, ft) | 0, n = (n = n + Math.imul(v, dt) | 0) + Math.imul(y, ft) | 0, o = o + Math.imul(y, dt) | 0;
                        var kt = (u + (r = r + Math.imul(p, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(m, mt) | 0) + (n >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, r = Math.imul(I, z), n = (n = Math.imul(I, G)) + Math.imul(C, z) | 0, o = Math.imul(C, G), r = r + Math.imul(N, J) | 0, n = (n = n + Math.imul(N, Q) | 0) + Math.imul(B, J) | 0, o = o + Math.imul(B, Q) | 0, r = r + Math.imul(j, $) | 0, n = (n = n + Math.imul(j, tt) | 0) + Math.imul(P, $) | 0, o = o + Math.imul(P, tt) | 0, r = r + Math.imul(x, it) | 0, n = (n = n + Math.imul(x, rt) | 0) + Math.imul(L, it) | 0, o = o + Math.imul(L, rt) | 0, r = r + Math.imul(k, ot) | 0, n = (n = n + Math.imul(k, at) | 0) + Math.imul(A, ot) | 0, o = o + Math.imul(A, at) | 0, r = r + Math.imul(S, ht) | 0, n = (n = n + Math.imul(S, ut) | 0) + Math.imul(R, ht) | 0, o = o + Math.imul(R, ut) | 0, r = r + Math.imul(b, ft) | 0, n = (n = n + Math.imul(b, dt) | 0) + Math.imul(M, ft) | 0, o = o + Math.imul(M, dt) | 0;
                        var At = (u + (r = r + Math.imul(v, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(v, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(y, mt) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, r = Math.imul(I, J), n = (n = Math.imul(I, Q)) + Math.imul(C, J) | 0, o = Math.imul(C, Q), r = r + Math.imul(N, $) | 0, n = (n = n + Math.imul(N, tt) | 0) + Math.imul(B, $) | 0, o = o + Math.imul(B, tt) | 0, r = r + Math.imul(j, it) | 0, n = (n = n + Math.imul(j, rt) | 0) + Math.imul(P, it) | 0, o = o + Math.imul(P, rt) | 0, r = r + Math.imul(x, ot) | 0, n = (n = n + Math.imul(x, at) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, at) | 0, r = r + Math.imul(k, ht) | 0, n = (n = n + Math.imul(k, ut) | 0) + Math.imul(A, ht) | 0, o = o + Math.imul(A, ut) | 0, r = r + Math.imul(S, ft) | 0, n = (n = n + Math.imul(S, dt) | 0) + Math.imul(R, ft) | 0, o = o + Math.imul(R, dt) | 0;
                        var Tt = (u + (r = r + Math.imul(b, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(b, mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(M, mt) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, r = Math.imul(I, $), n = (n = Math.imul(I, tt)) + Math.imul(C, $) | 0, o = Math.imul(C, tt), r = r + Math.imul(N, it) | 0, n = (n = n + Math.imul(N, rt) | 0) + Math.imul(B, it) | 0, o = o + Math.imul(B, rt) | 0, r = r + Math.imul(j, ot) | 0, n = (n = n + Math.imul(j, at) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, at) | 0, r = r + Math.imul(x, ht) | 0, n = (n = n + Math.imul(x, ut) | 0) + Math.imul(L, ht) | 0, o = o + Math.imul(L, ut) | 0, r = r + Math.imul(k, ft) | 0, n = (n = n + Math.imul(k, dt) | 0) + Math.imul(A, ft) | 0, o = o + Math.imul(A, dt) | 0;
                        var xt = (u + (r = r + Math.imul(S, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, mt) | 0) + Math.imul(R, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(R, mt) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, r = Math.imul(I, it), n = (n = Math.imul(I, rt)) + Math.imul(C, it) | 0, o = Math.imul(C, rt), r = r + Math.imul(N, ot) | 0, n = (n = n + Math.imul(N, at) | 0) + Math.imul(B, ot) | 0, o = o + Math.imul(B, at) | 0, r = r + Math.imul(j, ht) | 0, n = (n = n + Math.imul(j, ut) | 0) + Math.imul(P, ht) | 0, o = o + Math.imul(P, ut) | 0, r = r + Math.imul(x, ft) | 0, n = (n = n + Math.imul(x, dt) | 0) + Math.imul(L, ft) | 0, o = o + Math.imul(L, dt) | 0;
                        var Lt = (u + (r = r + Math.imul(k, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(k, mt) | 0) + Math.imul(A, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(A, mt) | 0) + (n >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, r = Math.imul(I, ot), n = (n = Math.imul(I, at)) + Math.imul(C, ot) | 0, o = Math.imul(C, at), r = r + Math.imul(N, ht) | 0, n = (n = n + Math.imul(N, ut) | 0) + Math.imul(B, ht) | 0, o = o + Math.imul(B, ut) | 0, r = r + Math.imul(j, ft) | 0, n = (n = n + Math.imul(j, dt) | 0) + Math.imul(P, ft) | 0, o = o + Math.imul(P, dt) | 0;
                        var Ot = (u + (r = r + Math.imul(x, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(x, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(L, mt) | 0) + (n >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, r = Math.imul(I, ht), n = (n = Math.imul(I, ut)) + Math.imul(C, ht) | 0, o = Math.imul(C, ut), r = r + Math.imul(N, ft) | 0, n = (n = n + Math.imul(N, dt) | 0) + Math.imul(B, ft) | 0, o = o + Math.imul(B, dt) | 0;
                        var jt = (u + (r = r + Math.imul(j, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(j, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(P, mt) | 0) + (n >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, r = Math.imul(I, ft), n = (n = Math.imul(I, dt)) + Math.imul(C, ft) | 0, o = Math.imul(C, dt);
                        var Pt = (u + (r = r + Math.imul(N, pt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(N, mt) | 0) + Math.imul(B, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(B, mt) | 0) + (n >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
                        var Dt = (u + (r = Math.imul(I, pt)) | 0) + ((8191 & (n = (n = Math.imul(I, mt)) + Math.imul(C, pt) | 0)) << 13) | 0;
                        return u = ((o = Math.imul(C, mt)) + (n >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, h[0] = gt, h[1] = vt, h[2] = yt, h[3] = wt, h[4] = bt, h[5] = Mt, h[6] = _t, h[7] = St, h[8] = Rt, h[9] = Et, h[10] = kt, h[11] = At, h[12] = Tt, h[13] = xt, h[14] = Lt, h[15] = Ot, h[16] = jt, h[17] = Pt, h[18] = Dt, 0 !== u && (h[19] = u, i.length++), i
                    };

                    function v(t, e, i) {
                        i.negative = e.negative ^ t.negative, i.length = t.length + e.length;
                        for (var r = 0, n = 0, o = 0; o < i.length - 1; o++) {
                            var a = n;
                            n = 0;
                            for (var s = 67108863 & r, h = Math.min(o, e.length - 1), u = Math.max(0, o - t.length + 1); u <= h; u++) {
                                var l = o - u,
                                    f = (0 | t.words[l]) * (0 | e.words[u]),
                                    d = 67108863 & f;
                                s = 67108863 & (d = d + s | 0), n += (a = (a = a + (f / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, a &= 67108863
                            }
                            i.words[o] = s, r = a, a = n
                        }
                        return 0 !== r ? i.words[o] = r : i.length--, i._strip()
                    }

                    function y(t, e, i) {
                        return v(t, e, i)
                    }

                    function w(t, e) {
                        this.x = t, this.y = e
                    }
                    Math.imul || (g = m), o.prototype.mulTo = function(t, e) {
                        var i = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? g(this, t, e) : i < 63 ? m(this, t, e) : i < 1024 ? v(this, t, e) : y(this, t, e)
                    }, w.prototype.makeRBT = function(t) {
                        for (var e = new Array(t), i = o.prototype._countBits(t) - 1, r = 0; r < t; r++) e[r] = this.revBin(r, i, t);
                        return e
                    }, w.prototype.revBin = function(t, e, i) {
                        if (0 === t || t === i - 1) return t;
                        for (var r = 0, n = 0; n < e; n++) r |= (1 & t) << e - n - 1, t >>= 1;
                        return r
                    }, w.prototype.permute = function(t, e, i, r, n, o) {
                        for (var a = 0; a < o; a++) r[a] = e[t[a]], n[a] = i[t[a]]
                    }, w.prototype.transform = function(t, e, i, r, n, o) {
                        this.permute(o, t, e, i, r, n);
                        for (var a = 1; a < n; a <<= 1)
                            for (var s = a << 1, h = Math.cos(2 * Math.PI / s), u = Math.sin(2 * Math.PI / s), l = 0; l < n; l += s)
                                for (var f = h, d = u, c = 0; c < a; c++) {
                                    var p = i[l + c],
                                        m = r[l + c],
                                        g = i[l + c + a],
                                        v = r[l + c + a],
                                        y = f * g - d * v;
                                    v = f * v + d * g, g = y, i[l + c] = p + g, r[l + c] = m + v, i[l + c + a] = p - g, r[l + c + a] = m - v, c !== s && (y = h * f - u * d, d = h * d + u * f, f = y)
                                }
                    }, w.prototype.guessLen13b = function(t, e) {
                        var i = 1 | Math.max(e, t),
                            r = 1 & i,
                            n = 0;
                        for (i = i / 2 | 0; i; i >>>= 1) n++;
                        return 1 << n + 1 + r
                    }, w.prototype.conjugate = function(t, e, i) {
                        if (!(i <= 1))
                            for (var r = 0; r < i / 2; r++) {
                                var n = t[r];
                                t[r] = t[i - r - 1], t[i - r - 1] = n, n = e[r], e[r] = -e[i - r - 1], e[i - r - 1] = -n
                            }
                    }, w.prototype.normalize13b = function(t, e) {
                        for (var i = 0, r = 0; r < e / 2; r++) {
                            var n = 8192 * Math.round(t[2 * r + 1] / e) + Math.round(t[2 * r] / e) + i;
                            t[r] = 67108863 & n, i = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, w.prototype.convert13b = function(t, e, i, n) {
                        for (var o = 0, a = 0; a < e; a++) o += 0 | t[a], i[2 * a] = 8191 & o, o >>>= 13, i[2 * a + 1] = 8191 & o, o >>>= 13;
                        for (a = 2 * e; a < n; ++a) i[a] = 0;
                        r(0 === o), r(0 == (-8192 & o))
                    }, w.prototype.stub = function(t) {
                        for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
                        return e
                    }, w.prototype.mulp = function(t, e, i) {
                        var r = 2 * this.guessLen13b(t.length, e.length),
                            n = this.makeRBT(r),
                            o = this.stub(r),
                            a = new Array(r),
                            s = new Array(r),
                            h = new Array(r),
                            u = new Array(r),
                            l = new Array(r),
                            f = new Array(r),
                            d = i.words;
                        d.length = r, this.convert13b(t.words, t.length, a, r), this.convert13b(e.words, e.length, u, r), this.transform(a, o, s, h, r, n), this.transform(u, o, l, f, r, n);
                        for (var c = 0; c < r; c++) {
                            var p = s[c] * l[c] - h[c] * f[c];
                            h[c] = s[c] * f[c] + h[c] * l[c], s[c] = p
                        }
                        return this.conjugate(s, h, r), this.transform(s, h, d, o, r, n), this.conjugate(d, o, r), this.normalize13b(d, r), i.negative = t.negative ^ e.negative, i.length = t.length + e.length, i._strip()
                    }, o.prototype.mul = function(t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                    }, o.prototype.mulf = function(t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), y(this, t, e)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        var e = t < 0;
                        e && (t = -t), r("number" == typeof t), r(t < 67108864);
                        for (var i = 0, n = 0; n < this.length; n++) {
                            var o = (0 | this.words[n]) * t,
                                a = (67108863 & o) + (67108863 & i);
                            i >>= 26, i += o / 67108864 | 0, i += a >>> 26, this.words[n] = 67108863 & a
                        }
                        return 0 !== i && (this.words[n] = i, this.length++), e ? this.ineg() : this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var e = function(t) {
                            for (var e = new Array(t.bitLength()), i = 0; i < e.length; i++) {
                                var r = i / 26 | 0,
                                    n = i % 26;
                                e[i] = t.words[r] >>> n & 1
                            }
                            return e
                        }(t);
                        if (0 === e.length) return new o(1);
                        for (var i = this, r = 0; r < e.length && 0 === e[r]; r++, i = i.sqr());
                        if (++r < e.length)
                            for (var n = i.sqr(); r < e.length; r++, n = n.sqr()) 0 !== e[r] && (i = i.mul(n));
                        return i
                    }, o.prototype.iushln = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e, i = t % 26,
                            n = (t - i) / 26,
                            o = 67108863 >>> 26 - i << 26 - i;
                        if (0 !== i) {
                            var a = 0;
                            for (e = 0; e < this.length; e++) {
                                var s = this.words[e] & o,
                                    h = (0 | this.words[e]) - s << i;
                                this.words[e] = h | a, a = s >>> 26 - i
                            }
                            a && (this.words[e] = a, this.length++)
                        }
                        if (0 !== n) {
                            for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                            for (e = 0; e < n; e++) this.words[e] = 0;
                            this.length += n
                        }
                        return this._strip()
                    }, o.prototype.ishln = function(t) {
                        return r(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, e, i) {
                        var n;
                        r("number" == typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
                        var o = t % 26,
                            a = Math.min((t - o) / 26, this.length),
                            s = 67108863 ^ 67108863 >>> o << o,
                            h = i;
                        if (n -= a, n = Math.max(0, n), h) {
                            for (var u = 0; u < a; u++) h.words[u] = this.words[u];
                            h.length = a
                        }
                        if (0 === a);
                        else if (this.length > a)
                            for (this.length -= a, u = 0; u < this.length; u++) this.words[u] = this.words[u + a];
                        else this.words[0] = 0, this.length = 1;
                        var l = 0;
                        for (u = this.length - 1; u >= 0 && (0 !== l || u >= n); u--) {
                            var f = 0 | this.words[u];
                            this.words[u] = l << 26 - o | f >>> o, l = f & s
                        }
                        return h && 0 !== l && (h.words[h.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, o.prototype.ishrn = function(t, e, i) {
                        return r(0 === this.negative), this.iushrn(t, e, i)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26,
                            i = (t - e) / 26,
                            n = 1 << e;
                        return !(this.length <= i) && !!(this.words[i] & n)
                    }, o.prototype.imaskn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26,
                            i = (t - e) / 26;
                        if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;
                        if (0 !== e && i++, this.length = Math.min(i, this.length), 0 !== e) {
                            var n = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= n
                        }
                        return this._strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                        return this.length = Math.max(this.length, e + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                        return this._strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, e, i) {
                        var n, o, a = t.length + i;
                        this._expand(a);
                        var s = 0;
                        for (n = 0; n < t.length; n++) {
                            o = (0 | this.words[n + i]) + s;
                            var h = (0 | t.words[n]) * e;
                            s = ((o -= 67108863 & h) >> 26) - (h / 67108864 | 0), this.words[n + i] = 67108863 & o
                        }
                        for (; n < this.length - i; n++) s = (o = (0 | this.words[n + i]) + s) >> 26, this.words[n + i] = 67108863 & o;
                        if (0 === s) return this._strip();
                        for (r(-1 === s), s = 0, n = 0; n < this.length; n++) s = (o = -(0 | this.words[n]) + s) >> 26, this.words[n] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, o.prototype._wordDiv = function(t, e) {
                        var i = (this.length, t.length),
                            r = this.clone(),
                            n = t,
                            a = 0 | n.words[n.length - 1];
                        0 !== (i = 26 - this._countBits(a)) && (n = n.ushln(i), r.iushln(i), a = 0 | n.words[n.length - 1]);
                        var s, h = r.length - n.length;
                        if ("mod" !== e) {
                            (s = new o(null)).length = h + 1, s.words = new Array(s.length);
                            for (var u = 0; u < s.length; u++) s.words[u] = 0
                        }
                        var l = r.clone()._ishlnsubmul(n, 1, h);
                        0 === l.negative && (r = l, s && (s.words[h] = 1));
                        for (var f = h - 1; f >= 0; f--) {
                            var d = 67108864 * (0 | r.words[n.length + f]) + (0 | r.words[n.length + f - 1]);
                            for (d = Math.min(d / a | 0, 67108863), r._ishlnsubmul(n, d, f); 0 !== r.negative;) d--, r.negative = 0, r._ishlnsubmul(n, 1, f), r.isZero() || (r.negative ^= 1);
                            s && (s.words[f] = d)
                        }
                        return s && s._strip(), r._strip(), "div" !== e && 0 !== i && r.iushrn(i), {
                            div: s || null,
                            mod: r
                        }
                    }, o.prototype.divmod = function(t, e, i) {
                        return r(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), "mod" !== e && (n = s.div.neg()), "div" !== e && (a = s.mod.neg(), i && 0 !== a.negative && a.iadd(t)), {
                            div: n,
                            mod: a
                        }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), "mod" !== e && (n = s.div.neg()), {
                            div: n,
                            mod: s.mod
                        }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), "div" !== e && (a = s.mod.neg(), i && 0 !== a.negative && a.isub(t)), {
                            div: s.div,
                            mod: a
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === e ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === e ? {
                            div: null,
                            mod: new o(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modrn(t.words[0]))
                        } : this._wordDiv(t, e);
                        var n, a, s
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var e = this.divmod(t);
                        if (e.mod.isZero()) return e.div;
                        var i = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                            r = t.ushrn(1),
                            n = t.andln(1),
                            o = i.cmp(r);
                        return o < 0 || 1 === n && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }, o.prototype.modrn = function(t) {
                        var e = t < 0;
                        e && (t = -t), r(t <= 67108863);
                        for (var i = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--) n = (i * n + (0 | this.words[o])) % t;
                        return e ? -n : n
                    }, o.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, o.prototype.idivn = function(t) {
                        var e = t < 0;
                        e && (t = -t), r(t <= 67108863);
                        for (var i = 0, n = this.length - 1; n >= 0; n--) {
                            var o = (0 | this.words[n]) + 67108864 * i;
                            this.words[n] = o / t | 0, i = o % t
                        }
                        return this._strip(), e ? this.ineg() : this
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var e = this,
                            i = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var n = new o(1), a = new o(0), s = new o(0), h = new o(1), u = 0; e.isEven() && i.isEven();) e.iushrn(1), i.iushrn(1), ++u;
                        for (var l = i.clone(), f = e.clone(); !e.isZero();) {
                            for (var d = 0, c = 1; 0 == (e.words[0] & c) && d < 26; ++d, c <<= 1);
                            if (d > 0)
                                for (e.iushrn(d); d-- > 0;)(n.isOdd() || a.isOdd()) && (n.iadd(l), a.isub(f)), n.iushrn(1), a.iushrn(1);
                            for (var p = 0, m = 1; 0 == (i.words[0] & m) && p < 26; ++p, m <<= 1);
                            if (p > 0)
                                for (i.iushrn(p); p-- > 0;)(s.isOdd() || h.isOdd()) && (s.iadd(l), h.isub(f)), s.iushrn(1), h.iushrn(1);
                            e.cmp(i) >= 0 ? (e.isub(i), n.isub(s), a.isub(h)) : (i.isub(e), s.isub(n), h.isub(a))
                        }
                        return {
                            a: s,
                            b: h,
                            gcd: i.iushln(u)
                        }
                    }, o.prototype._invmp = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var e = this,
                            i = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var n, a = new o(1), s = new o(0), h = i.clone(); e.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                            for (var u = 0, l = 1; 0 == (e.words[0] & l) && u < 26; ++u, l <<= 1);
                            if (u > 0)
                                for (e.iushrn(u); u-- > 0;) a.isOdd() && a.iadd(h), a.iushrn(1);
                            for (var f = 0, d = 1; 0 == (i.words[0] & d) && f < 26; ++f, d <<= 1);
                            if (f > 0)
                                for (i.iushrn(f); f-- > 0;) s.isOdd() && s.iadd(h), s.iushrn(1);
                            e.cmp(i) >= 0 ? (e.isub(i), a.isub(s)) : (i.isub(e), s.isub(a))
                        }
                        return (n = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && n.iadd(t), n
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var e = this.clone(),
                            i = t.clone();
                        e.negative = 0, i.negative = 0;
                        for (var r = 0; e.isEven() && i.isEven(); r++) e.iushrn(1), i.iushrn(1);
                        for (;;) {
                            for (; e.isEven();) e.iushrn(1);
                            for (; i.isEven();) i.iushrn(1);
                            var n = e.cmp(i);
                            if (n < 0) {
                                var o = e;
                                e = i, i = o
                            } else if (0 === n || 0 === i.cmpn(1)) break;
                            e.isub(i)
                        }
                        return i.iushln(r)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        r("number" == typeof t);
                        var e = t % 26,
                            i = (t - e) / 26,
                            n = 1 << e;
                        if (this.length <= i) return this._expand(i + 1), this.words[i] |= n, this;
                        for (var o = n, a = i; 0 !== o && a < this.length; a++) {
                            var s = 0 | this.words[a];
                            o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
                        }
                        return 0 !== o && (this.words[a] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var e, i = t < 0;
                        if (0 !== this.negative && !i) return -1;
                        if (0 === this.negative && i) return 1;
                        if (this._strip(), this.length > 1) e = 1;
                        else {
                            i && (t = -t), r(t <= 67108863, "Number is too big");
                            var n = 0 | this.words[0];
                            e = n === t ? 0 : n < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -e : e
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var e = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -e : e
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var e = 0, i = this.length - 1; i >= 0; i--) {
                            var r = 0 | this.words[i],
                                n = 0 | t.words[i];
                            if (r !== n) {
                                r < n ? e = -1 : r > n && (e = 1);
                                break
                            }
                        }
                        return e
                    }, o.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, o.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, o.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, o.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, o.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, o.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, o.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, o.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, o.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, o.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, o.red = function(t) {
                        return new k(t)
                    }, o.prototype.toRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var b = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function M(t, e) {
                        this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function _() {
                        M.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function S() {
                        M.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function R() {
                        M.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function E() {
                        M.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function k(t) {
                        if ("string" == typeof t) {
                            var e = o._prime(t);
                            this.m = e.p, this.prime = e
                        } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function A(t) {
                        k.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    M.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, M.prototype.ireduce = function(t) {
                        var e, i = t;
                        do {
                            this.split(i, this.tmp), e = (i = (i = this.imulK(i)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var r = e < this.n ? -1 : i.ucmp(this.p);
                        return 0 === r ? (i.words[0] = 0, i.length = 1) : r > 0 ? i.isub(this.p) : void 0 !== i.strip ? i.strip() : i._strip(), i
                    }, M.prototype.split = function(t, e) {
                        t.iushrn(this.n, 0, e)
                    }, M.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, n(_, M), _.prototype.split = function(t, e) {
                        for (var i = Math.min(t.length, 9), r = 0; r < i; r++) e.words[r] = t.words[r];
                        if (e.length = i, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var n = t.words[9];
                        for (e.words[e.length++] = 4194303 & n, r = 10; r < t.length; r++) {
                            var o = 0 | t.words[r];
                            t.words[r - 10] = (4194303 & o) << 4 | n >>> 22, n = o
                        }
                        n >>>= 22, t.words[r - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, _.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var r = 0 | t.words[i];
                            e += 977 * r, t.words[i] = 67108863 & e, e = 64 * r + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, n(S, M), n(R, M), n(E, M), E.prototype.imulK = function(t) {
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var r = 19 * (0 | t.words[i]) + e,
                                n = 67108863 & r;
                            r >>>= 26, t.words[i] = n, e = r
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, o._prime = function(t) {
                        if (b[t]) return b[t];
                        var e;
                        if ("k256" === t) e = new _;
                        else if ("p224" === t) e = new S;
                        else if ("p192" === t) e = new R;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new E
                        }
                        return b[t] = e, e
                    }, k.prototype._verify1 = function(t) {
                        r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                    }, k.prototype._verify2 = function(t, e) {
                        r(0 == (t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
                    }, k.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (l(t, t.umod(this.m)._forceRed(this)), t)
                    }, k.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, k.prototype.add = function(t, e) {
                        this._verify2(t, e);
                        var i = t.add(e);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this)
                    }, k.prototype.iadd = function(t, e) {
                        this._verify2(t, e);
                        var i = t.iadd(e);
                        return i.cmp(this.m) >= 0 && i.isub(this.m), i
                    }, k.prototype.sub = function(t, e) {
                        this._verify2(t, e);
                        var i = t.sub(e);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this)
                    }, k.prototype.isub = function(t, e) {
                        this._verify2(t, e);
                        var i = t.isub(e);
                        return i.cmpn(0) < 0 && i.iadd(this.m), i
                    }, k.prototype.shl = function(t, e) {
                        return this._verify1(t), this.imod(t.ushln(e))
                    }, k.prototype.imul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.imul(e))
                    }, k.prototype.mul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.mul(e))
                    }, k.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, k.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, k.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var e = this.m.andln(3);
                        if (r(e % 2 == 1), 3 === e) {
                            var i = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, i)
                        }
                        for (var n = this.m.subn(1), a = 0; !n.isZero() && 0 === n.andln(1);) a++, n.iushrn(1);
                        r(!n.isZero());
                        var s = new o(1).toRed(this),
                            h = s.redNeg(),
                            u = this.m.subn(1).iushrn(1),
                            l = this.m.bitLength();
                        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, u).cmp(h);) l.redIAdd(h);
                        for (var f = this.pow(l, n), d = this.pow(t, n.addn(1).iushrn(1)), c = this.pow(t, n), p = a; 0 !== c.cmp(s);) {
                            for (var m = c, g = 0; 0 !== m.cmp(s); g++) m = m.redSqr();
                            r(g < p);
                            var v = this.pow(f, new o(1).iushln(p - g - 1));
                            d = d.redMul(v), f = v.redSqr(), c = c.redMul(f), p = g
                        }
                        return d
                    }, k.prototype.invm = function(t) {
                        var e = t._invmp(this.m);
                        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                    }, k.prototype.pow = function(t, e) {
                        if (e.isZero()) return new o(1).toRed(this);
                        if (0 === e.cmpn(1)) return t.clone();
                        var i = new Array(16);
                        i[0] = new o(1).toRed(this), i[1] = t;
                        for (var r = 2; r < i.length; r++) i[r] = this.mul(i[r - 1], t);
                        var n = i[0],
                            a = 0,
                            s = 0,
                            h = e.bitLength() % 26;
                        for (0 === h && (h = 26), r = e.length - 1; r >= 0; r--) {
                            for (var u = e.words[r], l = h - 1; l >= 0; l--) {
                                var f = u >> l & 1;
                                n !== i[0] && (n = this.sqr(n)), 0 !== f || 0 !== a ? (a <<= 1, a |= f, (4 === ++s || 0 === r && 0 === l) && (n = this.mul(n, i[a]), s = 0, a = 0)) : s = 0
                            }
                            h = 26
                        }
                        return n
                    }, k.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, k.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null, e
                    }, o.mont = function(t) {
                        return new A(t)
                    }, n(A, k), A.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, A.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null, e
                    }, A.prototype.imul = function(t, e) {
                        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var i = t.imul(e),
                            r = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = i.isub(r).iushrn(this.shift),
                            o = n;
                        return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)), o._forceRed(this)
                    }, A.prototype.mul = function(t, e) {
                        if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                        var i = t.mul(e),
                            r = i.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            n = i.isub(r).iushrn(this.shift),
                            a = n;
                        return n.cmp(this.m) >= 0 ? a = n.isub(this.m) : n.cmpn(0) < 0 && (a = n.iadd(this.m)), a._forceRed(this)
                    }, A.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, i(81)(t))
        },
        1766: function(t) {
            t.exports = JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}')
        },
        2732: function(t, e, i) {
            "use strict";
            var r = i(84),
                n = i(21).Buffer;
            t.exports = function(t) {
                function e(e) {
                    var i = e.slice(0, -4),
                        r = e.slice(-4),
                        n = t(i);
                    if (!(r[0] ^ n[0] | r[1] ^ n[1] | r[2] ^ n[2] | r[3] ^ n[3])) return i
                }
                return {
                    encode: function(e) {
                        var i = t(e);
                        return r.encode(n.concat([e, i], e.length + 4))
                    },
                    decode: function(t) {
                        var i = e(r.decode(t));
                        if (!i) throw new Error("Invalid checksum");
                        return i
                    },
                    decodeUnsafe: function(t) {
                        var i = r.decodeUnsafe(t);
                        if (i) return e(i)
                    }
                }
            }
        },
        3196: function(t, e, i) {
            t.exports = i(1744)
        },
        3215: function(t, e, i) {
            var r = i(21).Buffer,
                n = i(101),
                o = i(3216),
                a = i(18),
                s = i(3222),
                h = i(3233),
                u = i(1744);

            function l(t) {
                o.Writable.call(this);
                var e = u[t];
                if (!e) throw new Error("Unknown message digest");
                this._hashType = e.hash, this._hash = n(e.hash), this._tag = e.id, this._signType = e.sign
            }

            function f(t) {
                o.Writable.call(this);
                var e = u[t];
                if (!e) throw new Error("Unknown message digest");
                this._hash = n(e.hash), this._tag = e.id, this._signType = e.sign
            }

            function d(t) {
                return new l(t)
            }

            function c(t) {
                return new f(t)
            }
            Object.keys(u).forEach((function(t) {
                u[t].id = r.from(u[t].id, "hex"), u[t.toLowerCase()] = u[t]
            })), a(l, o.Writable), l.prototype._write = function(t, e, i) {
                this._hash.update(t), i()
            }, l.prototype.update = function(t, e) {
                return "string" == typeof t && (t = r.from(t, e)), this._hash.update(t), this
            }, l.prototype.sign = function(t, e) {
                this.end();
                var i = this._hash.digest(),
                    r = s(i, t, this._hashType, this._signType, this._tag);
                return e ? r.toString(e) : r
            }, a(f, o.Writable), f.prototype._write = function(t, e, i) {
                this._hash.update(t), i()
            }, f.prototype.update = function(t, e) {
                return "string" == typeof t && (t = r.from(t, e)), this._hash.update(t), this
            }, f.prototype.verify = function(t, e, i) {
                "string" == typeof e && (e = r.from(e, i)), this.end();
                var n = this._hash.digest();
                return h(e, n, t, this._signType, this._tag)
            }, t.exports = {
                Sign: d,
                Verify: c,
                createSign: d,
                createVerify: c
            }
        },
        3216: function(t, e, i) {
            (e = t.exports = i(1754)).Stream = e, e.Readable = e, e.Writable = i(1758), e.Duplex = i(407), e.Transform = i(1759), e.PassThrough = i(3220), e.finished = i(1033), e.pipeline = i(3221)
        },
        3217: function(t, e, i) {
            "use strict";

            function r(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, r)
                }
                return i
            }

            function n(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(i), !0).forEach((function(e) {
                        o(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function o(t, e, i) {
                return (e = s(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function a(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, s(r.key), r)
                }
            }

            function s(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || null === t) return t;
                    var i = t[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var r = i.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : String(e)
            }
            var h = i(12).Buffer,
                u = i(43).inspect,
                l = u && u.custom || "inspect";
            t.exports = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.head = null, this.tail = null, this.length = 0
                }
                var e, i, r;
                return e = t, (i = [{
                    key: "push",
                    value: function(t) {
                        var e = {
                            data: t,
                            next: null
                        };
                        this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(t) {
                        var e = {
                            data: t,
                            next: this.head
                        };
                        0 === this.length && (this.tail = e), this.head = e, ++this.length
                    }
                }, {
                    key: "shift",
                    value: function() {
                        if (0 !== this.length) {
                            var t = this.head.data;
                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.head = this.tail = null, this.length = 0
                    }
                }, {
                    key: "join",
                    value: function(t) {
                        if (0 === this.length) return "";
                        for (var e = this.head, i = "" + e.data; e = e.next;) i += t + e.data;
                        return i
                    }
                }, {
                    key: "concat",
                    value: function(t) {
                        if (0 === this.length) return h.alloc(0);
                        for (var e, i, r, n = h.allocUnsafe(t >>> 0), o = this.head, a = 0; o;) e = o.data, i = n, r = a, h.prototype.copy.call(e, i, r), a += o.data.length, o = o.next;
                        return n
                    }
                }, {
                    key: "consume",
                    value: function(t, e) {
                        var i;
                        return t < this.head.data.length ? (i = this.head.data.slice(0, t), this.head.data = this.head.data.slice(t)) : i = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t), i
                    }
                }, {
                    key: "first",
                    value: function() {
                        return this.head.data
                    }
                }, {
                    key: "_getString",
                    value: function(t) {
                        var e = this.head,
                            i = 1,
                            r = e.data;
                        for (t -= r.length; e = e.next;) {
                            var n = e.data,
                                o = t > n.length ? n.length : t;
                            if (o === n.length ? r += n : r += n.slice(0, t), 0 == (t -= o)) {
                                o === n.length ? (++i, e.next ? this.head = e.next : this.head = this.tail = null) : (this.head = e, e.data = n.slice(o));
                                break
                            }++i
                        }
                        return this.length -= i, r
                    }
                }, {
                    key: "_getBuffer",
                    value: function(t) {
                        var e = h.allocUnsafe(t),
                            i = this.head,
                            r = 1;
                        for (i.data.copy(e), t -= i.data.length; i = i.next;) {
                            var n = i.data,
                                o = t > n.length ? n.length : t;
                            if (n.copy(e, e.length - t, 0, o), 0 == (t -= o)) {
                                o === n.length ? (++r, i.next ? this.head = i.next : this.head = this.tail = null) : (this.head = i, i.data = n.slice(o));
                                break
                            }++r
                        }
                        return this.length -= r, e
                    }
                }, {
                    key: l,
                    value: function(t, e) {
                        return u(this, n(n({}, e), {}, {
                            depth: 0,
                            customInspect: !1
                        }))
                    }
                }]) && a(e.prototype, i), r && a(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }()
        },
        3218: function(t, e, i) {
            "use strict";
            var r;

            function n(t, e, i) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var r = i.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            var o = i(1033),
                a = Symbol("lastResolve"),
                s = Symbol("lastReject"),
                h = Symbol("error"),
                u = Symbol("ended"),
                l = Symbol("lastPromise"),
                f = Symbol("handlePromise"),
                d = Symbol("stream");

            function c(t, e) {
                return {
                    value: t,
                    done: e
                }
            }

            function p(t) {
                var e = t[a];
                if (null !== e) {
                    var i = t[d].read();
                    null !== i && (t[l] = null, t[a] = null, t[s] = null, e(c(i, !1)))
                }
            }

            function m(t) {
                process.nextTick(p, t)
            }
            var g = Object.getPrototypeOf((function() {})),
                v = Object.setPrototypeOf((n(r = {
                    get stream() {
                        return this[d]
                    },
                    next: function() {
                        var t = this,
                            e = this[h];
                        if (null !== e) return Promise.reject(e);
                        if (this[u]) return Promise.resolve(c(void 0, !0));
                        if (this[d].destroyed) return new Promise((function(e, i) {
                            process.nextTick((function() {
                                t[h] ? i(t[h]) : e(c(void 0, !0))
                            }))
                        }));
                        var i, r = this[l];
                        if (r) i = new Promise(function(t, e) {
                            return function(i, r) {
                                t.then((function() {
                                    e[u] ? i(c(void 0, !0)) : e[f](i, r)
                                }), r)
                            }
                        }(r, this));
                        else {
                            var n = this[d].read();
                            if (null !== n) return Promise.resolve(c(n, !1));
                            i = new Promise(this[f])
                        }
                        return this[l] = i, i
                    }
                }, Symbol.asyncIterator, (function() {
                    return this
                })), n(r, "return", (function() {
                    var t = this;
                    return new Promise((function(e, i) {
                        t[d].destroy(null, (function(t) {
                            t ? i(t) : e(c(void 0, !0))
                        }))
                    }))
                })), r), g);
            t.exports = function(t) {
                var e, i = Object.create(v, (n(e = {}, d, {
                    value: t,
                    writable: !0
                }), n(e, a, {
                    value: null,
                    writable: !0
                }), n(e, s, {
                    value: null,
                    writable: !0
                }), n(e, h, {
                    value: null,
                    writable: !0
                }), n(e, u, {
                    value: t._readableState.endEmitted,
                    writable: !0
                }), n(e, f, {
                    value: function(t, e) {
                        var r = i[d].read();
                        r ? (i[l] = null, i[a] = null, i[s] = null, t(c(r, !1))) : (i[a] = t, i[s] = e)
                    },
                    writable: !0
                }), e));
                return i[l] = null, o(t, (function(t) {
                    if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                        var e = i[s];
                        return null !== e && (i[l] = null, i[a] = null, i[s] = null, e(t)), void(i[h] = t)
                    }
                    var r = i[a];
                    null !== r && (i[l] = null, i[a] = null, i[s] = null, r(c(void 0, !0))), i[u] = !0
                })), t.on("readable", m.bind(null, i)), i
            }
        },
        3219: function(t, e) {
            t.exports = function() {
                throw new Error("Readable.from is not available in the browser")
            }
        },
        3220: function(t, e, i) {
            "use strict";
            t.exports = n;
            var r = i(1759);

            function n(t) {
                if (!(this instanceof n)) return new n(t);
                r.call(this, t)
            }
            i(18)(n, r), n.prototype._transform = function(t, e, i) {
                i(null, t)
            }
        },
        3221: function(t, e, i) {
            "use strict";
            var r;
            var n = i(406).codes,
                o = n.ERR_MISSING_ARGS,
                a = n.ERR_STREAM_DESTROYED;

            function s(t) {
                if (t) throw t
            }

            function h(t, e, n, o) {
                o = function(t) {
                    var e = !1;
                    return function() {
                        e || (e = !0, t.apply(void 0, arguments))
                    }
                }(o);
                var s = !1;
                t.on("close", (function() {
                    s = !0
                })), void 0 === r && (r = i(1033)), r(t, {
                    readable: e,
                    writable: n
                }, (function(t) {
                    if (t) return o(t);
                    s = !0, o()
                }));
                var h = !1;
                return function(e) {
                    if (!s && !h) return h = !0,
                        function(t) {
                            return t.setHeader && "function" == typeof t.abort
                        }(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void o(e || new a("pipe"))
                }
            }

            function u(t) {
                t()
            }

            function l(t, e) {
                return t.pipe(e)
            }

            function f(t) {
                return t.length ? "function" != typeof t[t.length - 1] ? s : t.pop() : s
            }
            t.exports = function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                var r, n = f(e);
                if (Array.isArray(e[0]) && (e = e[0]), e.length < 2) throw new o("streams");
                var a = e.map((function(t, i) {
                    var o = i < e.length - 1;
                    return h(t, o, i > 0, (function(t) {
                        r || (r = t), t && a.forEach(u), o || (a.forEach(u), n(r))
                    }))
                }));
                return e.reduce(l)
            }
        },
        3222: function(t, e, i) {
            var r = i(21).Buffer,
                n = i(320),
                o = i(1034),
                a = i(85).ec,
                s = i(1760),
                h = i(612),
                u = i(1766);

            function l(t, e, i, o) {
                if ((t = r.from(t.toArray())).length < e.byteLength()) {
                    var a = r.alloc(e.byteLength() - t.length);
                    t = r.concat([a, t])
                }
                var s = i.length,
                    h = function(t, e) {
                        t = (t = f(t, e)).mod(e);
                        var i = r.from(t.toArray());
                        if (i.length < e.byteLength()) {
                            var n = r.alloc(e.byteLength() - i.length);
                            i = r.concat([n, i])
                        }
                        return i
                    }(i, e),
                    u = r.alloc(s);
                u.fill(1);
                var l = r.alloc(s);
                return l = n(o, l).update(u).update(r.from([0])).update(t).update(h).digest(), u = n(o, l).update(u).digest(), {
                    k: l = n(o, l).update(u).update(r.from([1])).update(t).update(h).digest(),
                    v: u = n(o, l).update(u).digest()
                }
            }

            function f(t, e) {
                var i = new s(t),
                    r = (t.length << 3) - e.bitLength();
                return r > 0 && i.ishrn(r), i
            }

            function d(t, e, i) {
                var o, a;
                do {
                    for (o = r.alloc(0); 8 * o.length < t.bitLength();) e.v = n(i, e.k).update(e.v).digest(), o = r.concat([o, e.v]);
                    a = f(o, t), e.k = n(i, e.k).update(e.v).update(r.from([0])).digest(), e.v = n(i, e.k).update(e.v).digest()
                } while (-1 !== a.cmp(t));
                return a
            }

            function c(t, e, i, r) {
                return t.toRed(s.mont(i)).redPow(e).fromRed().mod(r)
            }
            t.exports = function(t, e, i, n, p) {
                var m = h(e);
                if (m.curve) {
                    if ("ecdsa" !== n && "ecdsa/rsa" !== n) throw new Error("wrong private key type");
                    return function(t, e) {
                        var i = u[e.curve.join(".")];
                        if (!i) throw new Error("unknown curve " + e.curve.join("."));
                        var n = new a(i).keyFromPrivate(e.privateKey).sign(t);
                        return r.from(n.toDER())
                    }(t, m)
                }
                if ("dsa" === m.type) {
                    if ("dsa" !== n) throw new Error("wrong private key type");
                    return function(t, e, i) {
                        var n, o = e.params.priv_key,
                            a = e.params.p,
                            h = e.params.q,
                            u = e.params.g,
                            p = new s(0),
                            m = f(t, h).mod(h),
                            g = !1,
                            v = l(o, h, t, i);
                        for (; !1 === g;) n = d(h, v, i), p = c(u, n, a, h), 0 === (g = n.invm(h).imul(m.add(o.mul(p))).mod(h)).cmpn(0) && (g = !1, p = new s(0));
                        return function(t, e) {
                            t = t.toArray(), e = e.toArray(), 128 & t[0] && (t = [0].concat(t));
                            128 & e[0] && (e = [0].concat(e));
                            var i = [48, t.length + e.length + 4, 2, t.length];
                            return i = i.concat(t, [2, e.length], e), r.from(i)
                        }(p, g)
                    }(t, m, i)
                }
                if ("rsa" !== n && "ecdsa/rsa" !== n) throw new Error("wrong private key type");
                t = r.concat([p, t]);
                for (var g = m.modulus.byteLength(), v = [0, 1]; t.length + v.length + 1 < g;) v.push(255);
                v.push(0);
                for (var y = -1; ++y < t.length;) v.push(t[y]);
                return o(v, m)
            }, t.exports.getKey = l, t.exports.makeKey = d
        },
        3233: function(t, e, i) {
            var r = i(21).Buffer,
                n = i(1760),
                o = i(85).ec,
                a = i(612),
                s = i(1766);

            function h(t, e) {
                if (t.cmpn(0) <= 0) throw new Error("invalid sig");
                if (t.cmp(e) >= e) throw new Error("invalid sig")
            }
            t.exports = function(t, e, i, u, l) {
                var f = a(i);
                if ("ec" === f.type) {
                    if ("ecdsa" !== u && "ecdsa/rsa" !== u) throw new Error("wrong public key type");
                    return function(t, e, i) {
                        var r = s[i.data.algorithm.curve.join(".")];
                        if (!r) throw new Error("unknown curve " + i.data.algorithm.curve.join("."));
                        var n = new o(r),
                            a = i.data.subjectPrivateKey.data;
                        return n.verify(e, t, a)
                    }(t, e, f)
                }
                if ("dsa" === f.type) {
                    if ("dsa" !== u) throw new Error("wrong public key type");
                    return function(t, e, i) {
                        var r = i.data.p,
                            o = i.data.q,
                            s = i.data.g,
                            u = i.data.pub_key,
                            l = a.signature.decode(t, "der"),
                            f = l.s,
                            d = l.r;
                        h(f, o), h(d, o);
                        var c = n.mont(r),
                            p = f.invm(o);
                        return 0 === s.toRed(c).redPow(new n(e).mul(p).mod(o)).fromRed().mul(u.toRed(c).redPow(d.mul(p).mod(o)).fromRed()).mod(r).mod(o).cmp(d)
                    }(t, e, f)
                }
                if ("rsa" !== u && "ecdsa/rsa" !== u) throw new Error("wrong public key type");
                e = r.concat([l, e]);
                for (var d = f.modulus.byteLength(), c = [1], p = 0; e.length + c.length + 2 < d;) c.push(255), p++;
                c.push(0);
                for (var m = -1; ++m < e.length;) c.push(e[m]);
                c = r.from(c);
                var g = n.mont(f.modulus);
                t = (t = new n(t).toRed(g)).redPow(new n(f.publicExponent)), t = r.from(t.fromRed().toArray());
                var v = p < 8 ? 1 : 0;
                for (d = Math.min(t.length, c.length), t.length !== c.length && (v = 1), m = -1; ++m < d;) v |= t[m] ^ c[m];
                return 0 === v
            }
        },
        3436: function(t, e) {
            ! function() {
                "use strict";
                t.exports = function(t) {
                    return (t instanceof Buffer ? t : Buffer.from(t.toString(), "binary")).toString("base64")
                }
            }()
        },
        406: function(t, e, i) {
            "use strict";
            var r = {};

            function n(t, e, i) {
                i || (i = Error);
                var n = function(t) {
                    var i, r;

                    function n(i, r, n) {
                        return t.call(this, function(t, i, r) {
                            return "string" == typeof e ? e : e(t, i, r)
                        }(i, r, n)) || this
                    }
                    return r = t, (i = n).prototype = Object.create(r.prototype), i.prototype.constructor = i, i.__proto__ = r, n
                }(i);
                n.prototype.name = i.name, n.prototype.code = t, r[t] = n
            }

            function o(t, e) {
                if (Array.isArray(t)) {
                    var i = t.length;
                    return t = t.map((function(t) {
                        return String(t)
                    })), i > 2 ? "one of ".concat(e, " ").concat(t.slice(0, i - 1).join(", "), ", or ") + t[i - 1] : 2 === i ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0])
                }
                return "of ".concat(e, " ").concat(String(t))
            }
            n("ERR_INVALID_OPT_VALUE", (function(t, e) {
                return 'The value "' + e + '" is invalid for option "' + t + '"'
            }), TypeError), n("ERR_INVALID_ARG_TYPE", (function(t, e, i) {
                var r, n, a, s;
                if ("string" == typeof e && (n = "not ", e.substr(!a || a < 0 ? 0 : +a, n.length) === n) ? (r = "must not be", e = e.replace(/^not /, "")) : r = "must be", function(t, e, i) {
                        return (void 0 === i || i > t.length) && (i = t.length), t.substring(i - e.length, i) === e
                    }(t, " argument")) s = "The ".concat(t, " ").concat(r, " ").concat(o(e, "type"));
                else {
                    var h = function(t, e, i) {
                        return "number" != typeof i && (i = 0), !(i + e.length > t.length) && -1 !== t.indexOf(e, i)
                    }(t, ".") ? "property" : "argument";
                    s = 'The "'.concat(t, '" ').concat(h, " ").concat(r, " ").concat(o(e, "type"))
                }
                return s += ". Received type ".concat(typeof i)
            }), TypeError), n("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), n("ERR_METHOD_NOT_IMPLEMENTED", (function(t) {
                return "The " + t + " method is not implemented"
            })), n("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), n("ERR_STREAM_DESTROYED", (function(t) {
                return "Cannot call " + t + " after a stream was destroyed"
            })), n("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), n("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), n("ERR_STREAM_WRITE_AFTER_END", "write after end"), n("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), n("ERR_UNKNOWN_ENCODING", (function(t) {
                return "Unknown encoding: " + t
            }), TypeError), n("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t.exports.codes = r
        },
        407: function(t, e, i) {
            "use strict";
            var r = Object.keys || function(t) {
                var e = [];
                for (var i in t) e.push(i);
                return e
            };
            t.exports = u;
            var n = i(1754),
                o = i(1758);
            i(18)(u, n);
            for (var a = r(o.prototype), s = 0; s < a.length; s++) {
                var h = a[s];
                u.prototype[h] || (u.prototype[h] = o.prototype[h])
            }

            function u(t) {
                if (!(this instanceof u)) return new u(t);
                n.call(this, t), o.call(this, t), this.allowHalfOpen = !0, t && (!1 === t.readable && (this.readable = !1), !1 === t.writable && (this.writable = !1), !1 === t.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", l)))
            }

            function l() {
                this._writableState.ended || process.nextTick(f, this)
            }

            function f(t) {
                t.end()
            }
            Object.defineProperty(u.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(u.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }), Object.defineProperty(u.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }), Object.defineProperty(u.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                },
                set: function(t) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
                }
            })
        },
        84: function(t, e, i) {
            var r = i(939);
            t.exports = r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        }
    }
]);