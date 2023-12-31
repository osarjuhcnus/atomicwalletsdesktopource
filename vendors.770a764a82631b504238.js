/*! For license information please see vendors.770a764a82631b504238.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [160], {
        1467: function(e, t, r) {
            var f = r(958),
                a = r(2538),
                d = r(2547),
                n = r(2548);
            t.polling = function(e) {
                var t = !1,
                    r = !1,
                    n = !1 !== e.jsonp;
                if ("undefined" != typeof location) {
                    var i = "https:" === location.protocol,
                        c = location.port;
                    c || (c = i ? 443 : 80), t = e.hostname !== location.hostname || c !== e.port, r = e.secure !== i
                }
                if (e.xdomain = t, e.xscheme = r, "open" in new f(e) && !e.forceJSONP) return new a(e);
                if (!n) throw new Error("JSONP disabled");
                return new d(e)
            }, t.websocket = n
        },
        1468: function(e, t, r) {
            var f = r(959),
                a = r(569),
                d = r(376),
                n = r(570),
                i = r(1470),
                c = r(571)("engine.io-client:polling");
            e.exports = s;
            var o = null != new(r(958))({
                xdomain: !1
            }).responseType;

            function s(e) {
                var t = e && e.forceBase64;
                o && !t || (this.supportsBinary = !1), f.call(this, e)
            }
            n(s, f), s.prototype.name = "polling", s.prototype.doOpen = function() {
                this.poll()
            }, s.prototype.pause = function(e) {
                var t = this;

                function r() {
                    c("paused"), t.readyState = "paused", e()
                }
                if (this.readyState = "pausing", this.polling || !this.writable) {
                    var f = 0;
                    this.polling && (c("we are currently polling - waiting to pause"), f++, this.once("pollComplete", (function() {
                        c("pre-pause polling complete"), --f || r()
                    }))), this.writable || (c("we are currently writing - waiting to pause"), f++, this.once("drain", (function() {
                        c("pre-pause writing complete"), --f || r()
                    })))
                } else r()
            }, s.prototype.poll = function() {
                c("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
            }, s.prototype.onData = function(e) {
                var t = this;
                c("polling got data %s", e);
                d.decodePayload(e, this.socket.binaryType, (function(e, r, f) {
                    if ("opening" === t.readyState && t.onOpen(), "close" === e.type) return t.onClose(), !1;
                    t.onPacket(e)
                })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : c('ignoring poll - transport state "%s"', this.readyState))
            }, s.prototype.doClose = function() {
                var e = this;

                function t() {
                    c("writing close packet"), e.write([{
                        type: "close"
                    }])
                }
                "open" === this.readyState ? (c("transport open - closing"), t()) : (c("transport not open - deferring close"), this.once("open", t))
            }, s.prototype.write = function(e) {
                var t = this;
                this.writable = !1;
                var r = function() {
                    t.writable = !0, t.emit("drain")
                };
                d.encodePayload(e, this.supportsBinary, (function(e) {
                    t.doWrite(e, r)
                }))
            }, s.prototype.uri = function() {
                var e = this.query || {},
                    t = this.secure ? "https" : "http",
                    r = "";
                return !1 !== this.timestampRequests && (e[this.timestampParam] = i()), this.supportsBinary || e.sid || (e.b64 = 1), e = a.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (r = ":" + this.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + e
            }
        },
        1477: function(e, t, r) {
            "use strict";
            var f = t;
            f.base = r(572), f.short = r(2556), f.mont = r(2557), f.edwards = r(2558)
        },
        194: function(e, t, r) {
            "use strict";
            var f = t,
                a = r(35),
                d = r(191),
                n = r(1393);
            f.assert = d, f.toArray = n.toArray, f.zero2 = n.zero2, f.toHex = n.toHex, f.encode = n.encode, f.getNAF = function(e, t, r) {
                var f = new Array(Math.max(e.bitLength(), r) + 1);
                f.fill(0);
                for (var a = 1 << t + 1, d = e.clone(), n = 0; n < f.length; n++) {
                    var i, c = d.andln(a - 1);
                    d.isOdd() ? (i = c > (a >> 1) - 1 ? (a >> 1) - c : c, d.isubn(i)) : i = 0, f[n] = i, d.iushrn(1)
                }
                return f
            }, f.getJSF = function(e, t) {
                var r = [
                    [],
                    []
                ];
                e = e.clone(), t = t.clone();
                for (var f, a = 0, d = 0; e.cmpn(-a) > 0 || t.cmpn(-d) > 0;) {
                    var n, i, c = e.andln(3) + a & 3,
                        o = t.andln(3) + d & 3;
                    3 === c && (c = -1), 3 === o && (o = -1), n = 0 == (1 & c) ? 0 : 3 !== (f = e.andln(7) + a & 7) && 5 !== f || 2 !== o ? c : -c, r[0].push(n), i = 0 == (1 & o) ? 0 : 3 !== (f = t.andln(7) + d & 7) && 5 !== f || 2 !== c ? o : -o, r[1].push(i), 2 * a === n + 1 && (a = 1 - a), 2 * d === i + 1 && (d = 1 - d), e.iushrn(1), t.iushrn(1)
                }
                return r
            }, f.cachedProperty = function(e, t, r) {
                var f = "_" + t;
                e.prototype[t] = function() {
                    return void 0 !== this[f] ? this[f] : this[f] = r.call(this)
                }
            }, f.parseBytes = function(e) {
                return "string" == typeof e ? f.toArray(e, "hex") : e
            }, f.intFromLE = function(e) {
                return new a(e, "hex", "le")
            }
        },
        2535: function(e, t, r) {
            e.exports = r(2536), e.exports.parser = r(376)
        },
        2536: function(e, t, r) {
            var f = r(1467),
                a = r(960),
                d = r(571)("engine.io-client:socket"),
                n = r(1471),
                i = r(376),
                c = r(1463),
                o = r(569);

            function s(e, t) {
                if (!(this instanceof s)) return new s(e, t);
                t = t || {}, e && "object" == typeof e && (t = e, e = null), e ? (e = c(e), t.hostname = e.host, t.secure = "https" === e.protocol || "wss" === e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = c(t.host).host), this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = o.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.transportOptions = t.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
            }
            e.exports = s, s.priorWebsocketSuccess = !1, a(s.prototype), s.protocol = i.protocol, s.Socket = s, s.Transport = r(959), s.transports = r(1467), s.parser = r(376), s.prototype.createTransport = function(e) {
                d('creating transport "%s"', e);
                var t = function(e) {
                    var t = {};
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                    return t
                }(this.query);
                t.EIO = i.protocol, t.transport = e;
                var r = this.transportOptions[e] || {};
                return this.id && (t.sid = this.id), new f[e]({
                    query: t,
                    socket: this,
                    agent: r.agent || this.agent,
                    hostname: r.hostname || this.hostname,
                    port: r.port || this.port,
                    secure: r.secure || this.secure,
                    path: r.path || this.path,
                    forceJSONP: r.forceJSONP || this.forceJSONP,
                    jsonp: r.jsonp || this.jsonp,
                    forceBase64: r.forceBase64 || this.forceBase64,
                    enablesXDR: r.enablesXDR || this.enablesXDR,
                    timestampRequests: r.timestampRequests || this.timestampRequests,
                    timestampParam: r.timestampParam || this.timestampParam,
                    policyPort: r.policyPort || this.policyPort,
                    pfx: r.pfx || this.pfx,
                    key: r.key || this.key,
                    passphrase: r.passphrase || this.passphrase,
                    cert: r.cert || this.cert,
                    ca: r.ca || this.ca,
                    ciphers: r.ciphers || this.ciphers,
                    rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
                    perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
                    extraHeaders: r.extraHeaders || this.extraHeaders,
                    forceNode: r.forceNode || this.forceNode,
                    localAddress: r.localAddress || this.localAddress,
                    requestTimeout: r.requestTimeout || this.requestTimeout,
                    protocols: r.protocols || void 0,
                    isReactNative: this.isReactNative
                })
            }, s.prototype.open = function() {
                var e;
                if (this.rememberUpgrade && s.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";
                else {
                    if (0 === this.transports.length) {
                        var t = this;
                        return void setTimeout((function() {
                            t.emit("error", "No transports available")
                        }), 0)
                    }
                    e = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    e = this.createTransport(e)
                } catch (e) {
                    return this.transports.shift(), void this.open()
                }
                e.open(), this.setTransport(e)
            }, s.prototype.setTransport = function(e) {
                d("setting transport %s", e.name);
                var t = this;
                this.transport && (d("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", (function() {
                    t.onDrain()
                })).on("packet", (function(e) {
                    t.onPacket(e)
                })).on("error", (function(e) {
                    t.onError(e)
                })).on("close", (function() {
                    t.onClose("transport close")
                }))
            }, s.prototype.probe = function(e) {
                d('probing transport "%s"', e);
                var t = this.createTransport(e, {
                        probe: 1
                    }),
                    r = !1,
                    f = this;

                function a() {
                    if (f.onlyBinaryUpgrades) {
                        var a = !this.supportsBinary && f.transport.supportsBinary;
                        r = r || a
                    }
                    r || (d('probe transport "%s" opened', e), t.send([{
                        type: "ping",
                        data: "probe"
                    }]), t.once("packet", (function(a) {
                        if (!r)
                            if ("pong" === a.type && "probe" === a.data) {
                                if (d('probe transport "%s" pong', e), f.upgrading = !0, f.emit("upgrading", t), !t) return;
                                s.priorWebsocketSuccess = "websocket" === t.name, d('pausing current transport "%s"', f.transport.name), f.transport.pause((function() {
                                    r || "closed" !== f.readyState && (d("changing transport and sending upgrade packet"), u(), f.setTransport(t), t.send([{
                                        type: "upgrade"
                                    }]), f.emit("upgrade", t), t = null, f.upgrading = !1, f.flush())
                                }))
                            } else {
                                d('probe transport "%s" failed', e);
                                var n = new Error("probe error");
                                n.transport = t.name, f.emit("upgradeError", n)
                            }
                    })))
                }

                function n() {
                    r || (r = !0, u(), t.close(), t = null)
                }

                function i(r) {
                    var a = new Error("probe error: " + r);
                    a.transport = t.name, n(), d('probe transport "%s" failed because of error: %s', e, r), f.emit("upgradeError", a)
                }

                function c() {
                    i("transport closed")
                }

                function o() {
                    i("socket closed")
                }

                function b(e) {
                    t && e.name !== t.name && (d('"%s" works - aborting "%s"', e.name, t.name), n())
                }

                function u() {
                    t.removeListener("open", a), t.removeListener("error", i), t.removeListener("close", c), f.removeListener("close", o), f.removeListener("upgrading", b)
                }
                s.priorWebsocketSuccess = !1, t.once("open", a), t.once("error", i), t.once("close", c), this.once("close", o), this.once("upgrading", b), t.open()
            }, s.prototype.onOpen = function() {
                if (d("socket open"), this.readyState = "open", s.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                    d("starting upgrade probes");
                    for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
                }
            }, s.prototype.onPacket = function(e) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (d('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
                    case "open":
                        this.onHandshake(JSON.parse(e.data));
                        break;
                    case "pong":
                        this.setPing(), this.emit("pong");
                        break;
                    case "error":
                        var t = new Error("server error");
                        t.code = e.data, this.onError(t);
                        break;
                    case "message":
                        this.emit("data", e.data), this.emit("message", e.data)
                } else d('packet received with socket readyState "%s"', this.readyState)
            }, s.prototype.onHandshake = function(e) {
                this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
            }, s.prototype.onHeartbeat = function(e) {
                clearTimeout(this.pingTimeoutTimer);
                var t = this;
                t.pingTimeoutTimer = setTimeout((function() {
                    "closed" !== t.readyState && t.onClose("ping timeout")
                }), e || t.pingInterval + t.pingTimeout)
            }, s.prototype.setPing = function() {
                var e = this;
                clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout((function() {
                    d("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
                }), e.pingInterval)
            }, s.prototype.ping = function() {
                var e = this;
                this.sendPacket("ping", (function() {
                    e.emit("ping")
                }))
            }, s.prototype.onDrain = function() {
                this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
            }, s.prototype.flush = function() {
                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (d("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
            }, s.prototype.write = s.prototype.send = function(e, t, r) {
                return this.sendPacket("message", e, t, r), this
            }, s.prototype.sendPacket = function(e, t, r, f) {
                if ("function" == typeof t && (f = t, t = void 0), "function" == typeof r && (f = r, r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                    (r = r || {}).compress = !1 !== r.compress;
                    var a = {
                        type: e,
                        data: t,
                        options: r
                    };
                    this.emit("packetCreate", a), this.writeBuffer.push(a), f && this.once("flush", f), this.flush()
                }
            }, s.prototype.close = function() {
                if ("opening" === this.readyState || "open" === this.readyState) {
                    this.readyState = "closing";
                    var e = this;
                    this.writeBuffer.length ? this.once("drain", (function() {
                        this.upgrading ? f() : t()
                    })) : this.upgrading ? f() : t()
                }

                function t() {
                    e.onClose("forced close"), d("socket closing - telling transport to close"), e.transport.close()
                }

                function r() {
                    e.removeListener("upgrade", r), e.removeListener("upgradeError", r), t()
                }

                function f() {
                    e.once("upgrade", r), e.once("upgradeError", r)
                }
                return this
            }, s.prototype.onError = function(e) {
                d("socket error %j", e), s.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
            }, s.prototype.onClose = function(e, t) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                    d('socket close with reason: "%s"', e);
                    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0
                }
            }, s.prototype.filterUpgrades = function(e) {
                for (var t = [], r = 0, f = e.length; r < f; r++) ~n(this.transports, e[r]) && t.push(e[r]);
                return t
            }
        },
        2538: function(e, t, r) {
            var f = r(958),
                a = r(1468),
                d = r(960),
                n = r(570),
                i = r(571)("engine.io-client:polling-xhr");

            function c() {}

            function o(e) {
                if (a.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, "undefined" != typeof location) {
                    var t = "https:" === location.protocol,
                        r = location.port;
                    r || (r = t ? 443 : 80), this.xd = "undefined" != typeof location && e.hostname !== location.hostname || r !== e.port, this.xs = e.secure !== t
                }
            }

            function s(e) {
                this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = void 0 !== e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
            }
            if (e.exports = o, e.exports.Request = s, n(o, a), o.prototype.supportsBinary = !0, o.prototype.request = function(e) {
                    return (e = e || {}).uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new s(e)
                }, o.prototype.doWrite = function(e, t) {
                    var r = "string" != typeof e && void 0 !== e,
                        f = this.request({
                            method: "POST",
                            data: e,
                            isBinary: r
                        }),
                        a = this;
                    f.on("success", t), f.on("error", (function(e) {
                        a.onError("xhr post error", e)
                    })), this.sendXhr = f
                }, o.prototype.doPoll = function() {
                    i("xhr poll");
                    var e = this.request(),
                        t = this;
                    e.on("data", (function(e) {
                        t.onData(e)
                    })), e.on("error", (function(e) {
                        t.onError("xhr poll error", e)
                    })), this.pollXhr = e
                }, d(s.prototype), s.prototype.create = function() {
                    var e = {
                        agent: this.agent,
                        xdomain: this.xd,
                        xscheme: this.xs,
                        enablesXDR: this.enablesXDR
                    };
                    e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
                    var t = this.xhr = new f(e),
                        r = this;
                    try {
                        i("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
                        try {
                            if (this.extraHeaders)
                                for (var a in t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(a) && t.setRequestHeader(a, this.extraHeaders[a])
                        } catch (e) {}
                        if ("POST" === this.method) try {
                            this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (e) {}
                        try {
                            t.setRequestHeader("Accept", "*/*")
                        } catch (e) {}
                        "withCredentials" in t && (t.withCredentials = !0), this.requestTimeout && (t.timeout = this.requestTimeout), this.hasXDR() ? (t.onload = function() {
                            r.onLoad()
                        }, t.onerror = function() {
                            r.onError(t.responseText)
                        }) : t.onreadystatechange = function() {
                            if (2 === t.readyState) try {
                                var e = t.getResponseHeader("Content-Type");
                                r.supportsBinary && "application/octet-stream" === e && (t.responseType = "arraybuffer")
                            } catch (e) {}
                            4 === t.readyState && (200 === t.status || 1223 === t.status ? r.onLoad() : setTimeout((function() {
                                r.onError(t.status)
                            }), 0))
                        }, i("xhr data %s", this.data), t.send(this.data)
                    } catch (e) {
                        return void setTimeout((function() {
                            r.onError(e)
                        }), 0)
                    }
                    "undefined" != typeof document && (this.index = s.requestsCount++, s.requests[this.index] = this)
                }, s.prototype.onSuccess = function() {
                    this.emit("success"), this.cleanup()
                }, s.prototype.onData = function(e) {
                    this.emit("data", e), this.onSuccess()
                }, s.prototype.onError = function(e) {
                    this.emit("error", e), this.cleanup(!0)
                }, s.prototype.cleanup = function(e) {
                    if (void 0 !== this.xhr && null !== this.xhr) {
                        if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = c : this.xhr.onreadystatechange = c, e) try {
                            this.xhr.abort()
                        } catch (e) {}
                        "undefined" != typeof document && delete s.requests[this.index], this.xhr = null
                    }
                }, s.prototype.onLoad = function() {
                    var e;
                    try {
                        var t;
                        try {
                            t = this.xhr.getResponseHeader("Content-Type")
                        } catch (e) {}
                        e = "application/octet-stream" === t && this.xhr.response || this.xhr.responseText
                    } catch (e) {
                        this.onError(e)
                    }
                    null != e && this.onData(e)
                }, s.prototype.hasXDR = function() {
                    return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
                }, s.prototype.abort = function() {
                    this.cleanup()
                }, s.requestsCount = 0, s.requests = {}, "undefined" != typeof document)
                if ("function" == typeof attachEvent) attachEvent("onunload", u);
                else if ("function" == typeof addEventListener) {
                var b = "onpagehide" in self ? "pagehide" : "unload";
                addEventListener(b, u, !1)
            }

            function u() {
                for (var e in s.requests) s.requests.hasOwnProperty(e) && s.requests[e].abort()
            }
        },
        2539: function(e, t) {
            e.exports = Object.keys || function(e) {
                var t = [],
                    r = Object.prototype.hasOwnProperty;
                for (var f in e) r.call(e, f) && t.push(f);
                return t
            }
        },
        2543: function(e, t) {
            var r, f, a, d = String.fromCharCode;

            function n(e) {
                for (var t, r, f = [], a = 0, d = e.length; a < d;)(t = e.charCodeAt(a++)) >= 55296 && t <= 56319 && a < d ? 56320 == (64512 & (r = e.charCodeAt(a++))) ? f.push(((1023 & t) << 10) + (1023 & r) + 65536) : (f.push(t), a--) : f.push(t);
                return f
            }

            function i(e, t) {
                if (e >= 55296 && e <= 57343) {
                    if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
                    return !1
                }
                return !0
            }

            function c(e, t) {
                return d(e >> t & 63 | 128)
            }

            function o(e, t) {
                if (0 == (4294967168 & e)) return d(e);
                var r = "";
                return 0 == (4294965248 & e) ? r = d(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (i(e, t) || (e = 65533), r = d(e >> 12 & 15 | 224), r += c(e, 6)) : 0 == (4292870144 & e) && (r = d(e >> 18 & 7 | 240), r += c(e, 12), r += c(e, 6)), r += d(63 & e | 128)
            }

            function s() {
                if (a >= f) throw Error("Invalid byte index");
                var e = 255 & r[a];
                if (a++, 128 == (192 & e)) return 63 & e;
                throw Error("Invalid continuation byte")
            }

            function b(e) {
                var t, d;
                if (a > f) throw Error("Invalid byte index");
                if (a == f) return !1;
                if (t = 255 & r[a], a++, 0 == (128 & t)) return t;
                if (192 == (224 & t)) {
                    if ((d = (31 & t) << 6 | s()) >= 128) return d;
                    throw Error("Invalid continuation byte")
                }
                if (224 == (240 & t)) {
                    if ((d = (15 & t) << 12 | s() << 6 | s()) >= 2048) return i(d, e) ? d : 65533;
                    throw Error("Invalid continuation byte")
                }
                if (240 == (248 & t) && (d = (7 & t) << 18 | s() << 12 | s() << 6 | s()) >= 65536 && d <= 1114111) return d;
                throw Error("Invalid UTF-8 detected")
            }
            e.exports = {
                version: "2.1.2",
                encode: function(e, t) {
                    for (var r = !1 !== (t = t || {}).strict, f = n(e), a = f.length, d = -1, i = ""; ++d < a;) i += o(f[d], r);
                    return i
                },
                decode: function(e, t) {
                    var i = !1 !== (t = t || {}).strict;
                    r = n(e), f = r.length, a = 0;
                    for (var c, o = []; !1 !== (c = b(i));) o.push(c);
                    return function(e) {
                        for (var t, r = e.length, f = -1, a = ""; ++f < r;)(t = e[f]) > 65535 && (a += d((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), a += d(t);
                        return a
                    }(o)
                }
            }
        },
        2546: function(e, t, r) {
            function f(e) {
                var r;

                function f() {
                    if (f.enabled) {
                        var e = f,
                            a = +new Date,
                            d = a - (r || a);
                        e.diff = d, e.prev = r, e.curr = a, r = a;
                        for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
                        n[0] = t.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
                        var c = 0;
                        n[0] = n[0].replace(/%([a-zA-Z%])/g, (function(r, f) {
                            if ("%%" === r) return r;
                            c++;
                            var a = t.formatters[f];
                            if ("function" == typeof a) {
                                var d = n[c];
                                r = a.call(e, d), n.splice(c, 1), c--
                            }
                            return r
                        })), t.formatArgs.call(e, n);
                        var o = f.log || t.log || console.log.bind(console);
                        o.apply(e, n)
                    }
                }
                return f.namespace = e, f.enabled = t.enabled(e), f.useColors = t.useColors(), f.color = function(e) {
                    var r, f = 0;
                    for (r in e) f = (f << 5) - f + e.charCodeAt(r), f |= 0;
                    return t.colors[Math.abs(f) % t.colors.length]
                }(e), f.destroy = a, "function" == typeof t.init && t.init(f), t.instances.push(f), f
            }

            function a() {
                var e = t.instances.indexOf(this);
                return -1 !== e && (t.instances.splice(e, 1), !0)
            }(t = e.exports = f.debug = f.default = f).coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e
            }, t.disable = function() {
                t.enable("")
            }, t.enable = function(e) {
                var r;
                t.save(e), t.names = [], t.skips = [];
                var f = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    a = f.length;
                for (r = 0; r < a; r++) f[r] && ("-" === (e = f[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                for (r = 0; r < t.instances.length; r++) {
                    var d = t.instances[r];
                    d.enabled = t.enabled(d.namespace)
                }
            }, t.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                var r, f;
                for (r = 0, f = t.skips.length; r < f; r++)
                    if (t.skips[r].test(e)) return !1;
                for (r = 0, f = t.names.length; r < f; r++)
                    if (t.names[r].test(e)) return !0;
                return !1
            }, t.humanize = r(934), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
        },
        2547: function(e, t, r) {
            var f = r(1468),
                a = r(570);
            e.exports = s;
            var d, n = /\n/g,
                i = /\\n/g;

            function c() {}

            function o() {
                return "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}
            }

            function s(e) {
                if (f.call(this, e), this.query = this.query || {}, !d) {
                    var t = o();
                    d = t.___eio = t.___eio || []
                }
                this.index = d.length;
                var r = this;
                d.push((function(e) {
                    r.onData(e)
                })), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", (function() {
                    r.script && (r.script.onerror = c)
                }), !1)
            }
            a(s, f), s.prototype.supportsBinary = !1, s.prototype.doClose = function() {
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), f.prototype.doClose.call(this)
            }, s.prototype.doPoll = function() {
                var e = this,
                    t = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(t) {
                    e.onError("jsonp poll error", t)
                };
                var r = document.getElementsByTagName("script")[0];
                r ? r.parentNode.insertBefore(t, r) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
                    var e = document.createElement("iframe");
                    document.body.appendChild(e), document.body.removeChild(e)
                }), 100)
            }, s.prototype.doWrite = function(e, t) {
                var r = this;
                if (!this.form) {
                    var f, a = document.createElement("form"),
                        d = document.createElement("textarea"),
                        c = this.iframeId = "eio_iframe_" + this.index;
                    a.className = "socketio", a.style.position = "absolute", a.style.top = "-1000px", a.style.left = "-1000px", a.target = c, a.method = "POST", a.setAttribute("accept-charset", "utf-8"), d.name = "d", a.appendChild(d), document.body.appendChild(a), this.form = a, this.area = d
                }

                function o() {
                    s(), t()
                }

                function s() {
                    if (r.iframe) try {
                        r.form.removeChild(r.iframe)
                    } catch (e) {
                        r.onError("jsonp polling iframe removal error", e)
                    }
                    try {
                        var e = '<iframe src="javascript:0" name="' + r.iframeId + '">';
                        f = document.createElement(e)
                    } catch (e) {
                        (f = document.createElement("iframe")).name = r.iframeId, f.src = "javascript:0"
                    }
                    f.id = r.iframeId, r.form.appendChild(f), r.iframe = f
                }
                this.form.action = this.uri(), s(), e = e.replace(i, "\\\n"), this.area.value = e.replace(n, "\\n");
                try {
                    this.form.submit()
                } catch (e) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                    "complete" === r.iframe.readyState && o()
                } : this.iframe.onload = o
            }
        },
        2548: function(e, t, r) {
            var f, a, d = r(959),
                n = r(376),
                i = r(569),
                c = r(570),
                o = r(1470),
                s = r(571)("engine.io-client:websocket");
            if ("undefined" != typeof WebSocket) f = WebSocket;
            else if ("undefined" != typeof self) f = self.WebSocket || self.MozWebSocket;
            else try {
                a = r(2549)
            } catch (e) {}
            var b = f || a;

            function u(e) {
                e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = f && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (b = a), d.call(this, e)
            }
            e.exports = u, c(u, d), u.prototype.name = "websocket", u.prototype.supportsBinary = !0, u.prototype.doOpen = function() {
                if (this.check()) {
                    var e = this.uri(),
                        t = this.protocols,
                        r = {
                            agent: this.agent,
                            perMessageDeflate: this.perMessageDeflate
                        };
                    r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);
                    try {
                        this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new b(e, t) : new b(e) : new b(e, t, r)
                    } catch (e) {
                        return this.emit("error", e)
                    }
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
                }
            }, u.prototype.addEventListeners = function() {
                var e = this;
                this.ws.onopen = function() {
                    e.onOpen()
                }, this.ws.onclose = function() {
                    e.onClose()
                }, this.ws.onmessage = function(t) {
                    e.onData(t.data)
                }, this.ws.onerror = function(t) {
                    e.onError("websocket error", t)
                }
            }, u.prototype.write = function(e) {
                var t = this;
                this.writable = !1;
                for (var r = e.length, f = 0, a = r; f < a; f++) ! function(e) {
                    n.encodePacket(e, t.supportsBinary, (function(f) {
                        if (!t.usingBrowserWebSocket) {
                            var a = {};
                            if (e.options && (a.compress = e.options.compress), t.perMessageDeflate)("string" == typeof f ? Buffer.byteLength(f) : f.length) < t.perMessageDeflate.threshold && (a.compress = !1)
                        }
                        try {
                            t.usingBrowserWebSocket ? t.ws.send(f) : t.ws.send(f, a)
                        } catch (e) {
                            s("websocket closed before onclose event")
                        }--r || d()
                    }))
                }(e[f]);

                function d() {
                    t.emit("flush"), setTimeout((function() {
                        t.writable = !0, t.emit("drain")
                    }), 0)
                }
            }, u.prototype.onClose = function() {
                d.prototype.onClose.call(this)
            }, u.prototype.doClose = function() {
                void 0 !== this.ws && this.ws.close()
            }, u.prototype.uri = function() {
                var e = this.query || {},
                    t = this.secure ? "wss" : "ws",
                    r = "";
                return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (r = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = o()), this.supportsBinary || (e.b64 = 1), (e = i.encode(e)).length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + e
            }, u.prototype.check = function() {
                return !(!b || "__initialize" in b && this.name === u.prototype.name)
            }
        },
        2555: function(e) {
            e.exports = JSON.parse('{"name":"elliptic","version":"6.5.4","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"lint":"eslint lib test","lint:fix":"npm run lint -- --fix","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^2.0.2","coveralls":"^3.1.0","eslint":"^7.6.0","grunt":"^1.2.1","grunt-browserify":"^5.3.0","grunt-cli":"^1.3.2","grunt-contrib-connect":"^3.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^5.0.0","grunt-mocha-istanbul":"^5.0.2","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.5","mocha":"^8.0.1"},"dependencies":{"bn.js":"^4.11.9","brorand":"^1.1.0","hash.js":"^1.0.0","hmac-drbg":"^1.0.1","inherits":"^2.0.4","minimalistic-assert":"^1.0.1","minimalistic-crypto-utils":"^1.0.1"}}')
        },
        2556: function(e, t, r) {
            "use strict";
            var f = r(194),
                a = r(35),
                d = r(18),
                n = r(572),
                i = f.assert;

            function c(e) {
                n.call(this, "short", e), this.a = new a(e.a, 16).toRed(this.red), this.b = new a(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
            }

            function Point(e, t, r, f) {
                n.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new a(t, 16), this.y = new a(r, 16), f && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function o(e, t, r, f) {
                n.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === f ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new a(0)) : (this.x = new a(t, 16), this.y = new a(r, 16), this.z = new a(f, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            d(c, n), e.exports = c, c.prototype._getEndomorphism = function(e) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var t, r;
                    if (e.beta) t = new a(e.beta, 16).toRed(this.red);
                    else {
                        var f = this._getEndoRoots(this.p);
                        t = (t = f[0].cmp(f[1]) < 0 ? f[0] : f[1]).toRed(this.red)
                    }
                    if (e.lambda) r = new a(e.lambda, 16);
                    else {
                        var d = this._getEndoRoots(this.n);
                        0 === this.g.mul(d[0]).x.cmp(this.g.x.redMul(t)) ? r = d[0] : (r = d[1], i(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                    }
                    return {
                        beta: t,
                        lambda: r,
                        basis: e.basis ? e.basis.map((function(e) {
                            return {
                                a: new a(e.a, 16),
                                b: new a(e.b, 16)
                            }
                        })) : this._getEndoBasis(r)
                    }
                }
            }, c.prototype._getEndoRoots = function(e) {
                var t = e === this.p ? this.red : a.mont(e),
                    r = new a(2).toRed(t).redInvm(),
                    f = r.redNeg(),
                    d = new a(3).toRed(t).redNeg().redSqrt().redMul(r);
                return [f.redAdd(d).fromRed(), f.redSub(d).fromRed()]
            }, c.prototype._getEndoBasis = function(e) {
                for (var t, r, f, d, n, i, c, o, s, b = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = e, h = this.n.clone(), p = new a(1), l = new a(0), y = new a(0), v = new a(1), m = 0; 0 !== u.cmpn(0);) {
                    var g = h.div(u);
                    o = h.sub(g.mul(u)), s = y.sub(g.mul(p));
                    var w = v.sub(g.mul(l));
                    if (!f && o.cmp(b) < 0) t = c.neg(), r = p, f = o.neg(), d = s;
                    else if (f && 2 == ++m) break;
                    c = o, h = u, u = o, y = p, p = s, v = l, l = w
                }
                n = o.neg(), i = s;
                var S = f.sqr().add(d.sqr());
                return n.sqr().add(i.sqr()).cmp(S) >= 0 && (n = t, i = r), f.negative && (f = f.neg(), d = d.neg()), n.negative && (n = n.neg(), i = i.neg()), [{
                    a: f,
                    b: d
                }, {
                    a: n,
                    b: i
                }]
            }, c.prototype._endoSplit = function(e) {
                var t = this.endo.basis,
                    r = t[0],
                    f = t[1],
                    a = f.b.mul(e).divRound(this.n),
                    d = r.b.neg().mul(e).divRound(this.n),
                    n = a.mul(r.a),
                    i = d.mul(f.a),
                    c = a.mul(r.b),
                    o = d.mul(f.b);
                return {
                    k1: e.sub(n).sub(i),
                    k2: c.add(o).neg()
                }
            }, c.prototype.pointFromX = function(e, t) {
                (e = new a(e, 16)).red || (e = e.toRed(this.red));
                var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                    f = r.redSqrt();
                if (0 !== f.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
                var d = f.fromRed().isOdd();
                return (t && !d || !t && d) && (f = f.redNeg()), this.point(e, f)
            }, c.prototype.validate = function(e) {
                if (e.inf) return !0;
                var t = e.x,
                    r = e.y,
                    f = this.a.redMul(t),
                    a = t.redSqr().redMul(t).redIAdd(f).redIAdd(this.b);
                return 0 === r.redSqr().redISub(a).cmpn(0)
            }, c.prototype._endoWnafMulAdd = function(e, t, r) {
                for (var f = this._endoWnafT1, a = this._endoWnafT2, d = 0; d < e.length; d++) {
                    var n = this._endoSplit(t[d]),
                        i = e[d],
                        c = i._getBeta();
                    n.k1.negative && (n.k1.ineg(), i = i.neg(!0)), n.k2.negative && (n.k2.ineg(), c = c.neg(!0)), f[2 * d] = i, f[2 * d + 1] = c, a[2 * d] = n.k1, a[2 * d + 1] = n.k2
                }
                for (var o = this._wnafMulAdd(1, f, a, 2 * d, r), s = 0; s < 2 * d; s++) f[s] = null, a[s] = null;
                return o
            }, d(Point, n.BasePoint), c.prototype.point = function(e, t, r) {
                return new Point(this, e, t, r)
            }, c.prototype.pointFromJSON = function(e, t) {
                return Point.fromJSON(this, e, t)
            }, Point.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var e = this.precomputed;
                    if (e && e.beta) return e.beta;
                    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (e) {
                        var r = this.curve,
                            f = function(e) {
                                return r.point(e.x.redMul(r.endo.beta), e.y)
                            };
                        e.beta = t, t.precomputed = {
                            beta: null,
                            naf: e.naf && {
                                wnd: e.naf.wnd,
                                points: e.naf.points.map(f)
                            },
                            doubles: e.doubles && {
                                step: e.doubles.step,
                                points: e.doubles.points.map(f)
                            }
                        }
                    }
                    return t
                }
            }, Point.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, Point.fromJSON = function(e, t, r) {
                "string" == typeof t && (t = JSON.parse(t));
                var f = e.point(t[0], t[1], r);
                if (!t[2]) return f;

                function a(t) {
                    return e.point(t[0], t[1], r)
                }
                var d = t[2];
                return f.precomputed = {
                    beta: null,
                    doubles: d.doubles && {
                        step: d.doubles.step,
                        points: [f].concat(d.doubles.points.map(a))
                    },
                    naf: d.naf && {
                        wnd: d.naf.wnd,
                        points: [f].concat(d.naf.points.map(a))
                    }
                }, f
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return this.inf
            }, Point.prototype.add = function(e) {
                if (this.inf) return e;
                if (e.inf) return this;
                if (this.eq(e)) return this.dbl();
                if (this.neg().eq(e)) return this.curve.point(null, null);
                if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
                var t = this.y.redSub(e.y);
                0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
                var r = t.redSqr().redISub(this.x).redISub(e.x),
                    f = t.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, f)
            }, Point.prototype.dbl = function() {
                if (this.inf) return this;
                var e = this.y.redAdd(this.y);
                if (0 === e.cmpn(0)) return this.curve.point(null, null);
                var t = this.curve.a,
                    r = this.x.redSqr(),
                    f = e.redInvm(),
                    a = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(f),
                    d = a.redSqr().redISub(this.x.redAdd(this.x)),
                    n = a.redMul(this.x.redSub(d)).redISub(this.y);
                return this.curve.point(d, n)
            }, Point.prototype.getX = function() {
                return this.x.fromRed()
            }, Point.prototype.getY = function() {
                return this.y.fromRed()
            }, Point.prototype.mul = function(e) {
                return e = new a(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
            }, Point.prototype.mulAdd = function(e, t, r) {
                var f = [this, t],
                    a = [e, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(f, a) : this.curve._wnafMulAdd(1, f, a, 2)
            }, Point.prototype.jmulAdd = function(e, t, r) {
                var f = [this, t],
                    a = [e, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(f, a, !0) : this.curve._wnafMulAdd(1, f, a, 2, !0)
            }, Point.prototype.eq = function(e) {
                return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
            }, Point.prototype.neg = function(e) {
                if (this.inf) return this;
                var t = this.curve.point(this.x, this.y.redNeg());
                if (e && this.precomputed) {
                    var r = this.precomputed,
                        f = function(e) {
                            return e.neg()
                        };
                    t.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(f)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(f)
                        }
                    }
                }
                return t
            }, Point.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, d(o, n.BasePoint), c.prototype.jpoint = function(e, t, r) {
                return new o(this, e, t, r)
            }, o.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var e = this.z.redInvm(),
                    t = e.redSqr(),
                    r = this.x.redMul(t),
                    f = this.y.redMul(t).redMul(e);
                return this.curve.point(r, f)
            }, o.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, o.prototype.add = function(e) {
                if (this.isInfinity()) return e;
                if (e.isInfinity()) return this;
                var t = e.z.redSqr(),
                    r = this.z.redSqr(),
                    f = this.x.redMul(t),
                    a = e.x.redMul(r),
                    d = this.y.redMul(t.redMul(e.z)),
                    n = e.y.redMul(r.redMul(this.z)),
                    i = f.redSub(a),
                    c = d.redSub(n);
                if (0 === i.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var o = i.redSqr(),
                    s = o.redMul(i),
                    b = f.redMul(o),
                    u = c.redSqr().redIAdd(s).redISub(b).redISub(b),
                    h = c.redMul(b.redISub(u)).redISub(d.redMul(s)),
                    p = this.z.redMul(e.z).redMul(i);
                return this.curve.jpoint(u, h, p)
            }, o.prototype.mixedAdd = function(e) {
                if (this.isInfinity()) return e.toJ();
                if (e.isInfinity()) return this;
                var t = this.z.redSqr(),
                    r = this.x,
                    f = e.x.redMul(t),
                    a = this.y,
                    d = e.y.redMul(t).redMul(this.z),
                    n = r.redSub(f),
                    i = a.redSub(d);
                if (0 === n.cmpn(0)) return 0 !== i.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var c = n.redSqr(),
                    o = c.redMul(n),
                    s = r.redMul(c),
                    b = i.redSqr().redIAdd(o).redISub(s).redISub(s),
                    u = i.redMul(s.redISub(b)).redISub(a.redMul(o)),
                    h = this.z.redMul(n);
                return this.curve.jpoint(b, u, h)
            }, o.prototype.dblp = function(e) {
                if (0 === e) return this;
                if (this.isInfinity()) return this;
                if (!e) return this.dbl();
                var t;
                if (this.curve.zeroA || this.curve.threeA) {
                    var r = this;
                    for (t = 0; t < e; t++) r = r.dbl();
                    return r
                }
                var f = this.curve.a,
                    a = this.curve.tinv,
                    d = this.x,
                    n = this.y,
                    i = this.z,
                    c = i.redSqr().redSqr(),
                    o = n.redAdd(n);
                for (t = 0; t < e; t++) {
                    var s = d.redSqr(),
                        b = o.redSqr(),
                        u = b.redSqr(),
                        h = s.redAdd(s).redIAdd(s).redIAdd(f.redMul(c)),
                        p = d.redMul(b),
                        l = h.redSqr().redISub(p.redAdd(p)),
                        y = p.redISub(l),
                        v = h.redMul(y);
                    v = v.redIAdd(v).redISub(u);
                    var m = o.redMul(i);
                    t + 1 < e && (c = c.redMul(u)), d = l, i = m, o = v
                }
                return this.curve.jpoint(d, o.redMul(a), i)
            }, o.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, o.prototype._zeroDbl = function() {
                var e, t, r;
                if (this.zOne) {
                    var f = this.x.redSqr(),
                        a = this.y.redSqr(),
                        d = a.redSqr(),
                        n = this.x.redAdd(a).redSqr().redISub(f).redISub(d);
                    n = n.redIAdd(n);
                    var i = f.redAdd(f).redIAdd(f),
                        c = i.redSqr().redISub(n).redISub(n),
                        o = d.redIAdd(d);
                    o = (o = o.redIAdd(o)).redIAdd(o), e = c, t = i.redMul(n.redISub(c)).redISub(o), r = this.y.redAdd(this.y)
                } else {
                    var s = this.x.redSqr(),
                        b = this.y.redSqr(),
                        u = b.redSqr(),
                        h = this.x.redAdd(b).redSqr().redISub(s).redISub(u);
                    h = h.redIAdd(h);
                    var p = s.redAdd(s).redIAdd(s),
                        l = p.redSqr(),
                        y = u.redIAdd(u);
                    y = (y = y.redIAdd(y)).redIAdd(y), e = l.redISub(h).redISub(h), t = p.redMul(h.redISub(e)).redISub(y), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(e, t, r)
            }, o.prototype._threeDbl = function() {
                var e, t, r;
                if (this.zOne) {
                    var f = this.x.redSqr(),
                        a = this.y.redSqr(),
                        d = a.redSqr(),
                        n = this.x.redAdd(a).redSqr().redISub(f).redISub(d);
                    n = n.redIAdd(n);
                    var i = f.redAdd(f).redIAdd(f).redIAdd(this.curve.a),
                        c = i.redSqr().redISub(n).redISub(n);
                    e = c;
                    var o = d.redIAdd(d);
                    o = (o = o.redIAdd(o)).redIAdd(o), t = i.redMul(n.redISub(c)).redISub(o), r = this.y.redAdd(this.y)
                } else {
                    var s = this.z.redSqr(),
                        b = this.y.redSqr(),
                        u = this.x.redMul(b),
                        h = this.x.redSub(s).redMul(this.x.redAdd(s));
                    h = h.redAdd(h).redIAdd(h);
                    var p = u.redIAdd(u),
                        l = (p = p.redIAdd(p)).redAdd(p);
                    e = h.redSqr().redISub(l), r = this.y.redAdd(this.z).redSqr().redISub(b).redISub(s);
                    var y = b.redSqr();
                    y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y), t = h.redMul(p.redISub(e)).redISub(y)
                }
                return this.curve.jpoint(e, t, r)
            }, o.prototype._dbl = function() {
                var e = this.curve.a,
                    t = this.x,
                    r = this.y,
                    f = this.z,
                    a = f.redSqr().redSqr(),
                    d = t.redSqr(),
                    n = r.redSqr(),
                    i = d.redAdd(d).redIAdd(d).redIAdd(e.redMul(a)),
                    c = t.redAdd(t),
                    o = (c = c.redIAdd(c)).redMul(n),
                    s = i.redSqr().redISub(o.redAdd(o)),
                    b = o.redISub(s),
                    u = n.redSqr();
                u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                var h = i.redMul(b).redISub(u),
                    p = r.redAdd(r).redMul(f);
                return this.curve.jpoint(s, h, p)
            }, o.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var e = this.x.redSqr(),
                    t = this.y.redSqr(),
                    r = this.z.redSqr(),
                    f = t.redSqr(),
                    a = e.redAdd(e).redIAdd(e),
                    d = a.redSqr(),
                    n = this.x.redAdd(t).redSqr().redISub(e).redISub(f),
                    i = (n = (n = (n = n.redIAdd(n)).redAdd(n).redIAdd(n)).redISub(d)).redSqr(),
                    c = f.redIAdd(f);
                c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
                var o = a.redIAdd(n).redSqr().redISub(d).redISub(i).redISub(c),
                    s = t.redMul(o);
                s = (s = s.redIAdd(s)).redIAdd(s);
                var b = this.x.redMul(i).redISub(s);
                b = (b = b.redIAdd(b)).redIAdd(b);
                var u = this.y.redMul(o.redMul(c.redISub(o)).redISub(n.redMul(i)));
                u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                var h = this.z.redAdd(n).redSqr().redISub(r).redISub(i);
                return this.curve.jpoint(b, u, h)
            }, o.prototype.mul = function(e, t) {
                return e = new a(e, t), this.curve._wnafMul(this, e)
            }, o.prototype.eq = function(e) {
                if ("affine" === e.type) return this.eq(e.toJ());
                if (this === e) return !0;
                var t = this.z.redSqr(),
                    r = e.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
                var f = t.redMul(this.z),
                    a = r.redMul(e.z);
                return 0 === this.y.redMul(a).redISub(e.y.redMul(f)).cmpn(0)
            }, o.prototype.eqXToP = function(e) {
                var t = this.z.redSqr(),
                    r = e.toRed(this.curve.red).redMul(t);
                if (0 === this.x.cmp(r)) return !0;
                for (var f = e.clone(), a = this.curve.redN.redMul(t);;) {
                    if (f.iadd(this.curve.n), f.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(a), 0 === this.x.cmp(r)) return !0
                }
            }, o.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, o.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }
        },
        2557: function(e, t, r) {
            "use strict";
            var f = r(35),
                a = r(18),
                d = r(572),
                n = r(194);

            function i(e) {
                d.call(this, "mont", e), this.a = new f(e.a, 16).toRed(this.red), this.b = new f(e.b, 16).toRed(this.red), this.i4 = new f(4).toRed(this.red).redInvm(), this.two = new f(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
            }

            function Point(e, t, r) {
                d.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new f(t, 16), this.z = new f(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
            }
            a(i, d), e.exports = i, i.prototype.validate = function(e) {
                var t = e.normalize().x,
                    r = t.redSqr(),
                    f = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
                return 0 === f.redSqrt().redSqr().cmp(f)
            }, a(Point, d.BasePoint), i.prototype.decodePoint = function(e, t) {
                return this.point(n.toArray(e, t), 1)
            }, i.prototype.point = function(e, t) {
                return new Point(this, e, t)
            }, i.prototype.pointFromJSON = function(e) {
                return Point.fromJSON(this, e)
            }, Point.prototype.precompute = function() {}, Point.prototype._encode = function() {
                return this.getX().toArray("be", this.curve.p.byteLength())
            }, Point.fromJSON = function(e, t) {
                return new Point(e, t[0], t[1] || e.one)
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }, Point.prototype.dbl = function() {
                var e = this.x.redAdd(this.z).redSqr(),
                    t = this.x.redSub(this.z).redSqr(),
                    r = e.redSub(t),
                    f = e.redMul(t),
                    a = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
                return this.curve.point(f, a)
            }, Point.prototype.add = function() {
                throw new Error("Not supported on Montgomery curve")
            }, Point.prototype.diffAdd = function(e, t) {
                var r = this.x.redAdd(this.z),
                    f = this.x.redSub(this.z),
                    a = e.x.redAdd(e.z),
                    d = e.x.redSub(e.z).redMul(r),
                    n = a.redMul(f),
                    i = t.z.redMul(d.redAdd(n).redSqr()),
                    c = t.x.redMul(d.redISub(n).redSqr());
                return this.curve.point(i, c)
            }, Point.prototype.mul = function(e) {
                for (var t = e.clone(), r = this, f = this.curve.point(null, null), a = []; 0 !== t.cmpn(0); t.iushrn(1)) a.push(t.andln(1));
                for (var d = a.length - 1; d >= 0; d--) 0 === a[d] ? (r = r.diffAdd(f, this), f = f.dbl()) : (f = r.diffAdd(f, this), r = r.dbl());
                return f
            }, Point.prototype.mulAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, Point.prototype.jumlAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, Point.prototype.eq = function(e) {
                return 0 === this.getX().cmp(e.getX())
            }, Point.prototype.normalize = function() {
                return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
            }, Point.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }
        },
        2558: function(e, t, r) {
            "use strict";
            var f = r(194),
                a = r(35),
                d = r(18),
                n = r(572),
                i = f.assert;

            function c(e) {
                this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, n.call(this, "edwards", e), this.a = new a(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new a(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new a(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), i(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c)
            }

            function Point(e, t, r, f, d) {
                n.BasePoint.call(this, e, "projective"), null === t && null === r && null === f ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new a(t, 16), this.y = new a(r, 16), this.z = f ? new a(f, 16) : this.curve.one, this.t = d && new a(d, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
            }
            d(c, n), e.exports = c, c.prototype._mulA = function(e) {
                return this.mOneA ? e.redNeg() : this.a.redMul(e)
            }, c.prototype._mulC = function(e) {
                return this.oneC ? e : this.c.redMul(e)
            }, c.prototype.jpoint = function(e, t, r, f) {
                return this.point(e, t, r, f)
            }, c.prototype.pointFromX = function(e, t) {
                (e = new a(e, 16)).red || (e = e.toRed(this.red));
                var r = e.redSqr(),
                    f = this.c2.redSub(this.a.redMul(r)),
                    d = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                    n = f.redMul(d.redInvm()),
                    i = n.redSqrt();
                if (0 !== i.redSqr().redSub(n).cmp(this.zero)) throw new Error("invalid point");
                var c = i.fromRed().isOdd();
                return (t && !c || !t && c) && (i = i.redNeg()), this.point(e, i)
            }, c.prototype.pointFromY = function(e, t) {
                (e = new a(e, 16)).red || (e = e.toRed(this.red));
                var r = e.redSqr(),
                    f = r.redSub(this.c2),
                    d = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                    n = f.redMul(d.redInvm());
                if (0 === n.cmp(this.zero)) {
                    if (t) throw new Error("invalid point");
                    return this.point(this.zero, e)
                }
                var i = n.redSqrt();
                if (0 !== i.redSqr().redSub(n).cmp(this.zero)) throw new Error("invalid point");
                return i.fromRed().isOdd() !== t && (i = i.redNeg()), this.point(i, e)
            }, c.prototype.validate = function(e) {
                if (e.isInfinity()) return !0;
                e.normalize();
                var t = e.x.redSqr(),
                    r = e.y.redSqr(),
                    f = t.redMul(this.a).redAdd(r),
                    a = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
                return 0 === f.cmp(a)
            }, d(Point, n.BasePoint), c.prototype.pointFromJSON = function(e) {
                return Point.fromJSON(this, e)
            }, c.prototype.point = function(e, t, r, f) {
                return new Point(this, e, t, r, f)
            }, Point.fromJSON = function(e, t) {
                return new Point(e, t[0], t[1], t[2])
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
            }, Point.prototype._extDbl = function() {
                var e = this.x.redSqr(),
                    t = this.y.redSqr(),
                    r = this.z.redSqr();
                r = r.redIAdd(r);
                var f = this.curve._mulA(e),
                    a = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
                    d = f.redAdd(t),
                    n = d.redSub(r),
                    i = f.redSub(t),
                    c = a.redMul(n),
                    o = d.redMul(i),
                    s = a.redMul(i),
                    b = n.redMul(d);
                return this.curve.point(c, o, b, s)
            }, Point.prototype._projDbl = function() {
                var e, t, r, f, a, d, n = this.x.redAdd(this.y).redSqr(),
                    i = this.x.redSqr(),
                    c = this.y.redSqr();
                if (this.curve.twisted) {
                    var o = (f = this.curve._mulA(i)).redAdd(c);
                    this.zOne ? (e = n.redSub(i).redSub(c).redMul(o.redSub(this.curve.two)), t = o.redMul(f.redSub(c)), r = o.redSqr().redSub(o).redSub(o)) : (a = this.z.redSqr(), d = o.redSub(a).redISub(a), e = n.redSub(i).redISub(c).redMul(d), t = o.redMul(f.redSub(c)), r = o.redMul(d))
                } else f = i.redAdd(c), a = this.curve._mulC(this.z).redSqr(), d = f.redSub(a).redSub(a), e = this.curve._mulC(n.redISub(f)).redMul(d), t = this.curve._mulC(f).redMul(i.redISub(c)), r = f.redMul(d);
                return this.curve.point(e, t, r)
            }, Point.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
            }, Point.prototype._extAdd = function(e) {
                var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                    r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                    f = this.t.redMul(this.curve.dd).redMul(e.t),
                    a = this.z.redMul(e.z.redAdd(e.z)),
                    d = r.redSub(t),
                    n = a.redSub(f),
                    i = a.redAdd(f),
                    c = r.redAdd(t),
                    o = d.redMul(n),
                    s = i.redMul(c),
                    b = d.redMul(c),
                    u = n.redMul(i);
                return this.curve.point(o, s, u, b)
            }, Point.prototype._projAdd = function(e) {
                var t, r, f = this.z.redMul(e.z),
                    a = f.redSqr(),
                    d = this.x.redMul(e.x),
                    n = this.y.redMul(e.y),
                    i = this.curve.d.redMul(d).redMul(n),
                    c = a.redSub(i),
                    o = a.redAdd(i),
                    s = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(d).redISub(n),
                    b = f.redMul(c).redMul(s);
                return this.curve.twisted ? (t = f.redMul(o).redMul(n.redSub(this.curve._mulA(d))), r = c.redMul(o)) : (t = f.redMul(o).redMul(n.redSub(d)), r = this.curve._mulC(c).redMul(o)), this.curve.point(b, t, r)
            }, Point.prototype.add = function(e) {
                return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
            }, Point.prototype.mul = function(e) {
                return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
            }, Point.prototype.mulAdd = function(e, t, r) {
                return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
            }, Point.prototype.jmulAdd = function(e, t, r) {
                return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
            }, Point.prototype.normalize = function() {
                if (this.zOne) return this;
                var e = this.z.redInvm();
                return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
            }, Point.prototype.neg = function() {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
            }, Point.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }, Point.prototype.getY = function() {
                return this.normalize(), this.y.fromRed()
            }, Point.prototype.eq = function(e) {
                return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
            }, Point.prototype.eqXToP = function(e) {
                var t = e.toRed(this.curve.red).redMul(this.z);
                if (0 === this.x.cmp(t)) return !0;
                for (var r = e.clone(), f = this.curve.redN.redMul(this.z);;) {
                    if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
                    if (t.redIAdd(f), 0 === this.x.cmp(t)) return !0
                }
            }, Point.prototype.toP = Point.prototype.normalize, Point.prototype.mixedAdd = Point.prototype.add
        },
        2564: function(e, t) {
            e.exports = {
                doubles: {
                    step: 4,
                    points: [
                        ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                        ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                        ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                        ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                        ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                        ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                        ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                        ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                        ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                        ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                        ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                        ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                        ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                        ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                        ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                        ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                        ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                        ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                        ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                        ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                        ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                        ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                        ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                        ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                        ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                        ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                        ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                        ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                        ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                        ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                        ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                        ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                        ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                        ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                        ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                        ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                        ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                        ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                        ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                        ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                        ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                        ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                        ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                        ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                        ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                        ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                        ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                        ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                        ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                        ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                        ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                        ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                        ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                        ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                        ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                        ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                        ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                        ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                        ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                        ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                        ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                        ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                        ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                        ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                        ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                    ]
                },
                naf: {
                    wnd: 7,
                    points: [
                        ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                        ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                        ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                        ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                        ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                        ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                        ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                        ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                        ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                        ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                        ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                        ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                        ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                        ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                        ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                        ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                        ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                        ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                        ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                        ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                        ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                        ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                        ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                        ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                        ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                        ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                        ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                        ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                        ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                        ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                        ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                        ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                        ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                        ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                        ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                        ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                        ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                        ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                        ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                        ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                        ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                        ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                        ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                        ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                        ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                        ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                        ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                        ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                        ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                        ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                        ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                        ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                        ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                        ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                        ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                        ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                        ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                        ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                        ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                        ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                        ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                        ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                        ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                        ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                        ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                        ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                        ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                        ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                        ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                        ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                        ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                        ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                        ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                        ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                        ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                        ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                        ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                        ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                        ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                        ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                        ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                        ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                        ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                        ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                        ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                        ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                        ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                        ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                        ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                        ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                        ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                        ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                        ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                        ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                        ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                        ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                        ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                        ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                        ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                        ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                        ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                        ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                        ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                        ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                        ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                        ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                        ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                        ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                        ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                        ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                        ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                        ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                        ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                        ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                        ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                        ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                        ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                        ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                        ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                        ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                        ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                        ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                        ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                        ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                        ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                        ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                        ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                    ]
                }
            }
        },
        2565: function(e, t, r) {
            "use strict";
            var f = r(35),
                a = r(935),
                d = r(194),
                n = r(962),
                i = r(932),
                c = d.assert,
                o = r(2566),
                s = r(2567);

            function b(e) {
                if (!(this instanceof b)) return new b(e);
                "string" == typeof e && (c(Object.prototype.hasOwnProperty.call(n, e), "Unknown curve " + e), e = n[e]), e instanceof n.PresetCurve && (e = {
                    curve: e
                }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
            }
            e.exports = b, b.prototype.keyPair = function(e) {
                return new o(this, e)
            }, b.prototype.keyFromPrivate = function(e, t) {
                return o.fromPrivate(this, e, t)
            }, b.prototype.keyFromPublic = function(e, t) {
                return o.fromPublic(this, e, t)
            }, b.prototype.genKeyPair = function(e) {
                e || (e = {});
                for (var t = new a({
                        hash: this.hash,
                        pers: e.pers,
                        persEnc: e.persEnc || "utf8",
                        entropy: e.entropy || i(this.hash.hmacStrength),
                        entropyEnc: e.entropy && e.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), d = this.n.sub(new f(2));;) {
                    var n = new f(t.generate(r));
                    if (!(n.cmp(d) > 0)) return n.iaddn(1), this.keyFromPrivate(n)
                }
            }, b.prototype._truncateToN = function(e, t) {
                var r = 8 * e.byteLength() - this.n.bitLength();
                return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
            }, b.prototype.sign = function(e, t, r, d) {
                "object" == typeof r && (d = r, r = null), d || (d = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new f(e, 16));
                for (var n = this.n.byteLength(), i = t.getPrivate().toArray("be", n), c = e.toArray("be", n), o = new a({
                        hash: this.hash,
                        entropy: i,
                        nonce: c,
                        pers: d.pers,
                        persEnc: d.persEnc || "utf8"
                    }), b = this.n.sub(new f(1)), u = 0;; u++) {
                    var h = d.k ? d.k(u) : new f(o.generate(this.n.byteLength()));
                    if (!((h = this._truncateToN(h, !0)).cmpn(1) <= 0 || h.cmp(b) >= 0)) {
                        var p = this.g.mul(h);
                        if (!p.isInfinity()) {
                            var l = p.getX(),
                                y = l.umod(this.n);
                            if (0 !== y.cmpn(0)) {
                                var v = h.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));
                                if (0 !== (v = v.umod(this.n)).cmpn(0)) {
                                    var m = (p.getY().isOdd() ? 1 : 0) | (0 !== l.cmp(y) ? 2 : 0);
                                    return d.canonical && v.cmp(this.nh) > 0 && (v = this.n.sub(v), m ^= 1), new s({
                                        r: y,
                                        s: v,
                                        recoveryParam: m
                                    })
                                }
                            }
                        }
                    }
                }
            }, b.prototype.verify = function(e, t, r, a) {
                e = this._truncateToN(new f(e, 16)), r = this.keyFromPublic(r, a);
                var d = (t = new s(t, "hex")).r,
                    n = t.s;
                if (d.cmpn(1) < 0 || d.cmp(this.n) >= 0) return !1;
                if (n.cmpn(1) < 0 || n.cmp(this.n) >= 0) return !1;
                var i, c = n.invm(this.n),
                    o = c.mul(e).umod(this.n),
                    b = c.mul(d).umod(this.n);
                return this.curve._maxwellTrick ? !(i = this.g.jmulAdd(o, r.getPublic(), b)).isInfinity() && i.eqXToP(d) : !(i = this.g.mulAdd(o, r.getPublic(), b)).isInfinity() && 0 === i.getX().umod(this.n).cmp(d)
            }, b.prototype.recoverPubKey = function(e, t, r, a) {
                c((3 & r) === r, "The recovery param is more than two bits"), t = new s(t, a);
                var d = this.n,
                    n = new f(e),
                    i = t.r,
                    o = t.s,
                    b = 1 & r,
                    u = r >> 1;
                if (i.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw new Error("Unable to find sencond key candinate");
                i = u ? this.curve.pointFromX(i.add(this.curve.n), b) : this.curve.pointFromX(i, b);
                var h = t.r.invm(d),
                    p = d.sub(n).mul(h).umod(d),
                    l = o.mul(h).umod(d);
                return this.g.mulAdd(p, i, l)
            }, b.prototype.getKeyRecoveryParam = function(e, t, r, f) {
                if (null !== (t = new s(t, f)).recoveryParam) return t.recoveryParam;
                for (var a = 0; a < 4; a++) {
                    var d;
                    try {
                        d = this.recoverPubKey(e, t, a)
                    } catch (e) {
                        continue
                    }
                    if (d.eq(r)) return a
                }
                throw new Error("Unable to find valid recovery factor")
            }
        },
        2566: function(e, t, r) {
            "use strict";
            var f = r(35),
                a = r(194).assert;

            function d(e, t) {
                this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
            }
            e.exports = d, d.fromPublic = function(e, t, r) {
                return t instanceof d ? t : new d(e, {
                    pub: t,
                    pubEnc: r
                })
            }, d.fromPrivate = function(e, t, r) {
                return t instanceof d ? t : new d(e, {
                    priv: t,
                    privEnc: r
                })
            }, d.prototype.validate = function() {
                var e = this.getPublic();
                return e.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, d.prototype.getPublic = function(e, t) {
                return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub
            }, d.prototype.getPrivate = function(e) {
                return "hex" === e ? this.priv.toString(16, 2) : this.priv
            }, d.prototype._importPrivate = function(e, t) {
                this.priv = new f(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, d.prototype._importPublic = function(e, t) {
                if (e.x || e.y) return "mont" === this.ec.curve.type ? a(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || a(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
                this.pub = this.ec.curve.decodePoint(e, t)
            }, d.prototype.derive = function(e) {
                return e.validate() || a(e.validate(), "public point not validated"), e.mul(this.priv).getX()
            }, d.prototype.sign = function(e, t, r) {
                return this.ec.sign(e, this, t, r)
            }, d.prototype.verify = function(e, t) {
                return this.ec.verify(e, t, this)
            }, d.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            }
        },
        2567: function(e, t, r) {
            "use strict";
            var f = r(35),
                a = r(194),
                d = a.assert;

            function n(e, t) {
                if (e instanceof n) return e;
                this._importDER(e, t) || (d(e.r && e.s, "Signature without r or s"), this.r = new f(e.r, 16), this.s = new f(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
            }

            function i() {
                this.place = 0
            }

            function c(e, t) {
                var r = e[t.place++];
                if (!(128 & r)) return r;
                var f = 15 & r;
                if (0 === f || f > 4) return !1;
                for (var a = 0, d = 0, n = t.place; d < f; d++, n++) a <<= 8, a |= e[n], a >>>= 0;
                return !(a <= 127) && (t.place = n, a)
            }

            function o(e) {
                for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
                return 0 === t ? e : e.slice(t)
            }

            function s(e, t) {
                if (t < 128) e.push(t);
                else {
                    var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                    for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
                    e.push(t)
                }
            }
            e.exports = n, n.prototype._importDER = function(e, t) {
                e = a.toArray(e, t);
                var r = new i;
                if (48 !== e[r.place++]) return !1;
                var d = c(e, r);
                if (!1 === d) return !1;
                if (d + r.place !== e.length) return !1;
                if (2 !== e[r.place++]) return !1;
                var n = c(e, r);
                if (!1 === n) return !1;
                var o = e.slice(r.place, n + r.place);
                if (r.place += n, 2 !== e[r.place++]) return !1;
                var s = c(e, r);
                if (!1 === s) return !1;
                if (e.length !== s + r.place) return !1;
                var b = e.slice(r.place, s + r.place);
                if (0 === o[0]) {
                    if (!(128 & o[1])) return !1;
                    o = o.slice(1)
                }
                if (0 === b[0]) {
                    if (!(128 & b[1])) return !1;
                    b = b.slice(1)
                }
                return this.r = new f(o), this.s = new f(b), this.recoveryParam = null, !0
            }, n.prototype.toDER = function(e) {
                var t = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = o(t), r = o(r); !(r[0] || 128 & r[1]);) r = r.slice(1);
                var f = [2];
                s(f, t.length), (f = f.concat(t)).push(2), s(f, r.length);
                var d = f.concat(r),
                    n = [48];
                return s(n, d.length), n = n.concat(d), a.encode(n, e)
            }
        },
        2568: function(e, t, r) {
            "use strict";
            var f = r(141),
                a = r(962),
                d = r(194),
                n = d.assert,
                i = d.parseBytes,
                c = r(2569),
                o = r(2570);

            function s(e) {
                if (n("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof s)) return new s(e);
                e = a[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = f.sha512
            }
            e.exports = s, s.prototype.sign = function(e, t) {
                e = i(e);
                var r = this.keyFromSecret(t),
                    f = this.hashInt(r.messagePrefix(), e),
                    a = this.g.mul(f),
                    d = this.encodePoint(a),
                    n = this.hashInt(d, r.pubBytes(), e).mul(r.priv()),
                    c = f.add(n).umod(this.curve.n);
                return this.makeSignature({
                    R: a,
                    S: c,
                    Rencoded: d
                })
            }, s.prototype.verify = function(e, t, r) {
                e = i(e), t = this.makeSignature(t);
                var f = this.keyFromPublic(r),
                    a = this.hashInt(t.Rencoded(), f.pubBytes(), e),
                    d = this.g.mul(t.S());
                return t.R().add(f.pub().mul(a)).eq(d)
            }, s.prototype.hashInt = function() {
                for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
                return d.intFromLE(e.digest()).umod(this.curve.n)
            }, s.prototype.keyFromPublic = function(e) {
                return c.fromPublic(this, e)
            }, s.prototype.keyFromSecret = function(e) {
                return c.fromSecret(this, e)
            }, s.prototype.makeSignature = function(e) {
                return e instanceof o ? e : new o(this, e)
            }, s.prototype.encodePoint = function(e) {
                var t = e.getY().toArray("le", this.encodingLength);
                return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t
            }, s.prototype.decodePoint = function(e) {
                var t = (e = d.parseBytes(e)).length - 1,
                    r = e.slice(0, t).concat(-129 & e[t]),
                    f = 0 != (128 & e[t]),
                    a = d.intFromLE(r);
                return this.curve.pointFromY(a, f)
            }, s.prototype.encodeInt = function(e) {
                return e.toArray("le", this.encodingLength)
            }, s.prototype.decodeInt = function(e) {
                return d.intFromLE(e)
            }, s.prototype.isPoint = function(e) {
                return e instanceof this.pointClass
            }
        },
        2569: function(e, t, r) {
            "use strict";
            var f = r(194),
                a = f.assert,
                d = f.parseBytes,
                n = f.cachedProperty;

            function i(e, t) {
                this.eddsa = e, this._secret = d(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = d(t.pub)
            }
            i.fromPublic = function(e, t) {
                return t instanceof i ? t : new i(e, {
                    pub: t
                })
            }, i.fromSecret = function(e, t) {
                return t instanceof i ? t : new i(e, {
                    secret: t
                })
            }, i.prototype.secret = function() {
                return this._secret
            }, n(i, "pubBytes", (function() {
                return this.eddsa.encodePoint(this.pub())
            })), n(i, "pub", (function() {
                return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
            })), n(i, "privBytes", (function() {
                var e = this.eddsa,
                    t = this.hash(),
                    r = e.encodingLength - 1,
                    f = t.slice(0, e.encodingLength);
                return f[0] &= 248, f[r] &= 127, f[r] |= 64, f
            })), n(i, "priv", (function() {
                return this.eddsa.decodeInt(this.privBytes())
            })), n(i, "hash", (function() {
                return this.eddsa.hash().update(this.secret()).digest()
            })), n(i, "messagePrefix", (function() {
                return this.hash().slice(this.eddsa.encodingLength)
            })), i.prototype.sign = function(e) {
                return a(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
            }, i.prototype.verify = function(e, t) {
                return this.eddsa.verify(e, t, this)
            }, i.prototype.getSecret = function(e) {
                return a(this._secret, "KeyPair is public only"), f.encode(this.secret(), e)
            }, i.prototype.getPublic = function(e) {
                return f.encode(this.pubBytes(), e)
            }, e.exports = i
        },
        2570: function(e, t, r) {
            "use strict";
            var f = r(35),
                a = r(194),
                d = a.assert,
                n = a.cachedProperty,
                i = a.parseBytes;

            function c(e, t) {
                this.eddsa = e, "object" != typeof t && (t = i(t)), Array.isArray(t) && (t = {
                    R: t.slice(0, e.encodingLength),
                    S: t.slice(e.encodingLength)
                }), d(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof f && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
            }
            n(c, "S", (function() {
                return this.eddsa.decodeInt(this.Sencoded())
            })), n(c, "R", (function() {
                return this.eddsa.decodePoint(this.Rencoded())
            })), n(c, "Rencoded", (function() {
                return this.eddsa.encodePoint(this.R())
            })), n(c, "Sencoded", (function() {
                return this.eddsa.encodeInt(this.S())
            })), c.prototype.toBytes = function() {
                return this.Rencoded().concat(this.Sencoded())
            }, c.prototype.toHex = function() {
                return a.encode(this.toBytes(), "hex").toUpperCase()
            }, e.exports = c
        },
        376: function(e, t, r) {
            var f, a = r(2539),
                d = r(1469),
                n = r(2541),
                i = r(2542),
                c = r(2543);
            "undefined" != typeof ArrayBuffer && (f = r(2544));
            var o = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
                s = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
                b = o || s;
            t.protocol = 3;
            var u = t.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                },
                h = a(u),
                p = {
                    type: "error",
                    data: "parser error"
                },
                l = r(2545);

            function y(e, t, r) {
                for (var f = new Array(e.length), a = i(e.length, r), d = function(e, r, a) {
                        t(r, (function(t, r) {
                            f[e] = r, a(t, f)
                        }))
                    }, n = 0; n < e.length; n++) d(n, e[n], a)
            }
            t.encodePacket = function(e, r, f, a) {
                "function" == typeof r && (a = r, r = !1), "function" == typeof f && (a = f, f = null);
                var d = void 0 === e.data ? void 0 : e.data.buffer || e.data;
                if ("undefined" != typeof ArrayBuffer && d instanceof ArrayBuffer) return function(e, r, f) {
                    if (!r) return t.encodeBase64Packet(e, f);
                    var a = e.data,
                        d = new Uint8Array(a),
                        n = new Uint8Array(1 + a.byteLength);
                    n[0] = u[e.type];
                    for (var i = 0; i < d.length; i++) n[i + 1] = d[i];
                    return f(n.buffer)
                }(e, r, a);
                if (void 0 !== l && d instanceof l) return function(e, r, f) {
                    if (!r) return t.encodeBase64Packet(e, f);
                    if (b) return function(e, r, f) {
                        if (!r) return t.encodeBase64Packet(e, f);
                        var a = new FileReader;
                        return a.onload = function() {
                            t.encodePacket({
                                type: e.type,
                                data: a.result
                            }, r, !0, f)
                        }, a.readAsArrayBuffer(e.data)
                    }(e, r, f);
                    var a = new Uint8Array(1);
                    a[0] = u[e.type];
                    var d = new l([a.buffer, e.data]);
                    return f(d)
                }(e, r, a);
                if (d && d.base64) return function(e, r) {
                    var f = "b" + t.packets[e.type] + e.data.data;
                    return r(f)
                }(e, a);
                var n = u[e.type];
                return void 0 !== e.data && (n += f ? c.encode(String(e.data), {
                    strict: !1
                }) : String(e.data)), a("" + n)
            }, t.encodeBase64Packet = function(e, r) {
                var f, a = "b" + t.packets[e.type];
                if (void 0 !== l && e.data instanceof l) {
                    var d = new FileReader;
                    return d.onload = function() {
                        var e = d.result.split(",")[1];
                        r(a + e)
                    }, d.readAsDataURL(e.data)
                }
                try {
                    f = String.fromCharCode.apply(null, new Uint8Array(e.data))
                } catch (t) {
                    for (var n = new Uint8Array(e.data), i = new Array(n.length), c = 0; c < n.length; c++) i[c] = n[c];
                    f = String.fromCharCode.apply(null, i)
                }
                return a += btoa(f), r(a)
            }, t.decodePacket = function(e, r, f) {
                if (void 0 === e) return p;
                if ("string" == typeof e) {
                    if ("b" === e.charAt(0)) return t.decodeBase64Packet(e.substr(1), r);
                    if (f && !1 === (e = function(e) {
                            try {
                                e = c.decode(e, {
                                    strict: !1
                                })
                            } catch (e) {
                                return !1
                            }
                            return e
                        }(e))) return p;
                    var a = e.charAt(0);
                    return Number(a) == a && h[a] ? e.length > 1 ? {
                        type: h[a],
                        data: e.substring(1)
                    } : {
                        type: h[a]
                    } : p
                }
                a = new Uint8Array(e)[0];
                var d = n(e, 1);
                return l && "blob" === r && (d = new l([d])), {
                    type: h[a],
                    data: d
                }
            }, t.decodeBase64Packet = function(e, t) {
                var r = h[e.charAt(0)];
                if (!f) return {
                    type: r,
                    data: {
                        base64: !0,
                        data: e.substr(1)
                    }
                };
                var a = f.decode(e.substr(1));
                return "blob" === t && l && (a = new l([a])), {
                    type: r,
                    data: a
                }
            }, t.encodePayload = function(e, r, f) {
                "function" == typeof r && (f = r, r = null);
                var a = d(e);
                if (r && a) return l && !b ? t.encodePayloadAsBlob(e, f) : t.encodePayloadAsArrayBuffer(e, f);
                if (!e.length) return f("0:");
                y(e, (function(e, f) {
                    t.encodePacket(e, !!a && r, !1, (function(e) {
                        f(null, function(e) {
                            return e.length + ":" + e
                        }(e))
                    }))
                }), (function(e, t) {
                    return f(t.join(""))
                }))
            }, t.decodePayload = function(e, r, f) {
                if ("string" != typeof e) return t.decodePayloadAsBinary(e, r, f);
                var a;
                if ("function" == typeof r && (f = r, r = null), "" === e) return f(p, 0, 1);
                for (var d, n, i = "", c = 0, o = e.length; c < o; c++) {
                    var s = e.charAt(c);
                    if (":" === s) {
                        if ("" === i || i != (d = Number(i))) return f(p, 0, 1);
                        if (i != (n = e.substr(c + 1, d)).length) return f(p, 0, 1);
                        if (n.length) {
                            if (a = t.decodePacket(n, r, !1), p.type === a.type && p.data === a.data) return f(p, 0, 1);
                            if (!1 === f(a, c + d, o)) return
                        }
                        c += d, i = ""
                    } else i += s
                }
                return "" !== i ? f(p, 0, 1) : void 0
            }, t.encodePayloadAsArrayBuffer = function(e, r) {
                if (!e.length) return r(new ArrayBuffer(0));
                y(e, (function(e, r) {
                    t.encodePacket(e, !0, !0, (function(e) {
                        return r(null, e)
                    }))
                }), (function(e, t) {
                    var f = t.reduce((function(e, t) {
                            var r;
                            return e + (r = "string" == typeof t ? t.length : t.byteLength).toString().length + r + 2
                        }), 0),
                        a = new Uint8Array(f),
                        d = 0;
                    return t.forEach((function(e) {
                        var t = "string" == typeof e,
                            r = e;
                        if (t) {
                            for (var f = new Uint8Array(e.length), n = 0; n < e.length; n++) f[n] = e.charCodeAt(n);
                            r = f.buffer
                        }
                        a[d++] = t ? 0 : 1;
                        var i = r.byteLength.toString();
                        for (n = 0; n < i.length; n++) a[d++] = parseInt(i[n]);
                        a[d++] = 255;
                        for (f = new Uint8Array(r), n = 0; n < f.length; n++) a[d++] = f[n]
                    })), r(a.buffer)
                }))
            }, t.encodePayloadAsBlob = function(e, r) {
                y(e, (function(e, r) {
                    t.encodePacket(e, !0, !0, (function(e) {
                        var t = new Uint8Array(1);
                        if (t[0] = 1, "string" == typeof e) {
                            for (var f = new Uint8Array(e.length), a = 0; a < e.length; a++) f[a] = e.charCodeAt(a);
                            e = f.buffer, t[0] = 0
                        }
                        var d = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(),
                            n = new Uint8Array(d.length + 1);
                        for (a = 0; a < d.length; a++) n[a] = parseInt(d[a]);
                        if (n[d.length] = 255, l) {
                            var i = new l([t.buffer, n.buffer, e]);
                            r(null, i)
                        }
                    }))
                }), (function(e, t) {
                    return r(new l(t))
                }))
            }, t.decodePayloadAsBinary = function(e, r, f) {
                "function" == typeof r && (f = r, r = null);
                for (var a = e, d = []; a.byteLength > 0;) {
                    for (var i = new Uint8Array(a), c = 0 === i[0], o = "", s = 1; 255 !== i[s]; s++) {
                        if (o.length > 310) return f(p, 0, 1);
                        o += i[s]
                    }
                    a = n(a, 2 + o.length), o = parseInt(o);
                    var b = n(a, 0, o);
                    if (c) try {
                        b = String.fromCharCode.apply(null, new Uint8Array(b))
                    } catch (e) {
                        var u = new Uint8Array(b);
                        b = "";
                        for (s = 0; s < u.length; s++) b += String.fromCharCode(u[s])
                    }
                    d.push(b), a = n(a, o)
                }
                var h = d.length;
                d.forEach((function(e, a) {
                    f(t.decodePacket(e, r, !0), a, h)
                }))
            }
        },
        5286: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f, a = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var f = t[r];
                            f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(e, f.key, f)
                        }
                    }
                    return function(t, r, f) {
                        return r && e(t.prototype, r), f && e(t, f), t
                    }
                }(),
                d = r(5287),
                n = (f = d) && f.__esModule ? f : {
                    default: f
                },
                i = r(5389);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            r(298).net;
            var o = function() {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        f = r.userAgent,
                        a = void 0 === f ? "" : f,
                        d = r.debug,
                        n = void 0 !== d && d,
                        i = r.version,
                        o = void 0 === i ? 1 : i;
                    c(this, e), this.globalDebug = n, this.globalUserAgent = a, this.globalBaseURL = "https://www.google-analytics.com", this.globalDebugURL = "/debug", this.globalCollectURL = "/collect", this.globalBatchURL = "/batch", this.globalTrackingID = t, this.globalVersion = o, this.customParams = {}
                }
                return a(e, [{
                    key: "set",
                    value: function(e, t) {
                        null !== t ? this.customParams[e] = t : delete this.customParams[e]
                    }
                }, {
                    key: "pageview",
                    value: function(e, t, r, f) {
                        var a = {
                            dh: e,
                            dp: t,
                            dt: r
                        };
                        return this.send("pageview", a, f)
                    }
                }, {
                    key: "event",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            f = r.evLabel,
                            a = r.evValue,
                            d = r.clientID,
                            n = {
                                ec: e,
                                ea: t
                            };
                        return f && (n.el = f), a && (n.ev = a), this.send("event", n, d)
                    }
                }, {
                    key: "screen",
                    value: function(e, t, r, f, a, d) {
                        var n = {
                            an: e,
                            av: t,
                            aid: r,
                            aiid: f,
                            cd: a
                        };
                        return this.send("screenview", n, d)
                    }
                }, {
                    key: "transaction",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.trnAffil,
                            f = t.trnRev,
                            a = t.trnShip,
                            d = t.trnTax,
                            n = t.currCode,
                            i = arguments[2],
                            c = {
                                ti: e
                            };
                        return r && (c.ta = r), f && (c.tr = f), a && (c.ts = a), d && (c.tt = d), n && (c.cu = n), this.send("transaction", c, i)
                    }
                }, {
                    key: "social",
                    value: function(e, t, r, f) {
                        var a = {
                            sa: e,
                            sn: t,
                            st: r
                        };
                        return this.send("social", a, f)
                    }
                }, {
                    key: "exception",
                    value: function(e, t, r) {
                        var f = {
                            exd: e,
                            exf: t
                        };
                        return this.send("exception", f, r)
                    }
                }, {
                    key: "refund",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Ecommerce",
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Refund",
                            f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                            d = a.prdID,
                            n = a.prdQty,
                            i = arguments[5],
                            c = {
                                ec: t,
                                ea: r,
                                ni: f,
                                ti: e,
                                pa: "refund"
                            };
                        return d && (c.pr1id = d), n && (c.pr1qt = n), this.send("event", c, i)
                    }
                }, {
                    key: "purchase",
                    value: function(e, t, r, f) {
                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                            d = a.trnAffil,
                            n = a.trnRev,
                            i = a.trnTax,
                            c = a.trnShip,
                            o = a.trnCoupon,
                            s = a.prdID,
                            b = a.prdName,
                            u = a.prdCtg,
                            h = a.prdBrand,
                            p = a.prdVar,
                            l = a.prdPos,
                            y = arguments[5],
                            v = {
                                dh: e,
                                dp: t,
                                dt: r,
                                ti: f,
                                pa: "purchase"
                            };
                        return d && (v.ta = d), n && (v.tr = n), i && (v.tt = i), c && (v.ts = c), o && (v.tcc = o), s && (v.pr1id = s), b && (v.pr1nm = b), u && (v.pr1ca = u), h && (v.pr1br = h), p && (v.pr1va = p), l && (v.pr1p = l), this.send("pageview", v, y)
                    }
                }, {
                    key: "checkout",
                    value: function(e, t, r, f, a) {
                        var d = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                            n = d.prdID,
                            i = d.prdName,
                            c = d.prdCtg,
                            o = d.prdBrand,
                            s = d.prdVar,
                            b = d.prdPrice,
                            u = d.prdQty,
                            h = arguments[6],
                            p = {
                                dh: e,
                                dp: t,
                                dt: r,
                                pa: "checkout",
                                cos: f,
                                col: a
                            };
                        return n && (p.pr1id = n), i && (p.pr1nm = i), c && (p.pr1ca = c), o && (p.pr1br = o), s && (p.pr1va = s), b && (p.pr1pr = b), u && (p.pr1qt = u), this.send("pageview", p, h)
                    }
                }, {
                    key: "checkoutOpt",
                    value: function(e, t, r, f, a) {
                        var d = {
                            ec: e,
                            ea: t,
                            pa: "checkout_option"
                        };
                        return r && (d.cos = r), f && (d.col = f), this.send("event", d, a)
                    }
                }, {
                    key: "promoImp",
                    value: function(e, t, r) {
                        var f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            a = f.promoID,
                            d = f.promoName,
                            n = f.promoCrt,
                            i = f.promoPos,
                            c = arguments[4],
                            o = {
                                dh: e,
                                dp: t,
                                dt: r
                            };
                        return a && (o.promo1id = a), d && (o.promo1nm = d), n && (o.promo1cr = n), i && (o.promo1ps = i), this.send("pageview", o, c)
                    }
                }, {
                    key: "promoCk",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            f = r.evLabel,
                            a = r.promoID,
                            d = r.promoName,
                            n = r.promoCrt,
                            i = r.promoPos,
                            c = arguments[3],
                            o = {
                                ec: e,
                                ea: t,
                                promos: "click"
                            };
                        return f && (o.el = f), a && (o.promo1id = a), d && (o.promo1nm = d), n && (o.promo1cr = n), i && (o.promo1ps = i), this.send("event", o, c)
                    }
                }, {
                    key: "item",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            f = r.itemPrice,
                            a = r.itemQty,
                            d = r.itemSku,
                            n = r.itemVariation,
                            i = r.currCode,
                            c = arguments[3],
                            o = {
                                ti: e,
                                in: t
                            };
                        return f && (o.ip = f), a && (o.iq = a), d && (o.ic = d), n && (o.iv = n), i && (o.cu = i), this.send("item", o, c)
                    }
                }, {
                    key: "timingTrk",
                    value: function(e, t, r) {
                        var f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            a = f.timingLbl,
                            d = f.dns,
                            n = f.pageDownTime,
                            i = f.redirTime,
                            c = f.tcpConnTime,
                            o = f.serverResTime,
                            s = arguments[4],
                            b = {
                                utc: e,
                                utv: t,
                                utt: r
                            };
                        return a && (b.url = a), d && (b.dns = d), n && (b.pdt = n), i && (b.rrt = i), c && (b.tcp = c), o && (b.srt = o), this.send("timing", b, s)
                    }
                }, {
                    key: "send",
                    value: function(e, t, r) {
                        var f = this;
                        return new Promise((function(a, d) {
                            var c = {
                                v: f.globalVersion,
                                tid: f.globalTrackingID,
                                cid: r || (0, i.v4)(),
                                t: e
                            };
                            t && Object.assign(c, t), Object.keys(f.customParams).length > 0 && Object.assign(c, f.customParams);
                            var o = "" + f.globalBaseURL + f.globalCollectURL;
                            f.globalDebug && (o = "" + f.globalBaseURL + f.globalDebugURL + f.globalCollectURL);
                            var s = {
                                url: o,
                                form: c
                            };
                            return "" !== f.globalUserAgent && (s.headers = {
                                "User-Agent": f.globalUserAgent
                            }), n.default.post(s, (function(e, t, r) {
                                if (e) return d(e);
                                var n = {};
                                return r && "image/gif" !== t.headers["content-type"] && (n = JSON.parse(r)), 200 === t.statusCode ? f.globalDebug ? n.hitParsingResult[0].valid ? a({
                                    clientID: c.cid
                                }) : d(n) : a({
                                    clientID: c.cid
                                }) : "image/gif" !== t.headers["content-type"] ? d(n) : d(r)
                            }))
                        }))
                    }
                }]), e
            }();
            t.default = o
        },
        5389: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "v1", (function() {
                return h
            })), r.d(t, "v3", (function() {
                return S
            })), r.d(t, "v4", (function() {
                return A
            })), r.d(t, "v5", (function() {
                return I
            }));
            var f = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
                a = new Uint8Array(16);

            function d() {
                if (!f) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return f(a)
            }
            for (var n = [], i = 0; i < 256; ++i) n[i] = (i + 256).toString(16).substr(1);
            var c, o, s = function(e, t) {
                    var r = t || 0,
                        f = n;
                    return [f[e[r++]], f[e[r++]], f[e[r++]], f[e[r++]], "-", f[e[r++]], f[e[r++]], "-", f[e[r++]], f[e[r++]], "-", f[e[r++]], f[e[r++]], "-", f[e[r++]], f[e[r++]], f[e[r++]], f[e[r++]], f[e[r++]], f[e[r++]]].join("")
                },
                b = 0,
                u = 0;
            var h = function(e, t, r) {
                var f = t && r || 0,
                    a = t || [],
                    n = (e = e || {}).node || c,
                    i = void 0 !== e.clockseq ? e.clockseq : o;
                if (null == n || null == i) {
                    var h = e.random || (e.rng || d)();
                    null == n && (n = c = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]), null == i && (i = o = 16383 & (h[6] << 8 | h[7]))
                }
                var p = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                    l = void 0 !== e.nsecs ? e.nsecs : u + 1,
                    y = p - b + (l - u) / 1e4;
                if (y < 0 && void 0 === e.clockseq && (i = i + 1 & 16383), (y < 0 || p > b) && void 0 === e.nsecs && (l = 0), l >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                b = p, u = l, o = i;
                var v = (1e4 * (268435455 & (p += 122192928e5)) + l) % 4294967296;
                a[f++] = v >>> 24 & 255, a[f++] = v >>> 16 & 255, a[f++] = v >>> 8 & 255, a[f++] = 255 & v;
                var m = p / 4294967296 * 1e4 & 268435455;
                a[f++] = m >>> 8 & 255, a[f++] = 255 & m, a[f++] = m >>> 24 & 15 | 16, a[f++] = m >>> 16 & 255, a[f++] = i >>> 8 | 128, a[f++] = 255 & i;
                for (var g = 0; g < 6; ++g) a[f + g] = n[g];
                return t || s(a)
            };
            var p = function(e, t, r) {
                var f = function(e, f, a, d) {
                    var n = a && d || 0;
                    if ("string" == typeof e && (e = function(e) {
                            e = unescape(encodeURIComponent(e));
                            for (var t = new Array(e.length), r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                            return t
                        }(e)), "string" == typeof f && (f = function(e) {
                            var t = [];
                            return e.replace(/[a-fA-F0-9]{2}/g, (function(e) {
                                t.push(parseInt(e, 16))
                            })), t
                        }(f)), !Array.isArray(e)) throw TypeError("value must be an array of bytes");
                    if (!Array.isArray(f) || 16 !== f.length) throw TypeError("namespace must be uuid string or an Array of 16 byte values");
                    var i = r(f.concat(e));
                    if (i[6] = 15 & i[6] | t, i[8] = 63 & i[8] | 128, a)
                        for (var c = 0; c < 16; ++c) a[n + c] = i[c];
                    return a || s(i)
                };
                try {
                    f.name = e
                } catch (e) {}
                return f.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", f.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", f
            };

            function l(e, t) {
                var r = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
            }

            function y(e, t, r, f, a, d) {
                return l((n = l(l(t, e), l(f, d))) << (i = a) | n >>> 32 - i, r);
                var n, i
            }

            function v(e, t, r, f, a, d, n) {
                return y(t & r | ~t & f, e, t, a, d, n)
            }

            function m(e, t, r, f, a, d, n) {
                return y(t & f | r & ~f, e, t, a, d, n)
            }

            function g(e, t, r, f, a, d, n) {
                return y(t ^ r ^ f, e, t, a, d, n)
            }

            function w(e, t, r, f, a, d, n) {
                return y(r ^ (t | ~f), e, t, a, d, n)
            }
            var S = p("v3", 48, (function(e) {
                if ("string" == typeof e) {
                    var t = unescape(encodeURIComponent(e));
                    e = new Array(t.length);
                    for (var r = 0; r < t.length; r++) e[r] = t.charCodeAt(r)
                }
                return function(e) {
                    var t, r, f, a = [],
                        d = 32 * e.length;
                    for (t = 0; t < d; t += 8) r = e[t >> 5] >>> t % 32 & 255, f = parseInt("0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r), 16), a.push(f);
                    return a
                }(function(e, t) {
                    var r, f, a, d, n;
                    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                    var i = 1732584193,
                        c = -271733879,
                        o = -1732584194,
                        s = 271733878;
                    for (r = 0; r < e.length; r += 16) f = i, a = c, d = o, n = s, i = v(i, c, o, s, e[r], 7, -680876936), s = v(s, i, c, o, e[r + 1], 12, -389564586), o = v(o, s, i, c, e[r + 2], 17, 606105819), c = v(c, o, s, i, e[r + 3], 22, -1044525330), i = v(i, c, o, s, e[r + 4], 7, -176418897), s = v(s, i, c, o, e[r + 5], 12, 1200080426), o = v(o, s, i, c, e[r + 6], 17, -1473231341), c = v(c, o, s, i, e[r + 7], 22, -45705983), i = v(i, c, o, s, e[r + 8], 7, 1770035416), s = v(s, i, c, o, e[r + 9], 12, -1958414417), o = v(o, s, i, c, e[r + 10], 17, -42063), c = v(c, o, s, i, e[r + 11], 22, -1990404162), i = v(i, c, o, s, e[r + 12], 7, 1804603682), s = v(s, i, c, o, e[r + 13], 12, -40341101), o = v(o, s, i, c, e[r + 14], 17, -1502002290), c = v(c, o, s, i, e[r + 15], 22, 1236535329), i = m(i, c, o, s, e[r + 1], 5, -165796510), s = m(s, i, c, o, e[r + 6], 9, -1069501632), o = m(o, s, i, c, e[r + 11], 14, 643717713), c = m(c, o, s, i, e[r], 20, -373897302), i = m(i, c, o, s, e[r + 5], 5, -701558691), s = m(s, i, c, o, e[r + 10], 9, 38016083), o = m(o, s, i, c, e[r + 15], 14, -660478335), c = m(c, o, s, i, e[r + 4], 20, -405537848), i = m(i, c, o, s, e[r + 9], 5, 568446438), s = m(s, i, c, o, e[r + 14], 9, -1019803690), o = m(o, s, i, c, e[r + 3], 14, -187363961), c = m(c, o, s, i, e[r + 8], 20, 1163531501), i = m(i, c, o, s, e[r + 13], 5, -1444681467), s = m(s, i, c, o, e[r + 2], 9, -51403784), o = m(o, s, i, c, e[r + 7], 14, 1735328473), c = m(c, o, s, i, e[r + 12], 20, -1926607734), i = g(i, c, o, s, e[r + 5], 4, -378558), s = g(s, i, c, o, e[r + 8], 11, -2022574463), o = g(o, s, i, c, e[r + 11], 16, 1839030562), c = g(c, o, s, i, e[r + 14], 23, -35309556), i = g(i, c, o, s, e[r + 1], 4, -1530992060), s = g(s, i, c, o, e[r + 4], 11, 1272893353), o = g(o, s, i, c, e[r + 7], 16, -155497632), c = g(c, o, s, i, e[r + 10], 23, -1094730640), i = g(i, c, o, s, e[r + 13], 4, 681279174), s = g(s, i, c, o, e[r], 11, -358537222), o = g(o, s, i, c, e[r + 3], 16, -722521979), c = g(c, o, s, i, e[r + 6], 23, 76029189), i = g(i, c, o, s, e[r + 9], 4, -640364487), s = g(s, i, c, o, e[r + 12], 11, -421815835), o = g(o, s, i, c, e[r + 15], 16, 530742520), c = g(c, o, s, i, e[r + 2], 23, -995338651), i = w(i, c, o, s, e[r], 6, -198630844), s = w(s, i, c, o, e[r + 7], 10, 1126891415), o = w(o, s, i, c, e[r + 14], 15, -1416354905), c = w(c, o, s, i, e[r + 5], 21, -57434055), i = w(i, c, o, s, e[r + 12], 6, 1700485571), s = w(s, i, c, o, e[r + 3], 10, -1894986606), o = w(o, s, i, c, e[r + 10], 15, -1051523), c = w(c, o, s, i, e[r + 1], 21, -2054922799), i = w(i, c, o, s, e[r + 8], 6, 1873313359), s = w(s, i, c, o, e[r + 15], 10, -30611744), o = w(o, s, i, c, e[r + 6], 15, -1560198380), c = w(c, o, s, i, e[r + 13], 21, 1309151649), i = w(i, c, o, s, e[r + 4], 6, -145523070), s = w(s, i, c, o, e[r + 11], 10, -1120210379), o = w(o, s, i, c, e[r + 2], 15, 718787259), c = w(c, o, s, i, e[r + 9], 21, -343485551), i = l(i, f), c = l(c, a), o = l(o, d), s = l(s, n);
                    return [i, c, o, s]
                }(function(e) {
                    var t, r = [];
                    for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
                    var f = 8 * e.length;
                    for (t = 0; t < f; t += 8) r[t >> 5] |= (255 & e[t / 8]) << t % 32;
                    return r
                }(e), 8 * e.length))
            }));
            var A = function(e, t, r) {
                var f = t && r || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                var a = (e = e || {}).random || (e.rng || d)();
                if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                    for (var n = 0; n < 16; ++n) t[f + n] = a[n];
                return t || s(a)
            };

            function x(e, t, r, f) {
                switch (e) {
                    case 0:
                        return t & r ^ ~t & f;
                    case 1:
                        return t ^ r ^ f;
                    case 2:
                        return t & r ^ t & f ^ r & f;
                    case 3:
                        return t ^ r ^ f
                }
            }

            function C(e, t) {
                return e << t | e >>> 32 - t
            }
            var I = p("v5", 80, (function(e) {
                var t = [1518500249, 1859775393, 2400959708, 3395469782],
                    r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                if ("string" == typeof e) {
                    var f = unescape(encodeURIComponent(e));
                    e = new Array(f.length);
                    for (var a = 0; a < f.length; a++) e[a] = f.charCodeAt(a)
                }
                e.push(128);
                var d = e.length / 4 + 2,
                    n = Math.ceil(d / 16),
                    i = new Array(n);
                for (a = 0; a < n; a++) {
                    i[a] = new Array(16);
                    for (var c = 0; c < 16; c++) i[a][c] = e[64 * a + 4 * c] << 24 | e[64 * a + 4 * c + 1] << 16 | e[64 * a + 4 * c + 2] << 8 | e[64 * a + 4 * c + 3]
                }
                for (i[n - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), i[n - 1][14] = Math.floor(i[n - 1][14]), i[n - 1][15] = 8 * (e.length - 1) & 4294967295, a = 0; a < n; a++) {
                    for (var o = new Array(80), s = 0; s < 16; s++) o[s] = i[a][s];
                    for (s = 16; s < 80; s++) o[s] = C(o[s - 3] ^ o[s - 8] ^ o[s - 14] ^ o[s - 16], 1);
                    var b = r[0],
                        u = r[1],
                        h = r[2],
                        p = r[3],
                        l = r[4];
                    for (s = 0; s < 80; s++) {
                        var y = Math.floor(s / 20),
                            v = C(b, 5) + x(y, u, h, p) + l + t[y] + o[s] >>> 0;
                        l = p, p = h, h = C(u, 30) >>> 0, u = b, b = v
                    }
                    r[0] = r[0] + b >>> 0, r[1] = r[1] + u >>> 0, r[2] = r[2] + h >>> 0, r[3] = r[3] + p >>> 0, r[4] = r[4] + l >>> 0
                }
                return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, 255 & r[0], r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, 255 & r[1], r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, 255 & r[2], r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, 255 & r[3], r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, 255 & r[4]]
            }))
        },
        571: function(e, t, r) {
            function f() {
                var e;
                try {
                    e = t.storage.debug
                } catch (e) {}
                return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
            }(t = e.exports = r(2546)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }, t.formatArgs = function(e) {
                var r = this.useColors;
                if (e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + t.humanize(this.diff), !r) return;
                var f = "color: " + this.color;
                e.splice(1, 0, f, "color: inherit");
                var a = 0,
                    d = 0;
                e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                    "%%" !== e && (a++, "%c" === e && (d = a))
                })), e.splice(d, 0, f)
            }, t.save = function(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (e) {}
            }, t.load = f, t.useColors = function() {
                if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (e) {}
            }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }, t.enable(f())
        },
        572: function(e, t, r) {
            "use strict";
            var f = r(35),
                a = r(194),
                d = a.getNAF,
                n = a.getJSF,
                i = a.assert;

            function c(e, t) {
                this.type = e, this.p = new f(t.p, 16), this.red = t.prime ? f.red(t.prime) : f.mont(this.p), this.zero = new f(0).toRed(this.red), this.one = new f(1).toRed(this.red), this.two = new f(2).toRed(this.red), this.n = t.n && new f(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function o(e, t) {
                this.curve = e, this.type = t, this.precomputed = null
            }
            e.exports = c, c.prototype.point = function() {
                throw new Error("Not implemented")
            }, c.prototype.validate = function() {
                throw new Error("Not implemented")
            }, c.prototype._fixedNafMul = function(e, t) {
                i(e.precomputed);
                var r = e._getDoubles(),
                    f = d(t, 1, this._bitLength),
                    a = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                a /= 3;
                var n, c, o = [];
                for (n = 0; n < f.length; n += r.step) {
                    c = 0;
                    for (var s = n + r.step - 1; s >= n; s--) c = (c << 1) + f[s];
                    o.push(c)
                }
                for (var b = this.jpoint(null, null, null), u = this.jpoint(null, null, null), h = a; h > 0; h--) {
                    for (n = 0; n < o.length; n++)(c = o[n]) === h ? u = u.mixedAdd(r.points[n]) : c === -h && (u = u.mixedAdd(r.points[n].neg()));
                    b = b.add(u)
                }
                return b.toP()
            }, c.prototype._wnafMul = function(e, t) {
                var r = 4,
                    f = e._getNAFPoints(r);
                r = f.wnd;
                for (var a = f.points, n = d(t, r, this._bitLength), c = this.jpoint(null, null, null), o = n.length - 1; o >= 0; o--) {
                    for (var s = 0; o >= 0 && 0 === n[o]; o--) s++;
                    if (o >= 0 && s++, c = c.dblp(s), o < 0) break;
                    var b = n[o];
                    i(0 !== b), c = "affine" === e.type ? b > 0 ? c.mixedAdd(a[b - 1 >> 1]) : c.mixedAdd(a[-b - 1 >> 1].neg()) : b > 0 ? c.add(a[b - 1 >> 1]) : c.add(a[-b - 1 >> 1].neg())
                }
                return "affine" === e.type ? c.toP() : c
            }, c.prototype._wnafMulAdd = function(e, t, r, f, a) {
                var i, c, o, s = this._wnafT1,
                    b = this._wnafT2,
                    u = this._wnafT3,
                    h = 0;
                for (i = 0; i < f; i++) {
                    var p = (o = t[i])._getNAFPoints(e);
                    s[i] = p.wnd, b[i] = p.points
                }
                for (i = f - 1; i >= 1; i -= 2) {
                    var l = i - 1,
                        y = i;
                    if (1 === s[l] && 1 === s[y]) {
                        var v = [t[l], null, null, t[y]];
                        0 === t[l].y.cmp(t[y].y) ? (v[1] = t[l].add(t[y]), v[2] = t[l].toJ().mixedAdd(t[y].neg())) : 0 === t[l].y.cmp(t[y].y.redNeg()) ? (v[1] = t[l].toJ().mixedAdd(t[y]), v[2] = t[l].add(t[y].neg())) : (v[1] = t[l].toJ().mixedAdd(t[y]), v[2] = t[l].toJ().mixedAdd(t[y].neg()));
                        var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                            g = n(r[l], r[y]);
                        for (h = Math.max(g[0].length, h), u[l] = new Array(h), u[y] = new Array(h), c = 0; c < h; c++) {
                            var w = 0 | g[0][c],
                                S = 0 | g[1][c];
                            u[l][c] = m[3 * (w + 1) + (S + 1)], u[y][c] = 0, b[l] = v
                        }
                    } else u[l] = d(r[l], s[l], this._bitLength), u[y] = d(r[y], s[y], this._bitLength), h = Math.max(u[l].length, h), h = Math.max(u[y].length, h)
                }
                var A = this.jpoint(null, null, null),
                    x = this._wnafT4;
                for (i = h; i >= 0; i--) {
                    for (var C = 0; i >= 0;) {
                        var I = !0;
                        for (c = 0; c < f; c++) x[c] = 0 | u[c][i], 0 !== x[c] && (I = !1);
                        if (!I) break;
                        C++, i--
                    }
                    if (i >= 0 && C++, A = A.dblp(C), i < 0) break;
                    for (c = 0; c < f; c++) {
                        var k = x[c];
                        0 !== k && (k > 0 ? o = b[c][k - 1 >> 1] : k < 0 && (o = b[c][-k - 1 >> 1].neg()), A = "affine" === o.type ? A.mixedAdd(o) : A.add(o))
                    }
                }
                for (i = 0; i < f; i++) b[i] = null;
                return a ? A : A.toP()
            }, c.BasePoint = o, o.prototype.eq = function() {
                throw new Error("Not implemented")
            }, o.prototype.validate = function() {
                return this.curve.validate(this)
            }, c.prototype.decodePoint = function(e, t) {
                e = a.toArray(e, t);
                var r = this.p.byteLength();
                if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? i(e[e.length - 1] % 2 == 0) : 7 === e[0] && i(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
                if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
                throw new Error("Unknown point format")
            }, o.prototype.encodeCompressed = function(e) {
                return this.encode(e, !0)
            }, o.prototype._encode = function(e) {
                var t = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", t);
                return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
            }, o.prototype.encode = function(e, t) {
                return a.encode(this._encode(t), e)
            }, o.prototype.precompute = function(e) {
                if (this.precomputed) return this;
                var t = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
            }, o.prototype._hasDoubles = function(e) {
                if (!this.precomputed) return !1;
                var t = this.precomputed.doubles;
                return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
            }, o.prototype._getDoubles = function(e, t) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], f = this, a = 0; a < t; a += e) {
                    for (var d = 0; d < e; d++) f = f.dbl();
                    r.push(f)
                }
                return {
                    step: e,
                    points: r
                }
            }, o.prototype._getNAFPoints = function(e) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var t = [this], r = (1 << e) - 1, f = 1 === r ? null : this.dbl(), a = 1; a < r; a++) t[a] = t[a - 1].add(f);
                return {
                    wnd: e,
                    points: t
                }
            }, o.prototype._getBeta = function() {
                return null
            }, o.prototype.dblp = function(e) {
                for (var t = this, r = 0; r < e; r++) t = t.dbl();
                return t
            }
        },
        85: function(e, t, r) {
            "use strict";
            var f = t;
            f.version = r(2555).version, f.utils = r(194), f.rand = r(932), f.curve = r(1477), f.curves = r(962), f.ec = r(2565), f.eddsa = r(2568)
        },
        958: function(e, t, r) {
            var f = r(2537);
            e.exports = function(e) {
                var t = e.xdomain,
                    r = e.xscheme,
                    a = e.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!t || f)) return new XMLHttpRequest
                } catch (e) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !r && a) return new XDomainRequest
                } catch (e) {}
                if (!t) try {
                    return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
        },
        959: function(e, t, r) {
            var f = r(376),
                a = r(960);

            function d(e) {
                this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.isReactNative = e.isReactNative, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
            }
            e.exports = d, a(d.prototype), d.prototype.onError = function(e, t) {
                var r = new Error(e);
                return r.type = "TransportError", r.description = t, this.emit("error", r), this
            }, d.prototype.open = function() {
                return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
            }, d.prototype.close = function() {
                return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
            }, d.prototype.send = function(e) {
                if ("open" !== this.readyState) throw new Error("Transport not open");
                this.write(e)
            }, d.prototype.onOpen = function() {
                this.readyState = "open", this.writable = !0, this.emit("open")
            }, d.prototype.onData = function(e) {
                var t = f.decodePacket(e, this.socket.binaryType);
                this.onPacket(t)
            }, d.prototype.onPacket = function(e) {
                this.emit("packet", e)
            }, d.prototype.onClose = function() {
                this.readyState = "closed", this.emit("close")
            }
        },
        960: function(e, t, r) {
            function f(e) {
                if (e) return function(e) {
                    for (var t in f.prototype) e[t] = f.prototype[t];
                    return e
                }(e)
            }
            e.exports = f, f.prototype.on = f.prototype.addEventListener = function(e, t) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
            }, f.prototype.once = function(e, t) {
                function r() {
                    this.off(e, r), t.apply(this, arguments)
                }
                return r.fn = t, this.on(e, r), this
            }, f.prototype.off = f.prototype.removeListener = f.prototype.removeAllListeners = f.prototype.removeEventListener = function(e, t) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var r, f = this._callbacks["$" + e];
                if (!f) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                for (var a = 0; a < f.length; a++)
                    if ((r = f[a]) === t || r.fn === t) {
                        f.splice(a, 1);
                        break
                    } return this
            }, f.prototype.emit = function(e) {
                this._callbacks = this._callbacks || {};
                var t = [].slice.call(arguments, 1),
                    r = this._callbacks["$" + e];
                if (r)
                    for (var f = 0, a = (r = r.slice(0)).length; f < a; ++f) r[f].apply(this, t);
                return this
            }, f.prototype.listeners = function(e) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
            }, f.prototype.hasListeners = function(e) {
                return !!this.listeners(e).length
            }
        },
        962: function(e, t, r) {
            "use strict";
            var f, a = t,
                d = r(141),
                n = r(1477),
                i = r(194).assert;

            function c(e) {
                "short" === e.type ? this.curve = new n.short(e) : "edwards" === e.type ? this.curve = new n.edwards(e) : this.curve = new n.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }

            function o(e, t) {
                Object.defineProperty(a, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var r = new c(t);
                        return Object.defineProperty(a, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: r
                        }), r
                    }
                })
            }
            a.PresetCurve = c, o("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: d.sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }), o("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: d.sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }), o("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: d.sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }), o("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: d.sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }), o("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: d.sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }), o("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: d.sha256,
                gRed: !1,
                g: ["9"]
            }), o("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: d.sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                f = r(2564)
            } catch (e) {
                f = void 0
            }
            o("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: d.sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", f]
            })
        }
    }
]);