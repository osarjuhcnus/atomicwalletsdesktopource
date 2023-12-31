(window.webpackJsonp = window.webpackJsonp || []).push([
    [167], {
        4055: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return TransportWebHID
            }));
            var r = n(427),
                o = n(922),
                i = n.n(o),
                s = n(169),
                c = n(86),
                u = n(71);
            const a = [{
                    vendorId: s.d
                }],
                h = () => {
                    const {
                        hid: t
                    } = navigator;
                    if (!t) throw new u.TransportError("navigator.hid is not supported", "HIDNotSupported");
                    return t
                };
            async function l() {
                const t = await h().requestDevice({
                    filters: a
                });
                return Array.isArray(t) ? t : [t]
            }
            async function p() {
                return (await h().getDevices()).filter(t => t.vendorId === s.d)
            }
            class TransportWebHID extends r.a {
                constructor(t) {
                    super(), this.device = void 0, this.deviceModel = void 0, this.channel = Math.floor(65535 * Math.random()), this.packetSize = 64, this.inputs = [], this.inputCallback = void 0, this.read = () => this.inputs.length ? Promise.resolve(this.inputs.shift()) : new Promise(t => {
                        this.inputCallback = t
                    }), this.onInputReport = t => {
                        const e = Buffer.from(t.data.buffer);
                        this.inputCallback ? (this.inputCallback(e), this.inputCallback = null) : this.inputs.push(e)
                    }, this._disconnectEmitted = !1, this._emitDisconnect = t => {
                        this._disconnectEmitted || (this._disconnectEmitted = !0, this.emit("disconnect", t))
                    }, this.exchange = t => this.exchangeAtomicImpl(async () => {
                        const {
                            channel: e,
                            packetSize: n
                        } = this;
                        Object(c.log)("apdu", "=> " + t.toString("hex"));
                        const r = i()(e, n),
                            o = r.makeBlocks(t);
                        for (let t = 0; t < o.length; t++) await this.device.sendReport(0, o[t]);
                        let s, u;
                        for (; !(s = r.getReducedResult(u));) {
                            const t = await this.read();
                            u = r.reduceResponse(u, t)
                        }
                        return Object(c.log)("apdu", "<= " + s.toString("hex")), s
                    }).catch(t => {
                        if (t && t.message && t.message.includes("write")) throw this._emitDisconnect(t), new u.DisconnectedDeviceDuringOperation(t.message);
                        throw t
                    }), this.device = t, this.deviceModel = Object(s.c)(t.productId), t.addEventListener("inputreport", this.onInputReport)
                }
                static async request() {
                    const [t] = await l();
                    return TransportWebHID.open(t)
                }
                static async openConnected() {
                    const t = await p();
                    return 0 === t.length ? null : TransportWebHID.open(t[0])
                }
                static async open(t) {
                    await t.open();
                    const e = new TransportWebHID(t),
                        n = r => {
                            t === r.device && (h().removeEventListener("disconnect", n), e._emitDisconnect(new u.DisconnectedDevice))
                        };
                    return h().addEventListener("disconnect", n), e
                }
                async close() {
                    await this.exchangeBusyPromise, this.device.removeEventListener("inputreport", this.onInputReport), await this.device.close()
                }
                setScrambleKey() {}
            }
            TransportWebHID.isSupported = () => Promise.resolve(!(!global.navigator || !global.navigator.hid)), TransportWebHID.list = p, TransportWebHID.listen = t => {
                let e = !1;
                return async function() {
                    const t = await p();
                    return t.length > 0 ? t[0] : (await l())[0]
                }().then(n => {
                    if (n) {
                        if (!e) {
                            const e = Object(s.c)(n.productId);
                            t.next({
                                type: "add",
                                descriptor: n,
                                deviceModel: e
                            }), t.complete()
                        }
                    } else t.error(new u.TransportOpenUserCancelled("Access denied to use Ledger device"))
                }, e => {
                    t.error(new u.TransportOpenUserCancelled(e.message))
                }), {
                    unsubscribe: function() {
                        e = !0
                    }
                }
            }
        },
        427: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return Transport
            }));
            var r = n(69),
                o = n.n(r),
                i = n(71);
            class Transport {
                constructor() {
                    this.exchangeTimeout = 3e4, this.unresponsiveTimeout = 15e3, this.deviceModel = null, this._events = new o.a, this.send = async (t, e, n, r, o = Buffer.alloc(0), s = [i.StatusCodes.OK]) => {
                        if (o.length >= 256) throw new i.TransportError("data.length exceed 256 bytes limit. Got: " + o.length, "DataLengthTooBig");
                        const c = await this.exchange(Buffer.concat([Buffer.from([t, e, n, r]), Buffer.from([o.length]), o])),
                            u = c.readUInt16BE(c.length - 2);
                        if (!s.some(t => t === u)) throw new i.TransportStatusError(u);
                        return c
                    }, this.exchangeBusyPromise = void 0, this.exchangeAtomicImpl = async t => {
                        if (this.exchangeBusyPromise) throw new i.TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");
                        let e;
                        const n = new Promise(t => {
                            e = t
                        });
                        this.exchangeBusyPromise = n;
                        let r = !1;
                        const o = setTimeout(() => {
                            r = !0, this.emit("unresponsive")
                        }, this.unresponsiveTimeout);
                        try {
                            const n = await t();
                            return r && this.emit("responsive"), n
                        } finally {
                            clearTimeout(o), e && e(), this.exchangeBusyPromise = null
                        }
                    }, this._appAPIlock = null
                }
                exchange(t) {
                    throw new Error("exchange not implemented")
                }
                setScrambleKey(t) {}
                close() {
                    return Promise.resolve()
                }
                on(t, e) {
                    this._events.on(t, e)
                }
                off(t, e) {
                    this._events.removeListener(t, e)
                }
                emit(t, ...e) {
                    this._events.emit(t, ...e)
                }
                setDebugMode() {
                    console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")
                }
                setExchangeTimeout(t) {
                    this.exchangeTimeout = t
                }
                setExchangeUnresponsiveTimeout(t) {
                    this.unresponsiveTimeout = t
                }
                static create(t = 3e3, e) {
                    return new Promise((n, r) => {
                        let o = !1;
                        const s = this.listen({
                                next: e => {
                                    o = !0, s && s.unsubscribe(), c && clearTimeout(c), this.open(e.descriptor, t).then(n, r)
                                },
                                error: t => {
                                    c && clearTimeout(c), r(t)
                                },
                                complete: () => {
                                    c && clearTimeout(c), o || r(new i.TransportError(this.ErrorMessage_NoDeviceFound, "NoDeviceFound"))
                                }
                            }),
                            c = e ? setTimeout(() => {
                                s.unsubscribe(), r(new i.TransportError(this.ErrorMessage_ListenTimeout, "ListenTimeout"))
                            }, e) : null
                    })
                }
                decorateAppAPIMethods(t, e, n) {
                    for (let r of e) t[r] = this.decorateAppAPIMethod(r, t[r], t, n)
                }
                decorateAppAPIMethod(t, e, n, r) {
                    return async (...o) => {
                        const {
                            _appAPIlock: s
                        } = this;
                        if (s) return Promise.reject(new i.TransportError("Ledger Device is busy (lock " + s + ")", "TransportLocked"));
                        try {
                            return this._appAPIlock = t, this.setScrambleKey(r), await e.apply(n, o)
                        } finally {
                            this._appAPIlock = null
                        }
                    }
                }
            }
            Transport.isSupported = void 0, Transport.list = void 0, Transport.listen = void 0, Transport.open = void 0, Transport.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)", Transport.ErrorMessage_NoDeviceFound = "No Ledger device found"
        },
        5387: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return TransportWebBLE_BluetoothTransport
            }));
            var r = n(427),
                o = n(71),
                i = n(169),
                s = n(1991),
                c = n(1992),
                u = n(86),
                a = function(t, e) {
                    return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                        })(t, e)
                };

            function h(t, e) {
                function n() {
                    this.constructor = t
                }
                a(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }

            function l(t) {
                return "function" == typeof t
            }
            var p = !1,
                f = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(t) {
                        t && (new Error).stack;
                        p = t
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return p
                    }
                };

            function d(t) {
                setTimeout((function() {
                    throw t
                }), 0)
            }
            var b = {
                    closed: !0,
                    next: function(t) {},
                    error: function(t) {
                        if (f.useDeprecatedSynchronousErrorHandling) throw t;
                        d(t)
                    },
                    complete: function() {}
                },
                v = function() {
                    return Array.isArray || function(t) {
                        return t && "number" == typeof t.length
                    }
                }();

            function y(t) {
                return null !== t && "object" == typeof t
            }
            var w = function() {
                    function t(t) {
                        return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(t, e) {
                            return e + 1 + ") " + t.toString()
                        })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }(),
                m = function() {
                    function t(t) {
                        this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t)
                    }
                    return t.prototype.unsubscribe = function() {
                        var e;
                        if (!this.closed) {
                            var n = this._parentOrParents,
                                r = this._ctorUnsubscribe,
                                o = this._unsubscribe,
                                i = this._subscriptions;
                            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
                            else if (null !== n)
                                for (var s = 0; s < n.length; ++s) {
                                    n[s].remove(this)
                                }
                            if (l(o)) {
                                r && (this._unsubscribe = void 0);
                                try {
                                    o.call(this)
                                } catch (t) {
                                    e = t instanceof w ? g(t.errors) : [t]
                                }
                            }
                            if (v(i)) {
                                s = -1;
                                for (var c = i.length; ++s < c;) {
                                    var u = i[s];
                                    if (y(u)) try {
                                        u.unsubscribe()
                                    } catch (t) {
                                        e = e || [], t instanceof w ? e = e.concat(g(t.errors)) : e.push(t)
                                    }
                                }
                            }
                            if (e) throw new w(e)
                        }
                    }, t.prototype.add = function(e) {
                        var n = e;
                        if (!e) return t.EMPTY;
                        switch (typeof e) {
                            case "function":
                                n = new t(e);
                            case "object":
                                if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                                if (this.closed) return n.unsubscribe(), n;
                                if (!(n instanceof t)) {
                                    var r = n;
                                    (n = new t)._subscriptions = [r]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + e + " added to Subscription.")
                        }
                        var o = n._parentOrParents;
                        if (null === o) n._parentOrParents = this;
                        else if (o instanceof t) {
                            if (o === this) return n;
                            n._parentOrParents = [o, this]
                        } else {
                            if (-1 !== o.indexOf(this)) return n;
                            o.push(this)
                        }
                        var i = this._subscriptions;
                        return null === i ? this._subscriptions = [n] : i.push(n), n
                    }, t.prototype.remove = function(t) {
                        var e = this._subscriptions;
                        if (e) {
                            var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                        }
                    }, t.EMPTY = function(t) {
                        return t.closed = !0, t
                    }(new t), t
                }();

            function g(t) {
                return t.reduce((function(t, e) {
                    return t.concat(e instanceof w ? e.errors : e)
                }), [])
            }
            var _ = function() {
                    return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
                }(),
                E = function(t) {
                    function e(n, r, o) {
                        var i = t.call(this) || this;
                        switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
                            case 0:
                                i.destination = b;
                                break;
                            case 1:
                                if (!n) {
                                    i.destination = b;
                                    break
                                }
                                if ("object" == typeof n) {
                                    n instanceof e ? (i.syncErrorThrowable = n.syncErrorThrowable, i.destination = n, n.add(i)) : (i.syncErrorThrowable = !0, i.destination = new T(i, n));
                                    break
                                }
                            default:
                                i.syncErrorThrowable = !0, i.destination = new T(i, n, r, o)
                        }
                        return i
                    }
                    return h(e, t), e.prototype[_] = function() {
                        return this
                    }, e.create = function(t, n, r) {
                        var o = new e(t, n, r);
                        return o.syncErrorThrowable = !1, o
                    }, e.prototype.next = function(t) {
                        this.isStopped || this._next(t)
                    }, e.prototype.error = function(t) {
                        this.isStopped || (this.isStopped = !0, this._error(t))
                    }, e.prototype.complete = function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, e.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                    }, e.prototype._next = function(t) {
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        this.destination.error(t), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.destination.complete(), this.unsubscribe()
                    }, e.prototype._unsubscribeAndRecycle = function() {
                        var t = this._parentOrParents;
                        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                    }, e
                }(m),
                T = function(t) {
                    function e(e, n, r, o) {
                        var i, s = t.call(this) || this;
                        s._parentSubscriber = e;
                        var c = s;
                        return l(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== b && (l((c = Object.create(n)).unsubscribe) && s.add(c.unsubscribe.bind(c)), c.unsubscribe = s.unsubscribe.bind(s))), s._context = c, s._next = i, s._error = r, s._complete = o, s
                    }
                    return h(e, t), e.prototype.next = function(t) {
                        if (!this.isStopped && this._next) {
                            var e = this._parentSubscriber;
                            f.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                        }
                    }, e.prototype.error = function(t) {
                        if (!this.isStopped) {
                            var e = this._parentSubscriber,
                                n = f.useDeprecatedSynchronousErrorHandling;
                            if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                            else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : d(t), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), n) throw t;
                                d(t)
                            }
                        }
                    }, e.prototype.complete = function() {
                        var t = this;
                        if (!this.isStopped) {
                            var e = this._parentSubscriber;
                            if (this._complete) {
                                var n = function() {
                                    return t._complete.call(t._context)
                                };
                                f.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }, e.prototype.__tryOrUnsub = function(t, e) {
                        try {
                            t.call(this._context, e)
                        } catch (t) {
                            if (this.unsubscribe(), f.useDeprecatedSynchronousErrorHandling) throw t;
                            d(t)
                        }
                    }, e.prototype.__tryOrSetError = function(t, e, n) {
                        if (!f.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            e.call(this._context, n)
                        } catch (e) {
                            return f.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (d(e), !0)
                        }
                        return !1
                    }, e.prototype._unsubscribe = function() {
                        var t = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, t.unsubscribe()
                    }, e
                }(E);
            var S = function() {
                return "function" == typeof Symbol && Symbol.observable || "@@observable"
            }();

            function x(t) {
                return t
            }

            function O(t) {
                return 0 === t.length ? x : 1 === t.length ? t[0] : function(e) {
                    return t.reduce((function(t, e) {
                        return e(t)
                    }), e)
                }
            }
            var j = function() {
                function t(t) {
                    this._isScalar = !1, t && (this._subscribe = t)
                }
                return t.prototype.lift = function(e) {
                    var n = new t;
                    return n.source = this, n.operator = e, n
                }, t.prototype.subscribe = function(t, e, n) {
                    var r = this.operator,
                        o = function(t, e, n) {
                            if (t) {
                                if (t instanceof E) return t;
                                if (t[_]) return t[_]()
                            }
                            return t || e || n ? new E(t, e, n) : new E(b)
                        }(t, e, n);
                    if (r ? o.add(r.call(o, this.source)) : o.add(this.source || f.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), f.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                    return o
                }, t.prototype._trySubscribe = function(t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        f.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), ! function(t) {
                            for (; t;) {
                                var e = t,
                                    n = e.closed,
                                    r = e.destination,
                                    o = e.isStopped;
                                if (n || o) return !1;
                                t = r && r instanceof E ? r : null
                            }
                            return !0
                        }(t) ? console.warn(e) : t.error(e)
                    }
                }, t.prototype.forEach = function(t, e) {
                    var n = this;
                    return new(e = I(e))((function(e, r) {
                        var o;
                        o = n.subscribe((function(e) {
                            try {
                                t(e)
                            } catch (t) {
                                r(t), o && o.unsubscribe()
                            }
                        }), r, e)
                    }))
                }, t.prototype._subscribe = function(t) {
                    var e = this.source;
                    return e && e.subscribe(t)
                }, t.prototype[S] = function() {
                    return this
                }, t.prototype.pipe = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return 0 === t.length ? this : O(t)(this)
                }, t.prototype.toPromise = function(t) {
                    var e = this;
                    return new(t = I(t))((function(t, n) {
                        var r;
                        e.subscribe((function(t) {
                            return r = t
                        }), (function(t) {
                            return n(t)
                        }), (function() {
                            return t(r)
                        }))
                    }))
                }, t.create = function(e) {
                    return new t(e)
                }, t
            }();

            function I(t) {
                if (t || (t = f.Promise || Promise), !t) throw new Error("no Promise impl found");
                return t
            }

            function D(t) {
                return t && "function" == typeof t.schedule
            }

            function P(t, e) {
                return function(n) {
                    if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new B(t, e))
                }
            }
            var B = function() {
                    function t(t, e) {
                        this.project = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new C(t, this.project, this.thisArg))
                    }, t
                }(),
                C = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.project = n, o.count = 0, o.thisArg = r || o, o
                    }
                    return h(e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.project.call(this.thisArg, t, this.count++)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.next(e)
                    }, e
                }(E),
                U = function(t) {
                    return function(e) {
                        for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                        e.complete()
                    }
                };

            function A() {
                return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
            }
            var N = A(),
                M = function(t) {
                    return t && "number" == typeof t.length && "function" != typeof t
                };

            function W(t) {
                return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
            }
            var L = function(t) {
                if (t && "function" == typeof t[S]) return r = t,
                    function(t) {
                        var e = r[S]();
                        if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                        return e.subscribe(t)
                    };
                if (M(t)) return U(t);
                if (W(t)) return n = t,
                    function(t) {
                        return n.then((function(e) {
                            t.closed || (t.next(e), t.complete())
                        }), (function(e) {
                            return t.error(e)
                        })).then(null, d), t
                    };
                if (t && "function" == typeof t[N]) return e = t,
                    function(t) {
                        for (var n = e[N]();;) {
                            var r = void 0;
                            try {
                                r = n.next()
                            } catch (e) {
                                return t.error(e), t
                            }
                            if (r.done) {
                                t.complete();
                                break
                            }
                            if (t.next(r.value), t.closed) break
                        }
                        return "function" == typeof n.return && t.add((function() {
                            n.return && n.return()
                        })), t
                    };
                var e, n, r, o = y(t) ? "an invalid object" : "'" + t + "'";
                throw new TypeError("You provided " + o + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
            };

            function k(t, e) {
                return new j((function(n) {
                    var r = new m,
                        o = 0;
                    return r.add(e.schedule((function() {
                        o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete()
                    }))), r
                }))
            }

            function H(t, e) {
                if (null != t) {
                    if (function(t) {
                            return t && "function" == typeof t[S]
                        }(t)) return function(t, e) {
                        return new j((function(n) {
                            var r = new m;
                            return r.add(e.schedule((function() {
                                var o = t[S]();
                                r.add(o.subscribe({
                                    next: function(t) {
                                        r.add(e.schedule((function() {
                                            return n.next(t)
                                        })))
                                    },
                                    error: function(t) {
                                        r.add(e.schedule((function() {
                                            return n.error(t)
                                        })))
                                    },
                                    complete: function() {
                                        r.add(e.schedule((function() {
                                            return n.complete()
                                        })))
                                    }
                                }))
                            }))), r
                        }))
                    }(t, e);
                    if (W(t)) return function(t, e) {
                        return new j((function(n) {
                            var r = new m;
                            return r.add(e.schedule((function() {
                                return t.then((function(t) {
                                    r.add(e.schedule((function() {
                                        n.next(t), r.add(e.schedule((function() {
                                            return n.complete()
                                        })))
                                    })))
                                }), (function(t) {
                                    r.add(e.schedule((function() {
                                        return n.error(t)
                                    })))
                                }))
                            }))), r
                        }))
                    }(t, e);
                    if (M(t)) return k(t, e);
                    if (function(t) {
                            return t && "function" == typeof t[N]
                        }(t) || "string" == typeof t) return function(t, e) {
                        if (!t) throw new Error("Iterable cannot be null");
                        return new j((function(n) {
                            var r, o = new m;
                            return o.add((function() {
                                r && "function" == typeof r.return && r.return()
                            })), o.add(e.schedule((function() {
                                r = t[N](), o.add(e.schedule((function() {
                                    if (!n.closed) {
                                        var t, e;
                                        try {
                                            var o = r.next();
                                            t = o.value, e = o.done
                                        } catch (t) {
                                            return void n.error(t)
                                        }
                                        e ? n.complete() : (n.next(t), this.schedule())
                                    }
                                })))
                            }))), o
                        }))
                    }(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }

            function V(t, e) {
                return e ? H(t, e) : t instanceof j ? t : new j(L(t))
            }
            var F = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.parent = e, n
                    }
                    return h(e, t), e.prototype._next = function(t) {
                        this.parent.notifyNext(t)
                    }, e.prototype._error = function(t) {
                        this.parent.notifyError(t), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.parent.notifyComplete(), this.unsubscribe()
                    }, e
                }(E),
                Y = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return h(e, t), e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e.prototype.notifyError = function(t) {
                        this.destination.error(t)
                    }, e.prototype.notifyComplete = function() {
                        this.destination.complete()
                    }, e
                }(E);

            function R(t, e, n) {
                return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function(r) {
                    return r.pipe(R((function(n, r) {
                        return V(t(n, r)).pipe(P((function(t, o) {
                            return e(n, t, r, o)
                        })))
                    }), n))
                } : ("number" == typeof e && (n = e), function(e) {
                    return e.lift(new q(t, n))
                })
            }
            var q = function() {
                    function t(t, e) {
                        void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new z(t, this.project, this.concurrent))
                    }, t
                }(),
                z = function(t) {
                    function e(e, n, r) {
                        void 0 === r && (r = Number.POSITIVE_INFINITY);
                        var o = t.call(this, e) || this;
                        return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
                    }
                    return h(e, t), e.prototype._next = function(t) {
                        this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                    }, e.prototype._tryNext = function(t) {
                        var e, n = this.index++;
                        try {
                            e = this.project(t, n)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.active++, this._innerSub(e)
                    }, e.prototype._innerSub = function(t) {
                        var e = new F(this),
                            n = this.destination;
                        n.add(e);
                        var r = function(t, e) {
                            if (!e.closed) {
                                if (t instanceof j) return t.subscribe(e);
                                var n;
                                try {
                                    n = L(t)(e)
                                } catch (t) {
                                    e.error(t)
                                }
                                return n
                            }
                        }(t, e);
                        r !== e && n.add(r)
                    }, e.prototype._complete = function() {
                        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                    }, e.prototype.notifyNext = function(t) {
                        this.destination.next(t)
                    }, e.prototype.notifyComplete = function() {
                        var t = this.buffer;
                        this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                    }, e
                }(Y);

            function K(t) {
                return void 0 === t && (t = Number.POSITIVE_INFINITY), R(x, t)
            }

            function $(t, e) {
                return e ? k(t, e) : new j(U(t))
            }

            function G() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = Number.POSITIVE_INFINITY,
                    r = null,
                    o = t[t.length - 1];
                return D(o) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof o && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof j ? t[0] : K(n)($(t, r))
            }
            var J = new j((function(t) {
                return t.complete()
            }));

            function Q(t) {
                return t ? function(t) {
                    return new j((function(e) {
                        return t.schedule((function() {
                            return e.complete()
                        }))
                    }))
                }(t) : J
            }

            function X() {}
            var Z = function() {
                    function t(t, e, n) {
                        this.nextOrObserver = t, this.error = e, this.complete = n
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new tt(t, this.nextOrObserver, this.error, this.complete))
                    }, t
                }(),
                tt = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i._tapNext = X, i._tapError = X, i._tapComplete = X, i._tapError = r || X, i._tapComplete = o || X, l(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, i._tapNext = n.next || X, i._tapError = n.error || X, i._tapComplete = n.complete || X), i
                    }
                    return h(e, t), e.prototype._next = function(t) {
                        try {
                            this._tapNext.call(this._context, t)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        try {
                            this._tapError.call(this._context, t)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.error(t)
                    }, e.prototype._complete = function() {
                        try {
                            this._tapComplete.call(this._context)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        return this.destination.complete()
                    }, e
                }(E),
                et = function() {
                    function t() {
                        return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }(),
                nt = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.subject = e, r.subscriber = n, r.closed = !1, r
                    }
                    return h(e, t), e.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            this.closed = !0;
                            var t = this.subject,
                                e = t.observers;
                            if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                                var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                            }
                        }
                    }, e
                }(m),
                rt = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.destination = e, n
                    }
                    return h(e, t), e
                }(E),
                ot = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
                    }
                    return h(e, t), e.prototype[_] = function() {
                        return new rt(this)
                    }, e.prototype.lift = function(t) {
                        var e = new it(this, this);
                        return e.operator = t, e
                    }, e.prototype.next = function(t) {
                        if (this.closed) throw new et;
                        if (!this.isStopped)
                            for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t)
                    }, e.prototype.error = function(t) {
                        if (this.closed) throw new et;
                        this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                        for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
                        this.observers.length = 0
                    }, e.prototype.complete = function() {
                        if (this.closed) throw new et;
                        this.isStopped = !0;
                        for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                        this.observers.length = 0
                    }, e.prototype.unsubscribe = function() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }, e.prototype._trySubscribe = function(e) {
                        if (this.closed) throw new et;
                        return t.prototype._trySubscribe.call(this, e)
                    }, e.prototype._subscribe = function(t) {
                        if (this.closed) throw new et;
                        return this.hasError ? (t.error(this.thrownError), m.EMPTY) : this.isStopped ? (t.complete(), m.EMPTY) : (this.observers.push(t), new nt(this, t))
                    }, e.prototype.asObservable = function() {
                        var t = new j;
                        return t.source = this, t
                    }, e.create = function(t, e) {
                        return new it(t, e)
                    }, e
                }(j),
                it = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.destination = e, r.source = n, r
                    }
                    return h(e, t), e.prototype.next = function(t) {
                        var e = this.destination;
                        e && e.next && e.next(t)
                    }, e.prototype.error = function(t) {
                        var e = this.destination;
                        e && e.error && this.destination.error(t)
                    }, e.prototype.complete = function() {
                        var t = this.destination;
                        t && t.complete && this.destination.complete()
                    }, e.prototype._subscribe = function(t) {
                        return this.source ? this.source.subscribe(t) : m.EMPTY
                    }, e
                }(ot);

            function st() {
                return function(t) {
                    return t.lift(new ct(t))
                }
            }
            var ct = function() {
                    function t(t) {
                        this.connectable = t
                    }
                    return t.prototype.call = function(t, e) {
                        var n = this.connectable;
                        n._refCount++;
                        var r = new ut(t, n),
                            o = e.subscribe(r);
                        return r.closed || (r.connection = n.connect()), o
                    }, t
                }(),
                ut = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return h(e, t), e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._refCount;
                            if (e <= 0) this.connection = null;
                            else if (t._refCount = e - 1, e > 1) this.connection = null;
                            else {
                                var n = this.connection,
                                    r = t._connection;
                                this.connection = null, !r || n && r !== n || r.unsubscribe()
                            }
                        } else this.connection = null
                    }, e
                }(E),
                at = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
                    }
                    return h(e, t), e.prototype._subscribe = function(t) {
                        return this.getSubject().subscribe(t)
                    }, e.prototype.getSubject = function() {
                        var t = this._subject;
                        return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
                    }, e.prototype.connect = function() {
                        var t = this._connection;
                        return t || (this._isComplete = !1, (t = this._connection = new m).add(this.source.subscribe(new lt(this.getSubject(), this))), t.closed && (this._connection = null, t = m.EMPTY)), t
                    }, e.prototype.refCount = function() {
                        return st()(this)
                    }, e
                }(j),
                ht = function() {
                    var t = at.prototype;
                    return {
                        operator: {
                            value: null
                        },
                        _refCount: {
                            value: 0,
                            writable: !0
                        },
                        _subject: {
                            value: null,
                            writable: !0
                        },
                        _connection: {
                            value: null,
                            writable: !0
                        },
                        _subscribe: {
                            value: t._subscribe
                        },
                        _isComplete: {
                            value: t._isComplete,
                            writable: !0
                        },
                        getSubject: {
                            value: t.getSubject
                        },
                        connect: {
                            value: t.connect
                        },
                        refCount: {
                            value: t.refCount
                        }
                    }
                }(),
                lt = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return h(e, t), e.prototype._error = function(e) {
                        this._unsubscribe(), t.prototype._error.call(this, e)
                    }, e.prototype._complete = function() {
                        this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
                    }, e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._connection;
                            t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                        }
                    }, e
                }(rt);
            var pt = function() {
                function t(t, e) {
                    this.subjectFactory = t, this.selector = e
                }
                return t.prototype.call = function(t, e) {
                    var n = this.selector,
                        r = this.subjectFactory(),
                        o = n(r).subscribe(t);
                    return o.add(e.subscribe(r)), o
                }, t
            }();

            function ft() {
                return new ot
            }

            function dt() {
                return function(t) {
                    return st()((e = ft, function(t) {
                        var r;
                        if (r = "function" == typeof e ? e : function() {
                                return e
                            }, "function" == typeof n) return t.lift(new pt(r, n));
                        var o = Object.create(t, ht);
                        return o.source = t, o.subjectFactory = r, o
                    })(t));
                    var e, n
                }
            }
            var bt = function() {
                function t() {
                    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }();

            function vt(t, e) {
                return function(n) {
                    return n.lift(new yt(t, e))
                }
            }
            var yt = function() {
                    function t(t, e) {
                        this.predicate = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new wt(t, this.predicate, this.thisArg))
                    }, t
                }(),
                wt = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.predicate = n, o.thisArg = r, o.count = 0, o
                    }
                    return h(e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.count++)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        e && this.destination.next(t)
                    }, e
                }(E),
                mt = function() {
                    function t() {
                        return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                    }
                    return t.prototype = Object.create(Error.prototype), t
                }();

            function gt(t) {
                return function(e) {
                    return 0 === t ? Q() : e.lift(new _t(t))
                }
            }
            var _t = function() {
                    function t(t) {
                        if (this.total = t, this.total < 0) throw new mt
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Et(t, this.total))
                    }, t
                }(),
                Et = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.total = n, r.count = 0, r
                    }
                    return h(e, t), e.prototype._next = function(t) {
                        var e = this.total,
                            n = ++this.count;
                        n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
                    }, e
                }(E);

            function Tt(t) {
                return void 0 === t && (t = null),
                    function(e) {
                        return e.lift(new St(t))
                    }
            }
            var St = function() {
                    function t(t) {
                        this.defaultValue = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new xt(t, this.defaultValue))
                    }, t
                }(),
                xt = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.defaultValue = n, r.isEmpty = !0, r
                    }
                    return h(e, t), e.prototype._next = function(t) {
                        this.isEmpty = !1, this.destination.next(t)
                    }, e.prototype._complete = function() {
                        this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                    }, e
                }(E);

            function Ot(t) {
                return void 0 === t && (t = Dt),
                    function(e) {
                        return e.lift(new jt(t))
                    }
            }
            var jt = function() {
                    function t(t) {
                        this.errorFactory = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new It(t, this.errorFactory))
                    }, t
                }(),
                It = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.errorFactory = n, r.hasValue = !1, r
                    }
                    return h(e, t), e.prototype._next = function(t) {
                        this.hasValue = !0, this.destination.next(t)
                    }, e.prototype._complete = function() {
                        if (this.hasValue) return this.destination.complete();
                        var t = void 0;
                        try {
                            t = this.errorFactory()
                        } catch (e) {
                            t = e
                        }
                        this.destination.error(t)
                    }, e
                }(E);

            function Dt() {
                return new bt
            }
            var Pt = function() {
                    function t() {}
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Bt(t))
                    }, t
                }(),
                Bt = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return h(e, t), e.prototype._next = function(t) {}, e
                }(E);
            const Ct = () => {
                    const {
                        bluetooth: t
                    } = navigator;
                    if (void 0 === t) throw new Error("web bluetooth not supported");
                    return t
                },
                Ut = () => j.create(t => {
                    const e = Ct(),
                        n = e => {
                            t.next(e.value)
                        };
                    e.addEventListener("availabilitychanged", n);
                    let r = !1;
                    return e.getAvailability().then(e => {
                        r || t.next(e)
                    }), () => {
                        r = !0, e.removeEventListener("availabilitychanged", n)
                    }
                }),
                At = {},
                Nt = () => ({
                    filters: Object(i.a)().map(t => ({
                        services: [t]
                    }))
                });
            async function Mt(t, e) {
                let n;
                if ("string" == typeof t) {
                    if (At[t]) return Object(u.log)("ble-verbose", "Transport in cache, using that."), At[t];
                    const e = Ct();
                    n = await e.requestDevice(Nt())
                } else n = t;
                n.gatt.connected || (Object(u.log)("ble-verbose", "not connected. connecting..."), await n.gatt.connect());
                const [r, s] = await (async t => {
                    if (!t.gatt) throw new Error("bluetooth gatt not found");
                    const [e] = await t.gatt.getPrimaryServices();
                    if (!e) throw new Error("bluetooth service not found");
                    const n = Object(i.b)(e.uuid);
                    if (!n) throw new Error("bluetooth service infos not found");
                    return [e, n]
                })(n), {
                    deviceModel: c,
                    writeUuid: a,
                    notifyUuid: h
                } = s, [l, p] = await Promise.all([r.getCharacteristic(a), r.getCharacteristic(h)]), f = (y = p, j.create(t => {
                    function e(e) {
                        const n = e.target;
                        n.value && t.next(Buffer.from(n.value.buffer))
                    }
                    return Object(u.log)("ble-verbose", "start monitor " + y.uuid), y.startNotifications().then(() => {
                        y.addEventListener("characteristicvaluechanged", e)
                    }), () => {
                        Object(u.log)("ble-verbose", "end monitor " + y.uuid), y.stopNotifications()
                    }
                })).pipe((d = t => {
                    Object(u.log)("ble-frame", "<= " + t.toString("hex"))
                }, function(t) {
                    return t.lift(new Z(d, b, v))
                }), dt());
                var d, b, v, y;
                const w = f.subscribe(),
                    m = new TransportWebBLE_BluetoothTransport(n, l, f, c);
                if (!n.gatt.connected) throw new o.DisconnectedDevice;
                At[m.id] = m;
                const g = t => {
                    console.log("onDisconnect!", t), delete At[m.id], m.notYetDisconnected = !1, w.unsubscribe(), n.removeEventListener("gattserverdisconnected", g), Object(u.log)("ble-verbose", `BleTransport(${m.id}) disconnected`), m.emit("disconnect", t)
                };
                n.addEventListener("gattserverdisconnected", g);
                let _ = Date.now();
                try {
                    await m.inferMTU()
                } finally {
                    Date.now() - _ < 1e3 && (e = !1), e && (await n.gatt.disconnect(), await new Promise(t => setTimeout(t, 4e3)))
                }
                return e ? Mt(n, !1) : m
            }
            class TransportWebBLE_BluetoothTransport extends r.a {
                static listen(t) {
                    let e;
                    Object(u.log)("ble-verbose", "listen...");
                    return Ct().requestDevice(Nt()).then(async n => {
                        e || (t.next({
                            type: "add",
                            descriptor: n
                        }), t.complete())
                    }, e => {
                        t.error(new o.TransportOpenUserCancelled(e.message))
                    }), {
                        unsubscribe: function() {
                            e = !0
                        }
                    }
                }
                static async open(t) {
                    return Mt(t, !0)
                }
                constructor(t, e, n, r) {
                    super(), this.id = void 0, this.device = void 0, this.mtuSize = 20, this.writeCharacteristic = void 0, this.notifyObservable = void 0, this.notYetDisconnected = !0, this.deviceModel = void 0, this.exchange = t => this.exchangeAtomicImpl(async () => {
                        try {
                            const e = t.toString("hex");
                            Object(u.log)("apdu", "=> " + e);
                            const n = await G(this.notifyObservable.pipe(c.receiveAPDU), Object(s.sendAPDU)(this.write, t, this.mtuSize)).toPromise(),
                                r = n.toString("hex");
                            return Object(u.log)("apdu", "<= " + r), n
                        } catch (t) {
                            throw Object(u.log)("ble-error", "exchange got " + String(t)), this.notYetDisconnected && this.device.gatt.disconnect(), t
                        }
                    }), this.write = async t => {
                        Object(u.log)("ble-frame", "=> " + t.toString("hex")), await this.writeCharacteristic.writeValue(t)
                    }, this.id = t.id, this.device = t, this.writeCharacteristic = e, this.notifyObservable = n, this.deviceModel = r, Object(u.log)("ble-verbose", `BleTransport(${String(this.id)}) new instance`)
                }
                async inferMTU() {
                    let t = 23;
                    if (await this.exchangeAtomicImpl(async () => {
                            try {
                                t = await G(this.notifyObservable.pipe(function(t, e) {
                                    var n = arguments.length >= 2;
                                    return function(r) {
                                        return r.pipe(t ? vt((function(e, n) {
                                            return t(e, n, r)
                                        })) : x, gt(1), n ? Tt(e) : Ot((function() {
                                            return new bt
                                        })))
                                    }
                                }(t => 8 === t.readUInt8(0)), P(t => t.readUInt8(5))), (e = () => V(this.write(Buffer.from([8, 0, 0, 0, 0]))), new j((function(t) {
                                    var n;
                                    try {
                                        n = e()
                                    } catch (e) {
                                        return void t.error(e)
                                    }
                                    return (n ? V(n) : Q()).subscribe(t)
                                }))).pipe((function(t) {
                                    return t.lift(new Pt)
                                }))).toPromise() + 3
                            } catch (t) {
                                throw Object(u.log)("ble-error", "inferMTU got " + String(t)), this.device.gatt.disconnect(), t
                            }
                            var e
                        }), t > 23) {
                        const e = t - 3;
                        Object(u.log)("ble-verbose", `BleTransport(${String(this.id)}) mtu set to ${String(e)}`), this.mtuSize = e
                    }
                    return this.mtuSize
                }
                setScrambleKey() {}
                async close() {
                    this.exchangeBusyPromise && await this.exchangeBusyPromise
                }
            }
            TransportWebBLE_BluetoothTransport.isSupported = () => Promise.resolve().then(Ct).then(() => !0, () => !1), TransportWebBLE_BluetoothTransport.observeAvailability = t => Ut.subscribe(t), TransportWebBLE_BluetoothTransport.list = () => Promise.resolve([]), TransportWebBLE_BluetoothTransport.disconnect = async t => {
                Object(u.log)("ble-verbose", `user disconnect(${t})`);
                const e = At[t];
                e && e.device.gatt.disconnect()
            }
        },
        5391: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return TransportWebUSB_TransportWebUSB
            }));
            var r = n(427),
                o = n(922),
                i = n.n(o),
                s = n(169),
                c = n(86),
                u = n(71);
            const a = [{
                vendorId: s.d
            }];
            async function h() {
                return await navigator.usb.requestDevice({
                    filters: a
                })
            }
            async function l() {
                return (await navigator.usb.getDevices()).filter(t => t.vendorId === s.d)
            }
            class TransportWebUSB_TransportWebUSB extends r.a {
                constructor(t, e) {
                    super(), this.device = void 0, this.deviceModel = void 0, this.channel = Math.floor(65535 * Math.random()), this.packetSize = 64, this.interfaceNumber = void 0, this._disconnectEmitted = !1, this._emitDisconnect = t => {
                        this._disconnectEmitted || (this._disconnectEmitted = !0, this.emit("disconnect", t))
                    }, this.exchange = t => this.exchangeAtomicImpl(async () => {
                        const {
                            channel: e,
                            packetSize: n
                        } = this;
                        Object(c.log)("apdu", "=> " + t.toString("hex"));
                        const r = i()(e, n),
                            o = r.makeBlocks(t);
                        for (let t = 0; t < o.length; t++) await this.device.transferOut(3, o[t]);
                        let s, u;
                        for (; !(s = r.getReducedResult(u));) {
                            const t = await this.device.transferIn(3, n),
                                e = Buffer.from(t.data.buffer);
                            u = r.reduceResponse(u, e)
                        }
                        return Object(c.log)("apdu", "<= " + s.toString("hex")), s
                    }).catch(t => {
                        if (t && t.message && t.message.includes("disconnected")) throw this._emitDisconnect(t), new u.DisconnectedDeviceDuringOperation(t.message);
                        throw t
                    }), this.device = t, this.interfaceNumber = e, this.deviceModel = Object(s.c)(t.productId)
                }
                static async request() {
                    const t = await h();
                    return TransportWebUSB_TransportWebUSB.open(t)
                }
                static async openConnected() {
                    const t = await l();
                    return 0 === t.length ? null : TransportWebUSB_TransportWebUSB.open(t[0])
                }
                static async open(t) {
                    await t.open(), null === t.configuration && await t.selectConfiguration(1), await p(t);
                    const e = t.configurations[0].interfaces.find(({
                        alternates: t
                    }) => t.some(t => 255 === t.interfaceClass));
                    if (!e) throw new u.TransportInterfaceNotAvailable("No WebUSB interface found for your Ledger device. Please upgrade firmware or contact techsupport.");
                    const n = e.interfaceNumber;
                    try {
                        await t.claimInterface(n)
                    } catch (e) {
                        throw await t.close(), new u.TransportInterfaceNotAvailable(e.message)
                    }
                    const r = new TransportWebUSB_TransportWebUSB(t, n),
                        o = e => {
                            t === e.device && (navigator.usb.removeEventListener("disconnect", o), r._emitDisconnect(new u.DisconnectedDevice))
                        };
                    return navigator.usb.addEventListener("disconnect", o), r
                }
                async close() {
                    await this.exchangeBusyPromise, await this.device.releaseInterface(this.interfaceNumber), await p(this.device), await this.device.close()
                }
                setScrambleKey() {}
            }
            async function p(t) {
                try {
                    await t.reset()
                } catch (t) {
                    console.warn(t)
                }
            }
            TransportWebUSB_TransportWebUSB.isSupported = () => Promise.resolve(!!navigator && !!navigator.usb && "function" == typeof navigator.usb.getDevices), TransportWebUSB_TransportWebUSB.list = l, TransportWebUSB_TransportWebUSB.listen = t => {
                let e = !1;
                return async function() {
                    const t = await l();
                    return t.length > 0 ? t[0] : h()
                }().then(n => {
                    if (!e) {
                        const e = Object(s.c)(n.productId);
                        t.next({
                            type: "add",
                            descriptor: n,
                            deviceModel: e
                        }), t.complete()
                    }
                }, e => {
                    window.DOMException && e instanceof window.DOMException && 18 === e.code ? t.error(new u.TransportWebUSBGestureRequired(e.message)) : t.error(new u.TransportOpenUserCancelled(e.message))
                }), {
                    unsubscribe: function() {
                        e = !0
                    }
                }
            }
        },
        86: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "log", (function() {
                return i
            })), n.d(e, "listen", (function() {
                return s
            }));
            let r = 0;
            const o = [],
                i = (t, e, n) => {
                    const i = {
                        type: t,
                        id: String(++r),
                        date: new Date
                    };
                    e && (i.message = e), n && (i.data = n),
                        function(t) {
                            for (let e = 0; e < o.length; e++) try {
                                o[e](t)
                            } catch (t) {
                                console.error(t)
                            }
                        }(i)
                },
                s = t => (o.push(t), () => {
                    const e = o.indexOf(t); - 1 !== e && (o[e] = o[o.length - 1], o.pop())
                });
            "undefined" != typeof window && (window.__ledgerLogsListen = s)
        }
    }
]);