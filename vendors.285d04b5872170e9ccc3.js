/*! For license information please see vendors.285d04b5872170e9ccc3.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [199], {
        1409: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(2335),
                o = n(507),
                i = n(628),
                a = n(3678),
                s = n(3679),
                c = n(1873);
            r.__exportStar(n(471), t), r.__exportStar(n(472), t), r.__exportStar(n(1873), t);
            var u = function(e, t) {
                this.provider = t || new o.HTTPProvider(e), this.wallet = new i.Wallet(this.provider), this.blockchain = new s.Blockchain(this.provider, this.wallet), this.network = new s.Network(this.provider, this.wallet), this.contracts = new a.Contracts(this.provider, this.wallet), this.transactions = new i.TransactionFactory(this.provider, this.wallet), this.subscriptionBuilder = new c.SubscriptionBuilder
            };
            t.Zilliqa = u
        },
        1873: function(e, t, n) {
            ! function(e, t) {
                "use strict";
                var n, r, o, i, a, s = function(e, t) {
                    return (s = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                };

                function c(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    s(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }

                function u(e, t, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            e.done ? o(e.value) : new n((function(t) {
                                t(e.value)
                            })).then(a, s)
                        }
                        c((r = r.apply(e, t || [])).next())
                    }))
                }

                function l(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                }

                function f(e) {
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
                }

                function p(e) {
                    return e = e || Object.create(null), {
                        on: function(t, n) {
                            (e[t] || (e[t] = [])).push(n)
                        },
                        off: function(t, n) {
                            e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1)
                        },
                        emit: function(t, n) {
                            (e[t] || []).slice().map((function(e) {
                                e(n)
                            })), (e["*"] || []).slice().map((function(e) {
                                e(t, n)
                            }))
                        }
                    }
                }(a = e.SocketConnect || (e.SocketConnect = {})).READY = "ready", a.CONNECT = "connect", a.ERROR = "error", a.CLOSE = "close", a.RECONNECT = "reconnect", (i = e.SocketState || (e.SocketState = {})).SOCKET_CONNECT = "socket_connect", i.SOCKET_MESSAGE = "socket_message", i.SOCKET_READY = "socket_ready", i.SOCKET_CLOSE = "socket_close", i.SOCKET_ERROR = "socket_error", (o = e.MessageType || (e.MessageType = {})).NEW_BLOCK = "NewBlock", o.EVENT_LOG = "EventLog", o.NOTIFICATION = "Notification", o.UNSUBSCRIBE = "Unsubscribe", (r = e.QueryParam || (e.QueryParam = {})).NEW_BLOCK = "NewBlock", r.EVENT_LOG = "EventLog", r.UNSUBSCRIBE = "Unsubscribe", (n = e.StatusType || (e.StatusType = {})).SUBSCRIBE_NEW_BLOCK = "SubscribeNewBlock", n.SUBSCRIBE_EVENT_LOG = "SubscribeEventLog";
                var d = function() {
                        function n(e, t) {
                            this.handlers = {}, this.url = e, this.options = t, this.emitter = new p(this.handlers), this.websocket = n.NewWebSocket(e, t), this.subscriptions = {}, this.registerEventListeners()
                        }
                        return n.NewWebSocket = function(e, n) {
                            if ("undefined" != typeof window && window.WebSocket) return new WebSocket(e, void 0 !== n ? n.protocol : []);
                            var r = void 0 !== n ? n.headers || {} : void 0,
                                o = new URL(e);
                            if (void 0 !== r && !r.authorization && o.username && o.password) {
                                var i = Buffer.from(o.username + ":" + o.password).toString("base64");
                                r.authorization = "Basic " + i
                            }
                            return new t.w3cwebsocket(e, void 0 !== n ? n.protocol : void 0, void 0, r, void 0, void 0 !== n ? n.clientConfig : void 0)
                        }, n.prototype.registerEventListeners = function() {
                            this.websocket.onopen = this.onConnect.bind(this), this.websocket.onclose = this.onClose.bind(this), this.websocket.onmessage = this.onMessage.bind(this), this.websocket.onerror = this.onError.bind(this)
                        }, n.prototype.removeAllSocketListeners = function() {
                            this.removeEventListener(e.SocketState.SOCKET_MESSAGE), this.removeEventListener(e.SocketState.SOCKET_READY), this.removeEventListener(e.SocketState.SOCKET_CLOSE), this.removeEventListener(e.SocketState.SOCKET_ERROR), this.removeEventListener(e.SocketState.SOCKET_CONNECT)
                        }, n.prototype.removeEventListener = function(e, t) {
                            if (e) return t ? this.emitter.off(e, t) : void delete this.handlers[e];
                            this.handlers = {}
                        }, n.prototype.reconnect = function() {
                            var e = this;
                            setTimeout((function() {
                                e.removeAllSocketListeners(), e.websocket = n.NewWebSocket(e.url, e.options), e.registerEventListeners()
                            }), 5e3)
                        }, n.prototype.onClose = function(t) {
                            return u(this, void 0, void 0, (function() {
                                return l(this, (function(n) {
                                    return null === this.subscriptions || t.wasClean ? this.websocket.CONNECTING ? (this.emitter.emit(e.SocketConnect.CLOSE, t), this.websocket.close(), [2]) : [2] : (this.emitter.emit(e.SocketConnect.RECONNECT, t), this.reconnect(), [2])
                                }))
                            }))
                        }, n.prototype.onError = function(t) {
                            this.emitter.emit(e.SocketConnect.ERROR, t), this.websocket.CONNECTING && this.websocket.close()
                        }, n.prototype.onConnect = function() {
                            return u(this, void 0, void 0, (function() {
                                var t, n, r, o, i, a, s, c, u;
                                return l(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            if (this.subscriptions || (this.subscriptions = {}), !((t = Object.keys(this.subscriptions)).length > 0)) return [3, 8];
                                            l.label = 1;
                                        case 1:
                                            l.trys.push([1, 6, 7, 8]), n = f(t), r = n.next(), l.label = 2;
                                        case 2:
                                            return r.done ? [3, 5] : (o = r.value, i = o, a = this.subscriptions[o].parameters, delete this.subscriptions[i], [4, this.subscribe(a)]);
                                        case 3:
                                            l.sent(), l.label = 4;
                                        case 4:
                                            return r = n.next(), [3, 2];
                                        case 5:
                                            return [3, 8];
                                        case 6:
                                            return s = l.sent(), c = {
                                                error: s
                                            }, [3, 8];
                                        case 7:
                                            try {
                                                r && !r.done && (u = n.return) && u.call(n)
                                            } finally {
                                                if (c) throw c.error
                                            }
                                            return [7];
                                        case 8:
                                            return this.emitter.emit(e.SocketState.SOCKET_CONNECT), this.emitter.emit(e.SocketConnect.CONNECT), [2]
                                    }
                                }))
                            }))
                        }, n.prototype.onMessage = function(t) {
                            var n, r;
                            if (!t.data) throw new Error("message data is empty");
                            var o = JSON.parse(t.data);
                            if (o.type === e.MessageType.NOTIFICATION) {
                                this.emitter.emit(e.SocketState.SOCKET_MESSAGE, o);
                                try {
                                    for (var i = f(o.values), a = i.next(); !a.done; a = i.next()) {
                                        var s = a.value;
                                        if (s.query === e.MessageType.NEW_BLOCK) this.emitter.emit(e.MessageType.NEW_BLOCK, s);
                                        else if (s.query === e.MessageType.EVENT_LOG) this.emitter.emit(e.MessageType.EVENT_LOG, s);
                                        else {
                                            if (s.query !== e.MessageType.UNSUBSCRIBE) throw new Error("unsupported value type");
                                            this.emitter.emit(e.MessageType.UNSUBSCRIBE, s)
                                        }
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (r = i.return) && r.call(i)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            } else if (o.query === e.QueryParam.NEW_BLOCK) this.subscriptions[o.query] = {
                                id: o.query,
                                parameters: o
                            }, this.emitter.emit(e.StatusType.SUBSCRIBE_NEW_BLOCK, o), this.emitter.emit(e.SocketConnect.RECONNECT);
                            else if (o.query === e.QueryParam.EVENT_LOG) this.subscriptions[o.query] = {
                                id: o.query,
                                parameters: o
                            }, this.emitter.emit(e.StatusType.SUBSCRIBE_EVENT_LOG, o), this.emitter.emit(e.SocketConnect.RECONNECT);
                            else {
                                if (o.query !== e.QueryParam.UNSUBSCRIBE) throw new Error("unsupported message type");
                                this.emitter.emit(e.MessageType.UNSUBSCRIBE, o)
                            }
                        }, n.prototype.addEventListener = function(e, t) {
                            this.emitter.on(e, t)
                        }, n.prototype.connecting = function() {
                            return this.websocket.readyState === this.websocket.CONNECTING
                        }, n.prototype.send = function(t) {
                            var n = this;
                            return new Promise((function(r, o) {
                                if (!n.connecting()) {
                                    try {
                                        n.websocket.send(JSON.stringify(t))
                                    } catch (e) {
                                        throw e
                                    }
                                    var i = void 0;
                                    i = t.query === e.QueryParam.NEW_BLOCK ? e.StatusType.SUBSCRIBE_NEW_BLOCK : t.query === e.QueryParam.EVENT_LOG ? e.StatusType.SUBSCRIBE_EVENT_LOG : t.query, n.emitter.on(i, (function(e) {
                                        r(e)
                                    })), n.emitter.on(e.SocketConnect.ERROR, o)
                                }
                                var a = function() {
                                    n.send(t).then(r).catch(o)
                                };
                                n.emitter.on(e.SocketConnect.CONNECT, a), n.emitter.on(e.SocketConnect.RECONNECT, (function() {
                                    n.emitter.off(e.SocketConnect.CONNECT, a)
                                }))
                            }))
                        }, n.prototype.subscribe = function(e) {
                            return u(this, void 0, void 0, (function() {
                                return l(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.send(e)];
                                        case 1:
                                            return [2, t.sent().query === e.query]
                                    }
                                }))
                            }))
                        }, n.prototype.unsubscribe = function(e) {
                            return u(this, void 0, void 0, (function() {
                                var t, n;
                                return l(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this.send(e)];
                                        case 1:
                                            return t = r.sent(), (n = t.query === e.query) && (this.subscriptions[e.query] = null), [2, n]
                                    }
                                }))
                            }))
                        }, n
                    }(),
                    y = function(t) {
                        function n(e, n, r) {
                            var o = t.call(this, n, r) || this;
                            return o.subject = e, o
                        }
                        return c(n, t), n.prototype.start = function() {
                            return u(this, void 0, void 0, (function() {
                                return l(this, (function(e) {
                                    return [2, t.prototype.subscribe.call(this, this.subject)]
                                }))
                            }))
                        }, n.prototype.stop = function() {
                            return u(this, void 0, void 0, (function() {
                                var n;
                                return l(this, (function(r) {
                                    return n = this.subject.query === e.QueryParam.NEW_BLOCK ? {
                                        query: e.QueryParam.UNSUBSCRIBE,
                                        type: e.QueryParam.NEW_BLOCK
                                    } : {
                                        query: e.QueryParam.UNSUBSCRIBE,
                                        type: e.QueryParam.EVENT_LOG
                                    }, [2, t.prototype.unsubscribe.call(this, n)]
                                }))
                            }))
                        }, n
                    }(d),
                    g = function(t) {
                        function n(n, r) {
                            return t.call(this, {
                                query: e.QueryParam.NEW_BLOCK
                            }, n, r) || this
                        }
                        return c(n, t), n
                    }(y),
                    h = function(t) {
                        function n(n, r) {
                            var o = t.call(this, {
                                query: e.QueryParam.EVENT_LOG
                            }, n, r) || this;
                            return o.subject = {
                                query: "EventLog",
                                addresses: void 0 !== r ? r.addresses : []
                            }, o
                        }
                        return c(n, t), n
                    }(y),
                    b = function() {
                        function e() {}
                        return e.prototype.buildNewBlockSubscriptions = function(e, t) {
                            return new g(e, t)
                        }, e.prototype.buildEventLogSubscriptions = function(e, t) {
                            return new h(e, t)
                        }, e
                    }();
                e.NewTxBlockSubscription = g, e.Subscription = y, e.WebSocketProvider = d, e.NewEventSubscription = h, e.SubscriptionBuilder = b, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n(1847))
        },
        3664: function(e, t, n) {
            "use strict";
            var r, o = n(8),
                i = o.Reader,
                a = o.Writer,
                s = o.util,
                c = o.roots.default || (o.roots.default = {});
            c.ZilliqaMessage = ((r = {}).ByteArray = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.data = s.newBuffer([]), e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), t.uint32(10).bytes(e.data), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof i || (e = i.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new c.ZilliqaMessage.ByteArray; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.data = e.bytes();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    if (!r.hasOwnProperty("data")) throw s.ProtocolError("missing required 'data'", {
                        instance: r
                    });
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof i || (e = new i(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    return "object" != typeof e || null === e ? "object expected" : e.data && "number" == typeof e.data.length || s.isString(e.data) ? null : "data: buffer expected"
                }, e.fromObject = function(e) {
                    if (e instanceof c.ZilliqaMessage.ByteArray) return e;
                    var t = new c.ZilliqaMessage.ByteArray;
                    return null != e.data && ("string" == typeof e.data ? s.base64.decode(e.data, t.data = s.newBuffer(s.base64.length(e.data)), 0) : e.data.length && (t.data = e.data)), t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var n = {};
                    return t.defaults && (t.bytes === String ? n.data = "" : (n.data = [], t.bytes !== Array && (n.data = s.newBuffer(n.data)))), null != e.data && e.hasOwnProperty("data") && (n.data = t.bytes === String ? s.base64.encode(e.data, 0, e.data.length) : t.bytes === Array ? Array.prototype.slice.call(e.data) : e.data), n
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, o.util.toJSONOptions)
                }, e
            }(), r.ProtoTransactionCoreInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.version = 0, e.prototype.nonce = s.Long ? s.Long.fromBits(0, 0, !0) : 0, e.prototype.toaddr = s.newBuffer([]), e.prototype.senderpubkey = null, e.prototype.amount = null, e.prototype.gasprice = null, e.prototype.gaslimit = s.Long ? s.Long.fromBits(0, 0, !0) : 0, e.prototype.code = s.newBuffer([]), e.prototype.data = s.newBuffer([]), e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(8).uint32(e.version), null != e.nonce && Object.hasOwnProperty.call(e, "nonce") && t.uint32(16).uint64(e.nonce), null != e.toaddr && Object.hasOwnProperty.call(e, "toaddr") && t.uint32(26).bytes(e.toaddr), null != e.senderpubkey && Object.hasOwnProperty.call(e, "senderpubkey") && c.ZilliqaMessage.ByteArray.encode(e.senderpubkey, t.uint32(34).fork()).ldelim(), null != e.amount && Object.hasOwnProperty.call(e, "amount") && c.ZilliqaMessage.ByteArray.encode(e.amount, t.uint32(42).fork()).ldelim(), null != e.gasprice && Object.hasOwnProperty.call(e, "gasprice") && c.ZilliqaMessage.ByteArray.encode(e.gasprice, t.uint32(50).fork()).ldelim(), null != e.gaslimit && Object.hasOwnProperty.call(e, "gaslimit") && t.uint32(56).uint64(e.gaslimit), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(66).bytes(e.code), null != e.data && Object.hasOwnProperty.call(e, "data") && t.uint32(74).bytes(e.data), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof i || (e = i.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new c.ZilliqaMessage.ProtoTransactionCoreInfo; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.version = e.uint32();
                                break;
                            case 2:
                                r.nonce = e.uint64();
                                break;
                            case 3:
                                r.toaddr = e.bytes();
                                break;
                            case 4:
                                r.senderpubkey = c.ZilliqaMessage.ByteArray.decode(e, e.uint32());
                                break;
                            case 5:
                                r.amount = c.ZilliqaMessage.ByteArray.decode(e, e.uint32());
                                break;
                            case 6:
                                r.gasprice = c.ZilliqaMessage.ByteArray.decode(e, e.uint32());
                                break;
                            case 7:
                                r.gaslimit = e.uint64();
                                break;
                            case 8:
                                r.code = e.bytes();
                                break;
                            case 9:
                                r.data = e.bytes();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof i || (e = new i(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    return "object" != typeof e || null === e ? "object expected" : null != e.version && e.hasOwnProperty("version") && !s.isInteger(e.version) ? "version: integer expected" : null != e.nonce && e.hasOwnProperty("nonce") && !(s.isInteger(e.nonce) || e.nonce && s.isInteger(e.nonce.low) && s.isInteger(e.nonce.high)) ? "nonce: integer|Long expected" : null != e.toaddr && e.hasOwnProperty("toaddr") && !(e.toaddr && "number" == typeof e.toaddr.length || s.isString(e.toaddr)) ? "toaddr: buffer expected" : null != e.senderpubkey && e.hasOwnProperty("senderpubkey") && (t = c.ZilliqaMessage.ByteArray.verify(e.senderpubkey)) ? "senderpubkey." + t : null != e.amount && e.hasOwnProperty("amount") && (t = c.ZilliqaMessage.ByteArray.verify(e.amount)) ? "amount." + t : null != e.gasprice && e.hasOwnProperty("gasprice") && (t = c.ZilliqaMessage.ByteArray.verify(e.gasprice)) ? "gasprice." + t : null != e.gaslimit && e.hasOwnProperty("gaslimit") && !(s.isInteger(e.gaslimit) || e.gaslimit && s.isInteger(e.gaslimit.low) && s.isInteger(e.gaslimit.high)) ? "gaslimit: integer|Long expected" : null != e.code && e.hasOwnProperty("code") && !(e.code && "number" == typeof e.code.length || s.isString(e.code)) ? "code: buffer expected" : null != e.data && e.hasOwnProperty("data") && !(e.data && "number" == typeof e.data.length || s.isString(e.data)) ? "data: buffer expected" : null;
                    var t
                }, e.fromObject = function(e) {
                    if (e instanceof c.ZilliqaMessage.ProtoTransactionCoreInfo) return e;
                    var t = new c.ZilliqaMessage.ProtoTransactionCoreInfo;
                    if (null != e.version && (t.version = e.version >>> 0), null != e.nonce && (s.Long ? (t.nonce = s.Long.fromValue(e.nonce)).unsigned = !0 : "string" == typeof e.nonce ? t.nonce = parseInt(e.nonce, 10) : "number" == typeof e.nonce ? t.nonce = e.nonce : "object" == typeof e.nonce && (t.nonce = new s.LongBits(e.nonce.low >>> 0, e.nonce.high >>> 0).toNumber(!0))), null != e.toaddr && ("string" == typeof e.toaddr ? s.base64.decode(e.toaddr, t.toaddr = s.newBuffer(s.base64.length(e.toaddr)), 0) : e.toaddr.length && (t.toaddr = e.toaddr)), null != e.senderpubkey) {
                        if ("object" != typeof e.senderpubkey) throw TypeError(".ZilliqaMessage.ProtoTransactionCoreInfo.senderpubkey: object expected");
                        t.senderpubkey = c.ZilliqaMessage.ByteArray.fromObject(e.senderpubkey)
                    }
                    if (null != e.amount) {
                        if ("object" != typeof e.amount) throw TypeError(".ZilliqaMessage.ProtoTransactionCoreInfo.amount: object expected");
                        t.amount = c.ZilliqaMessage.ByteArray.fromObject(e.amount)
                    }
                    if (null != e.gasprice) {
                        if ("object" != typeof e.gasprice) throw TypeError(".ZilliqaMessage.ProtoTransactionCoreInfo.gasprice: object expected");
                        t.gasprice = c.ZilliqaMessage.ByteArray.fromObject(e.gasprice)
                    }
                    return null != e.gaslimit && (s.Long ? (t.gaslimit = s.Long.fromValue(e.gaslimit)).unsigned = !0 : "string" == typeof e.gaslimit ? t.gaslimit = parseInt(e.gaslimit, 10) : "number" == typeof e.gaslimit ? t.gaslimit = e.gaslimit : "object" == typeof e.gaslimit && (t.gaslimit = new s.LongBits(e.gaslimit.low >>> 0, e.gaslimit.high >>> 0).toNumber(!0))), null != e.code && ("string" == typeof e.code ? s.base64.decode(e.code, t.code = s.newBuffer(s.base64.length(e.code)), 0) : e.code.length && (t.code = e.code)), null != e.data && ("string" == typeof e.data ? s.base64.decode(e.data, t.data = s.newBuffer(s.base64.length(e.data)), 0) : e.data.length && (t.data = e.data)), t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var n = {};
                    if (t.defaults) {
                        if (n.version = 0, s.Long) {
                            var r = new s.Long(0, 0, !0);
                            n.nonce = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r
                        } else n.nonce = t.longs === String ? "0" : 0;
                        t.bytes === String ? n.toaddr = "" : (n.toaddr = [], t.bytes !== Array && (n.toaddr = s.newBuffer(n.toaddr))), n.senderpubkey = null, n.amount = null, n.gasprice = null, s.Long ? (r = new s.Long(0, 0, !0), n.gaslimit = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r) : n.gaslimit = t.longs === String ? "0" : 0, t.bytes === String ? n.code = "" : (n.code = [], t.bytes !== Array && (n.code = s.newBuffer(n.code))), t.bytes === String ? n.data = "" : (n.data = [], t.bytes !== Array && (n.data = s.newBuffer(n.data)))
                    }
                    return null != e.version && e.hasOwnProperty("version") && (n.version = e.version), null != e.nonce && e.hasOwnProperty("nonce") && ("number" == typeof e.nonce ? n.nonce = t.longs === String ? String(e.nonce) : e.nonce : n.nonce = t.longs === String ? s.Long.prototype.toString.call(e.nonce) : t.longs === Number ? new s.LongBits(e.nonce.low >>> 0, e.nonce.high >>> 0).toNumber(!0) : e.nonce), null != e.toaddr && e.hasOwnProperty("toaddr") && (n.toaddr = t.bytes === String ? s.base64.encode(e.toaddr, 0, e.toaddr.length) : t.bytes === Array ? Array.prototype.slice.call(e.toaddr) : e.toaddr), null != e.senderpubkey && e.hasOwnProperty("senderpubkey") && (n.senderpubkey = c.ZilliqaMessage.ByteArray.toObject(e.senderpubkey, t)), null != e.amount && e.hasOwnProperty("amount") && (n.amount = c.ZilliqaMessage.ByteArray.toObject(e.amount, t)), null != e.gasprice && e.hasOwnProperty("gasprice") && (n.gasprice = c.ZilliqaMessage.ByteArray.toObject(e.gasprice, t)), null != e.gaslimit && e.hasOwnProperty("gaslimit") && ("number" == typeof e.gaslimit ? n.gaslimit = t.longs === String ? String(e.gaslimit) : e.gaslimit : n.gaslimit = t.longs === String ? s.Long.prototype.toString.call(e.gaslimit) : t.longs === Number ? new s.LongBits(e.gaslimit.low >>> 0, e.gaslimit.high >>> 0).toNumber(!0) : e.gaslimit), null != e.code && e.hasOwnProperty("code") && (n.code = t.bytes === String ? s.base64.encode(e.code, 0, e.code.length) : t.bytes === Array ? Array.prototype.slice.call(e.code) : e.code), null != e.data && e.hasOwnProperty("data") && (n.data = t.bytes === String ? s.base64.encode(e.data, 0, e.data.length) : t.bytes === Array ? Array.prototype.slice.call(e.data) : e.data), n
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, o.util.toJSONOptions)
                }, e
            }(), r.ProtoTransaction = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.tranid = s.newBuffer([]), e.prototype.info = null, e.prototype.signature = null, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.tranid && Object.hasOwnProperty.call(e, "tranid") && t.uint32(10).bytes(e.tranid), null != e.info && Object.hasOwnProperty.call(e, "info") && c.ZilliqaMessage.ProtoTransactionCoreInfo.encode(e.info, t.uint32(18).fork()).ldelim(), null != e.signature && Object.hasOwnProperty.call(e, "signature") && c.ZilliqaMessage.ByteArray.encode(e.signature, t.uint32(26).fork()).ldelim(), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof i || (e = i.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new c.ZilliqaMessage.ProtoTransaction; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.tranid = e.bytes();
                                break;
                            case 2:
                                r.info = c.ZilliqaMessage.ProtoTransactionCoreInfo.decode(e, e.uint32());
                                break;
                            case 3:
                                r.signature = c.ZilliqaMessage.ByteArray.decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof i || (e = new i(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    return "object" != typeof e || null === e ? "object expected" : null != e.tranid && e.hasOwnProperty("tranid") && !(e.tranid && "number" == typeof e.tranid.length || s.isString(e.tranid)) ? "tranid: buffer expected" : null != e.info && e.hasOwnProperty("info") && (t = c.ZilliqaMessage.ProtoTransactionCoreInfo.verify(e.info)) ? "info." + t : null != e.signature && e.hasOwnProperty("signature") && (t = c.ZilliqaMessage.ByteArray.verify(e.signature)) ? "signature." + t : null;
                    var t
                }, e.fromObject = function(e) {
                    if (e instanceof c.ZilliqaMessage.ProtoTransaction) return e;
                    var t = new c.ZilliqaMessage.ProtoTransaction;
                    if (null != e.tranid && ("string" == typeof e.tranid ? s.base64.decode(e.tranid, t.tranid = s.newBuffer(s.base64.length(e.tranid)), 0) : e.tranid.length && (t.tranid = e.tranid)), null != e.info) {
                        if ("object" != typeof e.info) throw TypeError(".ZilliqaMessage.ProtoTransaction.info: object expected");
                        t.info = c.ZilliqaMessage.ProtoTransactionCoreInfo.fromObject(e.info)
                    }
                    if (null != e.signature) {
                        if ("object" != typeof e.signature) throw TypeError(".ZilliqaMessage.ProtoTransaction.signature: object expected");
                        t.signature = c.ZilliqaMessage.ByteArray.fromObject(e.signature)
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var n = {};
                    return t.defaults && (t.bytes === String ? n.tranid = "" : (n.tranid = [], t.bytes !== Array && (n.tranid = s.newBuffer(n.tranid))), n.info = null, n.signature = null), null != e.tranid && e.hasOwnProperty("tranid") && (n.tranid = t.bytes === String ? s.base64.encode(e.tranid, 0, e.tranid.length) : t.bytes === Array ? Array.prototype.slice.call(e.tranid) : e.tranid), null != e.info && e.hasOwnProperty("info") && (n.info = c.ZilliqaMessage.ProtoTransactionCoreInfo.toObject(e.info, t)), null != e.signature && e.hasOwnProperty("signature") && (n.signature = c.ZilliqaMessage.ByteArray.toObject(e.signature, t)), n
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, o.util.toJSONOptions)
                }, e
            }(), r.ProtoTransactionReceipt = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.receipt = s.newBuffer([]), e.prototype.cumgas = s.Long ? s.Long.fromBits(0, 0, !0) : 0, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.receipt && Object.hasOwnProperty.call(e, "receipt") && t.uint32(10).bytes(e.receipt), null != e.cumgas && Object.hasOwnProperty.call(e, "cumgas") && t.uint32(16).uint64(e.cumgas), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof i || (e = i.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new c.ZilliqaMessage.ProtoTransactionReceipt; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.receipt = e.bytes();
                                break;
                            case 2:
                                r.cumgas = e.uint64();
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof i || (e = new i(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    return "object" != typeof e || null === e ? "object expected" : null != e.receipt && e.hasOwnProperty("receipt") && !(e.receipt && "number" == typeof e.receipt.length || s.isString(e.receipt)) ? "receipt: buffer expected" : null != e.cumgas && e.hasOwnProperty("cumgas") && !(s.isInteger(e.cumgas) || e.cumgas && s.isInteger(e.cumgas.low) && s.isInteger(e.cumgas.high)) ? "cumgas: integer|Long expected" : null
                }, e.fromObject = function(e) {
                    if (e instanceof c.ZilliqaMessage.ProtoTransactionReceipt) return e;
                    var t = new c.ZilliqaMessage.ProtoTransactionReceipt;
                    return null != e.receipt && ("string" == typeof e.receipt ? s.base64.decode(e.receipt, t.receipt = s.newBuffer(s.base64.length(e.receipt)), 0) : e.receipt.length && (t.receipt = e.receipt)), null != e.cumgas && (s.Long ? (t.cumgas = s.Long.fromValue(e.cumgas)).unsigned = !0 : "string" == typeof e.cumgas ? t.cumgas = parseInt(e.cumgas, 10) : "number" == typeof e.cumgas ? t.cumgas = e.cumgas : "object" == typeof e.cumgas && (t.cumgas = new s.LongBits(e.cumgas.low >>> 0, e.cumgas.high >>> 0).toNumber(!0))), t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var n = {};
                    if (t.defaults)
                        if (t.bytes === String ? n.receipt = "" : (n.receipt = [], t.bytes !== Array && (n.receipt = s.newBuffer(n.receipt))), s.Long) {
                            var r = new s.Long(0, 0, !0);
                            n.cumgas = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r
                        } else n.cumgas = t.longs === String ? "0" : 0;
                    return null != e.receipt && e.hasOwnProperty("receipt") && (n.receipt = t.bytes === String ? s.base64.encode(e.receipt, 0, e.receipt.length) : t.bytes === Array ? Array.prototype.slice.call(e.receipt) : e.receipt), null != e.cumgas && e.hasOwnProperty("cumgas") && ("number" == typeof e.cumgas ? n.cumgas = t.longs === String ? String(e.cumgas) : e.cumgas : n.cumgas = t.longs === String ? s.Long.prototype.toString.call(e.cumgas) : t.longs === Number ? new s.LongBits(e.cumgas.low >>> 0, e.cumgas.high >>> 0).toNumber(!0) : e.cumgas), n
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, o.util.toJSONOptions)
                }, e
            }(), r.ProtoTransactionWithReceipt = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.transaction = null, e.prototype.receipt = null, e.create = function(t) {
                    return new e(t)
                }, e.encode = function(e, t) {
                    return t || (t = a.create()), null != e.transaction && Object.hasOwnProperty.call(e, "transaction") && c.ZilliqaMessage.ProtoTransaction.encode(e.transaction, t.uint32(10).fork()).ldelim(), null != e.receipt && Object.hasOwnProperty.call(e, "receipt") && c.ZilliqaMessage.ProtoTransactionReceipt.encode(e.receipt, t.uint32(18).fork()).ldelim(), t
                }, e.encodeDelimited = function(e, t) {
                    return this.encode(e, t).ldelim()
                }, e.decode = function(e, t) {
                    e instanceof i || (e = i.create(e));
                    for (var n = void 0 === t ? e.len : e.pos + t, r = new c.ZilliqaMessage.ProtoTransactionWithReceipt; e.pos < n;) {
                        var o = e.uint32();
                        switch (o >>> 3) {
                            case 1:
                                r.transaction = c.ZilliqaMessage.ProtoTransaction.decode(e, e.uint32());
                                break;
                            case 2:
                                r.receipt = c.ZilliqaMessage.ProtoTransactionReceipt.decode(e, e.uint32());
                                break;
                            default:
                                e.skipType(7 & o)
                        }
                    }
                    return r
                }, e.decodeDelimited = function(e) {
                    return e instanceof i || (e = new i(e)), this.decode(e, e.uint32())
                }, e.verify = function(e) {
                    return "object" != typeof e || null === e ? "object expected" : null != e.transaction && e.hasOwnProperty("transaction") && (t = c.ZilliqaMessage.ProtoTransaction.verify(e.transaction)) ? "transaction." + t : null != e.receipt && e.hasOwnProperty("receipt") && (t = c.ZilliqaMessage.ProtoTransactionReceipt.verify(e.receipt)) ? "receipt." + t : null;
                    var t
                }, e.fromObject = function(e) {
                    if (e instanceof c.ZilliqaMessage.ProtoTransactionWithReceipt) return e;
                    var t = new c.ZilliqaMessage.ProtoTransactionWithReceipt;
                    if (null != e.transaction) {
                        if ("object" != typeof e.transaction) throw TypeError(".ZilliqaMessage.ProtoTransactionWithReceipt.transaction: object expected");
                        t.transaction = c.ZilliqaMessage.ProtoTransaction.fromObject(e.transaction)
                    }
                    if (null != e.receipt) {
                        if ("object" != typeof e.receipt) throw TypeError(".ZilliqaMessage.ProtoTransactionWithReceipt.receipt: object expected");
                        t.receipt = c.ZilliqaMessage.ProtoTransactionReceipt.fromObject(e.receipt)
                    }
                    return t
                }, e.toObject = function(e, t) {
                    t || (t = {});
                    var n = {};
                    return t.defaults && (n.transaction = null, n.receipt = null), null != e.transaction && e.hasOwnProperty("transaction") && (n.transaction = c.ZilliqaMessage.ProtoTransaction.toObject(e.transaction, t)), null != e.receipt && e.hasOwnProperty("receipt") && (n.receipt = c.ZilliqaMessage.ProtoTransactionReceipt.toObject(e.receipt, t)), n
                }, e.prototype.toJSON = function() {
                    return this.constructor.toObject(this, o.util.toJSONOptions)
                }, e
            }(), r), e.exports = c
        },
        471: function(e, t, n) {
            ! function(e, t, n) {
                "use strict";
                t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
                var r = function(e) {
                        if (!e || !o(e)) return [];
                        for (var t = [], n = 0; n < e.length; n++) {
                            var r = e.charCodeAt(n),
                                i = r >> 8,
                                a = 255 & r;
                            i ? t.push(i, a) : t.push(a)
                        }
                        return t
                    },
                    o = function(e) {
                        var t = e.replace("0x", "");
                        return /[0-9a-f]*$/i.test(t)
                    },
                    i = Object.freeze({
                        intToHexArray: function(e, t) {
                            for (var n = [], r = [], o = e.toString(16), i = 0; i < o.length; i++) r[i] = o[i].toString();
                            for (i = 0; i < t - o.length; i++) n.push("0");
                            for (i = 0; i < o.length; i++) n.push(r[i]);
                            return n
                        },
                        intToByteArray: function(e, t) {
                            for (var n = e, r = []; n > 0;) r.push(255 & n), n >>= 8;
                            for (var o = t - r.length, i = 0; i < o; i++) r.unshift(0);
                            return Uint8Array.from(r)
                        },
                        hexToByteArray: function(e) {
                            for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.substring(n, n + 2), 16);
                            return t
                        },
                        hexToIntArray: r,
                        pack: function(e, t) {
                            if (e >> 16 > 0 || t >> 16 > 0) throw new Error("Both a and b must be 16 bits or less");
                            return (e << 16) + t
                        },
                        isEqual: function(e, t) {
                            var n = r(e),
                                o = r(t);
                            if (n.length !== o.length) return !1;
                            for (var i = 0, a = 0; a < n.length; a++) i |= n[a] ^ o[a];
                            return 0 === i
                        },
                        isHex: o
                    });

                function a(e) {
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
                }
                var s, c = function(e, t) {
                        return !!e.replace("0x", "").match("^[0-9a-fA-F]{" + t + "}$")
                    },
                    u = function(e) {
                        if ("object" == typeof e && null !== e) {
                            var t = Object.getPrototypeOf(e);
                            return t === Object.prototype || null === t
                        }
                        return !1
                    },
                    l = Object.freeze({
                        isAddress: function(e) {
                            return c(e, 40)
                        },
                        isBech32: function(e) {
                            return !!e.match(/^zil1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}$/)
                        },
                        isBase58: function(e) {
                            return !!e.match(/^[1-9ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/)
                        },
                        isPrivateKey: function(e) {
                            return c(e, 64)
                        },
                        isPubKey: function(e) {
                            return c(e, 66)
                        },
                        isSignature: function(e) {
                            return c(e, 128)
                        },
                        isByteString: c,
                        isNumber: function(e) {
                            return "number" == typeof e
                        },
                        isBN: function(e) {
                            return t.isBN(e)
                        },
                        isLong: function(e) {
                            return n.isLong(e)
                        },
                        isString: function(e) {
                            return "string" == typeof e
                        },
                        isPlainObject: u,
                        required: function(e) {
                            if ("function" == typeof e) return Object.defineProperty(e, "required", {
                                value: "@@ZJS_REQUIRED@@"
                            });
                            throw new Error("fn is not a function")
                        },
                        matchesObject: function(e, t) {
                            var n, r;
                            if (u(e))
                                for (var o in t)
                                    if (t.hasOwnProperty(o)) try {
                                        for (var i = (n = void 0, a(t[o])), s = i.next(); !s.done; s = i.next()) {
                                            var c = s.value,
                                                l = e[o];
                                            if (void 0 === l && c.required) throw new Error("Key not found: " + o)
                                        }
                                    } catch (e) {
                                        n = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            s && !s.done && (r = i.return) && r.call(i)
                                        } finally {
                                            if (n) throw n.error
                                        }
                                    }
                            return !0
                        }
                    });
                ! function(e) {
                    e.Zil = "zil", e.Li = "li", e.Qa = "qa"
                }(s || (s = {}));
                var f = {
                        pad: !1
                    },
                    p = new Map([
                        [s.Qa, "1"],
                        [s.Li, "1000000"],
                        [s.Zil, "1000000000000"]
                    ]),
                    d = Object.freeze({
                        get Units() {
                            return s
                        },
                        fromQa: function(e, n, r) {
                            if (void 0 === r && (r = f), "qa" === n) return e.toString(10);
                            var o = p.get(n);
                            if (!o) throw new Error("No unit of type " + n + " exists.");
                            for (var i = new t(o, 10), a = o.length - 1, s = e.abs().mod(i).toString(10); s.length < a;) s = "0" + s;
                            r.pad || (s = s.match(/^([0-9]*[1-9]|0)(0*)/)[1]);
                            var c = e.div(i).toString(10);
                            return "0" === s ? "" + c : c + "." + s
                        },
                        toQa: function(e, n) {
                            var r = function(e) {
                                    if ("string" == typeof e) {
                                        if (!e.match(/^-?[0-9.]+$/)) throw new Error("while converting number to string, invalid number value '" + e + "', should be a number matching (^-?[0-9.]+).");
                                        return e
                                    }
                                    if ("number" == typeof e) return String(e);
                                    if (t.isBN(e)) return e.toString(10);
                                    throw new Error("while converting number to string, invalid number value '" + e + "' type " + typeof e + ".")
                                }(e),
                                o = p.get(n);
                            if (!o) throw new Error("No unit of type " + n + " exists.");
                            var i = o.length - 1,
                                a = new t(o, 10),
                                s = "-" === r.substring(0, 1);
                            if (s && (r = r.substring(1)), "." === r) throw new Error("Cannot convert " + r + " to Qa.");
                            var c = r.split(".");
                            if (c.length > 2) throw new Error("Cannot convert " + r + " to Qa.");
                            var u = function(e, t) {
                                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                                    if (!n) return e;
                                    var r, o, i = n.call(e),
                                        a = [];
                                    try {
                                        for (;
                                            (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
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
                                    return a
                                }(c, 2),
                                l = u[0],
                                f = u[1];
                            if (l || (l = "0"), f || (f = "0"), f.length > i) throw new Error("Cannot convert " + r + " to Qa.");
                            for (; f.length < i;) f += "0";
                            var d = new t(l),
                                y = new t(f),
                                g = d.mul(a).add(y);
                            return s && (g = g.neg()), new t(g.toString(10), 10)
                        }
                    });
                e.BN = t, e.Long = n, e.bytes = i, e.units = d, e.validation = l, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n(35), n(1))
        }
    }
]);