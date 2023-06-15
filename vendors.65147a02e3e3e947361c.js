(window.webpackJsonp = window.webpackJsonp || []).push([
    [215], {
        1030: function(e, t, r) {
            "use strict";
            var n = r(404).codes.ERR_STREAM_PREMATURE_CLOSE;

            function a() {}
            e.exports = function e(t, r, s) {
                if ("function" == typeof r) return e(t, null, r);
                r || (r = {}), s = function(e) {
                    var t = !1;
                    return function() {
                        if (!t) {
                            t = !0;
                            for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                            e.apply(this, n)
                        }
                    }
                }(s || a);
                var i = r.readable || !1 !== r.readable && t.readable,
                    o = r.writable || !1 !== r.writable && t.writable,
                    c = function() {
                        t.writable || _()
                    },
                    h = t._writableState && t._writableState.finished,
                    _ = function() {
                        o = !1, h = !0, i || s.call(t)
                    },
                    u = t._readableState && t._readableState.endEmitted,
                    l = function() {
                        i = !1, u = !0, o || s.call(t)
                    },
                    p = function(e) {
                        s.call(t, e)
                    },
                    y = function() {
                        var e;
                        return i && !u ? (t._readableState && t._readableState.ended || (e = new n), s.call(t, e)) : o && !h ? (t._writableState && t._writableState.ended || (e = new n), s.call(t, e)) : void 0
                    },
                    d = function() {
                        t.req.on("finish", _)
                    };
                return ! function(e) {
                        return e.setHeader && "function" == typeof e.abort
                    }(t) ? o && !t._writableState && (t.on("end", c), t.on("close", c)) : (t.on("complete", _), t.on("abort", y), t.req ? d() : t.on("request", d)), t.on("end", l), t.on("finish", _), !1 !== r.error && t.on("error", p), t.on("close", y),
                    function() {
                        t.removeListener("complete", _), t.removeListener("abort", y), t.removeListener("request", d), t.req && t.req.removeListener("finish", _), t.removeListener("end", c), t.removeListener("close", c), t.removeListener("finish", _), t.removeListener("end", l), t.removeListener("error", p), t.removeListener("close", y)
                    }
            }
        },
        1734: function(e, t, r) {
            (t = e.exports = r(1735)).Stream = t, t.Readable = t, t.Writable = r(1739), t.Duplex = r(405), t.Transform = r(1740), t.PassThrough = r(3161), t.finished = r(1030), t.pipeline = r(3162)
        },
        1735: function(e, t, r) {
            "use strict";
            var n;
            e.exports = S, S.ReadableState = E;
            r(69).EventEmitter;
            var a = function(e, t) {
                    return e.listeners(t).length
                },
                s = r(1736),
                i = r(12).Buffer,
                o = ("undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {};
            var c, h = r(43);
            c = h && h.debuglog ? h.debuglog("stream") : function() {};
            var _, u, l, p = r(3158),
                y = r(1737),
                d = r(1738).getHighWaterMark,
                f = r(404).codes,
                v = f.ERR_INVALID_ARG_TYPE,
                b = f.ERR_STREAM_PUSH_AFTER_EOF,
                g = f.ERR_METHOD_NOT_IMPLEMENTED,
                m = f.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            r(18)(S, s);
            var w = y.errorOrDestroy,
                k = ["error", "close", "destroy", "pause", "resume"];

            function E(e, t, a) {
                n = n || r(405), e = e || {}, "boolean" != typeof a && (a = t instanceof n), this.objectMode = !!e.objectMode, a && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = d(this, e, "readableHighWaterMark", a), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (_ || (_ = r(283).StringDecoder), this.decoder = new _(e.encoding), this.encoding = e.encoding)
            }

            function S(e) {
                if (n = n || r(405), !(this instanceof S)) return new S(e);
                var t = this instanceof n;
                this._readableState = new E(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), s.call(this)
            }

            function x(e, t, r, n, a) {
                c("readableAddChunk", t);
                var s, h = e._readableState;
                if (null === t) h.reading = !1,
                    function(e, t) {
                        if (c("onEofChunk"), t.ended) return;
                        if (t.decoder) {
                            var r = t.decoder.end();
                            r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                        }
                        t.ended = !0, t.sync ? R(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, M(e)))
                    }(e, h);
                else if (a || (s = function(e, t) {
                        var r;
                        n = t, i.isBuffer(n) || n instanceof o || "string" == typeof t || void 0 === t || e.objectMode || (r = new v("chunk", ["string", "Buffer", "Uint8Array"], t));
                        var n;
                        return r
                    }(h, t)), s) w(e, s);
                else if (h.objectMode || t && t.length > 0)
                    if ("string" == typeof t || h.objectMode || Object.getPrototypeOf(t) === i.prototype || (t = function(e) {
                            return i.from(e)
                        }(t)), n) h.endEmitted ? w(e, new m) : T(e, h, t, !0);
                    else if (h.ended) w(e, new b);
                else {
                    if (h.destroyed) return !1;
                    h.reading = !1, h.decoder && !r ? (t = h.decoder.write(t), h.objectMode || 0 !== t.length ? T(e, h, t, !1) : B(e, h)) : T(e, h, t, !1)
                } else n || (h.reading = !1, B(e, h));
                return !h.ended && (h.length < h.highWaterMark || 0 === h.length)
            }

            function T(e, t, r, n) {
                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && R(e)), B(e, t)
            }
            Object.defineProperty(S.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }), S.prototype.destroy = y.destroy, S.prototype._undestroy = y.undestroy, S.prototype._destroy = function(e, t) {
                t(e)
            }, S.prototype.push = function(e, t) {
                var r, n = this._readableState;
                return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = i.from(e, t), t = ""), r = !0), x(this, e, t, !1, r)
            }, S.prototype.unshift = function(e) {
                return x(this, e, null, !0, !1)
            }, S.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, S.prototype.setEncoding = function(e) {
                _ || (_ = r(283).StringDecoder);
                var t = new _(e);
                this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                for (var n = this._readableState.buffer.head, a = ""; null !== n;) a += t.write(n.data), n = n.next;
                return this._readableState.buffer.clear(), "" !== a && this._readableState.buffer.push(a), this._readableState.length = a.length, this
            };

            function A(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                    return e >= 1073741824 ? e = 1073741824 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
            }

            function R(e) {
                var t = e._readableState;
                c("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (c("emitReadable", t.flowing), t.emittedReadable = !0, process.nextTick(M, e))
            }

            function M(e) {
                var t = e._readableState;
                c("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, I(e)
            }

            function B(e, t) {
                t.readingMore || (t.readingMore = !0, process.nextTick(K, e, t))
            }

            function K(e, t) {
                for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                    var r = t.length;
                    if (c("maybeReadMore read 0"), e.read(0), r === t.length) break
                }
                t.readingMore = !1
            }

            function L(e) {
                var t = e._readableState;
                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
            }

            function Y(e) {
                c("readable nexttick read 0"), e.read(0)
            }

            function O(e, t) {
                c("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), I(e), t.flowing && !t.reading && e.read(0)
            }

            function I(e) {
                var t = e._readableState;
                for (c("flow", t.flowing); t.flowing && null !== e.read(););
            }

            function N(e, t) {
                return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r);
                var r
            }

            function P(e) {
                var t = e._readableState;
                c("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, process.nextTick(C, t, e))
            }

            function C(e, t) {
                if (c("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                    var r = t._writableState;
                    (!r || r.autoDestroy && r.finished) && t.destroy()
                }
            }

            function U(e, t) {
                for (var r = 0, n = e.length; r < n; r++)
                    if (e[r] === t) return r;
                return -1
            }
            S.prototype.read = function(e) {
                c("read", e), e = parseInt(e, 10);
                var t = this._readableState,
                    r = e;
                if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return c("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? P(this) : R(this), null;
                if (0 === (e = A(e, t)) && t.ended) return 0 === t.length && P(this), null;
                var n, a = t.needReadable;
                return c("need readable", a), (0 === t.length || t.length - e < t.highWaterMark) && c("length less than watermark", a = !0), t.ended || t.reading ? c("reading or ended", a = !1) : a && (c("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = A(r, t))), null === (n = e > 0 ? N(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && P(this)), null !== n && this.emit("data", n), n
            }, S.prototype._read = function(e) {
                w(this, new g("_read()"))
            }, S.prototype.pipe = function(e, t) {
                var r = this,
                    n = this._readableState;
                switch (n.pipesCount) {
                    case 0:
                        n.pipes = e;
                        break;
                    case 1:
                        n.pipes = [n.pipes, e];
                        break;
                    default:
                        n.pipes.push(e)
                }
                n.pipesCount += 1, c("pipe count=%d opts=%j", n.pipesCount, t);
                var s = (!t || !1 !== t.end) && e !== process.stdout && e !== process.stderr ? o : d;

                function i(t, a) {
                    c("onunpipe"), t === r && a && !1 === a.hasUnpiped && (a.hasUnpiped = !0, c("cleanup"), e.removeListener("close", p), e.removeListener("finish", y), e.removeListener("drain", h), e.removeListener("error", l), e.removeListener("unpipe", i), r.removeListener("end", o), r.removeListener("end", d), r.removeListener("data", u), _ = !0, !n.awaitDrain || e._writableState && !e._writableState.needDrain || h())
                }

                function o() {
                    c("onend"), e.end()
                }
                n.endEmitted ? process.nextTick(s) : r.once("end", s), e.on("unpipe", i);
                var h = function(e) {
                    return function() {
                        var t = e._readableState;
                        c("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && a(e, "data") && (t.flowing = !0, I(e))
                    }
                }(r);
                e.on("drain", h);
                var _ = !1;

                function u(t) {
                    c("ondata");
                    var a = e.write(t);
                    c("dest.write", a), !1 === a && ((1 === n.pipesCount && n.pipes === e || n.pipesCount > 1 && -1 !== U(n.pipes, e)) && !_ && (c("false write response, pause", n.awaitDrain), n.awaitDrain++), r.pause())
                }

                function l(t) {
                    c("onerror", t), d(), e.removeListener("error", l), 0 === a(e, "error") && w(e, t)
                }

                function p() {
                    e.removeListener("finish", y), d()
                }

                function y() {
                    c("onfinish"), e.removeListener("close", p), d()
                }

                function d() {
                    c("unpipe"), r.unpipe(e)
                }
                return r.on("data", u),
                    function(e, t, r) {
                        if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                    }(e, "error", l), e.once("close", p), e.once("finish", y), e.emit("pipe", r), n.flowing || (c("pipe resume"), r.resume()), e
            }, S.prototype.unpipe = function(e) {
                var t = this._readableState,
                    r = {
                        hasUnpiped: !1
                    };
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
                if (!e) {
                    var n = t.pipes,
                        a = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var s = 0; s < a; s++) n[s].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var i = U(t.pipes, e);
                return -1 === i || (t.pipes.splice(i, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
            }, S.prototype.on = function(e, t) {
                var r = s.prototype.on.call(this, e, t),
                    n = this._readableState;
                return "data" === e ? (n.readableListening = this.listenerCount("readable") > 0, !1 !== n.flowing && this.resume()) : "readable" === e && (n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.flowing = !1, n.emittedReadable = !1, c("on readable", n.length, n.reading), n.length ? R(this) : n.reading || process.nextTick(Y, this))), r
            }, S.prototype.addListener = S.prototype.on, S.prototype.removeListener = function(e, t) {
                var r = s.prototype.removeListener.call(this, e, t);
                return "readable" === e && process.nextTick(L, this), r
            }, S.prototype.removeAllListeners = function(e) {
                var t = s.prototype.removeAllListeners.apply(this, arguments);
                return "readable" !== e && void 0 !== e || process.nextTick(L, this), t
            }, S.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (c("resume"), e.flowing = !e.readableListening, function(e, t) {
                    t.resumeScheduled || (t.resumeScheduled = !0, process.nextTick(O, e, t))
                }(this, e)), e.paused = !1, this
            }, S.prototype.pause = function() {
                return c("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (c("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, S.prototype.wrap = function(e) {
                var t = this,
                    r = this._readableState,
                    n = !1;
                for (var a in e.on("end", (function() {
                        if (c("wrapped end"), r.decoder && !r.ended) {
                            var e = r.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    })), e.on("data", (function(a) {
                        (c("wrapped data"), r.decoder && (a = r.decoder.write(a)), r.objectMode && null == a) || (r.objectMode || a && a.length) && (t.push(a) || (n = !0, e.pause()))
                    })), e) void 0 === this[a] && "function" == typeof e[a] && (this[a] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(a));
                for (var s = 0; s < k.length; s++) e.on(k[s], this.emit.bind(this, k[s]));
                return this._read = function(t) {
                    c("wrapped _read", t), n && (n = !1, e.resume())
                }, this
            }, "function" == typeof Symbol && (S.prototype[Symbol.asyncIterator] = function() {
                return void 0 === u && (u = r(3159)), u(this)
            }), Object.defineProperty(S.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(S.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(S.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(e) {
                    this._readableState && (this._readableState.flowing = e)
                }
            }), S._fromList = N, Object.defineProperty(S.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }), "function" == typeof Symbol && (S.from = function(e, t) {
                return void 0 === l && (l = r(3160)), l(S, e, t)
            })
        },
        1736: function(e, t, r) {
            e.exports = r(69).EventEmitter
        },
        1737: function(e, t, r) {
            "use strict";

            function n(e, t) {
                s(e, t), a(e)
            }

            function a(e) {
                e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
            }

            function s(e, t) {
                e.emit("error", t)
            }
            e.exports = {
                destroy: function(e, t) {
                    var r = this,
                        i = this._readableState && this._readableState.destroyed,
                        o = this._writableState && this._writableState.destroyed;
                    return i || o ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(s, this, e)) : process.nextTick(s, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function(e) {
                        !t && e ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(a, r) : (r._writableState.errorEmitted = !0, process.nextTick(n, r, e)) : process.nextTick(n, r, e) : t ? (process.nextTick(a, r), t(e)) : process.nextTick(a, r)
                    })), this)
                },
                undestroy: function() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                },
                errorOrDestroy: function(e, t) {
                    var r = e._readableState,
                        n = e._writableState;
                    r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                }
            }
        },
        1738: function(e, t, r) {
            "use strict";
            var n = r(404).codes.ERR_INVALID_OPT_VALUE;
            e.exports = {
                getHighWaterMark: function(e, t, r, a) {
                    var s = function(e, t, r) {
                        return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
                    }(t, a, r);
                    if (null != s) {
                        if (!isFinite(s) || Math.floor(s) !== s || s < 0) throw new n(a ? r : "highWaterMark", s);
                        return Math.floor(s)
                    }
                    return e.objectMode ? 16 : 16384
                }
            }
        },
        1739: function(e, t, r) {
            "use strict";

            function n(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function() {
                    ! function(e, t, r) {
                        var n = e.entry;
                        e.entry = null;
                        for (; n;) {
                            var a = n.callback;
                            t.pendingcb--, a(r), n = n.next
                        }
                        t.corkedRequestsFree.next = e
                    }(t, e)
                }
            }
            var a;
            e.exports = S, S.WritableState = E;
            var s = {
                    deprecate: r(553)
                },
                i = r(1736),
                o = r(12).Buffer,
                c = ("undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {};
            var h, _ = r(1737),
                u = r(1738).getHighWaterMark,
                l = r(404).codes,
                p = l.ERR_INVALID_ARG_TYPE,
                y = l.ERR_METHOD_NOT_IMPLEMENTED,
                d = l.ERR_MULTIPLE_CALLBACK,
                f = l.ERR_STREAM_CANNOT_PIPE,
                v = l.ERR_STREAM_DESTROYED,
                b = l.ERR_STREAM_NULL_VALUES,
                g = l.ERR_STREAM_WRITE_AFTER_END,
                m = l.ERR_UNKNOWN_ENCODING,
                w = _.errorOrDestroy;

            function k() {}

            function E(e, t, s) {
                a = a || r(405), e = e || {}, "boolean" != typeof s && (s = t instanceof a), this.objectMode = !!e.objectMode, s && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = u(this, e, "writableHighWaterMark", s), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var i = !1 === e.decodeStrings;
                this.decodeStrings = !i, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                    ! function(e, t) {
                        var r = e._writableState,
                            n = r.sync,
                            a = r.writecb;
                        if ("function" != typeof a) throw new d;
                        if (function(e) {
                                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                            }(r), t) ! function(e, t, r, n, a) {
                            --t.pendingcb, r ? (process.nextTick(a, n), process.nextTick(B, e, t), e._writableState.errorEmitted = !0, w(e, n)) : (a(n), e._writableState.errorEmitted = !0, w(e, n), B(e, t))
                        }(e, r, n, t, a);
                        else {
                            var s = R(r) || e.destroyed;
                            s || r.corked || r.bufferProcessing || !r.bufferedRequest || A(e, r), n ? process.nextTick(T, e, r, s, a) : T(e, r, s, a)
                        }
                    }(t, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new n(this)
            }

            function S(e) {
                var t = this instanceof(a = a || r(405));
                if (!t && !h.call(S, this)) return new S(e);
                this._writableState = new E(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), i.call(this)
            }

            function x(e, t, r, n, a, s, i) {
                t.writelen = n, t.writecb = i, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new v("write")) : r ? e._writev(a, t.onwrite) : e._write(a, s, t.onwrite), t.sync = !1
            }

            function T(e, t, r, n) {
                r || function(e, t) {
                    0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                }(e, t), t.pendingcb--, n(), B(e, t)
            }

            function A(e, t) {
                t.bufferProcessing = !0;
                var r = t.bufferedRequest;
                if (e._writev && r && r.next) {
                    var a = t.bufferedRequestCount,
                        s = new Array(a),
                        i = t.corkedRequestsFree;
                    i.entry = r;
                    for (var o = 0, c = !0; r;) s[o] = r, r.isBuf || (c = !1), r = r.next, o += 1;
                    s.allBuffers = c, x(e, t, !0, t.length, s, "", i.finish), t.pendingcb++, t.lastBufferedRequest = null, i.next ? (t.corkedRequestsFree = i.next, i.next = null) : t.corkedRequestsFree = new n(t), t.bufferedRequestCount = 0
                } else {
                    for (; r;) {
                        var h = r.chunk,
                            _ = r.encoding,
                            u = r.callback;
                        if (x(e, t, !1, t.objectMode ? 1 : h.length, h, _, u), r = r.next, t.bufferedRequestCount--, t.writing) break
                    }
                    null === r && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = r, t.bufferProcessing = !1
            }

            function R(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function M(e, t) {
                e._final((function(r) {
                    t.pendingcb--, r && w(e, r), t.prefinished = !0, e.emit("prefinish"), B(e, t)
                }))
            }

            function B(e, t) {
                var r = R(t);
                if (r && (function(e, t) {
                        t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, process.nextTick(M, e, t)))
                    }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                    var n = e._readableState;
                    (!n || n.autoDestroy && n.endEmitted) && e.destroy()
                }
                return r
            }
            r(18)(S, i), E.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function() {
                    try {
                        Object.defineProperty(E.prototype, "buffer", {
                            get: s.deprecate((function() {
                                return this.getBuffer()
                            }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (h = Function.prototype[Symbol.hasInstance], Object.defineProperty(S, Symbol.hasInstance, {
                    value: function(e) {
                        return !!h.call(this, e) || this === S && (e && e._writableState instanceof E)
                    }
                })) : h = function(e) {
                    return e instanceof this
                }, S.prototype.pipe = function() {
                    w(this, new f)
                }, S.prototype.write = function(e, t, r) {
                    var n, a = this._writableState,
                        s = !1,
                        i = !a.objectMode && (n = e, o.isBuffer(n) || n instanceof c);
                    return i && !o.isBuffer(e) && (e = function(e) {
                        return o.from(e)
                    }(e)), "function" == typeof t && (r = t, t = null), i ? t = "buffer" : t || (t = a.defaultEncoding), "function" != typeof r && (r = k), a.ending ? function(e, t) {
                        var r = new g;
                        w(e, r), process.nextTick(t, r)
                    }(this, r) : (i || function(e, t, r, n) {
                        var a;
                        return null === r ? a = new b : "string" == typeof r || t.objectMode || (a = new p("chunk", ["string", "Buffer"], r)), !a || (w(e, a), process.nextTick(n, a), !1)
                    }(this, a, e, r)) && (a.pendingcb++, s = function(e, t, r, n, a, s) {
                        if (!r) {
                            var i = function(e, t, r) {
                                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = o.from(t, r));
                                return t
                            }(t, n, a);
                            n !== i && (r = !0, a = "buffer", n = i)
                        }
                        var c = t.objectMode ? 1 : n.length;
                        t.length += c;
                        var h = t.length < t.highWaterMark;
                        h || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                            var _ = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: n,
                                encoding: a,
                                isBuf: r,
                                callback: s,
                                next: null
                            }, _ ? _.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                        } else x(e, t, !1, c, n, a, s);
                        return h
                    }(this, a, i, e, t, r)), s
                }, S.prototype.cork = function() {
                    this._writableState.corked++
                }, S.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || A(this, e))
                }, S.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new m(e);
                    return this._writableState.defaultEncoding = e, this
                }, Object.defineProperty(S.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(S.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), S.prototype._write = function(e, t, r) {
                    r(new y("_write()"))
                }, S.prototype._writev = null, S.prototype.end = function(e, t, r) {
                    var n = this._writableState;
                    return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || function(e, t, r) {
                        t.ending = !0, B(e, t), r && (t.finished ? process.nextTick(r) : e.once("finish", r));
                        t.ended = !0, e.writable = !1
                    }(this, n, r), this
                }, Object.defineProperty(S.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(S.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }), S.prototype.destroy = _.destroy, S.prototype._undestroy = _.undestroy, S.prototype._destroy = function(e, t) {
                    t(e)
                }
        },
        1740: function(e, t, r) {
            "use strict";
            e.exports = _;
            var n = r(404).codes,
                a = n.ERR_METHOD_NOT_IMPLEMENTED,
                s = n.ERR_MULTIPLE_CALLBACK,
                i = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                o = n.ERR_TRANSFORM_WITH_LENGTH_0,
                c = r(405);

            function h(e, t) {
                var r = this._transformState;
                r.transforming = !1;
                var n = r.writecb;
                if (null === n) return this.emit("error", new s);
                r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
                var a = this._readableState;
                a.reading = !1, (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
            }

            function _(e) {
                if (!(this instanceof _)) return new _(e);
                c.call(this, e), this._transformState = {
                    afterTransform: h.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", u)
            }

            function u() {
                var e = this;
                "function" != typeof this._flush || this._readableState.destroyed ? l(this, null, null) : this._flush((function(t, r) {
                    l(e, t, r)
                }))
            }

            function l(e, t, r) {
                if (t) return e.emit("error", t);
                if (null != r && e.push(r), e._writableState.length) throw new o;
                if (e._transformState.transforming) throw new i;
                return e.push(null)
            }
            r(18)(_, c), _.prototype.push = function(e, t) {
                return this._transformState.needTransform = !1, c.prototype.push.call(this, e, t)
            }, _.prototype._transform = function(e, t, r) {
                r(new a("_transform()"))
            }, _.prototype._write = function(e, t, r) {
                var n = this._transformState;
                if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                    var a = this._readableState;
                    (n.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
                }
            }, _.prototype._read = function(e) {
                var t = this._transformState;
                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            }, _.prototype._destroy = function(e, t) {
                c.prototype._destroy.call(this, e, (function(e) {
                    t(e)
                }))
            }
        },
        3156: function(e, t, r) {
            const n = r(3157),
                a = r(3163);
            e.exports = function(e) {
                const t = n(e),
                    r = a(e);
                return function(e, n) {
                    switch ("string" == typeof e ? e.toLowerCase() : e) {
                        case "keccak224":
                            return new t(1152, 448, null, 224, n);
                        case "keccak256":
                            return new t(1088, 512, null, 256, n);
                        case "keccak384":
                            return new t(832, 768, null, 384, n);
                        case "keccak512":
                            return new t(576, 1024, null, 512, n);
                        case "sha3-224":
                            return new t(1152, 448, 6, 224, n);
                        case "sha3-256":
                            return new t(1088, 512, 6, 256, n);
                        case "sha3-384":
                            return new t(832, 768, 6, 384, n);
                        case "sha3-512":
                            return new t(576, 1024, 6, 512, n);
                        case "shake128":
                            return new r(1344, 256, 31, n);
                        case "shake256":
                            return new r(1088, 512, 31, n);
                        default:
                            throw new Error("Invald algorithm: " + e)
                    }
                }
            }
        },
        3157: function(e, t, r) {
            const {
                Transform: n
            } = r(1734);
            e.exports = e => class Keccak extends n {
                constructor(t, r, n, a, s) {
                    super(s), this._rate = t, this._capacity = r, this._delimitedSuffix = n, this._hashBitLength = a, this._options = s, this._state = new e, this._state.initialize(t, r), this._finalized = !1
                }
                _transform(e, t, r) {
                    let n = null;
                    try {
                        this.update(e, t)
                    } catch (e) {
                        n = e
                    }
                    r(n)
                }
                _flush(e) {
                    let t = null;
                    try {
                        this.push(this.digest())
                    } catch (e) {
                        t = e
                    }
                    e(t)
                }
                update(e, t) {
                    if (!Buffer.isBuffer(e) && "string" != typeof e) throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized) throw new Error("Digest already called");
                    return Buffer.isBuffer(e) || (e = Buffer.from(e, t)), this._state.absorb(e), this
                }
                digest(e) {
                    if (this._finalized) throw new Error("Digest already called");
                    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
                    let t = this._state.squeeze(this._hashBitLength / 8);
                    return void 0 !== e && (t = t.toString(e)), this._resetState(), t
                }
                _resetState() {
                    return this._state.initialize(this._rate, this._capacity), this
                }
                _clone() {
                    const e = new Keccak(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
                    return this._state.copy(e._state), e._finalized = this._finalized, e
                }
            }
        },
        3158: function(e, t, r) {
            "use strict";

            function n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach((function(t) {
                        s(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function s(e, t, r) {
                return (t = o(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function i(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, o(n.key), n)
                }
            }

            function o(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            var c = r(12).Buffer,
                h = r(43).inspect,
                _ = h && h.custom || "inspect";
            e.exports = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.head = null, this.tail = null, this.length = 0
                }
                var t, r, n;
                return t = e, (r = [{
                    key: "push",
                    value: function(e) {
                        var t = {
                            data: e,
                            next: null
                        };
                        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(e) {
                        var t = {
                            data: e,
                            next: this.head
                        };
                        0 === this.length && (this.tail = t), this.head = t, ++this.length
                    }
                }, {
                    key: "shift",
                    value: function() {
                        if (0 !== this.length) {
                            var e = this.head.data;
                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.head = this.tail = null, this.length = 0
                    }
                }, {
                    key: "join",
                    value: function(e) {
                        if (0 === this.length) return "";
                        for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                        return r
                    }
                }, {
                    key: "concat",
                    value: function(e) {
                        if (0 === this.length) return c.alloc(0);
                        for (var t, r, n, a = c.allocUnsafe(e >>> 0), s = this.head, i = 0; s;) t = s.data, r = a, n = i, c.prototype.copy.call(t, r, n), i += s.data.length, s = s.next;
                        return a
                    }
                }, {
                    key: "consume",
                    value: function(e, t) {
                        var r;
                        return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
                    }
                }, {
                    key: "first",
                    value: function() {
                        return this.head.data
                    }
                }, {
                    key: "_getString",
                    value: function(e) {
                        var t = this.head,
                            r = 1,
                            n = t.data;
                        for (e -= n.length; t = t.next;) {
                            var a = t.data,
                                s = e > a.length ? a.length : e;
                            if (s === a.length ? n += a : n += a.slice(0, e), 0 == (e -= s)) {
                                s === a.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = a.slice(s));
                                break
                            }++r
                        }
                        return this.length -= r, n
                    }
                }, {
                    key: "_getBuffer",
                    value: function(e) {
                        var t = c.allocUnsafe(e),
                            r = this.head,
                            n = 1;
                        for (r.data.copy(t), e -= r.data.length; r = r.next;) {
                            var a = r.data,
                                s = e > a.length ? a.length : e;
                            if (a.copy(t, t.length - e, 0, s), 0 == (e -= s)) {
                                s === a.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = a.slice(s));
                                break
                            }++n
                        }
                        return this.length -= n, t
                    }
                }, {
                    key: _,
                    value: function(e, t) {
                        return h(this, a(a({}, t), {}, {
                            depth: 0,
                            customInspect: !1
                        }))
                    }
                }]) && i(t.prototype, r), n && i(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }()
        },
        3159: function(e, t, r) {
            "use strict";
            var n;

            function a(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != typeof n) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var s = r(1030),
                i = Symbol("lastResolve"),
                o = Symbol("lastReject"),
                c = Symbol("error"),
                h = Symbol("ended"),
                _ = Symbol("lastPromise"),
                u = Symbol("handlePromise"),
                l = Symbol("stream");

            function p(e, t) {
                return {
                    value: e,
                    done: t
                }
            }

            function y(e) {
                var t = e[i];
                if (null !== t) {
                    var r = e[l].read();
                    null !== r && (e[_] = null, e[i] = null, e[o] = null, t(p(r, !1)))
                }
            }

            function d(e) {
                process.nextTick(y, e)
            }
            var f = Object.getPrototypeOf((function() {})),
                v = Object.setPrototypeOf((a(n = {
                    get stream() {
                        return this[l]
                    },
                    next: function() {
                        var e = this,
                            t = this[c];
                        if (null !== t) return Promise.reject(t);
                        if (this[h]) return Promise.resolve(p(void 0, !0));
                        if (this[l].destroyed) return new Promise((function(t, r) {
                            process.nextTick((function() {
                                e[c] ? r(e[c]) : t(p(void 0, !0))
                            }))
                        }));
                        var r, n = this[_];
                        if (n) r = new Promise(function(e, t) {
                            return function(r, n) {
                                e.then((function() {
                                    t[h] ? r(p(void 0, !0)) : t[u](r, n)
                                }), n)
                            }
                        }(n, this));
                        else {
                            var a = this[l].read();
                            if (null !== a) return Promise.resolve(p(a, !1));
                            r = new Promise(this[u])
                        }
                        return this[_] = r, r
                    }
                }, Symbol.asyncIterator, (function() {
                    return this
                })), a(n, "return", (function() {
                    var e = this;
                    return new Promise((function(t, r) {
                        e[l].destroy(null, (function(e) {
                            e ? r(e) : t(p(void 0, !0))
                        }))
                    }))
                })), n), f);
            e.exports = function(e) {
                var t, r = Object.create(v, (a(t = {}, l, {
                    value: e,
                    writable: !0
                }), a(t, i, {
                    value: null,
                    writable: !0
                }), a(t, o, {
                    value: null,
                    writable: !0
                }), a(t, c, {
                    value: null,
                    writable: !0
                }), a(t, h, {
                    value: e._readableState.endEmitted,
                    writable: !0
                }), a(t, u, {
                    value: function(e, t) {
                        var n = r[l].read();
                        n ? (r[_] = null, r[i] = null, r[o] = null, e(p(n, !1))) : (r[i] = e, r[o] = t)
                    },
                    writable: !0
                }), t));
                return r[_] = null, s(e, (function(e) {
                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                        var t = r[o];
                        return null !== t && (r[_] = null, r[i] = null, r[o] = null, t(e)), void(r[c] = e)
                    }
                    var n = r[i];
                    null !== n && (r[_] = null, r[i] = null, r[o] = null, n(p(void 0, !0))), r[h] = !0
                })), e.on("readable", d.bind(null, r)), r
            }
        },
        3160: function(e, t) {
            e.exports = function() {
                throw new Error("Readable.from is not available in the browser")
            }
        },
        3161: function(e, t, r) {
            "use strict";
            e.exports = a;
            var n = r(1740);

            function a(e) {
                if (!(this instanceof a)) return new a(e);
                n.call(this, e)
            }
            r(18)(a, n), a.prototype._transform = function(e, t, r) {
                r(null, e)
            }
        },
        3162: function(e, t, r) {
            "use strict";
            var n;
            var a = r(404).codes,
                s = a.ERR_MISSING_ARGS,
                i = a.ERR_STREAM_DESTROYED;

            function o(e) {
                if (e) throw e
            }

            function c(e, t, a, s) {
                s = function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, e.apply(void 0, arguments))
                    }
                }(s);
                var o = !1;
                e.on("close", (function() {
                    o = !0
                })), void 0 === n && (n = r(1030)), n(e, {
                    readable: t,
                    writable: a
                }, (function(e) {
                    if (e) return s(e);
                    o = !0, s()
                }));
                var c = !1;
                return function(t) {
                    if (!o && !c) return c = !0,
                        function(e) {
                            return e.setHeader && "function" == typeof e.abort
                        }(e) ? e.abort() : "function" == typeof e.destroy ? e.destroy() : void s(t || new i("pipe"))
                }
            }

            function h(e) {
                e()
            }

            function _(e, t) {
                return e.pipe(t)
            }

            function u(e) {
                return e.length ? "function" != typeof e[e.length - 1] ? o : e.pop() : o
            }
            e.exports = function() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var n, a = u(t);
                if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new s("streams");
                var i = t.map((function(e, r) {
                    var s = r < t.length - 1;
                    return c(e, s, r > 0, (function(e) {
                        n || (n = e), e && i.forEach(h), s || (i.forEach(h), a(n))
                    }))
                }));
                return t.reduce(_)
            }
        },
        3163: function(e, t, r) {
            const {
                Transform: n
            } = r(1734);
            e.exports = e => class Shake extends n {
                constructor(t, r, n, a) {
                    super(a), this._rate = t, this._capacity = r, this._delimitedSuffix = n, this._options = a, this._state = new e, this._state.initialize(t, r), this._finalized = !1
                }
                _transform(e, t, r) {
                    let n = null;
                    try {
                        this.update(e, t)
                    } catch (e) {
                        n = e
                    }
                    r(n)
                }
                _flush() {}
                _read(e) {
                    this.push(this.squeeze(e))
                }
                update(e, t) {
                    if (!Buffer.isBuffer(e) && "string" != typeof e) throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized) throw new Error("Squeeze already called");
                    return Buffer.isBuffer(e) || (e = Buffer.from(e, t)), this._state.absorb(e), this
                }
                squeeze(e, t) {
                    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
                    let r = this._state.squeeze(e);
                    return void 0 !== t && (r = r.toString(t)), r
                }
                _resetState() {
                    return this._state.initialize(this._rate, this._capacity), this
                }
                _clone() {
                    const e = new Shake(this._rate, this._capacity, this._delimitedSuffix, this._options);
                    return this._state.copy(e._state), e._finalized = this._finalized, e
                }
            }
        },
        3164: function(e, t, r) {
            const n = r(3165);

            function a() {
                this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1
            }
            a.prototype.initialize = function(e, t) {
                for (let e = 0; e < 50; ++e) this.state[e] = 0;
                this.blockSize = e / 8, this.count = 0, this.squeezing = !1
            }, a.prototype.absorb = function(e) {
                for (let t = 0; t < e.length; ++t) this.state[~~(this.count / 4)] ^= e[t] << this.count % 4 * 8, this.count += 1, this.count === this.blockSize && (n.p1600(this.state), this.count = 0)
            }, a.prototype.absorbLastFewBits = function(e) {
                this.state[~~(this.count / 4)] ^= e << this.count % 4 * 8, 0 != (128 & e) && this.count === this.blockSize - 1 && n.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8, n.p1600(this.state), this.count = 0, this.squeezing = !0
            }, a.prototype.squeeze = function(e) {
                this.squeezing || this.absorbLastFewBits(1);
                const t = Buffer.alloc(e);
                for (let r = 0; r < e; ++r) t[r] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255, this.count += 1, this.count === this.blockSize && (n.p1600(this.state), this.count = 0);
                return t
            }, a.prototype.copy = function(e) {
                for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
                e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing
            }, e.exports = a
        },
        3165: function(e, t) {
            const r = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
            t.p1600 = function(e) {
                for (let t = 0; t < 24; ++t) {
                    const n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
                        a = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
                        s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
                        i = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
                        o = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
                        c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
                        h = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
                        _ = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
                        u = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
                        l = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
                    let p = u ^ (s << 1 | i >>> 31),
                        y = l ^ (i << 1 | s >>> 31);
                    const d = e[0] ^ p,
                        f = e[1] ^ y,
                        v = e[10] ^ p,
                        b = e[11] ^ y,
                        g = e[20] ^ p,
                        m = e[21] ^ y,
                        w = e[30] ^ p,
                        k = e[31] ^ y,
                        E = e[40] ^ p,
                        S = e[41] ^ y;
                    p = n ^ (o << 1 | c >>> 31), y = a ^ (c << 1 | o >>> 31);
                    const x = e[2] ^ p,
                        T = e[3] ^ y,
                        A = e[12] ^ p,
                        R = e[13] ^ y,
                        M = e[22] ^ p,
                        B = e[23] ^ y,
                        K = e[32] ^ p,
                        L = e[33] ^ y,
                        Y = e[42] ^ p,
                        O = e[43] ^ y;
                    p = s ^ (h << 1 | _ >>> 31), y = i ^ (_ << 1 | h >>> 31);
                    const I = e[4] ^ p,
                        N = e[5] ^ y,
                        P = e[14] ^ p,
                        C = e[15] ^ y,
                        U = e[24] ^ p,
                        D = e[25] ^ y,
                        j = e[34] ^ p,
                        F = e[35] ^ y,
                        z = e[44] ^ p,
                        q = e[45] ^ y;
                    p = o ^ (u << 1 | l >>> 31), y = c ^ (l << 1 | u >>> 31);
                    const V = e[6] ^ p,
                        W = e[7] ^ y,
                        G = e[16] ^ p,
                        H = e[17] ^ y,
                        X = e[26] ^ p,
                        Z = e[27] ^ y,
                        J = e[36] ^ p,
                        $ = e[37] ^ y,
                        Q = e[46] ^ p,
                        ee = e[47] ^ y;
                    p = h ^ (n << 1 | a >>> 31), y = _ ^ (a << 1 | n >>> 31);
                    const te = e[8] ^ p,
                        re = e[9] ^ y,
                        ne = e[18] ^ p,
                        ae = e[19] ^ y,
                        se = e[28] ^ p,
                        ie = e[29] ^ y,
                        oe = e[38] ^ p,
                        ce = e[39] ^ y,
                        he = e[48] ^ p,
                        _e = e[49] ^ y,
                        ue = d,
                        le = f,
                        pe = b << 4 | v >>> 28,
                        ye = v << 4 | b >>> 28,
                        de = g << 3 | m >>> 29,
                        fe = m << 3 | g >>> 29,
                        ve = k << 9 | w >>> 23,
                        be = w << 9 | k >>> 23,
                        ge = E << 18 | S >>> 14,
                        me = S << 18 | E >>> 14,
                        we = x << 1 | T >>> 31,
                        ke = T << 1 | x >>> 31,
                        Ee = R << 12 | A >>> 20,
                        Se = A << 12 | R >>> 20,
                        xe = M << 10 | B >>> 22,
                        Te = B << 10 | M >>> 22,
                        Ae = L << 13 | K >>> 19,
                        Re = K << 13 | L >>> 19,
                        Me = Y << 2 | O >>> 30,
                        Be = O << 2 | Y >>> 30,
                        Ke = N << 30 | I >>> 2,
                        Le = I << 30 | N >>> 2,
                        Ye = P << 6 | C >>> 26,
                        Oe = C << 6 | P >>> 26,
                        Ie = D << 11 | U >>> 21,
                        Ne = U << 11 | D >>> 21,
                        Pe = j << 15 | F >>> 17,
                        Ce = F << 15 | j >>> 17,
                        Ue = q << 29 | z >>> 3,
                        De = z << 29 | q >>> 3,
                        je = V << 28 | W >>> 4,
                        Fe = W << 28 | V >>> 4,
                        ze = H << 23 | G >>> 9,
                        qe = G << 23 | H >>> 9,
                        Ve = X << 25 | Z >>> 7,
                        We = Z << 25 | X >>> 7,
                        Ge = J << 21 | $ >>> 11,
                        He = $ << 21 | J >>> 11,
                        Xe = ee << 24 | Q >>> 8,
                        Ze = Q << 24 | ee >>> 8,
                        Je = te << 27 | re >>> 5,
                        $e = re << 27 | te >>> 5,
                        Qe = ne << 20 | ae >>> 12,
                        et = ae << 20 | ne >>> 12,
                        tt = ie << 7 | se >>> 25,
                        rt = se << 7 | ie >>> 25,
                        nt = oe << 8 | ce >>> 24,
                        at = ce << 8 | oe >>> 24,
                        st = he << 14 | _e >>> 18,
                        it = _e << 14 | he >>> 18;
                    e[0] = ue ^ ~Ee & Ie, e[1] = le ^ ~Se & Ne, e[10] = je ^ ~Qe & de, e[11] = Fe ^ ~et & fe, e[20] = we ^ ~Ye & Ve, e[21] = ke ^ ~Oe & We, e[30] = Je ^ ~pe & xe, e[31] = $e ^ ~ye & Te, e[40] = Ke ^ ~ze & tt, e[41] = Le ^ ~qe & rt, e[2] = Ee ^ ~Ie & Ge, e[3] = Se ^ ~Ne & He, e[12] = Qe ^ ~de & Ae, e[13] = et ^ ~fe & Re, e[22] = Ye ^ ~Ve & nt, e[23] = Oe ^ ~We & at, e[32] = pe ^ ~xe & Pe, e[33] = ye ^ ~Te & Ce, e[42] = ze ^ ~tt & ve, e[43] = qe ^ ~rt & be, e[4] = Ie ^ ~Ge & st, e[5] = Ne ^ ~He & it, e[14] = de ^ ~Ae & Ue, e[15] = fe ^ ~Re & De, e[24] = Ve ^ ~nt & ge, e[25] = We ^ ~at & me, e[34] = xe ^ ~Pe & Xe, e[35] = Te ^ ~Ce & Ze, e[44] = tt ^ ~ve & Me, e[45] = rt ^ ~be & Be, e[6] = Ge ^ ~st & ue, e[7] = He ^ ~it & le, e[16] = Ae ^ ~Ue & je, e[17] = Re ^ ~De & Fe, e[26] = nt ^ ~ge & we, e[27] = at ^ ~me & ke, e[36] = Pe ^ ~Xe & Je, e[37] = Ce ^ ~Ze & $e, e[46] = ve ^ ~Me & Ke, e[47] = be ^ ~Be & Le, e[8] = st ^ ~ue & Ee, e[9] = it ^ ~le & Se, e[18] = Ue ^ ~je & Qe, e[19] = De ^ ~Fe & et, e[28] = ge ^ ~we & Ye, e[29] = me ^ ~ke & Oe, e[38] = Xe ^ ~Je & pe, e[39] = Ze ^ ~$e & ye, e[48] = Me ^ ~Ke & ze, e[49] = Be ^ ~Le & qe, e[0] ^= r[2 * t], e[1] ^= r[2 * t + 1]
                }
            }
        },
        3188: function(e, t, r) {
            "use strict";
            var n = "undefined" == typeof process || !process.nextTick || Boolean(process.browser),
                a = r(3189),
                s = r(3190),
                i = r(3192),
                o = r(554),
                c = r(940);

            function h(e) {
                return "function" == typeof e
            }

            function _(e) {
                return o("keccak256").update(e).digest()
            }
            e.exports = {
                version: "1.1.0",
                browser: n,
                scrypt: null,
                crypto: r(n ? 1404 : 24),
                constants: {
                    cipher: "aes-128-ctr",
                    ivBytes: 16,
                    keyBytes: 32,
                    pbkdf2: {
                        c: 262144,
                        dklen: 32,
                        hash: "sha256",
                        prf: "hmac-sha256"
                    },
                    scrypt: {
                        memory: 28e7,
                        dklen: 32,
                        n: 262144,
                        r: 8,
                        p: 1
                    }
                },
                isHex: function(e) {
                    return !(e.length % 2 != 0 || !e.match(/^[0-9a-f]+$/i))
                },
                isBase64: function(e) {
                    var t;
                    return !(e.length % 4 > 0 || e.match(/[^0-9a-z+\/=]/i)) && !(-1 !== (t = e.indexOf("=")) && !e.slice(t).match(/={1,2}/))
                },
                str2buf: function(e, t) {
                    return e && e.constructor === String ? (!t && this.isHex(e) && (t = "hex"), !t && this.isBase64(e) && (t = "base64"), Buffer.from(e, t)) : e
                },
                isCipherAvailable: function(e) {
                    return this.crypto.getCiphers().some((function(t) {
                        return t === e
                    }))
                },
                encrypt: function(e, t, r, n) {
                    var a, s;
                    if (n = n || this.constants.cipher, !this.isCipherAvailable(n)) throw new Error(n + " is not available");
                    return s = (a = this.crypto.createCipheriv(n, this.str2buf(t), this.str2buf(r))).update(this.str2buf(e)), Buffer.concat([s, a.final()])
                },
                decrypt: function(e, t, r, n) {
                    var a, s;
                    if (n = n || this.constants.cipher, !this.isCipherAvailable(n)) throw new Error(n + " is not available");
                    return s = (a = this.crypto.createDecipheriv(n, this.str2buf(t), this.str2buf(r))).update(this.str2buf(e)), Buffer.concat([s, a.final()])
                },
                privateKeyToAddress: function(e) {
                    var t;
                    return (t = this.str2buf(e)).length < 32 && (t = Buffer.concat([Buffer.alloc(32 - t.length, 0), t])), "0x" + _(Buffer.from(i.publicKeyCreate(t, !1).slice(1))).slice(-20).toString("hex")
                },
                getMAC: function(e, t) {
                    if (null != e && null != t) return _(Buffer.concat([this.str2buf(e).slice(16, 32), this.str2buf(t)])).toString("hex")
                },
                deriveKeyUsingScrypt: function(e, t, r, n) {
                    var a = r.kdfparams.n || this.constants.scrypt.n,
                        s = r.kdfparams.r || this.constants.scrypt.r,
                        i = r.kdfparams.p || this.constants.scrypt.p,
                        o = r.kdfparams.dklen || this.constants.scrypt.dklen;
                    if (!h(n)) return Buffer.from(c.syncScrypt(e, t, a, s, i, o));
                    c.scrypt(e, t, a, s, i, o).then((function(e) {
                        n(Buffer.from(e))
                    })).catch(n)
                },
                deriveKey: function(e, t, r, n) {
                    var s, i = this;
                    if (null == e || !t) throw new Error("Must provide password and salt to derive a key");
                    return (r = r || {}).kdfparams = r.kdfparams || {}, e = this.str2buf(e, "utf8"), t = this.str2buf(t), "scrypt" === r.kdf ? this.deriveKeyUsingScrypt(e, t, r, n) : ("hmac-sha256" === (s = r.kdfparams.prf || this.constants.pbkdf2.prf) && (s = "sha256"), h(n) ? void(this.crypto.pbkdf2 ? this.crypto.pbkdf2(e, t, r.kdfparams.c || this.constants.pbkdf2.c, r.kdfparams.dklen || this.constants.pbkdf2.dklen, s, (function(e, t) {
                        if (e) return n(e);
                        n(t)
                    })) : setTimeout((function() {
                        n(Buffer.from(a.codec.hex.fromBits(a.misc.pbkdf2(e.toString("utf8"), a.codec.hex.toBits(t.toString("hex")), r.kdfparams.c || i.constants.pbkdf2.c, 8 * (r.kdfparams.dklen || i.constants.pbkdf2.dklen))), "hex"))
                    }), 0)) : this.crypto.pbkdf2Sync ? this.crypto.pbkdf2Sync(e, t, r.kdfparams.c || this.constants.pbkdf2.c, r.kdfparams.dklen || this.constants.pbkdf2.dklen, s) : Buffer.from(a.codec.hex.fromBits(a.misc.pbkdf2(e.toString("utf8"), a.codec.hex.toBits(t.toString("hex")), r.kdfparams.c || i.constants.pbkdf2.c, 8 * (r.kdfparams.dklen || i.constants.pbkdf2.dklen))), "hex"))
                },
                create: function(e, t) {
                    var r, n, a = this;

                    function s(s) {
                        var o = s.slice(0, r);
                        return i.privateKeyVerify(o) ? {
                            privateKey: o,
                            iv: s.slice(r, r + n),
                            salt: s.slice(r + n)
                        } : a.create(e, t)
                    }
                    if (r = (e = e || {}).keyBytes || this.constants.keyBytes, n = e.ivBytes || this.constants.ivBytes, !h(t)) return s(this.crypto.randomBytes(r + n + r));
                    this.crypto.randomBytes(r + n + r, (function(e, r) {
                        if (e) return t(e);
                        t(s(r))
                    }))
                },
                marshal: function(e, t, r, n, a) {
                    var i, o, c;
                    return (a = a || {}).kdfparams = a.kdfparams || {}, c = a.cipher || this.constants.cipher, i = this.encrypt(t, e.slice(0, 16), n, c).toString("hex"), o = {
                        address: this.privateKeyToAddress(t).slice(2),
                        crypto: {
                            cipher: a.cipher || this.constants.cipher,
                            ciphertext: i,
                            cipherparams: {
                                iv: n.toString("hex")
                            },
                            mac: this.getMAC(e, i)
                        },
                        id: s.v4(),
                        version: 3
                    }, "scrypt" === a.kdf ? (o.crypto.kdf = "scrypt", o.crypto.kdfparams = {
                        dklen: a.kdfparams.dklen || this.constants.scrypt.dklen,
                        n: a.kdfparams.n || this.constants.scrypt.n,
                        r: a.kdfparams.r || this.constants.scrypt.r,
                        p: a.kdfparams.p || this.constants.scrypt.p,
                        salt: r.toString("hex")
                    }) : (o.crypto.kdf = "pbkdf2", o.crypto.kdfparams = {
                        c: a.kdfparams.c || this.constants.pbkdf2.c,
                        dklen: a.kdfparams.dklen || this.constants.pbkdf2.dklen,
                        prf: a.kdfparams.prf || this.constants.pbkdf2.prf,
                        salt: r.toString("hex")
                    }), o
                },
                dump: function(e, t, r, n, a, s) {
                    if (a = a || {}, n = this.str2buf(n), t = this.str2buf(t), !h(s)) return this.marshal(this.deriveKey(e, r, a), t, r, n, a);
                    this.deriveKey(e, r, a, function(e) {
                        s(this.marshal(e, t, r, n, a))
                    }.bind(this))
                },
                recover: function(e, t, r) {
                    var n, a, s, i, o, c = this;

                    function u(e, r, a, s, i) {
                        var o;
                        if (c.getMAC(e, s) !== n.mac) throw new Error("message authentication code mismatch");
                        return o = "1" === t.version ? _(e.slice(0, 16)).slice(0, 16) : e.slice(0, 16), c.decrypt(s, o, a, i)
                    }
                    if (n = t.Crypto || t.crypto, a = this.str2buf(n.cipherparams.iv), s = this.str2buf(n.kdfparams.salt), i = this.str2buf(n.ciphertext), o = n.cipher, "pbkdf2" === n.kdf && "hmac-sha256" !== n.kdfparams.prf) throw new Error("PBKDF2 only supported with HMAC-SHA256");
                    if (!h(r)) return u(this.deriveKey(e, s, n), 0, a, i, o);
                    this.deriveKey(e, s, n, (function(e) {
                        try {
                            r(u(e, 0, a, i, o))
                        } catch (e) {
                            r(e)
                        }
                    }))
                },
                generateKeystoreFilename: function(e) {
                    var t = "UTC--" + (new Date).toISOString() + "--" + e;
                    return "win32" === process.platform && (t = t.split(":").join("-")), t
                },
                exportToFile: function(e, t, n) {
                    var a, s, i, o;
                    return t = t || "keystore", a = this.generateKeystoreFilename(e.address), i = JSON.stringify(e), this.browser ? h(n) ? n(i) : i : (s = r(104).join(t, a), o = r(142), h(n) ? void o.writeFile(s, i, (function(e) {
                        if (e) return n(e);
                        n(s)
                    })) : (o.writeFileSync(s, i), s))
                },
                importFromFile: function(e, t, n) {
                    var a, s, i, o;
                    if (this.browser) throw new Error("method only available in Node.js");

                    function c(e, t, r) {
                        var n, a, s = null;
                        for (n = 0, a = r.length; n < a; ++n)
                            if (r[n].indexOf(t) > -1) {
                                s = i.join(e, r[n]), o.lstatSync(s).isDirectory() && (s = i.join(s, r[n]));
                                break
                            } return s
                    }
                    if (i = r(104), o = r(142), e = (e = e.replace("0x", "")).toLowerCase(), t = t || i.join(process.env.HOME, ".ethereum"), a = i.join(t, "keystore"), !h(n)) {
                        if (!(s = c(a, e, o.readdirSync(a)))) throw new Error("could not find key file for address " + e);
                        return JSON.parse(o.readFileSync(s))
                    }
                    o.readdir(a, (function(t, r) {
                        var s;
                        return t ? n(t) : (s = c(a, e, r), n(s ? JSON.parse(o.readFileSync(s)) : new Error("could not find key file for address " + e)))
                    }))
                }
            }
        },
        3190: function(e, t, r) {
            for (var n = r(3191), a = [], s = {}, i = 0; i < 256; ++i) a[i] = (i + 256).toString(16).substr(1), s[a[i]] = i;

            function o(e, t) {
                var r = t || 0,
                    n = a;
                return n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]]
            }
            var c = n(),
                h = [1 | c[0], c[1], c[2], c[3], c[4], c[5]],
                _ = 16383 & (c[6] << 8 | c[7]),
                u = 0,
                l = 0;

            function p(e, t, r) {
                var a = t && r || 0;
                "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
                var s = (e = e || {}).random || (e.rng || n)();
                if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t)
                    for (var i = 0; i < 16; ++i) t[a + i] = s[i];
                return t || o(s)
            }
            var y = p;
            y.v1 = function(e, t, r) {
                var n = t && r || 0,
                    a = t || [],
                    s = void 0 !== (e = e || {}).clockseq ? e.clockseq : _,
                    i = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                    c = void 0 !== e.nsecs ? e.nsecs : l + 1,
                    p = i - u + (c - l) / 1e4;
                if (p < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (p < 0 || i > u) && void 0 === e.nsecs && (c = 0), c >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                u = i, l = c, _ = s;
                var y = (1e4 * (268435455 & (i += 122192928e5)) + c) % 4294967296;
                a[n++] = y >>> 24 & 255, a[n++] = y >>> 16 & 255, a[n++] = y >>> 8 & 255, a[n++] = 255 & y;
                var d = i / 4294967296 * 1e4 & 268435455;
                a[n++] = d >>> 8 & 255, a[n++] = 255 & d, a[n++] = d >>> 24 & 15 | 16, a[n++] = d >>> 16 & 255, a[n++] = s >>> 8 | 128, a[n++] = 255 & s;
                for (var f = e.node || h, v = 0; v < 6; ++v) a[n + v] = f[v];
                return t || o(a)
            }, y.v4 = p, e.exports = y
        },
        3191: function(e, t) {
            var r, n = global.crypto || global.msCrypto;
            if (n && n.getRandomValues) {
                var a = new Uint8Array(16);
                r = function() {
                    return n.getRandomValues(a), a
                }
            }
            if (!r) {
                var s = new Array(16);
                r = function() {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), s[t] = e >>> ((3 & t) << 3) & 255;
                    return s
                }
            }
            e.exports = r
        },
        3192: function(e, t, r) {
            e.exports = r(3193)(r(3194))
        },
        3193: function(e, t) {
            const r = "Impossible case. Please create issue.",
                n = "The tweak was out of range or the resulted private key is invalid",
                a = "The tweak was out of range or equal to zero",
                s = "Unknow error on context randomization",
                i = "Private Key is invalid",
                o = "Public Key could not be parsed",
                c = "Public Key serialization error",
                h = "The sum of the public keys is not valid",
                _ = "Signature could not be parsed",
                u = "The nonce generation function failed, or the private key was invalid",
                l = "Public key could not be recover",
                p = "Scalar was invalid (zero or overflow)";

            function y(e, t) {
                if (!e) throw new Error(t)
            }

            function d(e, t, r) {
                if (y(t instanceof Uint8Array, `Expected ${e} to be an Uint8Array`), void 0 !== r)
                    if (Array.isArray(r)) {
                        const n = `Expected ${e} to be an Uint8Array with length [${r.join(", ")}]`;
                        y(r.includes(t.length), n)
                    } else {
                        const n = `Expected ${e} to be an Uint8Array with length ${r}`;
                        y(t.length === r, n)
                    }
            }

            function f(e) {
                y("Boolean" === b(e), "Expected compressed to be a Boolean")
            }

            function v(e = (e => new Uint8Array(e)), t) {
                return "function" == typeof e && (e = e(t)), d("output", e, t), e
            }

            function b(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }
            e.exports = e => ({
                contextRandomize(t) {
                    switch (y(null === t || t instanceof Uint8Array, "Expected seed to be an Uint8Array or null"), null !== t && d("seed", t, 32), e.contextRandomize(t)) {
                        case 1:
                            throw new Error(s)
                    }
                },
                privateKeyVerify: t => (d("private key", t, 32), 0 === e.privateKeyVerify(t)),
                privateKeyNegate(t) {
                    switch (d("private key", t, 32), e.privateKeyNegate(t)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(r)
                    }
                },
                privateKeyTweakAdd(t, r) {
                    switch (d("private key", t, 32), d("tweak", r, 32), e.privateKeyTweakAdd(t, r)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(n)
                    }
                },
                privateKeyTweakMul(t, r) {
                    switch (d("private key", t, 32), d("tweak", r, 32), e.privateKeyTweakMul(t, r)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(a)
                    }
                },
                publicKeyVerify: t => (d("public key", t, [33, 65]), 0 === e.publicKeyVerify(t)),
                publicKeyCreate(t, r = !0, n) {
                    switch (d("private key", t, 32), f(r), n = v(n, r ? 33 : 65), e.publicKeyCreate(n, t)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(i);
                        case 2:
                            throw new Error(c)
                    }
                },
                publicKeyConvert(t, r = !0, n) {
                    switch (d("public key", t, [33, 65]), f(r), n = v(n, r ? 33 : 65), e.publicKeyConvert(n, t)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(o);
                        case 2:
                            throw new Error(c)
                    }
                },
                publicKeyNegate(t, n = !0, a) {
                    switch (d("public key", t, [33, 65]), f(n), a = v(a, n ? 33 : 65), e.publicKeyNegate(a, t)) {
                        case 0:
                            return a;
                        case 1:
                            throw new Error(o);
                        case 2:
                            throw new Error(r);
                        case 3:
                            throw new Error(c)
                    }
                },
                publicKeyCombine(t, r = !0, n) {
                    y(Array.isArray(t), "Expected public keys to be an Array"), y(t.length > 0, "Expected public keys array will have more than zero items");
                    for (const e of t) d("public key", e, [33, 65]);
                    switch (f(r), n = v(n, r ? 33 : 65), e.publicKeyCombine(n, t)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(o);
                        case 2:
                            throw new Error(h);
                        case 3:
                            throw new Error(c)
                    }
                },
                publicKeyTweakAdd(t, r, a = !0, s) {
                    switch (d("public key", t, [33, 65]), d("tweak", r, 32), f(a), s = v(s, a ? 33 : 65), e.publicKeyTweakAdd(s, t, r)) {
                        case 0:
                            return s;
                        case 1:
                            throw new Error(o);
                        case 2:
                            throw new Error(n)
                    }
                },
                publicKeyTweakMul(t, r, n = !0, s) {
                    switch (d("public key", t, [33, 65]), d("tweak", r, 32), f(n), s = v(s, n ? 33 : 65), e.publicKeyTweakMul(s, t, r)) {
                        case 0:
                            return s;
                        case 1:
                            throw new Error(o);
                        case 2:
                            throw new Error(a)
                    }
                },
                signatureNormalize(t) {
                    switch (d("signature", t, 64), e.signatureNormalize(t)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(_)
                    }
                },
                signatureExport(t, n) {
                    d("signature", t, 64);
                    const a = {
                        output: n = v(n, 72),
                        outputlen: 72
                    };
                    switch (e.signatureExport(a, t)) {
                        case 0:
                            return n.slice(0, a.outputlen);
                        case 1:
                            throw new Error(_);
                        case 2:
                            throw new Error(r)
                    }
                },
                signatureImport(t, n) {
                    switch (d("signature", t), n = v(n, 64), e.signatureImport(n, t)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(_);
                        case 2:
                            throw new Error(r)
                    }
                },
                ecdsaSign(t, n, a = {}, s) {
                    d("message", t, 32), d("private key", n, 32), y("Object" === b(a), "Expected options to be an Object"), void 0 !== a.data && d("options.data", a.data), void 0 !== a.noncefn && y("Function" === b(a.noncefn), "Expected options.noncefn to be a Function");
                    const i = {
                        signature: s = v(s, 64),
                        recid: null
                    };
                    switch (e.ecdsaSign(i, t, n, a.data, a.noncefn)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(u);
                        case 2:
                            throw new Error(r)
                    }
                },
                ecdsaVerify(t, r, n) {
                    switch (d("signature", t, 64), d("message", r, 32), d("public key", n, [33, 65]), e.ecdsaVerify(t, r, n)) {
                        case 0:
                            return !0;
                        case 3:
                            return !1;
                        case 1:
                            throw new Error(_);
                        case 2:
                            throw new Error(o)
                    }
                },
                ecdsaRecover(t, n, a, s = !0, i) {
                    switch (d("signature", t, 64), y("Number" === b(n) && n >= 0 && n <= 3, "Expected recovery id to be a Number within interval [0, 3]"), d("message", a, 32), f(s), i = v(i, s ? 33 : 65), e.ecdsaRecover(i, t, n, a)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(_);
                        case 2:
                            throw new Error(l);
                        case 3:
                            throw new Error(r)
                    }
                },
                ecdh(t, r, n = {}, a) {
                    switch (d("public key", t, [33, 65]), d("private key", r, 32), y("Object" === b(n), "Expected options to be an Object"), void 0 !== n.data && d("options.data", n.data), void 0 !== n.hashfn ? (y("Function" === b(n.hashfn), "Expected options.hashfn to be a Function"), void 0 !== n.xbuf && d("options.xbuf", n.xbuf, 32), void 0 !== n.ybuf && d("options.ybuf", n.ybuf, 32), d("output", a)) : a = v(a, 32), e.ecdh(a, t, r, n.data, n.hashfn, n.xbuf, n.ybuf)) {
                        case 0:
                            return a;
                        case 1:
                            throw new Error(o);
                        case 2:
                            throw new Error(p)
                    }
                }
            })
        },
        3194: function(e, t, r) {
            const n = new(0, r(85).ec)("secp256k1"),
                a = n.curve,
                s = a.n.constructor;

            function i(e) {
                const t = e[0];
                switch (t) {
                    case 2:
                    case 3:
                        return 33 !== e.length ? null : function(e, t) {
                            let r = new s(t);
                            if (r.cmp(a.p) >= 0) return null;
                            r = r.toRed(a.red);
                            let i = r.redSqr().redIMul(r).redIAdd(a.b).redSqrt();
                            return 3 === e !== i.isOdd() && (i = i.redNeg()), n.keyPair({
                                pub: {
                                    x: r,
                                    y: i
                                }
                            })
                        }(t, e.subarray(1, 33));
                    case 4:
                    case 6:
                    case 7:
                        return 65 !== e.length ? null : function(e, t, r) {
                            let i = new s(t),
                                o = new s(r);
                            if (i.cmp(a.p) >= 0 || o.cmp(a.p) >= 0) return null;
                            if (i = i.toRed(a.red), o = o.toRed(a.red), (6 === e || 7 === e) && o.isOdd() !== (7 === e)) return null;
                            const c = i.redSqr().redIMul(i);
                            return o.redSqr().redISub(c.redIAdd(a.b)).isZero() ? n.keyPair({
                                pub: {
                                    x: i,
                                    y: o
                                }
                            }) : null
                        }(t, e.subarray(1, 33), e.subarray(33, 65));
                    default:
                        return null
                }
            }

            function o(e, t) {
                const r = t.encode(null, 33 === e.length);
                for (let t = 0; t < e.length; ++t) e[t] = r[t]
            }
            e.exports = {
                contextRandomize: () => 0,
                privateKeyVerify(e) {
                    const t = new s(e);
                    return t.cmp(a.n) < 0 && !t.isZero() ? 0 : 1
                },
                privateKeyNegate(e) {
                    const t = new s(e),
                        r = a.n.sub(t).umod(a.n).toArrayLike(Uint8Array, "be", 32);
                    return e.set(r), 0
                },
                privateKeyTweakAdd(e, t) {
                    const r = new s(t);
                    if (r.cmp(a.n) >= 0) return 1;
                    if (r.iadd(new s(e)), r.cmp(a.n) >= 0 && r.isub(a.n), r.isZero()) return 1;
                    const n = r.toArrayLike(Uint8Array, "be", 32);
                    return e.set(n), 0
                },
                privateKeyTweakMul(e, t) {
                    let r = new s(t);
                    if (r.cmp(a.n) >= 0 || r.isZero()) return 1;
                    r.imul(new s(e)), r.cmp(a.n) >= 0 && (r = r.umod(a.n));
                    const n = r.toArrayLike(Uint8Array, "be", 32);
                    return e.set(n), 0
                },
                publicKeyVerify: e => null === i(e) ? 1 : 0,
                publicKeyCreate(e, t) {
                    const r = new s(t);
                    if (r.cmp(a.n) >= 0 || r.isZero()) return 1;
                    return o(e, n.keyFromPrivate(t).getPublic()), 0
                },
                publicKeyConvert(e, t) {
                    const r = i(t);
                    if (null === r) return 1;
                    return o(e, r.getPublic()), 0
                },
                publicKeyNegate(e, t) {
                    const r = i(t);
                    if (null === r) return 1;
                    const n = r.getPublic();
                    return n.y = n.y.redNeg(), o(e, n), 0
                },
                publicKeyCombine(e, t) {
                    const r = new Array(t.length);
                    for (let e = 0; e < t.length; ++e)
                        if (r[e] = i(t[e]), null === r[e]) return 1;
                    let n = r[0].getPublic();
                    for (let e = 1; e < r.length; ++e) n = n.add(r[e].pub);
                    return n.isInfinity() ? 2 : (o(e, n), 0)
                },
                publicKeyTweakAdd(e, t, r) {
                    const n = i(t);
                    if (null === n) return 1;
                    if ((r = new s(r)).cmp(a.n) >= 0) return 2;
                    const c = n.getPublic().add(a.g.mul(r));
                    return c.isInfinity() ? 2 : (o(e, c), 0)
                },
                publicKeyTweakMul(e, t, r) {
                    const n = i(t);
                    if (null === n) return 1;
                    if ((r = new s(r)).cmp(a.n) >= 0 || r.isZero()) return 2;
                    return o(e, n.getPublic().mul(r)), 0
                },
                signatureNormalize(e) {
                    const t = new s(e.subarray(0, 32)),
                        r = new s(e.subarray(32, 64));
                    return t.cmp(a.n) >= 0 || r.cmp(a.n) >= 0 ? 1 : (1 === r.cmp(n.nh) && e.set(a.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32), 0)
                },
                signatureExport(e, t) {
                    const r = t.subarray(0, 32),
                        n = t.subarray(32, 64);
                    if (new s(r).cmp(a.n) >= 0) return 1;
                    if (new s(n).cmp(a.n) >= 0) return 1;
                    const {
                        output: i
                    } = e;
                    let o = i.subarray(4, 37);
                    o[0] = 0, o.set(r, 1);
                    let c = 33,
                        h = 0;
                    for (; c > 1 && 0 === o[h] && !(128 & o[h + 1]); --c, ++h);
                    if (o = o.subarray(h), 128 & o[0]) return 1;
                    if (c > 1 && 0 === o[0] && !(128 & o[1])) return 1;
                    let _ = i.subarray(39, 72);
                    _[0] = 0, _.set(n, 1);
                    let u = 33,
                        l = 0;
                    for (; u > 1 && 0 === _[l] && !(128 & _[l + 1]); --u, ++l);
                    return _ = _.subarray(l), 128 & _[0] || u > 1 && 0 === _[0] && !(128 & _[1]) ? 1 : (e.outputlen = 6 + c + u, i[0] = 48, i[1] = e.outputlen - 2, i[2] = 2, i[3] = o.length, i.set(o, 4), i[4 + c] = 2, i[5 + c] = _.length, i.set(_, 6 + c), 0)
                },
                signatureImport(e, t) {
                    if (t.length < 8) return 1;
                    if (t.length > 72) return 1;
                    if (48 !== t[0]) return 1;
                    if (t[1] !== t.length - 2) return 1;
                    if (2 !== t[2]) return 1;
                    const r = t[3];
                    if (0 === r) return 1;
                    if (5 + r >= t.length) return 1;
                    if (2 !== t[4 + r]) return 1;
                    const n = t[5 + r];
                    if (0 === n) return 1;
                    if (6 + r + n !== t.length) return 1;
                    if (128 & t[4]) return 1;
                    if (r > 1 && 0 === t[4] && !(128 & t[5])) return 1;
                    if (128 & t[r + 6]) return 1;
                    if (n > 1 && 0 === t[r + 6] && !(128 & t[r + 7])) return 1;
                    let i = t.subarray(4, 4 + r);
                    if (33 === i.length && 0 === i[0] && (i = i.subarray(1)), i.length > 32) return 1;
                    let o = t.subarray(6 + r);
                    if (33 === o.length && 0 === o[0] && (o = o.slice(1)), o.length > 32) throw new Error("S length is too long");
                    let c = new s(i);
                    c.cmp(a.n) >= 0 && (c = new s(0));
                    let h = new s(t.subarray(6 + r));
                    return h.cmp(a.n) >= 0 && (h = new s(0)), e.set(c.toArrayLike(Uint8Array, "be", 32), 0), e.set(h.toArrayLike(Uint8Array, "be", 32), 32), 0
                },
                ecdsaSign(e, t, r, i, o) {
                    if (o) {
                        const e = o;
                        o = n => {
                            const a = e(t, r, null, i, n);
                            if (!(a instanceof Uint8Array && 32 === a.length)) throw new Error("This is the way");
                            return new s(a)
                        }
                    }
                    const c = new s(r);
                    if (c.cmp(a.n) >= 0 || c.isZero()) return 1;
                    let h;
                    try {
                        h = n.sign(t, r, {
                            canonical: !0,
                            k: o,
                            pers: i
                        })
                    } catch (e) {
                        return 1
                    }
                    return e.signature.set(h.r.toArrayLike(Uint8Array, "be", 32), 0), e.signature.set(h.s.toArrayLike(Uint8Array, "be", 32), 32), e.recid = h.recoveryParam, 0
                },
                ecdsaVerify(e, t, r) {
                    const o = {
                            r: e.subarray(0, 32),
                            s: e.subarray(32, 64)
                        },
                        c = new s(o.r),
                        h = new s(o.s);
                    if (c.cmp(a.n) >= 0 || h.cmp(a.n) >= 0) return 1;
                    if (1 === h.cmp(n.nh) || c.isZero() || h.isZero()) return 3;
                    const _ = i(r);
                    if (null === _) return 2;
                    const u = _.getPublic();
                    return n.verify(t, o, u) ? 0 : 3
                },
                ecdsaRecover(e, t, r, i) {
                    const c = {
                            r: t.slice(0, 32),
                            s: t.slice(32, 64)
                        },
                        h = new s(c.r),
                        _ = new s(c.s);
                    if (h.cmp(a.n) >= 0 || _.cmp(a.n) >= 0) return 1;
                    if (h.isZero() || _.isZero()) return 2;
                    let u;
                    try {
                        u = n.recoverPubKey(i, c, r)
                    } catch (e) {
                        return 2
                    }
                    return o(e, u), 0
                },
                ecdh(e, t, r, o, c, h, _) {
                    const u = i(t);
                    if (null === u) return 1;
                    const l = new s(r);
                    if (l.cmp(a.n) >= 0 || l.isZero()) return 2;
                    const p = u.getPublic().mul(l);
                    if (void 0 === c) {
                        const t = p.encode(null, !0),
                            r = n.hash().update(t).digest();
                        for (let t = 0; t < 32; ++t) e[t] = r[t]
                    } else {
                        h || (h = new Uint8Array(32));
                        const t = p.getX().toArray("be", 32);
                        for (let e = 0; e < 32; ++e) h[e] = t[e];
                        _ || (_ = new Uint8Array(32));
                        const r = p.getY().toArray("be", 32);
                        for (let e = 0; e < 32; ++e) _[e] = r[e];
                        const n = c(h, _, o);
                        if (!(n instanceof Uint8Array && n.length === e.length)) return 2;
                        e.set(n)
                    }
                    return 0
                }
            }
        },
        404: function(e, t, r) {
            "use strict";
            var n = {};

            function a(e, t, r) {
                r || (r = Error);
                var a = function(e) {
                    var r, n;

                    function a(r, n, a) {
                        return e.call(this, function(e, r, n) {
                            return "string" == typeof t ? t : t(e, r, n)
                        }(r, n, a)) || this
                    }
                    return n = e, (r = a).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n, a
                }(r);
                a.prototype.name = r.name, a.prototype.code = e, n[e] = a
            }

            function s(e, t) {
                if (Array.isArray(e)) {
                    var r = e.length;
                    return e = e.map((function(e) {
                        return String(e)
                    })), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
                }
                return "of ".concat(t, " ").concat(String(e))
            }
            a("ERR_INVALID_OPT_VALUE", (function(e, t) {
                return 'The value "' + t + '" is invalid for option "' + e + '"'
            }), TypeError), a("ERR_INVALID_ARG_TYPE", (function(e, t, r) {
                var n, a, i, o;
                if ("string" == typeof t && (a = "not ", t.substr(!i || i < 0 ? 0 : +i, a.length) === a) ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", function(e, t, r) {
                        return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
                    }(e, " argument")) o = "The ".concat(e, " ").concat(n, " ").concat(s(t, "type"));
                else {
                    var c = function(e, t, r) {
                        return "number" != typeof r && (r = 0), !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
                    }(e, ".") ? "property" : "argument";
                    o = 'The "'.concat(e, '" ').concat(c, " ").concat(n, " ").concat(s(t, "type"))
                }
                return o += ". Received type ".concat(typeof r)
            }), TypeError), a("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), a("ERR_METHOD_NOT_IMPLEMENTED", (function(e) {
                return "The " + e + " method is not implemented"
            })), a("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), a("ERR_STREAM_DESTROYED", (function(e) {
                return "Cannot call " + e + " after a stream was destroyed"
            })), a("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), a("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), a("ERR_STREAM_WRITE_AFTER_END", "write after end"), a("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), a("ERR_UNKNOWN_ENCODING", (function(e) {
                return "Unknown encoding: " + e
            }), TypeError), a("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.codes = n
        },
        405: function(e, t, r) {
            "use strict";
            var n = Object.keys || function(e) {
                var t = [];
                for (var r in e) t.push(r);
                return t
            };
            e.exports = h;
            var a = r(1735),
                s = r(1739);
            r(18)(h, a);
            for (var i = n(s.prototype), o = 0; o < i.length; o++) {
                var c = i[o];
                h.prototype[c] || (h.prototype[c] = s.prototype[c])
            }

            function h(e) {
                if (!(this instanceof h)) return new h(e);
                a.call(this, e), s.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", _)))
            }

            function _() {
                this._writableState.ended || process.nextTick(u, this)
            }

            function u(e) {
                e.end()
            }
            Object.defineProperty(h.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(h.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }), Object.defineProperty(h.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }), Object.defineProperty(h.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                },
                set: function(e) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                }
            })
        },
        4404: function(e, t, r) {
            var n, a, s, i, o;
            o = "object" == typeof(i = this).sodium && "function" == typeof i.sodium.onload ? i.sodium.onload : null, a = [t, r(4405)], void 0 !== (s = "function" == typeof(n = function(e, t) {
                "use strict";
                var r, n = t.ready.then((function() {
                    function n() {
                        if (0 !== r._sodium_init()) throw new Error("libsodium was not correctly initialized.");
                        for (var t = ["crypto_aead_chacha20poly1305_decrypt", "crypto_aead_chacha20poly1305_decrypt_detached", "crypto_aead_chacha20poly1305_encrypt", "crypto_aead_chacha20poly1305_encrypt_detached", "crypto_aead_chacha20poly1305_ietf_decrypt", "crypto_aead_chacha20poly1305_ietf_decrypt_detached", "crypto_aead_chacha20poly1305_ietf_encrypt", "crypto_aead_chacha20poly1305_ietf_encrypt_detached", "crypto_aead_chacha20poly1305_ietf_keygen", "crypto_aead_chacha20poly1305_keygen", "crypto_aead_xchacha20poly1305_ietf_decrypt", "crypto_aead_xchacha20poly1305_ietf_decrypt_detached", "crypto_aead_xchacha20poly1305_ietf_encrypt", "crypto_aead_xchacha20poly1305_ietf_encrypt_detached", "crypto_aead_xchacha20poly1305_ietf_keygen", "crypto_auth", "crypto_auth_hmacsha256", "crypto_auth_hmacsha256_keygen", "crypto_auth_hmacsha256_verify", "crypto_auth_hmacsha512", "crypto_auth_hmacsha512_keygen", "crypto_auth_hmacsha512_verify", "crypto_auth_keygen", "crypto_auth_verify", "crypto_box_beforenm", "crypto_box_curve25519xchacha20poly1305_keypair", "crypto_box_curve25519xchacha20poly1305_seal", "crypto_box_curve25519xchacha20poly1305_seal_open", "crypto_box_detached", "crypto_box_easy", "crypto_box_easy_afternm", "crypto_box_keypair", "crypto_box_open_detached", "crypto_box_open_easy", "crypto_box_open_easy_afternm", "crypto_box_seal", "crypto_box_seal_open", "crypto_box_seed_keypair", "crypto_core_ristretto255_add", "crypto_core_ristretto255_from_hash", "crypto_core_ristretto255_is_valid_point", "crypto_core_ristretto255_random", "crypto_core_ristretto255_scalar_add", "crypto_core_ristretto255_scalar_complement", "crypto_core_ristretto255_scalar_invert", "crypto_core_ristretto255_scalar_mul", "crypto_core_ristretto255_scalar_negate", "crypto_core_ristretto255_scalar_random", "crypto_core_ristretto255_scalar_reduce", "crypto_core_ristretto255_scalar_sub", "crypto_core_ristretto255_sub", "crypto_generichash", "crypto_generichash_blake2b_salt_personal", "crypto_generichash_final", "crypto_generichash_init", "crypto_generichash_keygen", "crypto_generichash_update", "crypto_hash", "crypto_hash_sha256", "crypto_hash_sha512", "crypto_kdf_derive_from_key", "crypto_kdf_keygen", "crypto_kx_client_session_keys", "crypto_kx_keypair", "crypto_kx_seed_keypair", "crypto_kx_server_session_keys", "crypto_onetimeauth", "crypto_onetimeauth_final", "crypto_onetimeauth_init", "crypto_onetimeauth_keygen", "crypto_onetimeauth_update", "crypto_onetimeauth_verify", "crypto_pwhash", "crypto_pwhash_scryptsalsa208sha256", "crypto_pwhash_scryptsalsa208sha256_ll", "crypto_pwhash_scryptsalsa208sha256_str", "crypto_pwhash_scryptsalsa208sha256_str_verify", "crypto_pwhash_str", "crypto_pwhash_str_verify", "crypto_scalarmult", "crypto_scalarmult_base", "crypto_scalarmult_ristretto255", "crypto_scalarmult_ristretto255_base", "crypto_secretbox_detached", "crypto_secretbox_easy", "crypto_secretbox_keygen", "crypto_secretbox_open_detached", "crypto_secretbox_open_easy", "crypto_secretstream_xchacha20poly1305_init_pull", "crypto_secretstream_xchacha20poly1305_init_push", "crypto_secretstream_xchacha20poly1305_keygen", "crypto_secretstream_xchacha20poly1305_pull", "crypto_secretstream_xchacha20poly1305_push", "crypto_secretstream_xchacha20poly1305_rekey", "crypto_shorthash", "crypto_shorthash_keygen", "crypto_shorthash_siphashx24", "crypto_sign", "crypto_sign_detached", "crypto_sign_ed25519_pk_to_curve25519", "crypto_sign_ed25519_sk_to_curve25519", "crypto_sign_ed25519_sk_to_pk", "crypto_sign_ed25519_sk_to_seed", "crypto_sign_final_create", "crypto_sign_final_verify", "crypto_sign_init", "crypto_sign_keypair", "crypto_sign_open", "crypto_sign_seed_keypair", "crypto_sign_update", "crypto_sign_verify_detached", "crypto_stream_chacha20", "crypto_stream_chacha20_ietf_xor", "crypto_stream_chacha20_ietf_xor_ic", "crypto_stream_chacha20_keygen", "crypto_stream_chacha20_xor", "crypto_stream_chacha20_xor_ic", "crypto_stream_keygen", "crypto_stream_xchacha20_keygen", "crypto_stream_xchacha20_xor", "crypto_stream_xchacha20_xor_ic", "randombytes_buf", "randombytes_buf_deterministic", "randombytes_close", "randombytes_random", "randombytes_set_implementation", "randombytes_stir", "randombytes_uniform", "sodium_version_string"], n = [w, k, E, S, x, T, A, R, M, B, K, L, Y, O, I, N, P, C, U, D, j, F, z, q, V, W, G, H, X, Z, J, $, Q, ee, te, re, ne, ae, se, ie, oe, ce, he, _e, ue, le, pe, ye, de, fe, ve, be, ge, me, we, ke, Ee, Se, xe, Te, Ae, Re, Me, Be, Ke, Le, Ye, Oe, Ie, Ne, Pe, Ce, Ue, De, je, Fe, ze, qe, Ve, We, Ge, He, Xe, Ze, Je, $e, Qe, et, tt, rt, nt, at, st, it, ot, ct, ht, _t, ut, lt, pt, yt, dt, ft, vt, bt, gt, mt, wt, kt, Et, St, xt, Tt, At, Rt, Mt, Bt, Kt, Lt, Yt, Ot, It, Nt, Pt, Ct, Ut, Dt, jt], a = 0; a < n.length; a++) "function" == typeof r["_" + t[a]] && (e[t[a]] = n[a]);
                        var s = ["SODIUM_LIBRARY_VERSION_MAJOR", "SODIUM_LIBRARY_VERSION_MINOR", "crypto_aead_chacha20poly1305_ABYTES", "crypto_aead_chacha20poly1305_KEYBYTES", "crypto_aead_chacha20poly1305_MESSAGEBYTES_MAX", "crypto_aead_chacha20poly1305_NPUBBYTES", "crypto_aead_chacha20poly1305_NSECBYTES", "crypto_aead_chacha20poly1305_ietf_ABYTES", "crypto_aead_chacha20poly1305_ietf_KEYBYTES", "crypto_aead_chacha20poly1305_ietf_MESSAGEBYTES_MAX", "crypto_aead_chacha20poly1305_ietf_NPUBBYTES", "crypto_aead_chacha20poly1305_ietf_NSECBYTES", "crypto_aead_xchacha20poly1305_ietf_ABYTES", "crypto_aead_xchacha20poly1305_ietf_KEYBYTES", "crypto_aead_xchacha20poly1305_ietf_MESSAGEBYTES_MAX", "crypto_aead_xchacha20poly1305_ietf_NPUBBYTES", "crypto_aead_xchacha20poly1305_ietf_NSECBYTES", "crypto_auth_BYTES", "crypto_auth_KEYBYTES", "crypto_auth_hmacsha256_BYTES", "crypto_auth_hmacsha256_KEYBYTES", "crypto_auth_hmacsha512_BYTES", "crypto_auth_hmacsha512_KEYBYTES", "crypto_box_BEFORENMBYTES", "crypto_box_MACBYTES", "crypto_box_MESSAGEBYTES_MAX", "crypto_box_NONCEBYTES", "crypto_box_PUBLICKEYBYTES", "crypto_box_SEALBYTES", "crypto_box_SECRETKEYBYTES", "crypto_box_SEEDBYTES", "crypto_box_curve25519xchacha20poly1305_NONCEBYTES", "crypto_box_curve25519xchacha20poly1305_PUBLICKEYBYTES", "crypto_box_curve25519xchacha20poly1305_SECRETKEYBYTES", "crypto_core_hchacha20_CONSTBYTES", "crypto_core_hchacha20_INPUTBYTES", "crypto_core_hchacha20_KEYBYTES", "crypto_core_hchacha20_OUTPUTBYTES", "crypto_core_ristretto255_BYTES", "crypto_core_ristretto255_HASHBYTES", "crypto_core_ristretto255_NONREDUCEDSCALARBYTES", "crypto_core_ristretto255_SCALARBYTES", "crypto_generichash_BYTES", "crypto_generichash_BYTES_MAX", "crypto_generichash_BYTES_MIN", "crypto_generichash_KEYBYTES", "crypto_generichash_KEYBYTES_MAX", "crypto_generichash_KEYBYTES_MIN", "crypto_generichash_blake2b_BYTES", "crypto_generichash_blake2b_BYTES_MAX", "crypto_generichash_blake2b_BYTES_MIN", "crypto_generichash_blake2b_KEYBYTES", "crypto_generichash_blake2b_KEYBYTES_MAX", "crypto_generichash_blake2b_KEYBYTES_MIN", "crypto_generichash_blake2b_PERSONALBYTES", "crypto_generichash_blake2b_SALTBYTES", "crypto_hash_BYTES", "crypto_hash_sha256_BYTES", "crypto_hash_sha512_BYTES", "crypto_kdf_BYTES_MAX", "crypto_kdf_BYTES_MIN", "crypto_kdf_CONTEXTBYTES", "crypto_kdf_KEYBYTES", "crypto_kx_PUBLICKEYBYTES", "crypto_kx_SECRETKEYBYTES", "crypto_kx_SEEDBYTES", "crypto_kx_SESSIONKEYBYTES", "crypto_onetimeauth_BYTES", "crypto_onetimeauth_KEYBYTES", "crypto_pwhash_ALG_ARGON2I13", "crypto_pwhash_ALG_ARGON2ID13", "crypto_pwhash_ALG_DEFAULT", "crypto_pwhash_BYTES_MAX", "crypto_pwhash_BYTES_MIN", "crypto_pwhash_MEMLIMIT_INTERACTIVE", "crypto_pwhash_MEMLIMIT_MAX", "crypto_pwhash_MEMLIMIT_MIN", "crypto_pwhash_MEMLIMIT_MODERATE", "crypto_pwhash_MEMLIMIT_SENSITIVE", "crypto_pwhash_OPSLIMIT_INTERACTIVE", "crypto_pwhash_OPSLIMIT_MAX", "crypto_pwhash_OPSLIMIT_MIN", "crypto_pwhash_OPSLIMIT_MODERATE", "crypto_pwhash_OPSLIMIT_SENSITIVE", "crypto_pwhash_PASSWD_MAX", "crypto_pwhash_PASSWD_MIN", "crypto_pwhash_SALTBYTES", "crypto_pwhash_STRBYTES", "crypto_pwhash_STR_VERIFY", "crypto_pwhash_scryptsalsa208sha256_BYTES_MAX", "crypto_pwhash_scryptsalsa208sha256_BYTES_MIN", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_INTERACTIVE", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN", "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_SENSITIVE", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_INTERACTIVE", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN", "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_SENSITIVE", "crypto_pwhash_scryptsalsa208sha256_SALTBYTES", "crypto_pwhash_scryptsalsa208sha256_STRBYTES", "crypto_pwhash_scryptsalsa208sha256_STR_VERIFY", "crypto_scalarmult_BYTES", "crypto_scalarmult_SCALARBYTES", "crypto_scalarmult_ristretto255_BYTES", "crypto_scalarmult_ristretto255_SCALARBYTES", "crypto_secretbox_KEYBYTES", "crypto_secretbox_MACBYTES", "crypto_secretbox_MESSAGEBYTES_MAX", "crypto_secretbox_NONCEBYTES", "crypto_secretstream_xchacha20poly1305_ABYTES", "crypto_secretstream_xchacha20poly1305_HEADERBYTES", "crypto_secretstream_xchacha20poly1305_KEYBYTES", "crypto_secretstream_xchacha20poly1305_MESSAGEBYTES_MAX", "crypto_secretstream_xchacha20poly1305_MESSAGESBYTES_MAX", "crypto_secretstream_xchacha20poly1305_NPUBBYTES", "crypto_secretstream_xchacha20poly1305_TAG_FINAL", "crypto_secretstream_xchacha20poly1305_TAG_MESSAGE", "crypto_secretstream_xchacha20poly1305_TAG_PUSH", "crypto_secretstream_xchacha20poly1305_TAG_REKEY", "crypto_shorthash_BYTES", "crypto_shorthash_KEYBYTES", "crypto_shorthash_siphashx24_BYTES", "crypto_shorthash_siphashx24_KEYBYTES", "crypto_sign_BYTES", "crypto_sign_MESSAGEBYTES_MAX", "crypto_sign_PUBLICKEYBYTES", "crypto_sign_SECRETKEYBYTES", "crypto_sign_SEEDBYTES", "crypto_stream_KEYBYTES", "crypto_stream_MESSAGEBYTES_MAX", "crypto_stream_NONCEBYTES", "crypto_stream_chacha20_KEYBYTES", "crypto_stream_chacha20_NONCEBYTES", "crypto_stream_chacha20_ietf_KEYBYTES", "crypto_stream_chacha20_ietf_MESSAGEBYTES_MAX", "crypto_stream_chacha20_ietf_NONCEBYTES", "crypto_stream_xchacha20_KEYBYTES", "crypto_stream_xchacha20_MESSAGEBYTES_MAX", "crypto_stream_xchacha20_NONCEBYTES", "randombytes_SEEDBYTES"];
                        for (a = 0; a < s.length; a++) "function" == typeof(o = r["_" + s[a].toLowerCase()]) && (e[s[a]] = o());
                        var i = ["SODIUM_VERSION_STRING", "crypto_pwhash_STRPREFIX", "crypto_pwhash_scryptsalsa208sha256_STRPREFIX"];
                        for (a = 0; a < i.length; a++) {
                            var o;
                            "function" == typeof(o = r["_" + i[a].toLowerCase()]) && (e[i[a]] = r.UTF8ToString(o()))
                        }
                    }
                    r = t;
                    try {
                        n();
                        var a = new Uint8Array([98, 97, 108, 108, 115]),
                            s = e.randombytes_buf(e.crypto_secretbox_NONCEBYTES),
                            i = e.randombytes_buf(e.crypto_secretbox_KEYBYTES),
                            o = e.crypto_secretbox_easy(a, s, i),
                            c = e.crypto_secretbox_open_easy(o, s, i);
                        if (e.memcmp(a, c)) return
                    } catch (e) {
                        if (null == r.useBackupModule) throw new Error("Both wasm and asm failed to load" + e)
                    }
                    r.useBackupModule(), n()
                }));

                function a(e) {
                    if ("function" == typeof TextEncoder) return (new TextEncoder).encode(e);
                    e = unescape(encodeURIComponent(e));
                    for (var t = new Uint8Array(e.length), r = 0, n = e.length; r < n; r++) t[r] = e.charCodeAt(r);
                    return t
                }

                function s(e) {
                    if ("function" == typeof TextDecoder) return new TextDecoder("utf-8", {
                        fatal: !0
                    }).decode(e);
                    var t = Math.ceil(e.length / 8192);
                    if (t <= 1) try {
                        return decodeURIComponent(escape(String.fromCharCode.apply(null, e)))
                    } catch (e) {
                        throw new TypeError("The encoded data was not valid.")
                    }
                    for (var r = "", n = 0, a = 0; a < t; a++) {
                        var i = Array.prototype.slice.call(e, 8192 * a + n, 8192 * (a + 1) + n);
                        if (0 != i.length) {
                            var o, c = i.length,
                                h = 0;
                            do {
                                var _ = i[--c];
                                _ >= 240 ? (h = 4, o = !0) : _ >= 224 ? (h = 3, o = !0) : _ >= 192 ? (h = 2, o = !0) : _ < 128 && (h = 1, o = !0)
                            } while (!o);
                            for (var u = h - (i.length - c), l = 0; l < u; l++) n--, i.pop();
                            r += s(i)
                        }
                    }
                    return r
                }

                function i(e) {
                    e = m(null, e, "input");
                    for (var t, r, n, a = "", s = 0; s < e.length; s++) n = 87 + (r = 15 & e[s]) + (r - 10 >> 8 & -39) << 8 | 87 + (t = e[s] >>> 4) + (t - 10 >> 8 & -39), a += String.fromCharCode(255 & n) + String.fromCharCode(n >>> 8);
                    return a
                }
                var o = {
                    ORIGINAL: 1,
                    ORIGINAL_NO_PADDING: 3,
                    URLSAFE: 5,
                    URLSAFE_NO_PADDING: 7
                };

                function c(e) {
                    if (null == e) return o.URLSAFE_NO_PADDING;
                    if (e !== o.ORIGINAL && e !== o.ORIGINAL_NO_PADDING && e !== o.URLSAFE && e != o.URLSAFE_NO_PADDING) throw new Error("unsupported base64 variant");
                    return e
                }

                function h(e, t) {
                    t = c(t), e = m(a, e, "input");
                    var n, a = [],
                        i = 0 | Math.floor(e.length / 3),
                        o = e.length - 3 * i,
                        h = 4 * i + (0 !== o ? 0 == (2 & t) ? 4 : 2 + (o >>> 1) : 0),
                        _ = new p(h + 1),
                        u = y(e);
                    return a.push(u), a.push(_.address), 0 === r._sodium_bin2base64(_.address, _.length, u, e.length, t) && v(a, "conversion failed"), _.length = h, n = s(_.to_Uint8Array()), f(a), n
                }

                function _(e, t) {
                    var r = t || "uint8array";
                    if (!u(r)) throw new Error(r + " output format is not available");
                    if (e instanceof p) {
                        if ("uint8array" === r) return e.to_Uint8Array();
                        if ("text" === r) return s(e.to_Uint8Array());
                        if ("hex" === r) return i(e.to_Uint8Array());
                        if ("base64" === r) return h(e.to_Uint8Array(), o.URLSAFE_NO_PADDING);
                        throw new Error('What is output format "' + r + '"?')
                    }
                    if ("object" == typeof e) {
                        for (var n = Object.keys(e), a = {}, c = 0; c < n.length; c++) a[n[c]] = _(e[n[c]], r);
                        return a
                    }
                    if ("string" == typeof e) return e;
                    throw new TypeError("Cannot format output")
                }

                function u(e) {
                    for (var t = ["uint8array", "text", "hex", "base64"], r = 0; r < t.length; r++)
                        if (t[r] === e) return !0;
                    return !1
                }

                function l(e) {
                    if (e) {
                        if ("string" != typeof e) throw new TypeError("When defined, the output format must be a string");
                        if (!u(e)) throw new Error(e + " is not a supported output format")
                    }
                }

                function p(e) {
                    this.length = e, this.address = d(e)
                }

                function y(e) {
                    var t = d(e.length);
                    return r.HEAPU8.set(e, t), t
                }

                function d(e) {
                    var t = r._malloc(e);
                    if (0 === t) throw {
                        message: "_malloc() failed",
                        length: e
                    };
                    return t
                }

                function f(e) {
                    if (e)
                        for (var t = 0; t < e.length; t++) n = e[t], r._free(n);
                    var n
                }

                function v(e, t) {
                    throw f(e), new Error(t)
                }

                function b(e, t) {
                    throw f(e), new TypeError(t)
                }

                function g(e, t, r) {
                    null == t && b(e, r + " cannot be null or undefined")
                }

                function m(e, t, r) {
                    return g(e, t, r), t instanceof Uint8Array ? t : "string" == typeof t ? a(t) : void b(e, "unsupported input type for " + r)
                }

                function w(e, t, n, a, s, i) {
                    var o = [];
                    l(i);
                    var c = null;
                    null != e && (c = y(e = m(o, e, "secret_nonce")), e.length, o.push(c)), t = m(o, t, "ciphertext");
                    var h, u = r._crypto_aead_chacha20poly1305_abytes(),
                        d = t.length;
                    d < u && b(o, "ciphertext is too short"), h = y(t), o.push(h);
                    var g = null,
                        w = 0;
                    null != n && (g = y(n = m(o, n, "additional_data")), w = n.length, o.push(g)), a = m(o, a, "public_nonce");
                    var k, E = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
                    a.length !== E && b(o, "invalid public_nonce length"), k = y(a), o.push(k), s = m(o, s, "key");
                    var S, x = 0 | r._crypto_aead_chacha20poly1305_keybytes();
                    s.length !== x && b(o, "invalid key length"), S = y(s), o.push(S);
                    var T = new p(d - r._crypto_aead_chacha20poly1305_abytes() | 0),
                        A = T.address;
                    if (o.push(A), 0 === r._crypto_aead_chacha20poly1305_decrypt(A, null, c, h, d, 0, g, w, 0, k, S)) {
                        var R = _(T, i);
                        return f(o), R
                    }
                    v(o, "ciphertext cannot be decrypted using that key")
                }

                function k(e, t, n, a, s, i, o) {
                    var c = [];
                    l(o);
                    var h = null;
                    null != e && (h = y(e = m(c, e, "secret_nonce")), e.length, c.push(h));
                    var u = y(t = m(c, t, "ciphertext")),
                        d = t.length;
                    c.push(u), n = m(c, n, "mac");
                    var g, w = 0 | r._crypto_box_macbytes();
                    n.length !== w && b(c, "invalid mac length"), g = y(n), c.push(g);
                    var k = null,
                        E = 0;
                    null != a && (k = y(a = m(c, a, "additional_data")), E = a.length, c.push(k)), s = m(c, s, "public_nonce");
                    var S, x = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
                    s.length !== x && b(c, "invalid public_nonce length"), S = y(s), c.push(S), i = m(c, i, "key");
                    var T, A = 0 | r._crypto_aead_chacha20poly1305_keybytes();
                    i.length !== A && b(c, "invalid key length"), T = y(i), c.push(T);
                    var R = new p(0 | d),
                        M = R.address;
                    if (c.push(M), 0 === r._crypto_aead_chacha20poly1305_decrypt_detached(M, h, u, d, 0, g, k, E, 0, S, T)) {
                        var B = _(R, o);
                        return f(c), B
                    }
                    v(c, "ciphertext cannot be decrypted using that key")
                }

                function E(e, t, n, a, s, i) {
                    var o = [];
                    l(i);
                    var c = y(e = m(o, e, "message")),
                        h = e.length;
                    o.push(c);
                    var u = null,
                        d = 0;
                    null != t && (u = y(t = m(o, t, "additional_data")), d = t.length, o.push(u));
                    var g = null;
                    null != n && (g = y(n = m(o, n, "secret_nonce")), n.length, o.push(g)), a = m(o, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
                    a.length !== k && b(o, "invalid public_nonce length"), w = y(a), o.push(w), s = m(o, s, "key");
                    var E, S = 0 | r._crypto_aead_chacha20poly1305_keybytes();
                    s.length !== S && b(o, "invalid key length"), E = y(s), o.push(E);
                    var x = new p(h + r._crypto_aead_chacha20poly1305_abytes() | 0),
                        T = x.address;
                    if (o.push(T), 0 === r._crypto_aead_chacha20poly1305_encrypt(T, null, c, h, 0, u, d, 0, g, w, E)) {
                        var A = _(x, i);
                        return f(o), A
                    }
                    v(o, "invalid usage")
                }

                function S(e, t, n, a, s, i) {
                    var o = [];
                    l(i);
                    var c = y(e = m(o, e, "message")),
                        h = e.length;
                    o.push(c);
                    var u = null,
                        d = 0;
                    null != t && (u = y(t = m(o, t, "additional_data")), d = t.length, o.push(u));
                    var g = null;
                    null != n && (g = y(n = m(o, n, "secret_nonce")), n.length, o.push(g)), a = m(o, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
                    a.length !== k && b(o, "invalid public_nonce length"), w = y(a), o.push(w), s = m(o, s, "key");
                    var E, S = 0 | r._crypto_aead_chacha20poly1305_keybytes();
                    s.length !== S && b(o, "invalid key length"), E = y(s), o.push(E);
                    var x = new p(0 | h),
                        T = x.address;
                    o.push(T);
                    var A = new p(0 | r._crypto_aead_chacha20poly1305_abytes()),
                        R = A.address;
                    if (o.push(R), 0 === r._crypto_aead_chacha20poly1305_encrypt_detached(T, R, null, c, h, 0, u, d, 0, g, w, E)) {
                        var M = _({
                            ciphertext: x,
                            mac: A
                        }, i);
                        return f(o), M
                    }
                    v(o, "invalid usage")
                }

                function x(e, t, n, a, s, i) {
                    var o = [];
                    l(i);
                    var c = null;
                    null != e && (c = y(e = m(o, e, "secret_nonce")), e.length, o.push(c)), t = m(o, t, "ciphertext");
                    var h, u = r._crypto_aead_chacha20poly1305_ietf_abytes(),
                        d = t.length;
                    d < u && b(o, "ciphertext is too short"), h = y(t), o.push(h);
                    var g = null,
                        w = 0;
                    null != n && (g = y(n = m(o, n, "additional_data")), w = n.length, o.push(g)), a = m(o, a, "public_nonce");
                    var k, E = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
                    a.length !== E && b(o, "invalid public_nonce length"), k = y(a), o.push(k), s = m(o, s, "key");
                    var S, x = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
                    s.length !== x && b(o, "invalid key length"), S = y(s), o.push(S);
                    var T = new p(d - r._crypto_aead_chacha20poly1305_ietf_abytes() | 0),
                        A = T.address;
                    if (o.push(A), 0 === r._crypto_aead_chacha20poly1305_ietf_decrypt(A, null, c, h, d, 0, g, w, 0, k, S)) {
                        var R = _(T, i);
                        return f(o), R
                    }
                    v(o, "ciphertext cannot be decrypted using that key")
                }

                function T(e, t, n, a, s, i, o) {
                    var c = [];
                    l(o);
                    var h = null;
                    null != e && (h = y(e = m(c, e, "secret_nonce")), e.length, c.push(h));
                    var u = y(t = m(c, t, "ciphertext")),
                        d = t.length;
                    c.push(u), n = m(c, n, "mac");
                    var g, w = 0 | r._crypto_box_macbytes();
                    n.length !== w && b(c, "invalid mac length"), g = y(n), c.push(g);
                    var k = null,
                        E = 0;
                    null != a && (k = y(a = m(c, a, "additional_data")), E = a.length, c.push(k)), s = m(c, s, "public_nonce");
                    var S, x = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
                    s.length !== x && b(c, "invalid public_nonce length"), S = y(s), c.push(S), i = m(c, i, "key");
                    var T, A = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
                    i.length !== A && b(c, "invalid key length"), T = y(i), c.push(T);
                    var R = new p(0 | d),
                        M = R.address;
                    if (c.push(M), 0 === r._crypto_aead_chacha20poly1305_ietf_decrypt_detached(M, h, u, d, 0, g, k, E, 0, S, T)) {
                        var B = _(R, o);
                        return f(c), B
                    }
                    v(c, "ciphertext cannot be decrypted using that key")
                }

                function A(e, t, n, a, s, i) {
                    var o = [];
                    l(i);
                    var c = y(e = m(o, e, "message")),
                        h = e.length;
                    o.push(c);
                    var u = null,
                        d = 0;
                    null != t && (u = y(t = m(o, t, "additional_data")), d = t.length, o.push(u));
                    var g = null;
                    null != n && (g = y(n = m(o, n, "secret_nonce")), n.length, o.push(g)), a = m(o, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
                    a.length !== k && b(o, "invalid public_nonce length"), w = y(a), o.push(w), s = m(o, s, "key");
                    var E, S = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
                    s.length !== S && b(o, "invalid key length"), E = y(s), o.push(E);
                    var x = new p(h + r._crypto_aead_chacha20poly1305_ietf_abytes() | 0),
                        T = x.address;
                    if (o.push(T), 0 === r._crypto_aead_chacha20poly1305_ietf_encrypt(T, null, c, h, 0, u, d, 0, g, w, E)) {
                        var A = _(x, i);
                        return f(o), A
                    }
                    v(o, "invalid usage")
                }

                function R(e, t, n, a, s, i) {
                    var o = [];
                    l(i);
                    var c = y(e = m(o, e, "message")),
                        h = e.length;
                    o.push(c);
                    var u = null,
                        d = 0;
                    null != t && (u = y(t = m(o, t, "additional_data")), d = t.length, o.push(u));
                    var g = null;
                    null != n && (g = y(n = m(o, n, "secret_nonce")), n.length, o.push(g)), a = m(o, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
                    a.length !== k && b(o, "invalid public_nonce length"), w = y(a), o.push(w), s = m(o, s, "key");
                    var E, S = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
                    s.length !== S && b(o, "invalid key length"), E = y(s), o.push(E);
                    var x = new p(0 | h),
                        T = x.address;
                    o.push(T);
                    var A = new p(0 | r._crypto_aead_chacha20poly1305_ietf_abytes()),
                        R = A.address;
                    if (o.push(R), 0 === r._crypto_aead_chacha20poly1305_ietf_encrypt_detached(T, R, null, c, h, 0, u, d, 0, g, w, E)) {
                        var M = _({
                            ciphertext: x,
                            mac: A
                        }, i);
                        return f(o), M
                    }
                    v(o, "invalid usage")
                }

                function M(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_aead_chacha20poly1305_ietf_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_aead_chacha20poly1305_ietf_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function B(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_aead_chacha20poly1305_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_aead_chacha20poly1305_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function K(e, t, n, a, s, i) {
                    var o = [];
                    l(i);
                    var c = null;
                    null != e && (c = y(e = m(o, e, "secret_nonce")), e.length, o.push(c)), t = m(o, t, "ciphertext");
                    var h, u = r._crypto_aead_xchacha20poly1305_ietf_abytes(),
                        d = t.length;
                    d < u && b(o, "ciphertext is too short"), h = y(t), o.push(h);
                    var g = null,
                        w = 0;
                    null != n && (g = y(n = m(o, n, "additional_data")), w = n.length, o.push(g)), a = m(o, a, "public_nonce");
                    var k, E = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                    a.length !== E && b(o, "invalid public_nonce length"), k = y(a), o.push(k), s = m(o, s, "key");
                    var S, x = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
                    s.length !== x && b(o, "invalid key length"), S = y(s), o.push(S);
                    var T = new p(d - r._crypto_aead_xchacha20poly1305_ietf_abytes() | 0),
                        A = T.address;
                    if (o.push(A), 0 === r._crypto_aead_xchacha20poly1305_ietf_decrypt(A, null, c, h, d, 0, g, w, 0, k, S)) {
                        var R = _(T, i);
                        return f(o), R
                    }
                    v(o, "ciphertext cannot be decrypted using that key")
                }

                function L(e, t, n, a, s, i, o) {
                    var c = [];
                    l(o);
                    var h = null;
                    null != e && (h = y(e = m(c, e, "secret_nonce")), e.length, c.push(h));
                    var u = y(t = m(c, t, "ciphertext")),
                        d = t.length;
                    c.push(u), n = m(c, n, "mac");
                    var g, w = 0 | r._crypto_box_macbytes();
                    n.length !== w && b(c, "invalid mac length"), g = y(n), c.push(g);
                    var k = null,
                        E = 0;
                    null != a && (k = y(a = m(c, a, "additional_data")), E = a.length, c.push(k)), s = m(c, s, "public_nonce");
                    var S, x = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                    s.length !== x && b(c, "invalid public_nonce length"), S = y(s), c.push(S), i = m(c, i, "key");
                    var T, A = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
                    i.length !== A && b(c, "invalid key length"), T = y(i), c.push(T);
                    var R = new p(0 | d),
                        M = R.address;
                    if (c.push(M), 0 === r._crypto_aead_xchacha20poly1305_ietf_decrypt_detached(M, h, u, d, 0, g, k, E, 0, S, T)) {
                        var B = _(R, o);
                        return f(c), B
                    }
                    v(c, "ciphertext cannot be decrypted using that key")
                }

                function Y(e, t, n, a, s, i) {
                    var o = [];
                    l(i);
                    var c = y(e = m(o, e, "message")),
                        h = e.length;
                    o.push(c);
                    var u = null,
                        d = 0;
                    null != t && (u = y(t = m(o, t, "additional_data")), d = t.length, o.push(u));
                    var g = null;
                    null != n && (g = y(n = m(o, n, "secret_nonce")), n.length, o.push(g)), a = m(o, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                    a.length !== k && b(o, "invalid public_nonce length"), w = y(a), o.push(w), s = m(o, s, "key");
                    var E, S = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
                    s.length !== S && b(o, "invalid key length"), E = y(s), o.push(E);
                    var x = new p(h + r._crypto_aead_xchacha20poly1305_ietf_abytes() | 0),
                        T = x.address;
                    if (o.push(T), 0 === r._crypto_aead_xchacha20poly1305_ietf_encrypt(T, null, c, h, 0, u, d, 0, g, w, E)) {
                        var A = _(x, i);
                        return f(o), A
                    }
                    v(o, "invalid usage")
                }

                function O(e, t, n, a, s, i) {
                    var o = [];
                    l(i);
                    var c = y(e = m(o, e, "message")),
                        h = e.length;
                    o.push(c);
                    var u = null,
                        d = 0;
                    null != t && (u = y(t = m(o, t, "additional_data")), d = t.length, o.push(u));
                    var g = null;
                    null != n && (g = y(n = m(o, n, "secret_nonce")), n.length, o.push(g)), a = m(o, a, "public_nonce");
                    var w, k = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
                    a.length !== k && b(o, "invalid public_nonce length"), w = y(a), o.push(w), s = m(o, s, "key");
                    var E, S = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
                    s.length !== S && b(o, "invalid key length"), E = y(s), o.push(E);
                    var x = new p(0 | h),
                        T = x.address;
                    o.push(T);
                    var A = new p(0 | r._crypto_aead_xchacha20poly1305_ietf_abytes()),
                        R = A.address;
                    if (o.push(R), 0 === r._crypto_aead_xchacha20poly1305_ietf_encrypt_detached(T, R, null, c, h, 0, u, d, 0, g, w, E)) {
                        var M = _({
                            ciphertext: x,
                            mac: A
                        }, i);
                        return f(o), M
                    }
                    v(o, "invalid usage")
                }

                function I(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_aead_xchacha20poly1305_ietf_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function N(e, t, n) {
                    var a = [];
                    l(n);
                    var s = y(e = m(a, e, "message")),
                        i = e.length;
                    a.push(s), t = m(a, t, "key");
                    var o, c = 0 | r._crypto_auth_keybytes();
                    t.length !== c && b(a, "invalid key length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_auth_bytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_auth(u, s, i, 0, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "invalid usage")
                }

                function P(e, t, n) {
                    var a = [];
                    l(n);
                    var s = y(e = m(a, e, "message")),
                        i = e.length;
                    a.push(s), t = m(a, t, "key");
                    var o, c = 0 | r._crypto_auth_hmacsha256_keybytes();
                    t.length !== c && b(a, "invalid key length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_auth_hmacsha256_bytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_auth_hmacsha256(u, s, i, 0, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "invalid usage")
                }

                function C(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_auth_hmacsha256_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_auth_hmacsha256_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function U(e, t, n) {
                    var a = [];
                    e = m(a, e, "tag");
                    var s, i = 0 | r._crypto_auth_hmacsha256_bytes();
                    e.length !== i && b(a, "invalid tag length"), s = y(e), a.push(s);
                    var o = y(t = m(a, t, "message")),
                        c = t.length;
                    a.push(o), n = m(a, n, "key");
                    var h, _ = 0 | r._crypto_auth_hmacsha256_keybytes();
                    n.length !== _ && b(a, "invalid key length"), h = y(n), a.push(h);
                    var u = 0 == (0 | r._crypto_auth_hmacsha256_verify(s, o, c, 0, h));
                    return f(a), u
                }

                function D(e, t, n) {
                    var a = [];
                    l(n);
                    var s = y(e = m(a, e, "message")),
                        i = e.length;
                    a.push(s), t = m(a, t, "key");
                    var o, c = 0 | r._crypto_auth_hmacsha512_keybytes();
                    t.length !== c && b(a, "invalid key length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_auth_hmacsha512_bytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_auth_hmacsha512(u, s, i, 0, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "invalid usage")
                }

                function j(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_auth_hmacsha512_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_auth_hmacsha512_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function F(e, t, n) {
                    var a = [];
                    e = m(a, e, "tag");
                    var s, i = 0 | r._crypto_auth_hmacsha512_bytes();
                    e.length !== i && b(a, "invalid tag length"), s = y(e), a.push(s);
                    var o = y(t = m(a, t, "message")),
                        c = t.length;
                    a.push(o), n = m(a, n, "key");
                    var h, _ = 0 | r._crypto_auth_hmacsha512_keybytes();
                    n.length !== _ && b(a, "invalid key length"), h = y(n), a.push(h);
                    var u = 0 == (0 | r._crypto_auth_hmacsha512_verify(s, o, c, 0, h));
                    return f(a), u
                }

                function z(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_auth_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_auth_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function q(e, t, n) {
                    var a = [];
                    e = m(a, e, "tag");
                    var s, i = 0 | r._crypto_auth_bytes();
                    e.length !== i && b(a, "invalid tag length"), s = y(e), a.push(s);
                    var o = y(t = m(a, t, "message")),
                        c = t.length;
                    a.push(o), n = m(a, n, "key");
                    var h, _ = 0 | r._crypto_auth_keybytes();
                    n.length !== _ && b(a, "invalid key length"), h = y(n), a.push(h);
                    var u = 0 == (0 | r._crypto_auth_verify(s, o, c, 0, h));
                    return f(a), u
                }

                function V(e, t, n) {
                    var a = [];
                    l(n), e = m(a, e, "publicKey");
                    var s, i = 0 | r._crypto_box_publickeybytes();
                    e.length !== i && b(a, "invalid publicKey length"), s = y(e), a.push(s), t = m(a, t, "privateKey");
                    var o, c = 0 | r._crypto_box_secretkeybytes();
                    t.length !== c && b(a, "invalid privateKey length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_box_beforenmbytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_box_beforenm(u, s, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "invalid usage")
                }

                function W(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes()),
                        a = n.address;
                    t.push(a);
                    var s = new p(0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes()),
                        i = s.address;
                    t.push(i), r._crypto_box_curve25519xchacha20poly1305_keypair(a, i);
                    var o = _({
                        publicKey: n,
                        privateKey: s,
                        keyType: "curve25519"
                    }, e);
                    return f(t), o
                }

                function G(e, t, n) {
                    var a = [];
                    l(n);
                    var s = y(e = m(a, e, "message")),
                        i = e.length;
                    a.push(s), t = m(a, t, "publicKey");
                    var o, c = 0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
                    t.length !== c && b(a, "invalid publicKey length"), o = y(t), a.push(o);
                    var h = new p(i + r._crypto_box_curve25519xchacha20poly1305_sealbytes() | 0),
                        u = h.address;
                    a.push(u), r._crypto_box_curve25519xchacha20poly1305_seal(u, s, i, 0, o);
                    var d = _(h, n);
                    return f(a), d
                }

                function H(e, t, n, a) {
                    var s = [];
                    l(a), e = m(s, e, "ciphertext");
                    var i, o = r._crypto_box_curve25519xchacha20poly1305_sealbytes(),
                        c = e.length;
                    c < o && b(s, "ciphertext is too short"), i = y(e), s.push(i), t = m(s, t, "publicKey");
                    var h, u = 0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
                    t.length !== u && b(s, "invalid publicKey length"), h = y(t), s.push(h), n = m(s, n, "secretKey");
                    var d, v = 0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
                    n.length !== v && b(s, "invalid secretKey length"), d = y(n), s.push(d);
                    var g = new p(c - r._crypto_box_curve25519xchacha20poly1305_sealbytes() | 0),
                        w = g.address;
                    s.push(w), r._crypto_box_curve25519xchacha20poly1305_seal_open(w, i, c, 0, h, d);
                    var k = _(g, a);
                    return f(s), k
                }

                function X(e, t, n, a, s) {
                    var i = [];
                    l(s);
                    var o = y(e = m(i, e, "message")),
                        c = e.length;
                    i.push(o), t = m(i, t, "nonce");
                    var h, u = 0 | r._crypto_box_noncebytes();
                    t.length !== u && b(i, "invalid nonce length"), h = y(t), i.push(h), n = m(i, n, "publicKey");
                    var d, g = 0 | r._crypto_box_publickeybytes();
                    n.length !== g && b(i, "invalid publicKey length"), d = y(n), i.push(d), a = m(i, a, "privateKey");
                    var w, k = 0 | r._crypto_box_secretkeybytes();
                    a.length !== k && b(i, "invalid privateKey length"), w = y(a), i.push(w);
                    var E = new p(0 | c),
                        S = E.address;
                    i.push(S);
                    var x = new p(0 | r._crypto_box_macbytes()),
                        T = x.address;
                    if (i.push(T), 0 == (0 | r._crypto_box_detached(S, T, o, c, 0, h, d, w))) {
                        var A = _({
                            ciphertext: E,
                            mac: x
                        }, s);
                        return f(i), A
                    }
                    v(i, "invalid usage")
                }

                function Z(e, t, n, a, s) {
                    var i = [];
                    l(s);
                    var o = y(e = m(i, e, "message")),
                        c = e.length;
                    i.push(o), t = m(i, t, "nonce");
                    var h, u = 0 | r._crypto_box_noncebytes();
                    t.length !== u && b(i, "invalid nonce length"), h = y(t), i.push(h), n = m(i, n, "publicKey");
                    var d, g = 0 | r._crypto_box_publickeybytes();
                    n.length !== g && b(i, "invalid publicKey length"), d = y(n), i.push(d), a = m(i, a, "privateKey");
                    var w, k = 0 | r._crypto_box_secretkeybytes();
                    a.length !== k && b(i, "invalid privateKey length"), w = y(a), i.push(w);
                    var E = new p(c + r._crypto_box_macbytes() | 0),
                        S = E.address;
                    if (i.push(S), 0 == (0 | r._crypto_box_easy(S, o, c, 0, h, d, w))) {
                        var x = _(E, s);
                        return f(i), x
                    }
                    v(i, "invalid usage")
                }

                function J(e, t, n, a) {
                    var s = [];
                    l(a);
                    var i = y(e = m(s, e, "message")),
                        o = e.length;
                    s.push(i), t = m(s, t, "nonce");
                    var c, h = 0 | r._crypto_box_noncebytes();
                    t.length !== h && b(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "sharedKey");
                    var u, d = 0 | r._crypto_box_beforenmbytes();
                    n.length !== d && b(s, "invalid sharedKey length"), u = y(n), s.push(u);
                    var g = new p(o + r._crypto_box_macbytes() | 0),
                        w = g.address;
                    if (s.push(w), 0 == (0 | r._crypto_box_easy_afternm(w, i, o, 0, c, u))) {
                        var k = _(g, a);
                        return f(s), k
                    }
                    v(s, "invalid usage")
                }

                function $(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_box_publickeybytes()),
                        a = n.address;
                    t.push(a);
                    var s = new p(0 | r._crypto_box_secretkeybytes()),
                        i = s.address;
                    if (t.push(i), 0 == (0 | r._crypto_box_keypair(a, i))) {
                        var o = {
                            publicKey: _(n, e),
                            privateKey: _(s, e),
                            keyType: "x25519"
                        };
                        return f(t), o
                    }
                    v(t, "internal error")
                }

                function Q(e, t, n, a, s, i) {
                    var o = [];
                    l(i);
                    var c = y(e = m(o, e, "ciphertext")),
                        h = e.length;
                    o.push(c), t = m(o, t, "mac");
                    var u, d = 0 | r._crypto_box_macbytes();
                    t.length !== d && b(o, "invalid mac length"), u = y(t), o.push(u), n = m(o, n, "nonce");
                    var g, w = 0 | r._crypto_box_noncebytes();
                    n.length !== w && b(o, "invalid nonce length"), g = y(n), o.push(g), a = m(o, a, "publicKey");
                    var k, E = 0 | r._crypto_box_publickeybytes();
                    a.length !== E && b(o, "invalid publicKey length"), k = y(a), o.push(k), s = m(o, s, "privateKey");
                    var S, x = 0 | r._crypto_box_secretkeybytes();
                    s.length !== x && b(o, "invalid privateKey length"), S = y(s), o.push(S);
                    var T = new p(0 | h),
                        A = T.address;
                    if (o.push(A), 0 == (0 | r._crypto_box_open_detached(A, c, u, h, 0, g, k, S))) {
                        var R = _(T, i);
                        return f(o), R
                    }
                    v(o, "incorrect key pair for the given ciphertext")
                }

                function ee(e, t, n, a, s) {
                    var i = [];
                    l(s), e = m(i, e, "ciphertext");
                    var o, c = r._crypto_box_macbytes(),
                        h = e.length;
                    h < c && b(i, "ciphertext is too short"), o = y(e), i.push(o), t = m(i, t, "nonce");
                    var u, d = 0 | r._crypto_box_noncebytes();
                    t.length !== d && b(i, "invalid nonce length"), u = y(t), i.push(u), n = m(i, n, "publicKey");
                    var g, w = 0 | r._crypto_box_publickeybytes();
                    n.length !== w && b(i, "invalid publicKey length"), g = y(n), i.push(g), a = m(i, a, "privateKey");
                    var k, E = 0 | r._crypto_box_secretkeybytes();
                    a.length !== E && b(i, "invalid privateKey length"), k = y(a), i.push(k);
                    var S = new p(h - r._crypto_box_macbytes() | 0),
                        x = S.address;
                    if (i.push(x), 0 == (0 | r._crypto_box_open_easy(x, o, h, 0, u, g, k))) {
                        var T = _(S, s);
                        return f(i), T
                    }
                    v(i, "incorrect key pair for the given ciphertext")
                }

                function te(e, t, n, a) {
                    var s = [];
                    l(a);
                    var i = y(e = m(s, e, "ciphertext")),
                        o = e.length;
                    s.push(i), t = m(s, t, "nonce");
                    var c, h = 0 | r._crypto_box_noncebytes();
                    t.length !== h && b(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "sharedKey");
                    var u, d = 0 | r._crypto_box_beforenmbytes();
                    n.length !== d && b(s, "invalid sharedKey length"), u = y(n), s.push(u);
                    var g = new p(o - r._crypto_box_macbytes() | 0),
                        w = g.address;
                    if (s.push(w), 0 == (0 | r._crypto_box_open_easy_afternm(w, i, o, 0, c, u))) {
                        var k = _(g, a);
                        return f(s), k
                    }
                    v(s, "incorrect secret key for the given ciphertext")
                }

                function re(e, t, n) {
                    var a = [];
                    l(n);
                    var s = y(e = m(a, e, "message")),
                        i = e.length;
                    a.push(s), t = m(a, t, "publicKey");
                    var o, c = 0 | r._crypto_box_publickeybytes();
                    t.length !== c && b(a, "invalid publicKey length"), o = y(t), a.push(o);
                    var h = new p(i + r._crypto_box_sealbytes() | 0),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_box_seal(u, s, i, 0, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "invalid usage")
                }

                function ne(e, t, n, a) {
                    var s = [];
                    l(a), e = m(s, e, "ciphertext");
                    var i, o = r._crypto_box_sealbytes(),
                        c = e.length;
                    c < o && b(s, "ciphertext is too short"), i = y(e), s.push(i), t = m(s, t, "publicKey");
                    var h, u = 0 | r._crypto_box_publickeybytes();
                    t.length !== u && b(s, "invalid publicKey length"), h = y(t), s.push(h), n = m(s, n, "privateKey");
                    var d, g = 0 | r._crypto_box_secretkeybytes();
                    n.length !== g && b(s, "invalid privateKey length"), d = y(n), s.push(d);
                    var w = new p(c - r._crypto_box_sealbytes() | 0),
                        k = w.address;
                    if (s.push(k), 0 == (0 | r._crypto_box_seal_open(k, i, c, 0, h, d))) {
                        var E = _(w, a);
                        return f(s), E
                    }
                    v(s, "incorrect key pair for the given ciphertext")
                }

                function ae(e, t) {
                    var n = [];
                    l(t), e = m(n, e, "seed");
                    var a, s = 0 | r._crypto_box_seedbytes();
                    e.length !== s && b(n, "invalid seed length"), a = y(e), n.push(a);
                    var i = new p(0 | r._crypto_box_publickeybytes()),
                        o = i.address;
                    n.push(o);
                    var c = new p(0 | r._crypto_box_secretkeybytes()),
                        h = c.address;
                    if (n.push(h), 0 == (0 | r._crypto_box_seed_keypair(o, h, a))) {
                        var u = {
                            publicKey: _(i, t),
                            privateKey: _(c, t),
                            keyType: "x25519"
                        };
                        return f(n), u
                    }
                    v(n, "invalid usage")
                }

                function se(e, t, n) {
                    var a = [];
                    l(n), e = m(a, e, "p");
                    var s, i = 0 | r._crypto_core_ristretto255_bytes();
                    e.length !== i && b(a, "invalid p length"), s = y(e), a.push(s), t = m(a, t, "q");
                    var o, c = 0 | r._crypto_core_ristretto255_bytes();
                    t.length !== c && b(a, "invalid q length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_core_ristretto255_bytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_core_ristretto255_add(u, s, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "inputs is invalid element")
                }

                function ie(e, t) {
                    var n = [];
                    l(t);
                    var a = y(e = m(n, e, "r"));
                    e.length, n.push(a);
                    var s = new p(0 | r._crypto_core_ristretto255_bytes()),
                        i = s.address;
                    if (n.push(i), 0 == (0 | r._crypto_core_ristretto255_from_hash(i, a))) {
                        var o = _(s, t);
                        return f(n), o
                    }
                    v(n, "invalid usage")
                }

                function oe(e, t) {
                    var n = [];
                    l(t);
                    var a = y(e = m(n, e, "point"));
                    e.length, n.push(a);
                    var s = 1 == (0 | r._crypto_core_ristretto255_is_valid_point(a));
                    return f(n), s
                }

                function ce(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_core_ristretto255_bytes()),
                        a = n.address;
                    t.push(a), r._crypto_core_ristretto255_random(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function he(e, t, n) {
                    var a = [];
                    l(n), e = m(a, e, "x");
                    var s, i = 0 | r._crypto_core_ristretto255_scalarbytes();
                    e.length !== i && b(a, "invalid x length"), s = y(e), a.push(s), t = m(a, t, "y");
                    var o, c = 0 | r._crypto_core_ristretto255_scalarbytes();
                    t.length !== c && b(a, "invalid y length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_core_ristretto255_scalarbytes()),
                        u = h.address;
                    a.push(u), r._crypto_core_ristretto255_scalar_add(u, s, o);
                    var d = _(h, n);
                    return f(a), d
                }

                function _e(e, t) {
                    var n = [];
                    l(t);
                    var a = y(e = m(n, e, "s"));
                    e.length, n.push(a);
                    var s = new p(0 | r._crypto_core_ristretto255_scalarbytes()),
                        i = s.address;
                    n.push(i), r._crypto_core_ristretto255_scalar_complement(i, a);
                    var o = _(s, t);
                    return f(n), o
                }

                function ue(e, t) {
                    var n = [];
                    l(t);
                    var a = y(e = m(n, e, "s"));
                    e.length, n.push(a);
                    var s = new p(0 | r._crypto_core_ristretto255_scalarbytes()),
                        i = s.address;
                    if (n.push(i), 0 == (0 | r._crypto_core_ristretto255_scalar_invert(i, a))) {
                        var o = _(s, t);
                        return f(n), o
                    }
                    v(n, "invalid reciprocate")
                }

                function le(e, t, n) {
                    var a = [];
                    l(n), e = m(a, e, "x");
                    var s, i = 0 | r._crypto_core_ristretto255_scalarbytes();
                    e.length !== i && b(a, "invalid x length"), s = y(e), a.push(s), t = m(a, t, "y");
                    var o, c = 0 | r._crypto_core_ristretto255_scalarbytes();
                    t.length !== c && b(a, "invalid y length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_core_ristretto255_scalarbytes()),
                        u = h.address;
                    a.push(u), r._crypto_core_ristretto255_scalar_mul(u, s, o);
                    var d = _(h, n);
                    return f(a), d
                }

                function pe(e, t) {
                    var n = [];
                    l(t);
                    var a = y(e = m(n, e, "s"));
                    e.length, n.push(a);
                    var s = new p(0 | r._crypto_core_ristretto255_scalarbytes()),
                        i = s.address;
                    n.push(i), r._crypto_core_ristretto255_scalar_negate(i, a);
                    var o = _(s, t);
                    return f(n), o
                }

                function ye(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_core_ristretto255_scalarbytes()),
                        a = n.address;
                    t.push(a), r._crypto_core_ristretto255_random(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function de(e, t) {
                    var n = [];
                    l(t);
                    var a = y(e = m(n, e, "sample"));
                    e.length, n.push(a);
                    var s = new p(0 | r._crypto_core_ristretto255_scalarbytes()),
                        i = s.address;
                    n.push(i), r._crypto_core_ristretto255_scalar_reduce(i, a);
                    var o = _(s, t);
                    return f(n), o
                }

                function fe(e, t, n) {
                    var a = [];
                    l(n), e = m(a, e, "x");
                    var s, i = 0 | r._crypto_core_ristretto255_scalarbytes();
                    e.length !== i && b(a, "invalid x length"), s = y(e), a.push(s), t = m(a, t, "y");
                    var o, c = 0 | r._crypto_core_ristretto255_scalarbytes();
                    t.length !== c && b(a, "invalid y length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_core_ristretto255_scalarbytes()),
                        u = h.address;
                    a.push(u), r._crypto_core_ristretto255_scalar_sub(u, s, o);
                    var d = _(h, n);
                    return f(a), d
                }

                function ve(e, t, n) {
                    var a = [];
                    l(n), e = m(a, e, "p");
                    var s, i = 0 | r._crypto_core_ristretto255_bytes();
                    e.length !== i && b(a, "invalid p length"), s = y(e), a.push(s), t = m(a, t, "q");
                    var o, c = 0 | r._crypto_core_ristretto255_bytes();
                    t.length !== c && b(a, "invalid q length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_core_ristretto255_bytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_core_ristretto255_sub(u, s, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "inputs is invalid element")
                }

                function be(e, t, n, a) {
                    var s = [];
                    l(a), g(s, e, "hash_length"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(s, "hash_length must be an unsigned integer");
                    var i = y(t = m(s, t, "message")),
                        o = t.length;
                    s.push(i);
                    var c = null,
                        h = 0;
                    null != n && (c = y(n = m(s, n, "key")), h = n.length, s.push(c));
                    var u = new p(e |= 0),
                        d = u.address;
                    if (s.push(d), 0 == (0 | r._crypto_generichash(d, e, i, o, 0, c, h))) {
                        var w = _(u, a);
                        return f(s), w
                    }
                    v(s, "invalid usage")
                }

                function ge(e, t, n, a, s) {
                    var i = [];
                    l(s), g(i, e, "subkey_len"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(i, "subkey_len must be an unsigned integer");
                    var o = null,
                        c = 0;
                    null != t && (o = y(t = m(i, t, "key")), c = t.length, i.push(o)), n = m(i, n, "id");
                    var h, u = 0 | r._crypto_generichash_blake2b_saltbytes();
                    n.length !== u && b(i, "invalid id length"), h = y(n), i.push(h), a = m(i, a, "ctx");
                    var d, w = 0 | r._crypto_generichash_blake2b_personalbytes();
                    a.length !== w && b(i, "invalid ctx length"), d = y(a), i.push(d);
                    var k = new p(0 | e),
                        E = k.address;
                    if (i.push(E), 0 == (0 | r._crypto_generichash_blake2b_salt_personal(E, e, null, 0, 0, o, c, h, d))) {
                        var S = _(k, s);
                        return f(i), S
                    }
                    v(i, "invalid usage")
                }

                function me(e, t, n) {
                    var a = [];
                    l(n), g(a, e, "state_address"), g(a, t, "hash_length"), ("number" != typeof t || (0 | t) !== t || t < 0) && b(a, "hash_length must be an unsigned integer");
                    var s = new p(t |= 0),
                        i = s.address;
                    if (a.push(i), 0 == (0 | r._crypto_generichash_final(e, i, t))) {
                        var o = (r._free(e), _(s, n));
                        return f(a), o
                    }
                    v(a, "invalid usage")
                }

                function we(e, t, n) {
                    var a = [];
                    l(n);
                    var s = null,
                        i = 0;
                    null != e && (s = y(e = m(a, e, "key")), i = e.length, a.push(s)), g(a, t, "hash_length"), ("number" != typeof t || (0 | t) !== t || t < 0) && b(a, "hash_length must be an unsigned integer");
                    var o = new p(357).address;
                    if (0 == (0 | r._crypto_generichash_init(o, s, i, t))) {
                        var c = o;
                        return f(a), c
                    }
                    v(a, "invalid usage")
                }

                function ke(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_generichash_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_generichash_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function Ee(e, t, n) {
                    var a = [];
                    l(n), g(a, e, "state_address");
                    var s = y(t = m(a, t, "message_chunk")),
                        i = t.length;
                    a.push(s), 0 != (0 | r._crypto_generichash_update(e, s, i)) && v(a, "invalid usage"), f(a)
                }

                function Se(e, t) {
                    var n = [];
                    l(t);
                    var a = y(e = m(n, e, "message")),
                        s = e.length;
                    n.push(a);
                    var i = new p(0 | r._crypto_hash_bytes()),
                        o = i.address;
                    if (n.push(o), 0 == (0 | r._crypto_hash(o, a, s, 0))) {
                        var c = _(i, t);
                        return f(n), c
                    }
                    v(n, "invalid usage")
                }

                function xe(e, t) {
                    var n = [];
                    l(t);
                    var a = y(e = m(n, e, "message")),
                        s = e.length;
                    n.push(a);
                    var i = new p(0 | r._crypto_hash_sha256_bytes()),
                        o = i.address;
                    if (n.push(o), 0 == (0 | r._crypto_hash_sha256(o, a, s, 0))) {
                        var c = _(i, t);
                        return f(n), c
                    }
                    v(n, "invalid usage")
                }

                function Te(e, t) {
                    var n = [];
                    l(t);
                    var a = y(e = m(n, e, "message")),
                        s = e.length;
                    n.push(a);
                    var i = new p(0 | r._crypto_hash_sha512_bytes()),
                        o = i.address;
                    if (n.push(o), 0 == (0 | r._crypto_hash_sha512(o, a, s, 0))) {
                        var c = _(i, t);
                        return f(n), c
                    }
                    v(n, "invalid usage")
                }

                function Ae(e, t, n, s, i) {
                    var o = [];
                    l(i), g(o, e, "subkey_len"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(o, "subkey_len must be an unsigned integer"), g(o, t, "subkey_id"), ("number" != typeof t || (0 | t) !== t || t < 0) && b(o, "subkey_id must be an unsigned integer"), "string" != typeof n && b(o, "ctx must be a string");
                    var c = y(n = a(n + "\0"));
                    n.length, o.push(c), s = m(o, s, "key");
                    var h, u = 0 | r._crypto_kdf_keybytes();
                    s.length !== u && b(o, "invalid key length"), h = y(s), o.push(h);
                    var d = new p(0 | e),
                        v = d.address;
                    o.push(v), r._crypto_kdf_derive_from_key(v, e, t, t >>> 24 >>> 8, c, h);
                    var w = _(d, i);
                    return f(o), w
                }

                function Re(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_kdf_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_kdf_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function Me(e, t, n, a) {
                    var s = [];
                    l(a), e = m(s, e, "clientPublicKey");
                    var i, o = 0 | r._crypto_kx_publickeybytes();
                    e.length !== o && b(s, "invalid clientPublicKey length"), i = y(e), s.push(i), t = m(s, t, "clientSecretKey");
                    var c, h = 0 | r._crypto_kx_secretkeybytes();
                    t.length !== h && b(s, "invalid clientSecretKey length"), c = y(t), s.push(c), n = m(s, n, "serverPublicKey");
                    var u, d = 0 | r._crypto_kx_publickeybytes();
                    n.length !== d && b(s, "invalid serverPublicKey length"), u = y(n), s.push(u);
                    var g = new p(0 | r._crypto_kx_sessionkeybytes()),
                        w = g.address;
                    s.push(w);
                    var k = new p(0 | r._crypto_kx_sessionkeybytes()),
                        E = k.address;
                    if (s.push(E), 0 == (0 | r._crypto_kx_client_session_keys(w, E, i, c, u))) {
                        var S = _({
                            sharedRx: g,
                            sharedTx: k
                        }, a);
                        return f(s), S
                    }
                    v(s, "invalid usage")
                }

                function Be(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_kx_publickeybytes()),
                        a = n.address;
                    t.push(a);
                    var s = new p(0 | r._crypto_kx_secretkeybytes()),
                        i = s.address;
                    if (t.push(i), 0 == (0 | r._crypto_kx_keypair(a, i))) {
                        var o = {
                            publicKey: _(n, e),
                            privateKey: _(s, e),
                            keyType: "x25519"
                        };
                        return f(t), o
                    }
                    v(t, "internal error")
                }

                function Ke(e, t) {
                    var n = [];
                    l(t), e = m(n, e, "seed");
                    var a, s = 0 | r._crypto_kx_seedbytes();
                    e.length !== s && b(n, "invalid seed length"), a = y(e), n.push(a);
                    var i = new p(0 | r._crypto_kx_publickeybytes()),
                        o = i.address;
                    n.push(o);
                    var c = new p(0 | r._crypto_kx_secretkeybytes()),
                        h = c.address;
                    if (n.push(h), 0 == (0 | r._crypto_kx_seed_keypair(o, h, a))) {
                        var u = {
                            publicKey: _(i, t),
                            privateKey: _(c, t),
                            keyType: "x25519"
                        };
                        return f(n), u
                    }
                    v(n, "internal error")
                }

                function Le(e, t, n, a) {
                    var s = [];
                    l(a), e = m(s, e, "serverPublicKey");
                    var i, o = 0 | r._crypto_kx_publickeybytes();
                    e.length !== o && b(s, "invalid serverPublicKey length"), i = y(e), s.push(i), t = m(s, t, "serverSecretKey");
                    var c, h = 0 | r._crypto_kx_secretkeybytes();
                    t.length !== h && b(s, "invalid serverSecretKey length"), c = y(t), s.push(c), n = m(s, n, "clientPublicKey");
                    var u, d = 0 | r._crypto_kx_publickeybytes();
                    n.length !== d && b(s, "invalid clientPublicKey length"), u = y(n), s.push(u);
                    var g = new p(0 | r._crypto_kx_sessionkeybytes()),
                        w = g.address;
                    s.push(w);
                    var k = new p(0 | r._crypto_kx_sessionkeybytes()),
                        E = k.address;
                    if (s.push(E), 0 == (0 | r._crypto_kx_server_session_keys(w, E, i, c, u))) {
                        var S = _({
                            sharedRx: g,
                            sharedTx: k
                        }, a);
                        return f(s), S
                    }
                    v(s, "invalid usage")
                }

                function Ye(e, t, n) {
                    var a = [];
                    l(n);
                    var s = y(e = m(a, e, "message")),
                        i = e.length;
                    a.push(s), t = m(a, t, "key");
                    var o, c = 0 | r._crypto_onetimeauth_keybytes();
                    t.length !== c && b(a, "invalid key length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_onetimeauth_bytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_onetimeauth(u, s, i, 0, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "invalid usage")
                }

                function Oe(e, t) {
                    var n = [];
                    l(t), g(n, e, "state_address");
                    var a = new p(0 | r._crypto_onetimeauth_bytes()),
                        s = a.address;
                    if (n.push(s), 0 == (0 | r._crypto_onetimeauth_final(e, s))) {
                        var i = (r._free(e), _(a, t));
                        return f(n), i
                    }
                    v(n, "invalid usage")
                }

                function Ie(e, t) {
                    var n = [];
                    l(t);
                    var a = null;
                    null != e && (a = y(e = m(n, e, "key")), e.length, n.push(a));
                    var s = new p(144).address;
                    if (0 == (0 | r._crypto_onetimeauth_init(s, a))) {
                        var i = s;
                        return f(n), i
                    }
                    v(n, "invalid usage")
                }

                function Ne(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_onetimeauth_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_onetimeauth_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function Pe(e, t, n) {
                    var a = [];
                    l(n), g(a, e, "state_address");
                    var s = y(t = m(a, t, "message_chunk")),
                        i = t.length;
                    a.push(s), 0 != (0 | r._crypto_onetimeauth_update(e, s, i)) && v(a, "invalid usage"), f(a)
                }

                function Ce(e, t, n) {
                    var a = [];
                    e = m(a, e, "hash");
                    var s, i = 0 | r._crypto_onetimeauth_bytes();
                    e.length !== i && b(a, "invalid hash length"), s = y(e), a.push(s);
                    var o = y(t = m(a, t, "message")),
                        c = t.length;
                    a.push(o), n = m(a, n, "key");
                    var h, _ = 0 | r._crypto_onetimeauth_keybytes();
                    n.length !== _ && b(a, "invalid key length"), h = y(n), a.push(h);
                    var u = 0 == (0 | r._crypto_onetimeauth_verify(s, o, c, 0, h));
                    return f(a), u
                }

                function Ue(e, t, n, a, s, i, o) {
                    var c = [];
                    l(o), g(c, e, "keyLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(c, "keyLength must be an unsigned integer");
                    var h = y(t = m(c, t, "password")),
                        u = t.length;
                    c.push(h), n = m(c, n, "salt");
                    var d, w = 0 | r._crypto_pwhash_saltbytes();
                    n.length !== w && b(c, "invalid salt length"), d = y(n), c.push(d), g(c, a, "opsLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(c, "opsLimit must be an unsigned integer"), g(c, s, "memLimit"), ("number" != typeof s || (0 | s) !== s || s < 0) && b(c, "memLimit must be an unsigned integer"), g(c, i, "algorithm"), ("number" != typeof i || (0 | i) !== i || i < 0) && b(c, "algorithm must be an unsigned integer");
                    var k = new p(0 | e),
                        E = k.address;
                    if (c.push(E), 0 == (0 | r._crypto_pwhash(E, e, 0, h, u, 0, d, a, 0, s, i))) {
                        var S = _(k, o);
                        return f(c), S
                    }
                    v(c, "invalid usage")
                }

                function De(e, t, n, a, s, i) {
                    var o = [];
                    l(i), g(o, e, "keyLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(o, "keyLength must be an unsigned integer");
                    var c = y(t = m(o, t, "password")),
                        h = t.length;
                    o.push(c), n = m(o, n, "salt");
                    var u, d = 0 | r._crypto_pwhash_scryptsalsa208sha256_saltbytes();
                    n.length !== d && b(o, "invalid salt length"), u = y(n), o.push(u), g(o, a, "opsLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(o, "opsLimit must be an unsigned integer"), g(o, s, "memLimit"), ("number" != typeof s || (0 | s) !== s || s < 0) && b(o, "memLimit must be an unsigned integer");
                    var w = new p(0 | e),
                        k = w.address;
                    if (o.push(k), 0 == (0 | r._crypto_pwhash_scryptsalsa208sha256(k, e, 0, c, h, 0, u, a, 0, s))) {
                        var E = _(w, i);
                        return f(o), E
                    }
                    v(o, "invalid usage")
                }

                function je(e, t, n, a, s, i, o) {
                    var c = [];
                    l(o);
                    var h = y(e = m(c, e, "password")),
                        u = e.length;
                    c.push(h);
                    var d = y(t = m(c, t, "salt")),
                        w = t.length;
                    c.push(d), g(c, n, "opsLimit"), ("number" != typeof n || (0 | n) !== n || n < 0) && b(c, "opsLimit must be an unsigned integer"), g(c, a, "r"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(c, "r must be an unsigned integer"), g(c, s, "p"), ("number" != typeof s || (0 | s) !== s || s < 0) && b(c, "p must be an unsigned integer"), g(c, i, "keyLength"), ("number" != typeof i || (0 | i) !== i || i < 0) && b(c, "keyLength must be an unsigned integer");
                    var k = new p(0 | i),
                        E = k.address;
                    if (c.push(E), 0 == (0 | r._crypto_pwhash_scryptsalsa208sha256_ll(h, u, d, w, n, 0, a, s, E, i))) {
                        var S = _(k, o);
                        return f(c), S
                    }
                    v(c, "invalid usage")
                }

                function Fe(e, t, n, a) {
                    var s = [];
                    l(a);
                    var i = y(e = m(s, e, "password")),
                        o = e.length;
                    s.push(i), g(s, t, "opsLimit"), ("number" != typeof t || (0 | t) !== t || t < 0) && b(s, "opsLimit must be an unsigned integer"), g(s, n, "memLimit"), ("number" != typeof n || (0 | n) !== n || n < 0) && b(s, "memLimit must be an unsigned integer");
                    var c = new p(0 | r._crypto_pwhash_scryptsalsa208sha256_strbytes()).address;
                    if (s.push(c), 0 == (0 | r._crypto_pwhash_scryptsalsa208sha256_str(c, i, o, 0, t, 0, n))) {
                        var h = r.UTF8ToString(c);
                        return f(s), h
                    }
                    v(s, "invalid usage")
                }

                function ze(e, t, n) {
                    var s = [];
                    l(n), "string" != typeof e && b(s, "hashed_password must be a string");
                    var i = y(e = a(e + "\0"));
                    e.length, s.push(i);
                    var o = y(t = m(s, t, "password")),
                        c = t.length;
                    s.push(o);
                    var h = 0 == (0 | r._crypto_pwhash_scryptsalsa208sha256_str_verify(i, o, c, 0));
                    return f(s), h
                }

                function qe(e, t, n, a) {
                    var s = [];
                    l(a);
                    var i = y(e = m(s, e, "password")),
                        o = e.length;
                    s.push(i), g(s, t, "opsLimit"), ("number" != typeof t || (0 | t) !== t || t < 0) && b(s, "opsLimit must be an unsigned integer"), g(s, n, "memLimit"), ("number" != typeof n || (0 | n) !== n || n < 0) && b(s, "memLimit must be an unsigned integer");
                    var c = new p(0 | r._crypto_pwhash_strbytes()).address;
                    if (s.push(c), 0 == (0 | r._crypto_pwhash_str(c, i, o, 0, t, 0, n))) {
                        var h = r.UTF8ToString(c);
                        return f(s), h
                    }
                    v(s, "invalid usage")
                }

                function Ve(e, t, n) {
                    var s = [];
                    l(n), "string" != typeof e && b(s, "hashed_password must be a string");
                    var i = y(e = a(e + "\0"));
                    e.length, s.push(i);
                    var o = y(t = m(s, t, "password")),
                        c = t.length;
                    s.push(o);
                    var h = 0 == (0 | r._crypto_pwhash_str_verify(i, o, c, 0));
                    return f(s), h
                }

                function We(e, t, n) {
                    var a = [];
                    l(n), e = m(a, e, "privateKey");
                    var s, i = 0 | r._crypto_scalarmult_scalarbytes();
                    e.length !== i && b(a, "invalid privateKey length"), s = y(e), a.push(s), t = m(a, t, "publicKey");
                    var o, c = 0 | r._crypto_scalarmult_scalarbytes();
                    t.length !== c && b(a, "invalid publicKey length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_scalarmult_bytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_scalarmult(u, s, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "weak public key")
                }

                function Ge(e, t) {
                    var n = [];
                    l(t), e = m(n, e, "privateKey");
                    var a, s = 0 | r._crypto_scalarmult_scalarbytes();
                    e.length !== s && b(n, "invalid privateKey length"), a = y(e), n.push(a);
                    var i = new p(0 | r._crypto_scalarmult_scalarbytes()),
                        o = i.address;
                    if (n.push(o), 0 == (0 | r._crypto_scalarmult_base(o, a))) {
                        var c = _(i, t);
                        return f(n), c
                    }
                    v(n, "insecure scalar")
                }

                function He(e, t, n) {
                    var a = [];
                    l(n), e = m(a, e, "scalar");
                    var s, i = 0 | r._crypto_scalarmult_ristretto255_scalarbytes();
                    e.length !== i && b(a, "invalid scalar length"), s = y(e), a.push(s), t = m(a, t, "privateKey");
                    var o, c = 0 | r._crypto_scalarmult_ristretto255_bytes();
                    t.length !== c && b(a, "invalid privateKey length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_scalarmult_ristretto255_bytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_scalarmult_ristretto255(u, s, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "input is zero element")
                }

                function Xe(e, t) {
                    var n = [];
                    l(t);
                    var a = y(e = m(n, e, "scalar"));
                    e.length, n.push(a);
                    var s = new p(0 | r._crypto_core_ristretto255_bytes()),
                        i = s.address;
                    if (n.push(i), 0 == (0 | r._crypto_scalarmult_ristretto255_base(i, a))) {
                        var o = _(s, t);
                        return f(n), o
                    }
                    v(n, "scalar is 0")
                }

                function Ze(e, t, n, a) {
                    var s = [];
                    l(a);
                    var i = y(e = m(s, e, "message")),
                        o = e.length;
                    s.push(i), t = m(s, t, "nonce");
                    var c, h = 0 | r._crypto_secretbox_noncebytes();
                    t.length !== h && b(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "key");
                    var u, d = 0 | r._crypto_secretbox_keybytes();
                    n.length !== d && b(s, "invalid key length"), u = y(n), s.push(u);
                    var g = new p(0 | o),
                        w = g.address;
                    s.push(w);
                    var k = new p(0 | r._crypto_secretbox_macbytes()),
                        E = k.address;
                    if (s.push(E), 0 == (0 | r._crypto_secretbox_detached(w, E, i, o, 0, c, u))) {
                        var S = _({
                            mac: k,
                            cipher: g
                        }, a);
                        return f(s), S
                    }
                    v(s, "invalid usage")
                }

                function Je(e, t, n, a) {
                    var s = [];
                    l(a);
                    var i = y(e = m(s, e, "message")),
                        o = e.length;
                    s.push(i), t = m(s, t, "nonce");
                    var c, h = 0 | r._crypto_secretbox_noncebytes();
                    t.length !== h && b(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "key");
                    var u, d = 0 | r._crypto_secretbox_keybytes();
                    n.length !== d && b(s, "invalid key length"), u = y(n), s.push(u);
                    var g = new p(o + r._crypto_secretbox_macbytes() | 0),
                        w = g.address;
                    if (s.push(w), 0 == (0 | r._crypto_secretbox_easy(w, i, o, 0, c, u))) {
                        var k = _(g, a);
                        return f(s), k
                    }
                    v(s, "invalid usage")
                }

                function $e(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_secretbox_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_secretbox_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function Qe(e, t, n, a, s) {
                    var i = [];
                    l(s);
                    var o = y(e = m(i, e, "ciphertext")),
                        c = e.length;
                    i.push(o), t = m(i, t, "mac");
                    var h, u = 0 | r._crypto_secretbox_macbytes();
                    t.length !== u && b(i, "invalid mac length"), h = y(t), i.push(h), n = m(i, n, "nonce");
                    var d, g = 0 | r._crypto_secretbox_noncebytes();
                    n.length !== g && b(i, "invalid nonce length"), d = y(n), i.push(d), a = m(i, a, "key");
                    var w, k = 0 | r._crypto_secretbox_keybytes();
                    a.length !== k && b(i, "invalid key length"), w = y(a), i.push(w);
                    var E = new p(0 | c),
                        S = E.address;
                    if (i.push(S), 0 == (0 | r._crypto_secretbox_open_detached(S, o, h, c, 0, d, w))) {
                        var x = _(E, s);
                        return f(i), x
                    }
                    v(i, "wrong secret key for the given ciphertext")
                }

                function et(e, t, n, a) {
                    var s = [];
                    l(a), e = m(s, e, "ciphertext");
                    var i, o = r._crypto_secretbox_macbytes(),
                        c = e.length;
                    c < o && b(s, "ciphertext is too short"), i = y(e), s.push(i), t = m(s, t, "nonce");
                    var h, u = 0 | r._crypto_secretbox_noncebytes();
                    t.length !== u && b(s, "invalid nonce length"), h = y(t), s.push(h), n = m(s, n, "key");
                    var d, g = 0 | r._crypto_secretbox_keybytes();
                    n.length !== g && b(s, "invalid key length"), d = y(n), s.push(d);
                    var w = new p(c - r._crypto_secretbox_macbytes() | 0),
                        k = w.address;
                    if (s.push(k), 0 == (0 | r._crypto_secretbox_open_easy(k, i, c, 0, h, d))) {
                        var E = _(w, a);
                        return f(s), E
                    }
                    v(s, "wrong secret key for the given ciphertext")
                }

                function tt(e, t, n) {
                    var a = [];
                    l(n), e = m(a, e, "header");
                    var s, i = 0 | r._crypto_secretstream_xchacha20poly1305_headerbytes();
                    e.length !== i && b(a, "invalid header length"), s = y(e), a.push(s), t = m(a, t, "key");
                    var o, c = 0 | r._crypto_secretstream_xchacha20poly1305_keybytes();
                    t.length !== c && b(a, "invalid key length"), o = y(t), a.push(o);
                    var h = new p(52).address;
                    if (0 == (0 | r._crypto_secretstream_xchacha20poly1305_init_pull(h, s, o))) {
                        var _ = h;
                        return f(a), _
                    }
                    v(a, "invalid usage")
                }

                function rt(e, t) {
                    var n = [];
                    l(t), e = m(n, e, "key");
                    var a, s = 0 | r._crypto_secretstream_xchacha20poly1305_keybytes();
                    e.length !== s && b(n, "invalid key length"), a = y(e), n.push(a);
                    var i = new p(52).address,
                        o = new p(0 | r._crypto_secretstream_xchacha20poly1305_headerbytes()),
                        c = o.address;
                    if (n.push(c), 0 == (0 | r._crypto_secretstream_xchacha20poly1305_init_push(i, c, a))) {
                        var h = {
                            state: i,
                            header: _(o, t)
                        };
                        return f(n), h
                    }
                    v(n, "invalid usage")
                }

                function nt(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_secretstream_xchacha20poly1305_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_secretstream_xchacha20poly1305_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function at(e, t, n, a) {
                    var s = [];
                    l(a), g(s, e, "state_address"), t = m(s, t, "cipher");
                    var i, o = r._crypto_secretstream_xchacha20poly1305_abytes(),
                        c = t.length;
                    c < o && b(s, "cipher is too short"), i = y(t), s.push(i);
                    var h = null,
                        u = 0;
                    null != n && (h = y(n = m(s, n, "ad")), u = n.length, s.push(h));
                    var v = new p(c - r._crypto_secretstream_xchacha20poly1305_abytes() | 0),
                        w = v.address;
                    s.push(w);
                    var k, E = (k = d(1), s.push(k), (E = 0 === r._crypto_secretstream_xchacha20poly1305_pull(e, w, 0, k, i, c, 0, h, u) && {
                        tag: r.HEAPU8[k],
                        message: v
                    }) && {
                        message: _(E.message, a),
                        tag: E.tag
                    });
                    return f(s), E
                }

                function st(e, t, n, a, s) {
                    var i = [];
                    l(s), g(i, e, "state_address");
                    var o = y(t = m(i, t, "message_chunk")),
                        c = t.length;
                    i.push(o);
                    var h = null,
                        u = 0;
                    null != n && (h = y(n = m(i, n, "ad")), u = n.length, i.push(h)), g(i, a, "tag"), ("number" != typeof a || (0 | a) !== a || a < 0) && b(i, "tag must be an unsigned integer");
                    var d = new p(c + r._crypto_secretstream_xchacha20poly1305_abytes() | 0),
                        w = d.address;
                    if (i.push(w), 0 == (0 | r._crypto_secretstream_xchacha20poly1305_push(e, w, 0, o, c, 0, h, u, 0, a))) {
                        var k = _(d, s);
                        return f(i), k
                    }
                    v(i, "invalid usage")
                }

                function it(e, t) {
                    var n = [];
                    return l(t), g(n, e, "state_address"), r._crypto_secretstream_xchacha20poly1305_rekey(e), f(n), !0
                }

                function ot(e, t, n) {
                    var a = [];
                    l(n);
                    var s = y(e = m(a, e, "message")),
                        i = e.length;
                    a.push(s), t = m(a, t, "key");
                    var o, c = 0 | r._crypto_shorthash_keybytes();
                    t.length !== c && b(a, "invalid key length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_shorthash_bytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_shorthash(u, s, i, 0, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "invalid usage")
                }

                function ct(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_shorthash_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_shorthash_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function ht(e, t, n) {
                    var a = [];
                    l(n);
                    var s = y(e = m(a, e, "message")),
                        i = e.length;
                    a.push(s), t = m(a, t, "key");
                    var o, c = 0 | r._crypto_shorthash_siphashx24_keybytes();
                    t.length !== c && b(a, "invalid key length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_shorthash_siphashx24_bytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_shorthash_siphashx24(u, s, i, 0, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "invalid usage")
                }

                function _t(e, t, n) {
                    var a = [];
                    l(n);
                    var s = y(e = m(a, e, "message")),
                        i = e.length;
                    a.push(s), t = m(a, t, "privateKey");
                    var o, c = 0 | r._crypto_sign_secretkeybytes();
                    t.length !== c && b(a, "invalid privateKey length"), o = y(t), a.push(o);
                    var h = new p(e.length + r._crypto_sign_bytes() | 0),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_sign(u, null, s, i, 0, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "invalid usage")
                }

                function ut(e, t, n) {
                    var a = [];
                    l(n);
                    var s = y(e = m(a, e, "message")),
                        i = e.length;
                    a.push(s), t = m(a, t, "privateKey");
                    var o, c = 0 | r._crypto_sign_secretkeybytes();
                    t.length !== c && b(a, "invalid privateKey length"), o = y(t), a.push(o);
                    var h = new p(0 | r._crypto_sign_bytes()),
                        u = h.address;
                    if (a.push(u), 0 == (0 | r._crypto_sign_detached(u, null, s, i, 0, o))) {
                        var d = _(h, n);
                        return f(a), d
                    }
                    v(a, "invalid usage")
                }

                function lt(e, t) {
                    var n = [];
                    l(t), e = m(n, e, "edPk");
                    var a, s = 0 | r._crypto_sign_publickeybytes();
                    e.length !== s && b(n, "invalid edPk length"), a = y(e), n.push(a);
                    var i = new p(0 | r._crypto_scalarmult_scalarbytes()),
                        o = i.address;
                    if (n.push(o), 0 == (0 | r._crypto_sign_ed25519_pk_to_curve25519(o, a))) {
                        var c = _(i, t);
                        return f(n), c
                    }
                    v(n, "invalid key")
                }

                function pt(e, t) {
                    var n = [];
                    l(t), e = m(n, e, "edSk");
                    var a, s = 0 | r._crypto_sign_secretkeybytes();
                    e.length !== s && b(n, "invalid edSk length"), a = y(e), n.push(a);
                    var i = new p(0 | r._crypto_scalarmult_scalarbytes()),
                        o = i.address;
                    if (n.push(o), 0 == (0 | r._crypto_sign_ed25519_sk_to_curve25519(o, a))) {
                        var c = _(i, t);
                        return f(n), c
                    }
                    v(n, "invalid key")
                }

                function yt(e, t) {
                    var n = [];
                    l(t), e = m(n, e, "privateKey");
                    var a, s = 0 | r._crypto_sign_secretkeybytes();
                    e.length !== s && b(n, "invalid privateKey length"), a = y(e), n.push(a);
                    var i = new p(0 | r._crypto_sign_publickeybytes()),
                        o = i.address;
                    if (n.push(o), 0 == (0 | r._crypto_sign_ed25519_sk_to_pk(o, a))) {
                        var c = _(i, t);
                        return f(n), c
                    }
                    v(n, "invalid key")
                }

                function dt(e, t) {
                    var n = [];
                    l(t), e = m(n, e, "privateKey");
                    var a, s = 0 | r._crypto_sign_secretkeybytes();
                    e.length !== s && b(n, "invalid privateKey length"), a = y(e), n.push(a);
                    var i = new p(0 | r._crypto_sign_seedbytes()),
                        o = i.address;
                    if (n.push(o), 0 == (0 | r._crypto_sign_ed25519_sk_to_seed(o, a))) {
                        var c = _(i, t);
                        return f(n), c
                    }
                    v(n, "invalid key")
                }

                function ft(e, t, n) {
                    var a = [];
                    l(n), g(a, e, "state_address"), t = m(a, t, "privateKey");
                    var s, i = 0 | r._crypto_sign_secretkeybytes();
                    t.length !== i && b(a, "invalid privateKey length"), s = y(t), a.push(s);
                    var o = new p(0 | r._crypto_sign_bytes()),
                        c = o.address;
                    if (a.push(c), 0 == (0 | r._crypto_sign_final_create(e, c, null, s))) {
                        var h = (r._free(e), _(o, n));
                        return f(a), h
                    }
                    v(a, "invalid usage")
                }

                function vt(e, t, n, a) {
                    var s = [];
                    l(a), g(s, e, "state_address"), t = m(s, t, "signature");
                    var i, o = 0 | r._crypto_sign_bytes();
                    t.length !== o && b(s, "invalid signature length"), i = y(t), s.push(i), n = m(s, n, "publicKey");
                    var c, h = 0 | r._crypto_sign_publickeybytes();
                    n.length !== h && b(s, "invalid publicKey length"), c = y(n), s.push(c);
                    var _ = 0 == (0 | r._crypto_sign_final_verify(e, i, c));
                    return f(s), _
                }

                function bt(e) {
                    var t = [];
                    l(e);
                    var n = new p(208).address;
                    if (0 == (0 | r._crypto_sign_init(n))) {
                        var a = n;
                        return f(t), a
                    }
                    v(t, "internal error")
                }

                function gt(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_sign_publickeybytes()),
                        a = n.address;
                    t.push(a);
                    var s = new p(0 | r._crypto_sign_secretkeybytes()),
                        i = s.address;
                    if (t.push(i), 0 == (0 | r._crypto_sign_keypair(a, i))) {
                        var o = {
                            publicKey: _(n, e),
                            privateKey: _(s, e),
                            keyType: "ed25519"
                        };
                        return f(t), o
                    }
                    v(t, "internal error")
                }

                function mt(e, t, n) {
                    var a = [];
                    l(n), e = m(a, e, "signedMessage");
                    var s, i = r._crypto_sign_bytes(),
                        o = e.length;
                    o < i && b(a, "signedMessage is too short"), s = y(e), a.push(s), t = m(a, t, "publicKey");
                    var c, h = 0 | r._crypto_sign_publickeybytes();
                    t.length !== h && b(a, "invalid publicKey length"), c = y(t), a.push(c);
                    var u = new p(o - r._crypto_sign_bytes() | 0),
                        d = u.address;
                    if (a.push(d), 0 == (0 | r._crypto_sign_open(d, null, s, o, 0, c))) {
                        var g = _(u, n);
                        return f(a), g
                    }
                    v(a, "incorrect signature for the given public key")
                }

                function wt(e, t) {
                    var n = [];
                    l(t), e = m(n, e, "seed");
                    var a, s = 0 | r._crypto_sign_seedbytes();
                    e.length !== s && b(n, "invalid seed length"), a = y(e), n.push(a);
                    var i = new p(0 | r._crypto_sign_publickeybytes()),
                        o = i.address;
                    n.push(o);
                    var c = new p(0 | r._crypto_sign_secretkeybytes()),
                        h = c.address;
                    if (n.push(h), 0 == (0 | r._crypto_sign_seed_keypair(o, h, a))) {
                        var u = {
                            publicKey: _(i, t),
                            privateKey: _(c, t),
                            keyType: "ed25519"
                        };
                        return f(n), u
                    }
                    v(n, "invalid usage")
                }

                function kt(e, t, n) {
                    var a = [];
                    l(n), g(a, e, "state_address");
                    var s = y(t = m(a, t, "message_chunk")),
                        i = t.length;
                    a.push(s), 0 != (0 | r._crypto_sign_update(e, s, i)) && v(a, "invalid usage"), f(a)
                }

                function Et(e, t, n) {
                    var a = [];
                    e = m(a, e, "signature");
                    var s, i = 0 | r._crypto_sign_bytes();
                    e.length !== i && b(a, "invalid signature length"), s = y(e), a.push(s);
                    var o = y(t = m(a, t, "message")),
                        c = t.length;
                    a.push(o), n = m(a, n, "publicKey");
                    var h, _ = 0 | r._crypto_sign_publickeybytes();
                    n.length !== _ && b(a, "invalid publicKey length"), h = y(n), a.push(h);
                    var u = 0 == (0 | r._crypto_sign_verify_detached(s, o, c, 0, h));
                    return f(a), u
                }

                function St(e, t, n, a) {
                    var s = [];
                    l(a), g(s, e, "outLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(s, "outLength must be an unsigned integer"), t = m(s, t, "key");
                    var i, o = 0 | r._crypto_stream_chacha20_keybytes();
                    t.length !== o && b(s, "invalid key length"), i = y(t), s.push(i), n = m(s, n, "nonce");
                    var c, h = 0 | r._crypto_stream_chacha20_noncebytes();
                    n.length !== h && b(s, "invalid nonce length"), c = y(n), s.push(c);
                    var u = new p(0 | e),
                        d = u.address;
                    s.push(d), r._crypto_stream_chacha20(d, e, 0, c, i);
                    var v = _(u, a);
                    return f(s), v
                }

                function xt(e, t, n, a) {
                    var s = [];
                    l(a);
                    var i = y(e = m(s, e, "input_message")),
                        o = e.length;
                    s.push(i), t = m(s, t, "nonce");
                    var c, h = 0 | r._crypto_stream_chacha20_ietf_noncebytes();
                    t.length !== h && b(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "key");
                    var u, d = 0 | r._crypto_stream_chacha20_ietf_keybytes();
                    n.length !== d && b(s, "invalid key length"), u = y(n), s.push(u);
                    var g = new p(0 | o),
                        w = g.address;
                    if (s.push(w), 0 === r._crypto_stream_chacha20_ietf_xor(w, i, o, 0, c, u)) {
                        var k = _(g, a);
                        return f(s), k
                    }
                    v(s, "invalid usage")
                }

                function Tt(e, t, n, a, s) {
                    var i = [];
                    l(s);
                    var o = y(e = m(i, e, "input_message")),
                        c = e.length;
                    i.push(o), t = m(i, t, "nonce");
                    var h, u = 0 | r._crypto_stream_chacha20_ietf_noncebytes();
                    t.length !== u && b(i, "invalid nonce length"), h = y(t), i.push(h), g(i, n, "nonce_increment"), ("number" != typeof n || (0 | n) !== n || n < 0) && b(i, "nonce_increment must be an unsigned integer"), a = m(i, a, "key");
                    var d, w = 0 | r._crypto_stream_chacha20_ietf_keybytes();
                    a.length !== w && b(i, "invalid key length"), d = y(a), i.push(d);
                    var k = new p(0 | c),
                        E = k.address;
                    if (i.push(E), 0 === r._crypto_stream_chacha20_ietf_xor_ic(E, o, c, 0, h, n, 0, d)) {
                        var S = _(k, s);
                        return f(i), S
                    }
                    v(i, "invalid usage")
                }

                function At(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_stream_chacha20_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_stream_chacha20_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function Rt(e, t, n, a) {
                    var s = [];
                    l(a);
                    var i = y(e = m(s, e, "input_message")),
                        o = e.length;
                    s.push(i), t = m(s, t, "nonce");
                    var c, h = 0 | r._crypto_stream_chacha20_noncebytes();
                    t.length !== h && b(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "key");
                    var u, d = 0 | r._crypto_stream_chacha20_keybytes();
                    n.length !== d && b(s, "invalid key length"), u = y(n), s.push(u);
                    var g = new p(0 | o),
                        w = g.address;
                    if (s.push(w), 0 === r._crypto_stream_chacha20_xor(w, i, o, 0, c, u)) {
                        var k = _(g, a);
                        return f(s), k
                    }
                    v(s, "invalid usage")
                }

                function Mt(e, t, n, a, s) {
                    var i = [];
                    l(s);
                    var o = y(e = m(i, e, "input_message")),
                        c = e.length;
                    i.push(o), t = m(i, t, "nonce");
                    var h, u = 0 | r._crypto_stream_chacha20_noncebytes();
                    t.length !== u && b(i, "invalid nonce length"), h = y(t), i.push(h), g(i, n, "nonce_increment"), ("number" != typeof n || (0 | n) !== n || n < 0) && b(i, "nonce_increment must be an unsigned integer"), a = m(i, a, "key");
                    var d, w = 0 | r._crypto_stream_chacha20_keybytes();
                    a.length !== w && b(i, "invalid key length"), d = y(a), i.push(d);
                    var k = new p(0 | c),
                        E = k.address;
                    if (i.push(E), 0 === r._crypto_stream_chacha20_xor_ic(E, o, c, 0, h, n, 0, d)) {
                        var S = _(k, s);
                        return f(i), S
                    }
                    v(i, "invalid usage")
                }

                function Bt(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_stream_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_stream_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function Kt(e) {
                    var t = [];
                    l(e);
                    var n = new p(0 | r._crypto_stream_xchacha20_keybytes()),
                        a = n.address;
                    t.push(a), r._crypto_stream_xchacha20_keygen(a);
                    var s = _(n, e);
                    return f(t), s
                }

                function Lt(e, t, n, a) {
                    var s = [];
                    l(a);
                    var i = y(e = m(s, e, "input_message")),
                        o = e.length;
                    s.push(i), t = m(s, t, "nonce");
                    var c, h = 0 | r._crypto_stream_xchacha20_noncebytes();
                    t.length !== h && b(s, "invalid nonce length"), c = y(t), s.push(c), n = m(s, n, "key");
                    var u, d = 0 | r._crypto_stream_xchacha20_keybytes();
                    n.length !== d && b(s, "invalid key length"), u = y(n), s.push(u);
                    var g = new p(0 | o),
                        w = g.address;
                    if (s.push(w), 0 === r._crypto_stream_xchacha20_xor(w, i, o, 0, c, u)) {
                        var k = _(g, a);
                        return f(s), k
                    }
                    v(s, "invalid usage")
                }

                function Yt(e, t, n, a, s) {
                    var i = [];
                    l(s);
                    var o = y(e = m(i, e, "input_message")),
                        c = e.length;
                    i.push(o), t = m(i, t, "nonce");
                    var h, u = 0 | r._crypto_stream_xchacha20_noncebytes();
                    t.length !== u && b(i, "invalid nonce length"), h = y(t), i.push(h), g(i, n, "nonce_increment"), ("number" != typeof n || (0 | n) !== n || n < 0) && b(i, "nonce_increment must be an unsigned integer"), a = m(i, a, "key");
                    var d, w = 0 | r._crypto_stream_xchacha20_keybytes();
                    a.length !== w && b(i, "invalid key length"), d = y(a), i.push(d);
                    var k = new p(0 | c),
                        E = k.address;
                    if (i.push(E), 0 === r._crypto_stream_xchacha20_xor_ic(E, o, c, 0, h, n, 0, d)) {
                        var S = _(k, s);
                        return f(i), S
                    }
                    v(i, "invalid usage")
                }

                function Ot(e, t) {
                    var n = [];
                    l(t), g(n, e, "length"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(n, "length must be an unsigned integer");
                    var a = new p(0 | e),
                        s = a.address;
                    n.push(s), r._randombytes_buf(s, e);
                    var i = _(a, t);
                    return f(n), i
                }

                function It(e, t, n) {
                    var a = [];
                    l(n), g(a, e, "length"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(a, "length must be an unsigned integer"), t = m(a, t, "seed");
                    var s, i = 0 | r._randombytes_seedbytes();
                    t.length !== i && b(a, "invalid seed length"), s = y(t), a.push(s);
                    var o = new p(0 | e),
                        c = o.address;
                    a.push(c), r._randombytes_buf_deterministic(c, e, s);
                    var h = _(o, n);
                    return f(a), h
                }

                function Nt(e) {
                    l(e), r._randombytes_close()
                }

                function Pt(e) {
                    l(e);
                    var t = r._randombytes_random() >>> 0;
                    return f([]), t
                }

                function Ct(e, t) {
                    var n = [];
                    l(t);
                    for (var a = r._malloc(24), s = 0; s < 6; s++) r.setValue(a + 4 * s, r.Runtime.addFunction(e[["implementation_name", "random", "stir", "uniform", "buf", "close"][s]]), "i32");
                    0 != (0 | r._randombytes_set_implementation(a)) && v(n, "unsupported implementation"), f(n)
                }

                function Ut(e) {
                    l(e), r._randombytes_stir()
                }

                function Dt(e, t) {
                    var n = [];
                    l(t), g(n, e, "upper_bound"), ("number" != typeof e || (0 | e) !== e || e < 0) && b(n, "upper_bound must be an unsigned integer");
                    var a = r._randombytes_uniform(e) >>> 0;
                    return f(n), a
                }

                function jt() {
                    var e = r._sodium_version_string(),
                        t = r.UTF8ToString(e);
                    return f([]), t
                }
                return p.prototype.to_Uint8Array = function() {
                    var e = new Uint8Array(this.length);
                    return e.set(r.HEAPU8.subarray(this.address, this.address + this.length)), e
                }, e.add = function(e, t) {
                    if (!(e instanceof Uint8Array && t instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can added");
                    var r = e.length,
                        n = 0,
                        a = 0;
                    if (t.length != e.length) throw new TypeError("Arguments must have the same length");
                    for (a = 0; a < r; a++) n >>= 8, n += e[a] + t[a], e[a] = 255 & n
                }, e.base64_variants = o, e.compare = function(e, t) {
                    if (!(e instanceof Uint8Array && t instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be compared");
                    if (e.length !== t.length) throw new TypeError("Only instances of identical length can be compared");
                    for (var r = 0, n = 1, a = e.length; a-- > 0;) r |= t[a] - e[a] >> 8 & n, n &= (t[a] ^ e[a]) - 1 >> 8;
                    return r + r + n - 1
                }, e.from_base64 = function(e, t) {
                    t = c(t);
                    var n, a = [],
                        s = new p(3 * (e = m(a, e, "input")).length / 4),
                        i = y(e),
                        o = d(4),
                        h = d(4);
                    return a.push(i), a.push(s.address), a.push(s.result_bin_len_p), a.push(s.b64_end_p), 0 !== r._sodium_base642bin(s.address, s.length, i, e.length, 0, o, h, t) && v(a, "invalid input"), r.getValue(h, "i32") - i !== e.length && v(a, "incomplete input"), s.length = r.getValue(o, "i32"), n = s.to_Uint8Array(), f(a), n
                }, e.from_hex = function(e) {
                    var t, n = [],
                        a = new p((e = m(n, e, "input")).length / 2),
                        s = y(e),
                        i = d(4);
                    return n.push(s), n.push(a.address), n.push(a.hex_end_p), 0 !== r._sodium_hex2bin(a.address, a.length, s, e.length, 0, 0, i) && v(n, "invalid input"), r.getValue(i, "i32") - s !== e.length && v(n, "incomplete input"), t = a.to_Uint8Array(), f(n), t
                }, e.from_string = a, e.increment = function(e) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be incremented");
                    for (var t = 256, r = 0, n = e.length; r < n; r++) t >>= 8, t += e[r], e[r] = 255 & t
                }, e.is_zero = function(e) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be checked");
                    for (var t = 0, r = 0, n = e.length; r < n; r++) t |= e[r];
                    return 0 === t
                }, e.libsodium = t, e.memcmp = function(e, t) {
                    if (!(e instanceof Uint8Array && t instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be compared");
                    if (e.length !== t.length) throw new TypeError("Only instances of identical length can be compared");
                    for (var r = 0, n = 0, a = e.length; n < a; n++) r |= e[n] ^ t[n];
                    return 0 === r
                }, e.memzero = function(e) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be wiped");
                    for (var t = 0, r = e.length; t < r; t++) e[t] = 0
                }, e.output_formats = function() {
                    return ["uint8array", "text", "hex", "base64"]
                }, e.pad = function(e, t) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("buffer must be a Uint8Array");
                    if ((t |= 0) <= 0) throw new Error("block size must be > 0");
                    var n, a = [],
                        s = d(4),
                        i = 1,
                        o = 0,
                        c = 0 | e.length,
                        h = new p(c + t);
                    a.push(s), a.push(h.address);
                    for (var _ = h.address, u = h.address + c + t; _ < u; _++) r.HEAPU8[_] = e[o], o += i = 1 & ~((65535 & ((c -= i) >>> 48 | c >>> 32 | c >>> 16 | c)) - 1 >> 16);
                    return 0 !== r._sodium_pad(s, h.address, e.length, t, h.length) && v(a, "internal error"), h.length = r.getValue(s, "i32"), n = h.to_Uint8Array(), f(a), n
                }, e.unpad = function(e, t) {
                    if (!(e instanceof Uint8Array)) throw new TypeError("buffer must be a Uint8Array");
                    if ((t |= 0) <= 0) throw new Error("block size must be > 0");
                    var n = [],
                        a = y(e),
                        s = d(4);
                    return n.push(a), n.push(s), 0 !== r._sodium_unpad(s, a, e.length, t) && v(n, "unsupported/invalid padding"), e = (e = new Uint8Array(e)).subarray(0, r.getValue(s, "i32")), f(n), e
                }, e.ready = n, e.symbols = function() {
                    return Object.keys(e).sort()
                }, e.to_base64 = h, e.to_hex = i, e.to_string = s, e
            }) ? n.apply(t, a) : n) && (e.exports = s), o && i.sodium.ready.then((function() {
                o(i.sodium)
            }))
        },
        554: function(e, t, r) {
            e.exports = r(3156)(r(3164))
        }
    }
]);